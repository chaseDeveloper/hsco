﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("FUN040301_P01");this.set_classname("FUN040301_P01");this.set_titletext("자금이체");this._setFormPosition(0,0,580,557);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DELNG_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_fun003",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_transfer",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DELNG_DE\" type=\"STRING\" size=\"256\"/><Column id=\"TRNSMIT_INSTT\" type=\"STRING\" size=\"256\"/><Column id=\"RECPTN_INSTT\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">DELNG_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"from\"/><Col id=\"to\"/><Col id=\"msgId\">거래일자</Col><Col id=\"nlength\">8</Col><Col id=\"lengthChkGb\">LE</Col></Row><Row><Col id=\"compId\">ds_transfer</Col><Col id=\"colId\">DELNG_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">거래일자</Col><Col id=\"nlength\">8</Col><Col id=\"lengthChkGb\">LE</Col></Row><Row><Col id=\"compId\">ds_transfer</Col><Col id=\"colId\">TRNSMIT_INSTT</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">제공은행</Col><Col id=\"nlength\">2</Col><Col id=\"lengthChkGb\">LE</Col></Row><Row><Col id=\"compId\">ds_transfer</Col><Col id=\"colId\">RECPTN_INSTT</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">요구은행</Col><Col id=\"nlength\">2</Col><Col id=\"lengthChkGb\">LE</Col></Row><Row><Col id=\"compId\">ds_transfer</Col><Col id=\"colId\">AMOUNT</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">금액</Col><Col id=\"nlength\">14</Col><Col id=\"lengthChkGb\">LE</Col></Row><Row><Col id=\"compId\">ds_transfer</Col><Col id=\"colId\">RM</Col><Col id=\"nlength\">200</Col><Col id=\"lengthChkGb\">LE</Col><Col id=\"msgId\">비고</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_pop","absolute","15","15",null,null,"15","15",this);_a.set_taborder("0");_a.set_text("Div00");this.addChild(_a.name,_a);_a=new Grid("grd_nxndrMoney","absolute","0","73",null,null,"0","0",this.div_pop);_a.set_taborder("13");_a.set_binddataset("ds_transfer");_a.set_cellsizingtype("col");_a.set_autosizingtype("row");_a.set_autofittype("col");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"90\"/><Column size=\"230\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"제공은행\"/><Cell col=\"1\" text=\"요구은행\"/><Cell col=\"2\" text=\"비고\"/><Cell col=\"3\" text=\"금액\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"expr:dataset.getRowType(currow) == 2 ? 'combo':'none'\" style=\"align:center;padding:0 0 0 5;\" text=\"bind:TRNSMIT_INSTT\" combodataset=\"ds_fun003\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"expr:dataset.getRowType(currow) == 2 ? 'combo':'none'\" style=\"align:center;\" text=\"bind:RECPTN_INSTT\" combodataset=\"ds_fun003\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"expr:dataset.getRowType(currow) == 2 ? 'text':'none'\" style=\"align:left;padding:0 0 0 5;\" text=\"bind:RM\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"expr:dataset.getRowType(currow) == 2 ? 'masknumber':'none'\" style=\"align:right;padding:0 5 0 0;\" text=\"bind:AMOUNT\" mask=\"99,999,999,999,999\" editlimitbymask=\"integer\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/></Band><Band id=\"summary\"><Cell displaytype=\"number\" style=\"align:center;\" text=\"expr:dataset.rowcount\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" text=\"expr:dataset.getSum(&quot;AMOUNT&quot;)\"/></Band></Format></Formats>");this.div_pop.addChild(_a.name,_a);_a=new Static("sta_title00","absolute","0","2","77","21",null,null,this.div_pop);_a.set_taborder("14");_a.set_text("자금이체");_a.set_cssclass("sta_WF_Title01");this.div_pop.addChild(_a.name,_a);_a=new Static("Static15","absolute","0","63",null,"10","0",null,this.div_pop);_a.set_taborder("20");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_pop.addChild(_a.name,_a);_a=new Button("Button05","absolute",null,"0","50","25","212",null,this.div_pop);_a.set_taborder("21");_a.set_text("신규");_a.set_cssclass("btn_WF_CRUD");this.div_pop.addChild(_a.name,_a);_a=new Button("Button04","absolute",null,"0","50","25","159",null,this.div_pop);_a.set_taborder("22");_a.set_text("삭제");_a.set_cssclass("btn_WF_CRUD");this.div_pop.addChild(_a.name,_a);_a=new Button("Button03","absolute",null,"0","50","25","106",null,this.div_pop);_a.set_taborder("23");_a.set_text("저장");_a.set_cssclass("btn_WF_CRUD");this.div_pop.addChild(_a.name,_a);_a=new Button("Button23","absolute",null,"0","50","25","53",null,this.div_pop);_a.set_taborder("24");_a.set_text("취소");_a.set_cssclass("btn_WF_CRUD");this.div_pop.addChild(_a.name,_a);_a=new Button("Button02","absolute",null,"0","50","25","0",null,this.div_pop);_a.set_taborder("25");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");this.div_pop.addChild(_a.name,_a);_a=new Static("Static12","absolute","0","25",null,"5","0",null,this.div_pop);_a.set_taborder("26");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_pop.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","30",null,"33","0",null,this.div_pop);_a.set_taborder("27");_a.set_cssclass("div_WFSA_Box");this.div_pop.addChild(_a.name,_a);_a=new Calendar("Calendar00","absolute","79","5","100","21",null,null,this.div_pop.div_search);this.div_pop.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Readonly");_a.set_readonly("true");_a=new Static("sta_EMPL_SE","absolute","15","5","64","21",null,null,this.div_pop.div_search);_a.set_taborder("1");_a.set_text("거래일자");_a.set_cssclass("sta_WFSA_Label");this.div_pop.div_search.addChild(_a.name,_a);_a=new Static("Static15","absolute","0","0",null,"15","0",null,this);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_pop.div_search,function(_b){_b.set_taborder("27");_b.set_cssclass("div_WFSA_Box");});this.div_pop.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_pop,function(_b){_b.set_taborder("0");_b.set_text("Div00");});this.div_pop.addLayout(_a.name,_a);_a=new Layout("default","",580,557,this,function(_b){_b.set_classname("FUN040301_P01");_b.set_titletext("자금이체");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_pop.div_SEARCH.Calendar00","value","ds_cond","INPUT_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_pop.div_search.Calendar00","value","ds_cond","DELNG_DE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("FUN040301_P01.xfdl","lib::comInclude.xjs");this.addIncludeScript("FUN040301_P01.xfdl","mis_lib::misUtil.xjs");this.registerScript("FUN040301_P01.xfdl",function(){this.fv_objForm;this.saveRow= -1;this.checkDs=[this.ds_transfer];this.saveYn=false;this.FUN040301_P01_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.FUN040301_P01_onload=function(_a,_b){this.fv_objForm=this.parent.arg_0;this.ds_cond.setColumn(0,"DELNG_DE",this.parent.date);var _c=[["ds_fun003","FUN003","Y","D"]];var _d=function(_e,_f,_g){this.ds_fun003.filter("INT_VAL > 0");this.fn_search();};this.gfn_comboLoad(_c,_d);};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){this.fn_transaction("search");};this.fn_save=function(_a,_b){if(Ex.util.isUpdated(this.ds_transfer)){if(!this.gfn_checkValidation_NoUpdChk(this.ds_transfer,this.ds_validation)){return false;}var _c="";var _d="";for(var _e=0;_e<this.ds_transfer.rowcount;_e++ ){if(this.ds_transfer.getColumn(_e,"TRNSMIT_INSTT")==this.ds_transfer.getColumn(_e,"RECPTN_INSTT")){this.gfn_message("info.처리불가","제공은행과 요구은행이 같습니다.");this.div_pop.grd_nxndrMoney.selectRow(_e);return;}_c=this.ds_transfer.getColumn(_e,"TRNSMIT_INSTT")+this.ds_transfer.getColumn(_e,"RECPTN_INSTT");for(var _f=_e+1;_f<this.ds_transfer.rowcount;_f++ ){_d=this.ds_transfer.getColumn(_f,"TRNSMIT_INSTT")+this.ds_transfer.getColumn(_f,"RECPTN_INSTT");if(_c==_d){this.gfn_message("info.처리불가","제공은행과 요구은행이 동일한 중복건이 있습니다.\n중복건 삭제 후 등록하십시요.");this.div_pop.grd_nxndrMoney.selectRow(_f);return;}}}if(this.gfn_message("confirm.저장.여부")){this.saveRow=this.ds_transfer.rowposition;this.fn_transaction("save");}}else{this.gfn_message("comm.데이터.변경.없음");}};this.fn_transaction=function(_a){switch(_a){case "search":var _b="hsco/mis/fun/FUN040301/selectTransferInfoList.do";var _c="input1=ds_cond";var _d="ds_transfer=output1";break;case "save":var _b="hsco/mis/fun/FUN040301/saveTransferInfo.do";var _c="input1=ds_transfer:U";var _d="ds_transfer=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "search":this.ds_transfer.applyChange();break;case "save":if(this.saveRow> -1){this.ds_transfer.set_rowposition(this.saveRow);this.saveRow= -1;}this.saveYn=true;this.gfn_message("success.처리.성공");break;case "copy":this.gfn_message("success.처리.성공");break;}}};this.div_pop_grd_pbncd_onheadclick=function(_a,_b){LGV_COL_SORT=_b.col;this._gridSort(_a,_b);};this.fn_close=function(_a,_b){if(Ex.util.isUpdated(this.ds_transfer)){if(this.gfn_message("confirm.변경.취소.여부")){if(this.saveYn){this.close(this.ds_transfer.saveXML());}else{this.close();}}else{return;}}else{if(this.saveYn){this.close(this.ds_transfer.saveXML());}else{this.close();}}};this.fn_cancel=function(_a,_b){if(this.gfn_message("confirm.취소여부")){this.ds_transfer.reset();this.ds_transfer.applyChange();return;}};this.fn_insert=function(_a,_b){var _c=this.ds_transfer.addRow();this.ds_transfer.setColumn(_c,"DELNG_DE",this.ds_cond.getColumn(0,"DELNG_DE"));this.ds_transfer.setColumn(_c,"TRNSMIT_INSTT",this.ds_fun003.getColumn(0,"CODE"));this.ds_transfer.setColumn(_c,"RECPTN_INSTT",this.ds_fun003.getColumn(1,"CODE"));};this.fn_delete=function(_a,_b){if(this.gfn_message("confirm.삭제여부")){var _c=this.ds_transfer.rowposition;this.ds_transfer.deleteRow(_c);}};});this.on_initEvent=function(){this.addEventHandler("oninit",this.FUN040301_P01_oninit,this);this.addEventHandler("onload",this.FUN040301_P01_onload,this);this.div_pop.grd_nxndrMoney.addEventHandler("onheadclick",this.div_pop_grd_pbncd_onheadclick,this);this.div_pop.Button05.addEventHandler("onclick",this.fn_insert,this);this.div_pop.Button04.addEventHandler("onclick",this.fn_delete,this);this.div_pop.Button03.addEventHandler("onclick",this.fn_save,this);this.div_pop.Button23.addEventHandler("onclick",this.fn_cancel,this);this.div_pop.Button02.addEventHandler("onclick",this.fn_close,this);};this.loadIncludeScript("FUN040301_P01.xfdl");};})();