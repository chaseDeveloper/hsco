﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM080202_T07");this.set_classname("HRM080202_T07");this.set_titletext("단체교육계획");this._setFormPosition(0,0,1059,514);}_a=new Static("Static09","absolute","0","0",null,"10","0",null,this);_a.set_taborder("0");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static07","absolute","0","67",null,"5","0",null,this);_a.set_taborder("1");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_grupEdcPlan","absolute","0","10","670","19",null,null,this);_a.set_taborder("2");_a.set_text("작성시 유의사항");_a.set_cssclass("sta_WF_Title03");this.addChild(_a.name,_a);_a=new Button("btn_Add","absolute",null,"48","64","19","134",null,this);_a.set_taborder("3");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.addChild(_a.name,_a);_a=new Button("btn_Delete","absolute",null,"48","64","19","67",null,this);_a.set_taborder("4");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");this.addChild(_a.name,_a);_a=new Button("btn_Cancel","absolute",null,"48","64","19","0",null,this);_a.set_taborder("5");_a.set_text("취소");_a.set_cssclass("btn_WF_Gridcnl");this.addChild(_a.name,_a);_a=new Grid("grd_grupEdcPlan","absolute","0","72",null,null,"0","0",this);_a.set_taborder("6");_a.set_binddataset("ds_grupEdcPlan");_a.set_autoenter("select");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"96\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"소속부서\"/><Cell col=\"1\" rowspan=\"2\" text=\"교육대상\"/><Cell col=\"2\" rowspan=\"2\" text=\"교육과정\"/><Cell col=\"3\" rowspan=\"2\" text=\"교육방법\"/><Cell col=\"4\" rowspan=\"2\" text=\"교육예정일시&#13;&#10;(교육기간)\"/><Cell col=\"5\" rowspan=\"2\" text=\"예상비용\"/><Cell col=\"6\" rowspan=\"2\" text=\"시행근거\"/></Band><Band id=\"body\"><Cell style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:DEPT_NM\" wordwrap=\"char\" suppress=\"1\" suppressalign=\"first\" tooltiptext=\"bind:DEPT_NM\"/><Cell col=\"1\" edittype=\"expr:comp.parent.parent.parent.inpYn ? 'textarea' : 'none'\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:EDC_TRGET\" editlimit=\"300\" editdisplay=\"expr:comp.parent.parent.parent.inpYn ? 'display' : 'edit'\" editlengthunit=\"ascii\" tooltiptext=\"bind:EDC_TRGET\"/><Cell col=\"2\" edittype=\"expr:comp.parent.parent.parent.inpYn ? 'textarea' : 'none'\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:EDC_CRSE\" editlimit=\"300\" editdisplay=\"expr:comp.parent.parent.parent.inpYn ? 'display' : 'edit'\" editlengthunit=\"ascii\" tooltiptext=\"bind:EDC_CRSE\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"expr:comp.parent.parent.parent.inpYn ? 'combo' : 'none'\" style=\"padding:0 0 0 5;\" text=\"bind:EDC_MTH_CODE\" editdisplay=\"edit\" combodataset=\"ds_hrm041\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodisplay=\"expr:comp.parent.parent.parent.inpYn ? 'display' : 'edit'\"/><Cell col=\"4\" edittype=\"expr:comp.parent.parent.parent.inpYn ? 'textarea' : 'none'\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:EDC_PD\" editlimit=\"300\" editdisplay=\"expr:comp.parent.parent.parent.inpYn ? 'display' : 'edit'\" editlengthunit=\"ascii\" tooltiptext=\"bind:EDC_PD\"/><Cell col=\"5\" edittype=\"expr:comp.parent.parent.parent.inpYn ? 'textarea' : 'none'\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:EXPECT_CT\" editlimit=\"300\" editdisplay=\"expr:comp.parent.parent.parent.inpYn ? 'display' : 'edit'\" editlengthunit=\"ascii\" tooltiptext=\"bind:EXPECT_CT\"/><Cell col=\"6\" edittype=\"expr:comp.parent.parent.parent.inpYn ? 'textarea' : 'none'\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:OPERTN_BASIS\" editlimit=\"1000\" editdisplay=\"expr:comp.parent.parent.parent.inpYn ? 'display' : 'edit'\" editlengthunit=\"ascii\" tooltiptext=\"bind:OPERTN_BASIS\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static1","absolute","10","29",null,"19","0",null,this);_a.set_taborder("7");_a.set_text("작성시 Alt 키와 Enter 키를 동시에 입력하여 개행합니다.");_a.set_cssclass("sta_WFSA_Label");this.addChild(_a.name,_a);_a=new Static("Static2","absolute","10","48",null,"19","210",null,this);_a.set_taborder("8");_a.set_text("각 부서별 추진 업무중 임직원 전체 또는 특정대상중 집단교육 필요성이 있다고 인정하는 과정을 기재바랍니다.");_a.set_cssclass("sta_WFSA_Label");this.addChild(_a.name,_a);_a=new Layout("default","",1059,514,this,function(_b){_b.set_classname("HRM080202_T07");_b.set_titletext("단체교육계획");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("HRM080202_T07.xfdl","lib::comInclude.xjs");this.registerScript("HRM080202_T07.xfdl",function(){this.btn_Add_onclick=function(_a,_b){var _c=this.parent.parent.ds_dmandExaminList.rowposition;var _d=this.parent.parent.ds_dmandExaminList.getColumn(_c,"YEAR");var _e=this.parent.parent.ds_dmandExaminList.getColumn(_c,"DMAND_EXAMIN_NO");var _f=this.gfn_getDeptId();var _g=this.gfn_getDeptName();if(_c<0){this.gfn_message("info.처리불가","수요조사가 존재하지 않습니다.");return false;}var _h=this.parent.parent.ds_grupEdcPlan.addRow();var _i=this.parent.parent.ds_hrm035.getColumn(0,"CODE");this.parent.parent.ds_grupEdcPlan.setColumn(_h,"YEAR",_d);this.parent.parent.ds_grupEdcPlan.setColumn(_h,"DMAND_EXAMIN_NO",_e);this.parent.parent.ds_grupEdcPlan.setColumn(_h,"EDC_MTH_CODE",_i);this.parent.parent.ds_grupEdcPlan.setColumn(_h,"DEPT_CODE",_f);this.parent.parent.ds_grupEdcPlan.setColumn(_h,"DEPT_NM",_g);};this.btn_Delete_onclick=function(_a,_b){if(!this.gfn_message("confirm.삭제여부")){return false;}this.parent.parent.ds_grupEdcPlan.deleteRow(this.parent.parent.ds_grupEdcPlan.rowposition);};this.btn_Cancel_onclick=function(_a,_b){if(Ex.util.isUpdated(this.parent.parent.ds_grupEdcPlan)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}this.parent.parent.ds_grupEdcPlan.reset();this.parent.parent.ds_grupEdcPlan.applyChange();};});this.on_initEvent=function(){this.btn_Add.addEventHandler("onclick",this.btn_Add_onclick,this);this.btn_Delete.addEventHandler("onclick",this.btn_Delete_onclick,this);this.btn_Cancel.addEventHandler("onclick",this.btn_Cancel_onclick,this);this.grd_grupEdcPlan.addEventHandler("onexpandup",this.grd_grupEdcPlan_onexpandup,this);};this.loadIncludeScript("HRM080202_T07.xfdl");};})();