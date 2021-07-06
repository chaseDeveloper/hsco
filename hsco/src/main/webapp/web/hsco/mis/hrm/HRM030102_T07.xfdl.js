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
                this.set_name("HRM030201_T7");
                this.set_classname("form");
                this.set_titletext("국외출장내역");
                this._setFormPosition(0,0,750,350);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "0", "4", null, null, "0", "2", this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_tbhrmHrFrntnInspnSdytrn");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"시작일\"/><Cell col=\"2\" text=\"종료일\"/><Cell col=\"3\" text=\"목적\"/><Cell col=\"4\" text=\"시행처\"/><Cell col=\"5\" text=\"국가명\"/><Cell col=\"6\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:BGNDE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"decoratetext\" text=\"bind:ENDDE\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:PURPS\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:OPERTN_OFFIC_NM\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:NATION_NM\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:RM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 750, 350, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("form");
            		p.set_titletext("국외출장내역");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HRM030102_T07.xfdl", "lib::comInclude.xjs");
        this.registerScript("HRM030102_T07.xfdl", function() {
        //include "lib::comInclude.xjs";

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.HRM030201_P01_onload, this);
            this.Grid00.addEventHandler("oncellclick", this.div_work_div_detail00_tab_empInfo_tabpage9_Grid00_oncellclick, this);
            this.Grid00.addEventHandler("onheadclick", this.div_work_div_detail00_tab_empInfo_tabpage9_Grid00_onheadclick, this);

        };

        this.loadIncludeScript("HRM030102_T07.xfdl");

       
    };
}
)();
