﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("CTR010103_T02");this.set_classname("CTR010103_T02");this.set_titletext("인증신제품기업관리");this._setFormPosition(0,0,1031,705);}_a=new Dataset("ds_import",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("sta_masterSta","absolute","0","10","149","19",null,null,this);_a.set_taborder("4");_a.set_text("인증신제품기업내역");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","0",null,"10","0",null,this);_a.set_taborder("5");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","29",null,null,"0","671",this);_a.set_taborder("6");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_dtaCrtfcNwPrductList","absolute","310","34",null,null,"0","0",this);_a.set_taborder("1");_a.set_binddataset("ds_dtaCrtfcNwPrductList");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"사업자등록번호\"/><Cell col=\"2\" text=\"인증일자\"/><Cell col=\"3\" text=\"만료일자\"/><Cell col=\"4\" text=\"인증번호\"/><Cell col=\"5\" text=\"인증업체명\"/><Cell col=\"6\" text=\"기업구분\"/><Cell col=\"7\" text=\"대표자명\"/><Cell col=\"8\" text=\"전화번호\"/><Cell col=\"9\" text=\"소재지\"/><Cell col=\"10\" text=\"조달분류\"/><Cell col=\"11\" text=\"조달분류명\"/><Cell col=\"12\" text=\"인증제품명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:BIZRNO\" mask=\"###-##-#####\"/><Cell col=\"2\" displaytype=\"date\" text=\"bind:CRTFC_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:END_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" text=\"bind:CRTFC_NO\" editlimit=\"20\" editlengthunit=\"ascii\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:CRTFC_ENTRPS_NM\" editlimit=\"100\" editlengthunit=\"ascii\"/><Cell col=\"6\" displaytype=\"combo\" text=\"bind:ENTRPRS_SE\" editlimit=\"3\" editlengthunit=\"ascii\" combodataset=\"ds_entrprsSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"7\" style=\"align:left;\" text=\"bind:RPRSNTV_NM\" editlimit=\"100\" editlengthunit=\"ascii\"/><Cell col=\"8\" style=\"align:left;\" text=\"bind:TELNO\" editlimit=\"20\" editlengthunit=\"ascii\"/><Cell col=\"9\" style=\"align:left;\" text=\"bind:LOCPLC\" editlimit=\"200\" editlengthunit=\"ascii\"/><Cell col=\"10\" text=\"bind:PRCURE_CL_CODE\"/><Cell col=\"11\" text=\"bind:PRCURE_CL_NM\"/><Cell col=\"12\" style=\"align:left;\" text=\"bind:CRTFC_PRDUCT_NM\" editlimit=\"100\" editlengthunit=\"ascii\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_detailSta","absolute","310","10","253","19",null,null,this);_a.set_taborder("7");_a.set_text("인증신제품기업 상세목록");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Button("btn_excelUpload","absolute",null,"10","25","19","0",null,this);_a.set_taborder("3");_a.set_cssclass("btn_WF_Gridexcelup");this.addChild(_a.name,_a);_a=new Grid("grd_dtaReferMatterList","absolute","0","34","300",null,null,"0",this);_a.set_taborder("0");_a.set_binddataset("ds_dtaReferMatterList");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell cssclass=\"Cellgrd_WF_HeadEssential\" text=\"기준일자\"/><Cell col=\"1\" text=\"적요\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'date' : 'none'\" text=\"bind:STDR_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:RM\" editlimit=\"300\" editdisplay=\"display\" editlengthunit=\"ascii\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_demoDown","absolute",null,"10","84","19","28",null,this);_a.set_taborder("2");_a.set_text("양식 다운로드");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Grid("grd_demo","absolute","0","720",null,null,"7","-191",this);_a.set_taborder("8");_a.set_cellsizingtype("col");_a.set_visible("false");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"사업자등록번호\"/><Cell col=\"2\" text=\"인증일자\"/><Cell col=\"3\" text=\"만료일자\"/><Cell col=\"4\" text=\"인증번호\"/><Cell col=\"5\" text=\"인증업체명\"/><Cell col=\"6\" text=\"기업구분\"/><Cell col=\"7\" text=\"대표자명\"/><Cell col=\"8\" text=\"전화번호\"/><Cell col=\"9\" text=\"소재지\"/><Cell col=\"10\" text=\"조달분류\"/><Cell col=\"11\" text=\"조달분류명\"/><Cell col=\"12\" text=\"인증제품명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:BIZRNO\" mask=\"###-##-#####\"/><Cell col=\"2\" displaytype=\"date\" text=\"bind:CRTFC_DE\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:END_DE\"/><Cell col=\"4\" text=\"bind:CRTFC_NO\" editlimit=\"20\" editlengthunit=\"ascii\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:CRTFC_ENTRPS_NM\" editlimit=\"100\" editlengthunit=\"ascii\"/><Cell col=\"6\" displaytype=\"combo\" text=\"bind:ENTRPRS_SE\" editlimit=\"3\" editlengthunit=\"ascii\" combodataset=\"ds_entrprsSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"7\" style=\"align:left;\" text=\"bind:RPRSNTV_NM\" editlimit=\"100\" editlengthunit=\"ascii\"/><Cell col=\"8\" style=\"align:left;\" text=\"bind:TELNO\" editlimit=\"20\" editlengthunit=\"ascii\"/><Cell col=\"9\" style=\"align:left;\" text=\"bind:LOCPLC\" editlimit=\"200\" editlengthunit=\"ascii\"/><Cell col=\"10\" text=\"bind:PRCURE_CL_CODE\"/><Cell col=\"11\" text=\"bind:PRCURE_CL_NM\"/><Cell col=\"12\" style=\"align:left;\" text=\"bind:CRTFC_PRDUCT_NM\" editlimit=\"100\" editlengthunit=\"ascii\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",1031,705,this,function(_b){_b.set_classname("CTR010103_T02");_b.set_titletext("인증신제품기업관리");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("CTR010103_T02.xfdl","lib::comInclude.xjs");this.addIncludeScript("CTR010103_T02.xfdl","mis_lib::misUtil.xjs");this.registerScript("CTR010103_T02.xfdl",function(){this.btn_excelUpload_onclick=function(_a,_b){var _c=this.parent.parent.ds_dtaReferMatterList.rowposition;if(this.parent.parent.ds_dtaReferMatterList.rowposition> -1){if(this.parent.parent.ds_dtaCrtfcNwPrductList.getRowCount()>0){if(!application.confirm("해당 일자의 기존 데이터는 삭제됩니다.\n인증신제품기업자료를 업로드 하시겠습니까?")){return false;}}this.parent.parent.ds_dtaCrtfcNwPrductList.clearData();var _d={targetDs:this.ds_import,headSet:false,callBack:function(){if(this.ds_import.getRowCount()>1){var _e;var _f=nexacro.toNumber((this.dateUtils.format(this.gfn_today(),"yyyy")).substr(2,2));for(i=1;i<this.ds_import.rowcount;i++ ){var _g=this.ds_import.getColumn(i,"Column1");if(!this.comUtils.isNull(_g)){var _h=(this.comUtils.isNull(_g)?"":this.fn_getStringCheckByte(_g.replace(/[-]/g,""),20));var _i=this.ds_import.getColumn(i,"Column2");if(!this.comUtils.isNull(_i)){var _j="";if(_i.indexOf("/")> -1){var _k="20";var _l;_l=_i.split("/");if(_f<nexacro.toNumber(_l[2])){_k="19";}_j+=_k+(_l[2]);_j+=(_l[0]).padLeft(2,0);_j+=(_l[1]).padLeft(2,0);}else{_j=this.fn_getStringCheckByte(_i.replace(/[-]/g,""),8);}}var _m=this.ds_import.getColumn(i,"Column3");if(!this.comUtils.isNull(_m)){var _n="";if(_m.indexOf("/")> -1){var _k="20";var _o;_o=_m.split("/");if(_f<nexacro.toNumber(_o[2])){_k="19";}_n+=_k+(_o[2]);_n+=(_o[0]).padLeft(2,0);_n+=(_o[1]).padLeft(2,0);}else{_n=this.fn_getStringCheckByte(_m.replace(/[-]/g,""),8);}}var _p=this.fn_getStringCheckByte(this.ds_import.getColumn(i,"Column4"),20);var _q=this.fn_getStringCheckByte(this.ds_import.getColumn(i,"Column5"),100);var _r=this.ds_import.getColumn(i,"Column6");var _s=(this.comUtils.isNull(_r)?"":entrprs.padLeft(3,0));var _t=this.fn_getStringCheckByte(this.ds_import.getColumn(i,"Column7"),100);var _u=this.fn_getStringCheckByte(this.ds_import.getColumn(i,"Column8"),20);var _v=this.fn_getStringCheckByte(this.ds_import.getColumn(i,"Column9"),200);var _w=this.fn_getStringCheckByte(this.ds_import.getColumn(i,"Column10"),8);var _x=this.fn_getStringCheckByte(this.ds_import.getColumn(i,"Column11"),100);var _y=this.fn_getStringCheckByte(this.ds_import.getColumn(i,"Column12"),100);if(this.parent.parent.ds_dtaCrtfcNwPrductList.findRow("BIZRNO",_h)== -1){_e=this.parent.parent.ds_dtaCrtfcNwPrductList.addRow();this.parent.parent.ds_dtaCrtfcNwPrductList.setColumn(_e,"STDR_DE",this.parent.parent.ds_dtaReferMatterList.getColumn(_c,"STDR_DE"));this.parent.parent.ds_dtaCrtfcNwPrductList.setColumn(_e,"BIZRNO",_h);this.parent.parent.ds_dtaCrtfcNwPrductList.setColumn(_e,"CRTFC_DE",_j);this.parent.parent.ds_dtaCrtfcNwPrductList.setColumn(_e,"END_DE",_n);this.parent.parent.ds_dtaCrtfcNwPrductList.setColumn(_e,"CRTFC_NO",_p);this.parent.parent.ds_dtaCrtfcNwPrductList.setColumn(_e,"CRTFC_ENTRPS_NM",_q);this.parent.parent.ds_dtaCrtfcNwPrductList.setColumn(_e,"ENTRPRS_SE",_s);this.parent.parent.ds_dtaCrtfcNwPrductList.setColumn(_e,"RPRSNTV_NM",_t);this.parent.parent.ds_dtaCrtfcNwPrductList.setColumn(_e,"TELNO",_u);this.parent.parent.ds_dtaCrtfcNwPrductList.setColumn(_e,"LOCPLC",_v);this.parent.parent.ds_dtaCrtfcNwPrductList.setColumn(_e,"PRCURE_CL_CODE",_w);this.parent.parent.ds_dtaCrtfcNwPrductList.setColumn(_e,"PRCURE_CL_NM",_x);this.parent.parent.ds_dtaCrtfcNwPrductList.setColumn(_e,"CRTFC_PRDUCT_NM",_y);this.parent.parent.ds_dtaCrtfcNwPrductList.setColumn(_e,"DTA_SE",this.parent.parent.ds_dtaReferMatterList.getColumn(_c,"DTA_SE"));}}}}}};this.gfn_importExcel(_d);}else{alert("인증신제품기업내역 신규 행을 추가한 후, 엑셀 업로드를 해주세요.");}};this.btn_demoDown_onclick=function(_a,_b){this.gfn_exportExcel(this.grd_demo,"grd_demo_002");};});this.on_initEvent=function(){this.addEventHandler("onload",this.CTR010103_T02_onload,this);this.addEventHandler("oninit",this.CTR010103_T02_oninit,this);this.Static00.addEventHandler("onclick",this.Static00_onclick,this);this.sta_detailSta.addEventHandler("onclick",this.sta_detailSta_onclick,this);this.btn_excelUpload.addEventHandler("onclick",this.btn_excelUpload_onclick,this);this.btn_demoDown.addEventHandler("onclick",this.btn_demoDown_onclick,this);};this.loadIncludeScript("CTR010103_T02.xfdl");};})();