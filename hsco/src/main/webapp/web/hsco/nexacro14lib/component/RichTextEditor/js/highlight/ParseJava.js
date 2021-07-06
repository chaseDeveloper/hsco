﻿if(!window.RichTextEditor){throw new Error("RichTextEditor is not defined !!");}if(!RichTextEditor.Highlight){throw new Error("RichTextEditor.Highlight is not defined !!");}if(!RichTextEditor.Highlight.ParseJava){RichTextEditor.Highlight.ParseJava={init:function(){var _a=arguments[0];var _b=_a.indentUnit;var _c=_a.tokenizeJava;var _d={"atom":true,"number":true,"string":true,"regexp":true};var _e=false;function JavaLexical(_f,_g,_h,_i,_j,_k){this.indented=_f;this.column=_g;this.type=_h;if(_i!=null){this.align=_i;}this.prev=_j;this.info=_k;}function indentJava(_f){return function(_g){var _h=_g&&_g.charAt(0),_i=_f.type;var _j=_h==_i;if(_i=="form"&&_h=="{"){return _f.indented;}else if(_i=="stat"||_i=="form"){return _f.indented+_b;}else if(_f.info=="switch"&&!_j){return _f.indented+(/^(?:case|default)\b/.test(_g)?_b:2*_b);}else if(_f.align){return _f.column-(_j?1:0);}else{return _f.indented+(_j?0:_b);}};}function parseJava(_f,_g){var _h=_c(_f);var _i=[statements];var _j=new JavaLexical(_g||0,0,"block",false);var _k=0;var _l=0;var _m,_n;var _o={next:next,copy:copy};function next(){while(_i[_i.length-1].lex){_i.pop()();}var _p=_h.next();if(_p.type=="whitespace"&&_k==0){_l=_p.value.length;}_k+=_p.value.length;if(_p.content=="\n"){_l=_k=0;if(!("align" in _j)){_j.align=false;}_p.indentation=indentJava(_j);}if(_p.type=="whitespace"||_p.type=="comment"||_p.type=="javadoc"||_p.type=="annotation"){return _p;}if(!("align" in _j)){_j.align=true;}while(true){_m=_n=false;_i.pop()(_p.type,_p.content);if(_m){if(_n){_p.style=_n;}return _p;}}}function copy(){var _p=_j,_q=_i.concat([]),_r=_h.state;return function copyParser(_f){_j=_p;_i=_q.concat([]);_k=_l=0;_h=_c(_f,_r);return _o;};}function push(_p){for(var _q=_p.length-1;_q>=0;_q-- ){_i.push(_p[_q]);}}function cont(){push(arguments);_m=true;}function pass(){push(arguments);_m=false;}function mark(_p){_n=_p;}function pushlex(_p,_q){var _r=function(){_j=new JavaLexical(_l,_k,_p,null,_j,_q);};_r.lex=true;return _r;}function poplex(){_j=_j.prev;}poplex.lex=true;function expect(_p){return function expecting(_q){if(_q==_p){cont();}else{cont(arguments.callee);}};}function statements(_p){return pass(statement,statements);}function statement(_p){if(_p=="keyword a"){cont(pushlex("form"),expression,statement,poplex);}else if(_p=="keyword b"){cont(pushlex("form"),statement,poplex);}else if(_p=="{"){cont(pushlex("}"),block,poplex);}else if(_p=="for"){cont(pushlex("form"),expect("("),pushlex(")"),forspec1,expect(")"),poplex,statement,poplex);}else if(_p=="variable"){cont(pushlex("stat"),maybelabel);}else if(_p=="switch"){cont(pushlex("form"),expression,pushlex("}","switch"),expect("{"),block,poplex,poplex);}else if(_p=="case"){cont(expression,expect(":"));}else if(_p=="default"){cont(expect(":"));}else if(_p=="catch"){cont(pushlex("form"),expect("("),function(){},expect(")"),statement,poplex);}else if(_p=="class"){cont();}else if(_p=="interface"){cont();}else if(_p=="keyword c"){cont(statement);}else{pass(pushlex("stat"),expression,expect(";"),poplex);}}function expression(_p){if(_d.hasOwnProperty(_p)){cont(maybeoperator);}else if(_p=="keyword c"){cont(expression);}else if(_p=="("){cont(pushlex(")"),expression,expect(")"),poplex,maybeoperator);}else if(_p=="operator"){cont(expression);}else if(_p=="["){cont(pushlex("]"),commasep(expression,"]"),poplex,maybeoperator);}}function maybeoperator(_p){if(_p=="operator"){cont(expression);}else if(_p=="("){cont(pushlex(")"),expression,commasep(expression,")"),poplex,maybeoperator);}else if(_p=="["){cont(pushlex("]"),expression,expect("]"),poplex,maybeoperator);}}function maybelabel(_p){if(_p=="("){cont(commasep(function(){},")"),poplex,statement);}else if(_p=="{"){cont(poplex,pushlex("}"),block,poplex);}else{pass(maybeoperator,expect(";"),poplex);}}function commasep(_p,_q){function proceed(_r){if(_r==","){cont(_p,proceed);}else if(_r==_q){cont();}else{cont(expect(_q));}};return function commaSeparated(_r){if(_r==_q){cont();}else{pass(_p,proceed);}};}function block(_p){if(_p=="}"){cont();}else{pass(statement,block);}}function forspec1(_p){if(_p==";"){pass(forspec2);}else{pass(forspec2);}}function formaybein(_p,_q){if(_q=="in"){cont(expression);}else{cont(maybeoperator,forspec2);}}function forspec2(_p,_q){if(_p==";"){cont(forspec3);}else if(_q=="in"){cont(expression);}else{cont(expression,expect(";"),forspec3);}}function forspec3(_p){if(_p==")"){pass();}else{cont(expression);}}return _o;}return {make:parseJava,electricChars:"{}:",configure:function(_f){if(_f.json!=null){_e=_f.json;}}};}};}