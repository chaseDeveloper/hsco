﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("BDG030101_T01");this.set_classname("BDG030101_T01");this.set_titletext("편성예산");this._setFormPosition(0,0,1031,400);}_a=new Dataset("ds_condTab01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"1\"/><Column id=\"DETAIL_BSNS_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"1\"/><Column id=\"BUDGET_SE\" type=\"STRING\" size=\"1\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"1\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_BSLS_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YEAR\">2015</Col><Col id=\"BSNS_SE\">1</Col><Col id=\"DETAIL_BSNS_CODE\">1</Col><Col id=\"BALC_SE\">1</Col><Col id=\"BUDGET_SE\">1</Col><Col id=\"DEPT_CODE\">1</Col><Col id=\"DEPT_NM\">1</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_condTab01Sub",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"1\"/><Column id=\"DETAIL_BSNS_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"1\"/><Column id=\"BUDGET_SE\" type=\"STRING\" size=\"1\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"1\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"8\"/><Column id=\"EXPNDTR_UNIT_CODE\" type=\"STRING\" size=\"8\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_frmtnBudget",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"1\"/><Column id=\"DETAIL_BSNS_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"DETAIL_BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"1\"/><Column id=\"BUDGET_SE\" type=\"STRING\" size=\"1\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"8\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_UNIT_CODE\" type=\"STRING\" size=\"8\"/><Column id=\"EXPNDTR_UNIT_NM\" type=\"STRING\" size=\"1000\"/><Column id=\"COMPUT_BSIS_DTLS\" type=\"STRING\" size=\"1000\"/><Column id=\"ELPD_EXCUT_AT\" type=\"STRING\" size=\"1\"/><Column id=\"BUDGET_AM\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_frmtnComputBsis",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"1\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"1\"/><Column id=\"DETAIL_BSNS_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"BUDGET_SE\" type=\"STRING\" size=\"1\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"8\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"EXPNDTR_UNIT_CODE\" type=\"STRING\" size=\"8\"/><Column id=\"COMPUT_BSIS_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"COMPUT_BSIS_NM\" type=\"STRING\" size=\"1000\"/><Column id=\"COMPUT_BSIS_DTLS\" type=\"STRING\" size=\"1000\"/><Column id=\"COMPUT_BSIS_REFRN\" type=\"STRING\" size=\"1000\"/><Column id=\"BUDGET_AM\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Grid("grd_frmtnBudget","absolute","0","34",null,"158","0",null,this);_a.set_taborder("0");_a.set_binddataset("ds_frmtnBudget");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" colspan=\"2\" text=\"예산부서코드/명\"/><Cell col=\"3\" colspan=\"2\" text=\"예산계정코드/명\"/><Cell col=\"5\" colspan=\"2\" text=\"부기코드/명\"/><Cell col=\"7\" text=\"산출기초내역\"/><Cell col=\"8\" text=\"예산액\"/><Cell col=\"9\" text=\"조기집행\"/><Cell col=\"10\" text=\"진행상태\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:DEPT_CODE\"/><Cell col=\"2\" edittype=\"none\" style=\"align:left middle;\" text=\"bind:DEPT_NM\"/><Cell col=\"3\" edittype=\"none\" text=\"bind:BUDGET_ACNT_CODE\" mask=\"###-####\"/><Cell col=\"4\" edittype=\"none\" style=\"align:left middle;\" text=\"bind:BUDGET_ACNT_NM\"/><Cell col=\"5\" edittype=\"none\" text=\"bind:EXPNDTR_UNIT_CODE\" mask=\"##-##-##-##\"/><Cell col=\"6\" edittype=\"none\" style=\"align:left middle;\" text=\"bind:EXPNDTR_UNIT_NM\"/><Cell col=\"7\" edittype=\"none\" style=\"align:left middle;\" text=\"bind:COMPUT_BSIS_DTLS\" editlimit=\"400\" editlengthunit=\"utf8\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"none\" style=\"align:right middle;\" text=\"bind:BUDGET_AM\" mask=\"#,###,###,###,###\" editlimit=\"15\" editlimitbymask=\"both\" editlengthunit=\"utf8\"/><Cell col=\"9\" displaytype=\"checkbox\" edittype=\"none\" style=\"controlborder:1 none #808080 ;\" text=\"bind:ELPD_EXCUT_AT\"/><Cell col=\"10\" edittype=\"none\" text=\"bind:PROGRS_STTUS\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\" text=\"합계\"/><Cell col=\"8\" displaytype=\"number\" text=\"expr:dataset.getSum('BUDGET_AM')\"/><Cell col=\"9\"/><Cell col=\"10\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_frmtnComputBsis","absolute","0","202",null,"21","0",null,this);_a.set_taborder("1");_a.set_text("산출기초리스트");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Grid("grd_frmtnComputBsis","absolute","0","228",null,null,"0","0",this);_a.set_taborder("3");_a.set_binddataset("ds_frmtnComputBsis");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"150\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" colspan=\"2\" text=\"산출기초코드/명\"/><Cell col=\"3\" text=\"산출기초내역\"/><Cell col=\"4\" text=\"산출기초참조\"/><Cell col=\"5\" text=\"예산액\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:COMPUT_BSIS_CODE\" editlimit=\"2\" editlengthunit=\"utf8\"/><Cell col=\"2\" style=\"align:left middle;\" text=\"bind:COMPUT_BSIS_NM\"/><Cell col=\"3\" style=\"align:left middle;\" text=\"bind:COMPUT_BSIS_DTLS\" editlimit=\"400\" editlengthunit=\"utf8\"/><Cell col=\"4\" style=\"align:left middle;\" text=\"bind:COMPUT_BSIS_REFRN\" editlimit=\"400\" editlengthunit=\"utf8\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:BUDGET_AM\" mask=\"#,###,###,###\" editlimit=\"15\" editlimitbymask=\"both\" editlengthunit=\"utf8\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" text=\"합계\"/><Cell col=\"5\" displaytype=\"number\" text=\"expr:dataset.getSum('BUDGET_AM')\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_frmtnBudget","absolute","0","10",null,"19","0",null,this);_a.set_taborder("4");_a.set_text("편성예산리스트");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","0",null,"10","0",null,this);_a.set_taborder("5");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","29",null,"5","0",null,this);_a.set_taborder("6");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0",null,null,"10","0","198",this);_a.set_taborder("7");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","0",null,null,"5","0","172",this);_a.set_taborder("8");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",1031,400,this,function(_b){_b.set_classname("BDG030101_T01");_b.set_titletext("편성예산");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("BDG030101_T01.xfdl","lib::comInclude.xjs");this.addIncludeScript("BDG030101_T01.xfdl","mis_lib::misUtil.xjs");this.registerScript("BDG030101_T01.xfdl",function(){this.BDG030101_T01_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.BDG030101_T01_onload=function(_a,_b){};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){};this.fn_search=function(){this.ds_frmtnComputBsis.clearData();this.ds_frmtnBudget.clearData();this.fn_transaction("selectFrmtnBudget");};this.fn_search_sub=function(){this.ds_frmtnComputBsis.clearData();if(this.ds_frmtnBudget.getRowCount()>0){this.fn_transaction("selectFrmtnComputBsis");}};this.fn_transaction=function(_a){switch(_a){case "selectFrmtnBudget":var _b=this.parent.parent.ds_cond.getColumn(0,"YEAR");var _c=this.parent.parent.ds_cond.getColumn(0,"DEPT_CODE");var _d=this.parent.parent.ds_cond.getColumn(0,"DEPT_NM");var _e=this.parent.parent.ds_cond.getColumn(0,"BSNS_SE");var _f=this.parent.parent.ds_cond.getColumn(0,"BALC_SE");var _g=this.parent.parent.ds_cond.getColumn(0,"BUDGET_SE");var _h=this.parent.parent.ds_cond.getColumn(0,"BSNS_CODE");this.ds_condTab01.clearData();var _i=this.ds_condTab01.addRow();this.ds_condTab01.setColumn(_i,"YEAR",_b-1);this.ds_condTab01.setColumn(_i,"DEPT_CODE",_c);this.ds_condTab01.setColumn(_i,"DEPT_NM",_d);this.ds_condTab01.setColumn(_i,"BSNS_SE",_e);this.ds_condTab01.setColumn(_i,"BALC_SE",_f);this.ds_condTab01.setColumn(_i,"BUDGET_SE",_g);this.ds_condTab01.setColumn(_i,"DETAIL_BSNS_CODE",_h);var _j="/hsco/mis/bdg/BDG030101/selectFrmtnBudget.do";var _k="input1=ds_condTab01";var _l="ds_frmtnBudget=output1";break;case "selectFrmtnComputBsis":var _m=this.ds_frmtnBudget.rowposition;var _b=this.ds_frmtnBudget.getColumn(_m,"YEAR");var _c=this.ds_frmtnBudget.getColumn(_m,"DEPT_CODE");var _d=this.ds_frmtnBudget.getColumn(_m,"DEPT_NM");var _e=this.ds_frmtnBudget.getColumn(_m,"BSNS_SE");var _f=this.ds_frmtnBudget.getColumn(_m,"BALC_SE");var _g=this.ds_frmtnBudget.getColumn(_m,"BUDGET_SE");var _n=this.ds_frmtnBudget.getColumn(_m,"DETAIL_BSNS_CODE");var _o=this.ds_frmtnBudget.getColumn(_m,"BUDGET_ACNT_CODE");var _p=this.ds_frmtnBudget.getColumn(_m,"EXPNDTR_UNIT_CODE");this.ds_condTab01Sub.clearData();var _i=this.ds_condTab01Sub.addRow();this.ds_condTab01Sub.setColumn(_i,"YEAR",_b);this.ds_condTab01Sub.setColumn(_i,"DEPT_CODE",_c);this.ds_condTab01Sub.setColumn(_i,"DEPT_NM",_d);this.ds_condTab01Sub.setColumn(_i,"BSNS_SE",_e);this.ds_condTab01Sub.setColumn(_i,"BALC_SE",_f);this.ds_condTab01Sub.setColumn(_i,"BUDGET_SE",_g);this.ds_condTab01Sub.setColumn(_i,"DETAIL_BSNS_CODE",_n);this.ds_condTab01Sub.setColumn(_i,"BUDGET_ACNT_CODE",_o);this.ds_condTab01Sub.setColumn(_i,"EXPNDTR_UNIT_CODE",_p);var _j="/hsco/mis/bdg/BDG030101/selectFrmtnComputBsis.do";var _k="input1=ds_condTab01Sub";var _l="ds_frmtnComputBsis=output1";break;}Ex.core.tran(this,_a,_j,_k,_l);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b==0){switch(_a){case "selectFrmtnBudget":break;case "selectFrmtnComputBsis":break;}}};this.ds_frmtnBudget_onrowposchanged=function(_a,_b){this.fn_search_sub();};});this.on_initEvent=function(){this.ds_frmtnBudget.addEventHandler("onrowposchanged",this.ds_frmtnBudget_onrowposchanged,this);this.addEventHandler("onload",this.BDG030101_T01_onload,this);this.addEventHandler("oninit",this.BDG030101_T01_oninit,this);};this.loadIncludeScript("BDG030101_T01.xfdl");};})();