/**
 * @namespace
 * @name login javascript
 * @author Tobesoft w.s.jeong
 * @memberof!  <global>
 */

var amountLoaded = 0;

var ifrContentsTimer;
var isIframe= false;
/**
 * 브라우저 onload 수행
 * @return
 * @example
 * @memberOf public
 */
function onLoad() {
   var host = window.location.host;
   var ieVer = getBrowserType();
   var objId = document.getElementById("JOB_EMPLYR_ID");
   var objPw = document.getElementById("PASSWORD");
   var remeber = document.getElementById("remember_me");

   if(host.indexOf("localhost") != -1)
   {
	   window.document.title = "[" + host + "]" + window.document.title;
   }
   
   var objId = document.getElementById("id");
    //     objId.focus();
   document.getElementById('nexacro_main').focus();
    //document.all.delay.style.display = "";  //프로그레스바 이미지 처리
   
     if(isBrowser() == "Ie" && ieVer < 10 )
     {
      //다른패이지 이동
        alert("In the current browser you are using is not properly use the nexacroplatform system.The optimal environment is working properly in Internet Explorer 10 or higher.");
         window.location.href="http://windows.microsoft.com/ko-kr/internet-explorer/download-ie";
        return;
     }

    // JOB_EMPLYR_ID 쿠키에서 id 값을 가져온다.
    var cook = document.cookie + ";";
    var idx = cook.indexOf("JOB_EMPLYR_ID", 0);
    var val = "";

    if(idx != -1)
    {
        cook = cook.substring(idx, cook.length);
        begin = cook.indexOf("=", 0) + 1;
        end = cook.indexOf(";", begin);
        val =  cook.substring(begin, end);

    }

    if(!window.localStorage) 
    {
    	 // 가져온 쿠키값이 있으면
        if(val != "")
        {
           objId.value = val;
            remeber.checked = true;
            objPw.focus();
        }
        else
        {
        	objId.focus();
        }
    
    }else{
    	
    	

    	if(localStorage.getItem("JOB_EMPLYR_ID") == '' || localStorage.getItem("JOB_EMPLYR_ID") == null)
    	{
    		remeber.checked = false;
    		objId.focus();
    	}	
    	else
    	{
    	 	objId.value = localStorage.getItem("JOB_EMPLYR_ID");
    		remeber.checked = true;
    		 objPw.focus();
    	}	
    	
      
    }
   

}

if ( window.addEventListener ) {
    window.addEventListener( "load", onLoad, false );  //w3c dom 지원 브라우저
}
else if ( window.attachEvent ) {
    window.attachEvent( "onload", onLoad ); // w3c do m 지원 브라우저 외(ex:msdom 지원 브라우저 ie)
} else if ( window.onLoad ) {
    window.onload = onLoad;
}




/**
 * frame에 onload 처리시
 * @return
 * @example
 * @memberOf public
 */
function iframeOnload()
{

	isIframe= true;
}


/**
 * 브라우저 체크
 * @return msie8.0
 * @example
 * @memberOf public
 */
function isBrowser()
{
    var agt = navigator.userAgent.toLowerCase();

    if (agt.indexOf("chrome") != -1) return 'Chrome';
    if (agt.indexOf("opera") != -1) return 'Opera';
    if (agt.indexOf("staroffice") != -1) return 'Star Office';
    if (agt.indexOf("webtv") != -1) return 'WebTV';
    if (agt.indexOf("beonex") != -1) return 'Beonex';
    if (agt.indexOf("chimera") != -1) return 'Chimera';
    if (agt.indexOf("netpositive") != -1) return 'NetPositive';
    if (agt.indexOf("phoenix") != -1) return 'Phoenix';
    if (agt.indexOf("firefox") != -1) return 'Firefox';
    if (agt.indexOf("safari") != -1) return 'Safari';
    if (agt.indexOf("skipstone") != -1) return 'SkipStone';
    if (agt.indexOf("trident") != -1) return 'Ie';
    if (agt.indexOf("netscape") != -1) return 'Netscape';
    if (agt.indexOf("mozilla/5.0") != -1) return 'Mozilla';

}

/**
 * IE버젼체크
 * @return msie8.0
 * @example
 * @memberOf public
 */
