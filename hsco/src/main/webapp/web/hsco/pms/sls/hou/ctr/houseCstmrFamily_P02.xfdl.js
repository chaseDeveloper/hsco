﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("houseCstmrFamily_P02");this.set_classname("houseCstmrFamily_P02");this.set_titletext("영구임대 고객,가족 검색");this._setFormPosition(0,0,640,336);}_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"WAITR_CNTRCTR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RCEPT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RCEPT_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_familyRelate",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rentCstmrList",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"PRMANENT_CSTMR_NO\" type=\"STRING\" size=\"255\"/><Column id=\"NM\" type=\"STRING\" size=\"255\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"255\"/><Column id=\"ZIP\" type=\"STRING\" size=\"255\"/><Column id=\"ADRES\" type=\"STRING\" size=\"255\"/><Column id=\"ADRES_DETAIL\" type=\"STRING\" size=\"255\"/><Column id=\"TELNO\" type=\"STRING\" size=\"255\"/><Column id=\"MBTLNO\" type=\"STRING\" size=\"255\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"255\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_waitrFamilyList",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"PRMANENT_CSTMR_NO\" type=\"STRING\" size=\"255\"/><Column id=\"FAMILY_RELATE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"EXAMIN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FAMILY_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PORTAL_REGIST_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"255\"/><Column id=\"WAITR_CSTMR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_CSTMR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"255\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"255\"/><Column id=\"ZIP\" type=\"STRING\" size=\"255\"/><Column id=\"ADRES\" type=\"STRING\" size=\"255\"/><Column id=\"ADRES_DETAIL\" type=\"STRING\" size=\"255\"/><Column id=\"TELNO\" type=\"STRING\" size=\"255\"/><Column id=\"MBTLNO\" type=\"STRING\" size=\"255\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"255\"/><Column id=\"FAMILY_SN\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_RELATE\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_CSTMR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CSTMR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseFamilyList",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"PRMANENT_CSTMR_NO\" type=\"STRING\" size=\"255\"/><Column id=\"FAMILY_RELATE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"EXAMIN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FAMILY_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PORTAL_REGIST_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"255\"/><Column id=\"WAITR_CSTMR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_CSTMR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"255\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"255\"/><Column id=\"ZIP\" type=\"STRING\" size=\"255\"/><Column id=\"ADRES\" type=\"STRING\" size=\"255\"/><Column id=\"ADRES_DETAIL\" type=\"STRING\" size=\"255\"/><Column id=\"TELNO\" type=\"STRING\" size=\"255\"/><Column id=\"MBTLNO\" type=\"STRING\" size=\"255\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"255\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_WORK","absolute","15","45",null,"276","15",null,this);_a.set_taborder("1");_a.style.set_background("white");this.addChild(_a.name,_a);_a=new Grid("grd_hcntrctrFamilyList","absolute","0","95",null,"181","0",null,this.div_WORK);_a.set_taborder("27");_a.set_binddataset("ds_waitrFamilyList");_a.set_cssclass("grd02_WF_blue");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"40\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"고객번호\"/><Cell col=\"1\" text=\"관계\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"주민번호\"/><Cell col=\"4\" text=\"우편번호\"/><Cell col=\"5\" text=\"주소\"/><Cell col=\"6\" text=\"주소상세\"/><Cell col=\"7\" text=\"연락처1\"/><Cell col=\"8\" text=\"연락처2\"/></Band><Band id=\"body\"><Cell text=\"bind:CNTRCTR_CSTMR_NO\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"none\" text=\"bind:FAMILY_RELATE\" combodataset=\"ds_familyRelate\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"2\" text=\"bind:CSTMR_NM\"/><Cell col=\"3\" text=\"bind:IHIDNUM\" mask=\"expr:IHIDNUM == null  ? &quot;&quot;  : '######-#{######}'\"/><Cell col=\"4\" text=\"bind:ZIP\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:ADRES\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:ADRES_DETAIL\"/><Cell col=\"7\" text=\"bind:TELNO\"/><Cell col=\"8\" text=\"bind:MBTLNO\"/></Band></Format></Formats>");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_subTitle","absolute","0","10","145","19",null,null,this.div_WORK);_a.set_taborder("30");_a.set_text("주택계약자 고객 정보");_a.set_cssclass("sta_WF_Title02");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_family00","absolute","0","71","300","19",null,null,this.div_WORK);_a.set_taborder("31");_a.set_text("가족사항");_a.set_cssclass("sta_WF_Title02");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","90",null,"5","0",null,this.div_WORK);_a.set_taborder("32");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static37","absolute","99","34","511","27",null,null,this.div_WORK);_a.set_taborder("33");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static18","absolute","0","29",null,"5","0",null,this.div_WORK);_a.set_taborder("34");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","61",null,"10","0",null,this.div_WORK);_a.set_taborder("35");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM","absolute","0","34","100","27",null,null,this.div_WORK);_a.set_taborder("36");_a.set_text("성명");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_NM","absolute","102","37","200","21",null,null,this.div_WORK);_a.set_taborder("37");_a.set_readonly("true");_a.set_maxlength("10");_a.set_cssclass("edt_WF_Readonly");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_IHIDNUM","absolute","304","34","100","27",null,null,this.div_WORK);_a.set_taborder("38");_a.set_text("주민등록번호");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new MaskEdit("msk_IHIDNUM","absolute","406","37","202","21",null,null,this.div_WORK);_a.set_taborder("39");_a.set_readonly("true");_a.set_type("string");_a.set_mask("######-#######");_a.set_cssclass("msk_WF_Readonly");_a.style.set_align("left middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","15",null,"0","0",this);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","2","15",null,null,"0",this);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","2","0",null,"15","0",null,this);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","15","17","205","21",null,null,this);_a.set_taborder("8");_a.set_text("주택계약자 고객,가족 검색");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Button("btn_close00","absolute","575","15","50","25",null,null,this);_a.set_taborder("11");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_search");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","40",null,"5","1",null,this);_a.set_taborder("12");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_confirm","absolute","523","15","50","25",null,null,this);_a.set_taborder("13");_a.set_text("확인");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_search");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","2",null,null,"15","0","0",this);_a.set_taborder("14");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,276,this.div_WORK,function(_b){_b.set_taborder("1");_b.style.set_background("white");});this.div_WORK.addLayout(_a.name,_a);_a=new Layout("default","",640,336,this,function(_b){_b.set_classname("houseCstmrFamily_P02");_b.set_titletext("영구임대 고객,가족 검색");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("houseCstmrFamily_P02.xfdl","pms_lib::rntUtilInclude.xjs");this.addIncludeScript("houseCstmrFamily_P02.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("houseCstmrFamily_P02.xfdl",function(){this.houseCstmrFamily_P02_oninit=function(_a,_b){this.fn_init(false);this.fn_load_combo();};this.houseCstmrFamily_P02_onload=function(_a,_b){this.ds_cond00.clearData();this.ds_rentCstmrList.clearData();this.ds_waitrFamilyList.clearData();var _c=this.parent.objParam;this.ds_cond00.addRow();this.ds_cond00.setColumn(0,"WAITR_CNTRCTR_SE",_c.WAITR_CNTRCTR_SE);this.ds_cond00.setColumn(0,"CNTRCTR_NO",_c.CNTRCTR_NO);this.div_WORK.sta_subTitle.set_text("계약자");this.div_WORK.edt_NM.set_value(_c.CSTMR_NM);this.div_WORK.msk_IHIDNUM.set_value(_c.IHIDNUM);this.fn_transaction("selectRentCstmrFamilyList");};this.fn_load_combo=function(){var _a=[["ds_familyRelate","HRM013","1",""]];this.gfn_comboLoad(_a);};this.btn_close_onclick=function(_a,_b){this.close();};this.div_WORK_grd_houseCstmrList_oncelldblclick=function(_a,_b){if(this.fn_confirm(false)){this.close();}};this.btn_confirm_onclick=function(_a,_b){if(this.fn_confirm(true)){this.close();}};this.div_WORK_grd_hcntrctrFamilyList_oncelldblclick=function(_a,_b){if(this.fn_confirm(true)){this.close();}};this.fn_confirm=function(_a){var _b;var _c;if(_a){_b=this.ds_waitrFamilyList;_c=_b.getSelectColumn("FAMILY_RELATE");}else{_b=this.ds_rentCstmrList;_c="000";}if(_b.rowposition== -1){this.alert("선택한 항목이 없습니다.");return false;}var _d=_b.getSelectColumn("HOUSE_CSTMR_NO");var _e=_b.getSelectColumn("CSTMR_NM");var _f=_b.getSelectColumn("IHIDNUM");var _g=_b.getSelectColumn("ADRES");var _h=_b.getSelectColumn("TELNO");var _i=_b.getSelectColumn("MBTLNO");var _j=_b.getSelectColumn("ZIP");var _k=_b.getSelectColumn("ADRES");var _l=_b.getSelectColumn("ADRES_DETAIL");if(_g!=null&&_b.getSelectColumn("ADRES_DETAIL")!=null){_g+=' ';_g+=_b.getSelectColumn("ADRES_DETAIL");}var _m=this.opener;if(_m[this.parent.callback]==null){_m=this.opener.div_workFrame.div_main;}bResult=_m[this.parent.callback](_d,_e,_f,_g,_h,_i,_c,_j,_k,_l);return bResult;};this.fn_transaction=function(_a){switch(_a){case "selectRentCstmrFamilyList":var _b="/hsco/pms/sls/hou/ctr/SLS020208/selectRentCstmrFamilyList.do";var _c="input1=ds_cond00";var _d="ds_waitrFamilyList=output1";break;}if(this.fn_validate_tranasaction(_a,_b,_c,_d)==false){return;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){try{this.fn_callback_message(_a,_b,_c);}catch(exception){}var _d=_b==0?true:false;if(_d){switch(_a){case "selectRentCstmrFamilyList":break;}}};});this.on_initEvent=function(){this.addEventHandler("oninit",this.houseCstmrFamily_P02_oninit,this);this.addEventHandler("onload",this.houseCstmrFamily_P02_onload,this);this.div_WORK.grd_hcntrctrFamilyList.addEventHandler("oncelldblclick",this.div_WORK_grd_hcntrctrFamilyList_oncelldblclick,this);this.div_WORK.sta_family00.addEventHandler("onclick",this.div_WORK_Static01_onclick,this);this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);this.btn_confirm.addEventHandler("onclick",this.btn_confirm_onclick,this);};this.loadIncludeScript("houseCstmrFamily_P02.xfdl");};})();