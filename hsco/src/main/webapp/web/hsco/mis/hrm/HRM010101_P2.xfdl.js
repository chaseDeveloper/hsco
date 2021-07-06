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
                this.set_name("HRM010101_P2");
                this.set_classname("HRM010101_P2");
                this.set_titletext("팀별인원관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,850,750);
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

            obj = new Dataset("ds_cond_sub", this);
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
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"UPPER_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_hrMastr", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grd_entrpsCntrctAssrncCha", "absolute", "15", "76", "332", null, null, "15", this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_deptCode");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("comboselect");
            obj.set_treeinitstatus("expand,all");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"232\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"부서\"/><Cell col=\"2\" text=\"팀 건수\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"tree\" edittype=\"tree\" text=\"bind:DEPT_NM2\" treelevel=\"bind:LVL\"/><Cell col=\"2\" style=\"align:center middle;\" text=\"bind:TEAM_CNT\"/></Band></Format></Formats>");
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

            obj = new Button("btn_save", "absolute", null, "15", "50", "25", "68", null, this);
            obj.set_taborder("17");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
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

            obj = new Button("btn_search", "absolute", null, "15", "50", "25", "121", null, this);
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

            obj = new Static("Static42", "absolute", "347", "76", "10", null, null, "15", this);
            obj.set_taborder("31");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "357", "50", "188", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("부서별 구성인원(팀 미지정)");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("sta_acntCode", "absolute", "15", "20", "400", "19", null, null, this);
            obj.set_taborder("34");
            obj.set_text("(각 부서별 팀 목록을 관리합니다.)");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_entrpsCntrctAssrncCha00", "absolute", "357", "76", null, "292", "15", null, this);
            obj.set_taborder("38");
            obj.set_binddataset("ds_hrMastr");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("comboselect");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"부서\"/><Cell col=\"2\" text=\"사원번호\"/><Cell col=\"3\" text=\"사원명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"combo\" style=\"align:left middle;selectbackground:#ffffffff;\" text=\"bind:DEPT_CODE\" suppress=\"1\" combodataset=\"ds_deptCode\" combocodecol=\"DEPT_CODE\" combodatacol=\"DEPT_NM2\"/><Cell col=\"2\" text=\"bind:EMPNO\"/><Cell col=\"3\" text=\"bind:EMPNM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_entrpsCntrctAssrncCha01", "absolute", "357", "435", null, null, "15", "15", this);
            obj.set_taborder("43");
            obj.set_binddataset("ds_teamConstnt");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("comboselect");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"40\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"부서\"/><Cell col=\"2\" colspan=\"2\" text=\"팀\"/><Cell col=\"4\" text=\"사원번호\"/><Cell col=\"5\" text=\"사원명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"combo\" style=\"align:left middle;selectbackground:#ffffffff;\" text=\"bind:DEPT_CODE\" suppress=\"1\" combodataset=\"ds_deptCode\" combocodecol=\"DEPT_CODE\" combodatacol=\"DEPT_NM2\"/><Cell col=\"2\" style=\"selectbackground:#ffffffff;\" text=\"bind:TEAM_CODE\" suppress=\"2\"/><Cell col=\"3\" displaytype=\"combo\" style=\"align:left middle;\" text=\"bind:TEAM_CODE\" combodataset=\"ds_teamCode\" combocodecol=\"TEAM_CODE\" combodatacol=\"TEAM_NM2\"/><Cell col=\"4\" text=\"bind:EMPNO\"/><Cell col=\"5\" text=\"bind:EMPNM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "357", "430", null, "5", "15", null, this);
            obj.set_taborder("44");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "357", "409", "188", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_text("팀별 구성인원");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "357", "399", null, "10", "15", null, this);
            obj.set_taborder("46");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "357", "368", null, "10", "15", null, this);
            obj.set_taborder("47");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", "479", "378", "25", "21", null, null, this);
            obj.set_taborder("48");
            obj.set_text("▲");
            this.addChild(obj.name, obj);

            obj = new Button("btn_set", "absolute", "690", "378", "25", "21", null, null, this);
            obj.set_taborder("49");
            obj.set_text("▼");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_teamCode", "absolute", "506", "378", "182", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("50");
            obj.set_innerdataset("@ds_teamCode");
            obj.set_codecolumn("TEAM_CODE");
            obj.set_datacolumn("TEAM_NM2");
            obj.set_displaynulltext("지정가능한 팀이 없습니다");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 850, 750, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HRM010101_P2");
            		p.set_titletext("팀별인원관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HRM010101_P2.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("HRM010101_P2.xfdl", "mis_lib::misUtil.xjs");
        this.registerScript("HRM010101_P2.xfdl", function() {
        /**********************************************************************
        * 화면ID   : HRM010101_P2.xfdl
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

        this.HRM010101_P2_oninit = function(obj,e)
        {
        	// form 초기화
        	this.fn_init_form();

        	// dataset 초기화
        	this.fn_init_dataset();
        }

        this.HRM010101_P2_onload = function(obj,e)
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
        	this.ds_teamCode.clearData();
        	this.ds_hrMastr.clearData();
        	this.ds_teamConstnt.clearData();
        	this.ds_deptCode.clearData();
        	
        	// transaction
        	this.fn_transaction("select");
        }

        
        /*
         * 함수명  	: fn_search_sub
         * 설명 		: 조회 이벤트 처리(팀)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_search_sub();
         */
        this.fn_search_sub = function()
        {
        	var dcRow = this.ds_deptCode.rowposition;
        	var deptCode = this.ds_deptCode.getColumn(dcRow, "DEPT_CODE");
        	
        	this.ds_cond_sub.clearData();
        	var nRow = this.ds_cond_sub.addRow();
        	this.ds_cond_sub.setColumn(nRow, "DEPT_CODE", deptCode);
        	
        	// clear Datasets
        	this.ds_teamCode.clearData();
        	this.ds_hrMastr.clearData();
        	this.ds_teamConstnt.clearData();
        	
        	// transaction
        	this.fn_transaction("selectSub");
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
        			var sController   	= "hsco/mis/hrm/HRM010101_P2/select.do";
        			var sInDatasets   	= "input1=ds_cond_pop";
        			var sOutDatasets  	= "ds_deptCode=output1";
        			break;
        		case "selectSub":		// 팀 조회
        			var sController   	= "hsco/mis/hrm/HRM010101_P2/selectSub.do";
        			var sInDatasets   	= "input1=ds_cond_sub";
        			var sOutDatasets  	= "ds_teamCode=output1 ds_hrMastr=output2 ds_teamConstnt=output3";
        			break;
        		case "save": 		// 팀 저장
        			var sController   	= "hsco/mis/hrm/HRM010101_P2/save.do";
        			var sInDatasets   	= "input1=ds_teamConstnt:U";
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
        	if(nErrorCode != 0) {
        		this.gfn_callback_message(strSvcId, nErrorCode, strErrorMsg);
        	}
        	
        	if (nErrorCode == 0){
        		switch(strSvcId) {
        			case "select":
        				break;
        			case "selectSub":
        				this.cmb_teamCode.set_index(0);
        				break;
        			case "save":
        				this.fn_search();
        				break;
        		}
        	}
        }

        

        /**********************************************************************
        * non-Transaction 관련 컴포넌트 이벤트 처리 함수
        ***********************************************************************
        *
        * 1. Grid 관련 이벤트 처리
        * 2. Dataset 관련 이벤트 처리
        * 3. Button 관련 이벤트 처리
        * 
        ***********************************************************************/

        

        /**********************************************************************
        * Grid 관련 이벤트 처리
        ***********************************************************************/
        this.grd_onheadclick = function(obj,e)
        {
        	if(e.col == '0') {
        		this.gfn_setGridCheckAll(obj, e);
        	}
        }

        
        /**********************************************************************
        * Dataset 관련 이벤트 처리
        ***********************************************************************/

        /*
         * 함수명  	: ds_deptCode_canrowposchange
         * 설명 		: Dataset 행 변경 전 이벤트 처리(부서코드 dataset) 
         * params  		: None
         * return Type 	: None
         * 사용법		: this.ds_deptCode_canrowposchange(obj,e);
         */
        this.ds_deptCode_canrowposchange = function(obj,e)
        {
        	if(Ex.util.isUpdated(this.ds_teamConstnt)) {
        		if(!this.gfn_message("confirm.변경.취소.여부")) {
        			return false;	// 아니오
        		}
        	}
        }

        
        /*
         * 함수명  	: ds_frmtnPd_onrowposchanged
         * 설명 		: Dataset 행 변경 후 이벤트 처리(부서코드 dataset) 
         * params  		: None
         * return Type 	: None
         * 사용법		: this.ds_frmtnPd_onrowposchanged(obj,e);
         */
        this.ds_deptCode_onrowposchanged = function(obj,e)
        {
        	if(e.newrow > -1) {
        		this.fn_search_sub();	// 세부사업별 구분회계 조회
        	}
        }

        

        /**********************************************************************
        * Button 관련 이벤트 처리
        ***********************************************************************/

        /*
         * 함수명  	: btn_set_onclick
         * 설명 		: '▼' 버튼 클릭 후 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_set_onclick(obj,e);
         */
        this.btn_set_onclick = function(obj,e)
        {
        	if(this.ds_hrMastr.getRowCount() == 0) {
        		this.gfn_message("info.처리불가", "부서별 구성인원이 존재하지 않습니다.");
        		return false;
        	}
        	
        	if(this.ds_teamCode.getRowCount() == 0) {
        		this.gfn_message("info.처리불가", "지정가능한 팀이 없습니다.");
        		return false;
        	}
        	
        	
        	for(var fRow = this.ds_hrMastr.getRowCount()-1; fRow >= 0; fRow--) {
        		var chk = this.ds_hrMastr.getColumn(fRow, "CHK");
        		if(chk == '1') {
        			var deptCode = this.ds_hrMastr.getColumn(fRow, "DEPT_CODE");
        			var empno    = this.ds_hrMastr.getColumn(fRow, "EMPNO");
        			var empnm    = this.ds_hrMastr.getColumn(fRow, "EMPNM");
        			var teamCode = this.cmb_teamCode.value;
        			
        			var nRow = this.ds_teamConstnt.addRow();
        			this.ds_teamConstnt.setColumn(nRow, "DEPT_CODE", deptCode );
        			this.ds_teamConstnt.setColumn(nRow, "TEAM_CODE", teamCode );
        			this.ds_teamConstnt.setColumn(nRow, "EMPNO",     empno    );
        			this.ds_teamConstnt.setColumn(nRow, "EMPNM",     empnm    );
        			
        			this.ds_hrMastr.deleteRow(fRow);
        		}
        	}
        }

        
        /*
         * 함수명  	: btn_cancel_onclick
         * 설명 		: '▲' 버튼 클릭 후 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_cancel_onclick(obj,e);
         */
        this.btn_cancel_onclick = function(obj,e)
        {
        	if(this.ds_teamConstnt.getRowCount() == 0) {
        		this.gfn_message("info.처리불가", "팀별 구성인원이 존재하지 않습니다.");
        		return false;
        	}
        	
        	if(this.ds_teamCode.getRowCount() == 0) {
        		this.gfn_message("info.처리불가", "지정가능한 팀이 없습니다.");
        		return false;
        	}
        	
        	for(var fRow = this.ds_teamConstnt.getRowCount()-1; fRow >= 0; fRow--) {
        		var chk = this.ds_teamConstnt.getColumn(fRow, "CHK");
        		if(chk == '1') {
        			var deptCode = this.ds_teamConstnt.getColumn(fRow, "DEPT_CODE");
        			var empno    = this.ds_teamConstnt.getColumn(fRow, "EMPNO");
        			var empnm    = this.ds_teamConstnt.getColumn(fRow, "EMPNM");
        			
        			var nRow = this.ds_hrMastr.addRow();
        			this.ds_hrMastr.setColumn(nRow, "DEPT_CODE", deptCode );
        			this.ds_hrMastr.setColumn(nRow, "EMPNO",     empno    );
        			this.ds_hrMastr.setColumn(nRow, "EMPNM",     empnm    );
        			
        			this.ds_teamConstnt.deleteRow(fRow);
        		}
        	}
        }

        
        /*
         * 함수명  	: btn_search_onclick
         * 설명 		: '조회' 버튼 클릭 후 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_search_onclick(obj,e);
         */
        this.btn_search_onclick = function(obj,e)
        {
        	// confirm
        	if(this.comUtils.isDatasetUpdated(this.ds_teamConstnt)) {
        		if(!this.gfn_message("confirm.변경.취소.여부")) {
        			return false;
        		}
        	}
        	
        	// search transaction
        	this.fn_search();
        }

        
        /*
         * 함수명  	: btn_delete_onclick
         * 설명 		: '저장' 버튼 클릭 후 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_delete_onclick(obj,e);
         */
        this.btn_save_onclick = function(obj,e)
        {
        // 	// validation check
        // 	if(!this.gfn_checkValidation(this., this.ds_validation)) {
        // 		return false;
        // 	}
        	
        	// save
        	if(this.gfn_message("confirm.저장.여부"))	{
        		this.fn_transaction("save");
        	}
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

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_deptCode.addEventHandler("onrowposchanged", this.ds_deptCode_onrowposchanged, this);
            this.ds_deptCode.addEventHandler("canrowposchange", this.ds_deptCode_canrowposchange, this);
            this.addEventHandler("onload", this.HRM010101_P2_onload, this);
            this.addEventHandler("oninit", this.HRM010101_P2_oninit, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.grd_entrpsCntrctAssrncCha00.addEventHandler("onheadclick", this.grd_onheadclick, this);
            this.grd_entrpsCntrctAssrncCha01.addEventHandler("onheadclick", this.grd_onheadclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);
            this.btn_set.addEventHandler("onclick", this.btn_set_onclick, this);

        };

        this.loadIncludeScript("HRM010101_P2.xfdl");

       
    };
}
)();
