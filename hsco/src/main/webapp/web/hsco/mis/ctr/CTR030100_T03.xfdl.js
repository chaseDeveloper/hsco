﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("CTR030100_T03");this.set_classname("CTR030100_T03");this.set_titletext("배정예산");this._setFormPosition(0,0,1031,400);}_a=new Grid("grd_cntrctBudget","absolute","0","35",null,null,"0","0",this);_a.set_taborder("0");_a.set_binddataset("ds_cntrctBudget");_a.set_cellsizingtype("col");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"400\"/><Column size=\"150\"/><Column size=\"350\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"예산년도\"/><Cell col=\"1\" text=\"예산계정코드\"/><Cell col=\"2\" text=\"예산계정명\"/><Cell col=\"3\" text=\"예산명\"/><Cell col=\"4\" text=\"배정금액\"/><Cell col=\"5\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:BUDGET_YEAR\"/><Cell col=\"1\" text=\"bind:BUDGET_ACNT_CODE\" mask=\"###-#####\" expandshow=\"show\"/><Cell col=\"2\" text=\"bind:BUDGET_ACNT_NM\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:BUDGET_ACNT_NM3\"/><Cell col=\"4\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BUDGET_AM\"/><Cell col=\"5\" edittype=\"normal\" style=\"align:left middle;\" text=\"bind:RM\" editlimit=\"300\" editdisplay=\"display\" editlengthunit=\"ascii\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","0","11","120","19",null,null,this);_a.set_taborder("1");_a.set_text("예산배정내역");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","1",null,"10","0",null,this);_a.set_taborder("2");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","30",null,"5","0",null,this);_a.set_taborder("3");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_Add","absolute",null,"10","64","19","134",null,this);_a.set_taborder("4");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.addChild(_a.name,_a);_a=new Button("btn_Delete","absolute",null,"10","64","19","67",null,this);_a.set_taborder("5");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");this.addChild(_a.name,_a);_a=new Button("btn_Cancel","absolute",null,"10","64","19","0",null,this);_a.set_taborder("6");_a.set_text("취소");_a.set_cssclass("btn_WF_Gridcnl");this.addChild(_a.name,_a);_a=new Layout("default","",1031,400,this,function(_b){_b.set_classname("CTR030100_T03");_b.set_titletext("배정예산");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("CTR030100_T03.xfdl","lib::comInclude.xjs");this.addIncludeScript("CTR030100_T03.xfdl","mis_lib::misUtil.xjs");this.registerScript("CTR030100_T03.xfdl",function(){this.CTR030100_T03_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.CTR030100_T03_onload=function(_a,_b){};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){};this.btn_Add_onclick=function(_a,_b){if(this.parent.parent.ds_cntrct.getRowCount()==0){this.gfn_message("info.진행가능","계약정보 '추가' 혹은 '조회'");return false;}var _c=this.parent.parent.ds_cntrct.getColumn(0,"CNTRCT_NO");var _d=this.parent.parent.ds_cntrctBudget.addRow();this.parent.parent.ds_cntrctBudget.setColumn(_d,"CNTRCT_NO",_c);};this.btn_Delete_onclick=function(_a,_b){if(this.parent.parent.ds_cntrct.getRowCount()==0){this.gfn_message("info.진행가능","계약정보 '추가' 혹은 '조회'");return false;}if(!this.gfn_message("confirm.삭제여부")){return false;}this.parent.parent.ds_cntrctBudget.deleteRow(this.parent.parent.ds_cntrctBudget.rowposition);};this.btn_Cancel_onclick=function(_a,_b){if(this.parent.parent.ds_cntrct.getRowCount()==0){this.gfn_message("info.진행가능","계약정보 '추가' 혹은 '조회'");return false;}if(Ex.util.isUpdated(this.parent.parent.ds_cntrctBudget)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}this.parent.parent.ds_cntrctBudget.reset();this.parent.parent.ds_cntrctBudget.applyChange();};this.grd_cntrctBudget_onexpandup=function(_a,_b){if(_b.cell=='1'){var _c=this.parent.parent.ds_cntrct.rowposition;var _d=this.parent.parent.ds_cntrct.getColumn(_c,"MNG_DEPT_CODE");var _e=this.parent.parent.ds_cntrct.getColumn(_c,"MNG_DEPT_NM");var _f=this.parent.parent.ds_cntrct.getColumn(_c,"BSNS_CODE");var _g=this.parent.parent.ds_cntrct.getColumn(_c,"BSNS_NM");var _h={arg_0:this,deptCode:_d,deptNm:_e,bsnsCode:_f,bsnsNm:_g};this.gfn_popup("CTR020100_P03",1024,500,"",_h,"mis_ctr::CTR020100_P03.xfdl","fn_popupCallBack",true);}};this.fn_popupCallBack=function(_a,_b){var _c=new Dataset();var _d=_c.loadXML(_b);if(!_d){return false;}var _e=this.parent.parent.ds_cntrctBudget.rowposition;switch(_a){case "CTR020100_P03":this.parent.parent.ds_cntrctBudget.setColumn(_e,"BUDGET_YEAR",_c.getColumn(0,"YEAR"));this.parent.parent.ds_cntrctBudget.setColumn(_e,"BSNS_SE",_c.getColumn(0,"BSNS_SE"));this.parent.parent.ds_cntrctBudget.setColumn(_e,"BALC_SE",_c.getColumn(0,"BALC_SE"));this.parent.parent.ds_cntrctBudget.setColumn(_e,"BUDGET_ACNT_CODE",_c.getColumn(0,"BUDGET_ACNT_CODE"));this.parent.parent.ds_cntrctBudget.setColumn(_e,"BUDGET_ACNT_NM",_c.getColumn(0,"BUDGET_ACNT_NM"));this.parent.parent.ds_cntrctBudget.setColumn(_e,"BUDGET_ACNT_NM2",_c.getColumn(0,"BUDGET_ACNT_NM2"));this.parent.parent.ds_cntrctBudget.setColumn(_e,"BUDGET_ACNT_NM3",_c.getColumn(0,"BUDGET_ACNT_NM3"));this.parent.parent.ds_cntrctBudget.setColumn(_e,"BUDGET_AM",_c.getColumn(0,"BUDGET_AM"));break;}};});this.on_initEvent=function(){this.addEventHandler("onload",this.CTR030100_T03_onload,this);this.addEventHandler("oninit",this.CTR030100_T03_oninit,this);this.grd_cntrctBudget.addEventHandler("onexpandup",this.grd_cntrctBudget_onexpandup,this);this.Static00.addEventHandler("onclick",this.Static00_onclick,this);this.btn_Add.addEventHandler("onclick",this.btn_Add_onclick,this);this.btn_Delete.addEventHandler("onclick",this.btn_Delete_onclick,this);this.btn_Cancel.addEventHandler("onclick",this.btn_Cancel_onclick,this);};this.loadIncludeScript("CTR030100_T03.xfdl");};})();