﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SAL050201");this.set_classname("SAL050201");this.set_titletext("연말정산기본생성관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EXCCLC_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"EXCCLC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR20\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR60\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR70\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR6\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_yndExcclcCreat",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EXCCLC_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"A1\" type=\"INT\" size=\"256\"/><Column id=\"A2\" type=\"INT\" size=\"256\"/><Column id=\"A3\" type=\"INT\" size=\"256\"/><Column id=\"A4\" type=\"INT\" size=\"256\"/><Column id=\"A5\" type=\"INT\" size=\"256\"/><Column id=\"A6\" type=\"INT\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">EXCCLC_YEAR</Col><Col id=\"compId\">ds_cond00</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_cond00</Col><Col id=\"colId\">EXCCLC_SE</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_year",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"year\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_yndExcclcBsis",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EXCCLC_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"EXCCLC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"EXCCLC_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"EXCCLC_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SRCLS\" type=\"STRING\" size=\"256\"/><Column id=\"OFCPS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ECNY_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ECNY_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RETIRE_DE\" type=\"STRING\" size=\"256\"/><Column id=\"DSPSN_GRAD\" type=\"STRING\" size=\"256\"/><Column id=\"RWDMRT_GRAD\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_SE\" type=\"STRING\" size=\"256\"/><Column id=\"HSHLDR_AT\" type=\"STRING\" size=\"256\"/><Column id=\"SPOUSE_CO\" type=\"STRING\" size=\"256\"/><Column id=\"LADY_HSHLDR\" type=\"STRING\" size=\"256\"/><Column id=\"SUPORTR_20\" type=\"STRING\" size=\"256\"/><Column id=\"SUPORTR_60\" type=\"STRING\" size=\"256\"/><Column id=\"COURS_PVLTRT_65\" type=\"STRING\" size=\"256\"/><Column id=\"COURS_PVLTRT_70\" type=\"STRING\" size=\"256\"/><Column id=\"DSPSN_CO\" type=\"STRING\" size=\"256\"/><Column id=\"CHLDRN_6_BELOW\" type=\"STRING\" size=\"256\"/><Column id=\"CHLDBRTH_ADP_CHLDRN\" type=\"STRING\" size=\"256\"/><Column id=\"MNYCH\" type=\"STRING\" size=\"256\"/><Column id=\"PARNTS_1\" type=\"STRING\" size=\"256\"/><Column id=\"NPN\" type=\"STRING\" size=\"256\"/><Column id=\"INDVDL_ANNTY_SVINGS_BEFORE\" type=\"STRING\" size=\"256\"/><Column id=\"INDVDL_ANNTY_SVINGS_AFTER\" type=\"STRING\" size=\"256\"/><Column id=\"ANNTY_SVINGS_DDC\" type=\"STRING\" size=\"256\"/><Column id=\"HLTHINS\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLYMINSRNC\" type=\"STRING\" size=\"256\"/><Column id=\"GRNT_INSRNC\" type=\"STRING\" size=\"256\"/><Column id=\"DSPSN_DVR_INSRNC\" type=\"STRING\" size=\"256\"/><Column id=\"GNRL_MCP\" type=\"STRING\" size=\"256\"/><Column id=\"SELF_COURS_TROBL_MCP\" type=\"STRING\" size=\"256\"/><Column id=\"ERNM_3\" type=\"STRING\" size=\"256\"/><Column id=\"DDC_MCP\" type=\"STRING\" size=\"256\"/><Column id=\"SELF_EDCCT\" type=\"STRING\" size=\"256\"/><Column id=\"ESHL_BFE_EDCCT\" type=\"STRING\" size=\"256\"/><Column id=\"GNRL_EDCCT\" type=\"STRING\" size=\"256\"/><Column id=\"UNIV_EDCCT\" type=\"STRING\" size=\"256\"/><Column id=\"DSPSN_EDCCT\" type=\"STRING\" size=\"256\"/><Column id=\"INVSTMNT_INVT\" type=\"STRING\" size=\"256\"/><Column id=\"INVT_MXTR\" type=\"STRING\" size=\"256\"/><Column id=\"SUBSCRPT_SVINGS\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_SUBSCRPT_GNRLZ\" type=\"STRING\" size=\"256\"/><Column id=\"LABRR_HOUSE_PREPRTN\" type=\"STRING\" size=\"256\"/><Column id=\"LFSTS_INTR\" type=\"STRING\" size=\"256\"/><Column id=\"PNINT_RPAY_FNNC\" type=\"STRING\" size=\"256\"/><Column id=\"PNINT_RPAY_RESIDNT\" type=\"STRING\" size=\"256\"/><Column id=\"MTHT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_MRTG_BRRW_INSTT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_MRTG_BRRW_DE\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_MRTG_BRRW_INTR_14\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_MRTG_BRRW_INTR_29\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_MRTG_BRRW_INTR_30\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_MRTG_BRRW_INTR_FIXING\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_MRTG_BRRW_INTR_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"LEGAL_CNTR\" type=\"STRING\" size=\"256\"/><Column id=\"EXCPT_CNTR\" type=\"STRING\" size=\"256\"/><Column id=\"EXCPT_CNTR_LMT\" type=\"STRING\" size=\"256\"/><Column id=\"APPN_CNTR\" type=\"STRING\" size=\"256\"/><Column id=\"LABOR_MXTR\" type=\"STRING\" size=\"256\"/><Column id=\"APPN_CNTR_LMT_PRVYY\" type=\"STRING\" size=\"256\"/><Column id=\"END_CNTR\" type=\"STRING\" size=\"256\"/><Column id=\"APPN_TXCLCTPT_LMT_THSYR\" type=\"STRING\" size=\"256\"/><Column id=\"LEGAL_CNTR_CYFD\" type=\"STRING\" size=\"256\"/><Column id=\"APPN_CNTR_CYFD\" type=\"STRING\" size=\"256\"/><Column id=\"RELGN_CNTR_CYFD\" type=\"STRING\" size=\"256\"/><Column id=\"APPN_CNTR_LMT_UNITY\" type=\"STRING\" size=\"256\"/><Column id=\"MRRG_HMV_FNRL\" type=\"STRING\" size=\"256\"/><Column id=\"SPT_TCHNLGY_HNF\" type=\"STRING\" size=\"256\"/><Column id=\"CNWK_SDYTRN\" type=\"STRING\" size=\"256\"/><Column id=\"CREDTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"DBCD\" type=\"STRING\" size=\"256\"/><Column id=\"PBTRNSP_USE\" type=\"STRING\" size=\"256\"/><Column id=\"CASH_RCIPT\" type=\"STRING\" size=\"256\"/><Column id=\"TRDIT_MRKT_USE\" type=\"STRING\" size=\"256\"/><Column id=\"ERNM_25\" type=\"STRING\" size=\"256\"/><Column id=\"ERNM_20\" type=\"STRING\" size=\"256\"/><Column id=\"CREDTCARD_DDC\" type=\"STRING\" size=\"256\"/><Column id=\"OUTNATN_WORK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OUTNATN_WORK_RSPOFC\" type=\"STRING\" size=\"256\"/><Column id=\"OUTNATN_WORK_PD\" type=\"STRING\" size=\"256\"/><Column id=\"OUTNATN_WORK_TOT_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"OUTNATN_WORK_TAXPAY_YEAST\" type=\"STRING\" size=\"256\"/><Column id=\"OUTNATN_WORK_TAXPAY_WON\" type=\"STRING\" size=\"256\"/><Column id=\"OUTNATN_WORK_TAXPAY_FGCRY\" type=\"STRING\" size=\"256\"/><Column id=\"OUTNATN_WORK_TAXAMT_DDC\" type=\"STRING\" size=\"256\"/><Column id=\"FUND_1\" type=\"STRING\" size=\"256\"/><Column id=\"FUND_2\" type=\"STRING\" size=\"256\"/><Column id=\"FUND_3\" type=\"STRING\" size=\"256\"/><Column id=\"INORG_SCRITS_SVINGS\" type=\"STRING\" size=\"256\"/><Column id=\"SVINGS_SM\" type=\"STRING\" size=\"256\"/><Column id=\"POLITC_CPTAL_CNTR\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_INTR_RPAY_AMOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"115","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static18","absolute","74","2",null,"120","951",null,this.div_search);_a.set_taborder("0");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static07","absolute","88","0",null,"5","903",null,this.div_search);_a.set_taborder("2");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","-5",null,"57","1016",null,this.div_search);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","15","5","66","21",null,null,this.div_search);_a.set_taborder("7");_a.set_text("정산구분");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Button("btn_cre","absolute","78","83","40","21",null,null,this.div_search);_a.set_taborder("4");_a.set_text("생성");_a.set_cssclass("btn_WF_Process");this.div_search.addChild(_a.name,_a);_a=new CheckBox("chk_del","absolute","134","85","83","20",null,null,this.div_search);_a.set_taborder("5");_a.set_text("자료삭제");_a.set_value("N");_a.set_truevalue("Y");_a.set_falsevalue("N");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","80","26",null,"5","911",null,this.div_search);_a.set_taborder("8");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","82","52",null,"5","909",null,this.div_search);_a.set_taborder("9");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static05","absolute","80","78",null,"5","911",null,this.div_search);_a.set_taborder("10");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static06","absolute","15","31","66","21",null,null,this.div_search);_a.set_taborder("11");_a.set_text("정산년도");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static08","absolute","15","57","66","21",null,null,this.div_search);_a.set_taborder("12");_a.set_text("성명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","80","108",null,"5","911",null,this.div_search);_a.set_taborder("13");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Radio("rad_excclcSe","absolute","78","6","193","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);var _b=new Dataset("rad_excclcSe_innerdataset",this.div_search.rad_excclcSe);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">연말정산</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">중도퇴직정산</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("14");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_value("1");_a.set_direction("vertical");_a.set_cssclass("rdo_WF_Essential");_a.set_index("0");_a=new Spin("spn_excclcYear","absolute","78","31","80","21",null,null,this.div_search);_a.set_taborder("1");_a.set_value("2015");_a.set_cssclass("spn_WF_Essential");_a.set_max("3000");_a.set_min("2010");_a.set_increment("1");this.div_search.addChild(_a.name,_a);_a=new Div("div_EMP","absolute","78","57","162","21",null,null,this.div_search);_a.set_taborder("3");_a.set_text("Div00");_a.set_async("false");_a.set_url("com::empno.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","115",null,"10","28",null,this);_a.set_taborder("1");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static31","absolute","0","121","170","19",null,null,this);_a.set_taborder("2");_a.set_text("연말정산기본생성내역");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","135",null,"5","28",null,this);_a.set_taborder("3");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0",null,"735","13",null,this);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","1046","0",null,"735","0",null,this);_a.set_taborder("5");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_mtSalaryCreat","absolute","0","139",null,null,"28","0",this);_a.set_taborder("6");_a.set_binddataset("ds_yndExcclcCreat");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"번호\"/><Cell col=\"1\" rowspan=\"2\" text=\"정산년도\"/><Cell col=\"2\" colspan=\"3\" text=\"연말정산\"/><Cell col=\"5\" colspan=\"3\" text=\"중도퇴직정산\"/><Cell row=\"1\" col=\"2\" text=\"일반직\"/><Cell row=\"1\" col=\"3\" text=\"계약직\"/><Cell row=\"1\" col=\"4\" text=\"기간제\"/><Cell row=\"1\" col=\"5\" text=\"일반직\"/><Cell row=\"1\" col=\"6\" text=\"계약직\"/><Cell row=\"1\" col=\"7\" text=\"기간제\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:EXCCLC_YEAR\"/><Cell col=\"2\" displaytype=\"number\" text=\"bind:A1\"/><Cell col=\"3\" displaytype=\"number\" text=\"bind:A2\"/><Cell col=\"4\" displaytype=\"number\" text=\"bind:A3\"/><Cell col=\"5\" displaytype=\"number\" text=\"bind:A4\"/><Cell col=\"6\" displaytype=\"number\" text=\"bind:A5\"/><Cell col=\"7\" displaytype=\"number\" text=\"bind:A6\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",0,115,this.div_search,function(_c){_c.set_taborder("0");_c.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_c){_c.set_classname("SAL050201");_c.set_titletext("연말정산기본생성관리");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.spn_excclcYear","value","ds_year","year");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::empno.xfdl");};this.addIncludeScript("SAL050201.xfdl","lib::comInclude.xjs");this.registerScript("SAL050201.xfdl",function(){this.SAL050201_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.SAL050201_onload=function(_a,_b){this.div_search.spn_excclcYear.set_value(((this.dateUtils.format(this.gfn_today(),"yyyy")*1)-1)+"");this.div_search.spn_excclcYear.setFocus(true);this.fn_search();};this.fn_init_form=function(){this.gfn_initForm(this);this.div_search.chk_del.set_value("N");};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){this.ds_yndExcclcCreat.clearData();this.ds_cond00.clearData();this.ds_cond00.addRow();this.ds_cond00.setColumn(0,"EXCCLC_YEAR","");this.fn_transaction("selectYndExcclcCreatList");};this.fn_transaction=function(_a){switch(_a){case "selectYndExcclcCreatList":var _b="hsco/mis/sal/SAL050201/selectYndExcclcCreatList.do";var _c="input1=ds_cond00";var _d="ds_yndExcclcCreat=output1";break;case "selectYndExcclcBsisList":var _b="hsco/mis/sal/SAL050201/selectYndExcclcBsisList.do";var _c="input1=ds_cond00";var _d="ds_yndExcclcBsis=output1";break;case "saveYndExcclcCreatList":var _b="hsco/mis/sal/SAL050201/YndExcclcCreatC.do";var _c="input3=ds_cond00";var _d="";break;case "deleteYndExcclcCreatList":var _b="hsco/mis/sal/SAL050201/YndExcclcCreatD.do";var _c="input3=ds_cond00";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "selectYndExcclcCreatList":break;case "selectYndExcclcBsisList":if(this.ds_yndExcclcBsis.getRowCount()>0){this.alert(this.ds_year.getColumn(0,"year")+" 년도 생성된 내역이 있습니다.");return;}else{this.mt_creat();}break;case "saveYndExcclcCreatList":this.alert("생성이 완료되었습니다.");this.fn_search();break;case "deleteYndExcclcCreatList":this.alert(this.ds_year.getColumn(0,"year")+" 년도 삭제가 완료되었습니다.");this.fn_search();break;}}};this.div_search_btn_cre_onclick=function(_a,_b){if(this.div_search.chk_del.value=="Y"){this.mt_delete();}else if(this.div_search.chk_del.value=="N"){this.ds_yndExcclcBsis.clearData();this.ds_cond00.clearData();this.ds_cond00.addRow();var _c="";_c=this.div_search.div_EMP.GetValue("EMPNO");if(this.div_search.rad_excclcSe.value=="2"){if(!_c){this.alert("중도퇴직정산 사원을 선택하세요");return;}}this.ds_cond00.setColumn(0,"EXCCLC_YEAR",this.div_search.spn_excclcYear.value);this.ds_cond00.setColumn(0,"EXCCLC_SE",this.div_search.rad_excclcSe.value);this.ds_cond00.setColumn(0,"EMPNO",_c);if(!this.gfn_checkValidation(this.ds_cond00,this.ds_validation)){return;}this.fn_transaction("selectYndExcclcBsisList");}};this.mt_creat=function(){if(!this.ds_year.getColumn(0,"year")){alert("생성년도를 입력하세요");return;}this.ds_cond00.clearData();var _a=this.ds_cond00.addRow();var _b=this.ds_year.getColumn(0,"year");var _c=parseInt(_b)-20;var _d=parseInt(_b)-60;var _e=parseInt(_b)-70;var _f=parseInt(_b)-6;var _g="";_g=this.div_search.div_EMP.GetValue("EMPNO");this.ds_cond00.setColumn(0,"EXCCLC_YEAR",this.ds_year.getColumn(0,"year"));this.ds_cond00.setColumn(0,"EXCCLC_SE",this.div_search.rad_excclcSe.value);this.ds_cond00.setColumn(0,"EMPNO",_g);this.ds_cond00.setColumn(0,"YEAR20",_c);this.ds_cond00.setColumn(0,"YEAR60",_d);this.ds_cond00.setColumn(0,"YEAR70",_e);this.ds_cond00.setColumn(0,"YEAR6",_f);this.fn_transaction("saveYndExcclcCreatList");};this.mt_delete=function(){if(application.confirm(this.ds_year.getColumn(0,"year")+" 연말정산기본생성정보를 삭제하시겠습니까?")){if(!this.ds_year.getColumn(0,"year")){alert("연말정산생성년도를 입력하세요");return;}this.ds_cond00.clearData();var _a=this.ds_cond00.addRow();var _b=this.ds_year.getColumn(0,"year");var _c="";_c=this.div_search.div_EMP.GetValue("EMPNO");this.ds_cond00.setColumn(0,"EXCCLC_YEAR",this.ds_year.getColumn(0,"year"));this.ds_cond00.setColumn(0,"EXCCLC_SE",this.div_search.rad_excclcSe.value);this.ds_cond00.setColumn(0,"EMPNO",_c);this.fn_transaction("deleteYndExcclcCreatList");}};this.div_search_chk_del_onchanged=function(_a,_b){if(this.div_search.chk_del.value=="Y"){this.div_search.btn_cre.set_text("삭제");}else if(this.div_search.chk_del.value=="N"){this.div_search.btn_cre.set_text("생성");}};});this.on_initEvent=function(){this.addEventHandler("oninit",this.SAL050201_oninit,this);this.addEventHandler("onload",this.SAL050201_onload,this);this.div_search.btn_cre.addEventHandler("onclick",this.div_search_btn_cre_onclick,this);this.div_search.chk_del.addEventHandler("onchanged",this.div_search_chk_del_onchanged,this);this.div_search.rad_excclcSe.addEventHandler("onitemclick",this.div_search_rad_excclcSe_onitemclick,this);this.div_search.div_EMP.addEventHandler("onkeyup",this.div_SEARCH_div_EMP_onkeyup,this);};this.loadIncludeScript("SAL050201.xfdl");this.loadPreloadList();};})();