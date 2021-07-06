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
                this.set_name("HRM030201_T9");
                this.set_classname("form");
                this.set_titletext("포상내역");
                this._setFormPosition(0,0,750,350);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "0", "0", null, null, "0", "0", this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_tbhrmRwardCnfer");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"포상일자\"/><Cell col=\"2\" rowspan=\"2\" text=\"포상종별\"/><Cell col=\"3\" rowspan=\"2\" text=\"포상기관\"/><Cell col=\"4\" rowspan=\"2\" text=\"포상근거\"/><Cell col=\"5\" rowspan=\"2\" text=\"포상평점\"/><Cell col=\"6\" colspan=\"2\" text=\"징계감경\"/><Cell col=\"8\" rowspan=\"2\" text=\"첨부파일\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell row=\"1\" col=\"6\" text=\"적용여부\"/><Cell row=\"1\" col=\"7\" text=\"적용일자\"/><Cell row=\"1\" col=\"9\"/><Cell row=\"1\" col=\"10\"/><Cell row=\"1\" col=\"11\"/><Cell row=\"1\" col=\"12\"/><Cell row=\"1\" col=\"13\"/><Cell row=\"1\" col=\"14\"/><Cell row=\"1\" col=\"15\"/><Cell row=\"1\" col=\"16\"/><Cell row=\"1\" col=\"17\"/><Cell row=\"1\" col=\"18\"/><Cell row=\"1\" col=\"19\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"none\" text=\"bind:RWARD_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"none\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:RWARD_ASORT_SE\" combodataset=\"ds_rwardAsortSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" edittype=\"none\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:RWARD_INSTT_NM\"/><Cell col=\"4\" edittype=\"none\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:RWARD_BASIS\"/><Cell col=\"5\" edittype=\"none\" text=\"bind:RWARD_GRADE\"/><Cell col=\"6\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:RDUCT_AT\"/><Cell col=\"7\" displaytype=\"date\" edittype=\"none\" text=\"bind:DSCPL_DCSN_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"button\" edittype=\"button\" text=\"다운로드\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 750, 350, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("form");
            		p.set_titletext("포상내역");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HRM030102_T09.xfdl", "lib::comInclude.xjs");
        this.registerScript("HRM030102_T09.xfdl", function() {
        //include "lib::comInclude.xjs";

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.HRM030201_P01_onload, this);
            this.Grid00.addEventHandler("oncellclick", this.div_work_tab_empInfo_tabpage6_Grid00_oncellclick, this);
            this.Grid00.addEventHandler("onheadclick", this.div_work_div_detail00_tab_empInfo_tabpage6_Grid00_onheadclick, this);

        };

        this.loadIncludeScript("HRM030102_T09.xfdl");

       
    };
}
)();
