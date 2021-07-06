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
                this.set_name("HRM070124");
                this.set_classname("HRM070124");
                this.set_titletext("출/퇴근현황(근태기)");
                this._setFormPosition(0,0,1059,735);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dclzList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"WORK_DE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"BEGIN_TM\" type=\"STRING\" size=\"256\"/><Column id=\"END_TM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"WORK_DE\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DE2\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_validation", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">WORK_DE</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col><Col id=\"type\"/><Col id=\"nlength\"/><Col id=\"from\"/><Col id=\"to\"/><Col id=\"lengthChkGb\"/><Col id=\"msgId\">조회시작일자</Col><Col id=\"expr\"/><Col id=\"func\"/></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">WORK_DE2</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조회종료일자</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">WORK_DE</Col><Col id=\"to\">WORK_DE2</Col><Col id=\"msgId\">조회시작일자^조회종료일자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "0", null, "33", "28", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Box");
            this.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "0", "0", "15", "33", null, null, this.div_search);
            obj.set_taborder("10");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_gnfdDe", "absolute", "15", "6", "64", "19", null, null, this.div_search);
            obj.set_taborder("0");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("div_DeptComp", "absolute", "355", "5", "194", "21", null, null, this.div_search);
            obj.set_taborder("13");
            obj.set_async("false");
            obj.set_enable("false");
            obj.set_url("com::deptCode.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_empnm", "absolute", "318", "6", "35", "19", null, null, this.div_search);
            obj.set_taborder("14");
            obj.set_text("부서");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "301", "-1", "15", "33", null, null, this.div_search);
            obj.set_taborder("15");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "563", "5", "38", "21", null, null, this.div_search);
            obj.set_taborder("16");
            obj.set_text("성명");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "548", "-2", "15", "33", null, null, this.div_search);
            obj.set_taborder("17");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("div_EMP", "absolute", "599", "5", "168", "21", null, null, this.div_search);
            obj.set_taborder("18");
            obj.set_text("Div00");
            obj.set_async("false");
            obj.set_url("com::empno.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_workDe1", "absolute", "79", "6", "100", "19", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("19");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Essential");
            obj = new Static("Static00", "absolute", "184", "6", "10", "19", null, null, this.div_search);
            obj.set_taborder("20");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_workDe2", "absolute", "197", "6", "104", "19", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("21");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Essential");

            obj = new Div("div_work", "absolute", "0", "43", null, null, "28", "3", this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            obj = new Static("sta_gnfdList", "absolute", "0", "0", "120", "19", null, null, this.div_work);
            obj.set_taborder("0");
            obj.set_text("출/퇴근현황");
            obj.set_cssclass("sta_WF_Title02");
            obj.style.set_align("left middle");
            this.div_work.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "9", "483", null, "180", "7", null, this.div_work);
            obj.set_taborder("2");
            obj.set_binddataset("DS_TBHRM_WRKCP");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"168\"/><Column size=\"164\"/><Column size=\"151\"/><Column size=\"159\"/><Column size=\"165\"/><Column size=\"236\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"SANCTN_NO\"/><Cell col=\"1\" text=\"DRFT_STS\"/><Cell col=\"2\" text=\"DRFT_STS_IMG\"/><Cell col=\"3\" text=\"SANCTN_STS\"/><Cell col=\"4\" text=\"SANCTN_STS_IMG\"/><Cell col=\"5\" text=\"INTRLCK_IDNTFR\"/></Band><Band id=\"body\"><Cell text=\"bind:SANCTN_NO\"/><Cell col=\"1\" text=\"bind:DRFT_STS\"/><Cell col=\"2\" text=\"bind:DRFT_STS_IMG\"/><Cell col=\"3\" text=\"bind:SANCTN_STS\"/><Cell col=\"4\" text=\"bind:SANCTN_STS_IMG\"/><Cell col=\"5\" text=\"bind:INTRLCK_IDNTFR\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "19", "1031", "5", null, null, this.div_work);
            obj.set_taborder("8");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.div_work.addChild(obj.name, obj);
            obj = new Button("btn_dclzDtlsTrnsfer", "absolute", null, "0", "92", "19", "0", null, this.div_work);
            obj.set_taborder("9");
            obj.set_text("최신근태내역");
            obj.set_cssclass("btn_WF_Process");
            this.div_work.addChild(obj.name, obj);
            obj = new Grid("grd_dclzList", "absolute", "0", "24", null, null, "0", "0", this.div_work);
            obj.set_taborder("10");
            obj.set_binddataset("ds_dclzList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"77\"/><Column size=\"112\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"139\"/><Column size=\"134\"/><Column size=\"86\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"근무일\"/><Cell col=\"2\" text=\"부서명\"/><Cell col=\"3\" text=\"사원번호\"/><Cell col=\"4\" text=\"사원명\"/><Cell col=\"5\" text=\"출근시간\"/><Cell col=\"6\" text=\"퇴근시간\"/><Cell col=\"7\" text=\"인사관리여부\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:WORK_DE\"/><Cell col=\"2\" text=\"bind:DEPT_NM\"/><Cell col=\"3\" text=\"bind:EMPNO\"/><Cell col=\"4\" text=\"bind:EMPNM\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" text=\"bind:BEGIN_TM\" mask=\"expr:dataset.getColumn(currow, 'BEGIN_TM') != null ? '##:##' : ''\" maskchar=\" \"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" text=\"bind:END_TM\" mask=\"expr:dataset.getColumn(currow, 'END_TM') != null ? '##:##' : ''\" maskchar=\" \"/><Cell col=\"7\" text=\"bind:EMP_AT\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", null, "0", "450", "21", "95", null, this.div_work);
            obj.set_taborder("11");
            obj.set_text("검색조건에 지정된 날짜, 부서, 사원정보를 확인하여 주시기 바랍니다.");
            obj.style.set_color("red");
            obj.style.set_align("right middle");
            obj.style.set_font("9 Gulim bold");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "1031", "0", "15", "735", null, null, this);
            obj.set_taborder("15");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", null, "0", "13", "735", "0", null, this);
            obj.set_taborder("16");
            obj.set_text("스\r\n크\r\n롤\r\n13");
            obj.set_visible("false");
            obj.style.set_background("#d07b173c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "0", "33", "1031", "10", null, null, this);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
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
            obj = new Layout("default", "", 1031, 689, this.div_work,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");

            	}
            );
            this.div_work.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1059, 735, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HRM070124");
            		p.set_titletext("출/퇴근현황(근태기)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_search.cal_workDe1","value","ds_cond","WORK_DE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_search.cal_workDe2","value","ds_cond","WORK_DE2");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "com::deptCode.xfdl");
            this._addPreloadList("fdl", "com::empno.xfdl");
        };
        
        // User Script
        this.addIncludeScript("HRM070124.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("HRM070124.xfdl", "mis_lib::misUtil.xjs");
        this.registerScript("HRM070124.xfdl", function() {
        /***********************************************************************
         * 01. 업무구분 : 출/퇴근현황(근태기)
         * 02. 화면명   : HRM0701002.xfdl
         * 03. 화면설명 : 출/퇴근현황(근태기)을 조회한다.
         * 04. 작성일   : 2017.05.15
         * 05. 작성자   : 정  민
         * 06. 수정이력 : 
         ***********************************************************************
         *     수정일     작성자   내용
         ***********************************************************************
         *    2017.05.15  정  민    최초
         ***********************************************************************
         */

        /***********************************************************************
         * Script Include 
         ************************************************************************/
        //include "lib::comInclude.xjs";
        //include "mis_lib::misUtil.xjs";

        /***********************************************************************
         * onInit / onLoad 영역
         ***********************************************************************/
        this.HRM070124_oninit = function(obj,e)
        {
        	// ..
        }
        this.HRM070124_onload = function(obj,e)
        {
        	this.fn_init_form();
        	this.fn_init_dataset();
        	
        	// 검색조건 바인드
        	this.div_search.div_EMP.fn_setBind("ds_cond", "EMPNO", "EMPNM");
        	this.div_search.div_DeptComp.fn_setBind("ds_cond", "DEPT_CODE", "DEPT_NM");
        	this.div_search.div_DeptComp.fn_setReadonly(true);
        	
        	this.ds_cond.clearData();
        	this.ds_cond.addRow();
        	this.ds_cond.setColumn(0, "WORK_DE"  , this.dateUtils.format(this.gfn_today(),"yyyymmdd"));	
        	this.ds_cond.setColumn(0, "WORK_DE2" , this.dateUtils.format(this.gfn_today(),"yyyymmdd"));
        	this.ds_cond.setColumn(0, "DEPT_CODE", this.gfn_getDeptId());
        	this.ds_cond.setColumn(0, "DEPT_NM"  , this.gfn_getDeptName());
        	this.ds_cond.setColumn(0, "EMPNO"    , this.fn_getEmpno());
        	this.ds_cond.setColumn(0, "EMPNM"    , this.fn_getEmpnm());
        	
        	// 공통코드와 연계된 초기검색조건 설정
        	// 수정가능여부를 판별하기위해 권한그룹 체크
        	if(this.gfn_authGrpId("ALL_ADMIN") != -1 || this.gfn_authGrpId("AUD_ADMIN") != -1 || this.gfn_authGrpId("HRM_SRVIC") != -1) {
        		this.chargerAt = true;
        	}

        	// 수정가능한 경우 부서변경 가능
        	if(this.chargerAt){
        		this.div_search.div_DeptComp.set_enable(true);
        		this.div_search.div_DeptComp.fn_setReadonly(false);
        	}
        	
        	this.fn_search();
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

        	// 데이터셋 초기화
        	this.ds_cond.clearData();
        	this.ds_cond.addRow();

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
        	this.gfn_initCondDs(this, this.div_search);	
        }

        /***********************************************************************
         * 설명: 공통조회
         ************************************************************************/
        /*
        this.fn_loadCombo = function()
        {	
        }
        */

        
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
        	this.ds_dclzList.clearData();
        	
        	//validation 체크
            if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond, this.ds_validation)) {
                return;
            }
            
        	this.fn_transaction("selectDclzDtlsList");
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
        		case "selectDclzDtlsList":
        			var sController   	= "hsco/mis/hrm/HRM070124/selectDclzDtlsList.do";
        			var sInDatasets   	= "input1=ds_cond";
        			var sOutDatasets  	= "ds_dclzList=output1";
        			break;
        		case "dclzDtlsTrnsfer":
        			var sController   	= "hsco/mis/hrm/HRM070124/dclzDtlsTrnsfer.do";
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
        			case "selectDclzDtlsList":	
        				break;
        			case "dclzDtlsTrnsfer":	
        				this.gfn_message("success.처리.성공");
        				this.fn_search();
        				break;
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
         * 함수명  	: ds_cond_oncolumnchanged
         * 설명 		: ds_cond 데이터 변경 후 발생
         * params  		: None
         * return Type 	: None
         * 사용법		: this.ds_cond_oncolumnchanged();
         */
        this.ds_cond_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "DEPT_CODE"){
        		this.div_search.div_EMP.fn_set_deptCode(e.newvalue);
        	}
        }

        /**********************************************************************
        * Button 관련 이벤트 처리
        ***********************************************************************/

        
        /*
         * 함수명  	: div_work_brn_dclzDtlsTrnsfer_onclick
         * 설명 		: 최근근태내역조회
         * params  		: None
         * return Type 	: None
         * 사용법		: this.div_work_brn_dclzDtlsTrnsfer_onclick();
         */
        this.div_work_btn_dclzDtlsTrnsfer_onclick = function(obj,e)
        {
        	var msg = "";
        	msg += "해당 버튼 클릭 시,";
        	msg += "\n\n";
        	msg += "신청하신 초과근무내역이 존재할 경우 초과근무 내역을 재계산하므로" + "\n" + "변조의 위험이 존재합니다.";
        	msg += "\n\n";
        	msg += "검색조건에 지정된 날짜, 부서, 사원정보를 확인하여 주시기 바랍니다.";
        	msg += "\n";
        	msg += "\n";
        	msg += "계속 진행하시겠습니까?";
        	
        	if(application.confirm(msg)) {
        		this.fn_transaction("dclzDtlsTrnsfer");
        	}
        }

        /**********************************************************************
        * Grid 관련 이벤트 처리
        ***********************************************************************/

        /**********************************************************************
        * 공통함수 처리
        ***********************************************************************/

        /**********************************************************************
        * Tab 관련 이벤트 처리
        ***********************************************************************/

        /**********************************************************************
        * Popup 관련 이벤트 처리
        ***********************************************************************/

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_cond.addEventHandler("oncolumnchanged", this.ds_cond_oncolumnchanged, this);
            this.addEventHandler("onload", this.HRM070124_onload, this);
            this.addEventHandler("oninit", this.HRM070124_oninit, this);
            this.div_search.div_EMP.addEventHandler("onkeyup", this.div_SEARCH_div_EMP_onkeyup, this);
            this.div_work.btn_dclzDtlsTrnsfer.addEventHandler("onclick", this.div_work_btn_dclzDtlsTrnsfer_onclick, this);

        };

        this.loadIncludeScript("HRM070124.xfdl");
        this.loadPreloadList();
       
    };
}
)();
