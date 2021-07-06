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
                this.set_name("HRM080303");
                this.set_classname("HRM080303");
                this.set_titletext("교육실적등록(개인별)");
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
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"EDC_TY_SN\" type=\"STRING\" size=\"256\"/><Column id=\"EDC_TY_NM\" type=\"STRING\" size=\"500\"/><Column id=\"EDC_CL_SN\" type=\"STRING\" size=\"256\"/><Column id=\"EDC_CL_NM\" type=\"STRING\" size=\"500\"/><Column id=\"CRSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"8\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGER_AT\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_edcAcmsltList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"8\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"3\"/><Column id=\"JSSFC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_SE\" type=\"STRING\" size=\"3\"/><Column id=\"HR_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OFCPS_SE\" type=\"STRING\" size=\"3\"/><Column id=\"OFCPS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"BIGDECIMAL\" size=\"6\"/><Column id=\"EDC_CRSE_SN\" type=\"BIGDECIMAL\" size=\"6\"/><Column id=\"EDC_TY_SN\" type=\"BIGDECIMAL\" size=\"6\"/><Column id=\"EDC_TY_NM\" type=\"STRING\" size=\"2100\"/><Column id=\"EDC_CL_SN\" type=\"BIGDECIMAL\" size=\"3\"/><Column id=\"EDC_CL_NM\" type=\"STRING\" size=\"2100\"/><Column id=\"EDC_INSTT\" type=\"STRING\" size=\"500\"/><Column id=\"CRSE_NM\" type=\"STRING\" size=\"2000\"/><Column id=\"EDC_PLACE\" type=\"STRING\" size=\"300\"/><Column id=\"APPN_LRN_AT\" type=\"STRING\" size=\"1\"/><Column id=\"DUTY_EDC_AT\" type=\"STRING\" size=\"1\"/><Column id=\"RELATE_DTY\" type=\"STRING\" size=\"3\"/><Column id=\"EDC_BGNDE\" type=\"STRING\" size=\"8\"/><Column id=\"EDC_ENDDE\" type=\"STRING\" size=\"8\"/><Column id=\"EDC_BGNDE2\" type=\"STRING\" size=\"256\"/><Column id=\"EDC_ENDDE2\" type=\"STRING\" size=\"256\"/><Column id=\"REMOTE_EDC_CRSE_SE\" type=\"STRING\" size=\"3\"/><Column id=\"REMOTE_EDC_SN\" type=\"BIGDECIMAL\" size=\"6\"/><Column id=\"EDC_DAYCNT\" type=\"BIGDECIMAL\" size=\"3\"/><Column id=\"EDC_TIME\" type=\"BIGDECIMAL\" size=\"3\"/><Column id=\"EDC_RCOGN_TIME\" type=\"BIGDECIMAL\" size=\"3\"/><Column id=\"DMSTC_SE\" type=\"STRING\" size=\"3\"/><Column id=\"CONFM_AT\" type=\"STRING\" size=\"1\"/><Column id=\"SANCTN_NO\" type=\"STRING\" size=\"16\"/><Column id=\"SANCTN_STS\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_STS2\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_SANCTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_SANCTN_STS\" type=\"STRING\" size=\"256\"/><Column id=\"EDC_RESULT_MAIN_EDC_CN\" type=\"STRING\" size=\"2000\"/><Column id=\"EDC_RESULT_THTS\" type=\"STRING\" size=\"2000\"/><Column id=\"EDC_RESULT_ETC_MATTER\" type=\"STRING\" size=\"2000\"/><Column id=\"DE_CT\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"MEAL_CT\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"TRNSPORT_CT\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"STAYNG_CT\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"RM\" type=\"STRING\" size=\"1000\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"ENABLE_AT\" type=\"STRING\" size=\"1\"/><Column id=\"TM_ENABLE_AT\" type=\"STRING\" size=\"1\"/><Column id=\"RESULT_ENABLE_AT\" type=\"STRING\" size=\"1\"/><Column id=\"STSFDG_ENABLE_AT\" type=\"STRING\" size=\"1\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_com051", this);
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

            obj = new Dataset("ds_hrm020", this);
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

            obj = new Dataset("ds_hrm045", this);
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

            obj = new Dataset("ds_hrm046", this);
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

            obj = new Dataset("ds_hrm048", this);
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
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_edcAcmsltList</Col><Col id=\"colId\">YEAR</Col><Col id=\"msgId\">연도</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_edcAcmsltList</Col><Col id=\"colId\">EMPNO</Col><Col id=\"msgId\">사원번호</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_edcAcmsltList</Col><Col id=\"colId\">EMPNM</Col><Col id=\"msgId\">성명</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">CRSE_NM</Col><Col id=\"msgId\">교육과정</Col><Col id=\"compId\">ds_edcAcmsltList</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_edcAcmsltList</Col><Col id=\"colId\">EDC_INSTT</Col><Col id=\"msgId\">교육기관</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_edcAcmsltList</Col><Col id=\"colId\">EDC_PLACE</Col><Col id=\"msgId\">교육장소</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_edcAcmsltList</Col><Col id=\"colId\">EDC_BGNDE</Col><Col id=\"msgId\">교육시작일</Col><Col id=\"notNull\">Y</Col><Col id=\"nlength\">8</Col></Row><Row><Col id=\"compId\">ds_edcAcmsltList</Col><Col id=\"colId\">EDC_ENDDE</Col><Col id=\"msgId\">교육종료일</Col><Col id=\"notNull\">Y</Col><Col id=\"nlength\">8</Col></Row><Row><Col id=\"compId\">ds_edcAcmsltList</Col><Col id=\"colId\">EDC_ENDDE</Col><Col id=\"msgId\">교육시작일^교육종료일</Col><Col id=\"nlength\">8</Col><Col id=\"from\">EDC_BGNDE</Col></Row><Row><Col id=\"compId\">ds_edcAcmsltList</Col><Col id=\"colId\">EDC_DAYCNT</Col><Col id=\"msgId\">교육일수</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_edcAcmsltList</Col><Col id=\"colId\">EDC_TIME</Col><Col id=\"msgId\">교육시간</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">EDC_TY_NM</Col><Col id=\"msgId\">교육유형</Col><Col id=\"compId\">ds_edcAcmsltList</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_edcAcmsltList</Col><Col id=\"colId\">APPN_LRN_AT</Col><Col id=\"msgId\">지정학습여부</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_edcAcmsltList</Col><Col id=\"colId\">EDC_RCOGN_TIME</Col><Col id=\"msgId\">인정시간</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_edcStsfdgList</Col><Col id=\"colId\">QUSTNR_RESULT</Col><Col id=\"msgId\">답변</Col><Col id=\"notNull\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_edcStsfdgList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"8\"/><Column id=\"SN\" type=\"BIGDECIMAL\" size=\"6\"/><Column id=\"EDC_TY_SN\" type=\"BIGDECIMAL\" size=\"3\"/><Column id=\"QESTNAR_NO\" type=\"BIGDECIMAL\" size=\"6\"/><Column id=\"QUSTNR_NO\" type=\"BIGDECIMAL\" size=\"6\"/><Column id=\"QUSTNR_RESULT\" type=\"STRING\" size=\"2000\"/><Column id=\"STSFDG_SE\" type=\"STRING\" size=\"3\"/><Column id=\"STSFDG_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"QUSTNR_CN\" type=\"STRING\" size=\"2000\"/><Column id=\"QUSTNR_TY\" type=\"STRING\" size=\"3\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_hrm042", this);
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

            obj = new Dataset("ds_hrm043", this);
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

            obj = new Dataset("ds_condSub", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"8\"/><Column id=\"SN\" type=\"BIGDECIMAL\" size=\"6\"/><Column id=\"EDC_TY_SN\" type=\"BIGDECIMAL\" size=\"6\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_validation2", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">EDC_RESULT_MAIN_EDC_CN</Col><Col id=\"msgId\">주요교육내용</Col><Col id=\"compId\">ds_edcAcmsltList</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_edcAcmsltList</Col><Col id=\"colId\">EDC_RESULT_THTS</Col><Col id=\"msgId\">시사점및소감</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_edcAcmsltList</Col><Col id=\"colId\">EDC_RESULT_ETC_MATTER</Col><Col id=\"msgId\">기타사항</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_edcStsfdgList</Col><Col id=\"colId\">QUSTNR_RESULT</Col><Col id=\"msgId\">답변</Col><Col id=\"notNull\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_code", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"CODE\" type=\"STRING\" size=\"10\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"150\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"1500\"/><Column id=\"CODE_ORDR\" type=\"INT\" size=\"3\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static24", "absolute", null, "303", "495", "27", "28", null, this);
            obj.set_taborder("91");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", null, "95", "495", "27", "28", null, this);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "0", null, "59", "28", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Box");
            this.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "0", "0", "15", "59", null, null, this.div_search);
            obj.set_taborder("3");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_year", "absolute", "15", "6", "64", "19", null, null, this.div_search);
            obj.set_taborder("4");
            obj.set_text("조회년도");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_edcTy", "absolute", "166", "6", "64", "19", null, null, this.div_search);
            obj.set_taborder("5");
            obj.set_text("교육유형");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Spin("spn_year", "absolute", "79", "6", "72", "19", null, null, this.div_search);
            obj.set_taborder("1");
            obj.set_value("0");
            obj.set_max("9999");
            obj.set_cssclass("spn_WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "151", "0", "15", "33", null, null, this.div_search);
            obj.set_taborder("6");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "428", "0", "15", "33", null, null, this.div_search);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_edcCl", "absolute", "443", "6", "64", "19", null, null, this.div_search);
            obj.set_taborder("8");
            obj.set_text("교육분류");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_edcTy", "absolute", "230", "5", "198", "21", null, null, this.div_search);
            obj.set_taborder("9");
            obj.set_maxlength("5");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("div_edcTySearch_s", "absolute", "406", "6", "21", "22", null, null, this.div_search);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_Search");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_edcCl", "absolute", "507", "5", "201", "21", null, null, this.div_search);
            obj.set_taborder("11");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("div_edcClSearch_s", "absolute", "686", "6", "21", "22", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_Search");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "708", "0", "15", "59", null, null, this.div_search);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_edcCrseNm", "absolute", "723", "7", "77", "21", null, null, this.div_search);
            obj.set_taborder("14");
            obj.set_text("교육과정명");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_crseNm_s", "absolute", "800", "5", "208", "21", null, null, this.div_search);
            obj.set_taborder("15");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_searchDept", "absolute", "15", "31", "64", "21", null, null, this.div_search);
            obj.set_taborder("16");
            obj.set_text("조회부서");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("div_DEPT", "absolute", "79", "31", "195", "21", null, null, this.div_search);
            obj.set_taborder("17");
            obj.set_async("false");
            obj.set_url("com::deptCode.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_applcnt", "absolute", "289", "31", "38", "21", null, null, this.div_search);
            obj.set_taborder("18");
            obj.set_text("사번");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("div_EMP", "absolute", "327", "31", "166", "21", null, null, this.div_search);
            obj.set_taborder("19");
            obj.set_enable("false");
            obj.set_async("false");
            obj.set_url("com::empno.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "274", "24", "15", "33", null, null, this.div_search);
            obj.set_taborder("20");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "1031", "0", "15", "735", null, null, this);
            obj.set_taborder("35");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", null, "0", "13", "735", "0", null, this);
            obj.set_taborder("36");
            obj.set_text("스\r\n크\r\n롤\r\n13");
            obj.set_visible("false");
            obj.style.set_background("#d07b173c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "0", "60", "1031", "10", null, null, this);
            obj.set_taborder("37");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_edcAcmsltList", "absolute", "0", "95", null, "339", "622", null, this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_edcAcmsltList");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"사원번호\"/><Cell col=\"2\" text=\"사원명\"/><Cell col=\"3\" text=\"결재상태\"/><Cell col=\"4\" text=\"연도\"/><Cell col=\"5\" text=\"과정명\"/><Cell col=\"6\" text=\"교육기관\"/><Cell col=\"7\" text=\"교육시작일\"/><Cell col=\"8\" text=\"교육종료일\"/><Cell col=\"9\" text=\"교육일수\"/><Cell col=\"10\" text=\"교육시간\"/><Cell col=\"11\" text=\"교육유형\"/><Cell col=\"12\" text=\"교육분류\"/><Cell col=\"13\" text=\"관련직무\"/><Cell col=\"14\" text=\"지정학습여부\"/><Cell col=\"15\" text=\"지정학습구분\"/><Cell col=\"16\" text=\"국내구분\"/><Cell col=\"17\" text=\"인정시간\"/><Cell col=\"18\" text=\"승인여부\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:EMPNO\"/><Cell col=\"2\" text=\"bind:EMPNM\"/><Cell col=\"3\" displaytype=\"image\" text=\"expr:!(EDC_TY_SN == '1' || EDC_TY_SN == '2') ? '' : comp.parent.fn_get_imgUrl(SANCTN_STS)\"/><Cell col=\"4\" edittype=\"none\" text=\"bind:YEAR\"/><Cell col=\"5\" edittype=\"none\" style=\"align:left middle;\" text=\"bind:CRSE_NM\"/><Cell col=\"6\" edittype=\"none\" style=\"align:left middle;\" text=\"bind:EDC_INSTT\"/><Cell col=\"7\" displaytype=\"date\" edittype=\"none\" text=\"bind:EDC_BGNDE\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"date\" edittype=\"none\" text=\"bind:EDC_ENDDE\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" edittype=\"none\" style=\"align:right middle;\" text=\"bind:EDC_DAYCNT\"/><Cell col=\"10\" edittype=\"none\" style=\"align:right middle;\" text=\"bind:EDC_TIME\"/><Cell col=\"11\" edittype=\"none\" style=\"align:left middle;\" text=\"bind:EDC_TY_NM\"/><Cell col=\"12\" edittype=\"none\" style=\"align:left middle;\" text=\"bind:EDC_CL_NM\"/><Cell col=\"13\" displaytype=\"combo\" edittype=\"none\" style=\"align:left middle;\" text=\"bind:RELATE_DTY\" combodataset=\"ds_hrm045\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"14\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:APPN_LRN_AT\" combodataset=\"ds_com051\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"15\" displaytype=\"combo\" edittype=\"none\" style=\"align:left middle;\" text=\"bind:REMOTE_EDC_CRSE_SE\" combodataset=\"ds_hrm046\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"16\" displaytype=\"combo\" edittype=\"none\" text=\"bind:DMSTC_SE\" combodataset=\"ds_hrm020\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"17\" edittype=\"none\" style=\"align:right middle;\" text=\"bind:EDC_RCOGN_TIME\"/><Cell col=\"18\" displaytype=\"combo\" edittype=\"none\" text=\"bind:CONFM_AT\" combodataset=\"ds_hrm048\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_edcAcmsltList", "absolute", "0", "71", "103", "19", null, null, this);
            obj.set_taborder("38");
            obj.set_text("교육실적목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "90", null, "5", "28", null, this);
            obj.set_taborder("39");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_edcAcmsltDetail", "absolute", null, "71", "103", "19", "509", null, this);
            obj.set_taborder("40");
            obj.set_text("교육실적상세");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("sta_year", "absolute", null, "95", "90", "27", "522", null, this);
            obj.set_taborder("41");
            obj.set_text("연도");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_edcCrse", "absolute", null, "121", "90", "27", "522", null, this);
            obj.set_taborder("43");
            obj.set_text("교육과정");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", null, "121", "495", "27", "28", null, this);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_edcInstt", "absolute", null, "147", "90", "27", "522", null, this);
            obj.set_taborder("45");
            obj.set_text("교육기관");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "147", "495", "27", "28", null, this);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_edcPlace", "absolute", null, "173", "90", "27", "522", null, this);
            obj.set_taborder("47");
            obj.set_text("교육장소");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", null, "173", "495", "27", "28", null, this);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_edcPd", "absolute", null, "199", "90", "27", "522", null, this);
            obj.set_taborder("49");
            obj.set_text("교육기간");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", null, "199", "495", "27", "28", null, this);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_edcTy", "absolute", null, "225", "90", "27", "522", null, this);
            obj.set_taborder("51");
            obj.set_text("교육유형");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", null, "225", "495", "27", "28", null, this);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_edcCl", "absolute", null, "251", "90", "27", "522", null, this);
            obj.set_taborder("53");
            obj.set_text("교육분류");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", null, "251", "495", "27", "28", null, this);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_relateDty", "absolute", null, "277", "90", "27", "522", null, this);
            obj.set_taborder("55");
            obj.set_text("관련직무");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", null, "277", "495", "27", "28", null, this);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_dmstcSe", "absolute", null, "329", "90", "27", "522", null, this);
            obj.set_taborder("57");
            obj.set_text("지정학습구분");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", null, "329", "495", "27", "28", null, this);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_remoteEdcCrseSe", "absolute", null, "329", "90", "27", "328", null, this);
            obj.set_taborder("59");
            obj.set_text("인정시간");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", null, "355", "495", "27", "28", null, this);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_rm", "absolute", null, "381", "90", "27", "522", null, this);
            obj.set_taborder("61");
            obj.set_text("교통비");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", null, "381", "495", "27", "28", null, this);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "437", "59", "10", null, null, "0", this);
            obj.set_taborder("63");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_year", "absolute", null, "98", "60", "21", "460", null, this);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_edcCrse", "absolute", null, "124", "488", "21", "32", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("edt_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_edcInstt", "absolute", null, "150", "488", "21", "32", null, this);
            obj.set_taborder("6");
            obj.set_cssclass("edt_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_edcPlace", "absolute", null, "176", "488", "21", "32", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("edt_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_edcTy", "absolute", null, "228", "488", "21", "32", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("edt_WF_Essential");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_edcCl", "absolute", null, "254", "488", "21", "32", null, this);
            obj.set_taborder("14");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_bgnDe", "absolute", null, "203", "100", "19", "420", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Essential");

            obj = new Static("Static16", "absolute", null, "204", "10", "19", "405", null, this);
            obj.set_taborder("64");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_endDe", "absolute", null, "203", "104", "19", "298", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Essential");

            obj = new Static("Static21", "absolute", null, "202", "160", "21", "134", null, this);
            obj.set_taborder("65");
            obj.set_text("(              일              시간)");
            this.addChild(obj.name, obj);

            obj = new Static("sta_appnLrnAt", "absolute", null, "303", "90", "27", "522", null, this);
            obj.set_taborder("66");
            obj.set_text("지정학습여부");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_empnm01", "absolute", null, "277", "90", "27", "231", null, this);
            obj.set_taborder("67");
            obj.set_text("국내구분");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_confmAt", "absolute", null, "329", "90", "27", "134", null, this);
            obj.set_taborder("68");
            obj.set_text("승인여부");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_edcResultReport", "absolute", "0", "445", "103", "19", null, null, this);
            obj.set_taborder("69");
            obj.set_text("교육결과보고");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mainEdcCn", "absolute", "0", "469", "100", "38", null, null, this);
            obj.set_taborder("70");
            obj.set_text("주요교육내용");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "99", "469", null, "38", "622", null, this);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_mainEdcCn", "absolute", "102", "472", null, "32", "625", null, this);
            obj.set_taborder("27");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("2000");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "0", "464", null, "5", "28", null, this);
            obj.set_taborder("72");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_thts", "absolute", "0", "506", "100", "38", null, null, this);
            obj.set_taborder("73");
            obj.set_text("시사점 및 소감");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "99", "506", null, "38", "622", null, this);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_thts", "absolute", "102", "509", null, "32", "625", null, this);
            obj.set_taborder("28");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("2000");
            this.addChild(obj.name, obj);

            obj = new Static("sta_etcMatter", "absolute", "0", "543", "100", "38", null, null, this);
            obj.set_taborder("75");
            obj.set_text("기타사항");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "99", "543", null, "38", "622", null, this);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_etcMatter", "absolute", "102", "546", null, "32", "625", null, this);
            obj.set_taborder("29");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("2000");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "0", "434", null, "10", "28", null, this);
            obj.set_taborder("77");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_edcStsfdgList", "absolute", null, "445", "103", "19", "509", null, this);
            obj.set_taborder("78");
            obj.set_text("교육만족도");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_edcStsfdgList", "absolute", null, "469", "584", null, "28", "0", this);
            obj.set_taborder("34");
            obj.set_binddataset("ds_edcStsfdgList");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"설문\"/><Cell col=\"3\" text=\"답변\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:STSFDG_SE\" combodataset=\"ds_hrm042\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"2\" style=\"align:left middle;\" text=\"bind:QUSTNR_CN\"/><Cell col=\"3\" displaytype=\"expr:QUSTNR_TY == '01' ? 'combo' : 'text'\" edittype=\"expr:QUSTNR_TY == '01' ? 'combo' : 'textarea'\" style=\"align:left middle;\" text=\"bind:QUSTNR_RESULT\" wordwrap=\"char\" editlimit=\"2000\" editdisplay=\"expr:comp.parent.ds_edcAcmsltList.getColumn(comp.parent.ds_edcAcmsltList.rowposition, &quot;STSFDG_ENABLE_AT&quot;) == '0' ? 'display' : 'edit'\" editlengthunit=\"ascii\" suppressalign=\"first\" combodataset=\"ds_hrm043\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodisplaynulltext=\"답변을 선택해주세요.\" combodisplay=\"expr:comp.parent.ds_edcAcmsltList.getColumn(comp.parent.ds_edcAcmsltList.rowposition, &quot;STSFDG_ENABLE_AT&quot;) == '0' ? 'display' : 'edit'\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gnfdList03", "absolute", "0", "591", "100", "19", null, null, this);
            obj.set_taborder("79");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delFiles", "absolute", null, "591", "67", "19", "782", null, this);
            obj.set_taborder("30");
            obj.set_text("선택삭제");
            obj.set_cssclass("btn_WF_Process");
            this.addChild(obj.name, obj);

            obj = new Button("btn_uploadFiles", "absolute", null, "591", "68", "19", "710", null, this);
            obj.set_taborder("31");
            obj.set_text("파일업로드");
            obj.set_cssclass("btn_WF_Process");
            this.addChild(obj.name, obj);

            obj = new Button("btn_downFiles", "absolute", null, "591", "85", "19", "622", null, this);
            obj.set_taborder("32");
            obj.set_text("선택다운로드");
            obj.set_cssclass("btn_WF_Process");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "581", null, "10", "622", null, this);
            obj.set_taborder("80");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "0", "610", null, "5", "622", null, this);
            obj.set_taborder("81");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cmmnAtchmnfl", "absolute", "0", "615", null, null, "622", "0", this);
            obj.set_taborder("33");
            obj.set_binddataset("ds_fileList");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"65\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"파일형식\"/><Cell col=\"2\" celltype=\"head\" text=\"파일명\"/><Cell col=\"3\" text=\"확장자\"/><Cell col=\"4\" text=\"사이즈\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"image\" text=\"bind:FILE_IMAGE\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"2\" displaytype=\"normal\" style=\"align:left middle;\" text=\"bind:ORGINL_FILE_NM\"/><Cell col=\"3\" text=\"bind:FILE_EXTSN\"/><Cell col=\"4\" text=\"bind:FILE_MG\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("div_edcTySearch", "absolute", null, "228", "21", "22", "32", null, this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Button("div_edcClSearch", "absolute", null, "254", "21", "22", "32", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_relateDty", "absolute", null, "280", "130", "21", "390", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_innerdataset("@ds_hrm045");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");

            obj = new Combo("cmb_remoteEdcCrseSe", "absolute", null, "332", "100", "21", "420", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("19");
            obj.set_innerdataset("@ds_hrm046");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_readonly("true");
            obj.set_displaynulltext("선택");

            obj = new Combo("cmb_dmstcSe", "absolute", null, "280", "100", "21", "129", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.set_innerdataset("@ds_hrm020");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");

            obj = new Combo("cmb_appnLrnAt", "absolute", null, "306", "100", "21", "420", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.set_innerdataset("@ds_com051");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_cssclass("cmb_WF_Essential");

            obj = new Combo("cmb_confmAt", "absolute", null, "332", "100", "21", "32", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("21");
            obj.set_innerdataset("@ds_hrm048");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("true");
            obj.set_cssclass("cmb_WF_Readonly");

            obj = new MaskEdit("msk_edcDayCnt", "absolute", null, "202", "50", "21", "235", null, this);
            obj.set_taborder("10");
            obj.set_trimtype("none");
            obj.set_mask("###");
            obj.set_limitbymask("both");
            obj.set_cssclass("msk_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_edcTime", "absolute", null, "202", "50", "21", "167", null, this);
            obj.set_taborder("11");
            obj.set_mask("###");
            obj.set_limitbymask("both");
            obj.set_cssclass("msk_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", null, "407", "495", "27", "28", null, this);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_rm00", "absolute", null, "407", "90", "27", "522", null, this);
            obj.set_taborder("83");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_dmstcSe00", "absolute", null, "355", "90", "27", "522", null, this);
            obj.set_taborder("84");
            obj.set_text("일비");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_dmstcSe01", "absolute", null, "355", "90", "27", "231", null, this);
            obj.set_taborder("85");
            obj.set_text("식비");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_rm01", "absolute", null, "381", "90", "27", "231", null, this);
            obj.set_taborder("86");
            obj.set_text("숙박비");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00", "absolute", null, "358", "197", "21", "323", null, this);
            obj.set_taborder("22");
            obj.set_mask("###,###,###,###,##0");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01", "absolute", null, "384", "197", "21", "323", null, this);
            obj.set_taborder("24");
            obj.set_mask("###,###,###,###,##0");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02", "absolute", null, "358", "197", "21", "32", null, this);
            obj.set_taborder("23");
            obj.set_mask("###,###,###,###,##0");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03", "absolute", null, "384", "197", "21", "32", null, this);
            obj.set_taborder("25");
            obj.set_mask("###,###,###,###,##0");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_rm", "absolute", null, "410", "488", "21", "32", null, this);
            obj.set_taborder("26");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_rcognTime", "absolute", null, "332", "100", "21", "226", null, this);
            obj.set_taborder("20");
            obj.set_mask("###");
            obj.set_limitbymask("both");
            obj.set_cssclass("msk_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Static("sta_empnm", "absolute", null, "95", "60", "27", "398", null, this);
            obj.set_taborder("87");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Div("div_sear", "absolute", null, "98", "162", "21", "234", null, this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Edit("edt_empno", "absolute", "92", "0", null, null, "0", "0", this.div_sear);
            obj.set_taborder("3");
            obj.set_tabstop("false");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            obj.set_maxlength("8");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("left middle");
            this.div_sear.addChild(obj.name, obj);
            obj = new Edit("edt_emplnm", "absolute", "0", "0", "91", null, null, "0", this.div_sear);
            obj.set_taborder("4");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.div_sear.addChild(obj.name, obj);
            obj = new Button("search", "absolute", "69", "0", "21", null, null, "0", this.div_sear);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Search");
            obj.set_visible("false");
            this.div_sear.addChild(obj.name, obj);

            obj = new Static("sta_empnm00", "absolute", null, "95", "60", "27", "172", null, this);
            obj.set_taborder("88");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_deptNm", "absolute", null, "98", "138", "21", "32", null, this);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("sta_dutyEdcAt", "absolute", null, "303", "90", "27", "231", null, this);
            obj.set_taborder("89");
            obj.set_text("필수교육여부");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_dutyEdcAt", "absolute", null, "306", "100", "21", "129", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("90");
            obj.set_innerdataset("@ds_com051");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_cssclass("cmb_WF_Essential");

            obj = new Static("sta_title00", "absolute", "103", "445", "297", "19", null, null, this);
            obj.set_taborder("92");
            obj.set_text("(교육유형이 원격교육일 경우 비활성화 됩니다.)");
            obj.style.set_color("blue");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title01", "absolute", "103", "71", "388", "19", null, null, this);
            obj.set_taborder("93");
            obj.set_text("(교육유형이 외부교육(전문, 법정)만 결재상태가 존재합니다.)");
            obj.style.set_color("blue");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 59, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WFSA_Box");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 162, 21, this.div_sear,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.set_text("Div00");

            	}
            );
            this.div_sear.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1059, 735, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HRM080303");
            		p.set_titletext("교육실적등록(개인별)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item10","div_search.spn_WF_Essential","value","ds_cond00","STDR_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_search.spn_year","value","ds_cond","YEAR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","cal_bgnDe","value","ds_edcAcmsltList","EDC_BGNDE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","cal_endDe","value","ds_edcAcmsltList","EDC_ENDDE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_search.edt_edcTy","value","ds_cond","EDC_TY_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_search.edt_edcCl","value","ds_cond","EDC_CL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","div_search.edt_crseNm_s","value","ds_cond","CRSE_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edt_edcCrse","enable","ds_edcAcmsltList","ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_edcInstt","enable","ds_edcAcmsltList","ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edt_edcPlace","enable","ds_edcAcmsltList","ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","cal_bgnDe","enable","ds_edcAcmsltList","ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","cal_endDe","enable","ds_edcAcmsltList","ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","edt_edcTy","enable","ds_edcAcmsltList","ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","edt_edcCl","enable","ds_edcAcmsltList","ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","txt_mainEdcCn","enable","ds_edcAcmsltList","RESULT_ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","txt_thts","enable","ds_edcAcmsltList","RESULT_ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","txt_etcMatter","enable","ds_edcAcmsltList","RESULT_ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","btn_delFiles","enable","ds_edcAcmsltList","RESULT_ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","btn_uploadFiles","enable","ds_edcAcmsltList","RESULT_ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","edt_year","value","ds_edcAcmsltList","YEAR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","edt_edcCrse","value","ds_edcAcmsltList","CRSE_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","edt_edcInstt","value","ds_edcAcmsltList","EDC_INSTT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","edt_edcPlace","value","ds_edcAcmsltList","EDC_PLACE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","edt_edcTy","value","ds_edcAcmsltList","EDC_TY_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","cmb_relateDty","value","ds_edcAcmsltList","RELATE_DTY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","cmb_appnLrnAt","value","ds_edcAcmsltList","APPN_LRN_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","cmb_remoteEdcCrseSe","value","ds_edcAcmsltList","REMOTE_EDC_CRSE_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","cmb_dmstcSe","value","ds_edcAcmsltList","DMSTC_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","cmb_confmAt","value","ds_edcAcmsltList","CONFM_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","txt_mainEdcCn","value","ds_edcAcmsltList","EDC_RESULT_MAIN_EDC_CN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","txt_thts","value","ds_edcAcmsltList","EDC_RESULT_THTS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","txt_etcMatter","value","ds_edcAcmsltList","EDC_RESULT_ETC_MATTER");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","cmb_relateDty","enable","ds_edcAcmsltList","ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","cmb_dmstcSe","enable","ds_edcAcmsltList","ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item45","div_edcTySearch","enable","ds_edcAcmsltList","ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item46","div_edcClSearch","enable","ds_edcAcmsltList","ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item47","edt_edcCl","value","ds_edcAcmsltList","EDC_CL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","msk_edcTime","value","ds_edcAcmsltList","EDC_TIME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","msk_edcDayCnt","value","ds_edcAcmsltList","EDC_DAYCNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","edt_rm","enable","ds_edcAcmsltList","ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","edt_rm","value","ds_edcAcmsltList","RM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","MaskEdit00","value","ds_edcAcmsltList","DE_CT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","MaskEdit02","value","ds_edcAcmsltList","MEAL_CT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item48","MaskEdit03","value","ds_edcAcmsltList","STAYNG_CT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item49","MaskEdit01","value","ds_edcAcmsltList","TRNSPORT_CT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item50","MaskEdit02","enable","ds_edcAcmsltList","ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item51","MaskEdit03","enable","ds_edcAcmsltList","ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item52","MaskEdit01","enable","ds_edcAcmsltList","ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item53","MaskEdit00","enable","ds_edcAcmsltList","ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item55","msk_edcDayCnt","enable","ds_edcAcmsltList","ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item56","msk_edcTime","enable","ds_edcAcmsltList","ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item57","msk_rcognTime","value","ds_edcAcmsltList","EDC_RCOGN_TIME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item58","msk_rcognTime","enable","ds_edcAcmsltList","TM_ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","div_sear.edt_emplnm","value","ds_edcAcmsltList","EMPNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","div_sear.edt_empno","value","ds_edcAcmsltList","EMPNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item54","edt_deptNm","value","ds_edcAcmsltList","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item59","cmb_dutyEdcAt","value","ds_edcAcmsltList","DUTY_EDC_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","grd_edcStsfdgList","readonly","ds_edcAcmsltList","STSFDG_ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "com::deptCode.xfdl");
            this._addPreloadList("fdl", "com::empno.xfdl");
        };
        
        // User Script
        this.addIncludeScript("HRM080303.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("HRM080303.xfdl", "mis_lib::misUtil.xjs");
        this.addIncludeScript("HRM080303.xfdl", "lib::comUpDownUtils.xjs");
        this.registerScript("HRM080303.xfdl", function() {
        /***********************************************************************
         * 업무구분 : MIS > 인사관리 > 교육훈련관리 > 교육실적관리
         * 화면ID   : HRM080303
         * 화면명   : 교육실적등록(개인별)
         * 화면설명 : 개인별 교육실적(워크샵, 원격교육, 개인학습)을 등록한다.
         * 작성일   : 2017.06.12
         * 작성자   : 김형태
         * 수정이력 : 
         ***********************************************************************
         *     수정일     수정자   내용
         ***********************************************************************
         *    
         *   
         ***********************************************************************
         */

        /***********************************************************************
         * Script Include 
         ***********************************************************************/
        // 시스템 공통 라이브러리 Include
        //include "lib::comInclude.xjs";
        //include "mis_lib::misUtil.xjs";
        //include "lib::comUpDownUtils.xjs";

        
        /***********************************************************************
         * 화면 변수 선언부
         ***********************************************************************/
        this.checkDs = [
          this.ds_edcAcmsltList
        ];

        this.chargerAt = false;
        this.readAuth = false;
        this.saveRow = -1;
        this.File_UpDownManager = null;
        /***********************************************************************
         * onInit / onLoad 영역
         ***********************************************************************/
        this.HRM080303_oninit = function(obj,e)
        {

        }
        this.HRM080303_onload = function(obj,e)
        {
        	// form 초기화
        	this.fn_init_form();

        	// dataset 초기화
        	this.fn_init_dataset();
        }

        /***********************************************************************
         * Form 오브젝트 초기화
         ***********************************************************************/ 
        this.fn_init_form = function()
        {
        	this.gfn_initForm(this);
        	this.fn_misFormInit(this);
        	
        	// 오브젝트 등에 대한 처리
        	this.div_search.div_EMP.fn_setBind("ds_cond","EMPNO","EMPNM");
        	this.div_search.div_DEPT.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");
        	
        	// 초기 검색조건
        	this.ds_cond.clearData();
        	var nRow = this.ds_cond.addRow();
         	this.ds_cond.setColumn(nRow, "YEAR",      this.comUtils.getClientDate("YYYY"));	// 당해년도
         	this.ds_cond.setColumn(nRow, "SYS_EMPNO", this.gfn_getEmpNo());					// 접속자사번
        	
        	// 공통코드
        	var comboParams = [
        		["ds_com051", "COM051", "Y", "D", "B"]	// ds_com051 : YN
        	   ,["ds_hrm020", "HRM020", "Y", "D", "B"]	// ds_hrm020 : 국내외구분
        	   ,["ds_hrm042", "HRM042", "Y", "D", "B"]	// ds_hrm020 : 교육설문구분
        	   ,["ds_hrm043", "HRM043", "Y", "D", "B"]	// ds_hrm020 : 교육만족도
        	   ,["ds_hrm045", "HRM045", "Y", "D", "B"]	// ds_hrm045 : 직무코드
        	   ,["ds_hrm046", "HRM046", "Y", "D", "B"]	// ds_hrm046 : 원격교육과정구분
        	   ,["ds_hrm048", "HRM048", "Y", "D", "B"]	// ds_hrm048 : 승인여부
        	];
        	var callback = function (svcId, errorCode, errorMsg) {		
        		// 수정가능여부를 판별하기위해 권한그룹 체크
        		if(this.gfn_authGrpId("HRM_ADMIN") != -1) {			// 인사결재자
        			this.readAuth = true;
        		}
        		if(this.gfn_authGrpId("HRM_EDC") != -1) {			// 교육담당자
        			this.chargerAt = true;
        		}
        		
        		if(this.readAuth) {
        			this.div_search.div_DEPT.set_enable(true);
        			this.div_search.div_EMP.set_enable(true);
        		}
        		
        		// 수정가능한 경우 부서, 사원정보 변경 가능
        		if(this.chargerAt){
        			this.div_search.div_DEPT.set_enable(true);
        			this.div_search.div_EMP.set_enable(true);
        			this.div_sear.search.set_visible(true);
        			this.cmb_confmAt.set_cssclass("");
        			this.cmb_confmAt.set_readonly(false);
        			this.ds_cond.setColumn(nRow, "DEPT_CODE", "000000"        );		// 부서코드
        			this.ds_cond.setColumn(nRow, "DEPT_NM",   "화성도시공사");		// 부서명
        		}
        		// 본인의 부서, 사원정보 고정
        		else{
        			//해당 부서만
        			this.ds_cond.setColumn(nRow, "DEPT_CODE", this.gfn_getDeptId()  );	// 부서코드
        			this.ds_cond.setColumn(nRow, "DEPT_NM",   this.gfn_getDeptName());	// 부서명
        			this.ds_cond.setColumn(nRow, "EMPNO",     this.gfn_getEmpNo()   );	// 사원코드
        			this.ds_cond.setColumn(nRow, "EMPNM",     this.gfn_getUserName());	// 사원명
        		}
        		
        		// 권한자도 수정가능하게
        		this.ds_cond.setColumn(nRow, "AUTH_AT", (this.chargerAt ? '1' : '0'));	
        	
        		this.fn_search();	// 초기조회
        	};
        	this.gfn_comboLoad(comboParams, callback);
        }

        /***********************************************************************
         * Dataset 오브젝트 초기화
         ***********************************************************************/ 
        this.fn_init_dataset = function()
        {
        	this.gfn_initCondDs(this, this.div_search);
        	
        	// 파일 메니저 설정
        	var fileConfig = {
        		useMultiUpload : true,
        		onChange: this.fn_onFileSelected,	// 파일 선택 이벤트 핸들러
        		onSuccess : this.fn_onFileSuccess	// 전송 성공 이벤트 핸들러
        		//responseGrid : this.div_multiFile.grd_fileList,
        		//responseArea : this.div_multiFile.sta_helpMessage
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
         * 설명 		: 조회 이벤트 처리(수요조사교육관리)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_search();
         */
        this.fn_search = function()
        {
        	this.ds_edcAcmsltList.clearData();
        	this.ds_fileList.clearData();
        	this.ds_edcStsfdgList.clearData();
        	this.fn_transaction("selectEdcAcmsltList");
        }

        
        /*
         * 함수명  	: fn_search_sub
         * 설명 		: 조회 이벤트 처리(첨부파일, 교육만족도)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_search();
         */
        this.fn_search_sub = function()
        {
        	this.ds_fileList.clearData();
        	this.ds_edcStsfdgList.clearData();
        	this.fn_transaction("selectEdcAcmsltSub");
        }

        
        /*
         * 함수명  	: fn_save
         * 설명 		: 저장 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_save();
         */
        this.fn_save = function()
        {
        	if(    !this.comUtils.isDatasetUpdated(this.ds_edcAcmsltList)		// 교육실적
        	    && !this.comUtils.isDatasetUpdated(this.ds_edcStsfdgList)		// 교육만족도
        	  ) {
        		this.gfn_message("comm.데이터.변경.없음");
        		return false;
        	}
        	
        	// 교육담당자일 경우 유효성 검사 없이 그냥 저장
        	if(!this.chargerAt) {
        		// validation 체크
        		if(!this.gfn_checkValidation_NoUpdChk(this.ds_edcAcmsltList, this.ds_validation)) {	// 교육실적
        			return;
        		}
        	
        		for(var i = 0; i < this.ds_edcAcmsltList.rowcount; i++) {
        			var rowType = this.ds_edcAcmsltList.getRowType(i);
        			if(rowType == Dataset.ROWTYPE_INSERT || rowType == Dataset.ROWTYPE_UPDATE) {
        				var appnLrnAt = this.ds_edcAcmsltList.getColumn(i, "APPN_LRN_AT");
        				if(appnLrnAt == "1") {
        					var remoteEdcCrseSe = this.ds_edcAcmsltList.getColumn(i, "REMOTE_EDC_CRSE_SE");
        					if(this.comUtils.isNull(remoteEdcCrseSe)) {
        						this.gfn_message("comm.항목.입력.을", "[" + (i+1) + "행] 지정학습구분");
        						return false;
        					}
        				}
        			}
        		}
        	}
        	
        	if(this.gfn_message("confirm.저장.여부")) {
        		this.saveRow = this.ds_edcAcmsltList.rowposition;
        		this.fn_transaction("save");
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
        	var nRow = this.ds_edcAcmsltList.rowposition;
        	var cRow = this.ds_edcStsfdgList.rowcount;
        	var sanctnSts       = this.ds_edcAcmsltList.getColumn(nRow, "SANCTN_STS");
        // 	var sanctnSts2      = this.ds_edcAcmsltList.getColumn(nRow, "SANCTN_STS2");
        // 	var resultSanctnSts = this.ds_edcAcmsltList.getColumn(nRow, "RESULT_SANCTN_STS");
        	var edcTySn         = this.ds_edcAcmsltList.getColumn(nRow, "EDC_TY_SN");
        	var confmAt         = this.ds_edcAcmsltList.getColumn(nRow, "CONFM_AT");
        	var mainEdcCn       = this.ds_edcAcmsltList.getColumn(nRow, "EDC_RESULT_MAIN_EDC_CN");
        	var thts            = this.ds_edcAcmsltList.getColumn(nRow, "EDC_RESULT_THTS");
        	var etcMatter       = this.ds_edcAcmsltList.getColumn(nRow, "EDC_RESULT_ETC_MATTER");
        	
        	// 결재 전 유효성 체크
        	if(this.comUtils.isDatasetUpdated(this.ds_edcAcmsltList)) {
        		this.gfn_message("comm.정보.저장.요청", "교육실적목록");
        		return false;
        	}
        	if(this.comUtils.isDatasetUpdated(this.ds_edcStsfdgList)) {
        		this.gfn_message("comm.정보.저장.요청", "교육만족도");
        		return false;
        	}
        	
        	if(nRow < 0) {
        		this.gfn_message("comm.항목.선택.요청","교육실적목록");
        		return false;
        	}
        	
        // 	if(edcTySn == "7" || edcTySn == "8") {
        // 		this.gfn_message("info.처리불가","원격교육실적은 결재할 수 없습니다.");
        // 		return false;
        // 	}
        	
        	if(!(edcTySn == "1" || edcTySn == "2")) {
        		this.gfn_message("info.처리불가","외부교육(전문, 법정) 만 결재가 가능합니다.");
        		return false;
        	}
        	
        	// 주요교육내용
        	if(this.comUtils.isNull(mainEdcCn)) {
        		this.gfn_message("info.처리불가","주요교육내용을 입력하여 주십시오.");
        		return false;
        	}
        	// 시사점및소감
        	if(this.comUtils.isNull(thts)) {
        		this.gfn_message("info.처리불가","시사점 및 소감을 입력하여 주십시오.");
        		return false;
        	}
        	// 기타사항
        	if(this.comUtils.isNull(etcMatter)) {
        		this.gfn_message("info.처리불가","기타사항을 입력하여 주십시오.");
        		return false;
        	}
        	
        	// 교육만족도
        	for(var i = 0; i < cRow; i++) {
        		var qustnrResult = this.ds_edcStsfdgList.getColumn(i, "QUSTNR_RESULT");
        		if(this.comUtils.isNull(qustnrResult)) {
        			this.gfn_message("info.처리불가","교육만족도 답변을 입력하여 주십시오.");
        			return false;
        		}
        	}
        	
        	if(confmAt != "1") {
        		this.gfn_message("info.처리불가","승인된 교육실적만 결재할 수 있습니다.");
        		return;
        	}
        	else {
        		if(   sanctnSts == "1"	// 기안전
        		   || sanctnSts == "4"	// 중간결재
        		   || sanctnSts == "5") {	// 결재완료
        			this.gfn_message("info.처리불가","결재가 진행중이거나 완료된 교육실적은 결재할 수 없습니다.");
        			return;
        		}
        	}
        	
        	var title              = this.ds_edcAcmsltList.getColumn(nRow, "CRSE_NM");					// 결재제목(교육과정)
        	var deptNm             = this.ds_edcAcmsltList.getColumn(nRow, "DEPT_NM");					// 소속
        	var hrClsfNm           = this.ds_edcAcmsltList.getColumn(nRow, "HR_CLSF_NM");				// 직급
        	var empnm              = this.ds_edcAcmsltList.getColumn(nRow, "EMPNM");					// 성명
        	var crseNm             = this.ds_edcAcmsltList.getColumn(nRow, "CRSE_NM");					// 과정명
        	var edcInstt           = this.ds_edcAcmsltList.getColumn(nRow, "EDC_INSTT");				// 교육기관
        	var edcBgnde           = this.ds_edcAcmsltList.getColumn(nRow, "EDC_BGNDE2");				// 교육시작일
        	var edcEndde           = this.ds_edcAcmsltList.getColumn(nRow, "EDC_ENDDE2");				// 교육종료일
        	var edcPd              = edcBgnde + " ~ " + edcEndde;										// 교육기간
        	var edcResultMainEdcCn = this.ds_edcAcmsltList.getColumn(nRow, "EDC_RESULT_MAIN_EDC_CN");	// 주요교육내용
        	var edcResultThts      = this.ds_edcAcmsltList.getColumn(nRow, "EDC_RESULT_THTS");			// 소감
        	var edcResultEtcMatter = this.ds_edcAcmsltList.getColumn(nRow, "EDC_RESULT_ETC_MATTER");	// 기타사항
        	
        	// 구분 1~10, 설문 1~10, 만족도 1~10
        	var stsfdgSeNmList   = [null, null, null, null, null, null, null, null, null, null];	// 구분명
        	var qustnrCnList     = [null, null, null, null, null, null, null, null, null, null];	// 설문
        	var qustnrResultList = [null, null, null, null, null, null, null, null, null, null];	// 만족도
        	
        	for(var i = 0; i < cRow; i++) {
        		var qustnrTy = this.ds_edcStsfdgList.getColumn(i, "QUSTNR_TY");
        		stsfdgSeNmList[i]   = this.ds_edcStsfdgList.getColumn(i, "STSFDG_SE_NM");
        		qustnrCnList[i]     = this.ds_edcStsfdgList.getColumn(i, "QUSTNR_CN");
        		
        		if(qustnrTy == "01") {
        			var qustnrResult = this.ds_edcStsfdgList.getColumn(i, "QUSTNR_RESULT");
        			var fRow = this.ds_hrm043.findRow("CODE", qustnrResult);
        			var fText = this.ds_hrm043.getColumn(fRow, "CODE_NM");
        			qustnrResultList[i] = fText;
        		}
        		else if(qustnrTy  == "02") {
        			qustnrResultList[i] = this.ds_edcStsfdgList.getColumn(i, "QUSTNR_RESULT");
        		}
        	}
        	
        	// 결재상신
        	var arrSancData = new Array();
        	arrSancData[ 0] = title;				// 결재제목(교육과정)
        	arrSancData[ 1] = deptNm;				// 소속
        	arrSancData[ 2] = hrClsfNm;				// 직급
        	arrSancData[ 3] = empnm;				// 성명
        	arrSancData[ 4] = crseNm;				// 과정명
        	arrSancData[ 5] = edcInstt;				// 교육기관
        	arrSancData[ 6] = edcPd;				// 교육기간
        	arrSancData[ 7] = edcResultMainEdcCn;	// 주요교육내용
        	arrSancData[ 8] = edcResultThts;		// 소감
        	arrSancData[ 9] = stsfdgSeNmList[0];	// 구분1
        	arrSancData[10] = qustnrCnList[0];		// 설문1
        	arrSancData[11] = qustnrResultList[0];	// 만족도1
        	arrSancData[12] = stsfdgSeNmList[1];	// 구분2
        	arrSancData[13] = qustnrCnList[1];		// 설문2
        	arrSancData[14] = qustnrResultList[1];	// 만족도2
        	arrSancData[15] = stsfdgSeNmList[2];	// 구분3
        	arrSancData[16] = qustnrCnList[2];		// 설문3
        	arrSancData[17] = qustnrResultList[2];	// 만족도3
        	arrSancData[18] = stsfdgSeNmList[3];	// 구분4
        	arrSancData[19] = qustnrCnList[3];		// 설문4
        	arrSancData[20] = qustnrResultList[3];	// 만족도4
        	arrSancData[21] = stsfdgSeNmList[4];	// 구분5
        	arrSancData[22] = qustnrCnList[4];		// 설문5
        	arrSancData[23] = qustnrResultList[4];	// 만족도5
        	arrSancData[24] = stsfdgSeNmList[5];	// 구분6
        	arrSancData[25] = qustnrCnList[5];		// 설문6
        	arrSancData[26] = qustnrResultList[5];	// 만족도6
        	arrSancData[27] = stsfdgSeNmList[6];	// 구분7
        	arrSancData[28] = qustnrCnList[6];		// 설문7
        	arrSancData[29] = qustnrResultList[6];	// 만족도7
        	arrSancData[30] = stsfdgSeNmList[7];	// 구분8
        	arrSancData[31] = qustnrCnList[7];		// 설문8
        	arrSancData[32] = qustnrResultList[7];	// 만족도8
        	arrSancData[33] = stsfdgSeNmList[8];	// 구분9
        	arrSancData[34] = qustnrCnList[8];		// 설문9
        	arrSancData[35] = qustnrResultList[8];	// 만족도9
        	arrSancData[36] = stsfdgSeNmList[9];	// 구분10
        	arrSancData[37] = qustnrCnList[9];		// 설문10
        	arrSancData[38] = qustnrResultList[9];	// 만족도10
        	arrSancData[39] = edcResultEtcMatter;	// 기타사항

        	this.fn_callHandySanc2(
        		 this						// context
        		,'0000000050'				// formId
        		,this.ds_edcAcmsltList		// misDataset
        		,"TBHRM_EDC_MANAGE"			// tableName
        		,["YEAR","EMPNO","SN"]		// tableKey
        		,arrSancData				// arrSancData
        		,null						// subData
        		,null						// multiCheck(0 or 1)
        		,"RESULT_SANCTN_NO"			// otherColumn
        	);
        }

        /**********************************************************************
         * CALL TRANSACTION 영역
         **********************************************************************/
        this.fn_transaction = function(strSvcId)
        {
        	switch (strSvcId) {
        		case "selectEdcAcmsltList":	// 교육실적등록(개인별) 조회
        			var sController   	= "hsco/mis/hrm/HRM080303/selectEdcAcmsltList.do";
        			var sInDatasets   	= "input1=ds_cond";
        			var sOutDatasets  	= "ds_edcAcmsltList=output1 ds_hrm046=output2";
        			break;
        		case "save":				// 저장
        			var sController   	= "hsco/mis/hrm/HRM080303/save.do";
        			var sInDatasets   	= "input1=ds_edcAcmsltList:U input2=ds_edcStsfdgList:U";
        			var sOutDatasets  	= "";
        			break;
        		case "selectEdcAcmsltSub":	// 서브조회(첨부파일, 교육만족도) 조회
        			var sController   	= "hsco/mis/hrm/HRM080303/selectEdcAcmsltSub.do";
        			var sInDatasets   	= "input1=ds_condSub";
        			var sOutDatasets  	= "ds_fileList=output1 ds_edcStsfdgList=output2";
        			break;
        		case "selectFileList":      // 첨부파일 조회
        			var sController   	= "hsco/mis/hrm/HRM080303/selectFileList.do";
        			var sInDatasets   	= "input1=ds_condSub";
        			var sOutDatasets  	= "ds_fileList=output1";
        			break;
        	}

        	Ex.core.tran(this, strSvcId, sController, sInDatasets, sOutDatasets); 
        }

         /**********************************************************************
         * Transaction Callback 영역
         ***********************************************************************/
        this.fn_callBack = function (strSvcId,nErrorCode,strErrorMsg)
        {
        	// 오류 및 성공 메시지를 화면에 보여준다.
        	if(nErrorCode != 0) {
        	  this.gfn_callback_message(strSvcId, nErrorCode, strErrorMsg);
        	}
        	if (nErrorCode != 0){
        	} else {
        		switch (strSvcId) {
        			case "selectEdcAcmsltList":	// 교육실적등록(개인별) 조회
        				if(this.saveRow > -1){
        					this.ds_edcAcmsltList.set_rowposition(this.saveRow);
        					this.saveRow = -1;
        				}
        				break;
        			case "save":				// 저장
        				this.gfn_message("success.처리.성공");
        				this.fn_search();
        				break;
        			case "selectEdcAcmsltSub":	// 서브조회(첨부파일, 교육만족도) 조회
        				this.ds_fileList.filter("USE_AT == '1'");
        				break;
        			case "selectFileList":      // 첨부파일 조회
        				this.ds_fileList.filter("USE_AT == '1'");
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
        	// 교육유형(조회조건)
        	if(sPopupId == "popEdcTy") {
        		var dsTemp = new Dataset();
        		var loadCnt = dsTemp.loadXML(sReturn);
        		
         		if(loadCnt) {
        			var year = dsTemp.getColumn(0, "YEAR");
        			var sn   = dsTemp.getColumn(0, "SN");
         			var edcTyLclas = dsTemp.getColumn(0, "EDC_TY_LCLAS");
         			var edcTyMlsfc = dsTemp.getColumn(0, "EDC_TY_MLSFC");
         			var edcTySclas = dsTemp.getColumn(0, "EDC_TY_SCLAS");
         			var edcTyStr = edcTyLclas + "-" + edcTySclas;
         			
         			this.ds_cond.setColumn(0, "EDC_TY_SN", sn      );
         			this.ds_cond.setColumn(0, "EDC_TY_NM", edcTyStr);
         		}
        	}
        	
        	// 교육분류(조회조건)
        	if(sPopupId == "popEdcCl") {
        		var dsTemp = new Dataset();
        		var loadCnt = dsTemp.loadXML(sReturn);
        		
         		if(loadCnt) {
        			var year = dsTemp.getColumn(0, "YEAR");
        			var sn   = dsTemp.getColumn(0, "SN");
         			var abilitySeNm = dsTemp.getColumn(0, "ABILITY_SE_NM");
         			var abilityNm   = dsTemp.getColumn(0, "ABILITY_NM");
         			var edcClStr = abilitySeNm + "-" + abilityNm;
         			
         			this.ds_cond.setColumn(nRow, "EDC_CL_SN", sn      );
         			this.ds_cond.setColumn(nRow, "EDC_CL_NM", edcClStr);
         		}
        	}
        	
        	// 교육유형(상세)
        	if(sPopupId == "popEdcTyG") {
        		var dsTemp = new Dataset();
        		var loadCnt = dsTemp.loadXML(sReturn);
        		
         		if(loadCnt) {
        			var year = dsTemp.getColumn(0, "YEAR");
        			var sn   = dsTemp.getColumn(0, "SN");
         			var edcTyLclas = dsTemp.getColumn(0, "EDC_TY_LCLAS");
         			var edcTyMlsfc = dsTemp.getColumn(0, "EDC_TY_MLSFC");
         			var edcTySclas = dsTemp.getColumn(0, "EDC_TY_SCLAS");
         			var edcTyStr = edcTyLclas + "-" + edcTySclas;
         			
         			var nRow = this.ds_edcAcmsltList.rowposition;
         			this.ds_edcAcmsltList.setColumn(nRow, "EDC_TY_SN", sn      );
         			this.ds_edcAcmsltList.setColumn(nRow, "EDC_TY_NM", edcTyStr);
         		}
        	}
        	
        	// 교육분류(상세)
        	if(sPopupId == "popEdcClG") {
        		var dsTemp = new Dataset();
        		var loadCnt = dsTemp.loadXML(sReturn);
        		
         		if(loadCnt) {
        			var year = dsTemp.getColumn(0, "YEAR");
        			var sn   = dsTemp.getColumn(0, "SN");
         			var abilitySeNm = dsTemp.getColumn(0, "ABILITY_SE_NM");
         			var abilityNm   = dsTemp.getColumn(0, "ABILITY_NM");
         			var edcClStr = abilitySeNm + "-" + abilityNm;
         			
         			var nRow = this.ds_edcAcmsltList.rowposition;
         			this.ds_edcAcmsltList.setColumn(nRow, "EDC_CL_SN", sn      );
         			this.ds_edcAcmsltList.setColumn(nRow, "EDC_CL_NM", edcClStr);
         		}
        	}
        	
        	// 사원정보
        	if(sPopupId == "popEmp") {
        		var dsTemp = new Dataset();
        		var loadCnt = dsTemp.loadXML(sReturn);
        		
        		if(loadCnt) {
        			var empno    = dsTemp.getColumn(0, "EMPNO");
        			var empnm    = dsTemp.getColumn(0, "EMPNM");
        			var deptCode = dsTemp.getColumn(0, "DEPT_CODE");
        			var deptNm   = dsTemp.getColumn(0, "DEPT_NM");
        			
        			var nRow = this.ds_edcAcmsltList.rowposition;
        			this.ds_edcAcmsltList.setColumn(nRow, "EMPNO"    , empno);
        			this.ds_edcAcmsltList.setColumn(nRow, "EMPNM"    , empnm);
        			this.ds_edcAcmsltList.setColumn(nRow, "DEPT_CODE", deptCode);
        			this.ds_edcAcmsltList.setColumn(nRow, "DEPT_NM"  , deptNm);
        		}
        	}
        }

        /***********************************************************************
        * Transaction 영역 끝
        ************************************************************************/

        

        /**********************************************************************
        * non-Transaction 관련 컴포넌트 이벤트 처리 함수
        ***********************************************************************
        *
        * 1. 공통버튼 관련 이벤트 처리
        * 2. Dataset 관련 이벤트 처리
        * 3. 버튼 관련 이벤트 처리
        * 4. 사용자 정의 함수
        * 5. 첨부파일버튼 관련 이벤트 처리
        * 
        ***********************************************************************/

        
        /**********************************************************************
        * 공통버튼 관련 이벤트 처리
        ***********************************************************************/

        
        /*
         * 함수명  	: fn_insert
         * 설명 		: 신규 버튼 이벤트 처리(행추가)
         * params  		: Non
         * return Type 	: None
         * 사용법		: this.fn_insert();
         */
        this.fn_insert= function()
        {
        	var year     = this.ds_cond.getColumn(0, "YEAR");
        	var empno    = this.gfn_getEmpNo();
        	var empnm    = this.gfn_getUserName();
        	var deptCode = this.gfn_getDeptId();
        	var deptNm   = this.gfn_getDeptName();
        	
        	var nRow = this.ds_edcAcmsltList.addRow();
        	this.ds_edcAcmsltList.setColumn(nRow, "YEAR",      year);
        	this.ds_edcAcmsltList.setColumn(nRow, "EMPNO",     empno);
        	this.ds_edcAcmsltList.setColumn(nRow, "EMPNM",     empnm);
        	this.ds_edcAcmsltList.setColumn(nRow, "DEPT_CODE", deptCode);
        	this.ds_edcAcmsltList.setColumn(nRow, "DEPT_NM",   deptNm);
        	
        	this.ds_edcAcmsltList.setColumn(nRow, "RELATE_DTY", '101');
        	this.ds_edcAcmsltList.setColumn(nRow, "APPN_LRN_AT", '0')
        	this.ds_edcAcmsltList.setColumn(nRow, "DUTY_EDC_AT", '0')
        	this.ds_edcAcmsltList.setColumn(nRow, "DMSTC_SE", '01');
        	this.ds_edcAcmsltList.setColumn(nRow, "CONFM_AT", '0');
        	this.ds_edcAcmsltList.setColumn(nRow, "ENABLE_AT", '1');
        	this.ds_edcAcmsltList.setColumn(nRow, "TM_ENABLE_AT", '1');
        	
        	this.cmb_remoteEdcCrseSe.set_readonly(true);
        	this.cmb_remoteEdcCrseSe.set_cssclass("cmb_WF_Readonly");
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
        	if(Ex.util.isUpdated(this.ds_edcAcmsltList)) {
        		if(!this.gfn_message("confirm.변경.취소.여부")) {
        			return false;	// 아니오
        		}
        		this.ds_edcAcmsltList.reset();
        	}
        }

        /*
         * 함수명  	: fn_delete
         * 설명 		: 삭제 버튼 이벤트 처리(행삭제)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_delete();
         */
        this.fn_delete= function()
        {
        	var nRow = this.ds_edcAcmsltList.rowposition;
        	var confmAt = this.ds_edcAcmsltList.getColumn(nRow, "CONFM_AT");
        	if(confmAt == '1') {
        		this.gfn_message("info.처리불가", "승인된 교육은 삭제할 수 없습니다.");
        		return false;
        	}
        	
        	if(!this.gfn_message("confirm.삭제여부")) {
        		return false;	// 아니오
        	}
        	this.ds_edcAcmsltList.deleteRow(this.ds_edcAcmsltList.rowposition);
        }

        

        /**********************************************************************
        * Dataset 관련 이벤트 처리
        ***********************************************************************/

        /*
         * 함수명  	: ds_edcAcmsltList_onrowposchanged
         * 설명 		: 교육실적목록 행 변경시 이벤트 처리
         * params  		: none
         * return Type 	: none
         * 사용법		: this.ds_edcAcmsltList_onrowposchanged(obj, e)
         */
        this.ds_edcAcmsltList_onrowposchanged = function(obj,e)
        {
        	if(e.newrow > -1) {
        		var edcTySn = obj.getColumn(e.newrow, "EDC_TY_SN");			// 교육유형
        		var appnLrnAt = obj.getColumn(e.newrow, "APPN_LRN_AT");		// 지정학습여부
        		
        		if(appnLrnAt == '1') {
        			this.cmb_remoteEdcCrseSe.set_readonly(false);
        			this.cmb_remoteEdcCrseSe.set_cssclass("cmb_WF_Essential");
        		}
        		else {
        			this.cmb_remoteEdcCrseSe.set_readonly(true);
        			this.cmb_remoteEdcCrseSe.set_cssclass("cmb_WF_Readonly");
        		}
        		
        		if(obj.getRowType(e.newrow) == Dataset.ROWTYPE_INSERT) {
        			this.ds_fileList.clearData();
        			this.ds_edcStsfdgList.clearData();
        			return false;
        		}
        		this.ds_condSub.clearData();
        		var nRow = this.ds_condSub.addRow();
        		var year    = obj.getColumn(e.newrow, "YEAR");
        		var empno   = obj.getColumn(e.newrow, "EMPNO");
        		var sn      = obj.getColumn(e.newrow, "SN");
        		var edcTySn = obj.getColumn(e.newrow, "EDC_TY_SN");
        		var fileSn  = obj.getColumn(e.newrow, "FILE_SN");
        		this.ds_condSub.setColumn(nRow, "YEAR",      year   );
        		this.ds_condSub.setColumn(nRow, "EMPNO",     empno  );
        		this.ds_condSub.setColumn(nRow, "SN",        sn     );
        		this.ds_condSub.setColumn(nRow, "EDC_TY_SN", edcTySn);
        		this.ds_condSub.setColumn(nRow, "FILE_SN",   fileSn );
        		this.fn_search_sub();
        	}
        	else {
        		this.ds_fileList.clearData();
        		this.ds_edcStsfdgList.clearData();
        	}
        }

        
        /**********************************************************************
        * 버튼 관련 이벤트 처리
        ***********************************************************************/

        /*
         * 함수명  	: div_edcTySearch_s_onclick
         * 설명 		: 교육유형 팝업 호출
         * params  		: None
         * return Type 	: None
         * 사용법		: this.div_edcTySearch_s_onclick
         */
        this.div_edcTySearch_s_onclick = function(obj,e)
        {

        	var schYear = this.ds_cond.getColumn(0, "YEAR");
        	var parm = {
        	   arg_0      : this
        	  , year      : schYear
        	  , formId    : "HRM080303S"
        	};
        	this.gfn_popup("popEdcTy", 500, 465, "", parm, "mis_hrm::HRM080207_P01.xfdl", "fn_popupCallBack", true);
        }

        
        /*
         * 함수명  	: div_edcClSearch_s_onclick
         * 설명 		: 교육분류(역량) 팝업 호출
         * params  		: None
         * return Type 	: None
         * 사용법		: this.div_edcClSearch_s_onclick
         */
        this.div_edcClSearch_s_onclick = function(obj,e)
        {

        	var schYear = this.ds_cond.getColumn(0, "YEAR");
        	var parm = {
        	    arg_0      : this
        	  , year      : schYear
        	};
        	this.gfn_popup("popEdcCl", 500, 465, "", parm, "mis_hrm::HRM080207_P02.xfdl", "fn_popupCallBack", true);
        }

        
        /*
         * 함수명  	: btn_edcTySearch_onclick
         * 설명 		: 교육유형 팝업 호출
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_edcTySearch_onclick
         */
        this.div_edcTySearch_onclick = function(obj,e)
        {

        	var schYear = this.ds_cond.getColumn(0, "YEAR");
        	var parm = {
        	   arg_0      : this
        	  , year      : schYear
        	  , formId    : "HRM080303I"
        	};
        	this.gfn_popup("popEdcTyG", 500, 465, "", parm, "mis_hrm::HRM080207_P01.xfdl", "fn_popupCallBack", true);
        }

        
        /*
         * 함수명  	: btn_edcClSearch_onclick
         * 설명 		: 교육분류(역량) 팝업 호출
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_edcClSearch_onclick
         */
        this.div_edcClSearch_onclick = function(obj,e)
        {

        	var schYear = this.ds_cond.getColumn(0, "YEAR");
        	var parm = {
        	    arg_0      : this
        	  , year      : schYear
        	};
        	this.gfn_popup("popEdcClG", 500, 465, "", parm, "mis_hrm::HRM080207_P02.xfdl", "fn_popupCallBack", true);
        }

        
        /*
         * 함수명  	: div_sear_search_onclick
         * 설명 		: 사원정보
         * params  		: None
         * return Type 	: None
         * 사용법		: this.div_sear_search_onclick
         */
        this.div_sear_search_onclick = function(obj,e)
        {
        	this.gfn_popup("popEmp", 400, 400, "", null, "com::empno_P01.xfdl", "fn_popupCallBack", true);
        }

        
        /***********************************************************************
         * 사용자 정의 함수
         ***********************************************************************/

        /*
         * 함수명  	: fn_getConfmAt
         * 설명 		: 수정가능여부확인
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_getConfmAt();
         */
        this.fn_getConfmAt = function()
        {
        	var pRow    = this.ds_edcAcmsltList.rowposition;
        	var confmAt = this.ds_edcAcmsltList.getColumn("CONFM_AT");
        	return confmAt;
        }

        /*
         * 함수명  	: fn_get_imgUrl
         * 설명 		: 전자결재종류 이미지 경로 리턴 함수
         * params  		: 대상 전자결재 상태
         * return Type 	: 전자결재 종류 이미지 경로
         * 사용법		: this.fn_get_imgUrl(sanctnSts)
         */
        this.fn_get_imgUrl = function(sanctnSts)
        {
        	return this.gfn_getSanctnImgUrl(sanctnSts);
        }

        
        /***********************************************************************
         * 첨부파일버튼 관련 이벤트 처리
         ***********************************************************************/

        /*
         * 함수명  	: btn_delFiles_onclick
         * 설명 		: '선택삭제' 버튼 클릭 후 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_delFiles_onclick(obj,e);
         */
        this.btn_delFiles_onclick = function(obj,e)
        {
        	var findRow = this.ds_fileList.findRow("CHK", "1");
        	var confmAt = this.ds_edcAcmsltList.getColumn(this.ds_edcAcmsltList.rowposition, "CONFM_AT");
        	
        	if(confmAt == "1"){
        		this.gfn_message("fail.수정.불가", "이미 승인된 건은");
        		return;
        	}
        	
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
        	var nRow     = this.ds_edcAcmsltList.rowposition;	
        	var nRowType = this.ds_edcAcmsltList.getRowType(nRow);
        	var confmAt  = this.ds_edcAcmsltList.getColumn(nRow, "CONFM_AT");
        	
        	if(nRow < 0){
        		this.gfn_message("comm.항목.선택.요청","대상 정보");
        		return;
        	}
        	
        	if(nRowType == 2){
        		this.gfn_message("info.진행가능","신규 정보를 저장");
        		return;
        	}
        	
        // 	if(confmAt == "1"){
        // 		this.gfn_message("fail.수정.불가", "이미 승인된 건은");
        // 		return;
        // 	}
        	
        	// 첨부파일 업로드(fileSn 자동채번 / 첨부파일 Master에 ROW추가 / 파일 업로드 및 자동저장 / 테이블에 fileSn반영 / 데이터셋에 fileSn반영, 단 신규 ROW가 아닐경우 ROWTYPE은 유지)
        	this.mCallback = function() {
        		this.fn_autoFileSn(
        			 "MIS"									// 대분류   (SYS_SE)
        			,"HRM"									// 업무구분 (JOB_SE)
        			, this.File_UpDownManager	            // fileManager 오브젝트
        			, this.ds_fileList		                // fileObject
        			, this.ds_edcAcmsltList					// fileSn을 불러오거나 반영해야 하는 컬럼
        			, "TBHRM_EDC_MANAGE"					// fileSn을 저장할 테이블
        			, "FILE_SN"								// fileSn 컬럼명이 다를 경우를 대비
        			, ["YEAR", "EMPNO", "SN"]				// fileSn을 저장할 테이블의 PK (FileSn 확인 및 자동반영목적)
        		);
        	}
        	
        	this.mCallback();
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
         * 함수명  	: fn_onFileSuccess
         * 설명 		: 파일 업로드 성공시 이벤트
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_onFileSuccess();
         */
        this.fn_onFileSuccess = function(){
        	this.gfn_message("success.처리.성공");
        	
        	var nRow = this.ds_edcAcmsltList.rowposition;
        	this.ds_condSub.setColumn(0, "FILE_SN", this.ds_edcAcmsltList.getColumn(nRow, "FILE_SN"));
        	
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
         * 함수명  	: div_search_edt_edcTy_onchanged
         * 설명 		: Edit에서 데이터 변경 후 이벤트 처리(검색조건 Edit - 교육유형)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.div_search_edt_edcTy_onchanged(obj,e);
         */
        this.div_search_edt_edcTy_onchanged = function(obj,e)
        {
        	if(this.comUtils.isNull()) {
        		this.div_search.edt_edcTy.set_value("");
        		this.ds_cond.setColumn(0, "EDC_TY_SN", "");
        		this.ds_cond.setColumn(0, "EDC_TY_NM", "");
        	}
        }

        
        /*
         * 함수명  	: div_search_edt_edcCl_onchanged
         * 설명 		: Edit에서 데이터 변경 후 이벤트 처리(검색조건 Edit - 교육분류)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.div_search_edt_edcCl_onchanged(obj,e);
         */
        this.div_search_edt_edcCl_onchanged = function(obj,e)
        {
        	if(this.comUtils.isNull(e.postvalue)) {
        		this.div_search.edt_edcCl.set_value("");
        		this.ds_cond.setColumn(0, "EDC_CL_SN", "");
        		this.ds_cond.setColumn(0, "EDC_CL_NM", "");
        	}
        }

        /*
         * 함수명  	: ds_edcAcmsltList_oncolumnchanged
         * 설명 		: ds_edcAcmsltList 데이터 변경 후 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.ds_edcAcmsltList_oncolumnchanged(obj,e);
         */
        this.ds_edcAcmsltList_oncolumnchanged = function(obj,e)
        {
        	// 지정학습여부 컬럼
        	if(e.columnid == "APPN_LRN_AT"){
        		
        		this.cmb_remoteEdcCrseSe.set_readonly(false);
        		this.cmb_remoteEdcCrseSe.set_cssclass("cmb_WF_Essential");
        		
        		if(e.newvalue == "0"){
        			obj.setColumn(e.row, "REMOTE_EDC_CRSE_SE", null);
        			this.cmb_remoteEdcCrseSe.set_readonly(true);
        			this.cmb_remoteEdcCrseSe.set_cssclass("cmb_WF_Readonly");
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_edcAcmsltList.addEventHandler("onrowposchanged", this.ds_edcAcmsltList_onrowposchanged, this);
            this.ds_edcAcmsltList.addEventHandler("oncolumnchanged", this.ds_edcAcmsltList_oncolumnchanged, this);
            this.ds_edcStsfdgList.addEventHandler("oncolumnchanged", this.ds_qestnarList_oncolumnchanged, this);
            this.ds_code.addEventHandler("oncolumnchanged", this.ds_code_oncolumnchanged, this);
            this.addEventHandler("oninit", this.HRM080303_oninit, this);
            this.addEventHandler("onload", this.HRM080303_onload, this);
            this.div_search.sta_edcTy.addEventHandler("onclick", this.div_search_sta_sttusSe00_onclick, this);
            this.div_search.sta_edcCl.addEventHandler("onclick", this.div_search_sta_sttusSe00_onclick, this);
            this.div_search.edt_edcTy.addEventHandler("onchanged", this.div_search_edt_edcTy_onchanged, this);
            this.div_search.div_edcTySearch_s.addEventHandler("onclick", this.div_edcTySearch_s_onclick, this);
            this.div_search.edt_edcCl.addEventHandler("onchanged", this.div_search_edt_edcCl_onchanged, this);
            this.div_search.div_edcClSearch_s.addEventHandler("onclick", this.div_edcClSearch_s_onclick, this);
            this.btn_delFiles.addEventHandler("onclick", this.btn_delFiles_onclick, this);
            this.btn_uploadFiles.addEventHandler("onclick", this.btn_uploadFiles_onclick, this);
            this.btn_downFiles.addEventHandler("onclick", this.btn_downFiles_onclick, this);
            this.grd_cmmnAtchmnfl.addEventHandler("oncellclick", this.grd_cmmnAtchmnfl_oncellclick, this);
            this.grd_cmmnAtchmnfl.addEventHandler("onheadclick", this.grd_cmmnAtchmnfl_onheadclick, this);
            this.div_edcTySearch.addEventHandler("onclick", this.div_edcTySearch_onclick, this);
            this.div_edcClSearch.addEventHandler("onclick", this.div_edcClSearch_onclick, this);
            this.div_sear.search.addEventHandler("onclick", this.div_sear_search_onclick, this);

        };

        this.loadIncludeScript("HRM080303.xfdl");
        this.loadPreloadList();
       
    };
}
)();
