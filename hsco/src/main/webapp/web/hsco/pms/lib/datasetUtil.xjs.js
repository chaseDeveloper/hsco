﻿(function(){return function(_a){var _b;this.registerScript(_a,function(){this.fn_get_svcId=function(_c){return _c.substring(_c.lastIndexOf("/")+1,_c.lastIndexOf("."));};this.fn_find_dsParent=function(_c,_d){var _e=_c.components.length;for(var _h=0;_h<_e;_h++ ){var _f=_c.components.get_item(_h);if(_f instanceof Combo||_f instanceof Radio){if(_f.innerdataset==_d){return _f;}}else if(_f instanceof Div||_f instanceof Tab||_f instanceof Tabpage){var _g=this.fn_find_dsParent(_f,_d);if(_g!=null){return _g;}}}return null;};this.fn_fill_combo=function(_c,_d,_e,_f,_g){var _h=this[_c.innerdataset];if(this.comUtils.isNullEmpty(_h)==true){alert("콤보에 데이터셋이 지정되어 있지 않습니다.");return;}this.fn_fill_code(_h,_d,_e,_f,_g);};this.fn_fill_code=function(_c,_d,_e,_f,_g){var _h="fn_"+_c.name+"Callback";delete this[_h];this[_h]=function(_i,_j,_k){var _l=_j==0?true:false;if(_l){var _m=this.fn_find_dsParent(this,_c.name);if(_m!=null){if(this.comUtils.isNullEmpty(_e)==false){this.fn_add_header(this,_m,_e);}else{_m.set_index(0);}}else{if(this.comUtils.isNullEmpty(_e)==false){if(isNaN(_e)==false){if(_c.rowcount>0){_c.set_rowposition(Number(_e));}}}}}else{this.gfn_callback_message(_i,_j,_k);}this.debug((_l==true?"Success : ":"Fail : ")+_i);};this.fn_get_data(_c,_d,_f,_g==null?_h:_g);};this.fn_fill_spin=function(_c,_d,_e,_f,_g){var _h="fn_"+_c.name+"Callback";delete this[_h];this[_h]=function(_i,_j,_k){var _l=_j==0?true:false;if(_l){var _m=_c.getColumn(0,"MAX_VALUE");_d.set_min(0);_d.set_max(this.nvl(_m,0));}else{this.gfn_callback_message(_i,_j,_k);}this.debug((_l==true?"Success : ":"Fail : ")+_i);};this.fn_get_data(_c,_e,_f,_g==null?_h:_g);};this.fn_fill_odr=function(_c,_d,_e,_f,_g){var _h="fn_"+_c.name+"Callback";delete this[_h];this[_h]=function(_i,_j,_k){var _l=_j==0?true:false;if(_l){var _m=this.fn_find_dsParent(this,_c.name);if(_m!=null){var _n=Number(_c.getColumn(0,"MAX_VALUE"));_c.clearData();for(var _p=1;_p<=_n;_p++ ){var _o=_c.addRow();_c.setColumn(_o,"CODE",_p);_c.setColumn(_o,"CODE_NM",_p);}if(this.comUtils.isNullEmpty(_e)==false){this.fn_add_header(this,_m,_e);}}}else{this.gfn_callback_message(_i,_j,_k);}this.debug((_l==true?"Success : ":"Fail : ")+_i);};this.fn_get_data(_c,_d,_f,_g==null?_h:_g);};this.fn_fill_multiCheckBox=function(_c,_d,_e,_f,_g,_h){var _i="fn_"+_c.name+"Callback";delete this[_i];this[_i]=function(_j,_k,_l){var _m=_k==0?true:false;if(_m){_d.fn_create(_c,_h);}else{this.gfn_callback_message(_j,_k,_l);}this.debug((_m==true?"Success : ":"Fail : ")+_j);};this.fn_get_data(_c,_e,_f,_g==null?_i:_g);};this.fn_get_data=function(_c,_d,_e,_f){var _g=_c.name.replace('ds_','');var _h=_c.name;var _i="ds_cond_"+_g;_c.clearData();var _j=null;if(this[_i]==null){_j=new Dataset;this.addChild(_i,_j);_j.addColumn("DUMMY","string",120);_j.set_useclientlayout(true);_j.addRow();}else{_j=this[_i];this[_i].clearData();this[_i].addRow();}if(this.comUtils.isNullEmpty(_e)==false){this.fn_objToDs(_e,_j,0);}var _k=_g;var _l=_d;var _m="input1="+_i;var _n=_h+"=output1";if(this.fn_validate_tranasaction(_k,_l,_m,_n)==false){return;}Ex.core.tran(this,_k,_l,_m,_n,"",_f);};this.fn_get_sum=function(_c,_d,_e,_f){var _g=_c.rowcount;var _h=0;var _i=0;var _j=true;for(var _k=0;_k<_g;_k++ ){if(_e!=null&&_f!=null){if(_c.getColumn(_k,_e)!=_f){continue;}}_i=_c.getColumn(_k,_d);if(_i!=null&&typeof (_i)=='string'){if(_i.indexOf('/')!= -1){_i=this.fn_fractionalToPer(_i);}}_i=(_i==null?0:Number(_i));_h+=_i;}return _h;};this.fn_cal_percent=function(_c,_d,_e,_f,_g){var _h=Number(_c.getColumn(_d,_e));var _i=Number(_c.getColumn(_f,_g));if(_i==0){return '0%';}var _j=_h/_i*100;if(isNaN(_j)==true){return 0;}return _j.toFixed(2)+'%';};this.fn_add_comboHeader=function(_c,_d,_e,_f,_g){var _h=_c[_d.innerdataset];var _i=_e.split("/");if(_f==null){_f=_d.codecolumn?_d.codecolumn:"CODE";}if(_g==null){_g=_d.datacolumn?_d.datacolumn:"CODE_NM";}_h.insertRow(0);_h.setColumn(0,_g,_i[0]);_h.setColumn(0,_f,_i[1]);_d.set_index(0);};this.fn_add_header=function(_c,_d,_e,_f,_g){var _h=_c[_d.innerdataset];var _i=_e.split("/");if(_f==null){_f=_d.codecolumn?_d.codecolumn:"CODE";}if(_g==null){_g=_d.datacolumn?_d.datacolumn:"CODE_NM";}_h.insertRow(0);_h.setColumn(0,_g,_i[0]);_h.setColumn(0,_f,_i[1]);_h.set_rowposition(0);_d.set_index(0);};this.fn_divToDS=function(_c,_d,_e){this.debug("********************************fn_divToDS start*******************************");if(_c==null||_d==null){this.debug("fn_divToDS ds == null || div == null out");return false;}if(this.comUtils.isNullEmpty(_e)==true){_e=true;}if(_e==true){_c.clearData();_c.addRow();}var _f=_d.components.length;for(var _j=0;_j<_f;_j++ ){var _b=_d.components.get_item(_j);switch(_b.toString()){case "[object Edit]":case "[object MaskEdit]":case "[object TextArea]":case "[object Spin]":case "[object Calendar]":case "[object Radio]":case "[object CheckBox]":case "[object ListBox]":case "[object Combo]":case "[object Div]":var _g=null;if(_b.toString()=="[object CheckBox]"){_g=_b.value==true?1:0;}else if(_b.toString()=="[object Div]"){switch(_b.url){case "pms_cmp_formLib::CmpMultiCheckBar.xfdl":_g=_b.fn_get_value();break;case "common::frmMonCal.xfdl":_g=_b.getValue("YYYYMM");break;}}else{_g=_b.value;}if(this.comUtils.isNullEmpty(_g)==true){}var _h=_b.id.substr(_b.id.indexOf("_")+1,_b.id.length);var _i=_c.getColumnInfo(_h);if(_i==null){_c.addColumn(_h,"string",120);}_c.setColumn(0,_h,_g);break;}}this.debug("********************************fn_divToDS start*******************************");return true;};this.fn_dsToParamDs=function(_c,_d,_e,_f,_g){var _h=_d.colcount;_f=_f==null?0:_f;_g=_g==null?true:false;if(_g==true){_d.clearData();_f=_d.addRow();}for(var _l=0;_l<_h;_l++ ){var _i=_d.getColumnInfo(_l);var _j=_i.name;var _k=_c.getColumn(_e,_j);if(_k!=null){_d.setColumn(_f,_j,_k);}}};this.fn_dsToObj=function(_c,_d){var _b={};var _e=_c.colcount;for(var _i=0;_i<_e;_i++ ){var _f=_c.getColumnInfo(_i);var _g=_f.name;var _h=_c.getColumn(_d,_g);_b[_g]=_h;}return _b;};this.fn_dsToArr=function(_c){var _d=[];var _e=_c.rowcount;var _f=_c.colcount;for(var _j=0;_j<_e;_j++ ){var _b=new Object();for(var _k=0;_k<_f;_k++ ){var _g=_c.getColumnInfo(_k);var _h=_g.name;var _i=_c.getColumn(_j,_h);_b[_h]=_i;}_d.push(_b);}return _d;};this.fn_objToDs=function(_b,_c,_d,_e){if(_e==true){_d=_c.addRow();}for(var _g in _b){if(_b.hasOwnProperty(_g)==true){var _f=_c.getColumnInfo(_g);if(_f==null){_c.addColumn(_g,"string",120);}_c.setColumn(_d,_g,_b[_g]);}}};this.fn_arrToDs=function(_c,_d,_e){if(_e==true){_d.clearData();}var _f=_c.length;for(var _g=0;_g<_f;_g++ ){this.fn_objToDs(_c[_g],_d,null,true);}};this.fn_insertRow=function(_c,_d){var _e=_c.rowcount;_d.set_enableevent(false);for(var _g=0;_g<_e;_g++ ){var _f=_d.addRow();_d.copyRow(_f,_c,_g);}_d.set_enableevent(true);};this.fn_add_datasetFn=function(){Dataset.prototype.deleteSelectRow=function(){this.deleteRow(this.rowposition);};Dataset.prototype.cancel=function(){this.reset();this.applyChange();};Dataset.prototype.getSelectColumn=function(_c){return this.getColumn(this.rowposition,_c);};Dataset.prototype.setSelectColumn=function(_c,_d){return this.setColumn(this.rowposition,_c,_d);};Dataset.prototype.isUpdated=function(){return Ex.util.isUpdated(this);};Dataset.prototype.find=function(_c,_d){var _e=this.rowcount;for(var _f=0;_f<_e;_f++ ){if(_d==this.getColumn(_f,_c)){return true;}}return false;};Dataset.prototype.setLastRowposition=function(){if(this.rowcount>0){if(this.posMode=="savePos"){if(this.backupPosition!=null&&this.backupPosition!= -1){this.set_rowposition(this.backupPosition);this.backupPosition= -1;}}else{this.set_rowposition(this.rowcount-1);}}};Dataset.prototype.isAllNull=function(){var _c=this.rowcount;var _d=this.colcount;for(var _h=0;_h<_c;_h++ ){for(var _i=0;_i<_d;_i++ ){var _e=this.getColumnInfo(_i);var _f=_e.name;var _g=this.getColumn(_h,_f);if(_g==null||_g==''){return false;}}}return true;};};});this.loadIncludeScript(_a);_b=null;};})();