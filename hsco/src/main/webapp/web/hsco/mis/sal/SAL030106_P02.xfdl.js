﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SAL030106_P02");this.set_classname("SAL030106_P02");this.set_titletext("급여지급대장");this._setFormPosition(0,0,1000,700);}_a=new Dataset("ds_mtSalaryPymntList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YYYYMM\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_YM\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ANSLRY_AT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRMPC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"OFCPS\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SRCLS\" type=\"STRING\" size=\"256\"/><Column id=\"BSLRY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BSLRY_EXCCLC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CNSTRC_ALLWNC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"INORG_CNWK_ALLWNC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TCHNLGY_ALLWNC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FAMILY_ALLWNC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SPCL_JOB_ALLWNC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SPCIFY_JOB_EXC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DRV_ALLWNC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RISK_ALLWNC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TRTMNT_ALLWNC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YRYC_ALLWNC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SCHXPN_SBSIDY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"INCNTV_PRICEWAGE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BUDGET_PRICEWAGE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DTY_ALLWNC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TIME__ELSE_ALLWNC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MLSV_SBSIDY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RSPOFC_SBSIDY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TRNSPORT_SBSIDY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"JOB_PRTN_TRVCT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SPT_SYSM_CT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MNG_ALLWNC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MANAGE_JOB_ALLWNC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RESTDE_ALLWNC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"INFANT_NRTR_CT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ETC_ALLWNC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ALLWNC_EXCCLC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SALARY_PYMNT_TOTAMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ALLWNC_PYMNT_TOTAMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TOT_PYMNTAMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"INCMTAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LCLTY_INCMTAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"HLTHINS\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NPN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EMPLYMINSRNC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ENDW_PRNCPAL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ENDW_INTR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MXTR_CT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SRVC_GRP_ENDW\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SCHXPN_RPAY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YND_EXCCLC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MENDNG_SEIZR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"INCMTAX_EXCCLC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LCLTY_INCMTAX_EXCCLC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"HLTHINS_EXCCLC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EMPLYMINSRNC_EXCCLC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DDC_TOTAMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ODYGS\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RL_RECPT_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CLOS_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CLOS_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"TAXT_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TAXXMPT_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FSTMP_PURCHS_DDC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ETC_DDC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"HOLIDY_VCATN_CT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BONUS\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MDAT_ALLWNC\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"PYMNT_YM\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond00</Col><Col id=\"colId\">PYMNT_DE</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col><Col id=\"type\"/><Col id=\"nlength\"/><Col id=\"from\"/><Col id=\"to\"/><Col id=\"lengthChkGb\"/><Col id=\"msgId\">지급년월</Col><Col id=\"expr\"/><Col id=\"func\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","0","1000","700",null,null,this);_a.set_taborder("14");_a.set_cssclass("sta_WF_PopupBg");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","1","0",null,"15","1",null,this);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","2","15","335",null,null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","15","18","210","21",null,null,this);_a.set_taborder("3");_a.set_text("급여지급대장");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Button("btn_Confirm","absolute","882","15","50","25",null,null,this);_a.set_taborder("4");_a.set_text("확인");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Close","absolute","935","15","50","25",null,null,this);_a.set_taborder("5");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Static("Static00","absolute",null,"2","15","306","0",null,this);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","10","40",null,"5","10",null,this);_a.set_taborder("8");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","15","45",null,"34","13",null,this);_a.set_taborder("9");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static18","absolute","74","2","4","50",null,null,this.div_search);_a.set_taborder("103");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static07","absolute","88","26","38","5",null,null,this.div_search);_a.set_taborder("104");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","96","0","38","5",null,null,this.div_search);_a.set_taborder("105");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","288","5","65","21",null,null,this.div_search);_a.set_taborder("106");_a.set_text("사원번호");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_EMP","absolute","350","5","162","21",null,null,this.div_search);_a.set_taborder("107");_a.set_text("Div00");_a.set_async("false");_a.set_url("com::empno.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","2","14","21",null,null,this.div_search);_a.set_taborder("114");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static05","absolute","408","2","14","21",null,null,this.div_search);_a.set_taborder("115");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","15","5","65","21",null,null,this.div_search);_a.set_taborder("117");_a.set_text("부서코드");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_dept","absolute","77","6","195","22",null,null,this.div_search);_a.set_taborder("118");_a.set_text("Div00");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Grid("grd_mtSalaryPymntList","absolute","15",null,null,"581","15","15",this);_a.set_taborder("11");_a.set_binddataset("ds_mtSalaryPymntList");_a.set_autofittype("none");_a.style.set_font("9 Gulim");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"70\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"23\" band=\"head\"/><Row size=\"23\" band=\"head\"/><Row size=\"23\" band=\"head\"/><Row size=\"23\" band=\"head\"/><Row size=\"23\"/><Row size=\"23\"/><Row size=\"23\"/><Row size=\"23\"/><Row size=\"23\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"5\" text=\"번호\"/><Cell col=\"1\" text=\"지급년월\"/><Cell col=\"2\" style=\"font: ;\" text=\"봉급\"/><Cell col=\"3\" style=\"font: ;\" text=\"건설수당\"/><Cell col=\"4\" style=\"font: ;\" text=\"장기수당\"/><Cell col=\"5\" style=\"font: ;\" text=\"기술수당\"/><Cell col=\"6\" style=\"font: ;\" text=\"가족수당\"/><Cell col=\"7\" style=\"font: ;\" text=\"특수업무\"/><Cell col=\"8\" style=\"font: ;\" text=\"운전수당\"/><Cell col=\"9\" style=\"font: ;\" text=\"위험수당\"/><Cell col=\"10\" style=\"font: ;\" text=\"대우수당\"/><Cell col=\"11\" style=\"font: ;\" text=\"연차수당\"/><Cell col=\"12\" style=\"font: ;\" text=\"학자금보조\"/><Cell col=\"13\" style=\"font: ;\" text=\"특정업무\"/><Cell col=\"14\" style=\"font: ;\" text=\"인센티브\"/><Cell col=\"15\" style=\"font: ;\" text=\"특별성과급\" wordwrap=\"char\"/><Cell col=\"16\" rowspan=\"2\" style=\"font: ;\" text=\"봉급합계\"/><Cell row=\"1\" col=\"1\" style=\"font: ;\" text=\"성명\"/><Cell row=\"1\" col=\"2\" style=\"font: ;\" text=\"명절휴가비\"/><Cell row=\"1\" col=\"3\" style=\"font: ;\" text=\"상여금\"/><Cell row=\"1\" col=\"4\" style=\"font: ;\" text=\"직무수당\"/><Cell row=\"1\" col=\"5\" style=\"font: ;\" text=\"기타지급\"/><Cell row=\"1\" col=\"6\" style=\"font: ;\"/><Cell row=\"1\" col=\"7\" style=\"font: ;\"/><Cell row=\"1\" col=\"8\" style=\"font: ;\"/><Cell row=\"1\" col=\"9\" style=\"font: ;\"/><Cell row=\"1\" col=\"10\" style=\"font: ;\"/><Cell row=\"1\" col=\"11\" style=\"font: ;\"/><Cell row=\"1\" col=\"12\" style=\"font: ;\"/><Cell row=\"1\" col=\"13\" style=\"font: ;\"/><Cell row=\"1\" col=\"14\" style=\"font: ;\"/><Cell row=\"1\" col=\"15\" style=\"font: ;\"/><Cell row=\"2\" col=\"1\" style=\"font: ;\" text=\"직급/호봉\"/><Cell row=\"2\" col=\"2\" style=\"font: ;\" text=\"시간외수당\"/><Cell row=\"2\" col=\"3\" style=\"font: ;\" text=\"조정수당\"/><Cell row=\"2\" col=\"4\" style=\"font: ;\" text=\"급식보조비\"/><Cell row=\"2\" col=\"5\" style=\"font: ;\" text=\"직책보조비\"/><Cell row=\"2\" col=\"6\" style=\"font: ;\" text=\"교통보조비\"/><Cell row=\"2\" col=\"7\" style=\"font: ;\" text=\"업무추진비\"/><Cell row=\"2\" col=\"8\" style=\"font: ;\" text=\"현장체제비\"/><Cell row=\"2\" col=\"9\" style=\"font: ;\" text=\"감독수당\"/><Cell row=\"2\" col=\"10\" style=\"font: ;\" text=\"관리업무\"/><Cell row=\"2\" col=\"11\" style=\"font: ;\" text=\"휴일수당\"/><Cell row=\"2\" col=\"12\" style=\"font: ;\" text=\"영유아보육비\" wordwrap=\"char\"/><Cell row=\"2\" col=\"13\" style=\"font: ;\"/><Cell row=\"2\" col=\"14\" style=\"font: ;\"/><Cell row=\"2\" col=\"15\" style=\"font: ;\"/><Cell row=\"2\" col=\"16\" style=\"font: ;\" text=\"수당합계\"/><Cell row=\"3\" col=\"1\" style=\"font: ;\" text=\"부서명\"/><Cell row=\"3\" col=\"2\" style=\"font: ;\" text=\"소득세\"/><Cell row=\"3\" col=\"3\" style=\"font: ;\" text=\"지방소득세\"/><Cell row=\"3\" col=\"4\" style=\"font: ;\" text=\"건강보험\"/><Cell row=\"3\" col=\"5\" style=\"font: ;\" text=\"국민연금\"/><Cell row=\"3\" col=\"6\" style=\"font: ;\" text=\"고용보험\"/><Cell row=\"3\" col=\"7\" style=\"font: ;\" text=\"기금원금\"/><Cell row=\"3\" col=\"8\" style=\"font: ;\" text=\"기금이자\"/><Cell row=\"3\" col=\"9\" style=\"font: ;\" text=\"조합비\"/><Cell row=\"3\" col=\"10\" style=\"font: ;\" text=\"청아람봉사단\" wordwrap=\"char\"/><Cell row=\"3\" col=\"11\" style=\"font: ;\" text=\"학자금상환\" wordwrap=\"char\"/><Cell row=\"3\" col=\"12\" style=\"font: ;\" text=\"연말정산\"/><Cell row=\"3\" col=\"13\" style=\"font: ;\" text=\"보수압류\"/><Cell row=\"3\" col=\"14\" style=\"font: ;\" text=\"식권구입\"/><Cell row=\"3\" col=\"15\" style=\"font: ;\" text=\"기타공제\"/><Cell row=\"3\" col=\"16\" rowspan=\"2\" style=\"font: ;\" text=\"공제합계\"/><Cell row=\"4\" col=\"1\" style=\"font: ;\"/><Cell row=\"4\" col=\"2\" style=\"font: ;\" text=\"소득세정산\"/><Cell row=\"4\" col=\"3\" style=\"font: ;\" text=\"지방소득세정산\" wordwrap=\"char\"/><Cell row=\"4\" col=\"4\" style=\"font: ;\" text=\"건강보험정산\" wordwrap=\"char\"/><Cell row=\"4\" col=\"5\" style=\"font: ;\"/><Cell row=\"4\" col=\"6\" style=\"font: ;\" text=\"고용보험정산\" wordwrap=\"char\"/><Cell row=\"4\" col=\"7\" style=\"font: ;\" text=\"급여여입분\" wordwrap=\"char\"/><Cell row=\"4\" col=\"8\" style=\"font: ;\"/><Cell row=\"4\" col=\"9\" style=\"font: ;\"/><Cell row=\"4\" col=\"10\" style=\"font: ;\"/><Cell row=\"4\" col=\"11\" style=\"font: ;\"/><Cell row=\"4\" col=\"12\" style=\"font: ;\"/><Cell row=\"4\" col=\"13\" style=\"font: ;\"/><Cell row=\"4\" col=\"14\" style=\"font: ;\"/><Cell row=\"4\" col=\"15\" style=\"font: ;\"/></Band><Band id=\"body\"><Cell rowspan=\"5\" displaytype=\"number\" text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:YYYYMM\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BSLRY\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CNSTRC_ALLWNC\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:INORG_CNWK_ALLWNC\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TCHNLGY_ALLWNC\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:FAMILY_ALLWNC\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPCL_JOB_ALLWNC\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DRV_ALLWNC\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RISK_ALLWNC\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TRTMNT_ALLWNC\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:YRYC_ALLWNC\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SCHXPN_SBSIDY\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPCIFY_JOB_EXC\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"bind:INCNTV_PRICEWAGE\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BUDGET_PRICEWAGE\"/><Cell col=\"16\" rowspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SALARY_PYMNT_TOTAMT\"/><Cell row=\"1\" col=\"1\" text=\"bind:EMPNM\"/><Cell row=\"1\" col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:HOLIDY_VCATN_CT\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BONUS\"/><Cell row=\"1\" col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DTY_ALLWNC\"/><Cell row=\"1\" col=\"5\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"1\" col=\"6\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"1\" col=\"7\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"1\" col=\"8\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"1\" col=\"9\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"1\" col=\"10\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"1\" col=\"11\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"1\" col=\"12\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"1\" col=\"13\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"1\" col=\"14\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"1\" col=\"15\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"2\" col=\"1\" text=\"bind:CLSF_CODE\"/><Cell row=\"2\" col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TIME__ELSE_ALLWNC\"/><Cell row=\"2\" col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MDAT_ALLWNC\"/><Cell row=\"2\" col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MLSV_SBSIDY\"/><Cell row=\"2\" col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RSPOFC_SBSIDY\"/><Cell row=\"2\" col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TRNSPORT_SBSIDY\"/><Cell row=\"2\" col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:JOB_PRTN_TRVCT\"/><Cell row=\"2\" col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPT_SYSM_CT\"/><Cell row=\"2\" col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MNG_ALLWNC\"/><Cell row=\"2\" col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MANAGE_JOB_ALLWNC\"/><Cell row=\"2\" col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RESTDE_ALLWNC\"/><Cell row=\"2\" col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:INFANT_NRTR_CT\"/><Cell row=\"2\" col=\"13\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"2\" col=\"14\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"2\" col=\"15\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"2\" col=\"16\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ALLWNC_PYMNT_TOTAMT\"/><Cell row=\"3\" col=\"1\" text=\"bind:DEPT_NM\"/><Cell row=\"3\" col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:INCMTAX\"/><Cell row=\"3\" col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:LCLTY_INCMTAX\"/><Cell row=\"3\" col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:HLTHINS\"/><Cell row=\"3\" col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:NPN\"/><Cell row=\"3\" col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:EMPLYMINSRNC\"/><Cell row=\"3\" col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ENDW_PRNCPAL\"/><Cell row=\"3\" col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ENDW_INTR\"/><Cell row=\"3\" col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MXTR_CT\"/><Cell row=\"3\" col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SRVC_GRP_ENDW\"/><Cell row=\"3\" col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SCHXPN_RPAY\"/><Cell row=\"3\" col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:YND_EXCCLC\"/><Cell row=\"3\" col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MENDNG_SEIZR\"/><Cell row=\"3\" col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"bind:FSTMP_PURCHS_DDC\"/><Cell row=\"3\" col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ETC_DDC\"/><Cell row=\"3\" col=\"16\" rowspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DDC_TOTAMT\"/><Cell row=\"4\" col=\"1\"/><Cell row=\"4\" col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:INCMTAX_EXCCLC\"/><Cell row=\"4\" col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:LCLTY_INCMTAX_EXCCLC\"/><Cell row=\"4\" col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:HLTHINS_EXCCLC\"/><Cell row=\"4\" col=\"5\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"4\" col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:EMPLYMINSRNC_EXCCLC\"/><Cell row=\"4\" col=\"7\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"4\" col=\"8\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"4\" col=\"9\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"4\" col=\"10\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"4\" col=\"11\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"4\" col=\"12\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"4\" col=\"13\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"4\" col=\"14\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"4\" col=\"15\" displaytype=\"number\" style=\"align:right;\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" rowspan=\"5\" text=\"합계\"/><Cell col=\"2\" displaytype=\"number\" text=\"expr:dataset.getSum('BSLRY')\"/><Cell col=\"3\" displaytype=\"number\" text=\"expr:dataset.getSum('CNSTRC_ALLWNC')\"/><Cell col=\"4\" displaytype=\"number\" text=\"expr:dataset.getSum('INORG_CNWK_ALLWNC')\"/><Cell col=\"5\" displaytype=\"number\" text=\"expr:dataset.getSum('TCHNLGY_ALLWNC')\"/><Cell col=\"6\" displaytype=\"number\" text=\"expr:dataset.getSum('FAMILY_ALLWNC')\"/><Cell col=\"7\" displaytype=\"number\" text=\"expr:dataset.getSum('SPCL_JOB_ALLWNC')\"/><Cell col=\"8\" displaytype=\"number\" text=\"expr:dataset.getSum('DRV_ALLWNC')\"/><Cell col=\"9\" displaytype=\"number\" text=\"expr:dataset.getSum('RISK_ALLWNC')\"/><Cell col=\"10\" displaytype=\"number\" text=\"expr:dataset.getSum('TRTMNT_ALLWNC')\"/><Cell col=\"11\" displaytype=\"number\" text=\"expr:dataset.getSum('YRYC_ALLWNC')\"/><Cell col=\"12\" displaytype=\"number\" text=\"expr:dataset.getSum('SCHXPN_SBSIDY')\"/><Cell col=\"13\" displaytype=\"number\" text=\"expr:dataset.getSum('SPCIFY_JOB_EXC')\"/><Cell col=\"14\" displaytype=\"number\" text=\"expr:dataset.getSum('INCNTV_PRICEWAGE')\"/><Cell col=\"15\" displaytype=\"number\" text=\"expr:dataset.getSum('BUDGET_PRICEWAGE')\"/><Cell col=\"16\" rowspan=\"2\" displaytype=\"number\" text=\"expr:dataset.getSum('SALARY_PYMNT_TOTAMT')\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"2\" displaytype=\"number\" text=\"expr:dataset.getSum('HOLIDY_VCATN_CT')\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" text=\"expr:dataset.getSum('BONUS')\"/><Cell row=\"1\" col=\"4\" displaytype=\"number\" text=\"expr:dataset.getSum('INORG_CNWK_ALLWNC')\"/><Cell row=\"1\" col=\"5\" displaytype=\"number\"/><Cell row=\"1\" col=\"6\"/><Cell row=\"1\" col=\"7\"/><Cell row=\"1\" col=\"8\"/><Cell row=\"1\" col=\"9\"/><Cell row=\"1\" col=\"10\"/><Cell row=\"1\" col=\"11\"/><Cell row=\"1\" col=\"12\"/><Cell row=\"1\" col=\"13\"/><Cell row=\"1\" col=\"14\"/><Cell row=\"1\" col=\"15\"/><Cell row=\"2\"/><Cell row=\"2\" col=\"2\" displaytype=\"number\" text=\"expr:dataset.getSum('TIME__ELSE_ALLWNC')\"/><Cell row=\"2\" col=\"3\" displaytype=\"number\" text=\"expr:dataset.getSum('MDAT_ALLWNC')\"/><Cell row=\"2\" col=\"4\" displaytype=\"number\" text=\"expr:dataset.getSum('MLSV_SBSIDY')\"/><Cell row=\"2\" col=\"5\" displaytype=\"number\" text=\"expr:dataset.getSum('RSPOFC_SBSIDY')\"/><Cell row=\"2\" col=\"6\" displaytype=\"number\" text=\"expr:dataset.getSum('TRNSPORT_SBSIDY')\"/><Cell row=\"2\" col=\"7\" displaytype=\"number\" text=\"expr:dataset.getSum('JOB_PRTN_TRVCT')\"/><Cell row=\"2\" col=\"8\" displaytype=\"number\" text=\"expr:dataset.getSum('SPT_SYSM_CT')\"/><Cell row=\"2\" col=\"9\" displaytype=\"number\" text=\"expr:dataset.getSum('MNG_ALLWNC')\"/><Cell row=\"2\" col=\"10\" displaytype=\"number\" text=\"expr:dataset.getSum('MANAGE_JOB_ALLWNC')\"/><Cell row=\"2\" col=\"11\" displaytype=\"number\" text=\"expr:dataset.getSum('RESTDE_ALLWNC')\"/><Cell row=\"2\" col=\"12\" displaytype=\"number\" text=\"expr:dataset.getSum('INFANT_NRTR_CT')\"/><Cell row=\"2\" col=\"13\"/><Cell row=\"2\" col=\"14\"/><Cell row=\"2\" col=\"15\"/><Cell row=\"2\" col=\"16\" displaytype=\"number\" text=\"expr:dataset.getSum('ALLWNC_PYMNT_TOTAMT')\"/><Cell row=\"3\"/><Cell row=\"3\" col=\"2\" displaytype=\"number\" text=\"expr:dataset.getSum('INCMTAX')\"/><Cell row=\"3\" col=\"3\" displaytype=\"number\" text=\"expr:dataset.getSum('LCLTY_INCMTAX')\"/><Cell row=\"3\" col=\"4\" displaytype=\"number\" text=\"expr:dataset.getSum('HLTHINS')\"/><Cell row=\"3\" col=\"5\" displaytype=\"number\" text=\"expr:dataset.getSum('NPN')\"/><Cell row=\"3\" col=\"6\" displaytype=\"number\" text=\"expr:dataset.getSum('EMPLYMINSRNC')\"/><Cell row=\"3\" col=\"7\" displaytype=\"number\" text=\"expr:dataset.getSum('ENDW_PRNCPAL')\"/><Cell row=\"3\" col=\"8\" displaytype=\"number\" text=\"expr:dataset.getSum('ENDW_INTR')\"/><Cell row=\"3\" col=\"9\" displaytype=\"number\" text=\"expr:dataset.getSum('MXTR_CT')\"/><Cell row=\"3\" col=\"10\" displaytype=\"number\" text=\"expr:dataset.getSum('SRVC_GRP_ENDW')\"/><Cell row=\"3\" col=\"11\" displaytype=\"number\" text=\"expr:dataset.getSum('SCHXPN_RPAY')\"/><Cell row=\"3\" col=\"12\" displaytype=\"number\" text=\"expr:dataset.getSum('YND_EXCCLC')\"/><Cell row=\"3\" col=\"13\" displaytype=\"number\" text=\"expr:dataset.getSum('MENDNG_SEIZR')\"/><Cell row=\"3\" col=\"14\" displaytype=\"number\" text=\"expr:dataset.getSum('FSTMP_PURCHS_DDC')\"/><Cell row=\"3\" col=\"15\" displaytype=\"number\" text=\"expr:dataset.getSum('ETC_DDC')\"/><Cell row=\"3\" col=\"16\" rowspan=\"2\" displaytype=\"number\" text=\"expr:dataset.getSum('DDC_TOTAMT')\"/><Cell row=\"4\"/><Cell row=\"4\" col=\"2\" displaytype=\"number\" text=\"expr:dataset.getSum('INCMTAX_EXCCLC')\"/><Cell row=\"4\" col=\"3\" displaytype=\"number\" text=\"expr:dataset.getSum('LCLTY_INCMTAX_EXCCLC')\"/><Cell row=\"4\" col=\"4\" displaytype=\"number\" text=\"expr:dataset.getSum('HLTHINS_EXCCLC')\"/><Cell row=\"4\" col=\"5\"/><Cell row=\"4\" col=\"6\" displaytype=\"number\" text=\"expr:dataset.getSum('EMPLYMINSRNC_EXCCLC')\"/><Cell row=\"4\" col=\"7\" displaytype=\"number\"/><Cell row=\"4\" col=\"8\"/><Cell row=\"4\" col=\"9\"/><Cell row=\"4\" col=\"10\"/><Cell row=\"4\" col=\"11\"/><Cell row=\"4\" col=\"12\"/><Cell row=\"4\" col=\"13\"/><Cell row=\"4\" col=\"14\"/><Cell row=\"4\" col=\"15\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("Excel_down","absolute",null,"81","25","19","15",null,this);_a.set_taborder("12");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","0%",null,null,"15","0.2%","0",this);_a.set_taborder("13");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,34,this.div_search,function(_b){_b.set_taborder("9");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1000,700,this,function(_b){_b.set_classname("SAL030106_P02");_b.set_titletext("급여지급대장");});this.addLayout(_a.name,_a);_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::empno.xfdl");this._addPreloadList("fdl","com::deptCode.xfdl");};this.addIncludeScript("SAL030106_P02.xfdl","lib::comInclude.xjs");this.registerScript("SAL030106_P02.xfdl",function(){var _a=this.parent.PYMNTYM;var _b=this.parent.PYMNTDE;var _c=this.parent.PYMNTSE;var _d=this.parent.SALARYSE;this.SAL030106_P02_oninit=function(_e,_f){this.fn_init_form();this.fn_init_dataset();};this.SAL030106_P02_onload=function(_e,_f){this.fn_search();};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){this.ds_mtSalaryPymntList.clearData();this.ds_cond00.clearData();var _e="";var _f="";if(this.div_search.div_EMP.GetValue("EMPNO")){_f=this.div_search.div_EMP.GetValue("EMPNO");}if(this.div_search.div_dept.GetValue("DEPT_CODE")){_e=this.div_search.div_dept.GetValue("DEPT_CODE");}this.ds_cond00.addRow();this.ds_cond00.setColumn(0,"PYMNT_YM",_a);this.ds_cond00.setColumn(0,"PYMNT_DE",_b);this.ds_cond00.setColumn(0,"PYMNT_SE",_c);this.ds_cond00.setColumn(0,"SALARY_SE",_d);this.ds_cond00.setColumn(0,"EMPNO",_f);this.ds_cond00.setColumn(0,"DEPT_CODE",_e);if(!this.gfn_checkValidation(this.ds_cond00,this.ds_validation)){return;}this.fn_transaction("selectSalaryPymntSheetList");};this.fn_transaction=function(_e){switch(_e){case "selectSalaryPymntSheetList":var _f="hsco/mis/sal/SAL030106/selectSalaryPymntSheetList.do";var _g="input4=ds_cond00";var _h="ds_mtSalaryPymntList=output4";break;}Ex.core.tran(this,_e,_f,_g,_h);};this.fn_callBack=function(_e,_f,_g){if(_f!=0){this.gfn_callback_message(_e,_f,_g);}else{switch(_e){case "selectSalaryPymntSheetList":break;}}};this.btn_Close_onclick=function(_e,_f){this.close();};this.btn_Confirm_onclick=function(_e,_f){this.fn_search();};this.Excel_down_onclick=function(_e,_f){this.gfn_exportExcel(this.grd_mtSalaryPymntList,"mtSalaryPymnt");};this.Button00_onclick=function(_e,_f){this.close();};});this.on_initEvent=function(){this.addEventHandler("oninit",this.SAL030106_P02_oninit,this);this.addEventHandler("onload",this.SAL030106_P02_onload,this);this.btn_Confirm.addEventHandler("onclick",this.btn_Confirm_onclick,this);this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);this.div_search.div_EMP.addEventHandler("onkeyup",this.div_SEARCH_div_EMP_onkeyup,this);this.div_search.div_dept.addEventHandler("onkeyup",this.div_SEARCH_div_EMP_onkeyup,this);this.Excel_down.addEventHandler("onclick",this.Excel_down_onclick,this);};this.loadIncludeScript("SAL030106_P02.xfdl");this.loadPreloadList();};})();