﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("PRJ010302");this.set_classname("PRJ010302");this.set_titletext("PRJ010302_사업별하도급현황");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_ctr",this);_a.getSetter("useclientlayout2").set("1");_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"CNTRCT_NO\" type=\"STRING\" size=\"11\"/><Column id=\"CNTRCT_SE\" type=\"STRING\" size=\"3\"/><Column id=\"CNTRCT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"TOT_CNTRCT_AMOUNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CNTRCT_DE\" type=\"STRING\" size=\"8\"/><Column id=\"STRWRK_DE\" type=\"STRING\" size=\"8\"/><Column id=\"COMPET_DE\" type=\"STRING\" size=\"8\"/><Column id=\"CTR_GB\" type=\"STRING\" size=\"100\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ctrDtl",this);_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"CNTRCT_NO\" type=\"STRING\" size=\"11\"/><Column id=\"CNTRCT_SE\" type=\"STRING\" size=\"3\"/><Column id=\"CNTRCT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"TOT_CNTRCT_AMOUNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CNTRCT_DE\" type=\"STRING\" size=\"8\"/><Column id=\"STRWRK_DE\" type=\"STRING\" size=\"8\"/><Column id=\"COMPET_DE\" type=\"STRING\" size=\"8\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_1",this);_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"CNTRCT_NO\" type=\"STRING\" size=\"11\"/><Column id=\"BCNC_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"7\"/><Column id=\"BCNC_NM\" type=\"STRING\" size=\"100\"/><Column id=\"RPRSNTV\" type=\"STRING\" size=\"100\"/><Column id=\"BCNC_NM\" type=\"STRING\" size=\"100\"/><Column id=\"INDUTY\" type=\"STRING\" size=\"100\"/><Column id=\"LCNS_NO\" type=\"STRING\" size=\"100\"/><Column id=\"TELNO\" type=\"STRING\" size=\"100\"/><Column id=\"AMT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"S_RT2\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CNTRCT_PD_1\" type=\"STRING\" size=\"8\"/><Column id=\"CNTRCT_PD_2\" type=\"STRING\" size=\"8\"/><Column id=\"RM\" type=\"STRING\" size=\"200\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\"/><Col id=\"colId\"/><Col id=\"notNull\"/><Col id=\"msgId\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond_ctr",this);_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"CTR_GB\" type=\"STRING\" size=\"3\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond_ctrDtl",this);_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"CNTRCT_NO\" type=\"STRING\" size=\"11\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond1",this);_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"CNTRCT_NO\" type=\"STRING\" size=\"11\"/><Column id=\"CNTRCT_SE\" type=\"STRING\" size=\"10\"/><Column id=\"CB1\" type=\"STRING\" size=\"3\"/><Column id=\"CB2\" type=\"STRING\" size=\"3\"/><Column id=\"CB3\" type=\"STRING\" size=\"3\"/><Column id=\"CTR_GB\" type=\"STRING\" size=\"1\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_CTR001",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_CTR007",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_PRJ017",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_PRJ023",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_BSNS",this);_a.set_useclientlayout("0");_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"string\" size=\"5\"/><Column id=\"BSNS_NM\" type=\"string\" size=\"100\"/><Column id=\"BSNS_ALL_NM\" type=\"string\" size=\"100\"/><Column id=\"BSNS_TY\" type=\"string\" size=\"3\"/><Column id=\"RM\" type=\"string\" size=\"200\"/><Column id=\"STRWRK_DE\" type=\"string\" size=\"8\"/><Column id=\"COMPET_DE\" type=\"string\" size=\"8\"/><Column id=\"BSNS_CONFM_DE\" type=\"string\" size=\"8\"/><Column id=\"MVN_DE\" type=\"string\" size=\"8\"/><Column id=\"RN\" type=\"string\" size=\"8\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("sta_gud_v01","absolute",null,"0","28",null,"0","0",this);_a.set_text("28");_a.set_visible("0");_a.style.set_background("#1b3cd23c");_a.style.set_align("center");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","32",null,null,"0","0",this);_a.set_taborder("5");this.addChild(_a.name,_a);_a=new Static("sta_1","absolute","0","13","200","19",null,null,this.div_work);_a.set_taborder("37");_a.set_text("계약목록");_a.set_cssclass("sta_WF_Title02");this.div_work.addChild(_a.name,_a);_a=new Static("sta_gud_h01","absolute","0","1",null,"10","0",null,this.div_work);_a.set_taborder("38");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center");this.div_work.addChild(_a.name,_a);_a=new Static("sta_gud_h02","absolute","0","30",null,"5","0",null,this.div_work);_a.set_taborder("39");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_ctr","absolute","0","35",null,"200","210",null,this.div_work);_a.set_taborder("40");_a.set_binddataset("ds_ctr");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"70\"/><Column size=\"195\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"18\" band=\"head\"/><Row size=\"18\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"계약번호\"/><Cell col=\"1\" rowspan=\"2\" text=\"계약구분\"/><Cell col=\"2\" rowspan=\"2\" text=\"계약명\"/><Cell col=\"3\" rowspan=\"2\" text=\"계약금액\"/><Cell col=\"4\" rowspan=\"2\" text=\"계약일자\"/><Cell col=\"5\" colspan=\"2\" text=\"용역계획기간\"/><Cell col=\"7\" rowspan=\"2\" text=\"첨부파일명\"/><Cell row=\"1\" col=\"5\" text=\"착수일자\"/><Cell row=\"1\" col=\"6\" text=\"완성일자\"/></Band><Band id=\"body\"><Cell text=\"bind:CNTRCT_NO\"/><Cell col=\"1\" displaytype=\"combo\" style=\"align:center;padding:0 5 0 5;\" text=\"bind:CTR_GB\" combodataset=\"ds_PRJ017\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"2\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:CNTRCT_NM\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" text=\"bind:TOT_CNTRCT_AMOUNT\" mask=\"#,##0\"/><Cell col=\"4\" displaytype=\"date\" text=\"bind:CNTRCT_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:STRWRK_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:COMPET_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"7\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" style=\"align:center;line:1 solid #ffd8cdff,0 none #e0e0e0ff;selectline:1 solid #FFD8CD,0 none #e0e0e0ff;\" text=\"합계\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('parseInt(TOT_CNTRCT_AMOUNT)||0')\" mask=\"#,##0\"/><Cell col=\"4\" colspan=\"4\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Div("div_00","absolute",null,"0","200","235","0",null,this.div_work);_a.set_taborder("41");this.div_work.addChild(_a.name,_a);_a=new Static("sta_1","absolute","0","14","126","19",null,null,this.div_work.div_00);_a.set_taborder("42");_a.set_text("수급자");_a.set_cssclass("sta_WF_Title02");_a.getSetter("visible2").set("0");this.div_work.div_00.addChild(_a.name,_a);_a=new Static("sta_gud_h01","absolute","0","1",null,"10","0",null,this.div_work.div_00);_a.set_taborder("43");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center");this.div_work.div_00.addChild(_a.name,_a);_a=new Static("sta_gud_h02","absolute","0","30",null,"5","0",null,this.div_work.div_00);_a.set_taborder("44");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center");this.div_work.div_00.addChild(_a.name,_a);_a=new Grid("grd_ctrDtl","absolute","0","35",null,null,"0","0",this.div_work.div_00);_a.set_taborder("45");_a.set_binddataset("ds_ctrDtl");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"60\"/></Columns><Rows><Row size=\"36\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"업체명\"/><Cell col=\"1\" text=\"대표자\"/></Band><Band id=\"body\"><Cell style=\"align:left;padding:0 5 0 5;\" text=\"bind:BCNC_NM\"/><Cell col=\"1\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:RPRSNTV\"/></Band></Format></Formats>");this.div_work.div_00.addChild(_a.name,_a);_a=new Div("div_1","absolute","0","235",null,null,"0","0",this.div_work);_a.set_taborder("42");this.div_work.addChild(_a.name,_a);_a=new Static("sta_1","absolute","0","12","126","19",null,null,this.div_work.div_1);_a.set_taborder("47");_a.set_text("하도급현황");_a.set_cssclass("sta_WF_Title02");_a.getSetter("visible2").set("0");this.div_work.div_1.addChild(_a.name,_a);_a=new Static("sta_gud_h01","absolute","0","0",null,"10","0",null,this.div_work.div_1);_a.set_taborder("48");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center");this.div_work.div_1.addChild(_a.name,_a);_a=new Static("sta_gud_h02","absolute","0","29",null,"5","0",null,this.div_work.div_1);_a.set_taborder("49");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center");this.div_work.div_1.addChild(_a.name,_a);_a=new Grid("grd_1","absolute","0","34",null,null,"0","0",this.div_work.div_1);_a.set_taborder("50");_a.set_binddataset("ds_1");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"120\"/><Column size=\"50\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"50\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"70\"/></Columns><Rows><Row size=\"18\" band=\"head\"/><Row size=\"18\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" colspan=\"5\" text=\"업체명\"/><Cell col=\"6\" colspan=\"2\" text=\"하도금액\"/><Cell col=\"8\" colspan=\"2\" text=\"공사기간\"/><Cell col=\"10\" rowspan=\"2\" text=\"현장대리인\"/><Cell row=\"1\" col=\"1\" text=\"상호\"/><Cell row=\"1\" col=\"2\" text=\"대표자\"/><Cell row=\"1\" col=\"3\" text=\"업종\"/><Cell row=\"1\" col=\"4\" text=\"면허\"/><Cell row=\"1\" col=\"5\" text=\"전화번호\"/><Cell row=\"1\" col=\"6\" text=\"금액\"/><Cell row=\"1\" col=\"7\" text=\"비률(%)\"/><Cell row=\"1\" col=\"8\" text=\"착공일자\"/><Cell row=\"1\" col=\"9\" text=\"완공일자\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:BCNC_NM\"/><Cell col=\"2\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:RPRSNTV\"/><Cell col=\"3\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:INDUTY\"/><Cell col=\"4\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:LCNS_NO\"/><Cell col=\"5\" text=\"bind:TELNO\" expr=\"dataset.parent.pmsUtil.formatPhone(TELNO)\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:AMT\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"##0.00\" text=\"bind:S_RT2\"/><Cell col=\"8\" displaytype=\"date\" text=\"bind:CNTRCT_PD_1\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"date\" text=\"bind:CNTRCT_PD_2\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:RM\"/></Band></Format></Formats>");this.div_work.div_1.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","0",null,this);_a.set_taborder("6");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Radio("rdo_CTR_GB","absolute","529","5","158","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("4");_a.set_innerdataset("@ds_PRJ017");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_direction("vertical");_a=new Static("sta_CTR_GB","absolute","455","6","75","20",null,null,this.div_search);_a.set_taborder("5");_a.set_text("계약구분 :");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_CL_SE","absolute","15","6","61","20",null,null,this.div_search);_a.set_taborder("6");_a.set_text("사업코드");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_bsns_code","absolute","79","5","350","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("7");_a.set_innerdataset("ds_BSNS");_a.set_codecolumn("BSNS_CODE");_a.set_datacolumn("BSNS_ALL_NM");_a.set_displayrowcount("15");_a.set_cssclass("cmb_WF_Essential");_a=new Layout("default","",200,235,this.div_work.div_00,function(_b){_b.set_taborder("41");});this.div_work.div_00.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work.div_1,function(_b){_b.set_taborder("42");});this.div_work.div_1.addLayout(_a.name,_a);_a=new Layout("default","",1031,703,this.div_work,function(_b){_b.set_taborder("5");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("6");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("PRJ010302");_b.set_titletext("PRJ010302_사업별하도급현황");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("PRJ010302.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("PRJ010302.xfdl",function(){this.ds_ctr.clearData();this.ds_ctrDtl.clearData();this.ds_1.clearData();this.PRJ010302_oninit=function(_a,_b){this.fn_init();this.fn_init_form();this.fn_init_dataset();};this.PRJ010302_onload=function(_a,_b){this.fn_loadCombo();};this.fn_init_form=function(){};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_loadCombo=function(){var _a=[['ds_CTR001','CTR001',1,''],['ds_PRJ017','PRJ017',1,'A']];var _b=function(_c,_d,_e){this.ds_PRJ017.set_filterstr('CODE < 9');this.div_search.rdo_CTR_GB.set_index(0);};this.gfn_comboLoad(_a,_b);this.fn_fill_combo(this.div_search.cmb_bsns_code,"hsco/pms/prj/bsnsCdList.do","선택",null);};this.fn_search=function(){var _a=this.ds_BSNS.getColumn(this.ds_BSNS.rowposition,"BSNS_CODE")||'';if(_a==''){this.alert("사업코드를 선택하세요.");return;}this.ds_cond1.setColumn(0,"BSNS_CODE",_a);this.ds_cond1.setColumn(0,"CTR_GB",this.div_search.rdo_CTR_GB.value);this.fn_transaction("ctrList");};this.fn_save=function(){if(this.gfn_message("confirm.저장.여부")){this.fn_transaction("save");}};this.fn_transaction=function(_a){if(this.ds_cond1.rowcount<1){return;}var _b;var _c;var _d;var _e="hsco/pms/prj/PRJ010302/"+_a+".do";var _f="input1=ds_cond1";var _g="";switch(_a){case "ctrList":_f="input1=ds_cond1";_g="ds_ctr=output1";_e="hsco/pms/prj/ctrList.do";break;case "ctrDtlList":_b=this.ds_cond_ctrDtl;_c=this.ds_ctr;_d="BSNS_CODE=BSNS_CODE,"+"CNTRCT_NO=CNTRCT_NO,";_f="input1=ds_cond_ctrDtl";_g="ds_ctrDtl=output1";_e="hsco/pms/prj/ctrDtlList.do";break;case "mList":_b=this.ds_cond1;_c=this.ds_ctr;_d="BSNS_CODE=BSNS_CODE,"+"CNTRCT_NO=CNTRCT_NO,";_g="ds_1=output1";break;}if(_b){_b.copyRow(0,_c,_c.rowposition,_d);}switch(_a){case "ctrList":this.ds_ctr.clearData();case "ctrDtlList":this.ds_ctrDtl.clearData();case "mList":break;}Ex.core.tran(this,_a,_e,_f,_g);};this.fn_callBack=function(_a,_b,_c){this.debug("fn_callBack() - "+_a+','+_b+','+_c);if(_b!=0){return this.gfn_callback_message(_a,_b,_c);}switch(_a){case "ctrDtlList":this.fn_transaction("mList");break;case "mList":break;}};this.ds_onrowposchanged=function(_a,_b){if(_a.rowcount<1){return;}switch(_a){case this.ds_ctr:return this.fn_transaction("ctrDtlList");case this.ds_ctrDtl:return this.fn_transaction("mList");}};this.fn_bsnsChanged=function(_a,_b){var _c=_a.index||0;if(this.ds_BSNS.rowcount==0){return false;}this.ds_BSNS.set_rowposition(_c);};});this.on_initEvent=function(){this.ds_ctr.addEventHandler("onrowposchanged",this.ds_onrowposchanged,this);this.ds_BSNS.addEventHandler("onrowposchanged",this.ds_onrowposchanged,this);this.ds_BSNS.addEventHandler("canrowposchange",this.ds_canrowposchange,this);this.addEventHandler("onload",this.PRJ010302_onload,this);this.addEventHandler("oninit",this.PRJ010302_oninit,this);this.div_search.rdo_CTR_GB.addEventHandler("onitemchanged",this.fn_search,this);this.div_search.cmb_bsns_code.addEventHandler("onitemchanged",this.fn_bsnsChanged,this);};this.loadIncludeScript("PRJ010302.xfdl");};})();