﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM090207");this.set_classname("HRM090207");this.set_titletext("공고대장");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_pblancList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PBLANC_DE\" type=\"STRING\" size=\"256\"/><Column id=\"PBLANC_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"PBLANC_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"PBLANC_SJ\" type=\"STRING\" size=\"256\"/><Column id=\"PBLANC_OFFIC\" type=\"STRING\" size=\"256\"/><Column id=\"PBLANC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNFIRM_AT\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_STS\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BGN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_pblancList</Col><Col id=\"colId\">EMPNO</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">기안자</Col></Row><Row><Col id=\"compId\">ds_pblancList</Col><Col id=\"colId\">PBLANC_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">공고일자</Col></Row><Row><Col id=\"compId\">ds_pblancList</Col><Col id=\"colId\">PBLANC_SJ</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">공고제목</Col></Row><Row><Col id=\"compId\">ds_pblancList</Col><Col id=\"colId\">PBLANC_BGNDE</Col><Col id=\"from\"/><Col id=\"msgId\">공고시작일자</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">PBLANC_ENDDE</Col><Col id=\"compId\">ds_pblancList</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">공고종료일자</Col></Row><Row><Col id=\"compId\">ds_pblancList</Col><Col id=\"colId\">PBLANC_ENDDE</Col><Col id=\"from\">PBLANC_BGNDE</Col><Col id=\"msgId\">공고종료일자^공고시작일자</Col></Row><Row><Col id=\"colId\">PBLANC_OFFIC</Col><Col id=\"notNull\">Y</Col><Col id=\"compId\">ds_pblancList</Col><Col id=\"msgId\">공고처</Col></Row><Row><Col id=\"colId\">BGN_DE</Col><Col id=\"compId\">ds_cond</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조회시작일자</Col></Row><Row><Col id=\"colId\">END_DE</Col><Col id=\"compId\">ds_cond</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조회종료일자</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">END_DE</Col><Col id=\"msgId\">조회종료일자^조회시작일자</Col><Col id=\"from\">BGN_DE</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute",null,"0","15","735","13",null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_registDe","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("2");_a.set_text("공고일자");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_bgnDe","absolute","79","5","120","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a.style.set_align("center middle");_a=new Static("Static00","absolute","204","5","12","21",null,null,this.div_search);_a.set_taborder("3");_a.set_text("~");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_endDe","absolute","219","5","120","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a.style.set_align("center middle");_a=new Static("sta_searchDept","absolute","354","5","64","21",null,null,this.div_search);_a.set_taborder("4");_a.set_text("기안부서");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_DEPT","absolute","418","5","195","21",null,null,this.div_search);_a.set_taborder("5");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("sta_applcnt","absolute","628","5","51","21",null,null,this.div_search);_a.set_taborder("6");_a.set_text("기안자");_a.set_cssclass("sta_WFSA_Label");_a.set_visible("true");this.div_search.addChild(_a.name,_a);_a=new Div("div_EMP","absolute","679","5","166","21",null,null,this.div_search);_a.set_taborder("7");_a.set_visible("true");_a.set_async("false");_a.set_url("com::empno.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","613","0","15","33",null,null,this.div_search);_a.set_taborder("8");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_pblancList","absolute","0","42","150","19",null,null,this);_a.set_taborder("4");_a.set_text("공고 등록내역");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Grid("grd_pblancList","absolute","0","62",null,null,"28","0",this);_a.set_taborder("5");_a.set_binddataset("ds_pblancList");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"50\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"450\"/><Column size=\"110\"/><Column size=\"30\"/><Column size=\"110\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"확인\"/><Cell col=\"1\" rowspan=\"2\" text=\"No\"/><Cell col=\"2\" colspan=\"2\" style=\"background:URL('theme://images/grd_WF_HeadEssential.png') left top;\" text=\"공고자\"/><Cell col=\"4\" rowspan=\"2\" text=\"공고번호\"/><Cell col=\"5\" rowspan=\"2\" style=\"background:URL('theme://images/grd_WF_HeadEssential.png') left top;\" text=\"공고일자\"/><Cell col=\"6\" rowspan=\"2\" style=\"background:URL('theme://images/grd_WF_HeadEssential.png') left top;\" text=\"공고제목\"/><Cell col=\"7\" rowspan=\"2\" colspan=\"3\" style=\"background:URL('theme://images/grd_WF_HeadEssential.png') left top;\" text=\"공고기간\"/><Cell col=\"10\" rowspan=\"2\" style=\"background:URL('theme://images/grd_WF_HeadEssential.png') left top;\" text=\"공고처\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"2\" text=\"부서\"/><Cell row=\"1\" col=\"3\" text=\"성명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CNFIRM_AT\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" edittype=\"none\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:DEPT_NM\"/><Cell col=\"3\" edittype=\"none\" style=\"align: ;\" text=\"bind:EMPNM\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'show' : 'hide'\"/><Cell col=\"4\" text=\"bind:PBLANC_NO\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"expr:CNFIRM_AT == '1' ? 'none' : 'date'\" text=\"bind:PBLANC_DE\" calendardisplay=\"expr:CNFIRM_AT == '1' ? 'edit' : 'display'\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" edittype=\"expr:CNFIRM_AT == '1' ? 'none' : 'normal'\" style=\"align:left middle;\" text=\"bind:PBLANC_SJ\" editlimit=\"1000\" editdisplay=\"expr:CNFIRM_AT == '1' ? 'edit' : 'display'\" editlengthunit=\"ascii\"/><Cell col=\"7\" displaytype=\"date\" edittype=\"expr:CNFIRM_AT == '1' ? 'none' : 'date'\" text=\"bind:PBLANC_BGNDE\" calendardisplay=\"expr:CNFIRM_AT == '1' ? 'edit' : 'display'\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" text=\"~\"/><Cell col=\"9\" displaytype=\"date\" edittype=\"expr:CNFIRM_AT == '1' ? 'none' : 'date'\" text=\"bind:PBLANC_ENDDE\" calendardisplay=\"expr:CNFIRM_AT == '1' ? 'edit' : 'display'\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" edittype=\"expr:CNFIRM_AT == '1' ? 'none' : 'normal'\" style=\"align:left middle;\" text=\"bind:PBLANC_OFFIC\" editlimit=\"100\" editdisplay=\"expr:CNFIRM_AT == '1' ? 'edit' : 'display'\" editlengthunit=\"ascii\"/></Band></Format><Format id=\"default_copy\"><Columns><Column size=\"0\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"450\"/><Column size=\"90\"/><Column size=\"30\"/><Column size=\"90\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"확인\"/><Cell col=\"1\" rowspan=\"2\" text=\"결재상태\"/><Cell col=\"2\" rowspan=\"2\" text=\"확인\"/><Cell col=\"3\" colspan=\"2\" style=\"background:URL('theme://images/grd_WF_HeadEssential.png') left top;\" text=\"기안자\"/><Cell col=\"5\" rowspan=\"2\" text=\"공고번호\"/><Cell col=\"6\" rowspan=\"2\" style=\"background:URL('theme://images/grd_WF_HeadEssential.png') left top;\" text=\"공고일자\"/><Cell col=\"7\" rowspan=\"2\" style=\"background:URL('theme://images/grd_WF_HeadEssential.png') left top;\" text=\"공고제목\"/><Cell col=\"8\" rowspan=\"2\" colspan=\"3\" style=\"background:URL('theme://images/grd_WF_HeadEssential.png') left top;\" text=\"공고기간\"/><Cell col=\"11\" rowspan=\"2\" style=\"background:URL('theme://images/grd_WF_HeadEssential.png') left top;\" text=\"공고처\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"3\" text=\"부서\"/><Cell row=\"1\" col=\"4\" text=\"성명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CNFIRM_AT\"/><Cell col=\"1\" displaytype=\"image\" text=\"expr:comp.parent.fn_get_imgUrl(SANCTN_STS)\"/><Cell col=\"2\" displaytype=\"checkbox\" text=\"bind:CNFIRM_AT\"/><Cell col=\"3\" edittype=\"none\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:DEPT_NM\"/><Cell col=\"4\" edittype=\"none\" style=\"align: ;\" text=\"bind:EMPNM\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'show' : 'hide'\"/><Cell col=\"5\" text=\"bind:PBLANC_NO\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"expr:CNFIRM_AT == '1' ? 'none' : 'date'\" text=\"bind:PBLANC_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" edittype=\"expr:CNFIRM_AT == '1' ? 'none' : 'normal'\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:PBLANC_SJ\" editlimit=\"1000\" editlengthunit=\"ascii\"/><Cell col=\"8\" displaytype=\"date\" edittype=\"expr:CNFIRM_AT == '1' ? 'none' : 'date'\" text=\"bind:PBLANC_BGNDE\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" text=\"~\"/><Cell col=\"10\" displaytype=\"date\" edittype=\"expr:CNFIRM_AT == '1' ? 'none' : 'date'\" text=\"bind:PBLANC_ENDDE\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" edittype=\"expr:CNFIRM_AT == '1' ? 'none' : 'normal'\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:PBLANC_OFFIC\" editlimit=\"100\" editlengthunit=\"ascii\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","57","1031","5",null,null,this);_a.set_taborder("6");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("7");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("HRM090207");_b.set_titletext("공고대장");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.cal_bgnDe","value","ds_cond","BGN_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.cal_endDe","value","ds_cond","END_DE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");this._addPreloadList("fdl","com::empno.xfdl");};this.addIncludeScript("HRM090101.xfdl","lib::comInclude.xjs");this.addIncludeScript("HRM090101.xfdl","mis_lib::misUtil.xjs");this.registerScript("HRM090101.xfdl",function(){this.isAuth=false;this.HRM090207_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.HRM090207_onload=function(_a,_b){this.isAuth=true;this.div_search.div_EMP.fn_setBind("ds_cond","EMPNO","EMPNM");this.div_search.div_DEPT.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");if(!this.isAuth){this.div_search.div_DEPT.fn_set_enable(false);this.ds_cond.setColumn(0,"DEPT_CODE",this.gfn_getDeptId());this.ds_cond.setColumn(0,"DEPT_NM",this.gfn_getDeptName());this.div_search.div_EMP.fn_set_enable(false);this.ds_cond.setColumn(0,"EMPNO",this.fn_getEmpno());this.ds_cond.setColumn(0,"EMPNM",this.fn_getEmpnm());this.grd_pblancList.setCellProperty("Body",4,"expandshow","hide");}var _c=this.gfn_today();var _d=this.dateUtils.addMonth(_c, -1,'s').substr(0,6)+"01";var _e=this.dateUtils.getLastDay(this.dateUtils.addMonth(_c,1,'s'),'s');this.ds_cond.setColumn(0,"BGN_DE",_d);this.ds_cond.setColumn(0,"END_DE",_e);this.fn_search();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}this.ds_pblancList.clearData();this.fn_transaction("selectPblancList");};this.fn_save=function(){if(!this.comUtils.isDatasetUpdated(this.ds_pblancList)){this.gfn_message("comm.데이터.변경.없음");return false;}if(!this.gfn_checkValidation_NoUpdChk(this.ds_pblancList,this.ds_validation)){return;}if(this.gfn_message("confirm.저장.여부")){this.fn_transaction("savePblancCUD");}};this.fn_transaction=function(_a){switch(_a){case "selectPblancList":var _b="/hsco/mis/hrm/HRM090101/selectPblancList.do";var _c="input1=ds_cond";var _d="ds_pblancList=output1";break;case "savePblancCUD":var _b="/hsco/mis/hrm/HRM090101/savePblancCUD.do";var _c="input1=ds_pblancList:U";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b==0){switch(_a){case "selectPblancList":break;case "savePblancCUD":this.gfn_message("success.처리.성공");this.fn_search();break;}}};this.fn_popupCallBack=function(_a,_b){if(_a=="empnoPop"){var _c=new Dataset();var _d=_c.loadXML(_b);if(_d){var _e=this.ds_pblancList.rowposition;var _f=_c.getColumn(0,"DEPT_CODE");var _g=_c.getColumn(0,"DEPT_NM");var _h=_c.getColumn(0,"EMPNO");var _i=_c.getColumn(0,"EMPNM");this.ds_pblancList.setColumn(_e,"DEPT_CODE",_f);this.ds_pblancList.setColumn(_e,"DEPT_NM",_g);this.ds_pblancList.setColumn(_e,"EMPNO",_h);this.ds_pblancList.setColumn(_e,"EMPNM",_i);}}};this.div_work_grd_pblancList_onexpandup=function(_a,_b){if(_b.cell=='3'){var _c=system.clientToScreenX(this,10);var _d=system.clientToScreenY(this,10);var _e=new ChildFrame;_e.init("empnoPop","absolute",_c,_d,400,400,null,null,"com::empno_P01.xfdl");_e.set_openalign("center middle");_e.set_dragmovetype("all");_e.showModal(this.getOwnerFrame(),{deptCode:"",empNo:"",empNm:"",deptCd:this.ds_cond.getColumn(0,"DEPT_CODE")},this,"fn_popupCallBack");}};this.div_work_grd_pblancList_onheadclick=function(_a,_b){this.gfn_gridSort(_a,_b);};this.fn_insert=function(){var _a=this.ds_pblancList.insertRow(0);this.ds_pblancList.setColumn(_a,"YEAR",this.gfn_today().substr(0,4));this.ds_pblancList.setColumn(_a,"SANCTN_STS","0");if(!this.isAuth){this.ds_pblancList.setColumn(_a,"EMPNO",this.fn_getEmpno());this.ds_pblancList.setColumn(_a,"EMPNM",this.fn_getEmpnm());this.ds_pblancList.setColumn(_a,"DEPT_CODE",this.gfn_getDeptId());this.ds_pblancList.setColumn(_a,"DEPT_NM",this.gfn_getDeptName());}};this.fn_delete=function(){var _a=this.ds_pblancList.rowposition;var _b=this.ds_pblancList.getColumn(_a,"SANCTN_STS");var _c=this.ds_pblancList.getColumn(_a,"CNFIRM_AT");if(_c!="1"){if(this.gfn_message("confirm.삭제여부")){this.ds_pblancList.deleteRow(this.ds_pblancList.rowposition);}}else{this.gfn_message("fail.삭제.불가","이관된 데이터는");}};this.fn_cancel=function(){if(this.gfn_message("confirm.취소여부")){this.ds_pblancList.reset();this.ds_pblancList.applyChange();return;}};this.fn_sanction=function(){alert("준비중 입니다.");};this.grd_pblancList_oncellclick=function(_a,_b){if(_b.col==0){if(this.ds_pblancList.getColumn(_b.row,"SANCTN_NO")!=null){var _c=this.ds_pblancList.getColumn(_b.row,"SANCTN_NO");var _d=this.ds_pblancList.getColumn(_b.row,"SANCTN_STS");var _e=this.ds_pblancList.getColumn(_b.row,"REGIST_DT");if(_d<1||_d=='NUL'){return;}var _f={arg_0:this,arg_1:_c,arg_2:_e};this.gfn_popup("Popup2",710,518,"전자결재진행 현황",_f,"com::COM010400_P01.xfdl","fn_PopupCallback");}}};this.fn_PopupCallback=function(_a,_b){if(_a=="Popup2"){}};this.fn_get_imgUrl=function(_a){return this.gfn_getSanctnImgUrl(_a);};});this.on_initEvent=function(){this.addEventHandler("onload",this.HRM090207_onload,this);this.addEventHandler("oninit",this.HRM090207_oninit,this);this.grd_pblancList.addEventHandler("onheadclick",this.div_work_grd_pblancList_onheadclick,this);this.grd_pblancList.addEventHandler("onexpandup",this.div_work_grd_pblancList_onexpandup,this);this.grd_pblancList.addEventHandler("oncellclick",this.grd_pblancList_oncellclick,this);};this.loadIncludeScript("HRM090101.xfdl");this.loadPreloadList();};})();