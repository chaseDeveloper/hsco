﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HPM060108_T06");this.set_classname("HPM060108_T06");this.set_titletext("화성정궁도장");this._setFormPosition(0,0,1031,638);}_a=new Grid("grd_achsteManageList","absolute","0","34",null,null,"0","0",this);_a.set_taborder("0");_a.set_binddataset("ds_achsteManageList");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"76\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"년월\"/><Cell col=\"1\" rowspan=\"2\" text=\"구분\"/><Cell col=\"2\" colspan=\"4\" text=\"일반권\"/><Cell col=\"6\" colspan=\"4\" text=\"할인권(청소년)\"/><Cell col=\"10\" colspan=\"4\" text=\"할인권(경로,장애인,국가유공자)\"/><Cell col=\"14\" rowspan=\"2\" text=\"총계\"/><Cell row=\"1\" col=\"2\" text=\"주간\"/><Cell row=\"1\" col=\"3\" text=\"조/야간\"/><Cell row=\"1\" col=\"4\" text=\"월 정기권\"/><Cell row=\"1\" col=\"5\" text=\"소계\"/><Cell row=\"1\" col=\"6\" text=\"주간\"/><Cell row=\"1\" col=\"7\" text=\"조/야간\"/><Cell row=\"1\" col=\"8\" text=\"월 정기권\"/><Cell row=\"1\" col=\"9\" text=\"소계\"/><Cell row=\"1\" col=\"10\" text=\"주간\"/><Cell row=\"1\" col=\"11\" text=\"조/야간\"/><Cell row=\"1\" col=\"12\" text=\"월정기권\"/><Cell row=\"1\" col=\"13\" text=\"소계\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" displaytype=\"normal\" edittype=\"expr:dataset.getRowType(currow) == '2' ? 'mask' : 'none'\" editfilter=\"none\" text=\"bind:YM\" mask=\"####-##\" maskchar=\" \" editdisplay=\"expr:dataset.getRowType(currow) == '2' ? 'display' : 'edit'\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" text=\"건수\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"masknumber\" editfilter=\"none\" style=\"align:right;\" text=\"bind:GNRL_DAYTM_CO\" mask=\"!###,###,###,###,###\" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"masknumber\" editfilter=\"none\" style=\"align:right;\" text=\"bind:GNRL_MORN_NIGHT_CO\" mask=\"!###,###,###,###,###\" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" editfilter=\"none\" style=\"align:right;\" text=\"bind:GNRL_MT_CMMTKT_CO\" mask=\"!###,###,###,###,###\" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:GNRL_CO_SUM\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:DSCNT_YNGBGS_DAYTM_CO\" mask=\"!###,###,###,###,###\" maskchar=\" \" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:DSCNT_YNGBGS_MORN_NIGHT_CO\" mask=\"!###,###,###,###,###\" maskchar=\" \" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:DSCNT_YNGBGS_CMMTKT_CO\" mask=\"!###,###,###,###,###\" maskchar=\" \" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DSCNT_YNGBGS_CO_SUM\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:DSCNT_ETC_DAYTM_CO\" mask=\"!###,###,###,###,###\" maskchar=\" \" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:DSCNT_ETC_MORN_NIGHT_CO\" mask=\"!###,###,###,###,###\" maskchar=\" \" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:DSCNT_ETC_CMMTKT_CO\" mask=\"!###,###,###,###,###\" maskchar=\" \" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DSCNT_ETC_CO_SUM\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CO_SUM\"/><Cell row=\"1\" col=\"1\" text=\"금액\"/><Cell row=\"1\" col=\"2\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:GNRL_DAYTM_AM\" mask=\"!###,###,###,###,###\" maskchar=\" \" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:GNRL_MORN_NIGHT_AM\" mask=\"!###,###,###,###,###\" maskchar=\" \" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell row=\"1\" col=\"4\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:GNRL_MT_CMMTKT_AM\" mask=\"!###,###,###,###,###\" maskchar=\" \" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell row=\"1\" col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:GNRL_AM_SUM\"/><Cell row=\"1\" col=\"6\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:DSCNT_YNGBGS_DAYTM_AM\" mask=\"!###,###,###,###,###\" maskchar=\" \" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell row=\"1\" col=\"7\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:DSCNT_YNGBGS_MORN_NIGHT_AM\" mask=\"!###,###,###,###,###\" maskchar=\" \" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell row=\"1\" col=\"8\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:DSCNT_YNGBGS_CMMTKT_AM\" mask=\"!###,###,###,###,###\" maskchar=\" \" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell row=\"1\" col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DSCNT_YNGBGS_AM_SUM\"/><Cell row=\"1\" col=\"10\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:DSCNT_ETC_DAYTM_AM\" mask=\"!###,###,###,###,###\" maskchar=\" \" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell row=\"1\" col=\"11\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:DSCNT_ETC_MORN_NIGHT_AM\" mask=\"!###,###,###,###,###\" maskchar=\" \" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell row=\"1\" col=\"12\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:DSCNT_ETC_CMMTKT_AM\" mask=\"!###,###,###,###,###\" maskchar=\" \" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell row=\"1\" col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DSCNT_ETC_AM_SUM\"/><Cell row=\"1\" col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AM_SUM\"/></Band><Band id=\"summary\"><Cell rowspan=\"2\" text=\"합계\"/><Cell col=\"1\" style=\"align:center;\" text=\"건수\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('GNRL_DAYTM_CO')\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('GNRL_MORN_NIGHT_CO')\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('GNRL_MT_CMMTKT_CO')\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('GNRL_CO_SUM')\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('DSCNT_YNGBGS_DAYTM_CO')\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('DSCNT_YNGBGS_MORN_NIGHT_CO')\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('DSCNT_YNGBGS_CMMTKT_CO')\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('DSCNT_YNGBGS_CO_SUM')\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('DSCNT_YNGBGS_DAYTM_CO')\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('DSCNT_YNGBGS_MORN_NIGHT_CO')\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('DSCNT_YNGBGS_CMMTKT_CO')\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('DSCNT_ETC_CO_SUM')\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('CO_SUM')\"/><Cell row=\"1\" col=\"1\" style=\"align:center;\" text=\"금액\"/><Cell row=\"1\" col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('GNRL_DAYTM_AM')\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('GNRL_MORN_NIGHT_AM')\"/><Cell row=\"1\" col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('GNRL_MT_CMMTKT_AM')\"/><Cell row=\"1\" col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('GNRL_AM_SUM')\"/><Cell row=\"1\" col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('DSCNT_YNGBGS_DAYTM_AM')\"/><Cell row=\"1\" col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('DSCNT_YNGBGS_MORN_NIGHT_AM')\"/><Cell row=\"1\" col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('DSCNT_YNGBGS_CMMTKT_AM')\"/><Cell row=\"1\" col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('DSCNT_YNGBGS_AM_SUM')\"/><Cell row=\"1\" col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('DSCNT_YNGBGS_DAYTM_AM')\"/><Cell row=\"1\" col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('DSCNT_YNGBGS_MORN_NIGHT_AM')\"/><Cell row=\"1\" col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('DSCNT_YNGBGS_CMMTKT_AM')\"/><Cell row=\"1\" col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('DSCNT_ETC_AM_SUM')\"/><Cell row=\"1\" col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('AM_SUM')\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","0","1031","10",null,null,this);_a.set_taborder("1");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_gnfdList","absolute","0","10",null,"19","796",null,this);_a.set_taborder("2");_a.set_text("화성정궁도장 이용관리 목록");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","29",null,"5","0",null,this);_a.set_taborder("3");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",1031,638,this,function(_b){_b.set_classname("HPM060108_T06");_b.set_titletext("화성정궁도장");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_SEARCH.cmb_rentFcltsSe_s","value","ds_cond","SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","div_SEARCH.cmb_pchrgAt_s","value","ds_cond","CL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item15","div_SEARCH.edt_fcltyNm_s","value","ds_cond","FCLTY_NM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("HPM060108_T06.xfdl","lib::comInclude.xjs");this.addIncludeScript("HPM060108_T06.xfdl","mis_lib::misUtil.xjs");this.registerScript("HPM060108_T06.xfdl",function(){this.HPM060108_T06_onload=function(_a,_b){this.gfn_initForm(this);this.fn_misFormInit(this);};});this.on_initEvent=function(){this.addEventHandler("oninit",this.HPM060108_T06_oninit,this);this.addEventHandler("onload",this.HPM060108_T06_onload,this);this.Static02.addEventHandler("onclick",this.Static02_onclick,this);};this.loadIncludeScript("HPM060108_T06.xfdl");};})();