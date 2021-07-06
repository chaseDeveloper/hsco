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
                this.set_name("ACC020502");
                this.set_classname("UI_ACC020502");
                this.set_titletext("수입지출외현금등록");
                this._setFormPosition(0,0,1059,735);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_validation", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">SRCH_ST_DT</Col><Col id=\"from\">SRCH_ST_DT</Col><Col id=\"to\">SRCH_ED_DT</Col><Col id=\"msgId\">[검색조건]일자</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">SRCH_ED_DT</Col><Col id=\"from\">SRCH_ST_DT</Col><Col id=\"to\">SRCH_ED_DT</Col><Col id=\"msgId\">[검색조건]일자</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_incExpElseCashMastr</Col><Col id=\"colId\">OPERT_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">[수입지출외현금내역]일자</Col><Col id=\"from\"/></Row><Row><Col id=\"compId\">ds_incExpElseCashMastr</Col><Col id=\"colId\">INC_EXP_REGIST_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">자금지출기록부등기/수입예산정리부등기</Col></Row><Row><Col id=\"compId\">ds_incExpElseCashMastr</Col><Col id=\"colId\">ACNUTNO</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">[수입지출외현금내역]계좌</Col></Row><Row><Col id=\"compId\">ds_incExpElseCashMastr</Col><Col id=\"colId\">BALC_SE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">[수입지출외현금내역]수지구분</Col><Col id=\"from\"/></Row><Row><Col id=\"compId\">ds_incExpElseCashMastr</Col><Col id=\"colId\">CREDTR</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">[수입지출외현금내역]채주</Col><Col id=\"from\"/><Col id=\"lengthChkGb\">LT</Col><Col id=\"nlength\">50</Col></Row><Row><Col id=\"colId\">SUMRY</Col><Col id=\"compId\">ds_incExpElseCashMastr</Col><Col id=\"nlength\">100</Col><Col id=\"lengthChkGb\">LT</Col><Col id=\"msgId\">[수입지출외현금내역]적요</Col><Col id=\"notNull\">Y</Col><Col id=\"from\"/></Row><Row><Col id=\"compId\">ds_incExpElseCashDetail</Col><Col id=\"colId\">SBJECT_CODE</Col><Col id=\"notNull\">Y</Col><Col id=\"from\"/><Col id=\"msgId\">[상세내역]과목</Col></Row><Row><Col id=\"compId\">ds_incExpElseCashDetail</Col><Col id=\"colId\">CREDTR</Col><Col id=\"notNull\">Y</Col><Col id=\"from\"/><Col id=\"msgId\">[상세내역]채주</Col><Col id=\"nlength\">50</Col><Col id=\"lengthChkGb\">LT</Col></Row><Row><Col id=\"compId\">ds_incExpElseCashDetail</Col><Col id=\"colId\">SUMRY</Col><Col id=\"notNull\">Y</Col><Col id=\"nlength\">100</Col><Col id=\"from\"/><Col id=\"lengthChkGb\">LT</Col><Col id=\"msgId\">[상세내역]적요</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_incExpElseCashMastr", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"UPDUSR_ID\" type=\"string\" size=\"32\"/><Column id=\"REGIST_DT\" type=\"string\" size=\"32\"/><Column id=\"SUMRY\" type=\"string\" size=\"32\"/><Column id=\"BPLC_SE\" type=\"string\" size=\"32\"/><Column id=\"SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"BALC_SE\" type=\"string\" size=\"32\"/><Column id=\"CHECK_NO\" type=\"bigdecimal\" size=\"16\"/><Column id=\"CREDTR\" type=\"string\" size=\"32\"/><Column id=\"REGISTER_ID\" type=\"string\" size=\"32\"/><Column id=\"OPERT_DE\" type=\"string\" size=\"32\"/><Column id=\"UPDT_DT\" type=\"string\" size=\"32\"/><Column id=\"BCNC_CODE\" type=\"string\" size=\"32\"/><Column id=\"INCME_AMOUNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"EXPNDTR_AMOUNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"EXPNDTR_CONFM\" type=\"string\" size=\"32\"/><Column id=\"INCME_EXPNDTR_CECK_AT\" type=\"string\" size=\"32\"/><Column id=\"BCNC_NM\" type=\"string\" size=\"32\"/><Column id=\"CYFD_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ACNUTNO\" type=\"STRING\" size=\"256\"/><Column id=\"ACNUT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_KND\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"INC_EXP_REGIST_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_incExpElseCashDetail", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"UPDUSR_ID\" type=\"string\" size=\"32\"/><Column id=\"REGIST_DT\" type=\"string\" size=\"32\"/><Column id=\"SUMRY\" type=\"string\" size=\"32\"/><Column id=\"SBJECT_CODE\" type=\"string\" size=\"32\"/><Column id=\"SEQ\" type=\"bigdecimal\" size=\"16\"/><Column id=\"SN\" type=\"STRING\" size=\"16\"/><Column id=\"BANK\" type=\"string\" size=\"32\"/><Column id=\"CREDTR\" type=\"string\" size=\"32\"/><Column id=\"REGISTER_ID\" type=\"string\" size=\"32\"/><Column id=\"CMPNSP_NO\" type=\"string\" size=\"32\"/><Column id=\"OPERT_DE\" type=\"string\" size=\"32\"/><Column id=\"BANK_NM\" type=\"string\" size=\"32\"/><Column id=\"UPDT_DT\" type=\"string\" size=\"32\"/><Column id=\"INCME_AMOUNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"EXPNDTR_AMOUNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"INCME_EXPNDTR_CECK_AT\" type=\"string\" size=\"32\"/><Column id=\"ACNUTNO\" type=\"string\" size=\"32\"/><Column id=\"SBJECT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_acc004", this);
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

            obj = new Dataset("ds_cond", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BPLC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CREDTR\" type=\"STRING\" size=\"256\"/><Column id=\"OPERT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SBJECT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCNUT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"INNER_SANCTN_MDL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CYFD_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ACNUTNO\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sbjectCode", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SBJECT_CODE\" type=\"STRING\" size=\"3\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"1\"/><Column id=\"SBJECT_CODE_NM\" type=\"STRING\" size=\"30\"/><Column id=\"SBJECT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"8\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"7\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_balcSe", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">수입</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">지출</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_fnncInstt", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"FNNC_INSTT_CODE\" type=\"STRING\" size=\"3\"/><Column id=\"FNNC_INSTT_CODE_NM\" type=\"STRING\" size=\"50\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_tmp", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">갑근세</Col><Col id=\"Column1\">화성은행</Col><Col id=\"Column2\">508-11-111111-0</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">적요1</Col><Col id=\"Column5\">100000</Col></Row><Row><Col id=\"Column0\">갑근세</Col><Col id=\"Column1\">화성은행</Col><Col id=\"Column2\">508-10-222222-7</Col><Col id=\"Column3\">홍길자</Col><Col id=\"Column4\">적요2</Col><Col id=\"Column5\">200000</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sbjectCodeCmb", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SBJECT_CODE\" type=\"STRING\" size=\"3\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"1\"/><Column id=\"SBJECT_CODE_NM\" type=\"STRING\" size=\"30\"/><Column id=\"SBJECT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"8\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"7\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_import", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_com028", this);
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

            obj = new Dataset("ds_acc004forGrid", this);
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

            obj = new Dataset("ds_recomInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"INNER_SANCTN_ID\" type=\"STRING\" size=\"16\"/><Column id=\"INNER_SANCTN_MDL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"SYS_SE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_SE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_SANCTN_STEP\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_STEP\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_SANCTNER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_SANCTN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_KEY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond03", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"KEY\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond02", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"INNER_SANCTN_MDL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPERT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_SANCTN_STTUS\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BPLC_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("gds_apprline", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"APPRLINE_COL1\" type=\"STRING\" size=\"256\"/><Column id=\"APPRLINE_COL2\" type=\"STRING\" size=\"256\"/><Column id=\"APPRLINE_COL3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_acnut", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACNUTNO\" type=\"STRING\" size=\"256\"/><Column id=\"ACNUT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_acnutCmb", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACNUTNO\" type=\"STRING\" size=\"256\"/><Column id=\"ACNUT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond_file", this);
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_fileList", this);
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"FILE_SN\" type=\"BIGDECIMAL\" size=\"20\"/><Column id=\"FILE_ORDR\" type=\"INT\" size=\"3\"/><Column id=\"FILE_STRE_COURS\" type=\"STRING\" size=\"2000\"/><Column id=\"STRE_FILE_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ORGINL_FILE_NM\" type=\"STRING\" size=\"255\"/><Column id=\"FILE_EXTSN\" type=\"STRING\" size=\"20\"/><Column id=\"FILE_CN\" type=\"STRING\" size=\"4000\"/><Column id=\"FILE_MG\" type=\"INT\" size=\"8\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"1\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"INT\" size=\"5\"/><Column id=\"SYS_SE_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"JOB_SE\" type=\"STRING\" size=\"3\"/><Column id=\"FILE_TY\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRS\" type=\"INT\" size=\"5\"/><Column id=\"TRNSMIS_FILE_SIZE\" type=\"INT\" size=\"256\"/><Column id=\"DELETE_IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"STTUS\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_SEARCH", "absolute", "0", "0", null, "59", "28", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Box");
            this.addChild(obj.name, obj);
            obj = new Static("sta_EMPL_SE", "absolute", "15", "5", "43", "21", null, null, this.div_SEARCH);
            obj.set_taborder("7");
            obj.set_text("계좌");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Static("sta_EMPL_SE02", "absolute", "351", "31", "43", "21", null, null, this.div_SEARCH);
            obj.set_taborder("8");
            obj.set_text("채주");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Calendar("Calendar00", "absolute", "58", "31", "100", "21", null, null, this.div_SEARCH);
            this.div_SEARCH.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Essential");
            obj = new Static("Static00", "absolute", "161", "31", "13", "21", null, null, this.div_SEARCH);
            obj.set_taborder("9");
            obj.set_text("~");
            obj.style.set_align("center");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Calendar("Calendar01", "absolute", "182", "31", "100", "21", null, null, this.div_SEARCH);
            this.div_SEARCH.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Essential");
            obj = new Static("sta_EMPL_SE03", "absolute", "15", "31", "77", "21", null, null, this.div_SEARCH);
            obj.set_taborder("11");
            obj.set_text("일자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Static("sta_EMPL_SE01", "absolute", "633", "5", "77", "21", null, null, this.div_SEARCH);
            obj.set_taborder("12");
            obj.set_text("수입/지출");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Static("sta_EMPL_SE00", "absolute", "351", "5", "77", "21", null, null, this.div_SEARCH);
            obj.set_taborder("13");
            obj.set_text("과목");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "58", "5", "279", "21", null, null, this.div_SEARCH);
            this.div_SEARCH.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("@ds_acnutCmb");
            obj.set_codecolumn("ACNUTNO");
            obj.set_datacolumn("CODE_NM");
            obj = new Combo("Combo01", "absolute", "715", "5", "160", "21", null, null, this.div_SEARCH);
            this.div_SEARCH.addChild(obj.name, obj);
            var Combo01_innerdataset = new Dataset("Combo01_innerdataset", this.div_SEARCH.Combo01);
            Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">수입</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">지출</Col></Row></Rows>");
            obj.set_innerdataset(Combo01_innerdataset);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj = new Edit("Edit00", "absolute", "401", "31", "117", "21", null, null, this.div_SEARCH);
            obj.set_taborder("3");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Combo("cmb_sbject", "absolute", "401", "5", "217", "21", null, null, this.div_SEARCH);
            this.div_SEARCH.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("@ds_sbjectCodeCmb");
            obj.set_codecolumn("SBJECT_CODE");
            obj.set_datacolumn("SBJECT_NM");
            obj.set_displayrowcount("20");
            obj = new Static("sta_EMPL_SE04", "absolute", "633", "31", "43", "21", null, null, this.div_SEARCH);
            obj.set_taborder("14");
            obj.set_text("금액");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "715", "31", "117", "21", null, null, this.div_SEARCH);
            obj.set_taborder("15");
            obj.set_inputtype("digit");
            this.div_SEARCH.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "1031", "0", "15", "735", null, null, this);
            obj.set_taborder("16");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_incExpElseCashMastr", "absolute", "0", "93", null, null, "28", "351", this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_incExpElseCashMastr");
            obj.set_autoenter("select");
            obj.set_extendsizetype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"123\"/><Column size=\"60\"/><Column size=\"200\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"250\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"결재\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"발의일자\"/><Cell col=\"3\" text=\"자금지출기록부등기&#13;&#10;수입예산정리부등기\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"구분\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"계좌\"/><Cell col=\"6\" text=\"거래처\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"채주\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"적요\"/><Cell col=\"9\" text=\"수입액\"/><Cell col=\"10\" text=\"지급액\"/><Cell col=\"11\" text=\"지급번호\"/><Cell col=\"12\" text=\"이월구분\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"image\" style=\"cursor:hand;\" text=\"expr:comp.parent.fn_get_imgUrl(SANCTN_KND)\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"expr:['1','4','5'].indexOf(SANCTN_KND) &gt; -1 ? 'none' : 'date'\" text=\"bind:OPERT_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" text=\"bind:INC_EXP_REGIST_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"expr:['1','4','5'].indexOf(SANCTN_KND) &gt; -1 ? 'none' : 'combo'\" text=\"bind:BALC_SE\" suppressalign=\"middle\" combodataset=\"ds_balcSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"expr:['1','4','5'].indexOf(SANCTN_KND) &gt; -1 ? 'none' : 'combo'\" text=\"bind:ACNUTNO\" combodataset=\"ds_acnut\" combocodecol=\"ACNUTNO\" combodatacol=\"CODE_NM\"/><Cell col=\"6\" edittype=\"expr:['1','4','5'].indexOf(SANCTN_KND) &gt; -1 ? 'none' : 'expand'\" style=\"align:left;\" text=\"bind:BCNC_NM\" wordwrap=\"char\" expandshow=\"show\" expandsize=\"20\" autosizerow=\"default\"/><Cell col=\"7\" edittype=\"expr:['1','4','5'].indexOf(SANCTN_KND) &gt; -1 ? 'none' : 'text'\" style=\"align:left;\" text=\"bind:CREDTR\" wordwrap=\"none\" editlimit=\"50\" autosizerow=\"default\"/><Cell col=\"8\" celltype=\"none\" edittype=\"expr:['1','4','5'].indexOf(SANCTN_KND) &gt; -1 ? 'none' : 'text'\" style=\"align:left;\" text=\"bind:SUMRY\" wordwrap=\"char\" editlimit=\"100\" tooltiptext=\"bind:SUMRY\" autosizerow=\"default\" autosizecol=\"default\"/><Cell col=\"9\" style=\"align:right;\" text=\"bind:INCME_AMOUNT\"/><Cell col=\"10\" edittype=\"none\" style=\"align:right;\" text=\"bind:EXPNDTR_AMOUNT\"/><Cell col=\"11\" edittype=\"none\" style=\"align:right;\" text=\"bind:CHECK_NO\" mask=\"######\" maskchar=\" \" editlimit=\"6\" editlimitbymask=\"integer\"/><Cell col=\"12\" displaytype=\"checkbox\" edittype=\"expr:['1','4','5'].indexOf(SANCTN_KND) &gt; -1 ? 'none' : 'checkbox'\" text=\"bind:CYFD_SE\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" colspan=\"7\" text=\"합계\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;INCME_AMOUNT&quot;)\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;EXPNDTR_AMOUNT&quot;)\"/><Cell col=\"11\"/><Cell col=\"12\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", null, "0", "13", "735", "0", null, this);
            obj.set_taborder("17");
            obj.set_text("스\r\n크\r\n롤\r\n13");
            obj.set_visible("false");
            obj.style.set_background("#d07b173c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "0", "59", "1031", "10", null, null, this);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title01", "absolute", "0", "69", "224", "19", null, null, this);
            obj.set_taborder("19");
            obj.set_text("수입지출외현금내역");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "0", "88", "1031", "5", null, null, this);
            obj.set_taborder("20");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00", "absolute", "0", null, "164", "19", null, "322", this);
            obj.set_taborder("74");
            obj.set_text("수입지출외현금상세내역");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", null, "1031", "10", null, "341", this);
            obj.set_taborder("75");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0", null, "1031", "5", null, "317", this);
            obj.set_taborder("76");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_incExpElseCashDetail", "absolute", "0", null, null, "156", "28", "161", this);
            obj.set_taborder("11");
            obj.set_binddataset("ds_incExpElseCashDetail");
            obj.set_extendsizetype("row");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_readonly("true");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"84\"/><Column size=\"94\"/><Column size=\"96\"/><Column size=\"133\"/><Column size=\"93\"/><Column size=\"228\"/><Column size=\"138\"/><Column size=\"124\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"일자\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"과목\"/><Cell col=\"3\" text=\"지급은행\"/><Cell col=\"4\" text=\"계좌번호\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"채주\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"적요\"/><Cell col=\"7\" text=\"수입액\"/><Cell col=\"8\" text=\"지급액\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"date\" text=\"bind:OPERT_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:SBJECT_CODE\" wordwrap=\"char\" combodataset=\"ds_sbjectCodeCmb\" combocodecol=\"SBJECT_CODE\" combodatacol=\"SBJECT_CODE_NM\" autosizerow=\"limitmin\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:BANK\" combodataset=\"ds_fnncInstt\" combocodecol=\"FNNC_INSTT_CODE\" combodatacol=\"FNNC_INSTT_CODE_NM\"/><Cell col=\"4\" edittype=\"text\" text=\"bind:ACNUTNO\" editlimit=\"20\"/><Cell col=\"5\" edittype=\"text\" style=\"align:left;\" text=\"bind:CREDTR\" wordwrap=\"char\" editlimit=\"50\" autosizerow=\"limitmin\"/><Cell col=\"6\" edittype=\"text\" style=\"align:left;\" text=\"bind:SUMRY\" wordwrap=\"char\" editlimit=\"100\" tooltiptext=\"bind:SUMRY\" autosizerow=\"limitmin\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"expr:comp.parent.fn_getMastrBalcSe() == &quot;1&quot; ? &quot;masknumber&quot; : &quot;none&quot;\" style=\"align:right;\" text=\"bind:INCME_AMOUNT\" mask=\"expr:comp.parent.fn_getMastrBalcSe() == &quot;1&quot; ? &quot;###,###,###,###,##0&quot; : &quot;&quot;\" maskchar=\" \" editlimit=\"15\" editlimitbymask=\"integer\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"expr:comp.parent.fn_getMastrBalcSe() == &quot;2&quot; ? &quot;masknumber&quot; : &quot;none&quot;\" style=\"align:right;\" text=\"bind:EXPNDTR_AMOUNT\" mask=\"expr:comp.parent.fn_getMastrBalcSe() == &quot;2&quot; ? &quot;###,###,###,###,##0&quot; : &quot;&quot;\" maskchar=\" \" editlimit=\"15\" editlimitbymask=\"integer\"/></Band><Band id=\"summary\"><Cell colspan=\"7\" text=\"합계\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;INCME_AMOUNT&quot;)\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;EXPNDTR_AMOUNT&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addDtls", "absolute", null, null, "64", "19", "190", "322", this);
            obj.set_taborder("8");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Gridadd");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delDtls", "absolute", null, null, "64", "19", "123", "322", this);
            obj.set_taborder("9");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Griddel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_resetDtls", "absolute", null, null, "64", "19", "56", "322", this);
            obj.set_taborder("10");
            obj.set_text("행취소");
            obj.set_cssclass("btn_WF_Gridcnl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addAll", "absolute", null, null, "92", "19", "360", "322", this);
            obj.set_taborder("6");
            obj.set_text("일괄등록");
            obj.set_cssclass("btn_WF_Process");
            this.addChild(obj.name, obj);

            obj = new Button("btn_TmpDn", "absolute", null, null, "100", "19", "257", "322", this);
            obj.set_taborder("7");
            obj.set_text("양식다운로드");
            obj.set_cssclass("btn_WF_Process");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cyfd", "absolute", null, "69", "92", "19", "56", null, this);
            obj.set_taborder("1");
            obj.set_text("전기이월");
            obj.set_cssclass("btn_WF_Process");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_tmp", "absolute", "19", "760", "858", "138", null, null, this);
            obj.set_taborder("77");
            obj.set_binddataset("ds_tmp");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"168\"/><Column size=\"203\"/><Column size=\"111\"/><Column size=\"107\"/><Column size=\"100\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"과목(과목시트참조)\"/><Cell col=\"1\" text=\"은행명(은행명시트참조)\"/><Cell col=\"2\" text=\"계좌번호\"/><Cell col=\"3\" text=\"영수자\"/><Cell col=\"4\" text=\"적요\"/><Cell col=\"5\" text=\"금액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:left;\" text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;\" text=\"bind:Column1\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left;\" text=\"bind:Column2\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:left;\" text=\"bind:Column3\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:left;\" text=\"bind:Column4\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:Column5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDn", "absolute", null, "69", "25", "19", "28", null, this);
            obj.set_taborder("78");
            obj.set_cssclass("btn_WF_Gridexceldn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDnDtls", "absolute", null, null, "25", "19", "28", "322", this);
            obj.set_taborder("79");
            obj.set_cssclass("btn_WF_Gridexceldn");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_sbjectCode", "absolute", "219", "832", "373", "93", null, null, this);
            obj.set_taborder("80");
            obj.set_binddataset("ds_sbjectCode");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"225\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:left;\" text=\"bind:SBJECT_CODE_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_fnncInstt", "absolute", "645", "824", "401", "93", null, null, this);
            obj.set_taborder("81");
            obj.set_binddataset("ds_fnncInstt");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"255\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:left;\" text=\"bind:FNNC_INSTT_CODE_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_CLSF_CODE", "absolute", null, "68", "68", "21", "251", null, this);
            obj.set_taborder("83");
            obj.set_text("생성일자");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01", "absolute", null, "68", "100", "21", "151", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("84");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Essential");

            obj = new Button("btn_delFiles", "absolute", null, null, "67", "19", "188", "138", this);
            obj.set_taborder("86");
            obj.set_text("선택삭제");
            obj.set_cssclass("btn_WF_Process");
            this.addChild(obj.name, obj);

            obj = new Button("btn_uploadFiles", "absolute", null, null, "68", "19", "116", "138", this);
            obj.set_taborder("87");
            obj.set_text("파일업로드");
            obj.set_cssclass("btn_WF_Process");
            this.addChild(obj.name, obj);

            obj = new Button("btn_downFiles", "absolute", null, null, "85", "19", "28", "138", this);
            obj.set_taborder("88");
            obj.set_text("선택다운로드");
            obj.set_cssclass("btn_WF_Process");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cmmnAtchmnfl", "absolute", "0", null, null, "133", "28", "0", this);
            obj.set_taborder("89");
            obj.set_binddataset("ds_fileList");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"65\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"파일형식\"/><Cell col=\"2\" celltype=\"head\" text=\"파일명\"/><Cell col=\"3\" text=\"확장자\"/><Cell col=\"4\" text=\"사이즈\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"image\" text=\"bind:FILE_IMAGE\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"2\" displaytype=\"normal\" style=\"align:left middle;\" text=\"bind:ORGINL_FILE_NM\"/><Cell col=\"3\" text=\"bind:FILE_EXTSN\"/><Cell col=\"4\" text=\"bind:FILE_MG\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "0", "597", null, "5", "27", null, this);
            obj.set_taborder("90");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "573", null, "5", "27", null, this);
            obj.set_taborder("91");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "0", null, "186", "19", null, "138", this);
            obj.set_taborder("92");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 59, this.div_SEARCH,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WFSA_Box");

            	}
            );
            this.div_SEARCH.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1059, 735, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("UI_ACC020502");
            		p.set_titletext("수입지출외현금등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","div_SEARCH.Calendar01","value","ds_cond","SRCH_ED_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_SEARCH.Calendar00","value","ds_cond","SRCH_ST_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_SEARCH.Combo00","value","ds_cond","ACNUTNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_SEARCH.Combo01","value","ds_cond","BALC_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_SEARCH.Edit00","value","ds_cond","CREDTR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div_SEARCH.cmb_sbject","value","ds_cond","SBJECT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Calendar01","value","ds_cond","CYFD_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","div_SEARCH.Edit01","value","ds_cond","AMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("ACC020502.xfdl", "mis_lib::misUtil.xjs");
        this.addIncludeScript("ACC020502.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("ACC020502.xfdl", "lib::comUpDownUtils.xjs");
        this.addIncludeScript("ACC020502.xfdl", "lib::comInnerSanct.xjs");
        this.registerScript("ACC020502.xfdl", function() {
        /***********************************************************************
         * 화면ID   : ACC020502
         * 화면명   : 수입지출외현금등록
         * 화면설명 : 수입지출외현금등록을 관리한다.
         * 작성일   : 2017.08.22
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
        //include "mis_lib::misUtil.xjs";
        //include "lib::comInclude.xjs";
        //include "lib::comUpDownUtils.xjs";
        //include "lib::comInnerSanct.xjs";

        /***********************************************************************
         * 화면 변수 선언부
         ***********************************************************************/
        this.File_UpDownManager = null;

         /***********************************************************************
         * onInit / onLoad 영역
         ***********************************************************************/
        this.ACC020502_onload = function(obj,e)
        {
        	// Form 초기화
        	this.fn_init_form();
        	this.fn_misFormInit(this);

        	// 파일 메니저 설정
        	var fileConfig = {
        		useMultiUpload : true,
        		onChange: this.fn_onFileSelected,	// 파일 선택 이벤트 핸들러
        		onSuccess : this.fn_onFileSuccess	// 전송 성공 이벤트 핸들러
        	};
        	this.File_UpDownManager = new this.fileUpDownManager(this, "MIS", "ACC");
        	this.File_UpDownManager.init(fileConfig);
        	
        	// 공통코드
        	var comboParams = [
        		  ["ds_acc004", "ACC004", "Y", "A", "B"]	// 사업장구분2
        		 ,["ds_acc004forGrid", "ACC001", "Y", "A", "B"]	// 사업장구분2
        		 ,["ds_com028", "COM028", "Y", "D", "B"]	// 내부결재상태
        	];
        	var callback = function (svcId, errorCode, errorMsg) {
        		// 과목코드 조회
        		this.fn_transaction("sbjectCode", false);
        		this.ds_sbjectCodeCmb.copyData(this.ds_sbjectCode);
        		this.ds_sbjectCodeCmb.insertRow(0);
        		this.ds_sbjectCodeCmb.setColumn(0, "SBJECT_CODE", "");
        		this.ds_sbjectCodeCmb.setColumn(0, "SBJECT_NM", "전체");
        		
        		this.ds_acc004forGrid.deleteRow(0);
        		// 금융기관코드 조회
        		
        		this.fn_transaction("fnncInstt", false);
        		
        		this.fn_transaction("acnutList", false);
        		this.ds_acnutCmb.copyData(this.ds_acnut);
        		this.ds_acnutCmb.insertRow(0);
        		this.ds_acnutCmb.setColumn(0, "ACNUTNO", "");
        		this.ds_acnutCmb.setColumn(0, "CODE_NM", "전체");
        		
        		
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
        	
        	var today = this.dateUtils.today();
        	this.ds_cond.clearData();
        	this.ds_cond.addRow();
        	this.ds_cond.setColumn(0, "SRCH_ST_DT", today.substr(0,6)+"01");
        	this.ds_cond.setColumn(0, "SRCH_ED_DT", today);
        	this.ds_cond.setColumn(0, "ACNUTNO", "");
        	this.ds_cond.setColumn(0, "BALC_SE", "");
        	this.ds_cond.setColumn(0, "SBJECT_CODE", "");
        	this.ds_cond.setColumn(0, "PRINT_SE", "");
        	this.ds_cond.setColumn(0, "CYFD_DE", today.substr(0,4)+"0102");
        	this.ds_cond.setColumn(0, "INNER_SANCTN_MDL_ID", "");
        }

        /***********************************************************************
         * Transaction 관련 이벤트 핸들러 
         **********************************************************************/
        /*
         * 함수명  	: fn_search
         * 설명 		: 조회 처리
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
        	
        	var balcSe = this.ds_cond.getColumn(0, "BALC_SE");
        	if(balcSe == "1") {
        		this.grd_incExpElseCashMastr.setCellProperty("Head", 3, "text", "수입예산정리부등기");
        		this.grd_incExpElseCashMastr.setFormatColProperty(9,"size",100);
        		this.grd_incExpElseCashMastr.setFormatColProperty(10,"size",0);
        		
        		this.grd_incExpElseCashDetail.setFormatColProperty(7,"size",100);
        		this.grd_incExpElseCashDetail.setFormatColProperty(8,"size",0);
        	} 
        	else if(balcSe == "2") {
        		this.grd_incExpElseCashMastr.setCellProperty("Head", 3, "text", "자금지출기록부등기");
        		this.grd_incExpElseCashMastr.setFormatColProperty(9,"size",0);
        		this.grd_incExpElseCashMastr.setFormatColProperty(10,"size",100);
        		
        		this.grd_incExpElseCashDetail.setFormatColProperty(7,"size",0);
        		this.grd_incExpElseCashDetail.setFormatColProperty(8,"size",100);
        	} 
        	else {
        		this.grd_incExpElseCashMastr.setCellProperty("Head", 3, "text", "자금지출기록부등기\n수입예산정리부등기");
        		this.grd_incExpElseCashMastr.setFormatColProperty(9,"size",100);
        		this.grd_incExpElseCashMastr.setFormatColProperty(10,"size",100);
        		
        		this.grd_incExpElseCashDetail.setFormatColProperty(7,"size",100);
        		this.grd_incExpElseCashDetail.setFormatColProperty(8,"size",100);
        	}

        	this.fn_transaction("incExpElseCashMastrList");
        }

        /*
         * 함수명  	: fn_save
         * 설명 		: 저장 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_save();
         */
        this.fn_save= function()
        {
        	// 데이터셋 수정 여부체크
        	if (!this.comUtils.isDatasetUpdated(this.ds_incExpElseCashMastr) && !this.comUtils.isDatasetUpdated(this.ds_incExpElseCashDetail)) {
        		this.gfn_message("comm.내역.변경.없음");
        		return false;
        	}
        	
        	// validation 체크(현금내역)
        	if(!this.gfn_checkValidation_NoUpdChk(this.ds_incExpElseCashMastr, this.ds_validation)) {
        		return;
        	}
        	
        	// validation 체크(상세내역)
        	if(!this.gfn_checkValidation_NoUpdChk(this.ds_incExpElseCashDetail, this.ds_validation)) {
        		return;
        	}
        	
        	this.fn_transaction("incExpElseCashCUD");
        	
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
        		case "incExpElseCashMastrList":	// 수입지출외현금 조회
        			var sController   	= "hsco/mis/acc/ACC020502/incExpElseCashMastrList.do";
        			var sInDatasets   	= "input1=ds_cond";
        			var sOutDatasets  	= "ds_incExpElseCashMastr=output1";
        			this.ds_incExpElseCashDetail.clearData();	
        			this.ds_incExpElseCashMastr.clearData();
        			break;
        		case "incExpElseCashDetailList":// 수입지출외현금 상세조회
        			var sController   	= "hsco/mis/acc/ACC020502/incExpElseCashDetailList.do";
        			var sInDatasets   	= "input1=ds_cond";
        			var sOutDatasets  	= "ds_incExpElseCashDetail=output1";
        			this.ds_incExpElseCashDetail.clearData();
        			break;
        		case "incExpElseCashCUD":		// 수입지출외현금 저장
        			var sController   	= "hsco/mis/acc/ACC020502/incExpElseCashCUD.do";
        			var sInDatasets   	= "input1=ds_incExpElseCashMastr:U input2=ds_incExpElseCashDetail:U";
        			var sOutDatasets  	= "";
        			break;
        		case "incExpSyfd":				// 이월처리
        			var sController   	= "hsco/mis/acc/ACC020502/incExpSyfd.do";
        			var sInDatasets   	= "input1=ds_cond";
        			var sOutDatasets  	= "ds_incExpElseCashMastr=output1";
        			this.ds_incExpElseCashDetail.clearData();	
        			this.ds_incExpElseCashMastr.clearData();
        			break;
        		case "sbjectCode":				// 과목코드
        			var sController   	= "hsco/mis/acc/ACC020501/sbjectCodeList.do";
        			var sInDatasets   	= "input1=ds_cond";
        			var sOutDatasets  	= "ds_sbjectCode=output1";
        			break;
        		case "fnncInstt":				// 금융기관코드
        			var sController   	= "hsco/mis/acc/ACC020102/fnncInsttCodeList.do";
        			var sInDatasets   	= "input1=ds_cond";
        			var sOutDatasets  	= "ds_fnncInstt=output1";
        			break;
        			
        		case "acnutList":				// 수입지출외 계좌
        			var sController   	= "hsco/mis/acc/ACC020502/selectAcnutList.do";
        			var sInDatasets   	= "";
        			var sOutDatasets  	= "ds_acnut=output1";
        			break;
        		// ======== 첨부파일 관련 transaction ========
        		case "selectAtchFile":
        			var sController  = "hsco/mis/acc/ACC020502/selectAtchFile.do";
        			var sInDatasets  = "input1=ds_cond_file";
        			var sOutDatasets = "ds_fileList=output1";
        			break;
        		case "deleteFile":
        			var sController  = "hsco/cmm/file/deleteFile.do";
        			var sInDatasets  = "input1=ds_fileList:U";
        			var sOutDatasets = "ds_fileList=output1";
        			break;
        	}
        	
        	if(arguments.length > 1) {
        		Ex.core.tran(this, strSvcId, sController, sInDatasets, sOutDatasets, "", "", false, arguments[1]); 
        	} else {
        		Ex.core.tran(this, strSvcId, sController, sInDatasets, sOutDatasets);
        	}
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
        	// 오류 및 성공 메시지를 화면에 보여준다.
        	if (nErrorCode != 0) {
        		this.gfn_callback_message(strSvcId, nErrorCode, strErrorMsg);
        	} else {
        		// 성공 메시지를 보여주는 동작 외에 처리할 내용이 있으면 아래에 기술.
        		// 처리할 내용이 없다면, switch 문은 생략합니다.
        		switch(strSvcId) {
        			case "incExpElseCashMastrList": // 수입지출외현금 조회
        				break;
        			case "incExpElseCashDetailList":// 수입지출외현금 상세조회
        				break;
        			case "incExpElseCashCUD":		// 수입지출외현금 저장
        				this.fn_search();
        				break;
        			case "incExpSyfd":				// 이월처리
        				break;
        			case "sbjectCode":
        				break;
        			case "acnutList":
        				break;
        			// ======== 첨부파일 관련 transaction ========
        			case "selectAtchFile":
        				break;
        			case "deleteFile":
        				this.fn_transaction("selectAtchFile");
        				break;
        			default:
        				break;
        		}
        	}
        	
        	
        }

        /*
         * 함수명  	: fn_popupCallBack
         * 설명 		: 팝업 콜백 처리
         * params  		: 
         * return Type 	: None
         * 사용법		: fn_popupCallBack();
         */
        this.fn_popupCallBack = function(strID,variant)
        {
        	var currow = this.ds_incExpElseCashMastr.rowposition;
        	var dsTemp = new Dataset();
        	dsTemp.loadXML(variant);
        	this.ds_incExpElseCashMastr.setColumn(currow, "BCNC_CODE", dsTemp.getColumn(0, "BCNC_CODE"));					// 거래처코드
        	this.ds_incExpElseCashMastr.setColumn(currow, "BCNC_NM", dsTemp.getColumn(0, "BCNC_NM"));						// 거래처명
        }

        /***********************************************************************
         * non-Transaction 관련 컴포넌트 이벤트 처리 함수
         ***********************************************************************/

        /*
         * 함수명  	: fn_insert
         * 설명 		: 신규 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_insert();
         */
        this.fn_insert = function()
        {
        	if(this.comUtils.isDatasetUpdated(this.ds_incExpElseCashDetail)) {
        		if(this.gfn_message("comm.행위여부","상세내역에 변경사항이 있습니다. 저장하지 않고 계속 진행") ){
        			this.ds_incExpElseCashDetail.reset();
        		} else {
        			return;
        		}
        	}

        	var nRow = this.ds_incExpElseCashMastr.addRow();
        	this.ds_incExpElseCashMastr.setColumn(nRow, "OPERT_DE", this.dateUtils.today());
        	this.ds_incExpElseCashMastr.setColumn(nRow, "INC_EXP_REGIST_DE", this.dateUtils.today());
        	this.ds_incExpElseCashMastr.setColumn(nRow, "BALC_SE", this.ds_cond.getColumn(0, "BALC_SE"));
        	this.ds_incExpElseCashMastr.setColumn(nRow, "INCME_AMOUNT", "0");
        	this.ds_incExpElseCashMastr.setColumn(nRow, "EXPNDTR_AMOUNT", "0");
        	this.ds_incExpElseCashMastr.setColumn(nRow, "SANCTN_KND", "0");
        }
        /*
         * 함수명  	: fn_delete
         * 설명 		: 삭제 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_delete();
         */
        this.fn_delete = function()
        {
        	var arrSanctn = ["1","4","5"];
        	if(arrSanctn.indexOf(this.ds_incExpElseCashMastr.getColumn(this.ds_incExpElseCashMastr.rowposition, "SANCTN_KND")) > -1) {
        		this.gfn_message("fail.삭제.불가","결재 상신중이거나 완료된 건은");
        		return;
        	}
        	
        	if(this.ds_incExpElseCashMastr.getRowCount() > 0) {	
        		if (this.gfn_message("confirm.삭제여부") ) {
        			this.ds_incExpElseCashMastr.deleteRow(this.ds_incExpElseCashMastr.rowposition);
        		}
        	}
        	
        	// 첨부파일
        	this.ds_cond_file.clearData();
        	var nRow = this.ds_cond_file.addRow();
        	this.ds_cond_file.setColumn(nRow, "FILE_SN",   this.ds_incExpElseCashMastr.getColumn(nRow, "FILE_SN"));
        	
        	this.fn_transaction("selectAtchFile");
        }
        /*
         * 함수명  	: fn_cancel
          * 설명 		: 취소 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_cancel();
         */
        this.fn_cancel = function()
        {
        	if(this.gfn_message("confirm.취소여부") ){
        		this.ds_incExpElseCashMastr.reset();
        		this.ds_incExpElseCashMastr.applyChange();
        	}	
        }

        
        /*
         * 함수명  	: fn_sanction
         * 설명 		: '결재' 버튼 클릭 후
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_sanction();
         */
        this.fn_sanction = function()
        {
        	var arrSancData;
        	var currow = this.ds_incExpElseCashMastr.rowposition;
        	var balcSe = this.ds_incExpElseCashMastr.getColumn(currow, "BALC_SE");
        	var sumry  = "";
        	
        	if(this.comUtils.isDatasetUpdated(this.ds_incExpElseCashMastr) || this.comUtils.isDatasetUpdated(this.ds_incExpElseCashDetail)) {
        		this.gfn_message("comm.정보.저장.요청", "수입지출외현금");
        		return;
        	}
        	
        	if(currow < 0) {
        		this.gfn_message("info.선택데이터.없음.선택.요청");
        		return;
        	}
        	
        	if(['1','4','5'].indexOf(this.ds_incExpElseCashMastr.getColumn(currow, "SANCTN_KND")) > -1) {
              this.gfn_message("info.처리불가","결재가 진행중이거나 완료된 데이터는 결재할 수 없습니다.");
              return;
        	}
        	
        	for(var i = 0; i < this.ds_incExpElseCashDetail.getRowCount(); i++) {
        		sumry += this.ds_incExpElseCashDetail.getColumn(i, "SUMRY");
        		sumry += ": ";
        		sumry += this.ds_incExpElseCashDetail.getColumn(i, balcSe == "1" ? "INCME_AMOUNT" : "EXPNDTR_AMOUNT");
        		sumry += "\\r\\n";
        	}
        	
        	if(balcSe == "1") {
        		// 수입
        		arrSancData = [
        			 "[수입]"+this.ds_incExpElseCashMastr.getColumn(currow,"SUMRY")							//결재제목
        			,this.fn_dateStr(this.ds_incExpElseCashMastr.getColumn(currow,"OPERT_DE"),".")	//발의일자
        			,""	//고지서발행
        			,""	//납입기한
        			,this.fn_dateStr(this.ds_incExpElseCashMastr.getColumn(currow,"INC_EXP_REGIST_DE"),".")	//수입예산정리부등기
        			,""	//고지서번호
        			,this.ds_incExpElseCashMastr.getColumn(currow,"OPERT_DE").substr(0,4)	//년도
        			,"수입지출외"	//관
        			,""	//항
        			,""	//세항
        			,""	//목
        			,"일금 "+this.fn_numToHangul(this.ds_incExpElseCashMastr.getColumn(currow,"INCME_AMOUNT"))+"원정"	//총금액_한글
        			,"\\"+this.comUtils.formatComma(this.ds_incExpElseCashMastr.getColumn(currow,"INCME_AMOUNT"))	//총금액
        			,this.ds_incExpElseCashMastr.getColumn(currow,"CREDTR")	//납입자성명
        			,this.ds_incExpElseCashMastr.getColumn(currow,"SUMRY") + "\\r\\n" + sumry	//적요
        		];
        		
        		//trace(arrSancData.join("|"));

        		this.fn_callHandySanc2(
        			 this						// context
        			,'0000000065'				// formId
        			,this.ds_incExpElseCashMastr		// misDataset
        			,"TBACC_INC_EXP_ELSE_CASH_MASTR"		// tableName
        			,["SN"]	// tableKey
        			,arrSancData				// arrSancData
        			, null
        			, null
        			, null
        			, this.ds_fileList// file Dataset
        		);
        	} else if(balcSe == "2") {
        	
        		// 금융기관
        		var fRow = this.ds_fnncInstt.findRow("FNNC_INSTT_CODE",this.ds_incExpElseCashDetail.getColumn(0,"BANK"));
        		var fnncInsttNm = "";
        		if(fRow > -1) {
        			fnncInsttNm = this.ds_fnncInstt.getColumn(fRow, "FNNC_INSTT_CODE_NM");
        		}
        		//trace(fRow + "|" + fnncInsttNm);
        	
        		// 지출
        		arrSancData = [
        			 "[지출]"+this.ds_incExpElseCashMastr.getColumn(currow,"SUMRY")							//결재제목
        			,this.ds_incExpElseCashMastr.getColumn(currow,"OPERT_DE").substr(0,4)	//결의연도
        			,this.fn_dateStr(this.ds_incExpElseCashMastr.getColumn(currow,"OPERT_DE"),".")	//발의일자
        			,""	//계약일자
        			,""	//원인행위부등기
        			,""	//검수일자
        			,""	//채무확정액등기
        			,""	//재고분개장등기
        			,"수입지출외"	//관
        			,""	//항
        			,""	//세항
        			,""	//목
        			,this.fn_dateStr(this.ds_incExpElseCashMastr.getColumn(currow,"OPERT_DE"),".")	//지출예산통제원등기
        			,this.fn_dateStr(this.ds_incExpElseCashMastr.getColumn(currow,"INC_EXP_REGIST_DE"),".")	//자금지출기록부등기
        			,""	//지급번호
        			,"일금 "+this.fn_numToHangul(this.ds_incExpElseCashMastr.getColumn(currow,"EXPNDTR_AMOUNT")) +"원정 \\"+this.comUtils.formatComma(this.ds_incExpElseCashMastr.getColumn(currow,"EXPNDTR_AMOUNT"))	//총금액
        			,""	//공급가액
        			,""	//부가가치세
        			,this.ds_incExpElseCashMastr.getColumn(currow,"SUMRY")	//적요
        			,this.ds_incExpElseCashDetail.getColumn(0,"CREDTR")		//채주_성명
        			,""	//영수일자
        			,""	//영수자_성명
        			,fnncInsttNm											//금융기관
        			,this.ds_incExpElseCashDetail.getColumn(0,"ACNUTNO")	//계좌번호
        			,this.ds_incExpElseCashDetail.getColumn(0,"CREDTR")		//송금자_성명
        			,sumry
        		];
        		
        		//trace(arrSancData.join("|"));
        		
        		this.fn_callHandySanc2(
        			 this						// context
        			,'0000000057'				// formId
        			,this.ds_incExpElseCashMastr		// misDataset
        			,"TBACC_INC_EXP_ELSE_CASH_MASTR"		// tableName
        			,["SN"]	// tableKey
        			,arrSancData				// arrSancData
        		);
        	}
        }

        /***********************************************************************
        * 사용자 정의 함수
        ************************************************************************/
        /*
         * 함수명  	: ds_incExpElseCashMastr_onrowposchanged
         * 설명 		: 마스터 행 변경시 상세 조회
         * params  		: 
         * return Type 	: None
         * 사용법		: ds_incExpElseCashMastr_onrowposchanged();
         */
        this.ds_incExpElseCashMastr_onrowposchanged = function(obj,e)
        {
        	this.ds_cond.setColumn(0, "OPERT_DE", obj.getColumn(e.newrow, "OPERT_DE"));
        	this.ds_cond.setColumn(0, "SN", obj.getColumn(e.newrow, "SN"));
        	this.fn_transaction("incExpElseCashDetailList");	
        	
        	if(e.newrow > -1) {
        		if(['1','4','5'].indexOf(obj.getColumn(e.newrow, "SANCTN_KND")) > -1) {
        			this.grd_incExpElseCashDetail.set_readonly(true);
        			this.btn_addAll.set_enable(false);
        			this.btn_addDtls.set_enable(false);
        			this.btn_delDtls.set_enable(false);
        			this.btn_resetDtls.set_enable(false);
        		
        			this.btn_uploadFiles.set_enable(false);
        			this.btn_delFiles.set_enable(false);
        		} else {
        			this.grd_incExpElseCashDetail.set_readonly(false);
        			this.btn_addAll.set_enable(true);
        			this.btn_addDtls.set_enable(true);
        			this.btn_delDtls.set_enable(true);
        			this.btn_resetDtls.set_enable(true);
        			
        			this.btn_uploadFiles.set_enable(true);
        			this.btn_delFiles.set_enable(true);
        		}
        		
        		// 첨부파일
        		this.ds_cond_file.clearData();
        		var nRow = this.ds_cond_file.addRow();
        		this.ds_cond_file.setColumn(nRow, "FILE_SN",   obj.getColumn(e.newrow, "FILE_SN"));
        		
        		this.fn_transaction("selectAtchFile");
        	}				
        }

        /*
         * 함수명  	: btn_onclick
         * 설명 		: 버튼 클릭 이벤트 처리
         * params  		: 
         * return Type 	: None
         * 사용법		: btn_onclick();
         */
        this.btn_onclick = function(obj,e)
        {
        	switch(obj.name) {
        		case "btn_add":				// 마스터 행추가
        			var nRow = this.ds_incExpElseCashMastr.addRow();
        			this.ds_incExpElseCashMastr.setColumn(nRow, "OPERT_DE", this.dateUtils.today());
        			this.ds_incExpElseCashMastr.setColumn(nRow, "BALC_SE", this.ds_cond.getColumn(0, "BALC_SE"));
        			break;
        		case "btn_del":				// 마스터 행삭제
        			if(this.ds_incExpElseCashMastr.getRowCount() > 0) {	
        				if (this.gfn_message("confirm.삭제여부") ) {
        					this.ds_incExpElseCashMastr.deleteRow(this.ds_incExpElseCashMastr.rowposition);
        				}
        			}
        			break;
        		case "btn_reset":			// 마스터 리셋
        			if(this.gfn_message("confirm.취소여부") ){
        				this.ds_incExpElseCashMastr.reset();
        				this.ds_incExpElseCashMastr.applyChange();
        			}	
        			break;
        		case "btn_addDtls":			// 상세 행추가
        			var currow = this.ds_incExpElseCashMastr.rowposition;
        		
        			if(currow == -1) {
        				this.gfn_message("info.처리불가","수입지출외현금내역이 선택되지 않았습니다.");
        				return;
        			}
        			
        			//if(this.comUtils.isDatasetUpdated(this.ds_incExpElseCashMastr)) {
        			if( this.ds_incExpElseCashMastr.getColumn(this.ds_incExpElseCashMastr.rowposition, "SN") == null || this.ds_incExpElseCashMastr.getColumn(this.ds_incExpElseCashMastr.rowposition, "SN") == 0 ){
        				this.gfn_message("info.처리불가","수입지출외현금내역을 먼저 저장해주십시오.");
        				return;
        			}
        			
        			if(this.comUtils.isNullEmpty(this.ds_incExpElseCashMastr.getColumn(currow, "BALC_SE"))) {
        				this.gfn_message("info.처리불가","수입/지출 구분이 선택되지 않았습니다.");
        				return;
        			}
        			
        			var nRow = this.ds_incExpElseCashDetail.addRow();
        			
        			// 신규 등록이 아닌경우 키값 입력
        			if(this.ds_incExpElseCashMastr.getRowType(currow) != Dataset.ROWTYPE_INSERT) {
        				this.ds_incExpElseCashDetail.setColumn(nRow, "SN", this.ds_incExpElseCashMastr.getColumn(currow, "SN"));
        			}
        			
        			this.ds_incExpElseCashDetail.setColumn(nRow, "OPERT_DE", this.ds_incExpElseCashMastr.getColumn(currow, "OPERT_DE"));
        			break;
        		case "btn_delDtls":			// 상세 행삭제
        			if(this.ds_incExpElseCashDetail.getRowCount() > 0) {	
        				if (this.gfn_message("confirm.삭제여부") ) {
        					this.ds_incExpElseCashDetail.deleteRow(this.ds_incExpElseCashDetail.rowposition);
        					this.ds_incExpElseCashMastr.setColumn(this.ds_incExpElseCashMastr.rowposition, "INCME_AMOUNT", this.ds_incExpElseCashDetail.getSum("INCME_AMOUNT"));
        					this.ds_incExpElseCashMastr.setColumn(this.ds_incExpElseCashMastr.rowposition, "EXPNDTR_AMOUNT", this.ds_incExpElseCashDetail.getSum("EXPNDTR_AMOUNT"));
        				}
        			}
        			break;
        		case "btn_resetDtls":		// 상세 리셋
        			if(this.gfn_message("confirm.취소여부") ){
        				this.ds_incExpElseCashDetail.reset();
        				this.ds_incExpElseCashDetail.applyChange();
        				this.ds_incExpElseCashMastr.setColumn(this.ds_incExpElseCashMastr.rowposition, "INCME_AMOUNT", this.ds_incExpElseCashDetail.getSum("INCME_AMOUNT"));
        					this.ds_incExpElseCashMastr.setColumn(this.ds_incExpElseCashMastr.rowposition, "EXPNDTR_AMOUNT", this.ds_incExpElseCashDetail.getSum("EXPNDTR_AMOUNT"));
        			}	
        			break;
        		case "btn_cyfd":			// 전기이월
        			if(confirm(this.ds_cond.getColumn(0, "CYFD_DE").substr(0,4)+"년 전기이월 자료를 생성하시겠습니까?\r\n기등록된 이월 데이터는 삭제됩니다.")) {
        				this.fn_transaction("incExpSyfd");
        			} 
        		
        			break;
        		case "btn_addAll":			// 일괄등록
        			
        			if(this.ds_incExpElseCashMastr.rowposition == -1) {
        				this.gfn_message("info.처리불가","수입지출외현금내역이 선택되지 않았습니다.");
        				return;
        			}
        			
        			if(this.comUtils.isNullEmpty(this.ds_incExpElseCashMastr.getColumn(this.ds_incExpElseCashMastr.rowposition, "BALC_SE"))) {
        				this.gfn_message("info.처리불가","수입/지출 구분이 선택되지 않았습니다.");
        				return;
        			}
        			
        			var arg = {
        				targetDs : this.ds_import,
        				headSet : false,
        				callBack : function () {
        				
        					// 엑셀 업로드 데이터 입력
        					for(i = 0; i < this.ds_import.getRowCount(); i++) {
        						var nRow = this.ds_incExpElseCashDetail.addRow();

        						this.ds_incExpElseCashDetail.setColumn(nRow, "SN", this.ds_incExpElseCashMastr.getColumn(this.ds_incExpElseCashMastr.rowposition, "SN"));
        						// 일자
        						this.ds_incExpElseCashDetail.setColumn(nRow, "OPERT_DE", this.ds_incExpElseCashMastr.getColumn(this.ds_incExpElseCashMastr.rowposition, "OPERT_DE"));
        						// 과목코드
        						var fRow = this.ds_sbjectCode.findRow("SBJECT_CODE_NM", this.ds_import.getColumn(i, "Column0"));
        						if(fRow > -1) {
        							this.ds_incExpElseCashDetail.setColumn(nRow, "SBJECT_CODE", this.ds_sbjectCode.getColumn(fRow,"SBJECT_CODE"));
        						}
        						// 지급은행
        						var fRow2 = this.ds_fnncInstt.findRow("FNNC_INSTT_CODE_NM", this.ds_import.getColumn(i, "Column1"));
        						if(fRow2 > -1) {
        							this.ds_incExpElseCashDetail.setColumn(nRow, "BANK", this.ds_fnncInstt.getColumn(fRow2, "FNNC_INSTT_CODE"));
        						}
        						
        						this.ds_incExpElseCashDetail.setColumn(nRow, "ACNUTNO"	, this.ds_import.getColumn(i, "Column2"));	// 계좌번호
        						this.ds_incExpElseCashDetail.setColumn(nRow, "CREDTR"	, this.ds_import.getColumn(i, "Column3"));	// 채주
        						this.ds_incExpElseCashDetail.setColumn(nRow, "SUMRY"	, this.ds_import.getColumn(i, "Column4"));	// 적요
        						
        						// 금액
        						if(this.ds_incExpElseCashMastr.getColumn(this.ds_incExpElseCashMastr.rowposition, "BALC_SE") == "1") {
        							this.ds_incExpElseCashDetail.setColumn(nRow, "INCME_AMOUNT"		, this.ds_import.getColumn(i, "Column5"));
        							this.ds_incExpElseCashDetail.setColumn(nRow, "EXPNDTR_AMOUNT"	, "0");
        						} else if(this.ds_incExpElseCashMastr.getColumn(this.ds_incExpElseCashMastr.rowposition, "BALC_SE") == "2") {
        							this.ds_incExpElseCashDetail.setColumn(nRow, "INCME_AMOUNT"		, "0");
        							this.ds_incExpElseCashDetail.setColumn(nRow, "EXPNDTR_AMOUNT"	, this.ds_import.getColumn(i, "Column5"));
        						}
        					}
        					
        				}
        			};
        			
        			this.ds_import.clearData();
        			this.fn_importExcel(arg);
        		
        			break;
        		case "btn_TmpDn":			// 양식다운로드
        		
        			var args = [
        				 { sheetName: "일괄등록_양식", grid: this.grd_tmp 			}
        				,{ sheetName: "과목"		 , grid: this.grd_sbjectCode	}
        				,{ sheetName: "은행명"		 , grid: this.grd_fnncInstt		}
        			];
        			
        			this.fn_exportExcel(args, "upload_sample");
        						
        			break;
        		case "btn_excelDn":
        			this.gfn_exportExcel(this.grd_incExpElseCashMastr, "Excel File Download");
        			break;
        		case "btn_excelDnDtls":
        			this.gfn_exportExcel(this.grd_incExpElseCashDetail, "Excel File Download");
        			break;
        			
        		// 업로드
        		case  "btn_uploadFiles" :
        			// 첨부파일 업로드(fileSn 자동채번 / 첨부파일 Master에 ROW추가 / 파일 업로드 및 자동저장 / 테이블에 fileSn반영 / 데이터셋에 fileSn반영, 단 신규 ROW가 아닐경우 ROWTYPE은 유지)
        			this.fn_autoFileSn(
        				 "MIS"									// 대분류   (SYS_SE)
        				,"ACC"									// 업무구분 (JOB_SE)
        				, this.File_UpDownManager				// fileManager 오브젝트
        				, this.ds_fileList						// fileObject
        				, this.ds_incExpElseCashMastr			// fileSn을 불러오거나 반영해야 하는 컬럼
        				, "TBACC_INC_EXP_ELSE_CASH_MASTR"		// fileSn을 저장할 테이블
        				, "FILE_SN"								// fileSn 컬럼명이 다를 경우를 대비
        				, ["SN","OPERT_DE"]						// fileSn을 저장할 테이블의 PK (FileSn 확인 및 자동반영목적)
        			);
        		break;
        		
        		// 삭제
        		case  "btn_delFiles" :
        			var findRow = this.ds_fileList.findRow("CHK", "1");
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
        			var sController  = "hsco/mis/mis/MIS000000/deleteFile.do";
        			var sInDatasets  = "input1=ds_fileList:U";
        			var sOutDatasets = "ds_fileList=output1";
        			
        			Ex.core.tran(this, strSvcId, sController, sInDatasets, sOutDatasets);
        		break;
        		
        		// 다운로드
        		case  "btn_downFiles" :
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
        			if(this.ds_fileList.getRowCount() == 0) {
        				this.gfn_message("err.파일.다운로드.정보없음");
        				return false;
        			}
        		break;
        	}
        }

        /*
         * 함수명  	: grd_oncellclick
         * 설명 		: 그리드 셀 클릭 이벤트 처리
         * params  		: 
         * return Type 	: None
         * 사용법		: grd_oncellclick();
         */
        this.grd_incExpElseCashMastr_oncellclick = function(obj,e)
        {	
        	if(e.cell == 1) {
        		var SANCTN_NO = this.ds_incExpElseCashMastr.getColumn(this.ds_incExpElseCashMastr.rowposition, "SANCTN_NO");
        		if(!this.comUtils.isNullEmpty(SANCTN_NO) && SANCTN_NO > 0){
        			this.fn_InnerSactionPop(SANCTN_NO);
        		}
        	}
        }

        this.grd_incExpElseCashMastr_onexpandup = function(obj,e)
        {
        	if(e.cell == 6) {
        		if(['0','2','3'].indexOf(this.ds_incExpElseCashMastr.getColumn(this.ds_incExpElseCashMastr.rowposition, "SANCTN_KND")) > -1) {
        			this.gfn_popup("btn_bcncPopup", "", "", "", "", "mis_ctr::CTR010101_P02.xfdl", "fn_popupCallBack", true);
        		}
        	}
        }

        
        /*
         * 함수명  	: fn_getMastrBalcSe
         * 설명 		: 수입지출외현금내역 수지구분
         * params  		: 
         * return Type 	: None
         * 사용법		: fn_getMastrBalcSe();
         */
        this.fn_getMastrBalcSe = function()
        {
        	return this.ds_incExpElseCashMastr.getColumn(this.ds_incExpElseCashMastr.rowposition, "BALC_SE");
        }

        /*
         * 함수명  	: ds_incExpElseCashDetail_oncolumnchanged
         * 설명 		: 수입지출외현금내역 수입액,지급액 합계 계산
         * params  		: 
         * return Type 	: None
         * 사용법		: ds_incExpElseCashDetail_oncolumnchanged();
         */
        this.ds_incExpElseCashDetail_oncolumnchanged = function(obj,e)
        {
        	switch(e.columnid) {
        		case "INCME_AMOUNT":
        			this.ds_incExpElseCashMastr.setColumn(this.ds_incExpElseCashMastr.rowposition, "INCME_AMOUNT", obj.getSum("INCME_AMOUNT"));
        			break;
        		case "EXPNDTR_AMOUNT":
        			this.ds_incExpElseCashMastr.setColumn(this.ds_incExpElseCashMastr.rowposition, "EXPNDTR_AMOUNT", obj.getSum("EXPNDTR_AMOUNT"));
        			break;
        	}
        }

        this.ds_incExpElseCashDetail_onrowsetchanged = function(obj,e)
        {
        	//this.ds_incExpElseCashMastr.setColumn(this.ds_incExpElseCashMastr.rowposition, "INCME_AMOUNT", obj.getSum("INCME_AMOUNT"));
        	//this.ds_incExpElseCashMastr.setColumn(this.ds_incExpElseCashMastr.rowposition, "EXPNDTR_AMOUNT", obj.getSum("EXPNDTR_AMOUNT"));
        }

        
        this.fn_exportExcel = function(arrTarget,sFileName)
        {
        	this.setWaitCursor(true,true);
        	var sExportObjName = "obj_commonExport";
        	var exportObj = new ExcelExportObject();
        	var dToday = new Date();
        	var sSheetName;
        	var sSvcUrl = application.services["svcurl"].url+"XExportImport.do";
        	var _param = "";
        	exportObj.set_name(sExportObjName);
        	exportObj.addEventHandler("onsuccess", this._gfn_exportExcelEnd, this);
        	exportObj.addEventHandler("onerror", this._gfn_exportExcelEndError, this);
        	exportObj.clearExportItems(nexacro.ExportTypes.EXCEL2007);
        	
        	
        	if(!this.comUtils.isNullEmpty(sFileName)){
        		sFileName = dToday.getTime() + "_" + sFileName;
        	}else{
        		sFileName = dToday.getTime();
        	}
        	
        	for(i = 0 ; i < arrTarget.length; i++) {
        		exportObj.addExportItem(nexacro.ExportItemTypes.GRID, arrTarget[i].grid, arrTarget[i].sheetName + "!A1","allband","allrecord","suppress","onlyvalue","none","color,background","both");
        	}
        	
        	exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);	
        	exportObj.set_exportfilename(sFileName);
        	exportObj.set_exporturl(sSvcUrl);

        	var result = exportObj.exportData("cntn_file=N");
        }

        

        this.fn_importExcel = function(arg)
        {
        	var importObj, objNm = "_common_excel_import";
        	
        	importObj = new nexacro.ExcelImportObject(objNm, this);
        	this[objNm] = importObj;
        	importObj.set_importtype(nexacro.ImportTypes.EXCEL);
        	importObj.addEventHandler("onsuccess", this._gfn_excelImport_onsuccess, this);
        	importObj.addEventHandler("onerror", this._gfn_excelImport_onerror, this);	
        	importObj.set_importurl(application.services["svcurl"].url + "XImport.do");
        	
        	importObj.user_callBack = null;
        	importObj.user_targetGrid = null;
            
            var objTargetDs = null;

            if(arg.targetDs) {
        		objTargetDs = arg.targetDs.name;
            } else if (arg.targetGrid) {
        		importObj.user_targetGrid = arg.targetGrid.id;
                objTargetDs = arg.targetGrid.getBindDataset().name;
            }

            if (typeof arg.callBack == "function") {
        		importObj.user_callBack = arg.callBack;
            }

        
        	importObj.importData("", "[command=getsheetdata;output=outDs;Body=!A2;]", "["+objTargetDs+"=outDs]","");	

        }

        this.ds_incExpElseCashMastr_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "BALC_SE") {
        		if(e.newvalue == "1") {
        			for(i = 0; i < this.ds_incExpElseCashDetail.getRowCount(); i++) {
        				this.ds_incExpElseCashDetail.setColumn(i, "EXPNDTR_AMOUNT", "0");
        			}
        		} else if(e.newvalue == "2") {
        			for(i = 0; i < this.ds_incExpElseCashDetail.getRowCount(); i++) {
        				this.ds_incExpElseCashDetail.setColumn(i, "INCME_AMOUNT", "0");
        			}
        		}
        	}
        }

        /*
         * 함수명  	: ds_incExpElseCashMastr_canrowposchange
         * 설명 		: 수입지출외현금 행 변경 전처리
         * params  		: 
         * return Type 	: None
         * 사용법		: ds_incExpElseCashMastr_canrowposchange();
         */
        this.ds_incExpElseCashMastr_canrowposchange = function(obj,e)
        {
        	if(this.comUtils.isDatasetUpdated(this.ds_incExpElseCashDetail)) {
        		if(this.gfn_message("comm.행위여부","상세내역에 변경사항이 있습니다. 저장하지 않고 계속 진행") ){
        			this.ds_incExpElseCashDetail.reset();
        		} else {
        			return false;
        		}
        	}
        	return true;
        }

        this.fn_get_imgUrl = function(sanctnKnd)
        {
        	return this.gfn_getSanctnImgUrl(sanctnKnd);
        }

        /**********************************************************************
        * 첨부파일 관련
        ***********************************************************************/

        this.grd_cmmnAtchmnfl_onheadclick = function(obj,e)
        {
        	if(e.col == "0") {
        		this.gfn_setGridCheckAll(obj, e);
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_incExpElseCashMastr.addEventHandler("onrowposchanged", this.ds_incExpElseCashMastr_onrowposchanged, this);
            this.ds_incExpElseCashMastr.addEventHandler("oncolumnchanged", this.ds_incExpElseCashMastr_oncolumnchanged, this);
            this.ds_incExpElseCashMastr.addEventHandler("canrowposchange", this.ds_incExpElseCashMastr_canrowposchange, this);
            this.ds_incExpElseCashDetail.addEventHandler("oncolumnchanged", this.ds_incExpElseCashDetail_oncolumnchanged, this);
            this.ds_incExpElseCashDetail.addEventHandler("onrowsetchanged", this.ds_incExpElseCashDetail_onrowsetchanged, this);
            this.ds_acc004.addEventHandler("onrowposchanged", this.ds_frmtnPd_onrowposchanged, this);
            this.ds_com028.addEventHandler("onrowposchanged", this.ds_frmtnPd_onrowposchanged, this);
            this.ds_acc004forGrid.addEventHandler("onrowposchanged", this.ds_frmtnPd_onrowposchanged, this);
            this.addEventHandler("onload", this.ACC020502_onload, this);
            this.grd_incExpElseCashMastr.addEventHandler("onexpandup", this.grd_incExpElseCashMastr_onexpandup, this);
            this.grd_incExpElseCashMastr.addEventHandler("oncellclick", this.grd_incExpElseCashMastr_oncellclick, this);
            this.btn_addDtls.addEventHandler("onclick", this.btn_onclick, this);
            this.btn_delDtls.addEventHandler("onclick", this.btn_onclick, this);
            this.btn_resetDtls.addEventHandler("onclick", this.btn_onclick, this);
            this.btn_addAll.addEventHandler("onclick", this.btn_onclick, this);
            this.btn_TmpDn.addEventHandler("onclick", this.btn_onclick, this);
            this.btn_cyfd.addEventHandler("onclick", this.btn_onclick, this);
            this.btn_excelDn.addEventHandler("onclick", this.btn_onclick, this);
            this.btn_excelDnDtls.addEventHandler("onclick", this.btn_onclick, this);
            this.btn_delFiles.addEventHandler("onclick", this.btn_onclick, this);
            this.btn_uploadFiles.addEventHandler("onclick", this.btn_onclick, this);
            this.btn_downFiles.addEventHandler("onclick", this.btn_onclick, this);
            this.grd_cmmnAtchmnfl.addEventHandler("onheadclick", this.grd_cmmnAtchmnfl_onheadclick, this);

        };

        this.loadIncludeScript("ACC020502.xfdl");

       
    };
}
)();
