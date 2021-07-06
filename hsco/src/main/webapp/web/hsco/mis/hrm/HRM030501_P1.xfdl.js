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
                this.set_name("HRM030501_P1");
                this.set_classname("frmReport");
                this.set_titletext("Report Popup");
                this._setFormPosition(0,0,884,735);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_saveType", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Code\">PDF</Col><Col id=\"Name\">PDF</Col></Row><Row><Col id=\"Code\">XLS</Col><Col id=\"Name\">Excel</Col></Row><Row><Col id=\"Code\">DOC</Col><Col id=\"Name\">Word</Col></Row><Row><Col id=\"Code\">HWP</Col><Col id=\"Name\">아래한글</Col></Row><Row><Col id=\"Code\">HAN</Col><Col id=\"Name\">한셀</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("sta_bg", "absolute", "0", "0", null, null, "0", "0", this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_PopupBg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_headTitle", "absolute", "2", "2", null, "34", "2", null, this);
            obj.set_taborder("1");
            obj.set_text("Reporter");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_headClose", "absolute", null, "8", "20", "20", "12", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "17", "53", "245", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_text("Reporter");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "51", "50", "25", "17", null, this);
            obj.set_taborder("4");
            obj.set_text("종료");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print", "absolute", null, "51", "50", "25", "70", null, this);
            obj.set_taborder("5");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "51", "50", "25", "123", null, this);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "2", "36", null, "15", "2", null, this);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "2", "76", null, "5", "2", null, this);
            obj.set_taborder("8");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", null, "2", "15", null, "2", "2", this);
            obj.set_taborder("9");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "2", "2", "15", null, null, "2", this);
            obj.set_taborder("10");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "2", null, null, "15", "2", "2", this);
            obj.set_taborder("12");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_saveType", "absolute", "624", "51", "84", "25", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_innerdataset("@ds_saveType");
            obj.set_codecolumn("Code");
            obj.set_datacolumn("Name");
            obj.set_value("PDF");
            obj.set_text("PDF");
            obj.style.set_align("middle");
            obj.set_index("0");

            obj = new Button("btn_scaleDown", "absolute", "506", "51", "25", "25", null, null, this);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_Griddel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_scaleUp", "absolute", "596", "51", "25", "25", null, null, this);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_Gridadd");
            this.addChild(obj.name, obj);

            obj = new Spin("spn_scale", "absolute", "530", "51", "67", "25", null, null, this);
            obj.set_taborder("18");
            obj.set_value("100");
            obj.set_max("300");
            obj.set_increment("20");
            obj.style.set_align("middle");
            obj.set_min("60");
            this.addChild(obj.name, obj);

            obj = new HTMLUbiViewer("ubi_viewer", "absolute", "17", "81", null, null, "17", "17", this);
            obj.set_taborder("19");
            obj.set_text("HTMLUbiViewer00");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 884, 735, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("frmReport");
            		p.set_titletext("Report Popup");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HRM030501_P1.xfdl", "lib::comInclude.xjs");
        this.registerScript("HRM030501_P1.xfdl", function() {
        /***********************************************************************
         * 화면ID   : HRM030501_P1
         * 화면명   : 제증명출력
         * 화면설명 : 한장출력을 위한 Report Popup
         * 작성일   : 2016.05
         * 작성자   : 정윤원
         * 수정이력 : 
         ***********************************************************************
         *     수정일     수정자   내용
         ***********************************************************************
         *
         ***********************************************************************
         */

        /***********************************************************************
         * Script Include 
         ***********************************************************************/
        //include "lib::comInclude.xjs"

        /***********************************************************************
         * 화면 변수 선언부
         ***********************************************************************/
        this.fv_objForm;
        this.fv_opts;

        /***********************************************************************
         * onInit / onLoad 영역
         ***********************************************************************/
        this.HRM030501_P1_oninit = function(obj,e)
        {
        	this.parent.set_resizable(true);
        }

        this.HRM030501_P1_onload = function(obj,e)
        {
        	this.sta_headTitle.set_text(this.parent.titletext);
        	this.sta_title.set_text(this.parent.titletext);
        	
        	this.fv_objForm = this.parent.arg_0;
        	var vOpts = this.parent.opts;
        	this.fv_opts = vOpts;
        	vOpts.setToolbar(false);
            vOpts.setScale(100);
        	if(this.comUtils.isNullEmpty(vOpts.getGrid()))
        	{
        		vOpts.setArgs("EMPNO", this.gfn_getUserId());
        	    vOpts.setArgs("EMPNM", this.gfn_getUserName());
        		this.gfn_setLocalDs2Viewer(this.ubi_viewer, vOpts);
        	}
        	else
        	{
        		vOpts.setArgs("EMPNO", this.gfn_getUserId());
        	    vOpts.setArgs("EMPNM", this.gfn_getUserName());
        		this.gfn_setLocalDs2Viewer(this.ubi_viewer, vOpts);
        	}
        }

        /***********************************************************************
         * non-Transaction 관련 컴포넌트 이벤트 처리 함수
         ***********************************************************************/
        this.btn_save_onclick = function(obj,e)
        {
        	switch(this.cmb_saveType.value) {
        		case "PDF" :
        			this.ubi_viewer.exportPdf();
        			break;
        		case "XLS" :
        			this.ubi_viewer.exportExcel();
        			break;
        		case "DOC" :
        			this.ubi_viewer.exportDocx();
        			break;
        		case "HWP" :
        			this.ubi_viewer.exportHwp();
        			break;
        		case "HAN" :
        			this.ubi_viewer.exportExcelNo();
        			break;
        	}
        }

        this.btn_print_onclick = function(obj,e)
        {
        	if (nexacro.Browser == "IE"){
        	    this.ubi_viewer.printPDF();
        	} else if (nexacro.Browser == "Chrome") {
        	    this.ubi_viewer.printSet();
        	} else {
        	    this.ubi_viewer.printPDF();
        	}
        //	this.ubi_viewer.printSet();
        // 	this.ubi_viewer.print();
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.btn_headClose_onclick = function(obj,e)
        {
        	this.close();
        }

        this.fv_cX;
        this.fv_cY;
        this.sta_headTitle_onlbuttondown = function(obj,e)
        {
        	this.fv_cX = e.screenX;
        	this.fv_cY = e.screenY;
        }

        this.sta_headTitle_onmousemove = function(obj,e)
        {
        	if(e.button == "none")
        	{
        		return;
        	}
        	
        	var nX = e.screenX;
        	var nY = e.screenY;

        	this.parent.set_left(parseInt(this.parent.left) - (this.fv_cX - nX));
        	this.parent.set_top(parseInt(this.parent.top) - (this.fv_cY - nY));

        	this.fv_cX = e.screenX;
        	this.fv_cY = e.screenY;	
        }

        this.btn_scaleUp_onclick = function(obj,e)
        {
        	var nScale = this.spn_scale.value + 20;
        	
        	if(nScale > 300)
        	{
        		nScale = 300;
        	}
        	if(nScale <= 300){
        	    this.spn_scale.set_value(nScale);
        	    this.ubi_viewer.zoomIn();
        	}
        }

        this.btn_scaleDown_onclick = function(obj,e)
        {
        	var nScale = this.spn_scale.value - 20;
        	
        	if(nScale < 60)
        	{
        		nScale = 60;
        	} 
        	if(nScale >= 60){
        	    this.spn_scale.set_value(nScale);
        	    this.ubi_viewer.zoomOut();
        	} 
        }

        this.spn_scale_ontextchanged = function(obj,e)
        {
            nScale = parseInt(e.posttext);
        	
        	if(nScale >= this.ubi_viewer.scale)
        	{
        	    this.ubi_viewer.scale = nScale;
        	    this.ubi_viewer.zoomIn();
        	} else {
        	    this.ubi_viewer.scale = nScale;
        	    this.ubi_viewer.zoomOut();
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.HRM030501_P1_oninit, this);
            this.addEventHandler("onload", this.HRM030501_P1_onload, this);
            this.sta_headTitle.addEventHandler("onlbuttondown", this.sta_headTitle_onlbuttondown, this);
            this.sta_headTitle.addEventHandler("onmousemove", this.sta_headTitle_onmousemove, this);
            this.btn_headClose.addEventHandler("onclick", this.btn_headClose_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_print.addEventHandler("onclick", this.btn_print_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_scaleDown.addEventHandler("onclick", this.btn_scaleDown_onclick, this);
            this.btn_scaleUp.addEventHandler("onclick", this.btn_scaleUp_onclick, this);
            this.spn_scale.addEventHandler("ontextchanged", this.spn_scale_ontextchanged, this);

        };

        this.loadIncludeScript("HRM030501_P1.xfdl");

       
    };
}
)();
