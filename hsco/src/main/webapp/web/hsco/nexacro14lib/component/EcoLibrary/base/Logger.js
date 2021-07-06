﻿if(!JsNamespace.exist("Eco.Logger")){JsNamespace.declare("Eco.Logger",{_LEVEL_STRING:["fatal","error","warn","info","debug"],logLevel:4,_logBuffer:[],_logBufferMax:1000,_indent:'    ',_startLoggerTime:(new Date()).getTime(),_startElapsedTime:null,_filter:"",_getDateFormatString:function(){var _a=new Date();return Eco.date.getMaskFormatString(_a,"yyyy-MM-dd HH:mm:ss.sss");},_getFuncFullName:function(_a){var _b="";if(_a._thisOwner){_b+=(_a._thisOwner._className||Eco.XComp.getPathName(_a._thisOwner))+".";}if(_a._thisName){_b+=_a._thisName;}else{var _c="";if('name' in _a){_c=_a.name;}else{var _d=/function\s*([\w\-$]+)?\s*\(/i;_c=_d.test(_a.toString())?RegExp.$1:"";}if(_c.length==0){_c="anonymous function";}_b+=_c;}return _b;},_getElapsed:function(_a){var _b=Eco.Logger;var _c=_b._startElapsedTime;if(!_c){_c=_b._startLoggerTime;}_b._startElapsedTime=null;var _d=(new Date()).getTime();var _e=(_d-_c);var _f=parseInt(_e/1000,10);var _g=parseInt(_e%1000,10).toString().padLeft(3,"0");if(_b._totalElapsedTime!=null){_b._totalElapsedTime+=_e;}if(_a){var _h=_b._totalElapsedTime;delete _b._totalElapsedTime;var _i=parseInt(_h/1000,10);var _j=parseInt(_h%1000,10).toString().padLeft(3,"0");return [(_f+"."+_g),(_i+"."+_j)];}return _f+"."+_g;},_xCompPropertyObjRe:/position|position2|positiontype|anchor|tooltiptype|tooltiptext|dropformat|currentstyle|style|scrollbars/,_getDumpString:function(_a,_b){var _c=Eco.Logger;var _d,_e,_f,_g,_h=[];if(_b){if(_a!=null){for(var _i=0,_j=_a.length;_i<_j;_i++ ){_f=_a[_i];_e=typeof _f;if(_e=="function"){_h.push("function refer");continue;}if(Eco.isPrimitive(_f)){_d=_f;}else if(Eco.isXComponent(_f)){_d=_f.name||_f;}else if(Eco.isArray(_f)){_d='[ ]';}else if(Eco.isObject(_f)){_d='{ }';}else{_d=_f;}if(_e=="undefined"||_e=="null"){_h.push(_e);}else{_h.push(_e+': '+_d);}}}}else{if(_a!=null){if(_a.hasOwnProperty){for(_g in _a){if(_a.hasOwnProperty(_g)){_f=_a[_g];_e=typeof _f;if(_e=="function"){continue;}if(Eco.isPrimitive(_f)){_d=_f;}else if(Eco.isXComponent(_f)){_d=_f.name||_f;}else if(Eco.isArray(_f)){_d='[ ]';}else if(Eco.isObject(_f)){_d='{ }';}else{_d=_e;}_h.push(_g+': '+_d);}}}else{for(_g in _a){_f=_a[_g];_e=typeof _f;if(_e=="function"){continue;}if(_f instanceof UserEvent||_g=="canvas"){continue;}if(_c._xCompPropertyObjRe.test(_g)){_d=_f.toString?_f.toString():_f;}else if(Eco.isXComponent(_f)){_d=_f.name||_f;}else if(Eco.isPrimitive(_e)){_d=_f;}else if(Eco.isArray(_f)){_d='[ ]';}else if(Eco.isObject(_f)){_d='{ }';}else{_d=_e;}_h.push(_g+': '+_d);}}}}if(_h.length){if(_b){return _h.join(', ');}else{return ' \nData: {\n  '+_h.join(',\n  ')+'\n}';}}return '';},inspect:function(_a,_b,_c,_d,_e){var _f={seen:[],styles:Eco.Logger._inspectstyles,stylize:Eco.Logger._stylizeNoColor};_f.depth=_c;_f.colors=_d;_f.showHidden=_b;_f.customInspect=_e;if(typeof _f.showHidden==='undefined'){_f.showHidden=false;}if(typeof _f.depth==='undefined'){_f.depth=2;}if(typeof _f.colors==='undefined'){_f.colors=false;}if(typeof _f.customInspect==='undefined'){_f.customInspect=true;}if(_f.colors){_f.stylize=Eco.Logger._stylizeWithColor;}return Eco.Logger._formatValue(_f,_a,_f.depth);},_formatValue:function(_a,_b,_c){if(_a.customInspect&&_b&&typeof _b.inspect==='function'&&_b.inspect!==Eco.Logger.inspect&&!(_b.constructor&&_b.constructor.prototype===_b)){return String(_b.inspect(_c));}var _d=Eco.Logger;var _e=_d._formatPrimitive(_a,_b);if(_e){return _e;}var _f=Eco.object.getPropertyNames(_b);var _g=_d._arrayToHash(_f);if(_a.showHidden){_f=Object.getOwnPropertyNames(_b);}if(_f.length===0){if(typeof _b==='function'){var _h=_b.name?': '+_b.name:'';return _a.stylize('[Function'+_h+']','special');}if(Eco.isRegExp(_b)){return _a.stylize(RegExp.prototype.toString.call(_b),'regexp');}if(Eco.isDate(_b)){return _a.stylize(Date.prototype.toString.call(_b),'date');}if(Eco.isError(_b)){return _d._formatError(_b);}}var _i='',_j=false,_k=['{','}'];if(Eco.isArray(_b)){_j=true;_k=['[',']'];}if(typeof _b==='function'){var _l=_b.name?': '+_b.name:'';_i=' [Function'+_l+']';}if(Eco.isRegExp(_b)){_i=' '+RegExp.prototype.toString.call(_b);}if(Eco.isDate(_b)){_i=' '+Date.prototype.toUTCString.call(_b);}if(Eco.isError(_b)){_i=' '+_d._formatError(_b);}if(_f.length===0&&(!_j||_b.length==0)){return _k[0]+_i+_k[1];}if(_c<0){if(Eco.isRegExp(_b)){return _a.stylize(RegExp.prototype.toString.call(_b),'regexp');}else{return _a.stylize('[Object]','special');}}_a.seen.push(_b);var _m;if(_j){_m=_d._formatArray(_a,_b,_c,_g,_f);}else{_m=Eco.array.map(_f,function(_n){return _d._formatProperty(_a,_b,_c,_g,_n,_j);});}_a.seen.pop();return _d._reduceToSingleString(_m,_i,_k);},_formatPrimitive:function(_a,_b){switch(typeof _b){case 'undefined':return _a.stylize('undefined','undefined');case 'string':var _c='\''+Eco.Json.encode(_b).replace(/^"|"$/g,'').replace(/'/g,"\\'").replace(/\\"/g,'"')+'\'';return _a.stylize(_c,'string');case 'number':return _a.stylize(''+_b,'number');case 'boolean':return _a.stylize(''+_b,'boolean');}if(_b===null){return _a.stylize('null','null');}},_formatError:function(_a){return '['+Error.prototype.toString.call(_a)+']';},_formatArray:function(_a,_b,_c,_d,_e){var _f=[],_g=Eco._hasOwnProperty;var _h=Eco.Logger;for(var _i=0,_j=_b.length;_i<_j; ++_i){if(_g.call(_b,String(_i))){_f.push(_h._formatProperty(_a,_b,_c,_d,String(_i),true));}else{_f.push('');}}Eco.array.forEach(_e,function(_k){if(!_k.match(/^\d+$/)){_f.push(formatProperty(_a,_b,_c,_d,_k,true));}});return _f;},_formatProperty:function(_a,_b,_c,_d,_e,_f){var _g,_h,_i;if(!Eco._isIE8Below){_i=Object.getOwnPropertyDescriptor(_b,_e)||{value:_b[_e]};if(_i.get){if(_i.set){_h=_a.stylize('[Getter/Setter]','special');}else{_h=_a.stylize('[Getter]','special');}}else{if(_i.set){_h=_a.stylize('[Setter]','special');}}}else{_i={value:_b[_e]};}var _j=Eco._hasOwnProperty,_k=Eco.Logger;if(!_j.call(_d,_e)){_g='['+_e+']';}if(!_h){if(Eco.array.indexOf(_a.seen,_i.value,null,true)<0){if(_c===null){_h=_k._formatValue(_a,_i.value,null);}else{_h=_k._formatValue(_a,_i.value,_c-1);}if(_h.indexOf('\n')> -1){if(_f){_h=_h.split('\n');_h=Eco.array.map(_h,function(_l){return '  '+_l;});_h=_h.join('\n').substr(2);}else{_h=_h.split('\n');_h=Eco.array.map(_h,function(_l){return '   '+_l;});_h='\n'+_h.join('\n');}}}else{_h=_a.stylize('[...]','special');}}if(typeof _g==='undefined'){if(_f&&_e.match(/^\d+$/)){return _h;}_g=Eco.Json.encode(''+_e);if(_g.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)){_g=_g.substr(1,_g.length-2);_g=_a.stylize(_g,'name');}else{_g=_g.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'");_g=_a.stylize(_g,'string');}}return _g+': '+_h;},_reduceToSingleString:function(_a,_b,_c){var _d=0;var _e=Eco.array.reduce(_a,function(_f,_g){_d++ ;if(_g.indexOf('\n')>=0){_d++ ;}return _f+_g.length+1;},0);if(_e>60){return _c[0]+(_b===''?'':_b+'\n ')+' '+_a.join(',\n  ')+' '+_c[1];}return _c[0]+_b+' '+_a.join(', ')+' '+_c[1];},_inspectstyles:{'special':'blue','number':'red','boolean':'blue','undefined':'bold','null':'bold','string':'hotpink','date':'blue','regexp':'blue'},_stylizeWithColor:function(_a,_b){var _c=this.styles[_b];if(_c){if(_c=="bold"){return '<b>'+_a+'</b>';}else{return '<font color="'+_c+'">'+_a+'</font>';}}else{return _a;}},_stylizeNoColor:function(_a,_b){return _a;},_arrayToHash:function(_a){var _b={};Eco.array.forEach(_a,function(_c,_d){_b[_c]=true;});return _b;},_logging:function(_a,_b){var _c=Eco.Logger;var _d=_c.logLevel;if(_a>1&&_d<_a){return;}var _e,_f,_g,_h,_i,_j,_k;if(typeof _b!='string'){_e=_b.message||'';_f=_b.dump;_g=_b.stack;_h=_b.elapsed;_i=_b.elapsedTotal;_j=_b.filter;_k=_b.showStackAnonymous;}else{_e=_b;}var _l=_c._logging.caller;var _m=_l.caller;var _n=_c._getDateFormatString();var _o=_c._LEVEL_STRING[_a];var _p=_c._getFuncFullName(_m);var _q=_n+" ["+_o+"] "+_p+" - "+_e;var _r="";if(_h){_r=_c._getElapsed(_i);if(_i){_q+=" (Elapsed Time : "+_r[0]+" sec -- Total Time : "+_r[1]+" sec) ";}else{_q+=" (Elapsed Time : "+_r+" sec)";}}var _s="";if(_f){_s=_c._getDumpString(_f);_q+="\n*****************PRINTING DUMP************************";_q+=_s;_q+="\n*****************COMPLETE DUMP************************";}var _t="";if(_g){_t=_c._getCallStackString(_l,_k);_q+="\n*****************PRINTING STACK************************";_q+=_t;_q+="\n*****************COMPLETE STACK************************";}if(_j){if(_c._filter==_j){_c._writeLog(_q);}}else{_c._writeLog(_q);}var _u=_c._logBuffer;var _v=_c._logBufferMax;if(_d> -1&&_d>=_a){if(_u.length>=_v){_u.splice(0,1);}var _w={date:_n,level:_o,message:_e,from:_p,elapsed:_r,dump:_s,stack:_t};_c._logBuffer.push(_w);}if(_a==0||_a==1){var _x=new Error(_e);throw _x;}},_writeLog:function(_a){application.trace(_a);},_getCallStackString:function(_a,_b){var _c=Eco.Logger;var _d=_a,_e="",_f=_c._indent,_g="",_h,_i="";var _j=[_d];var _k=_d.caller;while(_d){_d=_d.caller;_h= -1;for(var _l=0,_m=_j.length;_l<_m;_l++ ){if(_d==_j[_l]){_h=_l;break;}}if(_h<0){_j.push(_d);_i=_c._getCallStackLine(_e,_d);if(_i.indexOf("anonymous function")> -1){if(_b){_g+="\n"+_i;_e+=_f;}}else if(_i.length>0){_g+="\n"+_i;_e+=_f;}}else{_g+="\n"+_e+"stack overflow...";break;}}return _g;},_getCallStackLine:function(_a,_b){var _c=Eco.Logger;var _d=_a;if(_b){_d+=_c._getFuncFullName(_b);_d+="("+_c._getDumpString(_b.arguments,true)+")";return _d;}else{return "";}},getLogBuffer:function(){return Eco.Logger._logBuffer;},startElapsed:function(_a){Eco.Logger._startElapsedTime=(new Date()).getTime();if(_a){Eco.Logger._totalElapsedTime=0;}},getFilter:function(){return Eco.Logger._filter;},setFilter:function(_a){Eco.Logger._filter=_a;},fatal:function(_a){Eco.Logger._logging(0,_a);},error:function(_a){Eco.Logger._logging(1,_a);},warn:function(_a){Eco.Logger._logging(2,_a);},info:function(_a){Eco.Logger._logging(3,_a);},debug:function(_a){Eco.Logger._logging(4,_a);},setDebugInfoFunctions:function(_a){for(var _b in _a){if(_a.hasOwnProperty(_b)&&typeof _a[_b]=="function"){_a[_b]._thisName=_b;_a[_b]._thisOwner=_a;}}}});}