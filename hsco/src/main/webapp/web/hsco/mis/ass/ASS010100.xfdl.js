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
                this.set_name("ASS010100");
                this.set_classname("ASS010100");
                this.set_titletext("자산대장");
                this._setFormPosition(0,0,1059,735);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_assetsMastr", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ASSETS_CL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ASSETS_CL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ASSETS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ASSETS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UNTPC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GOVSUBY_ACQS_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ASSETS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"STNDRD\" type=\"STRING\" size=\"256\"/><Column id=\"QY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ACQS_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ACQS_SUPLY_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MRN_CT\" type=\"STRING\" size=\"256\"/><Column id=\"ACQS_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ACQS_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PUCHAS_BCNC\" type=\"STRING\" size=\"256\"/><Column id=\"BCNC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DPRC_MTH\" type=\"STRING\" size=\"256\"/><Column id=\"DPRC_RT\" type=\"FLOAT\" size=\"256\"/><Column id=\"CN_YYCNT\" type=\"STRING\" size=\"256\"/><Column id=\"DPRT_COMPT_AT\" type=\"STRING\" size=\"256\"/><Column id=\"DPRT_CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DISUSE_PROCESS_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/><Column id=\"BIZPLC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BIZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RFID\" type=\"STRING\" size=\"256\"/><Column id=\"BRCD\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"STTUS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM_AT\" type=\"STRING\" size=\"256\"/><Column id=\"REMARKS\" type=\"STRING\" size=\"256\"/><Column id=\"GVRN_THNG_CL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_assetsDetail", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DPRC_YM\" type=\"STRING\" size=\"256\"/><Column id=\"ACQS_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"MT_DPRC_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DPRC_ACMTL_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"GOVSUBY_ACQS_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"GOVSUBY_MT_DPRC_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"GOVSUBY_DPRC_ACMTL_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TRMEND_BLCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond2", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ASSETS_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ASSETS_CL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ASSETS_CL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ASSETS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACQS_DE1\" type=\"STRING\" size=\"256\"/><Column id=\"ACQS_DE2\" type=\"STRING\" size=\"256\"/><Column id=\"ACQS_AMOUNT1\" type=\"STRING\" size=\"256\"/><Column id=\"ACQS_AMOUNT2\" type=\"STRING\" size=\"256\"/><Column id=\"DPRT_COMPT_AT\" type=\"STRING\" size=\"256\"/><Column id=\"REQUST_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"REQUST_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZPLC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BIZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STTUS_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dprcMth", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">2</Col><Col id=\"DATA\">정률법</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">정액법</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_acc001", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cmp002", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
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
            obj._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">ACQS_DE1</Col><Col id=\"msgId\">취득일자 시작일^취득일자 종료일</Col><Col id=\"to\">ACQS_DE2</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">ACQS_DE2</Col><Col id=\"PK\">[Undefined]</Col><Col id=\"notNull\"/><Col id=\"type\">[Undefined]</Col><Col id=\"nlength\">[Undefined]</Col><Col id=\"from\">ACQS_DE1</Col><Col id=\"to\"/><Col id=\"lengthChkGb\">[Undefined]</Col><Col id=\"msgId\">취득일자 종료일^취득일자 시작일</Col><Col id=\"expr\">[Undefined]</Col><Col id=\"func\">[Undefined]</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">ACQS_AMOUNT1</Col><Col id=\"msgId\">취득가액 시작액^취득가액 종료액</Col><Col id=\"to\">ACQS_AMOUNT2</Col><Col id=\"nlength\">15</Col><Col id=\"lengthChkGb\">LE</Col></Row><Row><Col id=\"colId\">ACQS_AMOUNT2</Col><Col id=\"from\">ACQS_AMOUNT1</Col><Col id=\"to\"/><Col id=\"compId\">ds_cond</Col><Col id=\"msgId\">취득가액 종료액^취득가액 시작액</Col><Col id=\"nlength\">15</Col><Col id=\"lengthChkGb\">LT</Col></Row><Row><Col id=\"compId\">ds_assetsMastr</Col><Col id=\"msgId\">자산분류</Col><Col id=\"colId\">ASSETS_CL_CODE</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"msgId\">취득구분</Col><Col id=\"compId\">ds_assetsMastr</Col><Col id=\"colId\">ASSETS_SE</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_assetsMastr</Col><Col id=\"msgId\">자산명</Col><Col id=\"colId\">ASSETS_NM</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_assetsMastr</Col><Col id=\"msgId\">단가</Col><Col id=\"colId\">UNTPC</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_assetsMastr</Col><Col id=\"msgId\">취득일자</Col><Col id=\"colId\">ACQS_DE</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_assetsMastr</Col><Col id=\"msgId\">수량</Col><Col id=\"colId\">QY</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_assetsMastr</Col><Col id=\"colId\">CN_YYCNT</Col><Col id=\"msgId\">내용년수</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_assetsMastr</Col><Col id=\"colId\">STTUS_SE</Col><Col id=\"msgId\">상태구분</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_assetsMastr</Col><Col id=\"msgId\">담당부서</Col><Col id=\"colId\">DEPT_CODE</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_assetsMastr</Col><Col id=\"colId\">EMPNO</Col><Col id=\"msgId\">담당자</Col><Col id=\"notNull\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_assetsMastrHist", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"HIST_SN\" type=\"STRING\" size=\"256\"/><Column id=\"HIST_SE\" type=\"STRING\" size=\"256\"/><Column id=\"HIST_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HIST_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"QY\" type=\"STRING\" size=\"256\"/><Column id=\"ASSETS_CL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ASSETS_CL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ASSETS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UNTPC\" type=\"STRING\" size=\"256\"/><Column id=\"ASSETS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PUCHAS_BCNC\" type=\"STRING\" size=\"256\"/><Column id=\"BCNC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZPLC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ASSETS_CL_CODE1\" type=\"STRING\" size=\"256\"/><Column id=\"ASSETS_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NMASDEPT_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"UNTPC1\" type=\"STRING\" size=\"256\"/><Column id=\"ASSETS_SE1\" type=\"STRING\" size=\"256\"/><Column id=\"QY1\" type=\"STRING\" size=\"256\"/><Column id=\"PUCHAS_BCNC1\" type=\"STRING\" size=\"256\"/><Column id=\"BRCD1\" type=\"STRING\" size=\"256\"/><Column id=\"RFID1\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO1\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN1\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"ASSETS_CL_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"BCNC_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"BIZPLC_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"STTUS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"STTUS_SE1\" type=\"STRING\" size=\"256\"/><Column id=\"CN_YYCNT\" type=\"STRING\" size=\"256\"/><Column id=\"CN_YYCNT1\" type=\"STRING\" size=\"256\"/><Column id=\"GVRN_THNG_CL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GVRN_THNG_CL_NO1\" type=\"STRING\" size=\"256\"/><Column id=\"BRCD\" type=\"STRING\" size=\"256\"/><Column id=\"RFID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_bizplcSe", this);
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

            obj = new Dataset("ds_bizplcList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"BIZPLC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BIZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZPLC_TY\" type=\"STRING\" size=\"256\"/><Column id=\"BIZPLC_PLACE\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"OUTPT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"GW_BIZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond_file", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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

            obj = new Dataset("ds_ass006", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_import", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ass009", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_confmSe", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">미승인</Col></Row><Row><Col id=\"CODE_NM\">승인</Col><Col id=\"CODE\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sample", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"자산분류\" type=\"STRING\" size=\"256\"/><Column id=\"자산번호\" type=\"STRING\" size=\"256\"/><Column id=\"분류번호\" type=\"STRING\" size=\"256\"/><Column id=\"자산명\" type=\"STRING\" size=\"256\"/><Column id=\"취득구분코드\" type=\"STRING\" size=\"256\"/><Column id=\"취득구분명\" type=\"STRING\" size=\"256\"/><Column id=\"부서코드\" type=\"STRING\" size=\"256\"/><Column id=\"부서명\" type=\"STRING\" size=\"256\"/><Column id=\"사업소코드\" type=\"STRING\" size=\"256\"/><Column id=\"사업소코드명\" type=\"STRING\" size=\"256\"/><Column id=\"내용년수\" type=\"STRING\" size=\"256\"/><Column id=\"규격\" type=\"STRING\" size=\"256\"/><Column id=\"단위\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"STRING\" size=\"256\"/><Column id=\"비고\" type=\"STRING\" size=\"256\"/><Column id=\"상태\" type=\"STRING\" size=\"256\"/><Column id=\"취득일자\" type=\"STRING\" size=\"256\"/><Column id=\"단가\" type=\"INT\" size=\"256\"/><Column id=\"취득금액\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"자산분류\">공기구비품</Col><Col id=\"자산번호\">2018000001</Col><Col id=\"자산명\">샘플자산명</Col><Col id=\"취득구분코드\">5</Col><Col id=\"부서명\">교통시설팀</Col><Col id=\"내용년수\">3</Col><Col id=\"규격\">스탠드</Col><Col id=\"단위\">개</Col><Col id=\"수량\">3</Col><Col id=\"비고\">자산대장 업로드 양식입니다.</Col><Col id=\"상태\">사용</Col><Col id=\"취득일자\">2018-01-01</Col><Col id=\"단가\">10000</Col><Col id=\"취득금액\">10000</Col><Col id=\"분류번호\">25101503</Col><Col id=\"취득구분명\">화성도시공사</Col><Col id=\"부서코드\">050400</Col><Col id=\"사업소코드\">B006</Col><Col id=\"사업소코드명\">공영주차장</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_deptList", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_assetsClList", this);
            obj._setContents("<ColumnInfo><Column id=\"ASSETS_CL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ASSETS_CL_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond3", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_AT\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_print", this);
            obj._setContents("<ColumnInfo><Column id=\"ASSETS_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ass009S", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_work", "absolute", "0", "59", null, null, "28", "0", this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "-0.69%", "117", null, "620", "100.29%", null, this.div_work);
            obj.set_taborder("8");
            obj.set_text("6");
            obj.set_visible("false");
            obj.style.set_background("blueviolet");
            obj.style.set_align("center middle");
            obj.style.set_opacity("50");
            this.div_work.addChild(obj.name, obj);
            obj = new Static("Static36", "absolute", "0", "0", null, "10", "0", null, this.div_work);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.div_work.addChild(obj.name, obj);
            obj = new Static("Static44", "absolute", "0", "389", "1031", "10", null, null, this.div_work);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.div_work.addChild(obj.name, obj);
            obj = new Tab("Tab", "absolute", "0", "398", null, null, "0", "0", this.div_work);
            obj.set_taborder("3");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.style.set_showextrabutton("false");
            this.div_work.addChild(obj.name, obj);
            obj = new Tabpage("tpg_assetInfo", this.div_work.Tab);
            obj.set_text("자산정보");
            this.div_work.Tab.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "176", "82", "855", "27", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "176", "134", "855", "27", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "176", "212", "855", "27", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("108");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "176", "186", "855", "27", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("102");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "176", "160", "855", "27", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "176", "30", "855", "27", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "176", "56", "855", "27", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Static("Static37", "absolute", "176", "4", "855", "27", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Static("sta_BSNS_SE", "absolute", "1", "4", "175", "27", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("32");
            obj.set_text("실물 이미지");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("middle");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Static("sta_assetsNo", "absolute", "179", "4", "84", "27", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("33");
            obj.set_text("자산번호");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Static("sta_acqsDe", "absolute", "179", "56", "84", "27", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("34");
            obj.set_text("취득일자");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Static("sta_assetsNm", "absolute", "179", "30", "84", "27", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("35");
            obj.set_text("자산명");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "176", "108", "855", "27", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new ImageViewer("img_photo", "absolute", "1", "31", "175", "175", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("0");
            obj.set_stretch("fit");
            obj.style.set_opacity("100");
            obj.set_enable("true");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Static("sta_assetsClCode", "absolute", "451", "4", "84", "27", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("38");
            obj.set_text("자산분류");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Static("tpg_assetInfo", "absolute", "722", "30", "84", "27", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("40");
            obj.set_text("규격");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Edit("edt_stndrd", "absolute", "808", "33", "220", "21", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("5");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Edit("edt_qy", "absolute", "537", "59", "175", "21", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("8");
            obj.set_inputtype("number");
            obj.set_imemode("alpha");
            obj.style.set_align("right middle");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Essential");
            obj.set_maxlength("15");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Static("sta_qy", "absolute", "451", "56", "84", "27", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("41");
            obj.set_text("수량");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Static("sta_unit", "absolute", "722", "82", "84", "27", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("42");
            obj.set_text("단위");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Edit("edt_cnYycnt", "absolute", "265", "85", "175", "21", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("10");
            obj.set_inputtype("digit");
            obj.set_imemode("alpha");
            obj.style.set_align("right middle");
            obj.style.setStyleValue("color", "disabled", "#333333ff");
            obj.set_enable("true");
            obj.set_maxlength("2");
            obj.set_cssclass("edt_WF_Essential");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Static("sta_dprcMth", "absolute", "451", "82", "84", "27", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("46");
            obj.set_text("상각방법");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Static("sta_bcncNm", "absolute", "722", "108", "84", "27", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("48");
            obj.set_text("매입거래처");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Static("sta_BUDGET_ACNT_NM02", "absolute", "179", "82", "84", "27", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("49");
            obj.set_text("내용년수");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Static("sta_acqsAmount", "absolute", "722", "134", "84", "27", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("51");
            obj.set_text("취득가액");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Static("sta_acqsVat", "absolute", "451", "108", "84", "27", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("53");
            obj.set_text("부가세");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Static("sta_acqsSuplyAmount", "absolute", "179", "108", "84", "27", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("55");
            obj.set_text("공급가액");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Static("sta_deptCode", "absolute", "451", "160", "84", "27", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("60");
            obj.set_text("담당부서");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Static("sta_govsubyAcqsAmount", "absolute", "179", "134", "84", "27", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("62");
            obj.set_text("국고보조금");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Edit("edt_assetsNo", "absolute", "265", "7", "175", "21", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_readonly("true");
            obj.set_taborder("1");
            obj.set_cssclass("edt_WF_Readonly");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new MaskEdit("msk_acqsAmount", "absolute", "808", "137", "220", "21", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("15");
            obj.set_mask("!###,###,###,###,###");
            obj.set_limitbymask("both");
            obj.set_readonly("true");
            obj.set_tooltiptype("inplace");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Combo("cmb_unit", "absolute", "808", "85", "220", "21", null, null, this.div_work.Tab.tpg_assetInfo);
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("@ds_cmp002");
            obj.style.set_align("center");
            obj.set_index("-1");
            obj = new Div("div_dept", "absolute", "537", "163", "175", "21", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("20");
            obj.set_async("false");
            obj.set_url("com::deptCode.xfdl");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Static("sta_untpc", "absolute", "722", "56", "84", "27", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("81");
            obj.set_text("단가");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new MaskEdit("msk_untpc", "absolute", "808", "59", "220", "21", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("6");
            obj.set_mask("#,###,###,###,###,###.##");
            obj.set_limitbymask("both");
            obj.set_cssclass("msk_WF_Essential");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Edit("edt_assetsClCode", "absolute", "537", "7", "76", "21", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Essential");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Edit("edt_assetsClNm", "absolute", "616", "7", "97", "21", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("26");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Essential");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Button("btn_assets", "absolute", "592", "7", "22", "21", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Search");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Static("sta_mrnCt", "absolute", "451", "134", "84", "27", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("87");
            obj.set_text("부대비용");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new MaskEdit("msk_mrnCt", "absolute", "537", "137", "175", "21", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("17");
            obj.set_mask("!###,###,###,###,###");
            obj.set_limitbymask("both");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new MaskEdit("msk_acqsVat", "absolute", "537", "111", "175", "21", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("14");
            obj.set_mask("!###,###,###,###,###");
            obj.set_limitbymask("both");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new MaskEdit("msk_acqsSuplyAmount", "absolute", "265", "111", "175", "21", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("13");
            obj.set_mask("!###,###,###,###,###");
            obj.set_limitbymask("both");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new MaskEdit("msk_govsubyAcqsAmount", "absolute", "265", "137", "175", "21", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("16");
            obj.set_mask("!###,###,###,###,###");
            obj.set_limitbymask("both");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Edit("edt_bcncNm", "absolute", "808", "111", "220", "21", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Button("btn_bcncNm", "absolute", "1007", "111", "22", "21", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("98");
            obj.set_cssclass("btn_WF_Search");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Combo("cmb_dprcMth", "absolute", "537", "85", "175", "21", null, null, this.div_work.Tab.tpg_assetInfo);
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj.set_innerdataset("@ds_dprcMth");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_readonly("true");
            obj.set_taborder("11");
            obj.set_enable("false");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.style.setStyleValue("color", "disabled", "#333333ff");
            obj.style.setStyleValue("align", "disabled", "center");
            obj = new Static("sta_empno", "absolute", "722", "186", "84", "27", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("101");
            obj.set_text("담당자");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Div("div_EMP", "absolute", "808", "188", "219", "22", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("21");
            obj.set_text("Div00");
            obj.set_async("false");
            obj.set_url("com::empno.xfdl");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Calendar("cal_acqsDe", "absolute", "265", "59", "175", "21", null, null, this.div_work.Tab.tpg_assetInfo);
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_cssclass("cal_WF_Essential");
            obj.set_readonly("false");
            obj.set_editformat("yyyy-MM-dd");
            obj = new Edit("edt_assetsNm", "absolute", "265", "33", "175", "21", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("4");
            obj.set_cssclass("edt_WF_Essential");
            obj.set_lengthunit("utf8");
            obj.set_imemode("none");
            obj.set_maxlength("150");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Static("sta_assetsSe", "absolute", "722", "4", "84", "27", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("103");
            obj.set_text("취득구분");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Combo("cmb_assetsSe", "absolute", "808", "7", "220", "21", null, null, this.div_work.Tab.tpg_assetInfo);
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_innerdataset("@ds_ass006");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.style.set_align("center");
            obj.set_cssclass("cmb_WF_Essential");
            obj = new Static("sta_bizplcCode", "absolute", "722", "160", "84", "27", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("39");
            obj.set_text("사업소구분");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Edit("edt_bizplcCode", "absolute", "808", "163", "76", "21", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("27");
            obj.set_readonly("false");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Button("btn_bizplcCode", "absolute", "860", "163", "22", "21", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_Search");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Edit("edt_bizplcNm", "absolute", "886", "163", "141", "21", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("28");
            obj.set_readonly("true");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Static("sta_BUDGET_ACNT_NM07", "absolute", "179", "160", "84", "27", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("105");
            obj.set_text("상태구분");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Combo("cmb_sttusSe", "absolute", "265", "163", "175", "21", null, null, this.div_work.Tab.tpg_assetInfo);
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj.set_innerdataset("@ds_ass009");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("true");
            obj.set_taborder("19");
            obj.set_enable("true");
            obj.style.set_align("center");
            obj.style.setStyleValue("color", "disabled", "#333333ff");
            obj.set_cssclass("cmb_WF_Essential");
            obj = new Static("sta_rfid", "absolute", "179", "186", "84", "27", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("73");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("RFID");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Static("sta_brcd", "absolute", "451", "186", "84", "27", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("75");
            obj.set_text("바코드");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Edit("edt_rfid", "absolute", "265", "189", "175", "21", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("22");
            obj.set_maxlength("45");
            obj.set_lengthunit("utf8");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Edit("edt_brcd", "absolute", "537", "189", "175", "21", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("23");
            obj.set_maxlength("21");
            obj.set_lengthunit("utf8");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Edit("edt_remarks", "absolute", "265", "215", "763", "21", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("24");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("180");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Static("sta_remarks", "absolute", "179", "212", "84", "27", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("107");
            obj.set_text("비고");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Static("tpg_gvrnThngClNo", "absolute", "451", "30", "84", "27", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("109");
            obj.set_text("정부물품\r\n분류번호");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Edit("edt_gvrnThngClNo", "absolute", "537", "33", "175", "21", null, null, this.div_work.Tab.tpg_assetInfo);
            obj.set_taborder("110");
            obj.set_maxlength("20");
            obj.style.set_align("left");
            obj.style.setStyleValue("color", "disabled", "#333333ff");
            obj.set_lengthunit("utf8");
            this.div_work.Tab.tpg_assetInfo.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.div_work.Tab);
            obj.set_text("감가상각내역");
            this.div_work.Tab.addChild(obj.name, obj);
            obj = new Grid("grd_Detail", "absolute", "1", "5", null, null, "1", "1", this.div_work.Tab.tabpage1);
            obj.set_taborder("0");
            obj.set_binddataset("ds_assetsDetail");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"상각년월\"/><Cell col=\"1\" colspan=\"3\" text=\"취득원가\"/><Cell col=\"4\" colspan=\"3\" text=\"국고보조금\"/><Cell col=\"7\" rowspan=\"2\" text=\"기말잔액\"/><Cell row=\"1\" col=\"1\" text=\"취득원가\"/><Cell row=\"1\" col=\"2\" text=\"월상각액\"/><Cell row=\"1\" col=\"3\" text=\"상각액누계\"/><Cell row=\"1\" col=\"4\" text=\"자산취득액\"/><Cell row=\"1\" col=\"5\" text=\"월상각액\"/><Cell row=\"1\" col=\"6\" text=\"상각액누계\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" style=\"align:middle;\" text=\"bind:DPRC_YM\" mask=\"####/##\" editlimitbymask=\"decimal\" autosizerow=\"limitmin\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"none\" style=\"align:right;padding:0 10 0 0;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ACQS_AMOUNT\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"none\" style=\"align:right;padding:0 10 0 0;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:MT_DPRC_AMOUNT\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;padding:0 10 0 0;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DPRC_ACMTL_AMOUNT\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:GOVSUBY_ACQS_AMOUNT\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;padding:0 10 0 0;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:GOVSUBY_MT_DPRC_AMOUNT\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"none\" style=\"align:right;padding:0 10 0 0;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:GOVSUBY_DPRC_ACMTL_AMOUNT\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:TRMEND_BLCE\"/></Band></Format></Formats>");
            this.div_work.Tab.tabpage1.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.div_work.Tab);
            obj.set_text("변경이력");
            this.div_work.Tab.addChild(obj.name, obj);
            obj = new Grid("grd_assetsMastr00", "absolute", "1", "5", null, null, "1", "1", this.div_work.Tab.tabpage2);
            obj.set_taborder("0");
            obj.set_binddataset("ds_assetsMastrHist");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"80\"/><Column size=\"52\"/><Column size=\"50\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"170\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"46\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"33\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"변경일자\"/><Cell col=\"2\" text=\"수정자\"/><Cell col=\"3\" colspan=\"2\" text=\"구분\"/><Cell col=\"5\" colspan=\"2\" text=\"자산분류\"/><Cell col=\"7\" text=\"사업장구분\"/><Cell col=\"8\" text=\"자산명\"/><Cell col=\"9\" text=\"담당부서\"/><Cell col=\"10\" text=\"단가\"/><Cell col=\"11\" text=\"수량\"/><Cell col=\"12\" text=\"매입거래처\"/><Cell col=\"13\" text=\"내용&#13;&#10;년수\"/><Cell col=\"14\" text=\"상태구분\"/><Cell col=\"15\" text=\"바코드\"/><Cell col=\"16\" text=\"RFID\"/><Cell col=\"17\" text=\"정부물품&#13;&#10;분류코드\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" text=\"expr:currow+1\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"date\" text=\"bind:HIST_DTTM\" calendardisplaynulltype=\"none\" autosizerow=\"limitmin\"/><Cell col=\"2\" rowspan=\"2\" text=\"bind:USER_NM\"/><Cell col=\"3\" rowspan=\"2\" text=\"bind:HIST_SE_NM\"/><Cell col=\"4\" text=\"이전\"/><Cell col=\"5\" style=\"line:EXPR(ASSETS_CL_CODE == ASSETS_CL_CODE1 || ASSETS_CL_CODE1 == 'NULL' || ASSETS_CL_CODE1 == '' ? '1 none #ddddddff,1 solid #ddddddff': '');selectline:EXPR(ASSETS_CL_NM == ASSETS_CL_NM1  || ASSETS_CL_CODE1 == 'NULL' || ASSETS_CL_CODE1 == '' ? '1 none #efececff,1 solid #efececff': '');\" text=\"bind:ASSETS_CL_CODE\" suppress=\"0\"/><Cell col=\"6\" displaytype=\"normal\" style=\"align:left;padding:0 0 0 10;line:EXPR(ASSETS_CL_NM == ASSETS_CL_NM1  || ASSETS_CL_NM1 == 'NULL' || ASSETS_CL_NM1 == '' ? '1 none #ddddddff,1 solid #ddddddff': '');selectline:EXPR(ASSETS_CL_NM == ASSETS_CL_NM1 ? '1 none #efececff,1 solid #efececff': '');\" text=\"bind:ASSETS_CL_NM\" editlimitbymask=\"decimal\" suppress=\"0\" combodisplay=\"edit\"/><Cell col=\"7\" displaytype=\"normal\" style=\"align:left;padding:0 0 0 10;line:EXPR(BIZPLC_NM == BIZPLC_NM1  || BIZPLC_NM1 == 'NULL' || BIZPLC_NM1 == '' ? '1 none #ddddddff,1 solid #ddddddff': '');selectline:EXPR(BIZPLC_NM == BIZPLC_NM1  || BIZPLC_NM1 == 'NULL' || BIZPLC_NM1 == '' ?  '1 none #efececff,1 solid #efececff': '');\" text=\"bind:BIZPLC_NM\" suppress=\"0\"/><Cell col=\"8\" style=\"align:left;padding:0 0 0 10;line:EXPR(ASSETS_NM == ASSETS_NM1   || ASSETS_NM1 == 'NULL' || ASSETS_NM1 == '' ? '1 none #ddddddff,1 solid #ddddddff': '');selectline:EXPR(ASSETS_NM == ASSETS_NM1   || ASSETS_NM1 == 'NULL' || ASSETS_NM1 == '' ?  '1 none #efececff,1 solid #efececff': '');\" text=\"bind:ASSETS_NM\" suppress=\"0\"/><Cell col=\"9\" edittype=\"none\" style=\"align:left;padding:0 0 0 10;line:EXPR(DEPT_NM == DEPT_NM1  || DEPT_NM1 == 'NULL' || DEPT_NM1 == '' ? '1 none #ddddddff,1 solid #ddddddff': '');selectline:EXPR(DEPT_NM == DEPT_NM1   || DEPT_NM1 == 'NULL' || DEPT_NM1 == '' ? '1 none #efececff,1 solid #efececff': '');\" text=\"bind:DEPT_NM\" suppress=\"0\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;line:EXPR(UNTPC == UNTPC1   || UNTPC1 == 'NULL' || UNTPC1 == '' ? '1 none #ddddddff,1 solid #ddddddff': '');selectline:EXPR(UNTPC == UNTPC1   || UNTPC1 == 'NULL' || UNTPC1 == '' ?  '1 none #efececff,1 solid #efececff': '');\" text=\"bind:UNTPC\" mask=\"###,##\" suppress=\"0\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;line:EXPR(QY == QY1  || QY1 == 'NULL' || QY1 == '' ?  '1 none #ddddddff,1 solid #ddddddff': '');selectline:EXPR(QY == QY1  || QY1 == 'NULL' || QY1 == '' ? '1 none #efececff,1 solid #efececff': '');\" text=\"bind:QY\" mask=\"999,99\" suppress=\"0\"/><Cell col=\"12\" style=\"align:left;padding:0 0 0 10;line:EXPR(BCNC_NM == BCNC_NM1 || BCNC_NM1 == 'NULL' || BCNC_NM1 == '' ? '1 none #ddddddff,1 solid #ddddddff': '');selectline:EXPR(BCNC_NM == BCNC_NM1 || BCNC_NM1 == 'NULL' || BCNC_NM1 == '' ? '1 none #efececff,1 solid #efececff': '');\" text=\"bind:BCNC_NM\" suppress=\"0\"/><Cell col=\"13\" text=\"bind:CN_YYCNT\"/><Cell col=\"14\" displaytype=\"combo\" text=\"bind:STTUS_SE\" combodataset=\"ds_ass009\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"15\" text=\"bind:BRCD\"/><Cell col=\"16\" text=\"bind:RFID\"/><Cell col=\"17\" text=\"bind:GVRN_THNG_CL_NO\"/><Cell row=\"1\" col=\"4\" text=\"이후\"/><Cell row=\"1\" col=\"5\" style=\"align: ;\" text=\"expr:ASSETS_CL_CODE == ASSETS_CL_CODE1 || ASSETS_CL_CODE1 == 'NULL' || ASSETS_CL_CODE1 == '' ? '': ASSETS_CL_CODE1\" suppress=\"0\"/><Cell row=\"1\" col=\"6\" style=\"align:left;padding:0 0 0 10;line: ;\" text=\"expr:ASSETS_CL_NM == ASSETS_CL_NM1  || ASSETS_CL_NM1 == 'NULL' || ASSETS_CL_NM1 == '' ? '': ASSETS_CL_NM1\" suppress=\"0\"/><Cell row=\"1\" col=\"7\" style=\"align:left;padding:0 0 0 10;\" text=\"expr:BIZPLC_NM == BIZPLC_NM1  || BIZPLC_NM1 == 'NULL' || BIZPLC_NM1 == '' ? '' : BIZPLC_NM1\" suppress=\"0\"/><Cell row=\"1\" col=\"8\" style=\"align:left;padding:0 0 0 10;\" text=\"expr:ASSETS_NM == ASSETS_NM1   || ASSETS_NM1 == 'NULL' || ASSETS_NM1 == '' ? '' : ASSETS_NM1\" suppress=\"0\"/><Cell row=\"1\" col=\"9\" style=\"align:left;padding:0 0 0 10;\" text=\"expr:DEPT_NM == DEPT_NM1  || DEPT_NM1 == 'NULL' || DEPT_NM1 == '' ? '' : DEPT_NM1\" suppress=\"0\"/><Cell row=\"1\" col=\"10\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"expr:UNTPC == UNTPC1   || UNTPC1 == 'NULL' || UNTPC1 == '' ? '' : UNTPC1\" suppress=\"0\"/><Cell row=\"1\" col=\"11\" style=\"align:right;padding:0 10 0 0;\" text=\"expr:QY == QY1  || QY1 == 'NULL' || QY1 == '' ? '' : QY1\" suppress=\"0\"/><Cell row=\"1\" col=\"12\" style=\"align:left;padding:0 0 0 10;\" text=\"expr:BCNC_NM == BCNC_NM1  || BCNC_NM1 == 'NULL' || BCNC_NM1 == '' ? '' : BCNC_NM1\" suppress=\"0\"/><Cell row=\"1\" col=\"13\" text=\"expr:CN_YYCNT == CN_YYCNT1   || CN_YYCNT1 == 'NULL' || CN_YYCNT1 == '' ? '' : CN_YYCNT1\"/><Cell row=\"1\" col=\"14\" displaytype=\"combo\" text=\"expr:STTUS_SE == STTUS_SE1   || STTUS_SE1 == 'NULL' || STTUS_SE1 == '' ? '' : STTUS_SE1\"/><Cell row=\"1\" col=\"15\" text=\"expr:BRCD == BRCD1  || BRCD1 == 'NULL' || BRCD1 == '' ? '' : BRCD1\"/><Cell row=\"1\" col=\"16\" text=\"expr:RFID == RFID1  || RFID1 == 'NULL' || RFID1 == '' ? '' : RFID1\"/><Cell row=\"1\" col=\"17\" text=\"expr:GVRN_THNG_CL_NO == GVRN_THNG_CL_NO1  || GVRN_THNG_CL_NO1 == 'NULL' || GVRN_THNG_CL_NO1 == '' ? '' : GVRN_THNG_CL_NO1\"/></Band></Format></Formats>");
            this.div_work.Tab.tabpage2.addChild(obj.name, obj);
            obj = new Static("sta_budgetStats", "absolute", "0", "10", "72", "19", null, null, this.div_work);
            obj.set_taborder("22");
            obj.set_text("자산현황");
            obj.set_cssclass("sta_WF_Title02");
            this.div_work.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "0", "29", null, "5", "0", null, this.div_work);
            obj.set_taborder("23");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.div_work.addChild(obj.name, obj);
            obj = new Grid("grd_assetsMastr", "absolute", "0", "34", null, "355", "0", null, this.div_work);
            obj.set_taborder("2");
            obj.set_binddataset("ds_assetsMastr");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"82\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"60\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"승인&#13;&#10;여부\"/><Cell col=\"3\" text=\"자산번호\"/><Cell col=\"4\" text=\"자산구분\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"자산분류\"/><Cell col=\"6\" text=\"사업장구분\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"자산명\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"담당부서\"/><Cell col=\"9\" text=\"담당자\"/><Cell col=\"10\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"단가\"/><Cell col=\"11\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"수량\"/><Cell col=\"12\" text=\"단위\"/><Cell col=\"13\" text=\"규격\"/><Cell col=\"14\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"취득일자\"/><Cell col=\"15\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"공급가액\"/><Cell col=\"16\" text=\"부대비용\"/><Cell col=\"17\" text=\"부가세\"/><Cell col=\"18\" text=\"취득가액\"/><Cell col=\"19\" text=\"국고보조금&#13;&#10;취득가액\"/><Cell col=\"20\" text=\"매입거래처\"/><Cell col=\"21\" text=\"상각방법\"/><Cell col=\"22\" text=\"내용년수\"/><Cell col=\"23\" text=\"상각율\"/><Cell col=\"24\" text=\"상태구분\"/><Cell col=\"25\" text=\"처분&#13;&#10;여부\"/><Cell col=\"26\" text=\"상각완료&#13;&#10;여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CONFM_AT\"/><Cell col=\"3\" text=\"bind:ASSETS_NO\" autosizerow=\"limitmin\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:ASSETS_SE\" combodataset=\"ds_ass006\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"5\" displaytype=\"normal\" style=\"padding: ;\" text=\"bind:ASSETS_CL_NM\" editlimitbymask=\"decimal\" expandshow=\"hide\" combodisplay=\"edit\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" style=\"align:left;\" text=\"bind:BIZPLC_NM\" combodataset=\"ds_acc001\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"7\" edittype=\"none\" style=\"align:left;\" text=\"bind:ASSETS_NM\"/><Cell col=\"8\" edittype=\"none\" style=\"padding: ;\" text=\"bind:DEPT_NM\" expandshow=\"hide\"/><Cell col=\"9\" text=\"bind:EMPNM\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"none\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:UNTPC\" mask=\"expr:!UNTPC ? &quot;!###,###,###,###,###&quot; : &quot;!###,###,###,###,##0&quot;\" editlimitbymask=\"integer\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:QY\" mask=\"!##,###,###,###\" editlimitbymask=\"integer\"/><Cell col=\"12\" displaytype=\"combo\" edittype=\"none\" style=\"align: ;padding:0 0 0 10;\" text=\"bind:UNIT\" combodataset=\"ds_cmp002\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodisplayrowcount=\"15\"/><Cell col=\"13\" edittype=\"none\" editfilter=\"none\" style=\"align: ;padding:0 0 0 10;\" text=\"bind:STNDRD\"/><Cell col=\"14\" displaytype=\"date\" edittype=\"none\" style=\"align: ;\" text=\"bind:ACQS_DE\" editautoselect=\"true\" calendardisplay=\"edit\" calendardisplaynulltype=\"nullmask\"/><Cell col=\"15\" displaytype=\"number\" edittype=\"none\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:ACQS_SUPLY_AMOUNT\" mask=\"expr:!ACQS_SUPLY_AMOUNT ? &quot;!###,###,###,###,###&quot; : &quot;!###,###,###,###,##0&quot;\" editlimitbymask=\"integer\"/><Cell col=\"16\" displaytype=\"number\" edittype=\"none\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:MRN_CT\" mask=\"expr:!MRN_CT ? &quot;!###,###,###,###,###&quot; : &quot;!###,###,###,###,##0&quot;\" editlimitbymask=\"integer\"/><Cell col=\"17\" displaytype=\"number\" edittype=\"none\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:ACQS_VAT\" mask=\"expr:!ACQS_VAT ? &quot;!###,###,###,###,###&quot; : &quot;!###,###,###,###,##0&quot;\" editlimitbymask=\"integer\"/><Cell col=\"18\" displaytype=\"number\" edittype=\"none\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:ACQS_AMOUNT\" mask=\"expr:!ACQS_AMOUNT ? &quot;!###,###,###,###,###&quot; : &quot;!###,###,###,###,##0&quot;\" editlimitbymask=\"integer\"/><Cell col=\"19\" displaytype=\"number\" edittype=\"none\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:GOVSUBY_ACQS_AMOUNT\" mask=\"expr:!GOVSUBY_ACQS_AMOUNT ? &quot;!###,###,###,###,###&quot; : &quot;!###,###,###,###,##0&quot;\" editlimitbymask=\"integer\"/><Cell col=\"20\" style=\"align: ;padding:0 0 0 10;\" text=\"bind:BCNC_NM\" expandshow=\"hide\"/><Cell col=\"21\" displaytype=\"combo\" edittype=\"none\" style=\"padding: ;\" text=\"bind:DPRC_MTH\" combodataset=\"ds_dprcMth\" combocodecol=\"CODE\" combodatacol=\"DATA\"/><Cell col=\"22\" style=\"align: ;padding:0 10 0 0;\" text=\"bind:CN_YYCNT\"/><Cell col=\"23\" displaytype=\"number\" edittype=\"none\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:DPRC_RT\" mask=\"expr:!DPRC_RT ? &quot;###.###%&quot; : &quot;##0.000%&quot;\"/><Cell col=\"24\" displaytype=\"combo\" text=\"bind:STTUS_SE\" combodataset=\"ds_ass009\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"25\" displaytype=\"checkbox\" style=\"controlborder: ;\" text=\"bind:DISUSE_PROCESS_AT\"/><Cell col=\"26\" displaytype=\"checkbox\" style=\"controlborder: ;\" text=\"bind:DPRT_COMPT_AT\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);
            obj = new Button("btn_upload", "absolute", null, "10", "25", "19", "0", null, this.div_work);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_Gridexcelup");
            this.div_work.addChild(obj.name, obj);
            obj = new Button("btn_download", "absolute", null, "10", "82", "19", "28", null, this.div_work);
            obj.set_taborder("0");
            obj.set_text("양식 다운로드");
            this.div_work.addChild(obj.name, obj);
            obj = new Static("sta_notice", "absolute", null, "10", "627", "21", "92", null, this.div_work);
            obj.set_taborder("27");
            obj.set_text("엑셀 업로드 시 코드명(자산분류, 단위 등) 및 취득일자 형식(####-##-##)을 정확히 입력해 주십시오.");
            obj.style.set_color("blue");
            obj.style.set_font("bold 9 Gulim");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "1031", "0", "15", "735", null, null, this);
            obj.set_taborder("47");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", null, "0", "13", "735", "0", null, this);
            obj.set_taborder("48");
            obj.set_text("스\r\n크\r\n롤\r\n13");
            obj.set_visible("false");
            obj.style.set_background("#d07b173c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "0", null, "59", "28", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Box");
            this.addChild(obj.name, obj);
            obj = new Edit("edt_ASSETS_CL_CODE", "absolute", "81", "5", "76", "21", null, null, this.div_search);
            obj.set_taborder("107");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "451", "5", "15", "21", null, null, this.div_search);
            obj.set_taborder("75");
            obj.set_text("~");
            obj.style.set_align("middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_ACQS_DE2", "absolute", "466", "5", "110", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj = new Calendar("cal_ACQS_DE1", "absolute", "340", "5", "110", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj = new Edit("edt_ASSETS_NM", "absolute", "81", "31", "176", "21", null, null, this.div_search);
            obj.set_taborder("5");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "451", "31", "15", "21", null, null, this.div_search);
            obj.set_taborder("82");
            obj.set_text("~");
            obj.style.set_align("middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0", "0", "15", "59", null, null, this.div_search);
            obj.set_taborder("89");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "15", "5", "64", "21", null, null, this.div_search);
            obj.set_taborder("90");
            obj.set_text("자산분류");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "31", "64", "21", null, null, this.div_search);
            obj.set_taborder("91");
            obj.set_text("자산명");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "272", "31", "64", "21", null, null, this.div_search);
            obj.set_taborder("92");
            obj.set_text("취득가액");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "272", "5", "64", "21", null, null, this.div_search);
            obj.set_taborder("93");
            obj.set_text("취득일자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "859", "5", "90", "21", null, null, this.div_search);
            obj.set_taborder("96");
            obj.set_text("상각완료여부");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cmb_dprtComptAt", "absolute", "949", "5", "74", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cmb_dprtComptAt_innerdataset = new Dataset("cmb_dprtComptAt_innerdataset", this.div_search.cmb_dprtComptAt);
            cmb_dprtComptAt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">완료</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">미완료</Col></Row></Rows>");
            obj.set_innerdataset(cmb_dprtComptAt_innerdataset);
            obj.set_taborder("4");
            obj.set_text("전체");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj = new Static("Static09", "absolute", "591", "5", "49", "21", null, null, this.div_search);
            obj.set_taborder("103");
            obj.set_text("부서");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("div_dept", "absolute", "649", "5", "195", "21", null, null, this.div_search);
            obj.set_taborder("3");
            obj.set_text("부서");
            obj.set_async("false");
            obj.set_visible("true");
            obj.set_enable("false");
            obj.set_url("com::deptCode.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new MaskEdit("msk_ACQS_AMOUNT1", "absolute", "340", "31", "110", "21", null, null, this.div_search);
            obj.set_taborder("6");
            obj.set_mask("!###,###,###,###,###");
            obj.set_limitbymask("both");
            this.div_search.addChild(obj.name, obj);
            obj = new MaskEdit("msk_ACQS_AMOUNT2", "absolute", "466", "31", "110", "21", null, null, this.div_search);
            obj.set_taborder("7");
            obj.set_mask("!###,###,###,###,###");
            obj.set_limitbymask("both");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_Assets", "absolute", "136", "5", "22", "21", null, null, this.div_search);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_Search");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_ASSETS_CL_NM", "absolute", "160", "5", "97", "21", null, null, this.div_search);
            obj.set_taborder("108");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "257", "0", "15", "59", null, null, this.div_search);
            obj.set_taborder("109");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "576", "0", "15", "59", null, null, this.div_search);
            obj.set_taborder("110");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_bizplcCode", "absolute", "649", "31", "76", "21", null, null, this.div_search);
            obj.set_taborder("111");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_Assets00", "absolute", "704", "31", "22", "21", null, null, this.div_search);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_Search");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_bizplcNm", "absolute", "727", "31", "117", "21", null, null, this.div_search);
            obj.set_taborder("113");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "591", "31", "49", "21", null, null, this.div_search);
            obj.set_taborder("114");
            obj.set_text("사업소");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "844", "0", "15", "59", null, null, this.div_search);
            obj.set_taborder("115");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "859", "31", "90", "21", null, null, this.div_search);
            obj.set_taborder("116");
            obj.set_text("상태구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cmb_sttusSe", "absolute", "949", "31", "74", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("@ds_ass009S");
            obj.set_index("-1");

            obj = new Grid("grd_assetsUploadSample", "absolute", "0", "772", "270", "180", null, null, this);
            obj.set_taborder("49");
            obj.set_visible("false");
            obj.set_binddataset("ds_sample");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"자산분류\"/><Cell col=\"1\" text=\"자산번호\"/><Cell col=\"2\" text=\"분류번호\"/><Cell col=\"3\" text=\"자산명\"/><Cell col=\"4\" text=\"취득구분코드\"/><Cell col=\"5\" text=\"취득구분명\"/><Cell col=\"6\" text=\"부서코드\"/><Cell col=\"7\" text=\"부서명\"/><Cell col=\"8\" text=\"사업소코드\"/><Cell col=\"9\" text=\"사업소코드명\"/><Cell col=\"10\" text=\"내용년수\"/><Cell col=\"11\" text=\"규격\"/><Cell col=\"12\" text=\"단위\"/><Cell col=\"13\" text=\"수량\"/><Cell col=\"14\" text=\"비고\"/><Cell col=\"15\" text=\"상태\"/><Cell col=\"16\" text=\"취득일자\"/><Cell col=\"17\" text=\"단가\"/><Cell col=\"18\" text=\"취득금액\"/></Band><Band id=\"body\"><Cell text=\"bind:자산분류\"/><Cell col=\"1\" text=\"bind:자산번호\"/><Cell col=\"2\" text=\"bind:분류번호\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:자산명\"/><Cell col=\"4\" text=\"bind:취득구분코드\"/><Cell col=\"5\" text=\"bind:취득구분명\"/><Cell col=\"6\" text=\"bind:부서코드\"/><Cell col=\"7\" text=\"bind:부서명\"/><Cell col=\"8\" text=\"bind:사업소코드\"/><Cell col=\"9\" text=\"bind:사업소코드명\"/><Cell col=\"10\" text=\"bind:내용년수\"/><Cell col=\"11\" text=\"bind:규격\"/><Cell col=\"12\" text=\"bind:단위\"/><Cell col=\"13\" text=\"bind:수량\"/><Cell col=\"14\" style=\"align:left;\" text=\"bind:비고\"/><Cell col=\"15\" text=\"bind:상태\"/><Cell col=\"16\" text=\"bind:취득일자\" mask=\"####-##-##\"/><Cell col=\"17\" style=\"align:right;\" text=\"bind:단가\"/><Cell col=\"18\" style=\"align:right;\" text=\"bind:취득금액\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1031, 226, this.div_work.Tab.tpg_assetInfo,
            	//-- Layout function
            	function(p) {
            		p.set_text("자산정보");

            	}
            );
            this.div_work.Tab.tpg_assetInfo.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_work.Tab.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_text("감가상각내역");

            	}
            );
            this.div_work.Tab.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_work.Tab.tabpage2,
            	//-- Layout function
            	function(p) {
            		p.set_text("변경이력");

            	}
            );
            this.div_work.Tab.tabpage2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1031, 676, this.div_work,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");

            	}
            );
            this.div_work.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1031, 59, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WFSA_Box");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1059, 735, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("ASS010100");
            		p.set_titletext("자산대장");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item15","div_work.Tab.tpg_assetInfo.edt_assetsNm","value","ds_assetsMastr","ASSETS_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","div_work.Tab.tpg_assetInfo.cal_acqsDe","value","ds_assetsMastr","ACQS_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","div_work.Tab.tpg_assetInfo.edt_bizplcNm","value","ds_assetsMastr","BIZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_search.cal_ACQS_DE1","value","ds_cond","ACQS_DE1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_search.cal_ACQS_DE2","value","ds_cond","ACQS_DE2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_search.edt_ASSETS_NM","value","ds_cond","ASSETS_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","div_search.cmb_dprtComptAt","value","ds_cond","DPRT_COMPT_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","div_work.Tab.tpg_assetInfo.edt_stndrd","value","ds_assetsMastr","STNDRD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","div_work.Tab.tpg_assetInfo.edt_qy","value","ds_assetsMastr","QY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","div_work.Tab.tpg_assetInfo.edt_cnYycnt","value","ds_assetsMastr","CN_YYCNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","div_work.Tab.tpg_assetInfo.edt_ASSETS_NO","value","ds_assetsMastr","ASSETS_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","div_work.Tab.tpg_assetInfo.msk_acqsAmount","value","ds_assetsMastr","ACQS_AMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","div_work.Tab.tpg_assetInfo.cmb_unit","value","ds_assetsMastr","UNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","div_work.Tab.tpg_assetInfo.msk_untpc","value","ds_assetsMastr","UNTPC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","div_work.Tab.tpg_assetInfo.edt_ASSETS_CL_CODE","value","ds_assetsMastr","ASSETS_CL_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","div_work.Tab.tpg_assetInfo.edt_ASSETS_CL_NM","value","ds_assetsMastr","ASSETS_CL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","div_work.Tab.tpg_assetInfo.msk_mrnCt","value","ds_assetsMastr","MRN_CT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","div_work.Tab.tpg_assetInfo.edt_bizplcCode","value","ds_assetsMastr","BIZPLC_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","div_work.Tab.tpg_assetInfo.msk_acqsVat","value","ds_assetsMastr","ACQS_VAT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","div_work.Tab.tpg_assetInfo.msk_acqsSuplyAmount","value","ds_assetsMastr","ACQS_SUPLY_AMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","div_work.Tab.tpg_assetInfo.msk_govsubyAcqsAmount","value","ds_assetsMastr","GOVSUBY_ACQS_AMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","div_work.Tab.tpg_assetInfo.edt_bcncNm","value","ds_assetsMastr","BCNC_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","div_work.Tab.tpg_assetInfo.cmb_dprcMth","value","ds_assetsMastr","DPRC_MTH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","div_work.Tab.tpg_assetInfo.edt_rfid","value","ds_assetsMastr","RFID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","div_work.Tab.tpg_assetInfo.edt_brcd","value","ds_assetsMastr","BRCD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","div_work.Tab.tpg_assetInfo.cmb_assetsSe","value","ds_assetsMastr","ASSETS_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","div_search.msk_ACQS_AMOUNT1","value","ds_cond","ACQS_AMOUNT1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div_search.msk_ACQS_AMOUNT2","value","ds_cond","ACQS_AMOUNT2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","div_work.Tab.tpg_assetInfo.cmb_sttusSe","value","ds_assetsMastr","STTUS_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_search.edt_ASSETS_CL_CODE","value","ds_cond","ASSETS_CL_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_search.edt_ASSETS_CL_NM","value","ds_cond","ASSETS_CL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","div_search.edt_bizplcCode","value","ds_cond","BIZPLC_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","div_search.edt_bizplcNm","value","ds_cond","BIZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","div_work.Tab.tpg_assetInfo.edt_assetsClCode","value","ds_assetsMastr","ASSETS_CL_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","div_work.Tab.tpg_assetInfo.edt_assetsClNm","value","ds_assetsMastr","ASSETS_CL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","div_work.Tab.tpg_assetInfo.edt_remarks","value","ds_assetsMastr","REMARKS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","div_work.Tab.tpg_assetInfo.edt_assetsNo","value","ds_assetsMastr","ASSETS_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","div_work.Tab.tpg_assetInfo.edt_gvrnThngClNo","value","ds_assetsMastr","GVRN_THNG_CL_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","div_search.cmb_sttusSe","value","ds_cond","STTUS_SE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "com::deptCode.xfdl");
            this._addPreloadList("fdl", "com::empno.xfdl");
            this._addPreloadList("fdl", "com::deptCode.xfdl");
        };
        
        // User Script
        this.addIncludeScript("ASS010100.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("ASS010100.xfdl", "mis_lib::misUtil.xjs");
        this.registerScript("ASS010100.xfdl", function() {
        /***********************************************************************
         * 화면ID   : ASS010100.xfdl
         * 화면명   : 자산대장
         * 화면설명 : 자산대장을 관리한다.
         * 작성일   : 2015.06.19
         * 작성자   : 이혜선
         * 수정이력 : 
         ***********************************************************************
         *     수정일     수정자   내용
         ***********************************************************************
         *    
         ***********************************************************************
         */

        /***********************************************************************
         * Script Include 
         ***********************************************************************/
        // 시스템 공통 라이브러리 Include
        //include "lib::comInclude.xjs";
        //include "mis_lib::misUtil.xjs";
        /***********************************************************************
         * 화면 변수 선언부
         ***********************************************************************/
         
        this.saveRow = -1;
        this.checkDs = [this.ds_assetsMastr];
        this.authAt = false;
        /***********************************************************************
         * onInit / onLoad 영역
         ***********************************************************************/
        this.ASS010100_oninit = function(obj,e)
        {
        }

        this.ASS010100_onload = function(obj,e)
        {
        	// Form 초기화
        	this.fn_init_form();

        	// DataSet 초기화
        	this.fn_init_dataset();
        	
        	// TODO..
        	this.div_work.Tab.tpg_assetInfo.div_dept.fn_setBind("ds_assetsMastr","DEPT_CODE","DEPT_NM");
        	this.div_work.Tab.tpg_assetInfo.div_EMP.fn_setBind("ds_assetsMastr","EMPNO","EMPNM");
        	this.div_search.div_dept.fn_setBind("ds_cond","REQUST_DEPT","REQUST_DEPT_NM");
        	
        	// 공통코드
        	var comboParams = [
        			 ["ds_acc001", "ACC001", "Y", ""]		// 사업장구분
        			,["ds_ass006", "ASS006", "Y", ""]		// 자산구분
        			,["ds_cmp002", "CMP002", "Y", ""]		// 단위
        			,["ds_ass009", "ASS009", "Y", ""]		// 상태구분
        			,["ds_ass009S", "ASS009", 1, "전체"]	// 상태구분(검색조건)
        	];
        	
        	// 검색조건 셋팅
        	this.ds_cond.clearData();
        	this.ds_cond.addRow();
        	this.ds_cond.setColumn(0, "REQUST_DEPT"   , this.gfn_getDeptId());
        	this.ds_cond.setColumn(0, "REQUST_DEPT_NM", this.gfn_getDeptName());
        	this.ds_cond.setColumn(0, "ACQS_DE1"      , this.dateUtils.today().substr(0,4)+"0101");
        	this.ds_cond.setColumn(0, "ACQS_DE2"      , this.dateUtils.today());
        	this.ds_cond.setColumn(0, "DPRT_COMPT_AT" , "");

        	// 권한 분리
        	if(this.gfn_authGrpId("ASS_ADMIN") > -1) {		// 자산결재자
        		this.authAt = true;
        		
        		// 검색조건 - 부서
        		this.div_search.div_dept.fn_setReadonly(false);
        		this.div_search.div_dept.set_enable(true);
        		
        		// 자산정보 - 부서 
        		this.div_work.Tab.tpg_assetInfo.div_dept.fn_setReadonly(false);
        		this.div_work.Tab.tpg_assetInfo.div_dept.set_enable(true);
        		this.div_work.Tab.tpg_assetInfo.div_dept.div_Search.edt_deptCode.set_cssclass("edt_WF_Essential");
        		this.div_work.Tab.tpg_assetInfo.div_dept.div_Search.edt_deptNm.set_cssclass("edt_WF_Essential");
        		
        		this.div_work.Tab.tpg_assetInfo.div_EMP.div_sear.edt_emplnm.set_cssclass("edt_WF_Essential");
        		this.div_work.Tab.tpg_assetInfo.div_EMP.div_sear.edt_empno.set_cssclass("edt_WF_Essential");
        		
        		// 자산현황 - 승인여부
        		this.div_work.grd_assetsMastr.setCellProperty("body", 2, "edittype", "checkbox");

        	}else {
        		this.authAt = false;
        		// 검색조건
        		this.div_search.div_dept.fn_setReadonly(true);
        		this.div_search.div_dept.set_enable(false);
        		
        		// 자산정보
        		this.div_work.Tab.tpg_assetInfo.div_dept.fn_setReadonly(true);

        		// 자산현황 - 승인여부
        		this.div_work.grd_assetsMastr.setCellProperty("body", 2, "edittype", "none");
        	}
        	
        	var callback = function (svcId, errorCode, errorMsg) {
        		
        		// 조회 이벤트
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
        	this.fn_misFormInit(this);
        }

        /*
         * 함수명  	: initDataset
         * 설명 		: Dataset을 초기화한다.
         * params  		: None
         * return Type 	: None
         * 사용법		: this.initDataset();
         */
        this.fn_init_dataset = function()
        {
        	this.gfn_initCondDs(this, this.div_search);
        }

        
        /***********************************************************************
        * Transaction 영역 시작
        ************************************************************************/

        /***********************************************************************
         * Transaction 관련 이벤트 핸들러 
         **********************************************************************/
        /*
         * 함수명  	: fn_search
         * 설명 		: 조회 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_search();
         */
        this.fn_search = function()
        {	
            if(Ex.util.isUpdated(this.ds_assetsMastr)) {
                if(!this.gfn_message("confirm.변경.취소.여부")) {
                    return false;    // 아니오
                }
            }
            
        	this.ds_assetsMastr.clearData();
        	this.ds_assetsDetail.clearData();
        	this.ds_assetsMastrHist.clearData();
        	
        	// validation 체크
        	if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond, this.ds_validation)) {
        		return false;
        	}
        			
        	this.div_work.Tab.tpg_assetInfo.img_photo.set_image("");	
        	this.ds_fileList.clearData();
        	this.ds_cond_file.clearData();
        	this.ds_cond_file.addRow();
        	
        	this.fn_transaction("assetsMastrList");
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
            // 데이터셋 미변경 체크
            if (!this.comUtils.isDatasetUpdated(this.ds_assetsMastr)) {
                this.gfn_message("comm.데이터.변경.없음")
                return false;
            }

        	// validation 체크
            if(!this.gfn_checkValidation_NoUpdChk(this.ds_assetsMastr, this.ds_validation)) {
                return;
            }

            if(this.gfn_message("confirm.저장.여부")) {
                this.saveRow = this.ds_assetsMastr.rowposition;
                this.fn_transaction("assetsMastrCUD");
            }

        
        }

        /*
         * 함수명  	: fn_print
         * 설명 		: 인쇄 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_print();
         */
        this.fn_print = function() {
        	
        	var chkCnt = this.ds_assetsMastr.getCaseCount("CHK == '1'");
        	
        	if(chkCnt == 0) {
        		this.gfn_message("info.처리불가","선택된 건이 없습니다.");
        		return false;
        	}
        	
        	if(chkCnt > 0) {
        		var reportAssetsNo = "";
        		for(var i = 0; i < this.ds_assetsMastr.rowcount; i++ ) {
        			var chk = this.ds_assetsMastr.getColumn(i, "CHK");
        			var brcd = this.ds_assetsMastr.getColumn(i, "BRCD");
        			if(chk == "1") {
        				if(this.comUtils.isNull(brcd)) {
        					this.gfn_message("info.처리불가",(i+1)+"행의 바코드 정보가 존재하지 않습니다.");
        					this.ds_assetsMastr.set_rowposition(i);
        					return false;
        				}
        				var assetsNo = this.ds_assetsMastr.getColumn(i, "ASSETS_NO");
        				reportAssetsNo += ( (reportAssetsNo == "") ? assetsNo : ", "+assetsNo);
        			}
        		}
        		this.ds_print.clearData();
        		this.ds_print.addRow();
        		this.ds_print.setColumn(0, "ASSETS_NO", reportAssetsNo);
        				
        		this.gfn_ReportPopup(this, "MIS/ASS/ASS010100_R01.crf", this.ds_print);
        	}
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
        		case "assetsMastrList":        	// 자산분류 조회 
        			var sController   	= "hsco/mis/ass/ASS010100/assetsMastrList.do";
        			var sInDatasets   	= "input1=ds_cond";
        			var sOutDatasets  	= "ds_assetsMastr=output1";
        			break;
        		case "assetsMastrR":			// 감가상각내역, 변경내역 조회 
        			var sController   	= "hsco/mis/ass/ASS010100/assetsMastrR.do";
        			var sInDatasets   	= "input1=ds_cond2";
        			var sOutDatasets  	= "ds_assetsDetail=output1 ds_assetsMastrHist=output2";
        			break;
        		case "assetsMastrCUD":			// 자산분류 저장
        			var sController   	= "hsco/mis/ass/ASS010100/assetsMastrCUD.do";	
        			var sInDatasets   	= "input1=ds_assetsMastr:U";
        			var sOutDatasets  	= "";
        			break;
        		case "assetsMastrExcelUpload": // 자산 엑셀업로드
        			var sController   	= "hsco/mis/ass/ASS010100/assetsMastrExcelUpload.do";
        			var sInDatasets   	= "input1=ds_assetsMastr:U";
        			var sOutDatasets  	= "";
        			break;
        		case "selectFileList":      	// 첨부파일 조회
        			var sController   	= "hsco/mis/ass/ASS000000/selectFileList.do";
        			var sInDatasets   	= "input1=ds_cond_file";
        			var sOutDatasets  	= "ds_fileList=output1";
        			break;
        		// 엑셀 코드값 매핑
        		case "selectDeptCode":	// 부서조회
        			var sController   	= "hsco/com/sym/cdm/deptCode/selectDeptCode.do";
        			var sInDatasets   	= "input1=ds_cond3";
        			var sOutDatasets  	= "ds_deptList=output1";
        			break;
        		case "assetsClList":	// 자산구분 조회 
        			var sController   	= "hsco/mis/ass/ASS010300/assetsClList.do";
        			var sInDatasets   	= "";
        			var sOutDatasets  	= "ds_assetsClList=output1";
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
        	// 오류 및 성공 메시지를 화면에 보여준다.
        	if (nErrorCode == 0){
        		switch (strSvcId) {	
        			case "assetsMastrList":		// 자산분류 조회
        				this.ds_assetsMastr.applyChange();
        				
        				if(this.saveRow > -1){
        					this.ds_assetsMastr.set_rowposition(this.saveRow);
        					this.saveRow = -1;
        				}
        				break;
        			case "assetsMastrR":			// 감가상각내역 조회
        				break;
        			case "assetsMastrCUD":			// 자산분류 저장
        				this.gfn_message("success.처리.성공");
        				this.fn_search();
        				break;
        			case "assetsMastrExcelUpload":	// 자산분류 업로드
        				this.gfn_message("success.처리.성공");
        				this.fn_search();
        				break;
        			case "selectFileList":      // 첨부파일 조회 (이미지)
        				if(this.ds_fileList.rowcount > 0){
        					var fileExtsn = this.ds_fileList.getColumn(0, "FILE_EXTSN");
        					var fileSn    = this.ds_fileList.getColumn(0, "FILE_SN");		// atchFileInfArr[0];	// 파일일련번호(파일경로)
        					var fileOrder = this.ds_fileList.getColumn(0, "FILE_ORDR");		// atchFileInfArr.length > 2 ? atchFileInfArr[1] : "";	// 파일 순차번호
        					var fileName  = this.ds_fileList.getColumn(0, "ATCH_FILE");		// 실제 파일명
        					var fileType  = this.ds_fileList.getColumn(0, "FILE_TY");  		// 파일 타입
        					
        					if(fileType.indexOf("image/")>-1){
        						var param = {};
        						param["FILE_SN"] = fileSn;
        						param["FILE_ORDR"] = fileOrder;
        						
        						var strUrl = application.gv_host + "hsco/cmm/download/viewImage.do";
        						var params = "?FILE_SN=" + fileSn + "&FILE_ORDR=" + fileOrder;
        						this.div_work.Tab.tpg_assetInfo.img_photo.set_image(strUrl + params);
        					}
        				}
        				break;	
        			// 엑셀 코드값 매핑
        			case "selectDeptCode":	// 부서조회
        				break;
        			case "assetsClList":	// 자산구분 조회 
        				break;
        				
        		}
        	}
        }

        /***********************************************************************
        * Transaction 영역 끝
        ************************************************************************/

        /***********************************************************************
        * non-Transaction 관련 컴포넌트 이벤트 처리 함수
        ************************************************************************
        * 1. Button 영역 
        * 2. 데이터셋 영역
        * 3. 그리드 영역
        * 4. 팝업영역
        ************************************************************************/

        /**********************************************************************
        * Button 영역 
        ***********************************************************************/
        /*
         * 함수명  	: fn_insert
         * 설명 		: 행추가 버튼 이벤트
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_insert();
         */
        this.fn_insert = function()
        {
        	var nRow = this.ds_assetsMastr.insertRow(0);
        	this.ds_assetsMastr.setColumn(nRow, "DPRT_CNT", 0);
        	this.ds_assetsMastr.setColumn(nRow, "QY", 1);
        	this.ds_assetsMastr.setColumn(nRow, "DEPT_CODE", this.gfn_getDeptId());
        	this.ds_assetsMastr.setColumn(nRow, "DEPT_NM",   this.gfn_getDeptName());
        	this.ds_assetsMastr.setColumn(nRow, "CONFM_AT",  "0");
        		
        	this.div_work.Tab.tpg_assetInfo.img_photo.set_image("");	
        	this.ds_fileList.clearData();
        	this.ds_cond_file.clearData();
        	this.ds_cond_file.addRow();
        	
        	this.fn_ctrlComponent(false);
        }

        /*
         * 함수명  	: fn_delete
         * 설명 		: 삭제 버튼 이벤트
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_delete();
         */
        this.fn_delete = function()
        {
        	var nRow = this.ds_assetsMastr.rowposition;
        	var confmAt = this.ds_assetsMastr.getColumn(nRow, "CONFM_AT");
        	var deleteAuth = this.authAt != true ? ((confmAt == "1" ? false : true)) : true;	// 삭제권한

        	if(!deleteAuth) {
        		this.gfn_message("fail.삭제.불가", "승인된 건은");
        		return false;
        	}
        	
        	//물품수급계획에서 등록한 자료는 삭제 불가 2016.08.09
        	var CNT = this.ds_assetsMastr.getColumn(nRow, "CNT");
        	if(CNT > 0){
        		this.gfn_message("fail.삭제.불가", "물품수급계획에서 등록한 자료는");
        		return false;
        	}
        	
        	// 감가상각 존재
        	var dprtComptAt = this.ds_assetsMastr.getColumn(nRow, "DPRT_CNT");
        	if(dprtComptAt != 0) {		
        		this.gfn_message("fail.삭제.불가", "감가상각내역이 존재하여");
        		return false;
        	}
        	
        	if ( this.gfn_message("confirm.삭제여부") ) {
        		var nRow = this.ds_assetsMastr.rowposition;
        		this.ds_assetsMastr.deleteRow(nRow);	
        	}
        }

        /*
         * 함수명  	: fn_cancel
         * 설명 		: 취소 버튼 이벤트
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_cancel();
         */
        this.fn_cancel = function()
        {
             // 데이터셋 변경 체크
            if(Ex.util.isUpdated(this.ds_assetsMastr)) {
                if(!this.gfn_message("confirm.변경.취소.여부")) {
                    return false;
                }
            }

        	if ( this.gfn_message("confirm.취소여부") ) {  //모든 내용을 복원 하시겠습니까?
        		this.ds_assetsMastr.reset();		//DATASET ROLLBACK
        		this.ds_assetsMastr.applyChange();	//DATASET COMMIT
        		return;
        	}	
        }

        
        /**********************************************************************
        * 데이터셋 영역 
        ***********************************************************************/

        /*
         * 함수명  	: ds_assetsMastr_onrowposchanged
         * 설명 		: 자산분류 ROW 변경 후 이벤트
         * params  		: None
         * return Type 	: None
         * 사용법		: this.ds_assetsMastr_onrowposchanged();
         */
        this.ds_assetsMastr_onrowposchanged = function(obj,e)
        {
        	this.ds_cond2.clearData();
        	this.ds_cond2.addRow();
        	
        	this.ds_assetsDetail.clearData();
        	
        // 	if(obj.getRowType(e.newrow) == "2" && this.comUtils.isNull(obj.getColumn(e.newrow, "CONFM_AT"))) {
        // 		obj.setColumn(e.newrow, "CONFM_AT"     , "0");
        // 	}
        	
        	if(e.newrow > -1) {
        		var nRow = this.ds_assetsMastr.rowposition;
        		var assetsNo = this.ds_assetsMastr.getColumn(nRow, "ASSETS_NO");
        		
        		// 권한 및 승인구분
        	    var confmAt = this.ds_assetsMastr.getColumn(nRow, "CONFM_AT");
        	    var cnrlComponentAuth = this.authAt == false ? ((confmAt == "1" ? true : false)) : false;
        		
        		this.ds_cond2.setColumn(0, "ASSETS_NO", assetsNo);
        		

        		// 파일 이미지
        		this.div_work.Tab.tpg_assetInfo.img_photo.set_image("");	
        		if(this.comUtils.isNotNull(obj.getColumn(e.newrow, "FILE_SN"))){
        			this.ds_fileList.clearData();
        			this.ds_cond_file.clearData();
        			this.ds_cond_file.addRow();
        			
        			this.ds_cond_file.setColumn(0, "FILE_SN", obj.getColumn(e.newrow, "FILE_SN"));
        			this.fn_transaction("selectFileList");
        		}
        		
        		this.fn_ctrlComponent(cnrlComponentAuth);
        		
        		this.fn_transaction("assetsMastrR");
        	}
        }

        
        //  자산대장 데이터 변경 이후 시점에 할 일들
        this.ds_assetsMastr_oncolumnchanged = function(obj,e)
        {
        	// 취득가액 : (단가*수량) + 부대비용 - 국고보조금
        	if(e.columnid == "UNTPC" || e.columnid == "QY" || e.columnid == "MRN_CT" || e.columnid == "GOVSUBY_ACQS_AMOUNT"){
        		var acqsUntpc = obj.getColumn(e.row, "UNTPC");
        		var acqsQy = obj.getColumn(e.row, "QY");
        		var acqsMrnCt = obj.getColumn(e.row, "MRN_CT");
        		var acqsGov = obj.getColumn(e.row, "GOVSUBY_ACQS_AMOUNT");
        		
        		var amountVal = (nexacro.toNumber(acqsUntpc,0,0,0) * nexacro.toNumber(acqsQy,0,0,0)) + nexacro.toNumber(acqsMrnCt,0,0,0) - nexacro.toNumber(acqsGov,0,0,0);
        		obj.setColumn(e.row, "ACQS_AMOUNT", amountVal);
        	}
        	
        	// 단가 : 공급가액 + 부가세
        	if(e.columnid == "ACQS_SUPLY_AMOUNT" || e.columnid == "ACQS_VAT"){
        		var acqsSuplyAmount = this.ds_assetsMastr.getColumn(e.row, "ACQS_SUPLY_AMOUNT");
        		var acqsVat = this.ds_assetsMastr.getColumn(e.row, "ACQS_VAT");
        		obj.setColumn(e.row, "UNTPC", nexacro.toNumber(acqsSuplyAmount,0,0,0) + nexacro.toNumber(acqsVat,0,0,0));
        	}
        	
        	if(e.columnid == "BIZPLC_CODE") {
        		var nRow = obj.rowposition;
        		if(this.comUtils.isNull(e.newvalue)) {
        			obj.setColumn(nRow, "BIZPLC_CODE", null);
        			obj.setColumn(nRow, "BIZPLC_NM", null);
        		}
        	}
        	
        	if(e.columnid == "BCNC_NM") {
        		var nRow = obj.rowposition;
        		if(this.comUtils.isNull(e.newvalue)) {
        			obj.setColumn(nRow, "PUCHAS_BCNC", null);
        		}
        	}
        }

        
        /**********************************************************************
        * 그리드 영역 
        ***********************************************************************/
        /*
         * 함수명  	: div_work_grd_assetsMastr_onexpandup
         * 설명 		: 자산분류 그리드 내 자산분류 선택 이벤트 ???? 
         * params  		: None
         * return Type 	: None
         * 사용법		: this.div_work_grd_assetsMastr_onexpandup();
         */
        this.div_work_grd_assetsMastr_onexpandup = function(obj,e)
        {
        	
        // 	if(e.cell==5){
        // 		this.fn_assets("GRID");
        // 	}
        // 	
        // 	if(e.cell == 8) {
        // 		var parm = {
        // 			arg_0 : this  //==> 필수, 팝업을 호출하는 form을 참조할 수 있도록 팝업에 Argument로 넘겨준다. (반드시 기술해야 함.)
        // 		};
        // 		
        // 		/**
        // 		* 팝업 공통함수
        // 		* @param {string} svcId
        // 		* @param {number} Width
        // 		* @param {number} Height
        // 		* @param {string} Title
        // 		* @param {string} form URL
        // 		* @param {string} Callback Function
        // 		* @return N/A
        // 		* @example
        // 		* @memberOf comLib
        // 		*/
        // 		this.gfn_popup("empno_P01", 400, 400, "", parm, "com::deptCode_P01.xfdl", "fn_popupCallback", true);
        // 	}
        // 	
        // 	if(e.cell == 18) {	//매입거래처
        // 		var parm = {
        // 			arg_0 : this,  //==> 필수, 팝업을 호출하는 form을 참조할 수 있도록 팝업에 Argument로 넘겨준다. (반드시 기술해야 함.)
        // 			srchYn : true
        // 		};
        // 		
        // 		/**
        // 		* 팝업 공통함수
        // 		* @param {string} svcId
        // 		* @param {number} Width
        // 		* @param {number} Height
        // 		* @param {string} Title
        // 		* @param {string} form URL
        // 		* @param {string} Callback Function
        // 		* @return N/A
        // 		* @example
        // 		* @memberOf comLib
        // 		*/
        // 		this.gfn_popup("CTR010101_P02", 866, 652, "", parm, "mis_ctr::CTR010101_P02.xfdl", "fn_popupCallback", true);
        // 	}	
        }

        /**********************************************************************
        * 팝업영역 
        ***********************************************************************/
        /*
         * 함수명  	: fn_assets
         * 설명 		: 팝업 호출
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_assets();
         */
        this.fn_assets = function(sPopupId)
        {
        	var parm = {
        		arg_0 : this  //==> 필수, 팝업을 호출하는 form을 참조할 수 있도록 팝업에 Argument로 넘겨준다. (반드시 기술해야 함.)
        	};
        	
        	this.gfn_popup(sPopupId, 450, 500, "물품구분조회팝업", parm, "mis_ass::ASS010400_P01.xfdl", "fn_popupCallback");			
        }
        	

        /* 함수명  	: btn_Assets_Popup_onclick
         * 설명 		: 검색조건 - 자산분류 팝업
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_Assets_Popup_onclick();
         */
        this.div_search_btn_Assets_onclick = function(obj,e)
        {
        	var parm = {
        		arg_0 : this  //==> 필수, 팝업을 호출하는 form을 참조할 수 있도록 팝업에 Argument로 넘겨준다. (반드시 기술해야 함.)
        	};
        	
        	this.gfn_popup("searchAssetsPopup", 450, 500, "물품구분조회팝업", parm, "mis_ass::ASS010400_P01.xfdl", "fn_popupCallback");	
        }

        
        /* 함수명  	: btn_Assets_Popup_onclick
         * 설명 		: 자산정보 - 자산분류 팝업
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_Assets_Popup_onclick();
         */
        this.btn_assets_onclick = function(obj,e)
        {
        	var parm = {
        		arg_0 : this  //==> 필수, 팝업을 호출하는 form을 참조할 수 있도록 팝업에 Argument로 넘겨준다. (반드시 기술해야 함.)
        	};
        	
        	this.gfn_popup("assetsPopup", 450, 500, "물품구분조회팝업", parm, "mis_ass::ASS010400_P01.xfdl", "fn_popupCallback");	
        }

        
        this.div_search_Assets_SE_onclick = function(obj,e)
        {
        	var parm = {
        		 arg_0      : this
        	};
        	this.gfn_popup("searchbizplcPopup", 400, 400, "사업소선택", parm, "mis_hrm::HRM010102_P1.xfdl", "fn_popupCallback", true);
        }

        
        this.div_work_Tab_tpg_assetInfo_btn_Assets00_onclick = function(obj,e)
        {
        	var parm = {
        		 arg_0      : this
        	};
        	this.gfn_popup("bizplcPopup", 400, 400, "사업소선택", parm, "mis_hrm::HRM010102_P1.xfdl", "fn_popupCallback", true);
        }

        
        this.div_search_BCNC_NM_onclick = function(obj,e)
        {
        	var parm = {
        		 arg_0      : this
        	};
        	this.gfn_popup("bcncPopup", 400, 400, "거래처선택", parm, "mis_ctr::CTR010101_P02.xfdl", "fn_popupCallback", true);
        }

        this.img_photo_onclick = function(obj,e)
        {
        	var nRow = this.ds_assetsMastr.rowposition;
        	
        	// 권한 및 승인구분
        	var confmAt = this.ds_assetsMastr.getColumn(nRow, "CONFM_AT");
        	var cnrlComponentAuth = this.authAt == false ? ((confmAt == "1" ? false : true)) : true;

        	if(cnrlComponentAuth) {
        		var assetNoValue = this.ds_assetsMastr.getColumn(nRow, "ASSETS_NO");
        		if(this.comUtils.isNotNull(assetNoValue)){
        			var parm = {
        				arg_0 : this  //==> 필수, 팝업을 호출하는 form을 참조할 수 있도록 팝업에 Argument로 넘겨준다. (반드시 기술해야 함.)
        				,assetsNo : assetNoValue
        				,fileSn : this.ds_assetsMastr.getColumn(this.ds_assetsMastr.rowposition, "FILE_SN")
        			};
        			this.gfn_popup("ASS000000_P01", 450, 500, "", parm, "mis_ass::ASS000000_P01.xfdl", "fn_popupCallback", true);
        		}
        	}
        }

        
        /*
         * 함수명  	: fn_popupCallback
         * 설명 		: 팝업 콜백함수
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_popupCallback();
         */
        this.fn_popupCallback = function(sPopupId,sReturn)
        {
        	// 검색조건 - 자산분류
           if(sPopupId == "searchAssetsPopup") {
        		var dsRtn = new Dataset();
        		var nRowCnt = dsRtn.loadXML(sReturn);
        		
                if(nRowCnt){
        			var nRow = this.ds_assetsMastr.rowposition;
        			var assetsClNm = dsRtn.getColumn(0, "ASSETS_CL_NM");
        			var assetsClCode = dsRtn.getColumn(0, "ASSETS_CL_CODE");
        			
                    this.ds_cond.setColumn(0, "ASSETS_CL_NM",   assetsClNm);
                    this.ds_cond.setColumn(0, "ASSETS_CL_CODE", assetsClCode);
                }
        	}
        	// 자산정보 - 자산분류
        	if(sPopupId == "assetsPopup") {
        		var dsRtn = new Dataset();
        		var nRowCnt = dsRtn.loadXML(sReturn);
        		
                if(nRowCnt){
        			var nRow = this.ds_assetsMastr.rowposition;
        			var assetsClNm = dsRtn.getColumn(0, "ASSETS_CL_NM");
        			var assetsClCode = dsRtn.getColumn(0, "ASSETS_CL_CODE");
        			var dprcMth = dsRtn.getColumn(0, "DPRC_MTH");
        			
                    this.ds_assetsMastr.setColumn(nRow, "ASSETS_CL_NM",   assetsClNm);
                    this.ds_assetsMastr.setColumn(nRow, "ASSETS_CL_CODE", assetsClCode);
        			this.ds_assetsMastr.setColumn(nRow, "DPRC_MTH"      , dprcMth);
                }
        	}

        	// 사업장 구분 팝업(검색조건)
        	if(sPopupId == "searchbizplcPopup"){
        		var dsRtn = new Dataset();
        		var nRowCnt = dsRtn.loadXML(sReturn);
        		
                if(nRowCnt){
        			var bizplcCode = dsRtn.getColumn(0, "BIZPLC_CODE");
        			var bizplcNm = dsRtn.getColumn(0, "BIZPLC_NM");
        			
                    this.ds_cond.setColumn(0, "BIZPLC_CODE", bizplcCode);
                    this.ds_cond.setColumn(0, "BIZPLC_NM"  , bizplcNm);
                }
        	}
        // 	// ??
        // 	if(sPopupId == "GRID")
        // 	{
        //         if(nRowCnt){
        // 			var nRow = this.ds_assetsMastr.rowposition;
        // 			
        // 			this.ds_assetsMastr.setColumn(nRow, "ASSETS_SE", null);
        //             this.ds_assetsMastr.setColumn(nRow, "ASSETS_CL_NM",   dsRtn.getColumn(0, "ASSETS_CL_NM"));
        //             this.ds_assetsMastr.setColumn(nRow, "ASSETS_CL_CODE", dsRtn.getColumn(0, "ASSETS_CL_CODE"));
        //             this.ds_assetsMastr.setColumn(nRow, "DPRC_MTH",       dsRtn.getColumn(0, "DPRC_MTH"));
        //             this.ds_assetsMastr.setColumn(nRow, "CN_YYCNT",       dsRtn.getColumn(0, "CN_YYCNT"));
        //             this.ds_assetsMastr.setColumn(nRow, "DPRC_RT",        dsRtn.getColumn(0, "DPRC_RT"));
        //             
        //             var clCode = dsRtn.getColumn(0, "ASSETS_CL_CODE").substr(0,1);
        //             if(clCode == "E" || clCode == "F" || clCode == "G"){
        // 				var nRowCnt  = this.ds_acc001.rowcount;
        // 				
        // 				if(nRowCnt > 0){
        // 					var clCode2  = this.ds_acc001.getColumn(0, "CODE");
        // 					
        // 					this.ds_assetsMastr.setColumn(nRow, "ASSETS_SE", clCode2);
        // 				}
        //             }
        //         }
        // 	}
        // 	// ??
        // 	if(sPopupId == "empno_P01") {
        // 		var dsRtn = new Dataset();
        // 		nRowCnt = dsRtn.loadXML(sReturn);
        // 		
        // 		if(!nRowCnt){
        // 			
        // 		} else {
        // 			this.ds_assetsMastr.setColumn(this.ds_assetsMastr.rowposition, "DEPT_CODE", dsRtn.getColumn(0, "DEPT_CODE"));
        // 			this.ds_assetsMastr.setColumn(this.ds_assetsMastr.rowposition, "DEPT_NM",   dsRtn.getColumn(0, "DEPT_NM"));
        // 		}
        // 	}
        // 	
        // 	// ??
        // 	if(sPopupId == "CTR010101_P02") {
        // 		var dsRtn = new Dataset();
        // 		nRowCnt = dsRtn.loadXML(sReturn);
        // 		
        // 		if(!nRowCnt){
        // 			
        // 		} else {
        // 			this.ds_assetsMastr.setColumn(this.ds_assetsMastr.rowposition, "PUCHAS_BCNC", dsRtn.getColumn(0, "BCNC_CODE"));
        // 			this.ds_assetsMastr.setColumn(this.ds_assetsMastr.rowposition, "BCNC_NM",     dsRtn.getColumn(0, "BCNC_NM"));
        // 		}
        // 	}
        	
        	// 자산 이미지 등록
        	if(sPopupId == "ASS000000_P01"){
        		var dsRtn = new Dataset();
        		nRowCnt = dsRtn.loadXML(sReturn);
        		
        		if(!nRowCnt){
        			
        		} else {
        			this.ds_assetsMastr.setColumn(this.ds_assetsMastr.rowposition, "FILE_SN", dsRtn.getColumn(0, "FILE_SN"));
        			this.ds_assetsMastr.setColumn(this.ds_assetsMastr.rowposition, "FILE_CNT", dsRtn.getColumn(0, "FILE_CNT"));
        			
        			this.ds_fileList.clearData();
        			this.ds_cond_file.clearData();
        			this.ds_cond_file.addRow();
        			
        			this.ds_cond_file.setColumn(0, "FILE_SN", this.ds_assetsMastr.getColumn(this.ds_assetsMastr.rowposition, "FILE_SN"));
        			this.fn_transaction("selectFileList");
        		}
        	}
        	
        	// 자산정보 - 사업장
        	if(sPopupId == "bizplcPopup"){
        		var dsRtn = new Dataset();
        		var nRowCnt = dsRtn.loadXML(sReturn);
        		
                if(nRowCnt){
        			var nRow = this.ds_assetsMastr.rowposition;
        			var bizplcCode = dsRtn.getColumn(0, "BIZPLC_CODE");
        			var bizplcNm = dsRtn.getColumn(0, "BIZPLC_NM");
        			
                    this.ds_assetsMastr.setColumn(nRow, "BIZPLC_CODE", bizplcCode);
                    this.ds_assetsMastr.setColumn(nRow, "BIZPLC_NM"  , bizplcNm);
                }
        	}
        	
        	// 자산정보 - 사원
        	if(sPopupId == "Popup1"){
        		var dsEmp = new Dataset();
        		var nRowCnt = dsEmp.loadXML(sReturn);
        		if(nRowCnt){
        			var nRow = this.ds_assetsMastr.rowposition;
        			var bcncNm = dsRtn.getColumn(0, "EMPNO");
        			var bcncCode = dsRtn.getColumn(0, "EMPNM");
        			
        			this.ds_assetsMastr.setColumn(nRow, "EMPNO", bcncNm);
        			this.ds_assetsMastr.setColumn(nRow, "EMPNM", bcncCode);
        		}
        	}
        	
        	// 자산정보 - 매입거래처
        	if(sPopupId == "bcncPopup"){
        		var dsRtn = new Dataset();
        		var nRowCnt = dsRtn.loadXML(sReturn);
        		if(nRowCnt){
        			var nRow = this.ds_assetsMastr.rowposition;
        			var bcncNm = dsRtn.getColumn(0, "BCNC_NM");
        			var bcncCode = dsRtn.getColumn(0, "BCNC_CODE");
        			
        			this.ds_assetsMastr.setColumn(nRow, "BCNC_NM",     bcncNm);
        			this.ds_assetsMastr.setColumn(nRow, "PUCHAS_BCNC", bcncCode);
        		}
        	}
        	
        	
        	
        }

        /*
         * 함수명  	: div_work_btn_upload_onclick
         * 설명 		: 엑셀 업로드
         * params  		: None
         * return Type 	: None
         * 사용법		: this.div_work_btn_upload_onclick();
         */
        this.div_work_btn_upload_onclick = function(obj,e)
        {
        	// 데이터셋 변경 체크
            if(Ex.util.isUpdated(this.ds_assetsMastr)) {
                if(!this.gfn_message("confirm.변경.취소.여부")) {
                    return false;
                }
            }
             this.fn_transaction("assetsClList");
             	
        	var arg = {
        		targetDs : this.ds_import,
        		headSet : false,
        		callBack : function () {
        						
        			if(this.ds_import.getRowCount() > 1){
        				this.ds_assetsMastr.clearData();
        				for(i=1; i< this.ds_import.rowcount; i++) {
        					
        					var col0 = this.ds_import.getColumn(i, "Column0");		// *자산구분
        					var col1 = this.ds_import.getColumn(i, "Column1");		// 자산번호
        					var col2 = this.ds_import.getColumn(i, "Column2");		// 분류번호
        					var col3 = this.ds_import.getColumn(i, "Column3");		// *자산명
        					var col4 = this.ds_import.getColumn(i, "Column4");		// 취득구분코드
        					var col5 = this.ds_import.getColumn(i, "Column5");		// 취득구분
        					var col6 = this.ds_import.getColumn(i, "Column6");		// *부서코드
        					var col7 = this.ds_import.getColumn(i, "Column7");		// 부서명
        					var col8 = this.ds_import.getColumn(i, "Column8");		// 사업소코드
        					var col9 = this.ds_import.getColumn(i, "Column9");		// 사업소명(팀별구분)
        					var col10 = this.ds_import.getColumn(i, "Column10");	// 내용년수
        					var col11 = this.ds_import.getColumn(i, "Column11");	// 규격
        					var col12 = this.ds_import.getColumn(i, "Column12");	// 단위
        					var col13 = this.ds_import.getColumn(i, "Column13");	// *수량
        					var col14 = this.ds_import.getColumn(i, "Column14");	// 비고
        					var col15 = this.ds_import.getColumn(i, "Column15");	// 상태
        					var col16 = this.ds_import.getColumn(i, "Column16");	// *취득일자
        					var col17 = this.ds_import.getColumn(i, "Column17");	// *취득단가 
        					var col18 = this.ds_import.getColumn(i, "Column18");	// 취득금액 
        					
        					
        					// 필수정보 - 자산구분, 자산명, 부서코드, 수량(default : 1), 취득일자, 취득단가
        					if(!this.comUtils.isNull(col0) && !this.comUtils.isNull(col3) && !this.comUtils.isNull(col6)
        					 && !this.comUtils.isNull(col16) && !this.comUtils.isNull(col17)) {
        								
        							// 코드 - *자산구분, 단위
        							var assetsClSn = this.ds_assetsClList.findRow("ASSETS_CL_NM", col0);	//자산분류
        							
        							// 자산구분 확인 후 존재하면 addRow
        							if(!this.comUtils.isNull(assetsClSn)) {	
        								
        								var unitSn  = this.ds_cmp002.findRow("CODE_NM", col12);		//단위	
        								var sttusSn = this.ds_ass009.findRow("CODE_NM", col15);		//상태구분
        							
        								var assetsClCode = this.ds_assetsClList.getColumn(assetsClSn, "ASSETS_CL_CODE");									// 자산구분
        								
        								var assetsNo     = col1;																							// 자산번호
        								var gvrnThngClNo = this.fn_getStringCheckByte(col2, 20);															// 정부물품분류번호
        								var assetsNm     = !this.comUtils.isNull(col3) ? this.fn_getStringCheckByte(col3, 100) : "";						// 자산명*
        								var assetsSe     = col4;																							// 취득구분
        								var deptCode     = (nexacro.trim(col6)).padLeft(2, "0")																// 부서코드*
        								var bizplcCode   = col8;
        								var cnYycnt      = this.fn_getStringCheckByte(col10, 2);															// 내용년수
        								var stndrd       = this.fn_getStringCheckByte(col11, 200);															// 규격	
        								var unit         = this.ds_cmp002.getColumn(unitSn, "CODE");														// 단위
        								var qy           = !this.comUtils.isNull(col13) ? this.fn_getStringCheckByte(col13, 11) : 1;						// 수량
        								var remarks      = !this.comUtils.isNull(col14) ? this.fn_getStringCheckByte(col14, 120) : "";						// 비고
        								var sttusSe      = this.ds_ass009.getColumn(sttusSn, "CODE");													    // 상태		
        								var acqsDe       = !this.comUtils.isNull(col16) ? col16.replace(/[-]/g, "") : "";	                                // 취득일자*
        								var untpc        = this.fn_getStringCheckByte(col17, 15);															// 취득단가*
        								var acqsAmount   = this.fn_getStringCheckByte(col18, 15);															// 취득금액*
        								
        								// 행추가
        								var nRow = this.ds_assetsMastr.addRow();
        								
        								this.ds_assetsMastr.setColumn(nRow, "ASSETS_CL_CODE" , assetsClCode);
        								this.ds_assetsMastr.setColumn(nRow, "ASSETS_NO"      , assetsNo);    
        								this.ds_assetsMastr.setColumn(nRow, "GVRN_THNG_CL_NO", gvrnThngClNo);       
        								this.ds_assetsMastr.setColumn(nRow, "ASSETS_NM"      , assetsNm);       
        								this.ds_assetsMastr.setColumn(nRow, "ASSETS_SE"      , assetsSe);
        								this.ds_assetsMastr.setColumn(nRow, "DEPT_CODE"      , deptCode);
        								this.ds_assetsMastr.setColumn(nRow, "BIZPLC_CODE"    , bizplcCode);
        								this.ds_assetsMastr.setColumn(nRow, "CN_YYCNT"       , cnYycnt);
        								this.ds_assetsMastr.setColumn(nRow, "STNDRD"         , stndrd);
        								this.ds_assetsMastr.setColumn(nRow, "UNIT"           , unit);
        								this.ds_assetsMastr.setColumn(nRow, "QY"             , qy);
        								this.ds_assetsMastr.setColumn(nRow, "REMARKS"        , remarks);
        								this.ds_assetsMastr.setColumn(nRow, "STTUS_SE"       , sttusSe); 
        								this.ds_assetsMastr.setColumn(nRow, "ACQS_DE"        , acqsDe); 
        								this.ds_assetsMastr.setColumn(nRow, "UNTPC"          , untpc); 
        								this.ds_assetsMastr.setColumn(nRow, "ACQS_AMOUNT"    , acqsAmount);
        							}
        						}
        					}
        					this.fn_transaction("assetsMastrExcelUpload");
        				}
        			}
        	};
        	this.gfn_importExcel(arg);
        }

        
        // 승인여부 
        this.fn_ctrlComponent = function(confm) {
        	
        	if(confm) {
        		// readonly
        		this.div_work.Tab.tpg_assetInfo.cal_acqsDe.set_readonly(true);
        		this.div_work.Tab.tpg_assetInfo.cmb_assetsSe.set_readonly(true);
        		this.div_work.Tab.tpg_assetInfo.cmb_dprcMth.set_readonly(true);
        		this.div_work.Tab.tpg_assetInfo.cmb_sttusSe.set_readonly(true);
        		this.div_work.Tab.tpg_assetInfo.cmb_unit.set_readonly(true);
        		this.div_work.Tab.tpg_assetInfo.div_dept.fn_setReadonly(true);
        		this.div_work.Tab.tpg_assetInfo.div_EMP.fn_set_readonly(true);
        		this.div_work.Tab.tpg_assetInfo.edt_assetsNm.set_readonly(true);
        		this.div_work.Tab.tpg_assetInfo.edt_brcd.set_readonly(true);
        		this.div_work.Tab.tpg_assetInfo.edt_cnYycnt.set_readonly(true);
        		this.div_work.Tab.tpg_assetInfo.edt_qy.set_readonly(true);
        		this.div_work.Tab.tpg_assetInfo.edt_rfid.set_readonly(true);
        		this.div_work.Tab.tpg_assetInfo.edt_stndrd.set_readonly(true);
        		this.div_work.Tab.tpg_assetInfo.edt_remarks.set_readonly(true);
         		this.div_work.Tab.tpg_assetInfo.msk_mrnCt.set_readonly(true);
         		this.div_work.Tab.tpg_assetInfo.msk_acqsAmount.set_readonly(true);
         		this.div_work.Tab.tpg_assetInfo.msk_acqsSuplyAmount.set_readonly(true);
         		this.div_work.Tab.tpg_assetInfo.msk_acqsVat.set_readonly(true);
         		this.div_work.Tab.tpg_assetInfo.msk_untpc.set_readonly(true);
         		this.div_work.Tab.tpg_assetInfo.msk_govsubyAcqsAmount.set_readonly(true);
         		this.div_work.Tab.tpg_assetInfo.edt_gvrnThngClNo.set_readonly(true);
         		this.div_work.Tab.tpg_assetInfo.edt_bizplcCode.set_readonly(true);
        		this.div_work.Tab.tpg_assetInfo.edt_bcncNm.set_readonly(true);
        		
        		// css
        		this.div_work.Tab.tpg_assetInfo.cal_acqsDe.set_cssclass("cal_WF_Readonly");
        		this.div_work.Tab.tpg_assetInfo.cmb_assetsSe.set_cssclass("cmb_WF_Readonly");
        		this.div_work.Tab.tpg_assetInfo.cmb_dprcMth.set_cssclass("cmb_WF_Readonly");
        		this.div_work.Tab.tpg_assetInfo.cmb_sttusSe.set_cssclass("cmb_WF_Readonly");
        		this.div_work.Tab.tpg_assetInfo.cmb_unit.set_cssclass("cmb_WF_Readonly");
        		this.div_work.Tab.tpg_assetInfo.edt_assetsClCode.set_cssclass("edt_WF_Readonly");
        		this.div_work.Tab.tpg_assetInfo.edt_assetsClNm.set_cssclass("edt_WF_Readonly");
        		this.div_work.Tab.tpg_assetInfo.edt_assetsNm.set_cssclass("edt_WF_Readonly");
        		this.div_work.Tab.tpg_assetInfo.edt_brcd.set_cssclass("edt_WF_Readonly");
        		this.div_work.Tab.tpg_assetInfo.edt_cnYycnt.set_cssclass("edt_WF_Readonly");
        		this.div_work.Tab.tpg_assetInfo.edt_qy.set_cssclass("edt_WF_Readonly");
        		this.div_work.Tab.tpg_assetInfo.edt_rfid.set_cssclass("edt_WF_Readonly");
        		this.div_work.Tab.tpg_assetInfo.edt_stndrd.set_cssclass("edt_WF_Readonly");
        		this.div_work.Tab.tpg_assetInfo.edt_remarks.set_cssclass("edt_WF_Readonly");
        		this.div_work.Tab.tpg_assetInfo.msk_mrnCt.set_cssclass("msk_WF_Readonly");
        		this.div_work.Tab.tpg_assetInfo.msk_acqsAmount.set_cssclass("msk_WF_Readonly");
        		this.div_work.Tab.tpg_assetInfo.msk_acqsSuplyAmount.set_cssclass("msk_WF_Readonly");
        		this.div_work.Tab.tpg_assetInfo.msk_acqsVat.set_cssclass("msk_WF_Readonly");
        		this.div_work.Tab.tpg_assetInfo.msk_untpc.set_cssclass("msk_WF_Readonly");
        		this.div_work.Tab.tpg_assetInfo.msk_govsubyAcqsAmount.set_cssclass("msk_WF_Readonly");
        		this.div_work.Tab.tpg_assetInfo.edt_bizplcCode.set_cssclass("edt_WF_Readonly");
        		this.div_work.Tab.tpg_assetInfo.edt_bizplcNm.set_cssclass("edt_WF_Readonly");
        		this.div_work.Tab.tpg_assetInfo.edt_bcncNm.set_cssclass("edt_WF_Readonly");
        		this.div_work.Tab.tpg_assetInfo.edt_gvrnThngClNo.set_cssclass("edt_WF_Readonly");
        		 this.div_work.Tab.tpg_assetInfo.edt_bizplcCode.set_cssclass("edt_WF_Readonly");
        		this.div_work.Tab.tpg_assetInfo.edt_bcncNm.set_cssclass("edt_WF_Readonly");
        		
        		//disable
        		this.div_work.Tab.tpg_assetInfo.btn_assets.set_enable(false);
        		this.div_work.Tab.tpg_assetInfo.btn_bcncNm.set_enable(false);
        		this.div_work.Tab.tpg_assetInfo.btn_bizplcCode.set_enable(false);
        	}else {
        		// readonly
        		this.div_work.Tab.tpg_assetInfo.cal_acqsDe.set_readonly(false);
        		this.div_work.Tab.tpg_assetInfo.cmb_assetsSe.set_readonly(false);
        		this.div_work.Tab.tpg_assetInfo.cmb_dprcMth.set_readonly(false);
        		this.div_work.Tab.tpg_assetInfo.cmb_sttusSe.set_readonly(false);
        		this.div_work.Tab.tpg_assetInfo.cmb_unit.set_readonly(false);
        		this.div_work.Tab.tpg_assetInfo.div_EMP.fn_set_readonly(false);
        		this.div_work.Tab.tpg_assetInfo.edt_assetsNm.set_readonly(false);
        		this.div_work.Tab.tpg_assetInfo.edt_brcd.set_readonly(false);
        		this.div_work.Tab.tpg_assetInfo.edt_cnYycnt.set_readonly(false);
        		this.div_work.Tab.tpg_assetInfo.edt_qy.set_readonly(false);
        		this.div_work.Tab.tpg_assetInfo.edt_rfid.set_readonly(false);
        		this.div_work.Tab.tpg_assetInfo.edt_stndrd.set_readonly(false);
        		this.div_work.Tab.tpg_assetInfo.edt_remarks.set_readonly(false);
        		this.div_work.Tab.tpg_assetInfo.msk_mrnCt.set_readonly(false);
        		this.div_work.Tab.tpg_assetInfo.msk_acqsAmount.set_readonly(false);
        		this.div_work.Tab.tpg_assetInfo.msk_acqsSuplyAmount.set_readonly(false);
        		this.div_work.Tab.tpg_assetInfo.msk_acqsVat.set_readonly(false);
        		this.div_work.Tab.tpg_assetInfo.msk_untpc.set_readonly(false);
        		this.div_work.Tab.tpg_assetInfo.msk_govsubyAcqsAmount.set_readonly(false);
        		this.div_work.Tab.tpg_assetInfo.edt_gvrnThngClNo.set_readonly(false);
        		this.div_work.Tab.tpg_assetInfo.edt_bizplcCode.set_readonly(false);
        		this.div_work.Tab.tpg_assetInfo.edt_bcncNm.set_readonly(false);
        		
        		// css
        		this.div_work.Tab.tpg_assetInfo.cal_acqsDe.set_cssclass("cal_WF_Essential");
        		this.div_work.Tab.tpg_assetInfo.cmb_assetsSe.set_cssclass("cmb_WF_Essential");
        		this.div_work.Tab.tpg_assetInfo.cmb_dprcMth.set_cssclass("");
        		this.div_work.Tab.tpg_assetInfo.cmb_sttusSe.set_cssclass("cmb_WF_Essential");
        		this.div_work.Tab.tpg_assetInfo.cmb_unit.set_cssclass("");
        		this.div_work.Tab.tpg_assetInfo.edt_assetsNm.set_cssclass("edt_WF_Essential");
        		this.div_work.Tab.tpg_assetInfo.edt_assetsClCode.set_cssclass("edt_WF_Essential");
        		this.div_work.Tab.tpg_assetInfo.edt_assetsClNm.set_cssclass("edt_WF_Essential");
        		this.div_work.Tab.tpg_assetInfo.edt_brcd.set_cssclass("");
        		this.div_work.Tab.tpg_assetInfo.edt_cnYycnt.set_cssclass("edt_WF_Essential");
        		this.div_work.Tab.tpg_assetInfo.edt_qy.set_cssclass("edt_WF_Essential");
        		this.div_work.Tab.tpg_assetInfo.edt_rfid.set_cssclass("");
        		this.div_work.Tab.tpg_assetInfo.edt_stndrd.set_cssclass("");
        		this.div_work.Tab.tpg_assetInfo.edt_remarks.set_cssclass("");
        		this.div_work.Tab.tpg_assetInfo.msk_mrnCt.set_cssclass("");
        		this.div_work.Tab.tpg_assetInfo.msk_acqsAmount.set_cssclass("");
        		this.div_work.Tab.tpg_assetInfo.msk_acqsSuplyAmount.set_cssclass("");
        		this.div_work.Tab.tpg_assetInfo.msk_acqsVat.set_cssclass("");
        		this.div_work.Tab.tpg_assetInfo.msk_untpc.set_cssclass("msk_WF_Essential");
        		this.div_work.Tab.tpg_assetInfo.msk_govsubyAcqsAmount.set_readonly("");
        		this.div_work.Tab.tpg_assetInfo.edt_bizplcCode.set_cssclass("");
        		this.div_work.Tab.tpg_assetInfo.edt_bizplcNm.set_cssclass("");
        		this.div_work.Tab.tpg_assetInfo.edt_bcncNm.set_cssclass("");
        		this.div_work.Tab.tpg_assetInfo.edt_gvrnThngClNo.set_readonly("");
        		this.div_work.Tab.tpg_assetInfo.edt_bizplcCode.set_readonly("");
        		this.div_work.Tab.tpg_assetInfo.edt_bcncNm.set_readonly("");
        		
        		this.div_work.Tab.tpg_assetInfo.div_EMP.div_sear.edt_emplnm.set_cssclass("edt_WF_Essential");
        		this.div_work.Tab.tpg_assetInfo.div_EMP.div_sear.edt_empno.set_cssclass("edt_WF_Essential");
        		
        		//disenable
        		this.div_work.Tab.tpg_assetInfo.btn_assets.set_enable(true);
        		this.div_work.Tab.tpg_assetInfo.btn_bcncNm.set_enable(true);
        		this.div_work.Tab.tpg_assetInfo.btn_bizplcCode.set_enable(true);
        			
        	}
        }

        this.div_work_btn_download_onclick = function(obj,e)
        {
        	this.gfn_exportExcel(this.grd_assetsUploadSample, "grd_assetsUploadSample");	

        }

        
        this.ds_cond_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "ASSETS_CL_CODE") {
        		var nRow = obj.rowposition;
        		if(this.comUtils.isNull(e.newvalue)) {
        			obj.setColumn(nRow, "ASSETS_CL_NM", null);
        		}
        	}
        	
        	if(e.columnid == "BIZPLC_CODE") {
        		var nRow = obj.rowposition;
        		if(this.comUtils.isNull(e.newvalue)) {
        			obj.setColumn(nRow, "BIZPLC_NM", null);
        		}
        	}
        }

        this.div_work_grd_assetsMastr_onheadclick = function(obj,e)
        {
        	if(e.col == "0") {
        		this.ds_assetsMastr.set_updatecontrol(false);
        		this.gfn_setGridCheckAll(obj, e);
        		this.ds_assetsMastr.set_updatecontrol(true);
        	}else {
        		LGV_COL_SORT = e.col; 
        		this._gridSort(obj, e);	
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_assetsMastr.addEventHandler("onrowposchanged", this.ds_assetsMastr_onrowposchanged, this);
            this.ds_assetsMastr.addEventHandler("oncolumnchanged", this.ds_assetsMastr_oncolumnchanged, this);
            this.ds_cond.addEventHandler("oncolumnchanged", this.ds_cond_oncolumnchanged, this);
            this.addEventHandler("onload", this.ASS010100_onload, this);
            this.addEventHandler("oninit", this.ASS010100_oninit, this);
            this.div_work.Tab.tpg_assetInfo.sta_BSNS_SE.addEventHandler("onclick", this.div_work_Tab_tpg_assetInfo_sta_BSNS_SE_onclick, this);
            this.div_work.Tab.tpg_assetInfo.sta_assetsNo.addEventHandler("onclick", this.div_work_Tab_tpg_assetInfo_sta_UPPER_ACNT_CODE_NM_onclick, this);
            this.div_work.Tab.tpg_assetInfo.img_photo.addEventHandler("onclick", this.img_photo_onclick, this);
            this.div_work.Tab.tpg_assetInfo.tpg_assetInfo.addEventHandler("onclick", this.div_work_Tab_tpg_assetInfo_sta_UPPER_ACNT_CODE_NM02_onclick, this);
            this.div_work.Tab.tpg_assetInfo.edt_stndrd.addEventHandler("oneditclick", this.div_work_Tab_tpg_assetInfo_edt_BUDGET_ACNT_NM00_oneditclick, this);
            this.div_work.Tab.tpg_assetInfo.edt_qy.addEventHandler("oneditclick", this.div_work_Tab_tpg_assetInfo_edt_BUDGET_ACNT_NM01_oneditclick, this);
            this.div_work.Tab.tpg_assetInfo.edt_cnYycnt.addEventHandler("oneditclick", this.div_work_Tab_tpg_assetInfo_edt_BUDGET_ACNT_NM02_oneditclick, this);
            this.div_work.Tab.tpg_assetInfo.edt_assetsNo.addEventHandler("oneditclick", this.div_work_Tab_tpg_assetInfo_edt_ASSETS_NO_oneditclick, this);
            this.div_work.Tab.tpg_assetInfo.msk_acqsAmount.addEventHandler("oneditclick", this.div_work_Tab_tpg_assetInfo_mae_ACQS_AMOUNT_oneditclick, this);
            this.div_work.Tab.tpg_assetInfo.cmb_unit.addEventHandler("onitemchanged", this.div_work_Tab_tpg_assetInfo_cmb_UNIT_onitemchanged, this);
            this.div_work.Tab.tpg_assetInfo.msk_untpc.addEventHandler("oneditclick", this.div_work_Tab_tpg_assetInfo_mae_ACQS_AMOUNT_oneditclick, this);
            this.div_work.Tab.tpg_assetInfo.edt_assetsClCode.addEventHandler("oneditclick", this.div_work_Tab_tpg_assetInfo_edt_ASSETS_CL_CODE_oneditclick, this);
            this.div_work.Tab.tpg_assetInfo.edt_assetsClNm.addEventHandler("oneditclick", this.div_work_Tab_tpg_assetInfo_edt_ASSETS_CL_NM_oneditclick, this);
            this.div_work.Tab.tpg_assetInfo.btn_assets.addEventHandler("onclick", this.btn_assets_onclick, this);
            this.div_work.Tab.tpg_assetInfo.msk_mrnCt.addEventHandler("oneditclick", this.div_work_Tab_tpg_assetInfo_mae_ACQS_AMOUNT_oneditclick, this);
            this.div_work.Tab.tpg_assetInfo.msk_acqsVat.addEventHandler("oneditclick", this.div_work_Tab_tpg_assetInfo_MaskEdit00_oneditclick, this);
            this.div_work.Tab.tpg_assetInfo.msk_acqsSuplyAmount.addEventHandler("oneditclick", this.div_work_Tab_tpg_assetInfo_MaskEdit00_oneditclick, this);
            this.div_work.Tab.tpg_assetInfo.msk_govsubyAcqsAmount.addEventHandler("oneditclick", this.div_work_Tab_tpg_assetInfo_MaskEdit00_oneditclick, this);
            this.div_work.Tab.tpg_assetInfo.edt_bcncNm.addEventHandler("oneditclick", this.div_work_Tab_tpg_assetInfo_Edit00_oneditclick, this);
            this.div_work.Tab.tpg_assetInfo.btn_bcncNm.addEventHandler("onclick", this.div_search_BCNC_NM_onclick, this);
            this.div_work.Tab.tpg_assetInfo.div_EMP.addEventHandler("onkeyup", this.div_SEARCH_div_EMP_onkeyup, this);
            this.div_work.Tab.tpg_assetInfo.cmb_assetsSe.addEventHandler("onitemchanged", this.div_work_Tab_tpg_assetInfo_cmb_UNIT_onitemchanged, this);
            this.div_work.Tab.tpg_assetInfo.edt_bizplcCode.addEventHandler("oneditclick", this.div_work_Tab_tpg_assetInfo_edt_BIZPLC_CODE_oneditclick, this);
            this.div_work.Tab.tpg_assetInfo.btn_bizplcCode.addEventHandler("onclick", this.div_work_Tab_tpg_assetInfo_btn_Assets00_onclick, this);
            this.div_work.Tab.tpg_assetInfo.edt_bizplcNm.addEventHandler("oneditclick", this.div_work_Tab_tpg_assetInfo_edt_BIZPLC_NM_oneditclick, this);
            this.div_work.Tab.tpg_assetInfo.edt_brcd.addEventHandler("oneditclick", this.div_work_Tab_tpg_assetInfo_Edit01_oneditclick, this);
            this.div_work.Tab.tpg_assetInfo.edt_remarks.addEventHandler("oneditclick", this.div_work_Tab_tpg_assetInfo_edt_rfid00_oneditclick, this);
            this.div_work.Tab.tpg_assetInfo.tpg_gvrnThngClNo.addEventHandler("onclick", this.div_work_Tab_tpg_assetInfo_sta_UPPER_ACNT_CODE_NM02_onclick, this);
            this.div_work.Tab.tpg_assetInfo.edt_gvrnThngClNo.addEventHandler("oneditclick", this.div_work_Tab_tpg_assetInfo_edt_BUDGET_ACNT_NM02_oneditclick, this);
            this.div_work.Tab.tabpage1.grd_Detail.addEventHandler("oncellclick", this.assets_mastr_table_oncellclick, this);
            this.div_work.grd_assetsMastr.addEventHandler("onexpandup", this.div_work_grd_assetsMastr_onexpandup, this);
            this.div_work.grd_assetsMastr.addEventHandler("onheadclick", this.div_work_grd_assetsMastr_onheadclick, this);
            this.div_work.btn_upload.addEventHandler("onclick", this.div_work_btn_upload_onclick, this);
            this.div_work.btn_download.addEventHandler("onclick", this.div_work_btn_download_onclick, this);
            this.div_work.sta_notice.addEventHandler("onclick", this.div_work_Static00_onclick, this);
            this.div_search.edt_ASSETS_CL_CODE.addEventHandler("oneditclick", this.div_work_Tab_tpg_assetInfo_edt_ASSETS_CL_CODE_oneditclick, this);
            this.div_search.cal_ACQS_DE1.addEventHandler("oneditclick", this.div_search_cal_ACQS_DE1_oneditclick, this);
            this.div_search.btn_Assets.addEventHandler("onclick", this.div_search_btn_Assets_onclick, this);
            this.div_search.edt_ASSETS_CL_NM.addEventHandler("oneditclick", this.div_work_Tab_tpg_assetInfo_edt_ASSETS_CL_NM_oneditclick, this);
            this.div_search.edt_bizplcCode.addEventHandler("oneditclick", this.div_work_Tab_tpg_assetInfo_edt_BIZPLC_CODE_oneditclick, this);
            this.div_search.btn_Assets00.addEventHandler("onclick", this.div_search_Assets_SE_onclick, this);
            this.div_search.edt_bizplcNm.addEventHandler("oneditclick", this.div_work_Tab_tpg_assetInfo_edt_BIZPLC_NM_oneditclick, this);
            this.grd_assetsUploadSample.addEventHandler("oncellclick", this.grd_assetsUploadSample_oncellclick, this);

        };

        this.loadIncludeScript("ASS010100.xfdl");
        this.loadPreloadList();
       
    };
}
)();
