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
                this.set_name("HRM070117_P1");
                this.set_classname("HRM090403_P1");
                this.set_titletext("시간외근무확인[상세]");
                this._setFormPosition(0,0,1059,284);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_ovTimeWorkCnfirmDtls", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"OFCPS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"OVTIME_WORK_DE\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_AT\" type=\"STRING\" size=\"256\"/><Column id=\"BEGIN_TM_1\" type=\"STRING\" size=\"256\"/><Column id=\"END_TM_1\" type=\"STRING\" size=\"256\"/><Column id=\"BEGIN_TM_2\" type=\"STRING\" size=\"256\"/><Column id=\"END_TM_2\" type=\"STRING\" size=\"256\"/><Column id=\"RM_CONFM\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DRFT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_STTS\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_KND\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_STS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"OVTIME_WORK_DE\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_AT\" type=\"STRING\" size=\"256\"/><Column id=\"BEGIN_TM_1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_ovTimeWorkCnfirmDtls</Col><Col id=\"colId\">BEGIN_TM_2</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">실제시작시각</Col></Row><Row><Col id=\"compId\">ds_ovTimeWorkCnfirmDtls</Col><Col id=\"colId\">END_TM_2</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">실제종료시각</Col></Row><Row><Col id=\"compId\">ds_ovTimeWorkCnfirmDtls</Col><Col id=\"colId\">END_TM_2</Col><Col id=\"msgId\">실제종료시각^실제시작시각</Col><Col id=\"from\">BEGIN_TM_2</Col></Row><Row><Col id=\"compId\">ds_ovTimeWorkCnfirmDtls</Col><Col id=\"colId\">BEGIN_TM_2</Col><Col id=\"msgId\">실제시작시각^23:59</Col><Col id=\"to\">2359</Col></Row><Row><Col id=\"compId\">ds_ovTimeWorkCnfirmDtls</Col><Col id=\"colId\">END_TM_2</Col><Col id=\"msgId\">실제종료시각^23:59</Col><Col id=\"to\">2359</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"DATA_VALUE\" type=\"STRING\" size=\"1000\"/><Column id=\"DATA_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"O_URL\" type=\"STRING\" size=\"256\"/><Column id=\"I_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"KEY\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"OVTIME_WORK_DE\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_AT\" type=\"STRING\" size=\"256\"/><Column id=\"BEGIN_TM_1\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "0", "0", null, "283", "0", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_PopupBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "2", "2", null, "34", "0", null, this);
            obj.set_taborder("16");
            obj.set_text("시간외근무 확인[상세]");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "2", "2", "15", "278", null, null, this);
            obj.set_taborder("17");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close01", "absolute", null, "8", "20", "20", "13", null, this);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "1042", "2", "15", "280", null, null, this);
            obj.set_taborder("19");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "2", "36", "1040", "15", null, null, this);
            obj.set_taborder("20");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "2", "267", "1040", "15", null, null, this);
            obj.set_taborder("21");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close02", "absolute", null, "51", "50", "25", "17", null, this);
            obj.set_taborder("22");
            obj.set_text("종료");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "51", "50", "25", "123", null, this);
            obj.set_taborder("23");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sanction", "absolute", null, "51", "50", "25", "70", null, this);
            obj.set_taborder("24");
            obj.set_text("결재");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "17", "76", "1026", "5", null, null, this);
            obj.set_taborder("25");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_applcntPerson", "absolute", "18", "81", "74", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label01", "absolute", "146", "102", "350", "27", null, null, this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label00", "absolute", "630", "102", "411", "27", null, null, this);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_empNo", "absolute", "149", "105", "140", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_empNm", "absolute", "291", "105", "202", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_deptNm", "absolute", "633", "105", "178", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("sta_layOffDtls", "absolute", "18", "141", "130", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_text("상세내용");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "17", "131", "1026", "10", null, null, this);
            obj.set_taborder("33");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label05", "absolute", "146", "188", "350", "27", null, null, this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label06", "absolute", "146", "214", "350", "27", null, null, this);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label07", "absolute", "146", "240", "350", "27", null, null, this);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ovtimeWorkDe", "absolute", "17", "188", "130", "27", null, null, this);
            obj.set_taborder("39");
            obj.set_text("시간외 근무일자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_beginEndTM", "absolute", "17", "214", "130", "27", null, null, this);
            obj.set_taborder("40");
            obj.set_text("신청 시작/종료 시각");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_realBeginEndTM", "absolute", "17", "240", "130", "27", null, null, this);
            obj.set_taborder("41");
            obj.set_text("실제 시작/종료 시각");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_EMP", "absolute", "17", "102", "130", "27", null, null, this);
            obj.set_taborder("42");
            obj.set_text("사번 / 성명");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_emp2", "absolute", "501", "102", "130", "27", null, null, this);
            obj.set_taborder("43");
            obj.set_text("소속 / 직급 / 직위");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label10", "absolute", "146", "162", "350", "27", null, null, this);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_rm", "absolute", "502", "141", "74", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_text("확인사유");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("sta_dclzSe", "absolute", "17", "162", "130", "27", null, null, this);
            obj.set_taborder("46");
            obj.set_text("근태구분");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_WFDA_Label11", "absolute", "501", "162", "541", "105", null, null, this);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_ofcpsSe", "absolute", "921", "105", "117", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_readonly("true");
            obj.set_innerdataset("@ds_ofcpsSe");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");

            obj = new TextArea("txt_rmConfm", "absolute", "504", "165", "535", "99", null, null, this);
            obj.set_taborder("14");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_ovtimeWorkDe", "absolute", "149", "191", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_cssclass("cal_WF_Readonly");
            obj.set_readonly("true");

            obj = new Edit("edt_clsfSe", "absolute", "813", "105", "106", "21", null, null, this);
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
            obj.set_taborder("48");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "199", "243", "21", "21", null, null, this);
            obj.set_taborder("49");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_beginTM", "absolute", "149", "217", "50", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_mask("##:##");
            obj.set_readonly("true");
            obj.set_type("string");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_emdTM", "absolute", "220", "217", "50", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_mask("##:##");
            obj.set_readonly("true");
            obj.set_type("string");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_realBeginTM", "absolute", "149", "243", "50", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_mask("##:##");
            obj.set_cssclass("msk_WF_Essential");
            obj.set_type("string");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_realEndTM", "absolute", "220", "243", "50", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_mask("##:##");
            obj.set_cssclass("msk_WF_Essential");
            obj.set_type("string");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1059, 284, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HRM090403_P1");
            		p.set_titletext("시간외근무확인[상세]");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edt_empNo","value","ds_ovTimeWorkCnfirmDtls","EMPNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_empNm","value","ds_ovTimeWorkCnfirmDtls","EMPNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_deptNm","value","ds_ovTimeWorkCnfirmDtls","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","mae_SANCTN_RECOM_DE","value","DS_WRKCP","DRFT_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","cmb_ofcpsSe","value","ds_ovTimeWorkCnfirmDtls","OFCPS_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_clsfSe","value","ds_ovTimeWorkCnfirmDtls","CLSF_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","cal_ovtimeWorkDe","value","ds_ovTimeWorkCnfirmDtls","OVTIME_WORK_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","txt_rmConfm","value","ds_ovTimeWorkCnfirmDtls","RM_CONFM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","msk_beginTM","value","ds_ovTimeWorkCnfirmDtls","BEGIN_TM_1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","msk_emdTM","value","ds_ovTimeWorkCnfirmDtls","END_TM_1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","msk_realBeginTM","value","ds_ovTimeWorkCnfirmDtls","BEGIN_TM_2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","msk_realEndTM","value","ds_ovTimeWorkCnfirmDtls","END_TM_2");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HRM070117_P1.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("HRM070117_P1.xfdl", "mis_lib::misUtil.xjs");
        this.registerScript("HRM070117_P1.xfdl", function() {
        /***********************************************************************
         * 화면ID   : HRM070117_P1
         * 화면명   : 시간외근무확인[상세]
         * 화면설명 : 시간외근무확인[상세]를 관리한다.
         * 작성일   : 2015.12.10
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
        this.HRM070117_P1_onload = function(obj,e)
        {
        	this.fv_objForm = this.parent.arg_0;
        	var v_popupMsg1 = this.parent.arg_1;
        	var v_popupMsg2 = this.parent.arg_2;
        	var v_popupMsg3 = this.parent.arg_3;
        	var v_popupMsg4 = this.parent.arg_4;
        	
        	this.ds_cond.setColumn(0, "EMPNO"         , v_popupMsg1);
        	this.ds_cond.setColumn(0, "OVTIME_WORK_DE", v_popupMsg2);
        	this.ds_cond.setColumn(0, "REQST_AT"      , v_popupMsg3);
        	this.ds_cond.setColumn(0, "BEGIN_TM_1"    , v_popupMsg4);

        	this.fn_loadCombo();
        	
        	this.fn_cudSetup();		// 전자결재 추가 (2016.7)
        	
        	this.fn_transaction("ds_ovTimeWorkCnfirmDtls");
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
        	
        	var draftKnd = this.parent.arg_5;	// 전자결재 추가(기안상태)
        	
        	var bEnable = (draftKnd == "1" || draftKnd == "9") ? false : true;
        	
        	this.btn_save.set_enable(bEnable);
        	this.btn_sanction.set_enable(bEnable);
         }

        /***********************************************************************
        * Transaction 영역 시작
        ************************************************************************/
        /***********************************************************************
         * Transaction 관련 이벤트 핸들러 
         **********************************************************************/

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
        	if (!this.comUtils.isDatasetUpdated(this.ds_ovTimeWorkCnfirmDtls)){
        		this.gfn_message("comm.데이터.변경.없음");
        		return false;
        	}
        	// validation 체크
        	if(!this.gfn_checkValidation_NoUpdChk(this.ds_ovTimeWorkCnfirmDtls, this.ds_validation)) {
        		return;
        	}
        	
        	// 시간 체크
        	var beginTM = this.ds_ovTimeWorkCnfirmDtls.getColumn(0, "BEGIN_TM_2");
        	var endTM   = this.ds_ovTimeWorkCnfirmDtls.getColumn(0, "END_TM_2");
        	if(beginTM.indexOf(" ") > -1) {
        		this.gfn_message("errors.항목.입력값.범위", "실제 시작시각|00:00|23:59");
        		return false;
        	}
        	if(endTM.indexOf(" ") > -1) {
        		this.gfn_message("errors.항목.입력값.범위", "실제 종료시각|00:00|23:59");
        		return false;
        	}
        	
        	if(this.gfn_message("confirm.저장.여부")) {
        		this.fn_transaction("saveOvTimeWorkCnfirmCUD");
        	}
        }

        /**********************************************************************
         * CALL TRANSACTION 영역
         **********************************************************************/
        this.fn_transaction = function(strSvcId)
        {
        	switch (strSvcId) {
        		case "ds_ovTimeWorkCnfirmDtls":		// 시간외근무확인 상세조회
        			var sController   	= "hsco/mis/hrm/HRM070117/selectOvTimeWorkCnfirmR.do";
        			var sInDatasets   	= "input1=ds_cond";
        			var sOutDatasets  	= "ds_ovTimeWorkCnfirmDtls=output1";
        			break;
        		case "saveOvTimeWorkCnfirmCUD": 	// 저장(U)
        			var sController   	= "hsco/mis/hrm/HRM070117/saveOvTimeWorkCnfirmCUD.do";
        			var sInDatasets   	= "input1=ds_ovTimeWorkCnfirmDtls:U";
        			var sOutDatasets  	= "";
        			break;
        		case "approve":						// 전자결재
        			var sController   	= "hsco/mis/hrm/HRM070117/approve.do";	
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
         			case "ds_ovTimeWorkCnfirmDtls": 		// 조회(시간외근무확인상세)
        // 				this.cal_ovtimeWorkDe.set_cssclass('cal_WF_Readonly');
        // 				this.cal_ovtimeWorkDe.set_readonly(true);
        // 				this.msk_beginTM.set_cssclass('msk_WF_Readonly');
        // 				this.msk_beginTM.set_readonly(true);
        				// 추후 전자결재상태(00 기안-서명전) 외에는 readonly로 바꾸자.
        // 				this.cmb_vhcle.set_cssclass('edt_WF_Readonly');
        // 				this.cmb_vhcle.set_readonly(true);
        // 				this.cal_useDe.set_cssclass('cal_WF_Readonly');
        // 				this.cal_useDe.set_readonly(true);
        // 				this.msk_useTm.set_cssclass('msk_WF_Readonly');
        // 				this.msk_useTm.set_readonly(true);
         				break;	
        			case "saveOvTimeWorkCnfirmCUD": 		// 저장하기
        				this.gfn_message("success.처리.성공", null, null, null, this.fn_popupCallback);
        				break;
        			case "approve":							// 전자결재
        				var sanctnNO = this.ds_approve.getColumn(0, "SANCTN_NO");
        				
        				this.ds_ovTimeWorkCnfirmDtls.set_updatecontrol(false);
        				this.ds_ovTimeWorkCnfirmDtls.setColumn(this.ds_ovTimeWorkCnfirmDtls.rowposition, "SANCTN_NO", sanctnNO);
        				this.ds_ovTimeWorkCnfirmDtls.set_updatecontrol(true);
        				
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
        	this.fn_transaction("ds_ovTimeWorkCnfirmDtls");
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
        	var nRow = this.ds_ovTimeWorkCnfirmDtls.rowposition;
        	var sanctnknd = this.ds_ovTimeWorkCnfirmDtls.getColumn(nRow, "SANCTN_KND");
        	var beginTm2  = this.ds_ovTimeWorkCnfirmDtls.getColumn(nRow, "BEGIN_TM_2");
        	var endTm2    = this.ds_ovTimeWorkCnfirmDtls.getColumn(nRow, "END_TM_2");
        	
        	// 전자결재 상태 체크 2016.7
        	// 기안상태 COM022 (0:기안전 1:기안 9:기안오류)
        	// 결재상태 COM023 (1: 진행 2:보류 4:대기 8:협조대기 32:삭제 256:완료 512:반송 4096:취소 1024:참조 NUL:상신전 DUP:결재중복)
        	// 기안전인것 : 재상신 및 수정/삭제
        	// 결재상태가 상신전 외는 신규로 다시 진행.
        	var sanctnKnd = this.ds_ovTimeWorkCnfirmDtls.getColumn(nRow, "SANCTN_STS");

        	switch (sanctnKnd) {
        		case "1": case "2": case "4": case "8": case "1024": case "DUP":
        		this.gfn_message("comm.결재.진행");
        		return false;
        		
        		case "32": case "256": case "512": case "4096": 
        		this.gfn_message("comm.결재.완료");
        		return false;
        		
        		default:
        	}
        	
        // 	if(!this.gfn_checkValidation(this.ds_ovTimeWorkCnfirmDtls, this.ds_validation)) {
        // 		return;
        // 	}
        	if(this.comUtils.isNull(beginTm2)) {
        		this.gfn_message("comm.항목.입력.을", "실제시작시각");
        		return false;
        	}
        	if(this.comUtils.isNull(endTm2)) {
        		this.gfn_message("comm.항목.입력.을", "실제종료시각");
        		return false;
        	}
        	if(sanctnknd != '0'){
        		this.gfn_message("comm.결재.진행");
        		return false;
        	}	
        	if(Ex.util.isUpdated(this.ds_ovTimeWorkCnfirmDtls)){
        		this.gfn_message("comm.정보.저장.요청", "수정된");
        		return false;
        	}
        	
        	var filds = new Array(9);
        	var ovTimeWorkDe = this.ds_ovTimeWorkCnfirmDtls.getColumn(nRow, "OVTIME_WORK_DE");
        	var beginTm1     = this.ds_ovTimeWorkCnfirmDtls.getColumn(nRow, "BEGIN_TM_1");
        	var endTm1       = this.ds_ovTimeWorkCnfirmDtls.getColumn(nRow, "END_TM_1");
         	var beginTm2     = this.ds_ovTimeWorkCnfirmDtls.getColumn(nRow, "BEGIN_TM_2");
         	var endTm2       = this.ds_ovTimeWorkCnfirmDtls.getColumn(nRow, "END_TM_2");
        	var rmConfm      = this.ds_ovTimeWorkCnfirmDtls.getColumn(nRow, "RM_CONFM");
        	var deptCode     = this.ds_ovTimeWorkCnfirmDtls.getColumn(nRow, "DEPT_CODE");
        	var deptNm       = this.ds_ovTimeWorkCnfirmDtls.getColumn(nRow, "DEPT_NM");
        	var empNo        = this.ds_ovTimeWorkCnfirmDtls.getColumn(nRow, "EMPNO");
        	var empNm        = this.ds_ovTimeWorkCnfirmDtls.getColumn(nRow, "EMPNM");
        	var sanctnNo     = this.ds_ovTimeWorkCnfirmDtls.getColumn(nRow, "SANCTN_NO");
        	var reqstAt      = this.ds_ovTimeWorkCnfirmDtls.getColumn(nRow, "REQST_AT");
        	
        	beginTm2 = beginTm2.substring(0, 2) + ':' + beginTm2.substring(2, 4);
        	endTm2   = endTm2.substring(0, 2) + ':' + endTm2.substring(2, 4);
        	
        	filds[0] = ovTimeWorkDe.substr(0, 4) + '-' + ovTimeWorkDe.substr(4, 2) + '-' + ovTimeWorkDe.substr(6, 2);
        	filds[1] = beginTm1;
        	filds[2] = endTm1;
        	filds[3] = beginTm2;
        	filds[4] = endTm2;
        	filds[5] = rmConfm;
        	filds[6] = deptNm;
        	filds[7] = empNm;
        	
        	var dataValue = filds.join("|");
        	var dataTitle = "시간외근무확인서";
        	var title     = "시간외근무확인서";
        	
        	this.ds_approve.clearData();
        	var nRow = this.ds_approve.addRow();
        	this.ds_approve.setColumn(nRow, "TITLE"         , title);
        	this.ds_approve.setColumn(nRow, "DATA_TITLE"    , dataTitle);
        	this.ds_approve.setColumn(nRow, "DATA_VALUE"    , dataValue);
        	this.ds_approve.setColumn(nRow, "DEPT_CD"       , this.ds_ovTimeWorkCnfirmDtls.getColumn(0,"DEPT_CODE"));
        	this.ds_approve.setColumn(nRow, "EMP_CD"        , this.ds_ovTimeWorkCnfirmDtls.getColumn(0,"EMPNO"));
        	this.ds_approve.setColumn(nRow, "EMPNO"         , empNo);
        	this.ds_approve.setColumn(nRow, "OVTIME_WORK_DE", ovTimeWorkDe);
        	this.ds_approve.setColumn(nRow, "REQST_AT"      , reqstAt);
        	this.ds_approve.setColumn(nRow, "BEGIN_TM_1"    , beginTm1);
        	this.ds_approve.setColumn(nRow, "SANCTN_NO"     , sanctnNo);
        	
        	if(this.gfn_message("comm.행위여부", "결재를 상신"))	{
        		this.fn_transaction("approve");
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_ovTimeWorkCnfirmDtls.addEventHandler("oncolumnchanged", this.ds_reqstDtls_oncolumnchanged, this);
            this.ds_ovTimeWorkCnfirmDtls.addEventHandler("cancolumnchange", this.ds_reqstDtls_cancolumnchange, this);
            this.ds_applcntPerson.addEventHandler("oncolumnchanged", this.ds_reqstDtls_oncolumnchanged, this);
            this.ds_applcntPerson.addEventHandler("cancolumnchange", this.ds_reqstDtls_cancolumnchange, this);
            this.addEventHandler("onload", this.HRM070117_P1_onload, this);
            this.btn_close01.addEventHandler("onclick", this.btn_close01_onclick, this);
            this.btn_close02.addEventHandler("onclick", this.btn_close02_onclick, this);
            this.btn_save.addEventHandler("onclick", this.fn_save, this);
            this.btn_sanction.addEventHandler("onclick", this.fn_sanction, this);
            this.cal_ovtimeWorkDe.addEventHandler("oneditclick", this.cal_altrtvWorkDe_oneditclick, this);

        };

        this.loadIncludeScript("HRM070117_P1.xfdl");

       
    };
}
)();
