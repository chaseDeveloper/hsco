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
                this.set_name("SAL010105");
                this.set_classname("SAL010105");
                this.set_titletext("건강보험관리");
                this._setFormPosition(0,0,1059,735);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("DS_SEARCH", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"APPLC_DE\" type=\"STRING\" size=\"256\"/><Column id=\"APPLC_DE2\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_SEARCH2", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"APPLC_DE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_HLTHINS_DATE", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"APPLC_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_HLTHINS", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"APPLC_DE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"MENDNG_MT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"HLTHINS_TARIFF\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"HLTHINS_INSRNC_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ODSN_INSRNC_TARIFF\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ODSN_INSRNC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ODSN_RCPER_RDUCT_RT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ODSN_INSRNC_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"HLTHINS_SM_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_SOCTY_INSRNC_TARIFF", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"APPLC_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"APPLC_DE\" type=\"STRING\" size=\"256\"/><Column id=\"INSRNC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BPRPRR_BND\" type=\"STRING\" size=\"256\"/><Column id=\"LABRR_BND\" type=\"FLOAT\" size=\"256\"/><Column id=\"SM_RT\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_SEARCH3", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"APPLC_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"INSRNC_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_EMP_COND", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_EMP_DATA", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_EMPNO", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SRCLS\" type=\"STRING\" size=\"256\"/><Column id=\"ECNY_DE\" type=\"STRING\" size=\"256\"/><Column id=\"STDR_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">cmb_year1</Col><Col id=\"to\">cmb_year2</Col><Col id=\"msgId\">검색기간</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">DS_HLTHINS</Col><Col id=\"colId\">APPLC_DE</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">적용일자</Col></Row><Row><Col id=\"compId\">DS_HLTHINS</Col><Col id=\"colId\">EMPNO</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">사번</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_import", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_year", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_jssfc", this);
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
            obj = new Static("Static00", "absolute", "97.36%", "0", null, "735", "1.23%", null, this);
            obj.set_taborder("0");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "98.77%", "0", null, "735", "0%", null, this);
            obj.set_taborder("4");
            obj.set_text("스\r\n크\r\n롤\r\n13");
            obj.set_visible("false");
            obj.style.set_background("#d07b173c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_HLTHINS", "absolute", "190", "58", null, null, "28", "0", this);
            obj.set_taborder("8");
            obj.set_binddataset("DS_HLTHINS");
            obj.set_autoenter("select");
            obj.set_summarytype("top");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"97\" band=\"left\"/><Column size=\"125\" band=\"left\"/><Column size=\"102\" band=\"left\"/><Column size=\"72\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"적용일자\"/><Cell col=\"2\" text=\"부서명\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"사번\"/><Cell col=\"4\" text=\"사원명\"/><Cell col=\"5\" text=\"기준소득월액\"/><Cell col=\"6\" text=\"건강보험요율\"/><Cell col=\"7\" text=\"건강보험금액\"/><Cell col=\"8\" text=\"노인보험요율\"/><Cell col=\"9\" text=\"노인보험료\"/><Cell col=\"10\" text=\"노인요양경감율\"/><Cell col=\"11\" text=\"노인보험금액\"/><Cell col=\"12\" text=\"건강보험합계액\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"expr:dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT ? 'date':'none'\" text=\"bind:APPLC_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" text=\"bind:DEPT_NAME\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:EMPNO\" expandshow=\"show\" expandsize=\"20\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" text=\"bind:EMPNM\" expandshow=\"hide\" expandsize=\"13\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:MENDNG_MT_AM\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"normal\" text=\"bind:HLTHINS_TARIFF\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:HLTHINS_INSRNC_AMOUNT\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"normal\" text=\"bind:ODSN_INSRNC_TARIFF\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:ODSN_INSRNC\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"normal\" text=\"bind:ODSN_RCPER_RDUCT_RT\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:ODSN_INSRNC_AMOUNT\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:HLTHINS_SM_AMOUNT\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('MENDNG_MT_AM')\"/><Cell col=\"6\" style=\"align:right;\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('HLTHINS_INSRNC_AMOUNT')\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('ODSN_INSRNC')\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('ODSN_INSRNC_AMOUNT')\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('HLTHINS_SM_AMOUNT')\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_HLTHINS_DATE", "absolute", "0", "58", "180", null, null, "0", this);
            obj.set_taborder("9");
            obj.set_binddataset("DS_HLTHINS_DATE");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"97\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"적용일자\"/><Cell col=\"2\" text=\"삭제\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:APPLC_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "0", null, "33", "28", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WFSA_Box");
            this.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "15", "5", "91", "21", null, null, this.div_search);
            obj.set_taborder("1");
            obj.set_text("검색기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "8.55%", "26", null, "5", "87.76%", null, this.div_search);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#fa794f66");
            obj.style.set_align("center middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "9.33%", "0", null, "5", "86.98%", null, this.div_search);
            obj.set_taborder("5");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#fa794f66");
            obj.style.set_align("center middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "0%", "2", "15", "20", null, null, this.div_search);
            obj.set_taborder("6");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "10.11%", "53", null, "5", "86.2%", null, this.div_search);
            obj.set_taborder("8");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#fa794f66");
            obj.style.set_align("center middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "434", "5", "38", "21", null, null, this.div_search);
            obj.set_taborder("9");
            obj.set_text("성명");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("div_EMP", "absolute", "470", "5", "162", "21", null, null, this.div_search);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_url("com::empno.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cmb_year1", "absolute", "77", "5", "65", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_year");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj = new Static("Static04", "absolute", "144", "5", "22", "21", null, null, this.div_search);
            obj.set_taborder("11");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cmb_year2", "absolute", "165", "5", "65", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_year");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj = new Static("Static01", "absolute", "40.62%", "4", null, "20", "57.92%", null, this.div_search);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "245", "5", "66", "21", null, null, this.div_search);
            obj.set_taborder("14");
            obj.set_text("직종구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cmb_EMPL_SE", "absolute", "308", "5", "110", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_innerdataset("ds_jssfc");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.style.set_font("10 Gulim");

            obj = new Static("Static02", "absolute", "0%", "33", null, "10", "2.64%", null, this);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "0%", "39", "170", "19", null, null, this);
            obj.set_taborder("11");
            obj.set_text("건강보험적용내역");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "190", "39", "172", "19", null, null, this);
            obj.set_taborder("12");
            obj.set_text("건강보험상세정보");
            obj.set_cssclass("sta_WF_Title03");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0%", "53", null, "5", "2.64%", null, this);
            obj.set_taborder("13");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Cal", "absolute", null, "36", "40", "19", "55", null, this);
            obj.set_taborder("3");
            obj.set_text("계산");
            this.addChild(obj.name, obj);

            obj = new Static("sta_CLSF_CODE", "absolute", null, "36", "92", "19", "159", null, this);
            obj.set_taborder("6");
            obj.set_text("요율적용년도");
            obj.style.set_align("left middle");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_year", "absolute", null, "36", "60", "19", "97", null, this);
            obj.set_taborder("2");
            obj.set_maxlength("4");
            obj.style.set_align("center middle");
            obj.set_inputtype("number");
            obj.set_cssclass("edt_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Button("Button25", "absolute", null, "36", "26", "19", "27", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_Gridexcelup");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 33, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_cssclass("div_WFSA_Box");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1059, 735, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SAL010105");
            		p.set_titletext("건강보험관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_search.cmb_EMPL_SE","value","DS_SEARCH","EMPL_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_search.cmb_year2","value","DS_SEARCH","APPLC_DE2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_search.cmb_year1","value","DS_SEARCH","APPLC_DE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "com::empno.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SAL010105_old.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("SAL010105_old.xfdl", "mis_lib::misUtil.xjs");
        this.registerScript("SAL010105_old.xfdl", function() {
        /***********************************************************************
         * 업무구분 : 건강보험관리
         * 화면ID   : SAL010105
         * 화면명   : 건강보험관리
         * 화면설명 : 건강보험정보를 관리한다.
         * 작성일   : 2017.04.06
         * 작성자   : 정민
         * 수정이력 : 
         ***********************************************************************
         *     수정일     수정자   내용
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
        this.checkDs = [
        	 this.DS_HLTHINS
        ];

        /***********************************************************************
         * onInit 영역
         ***********************************************************************/
        this.SAL010105_oninit = function(obj,e)
        {
        	this.fn_init_form();
        	this.fn_init_dataset();
        	
        	// 조회조건 	
        	this.DS_SEARCH.clearData();              // 조회 데이터셋 초기화	
        	var nRow = this.DS_SEARCH.addRow();      // 조회 데이터셋 행추가
        	this.div_search.div_EMP.fn_setBind("DS_SEARCH","EMPNO","EMPNM");
        	
            this.edt_year.set_value(this.dateUtils.format(this.gfn_today(),"yyyy"));
            
        	this.fn_year_cmb();
        } 
          
        /***********************************************************************
         * 설명: 폼로딩시 처리
         ************************************************************************/
        this.SAL010105_onload = function(obj,e)
        {
            this.fn_loadCombo();
            this.div_search.div_EMP.setFocus(true);
            this.fn_search();
        }

        /***********************************************************************
         * Form 오브젝트 초기화
         ***********************************************************************/ 
        this.fn_init_form = function()
        {
        	this.fn_misFormInit(this);
        	this.gfn_initForm(this);	    
        }

        /***********************************************************************
         * Dataset 오브젝트 초기화
         ***********************************************************************/ 
        this.fn_init_dataset = function()
        {
        	this.gfn_initCondDs(this, this.div_search);	
        }

        /***********************************************************************
         * 설명: 공통조회
         ************************************************************************/
        this.fn_loadCombo = function()
        {
        	var comboParams = [["ds_jssfc", "HRM001", 1, "전체"]]   // 직종

        	this.gfn_comboLoad(comboParams, this.fn_callbackAfter);	
        }

        
        /***********************************************************************
         * 설명: 년도 콤보
         ************************************************************************/
        this.fn_year_cmb = function()
         {
        	var objDate = new Date();
            var sYear  = objDate.getFullYear();
            //alert("sYear = " + sYear);
            
            for(var i = 2000; i <= sYear+2; i++){
        		var nRow = this.ds_year.addRow();
        		this.ds_year.setColumn(nRow,"CODE",i);
        		this.ds_year.setColumn(nRow,"NAME",i);		
            }
            
        	this.div_search.cmb_year1.set_value(sYear-5); 
            this.div_search.cmb_year2.set_value(sYear+1);
            
         }

        /***********************************************************************
         * 설명: 조회
         ************************************************************************/
        this.fn_search= function()
        {
        	// 초기화
        	this.DS_HLTHINS_DATE.clearData();
        	this.DS_HLTHINS.clearData();
        	var empno = ""
            if(this.div_search.div_EMP.GetValue("EMPNO")){
                  empno = this.div_search.div_EMP.GetValue("EMPNO");
            }
            
        	// Validation 체크
        	if(!this.gfn_checkValidation(this.div_search, this.ds_validation)) {
        		return;
        	}	
        	             
            this.fn_transaction("selectHlthinsList");
        }

        
        /***********************************************************************
         * 설명: 내역(일자)그리도 행 변경시
         ************************************************************************/
        this.DS_HLTHINS_DATE_onrowposchanged = function(obj,e)
        {
        	if(e.newrow>-1){
        		// 삭제 체크
        		var Hrow_con = this.DS_HLTHINS_DATE.getRowCount();
        		var rowp = this.DS_HLTHINS_DATE.rowposition;
        		for(var i=0; i<= Hrow_con-1; i++){	
        		   if( i == rowp) {
        			   
        		   } else {
        				this.DS_HLTHINS_DATE.setColumn(i,"CHK","0");
        		   }     
        		}	
        		
        		if(this.DS_HLTHINS_DATE.getColumn(this.DS_HLTHINS_DATE.rowposition,"APPLC_DE")){
        			this.DS_SEARCH2.clearData();              // 조회 데이터셋 초기화
        			var nRow = this.DS_SEARCH2.addRow();      // 조회 데이터셋 행추가
        			var empno = ""
        			if(this.div_search.div_EMP.GetValue("EMPNO")){
        				  empno = this.div_search.div_EMP.GetValue("EMPNO");
        			}
        			this.DS_SEARCH2.setColumn(nRow,"EMPNO",empno)	
        			this.DS_SEARCH2.setColumn(nRow,"EMPL_SE",this.div_search.cmb_EMPL_SE.value)	
        			this.DS_SEARCH2.setColumn(nRow,"APPLC_DE",this.DS_HLTHINS_DATE.getColumn(this.DS_HLTHINS_DATE.rowposition,"APPLC_DE"))    
        			 
        			this.fn_transaction("selectHlthinsList2");
        		}
        	}else{
        		this.DS_HLTHINS.clearData();
        	}
        }

        /***********************************************************************************
        * 설명	: 그리드의 셀클릭 이벤트
        ***********************************************************************************/
        this.grd_HLTHINS_oncellclick = function(obj,e)
        {
        	var nIndex = this.grd_HLTHINS.getCellPos();
        	if(nIndex == 2){
        	      this.grd_HLTHINS_onexpandup();   // 사원선택 팝업
        	}
        }

        /***********************************************************************
         * 설명: 신규
         ************************************************************************/
        this.fn_insert= function()
        {
        	var nRow = this.DS_HLTHINS.addRow();
        	this.DS_HLTHINS.setColumn(nRow,"APPLC_DE",this.gfn_today());
        	var bFocus = this.grd_HLTHINS.setFocus(true);
        	var bSucc = this.grd_HLTHINS.setCellPos(2);
        	this.grd_HLTHINS_oncellclick();
        }

        /***********************************************************************
         * 설명: 추가
         ************************************************************************/
        this.fn_add= function()
        {
        	var nRow = this.DS_HLTHINS.insertRow(this.DS_HLTHINS.rowposition+1);
        	this.DS_HLTHINS.setColumn(nRow,"APPLC_DE",this.gfn_today());
        }

        
        /***********************************************************************
         * 설명: 삭제
         ************************************************************************/
        this.fn_delete= function()
        {
        	if(this.DS_HLTHINS_DATE.getColumn(this.DS_HLTHINS_DATE.rowposition,"CHK") == "1"){
        	    var bOK;
        	    bOK = application.confirm( this.DS_HLTHINS_DATE.getColumn(this.DS_HLTHINS_DATE.rowposition,"APPLC_DE") + "일자 전체내역을 삭제하시겠습니까?" );
        	    if(bOK == true){
        	          this.DS_SEARCH.clearData();              
        			  var nRow = this.DS_SEARCH.addRow();      
        			  this.DS_SEARCH.setColumn(nRow,"APPLC_DE",this.DS_HLTHINS_DATE.getColumn(this.DS_HLTHINS_DATE.rowposition,"APPLC_DE") ); 
        	          this.fn_transaction("delHlthinsList");
        	    }
        	} else {
        		if ( this.gfn_message("confirm.삭제여부")) {  
        			var nRow = this.DS_HLTHINS.rowposition;
        			this.DS_HLTHINS.deleteRow(nRow);
        		}	
        	}	
        }

        
        /***********************************************************************
         * 설명: 취소
         ************************************************************************/
        this.fn_cancel= function()
        {
        	if ( this.gfn_message("confirm.취소여부") ) {  //모든 내용을 복원 하시겠습니까?
        		this.DS_HLTHINS.reset();		//DATASET ROLLBACK
        		this.DS_HLTHINS.applyChange();	//DATASET COMMIT
        		return;
        	}	

        }

        
        /***********************************************************************
         * 설명: 저장
         ************************************************************************/
        this.fn_save= function()
        {
        	// Validation 체크
        	if(!this.gfn_checkValidation(this.DS_HLTHINS, this.ds_validation)) {
        		return;
        	}
        	
        	if( this.gfn_message("confirm.저장.여부"))	{
        		this.fn_transaction("saveHlthinsList");
        	}
        }

        /**********************************************************************
         * CALL TRANSACTION 영역
         **********************************************************************/ 
        this.fn_transaction = function(strSvcId)
        {
        	switch (strSvcId) {
        	    case "selectHlthinsList": 
        			var sController   	= "hsco/mis/sal/SAL010105/selectHlthinsList.do";
        			var sInDatasets   	= "input1=DS_SEARCH";
        			var sOutDatasets  	= "DS_HLTHINS_DATE=output1";
        			break;
        		case "selectHlthinsList2": 
        			var sController   	= "hsco/mis/sal/SAL010105/selectHlthinsList2.do";
        			var sInDatasets   	= "input2=DS_SEARCH2";
        			var sOutDatasets  	= "DS_HLTHINS=output2";
        			break;
        		case "selectSoctyInsrncTariffList": 
        			var sController   	= "hsco/mis/sal/SAL010104/selectSoctyInsrncTariffList2.do";
        			var sInDatasets   	= "input2=DS_SEARCH3";
        			var sOutDatasets  	= "DS_SOCTY_INSRNC_TARIFF=output2";
        			break;			
        		case "saveHlthinsList":	
        			var sController   	= "hsco/mis/sal/SAL010105/hlthinsCUD.do";	
        			var sInDatasets   	= "input3=DS_HLTHINS:U";
        			var sOutDatasets  	= "";
        			break;
        		case "delHlthinsList":	
        			var sController   	= "hsco/mis/sal/SAL010105/delHlthins.do";	
        			var sInDatasets   	= "input3=DS_SEARCH";
        			var sOutDatasets  	= "";
        			break;	
        	}

        	Ex.core.tran(this, strSvcId, sController, sInDatasets, sOutDatasets); 
        }

        /***********************************************************************************
        * 설명	: 트랜잭션 콜백함수를 처리한다.
        ***********************************************************************************/
        this.fn_callBack = function (strSvcId,nErrorCode,strErrorMsg)
        { 
        	// 오류 및 성공 메시지를 화면에 보여준다.
        	/*this.gfn_callback_message(strSvcId, nErrorCode, strErrorMsg);*/
        	if (nErrorCode != 0){
        		this.gfn_callback_message(strSvcId, nErrorCode, strErrorMsg);	
        	} else {		
        		switch (strSvcId) {
        		    case "selectHlthinsList": 	
        		    	 // 이력정보가 있으면 상세정보 조회
        			    if(this.DS_HLTHINS_DATE.rowcount > 0 ){
        				   this.DS_HLTHINS_DATE.rowposition = 0;
        				   this.grd_HLTHINS_DATE_oncellclick(); 
        			    }      
        				break;
        			case "selectHlthinsList2": 	
        				
        				break;
        			case "selectSoctyInsrncTariffList": 	
        				  // 요율확인
        				  if(this.DS_SOCTY_INSRNC_TARIFF.rowcount > 0) { 	    
        					    
        						  // 보험료 계산하기
        						  var labrr_bnd = this.DS_SOCTY_INSRNC_TARIFF.getColumn(0,"LABRR_BND");
        						  var labrr_bnd2 = this.DS_SOCTY_INSRNC_TARIFF.getColumn(1,"LABRR_BND");	      
        						  var Hrow_con = this.DS_HLTHINS.getRowCount();
        						  for(var i=0; i<= Hrow_con-1; i++){
        						      
        									var mendng_mt_am = this.DS_HLTHINS.getColumn(i,"MENDNG_MT_AM");	              
        									var hlthins_amount = parseInt(mendng_mt_am * labrr_bnd / 100);             // 건강보험금액	               
        									var odsn_insrnc = parseInt(hlthins_amount * labrr_bnd2 / 100);             // 노인요양보험금액
        									var odsn_rcper_rt = this.DS_HLTHINS.getColumn(i,"ODSN_RCPER_RDUCT_RT");    // 노인보험경감율
        									if(!odsn_rcper_rt) {odsn_rcper_rt = 0;}
        									var odsn_insrnc_amount = parseInt(odsn_insrnc - (odsn_insrnc * odsn_rcper_rt /100));   // 노인보험금액 = 노인요양보험금액 - 노인보험경감금액
        									var hlthins_sm_amount = hlthins_amount + odsn_insrnc_amount ;              // 건강보험합계금액
        									
        									this.DS_HLTHINS.setColumn(i,"HLTHINS_TARIFF",labrr_bnd);                   // 건강보험요율
        									this.DS_HLTHINS.setColumn(i,"HLTHINS_INSRNC_AMOUNT",hlthins_amount);       // 건강보험금액
        									this.DS_HLTHINS.setColumn(i,"ODSN_INSRNC_TARIFF",labrr_bnd2);              // 노인보험요율
        									this.DS_HLTHINS.setColumn(i,"ODSN_INSRNC",odsn_insrnc);                    // 노인보험금액
        									this.DS_HLTHINS.setColumn(i,"ODSN_INSRNC_AMOUNT",odsn_insrnc_amount);      // 노인보험합계금액
        									this.DS_HLTHINS.setColumn(i,"HLTHINS_SM_AMOUNT",hlthins_sm_amount);        // 건강보험합계금액
        									
        					      } // for					 
        					      alert("계산이 완료되었습니다.");     	    
        				  } else {
        					   alert(this.edt_year.value + " 년도 요율정보가 없습니다.");
        				  }
        				break;	
        			case "saveHlthinsList":			 
        			    this.fn_search();
        				break;
        			case "delHlthinsList":			 
        			    this.fn_search();
        				break;	
        		}
        	}	
        }

        
        /***********************************************************************
         * 설명: 건강보험 계산하기
         ************************************************************************/
        this.btn_Cal_onclick = function(obj,e)
        {
        	if(!this.edt_year.value){
        	     alert("적용년도를 입력하세요.");
        	     return;
        	}
        	
        	if(this.DS_HLTHINS.rowcount > 0){
        	     // 사회보험요율 가져오기
        	     this.DS_SOCTY_INSRNC_TARIFF.clearData();
        	     this.Socty_insrnc();
        	      
        	}else {
        	     alert("계산할 내역이 없습니다.");
        	}
        }

        
        /***********************************************************************
         * 설명: 사회보험요율 가져오기
         ************************************************************************/
        this.Socty_insrnc = function ()
        {
        	
        	this.DS_SEARCH3.clearData();              // 조회 데이터셋 초기화
        	var nRow = this.DS_SEARCH3.addRow();      // 조회 데이터셋 행추가
        	
        	this.DS_SEARCH3.setColumn(nRow,"APPLC_YEAR",this.edt_year.value) 	
        	this.DS_SEARCH3.setColumn(nRow,"INSRNC_CODE","10")    
        	 
        	this.fn_transaction("selectSoctyInsrncTariffList");
        }

        

        /***********************************************************************************
        * 설명	: 그리드 내 조회버튼
        ***********************************************************************************/
        this.grd_HLTHINS_onexpandup = function(obj,e)
        {
            if(!this.DS_HLTHINS.getColumn(this.DS_HLTHINS.rowposition,"EMPNO")){
        		 var nLeft = system.clientToScreenX(this, 10);
        		 var nTop  = system.clientToScreenY(this, 10);

        		 var newChild = new ChildFrame;
        		 newChild.init("Popup1"
        					, "absolute", nLeft, nTop, 400, 400, null, null
        					, "com::empno_P01.xfdl");

        		 newChild.set_openalign("center middle");
        		 newChild.set_dragmovetype("all");  
                 newChild.set_showtitlebar(true);
        		 newChild.showModal(this.getOwnerFrame()
        						 , {}
        						 , this
        						 , "fn_callback2");
            }						 
        }

        
        /***********************************************************************************
        * 설명	: 사원선택 팝업 콜백
        ***********************************************************************************/
        this.fn_callback2 = function(sPopupId,sReturn)
        {
        	if(sPopupId == "Popup1")
        	{		
        		this.DS_EMPNO.clearData();
        		nRowCnt = this.DS_EMPNO.loadXML(sReturn); 
        		if(this.DS_EMPNO.getColumn(0,"EMPNO")) {	      
        			this.DS_HLTHINS.setColumn(this.DS_HLTHINS.rowposition,"EMPNO",this.DS_EMPNO.getColumn(0,"EMPNO"));
        			this.DS_HLTHINS.setColumn(this.DS_HLTHINS.rowposition,"EMPNM",this.DS_EMPNO.getColumn(0,"EMPNM"));
        			this.DS_HLTHINS.setColumn(this.DS_HLTHINS.rowposition,"DEPT_NAME",this.DS_EMPNO.getColumn(0,"DEPT_NM"));
        			var bFocus = this.grd_HLTHINS.setFocus(true);
        			var bSucc = this.grd_HLTHINS.setCellPos(5);
        		}	
        	}
        }

        /***********************************************************************************
        * 설명	: 헤드클릭 정렬
        ***********************************************************************************/
        this.grd_HLTHINS_onheadclick = function(obj,e)
        {
        	LGV_COL_SORT = e.col;
            this._gridSort(obj, e);
        }

        /***********************************************************************************
        * 설명	: 엑셀파일을 업로드
        ***********************************************************************************/
        this.Button25_onclick = function(obj,e)
        {
        	this.DS_HLTHINS.clearData();
        	var arg = {
        		targetDs : this.ds_import,
        		headSet : false,
        		callBack : this.excelImport_callBack
        	};	
        	this.gfn_importExcel(arg);
        }

        /***********************************************************************************
        * 설명	: 엑셀파일을 업로드 콜백
        ***********************************************************************************/	
        this.excelImport_callBack = function()
        {
        	if(this.ds_import.rowcount > 1){
        		var nRow;
        		this.DS_HLTHINS.set_updatecontrol(false);
        		for(i=1; i< this.ds_import.rowcount; i++) {
        			nRow = this.DS_HLTHINS.addRow();

        			this.DS_HLTHINS.setColumn(nRow, "APPLC_DE",      this.ds_import.getColumn(i, "Column0"));
        			// 날짜 확인
        			var ApplcDe = this.DS_HLTHINS.getColumn(nRow, "APPLC_DE");				
        			var ApplcDe2 = ApplcDe.replace(/[-]/g, "");
        			this.DS_HLTHINS.setColumn(nRow, "APPLC_DE", ApplcDe2);			
        			this.DS_HLTHINS.setColumn(nRow, "DEPT_NAME", 			this.ds_import.getColumn(i, "Column1"));
        			this.DS_HLTHINS.setColumn(nRow, "EMPNO",     			this.ds_import.getColumn(i, "Column2"));
        			this.DS_HLTHINS.setColumn(nRow, "EMPNM",     			this.ds_import.getColumn(i, "Column3"));
        			this.DS_HLTHINS.setColumn(nRow, "MENDNG_MT_AM", 		this.ds_import.getColumn(i, "Column4"));
        			this.DS_HLTHINS.setColumn(nRow, "HLTHINS_TARIFF",		this.ds_import.getColumn(i, "Column5"));
        			this.DS_HLTHINS.setColumn(nRow, "HLTHINS_INSRNC_AMOUNT",this.ds_import.getColumn(i, "Column6"));
        			this.DS_HLTHINS.setColumn(nRow, "ODSN_INSRNC_TARIFF",	this.ds_import.getColumn(i, "Column7"));
        			this.DS_HLTHINS.setColumn(nRow, "ODSN_INSRNC",			this.ds_import.getColumn(i, "Column8"));
        			this.DS_HLTHINS.setColumn(nRow, "ODSN_RCPER_RDUCT_RT",	this.ds_import.getColumn(i, "Column9"));
        			this.DS_HLTHINS.setColumn(nRow, "ODSN_INSRNC_AMOUNT",	this.ds_import.getColumn(i, "Column10"));
        			this.DS_HLTHINS.setColumn(nRow, "HLTHINS_SM_AMOUNT",	this.ds_import.getColumn(i, "Column11"));
        			this.DS_HLTHINS.setRowType(nRow,"I");
        		}
        		this.DS_HLTHINS.set_updatecontrol(true);
        	}	
        }	
         
        /***********************************************************************************
        * 설명	: 그리드의 내용을 엑셀파일로 다운로드
        ***********************************************************************************/
        this.Button24_onclick = function(obj,e)
        {
            this.gfn_exportExcel(this.grd_HLTHINS, "Hlthins");
        	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.DS_SEARCH.addEventHandler("oncolumnchanged", this.DS_SEARCH_oncolumnchanged, this);
            this.DS_HLTHINS_DATE.addEventHandler("onrowposchanged", this.DS_HLTHINS_DATE_onrowposchanged, this);
            this.addEventHandler("onload", this.SAL010105_onload, this);
            this.addEventHandler("oninit", this.SAL010105_oninit, this);
            this.grd_HLTHINS.addEventHandler("onexpandup", this.grd_HLTHINS_onexpandup, this);
            this.grd_HLTHINS.addEventHandler("onheadclick", this.grd_HLTHINS_onheadclick, this);
            this.div_search.cmb_EMPL_SE.addEventHandler("onitemchanged", this.div_search_cmb_EMPL_SE_onitemchanged, this);
            this.btn_Cal.addEventHandler("onclick", this.btn_Cal_onclick, this);
            this.Button25.addEventHandler("onclick", this.Button25_onclick, this);

        };

        this.loadIncludeScript("SAL010105_old.xfdl");
        this.loadPreloadList();
       
    };
}
)();
