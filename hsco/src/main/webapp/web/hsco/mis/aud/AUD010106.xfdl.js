﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("AUD010106");this.set_classname("AUD010106");this.set_titletext("지적사항조회");this._setFormPosition(0,0,1059,735);}_a=new Dataset("DS_INEX_AUDIT",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"AUDIT_PLAN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_PLAN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_PLAN_INSTT\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_PLAN_KND\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_PLAN_CL\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_PLAN_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_PLAN_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_PLAN_SJ\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_PLAN_MAIN_CN\" type=\"STRING\" size=\"1000\"/><Column id=\"AUDIT_PLAN_BUDGET\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_PLAN_CT\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"DSPTH_AT\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_ED_AT\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE2\" type=\"STRING\" size=\"256\"/><Column id=\"PRVYY_AUDIT_ACMSLT\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_ENDDE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"AUDIT_BGNYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_ENDYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_INSTT\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_KND\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_CL\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"COMPT_AT\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_aud005",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_AUD_KND",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_AUD_INSTT",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_LGSTR_LIST",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DSPS_SN\" type=\"STRING\" size=\"256\"/><Column id=\"DSPS_DEMAND_KND\" type=\"STRING\" size=\"256\"/><Column id=\"DSPS_SJ\" type=\"STRING\" size=\"256\"/><Column id=\"LGSTR_MATTER\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"COMPT_AT\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGT_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGT_TY\" type=\"STRING\" size=\"256\"/><Column id=\"LGSTR_REALM\" type=\"STRING\" size=\"256\"/><Column id=\"FNANC_AT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CNSRE_TRGET_EMPL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNSRE_TRGET_EMPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNSRE_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CNSRE_PRVONSH\" type=\"STRING\" size=\"256\"/><Column id=\"RDUCT_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_SEARCH2",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"AUDIT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"COMPT_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_MANAGT_TY",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_aud006",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_COMPT_AT",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_AUDIT_ED_AT",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">AUDIT_BGNYEAR</Col><Col id=\"from\"/><Col id=\"msgId\">조회시작년도^조회종료년도</Col><Col id=\"to\">AUDIT_ENDYEAR</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"to\"/><Col id=\"colId\">AUDIT_ENDYEAR</Col><Col id=\"msgId\">조회종료년도^조회시작년도</Col><Col id=\"from\">AUDIT_BGNYEAR</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">AUDIT_BGNYEAR</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col><Col id=\"type\"/><Col id=\"nlength\"/><Col id=\"from\"/><Col id=\"to\"/><Col id=\"lengthChkGb\"/><Col id=\"msgId\">조회시작년도</Col><Col id=\"expr\"/><Col id=\"func\"/></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">AUDIT_ENDYEAR</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col><Col id=\"type\"/><Col id=\"nlength\"/><Col id=\"from\"/><Col id=\"to\"/><Col id=\"lengthChkGb\"/><Col id=\"msgId\">조회종료년도</Col><Col id=\"expr\"/><Col id=\"func\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("DS_AUD_CL",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_MANAGT_AT",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_CNSRE_KND",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_CLSF_CODE",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_AUD037",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_AUD037G",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_SearchArea","absolute","0","0",null,"59","28",null,this);_a.set_taborder("1");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_AUDI_PLAN_YEAR","absolute","15","5","64","21",null,null,this.div_SearchArea);_a.set_taborder("8");_a.set_text("감사년도");_a.style.set_align("left middle");_a.set_cssclass("sta_WFSA_Label");this.div_SearchArea.addChild(_a.name,_a);_a=new Static("sta_AUDIT_PLAN_INSTT","absolute","274","5","64","21",null,null,this.div_SearchArea);_a.set_taborder("9");_a.set_text("감사기관");_a.style.set_align("left middle");_a.set_cssclass("sta_WFSA_Label");this.div_SearchArea.addChild(_a.name,_a);_a=new Combo("cmb_AUDIT_INSTT","absolute","338","5","110","21",null,null,this.div_SearchArea);this.div_SearchArea.addChild(_a.name,_a);_a.set_taborder("2");_a.set_innerdataset("DS_AUD_INSTT");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("sta_AUDIT_PLAN_KND","absolute","463","5","64","21",null,null,this.div_SearchArea);_a.set_taborder("10");_a.set_text("감사종류");_a.style.set_align("left middle");_a.set_cssclass("sta_WFSA_Label");this.div_SearchArea.addChild(_a.name,_a);_a=new Combo("cmb_AUDIT_KND","absolute","527","5","110","21",null,null,this.div_SearchArea);this.div_SearchArea.addChild(_a.name,_a);_a.set_taborder("3");_a.set_innerdataset("DS_AUD_KND");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("sta_AUDIT_PLAN_CL","absolute","652","5","64","21",null,null,this.div_SearchArea);_a.set_taborder("11");_a.set_text("감사분류");_a.style.set_align("left middle");_a.set_cssclass("sta_WFSA_Label");this.div_SearchArea.addChild(_a.name,_a);_a=new Combo("cmb_AUDIT_CL","absolute","716","5","110","21",null,null,this.div_SearchArea);this.div_SearchArea.addChild(_a.name,_a);_a.set_taborder("4");_a.set_innerdataset("DS_AUD_CL");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("sta_AUDI_PLAN_NO","absolute","274","31","64","21",null,null,this.div_SearchArea);_a.set_taborder("12");_a.set_text("감사번호");_a.style.set_align("left middle");_a.set_cssclass("sta_WFSA_Label");this.div_SearchArea.addChild(_a.name,_a);_a=new Edit("edt_AUDIT_NO","absolute","338","31","81","21",null,null,this.div_SearchArea);_a.set_taborder("7");this.div_SearchArea.addChild(_a.name,_a);_a=new Spin("spn_year","absolute","79","5","80","21",null,null,this.div_SearchArea);_a.set_taborder("0");_a.set_value("0");_a.set_max("2050");_a.set_min("1950");_a.set_cssclass("spn_WF_Essential");this.div_SearchArea.addChild(_a.name,_a);_a=new Spin("spn_year00","absolute","179","5","80","21",null,null,this.div_SearchArea);_a.set_taborder("1");_a.set_value("0");_a.set_max("2050");_a.set_min("1950");_a.set_cssclass("spn_WF_Essential");this.div_SearchArea.addChild(_a.name,_a);_a=new Static("Static08","absolute","164","5","10","21",null,null,this.div_SearchArea);_a.set_taborder("13");_a.set_text("~");this.div_SearchArea.addChild(_a.name,_a);_a=new Static("sta_AUDIT_PLAN_CL00","absolute","841","5","64","21",null,null,this.div_SearchArea);_a.set_taborder("14");_a.set_text("완결여부");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_SearchArea.addChild(_a.name,_a);_a=new Combo("cmb_AUDIT_CL00","absolute","905","5","110","21",null,null,this.div_SearchArea);this.div_SearchArea.addChild(_a.name,_a);_a.set_taborder("5");_a.set_innerdataset("@DS_COMPT_AT");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("Static06","absolute","259","0","15",null,null,"0",this.div_SearchArea);_a.set_taborder("15");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.div_SearchArea.addChild(_a.name,_a);_a=new Static("Static00","absolute","448","0","15",null,null,"0",this.div_SearchArea);_a.set_taborder("16");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.div_SearchArea.addChild(_a.name,_a);_a=new Static("Static03","absolute","637","0","15",null,null,"0",this.div_SearchArea);_a.set_taborder("17");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.div_SearchArea.addChild(_a.name,_a);_a=new Static("Static04","absolute","826","0","15",null,null,"0",this.div_SearchArea);_a.set_taborder("18");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.div_SearchArea.addChild(_a.name,_a);_a=new Static("sta_auditSe","absolute","15","31","64","21",null,null,this.div_SearchArea);_a.set_taborder("19");_a.set_text("감사구분");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_SearchArea.addChild(_a.name,_a);_a=new Combo("cmb_AUDIT_SE","absolute","79","31","110","21",null,null,this.div_SearchArea);this.div_SearchArea.addChild(_a.name,_a);_a.set_taborder("6");_a.set_innerdataset("DS_AUD037");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Div("div_Cont","absolute","0","59",null,null,"28","0",this);_a.set_taborder("4");this.addChild(_a.name,_a);_a=new Static("sta_AUDLGSTR","absolute","0","285","130","19",null,null,this.div_Cont);_a.set_taborder("1");_a.set_text("지적사항목록");_a.set_cssclass("sta_WF_Title02");_a.style.set_font("bold 9 Dotum");_a.getSetter("titletext").set("내외부감사실시관리");this.div_Cont.addChild(_a.name,_a);_a=new Static("sta_INEX_AUDIT","absolute","0","8","130","19",null,null,this.div_Cont);_a.set_taborder("3");_a.set_text("내외부감사목록");_a.set_cssclass("sta_WF_Title02");_a.style.set_font("bold 9 Dotum");_a.getSetter("titletext").set("내외부감사실시관리");this.div_Cont.addChild(_a.name,_a);_a=new Grid("grd_AUDLGSTR","absolute","0","309",null,null,"0","0",this.div_Cont);_a.set_taborder("4");_a.set_binddataset("DS_LGSTR_LIST");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"86\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"81\"/><Column size=\"281\"/><Column size=\"260\"/><Column size=\"70\"/><Column size=\"95\"/><Column size=\"73\"/><Column size=\"83\"/><Column size=\"151\"/><Column size=\"79\"/><Column size=\"87\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"처분요구번호\"/><Cell col=\"1\" text=\"지적분야\"/><Cell col=\"2\" text=\"조치구분\"/><Cell col=\"3\" text=\"재정조치\"/><Cell col=\"4\" text=\"지적사항\"/><Cell col=\"5\" text=\"조치결과\"/><Cell col=\"6\" text=\"완결여부\"/><Cell col=\"7\" text=\"징계일자\"/><Cell col=\"8\" text=\"처분종류\"/><Cell col=\"9\" text=\"경감여부\"/><Cell col=\"10\" text=\"부서\"/><Cell col=\"11\" text=\"담당자\"/><Cell col=\"12\" text=\"직급\"/></Band><Band id=\"body\"><Cell text=\"bind:DSPS_SN\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:LGSTR_REALM\" combodataset=\"ds_aud005\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:MANAGT_TY\" combodataset=\"ds_aud006\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:FNANC_AT\" combodataset=\"DS_MANAGT_AT\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" edittype=\"none\" style=\"align:left top;padding:5 0 5 5;\" text=\"bind:LGSTR_MATTER\" wordwrap=\"char\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"5\" style=\"align:left top;padding:5 0 5 5;\" text=\"bind:MANAGT_RESULT\" wordwrap=\"char\"/><Cell col=\"6\" displaytype=\"combo\" text=\"bind:COMPT_AT\" combodataset=\"DS_COMPT_AT\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:CNSRE_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"combo\" text=\"bind:DSPS_DEMAND_KND\" combodataset=\"DS_CNSRE_KND\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"9\" displaytype=\"checkbox\" style=\"controlborder:1 none #808080 ;\" text=\"bind:RDUCT_AT\"/><Cell col=\"10\" text=\"bind:DEPT_NM\"/><Cell col=\"11\" text=\"bind:CNSRE_TRGET_EMPL_NM\"/><Cell col=\"12\" displaytype=\"combo\" text=\"bind:CLSF_CODE\" combodataset=\"DS_CLSF_CODE\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/></Band></Format></Formats>");this.div_Cont.addChild(_a.name,_a);_a=new Grid("grd_INEX_AUDIT","absolute","0","27",null,"250","0",null,this.div_Cont);_a.set_taborder("0");_a.set_binddataset("DS_INEX_AUDIT");_a.getSetter("titletext").set("내외부감사실시관리");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"400\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"감사년도\"/><Cell col=\"2\" text=\"감사번호\"/><Cell col=\"3\" text=\"감사구분\"/><Cell col=\"4\" text=\"감사기관\"/><Cell col=\"5\" text=\"감사종류\"/><Cell col=\"6\" text=\"감사분류\"/><Cell col=\"7\" text=\"감사시작일\"/><Cell col=\"8\" text=\"감사종료일\"/><Cell col=\"9\" text=\"감사명\"/><Cell col=\"10\" text=\"종결여부\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:AUDIT_PLAN_YEAR\"/><Cell col=\"2\" edittype=\"none\" style=\"padding: ;\" text=\"bind:AUDIT_PLAN_NO\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:AUDIT_SE\" combodataset=\"DS_AUD037G\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"none\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:AUDIT_PLAN_INSTT\" combodataset=\"DS_AUD_INSTT\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"none\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:AUDIT_PLAN_KND\" combodataset=\"DS_AUD_KND\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"none\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:AUDIT_PLAN_CL\" combodataset=\"DS_AUD_CL\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"7\" displaytype=\"date\" edittype=\"none\" text=\"bind:AUDIT_BGNDE\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"date\" edittype=\"none\" text=\"bind:AUDIT_ENDDE\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" edittype=\"none\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:AUDIT_PLAN_SJ\" tooltiptext=\"bind:AUDIT_PLAN_SJ\"/><Cell col=\"10\" displaytype=\"combo\" edittype=\"none\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:AUDIT_ED_AT\" combodataset=\"DS_AUDIT_ED_AT\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/></Band></Format></Formats>");this.div_Cont.addChild(_a.name,_a);_a=new Static("sta_Total_value","absolute",null,"285","21","19","49",null,this.div_Cont);_a.set_taborder("5");_a.set_text("00");_a.set_cssclass("sta_WF_txt01");this.div_Cont.addChild(_a.name,_a);_a=new Static("sta_Sum_05_value","absolute",null,"285","20","19","169",null,this.div_Cont);_a.set_taborder("6");_a.set_text("00");_a.set_cssclass("sta_WF_txt01");this.div_Cont.addChild(_a.name,_a);_a=new Static("sta_Sum_04_value","absolute",null,"285","20","19","224",null,this.div_Cont);_a.set_taborder("7");_a.set_text("00");_a.set_cssclass("sta_WF_txt01");this.div_Cont.addChild(_a.name,_a);_a=new Static("sta_Sum_03_value","absolute",null,"285","16","19","301",null,this.div_Cont);_a.set_taborder("8");_a.set_text("00");_a.set_cssclass("sta_WF_txt01");this.div_Cont.addChild(_a.name,_a);_a=new Static("sta_Sum_02_value","absolute",null,"285","19","19","355",null,this.div_Cont);_a.set_taborder("9");_a.set_text("00");_a.set_cssclass("sta_WF_txt01");this.div_Cont.addChild(_a.name,_a);_a=new Static("sta_Sum_01_value","absolute",null,"285","19","19","409",null,this.div_Cont);_a.set_taborder("10");_a.set_text("00");_a.set_cssclass("sta_WF_txt01");this.div_Cont.addChild(_a.name,_a);_a=new Static("Static21","absolute","-1","0","1031","10",null,null,this.div_Cont);_a.set_taborder("11");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_Cont.addChild(_a.name,_a);_a=new Static("Static00","absolute","7","277","1031","10",null,null,this.div_Cont);_a.set_taborder("12");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_Cont.addChild(_a.name,_a);_a=new Button("btn_exceldn","absolute",null,"285","24","19","0",null,this.div_Cont);_a.set_taborder("2");_a.set_cssclass("btn_WF_Gridexceldn");this.div_Cont.addChild(_a.name,_a);_a=new Static("Static54","absolute",null,"285","40","19","372",null,this.div_Cont);_a.set_taborder("13");_a.set_text("<fc v='#cbcbcb'>|</fc> 주의");_a.set_usedecorate("true");_a.set_cssclass("sta_WF_txt01");this.div_Cont.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"285","40","19","428",null,this.div_Cont);_a.set_taborder("14");_a.set_text("<fc v='#cbcbcb'>|</fc> 시정");_a.set_usedecorate("true");_a.set_cssclass("sta_WF_txt01");this.div_Cont.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"285","40","19","319",null,this.div_Cont);_a.set_taborder("15");_a.set_text("<fc v='#cbcbcb'>|</fc> 개선");_a.set_usedecorate("true");_a.set_cssclass("sta_WF_txt01");this.div_Cont.addChild(_a.name,_a);_a=new Static("Static03","absolute",null,"285","60","19","242",null,this.div_Cont);_a.set_taborder("16");_a.set_text("<fc v='#cbcbcb'>|</fc> 현지시정");_a.set_usedecorate("true");_a.set_cssclass("sta_WF_txt01");this.div_Cont.addChild(_a.name,_a);_a=new Static("Static04","absolute",null,"285","40","19","188",null,this.div_Cont);_a.set_taborder("17");_a.set_text("<fc v='#cbcbcb'>|</fc> 건의");_a.set_usedecorate("true");_a.set_cssclass("sta_WF_txt01");this.div_Cont.addChild(_a.name,_a);_a=new Static("Static05","absolute",null,"285","40","19","72",null,this.div_Cont);_a.set_taborder("18");_a.set_text("<fc v='#cbcbcb'>|</fc>  총건수");_a.set_usedecorate("true");_a.set_cssclass("sta_WF_txt01");this.div_Cont.addChild(_a.name,_a);_a=new Static("Static06","absolute",null,"285","20","19","29",null,this.div_Cont);_a.set_taborder("19");_a.set_text("건");_a.set_usedecorate("true");_a.set_cssclass("sta_WF_txt01");this.div_Cont.addChild(_a.name,_a);_a=new Static("Static07","absolute","-1","304","1031","5",null,null,this.div_Cont);_a.set_taborder("20");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_Cont.addChild(_a.name,_a);_a=new Static("sta_Sum_06_value","absolute",null,"285","20","19","113",null,this.div_Cont);_a.set_taborder("21");_a.set_text("00");_a.set_cssclass("sta_WF_txt01");this.div_Cont.addChild(_a.name,_a);_a=new Static("Static08","absolute",null,"285","40","19","132",null,this.div_Cont);_a.set_taborder("22");_a.set_text("<fc v='#cbcbcb'>|</fc> 기타");_a.set_usedecorate("true");_a.set_cssclass("sta_WF_txt01");this.div_Cont.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute",null,"0","13","735","0",null,this);_a.set_taborder("6");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","0","15","57",null,null,this);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.style.set_background("bisque");_a.style.set_border("0 none transparent");this.addChild(_a.name,_a);_a=new Layout("default","",0,59,this.div_SearchArea,function(_b){_b.set_taborder("1");_b.set_cssclass("div_WFSA_Box");});this.div_SearchArea.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_Cont,function(_b){_b.set_taborder("4");});this.div_Cont.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("AUD010106");_b.set_titletext("지적사항조회");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_SearchArea.cmb_AUDIT_INSTT","value","ds_cond","AUDIT_INSTT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_SearchArea.cmb_AUDIT_KND","value","ds_cond","AUDIT_KND");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_SearchArea.cmb_AUDIT_CL","value","ds_cond","AUDIT_CL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_SearchArea.edt_AUDIT_NO","value","ds_cond","AUDIT_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","div_SearchArea.spn_year","value","ds_cond","AUDIT_BGNYEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item15","div_SearchArea.spn_year00","value","ds_cond","AUDIT_ENDYEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_SearchArea.cmb_AUDIT_CL00","value","ds_cond","COMPT_AT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item28","div_SearchArea.cmb_AUDIT_SE","value","ds_cond","AUDIT_SE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("AUD010106.xfdl","lib::comInclude.xjs");this.addIncludeScript("AUD010106.xfdl","mis_lib::misUtil.xjs");this.registerScript("AUD010106.xfdl",function(){this.checkDs=[this.DS_LGSTR_LIST];this.AUD010106_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.AUD010106_onload=function(_a,_b){this.div_SearchArea.spn_year.setFocus(true);};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"AUDIT_BGNYEAR",this.gfn_today().substring(0,4)-5);this.ds_cond.setColumn(0,"AUDIT_ENDYEAR",this.gfn_today().substring(0,4));var _a=[["DS_AUD_INSTT","AUD002",1,"전체"],["DS_AUD_KND","AUD003",1,"전체"],["ds_aud005","AUD005",1,"전체"],["DS_AUDIT_ED_AT","AUD018",1,""],["DS_COMPT_AT","AUD007",1,"전체"],["ds_aud006","AUD006",1,""],["DS_AUD_CL","AUD004",1,"전체"],["DS_MANAGT_AT","AUD019",1,""],["DS_CNSRE_KND","AUD026",1,""],["DS_AUD037","AUD037","Y","A","B"],["DS_AUD037G","AUD037","Y","D","B"],["DS_CLSF_CODE","HRM002",1,""]];var _b=function(_c,_d,_e){this.fn_search();};this.gfn_comboLoad(_a,_b);};this.fn_init_dataset=function(){};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}this.fn_transaction("selectInExAdList");};this.DS_INEX_AUDIT_onrowposchanged=function(_a,_b){this.fn_transaction("selectLgstrList");};this.fn_transaction=function(_a){switch(_a){case "selectInExAdList":this.DS_INEX_AUDIT.clearData();var _b="hsco/mis/aud/AUD010106/selectInExAdList.do";var _c="input01=ds_cond";var _d="DS_INEX_AUDIT=output01";break;case "selectLgstrList":this.DS_SEARCH2.clearData();this.DS_SEARCH2.addRow();this.DS_SEARCH2.setColumn(0,"AUDIT_NO",this.DS_INEX_AUDIT.getColumn(this.DS_INEX_AUDIT.rowposition,"AUDIT_PLAN_NO"));this.DS_SEARCH2.setColumn(0,"AUDIT_YEAR",this.DS_INEX_AUDIT.getColumn(this.DS_INEX_AUDIT.rowposition,"AUDIT_PLAN_YEAR"));this.DS_SEARCH2.setColumn(0,"COMPT_AT",this.ds_cond.getColumn(0,"COMPT_AT"));var _b="hsco/mis/aud/AUD010106/selectLgstrList.do";var _c="input02=DS_SEARCH2";var _d="DS_LGSTR_LIST=output02";break;}var _e="";Ex.core.tran(this,_a,_b,_c,_d,_e);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}else{if(_a=="selectInExAdList"){}if(_a=="selectLgstrList"){var _d=0;var _e=0;var _f=0;var _g=0;var _h=0;var _i=0;for(var _j=0;_j<this.DS_LGSTR_LIST.rowcount;_j++ ){switch(this.DS_LGSTR_LIST.getColumn(_j,"MANAGT_TY")){case '01':_d=_d+1;break;case '02':_e=_e+1;break;case '03':_f=_f+1;break;case '04':_g=_g+1;break;case '05':_h=_h+1;break;default:_i=_i+1;break;}}this.div_Cont.sta_Sum_01_value.set_text(_d);this.div_Cont.sta_Sum_02_value.set_text(_e);this.div_Cont.sta_Sum_03_value.set_text(_f);this.div_Cont.sta_Sum_04_value.set_text(_g);this.div_Cont.sta_Sum_05_value.set_text(_h);this.div_Cont.sta_Sum_06_value.set_text(_i);this.div_Cont.sta_Total_value.set_text(this.DS_LGSTR_LIST.rowcount);}}};this.div_Cont_btn_exceldn_onclick=function(_a,_b){this.gfn_exportExcel(this.div_Cont.grd_AUDLGSTR,"AUDLGSTR");};});this.on_initEvent=function(){this.DS_INEX_AUDIT.addEventHandler("onrowposchanged",this.DS_INEX_AUDIT_onrowposchanged,this);this.addEventHandler("onload",this.AUD010106_onload,this);this.addEventHandler("oninit",this.AUD010106_oninit,this);this.div_SearchArea.cmb_AUDIT_KND.addEventHandler("onitemchanged",this.Div00_div_cmb_AUDIT_PLAN_KND_onitemchanged,this);this.div_SearchArea.spn_year00.addEventHandler("ontextchanged",this.div_SearchArea_spn_year_ontextchanged,this);this.div_SearchArea.Static06.addEventHandler("onclick",this.Static47_onclick,this);this.div_SearchArea.Static00.addEventHandler("onclick",this.Static47_onclick,this);this.div_SearchArea.Static03.addEventHandler("onclick",this.Static47_onclick,this);this.div_SearchArea.Static04.addEventHandler("onclick",this.Static47_onclick,this);this.div_Cont.sta_AUDLGSTR.addEventHandler("onclick",this.Static00_onclick,this);this.div_Cont.sta_INEX_AUDIT.addEventHandler("onclick",this.Static00_onclick,this);this.div_Cont.sta_Sum_03_value.addEventHandler("onclick",this.div_Cont_sta_Sum_03_value_onclick,this);this.div_Cont.btn_exceldn.addEventHandler("onclick",this.div_Cont_btn_exceldn_onclick,this);};this.loadIncludeScript("AUD010106.xfdl");};})();