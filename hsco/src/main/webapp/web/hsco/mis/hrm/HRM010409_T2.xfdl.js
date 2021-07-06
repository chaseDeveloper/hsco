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
                this.set_name("HRM010409_T2");
                this.set_classname("");
                this.set_titletext("미추천자 현황");
                this._setFormPosition(0,0,1059,735);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("DS_NO_LIST", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STDR_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE1\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_clsfSe", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_work", "absolute", "1", "1", null, null, "1", "1", this);
            obj.set_taborder("37");
            obj.style.set_background("#00000000");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Grid("grdList", "absolute", "0", "5", null, null, "0", "0", this.div_work);
            obj.set_taborder("0");
            obj.set_binddataset("DS_NO_LIST");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"93\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"93\"/><Column size=\"180\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" colspan=\"2\" text=\"소속\"/><Cell col=\"3\" rowspan=\"2\" text=\"직급\"/><Cell col=\"4\" colspan=\"2\" text=\"미추천자\"/><Cell col=\"6\" colspan=\"2\" text=\"추천부서\"/><Cell row=\"1\" col=\"1\" text=\"부서코드\"/><Cell row=\"1\" col=\"2\" text=\"부서명\"/><Cell row=\"1\" col=\"4\" text=\"사번\"/><Cell row=\"1\" col=\"5\" text=\"성명\"/><Cell row=\"1\" col=\"6\" text=\"부서코드\"/><Cell row=\"1\" col=\"7\" text=\"부서명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:DEPT_CODE\"/><Cell col=\"2\" text=\"bind:DEPT_NM\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:HR_CLSF_SE\" combodataset=\"ds_clsfSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" text=\"bind:EMPNO\"/><Cell col=\"5\" text=\"bind:EMPNM\"/><Cell col=\"6\" edittype=\"text\" text=\"bind:DEPT_CODE1\" expandshow=\"show\" expandsize=\"25\"/><Cell col=\"7\" text=\"bind:DEPT_NM1\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);


            
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
            obj = new Layout("default", "", 1059, 735, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("미추천자 현황");

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

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HRM010409_T2.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("HRM010409_T2.xfdl", "mis_lib::misUtil.xjs");
        this.registerScript("HRM010409_T2.xfdl", function() {
        /***********************************************************************
         * 화면ID   : HRM010409_T2.xfdl
         * 화면명   : 직무추천 미추천자 현황
         * 화면설명 : 
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
        this.HRM010409_T2_oninit = function(obj,e)
        {
        	// Form 초기화
        	this.fn_init_form();
        	// DataSet 초기화
        	this.fn_init_dataset();
        } 
         
        this.HRM010409_T2_onload = function(obj,e)
        {
        	// Combo에 사용되는 Dataset Load
        	this.fn_loadCombo();
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
        	this.gfn_initForm(this); this.fn_misFormInit(this);	 
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

        //-----------------------------------------------------
        // 화면의 Combo 에 데이터를 불러온다. (공통코드)
        //-----------------------------------------------------
         this.fn_loadCombo = function ()
        {   
        	var comboParams = [
        		["ds_clsfSe", 		"HRM237", "1", ""] 	// 인사직급구분
        	];
        	this.gfn_comboLoad(comboParams, this.fn_callbackAfterLoad);		
        }

        //----------------------------------------- 
        // 공통 Callback 함수에서 호출할 함수 
        //-----------------------------------------  
        this.fn_callbackAfterLoad = function ()
        {
        	// ..
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
        	this.DS_NO_LIST.clearData();
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
        	if( Ex.util.isUpdated(this.DS_NO_LIST) ){	
        		if(this.gfn_message("confirm.저장.여부"))	{
        		    nRowPos = this.DS_NO_LIST.rowposition;
        			this.fn_transaction("mainCUD");
        		}	
        	}else{
        		return;
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
        			var sController   	= "hsco/mis/hrm/HRM010409T02/mainSearchList.do";
        	        var sInDatasets   	= "input1=DS_COND";
        			var sOutDatasets  	= "DS_NO_LIST=output1";
        			break;
        			
        		case "mainCUD": // 신규,수정  
        			var sController   	= "hsco/mis/hrm/HRM010409T02/mainCUD.do";
        	        var sInDatasets   	= "input1=DS_NO_LIST:U";		
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
        			case "mainSearchList": // ListInfo 불러오기
        				break;
        						
        			case "mainCUD": // 신규,수정, 삭제
        			    this.fn_search();
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

        
        /***********************************************************************
        * 사용자 정의 함수
        ************************************************************************/
        //---------------------------------
        // tab별 Parent condition set
        //---------------------------------
        this.fn_tab_cond = function(sArgs)
        {
        	var paramsArr = new Array();

        	for(var i in sArgs){	
        		paramsArr[i] = sArgs[i];
        	}

        	this.DS_COND.clearData();
        	this.DS_COND.addRow();
        	this.DS_COND.setColumn(0,"STDR_YEAR",paramsArr[0]);
        	this.DS_COND.setColumn(0,"ODR_SE",paramsArr[1]);
        }

        //-----------------------------------
        // 부서검색(GRID EXPAND) -예정부서
        //-----------------------------------
        this.div_work_grdList_onexpandup = function(obj,e)
        {
        	if(e.cell == '6') {
        	
        		var parm = {
        			 arg_0      : this
        			,deptCode   : ""
        			,deptNm     : ""
        			,preAt      : "1"  //add. 예정부서 : 1 일반시행부서 : 0
        		};
        		this.gfn_popup("DeptPop", 400, 400, "부서선택", parm, "com::deptCode_P01.xfdl", "fn_popupCallBack", true);		
        	
        	
        // 		var nLeft = system.clientToScreenX(this, 10);
        // 		var nTop  = system.clientToScreenY(this, 10);
        // 
        // 		var newChild = new ChildFrame;
        // 		newChild.init("DeptPop"
        // 					, "absolute", nLeft, nTop, 400, 400, null, null
        // 					, "com::deptCode_P01.xfdl");
        // 
        // 		newChild.set_openalign("center middle");
        // 		newChild.set_dragmovetype("all");  
        // 
        // 		newChild.showModal(this.getOwnerFrame()
        // 					 , {}
        // 					 , this
        // 					 , "fn_PopupCallback");
        	}
        	
        }

        /***********************************************************************************
        * User Function
        ***********************************************************************************/
        /*
         * 함수명  	: fn_PopupCallback
         * 설명 		: Popup Call 이후 처리
         * params  		: None
         * return Type 	: None
         * 사용법		:       ;
         */
        this.fn_popupCallBack = function(sPopupId,sReturn)
        {
        	if(sPopupId == "DeptPop") {
        		var dsDeptCode = new Dataset();
                var loadCnt = dsDeptCode.loadXML(sReturn);
                if(loadCnt) {
        			var fpdRow = this.DS_NO_LIST.rowposition;
        			var deptCode = dsDeptCode.getColumn(0, "DEPT_CODE");
        			var deptNm   = dsDeptCode.getColumn(0, "DEPT_NM");
        			this.DS_NO_LIST.setColumn(fpdRow, "DEPT_CODE1", deptCode);
        			this.DS_NO_LIST.setColumn(fpdRow, "DEPT_NM1", deptNm  );
        		}	
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.HRM010409_T2_oninit, this);
            this.addEventHandler("onload", this.HRM010409_T2_onload, this);
            this.div_work.grdList.addEventHandler("onexpandup", this.div_work_grdList_onexpandup, this);

        };

        this.loadIncludeScript("HRM010409_T2.xfdl");

       
    };
}
)();
