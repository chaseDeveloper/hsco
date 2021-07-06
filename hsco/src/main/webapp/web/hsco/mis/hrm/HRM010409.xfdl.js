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
                this.set_name("HRM010409");
                this.set_classname("");
                this.set_titletext("직무추천 집계");
                this._setFormPosition(0,0,1059,735);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("DS_COND", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STDR_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_DEPT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_DEPTLIST", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj = new Div("div_work", "absolute", "0", "42", null, null, "28", "0", this);
            obj.set_taborder("37");
            obj.style.set_background("#00000000");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Tab("tab_dtl", "absolute", "0", "0", null, null, "0", "0", this.div_work);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.style.set_showextrabutton("false");
            obj.set_preload("true");
            this.div_work.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.div_work.tab_dtl);
            obj.set_text("직무추천집계");
            obj.set_url("mis_hrm::HRM010409_T1.xfdl");
            this.div_work.tab_dtl.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.div_work.tab_dtl);
            obj.set_text("미추천자현황 및 재추천");
            obj.set_url("mis_hrm::HRM010409_T2.xfdl");
            this.div_work.tab_dtl.addChild(obj.name, obj);

            obj = new Div("div_SearchArea", "absolute", "0", "0", null, "33", "28", null, this);
            obj.set_taborder("29");
            obj.set_cssclass("div_WFSA_Box");
            this.addChild(obj.name, obj);
            obj = new Static("sta_STDR_DE", "absolute", "15", "5", "65", "20", null, null, this.div_SearchArea);
            obj.set_taborder("1");
            obj.set_text("기준년도");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Spin("spn_YEAR", "absolute", "85", "5", "69", "22", null, null, this.div_SearchArea);
            obj.set_taborder("0");
            obj.set_max("2999");
            obj.set_increment("1");
            obj.set_min("1900");
            obj.set_value("1900");
            obj.set_readonly("true");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Static("sta_SE", "absolute", "169", "5", "40", "20", null, null, this.div_SearchArea);
            obj.set_taborder("4");
            obj.set_text("구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Combo("cmb_ODR_SE", "absolute", "214", "5", "116", "22", null, null, this.div_SearchArea);
            this.div_SearchArea.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_displaynulltext("-선택-");
            obj.set_readonly("true");
            obj.style.set_background("#f0f0f0ff");
            obj.set_innerdataset("@ds_odrSe");
            obj = new Static("sta_SE00", "absolute", "345", "5", "40", "20", null, null, this.div_SearchArea);
            obj.set_taborder("5");
            obj.set_text("부서");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new CheckBox("chkAll", "absolute", "546", "5", "59", "20", null, null, this.div_SearchArea);
            obj.set_taborder("3");
            obj.set_text("전체");
            obj.style.set_font("bold 9 Dotum");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Combo("cmb_deptList", "absolute", "390", "5", "151", "21", null, null, this.div_SearchArea);
            this.div_SearchArea.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_innerdataset("@DS_DEPTLIST");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_readonly("true");

            obj = new Static("Static02", "absolute", "18.98%", "32", null, "10", "61.47%", null, this);
            obj.set_taborder("38");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("blueviolet");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_opacity("50");
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
            		p.set_titletext("직무추천 집계");

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
            obj = new BindItem("item24","div_SearchArea.spn_YEAR","value","DS_COND","STDR_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","div_SearchArea.cmb_ODR_SE","value","DS_COND","ODR_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","div_SearchArea.cmb_deptList","value","DS_COND","SPORT_DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "mis_hrm::HRM010409_T1.xfdl");
            this._addPreloadList("fdl", "mis_hrm::HRM010409_T2.xfdl");
        };
        
        // User Script
        this.addIncludeScript("HRM010409.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("HRM010409.xfdl", "mis_lib::misUtil.xjs");
        this.registerScript("HRM010409.xfdl", function() {
        /***********************************************************************
         * 화면ID   : HRM010409.xfdl
         * 화면명   : 직무추천집계
         * 화면설명 : 부서장 추천 지원자현황을 집계하여 조회한다.
         * 작성일   : 2015.07.01
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
        var closAtFlag = "";	//마감구분 플래그

        
        /***********************************************************************
         * onInit / onLoad 영역
         ***********************************************************************/
        this.HRM010409_oninit = function(obj,e)
        {
        	// Form 초기화
        	this.fn_init_form();
        	// DataSet 초기화
        	this.fn_init_dataset();
        } 
         
        this.HRM010409_onload = function(obj,e)
        {
        	// Combo에 사용되는 Dataset Load(차수콤보)
        	this.fn_loadCombo();
        	
        	// 검색조건 컴포넌트 초기값 부여(현재적용 년도/차수)
        	this.fn_init_current();	
        	
        // 	this.div_SearchArea.edt_DEPT_CODE.set_value(this.gfn_getDeptId()); // 현.접속자 부서코드	
        // 	this.div_SearchArea.edt_DEPT_NM.set_value(this.gfn_getDeptName()); // 현.접속자 부서명
        	
        	// Combo에 사용되는 개별 Dataset Load
            this.fn_loadComboNonCodeTbl();
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
            this.gfn_loadCodeComboWithDs(this, "", this.ds_odrSe, "HRM223", "", "Y", " ", "N", "fn_callbackAfterLoad");    
        }

        //----------------------------------------- 
        // 공통 Callback 함수에서 호출할 함수 
        //-----------------------------------------  
        this.fn_callbackAfterLoad = function ()
        {
        	this.fn_search();
        }

        //--------------------------------------------------------
        // 화면의 Combo 에 데이터를 불러온다. (Non-공통코드)
        //--------------------------------------------------------
        this.fn_loadComboNonCodeTbl = function (strDs,obj)
        {
        	var comboParams = [
        			["DS_DEPTLIST", 	"DS_COND", "", "", "hsco/mis/hrm/HRMCommon/selectSportDeptList.do", 0]
        		];

        	this.gfn_comboLoadNonCodeTbl(comboParams, this.fn_callbackAfter, strDs, obj);
        }

        /*
         * 함수명  	: fn_callbackAfter
         * 설명 		: combo에 대한 callback 함수 이후에 처리되어야 할 코딩 기술
         * params  		: svcId - Transaction Service ID.
         *				  ※ 반드시, 데이터를 담아 올 dataset명(예 : "ds_comCode03")을 사용해야 한다.
         * return Type 	: None
         * 사용법		: this.fn_init_dataset();
         * ※ 함수의 특성상, comboParams의 개수만큼 호출되므로, svcId로 분기하여 처리해야 한다.
         */
        this.fn_callbackAfter = function (svcId)
        {
        	switch (svcId) {
        		case "DS_DEPTLIST" :
        			this.fn_search();
        			break;	
        	}
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
        	// Tab 조회
        	this.fn_tab_search();
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
        	this.fn_tab_save();
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

        
        /***********************************************************************************
        * User Function
        ***********************************************************************************/

        //-------------------------------------------
        // Tab 선택 변경
        //-------------------------------------------
        this.div_work_tab_dtl_onchanged = function(obj,e)
        {
        	this.fn_tab_search();
        }

        /*
         * 함수명  	: fn_tab_search
         * 설명 		: 각 탭별 조회 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_tab_search();
         */
        this.fn_tab_search = function()
        {
        	var sParams = new Array();
        	sParams[0] = this.DS_COND.getColumn(0,"STDR_YEAR");
        	sParams[1] = this.DS_COND.getColumn(0,"ODR_SE");
        	sParams[2] = this.DS_COND.getColumn(0,"SPORT_DEPT_CODE");
        	sParams[3] = this.div_SearchArea.chkAll.value;
        	
        	if(this.div_work.tab_dtl.tabindex == 0){
        		this.div_work.tab_dtl.tabpage1.fn_tab_cond(sParams);
        		this.div_work.tab_dtl.tabpage1.fn_search();
        	}else if(this.div_work.tab_dtl.tabindex == 1){	
        		this.div_work.tab_dtl.tabpage2.fn_tab_cond(sParams);
        		this.div_work.tab_dtl.tabpage2.fn_search();
        	}else{
        		return;
        	}
        }

        
        /*
         * 함수명  	: fn_save
         * 설명 		: 각 탭별 저장 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_save();
         */
        this.fn_tab_save = function()
        {   
        	if(this.div_work.tab_dtl.tabindex == 0){
        		//this.div_work.tab_dtl.tabpage1.fn_save();
        		
        	}else if(this.div_work.tab_dtl.tabindex == 1){
        		this.div_work.tab_dtl.tabpage2.fn_save();
        		
        	}
        }

        
        this.div_SearchArea_spn_YEAR_ontextchange = function(obj,e)
        {
        	this.DS_COND.setColumn(0, "STDR_YEAR", e.posttext);
        	this.fn_loadComboNonCodeTbl();		
        }
        this.div_SearchArea_cmb_ODR_SE_onitemchanged = function(obj,e)
        {
        	this.DS_COND.setColumn(0, "ODR_SE", e.postvalue);
        	this.fn_loadComboNonCodeTbl();
        	
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
            this.addEventHandler("oninit", this.HRM010409_oninit, this);
            this.addEventHandler("onload", this.HRM010409_onload, this);
            this.div_work.tab_dtl.addEventHandler("onchanged", this.div_work_tab_dtl_onchanged, this);
            this.div_SearchArea.spn_YEAR.addEventHandler("ontextchange", this.div_SearchArea_spn_YEAR_ontextchange, this);
            this.div_SearchArea.cmb_ODR_SE.addEventHandler("onitemchanged", this.div_SearchArea_cmb_ODR_SE_onitemchanged, this);

        };

        this.loadIncludeScript("HRM010409.xfdl");
        this.loadPreloadList();
       
    };
}
)();
