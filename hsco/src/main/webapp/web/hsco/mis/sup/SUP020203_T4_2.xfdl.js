﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SUP020203_T4_2");this.set_classname("SUP020203_T4_2");this.set_titletext("검토의견등록(실시제안)");this._setFormPosition(0,0,700,600);}_a=new Static("sta_WFDA_Label03","absolute","362",null,"231","27",null,"542",this);_a.set_taborder("16");_a.set_cssclass("sta_WF_Labelbg");_a.style.set_border("1 solid #e9eaecff");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","470",null,"12","21",null,"545",this);_a.set_taborder("17");_a.set_text("~");this.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label09","absolute","119","57",null,null,"1","272",this);_a.set_taborder("11");_a.set_cssclass("sta_WF_Labelbg");_a.style.set_border("1 solid #e9eaecff");this.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label04","absolute","119","5",null,"27","1",null,this);_a.set_taborder("12");_a.set_cssclass("sta_WF_Labelbg");_a.style.set_border("1 solid #e9eaecff");this.addChild(_a.name,_a);_a=new TextArea("txt_deptOpinion","absolute","123","62",null,null,"6","278",this);_a.set_taborder("8");this.addChild(_a.name,_a);_a=new Static("sta_ACNUTNO08","absolute","1","57",null,"271","579",null,this);_a.set_taborder("7");_a.set_text("실시내용");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 0 0 10");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("sta_ACNUTNO03","absolute","1","5",null,"27","579",null,this);_a.set_taborder("0");_a.set_text("최초실시일자");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 0 0 10");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","36","0","500","5",null,null,this);_a.set_taborder("13");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_ACNUTNO01","absolute","350","31",null,"27","230",null,this);_a.set_taborder("5");_a.set_text("예산절감액");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 0 0 10");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label01","absolute","468","31",null,"27","1",null,this);_a.set_taborder("14");_a.set_cssclass("sta_WF_Labelbg");_a.style.set_border("1 solid #e9eaecff");this.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label02","absolute","119","327",null,null,"1","1",this);_a.set_taborder("15");_a.set_cssclass("sta_WF_Labelbg");_a.style.set_border("1 solid #e9eaecff");this.addChild(_a.name,_a);_a=new TextArea("txt_deptOpinion00","absolute","123","332",null,null,"6","7",this);_a.set_taborder("10");this.addChild(_a.name,_a);_a=new Static("sta_ACNUTNO02","absolute","1","327",null,null,"579","1",this);_a.set_taborder("9");_a.set_text("개선효과");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 0 0 10");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label00","absolute","119","31",null,"27","349",null,this);_a.set_taborder("18");_a.set_cssclass("sta_WF_Labelbg");_a.style.set_border("1 solid #e9eaecff");this.addChild(_a.name,_a);_a=new Calendar("cal_oprtnPdEnd","absolute","240","34","101","21",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("4");_a.set_dateformat("yyyy-MM-dd");_a.set_enable("true");_a.style.set_buttonsize("15");_a=new Static("Static00","absolute","227","34","12","21",null,null,this);_a.set_taborder("19");_a.set_text("~");this.addChild(_a.name,_a);_a=new Calendar("cal_oprtnPdBegin","absolute","123","34","101","21",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("3");_a.set_dateformat("yyyy-MM-dd");_a.style.set_buttonsize("15");_a=new MaskEdit("MaskEdit00","absolute","472","34","150","21",null,null,this);_a.set_taborder("6");_a.set_mask("##,##");this.addChild(_a.name,_a);_a=new Calendar("cal_oprtnPdBegin00","absolute","123","8","101","21",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("1");_a.set_dateformat("yyyy-MM-dd");_a.style.set_buttonsize("15");_a=new Static("sta_ACNUTNO00","absolute","1","31",null,"27","579",null,this);_a.set_taborder("2");_a.set_text("측정기간");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 0 0 10");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Layout("default","",700,600,this,function(_b){_b.set_classname("SUP020203_T4_2");_b.set_titletext("검토의견등록(실시제안)");});this.addLayout(_a.name,_a);_a=new BindItem("item59","txt_deptOpinion","value","ds_propseMastr","OPRTN_CN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","txt_deptOpinion00","value","ds_propseMastr","IMPRVM_EFFECT2");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item52","cal_oprtnPdEnd","value","ds_propseMastr","MESURE_PD_END");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item51","cal_oprtnPdBegin","value","ds_propseMastr","MESURE_PD_BEGIN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","cal_oprtnPdBegin00","value","ds_propseMastr","FRST_OPRTN_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","MaskEdit00","value","ds_propseMastr","BUDGET_REDCN_AMONUT");this.addChild(_a.name,_a);_a.bind();_a=null;};this.on_initEvent=function(){};this.loadIncludeScript("SUP020203_T4_2.xfdl");};})();