﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("PRJ020203");this.set_classname("PRJ020203");this.set_titletext("PRJ020203_사업개발업무추진관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_job",this);_a.set_useclientlayout("1");_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"BSNS_STEP\" type=\"STRING\" size=\"3\"/><Column id=\"JOB_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"CL_SE\" type=\"STRING\" size=\"3\"/><Column id=\"LCLAS_NM\" type=\"STRING\" size=\"100\"/><Column id=\"MLSFC_NM\" type=\"STRING\" size=\"100\"/><Column id=\"SCLAS_NM\" type=\"STRING\" size=\"100\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"JOB_SE\" type=\"STRING\" size=\"3\"/><Column id=\"RM\" type=\"STRING\" size=\"200\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_1",this);_a.set_useclientlayout("1");_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"BSNS_STEP\" type=\"STRING\" size=\"3\"/><Column id=\"JOB_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"SN\" type=\"BIGDECIMAL\" size=\"11\"/><Column id=\"PRTN_DTLS\" type=\"STRING\" size=\"100\"/><Column id=\"BGNDE_PLAN\" type=\"STRING\" size=\"8\"/><Column id=\"COMPT_DE_PLAN\" type=\"STRING\" size=\"8\"/><Column id=\"BGNDE_ACMSLT\" type=\"STRING\" size=\"8\"/><Column id=\"COMPT_DE_ACMSLT\" type=\"STRING\" size=\"8\"/><Column id=\"DELAY_PRVONSH\" type=\"STRING\" size=\"100\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"8\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"30\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"30\"/><Column id=\"FILE_SN\" type=\"BIGDECIMAL\" size=\"20\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_1</Col><Col id=\"colId\">BGNDE_PLAN</Col><Col id=\"msgId\">계획</Col><Col id=\"to\">COMPT_DE_PLAN</Col></Row><Row><Col id=\"compId\">ds_1</Col><Col id=\"colId\">BGNDE_ACMSLT</Col><Col id=\"msgId\">실적</Col><Col id=\"to\">COMPT_DE_ACMSLT</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond1",this);_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"BSNS_STEP\" type=\"STRING\" size=\"3\"/><Column id=\"JOB_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"SN\" type=\"BIGDECIMAL\" size=\"11\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"8\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"30\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"30\"/><Column id=\"ADMIN_YN\" type=\"STRING\" size=\"1\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_PRJ010",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_PRJ014",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_PRJ018",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Static("sta_gud_v01","absolute",null,"0","28",null,"0","0",this);_a.set_text("28");_a.set_visible("0");_a.style.set_background("#1b3cd23c");_a.style.set_align("center");this.addChild(_a.name,_a);_a=new Div("div_PRJ","absolute","0","0","280",null,null,"0",this);_a.set_taborder("1");_a.set_url("pms_prj::prjList.xfdl");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","280","0",null,"33","28",null,this);_a.set_taborder("2");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_BSNS_STEP","absolute","10","7","62","20",null,null,this.div_search);_a.set_text("사업단계");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_DEPT_NM","absolute","315","7","51","20",null,null,this.div_search);_a.set_text("부서명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_USER_NM","absolute","468","7","59","20",null,null,this.div_search);_a.set_text("담당자명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_BSNS_STEP","absolute","75","5","100","22",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_innerdataset("@ds_PRJ014");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_enable("0");_a=new Edit("edt_DEPT_NM","absolute","366","5","80","22",null,null,this.div_search);_a.set_taborder("3");_a.set_readonly("1");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_USER_NM","absolute","534","5","80","22",null,null,this.div_search);_a.set_taborder("4");_a.set_readonly("1");this.div_search.addChild(_a.name,_a);_a=new CheckBox("chkAdmin","absolute",null,"5","60","21","15",null,this.div_search);_a.set_taborder("99");_a.set_text("관리자");_a.set_truevalue("1");_a.set_falsevalue("0");_a.set_visible("0");this.div_search.addChild(_a.name,_a);_a=new Div("div_work","absolute","280","33",null,null,"28","0",this);_a.set_taborder("3");this.addChild(_a.name,_a);_a=new Div("div_1","absolute","0","0",null,"290","0",null,this.div_work);_a.set_taborder("1");this.div_work.addChild(_a.name,_a);_a=new Static("sta_gud_h01","absolute","0","0",null,"5","0",null,this.div_work.div_1);_a.set_text("5");_a.set_visible("0");_a.style.set_background("#dc143c3c");this.div_work.div_1.addChild(_a.name,_a);_a=new Grid("grd_job","absolute","0","5",null,null,"0","0",this.div_work.div_1);_a.set_taborder("1");_a.set_binddataset("ds_job");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"업무코드\"/><Cell col=\"1\" text=\"분류구분\"/><Cell col=\"2\" text=\"업무명(대분류)\"/><Cell col=\"3\" text=\"업무명(중분류)\"/><Cell col=\"4\" text=\"업무명(소분류)\"/><Cell col=\"5\" text=\"비고\"/><Cell col=\"6\" text=\"업무구분\"/></Band><Band id=\"body\"><Cell mask=\"@@-@@-@@\" text=\"bind:JOB_CODE\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:CL_SE\" combodataset=\"ds_PRJ010\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"2\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:LCLAS_NM\"/><Cell col=\"3\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:MLSFC_NM\"/><Cell col=\"4\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:SCLAS_NM\"/><Cell col=\"5\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:RM\"/><Cell col=\"6\" displaytype=\"combo\" text=\"bind:JOB_SE\" combodataset=\"ds_PRJ018\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/></Band></Format></Formats>");this.div_work.div_1.addChild(_a.name,_a);_a=new Div("div_2","absolute","0","290",null,null,"36%","110",this.div_work);_a.set_taborder("3");this.div_work.addChild(_a.name,_a);_a=new Static("sta_gud_h01","absolute","0","0",null,"5","0",null,this.div_work.div_2);_a.set_text("5");_a.set_visible("0");_a.style.set_background("#dc143c3c");this.div_work.div_2.addChild(_a.name,_a);_a=new Static("sta_gud_h02","absolute","0","24",null,"5","0",null,this.div_work.div_2);_a.set_text("5");_a.set_visible("0");_a.style.set_background("#dc143c3c");this.div_work.div_2.addChild(_a.name,_a);_a=new Grid("grd_1","absolute","0","29",null,null,"0","0",this.div_work.div_2);_a.set_taborder("1");_a.set_binddataset("ds_1");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"18\" band=\"head\"/><Row size=\"18\" band=\"head\"/><Row size=\"25\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\" cssclass=\"Cellgrd_WF_HeadEssential\"/><Cell col=\"1\" rowspan=\"2\" text=\"추진내역\"/><Cell col=\"2\" colspan=\"2\" text=\"계획일정\"/><Cell col=\"4\" colspan=\"2\" text=\"실적일정\"/><Cell row=\"1\" col=\"2\" text=\"시작일자\"/><Cell row=\"1\" col=\"3\" text=\"완료일자\"/><Cell row=\"1\" col=\"4\" text=\"시작일자\"/><Cell row=\"1\" col=\"5\" text=\"완료일자\"/></Band><Band id=\"body\"><Cell edittype2=\"normal\" expr=\"currow+1\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:PRTN_DTLS\" editimemode=\"hangul\" editlimit=\"0\" editautoselect=\"1\" style=\"align:left;padding:0 5 0 5;\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" text=\"bind:BGNDE_PLAN\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" text=\"bind:COMPT_DE_PLAN\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" text=\"bind:BGNDE_ACMSLT\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"date\" text=\"bind:COMPT_DE_ACMSLT\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");this.div_work.div_2.addChild(_a.name,_a);_a=new Button("btn_11","absolute",null,"5","60","19","67",null,this.div_work.div_2);_a.set_taborder("1");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");_a.set_visible("0");this.div_work.div_2.addChild(_a.name,_a);_a=new Button("btn_12","absolute",null,"5","64","19","0",null,this.div_work.div_2);_a.set_taborder("2");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");_a.set_visible("0");this.div_work.div_2.addChild(_a.name,_a);_a=new Button("btn_13","absolute",null,"5","40","19","130",null,this.div_work.div_2);_a.set_taborder("3");_a.set_text("저장");_a.set_cssclass("btn_WF_Process");_a.set_visible("0");this.div_work.div_2.addChild(_a.name,_a);_a=new Div("div_3","absolute",null,"290","36%",null,"0","110",this.div_work);_a.set_taborder("4");_a.set_url("pms_prj::prjFiles.xfdl");this.div_work.addChild(_a.name,_a);_a=new Div("div_4","absolute","0",null,null,"110","0","0",this.div_work);_a.set_taborder("5");this.div_work.addChild(_a.name,_a);_a=new Static("sta_gud_h01","absolute","0","0",null,"5","0",null,this.div_work.div_4);_a.set_text("5");_a.set_visible("0");_a.style.set_background("#dc143c3c");this.div_work.div_4.addChild(_a.name,_a);_a=new Static("sta_gud_h02","absolute","0","24",null,"5","0",null,this.div_work.div_4);_a.set_text("5");_a.set_visible("0");_a.style.set_background("#dc143c3c");this.div_work.div_4.addChild(_a.name,_a);_a=new Static("sta_1","absolute","0","5",null,"19","0",null,this.div_work.div_4);_a.set_text("비망사항정리 및 일정지연사유");_a.set_cssclass("sta_GID_Title");_a.style.set_align("center middle");this.div_work.div_4.addChild(_a.name,_a);_a=new TextArea("edt_DELAY_PRVONSH","absolute","0","29",null,null,"0","0",this.div_work.div_4);_a.set_taborder("66");_a.style.set_padding("5 5 5 5");_a.style.set_align("left top");_a.set_imemode("hangul");_a.set_maxlength("100");this.div_work.div_4.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("2");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,290,this.div_work.div_1,function(_b){_b.set_taborder("1");});this.div_work.div_1.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work.div_2,function(_b){_b.set_taborder("3");});this.div_work.div_2.addLayout(_a.name,_a);_a=new Layout("default","",0,110,this.div_work.div_4,function(_b){_b.set_taborder("5");});this.div_work.div_4.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("3");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("PRJ020203");_b.set_titletext("PRJ020203_사업개발업무추진관리");});this.addLayout(_a.name,_a);_a=new BindItem("item01","div_search.cmb_BSNS_STEP","value","ds_cond1","BSNS_STEP");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item03","div_search.edt_DEPT_NM","value","ds_1","DEPT_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item04","div_search.edt_USER_NM","value","ds_1","USER_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item11","div_work.div_4.edt_DELAY_PRVONSH","value","ds_1","DELAY_PRVONSH");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item98","div_search.chkAdmin","value","ds_cond1","ADMIN_YN");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","pms_prj::prjList.xfdl");this._addPreloadList("fdl","pms_prj::prjFiles.xfdl");};this.addIncludeScript("PRJ020203.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("PRJ020203.xfdl",function(){var _a=1;var _b;var _c;this.g_row1;this.PRJ020203_oninit=function(_d,_e){this.form_id=application.gv_curFormId+'_';var _f={sysSe:'PMS',jobSe:'PRJ',pForm:this,ds_M:this.ds_1,autofittype:'col',col_sizes:[0,30,00,0,220,00],fn_save:this.fn_save,onSuccess:this.fn_onFileSuccess};this.ds_2=this.div_work.div_3.fn_postInit(_f);this.fn_init();this.fn_init_form();this.fn_init_dataset();};this.fn_onFileSuccess=function(_d,_e){this.fn_transaction("mList");};this.PRJ020203_onload=function(_d,_e){var _f=application.gds_userInfo;if(_f.rowcount>0){var _g=this.ds_cond1;var _h=_g.rowposition;this.div_search.edt_DEPT_NM.set_value(_f.getColumn(0,"DEPT_NM"));this.div_search.edt_USER_NM.set_value(_f.getColumn(0,"USER_NM"));_g.setColumn(_h,"USER_ID",_f.getColumn(0,"USER_ID"));_g.setColumn(_h,"DEPT_CODE",_f.getColumn(0,"DEPT_CODE"));}this.fn_loadCombo();};this.fn_init_form=function(){};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);this.checkDs.push(this.ds_1);this.checkDs.push(this.ds_2);};this.fn_loadCombo=function(){var _d=[['ds_PRJ010','PRJ010',1,''],['ds_PRJ014','PRJ014',1,''],['ds_PRJ018','PRJ018',1,'']];var _e=function(_f,_g,_h){if(_b){this.div_PRJ.set_index(_b);_c=application.getPrivateProfile(this.form_id+'BSNS_CODE');}this.div_search.cmb_BSNS_STEP.set_value(_a);this.div_PRJ.fn_search(_c);};this.gfn_comboLoad(_d,_e);};this.fn_search=function(){if(!this.gfn_checkValidation(this.div_search,this.ds_validation)){return;}this.fn_transaction("jobList");};this.fn_save=function(){if(this.fn_checkUpdated(0,1)){return;}if(this.gfn_message("confirm.저장.여부")){this.fn_transaction("save");}};this.fn_checkUpdated=function(_d,_e){if(!this.checkDs){return;}for(var _g=0;_g<this.checkDs.length;_g++ ){ds=this.checkDs[_g];if(this.comUtils.isDatasetUpdated(ds)){if(_d){var _f=this.gfn_message("confirm.변경.취소.여부");if(!_f){ds.reset();}return _f;}if(_e){if(!this.gfn_checkValidation(ds,this.ds_validation)){return;}}}}};this.fn_transaction=function(_d){if(this.ds_cond1.rowcount<1){return;}var _e;var _f;var _g="hsco/pms/prj/PRJ020203/"+_d+".do";var _h="input1=ds_cond1";var _i="";switch(_d){case "jobList":_g="hsco/pms/prj/jobList.do";this.ds_cond1.setColumn(0,'BSNS_CODE',this.div_PRJ.getCode());_i="ds_job=output1";break;case "mList":_e=this.ds_job;_f="JOB_CODE=JOB_CODE,";_i="ds_1=output1";break;case "rList":_e=this.ds_1;var _j=_e.getColumn(_e.rowposition,'FILE_SN');var _k=this.div_work.div_3;return _k.fn_fileList(_j);case "save":this.bSave=1;this.g_row1=this.ds_1.rowposition;_h="input1=ds_1:U";_h+=" inputF=ds_2:U";var _k=this.div_work.div_3;if(_k.fn_upload(_g,_h,'')){return;}break;}if(_f){this.ds_cond1.copyRow(0,_e,_e.rowposition,_f);}switch(_d){case "jobList":this.ds_job.clearData();case "mList":this.ds_1.clearData();case "rList":this.ds_2.clearData();break;}Ex.core.tran(this,_d,_g,_h,_i);this.bSave=0;};this.fn_callBack=function(_d,_e,_f){this.debug("fn_callBack() - "+_d+','+_e+','+_f);if(_e!=0){return this.gfn_callback_message(_d,_e,_f);}switch(_d){case "mList":if(this.g_row1){this.ds_1.set_rowposition(this.g_row1);this.g_row1=null;}break;case "rList":break;case "save":this.fn_transaction("mList");break;}};this.fn_insert=function(_d){this.fn_insertDS(this.ds_1);};this.fn_delete=function(_d){this.fn_deleteDS(this.ds_1);};this.fn_insertDS=function(_d){var _e;var _f;var _g=_d.addRow();switch(_d){case this.ds_1:_e=this.ds_job;_f="BSNS_CODE=BSNS_CODE,"+"BSNS_STEP=BSNS_STEP,"+"JOB_CODE=JOB_CODE,";var _h=this.gfn_today();_d.setColumn(_g,'BGNDE_PLAN',_h);_d.setColumn(_g,'COMPT_DE_PLAN',_h);_d.setColumn(_g,'BGNDE_ACMSLT',_h);_d.setColumn(_g,'COMPT_DE_ACMSLT',_h);var _i=(_g<1)?'1':''+(1+parseInt(_d.getColumn(_g-1,'SN')));_d.setColumn(_g,'SN',_i);break;}_d.copyRow(_g,_e,_e.rowposition,_f);};this.fn_deleteDS=function(_d){_d.deleteRow(_d.rowposition);};this.ds_canrowposchange=function(_d,_e){if(this.bSave){return 1;}if(this.fn_checkUpdated(1)){return false;}};this.ds_onrowposchanged=function(_d,_e){this.debug('onrow:'+_d.name);if(_d.rowcount<1){return;}switch(_d){case this.div_PRJ.ds_PRJ:var _f=this.div_PRJ.getCode();application.setPrivateProfile(this.form_id+'BSNS_CODE',_f);return this.fn_transaction("jobList");case this.ds_job:return this.fn_transaction("mList");case this.ds_1:return this.fn_transaction("rList");}};this.ds_cancolumnchange=function(_d,_e){var _f;var _g=_e.newvalue;switch(_e.columnid){case 'SN':_f=_e.columnid;break;default:return;}var _h=_d.findRowExpr(_f+" == '"+_g+"'");if( -1<_h){alert('중복 오류 : '+_g);return false;}};});this.on_initEvent=function(){this.ds_job.addEventHandler("onrowposchanged",this.ds_onrowposchanged,this);this.ds_job.addEventHandler("canrowposchange",this.ds_canrowposchange,this);this.ds_1.addEventHandler("onrowposchanged",this.ds_onrowposchanged,this);this.ds_1.addEventHandler("canrowposchange",this.ds_canrowposchange,this);this.addEventHandler("onload",this.PRJ020203_onload,this);this.addEventHandler("oninit",this.PRJ020203_oninit,this);this.div_search.cmb_BSNS_STEP.addEventHandler("onitemchanged",this.fn_search,this);this.div_search.chkAdmin.addEventHandler("onchanged",this.fn_search,this);this.div_work.div_2.btn_11.addEventHandler("onclick",this.btn_11_onclick,this);this.div_work.div_2.btn_12.addEventHandler("onclick",this.btn_12_onclick,this);this.div_work.div_2.btn_13.addEventHandler("onclick",this.btn_13_onclick,this);};this.loadIncludeScript("PRJ020203.xfdl");this.loadPreloadList();};})();