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
                this.set_name("ACC020203");
                this.set_classname("UI_ACC020203");
                this.set_titletext("지출결의서관리");
                this._setFormPosition(0,0,1198,735);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cond", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BPLC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ANACT_KND\" type=\"STRING\" size=\"256\"/><Column id=\"SUMRY\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRMPC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRMPC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STDR_DE\" type=\"STRING\" size=\"256\"/><Column id=\"SANC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_COND\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_DECSN_AT\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_CNFIRM_AT\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_AMOUNT2\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_expDsn", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj.set_keystring("G:+CPTAL_EXPNDTR_ACNTBK_DE");
            obj._setContents("<ColumnInfo><Column id=\"DECSN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CYFD_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CHIT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ANACT_KND\" type=\"STRING\" size=\"256\"/><Column id=\"ITNC_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CAUSE_ACTION_DE\" type=\"STRING\" size=\"256\"/><Column id=\"DET_DCSN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CPTAL_EXPNDTR_ACNTBK_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SUMRY\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BCNC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BCNC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RCPT_MAN\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_DS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_UNIT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DSGN_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SANCTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_KND\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_SANCTN_STTUS\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"TRG_FORM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TRG_FORM_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TIMHDER_CONFM\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_CNFIRM_AT\" type=\"STRING\" size=\"256\"/><Column id=\"RNUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"ACNUTNO\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_UPDT_REQ_CN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_acc002", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_acc001", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_bdg001", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">SRCH_ST_DT</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col><Col id=\"msgId\">기준일자</Col><Col id=\"from\">SRCH_ST_DT</Col><Col id=\"to\">SRCH_ED_DT</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">SRCH_ED_DT</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col><Col id=\"msgId\">기준일자</Col><Col id=\"from\">SRCH_ST_DT</Col><Col id=\"to\">SRCH_ED_DT</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond02", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DECSN_NO\" type=\"STRING\" size=\"20\"/><Column id=\"DECSN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_SANCTN_STTUS\" type=\"STRING\" size=\"256\"/><Column id=\"ANACT_KND\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_expDsnDtls", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DECSN_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"DECSN_NO\" type=\"STRING\" size=\"11\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"32\"/><Column id=\"RPAY_SE\" type=\"STRING\" size=\"6\"/><Column id=\"AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"NM\" type=\"STRING\" size=\"30\"/><Column id=\"SUMRY\" type=\"STRING\" size=\"200\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"8\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"7\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_expDsnMtrDet", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DECSN_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"DECSN_NO\" type=\"STRING\" size=\"11\"/><Column id=\"CNTRCT_DE\" type=\"STRING\" size=\"8\"/><Column id=\"ACPTNC_DE\" type=\"STRING\" size=\"8\"/><Column id=\"ORDER_DE\" type=\"STRING\" size=\"8\"/><Column id=\"DVYFG_DE\" type=\"STRING\" size=\"8\"/><Column id=\"PYMNT_CMMND_PBLICTE_DE\" type=\"STRING\" size=\"8\"/><Column id=\"CHECK_NO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TAXXPT_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"VAT_DECSN_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUPLY_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"VAT_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DSGN_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNTRCT_SE\" type=\"STRING\" size=\"3\"/><Column id=\"CNTRCT_MTHD\" type=\"STRING\" size=\"1\"/><Column id=\"ATCH_FILE\" type=\"STRING\" size=\"100\"/><Column id=\"ATCH_FLPTH\" type=\"STRING\" size=\"200\"/><Column id=\"ATCH_FILE_1\" type=\"STRING\" size=\"100\"/><Column id=\"ATCH_FLPTH_1\" type=\"STRING\" size=\"200\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"8\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"7\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_expDsnDtlsPurchs", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DECSN_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"DECSN_NO\" type=\"STRING\" size=\"10\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PRDNM\" type=\"STRING\" size=\"200\"/><Column id=\"STNDRD\" type=\"STRING\" size=\"200\"/><Column id=\"UNIT\" type=\"STRING\" size=\"5\"/><Column id=\"QY\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"UNTPC\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RM\" type=\"STRING\" size=\"200\"/><Column id=\"PAY_DE\" type=\"STRING\" size=\"8\"/><Column id=\"ASSETS_CL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ASSETS_CL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"8\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"7\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_expDsnDtlsTrvct", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DECSN_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"DECSN_NO\" type=\"STRING\" size=\"10\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BSRP_DE\" type=\"STRING\" size=\"8\"/><Column id=\"STRTPNT\" type=\"STRING\" size=\"30\"/><Column id=\"VIALOC\" type=\"STRING\" size=\"30\"/><Column id=\"ALOC\" type=\"STRING\" size=\"30\"/><Column id=\"ASORT\" type=\"STRING\" size=\"30\"/><Column id=\"DSTNC\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHRGE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"NMPR\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SM_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DAYCNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RM\" type=\"STRING\" size=\"200\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"8\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"7\"/><Column id=\"ERROR_AT\" type=\"STRING\" size=\"256\"/><Column id=\"ERROR_AT_TRVCT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_expDsnDetTrvDtstmn", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DECSN_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"CAUSE_ACTION_NO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DECSN_NO\" type=\"STRING\" size=\"10\"/><Column id=\"RLROAD_CYCHG_1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RLROAD_CYCHG_2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RLROAD_CYCHG_3\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RLROAD_CYCHG_4\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SHIP_CYCHG_1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SHIP_CYCHG_2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SHIP_CYCHG_3\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SHIP_CYCHG_4\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CAR_CYCHG_1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CAR_CYCHG_2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CGFFD_DAYCNT_UPPT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CGFFD_1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CGFFD_2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CGFFD_DAYCNT_MIDDL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CGFFD_3\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CGFFD_4\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"STAYNG_DAYCNT_UPPT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"STAYNG_CHRGE_1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"STAYNG_CHRGE_2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"STAYNG_DAYCNT_MIDDL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"STAYNG_CHRGE_3\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"STAYNG_CHRGE_4\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ACPLC_TRNSPORT_NON_DAYCNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TRNSPORT_NON_1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TRNSPORT_NON_2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BEFORE_CHRGE_1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BEFORE_CHRGE_2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BEFORE_CHRGE_3\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ACPLC_TRNSPORT_NON_MIDDL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RM\" type=\"STRING\" size=\"200\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"8\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"7\"/><Column id=\"NMPR\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_expDsnDetailTrvct", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DECSN_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"DECSN_NO\" type=\"STRING\" size=\"10\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"EXPECT_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"EXCCLC_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DECSN_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RQEST_DE\" type=\"STRING\" size=\"8\"/><Column id=\"RQEST_MAN_EMPNO\" type=\"STRING\" size=\"8\"/><Column id=\"RQEST_MAN\" type=\"STRING\" size=\"100\"/><Column id=\"RQEST_DEPT_NM\" type=\"STRING\" size=\"30\"/><Column id=\"RQEST_CLSF\" type=\"STRING\" size=\"100\"/><Column id=\"RCPT_DE\" type=\"STRING\" size=\"8\"/><Column id=\"RCPT_MAN_EMPNO\" type=\"STRING\" size=\"8\"/><Column id=\"RCPT_MAN\" type=\"STRING\" size=\"100\"/><Column id=\"FNNC_INSTT_CODE\" type=\"STRING\" size=\"3\"/><Column id=\"ACNUTNO\" type=\"STRING\" size=\"20\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"8\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"7\"/><Column id=\"ERROR_AT\" type=\"STRING\" size=\"256\"/><Column id=\"ERROR_AT_TRVCT\" type=\"STRING\" size=\"256\"/><Column id=\"CHGHY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rturnExpDsnMtrDet", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DECSN_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"DECSN_NO\" type=\"STRING\" size=\"10\"/><Column id=\"CNRL_LEDGR_RGIST_DE\" type=\"STRING\" size=\"8\"/><Column id=\"PYMNT_CNRL_LEDGR_DE\" type=\"STRING\" size=\"8\"/><Column id=\"EXPNDTR_DE\" type=\"STRING\" size=\"8\"/><Column id=\"NHT_PBLICTE_DE\" type=\"STRING\" size=\"8\"/><Column id=\"RTURN_NHT_NO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PAY_TMLMT\" type=\"STRING\" size=\"8\"/><Column id=\"PAY_DE\" type=\"STRING\" size=\"8\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_expDsnDtlsCntrwk", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DECSN_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"DECSN_NO\" type=\"STRING\" size=\"10\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNTRWK_NM\" type=\"STRING\" size=\"100\"/><Column id=\"QLITY\" type=\"STRING\" size=\"10\"/><Column id=\"STNDRD\" type=\"STRING\" size=\"200\"/><Column id=\"UNIT\" type=\"STRING\" size=\"5\"/><Column id=\"QY\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"UNTPC\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RM\" type=\"STRING\" size=\"200\"/><Column id=\"CNTRWK_BEGIN_DE\" type=\"STRING\" size=\"8\"/><Column id=\"CNTRWK_COMPT_DE\" type=\"STRING\" size=\"8\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"8\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"7\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_slaryExpDsnMtrDet", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DECSN_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"DECSN_NO\" type=\"STRING\" size=\"10\"/><Column id=\"ANACT_KND\" type=\"STRING\" size=\"1\"/><Column id=\"TAXXPT_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"VAT_AT\" type=\"STRING\" size=\"1\"/><Column id=\"VAT_DECSN_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUPLY_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"VAT_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"INCMTAX\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"IHNTS\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HLTHINS\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"NPN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CREDTR\" type=\"STRING\" size=\"30\"/><Column id=\"RCPT_DE\" type=\"STRING\" size=\"8\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"8\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"7\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_expDsnDtlsServc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DECSN_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"DECSN_NO\" type=\"STRING\" size=\"10\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PRDNM\" type=\"STRING\" size=\"200\"/><Column id=\"STNDRD\" type=\"STRING\" size=\"200\"/><Column id=\"UNIT\" type=\"STRING\" size=\"5\"/><Column id=\"QY\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"UNTPC\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PAY_DE\" type=\"STRING\" size=\"8\"/><Column id=\"RM\" type=\"STRING\" size=\"200\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"8\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"7\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_com022", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_decsnNo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DECSN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ANACT_KND\" type=\"STRING\" size=\"256\"/><Column id=\"TRG_FORM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_confmAt", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">A</Col><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">승인</Col></Row><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">미승인</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_acctNoList", this);
            obj._setContents("<ColumnInfo><Column id=\"ACNUTNO\" type=\"STRING\" size=\"256\"/><Column id=\"ACNUT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_SEARCH", "absolute", "0%", "0", null, "85", "28", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Box");
            this.addChild(obj.name, obj);
            obj = new Combo("Combo01", "absolute", "97", "31", "118", "21", null, null, this.div_SEARCH);
            this.div_SEARCH.addChild(obj.name, obj);
            var Combo01_innerdataset = new Dataset("Combo01_innerdataset", this.div_SEARCH.Combo01);
            Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">지출결의일자</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">채무확정일자</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">자금지출일자</Col></Row></Rows>");
            obj.set_innerdataset(Combo01_innerdataset);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displayrowcount("20");
            obj = new Static("sta_EMPL_SE01", "absolute", "15", "5", "77", "21", null, null, this.div_SEARCH);
            obj.set_taborder("34");
            obj.set_text("결의서구분");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Combo("Combo02", "absolute", "97", "5", "220", "21", null, null, this.div_SEARCH);
            this.div_SEARCH.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_displayrowcount("20");
            obj.set_innerdataset("@ds_acc002");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj = new Calendar("Calendar00", "absolute", "217", "31", "100", "21", null, null, this.div_SEARCH);
            this.div_SEARCH.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj.set_cssclass("cal_WF_Essential");
            obj = new Static("Static00", "absolute", "319", "31", "14", "21", null, null, this.div_SEARCH);
            obj.set_taborder("39");
            obj.set_text("~");
            obj.style.set_align("center");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Calendar("Calendar01", "absolute", "335", "31", "100", "21", null, null, this.div_SEARCH);
            this.div_SEARCH.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj.set_cssclass("cal_WF_Essential");
            obj = new Static("sta_EMPL_SE03", "absolute", "15", "31", "64", "21", null, null, this.div_SEARCH);
            obj.set_taborder("41");
            obj.set_text("기준일자");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Static("sta_EMPL_SE04", "absolute", "450", "31", "64", "21", null, null, this.div_SEARCH);
            obj.set_taborder("42");
            obj.set_text("사업코드");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Edit("edt_bsnsCode", "absolute", "519", "31", "78", "21", null, null, this.div_SEARCH);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "0", "0", "15", "85", null, null, this.div_SEARCH);
            obj.set_taborder("55");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Edit("edt_bsnsNm", "absolute", "599", "31", "258", "21", null, null, this.div_SEARCH);
            obj.set_taborder("3");
            obj.set_readonly("false");
            obj.set_inputfilter("dot");
            obj.set_inputtype("dot");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Button("btn_bsnsPopup", "absolute", "834", "31", "21", "21", null, null, this.div_SEARCH);
            obj.set_taborder("57");
            obj.set_cssclass("btn_WF_Search");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Static("sta_EMPL_SE02", "absolute", "449", "5", "64", "21", null, null, this.div_SEARCH);
            obj.set_taborder("61");
            obj.set_text("검색조건");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Combo("Combo03", "absolute", "519", "5", "118", "21", null, null, this.div_SEARCH);
            this.div_SEARCH.addChild(obj.name, obj);
            var Combo03_innerdataset = new Dataset("Combo03_innerdataset", this.div_SEARCH.Combo03);
            Combo03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">지급번호</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">적요</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">채주</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">결의번호</Col></Row></Rows>");
            obj.set_innerdataset(Combo03_innerdataset);
            obj.set_taborder("62");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displayrowcount("20");
            obj = new Edit("Edit01", "absolute", "639", "5", "218", "21", null, null, this.div_SEARCH);
            obj.set_taborder("63");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Static("sta_EMPL_SE00", "absolute", "872", "6", "92", "21", null, null, this.div_SEARCH);
            obj.set_taborder("64");
            obj.set_text("계약대가지급");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox00", "absolute", "977", "5", "24", "21", null, null, this.div_SEARCH);
            obj.set_taborder("65");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Static("sta_EMPL_SE05", "absolute", "872", "31", "105", "21", null, null, this.div_SEARCH);
            obj.set_taborder("66");
            obj.set_text("재무팀승인여부");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "977", "31", "118", "21", null, null, this.div_SEARCH);
            this.div_SEARCH.addChild(obj.name, obj);
            obj.set_taborder("67");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_displayrowcount("20");
            obj.set_innerdataset("@ds_confmAt");
            obj = new Static("Static11", "absolute", "0", "26", null, "5", "0", null, this.div_SEARCH);
            obj.set_taborder("68");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "52", null, "5", "0", null, this.div_SEARCH);
            obj.set_taborder("69");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Div("div_dept", "absolute", "97", "57", "195", "21", null, null, this.div_SEARCH);
            obj.set_taborder("70");
            obj.set_enable("true");
            obj.set_async("false");
            obj.set_url("com::deptCode.xfdl");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "78", null, "5", "0", null, this.div_SEARCH);
            obj.set_taborder("71");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Static("sta_dept", "absolute", "15", "57", "64", "21", null, null, this.div_SEARCH);
            obj.set_taborder("72");
            obj.set_text("조회부서");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "435", "0", "15", "85", null, null, this.div_SEARCH);
            obj.set_taborder("73");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "857", "0", "14", "52", null, null, this.div_SEARCH);
            obj.set_taborder("74");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Static("sta_decsnAmount", "absolute", "450", "57", "64", "21", null, null, this.div_SEARCH);
            obj.set_taborder("75");
            obj.set_text("금액");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new MaskEdit("msk_decsnAmount", "absolute", "519", "57", "120", "21", null, null, this.div_SEARCH);
            obj.set_taborder("76");
            obj.set_mask("!###,###,###,###,###,###,###");
            obj.set_visible("true");
            obj.set_limitbymask("both");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new MaskEdit("msk_decsnAmount2", "absolute", "657", "57", "120", "21", null, null, this.div_SEARCH);
            obj.set_taborder("77");
            obj.set_mask("!###,###,###,###,###,###,###");
            obj.set_visible("true");
            obj.set_limitbymask("both");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "642", "57", "14", "21", null, null, this.div_SEARCH);
            obj.set_taborder("78");
            obj.set_text("~");
            obj.style.set_align("center");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Static("sta_EMPL_SE06", "absolute", "792", "57", "64", "21", null, null, this.div_SEARCH);
            obj.set_taborder("79");
            obj.set_text("지출계좌");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Combo("cmb_ACNUTNO", "absolute", "859", "57", "250", "21", null, null, this.div_SEARCH);
            this.div_SEARCH.addChild(obj.name, obj);
            obj.set_innerdataset("ds_acctNoList");
            obj.set_codecolumn("ACNUTNO");
            obj.set_datacolumn("ACNUT_NM");
            obj.set_taborder("80");
            obj.set_index("0");
            obj = new Static("Static06", "absolute", "777", "50", "14", "29", null, null, this.div_SEARCH);
            obj.set_taborder("81");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_SEARCH.addChild(obj.name, obj);

            obj = new Grid("grd", "absolute", "0", "111", null, null, "28", "0", this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_expDsn");
            obj.set_autosizingtype("row");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_extendsizetype("row");
            obj.style.set_cursor("hand");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"79\"/><Column size=\"0\"/><Column size=\"40\"/><Column size=\"90\"/><Column size=\"40\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"60\"/><Column size=\"50\"/><Column size=\"90\"/><Column size=\"306\"/><Column size=\"100\"/><Column size=\"105\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"85\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"40\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"재무팀&#13;&#10;승인\"/><Cell col=\"2\" text=\"재무팀&#13;&#10;수정요청\"/><Cell col=\"3\" text=\"결재상태\"/><Cell col=\"4\" text=\"지출&#13;&#10;여부\"/><Cell col=\"5\" text=\"지출&#13;&#10;전송\"/><Cell col=\"6\" text=\"결의일자\"/><Cell col=\"7\" text=\"이월\"/><Cell col=\"8\" text=\"원인행위\"/><Cell col=\"9\" text=\"채무확정\"/><Cell col=\"10\" text=\"자금지출\"/><Cell col=\"11\" text=\"지급번호\"/><Cell col=\"12\" text=\"연도\"/><Cell col=\"13\" text=\"결의번호\"/><Cell col=\"14\" text=\"적요\"/><Cell col=\"15\" text=\"금액\"/><Cell col=\"16\" text=\"채주\"/><Cell col=\"17\" text=\"계정구분\"/><Cell col=\"18\" text=\"계정과목\"/><Cell col=\"19\" text=\"계정과목명\"/><Cell col=\"20\" text=\"부기코드\"/><Cell col=\"21\" text=\"부기명\"/><Cell col=\"22\" text=\"지출계좌\"/><Cell col=\"23\"/></Band><Band id=\"body\"><Cell style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;none&quot; : &quot;checkbox&quot;\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);controlborder:1 none #808080ff ;\" text=\"bind:EXPNDTR_CNFIRM_AT\" suppress=\"2\"/><Cell col=\"2\" displaytype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;none&quot; : &quot;checkbox&quot;\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);controlborder:1 none #808080ff ;\" text=\"expr:EXPNDTR_UPDT_REQ_CN != null ? 1 : 0\" suppress=\"2\"/><Cell col=\"3\" displaytype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;none&quot;: &quot;image&quot;\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);controlborder:1 none #808080ff ;\" text=\"expr:comp.parent.fn_get_imgUrl(SANCTN_KND)\" suppress=\"2\"/><Cell col=\"4\" displaytype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;normal&quot;: &quot;checkbox&quot;\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);controlborder:1 none #808080 ;\" text=\"bind:DECSN_YN\" suppress=\"2\"/><Cell col=\"5\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);controlborder:1 none #808080ff ;\"/><Cell col=\"6\" displaytype=\"date\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:ITNC_DE\" suppress=\"2\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;normal&quot;: &quot;checkbox&quot;\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);controlborder:1 none #808080 ;\" text=\"bind:CYFD_SE\" suppress=\"2\"/><Cell col=\"8\" displaytype=\"date\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:CAUSE_ACTION_DE\" suppress=\"2\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"date\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:DET_DCSN_DE\" suppress=\"2\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" displaytype=\"date\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:CPTAL_EXPNDTR_ACNTBK_DE\" suppress=\"2\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" style=\"align:right;background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:CHECK_NO\" suppress=\"2\"/><Cell col=\"12\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:DECSN_YEAR\" suppress=\"2\"/><Cell col=\"13\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:DECSN_NO\" suppress=\"1\"/><Cell col=\"14\" style=\"align:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;right&quot; : &quot;left&quot;);background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? dataset.getColumn(dataset.getGroupRangeStart(currow),&quot;DECSN_CNT&quot;) : SUMRY\" wordwrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:DECSN_AMOUNT\"/><Cell col=\"16\" style=\"align:left;background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:RCPT_MAN\" wordwrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"17\" displaytype=\"combo\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:BSNS_SE\" suppress=\"2\" combodataset=\"ds_bdg001\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"18\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:BUDGET_ACNT_CODE\" suppress=\"2\"/><Cell col=\"19\" style=\"align:left;background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:BUDGET_ACNT_NM\" wordwrap=\"char\" suppress=\"2\" autosizerow=\"limitmin\"/><Cell col=\"20\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:EXPNDTR_UNIT_CODE\" suppress=\"2\"/><Cell col=\"21\" style=\"align:left;background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:EXPNDTR_UNIT_NM\" wordwrap=\"char\" suppress=\"2\" autosizerow=\"limitmin\"/><Cell col=\"22\" style=\"align:left middle;\" text=\"bind:ACNUTNO\"/><Cell col=\"23\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0", "92", null, "19", "873", null, this);
            obj.set_taborder("15");
            obj.set_text("지출결의서");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "0", "106", null, "5", "27", null, this);
            obj.set_taborder("16");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "1171", "0", "15", "735", null, null, this);
            obj.set_taborder("17");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", null, "0", "13", "735", "0", null, this);
            obj.set_taborder("18");
            obj.set_text("스\r\n크\r\n롤\r\n13");
            obj.set_visible("false");
            obj.style.set_background("#d07b173c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "0%", "85", null, "10", "2.67%", null, this);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Confirm", "absolute", null, "88", "89", "21", "211", null, this);
            obj.set_taborder("20");
            obj.set_text("개별승인");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Confirm_All", "absolute", null, "88", "89", "21", "119", null, this);
            obj.set_taborder("21");
            obj.set_text("일괄승인");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Cancel_All", "absolute", null, "88", "89", "21", "27", null, this);
            obj.set_taborder("22");
            obj.set_text("일괄승인취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_updtReq", "absolute", null, "88", "89", "21", "303", null, this);
            obj.set_taborder("23");
            obj.set_text("수정요청");
            this.addChild(obj.name, obj);

            obj = new Button("btn_earlyConfmInfoupdt", "absolute", null, "88", "89", "21", "395", null, this);
            obj.set_taborder("25");
            obj.set_text("결재초기화");
            obj.set_visible("false");
            obj.style.set_background("lightsalmon");
            obj.style.set_border("1 solid #8d8d8dff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sanctnCompt", "absolute", null, "88", "89", "21", "487", null, this);
            obj.set_taborder("26");
            obj.set_text("결재완료처리");
            obj.set_visible("false");
            obj.style.set_background("lightsalmon");
            obj.style.set_border("1 solid #8d8d8dff");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 85, this.div_SEARCH,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WFSA_Box");

            	}
            );
            this.div_SEARCH.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1198, 735, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("UI_ACC020203");
            		p.set_titletext("지출결의서관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item13","Div01.Edit04","value","DS_CPR_CARD_MANAGE","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","Div01.Edit05","value","DS_CPR_CARD_MANAGE","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","Div01.Edit02","value","DS_CPR_CARD_MANAGE","EMPNO_2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","Div01.Edit03","value","DS_CPR_CARD_MANAGE","EMPNM_2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","Div01.Edit08","value","DS_CPR_CARD_MANAGE","EMPNO_3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","Div01.Edit09","value","DS_CPR_CARD_MANAGE","EMPNM_3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","Div01.Edit10","value","DS_CPR_CARD_MANAGE","CHANGE_SUMRY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Div01.CheckBox00","value","DS_CPR_CARD_MANAGE","CNRS_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","div_SEARCH.Calendar00","value","ds_cond","SRCH_ST_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","div_SEARCH.Calendar01","value","ds_cond","SRCH_ED_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_SEARCH.edt_bsnsCode","value","ds_cond","BSNS_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_SEARCH.Combo02","value","ds_cond","ANACT_KND");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","div_SEARCH.Combo01","value","ds_cond","STDR_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","div_SEARCH.edt_bsnsNm","value","ds_cond","BSNS_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_SEARCH.Combo03","value","ds_cond","SRCH_COND");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_SEARCH.Edit01","value","ds_cond","SRCH_TXT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_SEARCH.CheckBox00","value","ds_cond","CNTRCT_DECSN_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div_SEARCH.Combo00","value","ds_cond","EXPNDTR_CNFIRM_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","div_SEARCH.msk_decsnAmount","value","ds_cond","DECSN_AMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","div_SEARCH.msk_decsnAmount2","value","ds_cond","DECSN_AMOUNT2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","div_SEARCH.cmb_ACNUTNO","value","ds_cond","ACCT_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "com::deptCode.xfdl");
        };
        
        // User Script
        this.addIncludeScript("ACC020203.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("ACC020203.xfdl", "mis_lib::misUtil.xjs");
        this.registerScript("ACC020203.xfdl", function() {
        /***********************************************************************
         * 화면ID   : ACC020203
         * 화면명   : 지출결의등록
         * 화면설명 : 지출결의를 등록한다.
         * 작성일   : 2015.07.20
         * 작성자   : 이상명
         * 수정이력 : 
         ***********************************************************************
         *     수정일     수정자   내용
         ***********************************************************************
         *    
         ***********************************************************************
         */

        
        /***********************************************************************
         * Script Include 
         ************************************************************************/
        // 시스템 공통 라이브러리 Include
        //include "lib::comInclude.xjs";
        //include "mis_lib::misUtil.xjs";

        // 업무에 필요한 공통 라이브러리 파일을 추가할 수 있다.
        // TODO

        /***********************************************************************
         * 화면 변수 선언부
         ***********************************************************************/
        this.arrStrUrl = {
        	 "01": "mis_acc::ACC020203_P03.xfdl"	// 여비지출결의서
        	,"02": "mis_acc::ACC020203_P02.xfdl"	// 구입과지출결의서
        	,"03": "mis_acc::ACC020203_P01.xfdl"	// 지출결의서
        	,"05": "mis_acc::ACC020203_P05.xfdl"	// 여입결의서
        	,"06": "mis_acc::ACC020203_P06.xfdl"	// 공사와집행결의서
        	,"07": "mis_acc::ACC020203_P07.xfdl"	// 봉급지출결의서
        	,"11": "mis_acc::ACC020203_P11.xfdl"	// 지출결의서(자금이체)
        };

        this.currow 	= 0;
        this.scrollpos 	= 0;

        /***********************************************************************
         * onInit / onLoad 영역
         ***********************************************************************/
        this.ACC020203_onload = function(obj,e)
        {
        	// Form 초기화
        	this.fn_init_form();
        	this.fn_misFormInit(this);
        	
        	// DataSet 초기화
        	this.fn_init_dataset();
        	
        	
            

            // 공통코드
        	var comboParams = [
        		 ["ds_acc002", "ACC002", "Y", "D", "B"]	// 지출결의서 구분
        		,["ds_bdg001", "BDG001", "Y", "D", "B"]	
        		,["ds_com022", "COM022", "Y", "D", "B"]	
        	];
        	var callback = function (svcId, errorCode, errorMsg) {
        		// 조회 이벤트 / 함수 호출
        		//기승인정보수정 버튼 활성화(담당자만)
        		if(this.gfn_authGrpId("ACC_ADMIN") != -1 || this.gfn_authGrpId("ACC_USER") != -1) {
        			this.btn_earlyConfmInfoupdt.set_visible(true);
        		}
        		
        		// 2020.11.02 김종환 과장 요청
        		// 접속자가 김종환 과장일 경우 [결재완료] 버튼 활성화
        		var empno = this.fn_getEmpno();
        		if(empno == "20190047") {
        			this.btn_sanctnCompt.set_visible(true);
        		}
        		
        		this.fn_transaction("selectAcnutnoList");
        		this.fn_search();
        	};
        	this.gfn_comboLoad (comboParams, callback);
        }

        /***********************************************************************
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
        	// 시스템 공통으로 Form을 Initialize 한다.
        	this.gfn_initForm(this);
        	
        	this.div_SEARCH.div_dept.fn_setBind("ds_cond", "DEPT_CODE", "DEPT_NM");
        	
        	var today = this.dateUtils.today();
        	var bgnDe = today.substr(0, 6) + "01";
        	this.ds_cond.clearData();
        	this.ds_cond.addRow();
        	this.ds_cond.setColumn(0, "BPLC_SE", "");
        	this.ds_cond.setColumn(0, "SRCH_ST_DT", bgnDe);
        	this.ds_cond.setColumn(0, "SRCH_ED_DT", today);
        	this.ds_cond.setColumn(0, "ANACT_KND", "3");
        	this.ds_cond.setColumn(0, "STDR_DE", "3");
        	this.ds_cond.setColumn(0, "SRCH_COND", "1");
        	this.ds_cond.setColumn(0, "EXPNDTR_CNFIRM_AT", "A");
        	
        	var formId = application.gv_curFormId;
        	formId == "MIS_1103020300" ? this.ds_cond.setColumn(0, "CNTRCT_DECSN_AT", "1") : this.ds_cond.setColumn(0, "CNTRCT_DECSN_AT", "0");
        }

        /*
         * 함수명  	: initDataset
         * 설명 		: Dataset을 초기화한다.
         *                주로, 조건 Dataset들(ds_cond, ds_cond_00, ds_cond_01, ...) 을 초기화한다.
         * params  		: None
         * return Type 	: None
         * 사용법		: this.initDataset();
         */
        this.fn_init_dataset = function()
        {
        	this.gfn_initCondDs(this, this.div_search);
        	
        	// 조건 Dataset 외에 초기화가 필요한 Dataset에 대한 초기화 코드를 추가한다.
        	// TODO
        }

        /***********************************************************************
         * Transaction 관련 이벤트 핸들러 
         **********************************************************************/
        /*
         * 함수명  	: fn_search
         * 설명 		: 조회
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_search();
         */
        this.fn_search = function()
        {
        	// validation 체크
        	if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond, this.ds_validation)) {
        		return false;
        	}
        	this.fn_transaction("SRCH");
        }

        /*
         * 함수명  	: fn_save
         * 설명 		: 저장
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_save();
         */
        this.fn_save= function()
        {
        	this.fn_transaction("SAVE");
        }

        /**********************************************************************
         * CALL TRANSACTION 영역
         **********************************************************************/
         
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
        		case "SRCH": // 지출결의 목록
        			var sController   	= "hsco/mis/acc/ACC020203/expDsnList.do";
        			var sInDatasets   	= "input1=ds_cond";
        			var sOutDatasets  	= "ds_expDsn=output1";
        			break;
        		case "DELETE": // 지출결의 삭제
        			var sController   	= "hsco/mis/acc/ACC020203/expDsnD.do";
        			var sInDatasets   	= "input1=ds_cond input2=ds_decsnNo:A";
        			var sOutDatasets  	= "ds_expDsn=output1";
        			break;	
        		case "expndtrConfmU":	// 승인/취소
        			var sController   	= "hsco/mis/acc/ACC020203/expndtrConfmU.do";
        			var sInDatasets   	= "input1=ds_cond input2=ds_expDsn:A";
        			var sOutDatasets  	= "ds_expDsn=output1";
        			break;
        		case "selectAcnutnoList":// 계좌번호 리스트 조회
        			var sController   	= "hsco/mis/fun/FUN010105/selectAcnutnoList.do";
        			var sInDatasets   	= "input1=ds_cond";
        			var sOutDatasets  	= "ds_acctNoList=output1";
        			break;
        		case "updateSanctnNo":	// 결재초기화
        			var sController   	= "hsco/mis/acc/ACC020203/updateSanctnNo.do";
        			var sInDatasets   	= "input1=ds_expDsn:U";
        			var sOutDatasets  	= "";
        			break;	
        			
        			
        	}

        	Ex.core.tran(this, strSvcId, sController, sInDatasets, sOutDatasets); 
        }

         /**********************************************************************
         * Transaction Callback 영역
         ***********************************************************************/

         /*
         * 함수명  	: fn_callBack
         * 설명 		: Transaction Callback 처리
         * params  		: strSvcId    : 서비스요청 ID
         *                nErrorCode  : 오류 메시지 코드 ([예] 0 : Success, 그밖의 경우, error)
         *                strErrorMsg : 오류 메시지([예]  success.insert|정상적으로 등록되었습니다.)
         * return Type 	: None
         * 사용법		: 
         */
        this.fn_callBack = function (strSvcId,nErrorCode,strErrorMsg)
        {
        	
        	if (nErrorCode != 0) {
        		// 오류 및 성공 메시지를 화면에 보여준다.
        		this.gfn_callback_message(strSvcId, nErrorCode, strErrorMsg);
        	} else {
        		// 성공 메시지를 보여주는 동작 외에 처리할 내용이 있으면 아래에 기술.
        		// 처리할 내용이 없다면, switch 문은 생략합니다.
        		switch(strSvcId) {
        			case "SRCH":
        				break;
        				
        			case "DELETE":
        				break;
        				
        			case "expndtrConfmU":	// 승인/취소
        				this.ds_expDsn.set_rowposition(this.currow);
        				this.grd.vscrollbar.set_pos(this.scrollpos);
        				this.gfn_message("success.처리.성공");
        				break;
        				
        			case "selectAcnutnoList":		// 계좌번호 리스트 조회
        				this.ds_acctNoList.insertRow(0);
        				this.ds_acctNoList.setColumn(0, "ACNUTNO"   , "");
        				this.ds_acctNoList.setColumn(0, "ACNUT_NM", "전체");
        				this.ds_cond.setColumn(0, "ACCT_NO", "");
        				this.fn_search();
        				break;	
        			case "updateSanctnNo":		// 결재초기화
        				this.gfn_message("success.처리.성공");
        				this.fn_search();
        				break;		
        			default:
        				break;
        		}
        	}
        }

        /***********************************************************************
         * non-Transaction 관련 컴포넌트 이벤트 처리 함수
         ***********************************************************************/
        /*
         * 함수명  	: fn_insert
         * 설명 		: 신규 결의서 등록
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_insert();
         */
        this.fn_insert = function()
        {
        	var args = {
        		  arg_0     : this
        		, trgFormId	: "ACC020203"											// 팝업을 호출하는 화면의 ID
        		, trgFormId2: "MIS"											// 팝업을 호출하는 화면의 ID
        		, anactKnd	: this.ds_cond.getColumn(0,"ANACT_KND")
        		, decsnYear	: this.ds_cond.getColumn(0,"SRCH_ST_DT").substr(0,4)	// 결의년도는 검색조건 기준일자의 시작년도를 기준으로 하였음
        		, decsnNo	: ""
            };
        	
        	this.gfn_popup("expDsnPopup", 903, 842, "결의서", args, this.arrStrUrl[args.anactKnd], "fn_popupCallBack", true);
        }

        
        /*
         * 함수명  	: fn_delete
         * 설명 		: 결의서 삭제
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_delete();
         */
        this.fn_delete= function()
        {	
        	var currow = this.ds_expDsn.rowposition;
        	
        	if(this.ds_expDsn.getRowType(currow) == Dataset.ROWTYPE_GROUP) {
        		return;
        	}	
        	
        	// 결재상태 체크
        	var arrSanctn = ["1","4","5"];
        	if(arrSanctn.indexOf(this.ds_expDsn.getColumn(currow, "SANCTN_KND")) > -1) {
        		this.gfn_message("fail.삭제.불가","결재 상신중이거나 완료된 건은");
        		return;
        	}	
        	
        	// 지출여부 체크
        	/*
        	if(this.ds_expDsn.getColumn(currow, "TIMHDER_CONFM") == "1") {
        		this.gfn_message("fail.삭제.불가","지출승인된 자료는");
        		return;
        	}
        	*/
        	
        	if(this.gfn_message("confirm.삭제.진행", "삭제 후 바로 저장됩니다.")){
        		// 결의번호 복사
        		this.ds_decsnNo.clearData();
        		this.ds_decsnNo.addRow();
        		this.ds_decsnNo.copyRow(0, this.ds_expDsn, currow, "DECSN_YEAR=DECSN_YEAR,DECSN_NO=DECSN_NO,ANACT_KND=ANACT_KND,TRG_FORM_ID=TRG_FORM_ID");
        		// 결의서 삭제
        		this.fn_transaction("DELETE");
        	}
        }

        
        /*
         * 함수명  	: fn_cancel
         * 설명 		: 취소 버튼 이벤트 처리(Dataset 변경 내역 Reset)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_cancel();
         */
        this.fn_cancel= function()
        {
        	if(this.gfn_message("confirm.취소여부") ){
        		this.ds_expDsn.reset();
        		this.ds_expDsn.applyChange();
        	}
        }

        /*
         * 함수명  	: fn_print
         * 설명 		: 인쇄
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_print();
         */
        this.fn_print = function()
        {
        	var vOpts = new this.cf_Opts;
        	vOpts.setToolbar(false);
        	vOpts.setScale(100);
        	vOpts.setArgs("title", "지출결의서");
        	vOpts.setSaveFilename("지출결의서");
        	vOpts.clearLocalDs();
        	vOpts.setGrid(this.grd);
        	vOpts.setReportPath("/common/hscoLandscapeA3.jrf");

        	var parm = {
        		arg_0 : this,  //==> 필수, 팝업을 호출하는 form을 참조할 수 있도록 팝업에 Argument로 넘겨준다. (반드시 기술해야 함.)
        		opts : vOpts
        	};

        	this.gfn_popup("Popup_Report", 884, 735, "지출결의서", parm, "common::frmReportPopup.xfdl", "");
        }

        
        /*
         * 함수명  	: fn_popup_onclick
         * 설명 		: 팝업 버튼 클릭
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_popup_onclick();
         */
        this.fn_popup_onclick = function(obj,e)
        {
        	switch(obj.name) {
        		case "btn_bsnsPopup":	// 사업지구 팝업
        			this.gfn_popup("btn_bsnsPopup", 500, 500, "사업지구", "", "pms_prj::popBsns.xfdl", "fn_popupCallBack", true);
        			break;
        		
        		case "btn_prmpcPopup":	//원가항목 팝업 
        			this.gfn_popup("btn_prmpcPopup", 500, 500, "원가항목", {year:this.ds_cond.getColumn(0,"SRCH_ST_DT").substr(0,4)}, "mis_acc::ACC000000_P02.xfdl", "fn_popupCallBack", true);
        			break;
        	}
        }
        /*
         * 함수명  	: grd_oncelldblclick
         * 설명 		: 그리드 더블클릭
         * params  		: None
         * return Type 	: None
         * 사용법		: this.grd_oncelldblclick();
         */
        this.grd_oncelldblclick = function(obj,e)
        {
        	if(this.ds_expDsn.getRowType(this.ds_expDsn.rowposition) == Dataset.ROWTYPE_GROUP) {
        		return;
        	}

        	var args = {
        		  arg_0     : this
        		, trgFormId	: "ACC020203"												// 팝업을 호출하는 화면의 ID
        		, anactKnd	: this.ds_expDsn.getColumn(e.row, "ANACT_KND")
        		, decsnYear	: this.ds_expDsn.getColumn(e.row, "DECSN_YEAR")
        		, decsnNo	: this.ds_expDsn.getColumn(e.row, "DECSN_NO")
        	};
        	this.gfn_popup("expDsnPopup", 903, 842, "결의서", args, this.arrStrUrl[args.anactKnd], "fn_popupCallBack", true);
        }
        /*
         * 함수명  	: fn_popupCallback
         * 설명 		: 팝업 콜백함수
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_popupCallback();
         */
        this.fn_popupCallBack = function(strID,variant) {

        	switch(strID) {
        		case "expDsnPopup":
        			if(variant == "I" || variant == "U") {
        				this.fn_search();
        			}
        			break;
        		case "btn_bsnsPopup":
        			if(variant != null && variant.length > 0) {
        				var dsTemp = new Dataset();
        				dsTemp.loadXML(variant);
        				this.ds_cond.setColumn(0, "BSNS_CODE",			dsTemp.getColumn(0, "BSNS_CODE"));			// 사업지구코드
        				this.ds_cond.setColumn(0, "BSNS_NM",			dsTemp.getColumn(0, "BSNS_NM"));			// 사업지구명
        			}
        			break;
        		case "btn_prmpcPopup":
        			if(variant != null && variant.length > 0) {
        				var dsTemp = new Dataset();
        				dsTemp.loadXML(variant);
        				this.ds_cond.setColumn(0, "PRMPC_CODE",			dsTemp.getColumn(0, "ACCNUT_ACNT_CODE"));		// 원가코드
        				this.ds_cond.setColumn(0, "PRMPC_NM",			dsTemp.getColumn(0, "ACCNUT_ACNT_NM"));			// 원가명
        			}
        			break;
        	}

        }

        
        /**********************************************************************
        * 조회조건 사업명 backspace, delete 키보드 입력시 값 지움
        ***********************************************************************/ 
        this.div_SEARCH_edt_bsnsNm_onkeyup = function(obj,e)
        {
        	if(e.keycode == '8'){   // backspace
        		obj.set_value("");
        		this.div_SEARCH.edt_bsnsCode.set_value("");
        	}else if(e.keycode == '46'){  // delete
        		obj.set_value("");
        		this.div_SEARCH.edt_bsnsCode.set_value("");
        	}
        }

        /**********************************************************************
        * 조회조건 원가명 backspace, delete 키보드 입력시 값 지움
        ***********************************************************************/ 
        this.div_SEARCH_edt_prmpcNm_onkeyup = function(obj,e)
        {
        	if(e.keycode == '8'){   // backspace
        		obj.set_value("");
        		this.div_SEARCH.edt_prmpcCode.set_value("");
        	}else if(e.keycode == '46'){  // delete
        		obj.set_value("");
        		this.div_SEARCH.edt_prmpcCode.set_value("");
        	}	
        }

        /*
         * 함수명  	: btn_onclick
         * 설명 		: 버튼 클릭 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_onclick();
         */
        this.btn_onclick = function(obj,e)
        {
        	this.currow 	= this.ds_expDsn.rowposition;
        	this.scrollpos	= this.grd.vscrollbar.pos;

        	switch(obj.name) {
        		case "btn_Confirm":		// 개별승인
        			if(this.currow > -1) {
        				if(this.ds_expDsn.getColumn(this.currow, "EXPNDTR_CNFIRM_AT") == "0") {
        					if(this.gfn_message("comm.행위여부","개별승인 처리") ){
        						this.ds_expDsn.setColumn(this.currow, "EXPNDTR_CNFIRM_AT", "1");
        					}
        					else {
        						return;
        					}
        				} else {
        					this.ds_expDsn.setColumn(this.currow, "EXPNDTR_CNFIRM_AT", "0");
        				}
        			}
        			break;
        		case "btn_Confirm_All":	// 일괄승인
        			if(this.gfn_message("comm.행위여부","일괄승인 처리") ){
        				for(i = 0; i < this.ds_expDsn.getRowCount(); i++) {
        					if(this.ds_expDsn.getColumn(i, "EXPNDTR_CNFIRM_AT") == "0" && this.ds_expDsn.getColumn(i, "RNUMBER") == "1") {
        						this.ds_expDsn.setColumn(i, "EXPNDTR_CNFIRM_AT", "1");
        					}
        				}
        			}
        			else {
        				return;
        			}
        			break;
        		case "btn_Cancel_All":	// 일괄승인취소
        			if(this.gfn_message("comm.행위여부","일괄승인취소 처리") ){
        				for(i = 0; i < this.ds_expDsn.getRowCount(); i++) {
        					if(this.ds_expDsn.getColumn(i, "EXPNDTR_CNFIRM_AT") == "1" && this.ds_expDsn.getColumn(i, "RNUMBER") == "1" && ['0','2','3'].indexOf(this.ds_expDsn.getColumn(i, "SANCTN_KND")) > -1) {
        						this.ds_expDsn.setColumn(i, "EXPNDTR_CNFIRM_AT", "0");
        					}
        				}
        			}
        			else {
        				return;
        			}
        			break;
        		case "btn_updtReq":		// 수정요청
        			if(this.currow > -1) {
        				if(this.ds_expDsn.getRowType(this.currow) == Dataset.ROWTYPE_GROUP) {
        					return;
        				}

        				var args = {
        					  arg_0     : this
        					, trgFormId	: "ACC020203"												// 팝업을 호출하는 화면의 ID
        					, anactKnd	: this.ds_expDsn.getColumn(this.currow, "ANACT_KND")
        					, decsnYear	: this.ds_expDsn.getColumn(this.currow, "DECSN_YEAR")
        					, decsnNo	: this.ds_expDsn.getColumn(this.currow, "DECSN_NO")
        				};
        				this.gfn_popup("expDsnPopup", 903, 842, "결의서", args, this.arrStrUrl[args.anactKnd], "fn_popupCallBack", true);
        				return;
        			}
        			break;
        		case "btn_earlyConfmInfoupdt":	// 결재초기화
        			if(this.currow > -1) {
        				if(this.ds_expDsn.getRowType(this.currow) == Dataset.ROWTYPE_GROUP) {
        					return;
        				}
        				if(this.gfn_message("comm.행위여부","기승인된 정보를 초기화 합니다.\n(해당 결의서의 전표정보도 함께 삭제됩니다.)\n진행") ){
        					var mRow = this.ds_expDsn.rowposition;
        					this.ds_expDsn.setColumn(mRow, "SANCTN_NO", null);
        					this.fn_transaction("updateSanctnNo"); //결재초기화
        				}
        			}
        			return;
        			break;
        		case "btn_sanctnCompt":	// 결재완료처리
        			if(this.currow > -1) {
        				if(this.ds_expDsn.getRowType(this.currow) == Dataset.ROWTYPE_GROUP) {
        					return;
        				}
        				if(this.gfn_message("comm.행위여부","결재상태를 완료로 변경합니다.\n진행") ){
        					this.ds_expDsn.setColumn(this.currow, "SANCTN_NO", "0");
        					this.fn_transaction("updateSanctnNo");
        				} else {
        					return false;
        				}
        			}
        			break;
        		default:
        			break;
        	}
        	
        	// 지출확인,취소 처리
        	this.ds_cond.reset();
        	this.fn_transaction("expndtrConfmU");
        }

        this.fn_get_imgUrl = function(sanctnKnd)
        {
        	return this.gfn_getSanctnImgUrl(sanctnKnd);
        }

        this.ds_expDsn_onrowposchanged = function(obj,e)
        {
        	// 결재가 진행된 데이터는 버튼 활성화
        	this.btn_earlyConfmInfoupdt.set_enable(['5'].indexOf(obj.getColumn(e.newrow, "SANCTN_KND")) > -1);
        	// 결재가 진행된 데이터는 버튼 비활성화
        	this.btn_Confirm.set_enable(['0','2','3'].indexOf(obj.getColumn(e.newrow, "SANCTN_KND")) > -1);
        	// 지출확인여부에 따라 버튼명칭 변경
        	this.btn_Confirm.set_text(obj.getColumn(e.newrow, "EXPNDTR_CNFIRM_AT") == "1" ? "개별취소" : "개별승인");
        }

        
        /*
         * 함수명  	: ds_cond_oncolumnchanged
         * 설명 		: 검색조건 데이터 변경 후 발생
         * params  		: obj, e
         * return Type 	: None
         * 사용법		: this.ds_cond_oncolumnchanged(obj:Dataset, e:nexacro.DSColChangeEventInfo);
         */
        this.ds_cond_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "DEPT_CODE") {
        		this.fn_transaction("selectAcnutnoList");
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_cond.addEventHandler("oncolumnchanged", this.ds_cond_oncolumnchanged, this);
            this.ds_expDsn.addEventHandler("onrowposchanged", this.ds_expDsn_onrowposchanged, this);
            this.ds_acc002.addEventHandler("onrowposchanged", this.ds_frmtnPd_onrowposchanged, this);
            this.ds_acc001.addEventHandler("onrowposchanged", this.ds_frmtnPd_onrowposchanged, this);
            this.ds_bdg001.addEventHandler("onrowposchanged", this.ds_frmtnPd_onrowposchanged, this);
            this.ds_expDsnMtrDet.addEventHandler("oncolumnchanged", this.ds_expDsnMtrDet_oncolumnchanged, this);
            this.ds_expDsnDtlsTrvct.addEventHandler("oncolumnchanged", this.ds_expDsnDtlsTrvct_oncolumnchanged, this);
            this.ds_expDsnDtlsTrvct.addEventHandler("onrowposchanged", this.ds_expDsnDtlsTrvct_onrowposchanged, this);
            this.ds_expDsnDetTrvDtstmn.addEventHandler("oncolumnchanged", this.ds_expDsnDetTrvDtstmn_oncolumnchanged, this);
            this.ds_expDsnDetailTrvct.addEventHandler("oncolumnchanged", this.ds_expDsnDetailTrvct_oncolumnchanged, this);
            this.ds_expDsnDetailTrvct.addEventHandler("onrowposchanged", this.ds_expDsnDetailTrvct_onrowposchanged, this);
            this.ds_rturnExpDsnMtrDet.addEventHandler("oncolumnchanged", this.ds_rturnExpDsnMtrDet_oncolumnchanged, this);
            this.ds_slaryExpDsnMtrDet.addEventHandler("oncolumnchanged", this.ds_slaryExpDsnMtrDet_oncolumnchanged, this);
            this.ds_slaryExpDsnMtrDet.addEventHandler("cancolumnchange", this.ds_slaryExpDsnMtrDet_cancolumnchange, this);
            this.addEventHandler("onload", this.ACC020203_onload, this);
            this.div_SEARCH.edt_bsnsNm.addEventHandler("onkeyup", this.div_SEARCH_edt_bsnsNm_onkeyup, this);
            this.div_SEARCH.btn_bsnsPopup.addEventHandler("onclick", this.fn_popup_onclick, this);
            this.grd.addEventHandler("oncelldblclick", this.grd_oncelldblclick, this);
            this.btn_Confirm.addEventHandler("onclick", this.btn_onclick, this);
            this.btn_Confirm_All.addEventHandler("onclick", this.btn_onclick, this);
            this.btn_Cancel_All.addEventHandler("onclick", this.btn_onclick, this);
            this.btn_updtReq.addEventHandler("onclick", this.btn_onclick, this);
            this.btn_earlyConfmInfoupdt.addEventHandler("onclick", this.btn_onclick, this);
            this.btn_sanctnCompt.addEventHandler("onclick", this.btn_onclick, this);

        };

        this.loadIncludeScript("ACC020203.xfdl");
        this.loadPreloadList();
       
    };
}
)();
