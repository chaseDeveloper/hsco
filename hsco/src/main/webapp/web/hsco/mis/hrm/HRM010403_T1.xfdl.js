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
                this.set_name("HRM010403_T1");
                this.set_classname("");
                this.set_titletext("부서장추천 집계");
                this._setFormPosition(0,0,1059,735);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("DS_GRP_SE", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">1</Col><Col id=\"CD_NM\">정원</Col></Row><Row><Col id=\"CD\">2</Col><Col id=\"CD_NM\">현원</Col></Row><Row><Col id=\"CD\">3</Col><Col id=\"CD_NM\">결원</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_DEPT_SE", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">10</Col><Col id=\"CD_NM\">도시공사</Col></Row><Row><Col id=\"CD\">20</Col><Col id=\"CD_NM\">본부</Col></Row><Row><Col id=\"CD\">30</Col><Col id=\"CD_NM\">실</Col></Row><Row><Col id=\"CD\">40</Col><Col id=\"CD_NM\">단</Col></Row><Row><Col id=\"CD\">50</Col><Col id=\"CD_NM\">팀</Col></Row><Row><Col id=\"CD\">60</Col><Col id=\"CD_NM\"/></Row><Row><Col id=\"CD\">70</Col><Col id=\"CD_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_BPLC_SE", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">본사</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">주거복지처</Col></Row><Row><Col id=\"CD\">03</Col><Col id=\"CD_NM\">레포츠센터</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_DTY_R_DTL", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STDR_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"3\"/><Column id=\"SPORT_SE\" type=\"STRING\" size=\"3\"/><Column id=\"D01\" type=\"STRING\" size=\"256\"/><Column id=\"D02\" type=\"STRING\" size=\"256\"/><Column id=\"D03\" type=\"STRING\" size=\"256\"/><Column id=\"M01\" type=\"STRING\" size=\"1024\"/><Column id=\"M02\" type=\"STRING\" size=\"1024\"/><Column id=\"M03\" type=\"STRING\" size=\"1024\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_DR_LIST", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STDR_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"3\"/><Column id=\"RECOMEND_MAN_EMPNO\" type=\"STRING\" size=\"8\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNDCY_MAN_EMPNO\" type=\"STRING\" size=\"8\"/><Column id=\"C_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DCSN_AT\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_RE_SM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNDCY_MAN_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"TCNT\" type=\"STRING\" size=\"256\"/><Column id=\"A1\" type=\"STRING\" size=\"256\"/><Column id=\"A2\" type=\"STRING\" size=\"256\"/><Column id=\"A3\" type=\"STRING\" size=\"256\"/><Column id=\"A4\" type=\"STRING\" size=\"256\"/><Column id=\"A5\" type=\"STRING\" size=\"256\"/><Column id=\"A6\" type=\"STRING\" size=\"256\"/><Column id=\"B1\" type=\"STRING\" size=\"256\"/><Column id=\"B2\" type=\"STRING\" size=\"256\"/><Column id=\"B3\" type=\"STRING\" size=\"256\"/><Column id=\"B4\" type=\"STRING\" size=\"256\"/><Column id=\"B5\" type=\"STRING\" size=\"256\"/><Column id=\"B6\" type=\"STRING\" size=\"256\"/><Column id=\"C1\" type=\"STRING\" size=\"256\"/><Column id=\"C2\" type=\"STRING\" size=\"256\"/><Column id=\"C3\" type=\"STRING\" size=\"256\"/><Column id=\"C4\" type=\"STRING\" size=\"256\"/><Column id=\"C5\" type=\"STRING\" size=\"256\"/><Column id=\"C6\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STDR_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_work", "absolute", "1", "1", null, null, "1", "1", this);
            obj.set_taborder("37");
            obj.style.set_background("#00000000");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0", "5", null, null, "0", "0", this.div_work);
            obj.set_taborder("0");
            obj.set_binddataset("DS_RE_SM");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"92\" band=\"left\"/><Column size=\"134\" band=\"left\"/><Column size=\"80\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"58\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"부서명\"/><Cell col=\"2\" colspan=\"2\" text=\"추천 부서장\"/><Cell col=\"4\" rowspan=\"2\" text=\"합계\"/><Cell col=\"5\" colspan=\"6\" text=\"업무직\"/><Cell col=\"11\" colspan=\"6\" text=\"기술직\"/><Cell col=\"17\" colspan=\"6\" text=\"기능직\"/><Cell row=\"1\" col=\"2\" text=\"사번\"/><Cell row=\"1\" col=\"3\" text=\"성명\"/><Cell row=\"1\" col=\"5\" text=\"1급\"/><Cell row=\"1\" col=\"6\" text=\"2급\"/><Cell row=\"1\" col=\"7\" text=\"3급\"/><Cell row=\"1\" col=\"8\" text=\"4급\"/><Cell row=\"1\" col=\"9\" text=\"5급\"/><Cell row=\"1\" col=\"10\" text=\"6급\"/><Cell row=\"1\" col=\"11\" text=\"1급\"/><Cell row=\"1\" col=\"12\" text=\"2급\"/><Cell row=\"1\" col=\"13\" text=\"3급\"/><Cell row=\"1\" col=\"14\" text=\"4급\"/><Cell row=\"1\" col=\"15\" text=\"5급\"/><Cell row=\"1\" col=\"16\" text=\"6급\"/><Cell row=\"1\" col=\"17\" text=\"1급\"/><Cell row=\"1\" col=\"18\" text=\"2급\"/><Cell row=\"1\" col=\"19\" text=\"3급\"/><Cell row=\"1\" col=\"20\" text=\"4급\"/><Cell row=\"1\" col=\"21\" text=\"5급\"/><Cell row=\"1\" col=\"22\" text=\"6급\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:DEPT_NM\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"2\" text=\"bind:CNDCY_MAN_EMPNO\"/><Cell col=\"3\" text=\"bind:EMPNM\"/><Cell col=\"4\" celltype=\"none\" style=\"font:bold 9 Dotum;\" text=\"bind:TCNT\"/><Cell col=\"5\" text=\"bind:A1\"/><Cell col=\"6\" text=\"bind:A2\"/><Cell col=\"7\" text=\"bind:A3\"/><Cell col=\"8\" text=\"bind:A4\"/><Cell col=\"9\" text=\"bind:A5\"/><Cell col=\"10\" text=\"bind:A6\"/><Cell col=\"11\" text=\"bind:B1\"/><Cell col=\"12\" text=\"bind:B2\"/><Cell col=\"13\" text=\"bind:B3\"/><Cell col=\"14\" text=\"bind:B4\"/><Cell col=\"15\" text=\"bind:B5\"/><Cell col=\"16\" text=\"bind:B6\"/><Cell col=\"17\" text=\"bind:C1\"/><Cell col=\"18\" text=\"bind:C2\"/><Cell col=\"19\" text=\"bind:C3\"/><Cell col=\"20\" text=\"bind:C4\"/><Cell col=\"21\" text=\"bind:C5\"/><Cell col=\"22\" text=\"bind:C6\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1056, 750, this.div_work,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("37");
            		p.style.set_background("#00000000");
            		p.set_scrollbars("none");

            	}
            );
            this.div_work.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1059, 735, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("부서장추천 집계");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item7","Search00.D_EOPCHE_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","ENTRPS_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Search00.D_DAEPYOJA_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","REPRSNT_MAN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Search00.D_POST_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","POST_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Search00.D_JUSO_EDIT1","value","TBITM_MNTNC_MENDNG_ENTRPS","ADRES");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Search00.D_JUSO_EDIT2","value","TBITM_MNTNC_MENDNG_ENTRPS","DETAIL_ADRES");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Search00.D_TEL_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","CTTPC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Search00.D_FAX_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","FAX_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","Search00.D_SAYONG_RADIO","value","TBITM_MNTNC_MENDNG_ENTRPS","USE_ENNC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","Search00.D_BIGO_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","RM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Tab00.tabpage1.D_NAME_EDIT","value","TBITM_ENTRPS_EMP","ENTRPS_EMP_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Tab00.tabpage1.D_JIKWI_EDIT","value","TBITM_ENTRPS_EMP","OFCPS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Tab00.tabpage1.D_DAMDANG_EDIT","value","TBITM_ENTRPS_EMP","CHRG_JOB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Tab00.tabpage1.D_JIWON_COMBO","value","TBITM_ENTRPS_EMP","SPORT_STLE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Tab00.tabpage1.D_TEL_EDIT","value","TBITM_ENTRPS_EMP","CTTPC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Tab00.tabpage1.D_EMAIL_EDIT","value","TBITM_ENTRPS_EMP","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div_DETAIL00.edt_ENTRPS_NM","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","ENTRPS_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","div_DETAIL00.edt_REPRSNT_MAN","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","REPRSNT_MAN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","div_DETAIL00.mae_POST_NO","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","POST_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","div_DETAIL00.edt_ADRES","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","ADRES");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","div_DETAIL00.edt_DETAIL_ADRES","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","DETAIL_ADRES");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","div_DETAIL00.edt_CTTPC","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","CTTPC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","div_DETAIL00.edt_FAX_NO","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","FAX_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","div_DETAIL00.edt_USE_ENNC","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","USE_ENNC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","div_DETAIL00.txt_RM","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","RM");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HRM010403_T1.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("HRM010403_T1.xfdl", "mis_lib::misUtil.xjs");
        this.registerScript("HRM010403_T1.xfdl", function() {
        /***********************************************************************
         * 화면ID   : HRM010403_T1.xfdl
         * 화면명   : 부서장추천 집계
         * 화면설명 : 
         * 작성일   : 2015.06.24
         * 작성자   : 박병일
         * 수정이력 :  
         ***********************************************************************  
         *     수정일     작성자   내용
         ***********************************************************************
         *    
         ***********************************************************************
         */

        /***********************************************************************
         * Script Include 
         ************************************************************************/
        //include "lib::comInclude.xjs";
        //include "mis_lib::misUtil.xjs";

        /***********************************************************************
        * 화면 변수 선언부
        ************************************************************************/

        

        /***********************************************************************
         * onInit / onLoad 영역
         ***********************************************************************/
        this.HRM010403_T1_oninit = function(obj,e)
        {
        	// Form 초기화
        	this.fn_init_form();
        	// DataSet 초기화
        	this.fn_init_dataset();
        } 
         
        this.HRM010403_T1_onload = function(obj,e)
        {
        	// ..
        }
        /*
         * 함수명  	: initForm
         * 설명 		: Form을 초기화한다.
         * params  		: None
         * return Type 	: None
         * 사용법		: this.initForm();
         */ 
        this.fn_init_form = function()
        {
        	this.gfn_initForm(this);
        	this.fn_misFormInit(this);	 
        }

        /*
         * 함수명  	: initDataset
         * 설명 		: Dataset을 초기화한다
         * params  		: None
         * return Type 	: None
         * 사용법		: this.initDataset();
         */
        this.fn_init_dataset = function()
        {
        	// 조건에 사용되는 Dataset 초기화
        	this.gfn_initCondDs(this, this.div_search);
        }

        
        /***********************************************************************
        * Transaction 영역 시작
        ************************************************************************/

        /***********************************************************************
         * Transaction 관련 이벤트 핸들러 
         **********************************************************************/

        /*
         * 함수명  	: fn_search
         * 설명 		: 조회 이벤트 처리
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_search();
         */
        this.fn_search= function()
        {
        	this.DS_RE_SM.clearData();
        	this.fn_transaction("mainSearchList");
        }

        /**********************************************************************
         * CALL TRANSACTION 영역
         **********************************************************************/
         
        /*
         * 함수명  	: fn_transaction
         * 설명 		: Transaction 요청 처리 함수
         * params  		: strSvcId : 서비스요청 ID
         * return Type 	: None
         * 사용법		: this.fn_transaction("SELECT");
         */
        this.fn_transaction = function(strSvcId)
        {
        	switch (strSvcId) {
        		case "mainSearchList": // List 불러오기
        			var sController   	= "hsco/mis/hrm/HRM010403T01/mainSearchList.do";		
        			var sInDatasets   	= "input1=ds_cond";
        			var sOutDatasets  	= "DS_RE_SM=output1";
        			break;
        	}

        	Ex.core.tran(this, strSvcId, sController, sInDatasets, sOutDatasets);
        }

        /**********************************************************************
         * Transaction Callback 영역
         ***********************************************************************/
         
         /*
         * 함수명  	: fn_callBack
         * 설명 		: Transaction Callback 처리
         * params  		: strSvcId    : 서비스요청 ID
         *                nErrorCode  : 오류 메시지 코드 ([예] 0 : Success, 그밖의 경우, error)
         *                strErrorMsg : 오류 메시지([예]  success.insert|정상적으로 등록되었습니다.)
         * return Type 	: None
         * 사용법		: 
         */
        this.fn_callBack = function (strSvcId,nErrorCode,strErrorMsg)
        {
        	if(nErrorCode != '0') {
        		this.gfn_callback_message(strSvcId, nErrorCode, strErrorMsg);
        	}
        	
        	if (nErrorCode == '0'){
        		switch (strSvcId) {				
        			case "mainSearchList": // List 불러오기
        				break;
        		}
        	}
        }

        /***********************************************************************
        * 사용자 정의 함수
        ************************************************************************/
        //---------------------------------
        // tab별 Parent condition set
        //---------------------------------
        this.fn_tab_cond = function(sArgs)
        {
        	var paramsArr = new Array();

        	for(var i in sArgs){	
        		paramsArr[i] = sArgs[i];
        	}

        	this.ds_cond.clearData();
        	this.ds_cond.addRow();
        	this.ds_cond.setColumn(0,"STDR_YEAR",paramsArr[0]);
        	this.ds_cond.setColumn(0,"ODR_SE",paramsArr[1]);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.HRM010403_T1_oninit, this);
            this.addEventHandler("onload", this.HRM010403_T1_onload, this);
            this.div_work.Grid00.addEventHandler("oncellclick", this.div_work_Grid00_oncellclick, this);

        };

        this.loadIncludeScript("HRM010403_T1.xfdl");

       
    };
}
)();
