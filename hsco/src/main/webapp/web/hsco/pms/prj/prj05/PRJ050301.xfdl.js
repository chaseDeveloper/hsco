﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("PRJ050301");this.set_classname("PRJ050301");this.set_titletext("PRJ050301_메뉴제거_공사일지관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond_fd",this);_a.set_useclientlayout("1");_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"CNTRCT_NO\" type=\"STRING\" size=\"11\"/><Column id=\"CNTRWK_DE\" type=\"STRING\" size=\"8\"/><Column id=\"WETHR\" type=\"STRING\" size=\"20\"/><Column id=\"TMPRT_TOP\" type=\"BIGDECIMAL\" size=\"3\"/><Column id=\"TMPRT_LWET\" type=\"BIGDECIMAL\" size=\"3\"/><Column id=\"PLAN_RECOVRY\" type=\"BIGDECIMAL\" size=\"8\"/><Column id=\"PLAN_UPDT\" type=\"BIGDECIMAL\" size=\"8\"/><Column id=\"OPRTN\" type=\"BIGDECIMAL\" size=\"8\"/><Column id=\"OPERT_CN\" type=\"STRING\" size=\"1000\"/><Column id=\"SPCABL_MATTER\" type=\"STRING\" size=\"1000\"/><Column id=\"RT_1\" type=\"BIGDECIMAL\" size=\"8\"/><Column id=\"RT_2\" type=\"BIGDECIMAL\" size=\"8\"/><Column id=\"RT_3\" type=\"BIGDECIMAL\" size=\"8\"/><Column id=\"OPERT_CN1\" type=\"STRING\" size=\"1000\"/><Column id=\"OPERT_CN2\" type=\"STRING\" size=\"1000\"/><Column id=\"CNTRCT_NM\" type=\"STRING\" size=\"200\"/><Column id=\"STRWRK_DE\" type=\"STRING\" size=\"8\"/><Column id=\"COMPET_DE\" type=\"STRING\" size=\"8\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_2",this);_a.set_useclientlayout("1");_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"CNTRCT_NO\" type=\"STRING\" size=\"11\"/><Column id=\"CNTRWK_DE\" type=\"STRING\" size=\"8\"/><Column id=\"SN\" type=\"BIGDECIMAL\" size=\"11\"/><Column id=\"JSSFC\" type=\"STRING\" size=\"50\"/><Column id=\"INPT_NMPR\" type=\"BIGDECIMAL\" size=\"6\"/><Column id=\"INPT_NMPR2\" type=\"BIGDECIMAL\" size=\"6\"/><Column id=\"RN\" type=\"INT\" size=\"5\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_3",this);_a.set_useclientlayout("1");_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"CNTRCT_NO\" type=\"STRING\" size=\"11\"/><Column id=\"CNTRWK_DE\" type=\"STRING\" size=\"8\"/><Column id=\"SN\" type=\"BIGDECIMAL\" size=\"11\"/><Column id=\"PRDNM\" type=\"STRING\" size=\"200\"/><Column id=\"STNDRD\" type=\"STRING\" size=\"200\"/><Column id=\"QY\" type=\"BIGDECIMAL\" size=\"12\"/><Column id=\"UNIT_NM\" type=\"STRING\" size=\"15\"/><Column id=\"QY2\" type=\"BIGDECIMAL\" size=\"12\"/><Column id=\"DSGN_QY\" type=\"BIGDECIMAL\" size=\"12\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_4",this);_a.set_useclientlayout("1");_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"CNTRCT_NO\" type=\"STRING\" size=\"11\"/><Column id=\"CNTRWK_DE\" type=\"STRING\" size=\"8\"/><Column id=\"SN\" type=\"BIGDECIMAL\" size=\"11\"/><Column id=\"MLTRM_NM\" type=\"STRING\" size=\"100\"/><Column id=\"STNDRD\" type=\"STRING\" size=\"200\"/><Column id=\"QY\" type=\"BIGDECIMAL\" size=\"12\"/><Column id=\"UNIT_NM\" type=\"STRING\" size=\"15\"/><Column id=\"OPERT_CN\" type=\"STRING\" size=\"1000\"/><Column id=\"QY2\" type=\"BIGDECIMAL\" size=\"12\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond_fd</Col><Col id=\"colId\">BSNS_CODE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">사업코드</Col></Row><Row><Col id=\"compId\">grd_2</Col><Col id=\"colId\">BSNS_CODE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">사업코드</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond1",this);_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"CNTRCT_NO\" type=\"STRING\" size=\"11\"/><Column id=\"CNTRWK_DE\" type=\"STRING\" size=\"8\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"200\"/><Column id=\"CNTRCT_NM\" type=\"STRING\" size=\"200\"/><Column id=\"STRWRK_DE\" type=\"STRING\" size=\"8\"/><Column id=\"COMPET_DE\" type=\"STRING\" size=\"8\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_PRJ010",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_PRJ016",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Static("sta_gud_v01","absolute",null,"0","28",null,"0","0",this);_a.set_text("28");_a.set_visible("0");_a.style.set_background("#1b3cd23c");_a.style.set_align("center");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"57","28",null,this);_a.set_taborder("1");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_1","absolute","15","6","60","20",null,null,this.div_search);_a.set_text("사업코드");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_2","absolute","283","6","65","20",null,null,this.div_search);_a.set_text("계약코드");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_3","absolute","648","6","61","20",null,null,this.div_search);_a.set_text("공사일자");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_4","absolute","283","31","65","20",null,null,this.div_search);_a.set_text("공사기간");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_5","absolute","442","31","20","20",null,null,this.div_search);_a.set_text("~");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_6","absolute","648","31","36","20",null,null,this.div_search);_a.set_text("날씨");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_7","absolute","767","31","75","20",null,null,this.div_search);_a.set_text("기온(최저)");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_8","absolute","896","31","75","20",null,null,this.div_search);_a.set_text("기온(최고)");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_1","absolute","80","5","90","21",null,null,this.div_search);_a.set_taborder("1");this.div_search.addChild(_a.name,_a);_a=new Button("btn_Bsns","absolute","149","5","21","21",null,null,this.div_search);_a.set_taborder("2");_a.set_cssclass("btn_WF_Search");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_2","absolute","80","30","185","21",null,null,this.div_search);_a.set_taborder("3");_a.set_enable("0");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_3","absolute","346","5","95","21",null,null,this.div_search);_a.set_taborder("4");this.div_search.addChild(_a.name,_a);_a=new Button("btn_Ctr","absolute","420","5","21","21",null,null,this.div_search);_a.set_taborder("5");_a.set_cssclass("btn_WF_Search");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_4","absolute","443","5","190","21",null,null,this.div_search);_a.set_taborder("6");_a.set_enable("0");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_5","absolute","716","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("7");_a.set_dateformat("yyyy-MM-dd");_a=new Calendar("cal_6","absolute","346","29","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("8");_a.set_dateformat("yyyy-MM-dd");_a.set_enable("0");_a=new Calendar("cal_7","absolute","462","30","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("9");_a.set_dateformat("yyyy-MM-dd");_a.set_enable("0");_a=new Edit("edt_8","absolute","687","30","64","21",null,null,this.div_search);_a.set_taborder("10");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_9","absolute","843","30","38","21",null,null,this.div_search);_a.set_taborder("11");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_10","absolute","972","30","38","21",null,null,this.div_search);_a.set_taborder("12");this.div_search.addChild(_a.name,_a);_a=new Button("btn_Copy","absolute",null,"6","86","19","18",null,this.div_search);_a.set_taborder("13");_a.set_text("전일자료복사");_a.set_cssclass("btn_WF_Process");this.div_search.addChild(_a.name,_a);_a=new Div("div_info","absolute","0","62",null,"33","28",null,this);_a.set_taborder("2");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_0","absolute","15","5","180","19",null,null,this.div_info);_a.set_text("공정(%)");_a.set_cssclass("sta_WF_Title02");this.div_info.addChild(_a.name,_a);_a=new Static("sta_1","absolute","203","6","74","20",null,null,this.div_info);_a.set_taborder("11");_a.set_text("계획(만회)");_a.set_cssclass("sta_WFSA_Label");this.div_info.addChild(_a.name,_a);_a=new Static("sta_2","absolute","343","6","74","20",null,null,this.div_info);_a.set_taborder("25");_a.set_text("계획(수정)");_a.set_cssclass("sta_WFSA_Label");this.div_info.addChild(_a.name,_a);_a=new Static("sta_3","absolute","480","6","40","20",null,null,this.div_info);_a.set_taborder("16");_a.set_text("실시");_a.set_cssclass("sta_WFSA_Label");this.div_info.addChild(_a.name,_a);_a=new Static("sta_4","absolute","578","6","98","20",null,null,this.div_info);_a.set_taborder("23");_a.set_text("계획누계(만회)");_a.set_cssclass("sta_WFSA_Label");this.div_info.addChild(_a.name,_a);_a=new Static("sta_5","absolute","739","6","98","20",null,null,this.div_info);_a.set_taborder("20");_a.set_text("계획누계(수정)");_a.set_cssclass("sta_WFSA_Label");this.div_info.addChild(_a.name,_a);_a=new Static("sta_6","absolute","901","6","60","20",null,null,this.div_info);_a.set_taborder("22");_a.set_text("실시누계");_a.set_cssclass("sta_WFSA_Label");this.div_info.addChild(_a.name,_a);_a=new MaskEdit("mae_1","absolute","277","5","48","21",null,null,this.div_info);_a.set_taborder("1");_a.set_mask("##0.00");this.div_info.addChild(_a.name,_a);_a=new MaskEdit("mae_2","absolute","417","5","48","21",null,null,this.div_info);_a.set_taborder("2");_a.set_mask("##0.00");this.div_info.addChild(_a.name,_a);_a=new MaskEdit("mae_3","absolute","515","5","48","21",null,null,this.div_info);_a.set_taborder("3");_a.set_mask("##0.00");this.div_info.addChild(_a.name,_a);_a=new MaskEdit("mae_4","absolute","677","5","48","21",null,null,this.div_info);_a.set_taborder("4");_a.set_mask("##0.00");this.div_info.addChild(_a.name,_a);_a=new MaskEdit("mae_5","absolute","838","5","48","21",null,null,this.div_info);_a.set_taborder("5");_a.set_mask("##0.00");this.div_info.addChild(_a.name,_a);_a=new MaskEdit("mae_6","absolute","962","5","48","21",null,null,this.div_info);_a.set_taborder("6");_a.set_mask("##0.00");this.div_info.addChild(_a.name,_a);_a=new Div("div_2","absolute","0","95","220",null,null,"0",this);_a.set_taborder("3");this.addChild(_a.name,_a);_a=new Static("sta_1","absolute","0","10","200","19",null,null,this.div_2);_a.set_text("출역인원현황");_a.set_cssclass("sta_WF_Title02");this.div_2.addChild(_a.name,_a);_a=new Grid("grd_2","absolute","0","29",null,null,"0","0",this.div_2);_a.set_taborder("1");_a.set_binddataset("ds_2");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"70\"/><Column size=\"45\"/><Column size=\"45\"/></Columns><Rows><Row size=\"18\" band=\"head\"/><Row size=\"18\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"직종\"/><Cell col=\"2\" colspan=\"2\" text=\"출역인원\"/><Cell row=\"1\" col=\"2\" text=\"금일\"/><Cell row=\"1\" col=\"3\" text=\"누계\"/></Band><Band id=\"body\"><Cell text=\"bind:SN\"/><Cell col=\"1\" edittype=\"text\" style=\"align:left;padding: ;\" text=\"bind:JSSFC\" editdisplay=\"display\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;padding: ;\" text=\"bind:INPT_NMPR\" mask=\"#,##0\" editdisplay=\"display\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;padding: ;\" text=\"bind:INPT_NMPR2\" mask=\"#,##0\" editdisplay=\"display\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합계\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" expr=\"dataset.getSum('parseInt(INPT_NMPR)||0')\" mask=\"#,##0\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" expr=\"dataset.getSum('parseInt(INPT_NMPR2)||0')\" mask=\"#,##0\"/></Band></Format></Formats>");this.div_2.addChild(_a.name,_a);_a=new Button("btn_21","absolute",null,"5","64","19","67",null,this.div_2);_a.set_taborder("1");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.div_2.addChild(_a.name,_a);_a=new Button("btn_22","absolute",null,"5","64","19","0",null,this.div_2);_a.set_taborder("2");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");this.div_2.addChild(_a.name,_a);_a=new Div("div_work","absolute","230","95",null,null,"28","0",this);_a.set_taborder("12");this.addChild(_a.name,_a);_a=new Div("div_3","absolute","0","0","50%","50%",null,null,this.div_work);_a.set_taborder("3");this.div_work.addChild(_a.name,_a);_a=new Static("sta_1","absolute","0","10","200","19",null,null,this.div_work.div_3);_a.set_text("주요자재입고현황");_a.set_cssclass("sta_WF_Title02");this.div_work.div_3.addChild(_a.name,_a);_a=new Grid("grd_3","absolute","0","29",null,null,"0","0",this.div_work.div_3);_a.set_taborder("1");_a.set_binddataset("ds_3");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"60\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"품명\"/><Cell col=\"2\" text=\"규격\"/><Cell col=\"3\" text=\"단위\"/><Cell col=\"4\" text=\"금일\"/><Cell col=\"5\" text=\"누계\"/><Cell col=\"6\" text=\"설계량\"/></Band><Band id=\"body\"><Cell text=\"bind:SN\"/><Cell col=\"1\" edittype=\"text\" style=\"align:left;padding: ;\" text=\"bind:PRDNM\" editdisplay=\"display\"/><Cell col=\"2\" edittype=\"text\" style=\"align:left;padding: ;\" text=\"bind:STNDRD\" editdisplay=\"display\"/><Cell col=\"3\" edittype=\"text\" text=\"bind:UNIT_NM\" editdisplay=\"display\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;padding:1 1 1 1;\" text=\"bind:QY\" mask=\"#,##0\" editdisplay=\"display\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" text=\"bind:QY2\" mask=\"#,##0\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" text=\"bind:DSGN_QY\" mask=\"#,##0\"/></Band></Format></Formats>");this.div_work.div_3.addChild(_a.name,_a);_a=new Button("btn_31","absolute",null,"5","64","19","67",null,this.div_work.div_3);_a.set_taborder("1");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.div_work.div_3.addChild(_a.name,_a);_a=new Button("btn_32","absolute",null,"5","64","19","0",null,this.div_work.div_3);_a.set_taborder("2");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");this.div_work.div_3.addChild(_a.name,_a);_a=new Div("div_4","absolute","50%","0",null,"50%","0",null,this.div_work);_a.set_taborder("4");this.div_work.addChild(_a.name,_a);_a=new Static("sta_1","absolute","10","10","200","19",null,null,this.div_work.div_4);_a.set_text("중기작업현황");_a.set_cssclass("sta_WF_Title02");this.div_work.div_4.addChild(_a.name,_a);_a=new Grid("grd_4","absolute","10","29",null,null,"0","0",this.div_work.div_4);_a.set_taborder("1");_a.set_binddataset("ds_4");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"60\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"중기명\"/><Cell col=\"2\" text=\"규격\"/><Cell col=\"3\" text=\"단위\"/><Cell col=\"4\" text=\"금일\"/><Cell col=\"5\" text=\"누계\"/><Cell col=\"6\" text=\"작업내용\"/></Band><Band id=\"body\"><Cell text=\"bind:SN\"/><Cell col=\"1\" edittype=\"text\" style=\"padding: ;\" text=\"bind:MLTRM_NM\" editdisplay=\"display\"/><Cell col=\"2\" edittype=\"text\" style=\"align:left;padding: ;\" text=\"bind:STNDRD\" editdisplay=\"display\"/><Cell col=\"3\" edittype=\"text\" style=\"padding: ;\" text=\"bind:UNIT_NM\" editdisplay=\"display\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;padding: ;\" text=\"bind:QY\" mask=\"#,##0\" editdisplay=\"display\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;padding: ;\" text=\"bind:QY2\" mask=\"#,##0\" editdisplay=\"display\"/><Cell col=\"6\" edittype=\"text\" style=\"align:left;padding: ;\" text=\"bind:OPERT_CN\" editdisplay=\"display\"/></Band></Format></Formats>");this.div_work.div_4.addChild(_a.name,_a);_a=new Button("btn_41","absolute",null,"5","64","19","67",null,this.div_work.div_4);_a.set_taborder("1");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.div_work.div_4.addChild(_a.name,_a);_a=new Button("btn_42","absolute",null,"5","64","19","0",null,this.div_work.div_4);_a.set_taborder("2");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");this.div_work.div_4.addChild(_a.name,_a);_a=new Div("div_5","absolute","0","50%",null,"30%","0",null,this.div_work);_a.set_taborder("5");this.div_work.addChild(_a.name,_a);_a=new Static("sta_1","absolute","0","5","200","19",null,null,this.div_work.div_5);_a.set_text("작업사항");_a.set_cssclass("sta_WF_Title02");this.div_work.div_5.addChild(_a.name,_a);_a=new Div("div_1","absolute","0","29","30%",null,null,"0",this.div_work.div_5);_a.set_taborder("15");this.div_work.div_5.addChild(_a.name,_a);_a=new Static("sta_1","absolute","0%","0",null,"21","0%",null,this.div_work.div_5.div_1);_a.set_text("전일 실시사항");_a.set_cssclass("sta_GID_Title");this.div_work.div_5.div_1.addChild(_a.name,_a);_a=new TextArea("txt_1","absolute","0","26",null,null,"0","0",this.div_work.div_5.div_1);_a.set_taborder("1");_a.style.set_padding("5 5 5 5");_a.style.set_align("left top");_a.style.set_font("9 굴림체");_a.set_readonly("1");this.div_work.div_5.div_1.addChild(_a.name,_a);_a=new Div("div_2","absolute","30%","29",null,null,"30%","0",this.div_work.div_5);_a.set_taborder("16");this.div_work.div_5.addChild(_a.name,_a);_a=new Static("sta_1","absolute","10","0",null,"21","10",null,this.div_work.div_5.div_2);_a.set_text("금일 실시사항");_a.set_cssclass("sta_GID_Title");this.div_work.div_5.div_2.addChild(_a.name,_a);_a=new TextArea("txt_2","absolute","10","26",null,null,"10","0",this.div_work.div_5.div_2);_a.set_taborder("1");_a.style.set_padding("5 5 5 5");_a.style.set_align("left top");_a.style.set_font("9 굴림체");this.div_work.div_5.div_2.addChild(_a.name,_a);_a=new Div("div_3","absolute",null,"29","30%",null,"0","0",this.div_work.div_5);_a.set_taborder("17");this.div_work.div_5.addChild(_a.name,_a);_a=new Static("sta_1","absolute","0","0",null,"21","0",null,this.div_work.div_5.div_3);_a.set_text("명일 예정");_a.set_cssclass("sta_GID_Title");this.div_work.div_5.div_3.addChild(_a.name,_a);_a=new TextArea("txt_3","absolute","0","26",null,null,"0","0",this.div_work.div_5.div_3);_a.set_taborder("1");_a.style.set_padding("5 5 5 5");_a.style.set_align("left top");_a.style.set_font("9 굴림체");_a.set_readonly("1");this.div_work.div_5.div_3.addChild(_a.name,_a);_a=new Div("div_6","absolute","0","80%",null,null,"0","0",this.div_work);_a.set_taborder("6");this.div_work.addChild(_a.name,_a);_a=new Static("sta_1","absolute","0","5",null,"22","0",null,this.div_work.div_6);_a.set_text("특기사항");_a.set_cssclass("sta_GID_Title");this.div_work.div_6.addChild(_a.name,_a);_a=new TextArea("txt_4","absolute","0","32",null,null,"0","0",this.div_work.div_6);_a.set_taborder("1");_a.style.set_padding("5 5 5 5");_a.style.set_align("left top");this.div_work.div_6.addChild(_a.name,_a);_a=new Layout("default","",0,57,this.div_search,function(_b){_b.set_taborder("1");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,33,this.div_info,function(_b){_b.set_taborder("2");_b.set_cssclass("div_WFSA_Box");});this.div_info.addLayout(_a.name,_a);_a=new Layout("default","",220,0,this.div_2,function(_b){_b.set_taborder("3");});this.div_2.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work.div_3,function(_b){_b.set_taborder("3");});this.div_work.div_3.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work.div_4,function(_b){_b.set_taborder("4");});this.div_work.div_4.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work.div_5.div_1,function(_b){_b.set_taborder("15");});this.div_work.div_5.div_1.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work.div_5.div_2,function(_b){_b.set_taborder("16");});this.div_work.div_5.div_2.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work.div_5.div_3,function(_b){_b.set_taborder("17");});this.div_work.div_5.div_3.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work.div_5,function(_b){_b.set_taborder("5");});this.div_work.div_5.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work.div_6,function(_b){_b.set_taborder("6");});this.div_work.div_6.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("12");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("PRJ050301");_b.set_titletext("PRJ050301_메뉴제거_공사일지관리");});this.addLayout(_a.name,_a);_a=new BindItem("item01","div_search.edt_1","value","ds_cond1","BSNS_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item02","div_search.edt_2","value","ds_cond1","BSNS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item03","div_search.edt_3","value","ds_cond1","CNTRCT_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item04","div_search.edt_4","value","ds_cond1","CNTRCT_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item05","div_search.cal_5","value","ds_cond1","CNTRWK_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item06","div_search.cal_6","value","ds_cond1","STRWRK_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item07","div_search.cal_7","value","ds_cond1","COMPET_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item08","div_search.edt_8","value","ds_cond_fd","WETHR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item09","div_search.edt_9","value","ds_cond_fd","TMPRT_LWET");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","div_search.edt_10","value","ds_cond_fd","TMPRT_TOP");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item11","div_info.mae_1","value","ds_cond_fd","PLAN_RECOVRY");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item12","div_info.mae_2","value","ds_cond_fd","PLAN_UPDT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item13","div_info.mae_3","value","ds_cond_fd","OPRTN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","div_info.mae_4","value","ds_cond_fd","RT_1");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item15","div_info.mae_5","value","ds_cond_fd","RT_2");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item16","div_info.mae_6","value","ds_cond_fd","RT_3");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item21","div_work.div_5.div_1.txt_1","value","ds_cond_fd","OPERT_CN1");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item22","div_work.div_5.div_2.txt_2","value","ds_cond_fd","OPERT_CN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item23","div_work.div_5.div_3.txt_3","value","ds_cond_fd","OPERT_CN2");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item24","div_work.div_6.txt_4","value","ds_cond_fd","SPCABL_MATTER");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("PRJ050301.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("PRJ050301.xfdl",function(){this.g_initCols='BSNS_CODE'+',BSNS_NM'+',CNTRCT_NO'+',CNTRCT_NM'+',STRWRK_DE'+',COMPET_DE'+',CNTRWK_DE';this.PRJ050301_oninit=function(_a,_b){this.fn_init();this.fn_init_form();this.fn_init_dataset();this.form_id=application.gv_curFormId+'_';};this.PRJ050301_onload=function(_a,_b){this.fn_loadCombo();};this.fn_Profile=function(_a,_b){return;var _c;var _d=this.form_id;var _e=this.g_initCols.split(',');var _f=_a.rowposition;var _g;var _h=function(){_c=application.getPrivateProfile(_d+_e[i]);_a.setColumn(_f,_e[i],_c);if(i==0){if(!_c){return 1;}_g=_c;}};var _i=function(){_c=_a.getColumn(_f,_e[i]);application.setPrivateProfile(_d+_e[i],_c);};var _j=_b?_i:_h;for(var _k=0;_k<_e.length;_k++ ){if(_j()){break;}}return _g;};this.fn_init_form=function(){};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);this.checkDs.push(this.ds_cond_fd);this.checkDs.push(this.ds_2);this.checkDs.push(this.ds_3);this.checkDs.push(this.ds_4);};this.fn_loadCombo=function(){var _a=[['ds_PRJ010','PRJ010',1,''],['ds_PRJ016','PRJ016',1,'']];var _b=function(_c,_d,_e){var _f=this.gfn_today();this.div_search.cal_5.set_value(_f);var _g=this.fn_Profile(this.ds_cond1,0);if(_g){this.fn_search();}};this.gfn_comboLoad(_a,_b);};this.fn_search=function(){if(!this.gfn_checkValidation(this.div_search,this.ds_validation)){return;}this.fn_transaction("rList");};this.fn_save=function(){if(this.gfn_message("confirm.저장.여부")){this.fn_transaction("save");}};this.fn_transaction=function(_a){if(this.ds_cond1.rowcount<1){return;}var _b=this.ds_cond_fd;var _c="BSNS_CODE=BSNS_CODE,"+"CNTRCT_NO=CNTRCT_NO,"+"CNTRWK_DE=CNTRWK_DE,";;var _d="hsco/pms/prj/PRJ050301/"+_a+".do";var _e="input1=ds_cond1";var _f="";switch(_a){case "rList":_b=this.ds_cond1;_f="ds_cond_fd=output1";_f+=" ds_2=output2";_f+=" ds_3=output3";_f+=" ds_4=output4";break;case "save":_b=null;_e="input1=ds_cond_fd:U";_e+=" input2=ds_2:U";_e+=" input3=ds_3:U";_e+=" input4=ds_4:U";break;case "copy":ds=this.ds_cond_copy;_b=this.ds_cond1;_e="input1=ds_cond1";break;}if(_b){this.ds_cond1.copyRow(0,_b,_b.rowposition,_c);}switch(_a){case "rList":this.ds_cond_fd.clearData();this.ds_2.clearData();this.ds_3.clearData();this.ds_4.clearData();break;}Ex.core.tran(this,_a,_d,_e,_f);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){return this.gfn_callback_message(_a,_b,_c);}switch(_a){case "rList":break;case "save":this.fn_search();break;case "copy":this.fn_search();break;}};this.fn_print=function(){var _a=this.ds_cond_fd;if(_a.rowcount<1){return;}var _a=new Dataset();_a.copyData(this.ds_cond_fd);_a.copyRow(0,this.ds_cond1,0,'CNTRCT_NM=CNTRCT_NM,'+'STRWRK_DE=STRWRK_DE,'+'COMPET_DE=COMPET_DE,');var _b='일일작업보고';var _c='/pms/prj/PRJ050301_1.jrf';var _d=new this.cf_Opts();_d.setToolbar(false);_d.setScale(100);_d.setReportPath(_c);_d.setSaveFilename(_b);_d.setLocalDs(["DS_1",_a]);_d.setLocalDs(["DS_2",this.ds_2]);_d.setLocalDs(["DS_3",this.ds_3]);_d.setLocalDs(["DS_4",this.ds_4]);var _e={arg_0:this,opts:_d};var _f=function(_g,_h){this.debug('this.fn_print() - fn_cb');};this.gfn_popup("prjReportPouup",884,735,_b,_e,"common::frmReportPopup.xfdl",_f,1);};this.fn_insert=function(_a){this.fn_transaction("copy");};this.fn_delete=function(_a){};this.fn_insertDS=function(_a){var _b;var _c;var _d="BSNS_CODE=BSNS_CODE,"+"CNTRCT_NO=CNTRCT_NO,"+"CNTRWK_DE=CNTRWK_DE,";if(_a==this.ds_cond_fd){_b=_a.rowposition;}else{_b=_a.addRow();}switch(_a){case this.ds_cond_fd:_c=this.ds_cond1;break;case this.ds_2:case this.ds_3:case this.ds_4:_a.setColumn(_b,"SN",_a.getMax("parseInt(SN)||0")+1);_c=this.ds_cond_fd;break;}_a.copyRow(_b,_c,_c.rowposition,_d);};this.fn_deleteDS=function(_a){if(_a==this.ds_cond_fd){return;}_a.deleteRow(_a.rowposition);};this.ds_onrowposchanged=function(_a,_b){return;if(_a.rowcount<1){return;}switch(_a){case this.ds_cond_fd:break;}};this.btn_BsnsPopup_onclick=function(_a,_b){this.fn_PopupBsns();};this.fn_PopupBsns=function(){var _a=function(_c,_d){if(!_d){return;}var _e=new Dataset();nRowCnt=_e.loadXML(_d);if(nRowCnt<1){return;}var _f=this.ds_cond1;_f.clearData();var _g=_f.addRow();_f.copyRow(_g,_e,0,'BSNS_CODE=BSNS_CODE,'+'BSNS_NM=BSNS_NM,'+'CNTRCT_NO=CNTRCT_NO,'+'CNTRCT_NM=CNTRCT_NM,');this.fn_Profile(_f,1);this.ds_cond_fd.clearData();this.ds_2.clearData();this.ds_3.clearData();this.ds_4.clearData();};var _b={BSNS_GB:1};this.gfn_popup('popBsns',500,500,'',_b,"pms_prj::popBsns.xfdl",_a,1);};this.btn_CtrPopup_onclick=function(_a,_b){this.fn_PopupCtr();};this.fn_PopupCtr=function(){var _a=function(_c,_d){if(!_d){return;}var _e=new Dataset();nRowCnt=_e.loadXML(_d);if(nRowCnt<1){return;}var _f=this.ds_cond1;var _g=_f.rowposition;if(_f.rowcount<1){_g=_f.addRow();}_f.copyRow(_g,_e,0,'BSNS_CODE=BSNS_CODE,'+'CNTRCT_NO=CNTRCT_NO,'+'CNTRCT_NM=CNTRCT_NM,'+'STRWRK_DE=STRWRK_DE,'+'COMPET_DE=COMPET_DE,');var _h=this.gfn_today();_f.setColumn(_g,"CNTRWK_DE",_h);this.fn_Profile(_f,1);this.fn_search();};var _b={BSNS_CODE:this.div_search.edt_1.value,BSNS_NM:this.div_search.edt_2.value};this.gfn_popup('popCtrDtl',800,500,'',_b,"pms_prj::popCtrDtl.xfdl",_a,1);};this.fn_copy=function(){this.fn_transaction("copy");};this.btn_21_onclick=function(_a,_b){this.fn_insertDS(this.ds_2);};this.btn_22_onclick=function(_a,_b){this.fn_deleteDS(this.ds_2);};this.btn_31_onclick=function(_a,_b){this.fn_insertDS(this.ds_3);};this.btn_32_onclick=function(_a,_b){this.fn_deleteDS(this.ds_3);};this.btn_41_onclick=function(_a,_b){this.fn_insertDS(this.ds_4);};this.btn_42_onclick=function(_a,_b){this.fn_deleteDS(this.ds_4);};this.cal_5_onchanged=function(_a,_b){var _c=this.ds_cond1;var _d=_c.rowposition;_c.setColumn(_d,"CNTRWK_DE",_b.postvalue);this.fn_Profile(_c,1);};});this.on_initEvent=function(){this.ds_cond_fd.addEventHandler("onrowposchanged",this.ds_onrowposchanged,this);this.addEventHandler("onload",this.PRJ050301_onload,this);this.addEventHandler("oninit",this.PRJ050301_oninit,this);this.div_search.btn_Bsns.addEventHandler("onclick",this.btn_BsnsPopup_onclick,this);this.div_search.btn_Ctr.addEventHandler("onclick",this.btn_CtrPopup_onclick,this);this.div_search.cal_5.addEventHandler("onchanged",this.cal_5_onchanged,this);this.div_search.btn_Copy.addEventHandler("onclick",this.fn_copy,this);this.div_2.btn_21.addEventHandler("onclick",this.btn_21_onclick,this);this.div_2.btn_22.addEventHandler("onclick",this.btn_22_onclick,this);this.div_work.div_3.btn_31.addEventHandler("onclick",this.btn_31_onclick,this);this.div_work.div_3.btn_32.addEventHandler("onclick",this.btn_32_onclick,this);this.div_work.div_4.btn_41.addEventHandler("onclick",this.btn_41_onclick,this);this.div_work.div_4.btn_42.addEventHandler("onclick",this.btn_42_onclick,this);};this.loadIncludeScript("PRJ050301.xfdl");};})();