function getBrowserType(){
    
    var _ua = navigator.userAgent;
    var rv = -1;
     
    //IE 11,10,9,8
    var trident = _ua.match(/Trident\/(\d.\d)/i);
    if( trident != null )
    {
        if( trident[1] == "7.0" ) return rv = 11;
        if( trident[1] == "6.0" ) return rv = 10;
        if( trident[1] == "5.0" ) return rv = 9;
        if( trident[1] == "4.0" ) return rv =8;
    }
     
    //IE 7...
    if( navigator.appName == 'Microsoft Internet Explorer' ) return rv = 7;
  
}



/**
 *로그인 버튼 클릭시 발생되는 event
 * @return
 * @example
 * @memberOf public
 */
function login_onclick(){
/**
    var objId = document.getElementById("id");
    var objPw = document.getElementById("pw");
    var remeber = document.getElementById("remember_me").checked;
    var strId = objId.value.toString();
    var strPw = objPw.value.toString();

    if(remeber)
    {
        saveLogin(strId);  //쿠키저장
    }
    else
    {
        saveLogin("");  //쿠키저장
    }

    if(strId == null || strId == ""){
        alert("Please enter Login ID");
        objId.focus();
        return;
    }

    if(strPw == null || strPw == ""){

        alert("Please enter Login Password");
        objPw.focus();
        return;
    }
    sessionStorage.setItem("id" ,strId);  //id 저장
    sessionStorage.setItem("pw" ,strPw); //pw 저장
    sessionStorage.setItem("prj" ,"login"); //prjcode 저장

    ifrContentsTimer = setInterval('mainLoad()',100);

    //progressBarSim(amountLoaded);
   // loading();
*/
	//로그인 
	
	    $("#login").ajaxSubmit({
	        contentType : "application/x-www-form-urlencoded;charset=UTF-8",        
	        url         : "/hsco/cmm/login/imsiLogin.do",
	        target      : "",
	        type        : "post",                       
	        dataType    : "json",           
	        success     : function(rstData, status){
	                        // alert("값보고 싶을경우 :"+ JSON.stringify(rstData));
	                        if(status == "success"){
	                            if(rstData.sProcCd == "ID_NO_DATA_FOUND"){
	                                alert("<spring:message code='info.nodata.id'/>");   // 해당 아이디가 존재하지 않습니다.
	                            }else if(rstData.sProcCd == "PW_NO_DATA_FOUND"){
	                                alert("<spring:message code='info.match.pwd'/>");   // 아이디 또는 비밀번호가 일치하지 않습니다.\n다시 입력하여 주십시요.
	                            }else if(rstData.sProcCd == "LOGIN_CHECK_OK"){
	                                alert("인증성공!");  
	                                fnLoginResult(rstData);
	                                mainLoad();
	                            }else{
	                                alert("<spring:message code='info.login.fail'/>");  // 로그인에 실패하였습니다.                    
	                            }                   
	                        }else{
	                            alert("<spring:message code='err.comn.conn'/>");        // 서버와 통신중 오류가 발생하였습니다.
	                        }           
	                    },
	        error      : function(){
	                        alert("<spring:message code='err.comn.conn'/>");            // 서버와 통신중 오류가 발생하였습니다. 
	                    }
	    }); 
	
}

