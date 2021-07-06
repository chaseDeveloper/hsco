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
                this.set_name("HRM040103");
                this.set_classname("HRM040103");
                this.set_titletext("성실ㆍ친절서비스 포상금 등급 평가");
                this._setFormPosition(0,0,1059,735);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cond", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YYYYMM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_svcRwardGradEvl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYYMM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"GRAD\" type=\"STRING\" size=\"256\"/><Column id=\"S\" type=\"STRING\" size=\"256\"/><Column id=\"A\" type=\"STRING\" size=\"256\"/><Column id=\"B\" type=\"STRING\" size=\"256\"/><Column id=\"C\" type=\"STRING\" size=\"256\"/><Column id=\"D\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_validation", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">YYYYMM</Col><Col id=\"msgId\">평가년월</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_svcRwardGradEvl</Col><Col id=\"colId\">GRAD</Col><Col id=\"msgId\">평가등급</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">EMPNO</Col><Col id=\"compId\">ds_svcRwardGradEvl</Col><Col id=\"msgId\">사번</Col><Col id=\"notNull\">Y</Col><Col id=\"PK\">Y</Col></Row><Row><Col id=\"colId\">YYYYMM</Col><Col id=\"compId\">ds_svcRwardGradEvl</Col><Col id=\"msgId\">평가년월</Col><Col id=\"notNull\">Y</Col><Col id=\"PK\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "0", null, "33", "28", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Box");
            this.addChild(obj.name, obj);
            obj = new Static("Static36", "absolute", "488", "0", "38", "5", null, null, this.div_search);
            obj.set_taborder("1");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#fa794f66");
            obj.style.set_align("center middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static37", "absolute", "488", null, "38", "5", null, "0", this.div_search);
            obj.set_taborder("2");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#fa794f66");
            obj.style.set_align("center middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "0", "5", "15", null, null, "5", this.div_search);
            obj.set_taborder("3");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_YYYYMM", "absolute", "15", "5", "64", "21", null, null, this.div_search);
            obj.set_taborder("4");
            obj.set_text("평가년월");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("div_monCal", "absolute", "84", "5", "84", "21", null, null, this.div_search);
            obj.set_taborder("5");
            obj.set_async("false");
            obj.set_url("common::frmMonCal.xfdl");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "33", null, "10", "28", null, this);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_svcRwardGradEvl", "absolute", "0", "43", "250", "19", null, null, this);
            obj.set_taborder("5");
            obj.set_text("준법ㆍ무사고 포상금 등급 평가");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "1031", "0", "15", "735", null, null, this);
            obj.set_taborder("6");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", null, "0", "13", "735", "0", null, this);
            obj.set_taborder("7");
            obj.set_text("스\r\n크\r\n롤\r\n13");
            obj.set_visible("false");
            obj.style.set_background("#d07b173c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "62", null, "5", "28", null, this);
            obj.set_taborder("8");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_svcRwardGradEvl", "absolute", "0", "67", null, null, "28", "0", this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_svcRwardGradEvl");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"사번\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"S등급\"/><Cell col=\"4\" text=\"A등급\"/><Cell col=\"5\" text=\"B등급\"/><Cell col=\"6\" text=\"C등급\"/><Cell col=\"7\" text=\"D등급\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" editfilter=\"none\" text=\"bind:EMPNO\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'show' : 'none'\"/><Cell col=\"2\" text=\"bind:EMPNM\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:S\"/><Cell col=\"4\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:A\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:B\"/><Cell col=\"6\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:C\"/><Cell col=\"7\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:D\"/></Band></Format></Formats>");
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
            		p.set_classname("HRM040103");
            		p.set_titletext("성실ㆍ친절서비스 포상금 등급 평가");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::frmMonCal.xfdl");
        };
        
        // User Script
        this.addIncludeScript("HRM040103.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("HRM040103.xfdl", "mis_lib::misUtil.xjs");
        this.registerScript("HRM040103.xfdl", function() {
        /**********************************************************************
        * 화면ID	: HRM040103.xfdl
        * 화면명	: 성실ㆍ친절서비스 포상금 등급 평가
        * 화면설명	: 성실ㆍ친절서비스 포상금 등급 평가를 관리한다.
        * 작성일	: 2020.12.02
        * 작성자	: 김형태
        * 수정이력	: 
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
        this.checkDs = [
        	 this.ds_svcRwardGradEvl
        ];

        var saveRow = -1;

        
        /**********************************************************************
        * onInit / onLoad 영역
        ***********************************************************************/

        this.HRM040103_oninit = function(obj,e)
        {
        	// ..
        }

        this.HRM040103_onload = function(obj,e)
        {
        	// Form 초기화
        	this.fn_init_form();

        	// DataSet 초기화
        	this.fn_init_dataset();
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
        	
        	// 데이터셋 동적 바인딩
        	this.div_search.div_monCal.fn_setBind("ds_cond","YYYYMM");
        	this.div_search.div_monCal.msk_mon.set_cssclass("msk_WF_Essential");
        	
        	// 초기 검색조건
        	this.ds_cond.clearData();
        	var nRow = this.ds_cond.addRow();
         	this.ds_cond.setColumn(nRow, "YYYYMM", this.comUtils.getClientDate("YYYYMM"));	// 당해년월
        	
        	this.fn_search();	//  최초조회
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
         * 설명 		: 조회 이벤트 처리(성실ㆍ친절서비스 포상금 등급 평가)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_search();
         */
        this.fn_search = function()
        {
        	// validation 체크(성실ㆍ친절서비스 포상금 등급 평가)
        	if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond, this.ds_validation)) {
        		return;
        	}
        	
        	// clear Datasets
        	this.ds_svcRwardGradEvl.clearData();
        	
        	// transaction
        	this.fn_transaction("selectSvcRwardGradEvl");
        }

        
        /*
         * 함수명  	: fn_save
         * 설명 		: 저장 이벤트 처리(성실ㆍ친절서비스 포상금 등급 평가)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_save();
         */
        this.fn_save = function()
        {
        	// 데이터셋 수정 여부체크
        	if (!this.comUtils.isDatasetUpdated(this.ds_svcRwardGradEvl)) {
        		this.gfn_message("comm.데이터.변경.없음");
        		return false;
        	}
        	
        	// validation 체크(성실ㆍ친절서비스 포상금 등급 평가)
        	if(!this.gfn_checkValidation_NoUpdChk(this.ds_svcRwardGradEvl, this.ds_validation)) {
        		return;
        	}
        	
        	var rCnt = this.ds_svcRwardGradEvl.getRowCount();
        	var grad = "";
        	for(var i = 0; i < rCnt; i++) {
        		grad = this.ds_svcRwardGradEvl.getColumn(i, "GRAD");
        		if(this.comUtils.isNull(grad)) {
        			this.gfn_message("comm.항목.입력.을", "[" + (i+1) + "행] 평가등급");
        			return false;
        		}
        	}
        	
        	if(this.gfn_message("confirm.저장.여부")) {
        		saveRow = this.ds_svcRwardGradEvl.rowposition;
        		this.fn_transaction("saveSvcRwardGradEvl");
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
        		case "selectSvcRwardGradEvl":		// 성실ㆍ친절서비스 포상금 등급 평가 조회
        			var sController   	= "/hsco/mis/hrm/HRM040103/selectSvcRwardGradEvl.do";
        			var sInDatasets   	= "input1=ds_cond";
        			var sOutDatasets  	= "ds_svcRwardGradEvl=output1";
        			break;
        		case "saveSvcRwardGradEvl":			// 저장
        			var sController   	= "/hsco/mis/hrm/HRM040103/saveSvcRwardGradEvl.do";
        			var sInDatasets   	= "input1=ds_svcRwardGradEvl:U";
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
        			case "selectSvcRwardGradEvl":	// 성실ㆍ친절서비스 포상금 등급 평가 조회
        				break;
        			case "saveSvcRwardGradEvl":		// 저장
        				this.gfn_message("success.처리.성공");
        				this.fn_search();
        				break;
        		}
        	}
        }

        
        /*
         * 함수명  	: fn_popupCallback
         * 설명 		: Popup Callback 처리
         * params  		: strSvcId    : 서비스요청 ID
         *                nErrorCode  : 오류 메시지 코드 ([예] 0 : Success, 그밖의 경우, error)
         *                strErrorMsg : 오류 메시지([예]  success.insert|정상적으로 등록되었습니다.)
         * return Type 	: None
         * 사용법		: 
         */
        this.fn_popupCallback = function(sPopupId,sReturn)
        {
        	var dsTemp = new Dataset();
        	var loadCnt = dsTemp.loadXML(sReturn);
        	if(loadCnt) {
        		if(sPopupId == "empPop") {
        			var empno = dsTemp.getColumn(0, "EMPNO");
        			var empnm = dsTemp.getColumn(0, "EMPNM");
        			
        			var nRow = this.ds_svcRwardGradEvl.rowposition;
        			this.ds_svcRwardGradEvl.setColumn(nRow, "EMPNO", empno);
        			this.ds_svcRwardGradEvl.setColumn(nRow, "EMPNM", empnm);
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
        * 1. Dataset 관련 이벤트 처리
        * 2. Button 관련 이벤트 처리
        * 3. Grid 관련 이벤트 처리
        * 4. 공통함수 처리
        * 5. Object 관련 이벤트 처리
        * 
        ***********************************************************************/

        

        /**********************************************************************
        * Dataset 관련 이벤트 처리
        ***********************************************************************/

        /*
         * 함수명  	: ds_svcRwardGradEvl_cancolumnchange
         * 설명 		: 데이터 변경 전 발생
         * params  		: None
         * return Type 	: None
         * 사용법		: this.ds_svcRwardGradEvl_cancolumnchange(obj,e);
         */
        this.ds_svcRwardGradEvl_cancolumnchange = function(obj,e)
        {
        	var gradS = this.comUtils.isNull(obj.getColumn(e.row, "S")) ? "0" : obj.getColumn(e.row, "S");
        	var gradA = this.comUtils.isNull(obj.getColumn(e.row, "A")) ? "0" : obj.getColumn(e.row, "A");
        	var gradB = this.comUtils.isNull(obj.getColumn(e.row, "B")) ? "0" : obj.getColumn(e.row, "B");
        	var gradC = this.comUtils.isNull(obj.getColumn(e.row, "C")) ? "0" : obj.getColumn(e.row, "C");
        	var gradD = this.comUtils.isNull(obj.getColumn(e.row, "D")) ? "0" : obj.getColumn(e.row, "D");
        	
        	// 반드시 하나는 체크되어야 함
        	if(e.columnid == "S") {
        		if(e.newvalue == "0") {
        			if(gradA == "0" && gradB == "0" && gradC == "0" && gradD == "0") {
        				return false;
        			}
        		}
        	} else if(e.columnid == "A") {
        		if(e.newvalue == "0") {
        			if(gradS == "0" && gradB == "0" && gradC == "0" && gradD == "0") {
        				return false;
        			}
        		}
        	} else if(e.columnid == "B") {
        		if(e.newvalue == "0") {
        			if(gradS == "0" && gradA == "0" && gradC == "0" && gradD == "0") {
        				return false;
        			}
        		}
        	} else if(e.columnid == "C") {
        		if(e.newvalue == "0") {
        			if(gradS == "0" && gradA == "0" && gradB == "0" && gradD == "0") {
        				return false;
        			}
        		}
        	} else if(e.columnid == "D") {
        		if(e.newvalue == "0") {
        			if(gradS == "0" && gradA == "0" && gradB == "0" && gradC == "0") {
        				return false;
        			}
        		}
        	}
        }

        /*
         * 함수명  	: ds_svcRwardGradEvl_oncolumnchanged
         * 설명 		: 데이터 변경 후 발생
         * params  		: None
         * return Type 	: None
         * 사용법		: this.ds_svcRwardGradEvl_oncolumnchanged(obj,e);
         */
        this.ds_svcRwardGradEvl_oncolumnchanged = function(obj,e)
        {
        	// 라디오버튼 역할
        	if(e.columnid == "S") {
        		if(e.newvalue == "1") {
        			this.fn_uncheck(e.row, e.columnid);
        		}
        	} else if(e.columnid == "A") {
        		if(e.newvalue == "1") {
        			this.fn_uncheck(e.row, e.columnid);
        		}
        	} else if(e.columnid == "B") {
        		if(e.newvalue == "1") {
        			this.fn_uncheck(e.row, e.columnid);
        		}
        	} else if(e.columnid == "C") {
        		if(e.newvalue == "1") {
        			this.fn_uncheck(e.row, e.columnid);
        		}
        	} else if(e.columnid == "D") {
        		if(e.newvalue == "1") {
        			this.fn_uncheck(e.row, e.columnid);
        		}
        	}
        }

        
        /**********************************************************************
        * Button 관련 이벤트 처리
        ***********************************************************************/

        
        /**********************************************************************
        * Grid 관련 이벤트 처리
        ***********************************************************************/

        /*
         * 함수명  	: grd_svcRwardGradEvl_onexpandup
         * 설명 		: 그리드 버튼 클릭 후 이벤트 처리(Popup)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.grd_svcRwardGradEvl_onexpandup(obj,e);
         */
        this.grd_svcRwardGradEvl_onexpandup = function(obj,e)
        {
        	if(e.cell == '1') {
        		this.gfn_popup("empPop", 400, 400, "사원조회팝업", "", "com::empno_P01.xfdl", "fn_popupCallback", true);
        	}
        }

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
        	var yyyymm = this.ds_cond.getColumn(0, "YYYYMM");
        	var addRow = this.ds_svcRwardGradEvl.addRow();
        	this.ds_svcRwardGradEvl.setColumn(addRow, "YYYYMM", yyyymm);
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
        	var dRow = this.ds_svcRwardGradEvl.rowposition;
        	
        	if(dRow < 0) {
        		this.gfn_message("comm.데이터.선택.없음");
        		return false;
        	}
        	if(!this.gfn_message("confirm.삭제여부")) {
        		return false;	// 아니오
        	}
        	
        	this.ds_svcRwardGradEvl.deleteRow(dRow);
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
        	if(Ex.util.isUpdated(this.ds_svcRwardGradEvl)) {
        		if(!this.gfn_message("confirm.변경.취소.여부")) {
        			return false;	// 아니오
        		}
        		this.ds_svcRwardGradEvl.reset();
        	}
        }

        

        
        /*
         * 함수명  	: fn_uncheck
         * 설명 		: 체크 취소
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_uncheck();
         */
        this.fn_uncheck = function(idx,colId)
        {
        	this.ds_svcRwardGradEvl.set_enableevent(false);
        	
        	// 전체 체크 해제
        	this.ds_svcRwardGradEvl.setColumn(idx, "S", "0");
        	this.ds_svcRwardGradEvl.setColumn(idx, "A", "0");
        	this.ds_svcRwardGradEvl.setColumn(idx, "B", "0");
        	this.ds_svcRwardGradEvl.setColumn(idx, "C", "0");
        	this.ds_svcRwardGradEvl.setColumn(idx, "D", "0");
        	
        	// 선택된 컬럼만 체크
        	this.ds_svcRwardGradEvl.setColumn(idx, colId, "1");
        	
        	// 등급 세팅
        	this.ds_svcRwardGradEvl.setColumn(idx, "GRAD", colId);
        	
        	this.ds_svcRwardGradEvl.set_enableevent(true);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_svcRwardGradEvl.addEventHandler("cancolumnchange", this.ds_svcRwardGradEvl_cancolumnchange, this);
            this.ds_svcRwardGradEvl.addEventHandler("oncolumnchanged", this.ds_svcRwardGradEvl_oncolumnchanged, this);
            this.addEventHandler("oninit", this.HRM040103_oninit, this);
            this.addEventHandler("onload", this.HRM040103_onload, this);
            this.grd_svcRwardGradEvl.addEventHandler("onexpandup", this.grd_svcRwardGradEvl_onexpandup, this);

        };

        this.loadIncludeScript("HRM040103.xfdl");
        this.loadPreloadList();
       
    };
}
)();
