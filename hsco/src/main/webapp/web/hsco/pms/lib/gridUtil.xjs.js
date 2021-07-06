﻿(function(){return function(_a){var _b;this.registerScript(_a,function(){this.USE_GRID_MODIFY_MARK=true;this.INSERT_MARK_IMAGE="theme://images/grd_WF_HeadEssential.png";this.UPDATE_MARK_IMAGE="theme://images/grd_WF_HeadEssential.png";this.CUR_GRID_OBJECT=null;this.fn_init_grid=function(_c){_c.set_cellsizingtype("col");_c.set_cellmovingtype("col");_c.addEventHandler("onheadclick",this._fn_gidOnheadSortClickHandler,this);_c.addEventHandler("onrbuttondown",this._fn_gridOnRbttHandler,this);var _d=_c.getCellProperty("body",0,"text");if(this.comUtils.isNullEmpty(_d)==false){var _e=_d.split(":")[1];if(_e=='CHK'||_e=='CHECK'||_e=='APPLC_AT'){_c.addEventHandler("onheadclick",this._fn_grdOnHeadChkClickHandler,this);_c.addEventHandler("oncellclick",this._fn_grdOnCellChkClickHandler,this);}}_c.addEventHandler("onselectchanged",this._fn_gidOnSelectChangedHandler,this);if(this.USE_GRID_MODIFY_MARK){var _f="EXPR(dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT?'"+this.INSERT_MARK_IMAGE+"':(dataset.getRowType(currow)==Dataset.ROWTYPE_UPDATE?'"+this.UPDATE_MARK_IMAGE+"':''))";_c.setCellProperty("body",0,"backgroundimage",_f);}_c.set_nodatatext('자료가 존재하지 않습니다');_c.set_autoenter("select");};this.fn_init_allGrid=function(_c){var _d=_c.components.length;for(var _f=0;_f<_d;_f++ ){var _e=_c.components.get_item(_f);if(_e instanceof Grid){this.fn_init_grid(_e);}else if(_e instanceof Div||_e instanceof Tab||_e instanceof Tabpage){this.fn_init_allGrid(_e);}}};this._fn_gidOnheadSortClickHandler=function(_b,_c){if(_b.getCellProperty("Head",_c.cell,"displaytype")=='image'){return;}this.gfn_gridSort(_b,_c);};this._fn_gidOnSelectChangedHandler=function(_b,_c){var _d=_b.getCellCount("Body");for(var _f=0;_f<_d;_f++ ){var _e=_b.getCellProperty("body",_f,"edittype");if(_e!="none"){_b.setCellProperty("body",_f,"style","selectbackground:#f5f5dc5e");}}};this._fn_grdOnCellChkClickHandler=function(_b,_c){if(_c.col==0){this.fn_checkHead(_b);if(this.fn_grdOnCellChkCallback!=null){this.fn_grdOnCellChkCallback(_b,_c);}}};this._fn_grdOnHeadChkClickHandler=function(_b,_c){if(_c.col==0){this.fn_checkAll(_b);if(this.fn_grdOnHeadChkCallback!=null){this.fn_grdOnHeadChkCallback(_b,_c);}}};this.fn_checkAll=function(_c){var _d=this._fn_toggleHeaderCheck(_c);var _e=this[_c.binddataset];_e.set_enableevent(false);var _f=_e.getRowCount();for(var _g=0;_g<_f;_g++ ){_e.setColumn(_g,"CHK",_d);_e.setColumn(_g,"CHECK",_d);_e.setColumn(_g,"APPLC_AT",_d);}_e.set_enableevent(true);};this._fn_toggleHeaderCheck=function(_c){var _d=_c.getCellProperty("head",0,"text");if(this.comUtils.isNullEmpty(_d)==true){_d='0';}var _e=(_d=='0'?'1':'0');_c.setCellProperty("head",0,"text",_e);return _e;};this.fn_checkHead=function(_c){var _d=this[_c.binddataset];var _e=_d.getRowCount();for(var _g=0;_g<_e;_g++ ){var _f=_d.getColumn(_g,"CHK");if(this.comUtils.isNullEmpty(_f)==true){_f='0';}if(_f=="0"){_c.setCellProperty("head",0,"text","0");return;}}_c.setCellProperty("head",0,"text","1");};this.fn_checkValue=function(_c,_d){var _e=this[_c.binddataset];var _f=_e.getRowCount();var _g=[];for(var _k=0;_k<_f;_k++ ){var _h=_e.getColumn(_k,"CHK");if(_h=='1'){var _i=_e.getColumn(_k,_d);var _j="'"+_i+"'";_g.push(_j);}}return _g.toString();};this.fn_checkCnt=function(_c){var _d=this[_c.binddataset];var _e=_d.getRowCount();var _f=0;for(var _h=0;_h<_e;_h++ ){var _g=_d.getColumn(_h,"CHK");if(_g=='1'){_f++ ;}}return _f;};this.fn_checkIdx=function(_c,_d){var _e=this[_c.binddataset];var _f=_e.getRowCount();var _g=[];for(var _i=0;_i<_f;_i++ ){var _h=_e.getColumn(_i,"CHK");if(_h=='1'){_g.push(_i);}}return _g;};this.fn_checkItemDelete=function(_c){var _d=this[_c.binddataset];var _e=_d.getRowCount();for(var _g=_e-1;_g>=0;_g-- ){var _f=_d.getColumn(_g,"CHK");if(_f=="1"){_d.deleteRow(_g);}}this.fn_checkHead(_c);};this.fn_importExcel=function(_c,_d,_e,_f,_g,_h){var _i=function(){if(this.fn_start_importExcel!=null){this.fn_start_importExcel();}this._fn_copy_excelDsToGrid(_c,_d,_e,_g);if(this.fn_finish_importExcel!=null){this.fn_finish_importExcel();}else if(this.comUtils.isNullEmpty(_h)==false){_h();}};var _j={targetDs:_c,headSet:_f==null?false:_f,callBack:_i};this.gfn_importExcel(_j);};this.isCopyRow=false;this._fn_copy_excelDsToGrid=function(_c,_d,_e,_f){var _g=[];var _h=_d.getCellCount("Body");var _i=this[_d.binddataset];var _j=0;if(_e==null){_e=0;for(var _p=0;_p<10;_p++ ){var _k=_c.getColumn(_p,"Column0");if(this.comUtils.isNullEmpty(_k)==false&&_k.indexOf("Column")!= -1){break;}_e++ ;}}for(var _p=0;_p<_e;_p++ ){_c.deleteRow(0);}if(this.comUtils.isNullEmpty(_f)==true){for(var _p=0;_p<_h;_p++ ){var _l=_d.getCellProperty("body",_p,"text");if(this.comUtils.isNullEmpty(_l)==true){continue;}if(_l.indexOf("bind:")!= -1){var _m=_l.split(":")[1];if(this.comUtils.isNullEmpty(_m)==true){continue;}_g.push(_m+'=Column'+_j++ );}}_f=_g.toString();}this.debug(_f,true);var _n=_c.rowcount;for(var _p=0;_p<_n;_p++ ){var _o=_i.addRow();this.isCopyRow=true;_i.copyRow(_o,_c,_p,_f);this.isCopyRow=false;}};this.arrayGridAlign={};this.fn_find_grid=function(_c,_d){var _e=_c.components.length;for(var _h=0;_h<_e;_h++ ){var _f=_c.components.get_item(_h);if(_f instanceof Grid){if(_f.binddataset==_d){return _f;}}else if(_f instanceof Div||_f instanceof Tab||_f instanceof Tabpage){var _g=this.fn_find_grid(_f,_d);if(_g!=null){return _g;}}}return null;};this.fn_init_gridAlignInfo=function(_c,_d){if(_c.indexOf('List')> -1||_c.indexOf('list')> -1){if(this.comUtils.isNullEmpty(_d)==false){var _e=_d.split('=')[0];this.arrayGridAlign[_c]=_e;}}};this.fn_auto_gridAlign=function(_c,_d){var _e=_d==0?true:false;if(_e==true){if(this.arrayGridAlign[_c]!=null){this.fn_set_gridAlign(this.fn_find_grid(this,this.arrayGridAlign[_c]),true);}}};});this.loadIncludeScript(_a);_b=null;};})();