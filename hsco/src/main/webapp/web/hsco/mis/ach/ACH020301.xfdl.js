﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ACH020301");this.set_classname("");this.set_titletext("지표배정관리");this._setFormPosition(0,0,1059,735);}this.getSetter("inheritanceid").set("");_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">EVL_YEAR</Col><Col id=\"msgId\">평가년도</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">ODR_SE</Col><Col id=\"msgId\">구분</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">VIEWPOINT_SE</Col><Col id=\"compId\">ds_cond</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">관점</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EVL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"VIEWPOINT_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ix_se",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_org_cnnc",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EVL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNZT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_me_cycle_se",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ix_charct_se",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ix_atrb_se",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_mesure_unit_se",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_achiv_rcf_se",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_acmslt_it_se",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_excp_cf_se",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_odrSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_applcAt",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">전체</Col><Col id=\"CODE\">%</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">적용</Col></Row><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">미적용</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_getClosAt",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CLOS_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_viewPointSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_aMthdSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_viewList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EVL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"VIEWPOINT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"STRCT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"STRCT_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"WGHTVAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_kpiListMst",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"IX_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"IX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"IX_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IX_SE\" type=\"STRING\" size=\"256\"/><Column id=\"UPPER_IX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"UPPER_IX_VER\" type=\"STRING\" size=\"256\"/><Column id=\"VIEWPOINT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"APPLC_SCOPE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"IX_CHARCT\" type=\"STRING\" size=\"256\"/><Column id=\"MESURE_CYCLE\" type=\"STRING\" size=\"256\"/><Column id=\"REPORT_CYCLE\" type=\"STRING\" size=\"256\"/><Column id=\"MESURE_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"IX_ATRB\" type=\"STRING\" size=\"256\"/><Column id=\"ACMSLT_VALUE_MANAGE_MTHD\" type=\"STRING\" size=\"256\"/><Column id=\"ACMSLT_INPUT_TY\" type=\"STRING\" size=\"256\"/><Column id=\"EXCP_RSLT_CALC_FRMLA\" type=\"STRING\" size=\"256\"/><Column id=\"CORE_IX_MANAGE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"SM_IX\" type=\"STRING\" size=\"256\"/><Column id=\"IX_MNGR_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"IX_MANAGE_PD_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"IX_MANAGE_PD_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"ACHIV_RT_CALC_FRMLA\" type=\"STRING\" size=\"256\"/><Column id=\"MXMM_EVL_LMT\" type=\"STRING\" size=\"256\"/><Column id=\"MUMM_EVL_LMT\" type=\"STRING\" size=\"256\"/><Column id=\"ACMSLT_CALC_FRMLA\" type=\"STRING\" size=\"256\"/><Column id=\"KPI_DFN\" type=\"STRING\" size=\"256\"/><Column id=\"ACMSLT_REFRN_AT\" type=\"STRING\" size=\"256\"/><Column id=\"REFRN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"UN_USE_DE\" type=\"STRING\" size=\"256\"/><Column id=\"UN_MOTV_REASON\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_applcSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_kpiInfo",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"VIEWPOINT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"S_IX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"S_IX_NM\" type=\"STRING\" size=\"256\"/><Column id=\"C_IX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"C_IX_NM\" type=\"STRING\" size=\"256\"/><Column id=\"K_IX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"K_IX_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_condDtl",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EVL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"VIEWPOINT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"IX_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_asignList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ASIGN_AT\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNZT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNZT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_GROUP_SE\" type=\"STRING\" size=\"256\"/><Column id=\"IX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VIEWPOINT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"STRCT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_curInfo",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CUR_EVL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"CUR_ODR_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_gubun01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","66",null,null,"28","0",this);_a.set_taborder("37");_a.style.set_background("#00000000");_a.set_scrollbars("none");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","65.18%","0",null,"27","0",null,this.div_work);_a.set_taborder("23");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Static("Static00","absolute","65.18%","26",null,"27","0",null,this.div_work);_a.set_taborder("24");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Static("Static01","absolute","65.18%","52",null,"27","0",null,this.div_work);_a.set_taborder("25");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Static("Static02","absolute","65.18%","78",null,"27","0",null,this.div_work);_a.set_taborder("26");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_kpiList00","absolute","0","0",null,null,"43.74%","0",this.div_work);_a.set_taborder("3");_a.set_binddataset("ds_kpiListMst");_a.set_autofittype("col");_a.set_treeusecheckbox("false");_a.set_treeinitstatus("expand,null");_a.set_treeuseexpandkey("true");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"37\"/><Column size=\"315\"/><Column size=\"82\"/><Column size=\"45\"/><Column size=\"47\"/><Column size=\"53\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"[지표코드] 지표명\"/><Cell col=\"2\" rowspan=\"2\" text=\"지표구분\"/><Cell col=\"3\" rowspan=\"2\" text=\"지표&#13;&#10;성격\"/><Cell col=\"4\" rowspan=\"2\" text=\"측정&#13;&#10;단위\"/><Cell col=\"5\" rowspan=\"2\" text=\"적용&#13;&#10;범위\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"tree\" style=\"font:EXPR(IX_SE!= '004' ? '' : 'bold 9 Dotum');cursor:EXPR(IX_SE!= '004' ? 'no' : 'arrow');\" text=\"bind:IX_CDNM\" wordwrap=\"none\" treestartlevel=\"2\" treelevel=\"bind:IX_SE\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:IX_SE\" combodataset=\"ds_ix_se\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:IX_CHARCT\" combodataset=\"ds_ix_charct_se\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:MESURE_UNIT\" combodataset=\"ds_mesure_unit_se\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"5\" displaytype=\"combo\" text=\"bind:APPLC_SCOPE_SE\" combodataset=\"ds_applcSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label18","absolute","686","0",null,"27","20",null,this.div_work);_a.set_taborder("6");_a.set_cssclass("sta_WFDA_B");this.div_work.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label19","absolute","686","27",null,"27","20",null,this.div_work);_a.set_taborder("7");_a.set_cssclass("sta_WFDA_B");this.div_work.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label20","absolute","686","54",null,"27","20",null,this.div_work);_a.set_taborder("11");_a.set_cssclass("sta_WFDA_B");this.div_work.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label00","absolute","686","81",null,"27","20",null,this.div_work);_a.set_taborder("17");_a.set_cssclass("sta_WFDA_B");this.div_work.addChild(_a.name,_a);_a=new Static("sta_BGN_DT00","absolute","57.03%","26",null,"27","34.82%",null,this.div_work);_a.set_taborder("8");_a.set_text("전략목표 ");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Dotum");this.div_work.addChild(_a.name,_a);_a=new Static("sta_DCLZ_SE00","absolute","57.03%","0",null,"27","34.82%",null,this.div_work);_a.set_taborder("9");_a.set_text("관점 ");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left");_a.style.set_font("bold 9 Dotum");this.div_work.addChild(_a.name,_a);_a=new Static("sta_AM_PM_SE00","absolute","57.03%","52",null,"27","34.82%",null,this.div_work);_a.set_taborder("10");_a.set_text("CSF ");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Dotum");this.div_work.addChild(_a.name,_a);_a=new Static("sta_AM_PM_SE01","absolute","57.03%","78",null,"27","34.82%",null,this.div_work);_a.set_taborder("16");_a.set_text("KPI ");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Dotum");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_asignList","absolute","57.03%","140",null,null,"0","0",this.div_work);_a.set_taborder("22");_a.set_binddataset("ds_asignList");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"222\"/><Column size=\"90\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"조직코드\"/><Cell col=\"2\" text=\"조직명\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"배정유무\" editautoselect=\"true\" tooltiptext=\"타이틀을 클릭하시면 전체가 선택배정/배정해제 됩니다.\"/><Cell col=\"4\" displaytype=\"checkbox\" text=\"0\"/></Band><Band id=\"body\"><Cell style=\"font:EXPR(ASIGN_AT!= '1' ? '' : 'bold 9 Dotum');\" text=\"expr:currow + 1\"/><Cell col=\"1\" style=\"font:EXPR(ASIGN_AT!= '1' ? '' : 'bold 9 Dotum');\" text=\"bind:ORGNZT_CODE\"/><Cell col=\"2\" style=\"font:EXPR(ASIGN_AT!= '1' ? '' : 'bold 9 Dotum');\" text=\"bind:ORGNZT_NM\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"font:EXPR(ASIGN_AT!= '1' ? '' : 'bold 9 Dotum');\" text=\"bind:ASIGN_AT\"/><Cell col=\"4\"/></Band><Band id=\"summary\"><Cell rowspan=\"2\" colspan=\"4\" style=\"align:left;\" text=\"※ 선택해제시 입력된 가중치,목표치,실적치는 삭제되오니 다시한번 확인하시기 바랍니다.\" wordwrap=\"english\"/><Cell col=\"4\"/><Cell row=\"1\" col=\"4\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Combo("cmb_vPointSe","absolute","65.47%","3",null,"21","4",null,this.div_work);this.div_work.addChild(_a.name,_a);_a.set_taborder("13");_a.set_enable("true");_a.set_readonly("true");_a.set_type("dropdown");_a.set_cssclass("cmb_WF_Readonly");_a=new Edit("Edit00","absolute","65.47%","29",null,"21","4",null,this.div_work);_a.set_taborder("18");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_work.addChild(_a.name,_a);_a=new Edit("Edit01","absolute","65.47%","55",null,"21","4",null,this.div_work);_a.set_taborder("19");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_work.addChild(_a.name,_a);_a=new Edit("Edit02","absolute","65.47%","81",null,"21","4",null,this.div_work);_a.set_taborder("20");_a.style.set_font("bold 9 Dotum");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_work.addChild(_a.name,_a);_a=new Static("Static07","absolute","595","105","194","10",null,null,this.div_work);_a.set_taborder("27");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static03","absolute","57.03%","114","138","21",null,null,this.div_work);_a.set_taborder("28");_a.set_text("지표배정 내역");_a.set_cssclass("sta_WF_Title02");this.div_work.addChild(_a.name,_a);_a=new Static("Static10","absolute","595","135",null,"5","270",null,this.div_work);_a.set_taborder("29");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("29");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_eval_year","absolute","15","5","70","21",null,null,this.div_search);_a.set_taborder("10");_a.set_text("평가년도");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_evalYear","absolute","88","5","65","21",null,null,this.div_search);_a.set_taborder("11");_a.set_value("0");_a.set_max("10000");_a.set_cssclass("spn_WF_Essential");this.div_search.addChild(_a.name,_a);_a=new Static("sta_se","absolute","168","5","70","21",null,null,this.div_search);_a.set_taborder("12");_a.set_text("구분");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_odrSe","absolute","215","5","116","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("13");_a.set_cssclass("cmb_WF_Essential");_a.set_innerdataset("@ds_odrSe");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_index("-1");_a=new Static("sta_se00","absolute","346","5","45","21",null,null,this.div_search);_a.set_taborder("14");_a.set_text("관점");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_viewPointSe","absolute","392","5","230","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("15");_a.set_cssclass("cmb_WF_Essential");_a.set_innerdataset("@ds_gubun01");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("Static05","absolute",null,"0","15",null,"941","0",this.div_search);_a.set_taborder("16");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("40");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("41");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","33",null,"10","28",null,this);_a.set_taborder("42");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","42","150","21",null,null,this);_a.set_taborder("43");_a.set_text("성과지표 목록");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","62",null,"5","28",null,this);_a.set_taborder("44");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","581","66","10","641",null,null,this);_a.set_taborder("46");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","55.52%","42","151","21",null,null,this);_a.set_taborder("47");_a.set_text("지표 기본구조");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Layout("default","",1031,669,this.div_work,function(_b){_b.set_taborder("37");_b.style.set_background("#00000000");_b.set_scrollbars("none");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1019,73,this.div_search,function(_b){_b.set_taborder("29");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("");_b.getSetter("inheritanceid").set("");_b.set_titletext("지표배정관리");});this.addLayout(_a.name,_a);_a=new BindItem("item7","Search00.D_EOPCHE_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","ENTRPS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","Search00.D_DAEPYOJA_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","REPRSNT_MAN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","Search00.D_POST_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","POST_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","Search00.D_JUSO_EDIT1","value","TBITM_MNTNC_MENDNG_ENTRPS","ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item11","Search00.D_JUSO_EDIT2","value","TBITM_MNTNC_MENDNG_ENTRPS","DETAIL_ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item12","Search00.D_TEL_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","CTTPC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item13","Search00.D_FAX_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","FAX_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","Search00.D_SAYONG_RADIO","value","TBITM_MNTNC_MENDNG_ENTRPS","USE_ENNC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item15","Search00.D_BIGO_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","RM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","Tab00.tabpage1.D_NAME_EDIT","value","TBITM_ENTRPS_EMP","ENTRPS_EMP_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","Tab00.tabpage1.D_JIKWI_EDIT","value","TBITM_ENTRPS_EMP","OFCPS");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","Tab00.tabpage1.D_DAMDANG_EDIT","value","TBITM_ENTRPS_EMP","CHRG_JOB");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","Tab00.tabpage1.D_JIWON_COMBO","value","TBITM_ENTRPS_EMP","SPORT_STLE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","Tab00.tabpage1.D_TEL_EDIT","value","TBITM_ENTRPS_EMP","CTTPC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","Tab00.tabpage1.D_EMAIL_EDIT","value","TBITM_ENTRPS_EMP","EMAIL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_DETAIL00.edt_ENTRPS_NM","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","ENTRPS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item16","div_DETAIL00.edt_REPRSNT_MAN","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","REPRSNT_MAN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item17","div_DETAIL00.mae_POST_NO","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","POST_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item18","div_DETAIL00.edt_ADRES","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item19","div_DETAIL00.edt_DETAIL_ADRES","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","DETAIL_ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item20","div_DETAIL00.edt_CTTPC","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","CTTPC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item21","div_DETAIL00.edt_FAX_NO","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","FAX_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item22","div_DETAIL00.edt_USE_ENNC","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","USE_ENNC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item23","div_DETAIL00.txt_RM","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","RM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item28","div_search.spn_evalYear","value","ds_cond","EVL_YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item29","div_search.cmb_odrSe","value","ds_cond","ODR_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item27","div_search.cmb_viewPointSe","value","ds_cond","VIEWPOINT_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item24","div_work.cmb_vPointSe","value","ds_kpiInfo","VIEWPOINT_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item25","div_work.Edit00","value","ds_kpiInfo","S_IX_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item26","div_work.Edit01","value","ds_kpiInfo","C_IX_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item30","div_work.Edit02","value","ds_kpiInfo","K_IX_NM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("ACH020301.xfdl","lib::comInclude.xjs");this.addIncludeScript("ACH020301.xfdl","mis_lib::misUtil.xjs");this.registerScript("ACH020301.xfdl",function(){this.sClosAt="";this.nRowPos=0;this.nSetInit=0;this.checkDs=[this.ds_asignList];this.ACH020301_oninit=function(_a,_b){this.fn_misFormInit(this);this.fn_init_form();this.fn_init_dataset();};this.ACH020301_onload=function(_a,_b){this.fn_loadCombo();this.fn_init_current();};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_init_current=function(){this.ds_curInfo.clearData();this.fn_transaction("selectCurEvlOdrInfo");};this.fn_loadCombo=function(){var _a=[["ds_gubun01","ACH002","Y","D"]];var _b=function(_c,_d,_e){};this.gfn_comboLoad(_a,_b);this.gfn_loadCodeCombo(this,this.div_work.cmb_vPointSe,"ds_gubun03","ACH002","","Y","","N","");this.gfn_loadCodeComboWithDs(this,"",this.ds_ix_se,"ACH001","",""," ","N","");this.gfn_loadCodeComboWithDs(this,"",this.ds_ix_charct_se,"ACH004","",""," ","N","");this.gfn_loadCodeComboWithDs(this,"",this.ds_mesure_unit_se,"ACH011","",""," ","N","");this.gfn_loadCodeComboWithDs(this,"",this.ds_applcSe,"ACH015","",""," ","N","");};this.fn_loadComboNonCodeTbl=function(_a,_b){var _c=[["ds_odrSe","ds_cond","","","hsco/mis/ach/ACHCommon/selectOdrList.do",0]];this.gfn_comboLoadNonCodeTbl(_c,this.fn_callbackAfter,_a,_b);};this.fn_callbackAfter=function(_a){switch(_a){case "ds_odrSe":if(nSetInit==1){this.fn_setCurInfo("odrSe");nSetInit=0;}this.fn_search();break;}};this.fn_search=function(){this.ds_kpiListMst.clearData();this.ds_kpiInfo.clearData();this.ds_asignList.clearData();if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}this.fn_transaction("selectListMst");};this.fn_search_dtl=function(){this.ds_kpiInfo.clearData();this.ds_asignList.clearData();this.fn_transaction("selectListDtl");};this.fn_save=function(){nRowPos=this.ds_kpiListMst.rowposition;this.fn_transaction("mainCUD");};this.fn_transaction=function(_a){switch(_a){case "selectListMst":var _b="hsco/mis/ach/ACH020301/selectListMst.do";var _c="input1=ds_cond";var _d="ds_kpiListMst=output1";break;case "selectListDtl":var _b="hsco/mis/ach/ACH020301/selectListDtl.do";var _c="input1=ds_condDtl";var _d="ds_kpiInfo=output1 ds_asignList=output2";break;case "mainCUD":var _b="hsco/mis/ach/ACH020301/mainCUD.do";var _c="input1=ds_condDtl input2=ds_asignList:U";var _d="";break;case "selectCurEvlOdrInfo":var _b="hsco/mis/ach/ACHCommon/selectCurEvlOdrInfo.do";var _c="";var _d="ds_curInfo=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "selectListMst":if(this.ds_kpiListMst.rowcount>0){this.ds_kpiListMst.set_rowposition(nRowPos);nRowPos=0;}break;case "selectListDtl":if(this.ds_kpiInfo.rowcount>0){this.ds_condDtl.setColumn(0,"VIEWPOINT_SE",this.ds_kpiInfo.getColumn(0,"VIEWPOINT_SE"));}break;case "mainCUD":this.gfn_message("success.처리.성공");this.fn_search();break;case "selectCurEvlOdrInfo":this.fn_setCurInfo("evalYear");nSetInit=1;this.fn_loadComboNonCodeTbl();break;}}};this.fn_cancel=function(){if(this.gfn_message("confirm.취소여부")){this.ds_asignList.reset();this.ds_asignList.applyChange();return;}};this.div_work_grd_list_onheadclick=function(_a,_b){this.gfn_gridSort(_a,_b);};this.ds_kpiListMst_onrowposchanged=function(_a,_b){this.ds_kpiInfo.clearData();this.ds_asignList.clearData();this.ds_condDtl.clearData();var _c=this.ds_kpiListMst.rowposition;var _d=this.ds_kpiListMst.getColumn(_c,"IX_SE");if(_d=="004"){this.ds_condDtl.addRow();this.ds_condDtl.setColumn(0,"EVL_YEAR",this.ds_kpiListMst.getColumn(_c,"EVL_YEAR"));this.ds_condDtl.setColumn(0,"ODR_SE",this.ds_kpiListMst.getColumn(_c,"ODR_SE"));this.ds_condDtl.setColumn(0,"IX_CODE",this.ds_kpiListMst.getColumn(_c,"IX_CODE"));this.fn_search_dtl();}else{return;}};this.fn_setCurInfo=function(_a){if(this.ds_curInfo.rowcount==1){if(_a=="evalYear"){var _b=this.ds_curInfo.getColumn(0,"CUR_EVL_YEAR");this.div_search.spn_evalYear.set_value(_b);}else if(_a=="odrSe"){var _c=this.ds_curInfo.getColumn(0,"CUR_ODR_SE");this.div_search.cmb_odrSe.set_value(_c);}}};this.div_search_spn_evalYear_ontextchanged=function(_a,_b){this.ds_cond.setColumn(0,"EVL_YEAR",_b.posttext);this.fn_loadComboNonCodeTbl();};this.div_search_cmb_odrSe_onitemchanged=function(_a,_b){this.ds_cond.setColumn(0,"ODR_SE",_b.postvalue);};this.div_work_grd_asignList_onheadclick=function(_a,_b){if(_b.col==3){this.ds_asignList.set_enableevent(false);for(var _c=0;_c<this.ds_asignList.getRowCount();_c++ ){if(_a.getCellProperty("head",4,"text")=='0'){this.ds_asignList.setColumn(_c,"ASIGN_AT","1");}else{this.ds_asignList.setColumn(_c,"ASIGN_AT","0");}}if(_a.getCellProperty("head",4,"text")=='0'){_a.setCellProperty("Head",4,"text","1");}else{_a.setCellProperty("Head",4,"text","0");}this.ds_asignList.set_enableevent(true);}};this.div_work_grd_asignList_oncellclick=function(_a,_b){if(_b.cell==3){_a.setCellProperty("Head",4,"text","0");}};});this.on_initEvent=function(){this.ds_viewList.addEventHandler("onrowposchanged",this.ds_viewList_onrowposchanged,this);this.ds_kpiListMst.addEventHandler("onrowposchanged",this.ds_kpiListMst_onrowposchanged,this);this.addEventHandler("oninit",this.ACH020301_oninit,this);this.addEventHandler("onload",this.ACH020301_onload,this);this.div_work.sta_WFDA_Label19.addEventHandler("onclick",this.div_detail01_sta_WFDA_Label19_onclick,this);this.div_work.grd_asignList.addEventHandler("onheadclick",this.div_work_grd_asignList_onheadclick,this);this.div_work.grd_asignList.addEventHandler("oncellclick",this.div_work_grd_asignList_oncellclick,this);this.div_search.spn_evalYear.addEventHandler("ontextchanged",this.div_search_spn_evalYear_ontextchanged,this);this.div_search.cmb_odrSe.addEventHandler("onitemchanged",this.div_search_cmb_odrSe_onitemchanged,this);};this.loadIncludeScript("ACH020301.xfdl");};})();