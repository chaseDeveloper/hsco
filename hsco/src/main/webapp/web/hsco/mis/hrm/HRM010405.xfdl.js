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
                this.set_name("HRM010405");
                this.set_classname("");
                this.set_titletext("P/L추천현황");
                this._setFormPosition(0,0,1059,735);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
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
            obj._setContents("<ColumnInfo><Column id=\"STDR_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RECOMEND_MAN_EMPNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj = new Div("div_work", "absolute", "0", "67", null, null, "28", "0", this);
            obj.set_taborder("37");
            obj.style.set_background("#00000000");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0", "0", null, null, "0", "0", this.div_work);
            obj.set_taborder("0");
            obj.set_binddataset("DS_PR_LIST");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"174\"/><Column size=\"208\"/><Column size=\"195\"/><Column size=\"195\"/><Column size=\"195\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"소속\"/><Cell col=\"2\" colspan=\"3\" text=\"추천자\"/><Cell row=\"1\" text=\"부서명\"/><Cell row=\"1\" col=\"1\" text=\"파트명\"/><Cell row=\"1\" col=\"2\" text=\"1순위\"/><Cell row=\"1\" col=\"3\" text=\"2순위\"/><Cell row=\"1\" col=\"4\" text=\"3순위\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_NM\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"1\" text=\"bind:PART_NAME\"/><Cell col=\"2\" text=\"bind:EMPNM1\"/><Cell col=\"3\" text=\"bind:EMPNM2\"/><Cell col=\"4\" text=\"bind:EMPNM3\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_SearchArea", "absolute", "0", "0", null, "33", "28", null, this);
            obj.set_taborder("38");
            obj.set_cssclass("div_WFSA_Box");
            this.addChild(obj.name, obj);
            obj = new Static("sta_STDR_DE", "absolute", "15", "6", "62", "20", null, null, this.div_SearchArea);
            obj.set_taborder("0");
            obj.set_text("기준년도");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Spin("spn_YEAR", "absolute", "82", "5", "70", "22", null, null, this.div_SearchArea);
            obj.set_taborder("1");
            obj.set_max("2999");
            obj.set_min("1900");
            obj.set_readonly("true");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Static("sta_SE", "absolute", "167", "6", "40", "20", null, null, this.div_SearchArea);
            obj.set_taborder("3");
            obj.set_text("구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_SearchArea.addChild(obj.name, obj);
            obj = new Combo("cmb_ODR_SE", "absolute", "212", "5", "119", "22", null, null, this.div_SearchArea);
            this.div_SearchArea.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_displaynulltext("-선택-");
            obj.set_readonly("true");
            obj.style.set_background("#f0f0f0ff");
            obj.set_innerdataset("@ds_odrSe");
            obj.set_index("-1");

            obj = new Static("Static08", "absolute", "0%", "33", null, "10", "2.64%", null, this);
            obj.set_taborder("39");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0%", "43", null, "21", "79.98%", null, this);
            obj.set_taborder("40");
            obj.set_text("P/L 추천현황");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0%", "62", null, "5", "2.64%", null, this);
            obj.set_taborder("41");
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
            obj = new Layout("default", "", 1031, 33, this.div_SearchArea,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("38");
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
            		p.set_titletext("P/L추천현황");

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

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HRM010405.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("HRM010405.xfdl", "mis_lib::misUtil.xjs");
        this.registerScript("HRM010405.xfdl", function() {
        /***********************************************************************
        * 화면ID   : HRM010405.xfdl
        * 화면명   : P/L 추천현황
        * 화면설명 : 부서별 P/L 추천현황을 조회한다.
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

        

        /***********************************************************************
         * onInit / onLoad 영역
         ***********************************************************************/
        this.HRM010405_oninit = function(obj,e)
        {
        	// Form 초기화
        	this.fn_init_form();
        	// DataSet 초기화
        	this.fn_init_dataset();
        } 
         
        this.HRM010405_onload = function(obj,e)
        {
        	// Combo에 사용되는 Dataset Load
        	this.fn_loadCombo();
        	
        	// 검색조건 컴포넌트 초기값 부여(현재 적용된 차수 정보)
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
        this.fn_search= function()
        {	
        	// 초기화
        	this.DS_PR_LIST.clearData();
        	this.fn_transaction("mainSearchList");

        	//Ex.core.tran(this, sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
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
        			var sController   	= "hsco/mis/hrm/HRM010405/mainSearchList.do";
        	        var sInDatasets   	= "input1=DS_COND";
        			var sOutDatasets  	= "DS_PR_LIST=output1";
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

        /***********************************************************************************
        * User Function
        ***********************************************************************************/

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
            this.addEventHandler("onload", this.HRM010405_onload, this);
            this.addEventHandler("oninit", this.HRM010405_oninit, this);
            this.div_work.Grid00.addEventHandler("oncellclick", this.div_work_Grid00_oncellclick, this);

        };

        this.loadIncludeScript("HRM010405.xfdl");

       
    };
}
)();
