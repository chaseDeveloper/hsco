﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM060124");this.set_classname("HRM060124");this.set_titletext("분장사무 내역(근무부서별)");this._setFormPosition(0,0,1033,523);}_a=new Button("btn_add","absolute",null,"9","66","19","138",null,this);_a.set_taborder("0");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");_a.set_visible("true");this.addChild(_a.name,_a);_a=new Button("btn_delete","absolute",null,"9","66","19","68",null,this);_a.set_taborder("1");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");_a.set_visible("true");this.addChild(_a.name,_a);_a=new Button("btn_cancel","absolute",null,"8","64","20","0",null,this);_a.set_taborder("2");_a.set_text("행취소");_a.set_cssclass("btn_WF_Gridcnl");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","0",null,"10","0",null,this);_a.set_taborder("4");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","28",null,"5","0",null,this);_a.set_taborder("5");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_distrbOfcrkDtlsList","absolute","0","32",null,null,"0","0",this);_a.set_autoenter("select");_a.set_taborder("3");_a.set_autofittype("col");_a.set_binddataset("ds_distrbOfcrkDtlsList");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"500\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"분장사무 내역(근무부서별)\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" edittype=\"normal\" style=\"align:left;\" text=\"bind:CN\" editlimit=\"1000\" editlengthunit=\"ascii\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_distrbOfcrkDtlsList","absolute","0","9","205","19",null,null,this);_a.set_taborder("6");_a.set_text("분장사무 내역(근무부서별)");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Layout("default","",1033,523,this,function(_b){_b.set_classname("HRM060124");_b.set_titletext("분장사무 내역(근무부서별)");});this.addLayout(_a.name,_a);_a=null;};this.registerScript("HRM060126_T01.xfdl",function(){this.btn_add_onclick=function(_a,_b){if(this.parent.parent.updateYn!='Y'){this.parent.parent.gfn_message("info.처리불가",this.parent.parent.message);return;}var _c=this.parent.parent.ds_distrbOfcrkDtlsList.addRow();this.parent.parent.ds_distrbOfcrkDtlsList.setColumn(_c,"EVL_YEAR",this.parent.parent.ds_cond.getOrgColumn(0,"EVL_YEAR"));this.parent.parent.ds_distrbOfcrkDtlsList.setColumn(_c,"HT_SE",this.parent.parent.ds_cond.getOrgColumn(0,"HT_SE"));this.parent.parent.ds_distrbOfcrkDtlsList.setColumn(_c,"EMPNO",this.parent.parent.ds_cond.getOrgColumn(0,"EMPNO"));this.parent.parent.ds_distrbOfcrkDtlsList.setColumn(_c,"ACMSLT_SE",this.parent.parent.ds_acmsltSe.getColumn(0,"CODE"));};this.btn_delete_onclick=function(_a,_b){if(this.parent.parent.updateYn!='Y'){this.parent.parent.gfn_message("info.처리불가",this.parent.parent.message);return;}if(!this.parent.parent.gfn_message("confirm.삭제여부")){return false;}this.parent.parent.ds_distrbOfcrkDtlsList.deleteRow(this.parent.parent.ds_distrbOfcrkDtlsList.rowposition);};this.btn_cancel_onclick=function(_a,_b){if(this.parent.parent.updateYn!='Y'){this.parent.parent.gfn_message("info.처리불가",this.parent.parent.message);return;}if(Ex.util.isUpdated(this.parent.parent.ds_distrbOfcrkDtlsList)){if(!this.parent.parent.gfn_message("confirm.변경.취소.여부")){return false;}}this.parent.parent.ds_distrbOfcrkDtlsList.reset();this.parent.parent.ds_distrbOfcrkDtlsList.applyChange();};});this.on_initEvent=function(){this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);};this.loadIncludeScript("HRM060126_T01.xfdl");};})();