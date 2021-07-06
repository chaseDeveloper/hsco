﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SAL030103_P01");this.set_classname("UI_SAL030103_P01");this.set_titletext("급여부서");this.set_scrollbars("none");this._setFormPosition(0,0,465,460);}_a=new Dataset("ds_salaryDept",this);_a._setContents("<ColumnInfo><Column id=\"SALARY_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_TY\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"OUTPT_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Grid("grd","absolute","15","39","435","406",null,null,this);_a.set_taborder("0");_a.set_autofittype("col");_a.set_binddataset("ds_salaryDept");_a.set_autosizingtype("row");_a.set_extendsizetype("row");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"164\"/><Column size=\"65\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"사업유형\"/><Cell col=\"2\" text=\"부서코드\"/><Cell col=\"3\" text=\"부서명\"/><Cell col=\"4\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" style=\"align:center;\" text=\"expr:BSNS_TY == 'A' ? '대행' : (BSNS_TY == 'B' ? '자체' : '')\" wordwrap=\"char\"/><Cell col=\"2\" style=\"align:center;\" text=\"bind:SALARY_DEPT_CODE\"/><Cell col=\"3\" text=\"bind:SALARY_DEPT_NM\" wordwrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"4\" displaytype=\"checkbox\" text=\"bind:USE_AT\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_title01","absolute","15","15","132","19",null,null,this);_a.set_taborder("1");_a.set_text("부서 선택");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static51","absolute","0","34","450","5",null,null,this);_a.set_taborder("2");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","0","0","450","15",null,null,this);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","0","15","460",null,null,this);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","450","0","15","460",null,null,this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","445","465","15",null,null,this);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",465,460,this,function(_b){_b.set_classname("UI_SAL030103_P01");_b.set_titletext("급여부서");_b.set_scrollbars("none");});this.addLayout(_a.name,_a);_a=new BindItem("item15","div_detail03.Edit04","value","ds_actMastr","PRMPC_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_detail00.Edit00","value","ds_actMastr","BCNC_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item24","div_detail00.Edit01","value","ds_actMastr","BCNC_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item25","div_detail03.Edit00","value","ds_actMastr","BSNS_CODE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("SAL030103_P01.xfdl","lib::comInclude.xjs");this.registerScript("SAL030103_P01.xfdl",function(){this.SAL030103_P01_onload=function(_a,_b){this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"YEAR",this.getOwnerFrame().year);this.fn_transaction("selectSalaryDeptList");};this.fn_close=function(){this.close();};this.fn_transaction=function(_a){switch(_a){case "selectSalaryDeptList":var _b="hsco/mis/sal/SAL030103/selectSalaryDeptList.do";var _c="input1=ds_cond";var _d="ds_salaryDept=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b<0){}switch(_a){case "selectSalaryDeptList":break;default:break;}};this.grd_oncelldblclick=function(_a,_b){var _c=new Dataset();_c.copyData(this.ds_salaryDept);_c.clearData();var _d=_c.addRow();_c.copyRow(_d,this.ds_salaryDept,this.ds_salaryDept.rowposition);this.close(_c.saveXML());};});this.on_initEvent=function(){this.addEventHandler("onload",this.SAL030103_P01_onload,this);this.grd.addEventHandler("oncelldblclick",this.grd_oncelldblclick,this);};this.loadIncludeScript("SAL030103_P01.xfdl");};})();