﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM080306_T03");this.set_classname("HRM080306_T03");this.set_titletext("정액지급");this._setFormPosition(0,0,1024,514);}_a=new Static("Static09","absolute","0","0",null,"10","0",null,this);_a.set_taborder("4");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_fxamtPymnt","absolute","0","10","150","19",null,null,this);_a.set_taborder("5");_a.set_text("정액지급");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static07","absolute","0","29",null,"5","0",null,this);_a.set_taborder("6");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_fxamtPymnt","absolute","0","34",null,null,"0","0",this);_a.set_taborder("3");_a.set_binddataset("ds_fxamtPymnt");_a.set_autoenter("select");_a.set_autoupdatetype("itemselect");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"110\"/><Column size=\"150\"/><Column size=\"500\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"사원명\"/><Cell col=\"2\" text=\"여비구분\"/><Cell col=\"3\" text=\"사용일자\"/><Cell col=\"4\" text=\"사용액\"/><Cell col=\"5\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" style=\"padding:0 0 0 5;\" text=\"bind:EMPNM\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"expr:comp.parent.fn_getEnableAt() != '1' ? 'combo' : 'none'\" style=\"padding:0 0 0 5;\" text=\"bind:EDCCT_SE\" combodataset=\"ds_hrm055\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodisplay=\"expr:comp.parent.fn_getEnableAt() != '1' ? 'display' : 'edit'\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"expr:comp.parent.fn_getEnableAt() != '1' ? 'date' : 'none'\" text=\"bind:USE_DE\" calendardisplay=\"expr:comp.parent.fn_getEnableAt() != '1' ? 'display' : 'edit'\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"expr:comp.parent.fn_getEnableAt() != '1' ? 'masknumber' : 'none'\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:USE_AM\" mask=\"###,###,###,###,###\" editdisplay=\"expr:comp.parent.fn_getEnableAt() != '1' ? 'display' : 'edit'\"/><Cell col=\"5\" edittype=\"expr:comp.parent.fn_getEnableAt() != '1' ? 'normal' : 'none'\" style=\"padding:0 0 0 5;\" text=\"bind:RM\" editlimit=\"450\" editdisplay=\"expr:comp.parent.fn_getEnableAt() != '1' ? 'display' : 'edit'\" editlengthunit=\"utf8\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_Delete","absolute",null,"10","64","19","67",null,this);_a.set_taborder("1");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");this.addChild(_a.name,_a);_a=new Button("btn_Cancel","absolute",null,"10","64","19","0",null,this);_a.set_taborder("2");_a.set_text("취소");_a.set_cssclass("btn_WF_Gridcnl");this.addChild(_a.name,_a);_a=new Button("btn_Add","absolute",null,"10","64","19","134",null,this);_a.set_taborder("0");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.addChild(_a.name,_a);_a=new Layout("default","",1024,514,this,function(_b){_b.set_classname("HRM080306_T03");_b.set_titletext("정액지급");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("HRM080306_T03.xfdl","lib::comInclude.xjs");this.registerScript("HRM080306_T03.xfdl",function(){this.btn_Add_onclick=function(_a,_b){var _c=this.parent.parent.ds_edcList.rowposition;var _d=this.parent.parent.ds_edcList.getColumn(_c,"EXCCLC_CONFM_AT");var _e=this.parent.parent.ds_edcList.getColumn(_c,"CNFIRM_AT");var _f=this.parent.parent.ds_edcList.getColumn(_c,"EXCCLC_AT");if(_c<0){this.gfn_message("info.처리불가","선택된 교육이 존재하지 않습니다.");return false;}if(_d=='1'||_e=='1'||_f=='1'){this.gfn_message("info.처리불가","승인 또는 정산이 완료된 교육은 수정할 수 없습니다.");return false;}var _g=this.parent.parent.ds_edcList.getColumn(_c,"YEAR");var _h=this.parent.parent.ds_edcList.getColumn(_c,"EMPNO");var _i=this.parent.parent.ds_edcList.getColumn(_c,"EMPNM");var _j=this.parent.parent.ds_edcList.getColumn(_c,"SN");var _k=this.parent.parent.ds_edcList.getColumn(_c,"EDC_TY");var _l='003';var _m=this.parent.parent.ds_hrm055.getColumn(0,"CODE");var _n=this.parent.parent.ds_fxamtPymnt.addRow();this.parent.parent.ds_fxamtPymnt.setColumn(_n,"YEAR",_g);this.parent.parent.ds_fxamtPymnt.setColumn(_n,"EMPNO",_h);this.parent.parent.ds_fxamtPymnt.setColumn(_n,"EMPNM",_i);this.parent.parent.ds_fxamtPymnt.setColumn(_n,"SN",_j);this.parent.parent.ds_fxamtPymnt.setColumn(_n,"EDC_TY",_k);this.parent.parent.ds_fxamtPymnt.setColumn(_n,"EXCCLC_SE",_l);this.parent.parent.ds_fxamtPymnt.setColumn(_n,"EDCCT_SE",_m);};this.btn_Delete_onclick=function(_a,_b){var _c=this.parent.parent.ds_edcList.rowposition;var _d=this.parent.parent.ds_edcList.getColumn(_c,"EXCCLC_CONFM_AT");var _e=this.parent.parent.ds_edcList.getColumn(_c,"CNFIRM_AT");var _f=this.parent.parent.ds_edcList.getColumn(_c,"EXCCLC_AT");if(_d=='1'||_e=='1'||_f=='1'){this.gfn_message("info.처리불가","승인 또는 정산이 완료된 교육은 수정할 수 없습니다.");return false;}if(!this.gfn_message("confirm.삭제여부")){return false;}this.parent.parent.fn_cal_Amt(this.parent.parent.ds_fxamtPymnt,"can");this.parent.parent.ds_fxamtPymnt.deleteRow(this.parent.parent.ds_fxamtPymnt.rowposition);this.parent.parent.fn_cal_Amt(this.parent.parent.ds_fxamtPymnt,"on");};this.btn_Cancel_onclick=function(_a,_b){var _c=this.parent.parent.ds_edcList.rowposition;var _d=this.parent.parent.ds_edcList.getColumn(_c,"EXCCLC_CONFM_AT");var _e=this.parent.parent.ds_edcList.getColumn(_c,"CNFIRM_AT");var _f=this.parent.parent.ds_edcList.getColumn(_c,"EXCCLC_AT");if(_d=='1'||_e=='1'||_f=='1'){this.gfn_message("info.처리불가","승인 또는 정산이 완료된 교육은 수정할 수 없습니다.");return false;}if(Ex.util.isUpdated(this.parent.parent.ds_fxamtPymnt)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}this.parent.parent.fn_cal_Amt(this.parent.parent.ds_fxamtPymnt,"can");this.parent.parent.ds_fxamtPymnt.reset();this.parent.parent.ds_fxamtPymnt.applyChange();this.parent.parent.fn_cal_Amt(this.parent.parent.ds_fxamtPymnt,"on");};this.fn_getEnableAt=function(){var _a='0';var _b=this.parent.parent.ds_edcList.rowposition;var _c=this.parent.parent.ds_edcList.getColumn(_b,"EXCCLC_CONFM_AT");var _d=this.parent.parent.ds_edcList.getColumn(_b,"CNFIRM_AT");var _e=this.parent.parent.ds_edcList.getColumn(_b,"EXCCLC_AT");if(_c=='1'||_d=='1'||_e=='1'){_a='1';}return _a;};});this.on_initEvent=function(){this.btn_Delete.addEventHandler("onclick",this.btn_Delete_onclick,this);this.btn_Cancel.addEventHandler("onclick",this.btn_Cancel_onclick,this);this.btn_Add.addEventHandler("onclick",this.btn_Add_onclick,this);};this.loadIncludeScript("HRM080306_T03.xfdl");};})();