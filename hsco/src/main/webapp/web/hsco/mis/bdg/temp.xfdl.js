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
                this.set_name("temp");
                this.set_classname("temp");
                this.set_titletext("팝업테스트");
                this._setFormPosition(0,0,1059,735);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cond", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IS_CONFRIM_BDG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGE_POSBL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_budgetStats", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BUDGET_TYPE\" type=\"STRING\" size=\"1\"/><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"1\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"1\"/><Column id=\"BUDGET_SE\" type=\"STRING\" size=\"1\"/><Column id=\"DS_NM\" type=\"STRING\" size=\"10\"/><Column id=\"TOT_BUDGET_AM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BPLC_01_BUDGET_AM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BPLC_02_BUDGET_AM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BPLC_03_BUDGET_AM\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_print", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "1031", "0", "15", "735", null, null, this);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#1b3cd23c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", null, "0", "13", "735", "0", null, this);
            obj.set_taborder("6");
            obj.set_text("스\r\n크\r\n롤\r\n13");
            obj.set_visible("false");
            obj.style.set_background("#d07b173c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("wb_report", "absolute", "0", "0", null, null, "28", "0", this);
            obj.set_taborder("8");
            obj.set_visible("true");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1059, 735, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("temp");
            		p.set_titletext("팝업테스트");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("temp.xfdl", "lib::comInclude.xjs");
        this.addIncludeScript("temp.xfdl", "mis_lib::misUtil.xjs");
        this.registerScript("temp.xfdl", function() {
        /**********************************************************************
        * 화면ID   : temp.xfdl
        * 화면명   : 사업별 세출목별 조서
        * 화면설명 : 사업별 세출목별 조서를 조회한다.
        * 작성일   : 2017.04.26
        * 작성자   : 이수지
        * 수정이력 : 
        ***********************************************************************
        *     수정일     수정자   내용
        ***********************************************************************
        *
        ***********************************************************************
        */

        
        /**********************************************************************
        * Script Include 
        ***********************************************************************/
        // 시스템 공통 라이브러리 Include
        //include "lib::comInclude.xjs";
        //include "mis_lib::misUtil.xjs";

        

        /**********************************************************************
        * 화면 변수 선언부
        ***********************************************************************/

        

        /**********************************************************************
        * onInit / onLoad 영역
        ***********************************************************************/

        this.temp_oninit = function(obj,e)
        {
        	// Form 초기화
        	this.fn_init_form();

        	// DataSet 초기화
        	this.fn_init_dataset();
        }

        this.temp_onload = function(obj,e)
        {
        	// TODO..
        }

        

        /**********************************************************************
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
        //alert(this.parent.dsPrint.saveXML());
        	this.ds_print.copyData(this.parent.dsPrint);
        	alert(this.ds_print.saveXML());
        	this.fn_ReportOnWBControl(this, this.wb_report, this.parent.reportPth, this.ds_print);
        	
        // 	var paramPth = this.parent.reportPth;
        // 	var paramDs  = this.parent.dsPrint;
        // 	var dsPrint = new Dataset();
        // 	var nLoadCnt = dsPrint.loadXML(paramDs);
        // 	alert("paramDs : " +paramDs.saveXML());
        // 	alert("nLoadCnt : " + nLoadCnt + "   dsPrint : " + dsPrint.name);
        // 	if(nLoadCnt) {
        // 		
        // 	}
        }

        

        

        

        

        this.fn_ReportOnWBControl = function(objParent,objWb,sReportName,sDataset)
        {
        	if(nexacro.Browser == "Runtime"){
        		alert("runtime 버전은 지원하지 않습니다.");
        		return false;
        	} else if(nexacro.Browser == "IE" && nexacro.BrowserVersion == 8) {
        		alert("IE 8은 지원하지 않습니다");	// get만 지원가능하긴 하지만
        		return false;
        	}

        	var nL = objWb.left;
        	var nT = objWb.top;
        	var nW = objWb.width;
        	var nH = objWb.height;
        	var nR = objWb.right;
        	var nB = objWb.bottom;
        	var sName = objWb.name;

        	objParent.removeChild(objWb.name);
        	objWb.destroy();
        	objWb = null;
        	
        	objWb = new WebBrowser();  
        	objWb.init(sName, "absolute", nL, nT, nW, nH, nR, nB);
        	objParent.addChild(sName, objWb); 
        	objWb.show(); 

        	var iframeObj = document.getElementById(objWb._ifrm_elem._object_id);
        	var iFrameDoc;
        	var iFrameBody;
        	alert("04");
        	if ( iframeObj.contentDocument ) 
        	{
        		iFrameDoc = iframeObj.contentDocument;
        		iFrameBody = iFrameDoc.getElementsByTagName('body')[0];
        	} else if ( iframeObj.contentWindow ) {
        		iFrameDoc = iframeObj.contentWindow.document;
        		iFrameBody = iFrameDoc.getElementsByTagName('body')[0];
        	}	
        	alert("05");
        	if(!iFrameBody)
        	{
        		iFrameBody = iFrameDoc.createElement("body");
        		iFrameDoc.appendChild(iFrameBody);   
        	}
        	alert("06");
        	try{
        	var form = iFrameDoc.createElement("form");
        	form.id = "postform";
        	form.name = "postform";
        	form.action = application.services["svcurl"].url + "ClipReport4/clipreport.jsp";
        	form.method = "post";
        	iFrameBody.appendChild(form);   
        	} catch(e) {
        		alert(e.message);
        	}
        	alert("07");
        	if(sDataset.getRowCount() != 1) {
        		alert("레포트를 출력하기 위한 검색조건이 존재하지 않습니다.");
        		return false;
        	}
        	alert("07");
        	if(sReportName && sReportName.length > 0) {
        		var reportInput = iFrameDoc.createElement("input");
        		reportInput.id 	= "reportname";
        		reportInput.name 	= "reportname";
        		reportInput.type 	= "hidden";
        		reportInput.value	= sReportName;
        		form.appendChild(reportInput);
        	}
        	alert("08");
        	for(var cCol = 0; cCol < sDataset.getColCount(); cCol++) {
        		var colId = sDataset.getColID(cCol);
        		var colVal = sDataset.getColumn(0, cCol);
        		
        		var sValue = colVal;
        		if(sValue && sValue.length > 0) {
        			var input = iFrameDoc.createElement("input");
        			input.id 	= colId;
        			input.name 	= colId;
        			input.type 	= "hidden";
        			input.value	= sValue;
        			form.appendChild(input);
        		}
        	}
        	alert("09");
        	try {
        		var script = iFrameDoc.createElement('script');
        		script.type = 'text/javascript';
        		script.charset = 'utf-8';
        		script.defer = true;
        		script.async = true;
        		script.onload = function () {}
        		var sDomain = "document.domain = \"" + document.domain + "\";";
        		script.text = [sDomain].join('');
        		iFrameBody.appendChild(script);	alert("10");
        	} catch (e) {
        	}
        	
        	if(iFrameDoc.getElementById('postform'))
        	{
        		iFrameDoc.getElementById('postform').submit();
        	}
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
        	// 조건 Dataset 외에 초기화가 필요한 Dataset에 대한 초기화 코드를 추가
        }

        

        /**********************************************************************
        * Transaction 영역 시작
        ***********************************************************************
        *
        * 1. Transaction 관련 이벤트 핸들러
        * 2. call Transaction 영역
        * 3. callback 영역(Transaction, Popup)
        * 
        ***********************************************************************/

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_budgetStats.addEventHandler("onrowposchanged", this.ds_executBudget_onrowposchanged, this);
            this.ds_budgetStats.addEventHandler("canrowposchange", this.ds_executBudget_canrowposchange, this);
            this.addEventHandler("onload", this.temp_onload, this);
            this.addEventHandler("oninit", this.temp_oninit, this);

        };

        this.loadIncludeScript("temp.xfdl");

       
    };
}
)();
