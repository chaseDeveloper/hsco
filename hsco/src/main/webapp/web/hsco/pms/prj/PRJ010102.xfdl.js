﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("PRJ010102");this.set_classname("PRJ010102");this.set_titletext("표준활동분류");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ACTV_CS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_sdActvCsCd",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ACTV_CS_SN\" type=\"STRING\" size=\"256\"/><Column id=\"UPP_ACTV_CS_SN\" type=\"STRING\" size=\"256\"/><Column id=\"UPP_ACTV_CS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACTV_CS_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"ACTV_CS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACTV_CS_NM_CAT\" type=\"STRING\" size=\"256\"/><Column id=\"PRR_RNK\" type=\"STRING\" size=\"256\"/><Column id=\"US_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CTGRY_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORD\" type=\"STRING\" size=\"256\"/><Column id=\"FST_INP_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"FST_INP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LST_CHG_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"LST_CHG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_sdActvCsCd</Col><Col id=\"colId\">ACTV_CS_NM</Col><Col id=\"msgId\">활동분류 명</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_sdActvCsCd</Col><Col id=\"colId\">PRR_RNK</Col><Col id=\"msgId\">우선순위</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_sdActvAtchFl</Col><Col id=\"colId\">DOC_CS_SN</Col><Col id=\"msgId\">[표준첨부파일] 표준문서 명</Col><Col id=\"notNull\">Y</Col><Col id=\"PK\">Y</Col></Row><Row><Col id=\"colId\">PRR_RNK</Col><Col id=\"compId\">ds_sdActvAtchFl</Col><Col id=\"msgId\">[표준첨부파일] 우선순위</Col><Col id=\"notNull\">Y</Col><Col id=\"PK\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_sdActvAtchFl",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ACTV_CS_SN\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_CS_SN\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_CS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ESN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DPL_RGS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"US_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRR_RNK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_condSub",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ACTV_CS_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","488","0","38","5",null,null,this.div_search);_a.set_taborder("29");_a.set_text("5");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");_a.set_visible("false");this.div_search.addChild(_a.name,_a);_a=new Static("Static37","absolute","488",null,"38","5",null,"0",this.div_search);_a.set_taborder("30");_a.set_text("5");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");_a.set_visible("false");this.div_search.addChild(_a.name,_a);_a=new Static("sta_ACNT_CODE","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("10");_a.set_text("활동명");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","5","15",null,null,"5",this.div_search);_a.set_taborder("9");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_docCsNm","absolute","79","5","279","21",null,null,this.div_search);_a.set_taborder("32");_a.set_lengthunit("utf8");_a.set_maxlength("150");this.div_search.addChild(_a.name,_a);_a=new Grid("grd_sdActvCsCd","absolute","0","67",null,null,"601","0",this);_a.set_taborder("6");_a.set_binddataset("ds_sdActvCsCd");_a.set_cellsizingtype("col");_a.set_autoenter("select");_a.set_extendsizetype("row");_a.set_treeinitstatus("expand,all");_a.set_treeusecheckbox("false");_a.set_treeuseexpandkey("true");_a.set_treeuseimage("false");_a.set_treeuseline("true");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"400\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"표준활동분류\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" style=\"align:left middle;background: ;\" text=\"bind:ACTV_CS_NM_CAT\" expandshow=\"hide\" treelevel=\"bind:ACTV_CS_LVL\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_acntCode","absolute","0","43",null,"19","940",null,this);_a.set_taborder("3");_a.set_text("표준활동분류");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","33",null,"10","28",null,this);_a.set_taborder("2");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","62",null,"5","28",null,this);_a.set_taborder("5");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"93","563","27","28",null,this);_a.set_taborder("27");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static03","absolute",null,"119","563","27","28",null,this);_a.set_taborder("28");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static37","absolute",null,"67","563","27","28",null,this);_a.set_taborder("29");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("sta_BSNS_SE","absolute",null,"67","97","27","494",null,this);_a.set_taborder("7");_a.set_text("활동분류코드");_a.set_wordwrap("char");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("sta_UPPER_ACNT_CODE","absolute",null,"93","97","27","494",null,this);_a.set_taborder("13");_a.set_text("상위활동코드");_a.set_wordwrap("char");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("sta_ACNT_LEVEL","absolute",null,"119","97","27","494",null,this);_a.set_taborder("21");_a.set_text("활동레벨");_a.set_wordwrap("char");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static42","absolute","458","33","10",null,null,"0",this);_a.set_taborder("4");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","1031","0","15","735",null,null,this);_a.set_taborder("24");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute",null,"0","13","735","0",null,this);_a.set_taborder("25");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_UPPER_ACNT_NM","absolute",null,"93","84","27","312",null,this);_a.set_taborder("15");_a.set_text("상위활동명");_a.set_wordwrap("char");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","468","223",null,"10","28",null,this);_a.set_taborder("34");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static07","absolute",null,"145","563","27","28",null,this);_a.set_taborder("35");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("sta_ACNT_LEVEL00","absolute",null,"145","97","27","494",null,this);_a.set_taborder("36");_a.set_text("사용여부");_a.set_wordwrap("char");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("sta_BSNS_SE00","absolute",null,"67","84","27","312",null,this);_a.set_taborder("37");_a.set_text("활동분류 명");_a.set_wordwrap("char");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static09","absolute",null,"171","563","27","28",null,this);_a.set_taborder("39");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("sta_ACNT_LEVEL01","absolute",null,"171","97","27","494",null,this);_a.set_taborder("38");_a.set_text("우선순위");_a.set_wordwrap("char");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new CheckBox("CheckBox00","absolute",null,"148","17","21","475",null,this);_a.set_taborder("40");_a.set_falsevalue("0");_a.set_truevalue("1");this.addChild(_a.name,_a);_a=new Button("btn_Add","absolute",null,"43","64","19","735",null,this);_a.set_taborder("44");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.addChild(_a.name,_a);_a=new Button("btn_Delete","absolute",null,"43","64","19","668",null,this);_a.set_taborder("45");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");_a.set_enable("true");_a.set_visible("true");this.addChild(_a.name,_a);_a=new Button("btn_Cancel","absolute",null,"43","64","19","601",null,this);_a.set_taborder("46");_a.set_text("취소");_a.set_cssclass("btn_WF_Gridcnl");_a.set_enable("true");_a.set_visible("true");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"197","563","27","28",null,this);_a.set_taborder("49");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("sta_ACNT_LEVEL02","absolute",null,"197","97","27","494",null,this);_a.set_taborder("47");_a.set_text("전자결재여부");_a.set_wordwrap("char");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new CheckBox("CheckBox01","absolute",null,"200","17","21","475",null,this);_a.set_taborder("48");_a.set_falsevalue("0");_a.set_truevalue("1");this.addChild(_a.name,_a);_a=new Static("sta_acntCode00","absolute",null,"232","151","19","438",null,this);_a.set_taborder("50");_a.set_text("표준첨부파일관리");_a.set_cssclass("sta_WF_Title03");this.addChild(_a.name,_a);_a=new Static("Static10","absolute","468","251",null,"5","28",null,this);_a.set_taborder("51");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_sdActvAtchFl","absolute",null,"256","563",null,"28","0",this);_a.set_taborder("52");_a.set_binddataset("ds_sdActvAtchFl");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a.set_treeusecheckbox("false");_a.set_treeuseimage("false");_a.set_treeinitstatus("expand,all");_a.set_treeuseexpandkey("true");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"220\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell cssclass=\"Cellgrd_WF_HeadEssential\" text=\"표준문서분류\"/><Cell col=\"1\" text=\"중복여부\"/><Cell col=\"2\" text=\"필수여부\"/><Cell col=\"3\" text=\"사용여부\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"우선순위\"/></Band><Band id=\"body\"><Cell edittype=\"expand\" text=\"bind:DOC_CS_NM\" expandshow=\"expr:dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT ? 'show':'hide'\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ESN_YN\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:DPL_RGS_YN\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:US_YN\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" text=\"bind:PRR_RNK\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_AddSub","absolute",null,"232","64","19","160",null,this);_a.set_taborder("53");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.addChild(_a.name,_a);_a=new Button("btn_DeleteSub","absolute",null,"232","64","19","93",null,this);_a.set_taborder("54");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");_a.set_enable("true");_a.set_visible("true");this.addChild(_a.name,_a);_a=new Button("btn_CancelSub","absolute",null,"232","64","19","26",null,this);_a.set_taborder("55");_a.set_text("취소");_a.set_cssclass("btn_WF_Gridcnl");_a.set_enable("true");_a.set_visible("true");this.addChild(_a.name,_a);_a=new Edit("edt_YEAR","absolute",null,"70","94","21","398",null,this);_a.set_taborder("56");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");_a.style.set_align("center middle");_a.getSetter("type").set("string");_a.getSetter("limitbymask").set("both");this.addChild(_a.name,_a);_a=new Edit("edt_UPPER_ACNT_CODE","absolute",null,"96","94","21","398",null,this);_a.set_taborder("57");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");_a.style.set_padding("1 21 0 6");_a.style.set_align("center middle");_a.getSetter("type").set("string");_a.getSetter("limitbymask").set("both");this.addChild(_a.name,_a);_a=new Edit("edt_BUDGET_ACNT_NM","absolute",null,"70","279","21","31",null,this);_a.set_taborder("58");_a.set_lengthunit("utf8");_a.set_maxlength("300");_a.set_cssclass("edt_WF_Essential");this.addChild(_a.name,_a);_a=new Edit("edt_BUDGET_ACNT_NM00","absolute",null,"96","279","21","31",null,this);_a.set_taborder("59");_a.set_lengthunit("utf8");_a.set_maxlength("300");_a.set_cssclass("edt_WF_Readonly");this.addChild(_a.name,_a);_a=new Spin("Spin01","absolute",null,"122","94","21","398",null,this);_a.set_taborder("60");_a.set_value("0");_a.set_cssclass("spn_WF_Readonly");_a.set_readonly("true");this.addChild(_a.name,_a);_a=new Spin("Spin00","absolute",null,"174","94","21","398",null,this);_a.set_taborder("61");_a.set_value("0");_a.set_cssclass("spn_WF_Essential");_a.set_max("99");this.addChild(_a.name,_a);_a=new Button("btn_pop","absolute",null,"96","14","21","398",null,this);_a.set_taborder("31");_a.set_cssclass("btn_WF_Search");this.addChild(_a.name,_a);_a=new Static("sta_title00","absolute",null,"175","207","19","187",null,this);_a.set_taborder("62");_a.set_text("※ 같은 레벨의 우선순위 입니다.");_a.style.set_color("blue");_a.style.set_padding("0 0 0 0");_a.style.set_align("left middle");_a.style.set_font("bold 9 Gulim");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("PRJ010102");_b.set_titletext("표준활동분류");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.edt_docCsNm","value","ds_cond","ACTV_CS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","CheckBox00","value","ds_sdActvCsCd","US_YN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","CheckBox01","value","ds_sdActvCsCd","APRV_YN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","edt_YEAR","value","ds_sdActvCsCd","ACTV_CS_SN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","edt_UPPER_ACNT_CODE","value","ds_sdActvCsCd","UPP_ACTV_CS_SN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","edt_BUDGET_ACNT_NM","value","ds_sdActvCsCd","ACTV_CS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","edt_BUDGET_ACNT_NM00","value","ds_sdActvCsCd","UPP_ACTV_CS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","Spin01","value","ds_sdActvCsCd","ACTV_CS_LVL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","Spin00","value","ds_sdActvCsCd","PRR_RNK");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("PRJ010102.xfdl","lib::comInclude.xjs");this.addIncludeScript("PRJ010102.xfdl","mis_lib::misUtil.xjs");this.registerScript("PRJ010102.xfdl",function(){var _a= -1;this.PRJ010102_oninit=function(_b,_c){};this.PRJ010102_onload=function(_b,_c){this.fn_init_form();this.fn_init_dataset();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.ds_cond.clearData();var _b=this.ds_cond.addRow();this.fn_search();};this.fn_init_dataset=function(){};this.fn_search=function(){this.ds_sdActvCsCd.clearData();this.ds_sdActvAtchFl.clearData();this.fn_transaction("selectDsMain");};this.fn_save=function(){if(!this.comUtils.isDatasetUpdated(this.ds_sdActvCsCd)&&!this.comUtils.isDatasetUpdated(this.ds_sdActvAtchFl)){this.gfn_message("comm.데이터.변경.없음");return false;}if(!this.gfn_checkValidation_NoUpdChk(this.ds_sdActvCsCd,this.ds_validation)){return;}if(!this.gfn_checkValidation_NoUpdChk(this.ds_sdActvAtchFl,this.ds_validation)){return;}if(this.gfn_message("confirm.저장.여부")){_a=this.ds_sdActvCsCd.rowposition;this.fn_transaction("saveDs");}};this.fn_transaction=function(_b){switch(_b){case "selectDsMain":var _c="hsco/pms/prj/PRJ010102/selectDsMain.do";var _d="input1=ds_cond";var _e="ds_sdActvCsCd=output1";break;case "saveDs":var _c="hsco/pms/prj/PRJ010102/saveDsMain.do";var _d="input1=ds_sdActvCsCd:U input2=ds_sdActvAtchFl:U";var _e="";break;case "selectDsSub":var _c="hsco/pms/prj/PRJ010102/selectDsSub.do";var _d="input1=ds_condSub";var _e="ds_sdActvAtchFl=output1";break;}Ex.core.tran(this,_b,_c,_d,_e);};this.fn_callBack=function(_b,_c,_d){if(_c!=0){this.gfn_callback_message(_b,_c,_d);}if(_c!=0){}else{switch(_b){case "selectDsMain":if(_a> -1){this.ds_sdActvCsCd.set_rowposition(_a);_a= -1;}this.ds_condSub.clearData();var _e=this.ds_condSub.addRow();this.ds_condSub.setColumn(_e,"ACTV_CS_SN",this.ds_sdActvCsCd.getColumn(this.ds_sdActvCsCd.rowposition,"ACTV_CS_SN"));this.fn_transaction("selectDsSub");break;case "saveDs":this.gfn_message("success.처리.성공");this.fn_search();break;case "selectDsSub":break;}}};this.ds_sdActvCsCd_onrowposchanged=function(_b,_c){if(_c.newrow> -1){this.ds_condSub.clearData();var _d=this.ds_condSub.addRow();this.ds_condSub.setColumn(_d,"ACTV_CS_SN",this.ds_sdActvCsCd.getColumn(this.ds_sdActvCsCd.rowposition,"ACTV_CS_SN"));this.fn_transaction("selectDsSub");}else{this.ds_sdActvAtchFl.clearData();}};this.ds_sdActvCsCd_canrowposchange=function(_b,_c){if(this.comUtils.isDatasetUpdated(this.ds_sdActvAtchFl)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}};this.btn_Add_onclick=function(_b,_c){var _d=this.ds_sdActvCsCd.rowposition;var _e=this.ds_sdActvCsCd.insertRow(nexacro.toNumber(_d)+1);this.ds_sdActvCsCd.setColumn(_e,"UPP_ACTV_CS_SN",this.ds_sdActvCsCd.getColumn(_d,"ACTV_CS_SN"));this.ds_sdActvCsCd.setColumn(_e,"UPP_ACTV_CS_NM",this.ds_sdActvCsCd.getColumn(_d,"ACTV_CS_NM"));this.ds_sdActvCsCd.setColumn(_e,"US_YN","0");this.ds_sdActvCsCd.setColumn(_e,"APRV_YN","0");this.ds_sdActvCsCd.setColumn(_e,"ACTV_CS_LVL",nexacro.toNumber(this.ds_sdActvCsCd.getColumn(_d,"ACTV_CS_LVL"),0,0,0)+1);};this.btn_Delete_onclick=function(_b,_c){if(!this.gfn_message("confirm.삭제여부")){return false;}var _d=this.ds_sdActvCsCd.rowposition;var _e=this.ds_sdActvCsCd.getColumn(_d,"ACTV_CS_SN");var _f=this.ds_sdActvCsCd.getColumn(_d+1,"UPP_ACTV_CS_SN");if(_e==_f){this.gfn_message("fail.삭제.불가","하위활동이 존재하는 활동은");return false;}this.ds_sdActvCsCd.deleteRow(this.ds_sdActvCsCd.rowposition);this.ds_condSub.clearData();var _g=this.ds_condSub.addRow();this.ds_condSub.setColumn(_g,"ACTV_CS_SN",this.ds_sdActvCsCd.getColumn(this.ds_sdActvCsCd.rowposition,"ACTV_CS_SN"));this.fn_transaction("selectDsSub");};this.btn_Cancel_onclick=function(_b,_c){if(Ex.util.isUpdated(this.ds_sdActvCsCd)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}this.ds_sdActvCsCd.reset();this.ds_sdActvCsCd.applyChange();};this.btn_AddSub_onclick=function(_b,_c){if(this.ds_sdActvCsCd.rowposition> -1){var _d=this.ds_sdActvAtchFl.addRow();this.ds_sdActvAtchFl.setColumn(_d,"ACTV_CS_SN",this.ds_sdActvCsCd.getColumn(this.ds_sdActvCsCd.rowposition,"ACTV_CS_SN"));this.ds_sdActvAtchFl.setColumn(_d,"US_YN",'1');this.ds_sdActvAtchFl.setColumn(_d,"PRR_RNK",this.ds_sdActvAtchFl.getRowCount());}};this.btn_DeleteSub_onclick=function(_b,_c){if(!this.gfn_message("confirm.삭제여부")){return false;}this.ds_sdActvAtchFl.deleteRow(this.ds_sdActvAtchFl.rowposition);};this.btn_CancelSub_onclick=function(_b,_c){if(Ex.util.isUpdated(this.ds_sdActvAtchFl)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}this.ds_sdActvAtchFl.reset();this.ds_sdActvAtchFl.applyChange();};this.fn_popup_onclick=function(_b,_c){var _d={arg_0:this};switch(_b.name){case "btn_pop":this.gfn_popup(_b.name,600,500,"표준활동분류",_d,"pms_prj::PRJ010102_P01.xfdl","fn_popupCallBack",true);break;case "grd_sdActvAtchFl":this.gfn_popup(_b.name,600,500,"표준문서분류",_d,"pms_prj::PRJ010101_P01.xfdl","fn_popupCallBack",true);break;}};this.fn_popupCallBack=function(_b,_c){var _d=new Dataset();_d.loadXML(_c);if(_d.rowcount==0){return;}switch(_b){case "btn_pop":var _e=this.ds_sdActvCsCd.rowposition;if(this.ds_sdActvCsCd.getColumn(_e,"ACTV_CS_SN")==_d.getColumn(0,"ACTV_CS_LVL")){alert("현재 활동분류와 상위 활동문류가 같습니다");return false;}else{this.ds_sdActvCsCd.setColumn(_e,"UPP_ACTV_CS_SN",_d.getColumn(0,"ACTV_CS_SN"));this.ds_sdActvCsCd.setColumn(_e,"UPP_ACTV_CS_NM",_d.getColumn(0,"ACTV_CS_NM"));this.ds_sdActvCsCd.setColumn(_e,"ACTV_CS_LVL",nexacro.toNumber(_d.getColumn(0,"ACTV_CS_LVL"),0,0,0)+1);}break;case "grd_sdActvAtchFl":var _e=this.ds_sdActvAtchFl.rowposition;this.ds_sdActvAtchFl.setColumn(_e,"DOC_CS_SN",_d.getColumn(0,"DOC_CS_SN"));this.ds_sdActvAtchFl.setColumn(_e,"DOC_CS_NM",_d.getColumn(0,"DOC_CS_NM"));break;}};});this.on_initEvent=function(){this.ds_cond.addEventHandler("oncolumnchanged",this.ds_cond_oncolumnchanged,this);this.ds_sdActvCsCd.addEventHandler("onrowposchanged",this.ds_sdActvCsCd_onrowposchanged,this);this.ds_sdActvCsCd.addEventHandler("canrowposchange",this.ds_sdActvCsCd_canrowposchange,this);this.ds_condSub.addEventHandler("oncolumnchanged",this.ds_cond_oncolumnchanged,this);this.addEventHandler("onload",this.PRJ010102_onload,this);this.addEventHandler("oninit",this.PRJ010102_oninit,this);this.btn_Add.addEventHandler("onclick",this.btn_Add_onclick,this);this.btn_Delete.addEventHandler("onclick",this.btn_Delete_onclick,this);this.btn_Cancel.addEventHandler("onclick",this.btn_Cancel_onclick,this);this.grd_sdActvAtchFl.addEventHandler("onexpanddown",this.fn_popup_onclick,this);this.btn_AddSub.addEventHandler("onclick",this.btn_AddSub_onclick,this);this.btn_DeleteSub.addEventHandler("onclick",this.btn_DeleteSub_onclick,this);this.btn_CancelSub.addEventHandler("onclick",this.btn_CancelSub_onclick,this);this.edt_BUDGET_ACNT_NM00.addEventHandler("oneditclick",this.edt_BUDGET_ACNT_NM00_oneditclick,this);this.btn_pop.addEventHandler("onclick",this.fn_popup_onclick,this);};this.loadIncludeScript("PRJ010102.xfdl");};})();