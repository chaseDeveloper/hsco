﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ACH040601");this.set_classname("");this.set_titletext("부서성과분석");this._setFormPosition(0,0,1059,735);}this.getSetter("inheritanceid").set("");_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">EVL_YEAR</Col><Col id=\"msgId\">평가년도</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">ODR_SE</Col><Col id=\"msgId\">구분</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">ORGNZT_CODE</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col><Col id=\"type\"/><Col id=\"nlength\"/><Col id=\"from\"/><Col id=\"to\"/><Col id=\"lengthChkGb\"/><Col id=\"msgId\">조직</Col><Col id=\"expr\"/><Col id=\"func\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EVL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNZT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ix_se",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_org_cnnc",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EVL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNZT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_me_cycle_se",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ix_charct_se",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ix_atrb_se",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_mesure_unit_se",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_achiv_rcf_se",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_acmslt_it_se",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_excp_cf_se",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_odrSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_applcAt",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">전체</Col><Col id=\"CODE\">%</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">적용</Col></Row><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">미적용</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_getClosAt",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CLOS_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_viewPointSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_aMthdSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_viewList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EVL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"VIEWPOINT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"STRCT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"STRCT_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"WGHTVAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_applcSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_kpiInfo",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"VIEWPOINT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"S_IX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"S_IX_NM\" type=\"STRING\" size=\"256\"/><Column id=\"C_IX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"C_IX_NM\" type=\"STRING\" size=\"256\"/><Column id=\"K_IX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"K_IX_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_condDtl",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EVL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"IX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNZT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_acmsltList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EVL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"IX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"IX_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNZT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MESURE_CYCLE\" type=\"STRING\" size=\"256\"/><Column id=\"MESURE_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"MT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"MT_GOALVAL\" type=\"STRING\" size=\"256\"/><Column id=\"MT_ACMSLTVAL_RT\" type=\"STRING\" size=\"256\"/><Column id=\"MT_ACMSLTVAL\" type=\"STRING\" size=\"256\"/><Column id=\"Q_GOALVAL\" type=\"STRING\" size=\"256\"/><Column id=\"Q_ACMSLTVAL\" type=\"STRING\" size=\"256\"/><Column id=\"Q_ACMSLTVAL_RT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_orgnztSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ixNmSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rspSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_mmList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"MT\" type=\"STRING\" size=\"256\"/><Column id=\"MT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_acmsltValueMSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_curInfo",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CUR_EVL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"CUR_ODR_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_refrnList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EVL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"IX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"IX_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNZT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNZT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IX_SE\" type=\"STRING\" size=\"256\"/><Column id=\"UPPER_IX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MESURE_CYCLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ubiReport01",this);_a._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ubiReport00",this);_a._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","68",null,null,"28","0",this);_a.set_taborder("37");_a.style.set_background("#00000000");_a.set_scrollbars("none");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","506","0",null,"323","0",null,this.div_work);_a.set_taborder("31");_a.set_cssclass("sta_WF_score1");_a.style.set_font("bold antialias 13 Helvetica");this.div_work.addChild(_a.name,_a);_a=new Static("sta_BGN_DT00","absolute","102.37%","180","84","27",null,null,this.div_work);_a.set_taborder("8");_a.set_text("전략목표 ");_a.set_cssclass("sta_WFDA_labelB");_a.style.set_align("left middle");_a.style.set_font("bold 9 Dotum");this.div_work.addChild(_a.name,_a);_a=new Static("sta_DCLZ_SE00","absolute","102.37%","152","84","27",null,null,this.div_work);_a.set_taborder("9");_a.set_text("관점 ");_a.set_cssclass("sta_WFDA_labelB");_a.style.set_align("left");_a.style.set_font("bold 9 Dotum");this.div_work.addChild(_a.name,_a);_a=new Static("sta_AM_PM_SE00","absolute","102.37%","208","84","27",null,null,this.div_work);_a.set_taborder("10");_a.set_text("CSF ");_a.set_cssclass("sta_WFDA_labelB");_a.style.set_align("left middle");_a.style.set_font("bold 9 Dotum");this.div_work.addChild(_a.name,_a);_a=new Static("sta_AM_PM_SE01","absolute","102.37%","236","84","27",null,null,this.div_work);_a.set_taborder("16");_a.set_text("KPI ");_a.set_cssclass("sta_WFDA_labelB");_a.style.set_align("left middle");_a.style.set_font("bold 9 Dotum");this.div_work.addChild(_a.name,_a);_a=new Grid("grdListDtl","absolute","507","352",null,null,"0","0",this.div_work);_a.set_taborder("24");_a.set_binddataset("ds_acmsltList");_a.set_autofittype("col");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"66\"/><Column size=\"66\"/><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"44\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"44\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"측정&#13;&#10;주기\"/><Cell col=\"2\" rowspan=\"2\" text=\"측정월\"/><Cell col=\"3\" rowspan=\"2\" text=\"단위\"/><Cell col=\"4\" colspan=\"4\" text=\"월\"/><Cell col=\"8\" colspan=\"4\" text=\"누계\"/><Cell row=\"1\" col=\"4\" text=\"목표\"/><Cell row=\"1\" col=\"5\" text=\"실적\"/><Cell row=\"1\" col=\"6\" colspan=\"2\" text=\"달성율\"/><Cell row=\"1\" col=\"8\" text=\"목표\"/><Cell row=\"1\" col=\"9\" text=\"실적\"/><Cell row=\"1\" col=\"10\" colspan=\"2\" text=\"달성율\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:MESURE_CYCLE\" combodataset=\"ds_me_cycle_se\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"2\" text=\"bind:MT_SE\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:MESURE_UNIT\" combodataset=\"ds_mesure_unit_se\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" displaytype=\"number\" text=\"bind:MT_GOALVAL\" mask=\"#,##0.00\"/><Cell col=\"5\" displaytype=\"number\" text=\"bind:MT_ACMSLTVAL\" mask=\"#,##0.00\"/><Cell col=\"6\" displaytype=\"number\" style=\"selectcolor: ;\" text=\"bind:MT_ACMSLTVAL_RT\" mask=\"#,##0.00\"/><Cell col=\"7\" displaytype=\"bar\" style=\"controlcolor:transparent;controlfont:5 arial;\" text=\"bind:MT_ACMSLTVAL_RT\" mask=\"#,##0.00\"/><Cell col=\"8\" displaytype=\"number\" text=\"bind:Q_GOALVAL\" mask=\"#,##0.00\" suppress=\"0\" suppressalign=\"first\"/><Cell col=\"9\" displaytype=\"number\" text=\"bind:Q_ACMSLTVAL\" mask=\"#,##0.00\" suppress=\"0\" suppressalign=\"first\"/><Cell col=\"10\" displaytype=\"number\" text=\"bind:Q_ACMSLTVAL_RT\" mask=\"#,##0.00\" suppress=\"0\" suppressalign=\"first\"/><Cell col=\"11\" displaytype=\"bar\" edittype=\"none\" style=\"controlcolor:transparent;controlfont:5 arial;\" text=\"bind:Q_ACMSLTVAL_RT\" suppress=\"0\" suppressalign=\"first\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_kpiList","absolute","0","0","495",null,null,"0",this.div_work);_a.set_taborder("29");_a.set_binddataset("ds_refrnList");_a.set_autofittype("col");_a.set_treeusecheckbox("false");_a.set_treeinitstatus("expand,null");_a.set_treeuseexpandkey("true");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"328\"/><Column size=\"65\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"지표명\"/><Cell col=\"2\" text=\"지표구분\"/><Cell col=\"3\" text=\"측정주기\"/></Band><Band id=\"body\"><Cell style=\"background: ;\" text=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"tree\" edittype=\"tree\" style=\"font:EXPR(IX_SE!= '004' ? '' : 'bold 9 Dotum');cursor:EXPR(IX_SE!= '004' ? 'no' : 'arrow');\" text=\"bind:IX_NM\" wordwrap=\"none\" treestartlevel=\"0\" treelevel=\"bind:IX_SE\"/><Cell col=\"2\" displaytype=\"combo\" style=\"font:EXPR(IX_SE!= '004' ? '' : 'bold 9 Dotum');cursor:EXPR(IX_SE!= '004' ? 'no' : 'arrow');\" text=\"bind:IX_SE\" combodataset=\"ds_ix_se\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" displaytype=\"combo\" style=\"font:EXPR(IX_SE!= '004' ? '' : 'bold 9 Dotum');cursor:EXPR(IX_SE!= '004' ? 'no' : 'arrow');\" text=\"bind:MESURE_CYCLE\" combodataset=\"ds_me_cycle_se\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Button("btn_excel","absolute",null,"328","25","19","0",null,this.div_work);_a.set_taborder("32");_a.set_cssclass("btn_WF_Gridexceldn");this.div_work.addChild(_a.name,_a);_a=new Static("Static00","absolute","544","347",null,"5","2",null,this.div_work);_a.set_taborder("33");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static01","absolute","544","323",null,"5","2",null,this.div_work);_a.set_taborder("34");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static10","absolute","507","328","186","21",null,null,this.div_work);_a.set_taborder("35");_a.set_text("지표별 성과내역");_a.set_cssclass("sta_WF_Title02");this.div_work.addChild(_a.name,_a);_a=new WebBrowser("wb_graph","absolute","511","5",null,"313","5",null,this.div_work);_a.set_taborder("36");this.div_work.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("29");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_eval_year","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("10");_a.set_text("평가년도");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_evalYear","absolute","79","5","67","21",null,null,this.div_search);_a.set_taborder("11");_a.set_value("0");_a.set_max("10000");_a.set_min("0");_a.set_cssclass("spn_WF_Essential");this.div_search.addChild(_a.name,_a);_a=new Static("sta_se","absolute","162","5","38","21",null,null,this.div_search);_a.set_taborder("12");_a.set_text("구분");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_odrSe","absolute","200","5","116","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("13");_a.set_enableevent("true");_a.set_cssclass("cmb_WF_Essential");_a.set_innerdataset("@ds_odrSe");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.getSetter("next").set("cmb_orgnztSe");_a=new Static("sta_orgSe","absolute","332","5","38","21",null,null,this.div_search);_a.set_taborder("14");_a.set_text("조직");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_orgnztSe","absolute","370","5","176","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("15");_a.set_innerdataset("@ds_orgnztSe");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_cssclass("cmb_WF_Essential");_a=new Static("sta_closeInfo","absolute","565","6","265","21",null,null,this.div_search);_a.set_taborder("16");_a.set_text("Static00");_a.style.set_color("red");_a.style.set_font("bold 9 Gulim");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("38");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("39");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","33",null,"10","28",null,this);_a.set_taborder("40");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","43",null,"21","845",null,this);_a.set_taborder("41");_a.set_text("부서성과분석");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","62",null,"5","546",null,this);_a.set_taborder("42");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","0","15","31",null,null,this);_a.set_taborder("43");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","488","0","38","5",null,null,this);_a.set_taborder("44");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","496","28","38","5",null,null,this);_a.set_taborder("45");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","147","0","15","31",null,null,this);_a.set_taborder("46");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.addChild(_a.name,_a);_a=new Static("Static07","absolute","317","0","15","31",null,null,this);_a.set_taborder("47");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","491","53","150","21",null,null,this);_a.set_taborder("48");this.addChild(_a.name,_a);_a=new Layout("default","",1031,675,this.div_work,function(_b){_b.set_taborder("37");_b.style.set_background("#00000000");_b.set_scrollbars("none");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1019,73,this.div_search,function(_b){_b.set_taborder("29");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("");_b.getSetter("inheritanceid").set("");_b.set_titletext("부서성과분석");});this.addLayout(_a.name,_a);_a=new BindItem("item7","Search00.D_EOPCHE_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","ENTRPS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","Search00.D_DAEPYOJA_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","REPRSNT_MAN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","Search00.D_POST_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","POST_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","Search00.D_JUSO_EDIT1","value","TBITM_MNTNC_MENDNG_ENTRPS","ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item11","Search00.D_JUSO_EDIT2","value","TBITM_MNTNC_MENDNG_ENTRPS","DETAIL_ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item12","Search00.D_TEL_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","CTTPC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item13","Search00.D_FAX_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","FAX_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","Search00.D_SAYONG_RADIO","value","TBITM_MNTNC_MENDNG_ENTRPS","USE_ENNC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item15","Search00.D_BIGO_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","RM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","Tab00.tabpage1.D_NAME_EDIT","value","TBITM_ENTRPS_EMP","ENTRPS_EMP_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","Tab00.tabpage1.D_JIKWI_EDIT","value","TBITM_ENTRPS_EMP","OFCPS");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","Tab00.tabpage1.D_DAMDANG_EDIT","value","TBITM_ENTRPS_EMP","CHRG_JOB");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","Tab00.tabpage1.D_JIWON_COMBO","value","TBITM_ENTRPS_EMP","SPORT_STLE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","Tab00.tabpage1.D_TEL_EDIT","value","TBITM_ENTRPS_EMP","CTTPC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","Tab00.tabpage1.D_EMAIL_EDIT","value","TBITM_ENTRPS_EMP","EMAIL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_DETAIL00.edt_ENTRPS_NM","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","ENTRPS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item16","div_DETAIL00.edt_REPRSNT_MAN","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","REPRSNT_MAN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item17","div_DETAIL00.mae_POST_NO","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","POST_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item18","div_DETAIL00.edt_ADRES","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item19","div_DETAIL00.edt_DETAIL_ADRES","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","DETAIL_ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item20","div_DETAIL00.edt_CTTPC","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","CTTPC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item21","div_DETAIL00.edt_FAX_NO","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","FAX_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item22","div_DETAIL00.edt_USE_ENNC","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","USE_ENNC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item23","div_DETAIL00.txt_RM","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","RM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item28","div_search.spn_evalYear","value","ds_cond","EVL_YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item29","div_search.cmb_odrSe","value","ds_cond","ODR_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item27","div_search.cmb_orgnztSe","value","ds_cond","ORGNZT_CODE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("ACH040601.xfdl","lib::comInclude.xjs");this.registerScript("ACH040601.xfdl",function(){this.sClosAt="";this.nRowPos=0;this.nSetInit=0;this.ACH040601_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.ACH040601_onload=function(_a,_b){this.fn_loadCombo();this.fn_init_current();var _c=application.services["svcurl"].url+"web/hsco/chart/"+"ACH040601.html";this.div_work.wb_graph.set_url(_c);};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_init_current=function(){this.ds_curInfo.clearData();this.fn_transaction("selectCurEvlOdrInfo");};this.fn_loadCombo=function(){this.gfn_loadCodeComboWithDs(this,"",this.ds_ix_se,"ACH001","",""," ","N","");this.gfn_loadCodeComboWithDs(this,"",this.ds_me_cycle_se,"ACH005","",""," ","N","");this.gfn_loadCodeComboWithDs(this,"",this.ds_mesure_unit_se,"ACH011","",""," ","N","");};this.fn_loadComboNonCodeTbl=function(_a,_b){var _c=[["ds_odrSe","ds_cond","","","hsco/mis/ach/ACHCommon/selectOdrList.do",0]];this.gfn_comboLoadNonCodeTbl(_c,this.fn_callbackAfter,_a,_b);};this.fn_loadComboNonCodeTbl2=function(_a,_b){var _c=[["ds_orgnztSe","ds_cond","","","hsco/mis/ach/ACHCommon/selectOrgnztList.do",0]];this.gfn_comboLoadNonCodeTbl(_c,this.fn_callbackAfter,_a,_b);};this.fn_callbackAfter=function(_a){switch(_a){case "ds_odrSe":this.div_search.sta_closeInfo.set_text("집계 기준일 : ");this.ds_acmsltList.clearData();this.ds_refrnList.clearData();this.ds_orgnztSe.clearData();if(this.ds_odrSe.rowcount>0){var _b=this.ds_odrSe.getColumn(0,"CODE_CN");this.div_search.sta_closeInfo.set_text("집계 기준일 : "+_b);if(nSetInit==1){this.fn_setCurInfo("odrSe");nSetInit=0;}this.fn_loadComboNonCodeTbl2();}else{this.gfn_message("info.처리불가","해당년도의 등록된 평가차수가 없습니다.");}break;case "ds_orgnztSe":this.fn_search();break;}};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return false;}this.ds_acmsltList.clearData();this.ds_refrnList.clearData();this.fn_transaction("selectList");};this.fn_search_dtl=function(){this.ds_acmsltList.clearData();this.fn_transaction("selectListDtl");};this.fn_transaction=function(_a){switch(_a){case "selectList":var _b="hsco/mis/ach/ACH040601/selectList.do";var _c="input1=ds_cond";var _d="ds_refrnList=output1";break;case "selectListDtl":var _b="hsco/mis/ach/ACH040601/selectListDtl.do";var _c="input1=ds_condDtl";var _d="ds_acmsltList=output1";break;case "selectCurEvlOdrInfo":var _b="hsco/mis/ach/ACHCommon/selectCurEvlOdrInfo.do";var _c="";var _d="ds_curInfo=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "selectList":break;case "selectListDtl":break;case "selectCurEvlOdrInfo":this.fn_setCurInfo("evalYear");nSetInit=1;break;}}};this.div_work_grd_bsisListMst_onheadclick=function(_a,_b){this.gfn_gridSort(_a,_b);};this.btn_excel_onclick=function(_a,_b){this.gfn_exportExcel(this.div_work.grdListDtl,"exportExl");};this.ds_qKpiListMst_onrowposchanged=function(_a,_b){};this.div_search_spn_evalYear_ontextchanged=function(_a,_b){this.ds_cond.setColumn(0,"EVL_YEAR",_b.posttext);this.fn_loadComboNonCodeTbl();};this.div_search_cmb_odrSe_onitemchanged=function(_a,_b){this.ds_cond.setColumn(0,"ODR_SE",_b.postvalue);var _c=this.ds_odrSe.getColumn(_b.postindex,"CODE_CN");this.div_search.sta_closeInfo.set_text("집계 기준일 : "+_c);this.fn_loadComboNonCodeTbl2();};this.ds_refrnList_onrowposchanged=function(_a,_b){this.ds_condDtl.clearData();this.ds_acmsltList.clearData();var _c=this.ds_refrnList.rowposition;var _d=this.ds_refrnList.getColumn(_c,"IX_SE");if(_d=="004"){this.ds_condDtl.addRow();this.ds_condDtl.setColumn(0,"EVL_YEAR",this.ds_refrnList.getColumn(_c,"EVL_YEAR"));this.ds_condDtl.setColumn(0,"ODR_SE",this.ds_refrnList.getColumn(_c,"ODR_SE"));this.ds_condDtl.setColumn(0,"IX_CODE",this.ds_refrnList.getColumn(_c,"IX_CODE"));var _e=this.ds_refrnList.getColumn(_c,"ORGNZT_CODE");if(_e!="000000"){this.ds_condDtl.setColumn(0,"ORGNZT_CODE",_e);}this.fn_search_dtl();}else{return;}};this.div_work_grdListDtl_onkeydown=function(_a,_b){if(_b.keycode==13){var _c=_a.moveToNextCell();}};this.fn_setCurInfo=function(_a){if(this.ds_curInfo.rowcount==1){if(_a=="evalYear"){var _b=this.ds_curInfo.getColumn(0,"CUR_EVL_YEAR");this.ds_cond.setColumn(0,"EVL_YEAR",_b);this.fn_loadComboNonCodeTbl();}else if(_a=="odrSe"){var _c=this.ds_curInfo.getColumn(0,"CUR_ODR_SE");this.div_search.cmb_odrSe.set_value(_c);var _d=this.ds_odrSe.findRow("CODE",_c);var _e=this.ds_odrSe.getColumn(_d,"CODE_CN");this.div_search.sta_closeInfo.set_text("집계 기준일 : "+_e);}}};this.ds_acmsltList_onvaluechanged=function(_a,_b){var _c=[];var _d="조직별 지표 성과 달성율";if(!this.comUtils.isNull(this.ds_acmsltList)){for(var _f=0;_f<this.ds_acmsltList.rowcount;_f++ ){var _e=[];_e[0]=nexacro.trim(this.ds_acmsltList.getColumn(_f,"MT_SE"));_e[1]=nexacro.toNumber(this.ds_acmsltList.getColumn(_f,"MT_ACMSLTVAL_RT"));_e[2]=nexacro.toNumber(this.ds_acmsltList.getColumn(_f,"MT_ACMSLTVAL_RT"));_e[3]=nexacro.toNumber(this.ds_acmsltList.getColumn(_f,"Q_ACMSLTVAL_RT"));_e[4]=nexacro.toNumber(this.ds_acmsltList.getColumn(_f,"Q_ACMSLTVAL_RT"));_c.push(_e);}}this.div_work.wb_graph.callMethod("drawChart",_c,_d);};this.div_search_cmb_orgnztSe_onitemchanged=function(_a,_b){this.fn_search();};});this.on_initEvent=function(){this.ds_viewList.addEventHandler("onrowposchanged",this.ds_viewList_onrowposchanged,this);this.ds_acmsltList.addEventHandler("onvaluechanged",this.ds_acmsltList_onvaluechanged,this);this.ds_mmList.addEventHandler("onrowposchanged",this.ds_mmList_onrowposchanged,this);this.ds_refrnList.addEventHandler("onrowposchanged",this.ds_refrnList_onrowposchanged,this);this.addEventHandler("oninit",this.ACH040601_oninit,this);this.addEventHandler("onload",this.ACH040601_onload,this);this.div_work.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);this.div_search.spn_evalYear.addEventHandler("ontextchanged",this.div_search_spn_evalYear_ontextchanged,this);this.div_search.cmb_odrSe.addEventHandler("onitemchanged",this.div_search_cmb_odrSe_onitemchanged,this);this.div_search.cmb_orgnztSe.addEventHandler("onitemchanged",this.div_search_cmb_orgnztSe_onitemchanged,this);};this.loadIncludeScript("ACH040601.xfdl");};})();