﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SLS110112");this.set_classname("SLS110101");this.set_titletext("토지공급기초내역");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_remndrLadSeCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_suplyCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_prposSeCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cntrctSttusCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ladSeCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ladCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"LAD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_LAD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACQS_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"OPERTN_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"OPERTN_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_CONFM_NTFC_DE_1\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_CONFM_NTFC_DE_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"LAD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BLCK_FM\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_FM\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_TY_FM\" type=\"STRING\" size=\"256\"/><Column id=\"BLCK_TO\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_TY_TO\" type=\"STRING\" size=\"256\"/><Column id=\"BLT_FM\" type=\"STRING\" size=\"256\"/><Column id=\"BLT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_STTUS\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PRPOS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SUPLY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REMNDR_LAD_SE\" type=\"STRING\" size=\"256\"/><Column id=\"OWNSHIP_BEFORE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_DE\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_TMLMT_FM\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_TMLMT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"INQIRE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_STDR_DE_FM\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_STDR_DE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_STTUS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_DE_FM\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_DE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_STTUS_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ladUnclamtSttusList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a.set_keystring("G:BLCK_SUM");_a._setContents("<ColumnInfo><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BLCK\" type=\"STRING\" size=\"256\"/><Column id=\"LOT\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_TY\" type=\"STRING\" size=\"256\"/><Column id=\"BLCK_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"PRPOS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PRPOS_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_BASS_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_DETAIL_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_ZIP_LNM\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_BASS_ADRES_LNM\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_DETAIL_ADRES_LNM\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_ADRES_LNM\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"DCSN_AR\" type=\"FLOAT\" size=\"256\"/><Column id=\"DCSN_UNTPC\" type=\"BIGDECIMAL\" size=\"256\" sumtext=\"-\"/><Column id=\"DCSN_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\" sumtext=\"-\"/><Column id=\"CSTMR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"MBTLNO\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES_DETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES_ALL\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_CODE_NM\" type=\"STRING\" size=\"256\" sumtext=\"소계\"/><Column id=\"PAYAMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PAY_TMLMT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_inqireSeCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">cal_payTmlmtFm</Col><Col id=\"notNull\">Y</Col><Col id=\"from\"/><Col id=\"to\">cal_payTmlmtTo</Col><Col id=\"msgId\">수납일자</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_ladRcivAmtList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a.set_keystring("G:LAD_NM");_a._setContents("<ColumnInfo><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_NM\" type=\"STRING\" size=\"256\" sumtext=\"소계\"/><Column id=\"BLCK\" type=\"STRING\" size=\"256\"/><Column id=\"LOT\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_TY\" type=\"STRING\" size=\"256\"/><Column id=\"BLCK_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"PRPOS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PRPOS_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_BASS_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_DETAIL_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_ZIP_LNM\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_BASS_ADRES_LNM\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_DETAIL_ADRES_LNM\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_ADRES_LNM\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"DCSN_AR\" type=\"FLOAT\" size=\"256\"/><Column id=\"DCSN_UNTPC\" type=\"BIGDECIMAL\" size=\"256\" sumtext=\"-\"/><Column id=\"DCSN_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\" sumtext=\"-\"/><Column id=\"CSTMR_NM\" type=\"STRING\" size=\"256\" prop=\"COUNT\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"MBTLNO\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES_DETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES_ALL\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_CODE_NM\" type=\"STRING\" size=\"256\" sumtext=\"소계\"/><Column id=\"PAYAMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PAY_TMLMT\" type=\"STRING\" size=\"256\"/><Column id=\"CANCL_DE\" type=\"STRING\" size=\"256\"/><Column id=\"BLCK_LOT\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TPAY_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PAY_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ISSU_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("sta_grdTitle","absolute","4","55","169","19",null,null,this);_a.set_taborder("1");_a.set_text("토지잔금수납내역");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Grid("grd_ladUnclamtSttus","absolute","-4","74",null,null,"11","-1",this);_a.set_taborder("2");_a.set_binddataset("ds_ladRcivAmtList");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"204\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"81\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"101\"/><Column size=\"130\"/><Column size=\"127\"/><Column size=\"90\"/><Column size=\"135\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"6\" text=\"토지정보\"/><Cell col=\"6\" colspan=\"4\" text=\"계약정보\"/><Cell col=\"10\"/><Cell col=\"11\" colspan=\"4\" text=\"수납정보\"/><Cell col=\"15\"/><Cell row=\"1\" text=\"토지명\"/><Cell row=\"1\" col=\"1\" text=\"블럭\"/><Cell row=\"1\" col=\"2\" text=\"롯트\"/><Cell row=\"1\" col=\"3\" text=\"구분\"/><Cell row=\"1\" col=\"4\" text=\"블럭 롯트\"/><Cell row=\"1\" col=\"5\" text=\"확정면적\"/><Cell row=\"1\" col=\"6\" text=\"성명\"/><Cell row=\"1\" col=\"7\" text=\"주민번호\"/><Cell row=\"1\" col=\"8\" text=\"전화번호\"/><Cell row=\"1\" col=\"9\" text=\"휴대전화\"/><Cell row=\"1\" col=\"10\" text=\"금액\"/><Cell row=\"1\" col=\"11\" text=\"납부기한일\"/><Cell row=\"1\" col=\"12\" text=\"납부금액\"/><Cell row=\"1\" col=\"13\" text=\"수납금액\"/><Cell row=\"1\" col=\"14\" text=\"수납일자\"/><Cell row=\"1\" col=\"15\" text=\"분양확인서_발급일자\"/></Band><Band id=\"body\"><Cell style=\"align:center;background:EXPR(dataset.getRowLevel(currow)==1?'#F6F7FF':'');background2:EXPR(dataset.getRowLevel(currow)==1?'#F6F7FF':'');\" text=\"bind:LAD_NM\" suppress=\"1\" suppressalign=\"middle,over\"/><Cell col=\"1\" style=\"background:EXPR(dataset.getRowLevel(currow)==1?'#F6F7FF':'');background2:EXPR(dataset.getRowLevel(currow)==1?'#F6F7FF':'');\" text=\"bind:BLCK\" suppress=\"3\" suppressalign=\"middle,over\"/><Cell col=\"2\" style=\"background:EXPR(dataset.getRowLevel(currow)==1?'#F6F7FF':'');background2:EXPR(dataset.getRowLevel(currow)==1?'#F6F7FF':'');\" text=\"bind:LOT\" suppress=\"4\" suppressalign=\"middle,over\"/><Cell col=\"3\" style=\"background:EXPR(dataset.getRowLevel(currow)==1?'#F6F7FF':'');background2:EXPR(dataset.getRowLevel(currow)==1?'#F6F7FF':'');\" text=\"bind:LOT_TY\" suppress=\"5\" suppressalign=\"middle,over\"/><Cell col=\"4\" style=\"background:EXPR(dataset.getRowLevel(currow)==1?'#F6F7FF':'');background2:EXPR(dataset.getRowLevel(currow)==1?'#F6F7FF':'');\" text=\"bind:BLCK_LOT\" suppress=\"5\" suppressalign=\"middle,over\"/><Cell col=\"5\" displaytype=\"expr:dataset.getRowLevel(currow)==1?&quot;&quot;:&quot;number&quot;\" style=\"align:right;background:EXPR(dataset.getRowLevel(currow)==1?'#F6F7FF':'');background2:EXPR(dataset.getRowLevel(currow)==1?'#F6F7FF':'');\" text=\"expr:dataset.getRowLevel(currow)==1?&quot;&quot;:dataset.getColumn(currow,&quot;DCSN_AR&quot;)\" mask=\"expr:dataset.getRowLevel(currow)==1?&quot;&quot;:&quot;#,##0.00&quot;\" suppress=\"7\" suppressalign=\"middle,over\"/><Cell col=\"6\" style=\"align:left;background:EXPR(dataset.getRowLevel(currow)==1?'#F6F7FF':'');background2:EXPR(dataset.getRowLevel(currow)==1?'#F6F7FF':'');\" text=\"bind:CSTMR_NM\" suppress=\"9\" suppressalign=\"middle,over\"/><Cell col=\"7\" style=\"background:EXPR(dataset.getRowLevel(currow)==1?'#F6F7FF':'');background2:EXPR(dataset.getRowLevel(currow)==1?'#F6F7FF':'');\" text=\"bind:IHIDNUM\" mask=\"expr:dataset.getRowLevel(currow)==1 ? &quot;&quot; : &quot;######-*******&quot;\" maskchar=\"*\" suppress=\"10\" suppressalign=\"middle,over\" tooltiptext=\"expr:IHIDNUM.substr(0,6)+ '-' + IHIDNUM.substr(6)\"/><Cell col=\"8\" style=\"align:left;background:EXPR(dataset.getRowLevel(currow)==1?'#F6F7FF':'');background2:EXPR(dataset.getRowLevel(currow)==1?'#F6F7FF':'');\" text=\"bind:TELNO\" expr=\"comp.parent.pmsUtil.formatPhone(dataset.getColumn(currow,'TELNO'))\" suppress=\"9\" suppressalign=\"middle,over\"/><Cell col=\"9\" style=\"align:left;background:EXPR(dataset.getRowLevel(currow)==1?'#F6F7FF':'');background2:EXPR(dataset.getRowLevel(currow)==1?'#F6F7FF':'');\" text=\"bind:MBTLNO\" expr=\"comp.parent.pmsUtil.formatPhone(dataset.getColumn(currow,'MBTLNO'))\" suppress=\"9\" suppressalign=\"middle,over\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;background:EXPR(dataset.getRowLevel(currow)==1?'#F6F7FF':'');background2:EXPR(dataset.getRowLevel(currow)==1?'#F6F7FF':'');\" text=\"bind:TPAY_AMT\" mask=\"#,##0\"/><Cell col=\"11\" style=\"background:EXPR(dataset.getRowLevel(currow)==1?'#F6F7FF':'');background2:EXPR(dataset.getRowLevel(currow)==1?'#F6F7FF':'');\" text=\"bind:PAY_TMLMT\" expr=\"comp.parent.pmsUtil.formatDate(dataset.getColumn(currow,'PAY_TMLMT'))\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;background:EXPR(dataset.getRowLevel(currow)==1?'#F6F7FF':'');background2:EXPR(dataset.getRowLevel(currow)==1?'#F6F7FF':'');\" text=\"bind:RCIV_AMT\" mask=\"#,##0\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;background:EXPR(dataset.getRowLevel(currow)==1?'#F6F7FF':'');background2:EXPR(dataset.getRowLevel(currow)==1?'#F6F7FF':'');\" text=\"bind:PAY_AMT\" mask=\"#,##0\"/><Cell col=\"14\" style=\"background:EXPR(dataset.getRowLevel(currow)==1?'#F6F7FF':'');background2:EXPR(dataset.getRowLevel(currow)==1?'#F6F7FF':'');\" text=\"bind:RCIV_DE\" expr=\"comp.parent.pmsUtil.formatDate(dataset.getColumn(currow,'RCIV_DE'))\"/><Cell col=\"15\" displaytype=\"date\" text=\"bind:ISSU_DT\" calendardisplaynulltype=\"none\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"10\" displaytype=\"number\" expr=\"expr:dataset.getSum('TPAY_AMT')\" mask=\"#,##0\"/><Cell col=\"11\"/><Cell col=\"12\" displaytype=\"number\" expr=\"expr:dataset.getSum('RCIV_AMT')\" mask=\"#,##0\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('PAY_AMT')\" mask=\"#,##0\"/><Cell col=\"14\"/><Cell col=\"15\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"35","2",null,this);_a.set_taborder("3");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_schLadCode","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("22");_a.set_text("토지코드");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_ladCode","absolute","95","5","160","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("23");_a.set_displaynulltext("전체");_a.set_innerdataset("ds_ladCode");_a.set_codecolumn("LAD_CODE");_a.set_datacolumn("ALL_LAD_NM");_a=new Static("sta_schBLT","absolute","869","42","64","21",null,null,this.div_search);_a.set_taborder("24");_a.set_text("B.L.T");_a.set_cssclass("sta_WFSA_Label");_a.set_visible("false");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_blckFm","absolute","938","34","34","21",null,null,this.div_search);_a.set_taborder("25");_a.set_autoselect("true");_a.set_visible("false");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_lotFm","absolute","974","26","34","21",null,null,this.div_search);_a.set_taborder("26");_a.set_autoselect("true");_a.set_visible("false");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_lotTyFm","absolute","1010","26","34","21",null,null,this.div_search);_a.set_taborder("27");_a.set_autoselect("true");_a.set_visible("false");this.div_search.addChild(_a.name,_a);_a=new Static("sta_schCntrctSttusCode","absolute","903","34","64","21",null,null,this.div_search);_a.set_taborder("28");_a.set_text("계약타입");_a.set_cssclass("sta_WFSA_Label");_a.set_visible("false");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_cntrctSttusCode","absolute","927","31","120","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("29");_a.set_displaynulltext("선택");_a.set_innerdataset("ds_cntrctSttusCode");_a.set_codecolumn("CODE");_a.set_datacolumn("ALL_CODE_NM");_a.set_visible("false");_a=new Static("sta_schPrposSeCode","absolute","272","5","64","21",null,null,this.div_search);_a.set_taborder("30");_a.set_text("용도구분");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_prposSeCode","absolute","348","5","160","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("31");_a.set_displaynulltext("전체");_a.set_innerdataset("@ds_prposSeCode");_a.set_codecolumn("CODE");_a.set_datacolumn("ALL_CODE_NM");_a=new Static("sta_schSuplyCode","absolute","851","29","64","21",null,null,this.div_search);_a.set_taborder("32");_a.set_text("공급구분");_a.set_cssclass("sta_WFSA_Label");_a.set_visible("false");_a.set_enable("false");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_suplyCode","absolute","931","37","120","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("33");_a.set_displaynulltext("전체");_a.set_innerdataset("ds_suplyCode");_a.set_codecolumn("CODE");_a.set_datacolumn("ALL_CODE_NM");_a.set_visible("false");_a.set_enable("false");_a=new Static("sta_schRemndrLadSe","absolute","847","29","64","21",null,null,this.div_search);_a.set_taborder("34");_a.set_text("토지구분");_a.set_cssclass("sta_WFSA_Label");_a.set_visible("false");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_remndrLadSe","absolute","927","29","120","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("35");_a.set_displaynulltext("전체");_a.set_innerdataset("ds_remndrLadSeCode");_a.set_codecolumn("CODE");_a.set_datacolumn("ALL_CODE_NM");_a.set_visible("false");_a=new Static("sta_schOwnshipBeforeAt","absolute","856","34","103","21",null,null,this.div_search);_a.set_taborder("36");_a.set_text("소유권이전여부");_a.set_cssclass("sta_WFSA_Label");_a.set_visible("false");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_ownshipBeforeAt","absolute","927","42","120","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);var _b=new Dataset("cmb_ownshipBeforeAt_innerdataset",this.div_search.cmb_ownshipBeforeAt);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">[Y]이전</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">[N]미이전</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("37");_a.set_displaynulltext("전체");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_visible("false");_a=new Static("sta_schLadSeCode","absolute","855","29","64","21",null,null,this.div_search);_a.set_taborder("38");_a.set_text("계약구분");_a.set_cssclass("sta_WFSA_Label");_a.set_visible("false");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_ladSeCode","absolute","927","42","120","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("39");_a.set_displaynulltext("전체");_a.set_innerdataset("ds_ladSeCode");_a.set_codecolumn("CODE");_a.set_datacolumn("ALL_CODE_NM");_a.set_visible("false");_a=new Calendar("cal_payTmlmtTo","absolute","721","4","100","22",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("40");_a.set_autoselect("true");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static10","absolute","705","4","16","21",null,null,this.div_search);_a.set_taborder("41");_a.set_text("~");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_payTmlmtFm","absolute","605","4","100","22",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("42");_a.set_autoselect("true");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("sta_schPayTmlmt","absolute","532","7","80",null,null,"10",this.div_search);_a.set_taborder("43");_a.set_text("수납기간");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static06","absolute","853","34","90","21",null,null,this.div_search);_a.set_taborder("45");_a.set_text("수납기준일");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.set_visible("false");_a.set_enable("false");this.div_search.addChild(_a.name,_a);_a=new Static("sta_schInqireSe","absolute","887","39","80",null,null,"-11",this.div_search);_a.set_taborder("46");_a.set_text("조회기준");_a.set_cssclass("sta_WFSA_Label");_a.set_visible("false");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_inqireSe","absolute","931","31","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("47");_a.set_displaynulltext("선택");_a.set_innerdataset("ds_inqireSeCode");_a.set_codecolumn("CODE");_a.set_datacolumn("ALL_CODE_NM");_a.set_visible("false");_a=new Static("sta_schInqireSe00","absolute","831","30","80",null,null,"10",this.div_search);_a.set_taborder("48");_a.set_text("조회기준");_a.set_cssclass("sta_WFSA_Label");_a.set_visible("false");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_rcivDe","absolute","927","34","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("49");_a.set_autoselect("true");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a.set_visible("false");_a.set_enable("false");_a=new CheckBox("chk_cntrctrSttusCode","absolute","842","5","117","21",null,null,this.div_search);_a.set_taborder("51");_a.set_text("해약자포함");_a.set_value("01");_a.set_truevalue("02");_a.set_falsevalue("01");_a.set_visible("true");_a.set_enable("true");this.div_search.addChild(_a.name,_a);_a=new Layout("default","",0,35,this.div_search,function(_c){_c.set_taborder("3");_c.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_c){_c.set_classname("SLS110101");_c.set_titletext("토지공급기초내역");});this.addLayout(_a.name,_a);_a=new BindItem("item1","div_search.cal_payTmlmtTo","value","ds_cond00","RCIV_DE_TO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_search.cal_payTmlmtFm","value","ds_cond00","RCIV_DE_FM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_search.cmb_inqireSe","value","ds_cond00","INQIRE_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_search.cmb_ladCode","value","ds_cond00","LAD_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_search.cmb_prposSeCode","value","ds_cond00","PRPOS_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_search.cmb_suplyCode","value","ds_cond00","SUPLY_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_search.cal_rcivDe","value","ds_cond00","RCIV_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item63","div_search.chk_cntrctrSttusCode","value","ds_cond00","CNTRCTR_STTUS_CODE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("SLS110112.xfdl","lib::comInclude.xjs");this.addIncludeScript("SLS110112.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("SLS110112.xfdl",function(){this.DEFAULT_DATE=null;this.DEFAULT_DATE_FROM=null;this.DEFAULT_DATE_TO=null;this.DEFAULT_RCIV_DE=null;this.PARENT_FORM=null;this.SEARCH_PARAM_SET=["LAD_CODE","PRPOS_SE"];this.SEARCH_DIV_INFO=null;this.USE_EXCEL_DOWN=true;this.SLS110112_oninit=function(_a,_b){this.fn_init();this.fn_init_dataset();};this.SLS110112_onload=function(_a,_b){this.fn_setDefaultInfo();this.fn_loadCombo();};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_loadCombo=function(){var _a=[{OUT_PUT:"ds_remndrLadSeCode",GRP_CODE:"LAD0A2",USE_AT:"1",PARAM_NAME:"",PARAM_VALUE:""},{OUT_PUT:"ds_suplyCode",GRP_CODE:"LAD004",USE_AT:"1"},{OUT_PUT:"ds_prposSeCode",GRP_CODE:"LAD003",USE_AT:"1"},{OUT_PUT:"ds_cntrctSttusCode",GRP_CODE:"LAD0A4",USE_AT:"1",PARAM_NAME:"CHRCTR_PREPAR_VALUE_0",PARAM_VALUE:"V"},{OUT_PUT:"ds_ladSeCode",GRP_CODE:"LAD0A3",USE_AT:"1"}];this.pmsUtil.getCommonCode("selectCommonCode",_a);this.DEFAULT_DATE=this.gfn_today();this.DEFAULT_DATE_FROM="19000101";this.DEFAULT_DATE_TO=this.DEFAULT_DATE;this.DEFAULT_RCIV_DE="19000101";this.ds_cond00.setColumn(0,"RCIV_DE_FM",this.DEFAULT_DATE_FROM);this.ds_cond00.setColumn(0,"RCIV_DE_TO",this.DEFAULT_DATE_TO);this.ds_cond00.setColumn(0,"RCIV_DE",this.DEFAULT_RCIV_DE);this.ds_cond00.setColumn(0,"CNTRCTR_STTUS_CODE","01");var _b=[{CODE:"",CODE_NM:"선택",ALL_CODE_NM:"선택",PAY_CODE:""},{CODE:"01",CODE_NM:"분양",ALL_CODE_NM:"[01]분양",PAY_CODE:"S0,S1,S2,S3,S4,S5,S6,S7,S8,S9,SA"},{CODE:"02",CODE_NM:"임대",ALL_CODE_NM:"[02]임대",PAY_CODE:"R0,R1,R2,R3,R4,R5,R9,RN,RR"},{CODE:"99",CODE_NM:"기타",ALL_CODE_NM:"[99]기타",PAY_CODE:""}];this.pmsUtil.addListToDataset(this.ds_inqireSeCode,_b);var _c={};_c["UASE_AT"]="1";this.pmsUtil.getLadCodeList(_c,"ds_ladCode","fn_set");};this.fn_callbackAfter=function(){};this.fn_set=function(){var _a=this.ds_ladCode;_a.insertRow(0);_a.setColumn(0,"LAD_CODE","");_a.setColumn(0,"LAD_NM","전체");_a.setColumn(0,"ALL_LAD_NM","전체");_a.set_rowposition(0);this.div_search.cmb_ladCode.set_index(0);};this.fn_search=function(){if(!this.gfn_checkValidation(this.div_search,this.ds_validation)){return;}this.pmsUtil.clearDataSet([this.ds_ladRcivAmtList]);this.fn_transaction("selectLadRcivAmtList");this.ds_ladRcivAmtList.getRowCount;};this.fn_transaction=function(_a){var _b=true;var _c=null;var _d=null;var _e=null;switch(_a){case "selectLadRcivAmtList":_c="hsco/pms/sls/lad/stt/SLS110104/selectLadPayList.do";_d="input1=ds_cond00";_e="ds_ladRcivAmtList=ladUnclamtSttusList";break;default:break;}if(_c==null){return;}var _f=typeof (_d);if(_f=="object"){this.pmsUtil.pmsComTran(_a,_c,reqParam,_e,null,null,false);}else{Ex.core.tran(this,_a,_c,_d,_e,null,null,null,_b);}};this.fn_callBack=function(_a,_b,_c){var _d=_b==0?true:false;if(_d){var _e=null;switch(_a){case "selectCommonCode":targetCombo=this.div_search.cmb_cntrctSttusCode;_e={};_e["type"]=this.pmsUtil.PROMPT_SELECT;_e["noNullText"]="코드없음";this.pmsUtil.setComboPrompt(targetCombo,_e);targetCombo=this.div_search.cmb_ladSeCode;_e={};_e["type"]=this.pmsUtil.PROMPT_ALL;_e["noNullText"]="코드없음";this.pmsUtil.setComboPrompt(targetCombo,_e);targetCombo=this.div_search.cmb_suplyCode;_e={};_e["type"]=this.pmsUtil.PROMPT_ALL;_e["noNullText"]="코드없음";this.pmsUtil.setComboPrompt(targetCombo,_e);targetCombo=this.div_search.cmb_remndrLadSe;_e={};_e["type"]=this.pmsUtil.PROMPT_ALL;_e["noNullText"]="코드없음";this.pmsUtil.setComboPrompt(targetCombo,_e);targetCombo=this.div_search.cmb_prposSeCode;_e={};_e["type"]=this.pmsUtil.PROMPT_ALL;_e["noNullText"]="코드없음";this.pmsUtil.setComboPrompt(targetCombo,_e);break;case "selectLadRcivAmtList":break;case "ladCode":targetCombo=this.div_search.cmb_ladCode;_e={};_e["type"]=this.pmsUtil.PROMPT_SELECT;_e["noNullText"]="코드없음";this.pmsUtil.setComboPrompt(targetCombo,_e);break;default:break;}}else{this.gfn_callBackMsg(_a,_b,_c);}};this.fn_calendarOnkeyupHandler=function(_a,_b){var _c=_a.name;var _d=_b.keycode;switch(_c){case "cal_payTmlmtFm":case "cal_payTmlmtTo":if(_d=='13'){this.fn_search();}break;default:break;}};this.fn_btnOnClickHandler=function(_a,_b){var _c=_a.name;switch(_c){case "btn_excelDown":this.fn_downloadExcelFromGrid(this.grd_ladUnclamtSttus,this.ds_ladRcivAmtList,"lad_unclamt_sttus");break;default:break;}};this.fn_insert=function(){};this.fn_btnOnClickHandler=function(_a,_b){var _c=_a.name;switch(_c){case "":break;default:break;}};this.fn_setDefaultInfo=function(){var _a={};_a["LAD_CODE"]=this.div_search.cmb_ladCode;_a["BLCK_FM"]=this.div_search.edt_blckFm;_a["LOT_FM"]=this.div_search.edt_lotFm;_a["LOT_TY_FM"]=this.div_search.edt_lotTyFm;_a["CNTRCT_STTUS"]=this.div_search.cmb_cntrctSttusCode;_a["LAD_SE"]=this.div_search.cmb_ladSeCode;_a["PRPOS_SE"]=this.div_search.cmb_prposSeCode;_a["SUPLY_CODE"]=this.div_search.cmb_suplyCode;_a["REMNDR_LAD_SE"]=this.div_search.cmb_remndrLadSe;_a["OWNSHIP_BEFORE_AT"]=this.div_search.cmb_ownshipBeforeAt;this.SEARCH_DIV_INFO=_a;};this.fn_setViewInfo=function(){};this.fn_setSchLayout=function(_a,_b){this.div_search.cmb_cntrctSttusCode.enable;var _c=_b==null?0:_b.length;var _d=this.SEARCH_DIV_INFO;var _e=null;for(var _i in _d){var _f=false;if(_c==0){_f=true;}else{for(var _j=0;_j<_c;_j++ ){var _g=_b[_j];if(_g==_i){_f=true;break;}}}_e=_d[_i];if(_i=="CNTRCT_STTUS"){var _h=_f?"Y":"N";this.ds_validation.setColumn(1,"notNull",_h);}_e.set_enable(_f);}return this;};this.fn_downloadExcelFromGrid=function(_a,_b,_c){trace(_a.name+" : "+_c);var _d=_b.getRowCount();if(_d>0){this.gfn_exportExcel(_a,_c);}else{this.alert("조회 결과 데이터가 없습니다.");}};});this.on_initEvent=function(){this.addEventHandler("oninit",this.SLS110112_oninit,this);this.addEventHandler("onload",this.SLS110112_onload,this);this.div_search.cmb_ladCode.addEventHandler("onitemchanged",this.fn_comboOnItemChangeHandler,this);this.div_search.cal_payTmlmtTo.addEventHandler("onkeyup",this.fn_calendarOnkeyupHandler,this);this.div_search.cal_payTmlmtFm.addEventHandler("onkeyup",this.fn_calendarOnkeyupHandler,this);this.div_search.cal_rcivDe.addEventHandler("onkeyup",this.fn_calendarOnkeyupHandler,this);this.div_search.chk_cntrctrSttusCode.addEventHandler("onclick",this.div_search_chk_cntrctrSttusCode_onclick,this);};this.loadIncludeScript("SLS110112.xfdl");};})();