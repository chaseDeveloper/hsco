﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("PRJ040401");this.set_classname("PRJ040401");this.set_titletext("PRJ040401_메뉴제거_심의협의결과내역관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_job",this);_a.set_useclientlayout("1");_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"BSNS_STEP\" type=\"STRING\" size=\"3\"/><Column id=\"JOB_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"CL_SE\" type=\"STRING\" size=\"3\"/><Column id=\"LCLAS_NM\" type=\"STRING\" size=\"100\"/><Column id=\"MLSFC_NM\" type=\"STRING\" size=\"100\"/><Column id=\"SCLAS_NM\" type=\"STRING\" size=\"100\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"JOB_SE\" type=\"STRING\" size=\"3\"/><Column id=\"RM\" type=\"STRING\" size=\"200\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_1",this);_a.set_useclientlayout("1");_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"BSNS_STEP\" type=\"STRING\" size=\"3\"/><Column id=\"JOB_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"SN\" type=\"BIGDECIMAL\" size=\"11\"/><Column id=\"DLBRT_DE\" type=\"STRING\" size=\"8\"/><Column id=\"COMPT_DE\" type=\"STRING\" size=\"8\"/><Column id=\"DLBRT_DTLS\" type=\"STRING\" size=\"200\"/><Column id=\"RELATE_INSTT\" type=\"STRING\" size=\"100\"/><Column id=\"EMPNO_REGISTER\" type=\"STRING\" size=\"8\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"8\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"30\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"30\"/><Column id=\"FILE_SN\" type=\"BIGDECIMAL\" size=\"20\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\"/><Col id=\"colId\"/><Col id=\"notNull\"/><Col id=\"msgId\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond1",this);_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"BSNS_STEP\" type=\"STRING\" size=\"3\"/><Column id=\"JOB_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"SN\" type=\"BIGDECIMAL\" size=\"11\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"8\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"30\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"30\"/><Column id=\"JOB_1_2\" type=\"STRING\" size=\"3\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_PRJ010",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_PRJ014",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_PRJ018",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_BSNS",this);_a.set_useclientlayout("0");_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"string\" size=\"5\"/><Column id=\"BSNS_NM\" type=\"string\" size=\"100\"/><Column id=\"BSNS_ALL_NM\" type=\"string\" size=\"100\"/><Column id=\"BSNS_TY\" type=\"string\" size=\"3\"/><Column id=\"RM\" type=\"string\" size=\"200\"/><Column id=\"STRWRK_DE\" type=\"string\" size=\"8\"/><Column id=\"COMPET_DE\" type=\"string\" size=\"8\"/><Column id=\"BSNS_CONFM_DE\" type=\"string\" size=\"8\"/><Column id=\"MVN_DE\" type=\"string\" size=\"8\"/><Column id=\"RN\" type=\"string\" size=\"8\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("sta_gud_v01","absolute",null,"0","28",null,"0","0",this);_a.set_text("28");_a.set_visible("0");_a.style.set_background("#1b3cd23c");_a.style.set_align("center");this.addChild(_a.name,_a);_a=new Div("div_PRJ","absolute","0","33","280",null,null,"0",this);_a.set_taborder("1");_a.set_url("pms_prj::prjList.xfdl");this.addChild(_a.name,_a);_a=new Div("div_search_b","absolute","1064","0",null,"33","-756",null,this);_a.set_taborder("2");_a.set_cssclass("div_WFSA_Box");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Static("sta_BSNS_STEP","absolute","10","7","62","20",null,null,this.div_search_b);_a.set_text("사업단계");_a.set_cssclass("sta_WFSA_Label");this.div_search_b.addChild(_a.name,_a);_a=new Static("sta_DEPT_NM","absolute","315","7","51","20",null,null,this.div_search_b);_a.set_text("부서명");_a.set_cssclass("sta_WFSA_Label");this.div_search_b.addChild(_a.name,_a);_a=new Static("sta_USER_NM","absolute","468","7","59","20",null,null,this.div_search_b);_a.set_text("담당자명");_a.set_cssclass("sta_WFSA_Label");this.div_search_b.addChild(_a.name,_a);_a=new Combo("cmb_BSNS_STEP","absolute","75","5","100","22",null,null,this.div_search_b);this.div_search_b.addChild(_a.name,_a);_a.set_taborder("1");_a.set_innerdataset("@ds_PRJ014");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_enable("1");_a=new Edit("edt_DEPT_NM","absolute","366","5","80","22",null,null,this.div_search_b);_a.set_taborder("3");_a.set_readonly("1");this.div_search_b.addChild(_a.name,_a);_a=new Edit("edt_USER_NM","absolute","534","5","80","22",null,null,this.div_search_b);_a.set_taborder("4");_a.set_readonly("1");this.div_search_b.addChild(_a.name,_a);_a=new Div("div_work","absolute","280","33",null,null,"28","0",this);_a.set_taborder("3");this.addChild(_a.name,_a);_a=new Div("div_1","absolute","0","0",null,"290","0",null,this.div_work);_a.set_taborder("1");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_job","absolute","0","34",null,null,"0","0",this.div_work.div_1);_a.set_taborder("1");_a.set_binddataset("ds_job");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"업무코드\"/><Cell col=\"1\" text=\"분류구분\"/><Cell col=\"2\" text=\"업무명(대분류)\"/><Cell col=\"3\" text=\"업무명(중분류)\"/><Cell col=\"4\" text=\"업무명(소분류)\"/><Cell col=\"5\" text=\"비고\"/><Cell col=\"6\" text=\"업무구분\"/></Band><Band id=\"body\"><Cell mask=\"@@-@@-@@\" text=\"bind:JOB_CODE\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:CL_SE\" combodataset=\"ds_PRJ010\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"2\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:LCLAS_NM\"/><Cell col=\"3\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:MLSFC_NM\"/><Cell col=\"4\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:SCLAS_NM\"/><Cell col=\"5\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:RM\"/><Cell col=\"6\" displaytype=\"combo\" text=\"bind:JOB_SE\" combodataset=\"ds_PRJ018\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/></Band></Format></Formats>");this.div_work.div_1.addChild(_a.name,_a);_a=new Static("sta_gud_h01","absolute","0","0",null,"10","0",null,this.div_work.div_1);_a.set_taborder("2");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");this.div_work.div_1.addChild(_a.name,_a);_a=new Static("sta_1","absolute","0","11","200","19",null,null,this.div_work.div_1);_a.set_taborder("3");_a.set_text("업무코드 목록");_a.set_cssclass("sta_WF_Title02");this.div_work.div_1.addChild(_a.name,_a);_a=new Static("sta_gud_h02","absolute","0","29",null,"5","0",null,this.div_work.div_1);_a.set_taborder("4");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");this.div_work.div_1.addChild(_a.name,_a);_a=new Div("div_2","absolute","0","290",null,null,"36%","0",this.div_work);_a.set_taborder("3");this.div_work.addChild(_a.name,_a);_a=new Static("sta_gud_h01","absolute","0","0",null,"5","0",null,this.div_work.div_2);_a.set_text("5");_a.set_visible("0");_a.style.set_background("#dc143c3c");this.div_work.div_2.addChild(_a.name,_a);_a=new Static("sta_gud_h02","absolute","0","24",null,"5","0",null,this.div_work.div_2);_a.set_text("5");_a.set_visible("0");_a.style.set_background("#dc143c3c");this.div_work.div_2.addChild(_a.name,_a);_a=new Grid("grd_1","absolute","0","29",null,null,"0","0",this.div_work.div_2);_a.set_taborder("1");_a.set_binddataset("ds_1");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"200\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"25\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"심의일자\"/><Cell col=\"2\" text=\"완료일자\"/><Cell col=\"3\" text=\"심의협의결과내역\"/><Cell col=\"4\" text=\"유관기관\"/><Cell col=\"5\" text=\"등록담당\"/></Band><Band id=\"body\"><Cell text=\"bind:SN\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"date\" style=\"padding: ;\" text=\"bind:DLBRT_DE\" calendardisplay=\"display\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" style=\"padding: ;\" text=\"bind:COMPT_DE\" calendardisplay=\"display\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" edittype=\"text\" style=\"align:left;padding: ;\" text=\"bind:DLBRT_DTLS\" editdisplay=\"display\"/><Cell col=\"4\" edittype=\"text\" style=\"align:left;padding: ;\" text=\"bind:RELATE_INSTT\" editdisplay=\"display\"/><Cell col=\"5\" edittype=\"text\" style=\"align:left;padding: ;\" text=\"bind:EMPNO_REGISTER\" editdisplay=\"display\"/></Band></Format></Formats>");this.div_work.div_2.addChild(_a.name,_a);_a=new Button("btn_11","absolute",null,"5","64","19","67",null,this.div_work.div_2);_a.set_taborder("1");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");_a.set_visible("0");this.div_work.div_2.addChild(_a.name,_a);_a=new Button("btn_12","absolute",null,"5","64","19","0",null,this.div_work.div_2);_a.set_taborder("2");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");_a.set_visible("0");this.div_work.div_2.addChild(_a.name,_a);_a=new Button("btn_13","absolute",null,"5","40","19","138",null,this.div_work.div_2);_a.set_taborder("3");_a.set_text("저장");_a.set_cssclass("btn_WF_Process");_a.set_visible("0");this.div_work.div_2.addChild(_a.name,_a);_a=new Static("sta_1","absolute","0","7","176","19",null,null,this.div_work.div_2);_a.set_taborder("4");_a.set_text("심의내역 목록");_a.set_cssclass("sta_WF_Title02");this.div_work.div_2.addChild(_a.name,_a);_a=new Div("div_3","absolute",null,"290","36%",null,"0","0",this.div_work);_a.set_taborder("4");_a.set_url("pms_prj::prjFiles.xfdl");this.div_work.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("4");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_CL_SE","absolute","15","6","300","20",null,null,this.div_search);_a.set_taborder("5");_a.set_text("사업코드");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_bsns_code","absolute","79","5","300","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("6");_a.set_innerdataset("ds_BSNS");_a.set_codecolumn("BSNS_CODE");_a.set_datacolumn("BSNS_ALL_NM");_a.set_displayrowcount("15");_a=new Static("sta_DEPT_NM","absolute","395","6","51","20",null,null,this.div_search);_a.set_taborder("7");_a.set_text("부서명");_a.set_cssclass("sta_WFSA_Label");_a.set_visible("false");this.div_search.addChild(_a.name,_a);_a=new Static("sta_USER_NM","absolute","548","6","59","20",null,null,this.div_search);_a.set_taborder("8");_a.set_text("담당자명");_a.set_cssclass("sta_WFSA_Label");_a.set_visible("false");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_DEPT_NM","absolute","446","5","80","21",null,null,this.div_search);_a.set_taborder("9");_a.set_readonly("true");_a.set_visible("false");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_USER_NM","absolute","614","5","80","21",null,null,this.div_search);_a.set_taborder("10");_a.set_readonly("true");_a.set_visible("false");this.div_search.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search_b,function(_b){_b.set_taborder("2");_b.set_cssclass("div_WFSA_Box");_b.set_visible("false");});this.div_search_b.addLayout(_a.name,_a);_a=new Layout("default","",0,290,this.div_work.div_1,function(_b){_b.set_taborder("1");});this.div_work.div_1.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work.div_2,function(_b){_b.set_taborder("3");});this.div_work.div_2.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("3");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("4");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("PRJ040401");_b.set_titletext("PRJ040401_메뉴제거_심의협의결과내역관리");});this.addLayout(_a.name,_a);_a=new BindItem("item01","div_search.cmb_BSNS_STEP","value","ds_cond1","BSNS_STEP");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item03","div_search.edt_DEPT_NM","value","ds_1","DEPT_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item04","div_search.edt_USER_NM","value","ds_1","USER_NM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","pms_prj::prjList.xfdl");this._addPreloadList("fdl","pms_prj::prjFiles.xfdl");};this.addIncludeScript("PRJ040401.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("PRJ040401.xfdl",function(){var _a=1;var _b;var _c;this.g_row1;this.PRJ040401_oninit=function(_d,_e){this.form_id=application.gv_curFormId+'_';this.fn_init();this.fn_init_form();this.fn_init_dataset();};this.fn_onFileSuccess=function(_d,_e){this.fn_transaction("mList");};this.PRJ040401_onload=function(_d,_e){var _f=application.gds_userInfo;if(_f.rowcount>0){var _g=this.ds_cond1.rowposition;this.div_search.edt_DEPT_NM.set_value(_f.getColumn(0,"DEPT_NM"));this.div_search.edt_USER_NM.set_value(_f.getColumn(0,"USER_NM"));this.ds_cond1.setColumn(_g,"USER_ID",_f.getColumn(0,"USER_ID"));this.ds_cond1.setColumn(_g,"DEPT_CODE",_f.getColumn(0,"DEPT_CODE"));this.ds_cond1.setColumn(_g,"JOB_1_2",1);}this.fn_loadCombo();};this.fn_init_form=function(){};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);this.checkDs.push(this.ds_1);};this.fn_loadCombo=function(){var _d=[['ds_PRJ010','PRJ010',1,''],['ds_PRJ014','PRJ014',1,''],['ds_PRJ018','PRJ018',1,'']];var _e=null;this.gfn_comboLoad(_d,_e);this.fn_fill_combo(this.div_search.cmb_bsns_code,"hsco/pms/prj/bsnsCdList.do","전체",null);};this.fn_search=function(){var _d=this.div_search.cmb_bsns_code.value;this.div_PRJ.set_BSNS_CODE(_d);this.div_PRJ.fn_search();};this.fn_save=function(){if(this.fn_checkUpdated(0,1)){return;}if(this.gfn_message("confirm.저장.여부")){this.fn_transaction("save");}};this.fn_checkUpdated=function(_d,_e){if(!this.checkDs){return;}for(var _g=0;_g<this.checkDs.length;_g++ ){ds=this.checkDs[_g];if(this.comUtils.isDatasetUpdated(ds)){if(_d){var _f=this.gfn_message("confirm.변경.취소.여부");if(!_f){ds.reset();}return _f;}if(_e){if(!this.gfn_checkValidation(ds,this.ds_validation)){return;}}}}};this.fn_transaction=function(_d){if(this.ds_cond1.rowcount<1){return;}var _e;var _f;var _g="hsco/pms/prj/PRJ040401/"+_d+".do";var _h="input1=ds_cond1";var _i="";switch(_d){case "jobList":_g="hsco/pms/prj/jobList.do";this.ds_cond1.setColumn(0,'BSNS_CODE',this.div_PRJ.getCode());_i="ds_job=output1";break;case "mList":_e=this.ds_job;_f="JOB_CODE=JOB_CODE,";_i="ds_1=output1";break;case "rList":_e=this.ds_1;var _j=_e.getColumn(_e.rowposition,'FILE_SN');var _k=this.div_work.div_3;return _k.fn_fileList(_j);case "save":this.bSave=1;this.g_row1=this.ds_1.rowposition;_h="input1=ds_1:U";break;}if(_f){this.ds_cond1.copyRow(0,_e,_e.rowposition,_f);}switch(_d){case "jobList":this.ds_job.clearData();case "mList":this.ds_1.clearData();break;}Ex.core.tran(this,_d,_g,_h,_i);this.bSave=0;};this.fn_callBack=function(_d,_e,_f){if(_e!=0){return this.gfn_callback_message(_d,_e,_f);}switch(_d){case "save":this.ds_1.applyChange();break;}};this.fn_insert=function(_d){this.fn_insertDS(this.ds_1);};this.fn_delete=function(_d){this.fn_deleteDS(this.ds_1);};this.fn_insertDS=function(_d){var _e;var _f;var _g=_d.addRow();switch(_d){case this.ds_1:_e=this.ds_job;_f="BSNS_CODE=BSNS_CODE,"+"BSNS_STEP=BSNS_STEP,"+"JOB_CODE=JOB_CODE,";var _h=this.gfn_today();_d.setColumn(_g,'DLBRT_DE',_h);_d.setColumn(_g,'COMPT_DE',_h);var _i=(_g<1)?'1':''+(1+parseInt(_d.getColumn(_g-1,'SN')));_d.setColumn(_g,'SN',_i);break;}_d.copyRow(_g,_e,_e.rowposition,_f);};this.fn_deleteDS=function(_d){_d.deleteRow(_d.rowposition);};this.ds_canrowposchange=function(_d,_e){if(this.bSave){return 1;}if(this.fn_checkUpdated(1)){return false;}};this.ds_onrowposchanged=function(_d,_e){if(_d.rowcount<1){return;}switch(_d){case this.div_PRJ.ds_PRJ:var _f=this.div_PRJ.getCode();application.setPrivateProfile(this.form_id+'BSNS_CODE',_f);return this.fn_transaction("jobList");case this.ds_job:return this.fn_transaction("mList");case this.ds_1:return this.fn_transaction("rList");}};this.ds_cancolumnchange=function(_d,_e){var _f;var _g=_e.newvalue;switch(_e.columnid){case 'SN':_f=_e.columnid;break;default:return;}var _h=_d.findRowExpr(_f+" == '"+_g+"'");if( -1<_h){alert('중복 오류 : '+_g);return false;}};});this.on_initEvent=function(){this.ds_job.addEventHandler("onrowposchanged",this.ds_onrowposchanged,this);this.ds_job.addEventHandler("canrowposchange",this.ds_canrowposchange,this);this.ds_1.addEventHandler("onrowposchanged",this.ds_onrowposchanged,this);this.ds_BSNS.addEventHandler("onrowposchanged",this.ds_onrowposchanged,this);this.ds_BSNS.addEventHandler("canrowposchange",this.ds_canrowposchange,this);this.addEventHandler("onload",this.PRJ040401_onload,this);this.addEventHandler("oninit",this.PRJ040401_oninit,this);this.div_search_b.cmb_BSNS_STEP.addEventHandler("onitemchanged",this.fn_search,this);this.div_work.div_2.btn_11.addEventHandler("onclick",this.btn_11_onclick,this);this.div_work.div_2.btn_12.addEventHandler("onclick",this.btn_12_onclick,this);this.div_work.div_2.btn_13.addEventHandler("onclick",this.btn_13_onclick,this);};this.loadIncludeScript("PRJ040401.xfdl");this.loadPreloadList();};})();