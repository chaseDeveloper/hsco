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
                this.set_name("SAL010102");
                this.set_classname("UI_SAL010102");
                this.set_titletext("연봉정보관리");
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
            obj._setContents("<ColumnInfo><Column id=\"APPLC_DE\" type=\"STRING\" size=\"256\"/><Column id=\"APPLC_DE2\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"APPLC_DE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_ANSLRY_DATE", this);
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

            obj = new Dataset("DS_ANSLRY_INFO", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SRCLS\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"BASS_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"APPLC_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ANSLRY_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PYMNT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"OFCPS\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DTY_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_CLSF_CODE", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">00</Col><Col id=\"data\">사장</Col></Row><Row><Col id=\"code\">01</Col><Col id=\"data\">1급</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"data\">2급</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"data\">3급</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"data\">4급</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"data\">5급</Col></Row><Row><Col id=\"code\">06</Col><Col id=\"data\">6급</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_PYMNT_SE", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">지급</Col></Row><Row><Col id=\"code\">0</Col><Col id=\"data\">미지급</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_ANSLRY_INFO_COPY", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SRCLS\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"BASS_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"APPLC_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ANSLRY_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DTY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OFCPS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">DS_ANSLRY_INFO</Col><Col id=\"colId\">APPLC_DE</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">적용일자</Col></Row><Row><Col id=\"compId\">DS_ANSLRY_INFO</Col><Col id=\"colId\">ANSLRY_AMOUNT</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">연봉</Col></Row><Row><Col id=\"compId\">DS_ANSLRY_INFO</Col><Col id=\"colId\">EMPNO</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">사원번호</Col></Row><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">cmb_year1</Col><Col id=\"to\">cmb_year2</Col><Col id=\"msgId\">검색기간</Col><Col id=\"notNull\">Y</Col></Row></Rows>");
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

            obj = new Dataset("ds_import", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_ofcps", this);
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

            obj = new Dataset("DS_ANSLRY_INFO_DEMO", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SRCLS\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"BASS_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"APPLC_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ANSLRY_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PYMNT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"OFCPS\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_DEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_NAME\">대구도시공사</Col><Col id=\"EMPNO\">20120001</Col><Col id=\"EMPNM\">이종덕</Col><Col id=\"BASS_AMOUNT\">4121000</Col><Col id=\"APPLC_DE\">20010101</Col><Col id=\"OLD_DEPT\">대구도시개발공사</Col><Col id=\"RM\">공사업무총괄</Col><Col id=\"ANSLRY_AMOUNT\">90630000</Col><Col id=\"OFCPS\">000</Col><Col id=\"CLSF_CODE\">00</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dept", this);
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

            obj = new Dataset("ds_emp", this);
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

            obj = new Dataset("ds_cond_del", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"APPLC_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "97.36%", "0", null, "735", "1.23%", null, this);
            obj.set_taborder("14");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "98.77%", "0", null, "735", "0%", null, this);
            obj.set_taborder("15");
            obj.set_text("스\r\n크\r\n롤\r\n13");
            obj.set_visible("false");
            obj.style.set_background("#d07b173c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "0", null, "33", "28", null, this);
            obj.set_taborder("16");
            obj.set_cssclass("div_WFSA_Box");
            this.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "15", "5", "91", "21", null, null, this.div_search);
            obj.set_taborder("75");
            obj.set_text("검색기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "8.55%", "26", null, "5", "87.76%", null, this.div_search);
            obj.set_taborder("77");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#fa794f66");
            obj.style.set_align("center middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "9.33%", "0", null, "5", "86.98%", null, this.div_search);
            obj.set_taborder("78");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#fa794f66");
            obj.style.set_align("center middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "0%", "2", null, "20", "98.64%", null, this.div_search);
            obj.set_taborder("81");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "10.11%", "53", null, "5", "86.2%", null, this.div_search);
            obj.set_taborder("86");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#fa794f66");
            obj.style.set_align("center middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "22.55%", "2", null, "20", "76.09%", null, this.div_search);
            obj.set_taborder("87");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "245", "5", "36", "21", null, null, this.div_search);
            obj.set_taborder("88");
            obj.set_text("성명");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("div_EMP", "absolute", "282", "5", "162", "21", null, null, this.div_search);
            obj.set_taborder("89");
            obj.set_text("Div00");
            obj.set_url("com::empno.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cmb_year1", "absolute", "77", "5", "65", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("90");
            obj.set_innerdataset("ds_year");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_index("-1");
            obj = new Static("Static04", "absolute", "144", "5", "20", "21", null, null, this.div_search);
            obj.set_taborder("91");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cmb_year2", "absolute", "165", "5", "65", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("92");
            obj.set_innerdataset("ds_year");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");

            obj = new Static("Static31", "absolute", "0", "39", "170", "19", null, null, this);
            obj.set_taborder("17");
            obj.set_text("연봉적용내역");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0%", "33", null, "10", "2.64%", null, this);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "190", "39", "172", "19", null, null, this);
            obj.set_taborder("19");
            obj.set_text("연봉상세정보");
            obj.set_cssclass("sta_WF_Title03");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0%", "53", null, "5", "2.64%", null, this);
            obj.set_taborder("20");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ANSLRY_INFO_DATE", "absolute", "0", "58", "180", null, null, "0", this);
            obj.set_taborder("21");
            obj.set_binddataset("DS_ANSLRY_DATE");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"42\"/><Column size=\"98\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"적용일자\"/><Cell col=\"2\" text=\"삭제\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:APPLC_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ANSLRY_INFO", "absolute", "190", "58", null, null, "28", "0", this);
            obj.set_taborder("22");
            obj.set_binddataset("DS_ANSLRY_INFO");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"84\"/><Column size=\"132\"/><Column size=\"84\"/><Column size=\"71\"/><Column size=\"54\"/><Column size=\"104\"/><Column size=\"110\"/><Column size=\"150\"/><Column size=\"0\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"적용일자\"/><Cell col=\"2\" text=\"부서명\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"사번\"/><Cell col=\"4\" text=\"사원명\"/><Cell col=\"5\" text=\"직위\"/><Cell col=\"6\" text=\"기본급\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"연봉\"/><Cell col=\"8\" text=\"비고\"/><Cell col=\"9\" text=\"과거부서\"/><Cell col=\"10\" text=\"직무명\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"expr:dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT ? 'date':'none'\" text=\"bind:APPLC_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:DEPT_CODE\" combodataset=\"ds_dept\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:EMPNO\" expandshow=\"hide\" expandsize=\"20\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"none\" text=\"bind:EMPNM\" expandshow=\"hide\" expandimage=\"URL('theme://images\\search.gif')\" combodataset=\"ds_emp\" combocodecol=\"CODE_NM\" combodatacol=\"CODE_NM\"/><Cell col=\"5\" displaytype=\"combo\" text=\"bind:OFCPS\" combodataset=\"ds_ofcps\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align:right;padding:0 5 0 5;\" text=\"bind:BASS_AMOUNT\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;padding:0 5 0 5;\" text=\"bind:ANSLRY_AMOUNT\"/><Cell col=\"8\" edittype=\"normal\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:RM\"/><Cell col=\"9\" edittype=\"normal\" text=\"bind:OLD_DEPT\"/><Cell col=\"10\" style=\"align:left;padding:0 0 0 5;\" text=\"bind:DTY_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Popup", "absolute", null, "36", "53", "19", "148", null, this);
            obj.set_taborder("23");
            obj.set_text("대상자");
            this.addChild(obj.name, obj);

            obj = new Button("Button25", "absolute", null, "36", "26", "19", "28", null, this);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_Gridexcelup");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ANSLRY_INFO_DEMO", "absolute", "216", "384", null, null, "37", "218", this);
            obj.set_taborder("26");
            obj.set_binddataset("DS_ANSLRY_INFO_DEMO");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"84\"/><Column size=\"132\"/><Column size=\"84\"/><Column size=\"71\"/><Column size=\"54\"/><Column size=\"104\"/><Column size=\"110\"/><Column size=\"169\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"적용일자\"/><Cell col=\"2\" text=\"부서명\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"사번\"/><Cell col=\"4\" text=\"사원명\"/><Cell col=\"5\" text=\"직위\"/><Cell col=\"6\" text=\"기본급\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"연봉\"/><Cell col=\"8\" text=\"비고\"/><Cell col=\"9\" text=\"과거부서\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"expr:dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT ? 'date':'none'\" text=\"bind:APPLC_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"normal\" text=\"bind:DEPT_NAME\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:EMPNO\" expandshow=\"hide\" expandsize=\"20\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" text=\"bind:EMPNM\" expandshow=\"hide\" expandimage=\"URL('theme://images\\search.gif')\"/><Cell col=\"5\" displaytype=\"combo\" text=\"bind:OFCPS\" combodataset=\"ds_ofcps\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align:right;padding:0 5 0 5;\" text=\"bind:BASS_AMOUNT\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;padding:0 5 0 5;\" text=\"bind:ANSLRY_AMOUNT\"/><Cell col=\"8\" edittype=\"normal\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:RM\"/><Cell col=\"9\" edittype=\"normal\" text=\"bind:OLD_DEPT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_demoDown", "absolute", null, "36", "90", "19", "56", null, this);
            obj.set_taborder("27");
            obj.set_text("양식다운로드");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 33, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("16");
            		p.set_cssclass("div_WFSA_Box");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1059, 735, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("UI_SAL010102");
            		p.set_titletext("연봉정보관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_search.cmb_year1","value","DS_SEARCH","APPLC_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_search.cmb_year2","value","DS_SEARCH","APPLC_DE2");
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
        this.addIncludeScript("SAL010102_old.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("SAL010102_old.xfdl", "mis_lib::misUtil.xjs");
        this.addIncludeScript("SAL010102_old.xfdl", "lib::comSms.xjs");
        this.registerScript("SAL010102_old.xfdl", function() {
        /***********************************************************************
         * 업무구분 : 연봉정보관리
         * 화면ID   : SAL010102
         * 화면명   : 연봉정보관리
         * 화면설명 : 연봉정보를 관리한다.
         * 작성일   : 2015.06.09
         * 작성자   : 이동석
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
        //include "lib::comSms.xjs";

        /***********************************************************************
         * 화면 변수 선언부
         ***********************************************************************/
        this.checkDs = [
        	 this.DS_ANSLRY_INFO
        ];

        
        //저장시 rowposition값 저장할 변수
        var save_row = -1;
        var save_row2 = -1;

        /***********************************************************************
         * onInit 영역
         ***********************************************************************/
        this.SAL010102_oninit = function(obj,e)
        {
        	this.fn_init_form();
        	this.fn_init_dataset();
        	
        }
         
        /***********************************************************************
         * 설명: 폼로딩시 처리
         ************************************************************************/
        this.SAL010102_onload = function(obj,e)
        {	
        	this.div_search.div_EMP.setFocus(true);
        	this.fn_loadCombo();
        	this.fn_year_cmb();
        	
            this.fn_search();
        }

        /***********************************************************************
         * Form 오브젝트 초기화
         ***********************************************************************/ 
        this.fn_init_form = function()
        {
        	this.fn_misFormInit(this);
        	this.gfn_initForm(this);
        	
        	//this.DS_SEARCH.clearData();              // 조회 데이터셋 초기화	
        	//var nRow = this.DS_SEARCH.addRow();      // 조회 데이터셋 행추가
        	this.div_search.div_EMP.fn_setBind("DS_SEARCH","EMPNO","EMPNM");
        }

        /**********************************************************************
         * 설명: 공통조회
         ************************************************************************/
        this.fn_loadCombo = function ()
        {
        	var comboParams = [				   
        	                   ["ds_ofcps", "HRM021", 1, ""]    // 직위	                  
        		              ];

        	this.gfn_comboLoad(comboParams, this.fn_callbackAfter);
        	
        	this.fn_transaction("selectdeptcodeList");		// 부서코드 조회
        }

        /***********************************************************************
         * Dataset 오브젝트 초기화
         ***********************************************************************/ 
        this.fn_init_dataset = function()
        {
        	//this.gfn_initCondDs(this, this.div_search);	
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
             
            /*
            var objDate = new Date();
            var sYear  = objDate.getFullYear();   
            var sYear2  = sYear;
            this.ds_year.clearData();
            var sYear3 = sYear-5;
            var sYear_stdr=sYear-5;
            for(var i=0; i<= 4; i++){
        		var nRow = this.ds_year.addRow();
        		this.ds_year.setColumn(nRow,"CODE",sYear_stdr);
        		this.ds_year.setColumn(nRow,"NAME",sYear_stdr);
        		sYear_stdr = sYear_stdr + 1;
            }     
            var sYear_stdr2 = sYear;
            for(var i=0; i<= 2; i++){
        		var nRow = this.ds_year.addRow();
        		this.ds_year.setColumn(nRow,"CODE",sYear_stdr);
        		this.ds_year.setColumn(nRow,"NAME",sYear_stdr);
        		sYear_stdr = sYear_stdr + 1;
            }        
            this.div_search.cmb_year1.set_value(sYear3); 
            this.div_search.cmb_year2.set_value(sYear+1); 
            */
         }

        /***********************************************************************
         * 설명: 조회 처리
         ************************************************************************/
        this.fn_search= function()
        {

        	// 초기화
        	this.DS_ANSLRY_DATE.clearData();
        	this.DS_ANSLRY_INFO.clearData();
        	
        	// 조회조건 
        	var empno = ""
            if(this.div_search.div_EMP.GetValue("EMPNO")){
                  empno = this.div_search.div_EMP.GetValue("EMPNO");
            }	
        	
            this.DS_SEARCH.setColumn(0,"EMPNO",empno);	 
        	
        	// Validation 체크
        	if(!this.gfn_checkValidation(this.div_search, this.ds_validation)) {
        		return;
        	}	
        	
        	trace("fn_search : "+this.DS_SEARCH.saveXML());
        	             
            this.fn_transaction("selectAnslryList");
        }

        
        /***********************************************************************
         * 설명: 연봉적용내역 셀 클릭시
         ************************************************************************/
        this.DS_ANSLRY_DATE_onrowposchanged = function(obj,e)
        {
        	if(e.newrow > -1){
        		// 삭제 체크
        		var Hrow_con = this.DS_ANSLRY_DATE.getRowCount();
        		var rowp = this.DS_ANSLRY_DATE.rowposition;
        		
        		for(var i=0; i<= Hrow_con-1; i++){	
        		   if( i == rowp) {			   
        		   }
        		   else{
        				this.DS_ANSLRY_DATE.setColumn(i,"CHK","0");
        		   }     
        		}
        	}
        	
        	if(this.DS_ANSLRY_DATE.rowcount > 0){
        		if(this.DS_ANSLRY_DATE.getColumn(this.DS_ANSLRY_DATE.rowposition,"APPLC_DE")){
        			 //this.DS_SEARCH2.clearData();              // 조회 데이터셋 초기화
        			 //var nRow = this.DS_SEARCH2.addRow();      // 조회 데이터셋 행추가
        			 var empno = ""
        			 if(this.div_search.div_EMP.GetValue("EMPNO")){
        				  empno = this.div_search.div_EMP.GetValue("EMPNO");
        			 }    
        			 this.DS_SEARCH2.setColumn(0,"EMPNO",empno);	
        			 this.DS_SEARCH2.setColumn(0,"APPLC_DE",this.DS_ANSLRY_DATE.getColumn(this.DS_ANSLRY_DATE.rowposition,"APPLC_DE"))  
        						 
        			 this.fn_transaction("selectAnslryList2");
        		}
        	}else{
        		this.DS_ANSLRY_INFO.clearData();
        	}
        }

        /***********************************************************************
         * 설명: 신규
         ************************************************************************/
        this.fn_insert= function()
        {
        // 	var nRow = this.DS_ANSLRY_INFO.addRow();
        // 	this.DS_ANSLRY_INFO.setColumn(nRow,"APPLC_DE",this.gfn_today());
        // 	var bFocus = this.grd_ANSLRY_INFO.setFocus(true);
        // 	var bSucc = this.grd_ANSLRY_INFO.setCellPos(4);
        	this.btn_Popup_onclick();
        }

        /***********************************************************************
         * 설명: 추가
         ************************************************************************/
        this.fn_add= function()
        {
        	var nRow = this.DS_ANSLRY_INFO.insertRow(this.DS_ANSLRY_INFO.rowposition + 1);
        	var APPLC_DE = this.DS_ANSLRY_DATE.getColumn(this.DS_ANSLRY_DATE.rowposition,"APPLC_DE");
        	if(this.comUtils.isNullEmpty(APPLC_DE)){
        		APPLC_DE = this.gfn_today()
        	}
        	this.DS_ANSLRY_INFO.setColumn(nRow,"APPLC_DE",APPLC_DE);
        }

        
        /***********************************************************************
         * 설명: 삭제
         ************************************************************************/
        this.fn_delete= function()
        {
        	//봉급적용내역 삭제
        	if(this.DS_ANSLRY_DATE.getColumn(this.DS_ANSLRY_DATE.rowposition,"CHK") == "1"){
        		var bOK;
        		bOK = application.confirm( this.DS_ANSLRY_DATE.getColumn(this.DS_ANSLRY_DATE.rowposition,"APPLC_DE") + "일자 전체내역을 삭제하시겠습니까?" );
        		if(bOK == true){
        			this.ds_cond_del.clearData();              // 조회 데이터셋 초기화
        			var nRow = this.ds_cond_del.addRow();      // 조회 데이터셋 행추가
        			this.ds_cond_del.setColumn(0,"APPLC_DE",this.DS_ANSLRY_DATE.getColumn(this.DS_ANSLRY_DATE.rowposition,"APPLC_DE"))  
        			 
        			this.fn_transaction("delAnslryList");
        		}
        	}else{
        		if ( this.gfn_message("confirm.삭제여부")) {  
        			var nRow = this.DS_ANSLRY_INFO.rowposition;
        			this.DS_ANSLRY_INFO.deleteRow(nRow);	
        		}
        	}
        }

        
        /***********************************************************************
         * 설명: 취소
         ************************************************************************/
        this.fn_cancel= function()
        {
        	if ( this.gfn_message("confirm.취소여부") ) {  //모든 내용을 복원 하시겠습니까?
        		this.DS_ANSLRY_INFO.reset();		//DATASET ROLLBACK
        		this.DS_ANSLRY_INFO.applyChange();	//DATASET COMMIT
        		return;
        	}
        }

        /***********************************************************************
         * 설명: 저장버튼 클릭시
         ************************************************************************/
        this.fn_save= function()
        {
        	// Validation 체크
        	if(!this.gfn_checkValidation(this.DS_ANSLRY_INFO, this.ds_validation)) {
        		return;
        	}
        	
        	//현재 rowpostion값을 저장
        	save_row = this.DS_ANSLRY_DATE.rowposition;
        	save_row2 = this.DS_ANSLRY_INFO.rowposition;
        	
        	if( this.gfn_message("confirm.저장.여부"))	{
        		this.fn_transaction("saveAnslryList");
        	}
        }

        /**********************************************************************
         * CALL TRANSACTION 영역
         **********************************************************************/ 
        this.fn_transaction = function(strSvcId)
        {
        	switch (strSvcId) {
        	    case "selectAnslryList": 
        			var sController   	= "hsco/mis/sal/SAL010102/selectAnslryList.do";
        			var sInDatasets   	= "input1=DS_SEARCH";
        			var sOutDatasets  	= "DS_ANSLRY_DATE=output1";
        			var argument = "";
        		    var callbackfunc = "";
        		    var showprogress = "";
        		    var bAsync = true;
        			break;
        			
        		case "selectAnslryList2": 
        			var sController   	= "hsco/mis/sal/SAL010102/selectAnslryList2.do";
        			var sInDatasets   	= "input2=DS_SEARCH2";
        			var sOutDatasets  	= "DS_ANSLRY_INFO=output2";
        			var argument = "";
        		    var callbackfunc = "";
        		    var showprogress = "";
        		    var bAsync = false;
        			break;		
        			
        		case "saveAnslryList":	
        			var sController   	= "hsco/mis/sal/SAL010102/anslryCUD.do";	
        			var sInDatasets   	= "input3=DS_ANSLRY_INFO:U";
        			var sOutDatasets  	= "";
        			var argument = "";
        		    var callbackfunc = "";
        		    var showprogress = "";
        		    var bAsync = true;
        			break;

        	    // 부서코드 조회
        		case "selectdeptcodeList": 
        			var sController   	= "hsco/mis/sal/SAL030112/selectDeptCodeList.do";
        			var sInDatasets   	= "input1=DS_SEARCH";
        			var sOutDatasets  	= "ds_dept=output1";
        			break;
        			
        		case "delAnslryList":
        			var sController   	= "hsco/mis/sal/SAL010102/delAnslryList.do";	
        			var sInDatasets   	= "input3=ds_cond_del:U";
        			var sOutDatasets  	= "";
        			var argument = "";
        		    var callbackfunc = "";
        		    var showprogress = "";
        		    var bAsync = true;
        			break;
        	}

        	//Ex.core.tran(this, strSvcId, sController, sInDatasets, sOutDatasets);
        	 Ex.core.tran(this, strSvcId, sController, sInDatasets, sOutDatasets, argument, callbackfunc, showprogress, bAsync);
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
        		    case "selectAnslryList": 
        		    	
        		    	//저장트랜잭션 직전 rowposition값으로 이동
        				if(save_row != -1){
        					this.DS_ANSLRY_DATE.set_rowposition(save_row);
        					//save_row = -1;
        				}
        				
        				break;
        				
        			case "selectAnslryList2": 	
        				
        				//저장트랜잭션 직전 rowposition값으로 이동
        				if(save_row2 != -1){
        					this.DS_ANSLRY_INFO.set_rowposition(save_row2);
        					//save_row2 = -1;
        				}
        				this.fn_filter_combo();
        				
        				break;
        			case "saveAnslryList":
        			    this.fn_search();
        			    this.gfn_message("success.처리.성공");
        				break;
        			case "delAnslryList":
        				this.gfn_message("success.처리.성공");
        			    this.fn_search();
        				break;
        		}
        	}
        	
        }

        /***********************************************************************************
        * 설명	: 그리드의 셀클릭 이벤트
        ***********************************************************************************/
        this.grd_ANSLRY_INFO_oncellclick = function(obj,e)
        {
        	var nIndex = this.grd_ANSLRY_INFO.getCellPos();
        	if(nIndex == 4){
        	      this.grd_ANSLRY_INFO_onexpandup(); 
        	}
        }

        /***********************************************************************************
        * 설명	: 사원선택 팝업
        ***********************************************************************************/
        this.btn_Popup_onclick = function(obj,e)
        {
        	 
        	 var nLeft = system.clientToScreenX(this, 10);
        	 var nTop  = system.clientToScreenY(this, 10);

        	 var newChild = new ChildFrame;
             newChild.init("Popup1"
                        , "absolute", nLeft, nTop, 300, 250, null, null
                        , "mis_sal::SAL010102_P01.xfdl");

        	 newChild.set_openalign("center middle");
        	 newChild.set_dragmovetype("all");  
             newChild.set_showtitlebar(true);
             newChild.showModal(this.getOwnerFrame()
                             , {}
                             , this
                             , "fn_callback2");
        }

        
        /***********************************************************************************
        * 설명	: 사원선택 팝업 콜백
        ***********************************************************************************/
        this.fn_callback2 = function(sPopupId,sReturn)
        {
        	if(sPopupId == "Popup1")
        	{
        		var nRowCnt;
        		this.DS_ANSLRY_INFO_COPY.clearData();
                nRowCnt = this.DS_ANSLRY_INFO_COPY.loadXML(sReturn);
                //연봉적용내역 있을때 적용일자 2016.07.15
                var APPLC_DE = this.DS_ANSLRY_INFO_COPY.getColumn(this.DS_ANSLRY_INFO_COPY.rowposition,"APPLC_DE");		
        	
                var Hrow_con = this.DS_ANSLRY_INFO_COPY.getRowCount();
        	    for(var i=0; i<= Hrow_con-1; i++){
        	    	         
        	        var nRow =  this.DS_ANSLRY_INFO.addRow();	         
        	        var bSucc = this.DS_ANSLRY_INFO.copyRow(nRow,this.DS_ANSLRY_INFO_COPY,i);
        	        
        	        //연봉적용내역 있을때 적용일자 셋팅 2016.07.15
        	       // if(!this.comUtils.isNullEmpty(APPLC_DE)){
        			//	this.DS_ANSLRY_INFO.setColumn(nRow,"APPLC_DE",APPLC_DE);
        			//	trace("ㅜㅜ");
        			//}
        			
        	    }
        	    this.fn_filter_combo();
        		
        	}
        }

        /***********************************************************************************
        * 설명	: 헤드클릭 정렬
        ***********************************************************************************/
        this.grd_ANSLRY_INFO_onheadclick = function(obj,e)
        {
        	LGV_COL_SORT = e.col;
            this._gridSort(obj, e);
        }

        /***********************************************************************************
        * 설명	: 그리드 사원조회
        ***********************************************************************************/
        this.grd_ANSLRY_INFO_onexpandup = function(obj,e)
        {
        	if(!this.DS_ANSLRY_INFO.getColumn(this.DS_ANSLRY_INFO.rowposition,"EMPNO")){
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
        						 , "fn_callback3");
            }				
        }

        /***********************************************************************************
        * 설명	: 그리드 사원선택 팝업 콜백
        ***********************************************************************************/
        this.fn_callback3 = function(sPopupId,sReturn)
        {
        	if(sPopupId == "Popup1")
        	{		
        		this.DS_EMPNO.clearData();
        		nRowCnt = this.DS_EMPNO.loadXML(sReturn); 
        		if(this.DS_EMPNO.getColumn(0,"EMPNO")) {	      
        			this.DS_ANSLRY_INFO.setColumn(this.DS_ANSLRY_INFO.rowposition,"EMPNO",this.DS_EMPNO.getColumn(0,"EMPNO"));
        			this.DS_ANSLRY_INFO.setColumn(this.DS_ANSLRY_INFO.rowposition,"EMPNM",this.DS_EMPNO.getColumn(0,"EMPNM"));
        			this.DS_ANSLRY_INFO.setColumn(this.DS_ANSLRY_INFO.rowposition,"DEPT_NAME",this.DS_EMPNO.getColumn(0,"DEPT_NM"));
        			this.DS_ANSLRY_INFO.setColumn(this.DS_ANSLRY_INFO.rowposition,"DEPT_CODE",this.DS_EMPNO.getColumn(0,"DEPT_CODE"));
        			this.DS_ANSLRY_INFO.setColumn(this.DS_ANSLRY_INFO.rowposition,"CLSF_CODE",this.DS_EMPNO.getColumn(0,"CLSF_CODE"));	
        			var bFocus = this.grd_ANSLRY_INFO.setFocus(true);
        			var bSucc = this.grd_ANSLRY_INFO.setCellPos(6);	
        						
        		}	
        	}
        }

        /***********************************************************************************
        * 설명	: 그리드의 내용을 엑셀파일로 다운로드
        ***********************************************************************************/
        this.Excel_down_onclick = function(obj,e)
        {
            this.gfn_exportExcel(this.grd_ANSLRY_INFO, "ANSLRY_INFO"); 
        	
        }

        this.btn_demoDown_onclick = function(obj,e)
        {
        	this.gfn_exportExcel(this.grd_ANSLRY_INFO_DEMO, "ANSLRY_INFO_DEMO");   
        }

        
        /***********************************************************************************
        * 설명	: 그리드에 엑셀파일을 업로드
        ***********************************************************************************/
        this.Button25_onclick = function(obj,e)
        {
        	this.DS_ANSLRY_INFO.clearData();
        	
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
        		var fRow;
        		this.DS_ANSLRY_INFO.set_updatecontrol(false);
        		
        		for(i=1; i< this.ds_import.rowcount; i++) {
        			
        			nRow = this.DS_ANSLRY_INFO.addRow();
        			fRow = this.ds_ofcps.findRowExpr("CODE_NM == '"+this.ds_import.getColumn(i, "Column5")+"'");

        			this.DS_ANSLRY_INFO.setColumn(nRow, "APPLC_DE",      this.ds_import.getColumn(i, "Column1"));
        			// 날짜 확인
        			var ApplcDe = this.DS_ANSLRY_INFO.getColumn(nRow, "APPLC_DE");				
        			var ApplcDe2 = ApplcDe.replace(/[-]/g, "");
        			this.DS_ANSLRY_INFO.setColumn(nRow, "APPLC_DE", ApplcDe2);			
        			
        			this.DS_ANSLRY_INFO.setColumn(nRow, "DEPT_NAME",     this.ds_import.getColumn(i, "Column2"));
        			this.DS_ANSLRY_INFO.setColumn(nRow, "EMPNO",     	 this.ds_import.getColumn(i, "Column3"));
        			this.DS_ANSLRY_INFO.setColumn(nRow, "EMPNM",    	 this.ds_import.getColumn(i, "Column4"));
        			this.DS_ANSLRY_INFO.setColumn(nRow, "OFCPS",    	 this.ds_ofcps.getColumn(fRow, "CODE"));
        			this.DS_ANSLRY_INFO.setColumn(nRow, "BASS_AMOUNT",   this.ds_import.getColumn(i, "Column6"));
        			this.DS_ANSLRY_INFO.setColumn(nRow, "ANSLRY_AMOUNT", this.ds_import.getColumn(i, "Column7"));
        			this.DS_ANSLRY_INFO.setColumn(nRow, "RM",			 this.ds_import.getColumn(i, "Column8"));
        			this.DS_ANSLRY_INFO.setColumn(nRow, "OLD_DEPT",		 this.ds_import.getColumn(i, "Column9"));
        			this.DS_ANSLRY_INFO.setRowType(nRow,"I");
        		}
        		this.DS_ANSLRY_INFO.set_updatecontrol(true);
        	}	
        }

        this.fn_filter_combo = function()
        {
        	this.ds_emp.clearData();
        	
        	var ll_rowcnt = this.DS_ANSLRY_INFO.getRowCount();
        	for (var i=0; i<ll_rowcnt; i++)
        	{
        		var nRow = this.ds_emp.addRow();
        		this.ds_emp.copyRow(nRow, this.DS_ANSLRY_INFO, i, "CODE=EMPNO, CODE_NM=EMPNM");
        	}
        	this.ds_emp.set_keystring("S:+CODE_NM");
        }

        this.div_search_cmb_year2_onitemchanged = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.DS_ANSLRY_DATE.addEventHandler("onrowposchanged", this.DS_ANSLRY_DATE_onrowposchanged, this);
            this.addEventHandler("onload", this.SAL010102_onload, this);
            this.addEventHandler("oninit", this.SAL010102_oninit, this);
            this.div_search.cmb_year2.addEventHandler("onitemchanged", this.div_search_cmb_year2_onitemchanged, this);
            this.grd_ANSLRY_INFO.addEventHandler("onheadclick", this.grd_ANSLRY_INFO_onheadclick, this);
            this.grd_ANSLRY_INFO.addEventHandler("onexpandup", this.grd_ANSLRY_INFO_onexpandup, this);
            this.grd_ANSLRY_INFO.addEventHandler("oncellclick", this.grd_ANSLRY_INFO_oncellclick, this);
            this.btn_Popup.addEventHandler("onclick", this.btn_Popup_onclick, this);
            this.Button25.addEventHandler("onclick", this.Button25_onclick, this);
            this.grd_ANSLRY_INFO_DEMO.addEventHandler("oncellclick", this.grd_ANSLRY_INFO_oncellclick, this);
            this.grd_ANSLRY_INFO_DEMO.addEventHandler("onheadclick", this.grd_ANSLRY_INFO_onheadclick, this);
            this.grd_ANSLRY_INFO_DEMO.addEventHandler("onexpandup", this.grd_ANSLRY_INFO_onexpandup, this);
            this.btn_demoDown.addEventHandler("onclick", this.btn_demoDown_onclick, this);

        };

        this.loadIncludeScript("SAL010102_old.xfdl");
        this.loadPreloadList();
       
    };
}
)();
