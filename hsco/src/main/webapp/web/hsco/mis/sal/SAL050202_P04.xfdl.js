﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SAL050202_P04");this.set_classname("SAL050202_P04");this.set_titletext("연금저축");this._setFormPosition(0,0,1100,500);}_a=new Dataset("ds_sal014",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EXCCLC_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"EXCCLC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"FORMAT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_yndExcclcAnnty",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"EXCCLC_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"EXCCLC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"DTA_SE\" type=\"STRING\" size=\"256\"/><Column id=\"FORMAT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"IEM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"RELATE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BIZRNO\" type=\"STRING\" size=\"256\"/><Column id=\"MTLTY\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_KND\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_KND_2\" type=\"STRING\" size=\"256\"/><Column id=\"ESNTL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GOODS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STDR_DE\" type=\"STRING\" size=\"256\"/><Column id=\"BEGIN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DE\" type=\"STRING\" size=\"256\"/><Column id=\"GNRL_2\" type=\"STRING\" size=\"256\"/><Column id=\"TRDIT_MRKT_2\" type=\"STRING\" size=\"256\"/><Column id=\"MASS_TRNSPORT_2\" type=\"STRING\" size=\"256\"/><Column id=\"GNRL_1\" type=\"STRING\" size=\"256\"/><Column id=\"TRDIT_MRKT_1\" type=\"STRING\" size=\"256\"/><Column id=\"MASS_TRNSPORT_1\" type=\"STRING\" size=\"256\"/><Column id=\"FRHFYR_CARD\" type=\"STRING\" size=\"256\"/><Column id=\"SHYY_CARD\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_PD\" type=\"STRING\" size=\"256\"/><Column id=\"BRRW_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"FIXING_BRRW_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"NTHG_DFR_BRRW_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRTINT_PRNCPAL_RPAY\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"DDC_AMOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">EXCCLC_YEAR</Col><Col id=\"compId\">ds_cond00</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_cond00</Col><Col id=\"colId\">EXCCLC_SE</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_cond00</Col><Col id=\"colId\">EMPNO</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_yndExcclcAnnty</Col><Col id=\"colId\">DDC_SE</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_yndExcclcAnnty</Col><Col id=\"colId\">FNLT</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_yndExcclcAnnty</Col><Col id=\"colId\">FORMAT_CODE</Col><Col id=\"msgId\">공제구분</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_yndExcclcAnnty</Col><Col id=\"colId\">DETAIL_KND_2</Col><Col id=\"msgId\">저축구분</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_yndExcclcAnnty</Col><Col id=\"colId\">STDR_DE</Col><Col id=\"msgId\">가입일자</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_yndExcclcAnnty</Col><Col id=\"colId\">DETAIL_KND</Col><Col id=\"msgId\">금융기관</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_yndExcclcAnnty</Col><Col id=\"colId\">MTLTY</Col><Col id=\"msgId\">금융기관상호</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_yndExcclcAnnty</Col><Col id=\"colId\">ESNTL_NO</Col><Col id=\"msgId\">계좌번호</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_yndExcclcAnnty</Col><Col id=\"colId\">PAY_AMOUNT</Col><Col id=\"msgId\">납입금액</Col><Col id=\"notNull\">Y</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_sal024",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_salcode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">-</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">청약저축</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">청약종합저축</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"CODE_NM\">근로자주택마련</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0%","0",null,"500","0%",null,this);_a.set_taborder("14");_a.set_cssclass("sta_WF_PopupBg");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","4","0",null,"15","4",null,this);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","15","17","480","21",null,null,this);_a.set_taborder("2");_a.set_text("연말정산 연금저축");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","34","40",null,"5","34",null,this);_a.set_taborder("3");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","2","15","438",null,null,this);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","985","79","15","438",null,null,this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_yndExcclcCtbny","absolute","15","45",null,null,"15","16",this);_a.set_taborder("6");_a.set_binddataset("ds_yndExcclcAnnty");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"63\"/><Column size=\"94\"/><Column size=\"127\"/><Column size=\"72\"/><Column size=\"80\"/><Column size=\"184\"/><Column size=\"152\"/><Column size=\"158\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"정산년도\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"공제구분\"/><Cell col=\"3\" text=\"저축구분\"/><Cell col=\"4\" text=\"가입일자\"/><Cell col=\"5\" text=\"금융기관\"/><Cell col=\"6\" text=\"금융기관상호\"/><Cell col=\"7\" text=\"계좌번호\"/><Cell col=\"8\" text=\"납입연차\"/><Cell col=\"9\" text=\"납입금액\"/><Cell col=\"10\" text=\"공제금액\"/></Band><Band id=\"body\"><Cell text=\"bind:EXCCLC_YEAR\"/><Cell col=\"1\" text=\"bind:NM\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"expr:DTA_SE==&quot;Y&quot;?&quot;none&quot;:&quot;combo&quot;\" text=\"bind:FORMAT_CODE\" combodataset=\"ds_sal024\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" displaytype=\"expr:FORMAT_CODE==&quot;J301Y&quot;?&quot;combo&quot;:&quot;none&quot;\" edittype=\"expr:DTA_SE==&quot;Y&quot;?&quot;none&quot;:&quot;combo&quot;\" text=\"bind:DETAIL_KND_2\" combodataset=\"ds_salcode\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" displaytype=\"expr:STDR_DE!=null &amp;&amp; STDR_DE!=&quot;&quot;?&quot;date&quot;:&quot;none&quot;\" edittype=\"expr:DTA_SE==&quot;Y&quot;?&quot;none&quot;:&quot;date&quot;\" text=\"bind:STDR_DE\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"expr:DTA_SE==&quot;Y&quot;?&quot;none&quot;:&quot;combo&quot;\" text=\"bind:DETAIL_KND\" combodataset=\"ds_sal014\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"6\" edittype=\"expr:DTA_SE==&quot;Y&quot;?&quot;none&quot;:&quot;normal&quot;\" text=\"bind:MTLTY\"/><Cell col=\"7\" edittype=\"expr:DTA_SE==&quot;Y&quot;?&quot;none&quot;:&quot;normal&quot;\" text=\"bind:ESNTL_NO\"/><Cell col=\"8\" edittype=\"expr:DTA_SE==&quot;Y&quot;?&quot;none&quot;:&quot;normal&quot;\" text=\"bind:RPAY_PD\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"expr:DTA_SE==&quot;Y&quot;?&quot;none&quot;:&quot;normal&quot;\" style=\"align:right;\" text=\"bind:PAY_AMOUNT\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DDC_AMOUNT\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\" displaytype=\"number\" text=\"expr:dataset.getSum('PAY_AMOUNT')\"/><Cell col=\"10\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_Close","absolute","1032","15","50","25",null,null,this);_a.set_taborder("10");_a.set_text("닫기");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Save","absolute","980","15","50","25",null,null,this);_a.set_taborder("11");_a.set_text("저장");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Del","absolute","928","15","50","25",null,null,this);_a.set_taborder("12");_a.set_text("삭제");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_New","absolute","876","15","50","25",null,null,this);_a.set_taborder("13");_a.set_text("신규");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Layout("default","",1100,500,this,function(_b){_b.set_classname("SAL050202_P04");_b.set_titletext("연금저축");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("SAL050202_P04.xfdl","lib::comInclude.xjs");this.registerScript("SAL050202_P04.xfdl",function(){var _a=this.parent.EMPNO;var _b=this.parent.EMPNM;var _c=this.parent.EXCCLCYEAR;var _d=this.parent.EXCCLCSE;this.SAL050202_P04_oninit=function(_e,_f){this.fn_init_form();this.fn_init_dataset();};this.SAL050202_P04_onload=function(_e,_f){this.fn_loadCombo();this.fn_search();};this.fn_loadCombo=function(){var _e=[["ds_sal014","SAL014",1,""],["ds_sal024","SAL024",1,""]];this.gfn_comboLoad(_e,this.fn_callbackAfter);};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){this.ds_yndExcclcAnnty.clearData();this.ds_cond00.clearData();this.ds_cond00.addRow();this.ds_cond00.setColumn(0,"EMPNO",_a);this.ds_cond00.setColumn(0,"EXCCLC_YEAR",_c);this.ds_cond00.setColumn(0,"EXCCLC_SE",_d);this.ds_cond00.setColumn(0,"FORMAT_CODE","E102Y");this.fn_transaction("selectYndanntyList");};this.btn_Save_onclick=function(){if(!this.gfn_checkValidation(this.ds_yndExcclcAnnty,this.ds_validation)){return;}if(this.gfn_message("confirm.저장.여부")){this.fn_transaction("saveYndanntyList");}};this.fn_transaction=function(_e){switch(_e){case "selectYndanntyList":var _f="hsco/mis/sal/SAL050202/selectYndanntyList.do";var _g="input1=ds_cond00";var _h="ds_yndExcclcAnnty=output1";break;case "saveYndanntyList":var _f="hsco/mis/sal/SAL050202/YndanntyCUD.do";var _g="input2=ds_yndExcclcAnnty:U";var _h="";break;}Ex.core.tran(this,_e,_f,_g,_h);};this.fn_callBack=function(_e,_f,_g){if(_f!=0){this.gfn_callback_message(_e,_f,_g);}else{switch(_e){case "selectYndanntyList":break;case "saveYndanntyList":this.fn_search();break;}}};this.btn_New_onclick=function(){var _e=this.ds_yndExcclcAnnty.addRow();this.ds_yndExcclcAnnty.setColumn(_e,"EXCCLC_YEAR",_c);this.ds_yndExcclcAnnty.setColumn(_e,"EXCCLC_SE",_d);this.ds_yndExcclcAnnty.setColumn(_e,"EMPNO",_a);this.ds_yndExcclcAnnty.setColumn(_e,"NM",_b);};this.btn_Del_onclick=function(){if(this.gfn_message("confirm.삭제여부")){var _e=this.ds_yndExcclcAnnty.rowposition;this.ds_yndExcclcAnnty.deleteRow(_e);}};this.btn_Close_onclick=function(_e,_f){this.close();};this.Static03_onclick=function(_e,_f){};this.ds_yndExcclcAnnty_oncolumnchanged=function(_e,_f){switch(_f.columnid){case "FORMAT_CODE":if(_f.newvalue!="J301Y"){_e.setColumn(_f.row,"DETAIL_KND_2","");this.ds_validation.setColumn(this.ds_validation.findRowExpr("colId=='DETAIL_KND_2' && compId=='ds_yndExcclcAnnty'"),"notNull","N");this.ds_validation.setColumn(this.ds_validation.findRowExpr("colId=='STDR_DE' && compId=='ds_yndExcclcAnnty'"),"notNull","N");}else{this.ds_validation.setColumn(this.ds_validation.findRowExpr("colId=='DETAIL_KND_2' && compId=='ds_yndExcclcAnnty'"),"notNull","Y");this.ds_validation.setColumn(this.ds_validation.findRowExpr("colId=='STDR_DE' && compId=='ds_yndExcclcAnnty'"),"notNull","Y");}break;}};});this.on_initEvent=function(){this.ds_yndExcclcAnnty.addEventHandler("oncolumnchanged",this.ds_yndExcclcAnnty_oncolumnchanged,this);this.addEventHandler("oninit",this.SAL050202_P04_oninit,this);this.addEventHandler("onload",this.SAL050202_P04_onload,this);this.Static03.addEventHandler("onclick",this.Static03_onclick,this);this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);this.btn_Save.addEventHandler("onclick",this.btn_Save_onclick,this);this.btn_Del.addEventHandler("onclick",this.btn_Del_onclick,this);this.btn_New.addEventHandler("onclick",this.btn_New_onclick,this);};this.loadIncludeScript("SAL050202_P04.xfdl");};})();