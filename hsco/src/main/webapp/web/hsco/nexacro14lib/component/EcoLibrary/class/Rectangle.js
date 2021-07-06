﻿if(!JsNamespace.exist("Eco.Rectangle")){JsNamespace.declareClass("Eco.Rectangle",{properties:{x:{value:0},y:{value:0},width:{value:0},height:{value:0}},initialize:function(_a,_b,_c,_d){var _e=arguments.length;if(_e==0){this.__readArgs=0;return this;}else if(_e==4){this.set(_a,_b,_c,_d);this.__readArgs=4;return this;}var _f=typeof _a,_g=0;if(_f==='undefined'||_a==null){_g=1;}else if(_e==1){if(Eco.isArray(_a)){this.x=_a[0];this.y=_a[1];this.width=_a[2];this.height=_a[3];_g=1;}else if(_a.x!=null||_a.width!=null){this.x=_a.x||0;this.y=_a.y||0;this.width=_a.width||0;this.height=_a.height||0;_g=1;}}if(!_g){this.x=this.y=this.width=this.height=0;if(_a){if(_a.x!=null){this.x=_a.x;this.y=_a.y;_g++ ;}else if(_a.width!=null){_g++ ;this.width=_a.width;this.height=_a.height;}}if(_b&&_b.width!=null){_g++ ;this.width=_b.width;this.height=_b.height;}}this.__readArgs=_g;},"set":function(_a,_b,_c,_d){this.x=_a;this.y=_b;this.width=_c;this.height=_d;return this;},"clone":function(){return new Eco.Rectangle(this.x,this.y,this.width,this.height);},"equals":function(_a){if(!(_a instanceof Eco.Rectangle)){_a=new Eco.Rectangle(arguments[0],arguments[1],arguments[2],arguments[3]);}return _a===this||_a&&this.x==_a.x&&this.y==_a.y&&this.width==_a.width&&this.height==_a.height||false;},"toString":function(){return '{ x: '+Eco.ClassUtils.fmtNumber(this.x)+', y: '+Eco.ClassUtils.fmtNumber(this.y)+', width: '+Eco.ClassUtils.fmtNumber(this.width)+', height: '+Eco.ClassUtils.fmtNumber(this.height)+' }';},"getPoint":function(){return new Eco.Point(this.x,this.y);},"setPoint":function(_a){if(!(_a instanceof Eco.Point)){_a=new Eco.Point(arguments[0],arguments[1]);}this.x=_a.x;this.y=_a.y;},"getSize":function(){return new Eco.Size(this.width,this.height);},"setSize":function(_a){if(!(_a instanceof Eco.Size)){_a=new EcoSys.Size(arguments[0],arguments[1]);}if(this._fixX){this.x+=(this.width-_a.width)*this._fixX;}if(this._fixY){this.y+=(this.height-_a.height)*this._fixY;}this.width=_a.width;this.height=_a.height;this._fixW=1;this._fixH=1;},"getLeft":function(){return this.x;},"setLeft":function(_a){if(!this._fixW){this.width-=_a-this.x;}this.x=_a;this._fixX=0;},"getTop":function(){return this.y;},"setTop":function(_a){if(!this._fixH){this.height-=_a-this.y;}this.y=_a;this._fixY=0;},"getRight":function(){return this.x+this.width;},"setRight":function(_a){if(this._fixX!==undefined&&this._fixX!==1){this._fixW=0;}if(this._fixW){this.x=_a-this.width;}else{this.width=_a-this.x;}this._fixX=1;},"getBottom":function(){return this.y+this.height;},"setBottom":function(_a){if(this._fixY!==undefined&&this._fixY!==1){this._fixH=0;}if(this._fixH){this.y=_a-this.height;}else{this.height=_a-this.y;}this._fixY=1;},"getCenterX":function(){return this.x+this.width*0.5;},"setCenterX":function(_a){this.x=_a-this.width*0.5;this._fixX=0.5;},"getCenterY":function(){return this.y+this.height*0.5;},"setCenterY":function(_a){this.y=_a-this.height*0.5;this._fixY=0.5;},"getCenter":function(){return new Eco.Point(this.getCenterX(),this.getCenterY());},"setCenter":function(_a){if(!(_a instanceof Eco.Point)){_a=new Eco.Point(arguments[0],arguments[1]);}this.setCenterX(_a.x);this.setCenterY(_a.y);return this;},"isEmpty":function(){return this.width==0||this.height==0;},"contains":function(_a){if(_a&&_a.width!=null||(Eco.isArray(_a)?_a:arguments).length==4){var _b=new Eco.Rectangle(arguments[0],arguments[1],arguments[2],arguments[3]);return this._containsRectangle(_b);}else{var _c=new Eco.Point(arguments[0],arguments[1]);return this._containsPoint(_c);}},"_containsPoint":function(_a){var _b=_a.x,_c=_a.y;return _b>=this.x&&_c>=this.y&&_b<=this.x+this.width&&_c<=this.y+this.height;},"_containsRectangle":function(_a){var _b=_a.x,_c=_a.y;return _b>=this.x&&_c>=this.y&&_b+_a.width<=this.x+this.width&&_c+_a.height<=this.y+this.height;},"intersects":function(_a){if(!(_a instanceof Eco.Rectangle)){_a=new Eco.Rectangle(arguments[0],arguments[1],arguments[2],arguments[3]);}return _a.x+_a.width>this.x&&_a.y+_a.height>this.y&&_a.x<this.x+this.width&&_a.y<this.y+this.height;},"touches":function(_a){if(!(_a instanceof Eco.Rectangle)){_a=new Eco.Rectangle(arguments[0],arguments[1],arguments[2],arguments[3]);}return _a.x+_a.width>=this.x&&_a.y+_a.height>=this.y&&_a.x<=this.x+this.width&&_a.y<=this.y+this.height;},"intersect":function(_a){if(!(_a instanceof Eco.Rectangle)){_a=new Eco.Rectangle(arguments[0],arguments[1],arguments[2],arguments[3]);}var _b=Math.max(this.x,_a.x),_c=Math.max(this.y,_a.y),_d=Math.min(this.x+this.width,_a.x+_a.width),_e=Math.min(this.y+this.height,_a.y+_a.height);return new Eco.Rectangle(_b,_c,_d-_b,_e-_c);},"unite":function(_a,_b){if(!(_a instanceof Eco.Rectangle)){_a=new Eco.Rectangle(arguments[0],arguments[1],arguments[2],arguments[3]);_b=arguments[_a.__readArgs+1];}var _c=Math.min(this.x,_a.x),_d=Math.min(this.y,_a.y),_e=Math.max(this.x+this.width,_a.x+_a.width),_f=Math.max(this.y+this.height,_a.y+_a.height);if(_b){this.x=_c;this.y=_d;this.width=_e-_c;this.height=_f-_d;return;}return new Eco.Rectangle(_c,_d,_e-_c,_f-_d);},"include":function(_a){if(!(rect instanceof Eco.Rectangle)){rect=new Eco.Rectangle(arguments[0],arguments[1],arguments[2],arguments[3]);}var _b=Math.min(this.x,_a.x),_c=Math.min(this.y,_a.y),_d=Math.max(this.x+this.width,_a.x),_e=Math.max(this.y+this.height,_a.y);return new Eco.Rectangle(_b,_c,_d-_b,_e-_c);},"expand":function(_a,_b){if(_b===undefined){_b=_a;}return new Eco.Rectangle(this.x-_a/2,this.y-_b/2,this.width+_a,this.height+_b);},"scale":function(_a,_b){return this.expand(this.width*_a-this.width,this.height*(_b===undefined?_a:_b)-this.height);}});var membernames=[['Top','Left'],['Top','Right'],['Bottom','Left'],['Bottom','Right'],['Left','Center'],['Top','Center'],['Right','Center'],['Bottom','Center']];JsNamespace.addMethods(membernames,Eco.Rectangle,false,function(_a,_b){var _c=_a.join('');var _d=/^[RL]/.test(_c);if(_b>=4){_a[1]+=_d?'Y':'X';}var _e=_a[_d?0:1],_f=_a[_d?1:0],_g='get'+_e,_h='get'+_f,_i='set'+_e,_j='set'+_f,_k='get'+_c,_l='set'+_c;var _m="return new Eco.Point(this."+_g+"(), this."+_h+"());\r\n";this[_k]=new Function(_m);var _n="if (!(pt instanceof Eco.Point))\r\n";_n+="{\r\n";_n+="\tpt = new Eco.Point(arguments[0], arguments[1]);\r\n";_n+="}\r\n";_n+="this."+_i+"(pt.x);\r\n";_n+="this."+_j+"(pt.y);";this[_l]=new Function("pt",_n);return [_k,_l];});}