﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SYM110100_P01");this.set_classname("Guide_10");this.set_titletext("메신저 알리미");this.set_dragscrolltype("none");this._setFormPosition(0,0,800,500);}this.style.set_background("#ffffffff");_a=new Dataset("form_url",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FORM_URL\">com::SYM110100_P01.xfdl</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_messngr</Col><Col id=\"colId\">RCVER_USER_ID</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">수신자ID</Col></Row><Row><Col id=\"compId\">ds_messngr</Col><Col id=\"colId\">NTCN_SJ</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">알림제목</Col></Row><Row><Col id=\"compId\">ds_messngr</Col><Col id=\"colId\">NTCN_CN</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">알림내용</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_messngr",this);_a._setContents("<ColumnInfo><Column id=\"SNDNG_DTLS_SN\" type=\"BIGDECIMAL\" size=\"20\"/><Column id=\"SNDNG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RCVER_USER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"RCVER_USER_NM\" type=\"STRING\" size=\"30\"/><Column id=\"SENDER_USER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"SENDER_USER_NM\" type=\"STRING\" size=\"30\"/><Column id=\"NTCN_SJ\" type=\"STRING\" size=\"200\"/><Column id=\"LINK_ADRES\" type=\"STRING\" size=\"200\"/><Column id=\"NTCN_CN\" type=\"STRING\" size=\"1000\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_empList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"8\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_messngrList",this);_a._setContents("<ColumnInfo><Column id=\"SNDNG_DTLS_SN\" type=\"BIGDECIMAL\" size=\"20\"/><Column id=\"SNDNG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RCVER_USER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"RCVER_USER_NM\" type=\"STRING\" size=\"30\"/><Column id=\"SENDER_USER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"SENDER_USER_NM\" type=\"STRING\" size=\"30\"/><Column id=\"NTCN_SJ\" type=\"STRING\" size=\"200\"/><Column id=\"LINK_ADRES\" type=\"STRING\" size=\"200\"/><Column id=\"NTCN_CN\" type=\"STRING\" size=\"1000\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static13","absolute","399","125","383","27",null,null,this);_a.set_taborder("23");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","0","800","500",null,null,this);_a.set_taborder("0");_a.set_cssclass("sta_WF_PopupBg");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","2","15",null,null,"8",this);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"5","15",null,"0","5",this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","2","0",null,"15","18",null,this);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","2",null,"692","15",null,"0",this);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","15","19","197","21",null,null,this);_a.set_taborder("5");_a.set_cssclass("sta_WF_Title01");_a.set_text("메신저알리미");this.addChild(_a.name,_a);_a=new Static("Static15","absolute","317","73","465","27",null,null,this);_a.set_taborder("9");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","15","42","665","5",null,null,this);_a.set_taborder("10");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static37","absolute","328","47","454","27",null,null,this);_a.set_taborder("11");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Edit("edt_usernm","absolute","411","50","124","21",null,null,this);_a.set_taborder("12");_a.set_readonly("false");_a.set_maxlength("12");this.addChild(_a.name,_a);_a=new Edit("edt_userid","absolute","650","50","129","21",null,null,this);_a.set_taborder("13");_a.set_maxlength("30");this.addChild(_a.name,_a);_a=new Button("btn_save","absolute",null,"15","50","25","70",null,this);_a.set_taborder("14");_a.set_cssclass("btn_WF_CRUD");_a.set_text("전송");this.addChild(_a.name,_a);_a=new Static("Static17","absolute","538","47","110","27",null,null,this);_a.set_taborder("15");_a.set_cssclass("sta_WF_Label");_a.set_text("수신자사번");this.addChild(_a.name,_a);_a=new Edit("edt_usernm2","absolute","51.38%","76","124","21",null,null,this);_a.set_taborder("16");_a.set_readonly("true");_a.set_maxlength("12");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","67.25%","73","110","27",null,null,this);_a.set_taborder("17");_a.set_text("발신자사번");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Edit("edt_userid2","absolute","81.25%","76","129","21",null,null,this);_a.set_taborder("18");_a.set_maxlength("30");_a.set_readonly("true");this.addChild(_a.name,_a);_a=new Static("Static07","absolute","50%","99",null,"27","2.25%",null,this);_a.set_taborder("19");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Edit("edt_ntcnSj","absolute","411","128","368","21",null,null,this);_a.set_taborder("20");this.addChild(_a.name,_a);_a=new Edit("edt_ntcnAdres","absolute","411","102","368","21",null,null,this);_a.set_taborder("24");_a.set_inputtype("number,english,symbol");this.addChild(_a.name,_a);_a=new Static("Static16","absolute","400","151","382","140",null,null,this);_a.set_taborder("26");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new TextArea("txt_ntcnCn","absolute","411","154","368","134",null,null,this);_a.set_taborder("21");_a.set_wordwrap("char");_a.set_scrollbars("autovert");this.addChild(_a.name,_a);_a=new Static("Static14","absolute","37.38%","151","110","140",null,null,this);_a.set_taborder("25");_a.set_text("알림 내용");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static10","absolute","37.38%","99","110","27",null,null,this);_a.set_taborder("22");_a.set_text("링크주소");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static11","absolute","299","125","110","27",null,null,this);_a.set_taborder("6");_a.set_text("제목");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","299","73","110","27",null,null,this);_a.set_taborder("7");_a.set_text("발신자명");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","299","47","110","27",null,null,this);_a.set_taborder("8");_a.set_text("수신자명");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Button("btn_close","absolute",null,"15","50","25","17",null,this);_a.set_taborder("27");_a.set_text("닫기");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Grid("grd_EMPL_CODE","absolute","15","47","274",null,null,"15",this);_a.set_taborder("28");_a.set_binddataset("ds_empList");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"126\"/><Column size=\"71\"/><Column size=\"75\"/></Columns><Rows><Row size=\"22\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"부서명\"/><Cell col=\"1\" text=\"사원번호\"/><Cell col=\"2\" text=\"사원명\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" text=\"bind:DEPT_NAME\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:EMPNO\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:EMPNM\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_title00","absolute","299","292","197","21",null,null,this);_a.set_taborder("29");_a.set_text("알리미내역");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Grid("grd_messngrlist","absolute","299","312","483",null,null,"15",this);_a.set_taborder("30");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a.set_autofittype("none");_a.set_binddataset("ds_messngrList");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"111\"/><Column size=\"71\"/><Column size=\"75\"/><Column size=\"221\"/><Column size=\"255\"/><Column size=\"258\"/></Columns><Rows><Row size=\"22\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"발송일시\"/><Cell col=\"1\" text=\"수신자명\"/><Cell col=\"2\" text=\"수신사번\"/><Cell col=\"3\" text=\"알림제목\"/><Cell col=\"4\" text=\"알림내용\"/><Cell col=\"5\" text=\"링크주소\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" text=\"bind:SNDNG_DT\" mask=\"####-##-##-##:##\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:RCVER_USER_NM\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:RCVER_USER_ID\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:NTCN_SJ\"/><Cell col=\"4\" text=\"bind:NTCN_CN\"/><Cell col=\"5\" text=\"bind:LINK_ADRES\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",800,500,this,function(_b){_b.set_classname("Guide_10");_b.set_titletext("메신저 알리미");_b.set_dragscrolltype("none");_b.style.set_background("#ffffffff");});this.addLayout(_a.name,_a);_a=new BindItem("item0","edt_usernm","value","ds_messngr","RCVER_USER_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","edt_userid","value","ds_messngr","RCVER_USER_ID");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","edt_ntcnSj","value","ds_messngr","NTCN_SJ");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","edt_ntcnAdres","value","ds_messngr","LINK_ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","txt_ntcnCn","value","ds_messngr","NTCN_CN");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("COM110100_P01.xfdl","lib::comInclude.xjs");this.registerScript("COM110100_P01.xfdl",function(){this.fv_objForm;this.formUrl;var _a=this.gfn_getUserId();var _b=this.gfn_getUserName();var _c=this.gfn_getDeptId();var _d=this.gfn_getDeptName();this.SYM110100_P01_oninit=function(_e,_f){this.fn_init_form();this.fn_init_dataset();};this.SYM110100_P01_onload=function(_e,_f){this.edt_userid2.set_value(_a);this.edt_usernm2.set_value(_b);this.fn_search();};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){this.ds_empList.clearData();this.ds_cond00.clearData();this.ds_cond00.addRow();this.ds_cond00.setColumn(0,"EMPNM","");this.ds_cond00.setColumn(0,"EMPNO","");this.ds_cond00.setColumn(0,"EMPNO2",_a);this.fn_transaction("selectempList");};this.fn_transaction=function(_e){switch(_e){case "selectempList":var _f="/hsco/com/sym/msm/SYM110100/selectempList.do";var _g="input1=ds_cond00";var _h="ds_empList=output1 ds_messngrList=output2";break;case "saveNtcnSndngList":var _f="/hsco/com/sym/msm/SYM110100/NtcnSndngCUD.do";var _g="input1=ds_messngr:U";var _h="";break;}Ex.core.tran(this,_e,_f,_g,_h);};this.fn_callBack=function(_e,_f,_g){if(_f!=0){this.gfn_callback_message(_e,_f,_g);}else{switch(_e){case "selectempList":break;case "saveNtcnSndngList":this.alert("전송완료되었습니다.");this.ds_messngr.clearData();this.fn_search();break;}}};this.grd_messngrlist_oncellclick=function(_e,_f){this.gfn_gridSort(_e,_f);};this.grd_EMPL_CODE_oncelldblclick=function(_e,_f){this.ds_messngr.clearData();var _g=this.ds_empList.rowposition;var _h=this.ds_messngr.addRow();this.ds_messngr.setColumn(_h,"RCVER_USER_ID",this.ds_empList.getColumn(_g,"EMPNO"));this.ds_messngr.setColumn(_h,"RCVER_USER_NM",this.ds_empList.getColumn(_g,"EMPNM"));this.ds_messngr.setColumn(_h,"SENDER_USER_ID",_a);this.ds_messngr.setColumn(_h,"SENDER_USER_NM",_b);var _i=this.edt_ntcnSj.setFocus(true);};this.btn_save_onclick=function(_e,_f){if(this.ds_messngr.rowcount==1){if(!this.gfn_checkValidation(this.ds_messngr,this.ds_validation)){return;}if(this.confirm("발송하시겠습니까?")){this.fn_transaction("saveNtcnSndngList");}}};});this.on_initEvent=function(){this.addEventHandler("oninit",this.SYM110100_P01_oninit,this);this.addEventHandler("onload",this.SYM110100_P01_onload,this);this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);this.grd_EMPL_CODE.addEventHandler("oncelldblclick",this.grd_EMPL_CODE_oncelldblclick,this);this.grd_messngrlist.addEventHandler("oncellclick",this.grd_messngrlist_oncellclick,this);};this.loadIncludeScript("COM110100_P01.xfdl");};})();