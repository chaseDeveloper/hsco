﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ACC040109");this.set_classname("UI_ACC040109");this.set_titletext("부동산 임대관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"STTEMNT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"STTEMNT_HRSMN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"file_name\" type=\"STRING\" size=\"256\"/><Column id=\"out_date\" type=\"STRING\" size=\"256\"/><Column id=\"STTEMNT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"STTEMNT_HRSMN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_selectEH",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"STTEMNT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"STTEMNT_HRSMN\" type=\"STRING\" size=\"256\"/><Column id=\"BIZRNO\" type=\"STRING\" size=\"256\"/><Column id=\"MTLTY\" type=\"STRING\" size=\"256\"/><Column id=\"RPRSNTV\" type=\"STRING\" size=\"256\"/><Column id=\"RPRSNTV_IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"SUBMIT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_selectED",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"STTEMNT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"STTEMNT_HRSMN\" type=\"STRING\" size=\"256\"/><Column id=\"EH_BIZRNO\" type=\"STRING\" size=\"256\"/><Column id=\"FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_AR\" type=\"STRING\" size=\"256\"/><Column id=\"MTLTY\" type=\"STRING\" size=\"256\"/><Column id=\"BIZRNO\" type=\"STRING\" size=\"256\"/><Column id=\"MVN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"LVHS_DE\" type=\"STRING\" size=\"256\"/><Column id=\"GTN\" type=\"STRING\" size=\"256\"/><Column id=\"RNTCHRG\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"REGARD_RNTCHRG\" type=\"STRING\" size=\"256\"/><Column id=\"SUPP_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_selectET",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DATA_CNT_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"GTN_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"RNTCHRG_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_AMT_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"REGARD_RNTCHRG_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"SUPP_AMT_SUM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_estateRentList",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"STTEMNT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"STTEMNT_HRSMN\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BULD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_AR\" type=\"STRING\" size=\"256\"/><Column id=\"MTLTY\" type=\"STRING\" size=\"256\"/><Column id=\"BIZRNO\" type=\"STRING\" size=\"256\"/><Column id=\"MVN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"LVHS_DE\" type=\"STRING\" size=\"256\"/><Column id=\"GTN\" type=\"STRING\" size=\"256\"/><Column id=\"MT_RNTCHRG\" type=\"STRING\" size=\"256\"/><Column id=\"GTN_INTR\" type=\"STRING\" size=\"256\"/><Column id=\"MT_RNTCHRG_SM\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGECT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_acc043",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_estateRentList</Col><Col id=\"colId\">BULD_CODE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">건물구분</Col><Col id=\"PK\">Y</Col></Row><Row><Col id=\"colId\">DONG</Col><Col id=\"compId\">ds_estateRentList</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">동</Col><Col id=\"PK\">Y</Col></Row><Row><Col id=\"colId\">FLOOR</Col><Col id=\"compId\">ds_estateRentList</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">층</Col><Col id=\"PK\">Y</Col></Row><Row><Col id=\"colId\">HO</Col><Col id=\"compId\">ds_estateRentList</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">호</Col><Col id=\"PK\">Y</Col></Row><Row><Col id=\"colId\">RENT_AR</Col><Col id=\"compId\">ds_estateRentList</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">임대면적</Col></Row><Row><Col id=\"colId\">MTLTY</Col><Col id=\"compId\">ds_estateRentList</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">상호</Col></Row><Row><Col id=\"colId\">BIZRNO</Col><Col id=\"compId\">ds_estateRentList</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">사업자등록번호</Col></Row><Row><Col id=\"colId\">MVN_DE</Col><Col id=\"compId\">ds_estateRentList</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">입주일자</Col></Row><Row><Col id=\"colId\">LVHS_DE</Col><Col id=\"compId\">ds_estateRentList</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">퇴거일자</Col></Row><Row><Col id=\"compId\">ds_estateRentList</Col><Col id=\"colId\">LVHS_DE</Col><Col id=\"from\">MVN_DE</Col><Col id=\"msgId\">퇴거일자^입주일자</Col></Row><Row><Col id=\"colId\">GTN</Col><Col id=\"compId\">ds_estateRentList</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">보증금</Col></Row><Row><Col id=\"colId\">MT_RNTCHRG</Col><Col id=\"compId\">ds_estateRentList</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">월임대료</Col></Row><Row><Col id=\"colId\">GTN_INTR</Col><Col id=\"compId\">ds_estateRentList</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">보증금이자</Col></Row><Row><Col id=\"colId\">MT_RNTCHRG_SM</Col><Col id=\"compId\">ds_estateRentList</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">월임대료계</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("2");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("3");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title00","absolute","0","43","166","19",null,null,this);_a.set_taborder("4");_a.set_text("부동산임대관리");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","62","1031","5",null,null,this);_a.set_taborder("5");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_SEARCH","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_text("Div00");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","0","0","15",null,null,"0",this.div_SEARCH);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_SEARCH.addChild(_a.name,_a);_a=new Static("sta_EMPL_SE01","absolute","15","5","64","21",null,null,this.div_SEARCH);_a.set_taborder("3");_a.set_text("신고년도");_a.set_cssclass("sta_WFSA_Label");this.div_SEARCH.addChild(_a.name,_a);_a=new Static("sta_EMPL_SE00","absolute","180","5","77","21",null,null,this.div_SEARCH);_a.set_taborder("4");_a.set_text("신고기수");_a.set_cssclass("sta_WFSA_Label");this.div_SEARCH.addChild(_a.name,_a);_a=new Combo("Combo00","absolute","253","5","78","21",null,null,this.div_SEARCH);this.div_SEARCH.addChild(_a.name,_a);var _b=new Dataset("Combo00_innerdataset",this.div_SEARCH.Combo00);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1기예정</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">1기확정</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">2기예정</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">2기확정</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("1");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_displayrowcount("20");_a.style.set_align("center middle");_a.set_value("1");_a.set_text("1기예정");_a.set_cssclass("cmb_WF_Essential");_a.set_index("0");_a=new Static("Static00","absolute","165","0","15",null,null,"0",this.div_SEARCH);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_SEARCH.addChild(_a.name,_a);_a=new Button("Button50","absolute",null,"5","215","21","15",null,this.div_SEARCH);_a.set_taborder("6");_a.set_text("부동산임대공급가액 전자파일생성");_a.set_cssclass("btn_WF_Process");this.div_SEARCH.addChild(_a.name,_a);_a=new Spin("Spin00","absolute","87","5","78","21",null,null,this.div_SEARCH);_a.set_taborder("0");_a.set_value("0");_a.style.set_align("center");_a.set_cssclass("spn_WF_Essential");this.div_SEARCH.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","0","66",null,null,"28","0",this);_a.set_taborder("6");_a.set_binddataset("ds_estateRentList");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"건물구분\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"동\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"층\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"호\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"임대면적\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"상호\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"사업자등록번호\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"입주일자\"/><Cell col=\"9\" text=\"갱신일자\"/><Cell col=\"10\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"퇴거일자\"/><Cell col=\"11\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"보증금\"/><Cell col=\"12\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"월임대료\"/><Cell col=\"13\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"보증금이자\"/><Cell col=\"14\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"월임대료계\"/><Cell col=\"15\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"관리비\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:BULD_CODE\" combodataset=\"ds_acc043\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:DONG\" editlimit=\"20\" editlengthunit=\"utf8\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:FLOOR\" editlimit=\"20\" editlengthunit=\"utf8\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:HO\" editlimit=\"20\" editlengthunit=\"utf8\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:RENT_AR\" mask=\"###,###,###,###,###.##\" editlimitbymask=\"both\"/><Cell col=\"6\" edittype=\"normal\" text=\"bind:MTLTY\" editlimit=\"150\" editlengthunit=\"utf8\"/><Cell col=\"7\" edittype=\"text\" editfilter=\"digit\" text=\"bind:BIZRNO\" mask=\"expr:BIZRNO.length == 10 ? '###-###-####' : '######-#######'\" editlimit=\"13\" editlimitbymask=\"none\" editlengthunit=\"utf8\"/><Cell col=\"8\" displaytype=\"date\" edittype=\"date\" text=\"bind:MVN_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"date\" edittype=\"date\" text=\"bind:UPDT_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" displaytype=\"date\" edittype=\"date\" text=\"bind:LVHS_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:GTN\" mask=\"###,###,###,###,###\" editlimit=\"15\" editlimitbymask=\"integer\" editlengthunit=\"utf8\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:MT_RNTCHRG\" mask=\"###,###,###,###,###\" editlimit=\"15\" editlimitbymask=\"integer\" editlengthunit=\"utf8\"/><Cell col=\"13\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:GTN_INTR\" mask=\"###,###,###,###,###\" editlimit=\"15\" editlimitbymask=\"integer\" editlengthunit=\"utf8\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MT_RNTCHRG_SM\" mask=\"###,###,###,###,###\" editlimit=\"15\" editlimitbymask=\"integer\" editlengthunit=\"utf8\"/><Cell col=\"15\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:MANAGECT\" mask=\"###,###,###,###,###\" editlimit=\"15\" editlimitbymask=\"integer\" editlengthunit=\"utf8\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_print01","absolute",null,"43","170","19","28",null,this);_a.set_taborder("7");_a.set_text("부동산임대공급가액명세서");this.addChild(_a.name,_a);_a=new Button("btn_print02","absolute",null,"43","105","19","202",null,this);_a.set_taborder("8");_a.set_text("건물관리명세서");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_SEARCH,function(_c){_c.set_taborder("0");_c.set_text("Div00");_c.set_cssclass("div_WFSA_Box");});this.div_SEARCH.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_c){_c.set_classname("UI_ACC040109");_c.set_titletext("부동산 임대관리");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_SEARCH.Combo00","value","ds_cond","STTEMNT_HRSMN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_SEARCH.Spin00","value","ds_cond","STTEMNT_YEAR");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("ACC040109.xfdl","lib::comInclude.xjs");this.addIncludeScript("ACC040109.xfdl","mis_lib::misUtil.xjs");this.addIncludeScript("ACC040109.xfdl","lib::comUpDownUtils.xjs");this.registerScript("ACC040109.xfdl",function(){this.File_UpDownManager=null;this.ACC040109_onload=function(_a,_b){this.fn_init_form();this.fn_init_dataset();var _c=[["ds_acc043","ACC043","Y","D","B"]];var _d=function(_e,_f,_g){var _h=this.dateUtils.today();this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"STTEMNT_YEAR",_h.substr(0,4));this.ds_cond.setColumn(0,"STTEMNT_HRSMN",1);this.fn_search();};this.gfn_comboLoad(_c,_d);};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){var _a={useMultiUpload:true,onChange:this.fn_onFileSelected,onSuccess:this.fn_onFileSuccess};this.File_UpDownManager=new this.fileUpDownManager(this,"PMS","FMS");this.File_UpDownManager.init(_a);};this.fn_search=function(){this.ds_estateRentList.clearData();this.fn_transaction("SRCH");};this.fn_save=function(){if(!this.gfn_checkValidation(this.ds_estateRentList,this.ds_validation)){return;}this.fn_transaction("SAVE");};this.fn_insert=function(){var _a=this.ds_estateRentList.addRow();var _b=this.ds_cond.getColumn(0,"STTEMNT_YEAR");var _c=this.ds_cond.getColumn(0,"STTEMNT_HRSMN");this.ds_estateRentList.setColumn(_a,"STTEMNT_YEAR",_b);this.ds_estateRentList.setColumn(_a,"STTEMNT_HRSMN",_c);switch(_c){case "1":this.ds_estateRentList.setColumn(_a,"MVN_DE",_b+"0101");this.ds_estateRentList.setColumn(_a,"LVHS_DE",_b+"0331");break;case "2":this.ds_estateRentList.setColumn(_a,"MVN_DE",_b+"0401");this.ds_estateRentList.setColumn(_a,"LVHS_DE",_b+"0630");break;case "3":this.ds_estateRentList.setColumn(_a,"MVN_DE",_b+"0701");this.ds_estateRentList.setColumn(_a,"LVHS_DE",_b+"0930");break;case "4":this.ds_estateRentList.setColumn(_a,"MVN_DE",_b+"1001");this.ds_estateRentList.setColumn(_a,"LVHS_DE",_b+"1231");break;}};this.fn_delete=function(){if(this.ds_estateRentList.rowposition>0){if(this.gfn_message("confirm.삭제여부")){this.ds_estateRentList.deleteRow(this.ds_estateRentList.rowposition);}}};this.fn_cancel=function(){if(this.gfn_message("confirm.취소여부")){this.ds_estateRentList.reset();this.ds_estateRentList.applyChange();}};this.btn_print01_onclick=function(_a,_b){this.gfn_ReportPopup(this,"MIS/ACC/ACC040109_R01.crf",this.ds_cond);};this.btn_print02_onclick=function(_a,_b){this.gfn_ReportPopup(this,"MIS/ACC/ACC040109_R02.crf",this.ds_cond);};this.fn_transaction=function(_a){switch(_a){case "SRCH":var _b="hsco/mis/acc/ACC040109/estateRentList.do";var _c="input1=ds_cond";var _d="ds_estateRentList=output1";break;case "SAVE":var _b="hsco/mis/acc/ACC040109/estateRentCUD.do";var _c="input1=ds_estateRentList:U";var _d="";break;case "CREATE":var _b="hsco/mis/acc/ACC040109/createFile.do";var _c="input1=ds_cond01";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){switch(_a){case "SRCH":break;case "SAVE":break;default:break;}this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "SRCH":break;case "SAVE":this.gfn_message("success.처리.성공");this.fn_search();break;default:break;}}};this.div_SEARCH_Button50_onclick=function(_a,_b){var _c=this.dateUtils.today();var _d="E1248217026.V120";this.ds_cond01.clearData();this.ds_cond01.addRow();this.ds_cond01.setColumn(0,"STTEMNT_HRSMN",this.ds_cond.getColumn(0,"STTEMNT_HRSMN"));this.ds_cond01.setColumn(0,"STTEMNT_YEAR",this.ds_cond.getColumn(0,"STTEMNT_YEAR"));this.ds_cond01.setColumn(0,"file_name",_d);this.ds_cond01.setColumn(0,"out_date",_c.substr(0,8));var _e="hsco/mis/acc/ACC040109/createFile.do";var _f="input1=ds_cond01";this.File_UpDownManager.dataFileDownload(_e,_f,_d);};});this.on_initEvent=function(){this.ds_acc043.addEventHandler("onrowposchanged",this.ds_frmtnPd_onrowposchanged,this);this.addEventHandler("onload",this.ACC040109_onload,this);this.Static36.addEventHandler("onclick",this.Static36_onclick,this);this.div_SEARCH.Button50.addEventHandler("onclick",this.div_SEARCH_Button50_onclick,this);this.btn_print01.addEventHandler("onclick",this.btn_print01_onclick,this);this.btn_print02.addEventHandler("onclick",this.btn_print02_onclick,this);};this.loadIncludeScript("ACC040109.xfdl");};})();