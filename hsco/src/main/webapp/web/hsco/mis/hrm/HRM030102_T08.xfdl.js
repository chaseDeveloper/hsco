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
                this.set_name("HRM030201_T8");
                this.set_classname("form");
                this.set_titletext("발령사항");
                this._setFormPosition(0,0,750,350);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "0", "5", null, null, "0", "2", this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_tbhrmDscplDsps");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"발령일\"/><Cell col=\"2\" text=\"발령구분\"/><Cell col=\"3\" text=\"발령부서\"/><Cell col=\"4\" text=\"발령직위\"/><Cell col=\"5\" text=\"발령직급\"/><Cell col=\"6\" text=\"발령호봉\"/><Cell col=\"7\" text=\"발령직무\"/><Cell col=\"8\" text=\"비고\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"none\" text=\"bind:GNFD_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"none\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:GNFD_SE\" combodataset=\"ds_gnfdSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" edittype=\"none\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:DEPT_CODE\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"none\" text=\"bind:RSPOFC_SE\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"none\" text=\"bind:CLSF_SE\" combodataset=\"ds_clsfSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"none\" text=\"bind:SRCLS_SE\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"none\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:DTY_NM\"/><Cell col=\"8\" style=\"align:left middle;\" text=\"bind:RM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 750, 350, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("form");
            		p.set_titletext("발령사항");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HRM030102_T08.xfdl", "lib::comInclude.xjs");
        this.registerScript("HRM030102_T08.xfdl", function() {
        //include "lib::comInclude.xjs";

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.HRM030201_P01_onload, this);
            this.Grid00.addEventHandler("oncellclick", this.div_work_div_detail00_tab_empInfo_tabpage5_Grid00_oncellclick, this);
            this.Grid00.addEventHandler("onheadclick", this.div_work_div_detail00_tab_empInfo_tabpage5_Grid00_onheadclick, this);

        };

        this.loadIncludeScript("HRM030102_T08.xfdl");

       
    };
}
)();
