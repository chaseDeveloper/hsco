﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HPM060108");this.set_classname("HPM060108");this.set_titletext("테니스장이용관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col><Col id=\"compId\">ds_dolmoruTnncrtManageList</Col><Col id=\"colId\">YM</Col><Col id=\"msgId\">년월</Col></Row><Row><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col><Col id=\"compId\">ds_dongtanBadmcrtManageList</Col><Col id=\"colId\">YM</Col><Col id=\"msgId\">년월</Col></Row><Row><Col id=\"notNull\">Y</Col><Col id=\"type\"/><Col id=\"PK\">Y</Col><Col id=\"compId\">ds_parkGlcrsManageList</Col><Col id=\"colId\">YM</Col><Col id=\"msgId\">년월</Col></Row><Row><Col id=\"notNull\">Y</Col><Col id=\"type\"/><Col id=\"PK\">Y</Col><Col id=\"compId\">ds_centralParkTnncrtManageList</Col><Col id=\"colId\">YM</Col><Col id=\"msgId\">년월</Col></Row><Row><Col id=\"compId\">ds_achsteManageList</Col><Col id=\"colId\">YM</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">년월</Col></Row><Row><Col id=\"compId\">ds_hyangnamParkGlcrsManageList</Col><Col id=\"colId\">YM</Col><Col id=\"notNull\">Y</Col><Col id=\"type\"/><Col id=\"PK\">Y</Col><Col id=\"msgId\">년월</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_dolmoruTnncrtManageList",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"YM\" type=\"STRING\" size=\"256\"/><Column id=\"GNRL_WKDAY_GNRL_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_WKDAY_NIGHT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_WKEND_GNRL_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_WKEND_NIGHT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_MT_CMMTKT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_WKDAY_GNRL_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_WKDAY_NIGHT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_WKEND_GNRL_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_WKEND_NIGHT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_MT_CMMTKT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_WKDAY_GNRL_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_WKDAY_NIGHT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_WKEND_GNRL_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_WKEND_NIGHT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_MT_CMMTKT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_WKDAY_GNRL_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_WKDAY_NIGHT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_WKEND_GNRL_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_WKEND_NIGHT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_MT_CMMTKT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_WKDAY_GNRL_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_WKDAY_NIGHT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_WKEND_GNRL_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_WKEND_NIGHT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_MT_CMMTKT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_WKDAY_GNRL_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_WKDAY_NIGHT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_WKEND_GNRL_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_WKEND_NIGHT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_MT_CMMTKT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_WKDAY_CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_WKEND_CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_WKDAY_AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_WKEND_AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_WKDAY_CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_WKEND_CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_WKDAY_AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_WKEND_AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_WKDAY_CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_WKEND_CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_WKDAY_AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_WKEND_AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_dongtanBadmcrtManageList",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"YM\" type=\"STRING\" size=\"256\"/><Column id=\"GNRL_GNRL_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_MT_CMMTKT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_WKEND_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_GNRL_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_MT_CMMTKT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_WKEND_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_GNRL_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_MT_CMMTKT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_WKEND_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_GNRL_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_MT_CMMTKT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_WKEND_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_GNRL_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_MT_CMMTKT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_WKEND_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_GNRL_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_MT_CMMTKT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_WKEND_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_WKEND_CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_WKEND_AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_WKEND_CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_WKEND_AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_parkGlcrsManageList",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"YM\" type=\"STRING\" size=\"256\"/><Column id=\"GNRL_WKDAY_GNRL_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_WKEND_GNRL_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_1MONTH_CMMTKT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_3MONTH_CMMTKT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_6MONTH_CMMTKT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_12MONTH_CMMTKT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_WKDAY_GNRL_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_WKEND_GNRL_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_1MONTH_CMMTKT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_3MONTH_CMMTKT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_6MONTH_CMMTKT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_12MONTH_CMMTKT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_WKDAY_GNRL_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_WKEND_GNRL_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_1MONTH_CMMTKT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_3MONTH_CMMTKT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_6MONTH_CMMTKT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_12MONTH_CMMTKT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_WKDAY_GNRL_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_WKEND_GNRL_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_1MONTH_CMMTKT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_3MONTH_CMMTKT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_6MONTH_CMMTKT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_12MONTH_CMMTKT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_WKDAY_GNRL_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_WKEND_GNRL_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_1MONTH_CMMTKT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_3MONTH_CMMTKT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_6MONTH_CMMTKT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_12MONTH_CMMTKT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_WKDAY_GNRL_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_WKEND_GNRL_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_1MONTH_CMMTKT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_3MONTH_CMMTKT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_6MONTH_CMMTKT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_12MONTH_CMMTKT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_GNRL_CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_GNRL_AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_CMMTKT_CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_CMMTKT_AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_GNRL_CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_GNRL_AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_CMMTKT_CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_CMMTKT_AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNㄴㄴT_ETC_GNRL_CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_GNRL_AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_CMMTKT_CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_CMMTKT_AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_hyangnamParkGlcrsManageList",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"YM\" type=\"STRING\" size=\"256\"/><Column id=\"GNRL_WKDAY_GNRL_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_WKEND_GNRL_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_1MONTH_CMMTKT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_3MONTH_CMMTKT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_6MONTH_CMMTKT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_12MONTH_CMMTKT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_WKDAY_GNRL_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_WKEND_GNRL_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_1MONTH_CMMTKT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_3MONTH_CMMTKT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_6MONTH_CMMTKT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_12MONTH_CMMTKT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_WKDAY_GNRL_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_WKEND_GNRL_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_1MONTH_CMMTKT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_3MONTH_CMMTKT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_6MONTH_CMMTKT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_12MONTH_CMMTKT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_WKDAY_GNRL_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_WKEND_GNRL_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_1MONTH_CMMTKT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_3MONTH_CMMTKT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_6MONTH_CMMTKT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_12MONTH_CMMTKT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_WKDAY_GNRL_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_WKEND_GNRL_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_1MONTH_CMMTKT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_3MONTH_CMMTKT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_6MONTH_CMMTKT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_12MONTH_CMMTKT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_WKDAY_GNRL_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_WKEND_GNRL_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_1MONTH_CMMTKT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_3MONTH_CMMTKT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_6MONTH_CMMTKT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_12MONTH_CMMTKT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_GNRL_CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_GNRL_AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_CMMTKT_CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_CMMTKT_AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_GNRL_CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_GNRL_AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_CMMTKT_CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_CMMTKT_AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNㄴㄴT_ETC_GNRL_CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_GNRL_AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_CMMTKT_CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_CMMTKT_AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_ETC_AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_achsteManageList",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"YM\" type=\"STRING\" size=\"256\"/><Column id=\"GNRL_DAYTM_CO\" type=\"STRING\" size=\"256\"/><Column id=\"GNRL_MORN_NIGHT_CO\" type=\"STRING\" size=\"256\"/><Column id=\"GNRL_MT_CMMTKT_CO\" type=\"STRING\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_DAYTM_CO\" type=\"STRING\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_MORN_NIGHT_CO\" type=\"STRING\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_CMMTKT_CO\" type=\"STRING\" size=\"256\"/><Column id=\"DSCNT_ETC_DAYTM_CO\" type=\"STRING\" size=\"256\"/><Column id=\"DSCNT_ETC_MORN_NIGHT_CO\" type=\"STRING\" size=\"256\"/><Column id=\"DSCNT_ETC_CMMTKT_CO\" type=\"STRING\" size=\"256\"/><Column id=\"GNRL_DAYTM_AM\" type=\"STRING\" size=\"256\"/><Column id=\"GNRL_MORN_NIGHT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"GNRL_MT_CMMTKT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_DAYTM_AM\" type=\"STRING\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_MORN_NIGHT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_CMMTKT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"DSCNT_ETC_DAYTM_AM\" type=\"STRING\" size=\"256\"/><Column id=\"DSCNT_ETC_MORN_NIGHT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"DSCNT_ETC_CMMTKT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"GNRL_CO_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"GNRL_AM_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_CO_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"DSCNT_YNGBGS_AM_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"DSCNT_ETC_CO_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"DSCNT_ETC_AM_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SUM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_centralParkTnncrtManageList",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"YM\" type=\"STRING\" size=\"256\"/><Column id=\"GNRL_WKDAY_GNRL_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_WKDAY_NIGHT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_WKEND_GNRL_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_WKEND_NIGHT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_MT_CMMTKT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_50_PT_WKDAY_GNRL_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_50_PT_WKDAY_NIGHT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_50_PT_WKEND_GNRL_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_50_PT_WKEND_NIGHT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_50_PT_MT_CMMTKT_CO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_WKDAY_GNRL_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_WKDAY_NIGHT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_WKEND_GNRL_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_WKEND_NIGHT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_MT_CMMTKT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_50_PT_WKDAY_GNRL_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_50_PT_WKDAY_NIGHT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_50_PT_WKEND_GNRL_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_50_PT_WKEND_NIGHT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_50_PT_MT_CMMTKT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_WKDAY_CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_WKDAY_AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_WKEND_CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_WKEND_AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GNRL_AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_50_PT_WKDAY_CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_50_PT_WKDAY_AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_50_PT_WKEND_CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_50_PT_WKEND_AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_50_PT_CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSCNT_50_PT_AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CO_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUM\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("21");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute",null,"0","15","735","13",null,this);_a.set_taborder("24");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,null,"13","735","0","0",this);_a.set_taborder("25");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Tab("Tab","absolute","0","67",null,null,"28","0",this);_a.set_taborder("103");_a.set_tabindex("0");_a.set_scrollbars("autoboth");_a.style.set_showextrabutton("false");_a.set_preload("true");this.addChild(_a.name,_a);_a=new Tabpage("tabpage1",this.Tab);_a.set_text("센트럴파크테니스장");_a.set_url("hpm_ctm::HPM060108_T01.xfdl");this.Tab.addChild(_a.name,_a);_a=new Tabpage("tabpage2",this.Tab);_a.set_text("돌모루테니스장");_a.set_url("hpm_ctm::HPM060108_T02.xfdl");this.Tab.addChild(_a.name,_a);_a=new Tabpage("tabpage3",this.Tab);_a.set_text("동탄배드민턴장");_a.set_url("hpm_ctm::HPM060108_T03.xfdl");this.Tab.addChild(_a.name,_a);_a=new Tabpage("tabpage4",this.Tab);_a.set_text("동탄파크골프장");_a.set_url("hpm_ctm::HPM060108_T04.xfdl");this.Tab.addChild(_a.name,_a);_a=new Tabpage("tabpage5",this.Tab);_a.set_text("향남파크골프장");_a.set_url("hpm_ctm::HPM060108_T05.xfdl");this.Tab.addChild(_a.name,_a);_a=new Tabpage("tabpage6",this.Tab);_a.set_text("화성정궁도장");_a.set_url("hpm_ctm::HPM060108_T06.xfdl");this.Tab.addChild(_a.name,_a);_a=new Static("sta_gnfdList","absolute","0","43",null,"19","901",null,this);_a.set_taborder("104");_a.set_text("소규모시설 목록");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","62",null,"5","28",null,this);_a.set_taborder("105");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("106");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","0","15",null,null,"0",this.div_search);_a.set_taborder("12");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_searchDe01","absolute","14","5","64","21",null,null,this.div_search);_a.set_taborder("14");_a.set_text("조회년도");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_year","absolute","78","5","80","21",null,null,this.div_search);_a.set_taborder("15");_a.set_value("0");_a.set_cssclass("spn_WF_Essential");this.div_search.addChild(_a.name,_a);_a=new Layout("default","",1031,59,this.div_search,function(_b){_b.set_taborder("106");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("HPM060108");_b.set_titletext("테니스장이용관리");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_SEARCH.cmb_rentFcltsSe_s","value","ds_cond","SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","div_SEARCH.cmb_pchrgAt_s","value","ds_cond","CL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item15","div_SEARCH.edt_fcltyNm_s","value","ds_cond","FCLTY_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","div_search.spn_year","value","ds_cond","YEAR");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","hpm_ctm::HPM060108_T01.xfdl");this._addPreloadList("fdl","hpm_ctm::HPM060108_T02.xfdl");this._addPreloadList("fdl","hpm_ctm::HPM060108_T03.xfdl");this._addPreloadList("fdl","hpm_ctm::HPM060108_T04.xfdl");this._addPreloadList("fdl","hpm_ctm::HPM060108_T05.xfdl");this._addPreloadList("fdl","hpm_ctm::HPM060108_T06.xfdl");};this.addIncludeScript("HPM060108.xfdl","lib::comInclude.xjs");this.addIncludeScript("HPM060108.xfdl","mis_lib::misUtil.xjs");this.registerScript("HPM060108.xfdl",function(){this.saveRow= -1;this.HPM060108_oninit=function(_a,_b){};this.HPM060108_onload=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.fn_init_form=function(){this.gfn_initForm(this);this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"YEAR",this.dateUtils.format(this.gfn_today(),"yyyy"));this.fn_search();};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){if(Ex.util.isUpdated(this.ds_centralParkTnncrtManageList)||Ex.util.isUpdated(this.ds_dolmoruTnncrtManageList)||Ex.util.isUpdated(this.ds_dongtanBadmcrtManageList)||Ex.util.isUpdated(this.ds_parkGlcrsManageList)||Ex.util.isUpdated(this.ds_hyangnamParkGlcrsManageList)||Ex.util.isUpdated(this.ds_achsteManageList)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}this.ds_centralParkTnncrtManageList.clearData();this.ds_dolmoruTnncrtManageList.clearData();this.ds_dongtanBadmcrtManageList.clearData();this.ds_parkGlcrsManageList.clearData();this.ds_hyangnamParkGlcrsManageList.clearData();this.ds_achsteManageList.clearData();if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}this.fn_transaction("selectTnncrtUseManageList");};this.fn_save=function(){if(!this.comUtils.isDatasetUpdated(this.ds_centralParkTnncrtManageList)&&!this.comUtils.isDatasetUpdated(this.ds_dolmoruTnncrtManageList)&&!this.comUtils.isDatasetUpdated(this.ds_dongtanBadmcrtManageList)&&!this.comUtils.isDatasetUpdated(this.ds_parkGlcrsManageList)&&!this.comUtils.isDatasetUpdated(this.ds_hyangnamParkGlcrsManageList)&&!this.comUtils.isDatasetUpdated(this.ds_achsteManageList)){this.gfn_message("comm.데이터.변경.없음");return false;}if(!this.gfn_checkValidation_NoUpdChk(this.ds_centralParkTnncrtManageList,this.ds_validation)||!this.gfn_checkValidation_NoUpdChk(this.ds_dolmoruTnncrtManageList,this.ds_validation)||!this.gfn_checkValidation_NoUpdChk(this.ds_dongtanBadmcrtManageList,this.ds_validation)||!this.gfn_checkValidation_NoUpdChk(this.ds_parkGlcrsManageList,this.ds_validation)||!this.gfn_checkValidation_NoUpdChk(this.ds_hyangnamParkGlcrsManageList,this.ds_validation)||!this.gfn_checkValidation_NoUpdChk(this.ds_achsteManageList,this.ds_validation)){return;}if(this.gfn_message("confirm.저장.여부")){this.saveRow1=this.ds_centralParkTnncrtManageList.rowposition;this.saveRow2=this.ds_dolmoruTnncrtManageList.rowposition;this.saveRow3=this.ds_dongtanBadmcrtManageList.rowposition;this.saveRow4=this.ds_parkGlcrsManageList.rowposition;this.saveRow5=this.ds_hyangnamParkGlcrsManageList.rowposition;this.saveRow6=this.ds_achsteManageList.rowposition;this.fn_transaction("saveTnncrtUseManageCUD");}};this.fn_insert=function(){var _a=this.Tab.tabindex;var _b=new Dataset();var _c=this.dateUtils.format(this.gfn_today(),"yyyymm");if(_a=="0"){_b=this.ds_centralParkTnncrtManageList;}else if(_a=="1"){_b=this.ds_dolmoruTnncrtManageList;}else if(_a=="2"){_b=this.ds_dongtanBadmcrtManageList;}else if(_a=="3"){_b=this.ds_parkGlcrsManageList;}else if(_a=="4"){_b=this.ds_hyangnamParkGlcrsManageList;}else if(_a=="5"){_b=this.ds_achsteManageList;}var _d=_b.addRow();_b.setColumn(_d,"YM",_c);};this.fn_delete=function(){var _a=this.Tab.tabindex;var _b=new Dataset();if(_a=="0"){_b=this.ds_centralParkTnncrtManageList;}else if(_a=="1"){_b=this.ds_dolmoruTnncrtManageList;}else if(_a=="2"){_b=this.ds_dongtanBadmcrtManageList;}else if(_a=="3"){_b=this.ds_parkGlcrsManageList;}else if(_a=="4"){_b=this.ds_hyangnamParkGlcrsManageList;}else if(_a=="5"){_b=this.ds_achsteManageList;}if(_b.getRowCount()>0){if(this.gfn_message("confirm.삭제여부")){var _c=_b.rowposition;_b.deleteRow(_c);}}};this.fn_cancel=function(){if(Ex.util.isUpdated(this.ds_hscDeManageList)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}if(this.gfn_message("confirm.취소여부")){this.ds_hscDeManageList.reset();this.ds_hscDeManageList.applyChange();}};this.fn_transaction=function(_a){switch(_a){case "selectTnncrtUseManageList":var _b="hsco/hpm/ctm/HPM060108/selectTnncrtUseManageList.do";var _c="input1=ds_cond";var _d="ds_centralParkTnncrtManageList=output1 ds_dolmoruTnncrtManageList=output2 ds_dongtanBadmcrtManageList=output3 ds_parkGlcrsManageList=output4 ds_hyangnamParkGlcrsManageList=output5 ds_achsteManageList=output6";break;case "saveTnncrtUseManageCUD":var _b="hsco/hpm/ctm/HPM060108/saveTnncrtUseManageCUD.do";var _c="input1=ds_centralParkTnncrtManageList:U input2=ds_dolmoruTnncrtManageList:U input3=ds_dongtanBadmcrtManageList:U input4=ds_parkGlcrsManageList:U input5=ds_hyangnamParkGlcrsManageList:U input6=ds_achsteManageList:U";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b=='0'){switch(_a){case "selectTnncrtUseManageList":if(this.saveRow1> -1){this.ds_centralParkTnncrtManageList.set_rowposition(this.saveRow1);this.saveRow1= -1;}if(this.saveRow2> -1){this.ds_dolmoruTnncrtManageList.set_rowposition(this.saveRow2);this.saveRow2= -1;}if(this.saveRow3> -1){this.ds_dongtanBadmcrtManageList.set_rowposition(this.saveRow3);this.saveRow3= -1;}if(this.saveRow4> -1){this.ds_parkGlcrsManageList.set_rowposition(this.saveRow4);this.saveRow4= -1;}if(this.saveRow5> -1){this.ds_hyangnamParkGlcrsManageList.set_rowposition(this.saveRow5);this.saveRow5= -1;}if(this.saveRow6> -1){this.ds_achsteManageList.set_rowposition(this.saveRow6);this.saveRow6= -1;}break;case "saveTnncrtUseManageCUD":this.fn_search();break;}}};});this.on_initEvent=function(){this.ds_cond.addEventHandler("oncolumnchanged",this.ds_cond_oncolumnchanged,this);this.addEventHandler("oninit",this.HPM060108_oninit,this);this.addEventHandler("onload",this.HPM060108_onload,this);this.Tab.addEventHandler("canchange",this.Tab_canchange,this);this.Tab.addEventHandler("onchanged",this.Tab_onchanged,this);this.Static02.addEventHandler("onclick",this.Static02_onclick,this);};this.loadIncludeScript("HPM060108.xfdl");this.loadPreloadList();};})();