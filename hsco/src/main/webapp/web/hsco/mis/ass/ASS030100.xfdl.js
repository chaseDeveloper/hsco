﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ASS030100");this.set_classname("ASS030100");this.set_titletext("처분관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"REQUST_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"REQUST_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DISUSE_PROCESS_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond02",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"REQST_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR\" type=\"STRING\" size=\"256\"/><Column id=\"DISUSE_PROCESS_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond03",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"REQST_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR\" type=\"STRING\" size=\"256\"/><Column id=\"ASSETS_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_atldManage",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"REQST_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR\" type=\"STRING\" size=\"256\"/><Column id=\"DISUSE_PLAN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUST_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISUSE_PROCESS_AT\" type=\"STRING\" size=\"256\"/><Column id=\"DISUSE_PROCESS_DE\" type=\"STRING\" size=\"256\"/><Column id=\"DEBTOR_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEBTOR_ACNT_CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CRDIT_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CRDIT_ACNT_CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_KND\" type=\"STRING\" size=\"256\"/><Column id=\"ACQS_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DPRC_ACMTL_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DISUSE_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CHIT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SUMRY_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_atldManageDetail",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DISUSE_PLAN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUST_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ASSETS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ASSETS_CL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ASSETS_CL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ASSETS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ASSETS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISUSE_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DISUSE_SE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DISUSE_PRVONSH\" type=\"STRING\" size=\"256\"/><Column id=\"UNTPC\" type=\"STRING\" size=\"256\"/><Column id=\"QY\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"STNDRD\" type=\"STRING\" size=\"256\"/><Column id=\"ACQS_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DPRC_ACMTL_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GOVSUBY_ACQS_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GOVSUBY_DPRC_ACMTL_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"REQST_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR\" type=\"STRING\" size=\"256\"/><Column id=\"TRMEND_BLCE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DISUSE_PROCESS_AT\" type=\"STRING\" size=\"256\"/><Column id=\"DISUSE_PROCESS_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CHIT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SUMRY_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_acc001",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cmp002",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ass004",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">FDATE</Col><Col id=\"notNull\"/><Col id=\"from\">FDATE</Col><Col id=\"to\">TDATE</Col><Col id=\"msgId\">계획시작일자^계획종료일자</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">TDATE</Col><Col id=\"PK\">[Undefined]</Col><Col id=\"notNull\"/><Col id=\"type\">[Undefined]</Col><Col id=\"nlength\">[Undefined]</Col><Col id=\"from\">FDATE</Col><Col id=\"to\">TDATE</Col><Col id=\"lengthChkGb\">[Undefined]</Col><Col id=\"msgId\">계획시작일자^계획종료일자</Col><Col id=\"expr\">[Undefined]</Col><Col id=\"func\">[Undefined]</Col></Row><Row><Col id=\"compId\">ds_atldManageDetail</Col><Col id=\"colId\">DISUSE_SE_CODE</Col><Col id=\"msgId\">처분구분</Col><Col id=\"notNull\">Y</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_atldAccnutAcnt",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"REQST_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR\" type=\"STRING\" size=\"256\"/><Column id=\"ASSETS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ACCNUT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ACCNUT_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCNUT_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEBTOR_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CRDIT_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CHIT_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("Dataset04",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_atldManageDetail_sub",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DISUSE_PLAN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUST_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ASSETS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ASSETS_CL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ASSETS_CL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ASSETS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ASSETS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISUSE_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DISUSE_SE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DISUSE_PRVONSH\" type=\"STRING\" size=\"256\"/><Column id=\"UNTPC\" type=\"STRING\" size=\"256\"/><Column id=\"QY\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"STNDRD\" type=\"STRING\" size=\"256\"/><Column id=\"ACQS_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DPRC_ACMTL_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GOVSUBY_ACQS_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GOVSUBY_DPRC_ACMTL_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"REQST_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR\" type=\"STRING\" size=\"256\"/><Column id=\"TRMEND_BLCE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DISUSE_PROCESS_AT\" type=\"STRING\" size=\"256\"/><Column id=\"DISUSE_PROCESS_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CHIT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SUMRY_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","195","10","17","16",null,null,this.div_search);_a.set_taborder("34");_a.set_text("~");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_ACQS_DE2","absolute","208","5","110","22",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a=new Calendar("cal_ACQS_DE1","absolute","80","5","110","22",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a=new Static("Static05","absolute","0","0","15","33",null,null,this.div_search);_a.set_taborder("46");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_acqsDe","absolute","15","5","90","21",null,null,this.div_search);_a.set_taborder("47");_a.set_text("계획일자");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","332","5","64","21",null,null,this.div_search);_a.set_taborder("50");_a.set_text("요청부서");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_dept","absolute","396","5","195","21",null,null,this.div_search);_a.set_taborder("2");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","75","0","5","33",null,null,this.div_search);_a.set_taborder("52");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","30.9%","0",null,"33","67.64%",null,this.div_search);_a.set_taborder("53");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static03","absolute","38%","0",null,"33","61.52%",null,this.div_search);_a.set_taborder("54");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static06","absolute","57.43%","0",null,"33","41.11%",null,this.div_search);_a.set_taborder("55");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static07","absolute","605","5","90","21",null,null,this.div_search);_a.set_taborder("56");_a.set_text("불용처리여부");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static08","absolute","67.15%","-1",null,"33","32.36%",null,this.div_search);_a.set_taborder("57");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Combo("Combo00","absolute","696","5","80","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);var _b=new Dataset("Combo00_innerdataset",this.div_search.Combo00);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">처리</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">미처리</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("3");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a=new Static("Static01","absolute","1031","0","15","735",null,null,this);_a.set_taborder("60");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute",null,"0","13","735","0",null,this);_a.set_taborder("61");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","256","1031","10",null,null,this);_a.set_taborder("62");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_assetList","absolute","0","266","113","19",null,null,this);_a.set_taborder("13");_a.set_text("처분목록");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","285","1031","5",null,null,this);_a.set_taborder("64");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_atldManageDetail","absolute","0","288",null,null,"508","0",this);_a.set_taborder("3");_a.set_binddataset("ds_atldManageDetail");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a.set_autosizingtype("row");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"250\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"처분여부\"/><Cell col=\"1\" rowspan=\"2\" text=\"처분일자\"/><Cell col=\"2\" rowspan=\"2\" text=\"자산번호\"/><Cell col=\"3\" rowspan=\"2\" text=\"자산분류\"/><Cell col=\"4\" rowspan=\"2\" text=\"자산명\"/><Cell col=\"5\" rowspan=\"2\" text=\"처분금액\"/><Cell col=\"6\" rowspan=\"2\" text=\"처분구분\"/><Cell col=\"7\" rowspan=\"2\" text=\"사유\"/><Cell col=\"8\" rowspan=\"2\" text=\"단가\"/><Cell col=\"9\" rowspan=\"2\" text=\"수량\"/><Cell col=\"10\" rowspan=\"2\" text=\"단위\"/><Cell col=\"11\" rowspan=\"2\" text=\"규격\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"none\" text=\"bind:DISUSE_PROCESS_AT\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:DISUSE_PROCESS_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" text=\"bind:ASSETS_NO\" autosizerow=\"limitmin\"/><Cell col=\"3\" displaytype=\"normal\" style=\"align:left;;\" text=\"bind:ASSETS_CL_NM\" editlimitbymask=\"decimal\" combodisplay=\"edit\"/><Cell col=\"4\" style=\"align:left;;\" text=\"bind:ASSETS_NM\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;padding: ;\" text=\"bind:DISUSE_AMOUNT\" editdisplay=\"edit\" combodisplay=\"edit\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"expr:DISUSE_PROCESS_AT == '1' ? 'none' : 'combo'\" text=\"bind:DISUSE_SE_CODE\" editdisplay=\"edit\" combodataset=\"ds_ass004\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodisplay=\"expr:DISUSE_PROCESS_AT == '1' ? 'edit' : 'display'\"/><Cell col=\"7\" style=\"align:left;\" text=\"bind:DISUSE_PRVONSH\" editdisplay=\"edit\" combodisplay=\"edit\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:UNTPC\"/><Cell col=\"9\" displaytype=\"number\" style=\"padding: ;\" text=\"bind:QY\"/><Cell col=\"10\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:UNIT\" combodataset=\"ds_cmp002\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodisplayrowcount=\"15\"/><Cell col=\"11\" editfilter=\"none\" style=\"align:left;;\" text=\"bind:STNDRD\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_atld","absolute",null,"266","96","19","508",null,this);_a.set_taborder("2");_a.set_text("자산처분실행");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Grid("grd_atldAccnutAcnt","absolute",null,"290","470","233","28",null,this);_a.set_taborder("7");_a.set_binddataset("ds_atldAccnutAcnt");_a.set_autoenter("select");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"70\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" colspan=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"회계계정과목\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"차변금액\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"대변금액\"/></Band><Band id=\"body\"><Cell text=\"bind:SEQ\"/><Cell col=\"1\" text=\"bind:ACCNUT_ACNT_CODE\"/><Cell col=\"2\" style=\"align:left;cursor:hand;\" text=\"bind:ACCNUT_ACNT_NM\" expandshow=\"expr:comp.parent.fn_expr() ? 'hide' : 'show'\" expandsize=\"20\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"expr:comp.parent.fn_expr() ? 'none' : 'masknumber'\" style=\"align:right;\" text=\"bind:DEBTOR_AMOUNT\" mask=\"expr:!DEBTOR_AMOUNT ? &quot;!###,###,###,###,###&quot; : &quot;!###,###,###,###,##0&quot;\" maskchar=\" \" editlimit=\"15\" editdisplay=\"expr:comp.parent.fn_expr() ? 'edit' : 'display'\" editlimitbymask=\"integer\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"expr:comp.parent.fn_expr() ? 'none' : 'masknumber'\" style=\"align:right;\" text=\"bind:CRDIT_AMOUNT\" mask=\"expr:!CRDIT_AMOUNT ? &quot;!###,###,###,###,###&quot; : &quot;!###,###,###,###,##0&quot;\" maskchar=\" \" editlimit=\"15\" editdisplay=\"expr:comp.parent.fn_expr() ? 'edit' : 'display'\" editlimitbymask=\"integer\"/></Band><Band id=\"summary\"><Cell colspan=\"3\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;DEBTOR_AMOUNT&quot;)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;CRDIT_AMOUNT&quot;)\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","551",null,"10","600",null,"0",this);_a.set_taborder("75");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_assetList01","absolute",null,"266","113","19","385",null,this);_a.set_taborder("76");_a.set_text("회계계정과목");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Button("btn_Add_Tpg1_R","absolute",null,"266","64","19","162",null,this);_a.set_taborder("4");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.addChild(_a.name,_a);_a=new Button("btn_Del_Tpg1_R","absolute",null,"266","64","19","95",null,this);_a.set_taborder("5");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");_a.set_visible("true");this.addChild(_a.name,_a);_a=new Button("btn_Cancel_Tpg1_R","absolute",null,"266","64","19","28",null,this);_a.set_taborder("6");_a.set_text("행취소");_a.set_cssclass("btn_WF_Gridcnl");_a.set_visible("true");this.addChild(_a.name,_a);_a=new Static("Static61","absolute","0","33","1032","10",null,null,this);_a.set_taborder("80");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_atldManage","absolute","1","67",null,"189","28",null,this);_a.set_taborder("1");_a.set_binddataset("ds_atldManage");_a.set_autoenter("select");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"50\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"기준년도\"/><Cell col=\"1\" rowspan=\"2\" text=\"차수\"/><Cell col=\"2\" rowspan=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"계획일자\"/><Cell col=\"3\" colspan=\"2\" text=\"요청부서\"/><Cell col=\"5\" rowspan=\"2\" text=\"취득금액합계\"/><Cell col=\"6\" rowspan=\"2\" text=\"상각누계액합계\"/><Cell col=\"7\" rowspan=\"2\" text=\"처분금액합계\"/><Cell row=\"1\" col=\"3\" text=\"부서\"/><Cell row=\"1\" col=\"4\" text=\"부서명\"/></Band><Band id=\"body\"><Cell edittype=\"expr:dateset.getRowType(currow) == 2 ? 'masknumber' : 'none'\" editfilter=\"integer\" text=\"bind:REQST_YEAR\" mask=\"9999\"/><Cell col=\"1\" text=\"bind:ODR\"/><Cell col=\"2\" displaytype=\"date\" text=\"bind:DISUSE_PLAN_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" text=\"bind:REQUST_DEPT\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:DEPT_NM\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:ACQS_AMOUNT\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:DPRC_ACMTL_AMOUNT\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:DISUSE_AMOUNT\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_assetList00","absolute","0","42","113","19",null,null,this);_a.set_taborder("82");_a.set_text("불용계획목록");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","62",null,"5","28",null,this);_a.set_taborder("83");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_c){_c.set_taborder("0");_c.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_c){_c.set_classname("ASS030100");_c.set_titletext("처분관리");});this.addLayout(_a.name,_a);_a=new BindItem("item2","div_search.cal_ACQS_DE1","value","ds_cond","FDATE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_search.cal_ACQS_DE2","value","ds_cond","TDATE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_search.Combo00","value","ds_cond","DISUSE_PROCESS_AT");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");};this.addIncludeScript("ASS030100.xfdl","lib::comInclude.xjs");this.addIncludeScript("ASS030100.xfdl","mis_lib::misUtil.xjs");this.registerScript("ASS030100.xfdl",function(){this.saveRow= -1;this.saveRow2= -1;this.checkDs=[this.ds_atldManageDetail,this.ds_atldAccnutAcnt];var _a=false;this.ASS030100_oninit=function(_b,_c){this.fn_init_form();this.fn_init_dataset();};this.ASS030100_onload=function(_b,_c){this.ds_cond.setColumn(0,"FDATE",this.dateUtils.today().substr(0,4)+"0101");this.ds_cond.setColumn(0,"TDATE",this.dateUtils.today());this.ds_cond.setColumn(0,"DISUSE_PROCESS_AT","");this.ds_cond.setColumn(0,"REQUST_DEPT","000000");this.ds_cond.setColumn(0,"REQUST_DEPT_NM","화성도시공사");this.div_search.div_dept.fn_setBind("ds_cond","REQUST_DEPT","REQUST_DEPT_NM");this.div_search.div_dept.div_Search.edt_deptCode.set_cssclass("edt_WF_Essential");this.div_search.div_dept.div_Search.edt_deptNm.set_cssclass("edt_WF_Essential");this.div_search.div_dept.div_Search.edt_deptCode.set_readonly(true);this.div_search.div_dept.div_Search.edt_deptNm.set_readonly(true);var _d=[["ds_cmp002","CMP002","Y",""],["ds_ass004","ASS004","Y",""]];if(this.gfn_authGrpId("ASS_ADMIN")> -1){_a=true;}if(_a){this.div_search.div_dept.fn_setReadonly(false);this.div_search.div_dept.set_enable(true);this.div_search.div_dept.div_Search.edt_deptCode.set_cssclass("");this.div_search.div_dept.div_Search.edt_deptNm.set_cssclass("");this.btn_atld.set_enable(true);}else{this.div_search.div_dept.fn_setReadonly(true);this.div_search.div_dept.set_enable(false);this.div_search.div_dept.div_Search.edt_deptCode.set_cssclass("edt_WF_Essential");this.div_search.div_dept.div_Search.edt_deptNm.set_cssclass("edt_WF_Essential");this.btn_atld.set_enable(false);}var _e=function(_f,_g,_h){this.ds_ass004.filter("CODE != '0'");this.fn_search();};this.gfn_comboLoad(_d,_e);};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return false;}this.ds_atldManageDetail_sub.clearData();this.ds_atldAccnutAcnt.clearData();this.fn_transaction("select");};this.fn_search_sub=function(){var _b=this.ds_atldManage.rowposition;var _c=this.ds_atldManage.getColumn(_b,"REQST_YEAR");var _d=this.ds_atldManage.getColumn(_b,"ODR");var _e=this.ds_cond.getColumn(0,"DISUSE_PROCESS_AT");this.ds_cond02.clearData();this.ds_cond02.addRow();this.ds_cond02.setColumn(0,"REQST_YEAR",_c);this.ds_cond02.setColumn(0,"ODR",_d);this.ds_cond02.setColumn(0,"DISUSE_PROCESS_AT",_e);this.fn_transaction("select01");};this.fn_save=function(){if(Ex.util.isUpdated(this.ds_atldManageDetail)||Ex.util.isUpdated(this.ds_atldAccnutAcnt)){if(this.gfn_message("confirm.저장.여부")){this.saveRow=this.ds_atldManageDetail.rowposition;this.saveRow2=this.ds_atldAccnutAcnt.rowposition;this.fn_transaction("save");}}else{this.gfn_message("comm.데이터.변경.없음");}};this.fn_transaction=function(_b){switch(_b){case "select":var _c="hsco/mis/ass/ASS030100/atldManageList.do";var _d="input1=ds_cond";var _e="ds_atldManage=output1";break;case "select01":var _c="hsco/mis/ass/ASS030100/atldManageDetail.do";var _d="input1=ds_cond02";var _e="ds_atldManageDetail=output1";break;case "select02":var _c="hsco/mis/ass/ASS030100/atldAccnutAcnt.do";var _d="input1=ds_cond03";var _e="ds_atldAccnutAcnt=output2";break;case "save":var _c="hsco/mis/ass/ASS030100/atldManageCUD.do";var _d="input1=ds_atldManageDetail:U input2=ds_atldAccnutAcnt:U";var _e="";break;case "disuseProcess":var _c="hsco/mis/ass/ASS030100/disuseProcess.do";var _d="input1=ds_atldManageDetail_sub:A input2=ds_atldAccnutAcnt:A";var _e="";break;case "disuseProcessCancel":var _c="hsco/mis/ass/ASS030100/disuseProcessCancel.do";var _d="input1=ds_atldManageDetail_sub:A input2=ds_atldAccnutAcnt:A";var _e="";break;}Ex.core.tran(this,_b,_c,_d,_e);};this.fn_callBack=function(_b,_c,_d){trace(_b);if(_c!=0){this.gfn_callback_message(_b,_c,_d);}else{switch(_b){case "select":break;case "select01":this.ds_atldManageDetail.applyChange();this.ds_atldAccnutAcnt.applyChange();if(this.saveRow> -1){var _e=this.saveRow;this.saveRow= -1;this.ds_atldManageDetail.set_rowposition(_e);}trace("select01 콜백 "+this.ds_atldAccnutAcnt.rowposition);break;case "save":this.gfn_message("success.처리.성공");this.fn_search();break;case "select02":if(this.saveRow2> -1){var _e=this.saveRow2;this.saveRow2= -1;this.ds_atldAccnutAcnt.set_rowposition(_e);}break;case "disuseProcess":this.gfn_message("success.처리.성공");this.fn_search();break;case "disuseProcessCancel":this.gfn_message("success.처리.성공");this.fn_search();break;}}};this.fn_callback5=function(_b,_c){var _d=new Dataset();nRowCnt=_d.loadXML(_c);if(_b=="ACC010103_P01"){if(nRowCnt){var _e=this.ds_atldAccnutAcnt.rowposition;this.ds_atldAccnutAcnt.setColumn(_e,"ACCNUT_YEAR",_d.getColumn(0,"ACCNUT_YEAR"));this.ds_atldAccnutAcnt.setColumn(_e,"ACCNUT_ACNT_CODE",_d.getColumn(0,"ACCNUT_ACNT_CODE"));this.ds_atldAccnutAcnt.setColumn(_e,"ACCNUT_ACNT_NM",_d.getColumn(0,"ACCNUT_ACNT_NM"));}}};this.fn_cancel=function(_b,_c){if(this.gfn_message("confirm.취소여부")){this.ds_atldManage.reset();this.ds_atldManage.applyChange();return;}};this.btn_Add_Row=function(_b,_c){var _d=this.ds_atldManageDetail.rowposition;if(_d<0){this.gfn_message("comm.항목.선택.요청","처분대상자산");return;}var _e=this.ds_atldManageDetail.getColumn(_d,"DISUSE_PROCESS_AT");if(_e=="1"){this.gfn_message("info.처리불가","이미 자산처분이 완료되었습니다.");return;}var _f=this.ds_atldManageDetail.getColumn(_d,"REQST_YEAR");var _g=this.ds_atldManageDetail.getColumn(_d,"ODR");var _h=this.ds_atldManageDetail.getColumn(_d,"ASSETS_NO");_d=this.ds_atldAccnutAcnt.addRow();this.ds_atldAccnutAcnt.setColumn(_d,"REQST_YEAR",_f);this.ds_atldAccnutAcnt.setColumn(_d,"ODR",_g);this.ds_atldAccnutAcnt.setColumn(_d,"ASSETS_NO",_h);};this.btn_Del_Row=function(_b,_c){var _d=this.ds_atldManageDetail.rowposition;if(_d> -1){if(this.ds_atldManageDetail.getColumn(_d,"DISUSE_PROCESS_AT")=="0"){if(confirm("정말로 삭제하시겠습니까?")){var _d=this.ds_atldAccnutAcnt.rowposition;this.ds_atldAccnutAcnt.deleteRow(_d);}}else{this.gfn_message("fail.삭제.불가","처분 처리가 완료되어");}}};this.btn_Cancel_Row=function(_b,_c){if(this.gfn_message("confirm.취소여부")){this.ds_atldAccnutAcnt.reset();this.ds_atldAccnutAcnt.applyChange();return;}};this.btn_atld_onclick=function(_b,_c){var _d=this.ds_atldManageDetail.rowposition;var _e=this.ds_atldManageDetail.getColumn(_d,"DISUSE_PROCESS_AT");if(_e!="1"){if(!application.confirm("자산처분실행을 진행하시겠습니까?")){return false;}if(_d<0){this.gfn_message("comm.항목.선택.요청","처분대상자산");return;}var _f=this.ds_atldManageDetail.getColumn(_d,"DISUSE_SE_CODE");if(this.comUtils.isNull(_f)){this.gfn_message("comm.항목.입력.을","처분구분");return false;}if(_e=='1'){this.gfn_message("info.처리불가","이미 자산처분이 완료되었습니다.");return;}var _g=this.ds_atldManageDetail.getColumn(_d,"DISUSE_AMOUNT");var _h=this.ds_atldAccnutAcnt.getRowCount();if(_h<=1){this.gfn_message("info.항목.건수.이상","회계계정과목을 2건");return;}for(var _k=0;_k<_h;_k++ ){var _i=this.ds_atldAccnutAcnt.getColumn(_k,"ACCNUT_YEAR");if(this.comUtils.isNullEmpty(_i)){this.gfn_message("comm.항목.입력.을","회계계정과목");return;}}if(Number(_g)!=Number(this.ds_atldAccnutAcnt.getSum("DEBTOR_AMOUNT"))){this.gfn_message("errors.항목값.범위.동일","차변금액, 대변금액의 각 합계|처분금액합계");return;}else if(Number(_g)!=Number(this.ds_atldAccnutAcnt.getSum("CRDIT_AMOUNT"))){this.gfn_message("errors.항목값.범위.동일","차변금액, 대변금액의 각 합계|처분금액합계");return;}var _j=this.ds_atldManageDetail.getColumn(_d,"ASSETS_NM")+" 자산품목 처분";this.ds_atldManageDetail.setColumn(_d,"SUMRY_1",_j);this.ds_atldManageDetail.setColumn(_d,"DISUSE_PROCESS_AT","1");this.ds_atldManageDetail.setColumn(_d,"DISUSE_PROCESS_DE",this.dateUtils.today());this.ds_atldManageDetail_sub.clearData;this.ds_atldManageDetail_sub.addRow();this.ds_atldManageDetail_sub.copyRow(0,this.ds_atldManageDetail,_d);this.saveRow=_d;this.fn_transaction("disuseProcess");}else{if(!application.confirm("자산처분취소를 진행하시겠습니까?")){return false;}this.ds_atldManageDetail.setColumn(_d,"DISUSE_PROCESS_AT","0");this.ds_atldManageDetail.setColumn(_d,"DISUSE_PROCESS_DE","");this.ds_atldManageDetail_sub.clearData;this.ds_atldManageDetail_sub.addRow();this.ds_atldManageDetail_sub.copyRow(0,this.ds_atldManageDetail,_d);this.fn_transaction("disuseProcessCancel");}};this.ds_atldManage_onrowposchanged=function(_b,_c){this.ds_atldManageDetail.clearData();if(_c.newrow> -1){this.fn_search_sub();}};this.grd_atldManage_oncellclick=function(_b,_c){};this.grd_atldManage_onexpandup=function(_b,_c){switch(_c.cell){case 2:var _d=this.ds_atldManageDetail.getColumn(this.ds_atldManageDetail.rowposition,"REQST_YEAR");var _e=system.clientToScreenX(this,0);var _f=system.clientToScreenY(this,0);var _g=new ChildFrame;_g.init("ACC010103_P01","absolute",_e,_f,465,510,null,null,"mis_acc::ACC010103_P01.xfdl");_g.set_openalign("center middle");_g.set_dragmovetype("all");_g.showModal(this.getOwnerFrame(),{year:_d},this,"fn_callback5");break;default:break;}};this.fn_expr=function(){var _b=this.ds_atldManageDetail.getColumn(this.ds_atldManageDetail.rowposition,"DISUSE_PROCESS_AT");if(_b!='1'){return true;}return false;};this.ds_atldManageDetail_onrowposchanged=function(_b,_c){if(_c.newrow> -1){var _d=this.ds_atldManageDetail.rowposition;var _e=_b.getColumn(_d,"DISUSE_PROCESS_AT");if(_e!="1"){this.btn_atld.set_text("자산처분실행");}else{this.btn_atld.set_text("자산처분취소");}this.ds_cond03.clearData();this.ds_cond03.addRow();var _f=_b.getColumn(_c.newrow,"REQST_YEAR");var _g=_b.getColumn(_c.newrow,"ODR");var _h=_b.getColumn(_c.newrow,"ASSETS_NO");this.ds_cond03.setColumn(0,"REQST_YEAR",_f);this.ds_cond03.setColumn(0,"ODR",_g);this.ds_cond03.setColumn(0,"ASSETS_NO",_h);this.fn_transaction("select02");}};this.fn_expr=function(){var _b=this.ds_atldManageDetail.rowposition;var _c=false;var _d=this.ds_atldManageDetail.getColumn(_b,"DISUSE_PROCESS_AT");if(_d=="1"){_c=true;}return _c;};this.ds_atldManageDetail_canrowposchange=function(_b,_c){if(Ex.util.isUpdated(this.ds_atldAccnutAcnt)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}this.ds_atldAccnutAcnt.reset();this.ds_atldAccnutAcnt.applyChange();};this.ds_atldManage_canrowposchange=function(_b,_c){if(Ex.util.isUpdated(this.ds_atldManageDetail)||Ex.util.isUpdated(this.ds_atldAccnutAcnt)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}this.ds_atldAccnutAcnt.reset();this.ds_atldAccnutAcnt.applyChange();this.ds_atldManageDetail.reset();this.ds_atldManageDetail.applyChange();};});this.on_initEvent=function(){this.ds_atldManage.addEventHandler("onrowposchanged",this.ds_atldManage_onrowposchanged,this);this.ds_atldManage.addEventHandler("canrowposchange",this.ds_atldManage_canrowposchange,this);this.ds_atldManageDetail.addEventHandler("onrowposchanged",this.ds_atldManageDetail_onrowposchanged,this);this.ds_atldManageDetail.addEventHandler("oncolumnchanged",this.ds_atldManageDetail_oncolumnchanged,this);this.ds_atldManageDetail.addEventHandler("canrowposchange",this.ds_atldManageDetail_canrowposchange,this);this.ds_atldManageDetail_sub.addEventHandler("onrowposchanged",this.ds_atldManageDetail_onrowposchanged,this);this.addEventHandler("onload",this.ASS030100_onload,this);this.addEventHandler("oninit",this.ASS030100_oninit,this);this.div_search.cal_ACQS_DE1.addEventHandler("oneditclick",this.div_search_cal_ACQS_DE1_oneditclick,this);this.btn_atld.addEventHandler("onclick",this.btn_atld_onclick,this);this.grd_atldAccnutAcnt.addEventHandler("onexpandup",this.grd_atldManage_onexpandup,this);this.btn_Add_Tpg1_R.addEventHandler("onclick",this.btn_Add_Row,this);this.btn_Del_Tpg1_R.addEventHandler("onclick",this.btn_Del_Row,this);this.btn_Cancel_Tpg1_R.addEventHandler("onclick",this.btn_Cancel_Row,this);};this.loadIncludeScript("ASS030100.xfdl");this.loadPreloadList();};})();