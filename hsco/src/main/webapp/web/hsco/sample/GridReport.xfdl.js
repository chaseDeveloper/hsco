﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("GridReport");this.set_classname("GridReport");this.set_titletext("New Form");this._setFormPosition(0,0,1024,595);}_a=new Dataset("Dataset00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"PRODUCTID\" type=\"string\" size=\"255\"/><Column id=\"DETAILCATEGORYID\" type=\"string\" size=\"255\"/><Column id=\"COMPANY\" type=\"string\" size=\"255\"/><Column id=\"MODELNAME\" type=\"string\" size=\"255\"/><Column id=\"UNITCOST\" type=\"string\" size=\"22\"/><Column id=\"DESCRIPTION\" type=\"string\" size=\"255\"/><Column id=\"DISCOUNTRATE\" type=\"string\" size=\"6\"/></ColumnInfo><Rows/>");this.addChild(_a.name,_a);_a=new Dataset("Dataset01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><ConstColumn id=\"ConstColumn0\" type=\"STRING\" size=\"30\" value=\"111\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">222</Col><Col id=\"Column0\">333</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("Dataset02",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><ConstColumn id=\"ConstColumn1\" type=\"STRING\" size=\"30\" value=\"\"/><ConstColumn id=\"ConstColumn0\" type=\"STRING\" size=\"30\" value=\"\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("Dataset03",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BLOB_IMG\" type=\"BLOB\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("dataset11",this);_a._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"20\"/><Column id=\"BLOB_IMG\" type=\"BLOB\" size=\"256\" encrypt=\"base64\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">BLOBImage</Col><Col id=\"BLOB_IMG\">R0lGODlhUwJKA/cAAP////8AM/9mM///zP/MzP/MZv+ZM/9mAPz8/Orq6v+ZmcyZmf+ZZt7e3v9m&#10;Zv8zZv8zM//MmcwzZswzM/b29syZM/9mmcwAZv+ZzMxmmeTk5AAAAMxmZv/M/8yZzMyZZtLS0swA&#10;M8zMZszMmbq6urS0tMzMzMbGxsxmM8wAAP//mZaWloSEhGaZmYqKin5+fpycnK6urnJycswzAP8A&#10;AP8zAPDw8Mz//5nMzFpaWk5OTmxsbJlmZmZmZlRUVJmZzDNmZqKioioqKjw8PJmZZkJCQmZmmQAA&#10;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&#10;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&#10;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&#10;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&#10;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&#10;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&#10;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&#10;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&#10;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&#10;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAAUwJKAwAI/gABCBxI&#10;sKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bN&#10;mzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1CjSp1KtarVq1izat3KtavXr2DDih1LtqzZs2jT&#10;ql3Ltq3bt3Djyp1Lt67du3jz6t3Lt6/fv4ADCx5MuLDhw4gTK17MuLHjx5AjS55MubLly5gza97M&#10;ubPnz6BDix5NurTp06hTq17NurXr17Bjy55Nu7bt27hz697Nu7fv38CDCx9OvLjx48iTK1/OvLnz&#10;59CjS59Ovbr169iza9/Ovbv37+DD/osfT768+fPo06tfz769+/fw48ufT7++/fv48+vfz7+///8A&#10;BijggAQWaOCBCCaooHoBGNSgQA8+SFAAFEoIAIUTXmghhANVuGFBEmL4YYcdNvjhiAqFyCFCKCZ0&#10;YooVOhijiw7WCKKNB7144444Xpjiihl6hCFPOgZpJIk8IimahyX6COGMGg4ZZIhQMvmklFbWSKWT&#10;N1IppY9ejphlliV+WaaKX5p45ppa5qjmlVta+KaGXJKIZZVAiqhkhHOOCSWYDrXYppJ1ArkRmWxG&#10;iWaYSMbZ42Z/cqknh1gaCmeiJlbKqIx3FkqnnGneaealpE4YaalkVqnqqIiaauqG/mkWyuqqQ0bY&#10;6J5P1klrhieKaKuavlIKLLC5quikr5mCGuWyrSp6Jp+i1pqnpdRi1qengrbqp6hdJtptsVqiyeum&#10;nDbUrKGZ2knuuQutCqK0ZrK67Ke3CmvripNeiSmd3S7KLJjJKrror3oWHKvByWbb5Lh8SjrtqYJm&#10;tu26p/KLqqqSVgwouO9G2+OoF88KMroQu+ptqa46yrGR+WK668rG5ouomOXGXGzDM8aIc73I/vtp&#10;z81O7LLHMFc7XcSFwZrjRUiz6DROTf8U9aOeLmj11VhnrfXWLwng9ddghy322GSXbfbZaKet9tps&#10;t+3223DHLffcdNdt99145633/t58m51T34AHLvjghBdu+OGIJ6744nyvNQABBRhwgAEFPI4A15iH&#10;hEACCizAAAMCGBC6AJ8T0EDmqG+UgAMPQKAAAQQwIPrspDMQwQAIXJ767hEpIEEAEzhAgUAJNPC5&#10;ABWMboDtBOjOe+YRRC/97QdZEMDvDpxO0AADRFBA6JNPzsAAwz9PHwIUoK9+As5LFMHyyyMfQfUX&#10;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&#10;QQADIvi4FIh1Xmh5ZMN1akaZJ1ZLe6AHQICDd6AH/Ll9YeAFmDgGemCVCQAGXEAGToAFSMAFaqcB&#10;VuAENAAGQjkISuAG2hkG/jSAAF55lBsgBoJAA/55n0EgCIJgiH2ABYTYBR4ZgwkgAmbYLBqAhhsA&#10;mF94mG0GeZiHPNojrDNao/fWQRPgBXQgCBBgB4RgCD6ag01gB1yZpksgCEiABTQgqXvgBHrABVjA&#10;BXKABf56B1ZgoP/aBQq7BEogATQAB8x4AW7gBWiZBZp4BW5gBYKABXAAkn0AB+Q4jxvYhRe4hms4&#10;eCTaPcwGfhDjdb6arG/WQdl3BIZglHmABXwAlMV4AZQ6CIhAp19gBEpAikfgBW6aCFAZsfPahYOA&#10;uAkAlBtgoGEgCHiABECgBHqgCFaABFYgulcglGVAA275famCsXnZqs2i/oaB+YYleoZsBoGQ2aJd&#10;G17Zk5VvoAg82QUguQje2gQQm6WNYAWe+wdKALxxgAUoQAZAoAE0oARaAIjZV7sdPIgZu3aCAAZO&#10;IJNj4ATcmZUdvHZaII7b14ETGAMeuoYfeoEX2LTJK75z5I8xyQV8oJkLWa0pIAh2QIg9mQQWgKif&#10;uX0TIMNlWgZkYAVY4AVkgKfZ96UzWIW5WIWDIAY6WJxBoIOD+ZeD+Y5jWL1XnMVnxMUvqYdxe4g9&#10;+CQQ+QSYmAQ0HISF2ASOGIkbIJs32IdPOIMnJ4Q14J5NWMFBOIGbe8RP3M8VIKK3nMtjxMstCX43&#10;2H0TPYTfd9FFGNHj/leFHx2hU9hYzru5j8XKd0PL/ZfQZcTQK6nRI33UIb3URd3UFZ3UESDQ83eh&#10;bbiGFcACPMACOP2I0vfWcV1UPX3Xeb3Xff3XgT3YhX3Yib3Yjf3YkT3ZlX3Zmb3Znf3ZoT3apX3a&#10;qb3arf3asT3btX3bub3bvf3bwT3cxX3cyb3czf3c0T3d1X3d2b3d3f3d4T3e5X3e6b3e7f3e8T3f&#10;9X3f+b3f/f3fAT7gBX7gCb7gDf7gET7hFX7hGb7hHf7hIT7iJX7iKb7iLf7iMT7jNX7jOb7jPf7j&#10;QT7kRX7kSb7kTf7kUT7lVX7lWb7lXf7lYT7mZX7mab7mbf7mcT7nxXV+53m+533+54E+6IV+6Im+&#10;6I3+6JE+6ZV+6Zm+6Z3+6aE+6qV+6qm+6q3+6rE+67V+67m+673+68E+7MV+7Mm+7M3+7NE+7dV+&#10;7dm+7d3+7eE+7uV+7um+7u3+7vE+7/V+7/m+7/3+7wE/8AV/8Am/8A3/8BE/8RV/8Rm/8R3/8SE/&#10;8iV/8im/8i3/8jE/8zV/8zm/8z3/80E/9EV/9Em/9E3/9FE/9VV/9Vm/9V3/9WE/9mV/9mm/9m3/&#10;9nE/93U/UAICADs=</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Button("Button00","absolute","740","24","131","25",null,null,this);_a.set_taborder("0");_a.set_text("Runtime(세로)");this.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","23","64","973","501",null,null,this);_a.set_taborder("1");_a.set_binddataset("Dataset00");_a.set_cellmovingtype("col");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"117\"/><Column size=\"123\"/><Column size=\"225\"/><Column size=\"80\"/><Column size=\"262\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"PRODUCTID\"/><Cell col=\"1\" text=\"DETAILCATEGORYID\"/><Cell col=\"2\" text=\"COMPANY\"/><Cell col=\"3\" text=\"MODELNAME\"/><Cell col=\"4\" text=\"UNITCOST\"/><Cell col=\"5\" text=\"DESCRIPTION\"/><Cell col=\"6\" text=\"DISCOUNTRATE\"/></Band><Band id=\"body\"><Cell text=\"bind:PRODUCTID\"/><Cell col=\"1\" text=\"bind:DETAILCATEGORYID\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:COMPANY\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:MODELNAME\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:UNITCOST\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:DESCRIPTION\"/><Cell col=\"6\" style=\"align:right;\" text=\"bind:DISCOUNTRATE\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" text=\"합계\"/><Cell col=\"4\" displaytype=\"number\" expr=\"expr:getSum(&quot;parseInt(UNITCOST)&quot;)\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("Button01","absolute","21","24","119","25",null,null,this);_a.set_taborder("2");_a.set_text("조회");this.addChild(_a.name,_a);_a=new Button("btnDS","absolute","476","24","116","25",null,null,this);_a.set_taborder("3");_a.set_text("Dataset이용");this.addChild(_a.name,_a);_a=new Button("Button02","absolute","876","24","120","25",null,null,this);_a.set_taborder("4");_a.set_text("Runtime(가로)");this.addChild(_a.name,_a);_a=new Button("btnLocal","absolute","606","24","116","25",null,null,this);_a.set_taborder("6");_a.set_text("Local Dataset");this.addChild(_a.name,_a);_a=new Layout("default","",1024,595,this,function(_b){_b.set_classname("GridReport");_b.set_titletext("New Form");});this.addLayout(_a.name,_a);_a=null;};this.registerScript("GridReport.xfdl",function(){this.Btn_Search_onclick=function(_a,_b){var _c=application.services["svcurl"].url;this.transaction("grid_search","http://"+_c+"/ubireport/ds001.jsp","input1=Dataset01 input2=Dataset02","Dataset00=dataset01","arg1=1 arg2=2","");this.transaction("blog_grid_search","http://"+_c+"/ubireport/ds004.jsp","input1=Dataset01 input2=Dataset02","dataset11=dataset01","arg1=1 arg2=2","");};this.Btn_Report_URL_onclick=function(_a,_b){var _c=[];var _d=application.services["svcurl"].url;_c.push(["list1","http://"+_d+"/ubireport/ds001.jsp","input1=Dataset01 input2=Dataset02","dataset01=SQL01","",0]);_c.push(["list2","http://"+_d+"/ubireport/ds002.jsp","input1=Dataset01","dataset01=SQL02","arg1=1",0]);var _e={isRuntime:false,reportfile:"ubinexa_url.jrf",datasets:_c};this.showReport(_e);};this.Btn_Report_URL_Blob_onclick=function(_a,_b){var _c=[];var _d=application.services["svcurl"].url;_c.push(["search","http://"+_d+"/ubireport/ds004.jsp","input1=Dataset01 input2=Dataset02","dataset01=SQL01","",0]);var _e={isRuntime:false,reportfile:"ubinexa_url_blob.jrf",datasets:_c};this.showReport(_e);};this.Btn_Report_DS_onclick=function(_a,_b){var _c=[];_c.push(["SQL01",this.Dataset00]);var _d={isRuntime:false,reportfile:"ubinexa_ds.jrf",localdatasets:_c};this.showReport(_d);};this.Btn_Report_DS_Blob_onclick=function(_a,_b){var _c=[];_c.push(["SQL01",this.dataset11]);var _d={isRuntime:false,reportfile:"ubinexa_ds_blob.jrf",localdatasets:_c};this.showReport(_d);};this.Btn_RuntimReport_Portrait_onclick=function(_a,_b){var _c={isRuntime:true,gridobj:this.Grid00,reportfile:"portrait.tpl"};this.showReport(_c);};this.Btn_RuntimReport_Landscape_onclick=function(_a,_b){var _c={isRuntime:true,gridobj:this.Grid00,reportfile:"landscape.tpl"};_c.setIsvoiceye(true);this.showReport(_c);};this.showReport=function(_a){var _b=new ChildFrame();_a.setIsvoiceye(true);_b.init("UbiReport","absolute",30,30,900,780,null,null,"sample::UbiReport.xfdl");var _c;_c=_b.showModal(null,_a,this);};});this.on_initEvent=function(){this.Button00.addEventHandler("onclick",this.Btn_RuntimReport_Portrait_onclick,this);this.Button01.addEventHandler("onclick",this.Btn_Search_onclick,this);this.btnDS.addEventHandler("onclick",this.Btn_Report_URL_onclick,this);this.Button02.addEventHandler("onclick",this.Btn_RuntimReport_Landscape_onclick,this);this.btnLocal.addEventHandler("onclick",this.Btn_Report_DS_onclick,this);};this.loadIncludeScript("GridReport.xfdl");};})();