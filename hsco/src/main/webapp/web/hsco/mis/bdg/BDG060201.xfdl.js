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
                this.set_name("BDG060201");
                this.set_classname("BDG060101");
                this.set_titletext("수시배정요구등록");
                this._setFormPosition(0,0,1059,735);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cond", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_SE\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_anytmAsignDemand", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BUDGET_SE\" type=\"STRING\" size=\"1\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"1\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"1\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"7\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"8\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUKIP_CODE\" type=\"STRING\" size=\"8\"/><Column id=\"BUKIP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"ASIGN_TYPE\" type=\"STRING\" size=\"2\"/><Column id=\"ASIGN_RESN\" type=\"STRING\" size=\"400\"/><Column id=\"DEMAND_AM\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"DEMAND_MT\" type=\"STRING\" size=\"2\"/><Column id=\"IN_ROW_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"IN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"IN_BUDGET_SE\" type=\"STRING\" size=\"256\"/><Column id=\"IN_BSNS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"IN_BALC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"IN_BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"IN_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"IN_BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"IN_SN\" type=\"STRING\" size=\"256\"/><Column id=\"IN_ASIGN_RESN\" type=\"STRING\" size=\"256\"/><Column id=\"IN_DEMAND_AM\" type=\"STRING\" size=\"256\"/><Column id=\"IN_DEMAND_MT\" type=\"STRING\" size=\"256\"/><Column id=\"IN_REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_RESULT_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"DCSN_AM\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"DCSN_DE\" type=\"STRING\" size=\"8\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"8\"/><Column id=\"DCSN_AT\" type=\"STRING\" size=\"1\"/><Column id=\"BUDGET_AM\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"LEGACY_ASIGN_AM\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"BUDGET_ASIGN_BLCE\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"DECSN_AMOUNT\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"ASIGN_EXCUT_BLCE\" type=\"BIGDECIMAL\" size=\"15\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_bdg003", this);
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

            obj = new Dataset("ds_bdg022", this);
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

            obj = new Dataset("ds_bdg023", this);
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

            obj = new Dataset("ds_validation", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_anytmAsignDemand</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">예산년도</Col><Col id=\"colId\">YEAR</Col><Col id=\"PK\"/><Col id=\"nlength\">4</Col></Row><Row><Col id=\"compId\">ds_anytmAsignDemand</Col><Col id=\"colId\">BUDGET_SE</Col><Col id=\"msgId\">예산구분</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col><Col id=\"nlength\">1</Col></Row><Row><Col id=\"compId\">ds_anytmAsignDemand</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col><Col id=\"msgId\">사업구분</Col><Col id=\"colId\">BSNS_SE</Col><Col id=\"nlength\">1</Col></Row><Row><Col id=\"compId\">ds_anytmAsignDemand</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col><Col id=\"msgId\">수지구분</Col><Col id=\"colId\">BALC_SE</Col><Col id=\"nlength\">1</Col></Row><Row><Col id=\"compId\">ds_anytmAsignDemand</Col><Col id=\"colId\">BSNS_CODE</Col><Col id=\"msgId\">사업코드</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_anytmAsignDemand</Col><Col id=\"colId\">DEPT_CODE</Col><Col id=\"msgId\">부서코드</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_anytmAsignDemand</Col><Col id=\"colId\">BUDGET_ACNT_CODE</Col><Col id=\"msgId\">예산과목코드</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col><Col id=\"nlength\">8</Col></Row><Row><Col id=\"compId\">ds_anytmAsignDemand</Col><Col id=\"colId\">DEMAND_AM</Col><Col id=\"msgId\">요구금액</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_anytmAsignDemand_</Col><Col id=\"colId\">DEMAND_AM</Col><Col id=\"msgId\">요구금액^배정집행잔액</Col><Col id=\"notNull\">Y</Col><Col id=\"to\">ASIGN_EXCUT_BLCE</Col></Row><Row><Col id=\"compId\">ds_anytmAsignDemand</Col><Col id=\"colId\">DEMAND_MT</Col><Col id=\"msgId\">요구월</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_anytmAsignDemand</Col><Col id=\"colId\">ASIGN_RESN</Col><Col id=\"msgId\">배정사유</Col><Col id=\"notNull\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "0", null, "33", "28", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Box");
            this.addChild(obj.name, obj);
            obj = new Static("sta_YEAR", "absolute", "15", "5", "64", "21", null, null, this.div_search);
            obj.set_taborder("2");
            obj.set_text("예산년도");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("div_srchDept", "absolute", "192", "5", "179", "21", null, null, this.div_search);
            obj.set_taborder("6");
            obj.set_async("false");
            obj.set_enable("false");
            obj.set_url("com::deptCode.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_DEPT_CODE", "absolute", "154", "5", "38", "21", null, null, this.div_search);
            obj.set_taborder("5");
            obj.set_text("부서");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_BUDGET_SE", "absolute", "386", "5", "64", "21", null, null, this.div_search);
            obj.set_taborder("8");
            obj.set_text("예산구분");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_BUDGET_SE", "absolute", "450", "5", "80", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_bdg003");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_visible("false");
            obj = new Static("Static05", "absolute", "0", "5", "15", null, null, "35", this.div_search);
            obj.set_taborder("11");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static36", "absolute", "0", "0", null, "5", "0", null, this.div_search);
            obj.set_taborder("0");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#fa794f66");
            obj.style.set_align("center middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "139", "5", "15", "21", null, null, this.div_search);
            obj.set_taborder("4");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Spin("spn_YEAR", "absolute", "79", "5", "60", "21", null, null, this.div_search);
            obj.set_taborder("3");
            obj.set_value("0");
            obj.set_max("9999");
            obj.style.set_buttonsize("15");
            obj.style.set_padding("0 0 0 0");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "371", "5", "15", "21", null, null, this.div_search);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "0", null, null, "5", "0", "0", this.div_search);
            obj.set_taborder("10");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#fa794f66");
            obj.style.set_align("center middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "5", "15", "21", null, null, this.div_search);
            obj.set_taborder("1");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "1031", "0", "15", "735", null, null, this);
            obj.set_taborder("2");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", null, "0", "13", "735", "0", null, this);
            obj.set_taborder("3");
            obj.set_text("스\r\n크\r\n롤\r\n13");
            obj.set_visible("false");
            obj.style.set_background("#d07b173c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "33", null, "10", "28", null, this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ANYTM_ASIGN_DEMAND", "absolute", "0", "43", "90", "19", null, null, this);
            obj.set_taborder("5");
            obj.set_text("수시배정요구");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "0", "62", null, "5", "28", null, this);
            obj.set_taborder("6");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ANYTM_ASIGN_DEMAND", "absolute", "0", "67", null, null, "28", "0", this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_anytmAsignDemand");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"40\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"220\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"사업\"/><Cell col=\"2\" colspan=\"2\" text=\"담당부서\"/><Cell col=\"4\" colspan=\"2\" text=\"예산과목(목-세목)\"/><Cell col=\"6\" rowspan=\"2\" text=\"승인&#13;&#10;여부\"/><Cell col=\"7\" rowspan=\"2\" text=\"예산액&#13;&#10;(A)\"/><Cell col=\"8\" rowspan=\"2\" text=\"기배정액&#13;&#10;(B)\"/><Cell col=\"9\" rowspan=\"2\" text=\"예산배정잔액&#13;&#10;(A-B)\"/><Cell col=\"10\" rowspan=\"2\" text=\"지출액&#13;&#10;(C)\"/><Cell col=\"11\" rowspan=\"2\" text=\"배정집행잔액&#13;&#10;(B-C)\"/><Cell col=\"12\" colspan=\"3\" text=\"배정요구\"/><Cell col=\"15\" colspan=\"2\" text=\"배정확정\"/><Cell col=\"17\" rowspan=\"2\" text=\"배정사유\"/><Cell row=\"1\" text=\"사업코드\"/><Cell row=\"1\" col=\"1\" text=\"사업명\"/><Cell row=\"1\" col=\"2\" text=\"부서코드\"/><Cell row=\"1\" col=\"3\" text=\"부서명\"/><Cell row=\"1\" col=\"4\" text=\"예산과목코드\"/><Cell row=\"1\" col=\"5\" text=\"예산과목명\"/><Cell row=\"1\" col=\"12\" text=\"요구금액\"/><Cell row=\"1\" col=\"13\" text=\"요구월\"/><Cell row=\"1\" col=\"14\" text=\"등록일\"/><Cell row=\"1\" col=\"15\" text=\"확정금액\"/><Cell row=\"1\" col=\"16\" text=\"확정일자\"/></Band><Band id=\"body\"><Cell style=\"selectbackground:#ffffffff;\" text=\"bind:BSNS_CODE\" suppress=\"1\" suppressalign=\"first,over\"/><Cell col=\"1\" style=\"align:left middle;padding:0 0 0 5;selectbackground:#ffffffff;\" text=\"bind:BSNS_NM\" suppress=\"1\" suppressalign=\"first,over\" tooltiptext=\"bind:BSNS_NM\"/><Cell col=\"2\" style=\"selectbackground:#ffffffff;\" text=\"bind:DEPT_CODE\" suppress=\"2\" suppressalign=\"first,over\"/><Cell col=\"3\" style=\"align:left middle;padding:0 0 0 5;selectbackground:#ffffffff;\" text=\"bind:DEPT_NM\" suppress=\"2\" suppressalign=\"first,over\" tooltiptext=\"bind:DEPT_NM\"/><Cell col=\"4\" style=\"selectbackground:#ffffffff;\" text=\"bind:BUDGET_ACNT_CODE\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'show' : 'none'\" suppress=\"3\" suppressalign=\"first,over\"/><Cell col=\"5\" style=\"align:left middle;padding:0 0 0 5;selectbackground:#ffffffff;\" text=\"bind:BUDGET_ACNT_NM\" suppress=\"3\" suppressalign=\"first,over\" tooltiptext=\"bind:BUDGET_ACNT_NM\"/><Cell col=\"6\" displaytype=\"checkbox\" style=\"controlborder:1 none #808080ff ;\" text=\"bind:DCSN_AT\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:BUDGET_AM\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:LEGACY_ASIGN_AM\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:BUDGET_ASIGN_BLCE\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:DECSN_AMOUNT\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:ASIGN_EXCUT_BLCE\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"expr:DCSN_AT == '1' ? 'none' : 'masknumber'\" style=\"align:right middle;\" text=\"bind:DEMAND_AM\" mask=\"###,###,###,###,##0\" editdisplay=\"expr:DCSN_AT == '1' ? 'edit' : 'display'\"/><Cell col=\"13\" displaytype=\"combo\" edittype=\"expr:DCSN_AT == '1' ? 'none' : 'combo'\" text=\"bind:DEMAND_MT\" combodataset=\"ds_bdg023\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodisplay=\"expr:DCSN_AT == '1' ? 'edit' : 'display'\"/><Cell col=\"14\" displaytype=\"date\" edittype=\"none\" text=\"bind:REGIST_DT\" calendardisplaynulltype=\"none\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:DCSN_AM\"/><Cell col=\"16\" displaytype=\"date\" text=\"bind:DCSN_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"17\" edittype=\"expr:DCSN_AT == '1' ? 'none' : 'normal'\" style=\"align:left middle;\" text=\"bind:ASIGN_RESN\" editlimit=\"600\" editdisplay=\"expr:DCSN_AT == '1' ? 'edit' : 'display'\" editlengthunit=\"utf8\" tooltiptext=\"bind:ASIGN_RESN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
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
            obj = new Layout("default", "", 1059, 735, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("BDG060101");
            		p.set_titletext("수시배정요구등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item14","div_search.spn_YEAR","value","ds_cond","YEAR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_search.cbo_BUDGET_SE","value","ds_cond","BUDGET_SE");
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
        this.addIncludeScript("BDG060201.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("BDG060201.xfdl", "mis_lib::misUtil.xjs");
        this.registerScript("BDG060201.xfdl", function() {
        /**********************************************************************
        * 화면ID   : BDG060201.xfdl
        * 화면명   : 수시배정요구등록
        * 화면설명 : 수시배정요구등록을 관리한다.
        * 작성일   : 2017.05.08
        * 작성자   : 김형태
        * 수정이력 : 
        ***********************************************************************
        *     수정일     수정자   내용
        ***********************************************************************
        *
        ***********************************************************************
        */

        
        /**********************************************************************
        * Script Include 
        ***********************************************************************/
        // 시스템 공통 라이브러리 Include
        //include "lib::comInclude.xjs";
        //include "mis_lib::misUtil.xjs";

        /**********************************************************************
        * 화면 변수 선언부
        ***********************************************************************/

        //저장시 rowposition값 저장할 변수
        var save_row = -1;
        var chargerAt = false;

        
        /**********************************************************************
        * onInit / onLoad 영역
        ***********************************************************************/
        this.BDG060201_oninit = function(obj,e)
        {
        	// ..
        }

        this.BDG060201_onload = function(obj,e)
        {
        	// Form 초기화
        	this.fn_init_form();

        	// DataSet 초기화
        	this.fn_init_dataset();
        }

        

        /**********************************************************************
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
        	this.div_search.div_srchDept.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");
        	
        	// 최초 검색조건에 대한 처리
        	this.ds_cond.clearData();
        	var nRow = this.ds_cond.addRow();
        	this.ds_cond.setColumn(nRow, "YEAR", this.comUtils.getClientDate("YYYY"));	// 당해년도
        	
        	// 공통코드
        	var comboParams = [
        	    ["ds_bdg003", "BDG003", "Y", "D", "B"]	// ds_bdg003 : 예산구분
        	   ,["ds_bdg022", "BDG022", "Y", "D", "B"]	// ds_bdg022 : 배정유형
        	   ,["ds_bdg023", "BDG023", "Y", "D", "B"]	// ds_bdg023 : 월별코드
        	];
        	var callback = function (svcId, errorCode, errorMsg) {
        		// 본예산과 이월예산만 표현
        		this.ds_bdg003.filter("CODE == '0' || CODE == 'B'");
        		
        		// 공통코드와 연계된 초기검색조건 설정
        		//this.ds_cond.setColumn(nRow, "BUDGET_SE", "0");	// (예산구분) 0:본예산, B:이월예산
        		
        		
        		// 수정가능여부를 판별하기위해 권한그룹 체크
        		if(this.gfn_authGrpId("BDG_USER") != -1) {			// 예산담당자
        			chargerAt = true;
        		}
        		if(this.gfn_authGrpId("BDG_ADMIN") != -1) {			// 예산결재자
        			chargerAt = true;
        		}
        		
        		// 수정가능한 경우 부서변경 가능
        		if(chargerAt){
        			this.div_search.div_srchDept.set_enable(true);
        			this.ds_cond.setColumn(nRow, "DEPT_CODE", "000000"        );		// 부서코드
        			this.ds_cond.setColumn(nRow, "DEPT_NM",   "화성도시공사");		// 부서명
        		}
        		// 본인의 부서 고정
        		else{
        			//해당 부서만
        			this.ds_cond.setColumn(nRow, "DEPT_CODE", this.gfn_getDeptId()  );	// 부서코드
        			this.ds_cond.setColumn(nRow, "DEPT_NM",   this.gfn_getDeptName());	// 부서명
        		}
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

        

        /**********************************************************************
        * Transaction 관련 이벤트 핸들러 
        ***********************************************************************/

        /*
         * 함수명  	: fn_search
         * 설명 		: 조회 이벤트 처리(수시배정요구)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_search();
         */
        this.fn_search = function(obj,e)
        {
        	// 변경여부 체크
        	if(Ex.util.isUpdated(this.ds_anytmAsignDemand)) {
        		if(!this.gfn_message("confirm.변경.취소.여부")) {
        			return false;	// 아니오
        		}
        	}
        	
        	// clear Datasets
        	this.ds_anytmAsignDemand.clearData();
        	
        	var year  = this.ds_cond.getColumn(0, "YEAR");
        	var nYear = nexacro.toNumber(year, 0);
        	
        	if(nYear < 2018) {
        		this.ds_cond.setColumn(0, "YEAR_SE", "1");
        	}
        	else {
        		this.ds_cond.setColumn(0, "YEAR_SE", "2");
        	}
        	
        	// transaction
        	this.fn_transaction("selectAnytmAsignDemand");
        }

        
        /*
         * 함수명  	: fn_save
         * 설명 		: 저장 이벤트 처리(수시배정요구)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_save();
         */
        this.fn_save = function()
        {
        	// 데이터셋 수정 여부체크
        	if (!this.comUtils.isDatasetUpdated(this.ds_anytmAsignDemand)) {
        		this.gfn_message("comm.데이터.변경.없음");
        		return false;
        	}
        	
        	// validation 체크(수시배정요구)
        	if(!this.gfn_checkValidation_NoUpdChk(this.ds_anytmAsignDemand, this.ds_validation)) {
        		return;
        	}
        	
        	if(this.gfn_message("confirm.저장.여부")) {
        		save_row = this.ds_anytmAsignDemand.rowposition;
        		this.fn_transaction("save");
        	}
        }

        

        /**********************************************************************
        * call Transaction 영역
        ***********************************************************************/

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
        		case "selectAnytmAsignDemand":	// 수시배정요구 조회
        			var sController   	= "/hsco/mis/bdg/BDG060201/selectAnytmAsignDemand.do";
        			var sInDatasets   	= "input1=ds_cond";
        			var sOutDatasets  	= "ds_anytmAsignDemand=output1";
        			break;
        		case "save":	// 저장(수시배정요구등록)
        			for(var i = 0; i < this.ds_anytmAsignDemand.getRowCount(); i++) {
        				if(this.ds_anytmAsignDemand.getRowType(i) == Dataset.ROWTYPE_UPDATE
        				   || this.ds_anytmAsignDemand.getRowType(i) == Dataset.ROWTYPE_INSERT) {
        					var year      = this.ds_anytmAsignDemand.getColumn(i, "YEAR");
        					var budgetSe  = this.ds_anytmAsignDemand.getColumn(i, "BUDGET_SE");
        					var bsnsSe    = this.ds_anytmAsignDemand.getColumn(i, "BSNS_SE");
        					var balcSe    = this.ds_anytmAsignDemand.getColumn(i, "BALC_SE");
        					var bsnsCode  = this.ds_anytmAsignDemand.getColumn(i, "BSNS_CODE");
        					var deptCode  = this.ds_anytmAsignDemand.getColumn(i, "DEPT_CODE");
        					var acntCode  = this.ds_anytmAsignDemand.getColumn(i, "BUDGET_ACNT_CODE");
        					var sn        = this.ds_anytmAsignDemand.getColumn(i, "SN");
        					var asignResn = this.ds_anytmAsignDemand.getColumn(i, "ASIGN_RESN");
        					var demandAm  = this.ds_anytmAsignDemand.getColumn(i, "DEMAND_AM");
        					var demandMt  = this.ds_anytmAsignDemand.getColumn(i, "DEMAND_MT");
        					var registId  = this.gfn_getUserId();
        					
        					var rowTypeV  = this.ds_anytmAsignDemand.getRowType(i);
        					var rowType   = null;
        					if(rowTypeV == 2) {
        						rowType = "INSERT";
        					}
        					else if(rowTypeV == 4) {
        						rowType = "UPDATE";
        					}
        					
        					if(this.comUtils.isNull(sn)) {
        						sn = null;
        					}
        					
        					this.ds_anytmAsignDemand.setColumn(i, "IN_ROW_TYPE"        , rowType);
        					this.ds_anytmAsignDemand.setColumn(i, "IN_YEAR"            , year);
        					this.ds_anytmAsignDemand.setColumn(i, "IN_BUDGET_SE"       , budgetSe);
        					this.ds_anytmAsignDemand.setColumn(i, "IN_BSNS_SE"         , bsnsSe);
        					this.ds_anytmAsignDemand.setColumn(i, "IN_BALC_SE"         , balcSe);
        					this.ds_anytmAsignDemand.setColumn(i, "IN_BSNS_CODE"       , bsnsCode);
        					this.ds_anytmAsignDemand.setColumn(i, "IN_DEPT_CODE"       , deptCode);
        					this.ds_anytmAsignDemand.setColumn(i, "IN_BUDGET_ACNT_CODE", acntCode);
        					this.ds_anytmAsignDemand.setColumn(i, "IN_SN"              , sn);
        					this.ds_anytmAsignDemand.setColumn(i, "IN_ASIGN_RESN"      , asignResn);
        					this.ds_anytmAsignDemand.setColumn(i, "IN_DEMAND_AM"       , demandAm);
        					this.ds_anytmAsignDemand.setColumn(i, "IN_DEMAND_MT"       , demandMt);
        					this.ds_anytmAsignDemand.setColumn(i, "IN_REGISTER_ID"     , registId);
        				}
        			}
        			var sController   	= "hsco/mis/bdg/BDG060201/save.do";
        			var sInDatasets   	= "input1=ds_anytmAsignDemand:U";
        			var sOutDatasets  	= "";
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

        	if (nErrorCode == 0){
        		switch (strSvcId) {
        			case "selectAnytmAsignDemand":		// 조회(수시배정요구)
        				break;
        			case "save": 						// 저장(수시배정요구등록)			
        				this.gfn_message("success.처리.성공");
        				this.fn_search();
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
        	// 예산계정과목팝업
        	if(sPopupId == "BDG060201_P01") {
        		var dsTemp = new Dataset();
        		var loadCnt = dsTemp.loadXML(sReturn);
         		if(loadCnt) {
        			var bsnsSe          = dsTemp.getColumn(0, "BSNS_SE");
        			var balcSe          = dsTemp.getColumn(0, "BALC_SE");
        			var bsnsCode        = dsTemp.getColumn(0, "DETAIL_BSNS_CODE");
         			var bsnsNm          = dsTemp.getColumn(0, "DETAIL_BSNS_NM");
         			var acntCode        = dsTemp.getColumn(0, "BUDGET_ACNT_CODE");
         			var acntNm          = dsTemp.getColumn(0, "BUDGET_ACNT_NM");
         			var budgetAm        = dsTemp.getColumn(0, "BUDGET_AM");
         			var legacyAsingAm   = dsTemp.getColumn(0, "LEGACY_ASIGN_AM");
         			var budgetAsignBlce = dsTemp.getColumn(0, "BUDGET_ASIGN_BLCE");
         			var decsnAm         = dsTemp.getColumn(0, "DECSN_AMOUNT");
         			var asignExcutBlce  = dsTemp.getColumn(0, "ASIGN_EXCUT_BLCE");
         			
        			var nRow = this.ds_anytmAsignDemand.rowposition;
        			this.ds_anytmAsignDemand.setColumn(nRow, "BSNS_SE"          , bsnsSe);
        			this.ds_anytmAsignDemand.setColumn(nRow, "BALC_SE"          , balcSe);
        			this.ds_anytmAsignDemand.setColumn(nRow, "BSNS_CODE"        , bsnsCode);
        			this.ds_anytmAsignDemand.setColumn(nRow, "BSNS_NM"          , bsnsNm);
        			this.ds_anytmAsignDemand.setColumn(nRow, "BUDGET_ACNT_CODE" , acntCode);
        			this.ds_anytmAsignDemand.setColumn(nRow, "BUDGET_ACNT_NM"   , acntNm);
        			this.ds_anytmAsignDemand.setColumn(nRow, "BUDGET_AM"        , budgetAm);
        			this.ds_anytmAsignDemand.setColumn(nRow, "LEGACY_ASIGN_AM"  , legacyAsingAm);
        			this.ds_anytmAsignDemand.setColumn(nRow, "BUDGET_ASIGN_BLCE", budgetAsignBlce);
        			this.ds_anytmAsignDemand.setColumn(nRow, "DECSN_AMOUNT"     , decsnAm);
        			this.ds_anytmAsignDemand.setColumn(nRow, "ASIGN_EXCUT_BLCE" , asignExcutBlce);
         		}
        	}
        }

        

        /**********************************************************************
        * Transaction 영역 끝
        ***********************************************************************/

        

        /**********************************************************************
        * non-Transaction 관련 컴포넌트 이벤트 처리 함수
        ***********************************************************************
        *
        * 1. Dataset 관련 이벤트 처리
        * 2. Grid 관련 이벤트 처리
        * 3. 공통버튼 관련 이벤트 처리
        * 
        ***********************************************************************/

        

        /**********************************************************************
        * Dataset 관련 이벤트 처리
        ***********************************************************************/

        

        
        /**********************************************************************
        * Grid 관련 이벤트 처리
        ***********************************************************************/

        /*
         * 함수명  	: grd_ANYTM_ASIGN_DEMAND_onexpandup
         * 설명 		: 그리드 버튼 클릭 후 이벤트 처리(Popup)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.grd_ANYTM_ASIGN_DEMAND_onexpandup(obj,e);
         */
        this.grd_ANYTM_ASIGN_DEMAND_onexpandup = function(obj,e)
        {
        	if(e.cell == '4') {
        		// 예산계정과목팝업
        		var parm = {
        			 arg_0      : this
        			,searchYear      : this.ds_cond.getColumn(0, "YEAR")
        			,searchDeptCode  : this.ds_cond.getColumn(0, "DEPT_CODE")
        			,searchDeptNm    : this.ds_cond.getColumn(0, "DEPT_NM")
        		};
        		this.gfn_popup("BDG060201_P01", 800, 530, "", parm, "mis_bdg::BDG060201_P01.xfdl", "fn_popupCallBack", true);
        	}
        }

        
        /**********************************************************************
        * 공통버튼 관련 이벤트 처리
        ***********************************************************************/

        /*
         * 함수명  	: fn_insert
         * 설명 		: 신규 버튼 이벤트 처리(행추가)
         * params  		: Non
         * return Type 	: None
         * 사용법		: this.fn_insert();
         */
        this.fn_insert = function()
        {
        	var addRow = this.ds_anytmAsignDemand.addRow();
        	
        	// todo. 배정유형, 담당부서, 등록일 입력
        	var today = this.comUtils.getClientDate("YYYYMMDD");
        	var year     = this.ds_cond.getColumn(0, "YEAR");
        	var deptCode = this.gfn_getDeptId();
        	var deptNm   = this.gfn_getDeptName();
        	
        	this.ds_anytmAsignDemand.setColumn(addRow, "YEAR"      , year);
        	this.ds_anytmAsignDemand.setColumn(addRow, "BUDGET_SE" , "0");
        	this.ds_anytmAsignDemand.setColumn(addRow, "ASIGN_TYPE", "00");
        	this.ds_anytmAsignDemand.setColumn(addRow, "DEPT_CODE" , deptCode);
        	this.ds_anytmAsignDemand.setColumn(addRow, "DEPT_NM"   , deptNm);
        	this.ds_anytmAsignDemand.setColumn(addRow, "DEMAND_MT" , today.substr(4, 2));
        	this.ds_anytmAsignDemand.setColumn(addRow, "REGIST_DT" , today);
        	this.ds_anytmAsignDemand.setColumn(addRow, "DCSN_AT"   , "0");
        }

        
        /*
         * 함수명  	: fn_delete
         * 설명 		: 삭제 버튼 이벤트 처리(행삭제)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_delete();
         */
        this.fn_delete = function()
        {
        	var dRow = this.ds_anytmAsignDemand.rowposition;
        	var dcsnAt = this.ds_anytmAsignDemand.getColumn(dRow, "DCSN_AT");
        	
        	if(dRow < 0) {
        		this.gfn_message("comm.데이터.선택.없음");
        		return false;
        	}
        	if(dcsnAt == "1") {
        		this.gfn_message("info.처리불가", "승인된 정보는 삭제할 수 없습니다.");
        		return false;
        	}
        	if(!this.gfn_message("confirm.삭제여부")) {
        		return false;	// 아니오
        	}
        	
        	this.ds_anytmAsignDemand.deleteRow(dRow);
        }

        
        /*
         * 함수명  	: fn_cancel
         * 설명 		: 취소 버튼 이벤트 처리(Dataset 변경 내역 Reset)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_cancel();
         */
        this.fn_cancel = function()
        {
        	if(Ex.util.isUpdated(this.ds_anytmAsignDemand)) {
        		if(!this.gfn_message("confirm.변경.취소.여부")) {
        			return false;	// 아니오
        		}
        		this.ds_anytmAsignDemand.reset();
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.BDG060201_oninit, this);
            this.addEventHandler("onload", this.BDG060201_onload, this);
            this.div_search.cbo_BUDGET_SE.addEventHandler("onitemchanged", this.div_search_cbo_BUDGET_SE_onitemchanged, this);
            this.grd_ANYTM_ASIGN_DEMAND.addEventHandler("onexpandup", this.grd_ANYTM_ASIGN_DEMAND_onexpandup, this);

        };

        this.loadIncludeScript("BDG060201.xfdl");
        this.loadPreloadList();
       
    };
}
)();
