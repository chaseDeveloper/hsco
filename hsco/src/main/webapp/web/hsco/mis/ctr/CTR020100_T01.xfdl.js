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
                this.set_name("CTR020100_T01");
                this.set_classname("CTR020100_T01");
                this.set_titletext("발주내역");
                this._setFormPosition(0,0,1031,400);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("grd_orderPlan", "absolute", "0", "35", null, null, "0", "0", this);
            obj.set_taborder("4");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("ds_orderPlan");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"320\"/><Column size=\"150\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"년도\"/><Cell col=\"1\" text=\"월\"/><Cell col=\"2\" text=\"일련번호\"/><Cell col=\"3\" text=\"발주명\"/><Cell col=\"4\" text=\"금차도급액\"/><Cell col=\"5\" text=\"예산계정명\"/><Cell col=\"6\" text=\"부기명\"/><Cell col=\"7\" text=\"예산현액\"/></Band><Band id=\"body\" style=\"cellbackground2: ;\"><Cell style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : comp.parent.getCellColor(currow));background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : comp.parent.getCellColor(currow));selectbackground:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : comp.parent.getCellColor(currow));\" text=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '' : ORDER_PLAN_YEAR\" suppress=\"2\"/><Cell col=\"1\" edittype=\"none\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : comp.parent.getCellColor(currow));background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : comp.parent.getCellColor(currow));selectbackground:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : comp.parent.getCellColor(currow));\" text=\"bind:ORDER_PLAN_MT\" suppress=\"2\"/><Cell col=\"2\" edittype=\"none\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : comp.parent.getCellColor(currow));background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : comp.parent.getCellColor(currow));selectbackground:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : comp.parent.getCellColor(currow));\" text=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '' : ORDER_PLAN_SN\" suppress=\"2\"/><Cell col=\"3\" style=\"align:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? 'right middle' : 'left middle');background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : comp.parent.getCellColor(currow));background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : comp.parent.getCellColor(currow));selectbackground:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : comp.parent.getCellColor(currow));\" text=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '소 계 : ' : ORDER_NM\" suppress=\"1\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right middle;background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : comp.parent.getCellColor(currow));background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : comp.parent.getCellColor(currow));selectbackground:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : comp.parent.getCellColor(currow));\" text=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? dataset.getCaseMax(&quot;ORDER_PLAN_YEAR == '&quot; + ORDER_PLAN_YEAR + &quot;' &amp;&amp; ORDER_PLAN_SN == '&quot; + ORDER_PLAN_SN + &quot;'&quot;, &quot;THTI_ODR_OUTSRC_AM&quot;) : THTI_ODR_OUTSRC_AM\" suppress=\"3\"/><Cell col=\"5\" style=\"align:left middle;background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');selectbackground:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '#ffffffff');\" text=\"bind:BUDGET_ACNT_NM\"/><Cell col=\"6\" style=\"align:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? 'right middle' : 'left middle');background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');selectbackground:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '#ffffffff');\" text=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '소 계 : ' : BUKIP_NM\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right middle;background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');selectbackground:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '#ffffffff');\" text=\"bind:EXECUT_BUDGET_AMT\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"금차도급액\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getCaseSum(&quot;dataset.getColumn(currow, 'ORDER_NM') != dataset.getColumn(currow-1, 'ORDER_NM')&quot;, &quot;THTI_ODR_OUTSRC_AM&quot;)\"/><Cell col=\"5\"/><Cell col=\"6\" text=\"예산현액\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;EXECUT_BUDGET_AMT&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "0", "11", "120", "19", null, null, this);
            obj.set_taborder("0");
            obj.set_text("발주 내역");
            obj.set_cssclass("sta_WF_Title03");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "1", null, "10", "0", null, this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "0", "30", null, "5", "0", null, this);
            obj.set_taborder("6");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Add", "absolute", null, "10", "64", "19", "134", null, this);
            obj.set_taborder("1");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Gridadd");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Delete", "absolute", null, "10", "64", "19", "67", null, this);
            obj.set_taborder("2");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Griddel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Cancel", "absolute", null, "10", "64", "19", "0", null, this);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Gridcnl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1031, 400, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("CTR020100_T01");
            		p.set_titletext("발주내역");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("CTR020100_T01.xfdl", "lib::comInclude.xjs");
        this.registerScript("CTR020100_T01.xfdl", function() {
        //include "lib::comInclude.xjs";

        /*
         * 함수명  	: btn_Add_onclick
         * 설명 		: '행추가' 버튼 클릭 후 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_Add_onclick(obj,e);
         */
        this.btn_Add_onclick = function(obj,e)
        {
        	var pRow  = this.parent.parent.ds_cntrctReqest.rowposition;
        	var enableAt = this.parent.parent.ds_cntrctReqest.getColumn(pRow, "ENABLE_AT");
        	var cntrctAt = this.parent.parent.ds_cntrctReqest.getColumn(pRow, "CNTRCT_AT");
        	
        	if(pRow < 0) {
        		this.gfn_message("info.처리불가", "계약의뢰가 존재하지 않습니다.");
        		return false;
        	}
        	if(enableAt != '1') {
        		this.gfn_message("info.처리불가", "승인˙반려된 건은  수정할 수 없습니다.");
        		return false;
        	}
        	
        	var pRow = this.parent.parent.ds_cntrctReqest.rowposition;
        	var pDeptCode = this.parent.parent.ds_cntrctReqest.getColumn(pRow, "REQEST_DEPT_CODE");
        	var pDeptNm   = this.parent.parent.ds_cntrctReqest.getColumn(pRow, "REQEST_DEPT_NM");
        	var reqestSe  = this.parent.parent.ds_cntrctReqest.getColumn(pRow, "REQEST_SE");
        	
        	if(this.comUtils.isNull(reqestSe)) {
        		alert("의뢰구분을 선택하신 후, 클릭하여 주시기 바랍니다.");
        		return false;
        	}
        	
        	var parm = {
        		 arg_0			: this
        		,deptCode		: pDeptCode
        		,deptNm			: pDeptNm
        		,cntrctSeCode	: reqestSe
        	};
        	this.gfn_popup("CTR020100_P01", 1024, 500, "", parm, "mis_ctr::CTR020100_P01.xfdl", "fn_popupCallBack", true);
        }

        
        /*
         * 함수명  	: btn_Delete_onclick
         * 설명 		: '행삭제' 버튼 클릭 후 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_Delete_onclick(obj,e);
         */
        this.btn_Delete_onclick = function(obj,e)
        {
        	var pRow  = this.parent.parent.ds_cntrctReqest.rowposition;
        	var enableAt = this.parent.parent.ds_cntrctReqest.getColumn(pRow, "ENABLE_AT");
        	var cntrctAt = this.parent.parent.ds_cntrctReqest.getColumn(pRow, "CNTRCT_AT");
        	
        	if(enableAt != '1') {
        		this.gfn_message("info.처리불가", "승인˙반려된 건은  수정할 수 없습니다.");
        		return false;
        	}
        	
        	if(!this.gfn_message("confirm.삭제여부")) {
        		return false;	// 아니오
        	}
        	
        	var oRow            = this.parent.parent.ds_orderPlan.rowposition;
        	var orderPlanYear_trg = this.parent.parent.ds_orderPlan.getColumn(oRow, "ORDER_PLAN_YEAR");
        	var orderPlanSn_trg   = this.parent.parent.ds_orderPlan.getColumn(oRow, "ORDER_PLAN_SN");
        	for(var dRow = this.parent.parent.ds_orderPlan.getRowCount()-1; dRow >= 0; dRow--) {
        		var orderPlanYear   = this.parent.parent.ds_orderPlan.getColumn(dRow, "ORDER_PLAN_YEAR");
        		var orderPlanSn     = this.parent.parent.ds_orderPlan.getColumn(dRow, "ORDER_PLAN_SN");
        		if(orderPlanYear_trg == orderPlanYear && orderPlanSn_trg == orderPlanSn) {
        			this.parent.parent.ds_orderPlan.deleteRow(dRow);
        		}
        	}
        }

        
        // 다중 행 선택한것처럼 보이게 하기!
        this.getCellColor = function(trgRow)
        {
        	var orderPlanYear_trg = this.parent.parent.ds_orderPlan.getColumn(trgRow, "ORDER_PLAN_YEAR");
        	var orderPlanSn_trg   = this.parent.parent.ds_orderPlan.getColumn(trgRow, "ORDER_PLAN_SN");
        	
        	var pRow            = this.parent.parent.ds_orderPlan.rowposition;
        	var orderPlanYear   = this.parent.parent.ds_orderPlan.getColumn(pRow, "ORDER_PLAN_YEAR");
        	var orderPlanSn     = this.parent.parent.ds_orderPlan.getColumn(pRow, "ORDER_PLAN_SN");
        	if(orderPlanYear_trg == orderPlanYear && orderPlanSn_trg == orderPlanSn) {
        		return '#fff0f0ff';
        	} else {
        		return '#ffffffff';
        	}
        	
        }

        
        /*
         * 함수명  	: btn_Cancel_onclick
         * 설명 		: '행취소' 버튼 클릭 후 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_Cancel_onclick(obj,e);
         */
        this.btn_Cancel_onclick = function(obj,e)
        {
        	var pRow  = this.parent.parent.ds_cntrctReqest.rowposition;
        	var enableAt = this.parent.parent.ds_cntrctReqest.getColumn(pRow, "ENABLE_AT");
        	var cntrctAt = this.parent.parent.ds_cntrctReqest.getColumn(pRow, "CNTRCT_AT");
        	
        	if(enableAt != '1') {
        		this.gfn_message("info.처리불가", "승인˙반려된 건은  수정할 수 없습니다.");
        		return false;
        	}
        	
        	if(Ex.util.isUpdated(this.parent.parent.ds_orderPlan)) {
        		if(!this.gfn_message("confirm.변경.취소.여부")) {
        			return false;	// 아니오
        		}
        	}
        	this.parent.parent.ds_orderPlan.reset();
        	this.parent.parent.ds_orderPlan.applyChange();
        }

        
        /*
         * 함수명  	: fn_getEnableAt
         * 설명 		: 수정가능여부확인
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_getEnableAt();
         */
        this.fn_getEnableAt = function()
        {
        	var pRow  = this.parent.parent.ds_cntrctReqest.rowposition;
        	var enableAt = this.parent.parent.ds_cntrctReqest.getColumn(pRow, "ENABLE_AT");
        	
        	return enableAt;
        }

        
        /*
         * 함수명  	: grd_orderPlan_onexpandup
         * 설명 		: 그리드 버튼 클릭 후 이벤트 처리(Popup)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.grd_orderPlan_onexpandup(obj,e);
         */
        this.grd_orderPlan_onexpandup = function(obj,e)
        {
        }

        

        /*
         * 함수명  	: fn_popupCallBack
         * 설명 		: 팝업 콜백
         * params  		: None
         * return Type 	: None
         * 사용법		: n/a
         */
        this.fn_popupCallBack = function(strID,variant)
        {
        	var dsTemp = new Dataset();
        	var loadCnt = dsTemp.loadXML(variant);
        	
        	// 값이 존재하지 않을 경우에는 아무런 값을 덮어쓰지 않음
        	if(!loadCnt) {
        		return false;
        	}
        	
        	switch(strID) {
        		case "CTR020100_P01":
        			break;
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.CTR020100_T01_onload, this);
            this.addEventHandler("oninit", this.CTR020100_T01_oninit, this);
            this.grd_orderPlan.addEventHandler("onexpandup", this.grd_orderPlan_onexpandup, this);
            this.Static00.addEventHandler("onclick", this.Static00_onclick, this);
            this.btn_Add.addEventHandler("onclick", this.btn_Add_onclick, this);
            this.btn_Delete.addEventHandler("onclick", this.btn_Delete_onclick, this);
            this.btn_Cancel.addEventHandler("onclick", this.btn_Cancel_onclick, this);

        };

        this.loadIncludeScript("CTR020100_T01.xfdl");

       
    };
}
)();
