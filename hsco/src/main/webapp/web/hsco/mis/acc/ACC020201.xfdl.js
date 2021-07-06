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
                this.set_name("ACC020201");
                this.set_classname("UI_ACC020201");
                this.set_titletext("원인행위등록");
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
            obj._setContents("<ColumnInfo><Column id=\"SRCH_ST_DE\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_ED_DE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNSUL_SJ\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_KND\" type=\"STRING\" size=\"256\"/><Column id=\"EXP_DSN_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">SRCH_ST_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"from\">SRCH_ST_DE</Col><Col id=\"to\">SRCH_ED_DE</Col><Col id=\"msgId\">품의일자</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">SRCH_ED_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"from\">SRCH_ST_DE</Col><Col id=\"to\">SRCH_ED_DE</Col><Col id=\"msgId\">품의일자</Col></Row><Row><Col id=\"compId\">ds_cnsul</Col><Col id=\"colId\">CNSUL_SJ</Col><Col id=\"notNull\">Y</Col><Col id=\"nlength\"/><Col id=\"msgId\">품의제목</Col><Col id=\"lengthChkGb\"/></Row><Row><Col id=\"compId\">ds_cnsul</Col><Col id=\"colId\">EMPNO</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">사원</Col></Row><Row><Col id=\"compId\">ds_cnsul</Col><Col id=\"colId\">BUDGET_ACNT_CODE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">예산계정과목</Col></Row><Row><Col id=\"compId\">ds_cnsul</Col><Col id=\"colId\">CNSUL_AMOUNT</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">품의금액</Col></Row><Row><Col id=\"compId\">ds_cnsul</Col><Col id=\"colId\">SUMRY</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">품의내역</Col></Row></Rows>");
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

            obj = new Dataset("ds_bdg002", this);
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

            obj = new Dataset("ds_cnsul", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CAUSE_ACTION_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUKIP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"CNSUL_SJ\" type=\"STRING\" size=\"256\"/><Column id=\"CNSUL_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CNSUL_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNSUL_RTRVL_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUMRY\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUKIP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNSUL_BLCE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BUDGET_BLCE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_KND\" type=\"STRING\" size=\"256\"/><Column id=\"GWAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HANG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEHANG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEMOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BUDGET_DECSN_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SANCTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_UNIT_BLCE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"EXECUT_BUDGET_JAN_AM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ASIGN_JAN_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DCSN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ASIGN_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"CYFD_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_enfrcSanc", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CAUSE_ACTION_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_acc045", this);
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

            obj = new Dataset("ds_acc046", this);
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


            
            // UI Components Initialize
            obj = new Div("div_detail1", "absolute", "0", null, "1031", "184", null, "161", this);
            obj.set_taborder("2");
            obj.set_cssclass("div_detailBox");
            this.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "103", "52", "334", "27", null, null, this.div_detail1);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "103", "26", "334", "27", null, null, this.div_detail1);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "103", "104", "334", "27", null, null, this.div_detail1);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "551", "104", null, "27", "0", null, this.div_detail1);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "103", "78", "334", "27", null, null, this.div_detail1);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Static("Static37", "absolute", "103", "0", "334", "27", null, null, this.div_detail1);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "0", "104", "27", null, null, this.div_detail1);
            obj.set_taborder("0");
            obj.set_text("원인행위번호");
            obj.set_cssclass("sta_WF_Label");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "448", "104", "104", "27", null, null, this.div_detail1);
            obj.set_taborder("1");
            obj.set_text("품의금액");
            obj.set_cssclass("sta_WF_Label");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "52", "104", "27", null, null, this.div_detail1);
            obj.set_taborder("2");
            obj.set_text("품의일자");
            obj.set_cssclass("sta_WF_Label");
            obj.set_wordwrap("char");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "78", "104", "27", null, null, this.div_detail1);
            obj.set_taborder("15");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_Label");
            this.div_detail1.addChild(obj.name, obj);
            obj = new MaskEdit("msk_cnsulAmount", "absolute", "554", "107", "110", "21", null, null, this.div_detail1);
            obj.set_taborder("17");
            obj.set_mask("#,###");
            obj.set_cssclass("msk_WF_Essential");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Calendar("Calendar03", "absolute", "106", "55", "110", "21", null, null, this.div_detail1);
            this.div_detail1.addChild(obj.name, obj);
            obj.set_taborder("35");
            obj.style.set_align("center");
            obj.set_enable("true");
            obj.set_cssclass("cal_WF_Readonly");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            obj = new Edit("Edit00", "absolute", "106", "3", "110", "21", null, null, this.div_detail1);
            obj.set_taborder("39");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "0", "26", "104", "27", null, null, this.div_detail1);
            obj.set_taborder("46");
            obj.set_text("품의제목");
            obj.set_cssclass("sta_WF_Label");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Edit("edt_cnsulSj", "absolute", "106", "29", "328", "21", null, null, this.div_detail1);
            obj.set_taborder("47");
            obj.set_cssclass("edt_WF_Essential");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "448", "0", "104", "27", null, null, this.div_detail1);
            obj.set_taborder("48");
            obj.set_text("계정구분");
            obj.set_cssclass("sta_WF_Label");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "551", "0", null, "27", "0", null, this.div_detail1);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "448", "26", "104", "27", null, null, this.div_detail1);
            obj.set_taborder("50");
            obj.set_text("예산계정과목");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "551", "26", null, "27", "0", null, this.div_detail1);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "448", "52", "104", "27", null, null, this.div_detail1);
            obj.set_taborder("52");
            obj.set_text("부기코드");
            obj.set_cssclass("sta_WF_Label");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "551", "52", null, "27", "0", null, this.div_detail1);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "666", "0", "104", "27", null, null, this.div_detail1);
            obj.set_taborder("57");
            obj.set_text("이월구분");
            obj.set_cssclass("sta_WF_Label");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "554", "3", "110", "21", null, null, this.div_detail1);
            this.div_detail1.addChild(obj.name, obj);
            obj.set_taborder("58");
            obj.set_readonly("true");
            obj.set_innerdataset("@ds_bdg001");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_cssclass("cmb_WF_Readonly");
            obj = new Edit("Edit01", "absolute", "666", "29", "362", "21", null, null, this.div_detail1);
            obj.set_taborder("59");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Edit("edt_budgetAcntCode", "absolute", "555", "29", "110", "21", null, null, this.div_detail1);
            obj.set_taborder("60");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Essential");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Edit("Edit03", "absolute", "666", "55", "362", "21", null, null, this.div_detail1);
            obj.set_taborder("61");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Edit("Edit04", "absolute", "555", "55", "110", "21", null, null, this.div_detail1);
            obj.set_taborder("62");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "218", "0", "104", "27", null, null, this.div_detail1);
            obj.set_taborder("63");
            obj.set_text("결재상태");
            obj.set_cssclass("sta_WF_Label");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "448", "78", "104", "27", null, null, this.div_detail1);
            obj.set_taborder("64");
            obj.set_text("사업코드");
            obj.set_cssclass("sta_WF_Label");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "551", "78", null, "27", "0", null, this.div_detail1);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Edit("Edit05", "absolute", "555", "81", "110", "21", null, null, this.div_detail1);
            obj.set_taborder("66");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Edit("Edit06", "absolute", "666", "81", "362", "21", null, null, this.div_detail1);
            obj.set_taborder("67");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "666", "104", "104", "27", null, null, this.div_detail1);
            obj.set_taborder("68");
            obj.set_text("품의집행금액");
            obj.set_cssclass("sta_WF_Label");
            this.div_detail1.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit00", "absolute", "772", "107", "110", "21", null, null, this.div_detail1);
            obj.set_taborder("69");
            obj.set_readonly("true");
            obj.set_mask("#,###");
            obj.set_cssclass("msk_WF_Readonly");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "448", "130", "104", "27", null, null, this.div_detail1);
            obj.set_taborder("70");
            obj.set_text("품의회수금액");
            obj.set_cssclass("sta_WF_Label");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "551", "130", null, "27", "0", null, this.div_detail1);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_detail1.addChild(obj.name, obj);
            obj = new MaskEdit("msk_cnsulRtrvlAmount", "absolute", "554", "133", "110", "21", null, null, this.div_detail1);
            obj.set_taborder("71");
            obj.set_mask("#,###");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_readonly("true");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Static("Static23", "absolute", "666", "130", "104", "27", null, null, this.div_detail1);
            obj.set_taborder("73");
            obj.set_text("품의잔액");
            obj.set_cssclass("sta_WF_Label");
            this.div_detail1.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit03", "absolute", "772", "133", "110", "21", null, null, this.div_detail1);
            obj.set_taborder("74");
            obj.set_readonly("true");
            obj.set_mask("#,###");
            obj.set_cssclass("msk_WF_Readonly");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Static("Static24", "absolute", "448", "156", "104", "27", null, null, this.div_detail1);
            obj.set_taborder("75");
            obj.set_text("배정잔액(세목)");
            obj.set_cssclass("sta_WF_Label");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Static("Static25", "absolute", "551", "156", null, "27", "0", null, this.div_detail1);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_detail1.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit04", "absolute", "554", "159", "110", "21", null, null, this.div_detail1);
            obj.set_taborder("76");
            obj.set_readonly("true");
            obj.set_mask("#,###");
            obj.set_cssclass("msk_WF_Readonly");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Combo("Combo01", "absolute", "324", "3", "110", "21", null, null, this.div_detail1);
            this.div_detail1.addChild(obj.name, obj);
            obj.set_taborder("78");
            obj.set_readonly("true");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_innerdataset("@ds_com022");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj = new Static("Static26", "absolute", "0", "104", "104", "27", null, null, this.div_detail1);
            obj.set_taborder("79");
            obj.set_text("사원");
            obj.set_cssclass("sta_WF_Label");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Static("Static27", "absolute", "0", "130", "104", "53", null, null, this.div_detail1);
            obj.set_taborder("80");
            obj.set_text("품의내역");
            obj.set_cssclass("sta_WF_Label");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Static("Static28", "absolute", "103", "130", "334", "53", null, null, this.div_detail1);
            obj.set_taborder("81");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_detail1.addChild(obj.name, obj);
            obj = new TextArea("txt_sumry", "absolute", "106", "134", "327", "46", null, null, this.div_detail1);
            obj.set_taborder("82");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("200");
            obj.set_cssclass("txt_WF_Essential");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Div("div_EMP", "absolute", "106", "107", "328", "21", null, null, this.div_detail1);
            obj.set_taborder("83");
            obj.set_text("Div00");
            obj.set_async("false");
            obj.set_url("com::empno.xfdl");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Edit("Edit07", "absolute", "106", "81", "85", "21", null, null, this.div_detail1);
            obj.set_taborder("84");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Edit("Edit08", "absolute", "193", "81", "241", "21", null, null, this.div_detail1);
            obj.set_taborder("85");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Button("btn_cnsulBlceRtrvl", "absolute", "884", null, "84", "19", null, "31", this.div_detail1);
            obj.set_taborder("86");
            obj.set_text("품의잔액회수");
            obj.set_cssclass("btn_WF_Process");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Button("btn_budgetAcntPopup", "absolute", "644", null, "22", "19", null, "135", this.div_detail1);
            obj.set_taborder("87");
            obj.set_cssclass("btn_WF_Search");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Static("Static29", "absolute", "666", "156", "104", "27", null, null, this.div_detail1);
            obj.set_taborder("88");
            obj.set_text("부기잔액");
            obj.set_cssclass("sta_WF_Label");
            this.div_detail1.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit01", "absolute", "772", "159", "110", "21", null, null, this.div_detail1);
            obj.set_taborder("89");
            obj.set_readonly("true");
            obj.set_mask("#,###");
            obj.set_cssclass("msk_WF_Readonly");
            this.div_detail1.addChild(obj.name, obj);
            obj = new Combo("cbo_CYFD_SE", "absolute", "773", "3", "110", "21", null, null, this.div_detail1);
            this.div_detail1.addChild(obj.name, obj);
            obj.set_taborder("90");
            obj.set_readonly("false");
            obj.set_innerdataset("@ds_acc046");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_cssclass("cmb_WF_Essential");

            obj = new Div("div_SEARCH", "absolute", "0", "0", null, "59", "28", null, this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WFSA_Box");
            this.addChild(obj.name, obj);
            obj = new Static("sta_EMPL_SE00", "absolute", "16", "5", "64", "21", null, null, this.div_SEARCH);
            obj.set_taborder("36");
            obj.set_text("품의일자");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Calendar("Calendar00", "absolute", "80", "5", "100", "21", null, null, this.div_SEARCH);
            this.div_SEARCH.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj.set_cssclass("cal_WF_Essential");
            obj = new Static("Static00", "absolute", "182", "5", "15", "21", null, null, this.div_SEARCH);
            obj.set_taborder("39");
            obj.set_text("~");
            obj.style.set_align("center");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Calendar("Calendar01", "absolute", "199", "5", "100", "21", null, null, this.div_SEARCH);
            this.div_SEARCH.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj.set_cssclass("cal_WF_Essential");
            obj = new Static("sta_EMPL_SE03", "absolute", "562", "5", "38", "21", null, null, this.div_SEARCH);
            obj.set_taborder("45");
            obj.set_text("제목");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "600", "5", "195", "21", null, null, this.div_SEARCH);
            obj.set_taborder("3");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "0", "0", "15", "59", null, null, this.div_SEARCH);
            obj.set_taborder("48");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Div("div_srchDept", "absolute", "352", "5", "195", "21", null, null, this.div_SEARCH);
            obj.set_taborder("53");
            obj.set_async("false");
            obj.set_enable("true");
            obj.set_url("com::deptCode.xfdl");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Static("sta_DEPT_CODE", "absolute", "314", "5", "38", "21", null, null, this.div_SEARCH);
            obj.set_taborder("54");
            obj.set_text("부서");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Static("sta_EMPL_SE01", "absolute", "16", "31", "64", "21", null, null, this.div_SEARCH);
            obj.set_taborder("55");
            obj.set_text("결재상태");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Combo("cmb_srchSancKnd", "absolute", "80", "31", "110", "21", null, null, this.div_SEARCH);
            this.div_SEARCH.addChild(obj.name, obj);
            obj.set_taborder("56");
            obj.set_innerdataset("@ds_com022");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj = new Static("sta_EMPL_SE02", "absolute", "205", "31", "90", "21", null, null, this.div_SEARCH);
            obj.set_taborder("57");
            obj.set_text("지출결의여부");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Combo("cmb_expDsnAt", "absolute", "295", "31", "110", "21", null, null, this.div_SEARCH);
            this.div_SEARCH.addChild(obj.name, obj);
            obj.set_taborder("58");
            obj.set_innerdataset("@ds_acc045");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj = new Static("Static01", "absolute", "299", "0", "15", "20", null, null, this.div_SEARCH);
            obj.set_taborder("59");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "547", "0", "15", "59", null, null, this.div_SEARCH);
            obj.set_taborder("60");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "190", "31", "15", "20", null, null, this.div_SEARCH);
            obj.set_taborder("61");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_SEARCH.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "1031", "0", "15", "735", null, null, this);
            obj.set_taborder("24");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", null, "0", "13", "735", "0", null, this);
            obj.set_taborder("25");
            obj.set_text("스\r\n크\r\n롤\r\n13");
            obj.set_visible("false");
            obj.style.set_background("#d07b173c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "0", "59", "1031", "10", null, null, this);
            obj.set_taborder("26");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0", "66", null, "19", "873", null, this);
            obj.set_taborder("27");
            obj.set_text("품의내역");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "0", "80", null, "5", "27", null, this);
            obj.set_taborder("28");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", null, "186", "19", null, "349", this);
            obj.set_taborder("29");
            obj.set_text("품의상세정보");
            obj.set_cssclass("sta_WF_Title03");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cnsul", "absolute", "0", "84", null, null, "28", "372", this);
            obj.set_taborder("31");
            obj.set_binddataset("ds_cnsul");
            obj.set_autosizingtype("row");
            obj.set_autofittype("col");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"90\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"110\"/><Column size=\"256\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"결재상태\"/><Cell col=\"1\" text=\"원인행위번호\"/><Cell col=\"2\" text=\"품의제목\"/><Cell col=\"3\" text=\"품의일자\"/><Cell col=\"4\" text=\"부서\"/><Cell col=\"5\" text=\"성명\"/><Cell col=\"6\" text=\"예산계정과목명\"/><Cell col=\"7\" text=\"부기명\"/><Cell col=\"8\" text=\"품의금액\"/><Cell col=\"9\" text=\"품의내역\"/></Band><Band id=\"body\"><Cell displaytype=\"image\" text=\"expr:comp.parent.fn_get_imgUrl(SANCTN_KND)\" autosizecol=\"default\"/><Cell col=\"1\" text=\"bind:CAUSE_ACTION_NO\" autosizecol=\"default\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:CNSUL_SJ\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:CNSUL_DE\" calendardisplay=\"edit\" calendardisplaynulltype=\"none\" autosizecol=\"default\"/><Cell col=\"4\" text=\"bind:DEPT_NM\" autosizecol=\"default\"/><Cell col=\"5\" text=\"bind:EMPNM\" autosizecol=\"default\"/><Cell col=\"6\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:BUDGET_ACNT_NM\"/><Cell col=\"7\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:BUKIP_NM\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CNSUL_AMOUNT\" autosizecol=\"default\"/><Cell col=\"9\" displaytype=\"text\" style=\"align:left;\" text=\"bind:SUMRY\" wordwrap=\"char\" autosizerow=\"limitmin\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "450", null, "186", "19", null, "349", this);
            obj.set_taborder("32");
            obj.set_text("품의예산정보");
            obj.set_cssclass("sta_WF_Title03");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sanRegist3", "absolute", "393", null, "45", "19", null, "349", this);
            obj.set_taborder("33");
            obj.set_text("기타");
            obj.style.set_background("#ff9999ff");
            obj.style.set_border("1 solid #ff4d4dff");
            obj.style.set_color("#333333ff");
            obj.set_cssclass("btn_Red_Emphasis");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sanRegist2", "absolute", "345", null, "45", "19", null, "349", this);
            obj.set_taborder("34");
            obj.set_text("공과금");
            obj.style.set_background("#ff9999ff");
            obj.style.set_border("1 solid #ff4d4dff");
            obj.style.set_color("#333333ff");
            obj.set_cssclass("btn_Red_Emphasis");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sanRegist1", "absolute", "297", null, "45", "19", null, "349", this);
            obj.set_taborder("35");
            obj.set_text("급여");
            obj.style.set_background("#ff9999ff");
            obj.style.set_border("1 solid #ff4d4dff");
            obj.style.set_color("#333333ff");
            obj.set_cssclass("btn_Red_Emphasis");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "363", null, "5", "27", null, this);
            obj.set_taborder("36");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "573", null, "5", "27", null, this);
            obj.set_taborder("37");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "0", null, "186", "19", null, "138", this);
            obj.set_taborder("38");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Title03");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "0", "597", null, "5", "27", null, this);
            obj.set_taborder("39");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cmmnAtchmnfl", "absolute", "0", null, null, "133", "28", "0", this);
            obj.set_taborder("40");
            obj.set_binddataset("ds_fileList");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"65\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"파일형식\"/><Cell col=\"2\" celltype=\"head\" text=\"파일명\"/><Cell col=\"3\" text=\"확장자\"/><Cell col=\"4\" text=\"사이즈\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"image\" text=\"bind:FILE_IMAGE\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"2\" displaytype=\"normal\" style=\"align:left middle;\" text=\"bind:ORGINL_FILE_NM\"/><Cell col=\"3\" text=\"bind:FILE_EXTSN\"/><Cell col=\"4\" text=\"bind:FILE_MG\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delFiles", "absolute", null, null, "67", "19", "188", "138", this);
            obj.set_taborder("41");
            obj.set_text("선택삭제");
            obj.set_cssclass("btn_WF_Process");
            this.addChild(obj.name, obj);

            obj = new Button("btn_uploadFiles", "absolute", null, null, "68", "19", "116", "138", this);
            obj.set_taborder("42");
            obj.set_text("파일업로드");
            obj.set_cssclass("btn_WF_Process");
            this.addChild(obj.name, obj);

            obj = new Button("btn_downFiles", "absolute", null, null, "85", "19", "28", "138", this);
            obj.set_taborder("43");
            obj.set_text("선택다운로드");
            obj.set_cssclass("btn_WF_Process");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 476, 122, this.div_detail1,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.set_cssclass("div_detailBox");

            	}
            );
            this.div_detail1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 59, this.div_SEARCH,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div00");
            		p.set_cssclass("div_WFSA_Box");

            	}
            );
            this.div_SEARCH.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1059, 735, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("UI_ACC020201");
            		p.set_titletext("원인행위등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item23","div_SEARCH.Calendar00","value","ds_cond","SRCH_ST_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","div_SEARCH.Calendar01","value","ds_cond","SRCH_ED_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_detail1.msk_cnsulAmount","value","ds_cnsul","CNSUL_AMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_detail1.Calendar03","value","ds_cnsul","CNSUL_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_SEARCH.Edit00","value","ds_cond","CNSUL_SJ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","div_detail1.Edit00","value","ds_cnsul","CAUSE_ACTION_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","div_detail1.edt_cnsulSj","value","ds_cnsul","CNSUL_SJ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","div_detail1.Combo00","value","ds_cnsul","BSNS_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","div_detail1.Edit01","value","ds_cnsul","BUDGET_ACNT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","div_detail1.edt_budgetAcntCode","value","ds_cnsul","BUDGET_ACNT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","div_detail1.Edit03","value","ds_cnsul","BUKIP_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","div_detail1.Edit04","value","ds_cnsul","BUKIP_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_detail1.Edit05","value","ds_cnsul","BSNS_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_detail1.Edit06","value","ds_cnsul","BSNS_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","div_detail1.MaskEdit00","value","ds_cnsul","DECSN_AMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div_detail1.msk_cnsulRtrvlAmount","value","ds_cnsul","CNSUL_RTRVL_AMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","div_detail1.MaskEdit03","value","ds_cnsul","CNSUL_BLCE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","div_detail1.MaskEdit04","value","ds_cnsul","ASIGN_JAN_AMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","div_detail1.txt_sumry","value","ds_cnsul","SUMRY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","div_detail1.Edit07","value","ds_cnsul","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","div_detail1.Edit08","value","ds_cnsul","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","div_SEARCH.cmb_srchSancKnd","value","ds_cond","SANCTN_KND");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","div_detail1.Edit01","tooltiptext","ds_cnsul","BUDGET_ACNT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","div_detail1.Combo01","value","ds_cnsul","SANCTN_KND");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","div_detail1.MaskEdit01","value","ds_cnsul","EXECUT_BUDGET_JAN_AM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","div_SEARCH.cmb_expDsnAt","value","ds_cond","EXP_DSN_AT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","div_detail1.cbo_CYFD_SE","value","ds_cnsul","CYFD_SE");
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
        this.addIncludeScript("ACC020201.xfdl", "mis_lib::misUtil.xjs");
        this.addIncludeScript("ACC020201.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("ACC020201.xfdl", "lib::comUpDownUtils.xjs");
        this.registerScript("ACC020201.xfdl", function() {
        /***********************************************************************
         * 화면ID   : ACC020201
         * 화면명   : 원인행위등록
         * 화면설명 : 원인행위를 등록한다.
         * 작성일   : 2017.07.20
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

        /***********************************************************************
         * 화면 변수 선언부
         ***********************************************************************/
        this.File_UpDownManager = null;

        /***********************************************************************
         * onInit / onLoad 영역
         ***********************************************************************/
        this.ACC020201_onload = function(obj,e)
        {
        	// Form 초기화
        	this.fn_misFormInit(this);
        	this.fn_init_form(); 

        	// DataSet 초기화
        	this.fn_init_dataset();

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
        		 ["ds_bdg001", "BDG001", "Y", "D", "B"]	// 사업구분
        		,["ds_bdg002", "BDG002", "Y", "D", "B"]	// 수지구분
        		,["ds_com022", "COM022", "Y", "전체", "B"]	// 결재상태
        		,["ds_acc045", "ACC045", "Y", "전체", "B"]	// 지출결의등록여부
        		,["ds_acc046", "ACC046", "Y", "D", "B"]	// 이월구분
        	];
        	var callback = function (svcId, errorCode, errorMsg) {
        		// 조회 이벤트 / 함수 호출
        		
        		var today = this.dateUtils.today();
        		
        		this.ds_cond.clearData();
        		this.ds_cond.addRow();
        		this.ds_cond.setColumn(0, "SRCH_ST_DE", today.substr(0,6)+"01");
        		this.ds_cond.setColumn(0, "SRCH_ED_DE", this.dateUtils.getLastDay(today,"s"));
        		this.ds_cond.setColumn(0, "DEPT_CODE", this.gfn_getDeptId()  );	// 부서코드
        		this.ds_cond.setColumn(0, "DEPT_NM",   this.gfn_getDeptName());	// 부서명
        		this.ds_cond.setColumn(0, "SANCTN_KND", "");
        		this.ds_cond.setColumn(0, "EXP_DSN_AT", "");
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
        	// 데이터셋 동적 바인딩
        	this.div_SEARCH.div_srchDept.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");
        	this.div_detail1.div_EMP.fn_setBind("ds_cnsul","EMPNO","EMPNM");

        	if(this.gfn_authGrpId("ACC_ADMIN") == -1 && this.gfn_authGrpId("ACC_USER") == -1 && this.gfn_authGrpId("BDG_TIMHDER") == -1 && this.gfn_authGrpId("BDG_ADMIN") == -1) {
                 this.div_SEARCH.div_srchDept.fn_setReadonly(true);
            }

        	// 시스템 공통으로 Form을 Initialize 한다.
        	this.gfn_initForm(this);

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
        	var fileConfig = {
        		useMultiUpload : true,
        		onChange: this.fn_onFileSelected,	// 파일 선택 이벤트 핸들러
        		onSuccess : this.fn_onFileSuccess	// 전송 성공 이벤트 핸들러
        	};
        	this.File_UpDownManager = new this.fileUpDownManager(this, "PMS", "PRJ");
        	this.File_UpDownManager.init(fileConfig);
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
        		case "SRCH": // 원인행위 목록
        			var sController   	= "hsco/mis/acc/ACC020201/cnsulList.do";
        			var sInDatasets   	= "input1=ds_cond";
        			var sOutDatasets  	= "ds_cnsul=output1";
        			break;
        		case "SAVE": // 원인행위 저장
        			var sController   	= "hsco/mis/acc/ACC020201/cnsulCUD.do";
        			var sInDatasets   	= "input1=ds_cnsul:U";
        			var sOutDatasets  	= "";
        			break;
        		case "enfrcSanc": // 원인행위 저장
        			var sController   	= "hsco/mis/acc/ACC020201/enfrcSanc.do";
        			var sInDatasets   	= "input1=ds_enfrcSanc:U";
        			var sOutDatasets  	= "";
        			break;
        		// ======== 첨부파일 관련 transaction ========
        		case "selectAtchFile":
        			var sController  = "hsco/mis/acc/ACC020201/selectAtchFile.do";
        			var sInDatasets  = "input1=ds_cond_file";
        			var sOutDatasets = "ds_fileList=output1";
        			break;
        		case "deleteFile":
        			var sController  = "hsco/cmm/file/deleteFile.do";
        			var sInDatasets  = "input1=ds_fileList:U";
        			var sOutDatasets = "ds_fileList=output1";
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
        			case "SAVE":
        				this.fn_transaction("SRCH");
        				break;
        			case "enfrcSanc":
        				this.fn_transaction("SRCH");
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

        /**********************************************************************
        * 공통 Button 관련 이벤트 처리
        ***********************************************************************/

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
        	this.ds_fileList.clearData();
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
        	// validation 체크
        	if(!this.gfn_checkValidation_NoUpdChk(this.ds_cnsul, this.ds_validation)) {
        		return false;
        	}
        	this.fn_transaction("SAVE");
        }

        /*
         * 함수명  	: fn_insert
         * 설명 		: 원인행위 생성
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_insert();
         */
        this.fn_insert = function()
        {
        	var nRow = this.ds_cnsul.insertRow(0);
        	this.ds_cnsul.setColumn(nRow, "CNSUL_DE"	, this.dateUtils.today());
        	this.ds_cnsul.setColumn(nRow, "DEPT_CODE"	, application.gds_userInfo.getColumn(0,"DEPT_CODE"));
        	this.ds_cnsul.setColumn(nRow, "DEPT_NM"		, application.gds_userInfo.getColumn(0,"DEPT_NM"));
        	this.ds_cnsul.setColumn(nRow, "EMPNO"		, application.gds_userInfo.getColumn(0,"EMPNO"));
        	this.ds_cnsul.setColumn(nRow, "EMPNM"		, application.gds_userInfo.getColumn(0,"EMPNM"));
        	this.ds_cnsul.setColumn(nRow, "CYFD_SE", "0");
        	
        	this.btn_uploadFiles.set_enable(true);
        	this.btn_delFiles.set_enable(true);
        	this.ds_fileList.clearData();
        }

        
        /*
         * 함수명  	: fn_delete
         * 설명 		: 원인행위 삭제
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_delete();
         */
        this.fn_delete= function()
        {	
        	var nRow = this.ds_cnsul.rowposition;
        	if(nRow > -1) {
        		if(['1','4','5'].indexOf(this.ds_cnsul.getColumn(this.ds_cnsul.rowposition, "SANCTN_KND")) > -1) {
        			this.gfn_message("info.처리불가","결재가 진행중이거나 완료된 데이터는 삭제할 수 없습니다.");
        			return;
        		}
        		
        		if(this.ds_cnsul.getColumn(this.ds_cnsul.rowposition, "EMPNO") != this.fn_getEmpno() && this.gfn_authGrpId("ALL_ADMIN") == -1){
        			this.gfn_message("info.처리불가","해당 원인행위 담당자만 삭제할 수 있습니다.");
        			return;
        		}
        		
        		this.ds_cnsul.deleteRow(nRow);
        		
        		// 첨부파일
        		this.ds_cond_file.clearData();
        		var nRow = this.ds_cond_file.addRow();
        		this.ds_cond_file.setColumn(nRow, "FILE_SN",   this.ds_cnsul.getColumn(nRow, "FILE_SN"));
        		
        		this.fn_transaction("selectAtchFile");
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
        		this.ds_cnsul.reset();
        		this.ds_cnsul.applyChange();
        	}	

        }

        /*
         * 함수명  	: fn_sanction
         * 설명 		: 결재 버튼 이벤트 처리(Dataset 변경 내역 Reset)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_sanction();
         */
        this.fn_sanction = function()
        {
        	var currow = this.ds_cnsul.rowposition;
        	
        	// 결재 전 유효성 체크
        	if(this.comUtils.isDatasetUpdated(this.ds_cnsul)) {
        		this.gfn_message("comm.정보.저장.요청", "품의내역");
        		return;
        	}
        	
        	if(currow < 0) {
        		this.gfn_message("info.선택데이터.없음.선택.요청");
        		return;
        	}
        	
        	if(['1','4','5'].indexOf(this.ds_cnsul.getColumn(currow, "SANCTN_KND")) > -1) {
              this.gfn_message("info.처리불가","결재가 진행중이거나 완료된 데이터는 결재할 수 없습니다.");
              return;
        	}
        	
        	if(this.ds_cnsul.getColumn(currow, "EMPNO") != this.fn_getEmpno()){
        		this.gfn_message("info.처리불가","해당 원인행위 담당자만 결재할 수 있습니다.");
        		return;
        	}
        	
        	if(this.ds_cnsul.getColumn(currow, "EXECUT_BUDGET_JAN_AM") < 0) {
        		this.gfn_message("info.처리불가","부기 잔액이 초과되었습니다.");
        		return;
        	}
        	
        	var cnsulAmount = this.ds_cnsul.getColumn(currow,"CNSUL_AMOUNT");		// 품의금액
        	
        	// 2020.10.22
        	// 결재시 개행문자 인식하지 못해 수정
        	//var enter = String.fromCharCode(13);
        	var enter = "\\r\\n";
        	
        	var sumry = this.comUtils.isNull(this.ds_cnsul.getColumn(currow,"SUMRY")) ? " ○○○○○○" : this.ds_cnsul.getColumn(currow,"SUMRY");
        	var porpose = sumry + enter + enter;
        	porpose    += " 1. 구입금액 : ";
        	porpose    += "일금"+this.fn_numToHangul(cnsulAmount)+"원정" + "(￦" + this.comUtils.formatComma(cnsulAmount) + ")" + enter;
        	//porpose    += " 2. 예산현황 : ";
        	
        	
        	// 결재상신
        	var arrSancData = new Array();
        	arrSancData[ 0] = "[품의]"+this.ds_cnsul.getColumn(currow,"CNSUL_SJ");								//결재제목
        	arrSancData[ 1] = "";																				//계약의뢰일자
        	arrSancData[ 2] = this.ds_cnsul.getColumn(currow,"DEPT_NM");										//기안부서
        	arrSancData[ 3] = porpose;		// 집행목적
        	arrSancData[ 4] = this.comUtils.formatComma(this.ds_cnsul.getColumn(currow,"BUDGET_AM"));			//예산액
        	arrSancData[ 5] = this.comUtils.formatComma(this.ds_cnsul.getColumn(currow,"BUDGET_DECSN_AMOUNT"));	//기집행액
        	arrSancData[ 6] = this.comUtils.formatComma(this.ds_cnsul.getColumn(currow,"CNSUL_AMOUNT"));		//금회집행액
        	arrSancData[ 7] = this.comUtils.formatComma(this.ds_cnsul.getColumn(currow,"BUDGET_BLCE"));			//집행잔액
        	arrSancData[ 8] = "";																				//비고
        	arrSancData[ 9] = this.ds_cnsul.getColumn(currow,"SUMRY");											//품의내역_비고
        	arrSancData[10] = "일금"+this.fn_numToHangul(cnsulAmount)+"원정" + "(￦" + this.comUtils.formatComma(cnsulAmount) + ")";		//소요예산액
        	arrSancData[11] = "";																				//소요예산조치일
        	arrSancData[12] = "일금"+this.fn_numToHangul(this.ds_cnsul.getColumn(currow,"ASIGN_AMOUNT"))+"원정" + "(￦" + this.comUtils.formatComma(this.ds_cnsul.getColumn(currow,"ASIGN_AMOUNT")) + ")";		//소요예산배정액
        	arrSancData[13] = this.fn_dateStr(this.ds_cnsul.getColumn(currow,"DCSN_DE"),".");					//소요예산배정일
        	arrSancData[14] = "";																				//소요예산재원내역
        	arrSancData[15] = this.ds_cnsul.getColumn(currow,"GWAN_NM");										//관
        	arrSancData[16] = this.ds_cnsul.getColumn(currow,"HANG_NM");										//항
        	arrSancData[17] = this.ds_cnsul.getColumn(currow,"SEHANG_NM");										//세항
        	arrSancData[18] = this.ds_cnsul.getColumn(currow,"MOK_NM");											//목
        	arrSancData[19] = this.ds_cnsul.getColumn(currow,"SEMOK_NM") + "(" + this.ds_cnsul.getColumn(currow,"BUKIP_NM") + ")";	//세목(부기)

        	this.fn_callHandySanc2(
        		 this						// context
        		,'0000000070'				// formId
        		,this.ds_cnsul				// misDataset
        		,"TBACC_CNSUL"				// tableName
        		,["CAUSE_ACTION_NO"]		// tableKey
        		,arrSancData				// arrSancData
        		,null						// subData
        		,null						// multiCheck(0 or 1)
        		,null						// otherColumn
        		,this.ds_fileList			// file Dataset
        	);
        }

        /*
         * 함수명  	: btn_onclick
         * 설명 		: 버튼 클릭 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_onclick();
         */
        this.btn_onclick = function(obj,e)
        {
        	switch(obj.name) {
        		case "btn_budgetAcntPopup":	// 예산계정과목 팝업
        		
        			var dsTemp = new Dataset();
        			dsTemp.copyData(this.ds_cnsul);
        			dsTemp.clearData();
        			dsTemp.addRow();
        			dsTemp.copyRow(0, this.ds_cnsul, this.ds_cnsul.rowposition);
        			var parm = {
        				  arg_0      : this
        				 ,searchDs   : dsTemp.saveXML()       	// 검색조건(YEAR, BSNS_SE, BALC_SE, DEPT_CODE 컬럼만 이용)
        				 ,strObj     : "rdo_BALC_SE" 			// 수정불가능 처리할 오브젝트 명(ex : "edt_YEAR,cbo_BSNS_SE,rdo_BALC_SE,div_srchDept")
        				 ,year_S     : dsTemp.getColumn(0,"BUDGET_YEAR")         // 예산년도(srchDs보다 우선순위를 가짐)
        				 ,bsnsSe_S   : null         // 사업구분(srchDs보다 우선순위를 가짐)
        				 ,balcSe_S   : null         // 수지구분(srchDs보다 우선순위를 가짐)
        				 ,deptCode_S : null         // 부서코드(srchDs보다 우선순위를 가짐)
        				 ,acntPopup  : false        // (true : 예산계정코드선택팝업, false : 부기선택팝업)
        				 ,acntCode_S : null         // 고정 처리할 예산계정코드 목록 (0000000)
        				 ,bAccPopup  : true
        			};
        			this.gfn_popup("btn_budgetAcntPopup", 800, 620, "예산계정과목", parm, "com::bdgAcntPop.xfdl", "fn_popupCallBack", true);
        			break;
        		case "btn_cnsulBlceRtrvl":	// 품의잔액회수
        			var currow 		= this.ds_cnsul.rowposition;
        			if(this.gfn_message("confirm.삭제.진행","품의잔액을 전액 회수합니다.") ){
        				var rtrvlAmt 	= this.ds_cnsul.getColumn(currow, "CNSUL_RTRVL_AMOUNT");
        				var cnsulBlce 	= this.ds_cnsul.getColumn(currow, "CNSUL_BLCE");
        				this.ds_cnsul.setColumn(this.ds_cnsul.rowposition, "CNSUL_RTRVL_AMOUNT", rtrvlAmt + cnsulBlce);
        				this.ds_cnsul.setColumn(this.ds_cnsul.rowposition, "CNSUL_BLCE", "0");
        			}
        			break;
        		default:
        			break;
        	}
        }

        /*
         * 함수명  	: fn_popupCallBack
         * 설명 		: 팝업창 콜백 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_popupCallBack();
         */
        this.fn_popupCallBack = function(strID,variant)
        {

        	switch(strID) {
        		case "btn_budgetAcntPopup":	// 예산계정과목 팝업 콜백
        			if(variant != null && variant.length > 0) {
        				var nRow = this.ds_cnsul.rowposition;
        				var dsTemp = new Dataset();
        				dsTemp.loadXML(variant);
        				this.ds_cnsul.setColumn(nRow, "BUDGET_YEAR", 		dsTemp.getColumn(0, "YEAR"));					// 예산년도
        				this.ds_cnsul.setColumn(nRow, "BSNS_SE", 			dsTemp.getColumn(0, "BSNS_SE"));				// 사업구분
        				this.ds_cnsul.setColumn(nRow, "BALC_SE", 			dsTemp.getColumn(0, "BALC_SE"));				// 수지구분
        				this.ds_cnsul.setColumn(nRow, "BUDGET_ACNT_CODE", 	dsTemp.getColumn(0, "BUDGET_ACNT_CODE"));		// 예산계정코드
        				this.ds_cnsul.setColumn(nRow, "BUDGET_ACNT_NM", 	dsTemp.getColumn(0, "BUDGET_TREE_NM"));			// 예산계정명
        				this.ds_cnsul.setColumn(nRow, "BUDGET_BLCE", 		dsTemp.getColumn(0, "BUDGET_BALC"));			// 예산잔액
        				this.ds_cnsul.setColumn(nRow, "EXPNDTR_UNIT_BLCE", 	dsTemp.getColumn(0, "EXPNDTR_UNIT_BALC"));		// 부기잔액
        				this.ds_cnsul.setColumn(nRow, "BUKIP_CODE", 		dsTemp.getColumn(0, "EXPNDTR_UNIT_CODE"));		// 부기코드
        				this.ds_cnsul.setColumn(nRow, "BUKIP_NM", 			dsTemp.getColumn(0, "EXPNDTR_UNIT_NM"));		// 부기코드명
        				this.ds_cnsul.setColumn(nRow, "BSNS_CODE",			dsTemp.getColumn(0, "DETAIL_BSNS_CODE"));		// 사업지구코드
        				this.ds_cnsul.setColumn(nRow, "BSNS_NM",			dsTemp.getColumn(0, "DETAIL_BSNS_NM"));			// 사업지구명
        				this.ds_cnsul.setColumn(nRow, "BUDGET_DEPT_CODE", 	dsTemp.getColumn(0, "DEPT_CODE"));				// 부서코드
        				this.ds_cnsul.setColumn(nRow, "EXECUT_BUDGET_JAN_AM", "");
        			}
        			break;
        		default:
        			break;
        	}
        	
        }

        
        this.ds_cnsul_onrowposchanged = function(obj,e)
        {
        	if(e.newrow > -1) {
        		switch(obj.getRowType(e.newrow)) {
        			case Dataset.ROWTYPE_INSERT:
        				this.div_detail1.btn_cnsulBlceRtrvl.set_enable(false);
        				break;
        			default:
        				this.div_detail1.btn_cnsulBlceRtrvl.set_enable(true);
        				break;
        		}
        		
        		if(obj.getColumn(e.newrow, "SANCTN_KND") == '0' && obj.getColumn(e.newrow, "EMPNO") == this.fn_getEmpno()) {
        			this.btn_sanRegist1.set_enable(true);
        			this.btn_sanRegist1.style.set_border("#ff4d4dff");
        			this.btn_sanRegist1.style.set_background("#ff9999ff");
        			this.btn_sanRegist2.set_enable(true);
        			this.btn_sanRegist2.style.set_border("#ff4d4dff");
        			this.btn_sanRegist2.style.set_background("#ff9999ff");
        			this.btn_sanRegist3.set_enable(true);
        			this.btn_sanRegist3.style.set_border("#ff4d4dff");
        			this.btn_sanRegist3.style.set_background("#ff9999ff");
        		}else{
        			this.btn_sanRegist1.set_enable(false);
        			this.btn_sanRegist1.style.set_border("#a6a6a6ff");
        			this.btn_sanRegist1.style.set_background("#aaaaaaff");
        			this.btn_sanRegist2.set_enable(false);
        			this.btn_sanRegist2.style.set_border("#a6a6a6ff");
        			this.btn_sanRegist2.style.set_background("#aaaaaaff");
        			this.btn_sanRegist3.set_enable(false);
        			this.btn_sanRegist3.style.set_border("#a6a6a6ff");
        			this.btn_sanRegist3.style.set_background("#aaaaaaff");
        		}
        		
        		var case1 = (['1','4','5'].indexOf(obj.getColumn(e.newrow, "SANCTN_KND")) > -1);
        		var case2 = obj.getRowType(e.newrow) == Dataset.ROWTYPE_INSERT ? false : (obj.getColumn(e.newrow, "EMPNO") != this.fn_getEmpno());
        		if(case1 || case2) {
        			this.div_detail1.edt_cnsulSj.set_readonly(true);
        			this.div_detail1.edt_cnsulSj.set_cssclass("edt_WF_Readonly");
        			this.div_detail1.txt_sumry.set_readonly(true);
        			this.div_detail1.txt_sumry.set_cssclass("txt_WF_Readonly");
        			this.div_detail1.edt_budgetAcntCode.set_cssclass("edt_WF_Readonly");
        			this.div_detail1.msk_cnsulAmount.set_readonly(true);
        			this.div_detail1.msk_cnsulAmount.set_cssclass("msk_WF_Readonly");
        			this.div_detail1.btn_budgetAcntPopup.set_enable(false);
        			this.div_detail1.div_EMP.fn_set_readonly(true);		
        				
        			this.div_detail1.cbo_CYFD_SE.set_readonly(true);
        			this.div_detail1.cbo_CYFD_SE.set_cssclass("edt_WF_Readonly");
        			
        			if(obj.getRowType(e.newrow) != Dataset.ROWTYPE_INSERT){
        				this.btn_uploadFiles.set_enable(false);
        				this.btn_delFiles.set_enable(false);
        			}else{
        				this.btn_uploadFiles.set_enable(true);
        				this.btn_delFiles.set_enable(true);
        			}
        		} else {
        			this.div_detail1.edt_cnsulSj.set_readonly(false);
        			this.div_detail1.edt_cnsulSj.set_cssclass("edt_WF_Essential");
        			this.div_detail1.txt_sumry.set_readonly(false);
        			this.div_detail1.txt_sumry.set_cssclass("txt_WF_Essential");
        			this.div_detail1.edt_budgetAcntCode.set_cssclass("edt_WF_Essential");
        			this.div_detail1.msk_cnsulAmount.set_readonly(false);
        			this.div_detail1.msk_cnsulAmount.set_cssclass("msk_WF_Essential");
        			this.div_detail1.btn_budgetAcntPopup.set_enable(true);
        			this.div_detail1.div_EMP.fn_set_readonly(false);
        			
        			this.div_detail1.cbo_CYFD_SE.set_readonly(false);
        			this.div_detail1.cbo_CYFD_SE.set_cssclass("");
        			
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

        this.ds_cnsul_onrowsetchanged = function(obj,e)
        {
        	switch(e.reason) {
        		case Dataset.REASON_APPEND:
        			this.div_detail1.btn_cnsulBlceRtrvl.set_enable(false);
        			this.div_detail1.edt_cnsulSj.set_readonly(false);
        			this.div_detail1.edt_cnsulSj.set_cssclass("edt_WF_Essential");
        			this.div_detail1.txt_sumry.set_readonly(false);
        			this.div_detail1.txt_sumry.set_cssclass("txt_WF_Essential");
        			this.div_detail1.edt_budgetAcntCode.set_cssclass("edt_WF_Essential");
        			this.div_detail1.msk_cnsulAmount.set_readonly(false);
        			this.div_detail1.msk_cnsulAmount.set_cssclass("msk_WF_Essential");
        			this.div_detail1.btn_budgetAcntPopup.set_enable(true);
        			this.div_detail1.div_EMP.fn_set_readonly(false);
        			this.div_detail1.cbo_CYFD_SE.set_readonly(false);
        			this.div_detail1.cbo_CYFD_SE.set_cssclass("");
        			break;
        	}
        }

        this.fn_get_imgUrl = function(sanctnKnd)
        {
        	return this.gfn_getSanctnImgUrl(sanctnKnd);
        }

        this.grd_cnsul_oncelldblclick = function(obj,e)
        {
        	if(e.col == 0) {
        		var nRow = this.ds_cnsul.rowposition;
        		if(['1','2','3','4','5'].indexOf(this.ds_cnsul.getColumn(nRow, "SANCTN_KND")) > -1) {
        			this.fn_openSanc(this.ds_cnsul.getColumn(nRow, "SANCTN_NO"));
        		}
        	}
        }

        /*
         * 함수명  	: btn_sanRegist_onclick
         * 설명 		: 강제 결재완료
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_sanRegist_onclick();
         */
        this.btn_sanRegist_onclick = function(obj,e)
        {
        	if(Ex.util.isUpdated(this.ds_cnsul)) {
        		this.gfn_message("comm.정보.저장.요청","먼저 변경된 품의");
        	}else{
        		if(this.gfn_message("confirm.삭제.진행","[내부결재가 필요없는 건에 한하여 해당기능을 이용해주세요]\n결재상태를 강제로 완료처리 합니다. ") ){
        			this.ds_enfrcSanc.clearData();
        			this.ds_enfrcSanc.addRow();
        			this.ds_enfrcSanc.setColumn(0, "CAUSE_ACTION_NO", this.ds_cnsul.getColumn(this.ds_cnsul.rowposition, "CAUSE_ACTION_NO"));
        			this.fn_transaction("enfrcSanc");
        		}
        	}
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

        /*
         * 함수명  	: btn_click
         * 설명 		: Grid Cell 클릭 후 이벤트 처리(첨부파일)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.grd_file_oncellclick(obj,e);
         */
        this.btn_click = function(obj,e)
        {
        	// 업로드
        	if(obj.name == "btn_uploadFiles") {
        		// 첨부파일 업로드(fileSn 자동채번 / 첨부파일 Master에 ROW추가 / 파일 업로드 및 자동저장 / 테이블에 fileSn반영 / 데이터셋에 fileSn반영, 단 신규 ROW가 아닐경우 ROWTYPE은 유지)
        		this.fn_autoFileSn(
        			 "MIS"									// 대분류   (SYS_SE)
        			,"ACC"									// 업무구분 (JOB_SE)
        			, this.File_UpDownManager				// fileManager 오브젝트
        			, this.ds_fileList						// fileObject
        			, this.ds_cnsul							// fileSn을 불러오거나 반영해야 하는 컬럼
        			, "TBACC_CNSUL"							// fileSn을 저장할 테이블
        			, "FILE_SN"								// fileSn 컬럼명이 다를 경우를 대비
        			, ["CAUSE_ACTION_NO"]					// fileSn을 저장할 테이블의 PK (FileSn 확인 및 자동반영목적)
        		);
        	}
        	
        	// 삭제
        	if(obj.name == "btn_delFiles") {
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
        	}
        	
        	// 다운로드
        	if(obj.name == "btn_downFiles") {
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
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_bdg001.addEventHandler("onrowposchanged", this.ds_frmtnPd_onrowposchanged, this);
            this.ds_bdg002.addEventHandler("onrowposchanged", this.ds_frmtnPd_onrowposchanged, this);
            this.ds_cnsul.addEventHandler("onrowsetchanged", this.ds_cnsul_onrowsetchanged, this);
            this.ds_cnsul.addEventHandler("onrowposchanged", this.ds_cnsul_onrowposchanged, this);
            this.ds_com022.addEventHandler("onrowposchanged", this.ds_frmtnPd_onrowposchanged, this);
            this.ds_acc045.addEventHandler("onrowposchanged", this.ds_frmtnPd_onrowposchanged, this);
            this.ds_acc046.addEventHandler("onrowposchanged", this.ds_frmtnPd_onrowposchanged, this);
            this.addEventHandler("onload", this.ACC020201_onload, this);
            this.div_detail1.div_EMP.addEventHandler("onkeyup", this.div_SEARCH_div_EMP_onkeyup, this);
            this.div_detail1.btn_cnsulBlceRtrvl.addEventHandler("onclick", this.btn_onclick, this);
            this.div_detail1.btn_budgetAcntPopup.addEventHandler("onclick", this.btn_onclick, this);
            this.div_SEARCH.sta_EMPL_SE01.addEventHandler("onclick", this.div_SEARCH_sta_EMPL_SE01_onclick, this);
            this.div_SEARCH.cmb_srchSancKnd.addEventHandler("onitemchanged", this.div_SEARCH_cmb_srchSancKnd_onitemchanged, this);
            this.grd_cnsul.addEventHandler("oncelldblclick", this.grd_cnsul_oncelldblclick, this);
            this.btn_sanRegist3.addEventHandler("onclick", this.btn_sanRegist_onclick, this);
            this.btn_sanRegist2.addEventHandler("onclick", this.btn_sanRegist_onclick, this);
            this.btn_sanRegist1.addEventHandler("onclick", this.btn_sanRegist_onclick, this);
            this.grd_cmmnAtchmnfl.addEventHandler("onheadclick", this.grd_cmmnAtchmnfl_onheadclick, this);
            this.btn_delFiles.addEventHandler("onclick", this.btn_click, this);
            this.btn_uploadFiles.addEventHandler("onclick", this.btn_click, this);
            this.btn_downFiles.addEventHandler("onclick", this.btn_click, this);

        };

        this.loadIncludeScript("ACC020201.xfdl");
        this.loadPreloadList();
       
    };
}
)();
