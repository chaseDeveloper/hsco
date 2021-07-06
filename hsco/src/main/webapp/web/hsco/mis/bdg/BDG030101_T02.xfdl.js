﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("BDG030101_T02");this.set_classname("BDG030101_T02");this.set_titletext("실행예산");this._setFormPosition(0,0,1031,400);}_a=new Dataset("ds_condTab02",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"1\"/><Column id=\"DETAIL_BSNS_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"1\"/><Column id=\"BUDGET_SE\" type=\"STRING\" size=\"1\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"1\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_executBudget",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"1\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"1\"/><Column id=\"DETAIL_BSNS_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"100\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"8\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"BUDGET_ACNT_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_UNIT_CODE\" type=\"STRING\" size=\"8\"/><Column id=\"EXPNDTR_UNIT_NM\" type=\"STRING\" size=\"1000\"/><Column id=\"EXPNDTR_UNIT_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"ELPD_EXCUT_AT\" type=\"STRING\" size=\"1\"/><Column id=\"ORIBDGT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RVSPBGT_1_ODR\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RVSPBGT_2_ODR\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RVSPBGT_3_ODR\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RVSPBGT_4_ODR\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CYFD_BUDGET\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MVMN_AM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DVR_AM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RSVFND_REQST_AM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"EXECUT_AM\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Grid("grd_EXECUT_BUDGET","absolute","0","5",null,null,"0","0",this);_a.set_taborder("0");_a.set_binddataset("ds_executBudget");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"65\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" colspan=\"2\" text=\"사업코드/명\"/><Cell col=\"3\" colspan=\"2\" text=\"부서코드/명\"/><Cell col=\"5\" text=\"예산계정\"/><Cell col=\"6\" text=\"부기\"/><Cell col=\"7\" text=\"조기집행\"/><Cell col=\"8\" text=\"본예산\"/><Cell col=\"9\" text=\"추경1차\"/><Cell col=\"10\" text=\"추경2차\"/><Cell col=\"11\" text=\"추경3차\"/><Cell col=\"12\" text=\"추경4차\"/><Cell col=\"13\" text=\"이동액\"/><Cell col=\"14\" text=\"전용액\"/><Cell col=\"15\" text=\"예비비\"/><Cell col=\"16\" text=\"이월액\"/><Cell col=\"17\" text=\"예산총액\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:DETAIL_BSNS_CODE\"/><Cell col=\"2\" style=\"align:left middle;\" text=\"bind:BSNS_NM\" tooltiptext=\"bind:BSNS_NM\"/><Cell col=\"3\" text=\"bind:DEPT_CODE\"/><Cell col=\"4\" style=\"align:left middle;\" text=\"bind:DEPT_NM\" tooltiptext=\"bind:DEPT_NM\"/><Cell col=\"5\" style=\"align:left middle;\" text=\"bind:BUDGET_ACNT_NM2\" tooltiptext=\"bind:BUDGET_ACNT_NM\"/><Cell col=\"6\" style=\"align:left middle;\" text=\"bind:EXPNDTR_UNIT_NM2\"/><Cell col=\"7\" displaytype=\"checkbox\" text=\"bind:ELPD_EXCUT_AT\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:ORIBDGT\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:RVSPBGT_1_ODR\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:RVSPBGT_2_ODR\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:RVSPBGT_3_ODR\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:RVSPBGT_4_ODR\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:MVMN_AM\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:DVR_AM\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:RSVFND_REQST_AM\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:CYFD_BUDGET\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:EXECUT_AM\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;ORIBDGT&quot;)\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;RVSPBGT_1_ODR&quot;)\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;RVSPBGT_2_ODR&quot;)\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;RVSPBGT_3_ODR&quot;)\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;RVSPBGT_4_ODR&quot;)\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;MVMN_AM&quot;)\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;DVR_AM&quot;)\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;RSVFND_REQST_AM&quot;)\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;CYFD_BUDGET&quot;)\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;EXECUT_AM&quot;)\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",1031,400,this,function(_b){_b.set_classname("BDG030101_T02");_b.set_titletext("실행예산");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("BDG030101_T02.xfdl","lib::comInclude.xjs");this.addIncludeScript("BDG030101_T02.xfdl","mis_lib::misUtil.xjs");this.registerScript("BDG030101_T02.xfdl",function(){this.BDG030101_T02_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.BDG030101_T02_onload=function(_a,_b){};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){};this.fn_search=function(){this.ds_executBudget.clearData();this.fn_transaction("selectExecutBudget");};this.fn_transaction=function(_a){switch(_a){case "selectExecutBudget":var _b=this.parent.parent.ds_cond.getColumn(0,"YEAR");var _c=this.parent.parent.ds_cond.getColumn(0,"DEPT_CODE");var _d=this.parent.parent.ds_cond.getColumn(0,"DEPT_NM");var _e=this.parent.parent.ds_cond.getColumn(0,"BSNS_SE");var _f=this.parent.parent.ds_cond.getColumn(0,"BALC_SE");var _g=this.parent.parent.ds_cond.getColumn(0,"BUDGET_SE");var _h=this.parent.parent.ds_cond.getColumn(0,"BSNS_CODE");this.ds_condTab02.clearData();var _i=this.ds_condTab02.addRow();this.ds_condTab02.setColumn(_i,"YEAR",_b-1);this.ds_condTab02.setColumn(_i,"DEPT_CODE",_c);this.ds_condTab02.setColumn(_i,"DEPT_NM",_d);this.ds_condTab02.setColumn(_i,"BSNS_SE",_e);this.ds_condTab02.setColumn(_i,"BALC_SE",_f);this.ds_condTab02.setColumn(_i,"DETAIL_BSNS_CODE",_h);var _j="/hsco/mis/bdg/BDG030101/selectExecutBudget.do";var _k="input1=ds_condTab02";var _l="ds_executBudget=output1";break;}Ex.core.tran(this,_a,_j,_k,_l);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b==0){switch(_a){case "selectExecutBudget":break;}}};});this.on_initEvent=function(){this.addEventHandler("onload",this.BDG030101_T02_onload,this);};this.loadIncludeScript("BDG030101_T02.xfdl");};})();