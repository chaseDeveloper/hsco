﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("CTR030100_T04");this.set_classname("CTR030100_T04");this.set_titletext("입찰공고");this._setFormPosition(0,0,1031,400);}_a=new Grid("grd_bidDtls","absolute","0","35",null,null,"0","0",this);_a.set_taborder("57");_a.set_binddataset("ds_bidDtls");_a.set_cellsizingtype("col");_a.set_autoenter("select");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"200\"/><Column size=\"130\"/><Column size=\"400\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"입찰번호\"/><Cell col=\"1\" text=\"입찰자\"/><Cell col=\"2\" text=\"입찰금액\"/><Cell col=\"3\" text=\"적요\"/></Band><Band id=\"body\"><Cell text=\"bind:BID_NO\"/><Cell col=\"1\" edittype=\"normal\" style=\"align:left middle;\" text=\"bind:BID_MAN\" editlimit=\"100\" editlengthunit=\"ascii\" expandshow=\"show\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right middle;\" text=\"bind:BID_AMOUNT\" mask=\"###,###,###,###,###\" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell col=\"3\" edittype=\"normal\" style=\"align:left middle;\" text=\"bind:SUMRY\" editlimit=\"200\" editdisplay=\"display\" editlengthunit=\"ascii\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합 계\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;BID_AMOUNT&quot;)\"/><Cell col=\"3\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","1",null,"10","0",null,this);_a.set_taborder("58");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_bidDtls","absolute","0","11","120","19",null,null,this);_a.set_taborder("59");_a.set_text("입찰공고");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","30",null,"5","0",null,this);_a.set_taborder("60");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_Add_bidDtls","absolute",null,"11","64","19","134",null,this);_a.set_taborder("61");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.addChild(_a.name,_a);_a=new Button("btn_Delete_bidDtls","absolute",null,"11","64","19","67",null,this);_a.set_taborder("62");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");_a.getSetter("cancolumnchange").set("ds_frmtnPdDept_cancolumnchange");this.addChild(_a.name,_a);_a=new Button("btn_Cancel_bidDtls","absolute",null,"11","64","19","0",null,this);_a.set_taborder("63");_a.set_text("취소");_a.set_cssclass("btn_WF_Gridcnl");this.addChild(_a.name,_a);_a=new Static("sta_title02","absolute","120","11","298","19",null,null,this);_a.set_taborder("64");_a.set_text("(입찰자는 거래처 명칭만 관리합니다.)");_a.style.set_color("blue");_a.style.set_padding("0 0 0 7");_a.style.set_align("left middle");_a.style.set_font("bold 9 Gulim");this.addChild(_a.name,_a);_a=new Layout("default","",1031,400,this,function(_b){_b.set_classname("CTR030100_T04");_b.set_titletext("입찰공고");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("CTR030100_T04.xfdl","lib::comInclude.xjs");this.addIncludeScript("CTR030100_T04.xfdl","mis_lib::misUtil.xjs");this.registerScript("CTR030100_T04.xfdl",function(){this.CTR030100_T04_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.CTR030100_T04_onload=function(_a,_b){};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){};this.btn_Add_bidDtls_onclick=function(_a,_b){if(this.parent.parent.ds_cntrct.getRowCount()==0){this.gfn_message("info.진행가능","계약정보 '추가' 혹은 '조회'");return false;}var _c=this.parent.parent.ds_cntrct.getColumn(0,"BSNS_CODE");var _d=this.parent.parent.ds_cntrct.getColumn(0,"CNTRCT_NO");var _e=this.parent.parent.ds_bidDtls.addRow();this.parent.parent.ds_bidDtls.setColumn(_e,"BSNS_CODE",_c);this.parent.parent.ds_bidDtls.setColumn(_e,"CNTRCT_NO",_d);};this.btn_Delete_bidDtls_onclick=function(_a,_b){if(this.parent.parent.ds_cntrct.getRowCount()==0){this.gfn_message("info.진행가능","계약정보 '추가' 혹은 '조회'");return false;}if(!this.gfn_message("confirm.삭제여부")){return false;}this.parent.parent.ds_bidDtls.deleteRow(this.parent.parent.ds_bidDtls.rowposition);};this.btn_Cancel_bidDtls_onclick=function(_a,_b){if(this.parent.parent.ds_cntrct.getRowCount()==0){this.gfn_message("info.진행가능","계약정보 '추가' 혹은 '조회'");return false;}if(Ex.util.isUpdated(this.parent.parent.ds_bidDtls)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}this.parent.parent.ds_bidDtls.reset();this.parent.parent.ds_bidDtls.applyChange();};this.grd_bidDtls_onexpandup=function(_a,_b){if(_b.col=='1'){var _c={arg_0:this};this.gfn_popup("CTR010101_P02",800,530,"거래처 선택",_c,"mis_ctr::CTR010101_P02.xfdl","fn_popupCallBack",true);}};this.fn_popupCallBack=function(_a,_b){if(_a=="CTR010101_P02"){var _c=new Dataset();var _d=_c.loadXML(_b);if(_d){var _e=_c.getColumn(0,"BCNC_NM");var _f=this.parent.parent.ds_bidDtls.rowposition;this.parent.parent.ds_bidDtls.setColumn(_f,"BID_MAN",_e);}}};});this.on_initEvent=function(){this.addEventHandler("onload",this.CTR030100_T04_onload,this);this.addEventHandler("oninit",this.CTR030100_T04_oninit,this);this.grd_bidDtls.addEventHandler("onexpandup",this.grd_bidDtls_onexpandup,this);this.btn_Add_bidDtls.addEventHandler("onclick",this.btn_Add_bidDtls_onclick,this);this.btn_Delete_bidDtls.addEventHandler("onclick",this.btn_Delete_bidDtls_onclick,this);this.btn_Cancel_bidDtls.addEventHandler("onclick",this.btn_Cancel_bidDtls_onclick,this);};this.loadIncludeScript("CTR030100_T04.xfdl");};})();