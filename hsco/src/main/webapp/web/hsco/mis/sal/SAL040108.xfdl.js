﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SAL040108");this.set_classname("SAL040108");this.set_titletext("퇴직금지급명세서조회");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_retireSalaryPymnt",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ALR_TAXPAID\" type=\"bigdecimal\" size=\"16\"/><Column id=\"PYMNT_BANK_ACNUT\" type=\"string\" size=\"32\"/><Column id=\"ANNTY_ACNUT_TRT1\" type=\"string\" size=\"32\"/><Column id=\"AF_EXCL_MCNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"LAST_CNWK_MCNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"ANNTY_ACNUT_TRT2\" type=\"string\" size=\"32\"/><Column id=\"MID_BF_EXCL_MCNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"PV_STDTAX_PRPDVS_AF\" type=\"bigdecimal\" size=\"16\"/><Column id=\"AF_CNWK_MCNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"DFRD_RETIRE_LLX\" type=\"bigdecimal\" size=\"16\"/><Column id=\"BF_RECKN_DE\" type=\"string\" size=\"32\"/><Column id=\"JSSFC_SE\" type=\"string\" size=\"32\"/><Column id=\"RM\" type=\"string\" size=\"32\"/><Column id=\"EMPNO\" type=\"string\" size=\"32\"/><Column id=\"LAST_RETIRE_DE\" type=\"string\" size=\"32\"/><Column id=\"GNFD_CN_BASIS\" type=\"string\" size=\"32\"/><Column id=\"MID_CNWK_MCNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MID_BF_ADDI_MCNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"RF_CNVRSN_SALARY\" type=\"bigdecimal\" size=\"16\"/><Column id=\"STTEMNT_TRGET_LLX\" type=\"bigdecimal\" size=\"16\"/><Column id=\"RETIRE_SE\" type=\"string\" size=\"32\"/><Column id=\"PV_COMP_TAXAMT_BF\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MID_AF_ADDI_MCNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"PV_COMP_TAXAMT_AF\" type=\"bigdecimal\" size=\"16\"/><Column id=\"LAST_PYMNT_DE\" type=\"string\" size=\"32\"/><Column id=\"LAST_CNWK_YCNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"YRYC_ALLWNC\" type=\"bigdecimal\" size=\"16\"/><Column id=\"STTEMNT_TRGET_TAXAMT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"EXC_RETIRE_DE\" type=\"string\" size=\"32\"/><Column id=\"BF_RETIRE_DE\" type=\"string\" size=\"32\"/><Column id=\"LAST_RECKN_DE\" type=\"string\" size=\"32\"/><Column id=\"SEQ\" type=\"STRING\" size=\"16\"/><Column id=\"DYRG_WAGE\" type=\"bigdecimal\" size=\"16\"/><Column id=\"SRCLS\" type=\"string\" size=\"32\"/><Column id=\"BF_CNWK_MCNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"PV_YRYMN_STDTAX_BF\" type=\"bigdecimal\" size=\"16\"/><Column id=\"TAXXMPT_RTRPAY\" type=\"string\" size=\"32\"/><Column id=\"AF_CNWK_YCNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"ECNY_DE\" type=\"string\" size=\"32\"/><Column id=\"GNFD_DE\" type=\"string\" size=\"32\"/><Column id=\"DDCT_WTHTX_LLX\" type=\"bigdecimal\" size=\"16\"/><Column id=\"TAXYY\" type=\"string\" size=\"32\"/><Column id=\"GNFD_SE\" type=\"string\" size=\"32\"/><Column id=\"EXC_CNWK_MCNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"EXC_CNWK_YCNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"LAST_EXCL_MCNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MID_AF_EXCL_MCNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"ANNTY_BSNM_NO2\" type=\"string\" size=\"32\"/><Column id=\"ANNTY_BSNM_NO1\" type=\"string\" size=\"32\"/><Column id=\"ANNTY_ACNUT_RCPMNY_AM2\" type=\"string\" size=\"32\"/><Column id=\"PV_FIX_RATE_DDC\" type=\"bigdecimal\" size=\"16\"/><Column id=\"AF_RECKN_DE\" type=\"string\" size=\"32\"/><Column id=\"EXC_RECKN_DE\" type=\"string\" size=\"32\"/><Column id=\"ANNTY_ACNUT_RCPMNY_AM1\" type=\"string\" size=\"32\"/><Column id=\"EXC_DPLCT_MCNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MID_RECKN_DE\" type=\"string\" size=\"32\"/><Column id=\"BF_ADDI_MCNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"RTRPAY\" type=\"bigdecimal\" size=\"16\"/><Column id=\"DPSTR\" type=\"string\" size=\"32\"/><Column id=\"RETIRE_INCMTAX_COMP_TAXAMT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"PV_CNWK_YYCNT_DDC\" type=\"bigdecimal\" size=\"16\"/><Column id=\"PV_YRYMN_STDTAX_AF\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MID_RETIRE_DE\" type=\"string\" size=\"32\"/><Column id=\"BF_EXCL_MCNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"EXCTV_AT\" type=\"string\" size=\"32\"/><Column id=\"CLSF_CODE\" type=\"string\" size=\"32\"/><Column id=\"RF_CNVRSN_COMP_TAXAMT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"PV_YRYMN_COMP_TAXAMT_AF\" type=\"bigdecimal\" size=\"16\"/><Column id=\"LAST_ADDI_MCNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"TOT_RTRPAY\" type=\"bigdecimal\" size=\"16\"/><Column id=\"AF_ADDI_MCNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"RETIRE_RESN_CODE\" type=\"string\" size=\"32\"/><Column id=\"MID_EXCL_MCNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"EXC_ADDI_MCNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"EXC_EXCL_MCNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"RF_CNWK_YYCNT_DDC\" type=\"bigdecimal\" size=\"16\"/><Column id=\"DDCT_WHTAX\" type=\"bigdecimal\" size=\"16\"/><Column id=\"PV_CNVRSN_COMP_TAXAMT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"PV_RETIRE_INC_STDTAX\" type=\"bigdecimal\" size=\"16\"/><Column id=\"PV_CNVRSN_STDTAX\" type=\"bigdecimal\" size=\"16\"/><Column id=\"PV_STDTAX_PRPDVS_BF\" type=\"bigdecimal\" size=\"16\"/><Column id=\"DEPT_CODE\" type=\"string\" size=\"32\"/><Column id=\"TAXT_TRGET_RTRPAY\" type=\"string\" size=\"32\"/><Column id=\"PYMNT_BANK_CODE\" type=\"string\" size=\"32\"/><Column id=\"RF_COMP_TAXAMT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MID_ADDI_MCNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"BF_CNWK_YCNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"RF_RETIRE_INC_STDTAX\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MID_PYMNT_DE\" type=\"string\" size=\"32\"/><Column id=\"PV_YRYMN_COMP_TAXAMT_BF\" type=\"bigdecimal\" size=\"16\"/><Column id=\"PRICEWAGE\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MID_CNWK_YCNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"ANNTY_ACNUTNO1\" type=\"string\" size=\"32\"/><Column id=\"ANNTY_ACNUTNO2\" type=\"string\" size=\"32\"/><Column id=\"DFRD_RETIRE_INCMTAX\" type=\"bigdecimal\" size=\"16\"/><Column id=\"RF_CNVRSN_SALARY_DDC\" type=\"bigdecimal\" size=\"16\"/><Column id=\"AF_RETIRE_DE\" type=\"string\" size=\"32\"/><Column id=\"ANNTY_RCPMNY_DE1\" type=\"string\" size=\"32\"/><Column id=\"ANNTY_RCPMNY_DE2\" type=\"string\" size=\"32\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ERROR\" type=\"STRING\" size=\"256\"/><Column id=\"FNNC_INSTT_CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_AT\" type=\"STRING\" size=\"256\"/><Column id=\"RL_RTRPAY\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"RETIRE_YM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond00</Col><Col id=\"colId\">RETIRE_YM</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">사번</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_bankcode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_retirese",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">퇴직정산</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">중도정산</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">퇴직계산</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cprInfo",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BIZRNO\" type=\"STRING\" size=\"256\"/><Column id=\"MTLTY\" type=\"STRING\" size=\"256\"/><Column id=\"RPRSNTV\" type=\"STRING\" size=\"256\"/><Column id=\"RPRSNTV_IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"JURIRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES_DETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES_RN\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"FAXNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"BIZCND\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_retireSalaryPymnt00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"PYMNT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RETIRE_DE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"RETIRE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SRCLS\" type=\"STRING\" size=\"256\"/><Column id=\"BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"CNWK_PD\" type=\"STRING\" size=\"256\"/><Column id=\"CNWK_YY\" type=\"STRING\" size=\"256\"/><Column id=\"CNWK_DE\" type=\"STRING\" size=\"256\"/><Column id=\"PRMPC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_BANK_ACNUT\" type=\"STRING\" size=\"256\"/><Column id=\"DPSTR\" type=\"STRING\" size=\"256\"/><Column id=\"AVRGWAGE\" type=\"STRING\" size=\"256\"/><Column id=\"RTRPAY\" type=\"STRING\" size=\"256\"/><Column id=\"SCHXPN_DDC\" type=\"STRING\" size=\"256\"/><Column id=\"HLTHINS_EXCCLC\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLYMINSRNC_EXCCLC\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY_SEIZR\" type=\"STRING\" size=\"256\"/><Column id=\"WLFARE_CARD_EXCCLC\" type=\"STRING\" size=\"256\"/><Column id=\"CNWK_SDYTRN_BEFORE\" type=\"STRING\" size=\"256\"/><Column id=\"CNWK_SDYTRN_AFTER\" type=\"STRING\" size=\"256\"/><Column id=\"TAXT_STD_PRPDVS_BEFORE\" type=\"STRING\" size=\"256\"/><Column id=\"YRYMN_TAXT_STD_BEFORE\" type=\"STRING\" size=\"256\"/><Column id=\"YRYMN_COMPUT_TAXAMT_BEFORE\" type=\"STRING\" size=\"256\"/><Column id=\"COMPUT_TAXAMT_BEFORE\" type=\"STRING\" size=\"256\"/><Column id=\"TAXT_STD_PRPDVS_AFTER\" type=\"STRING\" size=\"256\"/><Column id=\"YRYMN_TAXT_STD_AFTER\" type=\"STRING\" size=\"256\"/><Column id=\"CNVRSN_TAXT_STD_AFTER\" type=\"STRING\" size=\"256\"/><Column id=\"CNVRSN_COMPUT_TAXAMT_AFTER\" type=\"STRING\" size=\"256\"/><Column id=\"YRYMN_COMPUT_TAXAMT_AFTER\" type=\"STRING\" size=\"256\"/><Column id=\"COMPUT_TAXAMT_AFTER\" type=\"STRING\" size=\"256\"/><Column id=\"PRESV_MIN\" type=\"STRING\" size=\"256\"/><Column id=\"STDTAX\" type=\"STRING\" size=\"256\"/><Column id=\"YY_STDTAX\" type=\"STRING\" size=\"256\"/><Column id=\"YY_COMPUT_TAXAMT\" type=\"STRING\" size=\"256\"/><Column id=\"COMPUT_TAXAMT\" type=\"STRING\" size=\"256\"/><Column id=\"TAXAMT_DDC\" type=\"STRING\" size=\"256\"/><Column id=\"INCMTAX\" type=\"STRING\" size=\"256\"/><Column id=\"LCLTY_INCMTAX\" type=\"STRING\" size=\"256\"/><Column id=\"PSTPONE_RETIRE_INCMTAX\" type=\"STRING\" size=\"256\"/><Column id=\"PSTPONE_RETIRE_LCLTY_INCMTAX\" type=\"STRING\" size=\"256\"/><Column id=\"PSTPONE_RETIRE_ANNTY_ACNUT_TRT\" type=\"STRING\" size=\"256\"/><Column id=\"PSTPONE_RETIRE_BSNM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PSTPONE_RETIRE_ACNUTNO\" type=\"STRING\" size=\"256\"/><Column id=\"PSTPONE_RETIRE_RCPMNY_DE\" type=\"STRING\" size=\"256\"/><Column id=\"PSTPONE_RETIRE_RCPMNY_AM\" type=\"STRING\" size=\"256\"/><Column id=\"DDCT_LEV_SRC_INCMTAX\" type=\"STRING\" size=\"256\"/><Column id=\"DDCT_LEV_SRC_LCLTY_INCMTAX\" type=\"STRING\" size=\"256\"/><Column id=\"RL_RECPT_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"EXCTV_AT\" type=\"STRING\" size=\"256\"/><Column id=\"ANSLRY_AT\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"GNFD_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ECNY_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDW_LOAN_DDC\" type=\"STRING\" size=\"256\"/><Column id=\"CNWK_MONTH_BEFORE\" type=\"STRING\" size=\"256\"/><Column id=\"CNWK_MONTH_AFTER\" type=\"STRING\" size=\"256\"/><Column id=\"FIX_RATE_DDC\" type=\"STRING\" size=\"256\"/><Column id=\"CNWK_YEAR_DDC\" type=\"STRING\" size=\"256\"/><Column id=\"CNWK_MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES2\" type=\"STRING\" size=\"256\"/><Column id=\"BIZRNO\" type=\"STRING\" size=\"256\"/><Column id=\"MTLTY\" type=\"STRING\" size=\"256\"/><Column id=\"RPRSNTV\" type=\"STRING\" size=\"256\"/><Column id=\"RPRSNTV_IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"JURIRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES_DETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES_RN\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"FAXNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"BIZCND\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM_ENCPT\" type=\"STRING\" size=\"256\"/><Column id=\"DDC_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_print",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RETIRE_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","0","2",null,"20","1015",null,this.div_search);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","104","53",null,"5","887",null,this.div_search);_a.set_taborder("3");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","177","5","42","21",null,null,this.div_search);_a.set_taborder("4");_a.set_text("성명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_EMP","absolute","214","5","162","21",null,null,this.div_search);_a.set_taborder("2");_a.set_text("Div00");_a.set_async("false");_a.set_url("com::empno.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","15","5","62","21",null,null,this.div_search);_a.set_taborder("5");_a.set_text("퇴직년월");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_pymntYm","absolute","78","5","85","21",null,null,this.div_search);_a.set_taborder("0");_a.set_async("false");_a.set_url("common::frmMonCal.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","162","2",null,"20","853",null,this.div_search);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","33",null,"10","28",null,this);_a.set_taborder("5");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static31","absolute","0","39","170","19",null,null,this);_a.set_taborder("6");_a.set_text("퇴직금지급정보");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","53",null,"5","28",null,this);_a.set_taborder("7");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0",null,"735","13",null,this);_a.set_taborder("8");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","1046","0",null,"735","0",null,this);_a.set_taborder("9");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_retireSalaryPymnt","absolute","0","58",null,null,"28","0",this);_a.set_taborder("10");_a.set_binddataset("ds_retireSalaryPymnt");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"74\"/><Column size=\"110\"/><Column size=\"138\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"140\"/><Column size=\"160\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"지급여부\"/><Cell col=\"2\" text=\"정산구분\"/><Cell col=\"3\" text=\"지급일자\"/><Cell col=\"4\" text=\"부서\"/><Cell col=\"5\" text=\"사번\"/><Cell col=\"6\" text=\"성명\"/><Cell col=\"7\" text=\"입사일\"/><Cell col=\"8\" text=\"기산일\"/><Cell col=\"9\" text=\"퇴직일\"/><Cell col=\"10\" text=\"근속년\"/><Cell col=\"11\" text=\"지급은행\"/><Cell col=\"12\" text=\"은행계좌\"/><Cell col=\"13\" text=\"퇴직금\"/><Cell col=\"14\" text=\"소득세\"/><Cell col=\"15\" text=\"지방소득세\"/><Cell col=\"16\" text=\"실수령액\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:PYMNT_AT\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"none\" text=\"bind:RETIRE_SE\" combodataset=\"ds_retirese\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"none\" text=\"bind:LAST_PYMNT_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" text=\"bind:DEPT_NM\"/><Cell col=\"5\" text=\"bind:EMPNO\" expandshow=\"hide\"/><Cell col=\"6\" text=\"bind:EMPNM\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:ECNY_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"date\" edittype=\"none\" text=\"bind:LAST_RECKN_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"date\" edittype=\"none\" text=\"bind:LAST_RETIRE_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"none\" text=\"bind:LAST_CNWK_YCNT\"/><Cell col=\"11\" displaytype=\"normal\" edittype=\"none\" text=\"bind:FNNC_INSTT_CODE_NM\"/><Cell col=\"12\" edittype=\"none\" text=\"bind:PYMNT_BANK_ACNUT\"/><Cell col=\"13\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:RTRPAY\"/><Cell col=\"14\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:DDCT_WHTAX\"/><Cell col=\"15\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:DDCT_WTHTX_LLX\"/><Cell col=\"16\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:RL_RTRPAY\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("SAL040108");_b.set_titletext("퇴직금지급명세서조회");});this.addLayout(_a.name,_a);_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::empno.xfdl");this._addPreloadList("fdl","common::frmMonCal.xfdl");};this.addIncludeScript("SAL040108.xfdl","lib::comInclude.xjs");this.addIncludeScript("SAL040108.xfdl","mis_lib::misUtil.xjs");this.registerScript("SAL040108.xfdl",function(){this.SAL040108_onload=function(_a,_b){this.fn_misFormInit(this);this.gfn_initForm(this);this.gfn_initCondDs(this,this.div_search);this.div_search.div_pymntYm.fn_setBind("ds_cond00","RETIRE_YM");this.div_search.div_EMP.fn_setBind("ds_cond00","EMPNO","EMPNM");var _c=[["ds_bankcode","COM021","1",""]];var _d=function(){this.ds_cond00.clearData();this.ds_cond00.addRow();this.ds_cond00.setColumn(0,"RETIRE_YM",this.dateUtils.format(this.gfn_today(),"yyyymm"));this.fn_search();};this.gfn_comboLoad(_c,this.fn_callbackAfter);};this.fn_search=function(){this.ds_retireSalaryPymnt.clearData();this.fn_transaction("selectRetirePymntList");};this.fn_print=function(){if(this.ds_retireSalaryPymnt.rowposition> -1){this.ds_print.clearData();var _a=this.ds_print.addRow();this.ds_print.setColumn(_a,"EMPNO",this.ds_retireSalaryPymnt.getColumn(this.ds_retireSalaryPymnt.rowposition,"EMPNO"));this.ds_print.setColumn(_a,"SEQ",this.ds_retireSalaryPymnt.getColumn(this.ds_retireSalaryPymnt.rowposition,"SEQ"));this.ds_print.setColumn(_a,"RETIRE_SE",this.ds_retireSalaryPymnt.getColumn(this.ds_retireSalaryPymnt.rowposition,"RETIRE_SE"));this.gfn_ReportPopup(this,"MIS/SAL/SAL040108_R01.crf",this.ds_print);}};this.fn_transaction=function(_a){switch(_a){case "selectRetirePymntList":var _b="hsco/mis/sal/SAL040108/selectRetirePymntList.do";var _c="input1=ds_cond00";var _d="ds_retireSalaryPymnt=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "selectRetirePymntList":break;}}};});this.on_initEvent=function(){this.addEventHandler("onload",this.SAL040108_onload,this);this.div_search.div_EMP.addEventHandler("onkeyup",this.div_SEARCH_div_EMP_onkeyup,this);this.grd_retireSalaryPymnt.addEventHandler("oncellclick",this.grd_retireSalaryPymnt_oncellclick,this);this.grd_retireSalaryPymnt.addEventHandler("onheadclick",this.grd_retireTrgter_onheadclick,this);};this.loadIncludeScript("SAL040108.xfdl");this.loadPreloadList();};})();