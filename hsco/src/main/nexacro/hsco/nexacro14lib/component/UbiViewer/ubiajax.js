var __ubi_isregist=true;
try {
    if (nexacro.Browser != "Runtime") {
    	__ubi_isregist=true;
    } else {
    	__ubi_isregist=false; 
    }
} catch (e) {
 __ubi_isregist=true;
}
if (__ubi_isregist) {
    function _ubi_ajax(options) {
   	 options={ 
            type: options.type || "POST",
            url: options.url || "",
            timeout: options.timeout || 60000,
            onComplete: options.onComplete || function(){},
            onError: options.onError || function(){},
            onSuccess: options.onSuccess || function(){},
            onStatus: options.onStatus || null, 
            reqdata: options.reqdata || "",
            datatype: options.datatype || "",
            exportseq: ""
        };
        if(typeof XMLHttpRequest == "undefined"){ 
      	     XMLHttpRequest=function() {
      	      return new ActiveXObject( navigator.userAgent.indexOf("MSIE 5") >= 0 ? "Microsoft.XMLHTTP" : "Msxml2.XMLHTTP" ); 
            }; 
        } 
        var xml=new XMLHttpRequest(); 
        if(options.type == "POST") { 
      	     xml.open(options.type, options.url, true); 
        } else if(options.type == "GET") { 
      	     xml.open(options.type, options.url+((options.reqdata !== "")?"?"+serialize(options.reqdata):""), true); 
        } 
        var timeoutLength=options.timeout; 
        var requestDone=false; 
        setTimeout(function() { requestDone=true; }, timeoutLength); 
        var statuslength=0; 
        xml.onreadystatechange=function() { 
        if (!xml) return; 
        try { 
            if (xml.responseText && options.onStatus) { 
                var status=xml.responseText.substring(statuslength); 
                statuslength=xml.responseText.length; 
                options.onStatus(status); 
                if (status.indexOf("ER0") == 0) { 
                    options.onError(status); 
                    options.onComplete(); 
                    xml=null; return; 
                } 
            } 
        } catch(e) { } 
        if( xml.readyState == 4 && !requestDone) { 
            if( xml.responseText.indexOf("ER0") != 0 && xml != null && httpSuccess(xml) ) { 
             var xmldata=httpData(xml, options.datatype); 
                 if (xmldata != null) { 
              	      options.exportseq=xml.getResponseHeader("exportseq"); options.onSuccess(xmldata); 
                 } else { 
              	      options.onError(xml.responseText); 
                 } 
            } else { 
                 options.onError(xml.responseText); 
            } 
            options.onComplete(); xml=null; 
        } 
    }; 
    if(options.type == "POST") { 
  	    xml.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
  	    xml.send(serialize(options.reqdata)); 
    } else { 
  	    xml.send(); 
    } 
    function httpSuccess(r) { 
   	   try{ 
   	       return (!r.status && location.protocol == "file:") || (r.status >= 200 && r.status < 300) || r.satus == 304 || navigator.userAgent.indexOf("Safari") >= 0 && typeof r.status == "undefined;"; 
       } catch(e){} 
       return false; 
    } 
    function httpData(r, type) { 
   	     var ct=r.getResponseHeader("content-type"); 
   	     var data=!type && ct && ct.indexOf("xml") >= 0; 
   	     data=type == "xml" || data ? r.responseXML : r.responseText; 
   	     if(type == "script") 
   	    	 eval.call(window, data); 
   	     return data; 
    } 
    function serialize(a) { 
   	    var s=[]; 
   	    if(a.constructor == Array) { 
   	   	    for(var i=0; i<a.length; i++) 
   	   		   s.push(a[i].name + "=" + encodeURIComponent(a[i].value)); 
   	    } else { 
   	   	    for(var j in a) 
   	   		   s.push( j + "=" + encodeURIComponent(a[j])); 
        } 
   	    return s.join("&"); 
    } 
 }
 var _UBI_REPORT_VERSION_NO="2.5";
 var _UBI_REPORT_BUILD_NO="Build 2.502.1403.1101";
 var Base=function() { };
 Base.extend=function(_instance, _static) { 
	 var extend=Base.prototype.extend; 
	 Base._prototyping=true; 
	 var proto=new this; 
	 extend.call(proto, _instance); 
	 delete Base._prototyping; 
	 var constructor=proto.constructor; 
	 var klass=proto.constructor=function() { 
		 if (!Base._prototyping) { 
			 if (this._constructing || this.constructor == klass) { 
				 this._constructing=true; 
				 constructor.apply(this, arguments); 
				 delete this._constructing; 
			 } else if (arguments[0] != null) { 
				 return (arguments[0].extend || extend).call(arguments[0], proto); 
			 } 
		  } 
	 }; 
	 klass.ancestor=this; 
	 klass.extend=this.extend; 
	 klass.forEach=this.forEach; 
	 klass.implement=this.implement; 
	 klass.prototype=proto; 
	 klass.toString=this.toString; 
	 klass.valueOf=function(type) { 
		 return (type == "object") ? klass : constructor.valueOf(); 
	 }; 
	 extend.call(klass, _static); 
	 if (typeof klass.init == "function") 
		 klass.init(); 
	 return klass;
};
Base.prototype={ 
		extend: function(source, value) { 
			if (arguments.length > 1) { 
				var ancestor=this[source]; 
				if (ancestor && (typeof value == "function") && (!ancestor.valueOf || ancestor.valueOf() != value.valueOf()) && /\bbase\b/.test(value)) { 
					var method=value.valueOf(); 
					value=function() { 
						var previous=this.base || Base.prototype.base; 
						this.base=ancestor; 
						var returnValue=method.apply(this, arguments); 
						this.base=previous; 
						return returnValue; 
					}; 
					value.valueOf=function(type) { 
						return (type == "object") ? value : method; 
					}; 
					value.toString=Base.toString; 
				} 
				this[source]=value; 
			} else if (source) { 
				var extend=Base.prototype.extend; 
				if (!Base._prototyping && typeof this != "function") { 
					extend=this.extend || extend; 
				} 
				var proto={toSource: null}; 
				var hidden=["constructor", "toString", "valueOf"]; 
				var i=Base._prototyping ? 0 : 1; 
				while (key=hidden[i++]) { 
					if (source[key] != proto[key]) { 
						extend.call(this, key, source[key]); 
					} 
				} 
				for (var key in source) { 
					if (!proto[key]) 
						extend.call(this, key, source[key]); 
				} 
			} 
			return this; 
		}, 
		base: function() { }
};
Base=Base.extend(
    { 
			constructor: function() { this.extend(arguments[0]); }
    }, 
    { 
    	ancestor: Object, version: "1.1", 
    	forEach: function(object, block, context) { 
    		for (var key in object) { 
    			if (this.prototype[key] === undefined) { 
    				block.call(context, object[key], key, object); 
    			} 
    		} 
    	}, 
        implement: function() { 
        	for (var i=0; i < arguments.length; i++) { 
        	    if (typeof arguments[i] == "function") { 
        	        arguments[i](this.prototype); 
        	    } else { 
        		    this.prototype.extend(arguments[i]); 
        		} 
        	} 
        	return this; 
         }, 
         toString: function() { 
        	 return String(this.valueOf()); 
         }
      });
function getAttributeStringValue(attributes, name){ 
	var item=attributes.getNamedItem(name); 
	if(item == null) { return ""; } 
	return item.nodeValue;
	}
function getAttributeIntValue(attributes, name){ 
	var item=attributes.getNamedItem(name); 
    if(item == null) { 
    	return 0; 
    } 
    return parseInt(item.nodeValue);
}
function getAttributeColorValue(attributes, name){ 
	var item=attributes.getNamedItem(name); 
	if(item == null) { 
		return "000000"; 
	} 
	return item.nodeValue;
}
function getAttributeBooleanValue(attributes, name){ 
	var item=attributes.getNamedItem(name); 
    if(item == null) { 
    	return false; 
    } 
    return (item.nodeValue=="1"||item.nodeValue=="true")?true:false;
}
function getAttributeBooleanValue(attributes, name, defvalue){ 
	var item=attributes.getNamedItem(name); 
	if(item == null) { 
		return defvalue; 
    } 
    return (item.nodeValue=="1"||item.nodeValue=="true")?true:false;
}
function nvl(value) { 
	if (value == null) 
		return ""; 
	return value;
}
function getNodeValue(node) { 
	try { 
		if (node == null) 
			return ""; 
		return (node.nodeValue==null?"":node.nodeValue); 
	} catch (e) { } 
	return "";
}
function makeArray() { 
	var arr=[]; 
	for(var i=0; i<arguments.length; i++) { 
		arr.push(arguments[i]); 
	} 
	return arr;
}
var UbiObject=Base.extend(
	{ classname: "", 
		constructor: function(classname) { 
	        if(typeof classname == "undefined") { 
	        	classname=UbiObject.CLASSNAME; 
	        } 
	        this.classname=classname; 
	    }, 
	    GetClassname: function(){ 
	    	return this.classname; 
	    }
	 },
	 { CLASSNAME: "UbiObject", ATTRCLASSNAME: "classname"}
    );
var UbiMap=UbiObject.extend(
		{ 
			constructor: function() { this.base(UbiMap.CLASSNAME); this.keys=new Array(); this.datum=new Array(); }, 
			Lookup: function(key){ var index=this.FindIndex(key); var rvalue; if(index >= 0) { rvalue=this.GetValue(index); } return rvalue; }, 
			SetAt: function(key, newValue){ var index=this.FindIndex(key); if (index < 0) { this.keys.push(key); this.datum.push(newValue); } else { this.SetValue(index, newValue); } }, 
			GetAt: function(index) { return this.GetKey(index); }, 
			GetCount: function(){ return this.keys.length; }, 
			FindIndex: function(key){ var index=-1; for(var i=0; i<this.GetCount(); i++) { if(key == this.GetKey(i)) { index=i; break; } } return index; }, 
			GetKey: function(index){ return this.keys[index]; }, 
			SetValue: function(index, value){ this.datum[index]=value; }, 
			GetValue: function(index){ return this.datum[index]; }
		},{ CLASSNAME: "UbiMap"}
    );
var UbiList=UbiObject.extend(
		{ 
			constructor: function() { this.base(UbiList.CLASSNAME); this.datum=new Array(); }, 
			GetSize: function() { return this.datum.length; }, 
			GetAt: function(index) { return this.datum[index]; }, 
			Add: function(value) { this.datum.push(value); return this.GetSize(); }, 
			SetAt: function(index, value) { this.datum[index]=value; return this.GetSize(); }, 
			Remove: function(index) { this.datum.splice(index, 1); }},
			{ CLASSNAME: "UbiList"}
	);
var UbiDocObject=UbiObject.extend(
		{ id: "", 
			constructor: function(classname, id){ 
				if(typeof classname == "undefined") { classname=UbiDocObject.CLASSNAME; } this.base(classname); if(typeof id == "undefined") { id=""; } this.id=id; }},
		{ CLASSNAME: "UbiDocObject", NODEOBJECT: "Object", ATTRID: "id", CreateInstance: function(node){ }}
	);
var UbiFontObject=UbiDocObject.extend(
		{ 
			name: "", 
			style: 0, 
			size: 0, 
			constructor: function(){ this.base(UbiFontObject.CLASSNAME); }, 
			getFont: function(ds) { 
				var str=""; 
				if(this.style == 0){ 
					str="normal normal " + Math.round(this.size*ds) + "px '" + this.name + "'"; 
				}else if(this.style == 1){ 
					str="normal bold " + Math.round(this.size*ds) + "px '" + this.name + "'"; 
				}else if(this.style == 2){ 
					str="italic normal " + Math.round(this.size*ds) + "px '" + this.name + "'"; 
				} else if(this.style == 3){ 
					str="italic bold " + Math.round(this.size*ds) + "px '" + this.name + "'"; 
				} 
			    return str; 
			}, 
			getFontSize: function(ds) { return Math.round(this.size*ds); }},
			{ 
				CLASSNAME: "UbiFontObject", 
				NODEFONTOBJ: "Fontobj", 
				ATTRNAME: "name", 
				ATTRSTYLE: "style", 
				ATTRSIZE: "size", 
				CreateInstance: function(node){ 
					var data=UbiFontObject.getData(node); 
					var fontobj=new UbiFontObject(); 
					fontobj.id=data.id; 
					fontobj.name=data.name; 
					fontobj.style=data.style; 
					fontobj.size=data.size; 
					return fontobj; 
				}, 
				getData: function(node) { 
					var attributes=node.attributes; 
				    return { 
				    	id: getAttributeStringValue(attributes, UbiDocObject.ATTRID), 
				    	name: getAttributeStringValue(attributes, UbiFontObject.ATTRNAME), 
				    	style: getAttributeIntValue(attributes, UbiFontObject.ATTRSTYLE), 
				    	size: getAttributeIntValue(attributes, UbiFontObject.ATTRSIZE) 
					}; 
			    }
		    }
	);
var UbiLineObject=UbiDocObject.extend(
		{ 
			type: 0, 
			thickness: 0, 
			colorid: "", 
			constructor: function(){ this.base(UbiLineObject.CLASSNAME); }, 
			getWidth : function(){ var str; str=this.thickness; return str; }, 
			getStyle : function() { 
				var str; 
				if(this.type == -1) { 
					str="none"; 
				}else if(this.type == 0) { 
					str="solid"; 
				}else if(this.type == 1) { 
					str="dotted"; 
				}else if(this.type == 2) { 
					str="dashed"; 
				}else if(this.type == 3) { 
					str="dashed"; 
				} 
			    return str; 
			}
		},
	    { 
			CLASSNAME: "UbiLineObject", 
			NODELINEOBJ: "Lineobj", 
			ATTRTYPE: "type", 
			ATTRTHICKNESS: "thickness", 
			ATTRCOLORID: "colorid", 
			CreateInstance: function(node){ 
				var data=UbiLineObject.getData(node); 
				var lineobj=new UbiLineObject(); 
				lineobj.id=data.id; 
				lineobj.type=data.type; 
				lineobj.thickness=data.thickness; 
				lineobj.colorid=data.colorid; 
				return lineobj; 
				}, 
			getData: function(node) { 
				var attributes=node.attributes; 
			    return { 
			    	id: getAttributeStringValue(attributes, UbiDocObject.ATTRID), 
			    	type: getAttributeIntValue(attributes, UbiLineObject.ATTRTYPE), 
			    	thickness: getAttributeIntValue(attributes, UbiLineObject.ATTRTHICKNESS), 
			    	colorid: getAttributeStringValue(attributes, UbiLineObject.ATTRCOLORID) 
			    	}; 
			}
		}
	);
var UbiColorObject=UbiDocObject.extend(
		{ 
			color: "", 
			constructor: function(){ 
				     this.base(UbiColorObject.CLASSNAME); 
		    }
		    },
		{ 
				CLASSNAME: "UbiColorObject", 
				NODECOLOROBJ: "Colorobj", 
				ATTRCOLOR: "color", 
			    CreateInstance: function(node){ 
			    	var data=UbiColorObject.getData(node); 
			    	var colorobj=new UbiColorObject(); 
			    	colorobj.id=data.id; 
			    	colorobj.color=data.color; 
			    	return colorobj; 
			    }, 
			getData: function(node) { 
				var attributes=node.attributes; 
				return { id: getAttributeStringValue(attributes, UbiDocObject.ATTRID), color: getAttributeColorValue(attributes, UbiColorObject.ATTRCOLOR) }; 
			}
		}
	);
var UbiBorderObject=UbiDocObject.extend(
		{ 
			top: "", 
			bottom: "", 
			left: "", 
			right: "", 
			diagonaldown: "", 
			diagonalup: "", 
			constructor: function(){ 
				this.base(UbiBorderObject.CLASSNAME); 
			}
		},
		{ 
				CLASSNAME: "UbiBorderObject", 
				NODEBORDEROBJ: "Borderobj", 
				ATTRTOP: "top", 
				ATTRBOTTOM: "bottom", 
				ATTRLEFT: "left", 
				ATTRRIGHT: "right", 
				ATTRDIAGONALDOWN: "diagonaldown", 
				ATTRDIAGONALUP: "diagonalup", 
				CreateInstance: function(node){ 
					var data=UbiBorderObject.getData(node); 
					var borderobj=new UbiBorderObject(); 
					borderobj.id=data.id; 
					borderobj.top=data.top; 
					borderobj.bottom=data.bottom; 
					borderobj.left=data.left; 
					borderobj.right=data.right; 
					borderobj.diagonaldown=data.diagonaldown; 
					borderobj.diagonalup=data.diagonalup; 
					return borderobj; 
				}, 
				getData: function(node) { 
					var attributes=node.attributes; 
					return { 
						id: getAttributeStringValue(attributes, UbiDocObject.ATTRID), 
						top: getAttributeStringValue(attributes, UbiBorderObject.ATTRTOP), 
						bottom: getAttributeStringValue(attributes, UbiBorderObject.ATTRBOTTOM), 
						left: getAttributeStringValue(attributes, UbiBorderObject.ATTRLEFT), 
						right: getAttributeStringValue(attributes, UbiBorderObject.ATTRRIGHT), 
						diagonaldown: getAttributeStringValue(attributes, UbiBorderObject.ATTRDIAGONALDOWN), 
						diagonalup: getAttributeStringValue(attributes, UbiBorderObject.ATTRDIAGONALUP) 
						}; 
				}
		}
	);
var UbiImageObject=UbiDocObject.extend(
		{ 
			width: 0, 
			height: 0, 
			originalsize: false, 
			fixedrate: false, 
			brightness: 0, 
			loadtype: 0, 
			loadsrc: "", 
			constructor: function(){ 
				this.base(UbiImageObject.CLASSNAME); }},
				{ 
					CLASSNAME: "UbiImageObject", 
					NODEIMAGEOBJ: "Imageobj", 
					ATTRWIDTH: "width", 
					ATTRHEIGHT: "height", 
					ATTRORIGINALSIZE: "originalsize", 
					ATTRFIXEDRATE: "fixedrate", 
					ATTRBRIGHTNESS: "brightness", 
					ATTRLOADTYPE: "loadtype", 
					ATTRLOADSRC: "loadsrc", 
					NODEIMAGESRC: "src", 
					CreateInstance: function(node){ 
						var data=UbiImageObject.getData(node); 
						var imageobj=new UbiImageObject(); 
						imageobj.id=data.id; 
						imageobj.width=data.width; 
						imageobj.height=data.height; 
						imageobj.originalsize=data.originalsize; 
						imageobj.fixedrate=data.fixedrate; 
						imageobj.brightness=data.brightness; 
						imageobj.loadtype=data.loadtype; 
						imageobj.loadsrc=data.loadsrc; 
						return imageobj; 
					}, 
					getData: function(node) { 
						var attributes=node.attributes; 
						return { 
							id: getAttributeStringValue(attributes, UbiDocObject.ATTRID), 
							width: getAttributeIntValue(attributes, UbiImageObject.ATTRWIDTH), 
							height: getAttributeIntValue(attributes, UbiImageObject.ATTRHEIGHT), 
							originalsize: getAttributeBooleanValue(attributes, UbiImageObject.ATTRORIGINALSIZE), 
							fixedrate: getAttributeBooleanValue(attributes, UbiImageObject.ATTRFIXEDRATE), 
							brightness: getAttributeIntValue(attributes, UbiImageObject.ATTRBRIGHTNESS), 
							loadtype: getAttributeIntValue(attributes, UbiImageObject.ATTRLOADTYPE), 
							loadsrc: getAttributeStringValue(attributes, UbiImageObject.ATTRLOADSRC) 
						}; 
				}
		}
	);
var UbiDocProperty=UbiObject.extend(
		{ 
			width: 0, height: 0, margintop: 0, marginbottom: 0, marginleft: 0, marginright: 0, pagesize: "A4", orientation: "Portrait", language:"Korean", 
			constructor: function() { 
				this.base(UbiDocProperty.CLASSNAME); }
		    },
			{ CLASSNAME: "UbiDocProperty", 
		    	NODEDOCPROPERTY: "DocProperty", 
		    	ATTRWIDTH: "width", 
		    	ATTRHEIGHT: "height", 
				ATTRMARGINTOP: "margintop", 
				ATTRMARGINBOTTOM: "marginbottom", 
				ATTRMARGINLEFT: "marginleft", 
				ATTRMARGINRIGHT: "marginright", 
				ATTRPAGESIZE: "pagesize", 
				ATTRORIENTATION: "orientation", 
				ATTRLANGUAGE: "language", 
				CreateInstance: function(parent) {
					var data=UbiDocProperty.getData(parent); var docprop=new UbiDocProperty(); docprop.width=data.width; 
					docprop.height=data.height; docprop.margintop=data.margintop; docprop.marginbottom=data.marginbottom; docprop.marginleft=data.marginleft; 
					docprop.marginright=data.marginright; docprop.pagesize=data.pagesize; docprop.orientation=data.orientation; docprop.language=data.language; 
					return docprop; 
				}, 
				getData: function(parent) { 
					var node=parent.getElementsByTagName(UbiDocProperty.NODEDOCPROPERTY)[0]; 
					var attributes=node.attributes; 
					return { 
						width: getAttributeIntValue(attributes, UbiDocProperty.ATTRWIDTH), 
						height: getAttributeIntValue(attributes, UbiDocProperty.ATTRHEIGHT), 
						margintop: getAttributeIntValue(attributes, UbiDocProperty.ATTRMARGINTOP), 
						marginbottom: getAttributeIntValue(attributes, UbiDocProperty.ATTRMARGINBOTTOM), 
						marginleft: getAttributeIntValue(attributes, UbiDocProperty.ATTRMARGINLEFT), 
						marginright: getAttributeIntValue(attributes, UbiDocProperty.ATTRMARGINRIGHT), 
						pagesize: getAttributeStringValue(attributes, UbiDocProperty.ATTRPAGESIZE), 
						orientation: getAttributeStringValue(attributes, UbiDocProperty.ATTRORIENTATION), 
						language: getAttributeStringValue(attributes, UbiDocProperty.ATTRLANGUAGE) 
					}; 
            }
		}
    );
var UbiTextStyleInfo=UbiObject.extend(
	{ 
	    constructor: function() { 
	        this.base(UbiTextStyleInfo.CLASSNAME); 
	        this.styles=new UbiList(); 
	        }
	},
	{ CLASSNAME: "UbiTextStyleInfo", NODETEXTSTYLE: "TextStyle", 
		CreateInstance: function(node) { 
			var data=UbiTextStyleInfo.getData(node); 
			var styleinfo=new UbiTextStyleInfo(); 
			var stylelist=data.stylelist; 
			if (stylelist != null) { 
				for(var i=0; i<stylelist.length; i++) { 
					var stylenode=stylelist[i]; 
					var styleobj=UbiTextStyleObject.CreateInstance(stylenode); styleinfo.styles.Add(styleobj); 
				} 
			} 
			return styleinfo; 
		}, 
		getData: function(node) { 
			return { stylelist: node.getElementsByTagName(UbiTextStyleObject.NODESTYLEOBJ) }; 
		}
	}
); 
var UbiTextStyleObject=UbiObject.extend(
		{ startindex: -1, endindex: -1, fontname: "", fontsize: -1, fontstyle: -1, fontcolor: "", underlined: false, 
			constructor: function() { 
				this.base(UbiTextStyleObject.CLASSNAME); 
			}
	    },
		{ CLASSNAME: "UbiTextStyleObject", NODESTYLEOBJ: "Style", ATTRSTARTINDEX: "startindex", ATTRENDINDEX: "endindex", ATTRFONTNAME: "fontname", 
	      ATTRFONTSIZE: "fontsize", ATTRFONTSTYLE: "fontstyle", ATTRFONTCOLOR: "fontcolor", ATTRUNDERLINED: "underlined", 
	        CreateInstance: function(node) { 
	    	    var data=UbiTextStyleObject.getData(node); 
	    	    var styleobj=new UbiTextStyleObject(); styleobj.startindex=data.startindex; 
	    	    styleobj.endindex=data.endindex; styleobj.fontname=data.fontname; 
	    	    styleobj.fontsize=data.fontsize; styleobj.fontstyle=data.fontstyle; 
	    	    styleobj.fontcolor=data.fontcolor; styleobj.underlined=data.underlined; 
	    	    return styleobj; 
	        }, 
	        getData: function(node) { 
	    	    var attributes=node.attributes; 
	    	    return { startindex: getAttributeIntValue(attributes, UbiTextStyleObject.ATTRSTARTINDEX, -1), endindex: getAttributeIntValue(attributes, UbiTextStyleObject.ATTRENDINDEX, -1), fontname: getAttributeStringValue(attributes, UbiTextStyleObject.ATTRFONTNAME, ""), fontsize: getAttributeIntValue(attributes, UbiTextStyleObject.ATTRFONTSIZE, -1), fontstyle: getAttributeIntValue(attributes, UbiTextStyleObject.ATTRFONTSTYLE, -1), fontcolor: getAttributeColorValue(attributes, UbiTextStyleObject.ATTRFONTCOLOR, ""), underlined: getAttributeBooleanValue(attributes, UbiTextStyleObject.ATTRUNDERLINED, false) }; 
	        }
	    }
);
var UbiItem=UbiObject.extend({ id: "", x: 0, y: 0, width: 0, height: 0, foregroundid: "", backgroundid: "", transparent: false, iseditable: false, ispreview : true, isprint : true, isvoiceye : false, voiceyetitle : "", linked: false, linkfilename: "", linkargs: "", linkstyle: "", constructor: function(classname) { if(typeof classname == "undefined") { classname=UbiItem.CLASSNAME; } this.base(classname); }},{ CLASSNAME: "UbiItem", NODEITEM: "Item", ATTRID: "id", ATTRX: "x", ATTRY: "y", ATTRWIDTH: "width", ATTRHEIGHT: "height", ATTRFORECOLORID: "forecolorid", ATTRBACKCOLORID: "backcolorid", ATTRTRANSPARENT: "transparent", ATTRISEDITABLE: "iseditable", ATTRISPREVIEW: "ispreview", ATTRISPRINT: "isprint", ATTRLINKED: "linked", ATTRLINKFILENAME: "linkfilename", ATTRLINKARGS: "linkarg", ATTRLINKSTYLE: "linkstyle", NODELINKARG: "Linkarg", ATTRNAME: "name", ATTRISVOICEYE: "isvoiceye", ATTRVOICEYETITLE: "voiceyetitle", CreateInstance: function(node, doc){ var attributes=node.attributes; var _classname=getAttributeStringValue(attributes, UbiObject.ATTRCLASSNAME); if (_classname == UbiTextItem.CLASSNAME) { return UbiTextItem.CreateInstance(node, doc); } else if (_classname == UbiCircleItem.CLASSNAME) { return UbiCircleItem.CreateInstance(node, doc); } else if (_classname == UbiLineItem.CLASSNAME) { return UbiLineItem.CreateInstance(node, doc); } else if (_classname == UbiRectangleItem.CLASSNAME) { return UbiRectangleItem.CreateInstance(node, doc); } else if (_classname == UbiImageItem.CLASSNAME) { return UbiImageItem.CreateInstance(node, doc); } else if (_classname == UbiBarcodeItem.CLASSNAME) { return UbiBarcodeItem.CreateInstance(node, doc); } }, SetMemberFromNode: function(item, node){ var data=UbiItem.getData(node); item.id=data.id; item.x=data.x; item.y=data.y; item.width=data.width; item.height=data.height; item.foregroundid=data.foregroundid; item.backgroundid=data.backgroundid; item.transparent=data.transparent; item.iseditable=data.iseditable; item.ispreview=data.ispreview; item.isprint=data.isprint; item.linked=data.linked; item.linkfilename=data.linkfilename; item.linkargs=data.linkargs; item.linkstyle=data.linkstyle; item.isvoiceye=data.isvoiceye; item.voiceyetitle=data.voiceyetitle; }, getData: function(node) { var attributes=node.attributes; return { id: getAttributeStringValue(attributes, UbiItem.ATTRID), x: getAttributeIntValue(attributes, UbiItem.ATTRX), y: getAttributeIntValue(attributes, UbiItem.ATTRY), width: getAttributeIntValue(attributes, UbiItem.ATTRWIDTH), height: getAttributeIntValue(attributes, UbiItem.ATTRHEIGHT), foregroundid: getAttributeStringValue(attributes, UbiItem.ATTRFORECOLORID), backgroundid: getAttributeStringValue(attributes, UbiItem.ATTRBACKCOLORID), transparent: getAttributeBooleanValue(attributes, UbiItem.ATTRTRANSPARENT), iseditable: getAttributeBooleanValue(attributes, UbiItem.ATTRISEDITABLE), ispreview: getAttributeBooleanValue(attributes, UbiItem.ATTRISPREVIEW, true), isprint: getAttributeBooleanValue(attributes, UbiItem.ATTRISPRINT, true), linked: getAttributeBooleanValue(attributes, UbiItem.ATTRLINKED), linkfilename: getAttributeStringValue(attributes, UbiItem.ATTRLINKFILENAME), linkargs: getAttributeStringValue(attributes, UbiItem.ATTRLINKARGS), linkstyle: getAttributeStringValue(attributes, UbiItem.ATTRLINKSTYLE), isvoiceye: getAttributeStringValue(attributes, UbiItem.ATTRISVOICEYE), voiceyetitle: getAttributeStringValue(attributes, UbiItem.ATTRVOICEYETITLE) }; }});var UbiTextItem=UbiItem.extend({ value: "", fontid: "", halign: 0, valign: 0, underlined: false, textdirection: true, textdirection2: 0, borderid: "", leftMargin: 0, rightMargin: 0, topMargin: 0, bottomMargin: 0, lineSpace: 0, styleinfo: null, itemvalue: "", isspacevalue: false, htmlcodeproc: 0, constructor: function() { this.base(UbiTextItem.CLASSNAME); }, getVAlign: function() { var str; if(this.valign == 0) { str="top"; }else if(this.valign == 1) { str="middle"; }else if(this.valign == 2) { str="bottom"; } return str; }, getHAlign: function() { var str; if(this.halign == 0) { str="left"; }else if(this.halign == 1) { str="center"; }else if(this.halign == 2) { str="right"; }else if(this.halign == 3) { str="justify"; }else if(this.halign == 4) { str="justify"; } return str; }},{ CLASSNAME: "UbiTextItem", NODETEXT: "Text", ATTRFONTID: "fontid", ATTRHALIGN: "halign", ATTRVALIGN: "valign", ATTRUNDERLINED: "underlined", ATTRTEXTDIRECTION: "textdirection", ATTRTEXTDIRECTION2: "textdirection2", ATTRBORDERID: "border", ATTRMARGINLEFT: "marginleft", ATTRMARGINRIGHT: "marginright", ATTRMARGINTOP: "margintop", ATTRMARGINBOTTOM: "marginbottom", ATTRLINESPACE: "linespace", ATTRISSPACEVALUE: "isspc", ATTRHTMLCODEPROC: "htmlcodeproc", NODEITEMVALUE: "ItemValue", CreateInstance: function(node, doc){ var data=UbiTextItem.getData(node); var item=new UbiTextItem(); UbiItem.SetMemberFromNode(item, node); item.value=data.value; item.fontid=data.fontid; item.halign=data.halign; item.valign=data.valign; item.underlined=data.underlined; item.textdirection=data.textdirection; item.textdirection2=data.textdirection2; item.borderid=data.borderid; item.leftMargin=data.leftMargin; item.rightMargin=data.rightMargin; item.topMargin=data.topMargin; item.bottomMargin=data.bottomMargin; item.lineSpace=data.lineSpace; item.htmlcodeproc=data.htmlcodeproc; if (data.isspacevalue == true) { item.value=item.value.substring(1, item.value.length); } if (data.styleinfonode != null) { item.value=data.itemvalue; if (data.isspacevalue == true) { item.value=item.value.substring(1, item.value.length); } item.styleinfo=UbiTextStyleInfo.CreateInstance(data.styleinfonode, doc); if (item.styleinfo.styles != null && item.styleinfo.styles.GetSize() > 0) { var styleobj=null; var orgvalue=item.value; var value=""; var styles=item.styleinfo.styles; var preindex=0; var startidx=0; var endidx=0; for (var i=0; i<styles.GetSize(); i++) { styleobj=styles.GetAt(i); startidx=styleobj.startindex; endidx=styleobj.endindex+1; if (preindex < startidx) { value += orgvalue.substring(preindex, startidx); } value += "<font style='"; if (styleobj.fontname != "") value += "font-family:" + styleobj.fontname + "; "; if (styleobj.fontsize != "") value += "font-size:" + styleobj.fontsize + "px; "; if (styleobj.fontcolor != "") value += "color:#" + styleobj.fontcolor + "; "; if (styleobj.fontstyle != -1) { if (styleobj.fontstyle == 1) value += "font-weight:bold; "; else if (styleobj.fontstyle == 2) value += "font-style:italic; "; else if (styleobj.fontstyle == 3) { value += "font-weight:bold; font-style:italic; "; } } if (styleobj.underlined != item.underlined && styleobj.underlined) { value += "text-decoration:underline; "; } value += "'>"; value += orgvalue.substring(startidx, endidx); preindex=endidx; value += "</font>"; } if (preindex < orgvalue.length) { value += orgvalue.substring(preindex, orgvalue.length); } item.value=value; } } return item; }, getData: function(node) { var textnode=node.getElementsByTagName(UbiTextItem.NODETEXT)[0]; var textattributes=textnode.attributes; return { value: (textnode.childNodes[0]==null)?"":getNodeValue(textnode.childNodes[0]), fontid: getAttributeStringValue(textattributes, UbiTextItem.ATTRFONTID), halign: getAttributeIntValue(textattributes, UbiTextItem.ATTRHALIGN), valign: getAttributeIntValue(textattributes, UbiTextItem.ATTRVALIGN), underlined: getAttributeBooleanValue(textattributes, UbiTextItem.ATTRUNDERLINED), textdirection: getAttributeBooleanValue(textattributes, UbiTextItem.ATTRTEXTDIRECTION), textdirection2: getAttributeIntValue(textattributes, UbiTextItem.ATTRTEXTDIRECTION2), borderid: getAttributeStringValue(textattributes, UbiTextItem.ATTRBORDERID), leftMargin: getAttributeIntValue(textattributes, UbiTextItem.ATTRMARGINLEFT), rightMargin: getAttributeIntValue(textattributes, UbiTextItem.ATTRMARGINRIGHT), topMargin: getAttributeIntValue(textattributes, UbiTextItem.ATTRMARGINTOP), bottomMargin: getAttributeIntValue(textattributes, UbiTextItem.ATTRMARGINBOTTOM), lineSpace: getAttributeIntValue(textattributes, UbiTextItem.ATTRLINESPACE), styleinfonode: node.getElementsByTagName(UbiTextStyleInfo.NODETEXTSTYLE)[0], isspacevalue: getAttributeBooleanValue(textattributes, UbiTextItem.ATTRISSPACEVALUE), htmlcodeproc: getAttributeIntValue(textattributes, UbiTextItem.ATTRHTMLCODEPROC), itemvalue: (textnode.getElementsByTagName(UbiTextItem.NODEITEMVALUE)[0]==null)?"":getNodeValue(textnode.getElementsByTagName(UbiTextItem.NODEITEMVALUE)[0].childNodes[0]) }; }});var UbiShapeItem=UbiItem.extend({ lineid: "", constructor: function(classname) { this.base(classname); }},{ CLASSNAME: "UbiShapeItem", NODESHAPE: "Shape", ATTRLINEID: "lineid", SetMemberFromNode: function(item, node){ var data=UbiShapeItem.getData(node); item.lineid=data.lineid; }, getData: function(node) { var attributes=node.attributes; return { lineid: getAttributeStringValue(attributes, UbiShapeItem.ATTRLINEID) }; }});var UbiCircleItem=UbiShapeItem.extend({ constructor: function() { this.base(UbiCircleItem.CLASSNAME); }},{ CLASSNAME: "UbiCircleItem", CreateInstance: function(node, doc){ var item=new UbiCircleItem(); item.doc=doc; UbiItem.SetMemberFromNode(item, node); var shapenode=node.getElementsByTagName(UbiShapeItem.NODESHAPE)[0]; UbiShapeItem.SetMemberFromNode(item, shapenode); return item; }, getData: function(node) { }});var UbiLineItem=UbiShapeItem.extend({ linedir: 0, constructor: function() { this.base(UbiLineItem.CLASSNAME); }},{ CLASSNAME: "UbiLineItem", ATTRLINEDIR: "linedir", CreateInstance: function(node, doc){ var item=new UbiLineItem(); item.doc=doc; UbiItem.SetMemberFromNode(item, node); var shapenode=node.getElementsByTagName(UbiShapeItem.NODESHAPE)[0]; var data=UbiLineItem.getData(shapenode); UbiShapeItem.SetMemberFromNode(item, shapenode); item.linedir=data.linedir; return item; }, getData: function(node) { var attributes=node.attributes; return { linedir: getAttributeIntValue(attributes, UbiLineItem.ATTRLINEDIR) }; }});var UbiRectangleItem=UbiShapeItem.extend({ edgetype: 0, edgewidth: 0, constructor: function() { this.base(UbiRectangleItem.CLASSNAME); }},{ CLASSNAME: "UbiRectangleItem", ATTREDGETYPE: "edgetype", ATTREDGEWIDTH: "edgewidth", CreateInstance: function(node, doc){ var item=new UbiRectangleItem(); item.doc=doc; UbiItem.SetMemberFromNode(item, node); var shapenode=node.getElementsByTagName(UbiShapeItem.NODESHAPE)[0]; var data=UbiRectangleItem.getData(shapenode); UbiShapeItem.SetMemberFromNode(item, shapenode); item.edgetype=data.edgetype; item.edgewidth=data.edgewidth; return item; }, getData: function(node) { var attributes=node.attributes; return { edgetype: getAttributeIntValue(attributes, UbiRectangleItem.ATTREDGETYPE), edgewidth: getAttributeIntValue(attributes, UbiRectangleItem.ATTREDGEWIDTH) }; }});var UbiImageItem=UbiItem.extend({ imageid: "", halign: 0, valign: 0, borderid: "", constructor: function() { this.base(UbiImageItem.CLASSNAME); }, getVAlign: function() { var str; if(this.valign == 0) { str="top"; }else if(this.valign == 1) { str="middle"; }else if(this.valign == 2) { str="bottom"; } return str; }, getHAlign: function() { var str; if(this.halign == 0) { str="left"; }else if(this.halign == 1) { str="center"; }else if(this.halign == 2) { str="right"; } return str; }},{ CLASSNAME: "UbiImageItem", NODEIMAGE: "Image", ATTRIMAGEID: "imageid", ATTRHALIGN: "halign", ATTRVALIGN: "valign", ATTRBORDERID: "borderid", CreateInstance: function(node, doc){ var item=new UbiImageItem(); item.doc=doc; UbiItem.SetMemberFromNode(item, node); var imagenode=node.getElementsByTagName(UbiImageItem.NODEIMAGE)[0]; var data=UbiImageItem.getData(imagenode); item.imageid=data.imageid; item.halign=data.halign; item.valign=data.valign; item.borderid=data.borderid; return item; }, getData: function(node) { var attributes=node.attributes; return { imageid: getAttributeStringValue(attributes, UbiImageItem.ATTRIMAGEID), halign: getAttributeIntValue(attributes, UbiImageItem.ATTRHALIGN), valign: getAttributeIntValue(attributes, UbiImageItem.ATTRVALIGN), borderid: getAttributeStringValue(attributes, UbiImageItem.ATTRBORDERID) }; }});var UbiBarcodeItem=UbiItem.extend({ code: "", borderid: "", loadtype: 0, loadsrc: "", constructor: function() { this.base(UbiBarcodeItem.CLASSNAME);}},{ CLASSNAME: "UbiBarcodeItem", NODEBARCODE: "Barcode", ATTRBORDERID: "borderid", ATTRLOADTYPE: "loadtype", ATTRLOADSRC: "loadsrc", CreateInstance: function(node, doc){ var item=new UbiBarcodeItem(); UbiItem.SetMemberFromNode(item, node); var barcodenode=node.getElementsByTagName(UbiBarcodeItem.NODEBARCODE)[0]; var data=UbiBarcodeItem.getData(barcodenode); item.code=data.code; item.borderid=data.borderid; item.loadtype=data.loadtype; item.loadsrc=data.loadsrc; return item; }, getData: function(node) { var attributes=node.attributes; return { code: getNodeValue(node.childNodes[0]), borderid: getAttributeStringValue(attributes, UbiBarcodeItem.ATTRBORDERID), loadtype: getAttributeIntValue(attributes, UbiBarcodeItem.ATTRLOADTYPE), loadsrc: getAttributeStringValue(attributes, UbiBarcodeItem.ATTRLOADSRC) }; }});var UbiBarcodeItem=UbiItem.extend({ code: "", borderid: "", loadtype: 0, loadsrc: "", constructor: function() { this.base(UbiBarcodeItem.CLASSNAME);}},{ CLASSNAME: "UbiBarcodeItem", NODEBARCODE: "Barcode", ATTRBORDERID: "borderid", ATTRLOADTYPE: "loadtype", ATTRLOADSRC: "loadsrc", CreateInstance: function(node, doc){ var item=new UbiBarcodeItem(); UbiItem.SetMemberFromNode(item, node); var barcodenode=node.getElementsByTagName(UbiBarcodeItem.NODEBARCODE)[0]; var data=UbiBarcodeItem.getData(barcodenode); item.code=data.code; item.borderid=data.borderid; item.loadtype=data.loadtype; item.loadsrc=data.loadsrc; return item; }, getData: function(node) { var attributes=node.attributes; return { code: getNodeValue(node.childNodes[0]), borderid: getAttributeStringValue(attributes, UbiBarcodeItem.ATTRBORDERID), loadtype: getAttributeIntValue(attributes, UbiBarcodeItem.ATTRLOADTYPE), loadsrc: getAttributeStringValue(attributes, UbiBarcodeItem.ATTRLOADSRC) }; }}
);
var UbiChartComponent=UbiObject.extend({ id: "", x: 0, y: 0, width: 0, height: 0, linked: false, linkfilename: "", linkargs: "", linkstyle: "", loadtype: 0, loadsrc: "", constructor: function() { this.base(UbiChartComponent.CLASSNAME); }},{ CLASSNAME: "UbiChartComponent", NODECHARTCOMPONENT: "Chartcomponent", ATTRID: "id", ATTRX: "x", ATTRY: "y", ATTRWIDTH: "width", ATTRHEIGHT: "height", ATTRLINKED: "linked", ATTRLINKFILENAME: "linkfilename", ATTRLINKSTYLE: "linkstyle", NODELINKARG: "Linkarg", ATTRNAME: "name", ATTRLOADTYPE: "loadtype", ATTRLOADSRC: "loadsrc", CreateInstance: function(node, doc){ var data=UbiChartComponent.getData(node); var charcomponent=new UbiChartComponent(); charcomponent.id=data.id; charcomponent.x=data.x; charcomponent.y=data.y; charcomponent.width=data.width; charcomponent.height=data.height; charcomponent.linked=data.linked; charcomponent.linkfilename=data.linkfilename; charcomponent.loadtype=data.loadtype; charcomponent.loadsrc=data.loadsrc; return charcomponent; }, getData: function(node) { var attributes=node.attributes; return { id: getAttributeStringValue(attributes, UbiChartComponent.ATTRID), x: getAttributeIntValue(attributes, UbiChartComponent.ATTRX), y: getAttributeIntValue(attributes, UbiChartComponent.ATTRY), width: getAttributeIntValue(attributes, UbiChartComponent.ATTRWIDTH), height: getAttributeIntValue(attributes, UbiChartComponent.ATTRHEIGHT), linked: getAttributeBooleanValue(attributes, UbiChartComponent.ATTRLINKED), linkfilename: getAttributeStringValue(attributes, UbiChartComponent.ATTRLINKFILENAME), linkstyle: getAttributeStringValue(attributes, UbiChartComponent.ATTRLINKSTYLE), loadtype: getAttributeIntValue(attributes, UbiChartComponent.ATTRLOADTYPE), loadsrc: getAttributeStringValue(attributes, UbiChartComponent.ATTRLOADSRC) }; }}
);
var UbiPage=UbiObject.extend({ constructor: function(doc) { this.base(UbiPage.CLASSNAME); this.doc=doc; this.items=new UbiList(); this.chartcomponents=new UbiList(); this.contents=""; this.iscustom=false; }},{ CLASSNAME: "UbiPage", NODEPAGE: "Page", ATTRPAGENUM: "pagenum", NODEFONTID: "Fontid", NODELINEID: "Lineid", NODECOLORID: "Colorid", NODEBORDERID: "Borderid", NODEOBJECTID: "Objectid", CreateInstance: function(node, doc){ var data=UbiPage.getData(node); var page=new UbiPage(doc); var itemlist=data.itemlist; for(var i=0; i<itemlist.length; i++) { var childnode=itemlist[i]; page.items.Add(UbiItem.CreateInstance(childnode, doc)); } var chartcomponentlist=data.chartcomponentlist; for(var i=0; i<chartcomponentlist.length; i++) { var childnode=chartcomponentlist[i]; page.chartcomponents.Add(UbiChartComponent.CreateInstance(childnode, doc)); } return page; }, getData: function(node) { return { itemlist: node.getElementsByTagName(UbiItem.NODEITEM), chartcomponentlist: node.getElementsByTagName(UbiChartComponent.NODECHARTCOMPONENT) }; }}
);
var UbiDoc=UbiObject.extend(
		{ 
			version: "", pagecount: 0, daemonid: "", isEnableNoPage: false, isWA: false, 
			constructor: function() { 
				this.base(UbiDoc.CLASSNAME); this.docprop; this.pages=new UbiList(); this.fonts=new UbiMap(); this.lines=new UbiMap(); this.colors=new UbiMap(); 
				this.borders=new UbiMap(); this.objects=new UbiMap(); 
			}
		},
		{ 
			CLASSNAME: "UbiDoc", NODEDOC: "Doc", ATTRVERSION: "version", ATTRPAGECOUNT: "pagecount", ATTRDAEMONID: "daemonid", ATTRENABLENOPAGE: "enableNoPage", 
			CreateInstance: function(node, flag) { 
				var docnode=node.getElementsByTagName(UbiDoc.NODEDOC)[0]; var data=UbiDoc.getData(docnode); var doc=new UbiDoc(); 
				if (flag) { 
					doc.version=data.version; doc.pagecount=data.pagecount; doc.daemonid=data.daemonid; doc.isEnableNoPage=data.enableNoPage; 
					doc.docprop=UbiDocProperty.CreateInstance(docnode); 
				} 
				var fontlist=data.fontlist; 
				for(var i=0; i<fontlist.length; i++) { 
					var fontnode=fontlist[i]; var fontobj=UbiFontObject.CreateInstance(fontnode); doc.fonts.SetAt(fontobj.id, fontobj); 
				} 
				var linelist=data.linelist; 
					for(var i=0; i<linelist.length; i++) { 
						var linenode=linelist[i]; var lineobj=UbiLineObject.CreateInstance(linenode); doc.lines.SetAt(lineobj.id, lineobj); 
					} 
					var colorlist=data.colorlist; 
					for(var i=0; i<colorlist.length; i++) { 
						var colornode=colorlist[i]; var colorobj=UbiColorObject.CreateInstance(colornode); doc.colors.SetAt(colorobj.id, colorobj); 
					} 
					var borderlist=data.borderlist; 
					for(var i=0; i<borderlist.length; i++) { 
						var bordernode=borderlist[i]; var borderobj=UbiBorderObject.CreateInstance(bordernode); doc.borders.SetAt(borderobj.id, borderobj); 
						} 
					var imagelist=data.imagelist; 
					for(var i=0; i<imagelist.length; i++) { var imagenode=imagelist[i]; var imageobj=UbiImageObject.CreateInstance(imagenode); doc.objects.SetAt(imageobj.id, imageobj); 
					} 
					var pagelist=data.pagelist; 
					for(var i=0; i<pagelist.length; i++) { var pagenode=pagelist[i]; var page=UbiPage.CreateInstance(pagenode, doc); doc.pages.Add(page); } 
					return doc; 
					}, 
					getData: function(docnode) { 
						var docattributes=docnode.attributes; 
					    return { 
					    	version: getAttributeStringValue(docattributes, UbiDoc.ATTRVERSION), 
					    	pagecount: getAttributeIntValue(docattributes, UbiDoc.ATTRPAGECOUNT), 
					    	daemonid: getAttributeStringValue(docattributes, UbiDoc.ATTRDAEMONID), 
					    	enableNoPage: getAttributeStringValue(docattributes, UbiDoc.ATTRENABLENOPAGE), 
					    	fontlist: docnode.getElementsByTagName(UbiFontObject.NODEFONTOBJ), 
					    	linelist: docnode.getElementsByTagName(UbiLineObject.NODELINEOBJ), 
					    	colorlist: docnode.getElementsByTagName(UbiColorObject.NODECOLOROBJ), 
					    	borderlist: docnode.getElementsByTagName(UbiBorderObject.NODEBORDEROBJ), 
					    	imagelist: docnode.getElementsByTagName(UbiImageObject.NODEIMAGEOBJ), 
					    	pagelist: docnode.getElementsByTagName(UbiPage.NODEPAGE) 
					    }; 
					}
				}
		);
var _ubi_cindex=0;var _ubi_iindex=0;var _ubi_imgcount=0;var _ubi_print_imgcount=0;
var UbiDocument=Base.extend(
				{ 
					jrffile : "", key : "", resid: "", keyurl : "", zindex : 0, vid:0, canvaslist: new Array(), 
					constructor: function(doc, vid, jrffile, key, resid, keyurl) { 
						this.jrffile=jrffile; this.doc=doc; this.key=key; this.resid=resid; this.keyurl=keyurl; this.zindex=0; this.vid=vid; 
					}, 
					GetReportStyle: function(doc, ds) { 
						var cssStr="."+this.vid+"ubidiv {position: absolute; margin:0px; overflow: hidden;}\n"; 
						cssStr += "."+this.vid+"ubitable { margin:0px; padding:0px; border:0px; border-spacing:0px; border-collapse:collapse; table-layout:fixed; margin: 1px 0px 0px 1px;}\n"; 
						cssStr += "."+this.vid+"ubidivtext {position: absolute; border: 0px; margin:0px; padding: 0px; letter-spacing: 0px; background-color: transparent; overflow: hidden; }\n"; 
						cssStr += "."+this.vid+"ubitd { margin:0px; padding:0px; word-wrap:break-word; white-space:pre-wrap; word-break:break-all; letter-spacing:-0.3px; text-align: center; vertical-align: middle;}\n"; 
						for (var i=0; i<doc.fonts.GetCount(); i++) { 
							key=doc.fonts.GetKey(i); 
							value=doc.fonts.GetValue(i); 
							cssStr += "."+this.vid+"font_"+ key +" {font: "+ value.getFont(ds) +"; }\n"; 
						} 
						for (var i=0; i<doc.colors.GetCount(); i++) { 
							key=doc.colors.GetKey(i); value=doc.colors.GetValue(i); 
							cssStr += "."+this.vid+"color_f_"+ key +" {color: #"+ value.color +"; }\n"; 
						    cssStr += "."+this.vid+"color_b_"+ key +" {background-color: #"+ value.color +"; }\n"; 
						} 
						cssStr += ".UbiAjaxViewerrotate_90 {-webkit-transform: rotate(90deg); -moz-transform: rotate(90deg); -o-transform: rotate(90deg); -ms-transform: rotate(90deg); }\n"; 
						cssStr += ".UbiAjaxViewerrotate_180 {-webkit-transform: rotate(180deg); -moz-transform: rotate(180deg); -o-transform: rotate(180deg); -ms-transform: rotate(180deg); }\n"; 
						cssStr += ".UbiAjaxViewerrotate_270 {-webkit-transform: rotate(270deg); -moz-transform: rotate(270deg); -o-transform: rotate(270deg); -ms-transform: rotate(270deg) }\n"; 
						cssStr += ".UbiAjaxViewervertical { -ms-writing-mode: tb-rl; -webkit-writing-mode: vertical-rl; -moz-writing-mode: vertical-rl; -ms-writing-mode: vertical-rl; writing-mode: vertical-rl }"; 
						cssStr += ".UbiAjaxViewervertical_lr { -ms-writing-mode: tb-lr; -webkit-writing-mode: vertical-lr; -moz-writing-mode: vertical-lr; -ms-writing-mode: vertical-lr; writing-mode: vertical-lr }"; 
						return cssStr; 
					}, 
					Draw: function(divid, pagenum, ds, isprint) { 
						if( typeof ds == "undefined" ) 
							ds=1.0; 
						if( typeof isprint == "undefined" ) 
							isprint=false; 
					    if( pagenum > this.doc.pages.GetSize() || pagenum <= 0 ) { 
					    	alert( pagenum + "번째 페이지는 존재하지 않습니다."); return; 
					    } 
					    var page=this.doc.pages.GetAt(pagenum - 1); 
					    var urlstr=this.keyurl + "?jrffile=" + this.jrffile + "&key=" + this.key + "&resid=" + this.resid; 
					    var isPrint=isprint; 
					    var textitems=null; 
					    var drawcanvaslist=this.canvaslist; 
					    var cssStr=this.GetReportStyle(this.doc, ds); 
					    DrawPage(divid, this.doc, page, urlstr, ds, this.vid); 
					    function DrawPage(divid, doc, page, keyurl, ds, vid) { 
					    	if (page.iscustom) { divid.innerHTML=page.contents; return; } 
					    	var styleNode=document.createElement("style"); styleNode.setAttribute("type", "text/css"); 
					    	if (__ubi_isIE && __ubi_ieVersion < 11) { styleNode.styleSheet.cssText=cssStr; 
					    	} else { 
					    		try{ styleNode.innerHTML=cssStr; }catch(e){ styleNode.innerText=cssStr; } 
					    	} 
					    	divid.appendChild(styleNode); _ubi_cindex=0; _ubi_iindex=0; textitems=new Array(); var items=page.items; 
					    	for( var i=0; i < items.GetSize(); i++ ) {
					    		var item=items.GetAt(i); 
					    		
					    		if (item) { 
					    			if( item.GetClassname() == UbiTextItem.CLASSNAME ) { 
					    				DrawTextItem(divid, doc, item, ds, vid, pagenum, i); 
					    			} else if( item.GetClassname() == UbiLineItem.CLASSNAME ) {
					    				DrawLineItem(divid, doc, item, ds); 
					    			} else if( item.GetClassname() == UbiRectangleItem.CLASSNAME ) { 
					    				DrawRectangleItem(divid, doc, item, ds); 
					    			} else if( item.GetClassname() == UbiCircleItem.CLASSNAME ) { 
					    				DrawCircleItem(divid, doc, item, ds); 
					    			} else if( item.GetClassname() == UbiBarcodeItem.CLASSNAME ) { 
					    				DrawBarcodeItem(divid, doc, item, keyurl, ds); 
					    			} else if( item.GetClassname() == UbiImageItem.CLASSNAME ) { 
					    				DrawImageItem(divid, doc, item, keyurl, ds); 
					    			}
					    		} 
					    	} 
					    	var charts=page.chartcomponents; 
					    	for( var i=0; i < charts.GetSize(); i++ ) { 
					    		var chart=charts.GetAt(i); DrawChartComponent(divid, doc, chart, keyurl, ds); 
					    	} 
					    	if (doc.isWA) { 
					    		textitems.sort(sortNumber); 
					    		var nodes=divid.childNodes; 
					    		var tabindex=12; 
					    		var width=parseInt(doc.docprop.width); 
					    		tabindex=(1000)*pagenum; 
					    		var textObj=null; 
					    		for( var i=0; i < nodes.length; i++ ) { 
					    			if( nodes[i].nodeName == "DIV" ) { 
					    				var x=parseInt(nodes[i].style.left); 
					    				var y=parseInt(nodes[i].style.top); 
					    				var key=x + y * width; 
					    				var index=findIndex(key); 
					    				if( index >= 0 ) { 
					    					textObj=document.getElementById(nodes[i].id +"_td"); 
					    				if (textObj) { 
					    					var textDivid=nodes[i].id; 
					    					textObj.setAttribute("onfocus", "_ubi_wafoucus('"+ textDivid +"')"); 
					    					textObj.setAttribute("onblur", "_ubi_wablur('"+ textDivid +"')"); 
					    					textObj.tabIndex=tabindex + index; 
					    				} 
					    			} 
					    		} 
					    	} 
					    } 
					    function findIndex(value) { 
					    	for( var i=0; i < textitems.length; i++ ) { 
					    		if( value == textitems[i] ) 
					    			return i; 
					    	} 
					    	return -1; 
					    } 
					    function sortNumber(a, b) { 
					    	return a-b; 
					    } 
					}; 
					function DrawTextItem(divid, doc, item, ds, vid, page, seq) { 
					    if( item.width == 0 || item.height == 0 ) 
					    	return; 
					    if ( item.ispreview == false ) 
					    	return; 
					    var div=document.createElement("div"); 
					    div.id=vid + "_"+ item.id +"_"+page +"_"+seq; div.className=vid + "ubidivtext "+ vid + "font_"+ item.fontid +" "+ vid + "color_f_"+ item.foregroundid + ( item.transparent ?"": " "+ vid + "color_b_"+item.backgroundid); 
					    var x=Math.round(item.x * ds); 
					    var y=Math.round(item.y * ds); 
					    var width=Math.round((item.x+item.width) * ds) - x; 
					    var height=Math.round((item.y+item.height) * ds)- y; 
					    var leftMargin=Math.round(item.leftMargin * ds); 
					    var rightMargin=Math.round(item.rightMargin * ds); 
					    var topMargin=Math.round(item.topMargin * ds); 
					    var bottomMargin=Math.round(item.bottomMargin * ds); 
					    textitems.push(parseInt(x)+(parseInt(y)*parseInt(doc.docprop.width))); 
					    var divWidth=(width + 1) - (getBorderWidth("left", doc, item) + getBorderWidth("right", doc, item)); 
					    var divHeight=(height + 1) - (getBorderWidth("top", doc, item) + getBorderWidth("bottom", doc, item)); 
					    div.style.left=x + "px"; 
					    div.style.top=y + "px"; 
					    div.style.width=divWidth + "px"; 
					    div.style.height=divHeight + "px"; 
					    var borderwidth=0; borderwidth=getBorderWidth("top", doc, item); 
					    if (borderwidth > 0) 
					    	div.style.borderTop=borderwidth + "px " + getBorderStyle("top", doc, item) + " #" + getBorderColor("top", doc, item); 
					    borderwidth=getBorderWidth("right", doc, item); 
					    if (borderwidth > 0) 
					    	div.style.borderRight=borderwidth + "px " + getBorderStyle("right", doc, item) + " #" + getBorderColor("right", doc, item); 
					    borderwidth=getBorderWidth("bottom", doc, item); 
					    if (borderwidth > 0) 
					    	div.style.borderBottom=getBorderWidth("bottom", doc, item) + "px " + getBorderStyle("bottom", doc, item) + " #" + getBorderColor("bottom", doc, item); borderwidth=getBorderWidth("left", doc, item); 
					    if (borderwidth > 0) 
					    	div.style.borderLeft=getBorderWidth("left", doc, item) + "px " + getBorderStyle("left", doc, item) + " #" + getBorderColor("left", doc, item); 
					    if(div.style.font.indexOf("bold") != -1 ) { 
					    	div.style.letterSpacing= "-1"; 
					    } 
					    var table=document.createElement("table"); 
					    var tbody=document.createElement("tbody"); 
					    var tr=document.createElement("tr"); 
					    var td=document.createElement("td"); 
					    if (item.textdirection2 == 2 || item.textdirection2 == 4) { 
					    	table.style.width=(divHeight - (topMargin + bottomMargin)) + "px"; table.style.height=(divWidth - (leftMargin + rightMargin))+ "px"; 
					    } else { 
					    	table.style.width=(divWidth - (leftMargin + rightMargin))+ "px"; table.style.height=(divHeight - (topMargin + bottomMargin)) + "px"; 
					    } 
					    var tclassname=vid+"ubitd "+ vid + "font_"+ item.fontid +" "+ vid + "color_f_"+ item.foregroundid; 
					    if (item.textdirection2 == 1) { 
					    	tclassname += " UbiAjaxViewervertical"; 
					    } else if (item.textdirection2 == 2) { 
					    	tclassname += " UbiAjaxViewerrotate_90"; 
					    	var halfwidth=(divWidth - (leftMargin + rightMargin)-2) / 2; 
					    	table.style.msTransformOrigin=halfwidth + "px " + halfwidth + "px"; 
					    	table.style.WebkitTransformOrigin=halfwidth + "px " + halfwidth + "px"; 
					    	table.style.MozTransformOrigin=halfwidth + "px " + halfwidth + "px"; 
					    } else if (item.textdirection2 == 3) { 
					    	tclassname += " UbiAjaxViewerrotate_180"; 
					    } else if (item.textdirection2 == 4) { 
					    	tclassname += " UbiAjaxViewerrotate_270"; 
					    	var halfheight=(divHeight - (topMargin + bottomMargin)) / 2; 
					    	table.style.msTransformOrigin=halfheight + "px " + halfheight + "px"; 
					    	table.style.WebkitTransformOrigin=halfheight + "px " + halfheight + "px"; 
					    	table.style.MozTransformOrigin=halfheight + "px " + halfheight + "px"; 
					    } 
					    table.className=tclassname;table.style.borderSpacing="0px"; 
					    if ( (leftMargin + rightMargin + topMargin + bottomMargin) > 0) { 
					    	table.style.marginLeft=(1+leftMargin) +"px"; table.style.marginRight=rightMargin +"px"; 
					    	table.style.marginTop=(1+topMargin) +"px"; table.style.marginBottom=bottomMargin +"px"; 
					    } 
					    if (doc.docprop.language == "Arabic") 
					    	tr.dir="rtl"; 
					    td.className=vid+"ubitd "+ vid + "font_"+ item.fontid +" "+ vid + "color_f_"+ item.foregroundid;td.id=div.id +"_td"; 
					    if (item.textdirection2 == 2) { 
					    	if (item.halign == 0) { 
					    		td.style.verticalAlign="bottom"; 
					    	} else if (item.halign == 2) {
					    		td.style.verticalAlign="top"; 
					    	}
					    	if (item.valign == 0) { 
					    		td.style.textAlign="left"; 
					    	} else if (item.valign == 2) { 
					    		td.style.textAlign="right";
					    	}
					    } else if (item.textdirection2 == 3) { 
					    	if (item.halign == 0) {
					    		td.style.textAlign="right"; 
					    	} else if (item.halign == 2) { 
					    		td.style.textAlign="left"; 
					    	}
					    	if (item.valign == 0) { 
					    		td.style.verticalAlign="bottom"; 
					    	} else if (item.valign == 2) { 
					    		td.style.verticalAlign="top"; 
					    	} 
					   } else if (item.textdirection2 == 4) { 
						   if (item.halign == 0) { 
							   td.style.verticalAlign="top"; 
						   } else if (item.halign == 2) { 
							   td.style.verticalAlign="bottom"; 
						   }
						   if (item.valign == 0) { 
							   td.style.textAlign="right"; 
						   } else if (item.valign == 2) {
							   td.style.textAlign="left"; 
						   }
					    } else if (item.textdirection2 == 1) { 
					    	if (item.valign == 0) { 
					    		td.style.textAlign="left"; 
					    	} else if (item.valign == 2) { 
					    		td.style.textAlign="right"; 
					    	}
					    } else { 
					    	if (item.halign != 1) 
					    		td.style.textAlign=item.getHAlign(); 
					    	if (item.valign != 1) 
					    		td.style.verticalAlign=item.getVAlign(); 
					    } 
					    td.style.width=table.style.width; 
					    td.style.height=table.style.height; 
					    var lineHeight=(getFontSize(doc, item, ds) + Math.round(item.lineSpace*ds)); 
					    td.style.lineHeight=lineHeight + "px"; 
					    if( item.underlined ) 
					    	td.style.textDecoration="underline"; 
					    if (item.linked) { 
					    	var alink=document.createElement("a"); 
					    	if (item.linkstyle == "SCRIPT") { 
					    		alink.href="javascript:"+item.linkfilename; 
					    	} else if (item.linkstyle == "REPORT"){ 
					    		alink.href="javascript:refreshFrame('"+ divid.parentNode.parentNode.parentNode.id +"','"+ item.linkfilename +"','"+ item.linkargs +"')"; 
					    	} else if (item.linkstyle == "WEBPAGE"){ 
					    		var url=item.linkfilename; 
					    		if (item.linkfilename.indexOf(":/"+"/") == -1 && item.linkfilename.indexOf("mailto:") == -1) { 
					    			url="http:/"+"/"+ item.linkfilename; 
					    		} 
					    		alink.href="javascript:window.open(\""+ url + item.linkargs +"\"); void 0;"; 
					    	} 
					    	alink.appendChild(document.createTextNode(item.value)); td.appendChild(alink); 
					    } else { 
					    	if (item.styleinfo != null && item.styleinfo.styles != null && item.styleinfo.styles.GetSize() > 0) { 
					    		if (__ubi_isIE && __ubi_ieVersion < 8) { 
					    			td.innerHTML="<pre style=\"margin:0px; font:"+ getFont(doc, item, ds) +"; line-height:"+lineHeight+"px\">"+ item.value +"</pre>"; 
					    		} else { td.innerHTML=item.value; } 
					    	} else { 
					    		if (__ubi_isIE && __ubi_ieVersion < 8) { 
					    			td.innerHTML="<pre style=\"margin:0px; font:"+ getFont(doc, item, ds) +"; line-height:"+lineHeight+"px\">"+ item.value +"</pre>"; 
					    	} else { 
					    		if(item.htmlcodeproc=='1'){ 
					    			td.innerHTML=item.value; 
					    		}else{ 
					    			td.appendChild(document.createTextNode(item.value)); 
					    		} 
					    	} 
					    } 
					} tr.appendChild(td); tbody.appendChild(tr); table.appendChild(tbody); div.appendChild(table); divid.appendChild(div); 
		        }; 
		    function DrawLineItem(divid, doc, item, ds) { 
		    	if ( item.ispreview == false ) 
		    		return; 
		    	var x=Math.round(item.x * ds); var y=Math.round(item.y * ds); var width=Math.round((item.x+item.width) * ds) - x; var height=Math.round((item.y+item.height) * ds)- y; 
		    	if( width == 0 || height == 0 ) { 
		    		var div=document.createElement("div"); 
		    		div.id=item.id; divid.appendChild(div); 
		    		div.style.position="absolute"; 
		    		div.style.top=y + "px"; 
		    	    div.style.left=x + "px"; 
		    	    div.style.width=((width == 0)?getLineThickness(doc, item):(width + 1)) + "px"; 
		    	    div.style.height=((height == 0)?getLineThickness(doc, item):(height + 1)) + "px"; 
		    	    if( __ubi_isIE && __ubi_ieVersion == 6 ) { 
		    	    	div.style.lineHeight='0px'; div.style.fontSize='0px'; 
		    	    } 
		    	    if( (__ubi_isIE && __ubi_ieVersion == 6) && parseInt(div.style.height) == 1 ) { 
		    		    div.style.border="0px"; 
		    		    div.style.borderTop="1px solid #" + getLineColor(doc, item); 
		    	    } else { 
		    	    	div.style.backgroundColor="#" + getLineColor(doc, item); 
		    	    } 
		    	} else { 
		    		var canvas=document.createElement("canvas"); 
		    		canvas.id=item.id + (_ubi_cindex++)+ "cv"; 
		    		divid.appendChild(canvas); 
		    		if( !canvas.getContext ) 
		    			G_vmlCanvasManager.initElement(canvas); 
		    		canvas.style.position="absolute"; 
		    		canvas.style.left=x + "px"; 
		    		canvas.style.top=y + "px"; 
		    		canvas.width=width + 1; 
		    		canvas.height=height + 1; 
		    		var ctx=canvas.getContext("2d"); 
		    		ctx.save(); 
		    		ctx.lineWidth=getLineThickness(doc, item); 
		    		ctx.strokeStyle="#" + getLineColor(doc, item); ctx.beginPath(); 
		    		if( item.linedir == 1 ) { 
		    			ctx.moveTo(0, canvas.height); 
		    			ctx.lineTo(canvas.width, 0); 
		    		} else { 
		    			ctx.moveTo(0, 0); 
		    			ctx.lineTo(canvas.width, canvas.height); 
		    		} 
		    		ctx.closePath(); 
		    		ctx.stroke(); 
		    		ctx.restore(); 
		    	} 
		    }; 
		    function DrawRectangleItem(divid, doc, item, ds) { 
		    	if( item.width == 0 && item.height == 0 ) 
		    		return; 
		    	if ( item.ispreview == false ) 
		    		return; 
		    	var x=Math.round(item.x * ds); 
		    	var y=Math.round(item.y * ds); 
		    	var width=Math.round((item.x+item.width) * ds) - x; 
		    	var height=Math.round((item.y+item.height) * ds)- y; 
		    	var canvas=document.createElement("canvas"); 
		    	canvas.id=item.id + (_ubi_cindex++)+ "cv"; 
		    	divid.appendChild(canvas); 
		    	if( !canvas.getContext ) 
		    		G_vmlCanvasManager.initElement(canvas); 
		    	canvas.style.position="absolute"; 
		    	canvas.style.left=x + "px"; 
		    	canvas.style.top=y + "px"; 
		    	canvas.width=width + 1; 
		    	canvas.height=height + 1; 
		    	if (isPrint) { 
		    		var canvasobj=new UbiCanvasObject(); 
		    	    if( item.edgetype == 1 ) { 
		    		    canvasobj.type="ROUNDRECT"; 
		    		    canvasobj.radius=item.edgewidth; 
		    	    } else { 
		    	    	canvasobj.type="RECT"; 
		    	    } 
		    	    canvasobj.canvasid=canvas.id; 
		    	    canvasobj.linewidth=getLineThickness(doc, item); 
		    	    canvasobj.strokestyle="#" + getLineColor(doc, item); 
		    	    if( !item.transparent ) { 
		    		    canvasobj.fillstyle="#" + getBackgroundColor(doc, item); 
		    	    } 
		    	    drawcanvaslist[drawcanvaslist.length]=canvasobj; 
		    	} else { 
		    		var ctx=canvas.getContext("2d"); 
		    		ctx.save(); 
		    		ctx.lineWidth=getLineThickness(doc, item); 
		    		ctx.strokeStyle="#" + getLineColor(doc, item); 
		    		ctx.beginPath(); 
		    		if( item.edgetype == 1 ) { 
		    			roundedRect(ctx, ctx.lineWidth / 2, ctx.lineWidth / 2, canvas.width - ctx.lineWidth, canvas.height - ctx.lineWidth, item.edgewidth); 
		    		} else { 
		    			ctx.rect(ctx.lineWidth / 2, ctx.lineWidth / 2, canvas.width - ctx.lineWidth, canvas.height - ctx.lineWidth); 
		    		} 
		    		ctx.closePath(); 
		    		if( !item.transparent ) { 
		    			ctx.fillStyle="#" + getBackgroundColor(doc, item); 
		    			ctx.fill(); 
		    		} 
		    		ctx.stroke(); 
		    		ctx.restore(); 
		    	} 
		    }; 
		    function roundedRect(ctx, x, y, width, height, radius){ 
		    	ctx.beginPath(); ctx.moveTo(x,y+radius); ctx.lineTo(x,y+height-radius); ctx.quadraticCurveTo(x,y+height,x+radius,y+height); ctx.lineTo(x+width-radius,y+height); 
		    	ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-radius); ctx.lineTo(x+width,y+radius); ctx.quadraticCurveTo(x+width,y,x+width-radius,y); ctx.lineTo(x+radius,y); 
		    	ctx.quadraticCurveTo(x,y,x,y+radius); 
		    }; 
		    function DrawCircleItem(divid, doc, item, ds) { 
		    	if( item.width == 0 && item.height == 0 ) return; 
		    	if ( item.ispreview == false ) return; 
		    	var x=Math.round(item.x * ds); var y=Math.round(item.y * ds); 
		    	var width=Math.round((item.x+item.width) * ds) - x; var height=Math.round((item.y+item.height) * ds)- y; 
		    	var canvas=document.createElement("canvas"); canvas.id=item.id + (_ubi_cindex++)+ "cv"; divid.appendChild(canvas); 
		    	if( !canvas.getContext ) 
		    		G_vmlCanvasManager.initElement(canvas); 
		    	canvas.style.position="absolute"; 
		    	canvas.style.left=x + "px"; 
		    	canvas.style.top=y + "px"; canvas.width=width + 1; 
		    	canvas.height=height + 1; 
		    	if (isPrint) { 
		    		var canvasobj=new UbiCanvasObject(); canvasobj.type="CIRCLE"; 
		    		canvasobj.canvasid=canvas.id; canvasobj.linewidth=getLineThickness(doc, item); 
		    	    canvasobj.strokestyle="#" + getLineColor(doc, item); 
		    	    if( !item.transparent ) { 
		    	    	canvasobj.fillstyle="#" + getBackgroundColor(doc, item); 
		    	    } 
		    	    drawcanvaslist[drawcanvaslist.length]=canvasobj; 
		    	} else { 
		    		    var ctx=canvas.getContext("2d"); ctx.save(); ctx.lineWidth=getLineThickness(doc, item); ctx.strokeStyle="#" + getLineColor(doc, item); 
		    	        var KAPPA=4 * ((Math.sqrt(2) - 1) / 3); var cx=canvas.width / 2; 
		    	        var cy=canvas.height / 2; 
		    	        var rx=cx * KAPPA; 
		    	        var ry=cy * KAPPA; 
		    	        ctx.beginPath(); 
		    	        ctx.moveTo(cx, ctx.lineWidth); 
		    	        ctx.bezierCurveTo(cx + rx, ctx.lineWidth, canvas.width - ctx.lineWidth, cy - ry, canvas.width - ctx.lineWidth, cy); 
		    	        ctx.bezierCurveTo(canvas.width - ctx.lineWidth, cy + ry, cx + rx, canvas.height - ctx.lineWidth, cx, canvas.height - ctx.lineWidth); 
		    	        ctx.bezierCurveTo(cx - rx, canvas.height - ctx.lineWidth, ctx.lineWidth, cy + ry, ctx.lineWidth, cy); 
		    	        ctx.bezierCurveTo(ctx.lineWidth, cy - ry, cx - rx, ctx.lineWidth, cx, ctx.lineWidth); ctx.closePath(); 
		    	        if( !item.transparent ) { 
		    	    	    ctx.fillStyle="#" + getBackgroundColor(doc, item); ctx.fill(); 
		    	        } 
		    	        ctx.stroke(); ctx.restore(); 
		    	} 
		    }; 
		    function DrawImageItem(divid, doc, item, keyurl, ds) { 
		    	if( item.width == 0 || item.height == 0 ) return; 
		    	if ( item.ispreview == false ) return; 
		    	if (item.imageid.indexOf("voiceye") != -1) return; 
		    	var imageDiv=getImageDiv(doc, item, ds); 
		    	var alink=null; 
		    	if (item.linked) { 
		    		var alink=document.createElement("a"); 
		    		if (item.linkstyle == "SCRIPT") { 
		    			alink.href="javascript:"+item.linkfilename; 
		    	    } else if (item.linkstyle == "REPORT"){ 
		    	    	alink.href="javascript:refreshFrame('"+ divid.parentNode.parentNode.parentNode.id +"','"+ item.linkfilename +"','"+ item.linkargs +"')"; 
		    	    } else if (item.linkstyle == "WEBPAGE"){ 
		    	    	var url=item.linkfilename; 
		    	    	if (item.linkfilename.indexOf(":/"+"/") == -1 && item.linkfilename.indexOf("mailto:") == -1) { 
		    	    		url="http:/"+"/"+ item.linkfilename; 
		    	    	} 
		    	    	alink.href="javascript:window.open(\""+ url + item.linkargs +"\"); void 0;"; 
		    	    } 
		    		alink.appendChild(imageDiv); 
		    		divid.appendChild(alink); 
		    	} else { 
		    		divid.appendChild(imageDiv); 
		    	} 
		    	var imageobj=doc.objects.Lookup(item.imageid); 
		    	if( imageobj.loadtype == 1 && imageobj.loadsrc != "" ) { 
		    		if( __ubi_isMobile ) { 
		    			var image=getImage2(doc, item, keyurl, imageobj, ds); 
		    			imageDiv.appendChild(image); 
		    	    } else { 
		    	    	var canvas=getCanvas(doc, item, ds); 
		    	    	imageDiv.appendChild(canvas); 
		    	    	var canvasobj=null; 
		    	    	drawCanvas2(doc, canvas, item, keyurl, imageobj, ds); 
		    	    } 
		    	} else if (imageobj.loadtype == 2 && imageobj.loadsrc != "" ) { 
		    		getImageType2(imageDiv, doc, item, keyurl, imageobj, ds); 
		    	} 
		    	var borderDiv=getBorderDiv(doc, item, ds); 
		    	if (item.linked) { 
		    		alink.appendChild(borderDiv); 
		    	} else { 
		    		divid.appendChild(borderDiv); 
		    	} 
		    }; 
		    function DrawBarcodeItem(divid, doc, item, keyurl, ds) { 
		    	if( item.width == 0 || item.height == 0 ) return; 
		    	if ( item.ispreview == false ) return; 
		    	var imageDiv=getImageDiv(doc, item, ds); 
		    	divid.appendChild(imageDiv); 
		    	if( item.loadtype == 1 && item.loadsrc != "" ) { 
		    		if( __ubi_isMobile ) { 
		    			var image=getImage(doc, item, keyurl, ds); 
		    		    imageDiv.appendChild(image); 
		    		} else { 
		    			var canvas=getCanvas(doc, item); 
		    			imageDiv.appendChild(canvas); 
		    			drawCanvas(doc, canvas, item, keyurl, ds); 
		    		} 
		    	} 
		    	var borderDiv=getBorderDiv(doc, item, ds); 
		    	divid.appendChild(borderDiv); 
		    }; 
		    function DrawChartComponent(divid, doc, chart, keyurl, ds) { 
		    	if( chart.width == 0 || chart.height == 0 ) 
		    		return; 
		    	var imageDiv=getImageDiv(doc, chart, ds); 
		    	divid.appendChild(imageDiv); 
		    	if( (chart.loadtype == 1 || chart.loadtype == 2) && chart.loadsrc != "" ) { 
		    		if( __ubi_isMobile ) { 
		    			var image=getImage(doc, chart, keyurl, ds); 
		    			imageDiv.appendChild(image); 
		    		} else { 
		    			var image=getChartImage(doc, chart, keyurl, ds); 
		    			imageDiv.innerHTML=image; 
		    		} 
		    	} 
		    }; 

		    function getBorderColor(tp, doc, item) { 
		    	if( tp == "top") { 
		    		return doc.colors.Lookup(doc.lines.Lookup(doc.borders.Lookup(item.borderid).top).colorid).color; 
		    	} else if( tp == "right" ) { 
		    		return doc.colors.Lookup(doc.lines.Lookup(doc.borders.Lookup(item.borderid).right).colorid).color; 
		    	} else if( tp == "bottom" ) { 
		    		return doc.colors.Lookup(doc.lines.Lookup(doc.borders.Lookup(item.borderid).right).colorid).color; 
		    	} else if( tp == "left" ) { 
		    		return doc.colors.Lookup(doc.lines.Lookup(doc.borders.Lookup(item.borderid).right).colorid).color;
		    	}
		    }; 
		    function getBorderStyle(tp, doc, item) { 
		    	if( tp == "top") { 
		    		return doc.lines.Lookup(doc.borders.Lookup(item.borderid).top).getStyle(); 
		    	} else if( tp == "right" ) { 
		    		return doc.lines.Lookup(doc.borders.Lookup(item.borderid).right).getStyle(); 
		    	} else if( tp == "bottom" ) { 
		    		return doc.lines.Lookup(doc.borders.Lookup(item.borderid).bottom).getStyle(); 
		    	} else if( tp == "left" ) { 
		    		return doc.lines.Lookup(doc.borders.Lookup(item.borderid).left).getStyle(); 
		    	}
		    }; 
		    function getBorderWidth(tp, doc, item) { 
		        var width; var style=getBorderStyle(tp, doc, item); 
		        if( tp == "top") { 
		        	width=doc.lines.Lookup(doc.borders.Lookup(item.borderid).top).getWidth(); 
		        } else if( tp == "right" ) { 
		        	width=doc.lines.Lookup(doc.borders.Lookup(item.borderid).right).getWidth(); 
		        } else if( tp == "bottom" ) { 
		        	width=doc.lines.Lookup(doc.borders.Lookup(item.borderid).bottom).getWidth(); 
		        } else if( tp == "left" ) { 
		        	width=doc.lines.Lookup(doc.borders.Lookup(item.borderid).left).getWidth(); 
		        }
		        if( style == "none" ) { 
		        	width=0;
		        } else { 
		        	if( width % 2 == 1 ) { 
		        		width=parseInt(width / 2) + 1; 
		        	} else { 
		        		width=parseInt(width / 2);
		        	}
		        }
		         
		        return width; 
		    }; 
		    function getLineThickness(doc, item) { 
		        var width=doc.lines.Lookup(item.lineid).thickness; 
		        if( width != 0 ) { 
		            if( width % 2 == 1 ) { 
		            	width=parseInt(width / 2) + 1; 
		            } else { 
		            	width=parseInt(width / 2);
		            }
		        } 
		        return width; 
		    }; 
		    function getLineColor(doc, item) { 
		    	return doc.colors.Lookup(doc.lines.Lookup(item.lineid).colorid).color; 
		    }; 
		    function getBackgroundColor(doc, item) { 
		    	return doc.colors.Lookup(item.backgroundid).color; 
		    }; 
		    function getFont(doc, item, ds) { 
		    	if( typeof ds == "undefined" ) 
		    		ds=1.0; 
		    	return doc.fonts.Lookup(item.fontid).getFont(ds); 
		    }; 
		    function getFontSize(doc, item, ds) { 
		    	if( typeof ds == "undefined" ) 
		    		ds=1.0; 
		    	return doc.fonts.Lookup(item.fontid).getFontSize(ds); 
		    }; 
		    function getForegroundColor(doc, item) { 
		    	return doc.colors.Lookup(item.foregroundid).color; 
		    }; 
		    function getImageDiv(doc, item, ds) { 
		        var x=Math.round(item.x * ds); 
		        var y=Math.round(item.y * ds); 
		        var width=Math.round((item.x+item.width) * ds) - x; 
		        var height=Math.round((item.y+item.height) * ds)- y; 
		        var div=document.createElement("div"); 
		        div.id=item.id; div.style.overflow="hidden"; 
		        div.style.position="absolute"; 
		        div.style.left=x + "px"; 
		        div.style.top=y + "px"; 
		        div.style.width=(width + 1) + "px"; 
		        div.style.height=(height + 1) + "px"; 
		        return div; 
		    }; 
		    function getBorderDiv(doc, item, ds) { 
		    	var x=Math.round(item.x * ds); 
		    	var y=Math.round(item.y * ds); 
		    	var width=Math.round((item.x+item.width) * ds) - x; 
		        var height=Math.round((item.y+item.height) * ds)- y; 
		        var div=document.createElement("div"); 
		        div.style.backgroundColor="transparent"; 
		        div.style.position="absolute"; 
		        div.style.left=x + "px"; 
		        div.style.top=y + "px"; 
		        div.style.width=(width + 1) - (getBorderWidth("left", doc, item) + getBorderWidth("right", doc, item)) + "px"; 
		        div.style.height=(height + 1) - (getBorderWidth("top", doc, item) + getBorderWidth("bottom", doc, item)) + "px"; 
		        div.style.borderTop=getBorderWidth("top", doc, item) + "px " + getBorderStyle("top", doc, item) + " #" + getBorderColor("top", doc, item); 
		        div.style.borderRight=getBorderWidth("right", doc, item) + "px " + getBorderStyle("right", doc, item) + " #" + getBorderColor("right", doc, item); 
		        div.style.borderBottom=getBorderWidth("bottom", doc, item) + "px " + getBorderStyle("bottom", doc, item) + " #" + getBorderColor("bottom", doc, item); 
		        div.style.borderLeft=getBorderWidth("left", doc, item) + "px " + getBorderStyle("left", doc, item) + " #" + getBorderColor("left", doc, item); 
		        return div; 
		    }; 
		    function getCanvas(doc, item, ctx) { 
		    	var canvas=document.createElement("canvas"); 
		    	canvas.id=item.id + (_ubi_cindex++)+ "cv"; 
		    	return canvas; 
		    }; 
		    function getImage(doc, item, keyurl, ds) { 
		    	var x=Math.round(item.x * ds); 
		    	var y=Math.round(item.y * ds); 
		    	var width=Math.round((item.x+item.width) * ds) - x; 
		    	var height=Math.round((item.y+item.height) * ds)- y; 
		    	var image=document.createElement("img"); 
		    	image.id=item.id + (_ubi_iindex++)+ "img"; 
		    	image.src=keyurl + "&reqtype=3&daemonid="+doc.daemonid+"&imageid=" + item.loadsrc; 
		    	image.style.position="absolute"; 
		    	image.style.left=0 + "px"; 
		    	image.style.top=0 + "px"; 
		    	image.style.width=(width + 1) + "px"; 
		    	image.style.height=(height + 1) + "px"; 
		    	return image; 
		    }; 
		    function getImage2(doc, item, keyurl, imageobj, ds) { 
		    	var x=Math.round(item.x * ds); var y=Math.round(item.y * ds); 
		    	var width=Math.round((item.x+item.width) * ds) - x; 
		        var height=Math.round((item.y+item.height) * ds)- y; 
		        var image=document.createElement("img"); 
		        image.id=item.id + (_ubi_iindex++)+ "img"; 
		        image.src=keyurl + "&reqtype=3&daemonid="+doc.daemonid+"&imageid=" + imageobj.loadsrc; 
		        if( imageobj.fixedrate || imageobj.originalsize ) { 
		        	var imgleft=0; var imgtop=0; 
		        	var imgwidth=(Math.round(imageobj.width*ds) / 3) + 1; 
		        	var imgheight=(Math.round(imageobj.height*ds) / 3) + 1; 
		        	if( imgwidth < (width + 1) && item.halign != 0 ) { 
		        		if( item.halign == 1 ) {
		        			imgleft=((width + 1) - imgwidth) / 2; 
		        		} else if( item.halign == 2 ) {
		        			imgleft=((width + 1) - imgwidth); 
		        		}
		        	} 
		        	if( imgheight < (height + 1) && item.valign != 0 ) { 
		        		if( item.valign == 1 ) {
		        			imgtop=((height + 1) - imgheight) / 2; 
		        		} else if( item.valign == 2 ) { 
		        			imgtop=((height + 1) - imgheight); 
		        		}
		        	} 
		        	image.style.position="absolute"; 
		        	image.style.left=imgleft + "px"; 
		        	image.style.top=imgtop + "px"; 
		        	image.style.width=imgwidth + "px"; 
		        	image.style.height=imgheight + "px"; 
		        } else { 
		        	image.style.position="absolute"; 
		        	image.style.left=0 + "px"; 
		        	image.style.top=0 + "px"; 
		        	image.style.width=(width + 1) + "px"; 
		        	image.style.height=(height + 1) + "px"; 
		        } 
		        return image; 
		    }; 
		    function getImageType2(imageDiv, doc, item, keyurl, imageobj, ds) { 
		    	var x=Math.round(item.x * ds); 
		    	var y=Math.round(item.y * ds); 
		    	var width=Math.round((item.x+item.width) * ds) - x; 
		    	var height=Math.round((item.y+item.height) * ds)- y; 
		    	_ubi_imgcount++; 
		    	newImg=new Image(); 
		    	newImg.onload=function(){ 
		    		var imgWidth=Math.floor(this.width*ds*0.75); 
		    		var imgHeight=Math.floor(this.height*ds*0.75); 
		    		var innerhtml=""; 
		    	    if (item.valign != 0) { 
		    	    	innerhtml += "<table width=\""+width+"px\" height=\""+height+"px\" cellspacing='0'><tr><td align=\""+ item.getHAlign() +"\" valign=\""+ item.getVAlign() +"\">"; 
		    	    } 
		    	    if (imageobj.originalsize) { 
		    	    	innerhtml += "<div style='left:0px;top:0px; overflow:hidden; '><img id=\"" + item.id + (_ubi_iindex++)+ "img\" width="+imgWidth+" height="+imgHeight+" src='"+imageobj.loadsrc+"' style='"; 
		    	    	if (imageobj.brightness > 0) { 
		    	    		innerhtml += " opacity:" + ((100-imageobj.brightness*2)/100) +"; " +" alpha(opacity:"+(100-imageobj.brightness*2)+");"; 
		    	    	} 
		    	    	innerhtml += "'></div>"; 
		    	    } else { 
		    	    	innerhtml += "<img id=\"" + item.id + (_ubi_iindex++)+ "img\""; innerhtml += " src=\"" + imageobj.loadsrc +"\""; innerhtml += " style=\""; 
		    	        if (imageobj.fixedrate) { 
		    	        	var hds=width / imgWidth; 
		    	        	var vds=height / imgHeight; 
		    	        	var imgds=Math.min(hds, vds); innerhtml += " width:"+ Math.floor(imgWidth*imgds) +"px; height:"+ Math.floor(imgHeight*imgds) +"px; "; 
		    	        } else { 
		    	        	innerhtml += " width:"+ width +"px; height:"+ height +"px;"; 
		    	        } 
		    	        if (imageobj.brightness > 0) { 
		    	        	innerhtml += " opacity:" + ((100-imageobj.brightness*2)/100) +"; " +" alpha(opacity:"+(100-imageobj.brightness*2)+");"; } innerhtml += "\">"; 
		    	        } 
		    	        if (item.valign != 0) { 
		    	        	innerhtml += "</td></tr></table>"; 
		    	        } 
		    	        imageDiv.innerHTML=innerhtml; 
		    	        _ubi_imgcount--; 
		    	    }; 
		    	    newImg.onerror=function(){ _ubi_imgcount--; }; 
		    	    newImg.src=imageobj.loadsrc; 
		    	    }; 
		    	    function getChartImage(doc, chart, keyurl, ds) { 
		    	    	var x=Math.round(chart.x * ds); 
		    	    	var y=Math.round(chart.y * ds); 
		    	    	var width=Math.round((chart.x+chart.width) * ds) - x; 
		    	    	var height=Math.round((chart.y+chart.height) * ds)- y; 
		    	    	var innerhtml=""; 
		    	    	var imgurl=keyurl + "&reqtype=3&daemonid="+doc.daemonid+"&imageid=" + chart.loadsrc; innerhtml += "<img id=\"chart_" + (_ubi_iindex++)+ "img\""; innerhtml += " src=\"" + imgurl +"\""; innerhtml += " style=\""; innerhtml += " width:"+ width +"px; height:"+ height +"px;"; innerhtml += "\">"; return innerhtml; 
		    	    }; 
		    	    function drawCanvas(doc, canvas, item, keyurl, ds) { 
		    	    	var x=Math.round(item.x * ds); 
		    	    	var y=Math.round(item.y * ds); 
		    	    	var width=Math.round((item.x+item.width) * ds) - x; 
		    	    	var height=Math.round((item.y+item.height) * ds)- y; 
		    	    	if( !canvas.getContext ) 
		    	    		G_vmlCanvasManager.initElement(canvas); 
		    	    	var ctx=canvas.getContext("2d"); 
		    	    	canvas.style.position="absolute"; 
		    	    	canvas.style.left=0 + "px"; 
		    	    	canvas.style.top=0 + "px"; 
		    	    	canvas.width=width + 1; 
		    	    	canvas.height=height + 1; 
		    	    	var image=new Image(); 
		    	    	image.id=item.id + (_ubi_iindex++)+ "img"; 
		    	    	image.onload=function() { 
		    	    		ctx.drawImage(image, 0, 0, canvas.width, canvas.height); 
		    	    	};
		    	    	
		    	    	image.src=keyurl + "&reqtype=3&daemonid="+doc.daemonid+"&imageid=" + item.loadsrc; 
		    	    }; 
		    	    function drawCanvas2(doc, canvas, item, keyurl, imageobj, ds) { 
		    	    	var x=Math.round(item.x * ds); 
		    	    	var y=Math.round(item.y * ds); 
		    	    	var width=Math.round((item.x+item.width) * ds) - x; 
		    	    	var height=Math.round((item.y+item.height) * ds)- y; 
		    	    	if( !canvas.getContext ) 
		    	    		G_vmlCanvasManager.initElement(canvas); 
		    	    	var ctx=canvas.getContext("2d"); 
		    	    	canvas.style.position="absolute"; 
		    	    	canvas.style.left=0 + "px"; 
		    	    	canvas.style.top=0 + "px"; 
		    	    	canvas.width=width + 1; 
		    	    	canvas.height=height + 1; 
		    	    	var imgleft=0; 
		    	    	var imgtop=0; 
		    	    	var imgwidth=canvas.width; 
		    	    	var imgheight=canvas.height; 
		    	    	if( imageobj.fixedrate || imageobj.originalsize ) { 
		    	    		imgwidth=(Math.round(imageobj.width * ds) / 3) + 1; 
		    	    		imgheight=(Math.round(imageobj.height * ds) / 3) + 1; 
		    	    	    if( imgwidth < canvas.width && item.halign != 0 ) { 
		    	    		    if( item.halign == 1 ) { 
		    	    			    imgleft=(canvas.width - imgwidth) / 2; 
		    	    		    } else if( item.halign == 2 ) { 
		    	    			    imgleft=(canvas.width - imgwidth);
		    	    		    }
		    	    	    } 
		    	    	    if( imgheight < canvas.height && item.valign != 0 ) { 
		    	    		    if( item.valign == 1 ) { 
		    	    		    	imgtop=(canvas.height - imgheight) / 2; 
		    	    		    } else if( item.valign == 2 ) { 
		    	    		    	imgtop=(canvas.height - imgheight);
		    	    		    }
		    	    	    } 
		    	        } 
		    	        var image=new Image(); 
		    	        image.id=item.id + (_ubi_iindex++)+ "img"; 
		    	        image.onload=function() { 
		    	    	    if (isPrint == false) { 
		    	    		    ctx.drawImage(image, imgleft, imgtop, imgwidth, imgheight); 
		    	    	    } 
		    	        }; 
		    	        if (imageobj.loadtype == 2) { 
		    	    	    image.src=imageobj.loadsrc; 
		    	        } else { 
		    	    	    image.src=keyurl + "&reqtype=3&daemonid="+doc.daemonid+"&imageid=" + imageobj.loadsrc; 
		    	        } 
		    	        if (isPrint) { 
		    	    	    var canvasobj=new UbiCanvasObject(); 
		    	    	    canvasobj.type="IMAGE"; 
		    	    	    canvasobj.canvasid=canvas.id; 
		    	    	    canvasobj.imageid=image.id; 
		    	    	    canvasobj.x=imgleft; 
		    	    	    canvasobj.y=imgtop; 
		    	    	    canvasobj.width=imgwidth; 
		    	    	    canvasobj.height=imgheight; 
		    	    	    canvasobj.src=image.src; 
		    	    	    drawcanvaslist[drawcanvaslist.length]=canvasobj; 
		    	        } 
		    	    }; 
		        }
		    }
	);
	var UbiCanvasObject=Base.extend(
		{ 
				type: "", divid: "", canvasid: "", imageid: "", left: 0, top: 0, width: 0, height: 0, src: "", linewidth: 0, strokestyle: "", fillstyle: "", radius: 0
		}
	);
	var __ubi_isFF=false;
	var __ubi_isIE=false;
	var __ubi_isChrome=false;
	var __ubi_isOpera=false;
	var __ubi_isSafari=false;
	var __ubi_isMacOS=false;
	var __ubi_ieVersion=6;
	var __ubi_isMobile=false;
	var mobileKeyWords=new Array('iPhone', 'iPod', 'iPad', 'BlackBerry', 'Android', 'Windows CE', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson');
	try{ 
		for (var word in mobileKeyWords) { 
			if( navigator.userAgent.match(mobileKeyWords[word]) != null ) { 
				__ubi_isMobile=true; 
				break; 
			} 
		};
	}catch(e){}
	if (navigator.userAgent.indexOf('Macintosh')!= -1) 
		__ubi_isMacOS=true;
	if (navigator.userAgent.indexOf('Trident/7')!= -1 && navigator.appName.indexOf("Netscape")!= -1 && navigator.product == "Gecko") { 
		__ubi_isIE=true; 
		__ubi_ieVersion=11;
	}else if (navigator.userAgent.indexOf('Chrome')!= -1) { 
		if (navigator.userAgent.indexOf('OPR')!= -1) { 
			__ubi_isOpera=true; 
		} else { 
			__ubi_isChrome=true; 
		}
	}else if (navigator.userAgent.indexOf('Firefox')!= -1) { 
		__ubi_isFF=true;
	}else if ((navigator.userAgent.indexOf('Safari')!= -1)||(navigator.userAgent.indexOf('Konqueror') != -1)) { 
		__ubi_isSafari=true;
	}else if (navigator.userAgent.indexOf('Opera')!= -1) { 
		__ubi_isOpera=true; 
		_OperaRv=parseFloat(navigator.userAgent.substr(navigator.userAgent.indexOf('Opera')+6, 3));
	}else if (navigator.appName.indexOf("Microsoft")!= -1) { 
		__ubi_isIE=true; 
		if (navigator.appVersion.indexOf("MSIE 10.0")!= -1 && document.compatMode != "BackCompat") { 
			__ubi_ieVersion=10; 
		} 
		if (navigator.appVersion.indexOf("MSIE 9.0")!= -1 && document.compatMode != "BackCompat") { 
			__ubi_ieVersion=9; 
		} 
		if (navigator.appVersion.indexOf("MSIE 8.0")!= -1 && document.compatMode != "BackCompat") { 
			__ubi_ieVersion=8; 
		} 
		if (navigator.appVersion.indexOf("MSIE 7.0")!= -1) { 
			__ubi_ieVersion=7; 
		}
	}else { 
		__ubi_isFF=true;
	};
	if (__ubi_isIE) { 
		if (window.XMLHttpRequest==null) 
			__ubi_ieVersion=6;};
		function _ubi_checkPdfReader() { 
			var obj=null; 
			if (__ubi_isIE) { 
				try { 
					obj=new ActiveXObject("AcroPDF.PDF"); 
					if( obj != null ) 
						return true; 
				} catch(e){ 
					try { 
						obj=new ActiveXObject("PDF.PdfCtrl"); 
					    if( obj != null ) 
					    	return true; 
					} catch(e1) { } 
				} 
			} else { 
				var nav=navigator.plugins; 
				for ( var i=0; i < nav.length; i++) { 
					var name=nav[i].name; 
					if( name.indexOf("Adobe Reader") != -1 || name.indexOf("Adobe PDF") != -1 || name.indexOf("Acrobat") != -1 || name.indexOf("Chrome PDF") != -1 ) { 
						var version=nav[i].version; 
						return true; 
					} 
				} 
			} 
			return false;
		}
		function _ubi_AddEvent(obj, evt, fn) { 
			evt=(evt.indexOf(" ") != -1) ? evt.split(" ") : [ evt ]; 
			for (i in evt) { 
				var e=evt[i]; 
				if (e == "mousewheel") { 
					if (obj.addEventListener) 
						obj.addEventListener('DOMMouseScroll', fn, false); 
					obj.onmousewheel=fn; 
					break; 
				} 
				if (obj.addEventListener) {
					obj.addEventListener((e == "mousewheel") ? "DOMMouseScroll" : e, fn, false); 
			    } else if (obj.attachEvent) { 
			    	obj.attachEvent('on' + e, fn);
		        }
			}
		}
		function _ubi_RemoveAddEvent(obj, evt, fn) { 
			evt=(evt.indexOf(" ") != -1) ? evt.split(" ") : [ evt ]; 
			for (i in evt) { 
				var e=evt[i]; 
				if (e == "mousewheel") { 
					if (obj.removeEventListener) 
						obj.removeEventListener('DOMMouseScroll', fn, false); 
					obj.onmousewheel=null; 
					break; 
				} 
				if (obj.removeEventListener) { 
					obj.removeEventListener((e == "mousewheel") ? "DOMMouseScroll" : e, fn, false); 
				} else if (obj.detachEvent) {
					obj.detachEvent('on' + e, fn);
				}
			}
		}
		function _ubi_strToBool(str) { 
			if (str == "true") 
				return true; 
			if (str == "false") 
				return false; 
			return str;
		}
		function _ubi_strToInt(str) { 
			var val=0; 
			if (str) { 
				try { 
					val=parseInt(str); 
				} catch (e) { 
					val=0; 
				} 
			} 
			return val;
		}
		function _ubi_isNumber(s) { 
			s += ''; s=s.replace(/^\s*|\s*$/g, ''); 
			if (s == '' || isNaN(s)) 
				return false; 
			return true;
		}
		function _ubi_getMessage(language, key) { 
			if(typeof(_ubi_msg)=="undefined") { 
				_ubi_msg={'korean':{ "PrintDlgTitle": "\uC778\uC1C4 \uBC94\uC704\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.", "PrintDlgAll": "\uBAA8\uB450", "PrintDlgCurrent": "\uD604\uC7AC", "PrintDlgFromTo": "\uD398\uC774\uC9C0 \uC9C0\uC815", "PrintDlgFrom": "\uBD80\uD130", "PrintDlgTo": "\uAE4C\uC9C0", "PrintDlgHMent": "Internet Explorer\uC5D0\uC11C \uAC00\uB85C \uC591\uC2DD\uC740 \uC778\uC1C4 \uBBF8\uB9AC \uBCF4\uAE30", "PrintDlgHMent2": "\uC635\uC158\uC5D0\uC11C \uC6A9\uC9C0 \uBC29\uD5A5\uC744 \uBCC0\uACBD\uD558\uC5EC \uC778\uC1C4\uD558\uC138\uC694.", "PrintDlgLink": "\uC790\uC138\uD788 \uBCF4\uAE30", "PrintDlgMent": "\u203B \uC778\uC1C4\uB7C9\uC774 \uB9CE\uC544\uC11C \uBD80\uBD84\uC778\uC1C4\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4.", "Button_OK": "\uD655\uC778", "Button_Cancel": "\uCDE8\uC18C", "PdfCheckMsg9": "Adobe Reader\uC758 \uBC84\uC804\uC774 \uC124\uCE58\uB418\uC5B4\uC788\uC9C0 \uC54A\uAC70\uB098, 9 \uBC84\uC804 \uC774\uD558\uC758 \uC624\uB798\uB41C \uBC84\uC804\uB9CC \uC124\uCE58\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.", "PdfCheckMsg6": "Adobe Reader\uC758 \uBC84\uC804\uC774 \uC124\uCE58\uB418\uC5B4\uC788\uC9C0 \uC54A\uAC70\uB098, 6 \uBC84\uC804 \uC774\uD558\uC758 \uC624\uB798\uB41C \uBC84\uC804\uB9CC \uC124\uCE58\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.", "PdfGuideMsg": "<a href='http:/"+""+"/get.adobe.com/kr/reader/' target='_blank' style='text-decoration:none; color:red; cursor:pointer;'><b>\uC5B4\uB3C4\uBE44 \uD648\uD398\uC774\uC9C0</b></a>\uC5D0\uC11C \uCD5C\uC2E0 Adobe Reader\uB97C<br> \uC124\uCE58\uD558\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4." }}; 
		    } 
		    var rtnstr=""; 
		    if (_ubi_msg[language]) { 
			    if (_ubi_msg[language]["Button_OK"] != undefined) 
			    	rtnstr=_ubi_msg[language]["Button_OK"]; 
			} 
		    return rtnstr;
		}
		function _ubi_wafoucus(id) { 
			if (!id) 
				return; 
			var obj=null; 
			if (typeof(id) == "object") { 
				obj=id; 
			} else { 
				obj=document.getElementById(id); 
			} 
			if (obj) { 
				obj.setAttribute("orgstyle", obj.style.cssText); 
				obj.style.border="2px solid #FF0000"; 
			}
		}
		function _ubi_wablur(id) { 
			if (!id) return; 
			var obj=null; 
			if (typeof(id) == "object") { 
				obj=id; 
			} else { 
				obj=document.getElementById(id); 
			} 
			if (obj) { 
				obj.style.cssText=obj.getAttribute("orgstyle"); 
			}
		}
		var __ubi_viewers=[];
		var __ubi_URF="0";
		var __ubi_EXPORT_IMAGE="10";
		var __ubi_EXPORT_PDF="11";
		var __ubi_EXPORT_EXCEL1="12";
		var __ubi_EXPORT_EXCEL2="13";
		var __ubi_EXPORT_RTF="14";
		var __ubi_EXPORT_HWP="15";
		var __ubi_EXPORT_PPTX="16";
		var __ubi_EXPORT_HML="17";
		var __ubi_EXPORT_DOCX="18";
		var __ubi_EXPORT_CELL="19";
		var __ubi_PAGE="91";
		var __ubi_TOTAL_PAGE="99";
		var __ubi_EXPORT_JOB="93";
		var __ubi_EXPORT_RESULT="94";
		var __ubi_exportMap={ 
				'SAVE_PDF' : __ubi_EXPORT_PDF, 'PDF' : __ubi_EXPORT_PDF, 'EXCEL_TYPE1': __ubi_EXPORT_EXCEL1, 'EXCEL_TYPE2': __ubi_EXPORT_EXCEL2, 'SAVE_RTF' : __ubi_EXPORT_RTF, 'RTF' : __ubi_EXPORT_RTF, 'SAVE_HWP' : __ubi_EXPORT_HWP, 'HWP' : __ubi_EXPORT_HWP, 'SAVE_PPTX' : __ubi_EXPORT_PPTX, 'PPTX' : __ubi_EXPORT_PPTX, 'SAVE_HML' : __ubi_EXPORT_HML, 'HML' : __ubi_EXPORT_HML, 'SAVE_DOCX' : __ubi_EXPORT_DOCX, 'DOCX' : __ubi_EXPORT_DOCX, 'SAVE_CELL' : __ubi_EXPORT_CELL, 'CELL' : __ubi_EXPORT_CELL 
				};
		var UbiViewer=Base.extend(
				{ 
					key: "", page: 0, totalPage: 0, PrintDefaultType : "PDF", SaveDefaultType : "", SaveExcelDefaultType : "EXCEL_TYPE1", exportSeq : -1, vid : null, viewer : this, daemonValid : false, pageWidth : 0, pageHeight : 0, pageOrientation : "Portrait", _isMultiDocument: false, _scrollUpdateTimerID : null, 
					constructor: function(params, styles, events) { 
						this.params={ 
								reqtype: __ubi_URF, imageid: "", div: params.div || document.getElementById(params.divid), key: params.key || "", gatewayurl: params.gatewayurl || "", printurl: params.printurl || "", timeout: params.timeout || "60000", jrffile: params.jrffile || "", masterfilename: params.masterfilename || "", resid: params.resid || "", arg: params.arg || "", ismultireport: params.ismultireport || "false", multicount: params.multicount || "1", exportseq: params.exportseq || "", reporttitle: params.reporttitle || "", sheetname: params.sheetname || "", toolbar: params.toolbar || "true", resource: params.resource || "", divid: params.divid || params.div.id, skin: params.skin || "standard", scale: params.scale || "PageWidth", userscale: params.userscale || "0", isencrypt: params.isencrypt || "false", bgcolor: params.bgcolor || "#f3f3f3", bgimage: params.bgimage || "", flicking: params.flicking || "false", scrollpage: params.scrollpage || "false", isStreaming: params.isStreaming || "false", issvg: params.issvg || "false", direction: params.direction || "", language: params.language || "ko", printlimit: params.printlimit || "20", isexportchartimage : params.isexportchartimage || "true", exceladjustpage : params.exceladjustpage || "false", excelExportLineItem : params.excelExportLineItem || "false", streamdata : params.streamdata || "", clienttype : params.clienttype || "", datasetinfos : params.datasetinfos || "", runtimedata: params.runtimedata || "", isvoiceye : params.isvoiceye || "false", iswa : params.iswa || "false", isredbc : params.isredbc || "false", password : params.password || "", drmdocnumber : params.drmdocnumber || "", drmdocname : params.drmdocname || "", drmpagenames : params.drmpagenames || "", hmlTableProtect : params.hmlTableProtect || "false", daemonid : "" 
						}; 
						if (styles == undefined) 
							styles={}; 
						this.styles={ margin: styles.margin || "10", pagegap: styles.pagegap || "10", pageborder: styles.pageborder || "true", pagebordercolor: styles.pagebordercolor || "#A0A0A0", toolbarbgcolor: styles.toolbarbgcolor || "#909090" }; 
						if (events == undefined) 
							events={}; 
						this.events={ printEnd: events.printEnd, exportEnd: events.exportEnd }; 
						if (_ubi_strToBool(this.params.issvg)) { 
							if (__ubi_isIE && __ubi_ieVersion < 9) { 
								alert("IE8 이하에서는 HTML5 뷰어 기능을 지원하지 않습니다.\nHTML4 뷰어로 미리보기를 진행합니다."); 
								this.params.issvg=false; 
							} else { 
								this.params.isStreaming=true; 
								this.params.scrollpage=true; 
							} 
						} 
						this.vid=this.params.divid; var params=this.params; var styles=this.styles; 
						for(var viewerIndex in __ubi_viewers) { 
							if(__ubi_viewers[viewerIndex]) { 
								if(this.vid == __ubi_viewers[viewerIndex].vid) { 
									__ubi_viewers[viewerIndex].destroy(); 
									__ubi_viewers[viewerIndex]=null; 
								} 
							} 
						} 
						__ubi_viewers[this.vid]=this; 
						_ubi_AddEvent(window, "resize", function() { __ubi_viewers[params.divid].resize(); } ); 
						this.page=1; 
						this.totalPage=0; 
						this.toolbarHeight=44; 
						this.msgWidth=380; 
						this.msgHeight=122; 
						this.msg=""; 
						this.divMain=null; 
						this.divToolbar=null; 
						this.divPreviewFrame=null; 
						this.divCanvas=null; 
						this.divLoadImage=null; 
						this.divMsg=null; 
						this.toolbar=null; 
						this.ubidoc=null; 
						this.divMain=params.div; 
						var divMain=this.divMain; 
						divMain.style.textAlign="center"; 
						this.divToolbar=document.createElement("div"); 
						var divToolbar=this.divToolbar; divToolbar.id=params.divid + "_toolbar"; 
						if( params.toolbar == "false" ) 
							this.toolbarHeight=0; 
						divToolbar.style.height=this.toolbarHeight + 'px'; 
						divToolbar.style.whiteSpace="nowrap"; 
						divToolbar.style.overflow="hidden"; 
						divToolbar.style.backgroundColor=styles.toolbarbgcolor; 
						divMain.appendChild(divToolbar); 
						this.toolbar=new UbiPreviewToolbar(this); 
						if (params.iswa == true || params.iswa == "true") { 
								this.toolbar.applyWA(params.divid); 
						} 
						this.toolbar.setCurrScale(params.scale); 
						if (!__ubi_isIE) { this.toolbar.setVisibleToolbar("PRINTSET", false); } 
						if (_ubi_strToBool(params.isredbc) == true) { 
								this.toolbar.setVisibleToolbar("SAVE", false); 
								this.toolbar.setVisibleToolbar("PRINT_PDF", false); 
								this.toolbar.setVisibleToolbar("PRINT_HTML", false); 
								this.toolbar.setVisibleToolbar("PRINTSET", false); 
								this.setPrintMenu("PDF"); 
						} 
						this.divPreviewFrame=document.createElement("div"); var divPreviewFrame=this.divPreviewFrame; divPreviewFrame.id=params.divid + "_previewframe"; 
						if( params.bgimage == "" ) {
								divPreviewFrame.style.backgroundColor=params.bgcolor; 
						} else { 
								divPreviewFrame.style.backgroundImage="url(" + params.bgimage + ")"; 
						}
						divPreviewFrame.style.position="relative"; 
						divPreviewFrame.style.margin="0px"; 
						divPreviewFrame.style.padding="0px"; 
						divPreviewFrame.style.width="100%"; 
						divPreviewFrame.style.height=(parseInt(divMain.style.height) - parseInt(divToolbar.style.height)) + 'px'; 
						divPreviewFrame.style.overflow="auto"; 
						divPreviewFrame.style.textAlign="center"; 
						divPreviewFrame.style.MozUserSelect="none"; 
						divPreviewFrame.style.webkitUserSelect="none"; 
						divMain.appendChild(divPreviewFrame); 
						var tmpviewer=this; 
						_ubi_AddEvent(divPreviewFrame, "scroll", function(){ 
								clearTimeout(tmpviewer._scrollUpdateTimerID); 
								tmpviewer._scrollUpdateTimerID=setTimeout(function(){tmpviewer._scrollUpdate();},100); 
							}); 
						this.divMsg=document.createElement("div"); 
						var divMsg=this.divMsg; 
						divMsg.id=params.divid + "_msg"; 
						divMsg.style.display="none"; 
						divMsg.style.position="absolute"; 
						divMsg.style.left=(parseInt(this.divMain.style.width) - this.msgWidth) / 2 + "px"; 
						divMsg.style.top=(parseInt(this.divMain.style.height) - this.msgHeight) / 2 + "px"; 
						divMsg.style.width=(this.msgWidth + "px"); divMsg.style.height=(this.msgHeight + "px"); 
						divMsg.style.fontFamily="Tahoma"; 
						divMsg.style.fontSize="11px"; 
						divMsg.style.margin="0 auto"; 
						divMsg.style.backgroundColor="#f3f3f3"; 
						divMsg.style.border="2px solid #000000"; 
						divMain.appendChild(divMsg); 
						this.divDisable=document.createElement("div"); 
						this.divDisable.style.display="none"; 
						this.divDisable.style.position="absolute"; 
						this.divDisable.style.left='0px'; 
						this.divDisable.style.top='0px'; 
						if (__ubi_isIE && __ubi_ieVersion < 9) { 
							this.divDisable.style.backgroundColor='rgb(190,190,190)'; 
						    this.divDisable.style.filter="alpha(opacity=50)"; 
						} else { 
							this.divDisable.style.backgroundColor='rgba(190,190,190,0.5)'; 
						} 
						divMain.appendChild(this.divDisable); 
						this.divLoadImage=document.createElement("div"); 
						var loadImgWidth=54; 
						var loadImgHeight=55; 
						var divLoadImage=this.divLoadImage; 
						divLoadImage.style.display="none"; 
						divLoadImage.style.position="absolute"; 
						divLoadImage.style.left=(parseInt(divMain.style.width) - loadImgWidth)/2 + 'px'; 
						divLoadImage.style.top=(parseInt(divMain.style.height) - loadImgHeight)/2 + 'px'; 
						divLoadImage.style.width=loadImgWidth + "px"; 
						divLoadImage.style.height=loadImgHeight + "px"; 
						divLoadImage.style.margin="0 auto"; 
						var loadImg="<img src='" + params.resource + "/images/page_loading.gif' width='" + loadImgWidth + "px' height='" + loadImgHeight + "px'>"; 
						divLoadImage.innerHTML=loadImg; 
						divMain.appendChild(divLoadImage); 
						divMain.appendChild(this._createErrorDialog()); 
						divMain.appendChild(this._createProgress()); 
					}, 
					    resize : function() { 
							try{ 
								if(this.params) { 
									this.divPreviewFrame.style.height=(parseInt(document .getElementById(this.params.divid).style.height) - parseInt(document.getElementById(this.params.divid + "_toolbar").style.height)) + 'px'; 
						            if (this.toolbar) { 
						            	var scale=this.toolbar.getCurrScale(); 
						                if (scale == "PageWidth" || scale == "WholePage") { 
						                	var viewer=this; setTimeout(function(){viewer._changeScale();},5); 
						                } 
						            } 
						        } 
							}catch(e){} 
					    }, 
					    destroy : function() { 
							_ubi_RemoveAddEvent(this.divPreviewFrame, "scroll", this._scrollUpdate); 
							this.toolbar.destroy(); 
					    }, 
					    _enableViewer : function() { 
							this.divDisable.style.display="none"; 
					    }, 
					    _disableViewer : function() { 
							this.divDisable.style.width=this.divMain.style.width; 
							this.divDisable.style.height=this.divMain.style.height; 
							this.divDisable.style.display=""; 
					    }, 
					    _jobStart : function() { 
							this._disableViewer(); 
							this.divLoadImage.style.display=""; 
							this.divMain.style.cursor="progress"; 
					    }, 
					    _jobEnd : function() { 
							this.divLoadImage.style.display="none"; 
							this.divMain.style.cursor="default"; 
							this._enableViewer(); 
					    }, 
					    _showErrorDialog : function(title, msg) { 
							document.getElementById(this.vid+'UbiToolbarPop_Error_Title').innerText=title; 
							document.getElementById(this.vid+'UbiToolbarPop_Error_Contents').innerHTML=msg; 
							document.getElementById(this.vid+'UbiToolbarPop_Error').style.display=''; 
					    }, 
					    _showProgress : function(msg) { 
							this._disableViewer(); 
							document.getElementById(this.vid+'_UbiProgress_Msg').innerText=msg; 
							document.getElementById(this.vid+'_UbiProgress_Position').style.width=0 + "px"; 
							document.getElementById(this.vid+'_UbiProgress').style.display=''; 
					    }, 
					    _closeProgress : function() { 
							document.getElementById(this.vid+'_UbiProgress').style.display='none'; 
							this._enableViewer(); 
					    }, 
					    _setProgress : function(msg, page) { 
							var pos=0; 
							if (page != undefined && _ubi_isNumber(page)) { 
							    var barwidth=196; var edgewidth=7*2; 
							    pos=Math.floor((barwidth - edgewidth) * (parseInt(page) / this.totalPage)); 
							    msg += " ("+ page +"/"+ this.totalPage +")"; 
						    } 
							document.getElementById(this.vid+'_UbiProgress_Msg').innerText=msg; 
							document.getElementById(this.vid+'_UbiProgress_Position').style.width=pos + "px"; 
					    }, 
					    _createErrorDialog : function() { 
							var str=[]; 
							var i=0; 
							var obj=document.createElement("div"); 
							obj.id=this.vid+"UbiToolbarPop_Error"; 
							obj.style.cssText='display:none;position:absolute;z-index:999999104;left:50%;top:50%;width:500px;height:300px;margin-left:-250px;margin-top:-100px;border:1px solid #bdbdbd; box-shadow:1px 1px 1px 1px #e0e0e0; background:#f5f5f5;'; 
							str[i++]="<div style='height:56px; width:100%; background:#c2185b; position:absolute; top:0px; text-align:left;'>"; 
							str[i++]="&nbsp;&nbsp;<span style='font-size:20pt; color:white;'>Error</span>"; 
							str[i++]="<br>&nbsp;&nbsp;<span id='"+this.vid+"UbiToolbarPop_Error_Title' style='font-size:9pt; color:white;'>오류가 발생하였습니다.</span>"; 
							str[i++]="</div>"; 
							str[i++]="<div id='"+this.vid+"UbiToolbarPop_Error_Contents' class='ubiAboutBox_Description' style='position:absolute; top:60px; left:5px; height:200px; width:488px; border:1px solid #bdbdbd; background:white; overflow:auto; text-align:left;'>"; 
							str[i++]="</div>"; 
							str[i++]="<div style='position:absolute; top:270px; height:32px; width:100%;'>"; 
							str[i++]="<span class=\"ubiButton gray\"><button onclick=\"document.getElementById('"+this.vid+"UbiToolbarPop_Error').style.display='none';\" onMouseOut=\"this.parentNode.className='ubiButton gray';\" onMouseOver=\"this.parentNode.className='ubiButton blue';\" type=\"button\">"+_ubi_getMessage(this.params.language, "Button_OK") +"</button></span>"; 
							str[i++]="</div>"; 
							obj.innerHTML=str.join(""); 
							return obj; 
					    }, 
					    _createProgress : function() { 
							var str=[]; 
							var obj=document.createElement("div"); 
							obj.id=this.vid + "_UbiProgress"; obj.style.cssText="display:none; position: absolute; left:50%; top:50%; margin-left:-120px; margin-top:-32px; width:240px; height:65px; z-index: 999999101; padding: 2px; border: 1px solid rgb(144, 144, 144); border-image: none; overflow: hidden; background-color: #909090;"; 
							str.push(" <div style=\"position:absolute; top:15px; left:20px; width:220px; height:16px; margin:0px; padding:0px; font-family:맑은고딕,Tahoma; font-size:12px; color:white;\">"); 
							str.push(" <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" style=\"margin:0px; padding:0px;\">"); 
							str.push(" <tr>"); 
							str.push(" <td id=\""+ this.vid +"_UbiProgress_Msg\" style=\"width:220px;\" font-family:맑은고딕,Tahoma; font-size:12px; color:white;>파일 생성중입니다.</td>"); 
							str.push(" </tr>"); 
							str.push(" </table>"); 
							str.push(" </div>"); 
							str.push(" <div style=\"position:absolute; top:40px; left:20px; background-image:url('" + this.params.resource + "/images/progress_bg_gray.png'); background-repeat:no-repeat; width:196px; height:16px; margin:0px; padding:0px;\">"); 
							str.push(" <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" style=\"margin:0px; padding:0px;\">"); 
							str.push(" <tr height=\"15px\">"); str.push(" <td style=\"width:7px; height:15px; background-image:url('"+ this.params.resource +"/images/progress_left.png'); background-repeat:no-repeat;\"></td>"); 
							str.push(" <td id=\""+ this.vid +"_UbiProgress_Position\" style=\"width:0px; height:15px; background-image:url('"+ this.params.resource +"/images/progress_center.png');\"></td>"); 
							str.push(" <td style=\"width:7px; height:15px; background-image:url('"+ this.params.resource +"/images/progress_right.png'); background-repeat:no-repeat;\"></td>"); 
							str.push(" </tr>"); 
							str.push(" </table>"); 
							str.push(" </div>"); 
							obj.innerHTML=str.join(""); 
							return obj; 
					    }, 
					    _createPreview : function(page) { 
							var divPreview=document.createElement("div"); 
							divPreview.id=this.vid + "_preview_"+ page; 
							divPreview.setAttribute("isloaded", "false"); 
							if (_ubi_strToBool(this.styles.pageborder)) { 
								divPreview.style.border="1px solid "+ this.styles.pagebordercolor; 
							} 
							divPreview.style.backgroundColor="#ffffff"; 
							divPreview.style.marginRight="auto"; 
							divPreview.style.marginLeft="auto"; 
							if (page > 1 && this.styles.pagegap != "") { 
								divPreview.style.marginTop=this.styles.pagegap + "px"; 
							} 
							if (_ubi_strToInt(this.styles.margin) > 0) { 
								if (page == 1) { 
									divPreview.style.marginTop=this.styles.margin + "px"; 
								} 
							    if (page == this.totalPage || _ubi_strToBool(this.params.scrollpage) == false) { 
							    	divPreview.style.marginBottom=this.styles.margin + "px"; 
							    } 
							} 
							divPreview.style.position="relative"; 
							divPreview.style.overflow="hidden"; 
							divPreview.style.display="none"; 
							var divLoadImage=document.createElement("div"); 
							divLoadImage.style.position="relative"; 
							divLoadImage.style.top="50%"; 
							divLoadImage.style.width="100%"; 
							divLoadImage.style.height="100%"; 
							divLoadImage.style.margin="0 auto"; 
							divLoadImage.innerHTML="<img src='" + this.params.resource + "/images/page_loading.gif'>"; 
							divPreview.appendChild(divLoadImage); 
							this.divPreviewFrame.appendChild(divPreview); 
							return divPreview; 
					    }, 
					    _drawPage : function(preview, page) { 
							var isSvg=_ubi_strToBool(this.params.issvg); 
							var scale=this.toolbar.getCurrScale(); 
							var frame=document.getElementById(this.vid+"_previewframe"); 
							var frameWidth=frame.clientWidth; 
							var frameHeight=frame.clientHeight; 
							var framemargin=2; 
							var isloaded=preview.getAttribute("isloaded"); 
							var baseScale=1.0; 
							if (isSvg) { 
								baseScale=2.0; 
							} 
							var ds=1.0; 
							if (scale != "PageWidth" && scale != "WholePage") { 
								ds=parseInt(scale)/100; 
							} 
							if (_ubi_strToInt(this.styles.margin) > 0) { 
								framemargin += parseInt(this.styles.margin) * 2; 
							} 
							if (isSvg && isloaded == "true") { 
								var children=preview.children; 
								var svgObj=null; 
								if (children) { 
									svgObj=children[0]; 
									var svgWidth=parseInt(svgObj.getAttribute("orgwidth")); 
									var svgHeight=parseInt(svgObj.getAttribute("orgheight")); 
									if (page == 1) { 
										this.totalPage=parseInt(svgObj.getAttribute("totalpage")); 
									    this.params.daemonid=svgObj.getAttribute("daemonid"); 
									    this.pageOrientation=svgObj.getAttribute("orientation"); 
									    this.pageWidth=svgWidth; 
									    this.pageHeight=svgHeight; 
									    if (page == this.totalPage) { 
									    	preview.style.marginBottom=this.styles.margin + "px"; 
									    } 
									} 
									preview.setAttribute("orgwidth", svgWidth); 
									preview.setAttribute("orgheight", svgHeight); 
									if (scale == "PageWidth") { 
										ds=(frameWidth-framemargin) / (svgWidth / baseScale); 
									    var height=svgHeight / baseScale * ds; 
									    if ((height+framemargin) > frameHeight && page == 1) { 
									    	if (__ubi_isIE && __ubi_ieVersion < 8) { 
									    		frameWidth=frame.clientWidth - 17; 
									    	} else { 
									    		preview.style.height=(height) +"px"; 
									    		preview.style.display=""; 
									    		frameWidth=frame.clientWidth; 
									    	} 
									    	frameWidth=frame.clientWidth; ds=(frameWidth-framemargin) / (svgWidth / baseScale); 
									    } 
									} else if (scale == "WholePage") { 
										ds=Math.min((frameHeight-framemargin) / (svgHeight / baseScale), (frameWidth-framemargin) / (svgWidth / baseScale)); 
									} 
									svgWidth=svgWidth / baseScale * ds; 
									svgHeight=svgHeight / baseScale * ds; 
									var conscale=ds / baseScale; 
									svgObj.setAttribute("width", svgWidth); 
									svgObj.setAttribute("height", svgHeight); 
									if (__ubi_isIE) { 
										svgObj.setAttribute("letter-spacing", (-0.15*baseScale*2)+"px"); 
									} else { 
										svgObj.setAttribute("letter-spacing", (-0.15*baseScale)+"px"); 
									} 
									var gObj=svgObj.childNodes; 
									if (gObj) { 
										for (var i=0; i<gObj.length; i++) { 
											if (gObj[i].tagName == "g") { 
												gObj=gObj[i]; break; 
											} 
										} 
										gObj.setAttribute("transform", "scale("+ conscale +")"); 
									} 
									if (!__ubi_isIE) { 
										preview.innerHTML=""; 
									} 
									preview.style.width=(svgWidth) +"px"; 
									preview.style.height=(svgHeight) +"px"; 
									preview.setAttribute("pagewidth", (svgWidth)); 
									preview.setAttribute("pageheight", (svgHeight)); 
									if (!__ubi_isIE) { 
										preview.appendChild(svgObj); 
									} 
								} 
							} else { 
								if (scale == "PageWidth") { 
									ds=(frameWidth-framemargin) / (this.pageWidth / baseScale); 
									var height=this.pageHeight / baseScale * ds; 
									if ((height+framemargin) > frameHeight && (page == 1 || _ubi_strToBool(this.params.scrollpage) == false)) { 
										if (__ubi_isIE && __ubi_ieVersion < 8) { 
											frameWidth=frame.clientWidth - 17; 
										} else { 
											preview.style.height=(height) +"px"; 
											preview.style.display=""; 
											frameWidth=frame.clientWidth; 
										} 
										frameWidth=frame.clientWidth; ds=(frameWidth-framemargin) / (this.pageWidth / baseScale); 
									} 
								} else if (scale == "WholePage") { 
									ds=Math.min((frameHeight-framemargin) / (this.pageHeight / baseScale), (frameWidth-framemargin) / (this.pageWidth / baseScale)); 
								} 
								var width=this.pageWidth / baseScale * ds; 
								var height=this.pageHeight / baseScale * ds; 
								preview.style.width=(width) +"px"; 
								preview.style.height=(height) +"px"; 
								if (!isSvg) { 
									var doc=this.ubidoc.doc; 
									var pageobj=doc.pages.GetAt(page - 1); 
	    							if (pageobj) { 
	    								var previewPage=document.createElement("div"); 
	    								previewPage.style.width=Math.round(doc.docprop.width*ds) + "px"; 
	    								previewPage.style.marginLeft=Math.round(doc.docprop.marginleft*ds) + "px"; 
	    								previewPage.style.marginRight=Math.round(doc.docprop.marginright*ds) + "px"; 
	    								previewPage.style.marginTop=Math.round(doc.docprop.margintop*ds) + "px"; 
	    								previewPage.style.marginBottom=Math.round(doc.docprop.marginbottom*ds) + "px"; 
	    								previewPage.style.position="relative"; 
	    								if (pageobj.iscustom) { 
	    									previewPage.style.height="auto"; 
	    									preview.divPreview.style.height="auto"; 
	    								} else { 
	    									previewPage.style.height=Math.round(doc.docprop.height*ds - doc.docprop.margintop*ds - doc.docprop.marginbottom*ds) +"px"; 
	    								} 
	    								preview.innerHTML=""; preview.appendChild(previewPage); 
	    								this.ubidoc.Draw(previewPage, page, ds); 
	    							} 
	    						} 
							} 
							preview.style.display=""; 
					    }, 
					    _drawPageStream : function(page) { 
							this._requestReportPage(page); 
							var pages=[page-1, page+1]; var v=this; 
							for (var i=0; i<pages.length; i++) { 
								if (pages[i] > 0 && pages[i] <= this.totalPage) { 
									var streampage=pages[i]; 
									setTimeout(function(){v._requestReportPage(streampage);},100); 
								} 
							} 
					    }, 
					    _drawRemainPages : function() { 
							if (this.totalPage > 1) { 
								var preview=null; 
								for (var i=2; i<=this.totalPage; i++) { 
									preview=this._createPreview(i); 
									preview.style.width=this.pageWidth; 
									preview.style.height=this.pageHeight; 
									this._drawPage(preview, i); 
									preview.style.display=""; 
								} 
							} 
					    }, 
					    _movePage : function(page) { 
							if (_ubi_strToBool(this.params.issvg) || _ubi_strToBool(this.params.scrollpage)) { 
								var preview=document.getElementById(this.vid + "_preview_"+ page); 
							    if (preview) { 
							    	if (page == 1) 
							    		this.divPreviewFrame.scrollTop=preview.offsetTop - parseInt(this.styles.margin); 
							    	else 
							    		this.divPreviewFrame.scrollTop=preview.offsetTop - parseInt(this.styles.pagegap); 
							    } 
							} else { 
								this.divPreviewFrame.innerHTML=""; 
								var preview=this._createPreview(page); 
								if (this.ubidoc.doc.pages.GetAt(parseInt(page)-1) == undefined) { 
									this._drawPage(preview, page); 
									this._requestReportPage(page); 
								} else { 
									this._drawPage(preview, page); 
								} 
							} 
					    }, 
					    _changeScale : function() { 
							if (this.totalPage < 1) 
								return; 
							if (_ubi_strToBool(this.params.issvg) == false) 
								this.divPreviewFrame.innerHTML=""; 
							if (_ubi_strToBool(this.params.scrollpage)) { 
								for (var i=1; i<=this.totalPage; i++) { 
									var preview=null; 
									if (_ubi_strToBool(this.params.issvg) == false) { 
										preview=this._createPreview(i); 
									} else { 
										preview=document.getElementById(this.vid + "_preview_"+ i); 
									} 
									if (preview) this._drawPage(preview, i); 
								} 
								if (_ubi_strToBool(this.params.isStreaming)) { 
									var pagePos=0; 
									var frameHeight=this.divPreviewFrame.clientHeight; 
									for (var i=1; i<=this.totalPage; i++) { 
										pagePos=document.getElementById(this.vid+"_preview_"+i).getBoundingClientRect().top; 
										if(pagePos > 0 && pagePos < frameHeight) { 
											this._requestReportPage(i); 
										} 
									} 
								} 
								if (_ubi_strToBool(this.params.issvg)) { 
									if (!__ubi_isIE) { 
										var tempObj=document.createElement("div"); 
										tempObj.innerHTML=this.divPreviewFrame.innerHTML; 
										this.divPreviewFrame.innerHTML=""; 
										this.divPreviewFrame.innerHTML=tempObj.innerHTML; 
										tempObj.innerHTML=""; 
										tempObj=null; 
									} 
								} 
							} else { 
								var preview=this._createPreview(this.toolbar.page); 
								this._drawPage(preview, this.toolbar.page); 
							} 
					    }, 
					    showReport : function(callback) { 
							function createControl(xml, viewer) { 
								viewer.divPreviewFrame.innerHTML=""; 
								var preview=viewer._createPreview(1); 
								if (_ubi_strToBool(viewer.params.issvg)) { 
									preview.innerHTML=xml; 
									preview.setAttribute("isloaded", "true"); 
									viewer._drawPage(preview, 1); 
								} else { 
									var doc=UbiDoc.CreateInstance(xml, true); 
									if (_ubi_strToBool(viewer.params.iswa)) {
										doc.isWA=true; 
									} else {
										doc.isWA=false;
								    }
									if(_ubi_strToBool(doc.isEnableNoPage) == false) { 
										viewer.toolbar.enableButton("SaveExcelBase", false); 
									} 
									viewer.ubidoc=new UbiDocument(doc, viewer.vid, viewer.params.jrffile, viewer.params.key, viewer.params.resid, viewer.params.gatewayurl); 
									viewer.params.daemonid=viewer.ubidoc.doc.daemonid; 
									viewer.totalPage=doc.pagecount; 
									viewer.pageWidth=doc.docprop.width; 
									viewer.pageHeight=doc.docprop.height; 
									viewer.pageOrientation=doc.docprop.orientation; 
									viewer._drawPage(preview, 1); 
								} 
								viewer.toolbar.setCurrPage(1); 
								if (viewer.totalPage > 0 && viewer._isMultiDocument && _ubi_strToBool(viewer.params.isStreaming)) { 
									viewer.toolbar.setTotalPage(viewer.totalPage +"+"); 
								} else { 
									viewer.toolbar.setTotalPage(viewer.totalPage); 
								} 
								if (_ubi_strToBool(viewer.params.issvg) || _ubi_strToBool(viewer.params.scrollpage)) { 
									setTimeout(function(){ viewer._drawRemainPages(); }, 10); 
								} 
								if (callback) { 
									try{ 
										callback(); 
									} catch(e){} 
								} 
						    }; 
						    function requestReport(viewer) { 
								var reqDatatype="xml"; 
								if (_ubi_strToBool(viewer.params.issvg)) { 
									reqDatatype="text"; 
								} 
								_ubi_ajax(
										{ 
											type: "POST", 
											datatype: reqDatatype, 
											timeout: viewer.params.timeout, 
											url: viewer.params.gatewayurl, 
											reqdata: viewer.params, 
											exportseq: "", 
											onSuccess: function(xml) { 
												viewer.daemonValid=true; 
												if (xml == null) { 
													alert("리포트가 생성되지 않았습니다."); 
												} else { 
													createControl(xml, viewer); 
													viewer.exportSeq=this.exportseq; 
													viewer.params.exportseq=this.exportseq; 
												} 
											}, 
											onComplete: function() { 
												viewer._jobEnd(); 
												if (viewer.totalPage > 0 && viewer._isMultiDocument) { 
													viewer._receiveTotalPage(); 
												} 
											}, 
											onError: function(msg) { 
												viewer.daemonValid=false; 
												if( msg.indexOf("ER0") == -1 ) { 
													viewer._showErrorDialog("알수없는 오류가 발생하였습니다.", msg); 
													msg="ER0901#Unknown error. Check UbiGateway URL.";
													return; 
												} 
												msg=msg.split("#")[0] + " : " + msg.split("#")[1]; alert(msg); 
											} 
										}
									); 
						    }; 
							if (_ubi_strToBool(this.params.isStreaming) && ((_ubi_strToBool(this.params.ismultireport) && _ubi_strToInt(this.params.multicount) > 1) || this.params.jrffile.indexOf(",") > 0)) { 
								this._isMultiDocument=true; 
							} else { 
								this._isMultiDocument=false; 
							} 
							this.exportSeq=-1; 
							this.params.reqtype=__ubi_URF; 
							this.params.exportseq=""; 
							this._jobStart(); 
							requestReport(this); 
					    }, 
					    _requestReportPage: function(page, isprint, callback) { 
							if (!isprint || isprint == undefined) 
								isprint=false; 
							function createControl(xml, viewer, isprint, callback) { 
								if (_ubi_strToBool(viewer.params.issvg)) { 
									var preview=document.getElementById(viewer.vid + "_preview_"+ page); 
									if (preview) { 
										preview.innerHTML=xml; preview.setAttribute("isloaded", "true"); viewer._drawPage(preview, page); 
									} 
								} else { 
									var doc=UbiDoc.CreateInstance(xml, false); 
									var viewerDoc=viewer.ubidoc.doc; 
									for ( var i=0; i < doc.colors.GetCount(); i++){ 
										var key=doc.colors.GetAt(i); 
										if (viewerDoc.colors.FindIndex(key) == -1) { 
											viewerDoc.colors.SetAt(key, doc.colors.GetValue(i)); 
										} 
									} 
									for ( var i=0; i < doc.fonts.GetCount(); i++){ 
										var key=doc.fonts.GetAt(i); 
										if (viewerDoc.fonts.FindIndex(key) == -1) { 
											viewerDoc.fonts.SetAt(key, doc.fonts.GetValue(i)); 
										} 
									} 
									for ( var i=0; i < doc.borders.GetCount(); i++){ 
										var key=doc.borders.GetAt(i); 
										if (viewerDoc.borders.FindIndex(key) == -1) { 
											viewerDoc.borders.SetAt(key, doc.borders.GetValue(i)); 
										} 
									} 
									for ( var i=0; i < doc.lines.GetCount(); i++){ 
										var key=doc.lines.GetAt(i); 
										if (viewerDoc.lines.FindIndex(key) == -1) { 
											viewerDoc.lines.SetAt(key, doc.lines.GetValue(i)); 
										} 
									} 
									for ( var i=0; i < doc.objects.GetCount(); i++){ 
										var key=doc.objects.GetAt(i); 
										if (viewerDoc.objects.FindIndex(key) == -1) { 
											viewerDoc.objects.SetAt(key, doc.objects.GetValue(i)); 
										} 
									} 
									viewerDoc.pages.SetAt(page-1, doc.pages.GetAt(0)); 
									if (doc.pages.GetAt(0) != undefined) { 
										var preview=document.getElementById(viewer.vid + "_preview_"+ page); 
										if (preview) 
											viewer._drawPage(preview, page); 
									} 
								} 
								if (callback) 
									callback(); 
							}; 
							function requestReport(viewer, page, isprint, callback) { 
								var reqDatatype="xml"; 
								if (_ubi_strToBool(viewer.params.issvg)) { 
									reqDatatype="text"; 
								} 
								viewer.params.reqtype=__ubi_PAGE + "#"+ page; viewer.params.exportseq=viewer.exportSeq; 
								_ubi_ajax(
										{ 
											type: "POST", datatype: reqDatatype, timeout: viewer.params.timeout, url: viewer.params.gatewayurl, reqdata: viewer.params, 
											onSuccess: function(xml) { 
												viewer.daemonValid=true; 
												if (xml == null) { 
													alert("리포트가 생성되지 않았습니다."); 
											    } else { createControl(xml, viewer, isprint, callback); 
											    } 
	    									}, 
	    									onComplete: function() { }, 
	    									onError: function(msg) { 
	    										viewer.daemonValid=false; 
	    										if( msg.indexOf("ER0") == -1 ) { 
	    											viewer._showErrorDialog("알수없는 오류가 발생하였습니다.", msg); 
	    											msg="ER0901#Unknown error. Check UbiGateway URL."; 
	    											return; 
	    										} 
	    										msg=msg.split("#")[0] + " : " + msg.split("#")[1]; alert(msg); 
	    									} 
	    								}
									); 
								}; 
								var isLoadedPage=true; 
								if (_ubi_strToBool(this.params.issvg)) { 
									var preview=document.getElementById(this.vid + "_preview_"+ page); 
									if (preview) { 
										var isloaded=preview.getAttribute("isloaded"); 
										if (isloaded == undefined || isloaded == "false") { 
											isLoadedPage=false; requestReport(this, page, isprint, callback); 
										} 
									} 
								} else { 
									if (this.ubidoc.doc.pages.GetAt(parseInt(page)-1) == undefined) { 
										isLoadedPage=false; requestReport(this, page, isprint, callback); 
									} 
								} 
								if (isLoadedPage && callback) { 
									callback(); 
								} 
							}, 
							_receiveTotalPage: function() { 
								var viewer=this; 
								viewer.params.reqtype=__ubi_TOTAL_PAGE; 
								_ubi_ajax(
										{ 
											type: "POST", datatype: "text", timeout: viewer.params.timeout, url: viewer.params.gatewayurl, reqdata: viewer.params, 
											onSuccess: function(text) { viewer.daemonValid=true; }, 
											onComplete: function() { }, 
											onError: function(msg) { 
												viewer.daemonValid=false; 
												if( msg.indexOf("ER0") == -1 ) { 
													viewer._showErrorDialog("알수없는 오류가 발생하였습니다.", msg); 
													msg="ER0901#Unknown error. Check UbiGateway URL."; 
													return; 
												} 
												msg=msg.split("#")[0] + " : " + msg.split("#")[1]; alert(msg); 
											}, 
											onStatus: function(status) { 
												var pos=status.lastIndexOf("^"); 
												if (pos >= 0) { 
													var msg=status.substring(pos+1).trim(); 
												    var arr=msg.split("#"); 
												    if (arr.length == 2) { 
													    var preTotalPage=viewer.totalPage; 
												        if (arr[1] == '0') { 
													        viewer.totalPage=parseInt(arr[0]); 
													        viewer.toolbar.setTotalPage(arr[0]); 
	    											} else { 
	    												viewer.totalPage=parseInt(arr[0]); 
	    												viewer.toolbar.setTotalPage(arr[0] +"+"); 
	    											} 
												    if (_ubi_strToBool(viewer.params.scrollpage)) { 
												    	for (var i=preTotalPage+1; i<=viewer.totalPage; i++) { 
												    		if (!document.getElementById(viewer.vid + "_preview_"+ i)) { 
												    			var preview=viewer._createPreview(i); 
												    			viewer._drawPage(preview, i); 
												    		} 
												    	} 
												    } 
												} 
											} 
										} 
									}
								) 
							}, 
							_scrollUpdate : function() { 
								if (_ubi_strToBool(this.params.scrollpage)) { 
									var pageHeight=this.divPreviewFrame.clientHeight; 
									var pageTop=this.divPreviewFrame.getBoundingClientRect().top; 
									var pageNum=0; 
									var pagePos=0; 
									for(var k=1; k<=this.totalPage; k++) { 
										pagePos=document.getElementById(this.vid+"_preview_"+k).getBoundingClientRect().top; 
										if(pagePos > 0) 
											break; 
									} 
									if(pageTop+pageHeight/2 < pagePos) { 
										pageNum=k-1; 
									} else { 
										pageNum=Math.min(this.totalPage,k); 
									} 
									this.toolbar.setCurrPage(pageNum); 
									this._drawPageStream(pageNum); 
								} 
							}, 
							_printPDF : function(isPrintSet) { 
								if (!isPrintSet || isPrintSet == undefined) 
									isPrintSet=false; 
								if (_ubi_strToBool(this.params.isredbc)) { 
									this._exportReport(__ubi_EXPORT_PDF); return; 
								} 
								var pdfVersion="0"; 
								var isAdobePrint=false; 
								var divPrint=document.getElementById(this.vid + "_print"); 
								if (!divPrint) { 
									divPrint=document.createElement("div"); 
									divPrint.id=this.vid + "_print"; 
									this.divMain.appendChild(divPrint); 
								} 
								if( __ubi_isIE) { 
									var pdfobj=null; 
									if( _ubi_checkPdfReader() ) { 
										pdfobj=document.createElement("object"); 
										pdfobj.setAttribute('id', this.vid+'UbiPdfDoc'); 
										pdfobj.setAttribute('classid', 'CLSID:CA8A9780-280D-11CF-A24D-444553540000'); 
										pdfobj.setAttribute('type', 'application/pdf'); 
										pdfobj.style.position="absolute"; 
										pdfobj.style.top="0px"; 
										pdfobj.style.width="0px"; 
										pdfobj.style.height="0px"; 
										divPrint.appendChild(pdfobj); 
										try { 
											pdfVersion=pdfobj.getVersions(); pdfVersion=pdfVersion.substring(pdfVersion.indexOf('=')+1, pdfVersion.indexOf('.')); 
										    if (((__ubi_ieVersion > 10) && parseInt(pdfVersion) < 10) || parseInt(pdfVersion) <= 6) { 
										    	isAdobePrint=false; 
										    } else { 
										    	isAdobePrint=true; 
										    } 
										} catch(e){ 
											isAdobePrint=false; 
										} 
									} else { 
										isAdobePrint=false; 
									} 
									if( isAdobePrint ) { 
										var url=""; 
										var gatewayurl=this.params.gatewayurl; 
										gatewayurl=gatewayurl.toUpperCase(); 
										if (gatewayurl.indexOf("HTTP") != 0) { 
											gatewayurl=self.location.protocol +"//"+ self.location.host + this.params.gatewayurl; 
										} else { 
											gatewayurl=this.params.gatewayurl; 
										} 
										url=gatewayurl + "?reqtype=2&jrffile=" + this.params.jrffile + "&resid=" + this.params.resid + "&key=" + this.params.key + "&arg=&pagenum=&imageid=&exportseq=" + this.exportSeq + "&isvoiceye=" + this.params.isvoiceye; 
										pdfobj.src=url; 
										if (isPrintSet) { 
											pdfobj.setCurrentPage(this.page); pdfobj.printWithDialog(); 
										} else { 
											pdfobj.printAll(); 
										} 
									} else { 
										this._exportReport(__ubi_EXPORT_PDF); 
									} 
								} else { 
									if (__ubi_isChrome) { 
										var postUrl="<iframe id='ubipdf' name='ubipdf' width='200' height='200' style='position:absolute; top:20px; left:50px; display:none;'></iframe>"; 
										postUrl += " <form name='pdfForm' method='post' action='" + this.params.gatewayurl + "#toolbar=1' target='ubipdf'>"; 
										postUrl += "<input type='hidden' name='reqtype' value='2'>"; 
										postUrl += "<input type='hidden' name='jrffile' value='" + this.params.jrffile + "'>"; 
										postUrl += "<input type='hidden' name='resid' value='" + this.params.resid + "'>"; 
										postUrl += "<input type='hidden' name='key' value='" + this.params.key + "'>"; 
										postUrl += "<input type='hidden' name='daemonid' value='" + this.params.daemonid + "'>"; 
										postUrl += "<input type='hidden' name='exportseq' value='" + this.exportSeq + "'>"; 
										postUrl += "<input type='hidden' name='isvoiceye' value='" + this.params.isvoiceye + "'>"; 
										postUrl += "</form>"; 
										divPrint.innerHTML=postUrl; 
										document.pdfForm.submit(); 
										var ifr=document.getElementById('ubipdf'); 
										self.interval=setInterval(function() { 
											var embedobj=ifr.contentDocument.plugin; 
										    if (embedobj != undefined && ifr.contentDocument.readyState === 'complete') { 
										    	clearInterval(self.interval); document.getElementById('ubipdf').focus(); 
										    	document.getElementById('ubipdf').contentWindow.print(); } }, 100); 
										    } else if (__ubi_isMobile) { 
										    	var w=window.open('', 'Ubi_PDF','menubar=no,toolbar=no,status=no,scrollbars=no'); 
										    	var postUrl="<form name='pdfForm' method='post' action='" + this.params.gatewayurl + "#toolbar=1' target='Ubi_PDF'>"; 
										    	postUrl += "<input type='hidden' name='reqtype' value='2'>"; 
										    	postUrl += "<input type='hidden' name='jrffile' value='" + this.params.jrffile + "'>"; 
										    	postUrl += "<input type='hidden' name='resid' value='" + this.params.resid + "'>"; 
										    	postUrl += "<input type='hidden' name='key' value='" + this.params.key + "'>"; 
										    	postUrl += "<input type='hidden' name='daemonid' value='" + this.params.daemonid + "'>"; 
										    	postUrl += "<input type='hidden' name='exportseq' value='" + this.exportSeq + "'>"; 
										    	postUrl += "</form>"; 
										    	divPrint.innerHTML=postUrl; 
										    	document.pdfForm.submit(); 
										    } else { 
										    	this._exportReport(__ubi_EXPORT_PDF); 
										    } 
									} 
								}, 
								_printRetrieveAll : function(pagefrom, pageto) { 
									var printCount=this.totalPage; 
									var page=1; 
									var viewer=this; 
									this._jobStart(); 
									retrievePage(); 
									function retrievePage() { 
										if (page < printCount) { 
											page++; 
											viewer._requestReportPage(page, true, retrievePage); 
										} else { 
											viewer._printHTML(pagefrom, pageto); 
										} 
									}; 
								}, 
								_printHTML : function(pagefrom, pageto) { 
									this._jobStart(); 
									var divPrint=document.createElement("div"); 
									divPrint.style.display="none"; 
									this.divMain.appendChild(divPrint); 
									var issvg=_ubi_strToBool(this.params.issvg); 
									if (!issvg) { 
										var doc=this.ubidoc.doc; 
										var ds=1.2; 
										var pagewidth=Math.round(doc.docprop.width*ds - doc.docprop.marginleft*ds - doc.docprop.marginright*ds); 
										var pageheight=Math.round(doc.docprop.height*ds - doc.docprop.margintop*ds - doc.docprop.marginbottom*ds); 
										for( var i=pagefrom; i <= pageto; i++ ) { 
											var divPreviewPage=document.createElement("div"); 
											divPreviewPage.style.position="relative"; 
											divPreviewPage.style.width=pagewidth +"px"; 
											divPreviewPage.style.height=pageheight +"px"; 
											divPreviewPage.style.margin="0px"; 
											if (i > pagefrom && i > 1) { 
												divPreviewPage.style.pageBreakBefore="always"; 
											} 
											divPrint.appendChild(divPreviewPage); 
											this.ubidoc.Draw(divPreviewPage, i, ds); 
										} 
										
									} 
									var win=window.open("", "UbiReportPrint", "width=800px, height=600px,menubar=no,toolbar=no,status=no,scrollbars=yes"); 
									var viewer=this; 
									setTimeout(function() { _printHTMLWrite(viewer, win, ds); }, 500); 
									function _printHTMLWrite(viewer, win, ds) { 
										var marginLeft=0; var marginTop=0; 
										function convertPixelToMm(pixel) { 
											return pixel * (25.4 / 72) / 10; 
										}; 
										var doc=null; 
										var clist=null; 
										if (!issvg) { 
											doc=viewer.ubidoc.doc; 
											clist=viewer.ubidoc.canvaslist; 
											marginLeft=convertPixelToMm(doc.docprop.marginleft); 
											marginTop=convertPixelToMm(doc.docprop.margintop); 
										} 
										var contents=[]; 
										contents.push("<!DOCTYPE html>\n"); 
										contents.push("<html><head>"); 
										contents.push("<title>Print</title>"); 
										contents.push("<style type='text/css'>\n"); 
										contents.push("@media print{\n"); 
										contents.push("@page {size: "+viewer.pageOrientation.toLowerCase()+"; margin-left: "+marginLeft+"cm; margin-top: "+marginTop+"cm;}\n"); 
										contents.push(" #header{display: none;}\n"); 
										contents.push(" #sidebar{display: none;}\n"); 
										contents.push(" #footer{display: none;}\n"); 
										contents.push(" BODY {margin:0px; background: transparent; width:auto; } \n"); 
										contents.push(" }\n"); 
										if (!issvg) 
											contents.push(viewer.ubidoc.GetReportStyle(doc, ds)); 
										contents.push("</style>\n"); 
										if (!issvg && clist.length > 0) { 
											contents.push("<!--[if IE]><script src=\""+viewer.params.resource+"/excanvas.js\"></script><![endif]-->\n"); 
										} 
										contents.push("<script src=\""+ viewer.params.resource +"/ubiprint.js\"></script>\n"); 
										contents.push("<script> function printStart() { ChildWindowPrintHTML(); } </script>\n"); 
										contents.push("</head>\n"); 
										if(__ubi_isIE && viewer.pageOrientation.toLowerCase()=="landscape"){ 
											contents.push("<body>"); 
										} else { 
											contents.push("<body onload='printStart()'>"); 
										} 
										win.document.open(); 
										win.document.write(contents.join("")); 
										if (issvg) { 
											var preview=null; 
											for (var i=1; i<=viewer.totalPage; i++) { 
												preview=document.getElementById(viewer.vid + "_preview_"+ i); 
												if (preview) { 
													win.document.write(preview.innerHTML); 
												    if (i > 1 && i< viewer.totalPage) { 
												    	win.document.write("<div style='page-break-before:always;'></div>"); 
												    } 
												} 
											} 
										} else { 
											win.document.write(divPrint.innerHTML); 
										} 
										win.document.write("</body></html>"); 
										win.focus(); 
										win.document.close(); 
										viewer.divMain.removeChild(divPrint); 
										divPrint=null; 
										viewer.ubidoc.canvaslist=new Array(); 
										viewer._jobEnd(); 
									}; 
								}, 
								_exportReport : function(type) { this._exportStart(type); }, 
								_exportStart : function(type) { 
									var viewer=this; 
									if (viewer.params.language == 'ko') { 
										viewer._showProgress("파일 생성중입니다."); 
									} else { 
										viewer._showProgress("Please wait while the file is generated."); 
									} 
									viewer.params.reqtype=__ubi_EXPORT_JOB; 
									viewer.params.reqsubtype=type; 
									_ubi_ajax(
											{ 
												type: "POST", datatype: "text", timeout: viewer.params.timeout, url: viewer.params.gatewayurl, reqdata: viewer.params, flag: true, filename: "", 
												onSuccess: function(xml) { 
													this.flag=true; 
													if (this.filename == "") { 
														var pos=status.lastIndexOf("^"); 
														if (pos >= 0) { 
															var msg=status.substring(pos+1).trim(); 
															var arr=msg.split("#"); 
															if (arr[0] == "filename") 
																this.filename=arr[1]; 
														} 
													} 
												}, 
											    onComplete: function() { viewer._exportEnd(this.flag, this.filename); }, 
											    onError: function(msg) { this.flag=false; msg=msg.split("#")[0] + " : " + msg.split("#")[1]; alert(msg); }, 
											    onStatus: function(status) { 
											    	var pos=status.lastIndexOf("^"); 
											    	if (pos >= 0) { 
											    		var msg=status.substring(pos+1).trim(); 
											    		var arr=msg.split("#"); 
											    		if (arr[0] == "page") { 
											    			if (viewer.params.language == 'ko') { 
											    				viewer._setProgress("파일 생성중입니다.", arr[1]); 
											    			} else { 
											    				viewer._showProgress("Please wait while the file is generated.", arr[1]); 
											    			} 
											    		} else if (arr[0] == "info") {
											    			viewer._setProgress(arr[1], null); 
											    		} else if (arr[0] == "filename") {
											    			this.filename=arr[1]; 
											    		}
											    	} 
											    } 
											}
										); 
									}, 
									_exportEnd : function(flag, filename) { 
										this._closeProgress(); 
										if (flag) { 
											var frameObj=document.getElementById(this.vid +"UbiExportFrame"); 
											if (!frameObj) { 
												frameObj=document.createElement("div"); frameObj.style.position="absolute"; frameObj.style.margin="0px"; frameObj.style.padding="0px"; 
												frameObj.style.left="-1px"; frameObj.style.width="1px"; frameObj.style.height="1px"; 
												frameObj.innerHTML= "<iframe id='"+ this.vid +"UbiExportFrame' name='"+ this.vid +"UbiExportFrame' width='1' height='1' frameborder='0' scrolling='no'></iframe>"; 
												this.divMain.appendChild(frameObj); 
											} 
											var formObj=document.getElementById(this.vid + "UbiExportForm"); 
											if (!formObj) { 
												formObj=document.createElement("form"); 
												formObj.id=this.vid + "UbiExportForm"; 
												formObj.action=this.params.gatewayurl; 
												if( __ubi_isMobile ) {
													formObj.target='_blank'; 
												} else { 
													formObj.target=this.vid +'UbiExportFrame';
												}
											} 
											var innerHtml=[]; 
											innerHtml.push("<input type='hidden' name='reqtype' value='94'>"); 
											innerHtml.push("<input type='hidden' name='reqsubtype' value='" + this.params.reqsubtype + "'>"); 
											innerHtml.push("<input type='hidden' name='jrffile' value='" + this.params.jrffile + "'>"); 
											innerHtml.push("<input type='hidden' name='resid' value='" + this.params.resid + "'>"); 
											innerHtml.push("<input type='hidden' name='key' value='" + this.params.key + "'>"); 
											innerHtml.push("<input type='hidden' name='daemonid' value='" + this.params.daemonid + "'>"); 
											innerHtml.push("<input type='hidden' name='reporttitle' value='" + encodeURIComponent(this.params.reporttitle) + "'>"); 
											innerHtml.push("<input type='hidden' name='exportseq' value='" + this.exportSeq + "'>"); 
											innerHtml.push("<input type='hidden' name='exportfilename' value='" + filename + "'>"); 
											formObj.innerHTML=innerHtml.join(""); 
											this.divMain.appendChild(formObj); 
											formObj.submit(); 
										} 
										if (_ubi_strToBool(this.params.isredbc) && this.events.printEnd) { 
											this.events.printEnd(flag); 
										} else { if (this.events.exportEnd) { 
											this.events.exportEnd(flag); 
										} 
									} 
								}, 
								aboutbox : function() { this.toolbar.aboutbox(); }, 
								first : function() { this.toolbar.first(); }, 
								previous : function() { this.toolbar.previous(); }, 
								next : function() { this.toolbar.next(); }, 
								last : function() { this.toolbar.last(); }, 
								zoomin : function() { this.toolbar.zoomin(); }, 
								zoomout : function() { this.toolbar.zoomout(); }, 
								refresh : function() { this.toolbar.refresh(); }, 
								gopage : function(page) { this.toolbar.movePage(page); }, 
								setVisibleToolbar : function(id, flag) { 
									this.toolbar.setVisibleToolbar(id, flag); 
								}, 
								setMenuTextToolbar : function(id, text) { 
									this.toolbar.setMenuTextToolbar(id, text); 
								}, 
								setSaveMenu : function(menuType) { 
									var type=__ubi_exportMap[menuType.toUpperCase()]; 
									if (type) { 
										this.toolbar.saveDefaultType=type; 
									} else { 
										this.toolbar.saveDefaultType=""; 
									} 
								}, 
								setPrintMenu : function(menuType) { 
									var type=menuType.toUpperCase(); 
									if (type == "PDF" || type == "HTML") { 
										this.toolbar.printDefaultType=type; 
									} else { 
										this.toolbar.printDefaultType=""; 
									} 
								}, 
								printHTML : function() { this.toolbar.printHTML(); }, 
								printPDF : function() { this._printPDF(false); }, 
								printSet: function() { this._printPDF(true); }, 
								exportFile : function(type) { 
									var type=__ubi_exportMap[menuType.toUpperCase()]; 
									if (type) { this._exportReport(type); } 
								}, 
								exportPdf : function() { this._exportReport(__ubi_EXPORT_PDF); }, 
								exportExcel : function() { this._exportReport(__ubi_EXPORT_EXCEL1); }, 
								exportExcelNo : function() { this._exportReport(__ubi_EXPORT_EXCEL2); }, 
								exportHwp : function() { this._exportReport(__ubi_EXPORT_HWP); }, 
								exportRtf : function() { this._exportReport(__ubi_EXPORT_RTF); }, 
								exportDocx : function() { this._exportReport(__ubi_EXPORT_DOCX); }, 
								exportPptx : function() { this._exportReport(__ubi_EXPORT_PPTX); }, 
								exportCell : function() { this._exportReport(__ubi_EXPORT_CELL); }
							}
		    );
		function UbiPreviewToolbar(ubiviewer){ 
			var viewer=ubiviewer; 
			this.buttons=[]; 
			this.buttontds=[]; 
			this.zoomCombo=null; 
			this.pageCombo=null; 
			this.saveList=null; 
			this.excelList=null; 
			this.printList=null; 
			this.toolbarObj=null; 
			var vid=viewer.vid; 
			this.scaleValues=[]; 
			this.scaleDispValues=[]; 
			this.scaleIndex=13; 
			this.page=0; 
			this.saveDefaultType=""; 
			this.printDefaultType=""; 
			var infos=[ ["SaveButton", "button", "save.png", "save_o.png", "save_d.png" ], ["SaveText", "text", "Save"], ["SaveDropMenu", "dropdown", "btnarrow.gif", "btnarrow.gif", "btnarrow_dis.gif" ], ["PrintButton", "button", "print.png", "print_o.png", "print_d.png" ], ["PrintText", "text", "Print"], ["PrintDropMenu", "dropdown", "btnarrow.gif", "btnarrow.gif", "btnarrow_dis.gif" ], ["PrintSetButton", "button", "printset.png", "printset_o.png", "printset_d.png" ], ["PrintSetText", "text", "PrintSet "], ["NaviSep", "sep"], ["FirstButton", "button", "first.png", "first_o.png", "first_d.png" ], ["PreviousButton", "button", "previous.png", "previous_o.png", "previous_d.png" ], ["PageCombo", "combo", "", 1], ["TotalPageText", "text", "/ 0"], ["NextButton", "button", "next.png", "next_o.png", "next_d.png" ], ["LastButton", "button", "last.png", "last_o.png", "last_d.png" ], ["ZoomSep", "sep"], ["ZoomOutButton", "button", "zoomout.png", "zoomout_o.png", "zoomout_d.png" ], ["ZoomCombo", "combo", "", 1], ["ZoomInButton", "button", "zoomin.png", "zoomin_o.png", "zoomin_d.png" ], ["RefreshSep", "sep"], ["RefreshButton", "button", "refresh.png", "refresh_o.png", "refresh_d.png" ], ["AboutButton", "button", "info.png", "info_o.png", "info_d.png" ] ]; 
			var saveinfos=[ ["Pdf", "button", "pdf.png", "pdf_o.png", "pdf_d.png" , "PDF"], ["Xls", "button", "xls.png", "xls_o.png", "xls_d.png" , "Excel"], ["Rtf", "button", "rtf.png", "rtf_o.png", "rtf_d.png" , "RTF"], ["Docx", "button", "rtf.png", "rtf_o.png", "rtf_d.png" , "Word"], ["Pptx", "button", "ppt.png", "ppt_o.png", "ppt_d.png" , "PowerPoint"], ["Hwp", "button", "hwp.png", "hwp_o.png", "hwp_d.png" , "HWP"], ["Hml", "button", "hwp.png", "hwp_o.png", "hwp_d.png" , "HWPML"], ["Cell", "button", "cell.png", "cell_o.png", "cell_d.png" , "HanCell"] ]; 
			var excelinfos=[ ["Print", "button", "print_form.png", "print_form_o.png", "print_form_d.png" , "Print Type"], ["Base", "button", "default_form.png", "default_form_o.png", "default_form_d.png" , "Base Type"] ]; 
			var printinfos=[ ["Pdf", "button", "pdf.png", "pdf_o.png", "pdf_d.png" , "PDF Print"], ["Html", "button", "html.png", "html_o.png", "html_d.png" , "HTML Print"] ]; 
			var toolbarfontstyle="font-family: 맑은고딕, Tahoma; font-weight:normal; font-size:12px; letter-spacing:0em; color: #f0f0f0; -moz-user-select: none;"; 
			this.initToolbar=function() { 
				this.makeToolbarUI(); 
				this.createCombo(); 
				this.makeZoomList(); 
				this.setStatus(); 
				this.saveList=this.makePopupMenu("Save", this.saveList, saveinfos); 
				this.excelList=this.makePopupMenu("SaveExcel", this.excelList, excelinfos); 
				this.printList=this.makePopupMenu("Print", this.printList, printinfos); 
				this.makeAboutBox(); 
				this.makePrintDialog(); 
				_ubi_AddEvent(document, "click", clicked); 
			}; 
			this.makeToolbarUI=function() { 
				var tableObj=document.createElement("table"); 
				tableObj.id=viewer.vid+"UbiToolbar_ToolbarCtrl"; 
				tableObj.cellspacing='0'; 
				tableObj.cellpadding='0'; 
				tableObj.style.cssText="width:100%; height:100%; margin:0; padding:0px; border:0px; border-spacing:0px; cursor: default; "+ toolbarfontstyle; 
				var bodyObj=document.createElement("tbody"); 
				var trObj=document.createElement("tr"); 
				trObj.style.padding="0px"; 
				var id=""; 
				var type=""; 
				var i=0; 
				var isRtl=false; 
				if (viewer.params.direction == "rtl") { 
					isRtl=true; i=infos.length - 1; 
				} 
				while (true) { 
					id=infos[i][0]; type=infos[i][1]; 
					var tdObj=document.createElement("td"); 
					tdObj.id=viewer.vid +"UbiToolbar_"+ id; 
					tdObj.style.cssText="padding:1px;"; 
					var buttonObj=null; 
					if (type == "sep") { 
						tdObj.setAttribute("width", "2px"); 
						buttonObj=document.createElement("div"); 
						buttonObj.id=viewer.vid +"UbiToolbarButton_"+ id; 
						buttonObj.style.cssText="width: 1px; height: 31px; font-size: 2px; margin-left: 2px; margin-right: 2px; margin-top: 1px; border-left: #757575 1px solid; border-right: #909090 0px solid; -moz-user-select: none;"; 
					} else if (type == "button") { 
						if (infos[i][0] == "AboutButton") { 
							tdObj.setAttribute("width", "*"); 
							if (isRtl) {
								tdObj.setAttribute("align", "left"); 
							} else {
								tdObj.setAttribute("align", "right"); 
							}
						} else { 
							tdObj.setAttribute("width", "34px"); 
						} 
						buttonObj=document.createElement("input"); 
						buttonObj.id=viewer.vid +"UbiToolbarButton_"+ id; 
						buttonObj.type="button"; 
						buttonObj.style.cssText="margin:0px; padding: 0px; border:0px; background-repeat: no-repeat; width:34px; height:31px;"; 
						buttonObj.style.backgroundImage="url('"+ viewer.params.resource + "/images/toolbar/"+ infos[i][2] +"')"; 
						buttonObj.style.backgroundColor=viewer.divToolbar.style.backgroundColor; 
						buttonObj.setAttribute("imageurl", viewer.params.resource + "/images/toolbar/"); 
						buttonObj.setAttribute("overimage", infos[i][3]); 
						buttonObj.setAttribute("outimage", infos[i][2]); 
						buttonObj.setAttribute("disimage", infos[i][4]); 
						buttonObj.onmouseover=function() { 
							this.style.cursor="pointer"; 
							if (this.getAttribute("overimage")) 
								this.style.backgroundImage="url('"+ this.getAttribute("imageurl") + this.getAttribute("overimage") +"')"; 
						}; 
						buttonObj.onmouseout=function() { 
							this.style.cursor="default"; 
							if (this.getAttribute("outimage")) 
								this.style.backgroundImage="url('"+ this.getAttribute("imageurl") + this.getAttribute("outimage") +"')"; 
						}; 
					} else if (type == "text") { 
						tdObj.setAttribute("width", "10px"); 
						buttonObj=document.createElement("div"); 
						buttonObj.id=viewer.vid +"UbiToolbarButton_"+ id; 
						if (isRtl) {
							buttonObj.style.cssText="margin:0px; padding:0px 0px 0px 0px; border:0px; align:left; white-space:nowrap; "+ toolbarfontstyle; 
						} else {
							buttonObj.style.cssText="margin:0px; padding:0px 0px 0px 0px; border:0px; align:left; white-space:nowrap; vertical-align: bottom; "+ toolbarfontstyle;
						}
						buttonObj.style.lineHeight="31px"; 
						buttonObj.appendChild(document.createTextNode(infos[i][2])); 
					} else if (type == "combo") { 
						tdObj.setAttribute("width", "74px"); 
						buttonObj=document.createElement("div"); 
						buttonObj.id=viewer.vid +"UbiToolbarButton_"+ id; 
						buttonObj.style.cssText="width: 74px; height: 21px; overflow: hidden; text-indent:5px; text-align:left; vertical-align:middle; line-height: 20px; background: url(\"" + viewer.params.resource + "/images/toolbar/select_arr.gif\") no-repeat right #5f6064;border: 0px solid #ccc;margin-top:1px; margin-bottom:1px; border:1px solid #ff6600; border-color:#48494a #48494a #48494a #48494a;"+ toolbarfontstyle; 
					} else if (type == "dropdown") { 
						tdObj.setAttribute("width", "13px"); 
						buttonObj=document.createElement("input"); 
						buttonObj.id=viewer.vid +"UbiToolbarButton_"+ id; 
						buttonObj.type="button"; 
						buttonObj.style.cssText="background-image: url(\""+ viewer.params.resource+"/images/toolbar/btnarrow.gif\"); border:0px; background-color:#909090; width: 11px; height: 31px; position: relative; margin: -1px; @margin-top: 1px; moz-user-select: none; background-repeat: no-repeat; background-position: center;"; 
						buttonObj.style.backgroundColor=viewer.divToolbar.style.backgroundColor; 
						buttonObj.setAttribute("outimage", infos[i][2]); 
						buttonObj.setAttribute("disimage", infos[i][4]); 
					} 
					if (buttonObj) { 
						this.buttons[infos[i][0]]=buttonObj; 
						tdObj.appendChild(buttonObj); 
						this.buttontds[infos[i][0]]=tdObj; 
						trObj.appendChild(tdObj); }
					if (isRtl) { 
						i--; 
						if (i < 0) 
							break; 
					} else { 
						i++; 
						if (i == infos.length) 
							break; 
					} 
				} 
				if (isRtl) { 
					convertRtlButtonImage(this.buttons, "FirstButton", "LastButton"); 
					convertRtlButtonImage(this.buttons, "PreviousButton", "NextButton"); 
					convertRtlButtonImage(this.buttons, "NextButton", "PreviousButton"); 
					convertRtlButtonImage(this.buttons, "LastButton", "FirstButton"); 
				} 
				bodyObj.appendChild(trObj); 
				tableObj.appendChild(bodyObj); 
				viewer.divToolbar.appendChild(tableObj); 
				this.toolbarObj=tableObj; 
				function getInfos(id) { 
					for (var i=0; i<infos.length; i++) { 
						if (infos[i][0] == id) 
							return infos[i]; 
					} 
					return null; 
				}; 
				function convertRtlButtonImage(buttons, id, convid) { 
					var info=getInfos(id); 
					if (info && buttons[id]) { 
						var convinfo=getInfos(convid); 
						if (convinfo) { 
							buttons[id].style.backgroundImage="url('"+ viewer.params.resource + "/images/toolbar/"+ convinfo[2] +"')"; 
							buttons[id].setAttribute("overimage", convinfo[3]); 
							buttons[id].setAttribute("outimage", convinfo[2]); 
						} 
					} 
				}; 
			}; 
			this.makeZoomList=function() { 
				var scaleIndex=-1; 
				for (var j=60; j <= 300; j += 20) { 
					this.scaleValues.push(j); 
					this.scaleDispValues.push(j); 
				} 
				this.scaleValues.push("PageWidth"); 
				this.scaleValues.push("WholePage"); 
				if (viewer.params.language == 'ko') { 
					this.scaleDispValues.push("폭 맞춤"); 
					this.scaleDispValues.push("쪽 맞춤"); 
				} else { 
					this.scaleDispValues.push("Page width"); 
					this.scaleDispValues.push("Whole page"); 
				} 
				for (var j=0; j < this.scaleValues.length; j++) { 
					var obj=document.createElement("a"); 
					obj.setAttribute("id", viewer.vid + "ZoomOption_"+ this.scaleValues[j]); 
					obj.setAttribute("value", this.scaleValues[j]); 
					obj.style.cssText="text-decoration:none; text-align:left; vertical-align:middle; line-height: 20px; display: block; height: 20px; text-indent: 5px; color: #cfcfcf; background-color: #5e6063; "+ toolbarfontstyle; 
					obj.onmouseover=function() { 
						this.style.cursor="pointer"; 
						this.style.color="white"; 
						this.style.backgroundColor="#3a9cdb"; 
					}; 
					obj.onmouseout=function() { 
						this.style.cursor="default"; 
						this.style.color="#cfcfcf"; 
						this.style.backgroundColor="#5e6063"; 
					}; 
					obj.appendChild(document.createTextNode(""+ this.scaleDispValues[j])); this.zoomCombo.appendChild(obj); 
				} 
			}; 
			this.makePageList=function() { 
				if (this.pageCombo == null) { 
					this.pageCombo=document.createElement("div"); 
					this.pageCombo.id=viewer.vid + "UbiToolbarPop_Save"; 
				} 
				this.pageCombo.innerHTML=""; 
				for (var j=1; j <= viewer.totalPage; j++) { 
					var obj=document.createElement("a"); 
					obj.setAttribute("id", viewer.vid + "PageOption_"+ j); 
					obj.style.cssText="text-decoration:none; text-align:left; vertical-align:middle; line-height: 20px; display: block; height: 20px; text-indent: 5px; color: #cfcfcf; background-color: #5e6063; "+ toolbarfontstyle; 
					obj.onmouseover=function() { 
						this.style.cursor="pointer"; 
						this.style.color="white"; 
						this.style.backgroundColor="#3a9cdb"; 
					}; 
					obj.onmouseout=function() { 
						this.style.cursor="default"; 
						this.style.color="#cfcfcf"; 
						this.style.backgroundColor="#5e6063"; 
					}; 
					obj.appendChild(document.createTextNode(""+ j)); 
					this.pageCombo.appendChild(obj); 
				} 
			}; 
			this.makePopupMenu=function(popupid, popup, infos) { 
				var i=0; var id=""; 
				var type=""; 
				var buttonObj=null; 
				var bgcolor="#5f6064"; 
				if (popup == null) { 
					popup=document.createElement("div"); 
					popup.id=viewer.vid +"UbiToolbarPopup_"+ popupid; 
					popup.style.cssText="display:none; float:left; position:absolute; z-index:999999101; width:130px; overflow:hidden; padding:2px; background-color:"+ bgcolor +"; border:1px solid #48494a;"; 
				} else { 
					popup.innerHTML=""; 
				} 
				while (true) { 
					id=popupid + infos[i][0]; type=infos[i][1]; 
					buttonObj=document.createElement("input"); 
					buttonObj.id=viewer.vid +"UbiToolbarButton_"+ id; 
					buttonObj.type="button"; 
					buttonObj.value=infos[i][5]; 
					buttonObj.style.cssText="display:block; margin:0px; padding: 0px; background-repeat: no-repeat; width:100%; height:33px; text-align:left; "+ toolbarfontstyle; 
					buttonObj.style.backgroundImage="url('"+ viewer.params.resource + "/images/toolbar/"+ infos[i][2] +"')"; 
					buttonObj.style.backgroundColor=bgcolor; 
					buttonObj.style.border="1px solid "+ bgcolor; 
					if (__ubi_isIE && __ubi_ieVersion < 8) { 
						buttonObj.style.paddingLeft="35px"; 
					} else { 
						buttonObj.style.textIndent="35px"; 
					} 
					buttonObj.setAttribute("imageurl", viewer.params.resource + "/images/toolbar/"); 
					buttonObj.setAttribute("overimage", infos[i][3]); 
					buttonObj.setAttribute("outimage", infos[i][2]); 
					buttonObj.setAttribute("disimage", infos[i][4]); 
					buttonObj.onmouseover=buttonObj.onfocus=function() { 
						this.style.cursor="pointer"; 
						this.style.backgroundColor="#3a9cdb"; 
						this.style.borderColor="#70C0E7"; 
						this.style.borderWidth="1px"; 
						this.style.borderStyle="solid"; 
						if (this.getAttribute("overimage")) 
							this.style.backgroundImage="url('"+ this.getAttribute("imageurl") + this.getAttribute("overimage") +"')"; 
						if (this.id == viewer.vid +"UbiToolbarButton_SaveXls") { 
							viewer.toolbar.showPopupExcel(); 
						} else if (this.id.indexOf("UbiToolbarButton_Save") > 0 && this.id.indexOf("UbiToolbarButton_SaveExcel") < 0){ 
							viewer.toolbar.hidePopupExcel(); 
						} 
						if (_ubi_strToBool(viewer.params.iswa)) { 
							_ubi_wafoucus(this) 
						} 
					}; 
					buttonObj.onmouseout=buttonObj.onblur=function() { 
						if (_ubi_strToBool(viewer.params.iswa)) { 
							_ubi_wablur(this) 
						} 
						this.style.cursor="default"; 
						this.style.backgroundColor=bgcolor; 
						this.style.borderColor=bgcolor; 
						this.style.borderWidth="1px"; 
						this.style.borderStyle="solid"; 
						if (this.getAttribute("outimage")) 
							this.style.backgroundImage="url('"+ this.getAttribute("imageurl") + this.getAttribute("outimage") +"')"; 
					}; 
					popup.appendChild(buttonObj); 
					this.buttons[id]=buttonObj; 
					i++; 
					if (i == infos.length) 
						break; 
				} 
				viewer.divToolbar.appendChild(popup); 
				return popup; 
			}; 
			this.makeAboutBox=function() { 
				var str=[]; 
				var obj=document.createElement("div"); 
				obj.id=viewer.vid +"Popup_AboutBox"; 
				obj.style.cssText="display:none; position: absolute; z-index: 999999104; left: 50%; top: 50%; width: 320px; height: 200px; margin-left: -160px; margin-top: -100px;"; 
				str.push("<table border=\"0\" bordercolor=\"gray\" bgcolor=\"#757575\" cellspacing=\"0\" cellpadding=\"0\" style=\"width:100%;\">"); 
				str.push(" <tr>"); 
				str.push(" <td valign=\"middle\" align=center style=\"height:40px; color:white; text-align:left; font-family:Arial; font-size:13px; line-height:16px;\"><img src=\"" + viewer.params.resource + "/images/logo.png\" align=\"left\" style=\"margin-left:8px; height:16px; width:16px;\">&nbsp;UbiReport</td>"); 
				str.push(" </tr>"); 
				str.push(" <tr>"); 
				str.push(" <td valign=\"middle\" align=center>"); 
				str.push(" <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" style=\"width:96%;\" bgcolor=\"white\" >"); 
				str.push(" <tr><td style=\"height:15px\"></td></tr>"); 
				str.push(" <tr><td style=\"text-align:center;font-size:12px;height:20px\">"+ _UBI_REPORT_BUILD_NO +"</td></tr>"); 
				str.push(" <tr><td style=\"height:20px;text-align:center;font-size:12px\">This copy is licensed to UbiDecision.</td></tr>"); 
				str.push(" <tr><td style=\"height:20px;\"><hr align=\"center\" width=\"90%\"></td></tr>"); 
				str.push(" <tr><td style=\"height:10px\"></td></tr>"); 
				str.push(" <tr><td style=\"height:20px;font-size:12px;text-align:center;\">"); 
				str.push(" <a target=\"ubireport_new\" style=\"text-decoration:none;\" href=\"http://www.ubireport.com\">www.ubireport.com</a></td></tr>"); 
				str.push(" <tr><td height=\"15px\"></td></tr>"); 
				str.push(" </table>"); 
				str.push(" </td>"); 
				str.push(" </tr>"); 
				str.push(" <tr><td valign=\"middle\" align=center style=\"height:40px;\"><input type=\"button\" onclick=\"document.getElementById('"+ obj.id +"').style.display='none'\" value=\"확인\"></tr>"); 
				str.push("</table>"); 
				obj.innerHTML=str.join(""); 
				viewer.divToolbar.appendChild(obj); 
			}; 
			this.makePrintDialog=function() { 
				var str=[]; 
				var obj=document.createElement("div"); 
				obj.id=viewer.vid +"Popup_PrintDialog"; 
				obj.style.cssText="display:none; position: absolute; z-index: 999999104; left: 50%; top: 50%; width: 340px; height: 200px; margin-left: -160px; margin-top: -100px;"; 
				str.push("<table border='0' bordercolor='gray' bgcolor='#757575' cellspacing='0' cellpadding='0' style='width:100%; margin:0px;'>"); 
				str.push(" <td valign='middle' align=center style='height:40px; color:white; text-align:left; font-family:Arial; font-size:13px; line-height:16px;'><img src='" + viewer.params.resource + "/images/logo.png' align='left' style='margin-left:8px; height:16px; width:16px;'>&nbsp;UbiReport</td>"); 
				str.push(" <tr>"); 
				str.push(" <td align='center' style='100%'>"); 
				str.push(" <table cellspacing='0' cellpadding='0' style='width:96%; margin:0px; bacground-color:white;'>"); 
				str.push(" <tr id='"+ viewer.vid + "_PrintDialog_Comment' style='display:;'>"); 
				str.push(" <td valign='middle' align='left' bgcolor='white' style='height:40px; font-size:12px; color:red; padding-left:16px;'>※ 인쇄량이 많아서 부분인쇄만 가능합니다.<br>&nbsp;&nbsp;&nbsp;&nbsp;(최대 "+ viewer.params.printlimit+"페이지)</td>"); 
				str.push(" </tr>"); 
				str.push(" <tr><td height='5px' bgcolor='white'></td></tr>"); 
				str.push(" <tr><td bgcolor='white' style='height:20px; margin:0px 0px 0px 0px;font-size:12px;text-align:left;padding-left:16px'>페이지 범위</td></tr>"); 
				str.push(" <tr>"); 
				str.push(" <td valign='middle' align='center' width='100%' bgcolor='white'>"); 
				str.push(" <div align='left' style='width:300px; height:80px; border:1px solid lightgray;'>"); 
				str.push(" <table style='font-size:12px; padding:5px;'>"); 
				str.push(" <tr><td><input type='radio' id='"+ viewer.vid +"_PrintDialog_All' name='PageOption'></td><td>모두</td><td></td></tr>"); 
				str.push(" <tr><td><input type='radio' id='"+ viewer.vid +"_PrintDialog_Current' name='PageOption'></td><td>현재 페이지</td><td></td></tr>"); 
				str.push(" <tr>"); 
				str.push(" <td><input type='radio' id='"+ viewer.vid +"_PrintDialog_Pages' name='PageOption'></td><td>페이지 지정:</td>"); 
				str.push(" <td>&nbsp;&nbsp;<input type='text' id='"+ viewer.vid +"_PrintDialog_PageFrom' style='width:40px; border:1px solid lightgray; font-size:12px;'>부터&nbsp;&nbsp;"); 
				str.push(" <input type='text' id='"+ viewer.vid +"_PrintDialog_PageTo' style='width:40px; border:1px solid lightgray; font-size:12px;'>까지</td>"); 
				str.push(" </tr>"); 
				str.push(" </table>"); 
				str.push(" <div>"); 
				str.push(" </td>"); 
				str.push(" </tr>"); 
				str.push(" <tr id='"+ viewer.vid + "_PrintDialog_Landscape' style='display:;'>"); 
				str.push(" <td valign='middle' align='left' bgcolor='white' style='height:25px; font-size:12px; padding-left:16px; padding-top:10px; line-height:16px;'>"); 
				str.push(" Internet Expolorer에서 가로 양식은 인쇄 미리 보기 <br/>"); 
				str.push(" 온션에서 용지 방향을 변경하여 인쇄하세요.<br/>"); 
				str.push(" <a style='color:red; text-decoration:none;' href='" + viewer.params.resource + "/images/printGuide_kr.html' target='_blank'>자세히 보기 </a>"); 
				str.push(" </td>"); 
				str.push(" </tr><tr><td valign='middle' bgcolor='white' style='height:10px; font-size:12px;'></td></tr>"); 
				str.push(" </table>"); 
				str.push(" </td>"); 
				str.push(" </tr>"); 
				str.push(" <tr>"); 
				str.push(" <td valign='middle' align=center style='height:40px;'><input type='button' onclick='__ubi_viewers[\""+ viewer.vid +"\"].toolbar.printok();' value='확인'>"); 
				str.push(" &nbsp;<input type='button' onclick='document.getElementById(\""+ obj.id +"\").style.display=\"none\";' value='취소'>"); 
				str.push(" </td>"); 
				str.push(" </tr>"); 
				str.push(" </table>"); 
				obj.innerHTML=str.join(""); 
				viewer.divToolbar.appendChild(obj); 
			}; 
			this.createCombo=function() { 
				if (this.zoomCombo == null) { 
					this.zoomCombo=document.createElement("div"); 
					this.zoomCombo.id=viewer.vid +"UbiToolbarSelect_ZoomList"; 
					this.zoomCombo.style.cssText="display: none; position: absolute; z-index: 999999101; width: 74px; height: 21px; font-family: Dotum, Tahoma, 맑은고딕; font-size: 13px; overflow: auto; border: 0px solid #ccc; margin-top:1px; margin-bottom:1px; background:#5f6064; border:1px solid #ff6600; border-color:#48494a #48494a #48494a #48494a;"; 
					viewer.divMain.appendChild(this.zoomCombo); 
				} 
				if (this.pageCombo == null) { 
					this.pageCombo=document.createElement("div"); 
					this.pageCombo.id=viewer.vid +"UbiToolbarSelect_PageList"; 
					this.pageCombo.style.cssText="display: none; position: absolute; z-index: 999999101; width: 74px; height: 21px; font-family: Dotum, Tahoma, 맑은고딕; font-size: 13px; overflow: auto; border: 0px solid #ccc; margin-top:1px; margin-bottom:1px; background:#5f6064; border:1px solid #ff6600; border-color:#48494a #48494a #48494a #48494a;"; 
					viewer.divMain.appendChild(this.pageCombo); 
				} 
			}; 
			this.showComboBox=function(type) { 
				if (type != "ZoomCombo" && type != "PageCombo" ) 
					return; 
				var xpos=0; 
				var ypos=0; var typeindex=0; 
				var visiblecount=0; 
				var tbodyObj=this.toolbarObj.childNodes; 
				if (tbodyObj) { 
					var trlist=tbodyObj[0].childNodes; 
					if (trlist) { 
						var tdlist=trlist[0].childNodes; 
						for (var i=0; i<tdlist.length; i++) { 
							if (tdlist[i].id == (vid +"UbiToolbar_"+ type)) { 
								typeindex=i; 
								ypos=tdlist[i].clientHeight; 
								break; 
							} 
							xpos += tdlist[i].clientWidth; 
							if (__ubi_isIE && __ubi_ieVersion < 8 && tdlist[i].clientHeight > 0) { 
								visiblecount++; 
							} 
						} 
					} 
				} 
			ypos=(ypos - this.buttons[type].clientHeight)/2 + this.buttons[type].clientHeight + 1; 
			if (__ubi_isIE) { 
				var combotdObj=document.getElementById(viewer.vid +"UbiToolbar_"+ type); 
				if (type == "ZoomCombo" && this.buttons["TotalPageText"] && combotdObj && combotdObj.clientWidth > 0) { 
					if (this.buttons["TotalPageText"].innerText.length == 4) { 
						xpos++; 
					} 
				} 
				if (__ubi_ieVersion < 8) { 
					xpos += visiblecount*2 + 4; ypos += 3; 
				} else { 
					xpos += 2; 
				} 
			} else { 
				xpos += 1; 
			} 
			var viewerObj=document.getElementById(vid); 
			var toolbarObj=document.getElementById(vid + "_toolbar"); 
			var baseHeight=20; 
			var listHeight=0; 
			if (type == "ZoomCombo") { 
				listHeight=Math.min(baseHeight*this.scaleValues.length, baseHeight*15); 
			} else if (type == "PageCombo") { 
				listHeight=Math.min(baseHeight*viewer.totalPage, baseHeight*15); 
			} 
			var viewerHeight=viewerObj.scrollHeight; 
			if (toolbarObj && toolbarObj.style.display != "none") { 
				viewerHeight -= toolbarObj.scrollHeight; 
			} 
			if (listHeight < baseHeight) { 
				listHeight=baseHeight; 
			} else { 
				listHeight=Math.min(listHeight, viewerHeight); 
			} 
			if (type == "ZoomCombo") { 
				this.zoomCombo.style.left=xpos + "px"; 
				this.zoomCombo.style.top=ypos + "px"; 
				this.zoomCombo.style.height=listHeight + "px"; 
				this.zoomCombo.style.display=""; 
			} else if (type == "PageCombo") { 
				this.pageCombo.style.left=xpos + "px"; 
				this.pageCombo.style.top=ypos + "px"; 
				this.pageCombo.style.height=listHeight + "px"; 
				this.pageCombo.style.display=""; 
			} 
		}; 
		this.showPopup=function(type) { 
			var buttonid=""; 
			if (type == "SaveDropMenu") { 
				buttonid="SaveButton"; 
			} else if (type == "PrintDropMenu") { 
				buttonid="PrintButton"; 
			} else { 
				return; 
			} 
			var xpos=0; 
			var visiblecount=0; 
			var tbodyObj=this.toolbarObj.childNodes; 
			if (tbodyObj) { 
				var trlist=tbodyObj[0].childNodes; 
				if (trlist) { 
					var tdlist=trlist[0].childNodes; 
					for (var i=0; i<tdlist.length; i++) { 
						if (tdlist[i].id == (vid +"UbiToolbar_"+ buttonid)) { 
							break; 
						} 
						xpos += tdlist[i].clientWidth; 
						if (__ubi_isIE && __ubi_ieVersion < 8 && tdlist[i].clientHeight > 0) { 
							visiblecount++; 
						} 
					} 
				} 
			} 
			if (__ubi_isIE) { 
				if (__ubi_ieVersion < 8) { 
					xpos += visiblecount*2 + 4; 
			    } else { 
			    	xpos += 2; 
			    } 
			} else { 
				xpos += 1; 
			} 
			if (type == "SaveDropMenu") { 
				this.saveList.style.left=0 + "px"; 
				this.saveList.style.display=""; 
			} else if (type == "PrintDropMenu") { 
				this.printList.style.left=xpos + "px"; 
				this.printList.style.display= ""; 
			} 
		}; 
		this.showPopupExcel=function() { 
			if (this.buttons["SaveXls"]) { 
				this.excelList.style.left="130px"; 
				var height=viewer.divToolbar.style.height; 
				if (height.indexOf('px') >= 0) { 
					height=height.substring(0, height.indexOf('px')); 
				} 
				this.excelList.style.top=(parseInt(height) + this.buttons["SaveXls"].offsetTop) +"px"; 
				this.excelList.style.display=""; 
			} 
		}; 
		this.hidePopupExcel=function() { 
			this.excelList.style.display="none"; 
		}; 
		this.isShowPopup=function(type) { 
			if (type == "ZoomCombo") { 
				if (this.zoomCombo.style.display != "none") 
					return true; 
			} else if (type == "PageCombo") { 
				if (this.pageCombo.style.display != "none") 
					return true; 
			} else if (type == "SaveDropMenu") { 
				if (this.saveList.style.display != "none") 
					return true; 
			} else if (type == "PrintDropMenu") { 
				if (this.printList.style.display != "none") 
					return true; 
			} 
			return false; 
		}; 
		this.hidePopupAll=function() { 
			this.zoomCombo.style.display="none"; 
			this.pageCombo.style.display="none"; 
			this.saveList.style.display="none"; 
			this.excelList.style.display="none"; 
			this.printList.style.display="none"; 
		}; 
		this.destroy=function() { _ubi_RemoveAddEvent(document, "click", clicked); }; 
		this.getCurrScale=function() { return this.scaleValues[this.scaleIndex]; }; 
		this.setCurrScale=function(zoom) { 
			var scalevalue="PageWidth"; 
		    this.scaleIndex=this.scaleValues.length - 2; 
		    var zoomstr=""+zoom; 
	    	if (zoomstr == "-9998") { 
	    		zoomstr="PageWidth"; 
	    	} else if (zoomstr == "-9999") { 
	    		zoomstr="WholePage"; 
	    	} 
	    	var lowerValue=""; 
	    	var lowerZoomValue=zoomstr.toLowerCase(); 
	    	for (var i=0; i<this.scaleValues.length; i++) { 
	    		lowerValue=(""+this.scaleValues[i]).toLowerCase(); 
	    		if (lowerValue == lowerZoomValue) { 
	    			scalevalue=this.scaleDispValues[i]; 
	    			this.scaleIndex=i; break; 
	    		} 
	    	} 
	    	if (this.buttons["ZoomCombo"]) { 
	    		this.buttons["ZoomCombo"].innerHTML=""; 
	    		this.buttons["ZoomCombo"].appendChild(document.createTextNode(scalevalue)); 
	    	} 
	    }; 
	    this.setCurrPage=function(page) { 
	    	if (this.buttons["PageCombo"]) { 
	    		this.buttons["PageCombo"].innerHTML=""; 
	    		this.buttons["PageCombo"].appendChild(document.createTextNode(page)); 
	    	} 
	    	this.page=page; this.setStatus(); 
	    }; 
	    this.setTotalPage=function(totalpage) { 
	    	var tstr=""; 
	    	if (viewer.params.direction == "rtl") 
	    		tstr=totalpage +" /"; 
	    	else 
	    		tstr="/ "+ totalpage; 
	    	if (this.buttons["TotalPageText"]) { 
	    		this.buttons["TotalPageText"].innerHTML=""; 
	    		this.buttons["TotalPageText"].appendChild(document.createTextNode(tstr)); 
	    	} 
	    	this.makePageList(); this.setStatus(); 
	    }; 
	    this.movePage=function(page) { 
	    	if (page != this.page && page > 0 && page <= viewer.totalPage) { 
	    		this.setCurrPage(page); 
	    		viewer._movePage(page); 
	    		this.setStatus(); 
	    	} 
	    }; 
	    this.changeScale=function(scale) { 
	    	if (viewer.totalPage < 1) 
	    		return; 
	    	if (this.scaleValues[this.scaleIndex] != scale) { 
	    		this.jobStart(); 
	    		setTimeout(function() { viewer.toolbar.changeScaleJob(scale); },50); 
	    	} 
	    }; 
	    this.changeScaleJob=function(scale) { 
	    	this.setCurrScale(scale); 
	    	this.setStatus(); viewer._changeScale(); 
	    	this.jobEnd(); 
	    }; 
	    this.first=function() { 
	    	if (viewer.totalPage > 0 && this.page != 1) { 
	    		var page=1; 
	    		this.movePage(page); 
	    	} 
	    }; 
	    this.previous=function() { 
	    	if (this.page > 1) { 
	    		var page=this.page-1; 
	    		this.movePage(page); 
	    	} 
	    }; 
	    this.next=function() { 
	    	if (this.page < viewer.totalPage) { 
	    		var page=this.page+1; 
	    		this.movePage(page); 
	    	} 
	    }; 
	    this.last=function() { 
	    	if (viewer.totalPage > 0 && this.page != viewer.totalPage) { 
	    		var page=viewer.totalPage; 
	    		this.movePage(page); 
	    	} 
	    }; 
	    this.zoomout=function() { 
	    	if (this.scaleIndex > 0) { 
	    		var scale=this.scaleValues[this.scaleIndex-1]; 
	    		this.changeScale(scale); 
	    	} 
	    }; 
	    this.zoomin=function() { 
	    	if ((this.scaleIndex+1) < this.scaleValues.length) { 
	    		var scale=this.scaleValues[this.scaleIndex+1]; 
	            this.changeScale(scale); 
	        } 
	    }; 
	    this.refresh=function() { 
	    	viewer.showReport(); 
	    }; 
	    this.aboutbox=function() { 
	    	var obj=document.getElementById(viewer.vid +"Popup_AboutBox"); 
	    	if (obj) { 
	    		obj.style.display=""; 
	    	} 
	    }; 
	    this.printHTML=function() { 
	    	var obj=document.getElementById(viewer.vid +"Popup_PrintDialog"); 
	    	if (obj) { 
	    		var limitpage=viewer.params.printlimit; 
	    		if (!limitpage || limitpage == "") 
	    			limitpage="20"; 
	    		if (viewer.totalPage <= parseInt(limitpage)) { 
	    			var allobj=document.getElementById(viewer.vid + "_PrintDialog_All"); 
	    			allobj.checked=true; 
	    			document.getElementById(viewer.vid + "_PrintDialog_Comment").style.display='none'; 
	    		} else { 
	    			var allobj=document.getElementById(viewer.vid + "_PrintDialog_Pages"); 
	    			allobj.checked=true; 
	    			document.getElementById(viewer.vid + "_PrintDialog_PageFrom").value=1; 
	    			document.getElementById(viewer.vid + "_PrintDialog_PageTo").value=limitpage; 
	    		} 
	    		var commentobj=document.getElementById(viewer.vid + "_PrintDialog_Landscape"); 
	    		if (commentobj && __ubi_isIE && viewer.pageOrientation == "Landscape") { 
	    			commentobj.style.display=''; 
	    		} else { 
	    			commentobj.style.display='none'; 
	    		} 
	    		obj.style.display=""; 
	    	} 
	    }; 
	    this.printok=function() { 
	    	var allobj=document.getElementById(viewer.vid + "_PrintDialog_All"); 
	    	var currobj=document.getElementById(viewer.vid + "_PrintDialog_Current"); 
	    	var pagesobj=document.getElementById(viewer.vid + "_PrintDialog_Pages"); 
	    	var pagefrom=1, pageto=1; 
	    	if (allobj.checked) { 
	    		pageto=viewer.totalPage; 
	    	} else if (currobj.checked) { 
	    		pagefrom=this.page; 
	    		pageto=this.page; 
	    	} else if (pagesobj.checked) { 
	    		var fromobj=document.getElementById(viewer.vid + "_PrintDialog_PageFrom"); 
	    		var toobj=document.getElementById(viewer.vid + "_PrintDialog_PageTo"); 
	    		pagefrom=parseInt(fromobj.value); 
	    		pageto=parseInt(toobj.value); 
	    	} 
	    	if (pagefrom < 1 || pageto > viewer.totalPage) { 
	    		alert("페이지 범위를 벗었났습니다.\n다시 입력하여 주십시오."); 
	    		return; 
	    	} 
	    	if ((pageto - pagefrom + 1) > viewer.params.printlimit) { 
	    		alert("HTML인쇄 허용 페이지 범위를 벗었났습니다.\n(최대 인쇄 가능 페이지수는 "+ viewer.params.printlimit +"페이지 입니다.)\n다시 입력하여 주십시오."); 
	    		return; 
	    	} 
	    	document.getElementById(viewer.vid +"Popup_PrintDialog").style.display='none'; 
	    	if (viewer.params.isStreaming) {
	    		viewer._printRetrieveAll(pagefrom, pageto); 
	    	} else {
	    		viewer._printHTML(pagefrom, pageto); 
	    	}
	    }; 
	    this.enableButton=function(buttonid, flag) { 
	    	var button=this.buttons[buttonid]; 
	    	if (button) { 
	    		var orgImage=button.getAttribute("outimage"); 
	    	    if (orgImage) { 
	    	    	var disImage=button.getAttribute("disimage"); 
	    	        if (flag) {
	    	        	button.style.backgroundImage="url('"+ viewer.params.resource + "/images/toolbar/"+ orgImage +"')"; 
	    	        } else {
	    	        	button.style.backgroundImage="url('"+ viewer.params.resource + "/images/toolbar/"+ disImage +"')"; 
	    	        }
	            } 
	    	    if (flag) {
	    	    	button.disabled=false; 
	    	    } else {
	    	    	button.disabled=true; 
	    	    }
	    	} 
	    }; 
	    this.isEnabledButton=function(buttonid) { 
	    	var button=this.buttons[buttonid]; 
	    	if (button) { 
	    		if (button.disabled == undefined)
	    			return true; 
	    		return !button.disabled; 
	    	} 
	    	return false; 
	    }; 
	    this.setStatus=function() { 
	    	if (this.page == viewer.totalPage || viewer.totalPage <= 1) { 
	    		this.enableButton("NextButton", false); 
	    	    this.enableButton("LastButton", false); 
	    	} else { 
	    		this.enableButton("NextButton", true); 
	    		this.enableButton("LastButton", true); 
	    	} 
	    	if (this.page == 1 || this.page == 0 || viewer.totalPage <= 1) { 
	    		this.enableButton("FirstButton", false); 
	    		this.enableButton("PreviousButton", false); 
	    	} else { 
	    		this.enableButton("FirstButton", true); 
	    		this.enableButton("PreviousButton", true); 
	    	} 
	    	this.enableButton("ZoomOutButton", false); 
	    	this.enableButton("ZoomInButton", false); 
	    	if (viewer.totalPage > 0) { 
	    		if (this.scaleIndex > 0) { 
	    			this.enableButton("ZoomOutButton", true); 
	    	    } 
	    		if (this.scaleIndex < (this.scaleValues.length-1)) { 
	    			this.enableButton("ZoomInButton", true); 
	    		} 
	    	} 
	    	if (viewer.totalPage > 0) { 
	    		this.enableButton("SaveButton", true); 
	    		this.enableButton("PrintButton", true); 
	    		this.enableButton("PrintSetButton", true); 
	    		this.enableButton("RefreshButton", true); 
	    		this.enableButton("SaveDropMenu", true); this.enableButton("PrintDropMenu", true); 
	    	} else { 
	    		this.enableButton("SaveButton", false); 
	    		this.enableButton("PrintButton", false); 
	    		this.enableButton("PrintSetButton", false); 
	    		this.enableButton("RefreshButton", false); 
	    		this.enableButton("SaveDropMenu", false); 
	    		this.enableButton("PrintDropMenu", false); 
	    	} 
	    }; 
	    this.setVisibleToolbar=function(id, flag) {
	    	var tdid=viewer.vid +"UbiToolbar_"; 
	    	var name=id.toUpperCase(); 
	    	var display=(flag)?"":"none"; 
	    	switch(name) { 
	    	    case "SAVE": 
	    	    	this.buttontds["SaveButton"].style.display=display; 
	    	    	this.buttontds["SaveText"].style.display=display; 
	    	    	this.buttontds["SaveDropMenu"].style.display=display; 
	    	    	break; 
	    	    case "SAVEBUTTON": 
	    	    	this.buttontds["SaveButton"].style.display=display; 
	    	    	break; 
	    	    case "SAVETEXT": 
	    	    	this.buttontds["SaveText"].style.display=display; 
	    	        break; 
	    	    case "SAVEDROPMENU": 
	    	    	this.buttontds["SaveDropMenu"].style.display=display; 
	    	        break; 
	    	    case "PRINT": 
	    	    	this.buttontds["PrintButton"].style.display=display; 
	    	        this.buttontds["PrintText"].style.display=display; 
	    	        this.buttontds["PrintDropMenu"].style.display=display; 
	    	        break; 
	    	    case "PRINTBUTTON": 
	    	    	this.buttontds["PrintButton"].style.display=display; 
	    	    	break; 
	    	    case "PRINTTEXT": 
	    	    	this.buttontds["PrintText"].style.display=display; 
	    	    	break; 
	    	    case "PRINTDROPMENU": 
	    	    	this.buttontds["PrintDropMenu"].style.display=display; 
	    	    	break; 
	    	    case "PRINTSET": 
	    	    	this.buttontds["PrintSetButton"].style.display=display; 
	    	    	this.buttontds["PrintSetText"].style.display=display; 
	    	    	break; 
	    	    case "PRINTSETBUTTON": 
	    	    	this.buttontds["PrintSetButton"].style.display=display; 
	    	    	break; 
	    	    case "PRINTSETTEXT": 
	    	    	this.buttontds["PrintSetText"].style.display=display; 
	    	    	break; 
	    	    case "NAVIGATION": 
	    	    	this.buttontds["NaviSep"].style.display=display; 
	    	    	this.buttontds["FirstButton"].style.display=display; 
	    	    	this.buttontds["PreviousButton"].style.display=display; 
	    	    	this.buttontds["PageCombo"].style.display=display; 
	    	    	this.buttontds["TotalPageText"].style.display=display; 
	    	    	this.buttontds["NextButton"].style.display=display; 
	    	    	this.buttontds["LastButton"].style.display=display; 
	    	    	break; 
	    	    case "FIRST": 
	    	    	this.buttontds["FirstButton"].style.display=display; 
	    	    	break; 
	    	    case "PREV": 
	    	    	this.buttontds["PreviousButton"].style.display=display; 
	    	    	break; 
	    	    case "PAGE": 
	    	    	this.buttontds["PageCombo"].style.display=display; 
	    	    	break; 
	    	    case "TOTALPAGE": 
	    	    	this.buttontds["TotalPageText"].style.display=display; 
	    	    	break; 
	    	    case "NEXT": 
	    	    	this.buttontds["NextButton"].style.display=display; 
	    	    	break; 
	    	    case "LAST": 
	    	    	this.buttontds["LastButton"].style.display=display; 
	    	    	break; 
	    	    case "PAGECOMBO": 
	    	    	this.buttontds["PageCombo"].style.display=display; 
	    	    	break; 
	    	    case "TOTALPAGETEXT": 
	    	    	this.buttontds["TotalPageText"].style.display=display; 
	    	    	break; 
	    	    case "ZOOM": 
	    	    	this.buttontds["ZoomSep"].style.display=display; 
	    	    	this.buttontds["ZoomOutButton"].style.display=display; 
	    	    	this.buttontds["ZoomCombo"].style.display=display; 
	    	    	this.buttontds["ZoomInButton"].style.display=display; 
	    	    	break; 
	    	    case "ZOOM_OUT": 
	    	    	this.buttontds["ZoomOutButton"].style.display=display; 
	    	    	break; 
	    	    case "ZOOM_VALUE": 
	    	    	this.buttontds["ZoomCombo"].style.display=display; 
	    	    	break; 
	    	    case "ZOOM_IN": 
	    	    	this.buttontds["ZoomInButton"].style.display=display; 
	    	    	break; 
	    	    case "REFRESH": 
	    	    	this.buttontds["RefreshButton"].style.display=display; 
	    	    	break; 
	    	    case "INFO": 
	    	    	this.buttontds["AboutButton"].style.display=display; 
	    	    	break; 
	    	    case "SAVE_PDF": 
	    	    	this.buttons["SavePdf"].style.display=display; 
	    	    	break; 
	    	    case "SAVE_EXCEL": 
	    	    	this.buttons["SaveXls"].style.display=display; 
	    	    	break; 
	    	    case "SAVE_RTF": 
	    	    	this.buttons["SaveRtf"].style.display=display; 
	    	    	break; 
	    	    case "SAVE_HWP": 
	    	    	this.buttons["SaveHwp"].style.display=display; 
	    	    	break; 
	    	    case "SAVE_PPTX": 
	    	    	this.buttons["SavePptx"].style.display=display; 
	    	    	break; 
	    	    case "SAVE_HML": 
	    	    	this.buttons["SaveHml"].style.display=display; 
	    	    	break; 
	    	    case "SAVE_DOCX": 
	    	    	this.buttons["SaveDocx"].style.display=display; 
	    	    	break; 
	    	    case "SAVE_CELL": 
	    	    	this.buttons["SaveCell"].style.display=display; 
	    	    	break; 
	    	    case "EXCEL_TYPE1": 
	    	    	this.buttons["SaveExcelPrint"].style.display=display; 
	    	    	break; 
	    	    case "EXCEL_TYPE2": 
	    	    	this.buttons["SaveExcelBase"].style.display=display; 
	    	    	break; 
	    	    case "PRINT_PDF": 
	    	    	this.buttons["PrintPdf"].style.display=display; 
	    	    	break; 
	    	    case "PRINT_HTML": 
	    	    	this.buttons["PrintHtml"].style.display=display; 
	    	    	break; 
	    	} 
	    	var isVisiblePrintPDF=(this.buttons["PrintPdf"].style.display == 'none')?false:true; 
	    	var isVisiblePrintHTML=(this.buttons["PrintHtml"].style.display == 'none')?false:true; 
	    	if ( (!isVisiblePrintPDF && !isVisiblePrintHTML) || (isVisiblePrintPDF && !isVisiblePrintHTML && this.printDefaultType == 'PDF') || (isVisiblePrintHTML && !isVisiblePrintPDF && this.printDefaultType == 'HTML') ) { 
	    		this.buttontds["PrintDropMenu"].style.display='none'; 
	    	} else { 
	    		this.buttontds["PrintDropMenu"].style.display=''; 
	    	} 
	    }; 
	    this.setMenuTextToolbar=function(id, text) { 
	    	var name=id.toUpperCase(); 
	        switch(name) { 
	            case "SAVE": this.buttons["SaveText"].innerHTML=text; break; 
	            case "PRINT": this.buttons["PrintText"].innerHTML=text; break; 
	            case "PRINTSET": this.buttons["PrintSetText"].innerHTML=text; break; 
	            case "PDF": this.buttons["SavePdf"].value=text; break; 
	            case "EXCEL": this.buttons["SaveXls"].value=text; break; 
	            case "RTF": this.buttons["SaveRtf"].value=text; break; 
	            case "DOCX": this.buttons["SaveDocx"].value=text; break; 
	            case "PPTX": this.buttons["SavePptx"].value=text; break; 
	            case "HWP": this.buttons["SaveHwp"].value=text; break; 
	            case "HML": this.buttons["SaveHml"].value=text; break; 
	            case "CELL": this.buttons["SaveCell"].value=text; break; 
	            case "EXCEL_TYPE1": this.buttons["SaveExcelPrint"].value=text; break; 
	            case "EXCEL_TYPE2": this.buttons["SaveExcelBase"].value=text; break; 
	            case "PRINT_PDF": this.buttons["PrintPdf"].value=text; break; 
	            case "PRINT_HTML": this.buttons["PrintHtml"].value=text; break; 
	        } 
	    }; 
	    this.jobStart=function() { 
	    	viewer.divDisable.style.width=viewer.divToolbar.clientWidth; 
	    	viewer.divDisable.style.height=viewer.divToolbar.style.height; 
	    	viewer.divDisable.style.display=""; 
	    	viewer.divMain.style.cursor="progress"; 
	    }; 
	    this.jobEnd=function() { 
	    	viewer.divDisable.style.display="none"; 
	    	viewer.divMain.style.cursor="default"; 
	    }; 
	    this.initToolbar(); function clicked(e) { 
	    	var target=e.target || e.srcElement; 
	    	if (!target || !target.id || target.id.substring(0, vid.length) != vid) { 
	    		__ubi_viewers[vid].toolbar.hidePopupAll(); 
	    		return; 
	    	}
	    	var targetid=target.id; 
	    	if (targetid == (vid +"UbiToolbarButton_ZoomCombo")) { 
	    		if (__ubi_viewers[vid].toolbar.isShowPopup("ZoomCombo") == false) { 
	    			__ubi_viewers[vid].toolbar.hidePopupAll(); 
	    			__ubi_viewers[vid].toolbar.showComboBox("ZoomCombo"); 
	    			return; 
	    		} 
	    	} else if (targetid == (vid +"UbiToolbarButton_PageCombo")) { 
	    		if (__ubi_viewers[vid].toolbar.isShowPopup("PageCombo") == false) { 
	    			__ubi_viewers[vid].toolbar.hidePopupAll(); 
	    			__ubi_viewers[vid].toolbar.showComboBox("PageCombo"); 
	    			return; 
	    		} 
	    	} else if (targetid == (vid +"UbiToolbarButton_SaveDropMenu")) { 
	    		if (__ubi_viewers[vid].toolbar.isShowPopup("SaveDropMenu") == false) { 
	    			__ubi_viewers[vid].toolbar.hidePopupAll(); 
	    			__ubi_viewers[vid].toolbar.showPopup("SaveDropMenu"); 
	    			return; 
	    	    } 
	        } else if (targetid == (vid +"UbiToolbarButton_PrintDropMenu")) { 
	        	if (__ubi_viewers[vid].toolbar.isShowPopup("PrintDropMenu") == false) { 
	        		__ubi_viewers[vid].toolbar.hidePopupAll(); 
	        	   __ubi_viewers[vid].toolbar.showPopup("PrintDropMenu"); 
	        	   return; 
	        	} 
	        } 
	    	var viewer=__ubi_viewers[vid]; 
	    	var toolbarid=vid + "UbiToolbarButton_"; 
	    	if (targetid.indexOf(vid +"ZoomOption_") == 0) { 
	    		var scale=target.getAttribute("value"); 
	    		viewer.toolbar.changeScale(scale); 
	    	} else if (targetid.indexOf(vid +"PageOption_") == 0) { 
	    		var page=targetid.substring(targetid.lastIndexOf("_")+1); 
	    		viewer.toolbar.movePage(parseInt(page)); 
	    	} else if (targetid == toolbarid +"FirstButton") { 
	    		if (viewer.toolbar.isEnabledButton("FirstButton")) 
	    			__ubi_viewers[vid].toolbar.first(); 
	    	} else if (targetid == toolbarid +"PreviousButton") { 
	    		if (viewer.toolbar.isEnabledButton("PreviousButton")) 
	    			viewer.toolbar.previous(); 
	    	} else if (targetid == toolbarid +"NextButton") { 
	    		if (viewer.toolbar.isEnabledButton("NextButton")) 
	    			viewer.toolbar.next(); 
	    	} else if (targetid == toolbarid +"LastButton") { 
	    		if (viewer.toolbar.isEnabledButton("LastButton")) 
	    			viewer.toolbar.last(); 
	    	} else if (targetid == toolbarid +"ZoomOutButton") { 
	    		if (viewer.toolbar.isEnabledButton("ZoomOutButton")) 
	    			viewer.toolbar.zoomout(); 
	    	} else if (targetid == toolbarid +"ZoomInButton") { 
	    		if (viewer.toolbar.isEnabledButton("ZoomInButton")) 
	    			viewer.toolbar.zoomin(); 
	    	} else if (targetid == toolbarid +"RefreshButton") { 
	    		if (viewer.toolbar.isEnabledButton("RefreshButton")) 
	    			viewer.toolbar.refresh(); 
	    	} else if (targetid == toolbarid +"AboutButton") { 
	    		if (viewer.toolbar.isEnabledButton("AboutButton")) 
	    			viewer.toolbar.aboutbox(); 
	    	} else if (targetid == toolbarid +"PrintButton") { 
	    		if (viewer.toolbar.isEnabledButton("PrintButton")) { 
	    			// 2016.08.31 출력버튼 클릭시 메뉴팝업대신 출력 호출
	    			/*
	    			if (viewer.toolbar.printDefaultType == "") { 
	    				if (viewer.toolbar.isShowPopup("PrintDropMenu") == false) { 
	    					viewer.toolbar.hidePopupAll(); viewer.toolbar.showPopup("PrintDropMenu"); 
	    					return; 
	    				} 
	    			} else if (viewer.toolbar.printDefaultType == "PDF") { 
	    				viewer._printPDF(false); 
	    			} else if (viewer.toolbar.printDefaultType == "HTML") { 
	    				viewer.toolbar.printHTML(); 
	    			}
	    			*/
	    			viewer._printPDF(__ubi_isIE);
	    		} 
	    	} else if (targetid == toolbarid +"PrintSetButton") { 
	    		if (viewer.toolbar.isEnabledButton("PrintSetButton")) 
	    			viewer._printPDF(true); 
	    	} else if (targetid == toolbarid +"PrintPdf") { 
	    		if (viewer.toolbar.isEnabledButton("PrintPdf")) 
	    			viewer._printPDF(false); 
	    	} else if (targetid == toolbarid +"PrintHtml") { 
	    		if (viewer.toolbar.isEnabledButton("PrintHtml")) 
	    			viewer.toolbar.printHTML(); 
	    	} else if (targetid == toolbarid +"SaveButton") { 
	    		if (viewer.toolbar.isEnabledButton("SaveButton")) { 
	    			if (viewer.toolbar.saveDefaultType == "") { 
	    				if (viewer.toolbar.isShowPopup("SaveDropMenu") == false) { 
	    					viewer.toolbar.hidePopupAll(); 
	    					viewer.toolbar.showPopup("SaveDropMenu"); return; 
	    				} 
	    			} else { 
	    				viewer._exportReport(viewer.toolbar.saveDefaultType); 
	    			} 
	    		} 
	    	} else if (targetid == toolbarid +"SavePdf") { 
	    		if (viewer.toolbar.isEnabledButton("SavePdf")) 
	    			viewer._exportReport(__ubi_EXPORT_PDF); 
	    	} else if (targetid == toolbarid +"SaveExcel") { 
	    		if (viewer.toolbar.isEnabledButton("SaveExcel")) 
	    			viewer._exportReport(__ubi_EXPORT_EXCEL1); 
	    	} else if (targetid == toolbarid +"SaveExcelPrint") { 
	    		if (viewer.toolbar.isEnabledButton("SaveExcelPrint")) 
	    			viewer._exportReport(__ubi_EXPORT_EXCEL1); 
	    	} else if (targetid == toolbarid +"SaveExcelBase") { 
	    		if (viewer.toolbar.isEnabledButton("SaveExcelBase")) 
	    			viewer._exportReport(__ubi_EXPORT_EXCEL2); 
	    	} else if (targetid == toolbarid +"SaveRtf") { 
	    		if (viewer.toolbar.isEnabledButton("SaveRtf")) 
	    			viewer._exportReport(__ubi_EXPORT_RTF); 
	    	} else if (targetid == toolbarid +"SaveDocx") { 
	    		if (viewer.toolbar.isEnabledButton("SaveDocx")) 
	    			viewer._exportReport(__ubi_EXPORT_DOCX); 
	    	} else if (targetid == toolbarid +"SavePptx") { 
	    		if (viewer.toolbar.isEnabledButton("SavePptx")) 
	    			viewer._exportReport(__ubi_EXPORT_PPTX); 
	    	} else if (targetid == toolbarid +"SaveHwp") { 
	    		if (viewer.toolbar.isEnabledButton("SaveHwp")) 
	    			viewer._exportReport(__ubi_EXPORT_HWP); 
	    	} else if (targetid == toolbarid +"SaveHml") { 
	    		if (viewer.toolbar.isEnabledButton("SaveHml")) 
	    			viewer._exportReport(__ubi_EXPORT_HML); 
	    	} else if (targetid == toolbarid +"SaveCell") { 
	    		if (viewer.toolbar.isEnabledButton("SaveCell")) 
	    			viewer._exportReport(__ubi_EXPORT_CELL); 
	    	} 
	    	__ubi_viewers[vid].toolbar.hidePopupAll(); 
	    }; 
	    this.applyWA=function(id) { 
	    	var buttonNames=[ ["SaveButton", "저장"], ["SaveDropMenu", "저장유형 선택"], ["SavePdf", "PDF로 저장" ], ["SaveXls", "엑셀로 저장" ], ["SaveExcelPrint", "프린트형식의 엑셀로 저장" ], ["SaveExcelBase", "리스트형식의 엑셀로 저장" ], ["SaveRtf", "RTF 저장" ], ["SaveDocx", "MS워드로 저장" ], ["SavePptx", "파워포인트로 저장" ], ["SaveHwp", "한글파일로 저장" ], ["SaveHml", "한글파일로 저장" ], ["SaveCell", "한셀로 저장" ], ["PrintButton", "인쇄"], ["PrintDropMenu", "인쇄유형 선택"], ["PrintPdf", "PDF로 인쇄" ], ["PrintHtml", "HTML로 인쇄"], ["PrintSetButton", "인쇄설정"], ["FirstButton", "첫번째 페이지로 이동"], ["PreviousButton", "이전 페이지로 이동"], ["NextButton", "다음 페이지로 이동"], ["LastButton", "마지막 페이지로 이동"], ["ZoomOutButton", "축소"], ["ZoomInButton", "확대"], ["RefreshButton", "새로고침"], ["AboutButton", "솔루션 정보" ] ]; 
	    	var obj=null; 
	    	var tabindex=4; 
	    	for (var i=0; i<buttonNames.length; i++) { 
	    		obj=this.buttons[buttonNames[i][0]]; 
	    		if (obj) { 
	    			obj.title=buttonNames[i][1]; 
	    		    obj.setAttribute("tabindex", ""+(tabindex++)); 
	                switch (buttonNames[i][0]) { 
	                    case "SavePdf": 
	                    case "SaveXls": 
	                    case "SaveRtf": 
	                    case "SaveDocx": 
	                    case "SavePptx": 
	                    case "SaveHwp": 
	                    case "SaveHml": 
	                    case "SaveCell": 
	                    case "SaveExcelPrint": 
					    case "SaveExcelBase": 
						    break; 
					    default: 
					    	obj.setAttribute("onfocus", "_ubi_wafoucus(this)"); 
					        obj.setAttribute("onblur", "_ubi_wablur(this)"); 
			        }
		       }
	        }
        };
    };
}