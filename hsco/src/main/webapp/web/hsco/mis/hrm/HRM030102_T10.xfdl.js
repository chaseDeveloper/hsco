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
                this.set_name("HRM030201_T10");
                this.set_classname("form");
                this.set_titletext("징계내역");
                this._setFormPosition(0,0,750,350);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("grd_dscplPrsList", "absolute", "0", "0", null, null, "0", "0", this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_dscplPrsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"징계요구일자\"/><Cell col=\"2\" text=\"징계확정일자\"/><Cell col=\"3\" text=\"징계량\"/><Cell col=\"4\" text=\"사유\"/><Cell col=\"5\" text=\"징계의결기관\"/><Cell col=\"6\" text=\"징계말소일자\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" text=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:DSCPL_DEMAND_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"date\" text=\"bind:DSCPL_DCSN_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:DSCPL_ERSR_DE\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 750, 350, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("form");
            		p.set_titletext("징계내역");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HRM030102_T10.xfdl", "lib::comInclude.xjs");
        this.registerScript("HRM030102_T10.xfdl", function() {
        //include "lib::comInclude.xjs";

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.HRM030201_P01_onload, this);
            this.grd_dscplPrsList.addEventHandler("oncellclick", this.div_work_grd_dscplPrsList_oncellclick, this);
            this.grd_dscplPrsList.addEventHandler("onheadclick", this.div_work_grd_dscplPrsList_onheadclick, this);
            this.grd_dscplPrsList.addEventHandler("onexpandup", this.div_work_grd_dscplPrsList_onexpandup, this);

        };

        this.loadIncludeScript("HRM030102_T10.xfdl");

       
    };
}
)();
