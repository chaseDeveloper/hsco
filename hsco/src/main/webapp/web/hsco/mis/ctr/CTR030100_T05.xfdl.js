﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("CTR030100_T05");this.set_classname("CTR030100_T05");this.set_titletext("계약업체");this._setFormPosition(0,0,1031,400);}_a=new Grid("grd_entrpsAcctoCntrctDtls","absolute","0","35",null,null,"0","0",this);_a.set_taborder("6");_a.set_binddataset("ds_entrpsAcctoCntrctDtls");_a.set_cellsizingtype("col");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"300\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" colspan=\"2\" text=\"업체\"/><Cell col=\"3\" text=\"주관여부\"/><Cell col=\"4\" text=\"지분율\"/><Cell col=\"5\" text=\"분담내용\"/><Cell col=\"6\" text=\"계약금액\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:BCNC_CODE\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'show' : 'hide'\"/><Cell col=\"2\" style=\"align:left middle;\" text=\"bind:BCNC_NM\" tooltiptext=\"bind:BCNC_NM\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:MNGT_AT\" combodataset=\"ds_ctr046\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodisplay=\"display\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:center middle;\" text=\"bind:QOTA_RT\" mask=\"###.##\" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell col=\"5\" edittype=\"normal\" style=\"align:left middle;\" text=\"bind:SHARE_CN\" editlimit=\"100\" editdisplay=\"display\" editlengthunit=\"ascii\" tooltiptext=\"bind:SHARE_CN\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right middle;\" text=\"bind:CNTRCT_AMOUNT\" mask=\"###,###,###,###,###\" editdisplay=\"display\" editlimitbymask=\"both\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"3\" text=\"총 지분율\"/><Cell col=\"4\" style=\"align:center middle;\" text=\"expr:nexacro.round(dataset.getSum(&quot;QOTA_RT&quot;),2) + &quot; %&quot;\"/><Cell col=\"5\" text=\"총 계\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;CNTRCT_AMOUNT&quot;)\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","30",null,"5","0",null,this);_a.set_taborder("5");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_entrpsAcctoCntrctDtls","absolute","0","11","120","19",null,null,this);_a.set_taborder("1");_a.set_text("업체별계약내역");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","1",null,"10","0",null,this);_a.set_taborder("0");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_Add_entrpsAcctoCntrctDtls","absolute",null,"11","64","19","134",null,this);_a.set_taborder("2");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.addChild(_a.name,_a);_a=new Button("btn_Delete_entrpsAcctoCntrctDtls","absolute",null,"11","64","19","67",null,this);_a.set_taborder("3");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");_a.getSetter("cancolumnchange").set("ds_frmtnPdDept_cancolumnchange");this.addChild(_a.name,_a);_a=new Button("btn_Cancel_entrpsAcctoCntrctDtls","absolute",null,"11","64","19","0",null,this);_a.set_taborder("4");_a.set_text("취소");_a.set_cssclass("btn_WF_Gridcnl");this.addChild(_a.name,_a);_a=new Layout("default","",1031,400,this,function(_b){_b.set_classname("CTR030100_T05");_b.set_titletext("계약업체");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("CTR030100_T05.xfdl","lib::comInclude.xjs");this.addIncludeScript("CTR030100_T05.xfdl","mis_lib::misUtil.xjs");this.registerScript("CTR030100_T05.xfdl",function(){this.CTR030100_T05_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.CTR030100_T05_onload=function(_a,_b){};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){};this.btn_Add_entrpsAcctoCntrctDtls_onclick=function(_a,_b){if(this.parent.parent.ds_cntrct.getRowCount()==0){this.gfn_message("info.진행가능","계약정보 '추가' 혹은 '조회'");return false;}var _c=this.parent.parent.ds_cntrct.getColumn(0,"BSNS_CODE");var _d=this.parent.parent.ds_cntrct.getColumn(0,"CNTRCT_NO");var _e=this.parent.parent.ds_entrpsAcctoCntrctDtls.addRow();this.parent.parent.ds_entrpsAcctoCntrctDtls.setColumn(_e,"BSNS_CODE",_c);this.parent.parent.ds_entrpsAcctoCntrctDtls.setColumn(_e,"CNTRCT_NO",_d);};this.btn_Delete_entrpsAcctoCntrctDtls_onclick=function(_a,_b){if(this.parent.parent.ds_cntrct.getRowCount()==0){this.gfn_message("info.진행가능","계약정보 '추가' 혹은 '조회'");return false;}var _c="계약업체 삭제 시, 해당 업체와 연관된 정보가 모두 제거됩니다."+"\n";_c+="계속 진행하시겠습니까?"+"\n\n";_c+="[자동삭제대상]"+"\n";_c+="하도급업체, 계약보증, 하자보증, 업체별연대보증인,"+"\n";_c+="업체별계약변경, 업체별계약보증변경,"+"\n";if(!confirm(_c)){return false;}this.parent.parent.ds_entrpsAcctoCntrctDtls.deleteRow(this.parent.parent.ds_entrpsAcctoCntrctDtls.rowposition);};this.btn_Cancel_entrpsAcctoCntrctDtls_onclick=function(_a,_b){if(this.parent.parent.ds_cntrct.getRowCount()==0){this.gfn_message("info.진행가능","계약정보 '추가' 혹은 '조회'");return false;}if(Ex.util.isUpdated(this.parent.parent.ds_entrpsAcctoCntrctDtls)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}this.parent.parent.ds_entrpsAcctoCntrctDtls.reset();this.parent.parent.ds_entrpsAcctoCntrctDtls.applyChange();};this.grd_entrpsAcctoCntrctDtls_onexpandup=function(_a,_b){var _c={arg_0:this};this.gfn_popup("CTR010101_P02",800,530,"거래처 선택",_c,"mis_ctr::CTR010101_P02.xfdl","fn_popupCallBack",true);};this.fn_popupCallBack=function(_a,_b){if(_a=="CTR010101_P02"){var _c=new Dataset();var _d=_c.loadXML(_b);if(_d){var _e=_c.getColumn(0,"BCNC_CODE");var _f=_c.getColumn(0,"BCNC_NM");var _g=this.parent.parent.ds_entrpsAcctoCntrctDtls.findRow("BCNC_CODE",_e);if(_g> -1){var _h="[업체별계약내역]"+"\n\n";_h+="선택하신 '"+_f+"("+_e+")'는 이미 존재합니다."+"\n";_h+="("+(_g+1)+"행)"+"\n\n";_h+="다른 거래처를 선택하여 주시기 바랍니다.";alert(_h);return false;}else{var _i=this.parent.parent.ds_entrpsAcctoCntrctDtls.rowposition;this.parent.parent.ds_entrpsAcctoCntrctDtls.setColumn(_i,"BCNC_CODE",_e);this.parent.parent.ds_entrpsAcctoCntrctDtls.setColumn(_i,"BCNC_NM",_f);}}}};});this.on_initEvent=function(){this.addEventHandler("onload",this.CTR030100_T05_onload,this);this.addEventHandler("oninit",this.CTR030100_T05_oninit,this);this.grd_entrpsAcctoCntrctDtls.addEventHandler("onexpandup",this.grd_entrpsAcctoCntrctDtls_onexpandup,this);this.btn_Add_entrpsAcctoCntrctDtls.addEventHandler("onclick",this.btn_Add_entrpsAcctoCntrctDtls_onclick,this);this.btn_Delete_entrpsAcctoCntrctDtls.addEventHandler("onclick",this.btn_Delete_entrpsAcctoCntrctDtls_onclick,this);this.btn_Cancel_entrpsAcctoCntrctDtls.addEventHandler("onclick",this.btn_Cancel_entrpsAcctoCntrctDtls_onclick,this);};this.loadIncludeScript("CTR030100_T05.xfdl");};})();