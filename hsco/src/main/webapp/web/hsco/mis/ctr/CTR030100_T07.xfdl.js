﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("CTR030100_T07");this.set_classname("CTR030100_T07");this.set_titletext("보증");this._setFormPosition(0,0,1031,400);}_a=new Grid("grd_cntrctAssrncDtls","absolute","0","35",null,null,"0","66.5%",this);_a.set_taborder("0");_a.set_binddataset("ds_cntrctAssrncDtls");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"110\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"400\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" colspan=\"2\" text=\"업체\"/><Cell col=\"3\" text=\"발행일자\"/><Cell col=\"4\" text=\"일련번호\"/><Cell col=\"5\" text=\"보험사명\"/><Cell col=\"6\" text=\"계약금액\"/><Cell col=\"7\" text=\"보증금액\"/><Cell col=\"8\" text=\"보험시작일\"/><Cell col=\"9\" text=\"보험만료일\"/><Cell col=\"10\" text=\"특기사항\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:BCNC_CODE\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'show' : 'hide'\"/><Cell col=\"2\" style=\"align:left middle;\" text=\"bind:BCNC_NM\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" style=\"align:center middle;\" text=\"bind:PBLICTE_DE\" calendardisplay=\"display\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" text=\"bind:SEQ\"/><Cell col=\"5\" edittype=\"normal\" style=\"align:left middle;\" text=\"bind:ICNY_NM\" editlimit=\"100\" editdisplay=\"display\" editlengthunit=\"ascii\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right middle;\" text=\"bind:CNTRCT_AMOUNT\" mask=\"###,###,###,###,###\" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right middle;\" text=\"bind:ASSRNC_AMOUNT\" mask=\"###,###,###,###,###\" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell col=\"8\" displaytype=\"date\" edittype=\"date\" style=\"align:center middle;\" text=\"bind:INSRNC_BGNDE\" calendardisplay=\"display\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"date\" edittype=\"date\" style=\"align:center middle;\" text=\"bind:INSRNC_ENDDE\" calendardisplay=\"display\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" edittype=\"normal\" style=\"align:left middle;\" text=\"bind:SPCABL_MATTER\" editlimit=\"500\" editdisplay=\"display\" editlengthunit=\"ascii\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("grd_flawAssrncDtls","absolute","0","42%",null,null,"0","33.25%",this);_a.set_taborder("1");_a.set_binddataset("ds_flawAssrncDtls");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"70\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"73\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"300\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" colspan=\"2\" text=\"업체\"/><Cell col=\"3\" text=\"공종\"/><Cell col=\"4\" text=\"담보년수\"/><Cell col=\"5\" text=\"공종별금액\"/><Cell col=\"6\" text=\"보증금액\"/><Cell col=\"7\" text=\"보험시작일\"/><Cell col=\"8\" text=\"보험만료일\"/><Cell col=\"9\" colspan=\"2\" text=\"검사부서\"/><Cell col=\"11\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:BCNC_CODE\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'show' : 'hide'\"/><Cell col=\"2\" style=\"align:left middle;\" text=\"bind:BCNC_NM\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:CNST_NM\" editlimit=\"150\" editdisplay=\"display\" editlengthunit=\"utf8\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:center middle;\" text=\"bind:MRTGG_YYCNT\" mask=\"#####\" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right middle;\" text=\"bind:CNST_ACCTO_AMOUNT\" mask=\"###,###,###,###,###\" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right middle;\" text=\"bind:FLAW_ASSRNC_AMOUNT\" mask=\"###,###,###,###,###\" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell col=\"7\" displaytype=\"date\" edittype=\"date\" text=\"bind:ASSRNC_BEGIN_DE\" calendardisplay=\"display\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"date\" edittype=\"date\" text=\"bind:ASSRNC_ENDDE\" calendardisplay=\"display\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" style=\"align: ;\" text=\"bind:PRSEC_DEPT_CODE\" expandshow=\"show\"/><Cell col=\"10\" style=\"align:left middle;\" text=\"bind:PRSEC_DEPT_NM\"/><Cell col=\"11\" edittype=\"normal\" style=\"align:left middle;\" text=\"bind:RM\" editlimit=\"300\" editdisplay=\"display\" editlengthunit=\"utf8\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("grd_entrpsAcctoSldrtyAssr","absolute","0","75.25%",null,null,"0","0",this);_a.set_taborder("2");_a.set_binddataset("ds_entrpsAcctoSldrtyAssr");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" colspan=\"2\" text=\"계약업체\"/><Cell col=\"3\" text=\"No\"/><Cell col=\"4\" colspan=\"2\" text=\"연대보증인\"/><Cell col=\"6\" text=\"등록일자\"/><Cell col=\"7\" text=\"해제일자\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" style=\"selectbackground:#ffffffff;\" text=\"bind:BCNC_CODE\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'show' : 'hide'\" suppress=\"1\"/><Cell col=\"2\" style=\"align:left middle;selectbackground:#ffffffff;\" text=\"bind:BCNC_NM\" suppress=\"1\"/><Cell col=\"3\" style=\"selectbackground: ;\" text=\"bind:SLDRTY_ASSRNC_NO\"/><Cell col=\"4\" text=\"bind:SLDRTY_GRNTR\" expandshow=\"show\"/><Cell col=\"5\" style=\"align:left middle;\" text=\"bind:SLDRTY_GRNTR_NM\" tooltiptext=\"bind:SLDRTY_GRNTR_NM\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"date\" style=\"align:center middle;\" text=\"bind:REGIST_DE\" calendardisplay=\"display\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"date\" edittype=\"date\" style=\"align:center middle;\" text=\"bind:RELIS_DE\" calendardisplay=\"display\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","30",null,"5","0",null,this);_a.set_taborder("3");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_entrpsAcctoSubcntrCnt","absolute","0","11","120","19",null,null,this);_a.set_taborder("4");_a.set_text("계약보증");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","1",null,"10","0",null,this);_a.set_taborder("5");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_flawAssrncDtls","absolute","0",null,"120","19",null,"59.25%",this);_a.set_taborder("6");_a.set_text("하자보증");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("sta_entrpsAcctoSldrtyAssr","absolute","0",null,"120","19",null,"26%",this);_a.set_taborder("7");_a.set_text("업체별 연대보증인");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","163",null,"5","0",null,this);_a.set_taborder("8");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","134",null,"10","0",null,this);_a.set_taborder("9");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","296",null,"5","0",null,this);_a.set_taborder("10");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","267",null,"10","0",null,this);_a.set_taborder("11");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_Add_cntrctAssrncDtls","absolute",null,"11","64","19","134",null,this);_a.set_taborder("12");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.addChild(_a.name,_a);_a=new Button("btn_Delete_cntrctAssrncDtls","absolute",null,"11","64","19","67",null,this);_a.set_taborder("13");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");_a.getSetter("cancolumnchange").set("ds_frmtnPdDept_cancolumnchange");this.addChild(_a.name,_a);_a=new Button("btn_Cancel_cntrctAssrncDtls","absolute",null,"11","64","19","0",null,this);_a.set_taborder("14");_a.set_text("취소");_a.set_cssclass("btn_WF_Gridcnl");this.addChild(_a.name,_a);_a=new Button("btn_Add_flawAssrncDtls","absolute",null,null,"64","19","134","59.25%",this);_a.set_taborder("15");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.addChild(_a.name,_a);_a=new Button("btn_Delete_flawAssrncDtls","absolute",null,null,"64","19","67","59.25%",this);_a.set_taborder("16");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");_a.getSetter("cancolumnchange").set("ds_frmtnPdDept_cancolumnchange");this.addChild(_a.name,_a);_a=new Button("btn_Cancel_flawAssrncDtls","absolute",null,null,"64","19","0","59.25%",this);_a.set_taborder("17");_a.set_text("취소");_a.set_cssclass("btn_WF_Gridcnl");this.addChild(_a.name,_a);_a=new Button("btn_Add_entrpsAcctoSldrtyAssr","absolute",null,null,"64","19","134","26%",this);_a.set_taborder("18");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.addChild(_a.name,_a);_a=new Button("btn_Delete_entrpsAcctoSldrtyAssr","absolute",null,null,"64","19","67","26%",this);_a.set_taborder("19");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");_a.getSetter("cancolumnchange").set("ds_frmtnPdDept_cancolumnchange");this.addChild(_a.name,_a);_a=new Button("btn_Cancel_entrpsAcctoSldrtyAssr","absolute",null,null,"64","19","0","26%",this);_a.set_taborder("20");_a.set_text("취소");_a.set_cssclass("btn_WF_Gridcnl");this.addChild(_a.name,_a);_a=new Layout("default","",1031,400,this,function(_b){_b.set_classname("CTR030100_T07");_b.set_titletext("보증");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("CTR030100_T07.xfdl","lib::comInclude.xjs");this.addIncludeScript("CTR030100_T07.xfdl","mis_lib::misUtil.xjs");this.registerScript("CTR030100_T07.xfdl",function(){this.CTR030100_T07_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.CTR030100_T07_onload=function(_a,_b){};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){};this.btn_Add_cntrctAssrncDtls_onclick=function(_a,_b){if(this.parent.parent.ds_cntrct.getRowCount()==0){this.gfn_message("info.진행가능","계약정보 '추가' 혹은 '조회'");return false;}var _c=this.parent.parent.ds_cntrct.getColumn(0,"CNTRCT_NO");var _d=this.parent.parent.ds_cntrctAssrncDtls.addRow();this.parent.parent.ds_cntrctAssrncDtls.setColumn(_d,"CNTRCT_NO",_c);};this.btn_Delete_cntrctAssrncDtls_onclick=function(_a,_b){if(this.parent.parent.ds_cntrct.getRowCount()==0){this.gfn_message("info.진행가능","계약정보 '추가' 혹은 '조회'");return false;}if(!this.gfn_message("confirm.삭제여부")){return false;}this.parent.parent.ds_cntrctAssrncDtls.deleteRow(this.parent.parent.ds_cntrctAssrncDtls.rowposition);};this.btn_Cancel_cntrctAssrncDtls_onclick=function(_a,_b){if(this.parent.parent.ds_cntrct.getRowCount()==0){this.gfn_message("info.진행가능","계약정보 '추가' 혹은 '조회'");return false;}if(Ex.util.isUpdated(this.parent.parent.ds_cntrctAssrncDtls)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}this.parent.parent.ds_cntrctAssrncDtls.reset();this.parent.parent.ds_cntrctAssrncDtls.applyChange();};this.btn_Add_flawAssrncDtls_onclick=function(_a,_b){if(this.parent.parent.ds_cntrct.getRowCount()==0){this.gfn_message("info.진행가능","계약정보 '추가' 혹은 '조회'");return false;}var _c=this.parent.parent.ds_cntrct.getColumn(0,"CNTRCT_NO");var _d=this.parent.parent.ds_flawAssrncDtls.addRow();this.parent.parent.ds_flawAssrncDtls.setColumn(_d,"CNTRCT_NO",_c);};this.btn_Delete_flawAssrncDtls_onclick=function(_a,_b){if(this.parent.parent.ds_cntrct.getRowCount()==0){this.gfn_message("info.진행가능","계약정보 '추가' 혹은 '조회'");return false;}if(!this.gfn_message("confirm.삭제여부")){return false;}this.parent.parent.ds_flawAssrncDtls.deleteRow(this.parent.parent.ds_flawAssrncDtls.rowposition);};this.btn_Cancel_flawAssrncDtls_onclick=function(_a,_b){if(this.parent.parent.ds_cntrct.getRowCount()==0){this.gfn_message("info.진행가능","계약정보 '추가' 혹은 '조회'");return false;}if(Ex.util.isUpdated(this.parent.parent.ds_flawAssrncDtls)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}this.parent.parent.ds_flawAssrncDtls.reset();this.parent.parent.ds_flawAssrncDtls.applyChange();};this.btn_Add_entrpsAcctoSldrtyAssr_onclick=function(_a,_b){if(this.parent.parent.ds_cntrct.getRowCount()==0){this.gfn_message("info.진행가능","계약정보 '추가' 혹은 '조회'");return false;}var _c=this.parent.parent.ds_cntrct.getColumn(0,"CNTRCT_NO");var _d=this.parent.parent.ds_entrpsAcctoSldrtyAssr.addRow();this.parent.parent.ds_entrpsAcctoSldrtyAssr.setColumn(_d,"CNTRCT_NO",_c);};this.btn_Delete_entrpsAcctoSldrtyAssr_onclick=function(_a,_b){if(this.parent.parent.ds_cntrct.getRowCount()==0){this.gfn_message("info.진행가능","계약정보 '추가' 혹은 '조회'");return false;}if(!this.gfn_message("confirm.삭제여부")){return false;}this.parent.parent.ds_entrpsAcctoSldrtyAssr.deleteRow(this.parent.parent.ds_entrpsAcctoSldrtyAssr.rowposition);};this.btn_Cancel_entrpsAcctoSldrtyAssr_onclick=function(_a,_b){if(this.parent.parent.ds_cntrct.getRowCount()==0){this.gfn_message("info.진행가능","계약정보 '추가' 혹은 '조회'");return false;}if(Ex.util.isUpdated(this.parent.parent.ds_entrpsAcctoSldrtyAssr)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}this.parent.parent.ds_entrpsAcctoSldrtyAssr.reset();this.parent.parent.ds_entrpsAcctoSldrtyAssr.applyChange();};this.grd_cntrctAssrncDtls_onexpandup=function(_a,_b){if(_b.col==1){var _c={arg_0:this,popMode:"원도급",bsnsCode:this.parent.parent.ds_cntrct.getColumn(0,"BSNS_CODE"),bsnsNm:this.parent.parent.ds_cntrct.getColumn(0,"BSNS_NM"),cntrctNo:this.parent.parent.ds_cntrct.getColumn(0,"CNTRCT_NO"),cntrctNm:this.parent.parent.ds_cntrct.getColumn(0,"CNTRCT_NM")};this.gfn_popup("G1_BCNC_CODE",800,530,"거래처 선택",_c,"mis_ctr::CTR030100_P10.xfdl","fn_popupCallBack",true);}if(_b.col==8){var _c={arg_0:this};this.gfn_popup("G1_DEPT_CODE",800,530,"부서 선택",_c,"mis_ctr::CTR030100_P10.xfdl","fn_popupCallBack",true);}};this.grd_flawAssrncDtls_onexpandup=function(_a,_b){if(_b.col==1){var _c={arg_0:this,popMode:"원도급",bsnsCode:this.parent.parent.ds_cntrct.getColumn(0,"BSNS_CODE"),bsnsNm:this.parent.parent.ds_cntrct.getColumn(0,"BSNS_NM"),cntrctNo:this.parent.parent.ds_cntrct.getColumn(0,"CNTRCT_NO"),cntrctNm:this.parent.parent.ds_cntrct.getColumn(0,"CNTRCT_NM")};this.gfn_popup("G2_BCNC_CODE",800,530,"거래처 선택",_c,"mis_ctr::CTR030100_P10.xfdl","fn_popupCallBack",true);}if(_b.col==9){var _c={arg_0:this};this.gfn_popup("G2_DEPT_CODE",400,400,"부서선택",_c,"com::deptCode_P01.xfdl","fn_popupCallBack",true);}};this.grd_entrpsAcctoSldrtyAssr_onexpandup=function(_a,_b){if(_b.col==1){var _c={arg_0:this,popMode:"원도급",bsnsCode:this.parent.parent.ds_cntrct.getColumn(0,"BSNS_CODE"),bsnsNm:this.parent.parent.ds_cntrct.getColumn(0,"BSNS_NM"),cntrctNo:this.parent.parent.ds_cntrct.getColumn(0,"CNTRCT_NO"),cntrctNm:this.parent.parent.ds_cntrct.getColumn(0,"CNTRCT_NM")};this.gfn_popup("G3_BCNC_CODE",800,530,"계약업체 선택",_c,"mis_ctr::CTR030100_P10.xfdl","fn_popupCallBack",true);}if(_b.col==4){var _c={arg_0:this};this.gfn_popup("G3_SLDRTY_GRNTR",800,530,"거래처 선택",_c,"mis_ctr::CTR010101_P02.xfdl","fn_popupCallBack",true);}};this.fn_popupCallBack=function(_a,_b){if(_a=="G1_BCNC_CODE"){var _c=new Dataset();var _d=_c.loadXML(_b);if(_d){var _e=_c.getColumn(0,"BCNC_CODE");var _f=_c.getColumn(0,"BCNC_NM");var _g=this.parent.parent.ds_cntrctAssrncDtls.rowposition;this.parent.parent.ds_cntrctAssrncDtls.setColumn(_g,"BCNC_CODE",_e);this.parent.parent.ds_cntrctAssrncDtls.setColumn(_g,"BCNC_NM",_f);}}if(_a=="G2_BCNC_CODE"){var _c=new Dataset();var _d=_c.loadXML(_b);if(_d){var _e=_c.getColumn(0,"BCNC_CODE");var _f=_c.getColumn(0,"BCNC_NM");var _g=this.parent.parent.ds_flawAssrncDtls.rowposition;this.parent.parent.ds_flawAssrncDtls.setColumn(_g,"BCNC_CODE",_e);this.parent.parent.ds_flawAssrncDtls.setColumn(_g,"BCNC_NM",_f);}}if(_a=="G2_DEPT_CODE"){var _c=new Dataset();var _d=_c.loadXML(_b);if(_d){var _h=_c.getColumn(0,"DEPT_CODE");var _i=_c.getColumn(0,"DEPT_NM");var _j=this.parent.parent.ds_flawAssrncDtls.rowposition;this.parent.parent.ds_flawAssrncDtls.setColumn(_j,"PRSEC_DEPT_CODE",_h);this.parent.parent.ds_flawAssrncDtls.setColumn(_j,"PRSEC_DEPT_NM",_i);}}if(_a=="G3_BCNC_CODE"){var _c=new Dataset();var _d=_c.loadXML(_b);if(_d){var _e=_c.getColumn(0,"BCNC_CODE");var _f=_c.getColumn(0,"BCNC_NM");var _g=this.parent.parent.ds_entrpsAcctoSldrtyAssr.rowposition;this.parent.parent.ds_entrpsAcctoSldrtyAssr.setColumn(_g,"BCNC_CODE",_e);this.parent.parent.ds_entrpsAcctoSldrtyAssr.setColumn(_g,"BCNC_NM",_f);}}if(_a=="G3_BCNC_CODE"){var _c=new Dataset();var _d=_c.loadXML(_b);if(_d){var _e=_c.getColumn(0,"BCNC_CODE");var _f=_c.getColumn(0,"BCNC_NM");var _g=this.parent.parent.ds_entrpsAcctoSldrtyAssr.rowposition;this.parent.parent.ds_entrpsAcctoSldrtyAssr.setColumn(_g,"BCNC_CODE",_e);this.parent.parent.ds_entrpsAcctoSldrtyAssr.setColumn(_g,"BCNC_NM",_f);}}if(_a=="G3_SLDRTY_GRNTR"){var _c=new Dataset();var _d=_c.loadXML(_b);if(_d){var _e=_c.getColumn(0,"BCNC_CODE");var _f=_c.getColumn(0,"BCNC_NM");var _g=this.parent.parent.ds_entrpsAcctoSldrtyAssr.rowposition;this.parent.parent.ds_entrpsAcctoSldrtyAssr.setColumn(_g,"SLDRTY_GRNTR",_e);this.parent.parent.ds_entrpsAcctoSldrtyAssr.setColumn(_g,"SLDRTY_GRNTR_NM",_f);}}};});this.on_initEvent=function(){this.addEventHandler("onload",this.CTR030100_T07_onload,this);this.addEventHandler("oninit",this.CTR030100_T07_oninit,this);this.grd_cntrctAssrncDtls.addEventHandler("onexpandup",this.grd_cntrctAssrncDtls_onexpandup,this);this.grd_flawAssrncDtls.addEventHandler("onexpandup",this.grd_flawAssrncDtls_onexpandup,this);this.grd_entrpsAcctoSldrtyAssr.addEventHandler("onexpandup",this.grd_entrpsAcctoSldrtyAssr_onexpandup,this);this.btn_Add_cntrctAssrncDtls.addEventHandler("onclick",this.btn_Add_cntrctAssrncDtls_onclick,this);this.btn_Delete_cntrctAssrncDtls.addEventHandler("onclick",this.btn_Delete_cntrctAssrncDtls_onclick,this);this.btn_Cancel_cntrctAssrncDtls.addEventHandler("onclick",this.btn_Cancel_cntrctAssrncDtls_onclick,this);this.btn_Add_flawAssrncDtls.addEventHandler("onclick",this.btn_Add_flawAssrncDtls_onclick,this);this.btn_Delete_flawAssrncDtls.addEventHandler("onclick",this.btn_Delete_flawAssrncDtls_onclick,this);this.btn_Cancel_flawAssrncDtls.addEventHandler("onclick",this.btn_Cancel_flawAssrncDtls_onclick,this);this.btn_Add_entrpsAcctoSldrtyAssr.addEventHandler("onclick",this.btn_Add_entrpsAcctoSldrtyAssr_onclick,this);this.btn_Delete_entrpsAcctoSldrtyAssr.addEventHandler("onclick",this.btn_Delete_entrpsAcctoSldrtyAssr_onclick,this);this.btn_Cancel_entrpsAcctoSldrtyAssr.addEventHandler("onclick",this.btn_Cancel_entrpsAcctoSldrtyAssr_onclick,this);};this.loadIncludeScript("CTR030100_T07.xfdl");};})();