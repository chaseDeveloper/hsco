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
                this.set_name("HRM070113");
                this.set_classname("HRM070113");
                this.set_titletext("휴직신청");
                this._setFormPosition(0,0,1059,735);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_validation", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">BGN_DE</Col><Col id=\"compId\">ds_cond</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조회시작일자</Col></Row><Row><Col id=\"colId\">END_DE</Col><Col id=\"compId\">ds_cond</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조회종료일자</Col></Row><Row><Col id=\"colId\">END_DE</Col><Col id=\"compId\">ds_cond</Col><Col id=\"from\">BGN_DE</Col><Col id=\"msgId\">조회종료일자^조회시작일자</Col></Row><Row><Col id=\"compId\">ds_tap1</Col><Col id=\"colId\">LAYOFF_SE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">휴직구분</Col></Row><Row><Col id=\"compId\">ds_tap1</Col><Col id=\"colId\">EMPNO</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">신청자</Col></Row><Row><Col id=\"compId\">ds_tap1</Col><Col id=\"colId\">LAYOFF_BGNDE</Col><Col id=\"msgId\">휴직시작일</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_tap1</Col><Col id=\"colId\">LAYOFF_ENDDE</Col><Col id=\"msgId\">휴직종료일</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_tap1</Col><Col id=\"colId\">LAYOFF_ENDDE</Col><Col id=\"msgId\">휴직시작일^휴직종료일</Col><Col id=\"from\">LAYOFF_BGNDE</Col></Row><Row><Col id=\"compId\">ds_tap1</Col><Col id=\"colId\">LAYOFF_PRVONSH</Col><Col id=\"msgId\">휴직사유</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">WNRD_ADRES</Col><Col id=\"compId\">ds_tap1</Col><Col id=\"msgId\">주소</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">WNRD_CTTPC</Col><Col id=\"compId\">ds_tap1</Col><Col id=\"msgId\">연락처</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">VRSC_EMPNO</Col><Col id=\"compId\">ds_tap1</Col><Col id=\"msgId\">대행자</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">REINSAT_PRARNDE</Col><Col id=\"compId\">ds_tap2</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">복직예정일</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_tap1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LAYOFF_SN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"BRTHDY\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_STS\" type=\"STRING\" size=\"256\"/><Column id=\"GNFD_AT\" type=\"STRING\" size=\"256\"/><Column id=\"LAYOFF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"LAYOFF_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"LAYOFF_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"LAYOFF_PRVONSH\" type=\"STRING\" size=\"256\"/><Column id=\"INFANT_SN\" type=\"STRING\" size=\"256\"/><Column id=\"INFANT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INFANT_BRTHDY\" type=\"STRING\" size=\"256\"/><Column id=\"VRSC_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VRSC_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VRSC_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"VRSC_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"WNRD_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"WNRD_CTTPC\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_POSBL_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_tap2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"REINSAT_SN\" type=\"STRING\" size=\"256\"/><Column id=\"LAYOFF_SN\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_STS\" type=\"STRING\" size=\"256\"/><Column id=\"GNFD_AT\" type=\"STRING\" size=\"256\"/><Column id=\"LAYOFF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"BRTHDY\" type=\"STRING\" size=\"256\"/><Column id=\"LAYOFF_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"LAYOFF_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"LAYOFF_PRVONSH\" type=\"STRING\" size=\"256\"/><Column id=\"INFANT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INFANT_BRTHDY\" type=\"STRING\" size=\"256\"/><Column id=\"WNRD_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"WNRD_CTTPC\" type=\"STRING\" size=\"256\"/><Column id=\"REINSAT_PRARNDE\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_POSBL_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"BGN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DE\" type=\"STRING\" size=\"256\"/><Column id=\"SE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_hrm089_s", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"GRP_CODE_SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_hrm089", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"GRP_CODE_SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_empnoInfo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OFCPS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"OFCPS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond_hr", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("false");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", null, "0", "15", "735", "13", null, this);
            obj.set_taborder("2");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", null, "0", "13", "735", "0", null, this);
            obj.set_taborder("3");
            obj.set_text("스\r\n크\r\n롤\r\n13");
            obj.set_visible("false");
            obj.style.set_background("#d07b173c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "0", null, "33", "28", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("div_WFSA_Box");
            this.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "0", "0", "15", "33", null, null, this.div_search);
            obj.set_taborder("17");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_gnfdDe", "absolute", "15", "6", "64", "19", null, null, this.div_search);
            obj.set_taborder("18");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_dclzSe", "absolute", "314", "6", "64", "19", null, null, this.div_search);
            obj.set_taborder("19");
            obj.set_text("휴직구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_register", "absolute", "771", "6", "51", "19", null, null, this.div_search);
            obj.set_taborder("20");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_BGNDT1", "absolute", "79", "5", "102", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("21");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Essential");
            obj = new Calendar("cal_BGNDT2", "absolute", "197", "5", "102", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Essential");
            obj = new Combo("cmb_DCLZ_SE", "absolute", "378", "5", "105", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("23");
            obj.set_displaynulltext("전체");
            obj.set_innerdataset("@ds_hrm089_s");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj = new Div("div_DeptComp", "absolute", "562", "5", "194", "21", null, null, this.div_search);
            obj.set_taborder("24");
            obj.set_async("false");
            obj.set_url("com::deptCode.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_register00", "absolute", "498", "6", "64", "19", null, null, this.div_search);
            obj.set_taborder("25");
            obj.set_text("소속부서");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "483", "0", "15", "33", null, null, this.div_search);
            obj.set_taborder("26");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "756", "0", "15", "33", null, null, this.div_search);
            obj.set_taborder("27");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("div_EMP", "absolute", "822", "5", "166", "21", null, null, this.div_search);
            obj.set_taborder("28");
            obj.set_async("false");
            obj.set_url("com::empno.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "299", "0", "15", "33", null, null, this.div_search);
            obj.set_taborder("29");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "183", "9", "10", "16", null, null, this);
            obj.set_taborder("6");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "0", "33", "1031", "10", null, null, this);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab", "absolute", "0", "43", null, null, "28", "0", this);
            obj.set_taborder("8");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.style.set_showextrabutton("false");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tpg1", this.Tab);
            obj.set_text("휴직현황");
            this.Tab.addChild(obj.name, obj);
            obj = new Grid("grd_tap1", "absolute", "0", "28", null, null, "0", "0", this.Tab.tpg1);
            obj.set_taborder("2");
            obj.set_binddataset("ds_tap1");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("comboselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"300\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"발령&#13;&#10;여부\"/><Cell col=\"2\" rowspan=\"2\" text=\"결재상태\"/><Cell col=\"3\" rowspan=\"2\" text=\"휴직구분\"/><Cell col=\"4\" colspan=\"4\" text=\"신청자\"/><Cell col=\"8\" colspan=\"2\" text=\"휴직기간\"/><Cell col=\"10\" rowspan=\"2\" text=\"사유\"/><Cell col=\"11\" colspan=\"2\" text=\"영유아\"/><Cell col=\"13\" rowspan=\"2\" text=\"주소\"/><Cell col=\"14\" rowspan=\"2\" text=\"연락처\"/><Cell col=\"15\" colspan=\"4\" text=\"업무대행자\"/><Cell row=\"1\" col=\"4\" text=\"부서\"/><Cell row=\"1\" col=\"5\" text=\"직급\"/><Cell row=\"1\" col=\"6\" text=\"사번\"/><Cell row=\"1\" col=\"7\" text=\"성명\"/><Cell row=\"1\" col=\"8\" text=\"시작일자\"/><Cell row=\"1\" col=\"9\" text=\"종료일자\"/><Cell row=\"1\" col=\"11\" text=\"성명\"/><Cell row=\"1\" col=\"12\" text=\"출생일자\"/><Cell row=\"1\" col=\"15\" text=\"부서\"/><Cell row=\"1\" col=\"16\" text=\"직급\"/><Cell row=\"1\" col=\"17\" text=\"사번\"/><Cell row=\"1\" col=\"18\" text=\"성명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"checkbox\" text=\"bind:GNFD_AT\"/><Cell col=\"2\" displaytype=\"image\" text=\"expr:comp.parent.parent.parent.fn_get_imgUrl(SANCTN_STS)\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"expr:UPDATE_POSBL_AT == '1' ? 'combo' : 'none'\" text=\"bind:LAYOFF_SE\" combodataset=\"ds_hrm089\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodisplay=\"expr:UPDATE_POSBL_AT == '1' ? 'display' : 'edit'\"/><Cell col=\"4\" text=\"bind:DEPT_NM\"/><Cell col=\"5\" text=\"bind:CLSF_NM\"/><Cell col=\"6\" text=\"bind:EMPNO\"/><Cell col=\"7\" text=\"bind:EMPNM\" expandshow=\"expr:comp.parent.parent.parent.isAuth ? UPDATE_POSBL_AT == '1' ? 'show' : 'hide' : 'hide'\"/><Cell col=\"8\" displaytype=\"date\" edittype=\"expr:UPDATE_POSBL_AT == '1' ? 'date' : 'none'\" style=\"align:center middle;\" text=\"bind:LAYOFF_BGNDE\" calendardisplay=\"expr:UPDATE_POSBL_AT == '1' ? 'display' : 'edit'\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"date\" edittype=\"expr:UPDATE_POSBL_AT == '1' ? 'date' : 'none'\" style=\"align:center middle;\" text=\"bind:LAYOFF_ENDDE\" calendardisplay=\"expr:UPDATE_POSBL_AT == '1' ? 'display' : 'edit'\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" edittype=\"expr:UPDATE_POSBL_AT == '1' ? 'normal' : 'none'\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:LAYOFF_PRVONSH\" editdisplay=\"expr:UPDATE_POSBL_AT == '1' ? 'display' : 'edit'\"/><Cell col=\"11\" text=\"bind:INFANT_NM\" expandshow=\"expr: UPDATE_POSBL_AT == '1' ? LAYOFF_SE == '003' ? 'show' : 'hide' : 'hide'\"/><Cell col=\"12\" displaytype=\"date\" text=\"bind:INFANT_BRTHDY\" calendardisplaynulltype=\"none\"/><Cell col=\"13\" edittype=\"expr:UPDATE_POSBL_AT == '1' ? 'normal' : 'none'\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:WNRD_ADRES\" editdisplay=\"expr:UPDATE_POSBL_AT == '1' ? 'display' : 'edit'\"/><Cell col=\"14\" edittype=\"expr:UPDATE_POSBL_AT == '1' ? 'normal' : 'none'\" text=\"bind:WNRD_CTTPC\" editdisplay=\"expr:UPDATE_POSBL_AT == '1' ? 'display' : 'edit'\"/><Cell col=\"15\" text=\"bind:VRSC_DEPT_NM\"/><Cell col=\"16\" text=\"bind:VRSC_CLSF_NM\"/><Cell col=\"17\" text=\"bind:VRSC_EMPNO\"/><Cell col=\"18\" text=\"bind:VRSC_EMPNM\" expandshow=\"expr: UPDATE_POSBL_AT == '1' ? 'show' : 'hide'\"/></Band></Format></Formats>");
            this.Tab.tpg1.addChild(obj.name, obj);
            obj = new Static("Static44", "absolute", "1", "0", null, "5", "13", null, this.Tab.tpg1);
            obj.set_taborder("3");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.Tab.tpg1.addChild(obj.name, obj);
            obj = new Static("sta_entrpsAcctoCntrctDtls", "absolute", "0", "5", "120", "19", null, null, this.Tab.tpg1);
            obj.set_taborder("4");
            obj.set_text("휴직현황");
            obj.set_cssclass("sta_WF_Title02");
            this.Tab.tpg1.addChild(obj.name, obj);
            obj = new Static("Static45", "absolute", "1", "23", null, "5", "13", null, this.Tab.tpg1);
            obj.set_taborder("5");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.Tab.tpg1.addChild(obj.name, obj);
            obj = new Tabpage("tpg2", this.Tab);
            obj.set_text("복직현황");
            this.Tab.addChild(obj.name, obj);
            obj = new Grid("grd_tap2", "absolute", "0", "28", null, null, "0", "0", this.Tab.tpg2);
            obj.set_taborder("0");
            obj.set_binddataset("ds_tap2");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"300\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"발령&#13;&#10;여부\"/><Cell col=\"2\" rowspan=\"2\" text=\"결재상태\"/><Cell col=\"3\" rowspan=\"2\" text=\"휴직구분\"/><Cell col=\"4\" colspan=\"4\" text=\"신청자\"/><Cell col=\"8\" colspan=\"2\" text=\"기간\"/><Cell col=\"10\" rowspan=\"2\" text=\"사유\"/><Cell col=\"11\" colspan=\"2\" text=\"영유아\"/><Cell col=\"13\" rowspan=\"2\" text=\"복직예정일\"/><Cell col=\"14\" rowspan=\"2\" text=\"주소\"/><Cell col=\"15\" rowspan=\"2\" text=\"연락처\"/><Cell row=\"1\" col=\"4\" text=\"부서\"/><Cell row=\"1\" col=\"5\" text=\"직급\"/><Cell row=\"1\" col=\"6\" text=\"사번\"/><Cell row=\"1\" col=\"7\" text=\"성명\"/><Cell row=\"1\" col=\"8\" text=\"시작일자\"/><Cell row=\"1\" col=\"9\" text=\"종료일자\"/><Cell row=\"1\" col=\"11\" text=\"성명\"/><Cell row=\"1\" col=\"12\" text=\"출생일자\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"checkbox\" text=\"bind:GNFD_AT\"/><Cell col=\"2\" displaytype=\"image\" text=\"expr:comp.parent.parent.parent.fn_get_imgUrl(SANCTN_STS)\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:LAYOFF_SE\" combodataset=\"ds_hrm089\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" text=\"bind:DEPT_NM\"/><Cell col=\"5\" text=\"bind:CLSF_NM\"/><Cell col=\"6\" text=\"bind:EMPNO\"/><Cell col=\"7\" text=\"bind:EMPNM\"/><Cell col=\"8\" displaytype=\"date\" style=\"align:center middle;\" text=\"bind:LAYOFF_BGNDE\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"date\" style=\"align:center middle;\" text=\"bind:LAYOFF_ENDDE\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:LAYOFF_PRVONSH\"/><Cell col=\"11\" text=\"bind:INFANT_NM\"/><Cell col=\"12\" displaytype=\"date\" text=\"bind:INFANT_BRTHDY\" calendardisplaynulltype=\"none\"/><Cell col=\"13\" displaytype=\"date\" edittype=\"expr:UPDATE_POSBL_AT == '1' ? 'date' : 'none'\" style=\"align:center middle;\" text=\"bind:REINSAT_PRARNDE\" calendardisplay=\"expr:UPDATE_POSBL_AT == '1' ? 'display' : 'edit'\" calendardisplaynulltype=\"none\"/><Cell col=\"14\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:WNRD_ADRES\"/><Cell col=\"15\" text=\"bind:WNRD_CTTPC\"/></Band></Format></Formats>");
            this.Tab.tpg2.addChild(obj.name, obj);
            obj = new Static("Static44", "absolute", "1", "0", null, "5", "13", null, this.Tab.tpg2);
            obj.set_taborder("1");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.Tab.tpg2.addChild(obj.name, obj);
            obj = new Static("sta_entrpsAcctoCntrctDtls", "absolute", "0", "5", "120", "19", null, null, this.Tab.tpg2);
            obj.set_taborder("2");
            obj.set_text("복직현황");
            obj.set_cssclass("sta_WF_Title02");
            this.Tab.tpg2.addChild(obj.name, obj);
            obj = new Static("Static45", "absolute", "1", "23", null, "5", "13", null, this.Tab.tpg2);
            obj.set_taborder("3");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.Tab.tpg2.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 33, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_cssclass("div_WFSA_Box");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab.tpg1,
            	//-- Layout function
            	function(p) {
            		p.set_text("휴직현황");

            	}
            );
            this.Tab.tpg1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab.tpg2,
            	//-- Layout function
            	function(p) {
            		p.set_text("복직현황");

            	}
            );
            this.Tab.tpg2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1059, 735, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HRM070113");
            		p.set_titletext("휴직신청");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item4","div_search.cal_BGNDT1","value","ds_cond","BGN_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_search.cal_BGNDT2","value","ds_cond","END_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_search.cmb_DCLZ_SE","value","ds_cond","SE");
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
        this.addIncludeScript("HRM070113.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("HRM070113.xfdl", "mis_lib::misUtil.xjs");
        this.registerScript("HRM070113.xfdl", function() {
        /***********************************************************************
         * 화면ID   : HRM070113
         * 화면명   : 휴직신청
         * 화면설명 : 휴직신청을 관리한다.
         * 작성일   : 2015.12.04
         * 작성자   : 김형태
         * 수정이력 : 
         ***********************************************************************
         *     수정일     수정자   내용
         ***********************************************************************
         *    
         ***********************************************************************
         */

        /***********************************************************************
         * Script Include 
         ***********************************************************************/
        // 시스템 공통 라이브러리 Include
        //include "lib::comInclude.xjs";
        //include "mis_lib::misUtil.xjs";

        /**********************************************************************
        * 화면 변수 선언부
        ***********************************************************************/
        this.isAuth = false;
        /**********************************************************************
        * onInit / onLoad 영역
        ***********************************************************************/

        this.HRM070113_oninit = function(obj,e)
        {
        	// ..
        }

        this.HRM070113_onload = function(obj,e)
        {	
        	// Form 초기화
        	this.fn_init_form();

        	// DataSet 초기화
        	this.fn_init_dataset();
        	
        	this.fn_loadCombo();
        }

        

        /**********************************************************************
        * Form/Dataset 오브젝트 초기화
        ***********************************************************************/
        /*
         * 함수명  	: initForm
         * 설명 		: Form을 초기화한다.
         * params  		: None
         * return Type 	: None
         * 사용법		: this.init_Form();
         */
        this.fn_init_form = function()
        {
        	this.gfn_initForm(this);	// 시스템 공통으로 Form을 Initialize 한다.
        	this.fn_misFormInit(this);
        	
        	/* 권한 해제 요청 */
        	if(this.gfn_authGrpId("HRM_ADMIN") != -1 || this.gfn_authGrpId("HRM_SRVIC") != -1) {// 이때는 담당자 플래그 true로 바꿔서 권한분리 부탁드립니다.
        		this.isAuth = true;
        	}else {
        		this.isAuth = false;
        	}
        	
        	// 검색조건 영역 바인딩
        	this.div_search.div_DeptComp.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");
        	this.div_search.div_DeptComp.fn_setReadonly(true);
        	this.div_search.div_DeptComp.div_Search.btn_dept.set_visible(false);
        	this.div_search.div_DeptComp.fn_setCssclass("edt_WF_Readonly");
        	
        	this.div_search.div_EMP.fn_setBind("ds_cond","EMPNO","EMPNM");
        	this.div_search.div_EMP.div_sear.edt_emplnm.set_readonly(true);
        	this.div_search.div_EMP.div_sear.edt_empno.set_readonly(true);
        	this.div_search.div_EMP.div_sear.edt_emplnm.set_cssclass("edt_WF_Readonly");
        	this.div_search.div_EMP.div_sear.edt_empno.set_cssclass("edt_WF_Readonly");
        	this.div_search.div_EMP.div_sear.search.set_visible(false);
        	this.div_search.div_EMP.fn_set_deptCode(this.gfn_getDeptId());
        	
        	// 인사 담당자일 경우
        	if(this.isAuth) {
        		this.div_search.div_DeptComp.fn_setReadonly(false);
        		this.div_search.div_DeptComp.div_Search.btn_dept.set_visible(true);
        		this.div_search.div_DeptComp.fn_setCssclass("");
        		this.div_search.div_EMP.div_sear.edt_emplnm.set_readonly(false);
        		this.div_search.div_EMP.div_sear.edt_empno.set_readonly(false);
        		this.div_search.div_EMP.div_sear.search.set_visible(true);
        		this.div_search.div_EMP.div_sear.edt_emplnm.set_cssclass("");
        		this.div_search.div_EMP.div_sear.edt_empno.set_cssclass("");
        	}
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
        	this.gfn_initCondDs(this, this.div_search);
        }

        
        /*
         * 함수명  	: fn_loadCombo
         * 설명 		: 화면의 Combo 에 데이터를 불러온다.
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_loadCombo();
         */
        this.fn_loadCombo = function ()
        {
        	/*******************************************************************************
        	 * params  		: 1. param_1    : 반환받을 DATASET 명 			(예: DS_AREA_NO_CODE)
        					  2. param_2	: 그룹코드						(예 : COM007)
        					  3. param_3	: 사용여부		    			(예 : A(전체), Y(사용), N(사용안함))
        					  4. param_4	: 콤보박스INDEX(0) 표시		(예 : A(전체), S(선택), E(공백), D(첫번째데이터부터시작) )
        					  5. param_5	: 코드+코드명					(예 : G(코드명), B(코드-코드명) )
        	 ******************************************************************************/
        	var comboParams = [
        		["ds_hrm089", "HRM089", "Y", "D", "B"]	// 근무상황구분
        		,["ds_hrm089_s", "HRM089", "Y", "A", "B"]	// 근무상황구분_검색
        	];
        	this.gfn_comboLoad(comboParams, this.fn_callbackAfter());
        }

        /*
         * 함수명  	: fn_callbackAfter
         * 설명 		: 공통 callback
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_callbackAfter();
         */
        this.fn_callbackAfter = function ()
        {
        	this.ds_cond.clearData();
        	this.ds_cond.addRow();
        	this.ds_cond.setColumn(0, "BGN_DE", this.StartDate());
        	this.ds_cond.setColumn(0, "END_DE", this.gfn_today());
        	
        	// 인사 담당자가 아닐 경우
        	if(!this.isAuth) {
        		this.ds_cond.setColumn(0, "DEPT_CODE", this.gfn_getDeptId());
        		this.ds_cond.setColumn(0, "DEPT_NM", this.gfn_getDeptName());
        		this.ds_cond.setColumn(0, "EMPNO", this.gfn_getEmpNo());
        		this.ds_cond.setColumn(0, "EMPNM", this.gfn_getUserName());
        	}
        	
        	this.fn_search();
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
         * 설명 		: 조회 이벤트 처리(휴직신청)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_search();
         */
        this.fn_search = function()
        {
        	// validation 체크(휴직신청)
        	if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond, this.ds_validation)) {
        		return;
        	}
        	
        	this.ds_tap1.clearData();
        	this.ds_tap2.clearData();
        	
        	this.fn_transaction("selectLayOffList");
        }

        
        /*
         * 함수명  	: fn_save
         * 설명 		: 저장 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_save();
         */
        this.fn_save = function()
        {
        	// 데이터셋 수정 여부체크
        	if (!this.comUtils.isDatasetUpdated(this.ds_tap1) && !this.comUtils.isDatasetUpdated(this.ds_tap2)) {
        		this.gfn_message("comm.데이터.변경.없음");
        		return false;
        	}
        	
        	// validation 체크
        	if(!this.gfn_checkValidation_NoUpdChk(this.ds_tap1, this.ds_validation)) {
        		return;
        	}
        	
        	// 수동 validation 체크
        	var rowCnt = this.ds_tap1.rowcount;
        	var i = 0;
        	for(i; i<rowCnt; i++){
        		var rowType = this.ds_tap1.getRowType(i);
        		
        		if(rowType == Dataset.ROWTYPE_INSERT || rowType == Dataset.ROWTYPE_UPDATE){
        			if(!this.fn_selfValidation(i)){
        				this.gfn_message("comm.항목.입력.을", "["+(i+1)+"]행 영유아");
        				return false;
        			}
        		}
        	}
        	
        	if(this.gfn_message("confirm.저장.여부"))	{
        		this.fn_transaction("saveLayOffCUD");
        	}
        }

        /***********************************************************************************
        * 설명	: 결재
        ***********************************************************************************/
        this.fn_sanction = function()
        {
        	if(this.Tab.tabindex == 0){
        	// 휴직현황 탭일때,
        		
        		var rPos = this.ds_tap1.rowposition;
        		
        		// 결재 전 유효성 체크
        		if(this.comUtils.isDatasetUpdated(this.ds_tap1)) {
        			this.gfn_message("comm.정보.저장.요청", "휴직현황");
        			return;
        		}
        		if(rPos < 0) {
        			this.gfn_message("info.선택데이터.없음.선택.요청");
        			return;
        		}
        		
        		var SANCTN_STS = this.ds_tap1.getColumn(rPos, "SANCTN_STS");
        		
        		if(SANCTN_STS == "1" || SANCTN_STS == "5"){
        			this.gfn_message("info.처리불가", "결재상태가 기안 또는 완료일 경우 진행할 수 없습니다.");
        			return;
        		}
        		
        		// 휴직사유
        		var PRVONSH = "";
        		
        		if(this.ds_tap1.getColumn(rPos, "LAYOFF_SE") == "003"){
        		// 육아휴직일 경우
        			var name = this.ds_tap1.getColumn(rPos, "INFANT_NM");
        			var btd  = this.dateUtils.format(this.ds_tap1.getColumn(rPos, "INFANT_BRTHDY"), "yyyy. mm. dd");
        			
        			PRVONSH = this.ds_tap1.getColumn(rPos, "LAYOFF_PRVONSH") + "\\r\\n" +"자녀 (성명: " + name + ", 생년월일: " + btd + ")";
        			
        		} else {
        			PRVONSH = this.ds_tap1.getColumn(rPos, "LAYOFF_PRVONSH");
        		}
        		
        		// 대행자정보
        		var vrscDeptNm = this.ds_tap1.getColumn(rPos, "VRSC_DEPT_NM");
        		var vrscClsfNm = this.ds_tap1.getColumn(rPos, "VRSC_CLSF_NM");
        		var vrscEmpnm  = this.ds_tap1.getColumn(rPos, "VRSC_EMPNM");
        		
        		vrscDeptNm = vrscDeptNm ? vrscDeptNm : '';
        		vrscClsfNm = vrscClsfNm ? vrscClsfNm : '';
        		vrscEmpnm  = vrscEmpnm  ? vrscEmpnm  : '';
        		
        		var VRSC = "소속: " + vrscDeptNm + ", 직급: " + vrscClsfNm + ", 성명: " + vrscEmpnm;
        		
        		// 결재상신 데이터 셋팅
        		var arrSancData = new Array();
        		
        		arrSancData[0]  = "휴직신청";                                                                         // 결재제목
        		arrSancData[1]  = this.ds_tap1.getColumn(rPos, "DEPT_NM");                                             // 소속
        		arrSancData[2]  = this.ds_tap1.getColumn(rPos, "CLSF_NM");                                             // 직급
        		arrSancData[3]  = this.ds_tap1.getColumn(rPos, "EMPNM");                                               // 성명
        		arrSancData[4]  = this.dateUtils.format(this.ds_tap1.getColumn(rPos, "BRTHDY"), "yyyy. mm. dd");       // 생년월일
        		arrSancData[5]  = this.dateUtils.format(this.ds_tap1.getColumn(rPos, "LAYOFF_BGNDE"), "yyyy. mm. dd"); // 휴직시작일
        		arrSancData[6]  = this.dateUtils.format(this.ds_tap1.getColumn(rPos, "LAYOFF_ENDDE"), "yyyy. mm. dd"); // 휴직종료일
        		arrSancData[7]  = PRVONSH;                                                                             // 휴직사유
        		arrSancData[8]  = this.ds_tap1.getColumn(rPos, "WNRD_ADRES");                                          // 주소
        		arrSancData[9]  = this.ds_tap1.getColumn(rPos, "WNRD_CTTPC");                                          // 연락처
        		arrSancData[10] = VRSC;                                                                                // 업무대행자
        		arrSancData[11] = null;                                                                                // 첨부서류
        		
        		this.fn_callHandySanc2(
        		     this
        		    ,'0000000052'          // formId
        		    ,this.ds_tap1          // mis데이터셋
        		    ,"TBHRM_LAYOFF"        // 갱신테이블명
        		    ,["EMPNO","LAYOFF_SN"] // 테이블키배열
        		    ,arrSancData           // 갑지데이터배열
        		    ,null                  // 을지데이터배열
        		    ,null                  // 다중체크대상
        		    ,null                  // 갱신대상컬럼
        		);
        	}
        	
        	if(this.Tab.tabindex == 1){
        	// 복직현황 탭일때,
        		
        		var rPos = this.ds_tap2.rowposition;
        		
        		// 결재 전 유효성 체크
        		if(this.comUtils.isDatasetUpdated(this.ds_tap2)) {
        			this.gfn_message("comm.정보.저장.요청", "복직현황");
        			return;
        		}
        		if(rPos < 0) {
        			this.gfn_message("info.선택데이터.없음.선택.요청");
        			return;
        		}
        		
        		var SANCTN_STS = this.ds_tap2.getColumn(rPos, "SANCTN_STS");
        		var REDATE = this.ds_tap2.getColumn(rPos, "REINSAT_PRARNDE");
        		
        		if(this.comUtils.isNull(REDATE)){
        			this.gfn_message("comm.항목.입력.을", "복직예정일");
        			return;
        		}
        		
        		if(SANCTN_STS == "1" || SANCTN_STS == "5"){
        			this.gfn_message("info.처리불가", "결재상태가 기안 또는 완료일 경우 진행할 수 없습니다.");
        			return;
        		}
        		
        		// 휴직사유
        		var PRVONSH = "";
        		
        		if(this.ds_tap2.getColumn(rPos, "LAYOFF_SE") == "003"){
        		// 육아휴직일 경우
        			var name = this.ds_tap2.getColumn(rPos, "INFANT_NM");
        			var btd  = this.dateUtils.format(this.ds_tap2.getColumn(rPos, "INFANT_BRTHDY"), "yyyy. mm. dd");
        			
        			name = name ? name : '';
        			btd  = btd  ? btd  : '';
        			
        			PRVONSH = this.ds_tap2.getColumn(rPos, "LAYOFF_PRVONSH") + "\\r\\n" +"자녀 (성명: " + name + ", 생년월일: " + btd + ")";
        			
        		} else {
        			PRVONSH = this.ds_tap2.getColumn(rPos, "LAYOFF_PRVONSH");
        		}
        		
        		// 결재상신 데이터 셋팅
        		var arrSancData = new Array();
        		
        		arrSancData[0]  = "복직원";                                                                           		// 결재제목
        		arrSancData[1]  = this.ds_tap2.getColumn(rPos, "DEPT_NM");                                             		// 소속
        		arrSancData[2]  = this.ds_tap2.getColumn(rPos, "CLSF_NM");                                             		// 직급
        		arrSancData[3]  = this.ds_tap2.getColumn(rPos, "EMPNM");                                               		// 성명
        		arrSancData[4]  = this.dateUtils.format(this.ds_tap2.getColumn(rPos, "BRTHDY"), "yyyy. mm. dd");       		// 생년월일
        		arrSancData[5]  = this.dateUtils.format(this.ds_tap2.getColumn(rPos, "LAYOFF_BGNDE"), "yyyy. mm. dd"); 		// 휴직시작일
        		arrSancData[6]  = this.dateUtils.format(this.ds_tap2.getColumn(rPos, "LAYOFF_ENDDE"), "yyyy. mm. dd"); 		// 휴직종료일
        		arrSancData[7]  = PRVONSH;                                                                             		// 휴직사유
        		arrSancData[8]  = this.dateUtils.format(this.ds_tap2.getColumn(rPos, "REINSAT_PRARNDE"), "yyyy. mm. dd"); 	// 복직예정일
        		arrSancData[9]  = this.ds_tap2.getColumn(rPos, "WNRD_ADRES");                                             	// 주소
        		arrSancData[10]  = this.ds_tap2.getColumn(rPos, "WNRD_CTTPC");                                             	// 연락처
        		
        		this.fn_callHandySanc2(
        		     this
        		    ,'0000000053'                       // formId
        		    ,this.ds_tap2                       // mis데이터셋
        		    ,"TBHRM_REINSAT"                    // 갱신테이블명
        		    ,["EMPNO","LAYOFF_SN","REINSAT_SN"] // 테이블키배열
        		    ,arrSancData                        // 갑지데이터배열
        		    ,null                               // 을지데이터배열
        		    ,null                               // 다중체크대상
        		    ,null                               // 갱신대상컬럼
        		);
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
        		case "selectLayOffList":	// 휴직신청 정보 조회
        			var sController   	= "/hsco/mis/hrm/HRM070113/selectLayOffList.do";
        			var sInDatasets   	= "input1=ds_cond";
        			var sOutDatasets  	= "ds_tap1=output1 ds_tap2=output2";
        			break;
        		case "saveLayOffCUD":		// 저장
        			var sController   	= "/hsco/mis/hrm/HRM070113/saveLayOffCUD.do";
        			var sInDatasets   	= "input1=ds_tap1:U input2=ds_tap2:U";
        			var sOutDatasets  	= "";
        			break;
        		case "selectEmpnoInfo":		// 선택사원 인적사원 조회
        			var sController   	= "/hsco/mis/hrm/HRM070113/selectEmpnoInfo.do";
        			var sInDatasets   	= "input1=ds_cond_hr";
        			var sOutDatasets  	= "ds_empnoInfo=output1";
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
        			case "selectLayOffList":	// 조회
        				break;
        			case "saveLayOffCUD":		// 저장
        				this.gfn_message("success.처리.성공");
        				this.fn_search();
        				break;
        			case "selectEmpnoInfo":		// 사원정보 조회
        				if(this.ds_empnoInfo.rowcount > 0) {
        					var empNm = this.ds_empnoInfo.getColumn(0, "EMPNM");
        					var deptNm = this.ds_empnoInfo.getColumn(0, "DEPT_NM");
        					var clsfNm = this.ds_empnoInfo.getColumn(0, "HR_CLSF_NM");
        					var addr = this.ds_empnoInfo.getColumn(0, "ADDRESS");
        					var telNo = this.ds_empnoInfo.getColumn(0, "TELNO");
        					
        					var row = this.ds_tap1.rowposition;
        					
        					if(this.colSe == "EMPNO"){
        						// 신청자 항목일 경우
        						this.ds_tap1.setColumn(row, "DEPT_NM", deptNm);
        						this.ds_tap1.setColumn(row, "CLSF_NM", clsfNm);
        						this.ds_tap1.setColumn(row, "EMPNM", empNm);
        						this.ds_tap1.setColumn(row, "WNRD_ADRES", addr);
        						this.ds_tap1.setColumn(row, "WNRD_CTTPC", telNo);
        						
        					} else if(this.colSe == "VRSC_EMPNO"){
        						// 대행자 항목일 경우
        						this.ds_tap1.setColumn(row, "VRSC_DEPT_NM", deptNm);
        						this.ds_tap1.setColumn(row, "VRSC_CLSF_NM", clsfNm);
        						this.ds_tap1.setColumn(row, "VRSC_EMPNM", empNm);
        					}					
        				}
        				break;
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
        * 1. Gird 관련 이벤트 처리
        * 2. 공통함수 처리
        * 
        ***********************************************************************/

        /**********************************************************************
        * 공통함수 처리
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
        	if(this.Tab.tabindex == 0){
        		var nRow = this.ds_tap1.addRow();
        		this.ds_tap1.setColumn(nRow, "UPDATE_POSBL_AT", "1");
        		this.ds_tap1.setColumn(nRow, "GNFD_AT", "0");
        		this.ds_tap1.setColumn(nRow, "SANCTN_STS", "0");
        		this.ds_tap1.setColumn(nRow, "LAYOFF_SE", "001");
        		this.ds_tap1.setColumn(nRow, "EMPNO", this.gfn_getEmpNo());
        	} else {
        		this.gfn_message("info.처리불가", "휴직현황만 신규등록이 가능합니다.");
        	}
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
        	if(this.Tab.tabindex == 0){
        	// 휴직현황 탭일때,
        		
        		var rowposition = this.ds_tap1.rowposition;
        		
        		if(rowposition > -1){
        			var sanctnSts = this.ds_tap1.getColumn(rowposition, "SANCTN_STS");		// 결재상태
        			var dcsnAt = this.ds_tap1.getColumn(rowposition, "GNFD_AT");			// 발령여부
        			
        			if(dcsnAt != "1")
        			{
        				// 결재상태 COM022 (0: 기안전 1:기안 2:반송 3:취소 4:중간결재 5:결재완료)
        				// 결재상태가 기안전 외는 신규로 다시 진행.
        				
        				if(sanctnSts != "0") {
        					this.gfn_message("fail.삭제.불가","결재가 진행된 건은");
        				}
        				else {
        					if(this.gfn_message("confirm.삭제여부")){
        						this.ds_tap1.deleteRow(rowposition);
        					}
        				}
        				
        			}else {
        				this.gfn_message("fail.삭제.불가","발령여부가 완료된 건은");
        			}
        		}
        	}
        	
        	if(this.Tab.tabindex == 1){
        	// 복직현황 탭일때,
        		
        		var rowposition = this.ds_tap2.rowposition;
        		
        		if(rowposition > -1){
        			var sanctnSts = this.ds_tap2.getColumn(rowposition, "SANCTN_STS");		// 결재상태
        			var dcsnAt = this.ds_tap2.getColumn(rowposition, "GNFD_AT");			// 발령여부
        			
        			if(dcsnAt != "1")
        			{
        				// 결재상태 COM022 (0: 기안전 1:기안 2:반송 3:취소 4:중간결재 5:결재완료)
        				// 결재상태가 기안전 외는 신규로 다시 진행.
        				
        				if(sanctnSts != "0") {
        					this.gfn_message("fail.삭제.불가","결재가 진행된 건은");
        				}
        				else {
        					if(this.gfn_message("confirm.삭제여부")){
        						this.ds_tap2.deleteRow(rowposition);
        					}
        				}
        				
        			}else {
        				this.gfn_message("fail.삭제.불가","발령여부가 완료된 건은");
        			}
        		}
        	}
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
        	if(this.Tab.tabindex == 0){
        		if(!Ex.util.isUpdated(this.ds_tap1)){
        			this.gfn_message("comm.내역.변경.없음");
        			return false;
        		}
        		
        		if (this.gfn_message("confirm.행위여부", "휴직현황을 복원")) {
        			this.ds_tap1.reset();		//DATASET ROLLBACK
        			this.ds_tap1.applyChange();	//DATASET COMMIT
        			return;
        		}
        	}
        	
        	if(this.Tab.tabindex == 1){
        		if(!Ex.util.isUpdated(this.ds_tap2)){
        			this.gfn_message("comm.내역.변경.없음");
        			return false;
        		}
        		
        		if (this.gfn_message("confirm.행위여부", "복직현황을 복원")) {
        			this.ds_tap2.reset();		//DATASET ROLLBACK
        			this.ds_tap2.applyChange();	//DATASET COMMIT
        			return;
        		}
        	}
        }

        /***********************************************************************
        * 사용자 정의 함수
        ************************************************************************/
         /*
         * 함수명  	: StartDate
         * 설명 		: 한달 전 날짜 구하는 함수
         *                
         * params  		: None
         * return Type 	: None
         * 사용법		: this.StartDate();
         */
        this.StartDate = function ()
        {
        	var sToday = "";
            var objDate = new Date();
            var sToday  = objDate.getFullYear() + "";
            var sMonth = objDate.getMonth();
            var sDate = objDate.getDate();
            
            if(sMonth.toString().length == 1){
        		sMonth = "0" + sMonth;
            }
        	if(sDate.toString().length == 1){
        		sDate = "0" + sDate;
            }
            sToday = sToday+sMonth+sDate;
            
            return sToday;
        }

        /*
         * 함수명  	: fn_get_imgUrl
         * 설명 		: 전자결재종류 이미지 경로 리턴 함수
         * params  		: 대상 전자결재 상태
         * return Type 	: 전자결재 종류 이미지 경로
         * 사용법		: this.fn_get_imgUrl(sanctnSts)
         */
        this.fn_get_imgUrl = function(sanctnSts)
        {
        	return this.gfn_getSanctnImgUrl(sanctnSts);
        }

        /*
         * 함수명  	: fn_selfValidation
         * 설명 		: 육아휴직에 대한 validation 체크
         * params  		: 대상 그리드 행번호
         * return Type 	: None
         * 사용법		: this.fn_selfValidation(rowposition)
         */
        this.fn_selfValidation = function(nRow){
        	var acode = this.ds_tap1.getColumn(nRow, "LAYOFF_SE");
        	
        	if(acode == "003"){
        		var seq = this.ds_tap1.getColumn(nRow, "INFANT_SN");
        		
        		if(this.comUtils.isNull(seq)){
        			return false;
        		}
        	}
        	
        	return true;
        }

        /*
         * 함수명  	: fn_popupCallBack
         * 설명 		: Popup Callback 처리
         * params  		: sPopupId    : 팝업 ID
         * sReturn      : 팝업 처리 결과(dataset.saveXML())
         * return Type 	: None
         * 사용법		: 
         */
        this.fn_popupCallback = function(sPopupId,sReturn)
        {
        	var ds_Popup = new Dataset();
        	var loadCnt = ds_Popup.loadXML(sReturn);
        	var nRow    = this.ds_tap1.rowposition;
        	
        	if(loadCnt){
        		if(sPopupId == "empPop1") {	// 휴직신청자 항목
        			var EmpCode   = ds_Popup.getColumn(0, "EMPNO");
        			
        			this.ds_tap1.setColumn(nRow, "EMPNO", EmpCode);
        		}
        		
        		if(sPopupId == "empPop2") {	// 업무대행자 항목
        			var EmpCode   = ds_Popup.getColumn(0, "EMPNO");
        			
        			this.ds_tap1.setColumn(nRow, "VRSC_EMPNO", EmpCode);
        		}
        		
        		if(sPopupId == "infantPop") {	// 영유아 항목
        			var SEQ  = ds_Popup.getColumn(0, "SEQ");
        			var NM   = ds_Popup.getColumn(0, "FAMILY_NM");
        			var BTD  = ds_Popup.getColumn(0, "BRTHDY");
        			
        			this.ds_tap1.setColumn(nRow, "INFANT_SN", SEQ);
        			this.ds_tap1.setColumn(nRow, "INFANT_NM", NM);
        			this.ds_tap1.setColumn(nRow, "INFANT_BRTHDY", BTD);
        		}
        	}
        }

        /***********************************************************************
        * 데이터셋 정의 함수
        ************************************************************************/
        /*
         * 함수명  	: ds_tap1_oncolumnchanged
         * 설명 		: 휴직현황 컬럼 변경 후 이벤트 함수
         * params  		: 
         * return Type 	: 
         * 사용법		: this.ds_tap1_oncolumnchanged()
         */
        this.ds_tap1_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "EMPNO"){
        		// 휴직대상자 항목 변경시
        		if(obj.getColumn(e.row, "LAYOFF_SE") == "003"){
        			// 휴직구분이 육아휴직일 경우, 영유아 항목 초기화
        			obj.setColumn(e.row, "INFANT_SN", "");		// 자녀순번
        			obj.setColumn(e.row, "INFANT_NM", "");		// 자녀이름
        			obj.setColumn(e.row, "INFANT_BRTHDY", "");	// 자녀생년월일
        		}
        		
        		this.colSe = "EMPNO";
        		this.ds_cond_hr.clearData();
        		this.ds_cond_hr.addRow();
        		this.ds_cond_hr.setColumn(0, "EMPNO", e.newvalue);
        		this.fn_transaction("selectEmpnoInfo");
        	}
        	
        	if(e.columnid == "VRSC_EMPNO"){
        		// 대행업무자 항목 변경시
        		this.colSe = "VRSC_EMPNO";
        		this.ds_cond_hr.clearData();
        		this.ds_cond_hr.addRow();
        		this.ds_cond_hr.setColumn(0, "EMPNO", e.newvalue);
        		this.fn_transaction("selectEmpnoInfo");
        	}
        	
        	if(e.columnid == "LAYOFF_SE"){
        		// 휴직구분 항목 변경시 영유아 항목 초기화
        		obj.setColumn(e.row, "INFANT_SN", "");		// 자녀순번
        		obj.setColumn(e.row, "INFANT_NM", "");		// 자녀이름
        		obj.setColumn(e.row, "INFANT_BRTHDY", "");	// 자녀생년월일
        	}
        }

        /***********************************************************************
        * 그리드 정의 함수
        ************************************************************************/

        /*
         * 함수명  	: Tab_tpg1_grd_tap1_onexpandup
         * 설명 		: 그리드onexpandup 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.Tab_tpg1_grd_tap1_onexpandup();
         */
        this.Tab_tpg1_grd_tap1_onexpandup = function(obj,e)
        {
        	if(e.col == 2){	// 전자결재 진행현황 보기 이벤트
         	   
        		var nRow = this.ds_tap1.rowposition;
         	    var SANCTN_NO = this.ds_tap1.getColumn(nRow, "SANCTN_NO");
        		var SANCTN_STS = this.ds_tap1.getColumn(nRow, "SANCTN_STS");		
        		var REGIST_DT = this.ds_tap1.getColumn(nRow, "REGIST_DT");
        		
        		//if( this.comUtils.isNullEmpty(SANCTN_NO) || SANCTN_STS < 1 || SANCTN_STS == 'NUL' ){
        		if( SANCTN_STS < 1 || SANCTN_STS == 'NUL' ){
        			return;
        		}
        		
        	    var parm = {
        			arg_0 : this,  
        			arg_1 : SANCTN_NO,  // 결재번호
        			arg_2 : REGIST_DT
        		};
        		this.gfn_popup("COM010400_P01", 710, 580, "전자결재진행 현황", parm, "com::COM010400_P01.xfdl", "fn_popupCallback");
        	}
        	
        	if(e.col == 7){
        		// 신청자 항목
        		var parm = {
        			arg_0 : this  //==> 필수, 팝업을 호출하는 form을 참조할 수 있도록 팝업에 Argument로 넘겨준다. (반드시 기술해야 함.)
        		};
        		this.gfn_popup("empPop1", 400, 400, "휴직신청자선택팝업", parm, "com::empno_P01.xfdl", "fn_popupCallback", true);
        	}
        	
        	if(e.col == 11){
        		// 영유아 항목
        		var parm = {
        			arg_0 : this  //==> 필수, 팝업을 호출하는 form을 참조할 수 있도록 팝업에 Argument로 넘겨준다. (반드시 기술해야 함.)
        		   ,arg_1 : this.ds_tap1.getColumn(this.ds_tap1.rowposition, "EMPNO")
        		   ,arg_2 : this.ds_tap1.getColumn(this.ds_tap1.rowposition, "EMPNM")
        			
        		};
        		this.gfn_popup("infantPop", 400, 400, "", parm, "mis_hrm::HRM070113_P1.xfdl", "fn_popupCallback", true);
        	}
        	
        	if(e.col == 18){
        		// 대행자 항목
        		var parm = {
        			arg_0 : this  //==> 필수, 팝업을 호출하는 form을 참조할 수 있도록 팝업에 Argument로 넘겨준다. (반드시 기술해야 함.)
        		};
        		this.gfn_popup("empPop2", 400, 400, "업무대행자선택팝업", parm, "com::empno_P01.xfdl", "fn_popupCallback", true);
        	}
        }

        
        this.Tab_tpg2_grd_tap2_oncellclick = function(obj,e)
        {
        	if(e.col == 2){	// 전자결재 진행현황 보기 이벤트
         	   
        		var nRow = this.ds_tap2.rowposition;
         	    var SANCTN_NO = this.ds_tap2.getColumn(nRow, "SANCTN_NO");
        		var SANCTN_STS = this.ds_tap2.getColumn(nRow, "SANCTN_STS");		
        		var REGIST_DT = this.ds_tap2.getColumn(nRow, "REGIST_DT");
        		
        		//if( this.comUtils.isNullEmpty(SANCTN_NO) || SANCTN_STS < 1 || SANCTN_STS == 'NUL' ){
        		if( SANCTN_STS < 1 || SANCTN_STS == 'NUL' ){
        			return;
        		}
        		
        	    var parm = {
        			arg_0 : this,  
        			arg_1 : SANCTN_NO,  // 결재번호
        			arg_2 : REGIST_DT
        		};
        		this.gfn_popup("COM010400_P01", 710, 580, "전자결재진행 현황", parm, "com::COM010400_P01.xfdl", "fn_popupCallback");
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_tap1.addEventHandler("oncolumnchanged", this.ds_tap1_oncolumnchanged, this);
            this.addEventHandler("oninit", this.HRM070113_oninit, this);
            this.addEventHandler("onload", this.HRM070113_onload, this);
            this.Tab.tpg1.grd_tap1.addEventHandler("onexpandup", this.Tab_tpg1_grd_tap1_onexpandup, this);
            this.Tab.tpg2.grd_tap2.addEventHandler("oncellclick", this.Tab_tpg2_grd_tap2_oncellclick, this);

        };

        this.loadIncludeScript("HRM070113.xfdl");
        this.loadPreloadList();
       
    };
}
)();
