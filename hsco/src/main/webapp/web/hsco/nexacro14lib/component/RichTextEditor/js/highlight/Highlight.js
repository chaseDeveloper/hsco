﻿if(!window.RichTextEditor){window.RichTextEditor={};}if(!RichTextEditor.Highlight){RichTextEditor.Highlight=function(){this.editor=arguments[0];this.selection=arguments[1];this.parser=arguments[2];this.editorWin=this.editor.contentWindow;this.editorDoc=this.editor.contentDocument||this.editorWin.document;this.editorBody=this.editorDoc.body;this.stopIteration={toString:function(){return "stopIteration";}};this.indentUnit=2;this.syntaxHighlightId="__eco_pre_syntax_highlight__";RichTextEditor.Lib.array.forEach(this.parser,function(_b,_c){if(_b.toUpperCase()=="JAVASCRIPT"){this.tokenizeJavaScript=RichTextEditor.Highlight.TokenizeJavaScript.init(this);this.parserJavascript=RichTextEditor.Highlight.ParseJavaScript.init(this)||{};RichTextEditor.Util.addLinkStyle('./css/jscolors.css',this.editorDoc);}else if(_b.toUpperCase()=="JAVA"){this.tokenizeJava=RichTextEditor.Highlight.TokenizeJava.init(this);this.parserJava=RichTextEditor.Highlight.ParseJava.init(this)||{};RichTextEditor.Util.addLinkStyle('./css/javacolors.css',this.editorDoc);}else if(_b.toUpperCase()=="XML/HTML"){this.parserXml=RichTextEditor.Highlight.ParseXml.init(this)||{};RichTextEditor.Util.addLinkStyle('./css/xmlcolors.css',this.editorDoc);}},this);var _a=this;RichTextEditor.Util.addEvent(this.editorBody,"paste",function(_b){_a.onPaste(_b);});};var proto=RichTextEditor.Highlight.prototype;proto.isHighlightAncestor=function(_a){while(_a){if(RichTextEditor.DomUtil.isPre(_a)&&_a.id==this.syntaxHighlightId){return _a;}_a=_a.parentNode;}return null;};proto.onPaste=function(_a){var _b=_a.target||_a.srcElement,_c=this.isHighlightAncestor(_b),_d,_e;if(_c){_d=_c._editorParserId;try{var _f=_a.clipboardData||this.editorWin.clipboardData;if(_f){_e=_f.getData('Text');}}catch(e){}if(_e!==null){this.highlightText(_e,_d);RichTextEditor.Util.stop(_a);}}};proto.selectionNode=function(_a,_b){_a.collapse(_b);function nodeAfter(_g){var _h=null;while(!_h&&_g){_h=_g.nextSibling;_g=_g.parentNode;}return nodeAtStartOf(_h);}function nodeAtStartOf(_g){while(_g&&_g.firstChild){_g=_g.firstChild;}return {node:_g,offset:0};}var _c=_a.parentElement();if(!RichTextEditor.DomUtil.isAncestor(this.editorBody,_c)){return null;}if(!_c.firstChild){return nodeAtStartOf(_c);}var _d=_a.duplicate();_d.moveToElementText(_c);_d.collapse(true);for(var _g=_c.firstChild;_g;_g=_g.nextSibling){if(_g.nodeType==3){var _e=_g.nodeValue.length;_d.move("character",_e);}else{_d.moveToElementText(_g);_d.collapse(false);}var _f=_a.compareEndPoints("StartToStart",_d);if(_f==0){return nodeAfter(_g);}if(_f==1){continue;}if(_g.nodeType!=3){return nodeAtStartOf(_g);}_d.setEndPoint("StartToEnd",_a);return {node:_g,offset:_e-_d.text.length};}return nodeAfter(_c);};proto.getInnerNode=function(_a,_b){while(_a.nodeType!=3&&!RichTextEditor.DomUtil.isBR(_a)){var _c=_a.childNodes[_b]||_a.nextSibling,_b=0;while(!_c&&_a.parentNode){_a=_a.parentNode;_c=_a.nextSibling;}_a=_c;if(!_c){break;}}return {node:_a,offset:_b};};proto.getSelectionNode=function(){var _a=this.selection.getSelection(),_b,_c,_d,_e={};if(!_a||_a.rangeCount==0){return _e;}if(this.editorWin.getSelection){_b=_a.getRangeAt(0);_c=this.getInnerNode(_b.startContainer,_b.startOffset);_d=this.getInnerNode(_b.endContainer,_b.endOffset);}else{if(_a.createRange){_b=_a.createRange();}else{_b=_a.createTextRange();}_c=this.selectionNode(_b,true);_d=this.selectionNode(_b,false);}if(!_c||!_d){return;}return _e={start:_c,end:_d};};proto.__removeHighlight=function(){var _a=this.getSelectionNode(),_b=_a.start.node,_c=_a.end.node,_d;_d=this.isHighlightAncestor(_b);RichTextEditor.DomUtil.remove(_d);_d=this.isHighlightAncestor(_c);RichTextEditor.DomUtil.remove(_d);};proto.highlightText=function(_a,_b){if(RichTextEditor.Lib.isEmpty(_a)){return "";}var _c,_b=_b||"";if(_b.toUpperCase()=="JAVASCRIPT"){_c=this.parserJavascript;}else if(_b.toUpperCase()=="JAVA"){_c=this.parserJava;}else if(_b.toUpperCase()=="XML/HTML"){_c=this.parserXml;}else{_c=this.parserJavascript;}var _d,_e=[],_f="";_d=_c.make(this.stringStream(this.normaliseString(_a)));_f='<pre id="';_f+=this.syntaxHighlightId;_f+='"';_f+='>';try{while(true){var _g=_d.next();if(_g.value=="\n"){RichTextEditor.Lib.array.forEach(_e,function(_i,_j){_f+=_i.outerHTML;},this);_f+=RichTextEditor.EMPTY_PARAGRAPH_HTML;_e=[];}else{var _h=RichTextEditor.Util.createEle(this.editorDoc,"span");_h.className=_g.style;_h.appendChild(this.editorDoc.createTextNode(_g.value));_e.push(_h);}}}catch(e){if(e!=this.stopIteration){throw e;}}if(_e.length){RichTextEditor.Lib.array.forEach(_e,function(_i,_j){_f+=_i.outerHTML;},this);}_f+='</pre>';_f+=RichTextEditor.EMPTY_PARAGRAPH_HTML;this.pasteHtmlAtCaret(_f,false,_b);};proto.pasteHtmlAtCaret=function(_a,_b,_c){if(RichTextEditor.Lib.isEmpty(_a)){return;}var _d=this.selection.getSelection(),_e;if(this.editorWin.getSelection){if(_d.getRangeAt&&_d.rangeCount){_e=_d.getRangeAt(0);_e.deleteContents();var _f=RichTextEditor.Util.createEle(this.editorDoc,"div"),_g=this.editorDoc.createDocumentFragment(),_h,_i,_j;_f.innerHTML=_a;var _k=this.isHighlightAncestor(_e.commonAncestorContainer);if(_k){_f.innerHTML=_f.firstElementChild.innerHTML;_k._editorParserId=_c||"javascript";}while(_h=_f.firstChild){if(RichTextEditor.DomUtil.isPre(_h)&&_h.id==this.syntaxHighlightId){_h._editorParserId=_c||"javascript";}_j=_g.appendChild(_h);}_i=_g.firstChild;_e.insertNode(_g);if(_j){_e=_e.cloneRange();_e.setStartAfter(_j);if(_b){_e.setStartBefore(_i);}else{_e.collapse(true);}_d.removeAllRanges();_d.addRange(_e);if(_j.id==this.syntaxHighlightId){this.selection.selectControl(_j.lastChild,false);}}}}else{}};proto.makePartSpan=function(_a){if(RichTextEditor.Lib.isEmpty(_a)){return;}var _b=_a;if(_a.nodeType==3){_b=_a.nodeValue;}else{_a=this.editorDoc.createTextNode(_b);}var _c=RichTextEditor.Util.createEle(this.editorDoc,"span");_c.appendChild(_a);_c.currentText=_b;return _c;};proto.makePartBr=function(_a){var _b=this.selection.getRange();if(_b){if(this.editorWin&&this.editorWin.getSelection){var _c,_d,_e,_f;_e=RichTextEditor.Util.createEle(this.editorDoc,"div");_f=this.editorDoc.createDocumentFragment();_f.appendChild(_e);_c=_f.firstChild;_b.deleteContents();_b.insertNode(_f);if(!RichTextEditor.Lib.isEmpty(_c)){_d=this.isHighlightAncestor(_c);if(!RichTextEditor.Lib.isEmpty(_d)){if(_a){RichTextEditor.Util.stop(_a);}this.webkitLastLineHack(_d);_b.deleteContents();_c=RichTextEditor.Util.createEle(this.editorDoc,"br");_b.insertNode(_c);this.selection.selectControl(_c,false);}else{_b.deleteContents();}}else{_b.deleteContents();}}else{_b.pasteHTML(RichTextEditor.EMPTY_PARAGRAPH_HTML);_b.collapse(false);_b.select();if(_a){RichTextEditor.Util.stop(_a);}}}};proto.webkitLastLineHack=function(_a){if(RichTextEditor.BrowserType=="WebKit"){var _b=_a.lastElementChild;if(!_b||!_b.hackBR){var _c=RichTextEditor.Util.createEle(this.editorDoc,"br");_c.hackBR=true;_b=RichTextEditor.DomUtil.append(_a,_c);}return _b;}};proto.normaliseString=function(_a){var _b="";var _c=this;for(var _g=0;_g<this.indentUnit;_g++ ){_b+=" ";}_a=_a.replace(/\t/g,_b).replace(/\u00a0/g," ").replace(/\r\n?/g,"\n");var _d=0,_e=[],_f=_a.split("\n");for(var _h=0;_h<_f.length;_h++ ){if(_h!=0){_e.push("\n");}_e.push(_f[_h]);}return {next:function(){if(_d<_e.length){return _e[_d++ ];}else{throw _c.stopIteration;}}};};proto.stringStream=function(_a){var _b="";var _c=0;var _d="";var _e=this;function ensureChars(){while(_c==_b.length){_d+=_b;_b="";_c=0;try{_b=_a.next();}catch(e){if(e!=_e.stopIteration){throw e;}else{return false;}}}return true;}return {peek:function(){if(!ensureChars()){return null;}return _b.charAt(_c);},next:function(){if(!ensureChars()){if(_d.length>0){throw "End of stringstream reached without emptying buffer ('"+_d+"').";}else{throw _e.stopIteration;}}return _b.charAt(_c++ );},get:function(){var _f=_d;_d="";if(_c>0){_f+=_b.slice(0,_c);_b=_b.slice(_c);_c=0;}return _f;},push:function(_f){_b=_b.slice(0,_c)+_f+_b.slice(_c);},lookAhead:function(_f,_g,_h,_i){function cased(_f){return _i?_f.toLowerCase():_f;}_f=cased(_f);var _j=false;var _k=_d,_l=_c;if(_h){this.nextWhileMatches(/[\s\u00a0]/);}while(true){var _m=_c+_f.length,_n=_b.length-_c;if(_m<=_b.length){_j=_f==cased(_b.slice(_c,_m));_c=_m;break;}else if(_f.slice(0,_n)==cased(_b.slice(_c))){_d+=_b;_b="";try{_b=_a.next();}catch(e){if(e!=_e.stopIteration){throw e;}break;}_c=0;_f=_f.slice(_n);}else{break;}}if(!(_j&&_g)){_b=_d.slice(_k.length)+_b;_c=_l;_d=_k;}return _j;},lookAheadRegex:function(_f,_g){if(_f.source.charAt(0)!="^"){throw new Error("Regexps passed to lookAheadRegex must start with ^");}while(_b.indexOf("\n",_c)== -1){try{_b+=_a.next();}catch(e){if(e!=_e.stopIteration){throw e;}break;}}var _h=_b.slice(_c).match(_f);if(_h&&_g){_c+=_h[0].length;}return _h;},more:function(){return this.peek()!==null;},applies:function(_f){var _g=this.peek();return (_g!==null&&_f(_g));},nextWhile:function(_f){var _g;while((_g=this.peek())!==null&&_f(_g)){this.next();}},matches:function(_f){var _g=this.peek();return (_g!==null&&_f.test(_g));},nextWhileMatches:function(_f){var _g;while((_g=this.peek())!==null&&_f.test(_g)){this.next();}},equals:function(_f){return _f===this.peek();},endOfLine:function(){var _f=this.peek();return _f==null||_f=="\n";}};};proto.tokenizer=function(_a,_b){function isWhiteSpace(_e){return _e!="\n"&&/^[\s\u00a0]*$/.test(_e);}var _c=this;var _d={state:_b,take:function(_e){if(typeof (_e)=="string"){_e={style:_e,type:_e};}_e.content=(_e.content||"")+_a.get();if(!/\n$/.test(_e.content)){_a.nextWhile(isWhiteSpace);}_e.value=_e.content+_a.get();return _e;},next:function(){if(!_a.more()){throw _c.stopIteration;}var _e;if(_a.equals("\n")){_a.next();return this.take("whitespace");}if(_a.applies(isWhiteSpace)){_e="whitespace";}else{while(!_e){_e=this.state(_a,function(_f){_d.state=_f;});}}return this.take(_e);}};return _d;};proto=null;}