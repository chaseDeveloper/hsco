﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM060504");this.set_classname("HRM060504");this.set_titletext("다면평가 결과");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_result",this);_a._setContents("<ColumnInfo><Column id=\"HT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_IEM\" type=\"STRING\" size=\"256\"/><Column id=\"QESITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_SCORE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MY_SCORE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EVL_YEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a._setContents("<ColumnInfo><Column id=\"EVL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"HT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_htSe",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">상반기</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">하반기</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","1031","0","15","735",null,null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static07","absolute",null,"0","13","735","0",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("5");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_STDR_DE","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("31");_a.set_text("평가년도");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","5","15",null,null,"5",this.div_search);_a.set_taborder("38");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new MaskEdit("msk_YEAR","absolute","79","5","54","21",null,null,this.div_search);_a.set_taborder("0");_a.set_mask("####");_a.set_type("string");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("sta_STDR_DE00","absolute","148","5","64","21",null,null,this.div_search);_a.set_taborder("40");_a.set_text("반기구분");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","133","5","15",null,null,"5",this.div_search);_a.set_taborder("42");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_HT_SE","absolute","212","5","86","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_innerdataset("@ds_htSe");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("sta_STDR_DE01","absolute","313","6","78","21",null,null,this.div_search);_a.set_taborder("43");_a.set_text("평가대상자 ");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_EMP","absolute","396","6","190","21",null,null,this.div_search);_a.set_taborder("44");_a.set_async("false");_a.set_url("com::empno.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("10");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title01","absolute","0","43","224","19",null,null,this);_a.set_taborder("11");_a.set_text("다면평가 결과");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static51","absolute","0","62","1031","5",null,null,this);_a.set_taborder("12");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_dtyExcDmrtr","absolute","0","67",null,"290","28",null,this);_a.set_taborder("13");_a.set_binddataset("ds_result");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" colspan=\"2\" text=\"평가항목\"/><Cell col=\"3\" text=\"문항\"/><Cell col=\"4\" text=\"직급별 평균\"/><Cell col=\"5\" text=\"평가대상자\"/><Cell col=\"6\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:CLSF_NM\" suppress=\"1\" suppressalign=\"middle,over\"/><Cell col=\"1\" text=\"bind:EVL_SE\" suppress=\"2\" suppressalign=\"middle,over\"/><Cell col=\"2\" text=\"bind:EVL_IEM\"/><Cell col=\"3\" text=\"bind:QESITM_NO\"/><Cell col=\"4\" displaytype=\"number\" text=\"bind:HR_CLSF_SCORE\"/><Cell col=\"5\" displaytype=\"number\" text=\"bind:MY_SCORE\"/><Cell col=\"6\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" style=\"align:center;\" text=\"합   계\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:center;\" text=\"expr:dataset.getSum(&quot;HR_CLSF_SCORE&quot;).toFixed(2)\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:center;\" text=\"expr:dataset.getSum(&quot;MY_SCORE&quot;).toFixed(2)\"/><Cell col=\"6\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_title00","absolute","0","367","224","19",null,null,this);_a.set_taborder("14");_a.set_text("개인별 점수분산 그래프");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","386","1031","5",null,null,this);_a.set_taborder("15");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","357","1031","10",null,null,this);_a.set_taborder("16");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new WebBrowser("clipreport","absolute","0","391","546","328",null,null,this);_a.set_taborder("17");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("5");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("HRM060504");_b.set_titletext("다면평가 결과");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.msk_YEAR","value","ds_cond","EVL_YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.cmb_HT_SE","value","ds_cond","HT_SE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::empno.xfdl");};this.addIncludeScript("HRM060504.xfdl","lib::comInclude.xjs");this.addIncludeScript("HRM060504.xfdl","mis_lib::misUtil.xjs");this.registerScript("HRM060504.xfdl",function(){this.chargerAt=false;this.HRM060504_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.HRM060504_onload=function(_a,_b){this.ds_cond.clearData();this.ds_cond.addRow();var _c=this.dateUtils.today().substr(0,4);this.ds_cond.setColumn(0,"EVL_YEAR",_c);this.ds_cond.setColumn(0,"HT_SE","1");this.ds_cond.setColumn(0,"EMPNO",this.fn_getEmpno());this.ds_cond.setColumn(0,"EMPNM",this.fn_getEmpnm());this.div_search.div_EMP.fn_setBind("ds_cond","EMPNO","EMPNM");if(this.gfn_authGrpId("HRM_MLSS")!= -1){this.chargerAt=true;}if(!this.chargerAt){this.div_search.div_EMP.fn_set_enable(false);}this.fn_search();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){this.ds_result.clearData();this.fn_transaction("selectPersonalAtList");};this.fn_transaction=function(_a){switch(_a){case "selectPersonalAtList":var _b="/hsco/mis/hrm/HRM060504/selectPersonalAtList.do";var _c="input1=ds_cond";var _d="ds_result=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}else if(_b==0){switch(_a){case "selectPersonalAtList":this.gfn_ReportOnWBControl(this,this.clipreport,"MIS/HRM/HRM060504_R01.crf",this.ds_cond);break;}}};this.gfn_ReportOnWBControl=function(_a,_b,_c,_d){if(nexacro.Browser=="Runtime"){alert("runtime 버전은 지원하지 않습니다.");return false;}else if(nexacro.Browser=="IE"&&nexacro.BrowserVersion==8){alert("IE 8은 지원하지 않습니다");return false;}var _e=_b.left;var _f=_b.top;var _g=_b.width;var _h=_b.height;var _i=_b.right;var _j=_b.bottom;var _k=_b.name;_a.removeChild(_b.name);_b.destroy();_b=null;_b=new WebBrowser();_b.init(_k,"absolute",_e,_f,_g,_h,_i,_j);_a.addChild(_k,_b);_b.show();var _l=document.getElementById(_b._ifrm_elem._object_id);var _m;var _n;if(_l.contentDocument){_m=_l.contentDocument;_n=_m.getElementsByTagName('body')[0];}else if(_l.contentWindow){_m=_l.contentWindow.document;_n=_m.getElementsByTagName('body')[0];}if(!_n){_n=_m.createElement("body");_m.appendChild(_n);}var _o=_m.createElement("form");_o.id="postform";_o.name="postform";_o.action=application.services["svcurl"].url+"ClipReport4/clipreport2.jsp";_o.method="post";_n.appendChild(_o);if(_d.getRowCount()!=1){alert("레포트를 출력하기 위한 검색조건이 존재하지 않습니다.");return false;}if(_c&&_c.length>0){var _p=_m.createElement("input");_p.id="reportname";_p.name="reportname";_p.type="hidden";_p.value=_c;_o.appendChild(_p);}for(var _w=0;_w<_d.getColCount();_w++ ){var _q=_d.getColID(_w);var _r=_d.getColumn(0,_w);var _s=_r;if(_s&&_s.length>0){var _t=_m.createElement("input");_t.id=_q;_t.name=_q;_t.type="hidden";_t.value=_s;_o.appendChild(_t);}}try{var _u=_m.createElement('script');_u.type='text/javascript';_u.charset='utf-8';_u.defer=true;_u.async=true;_u.onload=function(){};var _v="document.domain = \""+document.domain+"\";";_u.text=[_v].join('');_n.appendChild(_u);}catch(e){}if(_m.getElementById('postform')){_m.getElementById('postform').submit();}};});this.on_initEvent=function(){this.addEventHandler("oninit",this.HRM060504_oninit,this);this.addEventHandler("onload",this.HRM060504_onload,this);this.Static07.addEventHandler("onclick",this.Static07_onclick,this);this.div_search.sta_STDR_DE01.addEventHandler("onclick",this.div_search_sta_STDR_DE_onclick,this);};this.loadIncludeScript("HRM060504.xfdl");this.loadPreloadList();};})();