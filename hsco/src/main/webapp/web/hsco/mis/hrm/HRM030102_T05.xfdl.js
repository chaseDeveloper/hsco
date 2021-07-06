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
                this.set_name("HRM030201_T5");
                this.set_classname("form");
                this.set_titletext("경력사항");
                this._setFormPosition(0,0,750,350);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("grd_hr_career", "absolute", "0", "35", null, null, "0", "0", this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_hr_career");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"입사일\"/><Cell col=\"1\" text=\"퇴사일\"/><Cell col=\"2\" text=\"근무처명\"/><Cell col=\"3\" text=\"최종직위명\"/><Cell col=\"4\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" edittype=\"date\" text=\"bind:ECNY_DE\" calendardisplay=\"display\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"date\" text=\"bind:RETIRE_DE\" calendardisplay=\"display\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:WRKPLC_NM\" editdisplay=\"display\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:LAST_OFCPS_NM\" editdisplay=\"display\"/><Cell col=\"4\" edittype=\"normal\" style=\"align:left middle;\" text=\"bind:RM\" editdisplay=\"display\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_entrpsAcctoCntrctDtls", "absolute", "0", "11", "120", "19", null, null, this);
            obj.set_taborder("1");
            obj.set_text("경력사항");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "1", null, "10", "0", null, this);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "0", "30", null, "5", "0", null, this);
            obj.set_taborder("3");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Add", "absolute", null, "11", "64", "19", "134", null, this);
            obj.set_taborder("4");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Gridadd");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Delete", "absolute", null, "11", "64", "19", "67", null, this);
            obj.set_taborder("5");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Griddel");
            obj.getSetter("cancolumnchange").set("ds_frmtnPdDept_cancolumnchange");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Cancel", "absolute", null, "11", "64", "19", "0", null, this);
            obj.set_taborder("6");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Gridcnl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 750, 350, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("form");
            		p.set_titletext("경력사항");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HRM030102_T05.xfdl", "lib::comInclude.xjs");
        this.registerScript("HRM030102_T05.xfdl", function() {
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
        	var mRow = this.parent.parent.ds_hr_mastr.rowposition;
        	var empno = this.parent.parent.ds_hr_mastr.getColumn(mRow, "EMPNO");
        	
        	var nRow = this.parent.parent.ds_hr_career.addRow();
        	this.parent.parent.ds_hr_career.setColumn(nRow, "EMPNO", empno);
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
        	if(!this.gfn_message("confirm.삭제여부")) {
        		return false;	// 아니오
        	}
        	this.parent.parent.ds_hr_career.deleteRow(this.parent.parent.ds_hr_career.rowposition);
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
        	if(Ex.util.isUpdated(this.parent.parent.ds_hr_career)) {
        		if(!this.gfn_message("confirm.변경.취소.여부")) {
        			return false;	// 아니오
        		}
        	}
        	this.parent.parent.ds_hr_career.reset();
        	this.parent.parent.ds_hr_career.applyChange();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.HRM030201_P01_onload, this);
            this.btn_Add.addEventHandler("onclick", this.btn_Add_onclick, this);
            this.btn_Delete.addEventHandler("onclick", this.btn_Delete_onclick, this);
            this.btn_Cancel.addEventHandler("onclick", this.btn_Cancel_onclick, this);

        };

        this.loadIncludeScript("HRM030102_T05.xfdl");

       
    };
}
)();
