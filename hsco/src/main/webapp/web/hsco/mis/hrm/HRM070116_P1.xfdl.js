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
                this.set_name("HRM070116_P1");
                this.set_classname("HRM090403_P1");
                this.set_titletext("시간외근무신청[상세]");
                this._setFormPosition(0,0,1059,285);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_ovTimeWorkDtls", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"OFCPS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"OVTIME_WORK_DE\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_AT\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BEGIN_TM\" type=\"STRING\" size=\"256\"/><Column id=\"END_TM\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DRFT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_STS\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_KND\" type=\"STRING\" size=\"256\"/><Column id=\"CANCEL_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PM_AM_GB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"OVTIME_WORK_DE\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_AT\" type=\"STRING\" size=\"256\"/><Column id=\"BEGIN_TM\" type=\"STRING\" size=\"256\"/><Column id=\"END_TM\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_applcntPerson", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"OFCPS_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_ovTimeWorkDtls</Col><Col id=\"colId\">OVTIME_WORK_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">시간외 근무일</Col></Row><Row><Col id=\"compId\">ds_ovTimeWorkDtls</Col><Col id=\"colId\">BEGIN_TM_1</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">시작시각</Col></Row><Row><Col id=\"compId\">ds_ovTimeWorkDtls</Col><Col id=\"colId\">END_TM_1</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">종료시각</Col></Row><Row><Col id=\"compId\">ds_ovTimeWorkDtls</Col><Col id=\"colId\">END_TM_1</Col><Col id=\"msgId\">종료시각^시작시각</Col><Col id=\"from\">BEGIN_TM_1</Col></Row><Row><Col id=\"compId\">ds_ovTimeWorkDtls</Col><Col id=\"colId\">BEGIN_TM_1</Col><Col id=\"to\">2359</Col><Col id=\"msgId\">시작시각^23:59</Col></Row><Row><Col id=\"compId\">ds_ovTimeWorkDtls</Col><Col id=\"colId\">END_TM_1</Col><Col id=\"to\">2359</Col><Col id=\"msgId\">종료시각^23:59</Col></Row><Row><Col id=\"compId\">ds_ovTimeWorkDtls</Col><Col id=\"colId\">RM</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">근무내용</Col></Row><Row><Col id=\"compId\">ds_ovTimeWorkDtls</Col><Col id=\"colId\">EMPNO</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">사번</Col></Row><Row><Col id=\"compId\">ds_ovTimeWorkDtls</Col><Col id=\"colId\">EMPNM</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">성명</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dclzSe", this);
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

            obj = new Dataset("ds_approve", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DATA_VALUE\" type=\"STRING\" size=\"1000\"/><Column id=\"DATA_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"O_URL\" type=\"STRING\" size=\"256\"/><Column id=\"I_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"KEY\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"OVTIME_WORK_DE\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_AT\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CANCEL_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_ofcpsSe", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ovTimeCnt", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TOTALTMCNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_diffTime", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TIMECNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond_sub", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BEGIN_TM\" type=\"STRING\" size=\"256\"/><Column id=\"END_TM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_flxwkInfo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"LVFFC_TM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("DS_PM_AM_GB", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">오전</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">오후</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_usedTime", this);
            obj._setContents("<ColumnInfo><Column id=\"USED_TIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("edt_deptNm00", "absolute", "791", "105", "18", "21", null, null, this);
            obj.set_taborder("55");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "0", null, "285", "0", null, this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_PopupBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "2", "2", null, "34", "0", null, this);
            obj.set_taborder("14");
            obj.set_text("시간외근무신청[상세]");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "2", "2", "15", "282", null, null, this);
            obj.set_taborder("15");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close01", "absolute", null, "8", "20", "20", "13", null, this);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "1042", "2", "15", "282", null, null, this);
            obj.set_taborder("17");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "2", "36", "1040", "15", null, null, this);
            obj.set_taborder("18");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "2", "269", "1040", "15", null, null, this);
            obj.set_taborder("19");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close02", "absolute", null, "51", "50", "25", "17", null, this);
            obj.set_taborder("20");
            obj.set_text("종료");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "51", "50", "25", "123", null, this);
            obj.set_taborder("21");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sanction", "absolute", null, "51", "50", "25", "70", null, this);
            obj.set_taborder("22");
            obj.set_text("결재");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "17", "76", "1026", "5", null, null, this);
            obj.set_taborder("23");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_applcntPerson", "absolute", "18", "81", "74", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label01", "absolute", "146", "102", "350", "27", null, null, this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label00", "absolute", "630", "102", "412", "27", null, null, this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_empNo", "absolute", "149", "105", "140", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_empNm", "absolute", "291", "105", "183", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_deptNm", "absolute", "633", "105", "186", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("sta_layOffDtls", "absolute", "18", "141", "130", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_text("상세내용");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "17", "131", "1026", "10", null, null, this);
            obj.set_taborder("31");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label05", "absolute", "146", "188", "350", "27", null, null, this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label06", "absolute", "146", "214", "350", "27", null, null, this);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ovtimeWorkDe", "absolute", "17", "188", "130", "27", null, null, this);
            obj.set_taborder("36");
            obj.set_text("시간외 근무일자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_beginEndTM", "absolute", "17", "214", "130", "27", null, null, this);
            obj.set_taborder("37");
            obj.set_text("시작시각/종료시각");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_EMP", "absolute", "17", "102", "130", "27", null, null, this);
            obj.set_taborder("38");
            obj.set_text("사번 / 성명");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_emp2", "absolute", "501", "102", "130", "27", null, null, this);
            obj.set_taborder("39");
            obj.set_text("소속 / 직급 / 직위");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label10", "absolute", "146", "162", "350", "27", null, null, this);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_rm", "absolute", "502", "141", "74", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_text("근무내용");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("sta_dclzSe", "absolute", "17", "162", "130", "27", null, null, this);
            obj.set_taborder("42");
            obj.set_text("근태구분");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label11", "absolute", "501", "162", "541", "106", null, null, this);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_ofcpsSe", "absolute", "925", "105", "114", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_readonly("true");
            obj.set_innerdataset("@ds_ofcpsSe");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");

            obj = new TextArea("txt_rm", "absolute", "504", "165", "535", "100", null, null, this);
            obj.set_taborder("12");
            obj.set_wordwrap("char");
            obj.set_cssclass("txt_WF_Essential");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("200");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_ovtimeWorkDe", "absolute", "149", "191", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_cssclass("cal_WF_Essential");
            obj.set_readonly("false");

            obj = new Edit("edt_clsfSe", "absolute", "821", "105", "102", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_dclz", "absolute", "149", "165", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_innerdataset("@ds_dclzSe");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_cssclass("cmb_WF_Readonly");

            obj = new Static("Static11", "absolute", "199", "217", "21", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_beginTM", "absolute", "149", "217", "50", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_mask("##:##");
            obj.set_type("string");
            obj.set_cssclass("msk_WF_Essential");
            obj.set_trimtype("none");
            obj.set_clipmode("excludespace");
            obj.set_maskchar("_");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_emdTM", "absolute", "220", "217", "50", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_mask("##:##");
            obj.set_type("string");
            obj.set_cssclass("msk_WF_Essential");
            obj.set_maskchar("_");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_beginEndTM00", "absolute", "17", "240", "130", "27", null, null, this);
            obj.set_taborder("45");
            obj.set_text("신청가능시간");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label02", "absolute", "146", "240", "350", "27", null, null, this);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "149", "243", "50", "21", null, null, this);
            obj.set_taborder("47");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", null, "217", "81", "21", "563", null, this);
            obj.set_taborder("49");
            this.addChild(obj.name, obj);

            obj = new Static("sta_DETAIL01", "absolute", "150", "81", null, "21", "817", null, this);
            obj.set_taborder("50");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_CANCEL_SE", "absolute", "229", "84", "110", "16", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("51");
            obj.set_innerdataset("DS_CANCEL_SE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_value("0");
            obj.set_direction("vertical");
            obj.set_cssclass("rdo_WF_Readonly");

            obj = new Radio("rdo_PM_AM", "absolute", "149", "145", "110", "16", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("52");
            obj.set_innerdataset("@DS_PM_AM_GB");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_cssclass("rdo_WF_Readonly");
            obj.set_visible("false");

            obj = new CheckBox("CheckBox00", "absolute", "36.45%", "145", null, "18", "53.45%", null, this);
            obj.set_taborder("53");
            obj.set_text("근태단말기있음");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Vrsc_man_search", "absolute", null, "110", "13", "13", "568", null, this);
            obj.set_taborder("54");
            obj.set_enable("false");
            obj.style.set_background("URL('theme://images/btn_WF_Search.png')");
            obj.style.set_border("0 solid #8d8d8dff");
            obj.style.set_cursor("default");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", null, "243", "288", "21", "566", null, this);
            obj.set_taborder("56");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1059, 285, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HRM090403_P1");
            		p.set_titletext("시간외근무신청[상세]");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edt_empNo","value","ds_ovTimeWorkDtls","EMPNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_empNm","value","ds_ovTimeWorkDtls","EMPNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_deptNm","value","ds_ovTimeWorkDtls","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","mae_SANCTN_RECOM_DE","value","DS_WRKCP","DRFT_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","cmb_ofcpsSe","value","ds_ovTimeWorkDtls","OFCPS_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_clsfSe","value","ds_ovTimeWorkDtls","CLSF_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","cal_ovtimeWorkDe","value","ds_ovTimeWorkDtls","OVTIME_WORK_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","txt_rm","value","ds_ovTimeWorkDtls","RM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","cmb_dclz","value","ds_dclzSe","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","msk_beginTM","value","ds_ovTimeWorkDtls","BEGIN_TM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","msk_emdTM","value","ds_ovTimeWorkDtls","END_TM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edt_deptNm00","value","ds_ovTimeWorkDtls","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HRM070116_P1.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("HRM070116_P1.xfdl", "mis_lib::misUtil.xjs");
        this.registerScript("HRM070116_P1.xfdl", function() {
        /***********************************************************************
         * 화면ID   : HRM070116_P1
         * 화면명   : 시간외근무신청[상세]
         * 화면설명 : 시간외근무신청[상세]를 관리한다.
         * 작성일   : 2015.12.07
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
        // 업무에 필요한 공통 라이브러리 파일을 추가할 수 있다.
        // TODO

        /***********************************************************************
         * 화면 변수 선언부
         ***********************************************************************/
         this.fv_objForm;
         
         /***********************************************************************
         * onInit / onLoad 영역
         ***********************************************************************/
        this.HRM070116_P1_onload = function(obj,e)
        {
        	
        	
        	if(typeof arg_1 == "undefined"){ //신규일때 취소선택불가
        		this.rdo_CANCEL_SE.set_readonly(true);
        	}
        	
        	this.fv_objForm = this.parent.arg_0;
        	var v_popupMsg1 = this.parent.arg_1;
        	var v_popupMsg2 = this.parent.arg_2;
        	var v_popupMsg3 = this.parent.arg_3;
        	var v_popupMsg4 = this.parent.arg_4;
        	var v_popupMsg5 = this.parent.arg_5;
        	var v_popupMsg6 = this.parent.arg_6;
        	var parent_edt_erpNm = this.parent.edt_empNo;

        	if(!v_popupMsg1){	// 신규입력
        		this.ds_cond.setColumn(0, "EMPNO", this.parent.edt_empNo);
        		
        		this.fn_transaction("selectNewData");
        	}
        	else {				//	셀 더블클릭
        		this.ds_cond.setColumn(0, "EMPNO"         , v_popupMsg1);
        		this.ds_cond.setColumn(0, "OVTIME_WORK_DE", v_popupMsg2);
        		this.ds_cond.setColumn(0, "REQST_AT"      , v_popupMsg3);
        		this.ds_cond.setColumn(0, "BEGIN_TM"      , v_popupMsg4);
        		this.ds_cond.setColumn(0, "END_TM"        , v_popupMsg5);
        		this.ds_cond.setColumn(0, "SEQ"           , v_popupMsg6);
        		
        		this.fn_cudSetup();		// 전자결재 추가 (2016.7)
        		this.fn_search();
        	}
        	
        	if ( this.gfn_authcode("005") > -1 ) { //인사담당자
        		this.btn_Vrsc_man_search.set_enable(true);
        		this.btn_Vrsc_man_search.set_visible(true);
        	}

        	
        	this.fn_loadCombo();
        }

        /**********************************************************************
        * Form/Dataset 오브젝트 초기화
        ***********************************************************************/

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
        			["ds_sanctnSttusCode", "COM023", "1", ""],	// 전자결재상태
        			["ds_dclzSe"         , "SAL009", "1", ""],	// 근태 구분
        			["ds_ofcpsSe"        , "HRM021", "1", "D"]	// 직위 구분
        		];
        	 
        	this.gfn_comboLoad(comboParams, this.fn_callbackAfter);
        }

        /***********************************************************************
         * 설명: 결재에 따른 CONTROL 상태 UPDATE (2016.7)
         ************************************************************************/
         this.fn_cudSetup = function()
         {
        	// 전자결재 상태 체크 2016.7
        	// 기안상태 COM022 (0:기안전 1:기안 9:기안오류)
        	// 결재상태 COM023 (1: 진행 2:보류 4:대기 8:협조대기 32:삭제 256:완료 512:반송 4096:취소 1024:참조 NUL:상신전 DUP:결재중복)
        	// 기안전인것 : 재상신 및 수정/삭제
        	// 결재상태가 상신전 외는 신규로 다시 진행.

        	if ( this.ds_cond.getColumn(0, "REQST_AT")  == '0') { // 지문인식의 경우 저장/결재 없음 
        		this.btn_save.set_enable(false);
        		this.btn_sanction.set_enable(false);
        		return;
        	}
        	
        	var draftKnd = this.parent.arg_7;	// 전자결재 추가(기안상태)
        	
        	var bEnable = (draftKnd == "1" || draftKnd == "9") ? false : true;
        	
        	this.btn_save.set_enable(bEnable);
        	this.btn_sanction.set_enable(bEnable);
        	this.rdo_CANCEL_SE.set_readonly(bEnable);
         }
         
        /***********************************************************************
        * Transaction 영역 시작
        ************************************************************************/
        /***********************************************************************
         * Transaction 관련 이벤트 핸들러 
         **********************************************************************/
         
         /*
         * 함수명  	: fn_search
         * 설명 		: 저장 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_search();
         */
        this.fn_search = function(obj,e)
        {
        	this.fn_transaction("selectOvTimeWorkR");
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
        	//if (!this.comUtils.isDatasetUpdated(this.ds_ovTimeWorkDtls)){
        	//	this.gfn_message("comm.데이터.변경.없음");
        	//	return false;
        	//}
        	// validation 체크
        	if(!this.gfn_checkValidation_NoUpdChk(this.ds_ovTimeWorkDtls, this.ds_validation)) {
        		return;
        	}
        	
        	// 시간 및 날짜 체크
        	var beginTM    = this.ds_ovTimeWorkDtls.getColumn(0, "BEGIN_TM");
        	var endTM      = this.ds_ovTimeWorkDtls.getColumn(0, "END_TM");
        	var totalTmCnt = this.ds_ovTimeCnt.getColumn(0, "TOTALTMCNT");
        	var timeCnt    = this.ds_diffTime.getColumn(0, "TIMECNT");
        	var enableTm   = 4 - totalTmCnt;
        	var today      = this.gfn_today();
        	var workDe     = this.ds_ovTimeWorkDtls.getColumn(0, "OVTIME_WORK_DE");
        	var lvffcTm    = this.ds_flxwkInfo.getColumn(0, "LVFFC_TM");
        	var usedTime   = this.ds_usedTime.getColumn(0, "USED_TIME");
        	
        	/*
        	if(today < workDe) {
        		this.gfn_message("info.처리불가", "시간외 근무일자는\n명일보다 작거나 같아야합니다.");
        		return false;
        	}
        	*/
        	//근태단말기가 없으면
        	if(this.rdo_PM_AM.visible){
        		if(beginTM.indexOf(" ") > -1) {
        			this.gfn_message("errors.항목.입력값.범위", "시작시각|18:00|23:59");
        			return false;
        		}
        		if(endTM.indexOf(" ") > -1) {
        			this.gfn_message("errors.항목.입력값.범위", "종료시각|18:00|23:59");
        			return false;
        		}
        		if(enableTm - timeCnt < 0) {
        			this.gfn_message("info.처리불가", "신청가능시간을 확인해주세요.");
        			return false;
        		}
        	}else{ //근태단말기가 있으면
        		if(beginTM.indexOf(" ") > -1) {
        			this.gfn_message("errors.항목.입력값.범위", "시작시각|18:00|23:59");
        			return false;
        		}
        		if(endTM.indexOf(" ") > -1) {
        			this.gfn_message("errors.항목.입력값.범위", "종료시각|18:00|23:59");
        			return false;
        		}
        		if(timeCnt < 2 || timeCnt > (4-totalTmCnt)) {
        			this.gfn_message("info.처리불가", "시간외근무 신청시간은\n2~"+(4-totalTmCnt)+"시간만 가능합니다.");
        			return false;
        		}

        		if((4-totalTmCnt) - timeCnt < 0) {
        			this.gfn_message("info.처리불가", "신청가능시간을 확인해주세요.");
        			return false;
        		}
        		
        		if(lvffcTm > beginTM) {
        			var lvffcTM = lvffcTm.substr(0, 2) + ":" + lvffcTm.substr(2);
        			var msg = "시간외근무신청의 시작시각은\n" + lvffcTM + " 이후로 가능합니다.";
        			this.gfn_message("info.처리불가", msg);
        			return false;
        		}
        	}
        	

        
        	//취소/재신청 처리 
        	var cancelSe = this.rdo_CANCEL_SE.value;
        	if(cancelSe == '1' || cancelSe == '2' )	{   
        		if (this.ds_ovTimeWorkDtls.getColumn(0, "CANCEL_SE") == undefined || this.ds_ovTimeWorkDtls.getColumn(0, "CANCEL_SE") == "") { 
        			//신규자료로 다시 생성함  
        			this.ds_ovTimeWorkDtls.set_updatecontrol(false);
        			this.ds_ovTimeWorkDtls.setRowType(0, Dataset.ROWTYPE_INSERT );
        			
        			this.ds_ovTimeWorkDtls.setColumn (0, "SEQ", 	""); 	
        			this.ds_ovTimeWorkDtls.setColumn (0, "SANCTN_NO", "");  
        			this.ds_ovTimeWorkDtls.setColumn (0, "SANCTN_STS", "");  
        			this.ds_ovTimeWorkDtls.setColumn (0, "SANCTN_STTS", "");  
        			this.ds_ovTimeWorkDtls.setColumn (0, "DRFT_STS", "");  
        			this.ds_ovTimeWorkDtls.setColumn (0, "CANCEL_SE", cancelSe); 
        			this.ds_ovTimeWorkDtls.setRowType(0, Dataset.ROWTYPE_INSERT );
        		}
        	}
        	
        	/*- 1 : 출근
        	  - 2 : 퇴근
        	*/
        	if(this.rdo_PM_AM.value == 1){ //오후시간 신청
        		this.ds_ovTimeWorkDtls.setColumn (0, "PM_AM_GB", "2"); 
        	}else{ //오전시간 신청
        		this.ds_ovTimeWorkDtls.setColumn (0, "PM_AM_GB", "1");  
        	}

        	if(this.gfn_message("confirm.저장.여부"))	{
        		this.fn_transaction("saveOvTimeWorkCUD");
        	}
        }

        /**********************************************************************
         * CALL TRANSACTION 영역
         **********************************************************************/
        this.fn_transaction = function(strSvcId)
        {
        	switch (strSvcId) {
        		case "selectNewData":			// 신규버튼 클릭시
        			var sController   	= "/hsco/mis/hrm/HRM070116/selectNewData.do";
        			var sInDatasets   	= "input1=ds_cond";
        			var sOutDatasets  	= "ds_applcntPerson=output1";
        			break;
        		case "selectOvTimeWorkR":		// 시간외근무신청 상세조회
        			var sController   	= "hsco/mis/hrm/HRM070116/selectOvTimeWorkR.do";
        			var sInDatasets   	= "input1=ds_cond";
        			var sOutDatasets  	= "ds_ovTimeWorkDtls=output1";
        			break;
        		case "selectOvTimeWorkCnt":		// 해당 일자의 시간외근무 총시간 조회 & 시간외근무 시간 조회 & 유연근무정보 조회
        			var sController   	= "hsco/mis/hrm/HRM070116/selectOvTimeWorkCnt.do";
        			var sInDatasets   	= "input1=ds_cond";
        			var sOutDatasets  	= "ds_ovTimeCnt=output1 ds_diffTime=output2 ds_flxwkInfo=output3 ds_usedTime=output4";
        			break;
        		case "selectDiffTime":			// 시간외근무 시간 조회
        			var sController   	= "hsco/mis/hrm/HRM070116/selectDiffTime.do";
        			var sInDatasets   	= "input1=ds_cond_sub";
        			var sOutDatasets  	= "ds_diffTime=output1";
        			break;
        		case "saveOvTimeWorkCUD": 		// 저장(CUD)
        			var sController   	= "hsco/mis/hrm/HRM070116/saveOvTimeWorkCUD.do";
        			var sInDatasets   	= "input1=ds_ovTimeWorkDtls:U";
        			var sOutDatasets  	= "ds_ovTimeWorkDtls=output1";
        			break;
        		case "approve":					// 전자결재
        			var sController   	= "hsco/mis/hrm/HRM070116/approve.do";	
        			var sInDatasets   	= "input1=ds_approve";
        			var sOutDatasets  	= "ds_approve=output1";
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
        			case "selectNewData": 			// 신규버튼 클릭시
        				this.ds_ovTimeWorkDtls.addRow();
        				this.ds_ovTimeWorkDtls.setColumn(0, "EMPNO"         , this.ds_applcntPerson.getColumn(0, "EMPNO"));
        				this.ds_ovTimeWorkDtls.setColumn(0, "EMPNM"         , this.ds_applcntPerson.getColumn(0, "EMPNM"));
        				this.ds_ovTimeWorkDtls.setColumn(0, "DEPT_CODE"     , this.ds_applcntPerson.getColumn(0, "DEPT_CODE"));
        				this.ds_ovTimeWorkDtls.setColumn(0, "DEPT_NM"       , this.ds_applcntPerson.getColumn(0, "DEPT_NM"));
        				this.ds_ovTimeWorkDtls.setColumn(0, "CLSF_SE"       , this.ds_applcntPerson.getColumn(0, "CLSF_SE"));
        				this.ds_ovTimeWorkDtls.setColumn(0, "OFCPS_SE"      , this.ds_applcntPerson.getColumn(0, "OFCPS_SE"));
        				this.ds_ovTimeWorkDtls.setColumn(0, "BEGIN_TM"      , "1800");
        				this.ds_ovTimeWorkDtls.setColumn(0, "OVTIME_WORK_DE", this.gfn_today());
        				this.ds_ovTimeWorkDtls.setColumn(0, "SANCTN_KND"    , '0');

        				this.msk_beginTM.set_cssclass('msk_WF_Readonly');
        				this.msk_beginTM.set_readonly(true);
        				this.ds_ovTimeWorkDtls.setRowType(0, Dataset.ROWTYPE_INSERT );
        				this.rdo_CANCEL_SE.set_index("");

        				this.ds_ovTimeCnt.clearData();
        				this.fn_transaction("selectOvTimeWorkCnt");
         				break;
         			case "selectOvTimeWorkR": 		// 조회(시간외근무신청상세)
        				var sanctnknd = this.ds_ovTimeWorkDtls.getColumn(0, "SANCTN_KND");

        				this.cal_ovtimeWorkDe.set_cssclass('cal_WF_Readonly');
        				this.cal_ovtimeWorkDe.set_readonly(true);
        				this.msk_beginTM.set_cssclass('msk_WF_Readonly');
        				this.msk_beginTM.set_readonly(true);
        				this.ds_ovTimeCnt.clearData();
        				this.rdo_CANCEL_SE.set_index("");
        // 				if(sanctnknd != '0'){ //결재가 진행되면 수정불가-- 버튼으로 처리 
        // 					this.cmb_vhcle.set_cssclass('edt_WF_Readonly');
        // 					this.cmb_vhcle.set_readonly(true);
        // 					this.cal_useDe.set_cssclass('cal_WF_Readonly');
        // 					this.cal_useDe.set_readonly(true);
        // 					this.msk_useTm.set_cssclass('msk_WF_Readonly');
        // 					this.msk_useTm.set_readonly(true);
        // 				} 			
        				if (this.ds_ovTimeWorkDtls.getColumn(0, "CANCEL_SE") == '1' ||
        					this.ds_ovTimeWorkDtls.getColumn(0, "CANCEL_SE") == '2' ) {
        					var cancelSe = this.ds_ovTimeWorkDtls.getColumn(0, "CANCEL_SE");
        					this.rdo_CANCEL_SE.set_index(cancelSe);
        					this.rdo_CANCEL_SE.set_readonly(true);
        				}    				

        				this.fn_transaction("selectOvTimeWorkCnt");
         				break;
         			case "selectOvTimeWorkCnt":		//	해당 일자의 시간외근무 시간 조회
        				var totalTmCnt = this.ds_ovTimeCnt.getColumn(0, "TOTALTMCNT");
        				var timeCnt = this.ds_diffTime.getColumn(0, "TIMECNT");
        				var usedTime = this.ds_usedTime.getColumn(0, "USED_TIME");
        				
        				var enableTm = 4 - usedTime;
        				
        				this.Edit00.set_value(enableTm);
        				this.Static04.set_text("(일일가능시간 4시간 - 신청된 시간 " + (totalTmCnt*1+usedTime) + "시간)");
        				this.Static08.set_text("(" + timeCnt + "시간)");
        				if(this.ds_flxwkInfo.rowcount == 0) {
        					var nRow = this.ds_flxwkInfo.addRow();
        					this.ds_flxwkInfo.setColumn(nRow, "LVFFC_TM", "1800");
        				}
        				this.ds_ovTimeWorkDtls.setColumn(0, "BEGIN_TM", this.ds_flxwkInfo.getColumn(0, "LVFFC_TM"));
        				break;
        			case "selectDiffTime":			// 시간외근무 시간 조회
        				var timeCnt = this.ds_diffTime.getColumn(0, "TIMECNT");
        				this.Static08.set_text("(" + timeCnt + "시간)");
        				break;
        			case "saveOvTimeWorkCUD": 		// 저장하기
        				this.gfn_message("success.처리.성공", null, null, null, this.fn_popupCallback);
        				break;
        			case "approve":					// 전자결재
        				var sanctnNO = this.ds_approve.getColumn(0, "SANCTN_NO");
        				
        				this.ds_ovTimeWorkDtls.set_updatecontrol(false);
        				this.ds_ovTimeWorkDtls.setColumn(this.ds_ovTimeWorkDtls.rowposition, "SANCTN_NO", sanctnNO);
        				this.ds_ovTimeWorkDtls.set_updatecontrol(true);
        				
        				var oUrl = this.ds_approve.getColumn(0, "O_URL");
        				system.execBrowser(oUrl);
        				break;
        		}
        	}
        }

         /*
         * 함수명  	: fn_callbackAfter
         * 설명 		: gfn_comboLoad Callback 처리
         * params  		: 
         * return Type 	: None
         * 사용법		: 
         */
         
        this.fn_callbackAfter = function (strSvcId,nErrorCode,strErrorMsg)
        {
        	this.ds_dclzSe.filter("CODE == '103'");
        	this.cmb_dclz.set_index(0);
        }

         /*
         * 함수명  	: fn_popupCallback
         * 설명 		: 공통메시지 Callback 처리
         * params  		: 
         * return Type 	: None
         * 사용법		: 
         */
        this.fn_popupCallback = function() {
        	var empNo    = this.ds_ovTimeWorkDtls.getColumn(0, "EMPNO");
        	var workDe   = this.ds_ovTimeWorkDtls.getColumn(0, "OVTIME_WORK_DE");
        	var reqstAt  = this.ds_ovTimeWorkDtls.getColumn(0, "REQST_AT");
        	var seq      = this.ds_ovTimeWorkDtls.getColumn(0, "SEQ");
        	
        	this.ds_cond.clearData();
        	var nRow = this.ds_cond.addRow();
        	this.ds_cond.setColumn(0, "EMPNO"         , empNo);
        	this.ds_cond.setColumn(0, "OVTIME_WORK_DE", workDe);
        	this.ds_cond.setColumn(0, "REQST_AT"      , reqstAt);
        	this.ds_cond.setColumn(0, "SEQ"           , seq);
        	this.fn_search();
        	
        // 	var cancelSe = this.rdo_CANCEL_SE.value;
        // 	if(cancelSe == '1' || cancelSe == '2' )	{  
        // 			this.fn_sanction(); //취소/재신청 결재 
        // 	}
        }

        /***********************************************************************
        * Transaction 영역 끝
        ************************************************************************/

        /***********************************************************************
         * non-Transaction 관련 컴포넌트 이벤트 처리 함수
        *********************************** ************************************/

        /*
         * 함수명  	: btn_close01_onclick
         * 설명 		: 닫기 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_close01_onclick();
         */
        this.btn_close01_onclick = function(obj,e)
        {
        	this.close();
        }

        this.btn_close02_onclick = function(obj,e)
        {
        	this.close();
        }

        /*
         * 함수명  	: fn_sanction
         * 설명 		: 결재 버튼 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_sanction();
         */
        this.fn_sanction = function(obj,e)
        {
        	
         	var nRow = this.ds_ovTimeWorkDtls.rowposition;

        	// 전자결재 상태 체크 2016.7
        	// 기안상태 COM022 (0:기안전 1:기안 9:기안오류)
        	// 결재상태 COM023 (1: 진행 2:보류 4:대기 8:협조대기 32:삭제 256:완료 512:반송 4096:취소 1024:참조 NUL:상신전 DUP:결재중복)
        	// 기안전인것 : 재상신 및 수정/삭제
        	// 결재상태가 상신전 외는 신규로 다시 진행.
        	var sanctnKnd = this.ds_ovTimeWorkDtls.getColumn(nRow, "SANCTN_STS");
        	var cancelSe = this.rdo_CANCEL_SE.value;

        	switch (sanctnKnd) {
        				case "1": case "2": case "4": case "8": case "1024": case "DUP":
        				this.gfn_message("comm.결재.진행");
        				return false;
        				
        				case "32": case "256": case "512": case "4096": 
        				this.gfn_message("comm.결재.완료");
        				return false;
        				
        				default:
        	}
        	if(Ex.util.isUpdated(this.ds_ovTimeWorkDtls)){
        				this.gfn_message("comm.정보.저장.요청", "수정된");
        				return false;
        	}
        		
        	var filds = new Array(7);
        	var ovTimeWorkDe = this.ds_ovTimeWorkDtls.getColumn(nRow, "OVTIME_WORK_DE");
        	var beginTm1     = this.ds_ovTimeWorkDtls.getColumn(nRow, "BEGIN_TM");
        	var endTm1       = this.ds_ovTimeWorkDtls.getColumn(nRow, "END_TM");
        	var rm           = this.ds_ovTimeWorkDtls.getColumn(nRow, "RM");
        // 	var deptCode      = this.ds_ovTimeWorkDtls.getColumn(nRow, "DEPT_CODE");
        // 	var empNm         = this.ds_ovTimeWorkDtls.getColumn(nRow, "EMPNM");
        	var deptCode     = this.ds_ovTimeWorkDtls.getColumn(nRow, "DEPT_CODE");
        	var deptNm       = this.ds_ovTimeWorkDtls.getColumn(nRow, "DEPT_NM");
        	var empNo        = this.ds_ovTimeWorkDtls.getColumn(nRow, "EMPNO");
        	var empNm        = this.ds_ovTimeWorkDtls.getColumn(nRow, "EMPNM");
        	var seq          = this.ds_ovTimeWorkDtls.getColumn(nRow, "SEQ");
        	var sanctnNo     = this.ds_ovTimeWorkDtls.getColumn(nRow, "SANCTN_NO");
        	var reqstAt      = this.ds_ovTimeWorkDtls.getColumn(nRow, "REQST_AT");
        	
        	beginTm1 = beginTm1.substring(0, 2) + ':' + beginTm1.substring(2, 4);
        	endTm1   = endTm1.substring(0, 2) + ':' + endTm1.substring(2, 4);
        	
        	filds[0] = ovTimeWorkDe.substring(0, 4) + '-' + ovTimeWorkDe.substring(4, 6) + '-' + ovTimeWorkDe.substring(6, 8);
        	filds[1] = beginTm1;
        	filds[2] = endTm1;
        	filds[3] = rm;
        	filds[4] = deptNm;
        	filds[5] = empNm;
        	
        	var dataValue = filds.join("|");
        	var dataTitle = "시간외근무신청서";
        	var title     = "시간외근무신청서";
        	if (cancelSe  == '1') {
        		dataTitle = dataTitle + '(취소)';
        		title     = title + '(취소)';
        	}
        	
        	this.ds_approve.clearData();
        	var nRow = this.ds_approve.addRow();
        	this.ds_approve.setColumn(nRow, "TITLE"         , title);
        	this.ds_approve.setColumn(nRow, "DATA_TITLE"    , dataTitle);
        	this.ds_approve.setColumn(nRow, "DATA_VALUE"    , dataValue);
        	this.ds_approve.setColumn(0, "DEPT_CD",    this.ds_ovTimeWorkDtls.getColumn(0,"DEPT_CODE") );
        	this.ds_approve.setColumn(0, "EMP_CD",     this.ds_ovTimeWorkDtls.getColumn(0,"EMPNO") );
        	this.ds_approve.setColumn(nRow, "EMPNO"         , empNo);
        	this.ds_approve.setColumn(nRow, "OVTIME_WORK_DE", ovTimeWorkDe);
        	this.ds_approve.setColumn(nRow, "REQST_AT"      , reqstAt);
        	this.ds_approve.setColumn(nRow, "SEQ"           , seq);
        	this.ds_approve.setColumn(nRow, "SANCTN_NO"     , sanctnNo);
        	this.ds_approve.setColumn(nRow, "CANCEL_SE"     , cancelSe); //@@@@
        	
        	if(this.gfn_message("comm.행위여부", "결재를 상신"))	{
        		this.fn_transaction("approve");
        	}
        	
        }

        /*
         * 함수명  	: ds_ovTimeWorkDtls_oncolumnchanged
         * 설명 		: 시작/종료 시간 변경시 시간 계산
         * params  		: None
         * return Type 	: None
         * 사용법		: this.ds_ovTimeWorkDtls_oncolumnchanged();
         */
        this.ds_ovTimeWorkDtls_oncolumnchanged = function(obj,e)
        {
        	var workDe  = e.columnid == "OVTIME_WORK_DE" ? e.newvalue : obj.getColumn(e.row, "OVTIME_WORK_DE");
        	var beginTm = e.columnid == "BEGIN_TM" ? e.newvalue : obj.getColumn(e.row, "BEGIN_TM");
        	var endTm   = e.columnid == "END_TM" ? e.newvalue : obj.getColumn(e.row, "END_TM");
        	
        	if(e.columnid == "OVTIME_WORK_DE") {
        		if(!this.comUtils.isNull(workDe)) {
        			this.ds_cond.setColumn(0, "OVTIME_WORK_DE", workDe);
        			this.ds_cond.setColumn(0, "BEGIN_TM", beginTm);
        			this.ds_cond.setColumn(0, "END_TM", endTm);
        			this.ds_flxwkInfo.clearData();
        			this.fn_transaction("selectOvTimeWorkCnt");
        		}
        	}
        	
        	if(e.columnid == "BEGIN_TM" || e.columnid == "END_TM") {
        		if(!this.comUtils.isNull(beginTm) && !this.comUtils.isNull(endTm)) {
        			if(beginTm.indexOf(" ") > -1) {
        				this.gfn_message("errors.항목.입력값.범위", "시작시각|18:00|23:59");
        				return false;
        			}
        			if(endTm.indexOf(" ") > -1) {
        				this.gfn_message("errors.항목.입력값.범위", "종료시각|18:00|23:59");
        				return false;
        			}
        			if(this.rdo_PM_AM.value == 0){ //오전
        				if(endTm < 0900) {
        					this.gfn_message("errors.항목.입력값.범위", "시작시각|00:00|09:00");
        					return false;
        				}
        				if(beginTm > 0900) {
        					this.gfn_message("errors.항목.입력값.범위", "종료시각|00:00|09:00");
        					return false;
        				}
        			}else{ //오후
        				var lvffcTm = this.ds_flxwkInfo.getColumn(0, "LVFFC_TM")
        				
        				if(beginTm < lvffcTm) {
        					this.gfn_message("errors.항목.입력값.범위", "시작시각|"+lvffcTm.substr(0, 2) + ":" + lvffcTm.substr(2)+"|23:59");
        					return false;
        				}
        				if(endTm < 1800) {
        					this.gfn_message("errors.항목.입력값.범위", "종료시각|18:00|23:59");
        					return false;
        				}
        				if(beginTm > 2359) {
        					this.gfn_message("errors.항목.입력값.범위", "시작시각|"+lvffcTm.substr(0, 2) + ":" + lvffcTm.substr(2)+"|23:59");
        					return false;
        				}
        				if(endTm > 2359) {
        					this.gfn_message("errors.항목.입력값.범위", "종료시각|18:00|23:59");
        					return false;
        				}
        			}
        			
        			if(beginTm > endTm){
        				var errMsg = e.columnid == "BEGIN_TM" ? "시작시각은 종료시각을" : "종료시각은 시작시각을";
        				this.gfn_message("info.처리불가", errMsg + "초과할 수 없습니다.");
        			} else if(beginTm == endTm){
        				this.Static08.set_text("");
        			} else if(beginTm < endTm){
        				this.ds_cond_sub.clearData();
        				var nRow = this.ds_cond_sub.addRow();
        				this.ds_cond_sub.setColumn(nRow, "BEGIN_TM", beginTm);
        				this.ds_cond_sub.setColumn(nRow, "END_TM", endTm);
        				
        				this.fn_search_diffTime();
        			}
        		}
        	}
        }

        /*
         * 함수명  	: fn_search_diffTime
         * 설명 		: 시작/종료 시간 변경시 시간 계산
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_search_diffTime();
         */
        this.fn_search_diffTime = function()
        {
        	this.ds_diffTime.clearData();
        	this.fn_transaction("selectDiffTime");
        }

        this.rdo_CANCEL_SE_onitemchanged = function(obj,e)
        {

        	var draftKnd = this.parent.arg_7; //기안상태 
        	var bEnable = (draftKnd == "1" || draftKnd == "9") ? false : true;

        	if (obj.value == '')  {
        		this.btn_save.set_enable(bEnable);
        		this.btn_sanction.set_enable(bEnable);
        	} else {
        		this.btn_save.set_enable(true);
        		this.btn_sanction.set_enable(true);
        	}
        	
        }

        this.rdo_PM_AM_onitemchanged = function(obj,e)
        {
        	if(obj.value == 1){  //오후
        		this.msk_beginTM.set_value("1800");
        		this.msk_beginTM.set_cssclass('msk_WF_Readonly');
        		this.msk_beginTM.set_readonly(true);	
        		this.msk_emdTM.set_value("");
        		this.msk_emdTM.set_cssclass('');
        		this.msk_emdTM.set_readonly(false);
        	}else{ //오전
        		this.msk_emdTM.set_value("0900");
        		this.msk_emdTM.set_cssclass('msk_WF_Readonly');
        		this.msk_emdTM.set_readonly(true);	
        		this.msk_beginTM.set_value("");
        		this.msk_beginTM.set_cssclass('');
        		this.msk_beginTM.set_readonly(false);
        	}
        }

        this.CheckBox00_onclick = function(obj,e)
        {
        	if(!obj.value){
        		this.rdo_PM_AM.set_visible(true);
        	}else{
        		this.rdo_PM_AM.set_visible(false);
        	}
        }

        /***********************************************************************************
        * 설명	: 대행자 검색팝업 호출
        ***********************************************************************************/
        this.btn_Assets_Popup_onclick = function(obj,e)
        {
        	var parm = {
        		arg_0 : this,  //==> 필수, 팝업을 호출하는 form을 참조할 수 있도록 팝업에 Argument로 넘겨준다. (반드시 기술해야 함.)
                deptCd	: this.ds_ovTimeWorkDtls.getColumn(0,"DEPT_CODE") //ADD
        		
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
        			this.edt_empNo.set_value(dataset.getColumn(0, "EMPNO"));
        			this.edt_empNm.set_value(dataset.getColumn(0, "EMPNM"));
        			this.edt_deptNm.set_value(dataset.getColumn(0, "DEPT_NM"));
        			this.cmb_ofcpsSe.set_value(dataset.getColumn(0, "OFCPS"));
        			this.edt_deptNm00.set_value(dataset.getColumn(0, "DEPT_CODE"));
        			this.edt_clsfSe.set_value(dataset.getColumn(0, "CLSF_CODE"));
        			
        			this.ds_cond.setColumn(0, "EMPNO", dataset.getColumn(0, "EMPNO"));
        			this.fn_transaction("selectOvTimeWorkCnt");
                }
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_ovTimeWorkDtls.addEventHandler("oncolumnchanged", this.ds_ovTimeWorkDtls_oncolumnchanged, this);
            this.ds_applcntPerson.addEventHandler("oncolumnchanged", this.ds_reqstDtls_oncolumnchanged, this);
            this.ds_applcntPerson.addEventHandler("cancolumnchange", this.ds_reqstDtls_cancolumnchange, this);
            this.addEventHandler("onload", this.HRM070116_P1_onload, this);
            this.btn_close01.addEventHandler("onclick", this.btn_close01_onclick, this);
            this.btn_close02.addEventHandler("onclick", this.btn_close02_onclick, this);
            this.btn_save.addEventHandler("onclick", this.fn_save, this);
            this.btn_sanction.addEventHandler("onclick", this.fn_sanction, this);
            this.cal_ovtimeWorkDe.addEventHandler("oneditclick", this.cal_altrtvWorkDe_oneditclick, this);
            this.rdo_CANCEL_SE.addEventHandler("onitemchanged", this.rdo_CANCEL_SE_onitemchanged, this);
            this.rdo_PM_AM.addEventHandler("onitemchanged", this.rdo_PM_AM_onitemchanged, this);
            this.CheckBox00.addEventHandler("onclick", this.CheckBox00_onclick, this);
            this.btn_Vrsc_man_search.addEventHandler("onclick", this.btn_Assets_Popup_onclick, this);

        };

        this.loadIncludeScript("HRM070116_P1.xfdl");

       
    };
}
)();
