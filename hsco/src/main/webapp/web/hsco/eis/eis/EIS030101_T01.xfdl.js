﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("EIS030101_T01");this.set_classname("");this.set_titletext("대차대조표");this._setFormPosition(0,0,1059,735);}this.getSetter("inheritanceid").set("");_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_refrnList</Col><Col id=\"colId\">ORGNZT_CODE</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col><Col id=\"type\">[Undefined]</Col><Col id=\"nlength\">[Undefined]</Col><Col id=\"from\">[Undefined]</Col><Col id=\"to\">[Undefined]</Col><Col id=\"lengthChkGb\">[Undefined]</Col><Col id=\"msgId\">조직명</Col><Col id=\"expr\">[Undefined]</Col><Col id=\"func\">[Undefined]</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"STDR_YEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_balSheetList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ACCNUT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCNUT_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCNUT_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"QU_1\" type=\"STRING\" size=\"256\"/><Column id=\"QU_2\" type=\"STRING\" size=\"256\"/><Column id=\"QU_3\" type=\"STRING\" size=\"256\"/><Column id=\"QU_4\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_AMOUNT_THSTRM\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_AMOUNT_FRMTRM\" type=\"STRING\" size=\"256\"/><Column id=\"IRDS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","4",null,null,"1","0",this);_a.set_taborder("37");_a.style.set_background("#00000000");_a.set_scrollbars("none");this.addChild(_a.name,_a);_a=new Grid("grd_list","absolute","0","0",null,null,"0","0",this.div_work);_a.set_taborder("24");_a.set_binddataset("ds_balSheetList");_a.set_autofittype("col");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"204\"/><Column size=\"93\"/><Column size=\"93\"/><Column size=\"93\"/><Column size=\"93\"/><Column size=\"114\"/><Column size=\"114\"/><Column size=\"97\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"계정과목명\"/><Cell col=\"1\" text=\"1/4분기\"/><Cell col=\"2\" text=\"2/4분기\"/><Cell col=\"3\" text=\"3/4분기\"/><Cell col=\"4\" style=\"line: ;\" text=\"4/4분기\"/><Cell col=\"5\" text=\"합계\"/><Cell col=\"6\" text=\"전년도\"/><Cell col=\"7\" text=\"증감\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" style=\"align:left;\" text=\"bind:ACCNUT_ACNT_NM\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:QU_1\" mask=\"!#,###\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:QU_2\" mask=\"!#,###\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:QU_3\" mask=\"!#,###\"/><Cell col=\"4\" celltype=\"none\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:QU_4\" mask=\"!#,###\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;font: ;\" text=\"bind:ACNT_AMOUNT_THSTRM\" mask=\"!#,###\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:ACNT_AMOUNT_FRMTRM\" mask=\"!#,###\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:IRDS\" mask=\"!#,###\" calendardisplaynulltype=\"none\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Layout("default","",1031,675,this.div_work,function(_b){_b.set_taborder("37");_b.style.set_background("#00000000");_b.set_scrollbars("none");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("");_b.getSetter("inheritanceid").set("");_b.set_titletext("대차대조표");});this.addLayout(_a.name,_a);_a=new BindItem("item7","Search00.D_EOPCHE_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","ENTRPS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","Search00.D_DAEPYOJA_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","REPRSNT_MAN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","Search00.D_POST_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","POST_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","Search00.D_JUSO_EDIT1","value","TBITM_MNTNC_MENDNG_ENTRPS","ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item11","Search00.D_JUSO_EDIT2","value","TBITM_MNTNC_MENDNG_ENTRPS","DETAIL_ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item12","Search00.D_TEL_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","CTTPC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item13","Search00.D_FAX_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","FAX_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","Search00.D_SAYONG_RADIO","value","TBITM_MNTNC_MENDNG_ENTRPS","USE_ENNC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item15","Search00.D_BIGO_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","RM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","Tab00.tabpage1.D_NAME_EDIT","value","TBITM_ENTRPS_EMP","ENTRPS_EMP_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","Tab00.tabpage1.D_JIKWI_EDIT","value","TBITM_ENTRPS_EMP","OFCPS");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","Tab00.tabpage1.D_DAMDANG_EDIT","value","TBITM_ENTRPS_EMP","CHRG_JOB");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","Tab00.tabpage1.D_JIWON_COMBO","value","TBITM_ENTRPS_EMP","SPORT_STLE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","Tab00.tabpage1.D_TEL_EDIT","value","TBITM_ENTRPS_EMP","CTTPC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","Tab00.tabpage1.D_EMAIL_EDIT","value","TBITM_ENTRPS_EMP","EMAIL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_DETAIL00.edt_ENTRPS_NM","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","ENTRPS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item16","div_DETAIL00.edt_REPRSNT_MAN","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","REPRSNT_MAN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item17","div_DETAIL00.mae_POST_NO","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","POST_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item18","div_DETAIL00.edt_ADRES","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item19","div_DETAIL00.edt_DETAIL_ADRES","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","DETAIL_ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item20","div_DETAIL00.edt_CTTPC","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","CTTPC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item21","div_DETAIL00.edt_FAX_NO","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","FAX_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item22","div_DETAIL00.edt_USE_ENNC","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","USE_ENNC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item23","div_DETAIL00.txt_RM","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","RM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("EIS030101_T01.xfdl","lib::comInclude.xjs");this.addIncludeScript("EIS030101_T01.xfdl","mis_lib::misUtil.xjs");this.registerScript("EIS030101_T01.xfdl",function(){this.nRowPos=0;this.EIS030101_T01_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.EIS030101_T01_onload=function(_a,_b){this.fn_loadCombo();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){};this.fn_loadCombo=function(){};this.fn_callbackAfterLoad=function(){};this.fn_loadComboNonCodeTbl=function(_a,_b){};this.fn_callbackAfter=function(_a){};this.fn_search=function(){this.ds_balSheetList.clearData();this.fn_transaction("selectBalSheet");};this.fn_transaction=function(_a){switch(_a){case "selectBalSheet":var _b="hsco/eis/eis/EIS030101/selectBalSheet.do";var _c="input1=ds_cond";var _d="ds_balSheetList=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "selectBalSheet":break;}}};this.fn_tab_cond=function(_a){var _b=new Array();for(var _c in _a){_b[_c]=_a[_c];}this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"STDR_YEAR",_b[0]);};});this.on_initEvent=function(){this.ds_balSheetList.addEventHandler("oncolumnchanged",this.ds_refrnList_oncolumnchanged,this);this.ds_balSheetList.addEventHandler("cancolumnchange",this.ds_refrnList_cancolumnchange,this);this.addEventHandler("oninit",this.EIS030101_T01_oninit,this);this.addEventHandler("onload",this.EIS030101_T01_onload,this);this.div_work.grd_list.addEventHandler("oncellclick",this.div_work_grd_list_oncellclick,this);this.div_work.grd_list.addEventHandler("onheadclick",this.div_work_grd_list_onheadclick,this);this.div_work.grd_list.addEventHandler("onkeyup",this.div_work_grd_list_onkeyup,this);};this.loadIncludeScript("EIS030101_T01.xfdl");};})();