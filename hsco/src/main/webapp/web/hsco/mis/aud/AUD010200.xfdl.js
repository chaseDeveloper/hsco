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
                this.set_name("AUD010200");
                this.set_classname("AUD010200");
                this.set_titletext("일상감사등록");
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
            obj._setContents("<ColumnInfo><Column id=\"REQUST_BGN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUST_END_DE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PUBLIC_AUDIT_CL\" type=\"STRING\" size=\"256\"/><Column id=\"INSTT_ACCTO_CL\" type=\"STRING\" size=\"256\"/><Column id=\"EDAY_AUDIT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rqestEdayAuditList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj.set_preload("true");
            obj._setContents("<ColumnInfo><Column id=\"EDAY_AUDIT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RCEPT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"RCEPT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUST_DE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"PUBLIC_AUDIT_CL\" type=\"STRING\" size=\"256\"/><Column id=\"INSTT_ACCTO_CL\" type=\"STRING\" size=\"256\"/><Column id=\"EDAY_AUDIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EDAY_AUDIT_CN\" type=\"STRING\" size=\"1500\"/><Column id=\"RELATE_LRG_CN\" type=\"STRING\" size=\"1500\"/><Column id=\"SANCTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_STS\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"ADTOR_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"ADTOR_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"ADTOR_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ADTOR_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EDAY_AUDIT_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"RPLY_DE\" type=\"STRING\" size=\"256\"/><Column id=\"OPINION_CN\" type=\"STRING\" size=\"1500\"/><Column id=\"MANAGT_RESULT\" type=\"STRING\" size=\"1500\"/><Column id=\"CNTRCT_JDGMN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_JDGMN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_ATCH_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"ENABLE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"READONLY\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUKIP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_MTHD\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_SE2\" type=\"STRING\" size=\"256\"/><Column id=\"BALC_SE2\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE2\" type=\"STRING\" size=\"256\"/><Column id=\"BUKIP_CODE2\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"BUKIP_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_BLCE2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GWAN_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"HANG_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"SEHANG_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"MOK_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"SEMOK_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"GWAN_CD2\" type=\"STRING\" size=\"256\"/><Column id=\"HANG_CD2\" type=\"STRING\" size=\"256\"/><Column id=\"SEHANG_CD2\" type=\"STRING\" size=\"256\"/><Column id=\"MOK_CD2\" type=\"STRING\" size=\"256\"/><Column id=\"SEMOK_CD2\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUKIP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_BLCE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GWAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HANG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEHANG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEMOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GWAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEHANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEMOK_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_aud015", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_aud014", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_EMPNO", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO_2\" type=\"STRING\" size=\"256\"/><Column id=\"OFCPS\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_validation", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">RCEPT_BGN_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">요청시작일자</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">RCEPT_END_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">요청종료일자</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">RCEPT_END_DE</Col><Col id=\"from\">RCEPT_BGN_DE</Col><Col id=\"msgId\">요청종료일자^요청시작일자</Col></Row><Row><Col id=\"compId\">ds_rqestEdayAuditList</Col><Col id=\"colId\">REQUST_DE</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col><Col id=\"type\"/><Col id=\"nlength\"/><Col id=\"from\"/><Col id=\"to\"/><Col id=\"lengthChkGb\"/><Col id=\"msgId\">요청일자</Col><Col id=\"expr\"/><Col id=\"func\"/></Row><Row><Col id=\"compId\">ds_rqestEdayAuditList</Col><Col id=\"colId\">PUBLIC_AUDIT_CL</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">공감법분류</Col><Col id=\"PK\"/></Row><Row><Col id=\"compId\">ds_rqestEdayAuditList</Col><Col id=\"colId\">INSTT_ACCTO_CL</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">기관별분류</Col></Row><Row><Col id=\"compId\">ds_rqestEdayAuditList</Col><Col id=\"colId\">DEPT_CODE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">담당자 부서</Col></Row><Row><Col id=\"compId\">ds_rqestEdayAuditList</Col><Col id=\"colId\">EMPNO</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">담당자</Col></Row><Row><Col id=\"colId\">EDAY_AUDIT_NM</Col><Col id=\"compId\">ds_rqestEdayAuditList</Col><Col id=\"msgId\">건명</Col><Col id=\"notNull\">Y</Col><Col id=\"type\"/><Col id=\"lengthChkGb\"/><Col id=\"nlength\"/></Row><Row><Col id=\"compId\">ds_rqestEdayAuditList</Col><Col id=\"colId\">EDAY_AUDIT_CN</Col><Col id=\"msgId\">사업개요</Col><Col id=\"notNull\">Y</Col><Col id=\"type\"/><Col id=\"lengthChkGb\"/><Col id=\"nlength\"/></Row><Row><Col id=\"compId\">ds_rqestEdayAuditList</Col><Col id=\"colId\">BUDGET_ACNT_CODE</Col><Col id=\"notNull\"/><Col id=\"msgId\">예산코드</Col></Row><Row><Col id=\"compId\">ds_rqestEdayAuditList</Col><Col id=\"colId\">BSNS_AMOUNT</Col><Col id=\"msgId\">사업비</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">BSNS_BGNDE</Col><Col id=\"compId\">ds_rqestEdayAuditList</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">계약시작일자</Col></Row><Row><Col id=\"colId\">BSNS_ENDDE</Col><Col id=\"compId\">ds_rqestEdayAuditList</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">계약종료일자</Col></Row><Row><Col id=\"compId\">ds_rqestEdayAuditList</Col><Col id=\"colId\">BSNS_BGNDE</Col><Col id=\"to\">BSNS_ENDDE</Col><Col id=\"lengthChkGb\"/><Col id=\"msgId\">계약시작일자^계약종료일자</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_aud016", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_aud014S", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_fileListResult", this);
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

            obj = new Dataset("ds_fileSn", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_aud015S", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_aud014G", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_aud015G", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sendMssage", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"CALLBACK\" type=\"STRING\" size=\"256\"/><Column id=\"DEST_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DEST_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MMS_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT_DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ctr030", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_uc", this);
            obj._setContents("<ColumnInfo><Column id=\"SYSTEM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"RECV_IDS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SYSTEM_NAME\">일상감사등록</Col><Col id=\"SUBJECT\">일상감사요청</Col><Col id=\"CONTENTS\">일상감사요청이 신규 등록 되었습니다. 확인 부탁드립니다.</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_SearchArea", "absolute", "0", "0", null, "59", "28", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Box");
            this.addChild(obj.name, obj);
            obj = new Static("sta_requstDe", "absolute", "15", "5", "64", "21", null, null, this.div_SearchArea);
            obj.set_taborder("6");
            obj.set_text("요청일자");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_align("left middle");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Static("sta_dept", "absolute", "334", "5", "64", "21", null, null, this.div_SearchArea);
            obj.set_taborder("7");
            obj.set_text("소관부서");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_align("left middle");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Static("sta_publicAuditCl", "absolute", "613", "5", "77", "21", null, null, this.div_SearchArea);
            obj.set_taborder("8");
            obj.set_text("공감법분류");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_align("left middle");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Combo("cmb_publicAuditCl", "absolute", "690", "5", "110", "21", null, null, this.div_SearchArea);
            this.div_SearchArea.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_innerdataset("@ds_aud014S");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj = new Static("sta_insttAcctoCl", "absolute", "815", "5", "77", "21", null, null, this.div_SearchArea);
            obj.set_taborder("9");
            obj.set_text("기관별분류");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_align("left middle");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Combo("cmb_insttAcctoCl", "absolute", "892", "5", "110", "21", null, null, this.div_SearchArea);
            this.div_SearchArea.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_innerdataset("@ds_aud015S");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj = new Static("sta_edayAuditNm", "absolute", "15", "31", "38", "21", null, null, this.div_SearchArea);
            obj.set_taborder("10");
            obj.set_text("건명");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_align("left middle");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Edit("edt_edayAuditNm", "absolute", "79", "31", "240", "21", null, null, this.div_SearchArea);
            obj.set_taborder("5");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "0", "0", "15", null, null, "0", this.div_SearchArea);
            obj.set_taborder("11");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Calendar("cal_requstBgnDe", "absolute", "79", "5", "110", "21", null, null, this.div_SearchArea);
            this.div_SearchArea.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj.set_cssclass("cal_WF_Essential");
            obj = new Static("Static02", "absolute", "194", "5", "10", "21", null, null, this.div_SearchArea);
            obj.set_taborder("12");
            obj.set_text("~");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Calendar("cal_requstEndDe", "absolute", "209", "5", "110", "21", null, null, this.div_SearchArea);
            this.div_SearchArea.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Essential");
            obj.set_value("null");
            obj = new Div("div_dept", "absolute", "398", "5", "200", "22", null, null, this.div_SearchArea);
            obj.set_taborder("2");
            obj.set_enable("false");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_async("false");
            obj.set_url("com::deptCode.xfdl");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "319", "0", "15", null, null, "0", this.div_SearchArea);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "598", "0", "15", null, null, "0", this.div_SearchArea);
            obj.set_taborder("14");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "800", "0", "15", null, null, "0", this.div_SearchArea);
            obj.set_taborder("15");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.div_SearchArea.addChild(obj.name, obj);

            obj = new Div("div_Cont", "absolute", "0", "59", null, null, "28", "0", this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            obj = new Static("Static23", "absolute", "80", null, "433", "27", null, "385", this.div_Cont);
            obj.set_taborder("92");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "592", null, "438", "27", null, "411", this.div_Cont);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "592", null, "438", "27", null, "437", this.div_Cont);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_managtResult", "absolute", "523", null, "70", "109", null, "121", this.div_Cont);
            obj.set_taborder("58");
            obj.set_text("조치의견");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_opinionCn", "absolute", "523", null, "70", "183", null, "229", this.div_Cont);
            obj.set_taborder("70");
            obj.set_text("검토내용");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "4", null, "509", "27", null, "385", this.div_Cont);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "513", "25", "10", "661", null, null, this.div_Cont);
            obj.set_taborder("44");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "80", null, "433", "27", null, "411", this.div_Cont);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_edayAuditList", "absolute", "0", "10", "150", "19", null, null, this.div_Cont);
            obj.set_taborder("30");
            obj.set_text("일상감사요청목록");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_font("bold 9 Dotum");
            obj.getSetter("titletext").set("내외부감사실시관리");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_atchFile", "absolute", "0", null, "113", "19", null, "93", this.div_Cont);
            obj.set_taborder("31");
            obj.set_text("첨부파일(요청)");
            obj.set_cssclass("sta_WF_Title03");
            obj.style.set_font("bold 9 Dotum");
            obj.getSetter("titletext").set("내외부감사실시관리");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_edayAuditRequest", "absolute", "0", null, "142", "19", null, "469", this.div_Cont);
            obj.set_taborder("32");
            obj.set_text("일상감사 요청 내역");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_font("bold 9 Dotum");
            obj.getSetter("titletext").set("내외부감사실시관리");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Grid("grd_rqestEdayAuditList", "absolute", "0", "34", null, null, "0", "498", this.div_Cont);
            obj.set_taborder("16");
            obj.set_binddataset("ds_rqestEdayAuditList");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"480\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"요청일자\"/><Cell col=\"2\" text=\"접수일자\"/><Cell col=\"3\" text=\"소관부서\"/><Cell col=\"4\" text=\"공감법분류\"/><Cell col=\"5\" text=\"기관별분류\"/><Cell col=\"6\" text=\"건명\"/><Cell col=\"7\" text=\"감사결과\"/><Cell col=\"8\" text=\"결재상태\"/></Band><Band id=\"body\"><Cell text=\"bind:EDAY_AUDIT_NO\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"none\" text=\"bind:REQUST_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"date\" text=\"bind:RCEPT_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:DEPT_NM\"/><Cell col=\"4\" displaytype=\"combo\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:PUBLIC_AUDIT_CL\" combodataset=\"ds_aud014G\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"5\" displaytype=\"combo\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:INSTT_ACCTO_CL\" combodataset=\"ds_aud015G\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"6\" edittype=\"none\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:EDAY_AUDIT_NM\" wordwrap=\"char\" tooltiptext=\"bind:EDAY_AUDIT_NM\"/><Cell col=\"7\" displaytype=\"combo\" text=\"bind:EDAY_AUDIT_RESULT\" combodataset=\"ds_aud016\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"8\" displaytype=\"image\" style=\"cursor:EXPR(expr:DRFT_STS != '1' ? 'arrow' : pointer');\" text=\"expr:SANCTN_STS == '' ? '' : comp.parent.parent.fn_get_imgUrl(SANCTN_STS)\"/></Band></Format></Formats>");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "80", null, "433", "27", null, "437", this.div_Cont);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Calendar("cal_rceptDe", "absolute", "358", null, "100", "21", null, "440", this.div_Cont);
            this.div_Cont.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj.style.set_daycolor("#333333ff");
            obj.style.set_border("1 solid #bdbdbdff");
            obj.style.set_color("#333333ff");
            obj.set_cssclass("cal_WF_Readonly");
            obj.set_readonly("true");
            obj = new Combo("cmb_publicAuditCl", "absolute", "87", null, "160", "21", null, "388", this.div_Cont);
            this.div_Cont.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_innerdataset("@ds_aud014");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.style.set_color("black");
            obj.set_cssclass("cmb_WF_Essential");
            obj.set_index("-1");
            obj = new Static("sta_insttAcctoCl", "absolute", "276", null, "80", "27", null, "385", this.div_Cont);
            obj.set_taborder("38");
            obj.set_text("기관별분류");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "83", null, "430", "27", null, "255", this.div_Cont);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Combo("cmb_insttAcctoCl", "absolute", "358", null, "130", "21", null, "388", this.div_Cont);
            this.div_Cont.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_innerdataset("@ds_aud015");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.style.set_color("black");
            obj.set_cssclass("cmb_WF_Essential");
            obj.set_index("-1");
            obj = new Static("Static11", "absolute", "83", null, "430", "27", null, "229", this.div_Cont);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_edayAuditNm", "absolute", "87", null, "424", "21", null, "232", this.div_Cont);
            obj.set_taborder("13");
            obj.style.set_color("black");
            obj.set_cssclass("edt_WF_Essential");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("150");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "83", null, "430", "67", null, "163", this.div_Cont);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "0", "0", null, "10", "0", null, this.div_Cont);
            obj.set_taborder("42");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "29", "1031", "5", null, null, this.div_Cont);
            obj.set_taborder("43");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Div("div_sear", "fixed", "177", null, "170", "21", null, "258", this.div_Cont);
            obj.set_taborder("12");
            obj.set_text("Div00");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_empno", "fixed", "22", null, "87", "21", null, "0", this.div_Cont.div_sear);
            obj.set_taborder("0");
            obj.set_maxlength("8");
            obj.style.set_color("black");
            obj.style.set_align("left middle");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            obj.set_cssclass("edt_WF_Essential");
            this.div_Cont.div_sear.addChild(obj.name, obj);
            obj = new Button("search", "absolute", "28", null, "141", "21", null, "0", this.div_Cont.div_sear);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Search");
            this.div_Cont.div_sear.addChild(obj.name, obj);
            obj = new Edit("edt_emplnm", "fixed", "111", null, "59", "21", null, "0", this.div_Cont.div_sear);
            obj.set_taborder("1");
            obj.style.set_color("black");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            obj.set_cssclass("edt_WF_Essential");
            this.div_Cont.div_sear.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "83", null, "430", "27", null, "359", this.div_Cont);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_bsnsCode", "absolute", "87", null, "75", "21", null, "362", this.div_Cont);
            obj.set_taborder("20");
            obj.style.set_color("black");
            obj.set_tabstop("false");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_bsnsNm", "absolute", "164", null, "110", "21", null, "362", this.div_Cont);
            obj.set_taborder("21");
            obj.style.set_color("black");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Button("btn_bsnsCode", "absolute", "141", null, "20", "21", null, "362", this.div_Cont);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Search");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0px", "0px", "0px", "0px", null, null, this.div_Cont);
            obj.set_taborder("47");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_deptNm", "absolute", "87", null, "110", "21", null, "258", this.div_Cont);
            obj.set_taborder("22");
            obj.set_autoskip("false");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Essential");
            obj.set_tabstop("false");
            this.div_Cont.addChild(obj.name, obj);
            obj = new TextArea("txt_edayAuditCn", "absolute", "87", null, "424", "61", null, "166", this.div_Cont);
            obj.set_taborder("14");
            obj.set_wordwrap("char");
            obj.style.set_color("black");
            obj.set_cssclass("txt_WF_Essential");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("1500");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Button("btn_downFiles", "absolute", "428", null, "85", "19", null, "93", this.div_Cont);
            obj.set_taborder("26");
            obj.set_text("선택다운로드");
            obj.set_cssclass("btn_WF_Process");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Button("btn_uploadFiles", "absolute", "357", null, "68", "19", null, "93", this.div_Cont);
            obj.set_taborder("25");
            obj.set_text("파일업로드");
            obj.set_cssclass("btn_WF_Process");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Button("btn_delFiles", "absolute", "287", null, "67", "19", null, "93", this.div_Cont);
            obj.set_taborder("24");
            obj.set_text("선택삭제");
            obj.set_cssclass("btn_WF_Process");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Grid("grd_cmmnAtchmnfl", "absolute", "0", null, "513", "88", null, "0", this.div_Cont);
            obj.set_taborder("27");
            obj.set_binddataset("ds_fileList");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"65\"/><Column size=\"245\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"파일형식\"/><Cell col=\"2\" celltype=\"head\" text=\"파일명\"/><Cell col=\"3\" text=\"확장자\"/><Cell col=\"4\" text=\"사이즈\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"image\" text=\"bind:FILE_IMAGE\"/><Cell col=\"2\" displaytype=\"normal\" style=\"align:left middle;\" text=\"bind:ORGINL_FILE_NM\"/><Cell col=\"3\" text=\"bind:FILE_EXTSN\"/><Cell col=\"4\" text=\"bind:FILE_MG\"/></Band></Format></Formats>");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "0px", "0px", "0px", "0px", null, null, this.div_Cont);
            obj.set_taborder("49");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_rceptDe", "absolute", "276", null, "80", "27", null, "437", this.div_Cont);
            obj.set_taborder("34");
            obj.set_text("접수일자");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Grid("grd_cmmnAtchmnflResult", "absolute", "523", null, "508", "88", null, "0", this.div_Cont);
            obj.set_taborder("29");
            obj.set_binddataset("ds_fileListResult");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"65\"/><Column size=\"240\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"파일형식\"/><Cell col=\"2\" celltype=\"head\" text=\"파일명\"/><Cell col=\"3\" text=\"확장자\"/><Cell col=\"4\" text=\"사이즈\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"image\" text=\"bind:FILE_IMAGE\"/><Cell col=\"2\" displaytype=\"normal\" style=\"align:left middle;\" text=\"bind:ORGINL_FILE_NM\"/><Cell col=\"3\" text=\"bind:FILE_EXTSN\"/><Cell col=\"4\" text=\"bind:FILE_MG\"/></Band></Format></Formats>");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Button("btn_downFilesResult", "absolute", "946", null, "85", "19", null, "93", this.div_Cont);
            obj.set_taborder("28");
            obj.set_text("선택다운로드");
            obj.set_cssclass("btn_WF_Process");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_atchFile00", "absolute", "523", null, "113", "19", null, "93", this.div_Cont);
            obj.set_taborder("51");
            obj.set_text("첨부파일(결과)");
            obj.set_cssclass("sta_WF_Title03");
            obj.style.set_font("bold 9 Dotum");
            obj.getSetter("titletext").set("내외부감사실시관리");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", "207", null, "5", "0", null, this.div_Cont);
            obj.set_taborder("52");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "0", "178", null, "10", "0", null, this.div_Cont);
            obj.set_taborder("53");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_edayAuditResult", "absolute", "525", null, "142", "19", null, "469", this.div_Cont);
            obj.set_taborder("54");
            obj.set_text("일상감사 감사결과");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_font("bold 9 Dotum");
            obj.getSetter("titletext").set("내외부감사실시관리");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_auditResult", "absolute", "523", null, "70", "27", null, "411", this.div_Cont);
            obj.set_taborder("55");
            obj.set_text("감사결과");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Combo("cmb_edayAuditResult", "absolute", "595", null, "155", "21", null, "414", this.div_Cont);
            this.div_Cont.addChild(obj.name, obj);
            obj.set_taborder("57");
            obj.set_readonly("true");
            obj.set_innerdataset("@ds_aud016");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.style.setStyleValue("color", "disabled", "black");
            obj.set_tabstop("false");
            obj = new Static("Static16", "absolute", "592", null, "439", "109", null, "121", this.div_Cont);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_Cont.addChild(obj.name, obj);
            obj = new TextArea("txt_managtResult", "absolute", "595", null, "432", "103", null, "124", this.div_Cont);
            obj.set_taborder("60");
            obj.set_wordwrap("char");
            obj.set_readonly("true");
            obj.set_cssclass("txt_WF_Readonly");
            obj.set_tabstop("false");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_adtor", "absolute", "523", null, "70", "27", null, "437", this.div_Cont);
            obj.set_taborder("61");
            obj.set_text("감사자");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_adtorEmpno", "fixed", "707", null, "87", "21", null, "440", this.div_Cont);
            obj.set_taborder("63");
            obj.set_maxlength("8");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_color("black");
            obj.style.set_align("left middle");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_adtorEmpnm", "fixed", "796", null, "59", "21", null, "440", this.div_Cont);
            obj.set_taborder("64");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_color("black");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_adtorDeptNm", "fixed", "595", null, "110", "21", null, "440", this.div_Cont);
            obj.set_taborder("65");
            obj.set_maxlength("8");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_color("black");
            obj.style.set_align("left middle");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_rplyDe", "absolute", "752", null, "70", "27", null, "411", this.div_Cont);
            obj.set_taborder("66");
            obj.set_text("회신일자");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Calendar("cal_rplyDe", "absolute", "824", null, "100", "21", null, "414", this.div_Cont);
            this.div_Cont.addChild(obj.name, obj);
            obj.set_taborder("67");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Readonly");
            obj.style.setStyleValue("daycolor", "disabled", "black");
            obj.set_tabstop("false");
            obj = new Static("Static15", "absolute", "592", null, "438", "183", null, "229", this.div_Cont);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_Cont.addChild(obj.name, obj);
            obj = new TextArea("txt_opinionCn", "absolute", "595", null, "432", "177", null, "232", this.div_Cont);
            obj.set_taborder("68");
            obj.set_wordwrap("char");
            obj.set_readonly("true");
            obj.set_cssclass("txt_WF_Readonly");
            obj.style.setStyleValue("color", "disabled", "black");
            obj.set_tabstop("false");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_bsnsAmount", "absolute", "276", null, "80", "27", null, "359", this.div_Cont);
            obj.set_taborder("71");
            obj.set_text("사업비");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new MaskEdit("msk_bsnsAmount", "absolute", "358", null, "153", "21", null, "362", this.div_Cont);
            obj.set_taborder("7");
            obj.style.set_color("black");
            obj.set_mask("###,###,###,###,###");
            obj.set_limitbymask("integer");
            obj.set_cssclass("msk_WF_Essential");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Button("btn_OPINION_REPORT", "absolute", "975", null, "55", "50", null, "413", this.div_Cont);
            obj.set_taborder("23");
            obj.set_text("의견서\r\n출력");
            obj.set_cssclass("btn_WF_Process");
            obj.set_visible("false");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "555", null, "10", "0", null, this.div_Cont);
            obj.set_taborder("72");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "0", "583", null, "5", "0", null, this.div_Cont);
            obj.set_taborder("73");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_cntrctJdgmnNo", "absolute", "87", null, "60", "21", null, "414", this.div_Cont);
            obj.set_taborder("17");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_cntrctJdgmnYear", "absolute", "149", null, "60", "21", null, "414", this.div_Cont);
            obj.set_taborder("18");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_cntrctNm", "absolute", "211", null, "150", "21", null, "414", this.div_Cont);
            obj.set_taborder("19");
            obj.set_tabstop("false");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Button("btn_cntrctJdgmn", "absolute", "340", null, "20", "21", null, "414", this.div_Cont);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Search");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "83", null, "430", "43", null, "121", this.div_Cont);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_Cont.addChild(obj.name, obj);
            obj = new TextArea("txt_relateLrgCn", "absolute", "87", null, "424", "37", null, "124", this.div_Cont);
            obj.set_taborder("15");
            obj.set_wordwrap("char");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("1500");
            obj.style.set_color("black");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_bsns", "absolute", "0", null, "85", "27", null, "359", this.div_Cont);
            obj.set_taborder("45");
            obj.set_text("사업코드");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_requstDe", "absolute", "0", null, "85", "27", null, "437", this.div_Cont);
            obj.set_taborder("48");
            obj.set_text("요청일자");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_publicAuditCl01", "absolute", "0", null, "85", "27", null, "411", this.div_Cont);
            obj.set_taborder("74");
            obj.set_text("계약심사");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_relateLrgCn", "absolute", "0", null, "85", "43", null, "121", this.div_Cont);
            obj.set_taborder("75");
            obj.set_text("관련법규\r\n내용");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_publicAuditCl", "absolute", "0", null, "85", "27", null, "385", this.div_Cont);
            obj.set_taborder("36");
            obj.set_text("공감법분류");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_edayAuditCn", "absolute", "0", null, "85", "67", null, "163", this.div_Cont);
            obj.set_taborder("40");
            obj.set_text("사업개요");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Calendar("cal_requstDe", "absolute", "87", null, "100", "21", null, "440", this.div_Cont);
            this.div_Cont.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Essential");
            obj.style.set_daycolor("#333333ff");
            obj.style.set_border("1 solid #bdbdbdff");
            obj.style.set_color("#333333ff");
            obj = new Button("btn_sendMssage", "absolute", "433", null, "80", "19", null, "469", this.div_Cont);
            obj.set_taborder("77");
            obj.set_text("메시지전송");
            obj.set_cssclass("btn_WF_Process");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_nm", "absolute", "0", null, "85", "27", null, "255", this.div_Cont);
            obj.set_taborder("78");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_edayAuditNm", "absolute", "0", null, "85", "27", null, "229", this.div_Cont);
            obj.set_taborder("79");
            obj.set_text("건명");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "83", null, "430", "27", null, "307", this.div_Cont);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_budgetAcntCode", "absolute", "87", null, "81", "21", null, "310", this.div_Cont);
            obj.set_taborder("81");
            obj.set_tabstop("false");
            obj.style.set_color("black");
            obj.set_readonly("true");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_budgetAcntNm", "absolute", "170", null, "104", "21", null, "310", this.div_Cont);
            obj.set_taborder("82");
            obj.style.set_color("black");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Button("btn_bdgAcntPop", "absolute", "149", null, "20", "21", null, "310", this.div_Cont);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_Search");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_bukipCode", "absolute", "276", null, "80", "27", null, "307", this.div_Cont);
            obj.set_taborder("83");
            obj.set_text("부기코드");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_budgetAcntCode", "absolute", "0", null, "85", "27", null, "307", this.div_Cont);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("예산코드");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_bukipCode", "absolute", "358", null, "56", "21", null, "310", this.div_Cont);
            obj.set_taborder("85");
            obj.set_tabstop("false");
            obj.style.set_color("black");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_bukipNm", "absolute", "416", null, "95", "21", null, "310", this.div_Cont);
            obj.set_taborder("86");
            obj.style.set_color("black");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "83", null, "430", "27", null, "333", this.div_Cont);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_bsnsBgnde", "absolute", "0", null, "85", "27", null, "333", this.div_Cont);
            obj.set_taborder("87");
            obj.set_text("계약기간");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Calendar("cal_bsnsBgnde", "absolute", "87", null, "100", "21", null, "336", this.div_Cont);
            this.div_Cont.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_readonly("false");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_daycolor("#333333ff");
            obj.style.set_border("1 solid #bdbdbdff");
            obj.style.set_color("#333333ff");
            obj.set_cssclass("cal_WF_Essential");
            obj = new Calendar("cal_bsnsEndde", "absolute", "207", null, "100", "21", null, "336", this.div_Cont);
            this.div_Cont.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_readonly("false");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_daycolor("#333333ff");
            obj.style.set_border("1 solid #bdbdbdff");
            obj.style.set_color("#333333ff");
            obj.set_cssclass("cal_WF_Essential");
            obj = new Static("sta_cntrctMthd", "absolute", "363", null, "85", "27", null, "411", this.div_Cont);
            obj.set_taborder("94");
            obj.set_text("계약방식");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Combo("cmb_cntrctMthd", "absolute", "450", null, "61", "21", null, "414", this.div_Cont);
            this.div_Cont.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("@ds_ctr030");
            obj = new Static("Static24", "absolute", "187", null, "20", "21", null, "336", this.div_Cont);
            obj.set_taborder("100");
            obj.set_text("~");
            obj.style.set_align("center");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static25", "absolute", "83", null, "430", "27", null, "281", this.div_Cont);
            obj.set_taborder("101");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_budgetAcntCode2", "absolute", "87", null, "81", "21", null, "284", this.div_Cont);
            obj.set_taborder("102");
            obj.set_tabstop("false");
            obj.set_readonly("false");
            obj.style.set_color("black");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_budgetAcntNm2", "absolute", "170", null, "104", "21", null, "284", this.div_Cont);
            obj.set_taborder("103");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_color("black");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Button("btn_bdgAcntPop2", "absolute", "149", null, "20", "21", null, "284", this.div_Cont);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_Search");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_bukipCode2", "absolute", "276", null, "80", "27", null, "281", this.div_Cont);
            obj.set_taborder("105");
            obj.set_text("부기코드");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_budgetAcntCode2", "absolute", "0", null, "85", "27", null, "281", this.div_Cont);
            obj.set_taborder("106");
            obj.set_text("예산코드");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_bukipCode2", "absolute", "358", null, "56", "21", null, "284", this.div_Cont);
            obj.set_taborder("107");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_color("black");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_bukipNm2", "absolute", "416", null, "95", "21", null, "284", this.div_Cont);
            obj.set_taborder("108");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_color("black");
            this.div_Cont.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", null, "0", "13", "735", "0", null, this);
            obj.set_taborder("3");
            obj.set_text("스\r\n크\r\n롤\r\n13");
            obj.set_visible("false");
            obj.style.set_background("#d07b173c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "1031", "0", "15", "735", null, null, this);
            obj.set_taborder("4");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 59, this.div_SearchArea,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WFSA_Box");

            	}
            );
            this.div_SearchArea.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 170, 21, this.div_Cont.div_sear,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("12");
            		p.set_text("Div00");

            	}
            );
            this.div_Cont.div_sear.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1031, 735, this.div_Cont,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");

            	}
            );
            this.div_Cont.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1059, 735, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AUD010200");
            		p.set_titletext("일상감사등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item20","div_Cont.txt_opinionCn","value","ds_rqestEdayAuditList","OPINION_CN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","div_Cont.txt_edayAuditCn","value","ds_rqestEdayAuditList","EDAY_AUDIT_CN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","div_Cont.div_sear.edt_emplnm","value","ds_rqestEdayAuditList","EMPNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","div_Cont.div_sear.edt_empno","value","ds_rqestEdayAuditList","EMPNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_Cont.cal_rceptDe","value","ds_rqestEdayAuditList","RCEPT_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div_Cont.edt_edayAuditNm","value","ds_rqestEdayAuditList","EDAY_AUDIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","div_SearchArea.cmb_publicAuditCl","value","ds_cond","PUBLIC_AUDIT_CL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","div_SearchArea.cmb_insttAcctoCl","value","ds_cond","INSTT_ACCTO_CL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","div_SearchArea.edt_edayAuditNm","value","ds_cond","EDAY_AUDIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_Cont.cmb_publicAuditCl","value","ds_rqestEdayAuditList","PUBLIC_AUDIT_CL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_Cont.cmb_insttAcctoCl","value","ds_rqestEdayAuditList","INSTT_ACCTO_CL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","div_Cont.edt_bsnsCode","value","ds_rqestEdayAuditList","BSNS_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","div_Cont.edt_bsnsNm","value","ds_rqestEdayAuditList","BSNS_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","div_SearchArea.cal_requstBgnDe","value","ds_cond","REQUST_BGN_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","div_SearchArea.cal_requstEndDe","value","ds_cond","REQUST_END_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_Cont.edt_deptNm","value","ds_rqestEdayAuditList","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","div_Cont.cmb_edayAuditResult","value","ds_rqestEdayAuditList","EDAY_AUDIT_RESULT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","div_Cont.txt_managtResult","value","ds_rqestEdayAuditList","MANAGT_RESULT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","div_Cont.edt_adtorEmpno","value","ds_rqestEdayAuditList","ADTOR_EMPNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","div_Cont.edt_adtorEmpnm","value","ds_rqestEdayAuditList","ADTOR_EMPNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","div_Cont.edt_adtorDeptNm","value","ds_rqestEdayAuditList","ADTOR_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","div_Cont.cal_rplyDe","value","ds_rqestEdayAuditList","RPLY_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","div_Cont.msk_bsnsAmount","value","ds_rqestEdayAuditList","BSNS_AMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_Cont.edt_cntrctJdgmnNo","value","ds_rqestEdayAuditList","CNTRCT_JDGMN_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","div_Cont.edt_cntrctJdgmnYear","value","ds_rqestEdayAuditList","CNTRCT_JDGMN_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","div_Cont.edt_cntrctNm","value","ds_rqestEdayAuditList","CNTRCT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","div_Cont.txt_relateLrgCn","value","ds_rqestEdayAuditList","RELATE_LRG_CN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","div_Cont.cal_requstDe","value","ds_rqestEdayAuditList","REQUST_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","div_Cont.cal_requstDe","readonly","ds_rqestEdayAuditList","READONLY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","div_Cont.btn_cntrctJdgmn","visible","ds_rqestEdayAuditList","ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","div_Cont.cmb_publicAuditCl","readonly","ds_rqestEdayAuditList","READONLY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","div_Cont.cmb_insttAcctoCl","readonly","ds_rqestEdayAuditList","READONLY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","div_Cont.edt_bsnsNm","readonly","ds_rqestEdayAuditList","READONLY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","div_Cont.btn_bsnsCode","visible","ds_rqestEdayAuditList","ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","div_Cont.msk_bsnsAmount","readonly","ds_rqestEdayAuditList","READONLY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","div_Cont.div_sear.search","visible","ds_rqestEdayAuditList","ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","div_Cont.edt_edayAuditNm","readonly","ds_rqestEdayAuditList","READONLY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","div_Cont.txt_edayAuditCn","readonly","ds_rqestEdayAuditList","READONLY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","div_Cont.txt_relateLrgCn","readonly","ds_rqestEdayAuditList","READONLY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","div_Cont.btn_delFiles","enable","ds_rqestEdayAuditList","ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","div_Cont.btn_uploadFiles","enable","ds_rqestEdayAuditList","ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","div_Cont.edt_cntrctNm","readonly","ds_rqestEdayAuditList","READONLY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","div_Cont.edt_bsnsCode","readonly","ds_rqestEdayAuditList","READONLY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","div_Cont.edt_budgetAcntCode","value","ds_rqestEdayAuditList","BUDGET_ACNT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item46","div_Cont.edt_budgetAcntNm","value","ds_rqestEdayAuditList","BUDGET_ACNT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item48","div_Cont.btn_bdgAcntPop","visible","ds_rqestEdayAuditList","ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item49","div_Cont.edt_bukipCode","value","ds_rqestEdayAuditList","BUKIP_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item51","div_Cont.edt_bukipNm","value","ds_rqestEdayAuditList","BUKIP_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item53","div_Cont.cal_bsnsBgnde","value","ds_rqestEdayAuditList","BSNS_BGNDE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item54","div_Cont.cal_bsnsEndde","value","ds_rqestEdayAuditList","BSNS_ENDDE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","div_Cont.cmb_cntrctMthd","value","ds_rqestEdayAuditList","CNTRCT_MTHD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item50","div_Cont.cal_bsnsBgnde","readonly","ds_rqestEdayAuditList","READONLY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item52","div_Cont.cal_bsnsEndde","readonly","ds_rqestEdayAuditList","READONLY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item55","div_Cont.cmb_cntrctMthd","readonly","ds_rqestEdayAuditList","READONLY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item45","div_Cont.edt_budgetAcntCode2","value","ds_rqestEdayAuditList","BUDGET_ACNT_CODE2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item56","div_Cont.edt_budgetAcntNm2","value","ds_rqestEdayAuditList","BUDGET_ACNT_NM2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item57","div_Cont.edt_budgetAcntNm2","readonly","ds_rqestEdayAuditList","READONLY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item58","div_Cont.btn_bdgAcntPop2","visible","ds_rqestEdayAuditList","ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item59","div_Cont.edt_bukipCode2","value","ds_rqestEdayAuditList","BUKIP_CODE2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item60","div_Cont.edt_bukipNm2","value","ds_rqestEdayAuditList","BUKIP_NM2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item47","div_Cont.edt_budgetAcntCode2","readonly","ds_rqestEdayAuditList","READONLY");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data", "", "ds_rqestEdayAuditList");
            this._addPreloadList("fdl", "com::deptCode.xfdl");
        };
        
        // User Script
        this.addIncludeScript("AUD010200.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("AUD010200.xfdl", "mis_lib::misUtil.xjs");
        this.addIncludeScript("AUD010200.xfdl", "lib::comUpDownUtils.xjs");
        this.registerScript("AUD010200.xfdl", function() {
        /***********************************************************************
         * 화면ID    : AUD010200.xfdl
         * 화면명    : 일상감사등록(요청)
         * 화면설명  : 일상감사를 등록(요청)하는 화면.
         * 작성일    : 2015.11.02
         * 작성자    : 이지영
         * 수정이력  : 
         ***********************************************************************
         *     수정일     수정자   내용
         ***********************************************************************
         *    2016.04.22	이수지		전자결재
         ***********************************************************************/
         
        /***********************************************************************
         * Script Include 
         ***********************************************************************/
        //include "lib::comInclude.xjs";
        //include "mis_lib::misUtil.xjs";
        //include "lib::comUpDownUtils.xjs";

        /***********************************************************************
         * 화면 변수 선언부
         ***********************************************************************/
        //저장시 rowposition값 저장할 변수
        var save_row = -1;
        this.File_UpDownManager = null;
        this.chargerAt = false;

        /***********************************************************************
         * onInit 영역
         ***********************************************************************/
        this.AUD010200_oninit = function(obj,e)
        {
        	// todo..
        }

        /***********************************************************************
         * onLoad 영역
         ***********************************************************************/
        this.AUD010200_onload = function(obj,e)
        {
        	// Form 초기화
        	this.fn_init_form();

        	// DataSet 초기화
        	this.fn_init_dataset();
        }

        /**********************************************************************
        * Form 오브젝트 초기화
        ***********************************************************************/
        this.fn_init_form = function()
        {
        	this.gfn_initForm(this);	// 시스템 공통으로 Form을 Initialize 한다.
        	this.fn_misFormInit(this);
        	
        	this.ds_cond.clearData();
        	var nRow = this.ds_cond.addRow();
        	
        	this.div_SearchArea.div_dept.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");
        	this.ds_cond.setColumn(nRow, "REQUST_BGN_DE", this.gfn_today().substring(0,4) + '0101');
        	this.ds_cond.setColumn(nRow, "REQUST_END_DE", this.gfn_today());
        	
        	var comboParams = [["ds_aud014" , "AUD014", 1, ""],			// 공감법분류
        	                   ["ds_aud015" , "AUD015", 1, ""], 		// 기관별분류
        	                   ["ds_aud014S", "AUD014", 1, "전체"],		// 공감법분류(조회용)
        	                   ["ds_aud015S", "AUD015", 1, "전체"],		// 기관별분류(조회용)
        	                   ["ds_aud014G", "AUD014", 1, ""],			// 공감법분류(그리드용)
        	                   ["ds_aud015G", "AUD015", 1, ""],			// 기관별분류(그리드용)
        	                   ["ds_aud016" , "AUD016", 1, ""],			// 감사결과
        	                   ["ds_ctr030" , "CTR030", 1, ""],			// 계약방식
        		              ];
        	var callback = function (svcId, errorCode, errorMsg) {
        		// 권한그룹 체크
        		if(this.gfn_authGrpId("AUD_ADMIN") != -1) {			// 감사담당자
        			this.chargerAt = true;
        		}
        		
        		if(this.chargerAt) {
        			this.div_SearchArea.div_dept.set_enable(true);
        		}
        		else {
        			this.ds_cond.setColumn(0, "DEPT_CODE", this.gfn_getDeptId());
        			this.ds_cond.setColumn(0, "DEPT_NM",   this.gfn_getDeptName());
        		}
        		
        	 	this.fn_search();
        	};
        	this.gfn_comboLoad (comboParams, callback);
        }

        /**********************************************************************
        * Dataset 오브젝트 초기화
        ***********************************************************************/
        this.fn_init_dataset = function()
        {
        	  var fileConfig = {
              useMultiUpload : true,
              onChange: this.fn_onFileSelected,   // 파일 선택 이벤트 핸들러
              onSuccess : this.fn_onFileSuccess   // 전송 성공 이벤트 핸들러
           };
           this.File_UpDownManager = new this.fileUpDownManager(this, "MIS", "AUD");
           this.File_UpDownManager.init(fileConfig);
        }
        /***********************************************************************
        * 상단 조회처리
        ************************************************************************/
        this.fn_search = function()
        {
        	// validation 체크(요청일자)
        	if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond, this.ds_validation)) {
        		return;
        	}
        	
        	this.ds_rqestEdayAuditList.clearData();
        	this.ds_fileList.clearData();
        	
        	this.fn_transaction("selectReqstEdayAuditList");
        }
        /***********************************************************************
        * 상단 저장처리
        ************************************************************************/
        this.fn_save = function()
        {
        	//validation check
        	if(!this.gfn_checkValidation(this.ds_rqestEdayAuditList, this.ds_validation)){
        		return;
        	}
        	if(this.gfn_message("confirm.저장.여부")){
        		save_row = this.ds_rqestEdayAuditList.rowposition;
        		this.fn_transaction("reqstEdayAuditListCUD");
        	}
        }

        /**********************************************************************
         * CALL TRANSACTION 영역
         **********************************************************************/ 
        this.fn_transaction = function(strSvcId)
        {
        	switch (strSvcId) {
        		//일상감사요청목록 조회
        		case "selectReqstEdayAuditList":
        			var sController   	= "/hsco/mis/aud/AUD010200/selectReqstEdayAuditList.do";
        			var sInDatasets   	= "input01=ds_cond";
        			var sOutDatasets  	= "ds_rqestEdayAuditList=output01";
        		break;	
        		
        		//일상감사요청목록 CUD
        		case "reqstEdayAuditListCUD":
        			var sController   	= "hsco/mis/aud/AUD010200/reqstEdayAuditListCUD.do";
        			var sInDatasets   	= "input02=ds_rqestEdayAuditList:U";
        			var sOutDatasets  	= "";
        		break;
        		
        		//첨부파일조회(요청)
        		case "selectAtchFile":
        			this.div_Cont.grd_cmmnAtchmnfl.setCellProperty("head", 0, "text", "0");
        			this.ds_fileSn.clearData();
        			this.ds_fileSn.addRow();
        			this.ds_fileSn.setColumn(0, "FILE_SN", this.ds_rqestEdayAuditList.getColumn(this.ds_rqestEdayAuditList.rowposition, "ATCH_FILE"));	// 재조회목적(좋은 방법은 아니지만, 공통을 최대한 안바꾸려면)
        			var sController  = "/hsco/cmm/file/selectAtchmnFileList.do";
        			var sInDatasets  = "input1=ds_fileSn";
        			var sOutDatasets = "ds_fileList=output1";
        		break;
        		
        		//첨부파일조회(결과)
        		case "resultSelectAtchFile":
        			this.div_Cont.grd_cmmnAtchmnflResult.setCellProperty("head", 0, "text", "0");
        			this.ds_fileSn.clearData();
        			this.ds_fileSn.addRow();
        			this.ds_fileSn.setColumn(0, "FILE_SN", this.ds_rqestEdayAuditList.getColumn(this.ds_rqestEdayAuditList.rowposition, "RESULT_ATCH_FILE"));	// 재조회목적(좋은 방법은 아니지만, 공통을 최대한 안바꾸려면)
        			var sController  = "/hsco/cmm/file/selectAtchmnFileList.do";
        			var sInDatasets  = "input1=ds_fileSn";
        			var sOutDatasets = "ds_fileListResult=output1";
        		break;
        		
        		// 메시지전송
        		case "sendMessage":
        			var sController   	= "hsco/mis/aud/AUD010200/sendMessage.do";
        			var sInDatasets   	= "input1=ds_uc";
        			var sOutDatasets  	= "";
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
        		switch(strSvcId)
        		{
        			//상단 저장 콜백
        			case "reqstEdayAuditListCUD" :
        				this.gfn_message("success.처리.성공");
        				this.fn_search();
        				break;			
        				
        			//상단 조회 콜백 
        			case "selectReqstEdayAuditList":
        				//저장트랜잭션 직전 rowposition값으로 이동
        				if(save_row != -1)
        				{
        					this.ds_rqestEdayAuditList.set_rowposition(save_row);
        					save_row = -1;
        				}
        			break;
        			
        			//첨부파일 콜백
        			case "selectAtchFile":
        				this.fn_transaction("resultSelectAtchFile");
        			break;
        			
        			// 문자전송
        			case "sendMessage" :
        				this.gfn_message("success.처리.성공");
        				break;	
        		}
        	}
        }

        /***********************************************************************
        * 상단 신규
        ************************************************************************/
        this.fn_insert = function()
        {
        	this.ds_fileList.clearData();
        	this.ds_fileListResult.clearData();
        	
        	this.ds_rqestEdayAuditList.set_enableevent(false);
        	this.ds_rqestEdayAuditList.set_rowposition(-1);
        	var nRow = this.ds_rqestEdayAuditList.insertRow(0);
        	this.ds_rqestEdayAuditList.set_enableevent(true);
        	this.ds_rqestEdayAuditList.set_rowposition(0);
        	this.ds_rqestEdayAuditList.setColumn(nRow, "REQUST_DE" , this.gfn_today());
        	this.ds_rqestEdayAuditList.setColumn(nRow, "RCEPT_YEAR", this.gfn_today().substring(0,4));
        	this.ds_rqestEdayAuditList.setColumn(nRow, "DEPT_CODE" , this.gfn_getDeptId());
        	this.ds_rqestEdayAuditList.setColumn(nRow, "DEPT_NM"   , this.gfn_getDeptName());
        	this.ds_rqestEdayAuditList.setColumn(nRow, "EMPNO"     , this.gfn_getEmpNo());
        	this.ds_rqestEdayAuditList.setColumn(nRow, "EMPNM"     , this.gfn_getUserName());
        	this.ds_rqestEdayAuditList.setColumn(nRow, "SANCTN_STS", "0");
        }

        /***********************************************************************
        * 상단삭제
        ************************************************************************/
        this.fn_delete = function()
        {
        	var nRow = this.ds_rqestEdayAuditList.rowposition;
        	var sanctnSts = this.ds_rqestEdayAuditList.getColumn(nRow, "SANCTN_STS");
        	
        	if(['1','4','5'].indexOf(sanctnSts) > -1) {
        		this.gfn_message("fail.삭제.불가", "결재가 진행중이거나 완료된 건은")
        	} else{
        		if(!this.gfn_message("confirm.삭제여부")) {
        			return false;	// 아니오
        		}
        		
        		this.ds_rqestEdayAuditList.deleteRow(nRow);
        	}
        }

        /***********************************************************************
        * 상단취소
        ************************************************************************/
        this.fn_cancel = function()
        {
        	if(!this.comUtils.isDatasetUpdated(this.ds_rqestEdayAuditList))
        	{
        		this.gfn_message("comm.내역.변경.없음");
        	}else{
        		if(this.gfn_message("confirm.취소여부")){
        			this.ds_rqestEdayAuditList.reset();		//DATASET ROLLBACK
        			this.ds_rqestEdayAuditList.applyChange();	//DATASET COMMIT
        			return;
        		}
        	}
        }

        /***********************************************************************
        * 헤드 정렬
        ************************************************************************/
        this.div_Cont_grd_rqestEdayAuditList_onheadclick = function(obj,e)
        {
        	  this.gfn_gridSort(obj, e); // Grid 데이터 정렬
        }

        /***********************************************************************************
        * 설명	: 일상감사요청목록 행 변경 시
        ***********************************************************************************/
        this.ds_rqestEdayAuditList_onrowposchanged = function(obj,e)
        {
        	this.ds_fileList.clearData();
        	this.ds_fileListResult.clearData();
        	
        	if(e.newrow > -1) {
        		var sanctnSts = obj.getColumn(e.newrow, "SANCTN_STS");
        		var readonlyFlag = true;
        		var publicAuditCl = obj.getColumn(e.newrow, "PUBLIC_AUDIT_CL");
        		this.ds_aud015.filter("String(VAL1).indexOf('" + publicAuditCl + "') >= 0");
        		
        		if(obj.getRowType(e.newrow) == Dataset.ROWTYPE_INSERT || sanctnSts == "0" || this.comUtils.isNull(sanctnSts)) {
        			readonlyFlag = false;
        		}
        		
        		if(!readonlyFlag) {
        			obj.set_enableevent(false);
        			obj.set_updatecontrol(false);
        			obj.setColumn(e.newrow, "ENABLE_AT", "1");
        			obj.setColumn(e.newrow, "READONLY" , "0");
        			obj.set_enableevent(true);
        			obj.set_updatecontrol(true);
        			
        			this.div_Cont.cal_requstDe.set_cssclass("cal_WF_Essential");
        			this.div_Cont.edt_cntrctNm.set_cssclass("");
        			this.div_Cont.cmb_publicAuditCl.set_cssclass("cmb_WF_Essential");
        			this.div_Cont.cmb_insttAcctoCl.set_cssclass("cmb_WF_Essential");
        			this.div_Cont.edt_bsnsCode.set_cssclass("");
        			this.div_Cont.edt_bsnsNm.set_cssclass("");
        			this.div_Cont.msk_bsnsAmount.set_cssclass("msk_WF_Essential");
        			this.div_Cont.edt_deptNm.set_cssclass("edt_WF_Essential");
        			this.div_Cont.div_sear.edt_empno.set_cssclass("edt_WF_Essential");
        			this.div_Cont.div_sear.edt_emplnm.set_cssclass("edt_WF_Essential");
        			this.div_Cont.edt_edayAuditNm.set_cssclass("edt_WF_Essential");
        			this.div_Cont.txt_edayAuditCn.set_cssclass("txt_WF_Essential");
        			this.div_Cont.txt_relateLrgCn.set_cssclass("");
        			this.div_Cont.cal_bsnsBgnde.set_cssclass("cal_WF_Essential");
        			this.div_Cont.cal_bsnsEndde.set_cssclass("cal_WF_Essential");
        			this.div_Cont.edt_budgetAcntCode.set_cssclass("");
        			this.div_Cont.cmb_cntrctMthd.set_cssclass("");
        			this.div_Cont.edt_budgetAcntCode2.set_cssclass("");
        		}
        		else {
        			obj.set_enableevent(false);
        			obj.set_updatecontrol(false);
        			obj.setColumn(e.newrow, "ENABLE_AT", "0");
        			obj.setColumn(e.newrow, "READONLY" , "1");
        			obj.set_enableevent(true);
        			obj.set_updatecontrol(true);
        			
        			this.div_Cont.cal_requstDe.set_cssclass("cal_WF_Readonly");
        			this.div_Cont.edt_cntrctNm.set_cssclass("edt_WF_Readonly");
        			this.div_Cont.cmb_publicAuditCl.set_cssclass("cmb_WF_Readonly");
        			this.div_Cont.cmb_insttAcctoCl.set_cssclass("cmb_WF_Readonly");
        			this.div_Cont.edt_bsnsCode.set_cssclass("edt_WF_Readonly");
        			this.div_Cont.edt_bsnsNm.set_cssclass("edt_WF_Readonly");
        			this.div_Cont.msk_bsnsAmount.set_cssclass("msk_WF_Readonly");
        			this.div_Cont.edt_deptNm.set_cssclass("edt_WF_Readonly");
        			this.div_Cont.div_sear.edt_empno.set_cssclass("edt_WF_Readonly");
        			this.div_Cont.div_sear.edt_emplnm.set_cssclass("edt_WF_Readonly");
        			this.div_Cont.edt_edayAuditNm.set_cssclass("edt_WF_Readonly");
        			this.div_Cont.txt_edayAuditCn.set_cssclass("txt_WF_Readonly");
        			this.div_Cont.txt_relateLrgCn.set_cssclass("txt_WF_Readonly");
        			this.div_Cont.cal_bsnsBgnde.set_cssclass("cal_WF_Readonly");
        			this.div_Cont.cal_bsnsEndde.set_cssclass("cal_WF_Readonly");
        			this.div_Cont.edt_budgetAcntCode.set_cssclass("edt_WF_Readonly");
        			this.div_Cont.cmb_cntrctMthd.set_cssclass("cmb_WF_Readonly");
        			this.div_Cont.edt_budgetAcntCode2.set_cssclass("edt_WF_Readonly");
        		}

        		this.fn_transaction("selectAtchFile");
        	}
        }

        /***********************************************************************************
        * 설명	: 트랜잭션 콜백함수를 처리한다.
        ***********************************************************************************/
        this.fn_callBack2 = function (strSvcId,nErrorCode,strErrorMsg)
        { 
        	if(nErrorCode != 0){
        		this.gfn_callback_message(strSvcId, nErrorCode, strErrorMsg);
        	}else{
        		if (strSvcId == "selectEmplcodeList") 
        		{
        			if( this.DS_EMPNO.rowcount == 1) {
        				this.div_sear.edt_emplnm.set_value(this.DS_EMPNO.getColumn(0, "EMPNM"));
        				this.div_sear.edt_empno.set_value(this.DS_EMPNO.getColumn(0, "EMPNO"));
        			}
        			if( this.DS_EMPNO.rowcount > 1 ){	 	
        				empno2 = this.ds_cond.getColumn(0, "EMPNO");
        				empnm2 = this.ds_cond.getColumn(0, "EMPNM");
        				this.div_sear_search_onclick();	
        			}
        		}		
        	}
        }

        /***********************************************************************************
        * 설명	: 사원 검색버튼 클릭
        ***********************************************************************************/
        this.div_sear_search_onclick = function(obj,e)
        {
        	if(this.gfn_authcode("102") > -1 || this.gfn_authcode("064") > -1 || this.gfn_authcode("034") > -1){
        		var parm = {
        			args_0 : this
        		};
        	}else{
        		var parm = {
        			 arg_0      : this
        			,deptCd     : this.gfn_getDeptId()
        		};
        	}
        	this.gfn_popup("Popup1", 0, 0, "", parm, "com::empno_P01.xfdl", "fn_callback5", true);
        }

        /***********************************************************************************
        * 설명	: 사원선택 팝업 콜백
        ***********************************************************************************/
        this.fn_callback5 = function(sPopupId,sReturn)
        {
        	if(sPopupId == "Popup1")
        	{
        		this.DS_EMPNO.clearData();
                nRowCnt = this.DS_EMPNO.loadXML(sReturn);
                if(nRowCnt > 0){
        			this.ds_rqestEdayAuditList.setColumn(this.ds_rqestEdayAuditList.rowposition, "EMPNO",     this.DS_EMPNO.getColumn(0, "EMPNO"));
        			this.ds_rqestEdayAuditList.setColumn(this.ds_rqestEdayAuditList.rowposition, "EMPNM",     this.DS_EMPNO.getColumn(0, "EMPNM"));
        			this.ds_rqestEdayAuditList.setColumn(this.ds_rqestEdayAuditList.rowposition, "TELNO",     this.DS_EMPNO.getColumn(0, "TELNO_2"));
        			this.ds_rqestEdayAuditList.setColumn(this.ds_rqestEdayAuditList.rowposition, "DEPT_CODE", this.DS_EMPNO.getColumn(0, "DEPT_CODE"));
        			this.ds_rqestEdayAuditList.setColumn(this.ds_rqestEdayAuditList.rowposition, "DEPT_NM",   this.DS_EMPNO.getColumn(0, "DEPT_NM"));
        		}
        	}
        }

        /***********************************************************************************
        * 설명	: 사업 코드 팝업
        ***********************************************************************************/
        this.div_work_btn_BSNS_CODE_onclick = function(obj,e)
        {
        	var parm = {
        	     arg_0      : this
        	};
        	this.gfn_popup("popBsns", 0, 0, "", parm, "mis_acc::ACC000000_P04.xfdl", "fn_popupCallBack", true);
        }

        /***********************************************************************************
        * 설명	: 계약심사 팝업
        ***********************************************************************************/
        this.div_Cont_btn_cntrctJdgmn_onclick = function(obj,e)
        {
        	var parm = {
        	     arg_0      : this
        	};
        	this.gfn_popup("popCntrctJdgmn", 0, 0, "", parm, "mis_aud::AUD010301_P02.xfdl", "fn_popupCallBack", true);
        }
        /***********************************************************************************
        * 설명	: 예산코드 팝업1
        ***********************************************************************************/
        this.div_Cont_btn_bdgAcntPop_onclick = function(obj,e)
        {
        	var parm = {
        	     arg_0      : this
        		,searchDs   : this.ds_cond.saveXML()			// 검색조건(YEAR, BSNS_SE, BALC_SE, DEPT_CODE 컬럼만 이용)
        		,strObj     : "edt_YEAR"						// 수정불가능 처리할 오브젝트 명
        		,acntPopup  : false								// (true : 예산계정코드선택팝업, false : 부기선택팝업)
        	};	
        	this.gfn_popup("popBdgAcntPop", 900, 635, "예산선택팝업", parm, "com::bdgAcntPop.xfdl", "fn_popupCallBack", true);

        }
        /***********************************************************************************
        * 설명	: 예산코드 팝업2
        ***********************************************************************************/
        this.div_Cont_btn_bdgAcntPop2_onclick = function(obj,e)
        {
        	var nRow = this.ds_rqestEdayAuditList.rowposition;
        	var budgetAcntCode = this.ds_rqestEdayAuditList.getColumn(nRow, "BUDGET_ACNT_CODE");
        	if(this.comUtils.isNull(budgetAcntCode)) {
        		this.gfn_message("info.처리불가","첫번째 예산코드 먼저 입력해주시기 바랍니다.");
        		return false;
        	}
        	
        	var parm = {
        	     arg_0      : this
        		,searchDs   : this.ds_cond.saveXML()			// 검색조건(YEAR, BSNS_SE, BALC_SE, DEPT_CODE 컬럼만 이용)
        		,strObj     : "edt_YEAR"						// 수정불가능 처리할 오브젝트 명
        		,acntPopup  : false								// (true : 예산계정코드선택팝업, false : 부기선택팝업)
        	};	
        	this.gfn_popup("popBdgAcntPop2", 900, 635, "예산선택팝업", parm, "com::bdgAcntPop.xfdl", "fn_popupCallBack", true);	
        }

        /***********************************************************************************
        * 설명	: 사업 코드 팝업 콜백
        ***********************************************************************************/
        this.fn_popupCallBack = function(sPopupId,sReturn)
        {
        	// 사업코드 선택(계약대장)
        	if(sPopupId == "popBsns") {
        		var dsTemp = new Dataset();
        		var loadCnt = dsTemp.loadXML(sReturn);
        		if(loadCnt) {
        			var nRow = this.ds_rqestEdayAuditList.rowposition;
        			var bsnsCode = dsTemp.getColumn(0, "BSNS_CODE");
        			var bsnsNm   = dsTemp.getColumn(0, "BSNS_NM");
        			this.ds_rqestEdayAuditList.setColumn(nRow, "BSNS_CODE", bsnsCode);	// 사업코드
        			this.ds_rqestEdayAuditList.setColumn(nRow, "BSNS_NM"  , bsnsNm);	// 사업명
        		}
        	}
        	// 계약심사
        	if(sPopupId == "popCntrctJdgmn") {
        		var dsTemp = new Dataset();
        		var loadCnt = dsTemp.loadXML(sReturn);
        		if(loadCnt) {
        			var nRow = this.ds_rqestEdayAuditList.rowposition;
        			var cntrctJdgmnYear = dsTemp.getColumn(0, "CNTRCT_JDGMN_YEAR");
        			var cntrctJdgmnNo   = dsTemp.getColumn(0, "CNTRCT_JDGMN_NO");
        			var cntrctNm        = dsTemp.getColumn(0, "CNTRCT_NM");
        			
        			var publicAuditCl   = "02";
        			var insttAcctoCl    = dsTemp.getColumn(0, "CNTRCT_KND");
        			
        			var bsnsCode        = dsTemp.getColumn(0, "BSNS_CODE");
        			var bsnsNm          = dsTemp.getColumn(0, "BSNS_NM");
        			var bsnsAmount      = dsTemp.getColumn(0, "TOT_WCT");
        			
        			var deptCode        = dsTemp.getColumn(0, "REQUST_DEPT_CODE");
        			var deptNm          = dsTemp.getColumn(0, "REQUST_DEPT_NM");
        			var empNo           = dsTemp.getColumn(0, "RQESTER_EMPL_NO");
        			var empNm           = dsTemp.getColumn(0, "RQESTER_EMPL_NM");
        			
        			this.ds_rqestEdayAuditList.setColumn(nRow, "CNTRCT_JDGMN_YEAR", cntrctJdgmnYear);
        			this.ds_rqestEdayAuditList.setColumn(nRow, "CNTRCT_JDGMN_NO", cntrctJdgmnNo);
        			this.ds_rqestEdayAuditList.setColumn(nRow, "CNTRCT_NM", cntrctNm);
        			
        			this.ds_rqestEdayAuditList.setColumn(nRow, "PUBLIC_AUDIT_CL", publicAuditCl);
        			this.ds_rqestEdayAuditList.setColumn(nRow, "INSTT_ACCTO_CL", insttAcctoCl);
        			
        			this.ds_rqestEdayAuditList.setColumn(nRow, "BSNS_CODE", bsnsCode);
        			this.ds_rqestEdayAuditList.setColumn(nRow, "BSNS_NM", bsnsNm);
        			this.ds_rqestEdayAuditList.setColumn(nRow, "BSNS_AMOUNT", bsnsAmount);
        			
        			this.ds_rqestEdayAuditList.setColumn(nRow, "DEPT_CODE", deptCode);
        			this.ds_rqestEdayAuditList.setColumn(nRow, "DEPT_NM", deptNm);
        			this.ds_rqestEdayAuditList.setColumn(nRow, "EMPNO", empNo);
        			this.ds_rqestEdayAuditList.setColumn(nRow, "EMPNM", empNm);
        		}
        	}
        	// 예산코드팝업 
        	if(sPopupId == "popBdgAcntPop") {
        		var dsTemp = new Dataset();
        		var loadCnt = dsTemp.loadXML(sReturn);
        		if(loadCnt) { 
        			var bsnsSe          = dsTemp.getColumn(0, "BSNS_SE");
        			var balcSe          = dsTemp.getColumn(0, "BALC_SE");
        			var deptCode        = dsTemp.getColumn(0, "DEPT_CODE");
        			var deptNm          = dsTemp.getColumn(0, "DEPT_NM");
        			var detailbsnsCode  = dsTemp.getColumn(0, "DETAIL_BSNS_CODE");
        			var budgetAcntCode  = dsTemp.getColumn(0, "BUDGET_ACNT_CODE");
        			var expndtrUnitCode = dsTemp.getColumn(0, "EXPNDTR_UNIT_CODE");
        			var detailbsnsNm    = dsTemp.getColumn(0, "DETAIL_BSNS_NM");
        			var budgetAcntNm    = dsTemp.getColumn(0, "BUDGET_ACNT_NM");
        			var expndtrUnitNm   = dsTemp.getColumn(0, "EXPNDTR_UNIT_NM");
        			var expndtrUnitBalc = dsTemp.getColumn(0, "EXPNDTR_UNIT_BALC");
        			
        			var nRow = this.ds_rqestEdayAuditList.rowposition;
        			this.ds_rqestEdayAuditList.setColumn(nRow, "BSNS_SE"         , bsnsSe);				// 사업구분
        			this.ds_rqestEdayAuditList.setColumn(nRow, "BALC_SE"         , balcSe);				// 수지구분
        			this.ds_rqestEdayAuditList.setColumn(nRow, "BSNS_CODE"       , bsnsCode);			// 사업코드
        			this.ds_rqestEdayAuditList.setColumn(nRow, "BSNS_NM"         , bsnsNm);				// 사업명
        			this.ds_rqestEdayAuditList.setColumn(nRow, "BUDGET_ACNT_CODE", budgetAcntCode );	// 예산계정코드
        			this.ds_rqestEdayAuditList.setColumn(nRow, "BUDGET_ACNT_NM"  , budgetAcntNm   );	// 예산계정명
        			this.ds_rqestEdayAuditList.setColumn(nRow, "BUKIP_CODE"      , expndtrUnitCode);	// 부기코드
        			this.ds_rqestEdayAuditList.setColumn(nRow, "BUKIP_NM"        , expndtrUnitNm  );	// 부기명
        			this.ds_rqestEdayAuditList.setColumn(nRow, "BUDGET_BLCE"     , expndtrUnitBalc);	// 예산잔액(예산액-지출액)
        		}
        	}
        	// 예산코드팝업2
        	if(sPopupId == "popBdgAcntPop2") {
        		var dsTemp = new Dataset();
        		var loadCnt = dsTemp.loadXML(sReturn);
        		if(loadCnt) { 
        			var bsnsSe          = dsTemp.getColumn(0, "BSNS_SE");
        			var balcSe          = dsTemp.getColumn(0, "BALC_SE");
        			var deptCode        = dsTemp.getColumn(0, "DEPT_CODE");
        			var deptNm          = dsTemp.getColumn(0, "DEPT_NM");
        			var detailbsnsCode  = dsTemp.getColumn(0, "DETAIL_BSNS_CODE");
        			var budgetAcntCode  = dsTemp.getColumn(0, "BUDGET_ACNT_CODE");
        			var expndtrUnitCode = dsTemp.getColumn(0, "EXPNDTR_UNIT_CODE");
        			var detailbsnsNm    = dsTemp.getColumn(0, "DETAIL_BSNS_NM");
        			var budgetAcntNm    = dsTemp.getColumn(0, "BUDGET_ACNT_NM");
        			var expndtrUnitNm   = dsTemp.getColumn(0, "EXPNDTR_UNIT_NM");
        			var expndtrUnitBalc = dsTemp.getColumn(0, "EXPNDTR_UNIT_BALC");
        			
        			var nRow = this.ds_rqestEdayAuditList.rowposition;
        			this.ds_rqestEdayAuditList.setColumn(nRow, "BSNS_SE2"         , bsnsSe);			// 사업구분
        			this.ds_rqestEdayAuditList.setColumn(nRow, "BALC_SE2"         , balcSe);			// 수지구분
        // 			this.ds_rqestEdayAuditList.setColumn(nRow, "BSNS_CODE"        , bsnsCode);			// 사업코드
        // 			this.ds_rqestEdayAuditList.setColumn(nRow, "BSNS_NM"          , bsnsNm);			// 사업명
        			this.ds_rqestEdayAuditList.setColumn(nRow, "BUDGET_ACNT_CODE2", budgetAcntCode );	// 예산계정코드
        			this.ds_rqestEdayAuditList.setColumn(nRow, "BUDGET_ACNT_NM2"  , budgetAcntNm   );	// 예산계정명
        			this.ds_rqestEdayAuditList.setColumn(nRow, "BUKIP_CODE2"      , expndtrUnitCode);	// 부기코드
        			this.ds_rqestEdayAuditList.setColumn(nRow, "BUKIP_NM2"        , expndtrUnitNm  );	// 부기명
        			this.ds_rqestEdayAuditList.setColumn(nRow, "BUDGET_BLCE2"     , expndtrUnitBalc);	// 예산잔액(예산액-지출액)
        		}
        	}
        }

        /***********************************************************************
         * 설명 : 첨부파일 선택 삭제 버튼클릭 시
         ***********************************************************************/
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
        /***********************************************************************
         * 설명 : 첨부파일 업로드 버튼클릭 시
         ***********************************************************************/
        this.btn_uploadFiles_onclick = function(obj,e)
        {
        	// 첨부파일 업로드(fileSn 자동채번 / 첨부파일 Master에 ROW추가 / 파일 업로드 및 자동저장 / 테이블에 fileSn반영 / 데이터셋에 fileSn반영, 단 신규 ROW가 아닐경우 ROWTYPE은 유지)
        	this.fn_autoFileSn(
        		 "MIS"									// 대분류   (SYS_SE)
        		,"AUD"									// 업무구분 (JOB_SE)
        		, this.File_UpDownManager	            // fileManager 오브젝트
        		, this.ds_fileList		                // fileObject
        		, this.ds_rqestEdayAuditList	        // fileSn을 불러오거나 반영해야 하는 컬럼
        		, "TBAUD_EDAY_AUDIT"	            	// fileSn을 저장할 테이블
        		, "ATCH_FILE"							// fileSn 컬럼명이 다를 경우를 대비
        		, ["EDAY_AUDIT_NO", "RCEPT_YEAR"]	    // fileSn을 저장할 테이블의 PK (FileSn 확인 및 자동반영목적)
        	);
        }
        /***********************************************************************
         * 설명 : 첨부파일 선택다운로드 버튼클릭 시
         ***********************************************************************/
        this.btn_downFiles_onclick = function(obj,e)
        {
        	switch(obj.name){
        		case "btn_downFiles":
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
        		break;
        		case "btn_downFilesResult":
        			var findRow = this.ds_fileListResult.findRow("CHK", "1");
        			if(findRow < 0) {
        				this.gfn_message("comm.데이터.선택.없음");
        				return;
        			}
        			
        			for(var fRow = 0; fRow < this.ds_fileListResult.getRowCount(); fRow++) {
        				var fileSn    = this.ds_fileListResult.getColumn(fRow, "FILE_SN");
        				var fileOrder = this.ds_fileListResult.getColumn(fRow, "FILE_ORDR");
        				var fileName  = this.ds_fileListResult.getColumn(fRow, "ORGINL_FILE_NM");
        				var chk       = this.ds_fileListResult.getColumn(fRow, "CHK");
        				if(chk == '1') {
        					this.File_UpDownManager.download(fileSn, fileOrder, fileName);
        				}
        			}
        		break;
        	}
        }

        /***********************************************************************
         * 설명 : 첨부파일 그리드 헤드 클릭 시 
         ***********************************************************************/
        this.grd_cmmnAtchmnfl_onheadclick = function(obj,e)
        {
        	if(e.col == 0)
        	{	
        		//모든 체크박스 선택
        		this.gfn_setGridCheckAll(obj, e);
        	}else {
        		//선택한 헤드에 따른 정렬
        		this.gfn_gridSort(obj, e);
        	}
        }

        /**************************************************************************
         *의견서출력 클릭시
        **************************************************************************/
        this.div_Cont_btn_OPINION_REPORT_onclick = function(obj,e)
        {
        	alert("의견서출력 준비중");
        }

        /**************************************************************************
         *검색조건 변경시
        **************************************************************************/
        this.ds_cond_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "PUBLIC_AUDIT_CL") {
        		this.ds_aud015S.filter("String(VAL1).indexOf('" + e.newvalue + "') >= 0 || CODE == ''");
        		obj.setColumn(e.row, "INSTT_ACCTO_CL", "");
        	}
        }

        /**************************************************************************
         *일상감사요청내역 변경시
        **************************************************************************/
        this.ds_rqestEdayAuditList_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "PUBLIC_AUDIT_CL") {
        		this.ds_aud015.filter("String(VAL1).indexOf('" + e.newvalue + "') >= 0");
        		obj.setColumn(e.row, "INSTT_ACCTO_CL", "");
        	
        	// 예산코드2 (필수가 아니기 때문에)
        	}else if(e.columnid == "BUDGET_ACNT_CODE2") {
        		if(this.comUtils.isNull(e.newvalue)) {
        			obj.setColumn(e.row, "BUDGET_ACNT_CODE2", null);
        			obj.setColumn(e.row, "BUKIP_CODE2"      , null);
        			obj.setColumn(e.row, "BUDGET_ACNT_NM2"  , null);
        			obj.setColumn(e.row, "BUKIP_NM2"        , null);
        			obj.setColumn(e.row, "BUDGET_BLCE2"     , null);
        			obj.setColumn(e.row, "BSNS_SE2"         , null);
        			obj.setColumn(e.row, "BALC_SE2"         , null);
        		}
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

        /**************************************************************************
         *계약심사명 삭제시
        **************************************************************************/
        this.div_Cont_edt_cntrctNm_onchanged = function(obj,e)
        {
        	if(this.comUtils.isNull(e.postvalue)) {
        		var nRow = this.ds_rqestEdayAuditList.rowposition;
        		this.ds_rqestEdayAuditList.setColumn(nRow, "CNTRCT_JDGMN_YEAR", "");
        		this.ds_rqestEdayAuditList.setColumn(nRow, "CNTRCT_JDGMN_NO"  , "");
        		this.ds_rqestEdayAuditList.setColumn(nRow, "CNTRCT_NM"        , "");
        	}
        }

        /**************************************************************************
         *문자전송 버튼 클릭시
        **************************************************************************/
        this.div_Cont_btn_sendMssage_onclick = function(obj,e)
        {
        	var rCnt = this.ds_rqestEdayAuditList.rowcount;
        	if(rCnt < 1) {
        		this.gfn_message("comm.항목.선택.요청","일상감사요청목록");
        		return false;
        	}
        	
        	if(this.gfn_message("comm.행위여부", "메시지 전송을")) {
        		this.fn_transaction("sendMessage");
        	}
        }

        
        /**************************************************************************
         * 결재
        **************************************************************************/
        /*
         * 함수명  	: fn_sanction
         * 설명 		: 결재 버튼 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_sanction();
         */
        this.fn_sanction = function()
        {
        	var nRow = this.ds_rqestEdayAuditList.rowposition;
        	
        	// 결재 전 유효성 체크
        	if(this.comUtils.isDatasetUpdated(this.ds_rqestEdayAuditList)) {
        		this.gfn_message("comm.정보.저장.요청", "일상감사등록");
        		return;
        	}

        	// 결재상태 COM022 (0: 기안전 1:기안 2:반송 3:취소 4:중간결재 5:결재완료)
        	if(['1','4','5'].indexOf(this.ds_rqestEdayAuditList.getColumn(nRow, "SANCTN_STS")) > -1) {
        		this.gfn_message("info.처리불가","결재가 진행중이거나 완료된 데이터는 결재할 수 없습니다.");
        		return;
        	}
        	
        	if(this.ds_rqestEdayAuditList.rowcount == 0) {
        		this.gfn_message("info.처리불가","일상감사등록 내역이 선택되지 않았습니다.");
        		return;
        	}	
        		
        	var rRow          = this.ds_rqestEdayAuditList.rowposition;
        	var publicAuditCl = this.ds_rqestEdayAuditList.getColumn(rRow, "PUBLIC_AUDIT_CL");
        	var deptNm        = this.ds_rqestEdayAuditList.getColumn(rRow, "DEPT_NM");
        	var empnm         = this.ds_rqestEdayAuditList.getColumn(rRow, "EMPNM");
        	var edayAuditNm   = this.ds_rqestEdayAuditList.getColumn(rRow, "EDAY_AUDIT_NM");
        	var edayAuditCn   = this.ds_rqestEdayAuditList.getColumn(rRow, "EDAY_AUDIT_CN");
        	var relateLrgCn   = this.ds_rqestEdayAuditList.getColumn(rRow, "RELATE_LRG_CN");
           	var deptNm     = this.ds_rqestEdayAuditList.getColumn(rRow, "DEPT_NM");	
           	var rceptYear  = this.ds_rqestEdayAuditList.getColumn(rRow, "RCEPT_YEAR");		// 년도
        	var bsnsBgnde  = !this.comUtils.isNull(this.ds_rqestEdayAuditList.getColumn(rRow, "BSNS_BGNDE")) ? this.fn_dateStr(this.ds_rqestEdayAuditList.getColumn(rRow, "BSNS_BGNDE"), ". ") : "○○"; // 사업시작일자
        	var bsnsEndde  = !this.comUtils.isNull(this.ds_rqestEdayAuditList.getColumn(rRow, "BSNS_ENDDE")) ? this.fn_dateStr(this.ds_rqestEdayAuditList.getColumn(rRow, "BSNS_ENDDE"), ". ") : "○○"; // 사업종료일자
        	var bsnsDe =  bsnsBgnde +" ~ "+ bsnsEndde;
        	
           	// 계약방식
        	var cntrctMthd   = this.ds_rqestEdayAuditList.getColumn(rRow, "CNTRCT_MTHD");
        	var cntrctMthdRow = this.ds_ctr030.findRow("CODE", cntrctMthd)				
        	var cntrctMthdNm  = this.ds_ctr030.getColumn(cntrctMthdRow, "CODE_NM");
        	
        	// 첨부파일
        	var fileList = "";
        	
        	if(this.ds_fileList.rowcount > 0) {
        		fileList += "※ 첨부서류";
        	}
        	
        	for(var fileRow = 0; fileRow < this.ds_fileList.rowcount; fileRow++) {
        		fileList += String.fromCharCode(13);
        		fileList += (fileRow+1)+". ";
        		var fileNm =  this.ds_fileList.getColumn(fileRow, "ORGINL_FILE_NM");
        		var extsn = this.ds_fileList.getColumn(fileRow, "FILE_EXTSN");
        		fileList += fileNm.substring(0, (fileNm.length - (extsn.length+1)));
        	}
        	
        	// 예산 1
        	var budgetBlce1 = !this.comUtils.isNull(this.ds_rqestEdayAuditList.getColumn(rRow, "BUDGET_BLCE")) ? nexacro.toNumber(this.ds_rqestEdayAuditList.getColumn(rRow, "BUDGET_BLCE")) : 0 ;// 예산액1
        	var gwanCode1   = this.ds_rqestEdayAuditList.getColumn(rRow, "GWAN_CD");		// 관_코드1
        	var hangCode1   = this.ds_rqestEdayAuditList.getColumn(rRow, "HANG_CD");		// 항_코드1
        	var sehangCode1 = this.ds_rqestEdayAuditList.getColumn(rRow, "SEHANG_CD");		// 세항_코드1
        	var mokCode1    = this.ds_rqestEdayAuditList.getColumn(rRow, "MOK_CD");			// 목_코드1
        	var semokCode1  = this.ds_rqestEdayAuditList.getColumn(rRow, "SEMOK_CD");		// 세목_코드1
        	var gwanNm1     = this.ds_rqestEdayAuditList.getColumn(rRow, "GWAN_NM");		// 관_명1
        	var hangNm1     = this.ds_rqestEdayAuditList.getColumn(rRow, "HANG_NM");		// 항_명1
        	var sehangNm1   = this.ds_rqestEdayAuditList.getColumn(rRow, "SEHANG_NM");		// 세항_명1
        	var mokNm1      = this.ds_rqestEdayAuditList.getColumn(rRow, "MOK_NM");			// 목_명1
        	var semokNm1    = this.ds_rqestEdayAuditList.getColumn(rRow, "SEMOK_NM");		// 세목_명1
        	var bukipNm1    = this.ds_rqestEdayAuditList.getColumn(rRow, "BUKIP_NM");		// 부기명1
        	var semokNm1_bukip1 = semokNm1+"("+bukipNm1+")";
        	
        	// 예산 2
        	var budgetBlce2 = !this.comUtils.isNull(this.ds_rqestEdayAuditList.getColumn(rRow, "BUDGET_BLCE2")) ? nexacro.toNumber(this.ds_rqestEdayAuditList.getColumn(rRow, "BUDGET_BLCE2")) : 0 ;// 예산액2
        	var gwanCode2   = this.ds_rqestEdayAuditList.getColumn(rRow, "GWAN_CD2");		// 관_코드2
        	var hangCode2   = this.ds_rqestEdayAuditList.getColumn(rRow, "HANG_CD2");		// 항_코드2
        	var sehangCode2 = this.ds_rqestEdayAuditList.getColumn(rRow, "SEHANG_CD2");		// 세항_코드2
        	var mokCode2    = this.ds_rqestEdayAuditList.getColumn(rRow, "MOK_CD2");		// 목_코드2
        	var semokCode2  = this.ds_rqestEdayAuditList.getColumn(rRow, "SEMOK_CD2");		// 세목_코드2
        	var gwanNm2     = this.ds_rqestEdayAuditList.getColumn(rRow, "GWAN_NM2");		// 관_명2
        	var hangNm2     = this.ds_rqestEdayAuditList.getColumn(rRow, "HANG_NM2");		// 항_명2
        	var sehangNm2   = this.ds_rqestEdayAuditList.getColumn(rRow, "SEHANG_NM2");		// 세항_명2
        	var mokNm2      = this.ds_rqestEdayAuditList.getColumn(rRow, "MOK_NM2");		// 목_명2
        	var semokNm2    = this.ds_rqestEdayAuditList.getColumn(rRow, "SEMOK_NM2");		// 세목_명2
        	var bukipNm2    = this.ds_rqestEdayAuditList.getColumn(rRow, "BUKIP_NM2");		// 부기명2
        	var semokNm1_bukip2 = semokNm2+"("+bukipNm2+")";

        	// 예산1 과 예산2 비교 후 데이터 결과
        	// 관
        	var gwanNm = gwanNm1;
        	if((gwanCode1 != gwanCode2) && !this.comUtils.isNull(gwanCode2)) {
        		gwanNm += ", "+hangCode2;
        	}
        	// 항
        	var hangNm = hangNm1;
        	if((hangCode1 != hangCode2) && !this.comUtils.isNull(hangCode2)) {
        		hangNm += ", "+hangNm2;
        	}
        	// 세항
        	var sehangNm = sehangNm1;
        	if((sehangCode1 != sehangCode2) && !this.comUtils.isNull(sehangCode2)) {
        		sehangNm += ", "+sehangNm2;
        	}
        	// 목
        	var mokNm = mokNm1;
        	if((mokCode1 != mokCode2) && !this.comUtils.isNull(mokCode2)) {
        		mokNm += ", "+mokNm2;
        	}
        	// 세목
        	var semokNm = semokNm1_bukip1;
        	if((semokCode1 != semokCode2) && !this.comUtils.isNull(semokCode2)) {
        		semokNm += ", "+semokNm1_bukip2;
        	}
        	
        	// 예산액
        	var budgetBlce = this.comUtils.formatComma(budgetBlce1 + budgetBlce2);
        	
        	var arrSancData = new Array(21);
        	arrSancData[ 0] = "일상감사의뢰[" + edayAuditNm + "]";
        	arrSancData[ 1] = publicAuditCl == '01' ? "○" : "";         // A
        	arrSancData[ 2] = publicAuditCl == '02' ? "○" : "";         // B
        	arrSancData[ 3] = publicAuditCl == '03' ? "○" : "";         // C
        	arrSancData[ 4] = publicAuditCl == '04' ? "○" : "";         // D
        	arrSancData[ 5] = deptNm;       // 주관부서
        	arrSancData[ 6] = empnm;        // 작성자
        	arrSancData[ 7] = edayAuditNm;  // 건명
        	arrSancData[ 8] = edayAuditCn;  	// 사업개요
        	arrSancData[ 9] = cntrctMthdNm;     // 계약방식
        	arrSancData[10] = rceptYear;        // 년도
        	arrSancData[11] = budgetBlce+")";   // 예산액
        	arrSancData[12] = deptNm;         	// 부서
        	arrSancData[13] = gwanNm;         	// 관
        	arrSancData[14] = hangNm;         	// 항
        	arrSancData[15] = sehangNm;         // 세항
        	arrSancData[16] = mokNm;        	// 목
        	arrSancData[17] = semokNm;        	// 세목
        	arrSancData[18] = bsnsDe;        	// 사업추진일정
        	arrSancData[19] = relateLrgCn;   	// 법규내용
        	arrSancData[20] = fileList;   		// 첨부파일
           
           this.fn_callHandySanc2(
               this                        		// context
              ,'0000000082'                   	// formId
              ,this.ds_rqestEdayAuditList       // misDataset
              ,"TBAUD_EDAY_AUDIT"               // tableName
              ,["EDAY_AUDIT_NO", "RCEPT_YEAR"]  // tableKey
              ,arrSancData                  	// arrSancData
              ,null                			    // subData
              ,null                  			// multiCheck(0 or 1)
              ,null            					// otherColumn
        	  ,this.ds_fileList					// file Dataset
           );
        }

        
        /*
         * 함수명  	: div_Cont_grd_rqestEdayAuditList_oncelldblclick
         * 설명 		: 그리드 셀 더블클릭 이벤트 함수
         * params  		: none
         * return Type 	: none
         * 사용법		: this.div_Cont_grd_rqestEdayAuditList_oncelldblclick()
         */
        this.div_Cont_grd_rqestEdayAuditList_oncelldblclick = function(obj,e)
        {
        	if(e.col == 8) {
        		var nRow = this.ds_rqestEdayAuditList.rowposition;
        		if(['1','2','3','4','5'].indexOf(this.ds_rqestEdayAuditList.getColumn(nRow, "SANCTN_STS")) > -1) {
        			this.fn_openSanc(this.ds_rqestEdayAuditList.getColumn(nRow, "SANCTN_NO"));
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_cond.addEventHandler("oncolumnchanged", this.ds_cond_oncolumnchanged, this);
            this.ds_rqestEdayAuditList.addEventHandler("oncolumnchanged", this.ds_rqestEdayAuditList_oncolumnchanged, this);
            this.ds_rqestEdayAuditList.addEventHandler("onrowposchanged", this.ds_rqestEdayAuditList_onrowposchanged, this);
            this.addEventHandler("onload", this.AUD010200_onload, this);
            this.addEventHandler("oninit", this.AUD010200_oninit, this);
            this.div_SearchArea.Static06.addEventHandler("onclick", this.Static47_onclick, this);
            this.div_SearchArea.Static00.addEventHandler("onclick", this.Static47_onclick, this);
            this.div_SearchArea.Static01.addEventHandler("onclick", this.Static47_onclick, this);
            this.div_SearchArea.Static03.addEventHandler("onclick", this.Static47_onclick, this);
            this.div_Cont.sta_edayAuditList.addEventHandler("onclick", this.Static00_onclick, this);
            this.div_Cont.sta_atchFile.addEventHandler("onclick", this.Static00_onclick, this);
            this.div_Cont.sta_edayAuditRequest.addEventHandler("onclick", this.Static00_onclick, this);
            this.div_Cont.grd_rqestEdayAuditList.addEventHandler("onheadclick", this.div_Cont_grd_rqestEdayAuditList_onheadclick, this);
            this.div_Cont.grd_rqestEdayAuditList.addEventHandler("oncelldblclick", this.div_Cont_grd_rqestEdayAuditList_oncelldblclick, this);
            this.div_Cont.cmb_publicAuditCl.addEventHandler("onitemchanged", this.div_Cont_cmb_publicAuditCl_onitemchanged, this);
            this.div_Cont.div_sear.edt_empno.addEventHandler("onkeyup", this.edt_empno_onkeyup, this);
            this.div_Cont.div_sear.search.addEventHandler("onclick", this.div_sear_search_onclick, this);
            this.div_Cont.div_sear.edt_emplnm.addEventHandler("onkeyup", this.edt_emplnm_onkeyup, this);
            this.div_Cont.btn_bsnsCode.addEventHandler("onclick", this.div_work_btn_BSNS_CODE_onclick, this);
            this.div_Cont.btn_downFiles.addEventHandler("onclick", this.btn_downFiles_onclick, this);
            this.div_Cont.btn_uploadFiles.addEventHandler("onclick", this.btn_uploadFiles_onclick, this);
            this.div_Cont.btn_delFiles.addEventHandler("onclick", this.btn_delFiles_onclick, this);
            this.div_Cont.grd_cmmnAtchmnfl.addEventHandler("onheadclick", this.grd_cmmnAtchmnfl_onheadclick, this);
            this.div_Cont.grd_cmmnAtchmnflResult.addEventHandler("onheadclick", this.grd_cmmnAtchmnfl_onheadclick, this);
            this.div_Cont.btn_downFilesResult.addEventHandler("onclick", this.btn_downFiles_onclick, this);
            this.div_Cont.sta_atchFile00.addEventHandler("onclick", this.Static00_onclick, this);
            this.div_Cont.sta_edayAuditResult.addEventHandler("onclick", this.Static00_onclick, this);
            this.div_Cont.edt_adtorEmpno.addEventHandler("onkeyup", this.edt_empno_onkeyup, this);
            this.div_Cont.edt_adtorEmpnm.addEventHandler("onkeyup", this.edt_emplnm_onkeyup, this);
            this.div_Cont.edt_adtorDeptNm.addEventHandler("onkeyup", this.edt_empno_onkeyup, this);
            this.div_Cont.btn_OPINION_REPORT.addEventHandler("onclick", this.div_Cont_btn_OPINION_REPORT_onclick, this);
            this.div_Cont.edt_cntrctNm.addEventHandler("onchanged", this.div_Cont_edt_cntrctNm_onchanged, this);
            this.div_Cont.btn_cntrctJdgmn.addEventHandler("onclick", this.div_Cont_btn_cntrctJdgmn_onclick, this);
            this.div_Cont.btn_sendMssage.addEventHandler("onclick", this.div_Cont_btn_sendMssage_onclick, this);
            this.div_Cont.btn_bdgAcntPop.addEventHandler("onclick", this.div_Cont_btn_bdgAcntPop_onclick, this);
            this.div_Cont.btn_bdgAcntPop2.addEventHandler("onclick", this.div_Cont_btn_bdgAcntPop2_onclick, this);

        };

        this.loadIncludeScript("AUD010200.xfdl");
        this.loadPreloadList();
       
    };
}
)();
