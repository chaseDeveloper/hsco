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
                this.set_name("HRM030201_T6");
                this.set_classname("form");
                this.set_titletext("교육훈련내역");
                this._setFormPosition(0,0,750,350);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "0", "4", null, null, "0", "2", this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_tbhrmEdcTraingCompl");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"22\"/><Column size=\"26\"/><Column size=\"67\"/><Column size=\"67\"/><Column size=\"98\"/><Column size=\"81\"/><Column size=\"64\"/><Column size=\"72\"/><Column size=\"51\"/><Column size=\"54\"/><Column size=\"47\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"시작일\"/><Cell col=\"3\" text=\"종료일\"/><Cell col=\"4\" text=\"교육과정\"/><Cell col=\"5\" text=\"교육명\"/><Cell col=\"6\" text=\"시행처\"/><Cell col=\"7\" text=\"이수기관\"/><Cell col=\"8\" text=\"교육시간\"/><Cell col=\"9\" text=\"비용\"/><Cell col=\"10\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? 'none' : 'checkbox'\" edittype=\"checkbox\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');selectbackground:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" text=\"bind:chk\"/><Cell col=\"1\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');selectbackground:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" text=\"expr:currow + 1\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"none\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');selectbackground:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" text=\"bind:BGNDE\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"none\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');selectbackground:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" text=\"bind:ENDDE\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');selectbackground:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:EDC_CRSE_NM\"/><Cell col=\"5\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');selectbackground:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:EDC_NM\"/><Cell col=\"6\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');selectbackground:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:OPERTN_INSTT_NM\"/><Cell col=\"7\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');selectbackground:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '소계' : COMPL_INSTT_NM\"/><Cell col=\"8\" displaytype=\"number\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');selectbackground:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" text=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? comp.parent.parent.parent.parent.parent.fn_timeCnt(STDRY) : EDC_TIME\"/><Cell col=\"9\" displaytype=\"number\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');selectbackground:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:EDC_CT\"/><Cell col=\"10\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');selectbackground:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:RM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 750, 350, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("form");
            		p.set_titletext("교육훈련내역");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HRM030102_T06.xfdl", "lib::comInclude.xjs");
        this.registerScript("HRM030102_T06.xfdl", function() {
        //include "lib::comInclude.xjs";

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.HRM030201_P01_onload, this);
            this.Grid00.addEventHandler("oncellclick", this.div_work_div_detail00_tab_empInfo_tabpage7_Grid00_oncellclick, this);
            this.Grid00.addEventHandler("onheadclick", this.div_work_div_detail00_tab_empInfo_tabpage7_Grid00_onheadclick, this);

        };

        this.loadIncludeScript("HRM030102_T06.xfdl");

       
    };
}
)();
