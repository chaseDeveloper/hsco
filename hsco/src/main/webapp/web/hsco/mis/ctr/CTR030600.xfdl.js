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
                this.set_name("CTR030600");
                this.set_classname("CTR030600");
                this.set_titletext("계약대가지급");
                this._setFormPosition(0,0,1059,735);
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
            obj._setContents("<ColumnInfo><Column id=\"CNTRCT_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"CNTRCT_NO\" type=\"STRING\" size=\"10\"/><Column id=\"CNTRCT_NM\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_condSub", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CNTRCT_DECSN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_DECSN_SN\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"WTNESS_SN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_prsecWtnessList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CNTRCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"WTNESS_SN\" type=\"STRING\" size=\"256\"/><Column id=\"PRSEC_DE\" type=\"STRING\" size=\"256\"/><Column id=\"PRSEC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PRSEC_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRSEC_ODR\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_AMOUNT\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"PRSEC_AMOUNT\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"DECSN_AMOUNT\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"PRICE_PYMNT_REGIST_AT\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_REGIST_AT\" type=\"STRING\" size=\"256\"/><Column id=\"MNG_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MNG_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BCNC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BCNC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cntrctDecsnInfo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CNTRCT_DECSN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_DECSN_SN\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"WTNESS_SN\" type=\"STRING\" size=\"256\"/><Column id=\"PXCOND_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PXCOND_ODR\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_FNNC_INSTT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_FNNC_INSTT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_ACNUTNO\" type=\"STRING\" size=\"256\"/><Column id=\"SUMRY\" type=\"STRING\" size=\"256\"/><Column id=\"PXPAY_AT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXP_DECSN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"EXP_DECSN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EXP_DECSN_STR\" type=\"STRING\" size=\"256\"/><Column id=\"EXP_DECSN_AT\" type=\"STRING\" size=\"256\"/><Column id=\"ENABLE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"ANACT_KND\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_COMPET_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ISSU_SEQNO\" type=\"STRING\" size=\"256\"/><Column id=\"REGS_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ctr039", this);
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

            obj = new Dataset("ds_ctr047", this);
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

            obj = new Dataset("ds_ctr048", this);
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

            obj = new Dataset("ds_fnncInsttList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"FNNC_INSTT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FNNC_INSTT_CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">CNTRCT_DECSN_YEAR</Col><Col id=\"compId\">ds_cntrctDecsnInfo</Col><Col id=\"msgId\">계약결의년도</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">PXCOND_SE</Col><Col id=\"compId\">ds_cntrctDecsnInfo</Col><Col id=\"msgId\">기성구분</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">PXCOND_ODR</Col><Col id=\"compId\">ds_cntrctDecsnInfo</Col><Col id=\"msgId\">기성차수</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">EXPNDTR_ACNUTNO</Col><Col id=\"compId\">ds_cntrctDecsnInfo</Col><Col id=\"msgId\">지출계좌</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_cntrctDecsnDetail</Col><Col id=\"colId\">BCNC_CODE</Col><Col id=\"msgId\">계약업체</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">PYMNT_ACNUTNO</Col><Col id=\"compId\">ds_cntrctDecsnDetail</Col><Col id=\"msgId\">지급계좌</Col><Col id=\"notNull\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_fileList2", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRS\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORGINL_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_EXTSN\" type=\"string\" size=\"32\"/><Column id=\"FILE_STRE_COURS\" type=\"string\" size=\"32\"/><Column id=\"FILE_ID\" type=\"string\" size=\"32\"/><Column id=\"SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"SYS_SE_CODE\" type=\"string\" size=\"32\"/><Column id=\"FILE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"FILE_TY\" type=\"string\" size=\"32\"/><Column id=\"JOB_SE\" type=\"string\" size=\"32\"/><Column id=\"DELETE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"STRE_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_MG\" type=\"bigdecimal\" size=\"16\"/><Column id=\"FILE_CN\" type=\"string\" size=\"32\"/><Column id=\"FILE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"TRNSMIS_FILE_SIZE\" type=\"string\" size=\"32\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"STTUS\" type=\"string\" size=\"32\"/><Column id=\"FILE_SN\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cntrct", this);
            obj._setContents("<ColumnInfo><Column id=\"CNTRCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQEST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_MTH_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_DISPOS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"OUTSRC_MTH_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BID_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_COMPET_DE\" type=\"STRING\" size=\"256\"/><Column id=\"STRWRK_DE\" type=\"STRING\" size=\"256\"/><Column id=\"COMPET_DE\" type=\"STRING\" size=\"256\"/><Column id=\"PRVCNTR_PRVONSH\" type=\"STRING\" size=\"256\"/><Column id=\"PRCURE_CNTRCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PRCURE_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"MNG_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MNG_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MANGR_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPT_LOCPLC\" type=\"STRING\" size=\"256\"/><Column id=\"INFRML_CNTRCT_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ctr022", this);
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

            obj = new Dataset("ds_ctr023", this);
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

            obj = new Dataset("ds_ctr049", this);
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

            obj = new Dataset("ds_ctr040", this);
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

            obj = new Dataset("ds_ctr042", this);
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

            obj = new Dataset("ds_cntrctDecsnDetail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DECSN_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_DECSN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_DECSN_SN\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_SN\" type=\"STRING\" size=\"256\"/><Column id=\"ENTRPS_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_AT\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_AT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"QOTA_RT\" type=\"STRING\" size=\"256\"/><Column id=\"BCNC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BCNC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BCNC_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"ORGINL_OUTSRC_BCNC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ORGINL_OUTSRC_BCNC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_FNNC_INSTT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_FNNC_INSTT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_DPSTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_ACNUTNO\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SUPLY_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ISSU_SEQNO\" type=\"STRING\" size=\"256\"/><Column id=\"BILL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BILL_KND\" type=\"STRING\" size=\"256\"/><Column id=\"TAX_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"POPS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ISSU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"ENTRPRS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EVRFRND\" type=\"STRING\" size=\"256\"/><Column id=\"TCNDVLP\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRWK_PRPOS_MTRIL\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_ENTRPS\" type=\"STRING\" size=\"256\"/><Column id=\"FEMALE_ENTRPRS\" type=\"STRING\" size=\"256\"/><Column id=\"DSPSN\" type=\"STRING\" size=\"256\"/><Column id=\"SRSILL_DSPSN\" type=\"STRING\" size=\"256\"/><Column id=\"SOCTY_ENTRPRS\" type=\"STRING\" size=\"256\"/><Column id=\"DSPSN_PRDCTN_FCLTY\" type=\"STRING\" size=\"256\"/><Column id=\"SOCTY_CPER_MXTR\" type=\"STRING\" size=\"256\"/><Column id=\"GREEN_PRDUCT\" type=\"STRING\" size=\"256\"/><Column id=\"DSPSN_STD_BPLC\" type=\"STRING\" size=\"256\"/><Column id=\"WATER_INDUST\" type=\"STRING\" size=\"256\"/><Column id=\"MDLC_INDUST\" type=\"STRING\" size=\"256\"/><Column id=\"FARMNG_INDUST\" type=\"STRING\" size=\"256\"/><Column id=\"ENERGY_INDUST\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_acc030", this);
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

            obj = new Dataset("ds_acc038", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"CODE_NM\">기재사항의 착오·정정</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"CODE_NM\">공급가액 변동</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"CODE_NM\">환입</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"CODE_NM\">계약의 해제</Col></Row><Row><Col id=\"CODE\">05</Col><Col id=\"CODE_NM\">내국신용장 사후 개설</Col></Row><Row><Col id=\"CODE\">06</Col><Col id=\"CODE_NM\">착오에 의한 이중발급</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_fileList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRS\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORGINL_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_EXTSN\" type=\"string\" size=\"32\"/><Column id=\"FILE_STRE_COURS\" type=\"string\" size=\"32\"/><Column id=\"FILE_ID\" type=\"string\" size=\"32\"/><Column id=\"SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"SYS_SE_CODE\" type=\"string\" size=\"32\"/><Column id=\"FILE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"FILE_TY\" type=\"string\" size=\"32\"/><Column id=\"JOB_SE\" type=\"string\" size=\"32\"/><Column id=\"DELETE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"STRE_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_MG\" type=\"bigdecimal\" size=\"16\"/><Column id=\"FILE_CN\" type=\"string\" size=\"32\"/><Column id=\"FILE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"TRNSMIS_FILE_SIZE\" type=\"string\" size=\"32\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"STTUS\" type=\"string\" size=\"32\"/><Column id=\"FILE_SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"NEW_FILE_ORDR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_copyFileList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"FILE_SN\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_accFileList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRS\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORGINL_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_EXTSN\" type=\"string\" size=\"32\"/><Column id=\"FILE_STRE_COURS\" type=\"string\" size=\"32\"/><Column id=\"FILE_ID\" type=\"string\" size=\"32\"/><Column id=\"SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"SYS_SE_CODE\" type=\"string\" size=\"32\"/><Column id=\"FILE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"FILE_TY\" type=\"string\" size=\"32\"/><Column id=\"JOB_SE\" type=\"string\" size=\"32\"/><Column id=\"DELETE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"STRE_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_MG\" type=\"bigdecimal\" size=\"16\"/><Column id=\"FILE_CN\" type=\"string\" size=\"32\"/><Column id=\"FILE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"TRNSMIS_FILE_SIZE\" type=\"string\" size=\"32\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"STTUS\" type=\"string\" size=\"32\"/><Column id=\"FILE_SN\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond_file", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond_decsn_del", this);
            obj._setContents("<ColumnInfo><Column id=\"DECSN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_etcExpDsnRegist", "absolute", null, "430", "135", "19", "273", null, this);
            obj.set_taborder("106");
            obj.set_text("종이세금계산서 등록");
            obj.set_cssclass("btn_WF_Process");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "510", "454", null, "27", "28", null, this);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "510", "67", null, "27", "28", null, this);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "510", "93", null, "27", "28", null, this);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "510", "119", null, "27", "28", null, this);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "0", null, "33", "28", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Box");
            this.addChild(obj.name, obj);
            obj = new MaskEdit("msk_CNTRCT_NO", "absolute", "218", "5", "115", "21", null, null, this.div_search);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_type("string");
            obj.set_mask("####-#-#####");
            obj.set_maskchar(" ");
            obj.set_cssclass("msk_WF_Essential");
            obj.style.set_align("left middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_CNTRCT_NO", "absolute", "154", "5", "64", "21", null, null, this.div_search);
            obj.set_taborder("4");
            obj.set_text("계약번호");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static36", "absolute", "488", "0", "38", "5", null, null, this.div_search);
            obj.set_taborder("5");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#fa794f66");
            obj.style.set_align("center middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static37", "absolute", "488", null, "38", "5", null, "0", this.div_search);
            obj.set_taborder("6");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#fa794f66");
            obj.style.set_align("center middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "0", "5", "15", null, null, "5", this.div_search);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_CNTRCT_NM", "absolute", "335", "5", "280", "21", null, null, this.div_search);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_cntrctPopup", "absolute", "312", "5", "21", "21", null, null, this.div_search);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Search");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_CNTRCT_YEAR", "absolute", "15", "5", "64", "21", null, null, this.div_search);
            obj.set_taborder("8");
            obj.set_text("계약년도");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "139", "5", "15", null, null, "5", this.div_search);
            obj.set_taborder("9");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Spin("spn_CNTRCT_YEAR", "absolute", "79", "5", "60", "21", null, null, this.div_search);
            obj.set_taborder("0");
            obj.set_value("0");
            obj.set_max("9999");
            obj.set_min("1900");
            obj.style.set_buttonsize("15");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "1031", "0", "15", "735", null, null, this);
            obj.set_taborder("39");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", null, "0", "13", "735", "0", null, this);
            obj.set_taborder("40");
            obj.set_text("스\r\n크\r\n롤\r\n13");
            obj.set_visible("false");
            obj.style.set_background("#d07b173c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_top", "absolute", "0", "33", null, "10", "28", null, this);
            obj.set_taborder("41");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_prsecWtnessList", "absolute", "0", "43", null, "19", "908", null, this);
            obj.set_taborder("42");
            obj.set_text("검사입회목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "0", "62", null, "5", "28", null, this);
            obj.set_taborder("43");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_prsecWtnessList", "absolute", "0", "67", "500", null, null, "0", this);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_prsecWtnessList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"진행상태\"/><Cell col=\"2\" colspan=\"3\" text=\"검사검수 정보\"/><Cell col=\"5\" rowspan=\"2\" text=\"계약금액\"/><Cell col=\"6\" rowspan=\"2\" text=\"검사금액\"/><Cell col=\"7\" rowspan=\"2\" text=\"결의금액\"/><Cell col=\"8\" rowspan=\"2\" text=\"기성후잔액\"/><Cell row=\"1\" text=\"대가지급\"/><Cell row=\"1\" col=\"1\" text=\"회계결의\"/><Cell row=\"1\" col=\"2\" text=\"구분\"/><Cell row=\"1\" col=\"3\" text=\"차수\"/><Cell row=\"1\" col=\"4\" text=\"검사일자\"/></Band><Band id=\"body\" style=\"cellpadding:0 5 0 5;\"><Cell displaytype=\"checkbox\" text=\"bind:PRICE_PYMNT_REGIST_AT\"/><Cell col=\"1\" displaytype=\"checkbox\" text=\"bind:DECSN_REGIST_AT\"/><Cell col=\"2\" style=\"align:center middle;\" text=\"bind:PRSEC_SE_NM\"/><Cell col=\"3\" displaytype=\"normal\" style=\"align:right middle;padding:0 10 0 0;\" text=\"expr:PRSEC_ODR + &quot;차&quot;\" maskchar=\" \"/><Cell col=\"4\" displaytype=\"date\" text=\"bind:PRSEC_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right middle;selectbackground:#ffffffff;\" text=\"bind:CNTRCT_AMOUNT\" suppress=\"1\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:PRSEC_AMOUNT\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:DECSN_AMOUNT\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:CNTRCT_AMOUNT - dataset.getSum('DECSN_AMOUNT', 0, currow+1)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "500", "33", "10", null, null, "0", this);
            obj.set_taborder("44");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cntrctDecsnYear", "absolute", "674", "454", "94", "27", null, null, this);
            obj.set_taborder("45");
            obj.set_text("결의년도");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pxcondSe", "absolute", "510", "67", "94", "27", null, null, this);
            obj.set_taborder("47");
            obj.set_text("기성구분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_expndtrAcnut", "absolute", "510", "119", "94", "27", null, null, this);
            obj.set_taborder("48");
            obj.set_text("지출계좌");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sumry", "absolute", "510", "93", "94", "27", null, null, this);
            obj.set_taborder("51");
            obj.set_text("적요(결의명)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_decsnNo", "absolute", "830", "454", "94", "27", null, null, this);
            obj.set_taborder("52");
            obj.set_text("결의번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cntrctDecsnYear", "absolute", "770", "457", "58", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_decsnNo", "absolute", "926", "457", "102", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pxcondOdr", "absolute", "696", "70", "66", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_sumry", "absolute", "606", "96", "422", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("200");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_expndtrAcnutNo", "absolute", "696", "122", "152", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_cssclass("edt_WF_Essential");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_expndtrFnncInsttCode", "absolute", "606", "122", "88", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_innerdataset("@ds_fnncInsttList");
            obj.set_codecolumn("FNNC_INSTT_CODE");
            obj.set_datacolumn("FNNC_INSTT_CODE_NM");
            obj.set_readonly("true");
            obj.set_tabstop("false");

            obj = new Button("btn_expndtrPopup", "absolute", "827", "122", "21", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_pxcondSe", "absolute", "606", "70", "88", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_innerdataset("@ds_ctr039");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_readonly("true");
            obj.set_index("-1");

            obj = new Static("sta_decsnInfoDetail", "absolute", "510", "43", "164", "19", null, null, this);
            obj.set_taborder("61");
            obj.set_text("기초정보");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delDecsn", "absolute", null, "430", "100", "19", "28", null, this);
            obj.set_taborder("17");
            obj.set_text("지출결의서 삭제");
            obj.set_cssclass("btn_WF_Process");
            obj.set_visible("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_decsnInfoDetail00", "absolute", "510", "430", "132", "19", null, null, this);
            obj.set_taborder("63");
            obj.set_text("회계결의 내역");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "510", "449", null, "5", "28", null, this);
            obj.set_taborder("64");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_top00", "absolute", "510", "420", null, "10", "28", null, this);
            obj.set_taborder("65");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cntrctDecsnYear00", "absolute", "510", "454", "94", "27", null, null, this);
            obj.set_taborder("69");
            obj.set_text("등록여부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ExpDecsnAt", "absolute", "606", "457", "66", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pxcondSe00", "absolute", "764", "67", "26", "27", null, null, this);
            obj.set_taborder("70");
            obj.set_text("차");
            obj.style.set_padding("1 0 0 3");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_AD", "absolute", null, "43", "104", "19", "95", null, this);
            obj.set_taborder("2");
            obj.set_text("결의정보 추가");
            obj.set_cssclass("btn_WF_Gridadd");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Cancel", "absolute", null, "43", "64", "19", "28", null, this);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Gridcnl");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_", "absolute", "510", "491", null, null, "28", "0", this);
            obj.set_taborder("91");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.style.set_buttonpadding("6 20 6 20");
            obj.style.set_showextrabutton("false");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.tab_);
            obj.set_text("첨부파일(대가지급)");
            this.tab_.addChild(obj.name, obj);
            obj = new Grid("grd_cmmnAtchmnfl", "absolute", "0", "34", null, null, "0", "0", this.tab_.tabpage1);
            obj.set_taborder("0");
            obj.set_binddataset("ds_fileList");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"65\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"20\"/><Column size=\"20\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"파일형식\"/><Cell col=\"2\" celltype=\"head\" text=\"파일명\"/><Cell col=\"3\" text=\"확장자\"/><Cell col=\"4\" text=\"사이즈\"/><Cell col=\"5\" colspan=\"2\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"image\" text=\"bind:FILE_IMAGE\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"2\" displaytype=\"normal\" style=\"align:left middle;\" text=\"bind:ORGINL_FILE_NM\"/><Cell col=\"3\" text=\"bind:FILE_EXTSN\"/><Cell col=\"4\" text=\"bind:FILE_MG\"/><Cell col=\"5\" style=\"selectbackground:transparent;\" text=\"expr:currow &gt; 0  ? '▲' :  ''\" suppressalign=\"middle\"/><Cell col=\"6\" style=\"align:center;selectbackground:transparent;\" text=\"expr:dataset.rowcount == (currow+1) ? '' : '▼'\" suppressalign=\"middle\"/></Band></Format></Formats>");
            this.tab_.tabpage1.addChild(obj.name, obj);
            obj = new Button("btn_downFiles", "absolute", null, "10", "85", "19", "0", null, this.tab_.tabpage1);
            obj.set_taborder("1");
            obj.set_text("선택다운로드");
            obj.set_cssclass("btn_WF_Process");
            obj.set_visible("true");
            this.tab_.tabpage1.addChild(obj.name, obj);
            obj = new Static("sta_gnfdList03", "absolute", "0", "10", "226", "19", null, null, this.tab_.tabpage1);
            obj.set_taborder("2");
            obj.set_text("대가지급 시 필요한 추가서류 목록");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_align("left middle");
            this.tab_.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "0", null, "10", "0", null, this.tab_.tabpage1);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.tab_.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "29", null, "5", "0", null, this.tab_.tabpage1);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.tab_.tabpage1.addChild(obj.name, obj);
            obj = new Button("btn_delFiles", "absolute", null, "10", "67", "19", "160", null, this.tab_.tabpage1);
            obj.set_taborder("5");
            obj.set_text("선택삭제");
            obj.set_cssclass("btn_WF_Process");
            this.tab_.tabpage1.addChild(obj.name, obj);
            obj = new Button("btn_uploadFiles", "absolute", null, "10", "68", "19", "88", null, this.tab_.tabpage1);
            obj.set_taborder("6");
            obj.set_text("파일업로드");
            obj.set_cssclass("btn_WF_Process");
            this.tab_.tabpage1.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.tab_);
            obj.set_text("첨부파일(검사검수)");
            this.tab_.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "0", null, "10", "0", null, this.tab_.tabpage2);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.tab_.tabpage2.addChild(obj.name, obj);
            obj = new Static("sta_gnfdList03", "absolute", "0", "10", "226", "19", null, null, this.tab_.tabpage2);
            obj.set_taborder("1");
            obj.set_text("검사검수시 등록된 첨부파일(참고)");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_align("left middle");
            this.tab_.tabpage2.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "29", null, "5", "0", null, this.tab_.tabpage2);
            obj.set_taborder("2");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.tab_.tabpage2.addChild(obj.name, obj);
            obj = new Grid("grd_cmmnAtchmnfl", "absolute", "0", "34", null, null, "0", "0", this.tab_.tabpage2);
            obj.set_taborder("3");
            obj.set_binddataset("ds_fileList2");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"65\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"파일형식\"/><Cell col=\"2\" celltype=\"head\" text=\"파일명\"/><Cell col=\"3\" text=\"확장자\"/><Cell col=\"4\" text=\"사이즈\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"image\" text=\"bind:FILE_IMAGE\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"2\" displaytype=\"normal\" style=\"align:left middle;\" text=\"bind:ORGINL_FILE_NM\"/><Cell col=\"3\" text=\"bind:FILE_EXTSN\"/><Cell col=\"4\" text=\"bind:FILE_MG\"/></Band></Format></Formats>");
            this.tab_.tabpage2.addChild(obj.name, obj);
            obj = new Button("btn_downFiles2", "absolute", null, "10", "85", "19", "0", null, this.tab_.tabpage2);
            obj.set_taborder("4");
            obj.set_text("선택다운로드");
            obj.set_cssclass("btn_WF_Process");
            this.tab_.tabpage2.addChild(obj.name, obj);
            obj = new Tabpage("tabpage3", this.tab_);
            obj.set_text("계약내역");
            this.tab_.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "0", "140", "513", "27", null, null, this.tab_.tabpage3);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Labelbg");
            this.tab_.tabpage3.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "0", "114", "513", "27", null, null, this.tab_.tabpage3);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Labelbg");
            this.tab_.tabpage3.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "88", "513", "27", null, null, this.tab_.tabpage3);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Labelbg");
            this.tab_.tabpage3.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "0", "10", "513", "27", null, null, this.tab_.tabpage3);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Labelbg");
            this.tab_.tabpage3.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "0", "36", "513", "27", null, null, this.tab_.tabpage3);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Labelbg");
            this.tab_.tabpage3.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "0", "62", "513", "27", null, null, this.tab_.tabpage3);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Labelbg");
            this.tab_.tabpage3.addChild(obj.name, obj);
            obj = new Static("sta_pxcondSe01", "absolute", "0", "10", "94", "27", null, null, this.tab_.tabpage3);
            obj.set_taborder("9");
            obj.set_text("계약명");
            obj.set_cssclass("sta_WF_Label");
            this.tab_.tabpage3.addChild(obj.name, obj);
            obj = new Static("sta_pxcondSe02", "absolute", "0", "36", "94", "27", null, null, this.tab_.tabpage3);
            obj.set_taborder("10");
            obj.set_text("계약구분");
            obj.set_cssclass("sta_WF_Label");
            this.tab_.tabpage3.addChild(obj.name, obj);
            obj = new Static("sta_pxcondSe03", "absolute", "0", "62", "94", "27", null, null, this.tab_.tabpage3);
            obj.set_taborder("11");
            obj.set_text("계약방법");
            obj.set_cssclass("sta_WF_Label");
            this.tab_.tabpage3.addChild(obj.name, obj);
            obj = new Static("sta_pxcondSe04", "absolute", "189", "36", "94", "27", null, null, this.tab_.tabpage3);
            obj.set_taborder("12");
            obj.set_text("상세구분");
            obj.set_cssclass("sta_WF_Label");
            this.tab_.tabpage3.addChild(obj.name, obj);
            obj = new Combo("cmb_CNTRCT_MTH_SE", "absolute", "96", "65", "104", "21", null, null, this.tab_.tabpage3);
            this.tab_.tabpage3.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_innerdataset("@ds_ctr049");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_cssclass("cmb_WF_Readonly");
            obj = new Combo("cmb_CNTRCT_SE", "absolute", "96", "39", "91", "21", null, null, this.tab_.tabpage3);
            this.tab_.tabpage3.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_innerdataset("@ds_ctr022");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_cssclass("cmb_WF_Readonly");
            obj = new Combo("cmb_DETAIL_SE", "absolute", "285", "39", "225", "21", null, null, this.tab_.tabpage3);
            this.tab_.tabpage3.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_innerdataset("@ds_ctr023");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_cssclass("cmb_WF_Readonly");
            obj = new Static("sta_pxcondSe05", "absolute", "0", "88", "126", "27", null, null, this.tab_.tabpage3);
            obj.set_taborder("16");
            obj.set_text("계약성질/도급방법");
            obj.set_cssclass("sta_WF_Label");
            this.tab_.tabpage3.addChild(obj.name, obj);
            obj = new Static("sta_pxcondSe06", "absolute", "0", "114", "94", "27", null, null, this.tab_.tabpage3);
            obj.set_taborder("17");
            obj.set_text("계약일자");
            obj.set_cssclass("sta_WF_Label");
            this.tab_.tabpage3.addChild(obj.name, obj);
            obj = new Static("sta_pxcondSe07", "absolute", "0", "140", "94", "27", null, null, this.tab_.tabpage3);
            obj.set_taborder("18");
            obj.set_text("최초계약금액");
            obj.set_cssclass("sta_WF_Label");
            this.tab_.tabpage3.addChild(obj.name, obj);
            obj = new Combo("cmb_CNTRCT_DISPOS_SE", "absolute", "128", "91", "120", "21", null, null, this.tab_.tabpage3);
            this.tab_.tabpage3.addChild(obj.name, obj);
            obj.set_taborder("19");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_innerdataset("@ds_ctr042");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_cssclass("cmb_WF_Readonly");
            obj = new Combo("cmb_OUTSRC_MTH_SE", "absolute", "250", "91", "96", "21", null, null, this.tab_.tabpage3);
            this.tab_.tabpage3.addChild(obj.name, obj);
            obj.set_taborder("20");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_innerdataset("@ds_ctr040");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_cssclass("cmb_WF_Readonly");
            obj = new Static("sta_pxcondSe08", "absolute", "348", "88", "94", "27", null, null, this.tab_.tabpage3);
            obj.set_taborder("21");
            obj.set_text("간이계약여부");
            obj.set_cssclass("sta_WF_Label");
            this.tab_.tabpage3.addChild(obj.name, obj);
            obj = new Edit("edt_INFRML_CNTRCT_AT", "absolute", "444", "91", "66", "21", null, null, this.tab_.tabpage3);
            obj.set_taborder("22");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            this.tab_.tabpage3.addChild(obj.name, obj);
            obj = new Static("sta_pxcondSe09", "absolute", "203", "114", "85", "27", null, null, this.tab_.tabpage3);
            obj.set_taborder("23");
            obj.set_text("계약기간");
            obj.set_cssclass("sta_WF_Label");
            this.tab_.tabpage3.addChild(obj.name, obj);
            obj = new Calendar("cal_CNTRCT_DE", "absolute", "96", "117", "105", "21", null, null, this.tab_.tabpage3);
            this.tab_.tabpage3.addChild(obj.name, obj);
            obj.set_taborder("24");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Readonly");
            obj.style.set_align("center middle");
            obj = new Calendar("CAL_STRWRK_DE", "absolute", "290", "117", "105", "21", null, null, this.tab_.tabpage3);
            this.tab_.tabpage3.addChild(obj.name, obj);
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Readonly");
            obj.style.set_align("center middle");
            obj = new Calendar("cal_COMPET_DE", "absolute", "405", "117", "105", "21", null, null, this.tab_.tabpage3);
            this.tab_.tabpage3.addChild(obj.name, obj);
            obj.set_taborder("26");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Readonly");
            obj.style.set_align("center middle");
            obj = new Static("sta_pxcondSe10", "absolute", "397", "117", "6", "21", null, null, this.tab_.tabpage3);
            obj.set_taborder("27");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.tab_.tabpage3.addChild(obj.name, obj);
            obj = new Static("sta_pxcondSe11", "absolute", "238", "140", "94", "27", null, null, this.tab_.tabpage3);
            obj.set_taborder("28");
            obj.set_text("감독부서");
            obj.set_cssclass("sta_WF_Label");
            this.tab_.tabpage3.addChild(obj.name, obj);
            obj = new MaskEdit("msk_CNTRCT_AMOUNT", "absolute", "96", "143", "140", "21", null, null, this.tab_.tabpage3);
            obj.set_taborder("29");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_mask("###,###,###,###,###");
            obj.set_limitbymask("both");
            obj.set_cssclass("msk_WF_Readonly");
            this.tab_.tabpage3.addChild(obj.name, obj);
            obj = new Edit("edt_CNTRCT_NM", "absolute", "96", "12", "414", "21", null, null, this.tab_.tabpage3);
            obj.set_taborder("30");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("left middle");
            this.tab_.tabpage3.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "0", "166", "513", "27", null, null, this.tab_.tabpage3);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_Labelbg");
            this.tab_.tabpage3.addChild(obj.name, obj);
            obj = new Static("sta_pxcondSe12", "absolute", "0", "166", "94", "27", null, null, this.tab_.tabpage3);
            obj.set_taborder("32");
            obj.set_text("감독관목록");
            obj.set_cssclass("sta_WF_Label");
            this.tab_.tabpage3.addChild(obj.name, obj);
            obj = new Edit("edt_MANGR_EMPNM", "absolute", "96", "169", "414", "21", null, null, this.tab_.tabpage3);
            obj.set_taborder("33");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("left middle");
            this.tab_.tabpage3.addChild(obj.name, obj);
            obj = new Edit("edt_MNG_DEPT_CODE", "absolute", "334", "143", "66", "21", null, null, this.tab_.tabpage3);
            obj.set_taborder("34");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            this.tab_.tabpage3.addChild(obj.name, obj);
            obj = new Edit("edt_MNG_DEPT_NM", "absolute", "402", "143", "108", "21", null, null, this.tab_.tabpage3);
            obj.set_taborder("35");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("left middle");
            this.tab_.tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_top01", "absolute", "510", "481", null, "10", "28", null, this);
            obj.set_taborder("92");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "510", "175", null, "10", "28", null, this);
            obj.set_taborder("93");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_decsnInfoDetail01", "absolute", "510", "156", "92", "19", null, null, this);
            obj.set_taborder("94");
            obj.set_text("업체별 내역");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_top02", "absolute", "510", "146", null, "10", "28", null, this);
            obj.set_taborder("95");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cntrctDecsnDetail", "absolute", "510", "180", null, "240", "28", null, this);
            obj.set_taborder("96");
            obj.set_binddataset("ds_cntrctDecsnDetail");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"70\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"결의대상\"/><Cell col=\"1\" text=\"업체구분\"/><Cell col=\"2\" text=\"업체명\"/><Cell col=\"3\" text=\"결의금액\"/><Cell col=\"4\" text=\"공급가액\"/><Cell col=\"5\" text=\"부가세\"/><Cell col=\"6\" text=\"은행\"/><Cell col=\"7\" text=\"계좌번호\"/><Cell col=\"8\" text=\"예금주\"/><Cell col=\"9\" text=\"세금계산서구분\"/><Cell col=\"10\" text=\"국세청 승인번호\"/><Cell col=\"11\" text=\"청구/영수\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:DECSN_CHK\"/><Cell col=\"1\" text=\"bind:ENTRPS_SE_NM\"/><Cell col=\"2\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:BCNC_NM2\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"expr:DECSN_CHK == '1' ? 'masknumber' : 'none'\" style=\"align:right middle;\" text=\"bind:DECSN_AMOUNT\" mask=\"###,###,###,###,###\" editdisplay=\"expr:DECSN_CHK == '1' ? 'display' : 'edit'\" editlimitbymask=\"both\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"expr:DECSN_CHK == '1' ? 'masknumber' : 'none'\" style=\"align:right middle;\" text=\"bind:SUPLY_AMOUNT\" mask=\"###,###,###,###,###\" editdisplay=\"expr:DECSN_CHK == '1' ? 'display' : 'edit'\" editlimitbymask=\"both\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"expr:DECSN_CHK == '1' ? 'masknumber' : 'none'\" style=\"align:right middle;\" text=\"bind:VAT\" mask=\"###,###,###,###,###\" editdisplay=\"expr:DECSN_CHK == '1' ? 'display' : 'edit'\" editlimitbymask=\"both\"/><Cell col=\"6\" displaytype=\"combo\" text=\"bind:PYMNT_FNNC_INSTT_CODE\" combodataset=\"ds_fnncInsttList\" combocodecol=\"FNNC_INSTT_CODE\" combodatacol=\"FNNC_INSTT_CODE_NM\"/><Cell col=\"7\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:PYMNT_ACNUTNO\"/><Cell col=\"8\" style=\"align:left middle;\" text=\"bind:PYMNT_DPSTR_NM\"/><Cell col=\"9\" displaytype=\"combo\" text=\"bind:BILL_KND\" expandshow=\"expr:DECSN_CHK == '1' ? 'show' : 'hide'\" combodataset=\"ds_acc030\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"10\" text=\"bind:ISSU_SEQNO\"/><Cell col=\"11\" displaytype=\"combo\" text=\"bind:POPS_CODE\" combodataset=\"ds_acc038\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"합 계\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;DECSN_AMOUNT&quot;)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;SUPLY_AMOUNT&quot;)\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;VAT&quot;)\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_decsnInfoDetail02", "absolute", "602", "156", null, "19", "29", null, this);
            obj.set_taborder("99");
            obj.set_text("(결의하고자 하는 업체를 '대상'으로 체크해 주시기 바랍니다)");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_decsnInfoDetail03", "absolute", "602", "156", null, "19", "125", null, this);
            obj.set_taborder("101");
            obj.set_text("(지출결의가 등록된 대가지급 건은 수정하실 수 없습니다)");
            obj.style.set_color("red");
            obj.style.set_align("left middle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pxcondSe01", "absolute", "788", "67", "94", "27", null, null, this);
            obj.set_taborder("102");
            obj.set_text("대지급여부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_PXPAY_AT", "absolute", "887", "70", "134", "21", null, null, this);
            obj.set_taborder("103");
            obj.set_text("조달청 대지급 대상");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pxcondSe02", "absolute", "850", "119", "56", "27", null, null, this);
            obj.set_taborder("104");
            obj.set_text("결의서");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_anactKnd", "absolute", "908", "122", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cmb_anactKnd_innerdataset = new Dataset("cmb_anactKnd_innerdataset", this.cmb_anactKnd);
            cmb_anactKnd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">지출결의서</Col></Row><Row><Col id=\"codecolumn\">06</Col><Col id=\"datacolumn\">공사와집행결의서</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">구입과지출결의서</Col></Row></Rows>");
            obj.set_innerdataset(cmb_anactKnd_innerdataset);
            obj.set_taborder("105");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Static("sta_blind", "absolute", "265", "406", "92", "54", null, null, this);
            obj.set_taborder("100");
            obj.set_text("상단의 검색조건에서 계약번호를 선택하면\r\n계약별로 <결재가 완료된> 검사검수 내역이 조회됩니다.\r\n(노무비의 경우 전자결재 완료유무를 따지지 않습니다)\r\n\r\n'결의정보 추가' 버튼을 클릭 후, 내용을 입력하여 주시기 바랍니다");
            obj.style.set_background("#ffffffdc");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 12 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("btn_decsn", "absolute", null, "430", "141", "19", "130", null, this);
            obj.set_taborder("107");
            obj.set_text("지출결의서 등록/수정");
            obj.set_cssclass("btn_WF_Process");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 33, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WFSA_Box");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 521, 298, this.tab_.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_text("첨부파일(대가지급)");

            	}
            );
            this.tab_.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tab_.tabpage2,
            	//-- Layout function
            	function(p) {
            		p.set_text("첨부파일(검사검수)");

            	}
            );
            this.tab_.tabpage2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 521, 218, this.tab_.tabpage3,
            	//-- Layout function
            	function(p) {
            		p.set_text("계약내역");

            	}
            );
            this.tab_.tabpage3.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1059, 735, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("CTR030600");
            		p.set_titletext("계약대가지급");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item43","div_search.edt_CNTRCT_NM","value","ds_cond","CNTRCT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_search.msk_CNTRCT_NO","value","ds_cond","CNTRCT_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","div_search.spn_CNTRCT_YEAR","value","ds_cond","CNTRCT_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edt_cntrctDecsnYear","value","ds_cntrctDecsnInfo","EXP_DECSN_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_decsnNo","value","ds_cntrctDecsnInfo","EXP_DECSN_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","cmb_pxcondSe","value","ds_cntrctDecsnInfo","PXCOND_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_pxcondOdr","value","ds_cntrctDecsnInfo","PXCOND_ODR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","cmb_expndtrFnncInsttCode","value","ds_cntrctDecsnInfo","EXPNDTR_FNNC_INSTT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edt_expndtrAcnutNo","value","ds_cntrctDecsnInfo","EXPNDTR_ACNUTNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","edt_sumry","value","ds_cntrctDecsnInfo","SUMRY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edt_ExpDecsnAt","value","ds_cntrctDecsnInfo","EXP_DECSN_STR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","tab_.tabpage3.cmb_CNTRCT_MTH_SE","value","ds_cntrct","CNTRCT_MTH_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","tab_.tabpage3.cmb_CNTRCT_SE","value","ds_cntrct","CNTRCT_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","tab_.tabpage3.cmb_DETAIL_SE","value","ds_cntrct","DETAIL_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","tab_.tabpage3.cmb_CNTRCT_DISPOS_SE","value","ds_cntrct","CNTRCT_DISPOS_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","tab_.tabpage3.cmb_OUTSRC_MTH_SE","value","ds_cntrct","OUTSRC_MTH_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","tab_.tabpage3.edt_INFRML_CNTRCT_AT","value","ds_cntrct","INFRML_CNTRCT_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","tab_.tabpage3.cal_CNTRCT_DE","value","ds_cntrct","CNTRCT_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","tab_.tabpage3.CAL_STRWRK_DE","value","ds_cntrct","STRWRK_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","tab_.tabpage3.cal_COMPET_DE","value","ds_cntrct","COMPET_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","tab_.tabpage3.msk_CNTRCT_AMOUNT","value","ds_cntrct","CNTRCT_AMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","tab_.tabpage3.edt_CNTRCT_NM","value","ds_cntrct","CNTRCT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","tab_.tabpage3.edt_MANGR_EMPNM","value","ds_cntrct","MANGR_EMPNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","tab_.tabpage3.edt_MNG_DEPT_CODE","value","ds_cntrct","MNG_DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","tab_.tabpage3.edt_MNG_DEPT_NM","value","ds_cntrct","MNG_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","tab_.tabpage1.btn_delFiles","enable","ds_edcAcmsltList","ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","tab_.tabpage1.btn_uploadFiles","enable","ds_edcAcmsltList","ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","grd_cntrctDecsnDetail","readonly","ds_cntrctDecsnInfo","EXP_DECSN_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","btn_expndtrPopup","visible","ds_cntrctDecsnInfo","ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","edt_sumry","enable","ds_cntrctDecsnInfo","ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","edt_expndtrAcnutNo","enable","ds_cntrctDecsnInfo","ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","sta_decsnInfoDetail02","visible","ds_cntrctDecsnInfo","ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","sta_decsnInfoDetail03","visible","ds_cntrctDecsnInfo","EXP_DECSN_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","chk_PXPAY_AT","value","ds_cntrctDecsnInfo","PXPAY_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","chk_PXPAY_AT","enable","ds_cntrctDecsnInfo","ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","cmb_anactKnd","value","ds_cntrctDecsnInfo","ANACT_KND");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","cmb_anactKnd","enable","ds_cntrctDecsnInfo","ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("CTR030600.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("CTR030600.xfdl", "mis_lib::misUtil.xjs");
        this.addIncludeScript("CTR030600.xfdl", "lib::comUpDownUtils.xjs");
        this.registerScript("CTR030600.xfdl", function() {
        /**********************************************************************
        * 화면ID   : CTR030600.xfdl
        * 화면명   : 계약대가지급
        * 화면설명 : 계약대가지급을 관리한다
        * 작성일   : 2017.08.04
        * 작성자   : 김형태
        * 수정이력 : 
        ***********************************************************************
        *     수정일     수정자   내용
        ***********************************************************************
        *
        ***********************************************************************
        */

        

        /**********************************************************************
        * Script Include 
        ***********************************************************************/
        // 시스템 공통 라이브러리 Include
        //include "lib::comInclude.xjs";
        //include "mis_lib::misUtil.xjs";
        //include "lib::comUpDownUtils.xjs";

        /**********************************************************************
        * 화면 변수 선언부
        ***********************************************************************/
        this.saveRow = -1;
        this.fSaveRow = -1;
        this.infrmlCntrctAt = 0;	// 간이계약여부
        this.File_UpDownManager = null;

        /**********************************************************************
        * onInit / onLoad 영역
        ***********************************************************************/

        this.CTR030600_oninit = function(obj,e)
        {
        	// ..
        }

        this.CTR030600_onload = function(obj,e)
        {
        	// form 초기화
        	this.fn_init_form();

        	// dataset 초기화
        	this.fn_init_dataset();
        	
        	this.sta_blind.set_top(67);
        	this.sta_blind.set_bottom(0);
        	this.sta_blind.set_left(510);
        	this.sta_blind.set_right(28);
        	this.sta_blind.set_visible(true);
        	
        	// 초기 검색조건
        	this.ds_cond.clearData();
        	var nRow = this.ds_cond.addRow();
         	this.ds_cond.setColumn(nRow, "CNTRCT_YEAR", this.comUtils.getClientDate("YYYY"));	// 당해년도
        	// 공통코드
        	var comboParams = [
        	    ["ds_ctr039", "CTR039", "Y", "D", "B"]	// ds_ctr039 : 검사구분(기성구분)
        	   ,["ds_ctr047", "CTR047", "Y", "D", "B"]	// ds_ctr047 : 계산서종류
        	   ,["ds_ctr048", "CTR048", "Y", "D", "B"]	// ds_ctr048 : 매칭구분
        	   ,["ds_ctr022", "CTR022", "Y", "D", "B"]	// ds_ctr022 : 계약구분
        	   ,["ds_ctr023", "CTR023", "Y", "D", "B"]	// ds_ctr023 : 계약종류
        	   ,["ds_ctr049", "CTR049", "Y", "D", "B"]	// ds_ctr049 : 계약방법
        	   ,["ds_ctr040", "CTR040", "Y", "D", "B"]	// ds_ctr040 : 도급방법
        	   ,["ds_ctr042", "CTR042", "Y", "D", "B"]	// ds_ctr042 : 계약성질
        	   ,["ds_acc030", "ACC030", "Y", "A", "B"]	// 계산서종류
        	   ,["ds_acc038", "ACC038", "Y", "A", "B"]	// 청구/영구
        	];
        	var callback = function (svcId, errorCode, errorMsg) {
        		// 금융기관목록 조회
        		this.ds_fnncInsttList.clearData();
        		this.fn_transaction("selectFnncInsttList");
        	};
        	this.gfn_comboLoad (comboParams, callback);
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
        	// 파일 메니저 설정
        	var fileConfig = {
        		useMultiUpload : true,
        		onChange: this.fn_onFileSelected,	// 파일 선택 이벤트 핸들러
        		onSuccess : this.fn_onFileSuccess	// 전송 성공 이벤트 핸들러
        		//responseGrid : this.div_multiFile.grd_fileList,
        		//responseArea : this.div_multiFile.sta_helpMessage
        	};
        	this.File_UpDownManager = new this.fileUpDownManager(this, "MIS", "CTR");
        	this.File_UpDownManager.init(fileConfig);
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
         * 함수명  	: fn_search
         * 설명 		: 조회 이벤트 처리(검사입회목록)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_search();
         */
        this.fn_search = function()
        {	
        	// clear Datasets
        	this.ds_cntrctDecsnDetail.clearData();
        	this.ds_cntrctDecsnInfo.clearData();
        	this.ds_fileList2.clearData();
        	this.ds_fileList.clearData();
        	this.ds_cntrct.clearData();
        	
        	this.ds_prsecWtnessList.clearData();
        	
        	// transaction
        	this.fn_transaction("selectPrsecWtnessList");
        }

        
        /*
         * 함수명  	: fn_searchSub
         * 설명 		: 조회 이벤트 처리(계약결의정보)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_searchSub();
         */
        this.fn_searchSub = function()
        {
        	// clear Datasets
        	this.ds_cntrctDecsnDetail.clearData();
        	this.ds_cntrctDecsnInfo.clearData();
        	this.ds_fileList2.clearData();
        	this.ds_fileList.clearData();
        	this.ds_cntrct.clearData();
        	
        	// transaction
        	this.fn_transaction("selectCntrctDecsnInfo");
        }

        
        /*
         * 함수명  	: fn_save
         * 설명 		: 저장 이벤트 처리(계약결의정보)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_save();
         */
        this.fn_save = function()
        {
        	// 데이터셋 수정 여부체크
        	if (!this.comUtils.isDatasetUpdated(this.ds_cntrctDecsnInfo) && !this.comUtils.isDatasetUpdated(this.ds_cntrctDecsnDetail)) {
        		this.gfn_message("comm.데이터.변경.없음");
        		return false;
        	}
        	
        	// validation 체크(계약결의정보)
        	if(!this.gfn_checkValidation_NoUpdChk(this.ds_cntrctDecsnInfo, this.ds_validation)) {
        		return;
        	}
        	
        	// validation 체크(계약결의상세)
        	if(!this.gfn_checkValidation_NoUpdChk(this.ds_cntrctDecsnDetail, this.ds_validation)) {
        		return;
        	}
        	
        	if(this.gfn_message("confirm.저장.여부")) {
        		this.saveRow = this.ds_prsecWtnessList.rowposition;
        		this.fn_transaction("save");
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
        		case "selectFnncInsttList":			// 금융기관목록 조회
        			var sController   	= "/hsco/mis/ctr/CTR030600/selectFnncInsttList.do";
        			var sInDatasets   	= "";
        			var sOutDatasets  	= "ds_fnncInsttList=output1";
        			break;
        		case "selectPrsecWtnessList":		// 검사입회목록 조회
        			var sController   	= "/hsco/mis/ctr/CTR030600/selectPrsecWtnessList.do";
        			var sInDatasets   	= "input1=ds_cond";
        			var sOutDatasets  	= "ds_prsecWtnessList=output1";
        			break;
        		case "selectCntrctDecsnInfo":		// 계약결의정보 조회
        			var sController   	= "/hsco/mis/ctr/CTR030600/selectCntrctDecsnInfo.do";
        			var sInDatasets   	= "input1=ds_condSub";
        			var sOutDatasets  	= "ds_cntrctDecsnInfo=output1 ds_cntrct=output3 ds_cntrctDecsnDetail=output4 ds_fileList=output5 ds_fileList2=output6";
        			break;
        		case "save":						// 저장
        			var sController   	= "/hsco/mis/ctr/CTR030600/save.do";
        			var sInDatasets   	= "input1=ds_cntrctDecsnInfo:U input2=ds_cntrctDecsnDetail:U";
        			var sOutDatasets  	= "";
        			break;
        		case "updateAtchmnFileOrdr":		// 첨부파일 순서변경
        			var sController   	= "/hsco/cmm/file/updateAtchmnFileOrdr.do";
        			var sInDatasets   	= "input1=ds_fileList:U input2=ds_cond_file";
        			var sOutDatasets  	= "ds_fileList=output1";
        			break;
        		case "expDsnD":					// 결의서 삭제
        			var sController   	= "/hsco/mis/ctr/CTR030600/expDsnD.do";
        			var sInDatasets   	= "input2=ds_cond_decsn_del";
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
        	if(nErrorCode != '0') {
        		this.gfn_callback_message(strSvcId, nErrorCode, strErrorMsg);
        	}
        	
        	if (nErrorCode == '0'){
        		switch (strSvcId) {
        			case "selectFnncInsttList":		// 금융기관목록 조회
        				this.fn_search();
        				break;
        			case "selectPrsecWtnessList":	// 검사입회목록 조회
        				if(this.saveRow > -1){
        					this.ds_prsecWtnessList.set_rowposition(this.saveRow);
        					this.saveRow = -1;
        				}
        				break;
        			case "selectCntrctDecsnInfo":	// 계약결의정보 조회
        				this.ds_fileList.filter("USE_AT == '1'");
        				this.ds_fileList2.filter("USE_AT == '1'");
        				break;
        			case "save":					// 저장
        				this.gfn_message("success.처리.성공");
        				this.fn_search();
        				break;
        			case "updateAtchmnFileOrdr":	// 첨부파일 순서변경
        				if(this.fSaveRow > -1) {	// 대가지급
        					this.ds_fileList.set_rowposition(this.fSaveRow);
        				}
        				break;
        			case "expDsnD":					// 결의서 삭제
        				this.gfn_message("success.처리.성공");
        				this.fn_transaction("selectCntrctDecsnInfo");
        				break;
        		}
        	}
        }

        
        /*
         * 함수명  	: fn_popupCallBack
         * 설명 		: Popup Callback 처리
         * params  		: sPopupId    : 팝업 ID
         *                sReturn  : 팝업 처리 결과(dataset.saveXML())
         * return Type 	: None
         * 사용법		: 
         */
        this.fn_popupCallBack = function(sPopupId,sReturn)
        {
        	// 계약번호 선택(검색조건)
        	if(sPopupId == "btn_cntrctPopup") {
        		var dsTemp = new Dataset();
        		var loadCnt = dsTemp.loadXML(sReturn);
        		if(loadCnt) {
        			var cntrctNo = dsTemp.getColumn(0, "CNTRCT_NO");
        			var cntrctNm = dsTemp.getColumn(0, "CNTRCT_NM");
        			var cntrctYr = cntrctNo.substr(0,4);
        			
        			this.ds_cond.setColumn(0, "CNTRCT_YEAR", cntrctYr);	// 계약년도
        			this.ds_cond.setColumn(0, "CNTRCT_NO",   cntrctNo);	// 계약번호
        			this.ds_cond.setColumn(0, "CNTRCT_NM",   cntrctNm);	// 계약명
        			this.fn_search();
        		}
        	}
        	
        	// 세금계산서
        	if(sPopupId == "CTR030600_P02") {
        		var dsTemp = new Dataset();
        		var loadCnt = dsTemp.loadXML(sReturn);
        		if(loadCnt) {
        			var issuSeqno = dsTemp.getColumn(0, "ISSU_SEQNO");	// 세금계산서 일련번호
        			var totlAmt   = dsTemp.getColumn(0, "TOTL_AMT"  );
        			var chrgAmt   = dsTemp.getColumn(0, "CHRG_AMT"  );
        			var taxAmt    = dsTemp.getColumn(0, "TAX_AMT"   );
        			
        			var billType  = dsTemp.getColumn(0, "BILL_TYPE" );
        			var billKnd   = dsTemp.getColumn(0, "BILL_KND"  );
        			var taxType   = dsTemp.getColumn(0, "TAX_TYPE"  );
        			var popsCode  = dsTemp.getColumn(0, "POPS_CODE" );
        			var issuId    = dsTemp.getColumn(0, "ISSU_ID"   );
        			
        			var cRow = this.ds_cntrctDecsnDetail.rowposition
        			this.ds_cntrctDecsnDetail.setColumn(cRow, "ISSU_SEQNO",   issuSeqno);	// 세금계산서 일련번호
        			this.ds_cntrctDecsnDetail.setColumn(cRow, "DECSN_AMOUNT", totlAmt);
        			this.ds_cntrctDecsnDetail.setColumn(cRow, "SUPLY_AMOUNT", chrgAmt);
        			this.ds_cntrctDecsnDetail.setColumn(cRow, "VAT",          taxAmt);
        			
        			this.ds_cntrctDecsnDetail.setColumn(cRow, "BILL_TYPE",    billType);
        			this.ds_cntrctDecsnDetail.setColumn(cRow, "BILL_KND",     billKnd);
        			this.ds_cntrctDecsnDetail.setColumn(cRow, "TAX_TYPE",     taxType);
        			this.ds_cntrctDecsnDetail.setColumn(cRow, "POPS_CODE",    popsCode);
        			this.ds_cntrctDecsnDetail.setColumn(cRow, "ISSU_ID",      issuId);
        		}
        	}
        	
        	// 원인행위번호
        	if(sPopupId == "btn_actPopup") {
        		var dsTemp = new Dataset();
        		var loadCnt = dsTemp.loadXML(sReturn);
        		if(loadCnt) {
        			var causeActionNo = dsTemp.getColumn(0, "CAUSE_ACTION_NO");	// 원인행위번호
        			
        			this.ds_cntrctDecsnInfo.setColumn(0, "CAUSE_ACTION_NO", causeActionNo);	// 원인행위번호
        		}
        	}
        	
        	// 지출계좌
        	if(sPopupId == "btn_expndtrPopup") {
        		var dsTemp = new Dataset();
        		var loadCnt = dsTemp.loadXML(sReturn);
        		if(loadCnt) {
        			var acnutNo  = dsTemp.getColumn(0, "ACNUTNO");		// 계좌번호
        			var bankCode = dsTemp.getColumn(0, "BANK_CODE");	// 은행코드
        			
        			this.ds_cntrctDecsnInfo.setColumn(0, "EXPNDTR_ACNUTNO"        , acnutNo);	// 지출계좌번호
        			this.ds_cntrctDecsnInfo.setColumn(0, "EXPNDTR_FNNC_INSTT_CODE", bankCode);	// 지출금융기관코드
        		}
        	}
        	
        	// 계약업체
        	if(sPopupId == "btn_bcncCode") {
        		var dsTemp = new Dataset();
        		var loadCnt = dsTemp.loadXML(sReturn);
        		if(loadCnt) {
        			var bcncCode = dsTemp.getColumn(0, "BCNC_CODE");		// 거래코드
        			var bcncNm   = dsTemp.getColumn(0, "BCNC_NM");			// 거래처명
        			
        			this.ds_cntrctDecsnInfo.setColumn(0, "BCNC_CODE", bcncCode);	// 거래코드
        			this.ds_cntrctDecsnInfo.setColumn(0, "BCNC_NM"  , bcncNm);		// 거래처명
        		}
        	}
        	
        	// 지급계좌
        	if(sPopupId == "btn_pymntAcnutNo") {
        		var dsTemp = new Dataset();
        		var loadCnt = dsTemp.loadXML(sReturn);
        		if(loadCnt) {
        			var bankCode = dsTemp.getColumn(0, "BANK_CODE");		// 은행코드
        			var acnutno  = dsTemp.getColumn(0, "ACNUTNO");			// 계좌번호
        			
        			this.ds_cntrctDecsnInfo.setColumn(0, "PYMNT_ACNUTNO"        , acnutno);		// 지급계좌번호
        			this.ds_cntrctDecsnInfo.setColumn(0, "PYMNT_FNNC_INSTT_CODE", bankCode);	// 지급금융기관코드
        		}
        	}
        	
        	// 대가지급
        	if(sPopupId == "expDsnPopup") {
        		this.fn_searchSub();
        	}
        }

        

        /**********************************************************************
        * Transaction 영역 끝
        ***********************************************************************/

        

        /**********************************************************************
        * non-Transaction 관련 컴포넌트 이벤트 처리 함수
        ***********************************************************************
        *
        * 1. Dataset 관련 이벤트 처리
        * 2. Button 관련 이벤트 처리
        * 3. 공통함수 처리
        * 4. 첨부파일버튼 관련 이벤트 처리
        * 
        ***********************************************************************/

        

        /**********************************************************************
        * Dataset 관련 이벤트 처리
        ***********************************************************************/

        /*
         * 함수명  	: ds_prsecWtnessList_onrowposchanged
         * 설명 		: Dataset 행 변경 후 이벤트 처리(검사입회목록 dataset)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.ds_prsecWtnessList_onrowposchanged(obj,e);
         */
        this.ds_prsecWtnessList_onrowposchanged = function(obj,e)
        {
        	var objCnt = obj.getRowCount();
        	if(objCnt > 0) {
        		this.btn_AD.set_visible(true);
        		this.btn_Cancel.set_visible(true);
        		//this.btn_downFiles.set_visible(true);
        	} else {
        		this.btn_AD.set_visible(false);
        		this.btn_Cancel.set_visible(false);
        		//this.btn_downFiles.set_visible(false);
        	}
        	this.btn_decsn.set_visible(false);
        	
        	// 서브 조회(계약결의정보)
        	if(e.newrow > -1) {
        		this.ds_condSub.clearData();
        		var nRow = this.ds_condSub.addRow();
        		var cntrctNo = obj.getColumn(e.newrow, "CNTRCT_NO");
        		var wtnessSn = obj.getColumn(e.newrow, "WTNESS_SN");
        		var fileSn   = obj.getColumn(e.newrow, "FILE_SN");
        		
        		this.ds_condSub.setColumn(nRow, "CNTRCT_NO", cntrctNo);
        		this.ds_condSub.setColumn(nRow, "WTNESS_SN", wtnessSn);
        		this.ds_condSub.setColumn(nRow, "FILE_SN2" , fileSn);
        		
        		this.fn_searchSub();
        	}
        }

        
        /*
         * 함수명  	: ds_cntrctDecsnInfo_onrowposchanged
         * 설명 		: Dataset 행 변경 후 이벤트 처리(계약대가결의 dataset)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.ds_cntrctDecsnInfo_onrowposchanged(obj,e);
         */
        this.ds_cntrctDecsnInfo_onrowposchanged = function(obj,e)
        {
        	var objCnt = obj.getRowCount();
        	if(objCnt > 0) {
        		this.btn_AD.set_cssclass("btn_WF_Griddel");
        		this.btn_AD.set_text("결의정보 삭제");
        		
        		this.sta_blind.set_visible(false);
        		
        		// 지출결의서등록 버튼 활성화 조건
        		var expDecsnAt = obj.getColumn(e.newrow, "EXP_DECSN_AT");
        		var expndtrCnfirmAt = obj.getColumn(e.newrow, "EXPNDTR_CNFIRM_AT");
        		if(!this.comUtils.isNull(expDecsnAt)) {
        			this.btn_decsn.set_visible(true);
        		
        			// 지출결의서 삭제버튼
        			if(expDecsnAt == '1') {
        				//this.btn_delDecsn.set_visible(true);
        				
        				// 승인받은 지출결의서 disenable
        				if(expndtrCnfirmAt == '1') {
        					this.btn_delDecsn.set_enable(false);
        				}else {
        					this.btn_delDecsn.set_enable(true);
        				}
        				
        			}else {
        				//this.btn_delDecsn.set_visible(false);
        			}
        		}
        	} else {
        		this.btn_AD.set_cssclass("btn_WF_Gridadd");
        		this.btn_AD.set_text("결의정보 추가");
        		
        		this.sta_blind.set_visible(true);
        	}
        }

        

        /**********************************************************************
        * Button 관련 이벤트 처리
        ***********************************************************************/

        
        /*
         * 함수명  	: btn_AD_onclick
         * 설명 		: '결의정보 (추가/삭제)' 버튼 클릭 후 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_AD_onclick(obj,e);
         */
        this.btn_AD_onclick = function(obj,e)
        {
        	if(obj.cssclass == "btn_WF_Gridadd") {
        		this.ds_cntrctDecsnInfo.clearData();
        		
        		var pRow = this.ds_prsecWtnessList.rowposition;
        		var cntrctNo        = this.ds_prsecWtnessList.getColumn(pRow, "CNTRCT_NO");
        		var wtnessSn        = this.ds_prsecWtnessList.getColumn(pRow, "WTNESS_SN");
        		var prsecDe         = this.ds_prsecWtnessList.getColumn(pRow, "PRSEC_DE");
        		
        		// 2020.10.20 검사일자의 년도를 바라볼 시 결의년도와 계약년도가 맞지 않아 조회되지 않는 경우 발생하여 수정
        		var cntrctDecsnYear = this.ds_cond.getColumn(0, "CNTRCT_YEAR");
        		//var cntrctDecsnYear = prsecDe.substr(0, 4);
        		
        		var prsecSe         = this.ds_prsecWtnessList.getColumn(pRow, "PRSEC_SE");
        		var prsecSeNm       = this.ds_prsecWtnessList.getColumn(pRow, "PRSEC_SE_NM");
        		var prsecOdr        = this.ds_prsecWtnessList.getColumn(pRow, "PRSEC_ODR");
        		var cntrctNm        = this.ds_prsecWtnessList.getColumn(pRow, "CNTRCT_NM");
        		var pxpayAt         = this.ds_prsecWtnessList.getColumn(pRow, "PXPAY_AT");
        		var sumry           = prsecSeNm + " " + prsecOdr + "차 " + cntrctNm;
        		
        		var cntrctSe        = this.ds_cntrct.getColumn(0, "CNTRCT_SE");
        		var anactKnd        = cntrctSe == '1' ? '06' : (cntrctSe == '3' ? '02' : '03');
        		
        		var aRow = this.ds_cntrctDecsnInfo.addRow();
        		this.ds_cntrctDecsnInfo.setColumn(aRow, "ENABLE_AT"        , '1');
        		this.ds_cntrctDecsnInfo.setColumn(aRow, "EXP_DECSN_AT"     , '0');
        		this.ds_cntrctDecsnInfo.setColumn(aRow, "CNTRCT_DECSN_YEAR", cntrctDecsnYear);
        		this.ds_cntrctDecsnInfo.setColumn(aRow, "CNTRCT_NO"        , cntrctNo);
        		this.ds_cntrctDecsnInfo.setColumn(aRow, "WTNESS_SN"        , wtnessSn);
        		this.ds_cntrctDecsnInfo.setColumn(aRow, "PXCOND_SE"        , prsecSe);
        		this.ds_cntrctDecsnInfo.setColumn(aRow, "PXCOND_ODR"       , prsecOdr);
        		this.ds_cntrctDecsnInfo.setColumn(aRow, "SUMRY"            , sumry);
        		this.ds_cntrctDecsnInfo.setColumn(aRow, "PXPAY_AT"         , pxpayAt);
        		this.ds_cntrctDecsnInfo.setColumn(aRow, "ANACT_KND"        , anactKnd);
        		
        	} else if(obj.cssclass == "btn_WF_Griddel") {
        		var cdRow = this.ds_cntrctDecsnInfo.rowposition;
        		if(cdRow > -1 && this.ds_cntrctDecsnInfo.getColumn(cdRow, "EXP_DECSN_AT") == '1') {
        			this.gfn_message("info.처리불가", "회계결의 정보가 존재합니다. 삭제할 수 없습니다.");
        			return false;
        		}
        		
        		if(this.gfn_message("confirm.삭제여부")) {
        			this.ds_cntrctDecsnInfo.deleteRow(cdRow);
        		}
        	}
        }

        
        /*
         * 함수명  	: btn_Cancel_onclick
         * 설명 		: '초기화' 버튼 클릭 후 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_Cancel_onclick(obj,e);
         */
        this.btn_Cancel_onclick = function(obj,e)
        {
        	if(Ex.util.isUpdated(this.ds_cntrctDecsnInfo)) {
        		if(!this.gfn_message("confirm.변경.취소.여부")) {
        			return false;	// 아니오
        		}
        		this.ds_cntrctDecsnInfo.reset();
        		this.ds_cntrctDecsnInfo.applyChange();
        	}
        }

        
        /*
         * 함수명  	: fn_popup_onclick
         * 설명 		: '팝업' 버튼 클릭 후 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_popup_onclick(obj,e);
         */
        this.fn_popup_onclick = function(obj,e)
        {
        	switch(obj.name) {
        		case "btn_cntrctPopup":		// 계약번호(조회조건)
        			var parm = {
        				 arg_0         : this
        				,cntrctYear    : this.ds_cond.getColumn(0, "CNTRCT_YEAR")
        				,cntrctDecsnAt : '1'	// 계약대가지급의 경우, 대상에 대한 필터링 진행
        			};
        			this.gfn_popup("btn_cntrctPopup", 800, 530, "", parm, "mis_ctr::CTR030100_P08.xfdl", "fn_popupCallBack", true);
        			break;
        		case "btn_actPopup":		// 원인행위번호
        			var pRow = this.ds_prsecWtnessList.rowposition;
        			var CAUSE_ACTION_NO = "";
        			CAUSE_ACTION_NO     = this.comUtils.isNull(this.ds_cntrctDecsnInfo.getColumn(0, "CAUSE_ACTION_NO")) ? '' : this.ds_cntrctDecsnInfo.getColumn(0, "CAUSE_ACTION_NO");
        			
        			var param = {
        				 arg_0				: this
        				,anactKnd			: this.ds_cntrctDecsnInfo.getColumn(0, "ANACT_KND")
        				,deptCode			: this.ds_prsecWtnessList.getColumn(pRow, "MNG_DEPT_CODE")
        				,deptNm				: this.ds_prsecWtnessList.getColumn(pRow, "MNG_DEPT_NM")
        				,BUDGET_ACNT_CODE	: this.ds_prsecWtnessList.getColumn(pRow, "BUDGET_ACNT_CODE")
        				,EXPNDTR_UNIT_CODE	: ''
        				,CAUSE_ACTION_NO	: CAUSE_ACTION_NO
        				,CPTAL_CHRG_CONFM	: '0'	// 간이계약여부
        			};
        			this.gfn_popup("btn_actPopup", 600, 500, "원인행위정보", param, "mis_acc::ACC020203_P09.xfdl", "fn_popupCallBack", true);
        			break;
        		case "btn_expndtrPopup":	// 지출계좌
        			var parm = {
        				arg_0 : this
        			};
        			this.gfn_popup("btn_expndtrPopup", 563, 500, "브런치계좌조회", parm, "mis_fun::FUN010103_P01.xfdl", "fn_popupCallBack", true);
        			break;
        		case "btn_bcncCode":		// 계약업체 선택
        			var parm = {
        				 arg_0      : this
        				,popMode  : "원도급"
        				,bsnsCode : this.ds_cntrct.getColumn(0, "BSNS_CODE")
        				,bsnsNm   : this.ds_cntrct.getColumn(0, "BSNS_NM")
        				,cntrctNo : this.ds_cntrct.getColumn(0, "CNTRCT_NO")
        				,cntrctNm : this.ds_cntrct.getColumn(0, "CNTRCT_NM")
        			};
        			this.gfn_popup("btn_bcncCode", 800, 530, "계약업체 선택", parm, "mis_ctr::CTR030100_P10.xfdl", "fn_popupCallBack", true);
        			break;
        		case "btn_pymntAcnutNo":		// 업체별계좌선택
        			var bcncCode = this.ds_cntrctDecsnInfo.getColumn(0, "BCNC_CODE");
        			if(this.comUtils.isNull(bcncCode)) {
        				this.gfn_message("comm.항목.입력.을", "'계약업체'");
        				return false;
        			}
        			var parm = {
        				 arg_0      : this
        				,bcncCode   : bcncCode
        			};
        			this.gfn_popup("btn_pymntAcnutNo", 620, 200, "업체별계좌 선택", parm, "mis_ctr::CTR010101_P03.xfdl", "fn_popupCallBack", true);
        			break;
        	}
        }

        
        /*
         * 함수명  	: btn_decsn_onclick
         * 설명 		: '지출결의서 등록/수정' 버튼 클릭 후 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_decsn_onclick(obj,e);
         */
        this.btn_decsn_onclick = function(obj,e)
        {
        	// 데이터셋 수정 여부체크
        	if (this.comUtils.isDatasetUpdated(this.ds_cntrctDecsnInfo) || this.comUtils.isDatasetUpdated(this.ds_cntrctDecsnDetail)) {
        		this.gfn_message("info.처리불가", "수정된 데이터가 존재합니다");
        		return false;
        	}
        	
        	var cdRow           = this.ds_cntrctDecsnInfo.rowposition;
        	var cntrctDecsnYear = this.ds_cntrctDecsnInfo.getColumn(cdRow, "EXP_DECSN_YEAR");
        	var expDecsnNo      = this.ds_cntrctDecsnInfo.getColumn(cdRow, "EXP_DECSN_NO");
        	var anactKnd        = this.ds_cntrctDecsnInfo.getColumn(cdRow, "ANACT_KND");
        	var regsDate        = this.ds_cntrctDecsnInfo.getColumn(cdRow, "REGS_DATE"); //세금계산서 발행일자 
        	
        	var pRow    = this.ds_prsecWtnessList.rowposition;
        	var prsecDe = this.ds_prsecWtnessList.getColumn(pRow, "PRSEC_DE");
        	
        //	this.ds_copyFileList.clearData();
        	this.ds_accFileList.clearData();
        	
        	var fileSn1 = this.ds_cntrctDecsnInfo.getColumn(0, "FILE_SN");
        	if(!this.comUtils.isNull(fileSn1)) {		// 대가지급에서 입력한 파일
        // 		var nRow1 = this.ds_copyFileList.addRow();
        // 		this.ds_copyFileList.setColumn(nRow1, "FILE_SN", fileSn1);
        		this.ds_accFileList.appendData(this.ds_fileList);
        	}
        	var fileSn2 = this.ds_prsecWtnessList.getColumn(pRow, "FILE_SN");
        	if(!this.comUtils.isNull(fileSn2)) {		// 검사검수에서 입력한 파일
        // 		var nRow2 = this.ds_copyFileList.addRow();
        // 		this.ds_copyFileList.setColumn(nRow2, "FILE_SN", fileSn2);
        		this.ds_accFileList.appendData(this.ds_fileList2);
        	}
        	
        	var args = {
        		 arg_0					: this
        		,trgFormId				: "CTR030600"
        		,trgFormId2				: "MIS"
        		,anactKnd				: anactKnd
        		,regsDate               : regsDate
        		,decsnYear				: cntrctDecsnYear
        		,decsnNo				: expDecsnNo
        		,ds_cntrctDecsnInfo		: this.ds_cntrctDecsnInfo
        		,ds_cntrctDecsnDetail	: this.ds_cntrctDecsnDetail
        		,ds_cntrct				: this.ds_cntrct
        		,prsecDe				: prsecDe
        //		,ds_copyFileList		: this.ds_copyFileList
        		,ds_accFileList			: this.ds_accFileList
            };
        	this.gfn_popup("expDsnPopup", 903, 842, "결의서", args, "mis_ctr::CTR030600_P01.xfdl", "fn_popupCallBack", true);
        }

        
        /*
         * 함수명  	: btn_downFiles2_onclick
         * 설명 		: '선택다운로드' 버튼 클릭 후 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_downFiles2_onclick(obj,e);
         */
        this.btn_downFiles2_onclick = function(obj,e)
        {
        	var findRow = this.ds_fileList2.findRow("CHK", "1");
        	if(findRow < 0) {
        		this.gfn_message("comm.데이터.선택.없음");
        			return;
        	}
        	
        	for(var fRow = 0; fRow < this.ds_fileList2.getRowCount(); fRow++) {
        		var fileSn    = this.ds_fileList2.getColumn(fRow, "FILE_SN");
        		var fileOrder = this.ds_fileList2.getColumn(fRow, "FILE_ORDR");
        		var fileName  = this.ds_fileList2.getColumn(fRow, "ORGINL_FILE_NM");
        		var chk       = this.ds_fileList2.getColumn(fRow, "CHK");
        		if(chk == '1') {
        			this.File_UpDownManager.download(fileSn, fileOrder, fileName);
        		}
        	}
        }

        
        /*
         * 함수명  	: btn_downFiles_onclick
         * 설명 		: '선택다운로드' 버튼 클릭 후 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_downFiles_onclick(obj,e);
         */
        this.btn_downFiles_onclick = function(obj,e)
        {
        	var findRow = this.ds_fileList.findRow("CHK", "1");
        	if(findRow < 0) {
        		this.gfn_message("comm.데이터.선택.없음");
        			return;
        	}
        	
        	for(var fRow = 0; fRow < this.ds_fileList.getRowCount(); fRow++) {
        		var fileSn    = this.ds_fileList.getColumn(fRow, "FILE_SN");
        		var fileOrder = this.ds_fileList.getColumn(fRow, "FILE_ORDR");
        		var fileName  = this.ds_fileList.getColumn(fRow, "ORGINL_FILE_NM");
        		var chk       = this.ds_fileList.getColumn(fRow, "CHK");
        		if(chk == '1') {
        			this.File_UpDownManager.download(fileSn, fileOrder, fileName);
        		}
        	}
        }

        
        /*
         * 함수명  	: btn_delFiles_onclick
         * 설명 		: '선택삭제' 버튼 클릭 후 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_delFiles_onclick(obj,e);
         */
        this.btn_delFiles_onclick = function(obj,e)
        {
        	var findRow  = this.ds_fileList.findRow("CHK", "1");
        	if(findRow < 0) {
        		this.gfn_message("comm.데이터.선택.없음");
        			return;
        	}
        	
        	if(!this.gfn_message("confirm.선택파일.삭제여부", "들")){
        		return false;
        	}
        	
        	for(var fRow = this.ds_fileList.getRowCount()-1; fRow >= 0; fRow--) {
        		var chkVal = this.ds_fileList.getColumn(fRow, "CHK");
        		if(chkVal == '1') {
        			this.ds_fileList.deleteRow(fRow);
        		}
        	}
        	
        	var strSvcId   	 = "deleteFile";
        	var sController  = "hsco/cmm/file/deleteFile.do";
        	var sInDatasets  = "input1=ds_fileList:U";
        	var sOutDatasets = "ds_fileList=output1";
        	
        	Ex.core.tran(this, strSvcId, sController, sInDatasets, sOutDatasets); 
        }

        
        /*
         * 함수명  	: btn_uploadFiles_onclick
         * 설명 		: '파일업로드' 버튼 클릭 후 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_uploadFiles_onclick(obj,e);
         */
        this.btn_uploadFiles_onclick = function(obj,e)
        {
        	var nRow     = this.ds_cntrctDecsnInfo.rowposition;	
        	if(nRow < 0){
        		this.gfn_message("comm.항목.선택.요청","대상 정보(검사입회내역)");
        		return;
        	}
        	
        	// 첨부파일 업로드(fileSn 자동채번 / 첨부파일 Master에 ROW추가 / 파일 업로드 및 자동저장 / 테이블에 fileSn반영 / 데이터셋에 fileSn반영, 단 신규 ROW가 아닐경우 ROWTYPE은 유지)
        	this.fn_autoFileSn(
        		 "MIS"										// 대분류   (SYS_SE)
        		,"CTR"										// 업무구분 (JOB_SE)
        		, this.File_UpDownManager					// fileManager 오브젝트
        		, this.ds_fileList							// fileObject
        		, this.ds_cntrctDecsnInfo					// fileSn을 불러오거나 반영해야 하는 컬럼
        		, "TBCTR_CNTRCT_DECSN"						// fileSn을 저장할 테이블
        		, "FILE_SN"									// fileSn 컬럼명이 다를 경우를 대비
        		, ["CNTRCT_DECSN_YEAR","CNTRCT_DECSN_SN"]	// fileSn을 저장할 테이블의 PK (FileSn 확인 및 자동반영목적)
        	);
        }
        // 
        // this.fn_uploadCallback = function(fileSn)
        // {
        // 	this.ds_condSub.setColumn(0, "FILE_SN", fileSn);
        // 	this.ds_cntrctDecsnInfo.setColumn(0, "FILE_SN", fileSn);
        // 	
        // 	var strSvcId     = "selectAtchFile";
        // 	var sController  = "/hsco/cmm/file/selectAtchmnFileList.do";
        // 	var sInDatasets  = "input1=ds_condSub";
        // 	var sOutDatasets = "ds_fileList=output1";
        // 	
        // 	Ex.core.tran(this, strSvcId, sController, sInDatasets, sOutDatasets);
        // }

        

        /***************************************
         * Grid 관련 이벤트 처리
        ****************************************/

        /*
         * 함수명  	: file_upload_popup
         * 설명 		: 첨부파일 그리드 전체파일선택 ON/OFF 이벤트
         * params  		: None
         * return Type 	: None
         * 사용법		: this.file_upload_popup(obj,e);
         */
        this.grd_cmmnAtchmnfl_onheadclick = function(obj,e)
        {
        	if(e.col == 0) {
        		this.gfn_setGridCheckAll(obj, e);
        	}
        }

        
        /*
         * 함수명  	: grd_cmmnAtchmnfl_oncellclick
         * 설명 		: 첨부파일 그리드 Body의 체크 버튼이 눌러졌을 때, Head 부분의 체크 버튼을 꺼 줌.
         * params  		: None
         * return Type 	: None
         * 사용법		: this.grd_cmmnAtchmnfl_oncellclick(obj,e);
         */
        this.grd_cmmnAtchmnfl_oncellclick = function(obj,e)
        {
        	if(e.cell == 0) {
        		obj.setCellProperty("Head", e.cell, "text", "0");
        	}
        	
        	if(e.col == "5") {
        		var nRow = this.ds_fileList.rowposition;
        		var fcnt = this.ds_fileList.rowcount;
        		if(nRow > 0) {
        			var aRow = nRow-1;	// 추가될 행
        			var dRow = nRow+1;	// 삭제될 행
        			
        			var fileSn = this.ds_fileList.getColumn(aRow, "NEW_FILE_ORDR");
        			var nfileSn = this.ds_fileList.getColumn(nRow, "NEW_FILE_ORDR");
        			
        			this.ds_fileList.insertRow(aRow);
        			this.ds_fileList.copyRow(aRow, this.ds_fileList, dRow);
        			this.ds_fileList.deleteRow(dRow);

        			this.ds_fileList.setColumn(aRow, "NEW_FILE_ORDR", fileSn);
        			this.ds_fileList.setColumn(nRow, "NEW_FILE_ORDR", nfileSn);
        			
        			// 파일 순서 변경 위한 데이터셋
        			var fileSn = this.ds_cntrctDecsnInfo.getColumn(this.ds_cntrctDecsnInfo.rowposition, "FILE_SN");
        			
        			this.ds_cond_file.clearData();
        			this.ds_cond_file.addRow();
        			this.ds_cond_file.setColumn(0, "FILE_SN", fileSn);
        			
        			this.fSaveRow = aRow;
        			this.fn_transaction("updateAtchmnFileOrdr");
        		}
        		
        	}
        	if(e.col == "6") {
        		var nRow = this.ds_fileList.rowposition;
        		var fcnt = this.ds_fileList.rowcount;
        		if((nRow+1) != fcnt) {	
        			var aRow = nRow+2;	// 추가될 행
        			var dRow = nRow;	// 삭제될 행
        			
        			var nfileSn = this.ds_fileList.getColumn(nRow, "NEW_FILE_ORDR");
        			var fileSn = this.ds_fileList.getColumn(nRow+1, "NEW_FILE_ORDR");
        						
        			this.ds_fileList.insertRow(aRow);
        			this.ds_fileList.copyRow(aRow, this.ds_fileList, dRow);
        			this.ds_fileList.deleteRow(dRow);
        			
        			this.ds_fileList.setColumn(nRow+1  , "NEW_FILE_ORDR", fileSn);
        			this.ds_fileList.setColumn(nRow    , "NEW_FILE_ORDR", nfileSn);
        			
        			// 파일 순서 변경 위한 데이터셋
        			var fileSn = this.ds_cntrctDecsnInfo.getColumn(this.ds_cntrctDecsnInfo.rowposition, "FILE_SN");
        			
        			this.ds_cond_file.clearData();
        			this.ds_cond_file.addRow();
        			this.ds_cond_file.setColumn(0, "FILE_SN", fileSn);
        			
        			this.fSaveRow = nRow+1;
        			this.fn_transaction("updateAtchmnFileOrdr");
        		}
        	}	
        }

        
        /*
         * 함수명  	: tab__tabpage1_grd_cmmnAtchmnfl_oncelldblclick
         * 설명 		: 첨부파일 다운로드(더블클릭)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.tab__tabpage1_grd_cmmnAtchmnfl_oncelldblclick(obj,e);
         */
        this.tab__tabpage1_grd_cmmnAtchmnfl_oncelldblclick = function(obj,e)
        {
        	
        	if(e.col = "5" || e.col != "6") {
        		var fileSn    = this.ds_fileList.getColumn(this.ds_fileList.rowposition, "FILE_SN");
        		var fileOrder = this.ds_fileList.getColumn(this.ds_fileList.rowposition, "FILE_ORDR");
        		var fileName  = this.ds_fileList.getColumn(this.ds_fileList.rowposition, "ORGINL_FILE_NM");
        		this.File_UpDownManager.download(fileSn, fileOrder, fileName);
        	}
        }

        
        /*
         * 함수명  	: tab__tabpage2_grd_cmmnAtchmnfl_oncelldblclick
         * 설명 		: 첨부파일 다운로드(더블클릭)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.tab__tabpage2_grd_cmmnAtchmnfl_oncelldblclick(obj,e);
         */
        this.tab__tabpage2_grd_cmmnAtchmnfl_oncelldblclick = function(obj,e)
        {
        	var fileSn    = this.ds_fileList2.getColumn(this.ds_fileList2.rowposition, "FILE_SN");
        	var fileOrder = this.ds_fileList2.getColumn(this.ds_fileList2.rowposition, "FILE_ORDR");
        	var fileName  = this.ds_fileList2.getColumn(this.ds_fileList2.rowposition, "ORGINL_FILE_NM");
        	this.File_UpDownManager.download(fileSn, fileOrder, fileName);
        }

        
        /*
         * 함수명  	: grd_cntrctDecsnDetail_onexpandup
         * 설명 		: 그리드 expand 버튼 클릭 후 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.grd_cntrctDecsnDetail_onexpandup(obj,e);
         */
        this.grd_cntrctDecsnDetail_onexpandup = function(obj,e)
        {
        	if(e.col == '9') {
        		var dRow      = this.ds_cntrctDecsnInfo.rowposition;
        		var decsnYear = this.ds_cntrctDecsnInfo.getColumn(dRow, "CNTRCT_DECSN_YEAR");
        		
        		var cRow      = this.ds_cntrctDecsnDetail.rowposition;
        		var bcncNm    = this.ds_cntrctDecsnDetail.getColumn(cRow, "BCNC_NM");
        		var issuSeqno = this.ds_cntrctDecsnDetail.getColumn(cRow, "ISSU_SEQNO");
        		var issuId    = this.ds_cntrctDecsnDetail.getColumn(cRow, "ISSU_ID");
        		
        		var args = {
        			 arg_0		: this
        			,decsnYear	: decsnYear
        			,bcncNm		: bcncNm
        			,issuId		: issuId
        		};
        		this.gfn_popup("CTR030600_P02", 903, 842, "", args, "mis_ctr::CTR030600_P02.xfdl", "fn_popupCallBack", true);
        	}
        }

        

        

        /*
         * 함수명  	: btn_etcExpDsnRegist_onclick
         * 설명 		: 기타증빙/지출결의등록
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_etcExpDsnRegist_onclick();
         */
        this.btn_etcExpDsnRegist_onclick = function(obj,e)
        {
        	var args = {
        		  arg_0				: this
            };
        	
        	this.gfn_popup("etcExpDsnPopup", 0, 0, "", args, "mis_acc::ACC030111_P02.xfdl", "fn_popupCallBack",true);
        }

        

        /*
         * 함수명  	: btn_delDecsn_onclick
         * 설명 		: 지출결의서 삭제
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_delDecsn_onclick();
         */
        this.btn_delDecsn_onclick = function(obj,e)
        {
        	var expndtrCnfirmAt = this.ds_cntrctDecsnInfo.getColumn(e.newrow, "EXPNDTR_CNFIRM_AT");

        	if(expndtrCnfirmAt == '1') {
        		this.gfn_message("fail.삭제.불가","승인된 건은");
        		return false;
        	}
        	
        	if(this.gfn_message("confirm.삭제여부")) {
        		var decsnYear = this.ds_cntrctDecsnInfo.getColumn(0, "EXP_DECSN_YEAR");
        		var decsnNo = this.ds_cntrctDecsnInfo.getColumn(0, "EXP_DECSN_NO");
        		
        		// 삭제 데이터셋
        		this.ds_cond_decsn_del.clearData();
        		this.ds_cond_decsn_del.addRow();
        		this.ds_cond_decsn_del.setColumn(0, "DECSN_YEAR", decsnYear);
        		this.ds_cond_decsn_del.setColumn(0, "DECSN_NO"  , decsnNo);
        	
        		this.fn_transaction("expDsnD");
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_prsecWtnessList.addEventHandler("onrowposchanged", this.ds_prsecWtnessList_onrowposchanged, this);
            this.ds_cntrctDecsnInfo.addEventHandler("onrowposchanged", this.ds_cntrctDecsnInfo_onrowposchanged, this);
            this.ds_acc030.addEventHandler("onrowposchanged", this.ds_frmtnPd_onrowposchanged, this);
            this.addEventHandler("oninit", this.CTR030600_oninit, this);
            this.addEventHandler("onload", this.CTR030600_onload, this);
            this.btn_etcExpDsnRegist.addEventHandler("onclick", this.btn_etcExpDsnRegist_onclick, this);
            this.div_search.btn_cntrctPopup.addEventHandler("onclick", this.fn_popup_onclick, this);
            this.btn_expndtrPopup.addEventHandler("onclick", this.fn_popup_onclick, this);
            this.btn_delDecsn.addEventHandler("onclick", this.btn_delDecsn_onclick, this);
            this.btn_AD.addEventHandler("onclick", this.btn_AD_onclick, this);
            this.btn_Cancel.addEventHandler("onclick", this.btn_Cancel_onclick, this);
            this.tab_.tabpage1.grd_cmmnAtchmnfl.addEventHandler("oncellclick", this.grd_cmmnAtchmnfl_oncellclick, this);
            this.tab_.tabpage1.grd_cmmnAtchmnfl.addEventHandler("onheadclick", this.grd_cmmnAtchmnfl_onheadclick, this);
            this.tab_.tabpage1.grd_cmmnAtchmnfl.addEventHandler("oncelldblclick", this.tab__tabpage1_grd_cmmnAtchmnfl_oncelldblclick, this);
            this.tab_.tabpage1.btn_downFiles.addEventHandler("onclick", this.btn_downFiles_onclick, this);
            this.tab_.tabpage1.btn_delFiles.addEventHandler("onclick", this.btn_delFiles_onclick, this);
            this.tab_.tabpage1.btn_uploadFiles.addEventHandler("onclick", this.btn_uploadFiles_onclick, this);
            this.tab_.tabpage2.grd_cmmnAtchmnfl.addEventHandler("oncellclick", this.grd_cmmnAtchmnfl_oncellclick, this);
            this.tab_.tabpage2.grd_cmmnAtchmnfl.addEventHandler("onheadclick", this.grd_cmmnAtchmnfl_onheadclick, this);
            this.tab_.tabpage2.grd_cmmnAtchmnfl.addEventHandler("oncelldblclick", this.tab__tabpage2_grd_cmmnAtchmnfl_oncelldblclick, this);
            this.tab_.tabpage2.btn_downFiles2.addEventHandler("onclick", this.btn_downFiles2_onclick, this);
            this.grd_cntrctDecsnDetail.addEventHandler("onexpandup", this.grd_cntrctDecsnDetail_onexpandup, this);
            this.sta_blind.addEventHandler("onclick", this.sta_blind_onclick, this);
            this.btn_decsn.addEventHandler("onclick", this.btn_decsn_onclick, this);

        };

        this.loadIncludeScript("CTR030600.xfdl");

       
    };
}
)();
