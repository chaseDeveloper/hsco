﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SAM000002");this.set_classname("SAM000003");this.set_titletext("공통 콤보 표준 (New)");this._setFormPosition(0,0,1039,1529);}_a=new Dataset("ds_comCode00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_comCode01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_comCode02",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_comCode03",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","20","20",null,"156","20",null,this);_a.set_taborder("0");_a.style.set_border("1 solid #808080ff");this.addChild(_a.name,_a);_a=new Static("sta_gubun00","absolute","21","15","42","25",null,null,this.div_search);_a.set_taborder("6");_a.set_text("구분0 :");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_gubun00","absolute","77","15","260","25",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("7");_a.set_innerdataset("@ds_comCode00");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("sta_gubun01","absolute","21","47","42","25",null,null,this.div_search);_a.set_taborder("8");_a.set_text("구분1 :");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_gubun01","absolute","77","47","260","25",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("9");_a.set_innerdataset("@ds_comCode01");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("sta_gubun02","absolute","21","79","42","25",null,null,this.div_search);_a.set_taborder("12");_a.set_text("구분2 :");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_gubun02","absolute","77","79","260","25",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("13");_a.set_innerdataset("@ds_comCode02");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("sta_gubun03","absolute","21","111","42","25",null,null,this.div_search);_a.set_taborder("14");_a.set_text("구분3 :");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_gubun03","absolute","77","111","260","25",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("15");_a.set_innerdataset("@ds_comCode03");_a.set_codecolumn("CODE");_a.set_datacolumn("ALL_CODE_NM");_a=new Combo("cmb_gubun04","absolute","349","79","260","25",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("16");_a.set_innerdataset("@ds_comCode02");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_displaynulltext("선택하십시요.");_a=new Static("sta_gubun04","absolute","621","79","318","25",null,null,this.div_search);_a.set_taborder("17");_a.set_text("==> combo의 displaynulltext 속성을 활용하여 텍스트 표시");this.div_search.addChild(_a.name,_a);_a=new TextArea("txa_explanation","absolute","20","219",null,null,"20","20",this);_a.set_taborder("1");_a.set_wordwrap("english");_a.set_readonly("true");_a.set_value("I.  공통 함수 원형 위치\r\n  1. lib::comDataset.xjs\r\n\r\nII. 사용 함수\r\n  1. this.gfn_comboLoad = function (params, callbackAfter)\r\n\r\nIII.  함수 상세 설명\r\n  1. gfn_comboLoad\r\n     * 함수명     : gfn_comboLoad\r\n     * 설명       : 화면에 있는 Combo에 데이터를 Loading.\r\n     * params  \t\t: 1. params         : Data를 불러오는데 필요한 파라미터 배열 (2차 배열)\r\n                                        - param_1 : 반환받을 DATASET 명 \t\t\t(예: ds_comCode00)\r\n                                        - param_2\t: 그룹코드\t\t\t\t\t\t(예 : COM007)\r\n                                        - param_3\t: 사용여부\t\t    \t\t\t(예 : 1(사용), \"\"(사용안함))\r\n                                        - param_4\t: 콤보박스INDEX(0) 표시\t\t(예 : \"전체\", \"선택\", \" \"(공백), \"\"(첫번째데이터부터시작) )\r\n                    2. callbackAfter  : Data Load 후, 별도 처리해야할 함수\r\n                                        사용 예 : fn_afterLoading\r\n     * return Type: None\r\n     * 사용법\t\t: this.gfn_comboLoad(params, callbackAfter);\r\n\r\nIV. 사용 위치 및 예제\r\n    1. 함수 사용 위치 설명\r\n      - 함수 fn_loadCombo 를 생성한 후, 내부에서 정의된 함수를 사용한다.\r\n      - fn_loadCombo 함수는 form_onload 함수 내부에서 호출한다.\r\n      - Combo 데이터를 로드한 후, 처리해야 할 부분이 있다면, fn_loadCombo 아래에 함수를 만들어 기술한다.\r\n\r\n    2. 사용 예제\r\n\r\n      ====== 생략 ======\r\n\r\n      /***********************************************************************\r\n       * onInit / onLoad 영역\r\n       ***********************************************************************/\r\n      this.SAM000002_oninit = function(obj:Form, e:nexacro.InitEventInfo)\r\n      {\r\n      \t// Form 초기화\r\n      \tthis.fn_init_form();\r\n      \r\n      \t// DataSet 초기화\r\n      \tthis.fn_init_dataset();\t\r\n      }\r\n      \r\n      this.SAM000002_onload = function(obj:Form, e:nexacro.LoadEventInfo)\r\n      {\r\n      \tthis.fn_loadCombo();\r\n      }\r\n\r\n      ====== 중략 ======\r\n\r\n      /*\r\n       * 함수명  \t: fn_loadCombo\r\n       * 설명 \t\t: 화면의 Combo 에 데이터를 불러온다.\r\n       * params  \t\t: None\r\n       * return Type \t: None\r\n       * 사용법\t\t: this.fn_loadCombo();\r\n       */\r\n      this.fn_loadCombo = function ()\r\n      {\r\n      /*\r\n      params  \t\t: 1. param_1    : 반환받을 DATASET 명 \t\t\t(예: ds_comCode00)\r\n                        2. param_2\t: 그룹코드\t\t\t\t\t\t(예 : COM007)\r\n                        3. param_3\t: 사용여부\t\t    \t\t\t(예 : 1(사용), \"\"(사용안함))\r\n                        4. param_4\t: 콤보박스INDEX(0) 표시\t\t(예 : \"전체\", \"선택\", \" \"(공백), \"\"(첫번째데이터부터시작) )\r\n      */\r\n      \tvar comboParams = [\r\n      \t\t\t[\"ds_comCode00\", \"CMP001\", \"1\", \"전체\"],\r\n      \t\t\t[\"ds_comCode01\", \"HOU0A2\", \"1\", \"선택\"],\r\n      \t\t\t[\"ds_comCode02\", \"CMP003\", \"1\", \" \"],\r\n      \t\t\t[\"ds_comCode03\", \"CMP004\", \"1\", \"\"]\r\n      \t\t];\r\n      \t\r\n      \tthis.gfn_comboLoad(comboParams, this.fn_callbackAfter);\r\n      }\r\n      \r\n      /*\r\n       * 함수명  \t: fn_callbackAfter\r\n       * 설명 \t\t: callback 처리 후에 더 필요한 작업이 있을 경우, 작성\r\n       * params  \t\t: None\r\n       * return Type \t: None\r\n       * 사용법\t\t: this.gfn_comboLoad(comboParams, this.fn_callbackAfter);\r\n       */\r\n      this.fn_callbackAfter = function ()\r\n      {\r\n      \talert(\"The End!!!!!\");\r\n      }\r\n");this.addChild(_a.name,_a);_a=new Static("sta_explanation","absolute","20","189","231","26",null,null,this);_a.set_taborder("2");_a.set_text(">> 설명");this.addChild(_a.name,_a);_a=new Layout("default","",0,156,this.div_search,function(_b){_b.set_taborder("0");_b.style.set_border("1 solid #808080ff");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1039,1529,this,function(_b){_b.set_classname("SAM000003");_b.set_titletext("공통 콤보 표준 (New)");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("SAM000003.xfdl","lib::comInclude.xjs");this.registerScript("SAM000003.xfdl",function(){this.SAM000002_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.SAM000002_onload=function(_a,_b){this.fn_loadCombo();};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_loadCombo=function(){var _a=[["ds_comCode00","CMP001","1","전체"],["ds_comCode01","HOU0A2","1","선택"],["ds_comCode02","CMP003","1"," "],["ds_comCode03","CMP004","1",""]];this.gfn_comboLoad(_a,this.fn_callbackAfter);};this.fn_callbackAfter=function(){alert("The End!!!!!");};});this.on_initEvent=function(){this.addEventHandler("oninit",this.SAM000002_oninit,this);this.addEventHandler("onload",this.SAM000002_onload,this);};this.loadIncludeScript("SAM000003.xfdl");};})();