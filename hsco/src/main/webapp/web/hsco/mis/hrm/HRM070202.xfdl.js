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
                this.set_name("HRM070202");
                this.set_classname("HRM070202");
                this.set_titletext("국내출장신청");
                this._setFormPosition(0,0,1059,735);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cond", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WHTHRC_AT\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GRP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"WHTHRC_AT\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_validation", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">BGNDE</Col><Col id=\"msgId\">조회시작일</Col><Col id=\"lengthChkGb\"/><Col id=\"nlength\"/><Col id=\"compId\">ds_cond</Col><Col id=\"notNull\">Y</Col><Col id=\"from\"/><Col id=\"to\"/><Col id=\"expr\"/></Row><Row><Col id=\"colId\">ENDDE</Col><Col id=\"msgId\">조회종료일</Col><Col id=\"lengthChkGb\"/><Col id=\"nlength\"/><Col id=\"compId\">ds_cond</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">ENDDE</Col><Col id=\"msgId\">조회기간 종료일^조회기간 시작일</Col><Col id=\"from\">BGNDE</Col><Col id=\"expr\"/></Row><Row><Col id=\"colId\">EMPNO</Col><Col id=\"compId\">ds_bsrpIndvdl</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">출장자</Col><Col id=\"PK\"/></Row><Row><Col id=\"compId\">ds_bsrpIndvdl</Col><Col id=\"colId\">DSTN_NM</Col><Col id=\"msgId\">목적지</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">MVMN_COURS</Col><Col id=\"compId\">ds_bsrpIndvdl</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">이동경로</Col><Col id=\"nlength\"/><Col id=\"type\"/><Col id=\"lengthChkGb\"/></Row><Row><Col id=\"colId\">BSRP_PURPS</Col><Col id=\"compId\">ds_bsrpIndvdl</Col><Col id=\"msgId\">출장목적</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">TFCMN_SE</Col><Col id=\"compId\">ds_bsrpIndvdl</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">교통수단</Col></Row><Row><Col id=\"colId\">BSRP_BGNDE</Col><Col id=\"compId\">ds_bsrpIndvdl</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">출장시작일</Col><Col id=\"from\"/><Col id=\"to\"/><Col id=\"expr\"/></Row><Row><Col id=\"colId\">BSRP_ENDDE</Col><Col id=\"compId\">ds_bsrpIndvdl</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">출장종료일</Col></Row><Row><Col id=\"compId\">ds_bsrpIndvdl</Col><Col id=\"colId\">BSRP_ENDDE</Col><Col id=\"msgId\">출장종료일자^출장시작일자</Col><Col id=\"from\">BSRP_BGNDE</Col></Row><Row><Col id=\"compId\">ds_bsrpIndvdl</Col><Col id=\"colId\">BSRP_BEGIN_TM</Col><Col id=\"msgId\">출장시작시각</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col><Col id=\"nlength\"/><Col id=\"lengthChkGb\"/><Col id=\"type\"/><Col id=\"from\"/><Col id=\"to\"/><Col id=\"expr\"/><Col id=\"func\"/></Row><Row><Col id=\"compId\">ds_bsrpIndvdl</Col><Col id=\"colId\">BSRP_END_TM</Col><Col id=\"msgId\">출장종료시각</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col><Col id=\"nlength\"/><Col id=\"lengthChkGb\"/><Col id=\"type\"/><Col id=\"from\"/><Col id=\"to\"/><Col id=\"expr\"/><Col id=\"func\"/></Row><Row><Col id=\"compId\">ds_bsrpIndvdl</Col><Col id=\"colId\">BUDGET_DEPT_CODE</Col><Col id=\"msgId\">예산부서</Col><Col id=\"PK\">[Undefined]</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">EXPENS_SE</Col><Col id=\"msgId\">경비구분</Col><Col id=\"notNull\">Y</Col><Col id=\"compId\">ds_indvdlExpens</Col></Row><Row><Col id=\"colId\">USE_EXPENS</Col><Col id=\"msgId\">사용경비</Col><Col id=\"notNull\">Y</Col><Col id=\"compId\">ds_indvdlExpens</Col></Row><Row><Col id=\"colId\">VHCLE_CODE</Col><Col id=\"compId\">ds_carAlcInfo</Col><Col id=\"msgId\">배차(차량명)</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">DSTN_NM</Col><Col id=\"compId\">ds_carAlcInfo</Col><Col id=\"msgId\">배차(행선지)</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">OPRAT_PURPS</Col><Col id=\"compId\">ds_carAlcInfo</Col><Col id=\"msgId\">배차(용무)</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">DRVER_EMPNO</Col><Col id=\"compId\">ds_carAlcInfo</Col><Col id=\"msgId\">배차(운전자)</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">CARALC_BGNDE</Col><Col id=\"compId\">ds_carAlcInfo</Col><Col id=\"msgId\">배차(시작일자)</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">CARALC_BEGIN_TM</Col><Col id=\"compId\">ds_carAlcInfo</Col><Col id=\"msgId\">배차(시작시각)</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">CARALC_ENDDE</Col><Col id=\"compId\">ds_carAlcInfo</Col><Col id=\"msgId\">배차(종료일자)</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">CARALC_END_TM</Col><Col id=\"compId\">ds_carAlcInfo</Col><Col id=\"msgId\">배차(종료시각)</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">FLWPSG_EMPNO</Col><Col id=\"msgId\">동승자(성명)</Col><Col id=\"compId\">ds_carAlcFlwpsgList</Col><Col id=\"notNull\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_hrm019", this);
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

            obj = new Dataset("ds_bsrpIndvdl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SANC_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WHTHRC_AT\" type=\"STRING\" size=\"256\"/><Column id=\"ORDTM_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_PURPS\" type=\"STRING\" size=\"256\"/><Column id=\"MVMN_COURS\" type=\"STRING\" size=\"256\"/><Column id=\"DSTN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CTY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TFCMN_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_BEGIN_TM\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_END_TM\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_DAYCNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BSRP_TM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"STAYNG_DAYCNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TRNSPORT_CT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"STAYNG_CT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEAL_CT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DAIL_CT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ACPLC_ACT_CT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ETC_EXPENS\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TRVCT_TOTAMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EXCCLC_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM_AT\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_STS\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_KND\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CARALC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_POSBL_AT\" type=\"STRING\" size=\"256\"/><Column id=\"VHCLE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DRVER_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"CANCL_AT\" type=\"STRING\" size=\"256\"/><Column id=\"DAIL_SUM_AMT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_hrm026", this);
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

            obj = new Dataset("ds_indvdlExpens", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EXPENS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DTLS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_EXPENS\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_hrm027", this);
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

            obj = new Dataset("ds_fileList", this);
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

            obj = new Dataset("ds_carAlcInfo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CARALC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DRVER_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"DRVER_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DRVER_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DRVER_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VHCLE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VHCLE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"VHCLE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CARALC_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"CARALC_BEGIN_TM\" type=\"STRING\" size=\"256\"/><Column id=\"CARALC_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"CARALC_END_TM\" type=\"STRING\" size=\"256\"/><Column id=\"DSTN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPRAT_PURPS\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_carAlcFlwpsgList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CARALC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"FLWPSG_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"FLWPSG_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DSTN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_PURPS\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_BEGIN_TM\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_END_TM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_bsrpTrvct", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GRAD_SE\" type=\"STRING\" size=\"256\"/><Column id=\"STAYNG_CT\" type=\"STRING\" size=\"256\"/><Column id=\"MEAL_CT\" type=\"STRING\" size=\"256\"/><Column id=\"DAIL_CT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_bsrpCty", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CTY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CTY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WHTHRC_AT\" type=\"STRING\" size=\"256\"/><Column id=\"DSTNC\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond_sub", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"CARALC_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond_sub2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_BEGIN_TM\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_END_TM\" type=\"STRING\" size=\"256\"/><Column id=\"WHTHRC_AT\" type=\"STRING\" size=\"256\"/><Column id=\"ORDTM_SE\" type=\"STRING\" size=\"256\"/><Column id=\"TFCMN_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_trvctCalcResult", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BSRP_DAYCNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"STAYNG_DAYCNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEAL_CT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DAIL_CT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BSRP_TM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DAIL_SUM_AMT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_hrm092", this);
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

            obj = new Dataset("ds_validation2", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">EMPNO</Col><Col id=\"compId\">ds_bsrpIndvdl</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">출장자</Col><Col id=\"PK\"/></Row><Row><Col id=\"compId\">ds_bsrpIndvdl</Col><Col id=\"colId\">DSTN_NM</Col><Col id=\"msgId\">목적지</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">MVMN_COURS</Col><Col id=\"compId\">ds_bsrpIndvdl</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">이동경로</Col><Col id=\"nlength\"/><Col id=\"type\"/><Col id=\"lengthChkGb\"/></Row><Row><Col id=\"colId\">BSRP_PURPS</Col><Col id=\"compId\">ds_bsrpIndvdl</Col><Col id=\"msgId\">출장목적</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">TFCMN_SE</Col><Col id=\"compId\">ds_bsrpIndvdl</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">교통수단</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Tab("tab_carAlc", "absolute", "0", null, null, "245", "549", "0", this);
            obj.set_taborder("146");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.style.set_showextrabutton("false");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tpg1", this.tab_carAlc);
            obj.set_text("배차정보");
            this.tab_carAlc.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label05", "absolute", "111", "133", "221", "27", null, null, this.tab_carAlc.tpg1);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Labelbg");
            this.tab_carAlc.tpg1.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label06", "absolute", "111", "159", "221", "27", null, null, this.tab_carAlc.tpg1);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Labelbg");
            this.tab_carAlc.tpg1.addChild(obj.name, obj);
            obj = new Static("sta_EMP01", "absolute", "5", "133", "107", "27", null, null, this.tab_carAlc.tpg1);
            obj.set_taborder("2");
            obj.set_text("시작일자 / 시각");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            this.tab_carAlc.tpg1.addChild(obj.name, obj);
            obj = new Static("sta_EMP02", "absolute", "5", "159", "107", "27", null, null, this.tab_carAlc.tpg1);
            obj.set_taborder("3");
            obj.set_text("종료일자 / 시각");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            this.tab_carAlc.tpg1.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label10", "absolute", "111", "29", "221", "27", null, null, this.tab_carAlc.tpg1);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Labelbg");
            this.tab_carAlc.tpg1.addChild(obj.name, obj);
            obj = new Calendar("cal_useDe", "absolute", "115", "136", "116", "21", null, null, this.tab_carAlc.tpg1);
            this.tab_carAlc.tpg1.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd ddd");
            obj.set_cssclass("cal_WF_Essential");
            obj = new Calendar("cal_endDe", "absolute", "115", "162", "116", "21", null, null, this.tab_carAlc.tpg1);
            this.tab_carAlc.tpg1.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd ddd");
            obj.set_cssclass("cal_WF_Essential");
            obj = new MaskEdit("msk_useTm", "absolute", "233", "136", "55", "21", null, null, this.tab_carAlc.tpg1);
            obj.set_taborder("7");
            obj.set_type("string");
            obj.set_mask("##:##");
            obj.set_cssclass("msk_WF_Essential");
            obj.style.set_align("center middle");
            this.tab_carAlc.tpg1.addChild(obj.name, obj);
            obj = new MaskEdit("msk_endTm", "absolute", "233", "162", "55", "21", null, null, this.tab_carAlc.tpg1);
            obj.set_taborder("8");
            obj.set_type("string");
            obj.set_mask("##:##");
            obj.set_cssclass("msk_WF_Essential");
            obj.style.set_align("center middle");
            this.tab_carAlc.tpg1.addChild(obj.name, obj);
            obj = new Static("sta_vhcle", "absolute", "5", "29", "107", "27", null, null, this.tab_carAlc.tpg1);
            obj.set_taborder("9");
            obj.set_text("차량명");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            this.tab_carAlc.tpg1.addChild(obj.name, obj);
            obj = new Static("sta_EMP04", "absolute", "5", "55", "107", "27", null, null, this.tab_carAlc.tpg1);
            obj.set_taborder("10");
            obj.set_text("행선지");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            this.tab_carAlc.tpg1.addChild(obj.name, obj);
            obj = new Static("sta_EMP06", "absolute", "5", "81", "107", "27", null, null, this.tab_carAlc.tpg1);
            obj.set_taborder("11");
            obj.set_text("용무");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            this.tab_carAlc.tpg1.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label08", "absolute", "111", "107", "221", "27", null, null, this.tab_carAlc.tpg1);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_Labelbg");
            this.tab_carAlc.tpg1.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label09", "absolute", "111", "81", "221", "27", null, null, this.tab_carAlc.tpg1);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_Labelbg");
            this.tab_carAlc.tpg1.addChild(obj.name, obj);
            obj = new Static("sta_WFDA_Label11", "absolute", "111", "55", "221", "27", null, null, this.tab_carAlc.tpg1);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Labelbg");
            this.tab_carAlc.tpg1.addChild(obj.name, obj);
            obj = new Static("sta_EMP08", "absolute", "5", "107", "107", "27", null, null, this.tab_carAlc.tpg1);
            obj.set_taborder("15");
            obj.set_text("운전자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            this.tab_carAlc.tpg1.addChild(obj.name, obj);
            obj = new Edit("edt_dstn", "absolute", "115", "58", "166", "21", null, null, this.tab_carAlc.tpg1);
            obj.set_taborder("16");
            obj.set_cssclass("edt_WF_Essential");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            this.tab_carAlc.tpg1.addChild(obj.name, obj);
            obj = new Edit("edt_busins", "absolute", "115", "85", "166", "21", null, null, this.tab_carAlc.tpg1);
            obj.set_taborder("17");
            obj.set_cssclass("edt_WF_Essential");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("300");
            this.tab_carAlc.tpg1.addChild(obj.name, obj);
            obj = new Edit("edt_vhcleRegistNo", "absolute", "115", "32", "166", "21", null, null, this.tab_carAlc.tpg1);
            obj.set_taborder("18");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.tab_carAlc.tpg1.addChild(obj.name, obj);
            obj = new Div("div_EMP_DRVER", "absolute", "115", "110", "166", "21", null, null, this.tab_carAlc.tpg1);
            obj.set_taborder("19");
            obj.set_async("false");
            obj.set_url("com::empno.xfdl");
            this.tab_carAlc.tpg1.addChild(obj.name, obj);
            obj = new Button("btn_carAlcList", "absolute", "260", "32", "21", "21", null, null, this.tab_carAlc.tpg1);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_Search");
            this.tab_carAlc.tpg1.addChild(obj.name, obj);
            obj = new Button("btn_vhcleList_bgn", "absolute", "289", "136", "38", "21", null, null, this.tab_carAlc.tpg1);
            obj.set_taborder("21");
            obj.set_text("선택");
            this.tab_carAlc.tpg1.addChild(obj.name, obj);
            obj = new Button("btn_vhcleList_end", "absolute", "289", "162", "38", "21", null, null, this.tab_carAlc.tpg1);
            obj.set_taborder("22");
            obj.set_text("선택");
            this.tab_carAlc.tpg1.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "0", "0", null, "5", "0", null, this.tab_carAlc.tpg1);
            obj.set_taborder("23");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.tab_carAlc.tpg1.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "33", null, "511", "5", null, "0", this.tab_carAlc.tpg1);
            obj.set_taborder("24");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.tab_carAlc.tpg1.addChild(obj.name, obj);
            obj = new Grid("grd_caralcFlwpsg", "absolute", "347", "29", null, null, "5", "5", this.tab_carAlc.tpg1);
            obj.set_taborder("25");
            obj.set_binddataset("ds_carAlcFlwpsgList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"75\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"55\"/><Column size=\"80\"/><Column size=\"55\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"소속\"/><Cell col=\"1\" text=\"사번\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"목적지\"/><Cell col=\"4\" text=\"출장목적\"/><Cell col=\"5\" colspan=\"2\" text=\"출장시작일시\"/><Cell col=\"7\" colspan=\"2\" text=\"출장종료일시\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" text=\"bind:DEPT_NM\" suppress=\"0\" suppressalign=\"middle\"/><Cell col=\"1\" text=\"bind:FLWPSG_EMPNO\"/><Cell col=\"2\" style=\"align: ;\" text=\"bind:EMPNM\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'show' : 'hide'\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:DSTN_NM\" tooltiptext=\"bind:DSTN_NM\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:BSRP_PURPS\" tooltiptext=\"bind:BSRP_PURPS\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:BSRP_BGNDE\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" text=\"bind:BSRP_BEGIN_TM\" mask=\"##:##\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:BSRP_ENDDE\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" text=\"bind:BSRP_END_TM\" mask=\"##:##\"/></Band></Format></Formats>");
            this.tab_carAlc.tpg1.addChild(obj.name, obj);
            obj = new Static("sta_useDtls00", "absolute", "347", "4", "74", "21", null, null, this.tab_carAlc.tpg1);
            obj.set_taborder("26");
            obj.set_text("동승자");
            obj.set_cssclass("sta_WF_Title02");
            this.tab_carAlc.tpg1.addChild(obj.name, obj);
            obj = new Button("btn_Add_R", "absolute", null, "5", "64", "19", "72", null, this.tab_carAlc.tpg1);
            obj.set_taborder("27");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Gridadd");
            this.tab_carAlc.tpg1.addChild(obj.name, obj);
            obj = new Button("btn_Del_R", "absolute", null, "5", "64", "19", "5", null, this.tab_carAlc.tpg1);
            obj.set_taborder("28");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Griddel");
            this.tab_carAlc.tpg1.addChild(obj.name, obj);
            obj = new Static("sta_useDtls01", "absolute", "5", "4", "90", "21", null, null, this.tab_carAlc.tpg1);
            obj.set_taborder("29");
            obj.set_text("배차기본정보");
            obj.set_cssclass("sta_WF_Title02");
            this.tab_carAlc.tpg1.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "8", "5", "200", null, null, this.tab_carAlc.tpg1);
            obj.set_taborder("30");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.tab_carAlc.tpg1.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", null, "4", "5", "200", "0", null, this.tab_carAlc.tpg1);
            obj.set_taborder("31");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.tab_carAlc.tpg1.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", "24", null, "5", "0", null, this.tab_carAlc.tpg1);
            obj.set_taborder("32");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.tab_carAlc.tpg1.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "332", "0", "15", null, null, "0", this.tab_carAlc.tpg1);
            obj.set_taborder("33");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.tab_carAlc.tpg1.addChild(obj.name, obj);
            obj = new Button("btn_deleteCarAlc", "absolute", "294", "5", "38", "19", null, null, this.tab_carAlc.tpg1);
            obj.set_taborder("35");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Process");
            this.tab_carAlc.tpg1.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "0", null, "33", "28", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Box");
            this.addChild(obj.name, obj);
            obj = new Static("sta_gnfdDe", "absolute", "15", "6", "64", "19", null, null, this.div_search);
            obj.set_taborder("0");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_bgnde1", "absolute", "79", "6", "110", "19", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Essential");
            obj.set_enableevent("true");
            obj = new Calendar("cal_bgnde2", "absolute", "207", "6", "110", "19", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Essential");
            obj.set_enableevent("true");
            obj = new Static("sta_empnm", "absolute", "594", "6", "51", "19", null, null, this.div_search);
            obj.set_taborder("3");
            obj.set_text("출장자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_purps", "absolute", "332", "6", "62", "19", null, null, this.div_search);
            obj.set_taborder("6");
            obj.set_text("출장부서");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_purps", "absolute", "645", "6", "142", "19", null, null, this.div_search);
            obj.set_taborder("7");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "317", "0", "15", "33", null, null, this.div_search);
            obj.set_taborder("15");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "189", "6", "18", "19", null, null, this.div_search);
            obj.set_taborder("24");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("div_DeptComp", "absolute", "409", "5", "170", "21", null, null, this.div_search);
            obj.set_taborder("30");
            obj.set_async("false");
            obj.set_url("com::deptCode.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "394", "0", "15", "33", null, null, this.div_search);
            obj.set_taborder("31");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "579", "0", "15", "33", null, null, this.div_search);
            obj.set_taborder("32");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "1031", "0", "15", "735", null, null, this);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", null, "0", "13", "735", "0", null, this);
            obj.set_taborder("6");
            obj.set_text("스\r\n크\r\n롤\r\n13");
            obj.set_visible("false");
            obj.style.set_background("#d07b173c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "0", "33", null, "10", "28", null, this);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "62", "1031", "5", null, null, this);
            obj.set_taborder("8");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bsrpDtls01", "absolute", "0", "43", "135", "19", null, null, this);
            obj.set_taborder("15");
            obj.set_text("개인별 관외출장내역");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_indvdl", "absolute", "0", "67", null, null, "28", "254", this);
            obj.set_taborder("17");
            obj.set_binddataset("ds_bsrpIndvdl");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"nWhthrc\"><Columns><Column size=\"30\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"230\"/><Column size=\"300\"/><Column size=\"130\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"결재상태\"/><Cell col=\"2\" rowspan=\"2\" text=\"등록구분\"/><Cell col=\"3\" colspan=\"2\" text=\"부서명\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"사원번호\"/><Cell col=\"6\" rowspan=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"목적지\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"이동경로\"/><Cell col=\"8\" rowspan=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"교통수단\"/><Cell col=\"9\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"시작일자\"/><Cell col=\"10\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"시작시각\"/><Cell col=\"11\" text=\"출장일수\"/><Cell col=\"12\" rowspan=\"2\" text=\"출장시간\"/><Cell col=\"13\" text=\"교통비\"/><Cell col=\"14\" text=\"식비\"/><Cell col=\"15\" text=\"현지활동비\"/><Cell col=\"16\" text=\"여비총액\"/><Cell col=\"17\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"예산부서\"/><Cell row=\"1\" col=\"3\" text=\"직종\"/><Cell row=\"1\" col=\"4\" text=\"직급\"/><Cell row=\"1\" col=\"5\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"사원명\"/><Cell row=\"1\" col=\"7\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"출장목적\"/><Cell row=\"1\" col=\"9\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"종료일자\"/><Cell row=\"1\" col=\"10\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"종료시각\"/><Cell row=\"1\" col=\"11\" text=\"숙박일수\"/><Cell row=\"1\" col=\"13\" text=\"숙박비\"/><Cell row=\"1\" col=\"14\" text=\"일비\"/><Cell row=\"1\" col=\"15\" text=\"기타경비\"/><Cell row=\"1\" col=\"16\" text=\"정산금액\"/><Cell row=\"1\" col=\"17\" text=\"결의번호\"/></Band><Band id=\"body\" style=\"cellbackground2:#fffff2ff;\"><Cell rowspan=\"2\" displaytype=\"expr:['0','2','3'].indexOf(SANCTN_STS) &gt; -1 ? &quot;checkbox&quot; : &quot;none&quot;\" style=\"line:2 solid silver,1 solid #ddddddff;selectline:2 solid silver,1 solid #ddddddff;\" text=\"bind:SANC_CHK\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"image\" style=\"line:2 solid silver,1 solid #ddddddff;selectline:2 solid silver,1 solid #ddddddff;\" text=\"expr:comp.parent.fn_get_imgUrl(SANCTN_STS)\"/><Cell col=\"2\" rowspan=\"2\" style=\"line:2 solid silver,1 solid #ddddddff;selectline:2 solid silver,1 solid #ddddddff;\" text=\"expr:CANCL_AT == '1' ? '취소등록' : '일반등록'\"/><Cell col=\"3\" colspan=\"2\" text=\"bind:DEPT_NM\"/><Cell col=\"5\" text=\"bind:EMPNO\"/><Cell col=\"6\" rowspan=\"2\" edittype=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'normal' : 'none'\" style=\"align:left;line:2 solid silver,1 solid #ddddddff;selectline:2 solid silver,1 solid #ddddddff;\" text=\"bind:DSTN_NM\" editlimit=\"100\" editdisplay=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'display' : 'edit'\" editlengthunit=\"ascii\"/><Cell col=\"7\" edittype=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'normal' : 'none'\" style=\"align:left;\" text=\"bind:MVMN_COURS\" editlimit=\"200\" editdisplay=\"expr:UPDATE_POSBL_AT == '1' ? 'display' : 'edit'\" editlengthunit=\"ascii\"/><Cell col=\"8\" rowspan=\"2\" displaytype=\"combo\" edittype=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'combo' : 'none'\" style=\"line:2 solid silver,1 solid #ddddddff;selectline:2 solid silver,1 solid #ddddddff;\" text=\"bind:TFCMN_SE\" combodataset=\"ds_hrm026\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodisplaynulltext=\"선택\" combodisplay=\"expr:CONFM_AT == '1' ? 'edit' : UPDATE_POSBL_AT == '1' ? 'display' : 'edit'\"/><Cell col=\"9\" displaytype=\"date\" edittype=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'date' : 'none'\" style=\"align:center;\" text=\"bind:BSRP_BGNDE\" calendardisplay=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'display' : 'edit'\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" edittype=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'mask' : 'none'\" style=\"align:center;\" text=\"bind:BSRP_BEGIN_TM\" mask=\"##:##\" editdisplay=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'display' : 'edit'\" editlimitbymask=\"both\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'masknumber' : 'none'\" style=\"align:right;padding: ;\" text=\"bind:BSRP_DAYCNT\" mask=\"!##0\" editdisplay=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'display' : 'edit'\"/><Cell col=\"12\" rowspan=\"2\" displaytype=\"number\" edittype=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'masknumber' : 'none'\" style=\"align:right;padding: ;line:2 solid silver,1 solid #ddddddff;selectline:2 solid silver,1 solid #ddddddff;\" text=\"bind:BSRP_TM\" mask=\"!####0\" editdisplay=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'display' : 'edit'\" editlengthunit=\"utf8\"/><Cell col=\"13\" displaytype=\"number\" edittype=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'masknumber' : 'none'\" style=\"align:right;\" text=\"bind:TRNSPORT_CT\" mask=\"!###,###,###,###,##0\" editdisplay=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'display' : 'edit'\"/><Cell col=\"14\" displaytype=\"number\" edittype=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'masknumber' : 'none'\" style=\"align:right;\" text=\"bind:MEAL_CT\" mask=\"!###,###,###,###,##0\" editdisplay=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'display' : 'edit'\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ACPLC_ACT_CT\" mask=\"!###,###,###,###,##0\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TRVCT_TOTAMT\" mask=\"!###,###,###,###,##0\"/><Cell col=\"17\" text=\"bind:BUDGET_DEPT_NM\" expandshow=\"expr:CONFM_AT == '1' ? 'hide' : UPDATE_POSBL_AT == '1' ? 'show' : 'hide'\"/><Cell row=\"1\" col=\"3\" style=\"line:2 solid silver,1 solid #ddddddff;selectline:2 solid silver,1 solid #ddddddff;\" text=\"bind:JSSFC_NM\"/><Cell row=\"1\" col=\"4\" style=\"line:2 solid silver,1 solid #ddddddff;selectline:2 solid silver,1 solid #ddddddff;\" text=\"bind:CLSF_NM\"/><Cell row=\"1\" col=\"5\" style=\"line:2 solid silver,1 solid #ddddddff;selectline:2 solid silver,1 solid #ddddddff;\" text=\"bind:EMPNM\" expandshow=\"expr:CONFM_AT == '1' ? 'hide' : dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'show' : 'hide'\"/><Cell row=\"1\" col=\"7\" edittype=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'normal' : 'none'\" style=\"align:left;line:2 solid silver,1 solid #ddddddff;selectline:2 solid silver,1 solid #ddddddff;\" text=\"bind:BSRP_PURPS\" editlimit=\"200\" editdisplay=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'display' : 'edit'\" editlengthunit=\"ascii\"/><Cell row=\"1\" col=\"9\" displaytype=\"date\" edittype=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'date' : 'none'\" style=\"align:center;line:2 solid silver,1 solid #ddddddff;selectline:2 solid silver,1 solid #ddddddff;\" text=\"bind:BSRP_ENDDE\" calendardisplay=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'display' : 'edit'\" calendardisplaynulltype=\"none\"/><Cell row=\"1\" col=\"10\" edittype=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'mask' : 'none'\" style=\"align:center;line:2 solid silver,1 solid #ddddddff;selectline:2 solid silver,1 solid #ddddddff;\" text=\"bind:BSRP_END_TM\" mask=\"##:##\" editdisplay=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'display' : 'edit'\" editlimitbymask=\"both\"/><Cell row=\"1\" col=\"11\" displaytype=\"number\" edittype=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'masknumber' : 'none'\" style=\"align:right;padding: ;line:2 solid silver,1 solid #ddddddff;selectline:2 solid silver,1 solid #ddddddff;\" text=\"bind:STAYNG_DAYCNT\" mask=\"!##0\" editdisplay=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'display' : 'edit'\"/><Cell row=\"1\" col=\"13\" displaytype=\"number\" edittype=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'masknumber' : 'none'\" style=\"align:right;line:2 solid silver,1 solid #ddddddff;selectline:2 solid silver,1 solid #ddddddff;\" text=\"bind:STAYNG_CT\" mask=\"!###,###,###,###,##0\" editdisplay=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'display' : 'edit'\"/><Cell row=\"1\" col=\"14\" displaytype=\"number\" edittype=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'masknumber' : 'none'\" style=\"align:right;line:2 solid silver,1 solid #ddddddff;selectline:2 solid silver,1 solid #ddddddff;\" text=\"bind:DAIL_CT\" mask=\"!###,###,###,###,##0\" editdisplay=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'display' : 'edit'\"/><Cell row=\"1\" col=\"15\" displaytype=\"number\" style=\"align:right;line:2 solid silver,1 solid #ddddddff;selectline:2 solid silver,1 solid #ddddddff;\" text=\"bind:ETC_EXPENS\" mask=\"!###,###,###,###,##0\"/><Cell row=\"1\" col=\"16\" displaytype=\"number\" style=\"align:right;line:2 solid silver,1 solid #ddddddff;selectline:2 solid silver,1 solid #ddddddff;\" text=\"bind:EXCCLC_AMOUNT\" mask=\"!###,###,###,###,##0\"/><Cell row=\"1\" col=\"17\" style=\"line:2 solid silver,1 solid #ddddddff;selectline:2 solid silver,1 solid #ddddddff;\" text=\"bind:DECSN_NO\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/></Band></Format><Format id=\"whthrc\"><Columns><Column size=\"30\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"230\"/><Column size=\"300\"/><Column size=\"130\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"결재상태\"/><Cell col=\"2\" rowspan=\"2\" text=\"등록구분\"/><Cell col=\"3\" colspan=\"2\" text=\"부서명\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"사원번호\"/><Cell col=\"6\" rowspan=\"2\" text=\"상시구분\"/><Cell col=\"7\" rowspan=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"목적지\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"이동경로\"/><Cell col=\"9\" rowspan=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"교통수단\"/><Cell col=\"10\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"시작일자\"/><Cell col=\"11\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"시작시각\"/><Cell col=\"12\" text=\"출장일수\"/><Cell col=\"13\" rowspan=\"2\" text=\"출장시간\"/><Cell col=\"14\" rowspan=\"2\" text=\"일비(월누계)\"/><Cell col=\"15\" rowspan=\"2\" text=\"일비\"/><Cell col=\"16\" text=\"여비총액\"/><Cell col=\"17\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"예산부서\"/><Cell row=\"1\" col=\"3\" text=\"직종\"/><Cell row=\"1\" col=\"4\" text=\"직급\"/><Cell row=\"1\" col=\"5\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"사원명\"/><Cell row=\"1\" col=\"8\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"출장목적\"/><Cell row=\"1\" col=\"10\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"종료일자\"/><Cell row=\"1\" col=\"11\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"종료시각\"/><Cell row=\"1\" col=\"12\" text=\"숙박일수\"/><Cell row=\"1\" col=\"16\" text=\"정산금액\"/><Cell row=\"1\" col=\"17\" text=\"결의번호\"/></Band><Band id=\"body\" style=\"cellbackground2:#fffff2ff;\"><Cell rowspan=\"2\" displaytype=\"expr:['0','2','3'].indexOf(SANCTN_STS) &gt; -1 ? &quot;checkbox&quot; : &quot;none&quot;\" style=\"line:2 solid silver,1 solid #ddddddff;selectline:2 solid silver,1 solid #ddddddff;\" text=\"bind:SANC_CHK\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"image\" style=\"line:2 solid silver,1 solid #ddddddff;selectline:2 solid silver,1 solid #ddddddff;\" text=\"expr:comp.parent.fn_get_imgUrl(SANCTN_STS)\"/><Cell col=\"2\" rowspan=\"2\" style=\"line:2 solid silver,1 solid #ddddddff;selectline:2 solid silver,1 solid #ddddddff;\" text=\"expr:CANCL_AT == '1' ? '취소등록' : '일반등록'\"/><Cell col=\"3\" colspan=\"2\" text=\"bind:DEPT_NM\"/><Cell col=\"5\" text=\"bind:EMPNO\"/><Cell col=\"6\" rowspan=\"2\" displaytype=\"combo\" edittype=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'combo' : 'none'\" style=\"line:2 solid silver,1 solid #ddddddff;selectline:2 solid silver,1 solid #ddddddff;\" text=\"bind:ORDTM_SE\" combodataset=\"ds_hrm092\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodisplay=\"expr:CONFM_AT == '1' ? 'edit' : UPDATE_POSBL_AT == '1' ? 'display' : 'edit'\"/><Cell col=\"7\" rowspan=\"2\" edittype=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'normal' : 'none'\" style=\"align:left;line:2 solid silver,1 solid #ddddddff;selectline:2 solid silver,1 solid #ddddddff;\" text=\"bind:DSTN_NM\" editlimit=\"100\" editdisplay=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'display' : 'edit'\" editlengthunit=\"ascii\"/><Cell col=\"8\" edittype=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'normal' : 'none'\" style=\"align:left;\" text=\"bind:MVMN_COURS\" editlimit=\"200\" editdisplay=\"expr:UPDATE_POSBL_AT == '1' ? 'display' : 'edit'\" editlengthunit=\"ascii\"/><Cell col=\"9\" rowspan=\"2\" displaytype=\"combo\" edittype=\"expr:comp.parent.fn_grdCellComboControl(currow, 'edittype')\" style=\"line:2 solid silver,1 solid #ddddddff;selectline:2 solid silver,1 solid #ddddddff;\" text=\"bind:TFCMN_SE\" combodataset=\"ds_hrm026\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodisplaynulltext=\"선택\" combodisplay=\"expr:comp.parent.fn_grdCellComboControl(currow, 'combodisplay')\"/><Cell col=\"10\" displaytype=\"date\" edittype=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'date' : 'none'\" style=\"align:center;\" text=\"bind:BSRP_BGNDE\" calendardisplay=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'display' : 'edit'\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" edittype=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'mask' : 'none'\" style=\"align:center;\" text=\"bind:BSRP_BEGIN_TM\" mask=\"##:##\" editdisplay=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'display' : 'edit'\" editlimitbymask=\"both\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" text=\"bind:BSRP_DAYCNT\" mask=\"!##0\"/><Cell col=\"13\" rowspan=\"2\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;line:2 solid silver,1 solid #ddddddff;selectline:2 solid silver,1 solid #ddddddff;\" text=\"bind:BSRP_TM\"/><Cell col=\"14\" rowspan=\"2\" displaytype=\"number\" style=\"align:right;line:2 solid silver,1 solid #ddddddff;selectline:2 solid silver,1 solid #ddddddff;\" text=\"bind:DAIL_SUM_AMT\"/><Cell col=\"15\" rowspan=\"2\" displaytype=\"number\" edittype=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'masknumber' : 'none'\" style=\"align:right;line:2 solid silver,1 solid #ddddddff;selectline:2 solid silver,1 solid #ddddddff;\" text=\"bind:DAIL_CT\" mask=\"!###,###,###,###,##0\" editdisplay=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'display' : 'edit'\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TRVCT_TOTAMT\" mask=\"!###,###,###,###,##0\"/><Cell col=\"17\" text=\"bind:BUDGET_DEPT_NM\" expandshow=\"expr:CONFM_AT == '1' ? 'hide' : UPDATE_POSBL_AT == '1' ? 'show' : 'hide'\"/><Cell row=\"1\" col=\"3\" style=\"line:2 solid silver,1 solid #ddddddff;selectline:2 solid silver,1 solid #ddddddff;\" text=\"bind:JSSFC_NM\"/><Cell row=\"1\" col=\"4\" style=\"line:2 solid silver,1 solid #ddddddff;selectline:2 solid silver,1 solid #ddddddff;\" text=\"bind:CLSF_NM\"/><Cell row=\"1\" col=\"5\" style=\"line:2 solid silver,1 solid #ddddddff;selectline:2 solid silver,1 solid #ddddddff;\" text=\"bind:EMPNM\" expandshow=\"expr:CONFM_AT == '1' ? 'hide' : dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'show' : 'hide'\"/><Cell row=\"1\" col=\"8\" edittype=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'normal' : 'none'\" style=\"align:left;line:2 solid silver,1 solid #ddddddff;selectline:2 solid silver,1 solid #ddddddff;\" text=\"bind:BSRP_PURPS\" editlimit=\"200\" editdisplay=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'display' : 'edit'\" editlengthunit=\"ascii\"/><Cell row=\"1\" col=\"10\" displaytype=\"date\" edittype=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'date' : 'none'\" style=\"align:center;line:2 solid silver,1 solid #ddddddff;selectline:2 solid silver,1 solid #ddddddff;\" text=\"bind:BSRP_ENDDE\" calendardisplay=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'display' : 'edit'\" calendardisplaynulltype=\"none\"/><Cell row=\"1\" col=\"11\" edittype=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'mask' : 'none'\" style=\"align:center;line:2 solid silver,1 solid #ddddddff;selectline:2 solid silver,1 solid #ddddddff;\" text=\"bind:BSRP_END_TM\" mask=\"##:##\" editdisplay=\"expr:CONFM_AT == '1' ? 'none' : UPDATE_POSBL_AT == '1' ? 'display' : 'edit'\" editlimitbymask=\"both\"/><Cell row=\"1\" col=\"12\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;line:2 solid silver,1 solid #ddddddff;selectline:2 solid silver,1 solid #ddddddff;\" text=\"bind:STAYNG_DAYCNT\" mask=\"!##0\"/><Cell row=\"1\" col=\"16\" displaytype=\"number\" style=\"align:right;line:2 solid silver,1 solid #ddddddff;selectline:2 solid silver,1 solid #ddddddff;\" text=\"bind:EXCCLC_AMOUNT\" mask=\"!###,###,###,###,##0\"/><Cell row=\"1\" col=\"17\" style=\"line:2 solid silver,1 solid #ddddddff;selectline:2 solid silver,1 solid #ddddddff;\" text=\"bind:DECSN_NO\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "510", "490", "15", "245", null, null, this);
            obj.set_taborder("21");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "480", null, "10", "28", null, this);
            obj.set_taborder("103");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_bsrp", "absolute", null, null, "506", "245", "28", "0", this);
            obj.set_taborder("107");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.style.set_buttonpadding("8 20 8 20");
            obj.style.set_showextrabutton("false");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.tab_bsrp);
            obj.set_text("현지활동 및 기타경비 상세");
            this.tab_bsrp.addChild(obj.name, obj);
            obj = new Grid("grd_indvdlExpens", "absolute", "5", "29", null, null, "5", "5", this.tab_bsrp.tabpage1);
            obj.set_taborder("0");
            obj.set_binddataset("ds_indvdlExpens");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"경비구분\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"사용경비\"/><Cell col=\"3\" text=\"내역명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"expr:comp.parent.parent.parent.fn_update_at() ? 'combo' : 'none'\" text=\"bind:EXPENS_SE\" combodataset=\"ds_hrm027\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodisplaynulltext=\"선택\" combodisplay=\"expr:comp.parent.parent.parent.fn_update_at() ? 'display' : 'edit'\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"expr:comp.parent.parent.parent.fn_update_at() ? 'masknumber' : 'none'\" style=\"align:right;\" text=\"bind:USE_EXPENS\" mask=\"!###,###,###,###,##0\" editdisplay=\"expr:comp.parent.parent.parent.fn_update_at() ? 'display' : 'edit'\" editlimitbymask=\"both\"/><Cell col=\"3\" edittype=\"expr:comp.parent.parent.parent.fn_update_at() ? 'normal' : 'none'\" style=\"align:left;\" text=\"bind:DTLS_NM\" editlimit=\"200\" editdisplay=\"expr:comp.parent.parent.parent.fn_update_at() ? 'display' : 'edit'\" editlengthunit=\"ascii\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;USE_EXPENS&quot;)\"/><Cell col=\"3\"/></Band></Format></Formats>");
            this.tab_bsrp.tabpage1.addChild(obj.name, obj);
            obj = new Button("btn_Can_R01", "absolute", null, "5", "64", "19", "0", null, this.tab_bsrp.tabpage1);
            obj.set_taborder("1");
            obj.set_text("행취소");
            obj.set_cssclass("btn_WF_Gridcnl");
            this.tab_bsrp.tabpage1.addChild(obj.name, obj);
            obj = new Button("btn_Add_R01", "absolute", null, "5", "64", "19", "134", null, this.tab_bsrp.tabpage1);
            obj.set_taborder("2");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Gridadd");
            this.tab_bsrp.tabpage1.addChild(obj.name, obj);
            obj = new Button("btn_Del_R01", "absolute", null, "5", "64", "19", "67", null, this.tab_bsrp.tabpage1);
            obj.set_taborder("3");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Griddel");
            this.tab_bsrp.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "0", "24", null, "5", "0", null, this.tab_bsrp.tabpage1);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.tab_bsrp.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "0", null, "5", "0", null, this.tab_bsrp.tabpage1);
            obj.set_taborder("5");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.tab_bsrp.tabpage1.addChild(obj.name, obj);
            obj = new Static("sta_useDtls01", "absolute", "5", "4", "196", "21", null, null, this.tab_bsrp.tabpage1);
            obj.set_taborder("6");
            obj.set_text("경비상세정보");
            obj.set_cssclass("sta_WF_Title02");
            this.tab_bsrp.tabpage1.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.tab_bsrp);
            obj.set_text("첨부파일");
            this.tab_bsrp.addChild(obj.name, obj);
            obj = new Grid("grd_cmmnAtchmnfl", "absolute", "5", "29", null, null, "5", "5", this.tab_bsrp.tabpage2);
            obj.set_taborder("0");
            obj.set_binddataset("ds_fileList");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" celltype=\"head\" text=\"파일명\"/><Cell col=\"2\" text=\"확장자\"/><Cell col=\"3\" text=\"사이즈\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"normal\" style=\"align:left middle;\" text=\"bind:ORGINL_FILE_NM\"/><Cell col=\"2\" text=\"bind:FILE_EXTSN\"/><Cell col=\"3\" text=\"bind:FILE_MG\"/></Band></Format></Formats>");
            this.tab_bsrp.tabpage2.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "0", "24", null, "5", "0", null, this.tab_bsrp.tabpage2);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.tab_bsrp.tabpage2.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "0", null, "5", "0", null, this.tab_bsrp.tabpage2);
            obj.set_taborder("5");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.tab_bsrp.tabpage2.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "524", "484", "508", "5", null, null, this.tab_bsrp.tabpage2);
            obj.set_taborder("6");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.tab_bsrp.tabpage2.addChild(obj.name, obj);
            obj = new Button("btn_delFiles", "absolute", null, "5", "67", "19", "159", null, this.tab_bsrp.tabpage2);
            obj.set_taborder("7");
            obj.set_text("선택삭제");
            obj.set_cssclass("btn_WF_Process");
            this.tab_bsrp.tabpage2.addChild(obj.name, obj);
            obj = new Button("btn_uploadFiles", "absolute", null, "5", "68", "19", "88", null, this.tab_bsrp.tabpage2);
            obj.set_taborder("8");
            obj.set_text("파일업로드");
            obj.set_cssclass("btn_WF_Process");
            this.tab_bsrp.tabpage2.addChild(obj.name, obj);
            obj = new Button("btn_downFiles", "absolute", null, "5", "85", "19", "0", null, this.tab_bsrp.tabpage2);
            obj.set_taborder("9");
            obj.set_text("선택다운로드");
            obj.set_cssclass("btn_WF_Process");
            this.tab_bsrp.tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_viewCarAlcList", "absolute", null, "43", "90", "19", "28", null, this);
            obj.set_taborder("147");
            obj.set_text("배차현황보기");
            obj.set_cssclass("btn_WF_Process");
            this.addChild(obj.name, obj);

            obj = new Static("sta_guidanceMssage", "absolute", "134", null, "400", "19", null, "219", this);
            obj.set_taborder("148");
            obj.set_text("(동일한 일자에 출장신청한 인원만 동승자 추가할 수 있습니다.)");
            obj.style.set_color("blue");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("btn_canclR", "absolute", null, "43", "90", "19", "120", null, this);
            obj.set_taborder("149");
            obj.set_text("출장취소등록");
            obj.set_cssclass("btn_WF_Process");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tab_carAlc.tpg1,
            	//-- Layout function
            	function(p) {
            		p.set_text("배차정보");

            	}
            );
            this.tab_carAlc.tpg1.addLayout(obj.name, obj);

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
            obj = new Layout("default", "", 0, 0, this.tab_bsrp.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_text("현지활동 및 기타경비 상세");

            	}
            );
            this.tab_bsrp.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tab_bsrp.tabpage2,
            	//-- Layout function
            	function(p) {
            		p.set_text("첨부파일");

            	}
            );
            this.tab_bsrp.tabpage2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1059, 735, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HRM070202");
            		p.set_titletext("국내출장신청");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_search.cal_bgnde1","value","ds_cond","BGNDE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_search.cal_bgnde2","value","ds_cond","ENDDE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_search.edt_purps","value","ds_cond","BSRP_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","Tab00.tabpage1.cal_useDe","value","ds_reqstList","CARALC_BGNDE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","Tab00.tabpage1.cal_endDe","value","ds_reqstList","CARALC_ENDDE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","Tab00.tabpage1.msk_useTm","value","ds_reqstList","CARALC_BEGIN_TM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","Tab00.tabpage1.msk_endTm","value","ds_reqstList","CARALC_END_TM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Tab00.tabpage1.edt_dstn","value","ds_reqstList","DSTN_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Tab00.tabpage1.edt_busins","value","ds_reqstList","OPRAT_PURPS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Tab00.tabpage1.edt_vhcleRegistNo","value","ds_reqstList","VHCLE_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Tab00.tpg1.edt_vhcleRegistNo","value","ds_carAlcInfo","VHCLE_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Tab00.tpg1.edt_dstn","value","ds_carAlcInfo","DSTN_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Tab00.tpg1.edt_busins","value","ds_carAlcInfo","OPRAT_PURPS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Tab00.tpg1.cal_useDe","value","ds_carAlcInfo","CARALC_BGNDE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Tab00.tpg1.msk_useTm","value","ds_carAlcInfo","CARALC_BEGIN_TM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Tab00.tpg1.cal_endDe","value","ds_carAlcInfo","CARALC_ENDDE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Tab00.tpg1.msk_endTm","value","ds_carAlcInfo","CARALC_END_TM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","tab_carAlc.tpg1.edt_vhcleRegistNo","value","ds_carAlcInfo","VHCLE_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","tab_carAlc.tpg1.edt_dstn","value","ds_carAlcInfo","DSTN_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","tab_carAlc.tpg1.edt_busins","value","ds_carAlcInfo","OPRAT_PURPS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","tab_carAlc.tpg1.cal_useDe","value","ds_carAlcInfo","CARALC_BGNDE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","tab_carAlc.tpg1.cal_endDe","value","ds_carAlcInfo","CARALC_ENDDE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","tab_carAlc.tpg1.msk_useTm","value","ds_carAlcInfo","CARALC_BEGIN_TM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","tab_carAlc.tpg1.msk_endTm","value","ds_carAlcInfo","CARALC_END_TM");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "com::empno.xfdl");
            this._addPreloadList("fdl", "com::deptCode.xfdl");
        };
        
        // User Script
        this.addIncludeScript("HRM070202.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("HRM070202.xfdl", "mis_lib::misUtil.xjs");
        this.addIncludeScript("HRM070202.xfdl", "lib::comUpDownUtils.xjs");
        this.registerScript("HRM070202.xfdl", function() {

        /***********************************************************************
         * Script Include 
        ************************************************************************/

        //include "lib::comInclude.xjs";
        //include "mis_lib::misUtil.xjs";
        //include "lib::comUpDownUtils.xjs";

        

        /***********************************************************************
         * 화면 변수 선언부
        ************************************************************************/

        this.saveRow = -1;
        this.File_UpDownManager = null;
        this.acplcActCt = 0;
        this.etcExpens = 0;
        this.isAuth = false;
        this.whthrcAt = '0';
        /***********************************************************************
         * onInit / onLoad 영역
        ************************************************************************/

        this.HRM070202_oninit = function(obj,e)
        {

        }

        this.HRM070202_onload = function(obj,e)
        {
        	// Form 초기화
        	this.fn_init_form();

        	// DataSet 초기화
        	this.fn_init_dataset();
        	
        	/* 권한 해제 요청 */
        	if(this.gfn_authGrpId("HRM_ADMIN") != -1 || this.gfn_authGrpId("AUD_ADMIN") != -1
        	   || this.gfn_authGrpId("AUD_TIMHDER") != -1 || this.gfn_authGrpId("SECRTRY") != -1 || this.gfn_authGrpId("HRM_SRVIC") != -1) {
        		this.isAuth = true;
        	}else {
        		this.isAuth = false;
        	}
        	
        	// 검색조건 영역 바인딩
        	this.div_search.div_DeptComp.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");
        	this.div_search.div_DeptComp.fn_setReadonly(true);
        	this.div_search.div_DeptComp.div_Search.btn_dept.set_visible(false);
        	this.div_search.div_DeptComp.fn_setCssclass("edt_WF_Readonly");
        	this.div_search.div_DeptComp.authorCtrlAt = true;	// 부서 권한제어처리(선택가능 범위의 부서)
        	
        	this.tab_carAlc.tpg1.div_EMP_DRVER.fn_setBind("ds_carAlcInfo","DRVER_EMPNO","DRVER_EMPNM");
        	this.tab_carAlc.tpg1.div_EMP_DRVER.div_sear.edt_emplnm.set_readonly(true);
        	this.tab_carAlc.tpg1.div_EMP_DRVER.div_sear.edt_empno.set_readonly(true);
         	this.tab_carAlc.tpg1.div_EMP_DRVER.div_sear.edt_emplnm.set_cssclass("edt_WF_Readonly");
         	this.tab_carAlc.tpg1.div_EMP_DRVER.div_sear.edt_empno.set_cssclass("edt_WF_Readonly");
        	this.tab_carAlc.tpg1.div_EMP_DRVER.div_sear.search.set_visible(false);
        	this.tab_carAlc.tpg1.btn_carAlcList.set_visible(false);

        	var comboParams = [
        		["ds_hrm019", "HRM019", "1", "D"],			// 출장 구분
        		["ds_hrm026", "HRM026", "1", "D"],			// 교통수단 구분
        		["ds_hrm027", "HRM027", "1", "D"],			// 출장경비 구분
        		["ds_hrm092", "HRM092", "1", "D"]			// 상시여부 구분
        	];
        	var callback = function (svcId, errorCode, errorMsg) {
        		this.ds_cond.clearData();
        		var nRow = this.ds_cond.addRow();
        		this.ds_cond.setColumn(nRow, "BGNDE",     this.dateUtils.today());
        		this.ds_cond.setColumn(nRow, "ENDDE",     this.dateUtils.getLastDay(this.dateUtils.addMonth(this.dateUtils.today(),  1, 's'), 's'));
        		this.ds_cond.setColumn(nRow, "DEPT_CODE", this.gfn_getDeptId());
        		this.ds_cond.setColumn(nRow, "DEPT_NM",   this.gfn_getDeptName());
        		this.ds_cond.setColumn(nRow, "WHTHRC_AT", this.whthrcAt);
        		
        		if(this.isAuth) {
        			this.div_search.div_DeptComp.fn_setReadonly(false);
        			this.div_search.div_DeptComp.div_Search.btn_dept.set_visible(true);
        			this.div_search.div_DeptComp.fn_setCssclass("");
        			this.ds_cond.setColumn(0, "AUTH_GRP", "ADMIN");
        		} else {
        			this.ds_cond.setColumn(0, "AUTH_GRP", "USER");
        			
        			if(this.gfn_authGrpId("GRFRS") != -1) {			// 서무
        				this.ds_cond.setColumn(0, "AUTH_GRP", "GRFRS");
        			}
        		}
        		
        		this.fn_transaction("selectBsrpStdr");
        	}
        	this.gfn_comboLoad(comboParams, callback);
        }

        

        /**********************************************************************
        * Form/Dataset 오브젝트 초기화
        ***********************************************************************/
        /*
         * 함수명  	: initForm
         * 설명 		: Form을 초기화한다.
         * params  		: None
         * return Type 	: None
         * 사용법		: this.init_Form();
         */
        this.fn_init_form = function()
        {
        	this.gfn_initForm(this);	// 시스템 공통으로 Form을 Initialize 한다.
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
        	var fileConfig = {
              useMultiUpload : true,
              onChange: this.fn_onFileSelected,   // 파일 선택 이벤트 핸들러
              onSuccess : this.fn_onFileSuccess   // 전송 성공 이벤트 핸들러
           };
           this.File_UpDownManager = new this.fileUpDownManager(this, "MIS", "HRM");
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
         * 설명 		: 조회 이벤트 처리(휴직내역)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_search();
         */
        this.fn_search = function()
        {
        	// validation 체크
        	if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond, this.ds_validation)) {
        		return;
        	}
        	
        	this.ds_bsrpIndvdl.clearData();
        	this.ds_indvdlExpens.clearData();
        	this.ds_fileList.clearData();
        	this.ds_carAlcFlwpsgList.clearData();
        	this.ds_carAlcInfo.clearData();
        	
        	this.fn_transaction("selectBsrpIndvdl");
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
        		case "selectBsrpStdr":		// 여비기준 조회
        			var sController   	= "/hsco/mis/hrm/HRM070202/selectBsrpStdr.do";
        			var sInDatasets   	= "input1=ds_cond";
        			var sOutDatasets  	= "ds_bsrpTrvct=output1 ds_bsrpCty=output2";
        			break;
        		case "selectBsrpIndvdl":	// 개인별 출장내역 조회
        			var sController   	= "/hsco/mis/hrm/HRM070202/selectBsrpIndvdl.do";
        			var sInDatasets   	= "input1=ds_cond";
        			var sOutDatasets  	= "ds_bsrpIndvdl=output1";
        			break;
        		case "selectIndvdlExpens":	// 출장비 상세내역, 첨부파일 조회
        			var sController   	= "/hsco/mis/hrm/HRM070202/selectIndvdlExpens.do";
        			var sInDatasets   	= "input1=ds_cond_sub";
        			var sOutDatasets  	= "ds_indvdlExpens=output1 ";		// 출장비 상세내역
        			sOutDatasets       += "ds_fileList=output2";			// 첨부파일
        			break;
        		case "selectFileList":      // 첨부파일 조회
        			var sController   	= "hsco/mis/hrm/HRM080303/selectFileList.do";
        			var sInDatasets   	= "input1=ds_cond_sub";
        			var sOutDatasets  	= "ds_fileList=output1";
        			break;
        		case "selectCarAlcInfo":	// 배차정보, 동승자정보 조회
        			var sController   	= "/hsco/mis/hrm/HRM070202/selectCarAlcInfo.do";
        			var sInDatasets   	= "input1=ds_cond_sub";
        			var sOutDatasets  	= "ds_carAlcInfo=output1 ";			// 배차사항
        			sOutDatasets  	   += "ds_carAlcFlwpsgList=output2";	// 배차동승자
        			break;
        		case "saveBsrpDtl":			// 출장내역 저장
        			var sController   	= "/hsco/mis/hrm/HRM070202/saveBsrpDtl.do";
        			var sInDatasets   	= "input1=ds_bsrpIndvdl:U input2=ds_indvdlExpens:U input3=ds_carAlcInfo:U input4=ds_carAlcFlwpsgList:U";
        			var sOutDatasets  	= "";
        			break;
        		case "selectTrvctCalc":		// 개인별출장 일비, 식비 계산 결과 조회
        			var sController   	= "/hsco/mis/hrm/HRM070202/selectTrvctCalc.do";
        			var sInDatasets   	= "input1=ds_cond_sub2";
        			var sOutDatasets  	= "ds_trvctCalcResult=output1";
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

        	if (nErrorCode == 0){
        		switch (strSvcId) {
        			case "selectBsrpStdr":		// 여비기준 조회
        				this.fn_search();
        				break;
        			case "selectBsrpIndvdl":	// 개인별 출장내역 조회
        				break;
        			case "selectIndvdlExpens":	// 출장비상세내역 조회
        				
        				var nRow = this.ds_bsrpIndvdl.rowposition;
        				var tfcmnSe = this.ds_bsrpIndvdl.getColumn(nRow, "TFCMN_SE");
        				var carAlcSeq = this.ds_bsrpIndvdl.getColumn(nRow, "CARALC_SEQ");
        				
        				if(tfcmnSe == '001'){	// 교통수단 == '공용차량' AND 배차순번이 null이 아닐 때 실행
        					if(!this.comUtils.isNull(carAlcSeq)){
        						
        						this.ds_cond_sub.setColumn(0, "CARALC_SEQ", carAlcSeq);	// 배차조회 검색조건 설정
        						this.fn_transaction("selectCarAlcInfo");
        					}
        				}
        				
        				break;
        			case "selectCarAlcInfo":	// 배차정보, 동승자정보 조회
        				if(this.ds_carAlcInfo.rowcount > 0){
        					var empno1 = this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "EMPNO");
        					var seq1 = this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "BSRP_SEQ");
        					var empno2 = this.ds_carAlcInfo.getColumn(0, "BSRP_EMPNO");
        					var seq2 = this.ds_carAlcInfo.getColumn(0, "BSRP_SEQ");
        					
        					var updateAt  = this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "UPDATE_POSBL_AT"); // 개인별 출장내역 업데이트 가능 여부(0:불가능, 1:가능)
        					var confmAt  = this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "CONFM_AT");         // 개인별 출장내역 업데이트 가능 여부(0:불가능, 1:가능)
        					
        					if(empno1 == empno2  && seq1 == seq2 && updateAt != '0' && confmAt != '1'){	// 선택된 개인별출장내역 출장자와 배차정보의 운전자가 동일한지 여부 검사
        						
        					} else {
        						this.tab_carAlc.tpg1.btn_Add_R.set_enable(false);
        						this.tab_carAlc.tpg1.btn_Del_R.set_enable(false);
        						
        						this.tab_carAlc.tpg1.btn_deleteCarAlc.set_enable(false);
        						this.tab_carAlc.tpg1.btn_carAlcList.set_visible(false);
        						this.tab_carAlc.tpg1.edt_dstn.set_cssclass("edt_WF_Readonly");
        						this.tab_carAlc.tpg1.edt_dstn.set_readonly(true);
        						this.tab_carAlc.tpg1.edt_busins.set_cssclass("edt_WF_Readonly");
        						this.tab_carAlc.tpg1.edt_busins.set_readonly(true);
        						this.tab_carAlc.tpg1.cal_useDe.set_cssclass("cal_WF_Readonly");
        						this.tab_carAlc.tpg1.cal_useDe.set_readonly(true);
        						this.tab_carAlc.tpg1.cal_endDe.set_cssclass("cal_WF_Readonly");
        						this.tab_carAlc.tpg1.cal_endDe.set_readonly(true);
        						this.tab_carAlc.tpg1.msk_useTm.set_cssclass("msk_WF_Readonly");
        						this.tab_carAlc.tpg1.msk_useTm.set_readonly(true);
        						this.tab_carAlc.tpg1.msk_endTm.set_cssclass("msk_WF_Readonly");
        						this.tab_carAlc.tpg1.msk_endTm.set_readonly(true);
        						this.tab_carAlc.tpg1.btn_vhcleList_bgn.set_enable(false);
        						this.tab_carAlc.tpg1.btn_vhcleList_end.set_enable(false);
        					}
        				}
        				break;
        			case "saveBsrpDtl":	// 출장내역 저장
        				this.gfn_message("success.처리.성공");
        				this.fn_search();
        				break;
        			case "selectTrvctCalc":	// 개인별출장 일비, 식비 계산 결과 조회
        				var nRow    = this.ds_cond_sub2.getColumn(0, "ROW_POSITION");
        				var ordtmSe = this.ds_cond_sub2.getColumn(0, "ORDTM_SE");
        				this.ds_bsrpIndvdl.setColumn(nRow, "BSRP_DAYCNT", this.ds_trvctCalcResult.getColumn(0, "BSRP_DAYCNT"));
        				this.ds_bsrpIndvdl.setColumn(nRow, "STAYNG_DAYCNT", this.ds_trvctCalcResult.getColumn(0, "STAYNG_DAYCNT"));
        				this.ds_bsrpIndvdl.setColumn(nRow, "MEAL_CT", this.ds_trvctCalcResult.getColumn(0, "MEAL_CT"));
        				this.ds_bsrpIndvdl.setColumn(nRow, "BSRP_TM", this.ds_trvctCalcResult.getColumn(0, "BSRP_TM"));
        				
        				var dailCt = this.ds_trvctCalcResult.getColumn(0, "DAIL_CT");
        				if(this.ds_cond_sub2.getColumn(0, "TFCMN_SE") == "001") {
        					if(dailCt == 0) {
        						this.ds_bsrpIndvdl.setColumn(nRow, "DAIL_CT", 0);
        					}
        					else {
        						if(ordtmSe == "1") {	// 상시
        							this.ds_bsrpIndvdl.setColumn(nRow, "DAIL_CT", dailCt);
        						}
        						else {					// 일반
        							this.ds_bsrpIndvdl.setColumn(nRow, "DAIL_CT", dailCt/2);
        						}
        						
        					}
        				}
        				else {
        					this.ds_bsrpIndvdl.setColumn(nRow, "DAIL_CT", this.ds_trvctCalcResult.getColumn(0, "DAIL_CT"));
        				}
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
        this.fn_popupCallback = function(sPopupId,sReturn)
        {
        	var ds_Popup = new Dataset();
        	var loadCnt = ds_Popup.loadXML(sReturn);
        	var nRow    = this.ds_bsrpIndvdl.rowposition;
        	
        	if(loadCnt){
        		if(sPopupId == "empPop") {	// 개인별출장-사원항목
        			var DeptCode  = ds_Popup.getColumn(0, "DEPT_CODE");
        			var DeptNm    = ds_Popup.getColumn(0, "DEPT_NM");
        			var EmpCode   = ds_Popup.getColumn(0, "EMPNO");
        			var EmpNm     = ds_Popup.getColumn(0, "EMPNM");
        			var JssfcSe   = ds_Popup.getColumn(0, "JSSFC_SE");
        			var JssfcNm   = ds_Popup.getColumn(0, "JSSFC_NM");
        			var ClseNm    = ds_Popup.getColumn(0, "HR_CLSF_NM");
        			
        			this.ds_bsrpIndvdl.setColumn(nRow, "DEPT_CODE", DeptCode);
        			this.ds_bsrpIndvdl.setColumn(nRow, "DEPT_NM",   DeptNm);
        			this.ds_bsrpIndvdl.setColumn(nRow, "EMPNO",     EmpCode);
        			this.ds_bsrpIndvdl.setColumn(nRow, "EMPNM",     EmpNm);
        			this.ds_bsrpIndvdl.setColumn(nRow, "JSSFC_SE",  JssfcSe);
        			this.ds_bsrpIndvdl.setColumn(nRow, "JSSFC_NM",  JssfcNm);
        			this.ds_bsrpIndvdl.setColumn(nRow, "CLSF_NM",   ClseNm);
        			this.ds_bsrpIndvdl.setColumn(nRow, "BUDGET_DEPT_CODE", DeptCode);
        			this.ds_bsrpIndvdl.setColumn(nRow, "BUDGET_DEPT_NM",   DeptNm);
        			
        			if(this.ds_carAlcInfo.rowcount > 0){
        				this.ds_carAlcInfo.setColumn(0, "BSRP_EMPNO", EmpCode);
        				this.ds_carAlcInfo.setColumn(0, "DRVER_EMPNO", EmpCode);
        				this.ds_carAlcInfo.setColumn(0, "DRVER_EMPNM", EmpNm);
        				this.ds_carAlcInfo.setColumn(0, "DRVER_DEPT_CODE", DeptCode);
        				this.ds_carAlcInfo.setColumn(0, "DRVER_DEPT_NM", DeptNm);
        			}
        			
        			var cnt = this.ds_indvdlExpens.rowcount;
        			for(i=0; i<cnt; i++){
        				this.ds_indvdlExpens.setColumn(i, "EMPNO", EmpCode);
        			}
        			
        		} else if(sPopupId == "deptPop") {	// 개인별출장-예산부서항목
        			var DeptCode  = ds_Popup.getColumn(0, "DEPT_CODE");
        			var DeptNm    = ds_Popup.getColumn(0, "DEPT_NM");
        			this.ds_bsrpIndvdl.setColumn(nRow, "BUDGET_DEPT_CODE", DeptCode);
        			this.ds_bsrpIndvdl.setColumn(nRow, "BUDGET_DEPT_NM",   DeptNm);
        			
        		} else if(sPopupId == "carAlcPopup") {	// 배차정보-차량명항목
        			
        			if(this.ds_carAlcInfo.rowcount == 0){
        				this.ds_carAlcInfo.addRow();
        				
        				this.ds_carAlcInfo.setColumn(0, "BSRP_SEQ", this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "BSRP_SEQ"));
        				this.ds_carAlcInfo.setColumn(0, "BSRP_EMPNO", this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "EMPNO"));
        				this.ds_carAlcInfo.setColumn(0, "DRVER_EMPNO", this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "EMPNO"));
        				this.ds_carAlcInfo.setColumn(0, "DRVER_EMPNM", this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "EMPNM"));
        				this.ds_carAlcInfo.setColumn(0, "DRVER_DEPT_CODE", this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "DEPT_CODE"));
        				this.ds_carAlcInfo.setColumn(0, "DRVER_DEPT_NM", this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "DEPT_NM"));
        			}
        			
        			var vhcleCode = ds_Popup.getColumn(0, "VHCLE_CODE");
        			var vhcleNo   = ds_Popup.getColumn(0, "VHCLE_NO");
        			var vhcleNm   = ds_Popup.getColumn(0, "VHCLE_NM");
        			
        			var pRow = this.ds_bsrpIndvdl.rowposition;
        			var bgnde     = this.ds_bsrpIndvdl.getColumn(pRow, "BSRP_BGNDE");
        			var endde     = this.ds_bsrpIndvdl.getColumn(pRow, "BSRP_ENDDE");
        			var dstnNm    = this.ds_bsrpIndvdl.getColumn(pRow, "DSTN_NM");
        			var bsrpPurps = this.ds_bsrpIndvdl.getColumn(pRow, "BSRP_PURPS");
        			
        			var cDstnNm     = this.ds_carAlcInfo.getColumn(0, "DSTN_NM");
        			var cOpratPurps = this.ds_carAlcInfo.getColumn(0, "OPRAT_PURPS");
        			
        			if(!this.comUtils.isNull(cDstnNm)) {
        				dstnNm = cDstnNm;
        			}
        			if(!this.comUtils.isNull(cOpratPurps)) {
        				bsrpPurps = cOpratPurps;
        			}
        			
        			this.ds_carAlcInfo.setColumn(0, "VHCLE_CODE", vhcleCode);
        			this.ds_carAlcInfo.setColumn(0, "VHCLE_NO", vhcleNo);
        			this.ds_carAlcInfo.setColumn(0, "VHCLE_NM", vhcleNm);
        			this.ds_carAlcInfo.setColumn(0, "CARALC_BGNDE", bgnde);
        			this.ds_carAlcInfo.setColumn(0, "CARALC_BEGIN_TM", null);
        			this.ds_carAlcInfo.setColumn(0, "CARALC_ENDDE", endde);
        			this.ds_carAlcInfo.setColumn(0, "CARALC_END_TM", null);
        			this.ds_carAlcInfo.setColumn(0, "DSTN_NM", dstnNm);
        			this.ds_carAlcInfo.setColumn(0, "OPRAT_PURPS", bsrpPurps);
        			
        		} else if(sPopupId == "carAlcBgnTm") {
        			var temp1 = ds_Popup.getColumn(0, "IN_DATE");
        			var temp2 = ds_Popup.getColumn(0, "IN_TIME");
        			
        			this.ds_carAlcInfo.setColumn(0, "CARALC_BGNDE", temp1);
        			this.ds_carAlcInfo.setColumn(0, "CARALC_BEGIN_TM", temp2);
        			
        		} else if(sPopupId == "carAlcEndTm") {
        			var temp1 = ds_Popup.getColumn(0, "IN_DATE");
        			var temp2 = ds_Popup.getColumn(0, "IN_TIME");
        			
        			this.ds_carAlcInfo.setColumn(0, "CARALC_ENDDE", temp1);
        			this.ds_carAlcInfo.setColumn(0, "CARALC_END_TM", temp2);
        			
        		} else if(sPopupId == "flwpsgPop") {		
        			
        			var empno = ds_Popup.getColumn(0, "BSRP_EMPNO");
        			var seq = ds_Popup.getColumn(0, "BSRP_SEQ");
        			var index = this.ds_carAlcFlwpsgList.findRowExpr("BSRP_EMPNO == '"+empno+"' && BSRP_SEQ == '"+seq+"'");
        			
        			if(index < 0){
        				var nRow = this.ds_carAlcFlwpsgList.rowposition;
        				
        				this.ds_carAlcFlwpsgList.setColumn(nRow, "FLWPSG_EMPNO", ds_Popup.getColumn(0, "FLWPSG_EMPNO"));
        				this.ds_carAlcFlwpsgList.setColumn(nRow, "EMPNM", ds_Popup.getColumn(0, "EMPNM"));
        				this.ds_carAlcFlwpsgList.setColumn(nRow, "FLWPSG_DEPT_CODE", ds_Popup.getColumn(0, "FLWPSG_DEPT_CODE"));
        				this.ds_carAlcFlwpsgList.setColumn(nRow, "DEPT_NM", ds_Popup.getColumn(0, "DEPT_NM"));
        				this.ds_carAlcFlwpsgList.setColumn(nRow, "BSRP_EMPNO", ds_Popup.getColumn(0, "BSRP_EMPNO"));
        				this.ds_carAlcFlwpsgList.setColumn(nRow, "BSRP_SEQ", ds_Popup.getColumn(0, "BSRP_SEQ"));
        				this.ds_carAlcFlwpsgList.setColumn(nRow, "DSTN_NM", ds_Popup.getColumn(0, "DSTN_NM"));
        				this.ds_carAlcFlwpsgList.setColumn(nRow, "BSRP_PURPS", ds_Popup.getColumn(0, "BSRP_PURPS"));
        				this.ds_carAlcFlwpsgList.setColumn(nRow, "BSRP_BGNDE", ds_Popup.getColumn(0, "BSRP_BGNDE"));
        				this.ds_carAlcFlwpsgList.setColumn(nRow, "BSRP_BEGIN_TM", ds_Popup.getColumn(0, "BSRP_BEGIN_TM"));
        				this.ds_carAlcFlwpsgList.setColumn(nRow, "BSRP_ENDDE", ds_Popup.getColumn(0, "BSRP_ENDDE"));
        				this.ds_carAlcFlwpsgList.setColumn(nRow, "BSRP_END_TM", ds_Popup.getColumn(0, "BSRP_END_TM"));
        			} else {
        				this.gfn_message("info.처리불가", "중복된 동승자가 존재합니다.");
        			}
        		}
        		 else if(sPopupId == "canclPop") {		
        			var cnt = ds_Popup.getColumn(0, "REGIST_CNT");
        			
        			if(cnt > 0){			// 취소 등록된 건수가 0건 이상일 경우 재조회 실행
        				this.fn_search();
        			}
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
        * 1. Gird 관련 이벤트 처리
        * 2. 공통함수
        * 3. 사용자 정의 함수
        * 
        ***********************************************************************/

        

        /**********************************************************************
        * Grid 관련 이벤트 처리
        ***********************************************************************/

        

        /**********************************************************************
        * 공통함수 처리
        ***********************************************************************/

        /*
         * 함수명  	: fn_insert
         * 설명 		: 신규 버튼 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_insert();
         */
        this.fn_insert = function()
        {
        	var nRow = this.ds_bsrpIndvdl.addRow();
        	this.ds_bsrpIndvdl.set_enableevent(false);
        	this.ds_bsrpIndvdl.setColumn(nRow, "CONFM_AT",  '0');
        	this.ds_bsrpIndvdl.setColumn(nRow, "SANCTN_STS",  '0');
        	this.ds_bsrpIndvdl.setColumn(nRow, "UPDATE_POSBL_AT",  '1');
        	this.ds_bsrpIndvdl.setColumn(nRow, "BSRP_BGNDE",  this.dateUtils.today());
        	this.ds_bsrpIndvdl.setColumn(nRow, "BSRP_BEGIN_TM",  '0900');
        	this.ds_bsrpIndvdl.setColumn(nRow, "BSRP_ENDDE",  this.dateUtils.today());
        	this.ds_bsrpIndvdl.setColumn(nRow, "BSRP_END_TM",  '1800');
        	this.ds_bsrpIndvdl.setColumn(nRow, "BSRP_TM", '8');
        	this.ds_bsrpIndvdl.setColumn(nRow, "WHTHRC_AT", this.whthrcAt);
        	this.ds_bsrpIndvdl.setColumn(nRow, "CANCL_AT", '0');
        	this.ds_bsrpIndvdl.set_enableevent(true);
        	this.ds_bsrpIndvdl.setColumn(nRow, "ORDTM_SE", '0');
        }

        /*
         * 함수명  	: fn_save
         * 설명 		: 저장 버튼 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_save();
         */
        this.fn_save = function()
        {	
        	// update check
        	if (   !this.comUtils.isDatasetUpdated(this.ds_bsrpIndvdl)			// 개인별출장내역
        		&& !this.comUtils.isDatasetUpdated(this.ds_indvdlExpens)		// 출장경비상세
        		&& !this.comUtils.isDatasetUpdated(this.ds_carAlcInfo)			// 배차기본정보
        		&& !this.comUtils.isDatasetUpdated(this.ds_carAlcFlwpsgList)	// 배차동승자정보
        	   ) {
        		this.gfn_message("comm.데이터.변경.없음");
        		return false;
        	}
        	
        	// validation check
        	if(!this.gfn_checkValidation_NoUpdChk(this.ds_bsrpIndvdl, this.ds_validation)) {			// 개인별출장내역
        		return;
        	}
        	
        	// 개인별출장내역 출장시간 입력 범위 정합성 체크
        	var rowCnt = this.ds_bsrpIndvdl.rowcount;
        	
        	for(i=0; i<rowCnt; i++){
        		var rowType = this.ds_bsrpIndvdl.getRowType(i);
        		
        		if(rowType == Dataset.ROWTYPE_INSERT || rowType == Dataset.ROWTYPE_UPDATE){
        			//시작일시, 종료일시는 필수값.
        			var stime = this.ds_bsrpIndvdl.getColumn(i, "BSRP_BEGIN_TM");
        			var etime = this.ds_bsrpIndvdl.getColumn(i, "BSRP_END_TM");
        			
        			var bgnH = stime.substr(0, 2);
        			var bgnM = stime.substr(2, 2);
        			var endH = etime.substr(0, 2);
        			var endM = etime.substr(2, 2);
        			
        			if(bgnH > 23 || bgnM > 59) {
        				this.gfn_message("errors.항목.입력값.범위", "출장 시작시각|00:00|23:59");
        				return false;
        			}
        			if(endH > 23 || endM > 59) {
        				this.gfn_message("errors.항목.입력값.범위", "출장 종료시각|00:00|23:59");
        				return false;
        			}
        			
        			var sd = this.ds_bsrpIndvdl.getColumn(i, "BSRP_BGNDE");
        			var ed = this.ds_bsrpIndvdl.getColumn(i, "BSRP_ENDDE");
        			
        			var startDate = new Date(sd.substr(0,4)+"/"+sd.substr(4,2)+"/"+sd.substr(6,2)+" "+stime.substr(0,2)+":"+stime.substr(2,2)+":"+"00");
        			var endDate  = new Date(ed.substr(0,4)+"/"+ed.substr(4,2)+"/"+ed.substr(6,2)+" "+etime.substr(0,2)+":"+etime.substr(2,2)+":"+"00");
        			var tmp = endDate.getTime() - startDate.getTime();
        			
        			if(tmp < 0){
        				this.gfn_message("errors.종료일자.시작일자.이상", "출장|출장");
        				return;
        			}
        			
        			// 숙박비 상한액 검사(임원 및 고문은 상한액 없음.)
        			var jssfcSe = this.ds_bsrpIndvdl.getColumn(i, "JSSFC_SE");	//직종
        			var stayngCt = this.ds_bsrpIndvdl.getColumn(i, "STAYNG_CT");	//숙박비
        			var dayCnt = this.comUtils.isNull(this.ds_bsrpIndvdl.getColumn(i, "STAYNG_DAYCNT")) ? 0 : this.ds_bsrpIndvdl.getColumn(i, "STAYNG_DAYCNT");	//숙박일수
        			
        			if(stayngCt > 0 && dayCnt < 1) {
        				this.gfn_message("info.처리불가", "숙박일수가 없는 경우 숙박비를 입력할 수 없습니다.");
        				return;
        			}
        			
        			if(jssfcSe != '01'){
        				if(stayngCt > 50000*dayCnt){
        					this.gfn_message("info.처리불가", "숙박비는 상한액(1일 50,000원)을 초과할 수 없습니다.");
        					return;
        				}
        			}
        		}
        	}

        	if(!this.gfn_checkValidation_NoUpdChk(this.ds_indvdlExpens, this.ds_validation)) {		// 출장경비상세
        		return;
        	}
        	
        	if(!this.gfn_checkValidation_NoUpdChk(this.ds_carAlcInfo, this.ds_validation)) {		// 배차기본정보
        		return;
        	}
        	
        	// 배차기본정보 배차시간 입력 범위 정합성 체크
        	var rowCnt = this.ds_carAlcInfo.rowcount;
        	
        	for(i=0; i<rowCnt; i++){
        		var rowType = this.ds_carAlcInfo.getRowType(i);
        		
        		if(rowType == Dataset.ROWTYPE_INSERT || rowType == Dataset.ROWTYPE_UPDATE){
        			//시작일시, 종료일시는 필수값.
        			var stime = this.ds_carAlcInfo.getColumn(i, "CARALC_BEGIN_TM");
        			var etime = this.ds_carAlcInfo.getColumn(i, "CARALC_END_TM");
        			
        			var bgnH = stime.substr(0, 2);
        			var bgnM = stime.substr(2, 2);
        			var endH = etime.substr(0, 2);
        			var endM = etime.substr(2, 2);
        			
        			if(bgnH > 23 || bgnM > 59) {
        				this.gfn_message("errors.항목.입력값.범위", "배차 시작시각|00:00|23:59");
        				return false;
        			}
        			if(endH > 23 || endM > 59) {
        				this.gfn_message("errors.항목.입력값.범위", "배차 종료시각|00:00|23:59");
        				return false;
        			}
        			
        			var sd = this.ds_carAlcInfo.getColumn(i, "CARALC_BGNDE");
        			var ed = this.ds_carAlcInfo.getColumn(i, "CARALC_ENDDE");
        			
        			var startDate = new Date(sd.substr(0,4)+"/"+sd.substr(4,2)+"/"+sd.substr(6,2)+" "+stime.substr(0,2)+":"+stime.substr(2,2)+":"+"00");
        			var endDate  = new Date(ed.substr(0,4)+"/"+ed.substr(4,2)+"/"+ed.substr(6,2)+" "+etime.substr(0,2)+":"+etime.substr(2,2)+":"+"00");
        			var tmp = endDate.getTime() - startDate.getTime();
        			
        			if(tmp < 0){
        				this.gfn_message("errors.종료일자.시작일자.이상", "배차|배차");
        				return;
        			}
        		}
        	}
        	
        	if(!this.gfn_checkValidation_NoUpdChk(this.ds_carAlcFlwpsgList, this.ds_validation)) {		// 배차동승자정보
        		return;
        	}
                
        	// update check
        	if(this.comUtils.isDatasetUpdated(this.ds_indvdlExpens)) {
        		var acplcAct = 0;
        		var etcExpens = 0;
        		for(var i = 0; i < this.ds_indvdlExpens.getRowCount(); i++){
        			var expensSe = this.ds_indvdlExpens.getColumn(i, "EXPENS_SE");
        			if(expensSe == "001"){
        				acplcAct += this.ds_indvdlExpens.getColumn(i, "USE_EXPENS");
        			}else{
        				etcExpens += this.ds_indvdlExpens.getColumn(i, "USE_EXPENS");
        			}
        		}
        		this.ds_bsrpIndvdl.setColumn(this.ds_bsrpIndvdl.rowposition, "ACPLC_ACT_CT", acplcAct);
        		this.ds_bsrpIndvdl.setColumn(this.ds_bsrpIndvdl.rowposition, "ETC_EXPENS"  , etcExpens);
        	}

        	this.fn_transaction("saveBsrpDtl");
        }

        
        /*
         * 함수명  	: fn_delete
         * 설명 		: 삭제 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_delete();
         */
        this.fn_delete = function()
        {
        	if(this.ds_bsrpIndvdl.rowposition > -1){
        		
        		var updatePosblAt = this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "UPDATE_POSBL_AT");
        		var confmAt  = this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "CONFM_AT");
        		var canclAt  = this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "CANCL_AT");
        		
        		if(canclAt != '1'){
        			if(updatePosblAt == '1' && confmAt != '1'){
        				if(this.ds_carAlcInfo.rowcount == 0){
        					if(this.gfn_message("confirm.삭제여부")){
        						
        						this.ds_carAlcFlwpsgList.clearData();
        						this.ds_carAlcInfo.clearData();
        						this.ds_indvdlExpens.clearData();
        						this.ds_bsrpIndvdl.deleteRow(this.ds_bsrpIndvdl.rowposition);
        						
        					}
        				} else {
        					this.gfn_message("info.처리불가", "배차정보 삭제 후 진행 가능합니다.");
        				}
        			} else {
        				this.gfn_message("info.처리불가", "현재 등록건은 수정할 수 없습니다.");
        			}
        		} else {
        			if(confmAt != '1'){
        				if(this.gfn_message("confirm.삭제여부")){
        					this.ds_carAlcFlwpsgList.clearData();
        					this.ds_carAlcInfo.clearData();
        					this.ds_indvdlExpens.clearData();
        					this.ds_bsrpIndvdl.deleteRow(this.ds_bsrpIndvdl.rowposition);
        				}
        			} else {
        				this.gfn_message("info.처리불가", "현재 등록건은 수정할 수 없습니다.");
        			}
        		}
        	}
        }

        
        /*
         * 함수명  	: fn_cancel
         * 설명 		: 취소 버튼 이벤트 처리(Dataset 변경 내역 Reset)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_cancel();
         */
        this.fn_cancel = function()
        {
        	if (this.gfn_message("confirm.취소여부")) {
        		this.ds_bsrpIndvdl.reset();			//DATASET ROLLBACK
        		this.ds_bsrpIndvdl.applyChange();	//DATASET COMMIT
        		return;
        	}
        }

        /***********************************************************************************
        * 설명	: 결재
        ***********************************************************************************/
        this.grd_indvdl_onheadclick = function(obj,e)
        {
        	if(e.cell == 0) {
        		this.ds_bsrpIndvdl.set_updatecontrol(false);
        		this.ds_bsrpIndvdl.set_enableevent(false);
        		this.allChk = this.allChk == '1' ? '0' : '1';
        		for(var i = 0; i < this.ds_bsrpIndvdl.getRowCount(); i++) {
        			if(['0','2','3'].indexOf(this.ds_bsrpIndvdl.getColumn(i, "SANCTN_STS")) > -1) {
        				this.ds_bsrpIndvdl.setColumn(i, "SANC_CHK", this.allChk);
        			}
        		}
        		this.ds_bsrpIndvdl.set_enableevent(true);
        		this.ds_bsrpIndvdl.set_updatecontrol(true);
        	}
        }

        this.grd_indvdl_oncellclick = function(obj,e)
        {
        	if(e.col == '0') { 
        		if(this.ds_bsrpIndvdl.getRowType(e.row) != Dataset.ROWTYPE_NORMAL){
        			this.gfn_message("info.진행가능","변경된 정보를 저장");
        			return;
        		}
        		
        		var fRow = this.ds_bsrpIndvdl.rowposition;
        		if(['0','2','3'].indexOf(this.ds_bsrpIndvdl.getColumn(fRow, "SANCTN_STS")) > -1) {
        		
        			var sancChk = this.ds_bsrpIndvdl.getColumn(fRow, "SANC_CHK");
        			sancChk = sancChk == '1' ? '0' : '1';
        			
        			this.ds_bsrpIndvdl.set_updatecontrol(false);
        			this.ds_bsrpIndvdl.set_enableevent(false);
        			this.ds_bsrpIndvdl.setColumn(fRow, "SANC_CHK", sancChk);
        			this.ds_bsrpIndvdl.set_enableevent(true);
        			this.ds_bsrpIndvdl.set_updatecontrol(true);
        		}
        	}
        }

        
        this.fn_sanction = function()
        {
        	if(this.comUtils.isDatasetUpdated(this.ds_bsrpIndvdl)) {
        		this.gfn_message("comm.정보.저장.요청", "출장신청");
        		return;
        	}
           
        	// 결재 전 유효성 체크
        	var sancRowCount = this.ds_bsrpIndvdl.getCaseCount("SANC_CHK == '1'");
        	if(sancRowCount < 1) {
        		this.gfn_message("info.선택데이터.없음.선택.요청");
        		return;
        	}

        	// 결재상신
        	var canclAt         = "0";
        	var subject         = "출장신청";
        	var cnt 			= 0;
        	var deptNm			= "";
        	var mvmnCours		= "";
        	var info			= new Array(11);
        	var arrSancData 	= new Array(111);
        	var arrSancSubData  = new Array();
        	
        	for(var i = 0; i < this.ds_bsrpIndvdl.rowcount; i++){
        		if(this.ds_bsrpIndvdl.getColumn(i, "SANC_CHK") == '1'){
        			var trnsportCt = this.ds_bsrpIndvdl.getColumn(i, "TRNSPORT_CT");
        			if(!this.comUtils.isNull(trnsportCt)) {
        				trnsportCt = "교통비 " + this.comUtils.formatComma(trnsportCt) + "원 ";
        			} else {
        				trnsportCt = "";
        			}
        			
        			var stayngCt = this.ds_bsrpIndvdl.getColumn(i, "STAYNG_CT");
        			if(!this.comUtils.isNull(stayngCt)) {
        				stayngCt = "숙박비 " + this.comUtils.formatComma(stayngCt) + "원 ";
        			} else {
        				stayngCt = "";
        			}
        			
        			var mealCt = this.ds_bsrpIndvdl.getColumn(i, "MEAL_CT");
        			if(!this.comUtils.isNull(mealCt)) {
        				mealCt = "식비 " + this.comUtils.formatComma(mealCt) + "원 ";
        			} else {
        				mealCt = "";
        			}
        			
        			var dailCt = this.ds_bsrpIndvdl.getColumn(i, "DAIL_CT");
        			if(!this.comUtils.isNull(dailCt)) {
        				dailCt = "일비 " + this.comUtils.formatComma(dailCt) + "원 ";
        			} else {
        				dailCt = "";
        			}
        			
        			var actCt = this.ds_bsrpIndvdl.getColumn(i, "ACPLC_ACT_CT");
        			if(!this.comUtils.isNull(actCt)) {
        				actCt = "현지활동비 " + this.comUtils.formatComma(actCt) + "원 ";
        			} else {
        				actCt = "";
        			}
        			
        			var etcExpens = this.ds_bsrpIndvdl.getColumn(i, "ETC_EXPENS");
        			if(!this.comUtils.isNull(etcExpens)) {
        				etcExpens = "현지활동비 " + this.comUtils.formatComma(etcExpens) + "원 ";
        			} else {
        				etcExpens = "";
        			}
        			
        			// 여비
        			var trvctTot = nexacro.toNumber(this.ds_bsrpIndvdl.getColumn(i, "TRVCT_TOTAMT"), 0, 0, 0);
        			trvctTot = this.comUtils.formatComma(trvctTot.toString());
        			
        			// 정산
        			var excclcAmt = trnsportCt + stayngCt + mealCt + dailCt + actCt + etcExpens;
        			
        			var bsrpBgnde = this.dateUtils.format(this.ds_bsrpIndvdl.getColumn(i, "BSRP_BGNDE"), "yyyy. mm. dd");
        			var bsrpEndde = this.dateUtils.format(this.ds_bsrpIndvdl.getColumn(i, "BSRP_ENDDE"), "yyyy. mm. dd");
        			
        			var bsrpBgnTm = this.comUtils.formatMask(this.ds_bsrpIndvdl.getColumn(i, "BSRP_BEGIN_TM"), "##:##");
        			var bsrpEndTm = this.comUtils.formatMask(this.ds_bsrpIndvdl.getColumn(i, "BSRP_END_TM"), "##:##");
        			
        			// 출장목적
        			var bsrpPurps = this.ds_bsrpIndvdl.getColumn(i, "BSRP_PURPS")
        			
        			// 차량
        			var tfcmnSe = this.ds_bsrpIndvdl.getColumn(i, "TFCMN_SE");
        			var strUseAt = "미사용";
        			if(tfcmnSe == '001') {
        				var vhcleNo = this.ds_bsrpIndvdl.getColumn(i, "VHCLE_NO");
        				if(!this.comUtils.isNull(vhcleNo)) {
        					strUseAt = vhcleNo;
        				}else{
        					strUseAt = "사용";
        				}
        				
        				if(!this.comUtils.isNull(this.ds_bsrpIndvdl.getColumn(i, "DRVER_LIST"))) {
        					bsrpPurps += "\\r\\n" + "\\r\\n" + "( " + this.ds_bsrpIndvdl.getColumn(i, "DRVER_LIST") + " )";
        				}
        			}

        			
        			info= [
        				 this.ds_bsrpIndvdl.getColumn(i, "DEPT_NM")		// 부서
        				,this.ds_bsrpIndvdl.getColumn(i, "CLSF_NM")		// 직급
        				,this.ds_bsrpIndvdl.getColumn(i, "EMPNM")		// 성명
        				,bsrpBgnde + ' ' + bsrpBgnTm					// 부터
        				,bsrpEndde + ' ' + bsrpEndTm					// 까지
        				,this.ds_bsrpIndvdl.getColumn(i, "DSTN_NM")		// 출장지
        				,bsrpPurps	// 출장목적
        				,this.ds_bsrpIndvdl.getColumn(i, "MVMN_COURS")	// 이동경로
        				,trvctTot										// 여비
        				,excclcAmt										// 정산
        				,strUseAt										// 차량유무
        			];
        			
        			if(cnt == 0) {
        				canclAt     = this.ds_bsrpIndvdl.getColumn(i, "CANCL_AT");
        				deptNm 		= this.ds_bsrpIndvdl.getColumn(i, "DEPT_NM");
        				mvmnCours	= this.ds_bsrpIndvdl.getColumn(i, "MVMN_COURS");
        			}
        			
        			if(cnt < 10){			
        				arrSancData[  1 + cnt*11] = this.ds_bsrpIndvdl.getColumn(i, "DEPT_NM");     // 부서
        				arrSancData[  2 + cnt*11] = this.ds_bsrpIndvdl.getColumn(i, "CLSF_NM");     // 직급
        				arrSancData[  3 + cnt*11] = this.ds_bsrpIndvdl.getColumn(i, "EMPNM");       // 성명
        				arrSancData[  4 + cnt*11] = bsrpBgnde + ' ' + bsrpBgnTm;					// 부터
        				arrSancData[  5 + cnt*11] = bsrpEndde + ' ' + bsrpEndTm;					// 까지
        				arrSancData[  6 + cnt*11] = this.ds_bsrpIndvdl.getColumn(i, "DSTN_NM");     // 출장지
        				arrSancData[  7 + cnt*11] = bsrpPurps										// 출장목적
        				arrSancData[  8 + cnt*11] = this.ds_bsrpIndvdl.getColumn(i, "MVMN_COURS");	// 이동경로
        				arrSancData[  9 + cnt*11] = trvctTot										// 여비
        				arrSancData[ 10 + cnt*11] = excclcAmt										// 정산
        				arrSancData[ 11 + cnt*11] = strUseAt										// 차량유무
        			} 
        // 			else {
        // 				arrSancSubData.push(info[0]);
        // 				arrSancSubData.push(info[1]);
        // 				arrSancSubData.push(info[2]);
        // 				arrSancSubData.push(info[3]);
        // 				arrSancSubData.push(info[4]);
        // 				arrSancSubData.push(info[5]);
        // 				arrSancSubData.push(info[6]);
        // 				arrSancSubData.push(info[7]);
        // 				arrSancSubData.push(info[8]);
        // 				arrSancSubData.push(info[9]);
        // 				arrSancSubData.push(info[10]);
        // 			}
        			cnt++;
        		}
        	}
        	if(canclAt == "1"){
        		subject = "출장취소신청";
        	}
        	if(cnt > 1) {
        		arrSancData[ 0] = deptNm + " "+ arrSancData[5] + " 외 "+ (cnt - 1) + "건의 " + subject; //결재제목
        	} else {
        		arrSancData[ 0] = deptNm + " "+ arrSancData[5] + " " + subject; //결재제목
        	}
        	
        	this.fn_callHandySanc2(
        		 this						// context
        		,'0000000046'				// formId
        		,this.ds_bsrpIndvdl			// misDataset
        		,"TBHRM_BSRP_INDVDL"		// tableName
        		,["EMPNO", "BSRP_SEQ"]		// tableKey
        		,arrSancData				// arrSancData
        		,null	//arrSancSubData
        		,"SANC_CHK"
        	);
        }

        /**********************************************************************
        * 사용자 정의 함수
        ***********************************************************************/

        /*
         * 함수명  	: fn_get_imgUrl
         * 설명 		: 전자결재종류 이미지 경로 리턴 함수
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_get_imgUrl();
         */
        this.fn_get_imgUrl = function(sanctnSts)
        {
        	return this.gfn_getSanctnImgUrl(sanctnSts);
        }

        /*
         * 함수명  	: fn_get_imgUrl
         * 설명 		: 업데이트 가능 여부 리턴 함수
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_get_imgUrl();
         */
        this.fn_update_at = function()
        {
        	var confmAt = this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "CONFM_AT");
        	var updateAt = this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "UPDATE_POSBL_AT");
        	
        	if(confmAt != '1' && updateAt == '1' ){
        		return true;
        	} else {
        		return false;
        	}
        	
        	//return this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "UPDATE_POSBL_AT") == '1' ? true : false;
        	
        }

        /*
         * 함수명  	: fn_cal_etcAmt
         * 설명 		: 현지활동 및 기타경비 합계 계산 함수
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_cal_etcAmt();
         */
        this.fn_cal_etcAmt = function(){
        	var acplcActCt = this.ds_indvdlExpens.getCaseSum("EXPENS_SE == '001'", "USE_EXPENS");
        	var etcExpens =  this.ds_indvdlExpens.getCaseSum("EXPENS_SE == '002'", "USE_EXPENS");
        	
        	this.ds_bsrpIndvdl.setColumn(this.ds_bsrpIndvdl.rowposition, "ACPLC_ACT_CT", acplcActCt);
        	this.ds_bsrpIndvdl.setColumn(this.ds_bsrpIndvdl.rowposition, "ETC_EXPENS", etcExpens);
        }

        /*
         * 함수명  	: fn_cal_trvct
         * 설명 		: 개인출장내역 일비, 식비계산 
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_cal_trvct();
         */
        this.fn_cal_trvct = function(){	
        	var se       = this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "JSSFC_SE");
        	var bgnDe    = this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "BSRP_BGNDE");
        	var bgnTm    = this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "BSRP_BEGIN_TM");
        	var endDe    = this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "BSRP_ENDDE");
        	var endTm    = this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "BSRP_END_TM");
        	var whthrcAt = this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "WHTHRC_AT");
        	var ordtmSe  = this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "ORDTM_SE");
        	var tfcmnSe  = this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "TFCMN_SE");
        	var empno    = this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "EMPNO");
        	
        	if(!this.comUtils.isNull(se) && !this.comUtils.isNull(bgnDe) && !this.comUtils.isNull(bgnTm) 
        	   && !this.comUtils.isNull(endDe) && !this.comUtils.isNull(endTm) ) {
        		
        		var bgnH = bgnTm.substr(0, 2);
        		var bgnM = bgnTm.substr(2, 2);
        		var endH = endTm.substr(0, 2);
        		var endM = endTm.substr(2, 2);
        		
        		if(bgnH > 23 || bgnM > 59) {
        			this.gfn_message("errors.항목.입력값.범위", "출장 시작시각|00:00|23:59");
        			return false;
        		}
        		if(endH > 23 || endM > 59) {
        			this.gfn_message("errors.항목.입력값.범위", "출장 종료시각|00:00|23:59");
        			return false;
        		}
        		
        		this.ds_cond_sub2.clearData();
        		this.ds_cond_sub2.addRow();
        		this.ds_cond_sub2.setColumn(0, "JSSFC_SE", se);
        		this.ds_cond_sub2.setColumn(0, "BSRP_BGNDE", bgnDe);
        		this.ds_cond_sub2.setColumn(0, "BSRP_BEGIN_TM", bgnTm);
        		this.ds_cond_sub2.setColumn(0, "BSRP_ENDDE", endDe);
        		this.ds_cond_sub2.setColumn(0, "BSRP_END_TM", endTm);
        		this.ds_cond_sub2.setColumn(0, "WHTHRC_AT", whthrcAt);
        		this.ds_cond_sub2.setColumn(0, "ORDTM_SE", ordtmSe);
        		this.ds_cond_sub2.setColumn(0, "TFCMN_SE", tfcmnSe);
        		this.ds_cond_sub2.setColumn(0, "ROW_POSITION", this.ds_bsrpIndvdl.rowposition);
        		this.ds_cond_sub2.setColumn(0, "EMPNO", empno);
        		
        		this.fn_transaction("selectTrvctCalc");
        	}
        }

        /**********************************************************************
        * Dataset 관련 이벤트 처리
        ***********************************************************************/

        /*
         * 함수명  	: ds_bsrpIndvdl_canrowposchange
         * 설명 		: Dataset 행 변경 전 이벤트 처리(개인별출장)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.ds_bsrpIndvdl_canrowposchange(obj,e);
         */
        this.ds_bsrpIndvdl_canrowposchange = function(obj,e)
        {
        // 	if(this.ds_popup_reqstList.getRowCount()>0){
        // 		if(this.gfn_message("confirm.자료.삭제여부", "배차정보가 사라집니다.")){
        // 			this.ds_popup_reqstList.clearData();
        // 			this.ds_popup_caralcFlwpsg.clearData();
        // 		}else{
        // 			return false;
        // 		}
        // 	}
        	// 데이터셋 수정 여부체크(경비상세)
        	if (this.comUtils.isDatasetUpdated(this.ds_indvdlExpens)) {
        		obj.setColumn(e.oldrow, "ACPLC_ACT_CT", this.acplcActCt);
        		obj.setColumn(e.oldrow, "ETC_EXPENS", this.etcExpens);
        	}
        }

        
        /*
         * 함수명  	: ds_bsrpIndvdl_canrowposchange
         * 설명 		: Dataset 행 변경 후 이벤트 처리(개인별출장)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.ds_bsrpIndvdl_canrowposchange(obj,e);
         */
        this.ds_bsrpIndvdl_onrowposchanged = function(obj,e)
        {
        	this.ds_indvdlExpens.clearData();
        	this.ds_fileList.clearData();
        	this.ds_carAlcInfo.clearData();
        	this.ds_carAlcFlwpsgList.clearData();
        	
        	var formatId = this.grd_indvdl.formatid;
        	if(formatId == "nWhthrc") {
        		this.tab_bsrp.tabpage1.btn_Add_R01.set_enable(false);
        		this.tab_bsrp.tabpage1.btn_Can_R01.set_enable(false);
        		this.tab_bsrp.tabpage1.btn_Del_R01.set_enable(false);
        	}
        	
        	this.tab_bsrp.tabpage2.btn_delFiles.set_enable(false);
        	this.tab_bsrp.tabpage2.btn_uploadFiles.set_enable(false);
        	
        	this.tab_carAlc.tpg1.btn_Add_R.set_enable(false);
        	this.tab_carAlc.tpg1.btn_Del_R.set_enable(false);
        	
        	this.tab_carAlc.tpg1.btn_deleteCarAlc.set_enable(false);
        	this.tab_carAlc.tpg1.btn_carAlcList.set_visible(false);
        	this.tab_carAlc.tpg1.edt_dstn.set_cssclass("edt_WF_Essential");
        	this.tab_carAlc.tpg1.edt_dstn.set_readonly(false);
        	this.tab_carAlc.tpg1.edt_busins.set_cssclass("edt_WF_Essential");
        	this.tab_carAlc.tpg1.edt_busins.set_readonly(false);
        	this.tab_carAlc.tpg1.cal_useDe.set_cssclass("cal_WF_Essential");
        	this.tab_carAlc.tpg1.cal_useDe.set_readonly(false);
        	this.tab_carAlc.tpg1.cal_endDe.set_cssclass("cal_WF_Essential");
        	this.tab_carAlc.tpg1.cal_endDe.set_readonly(false);
        	this.tab_carAlc.tpg1.msk_useTm.set_cssclass("msk_WF_Essential");
        	this.tab_carAlc.tpg1.msk_useTm.set_readonly(false);
        	this.tab_carAlc.tpg1.msk_endTm.set_cssclass("msk_WF_Essential");
        	this.tab_carAlc.tpg1.msk_endTm.set_readonly(false);
        	this.tab_carAlc.tpg1.btn_vhcleList_bgn.set_enable(false);
        	this.tab_carAlc.tpg1.btn_vhcleList_end.set_enable(false);
        						
        	if(e.newrow>-1) {
        		this.acplcActCt = obj.getColumn(e.newrow, "ACPLC_ACT_CT");	// 현지활동비 전역변수
        		this.etcExpens = obj.getColumn(e.newrow, "ETC_EXPENS");		// 기타경비 전역변수
        		
        		var updateAt  = obj.getColumn(e.newrow, "UPDATE_POSBL_AT");	// 개인별 출장내역 업데이트 가능 여부(0:불가능, 1:가능)
        		var confmAt  = obj.getColumn(e.newrow, "CONFM_AT");	// 개인별 출장내역 업데이트 가능 여부(0:불가능, 1:가능)
        		var tfcmnSe   = obj.getColumn(e.newrow, "TFCMN_SE");		// 개인별 출장내역 교통수단 항목
        		var caralcSeq = obj.getColumn(e.newrow, "CARALC_SEQ");		// 개인별 출장내역 배차키
        		
        		if(updateAt != '0' && confmAt != '1'){										// 업데이트 가능
        			var formatId = this.grd_indvdl.formatid;
        			if(formatId == "nWhthrc") {
        				this.tab_bsrp.tabpage1.btn_Add_R01.set_enable(true);
        				this.tab_bsrp.tabpage1.btn_Can_R01.set_enable(true);
        				this.tab_bsrp.tabpage1.btn_Del_R01.set_enable(true);
        			}
        			
        			this.tab_bsrp.tabpage2.btn_delFiles.set_enable(true);
        			this.tab_bsrp.tabpage2.btn_uploadFiles.set_enable(true);
        			
        			if(tfcmnSe == "001"){									// 교통수단이 공용차량일 때
        				this.tab_carAlc.tpg1.btn_Add_R.set_enable(true);
        				this.tab_carAlc.tpg1.btn_Del_R.set_enable(true);
        				this.tab_carAlc.tpg1.btn_deleteCarAlc.set_enable(true);
        				this.tab_carAlc.tpg1.btn_carAlcList.set_visible(true);
        				this.tab_carAlc.tpg1.btn_vhcleList_bgn.set_enable(true);
        				this.tab_carAlc.tpg1.btn_vhcleList_end.set_enable(true);
        			}
        		}
        		
        		if(obj.getRowType(e.newrow) != Dataset.ROWTYPE_INSERT) {	// 개인별출장의 현재 행 상태가 신규가 아닐때만 하단의 상세정보를 조회
        			
        			// 경비상세정보 검색조건 설정
        			this.ds_cond_sub.clearData();
        			this.ds_cond_sub.addRow();
        			this.ds_cond_sub.setColumn(0, "EMPNO", obj.getColumn(e.newrow, "EMPNO"));			// 츨장비 상새내역 조회 검색조건 설정
        			this.ds_cond_sub.setColumn(0, "BSRP_SEQ", obj.getColumn(e.newrow, "BSRP_SEQ"));		// 츨장비 상새내역 조회 검색조건 설정
        			this.ds_cond_sub.setColumn(0, "FILE_SN", obj.getColumn(e.newrow, "FILE_SN"));		// 첨부파일조회 검색조건 설정
        			this.fn_transaction("selectIndvdlExpens");
        		}
        	}
        }

        /*
         * 함수명  	: ds_bsrpIndvdl_cancolumnchange
         * 설명 		: Dataset 데이터 변경 전 이벤트 처리(개인별출장)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.ds_bsrpIndvdl_cancolumnchange(obj,e);
         */
        this.ds_bsrpIndvdl_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == "TFCMN_SE") {
        		
        		if(e.oldvalue == '001'){
        			var empno = obj.getColumn(e.row, "EMPNO");
        			var seq = obj.getColumn(e.row, "BSRP_SEQ");
        			var index = this.ds_carAlcFlwpsgList.findRowExpr("BSRP_EMPNO == '"+empno+"' && BSRP_SEQ == '"+seq+"'");
        			
        			if(index > -1){
        				this.gfn_message("info.처리불가", "공용차량 동승자는 교통수단을 변경할 수 없습니다.");
        				return false;
        			}
        		}
        		if(e.newvalue != "001" && e.oldvalue == "001" && this.ds_carAlcInfo.rowcount > 0){
        			if(!this.gfn_message("comm.행위여부", "기존 입력된 배차정보가 삭제됩니다.\n계속")){
        				return false;
        			}
        		}
        	}
        }

        /*
         * 함수명  	: ds_bsrpIndvdl_oncolumnchanged
         * 설명 		: Dataset 데이터 변경 후 이벤트 처리(개인별출장)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.ds_bsrpIndvdl_oncolumnchanged(obj,e);
         */
        this.ds_bsrpIndvdl_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "BSRP_BEGIN_TM") {
         		var newValue = e.newvalue.replace(/\s/g, '0');
         		obj.setColumn(e.row, e.columnid, newValue);
         		this.fn_cal_trvct();	// 일비, 식비 계산
        	} else if(e.columnid == "BSRP_END_TM") {
         		var newValue = e.newvalue.replace(/\s/g, '0');
         		obj.setColumn(e.row, e.columnid, newValue);
         		this.fn_cal_trvct();	// 일비, 식비 계산
        	} else if(e.columnid == "TFCMN_SE") {
        		if(e.newvalue == "001"){
        			this.tab_carAlc.tpg1.btn_Add_R.set_enable(true);
        			this.tab_carAlc.tpg1.btn_Del_R.set_enable(true);
        			this.tab_carAlc.tpg1.btn_deleteCarAlc.set_enable(true);
        			this.tab_carAlc.tpg1.btn_carAlcList.set_visible(true);
        			this.tab_carAlc.tpg1.btn_vhcleList_bgn.set_enable(true);
        			this.tab_carAlc.tpg1.btn_vhcleList_end.set_enable(true);
        		} else {
        			this.tab_carAlc.tpg1.btn_Add_R.set_enable(false);
        			this.tab_carAlc.tpg1.btn_Del_R.set_enable(false);
        			this.tab_carAlc.tpg1.btn_deleteCarAlc.set_enable(false);
        			this.tab_carAlc.tpg1.btn_carAlcList.set_visible(false);
        			this.tab_carAlc.tpg1.btn_vhcleList_bgn.set_enable(false);
        			this.tab_carAlc.tpg1.btn_vhcleList_end.set_enable(false);
        			
        			this.ds_carAlcInfo.clearData();
        			this.ds_carAlcFlwpsgList.clearData();
        		}
        		this.fn_cal_trvct();	// 일비, 식비 계산
        	} else if(e.columnid == "BSRP_BGNDE" || e.columnid == "BSRP_ENDDE" || e.columnid == "JSSFC_SE"){
        		this.fn_cal_trvct();	// 일비, 식비 계산
        		
        	} else if(e.columnid == "TRNSPORT_CT" || e.columnid == "STAYNG_CT" || e.columnid == "MEAL_CT" 
        	       || e.columnid == "DAIL_CT" || e.columnid == "ACPLC_ACT_CT" || e.columnid == "ETC_EXPENS"){
        			
        		var temp1 = this.comUtils.isNull(obj.getColumn(e.row, "TRNSPORT_CT")) ? 0 : obj.getColumn(e.row, "TRNSPORT_CT");
        		var temp2 = this.comUtils.isNull(obj.getColumn(e.row, "STAYNG_CT")) ? 0 : obj.getColumn(e.row, "STAYNG_CT");
        		var temp3 = this.comUtils.isNull(obj.getColumn(e.row, "MEAL_CT")) ? 0 : obj.getColumn(e.row, "MEAL_CT");
        		var temp4 = this.comUtils.isNull(obj.getColumn(e.row, "DAIL_CT")) ? 0 : obj.getColumn(e.row, "DAIL_CT");
        		var temp5 = this.comUtils.isNull(obj.getColumn(e.row, "ACPLC_ACT_CT")) ? 0 : obj.getColumn(e.row, "ACPLC_ACT_CT");
        		var temp6 = this.comUtils.isNull(obj.getColumn(e.row, "ETC_EXPENS")) ? 0 : obj.getColumn(e.row, "ETC_EXPENS");
        		
        		obj.setColumn(e.row, "TRVCT_TOTAMT", temp1+temp2+temp3+temp4+temp5+temp6);
        	
        	/*
        	} else if(e.columnid == "CTY_SEQ"){
        		var temp1 = this.ds_bsrpCty.getColumn(this.ds_bsrpCty.findRow("CTY_SEQ", e.newvalue), "WHTHRC_AT");		// 선택도시의 관내여부
        		
        		obj.setColumn(e.row, "WHTHRC_AT", temp1);
        		this.fn_cal_trvct();	// 일비, 식비 계산
        	*/
        	} else if(e.columnid == "CONFM_AT"){
        		obj.set_rowposition(-1);
        		obj.set_rowposition(e.row);
        	} else if(e.columnid == "WHTHRC_AT"){
        		this.fn_cal_trvct();	// 일비, 식비 계산
        	} else if(e.columnid == "ORDTM_SE"){
        		if(e.newvalue == "1") {
        			this.ds_bsrpIndvdl.set_enableevent(false);
        			obj.setColumn(e.row, "TFCMN_SE", "001");
        			this.ds_bsrpIndvdl.set_enableevent(true);
        		}
        		this.fn_cal_trvct();	// 일비, 식비 계산
        	}
        }

        

        this.fn_grdCellComboControl = function(nRow,type) {
        	// Type : edittype, combodisplay
        	
        	var confmAt       = this.ds_bsrpIndvdl.getColumn(nRow, "CONFM_AT");
        	var updatePosblAt = this.ds_bsrpIndvdl.getColumn(nRow, "UPDATE_POSBL_AT");
        	var ordtmSe       = this.ds_bsrpIndvdl.getColumn(nRow, "ORDTM_SE");
        	var rtnStr = "";
        	
        	// 상시구분이 상시일 경우
        	if(ordtmSe == "1") {
        		if(type == "edittype") {
        			rtnStr = "none";
        		}
        		else if(type == "combodisplay") {
        			rtnStr = "edit";
        		}
        		return;
        	}
        	
        	if(confmAt == "1") {
        		if(type == "edittype") {
        			rtnStr = "none";
        		}
        		else if(type == "combodisplay") {
        			rtnStr = "edit";
        		}
        	}
        	else {
        		if(updatePosblAt == "1") {
        			if(type == "edittype") {
        				rtnStr = "combo";
        			}
        			else if(type == "combodisplay") {
        				rtnStr = "display";
        			}
        		}
        		else {
        			if(type == "edittype") {
        				rtnStr = "none";
        			}
        			else if(type == "combodisplay") {
        				rtnStr = "edit";
        			}
        		}
        	}
        	return rtnStr;
        }

        

        
        /*
         * 함수명  	: ds_indvdlExpens_oncolumnchanged
         * 설명 		: Dataset 데이터 변경 후 이벤트 처리(경비상세)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.ds_indvdlExpens_oncolumnchanged(obj,e);
         */
        this.ds_indvdlExpens_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "EXPENS_SE" || e.columnid == "USE_EXPENS"){
        		this.fn_cal_etcAmt();	// 현지활동 및 기타경비계산 함수
        	}
        }

        /*
         * 함수명  	: ds_carAlcInfo_oncolumnchanged
         * 설명 		: Dataset 데이터 변경 후 이벤트 처리(배차기본정보)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.ds_carAlcInfo_oncolumnchanged(obj,e);
         */
        this.ds_carAlcInfo_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "CARALC_BEGIN_TM") {
        		var newValue = e.newvalue.replace(/\s/g, '0');
        		this.tab_carAlc.tpg1.msk_useTm.set_value(newValue);
        	}
        	
        	if(e.columnid == "CARALC_END_TM") {
        		var newValue = e.newvalue.replace(/\s/g, '0');
        		this.tab_carAlc.tpg1.msk_endTm.set_value(newValue);
        	}
        }

        /**********************************************************************
        * Button 관련 이벤트 처리
        ***********************************************************************/

        /*
         * 함수명  	: btn_Add_R01_onclick
         * 설명 		: '경비상세-행추가' 버튼 클릭 후 이벤트 처리(출장비 내역)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_Add_R01_onclick();
         */
        this.btn_Add_R01_onclick = function(obj,e)
        {
        	var updatePosblAt = this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "UPDATE_POSBL_AT");
        	
        	if(this.ds_bsrpIndvdl.rowposition > -1){
        		if(updatePosblAt == '1'){
        			var nRow = this.ds_indvdlExpens.addRow();
        			this.ds_indvdlExpens.setColumn(nRow, "EMPNO", this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "EMPNO"));
        			this.ds_indvdlExpens.setColumn(nRow, "BSRP_SEQ", this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "BSRP_SEQ"));
        			this.ds_indvdlExpens.setColumn(nRow , "USE_EXPENS", 0);
        		} else {
        			this.gfn_message("info.처리불가", "현재 출장건은 수정할 수 없습니다.");
        		}
        	}
        }

        
        /*
         * 함수명  	: btn_Del_R01_onclick
         * 설명 		: '경비상세-행삭제' 버튼 클릭 후 이벤트 처리(출장비 내역)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_Del_R01_onclick();
         */
        this.btn_Del_R01_onclick = function(obj,e)
        {
        	var updatePosblAt = this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "UPDATE_POSBL_AT");
        	
        	if(this.ds_indvdlExpens.rowposition > -1) {
        		if(updatePosblAt == '1'){
        			if(this.gfn_message("confirm.삭제여부")){
        				this.ds_indvdlExpens.deleteRow(this.ds_indvdlExpens.rowposition);
        				this.fn_cal_etcAmt();	// 현지활동 및 기타경비계산 함수
        			}
        		} else {
        			this.gfn_message("info.처리불가", "현재 출장건은 수정할 수 없습니다.");
        		}
        	}
        }

        
        /*
         * 함수명  	: btn_Can_R01_onclick
         * 설명 		: '경비상세-행취소' 버튼 클릭 후 이벤트 처리(출장비 내역)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_Can_R01_onclick();
         */
        this.btn_Can_R01_onclick = function(obj,e)
        {
        	if(this.gfn_message("confirm.취소여부")) {
        		this.ds_indvdlExpens.reset();
        		this.fn_cal_etcAmt();	// 현지활동 및 기타경비계산 함수
        	}
        }

        
        /*
         * 함수명  	: btn_uploadFiles_onclick
         * 설명 		: '파일업로드' 버튼 클릭 후 이벤트 처리(출장비 내역)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_uploadFiles_onclick();
         */
        this.btn_uploadFiles_onclick = function(obj,e)
        {
        	var nRow     = this.ds_bsrpIndvdl.rowposition;	
        	var nRowType = this.ds_bsrpIndvdl.getRowType(nRow);
        	
        	if(nRow < 0){
        		this.gfn_message("comm.항목.선택.요청","대상 정보");
        		return;
        	}
        	
        	if(nRowType == 2){
        		this.gfn_message("info.진행가능","신규 정보를 저장");
        		return;
        	}
        	
        	// 첨부파일 업로드(fileSn 자동채번 / 첨부파일 Master에 ROW추가 / 파일 업로드 및 자동저장 / 테이블에 fileSn반영 / 데이터셋에 fileSn반영, 단 신규 ROW가 아닐경우 ROWTYPE은 유지)
        	this.mCallback = function() {
        		this.fn_autoFileSn(
        			 "MIS"									// 대분류   (SYS_SE)
        			,"HRM"									// 업무구분 (JOB_SE)
        			, this.File_UpDownManager	            // fileManager 오브젝트
        			, this.ds_fileList		                // fileObject
        			, this.ds_bsrpIndvdl	    		    // fileSn을 불러오거나 반영해야 하는 컬럼
        			, "TBHRM_BSRP_INDVDL"	            	// fileSn을 저장할 테이블
        			, "FILE_SN"								// fileSn 컬럼명이 다를 경우를 대비
        			, ["EMPNO", "BSRP_SEQ"]					// fileSn을 저장할 테이블의 PK (FileSn 확인 및 자동반영목적)
        		);
        	}
        	
        	this.mCallback();
        }

        
        /*
         * 함수명  	: btn_uploadFiles_onclick
         * 설명 		: '파일다운로드' 버튼 클릭 후 이벤트 처리(출장비 내역)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_uploadFiles_onclick();
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
         * 설명 		: '파일삭제' 버튼 클릭 후 이벤트 처리(출장비 내역)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_delFiles_onclick();
         */
        this.btn_delFiles_onclick = function(obj,e)
        {
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
        	var sController  = "hsco/cmm/file/deleteFile.do";
        	var sInDatasets  = "input1=ds_fileList:U";
        	var sOutDatasets = "ds_fileList=output1";
        	
        	Ex.core.tran(this, strSvcId, sController, sInDatasets, sOutDatasets); 
        }

         /*
         * 함수명  	: fn_onFileSuccess
         * 설명 		: 파일 업로드 성공시 이벤트
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_onFileSuccess();
         */
        this.fn_onFileSuccess = function(){
        	this.gfn_message("success.처리.성공");
        	
        	var nRow = this.ds_bsrpIndvdl.rowposition;
        	this.ds_cond_sub.setColumn(0, "FILE_SN", this.ds_bsrpIndvdl.getColumn(nRow, "FILE_SN"));
        	
        	this.fn_transaction("selectFileList");
        }

         /*
         * 함수명  	: fn_onFileError
         * 설명 		: 파일 업로드 실패시 이벤트
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_onFileError();
         */
        this.fn_onFileError = function(){
        	
        	//this.gfn_message("info.저장.초과", "이미지 파일만");	
        }

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
         * 함수명  	: file_upload_popup
         * 설명 		: 첨부파일 그리드 Body의 체크 버튼이 눌러졌을 때, Head 부분의 체크 버튼을 꺼 줌.
         * params  		: None
         * return Type 	: None
         * 사용법		: this.file_upload_popup(obj,e);
         */
        this.grd_cmmnAtchmnfl_oncellclick = function(obj,e)
        {
        	if(e.cell == 0) {
        		obj.setCellProperty("Head", e.cell, "text", "0");
        	}
        }

        /*
         * 함수명  	: tab_carAlc_tpg1_btn_deleteCarAlc_onclick
         * 설명 		: 배차삭제 버튼 클릭 후 이벤트 처리(배차기본정보)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.tab_carAlc_tpg1_btn_deleteCarAlc_onclick();
         */
        this.tab_carAlc_tpg1_btn_deleteCarAlc_onclick = function(obj,e)
        {
        	var updatePosblAt = this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "UPDATE_POSBL_AT");
        	
        	if(updatePosblAt == '1'){
        		if(this.ds_carAlcInfo.rowposition > -1) {
        			if(this.gfn_message("confirm.삭제여부")){
        				this.ds_carAlcFlwpsgList.deleteAll();
        				this.ds_carAlcInfo.deleteAll();
        			}
        		}
        	} else {
        		this.gfn_message("info.처리불가", "현재 출장건은 수정할 수 없습니다.");
        	}
        }

        /*
         * 함수명  	: div_bsrp_btn_vhcle_onclick
         * 설명 		: '배차정보-차량선택' 버튼 클릭 후 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.div_bsrp_btn_vhcle_onclick();
         */
        this.tab_carAlc_tpg1_btn_carAlcList_onclick = function(obj,e)
        {
        	var empno = this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "EMPNO");
        	if(this.comUtils.isNull(empno)) {
        		this.gfn_message("info.처리불가", "출장자를 선택하여 주십시오.");
        		return;
        	}
        	
        	var parm = {
        		arg_0 : this  //==> 필수, 팝업을 호출하는 form을 참조할 수 있도록 팝업에 Argument로 넘겨준다. (반드시 기술해야 함.)
        		,arg_1 : this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "DEPT_CODE")
        		,arg_2 : this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "DEPT_NM")
        	};
        	this.gfn_popup("carAlcPopup", 500, 450, "", parm, "mis_hrm::HRM090401_P1.xfdl", "fn_popupCallback", true);
        }

        /*
         * 함수명  	: btn_vhcleList_bgn_onclick
         * 설명 		: '배차시작일자 선택' 버튼 클릭 후 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_vhcleList_bgn_onclick();
         */
        this.btn_vhcleList_bgn_onclick = function(obj,e)
        {
        	var updatePosblAt = this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "UPDATE_POSBL_AT");
        	
        	if(this.ds_bsrpIndvdl.rowposition > -1){
        		if(updatePosblAt == '1'){
        			var vhcleCode = this.ds_carAlcInfo.getColumn(this.ds_carAlcInfo.rowposition, "VHCLE_CODE");
        			if(this.comUtils.isNull(vhcleCode)) {
        				this.gfn_message("info.처리불가", "배차차량을 선택하여 주십시오.");
        				return;
        			}
        			
        			var parm = {
        				 arg_0 : this  //==> 필수, 팝업을 호출하는 form을 참조할 수 있도록 팝업에 Argument로 넘겨준다. (반드시 기술해야 함.)
        				,arg_1 : this.ds_carAlcInfo.getColumn(this.ds_carAlcInfo.rowposition, "DRVER_DEPT_CODE")	// 운전자 소속부서 (팝업에서 차량관리부서 조회조건으로 사용)
        				,arg_2 : this.ds_carAlcInfo.getColumn(this.ds_carAlcInfo.rowposition, "DRVER_DEPT_NM")
        				,arg_3 : this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "BSRP_BGNDE")			// 배차시작일 (팝업 조회일자 조회조건으로 사용)
        				,arg_4 : this.ds_carAlcInfo.getColumn(this.ds_carAlcInfo.rowposition, "VHCLE_CODE")			// 배차차량코드 (팝업 차량명 조회조건으로 사용)
        				,arg_5 : this.ds_carAlcInfo.getColumn(this.ds_carAlcInfo.rowposition, "VHCLE_NM")
        				,arg_6 : "begin"																			// 팝업호출 구분자
        				,arg_7 : this.ds_carAlcInfo.getColumn(this.ds_carAlcInfo.rowposition, "CARALC_SEQ")
        			};
        			this.gfn_popup("carAlcBgnTm", 500, 450, "", parm, "mis_hrm::HRM070202_P2.xfdl", "fn_popupCallback", true);
        		} else {
        			this.gfn_message("info.처리불가", "현재 출장건은 수정할 수 없습니다.");
        		}
        	}
        }

        /*
         * 함수명  	: btn_vhcleList_end_onclick
         * 설명 		: '배차종료일자 선택' 버튼 클릭 후 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_vhcleList_end_onclick();
         */
        this.btn_vhcleList_end_onclick = function(obj,e)
        {
        	var updatePosblAt = this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "UPDATE_POSBL_AT");
        	
        	if(this.ds_bsrpIndvdl.rowposition > -1){
        		if(updatePosblAt == '1'){
        			var vhcleCode = this.ds_carAlcInfo.getColumn(this.ds_carAlcInfo.rowposition, "VHCLE_CODE");
        			if(this.comUtils.isNull(vhcleCode)) {
        				this.gfn_message("info.처리불가", "배차차량을 선택하여 주십시오.");
        				return;
        			}
        			
        			var parm = {
        				 arg_0 : this  //==> 필수, 팝업을 호출하는 form을 참조할 수 있도록 팝업에 Argument로 넘겨준다. (반드시 기술해야 함.)
        				,arg_1 : this.ds_carAlcInfo.getColumn(this.ds_carAlcInfo.rowposition, "DRVER_DEPT_CODE")	// 운전자 소속부서 (팝업에서 차량관리부서 조회조건으로 사용)
        				,arg_2 : this.ds_carAlcInfo.getColumn(this.ds_carAlcInfo.rowposition, "DRVER_DEPT_NM")
        				,arg_3 : this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "BSRP_ENDDE")			// 배차종료일 (팝업 조회일자 조회조건으로 사용)
        				,arg_4 : this.ds_carAlcInfo.getColumn(this.ds_carAlcInfo.rowposition, "VHCLE_CODE")			// 배차차량코드 (팝업 차량명 조회조건으로 사용)
        				,arg_5 : this.ds_carAlcInfo.getColumn(this.ds_carAlcInfo.rowposition, "VHCLE_NM")
        				,arg_6 : "end"																				// 팝업호출 구분자
        				,arg_7 : this.ds_carAlcInfo.getColumn(this.ds_carAlcInfo.rowposition, "CARALC_SEQ")
        			};
        			this.gfn_popup("carAlcEndTm", 500, 450, "", parm, "mis_hrm::HRM070202_P2.xfdl", "fn_popupCallback", true);
        		} else {
        			this.gfn_message("info.처리불가", "현재 출장건은 수정할 수 없습니다.");
        		}
        	}
        }

        /*
         * 함수명  	: btn_vhcleList_end_onclick
         * 설명 		: '동승자-행추가' 버튼 클릭 후 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_vhcleList_end_onclick();
         */
        this.btn_Add_Flwpsg_onclick = function(obj,e)
        {
        	
        	var updatePosblAt = this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "UPDATE_POSBL_AT");
        	var cnt = this.ds_carAlcInfo.rowcount;
        	
        	if(this.ds_bsrpIndvdl.rowposition > -1){
        		if(updatePosblAt == '1'){
        			if(cnt > 0){
        				var nRow = this.ds_carAlcFlwpsgList.addRow();
        				this.ds_carAlcFlwpsgList.setColumn(nRow, "CARALC_SEQ", this.ds_carAlcInfo.getColumn(this.ds_carAlcInfo.rowposition, "CARALC_SEQ"));	// 배차순번 셋팅
        			} else {
        				this.gfn_message("info.처리불가", "배차기본정보를 입력하여 주십시오.");
        				return;
        			}
        		} else {
        			this.gfn_message("info.처리불가", "현재 출장건은 수정할 수 없습니다.");
        		}
        	}
        }

        /*
         * 함수명  	: btn_vhcleList_end_onclick
         * 설명 		: '동승자-행삭제' 버튼 클릭 후 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_vhcleList_end_onclick();
         */
        this.btn_Del_Flwpsg_onclick = function(obj,e)
        {
        	var updatePosblAt = this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "UPDATE_POSBL_AT");
            
            if(this.ds_carAlcFlwpsgList.rowposition > -1){
        		if(updatePosblAt == '1'){
        			if(this.gfn_message("confirm.삭제여부")){
        				this.ds_carAlcFlwpsgList.deleteRow(this.ds_carAlcFlwpsgList.rowposition);
        			}
        		} else {
        			this.gfn_message("info.처리불가", "현재 출장건은 수정할 수 없습니다.");
        		}
        	}
        }

        /*
         * 함수명  	: btn_viewCarAlcList_onclick
         * 설명 		: '배차현황보기' 버튼 클릭 후 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_viewCarAlcList_onclick();
         */
        this.btn_viewCarAlcList_onclick = function(obj,e)
        {
        	var parm = {
        		 arg_0 : this  //==> 필수, 팝업을 호출하는 form을 참조할 수 있도록 팝업에 Argument로 넘겨준다. (반드시 기술해야 함.)
        		,arg_1 : this.ds_cond.getColumn(0, "BGNDE")
        		,arg_2 : this.ds_cond.getColumn(0, "ENDDE")
        	};
        	this.gfn_popup("viewCarAlc", 400, 400, "", parm, "mis_hrm::HRM070202_P1.xfdl", "fn_popupCallback", true);
        }

        /***********************************************************************
        * 그리드 관련 이벤트 처리
        ************************************************************************/
        /*
         * 함수명  	: grd_indvdl_onexpandup
         * 설명 		: 그리드onexpandup 이벤트 처리(개인별출장)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.grd_indvdl_onexpandup();
         */
        this.grd_indvdl_onexpandup = function(obj,e)
        {
        	var formatId = this.grd_indvdl.formatid;
        	if(formatId == "nWhthrc") {
        		if(e.cell == 16){	// 예산부서 항목
        			var parm = {
        				 arg_0 : this  //==> 필수, 팝업을 호출하는 form을 참조할 수 있도록 팝업에 Argument로 넘겨준다. (반드시 기술해야 함.)
        			};
        			this.gfn_popup("deptPop", 400, 400, "부서조회팝업", parm, "com::deptCode_P01.xfdl", "fn_popupCallback", true);
        		}
        		
        		if(e.cell == 19){	// 출장사원 항목
        			var parm = {
        				 arg_0 : this  //==> 필수, 팝업을 호출하는 form을 참조할 수 있도록 팝업에 Argument로 넘겨준다. (반드시 기술해야 함.)
        				,deptCd : this.ds_cond.getColumn(0, "DEPT_CODE")
        			};
        			this.gfn_popup("empPop", 400, 400, "사원조회팝업", parm, "com::empno_P01.xfdl", "fn_popupCallback", true);
        		}
        	}
        	else {
        		if(e.cell == 16){	// 예산부서 항목
        			var parm = {
        				 arg_0 : this  //==> 필수, 팝업을 호출하는 form을 참조할 수 있도록 팝업에 Argument로 넘겨준다. (반드시 기술해야 함.)
        			};
        			this.gfn_popup("deptPop", 400, 400, "부서조회팝업", parm, "com::deptCode_P01.xfdl", "fn_popupCallback", true);
        		}
        		
        		if(e.cell == 19){	// 출장사원 항목
        			var parm = {
        				 arg_0 : this  //==> 필수, 팝업을 호출하는 form을 참조할 수 있도록 팝업에 Argument로 넘겨준다. (반드시 기술해야 함.)
        				,deptCd : this.ds_cond.getColumn(0, "DEPT_CODE")
        			};
        			this.gfn_popup("empPop", 400, 400, "사원조회팝업", parm, "com::empno_P01.xfdl", "fn_popupCallback", true);
        		}
        	}
        }

        /*
         * 함수명  	: tab_carAlc_tpg1_grd_caralcFlwpsg_onexpandup
         * 설명 		: 그리드onexpandup 이벤트 처리(동승자)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.tab_carAlc_tpg1_grd_caralcFlwpsg_onexpandup();
         */
        this.tab_carAlc_tpg1_grd_caralcFlwpsg_onexpandup = function(obj,e)
        {
        	if(e.cell == 2){	// 동승자사원 항목
        		var parm = {
        			 arg_0 : this  //==> 필수, 팝업을 호출하는 form을 참조할 수 있도록 팝업에 Argument로 넘겨준다. (반드시 기술해야 함.)
        			,arg_1 : this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "EMPNO")		// 현재 선택된 개인별출장내역의 사원번호
        			,arg_2 : this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "BSRP_BGNDE")		// 현재 선택된 개인별출장내역의 시작일자
        			,arg_3 : this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "BSRP_ENDDE")		// 현재 선택된 개인별출장내역의 종료일자
        			,arg_4 : this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "DEPT_CODE")		// 현재 선택된 개인별출장내역의 사원부서
        			,arg_5 : this.ds_bsrpIndvdl.getColumn(this.ds_bsrpIndvdl.rowposition, "DEPT_NM")		// 현재 선택된 개인별출장내역의 사원부서
        			,arg_6 : this.ds_cond.getColumn(this.ds_cond.rowposition, "WHTHRC_AT")  				// 관내출장여부
        		};
        		this.gfn_popup("flwpsgPop", 400, 400, "", parm, "mis_hrm::HRM070202_P4.xfdl", "fn_popupCallback", true);
        	}
        }

        this.grd_indvdl_oncelldblclick = function(obj,e)
        {
        	if(e.col == 1) {
        		var nRow = this.ds_bsrpIndvdl.rowposition;
        		if(['1','2','3','4','5'].indexOf(this.ds_bsrpIndvdl.getColumn(nRow, "SANCTN_KND")) > -1) {
        			this.fn_openSanc(this.ds_bsrpIndvdl.getColumn(nRow, "SANCTN_NO"));
        		}
        	}
        }

        this.btn_canclR_onclick = function(obj,e)
        {
        	var parm = {
        			 arg_0 : this  //==> 필수, 팝업을 호출하는 form을 참조할 수 있도록 팝업에 Argument로 넘겨준다. (반드시 기술해야 함.)
        			,arg_1 : this.ds_cond.getColumn(this.ds_cond.rowposition, "BGNDE")		// 검색조건 시작일자
        			,arg_2 : this.ds_cond.getColumn(this.ds_cond.rowposition, "ENDDE")		// 검색조건 종료일자
        			,arg_3 : this.ds_cond.getColumn(this.ds_cond.rowposition, "DEPT_CODE")	// 검색조건 부서
        			,arg_4 : this.ds_cond.getColumn(this.ds_cond.rowposition, "DEPT_NM")	// 검색조건 부서명
        			,arg_5 : this.ds_cond.getColumn(this.ds_cond.rowposition, "BSRP_NM")	// 검색조건 출장자명
        			,arg_6 : this.ds_cond.getColumn(this.ds_cond.rowposition, "WHTHRC_AT")  // 관내출장여부
        		};
        	this.gfn_popup("canclPop", 400, 400, "", parm, "mis_hrm::HRM070202_P5.xfdl", "fn_popupCallback", true);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_hrm019.addEventHandler("onrowposchanged", this.ds_frmtnPd_onrowposchanged, this);
            this.ds_bsrpIndvdl.addEventHandler("onrowposchanged", this.ds_bsrpIndvdl_onrowposchanged, this);
            this.ds_bsrpIndvdl.addEventHandler("oncolumnchanged", this.ds_bsrpIndvdl_oncolumnchanged, this);
            this.ds_bsrpIndvdl.addEventHandler("canrowposchange", this.ds_bsrpIndvdl_canrowposchange, this);
            this.ds_bsrpIndvdl.addEventHandler("cancolumnchange", this.ds_bsrpIndvdl_cancolumnchange, this);
            this.ds_hrm026.addEventHandler("onrowposchanged", this.ds_frmtnPd_onrowposchanged, this);
            this.ds_indvdlExpens.addEventHandler("oncolumnchanged", this.ds_indvdlExpens_oncolumnchanged, this);
            this.ds_hrm027.addEventHandler("onrowposchanged", this.ds_frmtnPd_onrowposchanged, this);
            this.ds_carAlcInfo.addEventHandler("oncolumnchanged", this.ds_carAlcInfo_oncolumnchanged, this);
            this.ds_hrm092.addEventHandler("onrowposchanged", this.ds_frmtnPd_onrowposchanged, this);
            this.addEventHandler("oninit", this.HRM070202_oninit, this);
            this.addEventHandler("onload", this.HRM070202_onload, this);
            this.tab_carAlc.tpg1.sta_WFDA_Label08.addEventHandler("onclick", this.sta_WFDA_Label08_onclick, this);
            this.tab_carAlc.tpg1.btn_carAlcList.addEventHandler("onclick", this.tab_carAlc_tpg1_btn_carAlcList_onclick, this);
            this.tab_carAlc.tpg1.btn_vhcleList_bgn.addEventHandler("onclick", this.btn_vhcleList_bgn_onclick, this);
            this.tab_carAlc.tpg1.btn_vhcleList_end.addEventHandler("onclick", this.btn_vhcleList_end_onclick, this);
            this.tab_carAlc.tpg1.grd_caralcFlwpsg.addEventHandler("onexpandup", this.tab_carAlc_tpg1_grd_caralcFlwpsg_onexpandup, this);
            this.tab_carAlc.tpg1.btn_Add_R.addEventHandler("onclick", this.btn_Add_Flwpsg_onclick, this);
            this.tab_carAlc.tpg1.btn_Del_R.addEventHandler("onclick", this.btn_Del_Flwpsg_onclick, this);
            this.tab_carAlc.tpg1.btn_deleteCarAlc.addEventHandler("onclick", this.tab_carAlc_tpg1_btn_deleteCarAlc_onclick, this);
            this.grd_indvdl.addEventHandler("onexpandup", this.grd_indvdl_onexpandup, this);
            this.grd_indvdl.addEventHandler("onheadclick", this.grd_indvdl_onheadclick, this);
            this.grd_indvdl.addEventHandler("oncellclick", this.grd_indvdl_oncellclick, this);
            this.grd_indvdl.addEventHandler("oncelldblclick", this.grd_indvdl_oncelldblclick, this);
            this.tab_bsrp.tabpage1.btn_Can_R01.addEventHandler("onclick", this.btn_Can_R01_onclick, this);
            this.tab_bsrp.tabpage1.btn_Add_R01.addEventHandler("onclick", this.btn_Add_R01_onclick, this);
            this.tab_bsrp.tabpage1.btn_Del_R01.addEventHandler("onclick", this.btn_Del_R01_onclick, this);
            this.tab_bsrp.tabpage2.grd_cmmnAtchmnfl.addEventHandler("onheadclick", this.grd_cmmnAtchmnfl_onheadclick, this);
            this.tab_bsrp.tabpage2.btn_delFiles.addEventHandler("onclick", this.btn_delFiles_onclick, this);
            this.tab_bsrp.tabpage2.btn_uploadFiles.addEventHandler("onclick", this.btn_uploadFiles_onclick, this);
            this.tab_bsrp.tabpage2.btn_downFiles.addEventHandler("onclick", this.btn_downFiles_onclick, this);
            this.btn_viewCarAlcList.addEventHandler("onclick", this.btn_viewCarAlcList_onclick, this);
            this.btn_canclR.addEventHandler("onclick", this.btn_canclR_onclick, this);

        };

        this.loadIncludeScript("HRM070202.xfdl");
        this.loadPreloadList();
       
    };
}
)();
