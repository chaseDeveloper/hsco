﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SLS130401");this.set_classname("SLS130401");this.set_titletext("낙찰정보조회");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"TRNS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PLNM_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_onbScfbRslt",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"TRNS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"STND_LNK_ORG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PLNM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PBCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RGST_DEPT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RGST_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRPT_DVSN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_AMT_UNPC_DVSN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RGST_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_onbPbctCdtnScfb",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"TRNS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"STND_LNK_ORG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PLNM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PBCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PBCT_CDTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BID_MNMT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RGST_DEPT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BID_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"TDPS_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"SCFB_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PBCT_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BID_DEED_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"BDDR1_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"SCBD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_BID_PRC\" type=\"STRING\" size=\"256\"/><Column id=\"BATC_BID_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RGST_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_onbBddrScfb",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"TRNS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"STND_LNK_ORG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PLNM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PBCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PBCT_CDTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BID_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BDDR1_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RGST_DEPT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BDDR1_DVSN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AGN_DVSN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCFB_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TDPS_EXTN_ORG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BID_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"TDPS_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"BDDR1_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RGNO\" type=\"STRING\" size=\"256\"/><Column id=\"ADRS_DVSN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"LDNM_ADRS\" type=\"STRING\" size=\"256\"/><Column id=\"NMRD_ADRS\" type=\"STRING\" size=\"256\"/><Column id=\"MBPH_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OWH_TPNO\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_TPNO\" type=\"STRING\" size=\"256\"/><Column id=\"FXNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAL\" type=\"STRING\" size=\"256\"/><Column id=\"USR_DVSN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SFGD_PS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SFGD_CHLD_RGNO\" type=\"STRING\" size=\"256\"/><Column id=\"SFGD_CHLD_TPNO\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CRNO\" type=\"STRING\" size=\"256\"/><Column id=\"BRNO\" type=\"STRING\" size=\"256\"/><Column id=\"RPSV_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RPSV_MBPH_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RPSV_TPNO\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_LDNM_ADRS\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NMRD_ADRS\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_TPNO\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_FXNO\" type=\"STRING\" size=\"256\"/><Column id=\"BSCN\" type=\"STRING\" size=\"256\"/><Column id=\"TFB\" type=\"STRING\" size=\"256\"/><Column id=\"SHR_INFO_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"BID_MNMT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BID_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"SCFB_QNTY\" type=\"STRING\" size=\"256\"/><Column id=\"RGST_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_plnmNoCombo",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_schVal",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"PLNM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PBCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PBCT_CDTN_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_combo",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CD_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_prptDvsnCd",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_totAmtUnpcDvsnCd",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_pbctStatCd",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bddr1DvsnCd",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_agnDvsnCd",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_adrsDvsnCd",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_usrDvsnCd",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.style.set_background("#f9fbffff");_a.style.set_font("bold 9 Verdana");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Combo("cmb_plnmNo","absolute","79","5","82","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("83");_a.set_innerdataset("@ds_plnmNoCombo");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_index("0");_a=new Static("Static05","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("86");_a.set_text("공고번호");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("2");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("Div00","absolute","0","33",null,null,"28","0",this);_a.set_taborder("3");this.addChild(_a.name,_a);_a=new Static("Static14","absolute","288","468","742","0",null,null,this.Div00);_a.set_taborder("76");_a.set_cssclass("sta_WF_Labelbg");this.Div00.addChild(_a.name,_a);_a=new Static("Static13","absolute","288","442","742","0",null,null,this.Div00);_a.set_taborder("75");_a.set_cssclass("sta_WF_Labelbg");this.Div00.addChild(_a.name,_a);_a=new Grid("grd_onbScfbRslt","absolute","0","36",null,"130","1",null,this.Div00);_a.set_taborder("45");_a.set_binddataset("ds_onbScfbRslt");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"189\"/><Column size=\"243\"/><Column size=\"293\"/><Column size=\"301\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"공매번호\"/><Cell col=\"1\" text=\"등록부점\"/><Cell col=\"2\" text=\"재산구분\"/><Cell col=\"3\" text=\"총액단가구분\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"bind:PBCT_NO\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" style=\"align:left;\" text=\"bind:RGST_DEPT_NM\" combodisplay=\"edit\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"none\" style=\"align:left;\" text=\"bind:PRPT_DVSN_CD\" combodataset=\"ds_prptDvsnCd\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:TOT_AMT_UNPC_DVSN_CD\" combodataset=\"ds_totAmtUnpcDvsnCd\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/></Band></Format></Formats>");this.Div00.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","0","1029","10",null,null,this.Div00);_a.set_taborder("46");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.Div00.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","10","148","21",null,null,this.Div00);_a.set_taborder("47");_a.set_text("낙찰결과");_a.set_cssclass("sta_WF_Title02");this.Div00.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","31",null,"5","2",null,this.Div00);_a.set_taborder("48");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.Div00.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","166",null,"5","0",null,this.Div00);_a.set_taborder("53");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.Div00.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","181","148","21",null,null,this.Div00);_a.set_taborder("54");_a.set_text("조건별 낙찰결과");_a.set_cssclass("sta_WF_Title02");this.Div00.addChild(_a.name,_a);_a=new Static("Static06","absolute","0","203",null,"5","2",null,this.Div00);_a.set_taborder("55");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.Div00.addChild(_a.name,_a);_a=new Grid("grd_onbPbctCdtnScfb","absolute","0","208",null,"130","1",null,this.Div00);_a.set_taborder("56");_a.set_binddataset("ds_onbPbctCdtnScfb");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"100\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"90\"/><Column size=\"76\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"95\"/><Column size=\"77\"/></Columns><Rows><Row size=\"17\" band=\"head\"/><Row size=\"17\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\"><Cell text=\"공매\"/><Cell row=\"1\" text=\"조건번호\"/></Cell><Cell col=\"1\" rowspan=\"2\"><Cell text=\"입찰\" expandshow=\"hide\"/><Cell row=\"1\" text=\"관리번호\"/></Cell><Cell col=\"2\" rowspan=\"2\" text=\"입찰금액\"/><Cell col=\"3\" rowspan=\"2\" text=\"보증금액\"/><Cell col=\"4\" rowspan=\"2\" text=\"낙찰일자\"/><Cell col=\"5\" rowspan=\"2\" text=\"공매상태\"/><Cell col=\"6\" rowspan=\"2\"><Cell text=\"입찰\"/><Cell row=\"1\" text=\"증서수\"/></Cell><Cell col=\"7\" rowspan=\"2\"><Cell text=\"입찰자\"/><Cell row=\"1\" text=\"수\"/></Cell><Cell col=\"8\" rowspan=\"2\"><Cell text=\"낙찰자\"/><Cell row=\"1\" text=\"수\"/></Cell><Cell col=\"9\" rowspan=\"2\" text=\"최저입찰가\"/><Cell col=\"10\" rowspan=\"2\"><Cell text=\"일괄입찰\"/><Cell row=\"1\" text=\"여부\"/></Cell></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" style=\"align: ;\" text=\"bind:PBCT_CDTN_NO\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:BID_MNMT_NO\" expandshow=\"hide\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BID_AMT\" combodisplay=\"edit\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:TDPS_AMT\"/><Cell col=\"4\" displaytype=\"date\" style=\"align:center;\" text=\"bind:SCFB_DTM\"/><Cell col=\"5\" displaytype=\"combo\" text=\"bind:PBCT_STAT_CD\" combodataset=\"ds_pbctStatCd\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BID_DEED_CNT\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BDDR1_CNT\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SCBD_CNT\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MIN_BID_PRC\" combodataset=\"ds_sancSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"10\" text=\"bind:BATC_BID_YN\"/></Band></Format></Formats>");this.Div00.addChild(_a.name,_a);_a=new Static("Static07","absolute","0","338",null,"5","0",null,this.Div00);_a.set_taborder("58");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.Div00.addChild(_a.name,_a);_a=new Div("div_info","absolute","286","369","744","312",null,null,this.Div00);_a.set_taborder("117");_a.style.set_border("1 solid #808080ff");this.Div00.addChild(_a.name,_a);_a=new Static("Static09","absolute","-1","283","743","27",null,null,this.Div00.div_info);_a.set_taborder("490");_a.set_cssclass("sta_WF_Labelbg");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("Static08","absolute","-1","257","743","27",null,null,this.Div00.div_info);_a.set_taborder("489");_a.set_cssclass("sta_WF_Labelbg");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("Static07","absolute","-1","231","743","27",null,null,this.Div00.div_info);_a.set_taborder("488");_a.set_cssclass("sta_WF_Labelbg");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("Static06","absolute","-1","205","743","27",null,null,this.Div00.div_info);_a.set_taborder("487");_a.set_cssclass("sta_WF_Labelbg");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("Static05","absolute","-1","179","743","27",null,null,this.Div00.div_info);_a.set_taborder("486");_a.set_cssclass("sta_WF_Labelbg");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("Static04","absolute","-1","153","743","27",null,null,this.Div00.div_info);_a.set_taborder("485");_a.set_cssclass("sta_WF_Labelbg");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("Static03","absolute","-1","103","743","27",null,null,this.Div00.div_info);_a.set_taborder("462");_a.set_cssclass("sta_WF_Labelbg");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("Static02","absolute","-1","77","743","27",null,null,this.Div00.div_info);_a.set_taborder("461");_a.set_cssclass("sta_WF_Labelbg");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("Static01","absolute","-1","51","743","27",null,null,this.Div00.div_info);_a.set_taborder("460");_a.set_cssclass("sta_WF_Labelbg");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("Static00","absolute","-1","25","743","27",null,null,this.Div00.div_info);_a.set_taborder("459");_a.set_cssclass("sta_WF_Labelbg");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("Static17","absolute","-1","-1","743","27",null,null,this.Div00.div_info);_a.set_taborder("458");_a.set_cssclass("sta_WF_Labelbg");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("Static18","absolute",null,"1","2",null,"331","-1",this.Div00.div_info);_a.set_taborder("446");_a.set_text("2");_a.set_visible("false");_a.style.set_background("#00ffff66");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("Static20","absolute",null,"24","120","2","213",null,this.Div00.div_info);_a.set_taborder("447");_a.set_text("2");_a.set_visible("false");_a.style.set_background("#00ffff66");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("Static21","absolute",null,"-2","2",null,"213","2",this.Div00.div_info);_a.set_taborder("448");_a.set_text("2");_a.set_visible("false");_a.style.set_background("#00ffff66");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("sta_NM07","absolute","-1","0","110","27",null,null,this.Div00.div_info);_a.set_taborder("449");_a.set_text("입찰관리번호");_a.set_cssclass("sta_WF_Label");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("sta_NM00","absolute","-1","26","110","27",null,null,this.Div00.div_info);_a.set_taborder("450");_a.set_text("사용자구분");_a.set_cssclass("sta_WF_Label");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("sta_NM01","absolute","-1","51","110","27",null,null,this.Div00.div_info);_a.set_taborder("451");_a.set_text("낙찰여부");_a.set_cssclass("sta_WF_Label");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("sta_tdpsExtnOrgYn","absolute","-1","77","110","27",null,null,this.Div00.div_info);_a.set_taborder("452");_a.set_text("보증금면제기관");_a.set_cssclass("sta_WF_Label");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("sta_NM03","absolute","-1","103","110","27",null,null,this.Div00.div_info);_a.set_taborder("453");_a.set_text("입찰금액");_a.set_cssclass("sta_WF_Label");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("sta_NM04","absolute","246","0","110","27",null,null,this.Div00.div_info);_a.set_taborder("454");_a.set_text("입찰일시");_a.set_cssclass("sta_WF_Label");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("sta_NM13","absolute","246","25","110","27",null,null,this.Div00.div_info);_a.set_taborder("455");_a.set_text("대리인구분");_a.set_cssclass("sta_WF_Label");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("sta_NM12","absolute","485","-1","110","27",null,null,this.Div00.div_info);_a.set_taborder("456");_a.set_text("입찰자구분");_a.set_cssclass("sta_WF_Label");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("sta_NM15","absolute","485","25","110","27",null,null,this.Div00.div_info);_a.set_taborder("457");_a.set_text("전자보증번호");_a.set_cssclass("sta_WF_Label");this.Div00.div_info.addChild(_a.name,_a);_a=new Edit("edt_mnmtNo","absolute","111","2","133","22",null,null,this.Div00.div_info);_a.set_taborder("463");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.Div00.div_info.addChild(_a.name,_a);_a=new Combo("cmb_usrDvsnCd","absolute","111","28","133","21",null,null,this.Div00.div_info);this.Div00.div_info.addChild(_a.name,_a);_a.set_taborder("464");_a.set_cssclass("cmb_WF_Readonly");_a.set_innerdataset("@ds_usrDvsnCd");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Edit("edt_bidDtm","absolute","358","3","125","21",null,null,this.Div00.div_info);_a.set_taborder("465");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.Div00.div_info.addChild(_a.name,_a);_a=new Combo("cmb_agnDvsnCd","absolute","358","28","125","21",null,null,this.Div00.div_info);this.Div00.div_info.addChild(_a.name,_a);_a.set_taborder("466");_a.set_cssclass("cmb_WF_Readonly");_a.set_innerdataset("@ds_agnDvsnCd");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Combo("cmb_bddr1DvsnCd","absolute","597","2","142","21",null,null,this.Div00.div_info);this.Div00.div_info.addChild(_a.name,_a);_a.set_taborder("467");_a.set_cssclass("cmb_WF_Readonly");_a.set_innerdataset("@ds_bddr1DvsnCd");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Edit("edt_telNO00","absolute","597","28","142","21",null,null,this.Div00.div_info);_a.set_taborder("468");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("sta_NM14","absolute","355","51","110","27",null,null,this.Div00.div_info);_a.set_taborder("469");_a.set_text("낙찰수량");_a.set_cssclass("sta_WF_Label");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("sta_NM16","absolute","355","77","110","27",null,null,this.Div00.div_info);_a.set_taborder("470");_a.set_text("지분정보내용");_a.set_cssclass("sta_WF_Label");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("sta_NM17","absolute","355","103","110","27",null,null,this.Div00.div_info);_a.set_taborder("471");_a.set_text("보증금액");_a.set_cssclass("sta_WF_Label");this.Div00.div_info.addChild(_a.name,_a);_a=new MaskEdit("edt_scfbQnty","absolute","467","54","272","21",null,null,this.Div00.div_info);_a.set_taborder("472");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");_a.style.set_align("right middle");_a.set_mask("###,###,###,###,###");this.Div00.div_info.addChild(_a.name,_a);_a=new Edit("edt_shrInfoCntn","absolute","467","80","272","21",null,null,this.Div00.div_info);_a.set_taborder("473");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.Div00.div_info.addChild(_a.name,_a);_a=new MaskEdit("edt_tdpsAmt","absolute","467","106","272","21",null,null,this.Div00.div_info);_a.set_taborder("474");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");_a.style.set_align("right middle");_a.set_mask("###,###,###,###,###");this.Div00.div_info.addChild(_a.name,_a);_a=new CheckBox("chk_scfbYn","absolute","112","54","19","21",null,null,this.Div00.div_info);_a.set_taborder("475");_a.set_text("노출");_a.set_value("N");_a.set_truevalue("Y");_a.set_falsevalue("N");this.Div00.div_info.addChild(_a.name,_a);_a=new CheckBox("chk_viewYn00","absolute","112","81","19","21",null,null,this.Div00.div_info);_a.set_taborder("476");_a.set_text("노출");_a.set_value("N");_a.set_truevalue("Y");_a.set_falsevalue("N");this.Div00.div_info.addChild(_a.name,_a);_a=new MaskEdit("edt_bidAmt","absolute","111","106","242","21",null,null,this.Div00.div_info);_a.set_taborder("477");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");_a.style.set_align("right middle");_a.set_mask("###,###,###,###,###");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("Static10","absolute","2","132","148","21",null,null,this.Div00.div_info);_a.set_taborder("478");_a.set_text("입찰자정보");_a.set_cssclass("sta_WF_Title02");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("sta_NM05","absolute","-1","153","110","27",null,null,this.Div00.div_info);_a.set_taborder("479");_a.set_text("입찰자명");_a.set_cssclass("sta_WF_Label");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("sta_NM06","absolute","-1","179","110","27",null,null,this.Div00.div_info);_a.set_taborder("480");_a.set_text("주소구분");_a.set_cssclass("sta_WF_Label");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("sta_NM08","absolute","-1","205","110","27",null,null,this.Div00.div_info);_a.set_taborder("481");_a.set_text("지번주소");_a.set_cssclass("sta_WF_Label");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("sta_NM09","absolute","-1","231","110","27",null,null,this.Div00.div_info);_a.set_taborder("482");_a.set_text("도로명주소");_a.set_cssclass("sta_WF_Label");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("sta_NM10","absolute","-1","257","110","27",null,null,this.Div00.div_info);_a.set_taborder("483");_a.set_text("휴대전화번호");_a.set_cssclass("sta_WF_Label");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("sta_NM11","absolute","-1","283","110","27",null,null,this.Div00.div_info);_a.set_taborder("484");_a.set_text("회사전화번호");_a.set_cssclass("sta_WF_Label");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("sta_rgno","absolute","355","153","110","27",null,null,this.Div00.div_info);_a.set_taborder("491");_a.set_text("주민등록번호");_a.set_cssclass("sta_WF_Label");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("sta_NM19","absolute","355","179","110","27",null,null,this.Div00.div_info);_a.set_taborder("492");_a.set_text("우편번호");_a.set_cssclass("sta_WF_Label");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("sta_NM20","absolute","355","257","110","27",null,null,this.Div00.div_info);_a.set_taborder("493");_a.set_text("자택전화번호");_a.set_cssclass("sta_WF_Label");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("sta_NM21","absolute","355","283","110","27",null,null,this.Div00.div_info);_a.set_taborder("494");_a.set_text("팩스번호");_a.set_cssclass("sta_WF_Label");this.Div00.div_info.addChild(_a.name,_a);_a=new Edit("edt_bddr1Nm","absolute","111","156","242","21",null,null,this.Div00.div_info);_a.set_taborder("495");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.Div00.div_info.addChild(_a.name,_a);_a=new MaskEdit("edt_telNO07","absolute","467","156","272","21",null,null,this.Div00.div_info);_a.set_taborder("496");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");_a.set_mask("######-#{#####}");_a.style.set_align("left middle");_a.set_type("string");this.Div00.div_info.addChild(_a.name,_a);_a=new Radio("rad_adrsDvsnCd","absolute","112","183","110","19",null,null,this.Div00.div_info);this.Div00.div_info.addChild(_a.name,_a);_a.set_taborder("497");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_direction("vertical");_a.set_cssclass("rad_WF_Readonly");_a.set_innerdataset("@ds_adrsDvsnCd");_a=new Edit("edt_zip","absolute","467","182","116","21",null,null,this.Div00.div_info);_a.set_taborder("498");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.Div00.div_info.addChild(_a.name,_a);_a=new Edit("edt_ldnmAdrs","absolute","111","208","628","21",null,null,this.Div00.div_info);_a.set_taborder("499");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.Div00.div_info.addChild(_a.name,_a);_a=new Edit("edt_nmrdAdrs","absolute","111","234","628","21",null,null,this.Div00.div_info);_a.set_taborder("500");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.Div00.div_info.addChild(_a.name,_a);_a=new Edit("edt_mbphNo","absolute","111","260","242","21",null,null,this.Div00.div_info);_a.set_taborder("501");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.Div00.div_info.addChild(_a.name,_a);_a=new Edit("edt_compTpno","absolute","111","286","242","21",null,null,this.Div00.div_info);_a.set_taborder("502");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.Div00.div_info.addChild(_a.name,_a);_a=new Edit("edt_owhTpno","absolute","467","259","272","21",null,null,this.Div00.div_info);_a.set_taborder("503");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.Div00.div_info.addChild(_a.name,_a);_a=new Edit("edt_fxNo","absolute","467","286","272","21",null,null,this.Div00.div_info);_a.set_taborder("504");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.Div00.div_info.addChild(_a.name,_a);_a=new Grid("grd_onbBddrScfb","absolute","-1","369","285",null,null,"3",this.Div00);_a.set_taborder("118");_a.set_binddataset("ds_onbBddrScfb");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"95\"/><Column size=\"74\"/><Column size=\"114\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"22\"/></Rows><Band id=\"head\"><Cell text=\"입찰번호\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"입찰자\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"bind:BID_NO\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:BDDR1_SEQ\" expandshow=\"hide\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" style=\"align:center;\" text=\"bind:BDDR1_NM\" combodisplay=\"edit\"/></Band></Format></Formats>");this.Div00.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","350","148","13",null,null,this.Div00);_a.set_taborder("119");_a.set_text("입찰자별 낙찰정보");_a.set_cssclass("sta_WF_Title02");this.Div00.addChild(_a.name,_a);_a=new Static("Static02","absolute","288","350","148","13",null,null,this.Div00);_a.set_taborder("120");_a.set_text("입찰정보");_a.set_cssclass("sta_WF_Title02");this.Div00.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.style.set_background("#f9fbffff");_b.style.set_font("bold 9 Verdana");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",753,653,this.Div00.div_info,function(_b){_b.set_taborder("117");_b.style.set_border("1 solid #808080ff");});this.Div00.div_info.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.Div00,function(_b){_b.set_taborder("3");});this.Div00.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("SLS130401");_b.set_titletext("낙찰정보조회");});this.addLayout(_a.name,_a);_a=new BindItem("item21","Div00.div_info.edt_mnmtNo","value","ds_onbBddrScfb","BID_MNMT_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item22","Div00.div_info.cmb_usrDvsnCd","value","ds_onbBddrScfb","USR_DVSN_CD");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item23","Div00.div_info.edt_bidDtm","value","ds_onbBddrScfb","BID_DTM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item24","Div00.div_info.cmb_agnDvsnCd","value","ds_onbBddrScfb","AGN_DVSN_CD");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item25","Div00.div_info.cmb_bddr1DvsnCd","value","ds_onbBddrScfb","BDDR1_DVSN_CD");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item26","Div00.div_info.edt_telNO00","value","DS_USER","TELNO_1");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item27","Div00.div_info.edt_scfbQnty","value","ds_onbBddrScfb","SCFB_QNTY");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item28","Div00.div_info.edt_shrInfoCntn","value","ds_onbBddrScfb","SHR_INFO_CNTN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item29","Div00.div_info.edt_tdpsAmt","value","ds_onbBddrScfb","TDPS_AMT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item30","Div00.div_info.chk_scfbYn","value","ds_onbBddrScfb","SCFB_YN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item31","Div00.div_info.chk_viewYn00","value","ds_onbBddrScfb","TDPS_EXTN_ORG_YN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item32","Div00.div_info.edt_bidAmt","value","ds_onbBddrScfb","BID_AMT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item33","Div00.div_info.edt_bddr1Nm","value","ds_onbBddrScfb","BDDR1_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item34","Div00.div_info.edt_telNO07","value","ds_onbBddrScfb","RGNO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item35","Div00.div_info.edt_zip","value","ds_onbBddrScfb","ZIP");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item36","Div00.div_info.edt_ldnmAdrs","value","ds_onbBddrScfb","LDNM_ADRS");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item37","Div00.div_info.edt_nmrdAdrs","value","ds_onbBddrScfb","NMRD_ADRS");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item38","Div00.div_info.edt_mbphNo","value","ds_onbBddrScfb","MBPH_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item39","Div00.div_info.edt_compTpno","value","ds_onbBddrScfb","COMP_TPNO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item40","Div00.div_info.edt_owhTpno","value","ds_onbBddrScfb","OWH_TPNO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item41","Div00.div_info.edt_fxNo","value","ds_onbBddrScfb","FXNO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","Div00.div_info.rad_adrsDvsnCd","value","ds_onbBddrScfb","ADRS_DVSN_CD");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("SLS130401.xfdl","pms_lib::rntUtilInclude.xjs");this.registerScript("SLS130401.xfdl",function(){var _a="114637";this.SLS130401_oninit=function(_b,_c){this.fn_init();};this.SLS130401_onload=function(_b,_c){this.fn_plnmNoCombo();this.fn_getCombo(["OP0013"],["ds_prptDvsnCd"]);this.fn_getCombo(["OP0050"],["ds_totAmtUnpcDvsnCd"]);this.fn_getCombo(["OP0005"],["ds_pbctStatCd"]);this.fn_getCombo(["OP0011"],["ds_bddr1DvsnCd"]);this.fn_getCombo(["OP0017"],["ds_agnDvsnCd"]);this.fn_getCombo(["OP0052"],["ds_adrsDvsnCd"]);this.fn_getCombo(["OP0016"],["ds_usrDvsnCd"]);};this.fn_getCombo=function(_b,_c){var _d="getComboList";var _e="/hsco/pms/sls/lad/onb/SLS130101/selectComboList.do";var _f="input1=ds_combo";var _g="";for(var _h=0;_h<_b.length;_h++ ){_g=_c[_h]+"=output1";this.ds_combo.setColumn(0,"CD_NO",_b[_h]);_d=_d+"_"+_b[_h];Ex.core.tran(this,_d,_e,_f,_g,"",null,null,false);}};this.fn_search=function(){var _b=this.div_search.cmb_plnmNo.value;if(_b==undefined){return;}this.ds_onbScfbRslt.clearData();this.ds_cond00.setColumn(0,"PLNM_NO",_b);this.fn_transaction("selectOnbScfbRsltList");};this.fn_plnmNoCombo=function(){this.ds_plnmNoCombo.clearData();this.ds_cond00.clearData();this.ds_cond00.addRow();this.fn_transaction("selectPlnmNoCombo");};this.fn_transaction=function(_b){var _c=true;switch(_b){case "selectPlnmNoCombo":var _d="/hsco/pms/sls/lad/onb/SLS130401/selectPlnmNoCombo.do";var _e="input1=ds_cond00";var _f="ds_plnmNoCombo=output1";break;case "selectOnbScfbRsltList":var _d="/hsco/pms/sls/lad/onb/SLS130401/selectOnbScfbRsltList.do";var _e="input1=ds_cond00";var _f="ds_onbScfbRslt=output1";break;case "selectOnbPbctCdtnScfbList":var _d="/hsco/pms/sls/lad/onb/SLS130401/selectOnbPbctCdtnScfbList.do";var _e="input1=ds_schVal";var _f="ds_onbPbctCdtnScfb=output1";break;case "selectOnbBddrScfbList":var _d="/hsco/pms/sls/lad/onb/SLS130401/selectOnbBddrScfbList.do";var _e="input1=ds_schVal";var _f="ds_onbBddrScfb=output1";break;}if(this.fn_validate_tranasaction(_b,_d,_e,_f)==false){return;}Ex.core.tran(this,_b,_d,_e,_f,"",null,null,_c);};this.ds_onbScfbRslt_onrowposchanged=function(_b,_c){var _d=_b.getColumn(_c.newrow,"PLNM_NO");var _e=_b.getColumn(_c.newrow,"PBCT_NO");this.ds_schVal.setColumn(0,"PLNM_NO",_d);this.ds_schVal.setColumn(0,"PBCT_NO",_e);this.ds_onbPbctCdtnScfb.clearData();this.fn_transaction("selectOnbPbctCdtnScfbList");};this.ds_onbPbctCdtnScfb_onrowposchanged=function(_b,_c){var _d=_b.getColumn(_c.newrow,"PLNM_NO");var _e=_b.getColumn(_c.newrow,"PBCT_NO");var _f=_b.getColumn(_c.newrow,"PBCT_CDTN_NO");this.ds_schVal.setColumn(0,"PLNM_NO",_d);this.ds_schVal.setColumn(0,"PBCT_NO",_e);this.ds_schVal.setColumn(0,"PBCT_CDTN_NO",_f);this.ds_onbBddrScfb.clearData();this.fn_transaction("selectOnbBddrScfbList");};});this.on_initEvent=function(){this.ds_onbScfbRslt.addEventHandler("onrowposchanged",this.ds_onbScfbRslt_onrowposchanged,this);this.ds_onbPbctCdtnScfb.addEventHandler("onrowposchanged",this.ds_onbPbctCdtnScfb_onrowposchanged,this);this.addEventHandler("oninit",this.SLS130401_oninit,this);this.addEventHandler("onload",this.SLS130401_onload,this);this.Div00.grd_onbScfbRslt.addEventHandler("oncellclick",this.Div00_grd_frmEndwAcnut_oncellclick,this);this.Div00.Static04.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.Div00.Static03.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.Div00.Static06.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.Div00.grd_onbPbctCdtnScfb.addEventHandler("oncellclick",this.Div00_grd_frmEndwAcnut_oncellclick,this);this.Div00.Static07.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.Div00.grd_onbBddrScfb.addEventHandler("oncellclick",this.Div00_grd_frmEndwAcnut_oncellclick,this);};this.loadIncludeScript("SLS130401.xfdl");};})();