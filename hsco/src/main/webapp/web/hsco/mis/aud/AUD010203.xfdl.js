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
                this.set_name("AUD010203");
                this.set_classname("AUD010203");
                this.set_titletext("일상감사결과관리");
                this._setFormPosition(0,0,1059,735);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
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

            obj = new Dataset("DS_EDAY_AUDIT", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EDAY_AUDIT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RCEPT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_SN\" type=\"STRING\" size=\"256\"/><Column id=\"RCEPT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUST_DE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"PUBLIC_AUDIT_CL\" type=\"STRING\" size=\"256\"/><Column id=\"INSTT_ACCTO_CL\" type=\"STRING\" size=\"256\"/><Column id=\"EDAY_AUDIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EDAY_AUDIT_CN\" type=\"STRING\" size=\"1500\"/><Column id=\"RELATE_LRG_CN\" type=\"STRING\" size=\"1500\"/><Column id=\"ATCH_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"ADTOR_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"ADTOR_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"ADTOR_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ADTOR_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_ADTOR_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_ADTOR_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_EDAY_AUDIT_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_RPLY_DE\" type=\"STRING\" size=\"256\"/><Column id=\"EDAY_AUDIT_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"RPLY_DE\" type=\"STRING\" size=\"256\"/><Column id=\"REDCN_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"OPINION_CN\" type=\"STRING\" size=\"1500\"/><Column id=\"CNTRCT_JDGMN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_JDGMN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGT_CONFIRM\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGT_RESULT\" type=\"STRING\" size=\"1500\"/><Column id=\"RESULT_DSPTH_AT\" type=\"STRING\" size=\"256\"/><Column id=\"OTHBC_AT\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_ATCH_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_STS\" type=\"STRING\" size=\"256\"/><Column id=\"ENABLE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"READONLY\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_ADTOR_AT\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUKIP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_MTHD\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"BUKIP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"BUKIP_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"BUKIP_CODE2\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE2\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_SE2\" type=\"STRING\" size=\"256\"/><Column id=\"BALC_SE2\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_BLCE2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GWAN_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"HANG_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"SEHANG_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"MOK_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"SEMOK_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"GWAN_CD2\" type=\"STRING\" size=\"256\"/><Column id=\"HANG_CD2\" type=\"STRING\" size=\"256\"/><Column id=\"SEHANG_CD2\" type=\"STRING\" size=\"256\"/><Column id=\"MOK_CD2\" type=\"STRING\" size=\"256\"/><Column id=\"SEMOK_CD2\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_BLCE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GWAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HANG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEHANG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEMOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GWAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEHANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEMOK_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_cond", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"REQUST_BGN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUST_END_DE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PUBLIC_AUDIT_CL\" type=\"STRING\" size=\"256\"/><Column id=\"INSTT_ACCTO_CL\" type=\"STRING\" size=\"256\"/><Column id=\"EDAY_AUDIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ADTOR_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"ADTOR_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"EDAY_AUDIT_RESULT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">REQUST_BGN_DE</Col><Col id=\"compId\">ds_cond</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">요청시작일자</Col></Row><Row><Col id=\"colId\">REQUST_END_DE</Col><Col id=\"compId\">ds_cond</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">요청종료일자</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">REQUST_END_DE</Col><Col id=\"msgId\">요청종료일자^요청시작일자</Col><Col id=\"from\">REQUST_BGN_DE</Col></Row><Row><Col id=\"colId\">EDAY_AUDIT_RESULT</Col><Col id=\"compId\">DS_EDAY_AUDIT</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">감사결과</Col></Row><Row><Col id=\"colId\">RPLY_DE</Col><Col id=\"compId\">DS_EDAY_AUDIT</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">회신일자</Col></Row></Rows>");
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

            obj = new Dataset("ds_fileListRequest", this);
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

            obj = new Dataset("ds_result", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"AAA\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"SJ\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"QESITM_SE\" type=\"STRING\" size=\"256\"/><Column id=\"QESITM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond02", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"RESULT_SN\" type=\"STRING\" size=\"256\"/><Column id=\"EDAY_AUDIT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RCEPT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"INNER_SANCTN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RCEPT_BGN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RCEPT_END_DE\" type=\"STRING\" size=\"256\"/><Column id=\"EDAY_AUDIT_RCEPT_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_aud038", this);
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

            obj = new Dataset("ds_aud016S", this);
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

            obj = new Dataset("ds_aud036", this);
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
            obj._setContents("<ColumnInfo><Column id=\"SYSTEM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"RECV_IDS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SYSTEM_NAME\">일상감사결과관리</Col><Col id=\"SUBJECT\">일상감사결과</Col><Col id=\"CONTENTS\">일상감사결과가 등록 되었습니다. 확인 부탁드립니다.</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_SearchArea", "absolute", "0%", "0", null, "59", "28", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Box");
            this.addChild(obj.name, obj);
            obj = new Static("sta_year", "absolute", "15", "5", "64", "21", null, null, this.div_SearchArea);
            obj.set_taborder("8");
            obj.set_text("요청일시");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_align("left middle");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Calendar("cal_rceptBgnDe", "absolute", "79", "5", "110", "21", null, null, this.div_SearchArea);
            this.div_SearchArea.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Essential");
            obj = new Static("Static02", "absolute", "194", "5", "10", "21", null, null, this.div_SearchArea);
            obj.set_taborder("9");
            obj.set_text("~");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Calendar("cal_rceptEndDe", "absolute", "209", "5", "110", "21", null, null, this.div_SearchArea);
            this.div_SearchArea.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Essential");
            obj = new Static("sta_dept", "absolute", "335", "5", "64", "21", null, null, this.div_SearchArea);
            obj.set_taborder("10");
            obj.set_text("소관부서");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_align("left middle");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Edit("edt_edayAuditNm", "absolute", "78", "31", "241", "21", null, null, this.div_SearchArea);
            obj.set_taborder("5");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Static("sta_edayAuditNm", "absolute", "15", "31", "38", "21", null, null, this.div_SearchArea);
            obj.set_taborder("11");
            obj.set_text("건명");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_align("left middle");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Static("sta_publicAuditCl", "absolute", "614", "5", "77", "21", null, null, this.div_SearchArea);
            obj.set_taborder("12");
            obj.set_text("공감법분류");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_align("left middle");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Combo("cmb_publicAuditCl", "absolute", "691", "5", "110", "21", null, null, this.div_SearchArea);
            this.div_SearchArea.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_innerdataset("@ds_aud014S");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj = new Combo("cmb_insttAcctoCl", "absolute", "893", "5", "110", "21", null, null, this.div_SearchArea);
            this.div_SearchArea.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_innerdataset("@ds_aud015S");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj = new Static("sta_insttAcctoCl00", "absolute", "816", "5", "77", "21", null, null, this.div_SearchArea);
            obj.set_taborder("13");
            obj.set_text("기관별분류");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_align("left middle");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Div("div_dept", "absolute", "399", "5", "200", "22", null, null, this.div_SearchArea);
            obj.set_taborder("2");
            obj.set_async("false");
            obj.set_url("com::deptCode.xfdl");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Static("sta_dept00", "absolute", "335", "32", "51", "21", null, null, this.div_SearchArea);
            obj.set_taborder("14");
            obj.set_text("감사자");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_align("left middle");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Combo("cmb_edayAuditResult", "absolute", "691", "32", "110", "21", null, null, this.div_SearchArea);
            this.div_SearchArea.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_innerdataset("@ds_aud016S");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj = new Static("sta_dept01", "absolute", "614", "32", "64", "21", null, null, this.div_SearchArea);
            obj.set_taborder("15");
            obj.set_text("감사결과");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_align("left middle");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Div("div_EMP", "absolute", "399", "32", "162", "21", null, null, this.div_SearchArea);
            obj.set_taborder("6");
            obj.set_async("false");
            obj.set_url("com::empno.xfdl");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "0", "15", null, null, "0", this.div_SearchArea);
            obj.set_taborder("16");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "320", "0", "15", null, null, "0", this.div_SearchArea);
            obj.set_taborder("17");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "599", "0", "15", null, null, "0", this.div_SearchArea);
            obj.set_taborder("18");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "801", "0", "15", null, null, "0", this.div_SearchArea);
            obj.set_taborder("19");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_SearchArea.addChild(obj.name, obj);

            obj = new Div("div_Cont", "absolute", "0", "59", null, null, "28", "0", this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            obj = new Static("Static23", "absolute", "76", null, "430", "27", null, "235", this.div_Cont);
            obj.set_taborder("101");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "594", null, "437", "27", null, "125", this.div_Cont);
            obj.set_taborder("81");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "594", null, "437", "27", null, "99", this.div_Cont);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "69", null, "437", "47", null, "99", this.div_Cont);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "69", null, "437", "27", null, "365", this.div_Cont);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_empno00", "fixed", "195", null, "87", "21", null, "368", this.div_Cont);
            obj.set_taborder("18");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_maxlength("8");
            obj.style.set_color("black");
            obj.style.set_align("left middle");
            obj.set_cssclass("edt_WF_Readonly");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "594", null, "437", "27", null, "339", this.div_Cont);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "69", null, "437", "27", null, "391", this.div_Cont);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "0", null, "506", "27", null, "287", this.div_Cont);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "54", null, "452", "27", null, "261", this.div_Cont);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_EDAY_AUDIT_LIST", "absolute", "0", "10", "175", "19", null, null, this.div_Cont);
            obj.set_taborder("34");
            obj.set_text("일상감사요청목록");
            obj.set_cssclass("sta_WF_Title02");
            obj.getSetter("titletext").set("내외부감사실시관리");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_EDAY_AUDIT_DSPTH", "absolute", "516", null, "150", "19", null, "423", this.div_Cont);
            obj.set_taborder("35");
            obj.set_text("일상감사결과");
            obj.set_cssclass("sta_WF_Title02");
            obj.getSetter("titletext").set("내외부감사실시관리");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Grid("grd_EDAY_AUDIT_LIST", "absolute", "0", "34", null, null, "0", "452", this.div_Cont);
            obj.set_taborder("13");
            obj.set_binddataset("DS_EDAY_AUDIT");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"600\"/><Column size=\"600\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"500\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"결재상태\"/><Cell col=\"1\" text=\"요청번호\"/><Cell col=\"2\" text=\"요청일자\"/><Cell col=\"3\" colspan=\"3\" text=\"소관부서\"/><Cell col=\"6\" text=\"공감법분류\"/><Cell col=\"7\" text=\"건명\"/><Cell col=\"8\" text=\"관련법규내용\"/><Cell col=\"9\" text=\"회신일자\"/><Cell col=\"10\" text=\"감사결과\"/><Cell col=\"11\" colspan=\"2\" text=\"의견내용\"/></Band><Band id=\"body\"><Cell displaytype=\"image\" text=\"expr:SANCTN_STS == '' ? '' : comp.parent.parent.fn_get_imgUrl(SANCTN_STS)\"/><Cell col=\"1\" style=\"padding: ;\" text=\"bind:EDAY_AUDIT_NO\"/><Cell col=\"2\" displaytype=\"date\" text=\"bind:REQUST_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" colspan=\"3\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:DEPT_NM\"/><Cell col=\"6\" displaytype=\"combo\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:PUBLIC_AUDIT_CL\" combodataset=\"ds_aud014\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"7\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:EDAY_AUDIT_NM\" wordwrap=\"char\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"8\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:RELATE_LRG_CN\" wordwrap=\"char\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"9\" displaytype=\"date\" text=\"bind:RPLY_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" displaytype=\"combo\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:EDAY_AUDIT_RESULT\" combodataset=\"ds_aud016\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" colspan=\"2\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:OPINION_CN\" wordwrap=\"char\" calendardisplaynulltype=\"none\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/></Band></Format></Formats>");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "69", null, "186", "27", null, "391", this.div_Cont);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_EDAY_AUDIT_NO", "absolute", "82", null, "52", "21", null, "394", this.div_Cont);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.style.setStyleValue("color", "disabled", "black");
            obj.set_cssclass("edt_WF_Readonly");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "594", null, "437", "27", null, "365", this.div_Cont);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Combo("cmb_edayAuditresultSe", "absolute", "598", null, "155", "21", null, "368", this.div_Cont);
            this.div_Cont.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_readonly("false");
            obj.set_innerdataset("@ds_aud016");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.style.setStyleValue("color", "disabled", "black");
            obj.set_cssclass("cmb_WF_Essential");
            obj.set_index("-1");
            obj = new Static("Static04", "absolute", "594", null, "437", "121", null, "219", this.div_Cont);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_Cont.addChild(obj.name, obj);
            obj = new TextArea("txt_opinionCn", "absolute", "598", null, "430", "115", null, "222", this.div_Cont);
            obj.set_taborder("5");
            obj.set_wordwrap("char");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.style.setStyleValue("color", "disabled", "black");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "0", null, "10", "0", null, this.div_Cont);
            obj.set_taborder("48");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", "29", null, "5", "0", null, this.div_Cont);
            obj.set_taborder("49");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_atchFile", "absolute", "516", null, "113", "19", null, "76", this.div_Cont);
            obj.set_taborder("50");
            obj.set_text("첨부파일(결과)");
            obj.set_cssclass("sta_WF_Title03");
            obj.getSetter("titletext").set("내외부감사실시관리");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "69", null, "437", "27", null, "313", this.div_Cont);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_edayAuditNm", "absolute", "82", null, "422", "21", null, "316", this.div_Cont);
            obj.set_taborder("20");
            obj.style.set_color("black");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "69", null, "437", "43", null, "141", this.div_Cont);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_Cont.addChild(obj.name, obj);
            obj = new TextArea("txt_cn", "absolute", "82", null, "422", "37", null, "144", this.div_Cont);
            obj.set_taborder("26");
            obj.set_wordwrap("char");
            obj.style.set_color("black");
            obj.set_readonly("true");
            obj.set_cssclass("txt_WF_Readonly");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Calendar("cal_rceptDe", "absolute", "402", null, "100", "21", null, "394", this.div_Cont);
            this.div_Cont.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.setStyleValue("daycolor", "disabled", "black");
            obj.style.setStyleValue("color", "disabled", "black");
            obj.set_cssclass("cal_WF_Readonly");
            obj = new Button("btn_downFiles", "absolute", "946", null, "85", "19", null, "76", this.div_Cont);
            obj.set_taborder("32");
            obj.set_text("선택다운로드");
            obj.set_cssclass("btn_WF_Process");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Button("btn_uploadFiles", "absolute", "875", null, "68", "19", null, "76", this.div_Cont);
            obj.set_taborder("31");
            obj.set_text("파일업로드");
            obj.set_cssclass("btn_WF_Process");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Button("btn_delFiles", "absolute", "805", null, "67", "19", null, "76", this.div_Cont);
            obj.set_taborder("30");
            obj.set_text("선택삭제");
            obj.set_cssclass("btn_WF_Process");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Grid("grd_cmmnAtchmnfl", "absolute", "516", null, "515", "71", null, "0", this.div_Cont);
            obj.set_taborder("33");
            obj.set_binddataset("ds_fileList");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"65\"/><Column size=\"245\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"파일형식\"/><Cell col=\"2\" celltype=\"head\" text=\"파일명\"/><Cell col=\"3\" text=\"확장자\"/><Cell col=\"4\" text=\"사이즈\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"image\" text=\"bind:FILE_IMAGE\"/><Cell col=\"2\" displaytype=\"normal\" style=\"align:left middle;\" text=\"bind:ORGINL_FILE_NM\"/><Cell col=\"3\" text=\"bind:FILE_EXTSN\"/><Cell col=\"4\" text=\"bind:FILE_MG\"/></Band></Format></Formats>");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Calendar("cal_rplyDe", "absolute", "598", null, "100", "21", null, "342", this.div_Cont);
            this.div_Cont.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj.set_readonly("false");
            obj.set_autoskip("false");
            obj.set_enable("true");
            obj.style.setStyleValue("daycolor", "disabled", "black");
            obj.set_cssclass("cal_WF_Essential");
            obj = new Static("Static00", "absolute", "506", "195", "10", null, null, "0", this.div_Cont);
            obj.set_taborder("57");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_atchFile00", "absolute", "0px", "0px", "0px", "0px", null, null, this.div_Cont);
            obj.set_taborder("58");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_font("bold 9 Dotum");
            obj.getSetter("titletext").set("내외부감사실시관리");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Button("btn_downFilesRequest", "absolute", "421", null, "85", "19", null, "76", this.div_Cont);
            obj.set_taborder("28");
            obj.set_text("선택다운로드");
            obj.set_cssclass("btn_WF_Process");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Grid("grd_cmmnAtchmnflRequest", "absolute", "0", null, "506", "71", null, "0", this.div_Cont);
            obj.set_taborder("29");
            obj.set_binddataset("ds_fileListRequest");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"58\"/><Column size=\"245\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"파일형식\"/><Cell col=\"2\" celltype=\"head\" text=\"파일명\"/><Cell col=\"3\" text=\"확장자\"/><Cell col=\"4\" text=\"사이즈\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"image\" text=\"bind:FILE_IMAGE\"/><Cell col=\"2\" displaytype=\"normal\" style=\"align:left middle;\" text=\"bind:ORGINL_FILE_NM\"/><Cell col=\"3\" text=\"bind:FILE_EXTSN\"/><Cell col=\"4\" text=\"bind:FILE_MG\"/></Band></Format></Formats>");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "0", "224", null, "10", "0", null, this.div_Cont);
            obj.set_taborder("60");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "0", "253", null, "5", "0", null, this.div_Cont);
            obj.set_taborder("61");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_atchFile01", "absolute", "0", null, "113", "19", null, "76", this.div_Cont);
            obj.set_taborder("62");
            obj.set_text("첨부파일(요청)");
            obj.set_cssclass("sta_WF_Title03");
            obj.getSetter("titletext").set("내외부감사실시관리");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_EDAY_AUDIT_DSPTH00", "absolute", "0", null, "150", "19", null, "423", this.div_Cont);
            obj.set_taborder("63");
            obj.set_text("일상감사 요청 내역");
            obj.set_cssclass("sta_WF_Title02");
            obj.getSetter("titletext").set("내외부감사실시관리");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "594", null, "437", "27", null, "391", this.div_Cont);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_adtor", "absolute", "516", null, "80", "27", null, "391", this.div_Cont);
            obj.set_taborder("67");
            obj.set_text("감사자");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_adtorEmpnm", "fixed", "797", null, "59", "21", null, "394", this.div_Cont);
            obj.set_taborder("64");
            obj.set_readonly("true");
            obj.style.set_color("black");
            obj.set_cssclass("edt_WF_Readonly");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_adtorEmpno", "fixed", "710", null, "85", "21", null, "394", this.div_Cont);
            obj.set_taborder("65");
            obj.set_readonly("true");
            obj.set_maxlength("8");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_color("black");
            obj.style.set_align("left middle");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_adtorDeptNm", "fixed", "598", null, "110", "21", null, "394", this.div_Cont);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_maxlength("8");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_color("black");
            obj.style.set_align("left middle");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Button("search", "absolute", "773", null, "23", "21", null, "394", this.div_Cont);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_Search");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_publicAuditCl", "absolute", "0", null, "80", "27", null, "287", this.div_Cont);
            obj.set_taborder("68");
            obj.set_text("공감법분류");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 8 0 8");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Combo("cmb_publicAuditCl", "absolute", "82", null, "163", "21", null, "290", this.div_Cont);
            this.div_Cont.addChild(obj.name, obj);
            obj.set_taborder("21");
            obj.set_innerdataset("@ds_aud014");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.style.set_color("black");
            obj.set_readonly("true");
            obj = new Static("sta_insttAcctoCl", "absolute", "278", null, "80", "27", null, "287", this.div_Cont);
            obj.set_taborder("70");
            obj.set_text("계약분류");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 8 0 5");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Combo("cmb_insttAcctoCl", "absolute", "360", null, "144", "21", null, "290", this.div_Cont);
            this.div_Cont.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_innerdataset("@ds_aud015");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.style.set_color("black");
            obj.set_readonly("true");
            obj = new Edit("edt_BSNS_CODE", "absolute", "82", null, "75", "21", null, "264", this.div_Cont);
            obj.set_taborder("23");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_color("black");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_BSNS_NM", "absolute", "160", null, "116", "21", null, "264", this.div_Cont);
            obj.set_taborder("24");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_color("black");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_insttAcctoCl00", "absolute", "278", null, "80", "27", null, "261", this.div_Cont);
            obj.set_taborder("73");
            obj.set_text("사업비");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new MaskEdit("msk_bsnsAmount", "absolute", "360", null, "144", "21", null, "264", this.div_Cont);
            obj.set_taborder("25");
            obj.set_mask("###,###,###,###,###");
            obj.style.set_color("black");
            obj.set_readonly("true");
            obj.set_cssclass("msk_WF_Readonly");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_deptNm", "absolute", "82", null, "110", "21", null, "368", this.div_Cont);
            obj.set_taborder("17");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_emplnm00", "fixed", "285", null, "59", "21", null, "368", this.div_Cont);
            obj.set_taborder("19");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.style.set_color("black");
            obj.set_cssclass("edt_WF_Readonly");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_redcnAmount", "absolute", "784", null, "70", "27", null, "339", this.div_Cont);
            obj.set_taborder("78");
            obj.set_text("절감금액");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new MaskEdit("msk_redcnAmount", "absolute", "857", null, "140", "21", null, "342", this.div_Cont);
            obj.set_taborder("4");
            obj.set_mask("!###,###,###,###,###");
            obj.style.set_color("black");
            obj.set_limitbymask("integer");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Button("btn_excelDn", "absolute", null, "11", "25", "19", "1", null, this.div_Cont);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_Gridexceldn");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Button("btn_OPINION_REPORT", "absolute", "974", null, "55", "50", null, "367", this.div_Cont);
            obj.set_taborder("11");
            obj.set_text("의견서\r\n출력");
            obj.set_cssclass("btn_WF_Process");
            obj.set_visible("false");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_managtConfirm", "absolute", "516", null, "80", "27", null, "125", this.div_Cont);
            obj.set_taborder("80");
            obj.set_text("조치확인");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_managtDe", "absolute", "794", null, "70", "27", null, "125", this.div_Cont);
            obj.set_taborder("82");
            obj.set_text("조치일자");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Calendar("cal_managtDe", "absolute", "866", null, "100", "21", null, "128", this.div_Cont);
            this.div_Cont.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj.set_readonly("false");
            obj.set_tabstop("true");
            obj = new CheckBox("chk_othbcAt", "absolute", "870", null, "20", "15", null, "104", this.div_Cont);
            obj.set_taborder("10");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_visible("false");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Combo("cmb_managtConfirm", "absolute", "598", null, "130", "21", null, "128", this.div_Cont);
            this.div_Cont.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_innerdataset("@ds_aud038");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj = new Static("sta_resultDspthAt", "absolute", "516", null, "80", "27", null, "99", this.div_Cont);
            obj.set_taborder("45");
            obj.set_text("통보여부");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Combo("cmb_resultDspthAt", "absolute", "598", null, "130", "21", null, "102", this.div_Cont);
            this.div_Cont.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_innerdataset("@ds_aud036");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_readonly("false");
            obj.set_index("-1");
            obj = new Static("sta_othbcAt", "absolute", "794", null, "70", "27", null, "99", this.div_Cont);
            obj.set_taborder("47");
            obj.set_text("공개여부");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "594", null, "437", "69", null, "151", this.div_Cont);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_Cont.addChild(obj.name, obj);
            obj = new TextArea("txt_managtResult", "absolute", "598", null, "430", "63", null, "154", this.div_Cont);
            obj.set_taborder("6");
            obj.set_wordwrap("char");
            obj.set_readonly("false");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("1000");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_managtResult", "absolute", "516", null, "80", "69", null, "151", this.div_Cont);
            obj.set_taborder("43");
            obj.set_text("조치의견");
            obj.set_cssclass("sta_WF_Label");
            obj.set_wordwrap("none");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "0", "576", null, "5", "0", null, this.div_Cont);
            obj.set_taborder("55");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "0", "600", null, "5", "0", null, this.div_Cont);
            obj.set_taborder("59");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_EDAY_AUDIT_NO", "absolute", "0", null, "80", "27", null, "391", this.div_Cont);
            obj.set_taborder("36");
            obj.set_text("요청번호");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 8 0 8");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_nm", "absolute", "0", null, "80", "27", null, "365", this.div_Cont);
            obj.set_taborder("76");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_edayAuditNm", "absolute", "0", null, "80", "27", null, "313", this.div_Cont);
            obj.set_taborder("51");
            obj.set_text("건명");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 8 0 8");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_cn", "absolute", "0", null, "80", "43", null, "141", this.div_Cont);
            obj.set_taborder("53");
            obj.set_text("사업개요");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 8 0 8");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_rceptDe", "absolute", "320", null, "80", "27", null, "391", this.div_Cont);
            obj.set_taborder("56");
            obj.set_text("접수일자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 8 0 5");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_publicAuditCl00", "absolute", "0", null, "80", "27", null, "261", this.div_Cont);
            obj.set_taborder("71");
            obj.set_text("사업코드");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 8 0 8");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_rceptDe00", "absolute", "136", null, "80", "27", null, "391", this.div_Cont);
            obj.set_taborder("85");
            obj.set_text("요청일자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 8 0 5");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Calendar("cal_rceptDe00", "absolute", "218", null, "100", "21", null, "394", this.div_Cont);
            this.div_Cont.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Readonly");
            obj.style.setStyleValue("daycolor", "disabled", "black");
            obj.style.setStyleValue("color", "disabled", "black");
            obj = new Static("sta_relateLrgCn", "absolute", "0", null, "80", "43", null, "99", this.div_Cont);
            obj.set_taborder("86");
            obj.set_text("관련법규\r\n내용");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 8 0 8");
            this.div_Cont.addChild(obj.name, obj);
            obj = new TextArea("txt_relateLrgCn", "absolute", "82", null, "422", "37", null, "102", this.div_Cont);
            obj.set_taborder("27");
            obj.set_wordwrap("char");
            obj.set_readonly("true");
            obj.set_cssclass("txt_WF_Readonly");
            obj.style.set_color("black");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_edayAuditresultSe", "absolute", "516", null, "80", "27", null, "365", this.div_Cont);
            obj.set_taborder("39");
            obj.set_text("감사결과");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_rplyDe", "absolute", "516", null, "80", "27", null, "339", this.div_Cont);
            obj.set_taborder("38");
            obj.set_text("회신일자");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_opinionCn", "absolute", "516", null, "80", "121", null, "219", this.div_Cont);
            obj.set_taborder("41");
            obj.set_text("검토내용");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Button("btn_sendMssage", "absolute", "951", null, "80", "19", null, "423", this.div_Cont);
            obj.set_taborder("88");
            obj.set_text("메시지전송");
            obj.set_cssclass("btn_WF_Process");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "73", null, "433", "27", null, "339", this.div_Cont);
            obj.set_taborder("89");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_cntrctJdgmnNo", "absolute", "82", null, "60", "21", null, "342", this.div_Cont);
            obj.set_taborder("90");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_cntrctJdgmnYear", "absolute", "144", null, "60", "21", null, "342", this.div_Cont);
            obj.set_taborder("91");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_cntrctNm", "absolute", "206", null, "150", "21", null, "342", this.div_Cont);
            obj.set_taborder("92");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_publicAuditCl01", "absolute", "0", null, "80", "27", null, "339", this.div_Cont);
            obj.set_taborder("94");
            obj.set_text("계약심사");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_cntrctMthd", "absolute", "358", null, "85", "27", null, "339", this.div_Cont);
            obj.set_taborder("95");
            obj.set_text("계약방식");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Combo("cmb_cntrctMthd", "absolute", "445", null, "59", "21", null, "342", this.div_Cont);
            this.div_Cont.addChild(obj.name, obj);
            obj.set_taborder("96");
            obj.set_innerdataset("ds_ctr030");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_cssclass("cmb_WF_Readonly");
            obj = new Static("sta_bsnsBgnde", "absolute", "0", null, "80", "27", null, "235", this.div_Cont);
            obj.set_taborder("97");
            obj.set_text("계약기간");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Calendar("cal_bsnsBgnde", "absolute", "82", null, "100", "21", null, "238", this.div_Cont);
            this.div_Cont.addChild(obj.name, obj);
            obj.set_taborder("98");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_daycolor("#333333ff");
            obj.style.set_border("1 solid #bdbdbdff");
            obj.style.set_color("#333333ff");
            obj.set_cssclass("cal_WF_Readonly");
            obj.set_readonly("true");
            obj = new Calendar("cal_bsnsEndde", "absolute", "202", null, "100", "21", null, "238", this.div_Cont);
            this.div_Cont.addChild(obj.name, obj);
            obj.set_taborder("99");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_daycolor("#333333ff");
            obj.style.set_border("1 solid #bdbdbdff");
            obj.style.set_color("#333333ff");
            obj.set_cssclass("cal_WF_Readonly");
            obj.set_readonly("true");
            obj = new Static("Static24", "absolute", "182", null, "20", "21", null, "238", this.div_Cont);
            obj.set_taborder("100");
            obj.set_text("~");
            obj.style.set_align("center");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static25", "absolute", "76", null, "430", "27", null, "209", this.div_Cont);
            obj.set_taborder("102");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_budgetAcntCode", "absolute", "82", null, "81", "21", null, "212", this.div_Cont);
            obj.set_taborder("103");
            obj.set_tabstop("false");
            obj.style.set_color("black");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_budgetAcntNm", "absolute", "165", null, "111", "21", null, "212", this.div_Cont);
            obj.set_taborder("104");
            obj.style.set_color("black");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_bukipCode", "absolute", "278", null, "80", "27", null, "209", this.div_Cont);
            obj.set_taborder("106");
            obj.set_text("부기코드");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_bsns00", "absolute", "0", null, "80", "27", null, "209", this.div_Cont);
            obj.set_taborder("107");
            obj.set_text("예산코드");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_bukipCode", "absolute", "360", null, "56", "21", null, "212", this.div_Cont);
            obj.set_taborder("108");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_color("black");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_bukipNm", "absolute", "418", null, "86", "21", null, "212", this.div_Cont);
            obj.set_taborder("109");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_color("black");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_publicAuditCl02", "absolute", "-2206", null, "85", "27", null, "767", this.div_Cont);
            obj.set_taborder("110");
            obj.set_text("계약심사");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_bsnsBgnde00", "absolute", "-2206", null, "85", "27", null, "663", this.div_Cont);
            obj.set_taborder("111");
            obj.set_text("계약기간");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_bsns01", "absolute", "-2206", null, "85", "27", null, "637", this.div_Cont);
            obj.set_taborder("112");
            obj.set_text("예산코드");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("Static26", "absolute", "76", null, "430", "27", null, "183", this.div_Cont);
            obj.set_taborder("113");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_budgetAcntCode2", "absolute", "82", null, "81", "21", null, "186", this.div_Cont);
            obj.set_taborder("114");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_color("black");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_budgetAcntNm2", "absolute", "165", null, "111", "21", null, "186", this.div_Cont);
            obj.set_taborder("115");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_color("black");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_bukipCode2", "absolute", "278", null, "80", "27", null, "183", this.div_Cont);
            obj.set_taborder("116");
            obj.set_text("부기코드");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Static("sta_budgetAcntCode2", "absolute", "0", null, "80", "27", null, "183", this.div_Cont);
            obj.set_taborder("117");
            obj.set_text("예산코드");
            obj.set_cssclass("sta_WF_Label");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_bukipCode2", "absolute", "360", null, "56", "21", null, "186", this.div_Cont);
            obj.set_taborder("118");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_color("black");
            this.div_Cont.addChild(obj.name, obj);
            obj = new Edit("edt_bukipNm2", "absolute", "418", null, "86", "21", null, "186", this.div_Cont);
            obj.set_taborder("119");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_color("black");
            this.div_Cont.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0px", "0px", "0px", "0px", null, null, this);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_excelDown", "absolute", "0.09%", "778", null, "230", "31.26%", null, this);
            obj.set_taborder("3");
            obj.set_binddataset("DS_EDAY_AUDIT");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"251\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"접수일자\"/><Cell col=\"1\" text=\"소관부서\"/><Cell col=\"2\" text=\"공감법분류\"/><Cell col=\"3\" text=\"기관별분류\"/><Cell col=\"4\" text=\"건명\"/><Cell col=\"5\" text=\"사업비\"/><Cell col=\"6\" text=\"예산절감금액\"/><Cell col=\"7\" text=\"감사일자\"/><Cell col=\"8\" text=\"감사자\"/><Cell col=\"9\" text=\"감사결과\"/><Cell col=\"10\" text=\"감사결과요약\"/><Cell col=\"11\" text=\"조치일자\"/><Cell col=\"12\" text=\"조치확인\"/><Cell col=\"13\" text=\"공개여부\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" text=\"bind:RCEPT_DE\" calendardisplay=\"edit\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" text=\"bind:DEPT_NM\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"none\" text=\"bind:PUBLIC_AUDIT_CL\" combodataset=\"ds_aud014\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"none\" text=\"bind:INSTT_ACCTO_CL\" combodataset=\"ds_aud015\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:EDAY_AUDIT_NM\"/><Cell col=\"5\" displaytype=\"number\" text=\"bind:BSNS_AMOUNT\"/><Cell col=\"6\" displaytype=\"number\" text=\"bind:REDCN_AMOUNT\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:RPLY_DE_2\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" text=\"bind:ADTOR_EMPNM\"/><Cell col=\"9\" displaytype=\"combo\" text=\"bind:EDAY_AUDIT_RESULT\" combodataset=\"ds_aud016\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"10\" text=\"bind:MANAGT_RESULT\"/><Cell col=\"11\" displaytype=\"date\" text=\"bind:MANAGT_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"12\" displaytype=\"combo\" text=\"bind:MANAGT_CONFIRM\" combodataset=\"ds_aud038\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"13\" displaytype=\"normal\" text=\"expr:OTHBC_AT=='1'?'공개':'비공개'\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "1031", "0", "15", "735", null, null, this);
            obj.set_taborder("4");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", null, "0", "13", "735", "0", null, this);
            obj.set_taborder("5");
            obj.set_text("스\r\n크\r\n롤\r\n13");
            obj.set_visible("false");
            obj.style.set_background("#d07b173c");
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
            		p.set_classname("AUD010203");
            		p.set_titletext("일상감사결과관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item39","div_Cont.edt_adtorEmpno","value","DS_EDAY_AUDIT","ADTOR_EMPNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","div_Cont.edt_adtorEmpnm","value","DS_EDAY_AUDIT","ADTOR_EMPNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","div_Cont.edt_adtorDeptNm","value","DS_EDAY_AUDIT","ADTOR_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_Cont.edt_EDAY_AUDIT_NO","value","DS_EDAY_AUDIT","EDAY_AUDIT_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_Cont.cal_rplyDe","value","DS_EDAY_AUDIT","RPLY_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_Cont.txt_opinionCn","value","DS_EDAY_AUDIT","OPINION_CN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_Cont.txt_managtResult","value","DS_EDAY_AUDIT","MANAGT_RESULT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_Cont.cmb_resultDspthAt","value","DS_EDAY_AUDIT","RESULT_DSPTH_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","div_Cont.cal_managtDe","value","DS_EDAY_AUDIT","MANAGT_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","div_Cont.cmb_edayAuditresultSe","value","DS_EDAY_AUDIT","EDAY_AUDIT_RESULT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","div_Cont.edt_edayAuditNm","value","DS_EDAY_AUDIT","EDAY_AUDIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","div_Cont.txt_cn","value","DS_EDAY_AUDIT","EDAY_AUDIT_CN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","div_Cont.cal_rceptDe","value","DS_EDAY_AUDIT","RCEPT_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div_SearchArea.cal_rceptBgnDe","value","ds_cond","REQUST_BGN_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","div_SearchArea.cal_rceptEndDe","value","ds_cond","REQUST_END_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","div_SearchArea.edt_edayAuditNm","value","ds_cond","EDAY_AUDIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","div_SearchArea.cmb_publicAuditCl","value","ds_cond","PUBLIC_AUDIT_CL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","div_SearchArea.cmb_insttAcctoCl","value","ds_cond","INSTT_ACCTO_CL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","div_Cont.cmb_publicAuditCl","value","DS_EDAY_AUDIT","PUBLIC_AUDIT_CL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","div_Cont.cmb_insttAcctoCl","value","DS_EDAY_AUDIT","INSTT_ACCTO_CL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","div_Cont.edt_BSNS_CODE","value","DS_EDAY_AUDIT","BSNS_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","div_Cont.edt_BSNS_NM","value","DS_EDAY_AUDIT","BSNS_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","div_Cont.msk_bsnsAmount","value","DS_EDAY_AUDIT","BSNS_AMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","div_Cont.edt_deptNm","value","DS_EDAY_AUDIT","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","div_Cont.edt_emplnm00","value","DS_EDAY_AUDIT","EMPNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","div_Cont.edt_empno00","value","DS_EDAY_AUDIT","EMPNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","div_Cont.msk_redcnAmount","value","DS_EDAY_AUDIT","REDCN_AMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","div_Cont.cmb_managtConfirm","value","DS_EDAY_AUDIT","MANAGT_CONFIRM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","div_Cont.chk_othbcAt","value","DS_EDAY_AUDIT","OTHBC_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","div_SearchArea.cmb_edayAuditResult","value","ds_cond","EDAY_AUDIT_RESULT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","div_Cont.cal_rceptDe00","value","DS_EDAY_AUDIT","REQUST_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","div_Cont.txt_relateLrgCn","value","DS_EDAY_AUDIT","RELATE_LRG_CN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","div_Cont.search","visible","DS_EDAY_AUDIT","ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","div_Cont.cmb_edayAuditresultSe","readonly","DS_EDAY_AUDIT","READONLY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","div_Cont.cal_rplyDe","readonly","DS_EDAY_AUDIT","READONLY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","div_Cont.msk_redcnAmount","readonly","DS_EDAY_AUDIT","READONLY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","div_Cont.txt_opinionCn","readonly","DS_EDAY_AUDIT","READONLY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","div_Cont.txt_managtResult","readonly","DS_EDAY_AUDIT","READONLY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","div_Cont.cmb_managtConfirm","readonly","DS_EDAY_AUDIT","READONLY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","div_Cont.cmb_resultDspthAt","readonly","DS_EDAY_AUDIT","READONLY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","div_Cont.cal_managtDe","readonly","DS_EDAY_AUDIT","READONLY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","div_Cont.chk_othbcAt","readonly","DS_EDAY_AUDIT","READONLY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","div_Cont.btn_delFiles","visible","DS_EDAY_AUDIT","ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","div_Cont.btn_uploadFiles","visible","DS_EDAY_AUDIT","ENABLE_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","div_Cont.edt_cntrctJdgmnNo","value","DS_EDAY_AUDIT","CNTRCT_JDGMN_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item45","div_Cont.edt_cntrctJdgmnYear","value","DS_EDAY_AUDIT","CNTRCT_JDGMN_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item46","div_Cont.edt_cntrctNm","value","DS_EDAY_AUDIT","CNTRCT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item47","div_Cont.edt_cntrctNm","readonly","DS_EDAY_AUDIT","READONLY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item49","div_Cont.cmb_cntrctMthd","value","DS_EDAY_AUDIT","CNTRCT_MTHD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item55","div_Cont.cmb_cntrctMthd","readonly","DS_EDAY_AUDIT","READONLY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item53","div_Cont.cal_bsnsBgnde","value","DS_EDAY_AUDIT","BSNS_BGNDE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item50","div_Cont.cal_bsnsBgnde","readonly","DS_EDAY_AUDIT","READONLY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item54","div_Cont.cal_bsnsEndde","value","DS_EDAY_AUDIT","BSNS_ENDDE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item52","div_Cont.cal_bsnsEndde","readonly","DS_EDAY_AUDIT","READONLY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item51","div_Cont.edt_budgetAcntCode","value","DS_EDAY_AUDIT","BUDGET_ACNT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item56","div_Cont.edt_budgetAcntCode","readonly","DS_EDAY_AUDIT","READONLY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item57","div_Cont.edt_budgetAcntNm","value","DS_EDAY_AUDIT","BUDGET_ACNT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item58","div_Cont.edt_budgetAcntNm","readonly","DS_EDAY_AUDIT","READONLY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item60","div_Cont.edt_bukipCode","value","DS_EDAY_AUDIT","BUKIP_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item61","div_Cont.edt_bukipNm","value","DS_EDAY_AUDIT","BUKIP_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item48","div_Cont.edt_budgetAcntCode2","value","DS_EDAY_AUDIT","BUDGET_ACNT_CODE2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item59","div_Cont.edt_budgetAcntCode2","readonly","DS_EDAY_AUDIT","READONLY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item62","div_Cont.edt_budgetAcntNm2","value","DS_EDAY_AUDIT","BUDGET_ACNT_NM2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item63","div_Cont.edt_budgetAcntNm2","readonly","DS_EDAY_AUDIT","READONLY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item64","div_Cont.edt_bukipCode2","value","DS_EDAY_AUDIT","BUKIP_CODE2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item65","div_Cont.edt_bukipNm2","value","DS_EDAY_AUDIT","BUKIP_NM2");
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
        this.addIncludeScript("AUD010203.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("AUD010203.xfdl", "mis_lib::misUtil.xjs");
        this.addIncludeScript("AUD010203.xfdl", "lib::comUpDownUtils.xjs");
        this.registerScript("AUD010203.xfdl", function() {
        /***********************************************************************
         * 01. 업무구분 : 감사관리
         * 02. 화면명   : AUD010203.xfdl
         * 03. 화면설명 : 일상감사관리,일상감사결과관리 테이블을 관리한다.
         * 04. 작성일   : 2015.07.02
         * 05. 작성자   : 이지영
         * 06. 수정이력 : 2015.07.02 최초생성
         ***********************************************************************
         *     수정일     작성자   내용
         ***********************************************************************
         *
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
        //저장시 rowposition값 저장할 변수
        var save_row = -1;
        this.File_UpDownManager = null;
        this.chargerAt = false;

        /***********************************************************************
         * 설명: oninit 영역
         ************************************************************************/
        this.AUD010203_oninit = function(obj,e)
        {
        	// todo..
        }

        /***********************************************************************
         * 설명: 폼로딩시 처리
         ************************************************************************/
        this.AUD010203_onload = function(obj,e)
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
        	
        	this.ds_cond.clearData();   // 조회 데이터셋 초기화	
        	this.ds_cond.addRow();      // 조회 데이터셋 행추가
        	
        	this.div_SearchArea.div_dept.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");
        	this.div_SearchArea.div_EMP.fn_setBind("ds_cond","ADTOR_EMPNO","ADTOR_EMPNM");
        	
        	this.ds_cond.setColumn(0, "REQUST_BGN_DE", this.gfn_today().substring(0,4) + '0101');
        	this.ds_cond.setColumn(0, "REQUST_END_DE", this.gfn_today());
        		
        	var comboParams = [ ["ds_aud014S", "AUD014", 1, "전체"],	// 공감법분류(조회)
        						["ds_aud014" , "AUD014", 1, ""],		// 공감법분류
        	                    ["ds_aud015S", "AUD015", 1, "전체"], 	// 기관별분류(조회)
        	                    ["ds_aud015" , "AUD015", 1, ""],	 	// 기관별분류
        	                    ["ds_aud016S", "AUD016", 1, "전체"],	// 감사결과(조회)
        	                    ["ds_aud016" , "AUD016", 1, ""],		// 감사결과
        	                    ["ds_aud036" , "AUD036", 1, ""],		// 감사통보fcd
        	                    ["ds_aud038" , "AUD038", 1, ""],		// 조치확인여부
        	                    ["ds_ctr030" , "CTR030", 1, ""]			// 계약방식
        		              ];
        	var callback = function (svcId, errorCode, errorMsg) {
        		// 권한그룹 체크
        		if(this.gfn_authGrpId("AUD_ADMIN") != -1) {			// 감사담당자
        			this.chargerAt = true;
        		}
        				
        // 		this.ds_cond.setColumn(0, "DEPT_CODE"  , this.gfn_getDeptId());
        // 		this.ds_cond.setColumn(0, "DEPT_NM"    , this.gfn_getDeptName());
        // 		this.ds_cond.setColumn(0, "ADTOR_EMPNO", this.gfn_getEmpNo());
        // 		this.ds_cond.setColumn(0, "ADTOR_EMPNM", this.gfn_getUserName());
        		
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
         * 설명: 조회버튼 클릭시 처리
         ************************************************************************/
        this.fn_search = function(obj,e)
        {
        	 // 데이터셋 변경 체크
            if(Ex.util.isUpdated(this.DS_EDAY_AUDIT)) {
                if(!this.gfn_message("confirm.변경.취소.여부")) {
                    return false;
                }
            }

        	this.DS_EDAY_AUDIT.clearData();
        	
        	// validation 체크(요청일자)
        	if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond, this.ds_validation)) {
        		return;
        	}
        	
        	this.fn_transaction("selectEdayAuditList");
        }

        /***********************************************************************
         * 설명: 상단 저장버튼 클릭 시
         ************************************************************************/
        this.fn_save = function()
        {
        	//validation check		
        	if(!this.gfn_checkValidation(this.DS_EDAY_AUDIT, this.ds_validation)){
        		return;
        	}
        	
        	var rCnt = this.DS_EDAY_AUDIT.rowcount;
        	this.DS_EDAY_AUDIT.set_enableevent(false);
        	this.DS_EDAY_AUDIT.set_updatecontrol(false);
        	for(var i = 0; i < rCnt; i++) {
        		var adtorEmpno       = this.DS_EDAY_AUDIT.getColumn(i, "ADTOR_EMPNO");
        		var adtorDeptCode    = this.DS_EDAY_AUDIT.getColumn(i, "ADTOR_DEPT_CODE");
        		var orgAdtorEmpno    = this.DS_EDAY_AUDIT.getColumn(i, "ORG_ADTOR_EMPNO");
        		var orgAdtorDeptCode = this.DS_EDAY_AUDIT.getColumn(i, "ORG_ADTOR_DEPT_CODE");
        		if(adtorEmpno != orgAdtorEmpno || adtorDeptCode != orgAdtorDeptCode) {
        			this.DS_EDAY_AUDIT.setColumn(i, "CHG_ADTOR_AT", '1');
        		}
        	}
        	this.DS_EDAY_AUDIT.set_enableevent(true);
        	this.DS_EDAY_AUDIT.set_updatecontrol(true);

        	if(this.gfn_message("confirm.저장.여부")){
        		//현재 rowpostion값을 저장
        		save_row = this.DS_EDAY_AUDIT.rowposition;
        		this.fn_transaction("edayResultListU");
        	}
        }

        /***********************************************************************
        * 상단취소
        ************************************************************************/
        this.fn_cancel = function()
        {
        	if(!this.comUtils.isDatasetUpdated(this.DS_EDAY_AUDIT))
        	{
        		this.gfn_message("comm.내역.변경.없음");
        	}else{
        		if(this.gfn_message("confirm.취소여부")){
        			this.DS_EDAY_AUDIT.reset();		//DATASET ROLLBACK
        			this.DS_EDAY_AUDIT.applyChange();	//DATASET COMMIT
        			return;
        		}
        	}
        }

        /***********************************************************************
         * 설명: 내부결재 처리
         ************************************************************************/
        this.fn_sanction = function(obj,e)
        {
        	var rRow    	    = this.DS_EDAY_AUDIT.rowposition;
        	var edayAuditResult = this.DS_EDAY_AUDIT.getColumn(rRow, "EDAY_AUDIT_RESULT");	// 일상감사결과

        	// 결재 전 유효성 체크(resultSn 값 존재여부)
        	if(this.comUtils.isNull(edayAuditResult)) {
        		this.gfn_message("comm.정보.저장.요청", "일상감사등록");
        		return;
        	}
        	var fRow   = this.ds_aud016.findRow("CODE", edayAuditResult);
        	var codeNm = this.ds_aud016.getColumn(fRow, "CODE_NM");
        	
        	// 결재 전 유효성 체크
        	if(Ex.util.isUpdated(this.DS_EDAY_AUDIT)) {
        		this.gfn_message("comm.정보.저장.요청", "일상감사등록");
        		return;
        	}
        	
        	// 결재상태 COM022 (0: 기안전 1:기안 2:반송 3:취소 4:중간결재 5:결재완료)
        	if(['1','4','5'].indexOf(this.DS_EDAY_AUDIT.getColumn(rRow, "SANCTN_STS")) > -1) {
        		this.gfn_message("info.처리불가","결재가 진행중이거나 완료된 데이터는 결재할 수 없습니다.");
        		return;
        	}
        	
        	if(this.DS_EDAY_AUDIT.rowcount == 0) {
        		this.gfn_message("info.처리불가","일상감사등록 내역이 선택되지 않았습니다.");
        		return;
        	}	
        	
        	var deptNm       = this.DS_EDAY_AUDIT.getColumn(rRow, "DEPT_NM");
        	var rceptDe      = this.DS_EDAY_AUDIT.getColumn(rRow, "RCEPT_DE");
        	var edayAuditNm  = this.DS_EDAY_AUDIT.getColumn(rRow, "EDAY_AUDIT_NM");		// 건명
        	var opinionCn    = !this.comUtils.isNull(this.DS_EDAY_AUDIT.getColumn(rRow, "OPINION_CN")) ? this.DS_EDAY_AUDIT.getColumn(rRow, "OPINION_CN") : "";	// 검토내용
        	var managtResult = !this.comUtils.isNull(this.DS_EDAY_AUDIT.getColumn(rRow, "MANAGT_RESULT")) ? this.DS_EDAY_AUDIT.getColumn(rRow, "MANAGT_RESULT") : "";	// 조치의견
        	var rceptYear    = this.DS_EDAY_AUDIT.getColumn(rRow, "RCEPT_YEAR");			// 접수년도
        	var edayAuditNo  = this.DS_EDAY_AUDIT.getColumn(rRow, "EDAY_AUDIT_NO");
        	var opinionNo    = rceptYear + "-" + edayAuditNo.padLeft(3, "0");			// 의견서번호
        	var deptNm       = this.DS_EDAY_AUDIT.getColumn(rRow, "DEPT_NM");			// 주관부서
        	var rceptDe      = this.DS_EDAY_AUDIT.getColumn(rRow, "RCEPT_DE");			// 접수일자
        	var edayAuditNm  = this.DS_EDAY_AUDIT.getColumn(rRow, "EDAY_AUDIT_NM");		// 건명

        	var bsnsBgnde    = !this.comUtils.isNull(this.DS_EDAY_AUDIT.getColumn(rRow, "BSNS_BGNDE")) ? this.fn_dateStr(this.DS_EDAY_AUDIT.getColumn(rRow, "BSNS_BGNDE"), ". ") : "○○"; // 사업시작일자
        	var bsnsEndde    = !this.comUtils.isNull(this.DS_EDAY_AUDIT.getColumn(rRow, "BSNS_ENDDE")) ? this.fn_dateStr(this.DS_EDAY_AUDIT.getColumn(rRow, "BSNS_ENDDE"), ". ") : "○○"; // 사업종료일자
        	var bsnsDe       =  bsnsBgnde +" ~ "+ bsnsEndde;
        	var edayAuditCn  = this.DS_EDAY_AUDIT.getColumn(rRow, "EDAY_AUDIT_CN");	// 내용
        	var bsnsAmount   = !this.comUtils.isNull(this.DS_EDAY_AUDIT.getColumn(rRow, "BSNS_AMOUNT")) ? nexacro.toNumber(this.DS_EDAY_AUDIT.getColumn(rRow, "BSNS_AMOUNT")) : 0;		// 사업비
        	var bsnsAm       = "일금"+this.fn_numToHangul(bsnsAmount)+"원정" + "(￦" + this.comUtils.formatComma(bsnsAmount) + ")";	// 기초금액(사업비한글)

        	// ================= 예산

        	// 예산 1
        	var budgetCode  = this.DS_EDAY_AUDIT.getColumn(rRow, "BUDGET_ACNT_CODE"); // 필수여야하는 예산코드
        	var budgetNm    = !this.comUtils.isNull(this.DS_EDAY_AUDIT.getColumn(rRow, "BUDGET_ACNT_NM")) ? this.DS_EDAY_AUDIT.getColumn(rRow, "BUDGET_ACNT_NM") : 0 ;				// 예산명
        	var budgetBlce1 = !this.comUtils.isNull(this.DS_EDAY_AUDIT.getColumn(rRow, "BUDGET_BLCE")) ? nexacro.toNumber(this.DS_EDAY_AUDIT.getColumn(rRow, "BUDGET_BLCE")) : 0 ;	// 예산액1
        	var gwanCode1   = this.DS_EDAY_AUDIT.getColumn(rRow, "GWAN_CD");		// 관_코드1
        	var hangCode1   = this.DS_EDAY_AUDIT.getColumn(rRow, "HANG_CD");		// 항_코드1
        	var sehangCode1 = this.DS_EDAY_AUDIT.getColumn(rRow, "SEHANG_CD");		// 세항_코드1
        	var mokCode1    = this.DS_EDAY_AUDIT.getColumn(rRow, "MOK_CD");			// 목_코드1
        	var semokCode1  = this.DS_EDAY_AUDIT.getColumn(rRow, "SEMOK_CD");		// 세목_코드1
        	var gwanNm1     = this.DS_EDAY_AUDIT.getColumn(rRow, "GWAN_NM");		// 관_명1
        	var hangNm1     = this.DS_EDAY_AUDIT.getColumn(rRow, "HANG_NM");		// 항_명1
        	var sehangNm1   = this.DS_EDAY_AUDIT.getColumn(rRow, "SEHANG_NM");		// 세항_명1
        	var mokNm1      = this.DS_EDAY_AUDIT.getColumn(rRow, "MOK_NM");			// 목_명1
        	var semokNm1    = this.DS_EDAY_AUDIT.getColumn(rRow, "SEMOK_NM");		// 세목_명1
        	var bukipNm1    = this.DS_EDAY_AUDIT.getColumn(rRow, "BUKIP_NM");		// 부기명1
        	var semokNm1_bukip1 = semokNm1+"("+bukipNm1+")";
        	
        	// 예산 2
        	var budgetBlce2 = !this.comUtils.isNull(this.DS_EDAY_AUDIT.getColumn(rRow, "BUDGET_BLCE2")) ? nexacro.toNumber(this.DS_EDAY_AUDIT.getColumn(rRow, "BUDGET_BLCE2")) : 0 ;// 예산액2
        	var gwanCode2   = this.DS_EDAY_AUDIT.getColumn(rRow, "GWAN_CD2");		// 관_코드2
        	var hangCode2   = this.DS_EDAY_AUDIT.getColumn(rRow, "HANG_CD2");		// 항_코드2
        	var sehangCode2 = this.DS_EDAY_AUDIT.getColumn(rRow, "SEHANG_CD2");		// 세항_코드2
        	var mokCode2    = this.DS_EDAY_AUDIT.getColumn(rRow, "MOK_CD2");		// 목_코드2
        	var semokCode2  = this.DS_EDAY_AUDIT.getColumn(rRow, "SEMOK_CD2");		// 세목_코드2
        	var gwanNm2     = this.DS_EDAY_AUDIT.getColumn(rRow, "GWAN_NM2");		// 관_명2
        	var hangNm2     = this.DS_EDAY_AUDIT.getColumn(rRow, "HANG_NM2");		// 항_명2
        	var sehangNm2   = this.DS_EDAY_AUDIT.getColumn(rRow, "SEHANG_NM2");		// 세항_명2
        	var mokNm2      = this.DS_EDAY_AUDIT.getColumn(rRow, "MOK_NM2");		// 목_명2
        	var semokNm2    = this.DS_EDAY_AUDIT.getColumn(rRow, "SEMOK_NM2");		// 세목_명2
        	var bukipNm2    = this.DS_EDAY_AUDIT.getColumn(rRow, "BUKIP_NM2");		// 부기명2
        	var semokNm1_bukip2 = semokNm2+"("+bukipNm2+")";
        	
        	var budgetBlce = "일금"+this.fn_numToHangul(budgetBlce1 + budgetBlce2)+"원정" + "(￦" + this.comUtils.formatComma(budgetBlce1 + budgetBlce2) + ")";	// 예산액
        	
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
        	
        	var bsnsBudget = !this.comUtils.isNull(budgetCode) ? budgetNm+"("+gwanNm+"/"+hangNm+"/"+sehangNm+"/"+mokNm+"/"+semokNm+")" : "";	// 사업예산
        	// ======================
        	
        	var redcnAmount   = !this.comUtils.isNull(this.DS_EDAY_AUDIT.getColumn(rRow, "REDCN_AMOUNT")) ? nexacro.toNumber(this.DS_EDAY_AUDIT.getColumn(rRow, "REDCN_AMOUNT")) : 0;		// 절감금액
        	var evaluationAmount  = (bsnsAmount + redcnAmount);	// 심사금액(사업비-절감금액)

        	// 사업비 50,000천원 이하 - 제외대상
        	var evaluation = "제외대상[50,000천원 이하]";	
        	var edayAuditCn   = this.DS_EDAY_AUDIT.getColumn(rRow, "EDAY_AUDIT_CN");		// 계약심사
        	
        	// 계약명 
        	var cntrctMthd   = this.DS_EDAY_AUDIT.getColumn(rRow, "CNTRCT_MTHD");
        	var cntrctMthdRow = this.ds_ctr030.findRow("CODE", cntrctMthd);		
        	var cntrctMthdNm  = !this.comUtils.isNull(cntrctMthd) ? (this.ds_ctr030.getColumn(cntrctMthdRow, "CODE_NM")+"계약") : "";	// 계약방식
        	
        	var enter = String.fromCharCode(13) + String.fromCharCode(10);
        	
        	var am1 = this.comUtils.formatComma(bsnsAmount);									// 요청금액(사업비)
        	var am2 = this.comUtils.formatComma(evaluationAmount);								// 심사금액(사업비-절감금액)
        	var am3 = (redcnAmount == 0 ? "" : "-"+this.comUtils.formatComma(redcnAmount));		// 조정금액(절감금액)
        	
        	var cn1 = "";	// 개요1
        	var cn2 = "";	// 개요2
        	var cn3 = "";	// 개요3
        	// 1. 개요
        	cn1 += "○ 건    명 : "+edayAuditNm+"\\r\\n";
        	cn1 += "○ 사업기간 : "+bsnsDe+"\\r\\n";
        	cn1 += "○ 사업대상 : "+"\\r\\n";			// 칸만 제공
        	cn1 += "○ 내    용 : "+edayAuditCn+"\\r\\n";
        	cn1 += "○ 예 산 액 : "+budgetBlce+"\\r\\n";
        	cn1 += "○ 기초금액 : "+bsnsAm;
        	
        	// 2. 검토내용
        	cn2 += "○ 사업예산 : "+bsnsBudget+"\\r\\n";
        	cn2 += "○ 시행근거 : "+"\\r\\n";			// 칸만 제공
        	cn2 += "○ 계약심사 : "+evaluation+"\\r\\n";
        	cn2 += "○ 계약방식 : "+cntrctMthdNm+"\\r\\n";
        	cn2 += "○ 검토내용 : "+opinionCn+"\\r\\n";
        	cn2 += "○ 감사결과 : "+codeNm;
        	
        	// 3. 조치의견
        	cn3 += "○ "+managtResult;
           
            var arrSancData = new Array(12);
            arrSancData[ 0] = "일상감사 결과통보[" + edayAuditNm + "]";
            arrSancData[ 1] = "(의견서 번호 : " + opinionNo + ")";		// 의견서번호
            arrSancData[ 2] = deptNm;														// 주관부서
            arrSancData[ 3] = this.fn_dateStr(rceptDe, ". ");								// 접수일자
            arrSancData[ 4] = edayAuditNm;								// 건명
            arrSancData[ 5] = cn1;										// 개요
            arrSancData[ 6] = am1;															// 요청금액
        	arrSancData[ 7] = am2;															// 심사금액
        	arrSancData[ 8] = am3;															// 조정금액
        	arrSancData[ 9] = null;															// 조정내역
        	arrSancData[10] = cn2;										// 검토내용
        	arrSancData[11] = cn3;										// 조치의견

            this.fn_callHandySanc2(
                this                        					// context
               ,'0000000083'                  					// formId
               ,this.DS_EDAY_AUDIT         						// misDataset
               ,"TBAUD_EDAY_AUDIT_RESULT"           			// tableName
               ,["RESULT_SN", "EDAY_AUDIT_NO", "RCEPT_YEAR"] 	// tableKey
               ,arrSancData                  					// arrSancData
               ,null                			   			 	// subData
               ,null                  							// multiCheck(0 or 1)
               ,null            								// otherColumn
         	  ,this.ds_fileList									// file Dataset
            );
        }
        /**********************************************************************
         * CALL TRANSACTION 영역
         **********************************************************************/ 
        this.fn_transaction = function(strSvcId)
        {
        	switch (strSvcId) {
        		
        		//상단조회
        		case "selectEdayAuditList": 
        			this.ds_fileList.clearData();
        			var sController   	= "hsco/mis/aud/AUD010203/selectEdayAuditList.do";
        			var sInDatasets   	= "input01=ds_cond";
        			var sOutDatasets  	= "DS_EDAY_AUDIT=output01";
        		break;	
        		
        		//상단저장
        		case "edayResultListU":
        			var sController   	= "hsco/mis/aud/AUD010203/edayResultListU.do";
        			var sInDatasets   	= "input03=DS_EDAY_AUDIT:U";
        			var sOutDatasets  	= "";
        		break;
        		
        		//첨부파일조회(결과)
        		case "selectAtchFile":
        			this.div_Cont.grd_cmmnAtchmnfl.setCellProperty("head", 0, "text", "0");
        			this.ds_fileSn.clearData();
        			this.ds_fileSn.addRow();
        			this.ds_fileSn.setColumn(0, "FILE_SN", this.DS_EDAY_AUDIT.getColumn(this.DS_EDAY_AUDIT.rowposition, "RESULT_ATCH_FILE"));	// 재조회목적(좋은 방법은 아니지만, 공통을 최대한 안바꾸려면)
        			var sController  = "/hsco/cmm/file/selectAtchmnFileList.do";
        			var sInDatasets  = "input1=ds_fileSn";
        			var sOutDatasets = "ds_fileList=output1";
        		break;
        		
        		//첨부파일조회(요청)
        		case "requestSelectAtchFile":
        			this.div_Cont.grd_cmmnAtchmnflRequest.setCellProperty("head", 0, "text", "0");
        			this.ds_fileSn.clearData();
        			this.ds_fileSn.addRow();
        			this.ds_fileSn.setColumn(0, "FILE_SN", this.DS_EDAY_AUDIT.getColumn(this.DS_EDAY_AUDIT.rowposition, "ATCH_FILE"));	// 재조회목적(좋은 방법은 아니지만, 공통을 최대한 안바꾸려면)
        			var sController  = "/hsco/cmm/file/selectAtchmnFileList.do";
        			var sInDatasets  = "input1=ds_fileSn";
        			var sOutDatasets = "ds_fileListRequest=output1";
        		break;
        		
        		// 메시지전송
        		case "sendMessage":
        			var sController  = "hsco/mis/aud/AUD010203/sendMessage.do";
        			var sInDatasets  = "input1=ds_uc";
        			var sOutDatasets = "";
        			break;
        	}
        	var sArgs = "";	
        	Ex.core.tran(this, strSvcId, sController, sInDatasets, sOutDatasets, sArgs); 
        }
        /***********************************************************************************
        * 설명	: 트랜잭션 콜백함수를 처리한다.
        ***********************************************************************************/
        this.fn_callBack = function (strSvcId,nErrorCode,strErrorMsg)
        { 
        	if(nErrorCode != 0){
        		this.gfn_callback_message(strSvcId, nErrorCode, strErrorMsg);
        	}else{
        		if (strSvcId =="edayResultListU")
        		{
        			this.fn_search();
        		}
        		if (strSvcId == "selectEdayAuditList")
        		{
        			//저장트랜잭션 직전 rowposition값으로 이동
        			//this.div_Cont.sta_EDAY_AUDIT_LIST.set_text("일상감사요청목록(" + this.DS_EDAY_AUDIT.rowcount + "건)");
        			if(save_row != -1)
        			{
        				this.DS_EDAY_AUDIT.set_rowposition(save_row);				
        				save_row = -1;
        			}
        		}
        		if (strSvcId == "selectAtchFile")
        		{
        			this.fn_transaction("requestSelectAtchFile");
        		}
        		if (strSvcId == "sendMssage")
        		{
        			this.gfn_message("success.처리.성공");
        		}
        	}
        }
        /***********************************************************************
         * 설명: 의견서 버튼 클릭시
         ************************************************************************/
        this.div_Cont_btn_OPINION_REPORT_onclick = function(obj,e)
        {
        	var nRow = this.DS_EDAY_AUDIT.rowposition;
        	var sanctnSts = this.DS_EDAY_AUDIT.getColumn(nRow, "SANCTN_STS");
        	
        	if(sanctnSts != '5') {
        		this.gfn_message("info.처리불가", "결재상태가 완료가 아닙니다.");
        		return false;
        	}
        	else {
        		alert("의견서출력 버튼입니다.");
        		return false;
        	}
        }

        /***********************************************************************************
        * 설명	: 일상감사목록 행 변경시 
        ***********************************************************************************/
        this.DS_EDAY_AUDIT_onrowposchanged = function(obj,e)
        {
        	this.ds_fileList.clearData();
        	this.ds_fileListRequest.clearData();
        	
        	if(e.newrow > -1) {
        		var readonly = obj.getColumn(e.newrow, "READONLY");
        		
        		if(readonly == '1') {
        			this.div_Cont.cmb_edayAuditresultSe.set_cssclass("cmb_WF_Readonly");
        			this.div_Cont.cal_rplyDe.set_cssclass("cal_WF_Readonly");
        			this.div_Cont.msk_redcnAmount.set_cssclass("msk_WF_Readonly");
        			this.div_Cont.txt_opinionCn.set_cssclass("txt_WF_Readonly");
        			this.div_Cont.txt_managtResult.set_cssclass("txt_WF_Readonly");
        			this.div_Cont.cmb_managtConfirm.set_cssclass("cmb_WF_Readonly");
        			this.div_Cont.cal_managtDe.set_cssclass("cal_WF_Readonly");
        			this.div_Cont.cmb_resultDspthAt.set_cssclass("cmb_WF_Readonly");
        			this.div_Cont.chk_othbcAt.set_cssclass("chk_WF_Readonly");
        		}
        		else {
        			this.div_Cont.cmb_edayAuditresultSe.set_cssclass("cmb_WF_Essential");
        			this.div_Cont.cal_rplyDe.set_cssclass("cal_WF_Essential");
        			this.div_Cont.msk_redcnAmount.set_cssclass("");
        			this.div_Cont.txt_opinionCn.set_cssclass("");
        			this.div_Cont.txt_managtResult.set_cssclass("");
        			this.div_Cont.cmb_managtConfirm.set_cssclass("");
        			this.div_Cont.cal_managtDe.set_cssclass("");
        			this.div_Cont.cmb_resultDspthAt.set_cssclass("");
        			this.div_Cont.chk_othbcAt.set_cssclass("");
        		}
        		
        		this.fn_transaction("selectAtchFile");
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
        		, this.ds_fileList			            // fileObject
        		, this.DS_EDAY_AUDIT	                // fileSn을 불러오거나 반영해야 하는 컬럼
        		, "TBAUD_EDAY_AUDIT_RESULT"	          	// fileSn을 저장할 테이블
        		, "ATCH_FILE"							// fileSn 컬럼명이 다를 경우를 대비
        		, ["RESULT_SN", "EDAY_AUDIT_NO", "RCEPT_YEAR"]	    // fileSn을 저장할 테이블의 PK (FileSn 확인 및 자동반영목적)
        	);
        }
        /***********************************************************************
         * 설명 : 첨부파일 선택다운로드 버튼클릭 시
         ***********************************************************************/
        this.btn_downFiles_onclick = function(obj,e)
        {
        	switch(obj.name){
        		case "btn_downFilesRequest":
        			var findRow = this.ds_fileListRequest.findRow("CHK", "1");
        			if(findRow < 0) {
        				this.gfn_message("comm.데이터.선택.없음");
        				return;
        			}
        			
        			for(var fRow = 0; fRow < this.ds_fileListRequest.getRowCount(); fRow++) {
        				var fileSn    = this.ds_fileListRequest.getColumn(fRow, "FILE_SN");
        				var fileOrder = this.ds_fileListRequest.getColumn(fRow, "FILE_ORDR");
        				var fileName  = this.ds_fileListRequest.getColumn(fRow, "ORGINL_FILE_NM");
        				var chk       = this.ds_fileListRequest.getColumn(fRow, "CHK");
        				if(chk == '1') {
        					this.File_UpDownManager.download(fileSn, fileOrder, fileName);
        				}
        			}
        		break;
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

        /***********************************************************************************
        * 설명	: 검색버튼 클릭
        ***********************************************************************************/
        this.div_sear_search_onclick = function(obj,e)
        {
        	var parm = {
        	     arg_0      : this
        	};
        	
        	this.gfn_popup("Popup1", 400, 400, "", parm, "com::empno_P01.xfdl", "fn_callback5", true);
        }

        /***********************************************************************************
        * 설명	: 사원선택 팝업 콜백
        ***********************************************************************************/
        this.fn_callback5 = function(sPopupId,sReturn)
        {
        	if(sPopupId == "Popup1"){
        		var DS_EMPNO = new Dataset;
        		DS_EMPNO.clearData();
                nRowCnt = DS_EMPNO.loadXML(sReturn);
                if(nRowCnt > 0){
        			this.DS_EDAY_AUDIT.setColumn(this.DS_EDAY_AUDIT.rowposition, "ADTOR_EMPNO",     DS_EMPNO.getColumn(0, "EMPNO"));
        			this.DS_EDAY_AUDIT.setColumn(this.DS_EDAY_AUDIT.rowposition, "ADTOR_EMPNM",     DS_EMPNO.getColumn(0, "EMPNM"));
        			this.DS_EDAY_AUDIT.setColumn(this.DS_EDAY_AUDIT.rowposition, "ADTOR_DEPT_NM",   DS_EMPNO.getColumn(0, "DEPT_NM"));
        			this.div_Cont.search.set_visible(false);
        		}
        	}
        }

        /**************************************************************************
        * 엑셀 다운로드
        **************************************************************************/
        this.btn_excelDn_onclick = function(obj,e)
        {
        	if(obj.name == "btn_excelDn"){
        		this.gfn_exportExcel(this.grd_excelDown, "exportExl");
        	}
        }

        /***********************************************************************
         * 설명 : 조회조건 변경시
         ***********************************************************************/
        this.DS_SEARCH_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "PUBLIC_AUDIT_CL") {
        		this.ds_aud015S.filter("String(VAL1).indexOf('" + e.newvalue + "') >= 0 || CODE == ''");
        		obj.setColumn(e.row, "INSTT_ACCTO_CL", "");
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
         *문자전송 버튼 클릭시
        **************************************************************************/
        this.div_Cont_btn_sendMssage_onclick = function(obj,e)
        {
        	var rCnt = this.DS_EDAY_AUDIT.rowcount;
        	if(rCnt < 1) {
        		this.gfn_message("comm.항목.선택.요청","일상감사요청목록");
        		return false;
        	}
        	
        	var nRow = this.DS_EDAY_AUDIT.rowposition;
        	var empno = this.DS_EDAY_AUDIT.getColumn(nRow, "EMPNO");
        	if(this.comUtils.isNull(empno)) {
        		this.gfn_message("info.처리불가","담당자 정보가 없습니다. 확인 후 다시 시도하여 주십시오.");
        		return false;
        	}
        	
        	var orgResult = this.DS_EDAY_AUDIT.getColumn(nRow, "ORG_EDAY_AUDIT_RESULT");
        	var orgRplyDe = this.DS_EDAY_AUDIT.getColumn(nRow, "ORG_RPLY_DE");
        	if(this.comUtils.isNull(orgResult) || this.comUtils.isNull(orgRplyDe)) {
        		this.gfn_message("info.처리불가","일상감사결과 저장 후 다시 시도하여 주십시오.");
        		return false;
        	}
        	
        	this.ds_uc.setColumn(0, "RECV_IDS", empno);
        	
        	if(this.gfn_message("comm.행위여부", "메시지 전송을")) {
        		this.fn_transaction("sendMessage");
        	}
        }

        
        /*
         * 함수명  	: div_Cont_grd_EDAY_AUDIT_LIST_oncelldblclick
         * 설명 		: 그리드 셀 더블클릭 이벤트 함수
         * params  		: none
         * return Type 	: none
         * 사용법		: this.div_Cont_grd_EDAY_AUDIT_LIST_oncelldblclick()
         */
        this.div_Cont_grd_EDAY_AUDIT_LIST_oncelldblclick = function(obj,e)
        {
        	if(e.col == 0) {
        		var nRow = this.DS_EDAY_AUDIT.rowposition;
        		if(['1','2','3','4','5'].indexOf(this.DS_EDAY_AUDIT.getColumn(nRow, "SANCTN_STS")) > -1) {
        			this.fn_openSanc(this.DS_EDAY_AUDIT.getColumn(nRow, "SANCTN_NO"));
        		}
        	}
        }

        
        /*
         * 함수명  	: DS_EDAY_AUDIT_cancolumnchange
         * 설명 		: DS_EDAY_AUDIT 데이터 변경 전 발생
         * params  		: none
         * return Type 	: none
         * 사용법		: this.DS_EDAY_AUDIT_cancolumnchange()
         */
        this.DS_EDAY_AUDIT_cancolumnchange = function(obj,e)
        {
        	// 절감금액
        	if(e.columnid == "REDCN_AMOUNT") {
        		var bsnsAmout = !this.comUtils.isNull(obj.getColumn(e.row, "BSNS_AMOUNT")) ? nexacro.toNumber(obj.getColumn(e.row, "BSNS_AMOUNT")) : 0;
        		if(!this.comUtils.isNull(e.newvalue) && bsnsAmout < e.newvalue) {
        			this.gfn_message("info.처리불가","절감금액은 사업비보다 작거나 같아야 합니다.");
        			return false;
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.DS_EDAY_AUDIT.addEventHandler("onrowposchanged", this.DS_EDAY_AUDIT_onrowposchanged, this);
            this.DS_EDAY_AUDIT.addEventHandler("cancolumnchange", this.DS_EDAY_AUDIT_cancolumnchange, this);
            this.ds_cond.addEventHandler("oncolumnchanged", this.DS_SEARCH_oncolumnchanged, this);
            this.addEventHandler("onload", this.AUD010203_onload, this);
            this.addEventHandler("oninit", this.AUD010203_oninit, this);
            this.div_SearchArea.cmb_publicAuditCl.addEventHandler("onitemchanged", this.Div00_div_cmb_AUDIT_PLAN_KND_onitemchanged, this);
            this.div_SearchArea.cmb_edayAuditResult.addEventHandler("onitemchanged", this.Div00_div_cmb_AUDIT_PLAN_KND_onitemchanged, this);
            this.div_SearchArea.div_EMP.addEventHandler("onkeyup", this.div_SEARCH_div_EMP_onkeyup, this);
            this.div_Cont.edt_empno00.addEventHandler("onkeyup", this.edt_empno_onkeyup, this);
            this.div_Cont.sta_EDAY_AUDIT_LIST.addEventHandler("onclick", this.Static00_onclick, this);
            this.div_Cont.sta_EDAY_AUDIT_DSPTH.addEventHandler("onclick", this.Static00_onclick, this);
            this.div_Cont.grd_EDAY_AUDIT_LIST.addEventHandler("oncelldblclick", this.div_Cont_grd_EDAY_AUDIT_LIST_oncelldblclick, this);
            this.div_Cont.cmb_edayAuditresultSe.addEventHandler("onitemchanged", this.div_Cont_cmb_edayAuditresultSe_onitemchanged, this);
            this.div_Cont.sta_atchFile.addEventHandler("onclick", this.Static00_onclick, this);
            this.div_Cont.btn_downFiles.addEventHandler("onclick", this.btn_downFiles_onclick, this);
            this.div_Cont.btn_uploadFiles.addEventHandler("onclick", this.btn_uploadFiles_onclick, this);
            this.div_Cont.btn_delFiles.addEventHandler("onclick", this.btn_delFiles_onclick, this);
            this.div_Cont.grd_cmmnAtchmnfl.addEventHandler("onheadclick", this.grd_cmmnAtchmnfl_onheadclick, this);
            this.div_Cont.Static00.addEventHandler("onclick", this.Static47_onclick, this);
            this.div_Cont.sta_atchFile00.addEventHandler("onclick", this.Static00_onclick, this);
            this.div_Cont.btn_downFilesRequest.addEventHandler("onclick", this.btn_downFiles_onclick, this);
            this.div_Cont.grd_cmmnAtchmnflRequest.addEventHandler("onheadclick", this.grd_cmmnAtchmnfl_onheadclick, this);
            this.div_Cont.sta_atchFile01.addEventHandler("onclick", this.Static00_onclick, this);
            this.div_Cont.sta_EDAY_AUDIT_DSPTH00.addEventHandler("onclick", this.Static00_onclick, this);
            this.div_Cont.Static06.addEventHandler("onclick", this.div_Cont_Static06_onclick, this);
            this.div_Cont.edt_adtorEmpno.addEventHandler("onkeyup", this.edt_empno_onkeyup, this);
            this.div_Cont.edt_adtorDeptNm.addEventHandler("onkeyup", this.edt_empno_onkeyup, this);
            this.div_Cont.search.addEventHandler("onclick", this.div_sear_search_onclick, this);
            this.div_Cont.cmb_publicAuditCl.addEventHandler("onitemchanged", this.div_Cont_cmb_publicAuditCl_onitemchanged, this);
            this.div_Cont.edt_emplnm00.addEventHandler("onkeyup", this.edt_emplnm_onkeyup, this);
            this.div_Cont.btn_excelDn.addEventHandler("onclick", this.btn_excelDn_onclick, this);
            this.div_Cont.btn_OPINION_REPORT.addEventHandler("onclick", this.div_Cont_btn_OPINION_REPORT_onclick, this);
            this.div_Cont.sta_relateLrgCn.addEventHandler("onclick", this.div_Cont_sta_relateLrgCn_onclick, this);
            this.div_Cont.btn_sendMssage.addEventHandler("onclick", this.div_Cont_btn_sendMssage_onclick, this);
            this.div_Cont.edt_cntrctNm.addEventHandler("onchanged", this.div_Cont_edt_cntrctNm_onchanged, this);

        };

        this.loadIncludeScript("AUD010203.xfdl");
        this.loadPreloadList();
       
    };
}
)();
