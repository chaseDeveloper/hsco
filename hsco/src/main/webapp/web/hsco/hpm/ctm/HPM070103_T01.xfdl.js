﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HPM070103_T01");this.set_classname("HPM070102");this.set_titletext("실적현황");this._setFormPosition(0,0,1031,705);}_a=new Grid("grd_acmsltSttusList","absolute","0","93",null,null,"0","0",this);_a.set_taborder("1");_a.set_binddataset("ds_acmsltSttusList");_a.set_extendsizetype("row");_a.set_cellsizingtype("col");_a.set_autosizingtype("row");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" text=\"순번\"/><Cell col=\"1\" colspan=\"7\" text=\"신  청  내  역\"/><Cell col=\"8\" colspan=\"7\" text=\"입  금  내  역\"/><Cell col=\"15\" colspan=\"3\" text=\"환  불  정  보\"/><Cell row=\"1\" col=\"1\" colspan=\"2\" text=\"신청자\"/><Cell row=\"1\" col=\"3\" rowspan=\"2\" displaytype=\"normal\" text=\"수강기간\" calendardisplaynulltype=\"default\"/><Cell row=\"1\" col=\"4\" rowspan=\"2\" text=\"수강시간\"/><Cell row=\"1\" col=\"5\" rowspan=\"2\" text=\"사용&#13;&#10;인원\"/><Cell row=\"1\" col=\"6\" rowspan=\"2\" colspan=\"2\" text=\"구분\"/><Cell row=\"1\" col=\"8\" rowspan=\"2\" text=\"입금자\"/><Cell row=\"1\" col=\"9\" rowspan=\"2\" text=\"결제구분\"/><Cell row=\"1\" col=\"10\" rowspan=\"2\" text=\"입금일자\"/><Cell row=\"1\" col=\"11\" colspan=\"3\" text=\"금액\"/><Cell row=\"1\" col=\"14\" rowspan=\"2\" text=\"진행상태\"/><Cell row=\"1\" col=\"15\" rowspan=\"2\" text=\"은행명\"/><Cell row=\"1\" col=\"16\" rowspan=\"2\" text=\"계좌번호\"/><Cell row=\"1\" col=\"17\" rowspan=\"2\" text=\"예금주\"/><Cell row=\"2\" col=\"1\" text=\"이름\"/><Cell row=\"2\" col=\"2\" text=\"교육명\"/><Cell row=\"2\" col=\"11\" text=\"입금\"/><Cell row=\"2\" col=\"12\" text=\"환불\"/><Cell row=\"2\" col=\"13\" text=\"계\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"홍길동\"/><Cell col=\"2\" style=\"align:left;\" text=\"문화강좌1\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:USE_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:USE_TIME\" autosizerow=\"limitmin\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:USE_NMPR\"/><Cell col=\"6\" displaytype=\"combo\" style=\"background:EXPR(dataset.getColumn(currow, &quot;DAY&quot;) == '1' ? 'beige' : '');background2:EXPR(dataset.getColumn(currow, &quot;DAY&quot;) == '1' ? 'beige' : '');color:EXPR(dataset.getColumn(currow, &quot;DAY&quot;) == '1' ? 'red' : '');color2:EXPR(dataset.getColumn(currow, &quot;DAY&quot;) == '1' ? 'red' : '');\" text=\"bind:DAY\" combodataset=\"ds_day\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"7\" displaytype=\"combo\" text=\"bind:TM\" combodataset=\"ds_tm\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"8\" style=\"align:left;\" text=\"홍길동\"/><Cell col=\"9\" displaytype=\"combo\" text=\"bind:SETLE_SE\" combodataset=\"ds_setleSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"10\" displaytype=\"date\" text=\"bind:SETLE_COMPT_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" style=\"align:right;\" text=\"bind:SETLE_AM\"/><Cell col=\"12\" style=\"align:right;\" text=\"bind:REFND_AM\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AM\"/><Cell col=\"14\" displaytype=\"combo\" text=\"bind:SETLE_STTUS\" combodataset=\"ds_setleSttusSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"15\" text=\"bind:REFND_BANK_NM\"/><Cell col=\"16\" text=\"bind:REFND_ACNUTNO\"/><Cell col=\"17\" text=\"bind:REFND_DPSTR\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"계\"/><Cell col=\"4\"/><Cell col=\"5\" displaytype=\"number\" text=\"expr:dataset.getCaseSum(&quot;SETLE_STTUS != '007'&quot;, 'USE_NMPR')\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('SETLE_AM')\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('REFND_AM')\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('AM')\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"59","0",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","0","0","15",null,null,"0",this.div_search);_a.set_taborder("52");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static51","absolute","0","0",null,"5","0",null,this.div_search);_a.set_taborder("53");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","26",null,"5","0",null,this.div_search);_a.set_taborder("54");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("sta_searchDe04","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("55");_a.set_text("담당부서");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_dept","absolute","84","5","195","21",null,null,this.div_search);_a.set_taborder("0");_a.set_enable("false");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("sta_searchDe00","absolute","15","31","64","21",null,null,this.div_search);_a.set_taborder("57");_a.set_text("시설명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","507","0","15",null,null,"0",this.div_search);_a.set_taborder("58");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_fcltsCn","absolute","83","31","276","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("3");_a.set_innerdataset("@ds_rentFcltsManageList");_a.set_codecolumn("FCLTS_SN");_a.set_datacolumn("FCLTS_NM");_a=new Static("Static01","absolute","279","0","15",null,null,"0",this.div_search);_a.set_taborder("60");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_searchDe01","absolute","523","5","64","21",null,null,this.div_search);_a.set_taborder("61");_a.set_text("조회일자");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_bgnDe","absolute","589","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("sta_csv","absolute","692","5","10","21",null,null,this.div_search);_a.set_taborder("63");_a.set_text("~");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_endDe","absolute","705","5","102","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("sta_bizplcList","absolute","293","5","51","21",null,null,this.div_search);_a.set_taborder("64");_a.set_text("사업소");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_bizplcList","absolute","356","5","150","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("65");_a.set_innerdataset("ds_bizplcList");_a.set_codecolumn("BIZPLC_CODE");_a.set_datacolumn("BIZPLC_NM");_a=new Static("Static02","absolute","0","52",null,"5","0",null,this.div_search);_a.set_taborder("66");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","59","1031","10",null,null,this);_a.set_taborder("3");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_gnfdList","absolute","0","69","178","19",null,null,this);_a.set_taborder("4");_a.set_text("실적현황");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","88",null,"5","28",null,this);_a.set_taborder("5");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",1031,59,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1031,705,this,function(_b){_b.set_classname("HPM070102");_b.set_titletext("실적현황");});this.addLayout(_a.name,_a);_a=new BindItem("item3","div_SEARCH.cmb_fcltsCn","value","ds_cond","FCLTS_SN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_search.cmb_fcltsCn","value","ds_cond","FCLTS_SN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.cal_bgnDe","value","ds_cond","BGNDE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_search.cal_endDe","value","ds_cond","ENDDE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","div_search.cmb_bizplcList","value","ds_cond","BIZPLC_CODE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");};this.addIncludeScript("HPM070103_T01.xfdl","lib::comInclude.xjs");this.addIncludeScript("HPM070103_T01.xfdl","mis_lib::misUtil.xjs");this.registerScript("HPM070103_T01.xfdl",function(){this.saveRow= -1;this.HPM070103_T01_onload=function(_a,_b){this.gfn_initForm(this);this.fn_misFormInit(this);this.div_search.div_dept.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");this.div_search.cmb_bizplcList.set_index(0);};});this.on_initEvent=function(){this.addEventHandler("onload",this.HPM070103_T01_onload,this);this.div_search.sta_csv.addEventHandler("onclick",this.Div00_sta_csv_onclick,this);};this.loadIncludeScript("HPM070103_T01.xfdl");this.loadPreloadList();};})();