﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ASS010700");this.set_classname("ASS010700");this.set_titletext("부서자산대장");this._setFormPosition(0,0,1059,735);}_a=new Dataset("DS_ASSETS_MASTR_TABLE",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ASSETS_CL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ASSETS_CL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ASSETS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ASSETS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UNTPC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GOVSUBY_ACQS_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ASSETS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"STNDRD\" type=\"STRING\" size=\"256\"/><Column id=\"QY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ACQS_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ACQS_SUPLY_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"MRN_CT\" type=\"STRING\" size=\"256\"/><Column id=\"ACQS_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"ACQS_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PUCHAS_BCNC\" type=\"STRING\" size=\"256\"/><Column id=\"BCNC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DPRC_MTH\" type=\"STRING\" size=\"256\"/><Column id=\"DPRC_RT\" type=\"FLOAT\" size=\"256\"/><Column id=\"CN_YYCNT\" type=\"STRING\" size=\"256\"/><Column id=\"DPRT_COMPT_AT\" type=\"STRING\" size=\"256\"/><Column id=\"DPRT_CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DISUSE_PROCESS_AT\" type=\"STRING\" size=\"256\"/><Column id=\"BIZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZPLC_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_ASSETS_MASTR_DETAIL_TABLE",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DPRC_YM\" type=\"STRING\" size=\"256\"/><Column id=\"ACQS_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"MT_DPRC_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DPRC_ACMTL_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"GOVSUBY_ACQS_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"GOVSUBY_MT_DPRC_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"GOVSUBY_DPRC_ACMTL_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TRMEND_BLCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond02",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ASSETS_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ASSETS_CL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ASSETS_CL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ASSETS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACQS_DE1\" type=\"STRING\" size=\"256\"/><Column id=\"ACQS_DE2\" type=\"STRING\" size=\"256\"/><Column id=\"ACQS_AMOUNT1\" type=\"STRING\" size=\"256\"/><Column id=\"ACQS_AMOUNT2\" type=\"STRING\" size=\"256\"/><Column id=\"DPRT_COMPT_AT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DISUSE_PROCESS_AT\" type=\"STRING\" size=\"256\"/><Column id=\"REQUST_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"REQUST_DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_DPRC_MTH",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">2</Col><Col id=\"DATA\">정률법</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">정액법</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_acc001",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cmp002",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">ACQS_DE1</Col><Col id=\"msgId\">취득일자 시작일^취득일자 종료일</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">ACQS_DE2</Col><Col id=\"PK\">[Undefined]</Col><Col id=\"notNull\"/><Col id=\"type\">[Undefined]</Col><Col id=\"nlength\">[Undefined]</Col><Col id=\"from\">ACQS_DE1</Col><Col id=\"to\"/><Col id=\"lengthChkGb\">[Undefined]</Col><Col id=\"msgId\">취득일자 종료일^취득일자 시작일</Col><Col id=\"expr\">[Undefined]</Col><Col id=\"func\">[Undefined]</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">ACQS_AMOUNT1</Col><Col id=\"to\">ACQS_AMOUNT2</Col><Col id=\"msgId\">취득가액 시작액^취득가액 종료액</Col><Col id=\"nlength\">15</Col><Col id=\"lengthChkGb\">LE</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">ACQS_AMOUNT2</Col><Col id=\"PK\"/><Col id=\"notNull\"/><Col id=\"type\"/><Col id=\"nlength\">15</Col><Col id=\"from\">ACQS_AMOUNT1</Col><Col id=\"to\"/><Col id=\"lengthChkGb\">LE</Col><Col id=\"msgId\">취득가액 종료액^취득가액 시작액</Col><Col id=\"expr\"/><Col id=\"func\"/></Row><Row><Col id=\"compId\">DS_ASSETS_MASTR_TABLE</Col><Col id=\"colId\">ASSETS_CL_CODE</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col><Col id=\"type\"/><Col id=\"nlength\"/><Col id=\"from\"/><Col id=\"to\"/><Col id=\"lengthChkGb\"/><Col id=\"msgId\">자산분류</Col><Col id=\"expr\"/><Col id=\"func\"/></Row><Row><Col id=\"compId\">DS_ASSETS_MASTR_TABLE</Col><Col id=\"colId\">DEPT_CODE</Col><Col id=\"PK\">[Undefined]</Col><Col id=\"notNull\">Y</Col><Col id=\"type\">[Undefined]</Col><Col id=\"nlength\">[Undefined]</Col><Col id=\"from\">[Undefined]</Col><Col id=\"to\">[Undefined]</Col><Col id=\"lengthChkGb\">[Undefined]</Col><Col id=\"msgId\">담당부서</Col><Col id=\"expr\"/><Col id=\"func\"/></Row><Row><Col id=\"compId\">DS_ASSETS_MASTR_TABLE</Col><Col id=\"colId\">UNTPC</Col><Col id=\"PK\">[Undefined]</Col><Col id=\"notNull\">Y</Col><Col id=\"type\">[Undefined]</Col><Col id=\"nlength\">15</Col><Col id=\"from\">[Undefined]</Col><Col id=\"to\">[Undefined]</Col><Col id=\"lengthChkGb\">LE</Col><Col id=\"msgId\">단가</Col><Col id=\"expr\"/><Col id=\"func\"/></Row><Row><Col id=\"compId\">DS_ASSETS_MASTR_TABLE</Col><Col id=\"colId\">QY</Col><Col id=\"PK\">[Undefined]</Col><Col id=\"notNull\">Y</Col><Col id=\"type\">[Undefined]</Col><Col id=\"nlength\">11</Col><Col id=\"from\">[Undefined]</Col><Col id=\"to\">[Undefined]</Col><Col id=\"lengthChkGb\">LE</Col><Col id=\"msgId\">수량</Col><Col id=\"expr\"/><Col id=\"func\"/></Row><Row><Col id=\"compId\">DS_ASSETS_MASTR_TABLE</Col><Col id=\"colId\">ACQS_DE</Col><Col id=\"PK\">[Undefined]</Col><Col id=\"notNull\">Y</Col><Col id=\"type\">[Undefined]</Col><Col id=\"nlength\">[Undefined]</Col><Col id=\"from\">[Undefined]</Col><Col id=\"to\">[Undefined]</Col><Col id=\"lengthChkGb\">[Undefined]</Col><Col id=\"msgId\">취득일자</Col><Col id=\"expr\"/><Col id=\"func\"/></Row><Row><Col id=\"compId\">DS_ASSETS_MASTR_TABLE</Col><Col id=\"colId\">ACQS_SUPLY_AMOUNT</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col><Col id=\"type\"/><Col id=\"nlength\"/><Col id=\"from\"/><Col id=\"to\"/><Col id=\"lengthChkGb\"/><Col id=\"msgId\">공급가액</Col><Col id=\"expr\"/><Col id=\"func\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("DS_TBASS_ASSETS_MASTR_HIST",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HIST_SN\" type=\"STRING\" size=\"256\"/><Column id=\"HIST_SE\" type=\"STRING\" size=\"256\"/><Column id=\"HIST_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"QY\" type=\"STRING\" size=\"256\"/><Column id=\"ASSETS_CL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ASSETS_CL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ASSETS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UNTPC\" type=\"STRING\" size=\"256\"/><Column id=\"ASSETS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PUCHAS_BCNC\" type=\"STRING\" size=\"256\"/><Column id=\"BCNC_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","59",null,null,"28","0",this);_a.set_taborder("1");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","-0.69%","117",null,"620","100.29%",null,this.div_work);_a.set_taborder("8");_a.set_text("6");_a.set_visible("false");_a.style.set_background("blueviolet");_a.style.set_align("center middle");_a.style.set_opacity("50");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_Thng_Recipt_Plan_Manage","absolute","0","34",null,null,"0","0",this.div_work);_a.set_taborder("0");_a.set_binddataset("DS_ASSETS_MASTR_TABLE");_a.set_autoenter("select");_a.set_autofittype("none");_a.set_autosizingtype("row");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"65\"/><Column size=\"96\"/><Column size=\"80\"/><Column size=\"170\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"80\"/></Columns><Rows><Row size=\"33\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"부서코드\"/><Cell col=\"1\" text=\"담당부서\"/><Cell col=\"2\" text=\"자산번호\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"자산분류\"/><Cell col=\"4\" text=\"사업장구분\"/><Cell col=\"5\" text=\"자산명\"/><Cell col=\"6\" text=\"단가\"/><Cell col=\"7\" text=\"수량\"/><Cell col=\"8\" text=\"단위\"/><Cell col=\"9\" text=\"규격\"/><Cell col=\"10\" text=\"취득일자\"/><Cell col=\"11\" text=\"공급가액\"/><Cell col=\"12\" text=\"부대비용\"/><Cell col=\"13\" text=\"부가세\"/><Cell col=\"14\" text=\"취득가액\"/><Cell col=\"15\" text=\"국고보조금&#13;&#10;취득가액\"/><Cell col=\"16\" text=\"매입거래처\"/><Cell col=\"17\" text=\"상각방법\"/><Cell col=\"18\" text=\"내용년수\"/><Cell col=\"19\" text=\"상각율\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CODE\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:DEPT_NM\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:ASSETS_NO\" autosizerow=\"limitmin\"/><Cell col=\"3\" displaytype=\"normal\" style=\"align:left;padding:0 0 0 10;\" text=\"bind:ASSETS_CL_NM\" editlimitbymask=\"decimal\" combodisplay=\"edit\"/><Cell col=\"4\" displaytype=\"combo\" style=\"align:left;padding:0 0 0 10;\" text=\"bind:BIZPLC_CODE\" combodataset=\"DS_ASSETS_MASTR_TABLE\" combocodecol=\"BIZPLC_CODE\" combodatacol=\"BIZPLC_NM\"/><Cell col=\"5\" style=\"align:left;padding:0 0 0 10;\" text=\"bind:ASSETS_NM\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:UNTPC\" mask=\"expr:!UNTPC ? &quot;!###,###,###,###,###&quot; : &quot;!###,###,###,###,##0&quot;\" editlimitbymask=\"integer\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:QY\" mask=\"!##,###,###,###\" editlimitbymask=\"integer\"/><Cell col=\"8\" displaytype=\"combo\" style=\"align:center;padding:0 0 0 10;\" text=\"bind:UNIT\" combodataset=\"ds_cmp002\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodisplayrowcount=\"15\"/><Cell col=\"9\" editfilter=\"none\" style=\"align:left;padding:0 0 0 10;\" text=\"bind:STNDRD\"/><Cell col=\"10\" displaytype=\"normal\" style=\"align: ;\" text=\"bind:ACQS_DE\" calendardisplay=\"edit\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:ACQS_SUPLY_AMOUNT\" mask=\"expr:!ACQS_SUPLY_AMOUNT ? &quot;!###,###,###,###,###&quot; : &quot;!###,###,###,###,##0&quot;\" editlimitbymask=\"integer\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:MRN_CT\" mask=\"expr:!MRN_CT ? &quot;!###,###,###,###,###&quot; : &quot;!###,###,###,###,##0&quot;\" editlimitbymask=\"integer\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:ACQS_VAT\" mask=\"expr:!ACQS_VAT ? &quot;!###,###,###,###,###&quot; : &quot;!###,###,###,###,##0&quot;\" editlimitbymask=\"integer\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:ACQS_AMOUNT\" mask=\"expr:ACQS_AMOUNT ? &quot;!###,###,###,###,###&quot; : &quot;!###,###,###,###,##0&quot;\" editlimitbymask=\"integer\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:GOVSUBY_ACQS_AMOUNT\" mask=\"expr:!GOVSUBY_ACQS_AMOUNT ? &quot;!###,###,###,###,###&quot; : &quot;!###,###,###,###,##0&quot;\" editlimitbymask=\"integer\"/><Cell col=\"16\" style=\"align:left;padding:0 0 0 10;\" text=\"bind:BCNC_NM\"/><Cell col=\"17\" displaytype=\"combo\" style=\"padding: ;\" text=\"bind:DPRC_MTH\" combodataset=\"DS_DPRC_MTH\" combocodecol=\"CODE\" combodatacol=\"DATA\"/><Cell col=\"18\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:CN_YYCNT\"/><Cell col=\"19\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:DPRC_RT\" mask=\"expr:!DPRC_RT ? &quot;###.###%&quot; : &quot;##0.000%&quot;\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\" expr=\"dataset.getSum('parseFloat(QY)||0')\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\" displaytype=\"number\" expr=\"dataset.getSum('parseFloat(ACQS_AMOUNT)||0')\" mask=\"expr:!ACQS_AMOUNT ? &quot;!###,###,###,###,###&quot; : &quot;!###,###,###,###,##0&quot;\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","0",null,"10","0",null,this.div_work);_a.set_taborder("15");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_title02","absolute","96","10","345","19",null,null,this.div_work);_a.set_taborder("21");_a.set_text("'사진컬럼의 버튼을 클릭 하시면 사진 등록 및 열람이 가능합니다.");_a.style.set_color("blue");_a.style.set_padding("0 0 0 0");_a.style.set_align("left middle");_a.style.set_font("bold 9 Gulim");this.div_work.addChild(_a.name,_a);_a=new Static("sta_budgetStats","absolute","0","10","72","19",null,null,this.div_work);_a.set_taborder("22");_a.set_text("자산현황");_a.set_cssclass("sta_WF_Title02");this.div_work.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","29",null,"5","28",null,this.div_work);_a.set_taborder("23");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static01","absolute","1031","0","15","735",null,null,this);_a.set_taborder("47");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute",null,"0","13","735","0",null,this);_a.set_taborder("48");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"59","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","554","5","15","21",null,null,this.div_search);_a.set_taborder("75");_a.set_text("~");_a.style.set_align("middle");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_ACQS_DE2","absolute","569","5","127","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("3");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a=new Calendar("cal_ACQS_DE1","absolute","427","5","127","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a=new Edit("edt_ASSETS_NM","absolute","79","31","269","21",null,null,this.div_search);_a.set_taborder("4");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_ACQS_AMOUNT1","absolute","427","31","127","21",null,null,this.div_search);_a.set_taborder("5");this.div_search.addChild(_a.name,_a);_a=new Static("Static08","absolute","554","31","15","21",null,null,this.div_search);_a.set_taborder("82");_a.set_text("~");_a.style.set_align("middle");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_ACQS_AMOUNT2","absolute","569","31","127","21",null,null,this.div_search);_a.set_taborder("6");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_ASSETS_CL_NM","absolute","190","5","158","21",null,null,this.div_search);_a.set_taborder("1");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_ASSETS_CL_CODE","absolute","79","5","109","21",null,null,this.div_search);_a.set_taborder("9");this.div_search.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","0","15","59",null,null,this.div_search);_a.set_taborder("89");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static16","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("90");_a.set_text("자산분류");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","15","31","64","21",null,null,this.div_search);_a.set_taborder("91");_a.set_text("자산명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","363","31","64","21",null,null,this.div_search);_a.set_taborder("92");_a.set_text("취득가액");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static03","absolute","363","5","64","21",null,null,this.div_search);_a.set_taborder("93");_a.set_text("취득일자");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Button("btn_Assets","absolute","165","5","22","21",null,null,this.div_search);_a.set_taborder("0");_a.style.set_background("URL('theme://images/search.gif') repeat 5,5");_a.set_cssclass("btn_WF_Search");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","711","31","90","21",null,null,this.div_search);_a.set_taborder("96");_a.set_text("상각완료여부");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static06","absolute","796","0","5","59",null,null,this.div_search);_a.set_taborder("98");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static07","absolute","711","5","90","21",null,null,this.div_search);_a.set_taborder("100");_a.set_cssclass("sta_WFSA_Label");_a.set_text("부서");this.div_search.addChild(_a.name,_a);_a=new Static("Static09","absolute","831","31","90","21",null,null,this.div_search);_a.set_taborder("101");_a.set_text("처분여부");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new CheckBox("CheckBox00","absolute","901","29","20","21",null,null,this.div_search);_a.set_taborder("8");_a.set_truevalue("1");_a.set_value("0");_a.set_falsevalue("0");this.div_search.addChild(_a.name,_a);_a=new CheckBox("CheckBox01","absolute","802","29","20","21",null,null,this.div_search);_a.set_taborder("7");_a.set_value("0");_a.set_truevalue("1");_a.set_falsevalue("0");this.div_search.addChild(_a.name,_a);_a=new Div("div_dept01","absolute","801","5","195","21",null,null,this.div_search);_a.set_taborder("102");_a.set_text("부서");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("1");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",0,59,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("ASS010700");_b.set_titletext("부서자산대장");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.edt_ASSETS_CL_NM","value","ds_cond","ASSETS_CL_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.edt_ASSETS_CL_CODE","value","ds_cond","ASSETS_CL_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_search.cal_ACQS_DE1","value","ds_cond","ACQS_DE1");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_search.cal_ACQS_DE2","value","ds_cond","ACQS_DE2");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_search.edt_ASSETS_NM","value","ds_cond","ASSETS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_search.edt_ACQS_AMOUNT1","value","ds_cond","ACQS_AMOUNT1");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_search.edt_ACQS_AMOUNT2","value","ds_cond","ACQS_AMOUNT2");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","div_search.CheckBox00","value","ds_cond","DISUSE_PROCESS_AT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","div_search.CheckBox00","falsevalue","ds_cond","");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_search.CheckBox01","value","ds_cond","DPRT_COMPT_AT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","div_search.CheckBox01","falsevalue","ds_cond","");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");};this.addIncludeScript("ASS010700.xfdl","lib::comInclude.xjs");this.addIncludeScript("ASS010700.xfdl","mis_lib::misUtil.xjs");this.registerScript("ASS010700.xfdl",function(){this.saveRow= -1;this.checkDs=[this.DS_ASSETS_MASTR_TABLE];this.ASS010700_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.ASS010700_onload=function(_a,_b){this.ds_cond.setColumn(0,"REQUST_DEPT",this.gfn_getDeptId());this.ds_cond.setColumn(0,"REQUST_DEPT_NM",this.gfn_getDeptName());this.div_search.div_dept01.fn_setBind("ds_cond","REQUST_DEPT","REQUST_DEPT_NM");this.ds_cond.setColumn(0,"ACQS_DE1",this.dateUtils.today().substr(0,4)+"0101");this.ds_cond.setColumn(0,"ACQS_DE2",this.dateUtils.today());var _c=[["ds_acc001","ACC001","Y",""],["ds_cmp002","CMP002","Y",""]];var _d=function(_e,_f,_g){this.fn_search();};this.gfn_comboLoad(_c,_d);};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return false;}this.fn_transaction("assetsMastrList");};this.fn_transaction=function(_a){switch(_a){case "assetsMastrList":var _b="hsco/mis/ass/ASS010700/assetsMastrList.do";var _c="input1=ds_cond";var _d="DS_ASSETS_MASTR_TABLE=output1";break;case "assetsMastrR":var _b="hsco/mis/ass/ASS010700/assetsMastrR.do";var _c="input1=ds_cond02";var _d="DS_ASSETS_MASTR_DETAIL_TABLE=output1 DS_TBASS_ASSETS_MASTR_HIST=output2";break;case "assetsMastrCUD":var _b="hsco/mis/ass/ASS010700/assetsMastrCUD.do";var _c="input1=DS_ASSETS_MASTR_TABLE:U";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "assetsMastrList":this.DS_ASSETS_MASTR_TABLE.applyChange();if(this.saveRow> -1){this.DS_ASSETS_MASTR_TABLE.set_rowposition(this.saveRow);this.saveRow= -1;}break;case "assetsMastrR":break;case "assetsMastrCUD":this.gfn_message("success.처리.성공");this.fn_search();break;}}};this.fn_callback5=function(_a,_b){var _c=new Dataset();_f=_c.loadXML(_b);if(_a=="SEARCH"){if(_f){this.ds_cond.setColumn(0,"ASSETS_CL_NM",_c.getColumn(0,"ASSETS_CL_NM"));this.ds_cond.setColumn(0,"ASSETS_CL_CODE",_c.getColumn(0,"ASSETS_CL_CODE"));}}if(_a=="GRID"){if(_f){var _d=this.DS_ASSETS_MASTR_TABLE.rowposition;this.DS_ASSETS_MASTR_TABLE.setColumn(_d,"ASSETS_SE",null);this.DS_ASSETS_MASTR_TABLE.setColumn(_d,"ASSETS_CL_NM",_c.getColumn(0,"ASSETS_CL_NM"));this.DS_ASSETS_MASTR_TABLE.setColumn(_d,"ASSETS_CL_CODE",_c.getColumn(0,"ASSETS_CL_CODE"));this.DS_ASSETS_MASTR_TABLE.setColumn(_d,"DPRC_MTH",_c.getColumn(0,"DPRC_MTH"));this.DS_ASSETS_MASTR_TABLE.setColumn(_d,"CN_YYCNT",_c.getColumn(0,"CN_YYCNT"));this.DS_ASSETS_MASTR_TABLE.setColumn(_d,"DPRC_RT",_c.getColumn(0,"DPRC_RT"));var _e=_c.getColumn(0,"ASSETS_CL_CODE").substr(0,1);if(_e=="E"||_e=="F"||_e=="G"){var _f=this.ds_acc001.rowcount;if(_f>0){var _g=this.ds_acc001.getColumn(0,"CODE");this.DS_ASSETS_MASTR_TABLE.setColumn(_d,"ASSETS_SE",_g);}}}}if(_a=="empno_P01"){var _c=new Dataset();_f=_c.loadXML(_b);if(!_f){}else{this.DS_ASSETS_MASTR_TABLE.setColumn(this.DS_ASSETS_MASTR_TABLE.rowposition,"DEPT_CODE",_c.getColumn(0,"DEPT_CODE"));this.DS_ASSETS_MASTR_TABLE.setColumn(this.DS_ASSETS_MASTR_TABLE.rowposition,"DEPT_NM",_c.getColumn(0,"DEPT_NM"));}}if(_a=="CTR010101_P02"){var _c=new Dataset();_f=_c.loadXML(_b);if(!_f){}else{this.DS_ASSETS_MASTR_TABLE.setColumn(this.DS_ASSETS_MASTR_TABLE.rowposition,"PUCHAS_BCNC",_c.getColumn(0,"BCNC_CODE"));this.DS_ASSETS_MASTR_TABLE.setColumn(this.DS_ASSETS_MASTR_TABLE.rowposition,"BCNC_NM",_c.getColumn(0,"BCNC_NM"));}}if(_a=="ASS000000_P01"){var _c=new Dataset();_f=_c.loadXML(_b);if(!_f){}else{this.DS_ASSETS_MASTR_TABLE.setColumn(this.DS_ASSETS_MASTR_TABLE.rowposition,"FILE_SN",_c.getColumn(0,"FILE_SN"));this.DS_ASSETS_MASTR_TABLE.setColumn(this.DS_ASSETS_MASTR_TABLE.rowposition,"FILE_CNT",_c.getColumn(0,"FILE_CNT"));}}};this.fn_insert=function(){var _a=this.DS_ASSETS_MASTR_TABLE.addRow();};this.fn_delete=function(){var _a=this.DS_ASSETS_MASTR_TABLE.getColumn(this.DS_ASSETS_MASTR_TABLE.rowposition,"DPRT_CNT");if(_a==0){if(this.gfn_message("confirm.삭제여부")){var _b=this.DS_ASSETS_MASTR_TABLE.rowposition;this.DS_ASSETS_MASTR_TABLE.deleteRow(_b);}}else{this.gfn_message("fail.삭제.불가","감가상각내역이 존재하여");}};this.fn_cancel=function(){if(this.gfn_message("confirm.취소여부")){this.DS_ASSETS_MASTR_TABLE.reset();this.DS_ASSETS_MASTR_TABLE.applyChange();return;}};this.div_search_btn_Assets_onclick=function(_a,_b){this.fn_assets("SEARCH");};this.DS_ASSETS_MASTR_TABLE_onrowposchanged=function(_a,_b){};this.div_work_grd_Thng_Recipt_Plan_Manage_onexpandup=function(_a,_b){if(_b.cell==4){this.fn_assets("GRID");}if(_b.cell==7){var _c={arg_0:this};this.gfn_popup("empno_P01",400,400,"",_c,"com::deptCode_P01.xfdl","fn_callback5",true);}if(_b.cell==18){var _c={arg_0:this,srchYn:true};this.gfn_popup("CTR010101_P02",866,652,"",_c,"mis_ctr::CTR010101_P02.xfdl","fn_callback5",true);}};this.fn_assets=function(_a){var _b={arg_0:this};this.gfn_popup(_a,450,500,"물품구분조회팝업",_b,"mis_ass::ASS010400_P01.xfdl","fn_callback5");};});this.on_initEvent=function(){this.DS_ASSETS_MASTR_TABLE.addEventHandler("onrowposchanged",this.DS_ASSETS_MASTR_TABLE_onrowposchanged,this);this.addEventHandler("onload",this.ASS010700_onload,this);this.addEventHandler("oninit",this.ASS010700_oninit,this);this.div_work.grd_Thng_Recipt_Plan_Manage.addEventHandler("onexpandup",this.div_work_grd_Thng_Recipt_Plan_Manage_onexpandup,this);this.div_search.cal_ACQS_DE1.addEventHandler("oneditclick",this.div_search_cal_ACQS_DE1_oneditclick,this);this.div_search.edt_ASSETS_CL_NM.addEventHandler("oneditclick",this.div_search_edt_ASSETS_CL_CODE_oneditclick,this);this.div_search.btn_Assets.addEventHandler("onclick",this.div_search_btn_Assets_onclick,this);this.div_search.CheckBox00.addEventHandler("onclick",this.div_search_CheckBox00_onclick,this);};this.loadIncludeScript("ASS010700.xfdl");this.loadPreloadList();};})();