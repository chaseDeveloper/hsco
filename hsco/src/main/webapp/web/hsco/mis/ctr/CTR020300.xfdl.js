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
                this.set_name("CTR020300");
                this.set_classname("CTR020300");
                this.set_titletext("계약의뢰접수");
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
            obj._setContents("<ColumnInfo><Column id=\"REQEST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"REQEST_SE\" type=\"STRING\" size=\"3\"/><Column id=\"DETAIL_SE\" type=\"STRING\" size=\"3\"/><Column id=\"SEARCH_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"REQEST_DEPT_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"REQEST_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CLIENT_EMPNO\" type=\"STRING\" size=\"8\"/><Column id=\"CLIENT_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_searchSe", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">의뢰번호</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">의뢰명</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ctr022", this);
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

            obj = new Dataset("ds_ctr023", this);
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

            obj = new Dataset("ds_com052", this);
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

            obj = new Dataset("ds_cntrctReqestList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"REQEST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_SN\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQEST_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_SE\" type=\"STRING\" size=\"256\"/><Column id=\"REQEST_DE\" type=\"STRING\" size=\"256\"/><Column id=\"REQEST_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REQEST_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CLIENT_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"CLIENT_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"REQEST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQEST_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ENABLE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_AT\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_NO1\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_KND1\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_NO2\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_KND2\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_PLAN_REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_CNTRCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RE_CREAT_ENABLE_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cntrctReqestFile", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"REQEST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"ORGINL_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_STRE_COURS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_orderPlan", this);
            obj.set_useclientlayout("true");
            obj.set_keystring("G:ORDER_PLAN_YEAR+ORDER_PLAN_SN+S:SN+");
            obj._setContents("<ColumnInfo><Column id=\"ORDER_PLAN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_PLAN_SN\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_PLAN_MT\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_SE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"THTI_ODR_OUTSRC_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BUDGET_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUKIP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUKIP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXECUT_BUDGET_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DECSN_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"REQEST_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"REQEST_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ctr049", this);
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

            obj = new Dataset("ds_confmAt", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">A</Col><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">승인</Col></Row><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">미승인</Col></Row><Row><Col id=\"CODE_NM\">반려</Col><Col id=\"CODE\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "1031", "0", "15", null, null, "0", this);
            obj.set_taborder("3");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", null, "0", "13", null, "0", "0", this);
            obj.set_taborder("4");
            obj.set_text("스\r\n크\r\n롤\r\n13");
            obj.set_visible("false");
            obj.style.set_background("#d07b173c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "59", null, "10", "28", null, this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cntrctReqestList", "absolute", "0", "69", "100", "19", null, null, this);
            obj.set_taborder("6");
            obj.set_text("계약의뢰목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "0", "88", null, "5", "28", null, this);
            obj.set_taborder("7");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cntrctReqestList", "absolute", "0", "93", null, null, "28", "0", this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_cntrctReqestList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"순번\"/><Cell col=\"2\" rowspan=\"2\" text=\"승인\"/><Cell col=\"3\" rowspan=\"2\" text=\"결재상태&#13;&#10;(계약의뢰)\"/><Cell col=\"4\" rowspan=\"2\" text=\"결재상태&#13;&#10;(계약건의)\"/><Cell col=\"5\" rowspan=\"2\" text=\"재생성&#13;&#10;가능여부\"/><Cell col=\"6\" colspan=\"2\" text=\"계약대장\"/><Cell col=\"8\" colspan=\"5\" text=\"의뢰\"/><Cell col=\"13\" colspan=\"2\" text=\"의뢰부서\"/><Cell col=\"15\" colspan=\"2\" text=\"의뢰자\"/><Cell row=\"1\" col=\"6\" text=\"여부\"/><Cell row=\"1\" col=\"7\" text=\"계약번호\"/><Cell row=\"1\" col=\"8\" text=\"의뢰번호\"/><Cell row=\"1\" col=\"9\" text=\"의뢰명\"/><Cell row=\"1\" col=\"10\" text=\"의뢰구분\"/><Cell row=\"1\" col=\"11\" text=\"의뢰일\"/><Cell row=\"1\" col=\"12\" text=\"추정금액\"/><Cell row=\"1\" col=\"13\" text=\"부서코드\"/><Cell row=\"1\" col=\"14\" text=\"부서명\"/><Cell row=\"1\" col=\"15\" text=\"사번\"/><Cell row=\"1\" col=\"16\" text=\"성명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:CONFM_AT\" combodataset=\"ds_com052\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" displaytype=\"image\" text=\"expr:comp.parent.gfn_getSanctnImgUrl(SANCTN_KND1)\"/><Cell col=\"4\" displaytype=\"image\" text=\"expr:comp.parent.gfn_getSanctnImgUrl(SANCTN_KND2)\"/><Cell col=\"5\" text=\"bind:RE_CREAT_ENABLE_AT\"/><Cell col=\"6\" displaytype=\"checkbox\" text=\"bind:CNTRCT_AT\"/><Cell col=\"7\" style=\"align:left middle;\" text=\"bind:CNTRCT_NO\"/><Cell col=\"8\" text=\"bind:REQEST_NO\" mask=\"####-#-#####\"/><Cell col=\"9\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:REQEST_NM\"/><Cell col=\"10\" displaytype=\"combo\" text=\"bind:REQEST_SE\" combodataset=\"ds_ctr022\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"11\" displaytype=\"date\" text=\"bind:REQEST_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"12\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:REQEST_AMOUNT\"/><Cell col=\"13\" text=\"bind:REQEST_DEPT_CODE\" suppress=\"0\"/><Cell col=\"14\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:REQEST_DEPT_NM\" suppress=\"0\"/><Cell col=\"15\" text=\"bind:CLIENT_EMPNO\" suppress=\"0\"/><Cell col=\"16\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:CLIENT_EMPNM\" suppress=\"0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "0", null, "59", "28", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Box");
            this.addChild(obj.name, obj);
            obj = new Static("sta_YEAR", "absolute", "15", "5", "64", "21", null, null, this.div_search);
            obj.set_taborder("1");
            obj.set_text("의뢰년도");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "155", "0", "15", "27", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", "26", null, "5", "0", null, this.div_search);
            obj.set_taborder("13");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#fa794f66");
            obj.style.set_align("center middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "0", "0", "15", null, null, "0", this.div_search);
            obj.set_taborder("14");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_YEAR00", "absolute", "170", "5", "64", "21", null, null, this.div_search);
            obj.set_taborder("15");
            obj.set_text("의뢰구분");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cmb_searchCnd", "absolute", "234", "5", "90", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_ctr022");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.style.set_font("10 Gulim");
            obj = new Static("Static05", "absolute", "324", "0", "15", "27", null, null, this.div_search);
            obj.set_taborder("16");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_YEAR01", "absolute", "339", "5", "64", "21", null, null, this.div_search);
            obj.set_taborder("17");
            obj.set_text("상세구분");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cmb_searchCnd00", "absolute", "403", "5", "179", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_ctr023");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.style.set_font("10 Gulim");
            obj = new Static("sta_YEAR02", "absolute", "597", "5", "64", "21", null, null, this.div_search);
            obj.set_taborder("18");
            obj.set_text("검색항목");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "582", "0", "15", "27", null, null, this.div_search);
            obj.set_taborder("19");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_DEPT", "absolute", "15", "31", "64", "21", null, null, this.div_search);
            obj.set_taborder("20");
            obj.set_text("의뢰부서");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("div_dept", "absolute", "79", "31", "195", "21", null, null, this.div_search);
            obj.set_taborder("6");
            obj.set_enable("false");
            obj.set_async("false");
            obj.set_url("com::deptCode.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_EMP", "absolute", "289", "31", "53", "21", null, null, this.div_search);
            obj.set_taborder("21");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "274", "26", "15", null, null, "0", this.div_search);
            obj.set_taborder("22");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("div_sear", "absolute", "342", "31", "162", "21", null, null, this.div_search);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_enable("false");
            obj.set_async("false");
            obj.set_url("com::empno.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_BSNS_CODE", "absolute", "519", "31", "38", "21", null, null, this.div_search);
            obj.set_taborder("23");
            obj.set_text("사업");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_BSNS_CODE", "absolute", "557", "31", "91", "21", null, null, this.div_search);
            obj.set_taborder("8");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_searchBsns", "absolute", "629", "31", "21", "21", null, null, this.div_search);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_Search");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_BSNS_NM", "absolute", "650", "31", "155", "21", null, null, this.div_search);
            obj.set_taborder("10");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "504", "26", "15", null, null, "0", this.div_search);
            obj.set_taborder("24");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "805", "26", "15", null, null, "0", this.div_search);
            obj.set_taborder("25");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Spin("div_YEAR", "absolute", "79", "5", "76", "21", null, null, this.div_search);
            obj.set_taborder("0");
            obj.set_value("0");
            obj.set_max("9999");
            obj.set_cssclass("spn_WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cmb_SRCH_DS", "absolute", "661", "5", "92", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_searchSe");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj = new Edit("edt_SRCH_NM", "absolute", "755", "5", "236", "21", null, null, this.div_search);
            obj.set_taborder("5");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_confmAt", "absolute", "831", "31", "64", "21", null, null, this.div_search);
            obj.set_taborder("26");
            obj.set_text("승인여부");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cmb_confmAt", "absolute", "895", "31", "92", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_innerdataset("@ds_confmAt");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");

            obj = new Static("sta_title00", "absolute", "100", "69", "654", "19", null, null, this);
            obj.set_taborder("8");
            obj.set_text("(계약의뢰목록을 더블클릭하면 의뢰내역확인 팝업이 생성되며, 승인여부와 반려사유를 수정할 수 있습니다.)");
            obj.style.set_color("blue");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cntrctInfoCreat", "absolute", null, "69", "86", "19", "28", null, this);
            obj.set_taborder("1");
            obj.set_text("계약정보생성");
            obj.set_cssclass("btn_WF_Grid");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cntrctInfoReCreat", "absolute", null, "69", "99", "19", "117", null, this);
            obj.set_taborder("9");
            obj.set_text("계약정보재생성");
            obj.set_cssclass("btn_WF_Grid");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 59, this.div_search,
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
            		p.set_classname("CTR020300");
            		p.set_titletext("계약의뢰접수");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","div_search.cmb_searchCnd","value","ds_cond","REQEST_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_search.cmb_searchCnd00","value","ds_cond","DETAIL_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_search.edt_BSNS_CODE","value","ds_cond","BSNS_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","div_search.edt_BSNS_NM","value","ds_cond","BSNS_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_search.div_YEAR","value","ds_cond","REQEST_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_search.cmb_SRCH_DS","value","ds_cond","SEARCH_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","div_search.edt_SRCH_NM","value","ds_cond","SEARCH_VAL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div_search.cmb_confmAt","value","ds_cond","CONFM_AT");
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
        this.addIncludeScript("CTR020300.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("CTR020300.xfdl", "mis_lib::misUtil.xjs");
        this.registerScript("CTR020300.xfdl", function() {
        /***********************************************************************
         * 화면ID   : CTR020300
         * 화면명   : 계약의뢰접수
         * 화면설명 : 계약의뢰를 접수한다. 
         * 작성일   : 2017.07.17
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

        
        /***********************************************************************
         * 화면 변수 선언부
         ***********************************************************************/
        this.chargerAt = false;

        
        /***********************************************************************
         * onInit / onLoad 영역
         ***********************************************************************/
        this.CTR020300_oninit = function(obj,e)
        {
        	// ..
        }
        this.CTR020300_onload = function(obj,e)
        {
        	// form 초기화
        	this.fn_init_form();

        	// dataset 초기화
        	this.fn_init_dataset();
        }

        /***********************************************************************
         * Form 오브젝트 초기화
         ***********************************************************************/ 
        this.fn_init_form = function()
        {
        	this.gfn_initForm(this);
        	this.fn_misFormInit(this);
        	
        	// 오브젝트 등에 대한 처리
        	this.div_search.div_dept.fn_setBind("ds_cond","REQEST_DEPT_CODE","REQEST_DEPT_NM");
        	this.div_search.div_sear.fn_setBind("ds_cond","CLIENT_EMPNO","CLIENT_EMPNM");
        	
        	// 초기 검색조건
        	this.ds_cond.clearData();
        	var nRow = this.ds_cond.addRow();
        	this.ds_cond.setColumn(nRow, "REQEST_YEAR", this.comUtils.getClientDate("YYYY"));	// 당해년도
        	this.ds_cond.setColumn(nRow, "SEARCH_SE"  , '0');
        	this.ds_cond.setColumn(nRow, "CONFM_AT"   , 'A');
        	
        	// 공통코드
        	var comboParams = [
        	    ["ds_ctr022", "CTR022", "Y", "A", "B"]	// ds_ctr022 : 의뢰구분(계약구분)
        	   ,["ds_ctr023", "CTR023", "Y", "A", "B"]	// ds_ctr023 : 상세구분(계약종류)
        	   ,["ds_ctr049", "CTR049", "Y", "A", "B"]	// ds_ctr049 : 계약방법
        	   ,["ds_com052", "COM052", "Y", "A", "B"]	// ds_com052 : 승인여부
        	];
        	var callback = function (svcId, errorCode, errorMsg) {		
        		// 수정가능여부를 판별하기위해 권한그룹 체크
        		if((this.gfn_authGrpId("CTR_ADMIN") != -1)) {			// 계약담당자
        			this.chargerAt = true;
        		}
        		
        		// 수정가능한 경우 부서, 사원정보 변경 가능
        		if(this.chargerAt){
        			this.div_search.div_dept.set_enable(true);
        			this.div_search.div_sear.set_enable(true);
        			this.ds_cond.setColumn(nRow, "REQEST_DEPT_CODE", "000000"        );		// 부서코드
        			this.ds_cond.setColumn(nRow, "REQEST_DEPT_NM",   "화성도시공사");		// 부서명
        		}
        		// 본인의 부서, 사원정보 고정
        		else{
        			//해당 부서만
        			this.ds_cond.setColumn(nRow, "REQEST_DEPT_CODE", this.gfn_getDeptId()  );	// 부서코드
        			this.ds_cond.setColumn(nRow, "REQEST_DEPT_NM",   this.gfn_getDeptName());	// 부서명
        			this.ds_cond.setColumn(nRow, "CLIENT_EMPNO",     this.gfn_getEmpNo()   );	// 사원코드
        			this.ds_cond.setColumn(nRow, "CLIENT_EMPNM",     this.gfn_getUserName());	// 사원명
        		}
        		
        		this.fn_search();	// 초기조회
        	};
        	this.gfn_comboLoad(comboParams, callback);
        }

        /***********************************************************************
         * Dataset 오브젝트 초기화
         ***********************************************************************/ 
        this.fn_init_dataset = function()
        {
        	// ..
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
         * 설명 		: 조회 이벤트 처리(수요조사교육관리)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_search();
         */
        this.fn_search = function()
        {
        	this.ds_cntrctReqestList.clearData();
        	this.ds_cntrctReqestFile.clearData();
        	
        	this.fn_transaction("selectCntrctReqestList");
        }

        
        /**********************************************************************
         * CALL TRANSACTION 영역
         **********************************************************************/
        this.fn_transaction = function(strSvcId)
        {
        	switch (strSvcId) {
        		case "selectCntrctReqestList":	// 계약의뢰목록 조회
        			var sController   	= "hsco/mis/ctr/CTR020300/selectCntrctReqestList.do";
        			var sInDatasets   	= "input1=ds_cond";
        			var sOutDatasets  	= "ds_cntrctReqestList=output1 ds_cntrctReqestFile=output2";
        			break;
        		case "selectReqestOrderPlan":	// 계약의뢰별 발주목록
        			var sController   	= "hsco/mis/ctr/CTR020300/selectReqestOrderPlan.do";
        			var sInDatasets   	= "input1=ds_cond_sub";
        			var sOutDatasets  	= "ds_orderPlan=output1";
        			break;
        		case "cntrctInfoCreat":			// 계약정보생성
        			var sController   	= "hsco/mis/ctr/CTR020300/cntrctInfoCreat.do";
        			var sInDatasets   	= "input1=ds_cntrctReqestList:U";
        			var sOutDatasets  	= "";
        			break;
        		case "cntrctInfoReCreat":		// 계약정보재생성
        			var sController   	= "hsco/mis/ctr/CTR020300/cntrctInfoReCreat.do";
        			var sInDatasets   	= "input1=ds_cntrctReqestList:U";
        			var sOutDatasets  	= "";
        			break;
        	}

        	Ex.core.tran(this, strSvcId, sController, sInDatasets, sOutDatasets); 
        }

         /**********************************************************************
         * Transaction Callback 영역
         ***********************************************************************/
        this.fn_callBack = function (strSvcId,nErrorCode,strErrorMsg)
        {
        	// 오류 및 성공 메시지를 화면에 보여준다.
        	if(nErrorCode != 0) {
        	  this.gfn_callback_message(strSvcId, nErrorCode, strErrorMsg);
        	}
        	
        	if (nErrorCode != 0){
        	} else {
        		switch (strSvcId) {
        			case "selectCntrctReqestList":	// 계약의뢰목록 조회
        				break;
        			case "cntrctInfoCreat":			// 계약정보생성
        				this.gfn_message("success.처리.성공");
        				this.fn_search();
        				break;
        			case "cntrctInfoReCreat":		// 계약정보재생성
        				this.gfn_message("success.처리.성공");
        				this.fn_search();
        				break;
        		}
        	}
        }

        
        /*
         * 함수명  	: fn_popupCallBack
         * 설명 		: 팝업 콜백
         * params  		: None
         * return Type 	: None
         * 사용법		: n/a
         */
        this.fn_popupCallBack = function(strID,variant)
        {
        	var dsTemp = new Dataset();
        	var loadCnt = dsTemp.loadXML(variant);
        	
        	if(strID == "cntrctReqestPopup") {
        		this.fn_search();
        	}
        	
        	// 값이 존재하지 않을 경우에는 아무런 값을 덮어쓰지 않음
        	if(!loadCnt) {
        		return false;
        	}
        	
        	switch(strID) {
        		// 사업
        		case "btn_searchBsns":
        			this.ds_cond.setColumn(0, "BSNS_NM",   dsTemp.getColumn(0, "BSNS_NM"));
        			this.ds_cond.setColumn(0, "BSNS_CODE", dsTemp.getColumn(0, "BSNS_CODE"));
        			break;
        	}
        }

        /***********************************************************************
        * Transaction 영역 끝
        ************************************************************************/

        

        /**********************************************************************
        * non-Transaction 관련 컴포넌트 이벤트 처리 함수
        ***********************************************************************
        *
        * 1. 팝업버튼 관련 이벤트 처리
        * 2. Grid 관련 이벤트 처리
        * 3. dataset 관련 이벤트 처리
        * 
        ***********************************************************************/

        
        /**********************************************************************
        * 팝업버튼 관련 이벤트 처리
        ***********************************************************************/

        /*
         * 함수명  	: btn_copy_onclick
         * 설명 		: '팝업' 버튼 클릭 후 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_copy_onclick(obj,e);
         */
        this.fn_popup_onclick = function(obj,e)
        {
        	switch(obj.name) {
        		// 사업
        		case "btn_searchBsns":
        			this.gfn_popup("btn_searchBsns", 500, 465, "", null, "mis_acc::ACC000000_P04.xfdl", "fn_popupCallBack", true);
        	}
        }

        

        /**********************************************************************
        * Grid 관련 이벤트 처리
        ***********************************************************************/

        
        /*
         * 함수명  	: grd_cntrctReqestList_oncelldblclick
         * 설명 		: 그리드 더블클릭 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.grd_cntrctReqestList_oncelldblclick(obj,e);
         */
        this.grd_cntrctReqestList_oncelldblclick = function(obj,e)
        {
        	if(e.col != 0 && e.col != 3 && e.col != 4) {
        		if(this.chargerAt) {
        			var reqestNo  = this.ds_cntrctReqestList.getColumn(e.row, "REQEST_NO");
        			var reqestNm  = this.ds_cntrctReqestList.getColumn(e.row, "REQEST_NM");
        			var reqestNo2 = reqestNo.substr(0, 4) + "-" + reqestNo.substr(4, 1) + "-" + reqestNo.substr(5);
        			var cntrctAt  = this.ds_cntrctReqestList.getColumn(e.row, "CNTRCT_AT");
        			var enableAt  = this.ds_cntrctReqestList.getColumn(e.row, "ENABLE_AT");
        			var parm = {
        				 arg_0      : this
        				 ,reqestNo	: reqestNo
        				 ,reqestNm	: reqestNm
        				 ,reqestNo2	: reqestNo2
        				 ,cntrctAt	: cntrctAt
        				 ,enableAt	: enableAt
        			};
        			this.gfn_popup("cntrctReqestPopup", 1200, 500, "", parm, "mis_ctr::CTR020300_P01.xfdl", "fn_popupCallBack", true);
        		}
        	} else if(e.col == 3) {
        		var nRow = this.ds_cntrctReqestList.rowposition;
        		if(['1','2','3','4','5'].indexOf(this.ds_cntrctReqestList.getColumn(nRow, "SANCTN_KND1")) > -1) {
        			this.fn_openSanc(this.ds_cntrctReqestList.getColumn(nRow, "SANCTN_NO1"));
        		}	
        	} else if(e.col == 4) {
        		var nRow = this.ds_cntrctReqestList.rowposition;
        		if(['1','2','3','4','5'].indexOf(this.ds_cntrctReqestList.getColumn(nRow, "SANCTN_KND2")) > -1) {
        			this.fn_openSanc(this.ds_cntrctReqestList.getColumn(nRow, "SANCTN_NO2"));
        		}
        	}
        }

        

        /**********************************************************************
        * dataset 관련 이벤트 처리
        ***********************************************************************/

        /*
         * 함수명  	: ds_cond_oncolumnchanged
         * 설명 		: 조회조건 변경시 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.ds_cond_oncolumnchanged(obj,e);
         */
        this.ds_cond_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "REQEST_SE") {		
        		if(e.newvalue == "") {
        			this.ds_ctr023.filter("");
        		}
        		if(e.newvalue == "1") {
        			this.ds_ctr023.filter("CODE > 99 && CODE < 200 || CODE == ''");
        		}
        		else if(e.newvalue == "2") {
        			this.ds_ctr023.filter("CODE > 199 && CODE < 300 || CODE == ''");
        		}
        		else if(e.newvalue == "3") {
        			this.ds_ctr023.filter("CODE > 299 && CODE < 400 || CODE == ''");
        		}
        		
        		this.ds_cond.setColumn(0, "DETAIL_SE", "");
        	}
        }

        
        /*
         * 함수명  	: btn_cntrctInfoCreat_onclick
         * 설명 		: '계약정보생성' 버튼 클릭 후 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_cntrctInfoCreat_onclick(obj,e);
         */
        this.btn_cntrctInfoCreat_onclick = function(obj,e)
        {
        	var chkStr = "";
        	
        	chkStr = "CHK=='1'";
        	if(this.ds_cntrctReqestList.getCaseCount(chkStr) == 0) {
        		alert("계약정보를 생성하고자 하는 건을 체크해주시기 바랍니다.");
        		return false;
        	}

        	chkStr = "CHK=='1' && SANCTN_KND1!='5'";
        	if(this.ds_cntrctReqestList.getCaseCount(chkStr) > 0) {
        		alert("계약의뢰의 결재가 완료된 건만 계약생성이 가능합니다.");
        		return false;
        	}
        	
        // 	chkStr += " && SANCTN_KND2!='5'";
        // 	if(this.ds_cntrctReqestList.getCaseCount(chkStr) == 0) {
        // 		alert("계약건의 결재가 완료된 건만 계약생성이 가능합니다.");
        // 		return false;
        // 	}
        	
        	chkStr = "CHK=='1' && CNTRCT_AT == '1'";
        	if(this.ds_cntrctReqestList.getCaseCount(chkStr) > 0) {
        		alert("이미 계약대장에 등록된 건을 선택하셨습니다.");
        		return false;
        	}
        	
        	if(this.gfn_message("comm.행위여부", "계약정보를 생성")) {
        		this.fn_transaction("cntrctInfoCreat");
        	}
        }

        /*
         * 함수명  	: btn_cntrctInfoReCreat_onclick
         * 설명 		: '계약정보재생성' 버튼 클릭 후 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_cntrctInfoReCreat_onclick(obj,e);
         */
        this.btn_cntrctInfoReCreat_onclick = function(obj,e)
        {
        	var chkStr = "";
        	
        	chkStr = "CHK=='1'";
        	if(this.ds_cntrctReqestList.getCaseCount(chkStr) == 0) {
        		alert("계약정보를 재생성하고자 하는 건을 체크해주시기 바랍니다.");
        		return false;
        	}

        	chkStr = "CHK=='1' && SANCTN_KND1!='5'";
        	if(this.ds_cntrctReqestList.getCaseCount(chkStr) > 0) {
        		alert("계약의뢰의 결재가 완료된 건만 계약재생성이 가능합니다.");
        		return false;
        	}
        	
        	chkStr = "CHK=='1' && CNTRCT_AT != '1'";
        	if(this.ds_cntrctReqestList.getCaseCount(chkStr) > 0) {
        		alert("계약정보가 생성되지 않은 건이 포함되어 있습니다.");
        		return false;
        	}
        	
        	
        	chkStr = "CHK=='1' && CNTRCT_AT == '1' && RE_CREAT_ENABLE_AT != 'Y'";
        	if(this.ds_cntrctReqestList.getCaseCount(chkStr) > 0) {
        		alert("계약정보를 재생성 할 수 없는 건이 포함되어 있습니다.");
        		return false;
        	}
        	
        	if(this.gfn_message("comm.행위여부", "계약정보를 재생성")) {
        		this.fn_transaction("cntrctInfoReCreat");
        	}
        }

        

        /*
         * 함수명  	: grd_cntrctReqestList_onheadclick
         * 설명 		: 전체 선택/해제
         * params  		: None
         * return Type 	: None
         * 사용법		: this.grd_cntrctReqestList_onheadclick(obj,e);
         */
        this.grd_cntrctReqestList_onheadclick = function(obj,e)
        {
        	if(e.col == 0) {
        		//this.gfn_setGridCheckAll(obj, e);
        		var chkCnt = this.ds_cntrctReqestList.getCaseCount("CHK == '1'");
        		if(chkCnt == 0) {
        			for(var fRow = 0; fRow < this.ds_cntrctReqestList.getRowCount(); fRow++) {
        				var sanctnKnd1 = this.ds_cntrctReqestList.getColumn(fRow, "SANCTN_KND1");
        				var cntrctAt = this.ds_cntrctReqestList.getColumn(fRow, "CNTRCT_AT");
        				if(sanctnKnd1 == '5' && cntrctAt != '1') {
        					this.ds_cntrctReqestList.setColumn(fRow, "CHK", '1');
        				}
        			}
        		} else {
        			for(var fRow = 0; fRow < this.ds_cntrctReqestList.getRowCount(); fRow++) {
        				this.ds_cntrctReqestList.setColumn(fRow, "CHK", '0');
        			}
        		}
        	} else {
        		this.gfn_gridSort(obj, e);
        	}
        }

        
        /*
         * 함수명  	: grd_cntrctReqestList_oncellclick
         * 설명 		: 선택/해제
         * params  		: None
         * return Type 	: None
         * 사용법		: this.grd_cntrctReqestList_oncellclick(obj,e);
         */
        this.grd_cntrctReqestList_oncellclick = function(obj,e)
        {
        	if(e.cell == 0) {
        		obj.setCellProperty("Head", e.cell, "text", "0");
        	}
        }

        
        this.ds_cntrctReqestList_onrowposchanged = function(obj,e)
        {
        	var reqestNo = obj.getColumn(e.newrow, "REQEST_NO");
        	
        	this.ds_cond_sub.clearData();
        	var nRow = this.ds_cond_sub.addRow();
        	this.ds_cond_sub.setColumn(nRow, "REQEST_NO", reqestNo);
        	
        	this.ds_orderPlan.clearData();
        	
        	this.fn_transaction("selectReqestOrderPlan");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_cond.addEventHandler("oncolumnchanged", this.ds_cond_oncolumnchanged, this);
            this.ds_cntrctReqestList.addEventHandler("onrowposchanged", this.ds_cntrctReqestList_onrowposchanged, this);
            this.ds_cond_sub.addEventHandler("oncolumnchanged", this.ds_cond_oncolumnchanged, this);
            this.addEventHandler("oninit", this.CTR020300_oninit, this);
            this.addEventHandler("onload", this.CTR020300_onload, this);
            this.grd_cntrctReqestList.addEventHandler("oncelldblclick", this.grd_cntrctReqestList_oncelldblclick, this);
            this.grd_cntrctReqestList.addEventHandler("onheadclick", this.grd_cntrctReqestList_onheadclick, this);
            this.grd_cntrctReqestList.addEventHandler("oncellclick", this.grd_cntrctReqestList_oncellclick, this);
            this.div_search.sta_YEAR.addEventHandler("onclick", this.sta_YEAR_onclick, this);
            this.div_search.sta_YEAR00.addEventHandler("onclick", this.sta_YEAR_onclick, this);
            this.div_search.sta_YEAR01.addEventHandler("onclick", this.sta_YEAR_onclick, this);
            this.div_search.cmb_searchCnd00.addEventHandler("onitemchanged", this.div_search_cmb_EMPL_SE_onitemchanged, this);
            this.div_search.sta_YEAR02.addEventHandler("onclick", this.sta_YEAR_onclick, this);
            this.div_search.edt_BSNS_CODE.addEventHandler("onchanged", this.div_search_edt_BSNS_CODE_onchanged, this);
            this.div_search.btn_searchBsns.addEventHandler("onclick", this.fn_popup_onclick, this);
            this.btn_cntrctInfoCreat.addEventHandler("onclick", this.btn_cntrctInfoCreat_onclick, this);
            this.btn_cntrctInfoReCreat.addEventHandler("onclick", this.btn_cntrctInfoReCreat_onclick, this);

        };

        this.loadIncludeScript("CTR020300.xfdl");
        this.loadPreloadList();
       
    };
}
)();
