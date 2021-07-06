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
                this.set_name("HRM040102");
                this.set_classname("HRM040102");
                this.set_titletext("준법ㆍ무사고 포상금 등급 평가");
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

            obj = new Dataset("ds_lwdrRwardGradEvl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYYMM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"GRAD\" type=\"STRING\" size=\"256\"/><Column id=\"VSS\" type=\"STRING\" size=\"256\"/><Column id=\"VMS\" type=\"STRING\" size=\"256\"/><Column id=\"DMS\" type=\"STRING\" size=\"256\"/><Column id=\"DLS\" type=\"STRING\" size=\"256\"/><Column id=\"VSA\" type=\"STRING\" size=\"256\"/><Column id=\"VMA\" type=\"STRING\" size=\"256\"/><Column id=\"DMA\" type=\"STRING\" size=\"256\"/><Column id=\"DLA\" type=\"STRING\" size=\"256\"/><Column id=\"VSB\" type=\"STRING\" size=\"256\"/><Column id=\"VMB\" type=\"STRING\" size=\"256\"/><Column id=\"DMB\" type=\"STRING\" size=\"256\"/><Column id=\"DLB\" type=\"STRING\" size=\"256\"/><Column id=\"VSC\" type=\"STRING\" size=\"256\"/><Column id=\"VMC\" type=\"STRING\" size=\"256\"/><Column id=\"DMC\" type=\"STRING\" size=\"256\"/><Column id=\"DLC\" type=\"STRING\" size=\"256\"/><Column id=\"VSD\" type=\"STRING\" size=\"256\"/><Column id=\"VMD\" type=\"STRING\" size=\"256\"/><Column id=\"DMD\" type=\"STRING\" size=\"256\"/><Column id=\"DLD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">YYYYMM</Col><Col id=\"msgId\">평가년월</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_lwdrRwardGradEvl</Col><Col id=\"colId\">GRAD</Col><Col id=\"msgId\">평가등급</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">EMPNO</Col><Col id=\"compId\">ds_lwdrRwardGradEvl</Col><Col id=\"msgId\">사번</Col><Col id=\"notNull\">Y</Col><Col id=\"PK\">Y</Col></Row><Row><Col id=\"colId\">YYYYMM</Col><Col id=\"compId\">ds_lwdrRwardGradEvl</Col><Col id=\"msgId\">평가년월</Col><Col id=\"notNull\">Y</Col><Col id=\"PK\">Y</Col></Row></Rows>");
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

            obj = new Static("sta_lwdrRwardGradEvl", "absolute", "0", "43", "250", "19", null, null, this);
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

            obj = new Grid("grd_lwdrRwardGradEvl", "absolute", "0", "67", null, null, "28", "0", this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_lwdrRwardGradEvl");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"36\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"사번\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"마을소형&#13;&#10;S등급\"/><Cell col=\"4\" text=\"마을중형&#13;&#10;S등급\"/><Cell col=\"5\" text=\"시내중형&#13;&#10;S등급\"/><Cell col=\"6\" text=\"시내대형&#13;&#10;S등급\"/><Cell col=\"7\" text=\"마을소형&#13;&#10;A등급\"/><Cell col=\"8\" text=\"마을중형&#13;&#10;A등급\"/><Cell col=\"9\" text=\"시내중형&#13;&#10;A등급\"/><Cell col=\"10\" text=\"시내대형&#13;&#10;A등급\"/><Cell col=\"11\" text=\"마을소형&#13;&#10;B등급\"/><Cell col=\"12\" text=\"마을중형&#13;&#10;B등급\"/><Cell col=\"13\" text=\"시내중형&#13;&#10;B등급\"/><Cell col=\"14\" text=\"시내대형&#13;&#10;B등급\"/><Cell col=\"15\" text=\"마을소형&#13;&#10;C등급\"/><Cell col=\"16\" text=\"마을중형&#13;&#10;C등급\"/><Cell col=\"17\" text=\"시내중형&#13;&#10;C등급\"/><Cell col=\"18\" text=\"시내대형&#13;&#10;C등급\"/><Cell col=\"19\" text=\"마을소형&#13;&#10;D등급\"/><Cell col=\"20\" text=\"마을중형&#13;&#10;D등급\"/><Cell col=\"21\" text=\"시내중형&#13;&#10;D등급\"/><Cell col=\"22\" text=\"시내대형&#13;&#10;D등급\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" editfilter=\"none\" text=\"bind:EMPNO\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'show' : 'none'\"/><Cell col=\"2\" text=\"bind:EMPNM\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:VSS\"/><Cell col=\"4\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:VMS\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:DMS\"/><Cell col=\"6\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:DLS\"/><Cell col=\"7\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:VSA\"/><Cell col=\"8\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:VMA\"/><Cell col=\"9\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:DMA\"/><Cell col=\"10\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:DLA\"/><Cell col=\"11\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:VSB\"/><Cell col=\"12\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:VMB\"/><Cell col=\"13\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:DMB\"/><Cell col=\"14\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:DLB\"/><Cell col=\"15\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:VSC\"/><Cell col=\"16\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:VMC\"/><Cell col=\"17\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:DMC\"/><Cell col=\"18\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:DLC\"/><Cell col=\"19\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:VSD\"/><Cell col=\"20\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:VMD\"/><Cell col=\"21\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:DMD\"/><Cell col=\"22\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:DLD\"/></Band></Format></Formats>");
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
            		p.set_classname("HRM040102");
            		p.set_titletext("준법ㆍ무사고 포상금 등급 평가");

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
        this.addIncludeScript("HRM040102.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("HRM040102.xfdl", "mis_lib::misUtil.xjs");
        this.registerScript("HRM040102.xfdl", function() {
        /**********************************************************************
        * 화면ID	: HRM040102.xfdl
        * 화면명	: 준법ㆍ무사고 포상금 등급 평가
        * 화면설명	: 준법ㆍ무사고 포상금 등급 평가를 관리한다.
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
        	 this.ds_lwdrRwardGradEvl
        ];

        var saveRow = -1;

        
        /**********************************************************************
        * onInit / onLoad 영역
        ***********************************************************************/

        this.HRM040102_oninit = function(obj,e)
        {
        	// ..
        }

        this.HRM040102_onload = function(obj,e)
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
         * 설명 		: 조회 이벤트 처리(준법ㆍ무사고 포상금 등급 평가)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_search();
         */
        this.fn_search = function()
        {
        	// validation 체크(준법ㆍ무사고 포상금 등급 평가)
        	if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond, this.ds_validation)) {
        		return;
        	}
        	
        	// clear Datasets
        	this.ds_lwdrRwardGradEvl.clearData();
        	
        	// transaction
        	this.fn_transaction("selectLwdrRwardGradEvl");
        }

        
        /*
         * 함수명  	: fn_save
         * 설명 		: 저장 이벤트 처리(준법ㆍ무사고 포상금 등급 평가)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_save();
         */
        this.fn_save = function()
        {
        	// 데이터셋 수정 여부체크
        	if (!this.comUtils.isDatasetUpdated(this.ds_lwdrRwardGradEvl)) {
        		this.gfn_message("comm.데이터.변경.없음");
        		return false;
        	}
        	
        	// validation 체크(준법ㆍ무사고 포상금 등급 평가)
        	if(!this.gfn_checkValidation_NoUpdChk(this.ds_lwdrRwardGradEvl, this.ds_validation)) {
        		return;
        	}
        	
        	var rCnt = this.ds_lwdrRwardGradEvl.getRowCount();
        	var grad = "";
        	for(var i = 0; i < rCnt; i++) {
        		grad = this.ds_lwdrRwardGradEvl.getColumn(i, "GRAD");
        		if(this.comUtils.isNull(grad)) {
        			this.gfn_message("comm.항목.입력.을", "[" + (i+1) + "행] 평가등급");
        			return false;
        		}
        	}
        	
        	if(this.gfn_message("confirm.저장.여부")) {
        		saveRow = this.ds_lwdrRwardGradEvl.rowposition;
        		this.fn_transaction("saveLwdrRwardGradEvl");
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
        		case "selectLwdrRwardGradEvl":			// 준법ㆍ무사고 포상금 등급 평가 조회
        			var sController   	= "/hsco/mis/hrm/HRM040102/selectLwdrRwardGradEvl.do";
        			var sInDatasets   	= "input1=ds_cond";
        			var sOutDatasets  	= "ds_lwdrRwardGradEvl=output1";
        			break;
        		case "saveLwdrRwardGradEvl":			// 저장
        			var sController   	= "/hsco/mis/hrm/HRM040102/saveLwdrRwardGradEvl.do";
        			var sInDatasets   	= "input1=ds_lwdrRwardGradEvl:U";
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
        			case "selectLwdrRwardGradEvl":		// 준법ㆍ무사고 포상금 등급 평가 조회
        				break;
        			case "saveLwdrRwardGradEvl":		// 저장
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
        			
        			var nRow = this.ds_lwdrRwardGradEvl.rowposition;
        			this.ds_lwdrRwardGradEvl.setColumn(nRow, "EMPNO", empno);
        			this.ds_lwdrRwardGradEvl.setColumn(nRow, "EMPNM", empnm);
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
         * 함수명  	: ds_lwdrRwardGradEvl_cancolumnchange
         * 설명 		: 데이터 변경 전 발생
         * params  		: None
         * return Type 	: None
         * 사용법		: this.ds_lwdrRwardGradEvl_cancolumnchange(obj,e);
         */
        this.ds_lwdrRwardGradEvl_cancolumnchange = function(obj,e)
        {
        	var s1 = this.comUtils.isNull(obj.getColumn(e.row, "VSS")) ? "0" : obj.getColumn(e.row, "VSS");
        	var s2 = this.comUtils.isNull(obj.getColumn(e.row, "VMS")) ? "0" : obj.getColumn(e.row, "VMS");
        	var s3 = this.comUtils.isNull(obj.getColumn(e.row, "DMS")) ? "0" : obj.getColumn(e.row, "DMS");
        	var s4 = this.comUtils.isNull(obj.getColumn(e.row, "DLS")) ? "0" : obj.getColumn(e.row, "DLS");
        	var a1 = this.comUtils.isNull(obj.getColumn(e.row, "VSA")) ? "0" : obj.getColumn(e.row, "VSA");
        	var a2 = this.comUtils.isNull(obj.getColumn(e.row, "VMA")) ? "0" : obj.getColumn(e.row, "VMA");
        	var a3 = this.comUtils.isNull(obj.getColumn(e.row, "DMA")) ? "0" : obj.getColumn(e.row, "DMA");
        	var a4 = this.comUtils.isNull(obj.getColumn(e.row, "DLA")) ? "0" : obj.getColumn(e.row, "DLA");
        	var b1 = this.comUtils.isNull(obj.getColumn(e.row, "VSB")) ? "0" : obj.getColumn(e.row, "VSB");
        	var b2 = this.comUtils.isNull(obj.getColumn(e.row, "VMB")) ? "0" : obj.getColumn(e.row, "VMB");
        	var b3 = this.comUtils.isNull(obj.getColumn(e.row, "DMB")) ? "0" : obj.getColumn(e.row, "DMB");
        	var b4 = this.comUtils.isNull(obj.getColumn(e.row, "DLB")) ? "0" : obj.getColumn(e.row, "DLB");
        	var c1 = this.comUtils.isNull(obj.getColumn(e.row, "VSC")) ? "0" : obj.getColumn(e.row, "VSC");
        	var c2 = this.comUtils.isNull(obj.getColumn(e.row, "VMC")) ? "0" : obj.getColumn(e.row, "VMC");
        	var c3 = this.comUtils.isNull(obj.getColumn(e.row, "DMC")) ? "0" : obj.getColumn(e.row, "DMC");
        	var c4 = this.comUtils.isNull(obj.getColumn(e.row, "DLC")) ? "0" : obj.getColumn(e.row, "DLC");
        	var d1 = this.comUtils.isNull(obj.getColumn(e.row, "VSD")) ? "0" : obj.getColumn(e.row, "VSD");
        	var d2 = this.comUtils.isNull(obj.getColumn(e.row, "VMD")) ? "0" : obj.getColumn(e.row, "VMD");
        	var d3 = this.comUtils.isNull(obj.getColumn(e.row, "DMD")) ? "0" : obj.getColumn(e.row, "DMD");
        	var d4 = this.comUtils.isNull(obj.getColumn(e.row, "DLD")) ? "0" : obj.getColumn(e.row, "DLD");
        	
        	// 반드시 하나는 체크되어야 함
        	if(e.columnid == "VSS") {
        		if(e.newvalue == "0") {
        			if(s2 == "0" && s3 == "0" && s4 == "0" 
        				&& a1 == "0" && a2 == "0" && a3 == "0" && a4 == "0" 
        				&& b1 == "0" && b2 == "0" && b3 == "0" && b4 == "0" 
        				&& c1 == "0" && c2 == "0" && c3 == "0" && c4 == "0" 
        				&& d1 == "0" && d2 == "0" && d3 == "0" && d4 == "0") {
        				return false;
        			}
        		}
        	} else if(e.columnid == "VMS") {
        		if(e.newvalue == "0") {
        			if(s1 == "0" && s3 == "0" && s4 == "0" 
        				&& a1 == "0" && a2 == "0" && a3 == "0" && a4 == "0" 
        				&& b1 == "0" && b2 == "0" && b3 == "0" && b4 == "0" 
        				&& c1 == "0" && c2 == "0" && c3 == "0" && c4 == "0" 
        				&& d1 == "0" && d2 == "0" && d3 == "0" && d4 == "0") {
        				return false;
        			}
        		}
        	} else if(e.columnid == "DMS") {
        		if(e.newvalue == "0") {
        			if(s1 == "0" && s2 == "0" && s4 == "0" 
        				&& a1 == "0" && a2 == "0" && a3 == "0" && a4 == "0" 
        				&& b1 == "0" && b2 == "0" && b3 == "0" && b4 == "0" 
        				&& c1 == "0" && c2 == "0" && c3 == "0" && c4 == "0" 
        				&& d1 == "0" && d2 == "0" && d3 == "0" && d4 == "0") {
        				return false;
        			}
        		}
        	} else if(e.columnid == "DLS") {
        		if(e.newvalue == "0") {
        			if(s1 == "0" && s2 == "0" && s3 == "0"
        				&& a1 == "0" && a2 == "0" && a3 == "0" && a4 == "0" 
        				&& b1 == "0" && b2 == "0" && b3 == "0" && b4 == "0" 
        				&& c1 == "0" && c2 == "0" && c3 == "0" && c4 == "0" 
        				&& d1 == "0" && d2 == "0" && d3 == "0" && d4 == "0") {
        				return false;
        			}
        		}
        	} else if(e.columnid == "VSA") {
        		if(e.newvalue == "0") {
        			if(s1 == "0" && s2 == "0" && s3 == "0" && s4 == "0" 
        				&& a2 == "0" && a3 == "0" && a4 == "0" 
        				&& b1 == "0" && b2 == "0" && b3 == "0" && b4 == "0" 
        				&& c1 == "0" && c2 == "0" && c3 == "0" && c4 == "0" 
        				&& d1 == "0" && d2 == "0" && d3 == "0" && d4 == "0") {
        				return false;
        			}
        		}
        	} else if(e.columnid == "VMA") {
        		if(e.newvalue == "0") {
        			if(s1 == "0" && s2 == "0" && s3 == "0" && s4 == "0" 
        				&& a1 == "0" && a3 == "0" && a4 == "0" 
        				&& b1 == "0" && b2 == "0" && b3 == "0" && b4 == "0" 
        				&& c1 == "0" && c2 == "0" && c3 == "0" && c4 == "0" 
        				&& d1 == "0" && d2 == "0" && d3 == "0" && d4 == "0") {
        				return false;
        			}
        		}
        	} else if(e.columnid == "DMA") {
        		if(e.newvalue == "0") {
        			if(s1 == "0" && s2 == "0" && s3 == "0" && s4 == "0" 
        				&& a1 == "0" && a2 == "0" && a4 == "0" 
        				&& b1 == "0" && b2 == "0" && b3 == "0" && b4 == "0" 
        				&& c1 == "0" && c2 == "0" && c3 == "0" && c4 == "0" 
        				&& d1 == "0" && d2 == "0" && d3 == "0" && d4 == "0") {
        				return false;
        			}
        		}
        	} else if(e.columnid == "DLA") {
        		if(e.newvalue == "0") {
        			if(s1 == "0" && s2 == "0" && s3 == "0" && s4 == "0" 
        				&& a1 == "0" && a2 == "0" && a3 == "0"
        				&& b1 == "0" && b2 == "0" && b3 == "0" && b4 == "0" 
        				&& c1 == "0" && c2 == "0" && c3 == "0" && c4 == "0" 
        				&& d1 == "0" && d2 == "0" && d3 == "0" && d4 == "0") {
        				return false;
        			}
        		}
        	} else if(e.columnid == "VSB") {
        		if(e.newvalue == "0") {
        			if(s1 == "0" && s2 == "0" && s3 == "0" && s4 == "0" 
        				&& a1 == "0" && a2 == "0" && a3 == "0" && a4 == "0" 
        				&& b2 == "0" && b3 == "0" && b4 == "0" 
        				&& c1 == "0" && c2 == "0" && c3 == "0" && c4 == "0" 
        				&& d1 == "0" && d2 == "0" && d3 == "0" && d4 == "0") {
        				return false;
        			}
        		}
        	} else if(e.columnid == "VMB") {
        		if(e.newvalue == "0") {
        			if(s1 == "0" && s2 == "0" && s3 == "0" && s4 == "0" 
        				&& a1 == "0" && a2 == "0" && a3 == "0" && a4 == "0" 
        				&& b1 == "0" && b3 == "0" && b4 == "0" 
        				&& c1 == "0" && c2 == "0" && c3 == "0" && c4 == "0" 
        				&& d1 == "0" && d2 == "0" && d3 == "0" && d4 == "0") {
        				return false;
        			}
        		}
        	} else if(e.columnid == "DMB") {
        		if(e.newvalue == "0") {
        			if(s1 == "0" && s2 == "0" && s3 == "0" && s4 == "0" 
        				&& a1 == "0" && a2 == "0" && a3 == "0" && a4 == "0" 
        				&& b1 == "0" && b2 == "0" && b4 == "0" 
        				&& c1 == "0" && c2 == "0" && c3 == "0" && c4 == "0" 
        				&& d1 == "0" && d2 == "0" && d3 == "0" && d4 == "0") {
        				return false;
        			}
        		}
        	} else if(e.columnid == "DLB") {
        		if(s1 == "0" && s2 == "0" && s3 == "0" && s4 == "0" 
        				&& a1 == "0" && a2 == "0" && a3 == "0" && a4 == "0" 
        				&& b1 == "0" && b2 == "0" && b3 == "0"
        				&& c1 == "0" && c2 == "0" && c3 == "0" && c4 == "0" 
        				&& d1 == "0" && d2 == "0" && d3 == "0" && d4 == "0") {
        				return false;
        			}
        	} else if(e.columnid == "VSC") {
        		if(e.newvalue == "0") {
        			if(s1 == "0" && s2 == "0" && s3 == "0" && s4 == "0" 
        				&& a1 == "0" && a2 == "0" && a3 == "0" && a4 == "0" 
        				&& b1 == "0" && b2 == "0" && b3 == "0" && b4 == "0" 
        				&& c2 == "0" && c3 == "0" && c4 == "0" 
        				&& d1 == "0" && d2 == "0" && d3 == "0" && d4 == "0") {
        				return false;
        			}
        		}
        	} else if(e.columnid == "VMC") {
        		if(e.newvalue == "0") {
        			if(s1 == "0" && s2 == "0" && s3 == "0" && s4 == "0" 
        				&& a1 == "0" && a2 == "0" && a3 == "0" && a4 == "0" 
        				&& b1 == "0" && b2 == "0" && b3 == "0" && b4 == "0" 
        				&& c1 == "0" && c3 == "0" && c4 == "0" 
        				&& d1 == "0" && d2 == "0" && d3 == "0" && d4 == "0") {
        				return false;
        			}
        		}
        	} else if(e.columnid == "DMC") {
        		if(e.newvalue == "0") {
        			if(s1 == "0" && s2 == "0" && s3 == "0" && s4 == "0" 
        				&& a1 == "0" && a2 == "0" && a3 == "0" && a4 == "0" 
        				&& b1 == "0" && b2 == "0" && b3 == "0" && b4 == "0" 
        				&& c1 == "0" && c2 == "0" && c4 == "0" 
        				&& d1 == "0" && d2 == "0" && d3 == "0" && d4 == "0") {
        				return false;
        			}
        		}
        	} else if(e.columnid == "DLC") {
        		if(e.newvalue == "0") {
        			if(s1 == "0" && s2 == "0" && s3 == "0" && s4 == "0" 
        				&& a1 == "0" && a2 == "0" && a3 == "0" && a4 == "0" 
        				&& b1 == "0" && b2 == "0" && b3 == "0" && b4 == "0" 
        				&& c1 == "0" && c2 == "0" && c3 == "0"
        				&& d1 == "0" && d2 == "0" && d3 == "0" && d4 == "0") {
        				return false;
        			}
        		}
        	} else if(e.columnid == "VSD") {
        		if(e.newvalue == "0") {
        			if(s1 == "0" && s2 == "0" && s3 == "0" && s4 == "0" 
        				&& a1 == "0" && a2 == "0" && a3 == "0" && a4 == "0" 
        				&& b1 == "0" && b2 == "0" && b3 == "0" && b4 == "0" 
        				&& c1 == "0" && c2 == "0" && c3 == "0" && c4 == "0" 
        				&& d2 == "0" && d3 == "0" && d4 == "0") {
        				return false;
        			}
        		}
        	} else if(e.columnid == "VMD") {
        		if(e.newvalue == "0") {
        			if(s1 == "0" && s2 == "0" && s3 == "0" && s4 == "0" 
        				&& a1 == "0" && a2 == "0" && a3 == "0" && a4 == "0" 
        				&& b1 == "0" && b2 == "0" && b3 == "0" && b4 == "0" 
        				&& c1 == "0" && c2 == "0" && c3 == "0" && c4 == "0" 
        				&& d1 == "0" && d3 == "0" && d4 == "0") {
        				return false;
        			}
        		}
        	} else if(e.columnid == "DMD") {
        		if(e.newvalue == "0") {
        			if(s1 == "0" && s2 == "0" && s3 == "0" && s4 == "0" 
        				&& a1 == "0" && a2 == "0" && a3 == "0" && a4 == "0" 
        				&& b1 == "0" && b2 == "0" && b3 == "0" && b4 == "0" 
        				&& c1 == "0" && c2 == "0" && c3 == "0" && c4 == "0" 
        				&& d1 == "0" && d2 == "0" && d4 == "0") {
        				return false;
        			}
        		}
        	} else if(e.columnid == "DLD") {
        		if(e.newvalue == "0") {
        			if(s1 == "0" && s2 == "0" && s3 == "0" && s4 == "0" 
        				&& a1 == "0" && a2 == "0" && a3 == "0" && a4 == "0" 
        				&& b1 == "0" && b2 == "0" && b3 == "0" && b4 == "0" 
        				&& c1 == "0" && c2 == "0" && c3 == "0" && c4 == "0" 
        				&& d1 == "0" && d2 == "0" && d3 == "0") {
        				return false;
        			}
        		}
        	}
        }

        /*
         * 함수명  	: ds_lwdrRwardGradEvl_oncolumnchanged
         * 설명 		: 데이터 변경 후 발생
         * params  		: None
         * return Type 	: None
         * 사용법		: this.ds_lwdrRwardGradEvl_oncolumnchanged(obj,e);
         */
        this.ds_lwdrRwardGradEvl_oncolumnchanged = function(obj,e)
        {
        	// 라디오버튼 역할
        	if(e.columnid == "VSS") {
        		if(e.newvalue == "1") {
        			this.fn_uncheck(e.row, e.columnid);
        		}
        	} else if(e.columnid == "VMS") {
        		if(e.newvalue == "1") {
        			this.fn_uncheck(e.row, e.columnid);
        		}
        	} else if(e.columnid == "DMS") {
        		if(e.newvalue == "1") {
        			this.fn_uncheck(e.row, e.columnid);
        		}
        	} else if(e.columnid == "DLS") {
        		if(e.newvalue == "1") {
        			this.fn_uncheck(e.row, e.columnid);
        		}
        	} else if(e.columnid == "VSA") {
        		if(e.newvalue == "1") {
        			this.fn_uncheck(e.row, e.columnid);
        		}
        	} else if(e.columnid == "VMA") {
        		if(e.newvalue == "1") {
        			this.fn_uncheck(e.row, e.columnid);
        		}
        	} else if(e.columnid == "DMA") {
        		if(e.newvalue == "1") {
        			this.fn_uncheck(e.row, e.columnid);
        		}
        	} else if(e.columnid == "DLA") {
        		if(e.newvalue == "1") {
        			this.fn_uncheck(e.row, e.columnid);
        		}
        	} else if(e.columnid == "VSB") {
        		if(e.newvalue == "1") {
        			this.fn_uncheck(e.row, e.columnid);
        		}
        	} else if(e.columnid == "VMB") {
        		if(e.newvalue == "1") {
        			this.fn_uncheck(e.row, e.columnid);
        		}
        	} else if(e.columnid == "DMB") {
        		if(e.newvalue == "1") {
        			this.fn_uncheck(e.row, e.columnid);
        		}
        	} else if(e.columnid == "DLB") {
        		if(e.newvalue == "1") {
        			this.fn_uncheck(e.row, e.columnid);
        		}
        	} else if(e.columnid == "VSC") {
        		if(e.newvalue == "1") {
        			this.fn_uncheck(e.row, e.columnid);
        		}
        	} else if(e.columnid == "VMC") {
        		if(e.newvalue == "1") {
        			this.fn_uncheck(e.row, e.columnid);
        		}
        	} else if(e.columnid == "DMC") {
        		if(e.newvalue == "1") {
        			this.fn_uncheck(e.row, e.columnid);
        		}
        	} else if(e.columnid == "DLC") {
        		if(e.newvalue == "1") {
        			this.fn_uncheck(e.row, e.columnid);
        		}
        	} else if(e.columnid == "VSD") {
        		if(e.newvalue == "1") {
        			this.fn_uncheck(e.row, e.columnid);
        		}
        	} else if(e.columnid == "VMD") {
        		if(e.newvalue == "1") {
        			this.fn_uncheck(e.row, e.columnid);
        		}
        	} else if(e.columnid == "DMD") {
        		if(e.newvalue == "1") {
        			this.fn_uncheck(e.row, e.columnid);
        		}
        	} else if(e.columnid == "DLD") {
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
         * 함수명  	: grd_lwdrRwardGradEvl_onexpandup
         * 설명 		: 그리드 버튼 클릭 후 이벤트 처리(Popup)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.grd_lwdrRwardGradEvl_onexpandup(obj,e);
         */
        this.grd_lwdrRwardGradEvl_onexpandup = function(obj,e)
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
        	var addRow = this.ds_lwdrRwardGradEvl.addRow();
        	this.ds_lwdrRwardGradEvl.setColumn(addRow, "YYYYMM", yyyymm);
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
        	var dRow = this.ds_lwdrRwardGradEvl.rowposition;
        	
        	if(dRow < 0) {
        		this.gfn_message("comm.데이터.선택.없음");
        		return false;
        	}
        	if(!this.gfn_message("confirm.삭제여부")) {
        		return false;	// 아니오
        	}
        	
        	this.ds_lwdrRwardGradEvl.deleteRow(dRow);
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
        	if(Ex.util.isUpdated(this.ds_lwdrRwardGradEvl)) {
        		if(!this.gfn_message("confirm.변경.취소.여부")) {
        			return false;	// 아니오
        		}
        		this.ds_lwdrRwardGradEvl.reset();
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
        	this.ds_lwdrRwardGradEvl.set_enableevent(false);
        	
        	// 전체 체크 해제
        	this.ds_lwdrRwardGradEvl.setColumn(idx, "VSS", "0");
        	this.ds_lwdrRwardGradEvl.setColumn(idx, "VMS", "0");
        	this.ds_lwdrRwardGradEvl.setColumn(idx, "DMS", "0");
        	this.ds_lwdrRwardGradEvl.setColumn(idx, "DLS", "0");
        	this.ds_lwdrRwardGradEvl.setColumn(idx, "VSA", "0");
        	this.ds_lwdrRwardGradEvl.setColumn(idx, "VMA", "0");
        	this.ds_lwdrRwardGradEvl.setColumn(idx, "DMA", "0");
        	this.ds_lwdrRwardGradEvl.setColumn(idx, "DLA", "0");
        	this.ds_lwdrRwardGradEvl.setColumn(idx, "VSB", "0");
        	this.ds_lwdrRwardGradEvl.setColumn(idx, "VMB", "0");
        	this.ds_lwdrRwardGradEvl.setColumn(idx, "DMB", "0");
        	this.ds_lwdrRwardGradEvl.setColumn(idx, "DLB", "0");
        	this.ds_lwdrRwardGradEvl.setColumn(idx, "VSC", "0");
        	this.ds_lwdrRwardGradEvl.setColumn(idx, "VMC", "0");
        	this.ds_lwdrRwardGradEvl.setColumn(idx, "DMC", "0");
        	this.ds_lwdrRwardGradEvl.setColumn(idx, "DLC", "0");
        	this.ds_lwdrRwardGradEvl.setColumn(idx, "VSD", "0");
        	this.ds_lwdrRwardGradEvl.setColumn(idx, "VMD", "0");
        	this.ds_lwdrRwardGradEvl.setColumn(idx, "DMD", "0");
        	this.ds_lwdrRwardGradEvl.setColumn(idx, "DLD", "0");
        	
        	// 선택된 컬럼만 체크
        	this.ds_lwdrRwardGradEvl.setColumn(idx, colId, "1");
        	
        	// 등급 세팅
        	this.ds_lwdrRwardGradEvl.setColumn(idx, "GRAD", colId);
        	
        	this.ds_lwdrRwardGradEvl.set_enableevent(true);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_lwdrRwardGradEvl.addEventHandler("cancolumnchange", this.ds_lwdrRwardGradEvl_cancolumnchange, this);
            this.ds_lwdrRwardGradEvl.addEventHandler("oncolumnchanged", this.ds_lwdrRwardGradEvl_oncolumnchanged, this);
            this.addEventHandler("oninit", this.HRM040102_oninit, this);
            this.addEventHandler("onload", this.HRM040102_onload, this);
            this.grd_lwdrRwardGradEvl.addEventHandler("onexpandup", this.grd_lwdrRwardGradEvl_onexpandup, this);

        };

        this.loadIncludeScript("HRM040102.xfdl");
        this.loadPreloadList();
       
    };
}
)();
