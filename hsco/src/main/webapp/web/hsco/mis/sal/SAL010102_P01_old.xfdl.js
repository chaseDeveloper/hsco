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
                this.set_name("SAL010102_P01");
                this.set_classname("UI_SAL010102_P01");
                this.set_titletext("연봉대상자선택");
                this._setFormPosition(0,0,530,500);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("DS_CLSF_CODE", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"data\">사장</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"data\">이사</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"data\">1급</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"data\">2급</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"data\">3급</Col></Row><Row><Col id=\"code\">06</Col><Col id=\"data\">4급</Col></Row><Row><Col id=\"code\">07</Col><Col id=\"data\">5급</Col></Row><Row><Col id=\"code\">08</Col><Col id=\"data\">6급</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_SRCLS", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">1</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">2</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">3</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"data\">4</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"data\">5</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"data\">6</Col></Row><Row><Col id=\"code\">7</Col><Col id=\"data\">7</Col></Row><Row><Col id=\"code\">8</Col><Col id=\"data\">8</Col></Row><Row><Col id=\"code\">9</Col><Col id=\"data\">9</Col></Row><Row><Col id=\"code\">10</Col><Col id=\"data\">10</Col></Row><Row><Col id=\"code\">11</Col><Col id=\"data\">11</Col></Row><Row><Col id=\"code\">12</Col><Col id=\"data\">12</Col></Row><Row><Col id=\"code\">13</Col><Col id=\"data\">13</Col></Row><Row><Col id=\"code\">14</Col><Col id=\"data\">14</Col></Row><Row><Col id=\"code\">15</Col><Col id=\"data\">15</Col></Row><Row><Col id=\"code\">16</Col><Col id=\"data\">16</Col></Row><Row><Col id=\"code\">17</Col><Col id=\"data\">17</Col></Row><Row><Col id=\"code\">18</Col><Col id=\"data\">18</Col></Row><Row><Col id=\"code\">19</Col><Col id=\"data\">19</Col></Row><Row><Col id=\"code\">20</Col><Col id=\"data\">20</Col></Row><Row><Col id=\"code\">21</Col><Col id=\"data\">21</Col></Row><Row><Col id=\"code\">22</Col><Col id=\"data\">22</Col></Row><Row><Col id=\"code\">23</Col><Col id=\"data\">23</Col></Row><Row><Col id=\"code\">24</Col><Col id=\"data\">24</Col></Row><Row><Col id=\"code\">25</Col><Col id=\"data\">25</Col></Row><Row><Col id=\"code\">26</Col><Col id=\"data\">26</Col></Row><Row><Col id=\"code\">27</Col><Col id=\"data\">27</Col></Row><Row><Col id=\"code\">28</Col><Col id=\"data\">28</Col></Row><Row><Col id=\"code\">29</Col><Col id=\"data\">29</Col></Row><Row><Col id=\"code\">30</Col><Col id=\"data\">30</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_ANSLRY_EMPL", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SRCLS\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"BASS_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"APPLC_DE\" type=\"STRING\" size=\"256\"/><Column id=\"OFCPS\" type=\"STRING\" size=\"256\"/><Column id=\"DTY_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_ANSLRY_EMPL_COPY", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SRCLS\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"BASS_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"APPLC_DE\" type=\"STRING\" size=\"256\"/><Column id=\"OFCPS\" type=\"STRING\" size=\"256\"/><Column id=\"DTY_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_DEPT", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"YND\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "0%", "0", "530", "500", null, null, this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_PopupBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "0%", "2", null, "496", "97.04%", null, this);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", null, "2", "15", "496", "0", null, this);
            obj.set_taborder("8");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0.38%", "0", null, "15", "0.38%", null, this);
            obj.set_taborder("10");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "15", "17", "210", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_text("연봉대상자선택");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "3.4%", "40", null, "5", "3.4%", null, this);
            obj.set_taborder("12");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_APPLC_DE", "absolute", "232", "15", "61", "26", null, null, this);
            obj.set_taborder("13");
            obj.set_text("적용일자");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_APPLC_DE", "absolute", "299", "17", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_cssclass("cal_WF_Essential");

            obj = new Button("btn_Confirm", "absolute", "412", "15", "50", "25", null, null, this);
            obj.set_taborder("15");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close", "absolute", "465", "15", "50", "25", null, null, this);
            obj.set_taborder("16");
            obj.set_text("종료");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ANSLRY_INFO_DATE", "absolute", "15", "45", "500", null, null, "15", this);
            obj.set_taborder("17");
            obj.set_binddataset("DS_ANSLRY_EMPL");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"33\"/><Column size=\"105\"/><Column size=\"81\"/><Column size=\"71\"/><Column size=\"57\"/><Column size=\"44\"/><Column size=\"108\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"부서명\"/><Cell col=\"2\" text=\"사번\"/><Cell col=\"3\" text=\"사원명\"/><Cell col=\"4\" text=\"직급\"/><Cell col=\"5\" text=\"호봉\"/><Cell col=\"6\" text=\"기본급\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:DEPT_NAME\"/><Cell col=\"2\" text=\"bind:EMPNO\"/><Cell col=\"3\" text=\"bind:EMPNM\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" text=\"bind:CLSF_CODE\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" text=\"bind:SRCLS\"/><Cell col=\"6\" displaytype=\"number\" text=\"bind:BASS_AMOUNT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "2", "483", null, null, "3", "0", this);
            obj.set_taborder("19");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 530, 500, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("UI_SAL010102_P01");
            		p.set_titletext("연봉대상자선택");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SAL010102_P01_old.xfdl", "lib::comInclude.xjs");
        this.registerScript("SAL010102_P01_old.xfdl", function() {
        /***********************************************************************
         * 01. 업무구분 : 연봉정보대상자 선택
         * 02. 화면명   : SAL010102_P01.xfdl
         * 03. 화면설명 : 연봉정보대상자 선택.
         * 04. 작성일   : 2015.06.09
         * 05. 작성자   : 이동석
         * 06. 수정이력 : 2015.06.09 최초생성
         ***********************************************************************
         *     수정일     작성자   내용
         ***********************************************************************
         *    2015.06.09   이동석   최초
         ***********************************************************************
         */

        /***********************************************************************
         * Script Include 
         ************************************************************************/
        //include "lib::comInclude.xjs";

         
        /***********************************************************************
         * 설명: 폼로딩시 처리
         ************************************************************************/
        this.SAL010102_P01_onload = function(obj,e)
        {
        	
        	this.cal_APPLC_DE.set_value(this.gfn_today());
        	this.fn_search();

        }

        
        /***********************************************************************
         * 설명: 조회 처리
         ************************************************************************/
        this.fn_search= function()
        {
        	this.DS_SEARCH.clearData();              
        	var nRow = this.DS_SEARCH.addRow();      
        	this.DS_SEARCH.setColumn(nRow,"YND","1");
        	this.fn_transaction("selectEmplcodeList");		
        }

        /**********************************************************************
         * CALL TRANSACTION 영역
         **********************************************************************/ 
        this.fn_transaction = function(strSvcId)
        {
        	switch (strSvcId) {
        	    case "selectEmplcodeList": 
        			var sController   	= "hsco/mis/sal/SAL010110/selectEmplcodeList.do";
        			var sInDatasets   	= "input1=DS_SEARCH";
        			var sOutDatasets  	= "DS_ANSLRY_EMPL=output1";
        			break;		
        	}

        	Ex.core.tran(this, strSvcId, sController, sInDatasets, sOutDatasets); 
        }

        
        /***********************************************************************************
        * 설명	: 트랜잭션 콜백함수를 처리한다.
        ***********************************************************************************/
        this.fn_callBack = function (strSvcId,nErrorCode,strErrorMsg)
        { 
        	if (nErrorCode != 0){
        		this.gfn_callback_message(strSvcId, nErrorCode, strErrorMsg);	
        	} else {
        	    switch (strSvcId) {
        		    case "selectDeptcodeList":		    	
        				break;		
        		}
        	}	
        }

        /***********************************************************************************
        * 설명	: 확인처리
        ***********************************************************************************/
        this.btn_Confirm_onclick = function(obj,e)
        {
        	this.DS_ANSLRY_EMPL_COPY.clearData();
        	
        	var Hrow_con = this.DS_ANSLRY_EMPL.getRowCount();
        	var cnt = 0;
        	for(var i=0; i<= Hrow_con-1; i++){
        	
        	     if(this.DS_ANSLRY_EMPL.getColumn(i,"CHK") == 1){	
        	         
        	         var nRow =  this.DS_ANSLRY_EMPL_COPY.addRow();	         
        	         var bSucc;
                     bSucc = this.DS_ANSLRY_EMPL_COPY.copyRow(nRow,this.DS_ANSLRY_EMPL,i);
                     this.DS_ANSLRY_EMPL_COPY.setColumn(nRow,"APPLC_DE",this.cal_APPLC_DE.value);
                     cnt++;
        	     }
        	}
        	if(cnt == 0){
        		this.gfn_message("comm.err", "선택된 대상이 없습니다.");
        		return;
        	}
        	this.close(this.DS_ANSLRY_EMPL_COPY.saveXML());	
        }

        /***********************************************************************************
        * 설명	: 닫기
        ***********************************************************************************/
        this.btn_Close_onclick = function(obj,e)
        {
        	this.close();
        }

        // 그리드 헤드체크박스 클릭시 전체 선택 및 해제
        this.grd_ANSLRY_INFO_DATE_oncellclick = function(obj,e)
        {
        	if(obj.name = "CHK")
        	{
        		if(e.cell == 0) {
        			obj.setCellProperty("Head", e.cell, "text", "0");
        		}
        	}	
        }

        // Body의 체크 버튼이 눌러졌을 때, Head 부분의 체크 버튼을 꺼 줌.
        this.grd_ANSLRY_INFO_DATE_onheadclick = function(obj,e)
        {
        	if(e.cell == 0){
        		this.gfn_setGridCheckAll(obj, e);
        	}
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.SAL010102_P01_onload, this);
            this.btn_Confirm.addEventHandler("onclick", this.btn_Confirm_onclick, this);
            this.btn_Close.addEventHandler("onclick", this.btn_Close_onclick, this);
            this.grd_ANSLRY_INFO_DATE.addEventHandler("onheadclick", this.grd_ANSLRY_INFO_DATE_onheadclick, this);
            this.grd_ANSLRY_INFO_DATE.addEventHandler("oncellclick", this.grd_ANSLRY_INFO_DATE_oncellclick, this);

        };

        this.loadIncludeScript("SAL010102_P01_old.xfdl");

       
    };
}
)();
