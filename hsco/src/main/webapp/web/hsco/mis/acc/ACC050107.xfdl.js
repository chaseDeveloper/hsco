﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ACC050107");this.set_classname("UI_ACC050107");this.set_titletext("초기이월미수금관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ACCNUT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ACCNUT_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCNUT_ACNT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_accnutStacntBcnc</Col><Col id=\"colId\">STACNT_SE</Col><Col id=\"notNull\">Y</Col><Col id=\"nlength\">2</Col><Col id=\"lengthChkGb\">LE</Col><Col id=\"msgId\">결산구분</Col></Row><Row><Col id=\"compId\">ds_accnutStacntBcnc</Col><Col id=\"colId\">ACCNUT_YEAR</Col><Col id=\"notNull\">Y</Col><Col id=\"nlength\">4</Col><Col id=\"lengthChkGb\">LE</Col><Col id=\"msgId\">회계년도</Col></Row><Row><Col id=\"compId\">ds_accnutStacntBcnc</Col><Col id=\"colId\">ACCNUT_ACNT_CODE</Col><Col id=\"notNull\">Y</Col><Col id=\"lengthChkGb\"/><Col id=\"msgId\">회계계정코드</Col></Row><Row><Col id=\"compId\">ds_accnutStacntBcnc</Col><Col id=\"colId\">BSNS_CODE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">사업코드</Col></Row><Row><Col id=\"compId\">ds_accnutStacntBcnc</Col><Col id=\"colId\">JOB_SE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">구분코드</Col></Row><Row><Col id=\"compId\">ds_accnutStacntBcnc</Col><Col id=\"colId\">CNTRCTR_NO</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">거래처번호</Col></Row><Row><Col id=\"colId\">DEBTOR_AMOUNT</Col><Col id=\"compId\">ds_accnutStacntBcnc</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">미수잔액</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_accnutStacntBcnc",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"STACNT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCNUT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ACCNUT_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ACCNUT_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SE_ACCNUT_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEBTOR_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"W_STACNT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"W_ACCNUT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"W_ACCNUT_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"W_BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"W_JOB_SE\" type=\"STRING\" size=\"256\"/><Column id=\"W_CNTRCTR_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_pcom06",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Grid("grd_accnutStacntBcnc","absolute","0","67",null,null,"28","0",this);_a.set_taborder("7");_a.set_autofittype("none");_a.set_binddataset("ds_accnutStacntBcnc");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" colspan=\"2\" text=\"계정명\"/><Cell col=\"3\" colspan=\"2\" text=\"사업명코드\"/><Cell col=\"5\" text=\"구분\"/><Cell col=\"6\" colspan=\"2\" text=\"계약자\"/><Cell col=\"8\" text=\"미수잔액\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:ACCNUT_ACNT_CODE\" expandshow=\"show\" suppress=\"0\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:ACCNUT_ACNT_NM\" suppress=\"0\"/><Cell col=\"3\" text=\"bind:BSNS_CODE\" expandshow=\"show\" suppress=\"0\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:SE_ACCNUT_ACNT_NM\" suppress=\"0\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"none\" text=\"bind:JOB_SE\" combodataset=\"ds_pcom06\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"6\" text=\"bind:CNTRCTR_NO\" expandshow=\"show\"/><Cell col=\"7\" style=\"align:left;\" text=\"bind:CNTRCTR_NM\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:DEBTOR_AMOUNT\" mask=\"9,999\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" displaytype=\"number\" style=\"align:center;\" text=\"expr:dataset.rowcount\" mask=\"9,999\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:center;\" text=\"expr:dataset.rowcount\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('DEBTOR_AMOUNT')\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("23");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("24");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("25");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title01","absolute","0","43","222","19",null,null,this);_a.set_taborder("26");_a.set_text("초기이월미수금 리스트");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static51","absolute","0","62","1031","5",null,null,this);_a.set_taborder("27");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("28");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_YEAR","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("17");_a.set_text("회계년도");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","0",null,"5","0",null,this.div_search);_a.set_taborder("21");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static37","absolute","0",null,null,"5","0","0",this.div_search);_a.set_taborder("22");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","5","15",null,null,"5",this.div_search);_a.set_taborder("23");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","139","5","15",null,null,"5",this.div_search);_a.set_taborder("24");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_YEAR","absolute","79","5","60","21",null,null,this.div_search);_a.set_taborder("32");_a.set_value("0");_a.set_min("1900");_a.set_cssclass("spn_WF_Essential");_a.style.set_buttonsize("15");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_acntCode","absolute","323","5","85","21",null,null,this.div_search);_a.set_taborder("33");_a.set_inputfilter("dot");_a.set_inputtype("dot");this.div_search.addChild(_a.name,_a);_a=new Button("btn_accnutPopup","absolute","387","5","21","21",null,null,this.div_search);_a.set_taborder("34");_a.set_cssclass("btn_WF_Search");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_acntNm","absolute","410","5","211","21",null,null,this.div_search);_a.set_taborder("35");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_search.addChild(_a.name,_a);_a=new Static("sta_EMPL_SE02","absolute","254","5","64","21",null,null,this.div_search);_a.set_taborder("36");_a.set_text("회계계정");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Button("btn_excelDownload","absolute",null,"42","25","21","55",null,this);_a.set_taborder("29");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Button("btn_excelUpload","absolute",null,"42","25","21","28",null,this);_a.set_taborder("30");_a.set_cssclass("btn_WF_Gridexcelup");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("28");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("UI_ACC050107");_b.set_titletext("초기이월미수금관리");});this.addLayout(_a.name,_a);_a=new BindItem("item11","div_search.edt_acntCode","value","ds_cond","ACCNUT_ACNT_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item12","div_search.edt_acntNm","value","ds_cond","ACCNUT_ACNT_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_search.spn_YEAR","value","ds_cond","ACCNUT_YEAR");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("ACC050107.xfdl","lib::comInclude.xjs");this.addIncludeScript("ACC050107.xfdl","mis_lib::misUtil.xjs");this.registerScript("ACC050107.xfdl",function(){this.ACC050107_onload=function(_a,_b){this.fn_misFormInit(this);this.fn_init_form();this.fn_init_dataset();var _c=[["ds_pcom06","PCOM06","Y","D","B"]];var _d=function(_e,_f,_g){this.fn_search();};this.gfn_comboLoad(_c,_d);};this.fn_init_form=function(){this.gfn_initForm(this);this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"ACCNUT_YEAR",this.dateUtils.today().substr(0,4));};this.fn_init_dataset=function(){};this.fn_search=function(){this.ds_accnutStacntBcnc.clearData();this.fn_transaction("accnutStacntBcncList");};this.fn_save=function(){if(Ex.util.isUpdated(this.ds_accnutStacntBcnc)){if(!this.comUtils.isDatasetUpdated(this.ds_accnutStacntBcnc)){this.gfn_message("comm.데이터.변경.없음");return false;}if(!this.gfn_checkValidation_NoUpdChk(this.ds_accnutStacntBcnc,this.ds_validation)){return;}this.fn_transaction("accnutStacntBcncCUD");}else{this.gfn_message("comm.데이터.변경.없음");}};this.fn_transaction=function(_a){switch(_a){case "accnutStacntBcncList":var _b="hsco/mis/acc/ACC050107/accnutStacntBcncList.do";var _c="input1=ds_cond";var _d="ds_accnutStacntBcnc=output1";break;case "accnutStacntBcncCUD":var _b="hsco/mis/acc/ACC050107/accnutStacntBcncCUD.do";var _c="input1=ds_accnutStacntBcnc:U";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}switch(_a){case "accnutStacntBcncList":break;case "accnutStacntBcncCUD":this.gfn_message("success.처리.성공");this.fn_search();break;default:break;}};this.fn_insert=function(){var _a=this.ds_accnutStacntBcnc.addRow();this.ds_accnutStacntBcnc.setColumn(_a,"STACNT_SE","C1");this.ds_accnutStacntBcnc.setColumn(_a,"ACCNUT_YEAR",this.ds_cond.getColumn(0,"ACCNUT_YEAR"));trace(this.ds_accnutStacntBcnc.saveXML());};this.fn_delete=function(){if(this.gfn_message("confirm.삭제여부")){this.ds_accnutStacntBcnc.deleteRow(this.ds_accnutStacntBcnc.rowposition);}};this.fn_cancel=function(){if(this.gfn_message("confirm.취소여부")){this.ds_accnutStacntBcnc.reset();}};this.btn_excelDownload_onclick=function(_a,_b){};this.btn_excelUpload_onclick=function(_a,_b){};this.grd_accnutStacntBcnc_onexpanddown=function(_a,_b){if(1==_b.col){var _c=this.ds_cond.getColumn(0,"ACCNUT_YEAR");this.gfn_popup("grd_accnutPopup","","","회계계정과목",{year:_c},"mis_acc::ACC010103_P01.xfdl","fn_popupCallBack",true);}else if(3==_b.col){var _d=this.ds_accnutStacntBcnc.getColumn(_b.row,"ACCNUT_YEAR");if(_d.length!=4){trace("accnutYear : "+_d);this.gfn_message("comm.기등록값.삭제불가");return false;}this.gfn_popup("grd_bsnsPopup",500,500,"사업코드",{accnutYear:_d},"pms_prj::popBsns.xfdl","fn_popupCallBack",true);}else if(6==_b.col){this.gfn_popup("grd_bcncPopup","","","거래처","","mis_acc::ACC050107_P01.xfdl","fn_popupCallBack",true);}};this.div_search_btn_accnutPopup_onclick=function(_a,_b){var _c=this.ds_cond.getColumn(0,"ACCNUT_YEAR");this.gfn_popup("btn_accnutPopup","","","회계계정과목",{year:_c},"mis_acc::ACC010103_P01.xfdl","fn_popupCallBack",true);};this.fn_popupCallBack=function(_a,_b){var _c=new Dataset();var _d=this.ds_accnutStacntBcnc.rowposition;switch(_a){case "btn_accnutPopup":if(!this.comUtils.isNull(_b)){_c.loadXML(_b);this.ds_cond.setColumn(0,"ACCNUT_YEAR",_c.getColumn(0,"ACCNUT_YEAR"));this.ds_cond.setColumn(0,"ACCNUT_ACNT_CODE",_c.getColumn(0,"ACCNUT_ACNT_CODE"));this.ds_cond.setColumn(0,"ACCNUT_ACNT_NM",_c.getColumn(0,"ACCNUT_ACNT_NM"));trace(this.ds_cond.saveXML());}break;case "grd_accnutPopup":if(!this.comUtils.isNull(_b)){_c.loadXML(_b);this.ds_accnutStacntBcnc.setColumn(_d,"ACCNUT_YEAR",_c.getColumn(0,"ACCNUT_YEAR"));this.ds_accnutStacntBcnc.setColumn(_d,"ACCNUT_ACNT_CODE",_c.getColumn(0,"ACCNUT_ACNT_CODE"));this.ds_accnutStacntBcnc.setColumn(_d,"ACCNUT_ACNT_NM",_c.getColumn(0,"ACCNUT_ACNT_NM"));}break;case "grd_bsnsPopup":if(!this.comUtils.isNull(_b)){_c.loadXML(_b);this.ds_accnutStacntBcnc.setColumn(_d,"BSNS_CODE",_c.getColumn(0,"BSNS_CODE"));this.ds_accnutStacntBcnc.setColumn(_d,"SE_ACCNUT_ACNT_NM",_c.getColumn(0,"BSNS_NM"));}break;case "grd_bcncPopup":if(!this.comUtils.isNull(_b)){_c.loadXML(_b);this.ds_accnutStacntBcnc.setColumn(_d,"JOB_SE",_c.getColumn(0,"JOB_SE"));this.ds_accnutStacntBcnc.setColumn(_d,"CNTRCTR_NO",_c.getColumn(0,"CNTRCTR_NO"));this.ds_accnutStacntBcnc.setColumn(_d,"CNTRCTR_NM",_c.getColumn(0,"CNTRCTR_NM"));}break;default:break;}};this.div_search_edt_acntCode_onkeydown=function(_a,_b){if(_b.keycode=='8'){this.ds_cond.setColumn(0,"ACCNUT_ACNT_CODE");this.ds_cond.setColumn(0,"ACCNUT_ACNT_NM");}else if(_b.keycode=='46'){this.ds_cond.setColumn(0,"ACCNUT_ACNT_CODE");this.ds_cond.setColumn(0,"ACCNUT_ACNT_NM");}};});this.on_initEvent=function(){this.ds_pcom06.addEventHandler("onrowposchanged",this.ds_frmtnPd_onrowposchanged,this);this.addEventHandler("onload",this.ACC050107_onload,this);this.grd_accnutStacntBcnc.addEventHandler("onexpanddown",this.grd_accnutStacntBcnc_onexpanddown,this);this.div_search.edt_acntCode.addEventHandler("onkeydown",this.div_search_edt_acntCode_onkeydown,this);this.div_search.btn_accnutPopup.addEventHandler("onclick",this.div_search_btn_accnutPopup_onclick,this);this.btn_excelDownload.addEventHandler("onclick",this.btn_excelDownload_onclick,this);this.btn_excelUpload.addEventHandler("onclick",this.btn_excelUpload_onclick,this);};this.loadIncludeScript("ACC050107.xfdl");};})();