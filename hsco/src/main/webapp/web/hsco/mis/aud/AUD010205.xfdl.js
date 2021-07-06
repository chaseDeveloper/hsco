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
                this.set_name("AUD010205");
                this.set_classname("AUD010205");
                this.set_titletext("일상감사통계조회");
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
            obj._setContents("<ColumnInfo><Column id=\"RCEPT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PUBLIC_AUDIT_CL\" type=\"STRING\" size=\"256\"/><Column id=\"INSTT_ACCTO_CL\" type=\"STRING\" size=\"256\"/><Column id=\"EDAY_AUDIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ADTOR_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EDAY_AUDIT_RESULT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_validation", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">RCEPT_YEAR</Col><Col id=\"compId\">ds_cond</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">감사년도</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"EDAY_AUDIT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RCEPT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_SN\" type=\"STRING\" size=\"256\"/><Column id=\"RCEPT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUST_DE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"PUBLIC_AUDIT_CL\" type=\"STRING\" size=\"256\"/><Column id=\"INSTT_ACCTO_CL\" type=\"STRING\" size=\"256\"/><Column id=\"EDAY_AUDIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EDAY_AUDIT_CN\" type=\"STRING\" size=\"1500\"/><Column id=\"RELATE_LRG_CN\" type=\"STRING\" size=\"1500\"/><Column id=\"ADTOR_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"ADTOR_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"ADTOR_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ADTOR_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EDAY_AUDIT_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"RPLY_DE\" type=\"STRING\" size=\"256\"/><Column id=\"REDCN_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"OPINION_CN\" type=\"STRING\" size=\"1500\"/><Column id=\"CNTRCT_JDGMN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_JDGMN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGT_CONFIRM\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGT_RESULT\" type=\"STRING\" size=\"1500\"/><Column id=\"RESULT_DSPTH_AT\" type=\"STRING\" size=\"256\"/><Column id=\"OTHBC_AT\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGT_DE2\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGT_RESULT2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            
            // UI Components Initialize
            obj = new Div("div_SearchArea", "absolute", "0", "0", null, "59", "28", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Box");
            this.addChild(obj.name, obj);
            obj = new Static("sta_rceptYear", "absolute", "15", "5", "64", "21", null, null, this.div_SearchArea);
            obj.set_taborder("3");
            obj.set_text("감사년도");
            obj.style.set_align("left middle");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Static("sta_dept", "absolute", "162", "5", "64", "21", null, null, this.div_SearchArea);
            obj.set_taborder("6");
            obj.set_text("소관부서");
            obj.style.set_align("right middle");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Static("sta_publicAuditCl", "absolute", "446", "5", "77", "21", null, null, this.div_SearchArea);
            obj.set_taborder("7");
            obj.set_text("공감법분류");
            obj.style.set_align("left middle");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Combo("cmb_publicAuditCl", "absolute", "523", "5", "162", "21", null, null, this.div_SearchArea);
            this.div_SearchArea.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_aud014S");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj = new Combo("cmb_insttAcctoCl", "absolute", "777", "5", "170", "21", null, null, this.div_SearchArea);
            this.div_SearchArea.addChild(obj.name, obj);
            obj.set_innerdataset("ds_aud015S");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_taborder("4");
            obj = new Static("sta_edayAuditNm", "absolute", "15", "31", "38", "21", null, null, this.div_SearchArea);
            obj.set_taborder("8");
            obj.set_text("건명");
            obj.style.set_align("left middle");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Edit("edt_edayAuditNm", "absolute", "79", "31", "352", "21", null, null, this.div_SearchArea);
            obj.set_taborder("5");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Spin("spn_rceptYear", "absolute", "79", "5", "68", "21", null, null, this.div_SearchArea);
            obj.set_taborder("0");
            obj.set_value("0");
            obj.set_cssclass("spn_WF_Essential");
            obj.set_max("2050");
            obj.set_min("1950");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Div("div_dept", "absolute", "231", "5", "200", "22", null, null, this.div_SearchArea);
            obj.set_taborder("1");
            obj.set_async("false");
            obj.set_url("com::deptCode.xfdl");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Static("sta_insttAcctoCl", "absolute", "700", "5", "77", "21", null, null, this.div_SearchArea);
            obj.set_taborder("9");
            obj.set_text("기관별분류");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_align("left middle");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Static("sta_adtor", "absolute", "446", "32", "51", "21", null, null, this.div_SearchArea);
            obj.set_taborder("10");
            obj.set_text("감사자");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_align("left middle");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Div("div_EMP", "absolute", "523", "32", "162", "21", null, null, this.div_SearchArea);
            obj.set_taborder("11");
            obj.set_text("Div00");
            obj.set_async("false");
            obj.set_url("com::empno.xfdl");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Static("sta_edayAuditResult", "absolute", "700", "32", "64", "21", null, null, this.div_SearchArea);
            obj.set_taborder("12");
            obj.set_text("감사결과");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_align("left middle");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Combo("cmb_edayAuditResult", "absolute", "777", "32", "147", "21", null, null, this.div_SearchArea);
            this.div_SearchArea.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_innerdataset("ds_aud016S");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj = new Static("Static01", "absolute", "0", "0", "15", null, null, "0", this.div_SearchArea);
            obj.set_taborder("14");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "147", "0", "15", null, null, "0", this.div_SearchArea);
            obj.set_taborder("15");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "431", "0", "15", null, null, "0", this.div_SearchArea);
            obj.set_taborder("16");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "685", "0", "15", null, null, "0", this.div_SearchArea);
            obj.set_taborder("17");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_SearchArea.addChild(obj.name, obj);

            obj = new Div("div_work", "absolute", "0", "59", null, null, "28", "0", this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);
            obj = new Static("sta_EDAY_AUDIT_TRGET_LIST", "absolute", "0", "10", "216", "19", null, null, this.div_work);
            obj.set_taborder("0");
            obj.set_text("일상감사요청목록");
            obj.set_cssclass("sta_WF_Title02");
            obj.getSetter("titletext").set("내외부감사실시관리");
            this.div_work.addChild(obj.name, obj);
            obj = new Button("btn_exceldn", "absolute", null, "10", "24", "19", "0", null, this.div_work);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_Gridexceldn");
            this.div_work.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "0", null, "10", "0", null, this.div_work);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.div_work.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", "29", null, "5", "0", null, this.div_work);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.div_work.addChild(obj.name, obj);
            obj = new Grid("grd_EDAY_AUDIT_LIST", "absolute", "0", "34", null, null, "0", "0", this.div_work);
            obj.set_taborder("2");
            obj.set_binddataset("DS_EDAY_AUDIT");
            obj.set_extendsizetype("row");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"600\"/><Column size=\"600\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"500\"/><Column size=\"100\"/><Column size=\"500\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"요청번호\"/><Cell col=\"1\" text=\"요청일자\"/><Cell col=\"2\" colspan=\"3\" text=\"소관부서\"/><Cell col=\"5\" text=\"공감법분류\"/><Cell col=\"6\" text=\"건명\"/><Cell col=\"7\" rowspan=\"2\" text=\"관련법규내용\"/><Cell col=\"8\" text=\"회신일자\"/><Cell col=\"9\" text=\"감사결과\"/><Cell col=\"10\" colspan=\"2\" text=\"검토내용\"/><Cell col=\"12\" colspan=\"2\" text=\"조치결과(비고)\"/><Cell row=\"1\" text=\"결재상태\"/><Cell row=\"1\" col=\"1\" text=\"접수일자\"/><Cell row=\"1\" col=\"2\" text=\"사업코드\"/><Cell row=\"1\" col=\"3\" text=\"사업명\"/><Cell row=\"1\" col=\"4\" text=\"사업비\"/><Cell row=\"1\" col=\"5\" text=\"기관별분류\"/><Cell row=\"1\" col=\"6\" text=\"내용\"/><Cell row=\"1\" col=\"8\" text=\"감사자\"/><Cell row=\"1\" col=\"9\" text=\"결과통보여부\"/><Cell row=\"1\" col=\"10\" text=\"조치일자\"/><Cell row=\"1\" col=\"11\" text=\"조치의견\"/><Cell row=\"1\" col=\"12\" text=\"조치일자\"/><Cell row=\"1\" col=\"13\" text=\"조치결과\"/></Band><Band id=\"body\"><Cell style=\"padding: ;\" text=\"bind:EDAY_AUDIT_NO\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:REQUST_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" colspan=\"3\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:DEPT_NM\"/><Cell col=\"5\" displaytype=\"combo\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:PUBLIC_AUDIT_CL\" combodataset=\"ds_aud014\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"6\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:EDAY_AUDIT_NM\" wordwrap=\"char\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"7\" rowspan=\"2\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:RELATE_LRG_CN\" wordwrap=\"char\" tooltiptext=\"bind:RELATE_LRG_CN\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"8\" displaytype=\"date\" text=\"bind:RPLY_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"combo\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:EDAY_AUDIT_RESULT\" combodataset=\"ds_aud016\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" colspan=\"2\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:OPINION_CN\" wordwrap=\"char\" calendardisplaynulltype=\"none\" tooltiptext=\"bind:OPINION_CN\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"12\" colspan=\"2\" text=\"bind:RM\" tooltiptext=\"bind:RM\"/><Cell row=\"1\" displaytype=\"image\" style=\"padding: ;\" text=\"expr:SANCTN_STS == '' ? '' : comp.parent.parent.fn_get_imgUrl(SANCTN_STS)\"/><Cell row=\"1\" col=\"1\" displaytype=\"date\" edittype=\"none\" text=\"bind:RCEPT_DE\" calendardisplaynulltype=\"none\"/><Cell row=\"1\" col=\"2\" style=\"padding: ;\" text=\"bind:BSNS_CODE\"/><Cell row=\"1\" col=\"3\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:BSNS_NM\"/><Cell row=\"1\" col=\"4\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:BSNS_AMOUNT\"/><Cell row=\"1\" col=\"5\" displaytype=\"combo\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:INSTT_ACCTO_CL\" combodataset=\"ds_aud015\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell row=\"1\" col=\"6\" edittype=\"none\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:EDAY_AUDIT_CN\" wordwrap=\"char\" tooltiptext=\"bind:EDAY_AUDIT_NM\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell row=\"1\" col=\"8\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:ADTOR_EMPNM\" calendardisplaynulltype=\"none\"/><Cell row=\"1\" col=\"9\" displaytype=\"combo\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:RESULT_DSPTH_AT\" combodataset=\"ds_aud036\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" calendardisplaynulltype=\"none\"/><Cell row=\"1\" col=\"10\" displaytype=\"date\" style=\"align: ;\" text=\"bind:MANAGT_DE\" calendardisplaynulltype=\"none\"/><Cell row=\"1\" col=\"11\" displaytype=\"normal\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:MANAGT_RESULT\" wordwrap=\"char\" calendardisplaynulltype=\"none\" tooltiptext=\"bind:MANAGT_RESULT\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell row=\"1\" col=\"12\" text=\"bind:MANAGT_DE2\"/><Cell row=\"1\" col=\"13\" text=\"bind:MANAGT_RESULT2\" tooltiptext=\"bind:MANAGT_RESULT2\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_excelDown", "absolute", "0", "738", null, "230", "332", null, this);
            obj.set_taborder("3");
            obj.set_binddataset("DS_EDAY_AUDIT");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"251\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"접수일자\"/><Cell col=\"1\" text=\"소관부서\"/><Cell col=\"2\" text=\"공감법분류\"/><Cell col=\"3\" text=\"기관별분류\"/><Cell col=\"4\" text=\"건명\"/><Cell col=\"5\" text=\"사업비\"/><Cell col=\"6\" text=\"예산절감금액\"/><Cell col=\"7\" text=\"감사일자\"/><Cell col=\"8\" text=\"감사자\"/><Cell col=\"9\" text=\"감사결과\"/><Cell col=\"10\" text=\"감사결과요약\"/><Cell col=\"11\" text=\"조치일자\"/><Cell col=\"12\" text=\"조치확인\"/><Cell col=\"13\" text=\"공개여부\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" text=\"bind:RCEPT_DE\" calendardisplay=\"edit\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" text=\"bind:DEPT_NM\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"none\" text=\"bind:PUBLIC_AUDIT_CL\" combodataset=\"ds_AUD014\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"none\" text=\"bind:INSTT_ACCTO_CL\" combodataset=\"ds_aud015S\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:EDAY_AUDIT_NM\"/><Cell col=\"5\" displaytype=\"number\" text=\"bind:BSNS_AMOUNT\"/><Cell col=\"6\" displaytype=\"number\" text=\"bind:REDCN_AMOUNT\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:RPLY_DE_2\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" text=\"bind:ADTOR_EMPNM\"/><Cell col=\"9\" displaytype=\"combo\" text=\"bind:EDAY_AUDIT_RESULT\" combodataset=\"ds_aud016\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"10\" text=\"bind:MANAGT_RESULT\"/><Cell col=\"11\" displaytype=\"date\" text=\"bind:MANAGT_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"12\" displaytype=\"combo\" text=\"bind:MANAGT_CONFIRM\" combodataset=\"ds_AUD037\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"13\" displaytype=\"normal\" text=\"expr:OTHBC_AT=='1'?'공개':'비공개'\"/></Band></Format></Formats>");
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
            obj = new Layout("default", "", 0, 0, this.div_work,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");

            	}
            );
            this.div_work.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1059, 735, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AUD010205");
            		p.set_titletext("일상감사통계조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","div_SearchArea.cmb_publicAuditCl","value","ds_cond","PUBLIC_AUDIT_CL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_SearchArea.cmb_insttAcctoCl","value","ds_cond","INSTT_ACCTO_CL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_SearchArea.edt_edayAuditNm","value","ds_cond","EDAY_AUDIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_SearchArea.spn_rceptYear","value","ds_cond","RCEPT_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","div_SearchArea.cmb_edayAuditResult","value","ds_cond","EDAY_AUDIT_RESULT");
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
        this.addIncludeScript("AUD010205.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("AUD010205.xfdl", "mis_lib::misUtil.xjs");
        this.registerScript("AUD010205.xfdl", function() {
        /***********************************************************************
         * 01. 업무구분 : 감사관리
         * 02. 화면명   : AUD010205.xfdl
         * 03. 화면설명 : 일상감사관리 테이블의 일상감사통계 정보를 관리한다.
         * 04. 작성일   : 2015.07.03
         * 05. 작성자   : 이지영
         * 06. 수정이력 : 2015.07.03 최초생성
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

        /***********************************************************************
         * 화면 변수 선언부
         ***********************************************************************/

        
        /***********************************************************************
         * 설명: oninit 영역
         ************************************************************************/
        this.AUD010205_oninit = function(obj,e)
        {
        	// ..
        }

        /***********************************************************************
         * 설명: 폼로딩시 처리
         ************************************************************************/
        this.AUD010205_onload = function(obj,e)
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
        	
        	// 초기화
        	this.ds_cond.clearData();   // 조회 데이터셋 초기화	
        	this.ds_cond.addRow();      // 조회 데이터셋 행추가
        	this.ds_cond.setColumn(0, "RCEPT_YEAR", this.gfn_today().substring(0,4));
        	this.div_SearchArea.div_dept.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");
        	
        	var comboParams = [["ds_aud014S", "AUD014", 1, "전체"],		// 공감법분류(조회)
        	                   ["ds_aud015S", "AUD015", 1, "전체"], 	// 기관별분류(조회)
        	                   ["ds_aud016S", "AUD016", 1, "전체"],		// 감사결과(조회)
        	                   ["ds_aud014" , "AUD014", 1, "전체"],		// 공감법분류
        	                   ["ds_aud015" , "AUD015", 1, "전체"], 	// 기관별분류
        	                   ["ds_aud016" , "AUD016", 1, ""],			// 감사결과
        	                   ["ds_aud036" , "AUD036", 1, ""]			// 감사결과
        		              ];
        	var callback = function (svcId, errorCode, errorMsg) {
        	 	this.fn_search();
        	};
        	this.gfn_comboLoad (comboParams, callback);
        }

        /**********************************************************************
        * Dataset 오브젝트 초기화
        ***********************************************************************/
        this.fn_init_dataset = function()
        {
        	// ..
        }

        /***********************************************************************
         * 설명: 조회 처리
         ************************************************************************/
        this.fn_search = function(obj,e)
        {
        	// validation 체크
        	if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond, this.ds_validation)) {
        		return;
        	}
        	
        	this.fn_transaction("selectEdayAuditList");
        }

        /**********************************************************************
         * CALL TRANSACTION 영역
         **********************************************************************/ 
        this.fn_transaction = function(strSvcId)
        {
        	switch (strSvcId) {
        		//상단조회
        		case "selectEdayAuditList":
        			this.DS_EDAY_AUDIT.clearData();
        			var sController   	= "hsco/mis/aud/AUD010205/selectEdayAuditList.do";
        			var sInDatasets   	= "input01=ds_cond";
        			var sOutDatasets  	= "DS_EDAY_AUDIT=output01";
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
        		if (strSvcId =="selectEdayAuditList")
        		{
        			this.div_work.sta_EDAY_AUDIT_TRGET_LIST.set_text("일상감사요청목록(" + this.DS_EDAY_AUDIT.rowcount + "건)");
        		}
        		
        	}
        }

        /***********************************************************************
        * 엑셀다운로드 버튼 클릭 시
        ************************************************************************/
        this.div_Cont_btn_exceldn_onclick = function(obj,e)
        {
        	//엑셀다운로드
        	this.gfn_exportExcel(this.grd_excelDown, "edayAuditList");
        }

        this.ds_cond_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "PUBLIC_AUDIT_CL") {
        		this.ds_aud015S.filter("String(VAL1).indexOf('" + e.newvalue + "') >= 0 || CODE == ''");
        		obj.setColumn(e.row, "INSTT_ACCTO_CL", "");
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_cond.addEventHandler("oncolumnchanged", this.ds_cond_oncolumnchanged, this);
            this.DS_EDAY_AUDIT.addEventHandler("onrowposchanged", this.DS_EDAY_AUDIT_onrowposchanged, this);
            this.addEventHandler("onload", this.AUD010205_onload, this);
            this.addEventHandler("oninit", this.AUD010205_oninit, this);
            this.div_SearchArea.cmb_publicAuditCl.addEventHandler("onitemchanged", this.Div00_div_cmb_AUDIT_PLAN_KND_onitemchanged, this);
            this.div_SearchArea.div_EMP.addEventHandler("onkeyup", this.div_SEARCH_div_EMP_onkeyup, this);
            this.div_SearchArea.cmb_edayAuditResult.addEventHandler("onitemchanged", this.Div00_div_cmb_AUDIT_PLAN_KND_onitemchanged, this);
            this.div_work.sta_EDAY_AUDIT_TRGET_LIST.addEventHandler("onclick", this.Static00_onclick, this);
            this.div_work.btn_exceldn.addEventHandler("onclick", this.div_Cont_btn_exceldn_onclick, this);

        };

        this.loadIncludeScript("AUD010205.xfdl");
        this.loadPreloadList();
       
    };
}
)();
