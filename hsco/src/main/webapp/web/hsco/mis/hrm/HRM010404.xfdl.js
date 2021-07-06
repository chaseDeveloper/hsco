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
                this.set_name("HRM010404");
                this.set_classname("");
                this.set_titletext("P/L추천등록");
                this._setFormPosition(0,0,1059,735);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("DS_DTY_R_DTL", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STDR_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"3\"/><Column id=\"SPORT_SE\" type=\"STRING\" size=\"3\"/><Column id=\"D01\" type=\"STRING\" size=\"256\"/><Column id=\"D02\" type=\"STRING\" size=\"256\"/><Column id=\"D03\" type=\"STRING\" size=\"256\"/><Column id=\"M01\" type=\"STRING\" size=\"1024\"/><Column id=\"M02\" type=\"STRING\" size=\"1024\"/><Column id=\"M03\" type=\"STRING\" size=\"1024\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_PR_LIST", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STDR_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PART_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PART_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CNDCY_MAN_EMPNO1\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM1\" type=\"STRING\" size=\"256\"/><Column id=\"CNDCY_MAN_EMPNO2\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM2\" type=\"STRING\" size=\"256\"/><Column id=\"CNDCY_MAN_EMPNO3\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_COND", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STDR_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RECOMEND_MAN_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_PR_LIST_C", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STDR_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PART_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RECOMEND_RANK\" type=\"STRING\" size=\"256\"/><Column id=\"CNDCY_MAN_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"DCSN_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_hrm208", this);
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

            obj = new Dataset("ds_userInfo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DTY_SE\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_curInfo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STDR_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOS_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_odrSe", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_work", "absolute", "0", "69", null, null, "28", "0", this);
            obj.set_taborder("37");
            obj.style.set_background("#00000000");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "0", null, null, "0", "0", this.div_work);
            obj.set_taborder("0");
            obj.set_binddataset("DS_PR_LIST");
            obj.set_autoenter("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"88\"/><Column size=\"188\"/><Column size=\"88\"/><Column size=\"188\"/><Column size=\"100\"/><Column size=\"121\"/><Column size=\"100\"/><Column size=\"121\"/><Column size=\"100\"/><Column size=\"121\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" colspan=\"2\" text=\"부서\"/><Cell col=\"3\" colspan=\"2\" text=\"추천 파트\"/><Cell col=\"5\" colspan=\"2\" text=\"1 순위\"/><Cell col=\"7\" colspan=\"2\" text=\"2 순위\"/><Cell col=\"9\" colspan=\"2\" text=\"3 순위\"/><Cell row=\"1\" col=\"1\" text=\"부서코드\"/><Cell row=\"1\" col=\"2\" text=\"부서명\"/><Cell row=\"1\" col=\"3\" text=\"파트코드\"/><Cell row=\"1\" col=\"4\" text=\"파트명\"/><Cell row=\"1\" col=\"5\" text=\"사번\"/><Cell row=\"1\" col=\"6\" text=\"성명\"/><Cell row=\"1\" col=\"7\" text=\"사번\"/><Cell row=\"1\" col=\"8\" text=\"성명\"/><Cell row=\"1\" col=\"9\" text=\"사번\"/><Cell row=\"1\" col=\"10\" text=\"성명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:DEPT_CODE\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"2\" text=\"bind:DEPT_NM\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"3\" text=\"bind:PART_CODE\"/><Cell col=\"4\" text=\"bind:PART_NAME\"/><Cell col=\"5\" edittype=\"normal\" text=\"bind:CNDCY_MAN_EMPNO1\" expandshow=\"show\" expandsize=\"25\"/><Cell col=\"6\" text=\"bind:EMPNM1\"/><Cell col=\"7\" edittype=\"normal\" text=\"bind:CNDCY_MAN_EMPNO2\" expandshow=\"show\" expandsize=\"25\"/><Cell col=\"8\" text=\"bind:EMPNM2\"/><Cell col=\"9\" edittype=\"normal\" text=\"bind:CNDCY_MAN_EMPNO3\" expandshow=\"show\" expandsize=\"25\"/><Cell col=\"10\" text=\"bind:EMPNM3\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_SearchArea", "absolute", "0", "0", null, "33", "28", null, this);
            obj.set_taborder("29");
            obj.set_cssclass("div_WFSA_Box");
            this.addChild(obj.name, obj);
            obj = new Edit("edt_RECOMEND_MANNM", "absolute", null, "5", "144", "22", "9", null, this.div_SearchArea);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Edit("edt_RECOMEND_MANNO", "absolute", null, "5", "80", "22", "158", null, this.div_SearchArea);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Static("sta_STDR_DE00", "absolute", null, "6", "50", "20", "243", null, this.div_SearchArea);
            obj.set_taborder("4");
            obj.set_text("추천자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Combo("cmb_ODR_SE", "absolute", "210", "5", "119", "22", null, null, this.div_SearchArea);
            this.div_SearchArea.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_displaynulltext("-선택-");
            obj.set_readonly("true");
            obj.style.set_background("#f0f0f0ff");
            obj.set_innerdataset("@ds_odrSe");
            obj.set_index("-1");
            obj = new Static("sta_SE", "absolute", "165", "6", "40", "20", null, null, this.div_SearchArea);
            obj.set_taborder("5");
            obj.set_text("구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Spin("spn_YEAR", "absolute", "80", "5", "70", "22", null, null, this.div_SearchArea);
            obj.set_taborder("1");
            obj.set_max("2999");
            obj.set_min("1900");
            obj.set_readonly("true");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Static("sta_STDR_DE", "absolute", "15", "6", "62", "20", null, null, this.div_SearchArea);
            obj.set_taborder("6");
            obj.set_text("기준년도");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Edit("edt_DEPT_CODE", "absolute", "53.25%", "4", null, "22", "32.78%", null, this.div_SearchArea);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_visible("false");
            this.div_SearchArea.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "0%", "33", null, "10", "2.64%", null, this);
            obj.set_taborder("38");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0%", "43", null, "21", "79.98%", null, this);
            obj.set_taborder("39");
            obj.set_text("P/L 추천내역");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0%", "62", null, "5", "51.75%", null, this);
            obj.set_taborder("40");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1056, 750, this.div_work,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("37");
            		p.style.set_background("#00000000");
            		p.set_scrollbars("none");

            	}
            );
            this.div_work.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1022, 41, this.div_SearchArea,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("29");
            		p.set_cssclass("div_WFSA_Box");

            	}
            );
            this.div_SearchArea.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1059, 735, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("P/L추천등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item7","Search00.D_EOPCHE_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","ENTRPS_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Search00.D_DAEPYOJA_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","REPRSNT_MAN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Search00.D_POST_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","POST_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Search00.D_JUSO_EDIT1","value","TBITM_MNTNC_MENDNG_ENTRPS","ADRES");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Search00.D_JUSO_EDIT2","value","TBITM_MNTNC_MENDNG_ENTRPS","DETAIL_ADRES");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Search00.D_TEL_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","CTTPC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Search00.D_FAX_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","FAX_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","Search00.D_SAYONG_RADIO","value","TBITM_MNTNC_MENDNG_ENTRPS","USE_ENNC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","Search00.D_BIGO_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","RM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Tab00.tabpage1.D_NAME_EDIT","value","TBITM_ENTRPS_EMP","ENTRPS_EMP_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Tab00.tabpage1.D_JIKWI_EDIT","value","TBITM_ENTRPS_EMP","OFCPS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Tab00.tabpage1.D_DAMDANG_EDIT","value","TBITM_ENTRPS_EMP","CHRG_JOB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Tab00.tabpage1.D_JIWON_COMBO","value","TBITM_ENTRPS_EMP","SPORT_STLE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Tab00.tabpage1.D_TEL_EDIT","value","TBITM_ENTRPS_EMP","CTTPC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Tab00.tabpage1.D_EMAIL_EDIT","value","TBITM_ENTRPS_EMP","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div_DETAIL00.edt_ENTRPS_NM","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","ENTRPS_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","div_DETAIL00.edt_REPRSNT_MAN","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","REPRSNT_MAN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","div_DETAIL00.mae_POST_NO","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","POST_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","div_DETAIL00.edt_ADRES","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","ADRES");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","div_DETAIL00.edt_DETAIL_ADRES","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","DETAIL_ADRES");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","div_DETAIL00.edt_CTTPC","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","CTTPC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","div_DETAIL00.edt_FAX_NO","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","FAX_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","div_DETAIL00.edt_USE_ENNC","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","USE_ENNC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","div_DETAIL00.txt_RM","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","RM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","div_SearchArea.edt_RECOMEND_MANNO","value","DS_COND","RECOMEND_MAN_EMPNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","div_SearchArea.cmb_ODR_SE","value","DS_COND","ODR_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","div_SearchArea.spn_YEAR","value","DS_COND","STDR_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","div_SearchArea.edt_DEPT_CODE","value","DS_COND","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HRM010404.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("HRM010404.xfdl", "mis_lib::misUtil.xjs");
        this.registerScript("HRM010404.xfdl", function() {
        /***********************************************************************
        * 화면ID   : HRM010404.xfdl
        * 화면명   : P/L 추천등록
        * 화면설명 : 부서장이 해당 파트/순위별 P/L 후보자를 추천한 내역을 등록한다.
        * 작성일   : 2015.07.02
        * 작성자   : 박병일
        * 수정이력 :  
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
        ************************************************************************/
        this.nRowPos = 0; 
        var closAtFlag = "";	//마감구분 플래그

        
        /***********************************************************************
         * onInit / onLoad 영역
         ***********************************************************************/
        this.HRM010404_oninit = function(obj,e)
        {
        	// Form 초기화
        	this.fn_init_form();
        	// DataSet 초기화
        	this.fn_init_dataset();
        } 
         
        this.HRM010404_onload = function(obj,e)
        {
        	// Combo에 사용되는 Dataset Load(차수콤보)
        	this.fn_loadCombo();
        	
        	// 검색조건 컴포넌트 초기값 부여(현재적용 년도/차수)
        	this.fn_init_current();
        }

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
        	
        	this.DS_COND.clearData();
        	this.DS_COND.addRow();
        	
        	this.DS_COND.setColumn(0, "EMPNO", this.fn_getEmpno());	//접속자정보 확인용 파라메터
        	
        	this.div_SearchArea.edt_RECOMEND_MANNO.set_value(this.fn_getEmpno());  // 현.접속자 사번
        	this.div_SearchArea.edt_RECOMEND_MANNM.set_value(this.fn_getEmpnm());  // 현.접속자 성명
        	this.div_SearchArea.edt_DEPT_CODE.set_value(this.gfn_getDeptId());  // 현.접속자 부서코드	
        	
        	// 공통코드
        	var comboParams = [
        	    ["ds_hrm208", "HRM208", "Y", "D", "B"]	// ds_hrm028
        	];
        	var callback = function (svcId, errorCode, errorMsg) {
        		this.ds_hrm208.set_filterstr("VAL0=='" + this.gfn_getDeptId() + "'");
        		this.fn_search_userInfo();
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
        	// ..
        }

        //----------------------------------
        // Get Current 평가차수
        //----------------------------------
        this.fn_init_current = function()
        {
        	this.ds_curInfo.clearData();
        	this.fn_transaction("selectCurStdrOdrInfo");
        }

        //-----------------------------------------------------
        // 화면의 Combo 에 데이터를 불러온다. (공통코드)
        //-----------------------------------------------------
         this.fn_loadCombo = function ()
        {
            // 평가차수
            this.gfn_loadCodeComboWithDs(this, "", this.ds_odrSe, "HRM223", "", "Y", " ", "N", "");    
        }

        /***********************************************************************
        * Transaction 영역 시작
        ************************************************************************/

        /***********************************************************************
         * Transaction 관련 이벤트 핸들러 
         **********************************************************************/

        /*
         * 함수명  	: fn_search
         * 설명 		: 조회 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_search();
         */
        this.fn_search = function()
        {
        	var rspofcSe = this.ds_userInfo.getColumn(0, "RSPOFC_SE")
        	if(this.ds_userInfo.getRowCount() > 0) {
        		if(nexacro.toNumber(rspofcSe) >  nexacro.toNumber('356')) {
        			this.gfn_message("info.처리불가", "직책이 '부서장' 이상일 경우에만 조회 가능합니다.");
        			return false;
        		}
        	}
        	this.DS_PR_LIST.clearData();
        	this.fn_transaction("mainSearchList");
        }

        
        /*
         * 함수명  	: fn_search
         * 설명 		: 조회 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_search();
         */
        this.fn_search_userInfo = function()
        {
        	this.ds_userInfo.clearData();
        	this.fn_transaction("selectUserInfo");
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
        	if(closAtFlag==true){
        		alert("현재 차수의 공모가 마감되었습니다.");
        		return false;
        	}
        	
        	if( Ex.util.isUpdated(this.DS_PR_LIST) ){
        		this.fn_DsDummy();
        		if(this.gfn_message("confirm.저장.여부"))	{
        			nRowPos = this.DS_PR_LIST.rowposition;
        			this.fn_transaction("mainCUD");
        		}
        	}
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
        		case "mainSearchList": // 조회
        			var sController   	= "hsco/mis/hrm/HRM010404/mainSearchList.do";
        	        var sInDatasets   	= "input1=DS_COND";
        			var sOutDatasets  	= "DS_PR_LIST=output1";
        			break;
        		
        		case "selectUserInfo": // 접속자 정보 조회
        			var sController   	= "hsco/mis/hrm/HRMCommon/selectUserInfo.do";
        	        var sInDatasets   	= "input1=DS_COND";
        			var sOutDatasets  	= "ds_userInfo=output1";
        			break;
        			
        		case "mainCUD": // 신규,수정, 삭제  
        			var sController   	= "hsco/mis/hrm/HRM010404/mainCUD.do";
        	        var sInDatasets   	= "input1=DS_PR_LIST_C";		
        			var sOutDatasets  	= "";
        			break;
        		
        		case "selectCurStdrOdrInfo": // GET 현재 공모차수(기준년도&차수)
        			var sController   	= "hsco/mis/hrm/HRMCommon/selectCurStdrOdrInfo.do";
        			var sInDatasets   	= "";
        			var sOutDatasets  	= "ds_curInfo=output1";
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
        			case "mainSearchList":
        				break;
        			case "selectUserInfo":
        				this.fn_search();
        				break;
        			case "mainCUD":
        			    this.fn_search();
        				break;
        			case "selectCurStdrOdrInfo": // GET 현재 공모차수
        				this.fn_setCurInfo("stdrYear");
        				this.fn_setCurInfo("odrSe");  //TO-DO 확장보완		
        				this.fn_setCurInfo("closAt"); //마감구분
        				
        				break;
        		}
        	}
        }

        /***********************************************************************
        * Transaction 영역 끝
        ************************************************************************/

        /***********************************************************************
         * non-Transaction 관련 컴포넌트 이벤트 처리 함수
         ***********************************************************************/

        //---------
        // 취소
        //---------
        this.fn_cancel = function ()
        {
        	this.DS_PR_LIST.reset();			//DATASET ROLLBACK
        	this.DS_PR_LIST.applyChange();		//ROWTYPE_NORMAL("normal")
        	return;	
        }

        /***********************************************************************************
        * User Function
        ***********************************************************************************/
        //-------------------------------------
        // Grid 확장버튼(사원번호) UP
        //-------------------------------------
        this.div_work_grdList_onexpandup = function(obj,e)
        {
        	if (e.cell == '5' || e.cell == '7' || e.cell == '9') {
        	
        	    var sDeptCd   = this.DS_PR_LIST.getColumn(this.DS_PR_LIST.rowposition,"DEPT_CODE");
        		var stdrYr    = this.ds_curInfo.getColumn(0, "STDR_YEAR");
        		var sodrSe    = this.ds_curInfo.getColumn(0, "ODR_SE");
        		var sPopupId = "EmpnoPop" + e.cell.toString();		
        	
        		// PL추천대상자(후보자) 조회 팝업호출
        		var parm = {
        			arg_0 : this,	//==> 필수, 팝업을 호출하는 form을 참조할 수 있도록 팝업에 Argument로 넘겨준다. (반드시 기술해야 함.)
        			arg_1 : null, 
        			arg_2 : null,
        			arg_3 : null,
        			deptCd : sDeptCd ,
        			stdrYear : stdrYr,
        			odrSe : sodrSe			
        		};
        		this.gfn_popup(sPopupId, 400, 400, "P/L 추천", parm, "mis_hrm::HRM010404_P01.xfdl", "fn_PopupCallback", true);
        	
        	}
        }

        /*
         * 함수명  	: fn_PopupCallback
         * 설명 		: Popup Call 이후 처리
         * params  		: None
         * return Type 	: None
         * 사용법		:       ;
         */
        this.fn_PopupCallback = function(sPopupId,sReturn)
        {
        	if (sPopupId.substr(0,8) == "EmpnoPop") {
        	
        		var dsEmpNo = new Dataset();
        		var loadCnt = dsEmpNo.loadXML(sReturn);
        		if(loadCnt) {
        			var pwlRow   = this.DS_PR_LIST.rowposition;
        			var empNo    = dsEmpNo.getColumn(0, "EMPNO");
        			var empNm    = dsEmpNo.getColumn(0, "EMPNM");
        			
        			//선택된 사원일 때 중복체크
        			nRowFind = this.DS_PR_LIST.findRowExpr("CNDCY_MAN_EMPNO1 == '"+empNo+"' || CNDCY_MAN_EMPNO2 =='"+empNo+"' || CNDCY_MAN_EMPNO3 == '"+empNo+"'");
        			if(nRowFind != -1){
        				this.gfn_message("info.처리불가", "이미 선택된 사원입니다.");
        				return false;
        			}
        			
        			switch (sPopupId.substr(8,1)) {			
        				case "5": // 1순위
        					this.DS_PR_LIST.setColumn(pwlRow, "CNDCY_MAN_EMPNO1", empNo);
        					this.DS_PR_LIST.setColumn(pwlRow, "EMPNM1", empNm);				
        					break;
        					
        				case "7": // 2순위
        					this.DS_PR_LIST.setColumn(pwlRow, "CNDCY_MAN_EMPNO2", empNo);
        					this.DS_PR_LIST.setColumn(pwlRow, "EMPNM2", empNm);				
        					break;
        					
        				case "9": // 3순위
        					this.DS_PR_LIST.setColumn(pwlRow, "CNDCY_MAN_EMPNO3", empNo);
        					this.DS_PR_LIST.setColumn(pwlRow, "EMPNM3", empNm);				
        					break;				
        			}
        		}
        	}
        }

        //---------------------------------
        // save 직전 변환처리
        //---------------------------------
        this.fn_DsDummy = function ()
        {
        	this.DS_PR_LIST_C.clearData();	
        	
        	for ( var iRow = 0 ; iRow < this.DS_PR_LIST.rowcount ; iRow++ ){	
        	
        		for ( var i = 1 ; i <= 3 ; i++ )
        		{
        			var nRow = this.DS_PR_LIST_C.addRow();
        			var sColInfo = "CNDCY_MAN_EMPNO=CNDCY_MAN_EMPNO" + i.toString(); 
        			// Key Set
        			this.DS_PR_LIST_C.setColumn(nRow, "RECOMEND_RANK", i);				
        			// Key & Contents Set	
        			this.DS_PR_LIST_C.copyRow(nRow, this.DS_PR_LIST, iRow);						
        			this.DS_PR_LIST_C.copyRow(nRow, this.DS_PR_LIST, iRow, sColInfo );
        		}
        	}
        }

        //-------------------------------------------------------
        // KEY 검색조건 컴포넌트 초기값(현채차수) 부여
        //-------------------------------------------------------
        this.fn_setCurInfo = function(strComp)
        {
        	if (this.ds_curInfo.rowcount ==  1 ){
        		if (strComp == "stdrYear"){
        			var sCurStdrYear = this.ds_curInfo.getColumn(0,"STDR_YEAR");
        			this.div_SearchArea.spn_YEAR.set_value(sCurStdrYear);
        		}else if (strComp == "odrSe"){
        			var sCurOdrSe 	= this.ds_curInfo.getColumn(0,"ODR_SE");
        			this.div_SearchArea.cmb_ODR_SE.set_value(sCurOdrSe);
        		}else if(strComp == "closAt"){
        			closAtFlag = this.ds_curInfo.getColumn(0,"CLOS_AT");
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.HRM010404_oninit, this);
            this.addEventHandler("onload", this.HRM010404_onload, this);
            this.div_work.grdList.addEventHandler("onexpandup", this.div_work_grdList_onexpandup, this);

        };

        this.loadIncludeScript("HRM010404.xfdl");

       
    };
}
)();
