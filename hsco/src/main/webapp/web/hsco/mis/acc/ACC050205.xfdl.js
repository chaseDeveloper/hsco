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
                this.set_name("ACC050205");
                this.set_classname("ACC050205");
                this.set_titletext("자금일보(일자별)");
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
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACNUTNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_result", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj.set_keystring("G:SE+SE_NM+ACCNUT_ACNT_NM");
            obj._setContents("<ColumnInfo><Column id=\"SE\" type=\"STRING\" size=\"256\"/><Column id=\"SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCNUT_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCNUT_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ACNUTNO\" type=\"STRING\" size=\"256\"/><Column id=\"LAG_ACNUTNO\" type=\"STRING\" size=\"256\"/><Column id=\"ACNUT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACNUT_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHIT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RANK\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_JAN_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEBTOR_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CRDIT_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"JAN_AMT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">YEAR</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">회계년도</Col></Row><Row><Col id=\"colId\">ST_DT</Col><Col id=\"compId\">ds_cond</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조회시작일자^조회종료일자</Col><Col id=\"from\">ST_DT</Col><Col id=\"to\">ED_DT</Col><Col id=\"nlength\">8</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">ED_DT</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조회시작일자^조회종료일자</Col><Col id=\"from\">ST_DT</Col><Col id=\"to\">ED_DT</Col><Col id=\"nlength\">8</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">ACNUTNO</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">계좌번호</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_print", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "0", null, "33", "28", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Box");
            this.addChild(obj.name, obj);
            obj = new Static("sta_YEAR", "absolute", "15", "5", "64", "21", null, null, this.div_search);
            obj.set_taborder("30");
            obj.set_text("회계년도");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static36", "absolute", "578", "0", "38", "5", null, null, this.div_search);
            obj.set_taborder("56");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#fa794f66");
            obj.style.set_align("center middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "0", "5", "15", "46", null, null, this.div_search);
            obj.set_taborder("58");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "578", "26", "38", "5", null, null, this.div_search);
            obj.set_taborder("59");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#fa794f66");
            obj.style.set_align("center middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_YEAR00", "absolute", "154", "5", "64", "21", null, null, this.div_search);
            obj.set_taborder("61");
            obj.set_text("조회일자");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_ED_DT", "absolute", "349", "5", "110", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj.set_cssclass("cal_WF_Essential");
            obj = new Static("Static01", "absolute", "139", "5", "15", "21", null, null, this.div_search);
            obj.set_taborder("65");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Spin("spn_YEAR", "absolute", "79", "5", "60", "21", null, null, this.div_search);
            obj.set_taborder("0");
            obj.set_value("0");
            obj.style.set_buttonsize("15");
            obj.set_cssclass("spn_WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_BUDGET_SE00", "absolute", "474", "5", "64", "21", null, null, this.div_search);
            obj.set_taborder("66");
            obj.set_text("계좌번호");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_KEWORD", "absolute", "538", "5", "224", "21", null, null, this.div_search);
            obj.set_taborder("67");
            obj.set_cssclass("edt_WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("searchCond", "absolute", "741", "5", "21", "21", null, null, this.div_search);
            obj.set_taborder("68");
            obj.set_cssclass("btn_WF_Search");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "459", "0", "15", null, null, "0", this.div_search);
            obj.set_taborder("69");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_ST_DT", "absolute", "221", "5", "110", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("70");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Essential");
            obj = new Static("Static03", "absolute", "335", "6", "9", "21", null, null, this.div_search);
            obj.set_taborder("71");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "1031", "0", "15", "735", null, null, this);
            obj.set_taborder("35");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", null, "0", "13", "735", "0", null, this);
            obj.set_taborder("36");
            obj.set_text("스\r\n크\r\n롤\r\n13");
            obj.set_visible("false");
            obj.style.set_background("#d07b173c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "0", "43", null, "19", "908", null, this);
            obj.set_taborder("39");
            obj.set_text("자금일보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "0", "62", null, "5", "28", null, this);
            obj.set_taborder("41");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "33", null, "10", "28", null, this);
            obj.set_taborder("42");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_result", "absolute", "0", "67", null, null, "28", "0", this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_result");
            obj.set_cellsizingtype("row");
            obj.set_cellmovingtype("col");
            obj.set_autosizingtype("none");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"300\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"자금구분\"/><Cell col=\"1\" text=\"계정과목\"/><Cell col=\"2\" text=\"사업\"/><Cell col=\"3\" text=\"내역\"/><Cell col=\"4\" text=\"일자\"/><Cell col=\"5\" text=\"전일잔액\"/><Cell col=\"6\" text=\"차변금액\"/><Cell col=\"7\" text=\"대변금액\"/><Cell col=\"8\" text=\"당일잔액\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" text=\"bind:SE_NM\" suppress=\"1\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"normal\" text=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;( 계 )&quot; : dataset.getColumn(currow, &quot;ACCNUT_ACNT_NM&quot;)\" suppress=\"2\"/><Cell col=\"2\" rowspan=\"2\" style=\"align:left middle;\" text=\"bind:BSNS_NM\" suppress=\"3\"/><Cell col=\"3\" rowspan=\"2\" style=\"align:left;\" text=\"bind:ACNUT_NM2\" suppress=\"4\"/><Cell col=\"4\" rowspan=\"2\" displaytype=\"date\" text=\"bind:CHIT_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" rowspan=\"2\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:PRE_JAN_AMT\"/><Cell col=\"6\" rowspan=\"2\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:DEBTOR_AMOUNT\"/><Cell col=\"7\" rowspan=\"2\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:CRDIT_AMOUNT\"/><Cell col=\"8\" rowspan=\"2\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:JAN_AMT\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"[예적금(채권)계]\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\" displaytype=\"number\" text=\"expr:dataset.getCaseSum(&quot;ACNT_TYPE == 'TYPE_A'&quot;,&quot;PRE_JAN_AMT&quot;)\"/><Cell col=\"6\" displaytype=\"number\" text=\"expr:dataset.getCaseSum(&quot;ACNT_TYPE == 'TYPE_A'&quot;,&quot;DEBTOR_AMOUNT&quot;)\"/><Cell col=\"7\" displaytype=\"number\" text=\"expr:dataset.getCaseSum(&quot;ACNT_TYPE == 'TYPE_A'&quot;,&quot;CRDIT_AMOUNT&quot;)\"/><Cell col=\"8\" displaytype=\"number\" text=\"expr:dataset.getCaseSum(&quot;ACNT_TYPE == 'TYPE_A'&quot;,&quot;JAN_AMT&quot;)\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\" text=\"[차입금(채무)계]\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\"/><Cell row=\"1\" col=\"4\"/><Cell row=\"1\" col=\"5\" displaytype=\"number\" text=\"expr:dataset.getCaseSum(&quot;ACNT_TYPE == 'TYPE_B'&quot;,&quot;PRE_JAN_AMT&quot;)\"/><Cell row=\"1\" col=\"6\" displaytype=\"number\" text=\"expr:dataset.getCaseSum(&quot;ACNT_TYPE == 'TYPE_B'&quot;,&quot;DEBTOR_AMOUNT&quot;)\"/><Cell row=\"1\" col=\"7\" displaytype=\"number\" text=\"expr:dataset.getCaseSum(&quot;ACNT_TYPE == 'TYPE_B'&quot;,&quot;CRDIT_AMOUNT&quot;)\"/><Cell row=\"1\" col=\"8\" displaytype=\"number\" text=\"expr:dataset.getCaseSum(&quot;ACNT_TYPE == 'TYPE_B'&quot;,&quot;JAN_AMT&quot;)\"/><Cell row=\"2\"/><Cell row=\"2\" col=\"1\" text=\"[차　감　잔　액]\"/><Cell row=\"2\" col=\"2\"/><Cell row=\"2\" col=\"3\"/><Cell row=\"2\" col=\"4\"/><Cell row=\"2\" col=\"5\" displaytype=\"number\" text=\"expr:dataset.getCaseSum(&quot;ACNT_TYPE == 'TYPE_A'&quot;,&quot;PRE_JAN_AMT&quot;)-dataset.getCaseSum(&quot;ACNT_TYPE == 'TYPE_B'&quot;,&quot;PRE_JAN_AMT&quot;)\"/><Cell row=\"2\" col=\"6\" displaytype=\"number\" text=\"expr:dataset.getCaseSum(&quot;ACNT_TYPE == 'TYPE_A'&quot;,&quot;DEBTOR_AMOUNT&quot;)-dataset.getCaseSum(&quot;ACNT_TYPE == 'TYPE_B'&quot;,&quot;DEBTOR_AMOUNT&quot;)\"/><Cell row=\"2\" col=\"7\" displaytype=\"number\" text=\"expr:dataset.getCaseSum(&quot;ACNT_TYPE == 'TYPE_A'&quot;,&quot;CRDIT_AMOUNT&quot;)-dataset.getCaseSum(&quot;ACNT_TYPE == 'TYPE_B'&quot;,&quot;CRDIT_AMOUNT&quot;)\"/><Cell row=\"2\" col=\"8\" displaytype=\"number\" text=\"expr:dataset.getCaseSum(&quot;ACNT_TYPE == 'TYPE_A'&quot;,&quot;JAN_AMT&quot;)-dataset.getCaseSum(&quot;ACNT_TYPE == 'TYPE_B'&quot;,&quot;JAN_AMT&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDn", "absolute", null, "43", "25", "19", "28", null, this);
            obj.set_taborder("43");
            obj.set_cssclass("btn_WF_Gridexceldn");
            obj.set_visible("false");
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
            		p.set_classname("ACC050205");
            		p.set_titletext("자금일보(일자별)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item4","div_search.cal_ED_DT","value","ds_cond","ED_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","div_search.spn_YEAR","value","ds_cond","YEAR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_search.edt_KEWORD","value","ds_cond","ACNUTNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_search.cal_ST_DT","value","ds_cond","ST_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("ACC050205.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("ACC050205.xfdl", "mis_lib::misUtil.xjs");
        this.registerScript("ACC050205.xfdl", function() {
        /**********************************************************************
        * 화면ID	: ACC050205.xfdl
        * 화면명	: 자금일보(일자별)
        * 화면설명	: 자금일보(일자별)를 조회한다.
        * 작성일	: 2020.11.23
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

        

        /**********************************************************************
        * onInit / onLoad 영역
        ***********************************************************************/
        this.ACC050205_onload = function(obj,e)
        {
        	// Form 초기화
        	this.fn_init_form();
        	this.fn_misFormInit(this);

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
        	this.gfn_initForm(this);	// 시스템 공통으로 Form을 Initialize 한다.
        	
        	var objDate   = new Date(this.comUtils.getClientDate("YYYY")+"-"+this.comUtils.getClientDate("MM")+"-01");
            var nStartDay = objDate.getDay();	// 요일
        	var nLastDay  = this.dateUtils.getLastDay(objDate).getDate();
        	
        	this.ds_cond.clearData();
        	var nRow = this.ds_cond.addRow();
        	this.ds_cond.setColumn(nRow, "YEAR", this.comUtils.getClientDate("YYYY"));				// 당해년도
        	this.ds_cond.setColumn(nRow, "ST_DT", this.comUtils.getClientDate("YYYYMM")+"01");		// 월초
        	this.ds_cond.setColumn(nRow, "ED_DT", this.comUtils.getClientDate("YYYYMM")+nLastDay);	// 월말
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
         * 설명 		: 조회 이벤트 처리(자금일보)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_search();
         */
        this.fn_search = function(obj,e)
        {

        	// validation 체크
        	if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond, this.ds_validation)) {
        		return false;
        	}
        	
        	this.ds_result.clearData();		// 자금일보
        	
        	// transaction
        	this.fn_transaction("select");
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
        	this.ds_print.clearData();	         
        	var nRow =  this.ds_print.addRow();
        	this.ds_print.copyRow(nRow,this.ds_cond,this.ds_cond.rowposition);
            	
        	this.gfn_ReportPopup(this, "MIS/ACC/ACC020405_R01.crf", this.ds_print);
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
        		case "select":		// 자금일보 조회
        			var sController   	= "/hsco/mis/acc/ACC050205/select.do";
        			var sInDatasets   	= "input1=ds_cond";
        			var sOutDatasets  	= "ds_result=output1";
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
        			case "select":		// 자금일보 조회
        				this.ds_result.getCaseSum("ACNT_TYPE == 'TYPE_A'","PRE_JAN_AMT")
        				break;
        		}
        	}
        }

        
        /*
         * 함수명  	: fn_popupCallBack
         * 설명 		: Popup Callback 처리
         * params  		: sPopupId : 팝업 ID
         *                sReturn  : 팝업 처리 결과(dataset.saveXML())
         * return Type 	: None
         * 사용법		: 
         */
        this.fn_popupCallBack = function(sPopupId,sReturn)
        {
        	if(sPopupId == "branchAcnutPopup") {
        		var dsRtn = new Dataset();
        		nRowCnt = dsRtn.loadXML(sReturn);
        		if(nRowCnt){
        			this.ds_cond.setColumn(0, "ACNUTNO", dsRtn.getColumn(0, "ACNUTNO"));
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
        * 1. Button 관련 이벤트 처리
        * 
        ***********************************************************************/

        

        /**********************************************************************
        * Button 관련 이벤트 처리
        ***********************************************************************/
        /*
         * 함수명  	: div_SEARCH_searchCond_onclick
         * 설명 		: 검색조건 팝업호출
         * params  		: None
         * return Type 	: None
         * 사용법		: this.div_SEARCH_searchCond_onclick();
         */
        this.div_SEARCH_searchCond_onclick = function(obj,e)
        {
        	var parm = {
        		arg_0 : this 
        	};

        	this.gfn_popup("branchAcnutPopup", 563, 500, "브런치계좌조회", parm, "mis_fun::FUN010103_P01.xfdl", "fn_popupCallBack", true);
        }

        /*
         * 함수명  	: btn_excelExport_onclick
         * 설명 		: '엑셀파일 전환' 버튼 클릭 후 이벤트 처리(Grid)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_excelExport_onclick(obj,e);
         */
        this.btn_excelExport_onclick = function(obj,e)
        {
        	this.gfn_exportExcel(this.grd_result, "Excel File Download");
        }

        

        /*
         * 함수명  	: ds_cond_cancolumnchange
         * 설명 		: 회계년도 변경시 조회기간의 년도 변경
         * params  		: None
         * return Type 	: None
         * 사용법		: n/a
         */

        this.ds_cond_cancolumnchange = function(obj,e)
        {
        	if(e.columnid=="YEAR"){
        		var stDt = this.ds_cond.getColumn(0, "ST_DT");
        		var edDt = this.ds_cond.getColumn(0, "ED_DT");
        		
        		if(null != stDt) {
        			this.ds_cond.setColumn(0, "ST_DT", e.newvalue+stDt.substr(4,4));
        		}
        		if(null != edDt) {
        			this.ds_cond.setColumn(0, "ED_DT", e.newvalue+edDt.substr(4,4));	
        		}
        	}
        	
        	if(e.columnid=="ST_DT"||e.columnid=="ED_DT"){
        		if(this.ds_cond.getColumn(0, "YEAR")!=e.newvalue.substr(0,4)){
        			this.gfn_message("info.처리불가","회계년도와 조회기간의 년도가 다릅니다.");
        			return false;
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_cond.addEventHandler("cancolumnchange", this.ds_cond_cancolumnchange, this);
            this.ds_print.addEventHandler("cancolumnchange", this.ds_cond_cancolumnchange, this);
            this.addEventHandler("onload", this.ACC050205_onload, this);
            this.div_search.searchCond.addEventHandler("onclick", this.div_SEARCH_searchCond_onclick, this);
            this.btn_excelDn.addEventHandler("onclick", this.btn_excelExport_onclick, this);

        };

        this.loadIncludeScript("ACC050205.xfdl");

       
    };
}
)();
