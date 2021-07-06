﻿if(!nexacro.Static){nexacro.Static_Style=function(_a){nexacro.Style.call(this);if(_a){this._target=_a;}this.linespace=null;};var _pStaticStyle=nexacro._createPrototype(nexacro.Style,nexacro.Static_Style);nexacro.Static_Style.prototype=_pStaticStyle;eval(nexacro._createValueAttributeEvalStr("_pStaticStyle","linespace"));_pStaticStyle.__custom_emptyObject=function(){this.linespace=null;};_pStaticStyle.__get_custom_style_value=function(){var _a="";if(this.linespace&&this.linespace._is_empty){_a+="linespace:"+this.linespace._value+"; ";}return _a;};nexacro.Static_CurrentStyle=function(){nexacro.CurrentStyle.call(this);this.linespace=null;};var _pStaticCurrentStyle=nexacro._createPrototype(nexacro.CurrentStyle,nexacro.Static_CurrentStyle);nexacro.Static_CurrentStyle.prototype=_pStaticCurrentStyle;_pStaticCurrentStyle.__custom_emptyObject=_pStaticStyle.__custom_emptyObject;_pStaticCurrentStyle.__get_custom_style_value=_pStaticStyle.__get_custom_style_value;delete _pStaticStyle;delete _pStaticCurrentStyle;nexacro.Static=function(_a,_b,_c,_d,_e,_f,_g,_h,_i){nexacro.Component.call(this,_a,_b,_c,_d,_e,_f,_g,_h,_i);this.text="";this.expr=null;this.wordwrap="none";this.usedecorate=false;this.tabstop=false;this._text="";this._expr=null;this._text_elem=null;this._decorate_text="";this._decorate_link_url="";this._is_focus_accept=false;this._accessibility_role="static";};var _pStatic=nexacro._createPrototype(nexacro.Component,nexacro.Static);nexacro.Static.prototype=_pStatic;_pStatic._type_name="Static";_pStatic.on_apply_custom_pseudo=function(_a){var _b=this.currentstyle;var _c=this.on_find_CurrentStyle_font(_a);if(_b.font!=_c){_b.font=_c;this.on_apply_style_font(_c);}var _d=this.on_find_CurrentStyle_letterspace(_a);if(_b.letterspace!=_d){_b.letterspace=_d;this.on_apply_style_letterspace(_d);}var _e=this.on_find_CurrentStyle_color(_a);if(_b.color!=_e){_b.color=_e;this.on_apply_style_color(_e);}var _f=this.on_find_CurrentStyle_align(_a);if(_f!=_b.align){_b.align=_f;this.on_apply_style_align(_f);}var _g=this.on_find_CurrentStyle_linespace(_a);if(_g!=_b.linespace){_b.linespace=_g;this.on_apply_style_linespace(_g);}};_pStatic.on_apply_style_color=function(_a){if(this._text_elem){if(_a){this._text_elem.setElementColor(_a);}else{var _a=new nexacro.Style_color("");this._text_elem.setElementColor(_a);_a=null;}}};_pStatic.on_apply_style_font=function(_a){if(this._text_elem){this._text_elem.setElementFont(_a);}};_pStatic.on_apply_style_align=function(_a){if(this._text_elem&&_a){var _b=_a.halign==""?"center":_a._halign;var _c=_a.valign==""?"middle":_a._valign;this._text_elem.setElementAlignXY(_b,_c);}};_pStatic.on_apply_style_linespace=function(_a){var _b=this._text_elem;if(_b){var _c=_a?_a:0;var _d=this.on_find_CurrentStyle_letterspace(this._pseudo);var _e=nexacro._getTextSize2(_d,"Wj",this.on_find_CurrentStyle_font(this._pseudo));var _f=_e[1]+nexacro._toInt(_c);if(this._adjust_height<_f){_c=(this._adjust_height>_e[1])?(this._adjust_height-_e[1]):0;}_b.setElementLineSpace(_c);}};_pStatic.on_find_CurrentStyle_linespace=function(_a){return this._find_pseudo_obj("linespace",_a);};_pStatic.on_update_style_padding=function(){var _a=this.currentstyle.padding=this.on_find_CurrentStyle_padding(this._pseudo);this._control_element.setElementPadding(_a);this._updateClientSize(this._control_element);};_pStatic.on_update_style_linespace=function(){this.on_apply_style_linespace(this.currentstyle.linespace=this.on_find_CurrentStyle_linespace(this._pseudo));};_pStatic.on_create_contents=function(){var _a=this.getElement();if(_a&&this.text){var _b=new nexacro.TextBoxElement(_a);var _c="left";var _d="middle";var _e=this.currentstyle.align;if(_e){_c=_e.halign==""?"center":_e._halign;_d=_e.valign==""?"middle":_e._valign;}this._text_elem=_b;_b.setElementSize(this._client_width,this._client_height);_b.setElementColor(this.currentstyle.color);_b.setElementFont(this.currentstyle.font);_b.setElementAlignXY(_c,_d);_b.setElementLetterSpace(this.currentstyle.letterspace);_b=null;}else if(_a&&!this.text&&this._text_elem){this._text_elem.setParentElement(_a);}};_pStatic.on_created_contents=function(){var _a=this._text_elem;if(_a){_a.create();}if(this.expr){this.on_apply_expr();}this.on_apply_wordwrap();this.on_apply_style_linespace(this.currentstyle.linespace);this.on_apply_prop_rtldirection();};_pStatic.on_destroy_contents=function(){var _a=this._text_elem;if(_a){_a.destroy();this._text_elem=null;}_a=null;};_pStatic.on_change_containerRect=function(_a,_b){var _c=this._text_elem;var _d=this.on_find_CurrentStyle_align(this._pseudo);if(this._text_elem){_c.setElementSize(_a,_b);this.on_apply_style_align(_d);}};_pStatic.on_create_custom_style=function(){return new nexacro.Static_Style(this);};_pStatic.on_create_custom_currentStyle=function(){return new nexacro.Static_CurrentStyle();};_pStatic.on_apply_text=function(){var _a=this.getElement();if(_a){var _b=this._text_elem;if(_b&&this.usedecorate&&(nexacro.Browser=="IE"&&nexacro.BrowserVersion<=8)&&this._is_created){this._text_elem.destroy();this._text_elem=null;delete this._text_elem;_b=null;}if(!_b){var _b=new nexacro.TextBoxElement(this.getElement());var _c="left";var _d="middle";var _e=this.currentstyle.align;if(_e){_c=_e.halign==""?"center":_e._halign;_d=_e.valign==""?"middle":_e._valign;}this._text_elem=_b;_b.setElementSize(this._client_width,this._client_height);_b.setElementColor(this.currentstyle.color);_b.setElementFont(this.currentstyle.font);_b.setElementAlignXY(_c,_d);_b.setElementLetterSpace(this.currentstyle.letterspace);if(this._is_created){_b.create();}this.on_apply_wordwrap();this.on_apply_style_linespace(this.currentstyle.linespace);}var _f=this.text;var _g=this.expr;_f=nexacro._toString(_f);if(_f&&_f.indexOf("\r")!= -1){_f=_f.replace(/\r/g,"");}if(_g&&_g.length>0){_g=_g.trim().split(":");var _h=_g.length;var _i=new nexacro.ExprParser();var _j,_k;var _l;if(_h==1){_l=_g[0];}else{if(_g[0].trim().toUpperCase()!="EXPR"){_l=_g.join(":");}else{_l=_g.slice(1).join(":");}}_j=_i.makeExpr(this,_l);_k=nexacro._createInlineFunc(_j,["comp"]);if(_k){try{_f=nexacro._toString(_k.call(null,this));this.displaytext=this._parse_decoratetext(_f);}catch(e){return;}}}else{this.displaytext=this._parse_decoratetext(_f);}if(this.usedecorate){_b.setElementDecorateText(_f);}else{_b.decoration="";_b.setElementText(_f);}this._refreshAccessibilityValue();}};_pStatic.on_apply_expr=function(){this.on_apply_text();};_pStatic.set_usedecorate=function(_a){_a=nexacro._toBoolean(_a);if(_a!=this.usedecorate){this.usedecorate=_a;this.on_apply_usedecorate();}};_pStatic.on_apply_usedecorate=function(){this.on_apply_text();this.on_apply_wordwrap();};_pStatic.set_wordwrap=function(_a){if(_a!=this.wordwrap){this.wordwrap=_a;this.on_apply_wordwrap();}};_pStatic.on_apply_wordwrap=function(){if(this._text_elem){this._text_elem.setElementWordWrap(this.wordwrap);}};_pStatic.set_linespace=function(_a){_a=nexacro._toInt(_a);if(_a&&_a!=this.linespace){this.linespace=_a;this.on_apply_linespace();}};_pStatic.on_apply_linespace=function(){var _a=this._text_elem;if(_a){var _b=(this.linespace<0)?"":this.linespace+"px";_a.setElementLineSpace(_b);}};_pStatic.on_apply_prop_rtldirection=function(){nexacro.Component.prototype.on_apply_prop_rtldirection.call(this);if(nexacro.Browser=="Runtime"&&this._text_elem){this._text_elem.setElementRtlDirection(this._rtldirection);}this.on_change_containerRect(this._client_width,this._client_height);};_pStatic.on_get_prop_tabstop=function(){if(nexacro._enableaccessibility){var _a=this.on_find_CurrentStyle_accessibility(this._pseudo);if(_a&&_a.enable&&_a.role=="link"){return true;}}return false;};_pStatic._isFocusAcceptable=function(){return nexacro._enableaccessibility;};_pStatic.on_get_style_accessibility_label=function(){if(this.usedecorate){return this.displaytext;}else{return this.text;}};_pStatic._getUrl=function(){var _a=this._text_elem;if(_a&&this.usedecorate){var _b=_a.decoration;if(_b!=this._decorate_text){this._decorate_text=_b;var _c=_b?_b.length:0;var _d="";for(var _h=0;_h<_c;_h++ ){var _e=_b.charAt(_h);if(_e=='<'&&_b.charAt(_h+1)=='l'){var _f=0;for(var _i=_h+4;_i<_c;_i++ ){var _g=_b.charAt(_i);if(_g=='\''){if(_f!=0&&_f!=_i){break;}_f=_i;continue;}if(_f!=0){_d+=_g;}}break;}}this._decorate_link_url=_d;}return this._decorate_link_url;}return "";};_pStatic._parse_decoratetext=function(_a){var _b=_a;if(this.usedecorate){var _c=[/<\/?ff\s+[v]\s*=(\'|\")/g,/<\/?fs\s+[v]\s*=(\'|\")/g,/<\/?fc\s+[v]\s*=(\'|\")/g,/<\/?b\s+[v].*?>/g,/<\/?i\s+[v].*?>/g,/<\/?u\s+[v].*?>/g,/<\/?s\s+[v].*?>/g,/<\/?l\s*[v]\s*=\'/g];var _d=[/<\/ff>/g,/<\/fs>/g,/<\/fc>/g,/<\/b>/g,/<\/i>/g,/<\/u>/g,/<\/s>/g,/<\/l>/g];var _e=false;var _f=_c.length;for(var _q=0;_q<=_f-1;_q++ ){var _g=_c[_q];var _h=_d[_q];var _i=_g.exec(_b);while(_i){var _j=_h.exec(_b);if(!_j){break;}var _k=_i.index;var _l=_h.lastIndex;var _m=_b.substring(0,_k);var _n=_b.substring(_l,_b.length);var _o=_b.substring(_k,_l);switch(_q){case 0:_o=_o.replace(_i[0],"<span style=\"font-family:").replace(/(\'|\")>/,"\">").replace(_j[0],"</span>");break;case 1:_o=_o.replace(_i[0],"<span style=\"font-size:").replace(/(\'|\")>/,"pt\">").replace(_j[0],"</span>");break;case 2:_o=_o.replace(_i[0],"<span style=\"color:").replace(/(\'|\")>/,"\">").replace(_j[0],"</span>");_k=_o.indexOf(":");_l=_o.indexOf("\">");var _p=_o.substring(_k+1,_l);_o=_o.replace(_p,nexacro._getWebColorFromXreColor(_p));break;case 3:if(_i[0].indexOf("false")<0){_o=_o.replace(_i[0],"<b>");}else{_o=_o.replace(_i[0],"").replace(_j[0],"");}break;case 4:if(_i[0].indexOf("false")<0){_o=_o.replace(_i[0],"<i>");}else{_o=_o.replace(_i[0],"").replace(_j[0],"");}break;case 5:if(_i[0].indexOf("false")<0){_o=_o.replace(_i[0],"<u>");_e=true;}else{_o=_o.replace(_i[0],"<u style='text-decoration:none'>");_e=false;}break;case 6:if(_i[0].indexOf("false")<0){_o=_o.replace(_i[0],"<s>");}else{_o=_o.replace(_i[0],"<s style='text-decoration:none'>");}break;case 7:if(_o.indexOf("tel:")<0&&_o.indexOf("mailto:")<0){if(!_e){_o=_o.replace(_i[0],"<a style='text-decoration:none;' target=\"_blank\" href=\"");}else{_o=_o.replace(_i[0],"<a target=\"_blank\" href=\"");}_o=_o.replace("\'>","\">").replace(_j[0],"</a>");}else{if(_o.indexOf("tel:")>=0&&nexacro._isDesktop()){_o=_o.replace(_i[0],"<span v=\"").replace("\'>","\">").replace(_j[0],"</span>");}else{if(!_e){_o=_o.replace(_i[0],"<a style='text-decoration:none;' href=\"");}else{_o=_o.replace(_i[0],"<a href=\"");}_o=_o.replace("\'>","\">").replace(_j[0],"</a>");}}break;default:break;}_b=_m+_o+_n;_g.lastIndex=0;_i=_g.exec(_b);if(_i){_h.lastIndex=_g.lastIndex;}}}_b=_b.replace(/\&lt;/g,"&amp;lt;").replace(/\&gt;/g,"&amp;gt;").replace(/\&quot;/g,"&amp;quot;").replace(/\&apos;/g,"&amp;apos;");}return _b;};delete _pStatic;nexacro.StaticCtrl=function(_a,_b,_c,_d,_e,_f,_g,_h,_i){nexacro.Static.call(this,_a,_b,_c,_d,_e,_f,_g,_h,_i);this._is_subcontrol=true;};var _pStaticCtrl=nexacro.StaticCtrl.prototype=nexacro._createPrototype(nexacro.Static,nexacro.StaticCtrl);_pStaticCtrl._type_name="StaticControl";nexacro._setForControlStyleFinder(_pStaticCtrl);delete _pStaticCtrl;}