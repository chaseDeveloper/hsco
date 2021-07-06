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
                this.set_name("HRM010407");
                this.set_classname("");
                this.set_titletext("직무지원현황");
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

            obj = new Dataset("DS_DR_LIST", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STDR_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_DEPT_CODE1\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_DTY_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_MOTV1\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_DEPT_CODE2\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_DTY_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_MOTV2\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_DEPT_CODE3\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM3\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_DTY_NM3\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_MOTV3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"STDR_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sanc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MIS_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"I_DIV\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_VALUE\" type=\"STRING\" size=\"1000\"/><Column id=\"O_URL\" type=\"STRING\" size=\"256\"/><Column id=\"KEY\" type=\"STRING\" size=\"256\"/><Column id=\"I_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"REQEST_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj = new Div("div_work", "absolute", "0", "41", null, null, "28", "0", this);
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
            obj.set_text("직무지원 신청현황");
            obj.set_url("mis_hrm::HRM010407_T1.xfdl");
            this.div_work.tab_dtl.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.div_work.tab_dtl);
            obj.set_text("미신청자 현황");
            obj.set_url("mis_hrm::HRM010407_T2.xfdl");
            this.div_work.tab_dtl.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "18.98%", "32", null, "10", "61.47%", null, this);
            obj.set_taborder("38");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("blueviolet");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_opacity("50");
            this.addChild(obj.name, obj);

            obj = new Div("div_SearchArea", "absolute", "0%", "0", null, "33", "2.64%", null, this);
            obj.set_taborder("39");
            obj.set_cssclass("div_WFSA_Box");
            this.addChild(obj.name, obj);
            obj = new Static("sta_STDR_DE", "absolute", "15", "6", "61", "20", null, null, this.div_SearchArea);
            obj.set_taborder("4");
            obj.set_text("기준년도");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Spin("spn_YEAR", "absolute", "81", "5", "70", "22", null, null, this.div_SearchArea);
            obj.set_taborder("5");
            obj.set_value("1900");
            obj.set_max("2999");
            obj.set_min("1900");
            obj.set_readonly("true");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Static("sta_SE", "absolute", "166", "6", "40", "20", null, null, this.div_SearchArea);
            obj.set_taborder("6");
            obj.set_text("구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Combo("cmb_ODR_SE", "absolute", "211", "5", "119", "22", null, null, this.div_SearchArea);
            this.div_SearchArea.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_displaynulltext("-선택-");
            obj.set_innerdataset("@ds_odrSe");
            obj.style.set_background("#f0f0f0ff");
            obj.set_readonly("true");
            obj.set_index("-1");


            
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
            obj = new Layout("default", "", 1031, 33, this.div_SearchArea,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("39");
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
            		p.set_titletext("직무지원현황");

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

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "mis_hrm::HRM010407_T1.xfdl");
            this._addPreloadList("fdl", "mis_hrm::HRM010407_T2.xfdl");
        };
        
        // User Script
        this.addIncludeScript("HRM010407.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("HRM010407.xfdl", "mis_lib::misUtil.xjs");
        this.registerScript("HRM010407.xfdl", function() {
        /***********************************************************************
         * 화면ID   : HRM010407.xfdl
         * 화면명   : 직무지원현황
         * 화면설명 : 직무지원현황을 조회한다.
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

        

        /***********************************************************************
         * onInit / onLoad 영역
         ***********************************************************************/
        this.HRM010407_oninit = function(obj,e)
        {
        	// Form 초기화
        	this.fn_init_form();
        	// DataSet 초기화
        	this.fn_init_dataset();
        } 
         
        this.HRM010407_onload = function(obj,e)
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
        	this.fn_tab_search();
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
        		case "saveSanc":					// 전자결재
        			var misKey    = "HRM"
        			var iDiv      = "";
        			var title     = "";
        			var dataTitle = "";
        			var dataValue = "";
        			// 001 : 기본기안
        			iDiv      = "001"
        			title     = "직원별 희망부서 지원";
        			dataTitle = "직원별 희망부서 지원";
        			
        			this.ds_sanc.clearData();
        			var nRow = this.ds_sanc.addRow();
        			this.ds_sanc.setColumn(nRow, "MIS_KEY",    misKey     );
        			this.ds_sanc.setColumn(nRow, "I_DIV",      iDiv       );
        			this.ds_sanc.setColumn(nRow, "TITLE",      title      );
        			this.ds_sanc.setColumn(nRow, "DATA_TITLE", dataTitle  );
        			this.ds_sanc.setColumn(nRow, "DATA_VALUE", null  );
        			this.ds_sanc.setColumn(nRow, "DEPT_CD",    this.gfn_getDeptId() );
        			this.ds_sanc.setColumn(nRow, "EMP_CD",     this.fn_getEmpno() );
        			
        			var sController   	= "hsco/mis/hrm/HRM010407T01/saveSanc.do";
        			var sInDatasets   	= "input1=ds_sanc";
        			var sOutDatasets  	= "ds_sanc=output1";
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

        	if (nErrorCode == 0){
        		switch (strSvcId) {
        			case "saveSanc":
        				var oUrl = this.ds_sanc.getColumn(0,"O_URL");
        				system.execBrowser(oUrl);
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

        /***************************************************************
         * 탭 변경시
        *******************************************************************/
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

        /*
         * 함수명  	: fn_sanction
         * 설명 		: 결재 버튼 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_sanction();
         */
        this.fn_sanction = function(obj,e)
        {
        	this.fn_transaction("saveSanc");
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.HRM010407_oninit, this);
            this.addEventHandler("onload", this.HRM010407_onload, this);
            this.div_work.tab_dtl.addEventHandler("onchanged", this.div_work_tab_dtl_onchanged, this);

        };

        this.loadIncludeScript("HRM010407.xfdl");
        this.loadPreloadList();
       
    };
}
)();
