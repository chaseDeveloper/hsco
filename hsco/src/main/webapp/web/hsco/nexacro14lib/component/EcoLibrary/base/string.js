﻿if(!JsNamespace.exist("Eco.string")){JsNamespace.declare("Eco.string",{indexOfIgnoreCase:function(_a,_b,_c){return _a.toLowerCase().indexOf(_b.toLowerCase(),_c);},replaceIgnoreCase:function(_a,_b,_c){var _d,_e=0,_f="";var _g=Eco.string;while(1){_d=_g.indexOfIgnoreCase(_a,_b,_e);if(_d<0){_f+=_a.substr(_e);break;}else{_f+=_a.substr(_e,_d-_e);_f+=_c;_e=_d+_b.length;}}return _f;},lastIndexOfIgnoreCase:function(_a,_b,_c){if(_c===undefined||_c<0||_c>_a.length){_c=_a.length-1;}return _a.toLowerCase().lastIndexOf(_b.toLowerCase(),_c);},getRightStr:function(_a,_b){if(_a.length<_b){return _a;}else{return _a.substr(_a.length-_b,_b);}},removeStr:function(_a,_b,_c,_d){_c=_c||"left";if(_d!==false){_d=true;}var _e,_f,_g;var _h=_a.length;var _i=_b.length;_e=_a;_f=_b;if(!_d){_e=_a.toLowerCase();_f=_b.toLowerCase();}if(_c=="left"){_g=_e.indexOf(_f);}else if(_c=="right"){_g=_e.lastIndexOf(_f);}else{return;}if(_g<0){return _a;}else if(_e==_f){return "";}else if(_g==0){return _e.substr(_i);}else if(_g>0){return _e.substr(0,_g)+_e.substr(_g+_i);}},_formatRegExp:/\{(\d+)\}/g,format:function(){var _a=arguments[0];var _b=Eco.array.toArray(arguments,1);return _a.replace(Eco.string._formatRegExp,function(_c,_d){return _b[_d];});},getLength:function(_a,_b){if(!_a){return 0;}var _c=Eco.string;if(_b=="utf8"){return _c._utf8ByteCount(_a);}else if(_b=="ascii"){return _c._asciiByteCount(_a);}else{return _a.length;}},_utf8ByteCount:function(_a){if(_a===undefined){return 0;}var _b=Eco.string;var _c=0,_d,_e,_f,_g=_b._isHighSurrogate,_h=_b._utf8Len,_i=_b._toCodepoint;for(var _j=0,_k=_a.length;_j<_k;_j++ ){_d=_a.charCodeAt(_j);if(_g(_d)){_e=_d;_f=_a.charCodeAt( ++_j);_c+=_h(_i(_e,_f));}else{_c+=_h(_d);}}return _c;},_asciiByteCount:function(_a){if(_a===undefined){return 0;}var _b,_c=0,_d;for(_b=0,n=_a.length;_b<n;_b++ ){_d=_a.charCodeAt(_b);if(_d>255){_c++ ;}_c++ ;}return _c;},_utf8Len:function(_a){if(_a>=0xD800&&_a<=0xDFFF){Eco.Logger.error({"message":"Illegal argument: "+_a,"stack":true});}if(_a<0){Eco.Logger.error({"message":"Illegal argument: "+_a,"stack":true});}if(_a<=0x7F){return 1;}if(_a<=0x7FF){return 2;}if(_a<=0xFFFF){return 3;}if(_a<=0x1FFFFF){return 4;}if(_a<=0x3FFFFFF){return 5;}if(_a<=0x7FFFFFFF){return 6;}Eco.Logger.error({"message":"Illegal argument: "+_a,"stack":true});},_isHighSurrogate:function(_a){return _a>=0xD800&&_a<=0xDBFF;},_isLowSurrogate:function(_a){return _a>=0xDC00&&_a<=0xDFFF;},_toCodepoint:function(_a,_b){var _c=Eco.string;if(!_c._isHighSurrogate(_a)){Eco.Logger.error({"message":"Illegal argument: "+_a,"stack":true});}if(!_c._isLowSurrogate(_b)){Eco.Logger.error({"message":"Illegal argument: "+_b,"stack":true});}_a=(0x3FF&_a)<<10;var _d=_a|(0x3FF&_b);return _d+0x10000;},countNonword:function(_a){var _b=/\W/g;var _c=_a.match(_b);return (!_c)?0:_c.length;},strFullToHalf:function(_a){var _b,_c,_d="";var _e=_a.length;for(_b=0;_b<_e;_b++ ){var _c=_a.charCodeAt(_b);if(_c==12288){_d+=unescape("%20");}else if((_c>=65281)&&(_c<=65374)){_d+=unescape("%"+(_c-65248).toString(16));}else{_d+=_a.charAt(_b);}}return _d;},strHalfToFull:function(_a){var _b="";var _c="";var _d,_e=_a.length;var _f;for(_d=0;_d<_e;_d++ ){_f=_a.charCodeAt(_d);if((_f>=32)&&(_f<=126)){if(_f==32){_c=unescape("%u"+(12288).toString(16));}else{_c=_f+65248;}}else{_c=_f;}if(_f==32){_b=_b+(_c);}else{_b=_b+String.fromCharCode(_c);}}return _b;},repeatStr:function(_a,_b){var _c="".padLeft(_b,_a);return _c;},hanGulToUnicode:function(_a){return escape(_a).replace(/%/gi,"\\");},unicodeToHanGul:function(_a){return unescape(_a.replace(/\\/gi,"%"));},replaceInvalidFileNameChars:function(_a,_b){if(_b===null||_b===undefined){_b="_";}var _c=_a.replace(/[\\\/:*?"<>|]/,_b);return _c;},removeMultibyteChar:function(_a){var _b="";var _c=_a.split(""),_d=_c.length,_e;for(var _f=0;_f<_d;_f++ ){_e=_c[_f];_e=escape(_e);if(_e.charAt(1)!="u"){_b+=_c[_f];}}return _b;},startsWith:function(_a,_b){return _a.lastIndexOf(_b,0)==0;},endsWith:function(_a,_b){var _c=_a.length-_b.length;return _c>=0&&_a.indexOf(_b,_c)==_c;},unicodeToDecimal:function(_a,_b,_c){if(Eco.isEmpty(_b)){_b="&#";}if(Eco.isEmpty(_c)){_c=";";}var _d="";_a=_a.replace(/^\s+/,'');if(_a.length==0){return "";}var _e;for(var _f=0,_g=_a.length;_f<_g;_f++ ){_e=_a.charCodeAt(_f);_d+=_b+_e+_c;}return _d;},decimalToUnicode:function(_a,_b,_c){if(Eco.isEmpty(_b)){_b="&#";}if(Eco.isEmpty(_c)){_c=";";}var _d="";_a=_a.replace(/^\s+/,'');if(_a.length==0){return "";}var _e=_c+_b;var _f=_a.split(_e),_g;_f[0]=_f[0].substr(_b.length);var _h=_f[_f.length-1];_f[_f.length-1]=_h.substr(0,_h.length-_c.length);for(var _i=0,_j=_f.length;_i<_j;_i++ ){_g=String.fromCharCode(_f[_i]);_d+=_g;}return _d;},unicodeToHex:function(_a,_b,_c){if(Eco.isEmpty(_b)){_b="&#x";}if(Eco.isEmpty(_c)){_c=";";}var _d="";_a=_a.replace(/^\s+/,'');if(_a.length==0){return "";}var _e;for(var _f=0,_g=_a.length;_f<_g;_f++ ){_e=_a.charCodeAt(_f);_d+=_b+_e.toString(16).toUpperCase()+_c;}return _d;},hexToUnicode:function(_a,_b,_c){if(Eco.isEmpty(_b)){_b="&#x";}if(Eco.isEmpty(_c)){_c=";";}var _d="";_a=_a.replace(/^\s+/,'');if(_a.length==0){return "";}var _e=_c+_b;var _f=_a.split(_e),_g;_f[0]=_f[0].substr(_b.length);var _h=_f[_f.length-1];_f[_f.length-1]=_h.substr(0,_h.length-_c.length);for(var _i=0,_j=_f.length;_i<_j;_i++ ){_g=String.fromCharCode(parseInt(_f[_i],16));_d+=_g;}return _d;},_hex:["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"],_toHex:function(_a){var _b=Eco.string._hex;return _b[(_a>>4)&0xF]+_b[_a&0xF];},unicodeToUtf8:function(_a,_b,_c){if(Eco.isEmpty(_b)){_b="";}if(Eco.isEmpty(_c)){_c=" ";}var _d="";_a=_a.replace(/^\s+/,'');if(_a.length==0){return "";}var _e,_f=Eco.string._toHex;for(var _g=0,_h=_a.length;_g<_h;_g++ ){_e=_a.charCodeAt(_g);if(_g>0){_d+=_c;}if(_e<=0x7F){_d+=_b+_f(_e);}else if(_e<=0x7FF){_d+=_b+_f(0xC0|((_e>>6)&0x1F))+_c+_b+_f(0x80|(_e&0x3F));}else if(_e<=0xFFFF){_d+=_b+_f(0xE0|((_e>>12)&0x0F))+_c+_b+_f(0x80|((_e>>6)&0x3F))+_c+_b+_f(0x80|(_e&0x3F));}else if(_e<=0x10FFFF){outputString+=_b+_f(0xF0|((_e>>18)&0x07))+_c+_b+_f(0x80|((_e>>12)&0x3F))+_c+_b+_f(0x80|((_e>>6)&0x3F))+_c+_b+_f(0x80|(_e&0x3F));}else{_d+=_b+_e.toString(16).toUpperCase();}}_d+=_c;return _d;},utf8ToUnicode:function(_a,_b,_c){_a=_a.replace(/^\s+/,'');_a=_a.replace(/ $/,'');if(_a.length==0){return "";}if(Eco.isEmpty(_b)){_b="";}if(Eco.isEmpty(_c)){_c=" ";}var _d=_c+_b,_e;_e=_a.split(_d);if(_b.length&&_c.length){_e[0]=_e[0].substr(_b.length);var _f=_e[_e.length-1];_e[_e.length-1]=_f.substr(0,_f.length-_c.length);}var _g=_e.length,_h="",_i,_j=0,_k=0;for(var _l=0;_l<_g;_l++ ){_i=parseInt(_e[_l],16);switch(_j){case 0:if(0<=_i&&_i<=0x7F){_h+=String.fromCharCode(_i);}else if(0xC0<=_i&&_i<=0xDF){_j=1;_k=_i&0x1F;}else if(0xE0<=_i&&_i<=0xEF){_j=2;_k=_i&0xF;}else if(0xF0<=_i&&_i<=0xF7){_j=3;_k=_i&0x7;}else{_h+=String.fromCharCode(_i);}break;case 1:if(_i<0x80||_i>0xBF){_h+=String.fromCharCode(_i);}_j-- ;_h+=String.fromCharCode((_k<<6)|(_i-0x80));_k=0;break;case 2:case 3:if(_i<0x80||_i>0xBF){_h+=String.fromCharCode(_i);}_k=(_k<<6)|(_i-0x80);_j-- ;break;}}return _h;},_maskChr:{"@":/[\x20-\x7D]/,"#":/[0-9]/,"*":/[a-zA-Z]/,"9":/[a-zA-Z0-9]/,"A":/[A-Z]/,"a":/[a-z]/,"Z":/[A-Z0-9]/,"z":/[a-z0-9]/},_defaultPassChar:"*",_defaultMaskChar:"_",_PASSWORD_PAIR:["{","}"],_stringMaskCache:{},_chkEmpty:String.fromCharCode(0x08),_parseStringMask:function(_a,_b,_c){var _d=Eco.string;var _e=_d._stringMaskCache[_a];if(_e){return _e;}var _f=_a.length,_g=[],_h=[],_i=[],_j=false,_k=false,_l=false,_m=0,_n,_o,_p=_a.split(""),_q,_r=_d._maskChr;for(_n=0,_o=0;_n<_f;_n++ ){if(_k==false&&_p[_n]=="'"){if(_j==false){_j=true;}else{_j=false;}continue;}_m=0;if(_k==false&&_p[_n]=="\\"&&!_j){_k=true;continue;}else if(_k){_k=false;}else if(_j==false){_q=_r[_p[_n]];if(_q){_m=_q;}if(_p[_n]==this._PASSWORD_PAIR[0]){_l=true;continue;}if(_p[_n]==this._PASSWORD_PAIR[1]){_l=false;continue;}}_g[_o]=_m;_h[_o]=_l;_i[_o]=_p[_n];_o++ ;}_e=[_g,_h,_i];_d._stringMaskCache[_a]=_e;return _e;},_makeMaskedValue:function(_a,_b,_c){var _d=false;var _e;var _f;var _g=0;var _h=_a.length;var _i,_j;if(_h==_b.length){for(_i=0;_i<_h;_i++ ){if(_b[_i]==0&&_a[_i]==_b[_i]){continue;}else if(_b[_i]==0){break;}}if(_i==_a.length){_d=true;}}var _k=[];_h=_c.length;var _l=this._maskChr;for(_i=0,_j=0;_i<_h;_i++ ){_f=_c[_i];_e=_b[_i];if(_e!=0&&_l[_f]){do{_f=_a[_j];_j++ ;}while(_f&&!_e.test(_f))if(Eco.isEmpty(_f)){_f=_chkEmpty;}}else if(_d&&_c[_i]==_f){_j++ ;}_k[_i]=_f;}return _k;},getMaskFormatString:function(_a,_b,_c){var _d=Eco.string;if(!_c){_c=_d._defaultMaskChar;}var _e=_d._defaultPassChar;var _f=_d._parseStringMask(_b,_c,_e),_g=_f[0],_h=_f[1],_i=_f[2],_j=_a.split("");var _k=_d._makeMaskedValue(_j,_g,_i);var _l;var _m=[];var _n;var _o,_p,_b;var _q=_i.length;for(_l=0;_l<_q;_l++ ){_n=_k[_l];_o=_g[_l];_p=_h[_l];_b=_i[_l];if(_o!=0){if(Eco.isEmpty(_n)||_n==_d._chkEmpty){_n=_c;}else if(_p){_n=_d._defaultPassChar;}else if(_b=="A"||_b=="Z"){_n=_n.toUpperCase();}else if(_b=="a"||_b=="z"){_n=_n.toLowerCase();}}_m[_l]=_n;}return _m.join("");},_cacheEscapeXML:{},escapeXML:function(_a){var _b=Eco.string;if(typeof _a!="string"){_a=new String(_a);}var _c=_b._cacheEscapeXML[_a];if(Eco.isEmpty(_c)){_c=_a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&apos;").replace(/\"/g,"&quot;").replace(/\t/g,"&#9;").replace(/\r/g,"&#13;").replace(/\n/g,"&#10;");_b._cacheEscapeXML[_a]=_c;}return _c;},capitalize:function(_a){if(!_a){Eco.Logger.error({message:"str is null!",stack:true});}return _a.replace(/\b[a-z]/g,function(_b){return _b.toUpperCase();});},camelize:function(_a){return _a.replace(/-(.)/g,function(_b,_c){return _c.toUpperCase();});},hyphenate:function(_a){return _a.replace(/([a-z])([A-Z])/g,'$1-$2').toLowerCase();}});}