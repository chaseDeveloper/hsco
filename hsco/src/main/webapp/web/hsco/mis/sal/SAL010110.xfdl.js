(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("SAL010110");
                this.set_classname("SAL010110");
                this.set_titletext("급여기준정보관리");
                this._setFormPosition(0,0,1059,735);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emplInfoList", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"OFCPS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_emplDetailInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC\" type=\"STRING\" size=\"256\"/><Column id=\"OFCPS\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF\" type=\"STRING\" size=\"256\"/><Column id=\"SRCLS\" type=\"STRING\" size=\"256\"/><Column id=\"PROMT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ECNY_DE\" type=\"STRING\" size=\"256\"/><Column id=\"STDR_DE\" type=\"STRING\" size=\"256\"/><Column id=\"DCSN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY_SE\" type=\"STRING\" size=\"256\"/><Column id=\"LBUN_SBSCRB_AT\" type=\"STRING\" size=\"256\"/><Column id=\"STTUS\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"RISK_WORK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DRV_ALLWNC_AT\" type=\"STRING\" size=\"256\"/><Column id=\"SPCIFY_JOB_AT\" type=\"STRING\" size=\"256\"/><Column id=\"SFMNG_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ALPINE_CLUB_AT\" type=\"STRING\" size=\"256\"/><Column id=\"ENCRG_ALLWNC_AT\" type=\"STRING\" size=\"256\"/><Column id=\"SFMNG_AT1\" type=\"STRING\" size=\"256\"/><Column id=\"SFMNG_AT2\" type=\"STRING\" size=\"256\"/><Column id=\"SFMNG_AT3\" type=\"STRING\" size=\"256\"/><Column id=\"SFMNG_AT4\" type=\"STRING\" size=\"256\"/><Column id=\"SFMNG_AT5\" type=\"STRING\" size=\"256\"/><Column id=\"SFMNG_AT6\" type=\"STRING\" size=\"256\"/><Column id=\"FRACTION_AT\" type=\"STRING\" size=\"256\"/><Column id=\"TREAT_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CRW_ALLWNC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RETIRE_EMPL\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_jssfc", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond2", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"TAB_IDX\" type=\"STRING\" size=\"256\"/><Column id=\"RETIRE_EMPL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_riskWorkCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_drvAllwncAt", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_spcifyJobCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sfmngAt", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_alpineClubAt", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pymntDdcCode", this);
            obj._setContents("<ColumnInfo><Column id=\"RISK_WORK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DRV_ALLWNC_AT\" type=\"STRING\" size=\"256\"/><Column id=\"SPCIFY_JOB_AT\" type=\"STRING\" size=\"256\"/><Column id=\"SFMNG_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ALPINE_CLUB_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_radioItm", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_lbunSbscrbAt", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_salarySe", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_bassMatter", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"BASS_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SUPORT_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"TROBL_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY_BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY_BANK_ACNUT\" type=\"STRING\" size=\"256\"/><Column id=\"MENDNG_MT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"HLTHINS_INSRNC_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ODSN_INSRNC_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"NPN_INCOME_MT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"NPN_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLYMINSRNC_INCOME_MT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLYMINSRNC_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CNWK_YYCNT\" type=\"INT\" size=\"256\"/><Column id=\"CNWK_YYCNT_STDR_MT\" type=\"STRING\" size=\"256\"/><Column id=\"SRCLS\" type=\"INT\" size=\"256\"/><Column id=\"SRCLS_PROMT_STDR_MT\" type=\"STRING\" size=\"256\"/><Column id=\"SRCLS_PROMT_STDR_YY\" type=\"STRING\" size=\"256\"/><Column id=\"CNWK_YYCNT_STDR_YY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_bankCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_validation", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_gnfdList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GNFD_SE\" type=\"STRING\" size=\"256\"/><Column id=\"GNFD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GNFD_DE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZPLC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BIZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OFCPS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"OFCPS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JBLN_SE\" type=\"STRING\" size=\"256\"/><Column id=\"JBLN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SRCLS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_hrFamilyList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"FAMILY_RELATE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"FAMILY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM_ENCPT\" type=\"STRING\" size=\"256\"/><Column id=\"SEXDSTN_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BRTHDY\" type=\"STRING\" size=\"256\"/><Column id=\"ACDMCR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"OCCP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TROBL_AT\" type=\"STRING\" size=\"256\"/><Column id=\"SUPORT_AT\" type=\"STRING\" size=\"256\"/><Column id=\"ALLWNC_PYMNT_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CNFIRM_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_hrQualfList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"QUALF_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_QUALF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"QUALF_GRAD\" type=\"STRING\" size=\"256\"/><Column id=\"QUALF_LCNS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PBLICTE_OFFIC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACQS_DE\" type=\"STRING\" size=\"256\"/><Column id=\"VALID_DE\" type=\"STRING\" size=\"256\"/><Column id=\"QUALF_UPDT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"ALLWNC_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CNFIRM_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_schxpnAsstnList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PYMNT_PREARNGE_YM\" type=\"STRING\" size=\"256\"/><Column id=\"FAMILY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHUL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_slnrcList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PYMNT_YM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"HLTHINS\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"NPN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"EMPLYMINSRNC\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_gnfdSe", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_familyRelateSe", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sexdstnSe", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_qualfSe", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_qualfGrade", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_acdmcrSe", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sal032", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static13", "absolute", "451", "240", "565", "55", null, null, this);
            obj.set_taborder("128");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "0", null, "33", "28", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("div_WFSA_Box");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "8.55%", "26", null, "5", "87.76%", null, this.div_search);
            obj.set_taborder("144");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#fa794f66");
            obj.style.set_align("center middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "9.33%", "0", null, "5", "86.98%", null, this.div_search);
            obj.set_taborder("145");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#fa794f66");
            obj.style.set_align("center middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "0%", "2", null, "20", "98.64%", null, this.div_search);
            obj.set_taborder("146");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "15", "5", "38", "21", null, null, this.div_search);
            obj.set_taborder("148");
            obj.set_text("성명");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("div_EMP", "absolute", "52", "5", "163", "21", null, null, this.div_search);
            obj.set_taborder("149");
            obj.set_text("Div00");
            obj.set_async("false");
            obj.set_url("com::empno.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "333", "5", "42", "21", null, null, this.div_search);
            obj.set_taborder("150");
            obj.set_text("직종");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "20.8%", "2", null, "20", "77.84%", null, this.div_search);
            obj.set_taborder("152");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new CheckBox("chk_retireEmpl111", "absolute", "231", "127", "88", "20", null, null, this.div_search);
            obj.set_taborder("153");
            obj.set_text("퇴사자 포함");
            obj.set_value("1");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "31%", "6", null, "20", "67.64%", null, this.div_search);
            obj.set_taborder("154");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cmb_jssfcSe", "absolute", "375", "5", "120", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("155");
            obj.set_innerdataset("@ds_jssfc");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");

            obj = new Static("Static00", "absolute", null, "1", "15", null, "13", "-1", this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", null, "0", "13", null, "0", "0", this);
            obj.set_taborder("14");
            obj.set_text("스\r\n크\r\n롤\r\n13");
            obj.set_visible("false");
            obj.style.set_background("#d07b173c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "10.1%", "109", null, "5", "86.21%", null, this);
            obj.set_taborder("44");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#fa794f66");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_EMPL_CODE", "absolute", "0", "58", "363", null, null, "0", this);
            obj.set_taborder("45");
            obj.set_binddataset("ds_emplInfoList");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"29\"/><Column size=\"126\"/><Column size=\"78\"/><Column size=\"75\"/><Column size=\"55\"/></Columns><Rows><Row size=\"22\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"부서명\"/><Cell col=\"2\" text=\"사원번호\"/><Cell col=\"3\" text=\"사원명\"/><Cell col=\"4\" text=\"직위\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:DEPT_NM\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:EMPNO\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:EMPNM\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" text=\"bind:OFCPS\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_empDetailInfo", "absolute", "373", "305", null, null, "28", "0", this);
            obj.set_taborder("46");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.set_multiline("true");
            obj.set_tabjustify("false");
            obj.style.set_buttonpadding("8 26 8 26");
            obj.style.set_showextrabutton("false");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tpg_bassMatter", this.tab_empDetailInfo);
            obj.set_text("기본사항");
            obj.set_url("mis_sal::SAL010110_T01.xfdl");
            this.tab_empDetailInfo.addChild(obj.name, obj);
            obj = new Tabpage("tpg_gnfd", this.tab_empDetailInfo);
            obj.set_text("발령사항");
            obj.set_url("mis_sal::SAL010110_T02.xfdl");
            this.tab_empDetailInfo.addChild(obj.name, obj);
            obj = new Tabpage("tpg_hrFamily", this.tab_empDetailInfo);
            obj.set_text("가족사항");
            obj.set_url("mis_sal::SAL010110_T03.xfdl");
            this.tab_empDetailInfo.addChild(obj.name, obj);
            obj = new Tabpage("tpg_hrQualf", this.tab_empDetailInfo);
            obj.set_text("자격사항");
            obj.set_url("mis_sal::SAL010110_T04.xfdl");
            this.tab_empDetailInfo.addChild(obj.name, obj);
            obj = new Tabpage("tpg_schxpnAsstn", this.tab_empDetailInfo);
            obj.set_text("학비보조");
            obj.set_url("mis_sal::SAL010110_T05.xfdl");
            this.tab_empDetailInfo.addChild(obj.name, obj);
            obj = new Tabpage("tpg_slnrcList", this.tab_empDetailInfo);
            obj.set_text("사회보험");
            obj.set_url("mis_sal::SAL010110_T06.xfdl");
            this.tab_empDetailInfo.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "0", "39", "174", "19", null, null, this);
            obj.set_taborder("47");
            obj.set_text("사원정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0%", "33", null, "10", "2.64%", null, this);
            obj.set_taborder("48");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0%", "53", null, "5", "2.64%", null, this);
            obj.set_taborder("49");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "372", "39", "175", "19", null, null, this);
            obj.set_taborder("50");
            obj.set_text("사원상세정보");
            obj.set_cssclass("sta_WF_Title03");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "451", "110", "565", "27", null, null, this);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "451", "58", "565", "27", null, null, this);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static84", "absolute", "373", "58", "100", "27", null, null, this);
            obj.set_text("사원번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_empno", "absolute", "475", "61", "110", "21", null, null, this);
            obj.set_taborder("54");
            obj.set_enable("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("color", "disabled", "#333333ff");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "587", "58", "100", "27", null, null, this);
            obj.set_taborder("55");
            obj.set_text("사원명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_empnm", "absolute", "689", "61", "110", "21", null, null, this);
            obj.set_taborder("56");
            obj.set_enable("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("color", "disabled", "#333333ff");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "801", "58", "100", "27", null, null, this);
            obj.set_taborder("57");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_deptNm", "absolute", "903", "61", "110", "21", null, null, this);
            obj.set_taborder("58");
            obj.style.set_border("1 solid #bdbdbdff");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("color", "disabled", "#333333ff");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "451", "84", "565", "27", null, null, this);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "587", "84", "100", "27", null, null, this);
            obj.set_taborder("61");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_hrClsf", "absolute", "903", "87", "110", "21", null, null, this);
            obj.set_taborder("62");
            obj.set_enable("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("color", "disabled", "#333333ff");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "801", "84", "100", "27", null, null, this);
            obj.set_taborder("63");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_srcls", "absolute", "475", "113", "110", "21", null, null, this);
            obj.set_taborder("64");
            obj.set_enable("false");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("color", "disabled", "#333333ff");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "451", "136", "565", "27", null, null, this);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "801", "110", "100", "27", null, null, this);
            obj.set_taborder("67");
            obj.set_text("직급승진일자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "373", "84", "100", "27", null, null, this);
            obj.set_taborder("68");
            obj.set_text("직종");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "373", "136", "100", "27", null, null, this);
            obj.set_taborder("70");
            obj.set_text("입사일자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "587", "136", "100", "27", null, null, this);
            obj.set_taborder("76");
            obj.set_text("급여구분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "801", "136", "100", "27", null, null, this);
            obj.set_taborder("80");
            obj.set_text("직원상태");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_ecnyDe", "absolute", "475", "139", "110", "21", null, null, this);
            obj.set_taborder("84");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("color", "disabled", "#333333ff");
            obj.set_enable("true");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_dcsnDe", "absolute", "903", "113", "110", "21", null, null, this);
            obj.set_taborder("86");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("color", "disabled", "#333333ff");
            obj.set_enable("true");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "373", "110", "100", "27", null, null, this);
            obj.set_taborder("87");
            obj.set_text("호봉");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "451", "162", "565", "27", null, null, this);
            obj.set_taborder("92");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "373", "162", "100", "27", null, null, this);
            obj.set_taborder("93");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_adres", "absolute", "475", "165", "538", "21", null, null, this);
            obj.set_taborder("94");
            obj.set_enable("true");
            obj.style.setStyleValue("color", "disabled", "#333333ff");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "587", "110", "100", "27", null, null, this);
            obj.set_taborder("96");
            obj.set_text("호봉승급일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_promtProcessDe", "absolute", "689", "113", "110", "21", null, null, this);
            obj.set_taborder("97");
            obj.set_readonly("true");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("color", "disabled", "#333333ff");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_jssfc", "absolute", "475", "87", "110", "21", null, null, this);
            obj.set_taborder("100");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("color", "disabled", "#333333ff");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ofcps", "absolute", "689", "87", "110", "21", null, null, this);
            obj.set_taborder("102");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("color", "disabled", "#333333ff");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_sttusSe", "absolute", "903", "139", "110", "21", null, null, this);
            obj.set_taborder("105");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("color", "disabled", "#333333ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "451", "188", "565", "27", null, null, this);
            obj.set_taborder("106");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "451", "214", "565", "27", null, null, this);
            obj.set_taborder("107");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "686", "214", "100", "27", null, null, this);
            obj.set_taborder("108");
            obj.set_text("수당여부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "373", "188", "100", "27", null, null, this);
            obj.set_taborder("109");
            obj.set_text("위험근무코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "373", "214", "100", "27", null, null, this);
            obj.set_taborder("110");
            obj.set_text("특정업무코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "373", "240", "100", "55", null, null, this);
            obj.set_taborder("113");
            obj.set_text("안전관리코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("cmd_riskWorkCode", "absolute", "475", "191", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("114");
            obj.set_readonly("false");
            obj.set_innerdataset("@ds_riskWorkCode");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.style.set_align("center middle");
            obj.style.set_font("10 Gulim");
            obj.style.setStyleValue("color", "disabled", "#333333ff");

            obj = new Combo("cmd_spcifyJobCode", "absolute", "475", "217", "208", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("117");
            obj.set_readonly("false");
            obj.set_innerdataset("@ds_spcifyJobCode");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.style.set_align("center middle");
            obj.style.set_font("10 Gulim");
            obj.style.setStyleValue("color", "disabled", "#333333ff");

            obj = new CheckBox("chk_retireEmpl", "absolute", "224", "6", "91", "21", null, null, this);
            obj.set_taborder("125");
            obj.set_text("퇴직자 포함");
            obj.set_truevalue("1");
            this.addChild(obj.name, obj);

            obj = new Combo("cmd_salarySe", "absolute", "689", "139", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("126");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.style.set_align("center middle");
            obj.style.set_font("10 Gulim");
            obj.style.setStyleValue("color", "disabled", "#333333ff");
            obj.set_innerdataset("@ds_salarySe");

            obj = new CheckBox("CheckBox00", "absolute", "475", "244", "129", "21", null, null, this);
            obj.set_taborder("130");
            obj.set_text("전기안전관리담당자");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01", "absolute", "645", "244", "168", "21", null, null, this);
            obj.set_taborder("131");
            obj.set_text("시설물안전관리책임기술자");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02", "absolute", "851", "244", "135", "21", null, null, this);
            obj.set_taborder("132");
            obj.set_text("전기안전관리보조원");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03", "absolute", "475", "267", "129", "21", null, null, this);
            obj.set_taborder("133");
            obj.set_text("검사대상기기조종자");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04", "absolute", "645", "267", "144", "21", null, null, this);
            obj.set_taborder("134");
            obj.set_text("위험물안전관리자");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox05", "absolute", "851", "267", "135", "21", null, null, this);
            obj.set_taborder("135");
            obj.set_text("도시가스안전관리자");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox06", "absolute", "905", "191", "89", "21", null, null, this);
            obj.set_taborder("136");
            obj.set_text("우수리모금");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox07", "absolute", "791", "217", "73", "21", null, null, this);
            obj.set_taborder("137");
            obj.set_text("운전수당");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox08", "absolute", "864", "217", "73", "21", null, null, this);
            obj.set_taborder("138");
            obj.set_text("장려수당");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "802", "188", "100", "27", null, null, this);
            obj.set_taborder("140");
            obj.set_text("공제여부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox09", "absolute", "937", "217", "73", "21", null, null, this);
            obj.set_taborder("141");
            obj.set_text("대우수당");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "587", "188", "100", "27", null, null, this);
            obj.set_taborder("142");
            obj.set_text("승무수당");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("cmd_sal032", "absolute", "689", "191", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("143");
            obj.set_innerdataset("@ds_sal032");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.style.set_align("center middle");
            obj.style.set_font("10 Gulim");
            obj.style.setStyleValue("color", "disabled", "#333333ff");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 33, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("12");
            		p.set_cssclass("div_WFSA_Box");
            		p.set_scrollbars("none");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1059, 735, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SAL010110");
            		p.set_titletext("급여기준정보관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Div00.edt_emplno","value","DS_EMPL_CODE","EMPL_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div00.edt_emplnm2","value","DS_EMPL_CODE","EMPL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Div00.edt_rspofc","value","DS_EMPL_CODE","RSPOFC_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div00.edt_clsfse","value","DS_EMPL_CODE","PAY_CLSF_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Div00.edt_srcls","value","DS_EMPL_CODE","SRCLS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Div00.edt_ecnyde","value","DS_EMPL_CODE","ECNY_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Div00.edt_adres","value","DS_EMPL_CODE","ADRES");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div00.cmb_DEPT","value","DS_EMPL_CODE","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Div00.cmb_EMPL_SE","value","DS_EMPL_CODE","SALARY_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edt_empno","value","ds_emplDetailInfo","EMPNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edt_empnm","value","ds_emplDetailInfo","EMPNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edt_deptNm","value","ds_emplDetailInfo","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","edt_hrClsf","value","ds_emplDetailInfo","HR_CLSF");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","edt_srcls","value","ds_emplDetailInfo","SRCLS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","msk_ecnyDe","value","ds_emplDetailInfo","ECNY_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","msk_dcsnDe","value","ds_emplDetailInfo","DCSN_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","edt_adres","value","ds_emplDetailInfo","ADRES");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Tab00.tabpage1.MaskEdit00","value","ds_bassMatter","BASS_AMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","Tab00.tabpage1.MaskEdit01","value","ds_bassMatter","SUPORT_CNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","Tab00.tabpage1.MaskEdit02","value","ds_bassMatter","TROBL_CNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","Tab00.tabpage1.MaskEdit08","value","ds_bassMatter","MENDNG_MT_AM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","Tab00.tabpage1.MaskEdit09","value","ds_bassMatter","HLTHINS_INSRNC_AMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","Tab00.tabpage1.MaskEdit10","value","ds_bassMatter","ODSN_INSRNC_AMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","Tab00.tabpage1.MaskEdit11","value","ds_bassMatter","NPN_INCOME_MT_AM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","Tab00.tabpage1.MaskEdit12","value","ds_bassMatter","NPN_AMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","Tab00.tabpage1.MaskEdit13","value","ds_bassMatter","EMPLYMINSRNC_INCOME_MT_AM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","Tab00.tabpage1.MaskEdit14","value","ds_bassMatter","EMPLYMINSRNC_AMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","Tab00.tabpage1.cmb_EMPL_SE","value","ds_bassMatter","SALARY_BANK_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","Tab00.tabpage1.Edit04","value","ds_bassMatter","SALARY_BANK_ACNUT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","msk_promtProcessDe","value","ds_emplDetailInfo","PROMT_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","edt_jssfc","value","ds_emplDetailInfo","JSSFC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","edt_ofcps","value","ds_emplDetailInfo","OFCPS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","edt_sttusSe","value","ds_emplDetailInfo","STTUS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","cmd_riskWorkCode","value","ds_emplDetailInfo","RISK_WORK_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","cmd_spcifyJobCode","value","ds_emplDetailInfo","SPCIFY_JOB_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","div_search.cmb_jssfcSe","value","ds_cond","JSSFC_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","cmd_salarySe","value","ds_emplDetailInfo","SALARY_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","CheckBox00","value","ds_emplDetailInfo","SFMNG_AT1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","CheckBox01","value","ds_emplDetailInfo","SFMNG_AT2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","CheckBox02","value","ds_emplDetailInfo","SFMNG_AT3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","CheckBox03","value","ds_emplDetailInfo","SFMNG_AT4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","CheckBox04","value","ds_emplDetailInfo","SFMNG_AT5");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item45","CheckBox05","value","ds_emplDetailInfo","SFMNG_AT6");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","CheckBox06","value","ds_emplDetailInfo","FRACTION_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item46","CheckBox07","value","ds_emplDetailInfo","DRV_ALLWNC_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item47","CheckBox08","value","ds_emplDetailInfo","ENCRG_ALLWNC_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","CheckBox09","value","ds_emplDetailInfo","TREAT_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","cmd_sal032","value","ds_emplDetailInfo","CRW_ALLWNC");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "com::empno.xfdl");
            this._addPreloadList("fdl", "mis_sal::SAL010110_T01.xfdl");
            this._addPreloadList("fdl", "mis_sal::SAL010110_T02.xfdl");
            this._addPreloadList("fdl", "mis_sal::SAL010110_T03.xfdl");
            this._addPreloadList("fdl", "mis_sal::SAL010110_T04.xfdl");
            this._addPreloadList("fdl", "mis_sal::SAL010110_T05.xfdl");
            this._addPreloadList("fdl", "mis_sal::SAL010110_T06.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SAL010110.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("SAL010110.xfdl", "mis_lib::misUtil.xjs");
        this.registerScript("SAL010110.xfdl", function() {
        /***********************************************************************
         * 업무구분 : 급여기준정보관리
         * 화면ID   : SAL010110
         * 화면명   : 급여기준정보관리
         * 화면설명 : 급여기준정보관리정보를 관리한다.
         * 작성일   : 2017.04.05
         * 작성자   : 정  민
         * 수정이력 : 
         ***********************************************************************
         *     수정일     수정자   내용
         ***********************************************************************
         */

        /***********************************************************************
         * Script Include 
         ************************************************************************/
        //include "lib::comInclude.xjs";
        //include "mis_lib::misUtil.xjs";

        var saveRow = -1;
        /***********************************************************************
         * onInit / onLoad 영역
         ***********************************************************************/
        this.SAL010110_oninit = function(obj,e)
        {
        	this.fn_init_form();
        	this.fn_init_dataset();
        }

        this.SAL010110_onload = function(obj,e)
        {
        	this.div_search.div_EMP.fn_setBind("ds_cond", "EMPNO", "EMPNM");
        	this.div_search.div_EMP.setFocus(true);
        	
        	this.fn_loadCombo();
        	this.fn_search();  
        }

        /**********************************************************************
        * Form/Dataset 오브젝트 초기화
        ***********************************************************************/

        /*
         * 함수명  	: initForm
         * 설명 		: Form을 초기화한다.
         * params  		: None
         * return Type 	: None
         * 사용법		: this.initForm();
         */
        this.fn_init_form = function()
        {
        	this.gfn_initForm(this);
        	this.fn_misFormInit(this);

        	this.ds_riskWorkCode.clearData();
        	this.ds_spcifyJobCode.clearData();
        	this.ds_sfmngAt.clearData();
        	this.ds_radioItm.clearData();
        }

        /*
         * 함수명  	: initDataset
         * 설명 		: Dataset을 초기화한다
         * params  		: None
         * return Type 	: None
         * 사용법		: this.initDataset();
         */
        this.fn_init_dataset = function()
        {
        	this.gfn_initCondDs(this, this.div_search);	
        }

        /**********************************************************************
         * 설명: 공통조회
         ************************************************************************/
        this.fn_loadCombo = function ()
        {
        	var comboParams = [
        						 ["ds_jssfc"  		   , "HRM001", 1, "전체"]	// 직종(검색조건)
        						,["ds_bankCode"		   , "COM021", 1, ""]		// 은행코드   
        						,["ds_gnfdSe"          , "HRM025", 1, ""]		// 발령
        						,["ds_familyRelateSe"  , "HRM006", 1, ""]		// 가족구분
        						,["ds_sexdstnSe"       , "COM005", 1, ""]		// 성별
        						,["ds_qualfSe"         , "HRM009", 1, ""]		// 자격증
        						,["ds_qualfGrade"      , "HRM017", 1, ""]		// 자격증등급 
        						,["ds_acdmcrSe"        , "HRM008", 1, ""]		// 학력
        						,["ds_salarySe"        , "SAL001", 1, ""]		// 급여구분
        						,["ds_sal032"          , "SAL032", 1, ""]		// 승무수당
        			     	  ];    
        					
        	var callback = function (svcId, errorCode, errorMsg) {
        		this.ds_sal032.insertRow(0);
        		this.ds_sal032.setColumn(0, "CODE"   , "0");
        		this.ds_sal032.setColumn(0, "CODE_NM", "해당없음");
        		
        		// 사원상세정보 콤보박스 항목 셋팅
        		this.fn_transaction("selectPymntDdcDetailCodeList");
        		
        		// 라디오버튼 기본값 셋팅
        		var nRow = this.ds_radioItm.addRow();
        		this.ds_radioItm.setColumn(nRow, "CODE"   , "1");
        		this.ds_radioItm.setColumn(nRow, "CODE_NM", "예");
        		nRow = this.ds_radioItm.addRow();
        		this.ds_radioItm.setColumn(nRow, "CODE"   , "0");
        		this.ds_radioItm.setColumn(nRow, "CODE_NM", "아니오");
        	};	
        	
        	this.gfn_comboLoad(comboParams, callback);
        	
        }

        
        /**********************************************************************
        * Transaction 영역 시작
        ***********************************************************************
        *
        * 1. Transaction 관련 이벤트 핸들러
        * 2. call Transaction 영역
        * 3. callback 영역(Transaction, Popup)
        * 
        ***********************************************************************/

        /**********************************************************************
        * Transaction 관련 이벤트 핸들러 
        ***********************************************************************/

        /*
         * 함수명 	 	: fn_search
         * 설명 		: 조회 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_search();
         */
        this.fn_search = function()
        {
        	this.fn_transaction("selectEmplInfoList");
        }

        /*
         * 함수명  	: fn_save
         * 설명 		: 저장 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_save();
         */
        this.fn_save= function()
        {
        	// Validation 체크
         	/*
         	if(!(this.gfn_checkValidation(this.ds_emplDetailInfo, this.ds_validation) && this.gfn_checkValidation(this.ds_bassMatter, this.ds_validation))) {
        		return;
         	}*/
        	
        	if(this.gfn_message("confirm.저장.여부"))	{
        		this.saveRow = this.ds_emplInfoList.rowposition;
        		this.fn_transaction("saveEmplDetailInfo");
        	}
        }

        /**********************************************************************
        * call Transaction 영역
        ***********************************************************************/

        /*
         * 함수명  	: fn_transaction
         * 설명 		: Transaction 요청 처리 함수
         * params  		: strSvcId : 서비스요청 ID
         * return Type 	: None
         * 사용법		: this.fn_transaction("SELECT");
         */
        this.fn_transaction = function(strSvcId)
        {
        	switch (strSvcId) {
        		// 사원정보 목록조회
        		case "selectEmplInfoList":
        			var sController  = "hsco/mis/sal/SAL010110/selectEmplInfoList.do";
        			var sInDatasets  = "input1=ds_cond";
        			var sOutDatasets = "ds_emplInfoList=output1";
        			break;
        		// 사원상세정보 조회
        		case "selectEmplDetailInfo":
        			var sController  =  "hsco/mis/sal/SAL010110/selectEmplDetailInfo.do";
        			var sInDatasets  =  "input1=ds_cond2";
        			var sOutDatasets =  "ds_emplDetailInfo=output1";	// 사원상세정보
        				sOutDatasets += " ds_bassMatter=output2";		// 탭1  : 기본사항
        				sOutDatasets += " ds_gnfdList=output3";			// 탭2  : 발령사항
        				sOutDatasets += " ds_hrFamilyList=output4";		// 탭3  : 가족사항
        				sOutDatasets += " ds_hrQualfList=output5";		// 탭4  : 자격사항
        				sOutDatasets += " ds_schxpnAsstnList=output6";	// 탭5  : 학비보조
        				sOutDatasets += " ds_slnrcList=output7";		// 탭6  : 사회보험
        			break;

        		// 사원상세정보 저장
        		case "saveEmplDetailInfo":
        			var sController  = "hsco/mis/sal/SAL010110/emplDetailInfoU.do";
        			var sInDatasets =  " input1=ds_emplDetailInfo:U";	// 사원상세정보
        				sInDatasets += " input2=ds_bassMatter:U";		// 탭1  : 기본사항
        				sInDatasets += " input3=ds_hrFamilyList:U";		// 탭3  : 가족사항
        				sInDatasets += " input4=ds_hrQualfList:U";		// 탭4  : 자격사항
        			var sOutDatasets = "";
        			break;
        		// 지급공제상세코드 목록 조회
        		case "selectPymntDdcDetailCodeList":
        			this.ds_pymntDdcCode.addRow();
        			this.ds_pymntDdcCode.setColumn(0, "RISK_WORK_CODE", "1080");
        			this.ds_pymntDdcCode.setColumn(0, "DRV_ALLWNC_AT" , "1100");
        			this.ds_pymntDdcCode.setColumn(0, "SPCIFY_JOB_AT" , "1110");
        			this.ds_pymntDdcCode.setColumn(0, "SFMNG_CODE"    , "1120");
        			this.ds_pymntDdcCode.setColumn(0, "ALPINE_CLUB_AT", "2100");
        			var sController  = "hsco/mis/sal/SAL010110/selectPymntDdcDetailCodeList.do";
        			var sInDatasets  = "input1=ds_pymntDdcCode";
        			var sOutDatasets = "ds_riskWorkCode=output1 ds_drvAllwncAt=output2 ds_spcifyJobCode=output3 ds_sfmngAt=output4 alpineClubAt=output5";
        			break;
        	}
        	
        	Ex.core.tran(this, strSvcId, sController, sInDatasets, sOutDatasets); 
        }

        
        /**********************************************************************
        * callback 영역(Transaction, Popup)
        ***********************************************************************/

        /*
         * 함수명  		: fn_callBack
         * 설명 		: Transaction Callback 처리
         * params  		: strSvcId    : 서비스요청 ID
         *                nErrorCode  : 오류 메시지 코드 ([예] 0 : Success, 그밖의 경우, error)
         *                strErrorMsg : 오류 메시지([예]  success.insert|정상적으로 등록되었습니다.)
         * return Type 	: None
         * 사용법		: 
         */
        this.fn_callBack = function (strSvcId,nErrorCode,strErrorMsg)
        {
        	if(nErrorCode != '0') {
        		this.gfn_callback_message(strSvcId, nErrorCode, strErrorMsg);
        	}

        	if (nErrorCode == 0){
        		switch (strSvcId) {
        			case "selectEmplInfoList":
        				if(this.saveRow > -1) {
        					this.ds_emplInfoList.set_rowposition(this.saveRow);
        					this.saveRow = -1;
        				}
        			break;
        			case "selectEmplDetailInfo":
        			break;
        			case "saveEmplDetailInfo":
        			this.fn_search();
        			break;
        			case "selectPymntDdcDetailCodeList":
        			
        				//콤보에 '해당없음' 값 셋팅
        				this.ds_riskWorkCode.insertRow(0);
        				this.ds_riskWorkCode.setColumn(0, "CODE"   , "0");
        				this.ds_riskWorkCode.setColumn(0, "CODE_NM", "해당없음");
        				
        				this.ds_spcifyJobCode.insertRow(0);
        				this.ds_spcifyJobCode.setColumn(0, "CODE"   , "0");
        				this.ds_spcifyJobCode.setColumn(0, "CODE_NM", "해당없음");
        				
        				this.ds_sfmngAt.insertRow(0);
        				this.ds_sfmngAt.setColumn(0, "CODE"   , "0");
        				this.ds_sfmngAt.setColumn(0, "CODE_NM", "해당없음");		
        			break;
        		}
        	}
        }

        
        /**********************************************************************
        * Transaction 영역 끝
        ***********************************************************************/

         

        
        /**********************************************************************
        * non-Transaction 관련 컴포넌트 이벤트 처리 함수
        ***********************************************************************
        *
        * 1. Dataset 관련 이벤트
        * 2. Grid 관련 이벤트
        * 3. Button 관련 이벤트
        * 
        ***********************************************************************/

        /**********************************************************************
        * Dataset 관련 이벤트 처리
        ***********************************************************************/

        /*
         * 함수명  	: ds_emplInfoList_onrowposchanged
         * 설명 		: 사원정보 rowpostion 변경시 발생
         * params  		: None
         * return Type 	: None
         * 사용법		: this.ds_emplInfoList_onrowposchanged()
         */
        this.ds_emplInfoList_onrowposchanged = function(obj,e)
        {
        	this.ds_cond2.clearData();
        	var nRow = this.ds_cond2.addRow();
        	this.ds_cond2.setColumn(nRow, "EMPNO", obj.getColumn(e.newrow, "EMPNO"));
        	
        	//사원상세정보 조회
        	this.fn_transaction("selectEmplDetailInfo");
        }

        
        /**********************************************************************
        * Grid 관련 이벤트 처리
        ***********************************************************************/

        
        /**********************************************************************
        * Button 관련 이벤트 처리
        ***********************************************************************/

        /*
         * 함수명  	: div_search_chk_retireEmpl_onclick
         * 설명 		: 사원정보 조회시 퇴사자 포함/제외
         * params  		: None
         * return Type 	: None
         * 사용법		: div_search_chk_retireEmpl_onclick
         */
        this.div_search_chk_retireEmpl_onclick = function(obj,e)
        {	
        	this.ds_cond.setColumn(0, "RETIRE_EMPL", this.chk_retireEmpl.value);
        }

        this.cmd_spcifyJobCode_onitemchanged = function(obj,e)
        {
        	
        }

        this.Static61_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_emplInfoList.addEventHandler("onrowposchanged", this.ds_emplInfoList_onrowposchanged, this);
            this.addEventHandler("onload", this.SAL010110_onload, this);
            this.addEventHandler("oninit", this.SAL010110_oninit, this);
            this.div_search.div_EMP.addEventHandler("onkeyup", this.div_SEARCH_div_EMP_onkeyup, this);
            this.div_search.chk_retireEmpl111.addEventHandler("onclick", this.sss, this);
            this.tab_empDetailInfo.addEventHandler("onchanged", this.tab_emplDetailInfo_onchanged, this);
            this.edt_deptNm.addEventHandler("oneditclick", this.edt_deptNm_oneditclick, this);
            this.Static27.addEventHandler("onclick", this.Static27_onclick, this);
            this.Static33.addEventHandler("onclick", this.Static33_onclick, this);
            this.cmd_spcifyJobCode.addEventHandler("onitemchanged", this.cmd_spcifyJobCode_onitemchanged, this);
            this.chk_retireEmpl.addEventHandler("onclick", this.div_search_chk_retireEmpl_onclick, this);
            this.cmd_salarySe.addEventHandler("onitemchanged", this.cmd_spcifyJobCode_onitemchanged, this);
            this.Static09.addEventHandler("onclick", this.Static27_onclick, this);

        };

        this.loadIncludeScript("SAL010110.xfdl");
        this.loadPreloadList();
       
    };
}
)();
