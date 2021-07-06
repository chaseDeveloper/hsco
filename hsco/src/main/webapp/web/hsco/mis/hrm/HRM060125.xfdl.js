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
                this.set_name("HRM060125");
                this.set_classname("HRM060125");
                this.set_titletext("개인별직무수행태도");
                this._setFormPosition(0,0,1059,735);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cond", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"HT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dty_exc_dmrtr_stdr", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DMRTR_STDR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DMRTR_STDR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DMRTR_SCORE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"OUTPT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM_AT\" type=\"STRING\" size=\"256\"/><Column id=\"HT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dty_exc_atitd_dmrtr", this);
            obj._setContents("<ColumnInfo><Column id=\"EVL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"HT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DMRTR_001\" type=\"STRING\" size=\"256\"/><Column id=\"DMRTR_002\" type=\"STRING\" size=\"256\"/><Column id=\"DMRTR_003\" type=\"STRING\" size=\"256\"/><Column id=\"DMRTR_004\" type=\"STRING\" size=\"256\"/><Column id=\"DMRTR_005\" type=\"STRING\" size=\"256\"/><Column id=\"DMRTR_006\" type=\"STRING\" size=\"256\"/><Column id=\"DMRTR_007\" type=\"STRING\" size=\"256\"/><Column id=\"DMRTR_008\" type=\"STRING\" size=\"256\"/><Column id=\"DMRTR_009\" type=\"STRING\" size=\"256\"/><Column id=\"DMRTR_010\" type=\"STRING\" size=\"256\"/><Column id=\"DMRTR_011\" type=\"STRING\" size=\"256\"/><Column id=\"DMRTR_012\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dty_exc_dmrtr", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DMRTR_STDR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DMRTR_STDR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DMRTR_SCORE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"OUTPT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM_AT\" type=\"STRING\" size=\"256\"/><Column id=\"HT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_hrm049", this);
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dty_exc_dmrtr_orign", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DMRTR_STDR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DMRTR_STDR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DMRTR_SCORE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"OUTPT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM_AT\" type=\"STRING\" size=\"256\"/><Column id=\"HT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_confmAt", this);
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">미승인</Col><Col id=\"CODE\">0</Col></Row><Row><Col id=\"CODE_NM\">승인</Col><Col id=\"CODE\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_updateConfmAt", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"HT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static08", "absolute", "1031", "0", "15", "735", null, null, this);
            obj.set_taborder("2");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", null, "0", "13", "735", "0", null, this);
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
            obj = new Static("sta_STDR_DE", "absolute", "15", "5", "64", "21", null, null, this.div_search);
            obj.set_taborder("31");
            obj.set_text("평정년도");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "0", "5", "15", null, null, "5", this.div_search);
            obj.set_taborder("38");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new MaskEdit("msk_YEAR", "absolute", "79", "5", "54", "21", null, null, this.div_search);
            obj.set_taborder("0");
            obj.set_mask("####");
            obj.set_type("string");
            obj.style.set_align("center middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_STDR_DE00", "absolute", "148", "5", "64", "21", null, null, this.div_search);
            obj.set_taborder("40");
            obj.set_text("반기구분");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "133", "5", "15", null, null, "5", this.div_search);
            obj.set_taborder("42");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "298", "5", "15", null, null, "5", this.div_search);
            obj.set_taborder("43");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_STDR_DE01", "absolute", "313", "5", "64", "21", null, null, this.div_search);
            obj.set_taborder("44");
            obj.set_text("대상부서");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cmb_HT_SE", "absolute", "212", "5", "86", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("@ds_hrm049");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj = new Div("div_dept", "absolute", "377", "5", "195", "22", null, null, this.div_search);
            obj.set_taborder("45");
            obj.set_async("false");
            obj.set_url("com::deptCode.xfdl");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "0", "33", "1031", "10", null, null, this);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title01", "absolute", "0", "43", "224", "19", null, null, this);
            obj.set_taborder("11");
            obj.set_text("직무수행태도 감점명세서");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "0", "62", "1031", "5", null, null, this);
            obj.set_taborder("12");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_dtyExcDmrtr", "absolute", "0", "67", null, null, "28", "0", this);
            obj.set_taborder("13");
            obj.set_binddataset("ds_dty_exc_dmrtr");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"200\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"70\"/></Columns><Rows><Row size=\"36\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"감점사유\"/><Cell col=\"2\" colspan=\"2\" text=\"감점\"/><Cell col=\"4\" text=\"담당팀장&#13;&#10;승인여부\"/></Band><Band id=\"body\"><Cell text=\"항목별\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"1\" style=\"align:left middle;\" text=\"bind:DMRTR_STDR_NM\"/><Cell col=\"2\" text=\"bind:DMRTR_SCORE\"/><Cell col=\"3\" text=\"bind:RM\"/><Cell col=\"4\" displaytype=\"expr:comp.parent.fn_bEdit(DMRTR_STDR_CODE) ? 'combo' : 'none'\" style=\"background:peachpuff;background2:peachpuff;selectbackground:peachpuff;\" text=\"bind:CONFM_AT\" combodataset=\"ds_confmAt\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_updateConfmAt", "absolute", null, "43", "90", "19", "28", null, this);
            obj.set_taborder("15");
            obj.set_text("승인처리");
            obj.set_cssclass("btn_WF_Process");
            obj.set_enable("false");
            this.addChild(obj.name, obj);


            
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
            obj = new Layout("default", "", 1059, 735, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HRM060125");
            		p.set_titletext("개인별직무수행태도");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_search.msk_YEAR","value","ds_cond","YEAR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_search.cmb_HT_SE","value","ds_cond","HT_SE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "com::deptCode.xfdl");
        };
        
        // User Script
        this.addIncludeScript("HRM060125.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("HRM060125.xfdl", "mis_lib::misUtil.xjs");
        this.registerScript("HRM060125.xfdl", function() {
        /***********************************************************************
         * Script Include 
        ************************************************************************/
         
        //include "lib::comInclude.xjs";
        //include "mis_lib::misUtil.xjs";

        

        /***********************************************************************
         * 화면 변수 선언부
        ************************************************************************/

        this.timhderAt = false;

        

        this.HRM060125_oninit = function(obj,e)
        {
        	
        }

        this.HRM060125_onload = function(obj,e)
        {
        	this.fn_init_form();
        	this.fn_init_dataset();
        	
        	this.div_search.div_dept.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");
        	
        	// 인사권한자
        	if(this.gfn_authGrpId("HRM_ADMIN") > -1 || this.gfn_authGrpId("HRM_EVL") > -1) {
        		// 인사권한자에게 필요한 작업 지정
        		this.btn_updateConfmAt.set_enable(true);
        	} else {
        		this.div_search.div_dept.fn_setCssclass("edt_WF_Readonly");
        	}
        	
        	// 팀장권한
        	if(this.gfn_authGrpId("TIMHDER") > -1) {
        		this.timhderAt = true;
        	}
        	
        	var comboParams = [
        	    ["ds_hrm049",   "HRM049", "Y", "D", "B"]	// ds_hrm049 : 반기구분
        	];
        	var callback = function (svcId, errorCode, errorMsg) {
        		this.ds_cond.clearData();
        		var nRow = this.ds_cond.addRow();
        		this.ds_cond.set_enableevent(false);
        		this.ds_cond.setColumn(nRow, "YEAR",      this.comUtils.getClientDate("YYYY"));
        		this.ds_cond.setColumn(nRow, "HT_SE",     this.comUtils.getClientDate("MM") <= '06' ? '01' : '02');
        		this.ds_cond.setColumn(nRow, "DEPT_CODE", this.gfn_getDeptId()  );	// 부서코드
        		this.ds_cond.setColumn(nRow, "DEPT_NM",   this.gfn_getDeptName());	// 부서명
        		this.ds_cond.set_enableevent(true);
        		
        		// 팀장일 경우 승인버튼 활성화
        		if(this.timhderAt) {
        			this.btn_updateConfmAt.set_enable(true);
        		}
        		
        		this.fn_search();
        	};
        	this.gfn_comboLoad (comboParams, callback);
        }

        

        /***********************************************************************
         * Form/Dataset 오브젝트 초기화
        ************************************************************************/

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

        /*
         * 함수명  	: fn_search
         * 설명 		: 조회 이벤트 처리         
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_search();
         */
        this.fn_search = function()
        {
        	this.ds_dty_exc_dmrtr.clearData();
        	
        	this.ds_dty_exc_dmrtr_stdr.clearData();
        	this.ds_dty_exc_atitd_dmrtr.clearData();
        	
        	this.fn_transaction("selectDtyExcDmrtr");
        }

        
        /*
         * 함수명  	: fn_search
         * 설명 		: 조회 이벤트 처리         
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_search();
         */
        this.fn_save = function()
        {
        	if(this.gfn_message("confirm.저장.여부")) {
        		this.fn_transaction("saveDtyExcDmrtr");
        	}
        }

        
        /*
         * 함수명  	: fn_print
         * 설명 		: 인쇄
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_print();
         */
        this.fn_print = function()
        {
        	if(this.ds_dty_exc_dmrtr.rowcount>0){
        		this.ds_cond.setColumn(0, "EMPNO", this.fn_getEmpno());
        		this.gfn_ReportPopup(this, "MIS/HRM/HRM060125_R01.crf", this.ds_cond);
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
        		case "selectDtyExcDmrtr":
        			var sController   	= "hsco/mis/hrm/HRM060125/selectDtyExcDmrtr.do";
        			var sInDatasets   	= "input1=ds_cond";
        			var sOutDatasets  	= "ds_dty_exc_dmrtr_stdr=output1 ds_dty_exc_atitd_dmrtr=output2";
        			break;
        		case "saveDtyExcDmrtr":
        			var sController   	= "hsco/mis/hrm/HRM060125/saveDtyExcDmrtr.do";
        			var sInDatasets   	= "input1=ds_dty_exc_atitd_dmrtr:U";
        			var sOutDatasets  	= "";
        			break;
        		case "updateConfmAt":
        			var sController   	= "hsco/mis/hrm/HRM060125/updateConfmAt.do";
        			var sInDatasets   	= "input1=ds_updateConfmAt";
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
        	if (nErrorCode != 0){
        		this.gfn_callback_message(strSvcId, nErrorCode, strErrorMsg);
        	} else {
        		switch (strSvcId) {
        			case "selectDtyExcDmrtr":	// 조회
        				this.grd_dtyExcDmrtr.set_enableredraw(false);
        				// 그리드 초기화
        				for(var dCol = this.grd_dtyExcDmrtr.getFormatColCount(); dCol > 4; dCol--) {
        					this.grd_dtyExcDmrtr.deleteContentsCol(dCol);
        				}
        				
        				// 감점명세 표현
        				if(this.ds_dty_exc_dmrtr_stdr.getRowCount() > 0 && this.ds_dty_exc_atitd_dmrtr.getRowCount() > 0) {
        					this.ds_dty_exc_dmrtr.copyData(this.ds_dty_exc_dmrtr_orign);
        					
        					for(var dmRow = 0; dmRow < this.ds_dty_exc_atitd_dmrtr.getRowCount(); dmRow++) {
        						var empno = this.ds_dty_exc_atitd_dmrtr.getColumn(dmRow, "EMPNO");
        						var empnm = this.ds_dty_exc_atitd_dmrtr.getColumn(dmRow, "EMPNM");
        						
        						// 그리드 반영
        						this.grd_dtyExcDmrtr.set_enableevent(false);
        						var nCol = this.grd_dtyExcDmrtr.appendContentsCol();
        						this.grd_dtyExcDmrtr.setCellProperty("Head", nCol-1, "text", empnm);
        						this.grd_dtyExcDmrtr.setCellProperty("Body", nCol, "text", "bind:DATA_" + empno);
        						
        						var expr_edittype = "expr:comp.parent.fn_bEdit(DMRTR_STDR_CODE) && CONFM_AT == '0' ? 'masknumber' : 'none'";
        						var expr_display  = "expr:comp.parent.fn_bEdit(DMRTR_STDR_CODE) && CONFM_AT == '0' ? 'display' : 'edit'";
        						
        						this.grd_dtyExcDmrtr.setCellProperty("Body", nCol, "edittype",        expr_edittype);
        						this.grd_dtyExcDmrtr.setCellProperty("Body", nCol, "editdisplay",     expr_display );
        						this.grd_dtyExcDmrtr.setCellProperty("Body", nCol, "mask",            "999" );
        						this.grd_dtyExcDmrtr.setCellProperty("Body", nCol, "editlimitbymask", "both" );
        						this.grd_dtyExcDmrtr.setCellProperty("Body", nCol, "align",           "center middle" );
        						
        						this.grd_dtyExcDmrtr.setFormatColProperty(nCol, "size", 120);
        						this.grd_dtyExcDmrtr.set_enableevent(true);
         					}
         					
         					// 데이터셋 초기화
        					this.ds_dty_exc_dmrtr.copyData(this.ds_dty_exc_dmrtr_stdr);
         					
        					for(var dmRow = 0; dmRow < this.ds_dty_exc_atitd_dmrtr.getRowCount(); dmRow++) {
        						// 필요한 정보 추출
        						var empno = this.ds_dty_exc_atitd_dmrtr.getColumn(dmRow, "EMPNO");
        						var empnm = this.ds_dty_exc_atitd_dmrtr.getColumn(dmRow, "EMPNM");
        						
         						// 데이터셋 변경
        						this.ds_dty_exc_dmrtr.set_enableevent(false);
         						this.ds_dty_exc_dmrtr.addColumn("DATA_" + empno, "bigdecimal");
        						this.ds_dty_exc_dmrtr.set_enableevent(true);
        						
        						// 데이터 반영
        						for(var eRow = 1; eRow <= 12; eRow++) {
        							var findCode = (eRow+"").padLeft(3, "0");
        							var inpData  = this.ds_dty_exc_atitd_dmrtr.getColumn(dmRow, "DMRTR_" + findCode);
        							var findRow  = this.ds_dty_exc_dmrtr.findRow("DMRTR_STDR_CODE", findCode);
        							
        							this.ds_dty_exc_dmrtr.set_enableevent(false);
        							this.ds_dty_exc_dmrtr.setColumn(findRow, "DATA_"+empno, inpData);
        							this.ds_dty_exc_dmrtr.set_enableevent(true);
        						}
         					}
        				}
        				this.grd_dtyExcDmrtr.set_enableredraw(true);
        				
        				var rCnt = this.ds_dty_exc_dmrtr_stdr.rowcount;
        				var confmAt = "0";
        				
        				if(rCnt > 0) {
        					confmAt = this.ds_dty_exc_dmrtr_stdr.getColumn(0, "CONFM_AT");
        				}
        				
        				if(confmAt == "1") {
        					this.btn_updateConfmAt.set_text("미승인처리");
        				}
        				else {
        					this.btn_updateConfmAt.set_text("승인처리");
        				}
        				
        				var year     = this.ds_cond.getColumn(0, "YEAR");
        				var htSe     = this.ds_cond.getColumn(0, "HT_SE");
        				var deptCode = this.ds_cond.getColumn(0, "DEPT_CODE");
        				
        				this.ds_updateConfmAt.clearData();
        				this.ds_updateConfmAt.addRow();
        				this.ds_updateConfmAt.setColumn(0, "YEAR"     , year);
        				this.ds_updateConfmAt.setColumn(0, "HT_SE"    , htSe);
        				this.ds_updateConfmAt.setColumn(0, "DEPT_CODE", deptCode);
        				this.ds_updateConfmAt.setColumn(0, "CONFM_AT" , confmAt);
        				
        				break;
        			case "saveDtyExcDmrtr":		// 저장
        				this.fn_search();
        				break;
        			case "updateConfmAt":		// 승인처리
        				this.gfn_message("success.처리.성공");
        				this.fn_search();
        				break;
        		}
        	}
        }

        

        /**********************************************************************
        * Dataset 관련 이벤트 처리
        ***********************************************************************/

        /*
         * 함수명  	: ds_cond_oncolumnchanged
         * 설명 		: Dataset 데이터 변경 후 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.ds_cond_oncolumnchanged(obj,e);
         */
        this.ds_cond_oncolumnchanged = function(obj,e)
        {
        	this.fn_search();
        }

        
        /*
         * 함수명  	: ds_dty_exc_dmrtr_oncolumnchanged
         * 설명 		: Dataset 데이터 변경 후 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.ds_dty_exc_dmrtr_oncolumnchanged(obj,e);
         */
        this.ds_dty_exc_dmrtr_oncolumnchanged = function(obj,e)
        {
        	var dmrtrStdrCode = obj.getColumn(e.row, "DMRTR_STDR_CODE");
        	if(this.fn_bEdit(dmrtrStdrCode)) {
        		var empno = e.columnid.substr(5);
        		var findRow = this.ds_dty_exc_atitd_dmrtr.findRow("EMPNO", empno);
        		this.ds_dty_exc_atitd_dmrtr.setColumn(findRow, "DMRTR_" + dmrtrStdrCode, e.newvalue);
        	}
        }

        

        /**********************************************************************
        * 사용자정의 함수
        ***********************************************************************/

        
        // (expr) 감점구분코드별 수정가능여부 반환
        this.fn_bEdit = function(stdrCode)
        {
        	var returnEditable = false;
        	switch(stdrCode) {
        		case '001':case '002':case '003':case '004':case '005':
        			returnEditable = true;
        			break;
        	}
        	return returnEditable;
        }

        /*
         * 함수명  	: btn_updateConfmAt_onclick
         * 설명 		: 승인처리 버튼 클릭시 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_updateConfmAt_onclick(obj,e);
         */
        this.btn_updateConfmAt_onclick = function(obj,e)
        {
        	if(Ex.util.isUpdated(this.ds_dty_exc_atitd_dmrtr)) {
        		this.gfn_message("info.처리불가", "변경된 데이터가 존재합니다. 저장 후 다시 시도해주십시오.");
        		return false;
        	}
        	
        	var str = this.btn_updateConfmAt.text;
        	if(this.gfn_message("comm.행위여부", str)) {
        		this.fn_transaction("updateConfmAt");
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_cond.addEventHandler("oncolumnchanged", this.ds_cond_oncolumnchanged, this);
            this.ds_dty_exc_dmrtr.addEventHandler("oncolumnchanged", this.ds_dty_exc_dmrtr_oncolumnchanged, this);
            this.ds_updateConfmAt.addEventHandler("oncolumnchanged", this.ds_dty_exc_dmrtr_oncolumnchanged, this);
            this.addEventHandler("oninit", this.HRM060125_oninit, this);
            this.addEventHandler("onload", this.HRM060125_onload, this);
            this.Static07.addEventHandler("onclick", this.Static07_onclick, this);
            this.btn_updateConfmAt.addEventHandler("onclick", this.btn_updateConfmAt_onclick, this);

        };

        this.loadIncludeScript("HRM060125.xfdl");
        this.loadPreloadList();
       
    };
}
)();
