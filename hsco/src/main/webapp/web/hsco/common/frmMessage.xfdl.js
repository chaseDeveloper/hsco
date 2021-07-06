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
                this.set_name("frmMessage");
                this.set_classname("frmMessage");
                this.set_titletext("Message");
                this._setFormPosition(0,0,382,194);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_popupBg", "absolute", "0", "0", "382", "194", null, null, this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_PopupBg2");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "1", "1", "380", "36", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Confirm");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "351", "9", "20", "20", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PopupClose2");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mark", "absolute", "15", "56", "50", "50", null, null, this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_ConfirmQ");
            this.addChild(obj.name, obj);

            obj = new Static("sta_text", "absolute", "72", "51", "295", "80", null, null, this);
            obj.set_taborder("4");
            obj.set_text("화성도시공사 Confirm 내용입니다.\r\n승인하시겠습니까?");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cOk", "absolute", "150", "140", "40", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cCancel", "absolute", "193", "140", "40", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_aOk", "absolute", "171", "140", "40", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "18", "209", "50", "50", null, null, this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_ConfirmQ");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "76", "209", "50", "50", null, null, this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_ConfirmC");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "199", "209", "50", "50", null, null, this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_ConfirmE");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "136", "209", "50", "50", null, null, this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_ConfirmI");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "255", "209", "50", "50", null, null, this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_ConfirmW");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "12", "255", "61", "18", null, null, this);
            obj.set_taborder("13");
            obj.set_text("Qusetion");
            obj.set_cssclass("sta_GID_txt02");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "83", "255", "61", "18", null, null, this);
            obj.set_taborder("14");
            obj.set_text("Check");
            obj.set_cssclass("sta_GID_txt02");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "131", "255", "61", "18", null, null, this);
            obj.set_taborder("15");
            obj.set_text("Information");
            obj.set_cssclass("sta_GID_txt02");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "211", "255", "61", "18", null, null, this);
            obj.set_taborder("16");
            obj.set_text("Error");
            obj.set_cssclass("sta_GID_txt02");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "257", "255", "61", "18", null, null, this);
            obj.set_taborder("17");
            obj.set_text("Warning");
            obj.set_cssclass("sta_GID_txt02");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "18", "299", "50", "50", null, null, this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_AlertQ");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "76", "299", "50", "50", null, null, this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_AlertC");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "199", "299", "50", "50", null, null, this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_AlertE");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "136", "299", "50", "50", null, null, this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_AlertI");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "255", "299", "50", "50", null, null, this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_AlertW");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "12", "346", "61", "18", null, null, this);
            obj.set_taborder("23");
            obj.set_text("Qusetion");
            obj.set_cssclass("sta_GID_txt02");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "83", "346", "61", "18", null, null, this);
            obj.set_taborder("24");
            obj.set_text("Check");
            obj.set_cssclass("sta_GID_txt02");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "131", "346", "61", "18", null, null, this);
            obj.set_taborder("25");
            obj.set_text("Information");
            obj.set_cssclass("sta_GID_txt02");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "211", "346", "61", "18", null, null, this);
            obj.set_taborder("26");
            obj.set_text("Error");
            obj.set_cssclass("sta_GID_txt02");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "257", "346", "61", "18", null, null, this);
            obj.set_taborder("27");
            obj.set_text("Warning");
            obj.set_cssclass("sta_GID_txt02");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "15", "382", "280", "36", null, null, this);
            obj.set_taborder("28");
            obj.set_text("Alert");
            obj.set_cssclass("sta_WF_Alert");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 382, 194, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("frmMessage");
            		p.set_titletext("Message");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("frmMessage.xfdl", "lib::comInclude.xjs");
        this.registerScript("frmMessage.xfdl", function() {
        /***********************************************************************
         * 화면ID   : frmMessage
         * 화면명   : 메시지 창
         * 화면설명 : 
         * 작성일   : 2015.08
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
        //include "lib::comInclude.xjs"

        /***********************************************************************
         * 화면 변수 선언부
         ***********************************************************************/
        this.fv_objForm;
        this.fv_mth;
        this.fv_se;
        this.fv_msg;
        this.fv_errStmt;

        /***********************************************************************
         * onInit / onLoad 영역
         ***********************************************************************/
        this.frmMessage_onload = function(obj,e)
        {
        	this.fv_objForm = this.parent.arg_0;
        	this.fv_mth = this.parent.arg_mth;
        	this.fv_se = this.parent.arg_se;
        	this.fv_msg = this.parent.arg_msg;
        	this.fv_errStmt = this.parent.arg_errStmt;
        	this.fn_defineForm(); 
        }

        this.fn_defineForm = function ()
        {
        	if(this.fv_mth == "C")
        	{
        		this.sta_title.set_cssclass("sta_WF_Confirm");
        		this.sta_title.set_text("Confirm");
        		this.sta_mark.set_cssclass("sta_WF_ConfirmQ");
        		this.btn_aOk.set_visible(false);
        	}
        	else
        	{
        		this.sta_title.set_cssclass("sta_WF_Alert");
        		this.btn_cOk.set_visible(false);
        		this.btn_cCancel.set_visible(false);
        		
        		switch(this.fv_se) {
        			case "C" :
        				this.sta_mark.set_cssclass("sta_WF_AlertC");
        				this.sta_title.set_text("Check");
        				break;
        			case "W" :
        				this.sta_mark.set_cssclass("sta_WF_AlertW");
        				this.sta_title.set_text("Warning");
        				break;
        			case "I" :
        				this.sta_mark.set_cssclass("sta_WF_AlertI");
        				this.sta_title.set_text("Information");
        				break;
        			case "E" :
        				this.sta_mark.set_cssclass("sta_WF_AlertE");
        				this.sta_title.set_text("Error");
        				break;
        			case "Q" :
        				this.sta_mark.set_cssclass("sta_WF_AlertQ");
        				this.sta_title.set_text("Question");
        				break;
        		}
        	}
         
        	this.sta_text.set_text(this.fv_msg);
        }

        /***********************************************************************
         * non-Transaction 관련 컴포넌트 이벤트 처리 함수
         ***********************************************************************/
        this.btn_aOk_onclick = function(obj,e)
        { 
            if (this.fv_msg == "세션이 끊겼거나 사용자 정보가 없습니다."){
                if (this.gfn_getEmpNo() != ""){//사번이 없는 경우 index.jsp 페이지로 이동.
                    replacePage("/index.jsp");
                }else{
                    window.open("about:blank","_self").close();  
                }
        	}else{ 
        	    this.close(true); 
        	}
        }
         
        this.btn_cOk_onclick = function(obj,e)
        {
        	this.close(true);
        }

        this.btn_cCancel_onclick = function(obj,e)
        {
        	this.close(false);
        }

        this.fv_cX;
        this.fv_cY;
        this.sta_title_onlbuttondown = function(obj,e)
        {
        	this.fv_cX = e.screenX;
        	this.fv_cY = e.screenY;
        }

        this.sta_title_onmousemove = function(obj,e)
        {
        	if(e.button == "none")
        	{
        		return;
        	}
        	
        	var nX = e.screenX;
        	var nY = e.screenY;

        	this.parent.set_left(parseInt(this.parent.left) - (this.fv_cX - nX));
        	this.parent.set_top(parseInt(this.parent.top) - (this.fv_cY - nY));

        	this.fv_cX = e.screenX;
        	this.fv_cY = e.screenY;	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.frmMessage_onload, this);
            this.sta_title.addEventHandler("onlbuttondown", this.sta_title_onlbuttondown, this);
            this.sta_title.addEventHandler("onmousemove", this.sta_title_onmousemove, this);
            this.btn_cOk.addEventHandler("onclick", this.btn_cOk_onclick, this);
            this.btn_cCancel.addEventHandler("onclick", this.btn_cCancel_onclick, this);
            this.btn_aOk.addEventHandler("onclick", this.btn_aOk_onclick, this);

        };

        this.loadIncludeScript("frmMessage.xfdl");

       
    };
}
)();
