﻿if(!nexacro.FileDownload){nexacro.FileDownloadEventInfo=function(_a,_b,_c,_d){this.id=this.eventid=_b||"onsuccess";this.fromobject=this.fromreferenceobject=_a;this.url=_c;this.targetfullpath=_d;};var _pFileDownloadEventInfo=nexacro._createPrototype(nexacro.Event,nexacro.FileDownloadEventInfo);nexacro.FileDownloadEventInfo.prototype=_pFileDownloadEventInfo;_pFileDownloadEventInfo._type_name="FileDownloadEventInfo";delete _pFileDownloadEventInfo;nexacro.FileDownloadErrorEventInfo=function(_a,_b,_c,_d,_e,_f,_g,_h){nexacro.ErrorEventInfo.call(this,_a,_b,_c,_d,_e,_f,_g,_h);};var _pFileDownloadErrorEventInfo=nexacro._createPrototype(nexacro.ErrorEventInfo,nexacro.FileDownloadErrorEventInfo);nexacro.FileDownloadErrorEventInfo.prototype=_pFileDownloadErrorEventInfo;_pFileDownloadErrorEventInfo._type_name="FileDownloadErrorEventInfo";delete _pFileDownloadErrorEventInfo;nexacro.FileDownload=function(_a,_b,_c,_d,_e,_f,_g,_h,_i){nexacro.Component.call(this,_a,_b,_c,_d,_e,_f,_g,_h,_i);this.downloadurl="";this.wordwrap="char";this.downloadfilename="";this.filedialogpath="";this.openedpath="";this.filefilter="";this.filefilterindex=0;this._handle=null;this._event_list={"onclick":1,"ondblclick":1,"onkeypress":1,"onkeydown":1,"onkeyup":1,"onkillfocus":1,"onsetfocus":1,"ondrag":1,"ondrop":1,"ondragenter":1,"ondragleave":1,"ondragmove":1,"onlbuttondown":1,"onlbuttonup":1,"onrbuttondown":1,"onrbuttonup":1,"onmouseenter":1,"onmouseleave":1,"onmousemove":1,"onmove":1,"onsize":1,"onsuccess":1,"onerror":1,"ontouchstart":1,"ontouchmove":1,"ontouchend":1,"onpinchstart":1,"onpinch":1,"onpinchend":1,"onflingstart":1,"onfling":1,"onflingend":1,"onlongpress":1,"onslidestart":1,"onslide":1,"onslideend":1};this._accessibility_role="button";};var _pFileDownload=nexacro._createPrototype(nexacro.Component,nexacro.FileDownload);nexacro.FileDownload.prototype=_pFileDownload;_pFileDownload._type_name="FileDownload";_pFileDownload.on_apply_style_align=function(_a){var _b=this._text_elem;if(_b&&_a){var _c=_a.halign==""?"center":_a._halign;var _d=_a.valign==""?"middle":_a._valign;_b.setElementAlignXY(_c,_d);}};_pFileDownload.on_apply_style_color=function(_a){var _b=this._text_elem;if(_b){_b.setElementColor(_a);}};_pFileDownload.on_apply_style_font=function(_a){var _b=this._text_elem;if(_b){_b.setElementFont(_a);}};_pFileDownload.on_apply_style_accessibility=function(_a){if(_a){this._control_element.setAccessibility(_a);}};_pFileDownload.on_apply_custom_pseudo=function(_a){var _b=this.currentstyle;var _c=this.on_find_CurrentStyle_font(_a);if(_b.font!=_c){_b.font=_c;this.on_apply_style_font(_c);}var _d=this.on_find_CurrentStyle_letterspace(_a);if(_b.letterspace!=_d){_b.letterspace=_d;this.on_apply_style_letterspace(_d);}var _e=this.on_find_CurrentStyle_color(_a);if(_b.color!=_e){_b.color=_e;this.on_apply_style_color(_e);}var _f=this.on_find_CurrentStyle_align(_a);if(_b.align!=_f){_b.align=_f;this.on_apply_style_align(_f);}var _g=this.on_find_CurrentStyle_rtlimagemirroring(_a);if(_b.rtlimagemirroring!=_g){_b.rtlimagemirroring=_g;this.on_apply_style_rtlimagemirroring(_g);}};_pFileDownload.on_create_contents=function(){var _a=this.getElement();if(_a){nexacro._create_filedownload_handle(this.on_load,this);var _b=new nexacro.TextBoxElement(_a);this._text_elem=_b;var _c=this.currentstyle.align.halign==""?"left":this.currentstyle.align._halign;var _d=this.currentstyle.align.valign==""?"middle":this.currentstyle.align._valign;_b.setElementSize(this._client_width,this._client_height);_b.setElementColor(this.currentstyle.color);_b.setElementFont(this.currentstyle.font);_b.setElementAlignXY(_c,_d);_b.setElementLetterSpace(this.currentstyle.letterspace);}};_pFileDownload.on_created_contents=function(){var _a=this._text_elem;if(_a){_a.create();}this.on_apply_wordwrap();this.on_apply_prop_rtldirection();};_pFileDownload.on_destroy_contents=function(){var _a=this._text_elem;if(_a){_a.destroy();this._text_elem=null;}nexacro._destroy_filedownload_handle(this._handle);};_pFileDownload.on_change_containerRect=function(_a,_b){var _c=this._text_elem;if(_c){_c.setElementSize(_a,_b);}};_pFileDownload.set_text=function(_a){this.text=_a;this.on_apply_text();};_pFileDownload.on_apply_text=function(){var _a=this._control_element;if(this._control_element){var _b=this._text_elem;if(!_b){_b=new nexacro.TextBoxElement(_a);this._text_elem=_b;this.on_apply_wordwrap();_b.setElementSize(this._client_width,this._client_height);if(this._is_created){var _c=this.currentstyle.align.halign==""?"left":this.currentstyle.align._halign;var _d=this.currentstyle.align.valign==""?"middle":this.currentstyle.align._valign;_b.setElementColor(this.currentstyle.color);_b.setElementFont(this.currentstyle.font);_b.setElementAlignXY(_c,_d);_b.setElementLetterSpace(this.currentstyle.letterspace);_b.create();}}var _e=this.expr;if(_e&&_e.length>0){_e=_e.trim().split(":");var _f=_e.length;var _g=new nexacro.ExprParser();var _h,_i;var _j;if(_f==1){_j=_e[0];}else{if(_e[0].trim().toUpperCase()!="EXPR"){_j=_e.join(":");}else{_j=_e.slice(1).join(":");}}_h=_g.makeExpr(this,_j);_i=nexacro._createInlineFunc(_h,["comp"]);if(_i){try{var _k=nexacro._toString(_i.call(null,this));if(_k!=this.displaytext){this.displaytext=_k;}}catch(e){return;}}}else{this.displaytext=this.text;}_b.setElementText(this.displaytext);if(this.displaytext&&this.displaytext!=""){this._text_width= -1;this._text_height= -1;}else{this._text_width=0;this._text_height=0;}}};_pFileDownload.on_apply_expr=function(){this.on_apply_text();};_pFileDownload.set_downloadurl=function(_a){if(_a!=this.downloadurl){this.downloadurl=_a;}};_pFileDownload.set_wordwrap=function(_a){if(typeof (_a)=="string"){_a=_a.toLowerCase();}if(_a!=this.wordwrap){this.wordwrap=_a;this.on_apply_wordwrap();}};_pFileDownload.on_apply_wordwrap=function(){if(this._text_elem){this._text_elem.setElementWordWrap(this.wordwrap);}};_pFileDownload.set_downloadfilename=function(_a){if(_a!=this.downloadfilename){this.downloadfilename=_a;}};_pFileDownload.on_apply_prop_rtldirection=function(){nexacro.Component.prototype.on_apply_prop_rtldirection.call(this);var _a=this._text_elem;if(_a){_a.setElementRtlDirection(this._rtldirection);}};_pFileDownload.set_filedialogpath=function(_a){this.filedialogpath=_a;};_pFileDownload.set_openedpath=function(_a){};_pFileDownload.set_filefilter=function(_a){this.filefilter=_a;};_pFileDownload.set_filefilterindex=function(_a){this.filefilterindex=_a;};_pFileDownload.download=function(_a,_b){if((nexacro.Browser=="Runtime")&&(!this._handle)){return false;}var _c=false;var _d;var _e=this.downloadurl;var _f=this.downloadfilename;if(_b!=undefined){_b=nexacro._toString(_b);}if(_a!=undefined){_a=nexacro._toString(_a);_a=nexacro._getImageLocation(_a);_d=nexacro._download(_a,this._handle,_f,_b,undefined,this.filedialogpath,this.filefilter,this.filefilterindex);if(_d===null){return false;}_c=true;}else if(_e&&_e!=undefined&&_e!=""){_e=nexacro._getServiceLocation(_e);_d=nexacro._download(_e,this._handle,_f,_b,undefined,this.filedialogpath,this.filefilter,this.filefilterindex);if(_d===null){return false;}_c=true;}if(_d!=undefined){var _g=_d.lastIndexOf("\\");if(_g>0){this.openedpath=_d.substring(0,_g+1);}}return _c;};_pFileDownload.on_fire_onsuccess=function(_a,_b){application._endCommProgress();if(this.onsuccess&&this.onsuccess._has_handlers&&_a!=""){var _c=new nexacro.FileDownloadEventInfo(this,"onsuccess",_a,_b);return this.onsuccess._fireEvent(this,_c);}};_pFileDownload.on_fire_onerror=function(_a,_b,_c,_d,_e,_f,_g){application._endCommProgress();if(this.onerror&&this.onerror._has_handlers){var _h=new nexacro.FileDownloadErrorEventInfo(_a,"onerror",_b,_c,_d,_e,_f,_g);return this.onerror._fireEvent(this,_h);}};_pFileDownload._addCookieToGlobalVariable=function(_a){if(application&&_a){var _b=_a.split("; ");var _c=_b.length;var _d;var _e,_f;for(var _g=0;_g<_c;_g++ ){_d=_b[_g].indexOf("=");if(_d<=0){continue;}_e=_b[_g].substr(0,_d);_f=_b[_g].substr(_d+1);if(nexacro._indexOf(application._cookie_variables,_e)>=0){application[_e]=_f;}else{if(application.addcookietovariable&&(nexacro._indexOf(application._variables,_e)<0)){application._addVariable(_e,_f,true);}}}}};_pFileDownload.on_load=function(_a,_b,_c,_d,_e,_f,_g){if(_g){this._addCookieToGlobalVariable(_g);}if(_a<0){application._onHttpSystemError(this,true,this,_d,_c,_e,_c,null);var _h=nexacro._GetSystemErrorMsg(this,_d);this.on_fire_onerror(this,"ObjectError",_h,this,9901,null,null);}else{this.on_fire_onsuccess(_c,_b);}};_pFileDownload.on_fire_onclick=function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l){var _m=nexacro.Component.prototype.on_fire_onclick.call(this,_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l);this.download();return _m;};_pFileDownload.on_fire_sys_onkeyup=function(_a,_b,_c,_d,_e,_f){var _g=nexacro.Component.prototype.on_fire_sys_onkeyup.call(this,_a,_b,_c,_d,_e,_f);if(_a==13||_a==32){this.on_fire_onclick("none",false,false,false, -1, -1, -1, -1, -1, -1,this,this);}return _g;};_pFileDownload._getDlgCode=function(_a,_b,_c,_d){return {want_tab:false,want_return:true,want_escape:false,want_chars:false,want_arrows:false};};delete _pFileDownload;nexacro.FileDownloadCtrl=function(_a,_b,_c,_d,_e,_f,_g,_h,_i){nexacro.FileDownload.call(this,_a,_b,_c,_d,_e,_f,_g,_h,_i);this._isSubControl=true;};var _pFileDownloadCtrl=nexacro._createPrototype(nexacro.FileDownload,nexacro.FileDownloadCtrl);nexacro.FileDownloadCtrl.prototype=_pFileDownloadCtrl;nexacro._setForControlStyleFinder(_pFileDownloadCtrl);_pFileDownloadCtrl._type_name="FileDownloadControl";delete _pFileDownloadCtrl;}