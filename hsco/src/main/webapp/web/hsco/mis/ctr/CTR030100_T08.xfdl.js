﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("CTR030100_T08");this.set_classname("CTR030100_T08");this.set_titletext("채권가압류");this._setFormPosition(0,0,1031,400);}_a=new Grid("grd_cditPrsszr","absolute","0","35",null,null,"0","0",this);_a.set_taborder("57");_a.set_binddataset("ds_cditPrsszr");_a.set_cellsizingtype("col");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"110\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"140\"/><Column size=\"110\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"채권자\"/><Cell col=\"2\" text=\"압류일자\"/><Cell col=\"3\" text=\"채무자\"/><Cell col=\"4\" text=\"제3채무자\"/><Cell col=\"5\" text=\"채권금액\"/><Cell col=\"6\" text=\"해지일자\"/><Cell col=\"7\" text=\"채권구분명\"/><Cell col=\"8\" text=\"처리구분명\"/><Cell col=\"9\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'normal' : 'none'\" style=\"align:left middle;\" text=\"bind:CRDTR\" editlimit=\"100\" editlengthunit=\"ascii\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'show' : 'hide'\" tooltiptext=\"bind:CRDTR\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'date' : 'none'\" style=\"align:center middle;\" text=\"bind:SEIZR_DE\" calendardisplay=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'display' : 'edit'\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" edittype=\"normal\" style=\"align:left middle;\" text=\"bind:DET_MAN\" editlimit=\"100\" editlengthunit=\"ascii\" expandshow=\"show\" tooltiptext=\"bind:DET_MAN\"/><Cell col=\"4\" edittype=\"normal\" style=\"align:left middle;\" text=\"bind:DEBTR_3\" editlimit=\"100\" editlengthunit=\"ascii\" expandshow=\"show\" tooltiptext=\"bind:DEBTR_3\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right middle;\" text=\"bind:CDIT_AMOUNT\" mask=\"###,###,###,###,###\" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"date\" style=\"align:center middle;\" text=\"bind:TRMNAT_DE\" calendardisplay=\"display\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" edittype=\"normal\" style=\"align:left middle;\" text=\"bind:CDIT_SENM\" editlimit=\"50\" editdisplay=\"display\" editlengthunit=\"ascii\" tooltiptext=\"bind:CDIT_SENM\"/><Cell col=\"8\" edittype=\"normal\" style=\"align:left middle;\" text=\"bind:PROCESS_SE_NM\" editlimit=\"50\" editdisplay=\"display\" editlengthunit=\"ascii\" tooltiptext=\"bind:CDIT_SENM\"/><Cell col=\"9\" edittype=\"normal\" style=\"align:left middle;\" text=\"bind:RM\" editlimit=\"200\" editdisplay=\"display\" editlengthunit=\"ascii\" tooltiptext=\"bind:CDIT_SENM\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_cditPrsszr","absolute","0","11","120","19",null,null,this);_a.set_taborder("58");_a.set_text("채권가압류");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","1",null,"10","0",null,this);_a.set_taborder("59");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","30",null,"5","0",null,this);_a.set_taborder("60");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_Add_cditPrsszr","absolute",null,"11","64","19","134",null,this);_a.set_taborder("61");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.addChild(_a.name,_a);_a=new Button("btn_Delete_cditPrsszr","absolute",null,"11","64","19","67",null,this);_a.set_taborder("62");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");_a.getSetter("cancolumnchange").set("ds_frmtnPdDept_cancolumnchange");this.addChild(_a.name,_a);_a=new Button("btn_Cancel_cditPrsszr","absolute",null,"11","64","19","0",null,this);_a.set_taborder("63");_a.set_text("취소");_a.set_cssclass("btn_WF_Gridcnl");this.addChild(_a.name,_a);_a=new Static("sta_title02","absolute","120","11","346","19",null,null,this);_a.set_taborder("64");_a.set_text("(채무자 및 제3채무자는 거래처 명칭만 관리합니다.)");_a.style.set_color("blue");_a.style.set_padding("0 0 0 7");_a.style.set_align("left middle");_a.style.set_font("bold 9 Gulim");this.addChild(_a.name,_a);_a=new Layout("default","",1031,400,this,function(_b){_b.set_classname("CTR030100_T08");_b.set_titletext("채권가압류");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("CTR030100_T08.xfdl","lib::comInclude.xjs");this.addIncludeScript("CTR030100_T08.xfdl","mis_lib::misUtil.xjs");this.registerScript("CTR030100_T08.xfdl",function(){this.CTR030100_T08_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.CTR030100_T08_onload=function(_a,_b){};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){};this.btn_Add_cditPrsszr_onclick=function(_a,_b){if(this.parent.parent.ds_cntrct.getRowCount()==0){this.gfn_message("info.진행가능","계약정보 '추가' 혹은 '조회'");return false;}var _c=this.parent.parent.ds_cntrct.getColumn(0,"BSNS_CODE");var _d=this.parent.parent.ds_cntrct.getColumn(0,"CNTRCT_NO");var _e=this.parent.parent.ds_cditPrsszr.addRow();this.parent.parent.ds_cditPrsszr.setColumn(_e,"BSNS_CODE",_c);this.parent.parent.ds_cditPrsszr.setColumn(_e,"CNTRCT_NO",_d);};this.btn_Delete_cditPrsszr_onclick=function(_a,_b){if(this.parent.parent.ds_cntrct.getRowCount()==0){this.gfn_message("info.진행가능","계약정보 '추가' 혹은 '조회'");return false;}if(!this.gfn_message("confirm.삭제여부")){return false;}this.parent.parent.ds_cditPrsszr.deleteRow(this.parent.parent.ds_cditPrsszr.rowposition);};this.btn_Cancel_cditPrsszr_onclick=function(_a,_b){if(this.parent.parent.ds_cntrct.getRowCount()==0){this.gfn_message("info.진행가능","계약정보 '추가' 혹은 '조회'");return false;}if(Ex.util.isUpdated(this.parent.parent.ds_cditPrsszr)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}this.parent.parent.ds_cditPrsszr.reset();this.parent.parent.ds_cditPrsszr.applyChange();};this.grd_cditPrsszr_onexpandup=function(_a,_b){if(_b.col=='1'){var _c={arg_0:this};this.gfn_popup("CRDTR",800,530,"거래처 선택",_c,"mis_ctr::CTR010101_P02.xfdl","fn_popupCallBack",true);}else if(_b.col=='3'){var _c={arg_0:this};this.gfn_popup("DET_MAN",800,530,"거래처 선택",_c,"mis_ctr::CTR010101_P02.xfdl","fn_popupCallBack",true);}else if(_b.col=='4'){var _c={arg_0:this};this.gfn_popup("DEBTR_3",800,530,"거래처 선택",_c,"mis_ctr::CTR010101_P02.xfdl","fn_popupCallBack",true);}};this.fn_popupCallBack=function(_a,_b){if(_a=="CRDTR"){var _c=new Dataset();var _d=_c.loadXML(_b);if(_d){var _e=_c.getColumn(0,"BCNC_NM");var _f=this.parent.parent.ds_cditPrsszr.rowposition;this.parent.parent.ds_cditPrsszr.setColumn(_f,"CRDTR",_e);}}if(_a=="DET_MAN"){var _c=new Dataset();var _d=_c.loadXML(_b);if(_d){var _e=_c.getColumn(0,"BCNC_NM");var _f=this.parent.parent.ds_cditPrsszr.rowposition;this.parent.parent.ds_cditPrsszr.setColumn(_f,"DET_MAN",_e);}}if(_a=="DEBTR_3"){var _c=new Dataset();var _d=_c.loadXML(_b);if(_d){var _e=_c.getColumn(0,"BCNC_NM");var _f=this.parent.parent.ds_cditPrsszr.rowposition;this.parent.parent.ds_cditPrsszr.setColumn(_f,"DEBTR_3",_e);}}};});this.on_initEvent=function(){this.addEventHandler("onload",this.CTR030100_T08_onload,this);this.addEventHandler("oninit",this.CTR030100_T08_oninit,this);this.grd_cditPrsszr.addEventHandler("onexpandup",this.grd_cditPrsszr_onexpandup,this);this.btn_Add_cditPrsszr.addEventHandler("onclick",this.btn_Add_cditPrsszr_onclick,this);this.btn_Delete_cditPrsszr.addEventHandler("onclick",this.btn_Delete_cditPrsszr_onclick,this);this.btn_Cancel_cditPrsszr.addEventHandler("onclick",this.btn_Cancel_cditPrsszr_onclick,this);};this.loadIncludeScript("CTR030100_T08.xfdl");};})();