//XJS=comLib.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /*****************************************************************************
         * 프로그램명 		: 	comLib.xjs
         * 작  성  자  	: 	송금준
         * 작  성  일   	: 	2015.07.06
         * 설      명  		:   일반적인 공통 함수
         * 수  정  자  	: 	
         * 수 정 이력  	: 	
         * 사용방법	    :   
        *******************************************************************************/
         
        /**
         * 그리드포멧 아규먼트 저장 아규먼트선언
         * @example	
         * @memberOf private
         */ 
        this.ffgformat = {
        	grdNm : "",
        	format :"" 
        };
        this._rtnModal = null;
        this._format = "";
        /**
        * 팝업 공통함수
        * @param {string} svcId
        * @param {number} Width
        * @param {number} Height
        * @param {string} form URL
        * @param {string} Callback Function
        * @return N/A
        * @example
        * @memberOf comLib
        */
        //openerForm, nWidth, nHeight, strTitle, strURL, params
        this.gfn_popup = function (svcId,nW,nH,title,parm,url,callback,isShowTitle,isResizable)
        {
        	var nLeft = system.clientToScreenX(this, 10);
        	var nTop  = system.clientToScreenY(this, 10);
        	var showTitle = true;
            if(isShowTitle == null || isShowTitle == undefined || isShowTitle == ""){
                showTitle = false;
            } else {
                showTitle = isShowTitle;
            }
            var resizable = false;
            if(isResizable == null || isResizable == undefined || isResizable == ""){
                resizable = false;
            } else {
                resizable = isResizable;
            }
        	var newChild = new ChildFrame;
        	newChild.init(svcId
        			, "absolute", nLeft, nTop, nW, nH, null, null
        			, url);
        	newChild.set_titletext(title);
        	newChild.set_showtitlebar(showTitle);
        	
        	newChild.set_autosize(true);			
        	newChild.set_resizable(resizable);
        	newChild.set_openalign("center middle");
        	
        	
        	
        	newChild.showModal(this.getOwnerFrame()
        				 , parm
        				 , this
        				 , callback);
        	this.gfn_getAuthPopup(this, url); // 팝업의 버튼 권한 체크
        }

        this.gfn_popupTop = function (svcId,nW,nH,title,parm,url,callback,isShowTitle)
        {
        	var nLeft = system.clientToScreenX(this, 10);
        	var nTop  = system.clientToScreenY(this, 10);
        	var showTitle = true;
            if(isShowTitle == null || isShowTitle == undefined || isShowTitle == ""){
                showTitle = false;
            } else {
                showTitle = isShowTitle;
            }
        	var newChild = new ChildFrame;
        	newChild.init(svcId
        			, "absolute", nLeft, nTop, nW, nH, null, null
        			, url);
        	newChild.set_titletext(title);
        	newChild.set_showtitlebar(showTitle);
        	
        	newChild.set_autosize(true);			
        	newChild.set_resizable(false);
        	newChild.set_openalign("center top");
        	
        	
        	
        	newChild.showModal(this.getOwnerFrame()
        				 , parm
        				 , this
        				 , callback);
        	this.gfn_getAuthPopup(this, url); // 팝업의 버튼 권한 체크
        }

        
        /**
        * 팝업 공통함수(modaless)
        * @param {string} svcId
        * @param {number} Width
        * @param {number} Height
        * @param {string} form URL
        * @param {string} Callback Function
        * @return N/A
        * @example
        * @memberOf comLib
        */
        this.gfn_popup_modalless = function (svcId,nW,nH,title,parm,url)
        {
        	var nLeft = system.clientToScreenX(this, 10);
        	var nTop  = system.clientToScreenY(this, 10);

            application.open(svcId, url, this.getOwnerFrame(), parm, "showtitlebar=true showstatusbar=false showontaskbar=false", nLeft, nTop, nW, nH, this);
            this.gfn_getAuthPopup(this, url); // 팝업의 버튼 권한 체크
        }

        /**
        * Callback Message Popup
        * @param {string} Service ID
        * @param {string} Error Code
        * @param {string} Message
        * @return N/A
        * @example
        * @memberOf comLib
        */
        this.gfn_callback_message = function (sid,errNo,errMsg)
        {
        	var vRtn;
        	var arrMsg = errMsg.split("®");

        	switch(arrMsg.length) {
        		case 1 :
        			vRtn = this.gfn_message(arrMsg[0]);
        			break;
        		case 2 :
        			vRtn = this.gfn_message(arrMsg[0], arrMsg[1]);
        			break;
        		case 3 :
        			vRtn = this.gfn_message(arrMsg[0], arrMsg[1], arrMsg[2]);
        			break;
        	}
        	
        	return vRtn;
        }

        /**
        * Message Popup
        * @param {string} Message Code (필수)
        * @param {string} Message
        * @param {string} Error Statement (별도로 보여줘야 할 추가 메시지)
        * @param {string} Service ID (Modal Popup ID : 생략되면 "MessagePopup"이 적용됨)
        * @param {Function} Callback Function (사용하지 않음, 추후에 필요에 따라 적용. 현재는 생략)
        * @return Boolean
        * @example
        * @memberOf comLib
        */
        this.gfn_message = function (msg_cd,msg,errStmt,svc_id,callback)
        {
        	if(this.comUtils.isNullEmpty(svc_id))
        	{
        		svc_id = "MessagePopup";
        	}

        	if(this.comUtils.isNullEmpty(msg_cd))
        	{
        		this._msgPop("A", "I", msg, errStmt, callback);
        		return;
        	}
        	
        	if(this.comUtils.isNullEmpty(msg))
        	{
        		msg = "";
        	}
        	
        	var bRtn = true;
        	var arrMsg = msg.split("|");
        	
        	var sMessage = this._findMessage(msg_cd);
        	var sMth = application.gds_message.getColumn(0, "EXPSR_MTH");
        	var sSe = application.gds_message.getColumn(0, "EXPSR_SE");
        	
        	if(this.comUtils.isNullEmpty(sMessage))
        	{
        		sMessage = msg;
        	}
        	else
        	{
        		for(var i = 0; i < arrMsg.length; i++)
        		{
        			sMessage = sMessage.replace("{" + i + "}", arrMsg[i]);
        		}
        	}
        	
        	sMessage = sMessage.replace(/\\\\n/g, "\n");

        	if(sMth == "C")
        	{
        		bRtn = confirm(sMessage);
        	}
        	else if(sMth == "S")
        	{
        		application.gv_bottomFrame.form.sta_message.set_text(sMessage);
        		bRtn = true;
        	}
        	else
        	{
        		this._msgPop(sMth, sSe, sMessage, errStmt, svc_id, callback);
        		bRtn = true;
        	}
        	
        	return bRtn;
        }

        this._msgPop = function (mth,se,msg,errStmt,svc_id,callback)
        {
        	var nLeft = system.clientToScreenX(this, 10);
        	var nTop  = system.clientToScreenY(this, 10);
        	var nW = 282;
        	var nH = 194;
        	var url = "common::frmMessage.xfdl";
         
        	// 별도의 메시지가 있을 경우...
        	if(!this.comUtils.isNullEmpty(errStmt))
        	{
        		url = "common::frmMessage2.xfdl";
        		
        		nW = 450;
        		nH = 400; 
        	}

        	var parm = {
        		arg_0 : this,  //==> 필수, 팝업을 호출하는 form을 참조할 수 있도록 팝업에 Argument로 넘겨준다. (반드시 기술해야 함.)
        		arg_mth : mth,
        		arg_se : se,
        		arg_msg : msg,
        		arg_errStmt : errStmt
        	};

        	var newChild = new ChildFrame;
        	newChild.init(svc_id
        			, "absolute", nLeft, nTop, nW, nH, null, null
        			, url);

        	newChild.set_showtitlebar(false);
        	newChild.set_autosize(true);			
        	newChild.set_resizable(false);
        	newChild.set_layered(true);
        	newChild.set_dragmovetype("all");
        	newChild.set_openalign("center middle");

        	newChild.showModal(this.getOwnerFrame()
        				 , parm
        				 , this
        				 , callback);
        }
         
        /**
        * Find Message
        * @param {string} Message Type
        * @param {string} Message Code
        * @return {string} Whole Message
        * @example
        * @memberOf comLib
        */
        this._findMessage = function (msg_cd)
        {
        	var sFilter = "MSSAGE_CODE=='" + msg_cd + "'";
        	var sRtn;
        	
        	application.gds_message.filter(sFilter);
        	if(application.gds_message.rowcount == 0)
        	{
        		sRtn = "";
        	}
        	else
        	{
        		sRtn = application.gds_message.getColumn(0, "MSSAGE_NM");
        	}

        	return sRtn;
        }

        /**
        * Callback Function 에서 공통적으로 처리
        * @param {string} Service ID
        * @param {number} Error No
        * @param {string} Error Message
        * @return Boolean
        * @example
        * @memberOf comLib
        */
        this.gfn_callBackMsg = function (sid,errNo,errMsg)
        {
        	var vRtn;
        	var arrMsg = errMsg.split("®");

        	switch(arrMsg.length) {
        		case 1 :
        			vRtn = this.gfn_message(arrMsg[0]);
        			break;
        		case 2 :
        			vRtn = this.gfn_message(arrMsg[0], arrMsg[1]);
        			break;
        		case 3 :
        			vRtn = this.gfn_message(arrMsg[0], arrMsg[1], arrMsg[2]);
        			break;
        	}
        	
        	return vRtn;
        } 

        /**
        * 사용자의 전체 메뉴를 불러온다
        * @param 없음
        * @return 없음
        * @example
        * @memberOf comLib
        */
        this.gfn_loadMenu = function ()
        {
        	if(application.gv_loginLinkAt == "Y") {
        		application.mainframe.Wrapper.set_separatesize("0, *, 0");
        		application.mainframe.Wrapper.mainFrameSet.set_separatesize("0, *");
        		application.mainframe.Wrapper.mainFrameSet.workFrameSet.set_separatesize("0, *");
        	}
        	
        	var sSvcID        	= "loadMenu";
        	var sController   	= "svcurl::/loginCheck.do";
        	
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "gds_userInfo=userInfo gds_auth=gds_auth gds_menu=gds_menu gds_message=gds_message gds_myMenu=gds_myMenu gds_menutree=gds_menutree";
            
        	var sArgs = "V_USER_ID='" + application.gv_userId + "' SYS_ID='PORTAL' MENU_ID=" + application.gv_openMenuId;
            var bSync = false;
               
        	this.transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "_menuCallBack", null, bSync, 0);

        }

        // gfn_loadMenu의 전용 Callback 함수
        this._menuCallBack = function (sid,errNo,errMsg)
        {   
        	if(errNo < 0)
        	{
                if(errMsg == "err.로그인.실패"){
                    this.alert("로그인 정보가 유효하지 않습니다.");
                    replacePage("/index.jsp");
                } else if(errMsg == "err.SSO토큰.무효") {
                    this.alert("SSO로그인 정보가 유효하지 않습니다.");  
                    replacePage("/index.jsp");
                } else if (errMsg == "err.서비스요청.무효") {
                    replacePage("/index.jsp");
                } else {
                    this.alert("세션이 끊겼거나 사용자 정보가 없습니다.");
                    replacePage("/index.jsp");
                }
                
          
        	} else { 
        	    
        	    application.gv_topFrame.form.getTreeMenu();  // 레벨0 상위메뉴 설정	    
        	    application.gv_topFrame.form.fn_fillMenu();
        	    application.gv_topFrame.form.fn_drawMenu();	    
        	    application.gv_topFrame.form.getSubMenu();  // 레벨1 상위메뉴 설정
        	    application.gv_bottomFrame.form.fn_setUserInfo(); 	      
        	    application.gv_topFrame.form.fn_openForm(application.gv_openMenuId);

                if (application.gv_openMenuId != ""){//메뉴아이디가 전달된 경우와 사번이 있는 경우  전달된 메뉴로 오픈하도록 처리.
        			this.gfn_callMenu(application.gv_openMenuId);
        	    }
         	    else if (this.gfn_getEmpNo() != ""){//사번이 있는 경우 사원으로 판단하여 My메뉴>개일결재함 화면 오픈하도록 처리.
                    // this.gfn_callMenu("16101000");//기본화면(My메뉴>개인결재함)
        			this.gfn_callMenu("2802010000");//기본화면(부서현황)
         	    }  
        	} 
        }
          
        /** 
        * 요청한 메뉴아이디 화면을 호출한다.
        * @param menuId 메뉴아이디
        * @return 없음
        * @example
        * @memberOf comLib 
        */
        this.gfn_callMenu = function(menuId){

        	if (menuId == "16101000" || menuId == "16102000"){//내부결재(16101000), My기안문서(16102000)
        			application.gv_menuFrame.form.fn_changeGrid("MYMENU");//마이메뉴 탭으로 이동 					
        			application.gds_myMenu.filter("");
        			var nRow = application.gds_myMenu.findRow("MENU_ID", menuId);//마이메뉴 데이터 셋에서 내부결재 row 값 검색
        			var strMenuNm = application.gds_myMenu.getColumn(nRow, "MENU_NM");
        			var strSysSeCode = application.gds_myMenu.getColumn(nRow, "SYS_SE_CODE");
        			var strUrl = application.gds_myMenu.getColumn(nRow, "PAGE_URL");
        			var strExpr = "MENU_ID==" + menuId + "";						
        			var nFRow = application.gds_openMenu.findRowExpr(strExpr);//오픈된 메뉴에서 호출할 메뉴 검색			
        			
        			if(nFRow > -1){//
        				application.gv_formFrameSet.frames[strSysSeCode + "_" + menuId].setFocus();
        			}else{//최초로 오픈됨.			   			    
        				var nNewRow = application.gds_openMenu.addRow(); 
        				application.gds_openMenu.copyRow(nNewRow, application.gds_myMenu, nRow);//
        				application.gv_mdiFrame.form.fn_addMenu(menuId, strMenuNm, strSysSeCode);
        				application.gfn_addForm(menuId, strMenuNm, strSysSeCode, strUrl);						
        			}
        			 
            }else{  
        			application.gds_menu.filter("");
        			var nRow = application.gds_menu.findRow("MENU_ID", menuId);//사용메뉴 데이터 셋에서 내부결재 row 값 검색
        			var strMenuNm = application.gds_menu.getColumn(nRow, "MENU_NM");
        			var strSysSeCode = application.gds_menu.getColumn(nRow, "SYS_SE_CODE");
        			var strUrl = application.gds_menu.getColumn(nRow, "PAGE_URL");			
        			if (typeof strUrl == "undefined") return;  
        			var strExpr = "MENU_ID==" + menuId + "";						
        			var nFRow = application.gds_openMenu.findRowExpr(strExpr);//

        			if(nFRow > -1){//
        				application.gv_formFrameSet.frames[strSysSeCode + "_" + menuId].setFocus();
        			}else{//최초로 오픈됨.			   			    
        				var nNewRow = application.gds_openMenu.addRow();  
        				application.gds_openMenu.copyRow(nNewRow, application.gds_menu, nRow);//사용메뉴에서 조회
        				application.gv_mdiFrame.form.fn_addMenu(menuId, strMenuNm, strSysSeCode);
        				application.gfn_addForm(menuId, strMenuNm, strSysSeCode, strUrl);						
        			}	
        	}  			
        }
          
         
        /*
         * 함수명  	: gfn_loadMyMenu
         * 설명 		: 바로가기메뉴 조회
         * params  		: None
         * return Type 	: None
         * 사용법		:  
         */
        this.gfn_loadMyMenu = function(){
            var sSvcID        	= "MyMenuList";
        	var sController   	= "svcurl::/hsco/cmm/myMenu/MyMenuList.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "gds_myMenu=gds_myMenu";
        	var sArgs = "V_USER_ID='" + application.gv_userId + "'";
        	        
            //var tepVal = application.mainframe.Wrapper.mainFrameSet.menuFrame.
            var bSync = false;
            this.transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "_myMenuCallBack", false, bSync, 0);//동기처리
        	//Ex.core.tran(this, sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "_myMenuCallBack");
        }

        // CallBack Function
        this._myMenuCallBack = function (sid,errNo,errMsg)
        {    
            if(errNo < 0)
        	{
        // 		alert("사용자, 메뉴 정보를 가져오지 못했습니다.");
        	} 
        	
        	var gds_myMenu = application.gds_myMenu;
        	//마이메뉴 담을 임시 데이터셋
        	var dsTemp = new Dataset();
        	//임시데이터셋에 현재 마이메뉴 데이터셋 복사
        	dsTemp.copyData(gds_myMenu);
        	//현재 마이메뉴 데이터 삭제
        	gds_myMenu.clearData(); 
        	//현재 마이메뉴 행 추가
        	var nRow = gds_myMenu.addRow();
        	
        	if (nRow < 0){
        		var strXML = "<Dataset id=\"gds_myMenu\">"
        		           + "<ColumnInfo>"
        		           + "<Column id=\"PAGE_URL\" type=\"string\" size=\"32\"/><Column id=\"SORT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"CHK\" type=\"string\" size=\"32\"/>"
        				   + "<Column id=\"MENU_NM\" type=\"string\" size=\"32\"/><Column id=\"IMAGE\" type=\"string\" size=\"32\"/><Column id=\"SYS_SE_CODE\" type=\"string\" size=\"32\"/>"
        				   + "<Column id=\"MENU_ID\" type=\"bigdecimal\" size=\"16\"/><Column id=\"DEL_IMAGE\" type=\"string\" size=\"32\"/>"
        				   + "</ColumnInfo>"
        // 				   + "<Rows>"
        // 				   + "<Row>"
        // 				   + "<Col id=\"PAGE_URL\">com_sym_ism::SYM101000.xfdl</Col><Col id=\"SORT\">1</Col><Col id=\"USER_ID\">"+application.gv_userId+"</Col><Col id=\"CHK\">1</Col><Col id=\"MENU_NM\">개인결재함</Col><Col id=\"IMAGE\">URL(&quot;theme://images/ico_treeitem.png&quot;)</Col>"
        // 				   + "<Col id=\"SYS_SE_CODE\">SYS</Col><Col id=\"MENU_ID\">16101000</Col><Col id=\"DEL_IMAGE\"/></Row><Row><Col id=\"PAGE_URL\">com_sym_ism::SYM102000.xfdl</Col><Col id=\"SORT\">1</Col>"
        // 				   + "<Col id=\"USER_ID\">"+application.gv_userId+"</Col><Col id=\"CHK\">1</Col><Col id=\"MENU_NM\">My기안문서</Col><Col id=\"IMAGE\">URL(&quot;theme://images/ico_treeitem.png&quot;)</Col><Col id=\"SYS_SE_CODE\">SYS</Col><Col id=\"MENU_ID\">16102000</Col><Col id=\"DEL_IMAGE\"/>"
        // 				   + "</Row></Rows>"
        				   + "</Dataset>";
        		
        		gds_myMenu.loadXML(strXML);
        	}else{
        		//현재 마이메뉴에 개인결재함 추가
        		gds_myMenu.setColumn(nRow, "PAGE_URL","com_sym_ism::SYM101000.xfdl");
        		gds_myMenu.setColumn(nRow, "SORT","1");
        		gds_myMenu.setColumn(nRow, "PAGE_URL","com_sym_ism::SYM101000.xfdl");
        		gds_myMenu.setColumn(nRow, "USER_ID",application.gv_userId);
        		gds_myMenu.setColumn(nRow, "CHK","1");
        		gds_myMenu.setColumn(nRow, "MENU_NM","개인결재함");
        		gds_myMenu.setColumn(nRow, "IMAGE","URL(\"theme://images/ico_treeitem.png\")");
        		gds_myMenu.setColumn(nRow, "SYS_SE_CODE","SYS");
        		gds_myMenu.setColumn(nRow, "MENU_ID","16101000");
        		gds_myMenu.setColumn(nRow, "DEL_IMAGE","");
        		nRow = gds_myMenu.addRow();	
        		//현재 마이메뉴에 My기안문서 추가 
        		gds_myMenu.setColumn(nRow, "PAGE_URL","com_sym_ism::SYM102000.xfdl");
        		gds_myMenu.setColumn(nRow, "SORT","1");
        		gds_myMenu.setColumn(nRow, "PAGE_URL","com_sym_ism::SYM102000.xfdl");
        		gds_myMenu.setColumn(nRow, "USER_ID",application.gv_userId);
        		gds_myMenu.setColumn(nRow, "CHK","1");
        		gds_myMenu.setColumn(nRow, "MENU_NM","My기안문서");
        		gds_myMenu.setColumn(nRow, "IMAGE","URL(\"theme://images/ico_treeitem.png\")");
        		gds_myMenu.setColumn(nRow, "SYS_SE_CODE","SYS");
        		gds_myMenu.setColumn(nRow, "MENU_ID","16102000");
        		gds_myMenu.setColumn(nRow, "DEL_IMAGE","");	
        		//기존 마이메뉴 백업한 임시 데이터셋 행 갯수 
        		var iRow = dsTemp.getRowCount();
        		//기존 마이메뉴 행 추가
        		if(iRow > 0){ 
        			for(var i=0; i<iRow; i++){
        			  var myRow = gds_myMenu.addRow(); 			 
        			  gds_myMenu.copyRow(myRow,dsTemp,i);
        			}
        		}
        	}
        }

        this.gfn_getUserId = function ()
        {
        	return application.gv_bottomFrame.form.fv_userId;
        	//return application.gds_userInfo.getColumn(0, "USER_ID");
        }

        this.gfn_getUserName = function ()
        {
        	return application.gv_bottomFrame.form.fv_userName;
        	//return application.gds_userInfo.getColumn(0, "USER_NM");
        }

        this.gfn_getDeptName = function ()
        {
        	return application.gv_bottomFrame.form.fv_deptName;
        }

        this.gfn_getDeptId = function ()
        {
        	return application.gv_bottomFrame.form.fv_deptId;
        }

        this.gfn_getEmpNo = function ()
        {
        	return application.gds_userInfo.getColumn(0, "EMPNO");
        }

        this.gfn_getConectIp = function ()
        {
        	return application.gv_bottomFrame.form.fv_userIp;
        }

        
        /**
        * Modeless 공통함수
        * @param {string} svcId
        * @param {number} Width
        * @param {number} Height
        * @param {string} form URL
        * @param {string} Callback Function
        * @return N/A
        * @example
        * @memberOf comLib
        */
        //openerForm, nWidth, nHeight, strTitle, strURL, params
        this.gfn_modeless = function (svcId,nW,nH,title,parm,url,callback)
        {
        	var bSucc;
        	var nLeft = system.clientToScreenX(this, 10);
        	var nTop  = system.clientToScreenY(this, 10);

        	bSucc = application.open(svcId, url, application.mainframe, parm, "showtitlebar=true showstatusbar=false showtoolbars=false showlocation=false showmenubar=false", nLeft, nTop, nW, nH, this);
            this.gfn_getAuthPopup(this, url); // 팝업의 버튼 권한 체크
        //ChildFrame.init("ChildFrame00", "absolute", 30, 30, 30, 30, null, null, "Base::formurl.xfdl");
        // 	var newChild = new ChildFrame;
        // 	newChild.init(svcId
        // 			, "absolute", nLeft, nTop, nW, nH, null, null
        // 			, url);
        //
        // 	newChild.set_titletext(title)
        // 	newChild.set_showtitlebar(false);
        // 	newChild.set_autosize(true);			
        // 	newChild.set_resizable(false);
        // 	newChild.set_openalign("center middle");
        //
        // 	newChild.showModal(this.getOwnerFrame()
        // 				 , parm
        // 				 , this
        // 				 , callback);
        }

        
        /**
        * 이 함수가 먼저 수행되고 사용자지정 Callback함수가 수행된다
        * @param {string} svcID
        * @param {string} 에러코드
        * @param {string} 에러 메시지
        * @return N/A
        * @example
        * @memberOf comLib
        */   
        this._gfn_callback = function(o,errorCode,errorMsg)
        {
        	application.set_usewaitcursor(false,true); //커서 비활성화.
        	var svcId = o.id;	
            var strMsg =   errorMsg.length > 50 ? errorMsg.substr(0,50) + "..." : errorMsg;    
            var callBackId = o.callbackFunc;
               //  trace(application.gds_menu.saveXML());
                Ex.core.trstart = false;
            if(errorCode == -1 && errorMsg == "FAILED") 
             {
        		Ex.core.clearSessionId(); 
        		return;
             }

        	// 세션 만료 체크
        	if(errorCode == -9)  
        	{
        	     Ex.core.clearSessionId();	 
        	     Ex.core.showMsg(this,"alert","root_unknown",errorMsg,"","default","","this.gfn_callBackMsg");
        	    return;
        	}
        	Ex.core._postPageDataset(o.outDatasets);
        	// 페이징 데이터셋 초기화
        	if(errorCode < 0)
        	{
        	  Eco.Logger.debug({message:"Transaction Error!!! ErrorCode : '"+errorCode+"' ErrorMsg : '"+errorMsg+"'", elapsed:true, stack:true});
        	}	
        	 this[callBackId](svcId,errorCode,errorMsg);
        }

        /**
         * 서비스 콜백 함수
         * @param 
         * @return 
         * @example
         * @memberOf comLib
         */
        this.gfn_commCallBack = function(svcId,errorCode,errorMsg)
        {
        	var pThis = this;
        	if(errorCode < 0){
        	    Ex.core.showMsg(this,"alert","commCallBackErro",errorMsg,"","default","","this.gfn_callBackMsg");
        	    return;
        	} 	

        	switch(svcId){
        		case "saveGrdFormat": 			//그리드 포멧 저장
        					
        			 var curFormId =  Eco.XComp.getUserProperty(this, "_UserFormId"); 			
         			 var iRow = application.gds_gridInfo.findRowExpr("PAGE_URL == '" + curFormId + "' && GRID_ID == '" + this.ffgformat.grdNm + "'");
                     //데이타가 없으면 데이타 추가
        			 if(iRow == -1) iRow = application.gds_gridInfo.addRow(); 			 
        			 application.gds_gridInfo.setColumn(iRow,"PAGE_URL",curFormId);
        			 application.gds_gridInfo.setColumn(iRow,"GRID_ID",this.ffgformat.grdNm);              
                     application.gds_gridInfo.setColumn(iRow,"GRID_FORMAT",this.ffgformat.format);
                     Ex.core.comMsg("alert","transaction.complete");

        			break;

        		case "logout" : //로그아웃
        			
        			if(nexacro.Browser != "Runtime")
        			{
        				Ex.core.closeSession();  //로그아웃 reload
        			}						
        			else
        			{
        				gv_index.div_index.set_url("frame.login.xfdl");
        			}	
        			break;
        	}
        }

        /**
        * 공통 lgoin callback
        * @param {string} strServiceId
        * @param {string} strErrorCode
        * @param {string} strErrorMsg
        * @return 
        * @example
        * @memberOf public
        */
        this.gfn_loginCallBack = function(strServiceId,strErrorCode,strErrorMsg)
        {
        	Ex.core.clearSessionId();
        	if (strErrorCode < 0) 
        	{
        		 if(application.gv_info == "root")
        		 {
        		   this.div_wrap.divMain.pgBar.set_pos(0);
        		   this.killTimer(0);
        		   this.div_wrap.set_visible(false);
        		 }
        		Ex.core.showMsg(this,"alert",strServiceId + "_strErrorMsg","아이디 패스워드가 정확하지 않습니다.","","error","","this.gfn_callBackMsg");
        		return;
        	}

        
        	 if(application.gds_userInfo.getRowCount() > 0)
        	   {
        		   //if(Ex.util.isGetHost() != "LOCAL")
        		   //{           
        			  //var nRow = application.gds_config.findRow("CONFIG_CD", "A011");
        			  //application.gv_host = application.gds_config.getColumn(nRow, "CONFIG_VALUE");
        			  //application.services["svcurl"].url = application.gv_host;
        		   //} 
        			Ex.core.trUserAuth();  //권한체크
        		//	this.alert(application.gds_auth.getColumn(0, "AUTH_GRP_ID"));
        		//	Ex.core.comMsg("alert","aaa:ddddddd");
        	   }
        	   else
        	   {
        		  Ex.core.showMsg(this,"alert",strServiceId +  "_unknown","아이디 패스워드가 정확하지 않습니다.","","error","","this.gfn_callBackMsg");
        	   }
        }

        /**
        * Login 권한 콜벡
        * @param {string} service id 
        * @param {string} errprcode
        * @param {string} errprmsg
        * @return 
        * @example
        * @memberOf comLib
        */
        this._gfn_authCallBack = function(svc,errorCode,errorMsg)
        {

            application.gv_userAuth = application.gds_auth.lookup("USER_ID",application.gds_userInfo.getColumn(0,"USER_ID"),"AUTH_GRP_ID");
            
            //if(errorCode < 0 || Eco.isEmpty(application.gv_userAuth))
            //{
              //Ex.core.showMsg(this,"alert",strServiceId + "_strErrorMsg","로그인정보 오류","","error","","this.gfn_callBackMsg");
            //}
            //else
            //{
            
              this.fn_menuOpen();
            //}
        }

        /**
        * 공통 팝업 메세지 관련callback
        * @param {string} popupid
        * @param {array} argument
        * @return 
        * @example
        * @memberOf comLib
        */
        this.gfn_popupMsgAfter = function(sPopupId)
        {
        	var rtn = this.gfn_getPopupRtn();
        		
        		
        	if(!Eco.isEmpty(rtn))
        	{
        		var sType = sPopupId.split("_")[0];
        		var strResult = rtn.CLOSE_RES;
        		var strCallBackId = rtn.CALLBACK_ID;
        		var fCallback =  rtn.f_CALLBACK;
        			Ex.core.onload(this);
        			application.gv_curFormId = Ex.core.ff_preCurFormId;
        			Ex.core.ff_preCurFormId = "";
        		
        		  try{
        			gv_work.div_work.setFocus();
        		  }catch(e){
        		  }
        		  
        		   if(!Eco.isEmpty(fCallback))
        		   {
        			  this[fCallback.split('.')[1]](strCallBackId,strResult);
        		   }
        		   else
        		   {
        			  if(Eco.isFunction(this.fn_callBackMsg)) this.fn_callBackMsg(strCallBackId,strResult)
        		   }
        	}	
        	
        }

        /**
        * 공통 팝업 callback
        * @param {string} popupid
        * @param {array} argument
        * @return 
        * @example
        * @memberOf comLib
        */
        this.gfn_popupAfter = function(sPopupId,val)
        {
             var rtn = this.gfn_getPopupRtn();	
                Ex.core.onload(this);
                application.gv_curFormId = Ex.core.ff_preCurFormId;
                Ex.core.ff_preCurFormId = "";
              try{
                gv_work.div_work.setFocus();
              }catch(e){
              }	 
        	   
              if(Eco.isFunction(this.fn_popupAfter))
              {
        		this.fn_popupAfter(sPopupId,val);
              }
              
            
        }

        /**
        *그리드 컬럼 expr background 셋팅
        * @param {object} gridObj
        * @param {number} 현재Row값
        * @return N/A
        * @example
        * @memberOf comLib
        */ 
        this._gfn_grid_background = function(obj,nRow)
        {
             var dsBind = Eco.XComp.lookup(this,obj.binddataset);
             var nRowType = dsBind.getRowType(nRow);
             var sRtnVal = "";
             switch(nRowType)
             {
                 case Dataset.ROWTYPE_INSERT : nRowType = "#FFE8F3FF"; break;
                 case Dataset.ROWTYPE_UPDATE : nRowType = "#EDF4D5FF"; break;
             }
             
             return nRowType;
        }

        /**
        * 팝업창 창닫기 이벤트
        * @param {string}  창닫기시 보내질 아규먼트
        * @example N/A
        * @memberOf comLib
        */  
        this.gfn_popupClose = function(val)
        {
            application.gv_curFormId  = Ex.core.ff_preCurFormId;
            Ex.core.onload(this);
            this.close(this.opener._setReturn(val));	
        }

        /**
        * 팝업값 return 
        * @param 
        * @return {string} return 값
        * @example 
        * @memberOf comLib
        */
        this.gfn_getPopupRtn = function()
        {
          return this._rtnModal;

        }

        /**
        * top 프레임에서 상위 레벨을 선택했을 때의 처리
        * @param  {string} 윈도우 생성아이디
        * @return  N/A
        * @example 
        * @memberOf comLib
        */ 
        this.gfn_topMenuClick = function(topMenuid)
        {
        	if (this.gfn_checkMenuStat(topMenuid) == false) 
        	{
        		return;
        	}	

        	gv_leftFrame.form.fn_changeMenu(topMenuid);
        }

        /**
        * 선택된 메뉴의 상태를 확인해서 오픈할 수 없을 경우에 메시지를 표시한다.
        * @param  {string} 메뉴아이디
        * @return  N/A
        * @example 
        * @memberOf comLib
        */  
        this.gfn_checkMenuStat = function(menuId)
        {
         	var menuStat = Ex.util.getLookupData(application.gds_menu, ct_menuIdCol, menuId, application.gv_MenuStatCol);
        	return true;
        }

        /**
        * Datset의 갱신여부를  Return 한다.
        * @param  {string} 확인 대상 Dataset
        * @return  {boolen} 갱신여부
        * @example 
        * @memberOf comLib
        */   
        this.gfn_DsGetUpdated = function(objDs)
        {
        	this.gfn_updateToDataset();
        	return Ex.util.isUpdated(objDs);
        }

        
        /**
        * 컨트롤이 Dataset에 bind되어 있을경우 즉시 value를 Dataset에 적용시킨다.
        * @param  
        * @return  N/A
        * @example 
        * @memberOf comLib
        */  
        this.gfn_updateToDataset = function()
        {
        	var objComp = this.getFocus();
        	
        	if (objComp != null) 
        	{
        		try 
        		{
        			objComp.updateToDataset();
        		}
        		catch (e) 
        		{
        		}
        	}
        }

        /**
        * 팝업 아규 셋팅
        * @param {obj}  arguemnt		
        * @return 
        * @example N/A
        * @memberOf comLib
        */
        this._setReturn = function(obj)
        {
        	this._rtnModal = null;	
        	if(typeof(obj) == "string")
        	{
        		this._rtnModal = obj;
        		return obj;
        	}
        	
        	if(obj instanceof Array) {
        		this._rtnModal = new Array();
        	} else {
        		this._rtnModal = new Object();
        	}
        	
        	for(var prop in obj)
        	{
        		this._rtnModal[prop] = obj[prop]	
        	}

        	return "_rtnModal";
        }

        /**
        * 포멧된 데이타 저장 handler 호출
        * @param  {object}
        * @return N/A
        * @example
        * @memberOf comLib
        */
        this.gfn_saveGrdFormat = function()
        {
        	
        	if(Ex.core.comMsg("confirm","comm.confirm.save"))
        	{
        	  this.gfn_saveGrdAction();
        	}
        }

        /**
        * gfn_saveGrdAction
        * @param  {object} objGrid  : form obj
        * @return N/A
        * @example
        *
        * @memberOf comLib
        */
        this.gfn_saveGrdAction = function()
        {
        	var pThis = this;
        	this.ffgformat.grdNm  = this._format.substr((this._format.lastIndexOf('.') + 1),this._format.length);
        	var oGrid = Eco.XComp.query(this,"typeOf =='Grid' && prop[name] == '"+ this.ffgformat.grdNm +"'");

        	if(Eco.isEmpty(oGrid) || oGrid.length != 1)
        	{
        	   Eco.Logger.debug({message:"Grd id  SaveFormat  inquired  Error!!! Grid Name : '"+oGrid[0].name+"'", elapsed:true, stack:true});
        	   return;
        	}
        	   
        	this.ffgformat.format  = this.getGridFormat(oGrid[0]);
        	var pCurFormId = Eco.XComp.getUserProperty(this, "_UserFormId");
        	var pThis = this;	
        	var _dsOutGrdFormat = Ex.util.isCheckDs("dsOutGrdFormat");
           
        	if(pThis.dsOutGrdFormat.getColCount() < 1)
        	{
        		pThis.dsOutGrdFormat.addColumn( "PAGE_URL", "string", 256);
        		pThis.dsOutGrdFormat.addColumn( "GRID_ID", "string", 256 );
        		pThis.dsOutGrdFormat.addColumn( "GRID_FORMAT", "string", 256 );
        	}
        		_dsOutGrdFormat.addRow();
        		_dsOutGrdFormat.setColumn(0,"PAGE_URL",pCurFormId);
        		_dsOutGrdFormat.setColumn(0,"GRID_ID",this.ffgformat.grdNm);
        		_dsOutGrdFormat.setColumn(0,"GRID_FORMAT",this.ffgformat.format);
        	
        	 this.setWaitCursor(false,true);
        	var iExistRow = application.gds_gridInfo.findRowExpr("PAGE_URL == '" + pCurFormId+ "' && GRID_ID == '" + this.ffgformat.grdNm + "'");
        	if(iExistRow == -1)
        	{
        		var sCallback       = "gfn_commCallBack";
        		var sSvcID          = "saveGrdFormat";                    
        		var sController     = "xpController.do";                    
        		var sInDatasets     = "input1=dsOutGrdFormat input2=dsOutGrdFormat";                    
        		var sOutDatasets    = "";                   
        		var sArgs = "";				
        			sArgs += Ex.util.setParam("method","save");
        			sArgs += Ex.util.setParam("sqlId","x_save_user_gridinfo_02 x_save_user_gridinfo_03");
        			sArgs += Ex.util.setParam("forceSqlFlag","Y Y");
        		
        		Ex.core.tran(this,sSvcID, sController, sInDatasets, sOutDatasets, sArgs, sCallback);             
        		
        	}else
        	{
        		var sCallback       = "gfn_commCallBack";
        		var sSvcID          = "saveGrdFormat";                    
        		var sController     = "xpController.do";                    
        		var sInDatasets     = "input1=dsOutGrdFormat";                  
        		var sOutDatasets    = "";                   
        		var sArgs = "";				
        			sArgs += Ex.util.setParam("method","save");
        			sArgs += Ex.util.setParam("sqlId","x_save_user_gridinfo_01");
        			sArgs += Ex.util.setParam("forceSqlFlag","Y");
        		
        		Ex.core.tran(this,sSvcID, sController, sInDatasets, sOutDatasets, sArgs, sCallback);                         
        	} 
        }

        /**
        * 포멧된 데이타 불러오기
        * @param  {object}
        * @return N/A
        * @example
        * @memberOf comLib
        */
        this._loadGridFormat = function(obj)
        {
        	var curFormId = Eco.XComp.getUserProperty(obj, "_UserFormId");
        	var strGrdId;
        	var strForamt;
        	var pThis = this;
            var _dsLoadFormat = application.gds_gridInfoLoad;
            	
            if(_dsLoadFormat.rowcount > 0) _dsLoadFormat.clearData();
            	
        	if(Eco.isEmpty(curFormId) || curFormId == "extComp::extComMessage.xfdl") return;

        		 application.gds_gridInfo.filter("PAGE_URL=='"+curFormId+"'");
        		 _dsLoadFormat.copyData(application.gds_gridInfo,true);
        		 application.gds_gridInfo.filter("");

        	if(_dsLoadFormat.rowcount < 1) return;
        		_dsLoadFormat.set_enableevent(false);
        	
        	for(var i=0; i < _dsLoadFormat.getRowCount();i++){
        		strGrdId = _dsLoadFormat.getColumn(i,"GRID_ID");
        		strForamt = _dsLoadFormat.getColumn(i,"GRID_FORMAT");

        		try{

        		    var oGrid = Eco.XComp.query(this,"typeOf =='Grid' && prop[name] == '"+strGrdId+"'");
        		    if(Eco.isEmpty(oGrid) ||oGrid.length != 1 ) return;
        				oGrid[0].set_formats(strForamt);  
        		}
        		catch(e)
        		{
        		   trace("gridsave error  e.meesage " + e.message);
        		}
        	}
        	_dsLoadFormat.set_enableevent(true);
        	_dsLoadFormat.clearData();
        }

        /**
         * 현재 설정된 그리드 포멧을 Return
         * @param {xpComp} 그리드 컴퍼넌트
         * @return {string} format string
         * @example
         * @memberOf comLib
         */
        this.getGridFormat = function(objGrid)
        {
        	 var strFormat = "";
        	 var bindds = objGrid.binddataset;
             var objDs = Eco.XComp.lookup(this,bindds);
                 objDs.set_enableevent(false);
                 objGrid.set_binddataset('');

        	if(Eco.XComp.typeOf(objGrid) =="Grid")
        	{
        		for(var i=0; i < objGrid.getFormatColCount(); i ++)
        		{
        		   var iColSize = objGrid.getRealColSize(i);		
        		   var res =  objGrid.setFormatColProperty( i,"size",iColSize+1 );
        		   var iColSize2 = objGrid.getFormatColSize(i);    			       
        			   res =  objGrid.setFormatColProperty( i,"size",iColSize2-1);
        		}
        		  
        		strFormat = "<Formats> " + objGrid.getCurFormatString().replace("▼","").replace("▲","")+ "</Formats> ";
        	}

        	 objGrid.set_binddataset(bindds);
             objDs.set_enableevent(true);
        	 return strFormat;
        }

        /**
        * 그리드에 image 있는경우 url 변환
        * @param {xpComp} gridObj
        * @return {string} format string
        * @example
        * @memberOf comLib
        */
        this.gfn_exportExcel_with_image = function(obj)
        {
        	var dsObj = (obj.indexOf(".") != -1 ?  this[obj.split('.')[1]] : obj);
        	var objDs = this[obj.split('.')[1]].binddataset;
        	var objGrid =  this._grd_excel;     //엑셀용 임시 그리드

        	//포멧 초기화 설정
             var stFormat = '<Formats>\n';
                 stFormat +='<Format id="default">\n';
        		 stFormat +='</Format>\n';
        		 stFormat +='</Formats>';
            
        	if(!this.isValidObject("_grd_excel"))
        	{		
        		var objGrid = new Grid();		
        		objGrid.init("_grd_excel", "absolute", 0, 0, 50, 50, null, null);
        		objGrid.set_visible(false);
        	  
        		// Add Object to Parent Form  
        		this.addChild("_grd_excel", objGrid); 
        		
        		// Show Object  
        		objGrid.show(); 
        	}
        	
        	var _ds_excel =Ex.util.isCheckDs("_ds_excel");	
        	    _ds_excel.assign(this.all[objDs]);	 
        	this._grd_excel.set_formats(stFormat);   //포멧초기화	
        	var grdOrgFormat = this.getGridFormat(dsObj);   //원본그리드 포멧 가져오기
        	this._grd_excel.set_formats(grdOrgFormat);   //가져온 포멧 설정	 	
        	this._grd_excel.set_binddataset("_ds_excel");  //dataset명 카피
        	
        	/***** gird porpery 설정은 업무에 맞게 처리하세요~ **************/	
        	var col_id = "";
        	var strUrl = "";	
        	for(var i=0; i<this._grd_excel.getFormatColCount(); i++)
        	{		
        		if (this._grd_excel.getCellProperty("body",i,"displaytype") == "image")
        		{	
        			col_id = this._grd_excel.getCellProperty("body",i,"text");
         			col_id = col_id.replace("bind:","");			
        			var str = "URL(\\'";
        			this._grd_excel.setCellProperty("body",i,"displaytype","text");
        			this._grd_excel.setCellProperty('body',i,"expr","expr:" + col_id + ".toString().replace('URL(\\'','').replace('\\')','')");
        		}
        	}	
        	 
           //excel export
           Ex.core.exportExcel(this,this._grd_excel);
        }   

        /**
        * 그리드의 Sort를 처리한다.
        * @param  {event} grid event
        * @return N/A
        * @example
        * @memberOf comLib
        */
        this._gridSort = function(obj,e)
        {
        	// 컬럼의 정렬방식을 'head'의 text에 "↑,↓"여부로 판단.
        	// 이미지로 대체 가능.
        	var strType = obj.getCellProperty("head", e.cell, "displaytype");
        	if (strType =="tree" ||strType =="checkbox" ||strType == "checkbox")
        	{
        		return;
        	}

        	var bindDs = Eco.XComp.lookup(this,obj.binddataset);
        	
        	if (bindDs.rowcount == 0)
        	{
        		return false;
        	}

        	var BodyColId = (obj.getCellProperty("body", e.col, "text")).toString().split(":");
        	    bindDs.set_enableevent(false);
        	for (var i = 0; i < obj.getCellCount("head"); i++)
        	{
        		if (obj.getCellText(-1, i) == "undefined")
        		{
        			continue;
        		}

        		var strHeadText = obj.getCellText(-1, i);

        		if (i == e.cell)
        		{
        			if (strHeadText.substr(strHeadText.length - 1) == Ex.core.fv_constAscMark)
        			{
        				obj.setCellProperty("head", i, "text", strHeadText.substr(0, strHeadText.length - 1) + Ex.core.fv_constDescMark);
        				bindDs.set_keystring(("S:-" + BodyColId[1]));
        			}
        			else if (strHeadText.substr(strHeadText.length - 1) == Ex.core.fv_constDescMark)
        			{
        				obj.setCellProperty("head", i, "text", strHeadText.substr(0, strHeadText.length - 1) + Ex.core.fv_constAscMark);
        				bindDs.set_keystring(("S:+" + BodyColId[1]));
        			}
        			else
        			{
        				obj.setCellProperty("head", i, "text", strHeadText + Ex.core.fv_constAscMark);
        				bindDs.set_keystring(("S:+" + BodyColId[1]));
        			}
        		}
        		else
        		{
        			// 정렬표시 삭제
        			if (strHeadText.substr(strHeadText.length - 1) == Ex.core.fv_constAscMark || strHeadText.substr(strHeadText.length - 1) == Ex.core.fv_constDescMark)
        			{
        				obj.setCellProperty("head", i, "text", strHeadText.substr(0, strHeadText.length - 1));
        			}
        		}
        		
        	}
        	bindDs.set_enableevent(true);
        	bindDs.set_rowposition(0);
        }

        
        /**
        * Sort Mark 제거
        * @param  {object} grid
        * @return N/A
        * @example
        * @memberOf comLib
        */
        this._clearSortMark = function(obj)
        {
        	var nColCnt = obj.getCellCount("head");
        	var sRepText;

        	for (var ii = 0; ii < nColCnt; ii++)
        	{

        		sRepText = obj.getCellProperty("head", ii, "text").split(fv_constAscMark).join("").split(fv_constDescMark).join("");
        		obj.setCellProperty("head", ii, "text", sRepText);
        	}

        	var bindDs = Eco.XComp.lookup(this,obj.binddataset);
        	bindDs.set_keystring("");
        }

        /**
        * Grid Head중 check box가 있을 경우, check box 클릭 이벤트 발생시 전체 row에 대한 check/uncheck 설정 함수
        * @param  {object} grid
        * @return N/A
        * @example
        * @memberOf comLib
        */
        this._setGridCheckAll = function(obj,e)
        {
        	var strVal;
        	var strChkCol;
        	var dsObj;

        	if(obj.readonly == true) return;
        	   dsObj = Eco.XComp.lookup(this,obj.binddataset);

        	var strType = obj.getCellProperty("head", e.cell, "displaytype");

        	if(strType != "checkbox" || dsObj.rowcount == 0) return;
        	// Head셋팅
        	strVal = obj.getCellProperty("head", e.cell, "text");

        	if (strVal == "1")
        	{
        		obj.setCellProperty("head", e.cell, "text", '0');
        		strVal = "0";
        	}
        	else
        	{
        		obj.setCellProperty("head", e.cell, "text", '1');
        		strVal = "1";
        	}
        	strChkCol = Ex.util.isNvl(obj.getCellProperty("body", e.col, "text"), "");
        	strChkCol = strChkCol.split("bind:").join("");
        	// Body셋팅
        	dsObj.set_enableevent(false);
        	for (var i = 0; i < dsObj.rowcount; i++)
        	{
        		dsObj.setColumn(i, strChkCol, strVal);
        	}
        	dsObj.set_enableevent(true);
        }

        /**
        * Grid Cell Copy & Past
        * @param  {event} grid event
        * @return N/A
        * @example
        * @memberOf comLib
        */
        this._gridOnkeydown = function(obj,e)
        {

        	var iCellPos  	= obj.getCellPos();
        	var sEditType	= obj.getCellProperty("body", iCellPos, "edittype");
        	var dsObj = Eco.XComp.lookup(this,obj.binddataset);

        	// Ctrl + C
        	if (e.ctrlKey && e.keycode == 67)
        	{
        		system.clearClipboard();		
        		if(sEditType != "none")
        		{
        		  var strText = obj.getCellText(obj.selectstartrow,iCellPos);
        			  system.setClipboard("CF_TEXT", strText);
        		   return;
        		 }
        		 
        	   this._clipboardCopy(obj);
        		// Ctrl + V
        	}
        	else if (e.ctrlKey && e.keycode == 86)
        	{
        	  if(sEditType == "none"){
        	   this._clipboardPaste(obj);
        	   }
        	}
        	else if (e.ctrlKey && e.keycode == 36) //키보드home key
        	{
        	    try{
        	      
        	         dsObj.set_rowposition(0);
        	         //this[dsObj].set_rowposition(0);
        	       //3(dsObj).set_rowposition(0);
        	    }catch(e){
        	    }
        		
        	}
        	else if (e.ctrlKey && e.keycode == 35)//키보드 end key
        	{
        		try{
        		  dsObj.set_rowposition(dsObj.rowcount-1);
        		 
        	    }catch(e){
        	    }
        	}
        }

        /**
        * 엔터키 처리
        * @param  {event} grid event
        * @return N/A
        * @example
        * @memberOf comLib
        */
        this._gridOnkeyup = function(obj,e)
        {
        	if(e.keycode == 13)  //그리드 엔터키 처리
        	{
        	   var dsObj = Eco.XComp.lookup(this,obj.binddataset);
        	   var nRowCount = nexacro.toNumber(dsObj.rowcount);
        	   var nRowPostion = nexacro.toNumber(dsObj.rowposition)+1;

        	   if(nRowCount == nRowPostion)
        	   {
        		  obj.showEditor(false);
        		  obj.setCellProperty("Body", e.cell, "editautoselect", true);
        		  obj.showEditor(true);
        		   return;
        	   }
        	   this[dsObj].set_rowposition(dsObj.rowposition+1);
        	}
        }

        /**
        * form onkeydown event
        * @param  {object} objGrid       : form obj
        * @return N/A
        * @example
        *
        * @memberOf comLib
        */
        this.gfn_formObj_onkeydown = function(obj,e)
        {
            if(e.ctrlKey == true && e.keycode == 77)
        	{
        		Ex.core.popup(this,"poOrdNumSelji","frame::ERR_DEBUG.xfdl","","","","autosize=false");
        	}
        	
        	if(e.keycode == 8)
        	{
        		return false;
        	}
        }

        /**
        * commbo onedit click
        * @param  {object} objGrid       : form obj
        * @return N/A
        * @example
        *
        * @memberOf comLib
        */
        this._comboOnEditClick = function(obj,e)
        {
            obj.dropdown();
        }

        /**
        * Clipboard에 Copy된 내용을 그리드의 선택된 영역에 Paste 한다.
        * @param  {object} objGrid       : Area Select 된 Grid
        * @return N/A
        * @example
        *
        * @memberOf comLib
        */
        this._clipboardPaste = function(objGrid)
        {
        	var orgDataset = Eco.XComp.lookup(this,obj.binddataset);
        	var nSearchRow = 0;
        	var nSearchCol = 0;
        	var strColID;
        	var strValue;
        	var strEditType;
        	var strBgColor;
        	var strClipboardData = "";

        	// 숫자 자릿수 구분은 comma 를 사용하기 때문에 호환을 위해서 comma 를 제거한다.
        	try{
        	   strClipboardData = system.getClipboard("CF_TEXT").split(",").join("");
        	}catch(e){}

        	if(Eco.isEmpty(strClipboardData))
        	{
        		strClipboardData = application.gv_arrClipboard.split(",").join("");
        	}

        	// 유럽의 숫자 자릿수 구분은 space 를 사용하기 때문에 호환을 위해서 space 를 제거한다.
        	strClipboardData = strClipboardData.split(" ").join("");
        	var strClipboardRecord = strClipboardData.split("\n");
        	var strClipboardColunm;
        	var nAreaStartRow;
        	var nAreaEndRow;
        	var nAreaStartCol; 
        	var nAreaEndCol;

        	if (objGrid.selecttype == "area")
        	{
        		nAreaStartRow = objGrid.selectstartrow;
        		nAreaEndRow = objGrid.selectendrow;
        		nAreaStartCol = objGrid.selectstartcol;
        		nAreaEndCol = objGrid.selectendcol;
        	}
        	else
        	{
        		nAreaStartRow = objGrid.selectstartrow;
        		nAreaEndRow = objGrid.selectendrow;
        		nAreaStartCol = 0;
        		nAreaEndCol = objGrid.getCellCount("Body")-1;
        	}

        	for (var nRow = nAreaStartRow; nRow < (parseInt(nAreaStartRow) + parseInt(strClipboardRecord.length)); nRow++)
        	{
        		strClipboardColunm = strClipboardRecord[nSearchRow].split("	");

        		 if(strClipboardColunm.length < 2)
        		 {
        		   return;
        		 }
        		    nSearchCol = 0;
        		var nAreaCell = parseInt(nAreaStartCol) + parseInt(strClipboardColunm.length);

        		for (var nCell = nAreaStartCol; nCell < nAreaCell; nCell++)
        		{
        			strColID = objGrid.getCellProperty("body", nCell, "text").substr(5);
        			strEditType = objGrid.getCellProperty("body", nCell, "edittype");
        			strValue = strClipboardColunm[nSearchCol];

        			//에디터 타입이 none이거나 값이
        			if(!(Eco.isEmpty(strValue)))
        			{
        				orgDataset.setColumn(nRow, strColID, strValue);
        			}
        			nSearchCol++;
        		}
        		nSearchRow++;
        	}
        	return;
        }

        /**
        * 그리드 copy
        * @param  {object} objGrid       : Area Select 된 Grid
        * @return N/A
        * @example
        *
        * @memberOf comLib
        */
        this._clipboardCopy = function(objGrid)
        {
        	 if(nexacro.Browser != "IE" && nexacro.Browser != "Runtime")
        	   {
        		  Ex.core.showMsg(this,"alert","_clipboardCopy","해당 기능은 인터넷 익스플로러만 지원합니다.","","default","","this.gfn_callBackMsg");
        		  return;
        	   }
        	   
        	var orgDataset = Eco.XComp.lookup(this,obj.binddataset);
        	var strColID;
        	var strValue;
        	    strClipboard = "";
        	var nAreaStartRow;
        	var nAreaEndRow;
        	var nAreaStartCol;
        	var nAreaEndCol;

        	if (objGrid.selecttype == "area" || objGrid.selecttype == "cell")
        	{
        		nAreaStartRow = objGrid.selectstartrow;
        		nAreaEndRow = objGrid.selectendrow;
        		nAreaStartCol = objGrid.selectstartcol;
        		nAreaEndCol = objGrid.selectendcol;
        	}
        	else
        	{
        		nAreaStartRow = objGrid.selectstartrow;
        		nAreaEndRow = objGrid.selectendrow;
        		nAreaStartCol = 0;
        		nAreaEndCol = objGrid.getCellCount("Body")-1;
        	}

        	for (var nRow = nAreaStartRow; nRow <= nAreaEndRow; nRow++)
        	{
        		for (var nCell = nAreaStartCol; nCell <= nAreaEndCol; nCell++)
        		{
        			strColID = objGrid.getCellProperty("body", nCell, "text");
        			strValue = Ex.util.isReplaceEmpty(orgDataset.getColumn(nRow, strColID.substr(5)));
        			strClipboard = strClipboard + strValue + "	";
        		}

        		strClipboard = strClipboard.substr(0, strClipboard.length - 1);
        		strClipboard = strClipboard + "\n";
        	}

        	strClipboard = strClipboard.substr(0, strClipboard.length - 1);
        	system.setClipboard("CF_TEXT", strClipboard);
        	application.gv_arrClipboard = strClipboard;
        	return;
        }

        /**
        * 네비게이션 버튼 클릭시 발생되는 event
        * @param  {object} objGrid       : Area Select 된 Grid
        * @return N/A
        * @example
        *
        * @memberOf comLib
        */
        this.gfn_grdNavi_onclick = function(obj,e)
        {
          if(!Eco.isEmpty(obj._find))
          {		
        	 if(!Eco.isEmpty(eval(obj._find)))
        	 {
        		this.gfn_findPopup(eval(obj._find));
        	 }
          }
          else if(!Eco.isEmpty(obj._excel))
          {
        	if(!Eco.isEmpty(eval(obj._excel))){
        	
        		this.gfn_exportExcel_with_image(obj._excel);
        	}
          }
          else if(!Eco.isEmpty(obj._format))
           {
        	 this._format = obj._format;
        	 this.gfn_saveGrdFormat();   //save gridformat
           }
        }

        /**
        * 검색용 팝업
        * @param {object} this
        * @return N/A
        * @example
        * @memberOf comLib
        */ 
        this.gfn_findPopup = function(obj)
        {
        	var oArg = {pGrid:obj};
        	Ex.core.popup(this,"_pdp_findPopupdiv","frame::findPopup.xfdl",oArg,"");
        }

        /**
        * 공통 조회 버튼 제어
        * @param {object} this
        * @return N/A
        * @example
        * @memberOf comLib
        */ 
        this.gfn_search= function()
        {
        	this.fn_search();
        }

        /**
        * Callback Function 에서 공통적으로 처리
        * @param {string} Message
        * @return 없음
        * @example
        * @memberOf comLib
        */
        this.gfn_callBackAfter = function (msgType,svcId,msg,ds)
        {
        	switch(msgType) {
        		case "ERROR" :
        			this.alert("ERROR");
        			break;
        		case "SELECT":
        			this.alert(svcId + " : SELECT SUCCESS");
        			break;
        		case "SAVE"  :
        			this.alert(svcId + " : SAVE SUCCESS");
        			break;
        	}
        }

        /*
         * 함수명  	: gfn_getLinkParam
         * 설명 		: 페이지 링크 시 전달된 파라미터 문자열을 반환한다.
         * params  		: pageUrl 페이지 URL
         * return Type 	: String 문자열
         * 사용법		: this.gfn_getLinkParam(pageUrl);
         */
        this.gfn_getLinkParam = function(pageUrl){
            var strExpr = "PAGE_URL=='" + pageUrl + "'";
            var nRow = application.gds_mdiParam.findRowExpr(strExpr);
            return application.gds_mdiParam.getColumn(nRow, "param");
        }

        /**
        	 * Map 또는 Array<Map>형태의 transaction call
        	 * Dataset의 값을 갱신하기위한 서비스를 호출하고, 작업이 완료되면 콜백함수을 수행하는 메소드.
        	 * sInDatasets 값이 기존에는 String("input1=DS_NAME")형태이나 Map 또는 Array<Map>형태의 값을 받아
        	 * Dataset을 구성하고 최종적으로 Ex.core.tran Method를 호출을 위한 String("input1=DS_NAME")형태로 
        	 * 구성하여 호출한다.
        	 * @param strSvcId
        	 * @param sController
        	 * @param oInDatasets
        	 * @param sOutDatasets
        	 * @param sArgs
        	 * @param callBack
        	 */
        this.gfn_mapTran = function(strSvcId,sController,oInDatasets,sOutDatasets,sArgs,callBack,bProgress){

        		var isNullSvcId = this.comUtils.isNullEmpty(strSvcId);
        		var isNullCtrlId = this.comUtils.isNullEmpty(sController);
        		var isNullOutDs = this.comUtils.isNullEmpty(sOutDatasets);
        		
        		if(isNullSvcId || isNullCtrlId){// || isNullOutDs){
        		
        			//var nullMsg = isNullSvcId ? "Service ID" : ( isNullCtrlId ? "Transaction 요청 경로" : (isNullOutDs ? "Out Datasets 명" : "요청"));
        			var nullMsg = isNullSvcId ? "Service ID" : ( isNullCtrlId ? "Transaction 요청 경로" : "요청");
        			nullMsg += " 정보가 없습니다.";
        			alert(nullMsg);
        			
        			return false;
        		}
        		
        		// 전달 데이터셋 정보
        		var sInDataType = typeof(oInDatasets);
        		var sendDs = null;
        		var sInDatasets = "";
        		if(sInDataType == "object"){
        			// Tran 정보(Dataset) 설정
        			sInDatasets = this.gfn_setDynamicInDataset(oInDatasets);
        		}else{
        			if(oInDatasets.indexOf("=") == -1){
        				var inDsArr = oInDatasets.split(" ");
        				var inDsArrLeng = inDsArr.length;
        				if(inDsArrLeng > 1){
        					for(var i = 0; i < inDsArrLeng; i++){
        						sInDatasets += "input" + (i+1) + "=" + inDsArr[i];
        						if(i != (i-1)){
        							sInDatasets += " ";
        						}
        					}
        				}else{
        					sInDatasets = "input1=" + oInDatasets;
        				}
        			}else{
        				sInDatasets = oInDatasets;
        			}
        		}
        	
        		// Tran 요청
        		Ex.core.tran(this, strSvcId, sController, sInDatasets, sOutDatasets, sArgs, callBack, bProgress);
        	}
        	
        	
        	/*
         * 함수명  	: gfn_electroSactnCompleted
         * 설명 		: 전자결재완결 문서 조회
         * params  		: None
         * return Type 	: None
         * 사용법		: this.gfn_electroSactnCompleted(sanctnNo, empno)
         */
        this.gfn_electroSactnCompleted = function(sanctnNo,empno){
           
            var sSvcID        	= "CompletedElectroSaction";
        	var sController   	= "hsco/cmm/sanc/SanctionCompletedUrl.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "gds_sanctnCompleted=output1";
        	var sArgs = "EMPNO=" + application.gv_empno + " SANCTN_NO=" + sanctnNo + "";
            Ex.core.tran(this, sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "_electroSactnCompleted");
        }

        // CallBack Function
        this._electroSactnCompleted = function (sid,errNo,errMsg)
        {
            if(errNo < 0)
        	{
                if(application.gds_sanctnCompleted.getRowCount() == 0){
                    this.gfn_message("info.전자결재.완료.조회실패"); // 결재완료 문서를 조회하지 못하였습니다.\n관리자에게 문의하십시오.
                }
        	} else {
        	    if(application.gds_sanctnCompleted.getRowCount()> 0){
                    var esDocUrl = application.gds_sanctnCompleted.getColumn(0, "ES_URL");
                    system.execBrowser(esDocUrl);
                } 
        	}
        }

        this.gfn_initBrowswer = function(strurl){

            system.execBrowser(strurl);
            
        }

        // 전자결재종류 이미지 경로 리턴 함수
        this.gfn_getSanctnImgUrl = function (sanctnKnd)
        {
        	if(this.comUtils.isNullEmpty(sanctnKnd)) {
        		sanctnKnd = '0';
        	}
        	return 'theme://images/sanctn/S'+sanctnKnd+'.png';
        }
        
        });


    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
