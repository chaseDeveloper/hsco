﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ITM050101");this.set_classname("codeMng");this.set_titletext("용어사전");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_grid",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SN\" type=\"STRING\" size=\"255\"/><Column id=\"WORD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ENG_WORD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ABRV_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WORD_SE\" type=\"STRING\" size=\"256\"/><Column id=\"THEMA_RELM\" type=\"STRING\" size=\"256\"/><Column id=\"WORD_RQESTDE\" type=\"STRING\" size=\"256\"/><Column id=\"WORD_RGSDE\" type=\"STRING\" size=\"256\"/><Column id=\"WORD_REGISTER\" type=\"STRING\" size=\"256\"/><Column id=\"WORD_DFN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"WORD_DFN2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a._setContents("<ColumnInfo><Column id=\"S_WORD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_use",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">사용</Col></Row><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">미사용</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_word_se",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_thema_relm",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_group",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_group00",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0%","0",null,"33","2.64%",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");_a.set_scrollbars("none");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","15","5","63","21",null,null,this.div_search);_a.set_taborder("14");_a.set_text("용어명");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_wordNm","absolute","87","5","942","21",null,null,this.div_search);_a.set_taborder("0");_a.set_maxlength("100");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","97.36%","0",null,"735","1.23%",null,this);_a.set_taborder("11");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","98.77%","0",null,"735","0%",null,this);_a.set_taborder("12");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static84","absolute","0","40","61","27",null,null,this);_a.set_taborder("13");_a.set_text("용어명");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static51","absolute","60","40","971","27",null,null,this);_a.set_taborder("14");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static11","absolute","60","170","971","88",null,null,this);_a.set_taborder("15");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","0","170","61","88",null,null,this);_a.set_taborder("16");_a.set_text("정의");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new TextArea("txt_wordDfn","absolute","63","173","966","82",null,null,this);_a.set_taborder("10");_a.set_maxlength("4000");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","66","61","27",null,null,this);_a.set_taborder("17");_a.set_text("영문명");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","60","66","971","27",null,null,this);_a.set_taborder("18");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Combo("cmb_usrAt","absolute","864","43","165","21",null,null,this);this.addChild(_a.name,_a);var _b=new Dataset("cmb_usrAt_innerdataset",this.cmb_usrAt);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">화성도시공사</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">화성도시공사</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">화성도시공사</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("2");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_innerdataset("@ds_use");_a=new Static("Static04","absolute","792","40","68","27",null,null,this);_a.set_taborder("19");_a.set_text("상태");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Edit("edt_wordNm","absolute","63","43","587","21",null,null,this);_a.set_taborder("1");_a.set_cssclass("edt_WF_Essential");_a.set_maxlength("100");this.addChild(_a.name,_a);_a=new Edit("edt_engWordNm","absolute","63","69","587","21",null,null,this);_a.set_taborder("3");_a.set_maxlength("100");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","92","61","27",null,null,this);_a.set_taborder("20");_a.set_text("약어명");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","60","92","971","27",null,null,this);_a.set_taborder("21");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Edit("edt_abrvNm","absolute","63","95","587","21",null,null,this);_a.set_taborder("4");_a.set_maxlength("100");this.addChild(_a.name,_a);_a=new Static("Static07","absolute","0","118","61","27",null,null,this);_a.set_taborder("22");_a.set_text("구분");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","60","118","971","27",null,null,this);_a.set_taborder("23");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","0","144","61","27",null,null,this);_a.set_taborder("24");_a.set_text("요청일");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static10","absolute","60","144","971","27",null,null,this);_a.set_taborder("25");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Combo("cmb_wordSe","absolute","63","121","240","21",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("5");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_innerdataset("@ds_word_se");_a.set_index("-1");_a=new Static("Static13","absolute","338","118","68","27",null,null,this);_a.set_taborder("26");_a.set_text("주제영역");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Combo("cmb_themaRelm","absolute","410","121","240","21",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("6");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_innerdataset("@ds_thema_relm");_a=new Static("Static14","absolute","237","144","68","27",null,null,this);_a.set_taborder("28");_a.set_text("등록일");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static15","absolute","467","144","68","27",null,null,this);_a.set_taborder("30");_a.set_text("등록자");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Edit("edt_wordRegister","absolute","539","147","110","21",null,null,this);_a.set_taborder("9");_a.set_maxlength("100");this.addChild(_a.name,_a);_a=new Grid("Grid02","absolute","0%","293",null,null,"2.64%","0",this);_a.set_taborder("32");_a.set_binddataset("ds_grid");_a.set_autoenter("select");_a.set_autofittype("none");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"400\"/><Column size=\"180\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"font:9 돋움;\" text=\"용어명\"/><Cell col=\"1\" style=\"font:9 돋움;\" text=\"영문명\"/><Cell col=\"2\" style=\"font:9 돋움;\" text=\"약어명\"/><Cell col=\"3\" style=\"font:9 돋움;\" text=\"구분\"/><Cell col=\"4\" style=\"font:9 돋움;\" text=\"정의\"/><Cell col=\"5\" style=\"font:9 돋움;\" text=\"주제영역\"/><Cell col=\"6\" style=\"font:9 돋움;\" text=\"요청일\"/><Cell col=\"7\" style=\"font:9 돋움;\" text=\"등록일\"/><Cell col=\"8\" style=\"font:9 돋움;\" text=\"등록자\"/><Cell col=\"9\" style=\"font:9 돋움;\" text=\"상태\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:WORD_NM\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:ENG_WORD_NM\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:ABRV_NM\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:WORD_SE\" combodataset=\"ds_word_se\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:WORD_DFN2\"/><Cell col=\"5\" displaytype=\"combo\" text=\"bind:THEMA_RELM\" combodataset=\"ds_thema_relm\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:WORD_RQESTDE\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:WORD_RGSDE\"/><Cell col=\"8\" text=\"bind:WORD_REGISTER\"/><Cell col=\"9\" displaytype=\"combo\" edittype=\"none\" text=\"bind:USE_AT\" combodataset=\"ds_use\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Calendar("cal_wordRqestde","absolute","63","147","110","21",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("7");_a.set_dateformat("yyyy-MM-dd");_a=new Calendar("cal_wordRgsde","absolute","309","147","110","21",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("8");_a.set_dateformat("yyyy-MM-dd");_a=new Button("btn_excel_down01","absolute",null,"268","28","19","28",null,this);_a.set_taborder("35");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Static("Static16","absolute","0%","258",null,"10","2.64%",null,this);_a.set_taborder("36");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static27","absolute","37.2%","287",null,"5","2.55%",null,this);_a.set_taborder("37");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_c){_c.set_taborder("0");_c.set_cssclass("div_WFSA_Box");_c.set_scrollbars("none");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_c){_c.set_classname("codeMng");_c.set_titletext("용어사전");});this.addLayout(_a.name,_a);_a=new BindItem("item49","cmb_usrAt","value","ds_grid","USE_AT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item44","edt_wordNm","value","ds_grid","WORD_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","edt_engWordNm","value","ds_grid","ENG_WORD_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","edt_abrvNm","value","ds_grid","ABRV_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","cmb_wordSe","value","ds_grid","WORD_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","cmb_themaRelm","value","ds_grid","THEMA_RELM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","edt_wordRegister","value","ds_grid","WORD_REGISTER");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item31","cal_wordRqestde","value","ds_grid","WORD_RQESTDE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","cal_wordRgsde","value","ds_grid","WORD_RGSDE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","txt_wordDfn","value","ds_grid","WORD_DFN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_search.edt_wordNm","visible","ds_cond","S_WORD_NM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("ITM050101.xfdl","lib::comInclude.xjs");this.addIncludeScript("ITM050101.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("ITM050101.xfdl",function(){this.ITM050101_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();this.fn_init();};this.ITM050101_onload=function(_a,_b){this.fn_loadCombo();this.fn_getCode();};this.ITM050101_ontimer=function(_a,_b){this.killTimer(1);this.div_search.edt_wordNm.setFocus();};this.fn_getCode=function(){this.gfn_initCondDs(this,this.div_search);var _a=[['ds_word_se','ITMB02','Y','D','G'],['ds_thema_relm','ITMB03','Y','D','G']];var _b=function(_c,_d,_e){};this.gfn_comboLoad(_a,_b);};this.fn_init_form=function(){this.gfn_initForm(this);this.checkDs.push(this.ds_grid);};this.fn_init_dataset=function(){};this.fn_loadCombo=function(){};this.fn_search=function(){if(this.div_search.edt_wordNm.value==undefined||this.div_search.edt_wordNm.value==""){alert('용어명을 필수 조회조건입니다.');return false;}this.fn_transaction("selectList");};this.fn_save=function(){if(!this.comUtils.isDatasetUpdated(this.ds_grid)){alert("저장할 내역이 없습니다.");return false;}if(application.confirm("변경된 내용을 저장하시겠습니까?")){if(this.fn_check()){this.fn_transaction("saveList");}}};this.fn_transaction=function(_a){switch(_a){case "selectList":this.ds_cond.addRow();var _b="/hsco/etc/itm/ITM050101/ITM050101List.do";var _c="input1=ds_cond";var _d="ds_grid=output1";this.ds_cond.setColumn(0,"S_WORD_NM",this.div_search.edt_wordNm.value);break;case "saveList":var _b="/hsco/etc/itm/ITM050101/ITM050101CUD.do";var _e="input1=ds_grid:U";var _c=_e;var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b<0){this.gfn_callBackMsg(_a,_b,_c);return;}switch(_a){case "saveList":this.gfn_callBackMsg(_a,_b,_c);break;case "saveDetailList":this.gfn_callBackMsg(_a,_b,_c);break;default:break;}};this.fn_insert=function(_a,_b){var _c=this.ds_grid.getRowType(this.ds_grid.rowposition);var _d=this.ds_grid.addRow();this.WORD_RQESTDE.set_value(this.dateUtils.today());this.WORD_RGSDE.set_value(this.dateUtils.today());};this.fn_delete=function(_a,_b){var _c=this.ds_grid.rowposition;var _d=this.ds_grid.getRowType(_c);this.ds_grid.deleteRow(_c);};this.btn_excel_down01_onclick=function(_a,_b){this.gfn_exportExcel(this.Grid02,"exportExl");};this.Grid02_onheadclick=function(_a,_b){this.gfn_gridSort(_a,_b);};this.fn_check=function(){var _a="";var _b="";var _c=this.ds_grid.rowposition;if(_c> -1){ck1=this.ds_grid.getColumn(_c,"WORD_NM");if(!ck1){alert("용어명은 필수입력 사항입니다.");return false;}else{return true;}return true;}else{return true;}};this.div_search_edt_wordNm_onkeyup=function(_a,_b){if(_b.keycode==13){this.fn_search();}};});this.on_initEvent=function(){this.ds_grid.addEventHandler("onrowposchanged",this.ds_grid_onrowposchanged,this);this.addEventHandler("onload",this.ITM050101_onload,this);this.addEventHandler("oninit",this.ITM050101_oninit,this);this.addEventHandler("ontimer",this.ITM050101_ontimer,this);this.div_search.edt_wordNm.addEventHandler("onkeyup",this.div_search_edt_wordNm_onkeyup,this);this.Grid02.addEventHandler("onheadclick",this.Grid02_onheadclick,this);this.btn_excel_down01.addEventHandler("onclick",this.btn_excel_down01_onclick,this);};this.loadIncludeScript("ITM050101.xfdl");};})();