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
                this.set_name("HRM070203_P3");
                this.set_classname("HRM070203_P3");
                this.set_titletext("출장여비기준 조회");
                this._setFormPosition(0,0,720,500);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cond00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"IEM_SE\" type=\"STRING\" size=\"256\"/><Column id=\"TRVCT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_tbhrmEtc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TRVCT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"IEM_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UNIT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_tbhrmEtcCopy", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TRVCT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"IEM_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_trvctSe", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_iemSe", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_clsfSe", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">전체</Col><Col id=\"CODE\"/></Row><Row><Col id=\"CODE\">00</Col><Col id=\"CODE_NM\">0급</Col></Row><Row><Col id=\"CODE\">01</Col><Col id=\"CODE_NM\">1급</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"CODE_NM\">2급</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"CODE_NM\">3급</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"CODE_NM\">4급</Col></Row><Row><Col id=\"CODE\">05</Col><Col id=\"CODE_NM\">5급</Col></Row><Row><Col id=\"CODE\">06</Col><Col id=\"CODE_NM\">6급</Col></Row><Row><Col id=\"CODE\">3B</Col><Col id=\"CODE_NM\">3B</Col></Row><Row><Col id=\"CODE\">3A</Col><Col id=\"CODE_NM\">3A</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_unitSe", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "0", "0", null, null, "0", "0", this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_PopupBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "15", "0", null, "15", "15", null, this);
            obj.set_taborder("6");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", null, "0", "15", null, "0", "0", this);
            obj.set_taborder("8");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "0", "0", "15", null, null, "0", this);
            obj.set_taborder("9");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "15", null, null, "15", "15", "0", this);
            obj.set_taborder("10");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "15", "19", null, "21", "625", null, this);
            obj.set_taborder("12");
            obj.set_text("여비 조회");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search", "absolute", null, "15", "50", "25", "68", null, this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Confirm", "absolute", null, "15", "50", "25", "121", null, this);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close", "absolute", null, "15", "50", "25", "15", null, this);
            obj.set_taborder("3");
            obj.set_text("종료");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "17", "40", null, "5", "15", null, this);
            obj.set_taborder("13");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_tbhrmCychg", "absolute", "15", "89", null, null, "15", "15", this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_tbhrmEtc");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"39\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"출장지 구분\"/><Cell col=\"2\" text=\"여비구분\"/><Cell col=\"3\" text=\"직급구분\"/><Cell col=\"4\" text=\"금액\"/><Cell col=\"5\" text=\"단위\"/><Cell col=\"6\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"expr:(currow)+1\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:TRVCT_SE\" combodataset=\"ds_trvctSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"2\" displaytype=\"combo\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:IEM_SE\" combodataset=\"ds_iemSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:CLSF_SE\" combodataset=\"ds_clsfSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"expr:expr:dataset.getRowType(currow)=='2' ? &quot;masknumber&quot; : &quot;none&quot;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:AMOUNT\" mask=\"99,999\"/><Cell col=\"5\" displaytype=\"combo\" text=\"bind:UNIT_SE\" combodataset=\"ds_unitSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:RM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "15", "78", null, "10", "15", null, this);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "15", "45", null, "33", "15", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Box");
            this.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "15", "5", "90", "21", null, null, this.div_search);
            obj.set_taborder("0");
            obj.set_text("출장지 구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cmb_trvctSe", "absolute", "105", "5", "93", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_trvctSe");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj = new Static("Static00", "absolute", "213", "5", "64", "21", null, null, this.div_search);
            obj.set_taborder("2");
            obj.set_text("여비구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "385", "5", "64", "21", null, null, this.div_search);
            obj.set_taborder("4");
            obj.set_text("직급구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cmb_dstnSe", "absolute", "449", "5", "93", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("@ds_clsfSe");
            obj = new Combo("cmb_dstnSe00", "absolute", "277", "5", "93", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_innerdataset("@ds_iemSe");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 33, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WFSA_Box");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 720, 500, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HRM070203_P3");
            		p.set_titletext("출장여비기준 조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_search.cmb_trvctSe","value","ds_cond00","TRVCT_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_search.cmb_dstnSe","value","ds_cond00","CLSF_SE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_search.cmb_dstnSe00","value","ds_cond00","IEM_SE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HRM070203_P3.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("HRM070203_P3.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("HRM070203_P3.xfdl", "lib::comGrid.xjs");
        this.addIncludeScript("HRM070203_P3.xfdl", "lib::comDataset.xjs");
        this.registerScript("HRM070203_P3.xfdl", function() {
        /***********************************************************************
         * 업무구분 : MIS > 인사관리 > 관외출장신청 등록[여비 조회]
         * 화면ID   : HRM070203_P3
         * 화면명   : 관외출장신청 등록[여비 조회]
         * 화면설명 : 관외출장신청 등록[여비 조회]을 관리한다.
         * 작성일   : 2015.10.15
         * 작성자   : 이혜선
         * 수정이력 : 
         ***********************************************************************
         *     수정일     수정자   내용
         ***********************************************************************
         *    
         *   
         ***********************************************************************
         */

        /***********************************************************************
         * Script Include 
         ***********************************************************************/
        // 시스템 공통 라이브러리 Include
        //include "lib::comLib.xjs";
        //include "lib::comInclude.xjs";
        //include "lib::comGrid.xjs";
        //include "lib::comDataset.xjs";
        // 업무에 필요한 공통 라이브러리 파일을 추가할 수 있다.
        // TODO

        /***********************************************************************
         * 화면 변수 선언부
         ***********************************************************************/
          this.fv_objForm;
        /***********************************************************************
         * onInit / onLoad 영역
         ***********************************************************************/
        this.HRM070203_P3_oninit = function(obj,e)
        {
        	this.fn_init_form();
        	this.fn_init_dataset();
        }

        this.HRM070203_P3_onload = function(obj,e)
        {
            this.fn_loadCombo();
        }

        /***********************************************************************
         * Form 오브젝트 초기화
         ***********************************************************************/ 
        this.fn_init_form = function()
        {
        	this.gfn_initForm(this);
        }

        /***********************************************************************
         * Dataset 오브젝트 초기화
         ***********************************************************************/ 
        this.fn_init_dataset = function()
        {
        	this.gfn_initCondDs(this, this.div_search);
        }

        /***********************************************************************
        * Transaction 영역 시작
        ************************************************************************/

        /***********************************************************************
         * Transaction 관련 이벤트 핸들러 
         **********************************************************************/
          /*
         * 함수명  	: fn_loadCombo
         * 설명 		: 화면의 Combo 에 데이터를 불러온다.
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_loadCombo();
         */
        this.fn_loadCombo = function ()
        {
        	var comboParams = [
        			["ds_trvctSe", "HRM233", "1", "전체"] //출장지구분 (국내국외)
        			,["ds_iemSe", "HRM245", "1", "전체"] //여비구분
        			,["ds_unitSe", "HRM236", "1", "전체"] //여비단위구분
        		];
        	this.gfn_comboLoad(comboParams, this.fn_callbackAfter);	
        }

        /*
         * 함수명  	: fn_callbackAfter
         * 설명 		: callback 처리 후
         * params  		: None
         * return Type 	: None
         * 사용법		: this.gfn_comboLoad(comboParams, this.fn_callbackAfter);
         */
        this.fn_callbackAfter = function ()
        {
        	this.ds_cond00.setColumn(0,"IEM_SE","");
        	this.ds_cond00.setColumn(0,"TRVCT_SE","");
        	this.ds_cond00.setColumn(0,"CLSF_SE","");
        	
        	this.fv_objForm = this.parent.arg_0;
        	var v_popupMsg = this.parent.arg_1;
        	var v_popupMsg2 = this.parent.arg_2;
        	var v_popupMsg3 = this.parent.arg_3;
        	
        	if(v_popupMsg){
        		this.ds_cond00.setColumn(0,"IEM_SE",v_popupMsg);
        	}
        	if(v_popupMsg2){
        		this.ds_cond00.setColumn(0,"CLSF_SE",v_popupMsg2);
        	}
        	this.fn_search();
        }

        
        /*
         * 함수명  	: fn_search
         * 설명 		: 출장여비기준 조회 이벤트 처리     
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_search();
         */
        this.fn_search = function(){

        	this.ds_tbhrmEtc.clearData();
        	this.fn_transaction("selectEtcList");
          
        }

        /**********************************************************************
         * CALL TRANSACTION 영역
         **********************************************************************/
        this.fn_transaction = function(strSvcId)
        {
        	switch (strSvcId) {
        		case "selectEtcList":
        			var sController   	= "hsco/mis/hrm/HRM070203/tbhrmEtcList.do";
        			var sInDatasets   	= "input1=ds_cond00";
        			var sOutDatasets  	= "ds_tbhrmEtc=output1";
        			break;
        	}

        	Ex.core.tran(this, strSvcId, sController, sInDatasets, sOutDatasets); 
        }

         /**********************************************************************
         * Transaction Callback 영역
         ***********************************************************************/
        this.fn_callBack = function (strSvcId,nErrorCode,strErrorMsg)
        {	trace(strSvcId);
        	// 오류 및 성공 메시지를 화면에 보여준다.
        	if(nErrorCode != 0) {
        	  this.gfn_callback_message(strSvcId, nErrorCode, strErrorMsg);
        	}
        	if (nErrorCode != 0){
        	} else {
        		switch (strSvcId) {	
         			case "selectEtcList": 
        				trace(this.ds_tbhrmEtc.saveXML());
         				break;	
        		}
        	}
        }

        /***********************************************************************************
        * 설명	: 확인버튼 처리
        ***********************************************************************************/
        this.btn_Confirm_onclick = function(obj,e)
        {
        	this.ds_tbhrmEtcCopy.clearData();
        		         
        	var nRow =  this.ds_tbhrmEtcCopy.addRow();	         
        	var bSucc;
            bSucc = this.ds_tbhrmEtcCopy.copyRow(nRow,this.ds_tbhrmEtc,this.ds_tbhrmEtc.rowposition);
            	
        	this.close(this.ds_tbhrmEtcCopy.saveXML());
        }

        /***********************************************************************************
        * 설명	: 선택 더블클릭 처리
        ***********************************************************************************/
        this.grd_tbhrmEtc_oncelldblclick = function(obj,e)
        {
        	//this.btn_Confirm_onclick();
        }

        /***********************************************************************************
        * 설명	: 닫기
        ***********************************************************************************/
        this.fn_close = function(obj,e)
        {
        	this.close();
        }

        /***********************************************************************
        * Transaction 영역 끝
        ************************************************************************/
        /***********************************************************************
         * non-Transaction 관련 컴포넌트 이벤트 처리 함수
         *********************************** ************************************/
        /***********************************************************************
        * 사용자 정의 함수
        ************************************************************************/
        this.grd_tbhrmCychg_onheadclick = function(obj,e)
        {
        	LGV_COL_SORT = e.col;
            this._gridSort(obj, e);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.HRM070203_P3_oninit, this);
            this.addEventHandler("onload", this.HRM070203_P3_onload, this);
            this.btn_Search.addEventHandler("onclick", this.fn_search, this);
            this.btn_Confirm.addEventHandler("onclick", this.btn_Confirm_onclick, this);
            this.btn_Close.addEventHandler("onclick", this.fn_close, this);
            this.grd_tbhrmCychg.addEventHandler("oncelldblclick", this.grd_tbhrmEtc_oncelldblclick, this);
            this.grd_tbhrmCychg.addEventHandler("onheadclick", this.grd_tbhrmCychg_onheadclick, this);
            this.div_search.cmb_trvctSe.addEventHandler("onitemchanged", this.fn_search, this);

        };

        this.loadIncludeScript("HRM070203_P3.xfdl");

       
    };
}
)();
