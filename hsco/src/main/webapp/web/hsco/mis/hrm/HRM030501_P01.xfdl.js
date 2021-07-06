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
                this.set_name("HRM030501_P01");
                this.set_classname("HRM030501_P01");
                this.set_titletext("사원조회");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("DS_EMP_COPY", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SRCLS\" type=\"STRING\" size=\"256\"/><Column id=\"ECNY_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_SEARCH", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_EMP", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SRCLS\" type=\"STRING\" size=\"256\"/><Column id=\"ECNY_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_pop", "absolute", "0%", "0", null, "400", "60.94%", null, this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Button("btn_Close", "absolute", "86.5%", "1", null, "28", "1.5%", null, this.div_pop);
            obj.set_taborder("13");
            obj.set_text("닫기");
            this.div_pop.addChild(obj.name, obj);
            obj = new Button("btn_Confirm", "absolute", "73.75%", "1", null, "28", "14.75%", null, this.div_pop);
            obj.set_taborder("14");
            obj.set_text("확인");
            this.div_pop.addChild(obj.name, obj);
            obj = new Grid("grd_EMP", "absolute", "0%", "76", null, "324", "0%", null, this.div_pop);
            obj.set_taborder("15");
            obj.set_binddataset("DS_EMP");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"77\"/><Column size=\"94\"/><Column size=\"175\"/></Columns><Rows><Row size=\"22\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사원번호\"/><Cell col=\"1\" text=\"사원성명\"/><Cell col=\"2\" text=\"부서명\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPNO\"/><Cell col=\"1\" text=\"bind:EMPNM\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:DEPT_NM\"/></Band></Format></Formats>");
            this.div_pop.addChild(obj.name, obj);
            obj = new Button("btn_Search", "absolute", "61%", "1", null, "28", "27.5%", null, this.div_pop);
            obj.set_taborder("16");
            obj.set_text("조회");
            this.div_pop.addChild(obj.name, obj);

            obj = new Div("div_SEARCH", "absolute", "0%", "32", null, "40", "60.94%", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SearchBox");
            this.addChild(obj.name, obj);
            obj = new Static("sta_CLSF_CODE00", "absolute", "1.25%", "6", null, "26", "85.25%", null, this.div_SEARCH);
            obj.set_taborder("4");
            obj.set_text("사원번호");
            obj.style.set_align("right middle");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Edit("edt_emplno", "absolute", "15.5%", "8", null, "22", "68%", null, this.div_SEARCH);
            obj.set_taborder("5");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Edit("edt_emplnm", "absolute", "47.5%", "8", null, "22", "31.5%", null, this.div_SEARCH);
            obj.set_taborder("6");
            this.div_SEARCH.addChild(obj.name, obj);
            obj = new Static("sta_CLSF_CODE01", "absolute", "33.25%", "6", null, "26", "53.25%", null, this.div_SEARCH);
            obj.set_taborder("7");
            obj.set_text("사원명");
            obj.style.set_align("right middle");
            this.div_SEARCH.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 400, this.div_pop,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div00");

            	}
            );
            this.div_pop.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 40, this.div_SEARCH,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_cssclass("div_SearchBox");

            	}
            );
            this.div_SEARCH.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HRM030501_P01");
            		p.set_titletext("사원조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HRM030501_P01.xfdl", "lib::comLib.xjs");
        this.registerScript("HRM030501_P01.xfdl", function() {
        /***********************************************************************
         * 01. 업무구분 : 사원조회
         * 02. 화면명   : SAL010108_P01.xfdl
         * 03. 화면설명 : 사원정보를 조회한다.
         * 04. 작성일   : 2015.06.29
         * 05. 작성자   : 이동석
         * 06. 수정이력 : 2015.06.29 최초생성
         ***********************************************************************
         *     수정일     작성자   내용
         ***********************************************************************
         *    2015.06.29   이동석   최초
         ***********************************************************************
         */

        /***********************************************************************
         * Script Include 
         ************************************************************************/
        //include "lib::lib_Form.xjs"
        //include "lib::comLib.xjs";

         
        /***********************************************************************
         * 설명: 폼로딩시 처리
         ************************************************************************/
        this.SAL010108_P01_onload = function(obj,e)
        {
        	this.fn_search();
        }

        
        /***********************************************************************
         * 설명: 조회버튼 클릭시 처리
         ************************************************************************/
        this.div_pop_btn_Search_onclick = function(obj,e)
        {
        	this.fn_search();
        }

        

        /***********************************************************************
         * 설명: 조회 처리
         ************************************************************************/
        this.fn_search= function()
        {

        	// 초기화	
        	this.DS_EMP.clearData();
        	
        	// 조회조건 	
        	this.DS_SEARCH.clearData();              // 조회 데이터셋 초기화	
        	var nRow = this.DS_SEARCH.addRow();      // 조회 데이터셋 행추가	
         	this.DS_SEARCH.setColumn(nRow,"EMPNO",this.div_SEARCH.edt_emplno.value);
         	this.DS_SEARCH.setColumn(nRow,"EMPNM",this.div_SEARCH.edt_emplnm.value); 
         	this.DS_SEARCH.setColumn(nRow,"RSPOFC_SE",this.div_SEARCH.edt_emplnm.value);
         	this.DS_SEARCH.setColumn(nRow,"WORK_DEPT",this.div_SEARCH.edt_emplnm.value);
         	this.DS_SEARCH.setColumn(nRow,"ADRES",this.div_SEARCH.edt_emplnm.value);
         	this.DS_SEARCH.setColumn(nRow,"DEPT_NM",this.div_SEARCH.edt_emplnm.value);
         	this.DS_SEARCH.setColumn(nRow,"DEPT_CODE",this.div_SEARCH.edt_emplnm.value);
         	
         	var sSvcID        	= "selectEmpnoList";                    
            var sController   	= "/hsco/com/sym/cdm/empNo/selectEmpnoList.do";    
        	var sInDatasets   	= "input1=DS_SEARCH";
        	var sOutDatasets  	= "DS_EMP=output1";	
        	var sArgs = "";	
        	Ex.core.tran(this,sSvcID, sController, sInDatasets, sOutDatasets, sArgs); 
        }

        /***********************************************************************************
        * 설명	: 확인버튼 처리
        ***********************************************************************************/
        this.btn_Confirm_onclick = function(obj,e)
        {
        	this.DS_EMP_COPY.clearData();
        		         
        	var nRow =  this.DS_EMP_COPY.addRow();	         
        	var bSucc;
            bSucc = this.DS_EMP_COPY.copyRow(nRow,this.DS_EMP,this.DS_EMP.rowposition);
            	
        	this.close(this.DS_EMP_COPY.saveXML());
        }

        /***********************************************************************************
        * 설명	: 선택 더블클릭 처리
        ***********************************************************************************/
        this.div_pop_grd_EMP_oncelldblclick = function(obj,e)
        {
        	this.DS_EMP_COPY.clearData();
        		         
        	var nRow =  this.DS_EMP_COPY.addRow();	     
        	    
        	var bSucc;
            bSucc = this.DS_EMP_COPY.copyRow(nRow,this.DS_EMP,this.DS_EMP.rowposition);
            	
            	
        alert(this.DS_EMP_COPY.saveXML());
        	this.close(this.DS_EMP_COPY.saveXML());
        }

        
        /***********************************************************************************
        * 설명	: 트랜잭션 콜백함수를 처리한다.
        ***********************************************************************************/
        this.fn_callBack = function (strSvcId,nErrorCode,strErrorMsg)
        { 
        	if (nErrorCode < 0) 
        	{
        	//	return ExtNx.core.comMsg("alert",strErrorMsg);		
        	}
        	
        	if (strSvcId == "selectEmpnoList") 
        	{
        		
        	}			
        }

        
        /***********************************************************************************
        * 설명	: 헤드클릭 정렬
        ***********************************************************************************/
        this.div_pop_grd_EMP_onheadclick = function(obj,e)
        {
        	LGV_COL_SORT = e.col;
            this._gridSort(obj, e);
        }

        
        /***********************************************************************************
        * 설명	: 닫기
        ***********************************************************************************/
        this.btn_Close_onclick = function(obj,e)
        {
        	this.close();
        }

        

        
        this.div_SEARCH_edt_emplno_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13) {
        		 this.fn_search();
        	}
        }

        this.div_SEARCH_edt_emplnm_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13) {
        		 this.fn_search();
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_pop.btn_Close.addEventHandler("onclick", this.btn_Close_onclick, this);
            this.div_pop.btn_Confirm.addEventHandler("onclick", this.btn_Confirm_onclick, this);
            this.div_pop.grd_EMP.addEventHandler("onheadclick", this.div_pop_grd_EMP_onheadclick, this);
            this.div_pop.grd_EMP.addEventHandler("oncelldblclick", this.div_pop_grd_EMP_oncelldblclick, this);
            this.div_pop.btn_Search.addEventHandler("onclick", this.div_pop_btn_Search_onclick, this);
            this.div_SEARCH.edt_emplno.addEventHandler("onkeyup", this.div_SEARCH_edt_emplno_onkeyup, this);
            this.div_SEARCH.edt_emplnm.addEventHandler("onkeyup", this.div_SEARCH_edt_emplnm_onkeyup, this);

        };

        this.loadIncludeScript("HRM030501_P01.xfdl");

       
    };
}
)();
