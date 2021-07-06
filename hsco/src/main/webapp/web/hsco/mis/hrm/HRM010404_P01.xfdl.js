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
                this.set_name("HRM010404_P01");
                this.set_classname("HRM010404_P01");
                this.set_titletext("대상자조회");
                this._setFormPosition(0,0,590,500);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("DS_EMP", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OFCPS\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SRCLS\" type=\"STRING\" size=\"256\"/><Column id=\"ECNY_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO_2\" type=\"STRING\" size=\"256\"/><Column id=\"BRTHDY\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_SEARCH", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"STDR_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_EMP_COPY", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OFCPS\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SRCLS\" type=\"STRING\" size=\"256\"/><Column id=\"ECNY_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO_2\" type=\"STRING\" size=\"256\"/><Column id=\"BRTHDY\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_jssfc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_clsfSe", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "0%", "0", null, "500", "0%", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_PopupBg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search", "absolute", "420", "15", "50", "25", null, null, this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Confirm", "absolute", "472", "15", "50", "25", null, null, this);
            obj.set_taborder("3");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close", "absolute", "524", "15", "50", "25", null, null, this);
            obj.set_taborder("4");
            obj.set_text("종료");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_EMP", "absolute", "15", "88", null, null, "15", "15", this);
            obj.set_taborder("9");
            obj.set_binddataset("DS_EMP");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 데이터가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"부서명\"/><Cell col=\"2\" text=\"사번\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"직종\"/><Cell col=\"5\" text=\"직급\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:DEPT_NM\"/><Cell col=\"2\" text=\"bind:EMPNO\"/><Cell col=\"3\" text=\"bind:EMPNM\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:JSSFC_SE\" combodataset=\"ds_jssfc\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"5\" displaytype=\"combo\" text=\"bind:HR_CLSF_SE\" combodataset=\"ds_clsfSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "15", "0", null, "15", "15", null, this);
            obj.set_taborder("12");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "0", "2", "15", "496", null, null, this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", null, "2", "15", "496", "0", null, this);
            obj.set_taborder("14");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "15", "17", "179", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("대상자조회");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "15", "45", null, "33", "15", null, this);
            obj.set_taborder("17");
            obj.set_cssclass("div_WFSA_Box");
            this.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "300", "5", "37", "21", null, null, this.div_search);
            obj.set_taborder("1");
            obj.set_text("사번");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_emplno", "absolute", "337", "5", "71", "21", null, null, this.div_search);
            obj.set_taborder("3");
            obj.set_maxlength("8");
            obj.set_inputtype("number");
            obj.set_lengthunit("utf8");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "165", "5", "35", "21", null, null, this.div_search);
            obj.set_taborder("4");
            obj.set_text("성명");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_emplnm", "absolute", "201", "5", "84", "21", null, null, this.div_search);
            obj.set_taborder("2");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("30");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "14", "5", "50", "21", null, null, this.div_search);
            obj.set_taborder("5");
            obj.set_text("직종");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cmb_EMPL_SE", "absolute", "52", "5", "98", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_jssfc");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.style.set_font("10 Gulim");
            obj = new Static("Static00", "absolute", "408", "1", "15", "31", null, null, this.div_search);
            obj.set_taborder("6");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "166", "47", "15", "31", null, null, this);
            obj.set_taborder("18");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "301", "46", "15", "31", null, null, this);
            obj.set_taborder("19");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "15", "78", null, "10", "15", null, this);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "1", "483", null, "15", "1", null, this);
            obj.set_taborder("21");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "3.33%", "40", null, "5", "3.33%", null, this);
            obj.set_taborder("22");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "19", "46", "15", "31", null, null, this);
            obj.set_taborder("23");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 33, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("17");
            		p.set_cssclass("div_WFSA_Box");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 590, 500, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HRM010404_P01");
            		p.set_titletext("대상자조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HRM010404_P01.xfdl", "lib::comInclude.xjs");
        this.registerScript("HRM010404_P01.xfdl", function() {
        /***********************************************************************
         * 01. 업무구분 : 사원조회
         * 02. 화면명   : HRM010404_P01.xfdl
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

        //include "lib::comInclude.xjs";
        var empno = this.parent.EMPNO;
        var empnm = this.parent.EMPNM;
        this.fv_objForm;
         
        /***********************************************************************
         * 설명: 폼로딩시 처리
         ************************************************************************/
        this.HRM010404_P01_onload = function(obj,e)
        {
        	this.div_search.edt_emplnm.setFocus(true);
        	if(empno){
        	    this.div_search.edt_emplno.value = empno;
        	}
        	if(empnm){
        	    this.div_search.edt_emplnm.value = empnm;
        	}
        	
        	this.fn_loadCombo();
        	this.fn_search();
        }

        /***********************************************************************
         * 설명: 공통조회
         ************************************************************************/
        this.fn_loadCombo = function()
        {
        	var comboParams = [ ["ds_jssfc", "HRM001", 1, "전체"]   // 직종
        					   ,["ds_clsfSe", "HRM237", 1, "전체"]   // 직급
        	                  ];

        	this.gfn_comboLoad(comboParams, this.fn_callbackAfter);
        	
        }

        this.fn_callbackAfter = function()
        {
        	this.ds_jssfc.filter("CODE=='001' || CODE=='002'");	
        }

        /***********************************************************************
         * 설명: 조회버튼 클릭시 처리
         ************************************************************************/
        this.btn_Search_onclick = function(obj,e)
        {
        	this.fn_search();
        }

        

        /***********************************************************************
         * 설명: 조회 처리
         ************************************************************************/
        this.fn_search= function()
        {
        	this.fv_objForm = this.parent.arg_0;	 	
        	
        	// 초기화	
        	this.DS_EMP.clearData();
        	
        	// 조회조건 	
        	this.DS_SEARCH.clearData();              // 조회 데이터셋 초기화	
        	var nRow = this.DS_SEARCH.addRow();      // 조회 데이터셋 행추가	
         	this.DS_SEARCH.setColumn(nRow,"EMPNO",this.div_search.edt_emplno.value);
         	this.DS_SEARCH.setColumn(nRow,"EMPNM",this.div_search.edt_emplnm.value); 	
         	this.DS_SEARCH.setColumn(nRow,"JSSFC_SE",this.div_search.cmb_EMPL_SE.value); 	
         	//검색된 부서코드를 가져옴 2016.07.09
         	this.DS_SEARCH.setColumn(nRow,"DEPT_CODE",this.parent.deptCd); 
         	this.DS_SEARCH.setColumn(nRow,"STDR_YEAR",this.parent.stdrYear); 
         	this.DS_SEARCH.setColumn(nRow,"ODR_SE",this.parent.odrSe); 
         	
        	var sSvcID        	= "selectEmpnoList";                    
            var sController   	= "hsco/mis/hrm/HRM010404/selectEmpnoList.do";
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
        		if(!this.parent.isUserPopup) {
        			this.DS_EMP.filter("DEPT_CODE!=null");
        		}
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

        /***********************************************************************************
        * 설명	: 사번 엔터키
        ***********************************************************************************/
        this.div_search_edt_emplno_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13) {
        		 this.fn_search();
        	}
        }

        /***********************************************************************************
        * 설명	: 사원명 엔터키
        ***********************************************************************************/
        this.div_search_edt_emplnm_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13) {
        		 this.fn_search();
        	}
        }

        this.Button00_onclick = function(obj,e)
        {
        	this.close();
        }

        this.div_search_cmb_EMPL_SE_onitemchanged = function(obj,e)
        {
        	this.fn_search();
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.HRM010404_P01_onload, this);
            this.btn_Search.addEventHandler("onclick", this.btn_Search_onclick, this);
            this.btn_Confirm.addEventHandler("onclick", this.btn_Confirm_onclick, this);
            this.btn_Close.addEventHandler("onclick", this.btn_Close_onclick, this);
            this.grd_EMP.addEventHandler("onheadclick", this.div_pop_grd_EMP_onheadclick, this);
            this.grd_EMP.addEventHandler("oncelldblclick", this.div_pop_grd_EMP_oncelldblclick, this);
            this.div_search.edt_emplno.addEventHandler("onkeyup", this.div_search_edt_emplno_onkeyup, this);
            this.div_search.edt_emplnm.addEventHandler("onkeyup", this.div_search_edt_emplnm_onkeyup, this);
            this.div_search.cmb_EMPL_SE.addEventHandler("onitemchanged", this.div_search_cmb_EMPL_SE_onitemchanged, this);

        };

        this.loadIncludeScript("HRM010404_P01.xfdl");

       
    };
}
)();
