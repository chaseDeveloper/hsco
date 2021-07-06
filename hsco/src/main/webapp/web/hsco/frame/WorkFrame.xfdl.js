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
                this.set_name("WorkFrame");
                this.set_classname("WorkFrame");
                this.set_titletext("WorkFrame");
                this._setFormPosition(0,0,1074,796);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_condAuth", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_auth", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"GRANTCNT\" type=\"STRING\" size=\"256\"/><Column id=\"BUTTON_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_myMenu", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_SE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"3\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"V_USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_fvParam", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"param\" type=\"STRING\" size=\"3000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_hpcm", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PAGE_ID\" type=\"STRING\" size=\"40\"/><Column id=\"PAGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"BIGDECIMAL\" size=\"10\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_indivisualInfoButton", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PAGE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/><Column id=\"BUTTON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESS_SE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"INDVDLINFO_IEM\" type=\"STRING\" size=\"256\"/><Column id=\"SCRTY_GRAD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRANTCNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_condIndInfo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_log_indivisualInfo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PAGE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/><Column id=\"BUTTON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESS_SE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"INDVDLINFO_IEM\" type=\"STRING\" size=\"256\"/><Column id=\"SCRTY_GRAD_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_grantauth", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"GRANTCNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static02", "absolute", "0", "0", "15", "796", null, null, this);
            obj.set_taborder("0");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "0", "1061", "15", null, null, this);
            obj.set_taborder("1");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "15", "18", "400", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0", "40", "1061", "5", null, null, this);
            obj.set_taborder("3");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "15", "50", "25", "455", null, this);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            obj.set_hotkey("CTRL+F2");
            obj.set_tooltiptext("단축키안내(Ctrl+F2)");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert", "absolute", null, "15", "50", "25", "402", null, this);
            obj.set_taborder("5");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            obj.set_tooltiptext("단축키안내(Ctrl+F3)");
            obj.set_hotkey("CTRL+F3");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", null, "15", "50", "25", "137", null, this);
            obj.set_taborder("6");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "15", "50", "25", "296", null, this);
            obj.set_taborder("7");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            obj.set_hotkey("CTRL+F9");
            obj.set_tooltiptext("단축키안내(Ctrl+F9)");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "15", "50", "25", "84", null, this);
            obj.set_taborder("8");
            obj.set_text("종료");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_tooltiptext("단축키정보(Crtl+F10)");
            obj.set_hotkey("CTRL+F10");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("btn_bookmark", "absolute", null, "15", "25", "25", "56", null, this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_Bookmark");
            obj.set_tooltiptext("바로가기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_help", "absolute", null, "15", "25", "25", "28", null, this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_Help");
            obj.set_tooltiptext("도움말");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "1046", "0", "15", "796", null, null, this);
            obj.set_taborder("11");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "1061", "0", "13", "796", null, null, this);
            obj.set_taborder("12");
            obj.set_text("스\r\n크\r\n롤\r\n13");
            obj.set_visible("false");
            obj.style.set_background("#acacac3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "0", "781", "1061", "15", null, null, this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c3c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Div("div_main", "absolute", "15", "45", null, null, "0", "15", this);
            obj.set_taborder("14");
            obj.set_text("업무영역");
            obj.set_scrollbars("autoboth");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete", "absolute", null, "15", "50", "25", "349", null, this);
            obj.set_taborder("15");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            obj.set_hotkey("CTRL+F8");
            obj.set_tooltiptext("단축키안내(Ctrl+F8)");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sanction", "absolute", null, "15", "50", "25", "190", null, this);
            obj.set_taborder("16");
            obj.set_text("결재");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print", "absolute", null, "15", "50", "25", "243", null, this);
            obj.set_taborder("17");
            obj.set_text("인쇄");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("true");
            obj.set_visible("false");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "1018", "0", "3", "796", null, null, this);
            obj.set_taborder("18");
            obj.set_text("3");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1074, 796, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("WorkFrame");
            		p.set_titletext("WorkFrame");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("WorkFrame.xfdl", "lib::comInclude.xjs");
        this.registerScript("WorkFrame.xfdl", function() {
        /***********************************************************************
         * 화면ID   : WorkFrame
         * 화면명   : Work Form Frame 화면
         * 화면설명 : 
         * 작성일   : 2015.08.13
         * 작성자   : 송금준
         * 수정이력 : 
         ***********************************************************************
         *     수정일     수정자   내용
         ***********************************************************************
         *  
         ***********************************************************************
         */

        /***********************************************************************
         * Script Include 
         ***********************************************************************/
        //include "lib::comInclude.xjs";

        /***********************************************************************
         * 화면 변수 선언부
         ***********************************************************************/

        /***********************************************************************
         * onInit / onLoad 영역
         ***********************************************************************/

        this.WorkFrame_oninit = function(obj,e)
        {
        	// Form 초기화
        	this.fn_init_form();
            //this.gfn_initGridCommon(); // 그리드 기능 확장
        	//DataSet 초기화
        	this.fn_init_dataset();
        }
         
        this.WorkFrame_onload = function(obj,e)
        {
        	this.div_main.set_url(application.gv_formUrl);	
        	this.set_enable(false);
        	this.fn_getAuth();
        	this.fn_getHelp();
        }

        /***********************************************************************
         * Form/Dataset 오브젝트 초기화
         ***********************************************************************/
        /*
         * 함수명  	: initForm
         * 설명 		: Form을 초기화한다.
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_init_form();
         */
        this.fn_init_form = function() 
        { 
        	// 시스템 공통으로 Form을 Initialize 한다.
        	//this.gfn_initForm(this);

        	var strSysSeCode = application.gv_curFormId.split("_")[0]; 
        	var strMenuId = application.gv_curFormId.split("_")[1];
        	var strFormUrl = application.gv_formUrl;//페이지 호출 주소를 가져온다.  
        	var indexVal = strFormUrl.lastIndexOf("::");
        	strFormUrl = strFormUrl.substr(indexVal);
        	strFormUrl = strFormUrl.replace(".xfdl","").replace("::","");//화면정보만 남겨 화면에 출력한다.

        	var nFRow = application.gds_openMenu.findRow("MENU_ID", strMenuId);
        	var strTitle = application.gds_openMenu.getColumn(nFRow, "MENU_NM");
        	 
        	//this.sta_title.set_text(strTitle + " [" + strSysSeCode + "_" + strMenuId + "]");
        	this.sta_title.set_text(strTitle + " [" + strFormUrl + "]");
        // 	this.sta_title.set_text(strTitle);
        }
         
        /*
         * 함수명  	: initDataset
         * 설명 		: Dataset을 초기화한다.
         *                주로, 조건 Dataset들(ds_cond, ds_cond_00, ds_cond_01, ...) 을 초기화한다.
         * params  		: None
         * return Type 	: None
         * 사용법		: this.fn_init_dataset();
         */
        this.fn_init_dataset = function()
        {
        	// None
        }

        this.fn_getHelp = function()
        {
           var hpcm_at = "";
           var fRow = application.gds_menu.findRow("MENU_ID", application.gv_curFormId.split("_")[1]);
           if(fRow > -1){ 
                // 도움말 존재하는것만 버튼 활성화
                hpcm_at = application.gds_menu.getColumn(fRow, "HPCM_AT");
               // this.alert("hpcm_at:"+hpcm_at);
             //  trace("hpcm_at:"+hpcm_at);
        		if( hpcm_at == "1" ) this.btn_help.set_enable(true);
        	    else this.btn_help.set_enable(false);
            }
         
        }
        /***********************************************************************
        * Transaction 영역
        ************************************************************************/
        /*
         * 함수명  	: fn_getAuth
         * 설명 		: 권한을 가져온다.
         * params  		: None
         * return Type 	: None
         * 사용법		: 
         */
        this.fn_getAuth = function ()
        {
        	if(this.ds_condAuth.rowcount == 0)
        	{
        		this.ds_condAuth.addRow();
        	}

            var fRow = application.gds_menu.findRow("MENU_ID", application.gv_curFormId.split("_")[1]);
            var pageUrl = "";
            if(fRow > -1) 
                pageUrl = application.gds_menu.getColumn(fRow, "PAGE_URL"); 
                // 도움말 존재하는것만 버튼 활성화
                 
            if( this.ds_condIndInfo.getRowCount() == 0)
               this.ds_condIndInfo.addRow();
            this.ds_condIndInfo.setColumn(0, "FORM_URL", pageUrl);
        	this.ds_condAuth.setColumn(0, "MENU_ID", application.gv_curFormId.split("_")[1]);

            	

        	var sSvcID        	= "loadAuth";
        	var sController   	= "hsco/cmm/author/controller/AuthorController/getAuthBtnList.do";
        	var sInDatasets   	= "input1=ds_condAuth input2=ds_condIndInfo input3=ds_condAuth";
        	var sOutDatasets  	= "ds_auth=output1 ds_indivisualInfoButton=output2 ds_grantauth=output3";
        	var sArgs = "FORM_URL='" + pageUrl +"'";
            var bSync = false;
        	//Ex.core.tran(this, sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "authCallBack");
        	Ex.core.tran(this, sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "authCallBack",null, bSync, 0);//동기처리
        }

        // CallBack Function 
        this.authCallBack = function (sid,errNo,errMsg)
        {
        	this.fn_applyAuth();
        	this.fn_addEventHandler();
        	
        } 
        this.fn_addEventHandler = function(){
            for(var i=0; i<this.ds_indivisualInfoButton.getRowCount(); i++){
                var buttonId = this.ds_indivisualInfoButton.getColumn(i, "BUTTON_ID");
                var obj = this.lookup(buttonId);
                
                obj.addEventHandlerLookup( "onclick", "fn_logIndivisualInfo", this );
            } 
        }

        this.fn_logIndivisualInfo = function(obj,e){

            var fRow = this.ds_indivisualInfoButton.findRow("BUTTON_ID", obj.name);
            //trace("fRow=" + fRow + ",buttonId=" + obj.name);
            var processSeCode = "";
            if(fRow > -1){
                processSeCode = this.ds_indivisualInfoButton.getColumn(fRow, "PROCESS_SE_CODE");
                //trace("PROCESS_SE_CODE=" + processSeCode);
                if(this.ds_log_indivisualInfo.getRowCount()==0)
                    this.ds_log_indivisualInfo.addRow();
                this.ds_log_indivisualInfo.copyRow(0, this.ds_indivisualInfoButton, fRow);
                //this.ds_log_indivisualInfo.saveXML();
            }
            
            var sSvcID        	= "logIndInfo";
        	var sController   	= "hsco/cmm/log/insertIndInfoLog.do";
        	var sInDatasets   	= "input1=ds_log_indivisualInfo";
        	var sOutDatasets  	= "ds_log_indivisualInfo=output1";
        	var sArgs = "";
        	Ex.core.tran(this, sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "indLogCallBack");
        }

        this.indLogCallBack = function(){

        }
        /***********************************************************************
         * non-Transaction 관련 컴포넌트 이벤트 처리 함수
         ***********************************************************************/
        this.gv_nTimerCount = 0;
        this.WorkFrame_ontimer = function(obj,e)
        {
        	this.gv_nTimerCount++;
        	this.killTimer(1);
        	
        	if(this.gv_nTimerCount <= 50)
        	{
        		this.fn_applyAuth();
        	}
        	else
        	{
        		alert("버튼 권한에 대한 처리를 완료하지 못하였습니다. \n메뉴를 다시 실행하여 주십시요. \n증상이 반복되면 시스템 관리자에게 문의 바랍니다.");
        		this.set_enable(false);
        	}
        }

        this.btn_search_onclick = function(obj,e)
        {
        	if(this.div_main.checkDs) {
        		for(var i = 0; i < this.div_main.checkDs.length; i++) {
        			if(this.comUtils.isDatasetUpdated(this.div_main.checkDs[i])) {
        				if(!this.gfn_message("confirm.변경.취소.여부")) {
        					return false;	// 아니오
        				}else{
        					break;	// 반복 출력 방지
        				}
        			}
        		}
        	}

        	this.div_main.fn_search();
        }	
        this.btn_insert_onclick = function(obj,e)
        {
        	this.div_main.fn_insert();
        }

        this.btn_delete_onclick = function(obj,e)
        {
        	this.div_main.fn_delete();
        }
        this.btn_cancel_onclick = function(obj,e)
        {
        	this.div_main.fn_cancel();
        }

        this.btn_save_onclick = function(obj,e)
        {
        	this.div_main.fn_save();
        }

        this.btn_print_onclick = function(obj,e)
        {
        	this.div_main.fn_print();
        }

        this.btn_sanction_onclick = function(obj,e)
        {
        	this.div_main.fn_sanction();
        }

        this.btn_close_onclick = function(obj,e)
        {
        	if(this.div_main.checkDs) {
        		for(var i = 0; i < this.div_main.checkDs.length; i++) {
        			if(this.comUtils.isDatasetUpdated(this.div_main.checkDs[i])) {
        				if(!this.gfn_message("confirm.변경.취소.여부")) {
        					return false;	// 아니오
        				}else{
        					break;	// 반복 출력 방지
        				}
        			}
        		}
        	}
        	
        	if(this.div_main.fn_close){
        		this.div_main.fn_close();
        	}else{
        		this.parent.close();
        	}
          
        	this.parent.close();
        }

        /***********************************************************************
        * 사용자 정의 함수
        ************************************************************************/
        /*
         * 함수명  	: fn_applyAuth
         * 설명 		: 권한을 적용한다.
         * params  		: None
         * return Type 	: None
         * 사용법		: 
         */
        this.fn_applyAuth = function ()
        {
        	var strBtnId;
        	var arrComps;
            var ngcnt = 0;
        	var k = 0;
        	ngcnt = this.ds_grantauth.getColumn(0, "GRANTCNT");
        	
        	application.gds_menuSet_XXX.clearData();

        	for(var i = 0; i < this.ds_auth.rowcount; i++)
        	{
        		var objComp = this;
        		var ncnt = 0;

        		strBtnId = this.ds_auth.getColumn(i, "BUTTON_ID").toString();
        		ncnt = this.ds_auth.getColumn(i, "GRANTCNT");
        		
        		arrComps = strBtnId.split(","); 
        	
        		for(var j = 0; j < arrComps.length; j++)
        		{			
        			objComp = this.fn_getComp(objComp, arrComps[j]);
        		}
        		if(strBtnId=="btn_cancel" || strBtnId=="btn_sanction" ||
        		   strBtnId=="btn_sanction" || strBtnId=="btn_print" ||
        		   strBtnId=="btn_save" || strBtnId=="btn_delete" ||
        		   strBtnId=="btn_insert" || strBtnId=="btn_search")
        		{
        			if ( ncnt < ngcnt ) objComp.set_enable(true);
        			else objComp.set_enable(false);
        		} 
        	    else 
        	    {
        			application.gds_menuSet_XXX.addRow();
        			application.gds_menuSet_XXX.setColumn(k, "MENU_ID_SET", application.gv_curFormId.split("_")[1]);
        			application.gds_menuSet_XXX.setColumn(k, "SET_SEQ", k);
        			application.gds_menuSet_XXX.setColumn(k, "SET_NM", strBtnId );
        		//	this.alert("k "+application.gds_menuSet_XXX.getColumn(k, "SET_NM"));
        			k = k + 1;
        	    }
        		if(i == (this.ds_auth.rowcount - 1))
        		{
        			this.fn_arrangeMainButton();
        		}		
        	}
        	
        	if(this.ds_auth.rowcount == 0)
        	{
        		this.fn_arrangeMainButton();
        	}
        	
        	this.set_enable(true);
        }

        

        /*
         * 함수명  	: fn_getComp
         * 설명 		: 컴포넌트 아이디를 이용하여 컴포넌트 객체를 가져온다.
         * params  		: None
         * return Type 	: Object
         * 사용법		: 
         */
        this.fn_getComp = function (obj,strComp)
        {
        	var objTarget = obj.components[strComp];
        	
        	return objTarget;
        }

        /*
         * 함수명  	: fn_arrangeMainButton
         * 설명 		: 화면 상단의 메인 버튼을 권한에 따라 재정렬한다.
         * params  		: None
         * return Type 	: None
         * 사용법		: 
         */
        this.fn_arrangeMainButton = function ()
        {
            var nBasePos = 137;	
        // 	var nBtnWidth = this.btn_close.width;
        	var nBtnWidth = 50;
        	var nGap = 3;
        	var nOrd = 0;
        	
        	if(this.btn_cancel.enable)
        	{
        		this.btn_cancel.set_visible(true);
        		this.btn_cancel.set_right(nBasePos + ((nBtnWidth + nGap) * nOrd));
        		++nOrd;
        	}
        	else
        	{
        		this.btn_cancel.set_visible(false);
        	}
        	
        	if(this.btn_sanction.enable)
        	{
        		this.btn_sanction.set_visible(true);
        		this.btn_sanction.set_right(nBasePos + ((nBtnWidth + nGap) * nOrd));
        		++nOrd;
        	}
        	else
        	{
        		this.btn_sanction.set_visible(false);
        	}
        	
        	if(this.btn_print.enable)
        	{
        		this.btn_print.set_visible(true);
        		this.btn_print.set_right(nBasePos + ((nBtnWidth + nGap) * nOrd));
        		++nOrd;
        	}
        	else
        	{
        		this.btn_print.set_visible(false);
        	}
        	
        	if(this.btn_save.enable)
        	{
        		this.btn_save.set_visible(true);
        		this.btn_save.set_right(nBasePos + ((nBtnWidth + nGap) * nOrd));
        		++nOrd;
        	}
        	else
        	{
        		this.btn_save.set_visible(false);
        	}
        	
        	if(this.btn_delete.enable)
        	{
        		this.btn_delete.set_visible(true);
        		this.btn_delete.set_right(nBasePos + ((nBtnWidth + nGap) * nOrd));
        		++nOrd;
        	}
        	else
        	{
        		this.btn_delete.set_visible(false);
        	}
        	
        	if(this.btn_insert.enable)
        	{
        		this.btn_insert.set_visible(true);
        		this.btn_insert.set_right(nBasePos + ((nBtnWidth + nGap) * nOrd));
        		++nOrd;
        	}
        	else
        	{
        		this.btn_insert.set_visible(false);
        	}
        	
        	if(this.btn_search.enable)
        	{
        		this.btn_search.set_visible(true);
        		this.btn_search.set_right(nBasePos + ((nBtnWidth + nGap) * nOrd));
        		++nOrd;
        	}
        	else
        	{
        		this.btn_search.set_visible(false);
        	}
        }

        /***********************************************************************
         * non-Transaction 관련 컴포넌트 이벤트 처리 함수
         ***********************************************************************/
        // this.WorkFrame_onclose = function(obj:Form, e:nexacro.CloseEventInfo)
        // {
        // 	var arrSplit = obj.parent.name.split("_");
        // 	var strSys = arrSplit[0];
        // 	var strMenuId = arrSplit[1];
        // 	var strExpr = "MENU_ID==" + strMenuId + " && SYS_SE_CODE=='" + strSys + "'";
        // 	var nFRow = application.gds_openMenu.findRowExpr(strExpr);
        // 
        // 	if(nFRow < 0)
        // 	{
        // 		return;
        // 	}
        // 	
        // 	application.gds_openMenu.deleteRow(nFRow);
        // 	application.gv_mdiFrame.form.tab_mdi.removeTabpage(nFRow);
        // }
        // 
        // this.WorkFrame_onsetfocus = function(obj:Form, e:nexacro.SetFocusEventInfo)
        // {
        // 	var strTpgName;
        // 	
        // 	application.gv_mdiFrame.form.tab_mdi.set_enableevent(false);
        // 	
        // 	for(var i = 0; i < application.gv_mdiFrame.form.tab_mdi.tabpages.length; i++)
        // 	{
        // 		strTpgName = application.gv_mdiFrame.form.tab_mdi.tabpages[i].name;
        // 		
        // 		if(strTpgName == obj.parent.name)
        // 		{
        // 			application.gv_mdiFrame.form.tab_mdi.set_tabindex(i);
        // 			break;
        // 		}
        // 	}
        // 	
        // 	application.gv_curFormId = strTpgName;
        // 
        // 	application.gv_mdiFrame.form.tab_mdi.set_enableevent(true);
        // }

        this.btn_bookmark_onclick = function(obj,e)
        {
        	var strMenuId = application.gv_curFormId.split("_")[1];
        	var strMenuNm= application.gv_curFormId.split("_")[2];
            var sort = this.ds_myMenu.getRowCount() + 1;
        	var args = "V_USER_ID=" + application.gv_userId + " MENU_ID=" + strMenuId + " SORT=" + sort;
        	
        	if (strMenuId == "16101000"||strMenuId == "16102000"){//개인결재함(16101000), My기안문서(16102000)의 경우 바로가기 처리안됨.
        	   this.alert("해당 메뉴는 마이메뉴 등록이 불가합니다.");
        	   return;
        	}
        	
        	this.fn_save(args);
        }

        /*
         * 함수명  	: fn_getAuth
         * 설명 		: 권한을 가져온다.
         * params  		: None
         * return Type 	: None
         * 사용법		: 
         */
        this.fn_save = function (args)
        {
        //	if(this.ds_myMenu.rowcount > 0)
        //	{
        	    var sSvcID        	= "InsertMuMenu";
        	    var sController   	= "hsco/cmm/myMenu/addMyMenu.do";
        	    var sInDatasets   	= "";
        	    var sOutDatasets  	= "ds_myMenu=gds_myMenu gds_myMenu=gds_myMenu";
        	    var sArgs = args;
                var bSync = false;
        	    //Ex.core.tran(this, sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "myMenuCallBack");
        	    Ex.core.tran(this, sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "myMenuCallBack",null, bSync, 0);//동기처리
        //	}
        }

        // CallBack Function
        this.myMenuCallBack = function (sid,errNo,errMsg)
        {
        	//신규 추가된 
        	//this.gfn_loadMyMenu();
        	//application.gds_myMenu.copyData(this.ds_myMenu, true);
        	//application.mainframe.all["Wrapper"].all["mainFrameSet"].all["menuFrame"].LeftFrame.btn_myMenu_onclick()();
        	this.gfn_loadMyMenu();//
        	//application.gv_menuFrame.form.fn_selectMyMenu();
        	//application.mainframe.all["Wrapper"].all["mainFrameSet"].all["menuFrame"].LeftFrame.btn_myMenu_onclick();
            //application.mainframe.all["Wrapper"].all["mainFrameSet"].all["menuFrame"].LeftFrame.fn_selectMyMenu();
        }
         
        /*
         * 함수명  	: btn_help_onclick
         * 설명 		: 온라인도움말 조회 아이콘 클릭 이벤트 처리기
         * params  		: None
         * return Type 	: None
         * 사용법		: this.btn_help_onclick
         */
        this.btn_help_onclick = function(obj,e){
        	/*
        	var strMenuId = application.gv_curFormId.split("_")[1];
        	
        	this.ds_hpcm.clearData();
        	if(this.ds_hpcm.getRowCount() == 0) this.ds_hpcm.addRow();

        	
        	application.gds_menu.filter("");
        	var nRow = application.gds_menu.findRow("MENU_ID", strMenuId);

        	if(nRow < 1) // nRow == 0 일때는 ROOT 이므로 Form 메뉴로서 의미가 없음.
        	{
        		return;
        	}
        	
        	var currMenuId = application.gds_menu.getColumn(nRow, "MENU_ID");
        	var strMenuNm = application.gds_menu.getColumn(nRow, "MENU_NM");
        	var strSysSeCode = application.gds_menu.getColumn(nRow, "SYS_SE_CODE");
        	var strUrl = application.gds_menu.getColumn(nRow, "PAGE_URL");
        	var arr = strUrl.split("::");
        	*/
        	
        	/*application.gds_menu.filter("");
            this.ds_hpcm.setColumn(0, "PAGE_ID", arr[1]);
        	this.ds_hpcm.setColumn(0, "PAGE_URL", strUrl);
        	this.ds_hpcm.setColumn(0, "MENU_ID", strMenuId);
        	var pageUrl = "com_sym_ohm::SYM060100.xfdl";
        	var param = this.ds_hpcm.saveXML();
            this.gfn_Link2Page(pageUrl, param);
            */
            
            
            this.gfn_openHelpPopup();
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.WorkFrame_oninit, this);
            this.addEventHandler("onload", this.WorkFrame_onload, this);
            this.addEventHandler("ontimer", this.WorkFrame_ontimer, this);
            this.sta_title.addEventHandler("onclick", this.sta_title_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_insert.addEventHandler("onclick", this.btn_insert_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_bookmark.addEventHandler("onclick", this.btn_bookmark_onclick, this);
            this.btn_help.addEventHandler("onclick", this.btn_help_onclick, this);
            this.btn_delete.addEventHandler("onclick", this.btn_delete_onclick, this);
            this.btn_sanction.addEventHandler("onclick", this.btn_sanction_onclick, this);
            this.btn_print.addEventHandler("onclick", this.btn_print_onclick, this);

        };

        this.loadIncludeScript("WorkFrame.xfdl");

       
    };
}
)();