function fnLoginResult(rstData){
	//var sUrl = $("#returnPageUrl").val();
	//alert("값보고 싶을경우 :"+ JSON.stringify(rstData));
	//id 
	var jobEmplyrId = rstData.lgn.job_EMPLYR_ID;
	var authorGroupId = rstData.lgn.author_GROUP_ID;
	
	
	if(rstData.lgn){
		var today = new Date(); 
		var sPwdChgDte = rstData.lgn.password_CHG_DE;
		//alert(sPwdChgDte);
	    //var dateObj = new Date(sPwdChgDte.substr(0,4),parseInt(sPwdChgDte.substr(4,2))-1,sPwdChgDte.substr(6,2));  
	    //var betweenDay = (today.getTime() - dateObj.getTime())/1000/60/60/24;
	    //var nChgPwdPeriod = parseInt("<spring:message code='rule.chg.pwd.period' />");
		if(rstData.lgn.PASSWORD_CHG_AT == 'Y'){
			//alert("<spring:message code='info.need.chg.pwd' />"); //비밀번호를 변경해 주십시오.
			//sUrl = "/nsbms/mng/mbrNfvnzMng/myPage/mbrInfoChg/mbrInfoChgUP.do";
		} else if(betweenDay >  nChgPwdPeriod){
			//alert("<spring:message code='info.rule.check.period' arguments='"+nChgPwdPeriod+"' />"); //비밀번호 변경일 {0}을 경과 하였습니다.\\n비밀번호를 변경해 주십시오.
			//sUrl = "/nsbms/hmp/mbr/mbr/mbrInfoUP.do";
		}else{
			//alert(jobEmplyrId);
			//alert(authorGroupId);
			
			sessionStorage.setItem("id" ,jobEmplyrId);  //id 저장
			sessionStorage.setItem("authorGroupId" ,authorGroupId);  //id 저장
			//sessionStorage.setItem("id" ,rstData.lgn.job_EMPLYR_ID);  //id 저장
		    //sessionStorage.setItem("pw" ,strPw); //pw 저장
		    //sessionStorage.setItem("prj" ,"login"); //prjcode 저장

			//sUrl = "/nsbms/mng/mngMain/mngMain/mngMainRP.do"
		//}
	}
	//window.location.href = sUrl;
}

/**
 *nexacro frame load
 * @return
 * @example
 * @memberOf public
 */
function mainLoad()
{

      if(isIframe)
      {  
    	//  document.getElementById("login").style.display = "none";  
    //	  document.getElementById("bglogo").style.display = "none";//로그인 폼 비활성화
    	  document.getElementById("login").style.display = "none"; 
    	  document.getElementById("delay").style.display = "none";  //프레그레스바 이미지 비활성화
    	  //document.getElementById("divLogin").style.display = "none";  
    	 // document.getElementById("bottom").style.display = "none";  
    	  
    	  document.body.style.background = " url('');";   //background color 변경
    	//  document.body.style.background = "#FFFFFF";   //background color 변경
    	  document.getElementById("nexacro_main").style.width = "100%";  //iframe size
          document.getElementById("nexacro_main").style.height = "100%";  //iframe size
          
          clearInterval(ifrContentsTimer);  //timer 종료

          document.getElementById('nexacro_main').focus();
          document.getElementById('nexacro_main').contentWindow.oninitframework();   //넥사크로 로드
      }
      else
      {
    	  
    	 document.getElementById("delay").style.display = "block";  //프레그레스바 이미지 활성화

      }

}

/**
 *로그인 onkeycown
 * @return
 * @example
 * @memberOf public
 */
function login_onkeydown(){

	// 엔터키의 코드는 13입니다.
    if(event.keyCode == 13){
   	 var objPw = document.getElementById("pw");
     objPw.focus();
    	
        return;
    }

}

function psw_onkeydown()
{
	 // 엔터키의 코드는 13입니다.
    if(event.keyCode == 13){
    	login_onclick();
        return;
    }
}

/**
 *체크박스 event
 * @return
 * @example
 * @memberOf public
 */
function calc(checkbox)
{
}

/**
 *쿠키저장
 * @return
 * @example
 * @memberOf public
 */
function setsave(name, value, expiredays)
{
	if(!window.localStorage) {
		var today = new Date();
		    today.setDate( today.getDate() + expiredays );
		    document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + today.toGMTString() + ";"  
		
		// document.write('이 Browser 는 Local Storage 를 지원하지 않습니다.');
		} else {
			
			if(expiredays == -1)
			{
				
				localStorage.setItem("JOB_EMPLYR_ID", "");
			}
			else
			{
				
				localStorage.setItem("JOB_EMPLYR_ID", value);
			}	
			
		}
}
	//var today = new Date();
   // today.setDate( today.getDate() + expiredays );
   // document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + today.toGMTString() + ";"
}

/**
 *쿠키ID저장
 * @return
 * @example
 * @memberOf public
 */
function saveLogin(id)
{
    if(id != "")
    {
        // JOB_EMPLYR_ID local storage save
    	//쿠키에 id 값을 7일간 저장
        setsave("JOB_EMPLYR_ID", id, 7);
    }else{
        // JOB_EMPLYR_ID 쿠키 삭제
        setsave("JOB_EMPLYR_ID", id, -1);
    }
}

