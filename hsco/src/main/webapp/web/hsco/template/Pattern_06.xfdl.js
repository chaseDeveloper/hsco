﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("Work");this.set_classname("Work");this.set_titletext("TAB");this._setFormPosition(0,0,1025,674);}this.getSetter("inheritanceid").set("");_a=new Dataset("ds_grid",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">3</Col><Col id=\"Column3\">4</Col><Col id=\"Column4\">5</Col><Col id=\"Column5\">6</Col><Col id=\"Column6\">7</Col><Col id=\"Column7\">8</Col><Col id=\"Column8\">9</Col><Col id=\"Column9\">10</Col><Col id=\"Column10\">11</Col><Col id=\"Column11\">12</Col><Col id=\"Column12\">13</Col><Col id=\"Column13\">14</Col><Col id=\"Column14\">15</Col><Col id=\"Column15\">16</Col><Col id=\"Column16\">17</Col><Col id=\"Column17\">18</Col><Col id=\"Column18\">19</Col></Row><Row><Col id=\"Column9\">J</Col><Col id=\"Column0\">A</Col><Col id=\"Column1\">B</Col><Col id=\"Column2\">C</Col><Col id=\"Column3\">D</Col><Col id=\"Column4\">E</Col><Col id=\"Column5\">F</Col><Col id=\"Column6\">G</Col><Col id=\"Column7\">H</Col><Col id=\"Column8\">I</Col><Col id=\"Column18\">S</Col><Col id=\"Column17\">R</Col><Col id=\"Column16\">Q</Col><Col id=\"Column15\">P</Col><Col id=\"Column14\">O</Col><Col id=\"Column13\">N</Col><Col id=\"Column12\">M</Col><Col id=\"Column11\">L</Col><Col id=\"Column10\">K</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_radio_01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">OnLine</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">OffLine</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_radio_00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">Yes</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">No</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Tab("Tab00","absolute","15","123",null,null,"15","11",this);_a.set_taborder("10");_a.set_tabindex("0");_a.set_scrollbars("autoboth");this.addChild(_a.name,_a);_a=new Tabpage("tabpage1",this.Tab00);_a.set_text("TabPage1");this.Tab00.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label15","absolute","532","41",null,"26","-35",null,this.Tab00.tabpage1);_a.set_text("");_a.set_cssclass("sta_WFDA_Data");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label23","absolute","532","66",null,"26","-35",null,this.Tab00.tabpage1);_a.set_text("");_a.set_cssclass("sta_WFDA_Data");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label27","absolute","532","91",null,"26","-35",null,this.Tab00.tabpage1);_a.set_text("");_a.set_cssclass("sta_WFDA_Data");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label37","absolute","532","116",null,"26","-35",null,this.Tab00.tabpage1);_a.set_text("");_a.set_cssclass("sta_WFDA_Data");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label41","absolute","491","141",null,null,"6","29",this.Tab00.tabpage1);_a.set_text("");_a.set_cssclass("sta_WFDA_Data");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label12","absolute","0","40","163","32",null,null,this.Tab00.tabpage1);_a.set_taborder("33");_a.set_text("Period of subcontracting construction");_a.set_cssclass("sta_WFDA_labelB");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label13","absolute","163","40","321","32",null,null,this.Tab00.tabpage1);_a.set_taborder("34");_a.set_cssclass("sta_WFDA_B");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label14","absolute","484","40","133","32",null,null,this.Tab00.tabpage1);_a.set_taborder("35");_a.set_text("Tax/Tax-free");_a.set_cssclass("sta_WFDA_labelB");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label00","absolute","617","40",null,"32","0",null,this.Tab00.tabpage1);_a.set_taborder("36");_a.set_cssclass("sta_WFDA_B");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label16","absolute","0","71","163","32",null,null,this.Tab00.tabpage1);_a.set_taborder("37");_a.set_text("Construction execution");_a.set_cssclass("sta_WFDA_labelB");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label21","absolute","163","71","321","32",null,null,this.Tab00.tabpage1);_a.set_taborder("38");_a.set_cssclass("sta_WFDA_B");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label22","absolute","484","71","133","32",null,null,this.Tab00.tabpage1);_a.set_taborder("39");_a.set_text("Contruction date");_a.set_cssclass("sta_WFDA_labelB");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label01","absolute","617","71",null,"32","0",null,this.Tab00.tabpage1);_a.set_taborder("40");_a.set_cssclass("sta_WFDA_B");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label24","absolute","0","102","163","32",null,null,this.Tab00.tabpage1);_a.set_taborder("41");_a.set_text("Contruction method");_a.set_cssclass("sta_WFDA_labelB");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label25","absolute","163","102","321","32",null,null,this.Tab00.tabpage1);_a.set_taborder("42");_a.set_cssclass("sta_WFDA_B");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label26","absolute","484","102","133","32",null,null,this.Tab00.tabpage1);_a.set_taborder("43");_a.set_text("Contruction director");_a.set_cssclass("sta_WFDA_labelB");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label02","absolute","617","102",null,"32","0",null,this.Tab00.tabpage1);_a.set_taborder("44");_a.set_cssclass("sta_WFDA_B");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label28","absolute","0","133","163","32",null,null,this.Tab00.tabpage1);_a.set_taborder("45");_a.set_text("Contruction place");_a.set_cssclass("sta_WFDA_labelB");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label35","absolute","163","133","321","32",null,null,this.Tab00.tabpage1);_a.set_taborder("46");_a.set_cssclass("sta_WFDA_B");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label36","absolute","484","133","133","32",null,null,this.Tab00.tabpage1);_a.set_taborder("47");_a.set_text("Bid director");_a.set_cssclass("sta_WFDA_labelB");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label03","absolute","617","133",null,"32","0",null,this.Tab00.tabpage1);_a.set_taborder("48");_a.set_cssclass("sta_WFDA_B");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label38","absolute","0","164","163",null,null,"93",this.Tab00.tabpage1);_a.set_taborder("49");_a.set_text("Construction outline");_a.set_cssclass("sta_WFDA_labelB");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label39","absolute","163","164","321",null,null,"93",this.Tab00.tabpage1);_a.set_taborder("50");_a.set_cssclass("sta_WFDA_B");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label40","absolute","484","164","133",null,null,"93",this.Tab00.tabpage1);_a.set_taborder("51");_a.set_text("Remarks");_a.set_cssclass("sta_WFDA_labelB");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label04","absolute","617","164",null,null,"0","93",this.Tab00.tabpage1);_a.set_taborder("52");_a.set_cssclass("sta_WFDA_B");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Calendar("Calendar00","absolute","190","45","110","22",null,null,this.Tab00.tabpage1);this.Tab00.tabpage1.addChild(_a.name,_a);_a.set_taborder("53");_a.set_value("20110615");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("input_point");_a=new Calendar("Calendar01","absolute","320","45","110","22",null,null,this.Tab00.tabpage1);this.Tab00.tabpage1.addChild(_a.name,_a);_a.set_taborder("54");_a.set_value("20110615");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("input_point");_a=new Radio("Radio00","absolute","190","76","140","22",null,null,this.Tab00.tabpage1);this.Tab00.tabpage1.addChild(_a.name,_a);_a.set_taborder("55");_a.set_columncount("2");_a.set_innerdataset("@ds_radio_00");_a.set_codecolumn("Column0");_a.set_datacolumn("Column1");_a=new Radio("Radio01","absolute","190","107","140","22",null,null,this.Tab00.tabpage1);this.Tab00.tabpage1.addChild(_a.name,_a);_a.set_taborder("56");_a.set_columncount("2");_a.set_innerdataset("@ds_radio_01");_a.set_codecolumn("Column0");_a.set_datacolumn("Column1");_a.set_value("1");_a.set_index("1");_a=new Edit("Edit02","absolute","169","138","309","22",null,null,this.Tab00.tabpage1);_a.set_taborder("57");_a.set_cssclass("input_point");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Edit("Edit05","absolute","622","45","368","22",null,null,this.Tab00.tabpage1);_a.set_taborder("58");_a.set_cssclass("input_point");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Calendar("Calendar02","absolute","622","76","110","22",null,null,this.Tab00.tabpage1);this.Tab00.tabpage1.addChild(_a.name,_a);_a.set_taborder("59");_a.set_value("20110615");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("input_point");_a=new Combo("Combo00","absolute","783","76","40","22",null,null,this.Tab00.tabpage1);this.Tab00.tabpage1.addChild(_a.name,_a);_a.set_taborder("60");_a=new Edit("Edit06","absolute","622","107","116","22",null,null,this.Tab00.tabpage1);_a.set_taborder("62");_a.set_cssclass("input_point");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Edit("Edit07","absolute","622","138","116","22",null,null,this.Tab00.tabpage1);_a.set_taborder("63");_a.set_cssclass("input_point");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Button("btn_WFSA_Search00","absolute","739","107","23","22",null,null,this.Tab00.tabpage1);_a.set_taborder("64");_a.set_cssclass("btn_WFDA_Search");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Button("btn_WFSA_Search01","absolute","739","138","23","22",null,null,this.Tab00.tabpage1);_a.set_taborder("65");_a.set_cssclass("btn_WFDA_Search");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new TextArea("TextArea00","absolute","169","170","309",null,null,"101",this.Tab00.tabpage1);_a.set_taborder("66");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new TextArea("TextArea01","absolute","622","170",null,null,"5","101",this.Tab00.tabpage1);_a.set_taborder("67");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static04","absolute","825","76","64","22",null,null,this.Tab00.tabpage1);_a.set_taborder("68");_a.set_text("O'clock  ");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static06","absolute","306","45","15","22",null,null,this.Tab00.tabpage1);_a.set_taborder("70");_a.set_text("~");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("sta_WF_TitleLev00","absolute","0","18","134","14",null,null,this.Tab00.tabpage1);_a.set_taborder("71");_a.set_text("Detailed Information");_a.set_cssclass("sta_WF_subtit");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Tabpage("tabpage2",this.Tab00);_a.set_text("TabPage2");this.Tab00.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","0","40",null,null,"0","0",this.Tab00.tabpage2);_a.set_taborder("1");_a.set_binddataset("ds_grid");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/><Cell col=\"6\" text=\"Column6\"/><Cell col=\"7\" text=\"Column7\"/><Cell col=\"8\" text=\"Column8\"/><Cell col=\"9\" text=\"Column9\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/></Band></Format></Formats>");this.Tab00.tabpage2.addChild(_a.name,_a);_a=new Button("btn_WF_crud00","absolute",null,"12","45","23","142",null,this.Tab00.tabpage2);_a.set_taborder("2");_a.set_text("Add");_a.set_cssclass("btn_WF_crud");this.Tab00.tabpage2.addChild(_a.name,_a);_a=new Button("btn_WF_crud07","absolute",null,"12","45","23","96",null,this.Tab00.tabpage2);_a.set_taborder("3");_a.set_text("Modify");_a.set_cssclass("btn_WF_crud");this.Tab00.tabpage2.addChild(_a.name,_a);_a=new Button("btn_WF_crud06","absolute",null,"12","45","23","50",null,this.Tab00.tabpage2);_a.set_taborder("4");_a.set_text("Delete");_a.set_cssclass("btn_WF_crud");this.Tab00.tabpage2.addChild(_a.name,_a);_a=new Button("btn_WF_crud02","absolute",null,"12","45","23","4",null,this.Tab00.tabpage2);_a.set_taborder("5");_a.set_text("Save");_a.set_cssclass("btn_module");this.Tab00.tabpage2.addChild(_a.name,_a);_a=new Static("Static44","absolute","15","664","995","10",null,null,this);_a.set_taborder("11");_a.set_text("10");_a.set_visible("false");_a.style.set_background("blueviolet");_a.style.set_align("center middle");_a.style.set_opacity("50");this.addChild(_a.name,_a);_a=new Static("Static41","absolute","0","0","15","674",null,null,this);_a.set_taborder("12");_a.set_text("15");_a.set_visible("false");_a.style.set_background("blueviolet");_a.style.set_align("center middle");_a.style.set_font("bold 9 Dotum");_a.style.set_opacity("50");this.addChild(_a.name,_a);_a=new Static("Static43","absolute","1010","0","15","674",null,null,this);_a.set_taborder("13");_a.set_text("15");_a.set_visible("false");_a.style.set_background("blueviolet");_a.style.set_align("center middle");_a.style.set_font("bold 9 Dotum");_a.style.set_opacity("50");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","15","46",null,"70","15",null,this);_a.set_taborder("14");_a.set_cssclass("sta_WFSA_BG");this.addChild(_a.name,_a);_a=new Static("sta_WF_SearchBox","absolute","0","0",null,"62","0",null,this);_a.set_taborder("15");_a.set_cssclass("sta_WF_SearchBox");this.addChild(_a.name,_a);_a=new Static("sta_WFSA_PointLabel","absolute","35","56","85","22",null,null,this);_a.set_taborder("16");_a.set_text("Fixed Date");_a.set_cssclass("sta_WFSA_label");this.addChild(_a.name,_a);_a=new Static("sta_WFSA_PointLabel00","absolute","368","56","88","22",null,null,this);_a.set_taborder("17");_a.set_text("Organization");_a.set_cssclass("sta_WFSA_label");this.addChild(_a.name,_a);_a=new Static("sta_WFSA_PointLabel02","absolute","35","81","85","22",null,null,this);_a.set_taborder("18");_a.set_text("Employee");_a.set_cssclass("sta_WFSA_label");this.addChild(_a.name,_a);_a=new Static("sta_WFSA_PointLabel03","absolute","368","81","88","22",null,null,this);_a.set_taborder("19");_a.set_text("Working area");_a.set_cssclass("sta_WFSA_label");this.addChild(_a.name,_a);_a=new Calendar("Calendar00","absolute","106","56","100","22",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("20");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("input_point");_a=new Edit("Edit00","absolute","460","56","84","22",null,null,this);_a.set_taborder("21");this.addChild(_a.name,_a);_a=new Button("btn_WFSA_Search02","absolute","545","56","23","22",null,null,this);_a.set_taborder("22");_a.set_cssclass("btn_WFDA_Search");this.addChild(_a.name,_a);_a=new Edit("Edit01","absolute","568","56","175","22",null,null,this);_a.set_taborder("23");this.addChild(_a.name,_a);_a=new Combo("Combo01","absolute","460","81","150","22",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("24");_a=new Static("st_progress","absolute","15","2","808","45",null,null,this);_a.set_taborder("25");_a.set_text("location");_a.set_cssclass("sta_WF_progress");this.addChild(_a.name,_a);_a=new Edit("Edit07","absolute","106","81","84","22",null,null,this);_a.set_taborder("28");_a.set_cssclass("input_point");this.addChild(_a.name,_a);_a=new Button("btn_WFSA_Search00","absolute","191","81","23","22",null,null,this);_a.set_taborder("29");_a.set_cssclass("btn_WFDA_Search");this.addChild(_a.name,_a);_a=new Edit("Edit08","absolute","214","81","103","22",null,null,this);_a.set_taborder("30");_a.set_enable("false");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","10","0",null,"15","-1.27%",null,this);_a.set_taborder("31");_a.set_text("15");_a.set_visible("false");_a.style.set_background("blueviolet");_a.style.set_align("center middle");_a.style.set_font("bold 9 Dotum");_a.style.set_opacity("50");this.addChild(_a.name,_a);_a=new Button("btn_WF_crud06","absolute","92.68%","15",null,"25","1.46%",null,this);_a.set_taborder("32");_a.set_cssclass("btn_closeOrange");this.addChild(_a.name,_a);_a=new Button("btn_WF_crud05","absolute","86.63%","15",null,"25","7.51%",null,this);_a.set_taborder("33");_a.set_cssclass("btn_cancelOrange");this.addChild(_a.name,_a);_a=new Button("btn_WF_crud04","absolute","80.68%","15",null,"25","13.46%",null,this);_a.set_taborder("34");_a.set_cssclass("btn_appOrange");this.addChild(_a.name,_a);_a=new Button("btn_WF_crud","absolute","68.59%","15",null,"25","25.56%",null,this);_a.set_taborder("35");_a.set_cssclass("btn_saveOrange");this.addChild(_a.name,_a);_a=new Button("btn_WF_crud03","absolute","74.63%","15",null,"25","19.51%",null,this);_a.set_taborder("36");_a.set_cssclass("btn_printOrange");this.addChild(_a.name,_a);_a=new Button("btn_WF_crud00","absolute","62.54%","15",null,"25","31.61%",null,this);_a.set_taborder("37");_a.set_cssclass("btn_deleteOrange");this.addChild(_a.name,_a);_a=new Button("btn_WF_crud01","absolute","56.49%","15",null,"25","37.66%",null,this);_a.set_taborder("38");_a.set_cssclass("btn_insertOrange");this.addChild(_a.name,_a);_a=new Button("btn_WF_crud02","absolute","50.34%","15",null,"25","43.8%",null,this);_a.set_taborder("39");_a.set_cssclass("btn_searchOrange");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","10","116",null,"7","-0.1%",null,this);_a.set_taborder("40");_a.set_text("7");_a.set_visible("false");_a.style.set_background("blueviolet");_a.style.set_align("center middle");_a.style.set_font("bold 9 Dotum");_a.style.set_opacity("50");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.Tab00.tabpage1,function(_b){_b.set_text("TabPage1");});this.Tab00.tabpage1.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.Tab00.tabpage2,function(_b){_b.set_text("TabPage2");});this.Tab00.tabpage2.addLayout(_a.name,_a);_a=new Layout("default","",1025,674,this,function(_b){_b.set_classname("Work");_b.getSetter("inheritanceid").set("");_b.set_titletext("TAB");});this.addLayout(_a.name,_a);_a=null;};this.registerScript("Pattern_06.xfdl",function(){});this.on_initEvent=function(){};this.loadIncludeScript("Pattern_06.xfdl");};})();