﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("CTR060600_T03");this.set_classname("CTR060600_T03");this.set_titletext("업체별계약보증변경현황");this._setFormPosition(0,0,1024,514);}_a=new Static("Static09","absolute","0","0",null,"10","0",null,this);_a.set_taborder("1");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_entrpsCntrctAssrncCha","absolute","0","10",null,null,"0","0",this);_a.set_taborder("2");_a.set_binddataset("ds_entrpsCntrctAssrncCha");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"130\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"110\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" colspan=\"2\" text=\"사업\"/><Cell col=\"3\" colspan=\"2\" text=\"계약\"/><Cell col=\"5\" rowspan=\"2\" colspan=\"2\" text=\"업체\"/><Cell col=\"7\" rowspan=\"2\" text=\"차수\"/><Cell col=\"8\" rowspan=\"2\" text=\"발행일자\"/><Cell col=\"9\" colspan=\"3\" text=\"보증\"/><Cell col=\"12\" rowspan=\"2\" text=\"보험사명\"/><Cell col=\"13\" rowspan=\"2\" text=\"특기사항\"/><Cell col=\"14\" colspan=\"6\" text=\"변경전\"/><Cell col=\"20\" rowspan=\"2\" text=\"계약금\"/><Cell row=\"1\" col=\"1\" text=\"사업코드\"/><Cell row=\"1\" col=\"2\" text=\"사업명\"/><Cell row=\"1\" col=\"3\" text=\"계약번호\"/><Cell row=\"1\" col=\"4\" text=\"계약명\"/><Cell row=\"1\" col=\"9\" text=\"보증금액\"/><Cell row=\"1\" col=\"10\" text=\"보증시작일\"/><Cell row=\"1\" col=\"11\" text=\"보증만료일\"/><Cell row=\"1\" col=\"14\" text=\"변경전보험금액\"/><Cell row=\"1\" col=\"15\" text=\"변경전보험시작일\"/><Cell row=\"1\" col=\"16\" text=\"변경전보험만료일\"/><Cell row=\"1\" col=\"17\" text=\"변경전보험사명\"/><Cell row=\"1\" col=\"18\" text=\"변경전특기사항\"/><Cell row=\"1\" col=\"19\" text=\"변경전발행일자\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:BSNS_CODE\"/><Cell col=\"2\" style=\"align:left middle;\" text=\"bind:BSNS_NM\"/><Cell col=\"3\" text=\"bind:CNTRCT_NO\" mask=\"####-#-#####\"/><Cell col=\"4\" style=\"align:left middle;\" text=\"bind:CNTRCT_NM\"/><Cell col=\"5\" style=\"selectbackground:#ffffffff;\" text=\"bind:BCNC_CODE\" suppress=\"1\" suppressalign=\"first\"/><Cell col=\"6\" style=\"align:left middle;selectbackground:#ffffffff;\" text=\"bind:BCNC_NM\" suppress=\"1\" suppressalign=\"first\"/><Cell col=\"7\" text=\"bind:ODR\"/><Cell col=\"8\" displaytype=\"date\" text=\"bind:PBLICTE_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:ASSRNC_AMOUNT\"/><Cell col=\"10\" displaytype=\"date\" text=\"bind:INSRNC_BGNDE\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" displaytype=\"date\" text=\"bind:INSRNC_ENDDE\" calendardisplaynulltype=\"none\"/><Cell col=\"12\" style=\"align:left middle;\" text=\"bind:ICNY_NM\"/><Cell col=\"13\" style=\"align:left middle;\" text=\"bind:SPCABL_MATTER\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:BFCHG_INSRNC_AMOUNT\"/><Cell col=\"15\" displaytype=\"date\" text=\"bind:BFCHG_INSRNC_BGNDE\" calendardisplaynulltype=\"none\"/><Cell col=\"16\" displaytype=\"date\" text=\"bind:BFCHG_INSRNC_ENDDE\" calendardisplaynulltype=\"none\"/><Cell col=\"17\" style=\"align:left middle;\" text=\"bind:BFCHG_ICNY_NM\"/><Cell col=\"18\" style=\"align:left middle;\" text=\"bind:BFCHG_SPCABL_MATTER\"/><Cell col=\"19\" displaytype=\"date\" text=\"bind:BFCHG_PBLICTE_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"20\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:CNTRCT_AMOUNT\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",1024,514,this,function(_b){_b.set_classname("CTR060600_T03");_b.set_titletext("업체별계약보증변경현황");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("CTR060600_T03.xfdl","mis_lib::misUtil.xjs");this.addIncludeScript("CTR060600_T03.xfdl","lib::comInclude.xjs");this.registerScript("CTR060600_T03.xfdl",function(){});this.on_initEvent=function(){};this.loadIncludeScript("CTR060600_T03.xfdl");};})();