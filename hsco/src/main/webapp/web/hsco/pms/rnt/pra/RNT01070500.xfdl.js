﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("RNT01070500");this.set_classname("RNT01070500");this.set_titletext("지원금수납체납관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"dfnntPymntDe\" type=\"STRING\" size=\"256\"/><Column id=\"GB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rentHouseCodeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_canclSeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">%</Col><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE_NM\">계약자</Col><Col id=\"CODE\">1</Col></Row><Row><Col id=\"CODE_NM\">해약자</Col><Col id=\"CODE\">0</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_rentSportDelintList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"RENT_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\" sumtext=\"건 수 :\"/><Column id=\"HO\" type=\"STRING\" size=\"256\" prop=\"COUNT\"/><Column id=\"AEA\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"MBTLNO\" type=\"STRING\" size=\"256\"/><Column id=\"CANCL_DE\" type=\"STRING\" size=\"256\"/><Column id=\"GTN\" type=\"STRING\" size=\"256\" sumtext=\"소 계 :\"/><Column id=\"RQEST_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PAY_TMLMT\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"IN_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"IN_BANK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IN_ACCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"IN_TR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"IN_TR_SDATE\" type=\"STRING\" size=\"256\"/><Column id=\"IN_TR_EDATE\" type=\"STRING\" size=\"256\"/><Column id=\"IN_CRT_DIV\" type=\"STRING\" size=\"256\"/><Column id=\"IN_CRT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IN_BILL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"IN_CORT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"IN_PAY_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"IN_REC_CLASS\" type=\"STRING\" size=\"256\"/><Column id=\"IN_REC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"IN_PAYEND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"IN_BILL_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"IN_PAY_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"IN_SALE_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"IN_INT_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"IN_BILL_DIV\" type=\"STRING\" size=\"256\"/><Column id=\"IN_BJ_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VACCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GIGWAN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HANGLE\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RQEST_AMOUNT2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">cal_stdrDe</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">기준일자</Col></Row><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">cal_stPayTmlmt</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">시작납입기한</Col></Row><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">cal_edPayTmlmt</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">종료납입기한</Col></Row><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">edt_stOvdintrCnt</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">체납개월</Col></Row><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">edt_edOvdintrCnt</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">체납개월</Col></Row><Row><Col id=\"colId\">msk_stOvdintr</Col><Col id=\"compId\">div_search</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">체납금액</Col></Row><Row><Col id=\"colId\">msk_edOvdintr</Col><Col id=\"compId\">div_search</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">체납금액</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_damdangja",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"CENTER_JANG\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"CENTER\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"FAX\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANG\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANG_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_TMLMT\" type=\"STRING\" size=\"256\"/><Column id=\"STDE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond99",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"59","28",null,this);_a.set_taborder("0");_a.style.set_background("#f9fbffff");_a.style.set_font("bold 9 Verdana");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Combo("cmb_rentHouseCode","absolute","79","5","156","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_innerdataset("ds_rentHouseCodeList");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_type("search");_a.set_autoselect("true");_a=new Static("Static05","absolute","192","31","64","21",null,null,this.div_search);_a.set_taborder("150");_a.set_text("납입기한");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("151");_a.set_text("주택코드");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Static("Static10","absolute","251","5","51","21",null,null,this.div_search);_a.set_taborder("152");_a.set_text("동/호");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_stPayTmlmt","absolute","256","31","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("6");_a.set_dateformat("yyyy-MM-dd");_a.set_autoselect("true");_a=new Calendar("cal_edPayTmlmt","absolute","369","31","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("7");_a.set_dateformat("yyyy-MM-dd");_a.set_autoselect("true");_a=new Static("Static00","absolute","357","31","8","21",null,null,this.div_search);_a.set_taborder("159");_a.set_text("~");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","484","5","64","21",null,null,this.div_search);_a.set_taborder("160");_a.set_text("계약자명");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_nm","absolute","548","5","146","21",null,null,this.div_search);_a.set_taborder("3");_a.set_autoselect("true");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","15","31","64","21",null,null,this.div_search);_a.set_taborder("162");_a.set_text("기준일자");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_stdrDe","absolute","79","31","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("5");_a.set_dateformat("yyyy-MM-dd");_a.set_autoselect("true");_a=new Static("Static06","absolute","484","31","64","21",null,null,this.div_search);_a.set_taborder("164");_a.set_text("체납개월");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_stOvdintrCnt","absolute","548","31","67","21",null,null,this.div_search);_a.set_taborder("8");_a.set_value("1");_a.set_autoselect("true");this.div_search.addChild(_a.name,_a);_a=new Static("Static07","absolute","382","5","12","21",null,null,this.div_search);_a.set_taborder("166");_a.set_text("/");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_edOvdintrCnt","absolute","627","31","67","21",null,null,this.div_search);_a.set_taborder("9");_a.set_value("9999");_a.set_autoselect("true");this.div_search.addChild(_a.name,_a);_a=new Static("Static08","absolute","616","31","8","21",null,null,this.div_search);_a.set_taborder("168");_a.set_text("~");this.div_search.addChild(_a.name,_a);_a=new Static("Static09","absolute","709","31","64","21",null,null,this.div_search);_a.set_taborder("169");_a.set_text("체납금액");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Static("Static11","absolute","853","31","8","21",null,null,this.div_search);_a.set_taborder("170");_a.set_text("~");this.div_search.addChild(_a.name,_a);_a=new MaskEdit("msk_stOvdintr","absolute","773","31","80","21",null,null,this.div_search);_a.set_taborder("10");_a.set_value("1");_a.set_mask("9,999");_a.set_autoselect("true");this.div_search.addChild(_a.name,_a);_a=new MaskEdit("msk_edOvdintr","absolute","864","31","80","21",null,null,this.div_search);_a.set_taborder("11");_a.set_value("999999999");_a.set_mask("9,999");_a.set_autoselect("true");this.div_search.addChild(_a.name,_a);_a=new Radio("rdo_canclSe","absolute","959","5","60","51",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("4");_a.set_rowcount("3");_a.set_innerdataset("@ds_canclSeList");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_value("1");_a.set_index("1");_a=new Edit("edt_ho","absolute","393","5","76","21",null,null,this.div_search);_a.set_taborder("2");_a.set_autoselect("true");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_dong","absolute","302","5","76","21",null,null,this.div_search);_a.set_taborder("1");_a.set_autoselect("true");this.div_search.addChild(_a.name,_a);_a=new Div("div_WORK","absolute","0","59",null,null,"28","0",this);_a.set_taborder("1");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","0","1031","10",null,null,this.div_WORK);_a.set_taborder("0");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static16","absolute","0","10","119","21",null,null,this.div_WORK);_a.set_taborder("1");_a.set_text("체납현황");_a.set_cssclass("sta_WF_Title02");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","31",null,"5","0",null,this.div_WORK);_a.set_taborder("2");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Grid("grd_rentSportDelintList","absolute","0","62",null,null,"0","0",this.div_WORK);_a.set_taborder("3");_a.set_binddataset("ds_rentSportDelintList");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"주택명\"/><Cell col=\"1\" text=\"동\"/><Cell col=\"2\" text=\"호\"/><Cell col=\"3\" text=\"평\"/><Cell col=\"4\" text=\"계약자\"/><Cell col=\"5\" text=\"연락처1\"/><Cell col=\"6\" text=\"연락처2\"/><Cell col=\"7\" text=\"해약일자\"/><Cell col=\"8\" text=\"납입기한\"/><Cell col=\"9\" text=\"보증금\"/><Cell col=\"10\" text=\"체납금액\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:RENT_HOUSE_NM\"/><Cell col=\"1\" style=\"font:EXPR(RENT_HOUSE_NM == null ? &quot;bold 10 arial&quot;:&quot;&quot;);\" text=\"bind:DONG\"/><Cell col=\"2\" style=\"font:EXPR(RENT_HOUSE_NM == null ? &quot;bold 10 arial&quot;:&quot;&quot;);\" text=\"bind:HO\"/><Cell col=\"3\" text=\"bind:AEA\"/><Cell col=\"4\" text=\"bind:NM\"/><Cell col=\"5\" text=\"bind:TELNO\"/><Cell col=\"6\" text=\"bind:MBTLNO\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:CANCL_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"date\" text=\"bind:IN_PAYEND_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;font:EXPR(RENT_HOUSE_NM == null ? &quot;bold 10 arial&quot;:&quot;&quot;);\" text=\"bind:GTN\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;font:EXPR(RENT_HOUSE_NM == null ? &quot;bold 10 arial&quot;:&quot;&quot;);\" text=\"bind:RQEST_AMOUNT\"/></Band><Band id=\"summary\"><Cell colspan=\"8\" displaytype=\"number\" style=\"align:left;\" text=\"expr:dataset.getRowCount()\" mask=\"expr:dataset.getRowCount() == 0  ? &quot;건수 : 0&quot;  : '건수 : #,###'\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum(&quot;parseInt(GTN)||0&quot;)\"/><Cell col=\"9\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum(&quot;parseInt(RQEST_AMOUNT)||0&quot;)\"/></Band></Format></Formats>");this.div_WORK.addChild(_a.name,_a);_a=new Button("btn_rqstVaBillUid","absolute",null,"36","101","21","0",null,this.div_WORK);_a.set_taborder("4");_a.set_text("일괄납부요청");this.div_WORK.addChild(_a.name,_a);_a=new Radio("rdo_canclSe","absolute","6","36","182","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);var _b=new Dataset("rdo_canclSe_innerdataset",this.div_WORK.rdo_canclSe);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">상세내역</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">합산내역</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("5");_a.set_rowcount("1");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_value("1");_a.set_index("1");_a=new Static("Static00","absolute","0.1%","57",null,"5","0%",null,this.div_WORK);_a.set_taborder("6");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Button("Button00","absolute",null,"36","100","21","103",null,this.div_WORK);_a.set_taborder("7");_a.set_text("체납 안내문");this.div_WORK.addChild(_a.name,_a);_a=new Div("Div01","absolute",null,"57","457","268","1",null,this.div_WORK);_a.set_taborder("8");_a.set_text("Div00");_a.style.set_background("#fbfbfcff");_a.style.set_border("1 solid black");_a.set_visible("false");this.div_WORK.addChild(_a.name,_a);_a=new Button("Button01","absolute","3.49%","5",null,"21","81%",null,this.div_WORK.Div01);_a.set_taborder("33");_a.set_text("출력");this.div_WORK.Div01.addChild(_a.name,_a);_a=new Button("Button12","absolute","20.74%","5",null,"21","63.76%",null,this.div_WORK.Div01);_a.set_taborder("34");_a.set_text("취소");this.div_WORK.Div01.addChild(_a.name,_a);_a=new Static("Static01","absolute","2.42%","213",null,"21","72.75%",null,this.div_WORK.Div01);_a.set_taborder("35");_a.set_text("납부기한");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.div_WORK.Div01.addChild(_a.name,_a);_a=new Calendar("cal_sndng_de","absolute","24.62%","212",null,"21","43.74%",null,this.div_WORK.Div01);this.div_WORK.Div01.addChild(_a.name,_a);_a.set_taborder("36");_a.set_dateformat("yyyy-MM-dd");_a=new Static("Static02","absolute","2.42%","236",null,"21","74.07%",null,this.div_WORK.Div01);_a.set_taborder("37");_a.set_text("제     목");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.div_WORK.Div01.addChild(_a.name,_a);_a=new Edit("edt_rm00","absolute","24.62%","237",null,"21","2.42%",null,this.div_WORK.Div01);_a.set_taborder("38");this.div_WORK.Div01.addChild(_a.name,_a);_a=new Static("Static05","absolute","2.4%","36",null,"21","74.02%",null,this.div_WORK.Div01);_a.set_taborder("39");_a.set_text("우편번호");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.div_WORK.Div01.addChild(_a.name,_a);_a=new Edit("edt_zip","absolute","24.67%","37",null,"21","43.67%",null,this.div_WORK.Div01);_a.set_taborder("40");this.div_WORK.Div01.addChild(_a.name,_a);_a=new Static("Static06","absolute","2.4%","61",null,"21","74.02%",null,this.div_WORK.Div01);_a.set_taborder("41");_a.set_text("주     소");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.div_WORK.Div01.addChild(_a.name,_a);_a=new Edit("edt_adres","absolute","24.67%","62",null,"21","2.4%",null,this.div_WORK.Div01);_a.set_taborder("42");this.div_WORK.Div01.addChild(_a.name,_a);_a=new Static("Static07","absolute","2.4%","86",null,"21","74.02%",null,this.div_WORK.Div01);_a.set_taborder("43");_a.set_text("전     화");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.div_WORK.Div01.addChild(_a.name,_a);_a=new Edit("edt_telno","absolute","24.67%","87",null,"21","43.67%",null,this.div_WORK.Div01);_a.set_taborder("44");this.div_WORK.Div01.addChild(_a.name,_a);_a=new Static("Static08","absolute","2.4%","111",null,"21","74.02%",null,this.div_WORK.Div01);_a.set_taborder("45");_a.set_text("팩     스");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.div_WORK.Div01.addChild(_a.name,_a);_a=new Edit("edt_fax","absolute","24.67%","112",null,"21","43.67%",null,this.div_WORK.Div01);_a.set_taborder("46");this.div_WORK.Div01.addChild(_a.name,_a);_a=new Static("Static09","absolute","2.4%","136",null,"21","74.02%",null,this.div_WORK.Div01);_a.set_taborder("47");_a.set_text("부 서 장");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.div_WORK.Div01.addChild(_a.name,_a);_a=new Edit("edt_center","absolute","24.67%","137",null,"21","43.67%",null,this.div_WORK.Div01);_a.set_taborder("48");this.div_WORK.Div01.addChild(_a.name,_a);_a=new Static("Static10","absolute","2.42%","163",null,"21","74.07%",null,this.div_WORK.Div01);_a.set_taborder("49");_a.set_text("담 당 자");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.div_WORK.Div01.addChild(_a.name,_a);_a=new Edit("edt_damdang","absolute","24.67%","162",null,"21","43.67%",null,this.div_WORK.Div01);_a.set_taborder("50");this.div_WORK.Div01.addChild(_a.name,_a);_a=new Static("Static00","absolute","2.42%","188",null,"21","72.75%",null,this.div_WORK.Div01);_a.set_taborder("51");_a.set_text("시행일자");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.div_WORK.Div01.addChild(_a.name,_a);_a=new Calendar("cal_sndng_de00","absolute","24.62%","187",null,"21","43.74%",null,this.div_WORK.Div01);this.div_WORK.Div01.addChild(_a.name,_a);_a.set_taborder("52");_a.set_dateformat("yyyy-MM-dd");_a=new Layout("default","",0,59,this.div_search,function(_c){_c.set_taborder("0");_c.style.set_background("#f9fbffff");_c.style.set_font("bold 9 Verdana");_c.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",457,268,this.div_WORK.Div01,function(_c){_c.set_taborder("8");_c.set_text("Div00");_c.style.set_background("#fbfbfcff");_c.style.set_border("1 solid black");_c.set_visible("false");});this.div_WORK.Div01.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_WORK,function(_c){_c.set_taborder("1");});this.div_WORK.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_c){_c.set_classname("RNT01070500");_c.set_titletext("지원금수납체납관리");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_WORK.Div01.edt_zip","value","ds_damdangja","ZIP");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_WORK.Div01.edt_adres","value","ds_damdangja","ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_WORK.Div01.edt_telno","value","ds_damdangja","DAMDANG_TEL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_WORK.Div01.edt_fax","value","ds_damdangja","FAX");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_WORK.Div01.edt_center","value","ds_damdangja","CENTER_JANG");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_WORK.Div01.edt_damdang","value","ds_damdangja","DAMDANG");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_WORK.Div01.edt_rm00","value","ds_damdangja","TITLE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_WORK.Div01.cal_sndng_de","value","ds_damdangja","PAY_TMLMT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","div_WORK.Div01.cal_sndng_de00","value","ds_damdangja","STDE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("RNT01070500.xfdl","pms_lib::rntUtilInclude.xjs");this.registerScript("RNT01070500.xfdl",function(){this.RNT01070500_oninit=function(_a,_b){this.fn_init();this.fn_init_dataset();};this.RNT01070500_onload=function(_a,_b){var _c=this.gfn_today();this.div_search.cal_stPayTmlmt.set_value('19000101');this.div_search.cal_edPayTmlmt.set_value(_c);this.div_search.cal_stdrDe.set_value(_c);this.fn_load_combo();this.div_search.edt_dong.clearEventHandler("onkeydown");this.fn_transaction("damDangJa");};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_load_combo=function(){this.fn_get_rentHouseCode(this.div_search.cmb_rentHouseCode,"전체",{HOUSE_SE:'R1'});};this.fn_search=function(){if(this.gfn_checkValidation(this.div_search,this.ds_validation)==false){return;}this.ds_rentSportDelintList.clearData();this.fn_divToDS(this.ds_cond00,this.div_search);this.ds_cond00.setColumn(0,"GB",this.div_WORK.rdo_canclSe.value);this.fn_transaction("rentSportDelintList");};this.div_WORK_btn_rqstVaBillUid_onclick=function(_a,_b){if(this.div_WORK.rdo_canclSe.value=='2'){alert("상세내역으로 다시 조회하여 주십시오");return;}this.gfn_popup("popup_gtnSportRq",351,113,"",{callback:"fn_spVaBillUid"},"pms_rnt_pra::RNT01070500_P01.xfdl","",true);};this.fn_transaction=function(_a){var _b=true;switch(_a){case "rentSportDelintList":var _c="/hsco/pms/rnt/pra/RNT01070500/rentSportDelintList.do";var _d="input1=ds_cond00";var _e="ds_rentSportDelintList=output1";break;case "spVaBillUid":var _c="/hsco/pms/rnt/pra/RNT01070500/spVaBillUid.do";var _d="input1=ds_rentSportDelintList";var _e="";break;case "damDangJa":this.ds_cond99.clearData();var _f=this.ds_cond99.addRow();this.ds_cond99.setColumn(_f,"CODE","RN1001");var _c="hsco/pms/rnt/rnt030201/damDangJa.do";var _d="input1=ds_cond99";var _e="ds_damdangja=output1";break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){this.fn_callback_message(_a,_b,_c);var _d=_b==0?true:false;};this.fn_spVaBillUid=function(_a,_b,_c){if(this.confirm("기존 요청자료가 존재할 경우 삭제됩니다. 작업을 진행하시겠습니까?")){var _d=this.ds_rentSportDelintList.rowcount;for(var _e=0;_e<_d;_e++ ){this.ds_rentSportDelintList.setColumn(_e,"IN_TR_DATE",_a);this.ds_rentSportDelintList.setColumn(_e,"IN_TR_SDATE",_b);this.ds_rentSportDelintList.setColumn(_e,"IN_TR_EDATE",_c);}this.fn_transaction("spVaBillUid");}};this.div_WORK_rdo_canclSe_onitemchanged=function(_a,_b){this.fn_search();};this.div_WORK_Button00_onclick=function(_a,_b){if(this.div_WORK.rdo_canclSe.value==1){alert("합산내역으로 다시 조회하여 주십시오.");return;}this.ds_damdangja.setColumn(0,"TITLE","임대보증금 상환금 납부 독촉");this.ds_damdangja.setColumn(0,"STDE",this.dateUtils.today());this.ds_damdangja.setColumn(0,"PAY_TMLMT",this.dateUtils.today());this.div_WORK.Div01.set_visible(true);};this.div_WORK_Div01_Button01_onclick=function(_a,_b){var _c={};_c["path"]="/pms/rnt/pra/RNT01070500.jrf";_c["title"]=this.div_WORK.Div01.edt_rm00.value;_c["filename"]=this.div_WORK.Div01.edt_rm00.value;_c["dataset"]=[["ds_rentSportDelintList",this.ds_rentSportDelintList],["ds_damdangja",this.ds_damdangja]];this.div_WORK.Div01.set_visible(false);this.pmsUtil.popupReportView(this,_c);};this.PopupDiv00_Button12_onclick=function(_a,_b){this.div_WORK.Div01.set_visible(false);};});this.on_initEvent=function(){this.addEventHandler("oninit",this.RNT01070500_oninit,this);this.addEventHandler("onload",this.RNT01070500_onload,this);this.div_search.cmb_rentHouseCode.addEventHandler("onitemchanged",this.div_search_cmb_rentHouseCode_onitemchanged,this);this.div_search.cal_stPayTmlmt.addEventHandler("canchange",this.div_search_cal_stPayTmlmt_canchange,this);this.div_search.cal_edPayTmlmt.addEventHandler("canchange",this.div_search_cal_edPayTmlmt_canchange,this);this.div_search.cal_stdrDe.addEventHandler("canchange",this.div_search_cal_stRceptDe_canchange,this);this.div_WORK.Static04.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.div_WORK.btn_rqstVaBillUid.addEventHandler("onclick",this.div_WORK_btn_rqstVaBillUid_onclick,this);this.div_WORK.rdo_canclSe.addEventHandler("onitemclick",this.div_search_rdo_canclSe_onitemclick,this);this.div_WORK.rdo_canclSe.addEventHandler("onitemchanged",this.div_WORK_rdo_canclSe_onitemchanged,this);this.div_WORK.Static00.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.div_WORK.Button00.addEventHandler("onclick",this.div_WORK_Button00_onclick,this);this.div_WORK.Div01.Button01.addEventHandler("onclick",this.div_WORK_Div01_Button01_onclick,this);this.div_WORK.Div01.Button12.addEventHandler("onclick",this.PopupDiv00_Button12_onclick,this);};this.loadIncludeScript("RNT01070500.xfdl");};})();