﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("AUD040103");this.set_classname("AUD040103");this.set_titletext("청렴마일리지조회");this._setFormPosition(0,0,1059,735);}_a=new Dataset("DS_DEPT_MLG_REGIST",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"APPLC_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"MLG_SN\" type=\"STRING\" size=\"256\"/><Column id=\"MLG_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ESTBS_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"MLG_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_INDVDL_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PERSON_ADD_SCORE\" type=\"STRING\" size=\"256\"/><Column id=\"PERSON_SUB_SCORE\" type=\"STRING\" size=\"256\"/><Column id=\"PERSON_TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE\" type=\"STRING\" size=\"256\"/><Column id=\"PERSON_AVG_SCORE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ADD_SCORE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_SUB_SCORE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_TOTAL_SCORE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_SCORE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_PERSON_MLG_REGIST",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"APPLC_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"MLG_SN\" type=\"STRING\" size=\"256\"/><Column id=\"MLG_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ESTBS_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"MLG_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_INDVDL_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"PERSON_ADD_SCORE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PERSON_SUB_SCORE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PERSON_TOTAL\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_ESTBS_MLG_REGIST",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"APPLC_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_dept",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ECNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_Cont","absolute","0","33",null,null,"28","0",this);_a.set_taborder("0");this.addChild(_a.name,_a);_a=new Tab("AUD040103","absolute","0","10",null,null,"0","0",this.div_Cont);_a.set_taborder("0");_a.set_tabindex("0");_a.set_scrollbars("autoboth");_a.style.set_showextrabutton("false");this.div_Cont.addChild(_a.name,_a);_a=new Tabpage("T01",this.div_Cont.AUD040103);_a.set_text("부서별집계");this.div_Cont.AUD040103.addChild(_a.name,_a);_a=new Grid("grd_Dept_list","absolute","1","5",null,null,"1","1",this.div_Cont.AUD040103.T01);_a.set_taborder("0");_a.set_autoenter("select");_a.set_autofittype("col");_a.set_binddataset("DS_DEPT_MLG_REGIST");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"부서\"/><Cell col=\"2\" colspan=\"5\" text=\"개인점수\"/><Cell col=\"7\" colspan=\"3\" text=\"부서점수\"/><Cell col=\"10\" rowspan=\"2\" text=\"계\"/><Cell row=\"1\" col=\"2\" text=\"가점\"/><Cell row=\"1\" col=\"3\" text=\"감점\"/><Cell row=\"1\" col=\"4\" text=\"계\"/><Cell row=\"1\" col=\"5\" text=\"직원수\"/><Cell row=\"1\" col=\"6\" text=\"평균점수\"/><Cell row=\"1\" col=\"7\" text=\"가점\"/><Cell row=\"1\" col=\"8\" text=\"감점\"/><Cell row=\"1\" col=\"9\" text=\"계\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:DEPT_NM\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PERSON_ADD_SCORE\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PERSON_SUB_SCORE\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PERSON_TOTAL\"/><Cell col=\"5\" style=\"align:right;\" text=\"bind:EMPLOYEE\"/><Cell col=\"6\" style=\"align:right;\" text=\"bind:PERSON_AVG_SCORE\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DEPT_ADD_SCORE\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DEPT_SUB_SCORE\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DEPT_TOTAL_SCORE\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOTAL_SCORE\"/></Band></Format></Formats>");this.div_Cont.AUD040103.T01.addChild(_a.name,_a);_a=new Tabpage("T02",this.div_Cont.AUD040103);_a.set_text("개인별집계");this.div_Cont.AUD040103.addChild(_a.name,_a);_a=new Grid("grd_PERSON_MLG_REGIST","absolute","1","5",null,null,"1","1",this.div_Cont.AUD040103.T02);_a.set_taborder("0");_a.set_autoenter("select");_a.set_autofittype("col");_a.set_binddataset("DS_PERSON_MLG_REGIST");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"부서\"/><Cell col=\"2\" text=\"사번\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"가점\"/><Cell col=\"5\" text=\"감점\"/><Cell col=\"6\" text=\"계\"/></Band><Band id=\"body\"><Cell text=\"expr:currow +1\"/><Cell col=\"1\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:DEPT_NM\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"2\" text=\"bind:EMPNO\" suppressalign=\"middle\"/><Cell col=\"3\" text=\"bind:EMPNM\" suppressalign=\"middle\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PERSON_ADD_SCORE\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PERSON_SUB_SCORE\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PERSON_TOTAL\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;PERSON_ADD_SCORE&quot;)\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;PERSON_SUB_SCORE&quot;)\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;PERSON_TOTAL&quot;)\"/></Band></Format></Formats>");this.div_Cont.AUD040103.T02.addChild(_a.name,_a);_a=new Tabpage("T03",this.div_Cont.AUD040103);_a.set_text("항목별집계");this.div_Cont.AUD040103.addChild(_a.name,_a);_a=new Grid("GRD_ESTBS_MLG_REGIST","absolute","1","5",null,null,"1","1",this.div_Cont.AUD040103.T03);_a.set_taborder("0");_a.set_binddataset("DS_ESTBS_MLG_REGIST");_a.set_wheelscrollrow("2");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"150\" band=\"left\"/><Column size=\"200\" band=\"left\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" colspan=\"2\" text=\"구분\"/><Cell row=\"1\" col=\"1\" text=\"가점/감점\"/><Cell row=\"1\" col=\"2\" text=\"평가항목\"/></Band><Band id=\"body\"><Cell text=\"expr:currow +1\"/><Cell col=\"1\" text=\"bind:ADD_SUB_AT\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:MLG_DETAIL\" suppress=\"2\" suppressalign=\"middle\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/></Band></Format></Formats>");this.div_Cont.AUD040103.T03.addChild(_a.name,_a);_a=new Button("Button00","absolute",null,"10","25","19","0",null,this.div_Cont);_a.set_taborder("1");_a.set_cssclass("btn_WF_Gridexceldn");this.div_Cont.addChild(_a.name,_a);_a=new Div("div_SearchArea","absolute","0","0",null,"33","28",null,this);_a.set_taborder("1");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_SEARCH_YEAR","absolute","15","5","60","21",null,null,this.div_SearchArea);_a.set_taborder("1");_a.set_text("조회년도");_a.style.set_align("right middle");_a.set_cssclass("sta_WFSA_Label");this.div_SearchArea.addChild(_a.name,_a);_a=new Spin("spn_year","absolute","80","5","80","21",null,null,this.div_SearchArea);_a.set_taborder("2");_a.set_value("0");_a.set_cssclass("spn_WF_Essential");this.div_SearchArea.addChild(_a.name,_a);_a=new Div("div_dept","absolute","232","5","195","21",null,null,this.div_SearchArea);_a.set_taborder("3");_a.set_async("false");_a.set_enable("true");_a.set_visible("true");_a.set_cssclass("edt_WF_Readonly");_a.set_url("com::deptCode.xfdl");this.div_SearchArea.addChild(_a.name,_a);_a=new Static("sta_DEPT","absolute","187","5","40","21",null,null,this.div_SearchArea);_a.set_taborder("4");_a.set_text("부서");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("right middle");_a.set_enable("false");_a.set_visible("true");this.div_SearchArea.addChild(_a.name,_a);_a=new Layout("default","",1019,698,this.div_Cont.AUD040103.T01,function(_b){_b.set_text("부서별집계");});this.div_Cont.AUD040103.T01.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_Cont.AUD040103.T02,function(_b){_b.set_text("개인별집계");});this.div_Cont.AUD040103.T02.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_Cont.AUD040103.T03,function(_b){_b.set_text("항목별집계");});this.div_Cont.AUD040103.T03.addLayout(_a.name,_a);_a=new Layout("default","",1031,735,this.div_Cont,function(_b){_b.set_taborder("0");});this.div_Cont.addLayout(_a.name,_a);_a=new Layout("default","",0,33,this.div_SearchArea,function(_b){_b.set_taborder("1");_b.set_cssclass("div_WFSA_Box");});this.div_SearchArea.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("AUD040103");_b.set_titletext("청렴마일리지조회");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_SearchArea.spn_year","value","ds_cond","APPLC_YEAR");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");};this.addIncludeScript("AUD040103.xfdl","lib::comInclude.xjs");this.addIncludeScript("AUD040103.xfdl","mis_lib::misUtil.xjs");this.registerScript("AUD040103.xfdl",function(){var _a;this.AUD040103_oninit=function(_b,_c){this.fn_init_form();this.fn_init_dataset();};this.AUD040103_onload=function(_b,_c){this.div_SearchArea.spn_year.setFocus(true);this.fn_search();};this.fn_init_form=function(){this.fn_getLinkParam();this.gfn_initForm(this);this.fn_misFormInit(this);this.ds_cond.clearData();this.ds_cond.addRow();if(this.gfn_authcode("102")> -1||this.gfn_authcode("064")> -1){this.ds_cond.setColumn(0,"AUTH_CODE","102");this.div_SearchArea.div_dept.set_enable(true);}else{this.ds_cond.setColumn(0,"DEPT_CODE",this.gfn_getDeptId());this.ds_cond.setColumn(0,"DEPT_NM",this.gfn_getDeptName());}this.div_SearchArea.div_dept.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");this.ds_cond.setColumn(0,"APPLC_YEAR",this.gfn_today().substring(0,4));if(_a!=null){this.ds_cond.setColumn(0,"APPLC_YEAR",_a);}};this.fn_init_dataset=function(){};this.fn_getLinkParam=function(){var _b="mis_aud::AUD040103.xfdl";this.fn_setParam(this.gfn_getLinkParam(_b));var _c="PAGE_URL=='"+_b+"'";var _d=application.gds_mdiParam.findRowExpr(_c);application.gds_mdiParam.deleteRow(_d);};this.fn_setParam=function(_b){if(this.comUtils.isNull(_b)){return;}var _c=new Dataset();var _d=_c.loadXML(_b);if(_d>0){_a=_c.getColumn(0,"EVL_YEAR");}};this.fn_search=function(_b,_c){this.fn_select_intgty_mlg_regist_list();};this.fn_select_intgty_mlg_regist_list=function(){if(this.div_Cont.AUD040103.tabindex==0){this.fn_transaction("selectDeptMlgRegistList");}else if(this.div_Cont.AUD040103.tabindex==1){this.fn_transaction("selectPersonMlgRegistList");}else if(this.div_Cont.AUD040103.tabindex==2){this.fn_transaction("selectDept");}};this.fn_transaction=function(_b){switch(_b){case "selectDeptMlgRegistList":var _c="hsco/mis/aud/AUD040103/selectDeptMlgRegistList.do";var _d="input01=ds_cond";var _e="DS_DEPT_MLG_REGIST=output01";break;case "selectPersonMlgRegistList":var _c="hsco/mis/aud/AUD040103/selectPersonMlgRegistList.do";var _d="input02=ds_cond";var _e="DS_PERSON_MLG_REGIST=output02";break;case "selectDept":var _c="hsco/mis/aud/AUD040103/selectDept.do";var _d="input03=ds_cond";var _e="ds_dept=output04";break;case "selectEstbsMlgRegistList":this.DS_ESTBS_MLG_REGIST.clearData();var _c="hsco/mis/aud/AUD040103/selectEstbsMlgRegistList.do";var _d="input03=ds_cond";var _e="DS_ESTBS_MLG_REGIST=output03";break;}var _f="";Ex.core.tran(this,_b,_c,_d,_e,_f);};this.fn_callBack=function(_b,_c,_d){if(_c!=0){this.gfn_callback_message(_b,_c,_d);}switch(_b){case "selectDept":this.fn_transaction("selectEstbsMlgRegistList");break;case "selectEstbsMlgRegistList":this.fn_dynamicGrid();break;}};this.div_Cont_AUD040102_onchanged=function(_b,_c){this.fn_select_intgty_mlg_regist_list();};this.div_Cont_Button00_onclick=function(_b,_c){switch(this.div_Cont.AUD040103.tabindex){case 0:this.gfn_exportExcel(this.div_Cont.AUD040103.T01.grd_Dept_list,"grdDeptList");break;case 1:this.gfn_exportExcel(this.div_Cont.AUD040103.T02.grd_PERSON_MLG_REGIST,"grdPersonMlgRegist");break;case 2:this.gfn_exportExcel(this.div_Cont.AUD040103.T03.GRD_ESTBS_MLG_REGIST,"grdEstbsMlgRegist");break;}};this.Button00_onclick=function(_b,_c){trace("========== ds_dept ==========");trace(this.ds_dept.saveXML());trace("========== DS_ESTBS_MLG_REGIST ==========");trace(this.DS_ESTBS_MLG_REGIST.saveXML());trace("========== DS_PERSON_MLG_REGIST ==========");trace(this.DS_PERSON_MLG_REGIST.saveXML());};this.fn_dynamicGrid=function(){this.div_Cont.AUD040103.T03.GRD_ESTBS_MLG_REGIST.set_enableredraw(false);for(var _i=this.div_Cont.AUD040103.T03.GRD_ESTBS_MLG_REGIST.getCellCount("Head");_i>2;_i-- ){this.div_Cont.AUD040103.T03.GRD_ESTBS_MLG_REGIST.deleteContentsCol(_i);}var _b=[["점수","평균","부서점","계"],["","_AVG","_SCORE2","_TOT"]];for(var _i=0;_i<this.ds_dept.getRowCount();_i++ ){var _c=0;var _d=this.ds_dept.getColumn(_i,"DEPT_CODE");var _e=this.ds_dept.getColumn(_i,"DEPT_NM");var _f=this.ds_dept.getColumn(_i,"ECNT");var _g=_e+"(직원:"+_f+")";for(var _j=0;_j<4;_j++ ){var _h=this.div_Cont.AUD040103.T03.GRD_ESTBS_MLG_REGIST.appendContentsCol("body",true);this.div_Cont.AUD040103.T03.GRD_ESTBS_MLG_REGIST.setCellProperty("Head",(_j+2)+_i,"text",_g);this.div_Cont.AUD040103.T03.GRD_ESTBS_MLG_REGIST.setCellProperty("Head",((_j+2)+_i)+_h,"text",_b[0][_j]);if((_j+1)%4==0){this.div_Cont.AUD040103.T03.GRD_ESTBS_MLG_REGIST.mergeContentsCell("Head",0,_h-3,0,_h,(_j+2)+_i,false);}this.div_Cont.AUD040103.T03.GRD_ESTBS_MLG_REGIST.setCellProperty("Body",_h,"displaytype","number");this.div_Cont.AUD040103.T03.GRD_ESTBS_MLG_REGIST.setCellProperty("Body",_h,"align","right middle");this.div_Cont.AUD040103.T03.GRD_ESTBS_MLG_REGIST.setFormatColProperty(_h,"size",50);this.div_Cont.AUD040103.T03.GRD_ESTBS_MLG_REGIST.setCellProperty("Body",_h,"text","bind:DEPT_"+_d+_b[1][_j]);this.div_Cont.AUD040103.T03.GRD_ESTBS_MLG_REGIST.setCellProperty("Summ",_h,"text","expr:dataset.getSum('DEPT_"+_d+_b[1][_j]+"')");}}this.div_Cont.AUD040103.T03.GRD_ESTBS_MLG_REGIST.set_enableredraw(true);};this.test=function(_b,_c){alert("cell : "+_c.cell);};});this.on_initEvent=function(){this.addEventHandler("onload",this.AUD040103_onload,this);this.addEventHandler("oninit",this.AUD040103_oninit,this);this.div_Cont.AUD040103.addEventHandler("onchanged",this.div_Cont_AUD040102_onchanged,this);this.div_Cont.AUD040103.T03.GRD_ESTBS_MLG_REGIST.addEventHandler("onheaddblclick",this.test,this);this.div_Cont.AUD040103.T03.GRD_ESTBS_MLG_REGIST.addEventHandler("oncelldblclick",this.test,this);this.div_Cont.AUD040103.T03.GRD_ESTBS_MLG_REGIST.addEventHandler("onsummclick",this.test,this);this.div_Cont.Button00.addEventHandler("onclick",this.div_Cont_Button00_onclick,this);};this.loadIncludeScript("AUD040103.xfdl");this.loadPreloadList();};})();