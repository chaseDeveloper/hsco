﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("FRM04030700");this.set_classname("FRM04030700");this.set_titletext("원금상환기일경과대출금 증감정보");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_schVal",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"tranDe\" type=\"STRING\" size=\"256\"/><Column id=\"chasu\" type=\"STRING\" size=\"256\"/><Column id=\"basicDe\" type=\"STRING\" size=\"256\"/><Column id=\"cntcTrsmrcvSe\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_dudtElapseLdmy",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"TRUST_INSTT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCNUT_YM\" type=\"STRING\" size=\"256\"/><Column id=\"ENDW_CNTC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ENDW_CNTC_SN\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDW_SN\" type=\"STRING\" size=\"256\"/><Column id=\"LDMY_INCRS\" type=\"STRING\" size=\"256\"/><Column id=\"LDMY_RTRVL\" type=\"STRING\" size=\"256\"/><Column id=\"LDMY_PROCESS\" type=\"STRING\" size=\"256\"/><Column id=\"LDMY_BLCE\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_sub","absolute","0","0",null,null,"0","1",this);_a.set_taborder("0");this.addChild(_a.name,_a);_a=new Grid("grd_dudtElapseLdmy","absolute","0","0",null,null,"0","0",this.div_sub);_a.set_taborder("0");_a.set_binddataset("ds_dudtElapseLdmy");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"85\"/><Column size=\"108\"/><Column size=\"134\"/><Column size=\"142\"/><Column size=\"140\"/><Column size=\"137\"/></Columns><Rows><Row size=\"17\" band=\"head\"/><Row size=\"17\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"회계년월\"/><Cell col=\"2\" rowspan=\"2\"><Cell text=\"당월 원금상환 기일\"/><Cell row=\"1\" text=\"경과 대출금 증가액\"/></Cell><Cell col=\"3\" rowspan=\"2\"><Cell text=\"당월 원금상환 기일\"/><Cell row=\"1\" text=\"경고 대출금 회수액\"/></Cell><Cell col=\"4\" rowspan=\"2\"><Cell text=\"당월 원금상환 기일\"/><Cell row=\"1\" text=\"경과 대출금 제각액\"/></Cell><Cell col=\"5\" rowspan=\"2\"><Cell text=\"당월 원금상환 기일\"/><Cell row=\"1\" text=\"대출금 총잔액\"/></Cell></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"bind:SN\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:ACCNUT_YM\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:LDMY_INCRS\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:LDMY_RTRVL\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:LDMY_PROCESS\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:LDMY_BLCE\"/></Band></Format></Formats>");this.div_sub.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.div_sub,function(_b){_b.set_taborder("0");});this.div_sub.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("FRM04030700");_b.set_titletext("원금상환기일경과대출금 증감정보");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("FRM04030700.xfdl","pms_lib::rntUtilInclude.xjs");this.registerScript("FRM04030700.xfdl",function(){this.FRM04030700_oninit=function(_a,_b){this.fn_init();this.fn_init_dataset();};this.FRM04030700_onload=function(_a,_b){var _c=this.getOwnerFrame().form.div_workFrame.div_main;var _d=_c.Div00.edt_schYn;var _e=_c.div_search.cal_tranDe.value;var _f=_c.div_search.cmb_chasu.value;var _g=_c.div_search.cal_basicDe.value;var _h=_c.div_search.cmb_cntcTrsmrcvSe.value;this.ds_schVal.setColumn(0,"tranDe",_e);this.ds_schVal.setColumn(0,"chasu",_f);this.ds_schVal.setColumn(0,"basicDe",_g);this.ds_schVal.setColumn(0,"cntcTrsmrcvSe",_h);if(_d=="1"){this.ds_dudtElapseLdmy.clearData();this.fn_transaction("selectDudtElapseLdmy");}};this.fn_init_dataset=function(){};this.fn_transaction=function(_a){var _b=true;switch(_a){case "selectDudtElapseLdmy":var _c="/hsco/pms/frm/FRM04020000/selectDudtElapseLdmy.do";var _d="input1=ds_schVal";var _e="ds_dudtElapseLdmy=output1";break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};});this.on_initEvent=function(){this.addEventHandler("oninit",this.FRM04030700_oninit,this);this.addEventHandler("onload",this.FRM04030700_onload,this);this.div_sub.grd_dudtElapseLdmy.addEventHandler("onexpanddown",this.Div00_grd_endwAccSta_onexpanddown,this);};this.loadIncludeScript("FRM04030700.xfdl");};})();