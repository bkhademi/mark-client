/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
;
/*
 AngularJS v1.4.12
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(R,U,u){'use strict';function A(a){return function(){var b=arguments[0],d;d="["+(a?a+":":"")+b+"] http://errors.angularjs.org/1.4.12/"+(a?a+"/":"")+b;for(b=1;b<arguments.length;b++){d=d+(1==b?"?":"&")+"p"+(b-1)+"=";var c=encodeURIComponent,e;e=arguments[b];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;d+=c(e)}return Error(d)}}function Aa(a){if(null==a||Ya(a))return!1;if(L(a)||I(a)||D&&a instanceof D)return!0;
var b="length"in Object(a)&&a.length;return P(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"==typeof a.item)}function p(a,b,d){var c,e;if(a)if(H(a))for(c in a)"prototype"==c||"length"==c||"name"==c||a.hasOwnProperty&&!a.hasOwnProperty(c)||b.call(d,a[c],c,a);else if(L(a)||Aa(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==p)a.forEach(b,d,a);else if(nc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&
b.call(d,a[c],c,a);else for(c in a)sa.call(a,c)&&b.call(d,a[c],c,a);return a}function oc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function pc(a){return function(b,d){a(d,b)}}function Xd(){return++mb}function Mb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(K(g)||H(g))for(var h=Object.keys(g),k=0,m=h.length;k<m;k++){var l=h[k],n=g[l];d&&K(n)?ea(n)?a[l]=new Date(n.valueOf()):La(n)?a[l]=new RegExp(n):n.nodeName?a[l]=n.cloneNode(!0):
Nb(n)?a[l]=n.clone():(K(a[l])||(a[l]=L(n)?[]:{}),Mb(a[l],[n],!0)):a[l]=n}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function N(a){return Mb(a,ta.call(arguments,1),!1)}function Yd(a){return Mb(a,ta.call(arguments,1),!0)}function ca(a){return parseInt(a,10)}function Ob(a,b){return N(Object.create(a),b)}function v(){}function Za(a){return a}function ma(a){return function(){return a}}function qc(a){return H(a.toString)&&a.toString!==na}function r(a){return"undefined"===typeof a}function w(a){return"undefined"!==
typeof a}function K(a){return null!==a&&"object"===typeof a}function nc(a){return null!==a&&"object"===typeof a&&!rc(a)}function I(a){return"string"===typeof a}function P(a){return"number"===typeof a}function ea(a){return"[object Date]"===na.call(a)}function H(a){return"function"===typeof a}function La(a){return"[object RegExp]"===na.call(a)}function Ya(a){return a&&a.window===a}function $a(a){return a&&a.$evalAsync&&a.$watch}function Ma(a){return"boolean"===typeof a}function sc(a){return a&&P(a.length)&&
Zd.test(na.call(a))}function Nb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function $d(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function oa(a){return M(a.nodeName||a[0]&&a[0].nodeName)}function ab(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function Na(a,b){function d(a,b){var d=b.$$hashKey,e;if(L(a)){e=0;for(var f=a.length;e<f;e++)b.push(c(a[e]))}else if(nc(a))for(e in a)b[e]=c(a[e]);else if(a&&"function"===typeof a.hasOwnProperty)for(e in a)a.hasOwnProperty(e)&&
(b[e]=c(a[e]));else for(e in a)sa.call(a,e)&&(b[e]=c(a[e]));d?b.$$hashKey=d:delete b.$$hashKey;return b}function c(a){if(!K(a))return a;var b=e.indexOf(a);if(-1!==b)return f[b];if(Ya(a)||$a(a))throw Ba("cpws");var b=!1,c;L(a)?(c=[],b=!0):sc(a)?c=new a.constructor(a):ea(a)?c=new Date(a.getTime()):La(a)?(c=new RegExp(a.source,a.toString().match(/[^\/]*$/)[0]),c.lastIndex=a.lastIndex):"[object Blob]"===na.call(a)?c=new a.constructor([a],{type:a.type}):H(a.cloneNode)?c=a.cloneNode(!0):(c=Object.create(rc(a)),
b=!0);e.push(a);f.push(c);return b?d(a,c):c}var e=[],f=[];if(b){if(sc(b))throw Ba("cpta");if(a===b)throw Ba("cpi");L(b)?b.length=0:p(b,function(a,c){"$$hashKey"!==c&&delete b[c]});e.push(a);f.push(b);return d(a,b)}return c(a)}function fa(a,b){if(L(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(K(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function la(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,
c;if(d==typeof b&&"object"==d)if(L(a)){if(!L(b))return!1;if((d=a.length)==b.length){for(c=0;c<d;c++)if(!la(a[c],b[c]))return!1;return!0}}else{if(ea(a))return ea(b)?la(a.getTime(),b.getTime()):!1;if(La(a))return La(b)?a.toString()==b.toString():!1;if($a(a)||$a(b)||Ya(a)||Ya(b)||L(b)||ea(b)||La(b))return!1;d=Z();for(c in a)if("$"!==c.charAt(0)&&!H(a[c])){if(!la(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&w(b[c])&&!H(b[c]))return!1;return!0}return!1}function bb(a,b,d){return a.concat(ta.call(b,
d))}function tc(a,b){var d=2<arguments.length?ta.call(arguments,2):[];return!H(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,bb(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function ae(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=u:Ya(b)?d="$WINDOW":b&&U===b?d="$DOCUMENT":$a(b)&&(d="$SCOPE");return d}function cb(a,b){if(r(a))return u;P(b)||(b=b?2:null);return JSON.stringify(a,ae,b)}function uc(a){return I(a)?
JSON.parse(a):a}function vc(a,b){a=a.replace(be,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return isNaN(d)?b:d}function Pb(a,b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=vc(b,c);d*=b-c;a=new Date(a.getTime());a.setMinutes(a.getMinutes()+d);return a}function ua(a){a=D(a).clone();try{a.empty()}catch(b){}var d=D("<div>").append(a).html();try{return a[0].nodeType===Oa?M(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+M(b)})}catch(c){return M(d)}}function wc(a){try{return decodeURIComponent(a)}catch(b){}}
function xc(a){var b={};p((a||"").split("&"),function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=wc(e),w(e)&&(f=w(f)?wc(f):!0,sa.call(b,e)?L(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function Qb(a){var b=[];p(a,function(a,c){L(a)?p(a,function(a){b.push(ha(c,!0)+(!0===a?"":"="+ha(a,!0)))}):b.push(ha(c,!0)+(!0===a?"":"="+ha(a,!0)))});return b.length?b.join("&"):""}function nb(a){return ha(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,
"=").replace(/%2B/gi,"+")}function ha(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function ce(a,b){var d,c,e=Pa.length;for(c=0;c<e;++c)if(d=Pa[c]+b,I(d=a.getAttribute(d)))return d;return null}function de(a,b){var d,c,e={};p(Pa,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});p(Pa,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":",
"\\:")+"]"))&&(d=e,c=e.getAttribute(b))});d&&(e.strictDi=null!==ce(d,"strict-di"),b(d,c?[c]:[],e))}function yc(a,b,d){K(d)||(d={});d=N({strictDi:!1},d);var c=function(){a=D(a);if(a.injector()){var c=a[0]===U?"document":ua(a);throw Ba("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=db(b,d.strictDi);c.invoke(["$rootScope",
"$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;R&&e.test(R.name)&&(d.debugInfoEnabled=!0,R.name=R.name.replace(e,""));if(R&&!f.test(R.name))return c();R.name=R.name.replace(f,"");da.resumeBootstrap=function(a){p(a,function(a){b.push(a)});return c()};H(da.resumeDeferredBootstrap)&&da.resumeDeferredBootstrap()}function ee(){R.name="NG_ENABLE_DEBUG_INFO!"+R.name;R.location.reload()}
function fe(a){a=da.element(a).injector();if(!a)throw Ba("test");return a.get("$$testability")}function zc(a,b){b=b||"_";return a.replace(ge,function(a,c){return(c?b:"")+a.toLowerCase()})}function he(){var a;if(!Ac){var b=ob();(pa=r(b)?R.jQuery:b?R[b]:u)&&pa.fn.on?(D=pa,N(pa.fn,{scope:Qa.scope,isolateScope:Qa.isolateScope,controller:Qa.controller,injector:Qa.injector,inheritedData:Qa.inheritedData}),a=pa.cleanData,pa.cleanData=function(b){var c;if(Rb)Rb=!1;else for(var e=0,f;null!=(f=b[e]);e++)(c=
pa._data(f,"events"))&&c.$destroy&&pa(f).triggerHandler("$destroy");a(b)}):D=S;da.element=D;Ac=!0}}function pb(a,b,d){if(!a)throw Ba("areq",b||"?",d||"required");return a}function Ra(a,b,d){d&&L(a)&&(a=a[a.length-1]);pb(H(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Sa(a,b){if("hasOwnProperty"===a)throw Ba("badname",b);}function Bc(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&
H(a)?tc(e,a):a}function qb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=D(ta.call(a,0,e))),c.push(b);return c||a}function Z(){return Object.create(null)}function ie(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=A("$injector"),c=A("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||A;return b(a,"module",function(){var a={};return function(f,g,h){if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,
d,e,f){f||(f=c);return function(){f[e||"push"]([b,d,arguments]);return t}}function b(a,d){return function(b,e){e&&H(e)&&(e.$$moduleName=f);c.push([a,d,arguments]);return t}}if(!g)throw d("nomod",f);var c=[],e=[],G=[],z=a("$injector","invoke","push",e),t={_invokeQueue:c,_configBlocks:e,_runBlocks:G,requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide",
"decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:z,run:function(a){G.push(a);return this}};h&&z(h);return t})}})}function je(a){N(a,{bootstrap:yc,copy:Na,extend:N,merge:Yd,equals:la,element:D,forEach:p,injector:db,noop:v,bind:tc,toJson:cb,fromJson:uc,identity:Za,isUndefined:r,isDefined:w,isString:I,isFunction:H,isObject:K,isNumber:P,isElement:Nb,isArray:L,
version:ke,isDate:ea,lowercase:M,uppercase:rb,callbacks:{counter:0},getTestability:fe,$$minErr:A,$$csp:Ca,reloadWithDebugInfo:ee});Sb=ie(R);Sb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:le});a.provider("$compile",Cc).directive({a:me,input:Dc,textarea:Dc,form:ne,script:oe,select:pe,style:qe,option:re,ngBind:se,ngBindHtml:te,ngBindTemplate:ue,ngClass:ve,ngClassEven:we,ngClassOdd:xe,ngCloak:ye,ngController:ze,ngForm:Ae,ngHide:Be,ngIf:Ce,ngInclude:De,ngInit:Ee,ngNonBindable:Fe,
ngPluralize:Ge,ngRepeat:He,ngShow:Ie,ngStyle:Je,ngSwitch:Ke,ngSwitchWhen:Le,ngSwitchDefault:Me,ngOptions:Ne,ngTransclude:Oe,ngModel:Pe,ngList:Qe,ngChange:Re,pattern:Ec,ngPattern:Ec,required:Fc,ngRequired:Fc,minlength:Gc,ngMinlength:Gc,maxlength:Hc,ngMaxlength:Hc,ngValue:Se,ngModelOptions:Te}).directive({ngInclude:Ue}).directive(sb).directive(Ic);a.provider({$anchorScroll:Ve,$animate:We,$animateCss:Xe,$$animateJs:Ye,$$animateQueue:Ze,$$AnimateRunner:$e,$$animateAsyncRun:af,$browser:bf,$cacheFactory:cf,
$controller:df,$document:ef,$exceptionHandler:ff,$filter:Jc,$$forceReflow:gf,$interpolate:hf,$interval:jf,$http:kf,$httpParamSerializer:lf,$httpParamSerializerJQLike:mf,$httpBackend:nf,$xhrFactory:of,$location:pf,$log:qf,$parse:rf,$rootScope:sf,$q:tf,$$q:uf,$sce:vf,$sceDelegate:wf,$sniffer:xf,$templateCache:yf,$templateRequest:zf,$$testability:Af,$timeout:Bf,$window:Cf,$$rAF:Df,$$jqLite:Ef,$$HashMap:Ff,$$cookieReader:Gf})}])}function eb(a){return a.replace(Hf,function(a,d,c,e){return e?c.toUpperCase():
c}).replace(If,"Moz$1")}function Kc(a){a=a.nodeType;return 1===a||!a||9===a}function Lc(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(Tb.test(a)){d=d||e.appendChild(b.createElement("div"));c=(Jf.exec(a)||["",""])[1].toLowerCase();c=ja[c]||ja._default;d.innerHTML=c[1]+a.replace(Kf,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=bb(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";p(f,function(a){e.appendChild(a)});return e}function Mc(a,
b){var d=a.parentNode;d&&d.replaceChild(b,a);b.appendChild(a)}function S(a){if(a instanceof S)return a;var b;I(a)&&(a=T(a),b=!0);if(!(this instanceof S)){if(b&&"<"!=a.charAt(0))throw Ub("nosel");return new S(a)}if(b){b=U;var d;a=(d=Lf.exec(a))?[b.createElement(d[1])]:(d=Lc(a,b))?d.childNodes:[]}Nc(this,a)}function Vb(a){return a.cloneNode(!0)}function tb(a,b){b||ub(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,e=d.length;c<e;c++)ub(d[c])}function Oc(a,b,d,c){if(w(c))throw Ub("offargs");
var e=(c=vb(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];w(d)&&ab(c||[],d);w(d)&&c&&0<c.length||(a.removeEventListener(b,f,!1),delete e[b])};p(b.split(" "),function(a){g(a);wb[a]&&g(wb[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f,!1),delete e[b]}function ub(a,b){var d=a.ng339,c=d&&fb[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),Oc(a)),delete fb[d],a.ng339=u))}function vb(a,b){var d=a.ng339,d=d&&fb[d];b&&!d&&(a.ng339=d=++Mf,
d=fb[d]={events:{},data:{},handle:u});return d}function Wb(a,b,d){if(Kc(a)){var c=w(d),e=!c&&b&&!K(b),f=!b;a=(a=vb(a,!e))&&a.data;if(c)a[b]=d;else{if(f)return a;if(e)return a&&a[b];N(a,b)}}}function xb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function yb(a,b){b&&a.setAttribute&&p(b.split(" "),function(b){a.setAttribute("class",T((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+T(b)+" "," ")))})}function zb(a,
b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");p(b.split(" "),function(a){a=T(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",T(d))}}function Nc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function Pc(a,b){return Ab(a,"$"+(b||"ngController")+"Controller")}function Ab(a,b,d){9==a.nodeType&&(a=a.documentElement);for(b=
L(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(w(d=D.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function Qc(a){for(tb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Xb(a,b){b||tb(a);var d=a.parentNode;d&&d.removeChild(a)}function Nf(a,b){b=b||R;if("complete"===b.document.readyState)b.setTimeout(a);else D(b).on("load",a)}function Rc(a,b){var d=Bb[b.toLowerCase()];return d&&Sc[oa(a)]&&d}function Of(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};
var f=b[d||c.type],g=f?f.length:0;if(g){if(r(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=f.specialHandlerWrapper||Pf;1<g&&(f=fa(f));for(var m=0;m<g;m++)c.isImmediatePropagationStopped()||k(a,c,f[m])}};d.elem=a;return d}function Pf(a,b,d){d.call(a,b)}function Qf(a,b,
d){var c=b.relatedTarget;c&&(c===a||Rf.call(a,c))||d.call(a,b)}function Ef(){this.$get=function(){return N(S,{hasClass:function(a,b){a.attr&&(a=a[0]);return xb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return zb(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return yb(a,b)}})}}function Da(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"==d||"object"==d&&null!==a?a.$$hashKey=d+":"+(b||Xd)():d+":"+a}function Ta(a,b){if(b){var d=0;this.nextUid=
function(){return++d}}p(a,this.put,this)}function Sf(a){return(a=a.toString().replace(Tc,"").match(Uc))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function db(a,b){function d(a){return function(b,c){if(K(b))p(b,pc(a));else return a(b,c)}}function c(a,b){Sa(a,"service");if(H(b)||L(b))b=G.instantiate(b);if(!b.$get)throw Ea("pget",a);return n[a+"Provider"]=b}function e(a,b){return function(){var c=t.invoke(b,this);if(r(c))throw Ea("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==
d?e(a,b):b})}function g(a){pb(r(a)||L(a),"modulesToLoad","not an array");var b=[],c;p(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=G.get(e[0]);f[e[1]].apply(f,e[2])}}if(!l.get(a)){l.put(a,!0);try{I(a)?(c=Sb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):H(a)?b.push(G.invoke(a)):L(a)?b.push(G.invoke(a)):Ra(a,"module")}catch(e){throw L(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+
e.stack),Ea("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===k)throw Ea("cdep",b+" <- "+m.join(" <- "));return a[b]}try{return m.unshift(b),a[b]=k,a[b]=c(b,e)}catch(f){throw a[b]===k&&delete a[b],f;}finally{m.shift()}}function e(a,c,f,g){"string"===typeof f&&(g=f,f=null);var k=[],h=db.$$annotate(a,b,g),m,l,q;l=0;for(m=h.length;l<m;l++){q=h[l];if("string"!==typeof q)throw Ea("itkn",q);k.push(f&&f.hasOwnProperty(q)?f[q]:d(q,g))}L(a)&&
(a=a[m]);return a.apply(c,k)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((L(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return K(a)||H(a)?a:d},get:d,annotate:db.$$annotate,has:function(b){return n.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},m=[],l=new Ta([],!0),n={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,ma(b),!1)}),constant:d(function(a,
b){Sa(a,"constant");n[a]=b;z[a]=b}),decorator:function(a,b){var c=G.get(a+"Provider"),d=c.$get;c.$get=function(){var a=t.invoke(d,c);return t.invoke(b,null,{$delegate:a})}}}},G=n.$injector=h(n,function(a,b){da.isString(b)&&m.push(b);throw Ea("unpr",m.join(" <- "));}),z={},t=z.$injector=h(z,function(a,b){var c=G.get(a+"Provider",b);return t.invoke(c.$get,c,u,a)});p(g(a),function(a){a&&t.invoke(a)});return t}function Ve(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location",
"$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===oa(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;H(c)?c=c():Nb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):P(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=I(a)?a:d.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):
f(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||Nf(function(){c.$evalAsync(g)})});return g}]}function gb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;L(a)&&(a=a.join(" "));L(b)&&(b=b.join(" "));return a+" "+b}function Tf(a){I(a)&&(a=a.split(" "));var b=Z();p(a,function(a){a.length&&(b[a]=!0)});return b}function Fa(a){return K(a)?a:{}}function Uf(a,b,d,c){function e(a){try{a.apply(null,ta.call(arguments,1))}finally{if(t--,0===t)for(;F.length;)try{F.pop()()}catch(b){d.error(b)}}}
function f(){E=null;g();h()}function g(){a:{try{q=l.state;break a}catch(a){}q=void 0}q=r(q)?null:q;la(q,C)&&(q=C);C=q}function h(){if(x!==k.url()||y!==q)x=k.url(),y=q,p(Q,function(a){a(k.url(),q)})}var k=this,m=a.location,l=a.history,n=a.setTimeout,G=a.clearTimeout,z={};k.isMock=!1;var t=0,F=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){t++};k.notifyWhenNoOutstandingRequests=function(a){0===t?a():F.push(a)};var q,y,x=m.href,V=b.find("base"),E=null;g();y=q;k.url=function(b,
d,e){r(e)&&(e=null);m!==a.location&&(m=a.location);l!==a.history&&(l=a.history);if(b){var f=y===e;if(x===b&&(!c.history||f))return k;var h=x&&Ga(x)===Ga(b);x=b;y=e;if(!c.history||h&&f){if(!h||E)E=b;d?m.replace(b):h?(d=m,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):m.href=b;m.href!==b&&(E=b)}else l[d?"replaceState":"pushState"](e,"",b),g(),y=q;return k}return E||m.href.replace(/%27/g,"'")};k.state=function(){return q};var Q=[],B=!1,C=null;k.onUrlChange=function(b){if(!B){if(c.history)D(a).on("popstate",
f);D(a).on("hashchange",f);B=!0}Q.push(b);return b};k.$$applicationDestroyed=function(){D(a).off("hashchange popstate",f)};k.$$checkUrlChange=h;k.baseHref=function(){var a=V.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};k.defer=function(a,b){var c;t++;c=n(function(){delete z[c];e(a)},b||0);z[c]=!0;return c};k.defer.cancel=function(a){return z[a]?(delete z[a],G(a),e(v),!0):!1}}function bf(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new Uf(a,c,b,
d)}]}function cf(){this.$get=function(){function a(a,c){function e(a){a!=n&&(G?G==a&&(G=a.n):G=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw A("$cacheFactory")("iid",a);var g=0,h=N({},c,{id:a}),k=Z(),m=c&&c.capacity||Number.MAX_VALUE,l=Z(),n=null,G=null;return b[a]={put:function(a,b){if(!r(b)){if(m<Number.MAX_VALUE){var c=l[a]||(l[a]={key:a});e(c)}a in k||g++;k[a]=b;g>m&&this.remove(G.key);return b}},get:function(a){if(m<Number.MAX_VALUE){var b=l[a];
if(!b)return;e(b)}return k[a]},remove:function(a){if(m<Number.MAX_VALUE){var b=l[a];if(!b)return;b==n&&(n=b.p);b==G&&(G=b.n);f(b.n,b.p);delete l[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=Z();g=0;l=Z();n=G=null},destroy:function(){l=h=k=null;delete b[a]},info:function(){return N({},h,{size:g})}}}var b={};a.info=function(){var a={};p(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function yf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}
function Cc(a,b){function d(a,b,c){var d=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,e=Z();p(a,function(a,f){if(a in l)e[f]=l[a];else{var g=a.match(d);if(!g)throw ga("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(l[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==M(b))throw ga("baddir",a);if(a!==a.trim())throw ga("baddir",a);}var e={},f=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,g=
/(([\w\-]+)(?:\:([^;]+))?;?)/,h=$d("ngSrc,ngSrcset,src,srcset"),k=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,l=Z();this.directive=function z(b,d){Sa(b,"directive");I(b)?(c(b),pb(d,"directiveFactory"),e.hasOwnProperty(b)||(e[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];p(e[b],function(e,f){try{var g=a.invoke(e);H(g)?g={compile:ma(g)}:!g.compile&&g.link&&(g.compile=ma(g.link));g.priority=g.priority||0;g.index=f;g.name=g.name||b;g.require=g.require||
g.controller&&g.name;g.restrict=g.restrict||"EA";g.$$moduleName=e.$$moduleName;d.push(g)}catch(h){c(h)}});return d}])),e[b].push(d)):p(b,pc(z));return this};this.aHrefSanitizationWhitelist=function(a){return w(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return w(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var n=!0;this.debugInfoEnabled=function(a){return w(a)?(n=a,this):n};this.$get=["$injector",
"$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,b,c,l,y,x,V,E,Q,B){function C(a,b){try{a.addClass(b)}catch(c){}}function J(a,b,c,d,e){a instanceof D||(a=D(a));for(var f=/\S+/,g=0,h=a.length;g<h;g++){var k=a[g];k.nodeType===Oa&&k.nodeValue.match(f)&&Mc(k,a[g]=U.createElement("span"))}var m=W(a,b,a,c,d,e);J.$$addScopeClass(a);var l=null;return function(b,c,d){pb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());
d=d||{};var f=d.parentBoundTranscludeFn,g=d.transcludeControllers;d=d.futureParentElement;f&&f.$$boundTransclude&&(f=f.$$boundTransclude);l||(l=(d=d&&d[0])?"foreignobject"!==oa(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==l?D(Yb(l,D("<div>").append(a).html())):c?Qa.clone.call(a):a;if(g)for(var h in g)d.data("$"+h+"Controller",g[h].instance);J.$$addScopeInfo(d,b);c&&c(d,b);m&&m(b,d,d,f);return d}}function W(a,b,c,d,e,f){function g(a,c,d,e){var f,k,m,l,n,B,F;if(q)for(F=Array(c.length),
l=0;l<h.length;l+=3)f=h[l],F[f]=c[f];else F=c;l=0;for(n=h.length;l<n;)k=F[h[l++]],c=h[l++],f=h[l++],c?(c.scope?(m=a.$new(),J.$$addScopeInfo(D(k),m)):m=a,B=c.transcludeOnThisElement?O(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?O(a,b):null,c(f,m,k,d,B)):f&&f(a,k.childNodes,u,e)}for(var h=[],k,m,l,n,q,B=0;B<a.length;B++){k=new da;m=ia(a[B],[],k,0===B?d:u,e);(f=m.length?$(m,a[B],k,b,c,null,[],[],f):null)&&f.scope&&J.$$addScopeClass(k.$$element);k=f&&f.terminal||!(l=a[B].childNodes)||!l.length?
null:W(l,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(B,f,k),n=!0,q=q||f;f=null}return n?g:null}function O(a,b,c){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function ia(a,b,c,d,e){var h=c.$attr,k;switch(a.nodeType){case 1:qa(b,va(oa(a)),"E",d,e);for(var m,l,n,q=a.attributes,B=0,F=q&&q.length;B<F;B++){var x=!1,J=!1;m=q[B];k=m.name;l=T(m.value);m=
va(k);if(n=ja.test(m))k=k.replace(Wc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});(m=m.match(ka))&&A(m[1])&&(x=k,J=k.substr(0,k.length-5)+"end",k=k.substr(0,k.length-6));m=va(k.toLowerCase());h[m]=k;if(n||!c.hasOwnProperty(m))c[m]=l,Rc(a,m)&&(c[m]=!0);X(a,b,l,m,n);qa(b,m,"A",d,e,x,J)}a=a.className;K(a)&&(a=a.animVal);if(I(a)&&""!==a)for(;k=g.exec(a);)m=va(k[2]),qa(b,m,"C",d,e)&&(c[m]=T(k[3])),a=a.substr(k.index+k[0].length);break;case Oa:if(11===Ha)for(;a.parentNode&&a.nextSibling&&
a.nextSibling.nodeType===Oa;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);P(b,a.nodeValue);break;case 8:try{if(k=f.exec(a.nodeValue))m=va(k[1]),qa(b,m,"M",d,e)&&(c[m]=T(k[2]))}catch(y){}}b.sort(wa);return b}function Ua(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ga("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return D(d)}function s(a,b,c){return function(d,
e,f,g,k){e=Ua(e[0],b,c);return a(d,e,f,g,k)}}function $(a,b,d,e,f,g,h,m,l){function n(a,b,c,d){if(a){c&&(a=s(a,c,d));a.require=r.require;a.directiveName=w;if(C===r||r.$$isolateScope)a=ba(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=s(b,c,d));b.require=r.require;b.directiveName=w;if(C===r||r.$$isolateScope)b=ba(b,{isolateScope:!0});m.push(b)}}function q(a,b,c,d){var e;if(I(b)){var f=b.match(k);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;e||
(d="$"+b+"Controller",e=g?c.inheritedData(d):c.data(d));if(!e&&!f)throw ga("ctreq",b,a);}else if(L(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=q(a,b[g],c,d);return e||null}function B(a,b,c,d,e,f){var g=Z(),h;for(h in d){var k=d[h],m={$scope:k===C||k.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},l=k.controller;"@"==l&&(l=b[k.name]);m=x(l,m,!0,k.controllerAs);g[k.name]=m;a.data("$"+k.name+"Controller",m.instance)}return g}function y(a,c,e,f,g){function k(a,b,c){var d;$a(a)||(c=b,b=a,a=u);Q&&(d=
x);c||(c=Q?E.parent():E);return g(a,b,d,c,Ua)}var l,n,F,x,O,E,ia;b===e?(f=d,E=d.$$element):(E=D(e),f=new da(E,d));F=c;C?n=c.$new(!0):t&&(F=c.$parent);g&&(O=k,O.$$boundTransclude=g);z&&(x=B(E,f,O,z,n,c));C&&(J.$$addScopeInfo(E,n,!0,!(W&&(W===C||W===C.$$originalDirective))),J.$$addScopeClass(E,!0),n.$$isolateBindings=C.$$isolateBindings,(ia=aa(c,f,n,n.$$isolateBindings,C))&&n.$on("$destroy",ia));for(var Vc in x){ia=z[Vc];var V=x[Vc],p=ia.$$bindings.bindToController;V.identifier&&p&&(l=aa(F,f,V.instance,
p,ia));var r=V();r!==V.instance&&(V.instance=r,E.data("$"+ia.name+"Controller",r),l&&l(),l=aa(F,f,V.instance,p,ia))}A=0;for(M=h.length;A<M;A++)l=h[A],ca(l,l.isolateScope?n:c,E,f,l.require&&q(l.directiveName,l.require,E,x),O);var Ua=c;C&&(C.template||null===C.templateUrl)&&(Ua=n);a&&a(Ua,e.childNodes,u,g);for(A=m.length-1;0<=A;A--)l=m[A],ca(l,l.isolateScope?n:c,E,f,l.require&&q(l.directiveName,l.require,E,x),O)}l=l||{};for(var O=-Number.MAX_VALUE,t=l.newScopeDirective,z=l.controllerDirectives,C=l.newIsolateScopeDirective,
W=l.templateDirective,E=l.nonTlbTranscludeDirective,V=!1,p=!1,Q=l.hasElementTranscludeDirective,$=d.$$element=D(b),r,w,v,qa=e,wa,A=0,M=a.length;A<M;A++){r=a[A];var N=r.$$start,P=r.$$end;N&&($=Ua(b,N,P));v=u;if(O>r.priority)break;if(v=r.scope)r.templateUrl||(K(v)?(Va("new/isolated scope",C||t,r,$),C=r):Va("new/isolated scope",C,r,$)),t=t||r;w=r.name;!r.templateUrl&&r.controller&&(v=r.controller,z=z||Z(),Va("'"+w+"' controller",z[w],r,$),z[w]=r);if(v=r.transclude)V=!0,r.$$tlb||(Va("transclusion",E,
r,$),E=r),"element"==v?(Q=!0,O=r.priority,v=$,$=d.$$element=D(U.createComment(" "+w+": "+d[w]+" ")),b=$[0],Y(f,ta.call(v,0),b),qa=J(v,e,O,g&&g.name,{nonTlbTranscludeDirective:E})):(v=D(Vb(b)).contents(),$.empty(),qa=J(v,e,u,u,{needsNewScope:r.$$isolateScope||r.$$newScope}));if(r.template)if(p=!0,Va("template",W,r,$),W=r,v=H(r.template)?r.template($,d):r.template,v=ha(v),r.replace){g=r;v=Tb.test(v)?Xc(Yb(r.templateNamespace,T(v))):[];b=v[0];if(1!=v.length||1!==b.nodeType)throw ga("tplrt",w,"");Y(f,
$,b);v={$attr:{}};var S=ia(b,[],v),Vf=a.splice(A+1,a.length-(A+1));(C||t)&&Yc(S,C,t);a=a.concat(S).concat(Vf);R(d,v);M=a.length}else $.html(v);if(r.templateUrl)p=!0,Va("template",W,r,$),W=r,r.replace&&(g=r),y=Wf(a.splice(A,a.length-A),$,d,f,V&&qa,h,m,{controllerDirectives:z,newScopeDirective:t!==r&&t,newIsolateScopeDirective:C,templateDirective:W,nonTlbTranscludeDirective:E}),M=a.length;else if(r.compile)try{wa=r.compile($,d,qa),H(wa)?n(null,wa,N,P):wa&&n(wa.pre,wa.post,N,P)}catch(X){c(X,ua($))}r.terminal&&
(y.terminal=!0,O=Math.max(O,r.priority))}y.scope=t&&!0===t.scope;y.transcludeOnThisElement=V;y.templateOnThisElement=p;y.transclude=qa;l.hasElementTranscludeDirective=Q;return y}function Yc(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Ob(a[d],{$$isolateScope:b,$$newScope:c})}function qa(b,f,g,k,h,m,l){if(f===h)return null;h=null;if(e.hasOwnProperty(f)){var n;f=a.get(f+"Directive");for(var q=0,B=f.length;q<B;q++)try{if(n=f[q],(r(k)||k>n.priority)&&-1!=n.restrict.indexOf(g)){m&&(n=Ob(n,{$$start:m,$$end:l}));
if(!n.$$bindings){var x=n,J=n,y=n.name,O={isolateScope:null,bindToController:null};K(J.scope)&&(!0===J.bindToController?(O.bindToController=d(J.scope,y,!0),O.isolateScope={}):O.isolateScope=d(J.scope,y,!1));K(J.bindToController)&&(O.bindToController=d(J.bindToController,y,!0));if(K(O.bindToController)){var t=J.controller,C=J.controllerAs;if(!t)throw ga("noctrl",y);var E;a:{var J=t,W=C;if(W&&I(W))E=W;else{if(I(J)){var ia=Zc.exec(J);if(ia){E=ia[3];break a}}E=void 0}}if(!E)throw ga("noident",y);}var V=
x.$$bindings=O;K(V.isolateScope)&&(n.$$isolateBindings=V.isolateScope)}b.push(n);h=n}}catch(p){c(p)}}return h}function A(b){if(e.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=c[d],b.multiElement)return!0;return!1}function R(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;p(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});p(b,function(b,f){"class"==f?(C(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",
e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Wf(a,b,c,d,e,f,g,k){var h=[],m,n,B=b[0],F=a.shift(),x=Ob(F,{templateUrl:null,transclude:null,replace:null,$$originalDirective:F}),J=H(F.templateUrl)?F.templateUrl(b,c):F.templateUrl,y=F.templateNamespace;b.empty();l(J).then(function(l){var q,t;l=ha(l);if(F.replace){l=Tb.test(l)?Xc(Yb(y,T(l))):[];q=l[0];if(1!=l.length||1!==q.nodeType)throw ga("tplrt",F.name,J);l={$attr:{}};
Y(d,b,q);var z=ia(q,[],l);K(F.scope)&&Yc(z,!0);a=z.concat(a);R(c,l)}else q=B,b.html(l);a.unshift(x);m=$(a,q,c,e,b,F,f,g,k);p(d,function(a,c){a==q&&(d[c]=b[0])});for(n=W(b[0].childNodes,e);h.length;){l=h.shift();t=h.shift();var E=h.shift(),V=h.shift(),z=b[0];if(!l.$$destroyed){if(t!==B){var Q=t.className;k.hasElementTranscludeDirective&&F.replace||(z=Vb(q));Y(E,D(t),z);C(D(z),Q)}t=m.transcludeOnThisElement?O(l,m.transclude,V):V;m(n,l,z,d,t)}}h=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(h?
h.push(b,c,d,a):(m.transcludeOnThisElement&&(a=O(b,m.transclude,e)),m(n,b,c,d,a)))}}function wa(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Va(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ga("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,ua(d));}function P(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&J.$$addBindingClass(a);return function(a,c){var e=
c.parent();b||J.$$addBindingClass(e);J.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Yb(a,b){a=M(a||"html");switch(a){case "svg":case "math":var c=U.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function S(a,b){if("srcdoc"==b)return E.HTML;var c=oa(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return E.RESOURCE_URL}function X(a,c,d,e,f){var g=S(a,e);f=h[e]||f;var k=
b(d,!0,g,f);if(k){if("multiple"===e&&"select"===oa(a))throw ga("selmulti",ua(a));c.push({priority:100,compile:function(){return{pre:function(a,c,h){c=h.$$observers||(h.$$observers=Z());if(m.test(e))throw ga("nodomevents");var l=h[e];l!==d&&(k=l&&b(l,!0,g,f),d=l);k&&(h[e]=k(a),(c[e]||(c[e]=[])).$$inter=!0,(h.$$observers&&h.$$observers[e].$$scope||a).$watch(k,function(a,b){"class"===e&&a!=b?h.$updateClass(a,b):h.$set(e,a)}))}}}})}}function Y(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=
0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=U.createDocumentFragment();a.appendChild(d);D.hasData(d)&&(D.data(c,D.data(d)),pa?(Rb=!0,pa.cleanData([d])):delete D.cache[d[D.expando]]);d=1;for(e=b.length;d<e;d++)f=b[d],D(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function ba(a,b){return N(function(){return a.apply(null,arguments)},a,b)}function ca(a,
b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ua(d))}}function aa(a,c,d,e,f){var g=[];p(e,function(e,h){var k=e.attrName,m=e.optional,l,n,q,B;switch(e.mode){case "@":m||sa.call(c,k)||(d[h]=c[k]=void 0);c.$observe(k,function(a){I(a)&&(d[h]=a)});c.$$observers[k].$$scope=a;l=c[k];I(l)?d[h]=b(l)(a):Ma(l)&&(d[h]=l);break;case "=":if(!sa.call(c,k)){if(m)break;c[k]=void 0}if(m&&!c[k])break;n=y(c[k]);B=n.literal?la:function(a,b){return a===b||a!==a&&b!==b};q=n.assign||function(){l=d[h]=n(a);throw ga("nonassign",
c[k],k,f.name);};l=d[h]=n(a);m=function(b){B(b,d[h])||(B(b,l)?q(a,b=d[h]):d[h]=b);return l=b};m.$stateful=!0;m=e.collection?a.$watchCollection(c[k],m):a.$watch(y(c[k],m),null,n.literal);g.push(m);break;case "&":n=c.hasOwnProperty(k)?y(c[k]):v;if(n===v&&m)break;d[h]=function(b){return n(a,b)}}});return g.length&&function(){for(var a=0,b=g.length;a<b;++a)g[a]()}}var da=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};
da.prototype={$normalize:va,$addClass:function(a){a&&0<a.length&&Q.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&Q.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=$c(a,b);c&&c.length&&Q.addClass(this.$$element,c);(c=$c(b,a))&&c.length&&Q.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=Rc(this.$$element[0],a),g=ad[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=zc(a,"-"));f=
oa(this.$$element);if("a"===f&&"href"===a||"img"===f&&"src"===a)this[a]=b=B(b,"src"===a);else if("img"===f&&"srcset"===a&&w(b)){for(var f="",g=T(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),m=0;m<k;m++)var l=2*m,f=f+B(T(g[l]),!0),f=f+(" "+T(g[l+1]));g=T(g[2*m]).split(/\s/);f+=B(T(g[0]),!0);2===g.length&&(f+=" "+T(g[1]));this[a]=b=f}!1!==d&&(null===b||r(b)?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&p(a[h],
function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=Z()),e=d[a]||(d[a]=[]);e.push(b);V.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||r(c[a])||b(c[a])});return function(){ab(e,b)}}};var ea=b.startSymbol(),fa=b.endSymbol(),ha="{{"==ea&&"}}"==fa?Za:function(a){return a.replace(/\{\{/g,ea).replace(/}}/g,fa)},ja=/^ngAttr[A-Z]/,ka=/^(.+)Start$/;J.$$addBindingInfo=n?function(a,b){var c=a.data("$binding")||[];L(b)?c=c.concat(b):c.push(b);a.data("$binding",
c)}:v;J.$$addBindingClass=n?function(a){C(a,"ng-binding")}:v;J.$$addScopeInfo=n?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:v;J.$$addScopeClass=n?function(a,b){C(a,b?"ng-isolate-scope":"ng-scope")}:v;return J}]}function va(a){return eb(a.replace(Wc,""))}function $c(a,b){var d="",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],h=0;h<e.length;h++)if(g==e[h])continue a;d+=(0<d.length?" ":"")+g}return d}function Xc(a){a=D(a);var b=a.length;
if(1>=b)return a;for(;b--;)8===a[b].nodeType&&Xf.call(a,b,1);return a}function df(){var a={},b=!1;this.register=function(b,c){Sa(b,"controller");K(b)?N(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function e(a,b,c,d){if(!a||!K(a.$scope))throw A("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,k){var m,l,n;h=!0===h;k&&I(k)&&(n=k);if(I(f)){k=f.match(Zc);if(!k)throw Yf("ctrlfmt",f);l=k[1];n=n||k[3];f=a.hasOwnProperty(l)?a[l]:Bc(g.$scope,
l,!0)||(b?Bc(c,l,!0):u);Ra(f,l,!0)}if(h)return h=(L(f)?f[f.length-1]:f).prototype,m=Object.create(h||null),n&&e(g,n,m,l||f.name),N(function(){var a=d.invoke(f,m,g,l);a!==m&&(K(a)||H(a))&&(m=a,n&&e(g,n,m,l||f.name));return m},{instance:m,identifier:n});m=d.instantiate(f,g,l);n&&e(g,n,m,l||f.name);return m}}]}function ef(){this.$get=["$window",function(a){return D(a.document)}]}function ff(){this.$get=["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function Zb(a){return K(a)?
ea(a)?a.toISOString():cb(a):a}function lf(){this.$get=function(){return function(a){if(!a)return"";var b=[];oc(a,function(a,c){null===a||r(a)||(L(a)?p(a,function(a,d){b.push(ha(c)+"="+ha(Zb(a)))}):b.push(ha(c)+"="+ha(Zb(a))))});return b.join("&")}}}function mf(){this.$get=function(){return function(a){function b(a,e,f){null===a||r(a)||(L(a)?p(a,function(a,c){b(a,e+"["+(K(a)?c:"")+"]")}):K(a)&&!ea(a)?oc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push(ha(e)+"="+ha(Zb(a))))}if(!a)return"";var d=
[];b(a,"",!0);return d.join("&")}}}function $b(a,b){if(I(a)){var d=a.replace(Zf,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf(bd))||(c=(c=d.match($f))&&ag[c[0]].test(d));c&&(a=uc(d))}}return a}function cd(a){var b=Z(),d;I(a)?p(a.split("\n"),function(a){d=a.indexOf(":");var e=M(T(a.substr(0,d)));a=T(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):K(a)&&p(a,function(a,d){var f=M(d),g=T(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function dd(a){var b;return function(d){b||(b=cd(a));return d?
(d=b[M(d)],void 0===d&&(d=null),d):b}}function ed(a,b,d,c){if(H(c))return c(a,b,d);p(c,function(c){a=c(a,b,d)});return a}function kf(){var a=this.defaults={transformResponse:[$b],transformRequest:[function(a){return K(a)&&"[object File]"!==na.call(a)&&"[object Blob]"!==na.call(a)&&"[object FormData]"!==na.call(a)?cb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:fa(ac),put:fa(ac),patch:fa(ac)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},
b=!1;this.useApplyAsync=function(a){return w(a)?(b=!!a,this):b};var d=!0;this.useLegacyPromiseExtensions=function(a){return w(a)?(d=!!a,this):d};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(e,f,g,h,k,m){function l(b){function c(a){var b=N({},a);b.data=ed(a.data,a.headers,a.status,f.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b)}function e(a,b){var c,d={};p(a,function(a,e){H(a)?(c=a(b),null!=c&&(d[e]=
c)):d[e]=a});return d}if(!da.isObject(b))throw A("$http")("badreq",b);if(!I(b.url))throw A("$http")("badreq",b.url);var f=N({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer},b);f.headers=function(b){var c=a.headers,d=N({},b.headers),f,g,h,c=N({},c.common,c[M(b.method)]);a:for(f in c){g=M(f);for(h in d)if(M(h)===g)continue a;d[f]=c[f]}return e(d,fa(b))}(b);f.method=rb(f.method);f.paramSerializer=I(f.paramSerializer)?m.get(f.paramSerializer):
f.paramSerializer;var g=[function(b){var d=b.headers,e=ed(b.data,dd(d),u,b.transformRequest);r(e)&&p(d,function(a,b){"content-type"===M(b)&&delete d[b]});r(b.withCredentials)&&!r(a.withCredentials)&&(b.withCredentials=a.withCredentials);return n(b,e).then(c,c)},u],h=k.when(f);for(p(t,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){b=g.shift();var l=g.shift(),h=h.then(b,l)}d?(h.success=function(a){Ra(a,
"fn");h.then(function(b){a(b.data,b.status,b.headers,f)});return h},h.error=function(a){Ra(a,"fn");h.then(null,function(b){a(b.data,b.status,b.headers,f)});return h}):(h.success=fd("success"),h.error=fd("error"));return h}function n(c,d){function g(a,c,d,e){function f(){m(c,a,d,e)}C&&(200<=a&&300>a?C.put(O,[a,c,cd(d),e]):C.remove(O));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function m(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?p.resolve:p.reject)({data:a,status:b,headers:dd(d),config:c,statusText:e})}
function n(a){m(a.data,a.status,fa(a.headers()),a.statusText)}function t(){var a=l.pendingRequests.indexOf(c);-1!==a&&l.pendingRequests.splice(a,1)}var p=k.defer(),B=p.promise,C,J,W=c.headers,O=G(c.url,c.paramSerializer(c.params));l.pendingRequests.push(c);B.then(t,t);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(C=K(c.cache)?c.cache:K(a.cache)?a.cache:z);C&&(J=C.get(O),w(J)?J&&H(J.then)?J.then(n,n):L(J)?m(J[1],J[0],fa(J[2]),J[3]):m(J,200,{},"OK"):C.put(O,B));r(J)&&((J=
gd(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:u)&&(W[c.xsrfHeaderName||a.xsrfHeaderName]=J),e(c.method,O,d,g,W,c.timeout,c.withCredentials,c.responseType));return B}function G(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var z=g("$http");a.paramSerializer=I(a.paramSerializer)?m.get(a.paramSerializer):a.paramSerializer;var t=[];p(c,function(a){t.unshift(I(a)?m.get(a):m.invoke(a))});l.pendingRequests=[];(function(a){p(arguments,function(a){l[a]=function(b,c){return l(N({},c||{},
{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){p(arguments,function(a){l[a]=function(b,c,d){return l(N({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");l.defaults=a;return l}]}function of(){this.$get=function(){return function(){return new R.XMLHttpRequest}}}function nf(){this.$get=["$browser","$window","$document","$xhrFactory",function(a,b,d,c){return bg(a,c,a.defer,b.angular.callbacks,d[0])}]}function bg(a,b,d,c,e){function f(a,b,d){var f=e.createElement("script"),
l=null;f.type="text/javascript";f.src=a;f.async=!0;l=function(a){f.removeEventListener("load",l,!1);f.removeEventListener("error",l,!1);e.body.removeChild(f);f=null;var g=-1,z="unknown";a&&("load"!==a.type||c[b].called||(a={type:"error"}),z=a.type,g="error"===a.type?404:200);d&&d(g,z)};f.addEventListener("load",l,!1);f.addEventListener("error",l,!1);e.body.appendChild(f);return l}return function(e,h,k,m,l,n,G,z){function t(){y&&y();x&&x.abort()}function F(b,c,e,f,g){w(E)&&d.cancel(E);y=x=null;b(c,
e,f,g);a.$$completeOutstandingRequest(v)}a.$$incOutstandingRequestCount();h=h||a.url();if("jsonp"==M(e)){var q="_"+(c.counter++).toString(36);c[q]=function(a){c[q].data=a;c[q].called=!0};var y=f(h.replace("JSON_CALLBACK","angular.callbacks."+q),q,function(a,b){F(m,a,c[q].data,"",b);c[q]=v})}else{var x=b(e,h);x.open(e,h,!0);p(l,function(a,b){w(a)&&x.setRequestHeader(b,a)});x.onload=function(){var a=x.statusText||"",b="response"in x?x.response:x.responseText,c=1223===x.status?204:x.status;0===c&&(c=
b?200:"file"==xa(h).protocol?404:0);F(m,c,b,x.getAllResponseHeaders(),a)};e=function(){F(m,-1,null,null,"")};x.onerror=e;x.onabort=e;G&&(x.withCredentials=!0);if(z)try{x.responseType=z}catch(V){if("json"!==z)throw V;}x.send(r(k)?null:k)}if(0<n)var E=d(t,n);else n&&H(n.then)&&n.then(t)}}function hf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+
a}function g(c){return c.replace(l,a).replace(n,b)}function h(f,h,l,n){function q(a){try{var b=a;a=l?e.getTrusted(l,b):e.valueOf(b);var d;if(n&&!w(a))d=a;else if(null==a)d="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=cb(a)}d=a}return d}catch(g){c(Ia.interr(f,g))}}n=!!n;for(var y,x,p=0,E=[],Q=[],B=f.length,C=[],J=[];p<B;)if(-1!=(y=f.indexOf(a,p))&&-1!=(x=f.indexOf(b,y+k)))p!==y&&C.push(g(f.substring(p,y))),p=f.substring(y+k,x),E.push(p),Q.push(d(p,q)),p=x+m,J.push(C.length),
C.push("");else{p!==B&&C.push(g(f.substring(p)));break}l&&1<C.length&&Ia.throwNoconcat(f);if(!h||E.length){var W=function(a){for(var b=0,c=E.length;b<c;b++){if(n&&r(a[b]))return;C[J[b]]=a[b]}return C.join("")};return N(function(a){var b=0,d=E.length,e=Array(d);try{for(;b<d;b++)e[b]=Q[b](a);return W(e)}catch(g){c(Ia.interr(f,g))}},{exp:f,expressions:E,$$watchDelegate:function(a,b){var c;return a.$watchGroup(Q,function(d,e){var f=W(d);H(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var k=a.length,m=b.length,
l=new RegExp(a.replace(/./g,f),"g"),n=new RegExp(b.replace(/./g,f),"g");h.startSymbol=function(){return a};h.endSymbol=function(){return b};return h}]}function jf(){this.$get=["$rootScope","$window","$q","$$q",function(a,b,d,c){function e(e,h,k,m){var l=4<arguments.length,n=l?ta.call(arguments,4):[],G=b.setInterval,z=b.clearInterval,t=0,F=w(m)&&!m,q=(F?c:d).defer(),y=q.promise;k=w(k)?k:0;y.then(null,null,l?function(){e.apply(null,n)}:e);y.$$intervalId=G(function(){q.notify(t++);0<k&&t>=k&&(q.resolve(t),
z(y.$$intervalId),delete f[y.$$intervalId]);F||a.$apply()},h);f[y.$$intervalId]=q;return y}var f={};e.cancel=function(a){return a&&a.$$intervalId in f?(f[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete f[a.$$intervalId],!0):!1};return e}]}function bc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=nb(a[b]);return a.join("/")}function hd(a,b){var d=xa(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=ca(d.port)||cg[d.protocol]||null}function id(a,b){var d="/"!==a.charAt(0);
d&&(a="/"+a);var c=xa(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=xc(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!=b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function ra(a,b){if(0===b.indexOf(a))return b.substr(a.length)}function Ga(a){var b=a.indexOf("#");return-1==b?a:a.substr(0,b)}function hb(a){return a.replace(/(#.+)|#$/,"$1")}function cc(a,b,d){this.$$html5=!0;d=d||"";hd(a,this);this.$$parse=function(a){var d=ra(b,
a);if(!I(d))throw Cb("ipthprfx",a,b);id(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Qb(this.$$search),d=this.$$hash?"#"+nb(this.$$hash):"";this.$$url=bc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+this.$$url.substr(1)};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;w(f=ra(a,c))?(g=f,g=w(f=ra(d,f))?b+(ra("/",f)||f):a+g):w(f=ra(b,c))?g=b+f:b==c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function dc(a,b,d){hd(a,this);
this.$$parse=function(c){var e=ra(a,c)||ra(b,c),f;r(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",r(e)&&(a=c,this.replace())):(f=ra(d,e),r(f)&&(f=e));id(f,this);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;0===f.indexOf(e)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=Qb(this.$$search),e=this.$$hash?"#"+nb(this.$$hash):"";this.$$url=bc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?d+this.$$url:"")};this.$$parseLinkUrl=
function(b,d){return Ga(a)==Ga(b)?(this.$$parse(b),!0):!1}}function jd(a,b,d){this.$$html5=!0;dc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a==Ga(c)?f=c:(g=ra(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=Qb(this.$$search),e=this.$$hash?"#"+nb(this.$$hash):"";this.$$url=bc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url}}function Db(a){return function(){return this[a]}}function kd(a,
b){return function(d){if(r(d))return this[a];this[a]=b(d);this.$$compose();return this}}function pf(){var a="",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return w(b)?(a=b,this):a};this.html5Mode=function(a){return Ma(a)?(b.enabled=a,this):K(a)?(Ma(a.enabled)&&(b.enabled=a.enabled),Ma(a.requireBase)&&(b.requireBase=a.requireBase),Ma(a.rewriteLinks)&&(b.rewriteLinks=a.rewriteLinks),this):b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,
c,e,f,g){function h(a,b,d){var e=m.url(),f=m.$$state;try{c.url(a,b,d),m.$$state=c.state()}catch(g){throw m.url(e),m.$$state=f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",m.absUrl(),a,m.$$state,b)}var m,l;l=c.baseHref();var n=c.url(),G;if(b.enabled){if(!l&&b.requireBase)throw Cb("nobase");G=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(l||"/");l=e.history?cc:jd}else G=Ga(n),l=dc;var z=G.substr(0,Ga(G).lastIndexOf("/")+1);m=new l(G,z,"#"+a);m.$$parseLinkUrl(n,n);m.$$state=c.state();
var t=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(b.rewriteLinks&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!=a.which&&2!=a.button){for(var e=D(a.target);"a"!==oa(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),k=e.attr("href")||e.attr("xlink:href");K(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=xa(h.animVal).href);t.test(h)||!h||e.attr("target")||a.isDefaultPrevented()||!m.$$parseLinkUrl(h,k)||(a.preventDefault(),m.absUrl()!=c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=
!0))}});hb(m.absUrl())!=hb(n)&&c.url(m.absUrl(),!0);var F=!0;c.onUrlChange(function(a,b){r(ra(z,a))?g.location.href=a:(d.$evalAsync(function(){var c=m.absUrl(),e=m.$$state,f;a=hb(a);m.$$parse(a);m.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;m.absUrl()===a&&(f?(m.$$parse(c),m.$$state=e,h(c,!1,e)):(F=!1,k(c,e)))}),d.$$phase||d.$digest())});d.$watch(function(){var a=hb(c.url()),b=hb(m.absUrl()),f=c.state(),g=m.$$replace,l=a!==b||m.$$html5&&e.history&&f!==m.$$state;if(F||
l)F=!1,d.$evalAsync(function(){var b=m.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,m.$$state,f).defaultPrevented;m.absUrl()===b&&(c?(m.$$parse(a),m.$$state=f):(l&&h(b,g,f===m.$$state?null:m.$$state),k(a,f)))});m.$$replace=!1});return m}]}function qf(){var a=!0,b=this;this.debugEnabled=function(b){return w(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&
(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||v;a=!1;try{a=!!e.apply}catch(k){}return a?function(){var a=[];p(arguments,function(b){a.push(c(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Wa(a,b){if("__defineGetter__"===a||"__defineSetter__"===a||"__lookupGetter__"===a||"__lookupSetter__"===
a||"__proto__"===a)throw aa("isecfld",b);return a}function ld(a,b){a+="";if(!I(a))throw aa("iseccst",b);return a}function ya(a,b){if(a){if(a.constructor===a)throw aa("isecfn",b);if(a.window===a)throw aa("isecwindow",b);if(a.children&&(a.nodeName||a.prop&&a.attr&&a.find))throw aa("isecdom",b);if(a===Object)throw aa("isecobj",b);}return a}function md(a,b){if(a){if(a.constructor===a)throw aa("isecfn",b);if(a===dg||a===eg||a===fg)throw aa("isecff",b);}}function Eb(a,b){if(a&&(a===(0).constructor||a===
(!1).constructor||a==="".constructor||a==={}.constructor||a===[].constructor||a===Function.constructor))throw aa("isecaf",b);}function gg(a,b){return"undefined"!==typeof a?a:b}function nd(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function X(a,b){var d,c;switch(a.type){case s.Program:d=!0;p(a.body,function(a){X(a.expression,b);d=d&&a.expression.constant});a.constant=d;break;case s.Literal:a.constant=!0;a.toWatch=[];break;case s.UnaryExpression:X(a.argument,b);a.constant=a.argument.constant;
a.toWatch=a.argument.toWatch;break;case s.BinaryExpression:X(a.left,b);X(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:X(a.left,b);X(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case s.ConditionalExpression:X(a.test,b);X(a.alternate,b);X(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case s.Identifier:a.constant=
!1;a.toWatch=[a];break;case s.MemberExpression:X(a.object,b);a.computed&&X(a.property,b);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=[a];break;case s.CallExpression:d=a.filter?!b(a.callee.name).$stateful:!1;c=[];p(a.arguments,function(a){X(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=a.filter&&!b(a.callee.name).$stateful?c:[a];break;case s.AssignmentExpression:X(a.left,b);X(a.right,b);a.constant=a.left.constant&&a.right.constant;
a.toWatch=[a];break;case s.ArrayExpression:d=!0;c=[];p(a.elements,function(a){X(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=c;break;case s.ObjectExpression:d=!0;c=[];p(a.properties,function(a){X(a.value,b);d=d&&a.value.constant;a.value.constant||c.push.apply(c,a.value.toWatch)});a.constant=d;a.toWatch=c;break;case s.ThisExpression:a.constant=!1,a.toWatch=[]}}function od(a){if(1==a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:u}}
function pd(a){return a.type===s.Identifier||a.type===s.MemberExpression}function qd(a){if(1===a.body.length&&pd(a.body[0].expression))return{type:s.AssignmentExpression,left:a.body[0].expression,right:{type:s.NGValueParameter},operator:"="}}function rd(a){return 0===a.body.length||1===a.body.length&&(a.body[0].expression.type===s.Literal||a.body[0].expression.type===s.ArrayExpression||a.body[0].expression.type===s.ObjectExpression)}function sd(a,b){this.astBuilder=a;this.$filter=b}function td(a,
b){this.astBuilder=a;this.$filter=b}function Fb(a){return"constructor"==a}function ec(a){return H(a.valueOf)?a.valueOf():hg.call(a)}function rf(){var a=Z(),b=Z();this.$get=["$filter",function(d){function c(c,f,n){var x,p,E;n=n||t;switch(typeof c){case "string":E=c=c.trim();var r=n?b:a;x=r[E];if(!x){":"===c.charAt(0)&&":"===c.charAt(1)&&(p=!0,c=c.substring(2));x=n?z:G;var B=new fc(x);x=(new gc(B,d,x)).parse(c);x.constant?x.$$watchDelegate=m:p?x.$$watchDelegate=x.literal?k:h:x.inputs&&(x.$$watchDelegate=
g);n&&(x=e(x));r[E]=x}return l(x,f);case "function":return l(c,f);default:return l(v,f)}}function e(a){function b(c,d,e,f){var g=t;t=!0;try{return a(c,d,e,f)}finally{t=g}}if(!a)return a;b.$$watchDelegate=a.$$watchDelegate;b.assign=e(a.assign);b.constant=a.constant;b.literal=a.literal;for(var c=0;a.inputs&&c<a.inputs.length;++c)a.inputs[c]=e(a.inputs[c]);b.inputs=a.inputs;return b}function f(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=ec(a),"object"===typeof a)?!1:a===b||a!==a&&b!==
b}function g(a,b,c,d,e){var g=d.inputs,h;if(1===g.length){var k=f,g=g[0];return a.$watch(function(a){var b=g(a);f(b,k)||(h=d(a,u,u,[b]),k=b&&ec(b));return h},b,c,e)}for(var m=[],l=[],n=0,G=g.length;n<G;n++)m[n]=f,l[n]=null;return a.$watch(function(a){for(var b=!1,c=0,e=g.length;c<e;c++){var k=g[c](a);if(b||(b=!f(k,m[c])))l[c]=k,m[c]=k&&ec(k)}b&&(h=d(a,u,u,l));return h},b,c,e)}function h(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;H(b)&&b.apply(this,arguments);w(a)&&
d.$$postDigest(function(){w(f)&&e()})},c)}function k(a,b,c,d){function e(a){var b=!0;p(a,function(a){w(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;H(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function m(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){H(b)&&b.apply(this,arguments);e()},c)}function l(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,c=c!==k&&c!==h?function(c,e,f,g){f=d&&g?g[0]:a(c,
e,f,g);return b(f,c,e)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return w(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==g?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=g,d=!a.inputs,c.inputs=a.inputs?a.inputs:[a]);return c}var n=Ca().noUnsafeEval,G={csp:n,expensiveChecks:!1},z={csp:n,expensiveChecks:!0},t=!1;c.$$runningExpensiveChecks=function(){return t};return c}]}function tf(){this.$get=["$rootScope","$exceptionHandler",function(a,b){return ud(function(b){a.$evalAsync(b)},
b)}]}function uf(){this.$get=["$browser","$exceptionHandler",function(a,b){return ud(function(b){a.defer(b)},b)}]}function ud(a,b){function d(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function c(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,a(function(){var a,d,e;e=c.pending;c.processScheduled=!1;c.pending=u;for(var f=0,g=e.length;f<g;++f){d=e[f][0];a=e[f][c.status];
try{H(a)?d.resolve(a(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),b(h)}}}))}function g(){this.promise=new c;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=A("$q",TypeError);N(c.prototype,{then:function(a,b,c){if(r(a)&&r(b)&&r(c))return this;var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,
a)},"finally":function(a,b){return this.then(function(b){return m(b,!0,a)},function(b){return m(b,!1,a)},b)}});N(g.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(a){var c,e;e=d(this,this.$$resolve,this.$$reject);try{if(K(a)||H(a))c=a&&a.then;H(c)?(this.promise.$$state.status=-1,c.call(a,e[0],e[1],this.notify)):(this.promise.$$state.value=a,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),
b(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&a(function(){for(var a,e,f=0,g=d.length;f<g;f++){e=d[f][0];a=d[f][3];try{e.notify(H(a)?a(c):c)}catch(h){b(h)}}})}});var k=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},m=function(a,b,c){var d=null;try{H(c)&&
(d=c())}catch(e){return k(e,!1)}return d&&H(d.then)?d.then(function(){return k(a,b)},function(a){return k(a,!1)}):k(a,b)},l=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},n=function z(a){if(!H(a))throw h("norslvr",a);if(!(this instanceof z))return new z(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};n.defer=function(){return new g};n.reject=function(a){var b=new g;b.reject(a);return b.promise};n.when=l;n.resolve=l;n.all=function(a){var b=
new g,c=0,d=L(a)?[]:{};p(a,function(a,e){c++;l(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return n}function Df(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=
b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function sf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++mb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=A("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(f,g,h,k){function m(a){a.currentScope.$$destroyed=
!0}function l(a){9===Ha&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function n(){this.$id=++mb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function G(a){if(x.$$phase)throw d("inprog",
x.$$phase);x.$$phase=a}function z(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function t(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function F(){}function q(){for(;Q.length;)try{Q.shift()()}catch(a){g(a)}e=null}function y(){null===e&&(e=k.defer(function(){x.$apply(q)}))}n.prototype={constructor:n,$new:function(b,c){var d;c=c||this;b?(d=new n,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);
d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!=this)&&d.$on("$destroy",m);return d},$watch:function(a,b,d,e){var f=h(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var g=this,k=g.$$watchers,m={fn:b,last:F,get:f,exp:e||a,eq:!!d};c=null;H(b)||(m.fn=v);k||(k=g.$$watchers=[]);k.unshift(m);z(this,1);return function(){0<=ab(k,m)&&z(g,-1);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=
!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var m=!0;g.$evalAsync(function(){m&&b(e,e,g)});return function(){m=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});p(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!r(e)){if(K(e))if(Aa(e))for(f!==
n&&(f=n,p=f.length=0,m++),a=e.length,p!==a&&(m++,f.length=p=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(m++,f[b]=g);else{f!==q&&(f=q={},p=0,m++);a=0;for(b in e)sa.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(m++,f[b]=g)):(p++,f[b]=g,m++));if(p>a)for(b in m++,f)sa.call(e,b)||(p--,delete f[b])}else f!==e&&(f=e,m++);return m}}c.$stateful=!0;var d=this,e,f,g,k=1<b.length,m=0,l=h(a,c),n=[],q={},G=!0,p=0;return this.$watch(l,function(){G?(G=!1,b(e,e,d)):b(e,g,d);if(k)if(K(e))if(Aa(e)){g=
Array(e.length);for(var a=0;a<e.length;a++)g[a]=e[a]}else for(a in g={},e)sa.call(e,a)&&(g[a]=e[a]);else g=e})},$digest:function(){var a,f,h,m,l,n,p,z,y=b,t,r=[],Q,u;G("$digest");k.$$checkUrlChange();this===x&&null!==e&&(k.defer.cancel(e),q());c=null;do{z=!1;for(t=this;s.length;){try{u=s.shift(),u.scope.$eval(u.expression,u.locals)}catch(w){g(w)}c=null}a:do{if(n=t.$$watchers)for(p=n.length;p--;)try{if(a=n[p])if(l=a.get,(f=l(t))!==(h=a.last)&&!(a.eq?la(f,h):"number"===typeof f&&"number"===typeof h&&
isNaN(f)&&isNaN(h)))z=!0,c=a,a.last=a.eq?Na(f,null):f,m=a.fn,m(f,h===F?f:h,t),5>y&&(Q=4-y,r[Q]||(r[Q]=[]),r[Q].push({msg:H(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:f,oldVal:h}));else if(a===c){z=!1;break a}}catch(v){g(v)}if(!(n=t.$$watchersCount&&t.$$childHead||t!==this&&t.$$nextSibling))for(;t!==this&&!(n=t.$$nextSibling);)t=t.$parent}while(t=n);if((z||s.length)&&!y--)throw x.$$phase=null,d("infdig",b,r);}while(z||s.length);for(x.$$phase=null;E.length;)try{E.shift()()}catch(D){g(D)}},
$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===x&&k.$$applicationDestroyed();z(this,-this.$$watchersCount);for(var b in this.$$listenerCount)t(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);
this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=v;this.$on=this.$watch=this.$watchGroup=function(){return v};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return h(a)(this,b)},$evalAsync:function(a,b){x.$$phase||s.length||k.defer(function(){s.length&&x.$digest()});s.push({scope:this,expression:h(a),locals:b})},$$postDigest:function(a){E.push(a)},$apply:function(a){try{G("$apply");try{return this.$eval(a)}finally{x.$$phase=null}}catch(b){g(b)}finally{try{x.$digest()}catch(c){throw g(c),
c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&Q.push(b);a=h(a);y()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,t(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,f=!1,h={name:a,targetScope:e,stopPropagation:function(){f=!0},preventDefault:function(){h.defaultPrevented=
!0},defaultPrevented:!1},k=bb([h],arguments,1),m,l;do{d=e.$$listeners[a]||c;h.currentScope=e;m=0;for(l=d.length;m<l;m++)if(d[m])try{d[m].apply(null,k)}catch(n){g(n)}else d.splice(m,1),m--,l--;if(f)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var f=bb([e],arguments,1),h,k;c=d;){e.currentScope=
c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,f)}catch(m){g(m)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var x=new n,s=x.$$asyncQueue=[],E=x.$$postDigestQueue=[],Q=x.$$applyAsyncQueue=[];return x}]}function le(){var a=/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=
function(b){return w(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return w(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f;f=xa(d).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function ig(a){if("self"===a)return a;if(I(a)){if(-1<a.indexOf("***"))throw za("iwcard",a);a=vd(a).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+a+"$")}if(La(a))return new RegExp("^"+a.source+"$");throw za("imatcher");}function wd(a){var b=[];w(a)&&p(a,function(a){b.push(ig(a))});
return b}function wf(){this.SCE_CONTEXTS=ka;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=wd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=wd(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?gd(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};
return b}var f=function(a){throw za("unsafe");};d.has("$sanitize")&&(f=d.get("$sanitize"));var g=e(),h={};h[ka.HTML]=e(g);h[ka.CSS]=e(g);h[ka.URL]=e(g);h[ka.JS]=e(g);h[ka.RESOURCE_URL]=e(h[ka.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw za("icontext",a,b);if(null===b||r(b)||""===b)return b;if("string"!==typeof b)throw za("itype",a);return new c(b)},getTrusted:function(d,e){if(null===e||r(e)||""===e)return e;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&e instanceof
g)return e.$$unwrapTrustedValue();if(d===ka.RESOURCE_URL){var g=xa(e.toString()),n,p,z=!1;n=0;for(p=a.length;n<p;n++)if(c(a[n],g)){z=!0;break}if(z)for(n=0,p=b.length;n<p;n++)if(c(b[n],g)){z=!1;break}if(z)return e;throw za("insecurl",e.toString());}if(d===ka.HTML)return f(e);throw za("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function vf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&
8>Ha)throw za("iequirks");var c=fa(ka);c.isEnabled=function(){return a};c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Za);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;p(ka,function(a,b){var d=M(b);c[eb("parse_as_"+d)]=function(b){return e(a,b)};c[eb("get_trusted_"+d)]=function(b){return f(a,b)};c[eb("trust_as_"+
d)]=function(b){return g(a,b)}});return c}]}function xf(){this.$get=["$window","$document",function(a,b){var d={},c=ca((/android (\d+)/.exec(M((a.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((a.navigator||{}).userAgent),f=b[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,k=f.body&&f.body.style,m=!1,l=!1;if(k){for(var n in k)if(m=h.exec(n)){g=m[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in k&&"webkit");m=!!("transition"in k||g+"Transition"in k);l=!!("animation"in k||g+"Animation"in
k);!c||m&&l||(m=I(k.webkitTransition),l=I(k.webkitAnimation))}return{history:!(!a.history||!a.history.pushState||4>c||e),hasEvent:function(a){if("input"===a&&11>=Ha)return!1;if(r(d[a])){var b=f.createElement("div");d[a]="on"+a in b}return d[a]},csp:Ca(),vendorPrefix:g,transitions:m,animations:l,android:c}}]}function zf(){this.$get=["$templateCache","$http","$q","$sce",function(a,b,d,c){function e(f,g){e.totalPendingRequests++;if(!I(f)||r(a.get(f)))f=c.getTrustedResourceUrl(f);var h=b.defaults&&b.defaults.transformResponse;
L(h)?h=h.filter(function(a){return a!==$b}):h===$b&&(h=null);return b.get(f,{cache:a,transformResponse:h})["finally"](function(){e.totalPendingRequests--}).then(function(b){a.put(f,b.data);return b.data},function(a){if(!g)throw ga("tpload",f,a.status,a.statusText);return d.reject(a)})}e.totalPendingRequests=0;return e}]}function Af(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];p(a,function(a){var c=
da.element(a).data("$binding");c&&p(c,function(c){d?(new RegExp("(^|\\s)"+vd(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!=c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function Bf(){this.$get=
["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,k,m){H(f)||(m=k,k=f,f=v);var l=ta.call(arguments,3),n=w(m)&&!m,p=(n?c:d).defer(),z=p.promise,t;t=b.defer(function(){try{p.resolve(f.apply(null,l))}catch(b){p.reject(b),e(b)}finally{delete g[z.$$timeoutId]}n||a.$apply()},k);z.$$timeoutId=t;g[t]=p;return z}var g={};f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1};return f}]}
function xa(a){Ha&&(Y.setAttribute("href",a),a=Y.href);Y.setAttribute("href",a);return{href:Y.href,protocol:Y.protocol?Y.protocol.replace(/:$/,""):"",host:Y.host,search:Y.search?Y.search.replace(/^\?/,""):"",hash:Y.hash?Y.hash.replace(/^#/,""):"",hostname:Y.hostname,port:Y.port,pathname:"/"===Y.pathname.charAt(0)?Y.pathname:"/"+Y.pathname}}function gd(a){a=I(a)?xa(a):a;return a.protocol===xd.protocol&&a.host===xd.host}function Cf(){this.$get=ma(R)}function yd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}
var d=a[0]||{},c={},e="";return function(){var a,g,h,k,m;a=d.cookie||"";if(a!==e)for(e=a,a=e.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(m=b(g.substring(0,k)),r(c[m])&&(c[m]=b(g.substring(k+1))));return c}}function Gf(){this.$get=yd}function Jc(a){function b(d,c){if(K(d)){var e={};p(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",zd);b("date",Ad);
b("filter",jg);b("json",kg);b("limitTo",lg);b("lowercase",mg);b("number",Bd);b("orderBy",Cd);b("uppercase",ng)}function jg(){return function(a,b,d){if(!Aa(a)){if(null==a)return a;throw A("filter")("notarray",a);}var c;switch(hc(b)){case "function":break;case "boolean":case "null":case "number":case "string":c=!0;case "object":b=og(b,d,c);break;default:return a}return Array.prototype.filter.call(a,b)}}function og(a,b,d){var c=K(a)&&"$"in a;!0===b?b=la:H(b)||(b=function(a,b){if(r(a))return!1;if(null===
a||null===b)return a===b;if(K(b)||K(a)&&!qc(a))return!1;a=M(""+a);b=M(""+b);return-1!==a.indexOf(b)});return function(e){return c&&!K(e)?Ja(e,a.$,b,!1):Ja(e,a,b,d)}}function Ja(a,b,d,c,e){var f=hc(a),g=hc(b);if("string"===g&&"!"===b.charAt(0))return!Ja(a,b.substring(1),d,c);if(L(a))return a.some(function(a){return Ja(a,b,d,c)});switch(f){case "object":var h;if(c){for(h in a)if("$"!==h.charAt(0)&&Ja(a[h],b,d,!0))return!0;return e?!1:Ja(a,b,d,!1)}if("object"===g){for(h in b)if(e=b[h],!H(e)&&!r(e)&&
(f="$"===h,!Ja(f?a:a[h],e,d,f,f)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function hc(a){return null===a?"null":typeof a}function zd(a){var b=a.NUMBER_FORMATS;return function(a,c,e){r(c)&&(c=b.CURRENCY_SYM);r(e)&&(e=b.PATTERNS[1].maxFrac);return null==a?a:Dd(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(/\u00A4/g,c)}}function Bd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Dd(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function pg(a){var b=
0,d,c,e,f,g;-1<(c=a.indexOf(Ed))&&(a=a.replace(Ed,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)==ic;e++);if(e==(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)==ic;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Fd&&(d=d.splice(0,Fd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function qg(a,b,d,c){var e=a.d,f=e.length-a.i;b=r(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d)e.splice(d);else{a.i=1;e.length=d=b+1;for(var g=0;g<d;g++)e[g]=
0}for(5<=c&&e[d-1]++;f<b;f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Dd(a,b,d,c,e){if(!I(a)&&!P(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,h=Math.abs(a)+"",k="";if(f)k="\u221e";else{g=pg(h);qg(g,e,b.minFrac,b.maxFrac);k=g.d;h=g.i;e=g.e;f=[];for(g=k.reduce(function(a,b){return a&&!b},!0);0>h;)k.unshift(0),h++;0<h?f=k.splice(h,k.length):(f=k,k=[0]);h=[];for(k.length>=b.lgSize&&h.unshift(k.splice(-b.lgSize,k.length).join(""));k.length>
b.gSize;)h.unshift(k.splice(-b.gSize,k.length).join(""));k.length&&h.unshift(k.join(""));k=h.join(d);f.length&&(k+=c+f.join(""));e&&(k+="e+"+e)}return 0>a&&!g?b.negPre+k+b.negSuf:b.posPre+k+b.posSuf}function Gb(a,b,d){var c="";0>a&&(c="-",a=-a);for(a=""+a;a.length<b;)a=ic+a;d&&(a=a.substr(a.length-b));return c+a}function ba(a,b,d,c){d=d||0;return function(e){e=e["get"+a]();if(0<d||e>-d)e+=d;0===e&&-12==d&&(e=12);return Gb(e,b,c)}}function Hb(a,b){return function(d,c){var e=d["get"+a](),f=rb(b?"SHORT"+
a:a);return c[f][e]}}function Gd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Hd(a){return function(b){var d=Gd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Gb(b,a)}}function jc(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Ad(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=ca(b[9]+
b[10]),g=ca(b[9]+b[11]));h.call(a,ca(b[1]),ca(b[2])-1,ca(b[3]));f=ca(b[4]||0)-f;g=ca(b[5]||0)-g;h=ca(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,d,f){var g="",h=[],k,m;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;I(c)&&(c=rg.test(c)?ca(c):b(c));P(c)&&(c=new Date(c));if(!ea(c)||!isFinite(c.getTime()))return c;for(;d;)(m=sg.exec(d))?(h=bb(h,
m,1),d=h.pop()):(h.push(d),d=null);var l=c.getTimezoneOffset();f&&(l=vc(f,l),c=Pb(c,f,!0));p(h,function(b){k=tg[b];g+=k?k(c,a.DATETIME_FORMATS,l):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function kg(){return function(a,b){r(b)&&(b=2);return cb(a,b)}}function lg(){return function(a,b,d){b=Infinity===Math.abs(Number(b))?Number(b):ca(b);if(isNaN(b))return a;P(a)&&(a=a.toString());if(!L(a)&&!I(a))return a;d=!d||isNaN(d)?0:ca(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?a.slice(d,
d+b):0===d?a.slice(b,a.length):a.slice(Math.max(0,d+b),d)}}function Cd(a){function b(b,d){d=d?-1:1;return b.map(function(b){var c=1,h=Za;if(H(b))h=b;else if(I(b)){if("+"==b.charAt(0)||"-"==b.charAt(0))c="-"==b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(h=a(b),h.constant))var k=h(),h=function(a){return a[k]}}return{get:h,descending:c*d}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}return function(a,e,f){if(!Aa(a))return a;L(e)||(e=[e]);0===
e.length&&(e=["+"]);var g=b(e,f);g.push({get:function(){return{}},descending:f?-1:1});a=Array.prototype.map.call(a,function(a,b){return{value:a,predicateValues:g.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("string"===c)e=e.toLowerCase();else if("object"===c)a:{if("function"===typeof e.valueOf&&(e=e.valueOf(),d(e)))break a;if(qc(e)&&(e=e.toString(),d(e)))break a;e=b}return{value:e,type:c}})}});a.sort(function(a,b){for(var c=0,d=0,e=g.length;d<e;++d){var c=a.predicateValues[d],
f=b.predicateValues[d],p=0;c.type===f.type?c.value!==f.value&&(p=c.value<f.value?-1:1):p=c.type<f.type?-1:1;if(c=p*g[d].descending)break}return c});return a=a.map(function(a){return a.value})}}function Ka(a){H(a)&&(a={link:a});a.restrict=a.restrict||"AC";return ma(a)}function Id(a,b,d,c,e){var f=this,g=[];f.$error={};f.$$success={};f.$pending=u;f.$name=e(b.name||b.ngForm||"")(d);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;f.$$parentForm=Ib;f.$rollbackViewValue=function(){p(g,
function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){p(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Sa(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a);a.$$parentForm=f};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];p(f.$pending,function(b,c){f.$setValidity(c,null,a)});p(f.$error,function(b,c){f.$setValidity(c,null,a)});p(f.$$success,function(b,c){f.$setValidity(c,
null,a)});ab(g,a);a.$$parentForm=Ib};Jd({ctrl:this,$element:a,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(ab(d,c),0===d.length&&delete a[b])},$animate:c});f.$setDirty=function(){c.removeClass(a,Xa);c.addClass(a,Jb);f.$dirty=!0;f.$pristine=!1;f.$$parentForm.$setDirty()};f.$setPristine=function(){c.setClass(a,Xa,Jb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;p(g,function(a){a.$setPristine()})};f.$setUntouched=function(){p(g,
function(a){a.$setUntouched()})};f.$setSubmitted=function(){c.addClass(a,"ng-submitted");f.$submitted=!0;f.$$parentForm.$setSubmitted()}}function kc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function ib(a,b,d,c,e,f){var g=M(b[0].type);if(!e.android){var h=!1;b.on("compositionstart",function(a){h=!0});b.on("compositionend",function(){h=!1;m()})}var k,m=function(a){k&&(f.defer.cancel(k),k=null);if(!h){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||
(e=T(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",m);else{var l=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||m(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||l(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut",l)}b.on("change",m);if(Kd[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!k){var b=this.validity,c=b.badInput,d=b.typeMismatch;
k=f.defer(function(){k=null;b.badInput===c&&b.typeMismatch===d||m(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Kb(a,b){return function(d,c){var e,f;if(ea(d))return d;if(I(d)){'"'==d.charAt(0)&&'"'==d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(ug.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),
sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},p(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function jb(a,b,d,c){return function(e,f,g,h,k,m,l){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function p(a){return w(a)&&!ea(a)?d(a)||u:a}Ld(e,f,g,h);ib(e,f,g,h,k,m);var z=h&&h.$options&&h.$options.timezone,t;h.$$parserName=a;h.$parsers.push(function(a){return h.$isEmpty(a)?null:b.test(a)?
(a=d(a,t),z&&(a=Pb(a,z)),a):u});h.$formatters.push(function(a){if(a&&!ea(a))throw kb("datefmt",a);if(n(a))return(t=a)&&z&&(t=Pb(t,z,!0)),l("date")(a,c,z);t=null;return""});if(w(g.min)||g.ngMin){var s;h.$validators.min=function(a){return!n(a)||r(s)||d(a)>=s};g.$observe("min",function(a){s=p(a);h.$validate()})}if(w(g.max)||g.ngMax){var q;h.$validators.max=function(a){return!n(a)||r(q)||d(a)<=q};g.$observe("max",function(a){q=p(a);h.$validate()})}}}function Ld(a,b,d,c){(c.$$hasNativeValidators=K(b[0].validity))&&
c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput&&!c.typeMismatch?u:a})}function Md(a,b,d,c,e){if(w(c)){a=a(c);if(!a.constant)throw kb("constexpr",d,c);return a(b)}return e}function lc(a,b){a="ngClass"+a;return["$animate",function(d){function c(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],l=0;l<b.length;l++)if(e==b[l])continue a;c.push(e)}return c}function e(a){var b=[];return L(a)?(p(a,function(a){b=b.concat(e(a))}),b):I(a)?a.split(" "):K(a)?(p(a,function(a,c){a&&
(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,g,h){function k(a){a=m(a,1);h.$addClass(a)}function m(a,b){var c=g.data("$classCounts")||Z(),d=[];p(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function l(a,b){var e=c(b,a),f=c(a,b),e=m(e,1),f=m(f,-1);e&&e.length&&d.addClass(g,e);f&&f.length&&d.removeClass(g,f)}function n(a){if(!0===b||f.$index%2===b){var c=e(a||[]);if(!r)k(c);else if(!la(a,r)){var d=e(r);l(d,
c)}}r=L(a)?a.map(function(a){return fa(a)}):fa(a)}var r;f.$watch(h[a],n,!0);h.$observe("class",function(b){n(f.$eval(h[a]))});"ngClass"!==a&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var l=e(f.$eval(h[a]));g===b?k(l):(g=m(l,-1),h.$removeClass(g))}})}}}]}function Jd(a){function b(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function d(a,c){a=a?"-"+zc(a,"-"):"";b(lb+a,!0===c);b(Nd+a,!1===c)}var c=a.ctrl,e=a.$element,f={},g=a.set,h=a.unset,k=a.$animate;
f[Nd]=!(f[lb]=e.hasClass(lb));c.$setValidity=function(a,e,f){r(e)?(c.$pending||(c.$pending={}),g(c.$pending,a,f)):(c.$pending&&h(c.$pending,a,f),Od(c.$pending)&&(c.$pending=u));Ma(e)?e?(h(c.$error,a,f),g(c.$$success,a,f)):(g(c.$error,a,f),h(c.$$success,a,f)):(h(c.$error,a,f),h(c.$$success,a,f));c.$pending?(b(Pd,!0),c.$valid=c.$invalid=u,d("",null)):(b(Pd,!1),c.$valid=Od(c.$error),c.$invalid=!c.$valid,d("",c.$valid));e=c.$pending&&c.$pending[a]?u:c.$error[a]?!1:c.$$success[a]?!0:null;d(a,e);c.$$parentForm.$setValidity(a,
e,c)}}function Od(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}var vg=/^\/(.+)\/([a-z]*)$/,M=function(a){return I(a)?a.toLowerCase():a},sa=Object.prototype.hasOwnProperty,rb=function(a){return I(a)?a.toUpperCase():a},Ha,D,pa,ta=[].slice,Xf=[].splice,wg=[].push,na=Object.prototype.toString,rc=Object.getPrototypeOf,Ba=A("ng"),da=R.angular||(R.angular={}),Sb,mb=0;Ha=U.documentMode;v.$inject=[];Za.$inject=[];var L=Array.isArray,Zd=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,
T=function(a){return I(a)?a.trim():a},vd=function(a){return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Ca=function(){if(!w(Ca.rules)){var a=U.querySelector("[ng-csp]")||U.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Ca.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Ca;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Ca.rules},
ob=function(){if(w(ob.name_))return ob.name_;var a,b,d=Pa.length,c,e;for(b=0;b<d;++b)if(c=Pa[b],a=U.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return ob.name_=e},be=/:/g,Pa=["ng-","data-ng-","ng:","x-ng-"],ge=/[A-Z]/g,Ac=!1,Rb,Oa=3,ke={full:"1.4.12",major:1,minor:4,dot:12,codeName:"cultural-conservation"};S.expando="ng339";var fb=S.cache={},Mf=1;S._data=function(a){return this.cache[a[this.expando]]||{}};var Hf=/([\:\-\_]+(.))/g,If=/^moz([A-Z])/,wb={mouseleave:"mouseout",
mouseenter:"mouseover"},Ub=A("jqLite"),Lf=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Tb=/<|&#?\w+;/,Jf=/<([\w:-]+)/,Kf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,ja={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ja.optgroup=ja.option;ja.tbody=ja.tfoot=ja.colgroup=ja.caption=ja.thead;
ja.th=ja.td;var Rf=Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Qa=S.prototype={ready:function(a){function b(){d||(d=!0,a())}var d=!1;"complete"===U.readyState?setTimeout(b):(this.on("DOMContentLoaded",b),S(R).on("load",b))},toString:function(){var a=[];p(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?D(this[a]):D(this[this.length+a])},length:0,push:wg,sort:[].sort,splice:[].splice},Bb={};p("multiple selected checked disabled readOnly required open".split(" "),
function(a){Bb[M(a)]=a});var Sc={};p("input select option textarea button form details".split(" "),function(a){Sc[a]=!0});var ad={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};p({data:Wb,removeData:ub,hasData:function(a){for(var b in fb[a.ng339])return!0;return!1}},function(a,b){S[b]=a});p({data:Wb,inheritedData:Ab,scope:function(a){return D.data(a,"$scope")||Ab(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return D.data(a,"$isolateScope")||
D.data(a,"$isolateScopeNoTemplate")},controller:Pc,injector:function(a){return Ab(a,"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:xb,css:function(a,b,d){b=eb(b);if(w(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Oa&&2!==c&&8!==c)if(c=M(b),Bb[c])if(w(d))d?(a[b]=!0,a.setAttribute(b,c)):(a[b]=!1,a.removeAttribute(c));else return a[b]||(a.attributes.getNamedItem(b)||v).specified?c:u;else if(w(d))a.setAttribute(b,d);else if(a.getAttribute)return a=
a.getAttribute(b,2),null===a?u:a},prop:function(a,b,d){if(w(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(r(d)){var c=a.nodeType;return 1===c||c===Oa?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(r(b)){if(a.multiple&&"select"===oa(a)){var d=[];p(a.options,function(a){a.selected&&d.push(a.value||a.text)});return 0===d.length?null:d}return a.value}a.value=b},html:function(a,b){if(r(b))return a.innerHTML;tb(a,!0);a.innerHTML=b},empty:Qc},function(a,b){S.prototype[b]=
function(b,c){var e,f,g=this.length;if(a!==Qc&&r(2==a.length&&a!==xb&&a!==Pc?b:c)){if(K(b)){for(e=0;e<g;e++)if(a===Wb)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=r(e)?Math.min(g,1):g;for(f=0;f<g;f++){var h=a(this[f],b,c);e=e?e+h:h}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});p({removeData:ub,on:function(a,b,d,c){if(w(c))throw Ub("onargs");if(Kc(a)){c=vb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=Of(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,
h=function(b,c,g){var h=e[b];h||(h=e[b]=[],h.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,f,!1));h.push(d)};g--;)b=c[g],wb[b]?(h(wb[b],Qf),h(b,u,!0)):h(b)}},off:Oc,one:function(a,b,d){a=D(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;tb(a);p(new S(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];p(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||
a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new S(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;p(new S(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){Mc(a,D(b).eq(0).clone()[0])},remove:Xb,detach:function(a){Xb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;b=new S(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}},addClass:zb,removeClass:yb,toggleClass:function(a,
b,d){b&&p(b.split(" "),function(b){var e=d;r(e)&&(e=!xb(a,b));(e?zb:yb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:Vb,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=vb(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=
!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:v,type:f,target:a},b.type&&(c=N(c,b)),b=fa(g),e=d?[c].concat(d):[c],p(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){S.prototype[b]=function(b,c,e){for(var f,g=0,h=this.length;g<h;g++)r(f)?(f=a(this[g],b,c,e),w(f)&&(f=D(f))):Nc(f,a(this[g],b,c,e));return w(f)?f:this};S.prototype.bind=S.prototype.on;S.prototype.unbind=S.prototype.off});Ta.prototype={put:function(a,
b){this[Da(a,this.nextUid)]=b},get:function(a){return this[Da(a,this.nextUid)]},remove:function(a){var b=this[a=Da(a,this.nextUid)];delete this[a];return b}};var Ff=[function(){this.$get=[function(){return Ta}]}],Uc=/^[^\(]*\(\s*([^\)]*)\)/m,xg=/,/,yg=/^\s*(_?)(\S+?)\1\s*$/,Tc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ea=A("$injector");db.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw I(d)&&d||(d=a.name||Sf(a)),Ea("strictdi",d);b=a.toString().replace(Tc,
"");b=b.match(Uc);p(b[1].split(xg),function(a){a.replace(yg,function(a,b,d){c.push(d)})})}a.$inject=c}}else L(a)?(b=a.length-1,Ra(a[b],"fn"),c=a.slice(0,b)):Ra(a,"fn",!0);return c};var Qd=A("$animate"),Ye=function(){this.$get=function(){}},Ze=function(){var a=new Ta,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=I(b)?b.split(" "):L(b)?b:[],p(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){p(b,function(b){var c=a.get(b);if(c){var d=Tf(b.attr("class")),
e="",f="";p(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});p(b,function(a){e&&zb(a,e);f&&yb(a,f)});a.remove(b)}});b.length=0}return{enabled:v,on:v,off:v,pin:v,push:function(g,h,k,m){m&&m();k=k||{};k.from&&g.css(k.from);k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,m=k.removeClass,k=a.get(g)||{},h=e(k,h,!0),m=e(k,m,!1),h||m)a.put(g,k),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},We=["$provide",function(a){var b=this;
this.$$registeredAnimations=Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw Qd("notcsel",d);var e=d+"-animation";b.$$registeredAnimations[d.substr(1)]=e;a.factory(e,c)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Qd("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;
a:{for(h=0;h<d.length;h++){var k=d[h];if(1===k.nodeType){h=k;break a}}h=void 0}!h||h.parentNode||h.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(e,f,g,h){f=f&&D(f);g=g&&D(g);f=f||g.parent();b(e,f,g);return a.push(e,"enter",Fa(h))},move:function(e,f,g,h){f=f&&D(f);g=g&&D(g);f=f||g.parent();b(e,f,g);return a.push(e,"move",Fa(h))},leave:function(b,c){return a.push(b,"leave",Fa(c),function(){b.remove()})},
addClass:function(b,c,g){g=Fa(g);g.addClass=gb(g.addclass,c);return a.push(b,"addClass",g)},removeClass:function(b,c,g){g=Fa(g);g.removeClass=gb(g.removeClass,c);return a.push(b,"removeClass",g)},setClass:function(b,c,g,h){h=Fa(h);h.addClass=gb(h.addClass,c);h.removeClass=gb(h.removeClass,g);return a.push(b,"setClass",h)},animate:function(b,c,g,h,k){k=Fa(k);k.from=k.from?N(k.from,c):c;k.to=k.to?N(k.to,g):g;k.tempClasses=gb(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k)}}}]}],af=
function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},$e=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$document","$timeout",function(a,b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){var d=c[0];d&&d.hidden?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===
a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;p(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:v,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},
"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(p(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=
0,this._state=2)}};return f}]},Xe=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);h||k.complete();h=!0});return k}var g=e||{};g.$$prepared||(g=Na(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var h,k=new d;return{start:f,end:f}}}]},ga=A("$compile");Cc.$inject=
["$provide","$$sanitizeUriProvider"];var Wc=/^((?:x|data)[\:\-_])/i,Yf=A("$controller"),Zc=/^(\S+)(\s+as\s+([\w$]+))?$/,gf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof D&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},bd="application/json",ac={"Content-Type":bd+";charset=utf-8"},$f=/^\[|^\{(?!\{)/,ag={"[":/]$/,"{":/}$/},Zf=/^\)\]\}',?\n/,zg=A("$http"),fd=function(a){return function(){throw zg("legacy",a);}},Ia=da.$interpolateMinErr=A("$interpolate");
Ia.throwNoconcat=function(a){throw Ia("noconcat",a);};Ia.interr=function(a,b){return Ia("interr",a,b.toString())};var Ag=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,cg={http:80,https:443,ftp:21},Cb=A("$location"),Bg={$$html5:!1,$$replace:!1,absUrl:Db("$$absUrl"),url:function(a){if(r(a))return this.$$url;var b=Ag.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Db("$$protocol"),host:Db("$$host"),port:Db("$$port"),
path:kd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(I(a)||P(a))a=a.toString(),this.$$search=xc(a);else if(K(a))a=Na(a,{}),p(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw Cb("isrcharg");break;default:r(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:kd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=
!0;return this}};p([jd,dc,cc],function(a){a.prototype=Object.create(Bg);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==cc||!this.$$html5)throw Cb("nostate");this.$$state=r(b)?null:b;return this}});var aa=A("$parse"),dg=Function.prototype.call,eg=Function.prototype.apply,fg=Function.prototype.bind,Lb=Z();p("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Lb[a]=!0});var Cg={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},fc=function(a){this.options=
a};fc.prototype={constructor:fc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Lb[b],e=Lb[d];
Lb[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=
a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=w(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw aa("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=M(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"==d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&
c&&this.isNumber(c)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var b=this.text.charAt(this.index);if(!this.isIdent(b)&&!this.isNumber(b))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=
this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=Cg[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var s=
function(a,b){this.lexer=a;this.options=b};s.Program="Program";s.ExpressionStatement="ExpressionStatement";s.AssignmentExpression="AssignmentExpression";s.ConditionalExpression="ConditionalExpression";s.LogicalExpression="LogicalExpression";s.BinaryExpression="BinaryExpression";s.UnaryExpression="UnaryExpression";s.CallExpression="CallExpression";s.MemberExpression="MemberExpression";s.Identifier="Identifier";s.Literal="Literal";s.ArrayExpression="ArrayExpression";s.Property="Property";s.ObjectExpression=
"ObjectExpression";s.ThisExpression="ThisExpression";s.NGValueParameter="NGValueParameter";s.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:s.Program,body:a}},expressionStatement:function(){return{type:s.ExpressionStatement,
expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:s.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:s.ConditionalExpression,test:a,alternate:b,
consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:s.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:s.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=
this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+",
"-","!"))?{type:s.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.constants.hasOwnProperty(this.peek().text)?a=Na(this.constants[this.consume().text]):this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(",
"[",".");)"("===b.text?(a={type:s.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:s.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:s.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:s.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},
parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.expression());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:s.Identifier,name:a.text}},constant:function(){return{type:s.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");
return{type:s.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:s.Property,kind:"init"};this.peek().constant?b.key=this.constant():this.peek().identifier?b.key=this.identifier():this.throwError("invalid key",this.peek());this.consume(":");b.value=this.expression();a.push(b)}while(this.expect(","))}this.consume("}");return{type:s.ObjectExpression,properties:a}},throwError:function(a,b){throw aa("syntax",b.text,a,b.index+1,this.text,
this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw aa("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw aa("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},
expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},constants:{"true":{type:s.Literal,value:!0},"false":{type:s.Literal,value:!1},"null":{type:s.Literal,value:null},undefined:{type:s.Literal,value:u},"this":{type:s.ThisExpression}}};sd.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:b,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};X(c,d.$filter);var e="",f;this.stage="assign";
if(f=qd(c))this.state.computing="assign",e=this.nextId(),this.recurse(f,e),this.return_(e),e="fn.assign="+this.generateFunction("assign","s,v,l");f=od(c.body);d.stage="inputs";p(f,function(a,b){var c="fn"+b;d.state[c]={vars:[],body:[],own:{}};d.state.computing=c;var e=d.nextId();d.recurse(a,e);d.return_(e);d.state.inputs.push(c);a.watchId=b});this.state.computing="fn";this.stage="main";this.recurse(c);e='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+
e+this.watchFns()+"return fn;";e=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue","ensureSafeAssignContext","ifDefined","plus","text",e))(this.$filter,Wa,ya,md,ld,Eb,gg,nd,a);this.state=this.stage=u;e.literal=rd(c);e.constant=c.constant;return e},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;p(b,function(b){a.push("var "+b+"="+d.generateFunction(b,"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");return a.join("")},
generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;p(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,e,f){var g,h,k=this,m,l;c=c||v;if(!f&&w(a.watchId))b=b||this.nextId(),this.if_("i",
this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case s.Program:p(a.body,function(b,c){k.recurse(b.expression,u,u,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case s.Literal:l=this.escape(a.value);this.assign(b,l);c(l);break;case s.UnaryExpression:this.recurse(a.argument,u,u,function(a){h=a});l=a.operator+"("+this.ifDefined(h,0)+")";this.assign(b,l);c(l);break;case s.BinaryExpression:this.recurse(a.left,
u,u,function(a){g=a});this.recurse(a.right,u,u,function(a){h=a});l="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,l);c(l);break;case s.LogicalExpression:b=b||this.nextId();k.recurse(a.left,b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));c(b);break;case s.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);
break;case s.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Wa(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){e&&1!==e&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",
a.name)));(k.state.expensiveChecks||Fb(a.name))&&k.addEnsureSafeObject(b);c(b);break;case s.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,u,function(){k.if_(k.notNull(g),function(){e&&1!==e&&k.addEnsureSafeAssignContext(g);if(a.computed)h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),k.addEnsureSafeMemberName(h),e&&1!==e&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,h),"{}")),l=k.ensureSafeObject(k.computedMember(g,
h)),k.assign(b,l),d&&(d.computed=!0,d.name=h);else{Wa(a.property.name);e&&1!==e&&k.if_(k.not(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}"));l=k.nonComputedMember(g,a.property.name);if(k.state.expensiveChecks||Fb(a.property.name))l=k.ensureSafeObject(l);k.assign(b,l);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(b,"undefined")});c(b)},!!e);break;case s.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),m=[],p(a.arguments,
function(a){var b=k.nextId();k.recurse(a,b);m.push(b)}),l=h+"("+m.join(",")+")",k.assign(b,l),c(b)):(h=k.nextId(),g={},m=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){k.addEnsureSafeFunction(h);p(a.arguments,function(a){k.recurse(a,k.nextId(),u,function(a){m.push(k.ensureSafeObject(a))})});g.name?(k.state.expensiveChecks||k.addEnsureSafeObject(g.context),l=k.member(g.context,g.name,g.computed)+"("+m.join(",")+")"):l=h+"("+m.join(",")+")";l=k.ensureSafeObject(l);k.assign(b,l)},
function(){k.assign(b,"undefined")});c(b)}));break;case s.AssignmentExpression:h=this.nextId();g={};if(!pd(a.left))throw aa("lval");this.recurse(a.left,u,g,function(){k.if_(k.notNull(g.context),function(){k.recurse(a.right,h);k.addEnsureSafeObject(k.member(g.context,g.name,g.computed));k.addEnsureSafeAssignContext(g.context);l=k.member(g.context,g.name,g.computed)+a.operator+h;k.assign(b,l);c(b||l)})},1);break;case s.ArrayExpression:m=[];p(a.elements,function(a){k.recurse(a,k.nextId(),u,function(a){m.push(a)})});
l="["+m.join(",")+"]";this.assign(b,l);c(l);break;case s.ObjectExpression:m=[];p(a.properties,function(a){k.recurse(a.value,k.nextId(),u,function(b){m.push(k.escape(a.key.type===s.Identifier?a.key.name:""+a.key.value)+":"+b)})});l="{"+m.join(",")+"}";this.assign(b,l);c(l);break;case s.ThisExpression:this.assign(b,"s");c("s");break;case s.NGValueParameter:this.assign(b,"v"),c("v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+
this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,
"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){return a+"."+b},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),";")},
addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},addEnsureSafeAssignContext:function(a){this.current().body.push(this.ensureSafeAssignContext(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},getStringValue:function(a){this.assign(a,"getStringValue("+a+",text)")},ensureSafeAssignContext:function(a){return"ensureSafeAssignContext("+
a+",text)"},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(I(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(P(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===
typeof a)return"undefined";throw aa("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};td.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=b;X(c,d.$filter);var e,f;if(e=qd(c))f=this.recurse(e);e=od(c.body);var g;e&&(g=[],p(e,function(a,b){var c=d.recurse(a);a.input=c;g.push(c);a.watchId=b}));var h=[];p(c.body,function(a){h.push(d.recurse(a.expression))});
e=0===c.body.length?function(){}:1===c.body.length?h[0]:function(a,b){var c;p(h,function(d){c=d(a,b)});return c};f&&(e.assign=function(a,b,c){return f(a,c,b)});g&&(e.inputs=g);e.literal=rd(c);e.constant=c.constant;return e},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case s.Literal:return this.value(a.value,b);case s.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case s.BinaryExpression:return c=this.recurse(a.left),
e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case s.Identifier:return Wa(a.name,f.expression),f.identifier(a.name,f.expensiveChecks||Fb(a.name),b,d,f.expression);case s.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(Wa(a.property.name,
f.expression),e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d,f.expression):this.nonComputedMember(c,e,f.expensiveChecks,b,d,f.expression);case s.CallExpression:return g=[],p(a.arguments,function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var n=[],p=0;p<g.length;++p)n.push(g[p](a,c,d,f));a=e.apply(u,n,f);return b?{context:u,name:u,value:a}:a}:function(a,
c,d,l){var n=e(a,c,d,l),p;if(null!=n.value){ya(n.context,f.expression);md(n.value,f.expression);p=[];for(var r=0;r<g.length;++r)p.push(ya(g[r](a,c,d,l),f.expression));p=ya(n.value.apply(n.context,p),f.expression)}return b?{value:p}:p};case s.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,g,l){var n=c(a,d,g,l);a=e(a,d,g,l);ya(n.value,f.expression);Eb(n.context);n.context[n.name]=a;return b?{value:a}:a};case s.ArrayExpression:return g=[],p(a.elements,function(a){g.push(f.recurse(a))}),
function(a,c,d,e){for(var f=[],p=0;p<g.length;++p)f.push(g[p](a,c,d,e));return b?{value:f}:f};case s.ObjectExpression:return g=[],p(a.properties,function(a){g.push({key:a.key.type===s.Identifier?a.key.name:""+a.key.value,value:f.recurse(a.value)})}),function(a,c,d,e){for(var f={},p=0;p<g.length;++p)f[g[p].key]=g[p].value(a,c,d,e);return b?{value:f}:f};case s.ThisExpression:return function(a){return b?{value:a}:a};case s.NGValueParameter:return function(a,c,d,e){return b?{value:d}:d}}},"unary+":function(a,
b){return function(d,c,e,f){d=a(d,c,e,f);d=w(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=w(d)?-d:0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=nd(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=(w(h)?h:0)-(w(c)?c:0);return d?{value:h}:h}},"binary*":function(a,
b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,
d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h)?b(e,f,g,h):d(e,f,g,h);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:u,name:u,value:a}:a}},identifier:function(a,b,d,c,e){return function(f,g,h,k){f=
g&&a in g?g:f;c&&1!==c&&f&&!f[a]&&(f[a]={});g=f?f[a]:u;b&&ya(g,e);return d?{context:f,name:a,value:g}:g}},computedMember:function(a,b,d,c,e){return function(f,g,h,k){var m=a(f,g,h,k),l,n;null!=m&&(l=b(f,g,h,k),l=ld(l),Wa(l,e),c&&1!==c&&(Eb(m),m&&!m[l]&&(m[l]={})),n=m[l],ya(n,e));return d?{context:m,name:l,value:n}:n}},nonComputedMember:function(a,b,d,c,e,f){return function(g,h,k,m){g=a(g,h,k,m);e&&1!==e&&(Eb(g),g&&!g[b]&&(g[b]={}));h=null!=g?g[b]:u;(d||Fb(b))&&ya(h,f);return c?{context:g,name:b,value:h}:
h}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};var gc=function(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new s(this.lexer);this.astCompiler=d.csp?new td(this.ast,b):new sd(this.ast,b)};gc.prototype={constructor:gc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};var hg=Object.prototype.valueOf,za=A("$sce"),ka={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ga=A("$compile"),Y=U.createElement("a"),
xd=xa(R.location.href);yd.$inject=["$document"];Jc.$inject=["$provide"];var Fd=22,Ed=".",ic="0";zd.$inject=["$locale"];Bd.$inject=["$locale"];var tg={yyyy:ba("FullYear",4),yy:ba("FullYear",2,0,!0),y:ba("FullYear",1),MMMM:Hb("Month"),MMM:Hb("Month",!0),MM:ba("Month",2,1),M:ba("Month",1,1),dd:ba("Date",2),d:ba("Date",1),HH:ba("Hours",2),H:ba("Hours",1),hh:ba("Hours",2,-12),h:ba("Hours",1,-12),mm:ba("Minutes",2),m:ba("Minutes",1),ss:ba("Seconds",2),s:ba("Seconds",1),sss:ba("Milliseconds",3),EEEE:Hb("Day"),
EEE:Hb("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Gb(Math[0<a?"floor":"ceil"](a/60),2)+Gb(Math.abs(a%60),2))},ww:Hd(2),w:Hd(1),G:jc,GG:jc,GGG:jc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},sg=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,rg=/^\-?\d+$/;Ad.$inject=["$locale"];var mg=ma(M),ng=ma(rb);Cd.$inject=["$parse"];var me=ma({restrict:"E",compile:function(a,
b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===na.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),sb={};p(Bb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!=a){var c=va("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});sb[c]=function(){return{restrict:"A",priority:100,link:e}}}});p(ad,function(a,b){sb[b]=
function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"==e.ngPattern.charAt(0)&&(c=e.ngPattern.match(vg))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});p(["src","srcset","href"],function(a){var b=va("ng-"+a);sb[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===na.call(c.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),
Ha&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});var Ib={$addControl:v,$$renameControl:function(a,b){a.$name=b},$removeControl:v,$setValidity:v,$setDirty:v,$setPristine:v,$setSubmitted:v};Id.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Rd=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||v}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Id,compile:function(d,f){d.addClass(Xa).addClass(lb);
var g=f.name?"name":a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in e)){var p=function(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",p,!1);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",p,!1)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var r=g?c(n.$name):v;g&&(r(a,n),e.$observe(g,function(b){n.$name!==b&&(r(a,u),n.$$parentForm.$$renameControl(n,b),r=c(n.$name),r(a,n))}));
d.on("$destroy",function(){n.$$parentForm.$removeControl(n);r(a,u);N(n,Ib)})}}}}}]},ne=Rd(),Ae=Rd(!0),ug=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,Dg=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,Eg=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Fg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Sd=/^(\d{4})-(\d{2})-(\d{2})$/,Td=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
mc=/^(\d{4})-W(\d\d)$/,Ud=/^(\d{4})-(\d\d)$/,Vd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Kd=Z();p(["date","datetime-local","month","time","week"],function(a){Kd[a]=!0});var Wd={text:function(a,b,d,c,e,f){ib(a,b,d,c,e,f);kc(c)},date:jb("date",Sd,Kb(Sd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":jb("datetimelocal",Td,Kb(Td,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:jb("time",Vd,Kb(Vd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:jb("week",mc,function(a,b){if(ea(a))return a;
if(I(a)){mc.lastIndex=0;var d=mc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=0,h=0,k=Gd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+e,d,f,g,h)}}return NaN},"yyyy-Www"),month:jb("month",Ud,Kb(Ud,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Ld(a,b,d,c);ib(a,b,d,c,e,f);c.$$parserName="number";c.$parsers.push(function(a){return c.$isEmpty(a)?null:Fg.test(a)?parseFloat(a):u});c.$formatters.push(function(a){if(!c.$isEmpty(a)){if(!P(a))throw kb("numfmt",
a);a=a.toString()}return a});if(w(d.min)||d.ngMin){var g;c.$validators.min=function(a){return c.$isEmpty(a)||r(g)||a>=g};d.$observe("min",function(a){w(a)&&!P(a)&&(a=parseFloat(a,10));g=P(a)&&!isNaN(a)?a:u;c.$validate()})}if(w(d.max)||d.ngMax){var h;c.$validators.max=function(a){return c.$isEmpty(a)||r(h)||a<=h};d.$observe("max",function(a){w(a)&&!P(a)&&(a=parseFloat(a,10));h=P(a)&&!isNaN(a)?a:u;c.$validate()})}},url:function(a,b,d,c,e,f){ib(a,b,d,c,e,f);kc(c);c.$$parserName="url";c.$validators.url=
function(a,b){var d=a||b;return c.$isEmpty(d)||Dg.test(d)}},email:function(a,b,d,c,e,f){ib(a,b,d,c,e,f);kc(c);c.$$parserName="email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||Eg.test(d)}},radio:function(a,b,d,c){r(d.name)&&b.attr("name",++mb);b.on("click",function(a){b[0].checked&&c.$setViewValue(d.value,a&&a.type)});c.$render=function(){b[0].checked=d.value==c.$viewValue};d.$observe("value",c.$render)},checkbox:function(a,b,d,c,e,f,g,h){var k=Md(h,a,"ngTrueValue",d.ngTrueValue,
!0),m=Md(h,a,"ngFalseValue",d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return la(a,k)});c.$parsers.push(function(a){return a?k:m})},hidden:v,button:v,submit:v,reset:v,file:v},Dc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,h){h[0]&&(Wd[M(g.type)]||Wd.text)(e,f,
g,h[0],b,a,d,c)}}}}],Gg=/^(true|false|\d+)$/,Se=function(){return{restrict:"A",priority:100,compile:function(a,b){return Gg.test(b.ngValue)?function(a,b,e){e.$set("value",a.$eval(e.ngValue))}:function(a,b,e){a.$watch(e.ngValue,function(a){e.$set("value",a)})}}}},se=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=r(a)?"":a})}}}}],ue=["$interpolate","$compile",
function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=r(a)?"":a})}}}}],te=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){var d=
f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],Re=ma({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),ve=lc("",!0),xe=lc("Odd",0),we=lc("Even",1),ye=Ka({compile:function(a,b){b.$set("ngCloak",u);a.removeClass("ng-cloak")}}),ze=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Ic={},Hg={blur:!0,focus:!0};p("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var b=va("ng-"+a);Ic[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=d(f[b],null,!0);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};Hg[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var Ce=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(b,d,c,e,f){var g,h,k;b.$watch(c.ngIf,function(b){b?h||f(function(b,e){h=e;b[b.length++]=U.createComment(" end ngIf: "+
c.ngIf+" ");g={clone:b};a.enter(b,d.parent(),d)}):(k&&(k.remove(),k=null),h&&(h.$destroy(),h=null),g&&(k=qb(g.clone),a.leave(k).then(function(){k=null}),g=null))})}}}],De=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:da.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",h=e.autoscroll;return function(c,e,l,n,p){var r=0,t,s,q,y=function(){s&&(s.remove(),s=null);t&&(t.$destroy(),t=null);q&&
(d.leave(q).then(function(){s=null}),s=q,q=null)};c.$watch(f,function(f){var l=function(){!w(h)||h&&!c.$eval(h)||b()},s=++r;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&s===r){var b=c.$new();n.template=a;a=p(b,function(a){y();d.enter(a,null,e).then(l)});t=b;q=a;t.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){c.$$destroyed||s!==r||(y(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(y(),n.template=null)})}}}}],Ue=["$compile",function(a){return{restrict:"ECA",
priority:-400,require:"ngInclude",link:function(b,d,c,e){/SVG/.test(d[0].toString())?(d.empty(),a(Lc(e.template,U).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],Ee=Ka({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),Qe=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=b.attr(d.$attr.ngList)||", ",f="false"!==d.ngTrim,g=f?T(e):e;c.$parsers.push(function(a){if(!r(a)){var b=
[];a&&p(a.split(g),function(a){a&&b.push(f?T(a):a)});return b}});c.$formatters.push(function(a){return L(a)?a.join(e):u});c.$isEmpty=function(a){return!a||!a.length}}}},lb="ng-valid",Nd="ng-invalid",Xa="ng-pristine",Jb="ng-dirty",Pd="ng-pending",kb=A("ngModel"),Ig=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,b,d,c,e,f,g,h,k,m){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=u;this.$validators={};this.$asyncValidators=
{};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=u;this.$name=m(d.name||"",!1)(a);this.$$parentForm=Ib;var l=e(d.ngModel),n=l.assign,s=l,z=n,t=null,F,q=this;this.$$setOptions=function(a){if((q.$options=a)&&a.getterSetter){var b=e(d.ngModel+"()"),f=e(d.ngModel+"($$$p)");s=function(a){var c=l(a);H(c)&&(c=b(a));return c};z=function(a,
b){H(l(a))?f(a,{$$$p:q.$modelValue}):n(a,q.$modelValue)}}else if(!l.assign)throw kb("nonassign",d.ngModel,ua(c));};this.$render=v;this.$isEmpty=function(a){return r(a)||""===a||null===a||a!==a};var y=0;Jd({ctrl:this,$element:c,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]},$animate:f});this.$setPristine=function(){q.$dirty=!1;q.$pristine=!0;f.removeClass(c,Jb);f.addClass(c,Xa)};this.$setDirty=function(){q.$dirty=!0;q.$pristine=!1;f.removeClass(c,Xa);f.addClass(c,Jb);q.$$parentForm.$setDirty()};
this.$setUntouched=function(){q.$touched=!1;q.$untouched=!0;f.setClass(c,"ng-untouched","ng-touched")};this.$setTouched=function(){q.$touched=!0;q.$untouched=!1;f.setClass(c,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){g.cancel(t);q.$viewValue=q.$$lastCommittedViewValue;q.$render()};this.$validate=function(){if(!P(q.$modelValue)||!isNaN(q.$modelValue)){var a=q.$$rawModelValue,b=q.$valid,c=q.$modelValue,d=q.$options&&q.$options.allowInvalid;q.$$runValidators(a,q.$$lastCommittedViewValue,
function(e){d||b===e||(q.$modelValue=e?a:u,q.$modelValue!==c&&q.$$writeModelToScope())})}};this.$$runValidators=function(a,b,c){function d(){var c=!0;p(q.$validators,function(d,e){var g=d(a,b);c=c&&g;f(e,g)});return c?!0:(p(q.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;p(q.$asyncValidators,function(e,g){var h=e(a,b);if(!h||!H(h.then))throw kb("nopromise",h);f(g,u);c.push(h.then(function(){f(g,!0)},function(a){d=!1;f(g,!1)}))});c.length?k.all(c).then(function(){g(d)},
v):g(!0)}function f(a,b){h===y&&q.$setValidity(a,b)}function g(a){h===y&&c(a)}y++;var h=y;(function(){var a=q.$$parserName||"parse";if(r(F))f(a,null);else return F||(p(q.$validators,function(a,b){f(b,null)}),p(q.$asyncValidators,function(a,b){f(b,null)})),f(a,F),F;return!0})()?d()?e():g(!1):g(!1)};this.$commitViewValue=function(){var a=q.$viewValue;g.cancel(t);if(q.$$lastCommittedViewValue!==a||""===a&&q.$$hasNativeValidators)q.$$lastCommittedViewValue=a,q.$pristine&&this.$setDirty(),this.$$parseAndValidate()};
this.$$parseAndValidate=function(){var b=q.$$lastCommittedViewValue;if(F=r(b)?u:!0)for(var c=0;c<q.$parsers.length;c++)if(b=q.$parsers[c](b),r(b)){F=!1;break}P(q.$modelValue)&&isNaN(q.$modelValue)&&(q.$modelValue=s(a));var d=q.$modelValue,e=q.$options&&q.$options.allowInvalid;q.$$rawModelValue=b;e&&(q.$modelValue=b,q.$modelValue!==d&&q.$$writeModelToScope());q.$$runValidators(b,q.$$lastCommittedViewValue,function(a){e||(q.$modelValue=a?b:u,q.$modelValue!==d&&q.$$writeModelToScope())})};this.$$writeModelToScope=
function(){z(a,q.$modelValue);p(q.$viewChangeListeners,function(a){try{a()}catch(c){b(c)}})};this.$setViewValue=function(a,b){q.$viewValue=a;q.$options&&!q.$options.updateOnDefault||q.$$debounceViewValueCommit(b)};this.$$debounceViewValueCommit=function(b){var c=0,d=q.$options;d&&w(d.debounce)&&(d=d.debounce,P(d)?c=d:P(d[b])?c=d[b]:P(d["default"])&&(c=d["default"]));g.cancel(t);c?t=g(function(){q.$commitViewValue()},c):h.$$phase?q.$commitViewValue():a.$apply(function(){q.$commitViewValue()})};a.$watch(function(){var b=
s(a);if(b!==q.$modelValue&&(q.$modelValue===q.$modelValue||b===b)){q.$modelValue=q.$$rawModelValue=b;F=u;for(var c=q.$formatters,d=c.length,e=b;d--;)e=c[d](e);q.$viewValue!==e&&(q.$viewValue=q.$$lastCommittedViewValue=e,q.$render(),q.$$runValidators(b,e,v))}return b})}],Pe=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Ig,priority:1,compile:function(b){b.addClass(Xa).addClass("ng-untouched").addClass(lb);return{pre:function(a,b,e,f){var g=
f[0];b=f[1]||g.$$parentForm;g.$$setOptions(f[2]&&f[2].$options);b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){var g=f[0];if(g.$options&&g.$options.updateOn)c.on(g.$options.updateOn,function(a){g.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(c){g.$touched||(a.$$phase?b.$evalAsync(g.$setTouched):b.$apply(g.$setTouched))})}}}}}],Jg=/(\s+|^)default(\s+|$)/,
Te=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,b){var d=this;this.$options=Na(a.$eval(b.ngModelOptions));w(this.$options.updateOn)?(this.$options.updateOnDefault=!1,this.$options.updateOn=T(this.$options.updateOn.replace(Jg,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Fe=Ka({terminal:!0,priority:1E3}),Kg=A("ngOptions"),Lg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
Ne=["$compile","$parse",function(a,b){function d(a,c,d){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function m(a){var b;if(!p&&Aa(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var l=a.match(Lg);if(!l)throw Kg("iexp",a,ua(c));var n=l[5]||l[7],p=l[6];a=/ as /.test(l[0])&&l[1];var r=l[9];c=b(l[2]?l[1]:n);var s=a&&b(a)||c,u=r&&b(r),q=r?function(a,b){return u(d,b)}:function(a){return Da(a)},y=function(a,
b){return q(a,C(a,b))},x=b(l[2]||l[1]),w=b(l[3]||""),E=b(l[4]||""),v=b(l[8]),B={},C=p?function(a,b){B[p]=b;B[n]=a;return B}:function(a){B[n]=a;return B};return{trackBy:r,getTrackByValue:y,getWatchables:b(v,function(a){var b=[];a=a||[];for(var c=m(a),e=c.length,f=0;f<e;f++){var g=a===c?f:c[f],k=C(a[g],g),g=q(a[g],k);b.push(g);if(l[2]||l[1])g=x(d,k),b.push(g);l[4]&&(k=E(d,k),b.push(k))}return b}),getOptions:function(){for(var a=[],b={},c=v(d)||[],f=m(c),g=f.length,l=0;l<g;l++){var n=c===f?l:f[l],p=
C(c[n],n),u=s(d,p),n=q(u,p),F=x(d,p),G=w(d,p),p=E(d,p),u=new e(n,u,F,G,p);a.push(u);b[n]=u}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[y(a)]},getViewValueFromOption:function(a){return r?da.copy(a.viewValue):a.viewValue}}}}}var c=U.createElement("option"),e=U.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","?ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=v},post:function(b,g,h,k){function m(a,b){a.element=b;b.disabled=a.disabled;
a.label!==b.label&&(b.label=a.label,b.textContent=a.label);a.value!==b.value&&(b.value=a.selectValue)}function l(a,b,c,d){b&&M(b.nodeName)===c?c=b:(c=d.cloneNode(!1),b?a.insertBefore(c,b):a.appendChild(c));return c}function n(a){for(var b;a;)b=a.nextSibling,Xb(a),a=b}function r(a){var b=y&&y[0],c=v&&v[0];if(b||c)for(;a&&(a===b||a===c||8===a.nodeType||"option"===oa(a)&&""===a.value);)a=a.nextSibling;return a}function s(){var a=B&&u.readValue();B=C.getOptions();var b={},d=g[0].firstChild;E&&g.prepend(y);
d=r(d);B.items.forEach(function(a){var f,h;a.group?(f=b[a.group],f||(f=l(g[0],d,"optgroup",e),d=f.nextSibling,f.label=a.group,f=b[a.group]={groupElement:f,currentOptionElement:f.firstChild}),h=l(f.groupElement,f.currentOptionElement,"option",c),m(a,h),f.currentOptionElement=h.nextSibling):(h=l(g[0],d,"option",c),m(a,h),d=h.nextSibling)});Object.keys(b).forEach(function(a){n(b[a].currentOptionElement)});n(d);t.$render();if(!t.$isEmpty(a)){var f=u.readValue();(C.trackBy||q?la(a,f):a===f)||(t.$setViewValue(f),
t.$render())}}var t=k[1];if(t){var u=k[0],q=h.multiple,y;k=0;for(var x=g.children(),w=x.length;k<w;k++)if(""===x[k].value){y=x.eq(k);break}var E=!!y,v=D(c.cloneNode(!1));v.val("?");var B,C=d(h.ngOptions,g,b);q?(t.$isEmpty=function(a){return!a||0===a.length},u.writeValue=function(a){B.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){(a=B.getOptionFromViewValue(a))&&!a.disabled&&(a.element.selected=!0)})},u.readValue=function(){var a=g.val()||[],b=[];p(a,function(a){(a=B.selectValueMap[a])&&
!a.disabled&&b.push(B.getViewValueFromOption(a))});return b},C.trackBy&&b.$watchCollection(function(){if(L(t.$viewValue))return t.$viewValue.map(function(a){return C.getTrackByValue(a)})},function(){t.$render()})):(u.writeValue=function(a){var b=B.getOptionFromViewValue(a);b&&!b.disabled?(g[0].value!==b.selectValue&&(v.remove(),E||y.remove(),g[0].value=b.selectValue,b.element.selected=!0),b.element.setAttribute("selected","selected")):null===a||E?(v.remove(),E||g.prepend(y),g.val(""),y.prop("selected",
!0),y.attr("selected",!0)):(E||y.remove(),g.prepend(v),g.val("?"),v.prop("selected",!0),v.attr("selected",!0))},u.readValue=function(){var a=B.selectValueMap[g.val()];return a&&!a.disabled?(E||y.remove(),v.remove(),B.getViewValueFromOption(a)):null},C.trackBy&&b.$watch(function(){return C.getTrackByValue(t.$viewValue)},function(){t.$render()}));E?(y.remove(),a(y)(b),y.removeClass("ng-scope")):y=D(c.cloneNode(!1));s();b.$watchCollection(C.getWatchables,s)}}}}}],Ge=["$locale","$interpolate","$log",
function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,h){function k(a){g.text(a||"")}var m=h.count,l=h.$attr.when&&g.attr(h.$attr.when),n=h.offset||0,s=f.$eval(l)||{},u={},t=b.startSymbol(),w=b.endSymbol(),q=t+m+"-"+n+w,y=da.noop,x;p(h,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+M(c[2]),s[c]=g.attr(h.$attr[b]))});p(s,function(a,d){u[d]=b(a.replace(c,q))});f.$watch(m,function(b){var c=parseFloat(b),e=isNaN(c);e||c in s||(c=a.pluralCat(c-n));c===x||e&&P(x)&&isNaN(x)||(y(),
e=u[c],r(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+l),y=v,k()):y=f.$watch(e,k),x=c)})}}}],He=["$parse","$animate",function(a,b){var d=A("ngRepeat"),c=function(a,b,c,d,k,m,l){a[c]=d;k&&(a[k]=m);a.$index=b;a.$first=0===b;a.$last=b===l-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(e,f){var g=f.ngRepeat,h=U.createComment(" end ngRepeat: "+g+" "),k=g.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
if(!k)throw d("iexp",g);var m=k[1],l=k[2],n=k[3],r=k[4],k=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",m);var s=k[3]||k[1],t=k[2];if(n&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(n)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(n)))throw d("badident",n);var v,q,y,x,w={$id:Da};r?v=a(r):(y=function(a,b){return Da(b)},x=function(a){return a});return function(a,e,f,k,m){v&&(q=function(b,c,d){t&&(w[t]=b);w[s]=c;w.$index=
d;return v(a,w)});var r=Z();a.$watchCollection(l,function(f){var k,l,v=e[0],w,B=Z(),C,F,D,G,H,A,I;n&&(a[n]=f);if(Aa(f))H=f,l=q||y;else for(I in l=q||x,H=[],f)sa.call(f,I)&&"$"!==I.charAt(0)&&H.push(I);C=H.length;I=Array(C);for(k=0;k<C;k++)if(F=f===H?k:H[k],D=f[F],G=l(F,D,k),r[G])A=r[G],delete r[G],B[G]=A,I[k]=A;else{if(B[G])throw p(I,function(a){a&&a.scope&&(r[a.id]=a)}),d("dupes",g,G,D);I[k]={id:G,scope:u,clone:u};B[G]=!0}for(w in r){A=r[w];G=qb(A.clone);b.leave(G);if(G[0].parentNode)for(k=0,l=G.length;k<
l;k++)G[k].$$NG_REMOVED=!0;A.scope.$destroy()}for(k=0;k<C;k++)if(F=f===H?k:H[k],D=f[F],A=I[k],A.scope){w=v;do w=w.nextSibling;while(w&&w.$$NG_REMOVED);A.clone[0]!=w&&b.move(qb(A.clone),null,v);v=A.clone[A.clone.length-1];c(A.scope,k,s,D,t,F,C)}else m(function(a,d){A.scope=d;var e=h.cloneNode(!1);a[a.length++]=e;b.enter(a,null,v);v=e;A.clone=a;B[A.id]=A;c(A.scope,k,s,D,t,F,C)});r=B})}}}}],Ie=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?
"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Be=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Je=Ka(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&p(d,function(a,c){b.css(c,"")});a&&b.css(a)},!0)}),Ke=["$animate",function(a){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(b,
d,c,e){var f=[],g=[],h=[],k=[],m=function(a,b){return function(){a.splice(b,1)}};b.$watch(c.ngSwitch||c.on,function(b){var c,d;c=0;for(d=h.length;c<d;++c)a.cancel(h[c]);c=h.length=0;for(d=k.length;c<d;++c){var r=qb(g[c].clone);k[c].$destroy();(h[c]=a.leave(r)).then(m(h,c))}g.length=0;k.length=0;(f=e.cases["!"+b]||e.cases["?"])&&p(f,function(b){b.transclude(function(c,d){k.push(d);var e=b.element;c[c.length++]=U.createComment(" end ngSwitchWhen: ");g.push({clone:c});a.enter(c,e.parent(),e)})})})}}}],
Le=Ka({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["!"+d.ngSwitchWhen]=c.cases["!"+d.ngSwitchWhen]||[];c.cases["!"+d.ngSwitchWhen].push({transclude:e,element:b})}}),Me=Ka({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),Oe=Ka({restrict:"EAC",link:function(a,b,d,c,e){if(!e)throw A("ngTransclude")("orphan",ua(b));e(function(a){b.empty();
b.append(a)})}}),oe=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"==d.type&&a.put(d.id,b[0].text)}}}],Mg={$setViewValue:v,$render:v},Ng=["$element","$scope","$attrs",function(a,b,d){var c=this,e=new Ta;c.ngModelCtrl=Mg;c.unknownOption=D(U.createElement("option"));c.renderUnknownOption=function(b){b="? "+Da(b)+" ?";c.unknownOption.val(b);a.prepend(c.unknownOption);a.val(b)};b.$on("$destroy",function(){c.renderUnknownOption=v});c.removeUnknownOption=
function(){c.unknownOption.parent()&&c.unknownOption.remove()};c.readValue=function(){c.removeUnknownOption();return a.val()};c.writeValue=function(b){c.hasOption(b)?(c.removeUnknownOption(),a.val(b),""===b&&c.emptyOption.prop("selected",!0)):null==b&&c.emptyOption?(c.removeUnknownOption(),a.val("")):c.renderUnknownOption(b)};c.addOption=function(a,b){if(8!==b[0].nodeType){Sa(a,'"option value"');""===a&&(c.emptyOption=b);var d=e.get(a)||0;e.put(a,d+1);c.ngModelCtrl.$render();b[0].hasAttribute("selected")&&
(b[0].selected=!0)}};c.removeOption=function(a){var b=e.get(a);b&&(1===b?(e.remove(a),""===a&&(c.emptyOption=u)):e.put(a,b-1))};c.hasOption=function(a){return!!e.get(a)};c.registerOption=function(a,b,d,e,m){if(e){var l;d.$observe("value",function(a){w(l)&&c.removeOption(l);l=a;c.addOption(a,b)})}else m?a.$watch(m,function(a,e){d.$set("value",a);e!==a&&c.removeOption(e);c.addOption(a,b)}):c.addOption(d.value,b);b.on("$destroy",function(){c.removeOption(d.value);c.ngModelCtrl.$render()})}}],pe=function(){return{restrict:"E",
require:["select","?ngModel"],controller:Ng,priority:1,link:{pre:function(a,b,d,c){var e=c[1];if(e){var f=c[0];f.ngModelCtrl=e;b.on("change",function(){a.$apply(function(){e.$setViewValue(f.readValue())})});if(d.multiple){f.readValue=function(){var a=[];p(b.find("option"),function(b){b.selected&&a.push(b.value)});return a};f.writeValue=function(a){var c=new Ta(a);p(b.find("option"),function(a){a.selected=w(c.get(a.value))})};var g,h=NaN;a.$watch(function(){h!==e.$viewValue||la(g,e.$viewValue)||(g=
fa(e.$viewValue),e.$render());h=e.$viewValue});e.$isEmpty=function(a){return!a||0===a.length}}}},post:function(a,b,d,c){var e=c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},re=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){if(w(d.value))var c=a(d.value,!0);else{var e=a(b.text(),!0);e||d.$set("value",b.text())}return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,
b,d,c,e)}}}}],qe=ma({restrict:"E",terminal:!1}),Fc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},Ec=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){I(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw A("ngPattern")("noregexp",
f,a,ua(b));e=a||u;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||r(e)||e.test(b)}}}}},Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=ca(a);e=isNaN(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||b.length<=e}}}}},Gc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=ca(a)||0;c.$validate()});
c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};R.angular.bootstrap?R.console&&console.log("WARNING: Tried to load angular more than once."):(he(),je(da),da.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,
MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",
shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,c){var e=a|0,f=c;u===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),D(U).ready(function(){de(U,yc)}))})(window,document);
!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

;
/*
 AngularJS v1.4.12
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(q,d,C){'use strict';function w(s,k,h){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,f,b,c,y){function z(){l&&(h.cancel(l),l=null);m&&(m.$destroy(),m=null);n&&(l=h.leave(n),l.then(function(){l=null}),n=null)}function x(){var b=s.current&&s.current.locals;if(d.isDefined(b&&b.$template)){var b=a.$new(),c=s.current;n=y(b,function(b){h.enter(b,null,n||f).then(function(){!d.isDefined(u)||u&&!a.$eval(u)||k()});z()});m=c.scope=b;m.$emit("$viewContentLoaded");
m.$eval(v)}else z()}var m,n,l,u=b.autoscroll,v=b.onload||"";a.$on("$routeChangeSuccess",x);x()}}}function A(d,k,h){return{restrict:"ECA",priority:-400,link:function(a,f){var b=h.current,c=b.locals;f.html(c.$template);var y=d(f.contents());b.controller&&(c.$scope=a,c=k(b.controller,c),b.controllerAs&&(a[b.controllerAs]=c),f.data("$ngControllerController",c),f.children().data("$ngControllerController",c));y(a)}}}q=d.module("ngRoute",["ng"]).provider("$route",function(){function s(a,f){return d.extend(Object.create(a),
f)}function k(a,d){var b=d.caseInsensitiveMatch,c={originalPath:a,regexp:a},h=c.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)(\*\?|[\?\*])?/g,function(a,d,b,c){a="?"===c||"*?"===c?"?":null;c="*"===c||"*?"===c?"*":null;h.push({name:b,optional:!!a});d=d||"";return""+(a?"":d)+"(?:"+(a?d:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");c.regexp=new RegExp("^"+a+"$",b?"i":"");return c}var h={};this.when=function(a,f){var b=d.copy(f);d.isUndefined(b.reloadOnSearch)&&
(b.reloadOnSearch=!0);d.isUndefined(b.caseInsensitiveMatch)&&(b.caseInsensitiveMatch=this.caseInsensitiveMatch);h[a]=d.extend(b,a&&k(a,b));if(a){var c="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";h[c]=d.extend({redirectTo:a},k(c,b))}return this};this.caseInsensitiveMatch=!1;this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,f,b,c,k,q,x){function m(b){var e=
t.current;(w=(p=l())&&e&&p.$$route===e.$$route&&d.equals(p.pathParams,e.pathParams)&&!p.reloadOnSearch&&!v)||!e&&!p||a.$broadcast("$routeChangeStart",p,e).defaultPrevented&&b&&b.preventDefault()}function n(){var g=t.current,e=p;if(w)g.params=e.params,d.copy(g.params,b),a.$broadcast("$routeUpdate",g);else if(e||g)v=!1,(t.current=e)&&e.redirectTo&&(d.isString(e.redirectTo)?f.path(u(e.redirectTo,e.params)).search(e.params).replace():f.url(e.redirectTo(e.pathParams,f.path(),f.search())).replace()),c.when(e).then(function(){if(e){var a=
d.extend({},e.resolve),b,g;d.forEach(a,function(b,e){a[e]=d.isString(b)?k.get(b):k.invoke(b,null,null,e)});d.isDefined(b=e.template)?d.isFunction(b)&&(b=b(e.params)):d.isDefined(g=e.templateUrl)&&(d.isFunction(g)&&(g=g(e.params)),d.isDefined(g)&&(e.loadedTemplateUrl=x.valueOf(g),b=q(g)));d.isDefined(b)&&(a.$template=b);return c.all(a)}}).then(function(c){e==t.current&&(e&&(e.locals=c,d.copy(e.params,b)),a.$broadcast("$routeChangeSuccess",e,g))},function(b){e==t.current&&a.$broadcast("$routeChangeError",
e,g,b)})}function l(){var a,b;d.forEach(h,function(c,h){var r;if(r=!b){var k=f.path();r=c.keys;var m={};if(c.regexp)if(k=c.regexp.exec(k)){for(var l=1,n=k.length;l<n;++l){var p=r[l-1],q=k[l];p&&q&&(m[p.name]=q)}r=m}else r=null;else r=null;r=a=r}r&&(b=s(c,{params:d.extend({},f.search(),a),pathParams:a}),b.$$route=c)});return b||h[null]&&s(h[null],{params:{},pathParams:{}})}function u(a,b){var c=[];d.forEach((a||"").split(":"),function(a,d){if(0===d)c.push(a);else{var g=a.match(/(\w+)(?:[?*])?(.*)/),
f=g[1];c.push(b[f]);c.push(g[2]||"");delete b[f]}});return c.join("")}var v=!1,p,w,t={routes:h,reload:function(){v=!0;var b={defaultPrevented:!1,preventDefault:function(){this.defaultPrevented=!0;v=!1}};a.$evalAsync(function(){m(b);b.defaultPrevented||n()})},updateParams:function(a){if(this.current&&this.current.$$route)a=d.extend({},this.current.params,a),f.path(u(this.current.$$route.originalPath,a)),f.search(a);else throw B("norout");}};a.$on("$locationChangeStart",m);a.$on("$locationChangeSuccess",
n);return t}]});var B=d.$$minErr("ngRoute");q.provider("$routeParams",function(){this.$get=function(){return{}}});q.directive("ngView",w);q.directive("ngView",A);w.$inject=["$route","$anchorScroll","$animate"];A.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

;
/*
 AngularJS v1.4.12
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(D,n,Va){'use strict';function za(a,b,c){if(!a)throw Ka("areq",b||"?",c||"required");return a}function Aa(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;da(a)&&(a=a.join(" "));da(b)&&(b=b.join(" "));return a+" "+b}function La(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function X(a,b,c){var d="";a=da(a)?a:a&&E(a)&&a.length?a.split(/\s+/):[];s(a,function(a,f){a&&0<a.length&&(d+=0<f?" ":"",d+=c?b+a:a+b)});return d}function Ma(a){if(a instanceof G)switch(a.length){case 0:return a;
case 1:if(1===a[0].nodeType)return a;break;default:return G(ha(a))}if(1===a.nodeType)return G(a)}function ha(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1==c.nodeType)return c}}function Na(a,b,c){s(b,function(b){a.addClass(b,c)})}function Oa(a,b,c){s(b,function(b){a.removeClass(b,c)})}function Q(a){return function(b,c){c.addClass&&(Na(a,b,c.addClass),c.addClass=null);c.removeClass&&(Oa(a,b,c.removeClass),c.removeClass=null)}}function pa(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
O;a.domOperation=function(){a.$$domOperationFired=!0;b();b=O};a.$$prepared=!0}return a}function ia(a,b){Ba(a,b);Ca(a,b)}function Ba(a,b){b.from&&(a.css(b.from),b.from=null)}function Ca(a,b){b.to&&(a.css(b.to),b.to=null)}function T(a,b,c){var d=b.options||{};c=c.options||{};var e=(d.addClass||"")+" "+(c.addClass||""),f=(d.removeClass||"")+" "+(c.removeClass||"");a=Pa(a.attr("class"),e,f);c.preparationClasses&&(d.preparationClasses=Y(c.preparationClasses,d.preparationClasses),delete c.preparationClasses);
e=d.domOperation!==O?d.domOperation:null;Da(d,c);e&&(d.domOperation=e);d.addClass=a.addClass?a.addClass:null;d.removeClass=a.removeClass?a.removeClass:null;b.addClass=d.addClass;b.removeClass=d.removeClass;return d}function Pa(a,b,c){function d(a){E(a)&&(a=a.split(" "));var b={};s(a,function(a){a.length&&(b[a]=!0)});return b}var e={};a=d(a);b=d(b);s(b,function(a,b){e[b]=1});c=d(c);s(c,function(a,b){e[b]=1===e[b]?null:-1});var f={addClass:"",removeClass:""};s(e,function(b,c){var d,e;1===b?(d="addClass",
e=!a[c]):-1===b&&(d="removeClass",e=a[c]);e&&(f[d].length&&(f[d]+=" "),f[d]+=c)});return f}function x(a){return a instanceof n.element?a[0]:a}function Qa(a,b,c){var d="";b&&(d=X(b,"ng-",!0));c.addClass&&(d=Y(d,X(c.addClass,"-add")));c.removeClass&&(d=Y(d,X(c.removeClass,"-remove")));d.length&&(c.preparationClasses=d,a.addClass(d))}function qa(a,b){var c=b?"-"+b+"s":"";ma(a,[na,c]);return[na,c]}function sa(a,b){var c=b?"paused":"",d=Z+"PlayState";ma(a,[d,c]);return[d,c]}function ma(a,b){a.style[b[0]]=
b[1]}function Y(a,b){return a?b?a+" "+b:a:b}function Ea(a,b,c){var d=Object.create(null),e=a.getComputedStyle(b)||{};s(c,function(a,b){var c=e[a];if(c){var J=c.charAt(0);if("-"===J||"+"===J||0<=J)c=Ra(c);0===c&&(c=null);d[b]=c}});return d}function Ra(a){var b=0;a=a.split(/\s*,\s*/);s(a,function(a){"s"==a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function ta(a){return 0===a||null!=a}function Fa(a,b){var c=R,d=a+"s";b?c+="Duration":d+=" linear all";
return[c,d]}function Ga(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}function Ha(a,b,c){s(c,function(c){a[c]=$(a[c])?a[c]:b.style.getPropertyValue(c)})}var O=n.noop,Ia=n.copy,Da=n.extend,G=n.element,s=n.forEach,da=n.isArray,E=n.isString,ea=n.isObject,N=n.isUndefined,$=n.isDefined,Ja=n.isFunction,ua=n.isElement,R,va,Z,wa;N(D.ontransitionend)&&
$(D.onwebkittransitionend)?(R="WebkitTransition",va="webkitTransitionEnd transitionend"):(R="transition",va="transitionend");N(D.onanimationend)&&$(D.onwebkitanimationend)?(Z="WebkitAnimation",wa="webkitAnimationEnd animationend"):(Z="animation",wa="animationend");var ra=Z+"Delay",xa=Z+"Duration",na=R+"Delay";D=R+"Duration";var Ka=n.$$minErr("ng"),Sa={transitionDuration:D,transitionDelay:na,transitionProperty:R+"Property",animationDuration:xa,animationDelay:ra,animationIterationCount:Z+"IterationCount"},
Ta={transitionDuration:D,transitionDelay:na,animationDuration:xa,animationDelay:ra};n.module("ngAnimate",[]).directive("ngAnimateChildren",["$interpolate",function(a){return{link:function(b,c,d){function e(a){c.data("$$ngAnimateChildren","on"===a||"true"===a)}var f=d.ngAnimateChildren;n.isString(f)&&0===f.length?c.data("$$ngAnimateChildren",!0):(e(a(f)(b)),d.$observe("ngAnimateChildren",e))}}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d=d.concat(a);c()}function c(){if(d.length){for(var b=
d.shift(),L=0;L<b.length;L++)b[L]();e||a(function(){e||c()})}}var d,e;d=b.queue=[];b.waitUntilQuiet=function(b){e&&e();e=a(function(){e=null;b();c()})};return b}]).provider("$$animateQueue",["$animateProvider",function(a){function b(a){if(!a)return null;a=a.split(" ");var b=Object.create(null);s(a,function(a){b[a]=!0});return b}function c(a,c){if(a&&c){var d=b(c);return a.split(" ").some(function(a){return d[a]})}}function d(a,b,c,d){return f[a].some(function(a){return a(b,c,d)})}function e(a,b){var c=
0<(a.addClass||"").length,d=0<(a.removeClass||"").length;return b?c&&d:c||d}var f=this.rules={skip:[],cancel:[],join:[]};f.join.push(function(a,b,c){return!b.structural&&e(b)});f.skip.push(function(a,b,c){return!b.structural&&!e(b)});f.skip.push(function(a,b,c){return"leave"==c.event&&b.structural});f.skip.push(function(a,b,c){return c.structural&&2===c.state&&!b.structural});f.cancel.push(function(a,b,c){return c.structural&&b.structural});f.cancel.push(function(a,b,c){return 2===c.state&&b.structural});
f.cancel.push(function(a,b,d){a=b.addClass;b=b.removeClass;var e=d.addClass;d=d.removeClass;return N(a)&&N(b)||N(e)&&N(d)?!1:c(a,d)||c(b,e)});this.$get=["$$rAF","$rootScope","$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow",function(b,c,f,r,v,n,t,y,m,g){function P(){var a=!1;return function(b){a?b():c.$$postDigest(function(){a=!0;b()})}}function H(a,b,c){var h=x(b),d=x(a),k=[];(a=l[c])&&s(a,function(a){aa.call(a.node,h)?k.push(a.callback):
"leave"===c&&aa.call(a.node,d)&&k.push(a.callback)});return k}function k(a,K,k){function l(c,h,d,k){r(function(){var c=H(I,a,h);c.length&&b(function(){s(c,function(b){b(a,d,k)})})});c.progress(h,d,k)}function u(b){var c=a,h=g;h.preparationClasses&&(c.removeClass(h.preparationClasses),h.preparationClasses=null);h.activeClasses&&(c.removeClass(h.activeClasses),h.activeClasses=null);A(a,g);ia(a,g);g.domOperation();f.complete(!b)}var g=Ia(k),W,I;if(a=Ma(a))W=x(a),I=a.parent();var g=pa(g),f=new t,r=P();
da(g.addClass)&&(g.addClass=g.addClass.join(" "));g.addClass&&!E(g.addClass)&&(g.addClass=null);da(g.removeClass)&&(g.removeClass=g.removeClass.join(" "));g.removeClass&&!E(g.removeClass)&&(g.removeClass=null);g.from&&!ea(g.from)&&(g.from=null);g.to&&!ea(g.to)&&(g.to=null);if(!W)return u(),f;k=[W.className,g.addClass,g.removeClass].join(" ");if(!Ua(k))return u(),f;var J=0<=["enter","move","leave"].indexOf(K),m=h.hidden,v=!F||m||B.get(W);k=!v&&w.get(W)||{};var aa=!!k.state;v||aa&&1==k.state||(v=!p(a,
I,K));if(v)return m&&l(f,K,"start"),u(),m&&l(f,K,"close"),f;J&&ya(a);m={structural:J,element:a,event:K,addClass:g.addClass,removeClass:g.removeClass,close:u,options:g,runner:f};if(aa){if(d("skip",a,m,k)){if(2===k.state)return u(),f;T(a,k,m);return k.runner}if(d("cancel",a,m,k))if(2===k.state)k.runner.end();else if(k.structural)k.close();else return T(a,k,m),k.runner;else if(d("join",a,m,k))if(2===k.state)T(a,m,{});else return Qa(a,J?K:null,g),K=m.event=k.event,g=T(a,k,m),k.runner}else T(a,m,{});(aa=
m.structural)||(aa="animate"===m.event&&0<Object.keys(m.options.to||{}).length||e(m));if(!aa)return u(),la(a),f;var y=(k.counter||0)+1;m.counter=y;C(a,1,m);c.$$postDigest(function(){var b=w.get(W),c=!b,b=b||{},h=0<(a.parent()||[]).length&&("animate"===b.event||b.structural||e(b));if(c||b.counter!==y||!h){c&&(A(a,g),ia(a,g));if(c||J&&b.event!==K)g.domOperation(),f.end();h||la(a)}else K=!b.structural&&e(b,!0)?"setClass":b.event,C(a,2),b=n(a,K,b.options),f.setHost(b),l(f,K,"start",{}),b.done(function(b){u(!b);
(b=w.get(W))&&b.counter===y&&la(x(a));l(f,K,"close",{})})});return f}function ya(a){a=x(a).querySelectorAll("[data-ng-animate]");s(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate")),c=w.get(a);if(c)switch(b){case 2:c.runner.end();case 1:w.remove(a)}})}function la(a){a=x(a);a.removeAttribute("data-ng-animate");w.remove(a)}function I(a,b){return x(a)===x(b)}function p(a,b,c){c=G(h.body);var d=I(a,c)||"HTML"===a[0].nodeName,k=I(a,f),g=!1,l,e=B.get(x(a));(a=G.data(a[0],"$ngAnimatePin"))&&
(b=a);for(b=x(b);b;){k||(k=I(b,f));if(1!==b.nodeType)break;a=w.get(b)||{};if(!g){var u=B.get(b);if(!0===u&&!1!==e){e=!0;break}else!1===u&&(e=!1);g=a.structural}if(N(l)||!0===l)a=G.data(b,"$$ngAnimateChildren"),$(a)&&(l=a);if(g&&!1===l)break;d||(d=I(b,c));if(d&&k)break;if(!k&&(a=G.data(b,"$ngAnimatePin"))){b=x(a);continue}b=b.parentNode}return(!g||l)&&!0!==e&&k&&d}function C(a,b,c){c=c||{};c.state=b;a=x(a);a.setAttribute("data-ng-animate",b);c=(b=w.get(a))?Da(b,c):c;w.put(a,c)}var w=new v,B=new v,
F=null,h=r[0]||{hidden:!0},W=c.$watch(function(){return 0===y.totalPendingRequests},function(a){a&&(W(),c.$$postDigest(function(){c.$$postDigest(function(){null===F&&(F=!0)})}))}),l={},u=a.classNameFilter(),Ua=u?function(a){return u.test(a)}:function(){return!0},A=Q(m),aa=Node.prototype.contains||function(a){return this===a||!!(this.compareDocumentPosition(a)&16)};return{on:function(a,b,c){b=ha(b);l[a]=l[a]||[];l[a].push({node:b,callback:c})},off:function(a,b,c){function h(a,b,c){var d=ha(b);return a.filter(function(a){return!(a.node===
d&&(!c||a.callback===c))})}var d=l[a];d&&(l[a]=1===arguments.length?null:h(d,b,c))},pin:function(a,b){za(ua(a),"element","not an element");za(ua(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,h){c=c||{};c.domOperation=h;return k(a,b,c)},enabled:function(a,b){var c=arguments.length;if(0===c)b=!!F;else if(ua(a)){var h=x(a),d=B.get(h);1===c?b=!d:B.put(h,!b)}else b=F=!!a;return b}}}]}]).provider("$$animation",["$animateProvider",function(a){function b(a){return a.data("$$animationRunner")}
var c=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$HashMap","$$rAFScheduler",function(a,e,f,L,U,J){function r(a){function b(a){if(a.processed)return a;a.processed=!0;var d=a.domNode,g=d.parentNode;e.put(d,a);for(var f;g;){if(f=e.get(g)){f.processed||(f=b(f));break}g=g.parentNode}(f||c).children.push(a);return a}var c={children:[]},d,e=new U;for(d=0;d<a.length;d++){var f=a[d];e.put(f.domNode,a[d]={domNode:f.domNode,fn:f.fn,children:[]})}for(d=0;d<a.length;d++)b(a[d]);
return function(a){var b=[],c=[],d;for(d=0;d<a.children.length;d++)c.push(a.children[d]);a=c.length;var g=0,e=[];for(d=0;d<c.length;d++){var f=c[d];0>=a&&(a=g,g=0,b.push(e),e=[]);e.push(f.fn);f.children.forEach(function(a){g++;c.push(a)});a--}e.length&&b.push(e);return b}(c)}var v=[],n=Q(a);return function(t,y,m){function g(a){a=a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];s(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&b.push(a)});return b}
function P(a){var b=[],c={};s(a,function(a,d){var h=x(a.element),k=0<=["enter","move"].indexOf(a.event),h=a.structural?g(h):[];if(h.length){var e=k?"to":"from";s(h,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][e]={animationID:d,element:G(a)}})}else b.push(a)});var d={},k={};s(c,function(c,g){var e=c.from,l=c.to;if(e&&l){var f=a[e.animationID],B=a[l.animationID],p=e.animationID.toString();if(!k[p]){var C=k[p]={structural:!0,beforeStart:function(){f.beforeStart();B.beforeStart()},
close:function(){f.close();B.close()},classes:H(f.classes,B.classes),from:f,to:B,anchors:[]};C.classes.length?b.push(C):(b.push(f),b.push(B))}k[p].anchors.push({out:e.element,"in":l.element})}else e=e?e.animationID:l.animationID,l=e.toString(),d[l]||(d[l]=!0,b.push(a[e]))});return b}function H(a,b){a=a.split(" ");b=b.split(" ");for(var c=[],d=0;d<a.length;d++){var k=a[d];if("ng-"!==k.substring(0,3))for(var g=0;g<b.length;g++)if(k===b[g]){c.push(k);break}}return c.join(" ")}function k(a){for(var b=
c.length-1;0<=b;b--){var d=c[b];if(f.has(d)&&(d=f.get(d)(a)))return d}}function ya(a,c){a.from&&a.to?(b(a.from.element).setHost(c),b(a.to.element).setHost(c)):b(a.element).setHost(c)}function la(){var a=b(t);!a||"leave"===y&&m.$$domOperationFired||a.end()}function I(b){t.off("$destroy",la);t.removeData("$$animationRunner");n(t,m);ia(t,m);m.domOperation();B&&a.removeClass(t,B);t.removeClass("ng-animate");C.complete(!b)}m=pa(m);var p=0<=["enter","move","leave"].indexOf(y),C=new L({end:function(){I()},
cancel:function(){I(!0)}});if(!c.length)return I(),C;t.data("$$animationRunner",C);var w=Aa(t.attr("class"),Aa(m.addClass,m.removeClass)),B=m.tempClasses;B&&(w+=" "+B,m.tempClasses=null);var F;p&&(F="ng-"+y+"-prepare",a.addClass(t,F));v.push({element:t,classes:w,event:y,structural:p,options:m,beforeStart:function(){t.addClass("ng-animate");B&&a.addClass(t,B);F&&(a.removeClass(t,F),F=null)},close:I});t.on("$destroy",la);if(1<v.length)return C;e.$$postDigest(function(){var a=[];s(v,function(c){b(c.element)?
a.push(c):c.close()});v.length=0;var c=P(a),d=[];s(c,function(a){d.push({domNode:x(a.from?a.from.element:a.element),fn:function(){a.beforeStart();var c,d=a.close;if(b(a.anchors?a.from.element||a.to.element:a.element)){var h=k(a);h&&(c=h.start)}c?(c=c(),c.done(function(a){d(!a)}),ya(a,c)):d()}})});J(r(d))});return C}}]}]).provider("$animateCss",["$animateProvider",function(a){var b=Ga(),c=Ga();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler",
"$$animateQueue",function(a,e,f,L,n,J,r,v){function G(a,b){var c=a.parentNode;return(c.$$ngAnimateParentKey||(c.$$ngAnimateParentKey=++P))+"-"+a.getAttribute("class")+"-"+b}function t(k,g,f,m){var p;0<b.count(f)&&(p=c.get(f),p||(g=X(g,"-stagger"),e.addClass(k,g),p=Ea(a,k,m),p.animationDuration=Math.max(p.animationDuration,0),p.transitionDuration=Math.max(p.transitionDuration,0),e.removeClass(k,g),c.put(f,p)));return p||{}}function y(a){H.push(a);r.waitUntilQuiet(function(){b.flush();c.flush();for(var a=
n(),d=0;d<H.length;d++)H[d](a);H.length=0})}function m(c,g,e){g=b.get(e);g||(g=Ea(a,c,Sa),"infinite"===g.animationIterationCount&&(g.animationIterationCount=1));b.put(e,g);c=g;e=c.animationDelay;g=c.transitionDelay;c.maxDelay=e&&g?Math.max(e,g):e||g;c.maxDuration=Math.max(c.animationDuration*c.animationIterationCount,c.transitionDuration);return c}var g=Q(e),P=0,H=[];return function(a,c){function d(){p()}function r(){p(!0)}function p(b){if(!(P||K&&U)){P=!0;U=!1;h.$$skipPreparationClasses||e.removeClass(a,
ga);e.removeClass(a,ha);sa(l,!1);qa(l,!1);s(u,function(a){l.style[a[0]]=""});g(a,h);ia(a,h);Object.keys(H).length&&s(H,function(a,b){a?l.style.setProperty(b,a):l.style.removeProperty(b)});if(h.onDone)h.onDone();fa&&fa.length&&a.off(fa.join(" "),B);var c=a.data("$$animateCss");c&&(L.cancel(c[0].timer),a.removeData("$$animateCss"));D&&D.complete(!b)}}function C(a){q.blockTransition&&qa(l,a);q.blockKeyframeAnimation&&sa(l,!!a)}function w(){D=new f({end:d,cancel:r});y(O);p();return{$$willAnimate:!1,start:function(){return D},
end:d}}function B(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-Y,0)>=Q&&b>=M&&(K=!0,p())}function F(){function b(){if(!P){C(!1);s(u,function(a){l.style[a[0]]=a[1]});g(a,h);e.addClass(a,ha);if(q.recalculateTimingStyles){oa=l.className+" "+ga;ja=G(l,oa);z=m(l,oa,ja);ba=z.maxDelay;E=Math.max(ba,0);M=z.maxDuration;if(0===M){p();return}q.hasTransitions=0<z.transitionDuration;q.hasAnimations=0<z.animationDuration}q.applyAnimationDelay&&
(ba="boolean"!==typeof h.delay&&ta(h.delay)?parseFloat(h.delay):ba,E=Math.max(ba,0),z.animationDelay=ba,ca=[ra,ba+"s"],u.push(ca),l.style[ca[0]]=ca[1]);Q=1E3*E;T=1E3*M;if(h.easing){var d,f=h.easing;q.hasTransitions&&(d=R+"TimingFunction",u.push([d,f]),l.style[d]=f);q.hasAnimations&&(d=Z+"TimingFunction",u.push([d,f]),l.style[d]=f)}z.transitionDuration&&fa.push(va);z.animationDuration&&fa.push(wa);Y=Date.now();var F=Q+1.5*T;d=Y+F;var f=a.data("$$animateCss")||[],w=!0;if(f.length){var r=f[0];(w=d>r.expectedEndTime)?
L.cancel(r.timer):f.push(p)}w&&(F=L(c,F,!1),f[0]={timer:F,expectedEndTime:d},f.push(p),a.data("$$animateCss",f));if(fa.length)a.on(fa.join(" "),B);h.to&&(h.cleanupStyles&&Ha(H,l,Object.keys(h.to)),Ca(a,h))}}function c(){var b=a.data("$$animateCss");if(b){for(var d=1;d<b.length;d++)b[d]();a.removeData("$$animateCss")}}if(!P)if(l.parentNode){var d=function(a){if(K)U&&a&&(U=!1,p());else if(U=!a,z.animationDuration)if(a=sa(l,U),U)u.push(a);else{var b=u,c=b.indexOf(a);0<=a&&b.splice(c,1)}},f=0<ea&&(z.transitionDuration&&
0===V.transitionDuration||z.animationDuration&&0===V.animationDuration)&&Math.max(V.animationDelay,V.transitionDelay);f?L(b,Math.floor(f*ea*1E3),!1):b();N.resume=function(){d(!0)};N.pause=function(){d(!1)}}else p()}var h=c||{};h.$$prepared||(h=pa(Ia(h)));var H={},l=x(a);if(!l||!l.parentNode||!v.enabled())return w();var u=[],n=a.attr("class"),A=La(h),P,U,K,D,N,E,Q,M,T,Y,fa=[];if(0===h.duration||!J.animations&&!J.transitions)return w();var ka=h.event&&da(h.event)?h.event.join(" "):h.event,$="",S="";
ka&&h.structural?$=X(ka,"ng-",!0):ka&&($=ka);h.addClass&&(S+=X(h.addClass,"-add"));h.removeClass&&(S.length&&(S+=" "),S+=X(h.removeClass,"-remove"));h.applyClassesEarly&&S.length&&g(a,h);var ga=[$,S].join(" ").trim(),oa=n+" "+ga,ha=X(ga,"-active"),n=A.to&&0<Object.keys(A.to).length;if(!(0<(h.keyframeStyle||"").length||n||ga))return w();var ja,V;0<h.stagger?(A=parseFloat(h.stagger),V={transitionDelay:A,animationDelay:A,transitionDuration:0,animationDuration:0}):(ja=G(l,oa),V=t(l,ga,ja,Ta));h.$$skipPreparationClasses||
e.addClass(a,ga);h.transitionStyle&&(A=[R,h.transitionStyle],ma(l,A),u.push(A));0<=h.duration&&(A=0<l.style[R].length,A=Fa(h.duration,A),ma(l,A),u.push(A));h.keyframeStyle&&(A=[Z,h.keyframeStyle],ma(l,A),u.push(A));var ea=V?0<=h.staggerIndex?h.staggerIndex:b.count(ja):0;(ka=0===ea)&&!h.skipBlocking&&qa(l,9999);var z=m(l,oa,ja),ba=z.maxDelay;E=Math.max(ba,0);M=z.maxDuration;var q={};q.hasTransitions=0<z.transitionDuration;q.hasAnimations=0<z.animationDuration;q.hasTransitionAll=q.hasTransitions&&"all"==
z.transitionProperty;q.applyTransitionDuration=n&&(q.hasTransitions&&!q.hasTransitionAll||q.hasAnimations&&!q.hasTransitions);q.applyAnimationDuration=h.duration&&q.hasAnimations;q.applyTransitionDelay=ta(h.delay)&&(q.applyTransitionDuration||q.hasTransitions);q.applyAnimationDelay=ta(h.delay)&&q.hasAnimations;q.recalculateTimingStyles=0<S.length;if(q.applyTransitionDuration||q.applyAnimationDuration)M=h.duration?parseFloat(h.duration):M,q.applyTransitionDuration&&(q.hasTransitions=!0,z.transitionDuration=
M,A=0<l.style[R+"Property"].length,u.push(Fa(M,A))),q.applyAnimationDuration&&(q.hasAnimations=!0,z.animationDuration=M,u.push([xa,M+"s"]));if(0===M&&!q.recalculateTimingStyles)return w();if(null!=h.delay){var ca;"boolean"!==typeof h.delay&&(ca=parseFloat(h.delay),E=Math.max(ca,0));q.applyTransitionDelay&&u.push([na,ca+"s"]);q.applyAnimationDelay&&u.push([ra,ca+"s"])}null==h.duration&&0<z.transitionDuration&&(q.recalculateTimingStyles=q.recalculateTimingStyles||ka);Q=1E3*E;T=1E3*M;h.skipBlocking||
(q.blockTransition=0<z.transitionDuration,q.blockKeyframeAnimation=0<z.animationDuration&&0<V.animationDelay&&0===V.animationDuration);h.from&&(h.cleanupStyles&&Ha(H,l,Object.keys(h.from)),Ba(a,h));q.blockTransition||q.blockKeyframeAnimation?C(M):h.skipBlocking||qa(l,!1);return{$$willAnimate:!0,end:d,start:function(){if(!P)return N={end:d,cancel:r,resume:null,pause:null},D=new f(N),y(F),D}}}}]}]).provider("$$animateCssDriver",["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");
this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(a,c,d,e,f,L,n){function J(a){return a.replace(/\bng-\S+\b/g,"")}function r(a,b){E(a)&&(a=a.split(" "));E(b)&&(b=b.split(" "));return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}function v(c,f,e){function k(a){var b={},c=x(a).getBoundingClientRect();s(["width","height","top","left"],function(a){var d=c[a];switch(a){case "top":d+=y.scrollTop;break;case "left":d+=y.scrollLeft}b[a]=
Math.floor(d)+"px"});return b}function L(){var c=J(e.attr("class")||""),d=r(c,p),c=r(p,c),d=a(v,{to:k(e),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?d:null}function n(){v.remove();f.removeClass("ng-animate-shim");e.removeClass("ng-animate-shim")}var v=G(x(f).cloneNode(!0)),p=J(v.attr("class")||"");f.addClass("ng-animate-shim");e.addClass("ng-animate-shim");v.addClass("ng-anchor");m.append(v);var C;c=function(){var c=a(v,{addClass:"ng-anchor-out",delay:!0,
from:k(f)});return c.$$willAnimate?c:null}();if(!c&&(C=L(),!C))return n();var w=c||C;return{start:function(){function a(){c&&c.end()}var b,c=w.start();c.done(function(){c=null;if(!C&&(C=L()))return c=C.start(),c.done(function(){c=null;n();b.complete()}),c;n();b.complete()});return b=new d({end:a,cancel:a})}}}function D(a,b,c,f){var e=t(a,O),m=t(b,O),r=[];s(f,function(a){(a=v(c,a.out,a["in"]))&&r.push(a)});if(e||m||0!==r.length)return{start:function(){function a(){s(b,function(a){a.end()})}var b=[];
e&&b.push(e.start());m&&b.push(m.start());s(r,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function t(c){var d=c.element,e=c.options||{};c.structural&&(e.event=c.event,e.structural=!0,e.applyClassesEarly=!0,"leave"===c.event&&(e.onDone=e.domOperation));e.preparationClasses&&(e.event=Y(e.event,e.preparationClasses));c=a(d,e);return c.$$willAnimate?c:null}if(!f.animations&&!f.transitions)return O;var y=n[0].body;c=x(e);var m=G(c.parentNode&&
11===c.parentNode.nodeType||y.contains(c)?c:y);Q(L);return function(a){return a.from&&a.to?D(a.from,a.to,a.classes,a.anchors):t(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(b,c,d){function e(c){c=da(c)?c:c.split(" ");for(var d=[],e={},f=0;f<c.length;f++){var v=c[f],n=a.$$registeredAnimations[v];n&&!e[v]&&(d.push(b.get(n)),e[v]=!0)}return d}var f=Q(d);return function(a,b,d,r){function n(){r.domOperation();f(a,r)}function x(a,
b,d,e,f){switch(d){case "animate":b=[b,e.from,e.to,f];break;case "setClass":b=[b,g,D,f];break;case "addClass":b=[b,g,f];break;case "removeClass":b=[b,D,f];break;default:b=[b,f]}b.push(e);if(a=a.apply(a,b))if(Ja(a.start)&&(a=a.start()),a instanceof c)a.done(f);else if(Ja(a))return a;return O}function t(a,b,d,e,f){var g=[];s(e,function(e){var k=e[f];k&&g.push(function(){var e,f,h=!1,g=function(a){h||(h=!0,(f||O)(a),e.complete(!a))};e=new c({end:function(){g()},cancel:function(){g(!0)}});f=x(k,a,b,d,
function(a){g(!1===a)});return e})});return g}function y(a,b,d,e,f){var g=t(a,b,d,e,f);if(0===g.length){var k,m;"beforeSetClass"===f?(k=t(a,"removeClass",d,e,"beforeRemoveClass"),m=t(a,"addClass",d,e,"beforeAddClass")):"setClass"===f&&(k=t(a,"removeClass",d,e,"removeClass"),m=t(a,"addClass",d,e,"addClass"));k&&(g=g.concat(k));m&&(g=g.concat(m))}if(0!==g.length)return function(a){var b=[];g.length&&s(g,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){s(b,function(b){a?b.cancel():
b.end()})}}}var m=!1;3===arguments.length&&ea(d)&&(r=d,d=null);r=pa(r);d||(d=a.attr("class")||"",r.addClass&&(d+=" "+r.addClass),r.removeClass&&(d+=" "+r.removeClass));var g=r.addClass,D=r.removeClass,H=e(d),k,E;if(H.length){var G,I;"leave"==b?(I="leave",G="afterLeave"):(I="before"+b.charAt(0).toUpperCase()+b.substr(1),G=b);"enter"!==b&&"move"!==b&&(k=y(a,b,r,H,I));E=y(a,b,r,H,G)}if(k||E){var p;return{$$willAnimate:!0,end:function(){p?p.end():(m=!0,n(),ia(a,r),p=new c,p.complete(!0));return p},start:function(){function b(c){m=
!0;n();ia(a,r);p.complete(c)}if(p)return p;p=new c;var d,e=[];k&&e.push(function(a){d=k(a)});e.length?e.push(function(a){n();a(!0)}):n();E&&e.push(function(a){d=E(a)});p.setHost({end:function(){m||((d||O)(void 0),b(void 0))},cancel:function(){m||((d||O)(!0),b(!0))}});c.chain(e,b);return p}}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,c.event,c.classes,
c.options)}return function(a){if(a.from&&a.to){var b=d(a.from),n=d(a.to);if(b||n)return{start:function(){function a(){return function(){s(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());n&&d.push(n.start());c.all(d,function(a){e.complete(a)});var e=new c({end:a(),cancel:a()});return e}}}else return d(a)}}]}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

;
/*
 AngularJS v1.4.12
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(J,f,C){'use strict';function D(t,e){e=e||{};f.forEach(e,function(f,k){delete e[k]});for(var k in t)!t.hasOwnProperty(k)||"$"===k.charAt(0)&&"$"===k.charAt(1)||(e[k]=t[k]);return e}var y=f.$$minErr("$resource"),B=/^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;f.module("ngResource",["ng"]).provider("$resource",function(){var t=/^https?:\/\/[^\/]*/,e=this;this.defaults={stripTrailingSlashes:!0,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}}};
this.$get=["$http","$log","$q",function(k,F,G){function w(f,g){this.template=f;this.defaults=r({},e.defaults,g);this.urlParams={}}function z(l,g,s,h){function c(a,q){var c={};q=r({},g,q);u(q,function(b,q){x(b)&&(b=b());var m;if(b&&b.charAt&&"@"==b.charAt(0)){m=a;var d=b.substr(1);if(null==d||""===d||"hasOwnProperty"===d||!B.test("."+d))throw y("badmember",d);for(var d=d.split("."),n=0,g=d.length;n<g&&f.isDefined(m);n++){var e=d[n];m=null!==m?m[e]:C}}else m=b;c[q]=m});return c}function H(a){return a.resource}
function d(a){D(a||{},this)}var t=new w(l,h);s=r({},e.defaults.actions,s);d.prototype.toJSON=function(){var a=r({},this);delete a.$promise;delete a.$resolved;return a};u(s,function(a,q){var g=/^(POST|PUT|PATCH)$/i.test(a.method);d[q]=function(b,A,m,e){var n={},h,l,s;switch(arguments.length){case 4:s=e,l=m;case 3:case 2:if(x(A)){if(x(b)){l=b;s=A;break}l=A;s=m}else{n=b;h=A;l=m;break}case 1:x(b)?l=b:g?h=b:n=b;break;case 0:break;default:throw y("badargs",arguments.length);}var w=this instanceof d,p=w?
h:a.isArray?[]:new d(h),v={},z=a.interceptor&&a.interceptor.response||H,B=a.interceptor&&a.interceptor.responseError||C;u(a,function(a,b){switch(b){default:v[b]=I(a);break;case "params":case "isArray":case "interceptor":break;case "timeout":a&&!f.isNumber(a)&&F.debug("ngResource:\n  Only numeric values are allowed as `timeout`.\n  Promises are not supported in $resource, because the same value would be used for multiple requests.\n  If you need support for cancellable $resource actions, you should upgrade to version 1.5 or higher.")}});
g&&(v.data=h);t.setUrlParams(v,r({},c(h,a.params||{}),n),a.url);n=k(v).then(function(b){var c=b.data,m=p.$promise;if(c){if(f.isArray(c)!==!!a.isArray)throw y("badcfg",q,a.isArray?"array":"object",f.isArray(c)?"array":"object",v.method,v.url);a.isArray?(p.length=0,u(c,function(b){"object"===typeof b?p.push(new d(b)):p.push(b)})):(D(c,p),p.$promise=m)}p.$resolved=!0;b.resource=p;return b},function(b){p.$resolved=!0;(s||E)(b);return G.reject(b)});n=n.then(function(b){var a=z(b);(l||E)(a,b.headers);return a},
B);return w?n:(p.$promise=n,p.$resolved=!1,p)};d.prototype["$"+q]=function(b,a,c){x(b)&&(c=a,a=b,b={});b=d[q].call(this,b,this,a,c);return b.$promise||b}});d.bind=function(a){return z(l,r({},g,a),s)};return d}var E=f.noop,u=f.forEach,r=f.extend,I=f.copy,x=f.isFunction;w.prototype={setUrlParams:function(l,g,e){var h=this,c=e||h.template,k,d,r="",a=h.urlParams={};u(c.split(/\W/),function(d){if("hasOwnProperty"===d)throw y("badname");!/^\d+$/.test(d)&&d&&(new RegExp("(^|[^\\\\]):"+d+"(\\W|$)")).test(c)&&
(a[d]=!0)});c=c.replace(/\\:/g,":");c=c.replace(t,function(a){r=a;return""});g=g||{};u(h.urlParams,function(a,e){k=g.hasOwnProperty(e)?g[e]:h.defaults[e];f.isDefined(k)&&null!==k?(d=encodeURIComponent(k).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"%20").replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+"),c=c.replace(new RegExp(":"+e+"(\\W|$)","g"),function(b,a){return d+a})):c=c.replace(new RegExp("(/?):"+e+"(\\W|$)","g"),function(b,
a,c){return"/"==c.charAt(0)?c:a+c})});h.defaults.stripTrailingSlashes&&(c=c.replace(/\/+$/,"")||"/");c=c.replace(/\/\.(?=\w+($|\?))/,".");l.url=r+c.replace(/\/\\\./,"/.");u(g,function(a,c){h.urlParams[c]||(l.params=l.params||{},l.params[c]=a)})}};return z}]})})(window,window.angular);
//# sourceMappingURL=angular-resource.min.js.map

;
/**
 * Satellizer 0.14.1
 * (c) 2016 Sahat Yalkabov
 * License: MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="satellizer"),function(e,t,r){"use strict";e.location.origin||(e.location.origin=e.location.protocol+"//"+e.location.hostname+(e.location.port?":"+e.location.port:"")),t.module("satellizer",[]).constant("SatellizerConfig",{httpInterceptor:function(){return!0},withCredentials:!1,tokenRoot:null,baseUrl:"/",loginUrl:"/auth/login",signupUrl:"/auth/signup",unlinkUrl:"/auth/unlink/",tokenName:"token",tokenPrefix:"satellizer",authHeader:"Authorization",authToken:"Bearer",storageType:"localStorage",providers:{facebook:{name:"facebook",url:"/auth/facebook",authorizationEndpoint:"https://www.facebook.com/v2.5/dialog/oauth",redirectUri:e.location.origin+"/",requiredUrlParams:["display","scope"],scope:["email"],scopeDelimiter:",",display:"popup",oauthType:"2.0",popupOptions:{width:580,height:400}},google:{name:"google",url:"/auth/google",authorizationEndpoint:"https://accounts.google.com/o/oauth2/auth",redirectUri:e.location.origin,requiredUrlParams:["scope"],optionalUrlParams:["display","state"],scope:["profile","email"],scopePrefix:"openid",scopeDelimiter:" ",display:"popup",oauthType:"2.0",popupOptions:{width:452,height:633},state:function(){var e=Math.random().toString(36).substr(2);return encodeURIComponent(e)}},github:{name:"github",url:"/auth/github",authorizationEndpoint:"https://github.com/login/oauth/authorize",redirectUri:e.location.origin,optionalUrlParams:["scope"],scope:["user:email"],scopeDelimiter:" ",oauthType:"2.0",popupOptions:{width:1020,height:618}},instagram:{name:"instagram",url:"/auth/instagram",authorizationEndpoint:"https://api.instagram.com/oauth/authorize",redirectUri:e.location.origin,requiredUrlParams:["scope"],scope:["basic"],scopeDelimiter:"+",oauthType:"2.0"},linkedin:{name:"linkedin",url:"/auth/linkedin",authorizationEndpoint:"https://www.linkedin.com/uas/oauth2/authorization",redirectUri:e.location.origin,requiredUrlParams:["state"],scope:["r_emailaddress"],scopeDelimiter:" ",state:"STATE",oauthType:"2.0",popupOptions:{width:527,height:582}},twitter:{name:"twitter",url:"/auth/twitter",authorizationEndpoint:"https://api.twitter.com/oauth/authenticate",redirectUri:e.location.origin,oauthType:"1.0",popupOptions:{width:495,height:645}},twitch:{name:"twitch",url:"/auth/twitch",authorizationEndpoint:"https://api.twitch.tv/kraken/oauth2/authorize",redirectUri:e.location.origin,requiredUrlParams:["scope"],scope:["user_read"],scopeDelimiter:" ",display:"popup",oauthType:"2.0",popupOptions:{width:500,height:560}},live:{name:"live",url:"/auth/live",authorizationEndpoint:"https://login.live.com/oauth20_authorize.srf",redirectUri:e.location.origin,requiredUrlParams:["display","scope"],scope:["wl.emails"],scopeDelimiter:" ",display:"popup",oauthType:"2.0",popupOptions:{width:500,height:560}},yahoo:{name:"yahoo",url:"/auth/yahoo",authorizationEndpoint:"https://api.login.yahoo.com/oauth2/request_auth",redirectUri:e.location.origin,scope:[],scopeDelimiter:",",oauthType:"2.0",popupOptions:{width:559,height:519}},bitbucket:{name:"bitbucket",url:"/auth/bitbucket",authorizationEndpoint:"https://bitbucket.org/site/oauth2/authorize",redirectUri:e.location.origin+"/",requiredUrlParams:["scope"],scope:["email"],scopeDelimiter:" ",oauthType:"2.0",popupOptions:{width:1028,height:529}}}}).provider("$auth",["SatellizerConfig",function(e){Object.defineProperties(this,{httpInterceptor:{get:function(){return e.httpInterceptor},set:function(t){"function"==typeof t?e.httpInterceptor=t:e.httpInterceptor=function(){return t}}},baseUrl:{get:function(){return e.baseUrl},set:function(t){e.baseUrl=t}},loginUrl:{get:function(){return e.loginUrl},set:function(t){e.loginUrl=t}},signupUrl:{get:function(){return e.signupUrl},set:function(t){e.signupUrl=t}},tokenRoot:{get:function(){return e.tokenRoot},set:function(t){e.tokenRoot=t}},tokenName:{get:function(){return e.tokenName},set:function(t){e.tokenName=t}},tokenPrefix:{get:function(){return e.tokenPrefix},set:function(t){e.tokenPrefix=t}},unlinkUrl:{get:function(){return e.unlinkUrl},set:function(t){e.unlinkUrl=t}},authHeader:{get:function(){return e.authHeader},set:function(t){e.authHeader=t}},authToken:{get:function(){return e.authToken},set:function(t){e.authToken=t}},withCredentials:{get:function(){return e.withCredentials},set:function(t){e.withCredentials=t}},storageType:{get:function(){return e.storageType},set:function(t){e.storageType=t}}}),t.forEach(Object.keys(e.providers),function(r){this[r]=function(n){return t.extend(e.providers[r],n)}},this);var r=function(r){e.providers[r.name]=e.providers[r.name]||{},t.extend(e.providers[r.name],r)};this.oauth1=function(t){r(t),e.providers[t.name].oauthType="1.0"},this.oauth2=function(t){r(t),e.providers[t.name].oauthType="2.0"},this.$get=["$q","SatellizerShared","SatellizerLocal","SatellizerOauth",function(e,t,r,n){var o={};return o.login=function(e,t){return r.login(e,t)},o.signup=function(e,t){return r.signup(e,t)},o.logout=function(){return t.logout()},o.authenticate=function(e,t){return n.authenticate(e,t)},o.link=function(e,t){return n.authenticate(e,t)},o.unlink=function(e,t){return n.unlink(e,t)},o.isAuthenticated=function(){return t.isAuthenticated()},o.getToken=function(){return t.getToken()},o.setToken=function(e){t.setToken({access_token:e})},o.removeToken=function(){return t.removeToken()},o.getPayload=function(){return t.getPayload()},o.setStorageType=function(e){return t.setStorageType(e)},o}]}]).factory("SatellizerShared",["$q","$window","$log","SatellizerConfig","SatellizerStorage",function(n,o,i,a,u){var l={},p=a.tokenPrefix?[a.tokenPrefix,a.tokenName].join("_"):a.tokenName;return l.getToken=function(){return u.get(p)},l.getPayload=function(){var t=u.get(p);if(t&&3===t.split(".").length)try{var n=t.split(".")[1],o=n.replace(/-/g,"+").replace(/_/g,"/");return JSON.parse(decodeURIComponent(escape(e.atob(o))))}catch(i){return r}},l.setToken=function(e){if(!e)return i.warn("Can't set token without passing a value");var r,n=e&&e.access_token;if(n&&(t.isObject(n)&&t.isObject(n.data)?e=n:t.isString(n)&&(r=n)),!r&&e){var o=a.tokenRoot&&a.tokenRoot.split(".").reduce(function(e,t){return e[t]},e.data);r=o?o[a.tokenName]:e.data&&e.data[a.tokenName]}if(!r){var l=a.tokenRoot?a.tokenRoot+"."+a.tokenName:a.tokenName;return i.warn('Expecting a token named "'+l)}u.set(p,r)},l.removeToken=function(){u.remove(p)},l.isAuthenticated=function(){var e=u.get(p);if(e){if(3===e.split(".").length)try{var t=e.split(".")[1],r=t.replace(/-/g,"+").replace(/_/g,"/"),n=JSON.parse(o.atob(r)).exp;if(n){var i=Math.round((new Date).getTime()/1e3)>=n;return!i}}catch(a){return!0}return!0}return!1},l.logout=function(){return u.remove(p),n.when()},l.setStorageType=function(e){a.storageType=e},l}]).factory("SatellizerOauth",["$q","$http","SatellizerConfig","SatellizerUtils","SatellizerShared","SatellizerOauth1","SatellizerOauth2",function(e,t,r,n,o,i,a){var u={};return u.authenticate=function(t,n){var u="1.0"===r.providers[t].oauthType?new i:new a,l=e.defer();return u.open(r.providers[t],n||{}).then(function(e){r.providers[t].url&&o.setToken(e,!1),l.resolve(e)})["catch"](function(e){l.reject(e)}),l.promise},u.unlink=function(e,o){return o=o||{},o.url=o.url?o.url:n.joinUrl(r.baseUrl,r.unlinkUrl),o.data={provider:e}||o.data,o.method=o.method||"POST",o.withCredentials=o.withCredentials||r.withCredentials,t(o)},u}]).factory("SatellizerLocal",["$http","SatellizerUtils","SatellizerShared","SatellizerConfig",function(e,t,r,n){var o={};return o.login=function(o,i){return i=i||{},i.url=i.url?i.url:t.joinUrl(n.baseUrl,n.loginUrl),i.data=o||i.data,i.method=i.method||"POST",i.withCredentials=i.withCredentials||n.withCredentials,e(i).then(function(e){return r.setToken(e),e})},o.signup=function(r,o){return o=o||{},o.url=o.url?o.url:t.joinUrl(n.baseUrl,n.signupUrl),o.data=r||o.data,o.method=o.method||"POST",o.withCredentials=o.withCredentials||n.withCredentials,e(o)},o}]).factory("SatellizerOauth2",["$q","$http","$window","$timeout","SatellizerPopup","SatellizerUtils","SatellizerConfig","SatellizerStorage",function(r,n,o,i,a,u,l,p){return function(){var o={},c={defaultUrlParams:["response_type","client_id","redirect_uri"],responseType:"code",responseParams:{code:"code",clientId:"clientId",redirectUri:"redirectUri"}};return o.open=function(n,l){c=u.merge(n,c);var s=r.defer();return i(function(){var r,n,i=c.name+"_state";return t.isFunction(c.state)?p.set(i,c.state()):t.isString(c.state)&&p.set(i,c.state),r=[c.authorizationEndpoint,o.buildQueryString()].join("?"),n=e.cordova?a.open(r,c.name,c.popupOptions,c.redirectUri).eventListener(c.redirectUri):a.open(r,c.name,c.popupOptions,c.redirectUri).pollPopup(c.redirectUri),n.then(function(e){return"token"!==c.responseType&&c.url?e.state&&e.state!==p.get(i)?s.reject("The value returned in the state parameter does not match the state value from your original authorization code request."):void s.resolve(o.exchangeForToken(e,l)):s.resolve(e)})}),s.promise},o.exchangeForToken=function(e,r){var o=t.extend({},r);t.forEach(c.responseParams,function(t,r){switch(r){case"code":o[t]=e.code;break;case"clientId":o[t]=c.clientId;break;case"redirectUri":o[t]=c.redirectUri;break;default:o[t]=e[r]}}),e.state&&(o.state=e.state);var i=l.baseUrl?u.joinUrl(l.baseUrl,c.url):c.url;return n.post(i,o,{withCredentials:l.withCredentials})},o.buildQueryString=function(){var e=[],r=["defaultUrlParams","requiredUrlParams","optionalUrlParams"];return t.forEach(r,function(r){t.forEach(c[r],function(r){var n=u.camelCase(r),o=t.isFunction(c[r])?c[r]():c[n];if("redirect_uri"!==r||o){if("state"===r){var i=c.name+"_state";o=encodeURIComponent(p.get(i))}"scope"===r&&Array.isArray(o)&&(o=o.join(c.scopeDelimiter),c.scopePrefix&&(o=[c.scopePrefix,o].join(c.scopeDelimiter))),e.push([r,o])}})}),e.map(function(e){return e.join("=")}).join("&")},o}}]).factory("SatellizerOauth1",["$q","$http","SatellizerPopup","SatellizerConfig","SatellizerUtils",function(r,n,o,i,a){return function(){var r={},u={url:null,name:null,popupOptions:null,redirectUri:null,authorizationEndpoint:null};return r.open=function(l,p){t.extend(u,l);var c,s=i.baseUrl?a.joinUrl(i.baseUrl,u.url):u.url;return e.cordova||(c=o.open("",u.name,u.popupOptions,u.redirectUri)),n.post(s,u).then(function(t){var n=[u.authorizationEndpoint,r.buildQueryString(t.data)].join("?");e.cordova?c=o.open(n,u.name,u.popupOptions,u.redirectUri):c.popupWindow.location=n;var i;return i=e.cordova?c.eventListener(u.redirectUri):c.pollPopup(u.redirectUri),i.then(function(e){return r.exchangeForToken(e,p)})})},r.exchangeForToken=function(e,r){var o=t.extend({},r,e),l=i.baseUrl?a.joinUrl(i.baseUrl,u.url):u.url;return n.post(l,o,{withCredentials:i.withCredentials})},r.buildQueryString=function(e){var r=[];return t.forEach(e,function(e,t){r.push(encodeURIComponent(t)+"="+encodeURIComponent(e))}),r.join("&")},r}}]).factory("SatellizerPopup",["$q","$interval","$window","SatellizerConfig","SatellizerUtils",function(n,o,i,a,u){var l={};return l.url="",l.popupWindow=null,l.open=function(t,r,n){l.url=t;var o=l.stringifyOptions(l.prepareOptions(n)),a=i.navigator.userAgent,u=e.cordova||a.indexOf("CriOS")>-1?"_blank":r;return l.popupWindow=i.open(t,u,o),i.popup=l.popupWindow,l.popupWindow&&l.popupWindow.focus&&l.popupWindow.focus(),l},l.eventListener=function(e){var r=n.defer();return l.popupWindow.addEventListener("loadstart",function(n){if(0===n.url.indexOf(e)){var o=document.createElement("a");if(o.href=n.url,o.search||o.hash){var i=o.search.substring(1).replace(/\/$/,""),a=o.hash.substring(1).replace(/\/$/,""),p=u.parseQueryString(a),c=u.parseQueryString(i);t.extend(c,p),c.error||r.resolve(c),l.popupWindow.close()}}}),l.popupWindow.addEventListener("loaderror",function(){r.reject("Authorization Failed")}),r.promise},l.pollPopup=function(e){var i=n.defer(),a=document.createElement("a");a.href=e;var p=u.getFullUrlPath(a),c=o(function(){l.popupWindow&&!l.popupWindow.closed&&l.popupWindow.closed!==r||(i.reject("The popup window was closed."),o.cancel(c));try{var e=u.getFullUrlPath(l.popupWindow.location);if(e===p){if(l.popupWindow.location.search||l.popupWindow.location.hash){var n=l.popupWindow.location.search.substring(1).replace(/\/$/,""),a=l.popupWindow.location.hash.substring(1).replace(/[\/$]/,""),s=u.parseQueryString(a),h=u.parseQueryString(n);t.extend(h,s),h.error?i.reject(h):i.resolve(h)}else i.reject("Redirect has occurred but no query or hash parameters were found. They were either not set during the redirect, or were removed before Satellizer could read them, e.g. AngularJS routing mechanism.");o.cancel(c),l.popupWindow.close()}}catch(d){}},20);return i.promise},l.prepareOptions=function(e){e=e||{};var r=e.width||500,n=e.height||500;return t.extend({width:r,height:n,left:i.screenX+(i.outerWidth-r)/2,top:i.screenY+(i.outerHeight-n)/2.5},e)},l.stringifyOptions=function(e){var r=[];return t.forEach(e,function(e,t){r.push(t+"="+e)}),r.join(",")},l}]).service("SatellizerUtils",function(){this.getFullUrlPath=function(e){var t="https:"===e.protocol;return e.protocol+"//"+e.hostname+":"+(e.port||(t?"443":"80"))+(/^\//.test(e.pathname)?e.pathname:"/"+e.pathname)},this.camelCase=function(e){return e.replace(/([\:\-\_]+(.))/g,function(e,t,r,n){return n?r.toUpperCase():r})},this.parseQueryString=function(e){var r,n,o={};return t.forEach((e||"").split("&"),function(e){e&&(n=e.split("="),r=decodeURIComponent(n[0]),o[r]=t.isDefined(n[1])?decodeURIComponent(n[1]):!0)}),o},this.joinUrl=function(e,t){if(/^(?:[a-z]+:)?\/\//i.test(t))return t;var r=[e,t].join("/"),n=function(e){return e.replace(/[\/]+/g,"/").replace(/\/\?/g,"?").replace(/\/\#/g,"#").replace(/\:\//g,"://")};return n(r)},this.merge=function(e,t){var r={};for(var n in e)e.hasOwnProperty(n)&&(n in t&&"object"==typeof e[n]&&null!==n?r[n]=this.merge(e[n],t[n]):r[n]=e[n]);for(n in t)if(t.hasOwnProperty(n)){if(n in r)continue;r[n]=t[n]}return r}}).factory("SatellizerStorage",["$window","$log","SatellizerConfig",function(e,t,r){var n={},o=function(){try{var t=r.storageType in e&&null!==e[r.storageType];if(t){var n=Math.random().toString(36).substring(7);e[r.storageType].setItem(n,""),e[r.storageType].removeItem(n)}return t}catch(o){return!1}}();return o||t.warn(r.storageType+" is not available."),{get:function(t){return o?e[r.storageType].getItem(t):n[t]},set:function(t,i){return o?e[r.storageType].setItem(t,i):n[t]=i},remove:function(t){return o?e[r.storageType].removeItem(t):delete n[t]}}}]).factory("SatellizerInterceptor",["$q","SatellizerConfig","SatellizerStorage","SatellizerShared",function(e,t,r,n){return{request:function(e){if(e.skipAuthorization)return e;if(n.isAuthenticated()&&t.httpInterceptor(e)){var o=t.tokenPrefix?t.tokenPrefix+"_"+t.tokenName:t.tokenName,i=r.get(o);t.authHeader&&t.authToken&&(i=t.authToken+" "+i),e.headers[t.authHeader]=i}return e},responseError:function(t){return e.reject(t)}}}]).config(["$httpProvider",function(e){e.interceptors.push("SatellizerInterceptor")}])}(window,window.angular);
;
/*
 AngularJS v1.4.12
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,h,p){'use strict';function E(a){var f=[];r(f,h.noop).chars(a);return f.join("")}function g(a,f){var d={},c=a.split(","),b;for(b=0;b<c.length;b++)d[f?h.lowercase(c[b]):c[b]]=!0;return d}function F(a,f){function d(a,b,d,l){b=h.lowercase(b);if(s[b])for(;e.last()&&t[e.last()];)c("",e.last());u[b]&&e.last()==b&&c("",b);(l=v[b]||!!l)||e.push(b);var m={};d.replace(G,function(b,a,f,c,d){m[a]=q(f||c||d||"")});f.start&&f.start(b,m,l)}function c(b,a){var c=0,d;if(a=h.lowercase(a))for(c=e.length-
1;0<=c&&e[c]!=a;c--);if(0<=c){for(d=e.length-1;d>=c;d--)f.end&&f.end(e[d]);e.length=c}}"string"!==typeof a&&(a=null===a||"undefined"===typeof a?"":""+a);var b,k,e=[],m=a,l;for(e.last=function(){return e[e.length-1]};a;){l="";k=!0;if(e.last()&&w[e.last()])a=a.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*"+e.last()+"[^>]*>","i"),function(a,b){b=b.replace(H,"$1").replace(I,"$1");f.chars&&f.chars(q(b));return""}),c("",e.last());else{if(0===a.indexOf("\x3c!--"))b=a.indexOf("--",4),0<=b&&a.lastIndexOf("--\x3e",
b)===b&&(f.comment&&f.comment(a.substring(4,b)),a=a.substring(b+3),k=!1);else if(x.test(a)){if(b=a.match(x))a=a.replace(b[0],""),k=!1}else if(J.test(a)){if(b=a.match(y))a=a.substring(b[0].length),b[0].replace(y,c),k=!1}else K.test(a)&&((b=a.match(z))?(b[4]&&(a=a.substring(b[0].length),b[0].replace(z,d)),k=!1):(l+="<",a=a.substring(1)));k&&(b=a.indexOf("<"),l+=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),f.chars&&f.chars(q(l)))}if(a==m)throw L("badparse",a);m=a}c()}function q(a){if(!a)return"";A.innerHTML=
a.replace(/</g,"&lt;");return A.textContent}function B(a){return a.replace(/&/g,"&amp;").replace(M,function(a){var d=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(d-55296)+(a-56320)+65536)+";"}).replace(N,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function r(a,f){var d=!1,c=h.bind(a,a.push);return{start:function(a,k,e){a=h.lowercase(a);!d&&w[a]&&(d=a);d||!0!==C[a]||(c("<"),c(a),h.forEach(k,function(d,e){var k=h.lowercase(e),g="img"===a&&"src"===k||
"background"===k;!0!==O[k]||!0===D[k]&&!f(d,g)||(c(" "),c(e),c('="'),c(B(d)),c('"'))}),c(e?"/>":">"))},end:function(a){a=h.lowercase(a);d||!0!==C[a]||(c("</"),c(a),c(">"));a==d&&(d=!1)},chars:function(a){d||c(B(a))}}}var L=h.$$minErr("$sanitize"),z=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,y=/^<\/\s*([\w:-]+)[^>]*>/,G=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,K=/^</,J=/^<\//,H=/\x3c!--(.*?)--\x3e/g,x=/<!DOCTYPE([^>]*?)>/i,
I=/<!\[CDATA\[(.*?)]]\x3e/g,M=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,N=/([^\#-~| |!])/g,v=g("area,br,col,hr,img,wbr");n=g("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");p=g("rp,rt");var u=h.extend({},p,n),s=h.extend({},n,g("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),t=h.extend({},p,g("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var"));
n=g("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan,use");var w=g("script,style"),C=h.extend({},v,s,t,u,n),D=g("background,cite,href,longdesc,src,usemap,xlink:href");n=g("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width");
p=g("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
!0);var O=h.extend({},D,p,n),A=document.createElement("pre");h.module("ngSanitize",[]).provider("$sanitize",function(){this.$get=["$$sanitizeUri",function(a){return function(f){var d=[];F(f,r(d,function(c,b){return!/^unsafe/.test(a(c,b))}));return d.join("")}}]});h.module("ngSanitize").filter("linky",["$sanitize",function(a){var f=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,d=/^mailto:/i;return function(c,b){function k(a){a&&g.push(E(a))}function e(a,
c){g.push("<a ");h.isDefined(b)&&g.push('target="',b,'" ');g.push('href="',a.replace(/"/g,"&quot;"),'">');k(c);g.push("</a>")}if(!c)return c;for(var m,l=c,g=[],n,p;m=l.match(f);)n=m[0],m[2]||m[4]||(n=(m[3]?"http://":"mailto:")+n),p=m.index,k(l.substr(0,p)),e(n,m[0].replace(d,"")),l=l.substring(p+m[0].length);k(l);return a(g.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

;
//     Underscore.js 1.7.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r=Array.prototype,e=Object.prototype,u=Function.prototype,i=r.push,a=r.slice,o=r.concat,l=e.toString,c=e.hasOwnProperty,f=Array.isArray,s=Object.keys,p=u.bind,h=function(n){return n instanceof h?n:this instanceof h?void(this._wrapped=n):new h(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=h),exports._=h):n._=h,h.VERSION="1.7.0";var g=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}};h.iteratee=function(n,t,r){return null==n?h.identity:h.isFunction(n)?g(n,t,r):h.isObject(n)?h.matches(n):h.property(n)},h.each=h.forEach=function(n,t,r){if(null==n)return n;t=g(t,r);var e,u=n.length;if(u===+u)for(e=0;u>e;e++)t(n[e],e,n);else{var i=h.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},h.map=h.collect=function(n,t,r){if(null==n)return[];t=h.iteratee(t,r);for(var e,u=n.length!==+n.length&&h.keys(n),i=(u||n).length,a=Array(i),o=0;i>o;o++)e=u?u[o]:o,a[o]=t(n[e],e,n);return a};var v="Reduce of empty array with no initial value";h.reduce=h.foldl=h.inject=function(n,t,r,e){null==n&&(n=[]),t=g(t,e,4);var u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length,o=0;if(arguments.length<3){if(!a)throw new TypeError(v);r=n[i?i[o++]:o++]}for(;a>o;o++)u=i?i[o]:o,r=t(r,n[u],u,n);return r},h.reduceRight=h.foldr=function(n,t,r,e){null==n&&(n=[]),t=g(t,e,4);var u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;if(arguments.length<3){if(!a)throw new TypeError(v);r=n[i?i[--a]:--a]}for(;a--;)u=i?i[a]:a,r=t(r,n[u],u,n);return r},h.find=h.detect=function(n,t,r){var e;return t=h.iteratee(t,r),h.some(n,function(n,r,u){return t(n,r,u)?(e=n,!0):void 0}),e},h.filter=h.select=function(n,t,r){var e=[];return null==n?e:(t=h.iteratee(t,r),h.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e)},h.reject=function(n,t,r){return h.filter(n,h.negate(h.iteratee(t)),r)},h.every=h.all=function(n,t,r){if(null==n)return!0;t=h.iteratee(t,r);var e,u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;for(e=0;a>e;e++)if(u=i?i[e]:e,!t(n[u],u,n))return!1;return!0},h.some=h.any=function(n,t,r){if(null==n)return!1;t=h.iteratee(t,r);var e,u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;for(e=0;a>e;e++)if(u=i?i[e]:e,t(n[u],u,n))return!0;return!1},h.contains=h.include=function(n,t){return null==n?!1:(n.length!==+n.length&&(n=h.values(n)),h.indexOf(n,t)>=0)},h.invoke=function(n,t){var r=a.call(arguments,2),e=h.isFunction(t);return h.map(n,function(n){return(e?t:n[t]).apply(n,r)})},h.pluck=function(n,t){return h.map(n,h.property(t))},h.where=function(n,t){return h.filter(n,h.matches(t))},h.findWhere=function(n,t){return h.find(n,h.matches(t))},h.max=function(n,t,r){var e,u,i=-1/0,a=-1/0;if(null==t&&null!=n){n=n.length===+n.length?n:h.values(n);for(var o=0,l=n.length;l>o;o++)e=n[o],e>i&&(i=e)}else t=h.iteratee(t,r),h.each(n,function(n,r,e){u=t(n,r,e),(u>a||u===-1/0&&i===-1/0)&&(i=n,a=u)});return i},h.min=function(n,t,r){var e,u,i=1/0,a=1/0;if(null==t&&null!=n){n=n.length===+n.length?n:h.values(n);for(var o=0,l=n.length;l>o;o++)e=n[o],i>e&&(i=e)}else t=h.iteratee(t,r),h.each(n,function(n,r,e){u=t(n,r,e),(a>u||1/0===u&&1/0===i)&&(i=n,a=u)});return i},h.shuffle=function(n){for(var t,r=n&&n.length===+n.length?n:h.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=h.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},h.sample=function(n,t,r){return null==t||r?(n.length!==+n.length&&(n=h.values(n)),n[h.random(n.length-1)]):h.shuffle(n).slice(0,Math.max(0,t))},h.sortBy=function(n,t,r){return t=h.iteratee(t,r),h.pluck(h.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var m=function(n){return function(t,r,e){var u={};return r=h.iteratee(r,e),h.each(t,function(e,i){var a=r(e,i,t);n(u,e,a)}),u}};h.groupBy=m(function(n,t,r){h.has(n,r)?n[r].push(t):n[r]=[t]}),h.indexBy=m(function(n,t,r){n[r]=t}),h.countBy=m(function(n,t,r){h.has(n,r)?n[r]++:n[r]=1}),h.sortedIndex=function(n,t,r,e){r=h.iteratee(r,e,1);for(var u=r(t),i=0,a=n.length;a>i;){var o=i+a>>>1;r(n[o])<u?i=o+1:a=o}return i},h.toArray=function(n){return n?h.isArray(n)?a.call(n):n.length===+n.length?h.map(n,h.identity):h.values(n):[]},h.size=function(n){return null==n?0:n.length===+n.length?n.length:h.keys(n).length},h.partition=function(n,t,r){t=h.iteratee(t,r);var e=[],u=[];return h.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},h.first=h.head=h.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:0>t?[]:a.call(n,0,t)},h.initial=function(n,t,r){return a.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},h.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:a.call(n,Math.max(n.length-t,0))},h.rest=h.tail=h.drop=function(n,t,r){return a.call(n,null==t||r?1:t)},h.compact=function(n){return h.filter(n,h.identity)};var y=function(n,t,r,e){if(t&&h.every(n,h.isArray))return o.apply(e,n);for(var u=0,a=n.length;a>u;u++){var l=n[u];h.isArray(l)||h.isArguments(l)?t?i.apply(e,l):y(l,t,r,e):r||e.push(l)}return e};h.flatten=function(n,t){return y(n,t,!1,[])},h.without=function(n){return h.difference(n,a.call(arguments,1))},h.uniq=h.unique=function(n,t,r,e){if(null==n)return[];h.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=h.iteratee(r,e));for(var u=[],i=[],a=0,o=n.length;o>a;a++){var l=n[a];if(t)a&&i===l||u.push(l),i=l;else if(r){var c=r(l,a,n);h.indexOf(i,c)<0&&(i.push(c),u.push(l))}else h.indexOf(u,l)<0&&u.push(l)}return u},h.union=function(){return h.uniq(y(arguments,!0,!0,[]))},h.intersection=function(n){if(null==n)return[];for(var t=[],r=arguments.length,e=0,u=n.length;u>e;e++){var i=n[e];if(!h.contains(t,i)){for(var a=1;r>a&&h.contains(arguments[a],i);a++);a===r&&t.push(i)}}return t},h.difference=function(n){var t=y(a.call(arguments,1),!0,!0,[]);return h.filter(n,function(n){return!h.contains(t,n)})},h.zip=function(n){if(null==n)return[];for(var t=h.max(arguments,"length").length,r=Array(t),e=0;t>e;e++)r[e]=h.pluck(arguments,e);return r},h.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},h.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=h.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}for(;u>e;e++)if(n[e]===t)return e;return-1},h.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=n.length;for("number"==typeof r&&(e=0>r?e+r+1:Math.min(e,r+1));--e>=0;)if(n[e]===t)return e;return-1},h.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var d=function(){};h.bind=function(n,t){var r,e;if(p&&n.bind===p)return p.apply(n,a.call(arguments,1));if(!h.isFunction(n))throw new TypeError("Bind must be called on a function");return r=a.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(a.call(arguments)));d.prototype=n.prototype;var u=new d;d.prototype=null;var i=n.apply(u,r.concat(a.call(arguments)));return h.isObject(i)?i:u}},h.partial=function(n){var t=a.call(arguments,1);return function(){for(var r=0,e=t.slice(),u=0,i=e.length;i>u;u++)e[u]===h&&(e[u]=arguments[r++]);for(;r<arguments.length;)e.push(arguments[r++]);return n.apply(this,e)}},h.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=h.bind(n[r],n);return n},h.memoize=function(n,t){var r=function(e){var u=r.cache,i=t?t.apply(this,arguments):e;return h.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},h.delay=function(n,t){var r=a.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},h.defer=function(n){return h.delay.apply(h,[n,1].concat(a.call(arguments,1)))},h.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var l=function(){o=r.leading===!1?0:h.now(),a=null,i=n.apply(e,u),a||(e=u=null)};return function(){var c=h.now();o||r.leading!==!1||(o=c);var f=t-(c-o);return e=this,u=arguments,0>=f||f>t?(clearTimeout(a),a=null,o=c,i=n.apply(e,u),a||(e=u=null)):a||r.trailing===!1||(a=setTimeout(l,f)),i}},h.debounce=function(n,t,r){var e,u,i,a,o,l=function(){var c=h.now()-a;t>c&&c>0?e=setTimeout(l,t-c):(e=null,r||(o=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,a=h.now();var c=r&&!e;return e||(e=setTimeout(l,t)),c&&(o=n.apply(i,u),i=u=null),o}},h.wrap=function(n,t){return h.partial(t,n)},h.negate=function(n){return function(){return!n.apply(this,arguments)}},h.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},h.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},h.before=function(n,t){var r;return function(){return--n>0?r=t.apply(this,arguments):t=null,r}},h.once=h.partial(h.before,2),h.keys=function(n){if(!h.isObject(n))return[];if(s)return s(n);var t=[];for(var r in n)h.has(n,r)&&t.push(r);return t},h.values=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},h.pairs=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},h.invert=function(n){for(var t={},r=h.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},h.functions=h.methods=function(n){var t=[];for(var r in n)h.isFunction(n[r])&&t.push(r);return t.sort()},h.extend=function(n){if(!h.isObject(n))return n;for(var t,r,e=1,u=arguments.length;u>e;e++){t=arguments[e];for(r in t)c.call(t,r)&&(n[r]=t[r])}return n},h.pick=function(n,t,r){var e,u={};if(null==n)return u;if(h.isFunction(t)){t=g(t,r);for(e in n){var i=n[e];t(i,e,n)&&(u[e]=i)}}else{var l=o.apply([],a.call(arguments,1));n=new Object(n);for(var c=0,f=l.length;f>c;c++)e=l[c],e in n&&(u[e]=n[e])}return u},h.omit=function(n,t,r){if(h.isFunction(t))t=h.negate(t);else{var e=h.map(o.apply([],a.call(arguments,1)),String);t=function(n,t){return!h.contains(e,t)}}return h.pick(n,t,r)},h.defaults=function(n){if(!h.isObject(n))return n;for(var t=1,r=arguments.length;r>t;t++){var e=arguments[t];for(var u in e)n[u]===void 0&&(n[u]=e[u])}return n},h.clone=function(n){return h.isObject(n)?h.isArray(n)?n.slice():h.extend({},n):n},h.tap=function(n,t){return t(n),n};var b=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof h&&(n=n._wrapped),t instanceof h&&(t=t._wrapped);var u=l.call(n);if(u!==l.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]===n)return e[i]===t;var a=n.constructor,o=t.constructor;if(a!==o&&"constructor"in n&&"constructor"in t&&!(h.isFunction(a)&&a instanceof a&&h.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c,f;if("[object Array]"===u){if(c=n.length,f=c===t.length)for(;c--&&(f=b(n[c],t[c],r,e)););}else{var s,p=h.keys(n);if(c=p.length,f=h.keys(t).length===c)for(;c--&&(s=p[c],f=h.has(t,s)&&b(n[s],t[s],r,e)););}return r.pop(),e.pop(),f};h.isEqual=function(n,t){return b(n,t,[],[])},h.isEmpty=function(n){if(null==n)return!0;if(h.isArray(n)||h.isString(n)||h.isArguments(n))return 0===n.length;for(var t in n)if(h.has(n,t))return!1;return!0},h.isElement=function(n){return!(!n||1!==n.nodeType)},h.isArray=f||function(n){return"[object Array]"===l.call(n)},h.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},h.each(["Arguments","Function","String","Number","Date","RegExp"],function(n){h["is"+n]=function(t){return l.call(t)==="[object "+n+"]"}}),h.isArguments(arguments)||(h.isArguments=function(n){return h.has(n,"callee")}),"function"!=typeof/./&&(h.isFunction=function(n){return"function"==typeof n||!1}),h.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},h.isNaN=function(n){return h.isNumber(n)&&n!==+n},h.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===l.call(n)},h.isNull=function(n){return null===n},h.isUndefined=function(n){return n===void 0},h.has=function(n,t){return null!=n&&c.call(n,t)},h.noConflict=function(){return n._=t,this},h.identity=function(n){return n},h.constant=function(n){return function(){return n}},h.noop=function(){},h.property=function(n){return function(t){return t[n]}},h.matches=function(n){var t=h.pairs(n),r=t.length;return function(n){if(null==n)return!r;n=new Object(n);for(var e=0;r>e;e++){var u=t[e],i=u[0];if(u[1]!==n[i]||!(i in n))return!1}return!0}},h.times=function(n,t,r){var e=Array(Math.max(0,n));t=g(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},h.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},h.now=Date.now||function(){return(new Date).getTime()};var _={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},w=h.invert(_),j=function(n){var t=function(t){return n[t]},r="(?:"+h.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};h.escape=j(_),h.unescape=j(w),h.result=function(n,t){if(null==n)return void 0;var r=n[t];return h.isFunction(r)?n[t]():r};var x=0;h.uniqueId=function(n){var t=++x+"";return n?n+t:t},h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var A=/(.)^/,k={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},O=/\\|'|\r|\n|\u2028|\u2029/g,F=function(n){return"\\"+k[n]};h.template=function(n,t,r){!t&&r&&(t=r),t=h.defaults({},t,h.templateSettings);var e=RegExp([(t.escape||A).source,(t.interpolate||A).source,(t.evaluate||A).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,a,o){return i+=n.slice(u,o).replace(O,F),u=o+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":a&&(i+="';\n"+a+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var a=new Function(t.variable||"obj","_",i)}catch(o){throw o.source=i,o}var l=function(n){return a.call(this,n,h)},c=t.variable||"obj";return l.source="function("+c+"){\n"+i+"}",l},h.chain=function(n){var t=h(n);return t._chain=!0,t};var E=function(n){return this._chain?h(n).chain():n};h.mixin=function(n){h.each(h.functions(n),function(t){var r=h[t]=n[t];h.prototype[t]=function(){var n=[this._wrapped];return i.apply(n,arguments),E.call(this,r.apply(h,n))}})},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=r[n];h.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],E.call(this,r)}}),h.each(["concat","join","slice"],function(n){var t=r[n];h.prototype[n]=function(){return E.call(this,t.apply(this._wrapped,arguments))}}),h.prototype.value=function(){return this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return h})}).call(this);
//# sourceMappingURL=underscore-min.map
;
/*
 *  webui popover plugin  - v1.2.12
 *  A lightWeight popover plugin with jquery ,enchance the  popover plugin of bootstrap with some awesome new features. It works well with bootstrap ,but bootstrap is not necessary!
 *  https://github.com/sandywalker/webui-popover
 *
 *  Made by Sandy Duan
 *  Under MIT License
 */
(function(window, document, undefined) {
    'use strict';
    (function(factory) {
        if (typeof define === 'function' && define.amd) {
            // Register as an anonymous AMD module.
            define(['jquery'], factory);
        } else if (typeof exports === 'object') {
            // Node/CommonJS
            module.exports = factory(require('jquery'));
        } else {
            // Browser globals
            factory(window.jQuery);
        }
    }(function($) {
        // Create the defaults once
        var pluginName = 'webuiPopover';
        var pluginClass = 'webui-popover';
        var pluginType = 'webui.popover';
        var defaults = {
            placement: 'auto',
            container: null,
            width: 'auto',
            height: 'auto',
            trigger: 'click', //hover,click,sticky,manual
            style: '',
            delay: {
                show: null,
                hide: 300
            },
            async: {
                type: 'GET',
                before: null, //function(that, xhr){}
                success: null, //function(that, xhr){}
                error: null //function(that, xhr, data){}
            },
            cache: true,
            multi: false,
            arrow: true,
            title: '',
            content: '',
            closeable: false,
            padding: true,
            url: '',
            type: 'html',
            direction: '', // ltr,rtl
            animation: null,
            template: '<div class="webui-popover">' +
                '<div class="webui-arrow"></div>' +
                '<div class="webui-popover-inner">' +
                '<a href="#" class="close"></a>' +
                '<h3 class="webui-popover-title"></h3>' +
                '<div class="webui-popover-content"><i class="icon-refresh"></i> <p>&nbsp;</p></div>' +
                '</div>' +
                '</div>',
            backdrop: false,
            dismissible: true,
            onShow: null,
            onHide: null,
            abortXHR: true,
            autoHide: false,
            offsetTop: 0,
            offsetLeft: 0,
            iframeOptions: {
                frameborder: '0',
                allowtransparency: 'true',
                id: '',
                name: '',
                scrolling: '',
                onload: '',
                height: '',
                width: ''
            },
            hideEmpty: false
        };

        var rtlClass = pluginClass + '-rtl';
        var _srcElements = [];
        var backdrop = $('<div class="webui-popover-backdrop"></div>');
        var _globalIdSeed = 0;
        var _isBodyEventHandled = false;
        var _offsetOut = -2000; // the value offset  out of the screen
        var $document = $(document);

        var toNumber = function(numeric, fallback) {
            return isNaN(numeric) ? (fallback || 0) : Number(numeric);
        };

        var getPopFromElement = function($element) {
            return $element.data('plugin_' + pluginName);
        };

        var hideAllPop = function() {
            var pop = null;
            for (var i = 0; i < _srcElements.length; i++) {
                pop = getPopFromElement(_srcElements[i]);
                if (pop) {
                    pop.hide(true);
                }
            }
            $document.trigger('hiddenAll.' + pluginType);
        };

        var isMobile = ('ontouchstart' in document.documentElement) && (/Mobi/.test(navigator.userAgent));

        //var removeAllTargets = function() {
        // for (var i = 0; i < _srcElements.length; i++) {
        //     var pop = getPopFromElement(_srcElements[i]);
        //     console.log(pop.$target);
        // }
        //};

        var pointerEventToXY = function(e) {
            var out = {
                x: 0,
                y: 0
            };
            if (e.type === 'touchstart' || e.type === 'touchmove' || e.type === 'touchend' || e.type === 'touchcancel') {
                var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                out.x = touch.pageX;
                out.y = touch.pageY;
            } else if (e.type === 'mousedown' || e.type === 'mouseup' || e.type === 'click') {
                out.x = e.pageX;
                out.y = e.pageY;
            }
            return out;
        };



        // The actual plugin constructor
        function WebuiPopover(element, options) {
            this.$element = $(element);
            if (options) {
                if ($.type(options.delay) === 'string' || $.type(options.delay) === 'number') {
                    options.delay = {
                        show: options.delay,
                        hide: options.delay
                    }; // bc break fix
                }
            }
            this.options = $.extend({}, defaults, options);
            this._defaults = defaults;
            this._name = pluginName;
            this._targetclick = false;
            this.init();
            _srcElements.push(this.$element);

        }

        WebuiPopover.prototype = {
            //init webui popover
            init: function() {
                if (this.getTrigger() !== 'manual') {
                    //init the event handlers
                    if (this.getTrigger() === 'click' || isMobile) {
                        this.$element.off('click touchend').on('click touchend', $.proxy(this.toggle, this));
                    } else if (this.getTrigger() === 'hover') {
                        this.$element
                            .off('mouseenter mouseleave click')
                            .on('mouseenter', $.proxy(this.mouseenterHandler, this))
                            .on('mouseleave', $.proxy(this.mouseleaveHandler, this));
                    }
                }
                this._poped = false;
                this._inited = true;
                this._opened = false;
                this._idSeed = _globalIdSeed;
                // normalize container
                this.options.container = $(this.options.container || document.body).first();

                if (this.options.backdrop) {
                    backdrop.appendTo(this.options.container).hide();
                }
                _globalIdSeed++;
                if (this.getTrigger() === 'sticky') {
                    this.show();
                }

            },
            /* api methods and actions */
            destroy: function() {
                var index = -1;

                for (var i = 0; i < _srcElements.length; i++) {
                    if (_srcElements[i] === this.$element) {
                        index = i;
                        break;
                    }
                }

                _srcElements.splice(index, 1);


                this.hide();
                this.$element.data('plugin_' + pluginName, null);
                if (this.getTrigger() === 'click') {
                    this.$element.off('click');
                } else if (this.getTrigger() === 'hover') {
                    this.$element.off('mouseenter mouseleave');
                }
                if (this.$target) {
                    this.$target.remove();
                }
            },
            /*
                param: force    boolean value, if value is true then force hide the popover
                param: event    dom event,
            */
            hide: function(force, event) {
                if (!force && this.getTrigger() === 'sticky') {
                    return;
                }
                if (!this._opened) {
                    return;
                }

                if (event) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                if (this.xhr && this.options.abortXHR === true) {
                    this.xhr.abort();
                    this.xhr = null;
                }


                var e = $.Event('hide.' + pluginType);
                this.$element.trigger(e, [this.$target]);
                if (this.$target) {
                    this.$target.removeClass('in').addClass(this.getHideAnimation());
                    var that = this;
                    setTimeout(function() {
                        that.$target.hide();
                        if (!that.getCache()) {
                            that.$target.remove();
                        }
                    }, that.getHideDelay());
                }
                if (this.options.backdrop) {
                    backdrop.hide();
                }
                this._opened = false;
                this.$element.trigger('hidden.' + pluginType, [this.$target]);

                if (this.options.onHide) {
                    this.options.onHide(this.$target);
                }

            },
            resetAutoHide: function() {
                var that = this;
                var autoHide = that.getAutoHide();
                if (autoHide) {
                    if (that.autoHideHandler) {
                        clearTimeout(that.autoHideHandler);
                    }
                    that.autoHideHandler = setTimeout(function() {
                        that.hide();
                    }, autoHide);
                }
            },
            toggle: function(e) {
                if (e) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                this[this.getTarget().hasClass('in') ? 'hide' : 'show']();
            },
            hideAll: function() {
                hideAllPop();
            },
            /*core method ,show popover */
            show: function() {
                if (this._opened) {
                    return;
                }
                //removeAllTargets();
                var
                    $target = this.getTarget().removeClass().addClass(pluginClass).addClass(this._customTargetClass);
                if (!this.options.multi) {
                    this.hideAll();
                }

                // use cache by default, if not cache setted  , reInit the contents
                if (!this.getCache() || !this._poped || this.content === '') {
                    this.content = '';
                    this.setTitle(this.getTitle());
                    if (!this.options.closeable) {
                        $target.find('.close').off('click').remove();
                    }

                    if (!this.isAsync()) {
                        this.setContent(this.getContent());
                    } else {
                        this.setContentASync(this.options.content);
                    }

                    if (this.canEmptyHide() && this.content === '') {
                        return;
                    }
                    $target.show();
                }

                this.displayContent();

                if (this.options.onShow) {
                    this.options.onShow($target);
                }

                this.bindBodyEvents();
                if (this.options.backdrop) {
                    backdrop.show();
                }
                this._opened = true;
                this.resetAutoHide();
            },
            displayContent: function() {
                var
                //element postion
                    elementPos = this.getElementPosition(),
                    //target postion
                    $target = this.getTarget().removeClass().addClass(pluginClass).addClass(this._customTargetClass),
                    //target content
                    $targetContent = this.getContentElement(),
                    //target Width
                    targetWidth = $target[0].offsetWidth,
                    //target Height
                    targetHeight = $target[0].offsetHeight,
                    //placement
                    placement = 'bottom',
                    e = $.Event('show.' + pluginType);

                if (this.canEmptyHide()) {

                    var content = $targetContent.children().html();
                    if (content !== null && content.trim().length === 0) {
                        return;
                    }
                }

                //if (this.hasContent()){
                this.$element.trigger(e, [$target]);
                //}
                // support width as data attribute
                var optWidth = this.$element.data('width') || this.options.width;
                if (optWidth === '') {
                    optWidth = this._defaults.width;
                }

                if (optWidth !== 'auto') {
                    $target.width(optWidth);
                }

                // support height as data attribute
                var optHeight = this.$element.data('height') || this.options.height;
                if (optHeight === '') {
                    optHeight = this._defaults.height;
                }

                if (optHeight !== 'auto') {
                    $targetContent.height(optHeight);
                }

                if (this.options.style) {
                    this.$target.addClass(pluginClass + '-' + this.options.style);
                }

                //check rtl
                if (this.options.direction === 'rtl' && !$targetContent.hasClass(rtlClass)) {
                    $targetContent.addClass(rtlClass);
                }

                //init the popover and insert into the document body
                if (!this.options.arrow) {
                    $target.find('.webui-arrow').remove();
                }
                $target.detach().css({
                    top: _offsetOut,
                    left: _offsetOut,
                    display: 'block'
                });

                if (this.getAnimation()) {
                    $target.addClass(this.getAnimation());
                }
                $target.appendTo(this.options.container);


                placement = this.getPlacement(elementPos);

                //This line is just for compatible with knockout custom binding
                this.$element.trigger('added.' + pluginType);

                this.initTargetEvents();

                if (!this.options.padding) {
                    if (this.options.height !== 'auto') {
                        $targetContent.css('height', $targetContent.outerHeight());
                    }
                    this.$target.addClass('webui-no-padding');
                }
                targetWidth = $target[0].offsetWidth;
                targetHeight = $target[0].offsetHeight;

                var postionInfo = this.getTargetPositin(elementPos, placement, targetWidth, targetHeight);

                this.$target.css(postionInfo.position).addClass(placement).addClass('in');

                if (this.options.type === 'iframe') {
                    var $iframe = $target.find('iframe');
                    var iframeWidth = $target.width();
                    var iframeHeight = $iframe.parent().height();

                    if (this.options.iframeOptions.width !== '' && this.options.iframeOptions.width !== 'auto') {
                        iframeWidth = this.options.iframeOptions.width;
                    }

                    if (this.options.iframeOptions.height !== '' && this.options.iframeOptions.height !== 'auto') {
                        iframeHeight = this.options.iframeOptions.height;
                    }

                    $iframe.width(iframeWidth).height(iframeHeight);
                }




                if (!this.options.arrow) {
                    this.$target.css({
                        'margin': 0
                    });
                }
                if (this.options.arrow) {
                    var $arrow = this.$target.find('.webui-arrow');
                    $arrow.removeAttr('style');

                    //prevent arrow change by content size
                    if (placement === 'left' || placement === 'right') {
                        $arrow.css({
                            top: this.$target.height() / 2
                        });
                    } else if (placement === 'top' || placement === 'bottom') {
                        $arrow.css({
                            left: this.$target.width() / 2
                        });
                    }

                    if (postionInfo.arrowOffset) {
                        //hide the arrow if offset is negative
                        if (postionInfo.arrowOffset.left === -1 || postionInfo.arrowOffset.top === -1) {
                            $arrow.hide();
                        } else {
                            $arrow.css(postionInfo.arrowOffset);
                        }
                    }

                }
                this._poped = true;
                this.$element.trigger('shown.' + pluginType, [this.$target]);
            },

            isTargetLoaded: function() {
                return this.getTarget().find('i.glyphicon-refresh').length === 0;
            },

            /*getter setters */
            getTriggerElement: function() {
                return this.$element;
            },
            getTarget: function() {
                if (!this.$target) {
                    var id = pluginName + this._idSeed;
                    this.$target = $(this.options.template)
                        .attr('id', id)
                        .data('trigger-element', this.getTriggerElement());
                    this._customTargetClass = this.$target.attr('class') !== pluginClass ? this.$target.attr('class') : null;
                    this.getTriggerElement().attr('data-target', id);
                }
                return this.$target;
            },
            getTitleElement: function() {
                return this.getTarget().find('.' + pluginClass + '-title');
            },
            getContentElement: function() {
                if (!this.$contentElement) {
                    this.$contentElement = this.getTarget().find('.' + pluginClass + '-content');
                }
                return this.$contentElement;
            },
            getTitle: function() {
                return this.$element.attr('data-title') || this.options.title || this.$element.attr('title');
            },
            getUrl: function() {
                return this.$element.attr('data-url') || this.options.url;
            },
            getAutoHide: function() {
                return this.$element.attr('data-auto-hide') || this.options.autoHide;
            },
            getOffsetTop: function() {
                return toNumber(this.$element.attr('data-offset-top')) || this.options.offsetTop;
            },
            getOffsetLeft: function() {
                return toNumber(this.$element.attr('data-offset-left')) || this.options.offsetLeft;
            },
            getCache: function() {
                var dataAttr = this.$element.attr('data-cache');
                if (typeof(dataAttr) !== 'undefined') {
                    switch (dataAttr.toLowerCase()) {
                        case 'true':
                        case 'yes':
                        case '1':
                            return true;
                        case 'false':
                        case 'no':
                        case '0':
                            return false;
                    }
                }
                return this.options.cache;
            },
            getTrigger: function() {
                return this.$element.attr('data-trigger') || this.options.trigger;
            },
            getDelayShow: function() {
                var dataAttr = this.$element.attr('data-delay-show');
                if (typeof(dataAttr) !== 'undefined') {
                    return dataAttr;
                }
                return this.options.delay.show === 0 ? 0 : this.options.delay.show || 100;
            },
            getHideDelay: function() {
                var dataAttr = this.$element.attr('data-delay-hide');
                if (typeof(dataAttr) !== 'undefined') {
                    return dataAttr;
                }
                return this.options.delay.hide === 0 ? 0 : this.options.delay.hide || 100;
            },
            getAnimation: function() {
                var dataAttr = this.$element.attr('data-animation');
                return dataAttr || this.options.animation;
            },
            getHideAnimation: function() {
                var ani = this.getAnimation();
                return ani ? ani + '-out' : 'out';
            },
            setTitle: function(title) {
                var $titleEl = this.getTitleElement();
                if (title) {
                    //check rtl
                    if (this.options.direction === 'rtl' && !$titleEl.hasClass(rtlClass)) {
                        $titleEl.addClass(rtlClass);
                    }
                    $titleEl.html(title);
                } else {
                    $titleEl.remove();
                }
            },
            hasContent: function() {
                return this.getContent();
            },
            canEmptyHide: function() {
                return this.options.hideEmpty && this.options.type === 'html';
            },
            getIframe: function() {
                var $iframe = $('<iframe></iframe>').attr('src', this.getUrl());
                var self = this;
                $.each(this._defaults.iframeOptions, function(opt) {
                    if (typeof self.options.iframeOptions[opt] !== 'undefined') {
                        $iframe.attr(opt, self.options.iframeOptions[opt]);
                    }
                });

                return $iframe;
            },
            getContent: function() {
                if (this.getUrl()) {
                    switch (this.options.type) {
                        case 'iframe':
                            this.content = this.getIframe();
                            break;
                        case 'html':
                            try {
                                this.content = $(this.getUrl());
                                if (!this.content.is(':visible')) {
                                    this.content.show();
                                }
                            } catch (error) {
                                throw new Error('Unable to get popover content. Invalid selector specified.');
                            }
                            break;
                    }
                } else if (!this.content) {
                    var content = '';
                    if ($.isFunction(this.options.content)) {
                        content = this.options.content.apply(this.$element[0], [this]);
                    } else {
                        content = this.options.content;
                    }
                    this.content = this.$element.attr('data-content') || content;
                    if (!this.content) {
                        var $next = this.$element.next();

                        if ($next && $next.hasClass(pluginClass + '-content')) {
                            this.content = $next;
                        }
                    }
                }
                return this.content;
            },
            setContent: function(content) {
                var $target = this.getTarget();
                var $ct = this.getContentElement();
                if (typeof content === 'string') {
                    $ct.html(content);
                } else if (content instanceof $) {
                    $ct.html('');
                    //Don't want to clone too many times.
                    if (!this.options.cache) {
                        content.clone(true, true).removeClass(pluginClass + '-content').appendTo($ct);
                    } else {
                        content.removeClass(pluginClass + '-content').appendTo($ct);
                    }
                }
                this.$target = $target;
            },
            isAsync: function() {
                return this.options.type === 'async';
            },
            setContentASync: function(content) {
                var that = this;
                if (this.xhr) {
                    return;
                }
                this.xhr = $.ajax({
                    url: this.getUrl(),
                    type: this.options.async.type,
                    cache: this.getCache(),
                    beforeSend: function(xhr) {
                        if (that.options.async.before) {
                            that.options.async.before(that, xhr);
                        }
                    },
                    success: function(data) {
                        that.bindBodyEvents();
                        if (content && $.isFunction(content)) {
                            that.content = content.apply(that.$element[0], [data]);
                        } else {
                            that.content = data;
                        }
                        that.setContent(that.content);
                        var $targetContent = that.getContentElement();
                        $targetContent.removeAttr('style');
                        that.displayContent();
                        if (that.options.async.success) {
                            that.options.async.success(that, data);
                        }
                    },
                    complete: function() {
                        that.xhr = null;
                    },
                    error: function(xhr, data) {
                        if (that.options.async.error) {
                            that.options.async.error(that, xhr, data);
                        }
                    }
                });
            },

            bindBodyEvents: function() {
                if (_isBodyEventHandled) {
                    return;
                }
                if (this.options.dismissible && this.getTrigger() === 'click') {
                    $document.off('keyup.webui-popover').on('keyup.webui-popover', $.proxy(this.escapeHandler, this));
                    $document.off('click.webui-popover touchend.webui-popover')
                        .on('click.webui-popover touchend.webui-popover', $.proxy(this.bodyClickHandler, this));
                } else if (this.getTrigger() === 'hover') {
                    $document.off('touchend.webui-popover')
                        .on('touchend.webui-popover', $.proxy(this.bodyClickHandler, this));
                }
            },

            /* event handlers */
            mouseenterHandler: function() {
                var self = this;
                if (self._timeout) {
                    clearTimeout(self._timeout);
                }
                self._enterTimeout = setTimeout(function() {
                    if (!self.getTarget().is(':visible')) {
                        self.show();
                    }
                }, this.getDelayShow());
            },
            mouseleaveHandler: function() {
                var self = this;
                clearTimeout(self._enterTimeout);
                //key point, set the _timeout  then use clearTimeout when mouse leave
                self._timeout = setTimeout(function() {
                    self.hide();
                }, this.getHideDelay());
            },
            escapeHandler: function(e) {
                if (e.keyCode === 27) {
                    this.hideAll();
                }
            },

            bodyClickHandler: function(e) {
                _isBodyEventHandled = true;
                var canHide = true;
                for (var i = 0; i < _srcElements.length; i++) {
                    var pop = getPopFromElement(_srcElements[i]);
                    if (pop && pop._opened) {
                        var offset = pop.getTarget().offset();
                        var popX1 = offset.left;
                        var popY1 = offset.top;
                        var popX2 = offset.left + pop.getTarget().width();
                        var popY2 = offset.top + pop.getTarget().height();
                        var pt = pointerEventToXY(e);
                        var inPop = pt.x >= popX1 && pt.x <= popX2 && pt.y >= popY1 && pt.y <= popY2;
                        if (inPop) {
                            canHide = false;
                            break;
                        }
                    }
                }
                if (canHide) {
                    hideAllPop();
                }
            },

            /*
            targetClickHandler: function() {
                this._targetclick = true;
            },
            */

            //reset and init the target events;
            initTargetEvents: function() {
                if (this.getTrigger() === 'hover') {
                    this.$target
                        .off('mouseenter mouseleave')
                        .on('mouseenter', $.proxy(this.mouseenterHandler, this))
                        .on('mouseleave', $.proxy(this.mouseleaveHandler, this));
                }
                this.$target.find('.close').off('click').on('click', $.proxy(this.hide, this, true));
                //this.$target.off('click.webui-popover').on('click.webui-popover', $.proxy(this.targetClickHandler, this));
            },
            /* utils methods */
            //caculate placement of the popover
            getPlacement: function(pos) {
                var
                    placement,
                    container = this.options.container,
                    clientWidth = container.innerWidth(),
                    clientHeight = container.innerHeight(),
                    scrollTop = container.scrollTop(),
                    scrollLeft = container.scrollLeft(),
                    pageX = Math.max(0, pos.left - scrollLeft),
                    pageY = Math.max(0, pos.top - scrollTop);
                //arrowSize = 20;

                //if placement equals auto，caculate the placement by element information;
                if (typeof(this.options.placement) === 'function') {
                    placement = this.options.placement.call(this, this.getTarget()[0], this.$element[0]);
                } else {
                    placement = this.$element.data('placement') || this.options.placement;
                }

                var isH = placement === 'horizontal';
                var isV = placement === 'vertical';
                var detect = placement === 'auto' || isH || isV;

                if (detect) {
                    if (pageX < clientWidth / 3) {
                        if (pageY < clientHeight / 3) {
                            placement = isH ? 'right-bottom' : 'bottom-right';
                        } else if (pageY < clientHeight * 2 / 3) {
                            if (isV) {
                                placement = pageY <= clientHeight / 2 ? 'bottom-right' : 'top-right';
                            } else {
                                placement = 'right';
                            }
                        } else {
                            placement = isH ? 'right-top' : 'top-right';
                        }
                        //placement= pageY>targetHeight+arrowSize?'top-right':'bottom-right';
                    } else if (pageX < clientWidth * 2 / 3) {
                        if (pageY < clientHeight / 3) {
                            if (isH) {
                                placement = pageX <= clientWidth / 2 ? 'right-bottom' : 'left-bottom';
                            } else {
                                placement = 'bottom';
                            }
                        } else if (pageY < clientHeight * 2 / 3) {
                            if (isH) {
                                placement = pageX <= clientWidth / 2 ? 'right' : 'left';
                            } else {
                                placement = pageY <= clientHeight / 2 ? 'bottom' : 'top';
                            }
                        } else {
                            if (isH) {
                                placement = pageX <= clientWidth / 2 ? 'right-top' : 'left-top';
                            } else {
                                placement = 'top';
                            }
                        }
                    } else {
                        //placement = pageY>targetHeight+arrowSize?'top-left':'bottom-left';
                        if (pageY < clientHeight / 3) {
                            placement = isH ? 'left-bottom' : 'bottom-left';
                        } else if (pageY < clientHeight * 2 / 3) {
                            if (isV) {
                                placement = pageY <= clientHeight / 2 ? 'bottom-left' : 'top-left';
                            } else {
                                placement = 'left';
                            }
                        } else {
                            placement = isH ? 'left-top' : 'top-left';
                        }
                    }
                } else if (placement === 'auto-top') {
                    if (pageX < clientWidth / 3) {
                        placement = 'top-right';
                    } else if (pageX < clientWidth * 2 / 3) {
                        placement = 'top';
                    } else {
                        placement = 'top-left';
                    }
                } else if (placement === 'auto-bottom') {
                    if (pageX < clientWidth / 3) {
                        placement = 'bottom-right';
                    } else if (pageX < clientWidth * 2 / 3) {
                        placement = 'bottom';
                    } else {
                        placement = 'bottom-left';
                    }
                } else if (placement === 'auto-left') {
                    if (pageY < clientHeight / 3) {
                        placement = 'left-top';
                    } else if (pageY < clientHeight * 2 / 3) {
                        placement = 'left';
                    } else {
                        placement = 'left-bottom';
                    }
                } else if (placement === 'auto-right') {
                    if (pageY < clientHeight / 3) {
                        placement = 'right-top';
                    } else if (pageY < clientHeight * 2 / 3) {
                        placement = 'right';
                    } else {
                        placement = 'right-bottom';
                    }
                }
                return placement;
            },
            getElementPosition: function() {
                // If the container is the body or normal conatiner, just use $element.offset()
                var elRect = this.$element[0].getBoundingClientRect();
                var container = this.options.container;
                var cssPos = container.css('position');

                if (container.is(document.body) || cssPos === 'static') {
                    return $.extend({}, this.$element.offset(), {
                        width: this.$element[0].offsetWidth || elRect.width,
                        height: this.$element[0].offsetHeight || elRect.height
                    });
                    // Else fixed container need recalculate the  position
                } else if (cssPos === 'fixed') {
                    var containerRect = container[0].getBoundingClientRect();
                    return {
                        top: elRect.top - containerRect.top + container.scrollTop(),
                        left: elRect.left - containerRect.left + container.scrollLeft(),
                        width: elRect.width,
                        height: elRect.height
                    };
                } else if (cssPos === 'relative') {
                    return {
                        top: this.$element.offset().top - container.offset().top,
                        left: this.$element.offset().left - container.offset().left,
                        width: this.$element[0].offsetWidth || elRect.width,
                        height: this.$element[0].offsetHeight || elRect.height
                    };
                }
            },

            getTargetPositin: function(elementPos, placement, targetWidth, targetHeight) {
                var pos = elementPos,
                    container = this.options.container,
                    //clientWidth = container.innerWidth(),
                    //clientHeight = container.innerHeight(),
                    elementW = this.$element.outerWidth(),
                    elementH = this.$element.outerHeight(),
                    scrollTop = document.documentElement.scrollTop + container.scrollTop(),
                    scrollLeft = document.documentElement.scrollLeft + container.scrollLeft(),
                    position = {},
                    arrowOffset = null,
                    arrowSize = this.options.arrow ? 20 : 0,
                    padding = 10,
                    fixedW = elementW < arrowSize + padding ? arrowSize : 0,
                    fixedH = elementH < arrowSize + padding ? arrowSize : 0,
                    refix = 0,
                    pageH = document.documentElement.clientHeight + scrollTop,
                    pageW = document.documentElement.clientWidth + scrollLeft;

                var validLeft = pos.left + pos.width / 2 - fixedW > 0;
                var validRight = pos.left + pos.width / 2 + fixedW < pageW;
                var validTop = pos.top + pos.height / 2 - fixedH > 0;
                var validBottom = pos.top + pos.height / 2 + fixedH < pageH;


                switch (placement) {
                    case 'bottom':
                        position = {
                            top: pos.top + pos.height,
                            left: pos.left + pos.width / 2 - targetWidth / 2
                        };
                        break;
                    case 'top':
                        position = {
                            top: pos.top - targetHeight,
                            left: pos.left + pos.width / 2 - targetWidth / 2
                        };
                        break;
                    case 'left':
                        position = {
                            top: pos.top + pos.height / 2 - targetHeight / 2,
                            left: pos.left - targetWidth
                        };
                        break;
                    case 'right':
                        position = {
                            top: pos.top + pos.height / 2 - targetHeight / 2,
                            left: pos.left + pos.width
                        };
                        break;
                    case 'top-right':
                        position = {
                            top: pos.top - targetHeight,
                            left: validLeft ? pos.left - fixedW : padding
                        };
                        arrowOffset = {
                            left: validLeft ? Math.min(elementW, targetWidth) / 2 + fixedW : _offsetOut
                        };
                        break;
                    case 'top-left':
                        refix = validRight ? fixedW : -padding;
                        position = {
                            top: pos.top - targetHeight,
                            left: pos.left - targetWidth + pos.width + refix
                        };
                        arrowOffset = {
                            left: validRight ? targetWidth - Math.min(elementW, targetWidth) / 2 - fixedW : _offsetOut
                        };
                        break;
                    case 'bottom-right':
                        position = {
                            top: pos.top + pos.height,
                            left: validLeft ? pos.left - fixedW : padding
                        };
                        arrowOffset = {
                            left: validLeft ? Math.min(elementW, targetWidth) / 2 + fixedW : _offsetOut
                        };
                        break;
                    case 'bottom-left':
                        refix = validRight ? fixedW : -padding;
                        position = {
                            top: pos.top + pos.height,
                            left: pos.left - targetWidth + pos.width + refix
                        };
                        arrowOffset = {
                            left: validRight ? targetWidth - Math.min(elementW, targetWidth) / 2 - fixedW : _offsetOut
                        };
                        break;
                    case 'right-top':
                        refix = validBottom ? fixedH : -padding;
                        position = {
                            top: pos.top - targetHeight + pos.height + refix,
                            left: pos.left + pos.width
                        };
                        arrowOffset = {
                            top: validBottom ? targetHeight - Math.min(elementH, targetHeight) / 2 - fixedH : _offsetOut
                        };
                        break;
                    case 'right-bottom':
                        position = {
                            top: validTop ? pos.top - fixedH : padding,
                            left: pos.left + pos.width
                        };
                        arrowOffset = {
                            top: validTop ? Math.min(elementH, targetHeight) / 2 + fixedH : _offsetOut
                        };
                        break;
                    case 'left-top':
                        refix = validBottom ? fixedH : -padding;
                        position = {
                            top: pos.top - targetHeight + pos.height + refix,
                            left: pos.left - targetWidth
                        };
                        arrowOffset = {
                            top: validBottom ? targetHeight - Math.min(elementH, targetHeight) / 2 - fixedH : _offsetOut
                        };
                        break;
                    case 'left-bottom':
                        position = {
                            top: validTop ? pos.top - fixedH : padding,
                            left: pos.left - targetWidth
                        };
                        arrowOffset = {
                            top: validTop ? Math.min(elementH, targetHeight) / 2 + fixedH : _offsetOut
                        };
                        break;

                }
                position.top += this.getOffsetTop();
                position.left += this.getOffsetLeft();

                return {
                    position: position,
                    arrowOffset: arrowOffset
                };
            }
        };
        $.fn[pluginName] = function(options, noInit) {
            var results = [];
            var $result = this.each(function() {

                var webuiPopover = $.data(this, 'plugin_' + pluginName);
                if (!webuiPopover) {
                    if (!options) {
                        webuiPopover = new WebuiPopover(this, null);
                    } else if (typeof options === 'string') {
                        if (options !== 'destroy') {
                            if (!noInit) {
                                webuiPopover = new WebuiPopover(this, null);
                                results.push(webuiPopover[options]());
                            }
                        }
                    } else if (typeof options === 'object') {
                        webuiPopover = new WebuiPopover(this, options);
                    }
                    $.data(this, 'plugin_' + pluginName, webuiPopover);
                } else {
                    if (options === 'destroy') {
                        webuiPopover.destroy();
                    } else if (typeof options === 'string') {
                        results.push(webuiPopover[options]());
                    }
                }
            });
            return (results.length) ? results : $result;
        };

        //Global object exposes to window.
        var webuiPopovers = (function() {
            var _hideAll = function() {
                hideAllPop();
            };
            var _create = function(selector, options) {
                options = options || {};
                $(selector).webuiPopover(options);
            };
            var _isCreated = function(selector) {
                var created = true;
                $(selector).each(function(item) {
                    created = created && $(item).data('plugin_' + pluginName) !== undefined;
                });
                return created;
            };
            var _show = function(selector, options) {
                if (options) {
                    $(selector).webuiPopover(options).webuiPopover('show');
                } else {
                    $(selector).webuiPopover('show');
                }
            };
            var _hide = function(selector) {
                $(selector).webuiPopover('hide');
            };
            return {
                show: _show,
                hide: _hide,
                create: _create,
                isCreated: _isCreated,
                hideAll: _hideAll
            };
        })();
        window.WebuiPopovers = webuiPopovers;
    }));
})(window, document);

;
/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.1.6
 *
 * Copyright 2016 Nick Downie
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Chart = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
/* MIT license */
var colorNames = require(6);

module.exports = {
   getRgba: getRgba,
   getHsla: getHsla,
   getRgb: getRgb,
   getHsl: getHsl,
   getHwb: getHwb,
   getAlpha: getAlpha,

   hexString: hexString,
   rgbString: rgbString,
   rgbaString: rgbaString,
   percentString: percentString,
   percentaString: percentaString,
   hslString: hslString,
   hslaString: hslaString,
   hwbString: hwbString,
   keyword: keyword
}

function getRgba(string) {
   if (!string) {
      return;
   }
   var abbr =  /^#([a-fA-F0-9]{3})$/,
       hex =  /^#([a-fA-F0-9]{6})$/,
       rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
       per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
       keyword = /(\w+)/;

   var rgb = [0, 0, 0],
       a = 1,
       match = string.match(abbr);
   if (match) {
      match = match[1];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i] + match[i], 16);
      }
   }
   else if (match = string.match(hex)) {
      match = match[1];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match.slice(i * 2, i * 2 + 2), 16);
      }
   }
   else if (match = string.match(rgba)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i + 1]);
      }
      a = parseFloat(match[4]);
   }
   else if (match = string.match(per)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
      }
      a = parseFloat(match[4]);
   }
   else if (match = string.match(keyword)) {
      if (match[1] == "transparent") {
         return [0, 0, 0, 0];
      }
      rgb = colorNames[match[1]];
      if (!rgb) {
         return;
      }
   }

   for (var i = 0; i < rgb.length; i++) {
      rgb[i] = scale(rgb[i], 0, 255);
   }
   if (!a && a != 0) {
      a = 1;
   }
   else {
      a = scale(a, 0, 1);
   }
   rgb[3] = a;
   return rgb;
}

function getHsla(string) {
   if (!string) {
      return;
   }
   var hsl = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hsl);
   if (match) {
      var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          s = scale(parseFloat(match[2]), 0, 100),
          l = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, s, l, a];
   }
}

function getHwb(string) {
   if (!string) {
      return;
   }
   var hwb = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hwb);
   if (match) {
    var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          w = scale(parseFloat(match[2]), 0, 100),
          b = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, w, b, a];
   }
}

function getRgb(string) {
   var rgba = getRgba(string);
   return rgba && rgba.slice(0, 3);
}

function getHsl(string) {
  var hsla = getHsla(string);
  return hsla && hsla.slice(0, 3);
}

function getAlpha(string) {
   var vals = getRgba(string);
   if (vals) {
      return vals[3];
   }
   else if (vals = getHsla(string)) {
      return vals[3];
   }
   else if (vals = getHwb(string)) {
      return vals[3];
   }
}

// generators
function hexString(rgb) {
   return "#" + hexDouble(rgb[0]) + hexDouble(rgb[1])
              + hexDouble(rgb[2]);
}

function rgbString(rgba, alpha) {
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return rgbaString(rgba, alpha);
   }
   return "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")";
}

function rgbaString(rgba, alpha) {
   if (alpha === undefined) {
      alpha = (rgba[3] !== undefined ? rgba[3] : 1);
   }
   return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2]
           + ", " + alpha + ")";
}

function percentString(rgba, alpha) {
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return percentaString(rgba, alpha);
   }
   var r = Math.round(rgba[0]/255 * 100),
       g = Math.round(rgba[1]/255 * 100),
       b = Math.round(rgba[2]/255 * 100);

   return "rgb(" + r + "%, " + g + "%, " + b + "%)";
}

function percentaString(rgba, alpha) {
   var r = Math.round(rgba[0]/255 * 100),
       g = Math.round(rgba[1]/255 * 100),
       b = Math.round(rgba[2]/255 * 100);
   return "rgba(" + r + "%, " + g + "%, " + b + "%, " + (alpha || rgba[3] || 1) + ")";
}

function hslString(hsla, alpha) {
   if (alpha < 1 || (hsla[3] && hsla[3] < 1)) {
      return hslaString(hsla, alpha);
   }
   return "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)";
}

function hslaString(hsla, alpha) {
   if (alpha === undefined) {
      alpha = (hsla[3] !== undefined ? hsla[3] : 1);
   }
   return "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, "
           + alpha + ")";
}

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
function hwbString(hwb, alpha) {
   if (alpha === undefined) {
      alpha = (hwb[3] !== undefined ? hwb[3] : 1);
   }
   return "hwb(" + hwb[0] + ", " + hwb[1] + "%, " + hwb[2] + "%"
           + (alpha !== undefined && alpha !== 1 ? ", " + alpha : "") + ")";
}

function keyword(rgb) {
  return reverseNames[rgb.slice(0, 3)];
}

// helpers
function scale(num, min, max) {
   return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
  var str = num.toString(16).toUpperCase();
  return (str.length < 2) ? "0" + str : str;
}


//create a list of reverse color names
var reverseNames = {};
for (var name in colorNames) {
   reverseNames[colorNames[name]] = name;
}

},{"6":6}],3:[function(require,module,exports){
/* MIT license */
var convert = require(5);
var string = require(2);

var Color = function (obj) {
	if (obj instanceof Color) {
		return obj;
	}
	if (!(this instanceof Color)) {
		return new Color(obj);
	}

	this.values = {
		rgb: [0, 0, 0],
		hsl: [0, 0, 0],
		hsv: [0, 0, 0],
		hwb: [0, 0, 0],
		cmyk: [0, 0, 0, 0],
		alpha: 1
	};

	// parse Color() argument
	var vals;
	if (typeof obj === 'string') {
		vals = string.getRgba(obj);
		if (vals) {
			this.setValues('rgb', vals);
		} else if (vals = string.getHsla(obj)) {
			this.setValues('hsl', vals);
		} else if (vals = string.getHwb(obj)) {
			this.setValues('hwb', vals);
		} else {
			throw new Error('Unable to parse color from string "' + obj + '"');
		}
	} else if (typeof obj === 'object') {
		vals = obj;
		if (vals.r !== undefined || vals.red !== undefined) {
			this.setValues('rgb', vals);
		} else if (vals.l !== undefined || vals.lightness !== undefined) {
			this.setValues('hsl', vals);
		} else if (vals.v !== undefined || vals.value !== undefined) {
			this.setValues('hsv', vals);
		} else if (vals.w !== undefined || vals.whiteness !== undefined) {
			this.setValues('hwb', vals);
		} else if (vals.c !== undefined || vals.cyan !== undefined) {
			this.setValues('cmyk', vals);
		} else {
			throw new Error('Unable to parse color from object ' + JSON.stringify(obj));
		}
	}
};

Color.prototype = {
	rgb: function () {
		return this.setSpace('rgb', arguments);
	},
	hsl: function () {
		return this.setSpace('hsl', arguments);
	},
	hsv: function () {
		return this.setSpace('hsv', arguments);
	},
	hwb: function () {
		return this.setSpace('hwb', arguments);
	},
	cmyk: function () {
		return this.setSpace('cmyk', arguments);
	},

	rgbArray: function () {
		return this.values.rgb;
	},
	hslArray: function () {
		return this.values.hsl;
	},
	hsvArray: function () {
		return this.values.hsv;
	},
	hwbArray: function () {
		var values = this.values;
		if (values.alpha !== 1) {
			return values.hwb.concat([values.alpha]);
		}
		return values.hwb;
	},
	cmykArray: function () {
		return this.values.cmyk;
	},
	rgbaArray: function () {
		var values = this.values;
		return values.rgb.concat([values.alpha]);
	},
	hslaArray: function () {
		var values = this.values;
		return values.hsl.concat([values.alpha]);
	},
	alpha: function (val) {
		if (val === undefined) {
			return this.values.alpha;
		}
		this.setValues('alpha', val);
		return this;
	},

	red: function (val) {
		return this.setChannel('rgb', 0, val);
	},
	green: function (val) {
		return this.setChannel('rgb', 1, val);
	},
	blue: function (val) {
		return this.setChannel('rgb', 2, val);
	},
	hue: function (val) {
		if (val) {
			val %= 360;
			val = val < 0 ? 360 + val : val;
		}
		return this.setChannel('hsl', 0, val);
	},
	saturation: function (val) {
		return this.setChannel('hsl', 1, val);
	},
	lightness: function (val) {
		return this.setChannel('hsl', 2, val);
	},
	saturationv: function (val) {
		return this.setChannel('hsv', 1, val);
	},
	whiteness: function (val) {
		return this.setChannel('hwb', 1, val);
	},
	blackness: function (val) {
		return this.setChannel('hwb', 2, val);
	},
	value: function (val) {
		return this.setChannel('hsv', 2, val);
	},
	cyan: function (val) {
		return this.setChannel('cmyk', 0, val);
	},
	magenta: function (val) {
		return this.setChannel('cmyk', 1, val);
	},
	yellow: function (val) {
		return this.setChannel('cmyk', 2, val);
	},
	black: function (val) {
		return this.setChannel('cmyk', 3, val);
	},

	hexString: function () {
		return string.hexString(this.values.rgb);
	},
	rgbString: function () {
		return string.rgbString(this.values.rgb, this.values.alpha);
	},
	rgbaString: function () {
		return string.rgbaString(this.values.rgb, this.values.alpha);
	},
	percentString: function () {
		return string.percentString(this.values.rgb, this.values.alpha);
	},
	hslString: function () {
		return string.hslString(this.values.hsl, this.values.alpha);
	},
	hslaString: function () {
		return string.hslaString(this.values.hsl, this.values.alpha);
	},
	hwbString: function () {
		return string.hwbString(this.values.hwb, this.values.alpha);
	},
	keyword: function () {
		return string.keyword(this.values.rgb, this.values.alpha);
	},

	rgbNumber: function () {
		var rgb = this.values.rgb;
		return (rgb[0] << 16) | (rgb[1] << 8) | rgb[2];
	},

	luminosity: function () {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		var rgb = this.values.rgb;
		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
		}
		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast: function (color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();
		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}
		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level: function (color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	dark: function () {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		var rgb = this.values.rgb;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	light: function () {
		return !this.dark();
	},

	negate: function () {
		var rgb = [];
		for (var i = 0; i < 3; i++) {
			rgb[i] = 255 - this.values.rgb[i];
		}
		this.setValues('rgb', rgb);
		return this;
	},

	lighten: function (ratio) {
		var hsl = this.values.hsl;
		hsl[2] += hsl[2] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	darken: function (ratio) {
		var hsl = this.values.hsl;
		hsl[2] -= hsl[2] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	saturate: function (ratio) {
		var hsl = this.values.hsl;
		hsl[1] += hsl[1] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	desaturate: function (ratio) {
		var hsl = this.values.hsl;
		hsl[1] -= hsl[1] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	whiten: function (ratio) {
		var hwb = this.values.hwb;
		hwb[1] += hwb[1] * ratio;
		this.setValues('hwb', hwb);
		return this;
	},

	blacken: function (ratio) {
		var hwb = this.values.hwb;
		hwb[2] += hwb[2] * ratio;
		this.setValues('hwb', hwb);
		return this;
	},

	greyscale: function () {
		var rgb = this.values.rgb;
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		this.setValues('rgb', [val, val, val]);
		return this;
	},

	clearer: function (ratio) {
		var alpha = this.values.alpha;
		this.setValues('alpha', alpha - (alpha * ratio));
		return this;
	},

	opaquer: function (ratio) {
		var alpha = this.values.alpha;
		this.setValues('alpha', alpha + (alpha * ratio));
		return this;
	},

	rotate: function (degrees) {
		var hsl = this.values.hsl;
		var hue = (hsl[0] + degrees) % 360;
		hsl[0] = hue < 0 ? 360 + hue : hue;
		this.setValues('hsl', hsl);
		return this;
	},

	/**
	 * Ported from sass implementation in C
	 * https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
	 */
	mix: function (mixinColor, weight) {
		var color1 = this;
		var color2 = mixinColor;
		var p = weight === undefined ? 0.5 : weight;

		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();

		var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;

		return this
			.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue()
			)
			.alpha(color1.alpha() * p + color2.alpha() * (1 - p));
	},

	toJSON: function () {
		return this.rgb();
	},

	clone: function () {
		// NOTE(SB): using node-clone creates a dependency to Buffer when using browserify,
		// making the final build way to big to embed in Chart.js. So let's do it manually,
		// assuming that values to clone are 1 dimension arrays containing only numbers,
		// except 'alpha' which is a number.
		var result = new Color();
		var source = this.values;
		var target = result.values;
		var value, type;

		for (var prop in source) {
			if (source.hasOwnProperty(prop)) {
				value = source[prop];
				type = ({}).toString.call(value);
				if (type === '[object Array]') {
					target[prop] = value.slice(0);
				} else if (type === '[object Number]') {
					target[prop] = value;
				} else {
					console.error('unexpected color value:', value);
				}
			}
		}

		return result;
	}
};

Color.prototype.spaces = {
	rgb: ['red', 'green', 'blue'],
	hsl: ['hue', 'saturation', 'lightness'],
	hsv: ['hue', 'saturation', 'value'],
	hwb: ['hue', 'whiteness', 'blackness'],
	cmyk: ['cyan', 'magenta', 'yellow', 'black']
};

Color.prototype.maxes = {
	rgb: [255, 255, 255],
	hsl: [360, 100, 100],
	hsv: [360, 100, 100],
	hwb: [360, 100, 100],
	cmyk: [100, 100, 100, 100]
};

Color.prototype.getValues = function (space) {
	var values = this.values;
	var vals = {};

	for (var i = 0; i < space.length; i++) {
		vals[space.charAt(i)] = values[space][i];
	}

	if (values.alpha !== 1) {
		vals.a = values.alpha;
	}

	// {r: 255, g: 255, b: 255, a: 0.4}
	return vals;
};

Color.prototype.setValues = function (space, vals) {
	var values = this.values;
	var spaces = this.spaces;
	var maxes = this.maxes;
	var alpha = 1;
	var i;

	if (space === 'alpha') {
		alpha = vals;
	} else if (vals.length) {
		// [10, 10, 10]
		values[space] = vals.slice(0, space.length);
		alpha = vals[space.length];
	} else if (vals[space.charAt(0)] !== undefined) {
		// {r: 10, g: 10, b: 10}
		for (i = 0; i < space.length; i++) {
			values[space][i] = vals[space.charAt(i)];
		}

		alpha = vals.a;
	} else if (vals[spaces[space][0]] !== undefined) {
		// {red: 10, green: 10, blue: 10}
		var chans = spaces[space];

		for (i = 0; i < space.length; i++) {
			values[space][i] = vals[chans[i]];
		}

		alpha = vals.alpha;
	}

	values.alpha = Math.max(0, Math.min(1, (alpha === undefined ? values.alpha : alpha)));

	if (space === 'alpha') {
		return false;
	}

	var capped;

	// cap values of the space prior converting all values
	for (i = 0; i < space.length; i++) {
		capped = Math.max(0, Math.min(maxes[space][i], values[space][i]));
		values[space][i] = Math.round(capped);
	}

	// convert to all the other color spaces
	for (var sname in spaces) {
		if (sname !== space) {
			values[sname] = convert[space][sname](values[space]);
		}
	}

	return true;
};

Color.prototype.setSpace = function (space, args) {
	var vals = args[0];

	if (vals === undefined) {
		// color.rgb()
		return this.getValues(space);
	}

	// color.rgb(10, 10, 10)
	if (typeof vals === 'number') {
		vals = Array.prototype.slice.call(args);
	}

	this.setValues(space, vals);
	return this;
};

Color.prototype.setChannel = function (space, index, val) {
	var svalues = this.values[space];
	if (val === undefined) {
		// color.red()
		return svalues[index];
	} else if (val === svalues[index]) {
		// color.red(color.red())
		return this;
	}

	// color.red(100)
	svalues[index] = val;
	this.setValues(space, svalues);

	return this;
};

if (typeof window !== 'undefined') {
	window.Color = Color;
}

module.exports = Color;

},{"2":2,"5":5}],4:[function(require,module,exports){
/* MIT license */

module.exports = {
  rgb2hsl: rgb2hsl,
  rgb2hsv: rgb2hsv,
  rgb2hwb: rgb2hwb,
  rgb2cmyk: rgb2cmyk,
  rgb2keyword: rgb2keyword,
  rgb2xyz: rgb2xyz,
  rgb2lab: rgb2lab,
  rgb2lch: rgb2lch,

  hsl2rgb: hsl2rgb,
  hsl2hsv: hsl2hsv,
  hsl2hwb: hsl2hwb,
  hsl2cmyk: hsl2cmyk,
  hsl2keyword: hsl2keyword,

  hsv2rgb: hsv2rgb,
  hsv2hsl: hsv2hsl,
  hsv2hwb: hsv2hwb,
  hsv2cmyk: hsv2cmyk,
  hsv2keyword: hsv2keyword,

  hwb2rgb: hwb2rgb,
  hwb2hsl: hwb2hsl,
  hwb2hsv: hwb2hsv,
  hwb2cmyk: hwb2cmyk,
  hwb2keyword: hwb2keyword,

  cmyk2rgb: cmyk2rgb,
  cmyk2hsl: cmyk2hsl,
  cmyk2hsv: cmyk2hsv,
  cmyk2hwb: cmyk2hwb,
  cmyk2keyword: cmyk2keyword,

  keyword2rgb: keyword2rgb,
  keyword2hsl: keyword2hsl,
  keyword2hsv: keyword2hsv,
  keyword2hwb: keyword2hwb,
  keyword2cmyk: keyword2cmyk,
  keyword2lab: keyword2lab,
  keyword2xyz: keyword2xyz,

  xyz2rgb: xyz2rgb,
  xyz2lab: xyz2lab,
  xyz2lch: xyz2lch,

  lab2xyz: lab2xyz,
  lab2rgb: lab2rgb,
  lab2lch: lab2lch,

  lch2lab: lch2lab,
  lch2xyz: lch2xyz,
  lch2rgb: lch2rgb
}


function rgb2hsl(rgb) {
  var r = rgb[0]/255,
      g = rgb[1]/255,
      b = rgb[2]/255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      delta = max - min,
      h, s, l;

  if (max == min)
    h = 0;
  else if (r == max)
    h = (g - b) / delta;
  else if (g == max)
    h = 2 + (b - r) / delta;
  else if (b == max)
    h = 4 + (r - g)/ delta;

  h = Math.min(h * 60, 360);

  if (h < 0)
    h += 360;

  l = (min + max) / 2;

  if (max == min)
    s = 0;
  else if (l <= 0.5)
    s = delta / (max + min);
  else
    s = delta / (2 - max - min);

  return [h, s * 100, l * 100];
}

function rgb2hsv(rgb) {
  var r = rgb[0],
      g = rgb[1],
      b = rgb[2],
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      delta = max - min,
      h, s, v;

  if (max == 0)
    s = 0;
  else
    s = (delta/max * 1000)/10;

  if (max == min)
    h = 0;
  else if (r == max)
    h = (g - b) / delta;
  else if (g == max)
    h = 2 + (b - r) / delta;
  else if (b == max)
    h = 4 + (r - g) / delta;

  h = Math.min(h * 60, 360);

  if (h < 0)
    h += 360;

  v = ((max / 255) * 1000) / 10;

  return [h, s, v];
}

function rgb2hwb(rgb) {
  var r = rgb[0],
      g = rgb[1],
      b = rgb[2],
      h = rgb2hsl(rgb)[0],
      w = 1/255 * Math.min(r, Math.min(g, b)),
      b = 1 - 1/255 * Math.max(r, Math.max(g, b));

  return [h, w * 100, b * 100];
}

function rgb2cmyk(rgb) {
  var r = rgb[0] / 255,
      g = rgb[1] / 255,
      b = rgb[2] / 255,
      c, m, y, k;

  k = Math.min(1 - r, 1 - g, 1 - b);
  c = (1 - r - k) / (1 - k) || 0;
  m = (1 - g - k) / (1 - k) || 0;
  y = (1 - b - k) / (1 - k) || 0;
  return [c * 100, m * 100, y * 100, k * 100];
}

function rgb2keyword(rgb) {
  return reverseKeywords[JSON.stringify(rgb)];
}

function rgb2xyz(rgb) {
  var r = rgb[0] / 255,
      g = rgb[1] / 255,
      b = rgb[2] / 255;

  // assume sRGB
  r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
  g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
  b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

  var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
  var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
  var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

  return [x * 100, y *100, z * 100];
}

function rgb2lab(rgb) {
  var xyz = rgb2xyz(rgb),
        x = xyz[0],
        y = xyz[1],
        z = xyz[2],
        l, a, b;

  x /= 95.047;
  y /= 100;
  z /= 108.883;

  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);

  l = (116 * y) - 16;
  a = 500 * (x - y);
  b = 200 * (y - z);

  return [l, a, b];
}

function rgb2lch(args) {
  return lab2lch(rgb2lab(args));
}

function hsl2rgb(hsl) {
  var h = hsl[0] / 360,
      s = hsl[1] / 100,
      l = hsl[2] / 100,
      t1, t2, t3, rgb, val;

  if (s == 0) {
    val = l * 255;
    return [val, val, val];
  }

  if (l < 0.5)
    t2 = l * (1 + s);
  else
    t2 = l + s - l * s;
  t1 = 2 * l - t2;

  rgb = [0, 0, 0];
  for (var i = 0; i < 3; i++) {
    t3 = h + 1 / 3 * - (i - 1);
    t3 < 0 && t3++;
    t3 > 1 && t3--;

    if (6 * t3 < 1)
      val = t1 + (t2 - t1) * 6 * t3;
    else if (2 * t3 < 1)
      val = t2;
    else if (3 * t3 < 2)
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    else
      val = t1;

    rgb[i] = val * 255;
  }

  return rgb;
}

function hsl2hsv(hsl) {
  var h = hsl[0],
      s = hsl[1] / 100,
      l = hsl[2] / 100,
      sv, v;

  if(l === 0) {
      // no need to do calc on black
      // also avoids divide by 0 error
      return [0, 0, 0];
  }

  l *= 2;
  s *= (l <= 1) ? l : 2 - l;
  v = (l + s) / 2;
  sv = (2 * s) / (l + s);
  return [h, sv * 100, v * 100];
}

function hsl2hwb(args) {
  return rgb2hwb(hsl2rgb(args));
}

function hsl2cmyk(args) {
  return rgb2cmyk(hsl2rgb(args));
}

function hsl2keyword(args) {
  return rgb2keyword(hsl2rgb(args));
}


function hsv2rgb(hsv) {
  var h = hsv[0] / 60,
      s = hsv[1] / 100,
      v = hsv[2] / 100,
      hi = Math.floor(h) % 6;

  var f = h - Math.floor(h),
      p = 255 * v * (1 - s),
      q = 255 * v * (1 - (s * f)),
      t = 255 * v * (1 - (s * (1 - f))),
      v = 255 * v;

  switch(hi) {
    case 0:
      return [v, t, p];
    case 1:
      return [q, v, p];
    case 2:
      return [p, v, t];
    case 3:
      return [p, q, v];
    case 4:
      return [t, p, v];
    case 5:
      return [v, p, q];
  }
}

function hsv2hsl(hsv) {
  var h = hsv[0],
      s = hsv[1] / 100,
      v = hsv[2] / 100,
      sl, l;

  l = (2 - s) * v;
  sl = s * v;
  sl /= (l <= 1) ? l : 2 - l;
  sl = sl || 0;
  l /= 2;
  return [h, sl * 100, l * 100];
}

function hsv2hwb(args) {
  return rgb2hwb(hsv2rgb(args))
}

function hsv2cmyk(args) {
  return rgb2cmyk(hsv2rgb(args));
}

function hsv2keyword(args) {
  return rgb2keyword(hsv2rgb(args));
}

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
function hwb2rgb(hwb) {
  var h = hwb[0] / 360,
      wh = hwb[1] / 100,
      bl = hwb[2] / 100,
      ratio = wh + bl,
      i, v, f, n;

  // wh + bl cant be > 1
  if (ratio > 1) {
    wh /= ratio;
    bl /= ratio;
  }

  i = Math.floor(6 * h);
  v = 1 - bl;
  f = 6 * h - i;
  if ((i & 0x01) != 0) {
    f = 1 - f;
  }
  n = wh + f * (v - wh);  // linear interpolation

  switch (i) {
    default:
    case 6:
    case 0: r = v; g = n; b = wh; break;
    case 1: r = n; g = v; b = wh; break;
    case 2: r = wh; g = v; b = n; break;
    case 3: r = wh; g = n; b = v; break;
    case 4: r = n; g = wh; b = v; break;
    case 5: r = v; g = wh; b = n; break;
  }

  return [r * 255, g * 255, b * 255];
}

function hwb2hsl(args) {
  return rgb2hsl(hwb2rgb(args));
}

function hwb2hsv(args) {
  return rgb2hsv(hwb2rgb(args));
}

function hwb2cmyk(args) {
  return rgb2cmyk(hwb2rgb(args));
}

function hwb2keyword(args) {
  return rgb2keyword(hwb2rgb(args));
}

function cmyk2rgb(cmyk) {
  var c = cmyk[0] / 100,
      m = cmyk[1] / 100,
      y = cmyk[2] / 100,
      k = cmyk[3] / 100,
      r, g, b;

  r = 1 - Math.min(1, c * (1 - k) + k);
  g = 1 - Math.min(1, m * (1 - k) + k);
  b = 1 - Math.min(1, y * (1 - k) + k);
  return [r * 255, g * 255, b * 255];
}

function cmyk2hsl(args) {
  return rgb2hsl(cmyk2rgb(args));
}

function cmyk2hsv(args) {
  return rgb2hsv(cmyk2rgb(args));
}

function cmyk2hwb(args) {
  return rgb2hwb(cmyk2rgb(args));
}

function cmyk2keyword(args) {
  return rgb2keyword(cmyk2rgb(args));
}


function xyz2rgb(xyz) {
  var x = xyz[0] / 100,
      y = xyz[1] / 100,
      z = xyz[2] / 100,
      r, g, b;

  r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
  g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
  b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

  // assume sRGB
  r = r > 0.0031308 ? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
    : r = (r * 12.92);

  g = g > 0.0031308 ? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
    : g = (g * 12.92);

  b = b > 0.0031308 ? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
    : b = (b * 12.92);

  r = Math.min(Math.max(0, r), 1);
  g = Math.min(Math.max(0, g), 1);
  b = Math.min(Math.max(0, b), 1);

  return [r * 255, g * 255, b * 255];
}

function xyz2lab(xyz) {
  var x = xyz[0],
      y = xyz[1],
      z = xyz[2],
      l, a, b;

  x /= 95.047;
  y /= 100;
  z /= 108.883;

  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);

  l = (116 * y) - 16;
  a = 500 * (x - y);
  b = 200 * (y - z);

  return [l, a, b];
}

function xyz2lch(args) {
  return lab2lch(xyz2lab(args));
}

function lab2xyz(lab) {
  var l = lab[0],
      a = lab[1],
      b = lab[2],
      x, y, z, y2;

  if (l <= 8) {
    y = (l * 100) / 903.3;
    y2 = (7.787 * (y / 100)) + (16 / 116);
  } else {
    y = 100 * Math.pow((l + 16) / 116, 3);
    y2 = Math.pow(y / 100, 1/3);
  }

  x = x / 95.047 <= 0.008856 ? x = (95.047 * ((a / 500) + y2 - (16 / 116))) / 7.787 : 95.047 * Math.pow((a / 500) + y2, 3);

  z = z / 108.883 <= 0.008859 ? z = (108.883 * (y2 - (b / 200) - (16 / 116))) / 7.787 : 108.883 * Math.pow(y2 - (b / 200), 3);

  return [x, y, z];
}

function lab2lch(lab) {
  var l = lab[0],
      a = lab[1],
      b = lab[2],
      hr, h, c;

  hr = Math.atan2(b, a);
  h = hr * 360 / 2 / Math.PI;
  if (h < 0) {
    h += 360;
  }
  c = Math.sqrt(a * a + b * b);
  return [l, c, h];
}

function lab2rgb(args) {
  return xyz2rgb(lab2xyz(args));
}

function lch2lab(lch) {
  var l = lch[0],
      c = lch[1],
      h = lch[2],
      a, b, hr;

  hr = h / 360 * 2 * Math.PI;
  a = c * Math.cos(hr);
  b = c * Math.sin(hr);
  return [l, a, b];
}

function lch2xyz(args) {
  return lab2xyz(lch2lab(args));
}

function lch2rgb(args) {
  return lab2rgb(lch2lab(args));
}

function keyword2rgb(keyword) {
  return cssKeywords[keyword];
}

function keyword2hsl(args) {
  return rgb2hsl(keyword2rgb(args));
}

function keyword2hsv(args) {
  return rgb2hsv(keyword2rgb(args));
}

function keyword2hwb(args) {
  return rgb2hwb(keyword2rgb(args));
}

function keyword2cmyk(args) {
  return rgb2cmyk(keyword2rgb(args));
}

function keyword2lab(args) {
  return rgb2lab(keyword2rgb(args));
}

function keyword2xyz(args) {
  return rgb2xyz(keyword2rgb(args));
}

var cssKeywords = {
  aliceblue:  [240,248,255],
  antiquewhite: [250,235,215],
  aqua: [0,255,255],
  aquamarine: [127,255,212],
  azure:  [240,255,255],
  beige:  [245,245,220],
  bisque: [255,228,196],
  black:  [0,0,0],
  blanchedalmond: [255,235,205],
  blue: [0,0,255],
  blueviolet: [138,43,226],
  brown:  [165,42,42],
  burlywood:  [222,184,135],
  cadetblue:  [95,158,160],
  chartreuse: [127,255,0],
  chocolate:  [210,105,30],
  coral:  [255,127,80],
  cornflowerblue: [100,149,237],
  cornsilk: [255,248,220],
  crimson:  [220,20,60],
  cyan: [0,255,255],
  darkblue: [0,0,139],
  darkcyan: [0,139,139],
  darkgoldenrod:  [184,134,11],
  darkgray: [169,169,169],
  darkgreen:  [0,100,0],
  darkgrey: [169,169,169],
  darkkhaki:  [189,183,107],
  darkmagenta:  [139,0,139],
  darkolivegreen: [85,107,47],
  darkorange: [255,140,0],
  darkorchid: [153,50,204],
  darkred:  [139,0,0],
  darksalmon: [233,150,122],
  darkseagreen: [143,188,143],
  darkslateblue:  [72,61,139],
  darkslategray:  [47,79,79],
  darkslategrey:  [47,79,79],
  darkturquoise:  [0,206,209],
  darkviolet: [148,0,211],
  deeppink: [255,20,147],
  deepskyblue:  [0,191,255],
  dimgray:  [105,105,105],
  dimgrey:  [105,105,105],
  dodgerblue: [30,144,255],
  firebrick:  [178,34,34],
  floralwhite:  [255,250,240],
  forestgreen:  [34,139,34],
  fuchsia:  [255,0,255],
  gainsboro:  [220,220,220],
  ghostwhite: [248,248,255],
  gold: [255,215,0],
  goldenrod:  [218,165,32],
  gray: [128,128,128],
  green:  [0,128,0],
  greenyellow:  [173,255,47],
  grey: [128,128,128],
  honeydew: [240,255,240],
  hotpink:  [255,105,180],
  indianred:  [205,92,92],
  indigo: [75,0,130],
  ivory:  [255,255,240],
  khaki:  [240,230,140],
  lavender: [230,230,250],
  lavenderblush:  [255,240,245],
  lawngreen:  [124,252,0],
  lemonchiffon: [255,250,205],
  lightblue:  [173,216,230],
  lightcoral: [240,128,128],
  lightcyan:  [224,255,255],
  lightgoldenrodyellow: [250,250,210],
  lightgray:  [211,211,211],
  lightgreen: [144,238,144],
  lightgrey:  [211,211,211],
  lightpink:  [255,182,193],
  lightsalmon:  [255,160,122],
  lightseagreen:  [32,178,170],
  lightskyblue: [135,206,250],
  lightslategray: [119,136,153],
  lightslategrey: [119,136,153],
  lightsteelblue: [176,196,222],
  lightyellow:  [255,255,224],
  lime: [0,255,0],
  limegreen:  [50,205,50],
  linen:  [250,240,230],
  magenta:  [255,0,255],
  maroon: [128,0,0],
  mediumaquamarine: [102,205,170],
  mediumblue: [0,0,205],
  mediumorchid: [186,85,211],
  mediumpurple: [147,112,219],
  mediumseagreen: [60,179,113],
  mediumslateblue:  [123,104,238],
  mediumspringgreen:  [0,250,154],
  mediumturquoise:  [72,209,204],
  mediumvioletred:  [199,21,133],
  midnightblue: [25,25,112],
  mintcream:  [245,255,250],
  mistyrose:  [255,228,225],
  moccasin: [255,228,181],
  navajowhite:  [255,222,173],
  navy: [0,0,128],
  oldlace:  [253,245,230],
  olive:  [128,128,0],
  olivedrab:  [107,142,35],
  orange: [255,165,0],
  orangered:  [255,69,0],
  orchid: [218,112,214],
  palegoldenrod:  [238,232,170],
  palegreen:  [152,251,152],
  paleturquoise:  [175,238,238],
  palevioletred:  [219,112,147],
  papayawhip: [255,239,213],
  peachpuff:  [255,218,185],
  peru: [205,133,63],
  pink: [255,192,203],
  plum: [221,160,221],
  powderblue: [176,224,230],
  purple: [128,0,128],
  rebeccapurple: [102, 51, 153],
  red:  [255,0,0],
  rosybrown:  [188,143,143],
  royalblue:  [65,105,225],
  saddlebrown:  [139,69,19],
  salmon: [250,128,114],
  sandybrown: [244,164,96],
  seagreen: [46,139,87],
  seashell: [255,245,238],
  sienna: [160,82,45],
  silver: [192,192,192],
  skyblue:  [135,206,235],
  slateblue:  [106,90,205],
  slategray:  [112,128,144],
  slategrey:  [112,128,144],
  snow: [255,250,250],
  springgreen:  [0,255,127],
  steelblue:  [70,130,180],
  tan:  [210,180,140],
  teal: [0,128,128],
  thistle:  [216,191,216],
  tomato: [255,99,71],
  turquoise:  [64,224,208],
  violet: [238,130,238],
  wheat:  [245,222,179],
  white:  [255,255,255],
  whitesmoke: [245,245,245],
  yellow: [255,255,0],
  yellowgreen:  [154,205,50]
};

var reverseKeywords = {};
for (var key in cssKeywords) {
  reverseKeywords[JSON.stringify(cssKeywords[key])] = key;
}

},{}],5:[function(require,module,exports){
var conversions = require(4);

var convert = function() {
   return new Converter();
}

for (var func in conversions) {
  // export Raw versions
  convert[func + "Raw"] =  (function(func) {
    // accept array or plain args
    return function(arg) {
      if (typeof arg == "number")
        arg = Array.prototype.slice.call(arguments);
      return conversions[func](arg);
    }
  })(func);

  var pair = /(\w+)2(\w+)/.exec(func),
      from = pair[1],
      to = pair[2];

  // export rgb2hsl and ["rgb"]["hsl"]
  convert[from] = convert[from] || {};

  convert[from][to] = convert[func] = (function(func) { 
    return function(arg) {
      if (typeof arg == "number")
        arg = Array.prototype.slice.call(arguments);
      
      var val = conversions[func](arg);
      if (typeof val == "string" || val === undefined)
        return val; // keyword

      for (var i = 0; i < val.length; i++)
        val[i] = Math.round(val[i]);
      return val;
    }
  })(func);
}


/* Converter does lazy conversion and caching */
var Converter = function() {
   this.convs = {};
};

/* Either get the values for a space or
  set the values for a space, depending on args */
Converter.prototype.routeSpace = function(space, args) {
   var values = args[0];
   if (values === undefined) {
      // color.rgb()
      return this.getValues(space);
   }
   // color.rgb(10, 10, 10)
   if (typeof values == "number") {
      values = Array.prototype.slice.call(args);        
   }

   return this.setValues(space, values);
};
  
/* Set the values for a space, invalidating cache */
Converter.prototype.setValues = function(space, values) {
   this.space = space;
   this.convs = {};
   this.convs[space] = values;
   return this;
};

/* Get the values for a space. If there's already
  a conversion for the space, fetch it, otherwise
  compute it */
Converter.prototype.getValues = function(space) {
   var vals = this.convs[space];
   if (!vals) {
      var fspace = this.space,
          from = this.convs[fspace];
      vals = convert[fspace][space](from);

      this.convs[space] = vals;
   }
  return vals;
};

["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(space) {
   Converter.prototype[space] = function(vals) {
      return this.routeSpace(space, arguments);
   }
});

module.exports = convert;
},{"4":4}],6:[function(require,module,exports){
module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};
},{}],7:[function(require,module,exports){
/**
 * @namespace Chart
 */
var Chart = require(26)();

require(25)(Chart);
require(24)(Chart);
require(21)(Chart);
require(22)(Chart);
require(23)(Chart);
require(27)(Chart);
require(31)(Chart);
require(29)(Chart);
require(30)(Chart);
require(32)(Chart);
require(28)(Chart);
require(33)(Chart);

require(34)(Chart);
require(35)(Chart);
require(36)(Chart);
require(37)(Chart);

require(40)(Chart);
require(38)(Chart);
require(39)(Chart);
require(41)(Chart);
require(42)(Chart);
require(43)(Chart);

// Controllers must be loaded after elements
// See Chart.core.datasetController.dataElementType
require(15)(Chart);
require(16)(Chart);
require(17)(Chart);
require(18)(Chart);
require(19)(Chart);
require(20)(Chart);

require(8)(Chart);
require(9)(Chart);
require(10)(Chart);
require(11)(Chart);
require(12)(Chart);
require(13)(Chart);
require(14)(Chart);

window.Chart = module.exports = Chart;

},{"10":10,"11":11,"12":12,"13":13,"14":14,"15":15,"16":16,"17":17,"18":18,"19":19,"20":20,"21":21,"22":22,"23":23,"24":24,"25":25,"26":26,"27":27,"28":28,"29":29,"30":30,"31":31,"32":32,"33":33,"34":34,"35":35,"36":36,"37":37,"38":38,"39":39,"40":40,"41":41,"42":42,"43":43,"8":8,"9":9}],8:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	Chart.Bar = function(context, config) {
		config.type = 'bar';

		return new Chart(context, config);
	};

};
},{}],9:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	Chart.Bubble = function(context, config) {
		config.type = 'bubble';
		return new Chart(context, config);
	};

};
},{}],10:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	Chart.Doughnut = function(context, config) {
		config.type = 'doughnut';

		return new Chart(context, config);
	};

};
},{}],11:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	Chart.Line = function(context, config) {
		config.type = 'line';

		return new Chart(context, config);
	};

};
},{}],12:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	Chart.PolarArea = function(context, config) {
		config.type = 'polarArea';

		return new Chart(context, config);
	};

};
},{}],13:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {
	
	Chart.Radar = function(context, config) {
		config.options = Chart.helpers.configMerge({ aspectRatio: 1 }, config.options);
		config.type = 'radar';

		return new Chart(context, config);
	};

};

},{}],14:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var defaultConfig = {
		hover: {
			mode: 'single'
		},

		scales: {
			xAxes: [{
				type: "linear", // scatter should not use a category axis
				position: "bottom",
				id: "x-axis-1" // need an ID so datasets can reference the scale
			}],
			yAxes: [{
				type: "linear",
				position: "left",
				id: "y-axis-1"
			}]
		},

		tooltips: {
			callbacks: {
				title: function(tooltipItems, data) {
					// Title doesn't make sense for scatter since we format the data as a point
					return '';
				},
				label: function(tooltipItem, data) {
					return '(' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';
				}
			}
		}
	};

	// Register the default config for this type
	Chart.defaults.scatter = defaultConfig;

	// Scatter charts use line controllers
	Chart.controllers.scatter = Chart.controllers.line;

	Chart.Scatter = function(context, config) {
		config.type = 'scatter';
		return new Chart(context, config);
	};

};
},{}],15:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.bar = {
		hover: {
			mode: "label"
		},

		scales: {
			xAxes: [{
				type: "category",

				// Specific to Bar Controller
				categoryPercentage: 0.8,
				barPercentage: 0.9,

				// grid line settings
				gridLines: {
					offsetGridLines: true
				}
			}],
			yAxes: [{
				type: "linear"
			}]
		}
	};

	Chart.controllers.bar = Chart.DatasetController.extend({

		dataElementType: Chart.elements.Rectangle,

		initialize: function(chart, datasetIndex) {
			Chart.DatasetController.prototype.initialize.call(this, chart, datasetIndex);

			// Use this to indicate that this is a bar dataset.
			this.getMeta().bar = true;
		},

		// Get the number of datasets that display bars. We use this to correctly calculate the bar width
		getBarCount: function getBarCount() {
			var me = this;
			var barCount = 0;
			helpers.each(me.chart.data.datasets, function(dataset, datasetIndex) {
				var meta = me.chart.getDatasetMeta(datasetIndex);
				if (meta.bar && me.chart.isDatasetVisible(datasetIndex)) {
					++barCount;
				}
			}, me);
			return barCount;
		},

		update: function update(reset) {
			var me = this;
			helpers.each(me.getMeta().data, function(rectangle, index) {
				me.updateElement(rectangle, index, reset);
			}, me);
		},

		updateElement: function updateElement(rectangle, index, reset) {
			var me = this;
			var meta = me.getMeta();
			var xScale = me.getScaleForId(meta.xAxisID);
			var yScale = me.getScaleForId(meta.yAxisID);
			var scaleBase = yScale.getBasePixel();
			var rectangleElementOptions = me.chart.options.elements.rectangle;
			var custom = rectangle.custom || {};
			var dataset = me.getDataset();

			helpers.extend(rectangle, {
				// Utility
				_xScale: xScale,
				_yScale: yScale,
				_datasetIndex: me.index,
				_index: index,

				// Desired view properties
				_model: {
					x: me.calculateBarX(index, me.index),
					y: reset ? scaleBase : me.calculateBarY(index, me.index),

					// Tooltip
					label: me.chart.data.labels[index],
					datasetLabel: dataset.label,

					// Appearance
					base: reset ? scaleBase : me.calculateBarBase(me.index, index),
					width: me.calculateBarWidth(index),
					backgroundColor: custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.backgroundColor, index, rectangleElementOptions.backgroundColor),
					borderSkipped: custom.borderSkipped ? custom.borderSkipped : rectangleElementOptions.borderSkipped,
					borderColor: custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.borderColor, index, rectangleElementOptions.borderColor),
					borderWidth: custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.borderWidth, index, rectangleElementOptions.borderWidth)
				}
			});
			rectangle.pivot();
		},

		calculateBarBase: function(datasetIndex, index) {
			var me = this;
			var meta = me.getMeta();
			var yScale = me.getScaleForId(meta.yAxisID);
			var base = 0;

			if (yScale.options.stacked) {
				var chart = me.chart;
				var datasets = chart.data.datasets;
				var value = datasets[datasetIndex].data[index];

				if (value < 0) {
					for (var i = 0; i < datasetIndex; i++) {
						var negDS = datasets[i];
						var negDSMeta = chart.getDatasetMeta(i);
						if (negDSMeta.bar && negDSMeta.yAxisID === yScale.id && chart.isDatasetVisible(i)) {
							base += negDS.data[index] < 0 ? negDS.data[index] : 0;
						}
					}
				} else {
					for (var j = 0; j < datasetIndex; j++) {
						var posDS = datasets[j];
						var posDSMeta = chart.getDatasetMeta(j);
						if (posDSMeta.bar && posDSMeta.yAxisID === yScale.id && chart.isDatasetVisible(j)) {
							base += posDS.data[index] > 0 ? posDS.data[index] : 0;
						}
					}
				}

				return yScale.getPixelForValue(base);
			}

			return yScale.getBasePixel();
		},

		getRuler: function(index) {
			var me = this;
			var meta = me.getMeta();
			var xScale = me.getScaleForId(meta.xAxisID);
			var datasetCount = me.getBarCount();

			var tickWidth;

			if (xScale.options.type === 'category') {
				tickWidth = xScale.getPixelForTick(index + 1) - xScale.getPixelForTick(index);
			} else {
				// Average width
				tickWidth = xScale.width / xScale.ticks.length;
			}
			var categoryWidth = tickWidth * xScale.options.categoryPercentage;
			var categorySpacing = (tickWidth - (tickWidth * xScale.options.categoryPercentage)) / 2;
			var fullBarWidth = categoryWidth / datasetCount;

			if (xScale.ticks.length !== me.chart.data.labels.length) {
			    var perc = xScale.ticks.length / me.chart.data.labels.length;
			    fullBarWidth = fullBarWidth * perc;
			}

			var barWidth = fullBarWidth * xScale.options.barPercentage;
			var barSpacing = fullBarWidth - (fullBarWidth * xScale.options.barPercentage);

			return {
				datasetCount: datasetCount,
				tickWidth: tickWidth,
				categoryWidth: categoryWidth,
				categorySpacing: categorySpacing,
				fullBarWidth: fullBarWidth,
				barWidth: barWidth,
				barSpacing: barSpacing
			};
		},

		calculateBarWidth: function(index) {
			var xScale = this.getScaleForId(this.getMeta().xAxisID);
			var ruler = this.getRuler(index);
			return xScale.options.stacked ? ruler.categoryWidth : ruler.barWidth;
		},

		// Get bar index from the given dataset index accounting for the fact that not all bars are visible
		getBarIndex: function(datasetIndex) {
			var barIndex = 0;
			var meta, j;

			for (j = 0; j < datasetIndex; ++j) {
				meta = this.chart.getDatasetMeta(j);
				if (meta.bar && this.chart.isDatasetVisible(j)) {
					++barIndex;
				}
			}

			return barIndex;
		},

		calculateBarX: function(index, datasetIndex) {
			var me = this;
			var meta = me.getMeta();
			var xScale = me.getScaleForId(meta.xAxisID);
			var barIndex = me.getBarIndex(datasetIndex);

			var ruler = me.getRuler(index);
			var leftTick = xScale.getPixelForValue(null, index, datasetIndex, me.chart.isCombo);
			leftTick -= me.chart.isCombo ? (ruler.tickWidth / 2) : 0;

			if (xScale.options.stacked) {
				return leftTick + (ruler.categoryWidth / 2) + ruler.categorySpacing;
			}

			return leftTick +
				(ruler.barWidth / 2) +
				ruler.categorySpacing +
				(ruler.barWidth * barIndex) +
				(ruler.barSpacing / 2) +
				(ruler.barSpacing * barIndex);
		},

		calculateBarY: function(index, datasetIndex) {
			var me = this;
			var meta = me.getMeta();
			var yScale = me.getScaleForId(meta.yAxisID);
			var value = me.getDataset().data[index];

			if (yScale.options.stacked) {

				var sumPos = 0,
					sumNeg = 0;

				for (var i = 0; i < datasetIndex; i++) {
					var ds = me.chart.data.datasets[i];
					var dsMeta = me.chart.getDatasetMeta(i);
					if (dsMeta.bar && dsMeta.yAxisID === yScale.id && me.chart.isDatasetVisible(i)) {
						if (ds.data[index] < 0) {
							sumNeg += ds.data[index] || 0;
						} else {
							sumPos += ds.data[index] || 0;
						}
					}
				}

				if (value < 0) {
					return yScale.getPixelForValue(sumNeg + value);
				} else {
					return yScale.getPixelForValue(sumPos + value);
				}
			}

			return yScale.getPixelForValue(value);
		},

		draw: function(ease) {
			var me = this;
			var easingDecimal = ease || 1;
			helpers.each(me.getMeta().data, function(rectangle, index) {
				var d = me.getDataset().data[index];
				if (d !== null && d !== undefined && !isNaN(d)) {
					rectangle.transition(easingDecimal).draw();
				}
			}, me);
		},

		setHoverStyle: function(rectangle) {
			var dataset = this.chart.data.datasets[rectangle._datasetIndex];
			var index = rectangle._index;

			var custom = rectangle.custom || {};
			var model = rectangle._model;
			model.backgroundColor = custom.hoverBackgroundColor ? custom.hoverBackgroundColor : helpers.getValueAtIndexOrDefault(dataset.hoverBackgroundColor, index, helpers.getHoverColor(model.backgroundColor));
			model.borderColor = custom.hoverBorderColor ? custom.hoverBorderColor : helpers.getValueAtIndexOrDefault(dataset.hoverBorderColor, index, helpers.getHoverColor(model.borderColor));
			model.borderWidth = custom.hoverBorderWidth ? custom.hoverBorderWidth : helpers.getValueAtIndexOrDefault(dataset.hoverBorderWidth, index, model.borderWidth);
		},

		removeHoverStyle: function(rectangle) {
			var dataset = this.chart.data.datasets[rectangle._datasetIndex];
			var index = rectangle._index;
			var custom = rectangle.custom || {};
			var model = rectangle._model;
			var rectangleElementOptions = this.chart.options.elements.rectangle;

			model.backgroundColor = custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.backgroundColor, index, rectangleElementOptions.backgroundColor);
			model.borderColor = custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.borderColor, index, rectangleElementOptions.borderColor);
			model.borderWidth = custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.borderWidth, index, rectangleElementOptions.borderWidth);
		}

	});


	// including horizontalBar in the bar file, instead of a file of its own
	// it extends bar (like pie extends doughnut)
	Chart.defaults.horizontalBar = {
		hover: {
			mode: "label"
		},

		scales: {
			xAxes: [{
				type: "linear",
				position: "bottom"
			}],
			yAxes: [{
				position: "left",
				type: "category",

				// Specific to Horizontal Bar Controller
				categoryPercentage: 0.8,
				barPercentage: 0.9,

				// grid line settings
				gridLines: {
					offsetGridLines: true
				}
			}]
		},
		elements: {
			rectangle: {
				borderSkipped: 'left'
			}
		},
		tooltips: {
			callbacks: {
				title: function(tooltipItems, data) {
					// Pick first xLabel for now
					var title = '';

					if (tooltipItems.length > 0) {
						if (tooltipItems[0].yLabel) {
							title = tooltipItems[0].yLabel;
						} else if (data.labels.length > 0 && tooltipItems[0].index < data.labels.length) {
							title = data.labels[tooltipItems[0].index];
						}
					}

					return title;
				},
				label: function(tooltipItem, data) {
					var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
				return datasetLabel + ': ' + tooltipItem.xLabel;
				}
			}
		}
	};

	Chart.controllers.horizontalBar = Chart.controllers.bar.extend({
		updateElement: function updateElement(rectangle, index, reset, numBars) {
			var me = this;
			var meta = me.getMeta();
			var xScale = me.getScaleForId(meta.xAxisID);
			var yScale = me.getScaleForId(meta.yAxisID);
			var scaleBase = xScale.getBasePixel();
			var custom = rectangle.custom || {};
			var dataset = me.getDataset();
			var rectangleElementOptions = me.chart.options.elements.rectangle;

			helpers.extend(rectangle, {
				// Utility
				_xScale: xScale,
				_yScale: yScale,
				_datasetIndex: me.index,
				_index: index,

				// Desired view properties
				_model: {
					x: reset ? scaleBase : me.calculateBarX(index, me.index),
					y: me.calculateBarY(index, me.index),

					// Tooltip
					label: me.chart.data.labels[index],
					datasetLabel: dataset.label,

					// Appearance
					base: reset ? scaleBase : me.calculateBarBase(me.index, index),
					height: me.calculateBarHeight(index),
					backgroundColor: custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.backgroundColor, index, rectangleElementOptions.backgroundColor),
					borderSkipped: custom.borderSkipped ? custom.borderSkipped : rectangleElementOptions.borderSkipped,
					borderColor: custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.borderColor, index, rectangleElementOptions.borderColor),
					borderWidth: custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.borderWidth, index, rectangleElementOptions.borderWidth)
				},

				draw: function () {
					var ctx = this._chart.ctx;
					var vm = this._view;

					var halfHeight = vm.height / 2,
						topY = vm.y - halfHeight,
						bottomY = vm.y + halfHeight,
						right = vm.base - (vm.base - vm.x),
						halfStroke = vm.borderWidth / 2;

					// Canvas doesn't allow us to stroke inside the width so we can
					// adjust the sizes to fit if we're setting a stroke on the line
					if (vm.borderWidth) {
						topY += halfStroke;
						bottomY -= halfStroke;
						right += halfStroke;
					}

					ctx.beginPath();

					ctx.fillStyle = vm.backgroundColor;
					ctx.strokeStyle = vm.borderColor;
					ctx.lineWidth = vm.borderWidth;

					// Corner points, from bottom-left to bottom-right clockwise
					// | 1 2 |
					// | 0 3 |
					var corners = [
						[vm.base, bottomY],
						[vm.base, topY],
						[right, topY],
						[right, bottomY]
					];

					// Find first (starting) corner with fallback to 'bottom'
					var borders = ['bottom', 'left', 'top', 'right'];
					var startCorner = borders.indexOf(vm.borderSkipped, 0);
					if (startCorner === -1)
						startCorner = 0;

					function cornerAt(index) {
						return corners[(startCorner + index) % 4];
					}

					// Draw rectangle from 'startCorner'
					ctx.moveTo.apply(ctx, cornerAt(0));
					for (var i = 1; i < 4; i++)
						ctx.lineTo.apply(ctx, cornerAt(i));

					ctx.fill();
					if (vm.borderWidth) {
						ctx.stroke();
					}
				},

				inRange: function (mouseX, mouseY) {
					var vm = this._view;
					var inRange = false;

					if (vm) {
						if (vm.x < vm.base) {
							inRange = (mouseY >= vm.y - vm.height / 2 && mouseY <= vm.y + vm.height / 2) && (mouseX >= vm.x && mouseX <= vm.base);
						} else {
							inRange = (mouseY >= vm.y - vm.height / 2 && mouseY <= vm.y + vm.height / 2) && (mouseX >= vm.base && mouseX <= vm.x);
						}
					}

					return inRange;
				}
			});

			rectangle.pivot();
		},

		calculateBarBase: function (datasetIndex, index) {
			var me = this;
			var meta = me.getMeta();
			var xScale = me.getScaleForId(meta.xAxisID);
			var base = 0;

			if (xScale.options.stacked) {

				var value = me.chart.data.datasets[datasetIndex].data[index];

				if (value < 0) {
					for (var i = 0; i < datasetIndex; i++) {
						var negDS = me.chart.data.datasets[i];
						var negDSMeta = me.chart.getDatasetMeta(i);
						if (negDSMeta.bar && negDSMeta.xAxisID === xScale.id && me.chart.isDatasetVisible(i)) {
							base += negDS.data[index] < 0 ? negDS.data[index] : 0;
						}
					}
				} else {
					for (var j = 0; j < datasetIndex; j++) {
						var posDS = me.chart.data.datasets[j];
						var posDSMeta = me.chart.getDatasetMeta(j);
						if (posDSMeta.bar && posDSMeta.xAxisID === xScale.id && me.chart.isDatasetVisible(j)) {
							base += posDS.data[index] > 0 ? posDS.data[index] : 0;
						}
					}
				}

				return xScale.getPixelForValue(base);
			}

			return xScale.getBasePixel();
		},

		getRuler: function (index) {
			var me = this;
			var meta = me.getMeta();
			var yScale = me.getScaleForId(meta.yAxisID);
			var datasetCount = me.getBarCount();

			var tickHeight;
			if (yScale.options.type === 'category') {
				tickHeight = yScale.getPixelForTick(index + 1) - yScale.getPixelForTick(index);
			} else {
				// Average width
				tickHeight = yScale.width / yScale.ticks.length;
			}
			var categoryHeight = tickHeight * yScale.options.categoryPercentage;
			var categorySpacing = (tickHeight - (tickHeight * yScale.options.categoryPercentage)) / 2;
			var fullBarHeight = categoryHeight / datasetCount;

			if (yScale.ticks.length !== me.chart.data.labels.length) {
				var perc = yScale.ticks.length / me.chart.data.labels.length;
				fullBarHeight = fullBarHeight * perc;
			}

			var barHeight = fullBarHeight * yScale.options.barPercentage;
			var barSpacing = fullBarHeight - (fullBarHeight * yScale.options.barPercentage);

			return {
				datasetCount: datasetCount,
				tickHeight: tickHeight,
				categoryHeight: categoryHeight,
				categorySpacing: categorySpacing,
				fullBarHeight: fullBarHeight,
				barHeight: barHeight,
				barSpacing: barSpacing,
			};
		},

		calculateBarHeight: function (index) {
			var me = this;
			var yScale = me.getScaleForId(me.getMeta().yAxisID);
			var ruler = me.getRuler(index);
			return yScale.options.stacked ? ruler.categoryHeight : ruler.barHeight;
		},

		calculateBarX: function (index, datasetIndex) {
			var me = this;
			var meta = me.getMeta();
			var xScale = me.getScaleForId(meta.xAxisID);
			var value = me.getDataset().data[index];

			if (xScale.options.stacked) {

				var sumPos = 0,
					sumNeg = 0;

				for (var i = 0; i < datasetIndex; i++) {
					var ds = me.chart.data.datasets[i];
					var dsMeta = me.chart.getDatasetMeta(i);
					if (dsMeta.bar && dsMeta.xAxisID === xScale.id && me.chart.isDatasetVisible(i)) {
						if (ds.data[index] < 0) {
							sumNeg += ds.data[index] || 0;
						} else {
							sumPos += ds.data[index] || 0;
						}
					}
				}

				if (value < 0) {
					return xScale.getPixelForValue(sumNeg + value);
				} else {
					return xScale.getPixelForValue(sumPos + value);
				}
			}

			return xScale.getPixelForValue(value);
		},

		calculateBarY: function (index, datasetIndex) {
			var me = this;
			var meta = me.getMeta();
			var yScale = me.getScaleForId(meta.yAxisID);
			var barIndex = me.getBarIndex(datasetIndex);

			var ruler = me.getRuler(index);
			var topTick = yScale.getPixelForValue(null, index, datasetIndex, me.chart.isCombo);
			topTick -= me.chart.isCombo ? (ruler.tickHeight / 2) : 0;

			if (yScale.options.stacked) {
				return topTick + (ruler.categoryHeight / 2) + ruler.categorySpacing;
			}

			return topTick +
				(ruler.barHeight / 2) +
				ruler.categorySpacing +
				(ruler.barHeight * barIndex) +
				(ruler.barSpacing / 2) +
				(ruler.barSpacing * barIndex);
		}
	});
};

},{}],16:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.bubble = {
		hover: {
			mode: "single"
		},

		scales: {
			xAxes: [{
				type: "linear", // bubble should probably use a linear scale by default
				position: "bottom",
				id: "x-axis-0" // need an ID so datasets can reference the scale
			}],
			yAxes: [{
				type: "linear",
				position: "left",
				id: "y-axis-0"
			}]
		},

		tooltips: {
			callbacks: {
				title: function(tooltipItems, data) {
					// Title doesn't make sense for scatter since we format the data as a point
					return '';
				},
				label: function(tooltipItem, data) {
					var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
					var dataPoint = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
					return datasetLabel + ': (' + dataPoint.x + ', ' + dataPoint.y + ', ' + dataPoint.r + ')';
				}
			}
		}
	};

	Chart.controllers.bubble = Chart.DatasetController.extend({

		dataElementType: Chart.elements.Point,

		update: function update(reset) {
			var me = this;
			var meta = me.getMeta();
			var points = meta.data;

			// Update Points
			helpers.each(points, function(point, index) {
				me.updateElement(point, index, reset);
			});
		},

		updateElement: function(point, index, reset) {
			var me = this;
			var meta = me.getMeta();
			var xScale = me.getScaleForId(meta.xAxisID);
			var yScale = me.getScaleForId(meta.yAxisID);

			var custom = point.custom || {};
			var dataset = me.getDataset();
			var data = dataset.data[index];
			var pointElementOptions = me.chart.options.elements.point;
			var dsIndex = me.index;

			helpers.extend(point, {
				// Utility
				_xScale: xScale,
				_yScale: yScale,
				_datasetIndex: dsIndex,
				_index: index,

				// Desired view properties
				_model: {
					x: reset ? xScale.getPixelForDecimal(0.5) : xScale.getPixelForValue(data, index, dsIndex, me.chart.isCombo),
					y: reset ? yScale.getBasePixel() : yScale.getPixelForValue(data, index, dsIndex),
					// Appearance
					radius: reset ? 0 : custom.radius ? custom.radius : me.getRadius(data),

					// Tooltip
					hitRadius: custom.hitRadius ? custom.hitRadius : helpers.getValueAtIndexOrDefault(dataset.hitRadius, index, pointElementOptions.hitRadius)
				}
			});

			// Trick to reset the styles of the point
			Chart.DatasetController.prototype.removeHoverStyle.call(me, point, pointElementOptions);

			var model = point._model;
			model.skip = custom.skip ? custom.skip : (isNaN(model.x) || isNaN(model.y));

			point.pivot();
		},

		getRadius: function(value) {
			return value.r || this.chart.options.elements.point.radius;
		},

		setHoverStyle: function(point) {
			var me = this;
			Chart.DatasetController.prototype.setHoverStyle.call(me, point);

			// Radius
			var dataset = me.chart.data.datasets[point._datasetIndex];
			var index = point._index;
			var custom = point.custom || {};
			var model = point._model;
			model.radius = custom.hoverRadius ? custom.hoverRadius : (helpers.getValueAtIndexOrDefault(dataset.hoverRadius, index, me.chart.options.elements.point.hoverRadius)) + me.getRadius(dataset.data[index]);
		},

		removeHoverStyle: function(point) {
			var me = this;
			Chart.DatasetController.prototype.removeHoverStyle.call(me, point, me.chart.options.elements.point);

			var dataVal = me.chart.data.datasets[point._datasetIndex].data[point._index];
			var custom = point.custom || {};
			var model = point._model;

			model.radius = custom.radius ? custom.radius : me.getRadius(dataVal);
		}
	});
};

},{}],17:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers,
		defaults = Chart.defaults;

	defaults.doughnut = {
		animation: {
			//Boolean - Whether we animate the rotation of the Doughnut
			animateRotate: true,
			//Boolean - Whether we animate scaling the Doughnut from the centre
			animateScale: false
		},
		aspectRatio: 1,
		hover: {
			mode: 'single'
		},
		legendCallback: function(chart) {
			var text = [];
			text.push('<ul class="' + chart.id + '-legend">');

			var data = chart.data;
			var datasets = data.datasets;
			var labels = data.labels;

			if (datasets.length) {
				for (var i = 0; i < datasets[0].data.length; ++i) {
					text.push('<li><span style="background-color:' + datasets[0].backgroundColor[i] + '"></span>');
					if (labels[i]) {
						text.push(labels[i]);
					}
					text.push('</li>');
				}
			}

			text.push('</ul>');
			return text.join("");
		},
		legend: {
			labels: {
				generateLabels: function(chart) {
					var data = chart.data;
					if (data.labels.length && data.datasets.length) {
						return data.labels.map(function(label, i) {
							var meta = chart.getDatasetMeta(0);
							var ds = data.datasets[0];
							var arc = meta.data[i];
							var custom = arc.custom || {};
							var getValueAtIndexOrDefault = helpers.getValueAtIndexOrDefault;
							var arcOpts = chart.options.elements.arc;
							var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
							var stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
							var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);

							return {
								text: label,
								fillStyle: fill,
								strokeStyle: stroke,
								lineWidth: bw,
								hidden: isNaN(ds.data[i]) || meta.data[i].hidden,

								// Extra data used for toggling the correct item
								index: i
							};
						});
					} else {
						return [];
					}
				}
			},

			onClick: function(e, legendItem) {
				var index = legendItem.index;
				var chart = this.chart;
				var i, ilen, meta;

				for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
					meta = chart.getDatasetMeta(i);
					meta.data[index].hidden = !meta.data[index].hidden;
				}

				chart.update();
			}
		},

		//The percentage of the chart that we cut out of the middle.
		cutoutPercentage: 50,

		//The rotation of the chart, where the first data arc begins.
		rotation: Math.PI * -0.5,

		//The total circumference of the chart.
		circumference: Math.PI * 2.0,

		// Need to override these to give a nice default
		tooltips: {
			callbacks: {
				title: function() {
					return '';
				},
				label: function(tooltipItem, data) {
					return data.labels[tooltipItem.index] + ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
				}
			}
		}
	};

	defaults.pie = helpers.clone(defaults.doughnut);
	helpers.extend(defaults.pie, {
		cutoutPercentage: 0
	});


	Chart.controllers.doughnut = Chart.controllers.pie = Chart.DatasetController.extend({

		dataElementType: Chart.elements.Arc,

		linkScales: helpers.noop,

		// Get index of the dataset in relation to the visible datasets. This allows determining the inner and outer radius correctly
		getRingIndex: function getRingIndex(datasetIndex) {
			var ringIndex = 0;

			for (var j = 0; j < datasetIndex; ++j) {
				if (this.chart.isDatasetVisible(j)) {
					++ringIndex;
				}
			}

			return ringIndex;
		},

		update: function update(reset) {
			var me = this;
			var chart = me.chart,
				chartArea = chart.chartArea,
				opts = chart.options,
				arcOpts = opts.elements.arc,
				availableWidth = chartArea.right - chartArea.left - arcOpts.borderWidth,
				availableHeight = chartArea.bottom - chartArea.top - arcOpts.borderWidth,
				minSize = Math.min(availableWidth, availableHeight),
				offset = {
					x: 0,
					y: 0
				},
				meta = me.getMeta(),
				cutoutPercentage = opts.cutoutPercentage,
				circumference = opts.circumference;

			// If the chart's circumference isn't a full circle, calculate minSize as a ratio of the width/height of the arc
			if (circumference < Math.PI * 2.0) {
				var startAngle = opts.rotation % (Math.PI * 2.0);
				startAngle += Math.PI * 2.0 * (startAngle >= Math.PI ? -1 : startAngle < -Math.PI ? 1 : 0);
				var endAngle = startAngle + circumference;
				var start = {x: Math.cos(startAngle), y: Math.sin(startAngle)};
				var end = {x: Math.cos(endAngle), y: Math.sin(endAngle)};
				var contains0 = (startAngle <= 0 && 0 <= endAngle) || (startAngle <= Math.PI * 2.0 && Math.PI * 2.0 <= endAngle);
				var contains90 = (startAngle <= Math.PI * 0.5 && Math.PI * 0.5 <= endAngle) || (startAngle <= Math.PI * 2.5 && Math.PI * 2.5 <= endAngle);
				var contains180 = (startAngle <= -Math.PI && -Math.PI <= endAngle) || (startAngle <= Math.PI && Math.PI <= endAngle);
				var contains270 = (startAngle <= -Math.PI * 0.5 && -Math.PI * 0.5 <= endAngle) || (startAngle <= Math.PI * 1.5 && Math.PI * 1.5 <= endAngle);
				var cutout = cutoutPercentage / 100.0;
				var min = {x: contains180 ? -1 : Math.min(start.x * (start.x < 0 ? 1 : cutout), end.x * (end.x < 0 ? 1 : cutout)), y: contains270 ? -1 : Math.min(start.y * (start.y < 0 ? 1 : cutout), end.y * (end.y < 0 ? 1 : cutout))};
				var max = {x: contains0 ? 1 : Math.max(start.x * (start.x > 0 ? 1 : cutout), end.x * (end.x > 0 ? 1 : cutout)), y: contains90 ? 1 : Math.max(start.y * (start.y > 0 ? 1 : cutout), end.y * (end.y > 0 ? 1 : cutout))};
				var size = {width: (max.x - min.x) * 0.5, height: (max.y - min.y) * 0.5};
				minSize = Math.min(availableWidth / size.width, availableHeight / size.height);
				offset = {x: (max.x + min.x) * -0.5, y: (max.y + min.y) * -0.5};
			}

			chart.outerRadius = Math.max(minSize / 2, 0);
			chart.innerRadius = Math.max(cutoutPercentage ? (chart.outerRadius / 100) * (cutoutPercentage) : 1, 0);
			chart.radiusLength = (chart.outerRadius - chart.innerRadius) / chart.getVisibleDatasetCount();
			chart.offsetX = offset.x * chart.outerRadius;
			chart.offsetY = offset.y * chart.outerRadius;

			meta.total = me.calculateTotal();

			me.outerRadius = chart.outerRadius - (chart.radiusLength * me.getRingIndex(me.index));
			me.innerRadius = me.outerRadius - chart.radiusLength;

			helpers.each(meta.data, function(arc, index) {
				me.updateElement(arc, index, reset);
			});
		},

		updateElement: function(arc, index, reset) {
			var me = this;
			var chart = me.chart,
				chartArea = chart.chartArea,
				opts = chart.options,
				animationOpts = opts.animation,
				arcOpts = opts.elements.arc,
				centerX = (chartArea.left + chartArea.right) / 2,
				centerY = (chartArea.top + chartArea.bottom) / 2,
				startAngle = opts.rotation, // non reset case handled later
				endAngle = opts.rotation, // non reset case handled later
				dataset = me.getDataset(),
				circumference = reset && animationOpts.animateRotate ? 0 : arc.hidden ? 0 : me.calculateCircumference(dataset.data[index]) * (opts.circumference / (2.0 * Math.PI)),
				innerRadius = reset && animationOpts.animateScale ? 0 : me.innerRadius,
				outerRadius = reset && animationOpts.animateScale ? 0 : me.outerRadius,
				custom = arc.custom || {},
				valueAtIndexOrDefault = helpers.getValueAtIndexOrDefault;

			helpers.extend(arc, {
				// Utility
				_datasetIndex: me.index,
				_index: index,

				// Desired view properties
				_model: {
					x: centerX + chart.offsetX,
					y: centerY + chart.offsetY,
					startAngle: startAngle,
					endAngle: endAngle,
					circumference: circumference,
					outerRadius: outerRadius,
					innerRadius: innerRadius,
					label: valueAtIndexOrDefault(dataset.label, index, chart.data.labels[index])
				}
			});

			var model = arc._model;
			// Resets the visual styles
			this.removeHoverStyle(arc);

			// Set correct angles if not resetting
			if (!reset || !animationOpts.animateRotate) {
				if (index === 0) {
					model.startAngle = opts.rotation;
				} else {
					model.startAngle = me.getMeta().data[index - 1]._model.endAngle;
				}

				model.endAngle = model.startAngle + model.circumference;
			}

			arc.pivot();
		},

		removeHoverStyle: function(arc) {
			Chart.DatasetController.prototype.removeHoverStyle.call(this, arc, this.chart.options.elements.arc);
		},

		calculateTotal: function() {
			var dataset = this.getDataset();
			var meta = this.getMeta();
			var total = 0;
			var value;

			helpers.each(meta.data, function(element, index) {
				value = dataset.data[index];
				if (!isNaN(value) && !element.hidden) {
					total += Math.abs(value);
				}
			});

			return total;
		},

		calculateCircumference: function(value) {
			var total = this.getMeta().total;
			if (total > 0 && !isNaN(value)) {
				return (Math.PI * 2.0) * (value / total);
			} else {
				return 0;
			}
		}
	});
};

},{}],18:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.line = {
		showLines: true,

		hover: {
			mode: "label"
		},

		scales: {
			xAxes: [{
				type: "category",
				id: 'x-axis-0'
			}],
			yAxes: [{
				type: "linear",
				id: 'y-axis-0'
			}]
		}
	};

	function lineEnabled(dataset, options) {
		return helpers.getValueOrDefault(dataset.showLine, options.showLines);
	}

	Chart.controllers.line = Chart.DatasetController.extend({

		datasetElementType: Chart.elements.Line,

		dataElementType: Chart.elements.Point,

		addElementAndReset: function(index) {
			var me = this;
			var options = me.chart.options;
			var meta = me.getMeta();

			Chart.DatasetController.prototype.addElementAndReset.call(me, index);

			// Make sure bezier control points are updated
			if (lineEnabled(me.getDataset(), options) && meta.dataset._model.tension !== 0) {
				me.updateBezierControlPoints();
			}
		},

		update: function update(reset) {
			var me = this;
			var meta = me.getMeta();
			var line = meta.dataset;
			var points = meta.data || [];
			var options = me.chart.options;
			var lineElementOptions = options.elements.line;
			var scale = me.getScaleForId(meta.yAxisID);
			var i, ilen, custom;
			var dataset = me.getDataset();
			var showLine = lineEnabled(dataset, options);

			// Update Line
			if (showLine) {
				custom = line.custom || {};

				// Compatibility: If the properties are defined with only the old name, use those values
				if ((dataset.tension !== undefined) && (dataset.lineTension === undefined)) {
					dataset.lineTension = dataset.tension;
				}

				// Utility
				line._scale = scale;
				line._datasetIndex = me.index;
				// Data
				line._children = points;
				// Model
				line._model = {
					// Appearance
					// The default behavior of lines is to break at null values, according
					// to https://github.com/chartjs/Chart.js/issues/2435#issuecomment-216718158
					// This option gives linse the ability to span gaps
					spanGaps: dataset.spanGaps ? dataset.spanGaps : false,
					tension: custom.tension ? custom.tension : helpers.getValueOrDefault(dataset.lineTension, lineElementOptions.tension),
					backgroundColor: custom.backgroundColor ? custom.backgroundColor : (dataset.backgroundColor || lineElementOptions.backgroundColor),
					borderWidth: custom.borderWidth ? custom.borderWidth : (dataset.borderWidth || lineElementOptions.borderWidth),
					borderColor: custom.borderColor ? custom.borderColor : (dataset.borderColor || lineElementOptions.borderColor),
					borderCapStyle: custom.borderCapStyle ? custom.borderCapStyle : (dataset.borderCapStyle || lineElementOptions.borderCapStyle),
					borderDash: custom.borderDash ? custom.borderDash : (dataset.borderDash || lineElementOptions.borderDash),
					borderDashOffset: custom.borderDashOffset ? custom.borderDashOffset : (dataset.borderDashOffset || lineElementOptions.borderDashOffset),
					borderJoinStyle: custom.borderJoinStyle ? custom.borderJoinStyle : (dataset.borderJoinStyle || lineElementOptions.borderJoinStyle),
					fill: custom.fill ? custom.fill : (dataset.fill !== undefined ? dataset.fill : lineElementOptions.fill),
					// Scale
					scaleTop: scale.top,
					scaleBottom: scale.bottom,
					scaleZero: scale.getBasePixel()
				};

				line.pivot();
			}

			// Update Points
			for (i=0, ilen=points.length; i<ilen; ++i) {
				me.updateElement(points[i], i, reset);
			}

			if (showLine && line._model.tension !== 0) {
				me.updateBezierControlPoints();
			}

			// Now pivot the point for animation
			for (i=0, ilen=points.length; i<ilen; ++i) {
				points[i].pivot();
			}
		},

		getPointBackgroundColor: function(point, index) {
			var backgroundColor = this.chart.options.elements.point.backgroundColor;
			var dataset = this.getDataset();
			var custom = point.custom || {};

			if (custom.backgroundColor) {
				backgroundColor = custom.backgroundColor;
			} else if (dataset.pointBackgroundColor) {
				backgroundColor = helpers.getValueAtIndexOrDefault(dataset.pointBackgroundColor, index, backgroundColor);
			} else if (dataset.backgroundColor) {
				backgroundColor = dataset.backgroundColor;
			}

			return backgroundColor;
		},

		getPointBorderColor: function(point, index) {
			var borderColor = this.chart.options.elements.point.borderColor;
			var dataset = this.getDataset();
			var custom = point.custom || {};

			if (custom.borderColor) {
				borderColor = custom.borderColor;
			} else if (dataset.pointBorderColor) {
				borderColor = helpers.getValueAtIndexOrDefault(dataset.pointBorderColor, index, borderColor);
			} else if (dataset.borderColor) {
				borderColor = dataset.borderColor;
			}

			return borderColor;
		},

		getPointBorderWidth: function(point, index) {
			var borderWidth = this.chart.options.elements.point.borderWidth;
			var dataset = this.getDataset();
			var custom = point.custom || {};

			if (custom.borderWidth) {
				borderWidth = custom.borderWidth;
			} else if (dataset.pointBorderWidth) {
				borderWidth = helpers.getValueAtIndexOrDefault(dataset.pointBorderWidth, index, borderWidth);
			} else if (dataset.borderWidth) {
				borderWidth = dataset.borderWidth;
			}

			return borderWidth;
		},

		updateElement: function(point, index, reset) {
			var me = this;
			var meta = me.getMeta();
			var custom = point.custom || {};
			var dataset = me.getDataset();
			var datasetIndex = me.index;
			var value = dataset.data[index];
			var yScale = me.getScaleForId(meta.yAxisID);
			var xScale = me.getScaleForId(meta.xAxisID);
			var pointOptions = me.chart.options.elements.point;
			var x, y;

			// Compatibility: If the properties are defined with only the old name, use those values
			if ((dataset.radius !== undefined) && (dataset.pointRadius === undefined)) {
				dataset.pointRadius = dataset.radius;
			}
			if ((dataset.hitRadius !== undefined) && (dataset.pointHitRadius === undefined)) {
				dataset.pointHitRadius = dataset.hitRadius;
			}

			x = xScale.getPixelForValue(value, index, datasetIndex, me.chart.isCombo);
			y = reset ? yScale.getBasePixel() : me.calculatePointY(value, index, datasetIndex, me.chart.isCombo);

			// Utility
			point._xScale = xScale;
			point._yScale = yScale;
			point._datasetIndex = datasetIndex;
			point._index = index;

			// Desired view properties
			point._model = {
				x: x,
				y: y,
				skip: custom.skip || isNaN(x) || isNaN(y),
				// Appearance
				radius: custom.radius || helpers.getValueAtIndexOrDefault(dataset.pointRadius, index, pointOptions.radius),
				pointStyle: custom.pointStyle || helpers.getValueAtIndexOrDefault(dataset.pointStyle, index, pointOptions.pointStyle),
				backgroundColor: me.getPointBackgroundColor(point, index),
				borderColor: me.getPointBorderColor(point, index),
				borderWidth: me.getPointBorderWidth(point, index),
				tension: meta.dataset._model ? meta.dataset._model.tension : 0,
				// Tooltip
				hitRadius: custom.hitRadius || helpers.getValueAtIndexOrDefault(dataset.pointHitRadius, index, pointOptions.hitRadius)
			};
		},

		calculatePointY: function(value, index, datasetIndex, isCombo) {
			var me = this;
			var chart = me.chart;
			var meta = me.getMeta();
			var yScale = me.getScaleForId(meta.yAxisID);
			var sumPos = 0;
			var sumNeg = 0;
			var i, ds, dsMeta;

			if (yScale.options.stacked) {
				for (i = 0; i < datasetIndex; i++) {
					ds = chart.data.datasets[i];
					dsMeta = chart.getDatasetMeta(i);
					if (dsMeta.type === 'line' && chart.isDatasetVisible(i)) {
						if (ds.data[index] < 0) {
							sumNeg += ds.data[index] || 0;
						} else {
							sumPos += ds.data[index] || 0;
						}
					}
				}

				if (value < 0) {
					return yScale.getPixelForValue(sumNeg + value);
				} else {
					return yScale.getPixelForValue(sumPos + value);
				}
			}

			return yScale.getPixelForValue(value);
		},

		updateBezierControlPoints: function() {
			var meta = this.getMeta();
			var area = this.chart.chartArea;
			var points = meta.data || [];
			var i, ilen, point, model, controlPoints;

			for (i=0, ilen=points.length; i<ilen; ++i) {
				point = points[i];
				model = point._model;
				controlPoints = helpers.splineCurve(
					helpers.previousItem(points, i)._model,
					model,
					helpers.nextItem(points, i)._model,
					meta.dataset._model.tension
				);

				model.controlPointPreviousX = controlPoints.previous.x;
				model.controlPointPreviousY = controlPoints.previous.y;
				model.controlPointNextX = controlPoints.next.x;
				model.controlPointNextY = controlPoints.next.y;
			}
		},

		draw: function(ease) {
			var me = this;
			var meta = me.getMeta();
			var points = meta.data || [];
			var easingDecimal = ease || 1;
			var i, ilen;

			// Transition Point Locations
			for (i=0, ilen=points.length; i<ilen; ++i) {
				points[i].transition(easingDecimal);
			}

			// Transition and Draw the line
			if (lineEnabled(me.getDataset(), me.chart.options)) {
				meta.dataset.transition(easingDecimal).draw();
			}

			// Draw the points
			for (i=0, ilen=points.length; i<ilen; ++i) {
				points[i].draw();
			}
		},

		setHoverStyle: function(point) {
			// Point
			var dataset = this.chart.data.datasets[point._datasetIndex];
			var index = point._index;
			var custom = point.custom || {};
			var model = point._model;

			model.radius = custom.hoverRadius || helpers.getValueAtIndexOrDefault(dataset.pointHoverRadius, index, this.chart.options.elements.point.hoverRadius);
			model.backgroundColor = custom.hoverBackgroundColor || helpers.getValueAtIndexOrDefault(dataset.pointHoverBackgroundColor, index, helpers.getHoverColor(model.backgroundColor));
			model.borderColor = custom.hoverBorderColor || helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderColor, index, helpers.getHoverColor(model.borderColor));
			model.borderWidth = custom.hoverBorderWidth || helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderWidth, index, model.borderWidth);
		},

		removeHoverStyle: function(point) {
			var me = this;
			var dataset = me.chart.data.datasets[point._datasetIndex];
			var index = point._index;
			var custom = point.custom || {};
			var model = point._model;

			// Compatibility: If the properties are defined with only the old name, use those values
			if ((dataset.radius !== undefined) && (dataset.pointRadius === undefined)) {
				dataset.pointRadius = dataset.radius;
			}

			model.radius = custom.radius || helpers.getValueAtIndexOrDefault(dataset.pointRadius, index, me.chart.options.elements.point.radius);
			model.backgroundColor = me.getPointBackgroundColor(point, index);
			model.borderColor = me.getPointBorderColor(point, index);
			model.borderWidth = me.getPointBorderWidth(point, index);
		}
	});
};

},{}],19:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.polarArea = {

		scale: {
			type: "radialLinear",
			lineArc: true // so that lines are circular
		},

		//Boolean - Whether to animate the rotation of the chart
		animation: {
			animateRotate: true,
			animateScale: true
		},

		aspectRatio: 1,
		legendCallback: function(chart) {
			var text = [];
			text.push('<ul class="' + chart.id + '-legend">');

			var data = chart.data;
			var datasets = data.datasets;
			var labels = data.labels;

			if (datasets.length) {
				for (var i = 0; i < datasets[0].data.length; ++i) {
					text.push('<li><span style="background-color:' + datasets[0].backgroundColor[i] + '">');
					if (labels[i]) {
						text.push(labels[i]);
					}
					text.push('</span></li>');
				}
			}

			text.push('</ul>');
			return text.join("");
		},
		legend: {
			labels: {
				generateLabels: function(chart) {
					var data = chart.data;
					if (data.labels.length && data.datasets.length) {
						return data.labels.map(function(label, i) {
							var meta = chart.getDatasetMeta(0);
							var ds = data.datasets[0];
							var arc = meta.data[i];
							var custom = arc.custom || {};
							var getValueAtIndexOrDefault = helpers.getValueAtIndexOrDefault;
							var arcOpts = chart.options.elements.arc;
							var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
							var stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
							var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);

							return {
								text: label,
								fillStyle: fill,
								strokeStyle: stroke,
								lineWidth: bw,
								hidden: isNaN(ds.data[i]) || meta.data[i].hidden,

								// Extra data used for toggling the correct item
								index: i
							};
						});
					} else {
						return [];
					}
				}
			},

			onClick: function(e, legendItem) {
				var index = legendItem.index;
				var chart = this.chart;
				var i, ilen, meta;

				for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
					meta = chart.getDatasetMeta(i);
					meta.data[index].hidden = !meta.data[index].hidden;
				}

				chart.update();
			}
		},

		// Need to override these to give a nice default
		tooltips: {
			callbacks: {
				title: function() {
					return '';
				},
				label: function(tooltipItem, data) {
					return data.labels[tooltipItem.index] + ': ' + tooltipItem.yLabel;
				}
			}
		}
	};

	Chart.controllers.polarArea = Chart.DatasetController.extend({

		dataElementType: Chart.elements.Arc,

		linkScales: helpers.noop,

		update: function update(reset) {
			var me = this;
			var chart = me.chart;
			var chartArea = chart.chartArea;
			var meta = me.getMeta();
			var opts = chart.options;
			var arcOpts = opts.elements.arc;
			var minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
			chart.outerRadius = Math.max((minSize - arcOpts.borderWidth / 2) / 2, 0);
			chart.innerRadius = Math.max(opts.cutoutPercentage ? (chart.outerRadius / 100) * (opts.cutoutPercentage) : 1, 0);
			chart.radiusLength = (chart.outerRadius - chart.innerRadius) / chart.getVisibleDatasetCount();

			me.outerRadius = chart.outerRadius - (chart.radiusLength * me.index);
			me.innerRadius = me.outerRadius - chart.radiusLength;

			meta.count = me.countVisibleElements();

			helpers.each(meta.data, function(arc, index) {
				me.updateElement(arc, index, reset);
			});
		},

		updateElement: function(arc, index, reset) {
			var me = this;
			var chart = me.chart;
			var chartArea = chart.chartArea;
			var dataset = me.getDataset();
			var opts = chart.options;
			var animationOpts = opts.animation;
			var arcOpts = opts.elements.arc;
			var custom = arc.custom || {};
			var scale = chart.scale;
			var getValueAtIndexOrDefault = helpers.getValueAtIndexOrDefault;
			var labels = chart.data.labels;

			var circumference = me.calculateCircumference(dataset.data[index]);
			var centerX = (chartArea.left + chartArea.right) / 2;
			var centerY = (chartArea.top + chartArea.bottom) / 2;

			// If there is NaN data before us, we need to calculate the starting angle correctly.
			// We could be way more efficient here, but its unlikely that the polar area chart will have a lot of data
			var visibleCount = 0;
			var meta = me.getMeta();
			for (var i = 0; i < index; ++i) {
				if (!isNaN(dataset.data[i]) && !meta.data[i].hidden) {
					++visibleCount;
				}
			}

			var negHalfPI = -0.5 * Math.PI;
			var distance = arc.hidden ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);
			var startAngle = (negHalfPI) + (circumference * visibleCount);
			var endAngle = startAngle + (arc.hidden ? 0 : circumference);

			var resetRadius = animationOpts.animateScale ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);

			helpers.extend(arc, {
				// Utility
				_datasetIndex: me.index,
				_index: index,
				_scale: scale,

				// Desired view properties
				_model: {
					x: centerX,
					y: centerY,
					innerRadius: 0,
					outerRadius: reset ? resetRadius : distance,
					startAngle: reset && animationOpts.animateRotate ? negHalfPI : startAngle,
					endAngle: reset && animationOpts.animateRotate ? negHalfPI : endAngle,
					label: getValueAtIndexOrDefault(labels, index, labels[index])
				}
			});

			// Apply border and fill style
			me.removeHoverStyle(arc);

			arc.pivot();
		},

		removeHoverStyle: function(arc) {
			Chart.DatasetController.prototype.removeHoverStyle.call(this, arc, this.chart.options.elements.arc);
		},

		countVisibleElements: function() {
			var dataset = this.getDataset();
			var meta = this.getMeta();
			var count = 0;

			helpers.each(meta.data, function(element, index) {
				if (!isNaN(dataset.data[index]) && !element.hidden) {
					count++;
				}
			});

			return count;
		},

		calculateCircumference: function(value) {
			var count = this.getMeta().count;
			if (count > 0 && !isNaN(value)) {
				return (2 * Math.PI) / count;
			} else {
				return 0;
			}
		}
	});
};

},{}],20:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.radar = {
		scale: {
			type: "radialLinear"
		},
		elements: {
			line: {
				tension: 0 // no bezier in radar
			}
		}
	};

	Chart.controllers.radar = Chart.DatasetController.extend({

		datasetElementType: Chart.elements.Line,

		dataElementType: Chart.elements.Point,

		linkScales: helpers.noop,

		addElementAndReset: function(index) {
			Chart.DatasetController.prototype.addElementAndReset.call(this, index);

			// Make sure bezier control points are updated
			this.updateBezierControlPoints();
		},

		update: function update(reset) {
			var me = this;
			var meta = me.getMeta();
			var line = meta.dataset;
			var points = meta.data;
			var custom = line.custom || {};
			var dataset = me.getDataset();
			var lineElementOptions = me.chart.options.elements.line;
			var scale = me.chart.scale;

			// Compatibility: If the properties are defined with only the old name, use those values
			if ((dataset.tension !== undefined) && (dataset.lineTension === undefined)) {
				dataset.lineTension = dataset.tension;
			}

			helpers.extend(meta.dataset, {
				// Utility
				_datasetIndex: me.index,
				// Data
				_children: points,
				_loop: true,
				// Model
				_model: {
					// Appearance
					tension: custom.tension ? custom.tension : helpers.getValueOrDefault(dataset.lineTension, lineElementOptions.tension),
					backgroundColor: custom.backgroundColor ? custom.backgroundColor : (dataset.backgroundColor || lineElementOptions.backgroundColor),
					borderWidth: custom.borderWidth ? custom.borderWidth : (dataset.borderWidth || lineElementOptions.borderWidth),
					borderColor: custom.borderColor ? custom.borderColor : (dataset.borderColor || lineElementOptions.borderColor),
					fill: custom.fill ? custom.fill : (dataset.fill !== undefined ? dataset.fill : lineElementOptions.fill),
					borderCapStyle: custom.borderCapStyle ? custom.borderCapStyle : (dataset.borderCapStyle || lineElementOptions.borderCapStyle),
					borderDash: custom.borderDash ? custom.borderDash : (dataset.borderDash || lineElementOptions.borderDash),
					borderDashOffset: custom.borderDashOffset ? custom.borderDashOffset : (dataset.borderDashOffset || lineElementOptions.borderDashOffset),
					borderJoinStyle: custom.borderJoinStyle ? custom.borderJoinStyle : (dataset.borderJoinStyle || lineElementOptions.borderJoinStyle),

					// Scale
					scaleTop: scale.top,
					scaleBottom: scale.bottom,
					scaleZero: scale.getBasePosition()
				}
			});

			meta.dataset.pivot();

			// Update Points
			helpers.each(points, function(point, index) {
				me.updateElement(point, index, reset);
			}, me);


			// Update bezier control points
			me.updateBezierControlPoints();
		},
		updateElement: function(point, index, reset) {
			var me = this;
			var custom = point.custom || {};
			var dataset = me.getDataset();
			var scale = me.chart.scale;
			var pointElementOptions = me.chart.options.elements.point;
			var pointPosition = scale.getPointPositionForValue(index, dataset.data[index]);

			helpers.extend(point, {
				// Utility
				_datasetIndex: me.index,
				_index: index,
				_scale: scale,

				// Desired view properties
				_model: {
					x: reset ? scale.xCenter : pointPosition.x, // value not used in dataset scale, but we want a consistent API between scales
					y: reset ? scale.yCenter : pointPosition.y,

					// Appearance
					tension: custom.tension ? custom.tension : helpers.getValueOrDefault(dataset.tension, me.chart.options.elements.line.tension),
					radius: custom.radius ? custom.radius : helpers.getValueAtIndexOrDefault(dataset.pointRadius, index, pointElementOptions.radius),
					backgroundColor: custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.pointBackgroundColor, index, pointElementOptions.backgroundColor),
					borderColor: custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.pointBorderColor, index, pointElementOptions.borderColor),
					borderWidth: custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.pointBorderWidth, index, pointElementOptions.borderWidth),
					pointStyle: custom.pointStyle ? custom.pointStyle : helpers.getValueAtIndexOrDefault(dataset.pointStyle, index, pointElementOptions.pointStyle),

					// Tooltip
					hitRadius: custom.hitRadius ? custom.hitRadius : helpers.getValueAtIndexOrDefault(dataset.hitRadius, index, pointElementOptions.hitRadius)
				}
			});

			point._model.skip = custom.skip ? custom.skip : (isNaN(point._model.x) || isNaN(point._model.y));
		},
		updateBezierControlPoints: function() {
			var chartArea = this.chart.chartArea;
			var meta = this.getMeta();

			helpers.each(meta.data, function(point, index) {
				var model = point._model;
				var controlPoints = helpers.splineCurve(
					helpers.previousItem(meta.data, index, true)._model,
					model,
					helpers.nextItem(meta.data, index, true)._model,
					model.tension
				);

				// Prevent the bezier going outside of the bounds of the graph
				model.controlPointPreviousX = Math.max(Math.min(controlPoints.previous.x, chartArea.right), chartArea.left);
				model.controlPointPreviousY = Math.max(Math.min(controlPoints.previous.y, chartArea.bottom), chartArea.top);

				model.controlPointNextX = Math.max(Math.min(controlPoints.next.x, chartArea.right), chartArea.left);
				model.controlPointNextY = Math.max(Math.min(controlPoints.next.y, chartArea.bottom), chartArea.top);

				// Now pivot the point for animation
				point.pivot();
			});
		},

		draw: function(ease) {
			var meta = this.getMeta();
			var easingDecimal = ease || 1;

			// Transition Point Locations
			helpers.each(meta.data, function(point, index) {
				point.transition(easingDecimal);
			});

			// Transition and Draw the line
			meta.dataset.transition(easingDecimal).draw();

			// Draw the points
			helpers.each(meta.data, function(point) {
				point.draw();
			});
		},

		setHoverStyle: function(point) {
			// Point
			var dataset = this.chart.data.datasets[point._datasetIndex];
			var custom = point.custom || {};
			var index = point._index;
			var model = point._model;

			model.radius = custom.hoverRadius ? custom.hoverRadius : helpers.getValueAtIndexOrDefault(dataset.pointHoverRadius, index, this.chart.options.elements.point.hoverRadius);
			model.backgroundColor = custom.hoverBackgroundColor ? custom.hoverBackgroundColor : helpers.getValueAtIndexOrDefault(dataset.pointHoverBackgroundColor, index, helpers.getHoverColor(model.backgroundColor));
			model.borderColor = custom.hoverBorderColor ? custom.hoverBorderColor : helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderColor, index, helpers.getHoverColor(model.borderColor));
			model.borderWidth = custom.hoverBorderWidth ? custom.hoverBorderWidth : helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderWidth, index, model.borderWidth);
		},

		removeHoverStyle: function(point) {
			var dataset = this.chart.data.datasets[point._datasetIndex];
			var custom = point.custom || {};
			var index = point._index;
			var model = point._model;
			var pointElementOptions = this.chart.options.elements.point;

			model.radius = custom.radius ? custom.radius : helpers.getValueAtIndexOrDefault(dataset.radius, index, pointElementOptions.radius);
			model.backgroundColor = custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.pointBackgroundColor, index, pointElementOptions.backgroundColor);
			model.borderColor = custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.pointBorderColor, index, pointElementOptions.borderColor);
			model.borderWidth = custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.pointBorderWidth, index, pointElementOptions.borderWidth);
		}
	});
};

},{}],21:[function(require,module,exports){
/*global window: false */
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.global.animation = {
		duration: 1000,
		easing: "easeOutQuart",
		onProgress: helpers.noop,
		onComplete: helpers.noop
	};

	Chart.Animation = Chart.Element.extend({
		currentStep: null, // the current animation step
		numSteps: 60, // default number of steps
		easing: "", // the easing to use for this animation
		render: null, // render function used by the animation service

		onAnimationProgress: null, // user specified callback to fire on each step of the animation
		onAnimationComplete: null // user specified callback to fire when the animation finishes
	});

	Chart.animationService = {
		frameDuration: 17,
		animations: [],
		dropFrames: 0,
		request: null,
		addAnimation: function(chartInstance, animationObject, duration, lazy) {
			var me = this;

			if (!lazy) {
				chartInstance.animating = true;
			}

			for (var index = 0; index < me.animations.length; ++index) {
				if (me.animations[index].chartInstance === chartInstance) {
					// replacing an in progress animation
					me.animations[index].animationObject = animationObject;
					return;
				}
			}

			me.animations.push({
				chartInstance: chartInstance,
				animationObject: animationObject
			});

			// If there are no animations queued, manually kickstart a digest, for lack of a better word
			if (me.animations.length === 1) {
				me.requestAnimationFrame();
			}
		},
		// Cancel the animation for a given chart instance
		cancelAnimation: function(chartInstance) {
			var index = helpers.findIndex(this.animations, function(animationWrapper) {
				return animationWrapper.chartInstance === chartInstance;
			});

			if (index !== -1) {
				this.animations.splice(index, 1);
				chartInstance.animating = false;
			}
		},
		requestAnimationFrame: function() {
			var me = this;
			if (me.request === null) {
				// Skip animation frame requests until the active one is executed.
				// This can happen when processing mouse events, e.g. 'mousemove'
				// and 'mouseout' events will trigger multiple renders.
				me.request = helpers.requestAnimFrame.call(window, function() {
					me.request = null;
					me.startDigest();
				});
			}
		},
		startDigest: function() {
			var me = this;

			var startTime = Date.now();
			var framesToDrop = 0;

			if (me.dropFrames > 1) {
				framesToDrop = Math.floor(me.dropFrames);
				me.dropFrames = me.dropFrames % 1;
			}

			var i = 0;
			while (i < me.animations.length) {
				if (me.animations[i].animationObject.currentStep === null) {
					me.animations[i].animationObject.currentStep = 0;
				}

				me.animations[i].animationObject.currentStep += 1 + framesToDrop;

				if (me.animations[i].animationObject.currentStep > me.animations[i].animationObject.numSteps) {
					me.animations[i].animationObject.currentStep = me.animations[i].animationObject.numSteps;
				}

				me.animations[i].animationObject.render(me.animations[i].chartInstance, me.animations[i].animationObject);
				if (me.animations[i].animationObject.onAnimationProgress && me.animations[i].animationObject.onAnimationProgress.call) {
					me.animations[i].animationObject.onAnimationProgress.call(me.animations[i].chartInstance, me.animations[i]);
				}

				if (me.animations[i].animationObject.currentStep === me.animations[i].animationObject.numSteps) {
					if (me.animations[i].animationObject.onAnimationComplete && me.animations[i].animationObject.onAnimationComplete.call) {
						me.animations[i].animationObject.onAnimationComplete.call(me.animations[i].chartInstance, me.animations[i]);
					}

					// executed the last frame. Remove the animation.
					me.animations[i].chartInstance.animating = false;

					me.animations.splice(i, 1);
				} else {
					++i;
				}
			}

			var endTime = Date.now();
			var dropFrames = (endTime - startTime) / me.frameDuration;

			me.dropFrames += dropFrames;

			// Do we have more stuff to animate?
			if (me.animations.length > 0) {
				me.requestAnimationFrame();
			}
		}
	};
};
},{}],22:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;
	//Create a dictionary of chart types, to allow for extension of existing types
	Chart.types = {};

	//Store a reference to each instance - allowing us to globally resize chart instances on window resize.
	//Destroy method on the chart will remove the instance of the chart from this reference.
	Chart.instances = {};

	// Controllers available for dataset visualization eg. bar, line, slice, etc.
	Chart.controllers = {};

	/**
	 * @class Chart.Controller
	 * The main controller of a chart.
	 */
	Chart.Controller = function(instance) {

		this.chart = instance;
		this.config = instance.config;
		this.options = this.config.options = helpers.configMerge(Chart.defaults.global, Chart.defaults[this.config.type], this.config.options || {});
		this.id = helpers.uid();

		Object.defineProperty(this, 'data', {
			get: function() {
				return this.config.data;
			}
		});

		//Add the chart instance to the global namespace
		Chart.instances[this.id] = this;

		if (this.options.responsive) {
			// Silent resize before chart draws
			this.resize(true);
		}

		this.initialize();

		return this;
	};

	helpers.extend(Chart.Controller.prototype, /** @lends Chart.Controller */ {

		initialize: function initialize() {
			var me = this;
			// Before init plugin notification
			Chart.plugins.notify('beforeInit', [me]);

			me.bindEvents();

			// Make sure controllers are built first so that each dataset is bound to an axis before the scales
			// are built
			me.ensureScalesHaveIDs();
			me.buildOrUpdateControllers();
			me.buildScales();
			me.updateLayout();
			me.resetElements();
			me.initToolTip();
			me.update();

			// After init plugin notification
			Chart.plugins.notify('afterInit', [me]);

			return me;
		},

		clear: function clear() {
			helpers.clear(this.chart);
			return this;
		},

		stop: function stop() {
			// Stops any current animation loop occuring
			Chart.animationService.cancelAnimation(this);
			return this;
		},

		resize: function resize(silent) {
			var me = this;
			var chart = me.chart;
			var canvas = chart.canvas;
			var newWidth = helpers.getMaximumWidth(canvas);
			var aspectRatio = chart.aspectRatio;
			var newHeight = (me.options.maintainAspectRatio && isNaN(aspectRatio) === false && isFinite(aspectRatio) && aspectRatio !== 0) ? newWidth / aspectRatio : helpers.getMaximumHeight(canvas);

			var sizeChanged = chart.width !== newWidth || chart.height !== newHeight;

			if (!sizeChanged) {
				return me;
			}

			canvas.width = chart.width = newWidth;
			canvas.height = chart.height = newHeight;

			helpers.retinaScale(chart);

			// Notify any plugins about the resize
			var newSize = { width: newWidth, height: newHeight };
			Chart.plugins.notify('resize', [me, newSize]);

			// Notify of resize
			if (me.options.onResize) {
				me.options.onResize(me, newSize);
			}

			if (!silent) {
				me.stop();
				me.update(me.options.responsiveAnimationDuration);
			}

			return me;
		},

		ensureScalesHaveIDs: function ensureScalesHaveIDs() {
			var options = this.options;
			var scalesOptions = options.scales || {};
			var scaleOptions = options.scale;

			helpers.each(scalesOptions.xAxes, function(xAxisOptions, index) {
				xAxisOptions.id = xAxisOptions.id || ('x-axis-' + index);
			});

			helpers.each(scalesOptions.yAxes, function(yAxisOptions, index) {
				yAxisOptions.id = yAxisOptions.id || ('y-axis-' + index);
			});

			if (scaleOptions) {
				scaleOptions.id = scaleOptions.id || 'scale';
			}
		},

		/**
		 * Builds a map of scale ID to scale object for future lookup.
		 */
		buildScales: function buildScales() {
			var me = this;
			var options = me.options;
			var scales = me.scales = {};
			var items = [];

			if (options.scales) {
				items = items.concat(
					(options.scales.xAxes || []).map(function(xAxisOptions) {
						return { options: xAxisOptions, dtype: 'category' }; }),
					(options.scales.yAxes || []).map(function(yAxisOptions) {
						return { options: yAxisOptions, dtype: 'linear' }; }));
			}

			if (options.scale) {
				items.push({ options: options.scale, dtype: 'radialLinear', isDefault: true });
			}

			helpers.each(items, function(item, index) {
				var scaleOptions = item.options;
				var scaleType = helpers.getValueOrDefault(scaleOptions.type, item.dtype);
				var scaleClass = Chart.scaleService.getScaleConstructor(scaleType);
				if (!scaleClass) {
					return;
				}

				var scale = new scaleClass({
					id: scaleOptions.id,
					options: scaleOptions,
					ctx: me.chart.ctx,
					chart: me
				});

				scales[scale.id] = scale;

				// TODO(SB): I think we should be able to remove this custom case (options.scale)
				// and consider it as a regular scale part of the "scales"" map only! This would
				// make the logic easier and remove some useless? custom code.
				if (item.isDefault) {
					me.scale = scale;
				}
			});

			Chart.scaleService.addScalesToLayout(this);
		},

		updateLayout: function() {
			Chart.layoutService.update(this, this.chart.width, this.chart.height);
		},

		buildOrUpdateControllers: function buildOrUpdateControllers() {
			var me = this;
			var types = [];
			var newControllers = [];

			helpers.each(me.data.datasets, function(dataset, datasetIndex) {
				var meta = me.getDatasetMeta(datasetIndex);
				if (!meta.type) {
					meta.type = dataset.type || me.config.type;
				}

				types.push(meta.type);

				if (meta.controller) {
					meta.controller.updateIndex(datasetIndex);
				} else {
					meta.controller = new Chart.controllers[meta.type](me, datasetIndex);
					newControllers.push(meta.controller);
				}
			}, me);

			if (types.length > 1) {
				for (var i = 1; i < types.length; i++) {
					if (types[i] !== types[i - 1]) {
						me.isCombo = true;
						break;
					}
				}
			}

			return newControllers;
		},

		resetElements: function resetElements() {
			var me = this;
			helpers.each(me.data.datasets, function(dataset, datasetIndex) {
				me.getDatasetMeta(datasetIndex).controller.reset();
			}, me);
		},

		update: function update(animationDuration, lazy) {
			var me = this;
			Chart.plugins.notify('beforeUpdate', [me]);

			// In case the entire data object changed
			me.tooltip._data = me.data;

			// Make sure dataset controllers are updated and new controllers are reset
			var newControllers = me.buildOrUpdateControllers();

			// Make sure all dataset controllers have correct meta data counts
			helpers.each(me.data.datasets, function(dataset, datasetIndex) {
				me.getDatasetMeta(datasetIndex).controller.buildOrUpdateElements();
			}, me);

			Chart.layoutService.update(me, me.chart.width, me.chart.height);

			// Apply changes to the dataets that require the scales to have been calculated i.e BorderColor chages
			Chart.plugins.notify('afterScaleUpdate', [me]);

			// Can only reset the new controllers after the scales have been updated
			helpers.each(newControllers, function(controller) {
				controller.reset();
			});

			me.updateDatasets();

			// Do this before render so that any plugins that need final scale updates can use it
			Chart.plugins.notify('afterUpdate', [me]);

			me.render(animationDuration, lazy);
		},

		/**
		 * @method beforeDatasetsUpdate
		 * @description Called before all datasets are updated. If a plugin returns false,
		 * the datasets update will be cancelled until another chart update is triggered.
		 * @param {Object} instance the chart instance being updated.
		 * @returns {Boolean} false to cancel the datasets update.
		 * @memberof Chart.PluginBase
		 * @since version 2.1.5
		 * @instance
		 */

		/**
		 * @method afterDatasetsUpdate
		 * @description Called after all datasets have been updated. Note that this
		 * extension will not be called if the datasets update has been cancelled.
		 * @param {Object} instance the chart instance being updated.
		 * @memberof Chart.PluginBase
		 * @since version 2.1.5
		 * @instance
		 */

		/**
		 * Updates all datasets unless a plugin returns false to the beforeDatasetsUpdate
		 * extension, in which case no datasets will be updated and the afterDatasetsUpdate
		 * notification will be skipped.
		 * @protected
		 * @instance
		 */
		updateDatasets: function() {
			var me = this;
			var i, ilen;

			if (Chart.plugins.notify('beforeDatasetsUpdate', [ me ])) {
				for (i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
					me.getDatasetMeta(i).controller.update();
				}

				Chart.plugins.notify('afterDatasetsUpdate', [ me ]);
			}
		},

		render: function render(duration, lazy) {
			var me = this;
			Chart.plugins.notify('beforeRender', [me]);

			var animationOptions = me.options.animation;
			if (animationOptions && ((typeof duration !== 'undefined' && duration !== 0) || (typeof duration === 'undefined' && animationOptions.duration !== 0))) {
				var animation = new Chart.Animation();
				animation.numSteps = (duration || animationOptions.duration) / 16.66; //60 fps
				animation.easing = animationOptions.easing;

				// render function
				animation.render = function(chartInstance, animationObject) {
					var easingFunction = helpers.easingEffects[animationObject.easing];
					var stepDecimal = animationObject.currentStep / animationObject.numSteps;
					var easeDecimal = easingFunction(stepDecimal);

					chartInstance.draw(easeDecimal, stepDecimal, animationObject.currentStep);
				};

				// user events
				animation.onAnimationProgress = animationOptions.onProgress;
				animation.onAnimationComplete = animationOptions.onComplete;

				Chart.animationService.addAnimation(me, animation, duration, lazy);
			} else {
				me.draw();
				if (animationOptions && animationOptions.onComplete && animationOptions.onComplete.call) {
					animationOptions.onComplete.call(me);
				}
			}
			return me;
		},

		draw: function(ease) {
			var me = this;
			var easingDecimal = ease || 1;
			me.clear();

			Chart.plugins.notify('beforeDraw', [me, easingDecimal]);

			// Draw all the scales
			helpers.each(me.boxes, function(box) {
				box.draw(me.chartArea);
			}, me);
			if (me.scale) {
				me.scale.draw();
			}

			Chart.plugins.notify('beforeDatasetsDraw', [me, easingDecimal]);

			// Draw each dataset via its respective controller (reversed to support proper line stacking)
			helpers.each(me.data.datasets, function(dataset, datasetIndex) {
				if (me.isDatasetVisible(datasetIndex)) {
					me.getDatasetMeta(datasetIndex).controller.draw(ease);
				}
			}, me, true);

			Chart.plugins.notify('afterDatasetsDraw', [me, easingDecimal]);

			// Finally draw the tooltip
			me.tooltip.transition(easingDecimal).draw();

			Chart.plugins.notify('afterDraw', [me, easingDecimal]);
		},

		// Get the single element that was clicked on
		// @return : An object containing the dataset index and element index of the matching element. Also contains the rectangle that was draw
		getElementAtEvent: function(e) {
			var me = this;
			var eventPosition = helpers.getRelativePosition(e, me.chart);
			var elementsArray = [];

			helpers.each(me.data.datasets, function(dataset, datasetIndex) {
				if (me.isDatasetVisible(datasetIndex)) {
					var meta = me.getDatasetMeta(datasetIndex);
					helpers.each(meta.data, function(element, index) {
						if (element.inRange(eventPosition.x, eventPosition.y)) {
							elementsArray.push(element);
							return elementsArray;
						}
					});
				}
			});

			return elementsArray;
		},

		getElementsAtEvent: function(e) {
			var me = this;
			var eventPosition = helpers.getRelativePosition(e, me.chart);
			var elementsArray = [];

			var found = (function() {
				if (me.data.datasets) {
					for (var i = 0; i < me.data.datasets.length; i++) {
						var meta = me.getDatasetMeta(i);
						if (me.isDatasetVisible(i)) {
							for (var j = 0; j < meta.data.length; j++) {
								if (meta.data[j].inRange(eventPosition.x, eventPosition.y)) {
									return meta.data[j];
								}
							}
						}
					}
				}
			}).call(me);

			if (!found) {
				return elementsArray;
			}

			helpers.each(me.data.datasets, function(dataset, datasetIndex) {
				if (me.isDatasetVisible(datasetIndex)) {
					var meta = me.getDatasetMeta(datasetIndex);
					elementsArray.push(meta.data[found._index]);
				}
			}, me);

			return elementsArray;
		},

		getElementsAtEventForMode: function(e, mode) {
			var me = this;
			switch (mode) {
			case 'single':
				return me.getElementAtEvent(e);
			case 'label':
				return me.getElementsAtEvent(e);
			case 'dataset':
				return me.getDatasetAtEvent(e);
			default:
				return e;
			}
		},

		getDatasetAtEvent: function(e) {
			var elementsArray = this.getElementAtEvent(e);

			if (elementsArray.length > 0) {
				elementsArray = this.getDatasetMeta(elementsArray[0]._datasetIndex).data;
			}

			return elementsArray;
		},

		getDatasetMeta: function(datasetIndex) {
			var me = this;
			var dataset = me.data.datasets[datasetIndex];
			if (!dataset._meta) {
				dataset._meta = {};
			}

			var meta = dataset._meta[me.id];
			if (!meta) {
				meta = dataset._meta[me.id] = {
				type: null,
				data: [],
				dataset: null,
				controller: null,
				hidden: null,			// See isDatasetVisible() comment
				xAxisID: null,
				yAxisID: null
			};
			}

			return meta;
		},

		getVisibleDatasetCount: function() {
			var count = 0;
			for (var i = 0, ilen = this.data.datasets.length; i<ilen; ++i) {
				 if (this.isDatasetVisible(i)) {
					count++;
				}
			}
			return count;
		},

		isDatasetVisible: function(datasetIndex) {
			var meta = this.getDatasetMeta(datasetIndex);

			// meta.hidden is a per chart dataset hidden flag override with 3 states: if true or false,
			// the dataset.hidden value is ignored, else if null, the dataset hidden state is returned.
			return typeof meta.hidden === 'boolean'? !meta.hidden : !this.data.datasets[datasetIndex].hidden;
		},

		generateLegend: function generateLegend() {
			return this.options.legendCallback(this);
		},

		destroy: function destroy() {
			var me = this;
			me.stop();
			me.clear();
			helpers.unbindEvents(me, me.events);
			helpers.removeResizeListener(me.chart.canvas.parentNode);

			// Reset canvas height/width attributes
			var canvas = me.chart.canvas;
			canvas.width = me.chart.width;
			canvas.height = me.chart.height;

			// if we scaled the canvas in response to a devicePixelRatio !== 1, we need to undo that transform here
			if (me.chart.originalDevicePixelRatio !== undefined) {
				me.chart.ctx.scale(1 / me.chart.originalDevicePixelRatio, 1 / me.chart.originalDevicePixelRatio);
			}

			// Reset to the old style since it may have been changed by the device pixel ratio changes
			canvas.style.width = me.chart.originalCanvasStyleWidth;
			canvas.style.height = me.chart.originalCanvasStyleHeight;

			Chart.plugins.notify('destroy', [me]);

			delete Chart.instances[me.id];
		},

		toBase64Image: function toBase64Image() {
			return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments);
		},

		initToolTip: function initToolTip() {
			var me = this;
			me.tooltip = new Chart.Tooltip({
				_chart: me.chart,
				_chartInstance: me,
				_data: me.data,
				_options: me.options.tooltips
			}, me);
		},

		bindEvents: function bindEvents() {
			var me = this;
			helpers.bindEvents(me, me.options.events, function(evt) {
				me.eventHandler(evt);
			});
		},

		updateHoverStyle: function(elements, mode, enabled) {
			var method = enabled? 'setHoverStyle' : 'removeHoverStyle';
			var element, i, ilen;

			switch (mode) {
			case 'single':
				elements = [ elements[0] ];
				break;
			case 'label':
			case 'dataset':
				// elements = elements;
				break;
			default:
				// unsupported mode
				return;
			}

			for (i=0, ilen=elements.length; i<ilen; ++i) {
				element = elements[i];
				if (element) {
					this.getDatasetMeta(element._datasetIndex).controller[method](element);
				}
			}
		},

		eventHandler: function eventHandler(e) {
			var me = this;
			var tooltip = me.tooltip;
			var options = me.options || {};
			var hoverOptions = options.hover;
			var tooltipsOptions = options.tooltips;

			me.lastActive = me.lastActive || [];
			me.lastTooltipActive = me.lastTooltipActive || [];

			// Find Active Elements for hover and tooltips
			if (e.type === 'mouseout') {
				me.active = [];
				me.tooltipActive = [];
			} else {
				me.active = me.getElementsAtEventForMode(e, hoverOptions.mode);
				me.tooltipActive =  me.getElementsAtEventForMode(e, tooltipsOptions.mode);
			}

			// On Hover hook
			if (hoverOptions.onHover) {
				hoverOptions.onHover.call(me, me.active);
			}

			if (e.type === 'mouseup' || e.type === 'click') {
				if (options.onClick) {
					options.onClick.call(me, e, me.active);
				}
				if (me.legend && me.legend.handleEvent) {
					me.legend.handleEvent(e);
				}
			}

			// Remove styling for last active (even if it may still be active)
			if (me.lastActive.length) {
				me.updateHoverStyle(me.lastActive, hoverOptions.mode, false);
			}

			// Built in hover styling
			if (me.active.length && hoverOptions.mode) {
				me.updateHoverStyle(me.active, hoverOptions.mode, true);
			}

			// Built in Tooltips
			if (tooltipsOptions.enabled || tooltipsOptions.custom) {
				tooltip.initialize();
				tooltip._active = me.tooltipActive;
				tooltip.update(true);
			}

			// Hover animations
			tooltip.pivot();

			if (!me.animating) {
				// If entering, leaving, or changing elements, animate the change via pivot
				if (!helpers.arrayEquals(me.active, me.lastActive) ||
					!helpers.arrayEquals(me.tooltipActive, me.lastTooltipActive)) {

					me.stop();

					if (tooltipsOptions.enabled || tooltipsOptions.custom) {
						tooltip.update(true);
					}

					// We only need to render at this point. Updating will cause scales to be
					// recomputed generating flicker & using more memory than necessary.
					me.render(hoverOptions.animationDuration, true);
				}
			}

			// Remember Last Actives
			me.lastActive = me.active;
			me.lastTooltipActive = me.tooltipActive;
			return me;
		}
	});
};

},{}],23:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;
	var noop = helpers.noop;

	// Base class for all dataset controllers (line, bar, etc)
	Chart.DatasetController = function(chart, datasetIndex) {
		this.initialize.call(this, chart, datasetIndex);
	};

	helpers.extend(Chart.DatasetController.prototype, {

		/**
		 * Element type used to generate a meta dataset (e.g. Chart.element.Line).
		 * @type {Chart.core.element}
		 */
		datasetElementType: null,

		/**
		 * Element type used to generate a meta data (e.g. Chart.element.Point).
		 * @type {Chart.core.element}
		 */
		dataElementType: null,

		initialize: function(chart, datasetIndex) {
			var me = this;
			me.chart = chart;
			me.index = datasetIndex;
			me.linkScales();
			me.addElements();
		},

		updateIndex: function(datasetIndex) {
			this.index = datasetIndex;
		},

		linkScales: function() {
			var me = this;
			var meta = me.getMeta();
			var dataset = me.getDataset();

			if (meta.xAxisID === null) {
				meta.xAxisID = dataset.xAxisID || me.chart.options.scales.xAxes[0].id;
			}
			if (meta.yAxisID === null) {
				meta.yAxisID = dataset.yAxisID || me.chart.options.scales.yAxes[0].id;
			}
		},

		getDataset: function() {
			return this.chart.data.datasets[this.index];
		},

		getMeta: function() {
			return this.chart.getDatasetMeta(this.index);
		},

		getScaleForId: function(scaleID) {
			return this.chart.scales[scaleID];
		},

		reset: function() {
			this.update(true);
		},

		createMetaDataset: function() {
			var me = this;
			var type = me.datasetElementType;
			return type && new type({
				_chart: me.chart.chart,
				_datasetIndex: me.index
			});
		},

		createMetaData: function(index) {
			var me = this;
			var type = me.dataElementType;
			return type && new type({
				_chart: me.chart.chart,
				_datasetIndex: me.index,
				_index: index
			});
		},

		addElements: function() {
			var me = this;
			var meta = me.getMeta();
			var data = me.getDataset().data || [];
			var metaData = meta.data;
			var i, ilen;

			for (i=0, ilen=data.length; i<ilen; ++i) {
				metaData[i] = metaData[i] || me.createMetaData(meta, i);
			}

			meta.dataset = meta.dataset || me.createMetaDataset();
		},

		addElementAndReset: function(index) {
			var me = this;
			var element = me.createMetaData(index);
			me.getMeta().data.splice(index, 0, element);
			me.updateElement(element, index, true);
		},

		buildOrUpdateElements: function buildOrUpdateElements() {
			// Handle the number of data points changing
			var meta = this.getMeta(),
				md = meta.data,
				numData = this.getDataset().data.length,
				numMetaData = md.length;

			// Make sure that we handle number of datapoints changing
			if (numData < numMetaData) {
				// Remove excess bars for data points that have been removed
				md.splice(numData, numMetaData - numData);
			} else if (numData > numMetaData) {
				// Add new elements
				for (var index = numMetaData; index < numData; ++index) {
					this.addElementAndReset(index);
				}
			}
		},

		update: noop,

		draw: function(ease) {
			var easingDecimal = ease || 1;
			helpers.each(this.getMeta().data, function(element, index) {
				element.transition(easingDecimal).draw();
			});
		},

		removeHoverStyle: function(element, elementOpts) {
			var dataset = this.chart.data.datasets[element._datasetIndex],
				index = element._index,
				custom = element.custom || {},
				valueOrDefault = helpers.getValueAtIndexOrDefault,
				color = helpers.color,
				model = element._model;

			model.backgroundColor = custom.backgroundColor ? custom.backgroundColor : valueOrDefault(dataset.backgroundColor, index, elementOpts.backgroundColor);
			model.borderColor = custom.borderColor ? custom.borderColor : valueOrDefault(dataset.borderColor, index, elementOpts.borderColor);
			model.borderWidth = custom.borderWidth ? custom.borderWidth : valueOrDefault(dataset.borderWidth, index, elementOpts.borderWidth);
		},

		setHoverStyle: function(element) {
			var dataset = this.chart.data.datasets[element._datasetIndex],
				index = element._index,
				custom = element.custom || {},
				valueOrDefault = helpers.getValueAtIndexOrDefault,
				color = helpers.color,
				getHoverColor = helpers.getHoverColor,
				model = element._model;

			model.backgroundColor = custom.hoverBackgroundColor ? custom.hoverBackgroundColor : valueOrDefault(dataset.hoverBackgroundColor, index, getHoverColor(model.backgroundColor));
			model.borderColor = custom.hoverBorderColor ? custom.hoverBorderColor : valueOrDefault(dataset.hoverBorderColor, index, getHoverColor(model.borderColor));
			model.borderWidth = custom.hoverBorderWidth ? custom.hoverBorderWidth : valueOrDefault(dataset.hoverBorderWidth, index, model.borderWidth);
		}
	});

	Chart.DatasetController.extend = helpers.inherits;
};
},{}],24:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

  var helpers = Chart.helpers;

  Chart.elements = {};

  Chart.Element = function(configuration) {
    helpers.extend(this, configuration);
    this.initialize.apply(this, arguments);
  };

  helpers.extend(Chart.Element.prototype, {

    initialize: function() {
      this.hidden = false;
    },

    pivot: function() {
      var me = this;
      if (!me._view) {
        me._view = helpers.clone(me._model);
      }
      me._start = helpers.clone(me._view);
      return me;
    },

    transition: function(ease) {
      var me = this;
      
      if (!me._view) {
        me._view = helpers.clone(me._model);
      }

      // No animation -> No Transition
      if (ease === 1) {
        me._view = me._model;
        me._start = null;
        return me;
      }

      if (!me._start) {
        me.pivot();
      }

      helpers.each(me._model, function(value, key) {

        if (key[0] === '_') {
          // Only non-underscored properties
        }

        // Init if doesn't exist
        else if (!me._view.hasOwnProperty(key)) {
          if (typeof value === 'number' && !isNaN(me._view[key])) {
            me._view[key] = value * ease;
          } else {
            me._view[key] = value;
          }
        }

        // No unnecessary computations
        else if (value === me._view[key]) {
          // It's the same! Woohoo!
        }

        // Color transitions if possible
        else if (typeof value === 'string') {
          try {
            var color = helpers.color(me._model[key]).mix(helpers.color(me._start[key]), ease);
            me._view[key] = color.rgbString();
          } catch (err) {
            me._view[key] = value;
          }
        }
        // Number transitions
        else if (typeof value === 'number') {
          var startVal = me._start[key] !== undefined && isNaN(me._start[key]) === false ? me._start[key] : 0;
          me._view[key] = ((me._model[key] - startVal) * ease) + startVal;
        }
        // Everything else
        else {
          me._view[key] = value;
        }
      }, me);

      return me;
    },

    tooltipPosition: function() {
      return {
        x: this._model.x,
        y: this._model.y
      };
    },

    hasValue: function() {
      return helpers.isNumber(this._model.x) && helpers.isNumber(this._model.y);
    }
  });

  Chart.Element.extend = helpers.inherits;

};

},{}],25:[function(require,module,exports){
/*global window: false */
/*global document: false */
"use strict";

var color = require(3);

module.exports = function(Chart) {
	//Global Chart helpers object for utility methods and classes
	var helpers = Chart.helpers = {};

	//-- Basic js utility methods
	helpers.each = function(loopable, callback, self, reverse) {
		// Check to see if null or undefined firstly.
		var i, len;
		if (helpers.isArray(loopable)) {
			len = loopable.length;
			if (reverse) {
				for (i = len - 1; i >= 0; i--) {
					callback.call(self, loopable[i], i);
				}
			} else {
				for (i = 0; i < len; i++) {
					callback.call(self, loopable[i], i);
				}
			}
		} else if (typeof loopable === 'object') {
			var keys = Object.keys(loopable);
			len = keys.length;
			for (i = 0; i < len; i++) {
				callback.call(self, loopable[keys[i]], keys[i]);
			}
		}
	};
	helpers.clone = function(obj) {
		var objClone = {};
		helpers.each(obj, function(value, key) {
			if (helpers.isArray(value)) {
				objClone[key] = value.slice(0);
			} else if (typeof value === 'object' && value !== null) {
				objClone[key] = helpers.clone(value);
			} else {
				objClone[key] = value;
			}
		});
		return objClone;
	};
	helpers.extend = function(base) {
		var setFn = function(value, key) { base[key] = value; };
		for (var i = 1, ilen = arguments.length; i < ilen; i++) {
			helpers.each(arguments[i], setFn);
		}
		return base;
	};
	// Need a special merge function to chart configs since they are now grouped
	helpers.configMerge = function(_base) {
		var base = helpers.clone(_base);
		helpers.each(Array.prototype.slice.call(arguments, 1), function(extension) {
			helpers.each(extension, function(value, key) {
				if (key === 'scales') {
					// Scale config merging is complex. Add out own function here for that
					base[key] = helpers.scaleMerge(base.hasOwnProperty(key) ? base[key] : {}, value);

				} else if (key === 'scale') {
					// Used in polar area & radar charts since there is only one scale
					base[key] = helpers.configMerge(base.hasOwnProperty(key) ? base[key] : {}, Chart.scaleService.getScaleDefaults(value.type), value);
				} else if (base.hasOwnProperty(key) && helpers.isArray(base[key]) && helpers.isArray(value)) {
					// In this case we have an array of objects replacing another array. Rather than doing a strict replace,
					// merge. This allows easy scale option merging
					var baseArray = base[key];

					helpers.each(value, function(valueObj, index) {

						if (index < baseArray.length) {
							if (typeof baseArray[index] === 'object' && baseArray[index] !== null && typeof valueObj === 'object' && valueObj !== null) {
								// Two objects are coming together. Do a merge of them.
								baseArray[index] = helpers.configMerge(baseArray[index], valueObj);
							} else {
								// Just overwrite in this case since there is nothing to merge
								baseArray[index] = valueObj;
							}
						} else {
							baseArray.push(valueObj); // nothing to merge
						}
					});

				} else if (base.hasOwnProperty(key) && typeof base[key] === "object" && base[key] !== null && typeof value === "object") {
					// If we are overwriting an object with an object, do a merge of the properties.
					base[key] = helpers.configMerge(base[key], value);

				} else {
					// can just overwrite the value in this case
					base[key] = value;
				}
			});
		});

		return base;
	};
	helpers.scaleMerge = function(_base, extension) {
		var base = helpers.clone(_base);

		helpers.each(extension, function(value, key) {
			if (key === 'xAxes' || key === 'yAxes') {
				// These properties are arrays of items
				if (base.hasOwnProperty(key)) {
					helpers.each(value, function(valueObj, index) {
						var axisType = helpers.getValueOrDefault(valueObj.type, key === 'xAxes' ? 'category' : 'linear');
						var axisDefaults = Chart.scaleService.getScaleDefaults(axisType);
						if (index >= base[key].length || !base[key][index].type) {
							base[key].push(helpers.configMerge(axisDefaults, valueObj));
						} else if (valueObj.type && valueObj.type !== base[key][index].type) {
							// Type changed. Bring in the new defaults before we bring in valueObj so that valueObj can override the correct scale defaults
							base[key][index] = helpers.configMerge(base[key][index], axisDefaults, valueObj);
						} else {
							// Type is the same
							base[key][index] = helpers.configMerge(base[key][index], valueObj);
						}
					});
				} else {
					base[key] = [];
					helpers.each(value, function(valueObj) {
						var axisType = helpers.getValueOrDefault(valueObj.type, key === 'xAxes' ? 'category' : 'linear');
						base[key].push(helpers.configMerge(Chart.scaleService.getScaleDefaults(axisType), valueObj));
					});
				}
			} else if (base.hasOwnProperty(key) && typeof base[key] === "object" && base[key] !== null && typeof value === "object") {
				// If we are overwriting an object with an object, do a merge of the properties.
				base[key] = helpers.configMerge(base[key], value);

			} else {
				// can just overwrite the value in this case
				base[key] = value;
			}
		});

		return base;
	};
	helpers.getValueAtIndexOrDefault = function(value, index, defaultValue) {
		if (value === undefined || value === null) {
			return defaultValue;
		}

		if (helpers.isArray(value)) {
			return index < value.length ? value[index] : defaultValue;
		}

		return value;
	};
	helpers.getValueOrDefault = function(value, defaultValue) {
		return value === undefined ? defaultValue : value;
	};
	helpers.indexOf = Array.prototype.indexOf?
		function(array, item) { return array.indexOf(item); } :
		function(array, item) {
			for (var i = 0, ilen = array.length; i < ilen; ++i) {
				if (array[i] === item) {
					return i;
				}
			}
			return -1;
		};
	helpers.where = function(collection, filterCallback) {
		if (helpers.isArray(collection) && Array.prototype.filter) {
			return collection.filter(filterCallback);
		} else {
			var filtered = [];

			helpers.each(collection, function(item) {
				if (filterCallback(item)) {
					filtered.push(item);
				}
			});

			return filtered;
		}
	};
	helpers.findIndex = Array.prototype.findIndex?
		function(array, callback, scope) { return array.findIndex(callback, scope); } :
		function(array, callback, scope) {
			scope = scope === undefined? array : scope;
			for (var i = 0, ilen = array.length; i < ilen; ++i) {
				if (callback.call(scope, array[i], i, array)) {
					return i;
				}
			}
			return -1;
		};
	helpers.findNextWhere = function(arrayToSearch, filterCallback, startIndex) {
		// Default to start of the array
		if (startIndex === undefined || startIndex === null) {
			startIndex = -1;
		}
		for (var i = startIndex + 1; i < arrayToSearch.length; i++) {
			var currentItem = arrayToSearch[i];
			if (filterCallback(currentItem)) {
				return currentItem;
			}
		}
	};
	helpers.findPreviousWhere = function(arrayToSearch, filterCallback, startIndex) {
		// Default to end of the array
		if (startIndex === undefined || startIndex === null) {
			startIndex = arrayToSearch.length;
		}
		for (var i = startIndex - 1; i >= 0; i--) {
			var currentItem = arrayToSearch[i];
			if (filterCallback(currentItem)) {
				return currentItem;
			}
		}
	};
	helpers.inherits = function(extensions) {
		//Basic javascript inheritance based on the model created in Backbone.js
		var parent = this;
		var ChartElement = (extensions && extensions.hasOwnProperty("constructor")) ? extensions.constructor : function() {
			return parent.apply(this, arguments);
		};

		var Surrogate = function() {
			this.constructor = ChartElement;
		};
		Surrogate.prototype = parent.prototype;
		ChartElement.prototype = new Surrogate();

		ChartElement.extend = helpers.inherits;

		if (extensions) {
			helpers.extend(ChartElement.prototype, extensions);
		}

		ChartElement.__super__ = parent.prototype;

		return ChartElement;
	};
	helpers.noop = function() {};
	helpers.uid = (function() {
		var id = 0;
		return function() {
			return id++;
		};
	})();
	//-- Math methods
	helpers.isNumber = function(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	};
	helpers.almostEquals = function(x, y, epsilon) {
		return Math.abs(x - y) < epsilon;
	};
	helpers.max = function(array) {
		return array.reduce(function(max, value) {
			if (!isNaN(value)) {
				return Math.max(max, value);
			} else {
				return max;
			}
		}, Number.NEGATIVE_INFINITY);
	};
	helpers.min = function(array) {
		return array.reduce(function(min, value) {
			if (!isNaN(value)) {
				return Math.min(min, value);
			} else {
				return min;
			}
		}, Number.POSITIVE_INFINITY);
	};
	helpers.sign = Math.sign?
		function(x) { return Math.sign(x); } :
		function(x) {
			x = +x; // convert to a number
			if (x === 0 || isNaN(x)) {
				return x;
			}
			return x > 0 ? 1 : -1;
		};
	helpers.log10 = Math.log10?
		function(x) { return Math.log10(x); } :
		function(x) {
			return Math.log(x) / Math.LN10;
		};
	helpers.toRadians = function(degrees) {
		return degrees * (Math.PI / 180);
	};
	helpers.toDegrees = function(radians) {
		return radians * (180 / Math.PI);
	};
	// Gets the angle from vertical upright to the point about a centre.
	helpers.getAngleFromPoint = function(centrePoint, anglePoint) {
		var distanceFromXCenter = anglePoint.x - centrePoint.x,
			distanceFromYCenter = anglePoint.y - centrePoint.y,
			radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);

		var angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);

		if (angle < (-0.5 * Math.PI)) {
			angle += 2.0 * Math.PI; // make sure the returned angle is in the range of (-PI/2, 3PI/2]
		}

		return {
			angle: angle,
			distance: radialDistanceFromCenter
		};
	};
	helpers.aliasPixel = function(pixelWidth) {
		return (pixelWidth % 2 === 0) ? 0 : 0.5;
	};
	helpers.splineCurve = function(firstPoint, middlePoint, afterPoint, t) {
		//Props to Rob Spencer at scaled innovation for his post on splining between points
		//http://scaledinnovation.com/analytics/splines/aboutSplines.html

		// This function must also respect "skipped" points

		var previous = firstPoint.skip ? middlePoint : firstPoint,
			current = middlePoint,
			next = afterPoint.skip ? middlePoint : afterPoint;

		var d01 = Math.sqrt(Math.pow(current.x - previous.x, 2) + Math.pow(current.y - previous.y, 2));
		var d12 = Math.sqrt(Math.pow(next.x - current.x, 2) + Math.pow(next.y - current.y, 2));

		var s01 = d01 / (d01 + d12);
		var s12 = d12 / (d01 + d12);

		// If all points are the same, s01 & s02 will be inf
		s01 = isNaN(s01) ? 0 : s01;
		s12 = isNaN(s12) ? 0 : s12;

		var fa = t * s01; // scaling factor for triangle Ta
		var fb = t * s12;

		return {
			previous: {
				x: current.x - fa * (next.x - previous.x),
				y: current.y - fa * (next.y - previous.y)
			},
			next: {
				x: current.x + fb * (next.x - previous.x),
				y: current.y + fb * (next.y - previous.y)
			}
		};
	};
	helpers.nextItem = function(collection, index, loop) {
		if (loop) {
			return index >= collection.length - 1 ? collection[0] : collection[index + 1];
		}

		return index >= collection.length - 1 ? collection[collection.length - 1] : collection[index + 1];
	};
	helpers.previousItem = function(collection, index, loop) {
		if (loop) {
			return index <= 0 ? collection[collection.length - 1] : collection[index - 1];
		}
		return index <= 0 ? collection[0] : collection[index - 1];
	};
	// Implementation of the nice number algorithm used in determining where axis labels will go
	helpers.niceNum = function(range, round) {
		var exponent = Math.floor(helpers.log10(range));
		var fraction = range / Math.pow(10, exponent);
		var niceFraction;

		if (round) {
			if (fraction < 1.5) {
				niceFraction = 1;
			} else if (fraction < 3) {
				niceFraction = 2;
			} else if (fraction < 7) {
				niceFraction = 5;
			} else {
				niceFraction = 10;
			}
		} else {
			if (fraction <= 1.0) {
				niceFraction = 1;
			} else if (fraction <= 2) {
				niceFraction = 2;
			} else if (fraction <= 5) {
				niceFraction = 5;
			} else {
				niceFraction = 10;
			}
		}

		return niceFraction * Math.pow(10, exponent);
	};
	//Easing functions adapted from Robert Penner's easing equations
	//http://www.robertpenner.com/easing/
	var easingEffects = helpers.easingEffects = {
		linear: function(t) {
			return t;
		},
		easeInQuad: function(t) {
			return t * t;
		},
		easeOutQuad: function(t) {
			return -1 * t * (t - 2);
		},
		easeInOutQuad: function(t) {
			if ((t /= 1 / 2) < 1) {
				return 1 / 2 * t * t;
			}
			return -1 / 2 * ((--t) * (t - 2) - 1);
		},
		easeInCubic: function(t) {
			return t * t * t;
		},
		easeOutCubic: function(t) {
			return 1 * ((t = t / 1 - 1) * t * t + 1);
		},
		easeInOutCubic: function(t) {
			if ((t /= 1 / 2) < 1) {
				return 1 / 2 * t * t * t;
			}
			return 1 / 2 * ((t -= 2) * t * t + 2);
		},
		easeInQuart: function(t) {
			return t * t * t * t;
		},
		easeOutQuart: function(t) {
			return -1 * ((t = t / 1 - 1) * t * t * t - 1);
		},
		easeInOutQuart: function(t) {
			if ((t /= 1 / 2) < 1) {
				return 1 / 2 * t * t * t * t;
			}
			return -1 / 2 * ((t -= 2) * t * t * t - 2);
		},
		easeInQuint: function(t) {
			return 1 * (t /= 1) * t * t * t * t;
		},
		easeOutQuint: function(t) {
			return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
		},
		easeInOutQuint: function(t) {
			if ((t /= 1 / 2) < 1) {
				return 1 / 2 * t * t * t * t * t;
			}
			return 1 / 2 * ((t -= 2) * t * t * t * t + 2);
		},
		easeInSine: function(t) {
			return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
		},
		easeOutSine: function(t) {
			return 1 * Math.sin(t / 1 * (Math.PI / 2));
		},
		easeInOutSine: function(t) {
			return -1 / 2 * (Math.cos(Math.PI * t / 1) - 1);
		},
		easeInExpo: function(t) {
			return (t === 0) ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
		},
		easeOutExpo: function(t) {
			return (t === 1) ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
		},
		easeInOutExpo: function(t) {
			if (t === 0) {
				return 0;
			}
			if (t === 1) {
				return 1;
			}
			if ((t /= 1 / 2) < 1) {
				return 1 / 2 * Math.pow(2, 10 * (t - 1));
			}
			return 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
		},
		easeInCirc: function(t) {
			if (t >= 1) {
				return t;
			}
			return -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
		},
		easeOutCirc: function(t) {
			return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
		},
		easeInOutCirc: function(t) {
			if ((t /= 1 / 2) < 1) {
				return -1 / 2 * (Math.sqrt(1 - t * t) - 1);
			}
			return 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
		},
		easeInElastic: function(t) {
			var s = 1.70158;
			var p = 0;
			var a = 1;
			if (t === 0) {
				return 0;
			}
			if ((t /= 1) === 1) {
				return 1;
			}
			if (!p) {
				p = 1 * 0.3;
			}
			if (a < Math.abs(1)) {
				a = 1;
				s = p / 4;
			} else {
				s = p / (2 * Math.PI) * Math.asin(1 / a);
			}
			return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
		},
		easeOutElastic: function(t) {
			var s = 1.70158;
			var p = 0;
			var a = 1;
			if (t === 0) {
				return 0;
			}
			if ((t /= 1) === 1) {
				return 1;
			}
			if (!p) {
				p = 1 * 0.3;
			}
			if (a < Math.abs(1)) {
				a = 1;
				s = p / 4;
			} else {
				s = p / (2 * Math.PI) * Math.asin(1 / a);
			}
			return a * Math.pow(2, -10 * t) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) + 1;
		},
		easeInOutElastic: function(t) {
			var s = 1.70158;
			var p = 0;
			var a = 1;
			if (t === 0) {
				return 0;
			}
			if ((t /= 1 / 2) === 2) {
				return 1;
			}
			if (!p) {
				p = 1 * (0.3 * 1.5);
			}
			if (a < Math.abs(1)) {
				a = 1;
				s = p / 4;
			} else {
				s = p / (2 * Math.PI) * Math.asin(1 / a);
			}
			if (t < 1) {
				return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
			}
			return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) * 0.5 + 1;
		},
		easeInBack: function(t) {
			var s = 1.70158;
			return 1 * (t /= 1) * t * ((s + 1) * t - s);
		},
		easeOutBack: function(t) {
			var s = 1.70158;
			return 1 * ((t = t / 1 - 1) * t * ((s + 1) * t + s) + 1);
		},
		easeInOutBack: function(t) {
			var s = 1.70158;
			if ((t /= 1 / 2) < 1) {
				return 1 / 2 * (t * t * (((s *= (1.525)) + 1) * t - s));
			}
			return 1 / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
		},
		easeInBounce: function(t) {
			return 1 - easingEffects.easeOutBounce(1 - t);
		},
		easeOutBounce: function(t) {
			if ((t /= 1) < (1 / 2.75)) {
				return 1 * (7.5625 * t * t);
			} else if (t < (2 / 2.75)) {
				return 1 * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75);
			} else if (t < (2.5 / 2.75)) {
				return 1 * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375);
			} else {
				return 1 * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375);
			}
		},
		easeInOutBounce: function(t) {
			if (t < 1 / 2) {
				return easingEffects.easeInBounce(t * 2) * 0.5;
			}
			return easingEffects.easeOutBounce(t * 2 - 1) * 0.5 + 1 * 0.5;
		}
	};
	//Request animation polyfill - http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
	helpers.requestAnimFrame = (function() {
		return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(callback) {
				return window.setTimeout(callback, 1000 / 60);
			};
	})();
	helpers.cancelAnimFrame = (function() {
		return window.cancelAnimationFrame ||
			window.webkitCancelAnimationFrame ||
			window.mozCancelAnimationFrame ||
			window.oCancelAnimationFrame ||
			window.msCancelAnimationFrame ||
			function(callback) {
				return window.clearTimeout(callback, 1000 / 60);
			};
	})();
	//-- DOM methods
	helpers.getRelativePosition = function(evt, chart) {
		var mouseX, mouseY;
		var e = evt.originalEvent || evt,
			canvas = evt.currentTarget || evt.srcElement,
			boundingRect = canvas.getBoundingClientRect();

		var touches = e.touches;
		if (touches && touches.length > 0) {
			mouseX = touches[0].clientX;
			mouseY = touches[0].clientY;

		} else {
			mouseX = e.clientX;
			mouseY = e.clientY;
		}

		// Scale mouse coordinates into canvas coordinates
		// by following the pattern laid out by 'jerryj' in the comments of
		// http://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
		var paddingLeft = parseFloat(helpers.getStyle(canvas, 'padding-left'));
		var paddingTop = parseFloat(helpers.getStyle(canvas, 'padding-top'));
		var paddingRight = parseFloat(helpers.getStyle(canvas, 'padding-right'));
		var paddingBottom = parseFloat(helpers.getStyle(canvas, 'padding-bottom'));
		var width = boundingRect.right - boundingRect.left - paddingLeft - paddingRight;
		var height = boundingRect.bottom - boundingRect.top - paddingTop - paddingBottom;

		// We divide by the current device pixel ratio, because the canvas is scaled up by that amount in each direction. However
		// the backend model is in unscaled coordinates. Since we are going to deal with our model coordinates, we go back here
		mouseX = Math.round((mouseX - boundingRect.left - paddingLeft) / (width) * canvas.width / chart.currentDevicePixelRatio);
		mouseY = Math.round((mouseY - boundingRect.top - paddingTop) / (height) * canvas.height / chart.currentDevicePixelRatio);

		return {
			x: mouseX,
			y: mouseY
		};

	};
	helpers.addEvent = function(node, eventType, method) {
		if (node.addEventListener) {
			node.addEventListener(eventType, method);
		} else if (node.attachEvent) {
			node.attachEvent("on" + eventType, method);
		} else {
			node["on" + eventType] = method;
		}
	};
	helpers.removeEvent = function(node, eventType, handler) {
		if (node.removeEventListener) {
			node.removeEventListener(eventType, handler, false);
		} else if (node.detachEvent) {
			node.detachEvent("on" + eventType, handler);
		} else {
			node["on" + eventType] = helpers.noop;
		}
	};
	helpers.bindEvents = function(chartInstance, arrayOfEvents, handler) {
		// Create the events object if it's not already present
		var events = chartInstance.events = chartInstance.events || {};

		helpers.each(arrayOfEvents, function(eventName) {
			events[eventName] = function() {
				handler.apply(chartInstance, arguments);
			};
			helpers.addEvent(chartInstance.chart.canvas, eventName, events[eventName]);
		});
	};
	helpers.unbindEvents = function(chartInstance, arrayOfEvents) {
		var canvas = chartInstance.chart.canvas;
		helpers.each(arrayOfEvents, function(handler, eventName) {
			helpers.removeEvent(canvas, eventName, handler);
		});
	};

	// Private helper function to convert max-width/max-height values that may be percentages into a number
	function parseMaxStyle(styleValue, node, parentProperty) {
		var valueInPixels;
		if (typeof(styleValue) === 'string') {
			valueInPixels = parseInt(styleValue, 10);

			if (styleValue.indexOf('%') != -1) {
				// percentage * size in dimension
				valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
			}
		} else {
			valueInPixels = styleValue;
		}

		return valueInPixels;
	}

	/**
	 * Returns if the given value contains an effective constraint.
	 * @private
	 */
	function isConstrainedValue(value) {
		return value !== undefined &&  value !== null && value !== 'none';
	}

	// Private helper to get a constraint dimension
	// @param domNode : the node to check the constraint on
	// @param maxStyle : the style that defines the maximum for the direction we are using (maxWidth / maxHeight)
	// @param percentageProperty : property of parent to use when calculating width as a percentage
	// @see http://www.nathanaeljones.com/blog/2013/reading-max-width-cross-browser
	function getConstraintDimension(domNode, maxStyle, percentageProperty) {
		var view = document.defaultView;
		var parentNode = domNode.parentNode;
		var constrainedNode = view.getComputedStyle(domNode)[maxStyle];
		var constrainedContainer = view.getComputedStyle(parentNode)[maxStyle];
		var hasCNode = isConstrainedValue(constrainedNode);
		var hasCContainer = isConstrainedValue(constrainedContainer);
		var infinity = Number.POSITIVE_INFINITY;

		if (hasCNode || hasCContainer) {
			return Math.min(
				hasCNode? parseMaxStyle(constrainedNode, domNode, percentageProperty) : infinity,
				hasCContainer? parseMaxStyle(constrainedContainer, parentNode, percentageProperty) : infinity);
		}

		return 'none';
	}
	// returns Number or undefined if no constraint
	helpers.getConstraintWidth = function(domNode) {
		return getConstraintDimension(domNode, 'max-width', 'clientWidth');
	};
	// returns Number or undefined if no constraint
	helpers.getConstraintHeight = function(domNode) {
		return getConstraintDimension(domNode, 'max-height', 'clientHeight');
	};
	helpers.getMaximumWidth = function(domNode) {
		var container = domNode.parentNode;
		var padding = parseInt(helpers.getStyle(container, 'padding-left')) + parseInt(helpers.getStyle(container, 'padding-right'));
		var w = container.clientWidth - padding;
		var cw = helpers.getConstraintWidth(domNode);
		return isNaN(cw)? w : Math.min(w, cw);
	};
	helpers.getMaximumHeight = function(domNode) {
		var container = domNode.parentNode;
		var padding = parseInt(helpers.getStyle(container, 'padding-top')) + parseInt(helpers.getStyle(container, 'padding-bottom'));
		var h = container.clientHeight - padding;
		var ch = helpers.getConstraintHeight(domNode);
		return isNaN(ch)? h : Math.min(h, ch);
	};
	helpers.getStyle = function(el, property) {
		return el.currentStyle ?
			el.currentStyle[property] :
			document.defaultView.getComputedStyle(el, null).getPropertyValue(property);
	};
	helpers.retinaScale = function(chart) {
		var ctx = chart.ctx;
		var canvas = chart.canvas;
		var width = canvas.width;
		var height = canvas.height;
		var pixelRatio = chart.currentDevicePixelRatio = window.devicePixelRatio || 1;

		if (pixelRatio !== 1) {
			canvas.height = height * pixelRatio;
			canvas.width = width * pixelRatio;
			ctx.scale(pixelRatio, pixelRatio);

			// Store the device pixel ratio so that we can go backwards in `destroy`.
			// The devicePixelRatio changes with zoom, so there are no guarantees that it is the same
			// when destroy is called
			chart.originalDevicePixelRatio = chart.originalDevicePixelRatio || pixelRatio;
		}

		canvas.style.width = width + 'px';
		canvas.style.height = height + 'px';
	};
	//-- Canvas methods
	helpers.clear = function(chart) {
		chart.ctx.clearRect(0, 0, chart.width, chart.height);
	};
	helpers.fontString = function(pixelSize, fontStyle, fontFamily) {
		return fontStyle + " " + pixelSize + "px " + fontFamily;
	};
	helpers.longestText = function(ctx, font, arrayOfThings, cache) {
		cache = cache || {};
		var data = cache.data = cache.data || {};
		var gc = cache.garbageCollect = cache.garbageCollect || [];

		if (cache.font !== font) {
			data = cache.data = {};
			gc = cache.garbageCollect = [];
			cache.font = font;
		}

		ctx.font = font;
		var longest = 0;
		helpers.each(arrayOfThings, function(thing) {
			// Undefined strings and arrays should not be measured
			if (thing !== undefined && thing !== null && helpers.isArray(thing) !== true) {
				longest = helpers.measureText(ctx, data, gc, longest, thing);
			} else if (helpers.isArray(thing)) {
				// if it is an array lets measure each element
				// to do maybe simplify this function a bit so we can do this more recursively?
				helpers.each(thing, function(nestedThing) {
					// Undefined strings and arrays should not be measured
					if (nestedThing !== undefined && nestedThing !== null && !helpers.isArray(nestedThing)) {
						longest = helpers.measureText(ctx, data, gc, longest, nestedThing);
					}
				});
			}
		});

		var gcLen = gc.length / 2;
		if (gcLen > arrayOfThings.length) {
			for (var i = 0; i < gcLen; i++) {
				delete data[gc[i]];
			}
			gc.splice(0, gcLen);
		}
		return longest;
	};
	helpers.measureText = function (ctx, data, gc, longest, string) {
		var textWidth = data[string];
		if (!textWidth) {
			textWidth = data[string] = ctx.measureText(string).width;
			gc.push(string);
		}
		if (textWidth > longest) {
			longest = textWidth;
		}
		return longest;
	};
	helpers.numberOfLabelLines = function(arrayOfThings) {
		var numberOfLines = 1;
		helpers.each(arrayOfThings, function(thing) {
			if (helpers.isArray(thing)) {
				if (thing.length > numberOfLines) {
					numberOfLines = thing.length;
				}
			}
		});
		return numberOfLines;
	};
	helpers.drawRoundedRectangle = function(ctx, x, y, width, height, radius) {
		ctx.beginPath();
		ctx.moveTo(x + radius, y);
		ctx.lineTo(x + width - radius, y);
		ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
		ctx.lineTo(x + width, y + height - radius);
		ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
		ctx.lineTo(x + radius, y + height);
		ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
		ctx.lineTo(x, y + radius);
		ctx.quadraticCurveTo(x, y, x + radius, y);
		ctx.closePath();
	};
	helpers.color = function(c) {
		if (!color) {
			console.log('Color.js not found!');
			return c;
		}

		/* global CanvasGradient */
		if (c instanceof CanvasGradient) {
			return color(Chart.defaults.global.defaultColor);
		}

		return color(c);
	};
	helpers.addResizeListener = function(node, callback) {
		// Hide an iframe before the node
		var hiddenIframe = document.createElement('iframe');
		var hiddenIframeClass = 'chartjs-hidden-iframe';

		if (hiddenIframe.classlist) {
			// can use classlist
			hiddenIframe.classlist.add(hiddenIframeClass);
		} else {
			hiddenIframe.setAttribute('class', hiddenIframeClass);
		}

		// Set the style
		var style = hiddenIframe.style;
		style.width = '100%';
		style.display = 'block';
		style.border = 0;
		style.height = 0;
		style.margin = 0;
		style.position = 'absolute';
		style.left = 0;
		style.right = 0;
		style.top = 0;
		style.bottom = 0;

		// Insert the iframe so that contentWindow is available
		node.insertBefore(hiddenIframe, node.firstChild);

		(hiddenIframe.contentWindow || hiddenIframe).onresize = function() {
			if (callback) {
				callback();
			}
		};
	};
	helpers.removeResizeListener = function(node) {
		var hiddenIframe = node.querySelector('.chartjs-hidden-iframe');

		// Remove the resize detect iframe
		if (hiddenIframe) {
			hiddenIframe.parentNode.removeChild(hiddenIframe);
		}
	};
	helpers.isArray = Array.isArray?
		function(obj) { return Array.isArray(obj); } :
		function(obj) {
			return Object.prototype.toString.call(obj) === '[object Array]';
		};
	//! @see http://stackoverflow.com/a/14853974
	helpers.arrayEquals = function(a0, a1) {
		var i, ilen, v0, v1;

		if (!a0 || !a1 || a0.length != a1.length) {
			return false;
		}

		for (i = 0, ilen=a0.length; i < ilen; ++i) {
			v0 = a0[i];
			v1 = a1[i];

			if (v0 instanceof Array && v1 instanceof Array) {
				if (!helpers.arrayEquals(v0, v1)) {
					return false;
				}
			} else if (v0 != v1) {
				// NOTE: two different object instances will never be equal: {x:20} != {x:20}
				return false;
			}
		}

		return true;
	};
	helpers.callCallback = function(fn, args, _tArg) {
		if (fn && typeof fn.call === 'function') {
			fn.apply(_tArg, args);
		}
	};
	helpers.getHoverColor = function(color) {
		/* global CanvasPattern */
		return (color instanceof CanvasPattern) ?
			color :
			helpers.color(color).saturate(0.5).darken(0.1).rgbString();
	};
};

},{"3":3}],26:[function(require,module,exports){
"use strict";

module.exports = function() {

	//Occupy the global variable of Chart, and create a simple base class
	var Chart = function(context, config) {
		var me = this;
		var helpers = Chart.helpers;
		me.config = config;

		// Support a jQuery'd canvas element
		if (context.length && context[0].getContext) {
			context = context[0];
		}

		// Support a canvas domnode
		if (context.getContext) {
			context = context.getContext("2d");
		}

		me.ctx = context;
		me.canvas = context.canvas;

		context.canvas.style.display = context.canvas.style.display || 'block';

		// Figure out what the size of the chart will be.
		// If the canvas has a specified width and height, we use those else
		// we look to see if the canvas node has a CSS width and height.
		// If there is still no height, fill the parent container
		me.width = context.canvas.width || parseInt(helpers.getStyle(context.canvas, 'width'), 10) || helpers.getMaximumWidth(context.canvas);
		me.height = context.canvas.height || parseInt(helpers.getStyle(context.canvas, 'height'), 10) || helpers.getMaximumHeight(context.canvas);

		me.aspectRatio = me.width / me.height;

		if (isNaN(me.aspectRatio) || isFinite(me.aspectRatio) === false) {
			// If the canvas has no size, try and figure out what the aspect ratio will be.
			// Some charts prefer square canvases (pie, radar, etc). If that is specified, use that
			// else use the canvas default ratio of 2
			me.aspectRatio = config.aspectRatio !== undefined ? config.aspectRatio : 2;
		}

		// Store the original style of the element so we can set it back
		me.originalCanvasStyleWidth = context.canvas.style.width;
		me.originalCanvasStyleHeight = context.canvas.style.height;

		// High pixel density displays - multiply the size of the canvas height/width by the device pixel ratio, then scale.
		helpers.retinaScale(me);

		if (config) {
			me.controller = new Chart.Controller(me);
		}

		// Always bind this so that if the responsive state changes we still work
		helpers.addResizeListener(context.canvas.parentNode, function() {
			if (me.controller && me.controller.config.options.responsive) {
				me.controller.resize();
			}
		});

		return me.controller ? me.controller : me;

	};

	//Globally expose the defaults to allow for user updating/changing
	Chart.defaults = {
		global: {
			responsive: true,
			responsiveAnimationDuration: 0,
			maintainAspectRatio: true,
			events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
			hover: {
				onHover: null,
				mode: 'single',
				animationDuration: 400
			},
			onClick: null,
			defaultColor: 'rgba(0,0,0,0.1)',
			defaultFontColor: '#666',
			defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
			defaultFontSize: 12,
			defaultFontStyle: 'normal',
			showLines: true,

			// Element defaults defined in element extensions
			elements: {},

			// Legend callback string
			legendCallback: function(chart) {
				var text = [];
				text.push('<ul class="' + chart.id + '-legend">');
				for (var i = 0; i < chart.data.datasets.length; i++) {
					text.push('<li><span style="background-color:' + chart.data.datasets[i].backgroundColor + '"></span>');
					if (chart.data.datasets[i].label) {
						text.push(chart.data.datasets[i].label);
					}
					text.push('</li>');
				}
				text.push('</ul>');

				return text.join("");
			}
		}
	};

	Chart.Chart = Chart;

	return Chart;

};

},{}],27:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	// The layout service is very self explanatory.  It's responsible for the layout within a chart.
	// Scales, Legends and Plugins all rely on the layout service and can easily register to be placed anywhere they need
	// It is this service's responsibility of carrying out that layout.
	Chart.layoutService = {
		defaults: {},

		// Register a box to a chartInstance. A box is simply a reference to an object that requires layout. eg. Scales, Legend, Plugins.
		addBox: function(chartInstance, box) {
			if (!chartInstance.boxes) {
				chartInstance.boxes = [];
			}
			chartInstance.boxes.push(box);
		},

		removeBox: function(chartInstance, box) {
			if (!chartInstance.boxes) {
				return;
			}
			chartInstance.boxes.splice(chartInstance.boxes.indexOf(box), 1);
		},

		// The most important function
		update: function(chartInstance, width, height) {

			if (!chartInstance) {
				return;
			}

			var xPadding = 0;
			var yPadding = 0;

			var leftBoxes = helpers.where(chartInstance.boxes, function(box) {
				return box.options.position === "left";
			});
			var rightBoxes = helpers.where(chartInstance.boxes, function(box) {
				return box.options.position === "right";
			});
			var topBoxes = helpers.where(chartInstance.boxes, function(box) {
				return box.options.position === "top";
			});
			var bottomBoxes = helpers.where(chartInstance.boxes, function(box) {
				return box.options.position === "bottom";
			});

			// Boxes that overlay the chartarea such as the radialLinear scale
			var chartAreaBoxes = helpers.where(chartInstance.boxes, function(box) {
				return box.options.position === "chartArea";
			});

			// Ensure that full width boxes are at the very top / bottom
			topBoxes.sort(function(a, b) {
				return (b.options.fullWidth ? 1 : 0) - (a.options.fullWidth ? 1 : 0);
			});
			bottomBoxes.sort(function(a, b) {
				return (a.options.fullWidth ? 1 : 0) - (b.options.fullWidth ? 1 : 0);
			});

			// Essentially we now have any number of boxes on each of the 4 sides.
			// Our canvas looks like the following.
			// The areas L1 and L2 are the left axes. R1 is the right axis, T1 is the top axis and
			// B1 is the bottom axis
			// There are also 4 quadrant-like locations (left to right instead of clockwise) reserved for chart overlays
			// These locations are single-box locations only, when trying to register a chartArea location that is already taken,
			// an error will be thrown.
			//
			// |----------------------------------------------------|
			// |                  T1 (Full Width)                   |
			// |----------------------------------------------------|
			// |    |    |                 T2                  |    |
			// |    |----|-------------------------------------|----|
			// |    |    | C1 |                           | C2 |    |
			// |    |    |----|                           |----|    |
			// |    |    |                                     |    |
			// | L1 | L2 |           ChartArea (C0)            | R1 |
			// |    |    |                                     |    |
			// |    |    |----|                           |----|    |
			// |    |    | C3 |                           | C4 |    |
			// |    |----|-------------------------------------|----|
			// |    |    |                 B1                  |    |
			// |----------------------------------------------------|
			// |                  B2 (Full Width)                   |
			// |----------------------------------------------------|
			//
			// What we do to find the best sizing, we do the following
			// 1. Determine the minimum size of the chart area.
			// 2. Split the remaining width equally between each vertical axis
			// 3. Split the remaining height equally between each horizontal axis
			// 4. Give each layout the maximum size it can be. The layout will return it's minimum size
			// 5. Adjust the sizes of each axis based on it's minimum reported size.
			// 6. Refit each axis
			// 7. Position each axis in the final location
			// 8. Tell the chart the final location of the chart area
			// 9. Tell any axes that overlay the chart area the positions of the chart area

			// Step 1
			var chartWidth = width - (2 * xPadding);
			var chartHeight = height - (2 * yPadding);
			var chartAreaWidth = chartWidth / 2; // min 50%
			var chartAreaHeight = chartHeight / 2; // min 50%

			// Step 2
			var verticalBoxWidth = (width - chartAreaWidth) / (leftBoxes.length + rightBoxes.length);

			// Step 3
			var horizontalBoxHeight = (height - chartAreaHeight) / (topBoxes.length + bottomBoxes.length);

			// Step 4
			var maxChartAreaWidth = chartWidth;
			var maxChartAreaHeight = chartHeight;
			var minBoxSizes = [];

			helpers.each(leftBoxes.concat(rightBoxes, topBoxes, bottomBoxes), getMinimumBoxSize);

			function getMinimumBoxSize(box) {
				var minSize;
				var isHorizontal = box.isHorizontal();

				if (isHorizontal) {
					minSize = box.update(box.options.fullWidth ? chartWidth : maxChartAreaWidth, horizontalBoxHeight);
					maxChartAreaHeight -= minSize.height;
				} else {
					minSize = box.update(verticalBoxWidth, chartAreaHeight);
					maxChartAreaWidth -= minSize.width;
				}

				minBoxSizes.push({
					horizontal: isHorizontal,
					minSize: minSize,
					box: box
				});
			}

			// At this point, maxChartAreaHeight and maxChartAreaWidth are the size the chart area could
			// be if the axes are drawn at their minimum sizes.

			// Steps 5 & 6
			var totalLeftBoxesWidth = xPadding;
			var totalRightBoxesWidth = xPadding;
			var totalTopBoxesHeight = yPadding;
			var totalBottomBoxesHeight = yPadding;

			// Update, and calculate the left and right margins for the horizontal boxes
			helpers.each(leftBoxes.concat(rightBoxes), fitBox);

			helpers.each(leftBoxes, function(box) {
				totalLeftBoxesWidth += box.width;
			});

			helpers.each(rightBoxes, function(box) {
				totalRightBoxesWidth += box.width;
			});

			// Set the Left and Right margins for the horizontal boxes
			helpers.each(topBoxes.concat(bottomBoxes), fitBox);

			// Function to fit a box
			function fitBox(box) {
				var minBoxSize = helpers.findNextWhere(minBoxSizes, function(minBoxSize) {
					return minBoxSize.box === box;
				});

				if (minBoxSize) {
					if (box.isHorizontal()) {
						var scaleMargin = {
							left: totalLeftBoxesWidth,
							right: totalRightBoxesWidth,
							top: 0,
							bottom: 0
						};

						// Don't use min size here because of label rotation. When the labels are rotated, their rotation highly depends
						// on the margin. Sometimes they need to increase in size slightly
						box.update(box.options.fullWidth ? chartWidth : maxChartAreaWidth, chartHeight / 2, scaleMargin);
					} else {
						box.update(minBoxSize.minSize.width, maxChartAreaHeight);
					}
				}
			}

			// Figure out how much margin is on the top and bottom of the vertical boxes
			helpers.each(topBoxes, function(box) {
				totalTopBoxesHeight += box.height;
			});

			helpers.each(bottomBoxes, function(box) {
				totalBottomBoxesHeight += box.height;
			});

			// Let the left layout know the final margin
			helpers.each(leftBoxes.concat(rightBoxes), finalFitVerticalBox);

			function finalFitVerticalBox(box) {
				var minBoxSize = helpers.findNextWhere(minBoxSizes, function(minBoxSize) {
					return minBoxSize.box === box;
				});

				var scaleMargin = {
					left: 0,
					right: 0,
					top: totalTopBoxesHeight,
					bottom: totalBottomBoxesHeight
				};

				if (minBoxSize) {
					box.update(minBoxSize.minSize.width, maxChartAreaHeight, scaleMargin);
				}
			}

			// Recalculate because the size of each layout might have changed slightly due to the margins (label rotation for instance)
			totalLeftBoxesWidth = xPadding;
			totalRightBoxesWidth = xPadding;
			totalTopBoxesHeight = yPadding;
			totalBottomBoxesHeight = yPadding;

			helpers.each(leftBoxes, function(box) {
				totalLeftBoxesWidth += box.width;
			});

			helpers.each(rightBoxes, function(box) {
				totalRightBoxesWidth += box.width;
			});

			helpers.each(topBoxes, function(box) {
				totalTopBoxesHeight += box.height;
			});
			helpers.each(bottomBoxes, function(box) {
				totalBottomBoxesHeight += box.height;
			});

			// Figure out if our chart area changed. This would occur if the dataset layout label rotation
			// changed due to the application of the margins in step 6. Since we can only get bigger, this is safe to do
			// without calling `fit` again
			var newMaxChartAreaHeight = height - totalTopBoxesHeight - totalBottomBoxesHeight;
			var newMaxChartAreaWidth = width - totalLeftBoxesWidth - totalRightBoxesWidth;

			if (newMaxChartAreaWidth !== maxChartAreaWidth || newMaxChartAreaHeight !== maxChartAreaHeight) {
				helpers.each(leftBoxes, function(box) {
					box.height = newMaxChartAreaHeight;
				});

				helpers.each(rightBoxes, function(box) {
					box.height = newMaxChartAreaHeight;
				});

				helpers.each(topBoxes, function(box) {
					if (!box.options.fullWidth) {
						box.width = newMaxChartAreaWidth;
					}
				});

				helpers.each(bottomBoxes, function(box) {
					if (!box.options.fullWidth) {
						box.width = newMaxChartAreaWidth;
					}
				});

				maxChartAreaHeight = newMaxChartAreaHeight;
				maxChartAreaWidth = newMaxChartAreaWidth;
			}

			// Step 7 - Position the boxes
			var left = xPadding;
			var top = yPadding;
			var right = 0;
			var bottom = 0;

			helpers.each(leftBoxes.concat(topBoxes), placeBox);

			// Account for chart width and height
			left += maxChartAreaWidth;
			top += maxChartAreaHeight;

			helpers.each(rightBoxes, placeBox);
			helpers.each(bottomBoxes, placeBox);

			function placeBox(box) {
				if (box.isHorizontal()) {
					box.left = box.options.fullWidth ? xPadding : totalLeftBoxesWidth;
					box.right = box.options.fullWidth ? width - xPadding : totalLeftBoxesWidth + maxChartAreaWidth;
					box.top = top;
					box.bottom = top + box.height;

					// Move to next point
					top = box.bottom;

				} else {

					box.left = left;
					box.right = left + box.width;
					box.top = totalTopBoxesHeight;
					box.bottom = totalTopBoxesHeight + maxChartAreaHeight;

					// Move to next point
					left = box.right;
				}
			}

			// Step 8
			chartInstance.chartArea = {
				left: totalLeftBoxesWidth,
				top: totalTopBoxesHeight,
				right: totalLeftBoxesWidth + maxChartAreaWidth,
				bottom: totalTopBoxesHeight + maxChartAreaHeight
			};

			// Step 9
			helpers.each(chartAreaBoxes, function(box) {
				box.left = chartInstance.chartArea.left;
				box.top = chartInstance.chartArea.top;
				box.right = chartInstance.chartArea.right;
				box.bottom = chartInstance.chartArea.bottom;

				box.update(maxChartAreaWidth, maxChartAreaHeight);
			});
		}
	};
};

},{}],28:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;
	var noop = helpers.noop;

	Chart.defaults.global.legend = {

		display: true,
		position: 'top',
		fullWidth: true, // marks that this box should take the full width of the canvas (pushing down other boxes)
		reverse: false,

		// a callback that will handle
		onClick: function(e, legendItem) {
			var index = legendItem.datasetIndex;
			var ci = this.chart;
			var meta = ci.getDatasetMeta(index);

			// See controller.isDatasetVisible comment
			meta.hidden = meta.hidden === null? !ci.data.datasets[index].hidden : null;

			// We hid a dataset ... rerender the chart
			ci.update();
		},

		labels: {
			boxWidth: 40,
			padding: 10,
			// Generates labels shown in the legend
			// Valid properties to return:
			// text : text to display
			// fillStyle : fill of coloured box
			// strokeStyle: stroke of coloured box
			// hidden : if this legend item refers to a hidden item
			// lineCap : cap style for line
			// lineDash
			// lineDashOffset :
			// lineJoin :
			// lineWidth :
			generateLabels: function(chart) {
				var data = chart.data;
				return helpers.isArray(data.datasets) ? data.datasets.map(function(dataset, i) {
					return {
						text: dataset.label,
						fillStyle: (!helpers.isArray(dataset.backgroundColor) ? dataset.backgroundColor : dataset.backgroundColor[0]),
						hidden: !chart.isDatasetVisible(i),
						lineCap: dataset.borderCapStyle,
						lineDash: dataset.borderDash,
						lineDashOffset: dataset.borderDashOffset,
						lineJoin: dataset.borderJoinStyle,
						lineWidth: dataset.borderWidth,
						strokeStyle: dataset.borderColor,

						// Below is extra data used for toggling the datasets
						datasetIndex: i
					};
				}, this) : [];
			}
		}
	};

	Chart.Legend = Chart.Element.extend({

		initialize: function(config) {
			helpers.extend(this, config);

			// Contains hit boxes for each dataset (in dataset order)
			this.legendHitBoxes = [];

			// Are we in doughnut mode which has a different data type
			this.doughnutMode = false;
		},

		// These methods are ordered by lifecyle. Utilities then follow.
		// Any function defined here is inherited by all legend types.
		// Any function can be extended by the legend type

		beforeUpdate: noop,
		update: function(maxWidth, maxHeight, margins) {
			var me = this;

			// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
			me.beforeUpdate();

			// Absorb the master measurements
			me.maxWidth = maxWidth;
			me.maxHeight = maxHeight;
			me.margins = margins;

			// Dimensions
			me.beforeSetDimensions();
			me.setDimensions();
			me.afterSetDimensions();
			// Labels
			me.beforeBuildLabels();
			me.buildLabels();
			me.afterBuildLabels();

			// Fit
			me.beforeFit();
			me.fit();
			me.afterFit();
			//
			me.afterUpdate();

			return me.minSize;
		},
		afterUpdate: noop,

		//

		beforeSetDimensions: noop,
		setDimensions: function() {
			var me = this;
			// Set the unconstrained dimension before label rotation
			if (me.isHorizontal()) {
				// Reset position before calculating rotation
				me.width = me.maxWidth;
				me.left = 0;
				me.right = me.width;
			} else {
				me.height = me.maxHeight;

				// Reset position before calculating rotation
				me.top = 0;
				me.bottom = me.height;
			}

			// Reset padding
			me.paddingLeft = 0;
			me.paddingTop = 0;
			me.paddingRight = 0;
			me.paddingBottom = 0;

			// Reset minSize
			me.minSize = {
				width: 0,
				height: 0
			};
		},
		afterSetDimensions: noop,

		//

		beforeBuildLabels: noop,
		buildLabels: function() {
			var me = this;
			me.legendItems = me.options.labels.generateLabels.call(me, me.chart);
			if(me.options.reverse){
				me.legendItems.reverse();
			}
		},
		afterBuildLabels: noop,

		//

		beforeFit: noop,
		fit: function() {
			var me = this;
			var opts = me.options;
			var labelOpts = opts.labels;
			var display = opts.display;

			var ctx = me.ctx;

			var globalDefault = Chart.defaults.global,
				itemOrDefault = helpers.getValueOrDefault,
				fontSize = itemOrDefault(labelOpts.fontSize, globalDefault.defaultFontSize),
				fontStyle = itemOrDefault(labelOpts.fontStyle, globalDefault.defaultFontStyle),
				fontFamily = itemOrDefault(labelOpts.fontFamily, globalDefault.defaultFontFamily),
				labelFont = helpers.fontString(fontSize, fontStyle, fontFamily);

			// Reset hit boxes
			var hitboxes = me.legendHitBoxes = [];

			var minSize = me.minSize;
			var isHorizontal = me.isHorizontal();

			if (isHorizontal) {
				minSize.width = me.maxWidth; // fill all the width
				minSize.height = display ? 10 : 0;
			} else {
				minSize.width = display ? 10 : 0;
				minSize.height = me.maxHeight; // fill all the height
			}

			// Increase sizes here
			if (display) {
				ctx.font = labelFont;

				if (isHorizontal) {
					// Labels

					// Width of each line of legend boxes. Labels wrap onto multiple lines when there are too many to fit on one
					var lineWidths = me.lineWidths = [0];
					var totalHeight = me.legendItems.length ? fontSize + (labelOpts.padding) : 0;

					ctx.textAlign = "left";
					ctx.textBaseline = 'top';

					helpers.each(me.legendItems, function(legendItem, i) {
						var width = labelOpts.boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;
						if (lineWidths[lineWidths.length - 1] + width + labelOpts.padding >= me.width) {
							totalHeight += fontSize + (labelOpts.padding);
							lineWidths[lineWidths.length] = me.left;
						}

						// Store the hitbox width and height here. Final position will be updated in `draw`
						hitboxes[i] = {
							left: 0,
							top: 0,
							width: width,
							height: fontSize
						};

						lineWidths[lineWidths.length - 1] += width + labelOpts.padding;
					});

					minSize.height += totalHeight;

				} else {
					var vPadding = labelOpts.padding;
					var columnWidths = me.columnWidths = [];
					var totalWidth = labelOpts.padding;
					var currentColWidth = 0;
					var currentColHeight = 0;
					var itemHeight = fontSize + vPadding;

					helpers.each(me.legendItems, function(legendItem, i) {
						var itemWidth = labelOpts.boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;

						// If too tall, go to new column
						if (currentColHeight + itemHeight > minSize.height) {
							totalWidth += currentColWidth + labelOpts.padding;
							columnWidths.push(currentColWidth); // previous column width

							currentColWidth = 0;
							currentColHeight = 0;
						}

						// Get max width
						currentColWidth = Math.max(currentColWidth, itemWidth);
						currentColHeight += itemHeight;

						// Store the hitbox width and height here. Final position will be updated in `draw`
						hitboxes[i] = {
							left: 0,
							top: 0,
							width: itemWidth,
							height: fontSize
						};
					});

					totalWidth += currentColWidth;
					columnWidths.push(currentColWidth);
					minSize.width += totalWidth;
				}
			}

			me.width = minSize.width;
			me.height = minSize.height;
		},
		afterFit: noop,

		// Shared Methods
		isHorizontal: function() {
			return this.options.position === "top" || this.options.position === "bottom";
		},

		// Actualy draw the legend on the canvas
		draw: function() {
			var me = this;
			var opts = me.options;
			var labelOpts = opts.labels;
			var globalDefault = Chart.defaults.global,
				lineDefault = globalDefault.elements.line,
				legendWidth = me.width,
				legendHeight = me.height,
				lineWidths = me.lineWidths;

			if (opts.display) {
				var ctx = me.ctx,
					cursor,
					itemOrDefault = helpers.getValueOrDefault,
					fontColor = itemOrDefault(labelOpts.fontColor, globalDefault.defaultFontColor),
					fontSize = itemOrDefault(labelOpts.fontSize, globalDefault.defaultFontSize),
					fontStyle = itemOrDefault(labelOpts.fontStyle, globalDefault.defaultFontStyle),
					fontFamily = itemOrDefault(labelOpts.fontFamily, globalDefault.defaultFontFamily),
					labelFont = helpers.fontString(fontSize, fontStyle, fontFamily);

				// Canvas setup
				ctx.textAlign = "left";
				ctx.textBaseline = 'top';
				ctx.lineWidth = 0.5;
				ctx.strokeStyle = fontColor; // for strikethrough effect
				ctx.fillStyle = fontColor; // render in correct colour
				ctx.font = labelFont;

				var boxWidth = labelOpts.boxWidth,
					hitboxes = me.legendHitBoxes;

				// current position
				var drawLegendBox = function(x, y, legendItem) {
					// Set the ctx for the box
					ctx.save();

					ctx.fillStyle = itemOrDefault(legendItem.fillStyle, globalDefault.defaultColor);
					ctx.lineCap = itemOrDefault(legendItem.lineCap, lineDefault.borderCapStyle);
					ctx.lineDashOffset = itemOrDefault(legendItem.lineDashOffset, lineDefault.borderDashOffset);
					ctx.lineJoin = itemOrDefault(legendItem.lineJoin, lineDefault.borderJoinStyle);
					ctx.lineWidth = itemOrDefault(legendItem.lineWidth, lineDefault.borderWidth);
					ctx.strokeStyle = itemOrDefault(legendItem.strokeStyle, globalDefault.defaultColor);

					if (ctx.setLineDash) {
						// IE 9 and 10 do not support line dash
						ctx.setLineDash(itemOrDefault(legendItem.lineDash, lineDefault.borderDash));
					}

					// Draw the box
					ctx.strokeRect(x, y, boxWidth, fontSize);
					ctx.fillRect(x, y, boxWidth, fontSize);

					ctx.restore();
				};
				var fillText = function(x, y, legendItem, textWidth) {
					ctx.fillText(legendItem.text, boxWidth + (fontSize / 2) + x, y);

					if (legendItem.hidden) {
						// Strikethrough the text if hidden
						ctx.beginPath();
						ctx.lineWidth = 2;
						ctx.moveTo(boxWidth + (fontSize / 2) + x, y + (fontSize / 2));
						ctx.lineTo(boxWidth + (fontSize / 2) + x + textWidth, y + (fontSize / 2));
						ctx.stroke();
					}
				};

				// Horizontal
				var isHorizontal = me.isHorizontal();
				if (isHorizontal) {
					cursor = {
						x: me.left + ((legendWidth - lineWidths[0]) / 2),
						y: me.top + labelOpts.padding,
						line: 0
					};
				} else {
					cursor = {
						x: me.left + labelOpts.padding,
						y: me.top,
						line: 0
					};
				}

				var itemHeight = fontSize + labelOpts.padding;
				helpers.each(me.legendItems, function(legendItem, i) {
					var textWidth = ctx.measureText(legendItem.text).width,
						width = boxWidth + (fontSize / 2) + textWidth,
						x = cursor.x,
						y = cursor.y;

					if (isHorizontal) {
						if (x + width >= legendWidth) {
							y = cursor.y += fontSize + (labelOpts.padding);
							cursor.line++;
							x = cursor.x = me.left + ((legendWidth - lineWidths[cursor.line]) / 2);
						}
					} else {
						if (y + itemHeight > me.bottom) {
							x = cursor.x = x + me.columnWidths[cursor.line] + labelOpts.padding;
							y = cursor.y = me.top;
							cursor.line++;
						}
					}
					

					drawLegendBox(x, y, legendItem);

					hitboxes[i].left = x;
					hitboxes[i].top = y;

					// Fill the actual label
					fillText(x, y, legendItem, textWidth);

					if (isHorizontal) {
						cursor.x += width + (labelOpts.padding);
					} else {
						cursor.y += itemHeight;
					}
					
				});
			}
		},

		// Handle an event
		handleEvent: function(e) {
			var me = this;
			var position = helpers.getRelativePosition(e, me.chart.chart),
				x = position.x,
				y = position.y,
				opts = me.options;

			if (x >= me.left && x <= me.right && y >= me.top && y <= me.bottom) {
				// See if we are touching one of the dataset boxes
				var lh = me.legendHitBoxes;
				for (var i = 0; i < lh.length; ++i) {
					var hitBox = lh[i];

					if (x >= hitBox.left && x <= hitBox.left + hitBox.width && y >= hitBox.top && y <= hitBox.top + hitBox.height) {
						// Touching an element
						if (opts.onClick) {
							opts.onClick.call(me, e, me.legendItems[i]);
						}
						break;
					}
				}
			}
		}
	});

	// Register the legend plugin
	Chart.plugins.register({
		beforeInit: function(chartInstance) {
			var opts = chartInstance.options;
			var legendOpts = opts.legend;

			if (legendOpts) {
				chartInstance.legend = new Chart.Legend({
					ctx: chartInstance.chart.ctx,
					options: legendOpts,
					chart: chartInstance
				});

				Chart.layoutService.addBox(chartInstance, chartInstance.legend);
			}
		}
	});
};

},{}],29:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var noop = Chart.helpers.noop;

	/**
	 * The plugin service singleton
	 * @namespace Chart.plugins
	 * @since 2.1.0
	 */
	Chart.plugins = {
		_plugins: [],

		/**
		 * Registers the given plugin(s) if not already registered.
		 * @param {Array|Object} plugins plugin instance(s).
		 */
		register: function(plugins) {
			var p = this._plugins;
			([]).concat(plugins).forEach(function(plugin) {
				if (p.indexOf(plugin) === -1) {
					p.push(plugin);
				}
			});
		},

		/**
		 * Unregisters the given plugin(s) only if registered.
		 * @param {Array|Object} plugins plugin instance(s).
		 */
		unregister: function(plugins) {
			var p = this._plugins;
			([]).concat(plugins).forEach(function(plugin) {
				var idx = p.indexOf(plugin);
				if (idx !== -1) {
					p.splice(idx, 1);
				}
			});
		},

		/**
		 * Remove all registered p^lugins.
		 * @since 2.1.5
		 */
		clear: function() {
			this._plugins = [];
		},

		/**
		 * Returns the number of registered plugins?
		 * @returns {Number}
		 * @since 2.1.5
		 */
		count: function() {
			return this._plugins.length;
		},

		/**
		 * Returns all registered plugin intances.
		 * @returns {Array} array of plugin objects.
		 * @since 2.1.5
		 */
		getAll: function() {
			return this._plugins;
		},

		/**
		 * Calls registered plugins on the specified extension, with the given args. This
		 * method immediately returns as soon as a plugin explicitly returns false. The
		 * returned value can be used, for instance, to interrupt the current action.
		 * @param {String} extension the name of the plugin method to call (e.g. 'beforeUpdate').
		 * @param {Array} [args] extra arguments to apply to the extension call.
		 * @returns {Boolean} false if any of the plugins return false, else returns true.
		 */
		notify: function(extension, args) {
			var plugins = this._plugins;
			var ilen = plugins.length;
			var i, plugin;

			for (i=0; i<ilen; ++i) {
				plugin = plugins[i];
				if (typeof plugin[extension] === 'function') {
					if (plugin[extension].apply(plugin, args || []) === false) {
						return false;
					}
				}
			}

			return true;
		}
	};

	/**
	 * Plugin extension methods.
	 * @interface Chart.PluginBase
	 * @since 2.1.0
	 */
	Chart.PluginBase = Chart.Element.extend({
		// Called at start of chart init
		beforeInit: noop,

		// Called at end of chart init
		afterInit: noop,

		// Called at start of update
		beforeUpdate: noop,

		// Called at end of update
		afterUpdate: noop,

		// Called at start of draw
		beforeDraw: noop,

		// Called at end of draw
		afterDraw: noop,

		// Called during destroy
		destroy: noop
	});

	/**
	 * Provided for backward compatibility, use Chart.plugins instead
	 * @namespace Chart.pluginService
	 * @deprecated since version 2.1.5
	 * @todo remove me at version 3
	 */
	Chart.pluginService = Chart.plugins;
};

},{}],30:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.scale = {
		display: true,
		position: "left",

		// grid line settings
		gridLines: {
			display: true,
			color: "rgba(0, 0, 0, 0.1)",
			lineWidth: 1,
			drawBorder: true,
			drawOnChartArea: true,
			drawTicks: true,
			tickMarkLength: 10,
			zeroLineWidth: 1,
			zeroLineColor: "rgba(0,0,0,0.25)",
			offsetGridLines: false
		},

		// scale label
		scaleLabel: {
			// actual label
			labelString: '',

			// display property
			display: false
		},

		// label settings
		ticks: {
			beginAtZero: false,
			minRotation: 0,
			maxRotation: 50,
			mirror: false,
			padding: 10,
			reverse: false,
			display: true,
			autoSkip: true,
			autoSkipPadding: 0,
			labelOffset: 0,
			// We pass through arrays to be rendered as multiline labels, we convert Others to strings here.
			callback: function(value) {
				return helpers.isArray(value) ? value : '' + value;
			}
		}
	};

	Chart.Scale = Chart.Element.extend({

		// These methods are ordered by lifecyle. Utilities then follow.
		// Any function defined here is inherited by all scale types.
		// Any function can be extended by the scale type

		beforeUpdate: function() {
			helpers.callCallback(this.options.beforeUpdate, [this]);
		},
		update: function(maxWidth, maxHeight, margins) {
			var me = this;

			// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
			me.beforeUpdate();

			// Absorb the master measurements
			me.maxWidth = maxWidth;
			me.maxHeight = maxHeight;
			me.margins = helpers.extend({
				left: 0,
				right: 0,
				top: 0,
				bottom: 0
			}, margins);

			// Dimensions
			me.beforeSetDimensions();
			me.setDimensions();
			me.afterSetDimensions();

			// Data min/max
			me.beforeDataLimits();
			me.determineDataLimits();
			me.afterDataLimits();

			// Ticks
			me.beforeBuildTicks();
			me.buildTicks();
			me.afterBuildTicks();

			me.beforeTickToLabelConversion();
			me.convertTicksToLabels();
			me.afterTickToLabelConversion();

			// Tick Rotation
			me.beforeCalculateTickRotation();
			me.calculateTickRotation();
			me.afterCalculateTickRotation();
			// Fit
			me.beforeFit();
			me.fit();
			me.afterFit();
			//
			me.afterUpdate();

			return me.minSize;

		},
		afterUpdate: function() {
			helpers.callCallback(this.options.afterUpdate, [this]);
		},

		//

		beforeSetDimensions: function() {
			helpers.callCallback(this.options.beforeSetDimensions, [this]);
		},
		setDimensions: function() {
			var me = this;
			// Set the unconstrained dimension before label rotation
			if (me.isHorizontal()) {
				// Reset position before calculating rotation
				me.width = me.maxWidth;
				me.left = 0;
				me.right = me.width;
			} else {
				me.height = me.maxHeight;

				// Reset position before calculating rotation
				me.top = 0;
				me.bottom = me.height;
			}

			// Reset padding
			me.paddingLeft = 0;
			me.paddingTop = 0;
			me.paddingRight = 0;
			me.paddingBottom = 0;
		},
		afterSetDimensions: function() {
			helpers.callCallback(this.options.afterSetDimensions, [this]);
		},

		// Data limits
		beforeDataLimits: function() {
			helpers.callCallback(this.options.beforeDataLimits, [this]);
		},
		determineDataLimits: helpers.noop,
		afterDataLimits: function() {
			helpers.callCallback(this.options.afterDataLimits, [this]);
		},

		//
		beforeBuildTicks: function() {
			helpers.callCallback(this.options.beforeBuildTicks, [this]);
		},
		buildTicks: helpers.noop,
		afterBuildTicks: function() {
			helpers.callCallback(this.options.afterBuildTicks, [this]);
		},

		beforeTickToLabelConversion: function() {
			helpers.callCallback(this.options.beforeTickToLabelConversion, [this]);
		},
		convertTicksToLabels: function() {
			var me = this;
			// Convert ticks to strings
			me.ticks = me.ticks.map(function(numericalTick, index, ticks) {
					if (me.options.ticks.userCallback) {
						return me.options.ticks.userCallback(numericalTick, index, ticks);
					}
					return me.options.ticks.callback(numericalTick, index, ticks);
				},
				me);
		},
		afterTickToLabelConversion: function() {
			helpers.callCallback(this.options.afterTickToLabelConversion, [this]);
		},

		//

		beforeCalculateTickRotation: function() {
			helpers.callCallback(this.options.beforeCalculateTickRotation, [this]);
		},
		calculateTickRotation: function() {
			var me = this;
			var context = me.ctx;
			var globalDefaults = Chart.defaults.global;
			var optionTicks = me.options.ticks;

			//Get the width of each grid by calculating the difference
			//between x offsets between 0 and 1.
			var tickFontSize = helpers.getValueOrDefault(optionTicks.fontSize, globalDefaults.defaultFontSize);
			var tickFontStyle = helpers.getValueOrDefault(optionTicks.fontStyle, globalDefaults.defaultFontStyle);
			var tickFontFamily = helpers.getValueOrDefault(optionTicks.fontFamily, globalDefaults.defaultFontFamily);
			var tickLabelFont = helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);
			context.font = tickLabelFont;

			var firstWidth = context.measureText(me.ticks[0]).width;
			var lastWidth = context.measureText(me.ticks[me.ticks.length - 1]).width;
			var firstRotated;

			me.labelRotation = optionTicks.minRotation || 0;
			me.paddingRight = 0;
			me.paddingLeft = 0;

			if (me.options.display) {
				if (me.isHorizontal()) {
					me.paddingRight = lastWidth / 2 + 3;
					me.paddingLeft = firstWidth / 2 + 3;

					if (!me.longestTextCache) {
						me.longestTextCache = {};
					}
					var originalLabelWidth = helpers.longestText(context, tickLabelFont, me.ticks, me.longestTextCache);
					var labelWidth = originalLabelWidth;
					var cosRotation;
					var sinRotation;

					// Allow 3 pixels x2 padding either side for label readability
					// only the index matters for a dataset scale, but we want a consistent interface between scales
					var tickWidth = me.getPixelForTick(1) - me.getPixelForTick(0) - 6;

					//Max label rotation can be set or default to 90 - also act as a loop counter
					while (labelWidth > tickWidth && me.labelRotation < optionTicks.maxRotation) {
						cosRotation = Math.cos(helpers.toRadians(me.labelRotation));
						sinRotation = Math.sin(helpers.toRadians(me.labelRotation));

						firstRotated = cosRotation * firstWidth;

						// We're right aligning the text now.
						if (firstRotated + tickFontSize / 2 > me.yLabelWidth) {
							me.paddingLeft = firstRotated + tickFontSize / 2;
						}

						me.paddingRight = tickFontSize / 2;

						if (sinRotation * originalLabelWidth > me.maxHeight) {
							// go back one step
							me.labelRotation--;
							break;
						}

						me.labelRotation++;
						labelWidth = cosRotation * originalLabelWidth;
					}
				}
			}

			if (me.margins) {
				me.paddingLeft = Math.max(me.paddingLeft - me.margins.left, 0);
				me.paddingRight = Math.max(me.paddingRight - me.margins.right, 0);
			}
		},
		afterCalculateTickRotation: function() {
			helpers.callCallback(this.options.afterCalculateTickRotation, [this]);
		},

		//

		beforeFit: function() {
			helpers.callCallback(this.options.beforeFit, [this]);
		},
		fit: function() {
			var me = this;
			// Reset
			var minSize = me.minSize = {
				width: 0,
				height: 0
			};

			var opts = me.options;
			var globalDefaults = Chart.defaults.global;
			var tickOpts = opts.ticks;
			var scaleLabelOpts = opts.scaleLabel;
			var display = opts.display;
			var isHorizontal = me.isHorizontal();

			var tickFontSize = helpers.getValueOrDefault(tickOpts.fontSize, globalDefaults.defaultFontSize);
			var tickFontStyle = helpers.getValueOrDefault(tickOpts.fontStyle, globalDefaults.defaultFontStyle);
			var tickFontFamily = helpers.getValueOrDefault(tickOpts.fontFamily, globalDefaults.defaultFontFamily);
			var tickLabelFont = helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);

			var scaleLabelFontSize = helpers.getValueOrDefault(scaleLabelOpts.fontSize, globalDefaults.defaultFontSize);
			var scaleLabelFontStyle = helpers.getValueOrDefault(scaleLabelOpts.fontStyle, globalDefaults.defaultFontStyle);
			var scaleLabelFontFamily = helpers.getValueOrDefault(scaleLabelOpts.fontFamily, globalDefaults.defaultFontFamily);
			var scaleLabelFont = helpers.fontString(scaleLabelFontSize, scaleLabelFontStyle, scaleLabelFontFamily);

			var tickMarkLength = opts.gridLines.tickMarkLength;

			// Width
			if (isHorizontal) {
				// subtract the margins to line up with the chartArea if we are a full width scale
				minSize.width = me.isFullWidth() ? me.maxWidth - me.margins.left - me.margins.right : me.maxWidth;
			} else {
				minSize.width = display ? tickMarkLength : 0;
			}

			// height
			if (isHorizontal) {
				minSize.height = display ? tickMarkLength : 0;
			} else {
				minSize.height = me.maxHeight; // fill all the height
			}

			// Are we showing a title for the scale?
			if (scaleLabelOpts.display && display) {
				if (isHorizontal) {
					minSize.height += (scaleLabelFontSize * 1.5);
				} else {
					minSize.width += (scaleLabelFontSize * 1.5);
				}
			}

			if (tickOpts.display && display) {
				// Don't bother fitting the ticks if we are not showing them
				if (!me.longestTextCache) {
					me.longestTextCache = {};
				}

				var largestTextWidth = helpers.longestText(me.ctx, tickLabelFont, me.ticks, me.longestTextCache);
				var tallestLabelHeightInLines = helpers.numberOfLabelLines(me.ticks);
				var lineSpace = tickFontSize * 0.5;

				if (isHorizontal) {
					// A horizontal axis is more constrained by the height.
					me.longestLabelWidth = largestTextWidth;

					// TODO - improve this calculation
					var labelHeight = (Math.sin(helpers.toRadians(me.labelRotation)) * me.longestLabelWidth) + (tickFontSize * tallestLabelHeightInLines) + (lineSpace * tallestLabelHeightInLines);

					minSize.height = Math.min(me.maxHeight, minSize.height + labelHeight);
					me.ctx.font = tickLabelFont;

					var firstLabelWidth = me.ctx.measureText(me.ticks[0]).width;
					var lastLabelWidth = me.ctx.measureText(me.ticks[me.ticks.length - 1]).width;

					// Ensure that our ticks are always inside the canvas. When rotated, ticks are right aligned which means that the right padding is dominated
					// by the font height
					var cosRotation = Math.cos(helpers.toRadians(me.labelRotation));
					var sinRotation = Math.sin(helpers.toRadians(me.labelRotation));
					me.paddingLeft = me.labelRotation !== 0 ? (cosRotation * firstLabelWidth) + 3 : firstLabelWidth / 2 + 3; // add 3 px to move away from canvas edges
					me.paddingRight = me.labelRotation !== 0 ? (sinRotation * (tickFontSize / 2)) + 3 : lastLabelWidth / 2 + 3; // when rotated
				} else {
					// A vertical axis is more constrained by the width. Labels are the dominant factor here, so get that length first
					var maxLabelWidth = me.maxWidth - minSize.width;

					// Account for padding
					var mirror = tickOpts.mirror;
					if (!mirror) {
						largestTextWidth += me.options.ticks.padding;
					} else {
						// If mirrored text is on the inside so don't expand
						largestTextWidth = 0;
					}

					if (largestTextWidth < maxLabelWidth) {
						// We don't need all the room
						minSize.width += largestTextWidth;
					} else {
						// Expand to max size
						minSize.width = me.maxWidth;
					}

					me.paddingTop = tickFontSize / 2;
					me.paddingBottom = tickFontSize / 2;
				}
			}

			if (me.margins) {
				me.paddingLeft = Math.max(me.paddingLeft - me.margins.left, 0);
				me.paddingTop = Math.max(me.paddingTop - me.margins.top, 0);
				me.paddingRight = Math.max(me.paddingRight - me.margins.right, 0);
				me.paddingBottom = Math.max(me.paddingBottom - me.margins.bottom, 0);
			}

			me.width = minSize.width;
			me.height = minSize.height;

		},
		afterFit: function() {
			helpers.callCallback(this.options.afterFit, [this]);
		},

		// Shared Methods
		isHorizontal: function() {
			return this.options.position === "top" || this.options.position === "bottom";
		},
		isFullWidth: function() {
			return (this.options.fullWidth);
		},

		// Get the correct value. NaN bad inputs, If the value type is object get the x or y based on whether we are horizontal or not
		getRightValue: function getRightValue(rawValue) {
			// Null and undefined values first
			if (rawValue === null || typeof(rawValue) === 'undefined') {
				return NaN;
			}
			// isNaN(object) returns true, so make sure NaN is checking for a number
			if (typeof(rawValue) === 'number' && isNaN(rawValue)) {
				return NaN;
			}
			// If it is in fact an object, dive in one more level
			if (typeof(rawValue) === "object") {
				if ((rawValue instanceof Date) || (rawValue.isValid)) {
					return rawValue;
				} else {
					return getRightValue(this.isHorizontal() ? rawValue.x : rawValue.y);
				}
			}

			// Value is good, return it
			return rawValue;
		},

		// Used to get the value to display in the tooltip for the data at the given index
		// function getLabelForIndex(index, datasetIndex)
		getLabelForIndex: helpers.noop,

		// Used to get data value locations.  Value can either be an index or a numerical value
		getPixelForValue: helpers.noop,

		// Used to get the data value from a given pixel. This is the inverse of getPixelForValue
		getValueForPixel: helpers.noop,

		// Used for tick location, should
		getPixelForTick: function(index, includeOffset) {
			var me = this;
			if (me.isHorizontal()) {
				var innerWidth = me.width - (me.paddingLeft + me.paddingRight);
				var tickWidth = innerWidth / Math.max((me.ticks.length - ((me.options.gridLines.offsetGridLines) ? 0 : 1)), 1);
				var pixel = (tickWidth * index) + me.paddingLeft;

				if (includeOffset) {
					pixel += tickWidth / 2;
				}

				var finalVal = me.left + Math.round(pixel);
				finalVal += me.isFullWidth() ? me.margins.left : 0;
				return finalVal;
			} else {
				var innerHeight = me.height - (me.paddingTop + me.paddingBottom);
				return me.top + (index * (innerHeight / (me.ticks.length - 1)));
			}
		},

		// Utility for getting the pixel location of a percentage of scale
		getPixelForDecimal: function(decimal /*, includeOffset*/ ) {
			var me = this;
			if (me.isHorizontal()) {
				var innerWidth = me.width - (me.paddingLeft + me.paddingRight);
				var valueOffset = (innerWidth * decimal) + me.paddingLeft;

				var finalVal = me.left + Math.round(valueOffset);
				finalVal += me.isFullWidth() ? me.margins.left : 0;
				return finalVal;
			} else {
				return me.top + (decimal * me.height);
			}
		},

		getBasePixel: function() {
			var me = this;
			var min = me.min;
			var max = me.max;

			return me.getPixelForValue(
				me.beginAtZero? 0:
				min < 0 && max < 0? max :
				min > 0 && max > 0? min :
				0);
		},

		// Actualy draw the scale on the canvas
		// @param {rectangle} chartArea : the area of the chart to draw full grid lines on
		draw: function(chartArea) {
			var me = this;
			var options = me.options;
			if (!options.display) {
				return;
			}

			var context = me.ctx;
			var globalDefaults = Chart.defaults.global;
			var optionTicks = options.ticks;
			var gridLines = options.gridLines;
			var scaleLabel = options.scaleLabel;

			var isRotated = me.labelRotation !== 0;
			var skipRatio;
			var useAutoskipper = optionTicks.autoSkip;
			var isHorizontal = me.isHorizontal();

			// figure out the maximum number of gridlines to show
			var maxTicks;
			if (optionTicks.maxTicksLimit) {
				maxTicks = optionTicks.maxTicksLimit;
			}

			var tickFontColor = helpers.getValueOrDefault(optionTicks.fontColor, globalDefaults.defaultFontColor);
			var tickFontSize = helpers.getValueOrDefault(optionTicks.fontSize, globalDefaults.defaultFontSize);
			var tickFontStyle = helpers.getValueOrDefault(optionTicks.fontStyle, globalDefaults.defaultFontStyle);
			var tickFontFamily = helpers.getValueOrDefault(optionTicks.fontFamily, globalDefaults.defaultFontFamily);
			var tickLabelFont = helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);
			var tl = gridLines.tickMarkLength;

			var scaleLabelFontColor = helpers.getValueOrDefault(scaleLabel.fontColor, globalDefaults.defaultFontColor);
			var scaleLabelFontSize = helpers.getValueOrDefault(scaleLabel.fontSize, globalDefaults.defaultFontSize);
			var scaleLabelFontStyle = helpers.getValueOrDefault(scaleLabel.fontStyle, globalDefaults.defaultFontStyle);
			var scaleLabelFontFamily = helpers.getValueOrDefault(scaleLabel.fontFamily, globalDefaults.defaultFontFamily);
			var scaleLabelFont = helpers.fontString(scaleLabelFontSize, scaleLabelFontStyle, scaleLabelFontFamily);

			var labelRotationRadians = helpers.toRadians(me.labelRotation);
			var cosRotation = Math.cos(labelRotationRadians);
			var sinRotation = Math.sin(labelRotationRadians);
			var longestRotatedLabel = me.longestLabelWidth * cosRotation;
			var rotatedLabelHeight = tickFontSize * sinRotation;

			// Make sure we draw text in the correct color and font
			context.fillStyle = tickFontColor;

			var itemsToDraw = [];

			if (isHorizontal) {
				skipRatio = false;

                // Only calculate the skip ratio with the half width of longestRotateLabel if we got an actual rotation
                // See #2584
                if (isRotated) {
                    longestRotatedLabel /= 2;
                }

				if ((longestRotatedLabel + optionTicks.autoSkipPadding) * me.ticks.length > (me.width - (me.paddingLeft + me.paddingRight))) {
					skipRatio = 1 + Math.floor(((longestRotatedLabel + optionTicks.autoSkipPadding) * me.ticks.length) / (me.width - (me.paddingLeft + me.paddingRight)));
				}

				// if they defined a max number of optionTicks,
				// increase skipRatio until that number is met
				if (maxTicks && me.ticks.length > maxTicks) {
					while (!skipRatio || me.ticks.length / (skipRatio || 1) > maxTicks) {
						if (!skipRatio) {
							skipRatio = 1;
						}
						skipRatio += 1;
					}
				}

				if (!useAutoskipper) {
					skipRatio = false;
				}
			}


			var xTickStart = options.position === "right" ? me.left : me.right - tl;
			var xTickEnd = options.position === "right" ? me.left + tl : me.right;
			var yTickStart = options.position === "bottom" ? me.top : me.bottom - tl;
			var yTickEnd = options.position === "bottom" ? me.top + tl : me.bottom;

			helpers.each(me.ticks, function(label, index) {
				// If the callback returned a null or undefined value, do not draw this line
				if (label === undefined || label === null) {
					return;
				}

				var isLastTick = me.ticks.length === index + 1;

				// Since we always show the last tick,we need may need to hide the last shown one before
				var shouldSkip = (skipRatio > 1 && index % skipRatio > 0) || (index % skipRatio === 0 && index + skipRatio >= me.ticks.length);
				if (shouldSkip && !isLastTick || (label === undefined || label === null)) {
					return;
				}

				var lineWidth, lineColor;
				if (index === (typeof me.zeroLineIndex !== 'undefined' ? me.zeroLineIndex : 0)) {
					// Draw the first index specially
					lineWidth = gridLines.zeroLineWidth;
					lineColor = gridLines.zeroLineColor;
				} else  {
					lineWidth = helpers.getValueAtIndexOrDefault(gridLines.lineWidth, index);
					lineColor = helpers.getValueAtIndexOrDefault(gridLines.color, index);
				}

				// Common properties
				var tx1, ty1, tx2, ty2, x1, y1, x2, y2, labelX, labelY;
				var textAlign, textBaseline = 'middle';

				if (isHorizontal) {
					if (!isRotated) {
						textBaseline = options.position === 'top' ? 'bottom' : 'top';
					}

					textAlign = isRotated ? 'right' : 'center';

					var xLineValue = me.getPixelForTick(index) + helpers.aliasPixel(lineWidth); // xvalues for grid lines
					labelX = me.getPixelForTick(index, gridLines.offsetGridLines) + optionTicks.labelOffset; // x values for optionTicks (need to consider offsetLabel option)
					labelY = (isRotated) ? me.top + 12 : options.position === 'top' ? me.bottom - tl : me.top + tl;

					tx1 = tx2 = x1 = x2 = xLineValue;
					ty1 = yTickStart;
					ty2 = yTickEnd;
					y1 = chartArea.top;
					y2 = chartArea.bottom;
				} else {
					if (options.position === 'left') {
						if (optionTicks.mirror) {
							labelX = me.right + optionTicks.padding;
							textAlign = 'left';
						} else {
							labelX = me.right - optionTicks.padding;
							textAlign = 'right';
						}
					} else {
						// right side
						if (optionTicks.mirror) {
							labelX = me.left - optionTicks.padding;
							textAlign = 'right';
						} else {
							labelX = me.left + optionTicks.padding;
							textAlign = 'left';
						}
					}

					var yLineValue = me.getPixelForTick(index); // xvalues for grid lines
					yLineValue += helpers.aliasPixel(lineWidth);
					labelY = me.getPixelForTick(index, gridLines.offsetGridLines);

					tx1 = xTickStart;
					tx2 = xTickEnd;
					x1 = chartArea.left;
					x2 = chartArea.right;
					ty1 = ty2 = y1 = y2 = yLineValue;
				}

				itemsToDraw.push({
					tx1: tx1,
					ty1: ty1,
					tx2: tx2,
					ty2: ty2,
					x1: x1,
					y1: y1,
					x2: x2,
					y2: y2,
					labelX: labelX,
					labelY: labelY,
					glWidth: lineWidth,
					glColor: lineColor,
					rotation: -1 * labelRotationRadians,
					label: label,
					textBaseline: textBaseline,
					textAlign: textAlign
				});
			});

			// Draw all of the tick labels, tick marks, and grid lines at the correct places
			helpers.each(itemsToDraw, function(itemToDraw) {
				if (gridLines.display) {
					context.lineWidth = itemToDraw.glWidth;
					context.strokeStyle = itemToDraw.glColor;

					context.beginPath();

					if (gridLines.drawTicks) {
						context.moveTo(itemToDraw.tx1, itemToDraw.ty1);
						context.lineTo(itemToDraw.tx2, itemToDraw.ty2);
					}

					if (gridLines.drawOnChartArea) {
						context.moveTo(itemToDraw.x1, itemToDraw.y1);
						context.lineTo(itemToDraw.x2, itemToDraw.y2);
					}

					context.stroke();
				}

				if (optionTicks.display) {
					context.save();
					context.translate(itemToDraw.labelX, itemToDraw.labelY);
					context.rotate(itemToDraw.rotation);
					context.font = tickLabelFont;
					context.textBaseline = itemToDraw.textBaseline;
					context.textAlign = itemToDraw.textAlign;

					var label = itemToDraw.label;
					if (helpers.isArray(label)) {
						for (var i = 0, y = 0; i < label.length; ++i) {
							// We just make sure the multiline element is a string here..
							context.fillText('' + label[i], 0, y);
							// apply same lineSpacing as calculated @ L#320
							y += (tickFontSize * 1.5);
						}
					} else {
						context.fillText(label, 0, 0);
					}
					context.restore();
				}
			});

			if (scaleLabel.display) {
				// Draw the scale label
				var scaleLabelX;
				var scaleLabelY;
				var rotation = 0;

				if (isHorizontal) {
					scaleLabelX = me.left + ((me.right - me.left) / 2); // midpoint of the width
					scaleLabelY = options.position === 'bottom' ? me.bottom - (scaleLabelFontSize / 2) : me.top + (scaleLabelFontSize / 2);
				} else {
					var isLeft = options.position === 'left';
					scaleLabelX = isLeft ? me.left + (scaleLabelFontSize / 2) : me.right - (scaleLabelFontSize / 2);
					scaleLabelY = me.top + ((me.bottom - me.top) / 2);
					rotation = isLeft ? -0.5 * Math.PI : 0.5 * Math.PI;
				}
				
				context.save();
				context.translate(scaleLabelX, scaleLabelY);
				context.rotate(rotation);
				context.textAlign = 'center';
				context.textBaseline = 'middle';
				context.fillStyle = scaleLabelFontColor; // render in correct colour
				context.font = scaleLabelFont;
				context.fillText(scaleLabel.labelString, 0, 0);
				context.restore();
			}

			if (gridLines.drawBorder) {
				// Draw the line at the edge of the axis
				context.lineWidth = helpers.getValueAtIndexOrDefault(gridLines.lineWidth, 0);
				context.strokeStyle = helpers.getValueAtIndexOrDefault(gridLines.color, 0);
				var x1 = me.left,
					x2 = me.right,
					y1 = me.top,
					y2 = me.bottom;

				var aliasPixel = helpers.aliasPixel(context.lineWidth);
				if (isHorizontal) {
					y1 = y2 = options.position === 'top' ? me.bottom : me.top;
					y1 += aliasPixel;
					y2 += aliasPixel;
				} else {
					x1 = x2 = options.position === 'left' ? me.right : me.left;
					x1 += aliasPixel;
					x2 += aliasPixel;
				}

				context.beginPath();
				context.moveTo(x1, y1);
				context.lineTo(x2, y2);
				context.stroke();
			}
		}
	});
};

},{}],31:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.scaleService = {
		// Scale registration object. Extensions can register new scale types (such as log or DB scales) and then
		// use the new chart options to grab the correct scale
		constructors: {},
		// Use a registration function so that we can move to an ES6 map when we no longer need to support
		// old browsers

		// Scale config defaults
		defaults: {},
		registerScaleType: function(type, scaleConstructor, defaults) {
			this.constructors[type] = scaleConstructor;
			this.defaults[type] = helpers.clone(defaults);
		},
		getScaleConstructor: function(type) {
			return this.constructors.hasOwnProperty(type) ? this.constructors[type] : undefined;
		},
		getScaleDefaults: function(type) {
			// Return the scale defaults merged with the global settings so that we always use the latest ones
			return this.defaults.hasOwnProperty(type) ? helpers.scaleMerge(Chart.defaults.scale, this.defaults[type]) : {};
		},
		updateScaleDefaults: function(type, additions) {
			var defaults = this.defaults;
			if (defaults.hasOwnProperty(type)) {
				defaults[type] = helpers.extend(defaults[type], additions);
			}
		},
		addScalesToLayout: function(chartInstance) {
			// Adds each scale to the chart.boxes array to be sized accordingly
			helpers.each(chartInstance.scales, function(scale) {
				Chart.layoutService.addBox(chartInstance, scale);
			});
		}
	};
};
},{}],32:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.global.title = {
		display: false,
		position: 'top',
		fullWidth: true, // marks that this box should take the full width of the canvas (pushing down other boxes)

		fontStyle: 'bold',
		padding: 10,

		// actual title
		text: ''
	};

	var noop = helpers.noop;
	Chart.Title = Chart.Element.extend({

		initialize: function(config) {
			var me = this;
			helpers.extend(me, config);
			me.options = helpers.configMerge(Chart.defaults.global.title, config.options);

			// Contains hit boxes for each dataset (in dataset order)
			me.legendHitBoxes = [];
		},

		// These methods are ordered by lifecyle. Utilities then follow.

		beforeUpdate: function () {
			var chartOpts = this.chart.options;
			if (chartOpts && chartOpts.title) {
				this.options = helpers.configMerge(Chart.defaults.global.title, chartOpts.title);
			}
		},
		update: function(maxWidth, maxHeight, margins) {
			var me = this;

			// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
			me.beforeUpdate();

			// Absorb the master measurements
			me.maxWidth = maxWidth;
			me.maxHeight = maxHeight;
			me.margins = margins;

			// Dimensions
			me.beforeSetDimensions();
			me.setDimensions();
			me.afterSetDimensions();
			// Labels
			me.beforeBuildLabels();
			me.buildLabels();
			me.afterBuildLabels();

			// Fit
			me.beforeFit();
			me.fit();
			me.afterFit();
			//
			me.afterUpdate();

			return me.minSize;

		},
		afterUpdate: noop,

		//

		beforeSetDimensions: noop,
		setDimensions: function() {
			var me = this;
			// Set the unconstrained dimension before label rotation
			if (me.isHorizontal()) {
				// Reset position before calculating rotation
				me.width = me.maxWidth;
				me.left = 0;
				me.right = me.width;
			} else {
				me.height = me.maxHeight;

				// Reset position before calculating rotation
				me.top = 0;
				me.bottom = me.height;
			}

			// Reset padding
			me.paddingLeft = 0;
			me.paddingTop = 0;
			me.paddingRight = 0;
			me.paddingBottom = 0;

			// Reset minSize
			me.minSize = {
				width: 0,
				height: 0
			};
		},
		afterSetDimensions: noop,

		//

		beforeBuildLabels: noop,
		buildLabels: noop,
		afterBuildLabels: noop,

		//

		beforeFit: noop,
		fit: function() {

			var me = this,
				ctx = me.ctx,
				valueOrDefault = helpers.getValueOrDefault,
				opts = me.options,
				globalDefaults = Chart.defaults.global,
				display = opts.display,
				fontSize = valueOrDefault(opts.fontSize, globalDefaults.defaultFontSize),
				minSize = me.minSize;

			if (me.isHorizontal()) {
				minSize.width = me.maxWidth; // fill all the width
				minSize.height = display ? fontSize + (opts.padding * 2) : 0;
			} else {
				minSize.width = display ? fontSize + (opts.padding * 2) : 0;
				minSize.height = me.maxHeight; // fill all the height
			}

			me.width = minSize.width;
			me.height = minSize.height;

		},
		afterFit: noop,

		// Shared Methods
		isHorizontal: function() {
			var pos = this.options.position;
			return pos === "top" || pos === "bottom";
		},

		// Actualy draw the title block on the canvas
		draw: function() {
			var me = this,
				ctx = me.ctx,
				valueOrDefault = helpers.getValueOrDefault,
				opts = me.options,
				globalDefaults = Chart.defaults.global;

			if (opts.display) {
				var fontSize = valueOrDefault(opts.fontSize, globalDefaults.defaultFontSize),
					fontStyle = valueOrDefault(opts.fontStyle, globalDefaults.defaultFontStyle),
					fontFamily = valueOrDefault(opts.fontFamily, globalDefaults.defaultFontFamily),
					titleFont = helpers.fontString(fontSize, fontStyle, fontFamily),
					rotation = 0,
					titleX,
					titleY,
					top = me.top,
					left = me.left,
					bottom = me.bottom,
					right = me.right;

				ctx.fillStyle = valueOrDefault(opts.fontColor, globalDefaults.defaultFontColor); // render in correct colour
				ctx.font = titleFont;

				// Horizontal
				if (me.isHorizontal()) {
					titleX = left + ((right - left) / 2); // midpoint of the width
					titleY = top + ((bottom - top) / 2); // midpoint of the height
				} else {
					titleX = opts.position === 'left' ? left + (fontSize / 2) : right - (fontSize / 2);
					titleY = top + ((bottom - top) / 2);
					rotation = Math.PI * (opts.position === 'left' ? -0.5 : 0.5);
				}

				ctx.save();
				ctx.translate(titleX, titleY);
				ctx.rotate(rotation);
				ctx.textAlign = 'center';
				ctx.textBaseline = 'middle';
				ctx.fillText(opts.text, 0, 0);
				ctx.restore();
			}
		}
	});

	// Register the title plugin
	Chart.plugins.register({
		beforeInit: function(chartInstance) {
			var opts = chartInstance.options;
			var titleOpts = opts.title;

			if (titleOpts) {
				chartInstance.titleBlock = new Chart.Title({
					ctx: chartInstance.chart.ctx,
					options: titleOpts,
					chart: chartInstance
				});

				Chart.layoutService.addBox(chartInstance, chartInstance.titleBlock);
			}
		}
	});
};

},{}],33:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.global.tooltips = {
		enabled: true,
		custom: null,
		mode: 'single',
		backgroundColor: "rgba(0,0,0,0.8)",
		titleFontStyle: "bold",
		titleSpacing: 2,
		titleMarginBottom: 6,
		titleFontColor: "#fff",
		titleAlign: "left",
		bodySpacing: 2,
		bodyFontColor: "#fff",
		bodyAlign: "left",
		footerFontStyle: "bold",
		footerSpacing: 2,
		footerMarginTop: 6,
		footerFontColor: "#fff",
		footerAlign: "left",
		yPadding: 6,
		xPadding: 6,
		yAlign : 'center',
		xAlign : 'center',
		caretSize: 5,
		cornerRadius: 6,
		multiKeyBackground: '#fff',
		callbacks: {
			// Args are: (tooltipItems, data)
			beforeTitle: helpers.noop,
			title: function(tooltipItems, data) {
				// Pick first xLabel for now
				var title = '';
				var labels = data.labels;
				var labelCount = labels ? labels.length : 0;

				if (tooltipItems.length > 0) {
					var item = tooltipItems[0];

					if (item.xLabel) {
						title = item.xLabel;
					} else if (labelCount > 0 && item.index < labelCount) {
						title = labels[item.index];
					}
				}

				return title;
			},
			afterTitle: helpers.noop,

			// Args are: (tooltipItems, data)
			beforeBody: helpers.noop,

			// Args are: (tooltipItem, data)
			beforeLabel: helpers.noop,
			label: function(tooltipItem, data) {
				var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
				return datasetLabel + ': ' + tooltipItem.yLabel;
			},
			labelColor: function(tooltipItem, chartInstance) {
				var meta = chartInstance.getDatasetMeta(tooltipItem.datasetIndex);
				var activeElement = meta.data[tooltipItem.index];
				var view = activeElement._view;
				return {
					borderColor: view.borderColor,
					backgroundColor: view.backgroundColor
				};
			},
			afterLabel: helpers.noop,

			// Args are: (tooltipItems, data)
			afterBody: helpers.noop,

			// Args are: (tooltipItems, data)
			beforeFooter: helpers.noop,
			footer: helpers.noop,
			afterFooter: helpers.noop
		}
	};

	// Helper to push or concat based on if the 2nd parameter is an array or not
	function pushOrConcat(base, toPush) {
		if (toPush) {
			if (helpers.isArray(toPush)) {
				//base = base.concat(toPush);
				Array.prototype.push.apply(base, toPush);
			} else {
				base.push(toPush);
			}
		}

		return base;
	}

	function getAveragePosition(elements) {
		if (!elements.length) {
			return false;
		}

		var i, len;
		var xPositions = [];
		var yPositions = [];

		for (i = 0, len = elements.length; i < len; ++i) {
			var el = elements[i];
			if (el && el.hasValue()){
				var pos = el.tooltipPosition();
				xPositions.push(pos.x);
				yPositions.push(pos.y);
			}
		}

		var x = 0,
			y = 0;
		for (i = 0, len - xPositions.length; i < len; ++i) {
			x += xPositions[i];
			y += yPositions[i];
		}

		return {
			x: Math.round(x / xPositions.length),
			y: Math.round(y / xPositions.length)
		};
	}

	// Private helper to create a tooltip iteam model
	// @param element : the chart element (point, arc, bar) to create the tooltip item for
	// @return : new tooltip item
	function createTooltipItem(element) {
		var xScale = element._xScale;
		var yScale = element._yScale || element._scale; // handle radar || polarArea charts
		var index = element._index,
			datasetIndex = element._datasetIndex;

		return {
			xLabel: xScale ? xScale.getLabelForIndex(index, datasetIndex) : '',
			yLabel: yScale ? yScale.getLabelForIndex(index, datasetIndex) : '',
			index: index,
			datasetIndex: datasetIndex
		};
	}

	Chart.Tooltip = Chart.Element.extend({
		initialize: function() {
			var me = this;
			var globalDefaults = Chart.defaults.global;
			var tooltipOpts = me._options;
			var getValueOrDefault = helpers.getValueOrDefault;

			helpers.extend(me, {
				_model: {
					// Positioning
					xPadding: tooltipOpts.xPadding,
					yPadding: tooltipOpts.yPadding,
					xAlign : tooltipOpts.yAlign,
					yAlign : tooltipOpts.xAlign,

					// Body
					bodyFontColor: tooltipOpts.bodyFontColor,
					_bodyFontFamily: getValueOrDefault(tooltipOpts.bodyFontFamily, globalDefaults.defaultFontFamily),
					_bodyFontStyle: getValueOrDefault(tooltipOpts.bodyFontStyle, globalDefaults.defaultFontStyle),
					_bodyAlign: tooltipOpts.bodyAlign,
					bodyFontSize: getValueOrDefault(tooltipOpts.bodyFontSize, globalDefaults.defaultFontSize),
					bodySpacing: tooltipOpts.bodySpacing,

					// Title
					titleFontColor: tooltipOpts.titleFontColor,
					_titleFontFamily: getValueOrDefault(tooltipOpts.titleFontFamily, globalDefaults.defaultFontFamily),
					_titleFontStyle: getValueOrDefault(tooltipOpts.titleFontStyle, globalDefaults.defaultFontStyle),
					titleFontSize: getValueOrDefault(tooltipOpts.titleFontSize, globalDefaults.defaultFontSize),
					_titleAlign: tooltipOpts.titleAlign,
					titleSpacing: tooltipOpts.titleSpacing,
					titleMarginBottom: tooltipOpts.titleMarginBottom,

					// Footer
					footerFontColor: tooltipOpts.footerFontColor,
					_footerFontFamily: getValueOrDefault(tooltipOpts.footerFontFamily, globalDefaults.defaultFontFamily),
					_footerFontStyle: getValueOrDefault(tooltipOpts.footerFontStyle, globalDefaults.defaultFontStyle),
					footerFontSize: getValueOrDefault(tooltipOpts.footerFontSize, globalDefaults.defaultFontSize),
					_footerAlign: tooltipOpts.footerAlign,
					footerSpacing: tooltipOpts.footerSpacing,
					footerMarginTop: tooltipOpts.footerMarginTop,

					// Appearance
					caretSize: tooltipOpts.caretSize,
					cornerRadius: tooltipOpts.cornerRadius,
					backgroundColor: tooltipOpts.backgroundColor,
					opacity: 0,
					legendColorBackground: tooltipOpts.multiKeyBackground
				}
			});
		},

		// Get the title
		// Args are: (tooltipItem, data)
		getTitle: function() {
			var me = this;
			var opts = me._options;
			var callbacks = opts.callbacks;

			var beforeTitle = callbacks.beforeTitle.apply(me, arguments),
				title = callbacks.title.apply(me, arguments),
				afterTitle = callbacks.afterTitle.apply(me, arguments);

			var lines = [];
			lines = pushOrConcat(lines, beforeTitle);
			lines = pushOrConcat(lines, title);
			lines = pushOrConcat(lines, afterTitle);

			return lines;
		},

		// Args are: (tooltipItem, data)
		getBeforeBody: function() {
			var lines = this._options.callbacks.beforeBody.apply(this, arguments);
			return helpers.isArray(lines) ? lines : lines !== undefined ? [lines] : [];
		},

		// Args are: (tooltipItem, data)
		getBody: function(tooltipItems, data) {
			var me = this;
			var callbacks = me._options.callbacks;
			var bodyItems = [];

			helpers.each(tooltipItems, function(tooltipItem) {
				var bodyItem = {
					before: [],
					lines: [],
					after: []
				};
				pushOrConcat(bodyItem.before, callbacks.beforeLabel.call(me, tooltipItem, data));
				pushOrConcat(bodyItem.lines, callbacks.label.call(me, tooltipItem, data));
				pushOrConcat(bodyItem.after, callbacks.afterLabel.call(me, tooltipItem, data));

				bodyItems.push(bodyItem);
			});

			return bodyItems;
		},

		// Args are: (tooltipItem, data)
		getAfterBody: function() {
			var lines = this._options.callbacks.afterBody.apply(this, arguments);
			return helpers.isArray(lines) ? lines : lines !== undefined ? [lines] : [];
		},

		// Get the footer and beforeFooter and afterFooter lines
		// Args are: (tooltipItem, data)
		getFooter: function() {
			var me = this;
			var callbacks = me._options.callbacks;

			var beforeFooter = callbacks.beforeFooter.apply(me, arguments);
			var footer = callbacks.footer.apply(me, arguments);
			var afterFooter = callbacks.afterFooter.apply(me, arguments);

			var lines = [];
			lines = pushOrConcat(lines, beforeFooter);
			lines = pushOrConcat(lines, footer);
			lines = pushOrConcat(lines, afterFooter);

			return lines;
		},

		update: function(changed) {
			var me = this;
			var opts = me._options;
			var model = me._model;
			var active = me._active;

			var data = me._data;
			var chartInstance = me._chartInstance;

			var i, len;

			if (active.length) {
				model.opacity = 1;

				var labelColors = [],
					tooltipPosition = getAveragePosition(active);

				var tooltipItems = [];
				for (i = 0, len = active.length; i < len; ++i) {
					tooltipItems.push(createTooltipItem(active[i]));
				}

				// If the user provided a sorting function, use it to modify the tooltip items
				if (opts.itemSort) {
					tooltipItems = tooltipItems.sort(opts.itemSort);
				}

				// If there is more than one item, show color items
				if (active.length > 1) {
					helpers.each(tooltipItems, function(tooltipItem) {
						labelColors.push(opts.callbacks.labelColor.call(me, tooltipItem, chartInstance));
					});
				}

				// Build the Text Lines
				helpers.extend(model, {
					title: me.getTitle(tooltipItems, data),
					beforeBody: me.getBeforeBody(tooltipItems, data),
					body: me.getBody(tooltipItems, data),
					afterBody: me.getAfterBody(tooltipItems, data),
					footer: me.getFooter(tooltipItems, data),
					x: Math.round(tooltipPosition.x),
					y: Math.round(tooltipPosition.y),
					caretPadding: helpers.getValueOrDefault(tooltipPosition.padding, 2),
					labelColors: labelColors
				});

				// We need to determine alignment of
				var tooltipSize = me.getTooltipSize(model);
				me.determineAlignment(tooltipSize); // Smart Tooltip placement to stay on the canvas

				helpers.extend(model, me.getBackgroundPoint(model, tooltipSize));
			} else {
				me._model.opacity = 0;
			}

			if (changed && opts.custom) {
				opts.custom.call(me, model);
			}

			return me;
		},
		getTooltipSize: function getTooltipSize(vm) {
			var ctx = this._chart.ctx;

			var size = {
				height: vm.yPadding * 2, // Tooltip Padding
				width: 0
			};

			// Count of all lines in the body
			var body = vm.body;
			var combinedBodyLength = body.reduce(function(count, bodyItem) {
				return count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length;
			}, 0);
			combinedBodyLength += vm.beforeBody.length + vm.afterBody.length;

			var titleLineCount = vm.title.length;
			var footerLineCount = vm.footer.length;
			var titleFontSize = vm.titleFontSize,
				bodyFontSize = vm.bodyFontSize,
				footerFontSize = vm.footerFontSize;

			size.height += titleLineCount * titleFontSize; // Title Lines
			size.height += (titleLineCount - 1) * vm.titleSpacing; // Title Line Spacing
			size.height += titleLineCount ? vm.titleMarginBottom : 0; // Title's bottom Margin
			size.height += combinedBodyLength * bodyFontSize; // Body Lines
			size.height += combinedBodyLength ? (combinedBodyLength - 1) * vm.bodySpacing : 0; // Body Line Spacing
			size.height += footerLineCount ? vm.footerMarginTop : 0; // Footer Margin
			size.height += footerLineCount * (footerFontSize); // Footer Lines
			size.height += footerLineCount ? (footerLineCount - 1) * vm.footerSpacing : 0; // Footer Line Spacing

			// Title width
			var widthPadding = 0;
			var maxLineWidth = function(line) {
				size.width = Math.max(size.width, ctx.measureText(line).width + widthPadding);
			};

			ctx.font = helpers.fontString(titleFontSize, vm._titleFontStyle, vm._titleFontFamily);
			helpers.each(vm.title, maxLineWidth);

			// Body width
			ctx.font = helpers.fontString(bodyFontSize, vm._bodyFontStyle, vm._bodyFontFamily);
			helpers.each(vm.beforeBody.concat(vm.afterBody), maxLineWidth);

			// Body lines may include some extra width due to the color box
			widthPadding = body.length > 1 ? (bodyFontSize + 2) : 0;
			helpers.each(body, function(bodyItem) {
				helpers.each(bodyItem.before, maxLineWidth);
				helpers.each(bodyItem.lines, maxLineWidth);
				helpers.each(bodyItem.after, maxLineWidth);
			});

			// Reset back to 0
			widthPadding = 0;

			// Footer width
			ctx.font = helpers.fontString(footerFontSize, vm._footerFontStyle, vm._footerFontFamily);
			helpers.each(vm.footer, maxLineWidth);

			// Add padding
			size.width += 2 * vm.xPadding;

			return size;
		},
		determineAlignment: function determineAlignment(size) {
			var me = this;
			var model = me._model;
			var chart = me._chart;
			var chartArea = me._chartInstance.chartArea;

			if (model.y < size.height) {
				model.yAlign = 'top';
			} else if (model.y > (chart.height - size.height)) {
				model.yAlign = 'bottom';
			}

			var lf, rf; // functions to determine left, right alignment
			var olf, orf; // functions to determine if left/right alignment causes tooltip to go outside chart
			var yf; // function to get the y alignment if the tooltip goes outside of the left or right edges
			var midX = (chartArea.left + chartArea.right) / 2;
			var midY = (chartArea.top + chartArea.bottom) / 2;

			if (model.yAlign === 'center') {
				lf = function(x) {
					return x <= midX;
				};
				rf = function(x) {
					return x > midX;
				};
			} else {
				lf = function(x) {
					return x <= (size.width / 2);
				};
				rf = function(x) {
					return x >= (chart.width - (size.width / 2));
				};
			}

			olf = function(x) {
				return x + size.width > chart.width;
			};
			orf = function(x) {
				return x - size.width < 0;
			};
			yf = function(y) {
				return y <= midY ? 'top' : 'bottom';
			};

			if (lf(model.x)) {
				model.xAlign = 'left';

				// Is tooltip too wide and goes over the right side of the chart.?
				if (olf(model.x)) {
					model.xAlign = 'center';
					model.yAlign = yf(model.y);
				}
			} else if (rf(model.x)) {
				model.xAlign = 'right';

				// Is tooltip too wide and goes outside left edge of canvas?
				if (orf(model.x)) {
					model.xAlign = 'center';
					model.yAlign = yf(model.y);
				}
			}
		},
		getBackgroundPoint: function getBackgroundPoint(vm, size) {
			// Background Position
			var pt = {
				x: vm.x,
				y: vm.y
			};

			var caretSize = vm.caretSize,
				caretPadding = vm.caretPadding,
				cornerRadius = vm.cornerRadius,
				xAlign = vm.xAlign,
				yAlign = vm.yAlign,
				paddingAndSize = caretSize + caretPadding,
				radiusAndPadding = cornerRadius + caretPadding;

			if (xAlign === 'right') {
				pt.x -= size.width;
			} else if (xAlign === 'center') {
				pt.x -= (size.width / 2);
			}

			if (yAlign === 'top') {
				pt.y += paddingAndSize;
			} else if (yAlign === 'bottom') {
				pt.y -= size.height + paddingAndSize;
			} else {
				pt.y -= (size.height / 2);
			}

			if (yAlign === 'center') {
				if (xAlign === 'left') {
					pt.x += paddingAndSize;
				} else if (xAlign === 'right') {
					pt.x -= paddingAndSize;
				}
			} else {
				if (xAlign === 'left') {
					pt.x -= radiusAndPadding;
				} else if (xAlign === 'right') {
					pt.x += radiusAndPadding;
				}
			}

			return pt;
		},
		drawCaret: function drawCaret(tooltipPoint, size, opacity, caretPadding) {
			var vm = this._view;
			var ctx = this._chart.ctx;
			var x1, x2, x3;
			var y1, y2, y3;
			var caretSize = vm.caretSize;
			var cornerRadius = vm.cornerRadius;
			var xAlign = vm.xAlign,
				yAlign = vm.yAlign;
			var ptX = tooltipPoint.x,
				ptY = tooltipPoint.y;
			var width = size.width,
				height = size.height;

			if (yAlign === 'center') {
				// Left or right side
				if (xAlign === 'left') {
					x1 = ptX;
					x2 = x1 - caretSize;
					x3 = x1;
				} else {
					x1 = ptX + width;
					x2 = x1 + caretSize;
					x3 = x1;
				}

				y2 = ptY + (height / 2);
				y1 = y2 - caretSize;
				y3 = y2 + caretSize;
			} else {
				if (xAlign === 'left') {
					x1 = ptX + cornerRadius;
					x2 = x1 + caretSize;
					x3 = x2 + caretSize;
				} else if (xAlign === 'right') {
					x1 = ptX + width - cornerRadius;
					x2 = x1 - caretSize;
					x3 = x2 - caretSize;
				} else {
					x2 = ptX + (width / 2);
					x1 = x2 - caretSize;
					x3 = x2 + caretSize;
				}

				if (yAlign === 'top') {
					y1 = ptY;
					y2 = y1 - caretSize;
					y3 = y1;
				} else {
					y1 = ptY + height;
					y2 = y1 + caretSize;
					y3 = y1;
				}
			}

			var bgColor = helpers.color(vm.backgroundColor);
			ctx.fillStyle = bgColor.alpha(opacity * bgColor.alpha()).rgbString();
			ctx.beginPath();
			ctx.moveTo(x1, y1);
			ctx.lineTo(x2, y2);
			ctx.lineTo(x3, y3);
			ctx.closePath();
			ctx.fill();
		},
		drawTitle: function drawTitle(pt, vm, ctx, opacity) {
			var title = vm.title;

			if (title.length) {
				ctx.textAlign = vm._titleAlign;
				ctx.textBaseline = "top";

				var titleFontSize = vm.titleFontSize,
					titleSpacing = vm.titleSpacing;

				var titleFontColor = helpers.color(vm.titleFontColor);
				ctx.fillStyle = titleFontColor.alpha(opacity * titleFontColor.alpha()).rgbString();
				ctx.font = helpers.fontString(titleFontSize, vm._titleFontStyle, vm._titleFontFamily);

				var i, len;
				for (i = 0, len = title.length; i < len; ++i) {
					ctx.fillText(title[i], pt.x, pt.y);
					pt.y += titleFontSize + titleSpacing; // Line Height and spacing

					if (i + 1 === title.length) {
						pt.y += vm.titleMarginBottom - titleSpacing; // If Last, add margin, remove spacing
					}
				}
			}
		},
		drawBody: function drawBody(pt, vm, ctx, opacity) {
			var bodyFontSize = vm.bodyFontSize;
			var bodySpacing = vm.bodySpacing;
			var body = vm.body;

			ctx.textAlign = vm._bodyAlign;
			ctx.textBaseline = "top";

			var bodyFontColor = helpers.color(vm.bodyFontColor);
			var textColor = bodyFontColor.alpha(opacity * bodyFontColor.alpha()).rgbString();
			ctx.fillStyle = textColor;
			ctx.font = helpers.fontString(bodyFontSize, vm._bodyFontStyle, vm._bodyFontFamily);

			// Before Body
			var xLinePadding = 0;
			var fillLineOfText = function(line) {
				ctx.fillText(line, pt.x + xLinePadding, pt.y);
				pt.y += bodyFontSize + bodySpacing;
			};

			// Before body lines
			helpers.each(vm.beforeBody, fillLineOfText);

			var drawColorBoxes = body.length > 1;
			xLinePadding = drawColorBoxes ? (bodyFontSize + 2) : 0;

			// Draw body lines now
			helpers.each(body, function(bodyItem, i) {
				helpers.each(bodyItem.before, fillLineOfText);

				helpers.each(bodyItem.lines, function(line) {
					// Draw Legend-like boxes if needed
					if (drawColorBoxes) {
						// Fill a white rect so that colours merge nicely if the opacity is < 1
						ctx.fillStyle = helpers.color(vm.legendColorBackground).alpha(opacity).rgbaString();
						ctx.fillRect(pt.x, pt.y, bodyFontSize, bodyFontSize);

						// Border
						ctx.strokeStyle = helpers.color(vm.labelColors[i].borderColor).alpha(opacity).rgbaString();
						ctx.strokeRect(pt.x, pt.y, bodyFontSize, bodyFontSize);

						// Inner square
						ctx.fillStyle = helpers.color(vm.labelColors[i].backgroundColor).alpha(opacity).rgbaString();
						ctx.fillRect(pt.x + 1, pt.y + 1, bodyFontSize - 2, bodyFontSize - 2);

						ctx.fillStyle = textColor;
					}

					fillLineOfText(line);
				});

				helpers.each(bodyItem.after, fillLineOfText);
			});

			// Reset back to 0 for after body
			xLinePadding = 0;

			// After body lines
			helpers.each(vm.afterBody, fillLineOfText);
			pt.y -= bodySpacing; // Remove last body spacing
		},
		drawFooter: function drawFooter(pt, vm, ctx, opacity) {
			var footer = vm.footer;

			if (footer.length) {
				pt.y += vm.footerMarginTop;

				ctx.textAlign = vm._footerAlign;
				ctx.textBaseline = "top";

				var footerFontColor = helpers.color(vm.footerFontColor);
				ctx.fillStyle = footerFontColor.alpha(opacity * footerFontColor.alpha()).rgbString();
				ctx.font = helpers.fontString(vm.footerFontSize, vm._footerFontStyle, vm._footerFontFamily);

				helpers.each(footer, function(line) {
					ctx.fillText(line, pt.x, pt.y);
					pt.y += vm.footerFontSize + vm.footerSpacing;
				});
			}
		},
		draw: function draw() {
			var ctx = this._chart.ctx;
			var vm = this._view;

			if (vm.opacity === 0) {
				return;
			}

			var tooltipSize = this.getTooltipSize(vm);
			var pt = {
				x: vm.x,
				y: vm.y
			};

			// IE11/Edge does not like very small opacities, so snap to 0
			var opacity = Math.abs(vm.opacity < 1e-3) ? 0 : vm.opacity;

			if (this._options.enabled) {
				// Draw Background
				var bgColor = helpers.color(vm.backgroundColor);
				ctx.fillStyle = bgColor.alpha(opacity * bgColor.alpha()).rgbString();
				helpers.drawRoundedRectangle(ctx, pt.x, pt.y, tooltipSize.width, tooltipSize.height, vm.cornerRadius);
				ctx.fill();

				// Draw Caret
				this.drawCaret(pt, tooltipSize, opacity, vm.caretPadding);

				// Draw Title, Body, and Footer
				pt.x += vm.xPadding;
				pt.y += vm.yPadding;

				// Titles
				this.drawTitle(pt, vm, ctx, opacity);

				// Body
				this.drawBody(pt, vm, ctx, opacity);

				// Footer
				this.drawFooter(pt, vm, ctx, opacity);
			}
		}
	});
};

},{}],34:[function(require,module,exports){
"use strict";

module.exports = function(Chart, moment) {

  var helpers = Chart.helpers,
    globalOpts = Chart.defaults.global;

  globalOpts.elements.arc = {
    backgroundColor: globalOpts.defaultColor,
    borderColor: "#fff",
    borderWidth: 2
  };

  Chart.elements.Arc = Chart.Element.extend({
    inLabelRange: function(mouseX) {
      var vm = this._view;

      if (vm) {
        return (Math.pow(mouseX - vm.x, 2) < Math.pow(vm.radius + vm.hoverRadius, 2));
      } else {
        return false;
      }
    },
    inRange: function(chartX, chartY) {
      var vm = this._view;

      if (vm) {
        var pointRelativePosition = helpers.getAngleFromPoint(vm, {
            x: chartX,
            y: chartY
          }),
          angle = pointRelativePosition.angle,
          distance = pointRelativePosition.distance;

        //Sanitise angle range
        var startAngle = vm.startAngle;
        var endAngle = vm.endAngle;
        while (endAngle < startAngle) {
          endAngle += 2.0 * Math.PI;
        }
        while (angle > endAngle) {
          angle -= 2.0 * Math.PI;
        }
        while (angle < startAngle) {
          angle += 2.0 * Math.PI;
        }

        //Check if within the range of the open/close angle
        var betweenAngles = (angle >= startAngle && angle <= endAngle),
          withinRadius = (distance >= vm.innerRadius && distance <= vm.outerRadius);

        return (betweenAngles && withinRadius);
      } else {
        return false;
      }
    },
    tooltipPosition: function() {
      var vm = this._view;

      var centreAngle = vm.startAngle + ((vm.endAngle - vm.startAngle) / 2),
        rangeFromCentre = (vm.outerRadius - vm.innerRadius) / 2 + vm.innerRadius;
      return {
        x: vm.x + (Math.cos(centreAngle) * rangeFromCentre),
        y: vm.y + (Math.sin(centreAngle) * rangeFromCentre)
      };
    },
    draw: function() {

      var ctx = this._chart.ctx,
        vm = this._view,
        sA = vm.startAngle,
        eA = vm.endAngle;

      ctx.beginPath();

      ctx.arc(vm.x, vm.y, vm.outerRadius, sA, eA);
      ctx.arc(vm.x, vm.y, vm.innerRadius, eA, sA, true);

      ctx.closePath();
      ctx.strokeStyle = vm.borderColor;
      ctx.lineWidth = vm.borderWidth;

      ctx.fillStyle = vm.backgroundColor;

      ctx.fill();
      ctx.lineJoin = 'bevel';

      if (vm.borderWidth) {
        ctx.stroke();
      }
    }
  });
};

},{}],35:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;
	var globalDefaults = Chart.defaults.global;

	Chart.defaults.global.elements.line = {
		tension: 0.4,
		backgroundColor: globalDefaults.defaultColor,
		borderWidth: 3,
		borderColor: globalDefaults.defaultColor,
		borderCapStyle: 'butt',
		borderDash: [],
		borderDashOffset: 0.0,
		borderJoinStyle: 'miter',
		fill: true // do we fill in the area between the line and its base axis
	};

	Chart.elements.Line = Chart.Element.extend({
		lineToNextPoint: function(previousPoint, point, nextPoint, skipHandler, previousSkipHandler) {
			var me = this;
			var ctx = me._chart.ctx;
			var spanGaps = me._view ? me._view.spanGaps : false;

			if (point._view.skip && !spanGaps) {
				skipHandler.call(me, previousPoint, point, nextPoint);
			} else if (previousPoint._view.skip && !spanGaps) {
				previousSkipHandler.call(me, previousPoint, point, nextPoint);
			} else if (point._view.tension === 0) {
				ctx.lineTo(point._view.x, point._view.y);
			} else {
				// Line between points
				ctx.bezierCurveTo(
					previousPoint._view.controlPointNextX,
					previousPoint._view.controlPointNextY,
					point._view.controlPointPreviousX,
					point._view.controlPointPreviousY,
					point._view.x,
					point._view.y
				);
			}
		},

		draw: function() {
			var me = this;

			var vm = me._view;
			var ctx = me._chart.ctx;
			var first = me._children[0];
			var last = me._children[me._children.length - 1];

			function loopBackToStart(drawLineToCenter) {
				if (!first._view.skip && !last._view.skip) {
					// Draw a bezier line from last to first
					ctx.bezierCurveTo(
						last._view.controlPointNextX,
						last._view.controlPointNextY,
						first._view.controlPointPreviousX,
						first._view.controlPointPreviousY,
						first._view.x,
						first._view.y
					);
				} else if (drawLineToCenter) {
					// Go to center
					ctx.lineTo(me._view.scaleZero.x, me._view.scaleZero.y);
				}
			}

			ctx.save();

			// If we had points and want to fill this line, do so.
			if (me._children.length > 0 && vm.fill) {
				// Draw the background first (so the border is always on top)
				ctx.beginPath();

				helpers.each(me._children, function(point, index) {
					var previous = helpers.previousItem(me._children, index);
					var next = helpers.nextItem(me._children, index);

					// First point moves to it's starting position no matter what
					if (index === 0) {
						if (me._loop) {
							ctx.moveTo(vm.scaleZero.x, vm.scaleZero.y);
						} else {
							ctx.moveTo(point._view.x, vm.scaleZero);
						}

						if (point._view.skip) {
							if (!me._loop) {
								ctx.moveTo(next._view.x, me._view.scaleZero);
							}
						} else {
							ctx.lineTo(point._view.x, point._view.y);
						}
					} else {
						me.lineToNextPoint(previous, point, next, function(previousPoint, point, nextPoint) {
							if (me._loop) {
								// Go to center
								ctx.lineTo(me._view.scaleZero.x, me._view.scaleZero.y);
							} else {
								ctx.lineTo(previousPoint._view.x, me._view.scaleZero);
								ctx.moveTo(nextPoint._view.x, me._view.scaleZero);
							}
						}, function(previousPoint, point) {
							// If we skipped the last point, draw a line to ourselves so that the fill is nice
							ctx.lineTo(point._view.x, point._view.y);
						});
					}
				}, me);

				// For radial scales, loop back around to the first point
				if (me._loop) {
					loopBackToStart(true);
				} else {
					//Round off the line by going to the base of the chart, back to the start, then fill.
					ctx.lineTo(me._children[me._children.length - 1]._view.x, vm.scaleZero);
					ctx.lineTo(me._children[0]._view.x, vm.scaleZero);
				}

				ctx.fillStyle = vm.backgroundColor || globalDefaults.defaultColor;
				ctx.closePath();
				ctx.fill();
			}

			var globalOptionLineElements = globalDefaults.elements.line;
			// Now draw the line between all the points with any borders
			ctx.lineCap = vm.borderCapStyle || globalOptionLineElements.borderCapStyle;

			// IE 9 and 10 do not support line dash
			if (ctx.setLineDash) {
				ctx.setLineDash(vm.borderDash || globalOptionLineElements.borderDash);
			}

			ctx.lineDashOffset = vm.borderDashOffset || globalOptionLineElements.borderDashOffset;
			ctx.lineJoin = vm.borderJoinStyle || globalOptionLineElements.borderJoinStyle;
			ctx.lineWidth = vm.borderWidth || globalOptionLineElements.borderWidth;
			ctx.strokeStyle = vm.borderColor || globalDefaults.defaultColor;
			ctx.beginPath();

			helpers.each(me._children, function(point, index) {
				var previous = helpers.previousItem(me._children, index);
				var next = helpers.nextItem(me._children, index);

				if (index === 0) {
					ctx.moveTo(point._view.x, point._view.y);
				} else {
					me.lineToNextPoint(previous, point, next, function(previousPoint, point, nextPoint) {
						ctx.moveTo(nextPoint._view.x, nextPoint._view.y);
					}, function(previousPoint, point) {
						// If we skipped the last point, move up to our point preventing a line from being drawn
						ctx.moveTo(point._view.x, point._view.y);
					});
				}
			}, me);

			if (me._loop && me._children.length > 0) {
				loopBackToStart();
			}

			ctx.stroke();
			ctx.restore();
		}
	});
};
},{}],36:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers,
		globalOpts = Chart.defaults.global,
		defaultColor = globalOpts.defaultColor;

	globalOpts.elements.point = {
		radius: 3,
		pointStyle: 'circle',
		backgroundColor: defaultColor,
		borderWidth: 1,
		borderColor: defaultColor,
		// Hover
		hitRadius: 1,
		hoverRadius: 4,
		hoverBorderWidth: 1
	};

	Chart.elements.Point = Chart.Element.extend({
		inRange: function(mouseX, mouseY) {
			var vm = this._view;
			return vm ? ((Math.pow(mouseX - vm.x, 2) + Math.pow(mouseY - vm.y, 2)) < Math.pow(vm.hitRadius + vm.radius, 2)) : false;
		},
		inLabelRange: function(mouseX) {
			var vm = this._view;
			return vm ? (Math.pow(mouseX - vm.x, 2) < Math.pow(vm.radius + vm.hitRadius, 2)) : false;
		},
		tooltipPosition: function() {
			var vm = this._view;
			return {
				x: vm.x,
				y: vm.y,
				padding: vm.radius + vm.borderWidth
			};
		},
		draw: function() {
			var vm = this._view;
			var ctx = this._chart.ctx;
			var pointStyle = vm.pointStyle;
			var radius = vm.radius;
			var x = vm.x;
			var y = vm.y;
			var type, edgeLength, xOffset, yOffset, height, size;

			if (vm.skip) {
				return;
			}

			if (typeof pointStyle === 'object') {
				type = pointStyle.toString();
				if (type === '[object HTMLImageElement]' || type === '[object HTMLCanvasElement]') {
					ctx.drawImage(pointStyle, x - pointStyle.width / 2, y - pointStyle.height / 2);
					return;
				}
			}

			if (isNaN(radius) || radius <= 0) {
				return;
			}

			ctx.strokeStyle = vm.borderColor || defaultColor;
			ctx.lineWidth = helpers.getValueOrDefault(vm.borderWidth, globalOpts.elements.point.borderWidth);
			ctx.fillStyle = vm.backgroundColor || defaultColor;

			switch (pointStyle) {
			// Default includes circle
			default:
				ctx.beginPath();
				ctx.arc(x, y, radius, 0, Math.PI * 2);
				ctx.closePath();
				ctx.fill();
				break;
			case 'triangle':
				ctx.beginPath();
				edgeLength = 3 * radius / Math.sqrt(3);
				height = edgeLength * Math.sqrt(3) / 2;
				ctx.moveTo(x - edgeLength / 2, y + height / 3);
				ctx.lineTo(x + edgeLength / 2, y + height / 3);
				ctx.lineTo(x, y - 2 * height / 3);
				ctx.closePath();
				ctx.fill();
				break;
			case 'rect':
				size = 1 / Math.SQRT2 * radius;
				ctx.fillRect(x - size, y - size, 2 * size,  2 * size);
				ctx.strokeRect(x - size, y - size, 2 * size, 2 * size);
				break;
			case 'rectRot':
				size = 1 / Math.SQRT2 * radius;
				ctx.beginPath();
				ctx.moveTo(x - size, y);
				ctx.lineTo(x, y + size);
				ctx.lineTo(x + size, y);
				ctx.lineTo(x, y - size);
				ctx.closePath();
				ctx.fill();
				break;
			case 'cross':
				ctx.beginPath();
				ctx.moveTo(x, y + radius);
				ctx.lineTo(x, y - radius);
				ctx.moveTo(x - radius, y);
				ctx.lineTo(x + radius, y);
				ctx.closePath();
				break;
			case 'crossRot':
				ctx.beginPath();
				xOffset = Math.cos(Math.PI / 4) * radius;
				yOffset = Math.sin(Math.PI / 4) * radius;
				ctx.moveTo(x - xOffset, y - yOffset);
				ctx.lineTo(x + xOffset, y + yOffset);
				ctx.moveTo(x - xOffset, y + yOffset);
				ctx.lineTo(x + xOffset, y - yOffset);
				ctx.closePath();
				break;
			case 'star':
				ctx.beginPath();
				ctx.moveTo(x, y + radius);
				ctx.lineTo(x, y - radius);
				ctx.moveTo(x - radius, y);
				ctx.lineTo(x + radius, y);
				xOffset = Math.cos(Math.PI / 4) * radius;
				yOffset = Math.sin(Math.PI / 4) * radius;
				ctx.moveTo(x - xOffset, y - yOffset);
				ctx.lineTo(x + xOffset, y + yOffset);
				ctx.moveTo(x - xOffset, y + yOffset);
				ctx.lineTo(x + xOffset, y - yOffset);
				ctx.closePath();
				break;
			case 'line':
				ctx.beginPath();
				ctx.moveTo(x - radius, y);
				ctx.lineTo(x + radius, y);
				ctx.closePath();
				break;
			case 'dash':
				ctx.beginPath();
				ctx.moveTo(x, y);
				ctx.lineTo(x + radius, y);
				ctx.closePath();
				break;
			}

			ctx.stroke();
		}
	});
};

},{}],37:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers,
		globalOpts = Chart.defaults.global;

	globalOpts.elements.rectangle = {
		backgroundColor: globalOpts.defaultColor,
		borderWidth: 0,
		borderColor: globalOpts.defaultColor,
		borderSkipped: 'bottom'
	};

	Chart.elements.Rectangle = Chart.Element.extend({
		draw: function() {
			var ctx = this._chart.ctx;
			var vm = this._view;

			var halfWidth = vm.width / 2,
				leftX = vm.x - halfWidth,
				rightX = vm.x + halfWidth,
				top = vm.base - (vm.base - vm.y),
				halfStroke = vm.borderWidth / 2;

			// Canvas doesn't allow us to stroke inside the width so we can
			// adjust the sizes to fit if we're setting a stroke on the line
			if (vm.borderWidth) {
				leftX += halfStroke;
				rightX -= halfStroke;
				top += halfStroke;
			}

			ctx.beginPath();
			ctx.fillStyle = vm.backgroundColor;
			ctx.strokeStyle = vm.borderColor;
			ctx.lineWidth = vm.borderWidth;

			// Corner points, from bottom-left to bottom-right clockwise
			// | 1 2 |
			// | 0 3 |
			var corners = [
				[leftX, vm.base],
				[leftX, top],
				[rightX, top],
				[rightX, vm.base]
			];

			// Find first (starting) corner with fallback to 'bottom' 
			var borders = ['bottom', 'left', 'top', 'right'];
			var startCorner = borders.indexOf(vm.borderSkipped, 0);
			if (startCorner === -1)
				startCorner = 0;

			function cornerAt(index) {
				return corners[(startCorner + index) % 4];
			}

			// Draw rectangle from 'startCorner'
			ctx.moveTo.apply(ctx, cornerAt(0));
			for (var i = 1; i < 4; i++)
				ctx.lineTo.apply(ctx, cornerAt(i));

			ctx.fill();
			if (vm.borderWidth) {
				ctx.stroke();
			}
		},
		height: function() {
			var vm = this._view;
			return vm.base - vm.y;
		},
		inRange: function(mouseX, mouseY) {
			var vm = this._view;
			return vm ? 
					(vm.y < vm.base ? 
						(mouseX >= vm.x - vm.width / 2 && mouseX <= vm.x + vm.width / 2) && (mouseY >= vm.y && mouseY <= vm.base) :
						(mouseX >= vm.x - vm.width / 2 && mouseX <= vm.x + vm.width / 2) && (mouseY >= vm.base && mouseY <= vm.y)) :
					false;
		},
		inLabelRange: function(mouseX) {
			var vm = this._view;
			return vm ? (mouseX >= vm.x - vm.width / 2 && mouseX <= vm.x + vm.width / 2) : false;
		},
		tooltipPosition: function() {
			var vm = this._view;
			return {
				x: vm.x,
				y: vm.y
			};
		}
	});

};
},{}],38:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;
	// Default config for a category scale
	var defaultConfig = {
		position: "bottom"
	};

	var DatasetScale = Chart.Scale.extend({
		// Implement this so that 
		determineDataLimits: function() {
			var me = this;
			me.minIndex = 0;
			me.maxIndex = me.chart.data.labels.length - 1;
			var findIndex;

			if (me.options.ticks.min !== undefined) {
				// user specified min value
				findIndex = helpers.indexOf(me.chart.data.labels, me.options.ticks.min);
				me.minIndex = findIndex !== -1 ? findIndex : me.minIndex;
			}

			if (me.options.ticks.max !== undefined) {
				// user specified max value
				findIndex = helpers.indexOf(me.chart.data.labels, me.options.ticks.max);
				me.maxIndex = findIndex !== -1 ? findIndex : me.maxIndex;
			}

			me.min = me.chart.data.labels[me.minIndex];
			me.max = me.chart.data.labels[me.maxIndex];
		},

		buildTicks: function(index) {
			var me = this;
			// If we are viewing some subset of labels, slice the original array
			me.ticks = (me.minIndex === 0 && me.maxIndex === me.chart.data.labels.length - 1) ? me.chart.data.labels : me.chart.data.labels.slice(me.minIndex, me.maxIndex + 1);
		},

		getLabelForIndex: function(index, datasetIndex) {
			return this.ticks[index];
		},

		// Used to get data value locations.  Value can either be an index or a numerical value
		getPixelForValue: function(value, index, datasetIndex, includeOffset) {
			var me = this;
			// 1 is added because we need the length but we have the indexes
			var offsetAmt = Math.max((me.maxIndex + 1 - me.minIndex - ((me.options.gridLines.offsetGridLines) ? 0 : 1)), 1);

			if (me.isHorizontal()) {
				var innerWidth = me.width - (me.paddingLeft + me.paddingRight);
				var valueWidth = innerWidth / offsetAmt;
				var widthOffset = (valueWidth * (index - me.minIndex)) + me.paddingLeft;

				if (me.options.gridLines.offsetGridLines && includeOffset) {
					widthOffset += (valueWidth / 2);
				}

				return me.left + Math.round(widthOffset);
			} else {
				var innerHeight = me.height - (me.paddingTop + me.paddingBottom);
				var valueHeight = innerHeight / offsetAmt;
				var heightOffset = (valueHeight * (index - me.minIndex)) + me.paddingTop;

				if (me.options.gridLines.offsetGridLines && includeOffset) {
					heightOffset += (valueHeight / 2);
				}

				return me.top + Math.round(heightOffset);
			}
		},
		getPixelForTick: function(index, includeOffset) {
			return this.getPixelForValue(this.ticks[index], index + this.minIndex, null, includeOffset);
		},
		getValueForPixel: function(pixel) {
			var me = this;
			var value;
			var offsetAmt = Math.max((me.ticks.length - ((me.options.gridLines.offsetGridLines) ? 0 : 1)), 1);
			var horz = me.isHorizontal();
			var innerDimension = horz ? me.width - (me.paddingLeft + me.paddingRight) : me.height - (me.paddingTop + me.paddingBottom);
			var valueDimension = innerDimension / offsetAmt;

			if (me.options.gridLines.offsetGridLines) {
				pixel -= (valueDimension / 2);
			}
			pixel -= horz ? me.paddingLeft : me.paddingTop;

			if (pixel <= 0) {
				value = 0;
			} else {
				value = Math.round(pixel / valueDimension);
			}

			return value;
		}
	});

	Chart.scaleService.registerScaleType("category", DatasetScale, defaultConfig);

};
},{}],39:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	var defaultConfig = {
		position: "left",
		ticks: {
			callback: function(tickValue, index, ticks) {
				// If we have lots of ticks, don't use the ones
				var delta = ticks.length > 3 ? ticks[2] - ticks[1] : ticks[1] - ticks[0];

				// If we have a number like 2.5 as the delta, figure out how many decimal places we need
				if (Math.abs(delta) > 1) {
					if (tickValue !== Math.floor(tickValue)) {
						// not an integer
						delta = tickValue - Math.floor(tickValue);
					}
				}

				var logDelta = helpers.log10(Math.abs(delta));
				var tickString = '';

				if (tickValue !== 0) {
					var numDecimal = -1 * Math.floor(logDelta);
					numDecimal = Math.max(Math.min(numDecimal, 20), 0); // toFixed has a max of 20 decimal places
					tickString = tickValue.toFixed(numDecimal);
				} else {
					tickString = '0'; // never show decimal places for 0
				}

				return tickString;
			}
		}
	};

	var LinearScale = Chart.LinearScaleBase.extend({
		determineDataLimits: function() {
			var me = this;
			var opts = me.options;
			var tickOpts = opts.ticks;
			var chart = me.chart;
			var data = chart.data;
			var datasets = data.datasets;
			var isHorizontal = me.isHorizontal();

			function IDMatches(meta) {
				return isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id;
			}

			// First Calculate the range
			me.min = null;
			me.max = null;

			if (opts.stacked) {
				var valuesPerType = {};
				var hasPositiveValues = false;
				var hasNegativeValues = false;

				helpers.each(datasets, function(dataset, datasetIndex) {
					var meta = chart.getDatasetMeta(datasetIndex);
					if (valuesPerType[meta.type] === undefined) {
						valuesPerType[meta.type] = {
							positiveValues: [],
							negativeValues: []
						};
					}

					// Store these per type
					var positiveValues = valuesPerType[meta.type].positiveValues;
					var negativeValues = valuesPerType[meta.type].negativeValues;

					if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
						helpers.each(dataset.data, function(rawValue, index) {
							var value = +me.getRightValue(rawValue);
							if (isNaN(value) || meta.data[index].hidden) {
								return;
							}

							positiveValues[index] = positiveValues[index] || 0;
							negativeValues[index] = negativeValues[index] || 0;

							if (opts.relativePoints) {
								positiveValues[index] = 100;
							} else {
								if (value < 0) {
									hasNegativeValues = true;
									negativeValues[index] += value;
								} else {
									hasPositiveValues = true;
									positiveValues[index] += value;
								}
							}
						});
					}
				});

				helpers.each(valuesPerType, function(valuesForType) {
					var values = valuesForType.positiveValues.concat(valuesForType.negativeValues);
					var minVal = helpers.min(values);
					var maxVal = helpers.max(values);
					me.min = me.min === null ? minVal : Math.min(me.min, minVal);
					me.max = me.max === null ? maxVal : Math.max(me.max, maxVal);
				});

			} else {
				helpers.each(datasets, function(dataset, datasetIndex) {
					var meta = chart.getDatasetMeta(datasetIndex);
					if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
						helpers.each(dataset.data, function(rawValue, index) {
							var value = +me.getRightValue(rawValue);
							if (isNaN(value) || meta.data[index].hidden) {
								return;
							}

							if (me.min === null) {
								me.min = value;
							} else if (value < me.min) {
								me.min = value;
							}

							if (me.max === null) {
								me.max = value;
							} else if (value > me.max) {
								me.max = value;
							}
						});
					}
				});
			}

			// Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
			this.handleTickRangeOptions();
		},
		getTickLimit: function() {
			var maxTicks;
			var me = this;
			var tickOpts = me.options.ticks;

			if (me.isHorizontal()) {
				maxTicks = Math.min(tickOpts.maxTicksLimit ? tickOpts.maxTicksLimit : 11, Math.ceil(me.width / 50));
			} else {
				// The factor of 2 used to scale the font size has been experimentally determined.
				var tickFontSize = helpers.getValueOrDefault(tickOpts.fontSize, Chart.defaults.global.defaultFontSize);
				maxTicks = Math.min(tickOpts.maxTicksLimit ? tickOpts.maxTicksLimit : 11, Math.ceil(me.height / (2 * tickFontSize)));
			}

			return maxTicks;
		},
		// Called after the ticks are built. We need 
		handleDirectionalChanges: function() {
			if (!this.isHorizontal()) {
				// We are in a vertical orientation. The top value is the highest. So reverse the array
				this.ticks.reverse();
			}
		},
		getLabelForIndex: function(index, datasetIndex) {
			return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
		},
		// Utils
		getPixelForValue: function(value, index, datasetIndex, includeOffset) {
			// This must be called after fit has been run so that
			//      this.left, this.top, this.right, and this.bottom have been defined
			var me = this;
			var paddingLeft = me.paddingLeft;
			var paddingBottom = me.paddingBottom;
			var start = me.start;

			var rightValue = +me.getRightValue(value);
			var pixel;
			var innerDimension;
			var range = me.end - start;

			if (me.isHorizontal()) {
				innerDimension = me.width - (paddingLeft + me.paddingRight);
				pixel = me.left + (innerDimension / range * (rightValue - start));
				return Math.round(pixel + paddingLeft);
			} else {
				innerDimension = me.height - (me.paddingTop + paddingBottom);
				pixel = (me.bottom - paddingBottom) - (innerDimension / range * (rightValue - start));
				return Math.round(pixel);
			}
		},
		getValueForPixel: function(pixel) {
			var me = this;
			var isHorizontal = me.isHorizontal();
			var paddingLeft = me.paddingLeft;
			var paddingBottom = me.paddingBottom;
			var innerDimension = isHorizontal ? me.width - (paddingLeft + me.paddingRight) : me.height - (me.paddingTop + paddingBottom);
			var offset = (isHorizontal ? pixel - me.left - paddingLeft : me.bottom - paddingBottom - pixel) / innerDimension;
			return me.start + ((me.end - me.start) * offset);
		},
		getPixelForTick: function(index, includeOffset) {
			return this.getPixelForValue(this.ticksAsNumbers[index], null, null, includeOffset);
		}
	});
	Chart.scaleService.registerScaleType("linear", LinearScale, defaultConfig);

};
},{}],40:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers,
		noop = helpers.noop;

	Chart.LinearScaleBase = Chart.Scale.extend({
		handleTickRangeOptions: function() {
			var me = this;
			var opts = me.options;
			var tickOpts = opts.ticks;

			// If we are forcing it to begin at 0, but 0 will already be rendered on the chart,
			// do nothing since that would make the chart weird. If the user really wants a weird chart
			// axis, they can manually override it
			if (tickOpts.beginAtZero) {
				var minSign = helpers.sign(me.min);
				var maxSign = helpers.sign(me.max);

				if (minSign < 0 && maxSign < 0) {
					// move the top up to 0
					me.max = 0;
				} else if (minSign > 0 && maxSign > 0) {
					// move the botttom down to 0
					me.min = 0;
				}
			}

			if (tickOpts.min !== undefined) {
				me.min = tickOpts.min;
			} else if (tickOpts.suggestedMin !== undefined) {
				me.min = Math.min(me.min, tickOpts.suggestedMin);
			}

			if (tickOpts.max !== undefined) {
				me.max = tickOpts.max;
			} else if (tickOpts.suggestedMax !== undefined) {
				me.max = Math.max(me.max, tickOpts.suggestedMax);
			}

			if (me.min === me.max) {
				me.max++;

				if (!tickOpts.beginAtZero) {
					me.min--;
				}
			}
		},
		getTickLimit: noop,
		handleDirectionalChanges: noop,

		buildTicks: function() {
			var me = this;
			var opts = me.options;
			var tickOpts = opts.ticks;
			var getValueOrDefault = helpers.getValueOrDefault;
			var isHorizontal = me.isHorizontal();

			var ticks = me.ticks = [];

			// Figure out what the max number of ticks we can support it is based on the size of
			// the axis area. For now, we say that the minimum tick spacing in pixels must be 50
			// We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
			// the graph

			var maxTicks = me.getTickLimit();

			// Make sure we always have at least 2 ticks
			maxTicks = Math.max(2, maxTicks);

			// To get a "nice" value for the tick spacing, we will use the appropriately named
			// "nice number" algorithm. See http://stackoverflow.com/questions/8506881/nice-label-algorithm-for-charts-with-minimum-ticks
			// for details.

			var spacing;
			var fixedStepSizeSet = (tickOpts.fixedStepSize && tickOpts.fixedStepSize > 0) || (tickOpts.stepSize && tickOpts.stepSize > 0);
			if (fixedStepSizeSet) {
				spacing = getValueOrDefault(tickOpts.fixedStepSize, tickOpts.stepSize);
			} else {
				var niceRange = helpers.niceNum(me.max - me.min, false);
				spacing = helpers.niceNum(niceRange / (maxTicks - 1), true);
			}
			var niceMin = Math.floor(me.min / spacing) * spacing;
			var niceMax = Math.ceil(me.max / spacing) * spacing;
			var numSpaces = (niceMax - niceMin) / spacing;

			// If very close to our rounded value, use it.
			if (helpers.almostEquals(numSpaces, Math.round(numSpaces), spacing / 1000)) {
				numSpaces = Math.round(numSpaces);
			} else {
				numSpaces = Math.ceil(numSpaces);
			}

			// Put the values into the ticks array
			ticks.push(tickOpts.min !== undefined ? tickOpts.min : niceMin);
			for (var j = 1; j < numSpaces; ++j) {
				ticks.push(niceMin + (j * spacing));
			}
			ticks.push(tickOpts.max !== undefined ? tickOpts.max : niceMax);

			me.handleDirectionalChanges();

			// At this point, we need to update our max and min given the tick values since we have expanded the
			// range of the scale
			me.max = helpers.max(ticks);
			me.min = helpers.min(ticks);

			if (tickOpts.reverse) {
				ticks.reverse();

				me.start = me.max;
				me.end = me.min;
			} else {
				me.start = me.min;
				me.end = me.max;
			}
		},
		convertTicksToLabels: function() {
			var me = this;
			me.ticksAsNumbers = me.ticks.slice();
			me.zeroLineIndex = me.ticks.indexOf(0);

			Chart.Scale.prototype.convertTicksToLabels.call(me);
		},
	});
};
},{}],41:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	var defaultConfig = {
		position: "left",

		// label settings
		ticks: {
			callback: function(value, index, arr) {
				var remain = value / (Math.pow(10, Math.floor(helpers.log10(value))));

				if (remain === 1 || remain === 2 || remain === 5 || index === 0 || index === arr.length - 1) {
					return value.toExponential();
				} else {
					return '';
				}
			}
		}
	};

	var LogarithmicScale = Chart.Scale.extend({
		determineDataLimits: function() {
			var me = this;
			var opts = me.options;
			var tickOpts = opts.ticks;
			var chart = me.chart;
			var data = chart.data;
			var datasets = data.datasets;
			var getValueOrDefault = helpers.getValueOrDefault;
			var isHorizontal = me.isHorizontal();
			function IDMatches(meta) {
				return isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id;
			}

			// Calculate Range
			me.min = null;
			me.max = null;

			if (opts.stacked) {
				var valuesPerType = {};

				helpers.each(datasets, function(dataset, datasetIndex) {
					var meta = chart.getDatasetMeta(datasetIndex);
					if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
						if (valuesPerType[meta.type] === undefined) {
							valuesPerType[meta.type] = [];
						}

						helpers.each(dataset.data, function(rawValue, index) {
							var values = valuesPerType[meta.type];
							var value = +me.getRightValue(rawValue);
							if (isNaN(value) || meta.data[index].hidden) {
								return;
							}

							values[index] = values[index] || 0;

							if (opts.relativePoints) {
								values[index] = 100;
							} else {
								// Don't need to split positive and negative since the log scale can't handle a 0 crossing
								values[index] += value;
							}
						});
					}
				});

				helpers.each(valuesPerType, function(valuesForType) {
					var minVal = helpers.min(valuesForType);
					var maxVal = helpers.max(valuesForType);
					me.min = me.min === null ? minVal : Math.min(me.min, minVal);
					me.max = me.max === null ? maxVal : Math.max(me.max, maxVal);
				});

			} else {
				helpers.each(datasets, function(dataset, datasetIndex) {
					var meta = chart.getDatasetMeta(datasetIndex);
					if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
						helpers.each(dataset.data, function(rawValue, index) {
							var value = +me.getRightValue(rawValue);
							if (isNaN(value) || meta.data[index].hidden) {
								return;
							}

							if (me.min === null) {
								me.min = value;
							} else if (value < me.min) {
								me.min = value;
							}

							if (me.max === null) {
								me.max = value;
							} else if (value > me.max) {
								me.max = value;
							}
						});
					}
				});
			}

			me.min = getValueOrDefault(tickOpts.min, me.min);
			me.max = getValueOrDefault(tickOpts.max, me.max);

			if (me.min === me.max) {
				if (me.min !== 0 && me.min !== null) {
					me.min = Math.pow(10, Math.floor(helpers.log10(me.min)) - 1);
					me.max = Math.pow(10, Math.floor(helpers.log10(me.max)) + 1);
				} else {
					me.min = 1;
					me.max = 10;
				}
			}
		},
		buildTicks: function() {
			var me = this;
			var opts = me.options;
			var tickOpts = opts.ticks;
			var getValueOrDefault = helpers.getValueOrDefault;

			// Reset the ticks array. Later on, we will draw a grid line at these positions
			// The array simply contains the numerical value of the spots where ticks will be
			var ticks = me.ticks = [];

			// Figure out what the max number of ticks we can support it is based on the size of
			// the axis area. For now, we say that the minimum tick spacing in pixels must be 50
			// We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
			// the graph

			var tickVal = getValueOrDefault(tickOpts.min, Math.pow(10, Math.floor(helpers.log10(me.min))));

			while (tickVal < me.max) {
				ticks.push(tickVal);

				var exp = Math.floor(helpers.log10(tickVal));
				var significand = Math.floor(tickVal / Math.pow(10, exp)) + 1;

				if (significand === 10) {
					significand = 1;
					++exp;
				}

				tickVal = significand * Math.pow(10, exp);
			}

			var lastTick = getValueOrDefault(tickOpts.max, tickVal);
			ticks.push(lastTick);

			if (!me.isHorizontal()) {
				// We are in a vertical orientation. The top value is the highest. So reverse the array
				ticks.reverse();
			}

			// At this point, we need to update our max and min given the tick values since we have expanded the
			// range of the scale
			me.max = helpers.max(ticks);
			me.min = helpers.min(ticks);

			if (tickOpts.reverse) {
				ticks.reverse();

				me.start = me.max;
				me.end = me.min;
			} else {
				me.start = me.min;
				me.end = me.max;
			}
		},
		convertTicksToLabels: function() {
			this.tickValues = this.ticks.slice();

			Chart.Scale.prototype.convertTicksToLabels.call(this);
		},
		// Get the correct tooltip label
		getLabelForIndex: function(index, datasetIndex) {
			return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
		},
		getPixelForTick: function(index, includeOffset) {
			return this.getPixelForValue(this.tickValues[index], null, null, includeOffset);
		},
		getPixelForValue: function(value, index, datasetIndex, includeOffset) {
			var me = this;
			var innerDimension;
			var pixel;

			var start = me.start;
			var newVal = +me.getRightValue(value);
			var range = helpers.log10(me.end) - helpers.log10(start);
			var paddingTop = me.paddingTop;
			var paddingBottom = me.paddingBottom;
			var paddingLeft = me.paddingLeft;

			if (me.isHorizontal()) {

				if (newVal === 0) {
					pixel = me.left + paddingLeft;
				} else {
					innerDimension = me.width - (paddingLeft + me.paddingRight);
					pixel = me.left + (innerDimension / range * (helpers.log10(newVal) - helpers.log10(start)));
					pixel += paddingLeft;
				}
			} else {
				// Bottom - top since pixels increase downard on a screen
				if (newVal === 0) {
					pixel = me.top + paddingTop;
				} else {
					innerDimension = me.height - (paddingTop + paddingBottom);
					pixel = (me.bottom - paddingBottom) - (innerDimension / range * (helpers.log10(newVal) - helpers.log10(start)));
				}
			}

			return pixel;
		},
		getValueForPixel: function(pixel) {
			var me = this;
			var offset;
			var range = helpers.log10(me.end) - helpers.log10(me.start);
			var value;
			var innerDimension;

			if (me.isHorizontal()) {
				innerDimension = me.width - (me.paddingLeft + me.paddingRight);
				value = me.start * Math.pow(10, (pixel - me.left - me.paddingLeft) * range / innerDimension);
			} else {
				innerDimension = me.height - (me.paddingTop + me.paddingBottom);
				value = Math.pow(10, (me.bottom - me.paddingBottom - pixel) * range / innerDimension) / me.start;
			}

			return value;
		}
	});
	Chart.scaleService.registerScaleType("logarithmic", LogarithmicScale, defaultConfig);

};
},{}],42:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;
	var globalDefaults = Chart.defaults.global;

	var defaultConfig = {
		display: true,

		//Boolean - Whether to animate scaling the chart from the centre
		animate: true,
		lineArc: false,
		position: "chartArea",

		angleLines: {
			display: true,
			color: "rgba(0, 0, 0, 0.1)",
			lineWidth: 1
		},

		// label settings
		ticks: {
			//Boolean - Show a backdrop to the scale label
			showLabelBackdrop: true,

			//String - The colour of the label backdrop
			backdropColor: "rgba(255,255,255,0.75)",

			//Number - The backdrop padding above & below the label in pixels
			backdropPaddingY: 2,

			//Number - The backdrop padding to the side of the label in pixels
			backdropPaddingX: 2
		},

		pointLabels: {
			//Number - Point label font size in pixels
			fontSize: 10,

			//Function - Used to convert point labels
			callback: function(label) {
				return label;
			}
		}
	};

	var LinearRadialScale = Chart.LinearScaleBase.extend({
		getValueCount: function() {
			return this.chart.data.labels.length;
		},
		setDimensions: function() {
			var me = this;
			var opts = me.options;
			var tickOpts = opts.ticks;
			// Set the unconstrained dimension before label rotation
			me.width = me.maxWidth;
			me.height = me.maxHeight;
			me.xCenter = Math.round(me.width / 2);
			me.yCenter = Math.round(me.height / 2);

			var minSize = helpers.min([me.height, me.width]);
			var tickFontSize = helpers.getValueOrDefault(tickOpts.fontSize, globalDefaults.defaultFontSize);
			me.drawingArea = opts.display ? (minSize / 2) - (tickFontSize / 2 + tickOpts.backdropPaddingY) : (minSize / 2);
		},
		determineDataLimits: function() {
			var me = this;
			var chart = me.chart;
			me.min = null;
			me.max = null;


			helpers.each(chart.data.datasets, function(dataset, datasetIndex) {
				if (chart.isDatasetVisible(datasetIndex)) {
					var meta = chart.getDatasetMeta(datasetIndex);

					helpers.each(dataset.data, function(rawValue, index) {
						var value = +me.getRightValue(rawValue);
						if (isNaN(value) || meta.data[index].hidden) {
							return;
						}

						if (me.min === null) {
							me.min = value;
						} else if (value < me.min) {
							me.min = value;
						}

						if (me.max === null) {
							me.max = value;
						} else if (value > me.max) {
							me.max = value;
						}
					});
				}
			});

			// Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
			me.handleTickRangeOptions();
		},
		getTickLimit: function() {
			var tickOpts = this.options.ticks;
			var tickFontSize = helpers.getValueOrDefault(tickOpts.fontSize, globalDefaults.defaultFontSize);
			return Math.min(tickOpts.maxTicksLimit ? tickOpts.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * tickFontSize)));
		},
		convertTicksToLabels: function() {
			var me = this;
			Chart.LinearScaleBase.prototype.convertTicksToLabels.call(me);

			// Point labels
			me.pointLabels = me.chart.data.labels.map(me.options.pointLabels.callback, me);
		},
		getLabelForIndex: function(index, datasetIndex) {
			return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
		},
		fit: function() {
			/*
			 * Right, this is really confusing and there is a lot of maths going on here
			 * The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
			 *
			 * Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
			 *
			 * Solution:
			 *
			 * We assume the radius of the polygon is half the size of the canvas at first
			 * at each index we check if the text overlaps.
			 *
			 * Where it does, we store that angle and that index.
			 *
			 * After finding the largest index and angle we calculate how much we need to remove
			 * from the shape radius to move the point inwards by that x.
			 *
			 * We average the left and right distances to get the maximum shape radius that can fit in the box
			 * along with labels.
			 *
			 * Once we have that, we can find the centre point for the chart, by taking the x text protrusion
			 * on each side, removing that from the size, halving it and adding the left x protrusion width.
			 *
			 * This will mean we have a shape fitted to the canvas, as large as it can be with the labels
			 * and position it in the most space efficient manner
			 *
			 * https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif
			 */

			var pointLabels = this.options.pointLabels;
			var pointLabelFontSize = helpers.getValueOrDefault(pointLabels.fontSize, globalDefaults.defaultFontSize);
			var pointLabeFontStyle = helpers.getValueOrDefault(pointLabels.fontStyle, globalDefaults.defaultFontStyle);
			var pointLabeFontFamily = helpers.getValueOrDefault(pointLabels.fontFamily, globalDefaults.defaultFontFamily);
			var pointLabeFont = helpers.fontString(pointLabelFontSize, pointLabeFontStyle, pointLabeFontFamily);

			// Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
			// Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points
			var largestPossibleRadius = helpers.min([(this.height / 2 - pointLabelFontSize - 5), this.width / 2]),
				pointPosition,
				i,
				textWidth,
				halfTextWidth,
				furthestRight = this.width,
				furthestRightIndex,
				furthestRightAngle,
				furthestLeft = 0,
				furthestLeftIndex,
				furthestLeftAngle,
				xProtrusionLeft,
				xProtrusionRight,
				radiusReductionRight,
				radiusReductionLeft,
				maxWidthRadius;
			this.ctx.font = pointLabeFont;

			for (i = 0; i < this.getValueCount(); i++) {
				// 5px to space the text slightly out - similar to what we do in the draw function.
				pointPosition = this.getPointPosition(i, largestPossibleRadius);
				textWidth = this.ctx.measureText(this.pointLabels[i] ? this.pointLabels[i] : '').width + 5;
				if (i === 0 || i === this.getValueCount() / 2) {
					// If we're at index zero, or exactly the middle, we're at exactly the top/bottom
					// of the radar chart, so text will be aligned centrally, so we'll half it and compare
					// w/left and right text sizes
					halfTextWidth = textWidth / 2;
					if (pointPosition.x + halfTextWidth > furthestRight) {
						furthestRight = pointPosition.x + halfTextWidth;
						furthestRightIndex = i;
					}
					if (pointPosition.x - halfTextWidth < furthestLeft) {
						furthestLeft = pointPosition.x - halfTextWidth;
						furthestLeftIndex = i;
					}
				} else if (i < this.getValueCount() / 2) {
					// Less than half the values means we'll left align the text
					if (pointPosition.x + textWidth > furthestRight) {
						furthestRight = pointPosition.x + textWidth;
						furthestRightIndex = i;
					}
				} else if (i > this.getValueCount() / 2) {
					// More than half the values means we'll right align the text
					if (pointPosition.x - textWidth < furthestLeft) {
						furthestLeft = pointPosition.x - textWidth;
						furthestLeftIndex = i;
					}
				}
			}

			xProtrusionLeft = furthestLeft;
			xProtrusionRight = Math.ceil(furthestRight - this.width);

			furthestRightAngle = this.getIndexAngle(furthestRightIndex);
			furthestLeftAngle = this.getIndexAngle(furthestLeftIndex);

			radiusReductionRight = xProtrusionRight / Math.sin(furthestRightAngle + Math.PI / 2);
			radiusReductionLeft = xProtrusionLeft / Math.sin(furthestLeftAngle + Math.PI / 2);

			// Ensure we actually need to reduce the size of the chart
			radiusReductionRight = (helpers.isNumber(radiusReductionRight)) ? radiusReductionRight : 0;
			radiusReductionLeft = (helpers.isNumber(radiusReductionLeft)) ? radiusReductionLeft : 0;

			this.drawingArea = Math.round(largestPossibleRadius - (radiusReductionLeft + radiusReductionRight) / 2);
			this.setCenterPoint(radiusReductionLeft, radiusReductionRight);
		},
		setCenterPoint: function(leftMovement, rightMovement) {
			var me = this;
			var maxRight = me.width - rightMovement - me.drawingArea,
				maxLeft = leftMovement + me.drawingArea;

			me.xCenter = Math.round(((maxLeft + maxRight) / 2) + me.left);
			// Always vertically in the centre as the text height doesn't change
			me.yCenter = Math.round((me.height / 2) + me.top);
		},

		getIndexAngle: function(index) {
			var angleMultiplier = (Math.PI * 2) / this.getValueCount();
			// Start from the top instead of right, so remove a quarter of the circle

			return index * angleMultiplier - (Math.PI / 2);
		},
		getDistanceFromCenterForValue: function(value) {
			var me = this;

			if (value === null) {
				return 0; // null always in center
			}

			// Take into account half font size + the yPadding of the top value
			var scalingFactor = me.drawingArea / (me.max - me.min);
			if (me.options.reverse) {
				return (me.max - value) * scalingFactor;
			} else {
				return (value - me.min) * scalingFactor;
			}
		},
		getPointPosition: function(index, distanceFromCenter) {
			var me = this;
			var thisAngle = me.getIndexAngle(index);
			return {
				x: Math.round(Math.cos(thisAngle) * distanceFromCenter) + me.xCenter,
				y: Math.round(Math.sin(thisAngle) * distanceFromCenter) + me.yCenter
			};
		},
		getPointPositionForValue: function(index, value) {
			return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
		},

		getBasePosition: function() {
			var me = this;
			var min = me.min;
			var max = me.max;

			return me.getPointPositionForValue(0,
				me.beginAtZero? 0:
				min < 0 && max < 0? max :
				min > 0 && max > 0? min :
				0);
		},

		draw: function() {
			var me = this;
			var opts = me.options;
			var gridLineOpts = opts.gridLines;
			var tickOpts = opts.ticks;
			var angleLineOpts = opts.angleLines;
			var pointLabelOpts = opts.pointLabels;
			var getValueOrDefault = helpers.getValueOrDefault;

			if (opts.display) {
				var ctx = me.ctx;

				// Tick Font
				var tickFontSize = getValueOrDefault(tickOpts.fontSize, globalDefaults.defaultFontSize);
				var tickFontStyle = getValueOrDefault(tickOpts.fontStyle, globalDefaults.defaultFontStyle);
				var tickFontFamily = getValueOrDefault(tickOpts.fontFamily, globalDefaults.defaultFontFamily);
				var tickLabelFont = helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);

				helpers.each(me.ticks, function(label, index) {
					// Don't draw a centre value (if it is minimum)
					if (index > 0 || opts.reverse) {
						var yCenterOffset = me.getDistanceFromCenterForValue(me.ticksAsNumbers[index]);
						var yHeight = me.yCenter - yCenterOffset;

						// Draw circular lines around the scale
						if (gridLineOpts.display && index !== 0) {
							ctx.strokeStyle = helpers.getValueAtIndexOrDefault(gridLineOpts.color, index - 1);
							ctx.lineWidth = helpers.getValueAtIndexOrDefault(gridLineOpts.lineWidth, index - 1);

							if (opts.lineArc) {
								// Draw circular arcs between the points
								ctx.beginPath();
								ctx.arc(me.xCenter, me.yCenter, yCenterOffset, 0, Math.PI * 2);
								ctx.closePath();
								ctx.stroke();
							} else {
								// Draw straight lines connecting each index
								ctx.beginPath();
								for (var i = 0; i < me.getValueCount(); i++) {
									var pointPosition = me.getPointPosition(i, yCenterOffset);
									if (i === 0) {
										ctx.moveTo(pointPosition.x, pointPosition.y);
									} else {
										ctx.lineTo(pointPosition.x, pointPosition.y);
									}
								}
								ctx.closePath();
								ctx.stroke();
							}
						}

						if (tickOpts.display) {
							var tickFontColor = getValueOrDefault(tickOpts.fontColor, globalDefaults.defaultFontColor);
							ctx.font = tickLabelFont;

							if (tickOpts.showLabelBackdrop) {
								var labelWidth = ctx.measureText(label).width;
								ctx.fillStyle = tickOpts.backdropColor;
								ctx.fillRect(
									me.xCenter - labelWidth / 2 - tickOpts.backdropPaddingX,
									yHeight - tickFontSize / 2 - tickOpts.backdropPaddingY,
									labelWidth + tickOpts.backdropPaddingX * 2,
									tickFontSize + tickOpts.backdropPaddingY * 2
								);
							}

							ctx.textAlign = 'center';
							ctx.textBaseline = "middle";
							ctx.fillStyle = tickFontColor;
							ctx.fillText(label, me.xCenter, yHeight);
						}
					}
				});

				if (!opts.lineArc) {
					ctx.lineWidth = angleLineOpts.lineWidth;
					ctx.strokeStyle = angleLineOpts.color;

					var outerDistance = me.getDistanceFromCenterForValue(opts.reverse ? me.min : me.max);

					// Point Label Font
					var pointLabelFontSize = getValueOrDefault(pointLabelOpts.fontSize, globalDefaults.defaultFontSize);
					var pointLabeFontStyle = getValueOrDefault(pointLabelOpts.fontStyle, globalDefaults.defaultFontStyle);
					var pointLabeFontFamily = getValueOrDefault(pointLabelOpts.fontFamily, globalDefaults.defaultFontFamily);
					var pointLabeFont = helpers.fontString(pointLabelFontSize, pointLabeFontStyle, pointLabeFontFamily);

					for (var i = me.getValueCount() - 1; i >= 0; i--) {
						if (angleLineOpts.display) {
							var outerPosition = me.getPointPosition(i, outerDistance);
							ctx.beginPath();
							ctx.moveTo(me.xCenter, me.yCenter);
							ctx.lineTo(outerPosition.x, outerPosition.y);
							ctx.stroke();
							ctx.closePath();
						}
						// Extra 3px out for some label spacing
						var pointLabelPosition = me.getPointPosition(i, outerDistance + 5);

						// Keep this in loop since we may support array properties here
						var pointLabelFontColor = getValueOrDefault(pointLabelOpts.fontColor, globalDefaults.defaultFontColor);
						ctx.font = pointLabeFont;
						ctx.fillStyle = pointLabelFontColor;

						var pointLabels = me.pointLabels,
							labelsCount = pointLabels.length,
							halfLabelsCount = pointLabels.length / 2,
							quarterLabelsCount = halfLabelsCount / 2,
							upperHalf = (i < quarterLabelsCount || i > labelsCount - quarterLabelsCount),
							exactQuarter = (i === quarterLabelsCount || i === labelsCount - quarterLabelsCount);
						if (i === 0) {
							ctx.textAlign = 'center';
						} else if (i === halfLabelsCount) {
							ctx.textAlign = 'center';
						} else if (i < halfLabelsCount) {
							ctx.textAlign = 'left';
						} else {
							ctx.textAlign = 'right';
						}

						// Set the correct text baseline based on outer positioning
						if (exactQuarter) {
							ctx.textBaseline = 'middle';
						} else if (upperHalf) {
							ctx.textBaseline = 'bottom';
						} else {
							ctx.textBaseline = 'top';
						}

						ctx.fillText(pointLabels[i] ? pointLabels[i] : '', pointLabelPosition.x, pointLabelPosition.y);
					}
				}
			}
		}
	});
	Chart.scaleService.registerScaleType("radialLinear", LinearRadialScale, defaultConfig);

};

},{}],43:[function(require,module,exports){
/*global window: false */
"use strict";

var moment = require(1);
moment = typeof(moment) === 'function' ? moment : window.moment;

module.exports = function(Chart) {

	var helpers = Chart.helpers;
	var time = {
		units: [{
			name: 'millisecond',
			steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
		}, {
			name: 'second',
			steps: [1, 2, 5, 10, 30]
		}, {
			name: 'minute',
			steps: [1, 2, 5, 10, 30]
		}, {
			name: 'hour',
			steps: [1, 2, 3, 6, 12]
		}, {
			name: 'day',
			steps: [1, 2, 5]
		}, {
			name: 'week',
			maxStep: 4
		}, {
			name: 'month',
			maxStep: 3
		}, {
			name: 'quarter',
			maxStep: 4
		}, {
			name: 'year',
			maxStep: false
		}]
	};

	var defaultConfig = {
		position: "bottom",

		time: {
			parser: false, // false == a pattern string from http://momentjs.com/docs/#/parsing/string-format/ or a custom callback that converts its argument to a moment
			format: false, // DEPRECATED false == date objects, moment object, callback or a pattern string from http://momentjs.com/docs/#/parsing/string-format/
			unit: false, // false == automatic or override with week, month, year, etc.
			round: false, // none, or override with week, month, year, etc.
			displayFormat: false, // DEPRECATED
			isoWeekday: false, // override week start day - see http://momentjs.com/docs/#/get-set/iso-weekday/

			// defaults to unit's corresponding unitFormat below or override using pattern string from http://momentjs.com/docs/#/displaying/format/
			displayFormats: {
				'millisecond': 'h:mm:ss.SSS a', // 11:20:01.123 AM,
				'second': 'h:mm:ss a', // 11:20:01 AM
				'minute': 'h:mm:ss a', // 11:20:01 AM
				'hour': 'MMM D, hA', // Sept 4, 5PM
				'day': 'll', // Sep 4 2015
				'week': 'll', // Week 46, or maybe "[W]WW - YYYY" ?
				'month': 'MMM YYYY', // Sept 2015
				'quarter': '[Q]Q - YYYY', // Q3
				'year': 'YYYY' // 2015
			}
		},
		ticks: {
			autoSkip: false
		}
	};

	var TimeScale = Chart.Scale.extend({
		initialize: function() {
			if (!moment) {
				throw new Error('Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com');
			}

			Chart.Scale.prototype.initialize.call(this);
		},
		getLabelMoment: function(datasetIndex, index) {
			return this.labelMoments[datasetIndex][index];
		},
		getMomentStartOf: function(tick) {
			var me = this;
			if (me.options.time.unit === 'week' && me.options.time.isoWeekday !== false) {
				return tick.clone().startOf('isoWeek').isoWeekday(me.options.time.isoWeekday);
			} else {
				return tick.clone().startOf(me.tickUnit);
			}
		},
		determineDataLimits: function() {
			var me = this;
			me.labelMoments = [];

			// Only parse these once. If the dataset does not have data as x,y pairs, we will use
			// these
			var scaleLabelMoments = [];
			if (me.chart.data.labels && me.chart.data.labels.length > 0) {
				helpers.each(me.chart.data.labels, function(label, index) {
					var labelMoment = me.parseTime(label);

					if (labelMoment.isValid()) {
						if (me.options.time.round) {
							labelMoment.startOf(me.options.time.round);
						}
						scaleLabelMoments.push(labelMoment);
					}
				}, me);

				me.firstTick = moment.min.call(me, scaleLabelMoments);
				me.lastTick = moment.max.call(me, scaleLabelMoments);
			} else {
				me.firstTick = null;
				me.lastTick = null;
			}

			helpers.each(me.chart.data.datasets, function(dataset, datasetIndex) {
				var momentsForDataset = [];
				var datasetVisible = me.chart.isDatasetVisible(datasetIndex);

				if (typeof dataset.data[0] === 'object' && dataset.data[0] !== null) {
					helpers.each(dataset.data, function(value, index) {
						var labelMoment = me.parseTime(me.getRightValue(value));

						if (labelMoment.isValid()) {
							if (me.options.time.round) {
								labelMoment.startOf(me.options.time.round);
							}
							momentsForDataset.push(labelMoment);

							if (datasetVisible) {
								// May have gone outside the scale ranges, make sure we keep the first and last ticks updated
								me.firstTick = me.firstTick !== null ? moment.min(me.firstTick, labelMoment) : labelMoment;
								me.lastTick = me.lastTick !== null ? moment.max(me.lastTick, labelMoment) : labelMoment;
							}
						}
					}, me);
				} else {
					// We have no labels. Use the ones from the scale
					momentsForDataset = scaleLabelMoments;
				}

				me.labelMoments.push(momentsForDataset);
			}, me);

			// Set these after we've done all the data
			if (me.options.time.min) {
				me.firstTick = me.parseTime(me.options.time.min);
			}

			if (me.options.time.max) {
				me.lastTick = me.parseTime(me.options.time.max);
			}

			// We will modify these, so clone for later
			me.firstTick = (me.firstTick || moment()).clone();
			me.lastTick = (me.lastTick || moment()).clone();
		},
		buildTicks: function(index) {
			var me = this;

			me.ctx.save();
			var tickFontSize = helpers.getValueOrDefault(me.options.ticks.fontSize, Chart.defaults.global.defaultFontSize);
			var tickFontStyle = helpers.getValueOrDefault(me.options.ticks.fontStyle, Chart.defaults.global.defaultFontStyle);
			var tickFontFamily = helpers.getValueOrDefault(me.options.ticks.fontFamily, Chart.defaults.global.defaultFontFamily);
			var tickLabelFont = helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);
			me.ctx.font = tickLabelFont;

			me.ticks = [];
			me.unitScale = 1; // How much we scale the unit by, ie 2 means 2x unit per step
			me.scaleSizeInUnits = 0; // How large the scale is in the base unit (seconds, minutes, etc)

			// Set unit override if applicable
			if (me.options.time.unit) {
				me.tickUnit = me.options.time.unit || 'day';
				me.displayFormat = me.options.time.displayFormats[me.tickUnit];
				me.scaleSizeInUnits = me.lastTick.diff(me.firstTick, me.tickUnit, true);
				me.unitScale = helpers.getValueOrDefault(me.options.time.unitStepSize, 1);
			} else {
				// Determine the smallest needed unit of the time
				var innerWidth = me.isHorizontal() ? me.width - (me.paddingLeft + me.paddingRight) : me.height - (me.paddingTop + me.paddingBottom);

				// Crude approximation of what the label length might be
				var tempFirstLabel = me.tickFormatFunction(me.firstTick, 0, []);
				var tickLabelWidth = me.ctx.measureText(tempFirstLabel).width;
				var cosRotation = Math.cos(helpers.toRadians(me.options.ticks.maxRotation));
				var sinRotation = Math.sin(helpers.toRadians(me.options.ticks.maxRotation));
				tickLabelWidth = (tickLabelWidth * cosRotation) + (tickFontSize * sinRotation);
				var labelCapacity = innerWidth / (tickLabelWidth);

				// Start as small as possible
				me.tickUnit = 'millisecond';
				me.scaleSizeInUnits = me.lastTick.diff(me.firstTick, me.tickUnit, true);
				me.displayFormat = me.options.time.displayFormats[me.tickUnit];

				var unitDefinitionIndex = 0;
				var unitDefinition = time.units[unitDefinitionIndex];

				// While we aren't ideal and we don't have units left
				while (unitDefinitionIndex < time.units.length) {
					// Can we scale this unit. If `false` we can scale infinitely
					me.unitScale = 1;

					if (helpers.isArray(unitDefinition.steps) && Math.ceil(me.scaleSizeInUnits / labelCapacity) < helpers.max(unitDefinition.steps)) {
						// Use one of the prefedined steps
						for (var idx = 0; idx < unitDefinition.steps.length; ++idx) {
							if (unitDefinition.steps[idx] >= Math.ceil(me.scaleSizeInUnits / labelCapacity)) {
								me.unitScale = helpers.getValueOrDefault(me.options.time.unitStepSize, unitDefinition.steps[idx]);
								break;
							}
						}

						break;
					} else if ((unitDefinition.maxStep === false) || (Math.ceil(me.scaleSizeInUnits / labelCapacity) < unitDefinition.maxStep)) {
						// We have a max step. Scale this unit
						me.unitScale = helpers.getValueOrDefault(me.options.time.unitStepSize, Math.ceil(me.scaleSizeInUnits / labelCapacity));
						break;
					} else {
						// Move to the next unit up
						++unitDefinitionIndex;
						unitDefinition = time.units[unitDefinitionIndex];

						me.tickUnit = unitDefinition.name;
						var leadingUnitBuffer = me.firstTick.diff(me.getMomentStartOf(me.firstTick), me.tickUnit, true);
						var trailingUnitBuffer = me.getMomentStartOf(me.lastTick.clone().add(1, me.tickUnit)).diff(me.lastTick, me.tickUnit, true);
						me.scaleSizeInUnits = me.lastTick.diff(me.firstTick, me.tickUnit, true) + leadingUnitBuffer + trailingUnitBuffer;
						me.displayFormat = me.options.time.displayFormats[unitDefinition.name];
					}
				}
			}

			var roundedStart;

			// Only round the first tick if we have no hard minimum
			if (!me.options.time.min) {
				me.firstTick = me.getMomentStartOf(me.firstTick);
				roundedStart = me.firstTick;
			} else {
				roundedStart = me.getMomentStartOf(me.firstTick);
			}

			// Only round the last tick if we have no hard maximum
			if (!me.options.time.max) {
				var roundedEnd = me.getMomentStartOf(me.lastTick);
				if (roundedEnd.diff(me.lastTick, me.tickUnit, true) !== 0) {
					// Do not use end of because we need me to be in the next time unit
					me.lastTick = me.getMomentStartOf(me.lastTick.add(1, me.tickUnit));
				}
			}

			me.smallestLabelSeparation = me.width;

			helpers.each(me.chart.data.datasets, function(dataset, datasetIndex) {
				for (var i = 1; i < me.labelMoments[datasetIndex].length; i++) {
					me.smallestLabelSeparation = Math.min(me.smallestLabelSeparation, me.labelMoments[datasetIndex][i].diff(me.labelMoments[datasetIndex][i - 1], me.tickUnit, true));
				}
			}, me);

			// Tick displayFormat override
			if (me.options.time.displayFormat) {
				me.displayFormat = me.options.time.displayFormat;
			}

			// first tick. will have been rounded correctly if options.time.min is not specified
			me.ticks.push(me.firstTick.clone());

			// For every unit in between the first and last moment, create a moment and add it to the ticks tick
			for (var i = 1; i <= me.scaleSizeInUnits; ++i) {
				var newTick = roundedStart.clone().add(i, me.tickUnit);

				// Are we greater than the max time
				if (me.options.time.max && newTick.diff(me.lastTick, me.tickUnit, true) >= 0) {
					break;
				}

				if (i % me.unitScale === 0) {
					me.ticks.push(newTick);
				}
			}

			// Always show the right tick
			var diff = me.ticks[me.ticks.length - 1].diff(me.lastTick, me.tickUnit);
			if (diff !== 0 || me.scaleSizeInUnits === 0) {
				// this is a weird case. If the <max> option is the same as the end option, we can't just diff the times because the tick was created from the roundedStart
				// but the last tick was not rounded.
				if (me.options.time.max) {
					me.ticks.push(me.lastTick.clone());
					me.scaleSizeInUnits = me.lastTick.diff(me.ticks[0], me.tickUnit, true);
				} else {
					me.ticks.push(me.lastTick.clone());
					me.scaleSizeInUnits = me.lastTick.diff(me.firstTick, me.tickUnit, true);
				}
			}

			me.ctx.restore();
		},
		// Get tooltip label
		getLabelForIndex: function(index, datasetIndex) {
			var me = this;
			var label = me.chart.data.labels && index < me.chart.data.labels.length ? me.chart.data.labels[index] : '';

			if (typeof me.chart.data.datasets[datasetIndex].data[0] === 'object') {
				label = me.getRightValue(me.chart.data.datasets[datasetIndex].data[index]);
			}

			// Format nicely
			if (me.options.time.tooltipFormat) {
				label = me.parseTime(label).format(me.options.time.tooltipFormat);
			}

			return label;
		},
		// Function to format an individual tick mark
		tickFormatFunction: function tickFormatFunction(tick, index, ticks) {
			var formattedTick = tick.format(this.displayFormat);
			var tickOpts = this.options.ticks;
			var callback = helpers.getValueOrDefault(tickOpts.callback, tickOpts.userCallback);

			if (callback) {
				return callback(formattedTick, index, ticks);
			} else {
				return formattedTick;
			}
		},
		convertTicksToLabels: function() {
			var me = this;
			me.tickMoments = me.ticks;
			me.ticks = me.ticks.map(me.tickFormatFunction, me);
		},
		getPixelForValue: function(value, index, datasetIndex, includeOffset) {
			var me = this;
			var labelMoment = value && value.isValid && value.isValid() ? value : me.getLabelMoment(datasetIndex, index);

			if (labelMoment) {
				var offset = labelMoment.diff(me.firstTick, me.tickUnit, true);

				var decimal = offset / me.scaleSizeInUnits;

				if (me.isHorizontal()) {
					var innerWidth = me.width - (me.paddingLeft + me.paddingRight);
					var valueWidth = innerWidth / Math.max(me.ticks.length - 1, 1);
					var valueOffset = (innerWidth * decimal) + me.paddingLeft;

					return me.left + Math.round(valueOffset);
				} else {
					var innerHeight = me.height - (me.paddingTop + me.paddingBottom);
					var valueHeight = innerHeight / Math.max(me.ticks.length - 1, 1);
					var heightOffset = (innerHeight * decimal) + me.paddingTop;

					return me.top + Math.round(heightOffset);
				}
			}
		},
		getPixelForTick: function(index, includeOffset) {
			return this.getPixelForValue(this.tickMoments[index], null, null, includeOffset);
		},
		getValueForPixel: function(pixel) {
			var me = this;
			var innerDimension = me.isHorizontal() ? me.width - (me.paddingLeft + me.paddingRight) : me.height - (me.paddingTop + me.paddingBottom);
			var offset = (pixel - (me.isHorizontal() ? me.left + me.paddingLeft : me.top + me.paddingTop)) / innerDimension;
			offset *= me.scaleSizeInUnits;
			return me.firstTick.clone().add(moment.duration(offset, me.tickUnit).asSeconds(), 'seconds');
		},
		parseTime: function(label) {
			var me = this;
			if (typeof me.options.time.parser === 'string') {
				return moment(label, me.options.time.parser);
			}
			if (typeof me.options.time.parser === 'function') {
				return me.options.time.parser(label);
			}
			// Date objects
			if (typeof label.getMonth === 'function' || typeof label === 'number') {
				return moment(label);
			}
			// Moment support
			if (label.isValid && label.isValid()) {
				return label;
			}
			// Custom parsing (return an instance of moment)
			if (typeof me.options.time.format !== 'string' && me.options.time.format.call) {
				console.warn("options.time.format is deprecated and replaced by options.time.parser. See http://nnnick.github.io/Chart.js/docs-v2/#scales-time-scale");
				return me.options.time.format(label);
			}
			// Moment format parsing
			return moment(label, me.options.time.format);
		}
	});
	Chart.scaleService.registerScaleType("time", TimeScale, defaultConfig);

};

},{"1":1}]},{},[7])(7)
});
;
/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.1.6
 *
 * Copyright 2016 Nick Downie
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Chart=t()}}(function(){var t;return function e(t,n,i){function a(o,s){if(!n[o]){if(!t[o]){var l="function"==typeof require&&require;if(!s&&l)return l(o,!0);if(r)return r(o,!0);var u=new Error("Cannot find module '"+o+"'");throw u.code="MODULE_NOT_FOUND",u}var d=n[o]={exports:{}};t[o][0].call(d.exports,function(e){var n=t[o][1][e];return a(n?n:e)},d,d.exports,e,t,n,i)}return n[o].exports}for(var r="function"==typeof require&&require,o=0;o<i.length;o++)a(i[o]);return a}({1:[function(t,e,n){function i(t){if(t){var e=/^#([a-fA-F0-9]{3})$/,n=/^#([a-fA-F0-9]{6})$/,i=/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,a=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,r=/(\w+)/,o=[0,0,0],s=1,l=t.match(e);if(l){l=l[1];for(var u=0;u<o.length;u++)o[u]=parseInt(l[u]+l[u],16)}else if(l=t.match(n)){l=l[1];for(var u=0;u<o.length;u++)o[u]=parseInt(l.slice(2*u,2*u+2),16)}else if(l=t.match(i)){for(var u=0;u<o.length;u++)o[u]=parseInt(l[u+1]);s=parseFloat(l[4])}else if(l=t.match(a)){for(var u=0;u<o.length;u++)o[u]=Math.round(2.55*parseFloat(l[u+1]));s=parseFloat(l[4])}else if(l=t.match(r)){if("transparent"==l[1])return[0,0,0,0];if(o=x[l[1]],!o)return}for(var u=0;u<o.length;u++)o[u]=b(o[u],0,255);return s=s||0==s?b(s,0,1):1,o[3]=s,o}}function a(t){if(t){var e=/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,n=t.match(e);if(n){var i=parseFloat(n[4]),a=b(parseInt(n[1]),0,360),r=b(parseFloat(n[2]),0,100),o=b(parseFloat(n[3]),0,100),s=b(isNaN(i)?1:i,0,1);return[a,r,o,s]}}}function r(t){if(t){var e=/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,n=t.match(e);if(n){var i=parseFloat(n[4]),a=b(parseInt(n[1]),0,360),r=b(parseFloat(n[2]),0,100),o=b(parseFloat(n[3]),0,100),s=b(isNaN(i)?1:i,0,1);return[a,r,o,s]}}}function o(t){var e=i(t);return e&&e.slice(0,3)}function s(t){var e=a(t);return e&&e.slice(0,3)}function l(t){var e=i(t);return e?e[3]:(e=a(t))?e[3]:(e=r(t))?e[3]:void 0}function u(t){return"#"+y(t[0])+y(t[1])+y(t[2])}function d(t,e){return 1>e||t[3]&&t[3]<1?c(t,e):"rgb("+t[0]+", "+t[1]+", "+t[2]+")"}function c(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+e+")"}function h(t,e){if(1>e||t[3]&&t[3]<1)return f(t,e);var n=Math.round(t[0]/255*100),i=Math.round(t[1]/255*100),a=Math.round(t[2]/255*100);return"rgb("+n+"%, "+i+"%, "+a+"%)"}function f(t,e){var n=Math.round(t[0]/255*100),i=Math.round(t[1]/255*100),a=Math.round(t[2]/255*100);return"rgba("+n+"%, "+i+"%, "+a+"%, "+(e||t[3]||1)+")"}function g(t,e){return 1>e||t[3]&&t[3]<1?p(t,e):"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"}function p(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+e+")"}function m(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+(void 0!==e&&1!==e?", "+e:"")+")"}function v(t){return k[t.slice(0,3)]}function b(t,e,n){return Math.min(Math.max(e,t),n)}function y(t){var e=t.toString(16).toUpperCase();return e.length<2?"0"+e:e}var x=t(5);e.exports={getRgba:i,getHsla:a,getRgb:o,getHsl:s,getHwb:r,getAlpha:l,hexString:u,rgbString:d,rgbaString:c,percentString:h,percentaString:f,hslString:g,hslaString:p,hwbString:m,keyword:v};var k={};for(var _ in x)k[x[_]]=_},{5:5}],2:[function(t,e,n){var i=t(4),a=t(1),r=function(t){if(t instanceof r)return t;if(!(this instanceof r))return new r(t);this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1};var e;if("string"==typeof t)if(e=a.getRgba(t))this.setValues("rgb",e);else if(e=a.getHsla(t))this.setValues("hsl",e);else{if(!(e=a.getHwb(t)))throw new Error('Unable to parse color from string "'+t+'"');this.setValues("hwb",e)}else if("object"==typeof t)if(e=t,void 0!==e.r||void 0!==e.red)this.setValues("rgb",e);else if(void 0!==e.l||void 0!==e.lightness)this.setValues("hsl",e);else if(void 0!==e.v||void 0!==e.value)this.setValues("hsv",e);else if(void 0!==e.w||void 0!==e.whiteness)this.setValues("hwb",e);else{if(void 0===e.c&&void 0===e.cyan)throw new Error("Unable to parse color from object "+JSON.stringify(t));this.setValues("cmyk",e)}};r.prototype={rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},hwb:function(){return this.setSpace("hwb",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){var t=this.values;return 1!==t.alpha?t.hwb.concat([t.alpha]):t.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var t=this.values;return t.rgb.concat([t.alpha])},hslaArray:function(){var t=this.values;return t.hsl.concat([t.alpha])},alpha:function(t){return void 0===t?this.values.alpha:(this.setValues("alpha",t),this)},red:function(t){return this.setChannel("rgb",0,t)},green:function(t){return this.setChannel("rgb",1,t)},blue:function(t){return this.setChannel("rgb",2,t)},hue:function(t){return t&&(t%=360,t=0>t?360+t:t),this.setChannel("hsl",0,t)},saturation:function(t){return this.setChannel("hsl",1,t)},lightness:function(t){return this.setChannel("hsl",2,t)},saturationv:function(t){return this.setChannel("hsv",1,t)},whiteness:function(t){return this.setChannel("hwb",1,t)},blackness:function(t){return this.setChannel("hwb",2,t)},value:function(t){return this.setChannel("hsv",2,t)},cyan:function(t){return this.setChannel("cmyk",0,t)},magenta:function(t){return this.setChannel("cmyk",1,t)},yellow:function(t){return this.setChannel("cmyk",2,t)},black:function(t){return this.setChannel("cmyk",3,t)},hexString:function(){return a.hexString(this.values.rgb)},rgbString:function(){return a.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return a.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return a.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return a.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return a.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return a.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return a.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){var t=this.values.rgb;return t[0]<<16|t[1]<<8|t[2]},luminosity:function(){for(var t=this.values.rgb,e=[],n=0;n<t.length;n++){var i=t[n]/255;e[n]=.03928>=i?i/12.92:Math.pow((i+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(t){var e=this.luminosity(),n=t.luminosity();return e>n?(e+.05)/(n+.05):(n+.05)/(e+.05)},level:function(t){var e=this.contrast(t);return e>=7.1?"AAA":e>=4.5?"AA":""},dark:function(){var t=this.values.rgb,e=(299*t[0]+587*t[1]+114*t[2])/1e3;return 128>e},light:function(){return!this.dark()},negate:function(){for(var t=[],e=0;3>e;e++)t[e]=255-this.values.rgb[e];return this.setValues("rgb",t),this},lighten:function(t){var e=this.values.hsl;return e[2]+=e[2]*t,this.setValues("hsl",e),this},darken:function(t){var e=this.values.hsl;return e[2]-=e[2]*t,this.setValues("hsl",e),this},saturate:function(t){var e=this.values.hsl;return e[1]+=e[1]*t,this.setValues("hsl",e),this},desaturate:function(t){var e=this.values.hsl;return e[1]-=e[1]*t,this.setValues("hsl",e),this},whiten:function(t){var e=this.values.hwb;return e[1]+=e[1]*t,this.setValues("hwb",e),this},blacken:function(t){var e=this.values.hwb;return e[2]+=e[2]*t,this.setValues("hwb",e),this},greyscale:function(){var t=this.values.rgb,e=.3*t[0]+.59*t[1]+.11*t[2];return this.setValues("rgb",[e,e,e]),this},clearer:function(t){var e=this.values.alpha;return this.setValues("alpha",e-e*t),this},opaquer:function(t){var e=this.values.alpha;return this.setValues("alpha",e+e*t),this},rotate:function(t){var e=this.values.hsl,n=(e[0]+t)%360;return e[0]=0>n?360+n:n,this.setValues("hsl",e),this},mix:function(t,e){var n=this,i=t,a=void 0===e?.5:e,r=2*a-1,o=n.alpha()-i.alpha(),s=((r*o===-1?r:(r+o)/(1+r*o))+1)/2,l=1-s;return this.rgb(s*n.red()+l*i.red(),s*n.green()+l*i.green(),s*n.blue()+l*i.blue()).alpha(n.alpha()*a+i.alpha()*(1-a))},toJSON:function(){return this.rgb()},clone:function(){var t,e,n=new r,i=this.values,a=n.values;for(var o in i)i.hasOwnProperty(o)&&(t=i[o],e={}.toString.call(t),"[object Array]"===e?a[o]=t.slice(0):"[object Number]"===e?a[o]=t:console.error("unexpected color value:",t));return n}},r.prototype.spaces={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},r.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},r.prototype.getValues=function(t){for(var e=this.values,n={},i=0;i<t.length;i++)n[t.charAt(i)]=e[t][i];return 1!==e.alpha&&(n.a=e.alpha),n},r.prototype.setValues=function(t,e){var n,a=this.values,r=this.spaces,o=this.maxes,s=1;if("alpha"===t)s=e;else if(e.length)a[t]=e.slice(0,t.length),s=e[t.length];else if(void 0!==e[t.charAt(0)]){for(n=0;n<t.length;n++)a[t][n]=e[t.charAt(n)];s=e.a}else if(void 0!==e[r[t][0]]){var l=r[t];for(n=0;n<t.length;n++)a[t][n]=e[l[n]];s=e.alpha}if(a.alpha=Math.max(0,Math.min(1,void 0===s?a.alpha:s)),"alpha"===t)return!1;var u;for(n=0;n<t.length;n++)u=Math.max(0,Math.min(o[t][n],a[t][n])),a[t][n]=Math.round(u);for(var d in r)d!==t&&(a[d]=i[t][d](a[t]));return!0},r.prototype.setSpace=function(t,e){var n=e[0];return void 0===n?this.getValues(t):("number"==typeof n&&(n=Array.prototype.slice.call(e)),this.setValues(t,n),this)},r.prototype.setChannel=function(t,e,n){var i=this.values[t];return void 0===n?i[e]:n===i[e]?this:(i[e]=n,this.setValues(t,i),this)},"undefined"!=typeof window&&(window.Color=r),e.exports=r},{1:1,4:4}],3:[function(t,e,n){function i(t){var e,n,i,a=t[0]/255,r=t[1]/255,o=t[2]/255,s=Math.min(a,r,o),l=Math.max(a,r,o),u=l-s;return l==s?e=0:a==l?e=(r-o)/u:r==l?e=2+(o-a)/u:o==l&&(e=4+(a-r)/u),e=Math.min(60*e,360),0>e&&(e+=360),i=(s+l)/2,n=l==s?0:.5>=i?u/(l+s):u/(2-l-s),[e,100*n,100*i]}function a(t){var e,n,i,a=t[0],r=t[1],o=t[2],s=Math.min(a,r,o),l=Math.max(a,r,o),u=l-s;return n=0==l?0:u/l*1e3/10,l==s?e=0:a==l?e=(r-o)/u:r==l?e=2+(o-a)/u:o==l&&(e=4+(a-r)/u),e=Math.min(60*e,360),0>e&&(e+=360),i=l/255*1e3/10,[e,n,i]}function o(t){var e=t[0],n=t[1],a=t[2],r=i(t)[0],o=1/255*Math.min(e,Math.min(n,a)),a=1-1/255*Math.max(e,Math.max(n,a));return[r,100*o,100*a]}function s(t){var e,n,i,a,r=t[0]/255,o=t[1]/255,s=t[2]/255;return a=Math.min(1-r,1-o,1-s),e=(1-r-a)/(1-a)||0,n=(1-o-a)/(1-a)||0,i=(1-s-a)/(1-a)||0,[100*e,100*n,100*i,100*a]}function l(t){return Q[JSON.stringify(t)]}function u(t){var e=t[0]/255,n=t[1]/255,i=t[2]/255;e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92,i=i>.04045?Math.pow((i+.055)/1.055,2.4):i/12.92;var a=.4124*e+.3576*n+.1805*i,r=.2126*e+.7152*n+.0722*i,o=.0193*e+.1192*n+.9505*i;return[100*a,100*r,100*o]}function d(t){var e,n,i,a=u(t),r=a[0],o=a[1],s=a[2];return r/=95.047,o/=100,s/=108.883,r=r>.008856?Math.pow(r,1/3):7.787*r+16/116,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,s=s>.008856?Math.pow(s,1/3):7.787*s+16/116,e=116*o-16,n=500*(r-o),i=200*(o-s),[e,n,i]}function c(t){return Y(d(t))}function h(t){var e,n,i,a,r,o=t[0]/360,s=t[1]/100,l=t[2]/100;if(0==s)return r=255*l,[r,r,r];n=.5>l?l*(1+s):l+s-l*s,e=2*l-n,a=[0,0,0];for(var u=0;3>u;u++)i=o+1/3*-(u-1),0>i&&i++,i>1&&i--,r=1>6*i?e+6*(n-e)*i:1>2*i?n:2>3*i?e+(n-e)*(2/3-i)*6:e,a[u]=255*r;return a}function f(t){var e,n,i=t[0],a=t[1]/100,r=t[2]/100;return 0===r?[0,0,0]:(r*=2,a*=1>=r?r:2-r,n=(r+a)/2,e=2*a/(r+a),[i,100*e,100*n])}function p(t){return o(h(t))}function m(t){return s(h(t))}function v(t){return l(h(t))}function y(t){var e=t[0]/60,n=t[1]/100,i=t[2]/100,a=Math.floor(e)%6,r=e-Math.floor(e),o=255*i*(1-n),s=255*i*(1-n*r),l=255*i*(1-n*(1-r)),i=255*i;switch(a){case 0:return[i,l,o];case 1:return[s,i,o];case 2:return[o,i,l];case 3:return[o,s,i];case 4:return[l,o,i];case 5:return[i,o,s]}}function x(t){var e,n,i=t[0],a=t[1]/100,r=t[2]/100;return n=(2-a)*r,e=a*r,e/=1>=n?n:2-n,e=e||0,n/=2,[i,100*e,100*n]}function k(t){return o(y(t))}function _(t){return s(y(t))}function w(t){return l(y(t))}function S(t){var e,n,i,a,o=t[0]/360,s=t[1]/100,l=t[2]/100,u=s+l;switch(u>1&&(s/=u,l/=u),e=Math.floor(6*o),n=1-l,i=6*o-e,0!=(1&e)&&(i=1-i),a=s+i*(n-s),e){default:case 6:case 0:r=n,g=a,b=s;break;case 1:r=a,g=n,b=s;break;case 2:r=s,g=n,b=a;break;case 3:r=s,g=a,b=n;break;case 4:r=a,g=s,b=n;break;case 5:r=n,g=s,b=a}return[255*r,255*g,255*b]}function M(t){return i(S(t))}function D(t){return a(S(t))}function C(t){return s(S(t))}function T(t){return l(S(t))}function P(t){var e,n,i,a=t[0]/100,r=t[1]/100,o=t[2]/100,s=t[3]/100;return e=1-Math.min(1,a*(1-s)+s),n=1-Math.min(1,r*(1-s)+s),i=1-Math.min(1,o*(1-s)+s),[255*e,255*n,255*i]}function F(t){return i(P(t))}function A(t){return a(P(t))}function I(t){return o(P(t))}function O(t){return l(P(t))}function R(t){var e,n,i,a=t[0]/100,r=t[1]/100,o=t[2]/100;return e=3.2406*a+-1.5372*r+o*-.4986,n=a*-.9689+1.8758*r+.0415*o,i=.0557*a+r*-.204+1.057*o,e=e>.0031308?1.055*Math.pow(e,1/2.4)-.055:e=12.92*e,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:n=12.92*n,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i=12.92*i,e=Math.min(Math.max(0,e),1),n=Math.min(Math.max(0,n),1),i=Math.min(Math.max(0,i),1),[255*e,255*n,255*i]}function W(t){var e,n,i,a=t[0],r=t[1],o=t[2];return a/=95.047,r/=100,o/=108.883,a=a>.008856?Math.pow(a,1/3):7.787*a+16/116,r=r>.008856?Math.pow(r,1/3):7.787*r+16/116,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,e=116*r-16,n=500*(a-r),i=200*(r-o),[e,n,i]}function V(t){return Y(W(t))}function L(t){var e,n,i,a,r=t[0],o=t[1],s=t[2];return 8>=r?(n=100*r/903.3,a=7.787*(n/100)+16/116):(n=100*Math.pow((r+16)/116,3),a=Math.pow(n/100,1/3)),e=.008856>=e/95.047?e=95.047*(o/500+a-16/116)/7.787:95.047*Math.pow(o/500+a,3),i=.008859>=i/108.883?i=108.883*(a-s/200-16/116)/7.787:108.883*Math.pow(a-s/200,3),[e,n,i]}function Y(t){var e,n,i,a=t[0],r=t[1],o=t[2];return e=Math.atan2(o,r),n=360*e/2/Math.PI,0>n&&(n+=360),i=Math.sqrt(r*r+o*o),[a,i,n]}function B(t){return R(L(t))}function z(t){var e,n,i,a=t[0],r=t[1],o=t[2];return i=o/360*2*Math.PI,e=r*Math.cos(i),n=r*Math.sin(i),[a,e,n]}function H(t){return L(z(t))}function N(t){return B(z(t))}function E(t){return X[t]}function U(t){return i(E(t))}function j(t){return a(E(t))}function G(t){return o(E(t))}function q(t){return s(E(t))}function Z(t){return d(E(t))}function J(t){return u(E(t))}e.exports={rgb2hsl:i,rgb2hsv:a,rgb2hwb:o,rgb2cmyk:s,rgb2keyword:l,rgb2xyz:u,rgb2lab:d,rgb2lch:c,hsl2rgb:h,hsl2hsv:f,hsl2hwb:p,hsl2cmyk:m,hsl2keyword:v,hsv2rgb:y,hsv2hsl:x,hsv2hwb:k,hsv2cmyk:_,hsv2keyword:w,hwb2rgb:S,hwb2hsl:M,hwb2hsv:D,hwb2cmyk:C,hwb2keyword:T,cmyk2rgb:P,cmyk2hsl:F,cmyk2hsv:A,cmyk2hwb:I,cmyk2keyword:O,keyword2rgb:E,keyword2hsl:U,keyword2hsv:j,keyword2hwb:G,keyword2cmyk:q,keyword2lab:Z,keyword2xyz:J,xyz2rgb:R,xyz2lab:W,xyz2lch:V,lab2xyz:L,lab2rgb:B,lab2lch:Y,lch2lab:z,lch2xyz:H,lch2rgb:N};var X={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},Q={};for(var $ in X)Q[JSON.stringify(X[$])]=$},{}],4:[function(t,e,n){var i=t(3),a=function(){return new u};for(var r in i){a[r+"Raw"]=function(t){return function(e){return"number"==typeof e&&(e=Array.prototype.slice.call(arguments)),i[t](e)}}(r);var o=/(\w+)2(\w+)/.exec(r),s=o[1],l=o[2];a[s]=a[s]||{},a[s][l]=a[r]=function(t){return function(e){"number"==typeof e&&(e=Array.prototype.slice.call(arguments));var n=i[t](e);if("string"==typeof n||void 0===n)return n;for(var a=0;a<n.length;a++)n[a]=Math.round(n[a]);return n}}(r)}var u=function(){this.convs={}};u.prototype.routeSpace=function(t,e){var n=e[0];return void 0===n?this.getValues(t):("number"==typeof n&&(n=Array.prototype.slice.call(e)),this.setValues(t,n))},u.prototype.setValues=function(t,e){return this.space=t,this.convs={},this.convs[t]=e,this},u.prototype.getValues=function(t){var e=this.convs[t];if(!e){var n=this.space,i=this.convs[n];e=a[n][t](i),this.convs[t]=e}return e},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(t){u.prototype[t]=function(e){return this.routeSpace(t,arguments)}}),e.exports=a},{3:3}],5:[function(t,e,n){e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},{}],6:[function(e,n,i){!function(e,a){"object"==typeof i&&"undefined"!=typeof n?n.exports=a():"function"==typeof t&&t.amd?t(a):e.moment=a()}(this,function(){"use strict";function t(){return li.apply(null,arguments)}function i(t){li=t}function a(t){return t instanceof Array||"[object Array]"===Object.prototype.toString.call(t)}function r(t){return t instanceof Date||"[object Date]"===Object.prototype.toString.call(t)}function o(t,e){var n,i=[];for(n=0;n<t.length;++n)i.push(e(t[n],n));return i}function s(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function l(t,e){for(var n in e)s(e,n)&&(t[n]=e[n]);return s(e,"toString")&&(t.toString=e.toString),s(e,"valueOf")&&(t.valueOf=e.valueOf),t}function u(t,e,n,i){return Lt(t,e,n,i,!0).utc()}function d(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null}}function c(t){return null==t._pf&&(t._pf=d()),t._pf}function h(t){if(null==t._isValid){var e=c(t),n=ui.call(e.parsedDateParts,function(t){return null!=t});t._isValid=!isNaN(t._d.getTime())&&e.overflow<0&&!e.empty&&!e.invalidMonth&&!e.invalidWeekday&&!e.nullInput&&!e.invalidFormat&&!e.userInvalidated&&(!e.meridiem||e.meridiem&&n),t._strict&&(t._isValid=t._isValid&&0===e.charsLeftOver&&0===e.unusedTokens.length&&void 0===e.bigHour)}return t._isValid}function f(t){var e=u(NaN);return null!=t?l(c(e),t):c(e).userInvalidated=!0,e}function g(t){return void 0===t}function p(t,e){var n,i,a;if(g(e._isAMomentObject)||(t._isAMomentObject=e._isAMomentObject),g(e._i)||(t._i=e._i),g(e._f)||(t._f=e._f),g(e._l)||(t._l=e._l),g(e._strict)||(t._strict=e._strict),g(e._tzm)||(t._tzm=e._tzm),g(e._isUTC)||(t._isUTC=e._isUTC),g(e._offset)||(t._offset=e._offset),g(e._pf)||(t._pf=c(e)),g(e._locale)||(t._locale=e._locale),di.length>0)for(n in di)i=di[n],a=e[i],g(a)||(t[i]=a);return t}function m(e){p(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),ci===!1&&(ci=!0,t.updateOffset(this),ci=!1)}function v(t){return t instanceof m||null!=t&&null!=t._isAMomentObject}function b(t){return 0>t?Math.ceil(t):Math.floor(t)}function y(t){var e=+t,n=0;return 0!==e&&isFinite(e)&&(n=b(e)),n}function x(t,e,n){var i,a=Math.min(t.length,e.length),r=Math.abs(t.length-e.length),o=0;for(i=0;a>i;i++)(n&&t[i]!==e[i]||!n&&y(t[i])!==y(e[i]))&&o++;return o+r}function k(e){t.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function _(e,n){var i=!0;return l(function(){return null!=t.deprecationHandler&&t.deprecationHandler(null,e),i&&(k(e+"\nArguments: "+Array.prototype.slice.call(arguments).join(", ")+"\n"+(new Error).stack),i=!1),n.apply(this,arguments)},n)}function w(e,n){null!=t.deprecationHandler&&t.deprecationHandler(e,n),hi[e]||(k(n),hi[e]=!0)}function S(t){return t instanceof Function||"[object Function]"===Object.prototype.toString.call(t)}function M(t){return"[object Object]"===Object.prototype.toString.call(t)}function D(t){var e,n;for(n in t)e=t[n],S(e)?this[n]=e:this["_"+n]=e;this._config=t,this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function C(t,e){var n,i=l({},t);for(n in e)s(e,n)&&(M(t[n])&&M(e[n])?(i[n]={},l(i[n],t[n]),l(i[n],e[n])):null!=e[n]?i[n]=e[n]:delete i[n]);return i}function T(t){null!=t&&this.set(t)}function P(t){return t?t.toLowerCase().replace("_","-"):t}function F(t){for(var e,n,i,a,r=0;r<t.length;){for(a=P(t[r]).split("-"),e=a.length,n=P(t[r+1]),n=n?n.split("-"):null;e>0;){if(i=A(a.slice(0,e).join("-")))return i;if(n&&n.length>=e&&x(a,n,!0)>=e-1)break;e--}r++}return null}function A(t){var i=null;if(!mi[t]&&"undefined"!=typeof n&&n&&n.exports)try{i=gi._abbr,e("./locale/"+t),I(i)}catch(a){}return mi[t]}function I(t,e){var n;return t&&(n=g(e)?W(t):O(t,e),n&&(gi=n)),gi._abbr}function O(t,e){return null!==e?(e.abbr=t,null!=mi[t]?(w("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale"),e=C(mi[t]._config,e)):null!=e.parentLocale&&(null!=mi[e.parentLocale]?e=C(mi[e.parentLocale]._config,e):w("parentLocaleUndefined","specified parentLocale is not defined yet")),mi[t]=new T(e),I(t),mi[t]):(delete mi[t],null)}function R(t,e){if(null!=e){var n;null!=mi[t]&&(e=C(mi[t]._config,e)),n=new T(e),n.parentLocale=mi[t],mi[t]=n,I(t)}else null!=mi[t]&&(null!=mi[t].parentLocale?mi[t]=mi[t].parentLocale:null!=mi[t]&&delete mi[t]);return mi[t]}function W(t){var e;if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return gi;if(!a(t)){if(e=A(t))return e;t=[t]}return F(t)}function V(){return fi(mi)}function L(t,e){var n=t.toLowerCase();vi[n]=vi[n+"s"]=vi[e]=t}function Y(t){return"string"==typeof t?vi[t]||vi[t.toLowerCase()]:void 0}function B(t){var e,n,i={};for(n in t)s(t,n)&&(e=Y(n),e&&(i[e]=t[n]));return i}function z(e,n){return function(i){return null!=i?(N(this,e,i),t.updateOffset(this,n),this):H(this,e)}}function H(t,e){return t.isValid()?t._d["get"+(t._isUTC?"UTC":"")+e]():NaN}function N(t,e,n){t.isValid()&&t._d["set"+(t._isUTC?"UTC":"")+e](n)}function E(t,e){var n;if("object"==typeof t)for(n in t)this.set(n,t[n]);else if(t=Y(t),S(this[t]))return this[t](e);return this}function U(t,e,n){var i=""+Math.abs(t),a=e-i.length,r=t>=0;return(r?n?"+":"":"-")+Math.pow(10,Math.max(0,a)).toString().substr(1)+i}function j(t,e,n,i){var a=i;"string"==typeof i&&(a=function(){return this[i]()}),t&&(ki[t]=a),e&&(ki[e[0]]=function(){return U(a.apply(this,arguments),e[1],e[2])}),n&&(ki[n]=function(){return this.localeData().ordinal(a.apply(this,arguments),t)})}function G(t){return t.match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function q(t){var e,n,i=t.match(bi);for(e=0,n=i.length;n>e;e++)ki[i[e]]?i[e]=ki[i[e]]:i[e]=G(i[e]);return function(e){var a,r="";for(a=0;n>a;a++)r+=i[a]instanceof Function?i[a].call(e,t):i[a];return r}}function Z(t,e){return t.isValid()?(e=J(e,t.localeData()),xi[e]=xi[e]||q(e),xi[e](t)):t.localeData().invalidDate()}function J(t,e){function n(t){return e.longDateFormat(t)||t}var i=5;for(yi.lastIndex=0;i>=0&&yi.test(t);)t=t.replace(yi,n),yi.lastIndex=0,i-=1;return t}function X(t,e,n){Bi[t]=S(e)?e:function(t,i){return t&&n?n:e}}function Q(t,e){return s(Bi,t)?Bi[t](e._strict,e._locale):new RegExp($(t))}function $(t){return K(t.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,e,n,i,a){return e||n||i||a}))}function K(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function tt(t,e){var n,i=e;for("string"==typeof t&&(t=[t]),"number"==typeof e&&(i=function(t,n){n[e]=y(t)}),n=0;n<t.length;n++)zi[t[n]]=i}function et(t,e){tt(t,function(t,n,i,a){i._w=i._w||{},e(t,i._w,i,a)})}function nt(t,e,n){null!=e&&s(zi,t)&&zi[t](e,n._a,n,t)}function it(t,e){return new Date(Date.UTC(t,e+1,0)).getUTCDate()}function at(t,e){return a(this._months)?this._months[t.month()]:this._months[Xi.test(e)?"format":"standalone"][t.month()]}function rt(t,e){return a(this._monthsShort)?this._monthsShort[t.month()]:this._monthsShort[Xi.test(e)?"format":"standalone"][t.month()]}function ot(t,e,n){var i,a,r,o=t.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],i=0;12>i;++i)r=u([2e3,i]),this._shortMonthsParse[i]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[i]=this.months(r,"").toLocaleLowerCase();return n?"MMM"===e?(a=pi.call(this._shortMonthsParse,o),-1!==a?a:null):(a=pi.call(this._longMonthsParse,o),-1!==a?a:null):"MMM"===e?(a=pi.call(this._shortMonthsParse,o),-1!==a?a:(a=pi.call(this._longMonthsParse,o),-1!==a?a:null)):(a=pi.call(this._longMonthsParse,o),-1!==a?a:(a=pi.call(this._shortMonthsParse,o),-1!==a?a:null))}function st(t,e,n){var i,a,r;if(this._monthsParseExact)return ot.call(this,t,e,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),i=0;12>i;i++){if(a=u([2e3,i]),n&&!this._longMonthsParse[i]&&(this._longMonthsParse[i]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[i]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),n||this._monthsParse[i]||(r="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[i]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===e&&this._longMonthsParse[i].test(t))return i;if(n&&"MMM"===e&&this._shortMonthsParse[i].test(t))return i;if(!n&&this._monthsParse[i].test(t))return i}}function lt(t,e){var n;if(!t.isValid())return t;if("string"==typeof e)if(/^\d+$/.test(e))e=y(e);else if(e=t.localeData().monthsParse(e),"number"!=typeof e)return t;return n=Math.min(t.date(),it(t.year(),e)),
t._d["set"+(t._isUTC?"UTC":"")+"Month"](e,n),t}function ut(e){return null!=e?(lt(this,e),t.updateOffset(this,!0),this):H(this,"Month")}function dt(){return it(this.year(),this.month())}function ct(t){return this._monthsParseExact?(s(this,"_monthsRegex")||ft.call(this),t?this._monthsShortStrictRegex:this._monthsShortRegex):this._monthsShortStrictRegex&&t?this._monthsShortStrictRegex:this._monthsShortRegex}function ht(t){return this._monthsParseExact?(s(this,"_monthsRegex")||ft.call(this),t?this._monthsStrictRegex:this._monthsRegex):this._monthsStrictRegex&&t?this._monthsStrictRegex:this._monthsRegex}function ft(){function t(t,e){return e.length-t.length}var e,n,i=[],a=[],r=[];for(e=0;12>e;e++)n=u([2e3,e]),i.push(this.monthsShort(n,"")),a.push(this.months(n,"")),r.push(this.months(n,"")),r.push(this.monthsShort(n,""));for(i.sort(t),a.sort(t),r.sort(t),e=0;12>e;e++)i[e]=K(i[e]),a[e]=K(a[e]),r[e]=K(r[e]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+i.join("|")+")","i")}function gt(t){var e,n=t._a;return n&&-2===c(t).overflow&&(e=n[Ni]<0||n[Ni]>11?Ni:n[Ei]<1||n[Ei]>it(n[Hi],n[Ni])?Ei:n[Ui]<0||n[Ui]>24||24===n[Ui]&&(0!==n[ji]||0!==n[Gi]||0!==n[qi])?Ui:n[ji]<0||n[ji]>59?ji:n[Gi]<0||n[Gi]>59?Gi:n[qi]<0||n[qi]>999?qi:-1,c(t)._overflowDayOfYear&&(Hi>e||e>Ei)&&(e=Ei),c(t)._overflowWeeks&&-1===e&&(e=Zi),c(t)._overflowWeekday&&-1===e&&(e=Ji),c(t).overflow=e),t}function pt(t){var e,n,i,a,r,o,s=t._i,l=ea.exec(s)||na.exec(s);if(l){for(c(t).iso=!0,e=0,n=aa.length;n>e;e++)if(aa[e][1].exec(l[1])){a=aa[e][0],i=aa[e][2]!==!1;break}if(null==a)return void(t._isValid=!1);if(l[3]){for(e=0,n=ra.length;n>e;e++)if(ra[e][1].exec(l[3])){r=(l[2]||" ")+ra[e][0];break}if(null==r)return void(t._isValid=!1)}if(!i&&null!=r)return void(t._isValid=!1);if(l[4]){if(!ia.exec(l[4]))return void(t._isValid=!1);o="Z"}t._f=a+(r||"")+(o||""),Ft(t)}else t._isValid=!1}function mt(e){var n=oa.exec(e._i);return null!==n?void(e._d=new Date(+n[1])):(pt(e),void(e._isValid===!1&&(delete e._isValid,t.createFromInputFallback(e))))}function vt(t,e,n,i,a,r,o){var s=new Date(t,e,n,i,a,r,o);return 100>t&&t>=0&&isFinite(s.getFullYear())&&s.setFullYear(t),s}function bt(t){var e=new Date(Date.UTC.apply(null,arguments));return 100>t&&t>=0&&isFinite(e.getUTCFullYear())&&e.setUTCFullYear(t),e}function yt(t){return xt(t)?366:365}function xt(t){return t%4===0&&t%100!==0||t%400===0}function kt(){return xt(this.year())}function _t(t,e,n){var i=7+e-n,a=(7+bt(t,0,i).getUTCDay()-e)%7;return-a+i-1}function wt(t,e,n,i,a){var r,o,s=(7+n-i)%7,l=_t(t,i,a),u=1+7*(e-1)+s+l;return 0>=u?(r=t-1,o=yt(r)+u):u>yt(t)?(r=t+1,o=u-yt(t)):(r=t,o=u),{year:r,dayOfYear:o}}function St(t,e,n){var i,a,r=_t(t.year(),e,n),o=Math.floor((t.dayOfYear()-r-1)/7)+1;return 1>o?(a=t.year()-1,i=o+Mt(a,e,n)):o>Mt(t.year(),e,n)?(i=o-Mt(t.year(),e,n),a=t.year()+1):(a=t.year(),i=o),{week:i,year:a}}function Mt(t,e,n){var i=_t(t,e,n),a=_t(t+1,e,n);return(yt(t)-i+a)/7}function Dt(t,e,n){return null!=t?t:null!=e?e:n}function Ct(e){var n=new Date(t.now());return e._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()]}function Tt(t){var e,n,i,a,r=[];if(!t._d){for(i=Ct(t),t._w&&null==t._a[Ei]&&null==t._a[Ni]&&Pt(t),t._dayOfYear&&(a=Dt(t._a[Hi],i[Hi]),t._dayOfYear>yt(a)&&(c(t)._overflowDayOfYear=!0),n=bt(a,0,t._dayOfYear),t._a[Ni]=n.getUTCMonth(),t._a[Ei]=n.getUTCDate()),e=0;3>e&&null==t._a[e];++e)t._a[e]=r[e]=i[e];for(;7>e;e++)t._a[e]=r[e]=null==t._a[e]?2===e?1:0:t._a[e];24===t._a[Ui]&&0===t._a[ji]&&0===t._a[Gi]&&0===t._a[qi]&&(t._nextDay=!0,t._a[Ui]=0),t._d=(t._useUTC?bt:vt).apply(null,r),null!=t._tzm&&t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),t._nextDay&&(t._a[Ui]=24)}}function Pt(t){var e,n,i,a,r,o,s,l;e=t._w,null!=e.GG||null!=e.W||null!=e.E?(r=1,o=4,n=Dt(e.GG,t._a[Hi],St(Yt(),1,4).year),i=Dt(e.W,1),a=Dt(e.E,1),(1>a||a>7)&&(l=!0)):(r=t._locale._week.dow,o=t._locale._week.doy,n=Dt(e.gg,t._a[Hi],St(Yt(),r,o).year),i=Dt(e.w,1),null!=e.d?(a=e.d,(0>a||a>6)&&(l=!0)):null!=e.e?(a=e.e+r,(e.e<0||e.e>6)&&(l=!0)):a=r),1>i||i>Mt(n,r,o)?c(t)._overflowWeeks=!0:null!=l?c(t)._overflowWeekday=!0:(s=wt(n,i,a,r,o),t._a[Hi]=s.year,t._dayOfYear=s.dayOfYear)}function Ft(e){if(e._f===t.ISO_8601)return void pt(e);e._a=[],c(e).empty=!0;var n,i,a,r,o,s=""+e._i,l=s.length,u=0;for(a=J(e._f,e._locale).match(bi)||[],n=0;n<a.length;n++)r=a[n],i=(s.match(Q(r,e))||[])[0],i&&(o=s.substr(0,s.indexOf(i)),o.length>0&&c(e).unusedInput.push(o),s=s.slice(s.indexOf(i)+i.length),u+=i.length),ki[r]?(i?c(e).empty=!1:c(e).unusedTokens.push(r),nt(r,i,e)):e._strict&&!i&&c(e).unusedTokens.push(r);c(e).charsLeftOver=l-u,s.length>0&&c(e).unusedInput.push(s),c(e).bigHour===!0&&e._a[Ui]<=12&&e._a[Ui]>0&&(c(e).bigHour=void 0),c(e).parsedDateParts=e._a.slice(0),c(e).meridiem=e._meridiem,e._a[Ui]=At(e._locale,e._a[Ui],e._meridiem),Tt(e),gt(e)}function At(t,e,n){var i;return null==n?e:null!=t.meridiemHour?t.meridiemHour(e,n):null!=t.isPM?(i=t.isPM(n),i&&12>e&&(e+=12),i||12!==e||(e=0),e):e}function It(t){var e,n,i,a,r;if(0===t._f.length)return c(t).invalidFormat=!0,void(t._d=new Date(NaN));for(a=0;a<t._f.length;a++)r=0,e=p({},t),null!=t._useUTC&&(e._useUTC=t._useUTC),e._f=t._f[a],Ft(e),h(e)&&(r+=c(e).charsLeftOver,r+=10*c(e).unusedTokens.length,c(e).score=r,(null==i||i>r)&&(i=r,n=e));l(t,n||e)}function Ot(t){if(!t._d){var e=B(t._i);t._a=o([e.year,e.month,e.day||e.date,e.hour,e.minute,e.second,e.millisecond],function(t){return t&&parseInt(t,10)}),Tt(t)}}function Rt(t){var e=new m(gt(Wt(t)));return e._nextDay&&(e.add(1,"d"),e._nextDay=void 0),e}function Wt(t){var e=t._i,n=t._f;return t._locale=t._locale||W(t._l),null===e||void 0===n&&""===e?f({nullInput:!0}):("string"==typeof e&&(t._i=e=t._locale.preparse(e)),v(e)?new m(gt(e)):(a(n)?It(t):n?Ft(t):r(e)?t._d=e:Vt(t),h(t)||(t._d=null),t))}function Vt(e){var n=e._i;void 0===n?e._d=new Date(t.now()):r(n)?e._d=new Date(n.valueOf()):"string"==typeof n?mt(e):a(n)?(e._a=o(n.slice(0),function(t){return parseInt(t,10)}),Tt(e)):"object"==typeof n?Ot(e):"number"==typeof n?e._d=new Date(n):t.createFromInputFallback(e)}function Lt(t,e,n,i,a){var r={};return"boolean"==typeof n&&(i=n,n=void 0),r._isAMomentObject=!0,r._useUTC=r._isUTC=a,r._l=n,r._i=t,r._f=e,r._strict=i,Rt(r)}function Yt(t,e,n,i){return Lt(t,e,n,i,!1)}function Bt(t,e){var n,i;if(1===e.length&&a(e[0])&&(e=e[0]),!e.length)return Yt();for(n=e[0],i=1;i<e.length;++i)(!e[i].isValid()||e[i][t](n))&&(n=e[i]);return n}function zt(){var t=[].slice.call(arguments,0);return Bt("isBefore",t)}function Ht(){var t=[].slice.call(arguments,0);return Bt("isAfter",t)}function Nt(t){var e=B(t),n=e.year||0,i=e.quarter||0,a=e.month||0,r=e.week||0,o=e.day||0,s=e.hour||0,l=e.minute||0,u=e.second||0,d=e.millisecond||0;this._milliseconds=+d+1e3*u+6e4*l+1e3*s*60*60,this._days=+o+7*r,this._months=+a+3*i+12*n,this._data={},this._locale=W(),this._bubble()}function Et(t){return t instanceof Nt}function Ut(t,e){j(t,0,0,function(){var t=this.utcOffset(),n="+";return 0>t&&(t=-t,n="-"),n+U(~~(t/60),2)+e+U(~~t%60,2)})}function jt(t,e){var n=(e||"").match(t)||[],i=n[n.length-1]||[],a=(i+"").match(ca)||["-",0,0],r=+(60*a[1])+y(a[2]);return"+"===a[0]?r:-r}function Gt(e,n){var i,a;return n._isUTC?(i=n.clone(),a=(v(e)||r(e)?e.valueOf():Yt(e).valueOf())-i.valueOf(),i._d.setTime(i._d.valueOf()+a),t.updateOffset(i,!1),i):Yt(e).local()}function qt(t){return 15*-Math.round(t._d.getTimezoneOffset()/15)}function Zt(e,n){var i,a=this._offset||0;return this.isValid()?null!=e?("string"==typeof e?e=jt(Vi,e):Math.abs(e)<16&&(e=60*e),!this._isUTC&&n&&(i=qt(this)),this._offset=e,this._isUTC=!0,null!=i&&this.add(i,"m"),a!==e&&(!n||this._changeInProgress?ce(this,re(e-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,t.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?a:qt(this):null!=e?this:NaN}function Jt(t,e){return null!=t?("string"!=typeof t&&(t=-t),this.utcOffset(t,e),this):-this.utcOffset()}function Xt(t){return this.utcOffset(0,t)}function Qt(t){return this._isUTC&&(this.utcOffset(0,t),this._isUTC=!1,t&&this.subtract(qt(this),"m")),this}function $t(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(jt(Wi,this._i)),this}function Kt(t){return this.isValid()?(t=t?Yt(t).utcOffset():0,(this.utcOffset()-t)%60===0):!1}function te(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function ee(){if(!g(this._isDSTShifted))return this._isDSTShifted;var t={};if(p(t,this),t=Wt(t),t._a){var e=t._isUTC?u(t._a):Yt(t._a);this._isDSTShifted=this.isValid()&&x(t._a,e.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function ne(){return this.isValid()?!this._isUTC:!1}function ie(){return this.isValid()?this._isUTC:!1}function ae(){return this.isValid()?this._isUTC&&0===this._offset:!1}function re(t,e){var n,i,a,r=t,o=null;return Et(t)?r={ms:t._milliseconds,d:t._days,M:t._months}:"number"==typeof t?(r={},e?r[e]=t:r.milliseconds=t):(o=ha.exec(t))?(n="-"===o[1]?-1:1,r={y:0,d:y(o[Ei])*n,h:y(o[Ui])*n,m:y(o[ji])*n,s:y(o[Gi])*n,ms:y(o[qi])*n}):(o=fa.exec(t))?(n="-"===o[1]?-1:1,r={y:oe(o[2],n),M:oe(o[3],n),w:oe(o[4],n),d:oe(o[5],n),h:oe(o[6],n),m:oe(o[7],n),s:oe(o[8],n)}):null==r?r={}:"object"==typeof r&&("from"in r||"to"in r)&&(a=le(Yt(r.from),Yt(r.to)),r={},r.ms=a.milliseconds,r.M=a.months),i=new Nt(r),Et(t)&&s(t,"_locale")&&(i._locale=t._locale),i}function oe(t,e){var n=t&&parseFloat(t.replace(",","."));return(isNaN(n)?0:n)*e}function se(t,e){var n={milliseconds:0,months:0};return n.months=e.month()-t.month()+12*(e.year()-t.year()),t.clone().add(n.months,"M").isAfter(e)&&--n.months,n.milliseconds=+e-+t.clone().add(n.months,"M"),n}function le(t,e){var n;return t.isValid()&&e.isValid()?(e=Gt(e,t),t.isBefore(e)?n=se(t,e):(n=se(e,t),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function ue(t){return 0>t?-1*Math.round(-1*t):Math.round(t)}function de(t,e){return function(n,i){var a,r;return null===i||isNaN(+i)||(w(e,"moment()."+e+"(period, number) is deprecated. Please use moment()."+e+"(number, period)."),r=n,n=i,i=r),n="string"==typeof n?+n:n,a=re(n,i),ce(this,a,t),this}}function ce(e,n,i,a){var r=n._milliseconds,o=ue(n._days),s=ue(n._months);e.isValid()&&(a=null==a?!0:a,r&&e._d.setTime(e._d.valueOf()+r*i),o&&N(e,"Date",H(e,"Date")+o*i),s&&lt(e,H(e,"Month")+s*i),a&&t.updateOffset(e,o||s))}function he(t,e){var n=t||Yt(),i=Gt(n,this).startOf("day"),a=this.diff(i,"days",!0),r=-6>a?"sameElse":-1>a?"lastWeek":0>a?"lastDay":1>a?"sameDay":2>a?"nextDay":7>a?"nextWeek":"sameElse",o=e&&(S(e[r])?e[r]():e[r]);return this.format(o||this.localeData().calendar(r,this,Yt(n)))}function fe(){return new m(this)}function ge(t,e){var n=v(t)?t:Yt(t);return this.isValid()&&n.isValid()?(e=Y(g(e)?"millisecond":e),"millisecond"===e?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(e).valueOf()):!1}function pe(t,e){var n=v(t)?t:Yt(t);return this.isValid()&&n.isValid()?(e=Y(g(e)?"millisecond":e),"millisecond"===e?this.valueOf()<n.valueOf():this.clone().endOf(e).valueOf()<n.valueOf()):!1}function me(t,e,n,i){return i=i||"()",("("===i[0]?this.isAfter(t,n):!this.isBefore(t,n))&&(")"===i[1]?this.isBefore(e,n):!this.isAfter(e,n))}function ve(t,e){var n,i=v(t)?t:Yt(t);return this.isValid()&&i.isValid()?(e=Y(e||"millisecond"),"millisecond"===e?this.valueOf()===i.valueOf():(n=i.valueOf(),this.clone().startOf(e).valueOf()<=n&&n<=this.clone().endOf(e).valueOf())):!1}function be(t,e){return this.isSame(t,e)||this.isAfter(t,e)}function ye(t,e){return this.isSame(t,e)||this.isBefore(t,e)}function xe(t,e,n){var i,a,r,o;return this.isValid()?(i=Gt(t,this),i.isValid()?(a=6e4*(i.utcOffset()-this.utcOffset()),e=Y(e),"year"===e||"month"===e||"quarter"===e?(o=ke(this,i),"quarter"===e?o/=3:"year"===e&&(o/=12)):(r=this-i,o="second"===e?r/1e3:"minute"===e?r/6e4:"hour"===e?r/36e5:"day"===e?(r-a)/864e5:"week"===e?(r-a)/6048e5:r),n?o:b(o)):NaN):NaN}function ke(t,e){var n,i,a=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(a,"months");return 0>e-r?(n=t.clone().add(a-1,"months"),i=(e-r)/(r-n)):(n=t.clone().add(a+1,"months"),i=(e-r)/(n-r)),-(a+i)||0}function _e(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function we(){var t=this.clone().utc();return 0<t.year()&&t.year()<=9999?S(Date.prototype.toISOString)?this.toDate().toISOString():Z(t,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):Z(t,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function Se(e){e||(e=this.isUtc()?t.defaultFormatUtc:t.defaultFormat);var n=Z(this,e);return this.localeData().postformat(n)}function Me(t,e){return this.isValid()&&(v(t)&&t.isValid()||Yt(t).isValid())?re({to:this,from:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function De(t){return this.from(Yt(),t)}function Ce(t,e){return this.isValid()&&(v(t)&&t.isValid()||Yt(t).isValid())?re({from:this,to:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function Te(t){return this.to(Yt(),t)}function Pe(t){var e;return void 0===t?this._locale._abbr:(e=W(t),null!=e&&(this._locale=e),this)}function Fe(){return this._locale}function Ae(t){switch(t=Y(t)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===t&&this.weekday(0),"isoWeek"===t&&this.isoWeekday(1),"quarter"===t&&this.month(3*Math.floor(this.month()/3)),this}function Ie(t){return t=Y(t),void 0===t||"millisecond"===t?this:("date"===t&&(t="day"),this.startOf(t).add(1,"isoWeek"===t?"week":t).subtract(1,"ms"))}function Oe(){return this._d.valueOf()-6e4*(this._offset||0)}function Re(){return Math.floor(this.valueOf()/1e3)}function We(){return this._offset?new Date(this.valueOf()):this._d}function Ve(){var t=this;return[t.year(),t.month(),t.date(),t.hour(),t.minute(),t.second(),t.millisecond()]}function Le(){var t=this;return{years:t.year(),months:t.month(),date:t.date(),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds(),milliseconds:t.milliseconds()}}function Ye(){return this.isValid()?this.toISOString():null}function Be(){return h(this)}function ze(){return l({},c(this))}function He(){return c(this).overflow}function Ne(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Ee(t,e){j(0,[t,t.length],0,e)}function Ue(t){return Ze.call(this,t,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function je(t){return Ze.call(this,t,this.isoWeek(),this.isoWeekday(),1,4)}function Ge(){return Mt(this.year(),1,4)}function qe(){var t=this.localeData()._week;return Mt(this.year(),t.dow,t.doy)}function Ze(t,e,n,i,a){var r;return null==t?St(this,i,a).year:(r=Mt(t,i,a),e>r&&(e=r),Je.call(this,t,e,n,i,a))}function Je(t,e,n,i,a){var r=wt(t,e,n,i,a),o=bt(r.year,0,r.dayOfYear);return this.year(o.getUTCFullYear()),this.month(o.getUTCMonth()),this.date(o.getUTCDate()),this}function Xe(t){return null==t?Math.ceil((this.month()+1)/3):this.month(3*(t-1)+this.month()%3)}function Qe(t){return St(t,this._week.dow,this._week.doy).week}function $e(){return this._week.dow}function Ke(){return this._week.doy}function tn(t){var e=this.localeData().week(this);return null==t?e:this.add(7*(t-e),"d")}function en(t){var e=St(this,1,4).week;return null==t?e:this.add(7*(t-e),"d")}function nn(t,e){return"string"!=typeof t?t:isNaN(t)?(t=e.weekdaysParse(t),"number"==typeof t?t:null):parseInt(t,10)}function an(t,e){return a(this._weekdays)?this._weekdays[t.day()]:this._weekdays[this._weekdays.isFormat.test(e)?"format":"standalone"][t.day()]}function rn(t){return this._weekdaysShort[t.day()]}function on(t){return this._weekdaysMin[t.day()]}function sn(t,e,n){var i,a,r,o=t.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],i=0;7>i;++i)r=u([2e3,1]).day(i),this._minWeekdaysParse[i]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[i]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[i]=this.weekdays(r,"").toLocaleLowerCase();return n?"dddd"===e?(a=pi.call(this._weekdaysParse,o),-1!==a?a:null):"ddd"===e?(a=pi.call(this._shortWeekdaysParse,o),-1!==a?a:null):(a=pi.call(this._minWeekdaysParse,o),-1!==a?a:null):"dddd"===e?(a=pi.call(this._weekdaysParse,o),-1!==a?a:(a=pi.call(this._shortWeekdaysParse,o),-1!==a?a:(a=pi.call(this._minWeekdaysParse,o),-1!==a?a:null))):"ddd"===e?(a=pi.call(this._shortWeekdaysParse,o),-1!==a?a:(a=pi.call(this._weekdaysParse,o),-1!==a?a:(a=pi.call(this._minWeekdaysParse,o),-1!==a?a:null))):(a=pi.call(this._minWeekdaysParse,o),-1!==a?a:(a=pi.call(this._weekdaysParse,o),-1!==a?a:(a=pi.call(this._shortWeekdaysParse,o),-1!==a?a:null)))}function ln(t,e,n){var i,a,r;if(this._weekdaysParseExact)return sn.call(this,t,e,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),i=0;7>i;i++){if(a=u([2e3,1]).day(i),n&&!this._fullWeekdaysParse[i]&&(this._fullWeekdaysParse[i]=new RegExp("^"+this.weekdays(a,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[i]=new RegExp("^"+this.weekdaysShort(a,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[i]=new RegExp("^"+this.weekdaysMin(a,"").replace(".",".?")+"$","i")),this._weekdaysParse[i]||(r="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),this._weekdaysParse[i]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===e&&this._fullWeekdaysParse[i].test(t))return i;if(n&&"ddd"===e&&this._shortWeekdaysParse[i].test(t))return i;if(n&&"dd"===e&&this._minWeekdaysParse[i].test(t))return i;if(!n&&this._weekdaysParse[i].test(t))return i}}function un(t){if(!this.isValid())return null!=t?this:NaN;var e=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=t?(t=nn(t,this.localeData()),this.add(t-e,"d")):e}function dn(t){if(!this.isValid())return null!=t?this:NaN;var e=(this.day()+7-this.localeData()._week.dow)%7;return null==t?e:this.add(t-e,"d")}function cn(t){return this.isValid()?null==t?this.day()||7:this.day(this.day()%7?t:t-7):null!=t?this:NaN}function hn(t){return this._weekdaysParseExact?(s(this,"_weekdaysRegex")||pn.call(this),t?this._weekdaysStrictRegex:this._weekdaysRegex):this._weekdaysStrictRegex&&t?this._weekdaysStrictRegex:this._weekdaysRegex}function fn(t){return this._weekdaysParseExact?(s(this,"_weekdaysRegex")||pn.call(this),t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):this._weekdaysShortStrictRegex&&t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex}function gn(t){return this._weekdaysParseExact?(s(this,"_weekdaysRegex")||pn.call(this),t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):this._weekdaysMinStrictRegex&&t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex}function pn(){function t(t,e){return e.length-t.length}var e,n,i,a,r,o=[],s=[],l=[],d=[];for(e=0;7>e;e++)n=u([2e3,1]).day(e),i=this.weekdaysMin(n,""),a=this.weekdaysShort(n,""),r=this.weekdays(n,""),o.push(i),s.push(a),l.push(r),d.push(i),d.push(a),d.push(r);for(o.sort(t),s.sort(t),l.sort(t),d.sort(t),e=0;7>e;e++)s[e]=K(s[e]),l[e]=K(l[e]),d[e]=K(d[e]);this._weekdaysRegex=new RegExp("^("+d.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+o.join("|")+")","i")}function mn(t){var e=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==t?e:this.add(t-e,"d")}function vn(){return this.hours()%12||12}function bn(){return this.hours()||24}function yn(t,e){j(t,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),e)})}function xn(t,e){return e._meridiemParse}function kn(t){return"p"===(t+"").toLowerCase().charAt(0)}function _n(t,e,n){return t>11?n?"pm":"PM":n?"am":"AM"}function wn(t,e){e[qi]=y(1e3*("0."+t))}function Sn(){return this._isUTC?"UTC":""}function Mn(){return this._isUTC?"Coordinated Universal Time":""}function Dn(t){return Yt(1e3*t)}function Cn(){return Yt.apply(null,arguments).parseZone()}function Tn(t,e,n){var i=this._calendar[t];return S(i)?i.call(e,n):i}function Pn(t){var e=this._longDateFormat[t],n=this._longDateFormat[t.toUpperCase()];return e||!n?e:(this._longDateFormat[t]=n.replace(/MMMM|MM|DD|dddd/g,function(t){return t.slice(1)}),this._longDateFormat[t])}function Fn(){return this._invalidDate}function An(t){return this._ordinal.replace("%d",t)}function In(t){return t}function On(t,e,n,i){var a=this._relativeTime[n];return S(a)?a(t,e,n,i):a.replace(/%d/i,t)}function Rn(t,e){var n=this._relativeTime[t>0?"future":"past"];return S(n)?n(e):n.replace(/%s/i,e)}function Wn(t,e,n,i){var a=W(),r=u().set(i,e);return a[n](r,t)}function Vn(t,e,n){if("number"==typeof t&&(e=t,t=void 0),t=t||"",null!=e)return Wn(t,e,n,"month");var i,a=[];for(i=0;12>i;i++)a[i]=Wn(t,i,n,"month");return a}function Ln(t,e,n,i){"boolean"==typeof t?("number"==typeof e&&(n=e,e=void 0),e=e||""):(e=t,n=e,t=!1,"number"==typeof e&&(n=e,e=void 0),e=e||"");var a=W(),r=t?a._week.dow:0;if(null!=n)return Wn(e,(n+r)%7,i,"day");var o,s=[];for(o=0;7>o;o++)s[o]=Wn(e,(o+r)%7,i,"day");return s}function Yn(t,e){return Vn(t,e,"months")}function Bn(t,e){return Vn(t,e,"monthsShort")}function zn(t,e,n){return Ln(t,e,n,"weekdays")}function Hn(t,e,n){return Ln(t,e,n,"weekdaysShort")}function Nn(t,e,n){return Ln(t,e,n,"weekdaysMin")}function En(){var t=this._data;return this._milliseconds=za(this._milliseconds),this._days=za(this._days),this._months=za(this._months),t.milliseconds=za(t.milliseconds),t.seconds=za(t.seconds),t.minutes=za(t.minutes),t.hours=za(t.hours),t.months=za(t.months),t.years=za(t.years),this}function Un(t,e,n,i){var a=re(e,n);return t._milliseconds+=i*a._milliseconds,t._days+=i*a._days,t._months+=i*a._months,t._bubble()}function jn(t,e){return Un(this,t,e,1)}function Gn(t,e){return Un(this,t,e,-1)}function qn(t){return 0>t?Math.floor(t):Math.ceil(t)}function Zn(){var t,e,n,i,a,r=this._milliseconds,o=this._days,s=this._months,l=this._data;return r>=0&&o>=0&&s>=0||0>=r&&0>=o&&0>=s||(r+=864e5*qn(Xn(s)+o),o=0,s=0),l.milliseconds=r%1e3,t=b(r/1e3),l.seconds=t%60,e=b(t/60),l.minutes=e%60,n=b(e/60),l.hours=n%24,o+=b(n/24),a=b(Jn(o)),s+=a,o-=qn(Xn(a)),i=b(s/12),s%=12,l.days=o,l.months=s,l.years=i,this}function Jn(t){return 4800*t/146097}function Xn(t){return 146097*t/4800}function Qn(t){var e,n,i=this._milliseconds;if(t=Y(t),"month"===t||"year"===t)return e=this._days+i/864e5,n=this._months+Jn(e),"month"===t?n:n/12;switch(e=this._days+Math.round(Xn(this._months)),t){case"week":return e/7+i/6048e5;case"day":return e+i/864e5;case"hour":return 24*e+i/36e5;case"minute":return 1440*e+i/6e4;case"second":return 86400*e+i/1e3;case"millisecond":return Math.floor(864e5*e)+i;default:throw new Error("Unknown unit "+t)}}function $n(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*y(this._months/12)}function Kn(t){return function(){return this.as(t)}}function ti(t){return t=Y(t),this[t+"s"]()}function ei(t){return function(){return this._data[t]}}function ni(){return b(this.days()/7)}function ii(t,e,n,i,a){return a.relativeTime(e||1,!!n,t,i)}function ai(t,e,n){var i=re(t).abs(),a=nr(i.as("s")),r=nr(i.as("m")),o=nr(i.as("h")),s=nr(i.as("d")),l=nr(i.as("M")),u=nr(i.as("y")),d=a<ir.s&&["s",a]||1>=r&&["m"]||r<ir.m&&["mm",r]||1>=o&&["h"]||o<ir.h&&["hh",o]||1>=s&&["d"]||s<ir.d&&["dd",s]||1>=l&&["M"]||l<ir.M&&["MM",l]||1>=u&&["y"]||["yy",u];return d[2]=e,d[3]=+t>0,d[4]=n,ii.apply(null,d)}function ri(t,e){return void 0===ir[t]?!1:void 0===e?ir[t]:(ir[t]=e,!0)}function oi(t){var e=this.localeData(),n=ai(this,!t,e);return t&&(n=e.pastFuture(+this,n)),e.postformat(n)}function si(){var t,e,n,i=ar(this._milliseconds)/1e3,a=ar(this._days),r=ar(this._months);t=b(i/60),e=b(t/60),i%=60,t%=60,n=b(r/12),r%=12;var o=n,s=r,l=a,u=e,d=t,c=i,h=this.asSeconds();return h?(0>h?"-":"")+"P"+(o?o+"Y":"")+(s?s+"M":"")+(l?l+"D":"")+(u||d||c?"T":"")+(u?u+"H":"")+(d?d+"M":"")+(c?c+"S":""):"P0D"}var li,ui;ui=Array.prototype.some?Array.prototype.some:function(t){for(var e=Object(this),n=e.length>>>0,i=0;n>i;i++)if(i in e&&t.call(this,e[i],i,e))return!0;return!1};var di=t.momentProperties=[],ci=!1,hi={};t.suppressDeprecationWarnings=!1,t.deprecationHandler=null;var fi;fi=Object.keys?Object.keys:function(t){var e,n=[];for(e in t)s(t,e)&&n.push(e);return n};var gi,pi,mi={},vi={},bi=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,yi=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,xi={},ki={},_i=/\d/,wi=/\d\d/,Si=/\d{3}/,Mi=/\d{4}/,Di=/[+-]?\d{6}/,Ci=/\d\d?/,Ti=/\d\d\d\d?/,Pi=/\d\d\d\d\d\d?/,Fi=/\d{1,3}/,Ai=/\d{1,4}/,Ii=/[+-]?\d{1,6}/,Oi=/\d+/,Ri=/[+-]?\d+/,Wi=/Z|[+-]\d\d:?\d\d/gi,Vi=/Z|[+-]\d\d(?::?\d\d)?/gi,Li=/[+-]?\d+(\.\d{1,3})?/,Yi=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Bi={},zi={},Hi=0,Ni=1,Ei=2,Ui=3,ji=4,Gi=5,qi=6,Zi=7,Ji=8;pi=Array.prototype.indexOf?Array.prototype.indexOf:function(t){var e;for(e=0;e<this.length;++e)if(this[e]===t)return e;return-1},j("M",["MM",2],"Mo",function(){return this.month()+1}),j("MMM",0,0,function(t){return this.localeData().monthsShort(this,t)}),j("MMMM",0,0,function(t){return this.localeData().months(this,t)}),L("month","M"),X("M",Ci),X("MM",Ci,wi),X("MMM",function(t,e){return e.monthsShortRegex(t)}),X("MMMM",function(t,e){return e.monthsRegex(t)}),tt(["M","MM"],function(t,e){e[Ni]=y(t)-1}),tt(["MMM","MMMM"],function(t,e,n,i){var a=n._locale.monthsParse(t,i,n._strict);null!=a?e[Ni]=a:c(n).invalidMonth=t});var Xi=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,Qi="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),$i="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Ki=Yi,ta=Yi,ea=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,na=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,ia=/Z|[+-]\d\d(?::?\d\d)?/,aa=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],ra=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],oa=/^\/?Date\((\-?\d+)/i;t.createFromInputFallback=_("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(t){t._d=new Date(t._i+(t._useUTC?" UTC":""))}),j("Y",0,0,function(){var t=this.year();return 9999>=t?""+t:"+"+t}),j(0,["YY",2],0,function(){return this.year()%100}),j(0,["YYYY",4],0,"year"),j(0,["YYYYY",5],0,"year"),j(0,["YYYYYY",6,!0],0,"year"),L("year","y"),X("Y",Ri),X("YY",Ci,wi),X("YYYY",Ai,Mi),X("YYYYY",Ii,Di),X("YYYYYY",Ii,Di),tt(["YYYYY","YYYYYY"],Hi),tt("YYYY",function(e,n){n[Hi]=2===e.length?t.parseTwoDigitYear(e):y(e)}),tt("YY",function(e,n){n[Hi]=t.parseTwoDigitYear(e)}),tt("Y",function(t,e){e[Hi]=parseInt(t,10)}),t.parseTwoDigitYear=function(t){return y(t)+(y(t)>68?1900:2e3)};var sa=z("FullYear",!0);t.ISO_8601=function(){};var la=_("moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(){var t=Yt.apply(null,arguments);return this.isValid()&&t.isValid()?this>t?this:t:f()}),ua=_("moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(){var t=Yt.apply(null,arguments);return this.isValid()&&t.isValid()?t>this?this:t:f()}),da=function(){return Date.now?Date.now():+new Date};Ut("Z",":"),Ut("ZZ",""),X("Z",Vi),X("ZZ",Vi),tt(["Z","ZZ"],function(t,e,n){n._useUTC=!0,n._tzm=jt(Vi,t)});var ca=/([\+\-]|\d\d)/gi;t.updateOffset=function(){};var ha=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,fa=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;re.fn=Nt.prototype;var ga=de(1,"add"),pa=de(-1,"subtract");t.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",t.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var ma=_("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(t){return void 0===t?this.localeData():this.locale(t)});j(0,["gg",2],0,function(){return this.weekYear()%100}),j(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Ee("gggg","weekYear"),Ee("ggggg","weekYear"),Ee("GGGG","isoWeekYear"),Ee("GGGGG","isoWeekYear"),L("weekYear","gg"),L("isoWeekYear","GG"),X("G",Ri),X("g",Ri),X("GG",Ci,wi),X("gg",Ci,wi),X("GGGG",Ai,Mi),X("gggg",Ai,Mi),X("GGGGG",Ii,Di),X("ggggg",Ii,Di),et(["gggg","ggggg","GGGG","GGGGG"],function(t,e,n,i){e[i.substr(0,2)]=y(t)}),et(["gg","GG"],function(e,n,i,a){n[a]=t.parseTwoDigitYear(e)}),j("Q",0,"Qo","quarter"),L("quarter","Q"),X("Q",_i),tt("Q",function(t,e){e[Ni]=3*(y(t)-1)}),j("w",["ww",2],"wo","week"),j("W",["WW",2],"Wo","isoWeek"),L("week","w"),L("isoWeek","W"),X("w",Ci),X("ww",Ci,wi),X("W",Ci),X("WW",Ci,wi),et(["w","ww","W","WW"],function(t,e,n,i){e[i.substr(0,1)]=y(t)});var va={dow:0,doy:6};j("D",["DD",2],"Do","date"),L("date","D"),X("D",Ci),X("DD",Ci,wi),X("Do",function(t,e){return t?e._ordinalParse:e._ordinalParseLenient}),tt(["D","DD"],Ei),tt("Do",function(t,e){e[Ei]=y(t.match(Ci)[0],10)});var ba=z("Date",!0);j("d",0,"do","day"),j("dd",0,0,function(t){return this.localeData().weekdaysMin(this,t)}),j("ddd",0,0,function(t){return this.localeData().weekdaysShort(this,t)}),j("dddd",0,0,function(t){return this.localeData().weekdays(this,t)}),j("e",0,0,"weekday"),j("E",0,0,"isoWeekday"),L("day","d"),L("weekday","e"),L("isoWeekday","E"),X("d",Ci),X("e",Ci),X("E",Ci),X("dd",function(t,e){return e.weekdaysMinRegex(t)}),X("ddd",function(t,e){return e.weekdaysShortRegex(t)}),X("dddd",function(t,e){return e.weekdaysRegex(t)}),et(["dd","ddd","dddd"],function(t,e,n,i){var a=n._locale.weekdaysParse(t,i,n._strict);null!=a?e.d=a:c(n).invalidWeekday=t}),et(["d","e","E"],function(t,e,n,i){e[i]=y(t)});var ya="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),xa="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),ka="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),_a=Yi,wa=Yi,Sa=Yi;j("DDD",["DDDD",3],"DDDo","dayOfYear"),L("dayOfYear","DDD"),X("DDD",Fi),X("DDDD",Si),tt(["DDD","DDDD"],function(t,e,n){n._dayOfYear=y(t)}),j("H",["HH",2],0,"hour"),j("h",["hh",2],0,vn),j("k",["kk",2],0,bn),j("hmm",0,0,function(){return""+vn.apply(this)+U(this.minutes(),2)}),j("hmmss",0,0,function(){return""+vn.apply(this)+U(this.minutes(),2)+U(this.seconds(),2)}),j("Hmm",0,0,function(){return""+this.hours()+U(this.minutes(),2)}),j("Hmmss",0,0,function(){return""+this.hours()+U(this.minutes(),2)+U(this.seconds(),2)}),yn("a",!0),yn("A",!1),L("hour","h"),X("a",xn),X("A",xn),X("H",Ci),X("h",Ci),X("HH",Ci,wi),X("hh",Ci,wi),X("hmm",Ti),X("hmmss",Pi),X("Hmm",Ti),X("Hmmss",Pi),tt(["H","HH"],Ui),tt(["a","A"],function(t,e,n){n._isPm=n._locale.isPM(t),n._meridiem=t}),tt(["h","hh"],function(t,e,n){e[Ui]=y(t),c(n).bigHour=!0}),tt("hmm",function(t,e,n){var i=t.length-2;e[Ui]=y(t.substr(0,i)),e[ji]=y(t.substr(i)),
c(n).bigHour=!0}),tt("hmmss",function(t,e,n){var i=t.length-4,a=t.length-2;e[Ui]=y(t.substr(0,i)),e[ji]=y(t.substr(i,2)),e[Gi]=y(t.substr(a)),c(n).bigHour=!0}),tt("Hmm",function(t,e,n){var i=t.length-2;e[Ui]=y(t.substr(0,i)),e[ji]=y(t.substr(i))}),tt("Hmmss",function(t,e,n){var i=t.length-4,a=t.length-2;e[Ui]=y(t.substr(0,i)),e[ji]=y(t.substr(i,2)),e[Gi]=y(t.substr(a))});var Ma=/[ap]\.?m?\.?/i,Da=z("Hours",!0);j("m",["mm",2],0,"minute"),L("minute","m"),X("m",Ci),X("mm",Ci,wi),tt(["m","mm"],ji);var Ca=z("Minutes",!1);j("s",["ss",2],0,"second"),L("second","s"),X("s",Ci),X("ss",Ci,wi),tt(["s","ss"],Gi);var Ta=z("Seconds",!1);j("S",0,0,function(){return~~(this.millisecond()/100)}),j(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),j(0,["SSS",3],0,"millisecond"),j(0,["SSSS",4],0,function(){return 10*this.millisecond()}),j(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),j(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),j(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),j(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),j(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),L("millisecond","ms"),X("S",Fi,_i),X("SS",Fi,wi),X("SSS",Fi,Si);var Pa;for(Pa="SSSS";Pa.length<=9;Pa+="S")X(Pa,Oi);for(Pa="S";Pa.length<=9;Pa+="S")tt(Pa,wn);var Fa=z("Milliseconds",!1);j("z",0,0,"zoneAbbr"),j("zz",0,0,"zoneName");var Aa=m.prototype;Aa.add=ga,Aa.calendar=he,Aa.clone=fe,Aa.diff=xe,Aa.endOf=Ie,Aa.format=Se,Aa.from=Me,Aa.fromNow=De,Aa.to=Ce,Aa.toNow=Te,Aa.get=E,Aa.invalidAt=He,Aa.isAfter=ge,Aa.isBefore=pe,Aa.isBetween=me,Aa.isSame=ve,Aa.isSameOrAfter=be,Aa.isSameOrBefore=ye,Aa.isValid=Be,Aa.lang=ma,Aa.locale=Pe,Aa.localeData=Fe,Aa.max=ua,Aa.min=la,Aa.parsingFlags=ze,Aa.set=E,Aa.startOf=Ae,Aa.subtract=pa,Aa.toArray=Ve,Aa.toObject=Le,Aa.toDate=We,Aa.toISOString=we,Aa.toJSON=Ye,Aa.toString=_e,Aa.unix=Re,Aa.valueOf=Oe,Aa.creationData=Ne,Aa.year=sa,Aa.isLeapYear=kt,Aa.weekYear=Ue,Aa.isoWeekYear=je,Aa.quarter=Aa.quarters=Xe,Aa.month=ut,Aa.daysInMonth=dt,Aa.week=Aa.weeks=tn,Aa.isoWeek=Aa.isoWeeks=en,Aa.weeksInYear=qe,Aa.isoWeeksInYear=Ge,Aa.date=ba,Aa.day=Aa.days=un,Aa.weekday=dn,Aa.isoWeekday=cn,Aa.dayOfYear=mn,Aa.hour=Aa.hours=Da,Aa.minute=Aa.minutes=Ca,Aa.second=Aa.seconds=Ta,Aa.millisecond=Aa.milliseconds=Fa,Aa.utcOffset=Zt,Aa.utc=Xt,Aa.local=Qt,Aa.parseZone=$t,Aa.hasAlignedHourOffset=Kt,Aa.isDST=te,Aa.isDSTShifted=ee,Aa.isLocal=ne,Aa.isUtcOffset=ie,Aa.isUtc=ae,Aa.isUTC=ae,Aa.zoneAbbr=Sn,Aa.zoneName=Mn,Aa.dates=_("dates accessor is deprecated. Use date instead.",ba),Aa.months=_("months accessor is deprecated. Use month instead",ut),Aa.years=_("years accessor is deprecated. Use year instead",sa),Aa.zone=_("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",Jt);var Ia=Aa,Oa={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Ra={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Wa="Invalid date",Va="%d",La=/\d{1,2}/,Ya={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Ba=T.prototype;Ba._calendar=Oa,Ba.calendar=Tn,Ba._longDateFormat=Ra,Ba.longDateFormat=Pn,Ba._invalidDate=Wa,Ba.invalidDate=Fn,Ba._ordinal=Va,Ba.ordinal=An,Ba._ordinalParse=La,Ba.preparse=In,Ba.postformat=In,Ba._relativeTime=Ya,Ba.relativeTime=On,Ba.pastFuture=Rn,Ba.set=D,Ba.months=at,Ba._months=Qi,Ba.monthsShort=rt,Ba._monthsShort=$i,Ba.monthsParse=st,Ba._monthsRegex=ta,Ba.monthsRegex=ht,Ba._monthsShortRegex=Ki,Ba.monthsShortRegex=ct,Ba.week=Qe,Ba._week=va,Ba.firstDayOfYear=Ke,Ba.firstDayOfWeek=$e,Ba.weekdays=an,Ba._weekdays=ya,Ba.weekdaysMin=on,Ba._weekdaysMin=ka,Ba.weekdaysShort=rn,Ba._weekdaysShort=xa,Ba.weekdaysParse=ln,Ba._weekdaysRegex=_a,Ba.weekdaysRegex=hn,Ba._weekdaysShortRegex=wa,Ba.weekdaysShortRegex=fn,Ba._weekdaysMinRegex=Sa,Ba.weekdaysMinRegex=gn,Ba.isPM=kn,Ba._meridiemParse=Ma,Ba.meridiem=_n,I("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var e=t%10,n=1===y(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th";return t+n}}),t.lang=_("moment.lang is deprecated. Use moment.locale instead.",I),t.langData=_("moment.langData is deprecated. Use moment.localeData instead.",W);var za=Math.abs,Ha=Kn("ms"),Na=Kn("s"),Ea=Kn("m"),Ua=Kn("h"),ja=Kn("d"),Ga=Kn("w"),qa=Kn("M"),Za=Kn("y"),Ja=ei("milliseconds"),Xa=ei("seconds"),Qa=ei("minutes"),$a=ei("hours"),Ka=ei("days"),tr=ei("months"),er=ei("years"),nr=Math.round,ir={s:45,m:45,h:22,d:26,M:11},ar=Math.abs,rr=Nt.prototype;rr.abs=En,rr.add=jn,rr.subtract=Gn,rr.as=Qn,rr.asMilliseconds=Ha,rr.asSeconds=Na,rr.asMinutes=Ea,rr.asHours=Ua,rr.asDays=ja,rr.asWeeks=Ga,rr.asMonths=qa,rr.asYears=Za,rr.valueOf=$n,rr._bubble=Zn,rr.get=ti,rr.milliseconds=Ja,rr.seconds=Xa,rr.minutes=Qa,rr.hours=$a,rr.days=Ka,rr.weeks=ni,rr.months=tr,rr.years=er,rr.humanize=oi,rr.toISOString=si,rr.toString=si,rr.toJSON=si,rr.locale=Pe,rr.localeData=Fe,rr.toIsoString=_("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",si),rr.lang=ma,j("X",0,0,"unix"),j("x",0,0,"valueOf"),X("x",Ri),X("X",Li),tt("X",function(t,e,n){n._d=new Date(1e3*parseFloat(t,10))}),tt("x",function(t,e,n){n._d=new Date(y(t))}),t.version="2.13.0",i(Yt),t.fn=Ia,t.min=zt,t.max=Ht,t.now=da,t.utc=u,t.unix=Dn,t.months=Yn,t.isDate=r,t.locale=I,t.invalid=f,t.duration=re,t.isMoment=v,t.weekdays=zn,t.parseZone=Cn,t.localeData=W,t.isDuration=Et,t.monthsShort=Bn,t.weekdaysMin=Nn,t.defineLocale=O,t.updateLocale=R,t.locales=V,t.weekdaysShort=Hn,t.normalizeUnits=Y,t.relativeTimeThreshold=ri,t.prototype=Ia;var or=t;return or})},{}],7:[function(t,e,n){var i=t(26)();t(25)(i),t(24)(i),t(21)(i),t(22)(i),t(23)(i),t(27)(i),t(31)(i),t(29)(i),t(30)(i),t(32)(i),t(28)(i),t(33)(i),t(34)(i),t(35)(i),t(36)(i),t(37)(i),t(40)(i),t(38)(i),t(39)(i),t(41)(i),t(42)(i),t(43)(i),t(15)(i),t(16)(i),t(17)(i),t(18)(i),t(19)(i),t(20)(i),t(8)(i),t(9)(i),t(10)(i),t(11)(i),t(12)(i),t(13)(i),t(14)(i),window.Chart=e.exports=i},{10:10,11:11,12:12,13:13,14:14,15:15,16:16,17:17,18:18,19:19,20:20,21:21,22:22,23:23,24:24,25:25,26:26,27:27,28:28,29:29,30:30,31:31,32:32,33:33,34:34,35:35,36:36,37:37,38:38,39:39,40:40,41:41,42:42,43:43,8:8,9:9}],8:[function(t,e,n){"use strict";e.exports=function(t){t.Bar=function(e,n){return n.type="bar",new t(e,n)}}},{}],9:[function(t,e,n){"use strict";e.exports=function(t){t.Bubble=function(e,n){return n.type="bubble",new t(e,n)}}},{}],10:[function(t,e,n){"use strict";e.exports=function(t){t.Doughnut=function(e,n){return n.type="doughnut",new t(e,n)}}},{}],11:[function(t,e,n){"use strict";e.exports=function(t){t.Line=function(e,n){return n.type="line",new t(e,n)}}},{}],12:[function(t,e,n){"use strict";e.exports=function(t){t.PolarArea=function(e,n){return n.type="polarArea",new t(e,n)}}},{}],13:[function(t,e,n){"use strict";e.exports=function(t){t.Radar=function(e,n){return n.options=t.helpers.configMerge({aspectRatio:1},n.options),n.type="radar",new t(e,n)}}},{}],14:[function(t,e,n){"use strict";e.exports=function(t){var e={hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-1"}],yAxes:[{type:"linear",position:"left",id:"y-axis-1"}]},tooltips:{callbacks:{title:function(t,e){return""},label:function(t,e){return"("+t.xLabel+", "+t.yLabel+")"}}}};t.defaults.scatter=e,t.controllers.scatter=t.controllers.line,t.Scatter=function(e,n){return n.type="scatter",new t(e,n)}}},{}],15:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.bar={hover:{mode:"label"},scales:{xAxes:[{type:"category",categoryPercentage:.8,barPercentage:.9,gridLines:{offsetGridLines:!0}}],yAxes:[{type:"linear"}]}},t.controllers.bar=t.DatasetController.extend({dataElementType:t.elements.Rectangle,initialize:function(e,n){t.DatasetController.prototype.initialize.call(this,e,n),this.getMeta().bar=!0},getBarCount:function(){var t=this,n=0;return e.each(t.chart.data.datasets,function(e,i){var a=t.chart.getDatasetMeta(i);a.bar&&t.chart.isDatasetVisible(i)&&++n},t),n},update:function(t){var n=this;e.each(n.getMeta().data,function(e,i){n.updateElement(e,i,t)},n)},updateElement:function(t,n,i){var a=this,r=a.getMeta(),o=a.getScaleForId(r.xAxisID),s=a.getScaleForId(r.yAxisID),l=s.getBasePixel(),u=a.chart.options.elements.rectangle,d=t.custom||{},c=a.getDataset();e.extend(t,{_xScale:o,_yScale:s,_datasetIndex:a.index,_index:n,_model:{x:a.calculateBarX(n,a.index),y:i?l:a.calculateBarY(n,a.index),label:a.chart.data.labels[n],datasetLabel:c.label,base:i?l:a.calculateBarBase(a.index,n),width:a.calculateBarWidth(n),backgroundColor:d.backgroundColor?d.backgroundColor:e.getValueAtIndexOrDefault(c.backgroundColor,n,u.backgroundColor),borderSkipped:d.borderSkipped?d.borderSkipped:u.borderSkipped,borderColor:d.borderColor?d.borderColor:e.getValueAtIndexOrDefault(c.borderColor,n,u.borderColor),borderWidth:d.borderWidth?d.borderWidth:e.getValueAtIndexOrDefault(c.borderWidth,n,u.borderWidth)}}),t.pivot()},calculateBarBase:function(t,e){var n=this,i=n.getMeta(),a=n.getScaleForId(i.yAxisID),r=0;if(a.options.stacked){var o=n.chart,s=o.data.datasets,l=s[t].data[e];if(0>l)for(var u=0;t>u;u++){var d=s[u],c=o.getDatasetMeta(u);c.bar&&c.yAxisID===a.id&&o.isDatasetVisible(u)&&(r+=d.data[e]<0?d.data[e]:0)}else for(var h=0;t>h;h++){var f=s[h],g=o.getDatasetMeta(h);g.bar&&g.yAxisID===a.id&&o.isDatasetVisible(h)&&(r+=f.data[e]>0?f.data[e]:0)}return a.getPixelForValue(r)}return a.getBasePixel()},getRuler:function(t){var e,n=this,i=n.getMeta(),a=n.getScaleForId(i.xAxisID),r=n.getBarCount();e="category"===a.options.type?a.getPixelForTick(t+1)-a.getPixelForTick(t):a.width/a.ticks.length;var o=e*a.options.categoryPercentage,s=(e-e*a.options.categoryPercentage)/2,l=o/r;if(a.ticks.length!==n.chart.data.labels.length){var u=a.ticks.length/n.chart.data.labels.length;l*=u}var d=l*a.options.barPercentage,c=l-l*a.options.barPercentage;return{datasetCount:r,tickWidth:e,categoryWidth:o,categorySpacing:s,fullBarWidth:l,barWidth:d,barSpacing:c}},calculateBarWidth:function(t){var e=this.getScaleForId(this.getMeta().xAxisID),n=this.getRuler(t);return e.options.stacked?n.categoryWidth:n.barWidth},getBarIndex:function(t){var e,n,i=0;for(n=0;t>n;++n)e=this.chart.getDatasetMeta(n),e.bar&&this.chart.isDatasetVisible(n)&&++i;return i},calculateBarX:function(t,e){var n=this,i=n.getMeta(),a=n.getScaleForId(i.xAxisID),r=n.getBarIndex(e),o=n.getRuler(t),s=a.getPixelForValue(null,t,e,n.chart.isCombo);return s-=n.chart.isCombo?o.tickWidth/2:0,a.options.stacked?s+o.categoryWidth/2+o.categorySpacing:s+o.barWidth/2+o.categorySpacing+o.barWidth*r+o.barSpacing/2+o.barSpacing*r},calculateBarY:function(t,e){var n=this,i=n.getMeta(),a=n.getScaleForId(i.yAxisID),r=n.getDataset().data[t];if(a.options.stacked){for(var o=0,s=0,l=0;e>l;l++){var u=n.chart.data.datasets[l],d=n.chart.getDatasetMeta(l);d.bar&&d.yAxisID===a.id&&n.chart.isDatasetVisible(l)&&(u.data[t]<0?s+=u.data[t]||0:o+=u.data[t]||0)}return 0>r?a.getPixelForValue(s+r):a.getPixelForValue(o+r)}return a.getPixelForValue(r)},draw:function(t){var n=this,i=t||1;e.each(n.getMeta().data,function(t,e){var a=n.getDataset().data[e];null===a||void 0===a||isNaN(a)||t.transition(i).draw()},n)},setHoverStyle:function(t){var n=this.chart.data.datasets[t._datasetIndex],i=t._index,a=t.custom||{},r=t._model;r.backgroundColor=a.hoverBackgroundColor?a.hoverBackgroundColor:e.getValueAtIndexOrDefault(n.hoverBackgroundColor,i,e.getHoverColor(r.backgroundColor)),r.borderColor=a.hoverBorderColor?a.hoverBorderColor:e.getValueAtIndexOrDefault(n.hoverBorderColor,i,e.getHoverColor(r.borderColor)),r.borderWidth=a.hoverBorderWidth?a.hoverBorderWidth:e.getValueAtIndexOrDefault(n.hoverBorderWidth,i,r.borderWidth)},removeHoverStyle:function(t){var n=this.chart.data.datasets[t._datasetIndex],i=t._index,a=t.custom||{},r=t._model,o=this.chart.options.elements.rectangle;r.backgroundColor=a.backgroundColor?a.backgroundColor:e.getValueAtIndexOrDefault(n.backgroundColor,i,o.backgroundColor),r.borderColor=a.borderColor?a.borderColor:e.getValueAtIndexOrDefault(n.borderColor,i,o.borderColor),r.borderWidth=a.borderWidth?a.borderWidth:e.getValueAtIndexOrDefault(n.borderWidth,i,o.borderWidth)}}),t.defaults.horizontalBar={hover:{mode:"label"},scales:{xAxes:[{type:"linear",position:"bottom"}],yAxes:[{position:"left",type:"category",categoryPercentage:.8,barPercentage:.9,gridLines:{offsetGridLines:!0}}]},elements:{rectangle:{borderSkipped:"left"}},tooltips:{callbacks:{title:function(t,e){var n="";return t.length>0&&(t[0].yLabel?n=t[0].yLabel:e.labels.length>0&&t[0].index<e.labels.length&&(n=e.labels[t[0].index])),n},label:function(t,e){var n=e.datasets[t.datasetIndex].label||"";return n+": "+t.xLabel}}}},t.controllers.horizontalBar=t.controllers.bar.extend({updateElement:function(t,n,i,a){var r=this,o=r.getMeta(),s=r.getScaleForId(o.xAxisID),l=r.getScaleForId(o.yAxisID),u=s.getBasePixel(),d=t.custom||{},c=r.getDataset(),h=r.chart.options.elements.rectangle;e.extend(t,{_xScale:s,_yScale:l,_datasetIndex:r.index,_index:n,_model:{x:i?u:r.calculateBarX(n,r.index),y:r.calculateBarY(n,r.index),label:r.chart.data.labels[n],datasetLabel:c.label,base:i?u:r.calculateBarBase(r.index,n),height:r.calculateBarHeight(n),backgroundColor:d.backgroundColor?d.backgroundColor:e.getValueAtIndexOrDefault(c.backgroundColor,n,h.backgroundColor),borderSkipped:d.borderSkipped?d.borderSkipped:h.borderSkipped,borderColor:d.borderColor?d.borderColor:e.getValueAtIndexOrDefault(c.borderColor,n,h.borderColor),borderWidth:d.borderWidth?d.borderWidth:e.getValueAtIndexOrDefault(c.borderWidth,n,h.borderWidth)},draw:function(){function t(t){return l[(d+t)%4]}var e=this._chart.ctx,n=this._view,i=n.height/2,a=n.y-i,r=n.y+i,o=n.base-(n.base-n.x),s=n.borderWidth/2;n.borderWidth&&(a+=s,r-=s,o+=s),e.beginPath(),e.fillStyle=n.backgroundColor,e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth;var l=[[n.base,r],[n.base,a],[o,a],[o,r]],u=["bottom","left","top","right"],d=u.indexOf(n.borderSkipped,0);-1===d&&(d=0),e.moveTo.apply(e,t(0));for(var c=1;4>c;c++)e.lineTo.apply(e,t(c));e.fill(),n.borderWidth&&e.stroke()},inRange:function(t,e){var n=this._view,i=!1;return n&&(i=n.x<n.base?e>=n.y-n.height/2&&e<=n.y+n.height/2&&t>=n.x&&t<=n.base:e>=n.y-n.height/2&&e<=n.y+n.height/2&&t>=n.base&&t<=n.x),i}}),t.pivot()},calculateBarBase:function(t,e){var n=this,i=n.getMeta(),a=n.getScaleForId(i.xAxisID),r=0;if(a.options.stacked){var o=n.chart.data.datasets[t].data[e];if(0>o)for(var s=0;t>s;s++){var l=n.chart.data.datasets[s],u=n.chart.getDatasetMeta(s);u.bar&&u.xAxisID===a.id&&n.chart.isDatasetVisible(s)&&(r+=l.data[e]<0?l.data[e]:0)}else for(var d=0;t>d;d++){var c=n.chart.data.datasets[d],h=n.chart.getDatasetMeta(d);h.bar&&h.xAxisID===a.id&&n.chart.isDatasetVisible(d)&&(r+=c.data[e]>0?c.data[e]:0)}return a.getPixelForValue(r)}return a.getBasePixel()},getRuler:function(t){var e,n=this,i=n.getMeta(),a=n.getScaleForId(i.yAxisID),r=n.getBarCount();e="category"===a.options.type?a.getPixelForTick(t+1)-a.getPixelForTick(t):a.width/a.ticks.length;var o=e*a.options.categoryPercentage,s=(e-e*a.options.categoryPercentage)/2,l=o/r;if(a.ticks.length!==n.chart.data.labels.length){var u=a.ticks.length/n.chart.data.labels.length;l*=u}var d=l*a.options.barPercentage,c=l-l*a.options.barPercentage;return{datasetCount:r,tickHeight:e,categoryHeight:o,categorySpacing:s,fullBarHeight:l,barHeight:d,barSpacing:c}},calculateBarHeight:function(t){var e=this,n=e.getScaleForId(e.getMeta().yAxisID),i=e.getRuler(t);return n.options.stacked?i.categoryHeight:i.barHeight},calculateBarX:function(t,e){var n=this,i=n.getMeta(),a=n.getScaleForId(i.xAxisID),r=n.getDataset().data[t];if(a.options.stacked){for(var o=0,s=0,l=0;e>l;l++){var u=n.chart.data.datasets[l],d=n.chart.getDatasetMeta(l);d.bar&&d.xAxisID===a.id&&n.chart.isDatasetVisible(l)&&(u.data[t]<0?s+=u.data[t]||0:o+=u.data[t]||0)}return 0>r?a.getPixelForValue(s+r):a.getPixelForValue(o+r)}return a.getPixelForValue(r)},calculateBarY:function(t,e){var n=this,i=n.getMeta(),a=n.getScaleForId(i.yAxisID),r=n.getBarIndex(e),o=n.getRuler(t),s=a.getPixelForValue(null,t,e,n.chart.isCombo);return s-=n.chart.isCombo?o.tickHeight/2:0,a.options.stacked?s+o.categoryHeight/2+o.categorySpacing:s+o.barHeight/2+o.categorySpacing+o.barHeight*r+o.barSpacing/2+o.barSpacing*r}})}},{}],16:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.bubble={hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-0"}],yAxes:[{type:"linear",position:"left",id:"y-axis-0"}]},tooltips:{callbacks:{title:function(t,e){return""},label:function(t,e){var n=e.datasets[t.datasetIndex].label||"",i=e.datasets[t.datasetIndex].data[t.index];return n+": ("+i.x+", "+i.y+", "+i.r+")"}}}},t.controllers.bubble=t.DatasetController.extend({dataElementType:t.elements.Point,update:function(t){var n=this,i=n.getMeta(),a=i.data;e.each(a,function(e,i){n.updateElement(e,i,t)})},updateElement:function(n,i,a){var r=this,o=r.getMeta(),s=r.getScaleForId(o.xAxisID),l=r.getScaleForId(o.yAxisID),u=n.custom||{},d=r.getDataset(),c=d.data[i],h=r.chart.options.elements.point,f=r.index;e.extend(n,{_xScale:s,_yScale:l,_datasetIndex:f,_index:i,_model:{x:a?s.getPixelForDecimal(.5):s.getPixelForValue(c,i,f,r.chart.isCombo),y:a?l.getBasePixel():l.getPixelForValue(c,i,f),radius:a?0:u.radius?u.radius:r.getRadius(c),hitRadius:u.hitRadius?u.hitRadius:e.getValueAtIndexOrDefault(d.hitRadius,i,h.hitRadius)}}),t.DatasetController.prototype.removeHoverStyle.call(r,n,h);var g=n._model;g.skip=u.skip?u.skip:isNaN(g.x)||isNaN(g.y),n.pivot()},getRadius:function(t){return t.r||this.chart.options.elements.point.radius},setHoverStyle:function(n){var i=this;t.DatasetController.prototype.setHoverStyle.call(i,n);var a=i.chart.data.datasets[n._datasetIndex],r=n._index,o=n.custom||{},s=n._model;s.radius=o.hoverRadius?o.hoverRadius:e.getValueAtIndexOrDefault(a.hoverRadius,r,i.chart.options.elements.point.hoverRadius)+i.getRadius(a.data[r])},removeHoverStyle:function(e){var n=this;t.DatasetController.prototype.removeHoverStyle.call(n,e,n.chart.options.elements.point);var i=n.chart.data.datasets[e._datasetIndex].data[e._index],a=e.custom||{},r=e._model;r.radius=a.radius?a.radius:n.getRadius(i)}})}},{}],17:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n=t.defaults;n.doughnut={animation:{animateRotate:!0,animateScale:!1},aspectRatio:1,hover:{mode:"single"},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var n=t.data,i=n.datasets,a=n.labels;if(i.length)for(var r=0;r<i[0].data.length;++r)e.push('<li><span style="background-color:'+i[0].backgroundColor[r]+'"></span>'),a[r]&&e.push(a[r]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var n=t.data;return n.labels.length&&n.datasets.length?n.labels.map(function(i,a){var r=t.getDatasetMeta(0),o=n.datasets[0],s=r.data[a],l=s.custom||{},u=e.getValueAtIndexOrDefault,d=t.options.elements.arc,c=l.backgroundColor?l.backgroundColor:u(o.backgroundColor,a,d.backgroundColor),h=l.borderColor?l.borderColor:u(o.borderColor,a,d.borderColor),f=l.borderWidth?l.borderWidth:u(o.borderWidth,a,d.borderWidth);return{text:i,fillStyle:c,strokeStyle:h,lineWidth:f,hidden:isNaN(o.data[a])||r.data[a].hidden,index:a}}):[]}},onClick:function(t,e){var n,i,a,r=e.index,o=this.chart;for(n=0,i=(o.data.datasets||[]).length;i>n;++n)a=o.getDatasetMeta(n),a.data[r].hidden=!a.data[r].hidden;o.update()}},cutoutPercentage:50,rotation:Math.PI*-.5,circumference:2*Math.PI,tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+e.datasets[t.datasetIndex].data[t.index]}}}},n.pie=e.clone(n.doughnut),e.extend(n.pie,{cutoutPercentage:0}),t.controllers.doughnut=t.controllers.pie=t.DatasetController.extend({dataElementType:t.elements.Arc,linkScales:e.noop,getRingIndex:function(t){for(var e=0,n=0;t>n;++n)this.chart.isDatasetVisible(n)&&++e;return e},update:function(t){var n=this,i=n.chart,a=i.chartArea,r=i.options,o=r.elements.arc,s=a.right-a.left-o.borderWidth,l=a.bottom-a.top-o.borderWidth,u=Math.min(s,l),d={x:0,y:0},c=n.getMeta(),h=r.cutoutPercentage,f=r.circumference;if(f<2*Math.PI){var g=r.rotation%(2*Math.PI);g+=2*Math.PI*(g>=Math.PI?-1:g<-Math.PI?1:0);var p=g+f,m={x:Math.cos(g),y:Math.sin(g)},v={x:Math.cos(p),y:Math.sin(p)},b=0>=g&&p>=0||g<=2*Math.PI&&2*Math.PI<=p,y=g<=.5*Math.PI&&.5*Math.PI<=p||g<=2.5*Math.PI&&2.5*Math.PI<=p,x=g<=-Math.PI&&-Math.PI<=p||g<=Math.PI&&Math.PI<=p,k=g<=.5*-Math.PI&&.5*-Math.PI<=p||g<=1.5*Math.PI&&1.5*Math.PI<=p,_=h/100,w={x:x?-1:Math.min(m.x*(m.x<0?1:_),v.x*(v.x<0?1:_)),y:k?-1:Math.min(m.y*(m.y<0?1:_),v.y*(v.y<0?1:_))},S={x:b?1:Math.max(m.x*(m.x>0?1:_),v.x*(v.x>0?1:_)),y:y?1:Math.max(m.y*(m.y>0?1:_),v.y*(v.y>0?1:_))},M={width:.5*(S.x-w.x),height:.5*(S.y-w.y)};u=Math.min(s/M.width,l/M.height),d={x:(S.x+w.x)*-.5,y:(S.y+w.y)*-.5}}i.outerRadius=Math.max(u/2,0),i.innerRadius=Math.max(h?i.outerRadius/100*h:1,0),i.radiusLength=(i.outerRadius-i.innerRadius)/i.getVisibleDatasetCount(),i.offsetX=d.x*i.outerRadius,i.offsetY=d.y*i.outerRadius,c.total=n.calculateTotal(),n.outerRadius=i.outerRadius-i.radiusLength*n.getRingIndex(n.index),n.innerRadius=n.outerRadius-i.radiusLength,e.each(c.data,function(e,i){n.updateElement(e,i,t)})},updateElement:function(t,n,i){var a=this,r=a.chart,o=r.chartArea,s=r.options,l=s.animation,u=(s.elements.arc,(o.left+o.right)/2),d=(o.top+o.bottom)/2,c=s.rotation,h=s.rotation,f=a.getDataset(),g=i&&l.animateRotate?0:t.hidden?0:a.calculateCircumference(f.data[n])*(s.circumference/(2*Math.PI)),p=i&&l.animateScale?0:a.innerRadius,m=i&&l.animateScale?0:a.outerRadius,v=(t.custom||{},e.getValueAtIndexOrDefault);e.extend(t,{_datasetIndex:a.index,_index:n,_model:{x:u+r.offsetX,y:d+r.offsetY,startAngle:c,endAngle:h,circumference:g,outerRadius:m,innerRadius:p,label:v(f.label,n,r.data.labels[n])}});var b=t._model;this.removeHoverStyle(t),i&&l.animateRotate||(0===n?b.startAngle=s.rotation:b.startAngle=a.getMeta().data[n-1]._model.endAngle,b.endAngle=b.startAngle+b.circumference),t.pivot()},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.arc)},calculateTotal:function(){var t,n=this.getDataset(),i=this.getMeta(),a=0;return e.each(i.data,function(e,i){t=n.data[i],isNaN(t)||e.hidden||(a+=Math.abs(t))}),a},calculateCircumference:function(t){var e=this.getMeta().total;return e>0&&!isNaN(t)?2*Math.PI*(t/e):0}})}},{}],18:[function(t,e,n){"use strict";e.exports=function(t){function e(t,e){return n.getValueOrDefault(t.showLine,e.showLines)}var n=t.helpers;t.defaults.line={showLines:!0,hover:{mode:"label"},scales:{xAxes:[{type:"category",id:"x-axis-0"}],yAxes:[{type:"linear",id:"y-axis-0"}]}},t.controllers.line=t.DatasetController.extend({datasetElementType:t.elements.Line,dataElementType:t.elements.Point,addElementAndReset:function(n){var i=this,a=i.chart.options,r=i.getMeta();t.DatasetController.prototype.addElementAndReset.call(i,n),e(i.getDataset(),a)&&0!==r.dataset._model.tension&&i.updateBezierControlPoints()},update:function(t){var i,a,r,o=this,s=o.getMeta(),l=s.dataset,u=s.data||[],d=o.chart.options,c=d.elements.line,h=o.getScaleForId(s.yAxisID),f=o.getDataset(),g=e(f,d);for(g&&(r=l.custom||{},void 0!==f.tension&&void 0===f.lineTension&&(f.lineTension=f.tension),l._scale=h,l._datasetIndex=o.index,l._children=u,l._model={spanGaps:f.spanGaps?f.spanGaps:!1,tension:r.tension?r.tension:n.getValueOrDefault(f.lineTension,c.tension),backgroundColor:r.backgroundColor?r.backgroundColor:f.backgroundColor||c.backgroundColor,borderWidth:r.borderWidth?r.borderWidth:f.borderWidth||c.borderWidth,borderColor:r.borderColor?r.borderColor:f.borderColor||c.borderColor,borderCapStyle:r.borderCapStyle?r.borderCapStyle:f.borderCapStyle||c.borderCapStyle,borderDash:r.borderDash?r.borderDash:f.borderDash||c.borderDash,borderDashOffset:r.borderDashOffset?r.borderDashOffset:f.borderDashOffset||c.borderDashOffset,borderJoinStyle:r.borderJoinStyle?r.borderJoinStyle:f.borderJoinStyle||c.borderJoinStyle,fill:r.fill?r.fill:void 0!==f.fill?f.fill:c.fill,scaleTop:h.top,scaleBottom:h.bottom,scaleZero:h.getBasePixel()},l.pivot()),i=0,a=u.length;a>i;++i)o.updateElement(u[i],i,t);for(g&&0!==l._model.tension&&o.updateBezierControlPoints(),i=0,a=u.length;a>i;++i)u[i].pivot()},getPointBackgroundColor:function(t,e){var i=this.chart.options.elements.point.backgroundColor,a=this.getDataset(),r=t.custom||{};return r.backgroundColor?i=r.backgroundColor:a.pointBackgroundColor?i=n.getValueAtIndexOrDefault(a.pointBackgroundColor,e,i):a.backgroundColor&&(i=a.backgroundColor),i},getPointBorderColor:function(t,e){var i=this.chart.options.elements.point.borderColor,a=this.getDataset(),r=t.custom||{};return r.borderColor?i=r.borderColor:a.pointBorderColor?i=n.getValueAtIndexOrDefault(a.pointBorderColor,e,i):a.borderColor&&(i=a.borderColor),i},getPointBorderWidth:function(t,e){var i=this.chart.options.elements.point.borderWidth,a=this.getDataset(),r=t.custom||{};return r.borderWidth?i=r.borderWidth:a.pointBorderWidth?i=n.getValueAtIndexOrDefault(a.pointBorderWidth,e,i):a.borderWidth&&(i=a.borderWidth),i},updateElement:function(t,e,i){var a,r,o=this,s=o.getMeta(),l=t.custom||{},u=o.getDataset(),d=o.index,c=u.data[e],h=o.getScaleForId(s.yAxisID),f=o.getScaleForId(s.xAxisID),g=o.chart.options.elements.point;void 0!==u.radius&&void 0===u.pointRadius&&(u.pointRadius=u.radius),void 0!==u.hitRadius&&void 0===u.pointHitRadius&&(u.pointHitRadius=u.hitRadius),a=f.getPixelForValue(c,e,d,o.chart.isCombo),r=i?h.getBasePixel():o.calculatePointY(c,e,d,o.chart.isCombo),t._xScale=f,t._yScale=h,t._datasetIndex=d,t._index=e,t._model={x:a,y:r,skip:l.skip||isNaN(a)||isNaN(r),radius:l.radius||n.getValueAtIndexOrDefault(u.pointRadius,e,g.radius),pointStyle:l.pointStyle||n.getValueAtIndexOrDefault(u.pointStyle,e,g.pointStyle),backgroundColor:o.getPointBackgroundColor(t,e),borderColor:o.getPointBorderColor(t,e),borderWidth:o.getPointBorderWidth(t,e),tension:s.dataset._model?s.dataset._model.tension:0,hitRadius:l.hitRadius||n.getValueAtIndexOrDefault(u.pointHitRadius,e,g.hitRadius)}},calculatePointY:function(t,e,n,i){var a,r,o,s=this,l=s.chart,u=s.getMeta(),d=s.getScaleForId(u.yAxisID),c=0,h=0;if(d.options.stacked){for(a=0;n>a;a++)r=l.data.datasets[a],o=l.getDatasetMeta(a),"line"===o.type&&l.isDatasetVisible(a)&&(r.data[e]<0?h+=r.data[e]||0:c+=r.data[e]||0);return 0>t?d.getPixelForValue(h+t):d.getPixelForValue(c+t)}return d.getPixelForValue(t)},updateBezierControlPoints:function(){var t,e,i,a,r,o=this.getMeta(),s=(this.chart.chartArea,o.data||[]);for(t=0,e=s.length;e>t;++t)i=s[t],a=i._model,r=n.splineCurve(n.previousItem(s,t)._model,a,n.nextItem(s,t)._model,o.dataset._model.tension),a.controlPointPreviousX=r.previous.x,a.controlPointPreviousY=r.previous.y,a.controlPointNextX=r.next.x,a.controlPointNextY=r.next.y},draw:function(t){var n,i,a=this,r=a.getMeta(),o=r.data||[],s=t||1;for(n=0,i=o.length;i>n;++n)o[n].transition(s);for(e(a.getDataset(),a.chart.options)&&r.dataset.transition(s).draw(),n=0,i=o.length;i>n;++n)o[n].draw()},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],i=t._index,a=t.custom||{},r=t._model;r.radius=a.hoverRadius||n.getValueAtIndexOrDefault(e.pointHoverRadius,i,this.chart.options.elements.point.hoverRadius),r.backgroundColor=a.hoverBackgroundColor||n.getValueAtIndexOrDefault(e.pointHoverBackgroundColor,i,n.getHoverColor(r.backgroundColor)),r.borderColor=a.hoverBorderColor||n.getValueAtIndexOrDefault(e.pointHoverBorderColor,i,n.getHoverColor(r.borderColor)),r.borderWidth=a.hoverBorderWidth||n.getValueAtIndexOrDefault(e.pointHoverBorderWidth,i,r.borderWidth)},removeHoverStyle:function(t){var e=this,i=e.chart.data.datasets[t._datasetIndex],a=t._index,r=t.custom||{},o=t._model;void 0!==i.radius&&void 0===i.pointRadius&&(i.pointRadius=i.radius),o.radius=r.radius||n.getValueAtIndexOrDefault(i.pointRadius,a,e.chart.options.elements.point.radius),o.backgroundColor=e.getPointBackgroundColor(t,a),o.borderColor=e.getPointBorderColor(t,a),o.borderWidth=e.getPointBorderWidth(t,a)}})}},{}],19:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.polarArea={scale:{type:"radialLinear",lineArc:!0},animation:{animateRotate:!0,animateScale:!0},aspectRatio:1,legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var n=t.data,i=n.datasets,a=n.labels;if(i.length)for(var r=0;r<i[0].data.length;++r)e.push('<li><span style="background-color:'+i[0].backgroundColor[r]+'">'),a[r]&&e.push(a[r]),e.push("</span></li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var n=t.data;return n.labels.length&&n.datasets.length?n.labels.map(function(i,a){var r=t.getDatasetMeta(0),o=n.datasets[0],s=r.data[a],l=s.custom||{},u=e.getValueAtIndexOrDefault,d=t.options.elements.arc,c=l.backgroundColor?l.backgroundColor:u(o.backgroundColor,a,d.backgroundColor),h=l.borderColor?l.borderColor:u(o.borderColor,a,d.borderColor),f=l.borderWidth?l.borderWidth:u(o.borderWidth,a,d.borderWidth);return{text:i,fillStyle:c,strokeStyle:h,lineWidth:f,hidden:isNaN(o.data[a])||r.data[a].hidden,index:a}}):[]}},onClick:function(t,e){var n,i,a,r=e.index,o=this.chart;for(n=0,i=(o.data.datasets||[]).length;i>n;++n)a=o.getDatasetMeta(n),a.data[r].hidden=!a.data[r].hidden;o.update()}},tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+t.yLabel}}}},t.controllers.polarArea=t.DatasetController.extend({dataElementType:t.elements.Arc,linkScales:e.noop,update:function(t){var n=this,i=n.chart,a=i.chartArea,r=n.getMeta(),o=i.options,s=o.elements.arc,l=Math.min(a.right-a.left,a.bottom-a.top);i.outerRadius=Math.max((l-s.borderWidth/2)/2,0),i.innerRadius=Math.max(o.cutoutPercentage?i.outerRadius/100*o.cutoutPercentage:1,0),i.radiusLength=(i.outerRadius-i.innerRadius)/i.getVisibleDatasetCount(),n.outerRadius=i.outerRadius-i.radiusLength*n.index,n.innerRadius=n.outerRadius-i.radiusLength,r.count=n.countVisibleElements(),e.each(r.data,function(e,i){n.updateElement(e,i,t)})},updateElement:function(t,n,i){for(var a=this,r=a.chart,o=r.chartArea,s=a.getDataset(),l=r.options,u=l.animation,d=(l.elements.arc,t.custom||{},r.scale),c=e.getValueAtIndexOrDefault,h=r.data.labels,f=a.calculateCircumference(s.data[n]),g=(o.left+o.right)/2,p=(o.top+o.bottom)/2,m=0,v=a.getMeta(),b=0;n>b;++b)isNaN(s.data[b])||v.data[b].hidden||++m;var y=-.5*Math.PI,x=t.hidden?0:d.getDistanceFromCenterForValue(s.data[n]),k=y+f*m,_=k+(t.hidden?0:f),w=u.animateScale?0:d.getDistanceFromCenterForValue(s.data[n]);e.extend(t,{_datasetIndex:a.index,_index:n,_scale:d,_model:{x:g,y:p,innerRadius:0,outerRadius:i?w:x,startAngle:i&&u.animateRotate?y:k,endAngle:i&&u.animateRotate?y:_,label:c(h,n,h[n])}}),a.removeHoverStyle(t),t.pivot()},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.arc)},countVisibleElements:function(){var t=this.getDataset(),n=this.getMeta(),i=0;return e.each(n.data,function(e,n){isNaN(t.data[n])||e.hidden||i++}),i},calculateCircumference:function(t){var e=this.getMeta().count;return e>0&&!isNaN(t)?2*Math.PI/e:0}})}},{}],20:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.radar={scale:{type:"radialLinear"},elements:{line:{tension:0}}},t.controllers.radar=t.DatasetController.extend({datasetElementType:t.elements.Line,dataElementType:t.elements.Point,linkScales:e.noop,addElementAndReset:function(e){t.DatasetController.prototype.addElementAndReset.call(this,e),this.updateBezierControlPoints()},update:function(t){var n=this,i=n.getMeta(),a=i.dataset,r=i.data,o=a.custom||{},s=n.getDataset(),l=n.chart.options.elements.line,u=n.chart.scale;void 0!==s.tension&&void 0===s.lineTension&&(s.lineTension=s.tension),e.extend(i.dataset,{_datasetIndex:n.index,_children:r,_loop:!0,
_model:{tension:o.tension?o.tension:e.getValueOrDefault(s.lineTension,l.tension),backgroundColor:o.backgroundColor?o.backgroundColor:s.backgroundColor||l.backgroundColor,borderWidth:o.borderWidth?o.borderWidth:s.borderWidth||l.borderWidth,borderColor:o.borderColor?o.borderColor:s.borderColor||l.borderColor,fill:o.fill?o.fill:void 0!==s.fill?s.fill:l.fill,borderCapStyle:o.borderCapStyle?o.borderCapStyle:s.borderCapStyle||l.borderCapStyle,borderDash:o.borderDash?o.borderDash:s.borderDash||l.borderDash,borderDashOffset:o.borderDashOffset?o.borderDashOffset:s.borderDashOffset||l.borderDashOffset,borderJoinStyle:o.borderJoinStyle?o.borderJoinStyle:s.borderJoinStyle||l.borderJoinStyle,scaleTop:u.top,scaleBottom:u.bottom,scaleZero:u.getBasePosition()}}),i.dataset.pivot(),e.each(r,function(e,i){n.updateElement(e,i,t)},n),n.updateBezierControlPoints()},updateElement:function(t,n,i){var a=this,r=t.custom||{},o=a.getDataset(),s=a.chart.scale,l=a.chart.options.elements.point,u=s.getPointPositionForValue(n,o.data[n]);e.extend(t,{_datasetIndex:a.index,_index:n,_scale:s,_model:{x:i?s.xCenter:u.x,y:i?s.yCenter:u.y,tension:r.tension?r.tension:e.getValueOrDefault(o.tension,a.chart.options.elements.line.tension),radius:r.radius?r.radius:e.getValueAtIndexOrDefault(o.pointRadius,n,l.radius),backgroundColor:r.backgroundColor?r.backgroundColor:e.getValueAtIndexOrDefault(o.pointBackgroundColor,n,l.backgroundColor),borderColor:r.borderColor?r.borderColor:e.getValueAtIndexOrDefault(o.pointBorderColor,n,l.borderColor),borderWidth:r.borderWidth?r.borderWidth:e.getValueAtIndexOrDefault(o.pointBorderWidth,n,l.borderWidth),pointStyle:r.pointStyle?r.pointStyle:e.getValueAtIndexOrDefault(o.pointStyle,n,l.pointStyle),hitRadius:r.hitRadius?r.hitRadius:e.getValueAtIndexOrDefault(o.hitRadius,n,l.hitRadius)}}),t._model.skip=r.skip?r.skip:isNaN(t._model.x)||isNaN(t._model.y)},updateBezierControlPoints:function(){var t=this.chart.chartArea,n=this.getMeta();e.each(n.data,function(i,a){var r=i._model,o=e.splineCurve(e.previousItem(n.data,a,!0)._model,r,e.nextItem(n.data,a,!0)._model,r.tension);r.controlPointPreviousX=Math.max(Math.min(o.previous.x,t.right),t.left),r.controlPointPreviousY=Math.max(Math.min(o.previous.y,t.bottom),t.top),r.controlPointNextX=Math.max(Math.min(o.next.x,t.right),t.left),r.controlPointNextY=Math.max(Math.min(o.next.y,t.bottom),t.top),i.pivot()})},draw:function(t){var n=this.getMeta(),i=t||1;e.each(n.data,function(t,e){t.transition(i)}),n.dataset.transition(i).draw(),e.each(n.data,function(t){t.draw()})},setHoverStyle:function(t){var n=this.chart.data.datasets[t._datasetIndex],i=t.custom||{},a=t._index,r=t._model;r.radius=i.hoverRadius?i.hoverRadius:e.getValueAtIndexOrDefault(n.pointHoverRadius,a,this.chart.options.elements.point.hoverRadius),r.backgroundColor=i.hoverBackgroundColor?i.hoverBackgroundColor:e.getValueAtIndexOrDefault(n.pointHoverBackgroundColor,a,e.getHoverColor(r.backgroundColor)),r.borderColor=i.hoverBorderColor?i.hoverBorderColor:e.getValueAtIndexOrDefault(n.pointHoverBorderColor,a,e.getHoverColor(r.borderColor)),r.borderWidth=i.hoverBorderWidth?i.hoverBorderWidth:e.getValueAtIndexOrDefault(n.pointHoverBorderWidth,a,r.borderWidth)},removeHoverStyle:function(t){var n=this.chart.data.datasets[t._datasetIndex],i=t.custom||{},a=t._index,r=t._model,o=this.chart.options.elements.point;r.radius=i.radius?i.radius:e.getValueAtIndexOrDefault(n.radius,a,o.radius),r.backgroundColor=i.backgroundColor?i.backgroundColor:e.getValueAtIndexOrDefault(n.pointBackgroundColor,a,o.backgroundColor),r.borderColor=i.borderColor?i.borderColor:e.getValueAtIndexOrDefault(n.pointBorderColor,a,o.borderColor),r.borderWidth=i.borderWidth?i.borderWidth:e.getValueAtIndexOrDefault(n.pointBorderWidth,a,o.borderWidth)}})}},{}],21:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.global.animation={duration:1e3,easing:"easeOutQuart",onProgress:e.noop,onComplete:e.noop},t.Animation=t.Element.extend({currentStep:null,numSteps:60,easing:"",render:null,onAnimationProgress:null,onAnimationComplete:null}),t.animationService={frameDuration:17,animations:[],dropFrames:0,request:null,addAnimation:function(t,e,n,i){var a=this;i||(t.animating=!0);for(var r=0;r<a.animations.length;++r)if(a.animations[r].chartInstance===t)return void(a.animations[r].animationObject=e);a.animations.push({chartInstance:t,animationObject:e}),1===a.animations.length&&a.requestAnimationFrame()},cancelAnimation:function(t){var n=e.findIndex(this.animations,function(e){return e.chartInstance===t});-1!==n&&(this.animations.splice(n,1),t.animating=!1)},requestAnimationFrame:function(){var t=this;null===t.request&&(t.request=e.requestAnimFrame.call(window,function(){t.request=null,t.startDigest()}))},startDigest:function(){var t=this,e=Date.now(),n=0;t.dropFrames>1&&(n=Math.floor(t.dropFrames),t.dropFrames=t.dropFrames%1);for(var i=0;i<t.animations.length;)null===t.animations[i].animationObject.currentStep&&(t.animations[i].animationObject.currentStep=0),t.animations[i].animationObject.currentStep+=1+n,t.animations[i].animationObject.currentStep>t.animations[i].animationObject.numSteps&&(t.animations[i].animationObject.currentStep=t.animations[i].animationObject.numSteps),t.animations[i].animationObject.render(t.animations[i].chartInstance,t.animations[i].animationObject),t.animations[i].animationObject.onAnimationProgress&&t.animations[i].animationObject.onAnimationProgress.call&&t.animations[i].animationObject.onAnimationProgress.call(t.animations[i].chartInstance,t.animations[i]),t.animations[i].animationObject.currentStep===t.animations[i].animationObject.numSteps?(t.animations[i].animationObject.onAnimationComplete&&t.animations[i].animationObject.onAnimationComplete.call&&t.animations[i].animationObject.onAnimationComplete.call(t.animations[i].chartInstance,t.animations[i]),t.animations[i].chartInstance.animating=!1,t.animations.splice(i,1)):++i;var a=Date.now(),r=(a-e)/t.frameDuration;t.dropFrames+=r,t.animations.length>0&&t.requestAnimationFrame()}}}},{}],22:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.types={},t.instances={},t.controllers={},t.Controller=function(n){return this.chart=n,this.config=n.config,this.options=this.config.options=e.configMerge(t.defaults.global,t.defaults[this.config.type],this.config.options||{}),this.id=e.uid(),Object.defineProperty(this,"data",{get:function(){return this.config.data}}),t.instances[this.id]=this,this.options.responsive&&this.resize(!0),this.initialize(),this},e.extend(t.Controller.prototype,{initialize:function(){var e=this;return t.plugins.notify("beforeInit",[e]),e.bindEvents(),e.ensureScalesHaveIDs(),e.buildOrUpdateControllers(),e.buildScales(),e.updateLayout(),e.resetElements(),e.initToolTip(),e.update(),t.plugins.notify("afterInit",[e]),e},clear:function(){return e.clear(this.chart),this},stop:function(){return t.animationService.cancelAnimation(this),this},resize:function(n){var i=this,a=i.chart,r=a.canvas,o=e.getMaximumWidth(r),s=a.aspectRatio,l=i.options.maintainAspectRatio&&isNaN(s)===!1&&isFinite(s)&&0!==s?o/s:e.getMaximumHeight(r),u=a.width!==o||a.height!==l;if(!u)return i;r.width=a.width=o,r.height=a.height=l,e.retinaScale(a);var d={width:o,height:l};return t.plugins.notify("resize",[i,d]),i.options.onResize&&i.options.onResize(i,d),n||(i.stop(),i.update(i.options.responsiveAnimationDuration)),i},ensureScalesHaveIDs:function(){var t=this.options,n=t.scales||{},i=t.scale;e.each(n.xAxes,function(t,e){t.id=t.id||"x-axis-"+e}),e.each(n.yAxes,function(t,e){t.id=t.id||"y-axis-"+e}),i&&(i.id=i.id||"scale")},buildScales:function(){var n=this,i=n.options,a=n.scales={},r=[];i.scales&&(r=r.concat((i.scales.xAxes||[]).map(function(t){return{options:t,dtype:"category"}}),(i.scales.yAxes||[]).map(function(t){return{options:t,dtype:"linear"}}))),i.scale&&r.push({options:i.scale,dtype:"radialLinear",isDefault:!0}),e.each(r,function(i,r){var o=i.options,s=e.getValueOrDefault(o.type,i.dtype),l=t.scaleService.getScaleConstructor(s);if(l){var u=new l({id:o.id,options:o,ctx:n.chart.ctx,chart:n});a[u.id]=u,i.isDefault&&(n.scale=u)}}),t.scaleService.addScalesToLayout(this)},updateLayout:function(){t.layoutService.update(this,this.chart.width,this.chart.height)},buildOrUpdateControllers:function(){var n=this,i=[],a=[];if(e.each(n.data.datasets,function(e,r){var o=n.getDatasetMeta(r);o.type||(o.type=e.type||n.config.type),i.push(o.type),o.controller?o.controller.updateIndex(r):(o.controller=new t.controllers[o.type](n,r),a.push(o.controller))},n),i.length>1)for(var r=1;r<i.length;r++)if(i[r]!==i[r-1]){n.isCombo=!0;break}return a},resetElements:function(){var t=this;e.each(t.data.datasets,function(e,n){t.getDatasetMeta(n).controller.reset()},t)},update:function(n,i){var a=this;t.plugins.notify("beforeUpdate",[a]),a.tooltip._data=a.data;var r=a.buildOrUpdateControllers();e.each(a.data.datasets,function(t,e){a.getDatasetMeta(e).controller.buildOrUpdateElements()},a),t.layoutService.update(a,a.chart.width,a.chart.height),t.plugins.notify("afterScaleUpdate",[a]),e.each(r,function(t){t.reset()}),a.updateDatasets(),t.plugins.notify("afterUpdate",[a]),a.render(n,i)},updateDatasets:function(){var e,n,i=this;if(t.plugins.notify("beforeDatasetsUpdate",[i])){for(e=0,n=i.data.datasets.length;n>e;++e)i.getDatasetMeta(e).controller.update();t.plugins.notify("afterDatasetsUpdate",[i])}},render:function(n,i){var a=this;t.plugins.notify("beforeRender",[a]);var r=a.options.animation;if(r&&("undefined"!=typeof n&&0!==n||"undefined"==typeof n&&0!==r.duration)){var o=new t.Animation;o.numSteps=(n||r.duration)/16.66,o.easing=r.easing,o.render=function(t,n){var i=e.easingEffects[n.easing],a=n.currentStep/n.numSteps,r=i(a);t.draw(r,a,n.currentStep)},o.onAnimationProgress=r.onProgress,o.onAnimationComplete=r.onComplete,t.animationService.addAnimation(a,o,n,i)}else a.draw(),r&&r.onComplete&&r.onComplete.call&&r.onComplete.call(a);return a},draw:function(n){var i=this,a=n||1;i.clear(),t.plugins.notify("beforeDraw",[i,a]),e.each(i.boxes,function(t){t.draw(i.chartArea)},i),i.scale&&i.scale.draw(),t.plugins.notify("beforeDatasetsDraw",[i,a]),e.each(i.data.datasets,function(t,e){i.isDatasetVisible(e)&&i.getDatasetMeta(e).controller.draw(n)},i,!0),t.plugins.notify("afterDatasetsDraw",[i,a]),i.tooltip.transition(a).draw(),t.plugins.notify("afterDraw",[i,a])},getElementAtEvent:function(t){var n=this,i=e.getRelativePosition(t,n.chart),a=[];return e.each(n.data.datasets,function(t,r){if(n.isDatasetVisible(r)){var o=n.getDatasetMeta(r);e.each(o.data,function(t,e){return t.inRange(i.x,i.y)?(a.push(t),a):void 0})}}),a},getElementsAtEvent:function(t){var n=this,i=e.getRelativePosition(t,n.chart),a=[],r=function(){if(n.data.datasets)for(var t=0;t<n.data.datasets.length;t++){var e=n.getDatasetMeta(t);if(n.isDatasetVisible(t))for(var a=0;a<e.data.length;a++)if(e.data[a].inRange(i.x,i.y))return e.data[a]}}.call(n);return r?(e.each(n.data.datasets,function(t,e){if(n.isDatasetVisible(e)){var i=n.getDatasetMeta(e);a.push(i.data[r._index])}},n),a):a},getElementsAtEventForMode:function(t,e){var n=this;switch(e){case"single":return n.getElementAtEvent(t);case"label":return n.getElementsAtEvent(t);case"dataset":return n.getDatasetAtEvent(t);default:return t}},getDatasetAtEvent:function(t){var e=this.getElementAtEvent(t);return e.length>0&&(e=this.getDatasetMeta(e[0]._datasetIndex).data),e},getDatasetMeta:function(t){var e=this,n=e.data.datasets[t];n._meta||(n._meta={});var i=n._meta[e.id];return i||(i=n._meta[e.id]={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null}),i},getVisibleDatasetCount:function(){for(var t=0,e=0,n=this.data.datasets.length;n>e;++e)this.isDatasetVisible(e)&&t++;return t},isDatasetVisible:function(t){var e=this.getDatasetMeta(t);return"boolean"==typeof e.hidden?!e.hidden:!this.data.datasets[t].hidden},generateLegend:function(){return this.options.legendCallback(this)},destroy:function(){var n=this;n.stop(),n.clear(),e.unbindEvents(n,n.events),e.removeResizeListener(n.chart.canvas.parentNode);var i=n.chart.canvas;i.width=n.chart.width,i.height=n.chart.height,void 0!==n.chart.originalDevicePixelRatio&&n.chart.ctx.scale(1/n.chart.originalDevicePixelRatio,1/n.chart.originalDevicePixelRatio),i.style.width=n.chart.originalCanvasStyleWidth,i.style.height=n.chart.originalCanvasStyleHeight,t.plugins.notify("destroy",[n]),delete t.instances[n.id]},toBase64Image:function(){return this.chart.canvas.toDataURL.apply(this.chart.canvas,arguments)},initToolTip:function(){var e=this;e.tooltip=new t.Tooltip({_chart:e.chart,_chartInstance:e,_data:e.data,_options:e.options.tooltips},e)},bindEvents:function(){var t=this;e.bindEvents(t,t.options.events,function(e){t.eventHandler(e)})},updateHoverStyle:function(t,e,n){var i,a,r,o=n?"setHoverStyle":"removeHoverStyle";switch(e){case"single":t=[t[0]];break;case"label":case"dataset":break;default:return}for(a=0,r=t.length;r>a;++a)i=t[a],i&&this.getDatasetMeta(i._datasetIndex).controller[o](i)},eventHandler:function(t){var n=this,i=n.tooltip,a=n.options||{},r=a.hover,o=a.tooltips;return n.lastActive=n.lastActive||[],n.lastTooltipActive=n.lastTooltipActive||[],"mouseout"===t.type?(n.active=[],n.tooltipActive=[]):(n.active=n.getElementsAtEventForMode(t,r.mode),n.tooltipActive=n.getElementsAtEventForMode(t,o.mode)),r.onHover&&r.onHover.call(n,n.active),("mouseup"===t.type||"click"===t.type)&&(a.onClick&&a.onClick.call(n,t,n.active),n.legend&&n.legend.handleEvent&&n.legend.handleEvent(t)),n.lastActive.length&&n.updateHoverStyle(n.lastActive,r.mode,!1),n.active.length&&r.mode&&n.updateHoverStyle(n.active,r.mode,!0),(o.enabled||o.custom)&&(i.initialize(),i._active=n.tooltipActive,i.update(!0)),i.pivot(),n.animating||e.arrayEquals(n.active,n.lastActive)&&e.arrayEquals(n.tooltipActive,n.lastTooltipActive)||(n.stop(),(o.enabled||o.custom)&&i.update(!0),n.render(r.animationDuration,!0)),n.lastActive=n.active,n.lastTooltipActive=n.tooltipActive,n}})}},{}],23:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n=e.noop;t.DatasetController=function(t,e){this.initialize.call(this,t,e)},e.extend(t.DatasetController.prototype,{datasetElementType:null,dataElementType:null,initialize:function(t,e){var n=this;n.chart=t,n.index=e,n.linkScales(),n.addElements()},updateIndex:function(t){this.index=t},linkScales:function(){var t=this,e=t.getMeta(),n=t.getDataset();null===e.xAxisID&&(e.xAxisID=n.xAxisID||t.chart.options.scales.xAxes[0].id),null===e.yAxisID&&(e.yAxisID=n.yAxisID||t.chart.options.scales.yAxes[0].id)},getDataset:function(){return this.chart.data.datasets[this.index]},getMeta:function(){return this.chart.getDatasetMeta(this.index)},getScaleForId:function(t){return this.chart.scales[t]},reset:function(){this.update(!0)},createMetaDataset:function(){var t=this,e=t.datasetElementType;return e&&new e({_chart:t.chart.chart,_datasetIndex:t.index})},createMetaData:function(t){var e=this,n=e.dataElementType;return n&&new n({_chart:e.chart.chart,_datasetIndex:e.index,_index:t})},addElements:function(){var t,e,n=this,i=n.getMeta(),a=n.getDataset().data||[],r=i.data;for(t=0,e=a.length;e>t;++t)r[t]=r[t]||n.createMetaData(i,t);i.dataset=i.dataset||n.createMetaDataset()},addElementAndReset:function(t){var e=this,n=e.createMetaData(t);e.getMeta().data.splice(t,0,n),e.updateElement(n,t,!0)},buildOrUpdateElements:function(){var t=this.getMeta(),e=t.data,n=this.getDataset().data.length,i=e.length;if(i>n)e.splice(n,i-n);else if(n>i)for(var a=i;n>a;++a)this.addElementAndReset(a)},update:n,draw:function(t){var n=t||1;e.each(this.getMeta().data,function(t,e){t.transition(n).draw()})},removeHoverStyle:function(t,n){var i=this.chart.data.datasets[t._datasetIndex],a=t._index,r=t.custom||{},o=e.getValueAtIndexOrDefault,s=(e.color,t._model);s.backgroundColor=r.backgroundColor?r.backgroundColor:o(i.backgroundColor,a,n.backgroundColor),s.borderColor=r.borderColor?r.borderColor:o(i.borderColor,a,n.borderColor),s.borderWidth=r.borderWidth?r.borderWidth:o(i.borderWidth,a,n.borderWidth)},setHoverStyle:function(t){var n=this.chart.data.datasets[t._datasetIndex],i=t._index,a=t.custom||{},r=e.getValueAtIndexOrDefault,o=(e.color,e.getHoverColor),s=t._model;s.backgroundColor=a.hoverBackgroundColor?a.hoverBackgroundColor:r(n.hoverBackgroundColor,i,o(s.backgroundColor)),s.borderColor=a.hoverBorderColor?a.hoverBorderColor:r(n.hoverBorderColor,i,o(s.borderColor)),s.borderWidth=a.hoverBorderWidth?a.hoverBorderWidth:r(n.hoverBorderWidth,i,s.borderWidth)}}),t.DatasetController.extend=e.inherits}},{}],24:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.elements={},t.Element=function(t){e.extend(this,t),this.initialize.apply(this,arguments)},e.extend(t.Element.prototype,{initialize:function(){this.hidden=!1},pivot:function(){var t=this;return t._view||(t._view=e.clone(t._model)),t._start=e.clone(t._view),t},transition:function(t){var n=this;return n._view||(n._view=e.clone(n._model)),1===t?(n._view=n._model,n._start=null,n):(n._start||n.pivot(),e.each(n._model,function(i,a){if("_"===a[0]);else if(n._view.hasOwnProperty(a))if(i===n._view[a]);else if("string"==typeof i)try{var r=e.color(n._model[a]).mix(e.color(n._start[a]),t);n._view[a]=r.rgbString()}catch(o){n._view[a]=i}else if("number"==typeof i){var s=void 0!==n._start[a]&&isNaN(n._start[a])===!1?n._start[a]:0;n._view[a]=(n._model[a]-s)*t+s}else n._view[a]=i;else"number"!=typeof i||isNaN(n._view[a])?n._view[a]=i:n._view[a]=i*t},n),n)},tooltipPosition:function(){return{x:this._model.x,y:this._model.y}},hasValue:function(){return e.isNumber(this._model.x)&&e.isNumber(this._model.y)}}),t.Element.extend=e.inherits}},{}],25:[function(t,e,n){"use strict";var i=t(2);e.exports=function(t){function e(t,e,n){var i;return"string"==typeof t?(i=parseInt(t,10),-1!=t.indexOf("%")&&(i=i/100*e.parentNode[n])):i=t,i}function n(t){return void 0!==t&&null!==t&&"none"!==t}function a(t,i,a){var r=document.defaultView,o=t.parentNode,s=r.getComputedStyle(t)[i],l=r.getComputedStyle(o)[i],u=n(s),d=n(l),c=Number.POSITIVE_INFINITY;return u||d?Math.min(u?e(s,t,a):c,d?e(l,o,a):c):"none"}var r=t.helpers={};r.each=function(t,e,n,i){var a,o;if(r.isArray(t))if(o=t.length,i)for(a=o-1;a>=0;a--)e.call(n,t[a],a);else for(a=0;o>a;a++)e.call(n,t[a],a);else if("object"==typeof t){var s=Object.keys(t);for(o=s.length,a=0;o>a;a++)e.call(n,t[s[a]],s[a])}},r.clone=function(t){var e={};return r.each(t,function(t,n){r.isArray(t)?e[n]=t.slice(0):"object"==typeof t&&null!==t?e[n]=r.clone(t):e[n]=t}),e},r.extend=function(t){for(var e=function(e,n){t[n]=e},n=1,i=arguments.length;i>n;n++)r.each(arguments[n],e);return t},r.configMerge=function(e){var n=r.clone(e);return r.each(Array.prototype.slice.call(arguments,1),function(e){r.each(e,function(e,i){if("scales"===i)n[i]=r.scaleMerge(n.hasOwnProperty(i)?n[i]:{},e);else if("scale"===i)n[i]=r.configMerge(n.hasOwnProperty(i)?n[i]:{},t.scaleService.getScaleDefaults(e.type),e);else if(n.hasOwnProperty(i)&&r.isArray(n[i])&&r.isArray(e)){var a=n[i];r.each(e,function(t,e){e<a.length?"object"==typeof a[e]&&null!==a[e]&&"object"==typeof t&&null!==t?a[e]=r.configMerge(a[e],t):a[e]=t:a.push(t)})}else n.hasOwnProperty(i)&&"object"==typeof n[i]&&null!==n[i]&&"object"==typeof e?n[i]=r.configMerge(n[i],e):n[i]=e})}),n},r.scaleMerge=function(e,n){var i=r.clone(e);return r.each(n,function(e,n){"xAxes"===n||"yAxes"===n?i.hasOwnProperty(n)?r.each(e,function(e,a){var o=r.getValueOrDefault(e.type,"xAxes"===n?"category":"linear"),s=t.scaleService.getScaleDefaults(o);a>=i[n].length||!i[n][a].type?i[n].push(r.configMerge(s,e)):e.type&&e.type!==i[n][a].type?i[n][a]=r.configMerge(i[n][a],s,e):i[n][a]=r.configMerge(i[n][a],e)}):(i[n]=[],r.each(e,function(e){var a=r.getValueOrDefault(e.type,"xAxes"===n?"category":"linear");i[n].push(r.configMerge(t.scaleService.getScaleDefaults(a),e))})):i.hasOwnProperty(n)&&"object"==typeof i[n]&&null!==i[n]&&"object"==typeof e?i[n]=r.configMerge(i[n],e):i[n]=e}),i},r.getValueAtIndexOrDefault=function(t,e,n){return void 0===t||null===t?n:r.isArray(t)?e<t.length?t[e]:n:t},r.getValueOrDefault=function(t,e){return void 0===t?e:t},r.indexOf=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var n=0,i=t.length;i>n;++n)if(t[n]===e)return n;return-1},r.where=function(t,e){if(r.isArray(t)&&Array.prototype.filter)return t.filter(e);var n=[];return r.each(t,function(t){e(t)&&n.push(t)}),n},r.findIndex=Array.prototype.findIndex?function(t,e,n){return t.findIndex(e,n)}:function(t,e,n){n=void 0===n?t:n;for(var i=0,a=t.length;a>i;++i)if(e.call(n,t[i],i,t))return i;return-1},r.findNextWhere=function(t,e,n){(void 0===n||null===n)&&(n=-1);for(var i=n+1;i<t.length;i++){var a=t[i];if(e(a))return a}},r.findPreviousWhere=function(t,e,n){(void 0===n||null===n)&&(n=t.length);for(var i=n-1;i>=0;i--){var a=t[i];if(e(a))return a}},r.inherits=function(t){var e=this,n=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return e.apply(this,arguments)},i=function(){this.constructor=n};return i.prototype=e.prototype,n.prototype=new i,n.extend=r.inherits,t&&r.extend(n.prototype,t),n.__super__=e.prototype,n},r.noop=function(){},r.uid=function(){var t=0;return function(){return t++}}(),r.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},r.almostEquals=function(t,e,n){return Math.abs(t-e)<n},r.max=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.max(t,e)},Number.NEGATIVE_INFINITY)},r.min=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.min(t,e)},Number.POSITIVE_INFINITY)},r.sign=Math.sign?function(t){return Math.sign(t)}:function(t){return t=+t,0===t||isNaN(t)?t:t>0?1:-1},r.log10=Math.log10?function(t){return Math.log10(t)}:function(t){return Math.log(t)/Math.LN10},r.toRadians=function(t){return t*(Math.PI/180)},r.toDegrees=function(t){return t*(180/Math.PI)},r.getAngleFromPoint=function(t,e){var n=e.x-t.x,i=e.y-t.y,a=Math.sqrt(n*n+i*i),r=Math.atan2(i,n);return r<-.5*Math.PI&&(r+=2*Math.PI),{angle:r,distance:a}},r.aliasPixel=function(t){return t%2===0?0:.5},r.splineCurve=function(t,e,n,i){var a=t.skip?e:t,r=e,o=n.skip?e:n,s=Math.sqrt(Math.pow(r.x-a.x,2)+Math.pow(r.y-a.y,2)),l=Math.sqrt(Math.pow(o.x-r.x,2)+Math.pow(o.y-r.y,2)),u=s/(s+l),d=l/(s+l);u=isNaN(u)?0:u,d=isNaN(d)?0:d;var c=i*u,h=i*d;return{previous:{x:r.x-c*(o.x-a.x),y:r.y-c*(o.y-a.y)},next:{x:r.x+h*(o.x-a.x),y:r.y+h*(o.y-a.y)}}},r.nextItem=function(t,e,n){return n?e>=t.length-1?t[0]:t[e+1]:e>=t.length-1?t[t.length-1]:t[e+1]},r.previousItem=function(t,e,n){return n?0>=e?t[t.length-1]:t[e-1]:0>=e?t[0]:t[e-1]},r.niceNum=function(t,e){var n,i=Math.floor(r.log10(t)),a=t/Math.pow(10,i);return n=e?1.5>a?1:3>a?2:7>a?5:10:1>=a?1:2>=a?2:5>=a?5:10,n*Math.pow(10,i)};var o=r.easingEffects={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-1*t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-0.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return 1*((t=t/1-1)*t*t+1)},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-1*((t=t/1-1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-0.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return 1*(t/=1)*t*t*t*t},easeOutQuint:function(t){return 1*((t=t/1-1)*t*t*t*t+1)},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return-1*Math.cos(t/1*(Math.PI/2))+1},easeOutSine:function(t){return 1*Math.sin(t/1*(Math.PI/2))},easeInOutSine:function(t){return-0.5*(Math.cos(Math.PI*t/1)-1)},easeInExpo:function(t){return 0===t?1:1*Math.pow(2,10*(t/1-1))},easeOutExpo:function(t){return 1===t?1:1*(-Math.pow(2,-10*t/1)+1)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*--t)+2)},easeInCirc:function(t){return t>=1?t:-1*(Math.sqrt(1-(t/=1)*t)-1)},easeOutCirc:function(t){return 1*Math.sqrt(1-(t=t/1-1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-0.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,n=0,i=1;return 0===t?0:1===(t/=1)?1:(n||(n=.3),i<Math.abs(1)?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),-(i*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/n)))},easeOutElastic:function(t){var e=1.70158,n=0,i=1;return 0===t?0:1===(t/=1)?1:(n||(n=.3),i<Math.abs(1)?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),i*Math.pow(2,-10*t)*Math.sin((1*t-e)*(2*Math.PI)/n)+1)},easeInOutElastic:function(t){var e=1.70158,n=0,i=1;return 0===t?0:2===(t/=.5)?1:(n||(n=1*(.3*1.5)),i<Math.abs(1)?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),1>t?-.5*(i*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/n)):i*Math.pow(2,-10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/n)*.5+1)},easeInBack:function(t){var e=1.70158;return 1*(t/=1)*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return 1*((t=t/1-1)*t*((e+1)*t+e)+1)},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:function(t){return 1-o.easeOutBounce(1-t)},easeOutBounce:function(t){return(t/=1)<1/2.75?1*(7.5625*t*t):2/2.75>t?1*(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1*(7.5625*(t-=2.25/2.75)*t+.9375):1*(7.5625*(t-=2.625/2.75)*t+.984375)},easeInOutBounce:function(t){return.5>t?.5*o.easeInBounce(2*t):.5*o.easeOutBounce(2*t-1)+.5}};r.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),r.cancelAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t,1e3/60)}}(),r.getRelativePosition=function(t,e){var n,i,a=t.originalEvent||t,o=t.currentTarget||t.srcElement,s=o.getBoundingClientRect(),l=a.touches;l&&l.length>0?(n=l[0].clientX,i=l[0].clientY):(n=a.clientX,i=a.clientY);var u=parseFloat(r.getStyle(o,"padding-left")),d=parseFloat(r.getStyle(o,"padding-top")),c=parseFloat(r.getStyle(o,"padding-right")),h=parseFloat(r.getStyle(o,"padding-bottom")),f=s.right-s.left-u-c,g=s.bottom-s.top-d-h;return n=Math.round((n-s.left-u)/f*o.width/e.currentDevicePixelRatio),i=Math.round((i-s.top-d)/g*o.height/e.currentDevicePixelRatio),{x:n,y:i}},r.addEvent=function(t,e,n){t.addEventListener?t.addEventListener(e,n):t.attachEvent?t.attachEvent("on"+e,n):t["on"+e]=n},r.removeEvent=function(t,e,n){t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent?t.detachEvent("on"+e,n):t["on"+e]=r.noop},r.bindEvents=function(t,e,n){var i=t.events=t.events||{};r.each(e,function(e){i[e]=function(){n.apply(t,arguments)},r.addEvent(t.chart.canvas,e,i[e])})},r.unbindEvents=function(t,e){var n=t.chart.canvas;r.each(e,function(t,e){r.removeEvent(n,e,t)})},r.getConstraintWidth=function(t){return a(t,"max-width","clientWidth")},r.getConstraintHeight=function(t){return a(t,"max-height","clientHeight")},r.getMaximumWidth=function(t){var e=t.parentNode,n=parseInt(r.getStyle(e,"padding-left"))+parseInt(r.getStyle(e,"padding-right")),i=e.clientWidth-n,a=r.getConstraintWidth(t);return isNaN(a)?i:Math.min(i,a)},r.getMaximumHeight=function(t){var e=t.parentNode,n=parseInt(r.getStyle(e,"padding-top"))+parseInt(r.getStyle(e,"padding-bottom")),i=e.clientHeight-n,a=r.getConstraintHeight(t);return isNaN(a)?i:Math.min(i,a)},r.getStyle=function(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e)},r.retinaScale=function(t){var e=t.ctx,n=t.canvas,i=n.width,a=n.height,r=t.currentDevicePixelRatio=window.devicePixelRatio||1;1!==r&&(n.height=a*r,n.width=i*r,e.scale(r,r),t.originalDevicePixelRatio=t.originalDevicePixelRatio||r),n.style.width=i+"px",n.style.height=a+"px"},r.clear=function(t){t.ctx.clearRect(0,0,t.width,t.height)},r.fontString=function(t,e,n){return e+" "+t+"px "+n},r.longestText=function(t,e,n,i){i=i||{};var a=i.data=i.data||{},o=i.garbageCollect=i.garbageCollect||[];i.font!==e&&(a=i.data={},o=i.garbageCollect=[],i.font=e),t.font=e;var s=0;r.each(n,function(e){void 0!==e&&null!==e&&r.isArray(e)!==!0?s=r.measureText(t,a,o,s,e):r.isArray(e)&&r.each(e,function(e){void 0===e||null===e||r.isArray(e)||(s=r.measureText(t,a,o,s,e))})});var l=o.length/2;if(l>n.length){for(var u=0;l>u;u++)delete a[o[u]];o.splice(0,l)}return s},r.measureText=function(t,e,n,i,a){var r=e[a];return r||(r=e[a]=t.measureText(a).width,n.push(a)),r>i&&(i=r),i},r.numberOfLabelLines=function(t){var e=1;return r.each(t,function(t){r.isArray(t)&&t.length>e&&(e=t.length)}),e},r.drawRoundedRectangle=function(t,e,n,i,a,r){t.beginPath(),t.moveTo(e+r,n),t.lineTo(e+i-r,n),t.quadraticCurveTo(e+i,n,e+i,n+r),t.lineTo(e+i,n+a-r),t.quadraticCurveTo(e+i,n+a,e+i-r,n+a),t.lineTo(e+r,n+a),t.quadraticCurveTo(e,n+a,e,n+a-r),t.lineTo(e,n+r),t.quadraticCurveTo(e,n,e+r,n),t.closePath()},r.color=function(e){return i?i(e instanceof CanvasGradient?t.defaults.global.defaultColor:e):(console.log("Color.js not found!"),e)},r.addResizeListener=function(t,e){var n=document.createElement("iframe"),i="chartjs-hidden-iframe";n.classlist?n.classlist.add(i):n.setAttribute("class",i);var a=n.style;a.width="100%",a.display="block",a.border=0,a.height=0,a.margin=0,a.position="absolute",a.left=0,a.right=0,a.top=0,a.bottom=0,t.insertBefore(n,t.firstChild),(n.contentWindow||n).onresize=function(){e&&e()}},r.removeResizeListener=function(t){var e=t.querySelector(".chartjs-hidden-iframe");e&&e.parentNode.removeChild(e)},r.isArray=Array.isArray?function(t){return Array.isArray(t)}:function(t){return"[object Array]"===Object.prototype.toString.call(t)},r.arrayEquals=function(t,e){var n,i,a,o;if(!t||!e||t.length!=e.length)return!1;for(n=0,i=t.length;i>n;++n)if(a=t[n],o=e[n],a instanceof Array&&o instanceof Array){if(!r.arrayEquals(a,o))return!1}else if(a!=o)return!1;return!0},r.callCallback=function(t,e,n){t&&"function"==typeof t.call&&t.apply(n,e)},r.getHoverColor=function(t){return t instanceof CanvasPattern?t:r.color(t).saturate(.5).darken(.1).rgbString()}}},{2:2}],26:[function(t,e,n){"use strict";e.exports=function(){var t=function(e,n){var i=this,a=t.helpers;return i.config=n,e.length&&e[0].getContext&&(e=e[0]),e.getContext&&(e=e.getContext("2d")),i.ctx=e,i.canvas=e.canvas,e.canvas.style.display=e.canvas.style.display||"block",i.width=e.canvas.width||parseInt(a.getStyle(e.canvas,"width"),10)||a.getMaximumWidth(e.canvas),i.height=e.canvas.height||parseInt(a.getStyle(e.canvas,"height"),10)||a.getMaximumHeight(e.canvas),i.aspectRatio=i.width/i.height,(isNaN(i.aspectRatio)||isFinite(i.aspectRatio)===!1)&&(i.aspectRatio=void 0!==n.aspectRatio?n.aspectRatio:2),i.originalCanvasStyleWidth=e.canvas.style.width,i.originalCanvasStyleHeight=e.canvas.style.height,a.retinaScale(i),n&&(i.controller=new t.Controller(i)),a.addResizeListener(e.canvas.parentNode,function(){i.controller&&i.controller.config.options.responsive&&i.controller.resize()}),i.controller?i.controller:i};return t.defaults={global:{responsive:!0,responsiveAnimationDuration:0,maintainAspectRatio:!0,events:["mousemove","mouseout","click","touchstart","touchmove"],hover:{onHover:null,mode:"single",animationDuration:400},onClick:null,defaultColor:"rgba(0,0,0,0.1)",defaultFontColor:"#666",defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:"normal",showLines:!0,elements:{},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');for(var n=0;n<t.data.datasets.length;n++)e.push('<li><span style="background-color:'+t.data.datasets[n].backgroundColor+'"></span>'),t.data.datasets[n].label&&e.push(t.data.datasets[n].label),e.push("</li>");return e.push("</ul>"),e.join("")}}},t.Chart=t,t}},{}],27:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.layoutService={defaults:{},addBox:function(t,e){t.boxes||(t.boxes=[]),t.boxes.push(e)},removeBox:function(t,e){
t.boxes&&t.boxes.splice(t.boxes.indexOf(e),1)},update:function(t,n,i){function a(t){var e,n=t.isHorizontal();n?(e=t.update(t.options.fullWidth?p:k,x),_-=e.height):(e=t.update(y,b),k-=e.width),w.push({horizontal:n,minSize:e,box:t})}function r(t){var n=e.findNextWhere(w,function(e){return e.box===t});if(n)if(t.isHorizontal()){var i={left:S,right:M,top:0,bottom:0};t.update(t.options.fullWidth?p:k,m/2,i)}else t.update(n.minSize.width,_)}function o(t){var n=e.findNextWhere(w,function(e){return e.box===t}),i={left:0,right:0,top:D,bottom:C};n&&t.update(n.minSize.width,_,i)}function s(t){t.isHorizontal()?(t.left=t.options.fullWidth?l:S,t.right=t.options.fullWidth?n-l:S+k,t.top=A,t.bottom=A+t.height,A=t.bottom):(t.left=F,t.right=F+t.width,t.top=D,t.bottom=D+_,F=t.right)}if(t){var l=0,u=0,d=e.where(t.boxes,function(t){return"left"===t.options.position}),c=e.where(t.boxes,function(t){return"right"===t.options.position}),h=e.where(t.boxes,function(t){return"top"===t.options.position}),f=e.where(t.boxes,function(t){return"bottom"===t.options.position}),g=e.where(t.boxes,function(t){return"chartArea"===t.options.position});h.sort(function(t,e){return(e.options.fullWidth?1:0)-(t.options.fullWidth?1:0)}),f.sort(function(t,e){return(t.options.fullWidth?1:0)-(e.options.fullWidth?1:0)});var p=n-2*l,m=i-2*u,v=p/2,b=m/2,y=(n-v)/(d.length+c.length),x=(i-b)/(h.length+f.length),k=p,_=m,w=[];e.each(d.concat(c,h,f),a);var S=l,M=l,D=u,C=u;e.each(d.concat(c),r),e.each(d,function(t){S+=t.width}),e.each(c,function(t){M+=t.width}),e.each(h.concat(f),r),e.each(h,function(t){D+=t.height}),e.each(f,function(t){C+=t.height}),e.each(d.concat(c),o),S=l,M=l,D=u,C=u,e.each(d,function(t){S+=t.width}),e.each(c,function(t){M+=t.width}),e.each(h,function(t){D+=t.height}),e.each(f,function(t){C+=t.height});var T=i-D-C,P=n-S-M;(P!==k||T!==_)&&(e.each(d,function(t){t.height=T}),e.each(c,function(t){t.height=T}),e.each(h,function(t){t.options.fullWidth||(t.width=P)}),e.each(f,function(t){t.options.fullWidth||(t.width=P)}),_=T,k=P);var F=l,A=u;e.each(d.concat(h),s),F+=k,A+=_,e.each(c,s),e.each(f,s),t.chartArea={left:S,top:D,right:S+k,bottom:D+_},e.each(g,function(e){e.left=t.chartArea.left,e.top=t.chartArea.top,e.right=t.chartArea.right,e.bottom=t.chartArea.bottom,e.update(k,_)})}}}}},{}],28:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n=e.noop;t.defaults.global.legend={display:!0,position:"top",fullWidth:!0,reverse:!1,onClick:function(t,e){var n=e.datasetIndex,i=this.chart,a=i.getDatasetMeta(n);a.hidden=null===a.hidden?!i.data.datasets[n].hidden:null,i.update()},labels:{boxWidth:40,padding:10,generateLabels:function(t){var n=t.data;return e.isArray(n.datasets)?n.datasets.map(function(n,i){return{text:n.label,fillStyle:e.isArray(n.backgroundColor)?n.backgroundColor[0]:n.backgroundColor,hidden:!t.isDatasetVisible(i),lineCap:n.borderCapStyle,lineDash:n.borderDash,lineDashOffset:n.borderDashOffset,lineJoin:n.borderJoinStyle,lineWidth:n.borderWidth,strokeStyle:n.borderColor,datasetIndex:i}},this):[]}}},t.Legend=t.Element.extend({initialize:function(t){e.extend(this,t),this.legendHitBoxes=[],this.doughnutMode=!1},beforeUpdate:n,update:function(t,e,n){var i=this;return i.beforeUpdate(),i.maxWidth=t,i.maxHeight=e,i.margins=n,i.beforeSetDimensions(),i.setDimensions(),i.afterSetDimensions(),i.beforeBuildLabels(),i.buildLabels(),i.afterBuildLabels(),i.beforeFit(),i.fit(),i.afterFit(),i.afterUpdate(),i.minSize},afterUpdate:n,beforeSetDimensions:n,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:n,beforeBuildLabels:n,buildLabels:function(){var t=this;t.legendItems=t.options.labels.generateLabels.call(t,t.chart),t.options.reverse&&t.legendItems.reverse()},afterBuildLabels:n,beforeFit:n,fit:function(){var n=this,i=n.options,a=i.labels,r=i.display,o=n.ctx,s=t.defaults.global,l=e.getValueOrDefault,u=l(a.fontSize,s.defaultFontSize),d=l(a.fontStyle,s.defaultFontStyle),c=l(a.fontFamily,s.defaultFontFamily),h=e.fontString(u,d,c),f=n.legendHitBoxes=[],g=n.minSize,p=n.isHorizontal();if(p?(g.width=n.maxWidth,g.height=r?10:0):(g.width=r?10:0,g.height=n.maxHeight),r)if(o.font=h,p){var m=n.lineWidths=[0],v=n.legendItems.length?u+a.padding:0;o.textAlign="left",o.textBaseline="top",e.each(n.legendItems,function(t,e){var i=a.boxWidth+u/2+o.measureText(t.text).width;m[m.length-1]+i+a.padding>=n.width&&(v+=u+a.padding,m[m.length]=n.left),f[e]={left:0,top:0,width:i,height:u},m[m.length-1]+=i+a.padding}),g.height+=v}else{var b=a.padding,y=n.columnWidths=[],x=a.padding,k=0,_=0,w=u+b;e.each(n.legendItems,function(t,e){var n=a.boxWidth+u/2+o.measureText(t.text).width;_+w>g.height&&(x+=k+a.padding,y.push(k),k=0,_=0),k=Math.max(k,n),_+=w,f[e]={left:0,top:0,width:n,height:u}}),x+=k,y.push(k),g.width+=x}n.width=g.width,n.height=g.height},afterFit:n,isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},draw:function(){var n=this,i=n.options,a=i.labels,r=t.defaults.global,o=r.elements.line,s=n.width,l=(n.height,n.lineWidths);if(i.display){var u,d=n.ctx,c=e.getValueOrDefault,h=c(a.fontColor,r.defaultFontColor),f=c(a.fontSize,r.defaultFontSize),g=c(a.fontStyle,r.defaultFontStyle),p=c(a.fontFamily,r.defaultFontFamily),m=e.fontString(f,g,p);d.textAlign="left",d.textBaseline="top",d.lineWidth=.5,d.strokeStyle=h,d.fillStyle=h,d.font=m;var v=a.boxWidth,b=n.legendHitBoxes,y=function(t,e,n){d.save(),d.fillStyle=c(n.fillStyle,r.defaultColor),d.lineCap=c(n.lineCap,o.borderCapStyle),d.lineDashOffset=c(n.lineDashOffset,o.borderDashOffset),d.lineJoin=c(n.lineJoin,o.borderJoinStyle),d.lineWidth=c(n.lineWidth,o.borderWidth),d.strokeStyle=c(n.strokeStyle,r.defaultColor),d.setLineDash&&d.setLineDash(c(n.lineDash,o.borderDash)),d.strokeRect(t,e,v,f),d.fillRect(t,e,v,f),d.restore()},x=function(t,e,n,i){d.fillText(n.text,v+f/2+t,e),n.hidden&&(d.beginPath(),d.lineWidth=2,d.moveTo(v+f/2+t,e+f/2),d.lineTo(v+f/2+t+i,e+f/2),d.stroke())},k=n.isHorizontal();u=k?{x:n.left+(s-l[0])/2,y:n.top+a.padding,line:0}:{x:n.left+a.padding,y:n.top,line:0};var _=f+a.padding;e.each(n.legendItems,function(t,e){var i=d.measureText(t.text).width,r=v+f/2+i,o=u.x,c=u.y;k?o+r>=s&&(c=u.y+=f+a.padding,u.line++,o=u.x=n.left+(s-l[u.line])/2):c+_>n.bottom&&(o=u.x=o+n.columnWidths[u.line]+a.padding,c=u.y=n.top,u.line++),y(o,c,t),b[e].left=o,b[e].top=c,x(o,c,t,i),k?u.x+=r+a.padding:u.y+=_})}},handleEvent:function(t){var n=this,i=e.getRelativePosition(t,n.chart.chart),a=i.x,r=i.y,o=n.options;if(a>=n.left&&a<=n.right&&r>=n.top&&r<=n.bottom)for(var s=n.legendHitBoxes,l=0;l<s.length;++l){var u=s[l];if(a>=u.left&&a<=u.left+u.width&&r>=u.top&&r<=u.top+u.height){o.onClick&&o.onClick.call(n,t,n.legendItems[l]);break}}}}),t.plugins.register({beforeInit:function(e){var n=e.options,i=n.legend;i&&(e.legend=new t.Legend({ctx:e.chart.ctx,options:i,chart:e}),t.layoutService.addBox(e,e.legend))}})}},{}],29:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers.noop;t.plugins={_plugins:[],register:function(t){var e=this._plugins;[].concat(t).forEach(function(t){-1===e.indexOf(t)&&e.push(t)})},unregister:function(t){var e=this._plugins;[].concat(t).forEach(function(t){var n=e.indexOf(t);-1!==n&&e.splice(n,1)})},clear:function(){this._plugins=[]},count:function(){return this._plugins.length},getAll:function(){return this._plugins},notify:function(t,e){var n,i,a=this._plugins,r=a.length;for(n=0;r>n;++n)if(i=a[n],"function"==typeof i[t]&&i[t].apply(i,e||[])===!1)return!1;return!0}},t.PluginBase=t.Element.extend({beforeInit:e,afterInit:e,beforeUpdate:e,afterUpdate:e,beforeDraw:e,afterDraw:e,destroy:e}),t.pluginService=t.plugins}},{}],30:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.scale={display:!0,position:"left",gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:"rgba(0,0,0,0.25)",offsetGridLines:!1},scaleLabel:{labelString:"",display:!1},ticks:{beginAtZero:!1,minRotation:0,maxRotation:50,mirror:!1,padding:10,reverse:!1,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,callback:function(t){return e.isArray(t)?t:""+t}}},t.Scale=t.Element.extend({beforeUpdate:function(){e.callCallback(this.options.beforeUpdate,[this])},update:function(t,n,i){var a=this;return a.beforeUpdate(),a.maxWidth=t,a.maxHeight=n,a.margins=e.extend({left:0,right:0,top:0,bottom:0},i),a.beforeSetDimensions(),a.setDimensions(),a.afterSetDimensions(),a.beforeDataLimits(),a.determineDataLimits(),a.afterDataLimits(),a.beforeBuildTicks(),a.buildTicks(),a.afterBuildTicks(),a.beforeTickToLabelConversion(),a.convertTicksToLabels(),a.afterTickToLabelConversion(),a.beforeCalculateTickRotation(),a.calculateTickRotation(),a.afterCalculateTickRotation(),a.beforeFit(),a.fit(),a.afterFit(),a.afterUpdate(),a.minSize},afterUpdate:function(){e.callCallback(this.options.afterUpdate,[this])},beforeSetDimensions:function(){e.callCallback(this.options.beforeSetDimensions,[this])},setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0},afterSetDimensions:function(){e.callCallback(this.options.afterSetDimensions,[this])},beforeDataLimits:function(){e.callCallback(this.options.beforeDataLimits,[this])},determineDataLimits:e.noop,afterDataLimits:function(){e.callCallback(this.options.afterDataLimits,[this])},beforeBuildTicks:function(){e.callCallback(this.options.beforeBuildTicks,[this])},buildTicks:e.noop,afterBuildTicks:function(){e.callCallback(this.options.afterBuildTicks,[this])},beforeTickToLabelConversion:function(){e.callCallback(this.options.beforeTickToLabelConversion,[this])},convertTicksToLabels:function(){var t=this;t.ticks=t.ticks.map(function(e,n,i){return t.options.ticks.userCallback?t.options.ticks.userCallback(e,n,i):t.options.ticks.callback(e,n,i)},t)},afterTickToLabelConversion:function(){e.callCallback(this.options.afterTickToLabelConversion,[this])},beforeCalculateTickRotation:function(){e.callCallback(this.options.beforeCalculateTickRotation,[this])},calculateTickRotation:function(){var n=this,i=n.ctx,a=t.defaults.global,r=n.options.ticks,o=e.getValueOrDefault(r.fontSize,a.defaultFontSize),s=e.getValueOrDefault(r.fontStyle,a.defaultFontStyle),l=e.getValueOrDefault(r.fontFamily,a.defaultFontFamily),u=e.fontString(o,s,l);i.font=u;var d,c=i.measureText(n.ticks[0]).width,h=i.measureText(n.ticks[n.ticks.length-1]).width;if(n.labelRotation=r.minRotation||0,n.paddingRight=0,n.paddingLeft=0,n.options.display&&n.isHorizontal()){n.paddingRight=h/2+3,n.paddingLeft=c/2+3,n.longestTextCache||(n.longestTextCache={});for(var f,g,p=e.longestText(i,u,n.ticks,n.longestTextCache),m=p,v=n.getPixelForTick(1)-n.getPixelForTick(0)-6;m>v&&n.labelRotation<r.maxRotation;){if(f=Math.cos(e.toRadians(n.labelRotation)),g=Math.sin(e.toRadians(n.labelRotation)),d=f*c,d+o/2>n.yLabelWidth&&(n.paddingLeft=d+o/2),n.paddingRight=o/2,g*p>n.maxHeight){n.labelRotation--;break}n.labelRotation++,m=f*p}}n.margins&&(n.paddingLeft=Math.max(n.paddingLeft-n.margins.left,0),n.paddingRight=Math.max(n.paddingRight-n.margins.right,0))},afterCalculateTickRotation:function(){e.callCallback(this.options.afterCalculateTickRotation,[this])},beforeFit:function(){e.callCallback(this.options.beforeFit,[this])},fit:function(){var n=this,i=n.minSize={width:0,height:0},a=n.options,r=t.defaults.global,o=a.ticks,s=a.scaleLabel,l=a.display,u=n.isHorizontal(),d=e.getValueOrDefault(o.fontSize,r.defaultFontSize),c=e.getValueOrDefault(o.fontStyle,r.defaultFontStyle),h=e.getValueOrDefault(o.fontFamily,r.defaultFontFamily),f=e.fontString(d,c,h),g=e.getValueOrDefault(s.fontSize,r.defaultFontSize),p=e.getValueOrDefault(s.fontStyle,r.defaultFontStyle),m=e.getValueOrDefault(s.fontFamily,r.defaultFontFamily),v=(e.fontString(g,p,m),a.gridLines.tickMarkLength);if(u?i.width=n.isFullWidth()?n.maxWidth-n.margins.left-n.margins.right:n.maxWidth:i.width=l?v:0,u?i.height=l?v:0:i.height=n.maxHeight,s.display&&l&&(u?i.height+=1.5*g:i.width+=1.5*g),o.display&&l){n.longestTextCache||(n.longestTextCache={});var b=e.longestText(n.ctx,f,n.ticks,n.longestTextCache),y=e.numberOfLabelLines(n.ticks),x=.5*d;if(u){n.longestLabelWidth=b;var k=Math.sin(e.toRadians(n.labelRotation))*n.longestLabelWidth+d*y+x*y;i.height=Math.min(n.maxHeight,i.height+k),n.ctx.font=f;var _=n.ctx.measureText(n.ticks[0]).width,w=n.ctx.measureText(n.ticks[n.ticks.length-1]).width,S=Math.cos(e.toRadians(n.labelRotation)),M=Math.sin(e.toRadians(n.labelRotation));n.paddingLeft=0!==n.labelRotation?S*_+3:_/2+3,n.paddingRight=0!==n.labelRotation?M*(d/2)+3:w/2+3}else{var D=n.maxWidth-i.width,C=o.mirror;C?b=0:b+=n.options.ticks.padding,D>b?i.width+=b:i.width=n.maxWidth,n.paddingTop=d/2,n.paddingBottom=d/2}}n.margins&&(n.paddingLeft=Math.max(n.paddingLeft-n.margins.left,0),n.paddingTop=Math.max(n.paddingTop-n.margins.top,0),n.paddingRight=Math.max(n.paddingRight-n.margins.right,0),n.paddingBottom=Math.max(n.paddingBottom-n.margins.bottom,0)),n.width=i.width,n.height=i.height},afterFit:function(){e.callCallback(this.options.afterFit,[this])},isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},isFullWidth:function(){return this.options.fullWidth},getRightValue:function n(t){return null===t||"undefined"==typeof t?NaN:"number"==typeof t&&isNaN(t)?NaN:"object"==typeof t?t instanceof Date||t.isValid?t:n(this.isHorizontal()?t.x:t.y):t},getLabelForIndex:e.noop,getPixelForValue:e.noop,getValueForPixel:e.noop,getPixelForTick:function(t,e){var n=this;if(n.isHorizontal()){var i=n.width-(n.paddingLeft+n.paddingRight),a=i/Math.max(n.ticks.length-(n.options.gridLines.offsetGridLines?0:1),1),r=a*t+n.paddingLeft;e&&(r+=a/2);var o=n.left+Math.round(r);return o+=n.isFullWidth()?n.margins.left:0}var s=n.height-(n.paddingTop+n.paddingBottom);return n.top+t*(s/(n.ticks.length-1))},getPixelForDecimal:function(t){var e=this;if(e.isHorizontal()){var n=e.width-(e.paddingLeft+e.paddingRight),i=n*t+e.paddingLeft,a=e.left+Math.round(i);return a+=e.isFullWidth()?e.margins.left:0}return e.top+t*e.height},getBasePixel:function(){var t=this,e=t.min,n=t.max;return t.getPixelForValue(t.beginAtZero?0:0>e&&0>n?n:e>0&&n>0?e:0)},draw:function(n){var i=this,a=i.options;if(a.display){var r,o,s=i.ctx,l=t.defaults.global,u=a.ticks,d=a.gridLines,c=a.scaleLabel,h=0!==i.labelRotation,f=u.autoSkip,g=i.isHorizontal();u.maxTicksLimit&&(o=u.maxTicksLimit);var p=e.getValueOrDefault(u.fontColor,l.defaultFontColor),m=e.getValueOrDefault(u.fontSize,l.defaultFontSize),v=e.getValueOrDefault(u.fontStyle,l.defaultFontStyle),b=e.getValueOrDefault(u.fontFamily,l.defaultFontFamily),y=e.fontString(m,v,b),x=d.tickMarkLength,k=e.getValueOrDefault(c.fontColor,l.defaultFontColor),_=e.getValueOrDefault(c.fontSize,l.defaultFontSize),w=e.getValueOrDefault(c.fontStyle,l.defaultFontStyle),S=e.getValueOrDefault(c.fontFamily,l.defaultFontFamily),M=e.fontString(_,w,S),D=e.toRadians(i.labelRotation),C=Math.cos(D),T=(Math.sin(D),i.longestLabelWidth*C);s.fillStyle=p;var P=[];if(g){if(r=!1,h&&(T/=2),(T+u.autoSkipPadding)*i.ticks.length>i.width-(i.paddingLeft+i.paddingRight)&&(r=1+Math.floor((T+u.autoSkipPadding)*i.ticks.length/(i.width-(i.paddingLeft+i.paddingRight)))),o&&i.ticks.length>o)for(;!r||i.ticks.length/(r||1)>o;)r||(r=1),r+=1;f||(r=!1)}var F="right"===a.position?i.left:i.right-x,A="right"===a.position?i.left+x:i.right,I="bottom"===a.position?i.top:i.bottom-x,O="bottom"===a.position?i.top+x:i.bottom;if(e.each(i.ticks,function(t,o){if(void 0!==t&&null!==t){var s=i.ticks.length===o+1,l=r>1&&o%r>0||o%r===0&&o+r>=i.ticks.length;if((!l||s)&&void 0!==t&&null!==t){var c,f;o===("undefined"!=typeof i.zeroLineIndex?i.zeroLineIndex:0)?(c=d.zeroLineWidth,f=d.zeroLineColor):(c=e.getValueAtIndexOrDefault(d.lineWidth,o),f=e.getValueAtIndexOrDefault(d.color,o));var p,m,v,b,y,k,_,w,S,M,C,T="middle";if(g){h||(T="top"===a.position?"bottom":"top"),C=h?"right":"center";var R=i.getPixelForTick(o)+e.aliasPixel(c);S=i.getPixelForTick(o,d.offsetGridLines)+u.labelOffset,M=h?i.top+12:"top"===a.position?i.bottom-x:i.top+x,p=v=y=_=R,m=I,b=O,k=n.top,w=n.bottom}else{"left"===a.position?u.mirror?(S=i.right+u.padding,C="left"):(S=i.right-u.padding,C="right"):u.mirror?(S=i.left-u.padding,C="right"):(S=i.left+u.padding,C="left");var W=i.getPixelForTick(o);W+=e.aliasPixel(c),M=i.getPixelForTick(o,d.offsetGridLines),p=F,v=A,y=n.left,_=n.right,m=b=k=w=W}P.push({tx1:p,ty1:m,tx2:v,ty2:b,x1:y,y1:k,x2:_,y2:w,labelX:S,labelY:M,glWidth:c,glColor:f,rotation:-1*D,label:t,textBaseline:T,textAlign:C})}}}),e.each(P,function(t){if(d.display&&(s.lineWidth=t.glWidth,s.strokeStyle=t.glColor,s.beginPath(),d.drawTicks&&(s.moveTo(t.tx1,t.ty1),s.lineTo(t.tx2,t.ty2)),d.drawOnChartArea&&(s.moveTo(t.x1,t.y1),s.lineTo(t.x2,t.y2)),s.stroke()),u.display){s.save(),s.translate(t.labelX,t.labelY),s.rotate(t.rotation),s.font=y,s.textBaseline=t.textBaseline,s.textAlign=t.textAlign;var n=t.label;if(e.isArray(n))for(var i=0,a=0;i<n.length;++i)s.fillText(""+n[i],0,a),a+=1.5*m;else s.fillText(n,0,0);s.restore()}}),c.display){var R,W,V=0;if(g)R=i.left+(i.right-i.left)/2,W="bottom"===a.position?i.bottom-_/2:i.top+_/2;else{var L="left"===a.position;R=L?i.left+_/2:i.right-_/2,W=i.top+(i.bottom-i.top)/2,V=L?-.5*Math.PI:.5*Math.PI}s.save(),s.translate(R,W),s.rotate(V),s.textAlign="center",s.textBaseline="middle",s.fillStyle=k,s.font=M,s.fillText(c.labelString,0,0),s.restore()}if(d.drawBorder){s.lineWidth=e.getValueAtIndexOrDefault(d.lineWidth,0),s.strokeStyle=e.getValueAtIndexOrDefault(d.color,0);var Y=i.left,B=i.right,z=i.top,H=i.bottom,N=e.aliasPixel(s.lineWidth);g?(z=H="top"===a.position?i.bottom:i.top,z+=N,H+=N):(Y=B="left"===a.position?i.right:i.left,Y+=N,B+=N),s.beginPath(),s.moveTo(Y,z),s.lineTo(B,H),s.stroke()}}}})}},{}],31:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.scaleService={constructors:{},defaults:{},registerScaleType:function(t,n,i){this.constructors[t]=n,this.defaults[t]=e.clone(i)},getScaleConstructor:function(t){return this.constructors.hasOwnProperty(t)?this.constructors[t]:void 0},getScaleDefaults:function(n){return this.defaults.hasOwnProperty(n)?e.scaleMerge(t.defaults.scale,this.defaults[n]):{}},updateScaleDefaults:function(t,n){var i=this.defaults;i.hasOwnProperty(t)&&(i[t]=e.extend(i[t],n))},addScalesToLayout:function(n){e.each(n.scales,function(e){t.layoutService.addBox(n,e)})}}}},{}],32:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.global.title={display:!1,position:"top",fullWidth:!0,fontStyle:"bold",padding:10,text:""};var n=e.noop;t.Title=t.Element.extend({initialize:function(n){var i=this;e.extend(i,n),i.options=e.configMerge(t.defaults.global.title,n.options),i.legendHitBoxes=[]},beforeUpdate:function(){var n=this.chart.options;n&&n.title&&(this.options=e.configMerge(t.defaults.global.title,n.title))},update:function(t,e,n){var i=this;return i.beforeUpdate(),i.maxWidth=t,i.maxHeight=e,i.margins=n,i.beforeSetDimensions(),i.setDimensions(),i.afterSetDimensions(),i.beforeBuildLabels(),i.buildLabels(),i.afterBuildLabels(),i.beforeFit(),i.fit(),i.afterFit(),i.afterUpdate(),i.minSize},afterUpdate:n,beforeSetDimensions:n,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:n,beforeBuildLabels:n,buildLabels:n,afterBuildLabels:n,beforeFit:n,fit:function(){var n=this,i=(n.ctx,e.getValueOrDefault),a=n.options,r=t.defaults.global,o=a.display,s=i(a.fontSize,r.defaultFontSize),l=n.minSize;n.isHorizontal()?(l.width=n.maxWidth,l.height=o?s+2*a.padding:0):(l.width=o?s+2*a.padding:0,l.height=n.maxHeight),n.width=l.width,n.height=l.height},afterFit:n,isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},draw:function(){var n=this,i=n.ctx,a=e.getValueOrDefault,r=n.options,o=t.defaults.global;if(r.display){var s,l,u=a(r.fontSize,o.defaultFontSize),d=a(r.fontStyle,o.defaultFontStyle),c=a(r.fontFamily,o.defaultFontFamily),h=e.fontString(u,d,c),f=0,g=n.top,p=n.left,m=n.bottom,v=n.right;i.fillStyle=a(r.fontColor,o.defaultFontColor),i.font=h,n.isHorizontal()?(s=p+(v-p)/2,l=g+(m-g)/2):(s="left"===r.position?p+u/2:v-u/2,l=g+(m-g)/2,f=Math.PI*("left"===r.position?-.5:.5)),i.save(),i.translate(s,l),i.rotate(f),i.textAlign="center",i.textBaseline="middle",i.fillText(r.text,0,0),i.restore()}}}),t.plugins.register({beforeInit:function(e){var n=e.options,i=n.title;i&&(e.titleBlock=new t.Title({ctx:e.chart.ctx,options:i,chart:e}),t.layoutService.addBox(e,e.titleBlock))}})}},{}],33:[function(t,e,n){"use strict";e.exports=function(t){function e(t,e){return e&&(a.isArray(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function n(t){if(!t.length)return!1;var e,n,i=[],a=[];for(e=0,n=t.length;n>e;++e){var r=t[e];if(r&&r.hasValue()){var o=r.tooltipPosition();i.push(o.x),a.push(o.y)}}var s=0,l=0;for(e=0,n-i.length;n>e;++e)s+=i[e],l+=a[e];return{x:Math.round(s/i.length),y:Math.round(l/i.length)}}function i(t){var e=t._xScale,n=t._yScale||t._scale,i=t._index,a=t._datasetIndex;return{xLabel:e?e.getLabelForIndex(i,a):"",yLabel:n?n.getLabelForIndex(i,a):"",index:i,datasetIndex:a}}var a=t.helpers;t.defaults.global.tooltips={enabled:!0,custom:null,mode:"single",backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleFontColor:"#fff",titleAlign:"left",bodySpacing:2,bodyFontColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerFontColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,yAlign:"center",xAlign:"center",caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",callbacks:{beforeTitle:a.noop,title:function(t,e){var n="",i=e.labels,a=i?i.length:0;if(t.length>0){var r=t[0];r.xLabel?n=r.xLabel:a>0&&r.index<a&&(n=i[r.index])}return n},afterTitle:a.noop,beforeBody:a.noop,beforeLabel:a.noop,label:function(t,e){var n=e.datasets[t.datasetIndex].label||"";return n+": "+t.yLabel},labelColor:function(t,e){var n=e.getDatasetMeta(t.datasetIndex),i=n.data[t.index],a=i._view;return{borderColor:a.borderColor,backgroundColor:a.backgroundColor}},afterLabel:a.noop,afterBody:a.noop,beforeFooter:a.noop,footer:a.noop,afterFooter:a.noop}},t.Tooltip=t.Element.extend({initialize:function(){var e=this,n=t.defaults.global,i=e._options,r=a.getValueOrDefault;a.extend(e,{_model:{xPadding:i.xPadding,yPadding:i.yPadding,xAlign:i.yAlign,yAlign:i.xAlign,bodyFontColor:i.bodyFontColor,_bodyFontFamily:r(i.bodyFontFamily,n.defaultFontFamily),_bodyFontStyle:r(i.bodyFontStyle,n.defaultFontStyle),_bodyAlign:i.bodyAlign,bodyFontSize:r(i.bodyFontSize,n.defaultFontSize),bodySpacing:i.bodySpacing,titleFontColor:i.titleFontColor,_titleFontFamily:r(i.titleFontFamily,n.defaultFontFamily),_titleFontStyle:r(i.titleFontStyle,n.defaultFontStyle),titleFontSize:r(i.titleFontSize,n.defaultFontSize),_titleAlign:i.titleAlign,titleSpacing:i.titleSpacing,titleMarginBottom:i.titleMarginBottom,footerFontColor:i.footerFontColor,_footerFontFamily:r(i.footerFontFamily,n.defaultFontFamily),_footerFontStyle:r(i.footerFontStyle,n.defaultFontStyle),footerFontSize:r(i.footerFontSize,n.defaultFontSize),_footerAlign:i.footerAlign,footerSpacing:i.footerSpacing,footerMarginTop:i.footerMarginTop,caretSize:i.caretSize,cornerRadius:i.cornerRadius,backgroundColor:i.backgroundColor,opacity:0,legendColorBackground:i.multiKeyBackground}})},getTitle:function(){var t=this,n=t._options,i=n.callbacks,a=i.beforeTitle.apply(t,arguments),r=i.title.apply(t,arguments),o=i.afterTitle.apply(t,arguments),s=[];return s=e(s,a),s=e(s,r),s=e(s,o)},getBeforeBody:function(){var t=this._options.callbacks.beforeBody.apply(this,arguments);return a.isArray(t)?t:void 0!==t?[t]:[]},getBody:function(t,n){var i=this,r=i._options.callbacks,o=[];return a.each(t,function(t){var a={before:[],lines:[],after:[]};e(a.before,r.beforeLabel.call(i,t,n)),e(a.lines,r.label.call(i,t,n)),e(a.after,r.afterLabel.call(i,t,n)),o.push(a)}),o},getAfterBody:function(){var t=this._options.callbacks.afterBody.apply(this,arguments);return a.isArray(t)?t:void 0!==t?[t]:[]},getFooter:function(){var t=this,n=t._options.callbacks,i=n.beforeFooter.apply(t,arguments),a=n.footer.apply(t,arguments),r=n.afterFooter.apply(t,arguments),o=[];return o=e(o,i),o=e(o,a),o=e(o,r)},update:function(t){var e,r,o=this,s=o._options,l=o._model,u=o._active,d=o._data,c=o._chartInstance;if(u.length){l.opacity=1;var h=[],f=n(u),g=[];for(e=0,r=u.length;r>e;++e)g.push(i(u[e]));s.itemSort&&(g=g.sort(s.itemSort)),u.length>1&&a.each(g,function(t){h.push(s.callbacks.labelColor.call(o,t,c))}),a.extend(l,{title:o.getTitle(g,d),beforeBody:o.getBeforeBody(g,d),body:o.getBody(g,d),afterBody:o.getAfterBody(g,d),footer:o.getFooter(g,d),x:Math.round(f.x),y:Math.round(f.y),caretPadding:a.getValueOrDefault(f.padding,2),labelColors:h});var p=o.getTooltipSize(l);o.determineAlignment(p),a.extend(l,o.getBackgroundPoint(l,p))}else o._model.opacity=0;return t&&s.custom&&s.custom.call(o,l),o},getTooltipSize:function(t){var e=this._chart.ctx,n={height:2*t.yPadding,width:0},i=t.body,r=i.reduce(function(t,e){return t+e.before.length+e.lines.length+e.after.length},0);r+=t.beforeBody.length+t.afterBody.length;var o=t.title.length,s=t.footer.length,l=t.titleFontSize,u=t.bodyFontSize,d=t.footerFontSize;n.height+=o*l,n.height+=(o-1)*t.titleSpacing,n.height+=o?t.titleMarginBottom:0,n.height+=r*u,n.height+=r?(r-1)*t.bodySpacing:0,n.height+=s?t.footerMarginTop:0,n.height+=s*d,n.height+=s?(s-1)*t.footerSpacing:0;var c=0,h=function(t){n.width=Math.max(n.width,e.measureText(t).width+c)};return e.font=a.fontString(l,t._titleFontStyle,t._titleFontFamily),a.each(t.title,h),e.font=a.fontString(u,t._bodyFontStyle,t._bodyFontFamily),a.each(t.beforeBody.concat(t.afterBody),h),c=i.length>1?u+2:0,a.each(i,function(t){a.each(t.before,h),a.each(t.lines,h),a.each(t.after,h)}),c=0,e.font=a.fontString(d,t._footerFontStyle,t._footerFontFamily),a.each(t.footer,h),n.width+=2*t.xPadding,n},determineAlignment:function(t){var e=this,n=e._model,i=e._chart,a=e._chartInstance.chartArea;n.y<t.height?n.yAlign="top":n.y>i.height-t.height&&(n.yAlign="bottom");var r,o,s,l,u,d=(a.left+a.right)/2,c=(a.top+a.bottom)/2;"center"===n.yAlign?(r=function(t){return d>=t},o=function(t){return t>d}):(r=function(e){return e<=t.width/2},o=function(e){return e>=i.width-t.width/2}),s=function(e){return e+t.width>i.width},l=function(e){return e-t.width<0},u=function(t){return c>=t?"top":"bottom"},r(n.x)?(n.xAlign="left",s(n.x)&&(n.xAlign="center",n.yAlign=u(n.y))):o(n.x)&&(n.xAlign="right",l(n.x)&&(n.xAlign="center",n.yAlign=u(n.y)))},getBackgroundPoint:function(t,e){var n={x:t.x,y:t.y},i=t.caretSize,a=t.caretPadding,r=t.cornerRadius,o=t.xAlign,s=t.yAlign,l=i+a,u=r+a;return"right"===o?n.x-=e.width:"center"===o&&(n.x-=e.width/2),"top"===s?n.y+=l:"bottom"===s?n.y-=e.height+l:n.y-=e.height/2,"center"===s?"left"===o?n.x+=l:"right"===o&&(n.x-=l):"left"===o?n.x-=u:"right"===o&&(n.x+=u),n},drawCaret:function(t,e,n,i){var r,o,s,l,u,d,c=this._view,h=this._chart.ctx,f=c.caretSize,g=c.cornerRadius,p=c.xAlign,m=c.yAlign,v=t.x,b=t.y,y=e.width,x=e.height;"center"===m?("left"===p?(r=v,o=r-f,s=r):(r=v+y,o=r+f,s=r),u=b+x/2,l=u-f,d=u+f):("left"===p?(r=v+g,o=r+f,s=o+f):"right"===p?(r=v+y-g,o=r-f,s=o-f):(o=v+y/2,r=o-f,s=o+f),"top"===m?(l=b,u=l-f,d=l):(l=b+x,u=l+f,d=l));var k=a.color(c.backgroundColor);h.fillStyle=k.alpha(n*k.alpha()).rgbString(),h.beginPath(),h.moveTo(r,l),h.lineTo(o,u),h.lineTo(s,d),h.closePath(),h.fill()},drawTitle:function(t,e,n,i){var r=e.title;if(r.length){n.textAlign=e._titleAlign,n.textBaseline="top";var o=e.titleFontSize,s=e.titleSpacing,l=a.color(e.titleFontColor);n.fillStyle=l.alpha(i*l.alpha()).rgbString(),n.font=a.fontString(o,e._titleFontStyle,e._titleFontFamily);var u,d;for(u=0,d=r.length;d>u;++u)n.fillText(r[u],t.x,t.y),t.y+=o+s,u+1===r.length&&(t.y+=e.titleMarginBottom-s)}},drawBody:function(t,e,n,i){var r=e.bodyFontSize,o=e.bodySpacing,s=e.body;n.textAlign=e._bodyAlign,n.textBaseline="top";var l=a.color(e.bodyFontColor),u=l.alpha(i*l.alpha()).rgbString();n.fillStyle=u,n.font=a.fontString(r,e._bodyFontStyle,e._bodyFontFamily);var d=0,c=function(e){n.fillText(e,t.x+d,t.y),t.y+=r+o};a.each(e.beforeBody,c);var h=s.length>1;d=h?r+2:0,a.each(s,function(o,s){a.each(o.before,c),a.each(o.lines,function(o){h&&(n.fillStyle=a.color(e.legendColorBackground).alpha(i).rgbaString(),n.fillRect(t.x,t.y,r,r),n.strokeStyle=a.color(e.labelColors[s].borderColor).alpha(i).rgbaString(),n.strokeRect(t.x,t.y,r,r),n.fillStyle=a.color(e.labelColors[s].backgroundColor).alpha(i).rgbaString(),n.fillRect(t.x+1,t.y+1,r-2,r-2),n.fillStyle=u),c(o)}),a.each(o.after,c)}),d=0,a.each(e.afterBody,c),t.y-=o},drawFooter:function(t,e,n,i){var r=e.footer;if(r.length){t.y+=e.footerMarginTop,n.textAlign=e._footerAlign,n.textBaseline="top";var o=a.color(e.footerFontColor);n.fillStyle=o.alpha(i*o.alpha()).rgbString(),n.font=a.fontString(e.footerFontSize,e._footerFontStyle,e._footerFontFamily),a.each(r,function(i){n.fillText(i,t.x,t.y),t.y+=e.footerFontSize+e.footerSpacing})}},draw:function(){var t=this._chart.ctx,e=this._view;if(0!==e.opacity){var n=this.getTooltipSize(e),i={x:e.x,y:e.y},r=Math.abs(e.opacity<.001)?0:e.opacity;if(this._options.enabled){var o=a.color(e.backgroundColor);t.fillStyle=o.alpha(r*o.alpha()).rgbString(),a.drawRoundedRectangle(t,i.x,i.y,n.width,n.height,e.cornerRadius),t.fill(),this.drawCaret(i,n,r,e.caretPadding),i.x+=e.xPadding,i.y+=e.yPadding,this.drawTitle(i,e,t,r),this.drawBody(i,e,t,r),this.drawFooter(i,e,t,r)}}}})}},{}],34:[function(t,e,n){"use strict";e.exports=function(t,e){var n=t.helpers,i=t.defaults.global;i.elements.arc={backgroundColor:i.defaultColor,borderColor:"#fff",borderWidth:2},t.elements.Arc=t.Element.extend({inLabelRange:function(t){var e=this._view;return e?Math.pow(t-e.x,2)<Math.pow(e.radius+e.hoverRadius,2):!1},inRange:function(t,e){var i=this._view;if(i){for(var a=n.getAngleFromPoint(i,{x:t,y:e}),r=a.angle,o=a.distance,s=i.startAngle,l=i.endAngle;s>l;)l+=2*Math.PI;for(;r>l;)r-=2*Math.PI;for(;s>r;)r+=2*Math.PI;var u=r>=s&&l>=r,d=o>=i.innerRadius&&o<=i.outerRadius;return u&&d}return!1},tooltipPosition:function(){var t=this._view,e=t.startAngle+(t.endAngle-t.startAngle)/2,n=(t.outerRadius-t.innerRadius)/2+t.innerRadius;return{x:t.x+Math.cos(e)*n,y:t.y+Math.sin(e)*n}},draw:function(){var t=this._chart.ctx,e=this._view,n=e.startAngle,i=e.endAngle;t.beginPath(),t.arc(e.x,e.y,e.outerRadius,n,i),t.arc(e.x,e.y,e.innerRadius,i,n,!0),t.closePath(),t.strokeStyle=e.borderColor,t.lineWidth=e.borderWidth,t.fillStyle=e.backgroundColor,t.fill(),t.lineJoin="bevel",e.borderWidth&&t.stroke()}})}},{}],35:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n=t.defaults.global;t.defaults.global.elements.line={tension:.4,backgroundColor:n.defaultColor,borderWidth:3,borderColor:n.defaultColor,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",fill:!0},t.elements.Line=t.Element.extend({lineToNextPoint:function(t,e,n,i,a){var r=this,o=r._chart.ctx,s=r._view?r._view.spanGaps:!1;e._view.skip&&!s?i.call(r,t,e,n):t._view.skip&&!s?a.call(r,t,e,n):0===e._view.tension?o.lineTo(e._view.x,e._view.y):o.bezierCurveTo(t._view.controlPointNextX,t._view.controlPointNextY,e._view.controlPointPreviousX,e._view.controlPointPreviousY,e._view.x,e._view.y)},draw:function(){function t(t){o._view.skip||s._view.skip?t&&r.lineTo(i._view.scaleZero.x,i._view.scaleZero.y):r.bezierCurveTo(s._view.controlPointNextX,s._view.controlPointNextY,o._view.controlPointPreviousX,o._view.controlPointPreviousY,o._view.x,o._view.y)}var i=this,a=i._view,r=i._chart.ctx,o=i._children[0],s=i._children[i._children.length-1];
r.save(),i._children.length>0&&a.fill&&(r.beginPath(),e.each(i._children,function(t,n){var o=e.previousItem(i._children,n),s=e.nextItem(i._children,n);0===n?(i._loop?r.moveTo(a.scaleZero.x,a.scaleZero.y):r.moveTo(t._view.x,a.scaleZero),t._view.skip?i._loop||r.moveTo(s._view.x,i._view.scaleZero):r.lineTo(t._view.x,t._view.y)):i.lineToNextPoint(o,t,s,function(t,e,n){i._loop?r.lineTo(i._view.scaleZero.x,i._view.scaleZero.y):(r.lineTo(t._view.x,i._view.scaleZero),r.moveTo(n._view.x,i._view.scaleZero))},function(t,e){r.lineTo(e._view.x,e._view.y)})},i),i._loop?t(!0):(r.lineTo(i._children[i._children.length-1]._view.x,a.scaleZero),r.lineTo(i._children[0]._view.x,a.scaleZero)),r.fillStyle=a.backgroundColor||n.defaultColor,r.closePath(),r.fill());var l=n.elements.line;r.lineCap=a.borderCapStyle||l.borderCapStyle,r.setLineDash&&r.setLineDash(a.borderDash||l.borderDash),r.lineDashOffset=a.borderDashOffset||l.borderDashOffset,r.lineJoin=a.borderJoinStyle||l.borderJoinStyle,r.lineWidth=a.borderWidth||l.borderWidth,r.strokeStyle=a.borderColor||n.defaultColor,r.beginPath(),e.each(i._children,function(t,n){var a=e.previousItem(i._children,n),o=e.nextItem(i._children,n);0===n?r.moveTo(t._view.x,t._view.y):i.lineToNextPoint(a,t,o,function(t,e,n){r.moveTo(n._view.x,n._view.y)},function(t,e){r.moveTo(e._view.x,e._view.y)})},i),i._loop&&i._children.length>0&&t(),r.stroke(),r.restore()}})}},{}],36:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n=t.defaults.global,i=n.defaultColor;n.elements.point={radius:3,pointStyle:"circle",backgroundColor:i,borderWidth:1,borderColor:i,hitRadius:1,hoverRadius:4,hoverBorderWidth:1},t.elements.Point=t.Element.extend({inRange:function(t,e){var n=this._view;return n?Math.pow(t-n.x,2)+Math.pow(e-n.y,2)<Math.pow(n.hitRadius+n.radius,2):!1},inLabelRange:function(t){var e=this._view;return e?Math.pow(t-e.x,2)<Math.pow(e.radius+e.hitRadius,2):!1},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y,padding:t.radius+t.borderWidth}},draw:function(){var t,a,r,o,s,l,u=this._view,d=this._chart.ctx,c=u.pointStyle,h=u.radius,f=u.x,g=u.y;if(!u.skip){if("object"==typeof c&&(t=c.toString(),"[object HTMLImageElement]"===t||"[object HTMLCanvasElement]"===t))return void d.drawImage(c,f-c.width/2,g-c.height/2);if(!(isNaN(h)||0>=h)){switch(d.strokeStyle=u.borderColor||i,d.lineWidth=e.getValueOrDefault(u.borderWidth,n.elements.point.borderWidth),d.fillStyle=u.backgroundColor||i,c){default:d.beginPath(),d.arc(f,g,h,0,2*Math.PI),d.closePath(),d.fill();break;case"triangle":d.beginPath(),a=3*h/Math.sqrt(3),s=a*Math.sqrt(3)/2,d.moveTo(f-a/2,g+s/3),d.lineTo(f+a/2,g+s/3),d.lineTo(f,g-2*s/3),d.closePath(),d.fill();break;case"rect":l=1/Math.SQRT2*h,d.fillRect(f-l,g-l,2*l,2*l),d.strokeRect(f-l,g-l,2*l,2*l);break;case"rectRot":l=1/Math.SQRT2*h,d.beginPath(),d.moveTo(f-l,g),d.lineTo(f,g+l),d.lineTo(f+l,g),d.lineTo(f,g-l),d.closePath(),d.fill();break;case"cross":d.beginPath(),d.moveTo(f,g+h),d.lineTo(f,g-h),d.moveTo(f-h,g),d.lineTo(f+h,g),d.closePath();break;case"crossRot":d.beginPath(),r=Math.cos(Math.PI/4)*h,o=Math.sin(Math.PI/4)*h,d.moveTo(f-r,g-o),d.lineTo(f+r,g+o),d.moveTo(f-r,g+o),d.lineTo(f+r,g-o),d.closePath();break;case"star":d.beginPath(),d.moveTo(f,g+h),d.lineTo(f,g-h),d.moveTo(f-h,g),d.lineTo(f+h,g),r=Math.cos(Math.PI/4)*h,o=Math.sin(Math.PI/4)*h,d.moveTo(f-r,g-o),d.lineTo(f+r,g+o),d.moveTo(f-r,g+o),d.lineTo(f+r,g-o),d.closePath();break;case"line":d.beginPath(),d.moveTo(f-h,g),d.lineTo(f+h,g),d.closePath();break;case"dash":d.beginPath(),d.moveTo(f,g),d.lineTo(f+h,g),d.closePath()}d.stroke()}}}})}},{}],37:[function(t,e,n){"use strict";e.exports=function(t){var e=(t.helpers,t.defaults.global);e.elements.rectangle={backgroundColor:e.defaultColor,borderWidth:0,borderColor:e.defaultColor,borderSkipped:"bottom"},t.elements.Rectangle=t.Element.extend({draw:function(){function t(t){return l[(d+t)%4]}var e=this._chart.ctx,n=this._view,i=n.width/2,a=n.x-i,r=n.x+i,o=n.base-(n.base-n.y),s=n.borderWidth/2;n.borderWidth&&(a+=s,r-=s,o+=s),e.beginPath(),e.fillStyle=n.backgroundColor,e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth;var l=[[a,n.base],[a,o],[r,o],[r,n.base]],u=["bottom","left","top","right"],d=u.indexOf(n.borderSkipped,0);-1===d&&(d=0),e.moveTo.apply(e,t(0));for(var c=1;4>c;c++)e.lineTo.apply(e,t(c));e.fill(),n.borderWidth&&e.stroke()},height:function(){var t=this._view;return t.base-t.y},inRange:function(t,e){var n=this._view;return n?n.y<n.base?t>=n.x-n.width/2&&t<=n.x+n.width/2&&e>=n.y&&e<=n.base:t>=n.x-n.width/2&&t<=n.x+n.width/2&&e>=n.base&&e<=n.y:!1},inLabelRange:function(t){var e=this._view;return e?t>=e.x-e.width/2&&t<=e.x+e.width/2:!1},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y}}})}},{}],38:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n={position:"bottom"},i=t.Scale.extend({determineDataLimits:function(){var t=this;t.minIndex=0,t.maxIndex=t.chart.data.labels.length-1;var n;void 0!==t.options.ticks.min&&(n=e.indexOf(t.chart.data.labels,t.options.ticks.min),t.minIndex=-1!==n?n:t.minIndex),void 0!==t.options.ticks.max&&(n=e.indexOf(t.chart.data.labels,t.options.ticks.max),t.maxIndex=-1!==n?n:t.maxIndex),t.min=t.chart.data.labels[t.minIndex],t.max=t.chart.data.labels[t.maxIndex]},buildTicks:function(t){var e=this;e.ticks=0===e.minIndex&&e.maxIndex===e.chart.data.labels.length-1?e.chart.data.labels:e.chart.data.labels.slice(e.minIndex,e.maxIndex+1)},getLabelForIndex:function(t,e){return this.ticks[t]},getPixelForValue:function(t,e,n,i){var a=this,r=Math.max(a.maxIndex+1-a.minIndex-(a.options.gridLines.offsetGridLines?0:1),1);if(a.isHorizontal()){var o=a.width-(a.paddingLeft+a.paddingRight),s=o/r,l=s*(e-a.minIndex)+a.paddingLeft;return a.options.gridLines.offsetGridLines&&i&&(l+=s/2),a.left+Math.round(l)}var u=a.height-(a.paddingTop+a.paddingBottom),d=u/r,c=d*(e-a.minIndex)+a.paddingTop;return a.options.gridLines.offsetGridLines&&i&&(c+=d/2),a.top+Math.round(c)},getPixelForTick:function(t,e){return this.getPixelForValue(this.ticks[t],t+this.minIndex,null,e)},getValueForPixel:function(t){var e,n=this,i=Math.max(n.ticks.length-(n.options.gridLines.offsetGridLines?0:1),1),a=n.isHorizontal(),r=a?n.width-(n.paddingLeft+n.paddingRight):n.height-(n.paddingTop+n.paddingBottom),o=r/i;return n.options.gridLines.offsetGridLines&&(t-=o/2),t-=a?n.paddingLeft:n.paddingTop,e=0>=t?0:Math.round(t/o)}});t.scaleService.registerScaleType("category",i,n)}},{}],39:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n={position:"left",ticks:{callback:function(t,n,i){var a=i.length>3?i[2]-i[1]:i[1]-i[0];Math.abs(a)>1&&t!==Math.floor(t)&&(a=t-Math.floor(t));var r=e.log10(Math.abs(a)),o="";if(0!==t){var s=-1*Math.floor(r);s=Math.max(Math.min(s,20),0),o=t.toFixed(s)}else o="0";return o}}},i=t.LinearScaleBase.extend({determineDataLimits:function(){function t(t){return s?t.xAxisID===n.id:t.yAxisID===n.id}var n=this,i=n.options,a=(i.ticks,n.chart),r=a.data,o=r.datasets,s=n.isHorizontal();if(n.min=null,n.max=null,i.stacked){var l={},u=!1,d=!1;e.each(o,function(r,o){var s=a.getDatasetMeta(o);void 0===l[s.type]&&(l[s.type]={positiveValues:[],negativeValues:[]});var c=l[s.type].positiveValues,h=l[s.type].negativeValues;a.isDatasetVisible(o)&&t(s)&&e.each(r.data,function(t,e){var a=+n.getRightValue(t);isNaN(a)||s.data[e].hidden||(c[e]=c[e]||0,h[e]=h[e]||0,i.relativePoints?c[e]=100:0>a?(d=!0,h[e]+=a):(u=!0,c[e]+=a))})}),e.each(l,function(t){var i=t.positiveValues.concat(t.negativeValues),a=e.min(i),r=e.max(i);n.min=null===n.min?a:Math.min(n.min,a),n.max=null===n.max?r:Math.max(n.max,r)})}else e.each(o,function(i,r){var o=a.getDatasetMeta(r);a.isDatasetVisible(r)&&t(o)&&e.each(i.data,function(t,e){var i=+n.getRightValue(t);isNaN(i)||o.data[e].hidden||(null===n.min?n.min=i:i<n.min&&(n.min=i),null===n.max?n.max=i:i>n.max&&(n.max=i))})});this.handleTickRangeOptions()},getTickLimit:function(){var n,i=this,a=i.options.ticks;if(i.isHorizontal())n=Math.min(a.maxTicksLimit?a.maxTicksLimit:11,Math.ceil(i.width/50));else{var r=e.getValueOrDefault(a.fontSize,t.defaults.global.defaultFontSize);n=Math.min(a.maxTicksLimit?a.maxTicksLimit:11,Math.ceil(i.height/(2*r)))}return n},handleDirectionalChanges:function(){this.isHorizontal()||this.ticks.reverse()},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForValue:function(t,e,n,i){var a,r,o=this,s=o.paddingLeft,l=o.paddingBottom,u=o.start,d=+o.getRightValue(t),c=o.end-u;return o.isHorizontal()?(r=o.width-(s+o.paddingRight),a=o.left+r/c*(d-u),Math.round(a+s)):(r=o.height-(o.paddingTop+l),a=o.bottom-l-r/c*(d-u),Math.round(a))},getValueForPixel:function(t){var e=this,n=e.isHorizontal(),i=e.paddingLeft,a=e.paddingBottom,r=n?e.width-(i+e.paddingRight):e.height-(e.paddingTop+a),o=(n?t-e.left-i:e.bottom-a-t)/r;return e.start+(e.end-e.start)*o},getPixelForTick:function(t,e){return this.getPixelForValue(this.ticksAsNumbers[t],null,null,e)}});t.scaleService.registerScaleType("linear",i,n)}},{}],40:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n=e.noop;t.LinearScaleBase=t.Scale.extend({handleTickRangeOptions:function(){var t=this,n=t.options,i=n.ticks;if(i.beginAtZero){var a=e.sign(t.min),r=e.sign(t.max);0>a&&0>r?t.max=0:a>0&&r>0&&(t.min=0)}void 0!==i.min?t.min=i.min:void 0!==i.suggestedMin&&(t.min=Math.min(t.min,i.suggestedMin)),void 0!==i.max?t.max=i.max:void 0!==i.suggestedMax&&(t.max=Math.max(t.max,i.suggestedMax)),t.min===t.max&&(t.max++,i.beginAtZero||t.min--)},getTickLimit:n,handleDirectionalChanges:n,buildTicks:function(){var t=this,n=t.options,i=n.ticks,a=e.getValueOrDefault,r=(t.isHorizontal(),t.ticks=[]),o=t.getTickLimit();o=Math.max(2,o);var s,l=i.fixedStepSize&&i.fixedStepSize>0||i.stepSize&&i.stepSize>0;if(l)s=a(i.fixedStepSize,i.stepSize);else{var u=e.niceNum(t.max-t.min,!1);s=e.niceNum(u/(o-1),!0)}var d=Math.floor(t.min/s)*s,c=Math.ceil(t.max/s)*s,h=(c-d)/s;h=e.almostEquals(h,Math.round(h),s/1e3)?Math.round(h):Math.ceil(h),r.push(void 0!==i.min?i.min:d);for(var f=1;h>f;++f)r.push(d+f*s);r.push(void 0!==i.max?i.max:c),t.handleDirectionalChanges(),t.max=e.max(r),t.min=e.min(r),i.reverse?(r.reverse(),t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max)},convertTicksToLabels:function(){var e=this;e.ticksAsNumbers=e.ticks.slice(),e.zeroLineIndex=e.ticks.indexOf(0),t.Scale.prototype.convertTicksToLabels.call(e)}})}},{}],41:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n={position:"left",ticks:{callback:function(t,n,i){var a=t/Math.pow(10,Math.floor(e.log10(t)));return 1===a||2===a||5===a||0===n||n===i.length-1?t.toExponential():""}}},i=t.Scale.extend({determineDataLimits:function(){function t(t){return u?t.xAxisID===n.id:t.yAxisID===n.id}var n=this,i=n.options,a=i.ticks,r=n.chart,o=r.data,s=o.datasets,l=e.getValueOrDefault,u=n.isHorizontal();if(n.min=null,n.max=null,i.stacked){var d={};e.each(s,function(a,o){var s=r.getDatasetMeta(o);r.isDatasetVisible(o)&&t(s)&&(void 0===d[s.type]&&(d[s.type]=[]),e.each(a.data,function(t,e){var a=d[s.type],r=+n.getRightValue(t);isNaN(r)||s.data[e].hidden||(a[e]=a[e]||0,i.relativePoints?a[e]=100:a[e]+=r)}))}),e.each(d,function(t){var i=e.min(t),a=e.max(t);n.min=null===n.min?i:Math.min(n.min,i),n.max=null===n.max?a:Math.max(n.max,a)})}else e.each(s,function(i,a){var o=r.getDatasetMeta(a);r.isDatasetVisible(a)&&t(o)&&e.each(i.data,function(t,e){var i=+n.getRightValue(t);isNaN(i)||o.data[e].hidden||(null===n.min?n.min=i:i<n.min&&(n.min=i),null===n.max?n.max=i:i>n.max&&(n.max=i))})});n.min=l(a.min,n.min),n.max=l(a.max,n.max),n.min===n.max&&(0!==n.min&&null!==n.min?(n.min=Math.pow(10,Math.floor(e.log10(n.min))-1),n.max=Math.pow(10,Math.floor(e.log10(n.max))+1)):(n.min=1,n.max=10))},buildTicks:function(){for(var t=this,n=t.options,i=n.ticks,a=e.getValueOrDefault,r=t.ticks=[],o=a(i.min,Math.pow(10,Math.floor(e.log10(t.min))));o<t.max;){r.push(o);var s=Math.floor(e.log10(o)),l=Math.floor(o/Math.pow(10,s))+1;10===l&&(l=1,++s),o=l*Math.pow(10,s)}var u=a(i.max,o);r.push(u),t.isHorizontal()||r.reverse(),t.max=e.max(r),t.min=e.min(r),i.reverse?(r.reverse(),t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max)},convertTicksToLabels:function(){this.tickValues=this.ticks.slice(),t.Scale.prototype.convertTicksToLabels.call(this)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForTick:function(t,e){return this.getPixelForValue(this.tickValues[t],null,null,e)},getPixelForValue:function(t,n,i,a){var r,o,s=this,l=s.start,u=+s.getRightValue(t),d=e.log10(s.end)-e.log10(l),c=s.paddingTop,h=s.paddingBottom,f=s.paddingLeft;return s.isHorizontal()?0===u?o=s.left+f:(r=s.width-(f+s.paddingRight),o=s.left+r/d*(e.log10(u)-e.log10(l)),o+=f):0===u?o=s.top+c:(r=s.height-(c+h),o=s.bottom-h-r/d*(e.log10(u)-e.log10(l))),o},getValueForPixel:function(t){var n,i,a=this,r=e.log10(a.end)-e.log10(a.start);return a.isHorizontal()?(i=a.width-(a.paddingLeft+a.paddingRight),n=a.start*Math.pow(10,(t-a.left-a.paddingLeft)*r/i)):(i=a.height-(a.paddingTop+a.paddingBottom),n=Math.pow(10,(a.bottom-a.paddingBottom-t)*r/i)/a.start),n}});t.scaleService.registerScaleType("logarithmic",i,n)}},{}],42:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n=t.defaults.global,i={display:!0,animate:!0,lineArc:!1,position:"chartArea",angleLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1},ticks:{showLabelBackdrop:!0,backdropColor:"rgba(255,255,255,0.75)",backdropPaddingY:2,backdropPaddingX:2},pointLabels:{fontSize:10,callback:function(t){return t}}},a=t.LinearScaleBase.extend({getValueCount:function(){return this.chart.data.labels.length},setDimensions:function(){var t=this,i=t.options,a=i.ticks;t.width=t.maxWidth,t.height=t.maxHeight,t.xCenter=Math.round(t.width/2),t.yCenter=Math.round(t.height/2);var r=e.min([t.height,t.width]),o=e.getValueOrDefault(a.fontSize,n.defaultFontSize);t.drawingArea=i.display?r/2-(o/2+a.backdropPaddingY):r/2},determineDataLimits:function(){var t=this,n=t.chart;t.min=null,t.max=null,e.each(n.data.datasets,function(i,a){if(n.isDatasetVisible(a)){var r=n.getDatasetMeta(a);e.each(i.data,function(e,n){var i=+t.getRightValue(e);isNaN(i)||r.data[n].hidden||(null===t.min?t.min=i:i<t.min&&(t.min=i),null===t.max?t.max=i:i>t.max&&(t.max=i))})}}),t.handleTickRangeOptions()},getTickLimit:function(){var t=this.options.ticks,i=e.getValueOrDefault(t.fontSize,n.defaultFontSize);return Math.min(t.maxTicksLimit?t.maxTicksLimit:11,Math.ceil(this.drawingArea/(1.5*i)))},convertTicksToLabels:function(){var e=this;t.LinearScaleBase.prototype.convertTicksToLabels.call(e),e.pointLabels=e.chart.data.labels.map(e.options.pointLabels.callback,e)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},fit:function(){var t,i,a,r,o,s,l,u,d,c,h,f,g=this.options.pointLabels,p=e.getValueOrDefault(g.fontSize,n.defaultFontSize),m=e.getValueOrDefault(g.fontStyle,n.defaultFontStyle),v=e.getValueOrDefault(g.fontFamily,n.defaultFontFamily),b=e.fontString(p,m,v),y=e.min([this.height/2-p-5,this.width/2]),x=this.width,k=0;for(this.ctx.font=b,i=0;i<this.getValueCount();i++)t=this.getPointPosition(i,y),a=this.ctx.measureText(this.pointLabels[i]?this.pointLabels[i]:"").width+5,0===i||i===this.getValueCount()/2?(r=a/2,t.x+r>x&&(x=t.x+r,o=i),t.x-r<k&&(k=t.x-r,l=i)):i<this.getValueCount()/2?t.x+a>x&&(x=t.x+a,o=i):i>this.getValueCount()/2&&t.x-a<k&&(k=t.x-a,l=i);d=k,c=Math.ceil(x-this.width),s=this.getIndexAngle(o),u=this.getIndexAngle(l),h=c/Math.sin(s+Math.PI/2),f=d/Math.sin(u+Math.PI/2),h=e.isNumber(h)?h:0,f=e.isNumber(f)?f:0,this.drawingArea=Math.round(y-(f+h)/2),this.setCenterPoint(f,h)},setCenterPoint:function(t,e){var n=this,i=n.width-e-n.drawingArea,a=t+n.drawingArea;n.xCenter=Math.round((a+i)/2+n.left),n.yCenter=Math.round(n.height/2+n.top)},getIndexAngle:function(t){var e=2*Math.PI/this.getValueCount();return t*e-Math.PI/2},getDistanceFromCenterForValue:function(t){var e=this;if(null===t)return 0;var n=e.drawingArea/(e.max-e.min);return e.options.reverse?(e.max-t)*n:(t-e.min)*n},getPointPosition:function(t,e){var n=this,i=n.getIndexAngle(t);return{x:Math.round(Math.cos(i)*e)+n.xCenter,y:Math.round(Math.sin(i)*e)+n.yCenter}},getPointPositionForValue:function(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))},getBasePosition:function(){var t=this,e=t.min,n=t.max;return t.getPointPositionForValue(0,t.beginAtZero?0:0>e&&0>n?n:e>0&&n>0?e:0)},draw:function(){var t=this,i=t.options,a=i.gridLines,r=i.ticks,o=i.angleLines,s=i.pointLabels,l=e.getValueOrDefault;if(i.display){var u=t.ctx,d=l(r.fontSize,n.defaultFontSize),c=l(r.fontStyle,n.defaultFontStyle),h=l(r.fontFamily,n.defaultFontFamily),f=e.fontString(d,c,h);if(e.each(t.ticks,function(o,s){if(s>0||i.reverse){var c=t.getDistanceFromCenterForValue(t.ticksAsNumbers[s]),h=t.yCenter-c;if(a.display&&0!==s)if(u.strokeStyle=e.getValueAtIndexOrDefault(a.color,s-1),u.lineWidth=e.getValueAtIndexOrDefault(a.lineWidth,s-1),i.lineArc)u.beginPath(),u.arc(t.xCenter,t.yCenter,c,0,2*Math.PI),u.closePath(),u.stroke();else{u.beginPath();for(var g=0;g<t.getValueCount();g++){var p=t.getPointPosition(g,c);0===g?u.moveTo(p.x,p.y):u.lineTo(p.x,p.y)}u.closePath(),u.stroke()}if(r.display){var m=l(r.fontColor,n.defaultFontColor);if(u.font=f,r.showLabelBackdrop){var v=u.measureText(o).width;u.fillStyle=r.backdropColor,u.fillRect(t.xCenter-v/2-r.backdropPaddingX,h-d/2-r.backdropPaddingY,v+2*r.backdropPaddingX,d+2*r.backdropPaddingY)}u.textAlign="center",u.textBaseline="middle",u.fillStyle=m,u.fillText(o,t.xCenter,h)}}}),!i.lineArc){u.lineWidth=o.lineWidth,u.strokeStyle=o.color;for(var g=t.getDistanceFromCenterForValue(i.reverse?t.min:t.max),p=l(s.fontSize,n.defaultFontSize),m=l(s.fontStyle,n.defaultFontStyle),v=l(s.fontFamily,n.defaultFontFamily),b=e.fontString(p,m,v),y=t.getValueCount()-1;y>=0;y--){if(o.display){var x=t.getPointPosition(y,g);u.beginPath(),u.moveTo(t.xCenter,t.yCenter),u.lineTo(x.x,x.y),u.stroke(),u.closePath()}var k=t.getPointPosition(y,g+5),_=l(s.fontColor,n.defaultFontColor);u.font=b,u.fillStyle=_;var w=t.pointLabels,S=w.length,M=w.length/2,D=M/2,C=D>y||y>S-D,T=y===D||y===S-D;0===y?u.textAlign="center":y===M?u.textAlign="center":M>y?u.textAlign="left":u.textAlign="right",T?u.textBaseline="middle":C?u.textBaseline="bottom":u.textBaseline="top",u.fillText(w[y]?w[y]:"",k.x,k.y)}}}}});t.scaleService.registerScaleType("radialLinear",a,i)}},{}],43:[function(t,e,n){"use strict";var i=t(6);i="function"==typeof i?i:window.moment,e.exports=function(t){var e=t.helpers,n={units:[{name:"millisecond",steps:[1,2,5,10,20,50,100,250,500]},{name:"second",steps:[1,2,5,10,30]},{name:"minute",steps:[1,2,5,10,30]},{name:"hour",steps:[1,2,3,6,12]},{name:"day",steps:[1,2,5]},{name:"week",maxStep:4},{name:"month",maxStep:3},{name:"quarter",maxStep:4},{name:"year",maxStep:!1}]},a={position:"bottom",time:{parser:!1,format:!1,unit:!1,round:!1,displayFormat:!1,isoWeekday:!1,displayFormats:{millisecond:"h:mm:ss.SSS a",second:"h:mm:ss a",minute:"h:mm:ss a",hour:"MMM D, hA",day:"ll",week:"ll",month:"MMM YYYY",quarter:"[Q]Q - YYYY",year:"YYYY"}},ticks:{autoSkip:!1}},r=t.Scale.extend({initialize:function(){if(!i)throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");t.Scale.prototype.initialize.call(this)},getLabelMoment:function(t,e){return this.labelMoments[t][e]},getMomentStartOf:function(t){var e=this;return"week"===e.options.time.unit&&e.options.time.isoWeekday!==!1?t.clone().startOf("isoWeek").isoWeekday(e.options.time.isoWeekday):t.clone().startOf(e.tickUnit)},determineDataLimits:function(){var t=this;t.labelMoments=[];var n=[];t.chart.data.labels&&t.chart.data.labels.length>0?(e.each(t.chart.data.labels,function(e,i){var a=t.parseTime(e);a.isValid()&&(t.options.time.round&&a.startOf(t.options.time.round),n.push(a))},t),t.firstTick=i.min.call(t,n),t.lastTick=i.max.call(t,n)):(t.firstTick=null,t.lastTick=null),e.each(t.chart.data.datasets,function(a,r){var o=[],s=t.chart.isDatasetVisible(r);"object"==typeof a.data[0]&&null!==a.data[0]?e.each(a.data,function(e,n){var a=t.parseTime(t.getRightValue(e));a.isValid()&&(t.options.time.round&&a.startOf(t.options.time.round),o.push(a),s&&(t.firstTick=null!==t.firstTick?i.min(t.firstTick,a):a,t.lastTick=null!==t.lastTick?i.max(t.lastTick,a):a))},t):o=n,t.labelMoments.push(o)},t),t.options.time.min&&(t.firstTick=t.parseTime(t.options.time.min)),t.options.time.max&&(t.lastTick=t.parseTime(t.options.time.max)),t.firstTick=(t.firstTick||i()).clone(),t.lastTick=(t.lastTick||i()).clone()},buildTicks:function(i){var a=this;a.ctx.save();var r=e.getValueOrDefault(a.options.ticks.fontSize,t.defaults.global.defaultFontSize),o=e.getValueOrDefault(a.options.ticks.fontStyle,t.defaults.global.defaultFontStyle),s=e.getValueOrDefault(a.options.ticks.fontFamily,t.defaults.global.defaultFontFamily),l=e.fontString(r,o,s);if(a.ctx.font=l,a.ticks=[],a.unitScale=1,a.scaleSizeInUnits=0,a.options.time.unit)a.tickUnit=a.options.time.unit||"day",a.displayFormat=a.options.time.displayFormats[a.tickUnit],a.scaleSizeInUnits=a.lastTick.diff(a.firstTick,a.tickUnit,!0),a.unitScale=e.getValueOrDefault(a.options.time.unitStepSize,1);else{var u=a.isHorizontal()?a.width-(a.paddingLeft+a.paddingRight):a.height-(a.paddingTop+a.paddingBottom),d=a.tickFormatFunction(a.firstTick,0,[]),c=a.ctx.measureText(d).width,h=Math.cos(e.toRadians(a.options.ticks.maxRotation)),f=Math.sin(e.toRadians(a.options.ticks.maxRotation));c=c*h+r*f;var g=u/c;a.tickUnit="millisecond",a.scaleSizeInUnits=a.lastTick.diff(a.firstTick,a.tickUnit,!0),a.displayFormat=a.options.time.displayFormats[a.tickUnit];for(var p=0,m=n.units[p];p<n.units.length;){if(a.unitScale=1,e.isArray(m.steps)&&Math.ceil(a.scaleSizeInUnits/g)<e.max(m.steps)){for(var v=0;v<m.steps.length;++v)if(m.steps[v]>=Math.ceil(a.scaleSizeInUnits/g)){a.unitScale=e.getValueOrDefault(a.options.time.unitStepSize,m.steps[v]);break}break}if(m.maxStep===!1||Math.ceil(a.scaleSizeInUnits/g)<m.maxStep){a.unitScale=e.getValueOrDefault(a.options.time.unitStepSize,Math.ceil(a.scaleSizeInUnits/g));break}++p,m=n.units[p],a.tickUnit=m.name;var b=a.firstTick.diff(a.getMomentStartOf(a.firstTick),a.tickUnit,!0),y=a.getMomentStartOf(a.lastTick.clone().add(1,a.tickUnit)).diff(a.lastTick,a.tickUnit,!0);a.scaleSizeInUnits=a.lastTick.diff(a.firstTick,a.tickUnit,!0)+b+y,a.displayFormat=a.options.time.displayFormats[m.name]}}var x;if(a.options.time.min?x=a.getMomentStartOf(a.firstTick):(a.firstTick=a.getMomentStartOf(a.firstTick),x=a.firstTick),!a.options.time.max){var k=a.getMomentStartOf(a.lastTick);0!==k.diff(a.lastTick,a.tickUnit,!0)&&(a.lastTick=a.getMomentStartOf(a.lastTick.add(1,a.tickUnit)))}a.smallestLabelSeparation=a.width,e.each(a.chart.data.datasets,function(t,e){for(var n=1;n<a.labelMoments[e].length;n++)a.smallestLabelSeparation=Math.min(a.smallestLabelSeparation,a.labelMoments[e][n].diff(a.labelMoments[e][n-1],a.tickUnit,!0))},a),a.options.time.displayFormat&&(a.displayFormat=a.options.time.displayFormat),a.ticks.push(a.firstTick.clone());for(var _=1;_<=a.scaleSizeInUnits;++_){var w=x.clone().add(_,a.tickUnit);if(a.options.time.max&&w.diff(a.lastTick,a.tickUnit,!0)>=0)break;_%a.unitScale===0&&a.ticks.push(w)}var S=a.ticks[a.ticks.length-1].diff(a.lastTick,a.tickUnit);(0!==S||0===a.scaleSizeInUnits)&&(a.options.time.max?(a.ticks.push(a.lastTick.clone()),a.scaleSizeInUnits=a.lastTick.diff(a.ticks[0],a.tickUnit,!0)):(a.ticks.push(a.lastTick.clone()),a.scaleSizeInUnits=a.lastTick.diff(a.firstTick,a.tickUnit,!0))),a.ctx.restore()},getLabelForIndex:function(t,e){var n=this,i=n.chart.data.labels&&t<n.chart.data.labels.length?n.chart.data.labels[t]:"";return"object"==typeof n.chart.data.datasets[e].data[0]&&(i=n.getRightValue(n.chart.data.datasets[e].data[t])),n.options.time.tooltipFormat&&(i=n.parseTime(i).format(n.options.time.tooltipFormat)),i},tickFormatFunction:function(t,n,i){var a=t.format(this.displayFormat),r=this.options.ticks,o=e.getValueOrDefault(r.callback,r.userCallback);return o?o(a,n,i):a},convertTicksToLabels:function(){var t=this;t.tickMoments=t.ticks,t.ticks=t.ticks.map(t.tickFormatFunction,t)},getPixelForValue:function(t,e,n,i){var a=this,r=t&&t.isValid&&t.isValid()?t:a.getLabelMoment(n,e);if(r){var o=r.diff(a.firstTick,a.tickUnit,!0),s=o/a.scaleSizeInUnits;if(a.isHorizontal()){var l=a.width-(a.paddingLeft+a.paddingRight),u=(l/Math.max(a.ticks.length-1,1),l*s+a.paddingLeft);return a.left+Math.round(u)}var d=a.height-(a.paddingTop+a.paddingBottom),c=(d/Math.max(a.ticks.length-1,1),d*s+a.paddingTop);return a.top+Math.round(c)}},getPixelForTick:function(t,e){return this.getPixelForValue(this.tickMoments[t],null,null,e)},getValueForPixel:function(t){var e=this,n=e.isHorizontal()?e.width-(e.paddingLeft+e.paddingRight):e.height-(e.paddingTop+e.paddingBottom),a=(t-(e.isHorizontal()?e.left+e.paddingLeft:e.top+e.paddingTop))/n;return a*=e.scaleSizeInUnits,e.firstTick.clone().add(i.duration(a,e.tickUnit).asSeconds(),"seconds")},parseTime:function(t){var e=this;return"string"==typeof e.options.time.parser?i(t,e.options.time.parser):"function"==typeof e.options.time.parser?e.options.time.parser(t):"function"==typeof t.getMonth||"number"==typeof t?i(t):t.isValid&&t.isValid()?t:"string"!=typeof e.options.time.format&&e.options.time.format.call?(console.warn("options.time.format is deprecated and replaced by options.time.parser. See http://nnnick.github.io/Chart.js/docs-v2/#scales-time-scale"),e.options.time.format(t)):i(t,e.options.time.format)}});t.scaleService.registerScaleType("time",r,a)}},{6:6}]},{},[7])(7)});
;
/*!
 * angular-chart.js - An angular.js wrapper for Chart.js
 * http://jtblin.github.io/angular-chart.js/
 * Version: 1.0.0-beta1
 *
 * Copyright 2016 Jerome Touffe-Blin
 * Released under the BSD-2-Clause license
 * https://github.com/jtblin/angular-chart.js/blob/master/LICENSE
 */
(function (factory) {
  'use strict';
  if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(
      typeof angular !== 'undefined' ? angular : require('angular'),
      typeof Chart !== 'undefined' ? Chart : require('chart.js'));
  }  else if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['angular', 'chart'], factory);
  } else {
    // Browser globals
    if (typeof angular === 'undefined' || typeof Chart === 'undefined') throw new Error('Chart.js library needs to included, ' +
      'see http://jtblin.github.io/angular-chart.js/');
    factory(angular, Chart);
  }
}(function (angular, Chart) {
  'use strict';

  Chart.defaults.global.multiTooltipTemplate = '<%if (datasetLabel){%><%=datasetLabel%>: <%}%><%= value %>';
  Chart.defaults.global.tooltips.mode = 'label';
  Chart.defaults.global.elements.line.borderWidth = 2;
  Chart.defaults.global.elements.rectangle.borderWidth = 2;
  Chart.defaults.global.legend.display = false;
  Chart.defaults.global.colors = [
    '#97BBCD', // blue
    '#DCDCDC', // light grey
    '#F7464A', // red
    '#46BFBD', // green
    '#FDB45C', // yellow
    '#949FB1', // grey
    '#4D5360'  // dark grey
  ];

  var useExcanvas = typeof window.G_vmlCanvasManager === 'object' &&
    window.G_vmlCanvasManager !== null &&
    typeof window.G_vmlCanvasManager.initElement === 'function';

  if (useExcanvas) Chart.defaults.global.animation = false;

  return angular.module('chart.js', [])
    .provider('ChartJs', ChartJsProvider)
    .factory('ChartJsFactory', ['ChartJs', '$timeout', ChartJsFactory])
    .directive('chartBase', ['ChartJsFactory', function (ChartJsFactory) { return new ChartJsFactory(); }])
    .directive('chartLine', ['ChartJsFactory', function (ChartJsFactory) { return new ChartJsFactory('line'); }])
    .directive('chartBar', ['ChartJsFactory', function (ChartJsFactory) { return new ChartJsFactory('bar'); }])
    .directive('chartHorizontalBar', ['ChartJsFactory', function (ChartJsFactory) { return new ChartJsFactory('horizontalBar'); }])
    .directive('chartRadar', ['ChartJsFactory', function (ChartJsFactory) { return new ChartJsFactory('radar'); }])
    .directive('chartDoughnut', ['ChartJsFactory', function (ChartJsFactory) { return new ChartJsFactory('doughnut'); }])
    .directive('chartPie', ['ChartJsFactory', function (ChartJsFactory) { return new ChartJsFactory('pie'); }])
    .directive('chartPolarArea', ['ChartJsFactory', function (ChartJsFactory) { return new ChartJsFactory('polarArea'); }])
    .directive('chartBubble', ['ChartJsFactory', function (ChartJsFactory) { return new ChartJsFactory('bubble'); }])
    .name;

  /**
   * Wrapper for chart.js
   * Allows configuring chart js using the provider
   *
   * angular.module('myModule', ['chart.js']).config(function(ChartJsProvider) {
   *   ChartJsProvider.setOptions({ responsive: false });
   *   ChartJsProvider.setOptions('Line', { responsive: true });
   * })))
   */
  function ChartJsProvider () {
    var options = { responsive: true };
    var ChartJs = {
      Chart: Chart,
      getOptions: function (type) {
        var typeOptions = type && options[type] || {};
        return angular.extend({}, options, typeOptions);
      }
    };

    /**
     * Allow to set global options during configuration
     */
    this.setOptions = function (type, customOptions) {
      // If no type was specified set option for the global object
      if (! customOptions) {
        customOptions = type;
        options = angular.extend(options, customOptions);
        return;
      }
      // Set options for the specific chart
      options[type] = angular.extend(options[type] || {}, customOptions);
    };

    this.$get = function () {
      return ChartJs;
    };
  }

  function ChartJsFactory (ChartJs, $timeout) {
    return function chart (type) {
      return {
        restrict: 'CA',
        scope: {
          chartGetColor: '=?',
          chartType: '=',
          chartData: '=?',
          chartLabels: '=?',
          chartOptions: '=?',
          chartSeries: '=?',
          chartColors: '=?',
          chartClick: '=?',
          chartHover: '=?',
          chartDatasetOverride: '=?'
        },
        link: function (scope, elem/*, attrs */) {
          if (useExcanvas) window.G_vmlCanvasManager.initElement(elem[0]);

          // Order of setting "watch" matter
          scope.$watch('chartData', watchData, true);
          scope.$watch('chartSeries', watchOther, true);
          scope.$watch('chartLabels', watchOther, true);
          scope.$watch('chartOptions', watchOther, true);
          scope.$watch('chartColors', watchOther, true);
          scope.$watch('chartDatasetOverride', watchOther, true);
          scope.$watch('chartType', watchType, false);

          scope.$on('$destroy', function () {
            destroyChart(scope);
          });

          scope.$on('$resize', function () {
            if (scope.chart) scope.chart.resize();
          });

          function watchData (newVal, oldVal) {
            if (! newVal || ! newVal.length || (Array.isArray(newVal[0]) && ! newVal[0].length)) {
              destroyChart(scope);
              return;
            }
            var chartType = type || scope.chartType;
            if (! chartType) return;

            if (scope.chart && canUpdateChart(newVal, oldVal))
              return updateChart(newVal, scope);

            createChart(chartType, scope, elem);
          }

          function watchOther (newVal, oldVal) {
            if (isEmpty(newVal)) return;
            if (angular.equals(newVal, oldVal)) return;
            var chartType = type || scope.chartType;
            if (! chartType) return;

            // chart.update() doesn't work for series and labels
            // so we have to re-create the chart entirely
            createChart(chartType, scope, elem);
          }

          function watchType (newVal, oldVal) {
            if (isEmpty(newVal)) return;
            if (angular.equals(newVal, oldVal)) return;
            createChart(newVal, scope, elem);
          }
        }
      };
    };

    function createChart (type, scope, elem) {
      var options = getChartOptions(type, scope);
      if (! hasData(scope) || ! canDisplay(type, scope, elem, options)) return;

      var cvs = elem[0];
      var ctx = cvs.getContext('2d');

      scope.chartGetColor = getChartColorFn(scope);
      var data = getChartData(type, scope);

      // Destroy old chart if it exists to avoid ghost charts issue
      // https://github.com/jtblin/angular-chart.js/issues/187
      destroyChart(scope);

      scope.chart = new ChartJs.Chart(ctx, {
        type: type,
        data: data,
        options: options
      });
      scope.$emit('chart-create', scope.chart);
      bindEvents(cvs, scope);
    }

    function canUpdateChart (newVal, oldVal) {
      if (newVal && oldVal && newVal.length && oldVal.length) {
        return Array.isArray(newVal[0]) ?
        newVal.length === oldVal.length && newVal.every(function (element, index) {
          return element.length === oldVal[index].length; }) :
          oldVal.reduce(sum, 0) > 0 ? newVal.length === oldVal.length : false;
      }
      return false;
    }

    function sum (carry, val) {
      return carry + val;
    }

    function getEventHandler (scope, action, triggerOnlyOnChange) {
      var lastState = null;
      return function (evt) {
        var atEvent = scope.chart.getElementsAtEvent || scope.chart.getPointsAtEvent;
        if (atEvent) {
          var activePoints = atEvent.call(scope.chart, evt);
          if (triggerOnlyOnChange === false || angular.equals(lastState, activePoints) === false) {
            lastState = activePoints;
            scope[action](activePoints, evt);
          }
        }
      };
    }

    function getColors (type, scope) {
      var colors = angular.copy(scope.chartColors ||
        ChartJs.getOptions(type).chartColors ||
        Chart.defaults.global.colors
      );
      var notEnoughColors = colors.length < scope.chartData.length;
      while (colors.length < scope.chartData.length) {
        colors.push(scope.chartGetColor());
      }
      // mutate colors in this case as we don't want
      // the colors to change on each refresh
      if (notEnoughColors) scope.chartColors = colors;
      return colors.map(convertColor);
    }

    function convertColor (color) {
      if (typeof color === 'object' && color !== null) return color;
      if (typeof color === 'string' && color[0] === '#') return getColor(hexToRgb(color.substr(1)));
      return getRandomColor();
    }

    function getRandomColor () {
      var color = [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
      return getColor(color);
    }

    function getColor (color) {
      return {
        backgroundColor: rgba(color, 0.2),
        pointBackgroundColor: rgba(color, 1),
        pointHoverBackgroundColor: rgba(color, 0.8),
        borderColor: rgba(color, 1),
        pointBorderColor: '#fff',
        pointHoverBorderColor: rgba(color, 1)
      };
    }

    function getRandomInt (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function rgba (color, alpha) {
      // rgba not supported by IE8
      return useExcanvas ? 'rgb(' + color.join(',') + ')' : 'rgba(' + color.concat(alpha).join(',') + ')';
    }

    // Credit: http://stackoverflow.com/a/11508164/1190235
    function hexToRgb (hex) {
      var bigint = parseInt(hex, 16),
        r = (bigint >> 16) & 255,
        g = (bigint >> 8) & 255,
        b = bigint & 255;

      return [r, g, b];
    }

    function hasData (scope) {
      return scope.chartData && scope.chartData.length;
    }

    function getChartColorFn (scope) {
      return typeof scope.chartGetColor === 'function' ? scope.chartGetColor : getRandomColor;
    }

    function getChartData (type, scope) {
      var colors = getColors(type, scope);
      return Array.isArray(scope.chartData[0]) ?
        getDataSets(scope.chartLabels, scope.chartData, scope.chartSeries || [], colors, scope.chartDatasetOverride) :
        getData(scope.chartLabels, scope.chartData, colors, scope.chartDatasetOverride);
    }

    function getDataSets (labels, data, series, colors, datasetOverride) {
      return {
        labels: labels,
        datasets: data.map(function (item, i) {
          var dataset = angular.extend({}, colors[i], {
            label: series[i],
            data: item
          });
          if (datasetOverride && datasetOverride.length >= i) {
            angular.merge(dataset, datasetOverride[i]);
          }
          return dataset;
        })
      };
    }

    function getData (labels, data, colors, datasetOverride) {
      var dataset = {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: colors.map(function (color) {
            return color.pointBackgroundColor;
          }),
          hoverBackgroundColor: colors.map(function (color) {
            return color.backgroundColor;
          })
        }]
      };
      if (datasetOverride) {
        angular.merge(dataset.datasets[0], datasetOverride);
      }
      return dataset;
    }

    function getChartOptions (type, scope) {
      return angular.extend({}, ChartJs.getOptions(type), scope.chartOptions);
    }

    function bindEvents (cvs, scope) {
      cvs.onclick = scope.chartClick ? getEventHandler(scope, 'chartClick', false) : angular.noop;
      cvs.onmousemove = scope.chartHover ? getEventHandler(scope, 'chartHover', true) : angular.noop;
    }

    function updateChart (values, scope) {
      if (Array.isArray(scope.chartData[0])) {
        scope.chart.data.datasets.forEach(function (dataset, i) {
          dataset.data = values[i];
        });
      } else {
        scope.chart.data.datasets[0].data = values;
      }

      scope.chart.update();
      scope.$emit('chart-update', scope.chart);
    }

    function isEmpty (value) {
      return ! value ||
        (Array.isArray(value) && ! value.length) ||
        (typeof value === 'object' && ! Object.keys(value).length);
    }

    function canDisplay (type, scope, elem, options) {
      // TODO: check parent?
      if (options.responsive && elem[0].clientHeight === 0) {
        $timeout(function () {
          createChart(type, scope, elem);
        }, 50, false);
        return false;
      }
      return true;
    }

    function destroyChart(scope) {
      if(! scope.chart) return;
      scope.chart.destroy();
      scope.$emit('chart-destroy', scope.chart);
    }
  }
}));

;
/*! ngstorage 0.3.10 | Copyright (c) 2015 Gias Kay Lee | MIT License */!function(a,b){"use strict";"function"==typeof define&&define.amd?define(["angular"],b):a.hasOwnProperty("angular")?b(a.angular):"object"==typeof exports&&(module.exports=b(require("angular")))}(this,function(a){"use strict";function b(b){return function(){var c="ngStorage-";this.setKeyPrefix=function(a){if("string"!=typeof a)throw new TypeError("[ngStorage] - "+b+"Provider.setKeyPrefix() expects a String.");c=a};var d=a.toJson,e=a.fromJson;this.setSerializer=function(a){if("function"!=typeof a)throw new TypeError("[ngStorage] - "+b+"Provider.setSerializer expects a function.");d=a},this.setDeserializer=function(a){if("function"!=typeof a)throw new TypeError("[ngStorage] - "+b+"Provider.setDeserializer expects a function.");e=a},this.get=function(a){return e(window[b].getItem(c+a))},this.set=function(a,e){return window[b].setItem(c+a,d(e))},this.$get=["$rootScope","$window","$log","$timeout","$document",function(f,g,h,i,j){function k(a){var b;try{b=g[a]}catch(c){b=!1}if(b&&"localStorage"===a){var d="__"+Math.round(1e7*Math.random());try{localStorage.setItem(d,d),localStorage.removeItem(d)}catch(c){b=!1}}return b}var l,m,n=c.length,o=k(b)||(h.warn("This browser does not support Web Storage!"),{setItem:a.noop,getItem:a.noop,removeItem:a.noop}),p={$default:function(b){for(var c in b)a.isDefined(p[c])||(p[c]=a.copy(b[c]));return p.$sync(),p},$reset:function(a){for(var b in p)"$"===b[0]||delete p[b]&&o.removeItem(c+b);return p.$default(a)},$sync:function(){for(var a,b=0,d=o.length;d>b;b++)(a=o.key(b))&&c===a.slice(0,n)&&(p[a.slice(n)]=e(o.getItem(a)))},$apply:function(){var b;if(m=null,!a.equals(p,l)){b=a.copy(l),a.forEach(p,function(e,f){a.isDefined(e)&&"$"!==f[0]&&(o.setItem(c+f,d(e)),delete b[f])});for(var e in b)o.removeItem(c+e);l=a.copy(p)}}};return p.$sync(),l=a.copy(p),f.$watch(function(){m||(m=i(p.$apply,100,!1))}),g.addEventListener&&g.addEventListener("storage",function(b){if(b.key){var d=j[0];d.hasFocus&&d.hasFocus()||c!==b.key.slice(0,n)||(b.newValue?p[b.key.slice(n)]=e(b.newValue):delete p[b.key.slice(n)],l=a.copy(p),f.$apply())}}),g.addEventListener&&g.addEventListener("beforeunload",function(){p.$apply()}),p}]}}return a=a&&a.module?a:window.angular,a.module("ngStorage",[]).provider("$localStorage",b("localStorage")).provider("$sessionStorage",b("sessionStorage"))});