﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("PRJ020601");this.set_classname("PRJ020601");this.set_titletext("PRJ020601_사업별수지분석");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_0",this);_a.set_useclientlayout("1");_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"BSNS_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"AMT1\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AMT2\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AMT3\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AMT4\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AMT_D1\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AMT_D2\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AMT_D3\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AMT_D4\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AMT_D5\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo><Rows><Row><Col id=\"AMT_D5\">-3</Col><Col id=\"AMT_D4\">4</Col><Col id=\"BSNS_YEAR\">2010</Col><Col id=\"AMT_D3\">1</Col><Col id=\"AMT1\">123</Col><Col id=\"AMT_D2\">330</Col><Col id=\"AMT2\">456</Col><Col id=\"AMT_D1\">333</Col><Col id=\"AMT3\">122</Col><Col id=\"AMT4\">452</Col><Col id=\"ODR\">26</Col></Row><Row><Col id=\"AMT_D5\">-4</Col><Col id=\"AMT_D4\">2</Col><Col id=\"BSNS_YEAR\">2011</Col><Col id=\"AMT_D3\">-2</Col><Col id=\"AMT1\">125</Col><Col id=\"AMT_D2\">330</Col><Col id=\"AMT2\">459</Col><Col id=\"AMT_D1\">334</Col><Col id=\"AMT3\">127</Col><Col id=\"AMT4\">457</Col><Col id=\"ODR\">28</Col></Row><Row><Col id=\"AMT_D5\">-4</Col><Col id=\"AMT_D4\">2</Col><Col id=\"BSNS_YEAR\">2012</Col><Col id=\"AMT_D3\">-2</Col><Col id=\"AMT1\">125</Col><Col id=\"AMT_D2\">330</Col><Col id=\"AMT2\">459</Col><Col id=\"AMT_D1\">334</Col><Col id=\"AMT3\">127</Col><Col id=\"AMT4\">457</Col><Col id=\"ODR\">28</Col></Row><Row><Col id=\"AMT_D5\">-4</Col><Col id=\"AMT_D4\">2</Col><Col id=\"BSNS_YEAR\">2013</Col><Col id=\"AMT_D3\">-2</Col><Col id=\"AMT1\">125</Col><Col id=\"AMT_D2\">330</Col><Col id=\"AMT2\">459</Col><Col id=\"AMT_D1\">334</Col><Col id=\"AMT3\">127</Col><Col id=\"AMT4\">457</Col><Col id=\"ODR\">28</Col></Row><Row><Col id=\"AMT_D5\">-4</Col><Col id=\"AMT_D4\">2</Col><Col id=\"BSNS_YEAR\">2014</Col><Col id=\"AMT_D3\">-2</Col><Col id=\"AMT1\">125</Col><Col id=\"AMT_D2\">330</Col><Col id=\"AMT2\">459</Col><Col id=\"AMT_D1\">334</Col><Col id=\"AMT3\">127</Col><Col id=\"AMT4\">457</Col><Col id=\"ODR\">28</Col></Row><Row><Col id=\"AMT_D5\">-4</Col><Col id=\"AMT_D4\">2</Col><Col id=\"BSNS_YEAR\">2015</Col><Col id=\"AMT_D3\">-2</Col><Col id=\"AMT1\">125</Col><Col id=\"AMT_D2\">330</Col><Col id=\"AMT2\">459</Col><Col id=\"AMT_D1\">334</Col><Col id=\"AMT3\">127</Col><Col id=\"AMT4\">457</Col><Col id=\"ODR\">28</Col></Row><Row><Col id=\"AMT_D5\">-4</Col><Col id=\"AMT_D4\">2</Col><Col id=\"BSNS_YEAR\">2016</Col><Col id=\"AMT_D3\">-2</Col><Col id=\"AMT1\">125</Col><Col id=\"AMT_D2\">330</Col><Col id=\"AMT2\">459</Col><Col id=\"AMT_D1\">334</Col><Col id=\"AMT3\">127</Col><Col id=\"AMT4\">457</Col><Col id=\"ODR\">28</Col></Row><Row><Col id=\"AMT_D5\">-4</Col><Col id=\"AMT_D4\">2</Col><Col id=\"BSNS_YEAR\">2017</Col><Col id=\"AMT_D3\">-2</Col><Col id=\"AMT1\">125</Col><Col id=\"AMT_D2\">330</Col><Col id=\"AMT2\">459</Col><Col id=\"AMT_D1\">334</Col><Col id=\"AMT3\">127</Col><Col id=\"AMT4\">457</Col><Col id=\"ODR\">28</Col></Row><Row><Col id=\"AMT_D5\">-4</Col><Col id=\"AMT_D4\">2</Col><Col id=\"BSNS_YEAR\">2018</Col><Col id=\"AMT_D3\">-2</Col><Col id=\"AMT1\">125</Col><Col id=\"AMT_D2\">330</Col><Col id=\"AMT2\">459</Col><Col id=\"AMT_D1\">334</Col><Col id=\"AMT3\">127</Col><Col id=\"AMT4\">457</Col><Col id=\"ODR\">28</Col></Row><Row><Col id=\"AMT_D5\">-4</Col><Col id=\"AMT_D4\">2</Col><Col id=\"BSNS_YEAR\">2019</Col><Col id=\"AMT_D3\">-2</Col><Col id=\"AMT1\">125</Col><Col id=\"AMT_D2\">330</Col><Col id=\"AMT2\">459</Col><Col id=\"AMT_D1\">334</Col><Col id=\"AMT3\">127</Col><Col id=\"AMT4\">457</Col><Col id=\"ODR\">28</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_1",this);_a.set_useclientlayout("1");_a.getSetter("keystring2").set("G:GB1,GB2");_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"16\"/><Column id=\"APPLC_YEAR\" type=\"STRING\" size=\"16\"/><Column id=\"GB\" type=\"STRING\" size=\"2\"/><Column id=\"GB1\" type=\"STRING\" size=\"2\"/><Column id=\"GB2\" type=\"STRING\" size=\"2\"/><Column id=\"CODE\" type=\"STRING\" size=\"16\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"100\"/><Column id=\"RT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"RM\" type=\"STRING\" size=\"100\"/><Column id=\"AMT_S\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AMT0\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AMT1\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AMT2\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AMT3\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AMT4\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AMT5\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AMT6\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AMT7\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AMT8\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AMT9\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo><Rows><Row><Col id=\"BSNS_CODE\">A0011</Col><Col id=\"APPLC_YEAR\">2015</Col><Col id=\"GB1\">1</Col><Col id=\"CODE_NM\">계정코드</Col><Col id=\"AMT_S\">111</Col><Col id=\"AMT0\">222</Col><Col id=\"AMT1\">9999999999</Col><Col id=\"AMT2\">9999999999</Col><Col id=\"RT\">123.45</Col><Col id=\"RM\">Remark</Col><Col id=\"GB2\">1</Col></Row><Row><Col id=\"BSNS_CODE\">A0011</Col><Col id=\"APPLC_YEAR\">2015</Col><Col id=\"GB1\">1</Col><Col id=\"CODE_NM\">계정코드2</Col><Col id=\"AMT_S\">111</Col><Col id=\"AMT0\">222</Col><Col id=\"AMT1\">9999999999</Col><Col id=\"AMT2\">9999999999</Col><Col id=\"RT\">123.45</Col><Col id=\"RM\">Remark</Col><Col id=\"GB2\">1</Col></Row><Row><Col id=\"BSNS_CODE\">A0011</Col><Col id=\"APPLC_YEAR\">2015</Col><Col id=\"GB1\">1</Col><Col id=\"CODE_NM\">계정코드2</Col><Col id=\"AMT_S\">111</Col><Col id=\"AMT0\">222</Col><Col id=\"AMT1\">9999999999</Col><Col id=\"AMT2\">9999999999</Col><Col id=\"RT\">123.45</Col><Col id=\"RM\">Remark</Col><Col id=\"GB2\">1</Col></Row><Row><Col id=\"BSNS_CODE\">A0011</Col><Col id=\"APPLC_YEAR\">2015</Col><Col id=\"GB1\">1</Col><Col id=\"CODE_NM\">계정코드2</Col><Col id=\"AMT_S\">111</Col><Col id=\"AMT0\">222</Col><Col id=\"AMT1\">9999999999</Col><Col id=\"AMT2\">9999999999</Col><Col id=\"RT\">123.45</Col><Col id=\"RM\">Remark</Col><Col id=\"GB2\">1</Col></Row><Row><Col id=\"BSNS_CODE\">A0011</Col><Col id=\"APPLC_YEAR\">2015</Col><Col id=\"GB1\">1</Col><Col id=\"CODE_NM\">계정코드2</Col><Col id=\"AMT_S\">111</Col><Col id=\"AMT0\">222</Col><Col id=\"AMT1\">9999999999</Col><Col id=\"AMT2\">9999999999</Col><Col id=\"RT\">123.45</Col><Col id=\"RM\">Remark</Col><Col id=\"GB2\">1</Col></Row><Row><Col id=\"BSNS_CODE\">A0011</Col><Col id=\"APPLC_YEAR\">2015</Col><Col id=\"GB1\">1</Col><Col id=\"CODE_NM\">계정코드2</Col><Col id=\"AMT_S\">111</Col><Col id=\"AMT0\">222</Col><Col id=\"AMT1\">9999999999</Col><Col id=\"AMT2\">9999999999</Col><Col id=\"RT\">123.45</Col><Col id=\"RM\">Remark</Col><Col id=\"GB2\">1</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_2",this);_a.set_useclientlayout("1");_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"BSNS_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"SUPLY_TY_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"AMT1\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AMT2\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AMT_D\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"HOUSE_NM\" type=\"STRING\" size=\"100\"/><Column id=\"SUPLY_TY_CODE_NM\" type=\"STRING\" size=\"100\"/></ColumnInfo><Rows><Row><Col id=\"BSNS_CODE\">A0011</Col><Col id=\"APPLC_YEAR\">2015</Col><Col id=\"GB1\">01</Col><Col id=\"HOUSE_NM\">계정코드</Col><Col id=\"AMT0\">9999999999</Col><Col id=\"AMT1\">9999999999</Col><Col id=\"AMT2\">9999999999</Col><Col id=\"RT\">123.45</Col><Col id=\"RM\">Remark</Col></Row><Row><Col id=\"BSNS_CODE\">A0011</Col><Col id=\"APPLC_YEAR\">2015</Col><Col id=\"GB1\">01</Col><Col id=\"HOUSE_NM\">계정코드2</Col><Col id=\"AMT\">9999999999</Col><Col id=\"RT\">123.45</Col><Col id=\"RM\">Remark</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_3",this);_a.set_useclientlayout("1");_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"BSNS_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"STD_PRMPC_CODE\" type=\"STRING\" size=\"8\"/><Column id=\"AMT1\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AMT2\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AMT_D\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CL_SE\" type=\"STRING\" size=\"4\"/><Column id=\"LCLAS_NM\" type=\"STRING\" size=\"100\"/><Column id=\"MLSFC_NM\" type=\"STRING\" size=\"100\"/><Column id=\"SCLAS_NM\" type=\"STRING\" size=\"100\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">cal_4</Col><Col id=\"msgId\">사업기간</Col><Col id=\"to\">cal_5</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond1",this);_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"BSNS_TY\" type=\"STRING\" size=\"3\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"200\"/><Column id=\"STRWRK_DE\" type=\"STRING\" size=\"8\"/><Column id=\"COMPET_DE\" type=\"STRING\" size=\"8\"/><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"DATA_SRC\" type=\"STRING\" size=\"3\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_PRJ012",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Static("sta_gud_v01","absolute",null,"0","28",null,"0","0",this);_a.set_text("28");_a.set_visible("0");_a.style.set_background("#1b3cd23c");_a.style.set_align("center");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("1");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_1","absolute","15","6","60","20",null,null,this.div_search);_a.set_text("사업코드");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_2","absolute","183","6","50","20",null,null,this.div_search);_a.set_text("사업명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_3","absolute","405","7","64","20",null,null,this.div_search);_a.set_text("사업유형");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_4","absolute","616","7","61","20",null,null,this.div_search);_a.set_text("사업기간");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_5","absolute","775","7","20","20",null,null,this.div_search);_a.set_text("~");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_1","absolute","78","5","90","21",null,null,this.div_search);_a.set_taborder("1");this.div_search.addChild(_a.name,_a);_a=new Button("btn_Bsns","absolute","149","5","21","21",null,null,this.div_search);_a.set_taborder("2");_a.set_cssclass("btn_WF_Search");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_2","absolute","232","5","158","21",null,null,this.div_search);_a.set_taborder("3");_a.set_enable("0");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_3","absolute","466","5","130","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("4");_a.set_innerdataset("@ds_PRJ012");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_readonly("1");_a=new Calendar("cal_4","absolute","679","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("5");_a.set_dateformat("yyyy-MM-dd");_a.set_readonly("1");_a=new Calendar("cal_5","absolute","795","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("6");_a.set_dateformat("yyyy-MM-dd");_a.set_readonly("1");_a=new Button("btn_make","absolute",null,"5","40","21","5",null,this.div_search);_a.set_taborder("90");_a.set_text("생성");_a.set_cssclass("btn_WF_Process");this.div_search.addChild(_a.name,_a);_a=new CheckBox("chkSrc","absolute",null,"5","50","21","50",null,this.div_search);_a.set_taborder("99");_a.set_text("원장");_a.set_truevalue("1");_a.set_falsevalue("0");_a.set_visible("0");this.div_search.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","33",null,null,"28","0",this);_a.set_taborder("2");this.addChild(_a.name,_a);_a=new Div("div_1","absolute","0","0",null,"260","0",null,this.div_work);_a.set_taborder("1");this.div_work.addChild(_a.name,_a);_a=new Static("sta_1","absolute","0","10","200","19",null,null,this.div_work.div_1);_a.set_text("");_a.set_cssclass("sta_WF_Title02");_a.set_visible("0");this.div_work.div_1.addChild(_a.name,_a);_a=new Grid("grd_1","absolute","0","5",null,null,"0","0",this.div_work.div_1);_a.set_taborder("1");_a.set_binddataset("ds_1");_a.getSetter("autofittype2").set("col");_a.getSetter("visible2").set("0");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"18\" band=\"head\"/><Row size=\"18\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"구분\" colspan=\"2\"/><Cell rowspan=\"2\" col=\"2\" text=\"합계\"/><Cell col=\"3\" text=\"사업년도\" colspan=\"3\"/><Cell row=\"1\" col=\"3\" text=\"2000\"/><Cell row=\"1\" col=\"4\" text=\"2001\"/><Cell row=\"1\" col=\"5\" text=\"2002\"/><Cell row=\"1\" col=\"6\" text=\"2003\"/><Cell row=\"1\" col=\"7\" text=\"2004\"/><Cell row=\"1\" col=\"8\" text=\"2005\"/><Cell row=\"1\" col=\"9\" text=\"2006\"/><Cell row=\"1\" col=\"10\" text=\"2007\"/><Cell row=\"1\" col=\"11\" text=\"2008\"/><Cell row=\"1\" col=\"12\" text=\"2009\"/></Band><Band id=\"body\"><Cell text=\"bind:GB1\" celltype=\"head\" suppress=\"1\" suppressalign=\"middle,over\"/><Cell col=\"1\" text=\"bind:GB2\" celltype=\"head\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:AMT_S\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:AMT0\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:AMT1\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:AMT2\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:AMT3\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:AMT4\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:AMT5\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:AMT6\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:AMT7\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:AMT8\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:AMT9\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"수지차액(계획)\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.fn_getCustSum(16,26,'AMT_S')\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.fn_getCustSum(16,26,'AMT0')\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.fn_getCustSum(16,26,'AMT1')\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.fn_getCustSum(16,26,'AMT2')\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.fn_getCustSum(16,26,'AMT3')\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.fn_getCustSum(16,26,'AMT4')\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.fn_getCustSum(16,26,'AMT5')\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.fn_getCustSum(16,26,'AMT6')\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.fn_getCustSum(16,26,'AMT7')\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.fn_getCustSum(16,26,'AMT8')\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.fn_getCustSum(16,26,'AMT9')\"/><Cell row=\"1\" colspan=\"2\" text=\"수지차액(실적)\"/><Cell row=\"1\" col=\"2\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.fn_getCustSum(17,27,'AMT_S')\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.fn_getCustSum(17,27,'AMT0')\"/><Cell row=\"1\" col=\"4\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.fn_getCustSum(17,27,'AMT1')\"/><Cell row=\"1\" col=\"5\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.fn_getCustSum(17,27,'AMT2')\"/><Cell row=\"1\" col=\"6\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.fn_getCustSum(17,27,'AMT3')\"/><Cell row=\"1\" col=\"7\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.fn_getCustSum(17,27,'AMT4')\"/><Cell row=\"1\" col=\"8\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.fn_getCustSum(17,27,'AMT5')\"/><Cell row=\"1\" col=\"9\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.fn_getCustSum(17,27,'AMT6')\"/><Cell row=\"1\" col=\"10\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.fn_getCustSum(17,27,'AMT7')\"/><Cell row=\"1\" col=\"11\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.fn_getCustSum(17,27,'AMT8')\"/><Cell row=\"1\" col=\"12\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.fn_getCustSum(17,27,'AMT9')\"/><Cell row=\"2\" colspan=\"2\" text=\"계획대비실적\"/><Cell row=\"2\" col=\"2\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.fn_getCustSum(18,28,'AMT_S')\"/><Cell row=\"2\" col=\"3\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.fn_getCustSum(18,28,'AMT0')\"/><Cell row=\"2\" col=\"4\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.fn_getCustSum(18,28,'AMT1')\"/><Cell row=\"2\" col=\"5\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.fn_getCustSum(18,28,'AMT2')\"/><Cell row=\"2\" col=\"6\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.fn_getCustSum(18,28,'AMT3')\"/><Cell row=\"2\" col=\"7\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.fn_getCustSum(18,28,'AMT4')\"/><Cell row=\"2\" col=\"8\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.fn_getCustSum(18,28,'AMT5')\"/><Cell row=\"2\" col=\"9\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.fn_getCustSum(18,28,'AMT6')\"/><Cell row=\"2\" col=\"10\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.fn_getCustSum(18,28,'AMT7')\"/><Cell row=\"2\" col=\"11\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.fn_getCustSum(18,28,'AMT8')\"/><Cell row=\"2\" col=\"12\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.fn_getCustSum(18,28,'AMT9')\"/></Band></Format></Formats>");this.div_work.div_1.addChild(_a.name,_a);_a=new Div("div_2","absolute","0","260",null,"220","0",null,this.div_work);_a.set_taborder("2");this.div_work.addChild(_a.name,_a);_a=new Static("sta_2","absolute","0","10","200","19",null,null,this.div_work.div_2);_a.set_text("");_a.set_cssclass("sta_WF_Title02");_a.set_visible("0");this.div_work.div_2.addChild(_a.name,_a);_a=new Grid("grd_2","absolute","0","5",null,null,"0","0",this.div_work.div_2);_a.set_taborder("1");_a.set_binddataset("ds_2");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"58\"/><Column size=\"71\"/><Column size=\"93\"/><Column size=\"83\"/><Column size=\"97\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"18\" band=\"head\"/><Row size=\"18\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"사업년도\"/><Cell col=\"1\" rowspan=\"2\" text=\"토지(주택)&#13;&#10;코드\"/><Cell col=\"2\" rowspan=\"2\" text=\"토지(주택)명\"/><Cell col=\"3\" rowspan=\"2\" text=\"용도(공급)&#13;&#10;코드\"/><Cell col=\"4\" rowspan=\"2\" text=\"용도명\"/><Cell col=\"5\" colspan=\"3\" text=\"수입부문(천원)\"/><Cell row=\"1\" col=\"5\" text=\"계획금액\"/><Cell row=\"1\" col=\"6\" text=\"실적금액\"/><Cell row=\"1\" col=\"7\" text=\"차액\"/></Band><Band id=\"body\"><Cell text=\"bind:BSNS_YEAR\"/><Cell col=\"1\" text=\"bind:HOUSE_CODE\"/><Cell col=\"2\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:HOUSE_NM\"/><Cell col=\"3\" text=\"bind:SUPLY_TY_CODE\"/><Cell col=\"4\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:SUPLY_TY_CODE_NM\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:AMT1\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:AMT2\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:AMT_D\"/></Band><Band id=\"summary\"><Cell colspan=\"5\" text=\"합계\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(AMT1)||0')\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(AMT2)||0')\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(AMT_D)||0')\"/></Band></Format></Formats>");this.div_work.div_2.addChild(_a.name,_a);_a=new Div("div_3","absolute","0","480",null,null,"0","0",this.div_work);_a.set_taborder("3");this.div_work.addChild(_a.name,_a);_a=new Static("sta_3","absolute","0","10","200","19",null,null,this.div_work.div_3);_a.set_text("");_a.set_cssclass("sta_WF_Title02");_a.set_visible("0");this.div_work.div_3.addChild(_a.name,_a);_a=new Grid("grd_3","absolute","0","5",null,null,"0","0",this.div_work.div_3);_a.set_taborder("1");_a.set_binddataset("ds_3");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"58\"/><Column size=\"56\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"18\" band=\"head\"/><Row size=\"18\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"사업년도\"/><Cell col=\"1\" rowspan=\"2\" text=\"원가항목&#13;&#10;코드\"/><Cell col=\"2\" rowspan=\"2\" text=\"원가항목명(대)\"/><Cell col=\"3\" rowspan=\"2\" text=\"원가항목명(중)\"/><Cell col=\"4\" rowspan=\"2\" text=\"원가항목명(소)\"/><Cell col=\"5\" colspan=\"3\" text=\"지출부문(천원)\"/><Cell row=\"1\" col=\"5\" text=\"계획금액\"/><Cell row=\"1\" col=\"6\" text=\"실적금액\"/><Cell row=\"1\" col=\"7\" text=\"차액\"/></Band><Band id=\"body\"><Cell text=\"bind:BSNS_YEAR\"/><Cell col=\"1\" mask=\"@@-@@-@@\" text=\"bind:STD_PRMPC_CODE\"/><Cell col=\"2\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:LCLAS_NM\"/><Cell col=\"3\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:MLSFC_NM\"/><Cell col=\"4\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:SCLAS_NM\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:AMT1\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:AMT2\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:AMT_D\"/></Band><Band id=\"summary\"><Cell colspan=\"5\" text=\"합계\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(AMT1)||0')\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(AMT2)||0')\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(AMT_D)||0')\"/></Band></Format></Formats>");this.div_work.div_3.addChild(_a.name,_a);_a=new Grid("grd_0","absolute","0","290",null,null,"359","0",this);_a.set_taborder("1");_a.set_binddataset("ds_0");_a.set_autofittype("col");_a.set_visible("0");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"사업년도3\"/><Cell col=\"1\" text=\"수입.계획\"/><Cell col=\"2\" text=\"수입.실적\"/><Cell col=\"3\" text=\"수입.차액\"/><Cell col=\"4\" text=\"지출.계획\"/><Cell col=\"5\" text=\"지출.실적\"/><Cell col=\"6\" text=\"지출.차액\"/><Cell col=\"7\" text=\"수지계획.차액\"/><Cell col=\"8\" text=\"지출계획.차액\"/><Cell col=\"9\" text=\"계획대비실적\"/></Band><Band id=\"body\"><Cell text=\"bind:BSNS_YEAR\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:AMT1\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:AMT2\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:AMT_D1\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:AMT3\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:AMT4\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:AMT_D2\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:AMT_D3\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:AMT_D4\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:AMT_D5\"/></Band><Band id=\"summary\"><Cell text=\"합계\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(AMT1)||0')\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(AMT2)||0')\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(AMT_D1)||0')\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(AMT3)||0')\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(AMT4)||0')\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(AMT_D2)||0')\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(AMT_D3)||0')\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(AMT_D4)||0')\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(AMT_D5)||0')\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("1");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,260,this.div_work.div_1,function(_b){_b.set_taborder("1");});this.div_work.div_1.addLayout(_a.name,_a);_a=new Layout("default","",0,220,this.div_work.div_2,function(_b){_b.set_taborder("2");});this.div_work.div_2.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work.div_3,function(_b){_b.set_taborder("3");});this.div_work.div_3.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("2");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("PRJ020601");_b.set_titletext("PRJ020601_사업별수지분석");});this.addLayout(_a.name,_a);_a=new BindItem("item01","div_search.edt_1","value","ds_cond1","BSNS_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item02","div_search.edt_2","value","ds_cond1","BSNS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item03","div_search.cmb_3","value","ds_cond1","BSNS_TY");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item04","div_search.cal_4","value","ds_cond1","STRWRK_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item05","div_search.cal_5","value","ds_cond1","COMPET_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item99","div_search.chkSrc","value","ds_cond1","DATA_SRC");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("PRJ020601.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("PRJ020601.xfdl",function(){this.g_initCols='BSNS_CODE'+',BSNS_NM'+',BSNS_TY'+',STRWRK_DE'+',COMPET_DE';this.g_grd=null;this.ds_0.clearData();this.ds_1.clearData();this.ds_2.clearData();this.ds_3.clearData();this.PRJ020601_oninit=function(_a,_b){this.fn_init();this.fn_init_form();this.fn_init_dataset();this.fn_makeGrid(this.ds_0);this.form_id=application.gv_curFormId+'_';};this.PRJ020601_onload=function(_a,_b){this.fn_loadCombo();};this.fn_Profile=function(_a,_b){return;var _c;var _d=this.form_id;var _e=this.g_initCols.split(',');var _f=_a.rowposition;var _g;var _h=function(){_c=application.getPrivateProfile(_d+_e[i]);_a.setColumn(_f,_e[i],_c);if(i==0){if(!_c){return 1;}_g=_c;}};var _i=function(){_c=_a.getColumn(_f,_e[i]);application.setPrivateProfile(_d+_e[i],_c);};var _j=_b?_i:_h;for(var _k=0;_k<_e.length;_k++ ){if(_j()){break;}}return _g;};this.fn_init_form=function(){};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);this.checkDs.push(this.ds_1);this.checkDs.push(this.ds_2);};this.fn_loadCombo=function(){var _a=[['ds_PRJ012','PRJ012',1,'']];var _b=function(_c,_d,_e){var _f=this.fn_Profile(this.ds_cond1,0);if(_f){this.fn_search();}};this.gfn_comboLoad(_a,_b);};this.fn_search=function(){if(!this.gfn_checkValidation(this.div_search,this.ds_validation)){return;}this.fn_transaction("mList");};this.fn_save=function(){if(this.gfn_message("confirm.저장.여부")){this.fn_transaction("save");}};this.fn_make=function(){if(this.gfn_message("confirm.생성.여부","||")){this.fn_transaction("make");}};this.fn_transaction=function(_a){if(this.ds_cond1.rowcount<1){return;}var _b;var _c;var _d="hsco/pms/prj/PRJ020601/"+_a+".do";var _e="input1=ds_cond1";var _f="";switch(_a){case "mList":_f="ds_0=output1";_f+=" ds_2=output2";_f+=" ds_3=output3";break;case "save":_e="input1=ds_1:U";_e+=" input2=ds_2:U";break;case "make":ds=this.ds_cond_ctr;_e="input1=ds_cond1";}this.fn_clearData(_a);if(_c){this.ds_cond1.copyRow(0,_b,_b.rowposition,_c);this.debug('tr:'+_a+'\n'+this.ds_cond1.saveCSV());}Ex.core.tran(this,_a,_d,_e,_f);};this.fn_clearData=function(_a){switch(_a){case "mList":this.ds_1.clearData();this.ds_2.clearData();this.ds_3.clearData();}};this.fn_callBack=function(_a,_b,_c){this.debug("fn_callBack() - "+_a+','+_b+','+_c);if(_b!=0){return this.gfn_callback_message(_a,_b,_c);}switch(_a){case "mList":this.fn_makeGrid(this.ds_0);break;case "save":case "make":this.fn_search();break;}};this.ds_1.fn_getCustSum=function(_a,_b,_c){return this.getCaseSum('GB=='+_a,_c)-this.getCaseSum('GB=='+_b,_c);};this.ds_onrowposchanged=function(_a,_b){return;this.debug('onrow:'+_a.name);if(_a.rowcount<1){return;}switch(_a){case this.ds_1:return this.fn_transaction("rList");}};this.btn_BsnsPopup_onclick=function(_a,_b){this.fn_PopupBsns();};this.fn_PopupBsns=function(){var _a=function(_c,_d){if(!_d){return;}this.debug('OK\n'+_d);var _e=new Dataset();nRowCnt=_e.loadXML(_d);if(nRowCnt<1){return;}this.debug('BSNS:'+_e.getColumn(0,'BSNS_CODE'));var _f=this.ds_cond1;var _g=_f.rowposition;_f.copyRow(_g,_e,0,'BSNS_CODE=BSNS_CODE,'+'BSNS_NM=BSNS_NM,'+'BSNS_TY=BSNS_TY,'+'STRWRK_DE=STRWRK_DE,'+'COMPET_DE=COMPET_DE,');var _h=_f.getColumn(_g,'STRWRK_DE');if(_h){_f.setColumn(_g,'YEAR',_h.substr(0,4));}this.fn_Profile(_f,1);this.fn_search();};var _b={BSNS_GB:1};this.gfn_popup('popBsns',500,500,'',_b,"pms_prj::popBsns.xfdl",_a,1);};this.fn_makeGrid=function(_a){var _b=this.div_work.div_1.grd_1;_b.set_autofittype('');var _c;var _d;var _e=3;var _f=_e+10;var _g=_a.rowcount;var _h=80;var _i=0;var _j=_e;for(;_j<_e+_g;_j++ ){_c=_a.getColumn(_i,'BSNS_YEAR');this.debug('n:'+_i+'/'+_j+'='+_c+' AMT'+_i);_b.setCellProperty("head",_j,"text",_c);_b.setFormatColProperty(_j,"size",_h);_i++ ;}for(;_j<_f;_j++ ){_b.setFormatColProperty(_j,"size",0);}this.fn_initSumDS(_b,this.ds_1);this.fn_copyData(_b,this.ds_1,_a);this.ds_1.applyChange();};this.fn_initSumDS=function(_a,_b){var _c={1:'수입부문\n(천원)',2:'지출부문\n(천원)',3:'수지차액(계획)',4:'수지차액(실적)',5:'계획대비실적',6:'계획금액',7:'실적금액',8:'차액'};var _d=[1,1,1,2,2,2];var _e=[6,7,8,6,7,8,3,4,5];var _f;_b.clearData();for(var _g=0;_g<_d.length;_g++ ){_f=_b.addRow();_b.setColumn(_f,'GB',''+_d[_g]+_e[_g]);_b.setColumn(_f,'GB1',_c[_d[_g]]);_b.setColumn(_f,'GB2',_c[_e[_g]]);}};this.fn_copyData=function(_a,_b,_c){if(!_c){return;}if(_c.rowcount<1){return;}var _d=_c.rowcount;var _e=[1,2,'_D1',3,4,'_D2','_D3','_D4','_D5'];for(var _f=0;_f<_e.length;_f++ ){_b.setColumn(_f,'AMT_S',_c.getSum('parseInt(AMT'+_e[_f]+')||0'));}for(var _f=0;_f<_d;_f++ ){_b.setColumn(0,'AMT'+_f,_c.getColumn(_f,'AMT1'));_b.setColumn(1,'AMT'+_f,_c.getColumn(_f,'AMT2'));_b.setColumn(2,'AMT'+_f,_c.getColumn(_f,'AMT_D1'));_b.setColumn(3,'AMT'+_f,_c.getColumn(_f,'AMT3'));_b.setColumn(4,'AMT'+_f,_c.getColumn(_f,'AMT4'));_b.setColumn(5,'AMT'+_f,_c.getColumn(_f,'AMT_D2'));_b.setColumn(6,'AMT'+_f,_c.getColumn(_f,'AMT_D3'));_b.setColumn(7,'AMT'+_f,_c.getColumn(_f,'AMT_D4'));_b.setColumn(8,'AMT'+_f,_c.getColumn(_f,'AMT_D5'));}_b.set_rowposition(0);};});this.on_initEvent=function(){this.addEventHandler("onload",this.PRJ020601_onload,this);this.addEventHandler("oninit",this.PRJ020601_oninit,this);this.div_search.btn_Bsns.addEventHandler("onclick",this.btn_BsnsPopup_onclick,this);this.div_search.btn_make.addEventHandler("onclick",this.fn_make,this);this.div_search.chkSrc.addEventHandler("onchanged",this.fn_search,this);};this.loadIncludeScript("PRJ020601.xfdl");};})();