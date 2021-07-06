﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("FUN020103");this.set_classname("FUN020103");this.set_titletext("차입금리관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_fnncInsttCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CPTAL_KND_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPTAL_KND\" type=\"STRING\" size=\"256\"/><Column id=\"BRRW_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"BRRW_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"FNNC_INSTT\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INRST_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");this.addChild(_a.name,_a);_a=new Dataset("ds_pbncd",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CPTAL_KND\" type=\"STRING\" size=\"256\" sumtext=\"자금종류\"/><Column id=\"PBNCD_NO\" type=\"STRING\" size=\"256\" sumtext=\"공사채번호\"/><Column id=\"FNNC_INSTT_CODE\" type=\"STRING\" size=\"256\" sumtext=\"금융기관명\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\" sumtext=\"사업명\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\" sumtext=\"사업코드\"/><Column id=\"BRRW_AMOUNT\" type=\"BIGDECIMAL\" size=\"15\" sumtext=\"차입금액\"/><Column id=\"BRRW_ACNUT_NM\" type=\"STRING\" size=\"256\" sumtext=\"차입계좌명\"/><Column id=\"INTRT\" type=\"FLOAT\" size=\"256\" sumtext=\"이율\"/><Column id=\"INRST_SE\" type=\"STRING\" size=\"256\" sumtext=\"금리구분코드\"/><Column id=\"INRST_SE_NM\" type=\"STRING\" size=\"256\" sumtext=\"금리구분명\"/><Column id=\"BRRW_DE\" type=\"STRING\" size=\"256\" sumtext=\"차입일\"/><Column id=\"EXPRTN_DE\" type=\"STRING\" size=\"256\" sumtext=\"만기일\"/><Column id=\"RPAY_PD\" type=\"STRING\" size=\"256\" sumtext=\"상환기간\"/><Column id=\"EXPRTN_AT\" type=\"STRING\" size=\"256\" sumtext=\"만기여부\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\" sumtext=\"등록자ID\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\" sumtext=\"등록일시\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\" sumtext=\"수정자ID\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\" sumtext=\"수정일시\"/><Column id=\"CPTAL_KND_NM\" type=\"STRING\" size=\"256\" sumtext=\"자금종류명\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_pbncdInster",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"PBNCD_NO\" type=\"STRING\" size=\"256\" sumtext=\"공사채번호\"/><Column id=\"SN\" type=\"STRING\" size=\"256\" sumtext=\"일련번호\"/><Column id=\"INRST\" type=\"FLOAT\" size=\"256\" sumtext=\"금리\"/><Column id=\"APPLC_DE\" type=\"STRING\" size=\"256\" sumtext=\"적용일자\"/><Column id=\"RM\" type=\"STRING\" size=\"256\" sumtext=\"비고\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\" sumtext=\"등록자ID\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\" sumtext=\"등록일시\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\" sumtext=\"수정자ID\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\" sumtext=\"수정일시\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"PBNCD_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">BRRW_BGNDE</Col><Col id=\"notNull\">Y</Col><Col id=\"from\"/><Col id=\"to\"/><Col id=\"msgId\">검색 시작일</Col></Row><Row><Col id=\"colId\">BRRW_ENDDE</Col><Col id=\"compId\">ds_cond</Col><Col id=\"notNull\">Y</Col><Col id=\"from\"/><Col id=\"to\"/><Col id=\"msgId\">검색 종료일</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">BRRW_BGNDE</Col><Col id=\"PK\">[Undefined]</Col><Col id=\"notNull\"/><Col id=\"type\">[Undefined]</Col><Col id=\"nlength\">[Undefined]</Col><Col id=\"from\">BRRW_BGNDE</Col><Col id=\"to\">BRRW_ENDDE</Col><Col id=\"lengthChkGb\">[Undefined]</Col><Col id=\"msgId\">검색 시작일^검색 종료일</Col><Col id=\"expr\">[Undefined]</Col><Col id=\"func\">[Undefined]</Col></Row><Row><Col id=\"compId\">ds_pbncdInster</Col><Col id=\"colId\">INRST</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">기준금리</Col></Row><Row><Col id=\"compId\">ds_pbncdInster</Col><Col id=\"colId\">APPLC_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">적용일자</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_fun014",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_Cont","absolute","0","93",null,null,"28","0",this);_a.set_taborder("6");_a.set_visible("true");this.addChild(_a.name,_a);_a=new Grid("grd_PBNCD00","absolute",null,"0","376",null,"0","0",this.div_Cont);_a.set_taborder("1");_a.set_binddataset("ds_pbncdInster");_a.set_cellsizingtype("col");_a.set_autofittype("col");_a.set_autosizingtype("row");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"format_copy\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"176\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" text=\"기준금리\"/><Cell col=\"1\" text=\"적용일자\"/><Cell col=\"2\" displaytype=\"normal\" text=\"적요\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"masknumber\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:INRST\" wordwrap=\"char\" mask=\"!###.###%\" editlimitbymask=\"both\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"date\" cssclass=\"ALIGN_LEFT\" text=\"bind:APPLC_DE\" wordwrap=\"char\" calendardisplaynulltype=\"none\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"2\" edittype=\"text\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:RM\" wordwrap=\"char\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/></Band></Format></Formats>");this.div_Cont.addChild(_a.name,_a);_a=new Grid("grd_PBNCD","absolute","0","0",null,null,"386","0",this.div_Cont);_a.set_taborder("0");_a.set_binddataset("ds_pbncd");_a.set_cellsizingtype("col");_a.set_autosizingtype("row");_a._setContents("<Formats><Format id=\"format_copy\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"170\"/><Column size=\"170\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"81\"/><Column size=\"77\"/><Column size=\"59\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" colspan=\"2\" displaytype=\"normal\" text=\"자금종류\"/><Cell col=\"3\" text=\"채권명\"/><Cell col=\"4\" text=\"사업명\"/><Cell col=\"5\" displaytype=\"normal\" text=\"금융기관명\"/><Cell col=\"6\" text=\"금리구분\"/><Cell col=\"7\" text=\"차입금액\"/><Cell col=\"8\" text=\"차입일\"/><Cell col=\"9\" text=\"만기일\"/><Cell col=\"10\" text=\"상환기간(월)\"/><Cell col=\"11\" text=\"현 이율\"/><Cell col=\"12\" text=\"만기여부\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CPTAL_KND\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:CPTAL_KND_NM\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:BRRW_ACNUT_NM\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:BSNS_NM\"/><Cell col=\"5\" displaytype=\"combo\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:FNNC_INSTT_CODE\" combodataset=\"ds_fnncInsttCode\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"6\" displaytype=\"combo\" text=\"bind:INRST_SE\" combodataset=\"ds_fun014\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"7\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BRRW_AMOUNT\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"8\" displaytype=\"date\" cssclass=\"ALIGN_CENTER\" text=\"bind:BRRW_DE\" calendardisplaynulltype=\"none\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"9\" displaytype=\"date\" text=\"bind:EXPRTN_DE\" calendardisplaynulltype=\"none\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"10\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:RPAY_PD\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"11\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:INTRT\" mask=\"999.999%\"/><Cell col=\"12\" displaytype=\"checkbox\" style=\"controlborder:1 none #808080 ;\" cssclass=\"ALIGN_CENTER\" text=\"bind:EXPRTN_AT\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/></Band></Format></Formats>");this.div_Cont.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"59","28",null,this);_a.set_taborder("0");_a.style.set_padding("0 0 0 0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Edit("edt_cptalKndNm","absolute","149","5","184","21",null,null,this.div_search);_a.set_taborder("1");_a.set_readonly("false");_a.set_cssclass("edt_WF_Readonly");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_bsnsNm","absolute","149","32","184","21",null,null,this.div_search);_a.set_taborder("6");_a.set_cssclass("edt_WF_Readonly");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","4","15","58",null,null,this.div_search);_a.set_taborder("17");_a.set_text("15");_a.set_visible("false");_a.style.set_background("aqua");_a.style.set_align("center middle");_a.style.set_font("bold 9 Dotum");_a.style.set_opacity("50");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","9","0","1000","5",null,null,this.div_search);_a.set_taborder("18");_a.set_text("5");_a.set_visible("false");_a.style.set_background("aqua");_a.style.set_align("center middle");_a.style.set_font("bold 9 Dotum");_a.style.set_opacity("50");this.div_search.addChild(_a.name,_a);_a=new Static("Static03","absolute","74","2","5","58",null,null,this.div_search);_a.set_taborder("20");_a.set_text("5");_a.set_visible("false");_a.style.set_background("aqua");_a.style.set_align("center middle");_a.style.set_font("bold 9 Dotum");_a.style.set_opacity("50");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_BRRW_BGNDE","absolute","625","5","100","22",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("3");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static04","absolute","730","5",null,"24","279",null,this.div_search);_a.set_taborder("22");_a.set_text("~");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_BRRW_ENDDE","absolute","743","5","100","22",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("4");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static09","absolute","9","27","1000","5",null,null,this.div_search);_a.set_taborder("27");_a.set_text("5");_a.set_visible("false");_a.style.set_background("aqua");_a.style.set_align("center middle");_a.style.set_font("bold 9 Dotum");_a.style.set_opacity("50");this.div_search.addChild(_a.name,_a);_a=new Static("Static07","absolute","9","53","1000","5",null,null,this.div_search);_a.set_taborder("30");_a.set_text("5");_a.set_visible("false");_a.style.set_background("aqua");_a.style.set_align("center middle");_a.style.set_font("bold 9 Dotum");_a.style.set_opacity("50");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_fnncInsttCode","absolute","412","32","135","22",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_innerdataset("@ds_fnncInsttCode");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_taborder("7");_a.set_displayrowcount("10");_a.set_autoselect("true");_a.set_index("-1");_a=new Static("Static02","absolute","333","4","15","58",null,null,this.div_search);_a.set_taborder("39");_a.set_text("15");_a.set_visible("false");_a.style.set_background("aqua");_a.style.set_align("center middle");_a.style.set_font("bold 9 Dotum");_a.style.set_opacity("50");this.div_search.addChild(_a.name,_a);_a=new Static("Static05","absolute","407","2","5","58",null,null,this.div_search);_a.set_taborder("40");_a.set_text("5");_a.set_visible("false");_a.style.set_background("aqua");_a.style.set_align("center middle");_a.style.set_font("bold 9 Dotum");_a.style.set_opacity("50");this.div_search.addChild(_a.name,_a);_a=new Static("sta_cptalKnd","absolute","15","5","90","21",null,null,this.div_search);_a.set_taborder("43");_a.set_text("자금종류");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_fnncInstt","absolute","348","33","90","21",null,null,this.div_search);_a.set_taborder("44");_a.set_text("금융기관");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_brrwPd","absolute","561","5","90","21",null,null,this.div_search);_a.set_taborder("45");_a.set_text("차입기간");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_exprtnAt","absolute","15","33","90","21",null,null,this.div_search);_a.set_taborder("46");_a.set_text("사업코드");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_CPTAL_KND00","absolute","348","7","90","21",null,null,this.div_search);_a.set_taborder("47");_a.set_text("금리구분");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_bsnsCode","absolute","79","32","69","21",null,null,this.div_search);_a.set_taborder("5");this.div_search.addChild(_a.name,_a);_a=new Button("btn_pbncd","absolute","127","32","21","21",null,null,this.div_search);_a.set_taborder("9");_a.set_cssclass("btn_WF_Search");this.div_search.addChild(_a.name,_a);_a=new Static("Static06","absolute","547","4","15","58",null,null,this.div_search);_a.set_taborder("51");_a.set_text("15");_a.set_visible("false");_a.style.set_background("aqua");_a.style.set_align("center middle");_a.style.set_font("bold 9 Dotum");_a.style.set_opacity("50");this.div_search.addChild(_a.name,_a);_a=new Static("Static08","absolute","620","2","5","58",null,null,this.div_search);_a.set_taborder("52");_a.set_text("5");_a.set_visible("false");_a.style.set_background("aqua");_a.style.set_align("center middle");_a.style.set_font("bold 9 Dotum");_a.style.set_opacity("50");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_inrstSe","absolute","412","5","135","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_text("전체");_a.set_innerdataset("@ds_fun014");_a.set_index("0");_a=new Edit("edt_cptalKnd","absolute","79","5","69","21",null,null,this.div_search);_a.set_taborder("0");_a.set_readonly("false");this.div_search.addChild(_a.name,_a);_a=new Button("btn_cptalKnd","absolute","127","5","21","21",null,null,this.div_search);_a.set_taborder("8");_a.set_cssclass("btn_WF_Search");this.div_search.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","59",null,"10","28",null,this);_a.set_taborder("7");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","69","186","19",null,null,this);_a.set_taborder("1");_a.set_text("공사채 현황");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static03","absolute",null,"69","186","19","218",null,this);_a.set_taborder("2");_a.set_text("금리정보");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","88",null,"5","536",null,this);_a.set_taborder("8");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static20","absolute","523","88","508","5",null,null,this);_a.set_taborder("12");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","645","69","10","500",null,null,this);_a.set_taborder("13");_a.set_text("10");_a.set_visible("false");_a.style.set_background("aqua");_a.style.set_align("center middle");_a.style.set_font("bold 9 Dotum");_a.style.set_opacity("50");this.addChild(_a.name,_a);_a=new Button("btn_Cancel_R","absolute",null,"69","64","19","28",null,this);_a.set_taborder("5");_a.set_text("행취소");_a.set_cssclass("btn_WF_Gridcnl");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Button("btn_Delete_R","absolute",null,"69","64","19","95",null,this);_a.set_taborder("4");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Button("btn_Add_R","absolute",null,"69","64","19","162",null,this);_a.set_taborder("3");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.div_Cont,function(_b){_b.set_taborder("6");_b.set_visible("true");});this.div_Cont.addLayout(_a.name,_a);_a=new Layout("default","",0,59,this.div_search,function(_b){_b.set_taborder("0");_b.style.set_padding("0 0 0 0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("FUN020103");_b.set_titletext("차입금리관리");});this.addLayout(_a.name,_a);_a=new BindItem("item7","div_search.cal_BRRW_BGNDE","value","ds_cond","BRRW_BGNDE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","div_search.cal_BRRW_ENDDE","value","ds_cond","BRRW_ENDDE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item11","div_search.cmb_fnncInsttCode","value","ds_cond","FNNC_INSTT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","div_search.cmb_inrstSe","value","ds_cond","INRST_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_search.edt_cptalKndNm","value","ds_cond","CPTAL_KND_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.edt_cptalKnd","value","ds_cond","CPTAL_KND");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_search.edt_bsnsCode","value","ds_cond","BSNS_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_search.edt_bsnsNm","value","ds_cond","BSNS_NM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("FUN020103.xfdl","lib::comInclude.xjs");this.addIncludeScript("FUN020103.xfdl","mis_lib::misUtil.xjs");this.registerScript("FUN020103.xfdl",function(){this.saveRow= -1;this.checkDs=[this.ds_pbncdInster];this.FUN020103_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.FUN020103_onload=function(_a,_b){this.ds_cond.setColumn(0,"BRRW_BGNDE","20090101");this.ds_cond.setColumn(0,"BRRW_ENDDE",this.dateUtils.today());var _c=[["ds_fun014","FUN014","Y","S"]];var _d=function(_e,_f,_g){this.fnnc_instt_code();};this.gfn_comboLoad(_c,_d);};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(_a,_b){this.ds_pbncd.clearData();if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return false;}this.fn_transaction("selectPbncdList");};this.fn_search_detail=function(){this.ds_pbncdInster.clearData();this.ds_cond01.setColumn(0,"PBNCD_NO",this.ds_pbncd.getColumn(this.ds_pbncd.rowposition,"PBNCD_NO"));this.fn_transaction("selectPbncdInrstList");};this.fn_save=function(){if(Ex.util.isUpdated(this.ds_pbncdInster)){if(!this.gfn_checkValidation_NoUpdChk(this.ds_pbncdInster,this.ds_validation)){return false;}this.saveRow=this.ds_pbncd.rowposition;this.fn_transaction("savePbncdInrstList");}else{this.gfn_message("comm.데이터.변경.없음");}};this.fnnc_instt_code=function(){this.fn_transaction("selectFnncInsttCodeList");};this.fn_transaction=function(_a){switch(_a){case "selectPbncdList":var _b="hsco/mis/fun/FUN020103/selectPbncdList.do";var _c="input1=ds_cond";var _d="ds_pbncd=output1";break;case "selectPbncdInrstList":var _b="hsco/mis/fun/FUN020103/selectPbncdInrstList.do";var _c="input1=ds_cond01";var _d="ds_pbncdInster=output1";break;case "savePbncdInrstList":var _b="hsco/mis/fun/FUN020103/PbncdInrstCUD.do";var _c="input1=ds_pbncdInster:U";var _d="";break;case "selectFnncInsttCodeList":var _b="hsco/mis/fun/FUN000000/selectFnncInsttCodeList.do";var _c="";var _d="ds_fnncInsttCode=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b==0){switch(_a){case "selectPbncdList":if(this.saveRow> -1){this.ds_pbncd.set_rowposition(this.saveRow);this.saveRow= -1;}break;case "selectPbncdInrstList":this.ds_pbncdInster.applyChange();break;case "savePbncdInrstList":this.gfn_message("success.처리.성공");this.fn_search();break;case "selectFnncInsttCodeList":this.ds_fnncInsttCode.insertRow(0);this.ds_fnncInsttCode.setColumn(0,"CODE","");this.ds_fnncInsttCode.setColumn(0,"CODE_NM","전체");this.ds_cond.setColumn(0,"FNNC_INSTT","");this.fn_search();break;}}};this.fn_PopupCallback=function(_a,_b){if(_a=="fun020101_p01"){var _c=new Dataset();var _d=_c.loadXML(_b);if(_d){var _e=_c.getColumn(0,"BSNS_CODE");var _f=_c.getColumn(0,"BSNS_NM");this.ds_cond.setColumn(0,"BSNS_CODE",_e);this.ds_cond.setColumn(0,"BSNS_NM",_f);}}if(_a=="fun020101_p02"){var _g=new Dataset();var _d=_g.loadXML(_b);if(_d){this.ds_cond.setColumn(0,"CPTAL_KND",_g.getColumn(0,"CODE"));this.ds_cond.setColumn(0,"CPTAL_KND_NM",_g.getColumn(0,"CODE_NM"));}}};this.ds_pnbcd_canrowposchange=function(_a,_b){if(Ex.util.isUpdated(this.ds_pbncdInster)){if(this.gfn_message("confirm.변경.취소.여부")){return true;}else{return false;}}else{return true;}};this.ds_pnbcd_onrowposchanged=function(_a,_b){this.fn_search_detail();};this.div_search_btn_pbncd_onclick=function(){var _a={arg_0:this};this.gfn_popup("fun020101_p01",500,465,"",_a,"mis_acc::ACC000000_P04.xfdl","fn_PopupCallback",true);};this.div_search_btn_cptalKnd_onclick=function(_a,_b){var _c={arg_0:this};this.gfn_popup("fun020101_p02",400,450,"자금구분코드조회",_c,"mis_fun::FUN020101_P02.xfdl","fn_PopupCallback");};this.fn_insert=function(_a,_b){if(this.ds_pbncd.getColumn(this.ds_pbncd.rowposition,"INRST_SE")=="1"){this.gfn_message("info.항목.초과.입력불가","고정금리|1건");}else{var _c=this.ds_pbncdInster.addRow();this.ds_pbncdInster.setColumn(_c,"PBNCD_NO",this.ds_pbncd.getColumn(this.ds_pbncd.rowposition,"PBNCD_NO"));this.ds_pbncdInster.setColumn(_c,"APPLC_DE",this.dateUtils.today());}};this.fn_delete=function(_a,_b){if(this.ds_pbncdInster.getRowCount()>1){if(this.gfn_message("confirm.삭제여부")){var _c=this.ds_pbncdInster.rowposition;this.ds_pbncdInster.deleteRow(_c);}}else{this.gfn_message("info.항목.건수.이상","금리정보 1건");}};this.fn_cancel=function(_a,_b){if(this.gfn_message("confirm.취소여부")){this.ds_pbncdInster.reset();this.ds_pbncdInster.applyChange();return;}};this.div_search_edt_cptalKnd_onchanged=function(_a,_b){if(null==_a.text||""==_a.text){this.ds_cond.setColumn(this.ds_cond.rowposition,"CPTAL_KND_NM","");}};this.div_search_edt_bsnsCode_onchanged=function(_a,_b){if(null==_a.text||""==_a.text){this.ds_cond.setColumn(this.ds_cond.rowposition,"BSNS_NM","");}};});this.on_initEvent=function(){this.ds_pbncd.addEventHandler("canrowposchange",this.ds_pnbcd_canrowposchange,this);this.ds_pbncd.addEventHandler("onrowposchanged",this.ds_pnbcd_onrowposchanged,this);this.addEventHandler("onload",this.FUN020103_onload,this);this.addEventHandler("oninit",this.FUN020103_oninit,this);this.div_search.cal_BRRW_BGNDE.addEventHandler("onchanged",this.div_SearchArea_cal_AUDIT_BGNDE_onchanged,this);this.div_search.cal_BRRW_ENDDE.addEventHandler("onchanged",this.div_SearchArea_cal_AUDIT_ENDDE_onchanged,this);this.div_search.edt_bsnsCode.addEventHandler("onchanged",this.div_search_edt_bsnsCode_onchanged,this);this.div_search.btn_pbncd.addEventHandler("onclick",this.div_search_btn_pbncd_onclick,this);this.div_search.edt_cptalKnd.addEventHandler("onchanged",this.div_search_edt_cptalKnd_onchanged,this);this.div_search.btn_cptalKnd.addEventHandler("onclick",this.div_search_btn_cptalKnd_onclick,this);this.btn_Cancel_R.addEventHandler("onclick",this.btn_Cancel_R_onclick,this);this.btn_Delete_R.addEventHandler("onclick",this.btn_Delete_R_onclick,this);this.btn_Add_R.addEventHandler("onclick",this.btn_Add_R_onclick,this);};this.loadIncludeScript("FUN020103.xfdl");};})();