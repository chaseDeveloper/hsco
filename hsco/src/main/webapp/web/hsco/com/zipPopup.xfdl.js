﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("zipPopup");this.set_classname("zipPopup");this.set_titletext("우편번호팝업");this._setFormPosition(0,0,450,500);}_a=new Layout("default","",450,500,this,function(_b){_b.set_classname("zipPopup");_b.set_titletext("우편번호팝업");});this.addLayout(_a.name,_a);_a=null;};this.on_initEvent=function(){};this.loadIncludeScript("zipPopup.xfdl");};})();