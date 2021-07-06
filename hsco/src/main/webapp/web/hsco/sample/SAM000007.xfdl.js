﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SAM000007");this.set_classname("Sample_06");this.set_titletext("체크버튼 그룹 동적 생성");this._setFormPosition(0,0,1039,799);}_a=new Dataset("ds_exam",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">A</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">B</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"CODE_NM\">C</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"CODE_NM\">D</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"CODE_NM\">E</Col></Row><Row><Col id=\"CODE\">6</Col><Col id=\"CODE_NM\">F</Col></Row><Row><Col id=\"CODE\">7</Col><Col id=\"CODE_NM\">GGGGGGGG</Col></Row><Row><Col id=\"CODE\">8</Col><Col id=\"CODE_NM\">H</Col></Row><Row><Col id=\"CODE\">9</Col><Col id=\"CODE_NM\">I</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"CODE_NM\">J</Col></Row><Row><Col id=\"CODE\">11</Col><Col id=\"CODE_NM\">K</Col></Row><Row><Col id=\"CODE\">12</Col><Col id=\"CODE_NM\">L</Col></Row><Row><Col id=\"CODE\">13</Col><Col id=\"CODE_NM\">M</Col></Row><Row><Col id=\"CODE\">14</Col><Col id=\"CODE_NM\">N</Col></Row><Row><Col id=\"CODE\">15</Col><Col id=\"CODE_NM\">O</Col></Row><Row><Col id=\"CODE\">16</Col><Col id=\"CODE_NM\">P</Col></Row><Row><Col id=\"CODE\">17</Col><Col id=\"CODE_NM\">Q</Col></Row><Row><Col id=\"CODE\">18</Col><Col id=\"CODE_NM\">R</Col></Row><Row><Col id=\"CODE\">19</Col><Col id=\"CODE_NM\">S</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","10","48","220","514",null,null,this);_a.set_taborder("0");_a.set_binddataset("ds_exam");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"CODE\"/><Cell col=\"1\" disptype=\"normal\" text=\"CODE_NM\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:CODE\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:CODE_NM\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_makeChkGroup","absolute","9","10","220","29",null,null,this);_a.set_taborder("1");_a.set_text("체크 그룹 만들기");_a.style.set_border("2 solid #808080ff");this.addChild(_a.name,_a);_a=new Div("div_chkGrp","absolute","251","10","773","286",null,null,this);_a.set_taborder("2");_a.style.set_border("1 solid #808080ff");this.addChild(_a.name,_a);_a=new Button("btn_makeSearchStr","absolute","9","578","220","29",null,null,this);_a.set_taborder("3");_a.set_text("조회 조건 값 만들기");_a.style.set_border("2 solid #808080ff");this.addChild(_a.name,_a);_a=new TextArea("txa_explanation","absolute","251","307",null,null,"15","4",this);_a.set_taborder("4");_a.set_value("I.  공통 함수 원형 위치\r\n  1. lib::comForm.xjs\r\n\r\nII. 사용 함수\r\n  1. this.gfn_makeCheckGroup = function (ds : Dataset, div : Div, cols)\r\n\r\nIII.  함수 상세 설명\r\n  1. gfn_makeCheckGroup\r\n   * 설명 \t\t    : Dataset을 토대로 CheckBox를 생성한다.\r\n   * params  \t    : 1. ds - Dataset\r\n                    2. div - Div\r\n                    3. cols - CheckBox의 열 수 (예 : 1 - 1줄, 2 - 2줄, ...)\r\n   * return Type \t: 없음\r\n   * 사용법\t\t    : this.gfn_makeCheckGroup(this.ds_chkGrp, this.div_chkGrp, 3);\r\n\r\nIV. 사용 위치 및 예제\r\n    1. 함수 사용 위치 설명\r\n      - CheckBox로 표현할 코드 데이터를 불러온 후, Callback 이후에 처리할 함수에 기술해준다.\r\n      - 만약, Dataset과 Data를 Form에서 직접 생성한 후, 사용하는 경우에는, Form_onload 이벤트함수에서 사용하면 된다.\r\n      * 아래 예제에는 편의상, Button을 생성하여 클릭하면 동작하도록 되어 있다.\r\n\r\n    2. 사용 예제\r\n      include \"lib::comInclude.xjs\"\r\n      \r\n      // CheckBox 만들기\r\n      this.btn_makeChkGroup_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)\r\n      {\r\n      \t/*******************************************************************************\r\n      \t * 함수 위치   : lib::comForm.xjs\r\n      \t * 함수명  \t: gfn_makeCheckGroup\r\n      \t * 설명 \t\t: Dataset을 토대로 CheckBox를 생성한다.\r\n      \t * params  \t\t: 1. ds - Dataset\r\n      \t\t\t\t\t  2. div - Div\r\n      \t\t\t\t\t  3. cols - CheckBox의 열 수 (예 : 1 - 1줄, 2 - 2줄, ...)\r\n      \t * return Type \t: None\r\n      \t * 사용법\t\t: this.gfn_makeCheckGroup(this.ds_chkGrp, this.div_chkGrp, 3);\r\n      \t ******************************************************************************/\r\n      \tthis.gfn_makeCheckGroup(this.ds_exam, this.div_chkGrp, 4);\r\n      }\r\n      \r\n      // 체크된 값 가져오기\r\n      this.btn_makeSearchStr_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)\r\n      {\r\n      \talert(this.div_chkGrp.text);\r\n      }\r\n");_a.set_wordwrap("english");_a.set_readonly("true");this.addChild(_a.name,_a);_a=new Layout("default","",773,286,this.div_chkGrp,function(_b){_b.set_taborder("2");_b.style.set_border("1 solid #808080ff");});this.div_chkGrp.addLayout(_a.name,_a);_a=new Layout("default","",1039,799,this,function(_b){_b.set_classname("Sample_06");_b.set_titletext("체크버튼 그룹 동적 생성");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("SAM000007.xfdl","lib::comInclude.xjs");this.registerScript("SAM000007.xfdl",function(){this.btn_makeChkGroup_onclick=function(_a,_b){this.gfn_makeCheckGroup(this.ds_exam,this.div_chkGrp,4);};this.btn_makeSearchStr_onclick=function(_a,_b){alert(this.div_chkGrp.text);};});this.on_initEvent=function(){this.btn_makeChkGroup.addEventHandler("onclick",this.btn_makeChkGroup_onclick,this);this.btn_makeSearchStr.addEventHandler("onclick",this.btn_makeSearchStr_onclick,this);};this.loadIncludeScript("SAM000007.xfdl");};})();