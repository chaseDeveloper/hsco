﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SAL010110_T04");this.set_classname("SAL010110_T04");this.set_titletext("자격사항");this._setFormPosition(0,0,658,428);}_a=new Grid("grd_hrQualfList","absolute","0","27",null,null,"0","0",this);_a.set_taborder("0");_a.set_binddataset("ds_hrQualfList");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"자격구분\"/><Cell col=\"1\" text=\"기타자격명\"/><Cell col=\"2\" text=\"자격등급\"/><Cell col=\"3\" text=\"자격면허번호\"/><Cell col=\"4\" text=\"발행처명\"/><Cell col=\"5\" text=\"취득일자\"/><Cell col=\"6\" text=\"유효일자\"/><Cell col=\"7\" text=\"자격갱신일자\"/><Cell col=\"8\" text=\"비고\"/><Cell col=\"9\" edittype=\"checkbox\" text=\"수당\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" text=\"bind:QUALF_CODE\" combodataset=\"ds_qualfSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodisplay=\"display\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:ETC_QUALF_NM\" editdisplay=\"display\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:QUALF_GRAD\" combodataset=\"ds_qualfGrade\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodisplay=\"display\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:QUALF_LCNS_NO\" editdisplay=\"display\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:PBLICTE_OFFIC_NM\" editdisplay=\"display\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"date\" text=\"bind:ACQS_DE\" calendardisplay=\"display\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"date\" text=\"bind:VALID_DE\" calendardisplay=\"display\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"date\" edittype=\"date\" text=\"bind:QUALF_UPDT_DE\" calendardisplay=\"display\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" edittype=\"normal\" text=\"bind:RM\" editdisplay=\"display\"/><Cell col=\"9\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ALLWNC_AT\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","5","177","19",null,null,this);_a.set_taborder("1");_a.set_text("자격사항");_a.set_cssclass("sta_WF_Title03");this.addChild(_a.name,_a);_a=new Button("btn_hrQualfAdd","absolute",null,"5","64","19","135",null,this);_a.set_taborder("2");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.addChild(_a.name,_a);_a=new Button("btn_hrQualfDelete","absolute",null,"5","64","19","68",null,this);_a.set_taborder("3");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");_a.getSetter("cancolumnchange").set("ds_frmtnPdDept_cancolumnchange");this.addChild(_a.name,_a);_a=new Button("btn_hrQualfCancel","absolute",null,"5","64","19","1",null,this);_a.set_taborder("4");_a.set_text("취소");_a.set_cssclass("btn_WF_Gridcnl");this.addChild(_a.name,_a);_a=new Layout("default","",658,428,this,function(_b){_b.set_classname("SAL010110_T04");_b.set_titletext("자격사항");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("SAL010110_T04.xfdl","lib::comInclude.xjs");this.registerScript("SAL010110_T04.xfdl",function(){this.btn_hrQualfAdd_onclick=function(_a,_b){var _c=this.parent.parent.ds_hrQualfList.addRow();var _d=this.parent.parent.ds_cond2.getColumn(0,"EMPNO");trace(this.parent.parent.ds_cond2.saveXML());this.parent.parent.ds_hrQualfList.setColumn(_c,"EMPNO",_d);};this.btn_hrQualfDelete_onclick=function(_a,_b){var _c=this.parent.parent.ds_hrQualfList.rowposition;this.parent.parent.ds_hrQualfList.deleteRow(_c);};this.btn_hrQualfCancel_onclick=function(_a,_b){this.parent.parent.ds_hrQualfList.reset();this.parent.parent.ds_hrQualfList.applyChange();};});this.on_initEvent=function(){this.grd_hrQualfList.addEventHandler("oncellclick",this.div_work_div_detail00_tab_empInfo_tabpage10_Grid00_oncellclick,this);this.grd_hrQualfList.addEventHandler("onheadclick",this.div_work_div_detail00_tab_empInfo_tabpage10_Grid00_onheadclick,this);this.btn_hrQualfAdd.addEventHandler("onclick",this.btn_hrQualfAdd_onclick,this);this.btn_hrQualfDelete.addEventHandler("onclick",this.btn_hrQualfDelete_onclick,this);this.btn_hrQualfCancel.addEventHandler("onclick",this.btn_hrQualfCancel_onclick,this);};this.loadIncludeScript("SAL010110_T04.xfdl");};})();