﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ACC020302");this.set_classname("UI_ACC020302");this.set_titletext("지출전송확인");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SRCH_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FL_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"FL_TIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_acc001",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_lqttTransfr",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SITE_NO\" type=\"string\" size=\"32\"/><Column id=\"FL_DATE\" type=\"string\" size=\"32\"/><Column id=\"FL_TIME\" type=\"string\" size=\"32\"/><Column id=\"SEND_GB\" type=\"string\" size=\"32\"/><Column id=\"SUM_CNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"SUM_AMT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"ERP_USER_ID\" type=\"string\" size=\"32\"/><Column id=\"ERP_USER_NM\" type=\"string\" size=\"32\"/><Column id=\"ENT_NOR_CNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"ENT_NOR_AMT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"ENT_ERR_CNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"ENT_ERR_AMT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"ENT_BUL_CNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"ENT_BUL_AMT\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_lqttTransfrDetail",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a.set_enableevent("true");_a._setContents("<ColumnInfo><Column id=\"SITE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FL_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"FL_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"FL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_GB\" type=\"STRING\" size=\"256\"/><Column id=\"IN_BANK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FNNC_INSTT_CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IN_ACCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TRAN_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PRE_RECI_MAN\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"EB_STS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EB_STS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ERR_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"CMPNSP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"INCME_EXPNDTR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_lqttTransfrError",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a.set_enableevent("true");_a._setContents("<ColumnInfo><Column id=\"SITE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FL_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"FL_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"FL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_GB\" type=\"STRING\" size=\"256\"/><Column id=\"IN_BANK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FNNC_INSTT_CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IN_ACCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TRAN_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PRE_RECI_MAN\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"EB_STS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EB_STS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ERR_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"CMPNSP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"INCME_EXPNDTR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_salaryTransfr",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SITE_NO\" type=\"string\" size=\"32\"/><Column id=\"FL_DATE\" type=\"string\" size=\"32\"/><Column id=\"FL_TIME\" type=\"string\" size=\"32\"/><Column id=\"SEND_GB\" type=\"string\" size=\"32\"/><Column id=\"SUM_CNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"SUM_AMT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"ERP_USER_ID\" type=\"string\" size=\"32\"/><Column id=\"ERP_USER_NM\" type=\"string\" size=\"32\"/><Column id=\"ENT_NOR_CNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"ENT_NOR_AMT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"ENT_ERR_CNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"ENT_ERR_AMT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"ENT_BUL_CNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"ENT_BUL_AMT\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_salaryTransfrDetail",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SITE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FL_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"FL_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"FL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_GB\" type=\"STRING\" size=\"256\"/><Column id=\"IN_BANK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FNNC_INSTT_CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IN_ACCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TRAN_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PRE_RECI_MAN\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"EB_STS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EB_STS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ERR_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"CMPNSP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"INCME_EXPNDTR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_salaryTransfrError",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SITE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FL_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"FL_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"FL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_GB\" type=\"STRING\" size=\"256\"/><Column id=\"IN_BANK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FNNC_INSTT_CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IN_ACCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TRAN_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PRE_RECI_MAN\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"EB_STS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EB_STS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ERR_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"CMPNSP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"INCME_EXPNDTR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">SRCH_DT</Col><Col id=\"msgId\">지출일자</Col><Col id=\"notNull\">Y</Col><Col id=\"from\"/><Col id=\"to\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_SEARCH","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_text("Div00");_a.set_applystyletype("cascade,keep");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","0","0","15",null,null,"0",this.div_SEARCH);_a.set_taborder("12");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_SEARCH.addChild(_a.name,_a);_a=new Calendar("Calendar00","absolute","84","5","100","21",null,null,this.div_SEARCH);this.div_SEARCH.addChild(_a.name,_a);_a.set_taborder("1");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("sta_EMPL_SE03","absolute","15","5","64","21",null,null,this.div_SEARCH);_a.set_taborder("36");_a.set_text("지출일자");_a.set_cssclass("sta_WFSA_Label");this.div_SEARCH.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("6");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("7");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Tab("tab","absolute","0","43",null,null,"28","0",this);_a.set_taborder("1");_a.set_tabindex("0");_a.set_scrollbars("autoboth");_a.style.set_showextrabutton("false");this.addChild(_a.name,_a);_a=new Tabpage("tabpage1",this.tab);_a.set_text("대량이체");this.tab.addChild(_a.name,_a);_a=new Grid("grd_lqttTransfr","absolute","0","5",null,"200","0",null,this.tab.tabpage1);_a.set_taborder("0");_a.set_binddataset("ds_lqttTransfr");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"110\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"110\"/><Column size=\"40\"/><Column size=\"110\"/><Column size=\"40\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" colspan=\"3\" text=\"구분\"/><Cell col=\"4\" colspan=\"3\" text=\"전송내역\"/><Cell col=\"7\" colspan=\"2\" text=\"정상\"/><Cell col=\"9\" colspan=\"2\" text=\"예금주/계좌오류\"/><Cell col=\"11\" colspan=\"2\" text=\"뱅킹오류\"/><Cell row=\"1\" col=\"1\" text=\"이체구분\"/><Cell row=\"1\" col=\"2\" text=\"생성일자\"/><Cell row=\"1\" col=\"3\" text=\"생성시간\"/><Cell row=\"1\" col=\"4\" text=\"전송건수\"/><Cell row=\"1\" col=\"5\" text=\"전송금액\"/><Cell row=\"1\" col=\"6\" text=\"등록자\"/><Cell row=\"1\" col=\"7\" text=\"건수\"/><Cell row=\"1\" col=\"8\" text=\"금액\"/><Cell row=\"1\" col=\"9\" text=\"건수\"/><Cell row=\"1\" col=\"10\" text=\"금액\"/><Cell row=\"1\" col=\"11\" text=\"건수\"/><Cell row=\"1\" col=\"12\" text=\"금액\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:SEND_GB\"/><Cell col=\"2\" displaytype=\"date\" text=\"bind:FL_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" style=\"align:right;\" text=\"bind:FL_TIME\"/><Cell col=\"4\" style=\"align:right;\" text=\"bind:SUM_CNT\"/><Cell col=\"5\" style=\"align:right;\" text=\"bind:SUM_AMT\"/><Cell col=\"6\" text=\"bind:ERP_USER_NM\"/><Cell col=\"7\" style=\"align:right;\" text=\"bind:ENT_NOR_CNT\"/><Cell col=\"8\" style=\"align:right;\" text=\"bind:ENT_NOR_AMT\"/><Cell col=\"9\" style=\"align:right;\" text=\"bind:ENT_ERR_CNT\"/><Cell col=\"10\" style=\"align:right;\" text=\"bind:ENT_ERR_AMT\"/><Cell col=\"11\" style=\"align:right;\" text=\"bind:ENT_BUL_CNT\"/><Cell col=\"12\" style=\"align:right;\" text=\"bind:ENT_BUL_AMT\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"3\" text=\"건수/합계\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;SUM_CNT&quot;)\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;SUM_AMT&quot;)\"/><Cell col=\"6\" colspan=\"7\"/></Band></Format></Formats>");this.tab.tabpage1.addChild(_a.name,_a);_a=new Tab("tab","absolute","0","210",null,null,"0","0",this.tab.tabpage1);_a.set_taborder("1");_a.set_tabindex("0");_a.set_scrollbars("autoboth");_a.style.set_showextrabutton("false");this.tab.tabpage1.addChild(_a.name,_a);_a=new Tabpage("tab",this.tab.tabpage1.tab);_a.set_text("대량이체상세");_a.set_taborder("0");this.tab.tabpage1.tab.addChild(_a.name,_a);_a=new Grid("grd_lqttTransfrDetail","absolute","0","5",null,null,"0","0",this.tab.tabpage1.tab.tab);_a.set_taborder("0");_a.set_binddataset("ds_lqttTransfrDetail");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"180\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"입금은행\"/><Cell col=\"2\" text=\"입금계좌\"/><Cell col=\"3\" text=\"이체금액\"/><Cell col=\"4\" text=\"예금주\"/><Cell col=\"5\" text=\"적요\"/><Cell col=\"6\" text=\"대사번호\"/><Cell col=\"7\" text=\"지출구분\"/></Band><Band id=\"body\"><Cell style=\"background:EXPR(ERR_CD == &quot;0000&quot; ||  ERR_CD == null ? &quot;&quot; : &quot;red&quot;);background2:EXPR(ERR_CD == &quot;0000&quot; ||  ERR_CD == null ? &quot;&quot; : &quot;red&quot;);\" text=\"bind:FL_SEQ\"/><Cell col=\"1\" style=\"align:left;background:EXPR(ERR_CD == &quot;0000&quot; ||  ERR_CD == null ? &quot;&quot; : &quot;red&quot;);background2:EXPR(ERR_CD == &quot;0000&quot; ||  ERR_CD == null ? &quot;&quot; : &quot;red&quot;);\" text=\"bind:FNNC_INSTT_CODE_NM\"/><Cell col=\"2\" style=\"align:left;background:EXPR(ERR_CD == &quot;0000&quot; ||  ERR_CD == null ? &quot;&quot; : &quot;red&quot;);background2:EXPR(ERR_CD == &quot;0000&quot; ||  ERR_CD == null ? &quot;&quot; : &quot;red&quot;);\" text=\"bind:IN_ACCT_NO\"/><Cell col=\"3\" style=\"align:right;background:EXPR(ERR_CD == &quot;0000&quot; ||  ERR_CD == null ? &quot;&quot; : &quot;red&quot;);background2:EXPR(ERR_CD == &quot;0000&quot; ||  ERR_CD == null ? &quot;&quot; : &quot;red&quot;);\" text=\"bind:TRAN_AMT\"/><Cell col=\"4\" style=\"align:left;background:EXPR(ERR_CD == &quot;0000&quot; ||  ERR_CD == null ? &quot;&quot; : &quot;red&quot;);background2:EXPR(ERR_CD == &quot;0000&quot; ||  ERR_CD == null ? &quot;&quot; : &quot;red&quot;);\" text=\"bind:PRE_RECI_MAN\"/><Cell col=\"5\" style=\"align:left;background:EXPR(ERR_CD == &quot;0000&quot; ||  ERR_CD == null ? &quot;&quot; : &quot;red&quot;);background2:EXPR(ERR_CD == &quot;0000&quot; ||  ERR_CD == null ? &quot;&quot; : &quot;red&quot;);\" text=\"bind:BIGO\"/><Cell col=\"6\" style=\"background:EXPR(ERR_CD == &quot;0000&quot; ||  ERR_CD == null ? &quot;&quot; : &quot;red&quot;);background2:EXPR(ERR_CD == &quot;0000&quot; ||  ERR_CD == null ? &quot;&quot; : &quot;red&quot;);\" text=\"bind:CMPNSP_NO\"/><Cell col=\"7\" style=\"background:EXPR(ERR_CD == &quot;0000&quot; ||  ERR_CD == null ? &quot;&quot; : &quot;red&quot;);background2:EXPR(ERR_CD == &quot;0000&quot; ||  ERR_CD == null ? &quot;&quot; : &quot;red&quot;);\" text=\"bind:INCME_EXPNDTR\"/></Band><Band id=\"summary\"><Cell text=\"건수\"/><Cell col=\"1\" displaytype=\"number\" text=\"expr:dataset.rowcount\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"합계\"/><Cell col=\"3\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;TRAN_AMT&quot;)\"/><Cell col=\"5\" colspan=\"3\"/></Band></Format></Formats>");this.tab.tabpage1.tab.tab.addChild(_a.name,_a);_a=new Tabpage("tabpage2",this.tab.tabpage1.tab);_a.set_text("오류내역");this.tab.tabpage1.tab.addChild(_a.name,_a);_a=new Grid("grd_lqttTransfrError","absolute","0","5",null,null,"0","0",this.tab.tabpage1.tab.tabpage2);_a.set_taborder("0");_a.set_binddataset("ds_lqttTransfrError");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"285\"/><Column size=\"95\"/><Column size=\"180\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"입금은행\"/><Cell col=\"2\" text=\"입금계좌\"/><Cell col=\"3\" text=\"이체금액\"/><Cell col=\"4\" text=\"수취인\"/><Cell col=\"5\" text=\"비고\"/><Cell col=\"6\" text=\"처리완료여부\"/><Cell col=\"7\" text=\"장애내역\"/><Cell col=\"8\" text=\"진행확인값\"/><Cell col=\"9\" text=\"대사번호\"/><Cell col=\"10\" text=\"지출구분\"/></Band><Band id=\"body\"><Cell text=\"bind:FL_SEQ\"/><Cell col=\"1\" text=\"bind:FNNC_INSTT_CODE_NM\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:IN_ACCT_NO\"/><Cell col=\"3\" style=\"align:right;\" text=\"bind:TRAN_AMT\"/><Cell col=\"4\" text=\"bind:PRE_RECI_MAN\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:BIGO\"/><Cell col=\"6\" text=\"bind:PROC_NM\"/><Cell col=\"7\" text=\"bind:ERR_MSG\"/><Cell col=\"8\" text=\"bind:EB_STS_NM\"/><Cell col=\"9\" text=\"bind:CMPNSP_NO\"/><Cell col=\"10\" text=\"bind:INCME_EXPNDTR\"/></Band><Band id=\"summary\"><Cell text=\"건수\"/><Cell col=\"1\" displaytype=\"number\" text=\"expr:dataset.rowcount\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"합계\"/><Cell col=\"3\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;TRAN_AMT&quot;)\"/><Cell col=\"5\" colspan=\"6\"/></Band></Format></Formats>");this.tab.tabpage1.tab.tabpage2.addChild(_a.name,_a);_a=new Button("Button124","absolute",null,"218","60","19","5",null,this.tab.tabpage1);_a.set_taborder("2");_a.set_text("오류처리");_a.set_cssclass("btn_WF_Process");this.tab.tabpage1.addChild(_a.name,_a);_a=new Tabpage("tabpage3",this.tab);_a.set_text("급여이체");this.tab.addChild(_a.name,_a);_a=new Grid("grd_salaryTransfr","absolute","0","5",null,"200","0",null,this.tab.tabpage3);_a.set_taborder("0");_a.set_binddataset("ds_salaryTransfr");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"110\"/><Column size=\"40\"/><Column size=\"110\"/><Column size=\"40\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" colspan=\"3\" text=\"구분\"/><Cell col=\"4\" colspan=\"3\" text=\"전송내역\"/><Cell col=\"7\" colspan=\"2\" text=\"정상\"/><Cell col=\"9\" colspan=\"2\" text=\"예금주/계좌오류\"/><Cell col=\"11\" colspan=\"2\" text=\"뱅킹오류\"/><Cell row=\"1\" col=\"1\" text=\"이체구분\"/><Cell row=\"1\" col=\"2\" text=\"생성일자\"/><Cell row=\"1\" col=\"3\" text=\"생성시간\"/><Cell row=\"1\" col=\"4\" text=\"전송건수\"/><Cell row=\"1\" col=\"5\" text=\"전송금액\"/><Cell row=\"1\" col=\"6\" text=\"등록자\"/><Cell row=\"1\" col=\"7\" text=\"건수\"/><Cell row=\"1\" col=\"8\" text=\"금액\"/><Cell row=\"1\" col=\"9\" text=\"건수\"/><Cell row=\"1\" col=\"10\" text=\"금액\"/><Cell row=\"1\" col=\"11\" text=\"건수\"/><Cell row=\"1\" col=\"12\" text=\"금액\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:SEND_GB\"/><Cell col=\"2\" displaytype=\"date\" text=\"bind:FL_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" style=\"align:right;\" text=\"bind:FL_TIME\"/><Cell col=\"4\" style=\"align:right;\" text=\"bind:SUM_CNT\"/><Cell col=\"5\" style=\"align:right;\" text=\"bind:SUM_AMT\"/><Cell col=\"6\" text=\"bind:ERP_USER_NM\"/><Cell col=\"7\" style=\"align:right;\" text=\"bind:ENT_NOR_CNT\"/><Cell col=\"8\" style=\"align:right;\" text=\"bind:ENT_NOR_AMT\"/><Cell col=\"9\" style=\"align:right;\" text=\"bind:ENT_ERR_CNT\"/><Cell col=\"10\" style=\"align:right;\" text=\"bind:ENT_ERR_AMT\"/><Cell col=\"11\" style=\"align:right;\" text=\"bind:ENT_BUL_CNT\"/><Cell col=\"12\" style=\"align:right;\" text=\"bind:ENT_BUL_AMT\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"3\" text=\"건수/합계\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;SUM_CNT&quot;)\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;SUM_AMT&quot;)\"/><Cell col=\"6\" colspan=\"7\"/></Band></Format></Formats>");this.tab.tabpage3.addChild(_a.name,_a);_a=new Tab("tab","absolute","0","210",null,null,"0","0",this.tab.tabpage3);_a.set_taborder("1");_a.set_tabindex("0");_a.set_scrollbars("autoboth");_a.style.set_showextrabutton("false");this.tab.tabpage3.addChild(_a.name,_a);_a=new Tabpage("tabpage1",this.tab.tabpage3.tab);_a.set_text("급여이체상세");this.tab.tabpage3.tab.addChild(_a.name,_a);_a=new Grid("grd_salaryTransfrDetail","absolute","0","5",null,null,"0","0",this.tab.tabpage3.tab.tabpage1);_a.set_taborder("0");_a.set_binddataset("ds_salaryTransfrDetail");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"170\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"입금은행\"/><Cell col=\"2\" text=\"입금계좌\"/><Cell col=\"3\" text=\"이체금액\"/><Cell col=\"4\" text=\"수취인명\"/><Cell col=\"5\" text=\"적요\"/><Cell col=\"6\" text=\"대사번호\"/></Band><Band id=\"body\"><Cell style=\"background:EXPR(ERR_CD == &quot;0000&quot; || ERR_CD == null ? &quot;&quot; : &quot;red&quot;);background2:EXPR(ERR_CD == &quot;0000&quot; || ERR_CD == null ? &quot;&quot; : &quot;red&quot;);\" text=\"bind:FL_SEQ\"/><Cell col=\"1\" style=\"background:EXPR(ERR_CD == &quot;0000&quot; || ERR_CD == null ? &quot;&quot; : &quot;red&quot;);background2:EXPR(ERR_CD == &quot;0000&quot; || ERR_CD == null ? &quot;&quot; : &quot;red&quot;);\" text=\"bind:FNNC_INSTT_CODE_NM\"/><Cell col=\"2\" style=\"align:left;background:EXPR(ERR_CD == &quot;0000&quot; || ERR_CD == null ? &quot;&quot; : &quot;red&quot;);background2:EXPR(ERR_CD == &quot;0000&quot; || ERR_CD == null ? &quot;&quot; : &quot;red&quot;);\" text=\"bind:IN_ACCT_NO\"/><Cell col=\"3\" style=\"align:right;background:EXPR(ERR_CD == &quot;0000&quot; || ERR_CD == null ? &quot;&quot; : &quot;red&quot;);background2:EXPR(ERR_CD == &quot;0000&quot; || ERR_CD == null ? &quot;&quot; : &quot;red&quot;);\" text=\"bind:TRAN_AMT\"/><Cell col=\"4\" style=\"background:EXPR(ERR_CD == &quot;0000&quot; || ERR_CD == null ? &quot;&quot; : &quot;red&quot;);background2:EXPR(ERR_CD == &quot;0000&quot; || ERR_CD == null ? &quot;&quot; : &quot;red&quot;);\" text=\"bind:PRE_RECI_MAN\"/><Cell col=\"5\" style=\"align:left;background:EXPR(ERR_CD == &quot;0000&quot; || ERR_CD == null ? &quot;&quot; : &quot;red&quot;);background2:EXPR(ERR_CD == &quot;0000&quot; || ERR_CD == null ? &quot;&quot; : &quot;red&quot;);\" text=\"bind:BIGO\"/><Cell col=\"6\" style=\"background:EXPR(ERR_CD == &quot;0000&quot; || ERR_CD == null ? &quot;&quot; : &quot;red&quot;);background2:EXPR(ERR_CD == &quot;0000&quot; || ERR_CD == null ? &quot;&quot; : &quot;red&quot;);\" text=\"bind:CMPNSP_NO\"/></Band><Band id=\"summary\"><Cell text=\"건수\"/><Cell col=\"1\" displaytype=\"number\" text=\"expr:dataset.rowcount\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"합계\"/><Cell col=\"3\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;TRAN_AMT&quot;)\"/><Cell col=\"5\" colspan=\"2\"/></Band></Format></Formats>");this.tab.tabpage3.tab.tabpage1.addChild(_a.name,_a);_a=new Tabpage("tabpage2",this.tab.tabpage3.tab);_a.set_text("오류내역");this.tab.tabpage3.tab.addChild(_a.name,_a);_a=new Grid("grd_salaryTransfrError","absolute","0","5",null,null,"0","0",this.tab.tabpage3.tab.tabpage2);_a.set_taborder("0");_a.set_binddataset("ds_salaryTransfrError");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"193\"/><Column size=\"142\"/><Column size=\"180\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"입금은행\"/><Cell col=\"2\" text=\"입금계좌\"/><Cell col=\"3\" text=\"이체금액\"/><Cell col=\"4\" text=\"수취인\"/><Cell col=\"5\" text=\"비고\"/><Cell col=\"6\" text=\"처리완료여부\"/><Cell col=\"7\" text=\"장애내역\"/><Cell col=\"8\" text=\"진행확인값\"/><Cell col=\"9\" text=\"대사번호\"/></Band><Band id=\"body\"><Cell text=\"bind:FL_SEQ\"/><Cell col=\"1\" text=\"bind:FNNC_INSTT_CODE_NM\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:IN_ACCT_NO\"/><Cell col=\"3\" style=\"align:right;\" text=\"bind:TRAN_AMT\"/><Cell col=\"4\" text=\"bind:PRE_RECI_MAN\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:BIGO\"/><Cell col=\"6\" text=\"bind:PROC_NM\"/><Cell col=\"7\" text=\"bind:ERR_MSG\"/><Cell col=\"8\" text=\"bind:EB_STS_NM\"/><Cell col=\"9\" text=\"bind:CMPNSP_NO\"/></Band><Band id=\"summary\"><Cell text=\"건수\"/><Cell col=\"1\" displaytype=\"number\" text=\"expr:dataset.rowcount\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"합계\"/><Cell col=\"3\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;TRAN_AMT&quot;)\"/><Cell col=\"5\" colspan=\"5\"/></Band></Format></Formats>");this.tab.tabpage3.tab.tabpage2.addChild(_a.name,_a);_a=new Button("Button124","absolute",null,"218","60","19","1",null,this.tab.tabpage3);_a.set_taborder("3");_a.set_text("오류처리");_a.set_cssclass("btn_WF_Process");this.tab.tabpage3.addChild(_a.name,_a);_a=new Button("btn_del","absolute",null,"51","64","19","96",null,this);_a.set_taborder("2");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Button("btn_cancel","absolute",null,"51","64","19","29",null,this);_a.set_taborder("3");_a.set_text("행취소");_a.set_cssclass("btn_WF_Gridcnl");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Layout("default","",1031,59,this.div_SEARCH,function(_b){_b.set_taborder("0");_b.set_text("Div00");_b.set_applystyletype("cascade,keep");_b.set_cssclass("div_WFSA_Box");});this.div_SEARCH.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.tab.tabpage1.tab.tab,function(_b){_b.set_text("대량이체상세");_b.set_taborder("0");});this.tab.tabpage1.tab.tab.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.tab.tabpage1.tab.tabpage2,function(_b){_b.set_text("오류내역");});this.tab.tabpage1.tab.tabpage2.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.tab.tabpage1,function(_b){_b.set_text("대량이체");});this.tab.tabpage1.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.tab.tabpage3.tab.tabpage1,function(_b){_b.set_text("급여이체상세");});this.tab.tabpage3.tab.tabpage1.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.tab.tabpage3.tab.tabpage2,function(_b){_b.set_text("오류내역");});this.tab.tabpage3.tab.tabpage2.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.tab.tabpage3,function(_b){_b.set_text("급여이체");});this.tab.tabpage3.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("UI_ACC020302");_b.set_titletext("지출전송확인");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_SEARCH.Calendar00","value","ds_cond","SRCH_DT");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("ACC020302.xfdl","lib::comInclude.xjs");this.addIncludeScript("ACC020302.xfdl","mis_lib::misUtil.xjs");this.registerScript("ACC020302.xfdl",function(){var _a=[this.ds_lqttTransfrError,this.ds_bmnyTransfrDetail,this.ds_salaryTransfrError];this.ACC020302_onload=function(_b,_c){this.fn_init_form();this.fn_misFormInit(this);};this.fn_init_form=function(){this.gfn_initForm(this);var _b=this.dateUtils.today();this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"SRCH_DT",_b);this.ds_cond.setColumn(0,"BPLC_SE","01");};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return false;}switch(this.tab.tabindex){case 0:this.fn_transaction("lqttTransfrList");break;case 1:this.fn_transaction("salaryTransfrList");break;}};this.fn_save=function(){switch(this.tab.tabindex){case 0:this.fn_transaction("lqttTransfrD");break;case 1:this.fn_transaction("salaryTransfrD");break;}};this.fn_transaction=function(_b){switch(_b){case "lqttTransfrList":var _c="hsco/mis/acc/ACC020302/lqttTransfrList.do";var _d="input1=ds_cond";var _e="ds_lqttTransfr=output1";this.ds_lqttTransfr.clearData();this.ds_lqttTransfrDetail.clearData();this.ds_lqttTransfrError.clearData();break;case "lqttTransfrDetailList":var _c="hsco/mis/acc/ACC020302/lqttTransfrDetailList.do";var _d="input1=ds_cond";var _e="ds_lqttTransfrDetail=output1 ds_lqttTransfrError=output2";this.ds_lqttTransfrDetail.clearData();this.ds_lqttTransfrError.clearData();break;case "salaryTransfrList":var _c="hsco/mis/acc/ACC020302/salaryTransfrList.do";var _d="input1=ds_cond";var _e="ds_salaryTransfr=output1";this.ds_salaryTransfr.clearData();this.ds_salaryTransfrDetail.clearData();this.ds_salaryTransfrError.clearData();break;case "salaryTransfrDetailList":var _c="hsco/mis/acc/ACC020302/salaryTransfrDetailList.do";var _d="input1=ds_cond";var _e="ds_salaryTransfrDetail=output1 ds_salaryTransfrError=output2";this.ds_salaryTransfrDetail.clearData();this.ds_salaryTransfrError.clearData();break;case "errorPorcessU":var _c="hsco/mis/acc/ACC020302/errorPorcessU.do";var _d="input1="+_a[this.tab.tabindex].name+":A";var _e="";break;case "lqttTransfrD":var _c="hsco/mis/acc/ACC020302/lqttTransfrD.do";var _d="input1=ds_lqttTransfr:U";var _e="";break;case "salaryTransfrD":var _c="hsco/mis/acc/ACC020302/salaryTransfrD.do";var _d="input1=ds_salaryTransfr:U";var _e="";break;}Ex.core.tran(this,_b,_c,_d,_e);};this.fn_callBack=function(_b,_c,_d){if(_c!=0){switch(_b){case "lqttTransfrList":break;case "lqttTransfrDetailList":break;case "salaryTransfrList":break;case "salaryTransfrDetailList":break;case "errorPorcessU":this.gfn_message("success.처리.실패");break;case "lqttTransfrD":break;case "salaryTransfrD":break;default:break;}this.gfn_callback_message(_b,_c,_d);}else{switch(_b){case "lqttTransfrList":break;case "lqttTransfrDetailList":trace("#################");trace(this.comUtils.isNull(this.ds_lqttTransfrDetail.getColumn(0,"ERR_CD")));break;case "salaryTransfrList":break;case "salaryTransfrDetailList":break;case "errorPorcessU":this.gfn_message("success.처리.성공");break;case "lqttTransfrD":this.fn_transaction("lqttTransfrList");break;case "salaryTransfrD":this.fn_transaction("salaryTransfrList");break;default:break;}}};this.fn_print=function(){};this.dataset_onrowposchanged=function(_b,_c){this.ds_cond.setColumn(0,"SITE_NO",_b.getColumn(_c.newrow,"SITE_NO"));this.ds_cond.setColumn(0,"FL_DATE",_b.getColumn(_c.newrow,"FL_DATE"));this.ds_cond.setColumn(0,"FL_TIME",_b.getColumn(_c.newrow,"FL_TIME"));switch(_b.name){case "ds_lqttTransfr":this.fn_transaction("lqttTransfrDetailList");break;case "ds_salaryTransfr":this.fn_transaction("salaryTransfrDetailList");break;}};this.btn_errorProcess_onclick=function(_b,_c){if(_a[this.tab.tabindex].getRowCount()>0){if(this.gfn_message("comm.행위여부","오류처리를 진행")){this.fn_transaction("errorPorcessU");}}else{this.gfn_message("comm.데이터.선택.없음");}};this.btn_del_onclick=function(_b,_c){switch(this.tab.tabindex){case 0:if(this.ds_lqttTransfr.getColumn(this.ds_lqttTransfr.rowposition,"FLAG")=="EE"){this.gfn_message("fail.삭제.불가","전송내역을");return;}this.ds_lqttTransfr.deleteRow(this.ds_lqttTransfr.rowposition);break;case 1:if(this.ds_salaryTransfr.getColumn(this.ds_lqttTransfr.rowposition,"FLAG")=="EE"){this.gfn_message("fail.삭제.불가","전송내역을");return;}this.ds_salaryTransfr.deleteRow(this.ds_salaryTransfr.rowposition);break;}};this.btn_cancel_onclick=function(_b,_c){switch(this.tab.tabindex){case 0:this.ds_lqttTransfr.reset();this.ds_lqttTransfr.applyChange();break;case 1:this.ds_salaryTransfr.reset();this.ds_salaryTransfr.applyChange();break;}};});this.on_initEvent=function(){this.ds_acc001.addEventHandler("onrowposchanged",this.ds_frmtnPd_onrowposchanged,this);this.ds_lqttTransfr.addEventHandler("onrowposchanged",this.dataset_onrowposchanged,this);this.ds_salaryTransfr.addEventHandler("onrowposchanged",this.dataset_onrowposchanged,this);this.addEventHandler("onload",this.ACC020302_onload,this);this.tab.tabpage1.Button124.addEventHandler("onclick",this.btn_errorProcess_onclick,this);this.tab.tabpage3.Button124.addEventHandler("onclick",this.btn_errorProcess_onclick,this);this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);};this.loadIncludeScript("ACC020302.xfdl");};})();