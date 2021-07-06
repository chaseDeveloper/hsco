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
                this.set_name("SAL010203");
                this.set_classname("SAL010203");
                this.set_titletext("통상임금(일반직)");
                this._setFormPosition(0,0,1059,735);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_odygsList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PYMNT_YR\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"MT1\" type=\"STRING\" size=\"256\"/><Column id=\"MT2\" type=\"STRING\" size=\"256\"/><Column id=\"MT3\" type=\"STRING\" size=\"256\"/><Column id=\"MT4\" type=\"STRING\" size=\"256\"/><Column id=\"MT5\" type=\"STRING\" size=\"256\"/><Column id=\"MT6\" type=\"STRING\" size=\"256\"/><Column id=\"MT7\" type=\"STRING\" size=\"256\"/><Column id=\"MT8\" type=\"STRING\" size=\"256\"/><Column id=\"MT9\" type=\"STRING\" size=\"256\"/><Column id=\"MT10\" type=\"STRING\" size=\"256\"/><Column id=\"MT11\" type=\"STRING\" size=\"256\"/><Column id=\"MT12\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_odygsDtl", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_YM\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SRCLS\" type=\"STRING\" size=\"256\"/><Column id=\"SRCLS_PROMT_STDR_MT\" type=\"STRING\" size=\"256\"/><Column id=\"CNWK_YYCNT\" type=\"STRING\" size=\"256\"/><Column id=\"CNWK_YYCNT_STDR_MT\" type=\"STRING\" size=\"256\"/><Column id=\"BSLRY\" type=\"STRING\" size=\"256\"/><Column id=\"HOLIDY_VCAMT\" type=\"STRING\" size=\"256\"/><Column id=\"DILIG_ALLWNC\" type=\"STRING\" size=\"256\"/><Column id=\"DILIG_ALLWNC_ADAMT\" type=\"STRING\" size=\"256\"/><Column id=\"MSNS\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_SBSIDY\" type=\"STRING\" size=\"256\"/><Column id=\"ODYGS\" type=\"STRING\" size=\"256\"/><Column id=\"SPC_ALLWNC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_SE", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">-</Col><Col id=\"code\">0</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_TAXT", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">비과세</Col><Col id=\"code\">0</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">과세</Col></Row><Row><Col id=\"data\">-</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_ALLWNC", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">보수</Col><Col id=\"code\">0</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">수당</Col></Row><Row><Col id=\"data\">-</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_procedure", this);
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PYMNT_YR\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_FROM_MM\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_TO_MM\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_FROM_MM\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_TO_MM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_hrm002", this);
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

            obj = new Dataset("ds_condDtl", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PYMNT_YR\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "0", null, "33", "28", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Box");
            this.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", null, "6", "15", "21", "110", null, this.div_search);
            obj.set_taborder("101");
            obj.set_text("월");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "15", "5", "87", "21", null, null, this.div_search);
            obj.set_taborder("95");
            obj.set_text("지급년도");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Spin("spn_year", "absolute", "86", "5", "84", "21", null, null, this.div_search);
            obj.set_taborder("96");
            obj.set_value("0");
            this.div_search.addChild(obj.name, obj);
            obj = new MaskEdit("msk_stMon", "absolute", null, "5", "32", "23", "189", null, this.div_search);
            obj.set_taborder("97");
            obj.set_text("Combo00");
            obj.set_readonly("true");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_mask("## 월");
            this.div_search.addChild(obj.name, obj);
            obj = new MaskEdit("msk_edMon", "absolute", null, "5", "32", "23", "128", null, this.div_search);
            obj.set_taborder("98");
            obj.set_text("Combo00");
            obj.set_readonly("true");
            obj.set_cssclass("msk_WF_Readonly");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", null, "6", "29", "21", "160", null, this.div_search);
            obj.set_taborder("100");
            obj.set_text("월 ~");
            obj.style.set_align("center");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_calc", "absolute", null, "6", "92", "21", "15", null, this.div_search);
            obj.set_taborder("99");
            obj.set_text("통상임금계산");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_empnm", "absolute", "184", "6", "35", "19", null, null, this.div_search);
            obj.set_taborder("102");
            obj.set_text("부서");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("div_DeptComp", "absolute", "221", "5", "194", "21", null, null, this.div_search);
            obj.set_taborder("103");
            obj.set_async("false");
            obj.set_url("com::deptCode.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "414", "-2", "15", "33", null, null, this.div_search);
            obj.set_taborder("104");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "429", "5", "38", "21", null, null, this.div_search);
            obj.set_taborder("105");
            obj.set_text("성명");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("div_EMP", "absolute", "465", "5", "168", "21", null, null, this.div_search);
            obj.set_taborder("106");
            obj.set_text("Div00");
            obj.set_async("false");
            obj.set_url("com::empno.xfdl");
            this.div_search.addChild(obj.name, obj);

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

            obj = new Static("Static08", "absolute", "0%", "33", null, "10", "2.64%", null, this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0%", "39", null, "19", "83.95%", null, this);
            obj.set_taborder("5");
            obj.set_text("통상임금");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0%", "53", null, "5", "2.64%", null, this);
            obj.set_taborder("6");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_OdygsList", "absolute", "-2", "58", null, "520", "28", null, this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_odygsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"140\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"부서\"/><Cell col=\"2\" text=\"직급\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"1월\"/><Cell col=\"5\" text=\"2월\"/><Cell col=\"6\" text=\"3월\"/><Cell col=\"7\" text=\"4월\"/><Cell col=\"8\" text=\"5월\"/><Cell col=\"9\" text=\"6월\"/><Cell col=\"10\" text=\"7월\"/><Cell col=\"11\" text=\"8월\"/><Cell col=\"12\" text=\"9월\"/><Cell col=\"13\" text=\"10월\"/><Cell col=\"14\" text=\"11월\"/><Cell col=\"15\" text=\"12월\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:DEPT_NM\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:HR_CLSF_SE\" combodataset=\"ds_hrm002\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" text=\"bind:EMPNM\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MT1\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MT2\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MT3\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MT4\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MT5\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MT6\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MT7\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MT8\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MT9\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MT10\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MT11\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MT12\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0%", "587", null, "19", "83.95%", null, this);
            obj.set_taborder("8");
            obj.set_text("산출근거");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "2", "611", null, null, "28", "0", this);
            obj.set_taborder("9");
            obj.set_binddataset("ds_odygsDtl");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"성명\"/><Cell col=\"1\" text=\"지급년월\"/><Cell col=\"2\" text=\"직급\"/><Cell col=\"3\" text=\"호봉\"/><Cell col=\"4\" text=\"호봉승급월\"/><Cell col=\"5\" text=\"근속년수\"/><Cell col=\"6\" text=\"근속년수증가월\"/><Cell col=\"7\" text=\"기본급\"/><Cell col=\"8\" text=\"명절휴가비\"/><Cell col=\"9\" text=\"정근수당\"/><Cell col=\"10\" text=\"정근수당가산금\"/><Cell col=\"11\" text=\"급식비\"/><Cell col=\"12\" text=\"직급보조비\"/><Cell col=\"13\" text=\"특정업무수당\"/><Cell col=\"14\" text=\"통상임금\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPNM\"/><Cell col=\"1\" text=\"bind:PYMNT_YM\" mask=\"####-##\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:CLSF_CODE\" combodataset=\"ds_hrm002\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" text=\"bind:SRCLS\"/><Cell col=\"4\" text=\"bind:SRCLS_PROMT_STDR_MT\"/><Cell col=\"5\" text=\"bind:CNWK_YYCNT\"/><Cell col=\"6\" text=\"bind:CNWK_YYCNT_STDR_MT\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BSLRY\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:HOLIDY_VCAMT\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DILIG_ALLWNC\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DILIG_ALLWNC_ADAMT\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MSNS\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CLSF_SBSIDY\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPC_ALLWNC\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ODYGS\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "0%", "606", null, "5", "2.64%", null, this);
            obj.set_taborder("10");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "577", null, "10", "2.64%", null, this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", null, "36", "578", "21", "33", null, this);
            obj.set_taborder("12");
            obj.set_text("매월 임용발령, 호봉승급 후에 통상임금을 다시 계산해야 승진/승급 변경사항이 반영됩니다");
            obj.style.set_align("right middle");
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
            		p.set_classname("SAL010203");
            		p.set_titletext("통상임금(일반직)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_search.spn_year","value","ds_cond","YEAR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_search.msk_stMon","value","ds_cond","PYMNT_FROM_MM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_search.msk_edMon","value","ds_cond","PYMNT_TO_MM");
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
        this.addIncludeScript("SAL010203.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("SAL010203.xfdl", "mis_lib::misUtil.xjs");
        this.registerScript("SAL010203.xfdl", function() {
        /***********************************************************************
         * 업무구분 : 통상임금(일반직)
         * 화면ID   : SAL010203
         * 화면명   : 통상임금(일반직)관리
         * 화면설명 : 통상임금(일반직)을 관리한다.
         * 작성일   : 2017.12.26
         * 작성자   : 이수지
         * 수정이력 : 
         ***********************************************************************
         *     수정일     수정자   내용
         ***********************************************************************
         *   
         ***********************************************************************/
         
        /***********************************************************************
         * Script Include 
         ************************************************************************/
        //include "lib::comInclude.xjs";
        //include "mis_lib::misUtil.xjs";

        /***********************************************************************
         * 화면 변수 선언부
         ***********************************************************************/
        this.checkDs = [
        	 this.ds_odygsList
        ];
        this.chargerAt = false;

        /***********************************************************************
         * onInit 영역
         ***********************************************************************/
        this.SAL010203_oninit = function(obj,e)
        {

        }
         
        /***********************************************************************
         * 설명: 폼로딩시 처리
         ************************************************************************/
        this.SAL010203_onload = function(obj,e)
        {
        	this.fn_init_form();
        	this.fn_init_dataset();
        	
        	// 공통코드
        	var comboParams = [
        		["ds_hrm002", "HRM002", "Y", "", "B"]];		// 증명서 구분
        		              
        	var callback = function (svcId, errorCode, errorMsg) {
        		if(this.gfn_authGrpId("SAL_ADMIN") != -1) {
        			this.chargerAt = true;
        		}
        		
        		this.ds_cond.clearData();
        		var nRow = this.ds_cond.addRow();
        		this.ds_cond.setColumn(nRow, "YEAR",   this.comUtils.getClientDate("YYYY"));	// 당해년도
        		this.ds_cond.setColumn(nRow, "PYMNT_FROM_MM", this.comUtils.getClientDate("MM"));		// 당해월
        		this.ds_cond.setColumn(nRow, "PYMNT_TO_MM",   "12");									// 당해월
        		this.fn_search();	//  최초조회
        	};
        	
        	this.gfn_comboLoad (comboParams, callback);
        }

        /***********************************************************************
         * Form 오브젝트 초기화
         ***********************************************************************/ 
        this.fn_init_form = function()
        {
        	// 검색조건 바인드
        	this.div_search.div_DeptComp.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");
        	this.div_search.div_EMP.fn_setBind("ds_cond", "EMPNO", "EMPNM");

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
         * 설명: 조회 처리
         ************************************************************************/
        this.fn_search= function()
        {
        	// 초기화
        	this.ds_odygsList.clearData();
        	this.fn_transaction("selectOdygsList");
        }

        

        /**********************************************************************
         * CALL TRANSACTION 영역
         **********************************************************************/ 
        this.fn_transaction = function(strSvcId)
        {
        	switch (strSvcId) {
        		case "selectOdygsList": 
        			var sController   	= "hsco/mis/sal/SAL010203/selectOdygsList.do";
        			var sInDatasets   	= "input1=ds_cond";
        			var sOutDatasets  	= "ds_odygsList=output1";
        			break;
        		case "selectOdygsdetailList": 
        			var sController   	= "hsco/mis/sal/SAL010203/selectOdygsdetailList.do";
        			var sInDatasets   	= "input1=ds_condDtl";
        			var sOutDatasets  	= "ds_odygsDtl=output1";
        			break;
        		case "callProcedure":	
        			var sController   	= "hsco/mis/sal/SAL010203/callProcedure.do";	
        			var sInDatasets   	= "input1=ds_procedure";
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
        	/*this.gfn_callback_message(strSvcId, nErrorCode, strErrorMsg);*/
        	if(nErrorCode != '0') {
        		this.gfn_callback_message(strSvcId, nErrorCode, strErrorMsg);
        	}
        	if (nErrorCode != 0){
        		this.gfn_callback_message(strSvcId, nErrorCode, strErrorMsg);	
        	} else {		
        		switch (strSvcId) {
        			case "selectOdygsList": 
        			    
        				break;							
        			case "callProcedure":
        				this.gfn_message("success.처리.성공");
        				this.fn_search();
        			    break;
        		}
        	}
        }

        /***********************************************************************************
        * 설명	: 헤드클릭 정렬
        ***********************************************************************************/
        this.grd_PYMNT_DDC_STDR_CODE_onheadclick = function(obj,e)
        {
        	LGV_COL_SORT = e.col;
            this._gridSort(obj, e);
        }

        /***********************************************************************************
        * 설명	: 그리드의 내용을 엑셀파일로 다운로드
        ***********************************************************************************/
        this.Excel_down_onclick = function(obj,e)
        {
            this.gfn_exportExcel(this.grd_PYMNT_DDC_STDR_CODE, "PYMNT_DDC_STDR_CODE");
        	
        }

        
        this.ds_odygsList_onrowposchanged = function(obj,e)
        {
        	this.ds_odygsDtl.clearData();
        	
        	if(e.newrow>-1){
        		this.ds_condDtl.clearData();
        		this.ds_condDtl.addRow();
        		this.ds_condDtl.setColumn(0, "PYMNT_YR", this.ds_odygsList.getColumn(e.newrow, "PYMNT_YR"));
        		this.ds_condDtl.setColumn(0, "EMPNO",    this.ds_odygsList.getColumn(e.newrow, "EMPNO"));
        		
        		this.fn_transaction("selectOdygsdetailList");
        	}
        }

        this.div_search_btn_calc_onclick = function(obj,e)
        {
        	var year = this.comUtils.getClientDate("YYYY");
        	if(this.ds_cond.getColumn(0, "YEAR") == year){
        		this.ds_procedure.clearData();
        		this.ds_procedure.addRow();
        		this.ds_procedure.setColumn(0, "PYMNT_YR"       , this.ds_cond.getColumn(0, "YEAR"));
        		this.ds_procedure.setColumn(0, "PYMNT_FROM_MM"  , nexacro.toNumber(this.ds_cond.getColumn(0, "PYMNT_FROM_MM"),0,0,0));
        		this.ds_procedure.setColumn(0, "PYMNT_TO_MM"    , nexacro.toNumber(this.ds_cond.getColumn(0, "PYMNT_TO_MM"),0,0,0));
        		this.ds_procedure.setColumn(0, "GUBUN"          , "1");
        		this.fn_transaction("callProcedure");
        	}else{
        		this.gfn_message("info.처리불가","당해년도만 계산 가능합니다.");
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_odygsList.addEventHandler("onrowposchanged", this.ds_odygsList_onrowposchanged, this);
            this.addEventHandler("onload", this.SAL010203_onload, this);
            this.addEventHandler("oninit", this.SAL010203_oninit, this);
            this.div_search.btn_calc.addEventHandler("onclick", this.div_search_btn_calc_onclick, this);
            this.div_search.div_EMP.addEventHandler("onkeyup", this.div_SEARCH_div_EMP_onkeyup, this);

        };

        this.loadIncludeScript("SAL010203.xfdl");
        this.loadPreloadList();
       
    };
}
)();
