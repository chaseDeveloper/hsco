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
                this.set_name("HRM070203_P1");
                this.set_classname("HRM070203_P1");
                this.set_titletext("관외출장신청 등록[상세]");
                this._setFormPosition(0,0,1059,689);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cond01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"INDEX\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_registerInfo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_bsrpDtls", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_PURPS\" type=\"STRING\" size=\"256\"/><Column id=\"BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_DAYCNT\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_DSTN_SE\" type=\"STRING\" size=\"256\"/><Column id=\"COURS_STRTPNT\" type=\"STRING\" size=\"256\"/><Column id=\"COURS_DSTN\" type=\"STRING\" size=\"256\"/><Column id=\"COURS_VIALOC\" type=\"STRING\" size=\"256\"/><Column id=\"TRVCT_ETC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TRVCT_RM\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_TOT_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TRVCT_ACNT_SE_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"TRVCT_ACNT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"TRVCT_BSNS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"TRVCT_BALC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"TRVCT_EXPNDTR_SBJECT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TRVCT_EXPNDTR_SBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"TRVCT_EXPNDTR_BUKIP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"TRVCT_EXPNDTR_BUKIP_CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COURS_DSTN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"JANG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GWAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HANG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEHANG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEMOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DRFT_STS\" type=\"STRING\" size=\"256\"/><Column id=\"DRFT_STS_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"DRFT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_STS\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_STS_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_SANCTN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CANCEL_SE\" type=\"STRING\" size=\"256\"/><Column id=\"GRPNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_CNRL_AT\" type=\"STRING\" size=\"256\"/><Column id=\"TRVCT_BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"TRVCT_BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TRVCT_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"TRVCT_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APPLC_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APPLC_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"APPLC_RSPOFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"APPLC_RSPOFC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APPLC_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"APPLC_EMPNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cncdntTriper", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TGRPN_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"TGRPN_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"TGRPN_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TGRPN_CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"TGRPN_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FNNC_INSTT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACNUTNO\" type=\"STRING\" size=\"256\"/><Column id=\"TGRPN_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"TGRPN_RSPOFC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TGRPN_RSPOFC_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_bsrpDtlsCychg", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TRNSPORT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"GRAD_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CHRGE_EXPS\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NMPR\" type=\"STRING\" size=\"256\"/><Column id=\"TRNSPORT_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_bsrpDtlsEtc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"IEM_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UNIT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"NMPR\" type=\"STRING\" size=\"256\"/><Column id=\"DAYCNT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_hrm241", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_hrm233", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_hrm234", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_hrm244", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_hrm245", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">00</Col><Col id=\"CODE_NM\">0급</Col></Row><Row><Col id=\"CODE\">01</Col><Col id=\"CODE_NM\">1급</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"CODE_NM\">2급</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"CODE_NM\">3급</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"CODE_NM\">4급</Col></Row><Row><Col id=\"CODE\">05</Col><Col id=\"CODE_NM\">5급</Col></Row><Row><Col id=\"CODE\">06</Col><Col id=\"CODE_NM\">6급</Col></Row><Row><Col id=\"CODE\">3A</Col><Col id=\"CODE_NM\">3A</Col></Row><Row><Col id=\"CODE\">3B</Col><Col id=\"CODE_NM\">3B</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">BGNDE</Col><Col id=\"compId\">ds_bsrpDtls</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">시작일자</Col></Row><Row><Col id=\"colId\">ENDDE</Col><Col id=\"compId\">ds_bsrpDtls</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">종료일자</Col></Row><Row><Col id=\"compId\">ds_bsrpDtls</Col><Col id=\"colId\">ENDDE</Col><Col id=\"from\">BGNDE</Col><Col id=\"msgId\">종료일자^시작일자</Col></Row><Row><Col id=\"colId\">BSRP_DAYCNT</Col><Col id=\"compId\">ds_bsrpDtls</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">일수</Col></Row><Row><Col id=\"colId\">BSRP_SE</Col><Col id=\"compId\">ds_bsrpDtls</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">출장구분</Col></Row><Row><Col id=\"colId\">BSRP_PURPS</Col><Col id=\"compId\">ds_bsrpDtls</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">출장목적</Col><Col id=\"nlength\">150</Col><Col id=\"lengthChkGb\">LE</Col></Row><Row><Col id=\"colId\">BSRP_DSTN_SE</Col><Col id=\"compId\">ds_bsrpDtls</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">출장지 구분</Col></Row><Row><Col id=\"colId\">COURS_STRTPNT</Col><Col id=\"compId\">ds_bsrpDtls</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">출발지</Col></Row><Row><Col id=\"colId\">COURS_DSTN</Col><Col id=\"compId\">ds_bsrpDtls</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">목적지</Col></Row><Row><Col id=\"compId\">ds_bsrpDtls</Col><Col id=\"colId\">COURS_VIALOC</Col><Col id=\"msgId\">경유지</Col><Col id=\"nlength\">100</Col><Col id=\"lengthChkGb\">LE</Col></Row><Row><Col id=\"compId\">ds_bsrpDtls</Col><Col id=\"colId\">COURS_DSTN_NM</Col><Col id=\"msgId\">행선지</Col><Col id=\"nlength\">100</Col><Col id=\"lengthChkGb\">LE</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">TRNSPORT_SE</Col><Col id=\"compId\">ds_bsrpDtlsCychg</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">종별</Col></Row><Row><Col id=\"colId\">GRAD_SE</Col><Col id=\"compId\">ds_bsrpDtlsCychg</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">등급</Col></Row><Row><Col id=\"colId\">CHRGE_EXPS</Col><Col id=\"compId\">ds_bsrpDtlsCychg</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">운임교통비</Col></Row><Row><Col id=\"colId\">NMPR</Col><Col id=\"compId\">ds_bsrpDtlsCychg</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">인원</Col></Row><Row><Col id=\"colId\">TRNSPORT_AMT</Col><Col id=\"compId\">ds_bsrpDtlsCychg</Col><Col id=\"msgId\">금액</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">IEM_SE</Col><Col id=\"compId\">ds_bsrpDtlsEtc</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">여비구분</Col></Row><Row><Col id=\"colId\">AMOUNT</Col><Col id=\"compId\">ds_bsrpDtlsEtc</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">실비</Col></Row><Row><Col id=\"colId\">NMPR</Col><Col id=\"compId\">ds_bsrpDtlsEtc</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">인원</Col></Row><Row><Col id=\"colId\">DAYCNT</Col><Col id=\"compId\">ds_bsrpDtlsEtc</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">일수</Col></Row><Row><Col id=\"colId\">ETC_AMT</Col><Col id=\"compId\">ds_bsrpDtlsEtc</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">금액</Col></Row><Row><Col id=\"compId\">ds_bsrpDtls</Col><Col id=\"colId\">TRVCT_EXPNDTR_BUKIP_CODE</Col><Col id=\"msgId\">지출단위</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_bsrpDtls</Col><Col id=\"colId\">EMPNO</Col><Col id=\"msgId\">사번</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_bsrpDtls</Col><Col id=\"colId\">EMPNM</Col><Col id=\"msgId\">성명</Col><Col id=\"notNull\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_bdg017", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond02", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"DATA_VALUE\" type=\"STRING\" size=\"1000\"/><Column id=\"DATA_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"O_URL\" type=\"STRING\" size=\"256\"/><Column id=\"I_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CANCEL_SE\" type=\"STRING\" size=\"256\"/><Column id=\"GRPNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sanctnSttusCode", this);
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

            obj = new Dataset("ds_hrm269", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_expDsnMastr", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DECSN_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"DECSN_NO\" type=\"STRING\" size=\"10\"/><Column id=\"CAUSE_ACTION_NO\" type=\"STRING\" size=\"10\"/><Column id=\"BUDGET_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"1\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"1\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"8\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ANACT_KND\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CYFD_SE\" type=\"STRING\" size=\"1\"/><Column id=\"ITNC_DE\" type=\"STRING\" size=\"8\"/><Column id=\"PYMNT_ITNC_DE\" type=\"STRING\" size=\"8\"/><Column id=\"DET_DCSN_DE\" type=\"STRING\" size=\"8\"/><Column id=\"PRMPC_JRNLZPR_RGIST_DE\" type=\"STRING\" size=\"8\"/><Column id=\"CPTAL_EXPNDTR_ACNTBK_DE\" type=\"STRING\" size=\"8\"/><Column id=\"EXPNDTR_BUDGET_CNRL_DE\" type=\"STRING\" size=\"8\"/><Column id=\"CAUSE_ACTION_DE\" type=\"STRING\" size=\"8\"/><Column id=\"DECSN_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BUDGET_ACNT_BLCE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"EXPNDTR_UNIT_CODE\" type=\"STRING\" size=\"8\"/><Column id=\"EXPNDTR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_UNIT_CODE_BLCE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CPTAL_CHRG_CONFM\" type=\"STRING\" size=\"1\"/><Column id=\"TIMHDER_CONFM\" type=\"STRING\" size=\"1\"/><Column id=\"CNTRCT_NO\" type=\"STRING\" size=\"11\"/><Column id=\"FNNC_INSTT_CODE\" type=\"STRING\" size=\"3\"/><Column id=\"ACNUTNO\" type=\"STRING\" size=\"20\"/><Column id=\"SUMRY\" type=\"STRING\" size=\"200\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRMPC_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"PRMPC_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"PRMPC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"DATE\" size=\"7\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"7\"/><Column id=\"EXPNDTR_CNFIRM_AT\" type=\"STRING\" size=\"2\"/><Column id=\"ATMC_JRNLZ_TY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GNRL_DEBTOR_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GNRL_CRDIT_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SETOFF_DEBTOR_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SETOFF_CRDIT_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_SANCTN_STTUS\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_CNRL_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"DECSN_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"DECSN_NO\" type=\"STRING\" size=\"10\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BSRP_DE\" type=\"STRING\" size=\"8\"/><Column id=\"STRTPNT\" type=\"STRING\" size=\"30\"/><Column id=\"VIALOC\" type=\"STRING\" size=\"30\"/><Column id=\"ALOC\" type=\"STRING\" size=\"30\"/><Column id=\"ASORT\" type=\"STRING\" size=\"30\"/><Column id=\"DSTNC\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHRGE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"NMPR\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SM_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DAYCNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RM\" type=\"STRING\" size=\"200\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"DATE\" size=\"7\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"7\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_trvctExpDsnMtrDet", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DECSN_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"DECSN_NO\" type=\"STRING\" size=\"10\"/><Column id=\"EXPECT_DE\" type=\"STRING\" size=\"8\"/><Column id=\"EXPECT_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"EXCCLC_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"DATE\" size=\"7\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"7\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"DECSN_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"DECSN_NO\" type=\"STRING\" size=\"10\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"EXPECT_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"EXCCLC_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DECSN_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RQEST_DE\" type=\"STRING\" size=\"8\"/><Column id=\"RQEST_MAN_EMPNO\" type=\"STRING\" size=\"8\"/><Column id=\"RQEST_MAN\" type=\"STRING\" size=\"100\"/><Column id=\"RQEST_DEPT_NM\" type=\"STRING\" size=\"30\"/><Column id=\"RQEST_CLSF\" type=\"STRING\" size=\"100\"/><Column id=\"RCPT_DE\" type=\"STRING\" size=\"8\"/><Column id=\"RCPT_MAN_EMPNO\" type=\"STRING\" size=\"8\"/><Column id=\"RCPT_MAN\" type=\"STRING\" size=\"100\"/><Column id=\"FNNC_INSTT_CODE\" type=\"STRING\" size=\"3\"/><Column id=\"ACNUTNO\" type=\"STRING\" size=\"20\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"DATE\" size=\"7\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"7\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"DECSN_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"CAUSE_ACTION_NO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DECSN_NO\" type=\"STRING\" size=\"10\"/><Column id=\"RLROAD_CYCHG_1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RLROAD_CYCHG_2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RLROAD_CYCHG_3\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RLROAD_CYCHG_4\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SHIP_CYCHG_1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SHIP_CYCHG_2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SHIP_CYCHG_3\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SHIP_CYCHG_4\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CAR_CYCHG_1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CAR_CYCHG_2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CGFFD_DAYCNT_UPPT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CGFFD_1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CGFFD_2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CGFFD_DAYCNT_MIDDL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CGFFD_3\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CGFFD_4\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"STAYNG_DAYCNT_UPPT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"STAYNG_CHRGE_1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"STAYNG_CHRGE_2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"STAYNG_DAYCNT_MIDDL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"STAYNG_CHRGE_3\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"STAYNG_CHRGE_4\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ACPLC_TRNSPORT_NON_DAYCNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TRNSPORT_NON_1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TRNSPORT_NON_2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BEFORE_CHRGE_1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BEFORE_CHRGE_2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BEFORE_CHRGE_3\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ACPLC_TRNSPORT_NON_MIDDL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RM\" type=\"STRING\" size=\"200\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"DATE\" size=\"7\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"7\"/><Column id=\"NMPR\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
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

            obj = new Dataset("DS_CANCEL_SE", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">신규</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">취소</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_validation00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_bsrpDtls</Col><Col id=\"colId\">ENDDE</Col><Col id=\"from\">BGNDE</Col><Col id=\"msgId\">종료일자^시작일자</Col></Row><Row><Col id=\"compId\">ds_bsrpDtls</Col><Col id=\"colId\">EMPNO</Col><Col id=\"msgId\">사번</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_bsrpDtls</Col><Col id=\"colId\">EMPNM</Col><Col id=\"msgId\">성명</Col><Col id=\"notNull\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_participant", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"GRPNO\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_registerInfo2", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("edt_deptcd", "absolute", "225", "95", "7", "21", null, null, this);
            obj.set_taborder("106");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label16", "absolute", "542", "621", "501", "27", null, null, this);
            obj.set_taborder("96");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label13", "absolute", "542", "595", "501", "27", null, null, this);
            obj.set_taborder("94");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label14", "absolute", "542", "647", "501", "27", null, null, this);
            obj.set_taborder("95");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_etc01", "absolute", "674", "624", "366", "21", null, null, this);
            obj.set_taborder("78");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label10", "absolute", "542", "331", "501", "27", null, null, this);
            obj.set_taborder("92");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label06", "absolute", "15", "331", "514", "27", null, null, this);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label07", "absolute", "15", "357", "514", "27", null, null, this);
            obj.set_taborder("91");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label15", "absolute", "15", "595", "514", "27", null, null, this);
            obj.set_taborder("99");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label19", "absolute", "15", "647", "514", "27", null, null, this);
            obj.set_taborder("98");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "1058", "15", null, null, this);
            obj.set_taborder("0");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "0", "0", "15", "689", null, null, this);
            obj.set_taborder("82");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "17", "40", "1026", "5", null, null, this);
            obj.set_taborder("5");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "15", "674", null, "15", "15", null, this);
            obj.set_taborder("81");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "1044", "0", "15", "689", null, null, this);
            obj.set_taborder("83");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close", "absolute", null, "15", "50", "25", "15", null, this);
            obj.set_taborder("4");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("#4563a1ff");
            obj.style.set_border("1 solid #2d4d8eff");
            obj.style.set_bordertype("round 2 2");
            obj.style.set_font("bold 9 Gulim");
            obj.style.set_gradation("linear 0,0 #f4f4f4ff 0,100 #e2e7edff");
            obj.getSetter("userdata").set("A:T;");
            this.addChild(obj.name, obj);

            obj = new Button("btn_approval", "absolute", null, "15", "50", "25", "121", null, this);
            obj.set_taborder("2");
            obj.set_text("결재");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("#4563a1ff");
            obj.style.set_border("1 solid #2d4d8eff");
            obj.style.set_bordertype("round 2 2");
            obj.style.set_font("bold 9 Gulim");
            obj.getSetter("userdata").set("A:T;");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save", "absolute", null, "15", "50", "25", "68", null, this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("#4563a1ff");
            obj.style.set_border("1 solid #2d4d8eff");
            obj.style.set_bordertype("round 2 2");
            obj.style.set_font("bold 9 Gulim");
            obj.getSetter("userdata").set("A:T;");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bsrpEmpno", "absolute", "17", "45", null, "21", "943", null, this);
            obj.set_taborder("6");
            obj.set_text("출장신청자");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label00", "absolute", "15", "92", "514", "27", null, null, this);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_deptNm", "absolute", "147", "95", "100", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_clsfNm", "absolute", "249", "95", "100", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label01", "absolute", "15", "66", "514", "27", null, null, this);
            obj.set_taborder("85");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_empno", "absolute", "147", "69", "80", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_empnm", "absolute", "229", "69", "120", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sanCtn", "absolute", "543", "45", null, "21", "379", null, this);
            obj.set_taborder("14");
            obj.set_text("전자결재 / 신청일자");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label03", "absolute", "542", "66", "501", "27", null, null, this);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_sanctn", "absolute", "674", "69", "140", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.set_type("string");
            obj.set_mask("9999-99-99 99:99:99");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("center middle");
            obj.set_maskchar(" ");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "15", "119", null, "10", "15", null, this);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bsrpEmp", "absolute", "17", "128", null, "21", "777", null, this);
            obj.set_taborder("22");
            obj.set_text("출장자(본인 및 동행출장자 포함)");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sanctn", "absolute", null, "66", "130", "27", "387", null, this);
            obj.set_taborder("15");
            obj.set_text("전자결재");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_emp", "absolute", "15", "66", "130", "27", null, null, this);
            obj.set_taborder("8");
            obj.set_text("사번 / 성명");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_dept", "absolute", "15", "92", "130", "27", null, null, this);
            obj.set_taborder("11");
            obj.set_text("소속 / 직책");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label09", "absolute", "542", "92", "501", "27", null, null, this);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_registDt", "absolute", "542", "92", "130", "27", null, null, this);
            obj.set_taborder("19");
            obj.set_text("신청일자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_bsrpEmp", "absolute", "15", "149", "514", "151", null, null, this);
            obj.set_taborder("26");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_cncdntTriper");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"40\"/><Column size=\"115\"/><Column size=\"85\"/><Column size=\"200\"/><Column size=\"77\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"사번\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"소속\"/><Cell col=\"5\" text=\"직급\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"expr:(currow)+1\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:TGRPN_EMPNO\" expandshow=\"expr:dataset.getRowType(currow)=='1' ? &quot;hide&quot; : &quot;show&quot;\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:TGRPN_EMPNM\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:TGRPN_DEPT_NM\"/><Cell col=\"5\" displaytype=\"normal\" text=\"bind:TGRPN_CLSF_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_RowInsert0", "absolute", "332", "129", "64", "19", null, null, this);
            obj.set_taborder("23");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Gridadd");
            this.addChild(obj.name, obj);

            obj = new Button("btn_RowDelete0", "absolute", "398", "129", "64", "19", null, null, this);
            obj.set_taborder("24");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Griddel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_RowCancel0", "absolute", "464", "129", "64", "19", null, null, this);
            obj.set_taborder("25");
            obj.set_text("행취소");
            obj.set_cssclass("btn_WF_Gridcnl");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bsrpbegin00", "absolute", "543", "128", null, "21", "383", null, this);
            obj.set_taborder("27");
            obj.set_text("출장구분 및 목적");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label02", "absolute", "542", "149", "501", "27", null, null, this);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label05", "absolute", "542", "175", "501", "125", null, null, this);
            obj.set_taborder("89");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bsrpSE", "absolute", null, "149", "130", "27", "387", null, this);
            obj.set_taborder("28");
            obj.set_text("출장구분");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bsrpPurps", "absolute", null, "175", "130", "125", "387", null, this);
            obj.set_taborder("30");
            obj.set_text("출장목적");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_bsrpSE", "absolute", "674", "152", "162", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("29");
            obj.set_readonly("false");
            obj.set_innerdataset("@ds_hrm241");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_cssclass("cmb_WF_Essential");
            obj.set_index("-1");

            obj = new Static("Static00", "absolute", "15", "300", null, "10", "15", null, this);
            obj.set_taborder("32");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bsrpbegin01", "absolute", "17", "310", null, "21", "930", null, this);
            obj.set_taborder("33");
            obj.set_text("출장기간");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bgnDe", "absolute", "15", "331", "130", "27", null, null, this);
            obj.set_taborder("34");
            obj.set_text("시작일자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_endDe", "absolute", "272", "331", "130", "27", null, null, this);
            obj.set_taborder("36");
            obj.set_text("종료일자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_daycnt", "absolute", "15", "357", "130", "27", null, null, this);
            obj.set_taborder("38");
            obj.set_text("일수");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_bgnDe", "absolute", "147", "334", "122", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("35");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_align("center middle");
            obj.set_cssclass("cal_WF_Essential");

            obj = new Calendar("cal_endDe", "absolute", "404", "334", "122", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("37");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_align("center middle");
            obj.set_cssclass("cal_WF_Essential");

            obj = new Edit("edt_daycnt", "absolute", "147", "360", "98", "21", null, null, this);
            obj.set_taborder("39");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_coursDstnNm", "absolute", "543", "310", null, "21", "383", null, this);
            obj.set_taborder("41");
            obj.set_text("출장지 및 이동사항");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bsrpSe", "absolute", null, "331", "186", "27", "331", null, this);
            obj.set_taborder("42");
            obj.set_text("출장지 구분 / 출발지 / 목적지");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Dotum");
            obj.set_wordwrap("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label11", "absolute", "542", "357", "501", "27", null, null, this);
            obj.set_taborder("93");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_bsrpSe", "absolute", "730", "334", "74", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("43");
            obj.set_innerdataset("@ds_hrm233");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_readonly("true");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_index("-1");

            obj = new Combo("cmb_coursStrtpnt", "absolute", "806", "334", "115", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("44");
            obj.set_innerdataset("@ds_hrm269");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_cssclass("cmb_WF_Essential");

            obj = new Combo("cmb_coursDstn", "absolute", "923", "334", "115", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("45");
            obj.set_innerdataset("@ds_hrm269");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_cssclass("cmb_WF_Essential");

            obj = new Static("Static04", "absolute", "15", "384", null, "10", "15", null, this);
            obj.set_taborder("50");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_trnsportExps", "absolute", "17", "393", null, "21", "954", null, this);
            obj.set_taborder("51");
            obj.set_text("운임교통비");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_trnsportExps", "absolute", "15", "414", "514", "151", null, null, this);
            obj.set_taborder("55");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_bsrpDtlsCychg");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"29\"/><Column size=\"29\"/><Column size=\"106\"/><Column size=\"71\"/><Column size=\"112\"/><Column size=\"53\"/><Column size=\"116\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"종별\"/><Cell col=\"3\" text=\"등급\"/><Cell col=\"4\" text=\"운임교통비\"/><Cell col=\"5\" text=\"인원\"/><Cell col=\"6\" text=\"금액\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"expr:(currow)+1\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:TRNSPORT_SE\" combodataset=\"ds_hrm244\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodisplay=\"display\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:GRAD_SE\" combodataset=\"ds_hrm234\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodisplay=\"display\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:CHRGE_EXPS\" mask=\"99,999\" expandshow=\"show\"/><Cell col=\"5\" text=\"bind:NMPR\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"none\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:TRNSPORT_AMT\" mask=\"99,999\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_RowInsert1", "absolute", "332", "394", "64", "19", null, null, this);
            obj.set_taborder("52");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Gridadd");
            this.addChild(obj.name, obj);

            obj = new Button("btn_RowDelete1", "absolute", "398", "394", "64", "19", null, null, this);
            obj.set_taborder("53");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Griddel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_RowCancel1", "absolute", "464", "394", "64", "19", null, null, this);
            obj.set_taborder("54");
            obj.set_text("행취소");
            obj.set_cssclass("btn_WF_Gridcnl");
            this.addChild(obj.name, obj);

            obj = new Static("sta_trvct", "absolute", "543", "393", null, "21", "455", null, this);
            obj.set_taborder("56");
            obj.set_text("여비");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("btn_RowInsert2", "absolute", "846", "394", "64", "19", null, null, this);
            obj.set_taborder("57");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Gridadd");
            this.addChild(obj.name, obj);

            obj = new Button("btn_RowDelete2", "absolute", "912", "394", "64", "19", null, null, this);
            obj.set_taborder("58");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Griddel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_RowCancel2", "absolute", "978", "394", "64", "19", null, null, this);
            obj.set_taborder("59");
            obj.set_text("행취소");
            obj.set_cssclass("btn_WF_Gridcnl");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_trvct", "absolute", "542", "414", "501", "151", null, null, this);
            obj.set_taborder("60");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_bsrpDtlsEtc");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"28\"/><Column size=\"32\"/><Column size=\"87\"/><Column size=\"97\"/><Column size=\"53\"/><Column size=\"40\"/><Column size=\"107\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"여비구분\"/><Cell col=\"3\" text=\"실비\"/><Cell col=\"4\" text=\"인원\"/><Cell col=\"5\" text=\"일수\"/><Cell col=\"6\" text=\"금액\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"expr:(currow)+1\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:IEM_SE\" combodataset=\"ds_hrm245\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodisplay=\"display\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right middle;\" text=\"bind:AMOUNT\" mask=\"99,999\" editdisplay=\"display\"/><Cell col=\"4\" text=\"bind:NMPR\"/><Cell col=\"5\" edittype=\"normal\" style=\"align:center middle;\" text=\"bind:DAYCNT\" editdisplay=\"display\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"none\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ETC_AMT\" mask=\"99,999\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "15", "565", null, "10", "15", null, this);
            obj.set_taborder("61");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_etc", "absolute", "542", "595", "130", "27", null, null, this);
            obj.set_taborder("75");
            obj.set_text("여비기타");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bsrpExps", "absolute", "542", "647", "130", "27", null, null, this);
            obj.set_taborder("79");
            obj.set_text("출장비 합계");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_trvctExpndtrSbject", "absolute", "17", "574", null, "21", "930", null, this);
            obj.set_taborder("62");
            obj.set_text("여비지출 과목");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_etc00", "absolute", "542", "621", "130", "27", null, null, this);
            obj.set_taborder("77");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label17", "absolute", "15", "621", "514", "27", null, null, this);
            obj.set_taborder("97");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "249", "624", "278", "21", null, null, this);
            obj.set_taborder("69");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("sta_trvctAcnt00", "absolute", "15", "621", "130", "27", null, null, this);
            obj.set_taborder("67");
            obj.set_text("예산계정");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04", "absolute", "249", "650", "278", "21", null, null, this);
            obj.set_taborder("73");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("sta_trvctAcnt01", "absolute", "15", "647", "130", "27", null, null, this);
            obj.set_taborder("70");
            obj.set_text("지출단위");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_trvctAcnt", "absolute", "15", "595", "130", "27", null, null, this);
            obj.set_taborder("63");
            obj.set_text("예산년도");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_trvctAcnt02", "absolute", null, "595", "130", "27", "680", null, this);
            obj.set_taborder("65");
            obj.set_text("계정구분");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_trvctAcntSe", "absolute", "381", "598", "145", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("66");
            obj.set_readonly("true");
            obj.set_innerdataset("@ds_bdg017");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.style.set_align("center middle");

            obj = new Edit("edt_etc02", "absolute", "147", "598", "100", "21", null, null, this);
            obj.set_taborder("64");
            obj.style.set_align("center middle");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sanctn01", "absolute", null, "66", "130", "27", "105", null, this);
            obj.set_taborder("17");
            obj.set_text("결재진행상태");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_SANCTN_STTUS_SE", "absolute", "956", "69", "84", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.set_innerdataset("@ds_com022");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_readonly("true");

            obj = new Calendar("cal_registDt", "absolute", "674", "95", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("20");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj.set_readonly("true");
            obj.set_cssclass("cal_WF_Readonly");
            obj.style.set_align("center middle");

            obj = new Edit("edt_coursVialoc", "absolute", "674", "360", "115", "21", null, null, this);
            obj.set_taborder("47");
            this.addChild(obj.name, obj);

            obj = new Static("sta_coursStrtpnt", "absolute", "542", "357", "130", "27", null, null, this);
            obj.set_taborder("46");
            obj.set_text("경유지");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_coursStrtpnt00", "absolute", "791", "357", "130", "27", null, null, this);
            obj.set_taborder("48");
            obj.set_text("행선지(목적지명)");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_coursDstnNm", "absolute", "923", "360", "115", "21", null, null, this);
            obj.set_taborder("49");
            obj.set_cssclass("edt_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_etc00", "absolute", "674", "598", "120", "21", null, null, this);
            obj.set_taborder("76");
            obj.set_cssclass("Cellgrd_WF_AlignRight");
            obj.set_limitbymask("both");
            obj.set_mask("#,###,###,###,###");
            obj.set_maskchar(" ");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_bsrpExps", "absolute", "674", "650", "120", "21", null, null, this);
            obj.set_taborder("80");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_mask("999,999,999,999,999");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_expDsn", "absolute", null, "15", "73", "25", "174", null, this);
            obj.set_taborder("1");
            obj.set_text("지출결의");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("#4563a1ff");
            obj.style.set_border("1 solid #2d4d8eff");
            obj.style.set_bordertype("round 2 2");
            obj.style.set_font("bold 9 Gulim");
            obj.getSetter("userdata").set("A:T;");
            this.addChild(obj.name, obj);

            obj = new Static("sta_trvctExpndtrSbject00", "absolute", "543", "574", null, "21", "404", null, this);
            obj.set_taborder("74");
            obj.set_text("기타");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_TRVCT_EXPNDTR_SBJECT", "absolute", "147", "624", "100", "21", null, null, this);
            obj.set_taborder("68");
            obj.set_readonly("true");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_mask("###-####");
            obj.set_type("string");
            obj.style.set_padding("1 21 0 6");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_TRVCT_EXPNDTR_BUKIP_CODE", "absolute", "147", "650", "100", "21", null, null, this);
            obj.set_taborder("71");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Essential");
            obj.set_mask("##-##-##-##");
            obj.set_type("string");
            obj.style.set_background("#fffcfbff URL('theme://images/img_WF_Essential.png') left top");
            obj.style.set_padding("1 21 0 6");
            this.addChild(obj.name, obj);

            obj = new Button("btn_bdg", "absolute", "225", "650", "22", "21", null, null, this);
            obj.set_taborder("72");
            obj.set_cssclass("btn_WF_Search");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_bsrpPurps", "absolute", "674", "177", "367", "121", null, null, this);
            obj.set_taborder("31");
            obj.style.set_padding("7 7 7 7");
            obj.set_cssclass("txt_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Static("sta_day", "absolute", "253", "357", "16", "27", null, null, this);
            obj.set_taborder("40");
            obj.set_text("일");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title02", "absolute", "97", "394", "152", "19", null, null, this);
            obj.set_taborder("100");
            obj.set_text("(인원 자동계산 : 출장자)");
            obj.style.set_color("blue");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00", "absolute", "588", "394", "152", "19", null, null, this);
            obj.set_taborder("101");
            obj.set_text("(인원 자동계산 : 출장자)");
            obj.style.set_color("blue");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup", "absolute", "754", "394", "90", "19", null, null, this);
            obj.set_taborder("102");
            obj.set_text("출장여비기준");
            this.addChild(obj.name, obj);

            obj = new Static("sta_DETAIL01", "absolute", "147", "44", null, "21", "820", null, this);
            obj.set_taborder("103");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_CANCEL_SE", "absolute", "219", "47", "110", "16", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("104");
            obj.set_innerdataset("@DS_CANCEL_SE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_value("0");
            obj.set_direction("vertical");
            obj.set_cssclass("rdo_WF_Readonly");

            obj = new Button("btn_Vrsc_man_search", "absolute", "352", "73", "13", "13", null, null, this);
            obj.set_taborder("105");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.style.set_background("URL('theme://images/btn_WF_Search.png')");
            obj.style.set_border("0 solid #8d8d8dff");
            obj.style.set_cursor("default");
            this.addChild(obj.name, obj);

            obj = new Button("btn_korail", "absolute", null, "394", "80", "19", "730", null, this);
            obj.set_taborder("107");
            obj.set_text("열차운임조회");
            obj.set_cssclass("btn_WF_Link");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1059, 689, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HRM070203_P1");
            		p.set_titletext("관외출장신청 등록[상세]");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item18","edt_coursVialoc","value","ds_bsrpDtls","COURS_VIALOC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_deptNm","value","ds_bsrpDtls","APPLC_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_clsfNm","value","ds_bsrpDtls","APPLC_RSPOFC_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edt_empno","value","ds_bsrpDtls","APPLC_EMPNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edt_empnm","value","ds_bsrpDtls","APPLC_EMPNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","msk_sanctn","value","ds_bsrpDtls","LAST_SANCTN_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","cal_registDt","value","ds_bsrpDtls","REGIST_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","cmb_bsrpSE","value","ds_bsrpDtls","BSRP_DSTN_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","cal_bgnDe","value","ds_bsrpDtls","BGNDE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","cal_endDe","value","ds_bsrpDtls","ENDDE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","edt_daycnt","value","ds_bsrpDtls","BSRP_DAYCNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","cmb_bsrpSe","value","ds_bsrpDtls","BSRP_DSTN_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","cmb_coursStrtpnt","value","ds_bsrpDtls","COURS_STRTPNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","cmb_coursDstn","value","ds_bsrpDtls","COURS_DSTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","cmb_trvctAcntSe","value","ds_bsrpDtls","TRVCT_ACNT_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","edt_etc01","value","ds_bsrpDtls","TRVCT_RM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","edt_etc02","value","ds_bsrpDtls","TRVCT_ACNT_SE_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","Edit02","value","ds_bsrpDtls","TRVCT_EXPNDTR_SBJECT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","Edit04","value","ds_bsrpDtls","TRVCT_EXPNDTR_BUKIP_CODE_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","cmb_SANCTN_STTUS_SE","value","ds_bsrpDtls","SANCTN_STS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_coursDstnNm","value","ds_bsrpDtls","COURS_DSTN_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","edt_etc00","value","ds_bsrpDtls","TRVCT_ETC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","edt_bsrpExps","value","ds_bsrpDtls","BSRP_TOT_AMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","msk_TRVCT_EXPNDTR_SBJECT","value","ds_bsrpDtls","TRVCT_EXPNDTR_SBJECT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","msk_TRVCT_EXPNDTR_BUKIP_CODE","value","ds_bsrpDtls","TRVCT_EXPNDTR_BUKIP_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","txt_bsrpPurps","value","ds_bsrpDtls","BSRP_PURPS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edt_deptcd","value","ds_bsrpDtls","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HRM070203_P1.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("HRM070203_P1.xfdl", "mis_lib::misUtil.xjs");
        this.registerScript("HRM070203_P1.xfdl", function() {
        /***********************************************************************
         * 업무구분 : MIS > 인사관리 > 관외출장신청 등록[상세]
         * 화면ID   : HRM070203_P1
         * 화면명   : 관외출장신청등록[상세]
         * 화면설명 : 관외출장신청등록[상세]을 관리한다.
         * 작성일   : 2015.10.13
         * 작성자   : 이혜선
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
        // 업무에 필요한 공통 라이브러리 파일을 추가할 수 있다.
        // TODO

        /***********************************************************************
         * 화면 변수 선언부
         ***********************************************************************/
         this.fv_objForm;
         var isMainPtcp;
         /***********************************************************************
         * onInit / onLoad 영역
         ***********************************************************************/
         this.HRM070203_P1_oninit = function(obj,e)
        {
        	this.fn_init_form();
        	this.fn_init_dataset();
        }
        this.HRM070203_P1_onload = function(obj,e)
        {
        	if(!this.parent.arg_2){ //신규일때 취소선택불가
        		this.rdo_CANCEL_SE.set_readonly(true);
        	}
        	
        	this.fn_loadCombo();
        	this.fv_objForm = this.parent.arg_0;
        	var v_popupMsg = this.parent.arg_1;
        	var v_popupMsg2 = this.parent.arg_2;
        	var v_popupMsg3 = this.parent.arg_3;
        	isMainPtcp = this.parent.arg_4;
        	
        	if(!v_popupMsg2){	//신규버튼
        		this.ds_cond01.clearData();
        		var nRow = this.ds_cond01.addRow();
        		this.ds_cond01.setColumn(nRow,"EMPNO",v_popupMsg);
        		
        		this.rdo_CANCEL_SE.set_index(0);
        		this.rdo_CANCEL_SE.set_readonly(true);
        		
        		this.ds_bsrpDtlsCychg.clearData();
        		this.ds_bsrpDtlsEtc.clearData();
        		
        		if(this.parent.arg_1 != undefined && this.parent.arg_1 != ''){
        			this.fn_transaction("registerInfoR");
        		}
        	}
        	else {	//셀더블클릭
        		this.ds_cond00.clearData();
        		var nRow = this.ds_cond00.addRow();
        		this.ds_cond00.setColumn(nRow,"EMPNO",v_popupMsg2);
        		this.ds_cond00.setColumn(nRow,"SEQ",v_popupMsg3);
        		this.fn_search();
        	}
        	
        	//권한설정
        	//if ( this.gfn_authcode("005") > -1 ) { //인사담당자
        		this.btn_Vrsc_man_search.set_enable(true);
        		this.btn_Vrsc_man_search.set_visible(true);
        	//}
        }
        /***********************************************************************
         * Form 오브젝트 초기화
         ***********************************************************************/ 
        this.fn_init_form = function()
        {
        	this.gfn_initForm(this);
        	this.fn_misFormInit(this);
        }

        /***********************************************************************
         * Dataset 오브젝트 초기화
         ***********************************************************************/ 
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
         * 함수명  	: fn_loadCombo
         * 설명 		: 화면의 Combo 에 데이터를 불러온다.
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_loadCombo();
         */
        this.fn_loadCombo = function ()
        {
        	var comboParams = [
        		 ["ds_hrm241", "HRM241", "1", "선택"]	// 출장구분
        		,["ds_hrm233", "HRM233", "1", ""]		// 출장여비구분(국내국외)
        		,["ds_hrm234", "HRM234", "1", ""]		// 특실구분(등급)
        		,["ds_hrm244", "HRM244", "1", ""]		// 교통구분
        		,["ds_hrm245", "HRM245", "1", ""]		// 출장여비구분(일비,숙박료,식비)
        		,["ds_bdg017", "BDG017", "Y", "S"]		// 계정구분
        		,["ds_hrm269", "HRM269", "1", ""]		// 행정구역구분(출발지,목적지)
        		,["ds_com022", "COM023", "Y", "D", "B"]	// 전자결재종류
        	];
        	
        	this.gfn_comboLoad(comboParams, this.fn_callbackAfter);
        }

        /*
         * 함수명  	: fn_callbackAfter
         * 설명 		: callback 처리 후
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_callbackAfter(comboParams, this.fn_callbackAfter);
         */
        this.fn_callbackAfter = function ()
        {
        	this.cmb_bsrpSe.set_index(0);				//출장지 국내 고정
        	this.ds_cond00.setColumn(0,"BSRP_SE","");
        }

         /*
         * 함수명  	: fn_search
         * 설명 		: 저장 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_search();
         */
        this.fn_search = function(obj,e)
        {
        	this.fn_transaction("selectTbhrmBsrpDtlsR");
        }

        /*
         * 함수명  	: fn_cudSetup
         * 설명 		: 전자결재 진행상황에 따른 수정여부 설정
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_cudSetup();
         */
        this.fn_cudSetup = function()
        {	
        	// 전자결재 상태 체크 2016.7
        	// 기안상태 COM022 (0:기안전 1:기안 9:기안오류)
        	// 결재상태 COM023 (1: 진행 2:보류 4:대기 8:협조대기 32:삭제 256:완료 512:반송 4096:취소 1024:참조 NUL:상신전 DUP:결재중복)
        	// 기안전인것 : 재상신 및 수정/삭제
        	// 결재상태가 상신전 외는 신규로 다시 진행.
        	var draftKnd = this.ds_bsrpDtls.getColumn(0, "DRFT_STS");
        	var sanctnKnd = this.ds_bsrpDtls.getColumn(0, "SANCTN_STS");
        	var bEnable = (draftKnd == "1" || draftKnd == "9") ? false : true;
        	
        	this.btn_Save.set_enable(bEnable);
        	this.btn_approval.set_enable(bEnable);
        	this.rdo_CANCEL_SE.set_readonly(bEnable);
        	
        	if(!bEnable){ //결재가 진행되면 수정불가
        		this.cal_registDt.set_readonly(true);
        		this.btn_RowInsert0.set_enable(false);
        		this.btn_RowDelete0.set_enable(false);
        		this.btn_RowCancel0.set_enable(false);
        		this.cmb_bsrpSE.set_readonly(true);
        		this.txt_bsrpPurps.set_readonly(true);
        		this.cal_bgnDe.set_readonly(true);
        		this.cal_endDe.set_readonly(true);
        		this.edt_daycnt.set_readonly(true);
        		this.cmb_bsrpSe.set_readonly(true);
        		this.cmb_coursStrtpnt.set_readonly(true);
        		this.cmb_coursDstn.set_readonly(true);
        		this.edt_coursVialoc.set_readonly(true);
        		this.btn_RowInsert1.set_enable(false);
        		this.btn_RowDelete1.set_enable(false);
        		this.btn_RowCancel1.set_enable(false);
        		this.btn_RowInsert2.set_enable(false);
        		this.btn_RowDelete2.set_enable(false);
        		this.btn_RowCancel2.set_enable(false);
        		this.edt_etc00.set_readonly(true);
        		this.edt_etc01.set_readonly(true);
        		this.edt_bsrpExps.set_readonly(true);
        		this.edt_etc02.set_readonly(true);
        		this.cmb_trvctAcntSe.set_readonly(true);
        		this.btn_bdg.set_enable(false);
        		this.edt_coursDstnNm.set_readonly(true);
        	}else{
        		this.btn_RowInsert0.set_enable(false);
        		this.btn_RowDelete0.set_enable(false);
        		this.btn_RowCancel0.set_enable(false);
        	}
        	
        	//출장 신청자가 아니면 수정,삭제 불가
        	if(!isMainPtcp){
        		this.btn_expDsn.set_enable(false);
        		this.btn_approval.set_enable(false);
        		this.btn_Save.set_enable(false);
        		this.cal_registDt.set_readonly(true);
        		this.btn_RowInsert0.set_enable(false);
        		this.btn_RowDelete0.set_enable(false);
        		this.btn_RowCancel0.set_enable(false);
        		this.cmb_bsrpSE.set_readonly(true);
        		this.txt_bsrpPurps.set_readonly(true);
        		this.cal_bgnDe.set_readonly(true);
        		this.cal_endDe.set_readonly(true);
        		this.edt_daycnt.set_readonly(true);
        		this.cmb_bsrpSe.set_readonly(true);
        		this.cmb_coursStrtpnt.set_readonly(true);
        		this.cmb_coursDstn.set_readonly(true);
        		this.edt_coursVialoc.set_readonly(true);
        		this.btn_RowInsert1.set_enable(false);
        		this.btn_RowDelete1.set_enable(false);
        		this.btn_RowCancel1.set_enable(false);
        		this.btn_RowInsert2.set_enable(false);
        		this.btn_RowDelete2.set_enable(false);
        		this.btn_RowCancel2.set_enable(false);
        		this.edt_etc00.set_readonly(true);
        		this.edt_etc01.set_readonly(true);
        		this.edt_bsrpExps.set_readonly(true);
        		this.edt_etc02.set_readonly(true);
        		this.cmb_trvctAcntSe.set_readonly(true);
        		this.btn_bdg.set_enable(false);
        		this.edt_coursDstnNm.set_readonly(true);
        	}
        	
        	this.btn_expDsn.set_enable( sanctnKnd == "256" ? true:false );	
        }

         /*
         * 함수명  	: fn_save
         * 설명 		: 저장 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_save();
         */
        this.fn_save = function(obj,e)
        {
        	// 데이터셋 수정 여부체크
        	if (!this.comUtils.isDatasetUpdated(this.ds_bsrpDtls)&&!this.comUtils.isDatasetUpdated(this.ds_bsrpDtlsCychg)&&!this.comUtils.isDatasetUpdated(this.ds_bsrpDtlsEtc)&&!this.comUtils.isDatasetUpdated(this.ds_cncdntTriper)){
        		//this.gfn_message("comm.데이터.변경.없음")
        		//return false;
        	}
        	// validation 체크
        	if(!this.gfn_checkValidation_NoUpdChk(this.ds_bsrpDtls, this.ds_validation00)) {
        		return;
        	}
        	
        	if(this.cal_bgnDe.value == undefined || this.cal_bgnDe.value == ''){
        		this.gfn_message("comm.항목.선택.요청", "시작일자");
        		return;
        	}
        	if(this.cal_endDe.value == undefined || this.cal_endDe.value == ''){
        		this.gfn_message("comm.항목.선택.요청", "종료일자");
        		return;
        	}
        	if(this.msk_TRVCT_EXPNDTR_BUKIP_CODE.value == undefined || this.msk_TRVCT_EXPNDTR_BUKIP_CODE.value == ''){
        		this.gfn_message("comm.항목.선택.요청", "지출단위");
        		return;
        	}
        	if(this.cmb_bsrpSE.value == undefined || this.cmb_bsrpSE.value == ''){
        		this.gfn_message("comm.항목.선택.요청", "출장구분");
        		return;
        	}
        	if(this.txt_bsrpPurps.value == undefined || this.txt_bsrpPurps.value == ''){
        		this.gfn_message("comm.항목.입력.을", "출장목적");
        		return;
        	}
        	if(this.cmb_coursStrtpnt.value == undefined || this.cmb_coursStrtpnt.value == ''){
        		this.gfn_message("comm.항목.선택.요청", "출발지");
        		return;
        	}
        	if(this.cmb_coursDstn.value == undefined || this.cmb_coursDstn.value == ''){
        		this.gfn_message("comm.항목.선택.요청", "목적지");
        		return;
        	}
        	if(this.edt_coursDstnNm.value == undefined || this.edt_coursDstnNm.value == ''){
        		this.gfn_message("comm.항목.입력.을", "행선지");
        		return;
        	}

        	//운임교통비, 여비 필수
        	if(this.ds_bsrpDtlsCychg.rowcount < 1){
        		this.gfn_message("comm.항목.입력.을", "운임교통비");
        		return;
        	}
        	if(this.ds_bsrpDtlsEtc.rowcount < 1){
        		this.gfn_message("comm.항목.입력.을", "여비");
        		return;
        	}
        	
        	if(!this.gfn_checkValidation_NoUpdChk(this.ds_bsrpDtlsCychg, this.ds_validation)) {
        		return;
        	}
        	if(!this.gfn_checkValidation_NoUpdChk(this.ds_bsrpDtlsEtc, this.ds_validation)) {
        		return;
        	}
        	
        	//취소/재신청 처리 
        	var cancelSe = this.rdo_CANCEL_SE.value;
        	if(cancelSe == '1' || cancelSe == '2' )	{  
        		if (this.ds_bsrpDtls.getColumn(0, "CANCEL_SE") == undefined || this.ds_bsrpDtls.getColumn(0, "CANCEL_SE") == "") { 
        			//신규자료로 다시 생성함  
        			this.ds_bsrpDtls.set_updatecontrol(false);
        			this.ds_bsrpDtls.setRowType(0, Dataset.ROWTYPE_INSERT );
        			this.ds_bsrpDtls.setColumn (0, "SEQ", 	""); 	
        			this.ds_bsrpDtls.setColumn (0, "SANCTN_NO", "");  
        			this.ds_bsrpDtls.setColumn (0, "SANCTN_STS", "");  
        			this.ds_bsrpDtls.setColumn (0, "SANCTN_STTS", "");  
        			this.ds_bsrpDtls.setColumn (0, "DRFT_STS", "");
        			this.ds_bsrpDtls.setColumn (0, "CANCEL_SE", cancelSe); 
        			
        			this.ds_cncdntTriper.set_updatecontrol(false);
        			this.ds_cncdntTriper.setRowType(0, Dataset.ROWTYPE_INSERT );
        			this.ds_cncdntTriper.setColumn (0, "SEQ", 	""); 	
        			
        			this.ds_bsrpDtlsCychg.set_updatecontrol(false);
        			this.ds_bsrpDtlsCychg.setRowType(0, Dataset.ROWTYPE_INSERT );
        			this.ds_bsrpDtlsCychg.setColumn (0, "SEQ", 	""); 	
        			
        			this.ds_bsrpDtlsEtc.set_updatecontrol(false);
        			this.ds_bsrpDtlsEtc.setRowType(0, Dataset.ROWTYPE_INSERT );
        			this.ds_bsrpDtlsEtc.setColumn (0, "SEQ", 	""); 	
        		}
        	}
        	
        	if(this.ds_bsrpDtls.getColumn(0, "GRPNO") == null || this.ds_bsrpDtls.getColumn(0, "GRPNO") == ""){
        		if(this.ds_cncdntTriper.findRow("TGRPN_EMPNO", this.ds_bsrpDtls.getColumn(0, "APPLC_EMPNO")) < 0 ){
        			alert("신청자가 출장자목록에 없을 경우 출장자중 맨위의 사원이 출장 대표가 됩니다.");
        			this.ds_bsrpDtls.setColumn(0, "EMPNO", this.ds_cncdntTriper.getColumn(0,"TGRPN_EMPNO"));
        			this.ds_bsrpDtls.setColumn(0, "DEPT_CODE", this.ds_cncdntTriper.getColumn(0,"TGRPN_DEPT_CODE"));
        			this.ds_bsrpDtls.setColumn(0, "RSPOFC_SE", this.ds_cncdntTriper.getColumn(0,"TGRPN_RSPOFC_SE"));
        		}else{
        			this.ds_bsrpDtls.setColumn(0, "EMPNO", this.ds_bsrpDtls.getColumn(0,"APPLC_EMPNO"));
        			this.ds_bsrpDtls.setColumn(0, "DEPT_CODE", this.ds_bsrpDtls.getColumn(0,"APPLC_DEPT_CODE"));
        			this.ds_bsrpDtls.setColumn(0, "RSPOFC_SE", this.ds_bsrpDtls.getColumn(0,"APPLC_RSPOFC_SE"));
        		}
        	}
        	
        	if(this.gfn_message("confirm.저장.여부"))	{
        	
        		var grpNo;
        		if(this.ds_bsrpDtls.getColumn(0, "GRPNO") != undefined &&  this.ds_bsrpDtls.getColumn(0, "GRPNO") != ""){
        			grpNo = this.ds_bsrpDtls.getColumn(0, "GRPNO");
        		}
        	
        		this.ds_participant.clearData();
        		var nRow;
        		for(var i=0; i < this.ds_cncdntTriper.rowcount; i++){
        			nRow = this.ds_participant.addRow();
        			this.ds_participant.setColumn(nRow, "EMPNO", this.ds_cncdntTriper.getColumn(i,"TGRPN_EMPNO"));
        			this.ds_participant.setColumn(nRow, "SEQ", this.ds_cncdntTriper.getColumn(i,"SEQ"));
        			this.ds_participant.setColumn(nRow, "DEPT_CODE", this.ds_cncdntTriper.getColumn(i,"TGRPN_DEPT_CODE"));
        			this.ds_participant.setColumn(nRow, "RSPOFC_SE", this.ds_cncdntTriper.getColumn(i,"TGRPN_RSPOFC_SE"));
        			this.ds_participant.setColumn(nRow, "GRPNO", grpNo);
        		}

        		this.fn_transaction("saveTbhrmBsrpDtlsCUD");
        	}
        }

        /**********************************************************************
         * CALL TRANSACTION 영역
         **********************************************************************/
        this.fn_transaction = function(strSvcId)
        {
        	switch (strSvcId) {
        		case "selectTbhrmBsrpDtlsR": // 관외출장내역 상세조회
        			var sController   	= "hsco/mis/hrm/HRM070203/tbhrmBsrpDtlsR.do";
        			var sInDatasets   	= "input1=ds_cond00";
        			var sOutDatasets  	= "ds_bsrpDtls=output1 ds_cncdntTriper=output2 ds_bsrpDtlsCychg=output3 ds_bsrpDtlsEtc=output4";
        			break;
        			
        		case "registerInfoR": // 등록자조회(신규)
        			var sController   	= "hsco/mis/hrm/HRM070203/registerInfoR.do";
        			var sInDatasets   	= "input1=ds_cond01";
        			var sOutDatasets  	= "ds_registerInfo=output1";
        			break;
        		case "saveTbhrmBsrpDtlsCUD": // 저장하기
        			var sController   	= "hsco/mis/hrm/HRM070203/saveTbhrmBsrpDtlsCUD.do";
        			var sInDatasets   	= "input1=ds_bsrpDtls:U input2=ds_cncdntTriper:U input3=ds_bsrpDtlsCychg:U input4=ds_bsrpDtlsEtc:U input5=ds_participant";
        			var sOutDatasets  	= "ds_bsrpDtls=output1";
        			break;
        		case "approve": //결재
        			var sController   	= "hsco/mis/hrm/HRM070203/approve.do";
        			var sInDatasets   	= "input1=ds_approve";
        			var sOutDatasets  	= "ds_approve=output1";
        			break;
        		case "registerInfoR2": // 출장자 조회
        			var sController   	= "hsco/mis/hrm/HRM070203/registerInfoR.do";
        			var sInDatasets   	= "input1=ds_cond01";
        			var sOutDatasets  	= "ds_registerInfo2=output1";
        			break;
        	}

        	Ex.core.tran(this, strSvcId, sController, sInDatasets, sOutDatasets); 
        }

        /**********************************************************************
         * Transaction Callback 영역
         ***********************************************************************/
        this.fn_callBack = function (strSvcId,nErrorCode,strErrorMsg)
        {	trace(strSvcId);
        	// 오류 및 성공 메시지를 화면에 보여준다.
        	if(nErrorCode != 0) {
        	  this.gfn_callback_message(strSvcId, nErrorCode, strErrorMsg);
        	}
        	if (nErrorCode != 0){
        	} else {
        		switch (strSvcId) {	
         			case "selectTbhrmBsrpDtlsR": // 상세조회
        				this.fn_cudSetup();
         				
        				if (this.ds_bsrpDtls.getColumn(0, "CANCEL_SE") == '1' ||
        					this.ds_bsrpDtls.getColumn(0, "CANCEL_SE") == '2' ) {
        					var cancelSe = this.ds_bsrpDtls.getColumn(0, "CANCEL_SE");
        					this.rdo_CANCEL_SE.set_index(cancelSe);
        					this.rdo_CANCEL_SE.set_readonly(true);
        				}    
         				break;	
         				
          			case "registerInfoR": // 신규

        				var nRow = this.ds_bsrpDtls.addRow();
        				this.ds_bsrpDtls.setColumn(nRow,"EMPNO",this.ds_registerInfo.getColumn(0,"EMPNO"));
        				this.ds_bsrpDtls.setColumn(nRow,"EMPNM",this.ds_registerInfo.getColumn(0,"EMPNM"));
        				this.ds_bsrpDtls.setColumn(nRow,"DEPT_CODE",this.ds_registerInfo.getColumn(0,"DEPT_CODE"));
        				this.ds_bsrpDtls.setColumn(nRow,"DEPT_NM",this.ds_registerInfo.getColumn(0,"DEPT_NM"));
        				this.ds_bsrpDtls.setColumn(nRow,"RSPOFC_NM",this.ds_registerInfo.getColumn(0,"RSPOFC_NM"));
        				this.ds_bsrpDtls.setColumn(nRow,"RSPOFC_SE",this.ds_registerInfo.getColumn(0,"RSPOFC_SE"));
        				
        				this.ds_bsrpDtls.setColumn(nRow,"APPLC_EMPNO",this.ds_registerInfo.getColumn(0,"EMPNO"));
        				this.ds_bsrpDtls.setColumn(nRow,"APPLC_EMPNM",this.ds_registerInfo.getColumn(0,"EMPNM"));
        				this.ds_bsrpDtls.setColumn(nRow,"APPLC_DEPT_CODE",this.ds_registerInfo.getColumn(0,"DEPT_CODE"));
        				this.ds_bsrpDtls.setColumn(nRow,"APPLC_DEPT_NM",this.ds_registerInfo.getColumn(0,"DEPT_NM"));
        				this.ds_bsrpDtls.setColumn(nRow,"APPLC_RSPOFC_NM",this.ds_registerInfo.getColumn(0,"RSPOFC_NM"));
        				this.ds_bsrpDtls.setColumn(nRow,"APPLC_RSPOFC_SE",this.ds_registerInfo.getColumn(0,"RSPOFC_SE"));
        				this.ds_bsrpDtls.setColumn(nRow,"BSRP_SE",'0');
        				//this.ds_bsrpDtls.setColumn(nRow,"SANCTN_KND",'0');
        				
        				if(this.parent.arg_1 != undefined && this.parent.arg_1 != ''){
        					this.cncdntTriperOneDefaultRow();
        					this.fn_callbackAfter();
        				}

         				break;	
         			case "registerInfoR2": // 신규
        				this.ds_cncdntTriper.setColumn(this.ds_cncdntTriper.rowposition,"TGRPN_EMPNO",this.ds_registerInfo2.getColumn(0,"EMPNO"));
        				this.ds_cncdntTriper.setColumn(this.ds_cncdntTriper.rowposition,"TGRPN_EMPNM",this.ds_registerInfo2.getColumn(0,"EMPNM"));
        				this.ds_cncdntTriper.setColumn(this.ds_cncdntTriper.rowposition,"TGRPN_DEPT_CODE",this.ds_registerInfo2.getColumn(0,"DEPT_CODE"));
        				this.ds_cncdntTriper.setColumn(this.ds_cncdntTriper.rowposition,"TGRPN_DEPT_NM",this.ds_registerInfo2.getColumn(0,"DEPT_NM"));
        				this.ds_cncdntTriper.setColumn(this.ds_cncdntTriper.rowposition,"TGRPN_RSPOFC_NM",this.ds_registerInfo2.getColumn(0,"RSPOFC_NM"));
        				this.ds_cncdntTriper.setColumn(this.ds_cncdntTriper.rowposition,"TGRPN_RSPOFC_SE",this.ds_registerInfo2.getColumn(0,"RSPOFC_SE"));
         				break;	
         				
        			case "saveTbhrmBsrpDtlsCUD": // 저장하기
        				this.gfn_message("success.처리.성공", null, null, null, this.fn_popupCallback);
        				break;
        			case "approve": // 결재
        				var brow = this.ds_approve.getColumn(0,"O_URL");
        				system.execBrowser(brow); 
        				break;
        		}
        	}
        }

        /*
        * 함수명  	: fn_popupCallback
        * 설명 		: 공통메시지 Callback 처리
        * params  		: 
        * return Type 	: None
        * 사용법		: 
        */
        this.fn_popupCallback = function() {
        	var empNo = this.ds_bsrpDtls.getColumn(0, "EMPNO");
        	var seq   = this.ds_bsrpDtls.getColumn(0, "SEQ");
        	this.ds_cond00.clearData();
        	var nRow = this.ds_cond00.addRow();
        	this.ds_cond00.setColumn(0, "EMPNO", empNo);
        	this.ds_cond00.setColumn(0, "SEQ"  , seq);
        	this.fn_search();
        }

        /***********************************************************************
        * Transaction 영역 끝
        ************************************************************************/
        /***********************************************************************
         * non-Transaction 관련 컴포넌트 이벤트 처리 함수
         *********************************** ************************************/
        /*
         * 함수명  	: fn_rowInsert
         * 설명 		: 행추가버튼 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_rowInsert();
         */
        this.fn_rowInsert = function(obj,e)
        {
        	if(obj.name=="btn_RowInsert0")//출장자탭
        	{
        		var nRow = this.ds_cncdntTriper.addRow();
        		this.ds_cncdntTriper.setColumn(nRow,"EMPNO",this.ds_bsrpDtls.getColumn(0,"EMPNO"));
        		this.ds_cncdntTriper.setColumn(nRow,"SEQ",this.ds_bsrpDtls.getColumn(0,"SEQ"));
        	}
        	else if(obj.name=="btn_RowInsert1")//운임교통비
        	{
        		var nRow = this.ds_bsrpDtlsCychg.addRow();
        		this.ds_bsrpDtlsCychg.setColumn(nRow,"EMPNO",this.ds_bsrpDtls.getColumn(0,"EMPNO"));
        		this.ds_bsrpDtlsCychg.setColumn(nRow,"SEQ",this.ds_bsrpDtls.getColumn(0,"SEQ"));
        		this.ds_bsrpDtlsCychg.setColumn(nRow,"NMPR",this.ds_cncdntTriper.getRowCount());
        		this.ds_bsrpDtlsCychg.setColumn(nRow,"CHRGE_EXPS",0);
        	}
        	else if(obj.name=="btn_RowInsert2")//여비
        	{
        		var nRow = this.ds_bsrpDtlsEtc.addRow();
        		this.ds_bsrpDtlsEtc.setColumn(nRow,"EMPNO",this.ds_bsrpDtls.getColumn(0,"EMPNO"));
        		this.ds_bsrpDtlsEtc.setColumn(nRow,"SEQ",this.ds_bsrpDtls.getColumn(0,"SEQ"));
        		this.ds_bsrpDtlsEtc.setColumn(nRow,"NMPR",this.ds_cncdntTriper.getRowCount());
        		this.ds_bsrpDtlsEtc.setColumn(nRow,"DAYCNT",1);
        		this.ds_bsrpDtlsEtc.setColumn(nRow,"ETC_AMT",0);
        		this.ds_bsrpDtlsEtc.setColumn(nRow,"AMOUNT",0);
        	}
        }

        /*
         * 함수명  	: fn_rowDelete
         * 설명 		: 삭제버튼 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_rowDelete();
         */
        this.fn_rowDelete = function(obj,e)
        {
        	if(obj.name=="btn_RowDelete0")//출장자  
        	{
        		this.gfn_delMultiRow(this.ds_cncdntTriper);
        	}
        	else if(obj.name=="btn_RowDelete1")//운임교통비
        	{
        		this.gfn_delMultiRow(this.ds_bsrpDtlsCychg);
        	}
        	else if(obj.name=="btn_RowDelete2")//여비
        	{
        		this.gfn_delMultiRow(this.ds_bsrpDtlsEtc);
        	}
        }

        /*
         * 함수명  	: fn_rowCancel
         * 설명 		: 행취소버튼 처리              
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_rowCancel();
         */
        this.fn_rowCancel= function(obj,e)
        {
        	if(obj.name=="btn_RowCancel0")//출장자
        	{
        		if ( this.gfn_message("confirm.취소여부") ) {
        			this.ds_cncdntTriper.reset();
        			this.ds_cncdntTriper.applyChange();
        			return;
        		}
        	}
        	else if(obj.name=="btn_RowCancel1")//운임교통비
        	{
        		if ( this.gfn_message("confirm.취소여부")) {
        			this.ds_bsrpDtlsCychg.reset();
        			this.ds_bsrpDtlsCychg.applyChange();
        			return;
        		}
        	}
        	else if(obj.name=="btn_RowCancel2")//여비
        	{
        		if (this.gfn_message("confirm.취소여부") ) {
        			this.ds_bsrpDtlsEtc.reset();
        			this.ds_bsrpDtlsEtc.applyChange();
        			return;
        		}
        	}
        }

        /*
         * 함수명  	: btn_Close_onclick
         * 설명 		: 닫기 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_Close_onclick();
         */
        this.btn_Close_onclick = function(obj,e)
        {
        	this.close();
        }

        /*
         * 함수명  	: grd_bsrpEmp_onexpandup
         * 설명 		: 출장자 사원검색팝업 호출
         * params  		: None
         * return Type 	: None
         * 사용법		: this.grd_bsrpEmp_onexpandup();
         */
        this.grd_bsrpEmp_onexpandup = function(obj,e)
        {
        	var nLeft = system.clientToScreenX(this, 10);
        	var nTop  = system.clientToScreenY(this, 10);     
        	var newChild = new ChildFrame;
            newChild.init("Popup2", "absolute", nLeft, nTop, 400, 400, null, null , "com::empno_P01.xfdl");
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");  
        	//newChild.set_showtitlebar(false);
            newChild.showModal(this.getOwnerFrame(), {EMPNO:'',EMPNM:''} , this , "fn_callback1");
        }

        /*
         * 함수명  	: fn_callback1
         * 설명 		: 출장자 사원검색팝업 콜백
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_callback1();
         */
        this.fn_callback1 = function(sPopupId,sReturn)
        {
        	if(sPopupId == "Popup2")
        	{	
        		var dsEmpno = new Dataset();
        		nRowCnt = dsEmpno.loadXML(sReturn);
                if(nRowCnt){
        			var empno = dsEmpno.getColumn(0, "EMPNO");
        			var empnm = dsEmpno.getColumn(0, "EMPNM");
        			var deptnm = dsEmpno.getColumn(0, "DEPT_NM");
        			var clsfSe = dsEmpno.getColumn(0, "HR_CLSF_SE");
        			var clsfNm = dsEmpno.getColumn(0, "HR_CLSF_NM");
        			var jssfcNm = dsEmpno.getColumn(0, "JSSFC_NM");
        			this.ds_cncdntTriper.setColumn(this.ds_cncdntTriper.rowposition,"TGRPN_EMPNO",empno);
        			this.ds_cncdntTriper.setColumn(this.ds_cncdntTriper.rowposition,"TGRPN_EMPNM",empnm);
        			this.ds_cncdntTriper.setColumn(this.ds_cncdntTriper.rowposition,"TGRPN_DEPT_NM",deptnm);
        			this.ds_cncdntTriper.setColumn(this.ds_cncdntTriper.rowposition,"TGRPN_CLSF_SE",clsfSe);
        			this.ds_cncdntTriper.setColumn(this.ds_cncdntTriper.rowposition,"TGRPN_CLSF_NM",jssfcNm+''+clsfNm);
        			
        			this.ds_cond01.clearData();
        			var nRow = this.ds_cond01.addRow();
        			this.ds_cond01.setColumn(nRow,"EMPNO",empno);
        			this.fn_transaction("registerInfoR2");
                }
                
                //사번 낮은 순으로 SORT
        		this.sortCncdntTriper();
        	}
        }

        /*
         * 함수명  	: grd_trnsportExps_onexpandup
         * 설명 		: 관외출장신청 등록[운임교통비 팝업] 호출
         * params  		: None
         * return Type 	: None
         * 사용법		: this.grd_trnsportExps_onexpandup();
         */
        this.grd_trnsportExps_onexpandup = function(obj,e)
        {
            var parm = {
        		arg_0 : this,  //==> 필수, 팝업을 호출하는 form을 참조할 수 있도록 팝업에 Argument로 넘겨준다. (반드시 기술해야 함.)
        		arg_1 : this.ds_bsrpDtlsCychg.getColumn(this.ds_bsrpDtlsCychg.rowposition,"TRNSPORT_SE"),
        		arg_2 : this.ds_bsrpDtlsCychg.getColumn(this.ds_bsrpDtlsCychg.rowposition,"GRAD_SE"),
        		arg_3 : null
        	};
        	this.gfn_popup("Popup3", 950, 500, "", parm, "mis_hrm::HRM070203_P2.xfdl", "fn_callback3", true);
        }

        /*
         * 함수명  	: grd_trnsportExps_onexpandup
         * 설명 		: 관외출장신청 등록[여비 팝업] 호출
         * params  		: None
         * return Type 	: None
         * 사용법		: this.grd_trnsportExps_onexpandup();
         */
        this.grd_trvct_onexpandup = function(obj,e)
        {
        }

        /*
         * 함수명  	: fn_callback3
         * 설명 		: 팝업 콜백 
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_callback3();
         */
        this.fn_callback3 = function(sPopupId,sReturn)
        {	
        	if(sPopupId == "Popup3")
        	{
        		var dsCychg = new Dataset();
        		nRowCnt = dsCychg.loadXML(sReturn);
                if(nRowCnt){
        			this.ds_bsrpDtlsCychg.setColumn(this.ds_bsrpDtlsCychg.rowposition,"CHRGE_EXPS",dsCychg.getColumn(0, "CHRGE"));
        			this.ds_bsrpDtlsCychg.setColumn(this.ds_bsrpDtlsCychg.rowposition,"TRNSPORT_SE",dsCychg.getColumn(0, "TRNSPORT_SE"));
        			this.ds_bsrpDtlsCychg.setColumn(this.ds_bsrpDtlsCychg.rowposition,"GRAD_SE",dsCychg.getColumn(0, "GRAD_SE"));	
                }
        	}
        	
        	// 여비명세서는 직급별로 구분이 되어있지 않으므로, 현재의 개념을 사용하지 않음
        // 	if(sPopupId == "Popup4")
        // 	{
        // 		var dsEtc = new Dataset();
        // 		nRowCnt = dsEtc.loadXML(sReturn);
        //         if(nRowCnt){
        // 			this.ds_bsrpDtlsEtc.setColumn(this.ds_bsrpDtlsEtc.rowposition,"AMOUNT",dsEtc.getColumn(0, "AMOUNT"));
        // 			this.ds_bsrpDtlsEtc.setColumn(this.ds_bsrpDtlsEtc.rowposition,"IEM_SE",dsEtc.getColumn(0, "IEM_SE"));
        // 			this.ds_bsrpDtlsEtc.setColumn(this.ds_bsrpDtlsEtc.rowposition,"CLSF_SE",dsEtc.getColumn(0, "CLSF_SE"));	
        // 			this.ds_bsrpDtlsEtc.setColumn(this.ds_bsrpDtlsEtc.rowposition,"UNIT_SE",dsEtc.getColumn(0, "UNIT_SE"));	
        //         }
        // 	}
        }

        /*
         * 함수명  	: ds_bsrpDtlsCychg_oncolumnchanged
         * 설명 		: 교통비 금액계산 
         * params  		: None
         * return Type 	: None
         * 사용법		: this.ds_bsrpDtlsCychg_oncolumnchanged();
         */
        this.ds_bsrpDtlsCychg_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid =="CHRGE_EXPS" || e.columnid =="NMPR"){
        		var exps = this.ds_bsrpDtlsCychg.getColumn(e.row,"CHRGE_EXPS");
        		var nmpr = this.ds_bsrpDtlsCychg.getColumn(e.row,"NMPR");
        		this.ds_bsrpDtlsCychg.setColumn(e.row,"TRNSPORT_AMT",exps*nmpr);
        	}
        	
        	// 출장비 합계
        	this.ds_bsrpDtls.setColumn(0, "BSRP_TOT_AMOUNT", this.fn_bsrpTotAmount());
        }

        /*
         * 함수명  	: ds_bsrpDtlsCychg_onrowsetchanged
         * 설명 		: 교통비 금액계산 
         * params  		: None
         * return Type 	: None
         * 사용법		: this.ds_bsrpDtlsCychg_onrowsetchanged();
         */
        this.ds_bsrpDtlsCychg_onrowsetchanged = function(obj,e)
        {
        	// 출장비 합계
        	this.ds_bsrpDtls.setColumn(0, "BSRP_TOT_AMOUNT", this.fn_bsrpTotAmount());
        }

        
        /*
         * 함수명  	: ds_bsrpDtlsEtc_cancolumnchange
         * 설명 		: 여비 데이터셋 변경 전 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.ds_bsrpDtlsEtc_cancolumnchange();
         */
        this.ds_bsrpDtlsEtc_cancolumnchange = function(obj,e)
        {
        	// 여비구분 변경 전(중복되서는 안됨 - 여비명세서와 연계목적)
        	if(e.columnid == "IEM_SE") {
        		var findRow1 = obj.findRowExpr(e.columnid + "=='" + e.newvalue + "'", 0,       e.row       );
        		var findRow2 = obj.findRowExpr(e.columnid + "=='" + e.newvalue + "'", e.row+1, obj.rowcount);
        		if(findRow1 > -1 || findRow2 > -1) {
        			this.gfn_message("info.항목.중복","여비구분")
        			obj.set_updatecontrol(false);
        			obj.setColumn(e.row, e.columnid, e.oldvalue);
        			obj.set_updatecontrol(true);
        			return false;
        		}
        	}
        }

        
        /*
         * 함수명  	: ds_bsrpDtlsEtc_oncolumnchanged
         * 설명 		: 여비 데이터셋 변경 후 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.ds_bsrpDtlsEtc_oncolumnchanged();
         */
        this.ds_bsrpDtlsEtc_oncolumnchanged = function(obj,e)
        {
        	// 실비, 인원, 일수 변경 후
        	if(e.columnid =="AMOUNT" || e.columnid =="NMPR" || e.columnid =="DAYCNT"){
        		var exps = this.ds_bsrpDtlsEtc.getColumn(e.row,"AMOUNT");
        		var nmpr = this.ds_bsrpDtlsEtc.getColumn(e.row,"NMPR");
        		var daycnt = this.ds_bsrpDtlsEtc.getColumn(e.row,"DAYCNT");
        		this.ds_bsrpDtlsEtc.setColumn(e.row,"ETC_AMT",exps*nmpr*daycnt);
        	}
        	
        	// 출장비 합계
        	this.ds_bsrpDtls.setColumn(0, "BSRP_TOT_AMOUNT", this.fn_bsrpTotAmount());
        }

        /*
         * 함수명  	: ds_bsrpDtlsEtc_onrowsetchanged
         * 설명 		: 여비 금액계산 
         * params  		: None
         * return Type 	: None
         * 사용법		: this.ds_bsrpDtlsEtc_onrowsetchanged();
         */
        this.ds_bsrpDtlsEtc_onrowsetchanged = function(obj,e)
        {
        	// 출장비 합계
        	this.ds_bsrpDtls.setColumn(0, "BSRP_TOT_AMOUNT", this.fn_bsrpTotAmount());
        }

        /*
         * 함수명  	: ds_bsrpDtls_oncolumnchanged
         * 설명 		: 출장신청 데이터셋 변경 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.ds_bsrpDtls_oncolumnchanged();
         */
        this.ds_bsrpDtls_oncolumnchanged = function(obj,e)
        {
        	switch(e.columnid) {
        		case "BGNDE":
        			var bgnDe      = e.newvalue;
        			var endDe      = obj.getColumn(e.row, "ENDDE");
        			var bsrpDaycnt = this.dateUtils.between(bgnDe,endDe);
        			obj.setColumn(e.row, "BSRP_DAYCNT", bsrpDaycnt);
        			break;
        		case "ENDDE":
        			var bgnDe      = obj.getColumn(e.row, "BGNDE");
        			var endDe      = e.newvalue;
        			var bsrpDaycnt = this.dateUtils.between(bgnDe,endDe);
        			obj.setColumn(e.row, "BSRP_DAYCNT", bsrpDaycnt);
        			break;
        		case "TRVCT_ETC":	// 여비기타
        			// 출장비 합계
        			this.ds_bsrpDtls.setColumn(0, "BSRP_TOT_AMOUNT", this.fn_bsrpTotAmount());
        			break;
        		default:
        			break;
        	}
        }

        
        /*
         * 함수명  	: ds_cncdntTriper_onrowposchanged
         * 설명 		: 출장자 데이터셋 행 변경 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.ds_cncdntTriper_onrowposchanged();
         */
        this.ds_cncdntTriper_onrowposchanged = function(obj,e)
        {
        	// 출장자의 인원수로 운임교통비 및 여비의 인원수 자동계산
        	if(this.comUtils.isDatasetUpdated(obj)) {
        		var rowCnt = obj.getRowCount();
        		for(var cRow = 0; cRow < this.ds_bsrpDtlsCychg.getRowCount(); cRow++) {
        			this.ds_bsrpDtlsCychg.setColumn(cRow, "NMPR", rowCnt);	// 운임교통비 Dataset
        		}
        		
        		for(eRow = 0; eRow < this.ds_bsrpDtlsEtc.getRowCount(); eRow++) {
        			this.ds_bsrpDtlsEtc.setColumn(eRow, "NMPR", rowCnt);	// 여비 Dataset
        		}
        	}
        }

        
        /*
         * 함수명  	: btn_bdg_onclick
         * 설명 		: 예산 팝업
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_bdg_onclick();
         */
        this.btn_bdg_onclick = function(obj,e)
        {
        	// 예산계정과목 팝업 호출
        	var parm = {
        		  arg_0      : this
        		 ,searchDs   : this.ds_cond02.saveXML()       // 검색조건(YEAR, BSNS_SE, BALC_SE, DEPT_CODE 컬럼만 이용)
        		 ,strObj     : "" // 수정불가능 처리할 오브젝트 명(ex : "edt_YEAR,cbo_BSNS_SE,rdo_BALC_SE,div_srchDept")
        		 ,year_S     : null            // 예산년도(srchDs보다 우선순위를 가짐)
        		 ,bsnsSe_S   : null            // 사업구분(srchDs보다 우선순위를 가짐)
        		 ,balcSe_S   : null            // 수지구분(srchDs보다 우선순위를 가짐)
        		 ,deptCode_S : null            // 부서코드(srchDs보다 우선순위를 가짐)
        		 ,acntPopup  : false            // (true : 예산계정코드선택팝업, false : 지출단위선택팝업)
        	};
        	this.gfn_popup("mnthngCptalList", 900, 635, "예산선택팝업", parm, "com::bdgAcntPop.xfdl", "fn_PopupCallback");
        }

        /*
         * 함수명  	: fn_PopupCallback
         * 설명 		: 팝업 콜백함수
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_PopupCallback();
         */
        this.fn_PopupCallback = function(sPopupId,sReturn)
        {
            var dsRtn = new Dataset();
            
            if(sPopupId == "mnthngCptalList") {
        		nRowCnt = dsRtn.loadXML(sReturn);
        		if(nRowCnt){
        			var year          = dsRtn.getColumn(0, "YEAR");
        			var bsnsSe        = dsRtn.getColumn(0, "BSNS_SE");
        			var balcSe        = dsRtn.getColumn(0, "BALC_SE");
        			var acntCode      = dsRtn.getColumn(0, "BUDGET_ACNT_CODE");
        			var acntNm        = dsRtn.getColumn(0, "BUDGET_ACNT_NM");
        			var expndtrUnitCd = dsRtn.getColumn(0, "EXPNDTR_UNIT_CODE");
        			var expndtrUnitNm = dsRtn.getColumn(0, "EXPNDTR_UNIT_NM");		
        			var budgetCnrlAt  = dsRtn.getColumn(0, "BUDGET_CNRL_AT");	// 예산통제여부
        			var nRow = this.ds_bsrpDtls.rowposition;
        			
        			this.ds_bsrpDtls.setColumn(nRow, "TRVCT_ACNT_SE_YEAR",      year  );
        			this.ds_bsrpDtls.setColumn(nRow, "TRVCT_BSNS_SE",   bsnsSe  );
        			this.ds_bsrpDtls.setColumn(nRow, "TRVCT_BALC_SE",   balcSe  );
        			this.ds_bsrpDtls.setColumn(nRow, "TRVCT_ACNT_SE", bsnsSe+""+balcSe  );
        			this.ds_bsrpDtls.setColumn(nRow, "TRVCT_EXPNDTR_SBJECT",      acntCode  );
        			this.ds_bsrpDtls.setColumn(nRow, "TRVCT_EXPNDTR_SBJECT_NM",   acntNm    );	
        			this.ds_bsrpDtls.setColumn(nRow, "TRVCT_EXPNDTR_BUKIP_CODE",     expndtrUnitCd  );
        			this.ds_bsrpDtls.setColumn(nRow, "TRVCT_EXPNDTR_BUKIP_CODE_NM",      expndtrUnitNm  );
        			this.ds_bsrpDtls.setColumn(nRow, "BUDGET_CNRL_AT",      budgetCnrlAt  );
        		}
        	}
            
        	if(sPopupId == "expDsnPopup") {
        		if(sReturn == "I") {	// 결의서를 신규등록한경우 출장정보 재조회
        			this.fn_transaction("selectTbhrmBsrpDtlsR");
        		}
        	}
        }

        this.btn_approval_onclick = function(obj,e)
        {
        	// 전자결재 상태 체크 2016.7
        	// 기안상태 COM022 (0:기안전 1:기안 9:기안오류)
        	// 결재상태 COM023 (1: 진행 2:보류 4:대기 8:협조대기 32:삭제 256:완료 512:반송 4096:취소 1024:참조 NUL:상신전 DUP:결재중복)
        	// 기안전인것 : 재상신 및 수정/삭제
        	// 결재상태가 상신전 외는 신규로 다시 진행.
        	var sanctnKnd = this.ds_bsrpDtls.getColumn(this.ds_bsrpDtls.rowposition, "SANCTN_STS");
        	var cancelSe = this.rdo_CANCEL_SE.value;
        	
        	if(cancelSe  == '1'){
        		sanctnKnd = undefined;
        	}
        	
        	switch (sanctnKnd) {
        		case "1": case "2": case "4": case "8": case "1024": case "DUP":
        		this.gfn_message("comm.결재.진행");
        		return false;
        		
        		case "32": case "256": case "512": case "4096": 
        		this.gfn_message("comm.결재.완료");
        		return false;
        		
        		default:
        	}
        	
        	if(Ex.util.isUpdated(this.ds_bsrpDtls)){
        		this.gfn_message("info.처리불가","수정된 내용을 저장 후 진행해 주시기바랍니다."); 
        		return false;
        	}
        	
        	var filds = new Array(43);
        	
        	for(var fRow = 0; fRow < this.ds_cncdntTriper.rowcount; fRow++) {
        		var deptNm = this.ds_cncdntTriper.getColumn(fRow, "TGRPN_DEPT_NM");	// 소속
        		var clsfNm = this.ds_cncdntTriper.getColumn(fRow, "TGRPN_CLSF_NM");	// 직급명(직종+직급)
        		var empNm  = this.ds_cncdntTriper.getColumn(fRow, "TGRPN_EMPNM");	// 성명
        		var empNo  = this.ds_cncdntTriper.getColumn(fRow, "TGRPN_EMPNO");	// 사번
        		
        		filds[(fRow*4)]   = deptNm;
        		filds[(fRow*4+1)] = clsfNm;
        		filds[(fRow*4+2)] = empNm;
        		filds[(fRow*4+3)] = empNo;
        	}
        	
        	var nRow = this.ds_bsrpDtls.rowposition;
        	var bsrpPurps = this.ds_bsrpDtls.getColumn(nRow, "BSRP_PURPS");							// 목적
        	var bgnDe = this.ds_bsrpDtls.getColumn(nRow, "BGNDE");									// 시작일자
        	var endDe = this.ds_bsrpDtls.getColumn(nRow, "ENDDE");									// 종료일자
        	
        	var coursDstnNm = this.edt_coursDstnNm.text;											// 출장지
        	var coursStrtpnt = '출발지 : ' + this.cmb_coursStrtpnt.text;							// 출발지
        	var coursDstn = '\r\n목적지 : ' + this.cmb_coursDstn.text;								// 목적지
        	var coursVialoc = '\r\n경유지 : ' + this.edt_coursVialoc.text == undefined ? '' : this.edt_coursVialoc.text;							// 경유지 ==> 이동사항
        	
        	var jangNm = this.ds_bsrpDtls.getColumn(nRow, "JANG_NM");								// 수익적지출
        	var gwanNm = this.ds_bsrpDtls.getColumn(nRow, "GWAN_NM");								// 사업비용
        	var hangNm = this.ds_bsrpDtls.getColumn(nRow, "HANG_NM");								// 영업외비용
        	var sehangNm = this.ds_bsrpDtls.getColumn(nRow, "SEHANG_NM");							// 경비
        	var mokNm = this.ds_bsrpDtls.getColumn(nRow, "MOK_NM");									// 출장
        	var semokNm = this.ds_bsrpDtls.getColumn(nRow, "SEMOK_NM");								// 코드목출장
        	var bukipNm = this.ds_bsrpDtls.getColumn(nRow, "TRVCT_EXPNDTR_BUKIP_CODE_NM");			// 코드부기출장
        	
        	var etcAmtSm = this.ds_bsrpDtlsEtc.getSum("ETC_AMT");									// 여비합
        	var trvctEtc = this.ds_bsrpDtls.getColumn(nRow, "TRVCT_ETC");							// 여비기타 ==> 계산불
        	// 정산불
        	
        	bgnDe = bgnDe.substr(0, 4) + '-' + bgnDe.substr(4, 2) + '-' + bgnDe.substr(6, 2);
        	endDe = endDe.substr(0, 4) + '-' + endDe.substr(4, 2) + '-' + endDe.substr(6, 2);
        	
        	filds[28] = bsrpPurps;
        	filds[29] = bgnDe;
        	filds[30] = endDe;
        	filds[31] = coursDstnNm;
        	filds[32] = coursStrtpnt + coursDstn + coursVialoc;
        	filds[33] = jangNm;
        	filds[34] = gwanNm;
        	filds[35] = hangNm;
        	filds[36] = sehangNm;
        	filds[37] = mokNm;
        	filds[38] = semokNm;
        	filds[39] = bukipNm;
        	filds[40] = /*this.comUtils.formatComma(etcAmtSm + trvctEtc)*/'';
        	filds[41] = /*this.comUtils.formatComma(etcAmtSm + trvctEtc)*/'';
        	
        	var dataValue = filds.join("|");
        	var dataTitle = "출장명령서-관외";
        	var title     = "출장명령서-관외";
        	
        	if (cancelSe  == '1') {
        		dataTitle = dataTitle + '(취소)';
        		title     = title + '(취소)';
        	}
        	
        	
        	this.ds_approve.clearData();	
        	this.ds_approve.addRow();
        	
        	//2016.7 전자결재
        	var sanctn_no = this.ds_bsrpDtls.getColumn(this.ds_bsrpDtls.rowposition, "SANCTN_NO") ;
        	this.ds_approve.setColumn(0, "SANCTN_NO", sanctn_no);
        	this.ds_approve.setColumn(0, "CANCEL_SE", 	cancelSe); //@@@@
        	
        	this.ds_approve.setColumn(0, "TITLE",      title                );
        	this.ds_approve.setColumn(0, "DATA_TITLE", dataTitle            );
        	this.ds_approve.setColumn(0, "DATA_VALUE", dataValue            );
        	this.ds_approve.setColumn(0, "DEPT_CD",    this.ds_bsrpDtls.getColumn(0,"DEPT_CODE") );
        	this.ds_approve.setColumn(0, "EMP_CD",     this.ds_bsrpDtls.getColumn(0,"EMPNO") );
        	this.ds_approve.setColumn(0, "EMPNO", this.ds_bsrpDtls.getColumn(0,"EMPNO"));
        	this.ds_approve.setColumn(0, "SEQ", this.ds_bsrpDtls.getColumn(0,"SEQ"));
        	this.ds_approve.setColumn(0, "GRPNO", this.ds_bsrpDtls.getColumn(0,"GRPNO"));

        	if(this.gfn_message("comm.행위여부", "결재를 상신"))	{
        		this.fn_transaction("approve");
        	}
        }

        /*
         * 함수명  	: fn_bsrpTotAmount
         * 설명 		: 출장비 합계 계산
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_bsrpTotAmount();
         */
        this.fn_bsrpTotAmount = function() 
        {
        	var amt = 0;
        	amt += this.fn_getNumber(this.ds_bsrpDtlsCychg.getSum("TRNSPORT_AMT"));	// 운임교통비 합계
        	amt += this.fn_getNumber(this.ds_bsrpDtlsEtc.getSum("ETC_AMT"));		// 여비 합계
        	amt += this.fn_getNumber(this.ds_bsrpDtls.getColumn(0, "TRVCT_ETC"));	// 여비 기타
        	return amt;
        }

        /*
         * 함수명  	: fn_expDsn
         * 설명 		: 여비지출결의서 팝업
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_expDsn();
         */
        this.fn_expDsn = function(obj,e)
        {
        	var fRow = -1;
        	var day = this.gfn_today();	// 결의일자
        	var _year = day.substring(0,4);	// 회계년
        	
        	// [결의마스터]
        	this.ds_expDsnMastr.clearData();
        	this.ds_expDsnMastr.addRow();
        	this.ds_expDsnMastr.setColumn(0, "DECSN_YEAR"		, _year);			// 회계년월
        	this.ds_expDsnMastr.setColumn(0, "ANACT_KND"		, "01");														// 결의서구분(01:여비지출결의서)
        	this.ds_expDsnMastr.setColumn(0, "DEPT_CODE"		, this.ds_bsrpDtls.getColumn(0, "TRVCT_DEPT_CODE"));					// 부서코드
        	this.ds_expDsnMastr.setColumn(0, "DEPT_NM"			, this.ds_bsrpDtls.getColumn(0, "TRVCT_DEPT_NM"));					// 부서명
        	this.ds_expDsnMastr.setColumn(0, "BUDGET_YEAR"		, this.ds_bsrpDtls.getColumn(0, "TRVCT_ACNT_SE_YEAR"));			// 예산년도
        	this.ds_expDsnMastr.setColumn(0, "BSNS_SE"			, this.ds_bsrpDtls.getColumn(0, "TRVCT_BSNS_SE"));				// 사업구분
        	this.ds_expDsnMastr.setColumn(0, "BALC_SE"			, this.ds_bsrpDtls.getColumn(0, "TRVCT_BALC_SE"));				// 수지구분(2:지출 고정)
        	this.ds_expDsnMastr.setColumn(0, "BUDGET_ACNT_CODE"	, this.ds_bsrpDtls.getColumn(0, "TRVCT_EXPNDTR_SBJECT"));		// 예산계정과목
        	this.ds_expDsnMastr.setColumn(0, "BUDGET_ACNT_NM"	, this.ds_bsrpDtls.getColumn(0, "TRVCT_EXPNDTR_SBJECT_NM"));	// 예산계정과목
        	this.ds_expDsnMastr.setColumn(0, "EXPNDTR_UNIT_CODE", this.ds_bsrpDtls.getColumn(0, "TRVCT_EXPNDTR_BUKIP_CODE"));	// 지출단위코드
        	this.ds_expDsnMastr.setColumn(0, "EXPNDTR_UNIT_NM"	, this.ds_bsrpDtls.getColumn(0, "TRVCT_EXPNDTR_BUKIP_CODE_NM"));// 지출단위명
        	this.ds_expDsnMastr.setColumn(0, "BUDGET_CNRL_AT"	, this.ds_bsrpDtls.getColumn(0, "BUDGET_CNRL_AT")); 			// 예산통제여부
        	
        	this.ds_expDsnMastr.setColumn(0, "BSNS_CODE"	, this.ds_bsrpDtls.getColumn(0, "TRVCT_BSNS_CODE"));		// 세부사업명
        	this.ds_expDsnMastr.setColumn(0, "BSNS_NM"	, this.ds_bsrpDtls.getColumn(0, "TRVCT_BSNS_NM"));		// 세부사업명

        	//this.ds_expDsnMastr.setColumn(0, "CAUSE_ACTION_NO"	, "");		// 원인행위번호
        	this.ds_expDsnMastr.setColumn(0, "ITNC_DE"					, day);													// 발의일자
        	this.ds_expDsnMastr.setColumn(0, "DET_DCSN_DE"				, day);													// 채무확정일자
        	this.ds_expDsnMastr.setColumn(0, "PYMNT_ITNC_DE"			, day);													// 지급발의일자
        	this.ds_expDsnMastr.setColumn(0, "PRMPC_JRNLZPR_RGIST_DE"	, day);													// 원장분개장등기
        	this.ds_expDsnMastr.setColumn(0, "EXPNDTR_BUDGET_CNRL_DE"	, day);													// 지출예산통제
        	this.ds_expDsnMastr.setColumn(0, "CPTAL_EXPNDTR_ACNTBK_DE"	, day);													// 자금지출부등기
        	this.ds_expDsnMastr.setColumn(0, "CAUSE_ACTION_DE", 		  day  );			// 원인행위일자 2016.09.04

        	
        	this.ds_expDsnMastr.setColumn(0, "DECSN_AMOUNT"		, this.ds_bsrpDtls.getColumn(0, "BSRP_TOT_AMOUNT"));			// 결의금액(출장비 합계)
        	this.ds_expDsnMastr.setColumn(0, "FNNC_INSTT_CODE"	, "004");														// 지출은행 (국민은행 초기값 셋팅)
        	this.ds_expDsnMastr.setColumn(0, "ACNUTNO"			, "599701-04-195140");											// 계좌번호
        	this.ds_expDsnMastr.setColumn(0, "SUMRY"			, this.ds_bsrpDtls.getColumn(0, "BSRP_PURPS"));					// 적요(출장목적)
        	
        	// [마스터상세]
        	this.ds_trvctExpDsnMtrDet.clearData();
        	this.ds_trvctExpDsnMtrDet.addRow();
        	this.ds_trvctExpDsnMtrDet.setColumn(0, "EXPECT_DE"			, day);			// 개산일자
        	this.ds_trvctExpDsnMtrDet.setColumn(0, "EXPECT_AMOUNT"		, "0");			// 개산금액
        	this.ds_trvctExpDsnMtrDet.setColumn(0, "EXCCLC_AMOUNT"		, "0");			// 정산금액
        	
        	// [세부내용]
        	this.ds_expDsnDetailTrvct.clearData();
        	for(i = 0; i < this.ds_cncdntTriper.getRowCount(); i++) {
        		this.ds_expDsnDetailTrvct.addRow();
        		this.ds_expDsnDetailTrvct.copyRow(i, this.ds_cncdntTriper, i, "RQEST_MAN_EMPNO=TGRPN_EMPNO,RQEST_MAN=TGRPN_EMPNM,RQEST_CLSF=TGRPN_CLSF_SE,RQEST_DEPT_NM=TGRPN_DEPT_NM,FNNC_INSTT_CODE=FNNC_INSTT_CODE,ACNUTNO=ACNUTNO");
        		//this.ds_expDsnDetailTrvct.setColumn(i, "DECSN_AMOUNT", Math.round(this.ds_bsrpDtls.getColumn(0, "BSRP_TOT_AMOUNT") / this.ds_cncdntTriper.getRowCount()));
        		this.ds_expDsnDetailTrvct.setColumn(i, "DECSN_AMOUNT", Math.round((this.ds_bsrpDtlsCychg.getSum("TRNSPORT_AMT")+this.ds_bsrpDtlsEtc.getSum("ETC_AMT")+this.ds_bsrpDtls.getSum("TRVCT_ETC")) / this.ds_cncdntTriper.getRowCount()));
        		this.ds_expDsnDetailTrvct.setColumn(i, "EXPECT_AMOUNT"	, "0");	// 개산금액
        		this.ds_expDsnDetailTrvct.setColumn(i, "EXCCLC_AMOUNT"	, "0");	// 정산금액
        		this.ds_expDsnDetailTrvct.setColumn(i, "RQEST_DE"		, day);	// 청구일자
        		this.ds_expDsnDetailTrvct.setColumn(i, "RCPT_DE"		, day);	// 영수일자

        	}

        	// [지출결의내용]
        	this.ds_expDsnDtlsTrvct.clearData();
        	for(i = 0; i < this.ds_bsrpDtlsCychg.getRowCount(); i++) {
        		
        		this.ds_expDsnDtlsTrvct.addRow();
        		
        		// 인원, 금액, 합계
        		this.ds_expDsnDtlsTrvct.copyRow(i, this.ds_bsrpDtlsCychg, i, "NMPR=NMPR,CHRGE=CHRGE_EXPS,SM_AMOUNT=TRNSPORT_AMT");
        		
        		// 일수
        		this.ds_expDsnDtlsTrvct.setColumn(i, "DAYCNT", this.ds_bsrpDtls.getColumn(0, "BSRP_DAYCNT"));
        		
        		// 종별
        		fRow = this.ds_hrm244.findRow("CODE", this.ds_bsrpDtlsCychg.getColumn(i, "TRNSPORT_SE"));
        		if(fRow > -1) {
        			this.ds_expDsnDtlsTrvct.setColumn(i, "ASORT", this.ds_hrm244.getColumn(fRow, "CODE_NM"));
        		}
        		
        		// 여행일자
        		this.ds_expDsnDtlsTrvct.setColumn(i, "BSRP_DE", this.ds_bsrpDtls.getColumn(0, "BGNDE"));
        		
        		// 출발지
        		fRow = this.ds_hrm269.findRow("CODE", this.ds_bsrpDtls.getColumn(0, "COURS_STRTPNT"));
        		if(fRow > -1) {
        			this.ds_expDsnDtlsTrvct.setColumn(i, "STRTPNT", this.ds_hrm269.getColumn(fRow, "CODE_NM"));
        		}
        		
        		// 경유지
        		this.ds_expDsnDtlsTrvct.setColumn(i, "VIALOC", this.ds_bsrpDtls.getColumn(0, "COURS_VIALOC"));
        		
        		// 도착지
        		fRow = this.ds_hrm269.findRow("CODE", this.ds_bsrpDtls.getColumn(0, "COURS_DSTN"));
        		if(fRow > -1) {
        			this.ds_expDsnDtlsTrvct.setColumn(i, "ALOC", this.ds_hrm269.getColumn(fRow, "CODE_NM"));
        		}
        	}
        	
        	// [여비명세서]
        	this.ds_expDsnDetTrvDtstmn.clearData();
        	this.ds_expDsnDetTrvDtstmn.addRow();
        	// 철도임 (항공 포함)
        	this.ds_expDsnDetTrvDtstmn.setColumn(0, "RLROAD_CYCHG_2", this.ds_bsrpDtlsCychg.getCaseSum("TRNSPORT_SE == '001'", "TRNSPORT_AMT") + this.ds_bsrpDtlsCychg.getCaseSum("TRNSPORT_SE == '003'", "TRNSPORT_AMT"));
        	// 선임
        	this.ds_expDsnDetTrvDtstmn.setColumn(0, "SHIP_CYCHG_2", this.ds_bsrpDtlsCychg.getCaseSum("TRNSPORT_SE == '002'", "TRNSPORT_AMT"));
        	// 차마임
        	this.ds_expDsnDetTrvDtstmn.setColumn(0, "CAR_CYCHG_2", this.ds_bsrpDtlsCychg.getCaseSum("TRNSPORT_SE == '004'", "TRNSPORT_AMT"));
        	
        	// 식비
        	for(i = 0; i < this.ds_bsrpDtlsEtc.getRowCount(); i++) {
        		switch(this.ds_bsrpDtlsEtc.getColumn(i, "IEM_SE")) {
        			case "001":	// 일비(현지교통비?)
        				this.ds_expDsnDetTrvDtstmn.setColumn(0, "TRNSPORT_NON_1", this.ds_bsrpDtlsEtc.getColumn(i, "AMOUNT"));
        				this.ds_expDsnDetTrvDtstmn.setColumn(0, "ACPLC_TRNSPORT_NON_DAYCNT", this.ds_bsrpDtlsEtc.getColumn(i, "DAYCNT"));
        				break;
        			case "002":	// 숙박비
        				this.ds_expDsnDetTrvDtstmn.setColumn(0, "STAYNG_CHRGE_1", this.ds_bsrpDtlsEtc.getColumn(i, "AMOUNT"));
        				this.ds_expDsnDetTrvDtstmn.setColumn(0, "STAYNG_DAYCNT_UPPT", this.ds_bsrpDtlsEtc.getColumn(i, "DAYCNT"));
        				break;
        			case "003":	// 식비
        				this.ds_expDsnDetTrvDtstmn.setColumn(0, "CGFFD_1", this.ds_bsrpDtlsEtc.getColumn(i, "AMOUNT"));
        				this.ds_expDsnDetTrvDtstmn.setColumn(0, "CGFFD_DAYCNT_UPPT", this.ds_bsrpDtlsEtc.getColumn(i, "DAYCNT"));
        				break;
        			default:
        				break;
        		}
        	}
        	
        	// 기타
        	this.ds_expDsnDetTrvDtstmn.setColumn(0, "ACPLC_TRNSPORT_NON_MIDDL", this.ds_bsrpDtls.getColumn(0, "TRVCT_ETC"));
        	
        	// 지출결의 팝업 호출
        	var decsnYear 		= this.ds_bsrpDtls.getColumn(0, "DECSN_YEAR");
        	var decsnNo			= this.ds_bsrpDtls.getColumn(0, "DECSN_NO");
        	
        	if(this.comUtils.isNull(decsnYear)) {
        		decsnYear = this.ds_bsrpDtls.getColumn(0, "TRVCT_ACNT_SE_YEAR");
        	}

        	var param = {
        		 arg_0      			: this
        		,trgFormId				: "HRM070203"							// 팝업을 호출하는 화면의 ID
        		,anactKnd				: "01"									// 결의서구분
        		,decsnYear				: decsnYear								// 결의년도
        		,decsnNo				: decsnNo								// 결의번호
        		,dsExpDsnMastr			: this.ds_expDsnMastr.saveXML()			// 결의마스터(Dataset)
        		,dsTrvctExpDsnMtrDet 	: this.ds_trvctExpDsnMtrDet.saveXML()	// 결의마스터상세(Dataset)
        		,dsExpDsnDetailTrvct 	: this.ds_expDsnDetailTrvct.saveXML()	// 결의세부(Dataset)
        		,dsExpDsnDtlsTrvct		: this.ds_expDsnDtlsTrvct.saveXML()		// 지출결의내용(Dataset)
        		,dsExpDsnDetTrvDtstmn	: this.ds_expDsnDetTrvDtstmn.saveXML()	// 여비명세서(Dataset)
        		,dsDecsnNo				: this.ds_bsrpDtls.saveXML()			// 키값정보(Dataset)
        	};
        	
        	this.gfn_popup("expDsnPopup", 902, 719, "지출결의", param, "mis_acc::ACC020203_P03.xfdl", "fn_PopupCallback", true);
        }

        
        this.fn_getNumber = function(obj)
        {
        	return isFinite(parseInt(obj)) ? parseInt(obj) : 0;
        }

        
        /*
         * 함수명  	: btn_popup_onclick
         * 설명 		: 출장여비기준 팝업(여비결의를 맞추기 위해서, 직급구분을 제외 / 해당 팝업은 조회목적으로만 사용하도록 용도변경)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_popup_onclick();
         */
        this.btn_popup_onclick = function(obj,e)
        {
        	var parm = {
        		 arg_0 : this  //==> 필수, 팝업을 호출하는 form을 참조할 수 있도록 팝업에 Argument로 넘겨준다. (반드시 기술해야 함.)
        // 		,arg_1 : this.ds_bsrpDtlsEtc.getColumn(this.ds_bsrpDtlsEtc.rowposition,"IEM_SE")
        // 		,arg_2 : this.ds_bsrpDtlsEtc.getColumn(this.ds_bsrpDtlsEtc.rowposition,"CLSF_SE")
        // 		,arg_3 : null
        	};
        	this.gfn_popup("Popup4", 720, 500, "", parm, "mis_hrm::HRM070203_P3.xfdl", "fn_callback3", true);
        }

        this.ds_bsrpDtls_onrowposchanged = function(obj,e)
        {
        	this.fn_setReadonly();
        }

        this.fn_setReadonly = function()
        {	
        	var s_SANCTN_STS = this.ds_bsrpDtls.getColumn(0, "SANCTN_STS");
        	var s_DRFT_STS = this.ds_bsrpDtls.getColumn(0, "DRFT_STS");
        	
        	if( s_SANCTN_STS != "256" ) {
        		this.btn_expDsn.set_enable(false);
        	} else {
        		this.btn_expDsn.set_enable(true);
        	}
        	
        	if( s_DRFT_STS == "1" ) {
        		this.btn_Save.set_enable(false);
        		this.btn_approval.set_enable(false);
        		/*
        		this.cmb_vhcle.set_enable(false);
        		this.cal_useDe.set_readonly(true);this.cal_useDe.set_cssclass('cal_WF_Readonly');
        		this.msk_useTm.set_readonly(true);this.msk_useTm.set_cssclass('msk_WF_Readonly');
        		this.cal_endDe.set_readonly(true);this.cal_endDe.set_cssclass('cal_WF_Readonly');
        		this.msk_endTm.set_readonly(true);this.msk_endTm.set_cssclass('msk_WF_Readonly');
        		this.edt_dstn.set_readonly(true);this.edt_dstn.set_cssclass('edt_WF_Readonly');
        		this.edt_busins.set_readonly(true);this.edt_busins.set_cssclass('edt_WF_Readonly');
        		this.edt_userNm.set_readonly(true);this.edt_userNm.set_cssclass('edt_WF_Readonly');
        		this.edt_drverNm.set_readonly(true);this.edt_drverNm.set_cssclass('edt_WF_Readonly');
        		*/
        	} else {
        		this.btn_Save.set_enable(true);
        		this.btn_approval.set_enable(true);
        		/*
        		this.cmb_vhcle.set_enable(true);
        		this.cal_useDe.set_readonly(false);this.cal_useDe.set_cssclass('cal_WF_Essential');
        		this.msk_useTm.set_readonly(false);this.msk_useTm.set_cssclass('msk_WF_Essential');
        		this.cal_endDe.set_readonly(false);this.cal_endDe.set_cssclass('cal_WF_Essential');
        		this.msk_endTm.set_readonly(false);this.msk_endTm.set_cssclass('msk_WF_Essential');
        		this.edt_dstn.set_readonly(false);this.edt_dstn.set_cssclass('edt_WF_Essential');
        		this.edt_busins.set_readonly(false);this.edt_busins.set_cssclass('edt_WF_Essential');
        		this.edt_userNm.set_readonly(false);this.edt_userNm.set_cssclass('edt_WF_Essential');
        		this.edt_drverNm.set_readonly(false);this.edt_drverNm.set_cssclass('edt_WF_Essential');
        		*/
        		
        		//if(!this.isAuth) {}
        	}
        }

        this.rdo_CANCEL_SE_onitemchanged = function(obj,e)
        {
        	var draftKnd = this.ds_bsrpDtls.getColumn(0, "DRFT_STS");
        	var bEnable = (draftKnd == "1" || draftKnd == "9") ? false : true;

        	if (obj.value == '')  {
        		this.btn_Save.set_enable(bEnable);
        		this.btn_approval.set_enable(bEnable);
        		this.btn_expDsn.set_enable(bEnable);
        	} else {
        		this.btn_Save.set_enable(true);
        		this.btn_approval.set_enable(true);
        		this.btn_expDsn.set_enable(true);
        	}
        }

        /***********************************************************************************
        * 설명	: 대행자 검색팝업 호출
        ***********************************************************************************/
        this.btn_Assets_Popup_onclick = function(obj,e)
        {
        	var parm = {
        		arg_0 : this//,  //==> 필수, 팝업을 호출하는 form을 참조할 수 있도록 팝업에 Argument로 넘겨준다. (반드시 기술해야 함.)
                //deptCd	: this.ds_ovTimeWorkDtls.getColumn(0,"DEPT_CODE") //ADD
        		
        	};
        	
        	this.gfn_popup("empPop", 400, 400, "사원조회팝업", parm, "com::empno_P01.xfdl", "fn__AssetsPopupCallback", true);
        }

        
        /***********************************************************************************
        * 설명	: 대행자 검색팝업 콜백
        ***********************************************************************************/
        this.fn__AssetsPopupCallback = function(sPopupId,sReturn)
        {
        	if(sPopupId == "empPop") {
        		var dataset = new Dataset();
                nRowCnt = dataset.loadXML(sReturn);
                if(nRowCnt){
        			this.edt_empno.set_value(dataset.getColumn(0, "EMPNO"));
        			this.edt_empnm.set_value(dataset.getColumn(0, "EMPNM"));
        			this.edt_deptNm.set_value(dataset.getColumn(0, "DEPT_NM"));
        			this.edt_deptcd.set_value(dataset.getColumn(0, "DEPT_CODE"));
        			this.edt_clsfNm.set_value(dataset.getColumn(0, "CLSF_CODE"));
        			
        			this.ds_bsrpDtls.setColumn(0,"EMPNO",this.edt_empno.value);
        			this.ds_bsrpDtls.setColumn(0,"EMPNM",this.edt_empnm.value);
        			this.ds_bsrpDtls.setColumn(0,"DEPT_NM",this.edt_deptNm.value);
        			
        			this.ds_cond01.clearData();
        			var nRow = this.ds_cond01.addRow();
        			this.ds_cond01.setColumn(nRow,"EMPNO",dataset.getColumn(0, "EMPNO"));
        			this.parent.arg_1 = dataset.getColumn(0, "EMPNO");
        			this.fn_transaction("registerInfoR");
        		}
        	}

        	
        	
        }

        /***********************************************************************************
        * 설명	: 출장자 본인 default 행 삽입
        ***********************************************************************************/
        this.cncdntTriperOneDefaultRow = function()
        {
        	this.ds_cncdntTriper.clearData();
        	
        	var nRow = this.ds_cncdntTriper.addRow();
        	this.ds_cncdntTriper.setColumn(nRow,"EMPNO",this.edt_empno.value);
        	this.ds_cncdntTriper.setColumn(nRow,"TGRPN_EMPNO",this.edt_empno.value);
        	this.ds_cncdntTriper.setColumn(nRow,"TGRPN_EMPNM",this.edt_empnm.value);
        	this.ds_cncdntTriper.setColumn(nRow,"TGRPN_DEPT_NM",this.edt_deptNm.value);
        	this.ds_cncdntTriper.setColumn(nRow,"TGRPN_CLSF_SE",this.ds_registerInfo.getColumn(0, "HR_CLSF_NM"));
        	this.ds_cncdntTriper.setColumn(nRow,"TGRPN_CLSF_NM",this.ds_registerInfo.getColumn(0, "JSSFC_NM") +''+ this.ds_registerInfo.getColumn(0, "HR_CLSF_NM"));
        	
        	this.ds_cncdntTriper.setColumn(nRow,"TGRPN_DEPT_CODE",this.ds_registerInfo.getColumn(0,"DEPT_CODE"));
        	this.ds_cncdntTriper.setColumn(nRow,"TGRPN_RSPOFC_SE",this.ds_registerInfo.getColumn(0,"RSPOFC_SE"));

        	//this.fn_search();

        }

        /***********************************************************************************
        * 설명	: 출장자 낮은순으로 SORT
        ***********************************************************************************/
        this.sortCncdntTriper = function()
        {
        	//this.ds_cncdntTriper.rowcount
        	this.ds_cncdntTriper.set_keystring("S:TGRPN_EMPNO");
        }
        this.div_work_grd_issuList_onheadclick = function(obj,e)
        {
        	this.gfn_setGridCheckAll(obj, e);

        }

        /***********************************************************************************
        * 설명	: 열차운임조회 클릭시
        ***********************************************************************************/
        this.btn_korail_onclick = function(obj,e)
        {
        	window.open("http://www.letskorail.com/");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_bsrpDtls.addEventHandler("oncolumnchanged", this.ds_bsrpDtls_oncolumnchanged, this);
            this.ds_bsrpDtls.addEventHandler("onrowposchanged", this.ds_bsrpDtls_onrowposchanged, this);
            this.ds_cncdntTriper.addEventHandler("onrowposchanged", this.ds_cncdntTriper_onrowposchanged, this);
            this.ds_bsrpDtlsCychg.addEventHandler("oncolumnchanged", this.ds_bsrpDtlsCychg_oncolumnchanged, this);
            this.ds_bsrpDtlsCychg.addEventHandler("onrowsetchanged", this.ds_bsrpDtlsCychg_onrowsetchanged, this);
            this.ds_bsrpDtlsEtc.addEventHandler("oncolumnchanged", this.ds_bsrpDtlsEtc_oncolumnchanged, this);
            this.ds_bsrpDtlsEtc.addEventHandler("onrowsetchanged", this.ds_bsrpDtlsEtc_onrowsetchanged, this);
            this.ds_bsrpDtlsEtc.addEventHandler("cancolumnchange", this.ds_bsrpDtlsEtc_cancolumnchange, this);
            this.ds_expDsnMastr.addEventHandler("oncolumnchanged", this.ds_expDsnMastr_oncolumnchanged, this);
            this.ds_expDsnDtlsTrvct.addEventHandler("oncolumnchanged", this.ds_expDsnDtlsTrvct_oncolumnchanged, this);
            this.ds_expDsnDetailTrvct.addEventHandler("oncolumnchanged", this.ds_expDsnDetailTrvct_oncolumnchanged, this);
            this.ds_expDsnDetTrvDtstmn.addEventHandler("oncolumnchanged", this.ds_expDsnDetTrvDtstmn_oncolumnchanged, this);
            this.addEventHandler("oninit", this.HRM070203_P1_oninit, this);
            this.addEventHandler("onload", this.HRM070203_P1_onload, this);
            this.sta_WFDA_Label16.addEventHandler("onclick", this.sta_WFDA_Label09_onclick, this);
            this.sta_WFDA_Label13.addEventHandler("onclick", this.sta_WFDA_Label09_onclick, this);
            this.sta_WFDA_Label06.addEventHandler("onclick", this.sta_WFDA_Label09_onclick, this);
            this.sta_WFDA_Label07.addEventHandler("onclick", this.sta_WFDA_Label09_onclick, this);
            this.sta_WFDA_Label19.addEventHandler("onclick", this.sta_WFDA_Label09_onclick, this);
            this.Static03.addEventHandler("onclick", this.Static03_onclick, this);
            this.btn_Close.addEventHandler("onclick", this.btn_Close_onclick, this);
            this.btn_approval.addEventHandler("onclick", this.btn_approval_onclick, this);
            this.btn_Save.addEventHandler("onclick", this.fn_save, this);
            this.sta_WFDA_Label09.addEventHandler("onclick", this.sta_WFDA_Label09_onclick, this);
            this.grd_bsrpEmp.addEventHandler("onexpandup", this.grd_bsrpEmp_onexpandup, this);
            this.grd_bsrpEmp.addEventHandler("onheadclick", this.div_work_grd_issuList_onheadclick, this);
            this.btn_RowInsert0.addEventHandler("onclick", this.fn_rowInsert, this);
            this.btn_RowDelete0.addEventHandler("onclick", this.fn_rowDelete, this);
            this.btn_RowCancel0.addEventHandler("onclick", this.fn_rowCancel, this);
            this.sta_trnsportExps.addEventHandler("onclick", this.sta_trnsportExps_onclick, this);
            this.grd_trnsportExps.addEventHandler("onexpandup", this.grd_trnsportExps_onexpandup, this);
            this.grd_trnsportExps.addEventHandler("onheadclick", this.div_work_grd_issuList_onheadclick, this);
            this.btn_RowInsert1.addEventHandler("onclick", this.fn_rowInsert, this);
            this.btn_RowDelete1.addEventHandler("onclick", this.fn_rowDelete, this);
            this.btn_RowCancel1.addEventHandler("onclick", this.fn_rowCancel, this);
            this.btn_RowInsert2.addEventHandler("onclick", this.fn_rowInsert, this);
            this.btn_RowDelete2.addEventHandler("onclick", this.fn_rowDelete, this);
            this.btn_RowCancel2.addEventHandler("onclick", this.fn_rowCancel, this);
            this.grd_trvct.addEventHandler("onexpandup", this.grd_trvct_onexpandup, this);
            this.grd_trvct.addEventHandler("onheadclick", this.div_work_grd_issuList_onheadclick, this);
            this.sta_WFDA_Label17.addEventHandler("onclick", this.sta_WFDA_Label09_onclick, this);
            this.btn_expDsn.addEventHandler("onclick", this.fn_expDsn, this);
            this.btn_bdg.addEventHandler("onclick", this.btn_bdg_onclick, this);
            this.btn_popup.addEventHandler("onclick", this.btn_popup_onclick, this);
            this.rdo_CANCEL_SE.addEventHandler("onitemchanged", this.rdo_CANCEL_SE_onitemchanged, this);
            this.btn_Vrsc_man_search.addEventHandler("onclick", this.btn_Assets_Popup_onclick, this);
            this.btn_korail.addEventHandler("onclick", this.btn_korail_onclick, this);

        };

        this.loadIncludeScript("HRM070203_P1.xfdl");

       
    };
}
)();
