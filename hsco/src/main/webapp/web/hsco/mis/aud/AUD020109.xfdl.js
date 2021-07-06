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
                this.set_name("AUD020109");
                this.set_classname("AUD020109");
                this.set_titletext("수입지출외현금처리(감사용)");
                this._setFormPosition(0,0,1059,735);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div_lnk", "absolute", "0", "0", null, null, "0", "3", this);
            obj.set_taborder("0");
            obj.set_applystyletype("cascade,keep");
            obj.set_url("mis_acc::ACC020504.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1059, 735, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AUD020109");
            		p.set_titletext("수입지출외현금처리(감사용)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "mis_acc::ACC020504.xfdl");
        };
        
        // User Script
        this.addIncludeScript("AUD020109.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("AUD020109.xfdl", "mis_lib::misUtil.xjs");
        this.registerScript("AUD020109.xfdl", function() {
        /**********************************************************************
        * 화면ID	: AUD020109.xfdl
        * 화면명	: 수입지출외현금처리(감사용)
        * 화면설명	: 수입지출외현금처리를 조회한다.
        * 작성일	: 2020.10.22
        * 작성자	: 김형태
        * 수정이력	: 
        ***********************************************************************
        *     수정일     수정자   내용
        ***********************************************************************
        *
        ***********************************************************************
        */
         
        /***********************************************************************
         * Script Include 
         ************************************************************************/
        //include "lib::comInclude.xjs";
        //include "mis_lib::misUtil.xjs";

        /**********************************************************************
        * 화면 변수 선언부
        ***********************************************************************/
        this.isLoad = false;

        /***********************************************************************
         * onInit / onLoad 영역
         ***********************************************************************/
         this.AUD020109_oninit = function(obj,e)
        {
        	this.fn_init_form();	
        }
         
        this.AUD020109_onload = function(obj,e)
        {
        	this.setTimer(0, 500);
        }
        /***********************************************************************
         * Form/Dataset 오브젝트 초기화
         ***********************************************************************/
         
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

        this.AUD020109_ontimer = function(obj,e)
        {
        	if(this.isLoad == false && this.Div_lnk.ds_cond.getRowCount() > 0)
        	{
        		// 오브젝트 컨트롤
        		this.Div_lnk.sta_CLSF_CODE.set_visible(false);		// 생성일자
        		this.Div_lnk.Calendar01.set_visible(false);			// 생성일자
        		this.Div_lnk.btn_cyfd.set_visible(false);			// 전기이월
        		this.Div_lnk.btn_addAll.set_visible(false);			// 일괄등록
        		this.Div_lnk.btn_TmpDn.set_visible(false);			// 양식다운로드
        		this.Div_lnk.btn_addDtls.set_visible(false);		// 행추가
        		this.Div_lnk.btn_delDtls.set_visible(false);		// 행삭제
        		this.Div_lnk.btn_resetDtls.set_visible(false);		// 행취소
        		this.Div_lnk.btn_delFiles.set_visible(false);		// 선택삭제
        		this.Div_lnk.btn_uploadFiles.set_visible(false);	// 파일업로드
        		
        		if(this.gfn_authGrpId("AUD_ADMIN") != -1) {	 // 감사결재자
        			this.Div_lnk.div_SEARCH.div_srchDept.set_enable(true);
        		}else {
        			this.Div_lnk.div_SEARCH.div_srchDept.set_enable(false);
        		}
        		
        		this.isLoad = true;
        		this.killTimer(0);
        	}
        }
        /**********************************************************************
        * 공통함수 처리
        ***********************************************************************/

        /*
         * 함수명  	: fn_search
         * 설명 		: div 내부 공통함수 호출(조회)
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_search(obj,e);
         */
        this.fn_search = function()
        {
        	this.Div_lnk.fn_search();
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.AUD020109_onload, this);
            this.addEventHandler("oninit", this.AUD020109_oninit, this);
            this.addEventHandler("ontimer", this.AUD020109_ontimer, this);

        };

        this.loadIncludeScript("AUD020109.xfdl");
        this.loadPreloadList();
       
    };
}
)();
