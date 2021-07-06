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
                this.set_name("HRM070102");
                this.set_classname("HRM070102");
                this.set_titletext("근무상황부 등록");
                this._setFormPosition(0,0,1059,735);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("DS_TBHRM_WRKCP", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"REWARD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ASORT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"BEGIN_TM\" type=\"STRING\" size=\"256\"/><Column id=\"ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"END_TM\" type=\"STRING\" size=\"256\"/><Column id=\"DAYCNT\" type=\"STRING\" size=\"256\"/><Column id=\"TIME\" type=\"STRING\" size=\"256\"/><Column id=\"PRVONSH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"CNFIRM_AT\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_STS\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_KND\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"FAMILY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CANCL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ASORT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO_2\" type=\"STRING\" size=\"256\"/><Column id=\"CAR_USE\" type=\"STRING\" size=\"256\"/><Column id=\"NGHT_WRK_AT\" type=\"STRING\" size=\"256\"/><Column id=\"WKEND_YRYC_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("false");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BGNDT1\" type=\"STRING\" size=\"256\"/><Column id=\"BGNDT2\" type=\"STRING\" size=\"256\"/><Column id=\"ASORT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_asort_code", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"GRP_CODE_SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_AM_PM_AT", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">001</Col><Col id=\"data\">오전</Col></Row><Row><Col id=\"code\">002</Col><Col id=\"data\">오후</Col></Row><Row><Col id=\"code\">003</Col><Col id=\"data\">종일</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">BGNDT1</Col><Col id=\"compId\">ds_cond</Col><Col id=\"msgId\">조회시작일자</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">BGNDT2</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조회종료일자</Col><Col id=\"from\"/></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">BGNDT2</Col><Col id=\"from\">BGNDT1</Col><Col id=\"msgId\">조회시작일^조회종료일</Col><Col id=\"notNull\"/></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">DEPT_CODE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조회부서</Col></Row><Row><Col id=\"compId\">DS_TBHRM_WRKCP</Col><Col id=\"colId\">EMPNO</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">성명</Col></Row><Row><Col id=\"compId\">DS_TBHRM_WRKCP</Col><Col id=\"colId\">DEPT_CODE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">부서</Col></Row><Row><Col id=\"compId\">DS_TBHRM_WRKCP</Col><Col id=\"colId\">ASORT_CODE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">종별구분</Col></Row><Row><Col id=\"compId\">DS_TBHRM_WRKCP</Col><Col id=\"colId\">BGNDE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">시작일</Col></Row><Row><Col id=\"compId\">DS_TBHRM_WRKCP</Col><Col id=\"colId\">BEGIN_TM</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">시작시각</Col></Row><Row><Col id=\"msgId\">시작시각^23:59</Col><Col id=\"colId\">BEGIN_TM</Col><Col id=\"compId\">DS_TBHRM_WRKCP</Col><Col id=\"nlength\">4</Col><Col id=\"to\">2359</Col></Row><Row><Col id=\"compId\">DS_TBHRM_WRKCP</Col><Col id=\"colId\">ENDDE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">종료일</Col></Row><Row><Col id=\"compId\">DS_TBHRM_WRKCP</Col><Col id=\"colId\">ENDDE</Col><Col id=\"from\">BGNDE</Col><Col id=\"msgId\">종료일^시작일</Col></Row><Row><Col id=\"compId\">DS_TBHRM_WRKCP</Col><Col id=\"colId\">END_TM</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">종료시각</Col></Row><Row><Col id=\"colId\">END_TM</Col><Col id=\"compId\">DS_TBHRM_WRKCP</Col><Col id=\"nlength\">4</Col><Col id=\"to\">2359</Col><Col id=\"msgId\">종료시각^23:59</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_clsfSe", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"GRP_CODE_SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_approve", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DATA_VALUE\" type=\"STRING\" size=\"1000\"/><Column id=\"DATA_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"O_URL\" type=\"STRING\" size=\"256\"/><Column id=\"I_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO1\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ1\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO2\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ2\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO3\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ3\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO4\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ4\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO5\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ5\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CANCEL_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_TBHRM_YRYC", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"USE_101\" type=\"STRING\" size=\"256\"/><Column id=\"USE_303\" type=\"STRING\" size=\"256\"/><Column id=\"USE_202\" type=\"STRING\" size=\"256\"/><Column id=\"CANCL_101\" type=\"STRING\" size=\"256\"/><Column id=\"CANCL_303\" type=\"STRING\" size=\"256\"/><Column id=\"CANCL_202\" type=\"STRING\" size=\"256\"/><Column id=\"YRYC_DAYCNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_USE\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_REMNDR\" type=\"STRING\" size=\"256\"/><Column id=\"S402\" type=\"STRING\" size=\"256\"/><Column id=\"S404\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_asort_code_s", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"GRP_CODE_SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_hr_family", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"FAMILY_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_fileList_Del", this);
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

            obj = new Dataset("ds_condHoly", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("false");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDDE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_holyCnt", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"HOLY_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_validation2", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">BGNDT1</Col><Col id=\"compId\">ds_cond</Col><Col id=\"msgId\">조회시작일자</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">BGNDT2</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조회종료일자</Col><Col id=\"from\"/></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">BGNDT2</Col><Col id=\"from\">BGNDT1</Col><Col id=\"msgId\">조회시작일^조회종료일</Col><Col id=\"notNull\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_hrm097", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"GRP_CODE_SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond_yryc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("false");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_canclap", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_condAsort316", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"REWARD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ASORT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"BEGIN_TM\" type=\"STRING\" size=\"256\"/><Column id=\"ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"END_TM\" type=\"STRING\" size=\"256\"/><Column id=\"DAYCNT\" type=\"STRING\" size=\"256\"/><Column id=\"TIME\" type=\"STRING\" size=\"256\"/><Column id=\"PRVONSH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"CNFIRM_AT\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_STS\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_KND\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"FAMILY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CANCL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ASORT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO_2\" type=\"STRING\" size=\"256\"/><Column id=\"CAR_USE\" type=\"STRING\" size=\"256\"/><Column id=\"NGHT_WRK_AT\" type=\"STRING\" size=\"256\"/><Column id=\"WKEND_YRYC_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_chldrnNrtrVcatn", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"CHILD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_POSBLTY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_CNT1\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_CNT4\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_CNT5\" type=\"STRING\" size=\"256\"/><Column id=\"CANCL_SANCTN_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ENABLE_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "0", null, "33", "28", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Box");
            this.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "0", "0", "15", "33", null, null, this.div_search);
            obj.set_taborder("10");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_gnfdDe", "absolute", "15", "6", "64", "19", null, null, this.div_search);
            obj.set_taborder("0");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_dclzSe", "absolute", "314", "6", "64", "19", null, null, this.div_search);
            obj.set_taborder("3");
            obj.set_text("종별구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_register", "absolute", "771", "6", "51", "19", null, null, this.div_search);
            obj.set_taborder("5");
            obj.set_text("대상자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_BGNDT1", "absolute", "79", "5", "102", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Essential");
            obj.set_enableevent("true");
            obj = new Calendar("cal_BGNDT2", "absolute", "197", "5", "102", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Essential");
            obj.set_enableevent("true");
            obj = new Combo("cmb_DCLZ_SE", "absolute", "378", "5", "105", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_displaynulltext("전체");
            obj.set_innerdataset("@ds_asort_code_s");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enableevent("true");
            obj = new Div("div_DeptComp", "absolute", "562", "5", "194", "21", null, null, this.div_search);
            obj.set_taborder("11");
            obj.set_async("false");
            obj.set_url("com::deptCode.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_register00", "absolute", "498", "6", "64", "19", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("소속부서");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "483", "0", "15", "33", null, null, this.div_search);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "756", "0", "15", "33", null, null, this.div_search);
            obj.set_taborder("14");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("div_EMP", "absolute", "822", "5", "166", "21", null, null, this.div_search);
            obj.set_taborder("15");
            obj.set_async("false");
            obj.set_url("com::empno.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "299", "0", "15", "33", null, null, this.div_search);
            obj.set_taborder("16");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "183", "9", "10", "16", null, null, this);
            obj.set_taborder("6");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "1031", "0", "15", "735", null, null, this);
            obj.set_taborder("15");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", null, "0", "13", "735", "0", null, this);
            obj.set_taborder("16");
            obj.set_text("스\r\n크\r\n롤\r\n13");
            obj.set_visible("false");
            obj.style.set_background("#d07b173c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "0", "33", "1031", "10", null, null, this);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gnfdList", "absolute", "0", "41", "120", "19", null, null, this);
            obj.set_taborder("18");
            obj.set_text("근무상황부 목록");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_TBHRM_WRKCP", "absolute", "0", "61", null, null, "458", "0", this);
            obj.set_taborder("19");
            obj.set_binddataset("DS_TBHRM_WRKCP");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"33\" band=\"left\"/><Column size=\"60\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"400\"/><Column size=\"108\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"결재상태\"/><Cell col=\"2\" rowspan=\"2\" text=\"종별구분\"/><Cell col=\"3\" colspan=\"2\" text=\"대상자\"/><Cell col=\"5\" colspan=\"4\" text=\"기간(일수)\"/><Cell col=\"9\" rowspan=\"2\" text=\"사유/용무\"/><Cell col=\"10\" rowspan=\"2\" text=\"차량유무\"/><Cell row=\"1\" col=\"3\" text=\"소속\"/><Cell row=\"1\" col=\"4\" text=\"성명\"/><Cell row=\"1\" col=\"5\" text=\"시작일\"/><Cell row=\"1\" col=\"6\" text=\"종료일\"/><Cell row=\"1\" col=\"7\" text=\"일수\"/><Cell row=\"1\" col=\"8\" text=\"시간\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"expr:(currow)+1\"/><Cell col=\"1\" displaytype=\"image\" text=\"expr:comp.parent.fn_get_imgUrl(SANCTN_STS)\"/><Cell col=\"2\" displaytype=\"combo\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:ASORT_CODE\" combodataset=\"ds_asort_code_s\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" edittype=\"none\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:DEPT_NM\"/><Cell col=\"4\" edittype=\"none\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:EMPNM\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"none\" text=\"bind:BGNDE\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"none\" text=\"bind:ENDDE\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" edittype=\"none\" text=\"bind:DAYCNT\"/><Cell col=\"8\" edittype=\"none\" text=\"bind:TIME\" mask=\"##:##\"/><Cell col=\"9\" edittype=\"none\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:PRVONSH\" tooltiptext=\"bind:PRVONSH\"/><Cell col=\"10\" text=\"bind:CAR_USE\"/></Band></Format><Format id=\"default_copy\"><Columns><Column size=\"33\" band=\"left\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"400\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"확정여부\"/><Cell col=\"2\" rowspan=\"2\" text=\"결재상태\"/><Cell col=\"3\" rowspan=\"2\" text=\"종별구분\"/><Cell col=\"4\" colspan=\"2\" text=\"대상자\"/><Cell col=\"6\" colspan=\"4\" text=\"기간(일수)\"/><Cell col=\"10\" rowspan=\"2\" text=\"사유/용무\"/><Cell row=\"1\" col=\"4\" text=\"소속\"/><Cell row=\"1\" col=\"5\" text=\"성명\"/><Cell row=\"1\" col=\"6\" text=\"시작일\"/><Cell row=\"1\" col=\"7\" text=\"종료일\"/><Cell row=\"1\" col=\"8\" text=\"일수\"/><Cell row=\"1\" col=\"9\" text=\"시간\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"expr:(currow)+1\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:CNFIRM_AT\"/><Cell col=\"2\" displaytype=\"image\" text=\"expr:comp.parent.fn_get_imgUrl(SANCTN_STS)\"/><Cell col=\"3\" displaytype=\"combo\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:ASORT_CODE\" combodataset=\"ds_asort_code_s\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" edittype=\"none\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:DEPT_NM\"/><Cell col=\"5\" edittype=\"none\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:EMPNM\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"none\" text=\"bind:BGNDE\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"date\" edittype=\"none\" text=\"bind:ENDDE\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" edittype=\"none\" text=\"bind:DAYCNT\"/><Cell col=\"9\" edittype=\"none\" text=\"bind:TIME\" mask=\"##:##\"/><Cell col=\"10\" edittype=\"none\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:PRVONSH\" tooltiptext=\"bind:PRVONSH\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "56", "1031", "5", null, null, this);
            obj.set_taborder("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Div("div_dtls", "absolute", null, "33", "420", null, "28", "0", this);
            obj.set_taborder("21");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Static("sta_backgroundLabel11", "absolute", "0", "210", null, "27", "0", null, this.div_dtls);
            obj.set_taborder("192");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_backgroundLabel05", "absolute", "0", "331", null, "27", "0", null, this.div_dtls);
            obj.set_taborder("160");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_backgroundLabel02", "absolute", "0", "271", null, "27", "0", null, this.div_dtls);
            obj.set_taborder("150");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_backgroundLabel04", "absolute", "0", "80", null, "27", "0", null, this.div_dtls);
            obj.set_taborder("135");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_backgroundLabel03", "absolute", "0", "106", null, "27", "0", null, this.div_dtls);
            obj.set_taborder("136");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_backgroundLabel08", "absolute", "0", "184", null, "27", "0", null, this.div_dtls);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_backgroundLabel00", "absolute", "0", "54", null, "27", "0", null, this.div_dtls);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_backgroundLabel", "absolute", "0", "28", null, "27", "0", null, this.div_dtls);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Div("div_EMP", "absolute", "95", "31", "166", "21", null, null, this.div_dtls);
            obj.set_taborder("71");
            obj.set_async("false");
            obj.set_url("com::empno.xfdl");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_empTitle01", "absolute", "0", "28", "93", "27", null, null, this.div_dtls);
            obj.set_taborder("72");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_empTitle04", "absolute", "0", "54", "93", "27", null, null, this.div_dtls);
            obj.set_taborder("73");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Div("div_DeptComp", "absolute", "95", "57", "194", "21", null, null, this.div_dtls);
            obj.set_taborder("74");
            obj.set_async("false");
            obj.set_url("com::deptCode.xfdl");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_backgroundLabel07", "absolute", "0", "158", null, "27", "0", null, this.div_dtls);
            obj.set_taborder("103");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_empTitle12", "absolute", "219", "158", "93", "27", null, null, this.div_dtls);
            obj.set_taborder("104");
            obj.set_text("시간");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Edit("edt_DAYCNT", "absolute", "95", "161", "65", "21", null, null, this.div_dtls);
            obj.set_taborder("106");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("3");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("right middle");
            obj.set_readonly("true");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_APYEXM_NO00", "absolute", "0", "158", "93", "27", null, null, this.div_dtls);
            obj.set_taborder("107");
            obj.set_text("일수");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_APYEXM_NO01", "absolute", "0", "184", "93", "27", null, null, this.div_dtls);
            obj.set_taborder("108");
            obj.set_text("사유/용무");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Edit("edt_PRVONSH", "absolute", "95", "187", "322", "21", null, null, this.div_dtls);
            obj.set_taborder("109");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("200");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_gnfdList01", "absolute", "0", "9", "100", "19", null, null, this.div_dtls);
            obj.set_taborder("110");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_align("left middle");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "237", "300", "10", null, null, this.div_dtls);
            obj.set_taborder("111");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            obj.set_text("10");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_gnfdList00", "absolute", "0", "247", "100", "19", null, null, this.div_dtls);
            obj.set_taborder("112");
            obj.set_text("연가일수");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_align("left middle");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("Static36", "absolute", "0", "436", "300", "10", null, null, this.div_dtls);
            obj.set_taborder("114");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Calendar("cal_BGNDE", "absolute", "95", "109", "117", "21", null, null, this.div_dtls);
            this.div_dtls.addChild(obj.name, obj);
            obj.set_taborder("126");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_align("center middle");
            obj.set_cssclass("cal_WF_Essential");
            obj = new Combo("cmb_ASORT_CODE", "absolute", "95", "83", "140", "21", null, null, this.div_dtls);
            this.div_dtls.addChild(obj.name, obj);
            obj.set_taborder("130");
            obj.set_innerdataset("@ds_asort_code");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_cssclass("cmb_WF_Essential");
            obj = new Static("sta_empTitle11", "absolute", "0", "106", "93", "27", null, null, this.div_dtls);
            obj.set_taborder("131");
            obj.set_text("시작일");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_empTitle10", "absolute", "219", "106", "93", "27", null, null, this.div_dtls);
            obj.set_taborder("132");
            obj.set_text("시작시각");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_empTitle03", "absolute", "0", "80", "93", "27", null, null, this.div_dtls);
            obj.set_taborder("134");
            obj.set_text("종별구분");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_backgroundLabel01", "absolute", "0", "132", null, "27", "0", null, this.div_dtls);
            obj.set_taborder("137");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_empTitle00", "absolute", "219", "132", "93", "27", null, null, this.div_dtls);
            obj.set_taborder("140");
            obj.set_text("종료시각");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_empTitle06", "absolute", "0", "132", "93", "27", null, null, this.div_dtls);
            obj.set_taborder("141");
            obj.set_text("종료일");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Calendar("cal_ENDDE", "absolute", "95", "135", "117", "21", null, null, this.div_dtls);
            this.div_dtls.addChild(obj.name, obj);
            obj.set_taborder("144");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_align("center middle");
            obj.set_cssclass("cal_WF_Essential");
            obj = new MaskEdit("msk_BEGIN_TM", "absolute", null, "109", "71", "21", "35", null, this.div_dtls);
            obj.set_taborder("145");
            obj.set_type("string");
            obj.set_mask("##:##");
            obj.set_cssclass("msk_WF_Essential");
            obj.style.set_align("center middle");
            this.div_dtls.addChild(obj.name, obj);
            obj = new MaskEdit("msk_END_TM", "absolute", null, "135", "71", "21", "35", null, this.div_dtls);
            obj.set_taborder("146");
            obj.set_type("string");
            obj.set_mask("##:##");
            obj.set_cssclass("msk_WF_Essential");
            obj.style.set_align("center middle");
            this.div_dtls.addChild(obj.name, obj);
            obj = new MaskEdit("msk_TIME", "absolute", null, "161", "71", "21", "35", null, this.div_dtls);
            obj.set_taborder("147");
            obj.set_type("string");
            obj.set_mask("##:##");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("center middle");
            obj.set_readonly("true");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_empTitle02", "absolute", "219", "271", "93", "27", null, null, this.div_dtls);
            obj.set_taborder("149");
            obj.set_text("잔여일수");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Edit("edt_YRYC_DAYCNT", "absolute", "95", "274", "65", "21", null, null, this.div_dtls);
            obj.set_taborder("151");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("right middle");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_APYEXM_NO02", "absolute", "0", "271", "93", "27", null, null, this.div_dtls);
            obj.set_taborder("152");
            obj.set_text("연차부여");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_gnfdList02", "absolute", "0", "308", "100", "19", null, null, this.div_dtls);
            obj.set_taborder("153");
            obj.set_text("연차 사용현황");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_align("left middle");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "327", "300", "5", null, null, this.div_dtls);
            obj.set_taborder("154");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", "298", "300", "10", null, null, this.div_dtls);
            obj.set_taborder("155");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_empTitle05", "absolute", "219", "331", "93", "27", null, null, this.div_dtls);
            obj.set_taborder("157");
            obj.set_text("연차취소");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Edit("edt_USE_101", "absolute", "95", "334", "65", "21", null, null, this.div_dtls);
            obj.set_taborder("158");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("right middle");
            obj.set_readonly("true");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_APYEXM_NO03", "absolute", "0", "332", "93", "27", null, null, this.div_dtls);
            obj.set_taborder("159");
            obj.set_text("연차");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_backgroundLabel06", "absolute", "0", "357", null, "27", "0", null, this.div_dtls);
            obj.set_taborder("161");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_empTitle07", "absolute", "219", "357", "93", "27", null, null, this.div_dtls);
            obj.set_taborder("163");
            obj.set_text("하계휴가취소");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Edit("edt_USE_303", "absolute", "95", "360", "65", "21", null, null, this.div_dtls);
            obj.set_taborder("164");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("right middle");
            obj.set_readonly("true");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_APYEXM_NO04", "absolute", "0", "357", "93", "27", null, null, this.div_dtls);
            obj.set_taborder("165");
            obj.set_text("하계휴가");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_backgroundLabel09", "absolute", "0", "383", null, "27", "0", null, this.div_dtls);
            obj.set_taborder("166");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_empTitle08", "absolute", "219", "383", "93", "27", null, null, this.div_dtls);
            obj.set_taborder("168");
            obj.set_text("병가(사)취소");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Edit("edt_USE_202", "absolute", "95", "386", "65", "21", null, null, this.div_dtls);
            obj.set_taborder("169");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("right middle");
            obj.set_readonly("true");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_APYEXM_NO05", "absolute", "0", "383", "93", "27", null, null, this.div_dtls);
            obj.set_taborder("170");
            obj.set_text("병가(사)");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_backgroundLabel10", "absolute", "0", "409", null, "27", "0", null, this.div_dtls);
            obj.set_taborder("171");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Edit("edt_TOT_USE", "absolute", "95", "412", "65", "21", null, null, this.div_dtls);
            obj.set_taborder("174");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("right middle");
            obj.set_readonly("true");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_APYEXM_NO06", "absolute", "0", "409", "93", "27", null, null, this.div_dtls);
            obj.set_taborder("175");
            obj.set_text("총사용일수");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Edit("edt_TOT_REMNDR", "absolute", "314", "274", "65", "21", null, null, this.div_dtls);
            obj.set_taborder("176");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("right middle");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Edit("edt_CANCL_101", "absolute", "314", "334", "65", "21", null, null, this.div_dtls);
            obj.set_taborder("177");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("right middle");
            obj.set_readonly("true");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Edit("edt_CANCL_303", "absolute", "314", "360", "65", "21", null, null, this.div_dtls);
            obj.set_taborder("178");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("right middle");
            obj.set_readonly("true");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Edit("edt_CANCL_202", "absolute", "314", "386", "65", "21", null, null, this.div_dtls);
            obj.set_taborder("179");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("right middle");
            obj.set_readonly("true");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "160", "161", "22", "21", null, null, this.div_dtls);
            obj.set_taborder("180");
            obj.set_text("일");
            obj.style.set_align("center middle");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "160", "274", "22", "21", null, null, this.div_dtls);
            obj.set_taborder("181");
            obj.set_text("일");
            obj.style.set_align("center middle");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "379", "274", "22", "21", null, null, this.div_dtls);
            obj.set_taborder("182");
            obj.set_text("일");
            obj.style.set_align("center middle");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "160", "334", "22", "21", null, null, this.div_dtls);
            obj.set_taborder("183");
            obj.set_text("일");
            obj.style.set_align("center middle");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "379", "334", "22", "21", null, null, this.div_dtls);
            obj.set_taborder("184");
            obj.set_text("일");
            obj.style.set_align("center middle");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "160", "360", "22", "21", null, null, this.div_dtls);
            obj.set_taborder("185");
            obj.set_text("일");
            obj.style.set_align("center middle");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "379", "360", "22", "21", null, null, this.div_dtls);
            obj.set_taborder("186");
            obj.set_text("일");
            obj.style.set_align("center middle");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "160", "386", "22", "21", null, null, this.div_dtls);
            obj.set_taborder("187");
            obj.set_text("일");
            obj.style.set_align("center middle");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "379", "386", "22", "21", null, null, this.div_dtls);
            obj.set_taborder("188");
            obj.set_text("일");
            obj.style.set_align("center middle");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "160", "412", "22", "21", null, null, this.div_dtls);
            obj.set_taborder("189");
            obj.set_text("일");
            obj.style.set_align("center middle");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Combo("cmb_FAMILY", "absolute", "95", "213", "124", "21", null, null, this.div_dtls);
            this.div_dtls.addChild(obj.name, obj);
            obj.set_taborder("191");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_innerdataset("@ds_hr_family");
            obj.set_codecolumn("SEQ");
            obj.set_datacolumn("FAMILY_NM");
            obj = new Static("sta_title02", "absolute", "224", "214", "160", "19", null, null, this.div_dtls);
            obj.set_taborder("193");
            obj.set_text("※(가족사항 등록 필요)");
            obj.style.set_color("gray");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("left middle");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "0", "266", "300", "5", null, null, this.div_dtls);
            obj.set_taborder("194");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_gnfdList03", "absolute", "0", "508", "100", "19", null, null, this.div_dtls);
            obj.set_taborder("195");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_align("left middle");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "0", "527", "300", "5", null, null, this.div_dtls);
            obj.set_taborder("196");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Grid("grd_cmmnAtchmnfl", "absolute", "0", "532", null, null, "0", "0", this.div_dtls);
            obj.set_taborder("197");
            obj.set_binddataset("ds_fileList");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"65\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"파일형식\"/><Cell col=\"2\" celltype=\"head\" text=\"파일명\"/><Cell col=\"3\" text=\"확장자\"/><Cell col=\"4\" text=\"사이즈\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"image\" text=\"bind:FILE_IMAGE\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"2\" displaytype=\"normal\" style=\"align:left middle;\" text=\"bind:ORGINL_FILE_NM\"/><Cell col=\"3\" text=\"bind:FILE_EXTSN\"/><Cell col=\"4\" text=\"bind:FILE_MG\"/></Band></Format></Formats>");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Button("btn_delFiles", "absolute", null, "508", "67", "19", "160", null, this.div_dtls);
            obj.set_taborder("198");
            obj.set_text("선택삭제");
            obj.set_cssclass("btn_WF_Process");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Button("btn_uploadFiles", "absolute", null, "508", "68", "19", "88", null, this.div_dtls);
            obj.set_taborder("199");
            obj.set_text("파일업로드");
            obj.set_cssclass("btn_WF_Process");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Button("btn_downFiles", "absolute", null, "508", "85", "19", "0", null, this.div_dtls);
            obj.set_taborder("200");
            obj.set_text("선택다운로드");
            obj.set_cssclass("btn_WF_Process");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_APYEXM_NO07", "absolute", "0", "210", "93", "27", null, null, this.div_dtls);
            obj.set_taborder("190");
            obj.set_text("자녀(육아휴직)");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 0");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_backgroundLabel12", "absolute", "0", "471", null, "27", "0", null, this.div_dtls);
            obj.set_taborder("201");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_etcSttus", "absolute", "0", "446", "100", "19", null, null, this.div_dtls);
            obj.set_taborder("202");
            obj.set_text("기타현황");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_align("left middle");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_empTitle09", "absolute", "219", "471", "93", "27", null, null, this.div_dtls);
            obj.set_taborder("203");
            obj.set_text("조퇴시간");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("sta_APYEXM_NO08", "absolute", "0", "471", "93", "27", null, null, this.div_dtls);
            obj.set_taborder("205");
            obj.set_text("외출시간");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("0 4 0 12");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Dotum");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "498", "300", "10", null, null, this.div_dtls);
            obj.set_taborder("206");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "171", "474", "24", "21", null, null, this.div_dtls);
            obj.set_taborder("208");
            obj.set_text("시간");
            obj.style.set_align("left");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "390", "474", "24", "21", null, null, this.div_dtls);
            obj.set_taborder("209");
            obj.set_text("시간");
            obj.style.set_align("left");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "0", "466", "300", "5", null, null, this.div_dtls);
            obj.set_taborder("210");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "235", "81", "10", "27", null, null, this.div_dtls);
            obj.set_taborder("214");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_dtls.addChild(obj.name, obj);
            obj = new CheckBox("chk_wkendYrycAt", "absolute", "340", "84", "90", "21", null, null, this.div_dtls);
            obj.set_taborder("215");
            obj.set_text("주말연차");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_visible("false");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Edit("edt_TIME00", "absolute", null, "474", "71", "21", "254", null, this.div_dtls);
            obj.set_taborder("216");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.div_dtls.addChild(obj.name, obj);
            obj = new Edit("edt_TIME01", "absolute", null, "474", "71", "21", "35", null, this.div_dtls);
            obj.set_taborder("217");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            this.div_dtls.addChild(obj.name, obj);
            obj = new CheckBox("chk_nghtWrkAt", "absolute", "245", "84", "84", "21", null, null, this.div_dtls);
            obj.set_taborder("218");
            obj.set_text("1.75일 연차");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_visible("false");
            this.div_dtls.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "601", "69", "10", "500", null, null, this);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("aqua");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_opacity("50");
            this.addChild(obj.name, obj);

            obj = new Button("btn_canclAp", "absolute", null, "39", "66", "21", "460", null, this);
            obj.set_taborder("23");
            obj.set_text("결재취소");
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
            obj = new Layout("default", "", 420, 0, this.div_dtls,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("21");
            		p.set_text("Div00");

            	}
            );
            this.div_dtls.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1059, 735, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HRM070102");
            		p.set_titletext("근무상황부 등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item22","div_dtls.chk_nghtWrkAt","value","DS_TBHRM_WRKCP","NGHT_WRK_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","div_dtls.cmb_ASORT_CODE","value","DS_TBHRM_WRKCP","ASORT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_search.cal_BGNDT1","value","ds_cond","BGNDT1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_search.cal_BGNDT2","value","ds_cond","BGNDT2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_search.cmb_DCLZ_SE","value","ds_cond","ASORT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","div_dtls.edt_PRVONSH","value","DS_TBHRM_WRKCP","PRVONSH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","div_dtls.edt_DAYCNT","value","DS_TBHRM_WRKCP","DAYCNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","div_dtls.cal_BGNDE","value","DS_TBHRM_WRKCP","BGNDE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_dtls.cal_ENDDE","value","DS_TBHRM_WRKCP","ENDDE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","div_dtls.msk_BEGIN_TM","value","DS_TBHRM_WRKCP","BEGIN_TM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_dtls.msk_END_TM","value","DS_TBHRM_WRKCP","END_TM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","div_dtls.msk_TIME","value","DS_TBHRM_WRKCP","TIME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","div_dtls.edt_YRYC_DAYCNT","value","DS_TBHRM_YRYC","YRYC_DAYCNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","div_dtls.edt_USE_101","value","DS_TBHRM_YRYC","USE_101");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","div_dtls.edt_USE_303","value","DS_TBHRM_YRYC","USE_303");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","div_dtls.edt_USE_202","value","DS_TBHRM_YRYC","USE_202");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","div_dtls.edt_TOT_USE","value","DS_TBHRM_YRYC","TOT_USE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div_dtls.edt_TOT_REMNDR","value","DS_TBHRM_YRYC","TOT_REMNDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","div_dtls.edt_CANCL_101","value","DS_TBHRM_YRYC","CANCL_101");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","div_dtls.edt_CANCL_303","value","DS_TBHRM_YRYC","CANCL_303");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","div_dtls.edt_CANCL_202","value","DS_TBHRM_YRYC","CANCL_202");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","div_dtls.edt_PRVONSH","tooltiptext","DS_TBHRM_WRKCP","PRVONSH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","div_dtls.cmb_FAMILY","value","DS_TBHRM_WRKCP","FAMILY_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","div_dtls.MaskEdit00","value","DS_TBHRM_WRKCP","BEGIN_TM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","div_dtls.cmb_ASORT_CODE","displaynulltext","DS_TBHRM_WRKCP","ASORT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","div_dtls.chk_wkendYrycAt","value","DS_TBHRM_WRKCP","WKEND_YRYC_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","div_dtls.edt_TIME00","value","DS_TBHRM_YRYC","S404");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","div_dtls.edt_TIME01","value","DS_TBHRM_YRYC","S402");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "com::deptCode.xfdl");
            this._addPreloadList("fdl", "com::empno.xfdl");
            this._addPreloadList("fdl", "com::empno.xfdl");
            this._addPreloadList("fdl", "com::deptCode.xfdl");
        };
        
        // User Script
        this.addIncludeScript("HRM070102.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("HRM070102.xfdl", "mis_lib::misUtil.xjs");
        this.addIncludeScript("HRM070102.xfdl", "lib::comUpDownUtils.xjs");
        this.registerScript("HRM070102.xfdl", function() {
        /***********************************************************************
         * 01. 업무구분 : 근무상황부
         * 02. 화면명   : HRM0701002.xfdl
         * 03. 화면설명 : 근무상황부를 관리한다.
         * 04. 작성일   : 2017.07.16
         * 05. 작성자   : 양성모
         * 06. 수정이력 : 2017.07.16 최초생성
         ***********************************************************************
         *     수정일     작성자   내용
         ***********************************************************************
         *    2017.07.16  양성모    최초
         ***********************************************************************
         */

        /***********************************************************************
         * Script Include 
         ************************************************************************/
        //include "lib::comInclude.xjs";
        //include "mis_lib::misUtil.xjs";
        //include "lib::comUpDownUtils.xjs";

        /***********************************************************************
         * 화면 변수 선언부
         ***********************************************************************/
        this.checkDs = [
          this.DS_TBHRM_WRKCP
        ];
        this.afCode = "";
        this.File_UpDownManager = null;
        this.isAuth = false;
        this.audAdmin = false;
        /***********************************************************************
         * onInit / onLoad 영역
         ***********************************************************************/
        this.HRM070102_oninit = function(obj,e)
        {
        	
        }
        this.HRM070102_onload = function(obj,e)
        {
        		
        	this.fn_init_form();	
        	this.fn_init_dataset();	
        		
        	this.fn_loadCombo();	
        	
        }

        /***********************************************************************
         * Form 오브젝트 초기화
         ***********************************************************************/ 
        this.fn_init_form = function()
        {
        	this.gfn_initForm(this);
        	this.fn_misFormInit(this);
        	
        	//결재취소 권한설정
        	if(this.gfn_authGrpId("DEV_GRP") != -1 || this.gfn_authGrpId("HRM_ADMIN") != -1) {  //개발자, 인사결재자
        		this.btn_canclAp.set_visible(true);
        	} else {
        		this.btn_canclAp.set_visible(false);
        	}
        		
        	/* 권한 해제 요청 */
        	// 인사결재자, 감사결재자, 노무담당자, 인사복무담당자
        	
        	if(this.gfn_authGrpId("HRM_ADMIN") != -1 || this.gfn_authGrpId("AUD_ADMIN") != -1 || this.gfn_authGrpId("HRM_NOMU") != -1 || this.gfn_authGrpId("HRM_SRVIC") != -1) {
        		this.isAuth = true;
        	}else {
        		this.isAuth = false;
        	}
        	
        	if(this.gfn_authGrpId("AUD_ADMIN") != -1 || this.gfn_authGrpId("HRM_NOMU") != -1 || this.gfn_authGrpId("HRM_SRVIC") != -1) {
        		this.audAdmin = true;
        	}
        	
        	// 검색조건 영역 바인딩
        	this.div_search.div_DeptComp.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");
        	this.div_search.div_DeptComp.fn_setReadonly(true);
        	this.div_search.div_DeptComp.div_Search.btn_dept.set_visible(false);
        	this.div_search.div_DeptComp.fn_setCssclass("edt_WF_Readonly");
        	
        	this.div_search.div_EMP.fn_setBind("ds_cond","EMPNO","EMPNM");
        	/*
        	this.div_search.div_EMP.div_sear.edt_emplnm.set_readonly(true);
        	this.div_search.div_EMP.div_sear.edt_empno.set_readonly(true);
        	this.div_search.div_EMP.div_sear.edt_emplnm.set_cssclass("edt_WF_Readonly");
        	this.div_search.div_EMP.div_sear.edt_empno.set_cssclass("edt_WF_Readonly");
        	this.div_search.div_EMP.div_sear.search.set_visible(false);
        	*/
        	this.div_search.div_EMP.fn_set_deptCode(this.gfn_getDeptId());
        		
        	if(this.isAuth) {
        		this.div_search.div_DeptComp.fn_setReadonly(false);
        		this.div_search.div_DeptComp.div_Search.btn_dept.set_visible(true);
        		this.div_search.div_DeptComp.fn_setCssclass("edt_WF_Essential");
        		/*
        		this.div_search.div_EMP.div_sear.edt_emplnm.set_readonly(false);
        		this.div_search.div_EMP.div_sear.edt_empno.set_readonly(false);
        		this.div_search.div_EMP.div_sear.search.set_visible(true);
        		this.div_search.div_EMP.div_sear.edt_emplnm.set_cssclass("edt_WF_Essential");
        		this.div_search.div_EMP.div_sear.edt_empno.set_cssclass("edt_WF_Essential");
        		*/
        	}
        	
        	this.div_search.div_EMP.div_sear.edt_emplnm.set_readonly(false);
        	this.div_search.div_EMP.div_sear.edt_empno.set_readonly(false);
        	this.div_search.div_EMP.div_sear.search.set_visible(true);
        	this.div_search.div_EMP.div_sear.edt_emplnm.set_cssclass("edt_WF_Essential");
        	this.div_search.div_EMP.div_sear.edt_empno.set_cssclass("edt_WF_Essential");
        	
        	// 상세정보 영역 바인딩
        	this.div_dtls.div_EMP.fn_setBind("DS_TBHRM_WRKCP","EMPNO","EMPNM");
        	/*
        	this.div_dtls.div_EMP.div_sear.edt_emplnm.set_cssclass("edt_WF_Readonly");
        	this.div_dtls.div_EMP.div_sear.edt_empno.set_cssclass("edt_WF_Readonly");
        	this.div_dtls.div_EMP.div_sear.edt_emplnm.set_readonly(true);
        	this.div_dtls.div_EMP.div_sear.edt_empno.set_readonly(true);
        	this.div_dtls.div_EMP.div_sear.search.set_visible(false);
        	*/
        	this.div_dtls.div_EMP.fn_set_deptCode(this.gfn_getDeptId());
        	
        	this.div_dtls.div_DeptComp.fn_setBind("DS_TBHRM_WRKCP","DEPT_CODE","DEPT_NM");
        	this.div_dtls.div_DeptComp.fn_setReadonly(true);
        	this.div_dtls.div_DeptComp.div_Search.btn_dept.set_visible(false);
        	
        	if(this.audAdmin) {
        		this.div_search.div_DeptComp.fn_setCssclass("");
        		this.div_search.div_EMP.div_sear.edt_emplnm.set_cssclass("");
        		this.div_search.div_EMP.div_sear.edt_empno.set_cssclass("");
        	}
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

        
         /*
         * 함수명  	: fn_loadCombo
         * 설명 		: 화면의 Combo 에 데이터를 불러온다.
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_loadCombo();
         */
        this.fn_loadCombo = function ()
        {	
        	/*******************************************************************************
        	 * params  		: 1. param_1    : 반환받을 DATASET 명 			(예: DS_AREA_NO_CODE)
        					  2. param_2	: 그룹코드						(예 : COM007)
        					  3. param_3	: 사용여부		    			(예 : A(전체), Y(사용), N(사용안함))
        					  4. param_4	: 콤보박스INDEX(0) 표시		(예 : A(전체), S(선택), E(공백), D(첫번째데이터부터시작) )
        					  5. param_5	: 코드+코드명					(예 : G(코드명), B(코드-코드명) )
        	 ******************************************************************************/
        	var comboParams = [
        		["ds_asort_code", "HRM028", "Y", "D", "B"]	// 근무상황구분
        		,["ds_asort_code_s", "HRM028", "Y", "A", "B"]	// 근무상황구분_검색
        		,["ds_hrm097", "HRM097", "Y", "D", "B"]			// 야간근무연차시간조정
        	];
        	this.gfn_comboLoad(comboParams, this.fn_callbackAfter());
        }

        /*
         * 함수명  	: fn_callbackAfter
         * 설명 		: 공통 callback
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_callbackAfter();
         */
        this.fn_callbackAfter = function ()
        {
        	this.ds_cond.clearData();
        	this.ds_cond.addRow();
        	this.ds_cond.setColumn(0, "BGNDT1", this.dateUtils.today());
        	this.ds_cond.setColumn(0, "BGNDT2", this.dateUtils.getLastDay(this.dateUtils.addMonth(this.dateUtils.today(),  1, 's'), 's'));
        	this.ds_cond.setColumn(0, "DEPT_CODE", this.gfn_getDeptId());
        	this.ds_cond.setColumn(0, "DEPT_NM", this.gfn_getDeptName());
        	this.ds_cond.setColumn(0, "EMPNO", this.gfn_getEmpNo());
        	this.ds_cond.setColumn(0, "EMPNM", this.gfn_getUserName());
        	this.ds_cond.setColumn(0, "YEAR", this.gfn_today().substr(0, 4));
        	
        	this.ds_cond.set_enableevent(true);
        	
        	this.ds_asort_code.filter("CODE > 100 || CODE == '003'");
        	
        	this.fn_search();
        }

        /***********************************************************************
         * 설명: 조회 처리
         ************************************************************************/
        this.fn_search= function()
        {
        	if(this.audAdmin) {
        		// validation 체크
        		if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond, this.ds_validation2)) {
        			return;
        		}
        	}
        	else {
        		// validation 체크
        		if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond, this.ds_validation)) {
        			return;
        		}
        	}
        	this.fn_transaction("tbhrmWrkcpList");
        }

        /***********************************************************************
         * 설명: 삭제 처리
         ************************************************************************/
        this.fn_delete= function()
        {
        	var rowposition = this.DS_TBHRM_WRKCP.rowposition;
        	var sanctnSts = this.DS_TBHRM_WRKCP.getColumn(rowposition, "SANCTN_STS");
        	var dcsnAt = this.DS_TBHRM_WRKCP.getColumn(rowposition, "CNFIRM_AT");
        	
        	if(rowposition > -1){
        		if(dcsnAt != "1")
        		{
        			// 결재상태 COM022 (0: 기안전 1:기안 2:반송 3:취소 4:중간결재 5:결재완료)
        			// 결재상태가 기안전 외는 신규로 다시 진행.
        			
        			if(['1','4','5'].indexOf(sanctnSts) > -1) {
        				this.gfn_message("fail.삭제.불가","결재가 진행된 건은");
        			}
        			else {
        				if(this.gfn_message("confirm.삭제여부")){
        					
        					
        					// 데이터셋의 rowposition 설정(onrowposchanged 이벤트를 위하여)
        					this.DS_TBHRM_WRKCP.deleteRow(rowposition);
        					this.DS_TBHRM_WRKCP.set_rowposition(-1);
        					this.DS_TBHRM_WRKCP.set_rowposition(rowposition);
        				}
        			}
        			
        		}else {
        			this.gfn_message("fail.삭제.불가","확정이 완료된 건은");
        		}
        	}
        }
         	
        /***********************************************************************
         * 설명: 신규버튼 클릭시 
         ************************************************************************/
        this.fn_insert= function()
        {
        	var nRow = this.DS_TBHRM_WRKCP.addRow();
        	this.DS_TBHRM_WRKCP.setColumn(nRow, "DEPT_CODE", this.ds_cond.getColumn(0, "DEPT_CODE"));
        	this.DS_TBHRM_WRKCP.setColumn(nRow, "DEPT_NM", this.ds_cond.getColumn(0, "DEPT_NM"));
        	this.DS_TBHRM_WRKCP.setColumn(nRow, "EMPNO", this.ds_cond.getColumn(0, "EMPNO"));
        	this.DS_TBHRM_WRKCP.setColumn(nRow, "EMPNM", this.ds_cond.getColumn(0, "EMPNM"));
        	this.DS_TBHRM_WRKCP.setColumn(nRow, "ASORT_CODE", "101");
        	this.DS_TBHRM_WRKCP.setColumn(nRow, "SANCTN_STS", "0");
        }

        /***********************************************************************
         * 설명: 저장버튼 클릭시
         ************************************************************************/
        this.fn_save= function()
        {	
        	if (!this.comUtils.isDatasetUpdated(this.DS_TBHRM_WRKCP)) {
        		this.gfn_message("comm.데이터.변경.없음");
        		return false;
        	}
        	
        	// validation 체크
        	if(!this.gfn_checkValidation_NoUpdChk(this.DS_TBHRM_WRKCP, this.ds_validation)) {
        		return;
        	}
        	
        	// 수동 validation 체크
        	var rowCnt = this.DS_TBHRM_WRKCP.rowcount;
        	var i = 0;
        	for(i; i<rowCnt; i++){
        		var rowType = this.DS_TBHRM_WRKCP.getRowType(i);
        		
        		if(rowType == Dataset.ROWTYPE_INSERT || rowType == Dataset.ROWTYPE_UPDATE){
        			if(!this.fn_selfValidation(i)){
        				this.gfn_message("comm.항목.입력.을", "["+(i+1)+"]행 자녀");
        				return false;
        			}
        		}
        	}
        	
        	if(this.gfn_message("confirm.저장.여부"))	{
        		this.fn_transaction("tbhrmWrkcpCUD");
        	}
        }

        /***********************************************************************
         * 설명: 저장버튼 클릭시
         ************************************************************************/
        this.fn_cancel = function(obj,e)
        {
        	if ( this.gfn_message("confirm.취소여부") ) {
        		this.DS_TBHRM_WRKCP.reset();		                                 //DATASET ROLLBACK
        		this.DS_TBHRM_WRKCP.applyChange();
        		
        		// 초기화된 데이터셋의 갯수를 판단하여 rowposition 설정(onrowposchanged 이벤트를 위하여)
        		if(this.DS_TBHRM_WRKCP.rowcount > 0){
        			this.DS_TBHRM_WRKCP.set_rowposition(-1);
        			this.DS_TBHRM_WRKCP.set_rowposition(0);
        		}
        		return;
        	}	
        }

        /***********************************************************************************
        * 설명	: 결재
        ***********************************************************************************/
        this.fn_sanction = function()
        {
           var rPos = this.DS_TBHRM_WRKCP.rowposition;
           
           // 결재 전 유효성 체크
           if(this.comUtils.isDatasetUpdated(this.DS_TBHRM_WRKCP)) {
              this.gfn_message("comm.정보.저장.요청", "근무상황부");
              return;
           }
           if(rPos < 0) {
              this.gfn_message("info.선택데이터.없음.선택.요청");
              return;
           }

           if(['1','4','5'].indexOf(this.DS_TBHRM_WRKCP.getColumn(rPos, "SANCTN_STS")) > -1) {
              this.gfn_message("info.처리불가","결재가 진행중이거나 완료된 데이터는 결재할 수 없습니다.");
              return;
           }
           
           var asortCode = this.DS_TBHRM_WRKCP.getColumn(rPos, "ASORT_CODE");
           var asortCodeNm = this.ds_asort_code_s.getColumn(this.ds_asort_code_s.findRow("CODE", asortCode), "CODE_NM");
           
        	if(asortCode == '316') {		// 자녀돌봄휴가
        		this.ds_condAsort316.clearData();
        		this.ds_chldrnNrtrVcatn.clearData();
        		
        		this.ds_condAsort316.addRow();
        		this.ds_condAsort316.copyRow(0, this.DS_TBHRM_WRKCP, rPos);
        		
        		this.fn_transaction("selectChldrnNrtrVcatn");
        	} else {
        	   // 일자
        	   var dayCnt = this.DS_TBHRM_WRKCP.getColumn(rPos, "DAYCNT");
        	   dayCnt = this.comUtils.isNull(dayCnt) ? '' : (dayCnt +"일\\r\\n");
        	   
        	   //[외출현황 : 05:00시간, 조퇴시간 : 01:00시간] 
        		var yrycRow = this.DS_TBHRM_YRYC.rowposition;
        		var S404 = !this.comUtils.isNull(this.DS_TBHRM_YRYC.getColumn(yrycRow, "S404")) ? this.DS_TBHRM_YRYC.getColumn(yrycRow, "S404") : "00:00";	// 외출현황 
        		var S402 = !this.comUtils.isNull(this.DS_TBHRM_YRYC.getColumn(yrycRow, "S402")) ? this.DS_TBHRM_YRYC.getColumn(yrycRow, "S402") : "00:00";	// 조퇴시간
        		var tm_sttus = "[외출현황 : "+S404+"시간, 조퇴시간 : "+S402+"시간]";
        		
        	   // 결재상신
        	   var arrSancData = new Array();
        	   arrSancData[ 0]  = "근무상황부" + "(" + asortCodeNm + ")";       // 제목
        	   arrSancData[ 1]  = this.DS_TBHRM_WRKCP.getColumn(rPos, "DEPT_NM");       // 부서명
        	   arrSancData[ 2]  = this.DS_TBHRM_WRKCP.getColumn(rPos, "HR_CLSF_NM");           // 직급
        	   arrSancData[ 3]  = this.DS_TBHRM_WRKCP.getColumn(rPos, "EMPNM");        // 성명
        	   arrSancData[ 4]  = this.DS_TBHRM_WRKCP.getColumn(rPos, "ASORT_NM");   // 종별
        	   arrSancData[ 5]  = this.dateUtils.format(this.DS_TBHRM_WRKCP.getColumn(rPos, "BGNDE"), "yyyy년 mm월 dd일") +"\n"+ this.DS_TBHRM_WRKCP.getColumn(rPos, "BEGIN_TM").substr(0,2) + ":"+this.DS_TBHRM_WRKCP.getColumn(rPos, "BEGIN_TM").substr(2,4);       // 시작일
        	   arrSancData[ 6]  = this.dateUtils.format(this.DS_TBHRM_WRKCP.getColumn(rPos, "ENDDE"), "yyyy년 mm월 dd일") +"\n"+ this.DS_TBHRM_WRKCP.getColumn(rPos, "END_TM").substr(0,2) + ":"+this.DS_TBHRM_WRKCP.getColumn(rPos, "END_TM").substr(2,4);       // 종료일
        	   arrSancData[ 7]  = dayCnt + this.DS_TBHRM_WRKCP.getColumn(rPos, "TIME").substr(0,2) + "시간\n" + this.DS_TBHRM_WRKCP.getColumn(rPos, "TIME").substr(2,4) + "분"; // 일수시간
        	   arrSancData[ 8]  = this.DS_TBHRM_WRKCP.getColumn(rPos, "PRVONSH");      // 사유
        	   arrSancData[ 9]  = this.DS_TBHRM_YRYC.getColumn(yrycRow, "YRYC_DAYCNT");   // 연차총일수
        	   arrSancData[10]  = this.DS_TBHRM_YRYC.getColumn(yrycRow, "TOT_USE");      // 기사용일수
        	   arrSancData[11]  = this.DS_TBHRM_YRYC.getColumn(yrycRow, "TOT_REMNDR");   // 잔여일수
        	   arrSancData[12]  = this.DS_TBHRM_WRKCP.getColumn(rPos, "TELNO_2"); // 연락처
        	   arrSancData[13]  = tm_sttus; 									  // 외출현황 및 조퇴시간

        	   this.fn_callHandySanc2(
        		   this                  // context
        		  ,'0000000047'            // formId
        		  ,this.DS_TBHRM_WRKCP      // misDataset
        		  ,"TBHRM_WRKCP"            // tableName
        		  ,["EMPNO","SEQ"]         // tableKey
        		  ,arrSancData            // arrSancData
        		  ,null						// subData
        		  ,null						// multiCheck(0 or 1)
        		  ,null						// otherColumn
        		  ,this.ds_fileList			// file Dataset
        	   );
        	}
        }

        /**********************************************************************
         * CALL TRANSACTION 영역
         **********************************************************************/ 
        this.fn_transaction = function(strSvcId)
        {
        	switch (strSvcId) {
        		//상단 조회
        		case "tbhrmWrkcpList":                
        			var sController   	= "hsco/mis/hrm/HRM070102/tbhrmWrkcpList.do";
        			var sInDatasets   	= "input1=ds_cond";
        			var sOutDatasets  	= "DS_TBHRM_WRKCP=output1 ds_hr_family=output2";
        			break;
        			
        		//상단 저장
        		case "tbhrmWrkcpCUD":                 
        			var sController   	= "hsco/mis/hrm/HRM070102/tbhrmWrkcpCUD.do";	
        			var sInDatasets   	= "input3=DS_TBHRM_WRKCP:U";
        			var sOutDatasets  	= "";
        			break;
        			
        		//상단 결재
        		case "approve":                 
        			var sController   	= "hsco/mis/hrm/HRM070102/approve.do";	
        			var sInDatasets   	= "input1=ds_approve";
        			var sOutDatasets  	= "ds_approve=output1";
        			break;
        			
        		case "selectFileList":      // 첨부파일 조회
        			var sController   	= "hsco/mis/hrm/HRM070102/selectFileList.do";
        			var sInDatasets   	= "input1=ds_cond";
        			var sOutDatasets  	= "ds_fileList=output1";
        			break;
        			
        		case "chkHolyDe":      // 휴무일수 확인
        			var sController   	= "hsco/mis/hrm/HRM070102/chkHolyDe.do";
        			var sInDatasets   	= "input1=ds_condHoly";
        			var sOutDatasets  	= "ds_holyCnt=output1";
        			break;
        		
        		case "tbhrmYryc":      // 연차조회
        			var sController   	= "hsco/mis/hrm/HRM070102/tbhrmYryc.do";
        			var sInDatasets   	= "input1=ds_cond_yryc";
        			var sOutDatasets  	= "DS_TBHRM_YRYC=output1";
        			break;
        		
        		case "canclAp":     // 결재취소	
        			var sController   	= "hsco/mis/hrm/HRM070102/cancelAppr.do";
        			var sInDatasets   	= "input1=ds_canclap";
        			var sOutDatasets  	= "";
        			break;	
        		
        		case "selectChldrnNrtrVcatn":	// 자녀돌봄휴가 조회
        			var sController   	= "hsco/mis/hrm/HRM070102/selectChldrnNrtrVcatn.do";
        			var sInDatasets   	= "input1=ds_condAsort316";
        			var sOutDatasets  	= "ds_chldrnNrtrVcatn=output1";
        			break;		
        			
        	}
        	var sArgs = "";	
        	Ex.core.tran(this, strSvcId, sController, sInDatasets, sOutDatasets, sArgs); 
        }

         /**********************************************************************
         * Transaction Callback 영역
         ***********************************************************************/ 
        this.fn_callBack = function (strSvcId,nErrorCode,strErrorMsg)
        {
        	if (nErrorCode != 0){
        		this.gfn_callback_message(strSvcId, nErrorCode, strErrorMsg);	
        	} else {		
        		switch (strSvcId) {
        			case "tbhrmWrkcpList":
        				break;
        			case "tbhrmWrkcpCUD":
        				this.gfn_message("success.처리.성공");
        			this.fn_search();
        				break;
        			case "approve":
        				var brow = this.ds_approve.getColumn(0,"O_URL");
        				system.execBrowser(brow); 
        				break;
        			case "selectFileList":      // 첨부파일 조회
        				this.ds_fileList.filter("USE_AT == '1'");
        				break;
        			case "chkHolyDe":
        				var holyCnt = this.ds_holyCnt.rowcount;
        				var nRow = this.DS_TBHRM_WRKCP.rowposition;
        				var daycnt      = this.DS_TBHRM_WRKCP.getColumn(nRow, "DAYCNT");
        				var asortCode   = this.DS_TBHRM_WRKCP.getColumn(nRow, "ASORT_CODE");
        				var bgnde       = this.DS_TBHRM_WRKCP.getColumn(nRow, "BGNDE");
        				var endde       = this.DS_TBHRM_WRKCP.getColumn(nRow, "ENDDE");
        				var bgnTm       = this.DS_TBHRM_WRKCP.getColumn(nRow, "BEGIN_TM");
        				var endTm       = this.DS_TBHRM_WRKCP.getColumn(nRow, "END_TM");
        				var nghtWrkAt   = this.DS_TBHRM_WRKCP.getColumn(nRow, "NGHT_WRK_AT");
        				var wkendYrycAt = this.DS_TBHRM_WRKCP.getColumn(nRow, "WKEND_YRYC_AT");
        				if(wkendYrycAt == '1') {
        					holyCnt = 0;	// 주말연차에 체크된 경우, 휴일 일수를 0으로 고정(모든 일자가 계산되도록)
        				}
        				
        				var fCnt = this.ds_hrm097.rowcount;
        				var rate = this.ds_hrm097.getColumn(0, "CODE_NM");
        				var nRate = nexacro.toNumber(rate, 1.75);	// 야간근무연차시간조정 값이 없을 경우 비율을 1.75 고정
        				
        				if(asortCode == "311" || asortCode == "312") {
        					if(holyCnt > 0) {
        						var fRow1 = this.ds_holyCnt.findRow("HOLY_DE", bgnde);
        						var fRow2 = this.ds_holyCnt.findRow("HOLY_DE", endde);
        						
        						if(fRow1 > -1) {
        							var nBgnde = this.gfn_addDate(bgnde, 1, "D");
        							this.DS_TBHRM_WRKCP.set_enableevent(false);
        							this.DS_TBHRM_WRKCP.setColumn(nRow, "BGNDE", nBgnde);
        							this.DS_TBHRM_WRKCP.set_enableevent(true);
        							this.fn_chkHolyDe(nBgnde, endde);
        						}
        						if(fRow2 > -1) {
        							var nEndde = this.gfn_addDate(endde, 1, "D");
        							this.DS_TBHRM_WRKCP.set_enableevent(false);
        							this.DS_TBHRM_WRKCP.setColumn(nRow, "ENDDE", nEndde);
        							this.DS_TBHRM_WRKCP.set_enableevent(true);
        							this.fn_chkHolyDe(bgnde, nEndde);
        						}
        					}
        					if(bgnde == endde) {
        						var nEndde = this.gfn_addDate(endde, 1, "D");
        						this.DS_TBHRM_WRKCP.set_enableevent(false);
        						this.DS_TBHRM_WRKCP.setColumn(nRow, "ENDDE", nEndde);
        						this.DS_TBHRM_WRKCP.set_enableevent(true);
        					}
        				}
        				else if(asortCode == "101") {
        					this.DS_TBHRM_WRKCP.set_enableevent(false);
        					if(nghtWrkAt == "1") {
        						this.DS_TBHRM_WRKCP.setColumn(nRow, "DAYCNT", (daycnt - holyCnt) * nRate);
        					} else {
        						this.DS_TBHRM_WRKCP.setColumn(nRow, "DAYCNT", (daycnt - holyCnt));
        					}
        					this.DS_TBHRM_WRKCP.set_enableevent(true);
        				}
        				else {
        					if(asortCode == "102" || asortCode == "103" || asortCode == "304" || asortCode == "305" || asortCode == "313" || asortCode == "314"){	// 오전오후연차 / 오전오후하계휴가 / 보상휴가(연차[전후]) / 보상휴가(오전오후반차)
        						daycnt = 0.5;
        					}
        					
        					//if(holyCnt > 0) {
        						this.DS_TBHRM_WRKCP.setColumn(nRow, "DAYCNT", (daycnt - holyCnt));
        					//}
        				}
        				
        				var rBeginTm = this.div_dtls.msk_BEGIN_TM.readonly;
        				var rEndTm   = this.div_dtls.msk_END_TM.readonly;
        				
        				if((!rBeginTm && !rEndTm) && (bgnTm == endTm)) {
        					var bDayCnt = this.DS_TBHRM_WRKCP.getColumn(nRow, "DAYCNT");
        					var nDayCnt  = nexacro.toNumber(bDayCnt);
        					this.DS_TBHRM_WRKCP.set_enableevent(false);
        					this.DS_TBHRM_WRKCP.setColumn(nRow, "DAYCNT", (nDayCnt + 1));
        					this.DS_TBHRM_WRKCP.set_enableevent(true);
        				}
        				
        				break;
        			case "tbhrmYryc":			//연차조회
        				var nRow = this.DS_TBHRM_WRKCP.rowposition;
        				this.div_dtls.grd_cmmnAtchmnfl.setCellProperty("Head", 0, "text", "0");
        				this.ds_cond.setColumn(0, "FILE_SN", this.DS_TBHRM_WRKCP.getColumn(nRow, "FILE_SN"));
        				this.fn_transaction("selectFileList");
        				break;
        			case "canclAp":
        				this.fn_search();
        				break;
        			case "selectChldrnNrtrVcatn":	// 자녀돌봄휴가 조회
        				var childCnt      = this.ds_chldrnNrtrVcatn.getColumn(0, "CHILD_CNT");
        				var usePosbltyCnt = this.ds_chldrnNrtrVcatn.getColumn(0, "USE_POSBLTY_CNT");
        				var sanctnCnt     = this.ds_chldrnNrtrVcatn.getColumn(0, "SANCTN_CNT");
        				var sanctnCnt1    = this.ds_chldrnNrtrVcatn.getColumn(0, "SANCTN_CNT1");
        				var sanctnCnt4    = this.ds_chldrnNrtrVcatn.getColumn(0, "SANCTN_CNT4");
        				var sanctnCnt5    = this.ds_chldrnNrtrVcatn.getColumn(0, "SANCTN_CNT5");
        				var enableAt      = this.ds_chldrnNrtrVcatn.getColumn(0, "ENABLE_AT");
        				
        				if(enableAt == "Y") {
        					var rPos        = this.DS_TBHRM_WRKCP.rowposition;
        					var asortCode   = this.DS_TBHRM_WRKCP.getColumn(rPos, "ASORT_CODE");
        					var asortCodeNm = this.ds_asort_code_s.getColumn(this.ds_asort_code_s.findRow("CODE", asortCode), "CODE_NM");
        					
        					// 일자
        					var dayCnt = this.DS_TBHRM_WRKCP.getColumn(rPos, "DAYCNT");
        					dayCnt = this.comUtils.isNull(dayCnt) ? '' : (dayCnt +"일\n");
        					
        					//[외출현황 : 05:00시간, 조퇴시간 : 01:00시간] 
        					var yrycRow = this.DS_TBHRM_YRYC.rowposition;
        					var S404 = !this.comUtils.isNull(this.DS_TBHRM_YRYC.getColumn(yrycRow, "S404")) ? this.DS_TBHRM_YRYC.getColumn(yrycRow, "S404") : "00:00";	// 외출현황 
        					var S402 = !this.comUtils.isNull(this.DS_TBHRM_YRYC.getColumn(yrycRow, "S402")) ? this.DS_TBHRM_YRYC.getColumn(yrycRow, "S402") : "00:00";	// 조퇴시간
        					var tm_sttus = "[외출현황 : "+S404+"시간, 조퇴시간 : "+S402+"시간]";
        					
        					// 결재상신
        					var arrSancData = new Array();
        					arrSancData[ 0]  = "근무상황부" + "(" + asortCodeNm + ")";       // 제목
        					arrSancData[ 1]  = this.DS_TBHRM_WRKCP.getColumn(rPos, "DEPT_NM");       // 부서명
        					arrSancData[ 2]  = this.DS_TBHRM_WRKCP.getColumn(rPos, "HR_CLSF_NM");           // 직급
        					arrSancData[ 3]  = this.DS_TBHRM_WRKCP.getColumn(rPos, "EMPNM");        // 성명
        					arrSancData[ 4]  = this.DS_TBHRM_WRKCP.getColumn(rPos, "ASORT_NM");   // 종별
        					arrSancData[ 5]  = this.dateUtils.format(this.DS_TBHRM_WRKCP.getColumn(rPos, "BGNDE"), "yyyy년 mm월 dd일") +"\n"+ this.DS_TBHRM_WRKCP.getColumn(rPos, "BEGIN_TM").substr(0,2) + ":"+this.DS_TBHRM_WRKCP.getColumn(rPos, "BEGIN_TM").substr(2,4);       // 시작일
        					arrSancData[ 6]  = this.dateUtils.format(this.DS_TBHRM_WRKCP.getColumn(rPos, "ENDDE"), "yyyy년 mm월 dd일") +"\n"+ this.DS_TBHRM_WRKCP.getColumn(rPos, "END_TM").substr(0,2) + ":"+this.DS_TBHRM_WRKCP.getColumn(rPos, "END_TM").substr(2,4);       // 종료일
        					arrSancData[ 7]  = dayCnt + this.DS_TBHRM_WRKCP.getColumn(rPos, "TIME").substr(0,2) + "시간\n" + this.DS_TBHRM_WRKCP.getColumn(rPos, "TIME").substr(2,4) + "분"; // 일수시간
        					arrSancData[ 8]  = this.DS_TBHRM_WRKCP.getColumn(rPos, "PRVONSH");      // 사유
        					arrSancData[ 9]  = this.DS_TBHRM_YRYC.getColumn(yrycRow, "YRYC_DAYCNT");   // 연차총일수
        					arrSancData[10]  = this.DS_TBHRM_YRYC.getColumn(yrycRow, "TOT_USE");      // 기사용일수
        					arrSancData[11]  = this.DS_TBHRM_YRYC.getColumn(yrycRow, "TOT_REMNDR");   // 잔여일수
        					arrSancData[12]  = this.DS_TBHRM_WRKCP.getColumn(rPos, "TELNO_2"); // 연락처
        					arrSancData[13]  = tm_sttus; 									  // 외출현황 및 조퇴시간

        					this.fn_callHandySanc2(
        						 this					// context
        						,'0000000047'			// formId
        						,this.DS_TBHRM_WRKCP	// misDataset
        						,"TBHRM_WRKCP"			// tableName
        						,["EMPNO","SEQ"]		// tableKey
        						,arrSancData			// arrSancData
        						,null					// subData
        						,null					// multiCheck(0 or 1)
        						,null					// otherColumn
        						,this.ds_fileList		// file Dataset
        					);
        				} else {
        					var msg = "자녀돌봄휴가를 더이상 신청할 수 없습니다.";
        					msg += "\n사용가능시간 : " + usePosbltyCnt;
        					msg += "(자녀수 : " + childCnt;
        					msg += ")\n결  재  시  간 : " + sanctnCnt;
        					msg += "\n(상신 : " + sanctnCnt1;
        					msg += ", 중간결재 : " + sanctnCnt4;
        					msg += ", 결재완료 : " + sanctnCnt5 + ")";
        					
        					this.gfn_message("info.처리불가", msg);
        				}
        				break;
        			
        		}
        	}
        }

        /***********************************************************************
        * 사용자 정의 함수
        ************************************************************************/
         /*
         * 함수명  	: StartDate
         * 설명 		: 한달 전 날짜 구하는 함수
         *                
         * params  		: None
         * return Type 	: None
         * 사용법		: this.StartDate();
         */
        this.StartDate = function ()
        {
        	var sToday = "";
            var objDate = new Date();
            var sToday  = objDate.getFullYear() + "";
            var sMonth = objDate.getMonth();
            var sDate = objDate.getDate();
            
            if(sMonth.toString().length == 1){
        		sMonth = "0" + sMonth;
            }
        	if(sDate.toString().length == 1){
        		sDate = "0" + sDate;
            }
            sToday = sToday+sMonth+sDate;
            
            return sToday;
        }

        /*
         * 함수명  	: div_work_grd_TBHRM_WRKCP_oncellclick
         * 설명 		: 그리드 셀 클릭 이벤트 함수
         * params  		: none
         * return Type 	: none
         * 사용법		: this.div_work_grd_TBHRM_WRKCP_oncellclick()
         */
        this.div_work_grd_TBHRM_WRKCP_oncellclick = function(obj,e)
        {
        	//전자결재 진행 현황 조회(POPUP)
        // 	if(e.col==1){
        // 		var SANCTN_NO = this.DS_TBHRM_WRKCP.getColumn(this.DS_TBHRM_WRKCP.rowposition, "SANCTN_NO");
        // 		var SANCTN_STS = this.DS_TBHRM_WRKCP.getColumn(this.DS_TBHRM_WRKCP.rowposition, "SANCTN_STS");
        // 		var REGIST_DT = this.DS_TBHRM_WRKCP.getColumn(this.DS_TBHRM_WRKCP.rowposition, "REGIST_DT");
        // 		
        // 		if( SANCTN_STS < 1 || SANCTN_STS == 'NUL'){
        // 			return;
        // 		}
        // 		
        // 		var parm = {
        // 			arg_0 : this,  
        // 			arg_1 : SANCTN_NO,
        // 			arg_2 : REGIST_DT
        // 		};		
        // 		
        // 		this.gfn_popup("SANCTN_P", 710, 518, "전자결재진행 현황", parm, "com::COM010400_P01.xfdl", "fn_popupCallBack");
        // 
        // 	}
        }

        
        /*
         * 함수명  	: grd_TBHRM_WRKCP_oncelldblclick
         * 설명 		: 그리드 셀 더블클릭 이벤트 함수
         * params  		: none
         * return Type 	: none
         * 사용법		: this.grd_TBHRM_WRKCP_oncelldblclick()f
        this.grd_TBHRM_WRKCP_oncelldblclick = function(obj:Grid, e:nexacro.GridClickEventInfo)
        {
        	if(e.col == 1) {
        		var nRow = this.DS_TBHRM_WRKCP.rowposition;
        		if(['1','2','3','4','5'].indexOf(this.DS_TBHRM_WRKCP.getColumn(nRow, "SANCTN_KND")) > -1) {
        			this.fn_openSanc(this.DS_TBHRM_WRKCP.getColumn(nRow, "SANCTN_NO"));
        		}
        	}
        }

        
        /*
         * 함수명  	: div_work_grd_TBHRM_WRKCP_onheadclick
         * 설명 		: 헤드클릭 정렬, 체크박스 전체전택
         * params  		: None
         * return Type 	: None
         * 사용법		: this.div_work_grd_TBHRM_WRKCP_onheadclick();
         */
        this.div_work_grd_TBHRM_WRKCP_onheadclick = function(obj,e)
        {
        	this.gfn_gridSort(obj, e);
        }

         /*
         * 함수명  	: DS_TBHRM_WRKCP_onrowposchanged
         * 설명 		: 그리드 행 변경에 따른 상세 컴포넌트 제어 이벤트
         *                
         * params  		: None
         * return Type 	: None
         * 사용법		: this.DS_TBHRM_WRKCP_onrowposchanged();
         */
        this.DS_TBHRM_WRKCP_onrowposchanged = function(obj,e)
        {
        	var sanctnSts = this.DS_TBHRM_WRKCP.getColumn(e.newrow, "SANCTN_STS");
        	var dcsnAt = this.DS_TBHRM_WRKCP.getColumn(e.newrow, "CNFIRM_AT");
        	var acode = this.DS_TBHRM_WRKCP.getColumn(e.newrow, "ASORT_CODE");
        	
        	if(e.newrow > -1 && acode == "101") {							// 연차
        		this.div_dtls.chk_wkendYrycAt.set_left(340);
        		this.div_dtls.chk_wkendYrycAt.set_text("주말연차");
        		this.div_dtls.chk_nghtWrkAt.set_visible(true);
        		this.div_dtls.chk_wkendYrycAt.set_visible(true);
        	
        		this.div_dtls.chk_nghtWrkAt.set_readonly(false);
        		this.div_dtls.chk_wkendYrycAt.set_readonly(false);
        	}else if(e.newrow > -1 && acode == "102") {						// 오전연차
        		var left = this.div_dtls.chk_nghtWrkAt.left;
        		this.div_dtls.chk_wkendYrycAt.set_left(left);
        		this.div_dtls.chk_wkendYrycAt.set_text("주말오전연차");
        		this.div_dtls.chk_nghtWrkAt.set_visible(false);
        		this.div_dtls.chk_wkendYrycAt.set_visible(true);
        		
         		this.div_dtls.chk_nghtWrkAt.set_readonly(true);
         		this.div_dtls.chk_wkendYrycAt.set_readonly(false);
         	}else if(e.newrow > -1 && acode == "103") {						// 오후연차
        		var left = this.div_dtls.chk_nghtWrkAt.left;
        		this.div_dtls.chk_wkendYrycAt.set_left(left);
        		this.div_dtls.chk_wkendYrycAt.set_text("주말오후연차");
        		this.div_dtls.chk_nghtWrkAt.set_visible(false);
        		this.div_dtls.chk_wkendYrycAt.set_visible(true);
        		
         		this.div_dtls.chk_nghtWrkAt.set_readonly(true);
         		this.div_dtls.chk_wkendYrycAt.set_readonly(false);
        	}else if(e.newrow > -1 && acode == "402") {						// 조퇴
        		var left = this.div_dtls.chk_nghtWrkAt.left;
        		this.div_dtls.chk_wkendYrycAt.set_left(left);
        		this.div_dtls.chk_wkendYrycAt.set_text("주말조퇴");
        		this.div_dtls.chk_nghtWrkAt.set_visible(false);
        		this.div_dtls.chk_wkendYrycAt.set_visible(true);
        		
         		this.div_dtls.chk_nghtWrkAt.set_readonly(true);
         		this.div_dtls.chk_wkendYrycAt.set_readonly(false);
        	}else if(e.newrow > -1 && acode == "404") {						// 외출
        		var left = this.div_dtls.chk_nghtWrkAt.left;
        		this.div_dtls.chk_wkendYrycAt.set_left(left);
        		this.div_dtls.chk_wkendYrycAt.set_text("주말외출");
        		this.div_dtls.chk_nghtWrkAt.set_visible(false);
        		this.div_dtls.chk_wkendYrycAt.set_visible(true);
        	
        		this.div_dtls.chk_nghtWrkAt.set_readonly(true);
        		this.div_dtls.chk_wkendYrycAt.set_readonly(false);
        	} else {														// 연차 외
        		this.div_dtls.chk_nghtWrkAt.set_visible(false);
        		this.div_dtls.chk_wkendYrycAt.set_visible(false);
        		
        		this.div_dtls.chk_nghtWrkAt.set_readonly(true);
        		this.div_dtls.chk_wkendYrycAt.set_readonly(true);
        		
        		if(acode == '300' || acode == '311' || acode == '312' || acode == '313' || acode == '314'){
        			this.ds_asort_code.filter("CODE > 100 || CODE == '003' || CODE == '"+ acode +"'");
        		}else {
        			this.ds_asort_code.filter("CODE > 100 || CODE == '003'");
        		}
        	}
        	
        	if(e.newrow > -1 && ((acode == '300' || acode == '311' || acode == '312' || acode == '313' || acode == '314'))) {
        		this.ds_asort_code.filter("CODE > 100 || CODE == '003'");
        	}else {
        		// 병가 제외  추가 ( 201 ~ 205 )
        		//this.ds_asort_code.filter("((CODE > 100 && CODE < 300) || (CODE > 300 && CODE < 310) || CODE > 400 || CODE == '003') && !(CODE >= 201 && CODE <= 205) ");
        		
        		// 병가 제외 복구
        		this.ds_asort_code.filter("((CODE > 100 && CODE < 300) || (CODE > 300 && CODE < 310) || CODE > 400 || CODE == '003' || (CODE >= 315 && CODE <= 318) && CODE != 205 ");
        	}
        	
        	if((e.newrow > -1 && dcsnAt != '1') || this.comUtils.isNull(sanctnSts)){			
        		
        		if(acode == "001" || acode == "002" || acode == "004" || acode == '300' || acode == '311' || acode == '312' || acode == '313' || acode == '314'){
        			// 상세정보영역 컴포넌트 제어
        	// 		this.div_dtls.div_EMP.div_sear.edt_emplnm.set_cssclass("edt_WF_Readonly");
        	// 		this.div_dtls.div_EMP.div_sear.edt_empno.set_cssclass("edt_WF_Readonly");
        	// 		this.div_dtls.div_EMP.div_sear.search.set_visible(false);
        			
        			this.div_dtls.cmb_ASORT_CODE.set_cssclass("cmb_WF_Readonly");
        			this.div_dtls.cal_BGNDE.set_cssclass("cal_WF_Readonly");
        			this.div_dtls.msk_BEGIN_TM.set_cssclass("msk_WF_Readonly");
        			this.div_dtls.cal_ENDDE.set_cssclass("cal_WF_Readonly");
        			this.div_dtls.msk_END_TM.set_cssclass("msk_WF_Readonly");
        			this.div_dtls.edt_PRVONSH.set_cssclass("edt_WF_Readonly");
        			this.div_dtls.cmb_FAMILY.set_cssclass("cmb_WF_Readonly");
        			
        			this.div_dtls.cmb_ASORT_CODE.set_readonly(true);
        			this.div_dtls.cal_BGNDE.set_readonly(true);
        			this.div_dtls.msk_BEGIN_TM.set_readonly(true);
        			this.div_dtls.cal_ENDDE.set_readonly(true);
        			this.div_dtls.msk_END_TM.set_readonly(true);
        			this.div_dtls.edt_PRVONSH.set_readonly(true);
        			this.div_dtls.cmb_FAMILY.set_readonly(true);
        		} else {
        			// 상세정보영역 컴포넌트 제어
        	// 		this.div_dtls.div_EMP.div_sear.edt_emplnm.set_cssclass("edt_WF_Essential");
        	// 		this.div_dtls.div_EMP.div_sear.edt_empno.set_cssclass("edt_WF_Essential");
        	// 		this.div_dtls.div_EMP.div_sear.search.set_visible(true);

        			this.div_dtls.cmb_ASORT_CODE.set_cssclass("cmb_WF_Essential");	// 종별구분
        			this.div_dtls.cal_BGNDE.set_cssclass("cal_WF_Essential");		// 시작일
        			this.div_dtls.msk_BEGIN_TM.set_cssclass("msk_WF_Essential");	// 시작시각
        			this.div_dtls.cal_ENDDE.set_cssclass("cal_WF_Essential");		// 종료일
        			this.div_dtls.msk_END_TM.set_cssclass("msk_WF_Essential");		// 종료시각
        			this.div_dtls.edt_PRVONSH.set_cssclass("");
        			
        			this.div_dtls.cmb_ASORT_CODE.set_readonly(false);
        			this.div_dtls.cal_BGNDE.set_readonly(false);
        			this.div_dtls.msk_BEGIN_TM.set_readonly(false);
        			this.div_dtls.cal_ENDDE.set_readonly(false);
        			this.div_dtls.msk_END_TM.set_readonly(false);
        			this.div_dtls.edt_PRVONSH.set_readonly(false);
        			
        			var acode = obj.getColumn(e.newrow, "ASORT_CODE");
        			if(acode == "502"){
        				this.div_dtls.cmb_FAMILY.set_cssclass("cmb_WF_Essential");
        				this.div_dtls.cmb_FAMILY.set_readonly(false);
        			}
        			
        			if(acode == "101" || acode == "202" || acode == "303"){	// 연차 / 병가(사) / 하계휴가			
        				this.div_dtls.msk_BEGIN_TM.set_cssclass("msk_WF_Readonly");
        				this.div_dtls.msk_END_TM.set_cssclass("msk_WF_Readonly");
        				this.div_dtls.msk_BEGIN_TM.set_readonly(true);
        				this.div_dtls.msk_END_TM.set_readonly(true);
        			} else {
        				this.div_dtls.msk_BEGIN_TM.set_cssclass("msk_WF_Essential");
        				this.div_dtls.msk_END_TM.set_cssclass("msk_WF_Essential");
        				this.div_dtls.msk_BEGIN_TM.set_readonly(false);
        				this.div_dtls.msk_END_TM.set_readonly(false);
        			}
        			
        			// 취소
        			if(acode == "104" || acode == "204" || acode == "306" || acode == "203" || acode == "207" || acode == "403" || acode == "406" || acode == "317" || acode == "318"){
        				this.div_dtls.cal_BGNDE.set_cssclass("cal_WF_Readonly");
        				this.div_dtls.cal_ENDDE.set_cssclass("cal_WF_Readonly");
        				this.div_dtls.msk_BEGIN_TM.set_cssclass("msk_WF_Readonly");
        				this.div_dtls.msk_END_TM.set_cssclass("msk_WF_Readonly");
        				this.div_dtls.edt_PRVONSH.set_cssclass("edt_WF_Readonly");
        				
        				this.div_dtls.msk_BEGIN_TM.set_readonly(true);
        				this.div_dtls.msk_END_TM.set_readonly(true);
        				this.div_dtls.cal_BGNDE.set_readonly(true);
        				this.div_dtls.cal_ENDDE.set_readonly(true);
        				this.div_dtls.edt_PRVONSH.set_readonly(true);
        			}
        		}
        	} else {
        		// 상세정보영역 컴포넌트 제어
        // 		this.div_dtls.div_EMP.div_sear.edt_emplnm.set_cssclass("edt_WF_Readonly");
        // 		this.div_dtls.div_EMP.div_sear.edt_empno.set_cssclass("edt_WF_Readonly");
        // 		this.div_dtls.div_EMP.div_sear.search.set_visible(false);
        		
        		this.div_dtls.cmb_ASORT_CODE.set_cssclass("cmb_WF_Readonly");
        		this.div_dtls.cal_BGNDE.set_cssclass("cal_WF_Readonly");
        		this.div_dtls.msk_BEGIN_TM.set_cssclass("msk_WF_Readonly");
        		this.div_dtls.cal_ENDDE.set_cssclass("cal_WF_Readonly");
        		this.div_dtls.msk_END_TM.set_cssclass("msk_WF_Readonly");
        		this.div_dtls.edt_PRVONSH.set_cssclass("edt_WF_Readonly");
        		this.div_dtls.cmb_FAMILY.set_cssclass("cmb_WF_Readonly");
         		this.div_dtls.chk_nghtWrkAt.set_cssclass("chk_WF_Readonly");
         		this.div_dtls.chk_wkendYrycAt.set_cssclass("chk_WF_Readonly");
        		
        		this.div_dtls.cmb_ASORT_CODE.set_readonly(true);
        		this.div_dtls.cal_BGNDE.set_readonly(true);
        		this.div_dtls.msk_BEGIN_TM.set_readonly(true);
        		this.div_dtls.cal_ENDDE.set_readonly(true);
        		this.div_dtls.msk_END_TM.set_readonly(true);
        		this.div_dtls.edt_PRVONSH.set_readonly(true);
        		this.div_dtls.cmb_FAMILY.set_readonly(true);
         		this.div_dtls.chk_nghtWrkAt.set_readonly(true);
         		this.div_dtls.chk_wkendYrycAt.set_readonly(true);
        	}
        	
        	if(e.newrow > -1){
        		var emp = this.DS_TBHRM_WRKCP.getColumn(e.newrow, "EMPNO");
        		var year = this.DS_TBHRM_WRKCP.getColumn(e.newrow, "BGNDE").substr(0,4);
        		this.ds_cond_yryc.clearData();
        		this.ds_cond_yryc.addRow();
        		this.ds_cond_yryc.setColumn(0, "EMPNO", emp);
        		this.ds_cond_yryc.setColumn(0, "YEAR",  year);
        		this.fn_transaction("tbhrmYryc");
        	}else{
        		this.ds_cond_yryc.clearData();
        		this.DS_TBHRM_YRYC.clearData();
        		this.ds_fileList.clearData();
        	}
        }

        /*
         * 함수명  	: DS_TBHRM_WRKCP_cancolumnchange
         * 설명 		: 그리드 컬럼 데이터 변경후 변경전 이벤트 함수
         * params  		: none
         * return Type 	: none
         * 사용법		: this.DS_TBHRM_WRKCP_cancolumnchange()
         */
        this.DS_TBHRM_WRKCP_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == "ASORT_CODE" || e.columnid == "CNFIRM_AT"){
        		if(e.newvalue == "001" || e.newvalue == "002" || e.newvalue == "004"){
        			this.gfn_message("info.처리불가","해당 종별은 현재 화면에서 등록할 수 없습니다.");
        			return false;
        		}
        	}
        	
        	if(e.columnid == "CNFIRM_AT"){
        		var code = obj.getColumn(e.row, "ASORT_CODE");
        		if(code == "001" || code == "002" || code == "004"){
        			this.gfn_message("info.처리불가","해당 종별은 현재 화면에서 수정할 수 없습니다.");
        			return false;
        		}
        	}
        }

        /*
         * 함수명  	: DS_TBHRM_WRKCP_oncolumnchanged
         * 설명 		: 그리드 컬럼 데이터 변경후 변경후 이벤트 함수
         * params  		: none
         * return Type 	: none
         * 사용법		: this.DS_TBHRM_WRKCP_oncolumnchanged()
         */
        this.DS_TBHRM_WRKCP_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "BEGIN_TM") {
        		var newValue = e.newvalue.replace(/\s/g, '0');
        		this.div_dtls.msk_BEGIN_TM.set_value(newValue);
        	}
        	
        	if(e.columnid == "END_TM") {
        		var newValue = e.newvalue.replace(/\s/g, '0');
        		this.div_dtls.msk_END_TM.set_value(newValue);
        	}
        	
        	if(e.columnid == "ASORT_CODE") {
        		if(e.newvalue == "101") {						// 연차
        			this.div_dtls.chk_wkendYrycAt.set_left(340);
        			this.div_dtls.chk_wkendYrycAt.set_text("주말연차");
        			this.div_dtls.chk_nghtWrkAt.set_visible(true);
        			this.div_dtls.chk_wkendYrycAt.set_visible(true);
        			this.div_dtls.chk_nghtWrkAt.set_readonly(false);
        			this.div_dtls.chk_wkendYrycAt.set_readonly(false);
        			obj.set_enableevent(false);
        			obj.setColumn(e.row, "NGHT_WRK_AT", "0");
        			obj.setColumn(e.row, "WKEND_YRYC_AT", "0");
        			obj.set_enableevent(true);
        		}else if(e.newvalue == "102") {						// 오전연차
        			var left = this.div_dtls.chk_nghtWrkAt.left
        			this.div_dtls.chk_wkendYrycAt.set_left(left);
        			this.div_dtls.chk_wkendYrycAt.set_text("주말오전연차");
        			this.div_dtls.chk_nghtWrkAt.set_visible(false);
        			this.div_dtls.chk_wkendYrycAt.set_visible(true);
        			this.div_dtls.chk_nghtWrkAt.set_readonly(true);
        			this.div_dtls.chk_wkendYrycAt.set_readonly(false);
        			obj.set_enableevent(false);
        			obj.setColumn(e.row, "NGHT_WRK_AT", "0");
        			obj.setColumn(e.row, "WKEND_YRYC_AT", "0");
        			obj.set_enableevent(true);
        		}else if(e.newvalue == "103") {						// 오후연차
        			var left = this.div_dtls.chk_nghtWrkAt.left
        			this.div_dtls.chk_wkendYrycAt.set_left(left);
        			this.div_dtls.chk_wkendYrycAt.set_text("주말오후연차");
        			this.div_dtls.chk_nghtWrkAt.set_visible(false);
        			this.div_dtls.chk_wkendYrycAt.set_visible(true);
        			this.div_dtls.chk_nghtWrkAt.set_readonly(true);
        			this.div_dtls.chk_wkendYrycAt.set_readonly(false);
        			obj.set_enableevent(false);
        			obj.setColumn(e.row, "NGHT_WRK_AT", "0");
        			obj.setColumn(e.row, "WKEND_YRYC_AT", "0");
        			obj.set_enableevent(true);
        		}else if(e.newvalue == "402") {						// 조퇴
        			var left = this.div_dtls.chk_nghtWrkAt.left
        			this.div_dtls.chk_wkendYrycAt.set_left(left);
        			this.div_dtls.chk_wkendYrycAt.set_text("주말조퇴");
        			this.div_dtls.chk_nghtWrkAt.set_visible(false);
        			this.div_dtls.chk_wkendYrycAt.set_visible(true);
        			this.div_dtls.chk_nghtWrkAt.set_readonly(true);
        			this.div_dtls.chk_wkendYrycAt.set_readonly(false);
        			obj.set_enableevent(false);
        			obj.setColumn(e.row, "NGHT_WRK_AT", "0");
        			obj.setColumn(e.row, "WKEND_YRYC_AT", "0");
        			obj.set_enableevent(true);
        		}else if(e.newvalue == "404") {						// 외출
        			var left = this.div_dtls.chk_nghtWrkAt.left
        			this.div_dtls.chk_wkendYrycAt.set_left(left);
        			this.div_dtls.chk_wkendYrycAt.set_text("주말외출");
        			this.div_dtls.chk_nghtWrkAt.set_visible(false);
        			this.div_dtls.chk_wkendYrycAt.set_visible(true);
        			this.div_dtls.chk_nghtWrkAt.set_readonly(true);
        			this.div_dtls.chk_wkendYrycAt.set_readonly(false);
        			obj.set_enableevent(false);
        			obj.setColumn(e.row, "NGHT_WRK_AT", "0");
        			obj.setColumn(e.row, "WKEND_YRYC_AT", "0");
        			obj.set_enableevent(true);		
        		} else {											// 연차 외
        			this.div_dtls.chk_nghtWrkAt.set_visible(false);
        			this.div_dtls.chk_wkendYrycAt.set_visible(false);
        			this.div_dtls.chk_nghtWrkAt.set_readonly(true);
        			this.div_dtls.chk_wkendYrycAt.set_readonly(true);
        			obj.set_enableevent(false);
        			obj.setColumn(e.row, "NGHT_WRK_AT", "0");
        			obj.setColumn(e.row, "WKEND_YRYC_AT", "0");
        			obj.set_enableevent(true);
        		}
        		
        		if(e.newvalue == "502"){	// 육아휴직
        			obj.setColumn(e.row, "CANCL_SEQ", null);
        			
        			this.fn_calTime(e.row);
        			this.div_dtls.cal_BGNDE.set_cssclass("cal_WF_Essential");
        			this.div_dtls.cal_ENDDE.set_cssclass("cal_WF_Essential");
        			this.div_dtls.msk_BEGIN_TM.set_cssclass("msk_WF_Essential");
        			this.div_dtls.msk_END_TM.set_cssclass("msk_WF_Essential");
        			this.div_dtls.cmb_FAMILY.set_cssclass("cmb_WF_Essential");
        			
        			this.div_dtls.cal_BGNDE.set_readonly(false);
        			this.div_dtls.cal_ENDDE.set_readonly(false);
        			this.div_dtls.msk_BEGIN_TM.set_readonly(false);
        			this.div_dtls.msk_END_TM.set_readonly(false);
        			this.div_dtls.cmb_FAMILY.set_readonly(false);
        		}else{
        			this.div_dtls.cmb_FAMILY.set_cssclass("cmb_WF_Readonly");
        			this.div_dtls.cmb_FAMILY.set_readonly(true);
        			// 취소 구분자
        			if(e.newvalue == "104" || e.newvalue == "204" || e.newvalue == "306" || e.newvalue == "203" || e.newvalue == "207" || e.newvalue == "403" || e.newvalue == "406" || e.newvalue == "317" || e.newvalue == "318"){
        				
        				this.div_dtls.cal_BGNDE.set_cssclass("cal_WF_Readonly");
        				this.div_dtls.cal_ENDDE.set_cssclass("cal_WF_Readonly");
        				this.div_dtls.msk_BEGIN_TM.set_cssclass("msk_WF_Readonly");
        				this.div_dtls.msk_END_TM.set_cssclass("msk_WF_Readonly");
        				this.div_dtls.edt_PRVONSH.set_cssclass("edt_WF_Readonly");
        				
        				this.div_dtls.cal_BGNDE.set_readonly(true);
        				this.div_dtls.cal_ENDDE.set_readonly(true);
        				this.div_dtls.msk_BEGIN_TM.set_readonly(true);
        				this.div_dtls.msk_END_TM.set_readonly(true);
        				this.div_dtls.edt_PRVONSH.set_readonly(true);
        				
        				if(this.afCode == "") {
        					this.afCode = e.oldvalue;
        					var bgndt = this.ds_cond.getColumn(0, "BGNDT1");
        					var enddt = this.ds_cond.getColumn(0, "BGNDT2");
        					var empno = obj.getColumn(e.row, "EMPNO");
        					var acode = e.newvalue;
        					this.gfn_popup('CANCL_P', 500, 500, '', {BGNDT:bgndt, ENDDT:enddt, EMPNO:empno, ASORT_CODE:acode}, "mis_hrm::HRM070102_P2.xfdl", "fn_popupCallBack", true);
        				}				
        			
        			// 연차 구분자
        			} else if(e.newvalue == "101" || e.newvalue == "202" || e.newvalue == "303" || e.newvalue == "102" || e.newvalue == "304" || e.newvalue == "103" || e.newvalue == "305" || e.newvalue == "311" || e.newvalue == "312" || e.newvalue == "313" || e.newvalue == "314"){
        				obj.setColumn(e.row, "CANCL_SEQ", null);
        				obj.setColumn(e.row, "FAMILY_SEQ", null);
        				this.div_dtls.cal_BGNDE.set_cssclass("cal_WF_Essential");
        				this.div_dtls.cal_ENDDE.set_cssclass("cal_WF_Essential");
        				this.div_dtls.cal_BGNDE.set_readonly(false);
        				this.div_dtls.cal_ENDDE.set_readonly(false);
        				
        				// 사유/용무 
        				this.div_dtls.edt_PRVONSH.set_cssclass("edt_WF_Readonly");
        				this.div_dtls.edt_PRVONSH.set_readonly(true);
        				
        				if(e.newvalue == "101" || e.newvalue == "202" || e.newvalue == "303" || e.newvalue == "311" || e.newvalue == "312"){	// 연차 / 병가(사) / 하계휴가 / 보상휴가(연차[전]) / 보상휴가(연차[후])
        					obj.set_enableevent(false);
        					obj.setColumn(e.row, "BGNDE", this.gfn_today());
        					obj.setColumn(e.row, "ENDDE", this.gfn_today());
        					obj.setColumn(e.row, "BEGIN_TM", "0000");
        					obj.setColumn(e.row, "END_TM", "0000");
        					obj.setColumn(e.row, "DAYCNT", "1");
        					obj.setColumn(e.row, "TIME", "0000");
        					obj.set_enableevent(true);
        					
        					this.div_dtls.msk_BEGIN_TM.set_cssclass("msk_WF_Readonly");
        					this.div_dtls.msk_END_TM.set_cssclass("msk_WF_Readonly");
        					this.div_dtls.msk_BEGIN_TM.set_readonly(true);
        					this.div_dtls.msk_END_TM.set_readonly(true);
        					
        					if(e.newvalue == "311" || e.newvalue == "312") {	// 보상휴가(연차[전]), 보상휴가(연차[후])
        						var bgnde = obj.getColumn(e.row, "BGNDE");
        						var endde = this.gfn_addDate(bgnde, 1, "D");
        						
        						obj.set_enableevent(false);
        						obj.setColumn(e.row, "ENDDE", endde);
        						if(e.newvalue == "311") {
        							obj.setColumn(e.row, "BEGIN_TM", "1400");
        							obj.setColumn(e.row, "END_TM", "1800");
        						}
        						else {
        							obj.setColumn(e.row, "BEGIN_TM", "0900");
        							obj.setColumn(e.row, "END_TM", "1400");
        						}
        						obj.setColumn(e.row, "DAYCNT", "0");
        						obj.setColumn(e.row, "TIME", "1200");
        						obj.set_enableevent(true);
        						
        						this.gfn_message("info.처리불가", "2017년 11월 이후 초과근무시간으로 보상휴가는 해당 기능에서 진행할 수 없습니다. 보상전환계획을 통하여 데이터를 입력해주시기 바랍니다.");
        					}
        				}
        				
        				if(e.newvalue == "102" || e.newvalue == "304" || e.newvalue == "313"){	// 오전연차 / 오전하계휴가 / 보상휴가(연차[전]) / 보상휴가(오전반차)
        					obj.set_enableevent(false);
        					obj.setColumn(e.row, "BGNDE", this.gfn_today());
        					obj.setColumn(e.row, "ENDDE", this.gfn_today());
        					obj.setColumn(e.row, "BEGIN_TM", "0900");
        					obj.setColumn(e.row, "END_TM", "1400");
        					obj.setColumn(e.row, "DAYCNT", "0.5");
        					obj.setColumn(e.row, "TIME", "0000");
        					obj.set_enableevent(true);
        					
        					this.div_dtls.msk_BEGIN_TM.set_cssclass("msk_WF_Essential");
        					this.div_dtls.msk_END_TM.set_cssclass("msk_WF_Essential");
        					this.div_dtls.msk_BEGIN_TM.set_readonly(false);
        					this.div_dtls.msk_END_TM.set_readonly(false);
        					
        					if(e.newvalue == "313") {
        						this.gfn_message("info.처리불가", "2017년 11월 이후 초과근무시간으로 보상휴가는 해당 기능에서 진행할 수 없습니다. 보상전환계획을 통하여 데이터를 입력해주시기 바랍니다.");
        					}
        				}
        				
        				if(e.newvalue == "103" || e.newvalue == "305" || e.newvalue == "314"){	// 오후연차 / 오후하계휴가 / 보상휴가(연차[후]) / 보상휴가(오후반차)
        					obj.set_enableevent(false);
        					obj.setColumn(e.row, "BGNDE", this.gfn_today());
        					obj.setColumn(e.row, "ENDDE", this.gfn_today());
        					obj.setColumn(e.row, "BEGIN_TM", "1400");
        					obj.setColumn(e.row, "END_TM", "1800");
        					obj.setColumn(e.row, "DAYCNT", "0.5");
        					obj.setColumn(e.row, "TIME", "0000");
        					obj.set_enableevent(true);
        					
        					this.div_dtls.msk_BEGIN_TM.set_cssclass("msk_WF_Essential");
        					this.div_dtls.msk_END_TM.set_cssclass("msk_WF_Essential");
        					this.div_dtls.msk_BEGIN_TM.set_readonly(false);
        					this.div_dtls.msk_END_TM.set_readonly(false);
        					
        					if(e.newvalue == "314") {
        						this.gfn_message("info.처리불가", "2017년 11월 이후 초과근무시간으로 보상휴가는 해당 기능에서 진행할 수 없습니다. 보상전환계획을 통하여 데이터를 입력해주시기 바랍니다.");
        					}
        				}
        			} else {
        				this.fn_calTime(e.row);
        				this.div_dtls.cal_BGNDE.set_cssclass("cal_WF_Essential");
        				this.div_dtls.cal_ENDDE.set_cssclass("cal_WF_Essential");
        				this.div_dtls.msk_BEGIN_TM.set_cssclass("msk_WF_Essential");
        				this.div_dtls.msk_END_TM.set_cssclass("msk_WF_Essential");
        				this.div_dtls.chk_nghtWrkAt.set_cssclass("");
        				this.div_dtls.chk_wkendYrycAt.set_cssclass("");
         		
        				this.div_dtls.cal_BGNDE.set_readonly(false);
        				this.div_dtls.cal_ENDDE.set_readonly(false);
        				this.div_dtls.msk_BEGIN_TM.set_readonly(false);
        				this.div_dtls.msk_END_TM.set_readonly(false);
        				this.div_dtls.chk_nghtWrkAt.set_readonly(false);
        				this.div_dtls.chk_wkendYrycAt.set_readonly(false);
        				
        				// 사유/용무 
        				this.div_dtls.edt_PRVONSH.set_cssclass("");
        				this.div_dtls.edt_PRVONSH.set_readonly(false);
        				obj.setColumn(e.row, "CANCL_SEQ", null);
        				obj.setColumn(e.row, "FAMILY_SEQ", null);
        			}
        		}
        		
        	}
        	
        	if(e.columnid == "BGNDE" || e.columnid == "ENDDE" || e.columnid == "BEGIN_TM" || e.columnid == "END_TM"){
        		var acode = obj.getColumn(e.row, "ASORT_CODE");		//종별구분
        		var isSkip = false;
        		
        		if(this.comUtils.isNull(acode)){
        			isSkip = true;
        		}
        		
        		if(acode == "102" || acode == "304" || acode == "103" || acode == "305" || acode == "313" || acode == "314"){
        			if(e.columnid == "BGNDE"){
        				obj.setColumn(e.row, "ENDDE", e.newvalue);
        			}
        			
        			if(e.columnid == "ENDDE"){
        				obj.setColumn(e.row, "BGNDE", e.newvalue);
        			}
        			isSkip = true;
        		}
        		else if(acode == "311" || acode == "312") {
        			if(e.columnid == "BGNDE"){
        				obj.setColumn(e.row, "ENDDE", this.gfn_addDate(e.newvalue, 1, "D"));
        			}
        			
        			if(e.columnid == "ENDDE"){
        				obj.setColumn(e.row, "BGNDE", this.gfn_addDate(e.newvalue, -1, "D"));
        			}
        			var bgnde = obj.getColumn(e.row, "BGNDE");
        			var endde = obj.getColumn(e.row, "ENDDE");
        			this.fn_chkHolyDe(bgnde, endde);
        			return false;
        		}
        		if(!isSkip) {
        			this.fn_calTime(e.row);
        		}
        	}
        	
        	if(e.columnid == "CNFIRM_AT"){
        		this.DS_TBHRM_WRKCP.set_rowposition(-1);
        		this.DS_TBHRM_WRKCP.set_rowposition(e.row);
        	}
        	
        	if(e.columnid == "ASORT_CODE" || e.columnid == "BGNDE" || e.columnid == "ENDDE" || e.columnid == "BEGIN_TM" || e.columnid == "END_TM") {
        		var acode = obj.getColumn(e.row, "ASORT_CODE");		//종별구분
        		var bgnde = obj.getColumn(e.row, "BGNDE");
        		var endde = obj.getColumn(e.row, "ENDDE");
        		
        		// 지각일때는 휴일체크 안하게(휴일의 의미가 없음)
        		if( acode != 401 ) {
        			this.fn_chkHolyDe(bgnde, endde);
        		}
        	}
        	
        	if(e.columnid == "NGHT_WRK_AT" || e.columnid == "WKEND_YRYC_AT") {
        		var bgnde = obj.getColumn(e.row, "BGNDE");
        		var endde = obj.getColumn(e.row, "ENDDE");
        		this.fn_calTime(e.row);
        		this.fn_chkHolyDe(bgnde, endde);
        	}
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

        /*
         * 함수명  	: fn_selfValidation
         * 설명 		: 육아휴직에 대한 validation 체크
         * params  		: 대상 그리드 행번호
         * return Type 	: None
         * 사용법		: this.fn_selfValidation(rowposition)
         */
        this.fn_selfValidation = function(nRow){
        	var acode = this.DS_TBHRM_WRKCP.getColumn(nRow, "ASORT_CODE");
        	
        	if(acode == "502"){
        		var seq = this.DS_TBHRM_WRKCP.getColumn(nRow, "FAMILY_SEQ");
        		
        		if(this.comUtils.isNull(seq)){
        			return false;
        		}
        	}
        	
        	return true;
        }

        /*
         * 함수명  	: fn_calTime
         * 설명 		: 일수/시간 계산 함수
         * params  		: 대상 그리드 행번호
         * return Type 	: None
         * 사용법		: this.fn_calTime(rowposition)
         */
        this.fn_calTime = function(nRow){
        	var sd        = this.DS_TBHRM_WRKCP.getColumn(nRow, "BGNDE");		// 시작일
        	var ed        = this.DS_TBHRM_WRKCP.getColumn(nRow, "ENDDE");		// 종료일
        	var st        = this.DS_TBHRM_WRKCP.getColumn(nRow, "BEGIN_TM");	// 시작시각
        	var et        = this.DS_TBHRM_WRKCP.getColumn(nRow, "END_TM");		// 종료시각
        	var acode     = this.DS_TBHRM_WRKCP.getColumn(nRow, "ASORT_CODE");	// 종별구분
        	var nghtWrkAt = this.DS_TBHRM_WRKCP.getColumn(nRow, "NGHT_WRK_AT");	// 야간근무여부
        	
        	if(!this.comUtils.isNull(sd) && !this.comUtils.isNull(ed) || !this.comUtils.isNull(st) || !this.comUtils.isNull(et)){			
        			
        		var dayCnt = ed - sd;
        		if(dayCnt < 0){
        			this.DS_TBHRM_WRKCP.setColumn(nRow, "DAYCNT", "");
        			this.DS_TBHRM_WRKCP.setColumn(nRow, "TIME", "");
        		}else {
        			var startDate = new Date(sd.substr(0,4)+"/"+sd.substr(4,2)+"/"+sd.substr(6,2)+" "+st.substr(0,2)+":"+st.substr(2,2)+":"+"00");
        			var endDate  = new Date(ed.substr(0,4)+"/"+ed.substr(4,2)+"/"+ed.substr(6,2)+" "+et.substr(0,2)+":"+et.substr(2,2)+":"+"00");
        			var tmp = (endDate.getTime() - startDate.getTime()) / 60000; // 분 단위로 변경.
        			
        			// 밥시간 계산 12:00:~13:00
        			var lt   = 0; // 밥시간
        			if(st < 1300 && et > 1200) {
        				if(st >= 1200 && et <= 1300) {
        					lt = tmp;
        				}else if(st < 1200 && et < 1300) {
        					lt = et - 1200;
        				}else if(st > 1200 && et >= 1300){
        					lt = 1260 - st;
        				}else {
        					lt = 60;
        				}
        			}
        			
        			tmp -= lt;

        			var dayCnt = parseInt((tmp / 1440)) // 일 단위로 변경
        			var tmp1 = parseInt((tmp % 1440) / 60).toString().padLeft(2, "0"); // 시 단위로 변경.
        			var tmp2 = ((tmp % 1440) % 60).toString().padLeft(2, "0"); // 분 단위로 변경.
        			var time = tmp1.concat(tmp2);

        			
        			
        			if(acode == "101" || acode == "202" || acode == "303"){	// 연차 / 병가(사) / 하계휴가
        				dayCnt = dayCnt + 1;
        			}
        			
        			this.DS_TBHRM_WRKCP.setColumn(nRow, "DAYCNT", dayCnt);
        			this.DS_TBHRM_WRKCP.setColumn(nRow, "TIME", time);
        		}
        	}else{
        		this.DS_TBHRM_WRKCP.setColumn(nRow, "DAYCNT", "");
        		this.DS_TBHRM_WRKCP.setColumn(nRow, "TIME", "");
        	}
        }

        
        /*
         * 함수명  	: fn_chkHolyDe
         * 설명 		: 휴가 기간 중 휴무일 확인
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_chkHolyDe();
         */
        this.fn_chkHolyDe = function(bgnde,endde)
        {
        	if(this.comUtils.isNull(bgnde) || this.comUtils.isNull(endde)) {
        		return false;
        	}
        	this.ds_condHoly.clearData();
        	this.ds_condHoly.addRow();
        	this.ds_condHoly.setColumn(0, "BGNDE", bgnde);
        	this.ds_condHoly.setColumn(0, "ENDDE", endde);
        	this.fn_transaction("chkHolyDe");
        }

        

        /*
         * 함수명  	: fn_PopupCallback
         * 설명 		: Popup Call 이후 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: 
         */
        this.fn_popupCallBack = function(sPopupId,sReturn)
        {	
        	switch (sPopupId) {
        		case "SANCTN_P":	// 전자결재 상세 조회 팝업
        			break;
        		case "CANCL_P":		//취소 팝업
        			var dsRtn = new Dataset();
        			nRowCnt = dsRtn.loadXML(sReturn);
        			
        			if(!nRowCnt){
        				this.DS_TBHRM_WRKCP.setColumn(this.DS_TBHRM_WRKCP.rowposition, "ASORT_CODE", this.afCode);
        			} else {
        				var temp1 = dsRtn.getColumn(0, "CANCL_SEQ");	// 취소대상번호
        				var temp2 = dsRtn.getColumn(0, "BGNDE");		// 시작일
        				var temp3 = dsRtn.getColumn(0, "BEGIN_TM");		// 시작시각
        				var temp4 = dsRtn.getColumn(0, "ENDDE");		// 종료일
        				var temp5 = dsRtn.getColumn(0, "END_TM");		// 종료시각
        				var temp6 = dsRtn.getColumn(0, "DAYCNT");		// 일수
        				var temp7 = dsRtn.getColumn(0, "TIME");			// 시간
        				var temp8 = dsRtn.getColumn(0, "PRVONSH");		// 사유
        				
        				this.DS_TBHRM_WRKCP.set_enableevent(false);
        				var nRow = this.DS_TBHRM_WRKCP.rowposition;
        				this.DS_TBHRM_WRKCP.setColumn(nRow, "CANCL_SEQ", temp1);
        				this.DS_TBHRM_WRKCP.setColumn(nRow, "BGNDE",     temp2);
        				this.DS_TBHRM_WRKCP.setColumn(nRow, "BEGIN_TM",  temp3);
        				this.DS_TBHRM_WRKCP.setColumn(nRow, "ENDDE",     temp4);
        				this.DS_TBHRM_WRKCP.setColumn(nRow, "END_TM",    temp5);
        				this.DS_TBHRM_WRKCP.setColumn(nRow, "DAYCNT",    (temp6*-1));
        				this.DS_TBHRM_WRKCP.setColumn(nRow, "TIME",      temp7);
        				this.DS_TBHRM_WRKCP.setColumn(nRow, "PRVONSH",   temp8);
        				this.DS_TBHRM_WRKCP.setColumn(nRow, "FAMILY_SEQ", null);
        				this.DS_TBHRM_WRKCP.set_enableevent(true);
        			}
        			this.afCode = "";
        			break;
        	}
        }

        
        /***********************************************************************
         * 첨부파일 버튼 영역
         ***********************************************************************/
         
        /*
         * 함수명  	: btn_uploadFiles_onclick
         * 설명 		: '파일업로드' 버튼 클릭 후 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_uploadFiles_onclick(obj,e);
         */
        this.btn_uploadFiles_onclick = function(obj,e)
        {	
        	var nRow     = this.DS_TBHRM_WRKCP.rowposition;	
        	var nRowType = this.DS_TBHRM_WRKCP.getRowType(nRow);
        	var cnfirmAt = this.DS_TBHRM_WRKCP.getColumn(nRow, "CNFIRM_AT");
        	var asortCd = this.DS_TBHRM_WRKCP.getColumn(nRow, "ASORT_CODE"); 

        	if(asortCd == "001" || asortCd == "002" || asortCd == "004"){
        		this.gfn_message("info.처리불가","해당 종별은 현재 화면에서 수정할 수 없습니다.");
        		return false;
        	}
        	
        	if(nRow < 0){
        		this.gfn_message("comm.항목.선택.요청","대상 정보");
        		return;
        	}
        	
        	if(nRowType == 2){
        		this.gfn_message("info.진행가능","신규 정보를 저장");
        		return;
        	}
        	
        	if(asortCd != '316') {
        		if(cnfirmAt == "1"){
        			this.gfn_message("fail.수정.불가", "이미 확정된 건은");
        			return;
        		}
        	}
        	
        	// 첨부파일 업로드(fileSn 자동채번 / 첨부파일 Master에 ROW추가 / 파일 업로드 및 자동저장 / 테이블에 fileSn반영 / 데이터셋에 fileSn반영, 단 신규 ROW가 아닐경우 ROWTYPE은 유지)
        	this.mCallback = function() {
        		this.fn_autoFileSn(
        			 "MIS"									// 대분류   (SYS_SE)
        			,"HRM"									// 업무구분 (JOB_SE)
        			, this.File_UpDownManager	            // fileManager 오브젝트
        			, this.ds_fileList		                // fileObject
        			, this.DS_TBHRM_WRKCP					// fileSn을 불러오거나 반영해야 하는 컬럼
        			, "TBHRM_WRKCP"     			    	// fileSn을 저장할 테이블
        			, "FILE_SN"								// fileSn 컬럼명이 다를 경우를 대비
        			, ["EMPNO", "SEQ"]						// fileSn을 저장할 테이블의 PK (FileSn 확인 및 자동반영목적)
        		);
        	}
        	
        	this.mCallback();
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
        	var findRow = this.ds_fileList.findRow("CHK", "1");
        	var cnfirmAt = this.DS_TBHRM_WRKCP.getColumn(this.DS_TBHRM_WRKCP.rowposition, "CNFIRM_AT");
        	var asortCd = this.DS_TBHRM_WRKCP.getColumn(this.DS_TBHRM_WRKCP.rowposition, "ASORT_CODE");

        	if(asortCd == "001" || asortCd == "002" || asortCd == "004"){
        		this.gfn_message("info.처리불가","해당 종별은 현재 화면에서 수정할 수 없습니다.");
        		return false;
        	}
        	
        	if(cnfirmAt == "1"){
        		this.gfn_message("fail.수정.불가", "이미 확정된 건은");
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
        	
        	var nRow = this.DS_TBHRM_WRKCP.rowposition;
        	this.ds_cond.setColumn(0, "FILE_SN", this.DS_TBHRM_WRKCP.getColumn(nRow, "FILE_SN"));
        	
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

        this.ds_cond_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "DEPT_CODE"){
        		this.div_search.div_EMP.fn_set_deptCode(e.newvalue);
        		this.div_dtls.div_EMP.fn_set_deptCode(e.newvalue);
        	}
        }

        /*
         * 함수명  	: btn_canclAp_onclick
         * 설명 		: 선택된 데이터의 결재를 취소.
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_canclap_onclick(obj,e);
         */
        this.btn_canclAp_onclick = function(obj,e)
        {
        	var rowpo = this.DS_TBHRM_WRKCP.rowposition;
        	var dcsnAt = this.DS_TBHRM_WRKCP.getColumn(rowpo, "CNFIRM_AT");
        	
        	if(rowpo > -1) {		
        		if(dcsnAt == "0") {				
        			// 결재상태 COM022 (0: 기안전 1:기안 2:반송 3:취소 4:중간결재 5:결재완료)			
        			this.gfn_message("comm.결재.진행");				
        		} else {		
        			if(this.gfn_message("confirm.행위여부","결재를 취소")){	
        				this.ds_canclap.clearData();
        				var canclapRow = this.ds_canclap.addRow();	
        							
        				var enpno = this.DS_TBHRM_WRKCP.getColumn(rowpo,"EMPNO");
        				var seq = this.DS_TBHRM_WRKCP.getColumn(rowpo,"SEQ"); 				
        				
        				
        				this.ds_canclap.setColumn(canclapRow, "EMPNO", enpno)
        				this.ds_canclap.setColumn(canclapRow, "SEQ", seq )
        				
        				this.fn_transaction("canclAp");												
        			}		
        		}	
        	} else {
        		this.gfn_message("comm.데이터.선택.없음");
        	}
        }//end event
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.DS_TBHRM_WRKCP.addEventHandler("onrowposchanged", this.DS_TBHRM_WRKCP_onrowposchanged, this);
            this.DS_TBHRM_WRKCP.addEventHandler("cancolumnchange", this.DS_TBHRM_WRKCP_cancolumnchange, this);
            this.DS_TBHRM_WRKCP.addEventHandler("oncolumnchanged", this.DS_TBHRM_WRKCP_oncolumnchanged, this);
            this.ds_cond.addEventHandler("oncolumnchanged", this.ds_cond_oncolumnchanged, this);
            this.ds_cond_yryc.addEventHandler("oncolumnchanged", this.ds_cond_oncolumnchanged, this);
            this.addEventHandler("onload", this.HRM070102_onload, this);
            this.addEventHandler("oninit", this.HRM070102_oninit, this);
            this.grd_TBHRM_WRKCP.addEventHandler("oncellclick", this.div_work_grd_TBHRM_WRKCP_oncellclick, this);
            this.grd_TBHRM_WRKCP.addEventHandler("onheadclick", this.div_work_grd_TBHRM_WRKCP_onheadclick, this);
            this.grd_TBHRM_WRKCP.addEventHandler("oncelldblclick", this.grd_TBHRM_WRKCP_oncelldblclick, this);
            this.div_dtls.grd_cmmnAtchmnfl.addEventHandler("onheadclick", this.grd_cmmnAtchmnfl_onheadclick, this);
            this.div_dtls.grd_cmmnAtchmnfl.addEventHandler("oncellclick", this.grd_cmmnAtchmnfl_oncellclick, this);
            this.div_dtls.btn_delFiles.addEventHandler("onclick", this.btn_delFiles_onclick, this);
            this.div_dtls.btn_uploadFiles.addEventHandler("onclick", this.btn_uploadFiles_onclick, this);
            this.div_dtls.btn_downFiles.addEventHandler("onclick", this.btn_downFiles_onclick, this);
            this.btn_canclAp.addEventHandler("onclick", this.btn_canclAp_onclick, this);

        };

        this.loadIncludeScript("HRM070102.xfdl");
        this.loadPreloadList();
       
    };
}
)();
