﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("pattern01");this.set_classname("pattern01");this.set_titletext("사업별수지분석");this._setFormPosition(0,0,1059,735);}_a=new Grid("Grid02","absolute","0","355","1031","187",null,null,this);_a.set_taborder("24");_a.set_fillareatype("none");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"92\"/><Column size=\"133\"/><Column size=\"133\"/><Column size=\"133\"/><Column size=\"268\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"사업년도\"/><Cell col=\"1\" rowspan=\"2\" text=\"토지(주택)&#13;&#10;코드\"/><Cell col=\"2\" rowspan=\"2\" text=\"토지(주택)명\"/><Cell col=\"3\" rowspan=\"2\" text=\"용도(공급)&#13;&#10;코드\"/><Cell col=\"4\" rowspan=\"2\" text=\"용도명\"/><Cell col=\"5\" colspan=\"3\" text=\"수입부문(천원)\"/><Cell row=\"1\" col=\"5\" text=\"계획금액\"/><Cell row=\"1\" col=\"6\" text=\"실적금액\"/><Cell row=\"1\" col=\"7\" text=\"차액\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band><Band id=\"summary\"><Cell colspan=\"5\" text=\"사업년도 합계\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","0","567","1031","168",null,null,this);_a.set_taborder("38");_a.set_fillareatype("none");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"92\"/><Column size=\"133\"/><Column size=\"180\"/><Column size=\"178\"/><Column size=\"176\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"사업년도\"/><Cell col=\"1\" rowspan=\"2\" text=\"평가항목&#13;&#10;코드\"/><Cell col=\"2\" rowspan=\"2\" text=\"평가항목명(대)\"/><Cell col=\"3\" rowspan=\"2\" text=\"평가항목명(중)\"/><Cell col=\"4\" rowspan=\"2\" text=\"평가항목명(소)\"/><Cell col=\"5\" colspan=\"3\" text=\"지출부문(천원)\"/><Cell row=\"1\" col=\"5\" text=\"계획금액\"/><Cell row=\"1\" col=\"6\" text=\"실적금액\"/><Cell row=\"1\" col=\"7\" text=\"차액\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band><Band id=\"summary\"><Cell colspan=\"5\" text=\"사업년도 합계\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static21","absolute","0","33","1031","10",null,null,this);_a.set_taborder("59");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static35","absolute","0","95","55","79",null,null,this);_a.set_taborder("60");_a.set_text("수입\r\n부문\r\n(천원)");_a.set_cssclass("sta_WF_DataTitle2");this.addChild(_a.name,_a);_a=new Static("Static34","absolute","0","43","140","53",null,null,this);_a.set_taborder("61");_a.set_text("구분");_a.set_cssclass("sta_WF_DataTitle");this.addChild(_a.name,_a);_a=new Static("Static50","absolute","139","95","105","27",null,null,this);_a.set_taborder("62");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static22","absolute","54","95","86","27",null,null,this);_a.set_taborder("63");_a.set_text("계획금액");_a.set_cssclass("sta_WF_DataTitle2");this.addChild(_a.name,_a);_a=new Static("Static23","absolute","54","121","86","27",null,null,this);_a.set_taborder("64");_a.set_text("실적금액");_a.set_cssclass("sta_WF_DataTitle2");this.addChild(_a.name,_a);_a=new Static("Static24","absolute","54","147","86","27",null,null,this);_a.set_taborder("65");_a.set_text("차액");_a.set_cssclass("sta_WF_DataTitle2");this.addChild(_a.name,_a);_a=new Static("Static25","absolute","139","43","105","53",null,null,this);_a.set_taborder("66");_a.set_text("합계");_a.set_cssclass("sta_WF_DataTitle");this.addChild(_a.name,_a);_a=new Static("Static26","absolute","139","121","105","27",null,null,this);_a.set_taborder("67");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static27","absolute","139","147","105","27",null,null,this);_a.set_taborder("68");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static28","absolute","139","225","105","27",null,null,this);_a.set_taborder("69");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static29","absolute","54","225","86","27",null,null,this);_a.set_taborder("70");_a.set_text("차액");_a.set_cssclass("sta_WF_DataTitle2");this.addChild(_a.name,_a);_a=new Static("Static30","absolute","0","173","55","79",null,null,this);_a.set_taborder("71");_a.set_text("지출\r\n부문\r\n(천원)");_a.set_cssclass("sta_WF_DataTitle2");this.addChild(_a.name,_a);_a=new Static("Static31","absolute","54","199","86","27",null,null,this);_a.set_taborder("72");_a.set_text("실적금액");_a.set_cssclass("sta_WF_DataTitle2");this.addChild(_a.name,_a);_a=new Static("Static32","absolute","54","173","86","27",null,null,this);_a.set_taborder("73");_a.set_text("계획금액");_a.set_cssclass("sta_WF_DataTitle2");this.addChild(_a.name,_a);_a=new Static("Static33","absolute","139","199","105","27",null,null,this);_a.set_taborder("74");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","139","173","105","27",null,null,this);_a.set_taborder("75");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static37","absolute","0","251","140","27",null,null,this);_a.set_taborder("76");_a.set_text("수지차액(계획)");_a.set_cssclass("sta_WF_DataTitle2");this.addChild(_a.name,_a);_a=new Static("Static39","absolute","0","277","140","27",null,null,this);_a.set_taborder("77");_a.set_text("수지차액(실적)");_a.set_cssclass("sta_WF_DataTitle2");this.addChild(_a.name,_a);_a=new Static("Static40","absolute","0","303","140","27",null,null,this);_a.set_taborder("78");_a.set_text("계획대비실적");_a.set_cssclass("sta_WF_DataTitle2");this.addChild(_a.name,_a);_a=new Static("Static41","absolute","139","303","105","27",null,null,this);_a.set_taborder("79");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static42","absolute","139","277","105","27",null,null,this);_a.set_taborder("80");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static43","absolute","139","251","105","27",null,null,this);_a.set_taborder("81");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static45","absolute","243","69","88","27",null,null,this);_a.set_taborder("83");_a.set_text("2007년도");_a.set_cssclass("sta_WF_DataTitle");this.addChild(_a.name,_a);_a=new Static("Static46","absolute","330","69","88","27",null,null,this);_a.set_taborder("84");_a.set_text("2008년도");_a.set_cssclass("sta_WF_DataTitle");this.addChild(_a.name,_a);_a=new Static("Static47","absolute","417","69","88","27",null,null,this);_a.set_taborder("85");_a.set_text("2009년도");_a.set_cssclass("sta_WF_DataTitle");this.addChild(_a.name,_a);_a=new Static("Static48","absolute","504","69","88","27",null,null,this);_a.set_taborder("86");_a.set_text("2010년도");_a.set_cssclass("sta_WF_DataTitle");this.addChild(_a.name,_a);_a=new Static("Static49","absolute","852","69","88","27",null,null,this);_a.set_taborder("87");_a.set_text("2014년도");_a.set_cssclass("sta_WF_DataTitle");this.addChild(_a.name,_a);_a=new Static("Static51","absolute","765","69","88","27",null,null,this);_a.set_taborder("88");_a.set_text("2013년도");_a.set_cssclass("sta_WF_DataTitle");this.addChild(_a.name,_a);_a=new Static("Static52","absolute","678","69","88","27",null,null,this);_a.set_taborder("89");_a.set_text("2012년도");_a.set_cssclass("sta_WF_DataTitle");this.addChild(_a.name,_a);_a=new Static("Static53","absolute","591","69","88","27",null,null,this);_a.set_taborder("90");_a.set_text("2011년도");_a.set_cssclass("sta_WF_DataTitle");this.addChild(_a.name,_a);_a=new Static("Static54","absolute","939","69","92","27",null,null,this);_a.set_taborder("91");_a.set_text("2015년도");_a.set_cssclass("sta_WF_DataTitle");this.addChild(_a.name,_a);_a=new Static("Static44","absolute","243","43","788","27",null,null,this);_a.set_taborder("82");_a.set_text("사업년도");_a.set_cssclass("sta_WF_DataTitle");this.addChild(_a.name,_a);_a=new Static("Static55","absolute","243","95","88","27",null,null,this);_a.set_taborder("92");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static56","absolute","243","121","88","27",null,null,this);_a.set_taborder("93");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static57","absolute","243","147","88","27",null,null,this);_a.set_taborder("94");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static58","absolute","243","173","88","27",null,null,this);_a.set_taborder("95");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static59","absolute","243","199","88","27",null,null,this);_a.set_taborder("96");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static60","absolute","243","225","88","27",null,null,this);_a.set_taborder("97");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static61","absolute","243","251","88","27",null,null,this);_a.set_taborder("98");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static62","absolute","243","277","88","27",null,null,this);_a.set_taborder("99");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static63","absolute","243","303","88","27",null,null,this);_a.set_taborder("100");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static64","absolute","330","95","88","27",null,null,this);_a.set_taborder("101");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static65","absolute","330","121","88","27",null,null,this);_a.set_taborder("102");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static66","absolute","330","147","88","27",null,null,this);_a.set_taborder("103");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static67","absolute","330","173","88","27",null,null,this);_a.set_taborder("104");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static68","absolute","330","199","88","27",null,null,this);_a.set_taborder("105");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static69","absolute","330","225","88","27",null,null,this);_a.set_taborder("106");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static70","absolute","330","251","88","27",null,null,this);_a.set_taborder("107");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static71","absolute","330","277","88","27",null,null,this);_a.set_taborder("108");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static72","absolute","330","303","88","27",null,null,this);_a.set_taborder("109");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static73","absolute","504","95","88","27",null,null,this);_a.set_taborder("110");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static74","absolute","504","121","88","27",null,null,this);_a.set_taborder("111");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static75","absolute","504","147","88","27",null,null,this);_a.set_taborder("112");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static76","absolute","504","173","88","27",null,null,this);_a.set_taborder("113");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static77","absolute","504","199","88","27",null,null,this);_a.set_taborder("114");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static78","absolute","504","225","88","27",null,null,this);_a.set_taborder("115");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static79","absolute","504","251","88","27",null,null,this);_a.set_taborder("116");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static80","absolute","504","277","88","27",null,null,this);_a.set_taborder("117");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static81","absolute","504","303","88","27",null,null,this);_a.set_taborder("118");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static82","absolute","417","95","88","27",null,null,this);_a.set_taborder("119");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static83","absolute","417","121","88","27",null,null,this);_a.set_taborder("120");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static84","absolute","417","147","88","27",null,null,this);_a.set_taborder("121");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static85","absolute","417","173","88","27",null,null,this);_a.set_taborder("122");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static86","absolute","417","199","88","27",null,null,this);_a.set_taborder("123");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static87","absolute","417","225","88","27",null,null,this);_a.set_taborder("124");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static88","absolute","417","251","88","27",null,null,this);_a.set_taborder("125");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static89","absolute","417","277","88","27",null,null,this);_a.set_taborder("126");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static90","absolute","417","303","88","27",null,null,this);_a.set_taborder("127");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static91","absolute","678","95","88","27",null,null,this);_a.set_taborder("128");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static92","absolute","678","121","88","27",null,null,this);_a.set_taborder("129");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static93","absolute","678","147","88","27",null,null,this);_a.set_taborder("130");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static94","absolute","678","173","88","27",null,null,this);_a.set_taborder("131");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static95","absolute","678","199","88","27",null,null,this);_a.set_taborder("132");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static96","absolute","678","225","88","27",null,null,this);_a.set_taborder("133");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static97","absolute","678","251","88","27",null,null,this);_a.set_taborder("134");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static98","absolute","678","277","88","27",null,null,this);_a.set_taborder("135");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static99","absolute","678","303","88","27",null,null,this);_a.set_taborder("136");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static100","absolute","591","95","88","27",null,null,this);_a.set_taborder("137");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static101","absolute","591","121","88","27",null,null,this);_a.set_taborder("138");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static102","absolute","591","147","88","27",null,null,this);_a.set_taborder("139");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static103","absolute","591","173","88","27",null,null,this);_a.set_taborder("140");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static104","absolute","591","199","88","27",null,null,this);_a.set_taborder("141");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static105","absolute","591","225","88","27",null,null,this);_a.set_taborder("142");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static106","absolute","591","251","88","27",null,null,this);_a.set_taborder("143");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static107","absolute","591","277","88","27",null,null,this);_a.set_taborder("144");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static108","absolute","591","303","88","27",null,null,this);_a.set_taborder("145");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static109","absolute","852","95","88","27",null,null,this);_a.set_taborder("146");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static110","absolute","852","121","88","27",null,null,this);_a.set_taborder("147");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static111","absolute","852","147","88","27",null,null,this);_a.set_taborder("148");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static112","absolute","852","173","88","27",null,null,this);_a.set_taborder("149");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static113","absolute","852","199","88","27",null,null,this);_a.set_taborder("150");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static114","absolute","852","225","88","27",null,null,this);_a.set_taborder("151");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static115","absolute","852","251","88","27",null,null,this);_a.set_taborder("152");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static116","absolute","852","277","88","27",null,null,this);_a.set_taborder("153");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static117","absolute","852","303","88","27",null,null,this);_a.set_taborder("154");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static118","absolute","765","95","88","27",null,null,this);_a.set_taborder("155");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static119","absolute","765","121","88","27",null,null,this);_a.set_taborder("156");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static120","absolute","765","147","88","27",null,null,this);_a.set_taborder("157");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static121","absolute","765","173","88","27",null,null,this);_a.set_taborder("158");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static122","absolute","765","199","88","27",null,null,this);_a.set_taborder("159");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static123","absolute","765","225","88","27",null,null,this);_a.set_taborder("160");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static124","absolute","765","251","88","27",null,null,this);_a.set_taborder("161");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static125","absolute","765","277","88","27",null,null,this);_a.set_taborder("162");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static126","absolute","765","303","88","27",null,null,this);_a.set_taborder("163");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static127","absolute","939","95","92","27",null,null,this);_a.set_taborder("164");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static128","absolute","939","121","92","27",null,null,this);_a.set_taborder("165");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static129","absolute","939","147","92","27",null,null,this);_a.set_taborder("166");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static130","absolute","939","173","92","27",null,null,this);_a.set_taborder("167");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static131","absolute","939","199","92","27",null,null,this);_a.set_taborder("168");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static132","absolute","939","225","92","27",null,null,this);_a.set_taborder("169");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static133","absolute","939","251","92","27",null,null,this);_a.set_taborder("170");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static134","absolute","939","277","92","27",null,null,this);_a.set_taborder("171");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static135","absolute","939","303","92","27",null,null,this);_a.set_taborder("172");_a.set_cssclass("sta_WF_Data");this.addChild(_a.name,_a);_a=new Static("Static136","absolute","0","330","1031","10",null,null,this);_a.set_taborder("173");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static137","absolute","0","542","1031","10",null,null,this);_a.set_taborder("174");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("175");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("176");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("Div00","absolute","0","0",null,"33","28",null,this);_a.set_taborder("177");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static19","absolute","15","5","64","21",null,null,this.Div00);_a.set_taborder("14");_a.set_text("사업코드");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.Div00.addChild(_a.name,_a);_a=new Combo("Combo00","absolute","79","5","172","21",null,null,this.Div00);this.Div00.addChild(_a.name,_a);_a.set_taborder("15");_a.set_text("Combo00");_a=new Static("Static00","absolute","266","5","51","21",null,null,this.Div00);_a.set_taborder("16");_a.set_text("사업명");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.Div00.addChild(_a.name,_a);_a=new Edit("Edit00","absolute","317","5","190","21",null,null,this.Div00);_a.set_taborder("17");this.Div00.addChild(_a.name,_a);_a=new Static("Static01","absolute","522","5","64","21",null,null,this.Div00);_a.set_taborder("18");_a.set_text("사업유형");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.Div00.addChild(_a.name,_a);_a=new Edit("Edit01","absolute","586","5","152","21",null,null,this.Div00);_a.set_taborder("19");this.Div00.addChild(_a.name,_a);_a=new Static("Static02","absolute","753","5","64","21",null,null,this.Div00);_a.set_taborder("20");_a.set_text("사업기간");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.Div00.addChild(_a.name,_a);_a=new Calendar("Calendar05","absolute","817","5","92","21",null,null,this.Div00);this.Div00.addChild(_a.name,_a);_a.set_taborder("21");_a.set_value("20151010");_a.set_dateformat("yyyy-MM-dd");_a=new Static("Static03","absolute","911","5","17","21",null,null,this.Div00);_a.set_taborder("22");_a.set_text("~");this.Div00.addChild(_a.name,_a);_a=new Calendar("Calendar06","absolute","922","5","92","21",null,null,this.Div00);this.Div00.addChild(_a.name,_a);_a.set_taborder("23");_a.set_value("20151010");_a.set_dateformat("yyyy-MM-dd");_a=new Static("Static02","absolute","0%","337",null,"19","84.04%",null,this);_a.set_taborder("178");_a.set_text("Title");_a.set_cssclass("sta_WF_Title02");_a.style.set_background("URL('theme://images/sta_WF_Title02.png') left middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0%","351",null,"5","2.64%",null,this);_a.set_taborder("179");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","0%","549",null,"19","84.04%",null,this);_a.set_taborder("180");_a.set_text("Title");_a.set_cssclass("sta_WF_Title02");_a.style.set_background("URL('theme://images/sta_WF_Title02.png') left middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0%","563",null,"5","2.64%",null,this);_a.set_taborder("181");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.Div00,function(_b){_b.set_taborder("177");_b.set_cssclass("div_WFSA_Box");});this.Div00.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("pattern01");_b.set_titletext("사업별수지분석");});this.addLayout(_a.name,_a);_a=null;};this.on_initEvent=function(){this.Static57.addEventHandler("onclick",this.Static57_onclick,this);};this.loadIncludeScript("Pattern_07.xfdl");};})();