﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SAL010114");this.set_classname("");this.set_titletext("고용보험산출내역관리");this._setFormPosition(0,0,1059,735);}this.getSetter("inheritanceid").set("");_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"PYMNT_YM\" type=\"STRING\" size=\"256\"/><Column id=\"POST_PYMNT_YM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">PYMNT_YM</Col><Col id=\"msgId\">지급년월</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col><Col id=\"nlength\">6</Col><Col id=\"lengthChkGb\"/><Col id=\"type\"/><Col id=\"from\"/><Col id=\"to\"/><Col id=\"expr\"/><Col id=\"func\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_computDtls",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"TOT_BPRPRR_UNEMPL_SALARY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TOT_LABRR_UNEMPL_SALARY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TOT_BPRPRR_DSIGN_JTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TOT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_import",this);_a.set_useclientlayout("false");_a._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/><Column id=\"Column25\" type=\"STRING\" size=\"256\"/><Column id=\"Column26\" type=\"STRING\" size=\"256\"/><Column id=\"Column27\" type=\"STRING\" size=\"256\"/><Column id=\"Column28\" type=\"STRING\" size=\"256\"/><Column id=\"Column29\" type=\"STRING\" size=\"256\"/><Column id=\"Column30\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_excel",this);_a.set_useclientlayout("false");_a._setContents("<ColumnInfo><Column id=\"PYMNT_YM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"LABRR_UNEMPL_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"BPRPRR_UNEMPL_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"BPRPRR_DSIGN_JTY\" type=\"STRING\" size=\"256\"/><Column id=\"BRTHDY\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"INSRNC_YM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_match",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"BRTHDY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_match_copy",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"BRTHDY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","33",null,"10","28",null,this);_a.set_taborder("40");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","43",null,"21","845",null,this);_a.set_taborder("41");_a.set_text("고용보험 납부액");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","62",null,"5","28",null,this);_a.set_taborder("42");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","0","15","31",null,null,this.div_search);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","15","5","62","21",null,null,this.div_search);_a.set_taborder("6");_a.set_text("지급년월");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_pymntYm","absolute","81","5","85","21",null,null,this.div_search);_a.set_taborder("7");_a.set_async("false");_a.set_url("common::frmSalMonCal.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static06","absolute","1031","0","15","735",null,null,this);_a.set_taborder("62");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static07","absolute",null,"0","13","735","0",null,this);_a.set_taborder("63");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_computDtls","absolute","0","67",null,null,"28","0",this);_a.set_taborder("2");_a.set_cellsizingtype("col");_a.set_autofittype("col");_a.set_binddataset("ds_computDtls");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"부서\"/><Cell col=\"2\" rowspan=\"2\" text=\"① 근로자부담금\"/><Cell col=\"3\" rowspan=\"2\" text=\"② 사용자부담금&#13;&#10;(A+B)\"/><Cell col=\"4\" colspan=\"2\" text=\"사용자부담금 산출내역\"/><Cell row=\"1\" col=\"4\" text=\"A(실업급여)\"/><Cell row=\"1\" col=\"5\" text=\"B(고용안정)\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:DEPT_NM\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOT_LABRR_UNEMPL_SALARY\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOT\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOT_LABRR_UNEMPL_SALARY\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOT_BPRPRR_DSIGN_JTY\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합계\"/><Cell col=\"2\" displaytype=\"number\" text=\"expr:dataset.getSum('TOT_LABRR_UNEMPL_SALARY')\"/><Cell col=\"3\" displaytype=\"number\" text=\"expr:dataset.getSum('TOT')\"/><Cell col=\"4\" displaytype=\"number\" text=\"expr:dataset.getSum('TOT_LABRR_UNEMPL_SALARY')\"/><Cell col=\"5\" displaytype=\"number\" text=\"expr:dataset.getSum('TOT_BPRPRR_DSIGN_JTY')\"/><Cell row=\"1\" colspan=\"2\" text=\"합계(①+②)\"/><Cell row=\"1\" col=\"2\" colspan=\"2\" displaytype=\"number\" text=\"expr:dataset.getSum('TOT_LABRR_UNEMPL_SALARY + TOT')\"/><Cell row=\"1\" col=\"4\"/><Cell row=\"1\" col=\"5\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_excelUpload","absolute",null,"43","25","19","28",null,this);_a.set_taborder("1");_a.set_cssclass("btn_WF_Gridexcelup");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("");_b.getSetter("inheritanceid").set("");_b.set_titletext("고용보험산출내역관리");});this.addLayout(_a.name,_a);_a=new BindItem("item7","Search00.D_EOPCHE_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","ENTRPS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","Search00.D_DAEPYOJA_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","REPRSNT_MAN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","Search00.D_POST_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","POST_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","Search00.D_JUSO_EDIT1","value","TBITM_MNTNC_MENDNG_ENTRPS","ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item11","Search00.D_JUSO_EDIT2","value","TBITM_MNTNC_MENDNG_ENTRPS","DETAIL_ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item12","Search00.D_TEL_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","CTTPC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item13","Search00.D_FAX_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","FAX_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","Search00.D_SAYONG_RADIO","value","TBITM_MNTNC_MENDNG_ENTRPS","USE_ENNC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item15","Search00.D_BIGO_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","RM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","Tab00.tabpage1.D_NAME_EDIT","value","TBITM_ENTRPS_EMP","ENTRPS_EMP_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","Tab00.tabpage1.D_JIKWI_EDIT","value","TBITM_ENTRPS_EMP","OFCPS");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","Tab00.tabpage1.D_DAMDANG_EDIT","value","TBITM_ENTRPS_EMP","CHRG_JOB");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","Tab00.tabpage1.D_JIWON_COMBO","value","TBITM_ENTRPS_EMP","SPORT_STLE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","Tab00.tabpage1.D_TEL_EDIT","value","TBITM_ENTRPS_EMP","CTTPC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","Tab00.tabpage1.D_EMAIL_EDIT","value","TBITM_ENTRPS_EMP","EMAIL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_DETAIL00.edt_ENTRPS_NM","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","ENTRPS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item16","div_DETAIL00.edt_REPRSNT_MAN","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","REPRSNT_MAN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item17","div_DETAIL00.mae_POST_NO","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","POST_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item18","div_DETAIL00.edt_ADRES","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item19","div_DETAIL00.edt_DETAIL_ADRES","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","DETAIL_ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item20","div_DETAIL00.edt_CTTPC","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","CTTPC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item21","div_DETAIL00.edt_FAX_NO","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","FAX_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item22","div_DETAIL00.edt_USE_ENNC","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","USE_ENNC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item23","div_DETAIL00.txt_RM","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","RM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","common::frmSalMonCal.xfdl");};this.addIncludeScript("SAL010114.xfdl","lib::comInclude.xjs");this.addIncludeScript("SAL010114.xfdl","mis_lib::misUtil.xjs");this.registerScript("SAL010114.xfdl",function(){var _a= -1;this.SAL010114_oninit=function(_b,_c){};this.SAL010114_onload=function(_b,_c){this.fn_init_form();this.fn_init_dataset();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.div_search.div_pymntYm.fn_setBind("ds_cond","PYMNT_YM");this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"PYMNT_YM",this.dateUtils.format(this.gfn_today(),"yyyymm"));this.fn_search();};this.fn_init_dataset=function(){};this.fn_search=function(){this.ds_computDtls.clearData();if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}this.fn_transaction("selectComputDtlsList");};this.fn_delete=function(){var _b=this.ds_cond.getColumn(0,"PYMNT_YM");var _c=_b.substr(0,4)+"년 "+_b.substr(4,2)+"월";if(this.ds_computDtls.rowcount>0){if(application.confirm(_c+" 고용보험 데이터를 삭제하시겠습니까?\n확인버튼을 클릭하시면 바로 삭제가 반영됩니다.")){if(this.ds_computDtls.getRowCount()>0){this.fn_transaction("computDtlsListD");}}}};this.fn_transaction=function(_b){switch(_b){case "selectComputDtlsList":var _c="hsco/mis/sal/SAL010114/selectComputDtlsList.do";var _d="input1=ds_cond";var _e="ds_computDtls=output1";break;case "saveComputDtlsList":var _c="hsco/mis/sal/SAL010114/saveComputDtlsList.do";var _d="input1=ds_excel:U input2=ds_cond";var _e="ds_match=output1";break;case "computDtlsListD":var _c="hsco/mis/sal/SAL010114/computDtlsListD.do";var _d="input1=ds_cond";var _e="";break;}Ex.core.tran(this,_b,_c,_d,_e);};this.fn_callBack=function(_b,_c,_d){if(_c!='0'){this.gfn_callback_message(_b,_c,_d);}if(_c=='0'){switch(_b){case "selectComputDtlsList":break;case "saveComputDtlsList":this.gfn_message("success.처리.성공");this.fn_search();break;case "computDtlsListD":this.fn_search();break;}}};this.btn_excelUpload_onclick=function(_b,_c){var _d=this.ds_cond.getColumn(0,"PYMNT_YM");var _e=_d.substr(0,4)+"년 "+_d.substr(4,2)+"월";if(this.ds_computDtls.rowcount>0){if(!application.confirm(_e+" 고용보험 데이터를 업로드 하시겠습니까?")){return false;}}this.ds_import.clearData();this.ds_excel.clearData();var _f={targetDs:this.ds_import,headSet:false,callBack:function(){if(this.ds_import.getRowCount()>1){var _g;for(i=1;i<this.ds_import.rowcount;i++ ){var _h=this.ds_import.getColumn(i,"Column0");var _i=this.ds_import.getColumn(i,"Column3");var _j=this.ds_import.getColumn(i,"Column4");var _k=this.ds_import.getColumn(i,"Column24");var _l=this.ds_import.getColumn(i,"Column25");var _m=this.ds_import.getColumn(i,"Column26");if(!this.comUtils.isNull(_i)&&!this.comUtils.isNull(_j)){if(nexacro.toNumber(_j.substr(0,2))>20){var _n="19"+(_j.replace(/[-]/g,""));}else{var _n="20"+(_j.replace(/[-]/g,""));}var _o=_i.replace(/[" "]/g,"");if(this.ds_excel.findRowExpr("INSRNC_YM == '"+_h+"' && EMPNM == '"+_o+"' && BRTHDY == '"+_n+"'")== -1){_g=this.ds_excel.addRow();this.ds_excel.setColumn(_g,"PYMNT_YM",_d);this.ds_excel.setColumn(_g,"INSRNC_YM",this.fn_getStringCheckByte(_h.replace(/[-]/g,""),6));this.ds_excel.setColumn(_g,"EMPNM",this.fn_getStringCheckByte(_o,45));this.ds_excel.setColumn(_g,"BRTHDY",this.fn_getStringCheckByte(_n,8));this.ds_excel.setColumn(_g,"LABRR_UNEMPL_SALARY",this.fn_getStringCheckByte(_k,15));this.ds_excel.setColumn(_g,"BPRPRR_UNEMPL_SALARY",this.fn_getStringCheckByte(_l,15));this.ds_excel.setColumn(_g,"BPRPRR_DSIGN_JTY",this.fn_getStringCheckByte(_m,15));}}}this.fn_transaction("saveComputDtlsList");}}};this.gfn_importExcel(_f);};this.ds_cond_oncolumnchanged=function(_b,_c){if(_c.columnid=="PYMNT_YM"){var _d=this.dateUtils.addMonth(_c.newvalue+"01", -1,"s");this.ds_cond.setColumn(0,"POST_PYMNT_YM",this.dateUtils.format(_d,"yyyymm"));}};this.grd_computDtls_onheadclick=function(_b,_c){LGV_COL_SORT=_c.col;this._gridSort(_b,_c);};});this.on_initEvent=function(){this.ds_cond.addEventHandler("oncolumnchanged",this.ds_cond_oncolumnchanged,this);this.addEventHandler("onload",this.SAL010114_onload,this);this.addEventHandler("oninit",this.SAL010114_oninit,this);this.grd_computDtls.addEventHandler("onheadclick",this.grd_computDtls_onheadclick,this);this.btn_excelUpload.addEventHandler("onclick",this.btn_excelUpload_onclick,this);};this.loadIncludeScript("SAL010114.xfdl");this.loadPreloadList();};})();