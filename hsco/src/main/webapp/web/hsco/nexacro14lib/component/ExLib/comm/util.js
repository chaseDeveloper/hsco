﻿if(!JsNamespace.exist("Ex.util")){JsNamespace.declare("Ex.util",{ffobj:undefined,ffarg:undefined,_msgFormSize:{width:"400",height:"210",middle:{width:"400",height:"280"},max:{width:"600",height:"280"}},init:function(_a){this.ffarg=undefined;this.ffobj=_a;},setOpenMsg:function(_a){var _b,_c;if(Eco.isEmpty(_a)||_a=="default"){_a="default";_b=Ex.util._msgFormSize.width;_c=Ex.util._msgFormSize.height;}else{switch(_a){case "middle":_b=this._msgFormSize.middle.width;_c=this._msgFormSize.middle.height;break;case "max":_b=this._msgFormSize.max.width;_c=this._msgFormSize.max.height;break;default:Ex.Logger.error({message:"unKnown msgPopup type :"+_a,elapsed:true,stack:true});break;}}var _d={width:_b,height:_c};return _d;},setArg:function(_a){this.ffArg=_a;},getArg:function(){return this.ffArg;},isReplaceEmpty:function(_a){if(Eco.isNull(_a)||Eco.isUndefined(_a)){return "";}else{return _a;}},searchParentFunc:function(){var _a=1;var _b="";var _c="this.ffobj.";var _d=0;var _e=arguments[0];var _f=false;while(_a<5){if(Eco.isFunction(eval(_c+_b+_e))==true){_f=true;break;}else{_b="parent."+_b;_a++ ;}}if(!_f){}else{_f=eval(_c+_b+_e);}return _f;},isGetHost:function(){if(application.gv_op.indexOf("LOCAL")!= -1){return "LOCAL";}else if(application.gv_op.indexOf("DEV")!= -1){return "DEV";}else if(application.gv_op.indexOf("QA")!= -1){return "QA";}else{return "OP";}},isForm:function(){if(Eco.isEmpty(this.ffobj.opener)){return "M";}else{return "P";}},isDebug:function(_a){if(application.gv_debug=="Y"){Ex.Logger.debug({message:"debug message !!!"+_a,elapsed:true,stack:true});}},isCheckDs:function(_a){var _b=Eco.XComp.lookup(this.ffobj,_a);if(Eco.isEmpty(_b)){_b=new Dataset;_b.name=_a;this.ffobj.addChild(_a,_b);}else{_b.clearData();}return _b;},getDataset:function(_a){return Eco.XComp.query(this.ffobj,"typeOf == 'Dataset' && prop[name] == '"+_a+"'")[0];},splitDsName:function(_a,_b){var _c;var _d;var _e=new Array();_c=_a.split(" ");for(var _f=0;_f<_c.length;_f++ ){_d=_c[_f].split("=");if(_b==0){_e[_f]=_d[0];}else{_e[_f]=_d[1];}}return _e;},_searchPageDatasetCheck:function(_a){if(Eco.isEmpty(_a)){return _a;}var _b=_a.split(" ");var _c="";var _d="";var _e="";var _f;var _g;var _h;var _i;var _j=(Eco.isEmpty(application.gds_pageInfo.getColumn(0,"CURR_PAGE")))?1:parseInt(application.gds_pageInfo.getColumn(0,"CURR_PAGE"));var _k=(_j>1)?"Y":"N";var _l=new Array(2);for(var _m=0;_m<_b.length;_m++ ){_c=_b[_m].split("=");_f=Ex.util.getDataset(_c[0]);if(_k=="Y"){_d=_c[0]+"_Spare";_h=Ex.util.getDataset(_d);_i=Ex.util.getDataset(_c[0]);if(Eco.isEmpty(_h)){_h=new Dataset;_h.loadXML(_i.saveXML());_h.name=_d;_h.useclientlayout=true;this.ffobj.addChild(_d,_h);}if(_e.length==0){_e=_d+"="+_c[1];}else{_e+=" "+_d+"="+_c[1];}}else{if(_e.length==0){_e=_c[0]+"="+_c[1];}else{_e+=" "+_c[0]+"="+_c[1];}}}return _e;},postPageDataset:function(_a){if(Eco.isEmpty(_a)){return _a;}var _b=_a.split(" ");var _c="";var _d="";var _e="";var _f="";var _g=0;var _h;var _i;for(var _j=0;_j<_b.length;_j++ ){sOutDsInfo=_b[_j].split("=");sTargetDs=sOutDsInfo[0];if(sTargetDs.search(/_Spare/g)> -1){_f=sTargetDs.replace(/_Spare/g,"");_i=Ex.util.getDataset(_f);_h=Ex.util.getDataset(sTargetDs);_i.appendData(_h);_g=_i.rowcount;_i.set_rowposition(_g-1);}}},deleteData:function(_a,_b,_c,_d,_e){var _f=Ex.util.findData(_a,_b,_c,_d,_e);_a.deleteRow(_f);},findData:function(_a,_b,_c,_d,_e){if(Eco.isEmpty(_d)){return _a.findRow(_b,_c.toString());}return _a.findRowExpr(_b+" == '"+_c+"' && "+_d+" == '"+_e+"'");},moveData:function(_a,_b,_c,_d,_e,_f){var _g=Ex.util.findData(_a,_b,_c,_e,_f);_a.moveRow(_g,_d);},editData:function(_a,_b,_c,_d,_e,_f,_g){var _h=Ex.util.findData(_a,_b,_c,_f,_g);return _a.setColumn(_h,_d,_e);},getData:function(_a,_b,_c,_d){var _e=_a.getColumn(_b,_c);var _f=_a.getColumnInfo(_c);if(Eco.isEmpty(_f)){return "";}var _g=_f.type;if(Eco.isEmpty(_d)){switch(_g.toUpperCase()){case "STRING":_d="";break;case "BIGDECIMAL":case "INT":case "FLOAT":_d=0;break;}}var _h=(Eco.isEmpty(_e))?_d:_e;return _h;},getLookupData:function(_a,_b,_c,_d,_e,_f){var _g;var _h=Ex.util.findData(_a,_b,_c,_e,_f);if(_h<0){return "";}_g=_a.getColumn(_h,_d);if(Eco.isEmpty(_g)){return "";}return _g;},isUpdated:function(_a){if(_a.getDeletedRowCount()>0){return true;}if(_a.findRowExpr("(this.getRowType(rowidx)==Dataset.ROWTYPE_UPDATE)||(this.getRowType(rowidx)==Dataset.ROWTYPE_INSERT)")> -1){return true;}return false;},isUpdatedRow:function(_a,_b){if(_a.updatecontrol==true){if(_a.getRowType(_b)==2||_a.getRowType(_b)==4){return true;}return false;}else{for(var _c=0;_a.getColCount();_c++ ){if(this.gfn_IsUpdateColumn(_a,_b,_c)==true){return true;}}}return false;},isUpdateColumn:function(_a,_b,_c){if(_a.getRowType(_b)==2){if(Eco.isEmpty(_a.getColumn(_b,_c))){return false;}}else{if(_a.getColumn(_b,_c)==_a.getOrgColumn(_b,_c)){return false;}}return true;},allRowDataCall:function(_a,_b,_c){var _d;for(var _e=0;_e<_a.getRowCount();_e++ ){if(_c&&!(_a.getRowType(_e)==2||_a.getRowType(_e)==4)){continue;}_d=_b(_a,_e);if(Eco.isEmpty(_d)==false){return _d;}}},dsFilter:function(_a,_b,_c){var _d=_a.keystring;if(!Eco.isEmpty(_d)){_d=_d.toString();}_a.set_keystring("");_a.filter(_c);_b.copyData(_a,true);_a.filter("");if(!Eco.isEmpty(_d)){_a.set_keystring(_d);}},checkEmail:function(_a){if(Eco.isEmpty(_a)){return false;}var _b=_a.indexOf("@");var _c=_a.indexOf(".");var _d=_a.length;if(_b<=0||_b==_d){return false;}if(_c<=0||_c==_d){return false;}if(_a.indexOf("@",_b+1)!= -1){return false;}if(_a.substr(_b-1,1)=="."||_a.substr(_b+1,1)=="."){return false;}if(_a.indexOf(".",(_b+2))== -1){return false;}if(_a.indexOf(" ")!= -1){return false;}return true;},today:function(){var _a="";var _b=new Date();var _a=_b.getFullYear()+"";_a+=Eco.string.getRightStr("0"+(_b.getMonth()+1),2);_a+=Eco.string.getRightStr("0"+_b.getDate(),2);return _a;},todayEng:function(){var _a="";var _b=new Date();var _a="";_a+=Eco.string.getRightStr("0"+(_b.getMonth()+1),2);_a+=Eco.string.getRightStr("0"+_b.getDate(),2);_a+=_b.getFullYear();return _a;},replaceDateKorea:function(_a){var _b=new String(_a);if(_b.toString().length!==8){return;}var _c=Math.floor(_b.slice(0,2),10);var _d=Math.floor(_b.slice(2,4),10);if(_c<1||_c>12){return;}if(_d<1){return;}strToday=_a.slice(4);strToday+=_a.slice(0,2);strToday+=_a.slice(2,4);return strToday;},replaceDateEng:function(_a){var _b=new String(_a);if(_b.toString().length!==8){return;}var _c=Math.floor(_b.slice(4,6),10);var _d=Math.floor(_b.slice(6),10);if(_c<1||_c>12){return;}if(_d<1){return;}strToday=_b.slice(4,6);strToday+=_b.slice(6);strToday+=_b.slice(0,4);return strToday;},isFormatDate:function(){},todayTime:function(){var _a="";var _b=new Date();var _a=_b.getFullYear()+"";_a+=Eco.string.getRightStr("0"+(_b.getMonth()+1),2);_a+=Eco.string.getRightStr("0"+_b.getDate(),2);_a+=Eco.string.getRightStr("0"+_b.getHours(),2);_a+=Eco.string.getRightStr("0"+_b.getMinutes(),2);_a+=Eco.string.getRightStr("0"+_b.getSeconds(),2);return _a;},checkEmail:function(_a){if(Eco.isEmpty(_a)){return false;}var _b=_a.indexOf("@");var _c=_a.indexOf(".");var _d=_a.length;if(_b<=0||_b==_d){return false;}if(_c<=0||_c==_d){return false;}if(_a.indexOf("@",_b+1)!= -1){return false;}if(_a.substr(_b-1,1)=="."||_a.substr(_b+1,1)=="."){return false;}if(_a.indexOf(".",(_b+2))== -1){return false;}if(_a.indexOf(" ")!= -1){return false;}return true;},checkPhone:function(_a){if(Eco.isEmpty(_a)||(!Eco.isEmpty(_a)&&_a.indexOf("-")== -1)){return false;}else if(_a.indexOf(".")>=0){return false;}else{var _b=_a.split("-");for(var _c=0;_c<_b.length;_c++ ){if(!nexacro.isNumeric(_b[_c])){return false;}}}return true;},getObjFont:function(_a,_b,_c,_d){var _e=_a.currentstyle.font;_d=(Eco.isEmpty(_d))?"normal":_d;_e.set_size(_b);_e.set_face(_c);_e.set_type(_d);return _e;},setParam:function(_a,_b){return _a+"="+this.isReplaceEmpty(_b)+"&nbsp;";},isNvl:function(_a,_b){var _c=(Eco.isEmpty(_a))?_b:_a;return _c;},gDecode:function(){var _a=null;var _b=arguments;var _c=_b[0];var _d=false;var _e=0;if((_b.length%2)==0){_e=_b.length-1;_d=true;}else{_e=_b.length;_d=false;}for(var _f=1;_f<_e;_f+=2){if(_c==_b[_f]){_a=_b[_f+1];_f=_e;}}if(_a==null&&_d){_a=_b[_b.length-1];}return _a;},getOS:function(){var _a=system.osversion;if(Eco.isEmpty(_a)){return "ETC";}_a=_a.toUpperCase();if(_a.indexOf("ANDROID")>=0){return "ANDROID";}else if(_a.indexOf("IOS")>=0){return "IOS";}else if(_a.indexOf("WINDOWS")>=0){return "WINDOWS";}else{return "ETC";}}});}