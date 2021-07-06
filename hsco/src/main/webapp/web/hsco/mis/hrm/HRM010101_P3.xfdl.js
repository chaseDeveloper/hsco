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
                this.set_name("HRM010101_P3");
                this.set_classname("HRM010101_P3");
                this.set_titletext("팀단위직제조회");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1080,750);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cond_pop", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_deptCode", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"UPPER_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LXTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_teamCode", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"UPPER_TEAM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_teamConstnt", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LXTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO_2\" type=\"STRING\" size=\"256\"/><Column id=\"OFCPSCD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_data", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_executive", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LXTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO_2\" type=\"STRING\" size=\"256\"/><Column id=\"OFCPSCD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grd", "absolute", "15", "76", null, null, "15", "15", this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_data");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("comboselect");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/></Band><Band id=\"body\"><Cell/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "15", "0", null, "15", "15", null, this);
            obj.set_taborder("3");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "0", "0", "15", null, null, "0", this);
            obj.set_taborder("4");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", null, "0", "15", null, "0", "0", this);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "15", "50", "25", "15", null, this);
            obj.set_taborder("18");
            obj.set_text("종료");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "15", "40", null, "10", "15", null, this);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "15", "50", "25", "68", null, this);
            obj.set_taborder("25");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "15", "50", "92", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_text("부서목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "15", "71", null, "5", "15", null, this);
            obj.set_taborder("29");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "15", null, null, "15", "15", "0", this);
            obj.set_taborder("30");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_acntCode", "absolute", "15", "20", "400", "19", null, null, this);
            obj.set_taborder("34");
            obj.set_text("(각 부서별 팀 목록을 관리합니다.)");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "50", "102", "21", "15", null, this);
            obj.set_taborder("35");
            obj.set_text("엑셀파일 전환");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1080, 750, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HRM010101_P3");
            		p.set_titletext("팀단위직제조회");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HRM010101_P3.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("HRM010101_P3.xfdl", "mis_lib::misUtil.xjs");
        this.registerScript("HRM010101_P3.xfdl", function() {
        /**********************************************************************
        * 화면ID   : HRM010101_P3.xfdl
        * 화면명   : 팀정보관리
        * 화면설명 : 장기공사변경을 조회하고 등록한다
        * 작성일   : 2015.10.30
        * 작성자   : 정윤원
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

        this.HRM010101_P3_oninit = function(obj,e)
        {
        	// form 초기화
        	this.fn_init_form();

        	// dataset 초기화
        	this.fn_init_dataset();
        }

        this.HRM010101_P3_onload = function(obj,e)
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
        	
        	// 검색조건 초기화
        	this.ds_cond_pop.clearData();
        	var nRow = this.ds_cond_pop.addRow();
        	
        	this.fn_search();
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
         * 설명 		: 조회 이벤트 처리(부서)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_search();
         */
        this.fn_search = function()
        {
        	// clear Datasets
        	this.ds_deptCode.clearData();
        	this.ds_teamCode.clearData();
        	this.ds_teamConstnt.clearData();
        	
        	// transaction
        	this.fn_transaction("select");
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
        		case "select":		// 부서 조회
        			var sController   	= "hsco/mis/hrm/HRM010101_P3/select.do";
        			var sInDatasets   	= "input1=ds_cond_pop";
        			var sOutDatasets  	= "ds_deptCode=output1 ds_teamCode=output2 ds_teamConstnt=output3 ds_executive=output4";
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
        	if(nErrorCode != 0) {
        		this.gfn_callback_message(strSvcId, nErrorCode, strErrorMsg);
        	}
        	
        	if (nErrorCode == 0){
        		switch(strSvcId) {
        			case "select":
        				this.fn_makeGrid();
        				break;
        		}
        	}
        }

        

        /**********************************************************************
        * non-Transaction 관련 컴포넌트 이벤트 처리 함수
        ***********************************************************************
        *
        * 1. Button 관련 이벤트 처리
        * 2. 사용자 정의 함수 처리
        * 
        ***********************************************************************/

        

        /**********************************************************************
        * Button 관련 이벤트 처리
        ***********************************************************************/

        /*
         * 함수명  	: btn_search_onclick
         * 설명 		: '조회' 버튼 클릭 후 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_search_onclick(obj,e);
         */
        this.btn_search_onclick = function(obj,e)
        {
        	// search transaction
        	this.fn_search();
        }

        
        /*
         * 함수명  	: btn_close_onclick
         * 설명 		: '종료' 버튼 클릭 후 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_close_onclick(obj,e);
         */
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        

        /**********************************************************************
        * 사용자 정의 함수 처리
        ***********************************************************************/

        /*
         * 함수명  	: fn_makeGrid
         * 설명 		: 조회결과를 이용하여, 직제 Grid 생성
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_makeGrid(obj,e);
         */
        this.fn_makeGrid = function()
        {
        	this.ds_deptCode.set_enableevent(false);
        	this.ds_teamCode.set_enableevent(false);
        	this.ds_teamConstnt.set_enableevent(false);
        	this.ds_data.set_enableevent(false);
        	this.grd.set_enableevent(false);
        	
        try {
        	this.grd.createFormat();
        	
        	var h11aRow = this.grd.appendContentsRow("head");
        	var h12aRow = this.grd.appendContentsRow("head");
        	
        	this.grd.setFormatRowProperty(h11aRow, "size", 40);	// 임원
        	this.grd.setFormatRowProperty(h12aRow, "size", 80);	// 임원
        	
        	this.grd.setCellProperty("Head", 0, "background",  "#ffffffff");
        	this.grd.setCellProperty("Head", 0, "background2", "#ffffffff");
        	this.grd.setCellProperty("Head", 0, "line", "1 solid #ffffffff, 1 solid #dedee0ff");
        	this.grd.setCellProperty("Head", 0 + this.grd.getFormatColCount(), "background",  "#ffffffff");
        	this.grd.setCellProperty("Head", 0 + this.grd.getFormatColCount(), "background2", "#ffffffff");
        	this.grd.setCellProperty("Head", 0 + this.grd.getFormatColCount(), "line", "1 solid #ffffffff, 1 solid #dedee0ff");
        	
        	var h1aRow = this.grd.appendContentsRow("head");
        	var h2aRow = this.grd.appendContentsRow("head");
        	var h3aRow = this.grd.appendContentsRow("head");
        	var b1aRow = this.grd.appendContentsRow("body");
        	
        	this.grd.setFormatRowProperty(h1aRow, "size", 40);	// 부서
        	this.grd.setFormatRowProperty(h2aRow, "size", 80);	// 부서장
        	this.grd.setFormatRowProperty(h3aRow, "size", 40);	// 팀
        	this.grd.setFormatRowProperty(b1aRow, "size", 80);	// 팀원
        	this.grd.setFormatColProperty(0, "size", 10);
        	
        	this.grd.setCellProperty("Head", 0 + this.grd.getFormatColCount()*2, "background",  "#ffffffff");
        	this.grd.setCellProperty("Head", 0 + this.grd.getFormatColCount()*2, "background2", "#ffffffff");
        	this.grd.setCellProperty("Head", 0 + this.grd.getFormatColCount()*2, "line", "1 solid #ffffffff, 1 solid #dedee0ff");
        	this.grd.setCellProperty("Head", 0 + this.grd.getFormatColCount()*3, "background",  "#ffffffff");
        	this.grd.setCellProperty("Head", 0 + this.grd.getFormatColCount()*3, "background2", "#ffffffff");
        	this.grd.setCellProperty("Head", 0 + this.grd.getFormatColCount()*3, "line", "1 solid #ffffffff, 1 solid #dedee0ff");
        	this.grd.setCellProperty("Head", 0 + this.grd.getFormatColCount()*4, "background",  "#ffffffff");
        	this.grd.setCellProperty("Head", 0 + this.grd.getFormatColCount()*4, "background2", "#ffffffff");
        	//this.grd.setCellProperty("Head", 0 + this.grd.getFormatColCount()*4, "line", "1 solid #ffffffff, 1 solid #dedee0ff");
        	
        	var executiveIdx = 0;
        	
        	// step1 : 부서를 기준으로 그리드 헤드 생성
        	for(var dRow = 0; dRow < this.ds_deptCode.getRowCount(); dRow++) {
        		var lvl = this.ds_deptCode.getColumn(dRow, "LVL");
        		if(lvl == 1) {
        			continue;
        		}
        		
        		var deptCode  = this.ds_deptCode.getColumn(dRow, "DEPT_CODE");
        		var deptNm    = this.ds_deptCode.getColumn(dRow, "DEPT_NM");
        		var teamCnt   = nexacro.toNumber(this.ds_deptCode.getColumn(dRow, "TEAM_CNT"),0,0,0);
        		
        		var empno     = this.ds_deptCode.getColumn(dRow, "EMPNO");
        		var empnm     = this.ds_deptCode.getColumn(dRow, "EMPNM");
        		var jssfcSe   = this.ds_deptCode.getColumn(dRow, "JSSFC_SE_NM");
        		var clsfSe    = this.ds_deptCode.getColumn(dRow, "HR_CLSF_SE_NM");
        		var rspofcSe  = this.ds_deptCode.getColumn(dRow, "RSPOFC_SE_NM");
        		var lxtnNo    = this.ds_deptCode.getColumn(dRow, "LXTN_NO");
        		var mobileNo  = this.comUtils.isNullThen(this.ds_deptCode.getColumn(dRow, "TELNO_2"      ), " ");
        		
        		var enter     = String.fromCharCode(10);
        		var cellVal   = empnm + enter + lxtnNo + enter + mobileNo;
        		if(!empno) {
        			cellVal = "";
        		}
        		
        		if(teamCnt > 0) {
        			for(var tRow = 0; tRow < this.ds_teamCode.getRowCount(); tRow++) {
        				var deptCode2 = this.ds_teamCode.getColumn(tRow, "DEPT_CODE");
        				if(deptCode == deptCode2) {
        					var teamCode  = this.ds_teamCode.getColumn(tRow, "TEAM_CODE");
        					var teamNm    = this.ds_teamCode.getColumn(tRow, "TEAM_NM");
        					
        					// Dataset Set
        					this.ds_data.addColumn("d_" + deptCode + teamCode);
        					
        					// Grid Set
        					var bCol = this.grd.appendContentsCol();
        					var colSize = nexacro.toNumber(deptCode.length,0) * 15 < 100 ? 100 : nexacro.toNumber(deptCode.length,0) * 15;
        					
        					this.grd.setFormatColProperty(bCol, "size", colSize);
        					
        					var cellVal2 = "";
        					var rspofcSe2 = "";
        					if(executiveIdx < this.ds_executive.rowcount){
        						var empno     = this.ds_executive.getColumn(executiveIdx, "EMPNO");
        						var empnm     = this.ds_executive.getColumn(executiveIdx, "EMPNM");
        						var lxtnNo    = this.ds_executive.getColumn(executiveIdx, "LXTN_NO");
        						var rspofcSe2  = this.ds_executive.getColumn(executiveIdx, "RSPOFC_SE_NM");
        						
        						var enter     = String.fromCharCode(10);
        						var cellVal2   = empnm + enter + lxtnNo;
        						if(!empno) {
        							cellVal2 = "";
        						}
        						executiveIdx++;
        					}
        					this.grd.setCellProperty("Head", bCol, "text", rspofcSe2);
        					this.grd.setCellProperty("Head", bCol + this.grd.getFormatColCount(), "text", cellVal2);
        					
        					this.grd.setCellProperty("Head", bCol, "line", "1 solid #dedee0ff, 1 solid #dedee0ff");
        					this.grd.setCellProperty("Head", bCol + this.grd.getFormatColCount(), "font", "9 Gulim");
        					this.grd.setCellProperty("Head", bCol + this.grd.getFormatColCount()*2, "line", "1 solid #dedee0ff, 1 solid #dedee0ff");
        					
        					this.grd.setCellProperty("Head", bCol + this.grd.getFormatColCount(), "background",  "#ffffffff");
        					this.grd.setCellProperty("Head", bCol + this.grd.getFormatColCount(), "background2", "#ffffffff");
        					
        					this.grd.setCellProperty("Head", bCol + this.grd.getFormatColCount()*2, "text", deptNm);
        					this.grd.setCellProperty("Head", bCol + this.grd.getFormatColCount()*3, "text", cellVal);
        					this.grd.setCellProperty("Head", bCol + this.grd.getFormatColCount()*4, "text", teamNm);
        					
        					this.grd.setCellProperty("Head", bCol + this.grd.getFormatColCount()*2, "line", "1 solid #dedee0ff, 1 solid #dedee0ff");
        					this.grd.setCellProperty("Head", bCol + this.grd.getFormatColCount()*3, "font", "9 Gulim");
        					this.grd.setCellProperty("Head", bCol + this.grd.getFormatColCount()*4, "line", "1 solid #dedee0ff, 1 solid #dedee0ff");
        					
        					this.grd.setCellProperty("Head", bCol + this.grd.getFormatColCount()*3, "background",  "#ffffffff");
        					this.grd.setCellProperty("Head", bCol + this.grd.getFormatColCount()*3, "background2", "#ffffffff");
        					
        					this.grd.setCellProperty("Body", bCol, "text", "bind:" + "d_" + deptCode + teamCode);
        				}
        			}
        		} else {
        			// Dataset Set
        			this.ds_data.addColumn("d_" + deptCode + "00");
        			
        			// Grid Set
        			var aCol = this.grd.appendContentsCol();
        			var colSize = nexacro.toNumber(deptNm.length,0) * 15 < 100 ? 100 : nexacro.toNumber(deptNm.length,0) * 15;
        			this.grd.setFormatColProperty(aCol, "size", colSize);
        			
        			var cellVal2 = "";
        			var rspofcSe2 = "";
        			if(executiveIdx < this.ds_executive.rowcount){
        				var empno     = this.ds_executive.getColumn(executiveIdx, "EMPNO");
        				var empnm     = this.ds_executive.getColumn(executiveIdx, "EMPNM");
        				var lxtnNo    = this.ds_executive.getColumn(executiveIdx, "LXTN_NO");
        				var rspofcSe2  = this.ds_executive.getColumn(executiveIdx, "RSPOFC_SE_NM");
        				
        				var enter     = String.fromCharCode(10);
        				var cellVal2   = empnm + enter + lxtnNo;
        				if(!empno) {
        					cellVal2 = "";
        				}
        				executiveIdx++;
        			}
        			this.grd.setCellProperty("Head", aCol, "text", rspofcSe2);
        			this.grd.setCellProperty("Head", aCol + this.grd.getFormatColCount(), "text", cellVal2);
        			
        			this.grd.setCellProperty("Head", aCol, "line", "1 solid #dedee0ff, 1 solid #dedee0ff");
        			this.grd.setCellProperty("Head", aCol + this.grd.getFormatColCount(), "font", "9 Gulim");
        			this.grd.setCellProperty("Head", aCol + this.grd.getFormatColCount()*2, "line", "1 solid #dedee0ff, 1 solid #dedee0ff");
        			
        			this.grd.setCellProperty("Head", aCol + this.grd.getFormatColCount(), "background",  "#ffffffff");
        			this.grd.setCellProperty("Head", aCol + this.grd.getFormatColCount(), "background2", "#ffffffff");
        			
        			this.grd.setCellProperty("Head", aCol + this.grd.getFormatColCount()*2, "text", deptNm);
        			this.grd.setCellProperty("Head", aCol + this.grd.getFormatColCount()*3, "text", cellVal);
        			this.grd.setCellProperty("Head", aCol + this.grd.getFormatColCount()*4, "text", teamNm);
        			
        			this.grd.setCellProperty("Head", aCol + this.grd.getFormatColCount()*2, "line", "1 solid #dedee0ff, 1 solid #dedee0ff");
        			this.grd.setCellProperty("Head", aCol + this.grd.getFormatColCount()*3, "font", "9 Gulim");
        			this.grd.setCellProperty("Head", aCol + this.grd.getFormatColCount()*4, "line", "1 solid #dedee0ff, 1 solid #dedee0ff");
        			
        			this.grd.setCellProperty("Head", aCol + this.grd.getFormatColCount()*3, "background",  "#ffffffff");
        			this.grd.setCellProperty("Head", aCol + this.grd.getFormatColCount()*3, "background2", "#ffffffff");
        			
        			this.grd.setCellProperty("Body", aCol, "text", "bind:" + "d_" + deptCode + "00");
        		}
        		
        		var dCol = this.grd.appendContentsCol();
        		this.grd.setFormatColProperty(dCol, "size", 10);
        		this.grd.setCellProperty("Head", dCol, "background",  "#ffffffff");
        		this.grd.setCellProperty("Head", dCol, "background2", "#ffffffff");
        		this.grd.setCellProperty("Head", dCol, "line", "1 solid #ffffffff, 1 solid #dedee0ff");
        		this.grd.setCellProperty("Head", dCol + this.grd.getFormatColCount(), "background",  "#ffffffff");
        		this.grd.setCellProperty("Head", dCol + this.grd.getFormatColCount(), "background2", "#ffffffff");
        		this.grd.setCellProperty("Head", dCol + this.grd.getFormatColCount(), "line", "1 solid #ffffffff, 1 solid #dedee0ff");
        		this.grd.setCellProperty("Head", dCol + this.grd.getFormatColCount()*2, "background",  "#ffffffff");
        		this.grd.setCellProperty("Head", dCol + this.grd.getFormatColCount()*2, "background2", "#ffffffff");
        		this.grd.setCellProperty("Head", dCol + this.grd.getFormatColCount()*2, "line", "1 solid #ffffffff, 1 solid #dedee0ff");
        		this.grd.setCellProperty("Head", dCol + this.grd.getFormatColCount()*3, "background",  "#ffffffff");
        		this.grd.setCellProperty("Head", dCol + this.grd.getFormatColCount()*3, "background2", "#ffffffff");
        		this.grd.setCellProperty("Head", dCol + this.grd.getFormatColCount()*3, "line", "1 solid #ffffffff, 1 solid #dedee0ff");
        		this.grd.setCellProperty("Head", dCol + this.grd.getFormatColCount()*4, "background",  "#ffffffff");
        		this.grd.setCellProperty("Head", dCol + this.grd.getFormatColCount()*4, "background2", "#ffffffff");
        	}

        	
        	// step2 : Data Input
        	for(var cRow = 0; cRow < this.ds_teamConstnt.getRowCount(); cRow++) {
        		var empno    = this.ds_teamConstnt.getColumn(cRow, "EMPNO");
        		var empnm    = this.ds_teamConstnt.getColumn(cRow, "EMPNM");
        			
        		var jssfcSe  = this.comUtils.isNullThen(this.ds_teamConstnt.getColumn(cRow, "JSSFC_SE_NM"  ), " ");
        		var clsfSe   = this.comUtils.isNullThen(this.ds_teamConstnt.getColumn(cRow, "HR_CLSF_SE_NM"), this.ds_teamConstnt.getColumn(cRow, "HR_CLSF_SE"));
        		var rspofcSe = this.comUtils.isNullThen(this.ds_teamConstnt.getColumn(cRow, "RSPOFC_SE_NM" ), " ");
        		var lxtnNo   = this.comUtils.isNullThen(this.ds_teamConstnt.getColumn(cRow, "LXTN_NO"      ), " ");
        		var mobileNo = this.comUtils.isNullThen(this.ds_teamConstnt.getColumn(cRow, "TELNO_2"      ), " ");
        		var ofcpscdNm = this.comUtils.isNullThen(this.ds_teamConstnt.getColumn(cRow, "OFCPSCD_NM"      ), " ");
        		
        		var deptCode = this.ds_teamConstnt.getColumn(cRow, "DEPT_CODE");
        		var teamCode = this.ds_teamConstnt.getColumn(cRow, "TEAM_CODE");
        		
        		if(!teamCode) {
        			teamCode = "00";
        		}
        		
        		var enter    = String.fromCharCode(10);
        		var cellVal  = ofcpscdNm + enter + empnm + enter + lxtnNo + enter + mobileNo;
        		if(!empno) {
        			cellVal = "";
        		}
        	
        		var exprRow = this.ds_data.findRowExpr("d_"+deptCode+teamCode + " == null");
        		
        		//mod.2016.07.14 
        		if(exprRow == -1) {
        			var nRow = this.ds_data.addRow();
        			this.ds_data.setColumn(nRow, "d_"+deptCode+teamCode, cellVal);		
        		}else{
        			this.ds_data.setColumn(exprRow, "d_"+deptCode+teamCode, cellVal);	
        		}
        			
        	}

        	this.fn_mergeCell('3');
        	this.fn_mergeCell('2');
        	
        	this.grd.mergeContentsCell("Head", 0, this.ds_executive.rowcount+2, 1, this.grd.getFormatColCount()-2, this.ds_executive.rowcount+2, false);
        	this.grd.setCellProperty("Head", this.ds_executive.rowcount+2, "background",  "#ffffffff");
        	this.grd.setCellProperty("Head", this.ds_executive.rowcount+2, "background2", "#ffffffff");
        	//this.grd.setCellProperty("Head", this.ds_executive.rowcount+2, "line", "1 solid #ffffffff, 1 solid #ffffffff, 1 solid #dedee0ff, 1 solid #ffffffff");
        	this.grd.setCellProperty("Head", this.ds_executive.rowcount+2, "line", "1 solid #dedee0ff, 1 solid #dedee0ff");
        	
        }catch(e) {
        	alert(e.message);
        }
        	
        	this.ds_deptCode.set_enableevent(true);
        	this.ds_teamCode.set_enableevent(true);
        	this.ds_teamConstnt.set_enableevent(true);
        	this.ds_data.set_enableevent(true);
        	this.grd.set_enableevent(true);
        	
        	this.ds_data.set_rowposition(0);
        }

        
        this.Button00_onclick = function(obj,e)
        {
        	this.gfn_exportExcel(this.grd, "excelFile");
        }

        
        this.fn_expExcel = function(targetGrid,sFileName)
        {
        	this.setWaitCursor(true,true);
        	var sExportObjName = "obj_commonExport";
        	var exportObj = new ExcelExportObject();
        	var dToday = new Date();
        	var sSheetName;
        // 	var sSvcUrl = application.services["svcurl"].url+"/com/XExportImport.do";
        	var sSvcUrl = application.services["svcurl"].url+"XExportImport.do";
        	exportObj.set_name(sExportObjName);
        	exportObj.addEventHandler("onsuccess", this._gfn_exportExcelEnd, this);
        	exportObj.addEventHandler("onerror", this._gfn_exportExcelEndError, this);
        	exportObj.clearExportItems(nexacro.ExportTypes.EXCEL2007);
        	
        	
        	if(!this.comUtils.isNullEmpty(sFileName)){
        		sFileName = dToday.getTime() + "_" + sFileName;
        	}else{
        		sFileName = dToday.getTime();
        	}
        	
        	if (targetGrid instanceof Grid) {
        	    sSheetName = "Sheet1!A1";
        	    exportObj.addExportItem(nexacro.ExportItemTypes.GRID, targetGrid, sSheetName,"allband","allrecord","suppress","onlyvalue","none","color","both", "cellline");
        	   //exportObj.addExportItem(nexacro.ExportItemTypes.GRID, targetGrid, "Sheet1!A1");
        	} else {
        	    for(var i=0; i<targetGrid.length; i++) {
        	        sSheetName = "A"+(i+1);
        	        oGrid = obj[i];
        	        exportObj.addExportItem(nexacro.ExportItemTypes.GRID, targetGrid,  sSheetName + "!A1","allband","allrecord","suppress","none","background","font", "both");
        	    }
        	}
        	
        	exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);	
        	exportObj.set_exportfilename(sFileName);
        	exportObj.set_exporturl(sSvcUrl);

        	var result = exportObj.exportData();
        }
        //========================
        // MOD. Merge
        //========================
        this.fn_mergeCell = function(strHead)
        {
        	var stIdx = -1;

        	for(var mRow = this.grd.getFormatColCount()*3-1; mRow >= this.grd.getFormatColCount()*2; mRow--) {
        		var bfText = this.grd.getCellProperty("Head", mRow-1, "text");
        		var nwText = this.grd.getCellProperty("Head", mRow,   "text");
        		var afText = this.grd.getCellProperty("Head", mRow+1, "text");
        		if(this.comUtils.isNullEmpty(afText) && nwText == bfText && stIdx == -1) {
        			stIdx = mRow;
        		}
        		if(this.comUtils.isNullEmpty(bfText) && stIdx != -1) {
        		    if (strHead == '2'){
        		    	this.grd.mergeContentsCell("Head", 2, mRow-this.grd.getFormatColCount()*2, 2, stIdx-this.grd.getFormatColCount()*2, mRow, false);   				
        		    	
        		    }else if (strHead == '3'){
        				this.grd.mergeContentsCell("Head", 3, mRow-this.grd.getFormatColCount()*2, 3, stIdx-this.grd.getFormatColCount()*2, mRow + this.grd.getFormatColCount(), false);
        		    }
        			stIdx = -1;
        		} 
        	}		
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.HRM010101_P3_onload, this);
            this.addEventHandler("oninit", this.HRM010101_P3_oninit, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("HRM010101_P3.xfdl");

       
    };
}
)();
