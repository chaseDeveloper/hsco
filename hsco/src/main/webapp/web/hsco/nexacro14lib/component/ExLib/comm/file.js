﻿if(!JsNamespace.exist("Ex.file")){JsNamespace.declare("Ex.file",{ffobj:undefined,ffGrid:undefined,ffFlag:"default",ffBindDs:undefined,ffObjProp:{},ffcallback:null,ffrsobj:undefined,ffrscallback:undefined,totalCnt:1,nCnt:1,dsImgFileUp_temp:"",ffaFiles:[],endRead:function(){try{var _a=document.getElementById("uploadFile");if(_a){_a.files=null;document.body.removeChild(_a);}}catch(e){}},ImageLoaderCall:function(){var _a=Ex.file;var _b=new Image();var _c=[];var _d=false;var _e;var _f;return {load:load};function load(_g,_h,_i,_j,_k){_a.ffrsobj=_h.frmobj;_a.ffrscallback=_h.callback;if(_d){return _c.push(arguments);}_d=true;if(_e===_k){return _f?onload():onerror();}_e=_k;_b.onload=onload;_b.onerror=onerror;_b.src=_j;function onload(){_f=true;for(var _v=0;_v<_h.resize.length;_v++ ){var _l=_h.resize[_v];var _m=_h.resize[_v];var _n=_b.width;var _o=_b.height;var _p=_l;var _q=_m;if((_n>_l)||(_o>_m)||(_n<_l&&_n>100)||(_o<_m&&_m>100)){if(_n>_o){_p=parseInt(_n*(_l/_n));_q=parseInt(_o*(_m/_n));}else{_q=parseInt(_o*(_m/_o));_p=parseInt(_n*(_l/_o));}_g.width=_p;_g.height=_q;}else{_g.width=_n;_g.height=_o;}var _r=_g.getContext("2d");_r.drawImage(_b,0,0,_g.width,_g.height);var _s="image/jpeg";var _t=_g.toDataURL(_s);if(_h.countfun){var _u=_h.resize.length;_a.ffobj[_h.countfun]({ncur:parseInt(_a.nCnt/_u),ntot:parseInt(_a.totalCnt/_u)});}_a.resizeCallBack(_i,_t,_k,_g.width,_g.height,_l);_t=null;_r.clearRect(0,0,_g.width,_g.height);}oncomplete();}function onerror(){_f=false;obj.setWaitCursor(false,true);if(_h.errorcallback){_a.ffobj[_h.errorcallback]({ret:false,reason:"img unkonown error",filename:_k});}else{_a.ffobj[_a.ffcallback]({ret:false,reason:"img unkonown error"});}oncomplete();}}function oncomplete(){_d=false;if(_c.length){load.apply(null,_c.shift());}}},FileReaderCall:function(){var _a=Ex.file;var _b=new FileReader();var _c=[];var _d=false;var _e;var _f;var _g=0;var _h=new _a.ImageLoaderCall();return {load:load};function load(_i,_j,_k){if(_d){return _c.push(arguments);}_d=true;if(_e===_j.name){return _f?onload():onerror();}_e=_j.name;_b.onload=onload;_b.onloadstart=onloadstart;_b.onloadend=onloadend;_b.onprogress=onprogress;_b.onerror=onerror;_b.readAsDataURL(_j);function onload(_l){}function onloadstart(_l){}function onloadend(_l){console.log("reader onloadend"+_b.readyState);if(_b.readyState==2){oncomplete(_i,_j,_k);}}function onprogress(_l){}function onerror(_l){if(_k.errorcallback){_a.ffobj[_k.errorcallback]({ret:false,reason:"img read error",filename:_j.name});}_d=false;_a.nCnt=_a.nCnt+_k.resize.length;if(_c.length){load.apply(null,_c.shift());}}}function oncomplete(_i,_j,_k){if(_a.ffFlag=="default"){_a.ffaFiles[_a.ffaFiles.length]={ret:true,filename:_j.name,filesize:_j.size,data:_b.result};}else{_g++ ;_h.load(_i,_k,_g,_b.result,_j.name);}_d=false;if(_c.length){load.apply(null,_c.shift());}else{if(_a.ffFlag=="default"){_a.ffobj.setWaitCursor(false,true);_a.ffobj[_a.ffcallback](_a.ffaFiles);}}}},getFile:function(_a){var _b;_b=document.getElementById("imagecanvas");if(!_b){_b=document.createElement("canvas");_b.id="imagecanvas";}var _c=Ex.file;_c.endRead();_c.ffaFiles=new Array();var _d=(!Eco.isEmpty(_a.multiselect)&&_a.multiselect==true?"multi":"single");var _e=document.getElementById("uploadFile");if(!Eco.isEmpty(_e)){_e.parentNode.removeChild(_e);}var _f=document.createElement('input');_f.type='file';_f.name='uploadFile';_f.id='uploadFile';_f.style.display="none";if(_d=="multi"){_f.multiple="multiple";}else{_f.multiple="";}document.body.appendChild(_f);_c.ffobj=_a.frmobj;_c.nCnt=1;_c.ffcallback=_a.callback;var _g="";_g=document.getElementById("uploadFile");_g.setAttribute("accept",'');_g.setAttribute("accept",_a.type);_g.setAttribute("style",'display:none;');_g.setAttribute("capture",'camera');var _h=new FileReader();if(!Eco.isEmpty(_a.type)&&_a.type=="image/*"&&_a.resize[0]!= -1){_c.ffFlag="image";}else{_c.ffFlag="default";}if(_c.ffFlag=="image"){this.dsImgFileUp_temp=Ex.util.isCheckDs("dsImgFileUp_temp");this.dsImgFileUp_temp.addColumn("IDX","int");this.dsImgFileUp_temp.addColumn("ORIGINAL_NM","string");this.dsImgFileUp_temp.addColumn("FILE_SIZE","int");this.dsImgFileUp_temp.addColumn("DATA","string");this.dsImgFileUp_temp.addColumn("BAR","int");}var _f=new Array();var _i=0;_g.onchange=function(_j){_j.preventDefault();oncomplete(_j.target.files);};function oncomplete(_j){if(_j.length>0){_c.ffobj.setWaitCursor(true,true);}var _k=new _c.FileReaderCall();_c.totalCnt=_j.length*_a.resize.length;for(var _l=0;_l<_j.length;_l++ ){_k.load(_b,_j[_l],_a);}};_g.click();},resizeCallBack:function(_a,_b,_c,_d,_e,_f){var _g=Ex.file;var _h=this.dsImgFileUp_temp.addRow();this.dsImgFileUp_temp.setColumn(_h,"IDX",_a);this.dsImgFileUp_temp.setColumn(_h,"DATA",_b);this.dsImgFileUp_temp.setColumn(_h,"ORIGINAL_NM",_c);this.dsImgFileUp_temp.setColumn(_h,"FILE_SIZE",_f);this.dsImgFileUp_temp.setColumn(_h,"BAR","");if(this.totalCnt==this.nCnt){Ex.file.ffobj.setWaitCursor(false,true);_g.ffrsobj[_g.ffrscallback](this.dsImgFileUp_temp);Ex.file.endRead();return;}this.nCnt++ ;}});}