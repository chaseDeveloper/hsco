﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SLS020208_P20");this.set_classname("SLS020208_P20");this.set_titletext("첨부파일다운로드");this._setFormPosition(0,0,500,429);}_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">grd_house_intrt</Col><Col id=\"colId\">APPLC_DE</Col><Col id=\"msgId\">적용일자</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">grd_house_intrt</Col><Col id=\"msgId\">연체범위 이상</Col><Col id=\"colId\">ARRRG_SCOPE_BEGIN</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">grd_house_intrt</Col><Col id=\"colId\">ARRRG_SCOPE_END</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">연체범위 이하</Col></Row><Row><Col id=\"compId\">grd_house_intrt</Col><Col id=\"colId\">ARRRG_INTRT</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">연체요율</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_ctrtc_atch",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"FILE_SN\" type=\"STRING\" size=\"200\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"100\"/><Column id=\"FILE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_cond01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"FILE_SN\" type=\"STRING\" size=\"200\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"100\"/><Column id=\"FILE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"P_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","2","15","416",null,null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","485","2","15","416",null,null,this);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","2","0","496","15",null,null,this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","2","414","496","15",null,null,this);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("Button02","absolute","435","15","50","25",null,null,this);_a.set_taborder("11");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("Button23","absolute","382","15","50","25",null,null,this);_a.set_taborder("12");_a.set_text("삭제");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("Button03","absolute","329","15","50","25",null,null,this);_a.set_taborder("13");_a.set_text("받기");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Static("Static07","absolute","17","40","466","10",null,null,this);_a.set_taborder("52");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","15","17","197","21",null,null,this);_a.set_taborder("54");_a.set_cssclass("sta_WF_Title01");_a.set_text("첨부파일");this.addChild(_a.name,_a);_a=new Grid("grd_house_intrt","absolute","15","50",null,"364","15",null,this);_a.set_taborder("55");_a.set_binddataset("ds_ctrtc_atch");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"일련번호\"/><Cell col=\"3\" text=\"파일명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:FILE_ORDR\"/><Cell col=\"2\" text=\"bind:FILE_SN\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:FILE_NM\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",500,429,this,function(_b){_b.set_classname("SLS020208_P20");_b.set_titletext("첨부파일다운로드");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("SLS020208_P20.xfdl","lib::comInclude.xjs");this.addIncludeScript("SLS020208_P20.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("SLS020208_P20.xfdl",function(){this.fv_objForm;this.SELECTED_LAD_CODE=null;this.SELECTED_LAD_NM=null;this.SELECTED_LAD_DETAIL_INFO=null;this.FILE_MANAGER=null;this.SLS020208_P20_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.SLS020208_P20_onload=function(_a,_b){var _c={onChange:this.fn_onFileSelected,onSuccess:this.fn_onFileSuccess};this.FILE_MANAGER=new this.fileManager(this,"PMS","HOU");this.FILE_MANAGER.init(_c);this.fv_objForm=this.parent.arg_0;this.ds_cond00.copyData(this.parent.arg_1);this.fn_search();};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){};this.fn_search=function(){this.ds_ctrtc_atch.clearData();this.fn_transaction("fileList");};this.fn_transaction=function(_a){var _b=true;switch(_a){case "fileList":var _c="/hsco/pms/sls/hou/ctr/SLS020208/ATCH_DOWN_LIST.do";var _d="input1=ds_cond00";var _e="ds_ctrtc_atch=output1";break;case "fileDelete":var _c="/hsco/pms/sls/hou/ctr/SLS020208/ATCH_FILE_DEL.do";var _d="input1=ds_cond01";var _e="";break;}if(_c==null){return;}var _f=typeof (_d);if(_f=="object"){this.pmsUtil.pmsComTran(_a,_c,_d,_e,null,null,false);}else{Ex.core.tran(this,_a,_c,_d,_e,null,null,null,_b);}};this.fn_callBack=function(_a,_b,_c){this.fn_callback_message(_a,_b,_c);var _d=_b==0?true:false;if(_d==true){switch(_a){case "fileDelete":var _e=this.ds_ctrtc_atch.rowcount;for(i=_e-1;i>=0;i-- ){if(this.ds_ctrtc_atch.getColumn(i,"CHK")=='1'){this.ds_ctrtc_atch.deleteRow(i);}}if(this.ds_ctrtc_atch.rowcount==0){var _f=this.parent.arg_2;_f.setColumn(_f.rowposition,"FILE_SN",null);}this.ds_ctrtc_atch.applyChange();break;}}this.debug((_d==true?"Success : ":"Fail : ")+_a);};this.Button03_onclick=function(_a,_b){this.fn_downloadAtchFile();};this.fn_downloadAtchFile=function(){for(var _d=0;_d<this.ds_ctrtc_atch.getRowCount();_d++ ){if(this.ds_ctrtc_atch.getColumn(_d,"CHK")==1){var _a=this.ds_ctrtc_atch.getColumn(_d,"FILE_SN");var _b=this.ds_ctrtc_atch.getColumn(_d,"FILE_ORDR");var _c=this.ds_ctrtc_atch.getColumn(_d,"FILE_NM");this.FILE_MANAGER.download(_a,_b,_c);}}};this.Button23_onclick=function(_a,_b){this.fn_deleteAtchFile();};this.fn_deleteAtchFile=function(){var _a="첨부파일을 삭제하시겠습니까?";if(confirm(_a)){if(this.ds_ctrtc_atch.rowcount<1){this.alert("info.삭제.데이터.없음");return;}for(var _c=0;_c<this.ds_ctrtc_atch.rowcount;_c++ ){if(this.ds_ctrtc_atch.getColumn(_c,"CHK")=='1'){var _b=this.ds_cond01.addRow();this.ds_cond01.setColumn(_b,"P_SN",this.ds_cond00.getColumn(this.ds_cond00.rowposition,"P_SN"));this.ds_cond01.setColumn(_b,"FILE_SN",this.ds_ctrtc_atch.getColumn(_c,"FILE_SN"));this.ds_cond01.setColumn(_b,"FILE_ORDR",this.ds_ctrtc_atch.getColumn(_c,"FILE_ORDR"));}}this.fn_transaction("fileDelete");}};this.Button02_onclick=function(_a,_b){this.close();};this.grd_house_intrt_onheadclick=function(_a,_b){if(_b.cell==0){this.gfn_setGridCheckAll(_a,_b);}};this.grd_house_intrt_oncellclick=function(_a,_b){if(_a.name="CHK"){if(_b.cell==0){_a.setCellProperty("Head",_b.cell,"text","0");}}};});this.on_initEvent=function(){this.addEventHandler("oninit",this.SLS020208_P20_oninit,this);this.addEventHandler("onload",this.SLS020208_P20_onload,this);this.Button02.addEventHandler("onclick",this.Button02_onclick,this);this.Button23.addEventHandler("onclick",this.Button23_onclick,this);this.Button03.addEventHandler("onclick",this.Button03_onclick,this);this.grd_house_intrt.addEventHandler("oncellclick",this.grd_house_intrt_oncellclick,this);this.grd_house_intrt.addEventHandler("onheadclick",this.grd_house_intrt_onheadclick,this);};this.loadIncludeScript("SLS020208_P20.xfdl");};})();