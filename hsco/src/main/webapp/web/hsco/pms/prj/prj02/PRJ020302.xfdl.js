﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("PRJ020302");this.set_classname("PRJ020302");this.set_titletext("PRJ020302_추정원가산정관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_1",this);_a.set_useclientlayout("1");_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"STD_PRMPC_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"CL_SE\" type=\"STRING\" size=\"3\"/><Column id=\"QY\" type=\"BIGDECIMAL\" size=\"12\"/><Column id=\"UNTPC\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"UNIT_NM\" type=\"STRING\" size=\"15\"/><Column id=\"ODR\" type=\"BIGDECIMAL\" size=\"3\"/><Column id=\"AMT2\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"EX2\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ODR2\" type=\"BIGDECIMAL\" size=\"3\"/><Column id=\"AMT1\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"EX1\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AMTD\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"100\"/><Column id=\"S_AMT2\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"S_AMT1\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_2",this);_a.set_useclientlayout("1");_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"BSNS_STEP\" type=\"STRING\" size=\"2\"/><Column id=\"ODR\" type=\"BIGDECIMAL\" size=\"3\"/><Column id=\"STD_PRMPC_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"YRYC\" type=\"BIGDECIMAL\" size=\"3\"/><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"AMT2\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AMT1\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AMTD\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_3",this);_a.set_useclientlayout("1");_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"STD_PRMPC_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"RATE_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"EXPENS_RT_SBJECT\" type=\"STRING\" size=\"100\"/><Column id=\"COMPUT_RATE\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"EX1\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"EX2\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\"/><Col id=\"colId\"/><Col id=\"notNull\"/><Col id=\"msgId\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond1",this);_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"BSNS_TY\" type=\"STRING\" size=\"5\"/><Column id=\"APPLC_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"STD_PRMPC_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"STRWRK_DE\" type=\"string\" size=\"8\"/><Column id=\"COMPET_DE\" type=\"string\" size=\"8\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_PRJ010",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_PRJ012",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Static("sta_gud_v01","absolute",null,"0","28",null,"0","0",this);_a.set_text("28");_a.set_visible("0");_a.style.set_background("#1b3cd23c");_a.style.set_align("center");this.addChild(_a.name,_a);_a=new Div("div_PRJ","absolute","0","0","280",null,null,"0",this);_a.set_taborder("1");_a.set_url("pms_prj::prjList.xfdl");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","280","0",null,"33","28",null,this);_a.set_taborder("2");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_1","absolute","15","7","61","20",null,null,this.div_search);_a.set_text("사업유형");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_2","absolute","192","7","61","20",null,null,this.div_search);_a.set_text("사업기간");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_3","absolute","351","7","20","20",null,null,this.div_search);_a.set_text("~");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_1","absolute","78","6","84","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_innerdataset("@ds_PRJ012");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_enable("0");_a=new Calendar("cal_2","absolute","255","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("4");_a.set_dateformat("yyyy-MM-dd");_a.set_enable("0");_a=new Calendar("cal_3","absolute","371","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("5");_a.set_dateformat("yyyy-MM-dd");_a.set_enable("0");_a=new Static("sta_4","absolute","500","6","62","20",null,null,this.div_search);_a.set_taborder("6");_a.set_text("기준년도");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_1","absolute","566","5","80","21",null,null,this.div_search);_a.set_taborder("7");this.div_search.addChild(_a.name,_a);_a=new Button("btn_make","absolute",null,"5","40","21","5",null,this.div_search);_a.set_taborder("90");_a.set_text("생성");_a.set_cssclass("btn_WF_Process");this.div_search.addChild(_a.name,_a);_a=new CheckBox("chkSrc","absolute",null,"5","50","21","50",null,this.div_search);_a.set_taborder("99");_a.set_text("원장");_a.set_truevalue("1");_a.set_falsevalue("0");_a.set_visible("0");this.div_search.addChild(_a.name,_a);_a=new Div("div_work","absolute","280","33",null,null,"28","0",this);_a.set_taborder("3");this.addChild(_a.name,_a);_a=new Grid("grd_1","absolute","0","5",null,"390","0",null,this.div_work);_a.set_taborder("1");_a.set_binddataset("ds_1");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"90\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"50\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"50\"/><Column size=\"65\"/></Columns><Rows><Row size=\"18\" band=\"head\"/><Row size=\"18\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"원가&#13;&#10;코드\"/><Cell col=\"1\" rowspan=\"2\" text=\"분류&#13;&#10;구분\"/><Cell col=\"2\" rowspan=\"2\" text=\"원가항목명\"/><Cell col=\"3\" rowspan=\"2\" text=\"수량\"/><Cell col=\"4\" rowspan=\"2\" text=\"단위\"/><Cell col=\"5\" rowspan=\"2\" text=\"단가&#13;&#10;(원)\"/><Cell col=\"6\" colspan=\"3\" text=\"설계단계(억원)\"/><Cell col=\"9\" colspan=\"3\" text=\"개발단계(억원)\"/><Cell col=\"12\" rowspan=\"2\" text=\"차액(억원)\"/><Cell row=\"1\" col=\"6\" text=\"직접원가\"/><Cell row=\"1\" col=\"7\" text=\"제경비외\"/><Cell row=\"1\" col=\"8\" text=\"합계\"/><Cell row=\"1\" col=\"9\" text=\"직접원가\"/><Cell row=\"1\" col=\"10\" text=\"제경비외\"/><Cell row=\"1\" col=\"11\" text=\"합계\"/></Band><Band id=\"body\"><Cell text=\"bind:STD_PRMPC_CODE\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:CL_SE\" combodataset=\"ds_PRJ010\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"2\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:CODE_NM\"/><Cell col=\"3\" style=\"align:right;padding:0 5 0 5;\" displaytype=\"number\" mask=\"#,##0\" text=\"bind:QY\"/><Cell col=\"4\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:UNIT_NM\"/><Cell col=\"5\" style=\"align:right;padding:0 5 0 5;\" displaytype=\"number\" mask=\"#,##0\" text=\"bind:UNTPC\"/><Cell col=\"6\" style=\"align:right;padding:0 5 0 5;\" displaytype=\"number\" mask=\"#,##0.00\" text=\"bind:AMT2\"/><Cell col=\"7\" style=\"align:right;padding:0 5 0 5;\" displaytype=\"number\" mask=\"#,##0.00\" text=\"bind:EX2\"/><Cell col=\"8\" style=\"align:right;padding:0 5 0 5;\" displaytype=\"number\" mask=\"#,##0.00\" text=\"bind:S_AMT2\"/><Cell col=\"9\" style=\"align:right;padding:0 5 0 5;\" displaytype=\"number\" mask=\"#,##0.00\" text=\"bind:AMT1\"/><Cell col=\"10\" style=\"align:right;padding:0 5 0 5;\" displaytype=\"number\" mask=\"#,##0.00\" text=\"bind:EX1\"/><Cell col=\"11\" style=\"align:right;padding:0 5 0 5;\" displaytype=\"number\" mask=\"#,##0.00\" text=\"bind:S_AMT1\"/><Cell col=\"12\" style=\"align:right;padding:0 5 0 5;\" displaytype=\"number\" mask=\"#,##0.00\" text=\"bind:AMTD\"/></Band><Band id=\"summary\"><Cell colspan=\"6\" text=\"합계\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0.00\" expr=\"dataset.getSum('parseFloat(AMT2)||0')\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0.00\" expr=\"dataset.getSum('parseFloat(EX2)||0')\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0.00\" expr=\"dataset.getSum('parseFloat(S_AMT2)||0')\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0.00\" expr=\"dataset.getSum('parseFloat(AMT1)||0')\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0.00\" expr=\"dataset.getSum('parseFloat(EX1)||0')\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0.00\" expr=\"dataset.getSum('parseFloat(S_AMT1)||0')\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0.00\" expr=\"dataset.getSum('parseFloat(AMTD)||0')\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Div("div_2","absolute","0","400","50%",null,null,"0",this.div_work);_a.set_taborder("3");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_2","absolute","0","0",null,null,"0","0",this.div_work.div_2);_a.set_taborder("1");_a.set_binddataset("ds_2");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"36\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"연차\"/><Cell col=\"1\" text=\"연도\"/><Cell col=\"2\" text=\"설계단계&#13;&#10;금액(억원)\"/><Cell col=\"3\" text=\"개발단계&#13;&#10;금액(억원)\"/><Cell col=\"4\" text=\"차액(억원)\"/></Band><Band id=\"body\"><Cell text=\"bind:YRYC\"/><Cell col=\"1\" text=\"bind:YEAR\"/><Cell col=\"2\" style=\"align:right;padding:0 5 0 5;\" displaytype=\"number\" mask=\"#,##0.00\" text=\"bind:AMT2\"/><Cell col=\"3\" style=\"align:right;padding:0 5 0 5;\" displaytype=\"number\" mask=\"#,##0.00\" text=\"bind:AMT1\"/><Cell col=\"4\" style=\"align:right;padding:0 5 0 5;\" displaytype=\"number\" mask=\"#,##0.00\" text=\"bind:AMTD\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합계\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0.00\" expr=\"dataset.getSum('parseFloat(AMT2)||0')\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0.00\" expr=\"dataset.getSum('parseFloat(AMT1)||0')\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0.00\" expr=\"dataset.getSum('parseFloat(AMTD)||0')\"/></Band></Format></Formats>");this.div_work.div_2.addChild(_a.name,_a);_a=new Div("div_3","absolute","50%","400",null,null,"0","0",this.div_work);_a.set_taborder("4");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_3","absolute","10","0",null,null,"0","0",this.div_work.div_3);_a.set_taborder("1");_a.set_binddataset("ds_3");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"0\"/><Column size=\"90\"/></Columns><Rows><Row size=\"36\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"비율코드\"/><Cell col=\"1\" text=\"제경비율과목\"/><Cell col=\"2\" text=\"적용비율\"/><Cell col=\"3\" text=\"금액(억원)\"/><Cell col=\"4\" text=\"산출금액(억원)\"/></Band><Band id=\"body\"><Cell text=\"bind:RATE_CODE\"/><Cell col=\"1\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:EXPENS_RT_SBJECT\"/><Cell col=\"2\" style=\"align:right;padding:0 5 0 5;\" displaytype=\"number\" mask=\"#,##0.00\" text=\"bind:COMPUT_RATE\"/><Cell col=\"3\" style=\"align:right;padding:0 5 0 5;\" displaytype=\"number\" mask=\"#,##0.00\" text=\"bind:EX1\"/><Cell col=\"4\" style=\"align:right;padding:0 5 0 5;\" displaytype=\"number\" mask=\"#,##0.00\" text=\"bind:EX2\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합계\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0.00\" expr=\"dataset.getSum('parseFloat(COMPUT_RATE)||0')\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0.00\" expr=\"dataset.getSum('parseFloat(EX1)||0')\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0.00\" expr=\"dataset.getSum('parseFloat(EX2)||0')\"/></Band></Format></Formats>");this.div_work.div_3.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("2");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work.div_2,function(_b){_b.set_taborder("3");});this.div_work.div_2.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work.div_3,function(_b){_b.set_taborder("4");});this.div_work.div_3.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("3");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("PRJ020302");_b.set_titletext("PRJ020302_추정원가산정관리");});this.addLayout(_a.name,_a);_a=new BindItem("item01","div_search.cmb_1","value","ds_cond1","BSNS_TY");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item02","div_search.cal_2","value","ds_cond1","STRWRK_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item03","div_search.cal_3","value","ds_cond1","COMPET_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item99","div_search.chkSrc","value","ds_cond1","DATA_SRC");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","pms_prj::prjList.xfdl");};this.addIncludeScript("PRJ020302.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("PRJ020302.xfdl",function(){var _a;var _b;this.PRJ020302_oninit=function(_c,_d){this.fn_init();this.fn_init_form();this.fn_init_dataset();this.form_id=application.gv_curFormId+'_';};this.PRJ020302_onload=function(_c,_d){this.fn_loadCombo();};this.fn_init_form=function(){};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);this.checkDs.push(this.ds_1);this.checkDs.push(this.ds_2);};this.fn_loadCombo=function(){var _c=this.gfn_today().substr(0,6);var _d=parseInt(_c.substr(0,4))-1;if(4>parseInt(_c.substr(4,2))){_d-=1;}this.debug('yr:'+_c.substr(4,2));this.div_search.spn_1.set_value(_d);var _e=[['ds_PRJ010','PRJ010',1,''],['ds_PRJ012','PRJ012',1,'']];var _f=function(_g,_h,_i){if(_a){this.div_PRJ.set_index(_a);_b=application.getPrivateProfile(this.form_id+'BSNS_CODE');}this.div_PRJ.fn_search(_b);};this.gfn_comboLoad(_e,_f);};this.fn_search=function(){if(!this.gfn_checkValidation(this.div_search,this.ds_validation)){return;}this.fn_transaction("mList");};this.fn_save=function(){if(this.gfn_message("confirm.저장.여부")){this.fn_transaction("save");}};this.fn_make=function(){if(this.gfn_message("confirm.생성.여부","||")){this.fn_transaction("make");}};this.fn_transaction=function(_c){if(this.ds_cond1.rowcount<1){return;}var _d;var _e;var _f="hsco/pms/prj/PRJ020302/"+_c+".do";var _g="input1=ds_cond1";var _h="";switch(_c){case "mList":_d=this.div_PRJ.ds_PRJ;this.ds_cond1.setColumn(0,'APPLC_YEAR',this.div_search.spn_1.value);_h="ds_1=output1";break;case "rList":_d=this.ds_1;_e="BSNS_CODE=BSNS_CODE,"+"STD_PRMPC_CODE=STD_PRMPC_CODE,";_h="ds_2=output1";break;case "r2List":_d=this.ds_1;_e="BSNS_CODE=BSNS_CODE,"+"STD_PRMPC_CODE=STD_PRMPC_CODE,"+"APPLC_YEAR=APPLC_YEAR,";_h="ds_3=output1";break;case "save":_g="input1=ds_1:U";_g+=" input2=ds_2:U";break;case "make":ds=this.ds_cond1;_g="input1=ds_cond1";}this.fn_clearData(_c);if(_e){this.ds_cond1.copyRow(0,_d,_d.rowposition,_e);}Ex.core.tran(this,_c,_f,_g,_h);};this.fn_clearData=function(_c){switch(_c){case "cdList":this.ds_cd.clearData();case "mList":this.ds_1.clearData();case "rList":this.ds_2.clearData();case "r2List":this.ds_3.clearData();break;}};this.fn_callBack=function(_c,_d,_e){this.debug("fn_callBack() - "+_c+','+_d+','+_e);if(_d!=0){return this.gfn_callback_message(_c,_d,_e);}switch(_c){case "mList":break;case "rList":this.fn_transaction("r2List");break;case "save":case "make":this.fn_search();break;}};this.ds_onrowposchanged=function(_c,_d){this.debug('onrow:'+_c.name);if(_c.rowcount<1){return;}switch(_c){case this.div_PRJ.ds_PRJ:var _e="BSNS_CODE=BSNS_CODE,"+"BSNS_TY=BSNS_TY,"+"STRWRK_DE=STRWRK_DE,"+"COMPET_DE=COMPET_DE,";;var _f=this.ds_cond1;_f.copyRow(0,_c,_c.rowposition,_e);var _g=this.div_PRJ.getCode();application.setPrivateProfile(this.form_id+'BSNS_CODE',_g);return this.fn_transaction("mList");break;case this.ds_1:return this.fn_transaction("rList");}};});this.on_initEvent=function(){this.ds_1.addEventHandler("onrowposchanged",this.ds_onrowposchanged,this);this.addEventHandler("onload",this.PRJ020302_onload,this);this.addEventHandler("oninit",this.PRJ020302_oninit,this);this.div_search.spn_1.addEventHandler("onspin",this.fn_search,this);this.div_search.btn_make.addEventHandler("onclick",this.fn_make,this);this.div_search.chkSrc.addEventHandler("onchanged",this.fn_search,this);};this.loadIncludeScript("PRJ020302.xfdl");this.loadPreloadList();};})();