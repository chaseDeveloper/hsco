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
                this.set_name("BDG030504");
                this.set_classname("BDG030504");
                this.set_titletext("부서별 세출목별 조서");
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
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BUDGET_TYPE\" type=\"STRING\" size=\"1\"/><Column id=\"BUDGET_SE\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_bdg001", this);
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

            obj = new Dataset("ds_bdg002", this);
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

            obj = new Dataset("ds_acntStats", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"1\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"1\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"8\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"ACNT_LEVEL\" type=\"STRING\" size=\"1\"/><Column id=\"UPPER_ACNT_CODE\" type=\"STRING\" size=\"8\"/><Column id=\"BUDGET_TYPE\" type=\"STRING\" size=\"1\"/><Column id=\"BUDGET_SE\" type=\"STRING\" size=\"1\"/><Column id=\"BUDGET_AM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BPLC_01_AM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BPLC_02_AM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BPLC_03_AM\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_session", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "0", null, "33", "28", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Box");
            this.addChild(obj.name, obj);
            obj = new Static("sta_YEAR", "absolute", "15", "5", "64", "21", null, null, this.div_search);
            obj.set_taborder("1");
            obj.set_text("예산년도");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_BUDGET_SE", "absolute", "154", "5", "64", "21", null, null, this.div_search);
            obj.set_taborder("13");
            obj.set_text("예산구분");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_BUDGET_SE", "absolute", "218", "5", "80", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_innerdataset("ds_bdg003");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj = new Static("Static37", "absolute", "488", null, "38", "5", null, "0", this.div_search);
            obj.set_taborder("16");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#fa794f66");
            obj.style.set_align("center middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static36", "absolute", "488", "0", "38", "5", null, null, this.div_search);
            obj.set_taborder("15");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#fa794f66");
            obj.style.set_align("center middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "139", "5", "15", null, null, "5", this.div_search);
            obj.set_taborder("3");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "0", "5", "15", null, null, "5", this.div_search);
            obj.set_taborder("0");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Spin("spn_YEAR", "absolute", "79", "5", "60", "21", null, null, this.div_search);
            obj.set_taborder("2");
            obj.set_value("0");
            obj.style.set_buttonsize("15");
            obj.set_max("9999");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_bdgOutputStdrYear", "absolute", null, "5", "150", "21", "7", null, this.div_search);
            obj.set_taborder("17");
            obj.set_text("예산서 출력기준년도 설정");
            obj.set_cssclass("btn_WF_Process");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "33", null, "10", "28", null, this);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "1031", "0", "15", "735", null, null, this);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", null, "0", "13", "735", "0", null, this);
            obj.set_taborder("6");
            obj.set_text("스\r\n크\r\n롤\r\n13");
            obj.set_visible("false");
            obj.style.set_background("#d07b173c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("clipreport", "absolute", "0", "43", null, null, "28", "0", this);
            obj.set_taborder("8");
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
            		p.set_classname("BDG030504");
            		p.set_titletext("부서별 세출목별 조서");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item3","div_search.cbo_BUDGET_SE","value","ds_cond","BUDGET_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","div_search.spn_YEAR","value","ds_cond","YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("BDG030504.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("BDG030504.xfdl", "mis_lib::misUtil.xjs");
        this.registerScript("BDG030504.xfdl", function() {
        /**********************************************************************
        * 화면ID   : BDG030504.xfdl
        * 화면명   : 부서별 세출목별 조서
        * 화면설명 : 부서별 세출목별 조서를 조회한다.
        * 작성일   : 2017.04.26
        * 작성자   : 이수지
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

        

        /**********************************************************************
        * onInit / onLoad 영역
        ***********************************************************************/

        this.BDG030504_oninit = function(obj,e)
        {
        	// Form 초기화
        	this.fn_init_form();

        	// DataSet 초기화
        	this.fn_init_dataset();
        }

        this.BDG030504_onload = function(obj,e)
        {
        	// TODO..
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
        	
        	// 최초 검색조건에 대한 처리
        	this.ds_cond.clearData();
        	var nRow = this.ds_cond.addRow();
        	
         	this.ds_cond.setColumn(nRow, "BUDGET_TYPE", "1");	// (예산타입) 1:요구예산 2:편성예산 3:이월예산
         	
        	// 공통코드
        	var comboParams = [
        	    ["ds_bdg001", "BDG001", "Y", "D", "B"]	// ds_bdg001 : 사업구분
        	   ,["ds_bdg002", "BDG002", "Y", "D", "B"]	// ds_bdg002 : 수지구분
        	   ,["ds_bdg003", "BDG003", "Y", "D", "B"]	// ds_bdg003 : 예산구분
        	];
        	var callback = function (svcId, errorCode, errorMsg) {
        		// 공통코드와 연계된 초기검색조건 설정
        		this.ds_cond.setColumn(nRow, "BUDGET_SE", "0");		// (예산구분) 0:본예산, 1:추경1차, 2:추경2차, 3:추경3차, 4:추경4차
        		this.fn_searchBdgOutputStdrYear();	// 세션 기준년도 조회
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

        /***********************************************************************
        * 세션 기준년도 조회
        ************************************************************************/
        this.fn_searchBdgOutputStdrYear = function()
        {	
        	this.fn_transaction("selectBdgOutputStdrYear");
        }

        
        /*
         * 함수명  	: fn_search
         * 설명 		: 조회 이벤트 처리(계정별예산총계)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_search();
         */
        this.fn_search = function(obj,e)
        {
        	// clear Datasets
        	this.ds_acntStats.clearData();
        	
        	var year = this.ds_cond.getColumn(0, "YEAR");
        	
        	if(year == '2018') {
        		this.gfn_ReportOnWBControl(this, this.clipreport, "BDG/BDG030504_2018.crf", this.ds_cond);
        	}
        	else if(year == '2019') {
        		this.gfn_ReportOnWBControl(this, this.clipreport, "BDG/BDG030504_2019.crf", this.ds_cond);
        	}
        	else if(year == '2020'){
        		this.gfn_ReportOnWBControl(this, this.clipreport, "BDG/BDG030504_2020.crf", this.ds_cond);
        	}
        	else if(year >= '2021'){
        		this.gfn_ReportOnWBControl(this, this.clipreport, "BDG/BDG030504_2021.crf", this.ds_cond);
        	}
        	else {
        		this.gfn_ReportOnWBControl(this, this.clipreport, "BDG/BDG030504.crf", this.ds_cond);
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
        		case "selectBdgOutputStdrYear" :	// 기준년도 조회
        			var sController   	= "hsco/mis/bdg/BDG030501/selectBdgOutputStdrYear.do";
        			var sInDatasets   	= "";
        			var sOutDatasets  	= "ds_session=output1";
        			break;
        		case "saveBdgOutputStdrYear":		// 기준년도 저장
        			var sController   	= "hsco/mis/bdg/BDG030501/saveBdgOutputStdrYear.do";
        			var sInDatasets   	= "input1=ds_cond";
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
        	
        	if (nErrorCode == '0'){
        		switch (strSvcId) {
        			case "selectBdgOutputStdrYear":		// 기준년도 조회
        				var year = this.ds_session.getColumn(0, "YEAR");
        				if(!this.comUtils.isNullEmpty(year)){
        					this.ds_cond.setColumn(0, "YEAR", year);     //예산서 출력 기준년도
        				}else{
        					this.ds_cond.setColumn(0, "YEAR", this.comUtils.getClientDate("YYYY"));	// 당해년도
        				}
        				this.fn_search();
        				break;
        			case "saveBdgOutputStdrYear":		// 기준년도 저장
        				this.gfn_message("success.처리.성공"); 
        				break;
        		}
        	}
        }

        /**********************************************************************
        * Transaction 영역 끝
        ***********************************************************************/

        /**********************************************************************
        * Btuuton 관련 이벤트 핸들러 
        ***********************************************************************/

        //예산서출력기준년도 설정
        this.div_search_btn_bdgOutputStdrYear_onclick = function(obj,e)
        {	
        	if(this.gfn_message("comm.행위여부", "현재 설정된 예산년도를 예산출력기준년도로 설정합니다.\n진행"))	{
        		this.fn_transaction("saveBdgOutputStdrYear");
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_acntStats.addEventHandler("onrowposchanged", this.ds_executBudget_onrowposchanged, this);
            this.ds_acntStats.addEventHandler("canrowposchange", this.ds_executBudget_canrowposchange, this);
            this.addEventHandler("onload", this.BDG030504_onload, this);
            this.addEventHandler("oninit", this.BDG030504_oninit, this);
            this.div_search.btn_bdgOutputStdrYear.addEventHandler("onclick", this.div_search_btn_bdgOutputStdrYear_onclick, this);

        };

        this.loadIncludeScript("BDG030504.xfdl");

       
    };
}
)();
