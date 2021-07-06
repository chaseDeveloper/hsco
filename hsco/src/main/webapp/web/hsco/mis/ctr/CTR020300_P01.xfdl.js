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
                this.set_name("CTR020300_P01");
                this.set_classname("CTR020300_P01");
                this.set_titletext("의뢰내역확인");
                this._setFormPosition(0,0,1300,735);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "0", "0", null, null, "0", "0", this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_PopupBg");
            this.addChild(obj.name, obj);

            obj = new Div("div_ctr", "absolute", "28", "45", null, null, "0", "15", this);
            obj.set_taborder("2");
            obj.set_url("mis_ctr::CTR020100.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close", "absolute", null, "15", "50", "25", "15", null, this);
            obj.set_taborder("1");
            obj.set_text("종료");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save", "absolute", null, "15", "50", "25", "68", null, this);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "15", "0", null, "15", "15", null, this);
            obj.set_taborder("3");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "15", "17", "179", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_text("의뢰내역확인");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "0", "40", null, "5", "0", null, this);
            obj.set_taborder("5");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "0", "0", "15", null, null, "0", this);
            obj.set_taborder("6");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", null, "0", "15", null, "0", "0", this);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "1", null, null, "15", "1", "0", this);
            obj.set_taborder("8");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Sanc", "absolute", null, "15", "50", "25", "121", null, this);
            obj.set_taborder("10");
            obj.set_text("결재");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_sanc", "absolute", null, "48", "157", "156", "120", null, this);
            obj.set_taborder("11");
            obj.style.set_shadow("outer 5,5 10 gray");
            obj.set_cssclass("div_WF_Calendar");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0", "-1", null, "27", "0", null, this.div_sanc);
            obj.set_taborder("80");
            obj.set_text("결재");
            obj.set_cssclass("sta_WF_Calendaryy");
            this.div_sanc.addChild(obj.name, obj);
            obj = new Button("btn_sanc", "absolute", "26", "116", "45", "25", null, null, this.div_sanc);
            obj.set_taborder("81");
            obj.set_text("결재");
            this.div_sanc.addChild(obj.name, obj);
            obj = new Button("btn_sanc_cancel", "absolute", "82", "116", "45", "25", null, null, this.div_sanc);
            obj.set_taborder("82");
            obj.set_text("취소");
            this.div_sanc.addChild(obj.name, obj);
            obj = new Radio("rdo_sanc", "absolute", "26", "39", "112", "69", null, null, this.div_sanc);
            this.div_sanc.addChild(obj.name, obj);
            var rdo_sanc_innerdataset = new Dataset("rdo_sanc_innerdataset", this.div_sanc.rdo_sanc);
            rdo_sanc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">계약건의(일반)</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">수의계약(단건)</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">수의계약(다건)</Col></Row></Rows>");
            obj.set_innerdataset(rdo_sanc_innerdataset);
            obj.set_taborder("83");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_index("0");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 173, 140, this.div_sanc,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("11");
            		p.style.set_shadow("outer 5,5 10 gray");
            		p.set_cssclass("div_WF_Calendar");
            		p.set_visible("false");

            	}
            );
            this.div_sanc.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1300, 735, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("CTR020300_P01");
            		p.set_titletext("의뢰내역확인");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "mis_ctr::CTR020100.xfdl");
        };
        
        // User Script
        this.addIncludeScript("CTR020300_P01.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("CTR020300_P01.xfdl", "mis_lib::misUtil.xjs");
        this.registerScript("CTR020300_P01.xfdl", function() {
        /**********************************************************************
        * 화면ID   : CTR020300_P01.xfdl
        * 화면명   : 의뢰내역확인
        * 화면설명 : 의뢰내역을 확인한다.
        * 작성일   : 2017.07.17
        * 작성자   : 김형태
        * 수정이력 : 
        ***********************************************************************
        *     수정일     수정자   내용
        ***********************************************************************
        *
        ***********************************************************************
        */

        
        /***********************************************************************
         * Script Include 
         ************************************************************************/
        // 시스템 공통 라이브러리 Include
        //include "lib::comInclude.xjs";
        //include "mis_lib::misUtil.xjs";

        

        /**********************************************************************
        * 화면 변수 선언부
        ***********************************************************************/

        

        /**********************************************************************
        * onInit / onLoad 영역
        ***********************************************************************/

        this.CTR020300_P01_oninit = function(obj,e)
        {
        	//..
        }

        this.CTR020300_P01_onload = function(obj,e)
        {
        	// Form 초기화
        	this.fn_init_form();

        	// DataSet 초기화
        	this.fn_init_dataset();
        }

        
        /***********************************************************************
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
        	
        	var reqestNo  = "";
        	var reqestNm  = "";
        	var reqestNo2 = "";
        	var cntrctAt  = "";
        	var enableAt  = "";
        	if(!this.comUtils.isNull(this.getOwnerFrame().reqestNo)) {
        		reqestNo = this.getOwnerFrame().reqestNo;
        		this.div_ctr.ds_cond.setColumn(0, "REQEST_NO", reqestNo);
        	}
        	if(!this.comUtils.isNull(this.getOwnerFrame().reqestNm)) {
        		reqestNm = this.getOwnerFrame().reqestNm;
        		this.div_ctr.ds_cond.setColumn(0, "REQEST_NM", reqestNm);
        	}
        	if(!this.comUtils.isNull(this.getOwnerFrame().reqestNo2)) {
        		reqestNo2 = this.getOwnerFrame().reqestNo2;
        		this.div_ctr.ds_cond.setColumn(0, "REQEST_NO2", reqestNo2);
        	}
        	if(!this.comUtils.isNull(this.getOwnerFrame().cntrctAt)) {
        		cntrctAt = this.getOwnerFrame().cntrctAt;
        	}
        	if(!this.comUtils.isNull(this.getOwnerFrame().enableAt)) {
        		enableAt = this.getOwnerFrame().enableAt;
        	}
        	
        	var arrCtrlObj;
        	if(enableAt != '1') {
        		arrCtrlObj = ["grd_cmmnAtchmnfl", "btn_downFiles", "btn_sanc", "btn_sanc_cancel"];
        	} else {
        		arrCtrlObj = ["cmb_confmAt", "grd_cmmnAtchmnfl", "btn_downFiles", "btn_sanc", "btn_sanc_cancel"];
        		this.div_ctr.cmb_confmAt.set_cssclass("");
        		this.div_ctr.cmb_confmAt.set_readonly(false);
        	}
        	
        	this.div_ctr.popupAt = true;
        	this.fn_divInit(arrCtrlObj);
        	
        	this.fn_search();
        }

        
        /*
         * 함수명  	: initDataset
         * 설명 		: Dataset을 초기화한다.
         *                주로, 조건 Dataset들(ds_cond, ds_cond_00, ds_cond_01, ...) 을 초기화한다.
         * params  		: None
         * return Type 	: None
         * 사용법		: this.initDataset();
         */
        this.fn_init_dataset = function()
        {
        	//..
        }

        

        /**********************************************************************
        * non-Transaction 관련 컴포넌트 이벤트 처리 함수
        ***********************************************************************
        *
        * 1. 공통함수 처리
        * 2. 사용자 정의 함수 처리
        *
        ***********************************************************************/

        

        /**********************************************************************
        * 공통함수 처리
        ***********************************************************************/

        /*
         * 함수명  	: fn_search
         * 설명 		: div 내부 공통함수 호출(조회)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_search(obj,e);
         */
        this.fn_search = function()
        {
        	this.div_ctr.fn_search();
        }

        
        /*
         * 함수명  	: fn_save
         * 설명 		: div 내부 공통함수 호출(저장)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_save(obj,e);
         */
        this.fn_save = function()
        {
        	this.div_ctr.fn_save();
        }

        

        /**********************************************************************
        * 사용자 정의 함수 처리
        ***********************************************************************/

        /*
         * 함수명  	: fn_divInit
         * 설명 		: 팝업을 읽기전용으로 변환
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_divInit(obj,e);
         */
        this.fn_divInit = function(arrCtrlObj)
        {
        	// 모든 오브젝트에 대하여 readonly 이벤트 추가
        	_fn_setButtonVisible = function(obj){
        		var innerComp   = obj;
        		var fRow       = 0;
        		var compLength = obj.components.length;
        		while(fRow < compLength ){
        			innerComp = obj.components[fRow];
        			
        			var isCtrl = false;
        			for(var rRow = 0; rRow < arrCtrlObj.length; rRow++) {
        				if(innerComp.name == arrCtrlObj[rRow]) {
        					isCtrl = true;
        				}
        			}
        			
        			switch(innerComp.toString()){
        				case "[object Edit]":
        					if(!isCtrl) {
        						innerComp.set_cssclass("edt_WF_Readonly");
        						innerComp.set_readonly(true);
        					}
        					break;
        				case "[object MaskEdit]":
        					if(!isCtrl) {
        						innerComp.set_cssclass("msk_WF_Readonly");
        						innerComp.set_readonly(true);
        					}
        					break;
        				case "[object Spin]":
        					if(!isCtrl) {
        						innerComp.set_cssclass("spn_WF_Readonly");
        						innerComp.set_readonly(true);
        					}
        					break;
        				case "[object Combo]":
        					if(!isCtrl) {
        						innerComp.set_cssclass("cmb_WF_Readonly");
        						innerComp.set_readonly(true);
        					}
        					break;
        				case "[object Calendar]":
        					if(!isCtrl) {
        						innerComp.set_cssclass("cal_WF_Readonly");
        						innerComp.set_readonly(true);
        					}
        					break;
        				case "[object TextArea]":
        					if(!isCtrl) {
        						innerComp.set_cssclass("txt_WF_Readonly");
        						innerComp.set_readonly(true);
        					}
        					break;
        				case "[object CheckBox]":
        					if(!isCtrl) {
        						innerComp.set_enable(false);
        					}
        					break;
        				case "[object Button]":
        					if(!isCtrl) {
        						switch(innerComp.cssclass) {
        							case "btn_WF_PopupClose": case "btn_WF_CRUD":
        								break;
        							default:
        								innerComp.set_visible(false);
        								break;
        						}
        					} else {
        						innerComp.set_visible(true);
        					}
        					break;
        				case "[object Form]":
        				case "[object Div]":
        				case "[object Tab]":
        				case "[object Tabpage]":
        					if(!isCtrl) {
        						_fn_setButtonVisible(innerComp);
        					}
        					break;
        				case "[object Grid]":
        					if(!isCtrl) {
        						for(var cRow = 0; cRow < innerComp.getCellCount("Head"); cRow++) {
        							innerComp.setCellProperty("Head", cRow, "edittype",   "none");
        						}
        						for(var cRow = 0; cRow < innerComp.getCellCount("Body"); cRow++) {
        							innerComp.setCellProperty("Body", cRow, "edittype"       , "none");
        							innerComp.setCellProperty("Body", cRow, "expandshow"     , "hide");
        							innerComp.setCellProperty("Body", cRow, "combodisplay"   , "edit");
        							innerComp.setCellProperty("Body", cRow, "calendardisplay", "edit");
        							innerComp.setCellProperty("Body", cRow, "editdisplay"    , "edit");
        						}
        					} else {
        						
        					}
        					break;
        			}
        			fRow++;
        		}
        	}
        	_fn_setButtonVisible(this);
        }

        

        /**********************************************************************
        * 버튼 이벤트 처리
        ***********************************************************************/

        this.btn_Save_onclick = function(obj,e)
        {
        	this.fn_save();
        }

        

        this.btn_Close_onclick = function(obj,e)
        {
        	this.close();
        }

        
        this.btn_Sanc_onclick = function(obj,e)
        {
        	this.div_sanc.set_visible(true);
        }

        
        this.div_print_btn_sanc_onclick = function(obj,e)
        {
        	this.div_sanc.set_visible(false);
        	
        	var cRow = this.div_ctr.ds_cntrctReqest.rowposition;
        	var sanctnKnd1 = this.div_ctr.ds_cntrctReqest.getColumn(cRow, "SANCTN_KND1");
        	if(sanctnKnd1 != '5') {
        		var errMsg = "계약의뢰 결재가 완료된 건만 결재가 가능합니다.";
        		alert(errMsg);
        		return false;
        	}
        	
        	// 의뢰명
        	var reqestNm = this.div_ctr.ds_cntrctReqest.getColumn(cRow, "REQEST_NM");
        	
        	// 계약방법
        	var cntrctMthSe = this.div_ctr.ds_cntrctReqest.getColumn(cRow, "CNTRCT_MTH_SE");
        	var cntrctMthNm = this.div_ctr.ds_ctr049.getColumn(this.div_ctr.ds_ctr049.findRow("CODE", cntrctMthSe), "CODE_NM");
        	
        	// 착수일
        	var strwrkDe = this.div_ctr.ds_cntrctReqest.getColumn(cRow, "STRWRK_DE");
        	if(this.comUtils.isNull(strwrkDe)) {
        		strwrkDe = "";
        	} else {
        		strwrkDe = this.dateUtils.format(strwrkDe, "yyyy. mm.");
        	}
        	
        	// 준공일
        	var competDe = this.div_ctr.ds_cntrctReqest.getColumn(cRow, "COMPET_DE");
        	if(this.comUtils.isNull(competDe)) {
        		competDe = "";
        	} else {
        		competDe = this.dateUtils.format(competDe, "yyyy. mm.");
        	}
        	
        	// 사업내용
        	var rm = this.div_ctr.ds_cntrctReqest.getColumn(cRow, "RM");
        	
        	// 예산액
        	var budgetAm = this.div_ctr.ds_orderPlan.getSum("EXECUT_BUDGET_AMT");
        	if(!this.comUtils.isNull(budgetAm)) {
        		budgetAm = this.comUtils.formatComma(budgetAm) + "원 ";
        	} else {
        		budgetAm = "";
        	}
        	
        	// 추정금액
        	var outsrcAm = this.div_ctr.ds_orderPlan.getCaseSum("dataset.getColumn(currow, 'ORDER_NM') != dataset.getColumn(currow-1, 'ORDER_NM')", "THTI_ODR_OUTSRC_AM")
        	if(!this.comUtils.isNull(outsrcAm)) {
        		outsrcAm = this.comUtils.formatComma(outsrcAm) + "원 ";
        	} else {
        		outsrcAm = "";
        	}
        	
        	// 소계 행 제거
        	var normalCnt = 0;
        	for(var fRow = 0; fRow < this.div_ctr.ds_orderPlan.getRowCount(); fRow++) {
        		var rowType = this.div_ctr.ds_orderPlan.getRowType(fRow);
        		if(rowType == Dataset.ROWTYPE_NORMAL) {
        			normalCnt ++;
        		}
        	}
        	
        	var sancType = this.div_sanc.rdo_sanc.value;
        	if(sancType == '1') {				// 연간계약
        		// 예산과목
        		var budgetAcntNm = "";
        		for(var oRow = 0; oRow < this.div_ctr.ds_orderPlan.getRowCount(); oRow++) {
        			var bdgAcntNm = this.div_ctr.ds_orderPlan.getColumn(oRow, "BUDGET_ACNT_NM");
        			var bukipNm   = this.div_ctr.ds_orderPlan.getColumn(oRow, "BUKIP_NM");
        			if(!this.comUtils.isNull(bdgAcntNm)) {
        				budgetAcntNm += this.comUtils.isNull(budgetAcntNm) ? "" : "\\r\\n";
        				bdgAcntNm = this.comUtils.isNull(bdgAcntNm) ? '' : bdgAcntNm;
        				bukipNm   = this.comUtils.isNull(bukipNm) ? '' : bukipNm;
        				budgetAcntNm += bdgAcntNm + " (" + bukipNm + ")"
        			}
        		}
        		
        		var arrSancData 	= new Array(6);
        		arrSancData[0] = "「" + reqestNm + "」계약건의";		// 결재제목
        		arrSancData[1] = "2. 위 호와 관련하여, 「" + reqestNm + "」을 아래와 같이 건의합니다.";								// 의뢰명1
        		arrSancData[2] = reqestNm;								// 의뢰명2
        		arrSancData[3] = budgetAm;								// 예산액
        		arrSancData[4] = outsrcAm;								// 추정금액
        		arrSancData[5] = budgetAcntNm;							// 예산과목
        		
        		this.fn_callHandySanc2(
        			 this						// context
        			,'0000000081'				// formId
        			,this.div_ctr.ds_cntrctReqest	// misDataset
        			,"TBCTR_CNTRCT_REQEST"		// tableName
        			,["REQEST_NO"]				// tableKey
        			,arrSancData				// arrSancData
        			,null						// subData
        			,null						// multiCheck(0 or 1)
        			,"SANCTN_NO2"				// otherColumn
        			,this.div_ctr.ds_fileList	// file Dataset
        		);
        	} else if(sancType == '2') {		// 수의계약
        		// 예산과목
        		var budgetAcntNm = "";
        		for(var oRow = 0; oRow < this.div_ctr.ds_orderPlan.getRowCount(); oRow++) {
        			var bdgAcntNm = this.div_ctr.ds_orderPlan.getColumn(oRow, "BUDGET_ACNT_NM");
        			var bukipNm   = this.div_ctr.ds_orderPlan.getColumn(oRow, "BUKIP_NM");
        			if(!this.comUtils.isNull(bdgAcntNm)) {
        				budgetAcntNm += this.comUtils.isNull(budgetAcntNm) ? "" : "\\r\\n";
        				bdgAcntNm = this.comUtils.isNull(bdgAcntNm) ? '' : bdgAcntNm;
        				bukipNm   = this.comUtils.isNull(bukipNm) ? '' : bukipNm;
        				budgetAcntNm += bdgAcntNm + " (" + bukipNm + ")"
        			}
        		}
        		
        		var arrSancData 	= new Array(7);
        		arrSancData[0] = "「" + reqestNm + "」계약건의(수의계약)";		// 결재제목
        		arrSancData[1] = "2. 위 호와 관련하여, 「" + reqestNm + "」을 아래와 같이 건의합니다.";								// 의뢰명1
        		arrSancData[2] = reqestNm;								// 의뢰명2
        		arrSancData[3] = budgetAm;								// 예산액
        		arrSancData[4] = outsrcAm;								// 추정금액
        		arrSancData[5] = budgetAcntNm;							// 예산과목
        		arrSancData[6] = cntrctMthNm;							// 계약방법
        		
        		this.fn_callHandySanc2(
        			 this						// context
        			,'0000000079'				// formId
        			,this.div_ctr.ds_cntrctReqest	// misDataset
        			,"TBCTR_CNTRCT_REQEST"		// tableName
        			,["REQEST_NO"]				// tableKey
        			,arrSancData				// arrSancData
        			,null						// subData
        			,null						// multiCheck(0 or 1)
        			,"SANCTN_NO2"				// otherColumn
        			,this.div_ctr.ds_fileList	// file Dataset
        		);
        	} else if(sancType == '3') {		// 수의계약(다건)
        		var arrSancData 	= new Array(99);
        		arrSancData[0] = "「" + reqestNm + "」계약건의(수의계약)";		// 결재제목
        		arrSancData[1] = "2. 위 호와 관련하여, 「" + reqestNm + "」을 아래와 같이 건의합니다.";								// 의뢰명1
        		
        		var cnt1 = 0;
        		var cnt2 = 0;
        		for(var bRow = 0; bRow < this.div_ctr.ds_orderPlan_grp.getRowCount(); bRow++) {
        			var rowType = this.div_ctr.ds_orderPlan_grp.getRowType(bRow);
        			if(rowType == Dataset.ROWTYPE_GROUP) {
        				budgetAcntNm = "";
        				var bdgAcntNm = this.div_ctr.ds_orderPlan_grp.getColumn(bRow, "BUDGET_ACNT_NM");
        				var bukipNm   = this.div_ctr.ds_orderPlan_grp.getColumn(bRow, "BUKIP_NM");
        				if(!this.comUtils.isNull(bdgAcntNm)) {
        					bdgAcntNm = this.comUtils.isNull(bdgAcntNm) ? '' : bdgAcntNm;
        					bukipNm   = this.comUtils.isNull(bukipNm) ? '' : bukipNm;
        					budgetAcntNm += bdgAcntNm + " (" + bukipNm + ")"
        				}
        				
        				var deptNm = this.div_ctr.ds_orderPlan_grp.getColumn(bRow, "DEPT_NM");
        				var orderNm   = this.div_ctr.ds_orderPlan_grp.getColumn(bRow, "ORDER_NM");
        				
        				
        				
        				// 발주월
        				var planMt   = this.div_ctr.ds_orderPlan_grp.getColumn(bRow, "ORDER_PLAN_MT");
        				if(!this.comUtils.isNull(budgetAm)) {
        					planMt = planMt;
        				} else {
        					planMt = "";
        				}
        				
        				// 예산액
        				var budgetAm = this.div_ctr.ds_orderPlan_grp.getColumn(bRow, "EXECUT_BUDGET_AMT");
        				if(!this.comUtils.isNull(budgetAm)) {
        					budgetAm = this.comUtils.formatComma(budgetAm) + "원 ";
        				} else {
        					budgetAm = "";
        				}
        				
        				// 추정금액
        				var outsrcAm = this.div_ctr.ds_orderPlan_grp.getColumn(bRow, "THTI_ODR_OUTSRC_AM");
        				if(!this.comUtils.isNull(outsrcAm)) {
        					outsrcAm = this.comUtils.formatComma(outsrcAm) + "원 ";
        				} else {
        					outsrcAm = "";
        				}
        				if(cnt1 < 12) {
        					arrSancData[2 + 0 + cnt1*6]  = deptNm;							// 부서명
        					arrSancData[2 + 1 + cnt1*6]  = orderNm;							// 발주명
        					arrSancData[2 + 2 + cnt1*6]  = planMt;							// 발주월
        					arrSancData[2 + 3 + cnt1*6]  = budgetAm;							// 예산금액
        					arrSancData[2 + 4 + cnt1*6]  = outsrcAm;							// 추정금액
        					arrSancData[2 + 5 + cnt1*6]  = outsrcAm;							// 추정금액
        					
        				} else {
        					arrSancData[2 + 0 + 11*6]  += "\\r\\n" + deptNm;							// No
        					arrSancData[2 + 1 + 11*6]  += "\\r\\n" + orderNm;							// 발주명
        					arrSancData[2 + 2 + 11*6]  += "\\r\\n" + planMt;							// 발주월
        					arrSancData[2 + 3 + 11*6]  += "\\r\\n" + budgetAm;							// 예산금액
        					arrSancData[2 + 4 + 11*6]  += "\\r\\n" + outsrcAm;							// 추정금액
        					arrSancData[2 + 5 + 11*6]  += "\\r\\n" + outsrcAm;							// 추정금액
        				}
        				cnt1++
        			}
        			
        			if(rowType == Dataset.ROWTYPE_NORMAL) {
        				var deptNm = this.div_ctr.ds_orderPlan_grp.getColumn(bRow, "DEPT_NM");
        				
        				// 예산액
        				budgetAcntNm = "";
        				var bdgAcntNm = this.div_ctr.ds_orderPlan_grp.getColumn(bRow, "BUDGET_ACNT_NM");
        				var bukipNm   = this.div_ctr.ds_orderPlan_grp.getColumn(bRow, "BUKIP_NM");
        				if(!this.comUtils.isNull(bdgAcntNm)) {
        					bdgAcntNm = this.comUtils.isNull(bdgAcntNm) ? '' : bdgAcntNm;
        					bukipNm   = this.comUtils.isNull(bukipNm) ? '' : bukipNm;
        					budgetAcntNm += bdgAcntNm + " (" + bukipNm + ")"
        				}
        				
        				if(cnt2 < 12) {
        					arrSancData[74 + 0 + cnt2*2]  = deptNm;							// 부서
        					arrSancData[74 + 1 + cnt2*2]  = budgetAcntNm;					// 예산
        					
        				} else {
        					arrSancData[74 + 0 + 11*2]  = deptNm;							// 부서
        					arrSancData[74 + 1 + 11*2]  = budgetAcntNm;						// 예산
        				}
        				cnt2++
        			}
        			
        		}
        		
        		arrSancData[98] = cntrctMthNm;		// 계약방법
        		
        		this.fn_callHandySanc2(
        			 this						// context
        			,'0000000080'				// formId
        			,this.div_ctr.ds_cntrctReqest	// misDataset
        			,"TBCTR_CNTRCT_REQEST"		// tableName
        			,["REQEST_NO"]				// tableKey
        			,arrSancData				// arrSancData
        			,null						// subData
        			,null						// multiCheck(0 or 1)
        			,"SANCTN_NO2"				// otherColumn
        			,this.div_ctr.ds_fileList	// file Dataset
        		);
        	}
        }

        this.div_sanc_btn_cancel_onclick = function(obj,e)
        {
        	this.div_sanc.set_visible(false);
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.CTR020300_P01_oninit, this);
            this.addEventHandler("onload", this.CTR020300_P01_onload, this);
            this.btn_Close.addEventHandler("onclick", this.btn_Close_onclick, this);
            this.btn_Save.addEventHandler("onclick", this.btn_Save_onclick, this);
            this.btn_Sanc.addEventHandler("onclick", this.btn_Sanc_onclick, this);
            this.div_sanc.btn_sanc.addEventHandler("onclick", this.div_print_btn_sanc_onclick, this);
            this.div_sanc.btn_sanc_cancel.addEventHandler("onclick", this.div_sanc_btn_cancel_onclick, this);

        };

        this.loadIncludeScript("CTR020300_P01.xfdl");
        this.loadPreloadList();
       
    };
}
)();
