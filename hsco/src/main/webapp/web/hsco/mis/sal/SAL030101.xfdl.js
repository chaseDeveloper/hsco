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
                this.set_name("SAL030101");
                this.set_classname("SAL030101");
                this.set_titletext("급여계산");
                this._setFormPosition(0,0,1059,735);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_salary_se", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">정상</Col><Col id=\"CODE\">1</Col></Row><Row><Col id=\"CODE_NM\">정산</Col><Col id=\"CODE\">2</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"SALARY_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_YM\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DCSN_AT\" type=\"STRING\" size=\"256\"/><Column id=\"FYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_DDC_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond00</Col><Col id=\"colId\">PYMNT_YM</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col><Col id=\"type\"/><Col id=\"nlength\"/><Col id=\"from\"/><Col id=\"to\"/><Col id=\"lengthChkGb\"/><Col id=\"msgId\">지급년월</Col><Col id=\"expr\"/><Col id=\"func\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mtSalaryCreat", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SALARY_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_YM\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_NMPR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DCSN_AT\" type=\"STRING\" size=\"256\"/><Column id=\"DCSN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CALC_TOTAMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DDC_TOTAMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RL_RECPT_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"OPERTOR\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"OPERTOR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mtSalaryPymnt", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SALRY_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_YM\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pymnt_se", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">복리후생비</Col><Col id=\"CODE\">1</Col></Row><Row><Col id=\"CODE_NM\">급여</Col><Col id=\"CODE\">2</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"CODE_NM\">계약직</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dcsn_at", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\"/><Col id=\"CODE\"/></Row><Row><Col id=\"CODE_NM\">확정</Col><Col id=\"CODE\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mtSalaryCreat2", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SALARY_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_YM\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_NMPR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DCSN_AT\" type=\"STRING\" size=\"256\"/><Column id=\"DCSN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CALC_TOTAMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DDC_TOTAMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RL_RECPT_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"OPERTOR\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pymnt_se02", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">정규직</Col><Col id=\"CODE\">1</Col></Row><Row><Col id=\"CODE_NM\">정규직</Col><Col id=\"CODE\">2</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"CODE_NM\">계약직</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pymnt_se00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">복리후생비</Col><Col id=\"CODE\">1</Col></Row><Row><Col id=\"CODE_NM\">급여</Col><Col id=\"CODE\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pymntDdcCode1", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">선택</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pymntDdcCode2", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">선택</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PYMNT_DDC_CODE1\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_DDC_CODE2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond", this);
            obj._setContents("<ColumnInfo><Column id=\"PYMNT_YR\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_YM\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mtSalaryCal", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PYMNT_YM\" type=\"STRING\" size=\"6\"/><Column id=\"SN\" type=\"BIGDECIMAL\" size=\"10\"/><Column id=\"PYMNT_DE\" type=\"STRING\" size=\"8\"/><Column id=\"CLOS_AT\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_jssfcSe", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PYMNT_YM\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"10\"/><Column id=\"JSSFC_NM\" type=\"STRING\" size=\"30\"/><Column id=\"PYMNT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ERROR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_salaryPymntIem", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PYMNT_YM\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_DDC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_DDC_CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_DDC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"OUTPT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"CALC_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DFLT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_salaryDdcIem", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PYMNT_YM\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_DDC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_DDC_CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_DDC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"OUTPT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CALC_AT\" type=\"STRING\" size=\"256\"/><Column id=\"DFLT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_slaryRslt", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PYMNT_YM\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"10\"/><Column id=\"JSSFC_NM\" type=\"STRING\" size=\"30\"/><Column id=\"CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYMNT_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DDC_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_AMT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "97.36%", "0", null, "735", "1.23%", null, this);
            obj.set_taborder("2");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "98.77%", "0", null, "735", "0%", null, this);
            obj.set_taborder("3");
            obj.set_text("스\r\n크\r\n롤\r\n13");
            obj.set_visible("false");
            obj.style.set_background("#d07b173c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "0", null, "33", "28", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WFSA_Box");
            this.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "15", "5", "64", "21", null, null, this.div_search);
            obj.set_taborder("73");
            obj.set_text("지급년도");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Spin("spn_year", "absolute", "84", "5", "78", "21", null, null, this.div_search);
            obj.set_taborder("74");
            obj.set_value("0");
            obj.set_cssclass("spn_WF_Essential");
            obj.style.set_align("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "441", "58", "295", null, null, "271", this);
            obj.set_taborder("39");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_salaryPymntIem");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"57\"/><Column size=\"156\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"지급\"/><Cell col=\"2\" text=\"계산\"/><Cell col=\"3\" text=\"출력\"/></Band><Band id=\"body\"><Cell text=\"bind:PYMNT_DDC_CODE\"/><Cell col=\"1\" style=\"align: ;\" text=\"bind:PYMNT_DDC_CODE_NM\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"padding: ;\" text=\"bind:CALC_AT\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "736", "58", "295", null, null, "271", this);
            obj.set_taborder("40");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_salaryDdcIem");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"57\"/><Column size=\"156\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"공제\"/><Cell col=\"2\" text=\"계산\"/><Cell col=\"3\" text=\"출력\"/></Band><Band id=\"body\"><Cell text=\"bind:PYMNT_DDC_CODE\"/><Cell col=\"1\" style=\"align: ;\" text=\"bind:PYMNT_DDC_CODE_NM\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CALC_AT\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02", "absolute", "275", "58", "167", null, null, "271", this);
            obj.set_taborder("41");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_jssfcSe");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\"/><Column size=\"40\"/><Column size=\"96\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\"><Cell displaytype=\"checkbox\"/><Cell col=\"1\" text=\"선택\"/></Cell><Cell col=\"2\" text=\"직종\"/></Band><Band id=\"body\"><Cell colspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:JSSFC_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid03", "absolute", "0", "58", "265", null, null, "0", this);
            obj.set_taborder("42");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_mtSalaryCal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"40\"/><Column size=\"106\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"지급년월\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"지급일자\"/><Cell col=\"3\" text=\"확정\"/></Band><Band id=\"body\"><Cell edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;mask&quot; : &quot;none&quot;\" text=\"bind:PYMNT_YM\" mask=\"####-##\" editdisplay=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;display&quot; : &quot;edit&quot;\"/><Cell col=\"1\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;mask&quot; : &quot;none&quot;\" text=\"bind:SN\" mask=\"#\" editdisplay=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;display&quot; : &quot;edit&quot;\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"expr:CLOS_AT == '1' ? 'none' : 'date'\" text=\"bind:PYMNT_DE\" calendardisplay=\"expr:CLOS_AT == '1' ? &quot;edit&quot; :&quot;display&quot;\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"checkbox\" text=\"bind:CLOS_AT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "0", "39", "170", "19", null, null, this);
            obj.set_taborder("43");
            obj.set_text("급여계산 내역");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "275", "39", "238", "19", null, null, this);
            obj.set_taborder("44");
            obj.set_text("직종별 지급공제 항목 설정");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "275", null, "170", "19", null, "248", this);
            obj.set_taborder("45");
            obj.set_text("급여계산 결과");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mtSalaryCreat", "absolute", "275", null, null, "247", "28", "0", this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_slaryRslt");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"직종\"/><Cell col=\"2\" text=\"인원\"/><Cell col=\"3\" text=\"지급금액\"/><Cell col=\"4\" text=\"공제금액\"/><Cell col=\"5\" text=\"총수령액\"/><Cell col=\"6\" text=\"확정일자\"/><Cell col=\"7\" colspan=\"2\" text=\"작업자\"/><Cell col=\"9\" text=\"삭제\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:JSSFC_NM\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CNT\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PYMNT_AMT\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DDC_AMT\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOT_AMT\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:DCSN_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" text=\"bind:OPERTOR\"/><Cell col=\"8\" text=\"bind:OPERTOR_NM\"/><Cell col=\"9\" displaytype=\"button\" text=\"삭제\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합계\"/><Cell col=\"2\" displaytype=\"number\" text=\"expr:dataset.getSum('CNT')\"/><Cell col=\"3\" displaytype=\"number\" text=\"expr:dataset.getSum('PYMNT_AMT')\"/><Cell col=\"4\" displaytype=\"number\" text=\"expr:dataset.getSum('DDC_AMT')\"/><Cell col=\"5\" displaytype=\"number\" text=\"expr:dataset.getSum('TOT_AMT')\"/><Cell col=\"6\" colspan=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_calc", "absolute", "952", "37", "79", "19", null, null, this);
            obj.set_taborder("47");
            obj.set_text("급여계산");
            obj.set_cssclass("btn_WF_Process");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dflt", "absolute", "848", "37", "99", "19", null, null, this);
            obj.set_taborder("48");
            obj.set_text("기본항목설정");
            obj.set_cssclass("btn_WF_Process");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 33, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_cssclass("div_WFSA_Box");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1059, 735, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SAL030101");
            		p.set_titletext("급여계산");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item2","div_search.spn_year","value","ds_cond","PYMNT_YR");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SAL030101.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("SAL030101.xfdl", "mis_lib::misUtil.xjs");
        this.registerScript("SAL030101.xfdl", function() {
        /***********************************************************************
         * 업무구분 : 급여
         * 화면ID   : SAL030101
         * 화면명   : 급여계산
         * 화면설명 : 월 급여를 생산한다.
         * 작성일   : 2017.04.05
         * 작성자   : 이상명
         * 수정이력 : 
         ***********************************************************************
         *     수정일     수정자   내용
         ***********************************************************************
         *    
         ***********************************************************************/
         

        /***********************************************************************
         * Script Include 
         ***********************************************************************/
        //include "lib::comInclude.xjs";
        //include "mis_lib::misUtil.xjs";

        var cre_se;					// 급여생성구분 (1: 1일자(정규직), 2:  20일자(정규직), 4: 계약직)
        var lv_salary_se = "1";		// 급여구분(1:정상, 2:정산, 3: 시간외)
        /***********************************************************************
         * 화면 변수 선언부
         ***********************************************************************/

        
        /***********************************************************************
         * onInit 영역
         ***********************************************************************/
        this.SAL030101_oninit = function(obj,e)
        {
        	this.fn_init_form();
        	this.fn_init_dataset();
        }

        /***********************************************************************
         * onLoad 영역
         ***********************************************************************/
        this.SAL030101_onload = function(obj,e)
        {
        /*
        	this.div_search.div_pymntYm.setValue(this.dateUtils.format(this.gfn_today(),"yyyymm"));	
        	this.div_search.div_pymntYm02.setValue(this.dateUtils.format(this.gfn_today(),"yyyymm"));
        	this.div_search.cal_pymntDe.set_value(this.dateUtils.format(this.gfn_today(),"yyyymm") + "01");	
        	this.div_search.cal_pymntDe02.set_value(this.dateUtils.format(this.dateUtils.addMonth(this.gfn_today(),1,"s"),"yyyymm")+"01");
        	this.div_search.div_pymntYm.setFocus(true);
        	this.fn_loadCombo();
        	*/
        	this.ds_cond.clearData();
        	this.ds_cond.addRow();
        	this.ds_cond.setColumn(0,"PYMNT_YR",this.dateUtils.format(this.gfn_today(),"yyyy"));
        	
        	this.fn_search();
        }

        this.fn_loadCombo = function()
        {
        	this.fn_loadPymntDdcCode1(1);
        	this.fn_loadPymntDdcCode2();
        }

        this.fn_loadPymntDdcCode1 = function(pymntSe)
        {
        	this.ds_pymntDdcCode1.clearData();
        	this.ds_pymntDdcCode1.addRow();this.ds_pymntDdcCode1.setColumn(0, "CODE", "");this.ds_pymntDdcCode1.setColumn(0, "CODE_NM", "선택");
        	if(pymntSe == 1){
        		this.ds_pymntDdcCode1.addRow();this.ds_pymntDdcCode1.setColumn(1, "CODE", "P1955");this.ds_pymntDdcCode1.setColumn(1, "CODE_NM", "직책보조비");
        		this.ds_pymntDdcCode1.addRow();this.ds_pymntDdcCode1.setColumn(2, "CODE", "P1910");this.ds_pymntDdcCode1.setColumn(2, "CODE_NM", "시간외수당");
        		this.ds_pymntDdcCode1.addRow();this.ds_pymntDdcCode1.setColumn(3, "CODE", "P1940");this.ds_pymntDdcCode1.setColumn(3, "CODE_NM", "급식보조비");
        		this.ds_pymntDdcCode1.addRow();this.ds_pymntDdcCode1.setColumn(4, "CODE", "P1957");this.ds_pymntDdcCode1.setColumn(4, "CODE_NM", "직무수당");
        		this.ds_pymntDdcCode1.addRow();this.ds_pymntDdcCode1.setColumn(5, "CODE", "P1960");this.ds_pymntDdcCode1.setColumn(5, "CODE_NM", "교통보조비");
        		this.ds_pymntDdcCode1.addRow();this.ds_pymntDdcCode1.setColumn(6, "CODE", "P1961");this.ds_pymntDdcCode1.setColumn(6, "CODE_NM", "업무추진여비");
        		this.ds_pymntDdcCode1.addRow();this.ds_pymntDdcCode1.setColumn(7, "CODE", "P1991");this.ds_pymntDdcCode1.setColumn(7, "CODE_NM", "현장체제비");
        		this.ds_pymntDdcCode1.addRow();this.ds_pymntDdcCode1.setColumn(8, "CODE", "P1992");this.ds_pymntDdcCode1.setColumn(8, "CODE_NM", "감독수당");
        	}else{
        		this.ds_pymntDdcCode1.addRow();this.ds_pymntDdcCode1.setColumn(1, "CODE", "P1010");this.ds_pymntDdcCode1.setColumn(1, "CODE_NM", "기본급");
        		this.ds_pymntDdcCode1.addRow();this.ds_pymntDdcCode1.setColumn(2, "CODE", "P1050");this.ds_pymntDdcCode1.setColumn(2, "CODE_NM", "건설수당");
        		this.ds_pymntDdcCode1.addRow();this.ds_pymntDdcCode1.setColumn(3, "CODE", "P1090");this.ds_pymntDdcCode1.setColumn(3, "CODE_NM", "특수업무수당");
        		this.ds_pymntDdcCode1.addRow();this.ds_pymntDdcCode1.setColumn(4, "CODE", "P1091");this.ds_pymntDdcCode1.setColumn(4, "CODE_NM", "운전수당");
        		this.ds_pymntDdcCode1.addRow();this.ds_pymntDdcCode1.setColumn(5, "CODE", "P1092");this.ds_pymntDdcCode1.setColumn(5, "CODE_NM", "위험수당");
        		this.ds_pymntDdcCode1.addRow();this.ds_pymntDdcCode1.setColumn(6, "CODE", "P1070");this.ds_pymntDdcCode1.setColumn(6, "CODE_NM", "기술수당");
        		this.ds_pymntDdcCode1.addRow();this.ds_pymntDdcCode1.setColumn(7, "CODE", "P1060");this.ds_pymntDdcCode1.setColumn(7, "CODE_NM", "장기근속수당");
        		this.ds_pymntDdcCode1.addRow();this.ds_pymntDdcCode1.setColumn(8, "CODE", "P1080");this.ds_pymntDdcCode1.setColumn(8, "CODE_NM", "가족수당");
        		this.ds_pymntDdcCode1.addRow();this.ds_pymntDdcCode1.setColumn(9, "CODE", "P1110");this.ds_pymntDdcCode1.setColumn(9, "CODE_NM", "연차수당");
        		this.ds_pymntDdcCode1.addRow();this.ds_pymntDdcCode1.setColumn(10, "CODE", "P1140");this.ds_pymntDdcCode1.setColumn(10, "CODE_NM", "학자금보조비");
        		this.ds_pymntDdcCode1.addRow();this.ds_pymntDdcCode1.setColumn(11, "CODE", "P1191");this.ds_pymntDdcCode1.setColumn(11, "CODE_NM", "특정업무수행비");
        	}
        	this.div_search.cmb_pymntDdcCode1.set_value("");
        }

        this.fn_loadPymntDdcCode2 = function()
        {
        	this.ds_pymntDdcCode2.clearData();
        	this.ds_pymntDdcCode2.addRow();this.ds_pymntDdcCode2.setColumn(0, "CODE", "");this.ds_pymntDdcCode2.setColumn(0, "CODE_NM", "선택");
        	this.ds_pymntDdcCode2.addRow();this.ds_pymntDdcCode2.setColumn(1, "CODE", "P1010");this.ds_pymntDdcCode2.setColumn(1, "CODE_NM", "기본급");
        	this.ds_pymntDdcCode2.addRow();this.ds_pymntDdcCode2.setColumn(2, "CODE", "P1050");this.ds_pymntDdcCode2.setColumn(2, "CODE_NM", "건설수당");
        	this.ds_pymntDdcCode2.addRow();this.ds_pymntDdcCode2.setColumn(3, "CODE", "P1957");this.ds_pymntDdcCode2.setColumn(3, "CODE_NM", "직무수당");
        	this.ds_pymntDdcCode2.addRow();this.ds_pymntDdcCode2.setColumn(4, "CODE", "P1940");this.ds_pymntDdcCode2.setColumn(4, "CODE_NM", "급식보조비");
        	this.ds_pymntDdcCode2.addRow();this.ds_pymntDdcCode2.setColumn(5, "CODE", "P1960");this.ds_pymntDdcCode2.setColumn(5, "CODE_NM", "교통보조비");
        	this.ds_pymntDdcCode2.addRow();this.ds_pymntDdcCode2.setColumn(6, "CODE", "P1140");this.ds_pymntDdcCode2.setColumn(6, "CODE_NM", "학자금보조비");
        	this.ds_pymntDdcCode2.addRow();this.ds_pymntDdcCode2.setColumn(7, "CODE", "P1110");this.ds_pymntDdcCode2.setColumn(7, "CODE_NM", "연차수당");
        	this.ds_pymntDdcCode2.addRow();this.ds_pymntDdcCode2.setColumn(8, "CODE", "P1080");this.ds_pymntDdcCode2.setColumn(8, "CODE_NM", "가족수당");
        }

        /***********************************************************************
         * Form 오브젝트 초기화
         ***********************************************************************/ 
        this.fn_init_form = function()
        {
        	this.gfn_initForm(this);
        	///this.div_search.chk_del.set_value("N");  
        	//this.div_search.chk_del02.set_value("N");  
        }

        /***********************************************************************
         * Dataset 오브젝트 초기화
         ***********************************************************************/ 
        this.fn_init_dataset = function()
        {
        	this.gfn_initCondDs(this, this.div_search);	
        }

        /***********************************************************************
        * 조회처리
        ************************************************************************/
        this.fn_search = function()
        {
        	/*
        	this.ds_mtSalaryCreat.clearData();
        	this.ds_cond00.clearData();
        	this.ds_cond00.addRow();
        	
        	this.ds_cond00.setColumn(0,"PYMNT_YM",this.div_search.div_pymntYm.getValue());
        	*/
        	// Validation 체크
        	/*
        	if(!this.gfn_checkValidation(this.ds_cond00, this.ds_validation)) {
        		return;
        	}
        		*/
        	this.fn_transaction("selectSalaryCalList");
        }

        this.fn_insert = function() 
        {
        	var nRow = this.ds_mtSalaryCal.addRow();
        }

        this.fn_save = function()
        {
        	var rowpos = this.ds_mtSalaryCal.rowposition;
        	var pymntFilter = this.ds_salaryPymntIem.filterstr;
        	var ddcFilter	= this.ds_salaryDdcIem.filterstr;
        	this.ds_salaryPymntIem.filter("");
        	this.ds_salaryDdcIem.filter("");	
        	for(i = 0; i < this.ds_salaryPymntIem.getRowCount(); i++) {
        		if(this.ds_salaryPymntIem.getColumn(i, "CHK") == "1") {
        			this.ds_salaryPymntIem.setColumn(i, "PYMNT_YM", this.ds_mtSalaryCal.getColumn(rowpos, "PYMNT_YM"));
        			this.ds_salaryPymntIem.setColumn(i, "SN", this.ds_mtSalaryCal.getColumn(rowpos, "SN"));
        		}
        	}
        	for(i = 0; i < this.ds_salaryDdcIem.getRowCount(); i++) {
        		if(this.ds_salaryDdcIem.getColumn(i, "CHK") == "1") {
        			this.ds_salaryDdcIem.setColumn(i, "PYMNT_YM", this.ds_mtSalaryCal.getColumn(rowpos, "PYMNT_YM"));
        			this.ds_salaryDdcIem.setColumn(i, "SN", this.ds_mtSalaryCal.getColumn(rowpos, "SN"));
        		}
        	}
        	this.ds_salaryPymntIem.filter(pymntFilter);
        	this.ds_salaryDdcIem.filter(ddcFilter);
        	
        	this.fn_transaction("saveMtSalaryIem");
        }

        /**********************************************************************
         * CALL TRANSACTION 영역
         **********************************************************************/ 
        this.fn_transaction = function(strSvcId)
        {
        	switch (strSvcId) {
        		case "selectSalaryCalList":
        			var sController   	= "hsco/mis/sal/SAL030101/selectSalaryCalList.do";
        			var sInDatasets   	= "input1=ds_cond";
        			var sOutDatasets  	= "ds_mtSalaryCal=output1";
        			break;
        		
        		case "selectJssfcSeList":
        			var sController   	= "hsco/mis/sal/SAL030101/selectJssfcSeList.do";
        			var sInDatasets   	= "input1=ds_cond";
        			var sOutDatasets  	= "ds_jssfcSe=output1 ds_salaryPymntIem=output2 ds_salaryDdcIem=output3 ds_slaryRslt=output4";
        			break;
        			
        		case "saveMtSalaryIem":
        			var sController   	= "hsco/mis/sal/SAL030101/saveMtSalaryIem.do";
        			var sInDatasets   	= "input1=ds_mtSalaryCal:U input2=ds_salaryPymntIem:U input3=ds_salaryDdcIem:U";
        			var sOutDatasets  	= "";
        			break;
        		
        		case "calcMtSalary":
        			var sController   	= "hsco/mis/sal/SAL030101/saveMtSalaryIem.do";
        			var sInDatasets   	= "input1=ds_mtSalaryCal:U input2=ds_salaryPymntIem:U input3=ds_salaryDdcIem:U input4=ds_jssfcSe:A input5=ds_cond";
        			var sOutDatasets  	= "ds_slaryRslt=output1";
        			break;
        			
        		case "deleteMtSalary":
        			var sController   	= "hsco/mis/sal/SAL030101/deleteMtSalary.do";
        			var sInDatasets   	= "input1=ds_cond";
        			var sOutDatasets  	= "ds_slaryRslt=output1";
        			break;
        	
        	    // 급여생성 CRE 내역 조회
        		case "selectMtSalaryCreatList": 
        			var sController   	= "hsco/mis/sal/SAL030101/selectMtSalaryCreatList.do";
        			var sInDatasets   	= "input1=ds_cond00";
        			var sOutDatasets  	= "ds_mtSalaryCreat=output1";
        			break;
        			
        		// 급여생성 PYMNT 내역 조회
        		case "selectMtSalaryPymntList": 
        			var sController   	= "hsco/mis/sal/SAL030101/selectMtSalaryPymntList.do";
        			var sInDatasets   	= "input1=ds_cond00";
        			var sOutDatasets  	= "ds_mtSalaryCreat2=output1";
        			break;
        			
        		// 급여생성 확정여부 확인
        		case "selectMtSalaryPymntList2": 
        			var sController   	= "hsco/mis/sal/SAL030101/selectMtSalaryPymntList.do";
        			var sInDatasets   	= "input1=ds_cond00";
        			var sOutDatasets  	= "ds_mtSalaryCreat2=output1";
        			break;
        			
        		//=================================================================
        		// 정규직
        		//=================================================================
        		// 	급여생성
        		case "saveMtSalaryCreatList":	
        			var sController   	= "hsco/mis/sal/SAL030101/MtSalaryPymntC.do";	
        			var sInDatasets   	= "input3=ds_cond00";
        			var sOutDatasets  	= "";
        			break;
        		
        		// 급여내역 삭제
        		case "deleteMtSalaryPymntList":	
        			var sController   	= "hsco/mis/sal/SAL030101/MtSalaryPymntD.do";	
        			var sInDatasets   	= "input3=ds_cond00";
        			var sOutDatasets  	= "";
        			break;	

        		//=================================================================
        		// 계약직 
        		//=================================================================
        		// 급여생성
        		case "saveMtSalaryCreatList_2":	
        			var sController   	= "hsco/mis/sal/SAL030101/MtSalaryPymntC_2.do";	
        			var sInDatasets   	= "input3=ds_cond00";
        			var sOutDatasets  	= "";
        			break;
        		
        		// 급여내역 삭제
        		case "deleteMtSalaryPymntList_2":	
        			var sController   	= "hsco/mis/sal/SAL030101/MtSalaryPymntD_2.do";	
        			var sInDatasets   	= "input3=ds_cond00";
        			var sOutDatasets  	= "";
        			break;

        		//=================================================================
        		// 시간외수당(12월말)
        		//=================================================================
        		// 급여생성
        		case "saveMtSalaryCreatList_3":	
        			var sController   	= "hsco/mis/sal/SAL030101/MtSalaryPymntC_3.do";	
        			var sInDatasets   	= "input3=ds_cond00";
        			var sOutDatasets  	= "";
        			break;
        		// 급여내역 삭제
        		case "deleteMtSalaryPymntList_3":	
        			var sController   	= "hsco/mis/sal/SAL030101/MtSalaryPymntD_3.do";	
        			var sInDatasets   	= "input3=ds_cond00";
        			var sOutDatasets  	= "";
        			break;	
        			
        		// 계산항목 생성
        		case "saveMtSalaryCreatList_4":	
        			var sController   	= "hsco/mis/sal/SAL030101/MtSalaryPymntC_4.do";	
        			var sInDatasets   	= "input3=ds_cond00";
        			var sOutDatasets  	= "";
        			break;
        	}

        	Ex.core.tran(this, strSvcId, sController, sInDatasets, sOutDatasets); 
        }

        /**********************************************************************
         * Transaction Callback 영역
         **********************************************************************/ 
        this.fn_callBack = function (strSvcId,nErrorCode,strErrorMsg)
        {
        	// 오류 및 성공 메시지를 화면에 보여준다.
        	/*this.gfn_callback_message(strSvcId, nErrorCode, strErrorMsg);*/
        	if (nErrorCode != 0){
        		this.gfn_callback_message(strSvcId, nErrorCode, strErrorMsg);	
        	} else {		
        		switch (strSvcId) {
        		
        			case "selectSalaryCalList":
        				break;
        				
        			case "selectJssfcSeList":
        				break;
        			
        			// 급여생성 CRE 내역 조회
        			case "selectMtSalaryCreatList":
        				break;
        			
        			// 급여생성 PYMNT 내역 조회
        			case "selectMtSalaryPymntList":
        				if(cre_se == "1" || cre_se == "4"){
        					if(this.ds_mtSalaryCreat2.getRowCount() > 0) {
        						this.alert(this.div_search.div_pymntYm.getValue()+ "월 " + this.div_search.cmb_pymntSe.text  + " 생성 내역이 있습니다."); 
        						return;			      
        					} else {
        						// 월급여 데이터 생성
        						if(cre_se == "1"){
        							 this.mt_creat();     // 정규직 급여생성
        						} else if(cre_se == "4") {
        							 this.mt_creat2();    // 계약직 급여생성
        						} 
        					}
        				}else if(cre_se == "11"){
        					if(this.ds_mtSalaryCreat2.getRowCount() == 0) {
        						this.alert(this.div_search.div_pymntYm.getValue()+ "월 " + this.div_search.cmb_pymntSe.text  + " 생성 내역이 없어 계산항목을 생성 할 수 없습니다."); 
        						return;			      
        					} else {
        						this.ds_cond00.setColumn(0,"DCSN_AT",	"1");    // 확정여부
        						// 급여생성 확정여부 확인
        						this.fn_transaction("selectMtSalaryPymntList2");
        					}
        				}else if(cre_se == "14"){
        					if(this.ds_mtSalaryCreat2.getRowCount() == 0) {
        						this.alert(this.div_search.div_pymntYm02.getValue()+ "월 계약직 생성 내역이 없어 계산항목을 생성 할 수 없습니다."); 
        						return;			      
        					} else {
        						this.ds_cond00.setColumn(0,"DCSN_AT",	"1");    // 확정여부
        						// 급여생성 확정여부 확인
        						this.fn_transaction("selectMtSalaryPymntList2");
        					}
        				}
        			    
        				break;
        			
        			// 급여생성 확정여부 확인
        			case "selectMtSalaryPymntList2":
        				if(cre_se == "1" || cre_se == "4"){
        					if(this.ds_mtSalaryCreat2.getRowCount() > 0) {
        						this.alert(this.div_search.div_pymntYm.getValue()+ "월 " + this.div_search.cmb_pymntSe.text  + " 급여가 확정이 되어 삭제할수 없습니다.");
        						return;			      
        					} else {
        						// 월급여 데이터 삭제
        						if(cre_se == "1"){
        							 this.mt_delete();    // 정규직 급여삭제
        						} else if(cre_se == "4") {
        							 this.mt_delete2();   // 계약직 급여삭제
        						}     
        					}	      
        				}else if(cre_se == "11"){
        					if(this.ds_mtSalaryCreat2.getRowCount() > 0) {
        						this.alert(this.div_search.div_pymntYm.getValue()+ "월 " + this.div_search.cmb_pymntSe.text  + " 급여가 확정이 되어 계산항목을 생성 할 수 없습니다.");
        						return;
        					} else {
        						this.mt_creat3();     // 정규직 항목계산
        					}
        				}else if(cre_se == "14"){
        					if(this.ds_mtSalaryCreat2.getRowCount() > 0) {
        						this.alert(this.div_search.div_pymntYm02.getValue()+ "월 계약직 급여가 확정이 되어 계산항목을 생성 할 수 없습니다.");
        						return;
        					} else {
        						 this.mt_creat4();    // 계약직 항목계산
        					}
        				}
        				break;

        			//=================================================================
        			// 정규직
        			//=================================================================
        			// 급여생성
        			case "saveMtSalaryCreatList":			    
        			    this.alert(this.div_search.div_pymntYm.getValue()+ "월 " + this.div_search.cmb_pymntSe.text  + " 정규직급여 생성이 완료되었습니다.");			    
        			    this.fn_transaction("selectMtSalaryCreatList");
        				break;

        			// 급여내역 삭제
        			case "deleteMtSalaryPymntList":
        			    this.alert(this.div_search.div_pymntYm.getValue()+ "월 " + this.div_search.cmb_pymntSe.text  + " 정규직급여 삭제가 완료되었습니다."); 			    
        			    this.fn_transaction("selectMtSalaryCreatList");
        				break;

        			//=================================================================
        			// 계약직 
        			//=================================================================
        			// 급여생성
        			case "saveMtSalaryCreatList_2":			    
        			    this.alert("생성이 완료되었습니다.");			    
        			    this.fn_transaction("selectMtSalaryCreatList");
        				break;
        				
        			// 급여내역 삭제
        			case "deleteMtSalaryPymntList_2":
        			    this.alert("삭제가 완료되었습니다."); 			    
        			    this.fn_transaction("selectMtSalaryCreatList");
        				break;

        			//=================================================================
        			// 시간외수당(12월말) 
        			//=================================================================
        			// 급여생성
        			case "saveMtSalaryCreatList_3":			    
        			    this.alert("생성이 완료되었습니다.");			    
        			    this.fn_transaction("selectMtSalaryCreatList");
        				break;
        				
        			// 급여내역 삭제
        			case "deleteMtSalaryPymntList_3":
        			    this.alert("삭제가 완료되었습니다."); 			    
        			    this.fn_transaction("selectMtSalaryCreatList");
        				break;
        		}
        	}
        }

        /***********************************************************************************
        * 설명	: 월급여데이터 생성버튼
        ***********************************************************************************/
        this.div_search_btn_cre_onclick = function(obj,e)
        {
        	cre_se = "1";	// 급여생성구분 (1: 1일자(정규직), 2:  20일자(정규직), 4: 계약직, 11 : 정규직 항목생성, 14 : 계약직 항목생성 )
        	
        	if (this.div_search.chk_time.value == "Y") {
        		lv_salary_se = "3";		// 급여구분(1:정상, 2:정산, 3: 시간외)
        	} else {
        		lv_salary_se = "1";
        	}
        	
        	if(this.div_search.div_pymntYm.getValue() < "201601"){
        	     this.alert("생성된 급여내역이 있습니다.");
        	     return;
        	}
        	
        	if(this.ds_cond01.getColumn(0, "PYMNT_DDC_CODE1") == "Y"){
        		cre_se = "11";		//11 : 정규직 항목생성
        		
        		if(this.div_search.chk_del.value == "Y") {
        			this.gfn_message("comm.err", "계산항목이 선택되어 있으면 삭제 하실 수 없습니다.");
        		}else{
        			if(!this.div_search.cmb_pymntDdcCode1.value){
        				this.gfn_message("comm.chk", "계산항목을 선택하세요");
        				return;
        			}
        		
        			// 생성내역 확인
        			this.ds_mtSalaryPymnt.clearData();
        			this.ds_cond00.clearData();
        			this.ds_cond00.addRow();
        			
        			this.ds_cond00.setColumn(0,"SALARY_SE",	lv_salary_se);
        			this.ds_cond00.setColumn(0,"PYMNT_YM",	this.div_search.div_pymntYm.getValue());
        			this.ds_cond00.setColumn(0,"PYMNT_DE",	this.div_search.cal_pymntDe.value);
        			this.ds_cond00.setColumn(0,"PYMNT_SE",	this.div_search.cmb_pymntSe.value);			
        			this.ds_cond00.setColumn(0,"PYMNT_DDC_CODE",	this.div_search.cmb_pymntDdcCode1.value);			
        			
        			// Validation 체크
        			if(!this.gfn_checkValidation(this.ds_cond00, this.ds_validation)) {
        				return;
        			}
        			
        			// 급여생성 PYMNT 내역 조회
        			this.fn_transaction("selectMtSalaryPymntList");	
        		}
        	}else{
        		if(this.div_search.chk_del.value == "Y") {
        			// 생성내역 확인(확정여부)
        			this.ds_cond00.clearData();
        			this.ds_cond00.addRow();
        			
        			this.ds_cond00.setColumn(0,"SALARY_SE",	lv_salary_se);
        			this.ds_cond00.setColumn(0,"PYMNT_YM",	this.div_search.div_pymntYm.getValue());
        			this.ds_cond00.setColumn(0,"PYMNT_DE",	this.div_search.cal_pymntDe.value);
        			this.ds_cond00.setColumn(0,"PYMNT_SE",	this.div_search.cmb_pymntSe.value);
        			this.ds_cond00.setColumn(0,"DCSN_AT",	"1");    // 확정여부		
        				
        			// Validation 체크
        			if(!this.gfn_checkValidation(this.ds_cond00, this.ds_validation)) {
        				return;
        			}

        			// 급여생성 확정여부 확인
        			this.fn_transaction("selectMtSalaryPymntList2");
        		} 
        		else if(this.div_search.chk_del.value == "N") {
        			// 생성내역 확인
        			this.ds_mtSalaryPymnt.clearData();
        			this.ds_cond00.clearData();
        			this.ds_cond00.addRow();
        			
        			this.ds_cond00.setColumn(0,"SALARY_SE",	lv_salary_se);
        			this.ds_cond00.setColumn(0,"PYMNT_YM",	this.div_search.div_pymntYm.getValue());
        			this.ds_cond00.setColumn(0,"PYMNT_DE",	this.div_search.cal_pymntDe.value);
        			this.ds_cond00.setColumn(0,"PYMNT_SE",	this.div_search.cmb_pymntSe.value);			
        			
        			// Validation 체크
        			if(!this.gfn_checkValidation(this.ds_cond00, this.ds_validation)) {
        				return;
        			}
        			
        			// 급여생성 PYMNT 내역 조회
        			this.fn_transaction("selectMtSalaryPymntList");	
        		}	
        	}
        }

        /***********************************************************************************
        * 설명	: 월급여데이터 생성
        ***********************************************************************************/
        this.mt_creat = function()
        {
        	if(!this.div_search.div_pymntYm.getValue()){
        		alert("급여생성년월을 입력하세요");
        		return;
        	}
        	
        	if(!this.div_search.cal_pymntDe.value){
        		alert("급여지급일자를 입력하세요");
        		return;
        	}
        	
        	this.ds_cond00.clearData();              // 조회 데이터셋 초기화	
        	var nRow = this.ds_cond00.addRow();      // 조회 데이터셋 행추가  	
        	this.ds_cond00.setColumn(0,"SALARY_SE",	lv_salary_se);
        	this.ds_cond00.setColumn(0,"PYMNT_YM",	this.div_search.div_pymntYm.getValue());
        	this.ds_cond00.setColumn(0,"PYMNT_DE",	this.div_search.cal_pymntDe.value);
        	this.ds_cond00.setColumn(0,"PYMNT_SE",	this.div_search.cmb_pymntSe.value);

        	if(this.confirm("생성하시겠습니까?"))	{
        		if(lv_salary_se == "3"){
        			this.fn_transaction("saveMtSalaryCreatList_3");		// 일반
        		}else{
        			this.fn_transaction("saveMtSalaryCreatList");		// 일반
        		}
        	}
        }

        /***********************************************************************************
        * 설명	: 월급여데이터 생성 - 계약직
        ***********************************************************************************/
        this.mt_creat2 = function()
        {
        	if(!this.div_search.div_pymntYm02.getValue()){
        		alert("급여생성년월을 입력하세요");
        		return;
        	}
        	
        	if(!this.div_search.cal_pymntDe02.value){
        		alert("급여지급일자를 입력하세요");
        		return;
        	}
        	
        	this.ds_cond00.clearData();              // 조회 데이터셋 초기화	
        	var nRow = this.ds_cond00.addRow();      // 조회 데이터셋 행추가  	
        	this.ds_cond00.setColumn(0,"SALARY_SE",	"1");
        	this.ds_cond00.setColumn(0,"PYMNT_YM",	this.div_search.div_pymntYm02.getValue());
        	this.ds_cond00.setColumn(0,"PYMNT_DE",	this.div_search.cal_pymntDe02.value);
        	this.ds_cond00.setColumn(0,"PYMNT_SE",	"4");

        	if(this.confirm("생성하시겠습니까?"))	{
        		this.fn_transaction("saveMtSalaryCreatList_2");
        	}
        }

        /***********************************************************************************
        * 설명	: 월급여데이터 생성 - 정규직 계산항목
        ***********************************************************************************/
        this.mt_creat3 = function()
        {
        	if(!this.div_search.div_pymntYm.getValue()){
        		alert("급여생성년월을 입력하세요");
        		return;
        	}
        	
        	if(!this.div_search.cal_pymntDe.value){
        		alert("급여지급일자를 입력하세요");
        		return;
        	}
        	
        	if(!this.div_search.cmb_pymntDdcCode1.value){
        		alert("계산항목을 선택하세요");
        		return;
        	}
        	
        	this.ds_cond00.clearData();              // 조회 데이터셋 초기화	
        	var nRow = this.ds_cond00.addRow();      // 조회 데이터셋 행추가  	
        	this.ds_cond00.setColumn(0,"SALARY_SE",	"1");
        	this.ds_cond00.setColumn(0,"PYMNT_YM",	this.div_search.div_pymntYm.getValue());
        	this.ds_cond00.setColumn(0,"PYMNT_DE",	this.div_search.cal_pymntDe.value);
        	this.ds_cond00.setColumn(0,"PYMNT_SE",	this.div_search.cmb_pymntSe.value);
        	this.ds_cond00.setColumn(0,"PYMNT_DDC_CODE",	this.div_search.cmb_pymntDdcCode1.value);			

        	if(this.confirm("생성하시겠습니까?"))	{
        		this.fn_transaction("saveMtSalaryCreatList_4");
        	}
        }

        /***********************************************************************************
        * 설명	: 월급여데이터 생성 - 계약직 계산항목
        ***********************************************************************************/
        this.mt_creat4 = function()
        {
        	if(!this.div_search.div_pymntYm02.getValue()){
        		alert("급여생성년월을 입력하세요");
        		return;
        	}
        	
        	if(!this.div_search.cal_pymntDe02.value){
        		alert("급여지급일자를 입력하세요");
        		return;
        	}
        	
        	if(!this.div_search.cmb_pymntDdcCode2.value){
        		alert("계산항목을 선택하세요");
        		return;
        	}
        	
        	this.ds_cond00.clearData();              // 조회 데이터셋 초기화	
        	var nRow = this.ds_cond00.addRow();      // 조회 데이터셋 행추가  	
        	this.ds_cond00.setColumn(0,"SALARY_SE",	"1");
        	this.ds_cond00.setColumn(0,"PYMNT_YM",	this.div_search.div_pymntYm02.getValue());
        	this.ds_cond00.setColumn(0,"PYMNT_DE",	this.div_search.cal_pymntDe02.value);
        	this.ds_cond00.setColumn(0,"PYMNT_SE",	"4");
        	this.ds_cond00.setColumn(0,"PYMNT_DDC_CODE",	this.div_search.cmb_pymntDdcCode2.value);			

        	if(this.confirm("생성하시겠습니까?"))	{
        		this.fn_transaction("saveMtSalaryCreatList_4");
        	}
        }

        /***********************************************************************************
        * 설명	: 월급여데이터 삭제
        ***********************************************************************************/
        this.mt_delete = function()
        {
        	if ( application.confirm( this.div_search.div_pymntYm.getValue() + " 월 정규직 급여생성정보를 삭제하시겠습니까?" ) ) {
        	            
        		if(!this.div_search.div_pymntYm.getValue()){
        			alert("급여생성년월을 입력하세요");
        			return;
        		}
        		
        		if(!this.div_search.cal_pymntDe.value){
        			alert("급여지급일자를 입력하세요");
        			return;
        		}
        		
        		this.ds_cond00.clearData();              // 조회 데이터셋 초기화	
        		var nRow = this.ds_cond00.addRow();      // 조회 데이터셋 행추가  	
        		this.ds_cond00.setColumn(0,"SALARY_SE",	lv_salary_se);
        		this.ds_cond00.setColumn(0,"PYMNT_YM",	this.div_search.div_pymntYm.getValue());
        		this.ds_cond00.setColumn(0,"PYMNT_DE",	this.div_search.cal_pymntDe.value);
        		this.ds_cond00.setColumn(0,"PYMNT_SE",	this.div_search.cmb_pymntSe.value);

        		if (lv_salary_se == "3") {
        			this.fn_transaction("deleteMtSalaryPymntList_3");	// 시간외수당(12월말)
        		} else {
        			this.fn_transaction("deleteMtSalaryPymntList");		// 일반
        		}
            }
        }

        /***********************************************************************************
        * 설명	: 월급여데이터 삭제(계약직)
        ***********************************************************************************/
        this.mt_delete2 = function()
        {
            if ( application.confirm( this.div_search.div_pymntYm02.getValue() + " 월 계약직 급여생성정보를 삭제하시겠습니까?" ) ) {

        		if(!this.div_search.div_pymntYm02.getValue()){
        			alert("급여생성년월을 입력하세요");
        			return;
        		}
        		if(!this.div_search.cal_pymntDe02.value){
        			alert("급여지급일자를 입력하세요");
        			return;
        		} 			
        		this.ds_cond00.clearData();              // 조회 데이터셋 초기화	
        		var nRow = this.ds_cond00.addRow();      // 조회 데이터셋 행추가  	
        		this.ds_cond00.setColumn(0,"SALARY_SE",	"1");
        		this.ds_cond00.setColumn(0,"PYMNT_YM",	this.div_search.div_pymntYm02.getValue());
        		this.ds_cond00.setColumn(0,"PYMNT_DE",	this.div_search.cal_pymntDe02.value);
        		this.ds_cond00.setColumn(0,"PYMNT_SE",	"4");
        		
        		this.fn_transaction("deleteMtSalaryPymntList_2");
            }
        }

        /***********************************************************************************
        * 설명	: 삭제체크시 버튼표시
        ***********************************************************************************/
        this.div_search_chk_del_onchanged = function(obj,e)
        {
        	if(this.div_search.chk_del.value == "Y") {
        	      this.div_search.btn_cre.set_text("삭제");
        	} 
        	else if(this.div_search.chk_del.value == "N"){
        	      this.div_search.btn_cre.set_text("생성");
        	}
        }

        //계약직 2016.07.22
        this.div_search_chk_del02_onchanged = function(obj,e)
        {
        	if(this.div_search.chk_del02.value == "Y") {
        	      this.div_search.btn_cre02.set_text("삭제");
        	} 
        	else if(this.div_search.chk_del02.value == "N"){
        	      this.div_search.btn_cre02.set_text("생성");
        	}
        }

        /***********************************************************************************
        * 설명	: 계약직 급여생성 버튼
        ***********************************************************************************/
        this.div_search_btn_cre02_onclick = function(obj,e)
        {
        	cre_se = "4";	// 급여생성구분 (1: 1일자(정규직), 2:  20일자(정규직), 4: 계약직, 11 : 정규직 항목생성, 14 : 계약직 항목생성 )
        	
        	if(this.div_search.div_pymntYm02.getValue() < "201601"){
        	     this.alert("생성된 급여내역이 있습니다.");
        	     return;
        	}
        	
        	if(this.ds_cond01.getColumn(0, "PYMNT_DDC_CODE2") == "Y"){		
        		cre_se = "14";		//14 : 계약직 항목생성
        		
        		if(this.div_search.chk_del.value == "Y") {
        			this.gfn_message("comm.err", "계산항목이 선택되어 있으면 삭제 하실 수 없습니다.");
        		}else{
        			if(!this.div_search.cmb_pymntDdcCode2.value){
        				this.gfn_message("comm.chk", "계산항목을 선택하세요");
        				return;
        			}
        			// 생성내역 확인
        			this.ds_mtSalaryPymnt.clearData();
        			this.ds_cond00.clearData();
        			this.ds_cond00.addRow();
        			
        			this.ds_cond00.setColumn(0,"SALARY_SE",	"1");
        			this.ds_cond00.setColumn(0,"PYMNT_YM",	this.div_search.div_pymntYm02.getValue());
        			this.ds_cond00.setColumn(0,"PYMNT_DE",	this.div_search.cal_pymntDe02.value);
        			this.ds_cond00.setColumn(0,"PYMNT_SE",	"4");	// 계약직 급여 구분	
        			this.ds_cond00.setColumn(0,"PYMNT_DDC_CODE",	this.div_search.cmb_pymntDdcCode2.value);			
        			
        			// Validation 체크
        			if(!this.gfn_checkValidation(this.ds_cond00, this.ds_validation)) {
        				return;
        			}	
        			this.fn_transaction("selectMtSalaryPymntList");	
        		}
        	}else{
        		if(this.div_search.chk_del02.value == "Y") {
        			// 생성내역 확인(확정여부)
        			this.ds_cond00.clearData();
        			this.ds_cond00.addRow();
        			
        			this.ds_cond00.setColumn(0,"SALARY_SE",	"1");
        			this.ds_cond00.setColumn(0,"PYMNT_YM",	this.div_search.div_pymntYm02.getValue());
        			this.ds_cond00.setColumn(0,"PYMNT_DE",	this.div_search.cal_pymntDe02.value);
        			this.ds_cond00.setColumn(0,"PYMNT_SE",	"4");	// 계약직 급여 구분
        			this.ds_cond00.setColumn(0,"DCSN_AT",	"1");  	// 확정여부		
        				
        			// Validation 체크
        			if(!this.gfn_checkValidation(this.ds_cond00, this.ds_validation)) {
        				return;
        			}	
        			this.fn_transaction("selectMtSalaryPymntList2");		    
        		
        		} else if(this.div_search.chk_del02.value == "N") {
        			// 생성내역 확인
        			this.ds_mtSalaryPymnt.clearData();
        			this.ds_cond00.clearData();
        			this.ds_cond00.addRow();
        			
        			this.ds_cond00.setColumn(0,"SALARY_SE",	"1");
        			this.ds_cond00.setColumn(0,"PYMNT_YM",	this.div_search.div_pymntYm02.getValue());
        			this.ds_cond00.setColumn(0,"PYMNT_DE",	this.div_search.cal_pymntDe02.value);
        			this.ds_cond00.setColumn(0,"PYMNT_SE",	"4");	// 계약직 급여 구분	
        			
        			// Validation 체크
        			if(!this.gfn_checkValidation(this.ds_cond00, this.ds_validation)) {
        				return;
        			}	
        			this.fn_transaction("selectMtSalaryPymntList");	
        		}
        	}
        }

        /***********************************************************************************
        * 설명	: 지급구분 변경시 날짜 표시
        ***********************************************************************************/
        this.div_search_cmb_pymntSe_onitemchanged = function(obj,e)
        {
        	if(this.ds_cond01.getColumn(0, "PYMNT_DDC_CODE1") == "Y"){
        		this.fn_loadPymntDdcCode1(this.div_search.cmb_pymntSe.value);
        	}
        	
        	var get_pymntYm = this.div_search.div_pymntYm.getValue();	// 급여년월

        	this.div_search.chk_time.set_value("N");
        	if (this.div_search.cmb_pymntSe.value == "1") {
        	    this.div_search.cal_pymntDe.set_value(get_pymntYm + "01");	

        		if (get_pymntYm.substring(4,6) == "12") {
        			this.div_search.chk_time.set_visible(true);
        		} else {
        			this.div_search.chk_time.set_visible(false);
        		}
        	} else if (this.div_search.cmb_pymntSe.value == "2"){
        	    this.div_search.cal_pymntDe.set_value(get_pymntYm + "20");
        	    this.div_search.chk_time.set_visible(false);
        	}
        	
        	var get_pymntYm2 = this.div_search.div_pymntYm02.getValue();	// 급여년월
        	this.div_search.cal_pymntDe02.set_value(this.dateUtils.format(this.dateUtils.addMonth(get_pymntYm2+"01",1,"s"),"yyyymm")+"01");
        }

        /***********************************************************************************
        * 설명	:시간외 체크시 날짜 표시
        ***********************************************************************************/
        this.div_search_chk_time_onchanged = function(obj,e)
        {
        	var get_pymntYm = this.div_search.div_pymntYm.getValue();	// 급여년월
        	
        	if (this.div_search.chk_time.value == "Y") {
        		this.div_search.cal_pymntDe.set_value(get_pymntYm + "31");
        	} else {
        		this.div_search.cal_pymntDe.set_value(get_pymntYm + "20");
        	}
        }

        /***********************************************************************************
        * 설명	:월력 호출시 콜백
        ***********************************************************************************/
        this.fn_MonCal_callBack = function () {
        	this.div_search_cmb_pymntSe_onitemchanged();
        }
        this.div_search_btn_update1_onclick = function(obj,e)
        {
        	if(this.ds_cond01.getColumn(0, "PYMNT_DDC_CODE1") == null || this.ds_cond01.getColumn(0, "PYMNT_DDC_CODE1") == "N"){
        		this.ds_cond01.setColumn(0, "PYMNT_DDC_CODE1", "Y");
        		this.fn_loadPymntDdcCode1(this.div_search.cmb_pymntSe.value);
        		this.div_search.cmb_pymntDdcCode1.set_enable(true);
        		this.div_search.btn_update1.set_text("취소");
        	}else{
        		this.ds_cond01.setColumn(0, "PYMNT_DDC_CODE1", "N");
        		this.div_search.cmb_pymntDdcCode1.set_enable(false);
        		this.div_search.cmb_pymntDdcCode1.set_value("");
        		this.div_search.btn_update1.set_text("수정");
        	}
        }

        this.div_search_btn_update2_onclick = function(obj,e)
        {
        	if(this.ds_cond01.getColumn(0, "PYMNT_DDC_CODE2") == null || this.ds_cond01.getColumn(0, "PYMNT_DDC_CODE2") == "N"){
        		this.ds_cond01.setColumn(0, "PYMNT_DDC_CODE2", "Y");
        		this.div_search.cmb_pymntDdcCode2.set_enable(true);
        		this.div_search.btn_update2.set_text("취소");
        	}else{
        		this.ds_cond01.setColumn(0, "PYMNT_DDC_CODE2", "N");
        		this.div_search.cmb_pymntDdcCode2.set_enable(false);
        		this.div_search.cmb_pymntDdcCode2.set_value("");
        		this.div_search.btn_update2.set_text("수정");
        	}
        }

        this.ds_mtSalaryCal_onrowposchanged = function(obj,e)
        {
        	this.ds_cond.setColumn(0, "PYMNT_YM", obj.getColumn(e.newrow, "PYMNT_YM"));
        	this.ds_cond.setColumn(0, "SN"		, obj.getColumn(e.newrow, "SN"));
        	this.fn_transaction("selectJssfcSeList");	
        }

        this.ds_jssfcSe_onrowposchanged = function(obj,e)
        {
        	this.ds_salaryPymntIem.filter("JSSFC_SE == '" + obj.getColumn(e.newrow, "JSSFC_SE") + "'");
        	this.ds_salaryDdcIem.filter("JSSFC_SE == '" + obj.getColumn(e.newrow, "JSSFC_SE") + "'");
        }

        this.btn_dflt_onclick = function(obj,e)
        {
        	
        	var pymntFilter = this.ds_salaryPymntIem.filterstr;
        	this.ds_salaryPymntIem.filter("");
        	for(i = 0; i < this.ds_salaryPymntIem.getRowCount(); i++) {
        		if(this.ds_salaryPymntIem.getColumn(i, "DFLT") == "1") {
        			this.ds_salaryPymntIem.setColumn(i, "CALC_AT", "1");
        			this.ds_salaryPymntIem.setColumn(i, "CHK", "1");
        		}
        	}
        	this.ds_salaryPymntIem.filter(pymntFilter);
        	
        	var ddcFilter = this.ds_salaryDdcIem.filterstr;
        	this.ds_salaryDdcIem.filter("");
        	for(i = 0; i < this.ds_salaryDdcIem.getRowCount(); i++) {
        		if(this.ds_salaryDdcIem.getColumn(i, "DFLT") == "1") {
        			this.ds_salaryDdcIem.setColumn(i, "CALC_AT", "1");
        			this.ds_salaryDdcIem.setColumn(i, "CHK", "1");
        		}
        	}
        	this.ds_salaryDdcIem.filter(ddcFilter);
        }

        this.btn_calc_onclick = function(obj,e)
        {
        	var nRow 	= this.ds_mtSalaryCal.rowposition;
        	var pymntYm = this.ds_mtSalaryCal.getColumn(nRow, "PYMNT_YM");
        	var sn      = this.ds_mtSalaryCal.getColumn(nRow, "SN");
        	var pymntDe = this.ds_mtSalaryCal.getColumn(nRow, "PYMNT_DE");
        	
        	if(this.fn_isSalClosAt(pymntYm, sn)) {
        		this.gfn_message("comm.err", "해당 급여는 마감처리 되었습니다.");
        		return;
        	}
        	
        	for(i = 0; i < this.ds_jssfcSe.getRowCount(); i++) {
        		this.ds_jssfcSe.setColumn(i, "PYMNT_YM", pymntYm);
        		this.ds_jssfcSe.setColumn(i, "SN", sn);
        		this.ds_jssfcSe.setColumn(i, "PYMNT_DE", pymntDe);
        	}
        	
        	var pymntFilter = this.ds_salaryPymntIem.filterstr;
        	var ddcFilter	= this.ds_salaryDdcIem.filterstr;
        	this.ds_salaryPymntIem.filter("");
        	this.ds_salaryDdcIem.filter("");	
        	for(i = 0; i < this.ds_salaryPymntIem.getRowCount(); i++) {
        		if(this.ds_salaryPymntIem.getColumn(i, "CHK") == "1") {
        			this.ds_salaryPymntIem.setColumn(i, "PYMNT_YM", pymntYm);
        			this.ds_salaryPymntIem.setColumn(i, "SN", sn);
        		}
        	}
        	for(i = 0; i < this.ds_salaryDdcIem.getRowCount(); i++) {
        		if(this.ds_salaryDdcIem.getColumn(i, "CHK") == "1") {
        			this.ds_salaryDdcIem.setColumn(i, "PYMNT_YM", pymntYm);
        			this.ds_salaryDdcIem.setColumn(i, "SN", sn);
        		}
        	}
        	this.ds_salaryPymntIem.filter(pymntFilter);
        	this.ds_salaryDdcIem.filter(ddcFilter);
        	
        	this.fn_transaction("calcMtSalary");
        	
        }

        this.grd_mtSalaryCreat_oncellclick = function(obj,e)
        {
        	if(e.cell == 9) {
        		var pymntYm = this.ds_slaryRslt.getColumn(e.row, "PYMNT_YM");
        		var sn 		= this.ds_slaryRslt.getColumn(e.newrow, "SN");
        		
        		if(this.fn_isSalClosAt(pymntYm, sn)) {
        			this.gfn_message("comm.err", "해당 급여는 마감처리 되었습니다.");
        			return;
        		}
        		
        		this.ds_cond.setColumn(0, "PYMNT_YM", pymntYm);
        		this.ds_cond.setColumn(0, "SN"		, sn);
        		this.ds_cond.setColumn(0, "JSSFC_SE", this.ds_slaryRslt.getColumn(e.row, "JSSFC_SE"));
        		this.fn_transaction("deleteMtSalary");
        	}
        }

        this.Grid02_onheadclick = function(obj,e)
        {
        	if(e.cell == 0) {
        		for(i = 0; i < this.ds_jssfcSe.getRowCount(); i++) {
        			this.ds_jssfcSe.setColumn(i, "CHK", "1");
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_mtSalaryCal.addEventHandler("onrowposchanged", this.ds_mtSalaryCal_onrowposchanged, this);
            this.ds_jssfcSe.addEventHandler("onrowposchanged", this.ds_jssfcSe_onrowposchanged, this);
            this.addEventHandler("oninit", this.SAL030101_oninit, this);
            this.addEventHandler("onload", this.SAL030101_onload, this);
            this.Grid02.addEventHandler("onheadclick", this.Grid02_onheadclick, this);
            this.grd_mtSalaryCreat.addEventHandler("oncellclick", this.grd_mtSalaryCreat_oncellclick, this);
            this.btn_calc.addEventHandler("onclick", this.btn_calc_onclick, this);
            this.btn_dflt.addEventHandler("onclick", this.btn_dflt_onclick, this);

        };

        this.loadIncludeScript("SAL030101.xfdl");

       
    };
}
)();
