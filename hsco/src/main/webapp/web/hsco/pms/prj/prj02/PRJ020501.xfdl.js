﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("PRJ020501");this.set_classname("PRJ020501");this.set_titletext("PRJ020501_토지판매회수계획");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_1",this);_a.set_useclientlayout("1");_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"LAD_CODE\" type=\"STRING\" size=\"3\"/><Column id=\"LAD_CODE_NM\" type=\"STRING\" size=\"100\"/><Column id=\"PRPOS_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"SUPLY_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"BLCK\" type=\"STRING\" size=\"3\"/><Column id=\"NM1\" type=\"STRING\" size=\"100\"/><Column id=\"NM2\" type=\"STRING\" size=\"100\"/><Column id=\"LOT_C\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"AR_S\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"UNTPC_A\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"LTTOT_PLAN_YM\" type=\"STRING\" size=\"6\"/><Column id=\"YY\" type=\"BIGDECIMAL\" size=\"4\"/><Column id=\"MM\" type=\"BIGDECIMAL\" size=\"2\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_2",this);_a.set_useclientlayout("1");_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"LAD_CODE\" type=\"STRING\" size=\"3\"/><Column id=\"PRPOS_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"SUPLY_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"PLAN_ACMSLT_SE\" type=\"STRING\" size=\"3\"/><Column id=\"BLCK\" type=\"STRING\" size=\"3\"/><Column id=\"LTTOT_YM\" type=\"STRING\" size=\"6\"/><Column id=\"YY\" type=\"BIGDECIMAL\" size=\"4\"/><Column id=\"MM\" type=\"BIGDECIMAL\" size=\"2\"/><Column id=\"WIK_ODR\" type=\"BIGDECIMAL\" size=\"3\"/><Column id=\"LOT_CO_PLAN\" type=\"BIGDECIMAL\" size=\"12\"/><Column id=\"AR_PLAN\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"PLAN_AMOUNT\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"LTTOT_PRIC_PLAN\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"ATMPT_AMOUNT_PLAN\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"AMT_S\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"AMT_D\" type=\"BIGDECIMAL\" size=\"15\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\"/><Col id=\"colId\"/><Col id=\"notNull\"/><Col id=\"msgId\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond1",this);_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond2",this);_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"LAD_CODE\" type=\"STRING\" size=\"3\"/><Column id=\"PRPOS_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"SUPLY_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"BLCK\" type=\"STRING\" size=\"3\"/><Column id=\"LTTOT_YM\" type=\"STRING\" size=\"6\"/><Column id=\"PLAN_ACMSLT_SE\" type=\"STRING\" size=\"3\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_PRJ010",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Static("sta_gud_v01","absolute",null,"0","28",null,"0","0",this);_a.set_text("28");_a.set_visible("0");_a.style.set_background("#1b3cd23c");_a.style.set_align("center");this.addChild(_a.name,_a);_a=new Div("div_PRJ","absolute","0","0","280",null,null,"0",this);_a.set_taborder("1");_a.getSetter("SLE_SE").set("1");_a.set_url("pms_prj::prjList.xfdl");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","280","0",null,"0","28",null,this);_a.set_taborder("2");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","280","0",null,null,"28","0",this);_a.set_taborder("3");this.addChild(_a.name,_a);_a=new Static("sta_gud_h01","absolute","0","0",null,"5","0",null,this.div_work);_a.set_text("5");_a.set_visible("0");_a.style.set_background("#dc143c3c");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_1","absolute","0","0",null,"250","0",null,this.div_work);_a.set_taborder("1");_a.set_binddataset("ds_1");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"120\"/><Column size=\"50\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"40\"/></Columns><Rows><Row size=\"18\" band=\"head\"/><Row size=\"18\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"토지코드\"/><Cell col=\"1\" rowspan=\"2\" text=\"토지코드명\"/><Cell col=\"2\" colspan=\"3\" text=\"용도코드\"/><Cell col=\"5\" rowspan=\"2\" text=\"블럭\"/><Cell col=\"6\" rowspan=\"2\" text=\"LOT수\"/><Cell col=\"7\" rowspan=\"2\" text=\"면적(㎡)\"/><Cell col=\"8\" rowspan=\"2\" text=\"분양단가\"/><Cell col=\"9\" colspan=\"2\" text=\"분양계획시점\"/><Cell row=\"1\" col=\"2\" text=\"코드\"/><Cell row=\"1\" col=\"3\" text=\"중분류명\"/><Cell row=\"1\" col=\"4\" text=\"소분류명\"/><Cell row=\"1\" col=\"9\" text=\"계획년도\" cssclass=\"Cellgrd_WF_HeadEssential\"/><Cell row=\"1\" col=\"10\" text=\"계획월\" cssclass=\"Cellgrd_WF_HeadEssential\"/></Band><Band id=\"body\"><Cell text=\"bind:LAD_CODE\"/><Cell col=\"1\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:LAD_CODE_NM\"/><Cell col=\"2\" text=\"bind:PRPOS_CODE\"/><Cell col=\"3\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:NM1\"/><Cell col=\"4\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:NM2\"/><Cell col=\"5\" text=\"bind:BLCK\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,###\" text=\"bind:LOT_C\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,###\" text=\"bind:AR_S\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,###\" text=\"bind:UNTPC_A\"/><Cell col=\"9\" edittype=\"masknumber\" mask=\"####\" editlimitbymask=\"both\" text=\"bind:YY\"/><Cell col=\"10\" edittype=\"masknumber\" mask=\"##\" editlimitbymask=\"both\" text=\"bind:MM\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Div("div_2","absolute","0","250",null,null,"0","0",this.div_work);_a.set_taborder("4");this.div_work.addChild(_a.name,_a);_a=new Static("sta_1","absolute","0","5","200","19",null,null,this.div_work.div_2);_a.set_text("목록");_a.set_cssclass("sta_WF_Title01");_a.set_visible("0");this.div_work.div_2.addChild(_a.name,_a);_a=new Grid("grd_2","absolute","0","29",null,null,"0","0",this.div_work.div_2);_a.set_taborder("1");_a.set_binddataset("ds_2");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"20\"/><Column size=\"30\"/><Column size=\"50\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"18\" band=\"head\"/><Row size=\"18\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"분양년도\"/><Cell col=\"1\" rowspan=\"2\" text=\"월\"/><Cell col=\"2\" rowspan=\"2\" text=\"주차\"/><Cell col=\"3\" colspan=\"3\" text=\"분양계획\"/><Cell col=\"6\" colspan=\"3\" text=\"회수계획\"/><Cell col=\"9\" rowspan=\"2\" text=\"미수잔액\"/><Cell row=\"1\" col=\"3\" text=\"LOT수\"/><Cell row=\"1\" col=\"4\" text=\"면적(㎡)\"/><Cell row=\"1\" col=\"5\" text=\"계획금액\"/><Cell row=\"1\" col=\"6\" text=\"분양대금\"/><Cell row=\"1\" col=\"7\" text=\"미수금\"/><Cell row=\"1\" col=\"8\" text=\"합계\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" mask=\"####\" text=\"bind:YY\"/><Cell col=\"1\" displaytype=\"number\" mask=\"##\" text=\"bind:MM\"/><Cell col=\"2\" edittype=\"expr:dataset.getRowType(currow)==2 ? 'masknumber' : ''\" mask=\"##\" editlimitbymask=\"both\" text=\"bind:WIK_ODR\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;padding:0 5 0 5;\" mask=\"##,###,###,##0\" editlimitbymask=\"both\" text=\"bind:LOT_CO_PLAN\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;padding:0 5 0 5;\" mask=\"#,###,###,###,##0.###\" editlimitbymask=\"both\" text=\"bind:AR_PLAN\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;padding:0 5 0 5;\" mask=\"###,###,###,###,##0\" editlimitbymask=\"both\" text=\"bind:PLAN_AMOUNT\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;padding:0 5 0 5;\" mask=\"###,###,###,###,##0\" editlimitbymask=\"both\" text=\"bind:LTTOT_PRIC_PLAN\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;padding:0 5 0 5;\" mask=\"###,###,###,###,##0\" editlimitbymask=\"both\" text=\"bind:ATMPT_AMOUNT_PLAN\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;padding:0 5 0 5;\" mask=\"#,##0\" text=\"bind:AMT_S\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;padding:0 5 0 5;\" mask=\"#,##0\" text=\"bind:AMT_D\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" text=\"합계\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(LOT_CO_PLAN)||0')\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0.00\" expr=\"dataset.getSum('parseFloat(AR_PLAN)||0')\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(PLAN_AMOUNT)||0')\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(LTTOT_PRIC_PLAN)||0')\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(ATMPT_AMOUNT_PLAN)||0')\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(AMT_S)||0')\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(AMT_D)||0')\"/></Band></Format></Formats>");this.div_work.div_2.addChild(_a.name,_a);_a=new Button("btn_21","absolute",null,"5","60","19","67",null,this.div_work.div_2);_a.set_taborder("1");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.div_work.div_2.addChild(_a.name,_a);_a=new Button("btn_22","absolute",null,"5","64","19","0",null,this.div_work.div_2);_a.set_taborder("2");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");this.div_work.div_2.addChild(_a.name,_a);_a=new Button("btn_23","absolute",null,"5","40","19","130",null,this.div_work.div_2);_a.set_taborder("3");_a.set_text("저장");_a.set_cssclass("btn_WF_Process");_a.set_visible("0");this.div_work.div_2.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.div_work.div_2,function(_b){_b.set_taborder("4");});this.div_work.div_2.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("3");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("PRJ020501");_b.set_titletext("PRJ020501_토지판매회수계획");});this.addLayout(_a.name,_a);_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","pms_prj::prjList.xfdl");};this.addIncludeScript("PRJ020501.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("PRJ020501.xfdl",function(){this.ACMSLT_SE=1;var _a;var _b;this.PRJ020501_oninit=function(_c,_d){this.fn_init();this.fn_init_form();this.fn_init_dataset();this.form_id=application.gv_curFormId+'_';};this.PRJ020501_onload=function(_c,_d){if(_a){this.div_PRJ.set_index(_a);}this.div_PRJ.fn_search(_b);};this.fn_init_form=function(){};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);this.checkDs.push(this.ds_1);this.checkDs.push(this.ds_2);};this.fn_loadCombo=function(){var _c=[['ds_PRJ010','PRJ010',1,'']];var _d=function(_e,_f,_g){this.ds_cond2.setColumn(0,'PLAN_ACMSLT_SE',this.ACMSLT_SE);this.div_PRJ.fn_search();};this.gfn_comboLoad(_c,_d);};this.fn_search=function(){if(!this.gfn_checkValidation(this.div_search,this.ds_validation)){return;}this.fn_transaction("mList");};this.fn_save=function(){if(this.gfn_message("confirm.저장.여부")){this.fn_transaction("save");}};this.fn_transaction=function(_c){if(this.ds_cond1.rowcount<1){return;}var _d;var _e;var _f;var _g="hsco/pms/prj/PRJ020501/"+_c+".do";var _h;var _i="";switch(_c){case "mList":_d=this.ds_cond1;_e=this.div_PRJ.ds_PRJ;_f="BSNS_CODE=BSNS_CODE,";_h="input1=ds_cond1";_i="ds_1=output1";this.ds_1.clearData();this.ds_2.clearData();break;case "rList":_d=this.ds_cond2;_e=this.ds_1;_f="BSNS_CODE=BSNS_CODE,"+"LAD_CODE=LAD_CODE,"+"PRPOS_CODE=PRPOS_CODE,"+"SUPLY_CODE=SUPLY_CODE,"+"BLCK=BLCK,"+"LTTOT_YM=LTTOT_PLAN_YM,";_d.setColumn(0,"PLAN_ACMSLT_SE",1);_h="input1=ds_cond2";_i="ds_2=output1";this.ds_2.clearData();break;case "save":_h="input1=ds_1:U";_h+=" input2=ds_2:U";break;}if(_d){_d.copyRow(0,_e,_e.rowposition,_f);}Ex.core.tran(this,_c,_g,_h,_i);};this.fn_callBack=function(_c,_d,_e){this.debug("fn_callBack() - "+_c+','+_d+','+_e);if(_d!=0){return this.gfn_callback_message(_c,_d,_e);}switch(_c){case "mList":break;case "rList":break;case "save":this.fn_search();break;}};this.fn_insert=function(_c){};this.fn_delete=function(_c){};this.fn_insertDS=function(_c){var _d=this.ds_1;if(_d.rowcount<1){return;}var _e=_d.rowposition;if(!_d.getColumn(_e,"YY")||!_d.getColumn(_e,"MM")){this.gfn_message("comm.항목.입력.을",'분양계획시점');return;}var _f;var _g;var _h="BSNS_CODE=BSNS_CODE,"+"LAD_CODE=LAD_CODE,"+"PRPOS_CODE=PRPOS_CODE,"+"SUPLY_CODE=SUPLY_CODE,"+"BLCK=BLCK,"+"LTTOT_YM=LTTOT_PLAN_YM,"+"YY=YY,"+"MM=MM,";;var _i=Math.max(0,_c.rowcount);var _j=Math.max(4,_c.rowcount+1);for(var _k=_i;_k<_j;_k++ ){_g=_c.addRow();_c.copyRow(_g,_d,_d.rowposition,_h);_c.setColumn(_g,"PLAN_ACMSLT_SE",this.ACMSLT_SE);_f=(_g<1)?1:1+parseInt(_c.getColumn(_g-1,'WIK_ODR'))||0;_c.setColumn(_g,"WIK_ODR",_f);}this.debug('fn_insertDS() - '+_c.name+':'+_g);};this.fn_deleteDS=function(_c){this.debug('fn_deleteDS() - '+_c.name+':'+_c.rowposition);_c.deleteRow(_c.rowposition);};this.ds_onrowposchanged=function(_c,_d){this.debug('onrow:'+_c.name);if(_c.rowcount<1){return;}switch(_c){case this.div_PRJ.ds_PRJ:return this.fn_transaction("mList");break;case this.ds_1:return this.fn_transaction("rList");}};this.ds_1_oncolumnchanged=function(_c,_d){if(_d.columnid=='YY'||'MM'){var _e=_d.row;var _f=''+parseInt(_c.getColumn(_e,'YY')||0);var _g=parseInt(_c.getColumn(_e,'MM')||0);var _h=_f+((_g<10)?'0':'')+_g;_c.setColumn(_e,'LTTOT_PLAN_YM',_h);}};this.ds_2_oncolumnchanged=function(_c,_d){if(_d.columnid=='PLAN_AMOUNT'||'LTTOT_PRIC_PLAN'||'ATMPT_AMOUNT_PLAN'){var _e=_d.row;var _f,_g;_g=parseInt(_c.getColumn(_e,'PLAN_AMOUNT')||0);_f=parseInt(_c.getColumn(_e,'LTTOT_PRIC_PLAN')||0);_f+=parseInt(_c.getColumn(_e,'ATMPT_AMOUNT_PLAN')||0);_c.setColumn(_e,'AMT_S',_f);_c.setColumn(_e,'AMT_D',_g-_f);}};this.ds_cancolumnchange=function(_c,_d){var _e,_f,_g;var _h=_d.newvalue;var _i,_j;switch(_d.columnid){case 'YY':_e=_d.columnid;_f='MM';_g='WIK_ODR';break;case 'MM':_e=_d.columnid;_f='YY';_g='WIK_ODR';case 'WIK_ODR':_e=_d.columnid;_f='YY';_g='MM';break;default:return;}if(_f){_i=_c.getColumn(_d.row,_f);}if(_g){_j=_c.getColumn(_d.row,_g);}var _k=_c.findRowExpr(_e+" == '"+_h+"' && "+_f+" == '"+_i+"' && "+_g+" == '"+_j+"'");this.debug('중복 체크 : '+_c.name+'='+_e+','+_h+'/'+_f+','+_i+'/'+_g+','+_j+'/'+_k);if( -1<_k){alert('중복 오류 : '+_h);return false;}};this.btn_21_onclick=function(_c,_d){this.fn_insertDS(this.ds_2);};this.btn_22_onclick=function(_c,_d){this.fn_deleteDS(this.ds_2);};});this.on_initEvent=function(){this.ds_1.addEventHandler("onrowposchanged",this.ds_onrowposchanged,this);this.ds_1.addEventHandler("oncolumnchanged",this.ds_1_oncolumnchanged,this);this.ds_2.addEventHandler("oncolumnchanged",this.ds_2_oncolumnchanged,this);this.ds_2.addEventHandler("cancolumnchange",this.ds_cancolumnchange,this);this.addEventHandler("onload",this.PRJ020501_onload,this);this.addEventHandler("oninit",this.PRJ020501_oninit,this);this.div_work.div_2.btn_21.addEventHandler("onclick",this.btn_21_onclick,this);this.div_work.div_2.btn_22.addEventHandler("onclick",this.btn_22_onclick,this);this.div_work.div_2.btn_23.addEventHandler("onclick",this.btn_23_onclick,this);};this.loadIncludeScript("PRJ020501.xfdl");this.loadPreloadList();};})();