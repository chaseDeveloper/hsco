﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ACC020201_T06");this.set_classname("UI_ACC020201_T06");this.set_titletext("원인행위내역(구입)");this._setFormPosition(0,0,882,278);}_a=new Grid("grd_actPurchsDecsn","absolute","0","5","882",null,null,"0",this);_a.set_taborder("0");_a.set_binddataset("ds_actPurchsDecsn");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"170\"/><Column size=\"90\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"자산분류\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"품명\"/><Cell col=\"3\" text=\"규격\"/><Cell col=\"4\" text=\"단위\"/><Cell col=\"5\" text=\"수량\"/><Cell col=\"6\" text=\"단가\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"금액\"/><Cell col=\"8\" text=\"비고\"/><Cell col=\"9\" text=\"납부기일\"/></Band><Band id=\"body\"><Cell text=\"bind:SEQ\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:ASSETS_CL_NM\" expandshow=\"show\" expandsize=\"20\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:PRDNM\" editlimit=\"100\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:STNDRD\" editlimit=\"100\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:UNIT\" editlimit=\"5\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"masknumber\" text=\"bind:QY\" mask=\"###########\" editlimit=\"11\" editlimitbymask=\"integer\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:UNTPC\" mask=\"##,###,###,###\" editlimit=\"11\" editlimitbymask=\"integer\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:AMOUNT\" mask=\"###,###,###,###,###\" editlimit=\"15\" editlimitbymask=\"integer\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:RM\" editlimit=\"100\"/><Cell col=\"9\" displaytype=\"date\" edittype=\"date\" text=\"bind:PAY_DE\" calendardisplaynulltype=\"none\"/></Band><Band id=\"summary\"><Cell text=\"합계\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;AMOUNT&quot;)\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",882,278,this,function(_b){_b.set_classname("UI_ACC020201_T06");_b.set_titletext("원인행위내역(구입)");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("ACC020201_T06.xfdl","lib::comInclude.xjs");this.registerScript("ACC020201_T06.xfdl",function(){this.fn_onload=function(_a,_b){if(this.parent.parent.ds_cond.getRowCount()>0){this.fn_search();}};this.fn_search=function(){this.parent.parent.fn_transaction("caActPurchsDecsnList");};this.btn_addRow_onclick=function(_a,_b){var _c=this.parent.parent.ds_actPurchsDecsn.addRow();};this.btn_delRow_onclick=function(_a,_b){if(this.parent.parent.ds_actPurchsDecsn.getRowCount()>0){if(this.gfn_message("confirm.삭제여부")){this.parent.parent.ds_actPurchsDecsn.deleteRow(this.parent.parent.ds_actPurchsDecsn.rowposition);}}};this.btn_cancel_onclick=function(_a,_b){if(this.gfn_message("confirm.취소여부")){this.parent.parent.ds_actPurchsDecsn.reset();this.parent.parent.ds_actPurchsDecsn.applyChange();return;}};this.grd_actPurchsDecsn_onexpandup=function(_a,_b){if(_b.cell==1){var _c={arg_0:this};this.gfn_popup("grd_assetsPopup",450,500,"물품구분조회팝업",_c,"mis_ass::ASS010400_P01.xfdl","fn_popupCallBack",true);}};this.fn_popupCallBack=function(_a,_b){if(_b==null||_b.length==0){return;}var _c=new Dataset();_c.loadXML(_b);switch(_a){case "grd_assetsPopup":var _d=this.parent.parent.ds_actPurchsDecsn.rowposition;this.parent.parent.ds_actPurchsDecsn.setColumn(_d,"ASSETS_CL_CODE",_c.getColumn(0,"ASSETS_CL_CODE"));this.parent.parent.ds_actPurchsDecsn.setColumn(_d,"ASSETS_CL_NM",_c.getColumn(0,"ASSETS_CL_NM"));break;}};});this.on_initEvent=function(){this.addEventHandler("onload",this.fn_onload,this);this.grd_actPurchsDecsn.addEventHandler("onexpandup",this.grd_actPurchsDecsn_onexpandup,this);};this.loadIncludeScript("ACC020201_T06.xfdl");};})();