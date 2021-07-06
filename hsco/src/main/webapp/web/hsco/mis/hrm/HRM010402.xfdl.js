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
                this.set_name("HRM010402");
                this.set_classname("");
                this.set_titletext("부서장추천 등록");
                this._setFormPosition(0,0,1059,735);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("DS_GRP_SE", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">1</Col><Col id=\"CD_NM\">정원</Col></Row><Row><Col id=\"CD\">2</Col><Col id=\"CD_NM\">현원</Col></Row><Row><Col id=\"CD\">3</Col><Col id=\"CD_NM\">결원</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_DR_LIST", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STDR_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"3\"/><Column id=\"RECOMEND_MAN_EMPNO\" type=\"STRING\" size=\"8\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNDCY_MAN_EMPNO\" type=\"STRING\" size=\"8\"/><Column id=\"C_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DCSN_AT\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"STDR_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RECOMEND_MAN_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">DEPT_CODE</Col><Col id=\"compId\">DS_DR_LIST</Col><Col id=\"msgId\">추천부서</Col><Col id=\"notNull\">Y</Col><Col id=\"PK\">Y</Col></Row><Row><Col id=\"colId\">CNDCY_MAN_EMPNO</Col><Col id=\"msgId\">후보자</Col><Col id=\"compId\">DS_DR_LIST</Col><Col id=\"notNull\">Y</Col></Row></Rows>");
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

            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_work", "absolute", "0", "68", null, null, "28", "0", this);
            obj.set_taborder("37");
            obj.style.set_background("#00000000");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "0", null, null, "0", "7", this.div_work);
            obj.set_taborder("0");
            obj.set_binddataset("DS_DR_LIST");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"54\" band=\"left\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" colspan=\"2\" text=\"추천부서\"/><Cell col=\"3\" colspan=\"2\" text=\"후보자\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:DEPT_CODE\" expandshow=\"hide\" expandsize=\"25\"/><Cell col=\"2\" displaytype=\"normal\" style=\"align:left;padding:0 0 0 5;\" text=\"bind:DEPT_NM\" expandshow=\"hide\"/><Cell col=\"3\" text=\"bind:CNDCY_MAN_EMPNO\" expandshow=\"show\" expandsize=\"25\"/><Cell col=\"4\" style=\"align:left;padding:0 0 0 5;\" text=\"bind:C_EMPNM\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_SearchArea", "absolute", "0", "0", null, "33", "28", null, this);
            obj.set_taborder("29");
            obj.set_cssclass("div_WFSA_Box");
            this.addChild(obj.name, obj);
            obj = new Static("sta_STDR_DE", "absolute", "15", "6", "61", "20", null, null, this.div_SearchArea);
            obj.set_taborder("11");
            obj.set_text("기준년도");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Spin("spn_YEAR", "absolute", "81", "5", "67", "22", null, null, this.div_SearchArea);
            obj.set_taborder("0");
            obj.set_max("2999");
            obj.set_increment("1");
            obj.set_min("1900");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Static("sta_SE", "absolute", "165", "6", "40", "20", null, null, this.div_SearchArea);
            obj.set_taborder("13");
            obj.set_text("구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Combo("cmb_ODR_SE", "absolute", "210", "5", "118", "22", null, null, this.div_SearchArea);
            this.div_SearchArea.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_displaynulltext("-선택-");
            obj.set_readonly("true");
            obj.style.set_background("#f0f0f0ff");
            obj.set_innerdataset("@ds_odrSe");
            obj.set_index("-1");
            obj = new Static("sta_STDR_DE00", "absolute", null, "6", "50", "20", "248", null, this.div_SearchArea);
            obj.set_taborder("15");
            obj.set_text("추천자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Edit("edt_RECOMEND_MANNO", "absolute", null, "5", "80", "22", "163", null, this.div_SearchArea);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Edit("edt_RECOMEND_MANNM", "absolute", null, "5", "143", "22", "15", null, this.div_SearchArea);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
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
            obj.set_text("부서장 추천내역");
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
            obj = new Layout("default", "", 0, 33, this.div_SearchArea,
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
            		p.set_titletext("부서장추천 등록");

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
            obj = new BindItem("item30","div_SearchArea.spn_YEAR","value","DS_COND","STDR_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","div_SearchArea.cmb_ODR_SE","value","DS_COND","ODR_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","div_SearchArea.edt_RECOMEND_MANNO","value","DS_COND","RECOMEND_MAN_EMPNO");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HRM010402.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("HRM010402.xfdl", "mis_lib::misUtil.xjs");
        this.registerScript("HRM010402.xfdl", function() {
        /***********************************************************************
         * 화면ID   : HRM010402.xfdl
         * 화면명   : 부서장추천 등록
         * 화면설명 : 직원(부서장지원 가능자 제외)이 부서장을 추천등록한다.
         * 작성일   : 2015.06.24
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
        var sFlag = "";
        var closAtFlag = "";	//마감구분 플래그

        
        /***********************************************************************
         * Form Function
         ************************************************************************/

        

        /***********************************************************************
         * onInit / onLoad 영역
         ***********************************************************************/
        this.HRM010402_oninit = function(obj,e)
        {
        	// Form 초기화
        	this.fn_init_form();
        	// DataSet 초기화
        	this.fn_init_dataset();
        } 
         
        this.HRM010402_onload = function(obj,e)
        {	
        	// 차수 Combo에 사용되는 Dataset Load
        	this.fn_loadCombo();

        	// 검색조건 컴포넌트 초기값 부여(현재 적용된 차수 정보)
        	this.fn_init_current();
        	
        	//접속자 인사정보
        	this.fn_search_userInfo();
        	
        	this.div_SearchArea.edt_RECOMEND_MANNO.set_value(this.fn_getEmpno());    // 
        	this.div_SearchArea.edt_RECOMEND_MANNM.set_value(this.fn_getEmpnm());  // 현.접속자 성명
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
        	// 조건에 사용되는 Dataset 초기화
        	this.gfn_initCondDs(this, this.div_search);
        }

        /*
         * 함수명  	: init_current
         * 설명 		: Get Current 평가차수
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_init_current();
         */
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
            this.gfn_loadCodeComboWithDs(this, "", this.ds_odrSe, "HRM223", "", "Y", " ", "N", "fn_callbackAfterLoad");    
        }

        //----------------------------------------- 
        // 공통 Callback 함수에서 호출할 함수 
        //-----------------------------------------  
        this.fn_callbackAfterLoad = function ()
        {
        	this.fn_search();
        }

        /*
         * 함수명  	: fn_search_userInfo
         * 설명 		: 현재 접속한 사용자의 인사정보
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_search_userInfo();
         */
        this.fn_search_userInfo = function()
        {
        	this.DS_COND.setColumn(0, "EMPNO", this.fn_getEmpno());	//접속자정보 확인용 파라메터
        	this.ds_userInfo.clearData();
        	this.fn_transaction("selectUserInfo");
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
        this.fn_search= function()
        {	
        	// 초기화
        	this.DS_DR_LIST.clearData();
        	this.fn_transaction("mainSearchList");
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
        	//공모마감 체크
        	if(closAtFlag==true){
        		alert("현재 차수의 공모가 마감되었습니다.");
        		return false;
        	}
        	// validation 체크
        	if(!this.gfn_checkValidation(this.DS_DR_LIST, this.ds_validation)) {
        		return;
        	}
        	
        	if(this.gfn_message("confirm.저장.여부"))	{
        		nRowPos = this.DS_DR_LIST.rowposition;
        		this.fn_transaction("mainCUD");
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
        		case "mainSearchList": // List 불러오기
        			var sController   	= "hsco/mis/hrm/HRM010402/mainSearchList.do";
        	        var sInDatasets   	= "input1=DS_COND";
        			var sOutDatasets  	= "DS_DR_LIST=output1";
        			break;
        		
        		case "selectDept":	//신규 추가시 부서명 조회
        			var sController   	= "hsco/mis/hrm/HRM010402/selectDept.do";
        	        var sInDatasets   	= "";		
        			var sOutDatasets  	= "ds_dept=output1";
        			break;
        			
        		case "mainCUD": // 신규,수정  
        			var sController   	= "hsco/mis/hrm/HRM010402/mainCUD.do";
        	        var sInDatasets   	= "input1=DS_DR_LIST:U";		
        			var sOutDatasets  	= "";
        			break;
        		
        		case "selectUserInfo": // 접속자 정보 조회
        			var sController   	= "hsco/mis/hrm/HRMCommon/selectUserInfo.do";
        	        var sInDatasets   	= "input1=DS_COND";
        			var sOutDatasets  	= "ds_userInfo=output1";
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
        			case "mainSearchList": // ListInfo 불러오기
        				break;
        						
        			case "mainCUD": // 신규,수정, 삭제
        			    this.fn_search();
        				break;
        			
        			case "selectDept":	//신규 추가 부서조회
        				this.fn_deptInsert();
        				break;
        				
        			case "selectUserInfo": // 접속자 정보 조회
        				this.fn_authChk();
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

        //----------
        // 신규
        //----------
        this.fn_insert = function()
        {
        	//공모마감 체크
        	if(closAtFlag==true){
        		this.gfn_message("info.처리불가", "현재 차수의 공모가 마감되었습니다.");
        		return false;
        	}
        	
        	//기존 부서정보가 존재할 때 신규생성 방지
        	if(this.DS_DR_LIST.rowcount > 1){
        		this.gfn_message("info.처리불가", "추천 부서 정보가 존재합니다.");
        		return false;
        		
        		// 사용중인 부서외에 추가건 입력해야 되는 경우 신규ROW 추가 할 수 있음. 
        		// 신규 추가조건 체크	
        		// 마지막 위치에 Row추가	
        		// 	var nRow = this.DS_DR_LIST.addRow();
        		// 	// KEY SET
        		// 	this.DS_DR_LIST.setColumn(nRow, "STDR_YEAR", this.ds_curInfo.getColumn(0,"STDR_YEAR"));
        		// 	this.DS_DR_LIST.setColumn(nRow, "ODR_SE", this.ds_curInfo.getColumn(0,"ODR_SE"));	
        		// 	this.DS_DR_LIST.setColumn(nRow, "RECOMEND_MAN_EMPNO", this.DS_COND.getColumn(0,"RECOMEND_MAN_EMPNO"));	
        	}else{
        		//사용중인 부서 목록 생성
        		this.ds_dept.clearData();
        		this.fn_transaction("selectDept");
        	}
        }

        //---------------------------------
        // 조회한 부서 그리드에 생성
        //---------------------------------
        this.fn_deptInsert = function(){
        	var deptCnt = this.ds_dept.rowcount;
        	
        	for (var i = 0; i < deptCnt; i++){
        		var nRow = this.DS_DR_LIST.addRow();
        		this.DS_DR_LIST.setColumn(nRow, "STDR_YEAR", this.ds_curInfo.getColumn(0,"STDR_YEAR"));
        		this.DS_DR_LIST.setColumn(nRow, "ODR_SE", this.ds_curInfo.getColumn(0,"ODR_SE"));	
        		this.DS_DR_LIST.setColumn(nRow, "RECOMEND_MAN_EMPNO", this.DS_COND.getColumn(0,"RECOMEND_MAN_EMPNO"));	
        		this.DS_DR_LIST.setColumn(nRow, "DEPT_CODE", this.ds_dept.getColumn(nRow,"DEPT_CODE"));
        		this.DS_DR_LIST.setColumn(nRow, "DEPT_NM", this.ds_dept.getColumn(nRow,"DEPT_NM"));
        	}
        }

        //---------
        // 삭제
        //---------
        this.fn_delete= function()
        {
        	//공모마감 체크
        	if(closAtFlag==true){
        		alert("현재 차수의 공모가 마감되었습니다.");
        		return false;
        	}
        	var nCurRow  = this.DS_DR_LIST.rowposition;
        	this.DS_DR_LIST.deleteRow(nCurRow);
        }

        //---------
        // 취소
        //---------
        this.fn_cancel = function ()
        {
        	this.DS_DR_LIST.reset();			//DATASET ROLLBACK
        	this.DS_DR_LIST.applyChange();		//ROWTYPE_NORMAL("normal")
        	return;	
        }

        
        /***********************************************************************************
        * User Function
        ***********************************************************************************/
        this.div_work_grdList_onexpandup = function(obj,e)
        {
        	if(e.cell == '1') {
        		var nLeft = system.clientToScreenX(this, 10);
        		var nTop  = system.clientToScreenY(this, 10);

        		var newChild = new ChildFrame;
        		var sPopupId = "DeptPop";			

        		newChild.init( sPopupId
        					, "absolute", nLeft, nTop, 400, 400, null, null
        					, "com::deptCode_P01.xfdl");

        		newChild.set_openalign("center middle");
        		newChild.set_dragmovetype("all");  

        		newChild.showModal(this.getOwnerFrame()
        					 , {}
        					 , this
        					 , "fn_PopupCallback");
        					 
        	} else if (e.cell == '3') {
        		// 부서장추천대상자(후보자) 조회 팝업호출
        		var parm = {
        			arg_0 : this,	//==> 필수, 팝업을 호출하는 form을 참조할 수 있도록 팝업에 Argument로 넘겨준다. (반드시 기술해야 함.)
        			arg_1 : null, 
        			arg_2 : null,
        			arg_3 : null			
        		};
        		this.gfn_popup("EmpnoPop", 400, 400, "부서장 추천", parm, "mis_hrm::HRM010402_P01.xfdl", "fn_PopupCallback", true);	
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
        	if(sPopupId == "DeptPop") {
        		var dsDeptCode = new Dataset();
                var loadCnt = dsDeptCode.loadXML(sReturn);
                if(loadCnt) {
        			var fpdRow = this.DS_DR_LIST.rowposition;
        			var deptCode = dsDeptCode.getColumn(0, "DEPT_CODE");
        			var deptNm   = dsDeptCode.getColumn(0, "DEPT_NM");
        			
        			var findRow = this.DS_DR_LIST.findRow("DEPT_CODE", deptCode);
        			if(findRow > -1) {
        				this.gfn_message("info.항목.중복", "부서코드(" + deptCode + ")");
        				return false;
        			}
        			
        			this.DS_DR_LIST.setColumn(fpdRow, "DEPT_CODE", deptCode);
        			this.DS_DR_LIST.setColumn(fpdRow, "DEPT_NM", deptNm  );
                }
        	}else if (sPopupId == "EmpnoPop") {
        		var dsEmpNo = new Dataset();
        		var loadCnt = dsEmpNo.loadXML(sReturn);
        		if(loadCnt) {
        			var pwlRow   = this.DS_DR_LIST.rowposition;
        			var empNo    = dsEmpNo.getColumn(0, "EMPNO");
        			var empNm    = dsEmpNo.getColumn(0, "EMPNM");
        			this.DS_DR_LIST.setColumn(pwlRow, "CNDCY_MAN_EMPNO", empNo);
        			this.DS_DR_LIST.setColumn(pwlRow, "C_EMPNM", empNm);
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

        /**********************************************************************
         * 접속자 정보 권한 체크 (해당 직원은 접근 불가능하도록 처리)
         * 직종 : 업무직, 기술직
         * 인사직급 : 1~2급 직원
        **********************************************************************/
        this.fn_authChk = function(){
        	var jssfcSe = this.ds_userInfo.getColumn(0, "JSSFC_SE");	//직종
        	var hrclsfSe = this.ds_userInfo.getColumn(0, "HR_CLSF_SE");	//직급

        	if((jssfcSe=='001' || jssfcSe=='002')
        	 &&(hrclsfSe=='01' || hrclsfSe=='02'))
        	{
        		this.gfn_message("err.메뉴.권한없음", "해당메뉴에 대한 권한이 없습니다.", "", "", "closeForm");
        	}else{
        		return;
        	}
        }

        //권한체크 callBack 현재창 종료
        this.closeForm = function (){
        	this.parent.parent.close();
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.HRM010402_onload, this);
            this.addEventHandler("oninit", this.HRM010402_oninit, this);
            this.div_work.grdList.addEventHandler("onexpandup", this.div_work_grdList_onexpandup, this);

        };

        this.loadIncludeScript("HRM010402.xfdl");

       
    };
}
)();
