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
                this.set_name("HRM070116");
                this.set_classname("HRM070116");
                this.set_titletext("시간외근무신청");
                this._setFormPosition(0,0,1059,735);
            }
            this.style.set_font("10 Gulim red");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cond", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"OVTMWRK_ST_DE\" type=\"STRING\" size=\"256\"/><Column id=\"OVTMWRK_ED_DE\" type=\"STRING\" size=\"256\"/><Column id=\"OVTMWRK_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ovtmwrk", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"OVTMWRK_DE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"AFTFAT_SANCTN_AT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_BEGIN_TM\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_END_TM\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_BEGIN_TM\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_END_TM\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CNFIRM_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CNFIRM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CNFRMR_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DRCTR\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_PURPS\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_STDR_DE\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_KND\" type=\"STRING\" size=\"256\"/><Column id=\"SANC_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NGHT_WRK_AT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_PURPS2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">OVTMWRK_DE</Col><Col id=\"msgId\">초과근무일자</Col><Col id=\"notNull\">Y</Col><Col id=\"lengthChkGb\">LE</Col><Col id=\"nlength\">8</Col><Col id=\"compId\">ds_ovtmwrk</Col><Col id=\"PK\"/></Row><Row><Col id=\"compId\">ds_ovtmwrk</Col><Col id=\"colId\">DEPT_CODE</Col><Col id=\"msgId\">부서</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">EMPNO</Col><Col id=\"msgId\">사번</Col><Col id=\"lengthChkGb\">LE</Col><Col id=\"nlength\">8</Col><Col id=\"compId\">ds_ovtmwrk</Col><Col id=\"notNull\">Y</Col><Col id=\"PK\"/></Row><Row><Col id=\"compId\">ds_ovtmwrk</Col><Col id=\"colId\">REQST_BEGIN_TM</Col><Col id=\"msgId\">시작시각</Col><Col id=\"notNull\">Y</Col><Col id=\"lengthChkGb\">EQ</Col><Col id=\"nlength\">4</Col></Row><Row><Col id=\"compId\">ds_ovtmwrk</Col><Col id=\"colId\">REQST_END_TM</Col><Col id=\"msgId\">종료시각</Col><Col id=\"notNull\">Y</Col><Col id=\"lengthChkGb\">EQ</Col><Col id=\"nlength\">4</Col></Row><Row><Col id=\"colId\">REQST_BEGIN_TM</Col><Col id=\"msgId\">시작시각^23:59</Col><Col id=\"lengthChkGb\"/><Col id=\"nlength\"/><Col id=\"compId\">ds_ovtmwrk</Col><Col id=\"notNull\"/><Col id=\"to\">2359</Col><Col id=\"from\">REQST_BEGIN_TM</Col></Row><Row><Col id=\"colId\">REQST_END_TM</Col><Col id=\"msgId\">종료시각^23:59</Col><Col id=\"lengthChkGb\"/><Col id=\"nlength\"/><Col id=\"compId\">ds_ovtmwrk</Col><Col id=\"notNull\"/><Col id=\"to\">2359</Col><Col id=\"from\">REQST_END_TM</Col></Row><Row><Col id=\"colId\">WORK_DRCTR</Col><Col id=\"msgId\">근무지시자</Col><Col id=\"lengthChkGb\">LE</Col><Col id=\"nlength\">100</Col><Col id=\"compId\">ds_ovtmwrk</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">WORK_PURPS</Col><Col id=\"msgId\">근무목적</Col><Col id=\"lengthChkGb\">LE</Col><Col id=\"nlength\">100</Col><Col id=\"compId\">ds_ovtmwrk</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">RM</Col><Col id=\"msgId\">비고</Col><Col id=\"lengthChkGb\">LE</Col><Col id=\"nlength\">100</Col><Col id=\"compId\">ds_ovtmwrk</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_hrm018", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ovtmwrkCopy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"OVTMWRK_DE\" type=\"STRING\" size=\"256\"/><Column id=\"OVTMWRK_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"AFTFAT_SANCTN_AT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_BEGIN_TM\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_END_TM\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_BEGIN_TM\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_END_TM\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CNFIRM_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CNFIRM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CNFRMR_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DRCTR\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_PURPS\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_STDR_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ovtmwrkHvof", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HVOF\" type=\"STRING\" size=\"256\"/><Column id=\"FLXWK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_hrm100", this);
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


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "0", null, "33", "28", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Box");
            this.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "0", "0", "15", "33", null, null, this.div_search);
            obj.set_taborder("26");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_OVTMWRK_ED_DE", "absolute", "197", "6", "104", "19", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Essential");
            obj = new Static("Static04", "absolute", "184", "6", "10", "19", null, null, this.div_search);
            obj.set_taborder("28");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_OVTMWRK_ST_DE", "absolute", "79", "6", "100", "19", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Essential");
            obj = new Static("sta_gnfdDe", "absolute", "15", "6", "64", "19", null, null, this.div_search);
            obj.set_taborder("30");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_empnm", "absolute", "320", "6", "35", "19", null, null, this.div_search);
            obj.set_taborder("31");
            obj.set_text("부서");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("div_DeptComp", "absolute", "357", "5", "194", "21", null, null, this.div_search);
            obj.set_taborder("3");
            obj.set_async("false");
            obj.set_enable("false");
            obj.set_url("com::deptCode.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "303", "-1", "15", "33", null, null, this.div_search);
            obj.set_taborder("35");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "740", "-1", "15", "33", null, null, this.div_search);
            obj.set_taborder("39");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "0", "33", "1031", "10", null, null, this);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bsrpDtls", "absolute", "0", "43", "120", "19", null, null, this);
            obj.set_taborder("2");
            obj.set_text("초과근무신청");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "62", null, "5", "0", null, this);
            obj.set_taborder("3");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "1031", "0", "15", "735", null, null, this);
            obj.set_taborder("4");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", null, "0", "13", "735", "0", null, this);
            obj.set_taborder("5");
            obj.set_text("스\r\n크\r\n롤\r\n13");
            obj.set_visible("false");
            obj.style.set_background("#d07b173c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ovtmwrk", "absolute", "0", "234", null, null, "28", "0", this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_ovtmwrk");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_scrollbars("autoboth");
            obj.set_autofittype("col");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"85\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"110\"/><Column size=\"350\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"expr:comp.parent.allChk\"/><Cell col=\"1\" rowspan=\"2\" text=\"결재상태\"/><Cell col=\"2\" rowspan=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"근무일\"/><Cell col=\"3\" colspan=\"3\" text=\"근무자\"/><Cell col=\"6\" rowspan=\"2\" text=\"근무기준시간\"/><Cell col=\"7\" colspan=\"3\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"신청정보\"/><Cell col=\"10\" rowspan=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"근무지시자\"/><Cell col=\"11\" rowspan=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"근무목적\"/><Cell row=\"1\" col=\"3\" text=\"부서명\"/><Cell row=\"1\" col=\"4\" text=\"사번\"/><Cell row=\"1\" col=\"5\" text=\"성명\"/><Cell row=\"1\" col=\"7\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"시작\"/><Cell row=\"1\" col=\"8\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"종료\"/><Cell row=\"1\" col=\"9\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"시간\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:['0','2','3'].indexOf(SANCTN_KND) &gt; -1 ? &quot;checkbox&quot; : &quot;none&quot;\" text=\"bind:SANC_CHK\"/><Cell col=\"1\" displaytype=\"image\" text=\"expr:comp.parent.fn_get_imgUrl(SANCTN_KND)\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'date' : 'none'\" style=\"align:center middle;\" text=\"bind:OVTMWRK_DE\" maskchar=\"yyyy-MM-dd ddd\" calendardisplay=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'display' : 'edit'\" calendardisplaynulltype=\"expr:yyyy-MM-dd ddd\"/><Cell col=\"3\" style=\"align:center middle;\" text=\"bind:DEPT_NM\"/><Cell col=\"4\" style=\"align:center middle;\" text=\"bind:EMPNO\" expandshow=\"expr:['0','2','3'].indexOf(SANCTN_KND) &gt; -1 ? 'show' : 'hide'\" expandsize=\"20\"/><Cell col=\"5\" style=\"align:center middle;\" text=\"bind:EMPNM\"/><Cell col=\"6\" displaytype=\"combo\" text=\"bind:WORK_STDR_DE\" combodataset=\"ds_hrm018\" combocodecol=\"CODE\" combodatacol=\"ETC3\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"expr:['0','2','3'].indexOf(SANCTN_KND) &gt; -1 ? 'mask' : 'none'\" style=\"align:center middle;\" text=\"bind:REQST_BEGIN_TM\" mask=\"##:##\" editdisplay=\"expr:['0','2','3'].indexOf(SANCTN_KND) &gt; -1 ? 'display' : 'edit'\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"expr:['0','2','3'].indexOf(SANCTN_KND) &gt; -1 ? 'mask' : 'none'\" style=\"align:center middle;\" text=\"bind:REQST_END_TM\" mask=\"##:##\" editdisplay=\"expr:['0','2','3'].indexOf(SANCTN_KND) &gt; -1 ? 'display' : 'edit'\"/><Cell col=\"9\" text=\"bind:REQST_TIME\" mask=\"##:##\"/><Cell col=\"10\" edittype=\"expr:['0','2','3'].indexOf(SANCTN_KND) &gt; -1 ? 'normal' : 'none'\" style=\"align:left middle;\" text=\"bind:WORK_DRCTR\" editdisplay=\"expr:['0','2','3'].indexOf(SANCTN_KND) &gt; -1 ? 'display' : 'edit'\" tooltiptext=\"bind:WORK_DRCTR\"/><Cell col=\"11\" edittype=\"expr:['0','2','3'].indexOf(SANCTN_KND) &gt; -1 ? 'normal' : 'none'\" style=\"align:left middle;color2: ;\" text=\"bind:WORK_PURPS\" expr=\"expr:(WORK_PURPS == null || WORK_PURPS == &quot;&quot;) ? WORK_PURPS2 : WORK_PURPS\" wordwrap=\"none\" editdisplay=\"expr:['0','2','3'].indexOf(SANCTN_KND) &gt; -1 ? 'display' : 'edit'\" tooltiptext=\"bind:WORK_PURPS\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "0", "67", null, "167", "28", null, this);
            obj.set_taborder("17");
            obj.set_text("Div00");
            obj.style.set_background("white");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "0", null, "32", "0", null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("※공지사항\r\n근로기준법 및 공사 취업규정 제16조에 의하여 초과근무는 휴일을 포함하여 1주일에 12시간을 초과 할 수 없습니다.");
            obj.style.set_font("9 Gulim");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "0", "40", null, "21", "0", null, this.Div00);
            obj.set_taborder("1");
            obj.set_text("초과근무 결재 상신시 누적시간을 반드시 확인하시기 바랍니다.");
            obj.style.set_color("red");
            obj.style.set_font("9 Gulim");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "0", "67", null, "21", "0", null, this.Div00);
            obj.set_taborder("2");
            obj.set_text("□ 근로기준법 주요내용");
            obj.style.set_color("black");
            obj.style.set_font("9 Gulim bold");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "0", "109", null, "21", "0", null, this.Div00);
            obj.set_taborder("3");
            obj.set_text("2. 근로기준법 제110조(벌칙)");
            obj.style.set_color("red");
            obj.style.set_font("9 Gulim bold");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "141", null, "21", "0", null, this.Div00);
            obj.set_taborder("4");
            obj.set_text("근로기준법 관련 문의 : 경영지원팀 노무담당(031-8012-7765)");
            obj.style.set_font("9 Gulim");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "178", "109", null, "21", "0", null, this.Div00);
            obj.set_taborder("5");
            obj.set_text("2년 이하의 징역 또는 2천만원 이하의 벌금에 처한다.");
            obj.style.set_color("red");
            obj.style.set_font("9 Gulim");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "0", "88", null, "21", "0", null, this.Div00);
            obj.set_taborder("6");
            obj.set_text("1. 근로기준법 제53조 제1항(연장 근로의 제한)");
            obj.style.set_font("9 Gulim bold");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "284", "88", null, "21", "-8", null, this.Div00);
            obj.set_taborder("7");
            obj.set_text("당사자 간에 합의하면");
            obj.style.set_font("9 Gulim");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "406", "88", null, "21", "5", null, this.Div00);
            obj.set_taborder("8");
            obj.set_text("1주 간에 12시간을 한도");
            obj.style.set_font("9 Gulim bold");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "544", "88", null, "21", "5", null, this.Div00);
            obj.set_taborder("9");
            obj.set_text("로 근로시간을 연장할 수 있다.[시행일 : 2018.7.1.]");
            obj.style.set_font("9 Gulim");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "414", "105", "130", "1", null, null, this.Div00);
            obj.set_taborder("10");
            obj.set_text("Static05");
            obj.style.set_border("1px solid black");
            this.Div00.addChild(obj.name, obj);


            
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
            obj = new Layout("default", "", 1031, 167, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("17");
            		p.set_text("Div00");
            		p.style.set_background("white");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1059, 735, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HRM070116");
            		p.set_titletext("시간외근무신청");
            		p.style.set_font("10 Gulim red");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_search.cal_OVTMWRK_ST_DE","value","ds_cond","OVTMWRK_ST_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_search.cal_OVTMWRK_ED_DE","value","ds_cond","OVTMWRK_ED_DE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "com::deptCode.xfdl");
        };
        
        // User Script
        this.addIncludeScript("HRM070116.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("HRM070116.xfdl", "mis_lib::misUtil.xjs");
        this.registerScript("HRM070116.xfdl", function() {
        /***********************
         * TODO
         * **********
         1. 근무자의 경우 초기입력값을 접속자로 주어야 함
         2. 평일근무기준 컬럼은 유연근무가 개발된 이후에 조치하겟음
         3. 부서의 검색조건은 기본적으로 자신의 부서
         4. 결재상태는 전자결재 기능이 어느정도 된 이후에 처리하겠음
         5. 보수규정 5장 50조에 의거하여, 근무구분에 대한 제한 추가필요
        ************************/

        

        /***********************************************************************
         * Script Include 
         ************************************************************************/

        //include "lib::comInclude.xjs";
        //include "mis_lib::misUtil.xjs";

        
        /***********************************************************************
         * 화면 변수 선언부
         ************************************************************************/
        this.nRowPos = 0;
        this.allChk = '0';

        /***********************************************************************
         * onInit / onLoad 영역
         ***********************************************************************/

        this.HRM070116_oninit = function(obj,e)
        {

        }

        
        this.HRM070116_onload = function(obj,e)
        {
        	// Form 초기화	
        	this.fn_init_form();
        	
        	// DataSet 초기화
        	this.fn_init_dataset();
        	
        	// 공지팝업
        	var parm = {
        		 arg_0      : this
        	};
        	this.gfn_popup("noticePopup", 400, 400, "공지팝업", parm, "mis_hrm::HRM070116_P01.xfdl", "", true);
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
        	this.gfn_initForm(this);
        	this.fn_misFormInit(this);
        	
        	// 오브젝트 등에 대한 처리
        	this.div_search.div_DeptComp.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");
        	
        	// 공통코드
        	var comboParams = [
        	     ["ds_hrm018" , "HRM018", "1", ""],		// ds_hrm018 : 유연근무구분(근무기준시간)
        	     ["ds_hrm100" , "HRM100", "1", ""],		// ds_hrm100 : 예/아니오
        	];
        	var callback = function (svcId, errorCode, errorMsg) {
        		
        		// 유연근무구분 default 값
        // 		this.ds_hrm018.insertRow(0);
        // 		this.ds_hrm018.setColumn(0, "CODE", null);
        // 		this.ds_hrm018.setColumn(0, "ETC3", "09:00~18:00");
        		
        		// 초기검색조건
        		this.ds_cond.clearData();
        		var nRow = this.ds_cond.addRow();
        		
        		var todayMonth = this.comUtils.getClientDate("YYYYMM");
        		var today     = this.comUtils.getClientDate("YYYYMMDD");
        		this.ds_cond.setColumn(nRow, "OVTMWRK_ST_DE", today);
        		this.ds_cond.setColumn(nRow, "OVTMWRK_ED_DE", today             );
        		this.ds_cond.setColumn(nRow, "DEPT_CODE",     this.gfn_getDeptId());
        		this.ds_cond.setColumn(nRow, "DEPT_NM",       this.gfn_getDeptName());
        		
        		this.fn_search();
        	};
        	this.gfn_comboLoad (comboParams, callback);
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
        	// 조건 Dataset 외에 초기화가 필요한 Dataset에 대한 초기화 코드를 추가
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

        

        /***********************************************************************
         * Transaction 관련 이벤트 핸들러 
         **********************************************************************/

        /*
         * 함수명  	: fn_search
         * 설명 		: 조회 이벤트 처리
         *
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_search();
         */
        this.fn_search = function()
        {
        	this.allChk = '0';
        	
        	this.ds_ovtmwrk.clearData();
        	
            this.fn_transaction("selectOvtmwrk");
        }

        
        /*
         * 함수명  	: fn_save
         * 설명 		: 저장 이벤트 처리
         *
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_save();
         */
        this.fn_save = function()
        {
        	// validation 체크
        	if(!this.gfn_checkValidation(this.ds_ovtmwrk, this.ds_validation)) {
        		return;
        	}
        	
        	// save
        	if(this.gfn_message("confirm.저장.여부"))	{
        		this.nRowPos = this.ds_ovtmwrk.rowposition;
        		this.fn_transaction("saveOvtmwrk");
        	}
        }

        
        this.fn_sanction = function()
        {
        	if(this.comUtils.isDatasetUpdated(this.ds_ovtmwrk)) {
        		this.gfn_message("comm.정보.저장.요청", "초과근무 신청");
        		return;
        	}

        	var cnt 			= 0;
        	var info			= new Array(5);
        	var arrSancData 	= new Array(59);
        	var arrSancSubData  = new Array();
        	
        	for(var i = this.ds_ovtmwrk.getRowCount() -1; i >= 0; i--) {
        		if(this.ds_ovtmwrk.getColumn(i, "SANC_CHK") == '1') {
        			info= [
        				 this.fn_dateStr(this.ds_ovtmwrk.getColumn(i, "OVTMWRK_DE"),".")	// 년월일
        				,this.ds_ovtmwrk.getColumn(i, "CLSF_NM")							// 직급
        				,this.ds_ovtmwrk.getColumn(i, "EMPNM")								// 성명
        				,this.fn_time(this.ds_ovtmwrk.getColumn(i, "REQST_BEGIN_TM"))+"~"+this.fn_time(this.ds_ovtmwrk.getColumn(i, "REQST_END_TM"))	// 근무시간
        				,this.ds_ovtmwrk.getColumn(i, "WORK_PURPS")							// 근무내용
        			];

        			if(cnt < 11) {
        				arrSancData[ 3 + cnt*5] = info[0];
        				arrSancData[ 4 + cnt*5] = info[1];
        				arrSancData[ 5 + cnt*5] = info[2];
        				arrSancData[ 6 + cnt*5] = info[3];
        				arrSancData[ 7 + cnt*5] = info[4];
        			} else {
        				arrSancSubData.push(info[0]);
        				arrSancSubData.push(info[1]);
        				arrSancSubData.push(info[2]);
        				arrSancSubData.push(info[3]);
        				arrSancSubData.push(info[4]);
        			}
        			cnt++;
        		}
        	}

        	if(cnt == 0) {
        		this.gfn_message("info.처리불가","시간외근무 내역이 선택되지 않았습니다.");
        		return;
        	}
        	
        	arrSancData[0] = "초과근무계획(" + this.ds_cond.getOrgColumn(0,"DEPT_NM") +")"; // 결재제목
        	arrSancData[1] = this.ds_cond.getOrgColumn(0,"DEPT_NM"); 						  // 부서
        	arrSancData[2] = arrSancData[3] + ' ~ ' + info[0]; 			  					  // 작업년월
        	
        	this.fn_callHandySanc2(
        		 this						// context
        		,'0000000071'				// formId
        		,this.ds_ovtmwrk			// misDataset
        		,"TBHRM_OVTMWRK"			// tableName
        		,["OVTMWRK_DE", "SEQ"]		// tableKey
        		,arrSancData				// arrSancData
        		,arrSancSubData
        		,"SANC_CHK"
        	);
        }

        this.fn_time = function(time)
        {
        	if(typeof time == 'undefined' || String(time).length != 4) {
        		return "";
        	}
        	return String(time).substr(0,2) + ":" + String(time).substr(2,2);
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
        		case "selectOvtmwrk":
        			var sController   	= "hsco/mis/hrm/HRM070116/selectOvtmwrk.do";
        			var sInDatasets   	= "input1=ds_cond";
        			var sOutDatasets  	= "ds_ovtmwrk=output1";
        			break;
        		case "saveOvtmwrk":
        			var sController   	= "hsco/mis/hrm/HRM070116/saveOvtmwrk.do";
        			var sInDatasets   	= "input1=ds_ovtmwrk:U";
        			var sOutDatasets  	= "";
        			break;
        		case "selectWorkTm":
        			var sController   	= "hsco/mis/hrm/HRM070116/selectWorkTm.do";
        			var sInDatasets   	= "input1=ds_ovtmwrkCopy";
        			var sOutDatasets  	= "ds_ovtmwrkHvof=output1";
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
        	
        	if (nErrorCode == '0'){
        		switch (strSvcId) {
        			case "selectOvtmwrk":		// ListMst 불러오기
        				if(this.ds_ovtmwrk.getRowCount() > 0 ){
        					this.ds_ovtmwrk.set_rowposition(this.nRowPos);
        					this.nRowPos = 0;
        				}
        				break;
        			case "saveOvtmwrk": 			// 저장하기(Mst)
        				this.fn_search();	
        				break;
        			case "selectWorkTm":
        				var nRow = this.ds_ovtmwrk.rowposition;
        				this.ds_ovtmwrk.setColumn(nRow, "WORK_STDR_DE",this.ds_ovtmwrkHvof.getColumn(0, "FLXWK"));
        				if(this.ds_ovtmwrkHvof.getColumn(0, "HVOF") == "000" || this.ds_ovtmwrkHvof.getColumn(0, "HVOF") == "001"){
        					switch(this.ds_ovtmwrkHvof.getColumn(0, "FLXWK")){
        						case "01":
        						case "04":
        							this.ds_ovtmwrk.setColumn(nRow, "REQST_BEGIN_TM", "1600");
        							this.ds_ovtmwrk.setColumn(nRow, "REQST_END_TM", "2000");
        							break;
        						case "02":
        						case "08":
        							this.ds_ovtmwrk.setColumn(nRow, "REQST_BEGIN_TM", "1700");
        							this.ds_ovtmwrk.setColumn(nRow, "REQST_END_TM", "2100");
        							break;
        						case "03":
        							this.ds_ovtmwrk.setColumn(nRow, "REQST_BEGIN_TM", "1400");
        							this.ds_ovtmwrk.setColumn(nRow, "REQST_END_TM", "1800");
        							break;
        						case "05":
        						case "07":
        							this.ds_ovtmwrk.setColumn(nRow, "REQST_BEGIN_TM", "1800");
        							this.ds_ovtmwrk.setColumn(nRow, "REQST_END_TM", "2200");
        							break;
        						case "06":
        							this.ds_ovtmwrk.setColumn(nRow, "REQST_BEGIN_TM", "1900");
        							this.ds_ovtmwrk.setColumn(nRow, "REQST_END_TM", "2200");
        							break;
        						case "09":
        							this.ds_ovtmwrk.setColumn(nRow, "REQST_BEGIN_TM", "2000");
        							this.ds_ovtmwrk.setColumn(nRow, "REQST_END_TM", "2200");
        							break;
        						case "11":
        							this.ds_ovtmwrk.setColumn(nRow, "REQST_BEGIN_TM", "1630");
        							this.ds_ovtmwrk.setColumn(nRow, "REQST_END_TM", "2030");
        							break;
        						case "12":
        							this.ds_ovtmwrk.setColumn(nRow, "REQST_BEGIN_TM", "1730");
        							this.ds_ovtmwrk.setColumn(nRow, "REQST_END_TM", "2130");
        							break;
        						case "15":
        							this.ds_ovtmwrk.setColumn(nRow, "REQST_BEGIN_TM", "1830");
        							this.ds_ovtmwrk.setColumn(nRow, "REQST_END_TM", "2230");
        							break;
        						case "16":
        							this.ds_ovtmwrk.setColumn(nRow, "REQST_BEGIN_TM", "1930");
        							this.ds_ovtmwrk.setColumn(nRow, "REQST_END_TM", "2330");
        							break;
        					}
        				} else {
        					this.ds_ovtmwrk.setColumn(nRow, "REQST_BEGIN_TM", "0900");
        					this.ds_ovtmwrk.setColumn(nRow, "REQST_END_TM", "1800");
        				}
        				this.ds_ovtmwrk.setColumn(nRow, "WORK_STDR_DE",this.ds_ovtmwrkHvof.getColumn(0, "FLXWK"));
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
        	// 사업코드 선택
        	if(sPopupId == "empPop") {
        		var dsTemp = new Dataset();
        		var loadCnt = dsTemp.loadXML(sReturn);
        		if(loadCnt) {
        			var empno    = dsTemp.getColumn(0, "EMPNO");
        			var empnm    = dsTemp.getColumn(0, "EMPNM");
        			var deptCode = dsTemp.getColumn(0, "DEPT_CODE");
        			var deptNm   = dsTemp.getColumn(0, "DEPT_NM");
        			
        			var oRow    = this.ds_ovtmwrk.rowposition;
        			this.ds_ovtmwrk.setColumn(oRow, "EMPNO",     empno    );	// 사원번호
        			this.ds_ovtmwrk.setColumn(oRow, "EMPNM",     empnm    );	// 사원명
        			this.ds_ovtmwrk.setColumn(oRow, "DEPT_CODE", deptCode );	// 부서코드
        			this.ds_ovtmwrk.setColumn(oRow, "DEPT_NM",   deptNm   );	// 부서명
        			
        			this.ds_ovtmwrkCopy.clearData();
        			this.ds_ovtmwrkCopy.addRow();
        			this.ds_ovtmwrkCopy.copyRow(0, this.ds_ovtmwrk, this.ds_ovtmwrk.rowposition);
        			this.fn_transaction("selectWorkTm");
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
        * 1. 공통함수 처리
        * 2. Grid 관련 이벤트 처리
        * 3. Object 관련 이벤트 처리
        * 4. Dataset 관련 이벤트 처리
        *
        ***********************************************************************/

        

        /**********************************************************************
        * 공통함수 처리
        ***********************************************************************/

        /*
         * 함수명  	: fn_insert
         * 설명 		: 추가
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_insert();
         */
        this.fn_insert = function()
        {
        	var today     = this.comUtils.getClientDate("YYYYMMDD");
        	
        	var nRow = this.ds_ovtmwrk.addRow();
        	this.ds_ovtmwrk.setColumn(nRow, "OVTMWRK_DE", today);
        	this.ds_ovtmwrk.setColumn(nRow, "DEPT_CODE" , '1');
        	this.ds_ovtmwrk.setColumn(nRow, "DEPT_NM"   , this.gfn_getDeptName());
        	this.ds_ovtmwrk.setColumn(nRow, "DEPT_CODE" , this.gfn_getDeptId());
        	this.ds_ovtmwrk.setColumn(nRow, "EMPNO"     , this.fn_getEmpno());;
        	this.ds_ovtmwrk.setColumn(nRow, "EMPNM"     , this.fn_getEmpnm());
        	this.ds_ovtmwrk.setColumn(nRow, "SANCTN_KND", "0");
        	this.ds_ovtmwrk.setColumn(nRow, "NGHT_WRK_AT", "0");
        	
        	var workPurps = "초과근로 누적시간 반드시 확인";
        	
        	this.ds_ovtmwrk.setColumn(nRow, "WORK_PURPS2", workPurps);
        	
        	
        	this.ds_ovtmwrkCopy.clearData();
        	this.ds_ovtmwrkCopy.addRow();
        	this.ds_ovtmwrkCopy.copyRow(0, this.ds_ovtmwrk, this.ds_ovtmwrk.rowposition);
        	this.fn_transaction("selectWorkTm");
        }

        
        /*
         * 함수명  	: fn_delete
         * 설명 		: 삭제
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_delete();
         */
        this.fn_delete = function()
        {
        	if(['1','4','5'].indexOf(this.ds_ovtmwrk.getColumn(this.ds_ovtmwrk.rowposition, "SANCTN_KND")) > -1) {
        		this.gfn_message("fail.삭제.불가", "결재가 진행중이거나 완료된 건은")
        	} else{
        		if(!this.gfn_message("confirm.삭제여부")) {
        			return false;	// 아니오
        		}
        		
        		this.ds_ovtmwrk.deleteRow(this.ds_ovtmwrk.rowposition);
        	}
        }

        
        /*
         * 함수명  	: fn_cancel
         * 설명 		: 취소
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_cancel();
         */
        this.fn_cancel = function()
        {
        	if(Ex.util.isUpdated(this.ds_ovtmwrk)) {
        		if(!this.gfn_message("confirm.변경.취소.여부")) {
        			return false;	// 아니오
        		}
        	}
        	
        	this.ds_ovtmwrk.reset();
        	this.ds_ovtmwrk.applyChange();
        }

        

        
        /**********************************************************************
        * Grid 관련 이벤트 처리
        ***********************************************************************/

        /*
         * 함수명  	: grd_ovtmwrk_onexpandup
         * 설명 		: Grid expand 이미지 클릭 후 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.grd_ovtmwrk_onexpandup(obj,e);
         */
        this.grd_ovtmwrk_onexpandup = function(obj,e)
        {
        	// 사원 선택
        	if(['1','4','5'].indexOf(this.ds_ovtmwrk.getColumn(this.ds_ovtmwrk.rowposition, "SANCTN_KND")) > -1) {
        		return;
        	}
        	
        	if(e.col == 4) {
        		var parm = {
        			 arg_0      : this
        			,deptCd   : this.ds_cond.getColumn(0, "DEPT_CODE")
        			,deptNm     : this.ds_cond.getColumn(0, "DEPT_NM")
        		};
        		this.gfn_popup("empPop", 400, 400, "사원 선택", parm, "com::empno_P01.xfdl", "fn_popupCallBack", true);
        	}
        }

        

        /**********************************************************************
        * Dataset 관련 이벤트 처리
        ***********************************************************************/

        /*
         * 함수명  	: ds_ovtmwrk_cancolumnchange
         * 설명 		: Dataset 데이터 변경 전 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.ds_ovtmwrk_cancolumnchange(obj,e);
         */
        this.ds_ovtmwrk_cancolumnchange = function(obj,e)
        {
        	var beginTm   = obj.getColumn(e.row, "REQST_BEGIN_TM");
        	var endTm     = obj.getColumn(e.row, "REQST_END_TM");
        	
        	
        	if(e.columnid == "REQST_BEGIN_TM" || e.columnid == "REQST_END_TM") {
        	
        		if (!this.comUtils.isTime(e.newvalue) && (this.comUtils.isNotNull(beginTm) || this.comUtils.isNotNull(endTm))){
        			alert("시간은 00:00~23:59 사이여야 합니다.");
        			return false;
        		}
        		
        		var btnTm = nexacro.toNumber(obj.getColumn(e.row, "REQST_BEGIN_TM"),0,0,0);
        		var endTm = nexacro.toNumber(obj.getColumn(e.row, "REQST_END_TM"),0,0,0);
        		
        	}
        	
        }

        

        /*
         * 함수명  	: ds_ovtmwrk_oncolumnchanged
         * 설명 		: 초과근무신청 근무구분 콤보 변경시 (수정필요)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.ds_ovtmwrk_oncolumnchanged(obj,e);
         */
        this.ds_ovtmwrk_oncolumnchanged = function(obj,e)
        {
        	var cRowposition = this.ds_ovtmwrk.rowposition;
        	if(e.columnid == "OVTMWRK_DE"){
        		this.ds_ovtmwrkCopy.clearData();
        		this.ds_ovtmwrkCopy.addRow();
        		this.ds_ovtmwrkCopy.copyRow(0, obj, e.row);
        		this.fn_transaction("selectWorkTm");
        	}else if(e.columnid == "REQST_BEGIN_TM") {
        		var newValue = e.newvalue.replace(/\s/g, '0');
        		this.ds_ovtmwrk.setColumn(e.row, e.columnid, newValue);
        	}else if(e.columnid == "REQST_END_TM") {
        		var newValue = e.newvalue.replace(/\s/g, '0');
        		this.ds_ovtmwrk.setColumn(e.row, e.columnid, newValue);
        	}
        }
        /**********************************************************************
        * 사용자 정의 함수
        ***********************************************************************/

        this.fn_calcWorkTime = function(inpRow)
        {
        	var beginTm = this.ds_ovtmwrk.getColumn(inpRow, "REQST_BEGIN_TM");
        	var endTm   = this.ds_ovtmwrk.getColumn(inpRow, "REQST_END_TM");
        	
        	// mask에서 공백을 전부 0으로 전제
        	beginTm.replace(" ", "0");
        	endTm.replace(" ", "0");
        	
        	var beginTm_hour   = nexacro.toNumber(beginTm.substr(0,2));
        	var beginTm_minute = nexacro.toNumber(beginTm.substr(2,2));
        	
        	var endTm_hour     = nexacro.toNumber(endTm.substr(0,2)  );
        	var endTm_minute   = nexacro.toNumber(endTm.substr(2,2)  );
        	
        	// 전체시간 계산
        	var calcTm;
        	if(beginTm_hour > endTm_hour) {
        		// 새벽에 퇴근한 경우
        		calcTm = ((endTm_hour+24) * 60 + endTm_minute) - (beginTm_hour * 60 + beginTm_minute);
        	} else {
        		// 당일 내에 퇴근한 경우
        		calcTm = (endTm_hour * 60 + endTm_minute) - (beginTm_hour * 60 + beginTm_minute);
        	}
        	
        	// 점심시간 제외
        	if(beginTm < 12 && endTm >= 13) {
        		calcTm -= 60;
        	}
        	
        	var rtnHour   = (Math.floor(calcTm / 60)+"").padLeft(2, "0");
        	var rtnMinute = (Math.floor(calcTm % 60)+"").padLeft(2, "0");
        	
        	return rtnHour + rtnMinute;
        }

        this.grd_ovtmwrk_onheadclick = function(obj,e)
        {
        	if(e.cell == 0) {
        		this.ds_ovtmwrk.set_updatecontrol(false);
        		this.ds_ovtmwrk.set_enableevent(false);
        		this.allChk = this.allChk == '1' ? '0' : '1';
        		for(var i = 0; i < this.ds_ovtmwrk.getRowCount(); i++) {
        			if(['0','2','3'].indexOf(this.ds_ovtmwrk.getColumn(i, "SANCTN_KND")) > -1) {
        				this.ds_ovtmwrk.setColumn(i, "SANC_CHK", this.allChk);
        			}
        		}
        		this.ds_ovtmwrk.set_enableevent(true);
        		this.ds_ovtmwrk.set_updatecontrol(true);
        	}
        	
        	if(e.cell == 9){
        		this.gfn_setGridCheckAll(obj, e);
        	}
        }

        this.fn_get_imgUrl = function(sanctnKnd)
        {
        	return this.gfn_getSanctnImgUrl(sanctnKnd);
        }

        this.grd_ovtmwrk_oncellclick = function(obj,e)
        {
        	
        	if(e.col == '0') {
        		var fRow = this.ds_ovtmwrk.rowposition;
        		if(['0','2','3'].indexOf(this.ds_ovtmwrk.getColumn(fRow, "SANCTN_KND")) > -1) {
        			var sancChk = this.ds_ovtmwrk.getColumn(fRow, "SANC_CHK");
        			sancChk = sancChk == '1' ? '0' : '1';
        			this.ds_ovtmwrk.set_updatecontrol(false);
        			this.ds_ovtmwrk.set_enableevent(false);
        			this.ds_ovtmwrk.setColumn(fRow, "SANC_CHK", sancChk);
        			this.ds_ovtmwrk.set_enableevent(true);
        			this.ds_ovtmwrk.set_updatecontrol(true);
        		}
        	}
        }

        this.grd_ovtmwrk_oncelldblclick = function(obj,e)
        {
        	if(e.col == 1) {
        		var nRow = this.ds_ovtmwrk.rowposition;
        		if(['1','2','3','4','5'].indexOf(this.ds_ovtmwrk.getColumn(nRow, "SANCTN_KND")) > -1) {
        			this.fn_openSanc(this.ds_ovtmwrk.getColumn(nRow, "SANCTN_NO"));
        		}
        	}
        }

        this.Static00_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_ovtmwrk.addEventHandler("cancolumnchange", this.ds_ovtmwrk_cancolumnchange, this);
            this.ds_ovtmwrk.addEventHandler("oncolumnchanged", this.ds_ovtmwrk_oncolumnchanged, this);
            this.addEventHandler("oninit", this.HRM070116_oninit, this);
            this.addEventHandler("onload", this.HRM070116_onload, this);
            this.grd_ovtmwrk.addEventHandler("onexpandup", this.grd_ovtmwrk_onexpandup, this);
            this.grd_ovtmwrk.addEventHandler("onheadclick", this.grd_ovtmwrk_onheadclick, this);
            this.grd_ovtmwrk.addEventHandler("oncellclick", this.grd_ovtmwrk_oncellclick, this);
            this.grd_ovtmwrk.addEventHandler("oncelldblclick", this.grd_ovtmwrk_oncelldblclick, this);
            this.Div00.Static00.addEventHandler("onclick", this.Static00_onclick, this);
            this.Div00.Static04.addEventHandler("onclick", this.Static00_onclick, this);
            this.Div00.Static06.addEventHandler("onclick", this.Static00_onclick, this);
            this.Div00.Static07.addEventHandler("onclick", this.Static00_onclick, this);
            this.Div00.Static02.addEventHandler("onclick", this.Static00_onclick, this);
            this.Div00.Static08.addEventHandler("onclick", this.Static00_onclick, this);
            this.Div00.Static09.addEventHandler("onclick", this.Static00_onclick, this);
            this.Div00.Static10.addEventHandler("onclick", this.Static00_onclick, this);
            this.Div00.Static01.addEventHandler("onclick", this.Static00_onclick, this);
            this.Div00.Static03.addEventHandler("onclick", this.Static00_onclick, this);

        };

        this.loadIncludeScript("HRM070116.xfdl");
        this.loadPreloadList();
       
    };
}
)();
