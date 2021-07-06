﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("PRJ030101");this.set_classname("PRJ030101");this.set_titletext("PRJ030101_원가항목코드관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_1",this);_a.set_useclientlayout("1");_a._setContents("<ColumnInfo><Column id=\"STD_PRMPC_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"CL_SE\" type=\"STRING\" size=\"3\"/><Column id=\"LCLAS_NM\" type=\"STRING\" size=\"50\"/><Column id=\"MLSFC_NM\" type=\"STRING\" size=\"50\"/><Column id=\"SCLAS_NM\" type=\"STRING\" size=\"50\"/><Column id=\"FOM_SE\" type=\"INT\" size=\"1\"/><Column id=\"CD1\" type=\"STRING\" size=\"2\"/><Column id=\"CD2\" type=\"STRING\" size=\"2\"/><Column id=\"CD3\" type=\"STRING\" size=\"2\"/><Column id=\"ACCNUT_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"ACCNUT_ACNT_CODE\" type=\"STRING\" size=\"8\"/><Column id=\"ACCNUT_ACNT_CODE_NM\" type=\"STRING\" size=\"100\"/><Column id=\"SAL_SE\" type=\"STRING\" size=\"3\"/><Column id=\"STATE\" type=\"STRING\" size=\"1\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation1",this);_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_1</Col><Col id=\"colId\">STD_PRMPC_CODE</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">원가코드</Col></Row><Row><Col id=\"compId\">ds_1</Col><Col id=\"colId\">LCLAS_NM</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">원가항목명(대분류)</Col><Col id=\"expr\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond1",this);_a._setContents("<ColumnInfo><Column id=\"ACCNUT_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"STD_PRMPC_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"ACCNUT_ACNT_CODE\" type=\"STRING\" size=\"8\"/><Column id=\"SAL_SE\" type=\"STRING\" size=\"3\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_Acnt",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_PRJ010",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_PRJ016",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_PRJ011",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_2",this);_a.set_useclientlayout("1");_a.set_updatecontrol("false");_a._setContents("<ColumnInfo><Column id=\"STD_PRMPC_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"CL_SE\" type=\"STRING\" size=\"3\"/><Column id=\"LCLAS_NM\" type=\"STRING\" size=\"50\"/><Column id=\"MLSFC_NM\" type=\"STRING\" size=\"50\"/><Column id=\"SCLAS_NM\" type=\"STRING\" size=\"50\"/><Column id=\"FOM_SE\" type=\"INT\" size=\"1\"/><Column id=\"CD1\" type=\"STRING\" size=\"2\"/><Column id=\"CD2\" type=\"STRING\" size=\"2\"/><Column id=\"CD3\" type=\"STRING\" size=\"2\"/><Column id=\"ACCNUT_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"ACCNUT_ACNT_CODE\" type=\"STRING\" size=\"8\"/><Column id=\"ACCNUT_ACNT_CODE_NM\" type=\"STRING\" size=\"100\"/><Column id=\"SAL_SE\" type=\"STRING\" size=\"3\"/><Column id=\"STATE\" type=\"STRING\" size=\"1\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation2",this);_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_1</Col><Col id=\"colId\">STD_PRMPC_CODE</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">원가코드</Col></Row><Row><Col id=\"compId\">ds_1</Col><Col id=\"colId\">MLSFC_NM</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">원가항목명(중분류)</Col><Col id=\"expr\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation3",this);_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_1</Col><Col id=\"colId\">STD_PRMPC_CODE</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">원가코드</Col></Row><Row><Col id=\"compId\">ds_1</Col><Col id=\"colId\">SCLAS_NM</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">원가항목명(소분류)</Col><Col id=\"expr\"/></Row><Row><Col id=\"colId\">ACCNUT_ACNT_CODE</Col><Col id=\"compId\">ds_1</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">계정코드</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("sta_gud_v01","absolute",null,"0","28",null,"0","0",this);_a.set_text("28");_a.style.set_background("#1b3cd23c");_a.style.set_align("center");_a.set_visible("0");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("1");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_2","absolute","15","6","62","20",null,null,this.div_search);_a.set_taborder("2");_a.set_cssclass("sta_WFSA_Label");_a.set_text("회계년도");_a.set_visible("true");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_2","absolute","81","5","80","21",null,null,this.div_search);_a.set_taborder("3");_a.getSetter("visible2").set("0");this.div_search.addChild(_a.name,_a);_a=new Static("sta_1","absolute","183","6","60","21",null,null,this.div_search);_a.set_taborder("4");_a.set_text("판매구분");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_1","absolute","248","5","140","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("5");_a.set_innerdataset("@ds_PRJ011");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Div("div_work","absolute","0","33",null,null,"28","0",this);_a.set_taborder("2");this.addChild(_a.name,_a);_a=new Div("div_1","absolute","0","0",null,null,"0","0",this.div_work);_a.set_taborder("1");this.div_work.addChild(_a.name,_a);_a=new Static("sta_gud_h01","absolute","0","0",null,"10","0",null,this.div_work.div_1);_a.set_text("10");_a.set_visible("0");_a.style.set_background("#dc143c3c");_a.style.set_align("center");this.div_work.div_1.addChild(_a.name,_a);_a=new Static("sta_gud_h02","absolute","0","29",null,"5","0",null,this.div_work.div_1);_a.set_text("5");_a.set_visible("0");_a.style.set_background("#dc143c3c");_a.style.set_align("center");this.div_work.div_1.addChild(_a.name,_a);_a=new Static("sta_1","absolute","0","10","200","19",null,null,this.div_work.div_1);_a.set_text("원가코드");_a.set_cssclass("sta_WF_Title01");_a.style.set_background("transparent URL('theme://images/sta_WF_Title02.png') left middle");this.div_work.div_1.addChild(_a.name,_a);_a=new Grid("grd_1","absolute","0","34",null,null,"0","0",this.div_work.div_1);_a.set_taborder("2");_a.set_binddataset("ds_1");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"150\"/><Column size=\"70\"/><Column size=\"74\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"분류구분\"/><Cell col=\"1\" text=\"원가코드\"/><Cell col=\"2\" text=\"원가항목명(대분류)\"/><Cell col=\"3\" text=\"원가항목명(중분류)\"/><Cell col=\"4\" text=\"원가항목명(소분류)\"/><Cell col=\"5\" text=\"형식구분\"/><Cell col=\"6\" text=\"회계년도\"/><Cell col=\"7\" text=\"계정코드\"/><Cell col=\"8\" text=\"계정과목명\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"none\" text=\"bind:CL_SE\" combodataset=\"ds_PRJ010\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:STD_PRMPC_CODE\" mask=\"@@-@@-@@\" editlimit=\"0\"/><Cell col=\"2\" edittype=\"expr:dataset.getColumn(currow, 'CL_SE')==1 ? 'text' : ''\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:LCLAS_NM\" editlimit=\"0\" editimemode=\"hangul\"/><Cell col=\"3\" edittype=\"expr:dataset.getColumn(currow, 'CL_SE')==2 ? 'text' : ''\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:MLSFC_NM\" editlimit=\"0\" editimemode=\"hangul\"/><Cell col=\"4\" edittype=\"expr:dataset.getColumn(currow, 'CL_SE')==3 ? 'text' : ''\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:SCLAS_NM\" editlimit=\"0\" editimemode=\"hangul\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:FOM_SE\" combodataset=\"ds_PRJ016\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"6\" text=\"bind:ACCNUT_YEAR\"/><Cell col=\"7\" edittype=\"expr:dataset.getColumn(currow, 'CL_SE')==3 ? 'expand' : ''\" text=\"bind:ACCNUT_ACNT_CODE\" expandshow=\"expr:dataset.getColumn(currow, 'CL_SE')==3 ? 'show': ''\"/><Cell col=\"8\" text=\"bind:ACCNUT_ACNT_CODE_NM\"/></Band></Format></Formats>");this.div_work.div_1.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("1");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work.div_1,function(_b){_b.set_taborder("1");});this.div_work.div_1.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("2");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("PRJ030101");_b.set_titletext("PRJ030101_원가항목코드관리");});this.addLayout(_a.name,_a);_a=new BindItem("item01","div_search.cmb_1","value","ds_cond1","CL_SE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("PRJ030101.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("PRJ030101.xfdl",function(){this.PRJ030101_oninit=function(_a,_b){this.fn_init();this.fn_init_form();this.fn_init_dataset();this.form_id=application.gv_curFormId+'_';};this.PRJ030101_onload=function(_a,_b){this.fn_loadCombo();};this.fn_init_form=function(){};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);this.checkDs.push(this.ds_1);this.checkDs.push(this.ds_2);};this.fn_loadCombo=function(){var _a=this.gfn_today().substr(0,4);this.div_search.spn_2.set_value(_a);var _b=[['ds_PRJ010','PRJ010',1,'A'],['ds_PRJ016','PRJ016',1,''],['ds_PRJ011','PRJ011',1,'']];var _c=function(_d,_e,_f){this.ds_PRJ011.set_filterstr('CODE < 3');this.fn_search();};this.gfn_comboLoad(_b,_c);};this.fn_search=function(){this.ds_1.filter("");this.fn_transaction("mList");};this.fn_save=function(){var _a=this.ds_1.getColumn(this.ds_1.rowposition,"CL_SE");switch(_a){case "1":if(!this.gfn_checkValidation(this.ds_1,this.ds_validation1)){return;}break;case "2":if(!this.gfn_checkValidation(this.ds_1,this.ds_validation2)){return;}break;case "3":if(!this.gfn_checkValidation(this.ds_1,this.ds_validation3)){return;}break;}if(this.gfn_message("confirm.저장.여부")){this.ds_2.copyData(this.ds_1);for(var _b=0;_b<this.ds_2.rowcount;_b++ ){if(this.ds_2.getColumn(_b,"STATE")=="1"){this.ds_2.setRowType(_b,Dataset.ROWTYPE_INSERT);}else if(this.ds_2.getColumn(_b,"STATE")=="2"){this.ds_2.setRowType(_b,Dataset.ROWTYPE_UPDATE);}else if(this.ds_2.getRowType(_b)==Dataset.ROWTYPE_DELETE&&(this.ds_2.getColumn(_b,"ACCNUT_ACNT_CODE")==undefined||this.ds_2.getColumn(_b,"ACCNUT_ACNT_CODE")=="")){this.ds_2.setRowType(_b,Dataset.ROWTYPE_NORMAL);}}this.fn_transaction("save");}};this.fn_transaction=function(_a){if(this.ds_cond1.rowcount<1){return;}var _b;var _c;var _d="hsco/pms/prj/PRJ030101/"+_a+".do";var _e="input1=ds_cond1";var _f="";switch(_a){case "mList":this.ds_cond1.setColumn(0,"ACCNUT_YEAR",this.div_search.spn_2.value);this.ds_cond1.setColumn(0,"SAL_SE",this.div_search.cmb_1.value);_f="ds_1=output1";this.ds_1.clearData();this.ds_2.clearData();break;case "rList":_b=this.ds_1;_c="STD_PRMPC_CODE=STD_PRMPC_CODE,";_f="ds_2=output1";this.ds_2.clearData();break;case "save":_e="input1=ds_1:U";_e+=" input2=ds_2:U";break;}if(_c){this.ds_cond1.copyRow(0,_b,_b.rowposition,_c);}Ex.core.tran(this,_a,_d,_e,_f);};this.fn_callBack=function(_a,_b,_c){this.debug("fn_callBack() - "+_a+','+_b+','+_c);if(_b!=0){return this.gfn_callback_message(_a,_b,_c);}switch(_a){case "mList":break;case "rList":break;case "save":this.fn_transaction("mList");break;}};this.fn_insert=function(_a){this.fn_insertDSNew(this.ds_1);};this.fn_delete=function(_a){this.fn_deleteDS(this.ds_1);};this.fn_incCodeStr=function(_a){return (1+parseInt(_a)||0).toString().padLeft(2,'0');};this.fn_insertDSNew=function(_a){var _b=_a.getColumn(_a.rowposition,"STD_PRMPC_CODE");var _c=_a.getColumn(_a.rowposition,"CD1");var _d=_a.getColumn(_a.rowposition,"CD2");var _e=_a.getColumn(_a.rowposition,"CD3");var _f=_a.getColumn(_a.rowposition,"CL_SE");var _g=_a.getColumn(_a.rowposition,"SAL_SE");var _h;if(_f=="1"){_h="CL_SE == '1'";}else if(_f=="2"){_h="(CL_SE == '1' || CL_SE == '2') && (CD1 == '"+_c+"')";}else if(_f=="3"){_h="(CD1 == '"+_c+"' && CL_SE == '1') || (CD1 == '"+_c+"' && CD2 == '"+_d+"')";}_a.filter(_h);var _i=_a.addRow();var _j=_a.rowcount-1;if(_j<0){_b='000000';}switch(_f){case '1':_b=(1+parseInt(_a.getColumn(_j-1,"CD1"))||0).toString().padLeft(2,'0')+'0000';break;case '2':_b=_c+(1+parseInt(_a.getColumn(_j-1,"CD2"))||0).toString().padLeft(2,'0')+'00';break;case '3':_b=_c+_d+(1+parseInt(_a.getColumn(_j-1,"CD3"))||0).toString().padLeft(2,'0');break;}_a.setColumn(_i,'CL_SE',_f);_a.setColumn(_i,'STD_PRMPC_CODE',_b);_a.setColumn(_i,'SAL_SE',_g);_a.setColumn(_i,'FOM_SE',2);};this.fn_insertDS=function(_a){var _b=_a.rowcount-1;var _c=parseInt(this.div_search.cmb_1.value)||1;var _d=_a.getColumn(_b,'STD_PRMPC_CODE');this.debug('fn_insertDS() - '+_a.name+':'+_b+'='+_d);var _e=_a.addRow();var _d,_f,_g,_h;if(_b<0){_d='000000';}_f=_d.substr(0,2);_g=_d.substr(2,2);_h=_d.substr(4,2);switch(_c){default:case 1:_d=this.fn_incCodeStr(_d.substr(0,2))+'0000';break;case 2:_d=_f+this.fn_incCodeStr(_d.substr(2,2))+'00';break;case 3:_d=_f+_g+this.fn_incCodeStr(_d.substr(4,2));break;}_a.setColumn(_e,'STD_PRMPC_CODE',_d);_a.setColumn(_e,'SAL_SE',_c);_a.setColumn(_e,'FOM_SE',2);};this.fn_deleteDS=function(_a){_a.deleteRow(_a.rowposition);};this.ds_cancolumnchange=function(_a,_b){var _c;var _d=_b.newvalue;switch(_b.columnid){case 'STD_PRMPC_CODE':_c=_b.columnid;break;default:return;}var _e=_a.findRowExpr(_c+" == '"+_d+"'");if( -1<_e){alert('중복 오류 : '+_d);return false;}};this.btn_21_onclick=function(_a,_b){this.fn_PopupAcnt();};this.btn_22_onclick=function(_a,_b){this.fn_deleteDS(this.ds_2);};this.fn_PopupAcnt=function(){var _a=function(_c,_d){if(!_d){return;}var _e=new Dataset();nRowCnt=_e.loadXML(_d);if(nRowCnt<1){return;}var _f=this.ds_1;var _g=_f.getColumn(_f.rowposition,'STD_PRMPC_CODE');if(_f.getColumn(_f.rowposition,"ACCNUT_ACNT_CODE")==undefined||_f.getColumn(_f.rowposition,"ACCNUT_ACNT_CODE")==""||_f.getColumn(_f.rowposition,"STATE")=="1"){_f.setColumn(_f.rowposition,"STATE","1");}else{if(_f.getColumn(_f.rowposition,"ACCNUT_YEAR")!=_e.getColumn(0,"ACCNUT_YEAR")||_f.getColumn(_f.rowposition,"ACCNUT_ACNT_CODE")!=_e.getColumn(0,"CODE")){_f.setColumn(_f.rowposition,"STATE","2");}}_f.setColumn(_f.rowposition,"STD_PRMPC_CODE",_g);_f.setColumn(_f.rowposition,"SAL_SE",parseInt(this.div_search.cmb_1.value)||1);_f.setColumn(_f.rowposition,"ACCNUT_YEAR",_e.getColumn(0,"ACCNUT_YEAR"));_f.setColumn(_f.rowposition,"ACCNUT_ACNT_CODE",_e.getColumn(0,"CODE"));_f.setColumn(_f.rowposition,"ACCNUT_ACNT_CODE_NM",_e.getColumn(0,"CODE_NM"));};var _b={AUTO_RET:true};this.gfn_popup('popAcnt',500,500,'',_b,"pms_prj::popAcnt.xfdl",_a,1);};this.cmb_onitemchanged=function(_a,_b){this.fn_search();};this.div_work_div_1_grd_1_oncellclick=function(_a,_b){if(_a.getCellPos()=='7'&&this.ds_1.getColumn(this.ds_1.rowposition,"CL_SE")=="3"){this.fn_PopupAcnt();}};this.div_search_sta_1_onclick=function(_a,_b){};});this.on_initEvent=function(){this.ds_1.addEventHandler("cancolumnchange",this.ds_cancolumnchange,this);this.ds_2.addEventHandler("cancolumnchange",this.ds_cancolumnchange,this);this.addEventHandler("onload",this.PRJ030101_onload,this);this.addEventHandler("oninit",this.PRJ030101_oninit,this);this.sta_gud_v01.addEventHandler("onclick",this.sta_gud_v01_onclick,this);this.div_search.sta_2.addEventHandler("onclick",this.div_search_sta_2_onclick,this);this.div_search.spn_2.addEventHandler("onspin",this.fn_search,this);this.div_search.sta_1.addEventHandler("onclick",this.div_search_sta_1_onclick,this);this.div_search.cmb_1.addEventHandler("onitemchanged",this.cmb_onitemchanged,this);this.div_work.div_1.sta_1.addEventHandler("onclick",this.div_work_div_1_sta_1_onclick,this);this.div_work.div_1.grd_1.addEventHandler("oncellclick",this.div_work_div_1_grd_1_oncellclick,this);};this.loadIncludeScript("PRJ030101.xfdl");};})();