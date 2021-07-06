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
                this.set_name("HRM030403_T06");
                this.set_classname("HRM030403");
                this.set_titletext("겸직자현황");
                this._setFormPosition(0,0,1031,705);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("grd_ctsEmpSttusList", "absolute", "0", "35", null, null, "0", "0", this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_ctsEmpSttusList");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"500\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"사원번호\"/><Cell col=\"2\" text=\"사원명\"/><Cell col=\"3\" text=\"현재부서\"/><Cell col=\"4\" text=\"겸직부서\"/><Cell col=\"5\" text=\"직종\"/><Cell col=\"6\" text=\"직급\"/><Cell col=\"7\" text=\"직위\"/><Cell col=\"8\" text=\"직렬\"/><Cell col=\"9\" text=\"겸직발령일자\"/><Cell col=\"10\" text=\"발령사항\"/><Cell col=\"11\" text=\"발령근거\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:EMPNO\"/><Cell col=\"2\" text=\"bind:EMPNM\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:DEPT_NM\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:CTS_DEPT_NM\"/><Cell col=\"5\" text=\"bind:JSSFC_NM\"/><Cell col=\"6\" text=\"bind:CLSF_NM\"/><Cell col=\"7\" text=\"bind:OFCPS_NM\"/><Cell col=\"8\" text=\"bind:JBLN_NM\"/><Cell col=\"9\" displaytype=\"date\" text=\"bind:GNFD_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" style=\"align:left;\" text=\"bind:GNFD_MATTER\" tooltiptext=\"bind:GNFD_MATTER\"/><Cell col=\"11\" style=\"align:left;\" text=\"bind:GNFD_BASIS\" tooltiptext=\"bind:GNFD_BASIS\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0", "31", null, "5", "0", null, this);
            obj.set_taborder("2");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ctsEmpSttus", "absolute", "0", "14", "173", "19", null, null, this);
            obj.set_taborder("3");
            obj.set_text("겸직자현황");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", null, "10", "0", null, this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel_down", "absolute", null, "10", "25", "19", "0", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Gridexceldn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1031, 705, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HRM030403");
            		p.set_titletext("겸직자현황");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HRM030403_T06.xfdl", "lib::comInclude.xjs");
        this.registerScript("HRM030403_T06.xfdl", function() {
        //include "lib::comInclude.xjs";

        /*
        * 함수명		: grd_ctsEmpSttusList_onheadclick
        * 설명			: 헤드클릭 정렬
        * params		: None
        * return Type	: None
        * 사용법		: this.grd_ctsEmpSttusList_onheadclick();
        */
        this.grd_ctsEmpSttusList_onheadclick = function(obj,e)
        {
        	this.fn_gridSort(obj, e, this.parent.parent.ds_ctsEmpSttusList);
        }

        /*
        * 함수명		: fn_gridSort
        * 설명			: 헤드클릭 정렬
        * params		: None
        * return Type	: None
        * 사용법		: this.fn_gridSort();
        */
        this.fn_gridSort = function (obj,e,bindDs)
        {
        	var CONST_ASC_MARK 	= "▲";
        	var CONST_DESC_MARK = "▼";
        	var CUR_GRID_OBJECT = null;
        	
        	// 컬럼의 정렬방식을 'head'의 text에 "↑,↓"여부로 판단.
        	// 이미지로 대체 가능.
        	//sort 방법  asc -> desc -> 해제 -> asc -> desc
        	var strType = obj.getCellProperty("head", e.cell, "displaytype");
        	if (strType == "checkbox") 
        	{
        		return;
        	}
            
        	var bindDs = bindDs;
        	
        	if (bindDs == -1)
        	{
        	    application.trace("bind Dataset 확인요");
        	    return;
        	}
        	
        	if (bindDs.getRowCount() == 0) 
        	{
        		return false;
        	}

        	var BodyColId = (obj.getCellProperty("body", e.col, "text")).toString().split(":");
        	
        	if (BodyColId.length != 2)
        	    return;
        	
        	var sortStatus="";
        	var sSaveHeadText="";
        	
        	//bindDs.set_enableevent(false);
        	for (var i = 0; i < obj.getCellCount("head"); i++) 
        	{
        		if (obj.getCellText(-1, i) == "undefined") 
        		{
        			continue;
        		}

        		var strHeadText = obj.getCellText(-1, i);

        		if (i == e.cell) 
        		{
        			if (strHeadText.substr(strHeadText.length - 1) == CONST_ASC_MARK) 
        			{
        				obj.setCellProperty("head", i, "text", strHeadText.substr(0, strHeadText.length - 1) + CONST_DESC_MARK);
        				bindDs.set_keystring(("S:-" + BodyColId[1]));
        				sortStatus = 2;
        				sSaveHeadText = strHeadText.substr(0, strHeadText.length - 1);
        			}
        			else if (strHeadText.substr(strHeadText.length - 1) == CONST_DESC_MARK) 
        			{
        			    this.gfn_clearSortMark(obj, null, "COM");
        			    bindDs.set_keystring("");
        			    obj.user_orgSort = "";    //공통에서 sort한 정보 저장
        			    return;
        			}
        			else 
        			{
        				obj.setCellProperty("head", i, "text", strHeadText + CONST_ASC_MARK);
        				bindDs.set_keystring(("S:+" + BodyColId[1]));
        				sortStatus = 1;
        				sSaveHeadText = strHeadText;
        			}			
        			
        			Eco.XComp.setUserProperty(obj, "sortKeyString", (sortStatus==1?"S:+":"S:-") + BodyColId[1]);
        			
        		}
        		else 
        		{
        			// 정렬표시 삭제
        			if (strHeadText.substr(strHeadText.length - 1) == CONST_ASC_MARK || strHeadText.substr(strHeadText.length - 1) == CONST_DESC_MARK) 
        			{
        				obj.setCellProperty("head", i, "text", strHeadText.substr(0, strHeadText.length - 1));
        			}
        		}
        	}
        	
        	obj.user_orgSort = bindDs.keystring;    //공통에서 sort한 정보 저장
        	
        	// 대상 grid 에 정렬정보를 가지는 사용자 속성 확인/추가
        	Eco.XComp.setUserProperty(obj, "sortInfos", {});
        	
        	// 정렬대상컬럼 (순서중요)
        	Eco.XComp.setUserProperty(obj, "sortItems", []);
        	
        	var refCell;
        	var format = obj._curFormat;
        	refCell = format._headcells[e.cell];
        	
        	var sortInfos = Eco.XComp.getUserProperty(obj, "sortInfos"),
        	    sortItems = Eco.XComp.getUserProperty(obj, "sortItems"),
        		sortInfo = sortInfos[BodyColId[1]];
        	
        	if ( Eco.isEmpty(sortInfo) )
        	{
        		// executeSort에서 정렬 표시를 위해 cell index 가 필요한데
        		// cell moving 될 경우 index는 변하므로 cell object 를 참조하여 값을 얻어온다. 
        		sortInfo = sortInfos[BodyColId[1]] = { status: 0, text: sSaveHeadText, refCell: refCell};
        	}
        	
        	sortInfo.status = sortStatus;
        	sortItems.push(BodyColId[1]);
        	
        	//bindDs.set_enableevent(true);
        }

        
        this.btn_excel_down_onclick = function(obj,e)
        {
        	this.gfn_exportExcel(this.grd_ctsEmpSttusList, "exportExl");
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.grd_ctsEmpSttusList.addEventHandler("onheadclick", this.grd_nowAppntWorkYycntList_onheadclick, this);
            this.Static03.addEventHandler("onclick", this.Static03_onclick, this);
            this.btn_excel_down.addEventHandler("onclick", this.btn_excel_down_onclick, this);

        };

        this.loadIncludeScript("HRM030403_T06.xfdl");

       
    };
}
)();
