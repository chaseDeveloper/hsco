﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM060502");this.set_classname("HRM060502");this.set_titletext("다면평가표 작성");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_mlssAprsr",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"EVL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"HT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"APRSR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SCORE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EVL_GRAD\" type=\"STRING\" size=\"256\"/><Column id=\"PRSEN_AT\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_evlTable",this);_a._setContents("<ColumnInfo><Column id=\"EVL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"HT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"APRSR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"QESITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_SE\" type=\"STRING\" size=\"5\"/><Column id=\"EVL_IEM\" type=\"STRING\" size=\"256\"/><Column id=\"GHVR_IX\" type=\"STRING\" size=\"2000\"/><Column id=\"ALLOT\" type=\"INT\" size=\"10\"/><Column id=\"SCORE\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_gradDistrb",this);_a._setContents("<ColumnInfo><Column id=\"EVL_GRAD\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_GRAD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_NMPR_CNT\" type=\"INT\" size=\"256\"/><Column id=\"MIN_NMPR_CNT\" type=\"INT\" size=\"256\"/><Column id=\"GRAD_CNT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a._setContents("<ColumnInfo><Column id=\"EVL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"HT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"APRSR_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"OFCPS_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond01",this);_a._setContents("<ColumnInfo><Column id=\"EVL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"HT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"APRSR_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_htSe",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">상반기</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">하반기</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_evlScore",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"INT\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">0</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">2</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"CODE_NM\">4</Col></Row><Row><Col id=\"CODE\">6</Col><Col id=\"CODE_NM\">6</Col></Row><Row><Col id=\"CODE\">8</Col><Col id=\"CODE_NM\">8</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"CODE_NM\">10</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_clsf",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EVL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"HT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"APRSR_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ofcps",this);_a._setContents("<ColumnInfo><Column id=\"HR_CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"OFCPS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_score",this);_a._setContents("<ColumnInfo><Column id=\"SCORE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","1031","0","15","735",null,null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static07","absolute",null,"0","13","735","0",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("5");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_STDR_DE","absolute","15","6","64","21",null,null,this.div_search);_a.set_taborder("31");_a.set_text("평가년도");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","6","15",null,null,"4",this.div_search);_a.set_taborder("38");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new MaskEdit("msk_YEAR","absolute","79","6","54","21",null,null,this.div_search);_a.set_taborder("0");_a.set_mask("####");_a.set_type("string");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("sta_STDR_DE00","absolute","148","6","64","21",null,null,this.div_search);_a.set_taborder("40");_a.set_text("반기구분");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","133","6","15",null,null,"4",this.div_search);_a.set_taborder("42");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_HT_SE","absolute","212","6","86","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_innerdataset("@ds_htSe");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_index("-1");_a=new Button("Button00","absolute",null,"5","50","21","22",null,this.div_search);_a.set_taborder("43");_a.set_text("제출");this.div_search.addChild(_a.name,_a);_a=new Static("sta_STDR_DE01","absolute","313","6","51","21",null,null,this.div_search);_a.set_taborder("44");_a.set_text("평가자");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_EMP","absolute","369","6","190","21",null,null,this.div_search);_a.set_taborder("45");_a.set_async("false");_a.set_enable("true");_a.set_url("com::empno.xfdl");this.div_search.addChild(_a.name,_a);_a=new Button("Button01","absolute",null,"5","70","21","76",null,this.div_search);_a.set_taborder("46");_a.set_text("제출취소");_a.set_visible("false");this.div_search.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("10");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title01","absolute","0","43","224","19",null,null,this);_a.set_taborder("11");_a.set_text("평가대상자");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static51","absolute","0","62","1031","5",null,null,this);_a.set_taborder("12");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_dtyExcDmrtr","absolute","0","67","400",null,null,"179",this);_a.set_taborder("13");_a.set_binddataset("ds_mlssAprsr");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"139\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"제출\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"직급\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"성명\"/><Cell col=\"5\" text=\"점수\"/><Cell col=\"6\" text=\"등급\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" text=\"bind:PRSEN_AT\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:HR_CLSF_NM\"/><Cell col=\"3\" text=\"bind:DEPT_NM\"/><Cell col=\"4\" text=\"bind:EMPNM\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SCORE\" mask=\"###.##\"/><Cell col=\"6\" style=\"align:center;\" text=\"bind:EVL_GRAD\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_title00","absolute","410","43","224","19",null,null,this);_a.set_taborder("14");_a.set_text("다면평가표");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","408","67",null,null,"28","0",this);_a.set_taborder("15");_a.set_binddataset("ds_evlTable");_a.style.set_align("center middle");_a.set_cellsizingtype("col");_a.set_autoupdatetype("comboselect");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"650\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"60\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"평가항목\"/><Cell col=\"3\" text=\"행동지표\"/><Cell col=\"4\" text=\"점수\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:EVL_SE\"/><Cell col=\"2\" text=\"bind:EVL_IEM\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:GHVR_IX\"/><Cell col=\"4\" displaytype=\"expr:comp.parent.fn_PRSEN_AT() == '2' ? 'number' : (comp.parent.fn_PRSEN_AT() == '3' ? 'number' : 'combo'  )\" edittype=\"expr:comp.parent.fn_PRSEN_AT() == '2' ? 'masknumber' : (comp.parent.fn_PRSEN_AT() == '0' ? 'combo' : 'none')\" editfilter=\"number\" style=\"align:center;\" text=\"bind:SCORE\" mask=\"###.##\" maskchar=\" \" editdisplay=\"expr:comp.parent.fn_PRSEN_AT() == '2' ? 'display' : 'edit'\" editlimitbymask=\"both\" combodataset=\"ds_evlScore\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodisplay=\"expr:comp.parent.fn_PRSEN_AT() == '1' ? 'edit' : 'display'\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_title02","absolute","0",null,"224","19",null,"152",this);_a.set_taborder("16");_a.set_text("등급분포표");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Grid("grd_dtyExcDmrtr00","absolute","1",null,"400","147",null,"0",this);_a.set_taborder("17");_a.set_binddataset("ds_gradDistrb");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"40\"/><Column size=\"28\"/><Column size=\"49\"/><Column size=\"55\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"등급\"/><Cell col=\"1\" colspan=\"4\" text=\"기준\"/><Cell col=\"5\" text=\"평가분포\"/></Band><Band id=\"body\"><Cell text=\"expr:EVL_GRAD + EVL_GRAD_NM\"/><Cell col=\"1\" colspan=\"4\"><Cell text=\"bind:MIN_NMPR_CNT\"/><Cell col=\"1\" text=\"~\"/><Cell col=\"2\" text=\"bind:MAX_NMPR_CNT\"/><Cell col=\"3\" style=\"align:left;\" text=\"명\"/></Cell><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:GRAD_CNT\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Combo("cmb_clsfSe","absolute","83","42","142","21",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("19");_a.set_innerdataset("@ds_clsf");_a.set_codecolumn("HR_CLSF_SE");_a.set_datacolumn("HR_CLSF_NM");_a=new Button("btn_score","absolute",null,"42","70","21","35",null,this);_a.set_taborder("21");_a.set_text("일괄등록");_a.set_visible("false");this.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit00","absolute",null,"43","83","21","108",null,this);_a.set_taborder("22");_a.set_mask("!###.#");_a.set_type("number");_a.set_visible("false");_a.set_limitbymask("both");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("5");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("HRM060502");_b.set_titletext("다면평가표 작성");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.msk_YEAR","value","ds_cond","EVL_YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.cmb_HT_SE","value","ds_cond","HT_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","cmb_clsfSe","value","ds_cond","HR_CLSF_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","MaskEdit00","value","ds_score","SCORE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::empno.xfdl");};this.addIncludeScript("HRM060502.xfdl","lib::comInclude.xjs");this.addIncludeScript("HRM060502.xfdl","mis_lib::misUtil.xjs");this.registerScript("HRM060502.xfdl",function(){this.nRowPos= -1;this.sDelMode="";this.chargerAt=false;this.HRM060502_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.HRM060502_onload=function(_a,_b){this.div_search.div_EMP.fn_set_enable(false);var _c=this.gfn_today().substr(0,4);this.ds_cond.setColumn(0,"EVL_YEAR",_c);this.ds_cond.setColumn(0,"HT_SE","1");this.ds_cond.setColumn(0,"APRSR_EMPNO",this.fn_getEmpno());this.ds_cond.setColumn(0,"EMPNM",this.fn_getEmpnm());this.div_search.div_EMP.fn_setBind("ds_cond","APRSR_EMPNO","EMPNM");if(this.gfn_authGrpId("HRM_MLSS")!= -1){this.chargerAt=true;}if(this.chargerAt){this.div_search.div_EMP.fn_set_enable(true);this.div_search.Button01.set_visible(true);}this.fn_search();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){this.ds_gradDistrb.clearData();this.ds_evlTable.clearData();this.ds_mlssAprsr.clearData();this.ds_clsf.clearData();this.fn_transaction("clsfList");};this.fn_save=function(){var _a=this.ds_mlssAprsr.getColumn(this.ds_mlssAprsr.rowposition,"SCORE");if(_a=='0'){this.gfn_message("info.처리불가","점수가 등록되지 않았습니다.");return false;}if(this.gfn_message("confirm.저장.여부")){this.nRowPos=this.ds_mlssAprsr.rowposition;this.fn_transaction("SUBMIT");}};this.fn_search_dtl=function(){this.fn_transaction("detailR");};this.fn_search_dtl2=function(){this.fn_transaction("updateMlssAprsr");};this.fn_transaction=function(_a){switch(_a){case "checkOfcps":var _b="hsco/mis/hrm/HRM060502/checkOfcps.do";var _c="input1=ds_cond";var _d="ds_ofcps=output1";break;case "clsfList":var _b="hsco/mis/hrm/HRM060502/selectMlssClsfList.do";var _c="input1=ds_cond";var _d="ds_clsf=output1";break;case "mainSearchList":var _b="hsco/mis/hrm/HRM060502/selectMlssAprsr.do";var _c="input1=ds_cond";var _d="ds_mlssAprsr=output1 ds_gradDistrb=output2 ";break;case "detailR":var _b="hsco/mis/hrm/HRM060502/selectEvlTable.do";var _c="input1=ds_cond01";var _d="ds_evlTable=output1";break;case "SUBMIT":var _b="hsco/mis/hrm/HRM060502/insertMlssScor.do";var _c="input1=ds_evlTable:U";var _d="";break;case "updateMlssAprsr":var _b="hsco/mis/hrm/HRM060502/updateMlssAprsr.do";var _c="input1=ds_mlssAprsr:A";var _d="";break;case "updateMlssAprsrCancle":var _b="hsco/mis/hrm/HRM060502/updateMlssAprsrCancle.do";var _c="input1=ds_mlssAprsr:A";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b=='0'){switch(_a){case "checkOfcps":if(this.ds_ofcps.getColumn(0,"HR_CLSF_SE")=='101'){this.MaskEdit00.set_visible(true);this.MaskEdit00.set_enable(true);this.btn_score.set_visible(true);this.ds_score.insertRow(0);}else{this.MaskEdit00.set_visible(false);this.btn_score.set_visible(false);}break;case "clsfList":trace(this.ds_clsf.getRowCount());if(this.ds_clsf.getRowCount()>0){this.ds_cond.setColumn(this.ds_clsf.rowposition,"HR_CLSF_SE",this.ds_clsf.getColumn(this.ds_clsf.rowposition,"HR_CLSF_SE"));this.fn_transaction("mainSearchList");}break;case "mainSearchList":if(this.nRowPos> -1){this.ds_mlssAprsr.set_rowposition(this.nRowPos);this.nRowPos= -1;}this.fn_transaction("checkOfcps");break;case "detailR":break;case "SUBMIT":this.gfn_message("success.처리.성공");this.fn_transaction("mainSearchList");break;case "updateMlssAprsr":this.gfn_message("success.처리.성공");this.fn_transaction("mainSearchList");break;case "updateMlssAprsrCancle":this.gfn_message("success.처리.성공");this.fn_transaction("mainSearchList");break;}}};this.ds_mlssAprsr_onrowposchanged=function(_a,_b){this.ds_evlTable.clearData();this.ds_cond01.clearData();this.ds_cond01.addRow();var _c=this.ds_mlssAprsr.rowposition;var _d=this.ds_mlssAprsr.getColumn(_c,"EVL_YEAR");var _e=this.ds_mlssAprsr.getColumn(_c,"HT_SE");var _f=this.ds_mlssAprsr.getColumn(_c,"EMPNO");var _g=this.ds_mlssAprsr.getColumn(_c,"HR_CLSF_SE");var _h=this.ds_mlssAprsr.getColumn(_c,"APRSR_NO");this.ds_cond01.setColumn(0,"EVL_YEAR",_d);this.ds_cond01.setColumn(0,"HT_SE",_e);this.ds_cond01.setColumn(0,"EMPNO",_f);this.ds_cond01.setColumn(0,"HR_CLSF_SE",_g);this.ds_cond01.setColumn(0,"APRSR_NO",_h);this.fn_search_dtl();};this.ds_evlTable_oncolumnchanged=function(_a,_b){if(_b.columnid="SCORE"){var _c=_a.getSum("SCORE");var _d=this.ds_mlssAprsr.rowposition;this.ds_mlssAprsr.setColumn(_d,"SCORE",_c);}};this.div_search_Button00_onclick=function(_a,_b){if(this.ds_evlTable.rowcount==0){this.gfn_message("info.처리불가","다면평가표를 선택해주세요");return;}if(this.ds_mlssAprsr.getColumn(this.ds_mlssAprsr.rowposition,"PRSEN_AT")=='1'){this.gfn_message("info.처리불가","이미 제출된 평가표입니다");return;}if(!this.chargerAt){var _c=this.ds_mlssAprsr.getCaseCount(" EVL_GRAD == 'S' ");var _d=this.ds_mlssAprsr.getCaseCount(" EVL_GRAD == 'A' ");var _e=this.ds_mlssAprsr.getCaseCount(" EVL_GRAD == 'B' ");var _f=this.ds_mlssAprsr.getCaseCount(" EVL_GRAD == 'C' ");var _g=this.ds_mlssAprsr.getCaseCount(" EVL_GRAD == 'D' ");for(var _k=0;_k<=this.ds_gradDistrb.getRowCount();_k++ ){var _h=this.ds_gradDistrb.getColumn(_k,"EVL_GRAD");var _i=this.ds_gradDistrb.getColumn(_k,"MAX_NMPR_CNT");var _j=this.ds_gradDistrb.getColumn(_k,"MIN_NMPR_CNT");if(_h=="S"){if(!(_j<=_c&&_c<=_i)){this.gfn_message("info.처리불가","S등급의 범위가 일치하지않습니다.");return;}}if(_h=="A"){if(!(_j<=_d&&_d<=_i)){this.gfn_message("info.처리불가","A등급의 범위가 일치하지않습니다.");return;}}if(_h=="B"){if(!(_j<=_e&&_e<=_i)){this.gfn_message("info.처리불가","B등급의 범위가 일치하지않습니다.");return;}}if(_h=="C"){if(!(_j<=_f&&_f<=_i)){this.gfn_message("info.처리불가","C등급의 범위가 일치하지않습니다.");return;}}if(_h=="D"){if(!(_j<=_g&&_g<=_i)){this.gfn_message("info.처리불가","D등급의 범위가 일치하지않습니다.");return;}}}}if(this.gfn_message("confirm.행위여부","제출후 점수는 수정할수 없습니다. 제출")){this.fn_search_dtl2();}};this.fn_PRSEN_AT=function(){var _a;if(this.ds_ofcps.getColumn(0,"HR_CLSF_SE")=='101'){if(this.ds_mlssAprsr.getColumn(this.ds_mlssAprsr.rowposition,"PRSEN_AT")=='1'){_a='3';this.btn_score.set_enable(false);}else{_a='2';this.btn_score.set_enable(true);}}else{_a=this.ds_mlssAprsr.getColumn(this.ds_mlssAprsr.rowposition,"PRSEN_AT");}return _a;};this.cmb_clsfSe_onitemchanged=function(_a,_b){this.fn_transaction("mainSearchList");};this.div_search_Button01_onclick=function(_a,_b){if(this.ds_evlTable.rowcount==0){this.gfn_message("info.처리불가","다면평가표를 선택해주세요");return;}if(this.ds_mlssAprsr.getColumn(this.ds_mlssAprsr.rowposition,"PRSEN_AT")=='0'){this.gfn_message("info.처리불가","제출된 다면평가표가 없습니다");return;}if(this.gfn_message("confirm.행위여부","제출을 취소")){this.fn_transaction("updateMlssAprsrCancle");}};this.ds_cond_oncolumnchanged=function(_a,_b){this.fn_transaction("checkOfcps");};this.btn_score_onclick=function(_a,_b){if(this.ds_score.rowcount<0){this.gfn_message("info.처리불가","점수를 입력해주세요");return;}var _c=this.ds_score.getColumn(0,"SCORE");var _d=this.ds_evlTable.rowcount;var _e=_c/_d;for(var _f=0;_f<=this.ds_evlTable.getRowCount();_f++ ){this.ds_evlTable.setColumn(_f,"SCORE",_e);}};});this.on_initEvent=function(){this.ds_mlssAprsr.addEventHandler("onrowposchanged",this.ds_mlssAprsr_onrowposchanged,this);this.ds_evlTable.addEventHandler("oncolumnchanged",this.ds_evlTable_oncolumnchanged,this);this.ds_cond.addEventHandler("oncolumnchanged",this.ds_cond_oncolumnchanged,this);this.ds_clsf.addEventHandler("oncolumnchanged",this.ds_clsf_oncolumnchanged,this);this.addEventHandler("oninit",this.HRM060502_oninit,this);this.addEventHandler("onload",this.HRM060502_onload,this);this.Static07.addEventHandler("onclick",this.Static07_onclick,this);this.div_search.sta_STDR_DE.addEventHandler("onclick",this.div_search_sta_STDR_DE_onclick,this);this.div_search.msk_YEAR.addEventHandler("oneditclick",this.div_search_msk_YEAR_oneditclick,this);this.div_search.cmb_HT_SE.addEventHandler("onitemchanged",this.div_search_cmb_HT_SE_onitemchanged,this);this.div_search.Button00.addEventHandler("onclick",this.div_search_Button00_onclick,this);this.div_search.sta_STDR_DE01.addEventHandler("onclick",this.div_search_sta_STDR_DE_onclick,this);this.div_search.Button01.addEventHandler("onclick",this.div_search_Button01_onclick,this);this.cmb_clsfSe.addEventHandler("onitemchanged",this.cmb_clsfSe_onitemchanged,this);this.btn_score.addEventHandler("onclick",this.btn_score_onclick,this);};this.loadIncludeScript("HRM060502.xfdl");this.loadPreloadList();};})();