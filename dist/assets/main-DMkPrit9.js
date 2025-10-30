var ei=Object.defineProperty;var tt=e=>{throw TypeError(e)};var ti=(e,i,t)=>i in e?ei(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t;var B=(e,i,t)=>ti(e,typeof i!="symbol"?i+"":i,t),ke=(e,i,t)=>i.has(e)||tt("Cannot "+t);var k=(e,i,t)=>(ke(e,i,"read from private field"),t?t.call(e):i.get(e)),q=(e,i,t)=>i.has(e)?tt("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(e):i.set(e,t),G=(e,i,t,n)=>(ke(e,i,"write to private field"),n?n.call(e,t):i.set(e,t),t),A=(e,i,t)=>(ke(e,i,"access private method"),t);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function ii(e){for(var i=[],t=0;t<e.length;){var n=e[t];if(n==="*"||n==="+"||n==="?"){i.push({type:"MODIFIER",index:t,value:e[t++]});continue}if(n==="\\"){i.push({type:"ESCAPED_CHAR",index:t++,value:e[t++]});continue}if(n==="{"){i.push({type:"OPEN",index:t,value:e[t++]});continue}if(n==="}"){i.push({type:"CLOSE",index:t,value:e[t++]});continue}if(n===":"){for(var s="",r=t+1;r<e.length;){var o=e.charCodeAt(r);if(o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122||o===95){s+=e[r++];continue}break}if(!s)throw new TypeError("Missing parameter name at ".concat(t));i.push({type:"NAME",index:t,value:s}),t=r;continue}if(n==="("){var l=1,a="",r=t+1;if(e[r]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(r));for(;r<e.length;){if(e[r]==="\\"){a+=e[r++]+e[r++];continue}if(e[r]===")"){if(l--,l===0){r++;break}}else if(e[r]==="("&&(l++,e[r+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(r));a+=e[r++]}if(l)throw new TypeError("Unbalanced pattern at ".concat(t));if(!a)throw new TypeError("Missing pattern at ".concat(t));i.push({type:"PATTERN",index:t,value:a}),t=r;continue}i.push({type:"CHAR",index:t,value:e[t++]})}return i.push({type:"END",index:t,value:""}),i}function Je(e,i){i===void 0&&(i={});for(var t=ii(e),n=i.prefixes,s=n===void 0?"./":n,r=i.delimiter,o=r===void 0?"/#?":r,l=[],a=0,d=0,p="",c=function(M){if(d<t.length&&t[d].type===M)return t[d++].value},v=function(M){var w=c(M);if(w!==void 0)return w;var E=t[d],C=E.type,z=E.index;throw new TypeError("Unexpected ".concat(C," at ").concat(z,", expected ").concat(M))},u=function(){for(var M="",w;w=c("CHAR")||c("ESCAPED_CHAR");)M+=w;return M},m=function(M){for(var w=0,E=o;w<E.length;w++){var C=E[w];if(M.indexOf(C)>-1)return!0}return!1},_=function(M){var w=l[l.length-1],E=M||(w&&typeof w=="string"?w:"");if(w&&!E)throw new TypeError('Must have text between two parameters, missing text after "'.concat(w.name,'"'));return!E||m(E)?"[^".concat(te(o),"]+?"):"(?:(?!".concat(te(E),")[^").concat(te(o),"])+?")};d<t.length;){var b=c("CHAR"),f=c("NAME"),h=c("PATTERN");if(f||h){var g=b||"";s.indexOf(g)===-1&&(p+=g,g=""),p&&(l.push(p),p=""),l.push({name:f||a++,prefix:g,suffix:"",pattern:h||_(g),modifier:c("MODIFIER")||""});continue}var y=b||c("ESCAPED_CHAR");if(y){p+=y;continue}p&&(l.push(p),p="");var T=c("OPEN");if(T){var g=u(),P=c("NAME")||"",L=c("PATTERN")||"",S=u();v("CLOSE"),l.push({name:P||(L?a++:""),pattern:P&&!L?_(g):L,prefix:g,suffix:S,modifier:c("MODIFIER")||""});continue}v("END")}return l}function St(e,i){return wt(Je(e,i),i)}function wt(e,i){i===void 0&&(i={});var t=Ze(i),n=i.encode,s=n===void 0?function(a){return a}:n,r=i.validate,o=r===void 0?!0:r,l=e.map(function(a){if(typeof a=="object")return new RegExp("^(?:".concat(a.pattern,")$"),t)});return function(a){for(var d="",p=0;p<e.length;p++){var c=e[p];if(typeof c=="string"){d+=c;continue}var v=a?a[c.name]:void 0,u=c.modifier==="?"||c.modifier==="*",m=c.modifier==="*"||c.modifier==="+";if(Array.isArray(v)){if(!m)throw new TypeError('Expected "'.concat(c.name,'" to not repeat, but got an array'));if(v.length===0){if(u)continue;throw new TypeError('Expected "'.concat(c.name,'" to not be empty'))}for(var _=0;_<v.length;_++){var b=s(v[_],c);if(o&&!l[p].test(b))throw new TypeError('Expected all "'.concat(c.name,'" to match "').concat(c.pattern,'", but got "').concat(b,'"'));d+=c.prefix+b+c.suffix}continue}if(typeof v=="string"||typeof v=="number"){var b=s(String(v),c);if(o&&!l[p].test(b))throw new TypeError('Expected "'.concat(c.name,'" to match "').concat(c.pattern,'", but got "').concat(b,'"'));d+=c.prefix+b+c.suffix;continue}if(!u){var f=m?"an array":"a string";throw new TypeError('Expected "'.concat(c.name,'" to be ').concat(f))}}return d}}function te(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Ze(e){return e&&e.sensitive?"":"i"}function ni(e,i){if(!i)return e;for(var t=/\((?:\?<(.*?)>)?(?!\?)/g,n=0,s=t.exec(e.source);s;)i.push({name:s[1]||n++,prefix:"",suffix:"",modifier:"",pattern:""}),s=t.exec(e.source);return e}function si(e,i,t){var n=e.map(function(s){return Tt(s,i,t).source});return new RegExp("(?:".concat(n.join("|"),")"),Ze(t))}function ri(e,i,t){return ai(Je(e,t),i,t)}function ai(e,i,t){t===void 0&&(t={});for(var n=t.strict,s=n===void 0?!1:n,r=t.start,o=r===void 0?!0:r,l=t.end,a=l===void 0?!0:l,d=t.encode,p=d===void 0?function(w){return w}:d,c=t.delimiter,v=c===void 0?"/#?":c,u=t.endsWith,m=u===void 0?"":u,_="[".concat(te(m),"]|$"),b="[".concat(te(v),"]"),f=o?"^":"",h=0,g=e;h<g.length;h++){var y=g[h];if(typeof y=="string")f+=te(p(y));else{var T=te(p(y.prefix)),P=te(p(y.suffix));if(y.pattern)if(i&&i.push(y),T||P)if(y.modifier==="+"||y.modifier==="*"){var L=y.modifier==="*"?"?":"";f+="(?:".concat(T,"((?:").concat(y.pattern,")(?:").concat(P).concat(T,"(?:").concat(y.pattern,"))*)").concat(P,")").concat(L)}else f+="(?:".concat(T,"(").concat(y.pattern,")").concat(P,")").concat(y.modifier);else{if(y.modifier==="+"||y.modifier==="*")throw new TypeError('Can not repeat "'.concat(y.name,'" without a prefix and suffix'));f+="(".concat(y.pattern,")").concat(y.modifier)}else f+="(?:".concat(T).concat(P,")").concat(y.modifier)}}if(a)s||(f+="".concat(b,"?")),f+=t.endsWith?"(?=".concat(_,")"):"$";else{var S=e[e.length-1],M=typeof S=="string"?b.indexOf(S[S.length-1])>-1:S===void 0;s||(f+="(?:".concat(b,"(?=").concat(_,"))?")),M||(f+="(?=".concat(b,"|").concat(_,")"))}return new RegExp(f,Ze(t))}function Tt(e,i,t){return e instanceof RegExp?ni(e,i):Array.isArray(e)?si(e,i,t):ri(e,i,t)}function re(e){return typeof e=="object"&&!!e}function he(e){return typeof e=="function"}function Q(e){return typeof e=="string"}function Ce(e=[]){return Array.isArray(e)?e:[e]}function se(e){return`[Vaadin.Router] ${e}`}class Et extends Error{constructor(t){super(se(`Page not found (${t.pathname})`));B(this,"code");B(this,"context");this.context=t,this.code=404}}const ce=Symbol("NotFoundResult");function xt(e){return new Et(e)}function Ct(e){return(Array.isArray(e)?e[0]:e)??""}function Me(e){return Ct(e==null?void 0:e.path)}function oi(e){return Array.isArray(e)&&e.length>0?e:void 0}const Be=new Map;Be.set("|false",{keys:[],pattern:/(?:)/u});function it(e){try{return decodeURIComponent(e)}catch{return e}}function li(e,i,t=!1,n=[],s){const r=`${e}|${String(t)}`,o=Ct(i);let l=Be.get(r);if(!l){const p=[];l={keys:p,pattern:Tt(e,p,{end:t,strict:e===""})},Be.set(r,l)}const a=l.pattern.exec(o);if(!a)return null;const d={...s};for(let p=1;p<a.length;p++){const c=l.keys[p-1],v=c.name,u=a[p];(u!==void 0||!Object.hasOwn(d,v))&&(c.modifier==="+"||c.modifier==="*"?d[v]=u?u.split(/[/?#]/u).map(it):[]:d[v]=u&&it(u))}return{keys:[...n,...l.keys],params:d,path:a[0]}}var ci=li;function Mt(e,i,t,n,s){let r,o,l=0,a=Me(e);return a.startsWith("/")&&(t&&(a=a.substring(1)),t=!0),{next(d){if(e===d)return{done:!0,value:void 0};e.__children??(e.__children=oi(e.children));const p=e.__children??[],c=!e.__children&&!e.children;if(!r&&(r=ci(a,i,c,n,s),r))return{value:{keys:r.keys,params:r.params,path:r.path,route:e}};if(r&&p.length>0)for(;l<p.length;){if(!o){const u=p[l];u.parent=e;let m=r.path.length;m>0&&i.charAt(m)==="/"&&(m+=1),o=Mt(u,i.substring(m),t,r.keys,r.params)}const v=o.next(d);if(!v.done)return{done:!1,value:v.value};o=null,l+=1}return{done:!0,value:void 0}}}}var di=Mt;function ui(e){if(he(e.route.action))return e.route.action(e)}function fi(e,i){let t=e;for(;t;)if(t=t.parent,t===i)return!0;return!1}function pi(e){return!!e&&typeof e=="object"&&"next"in e&&"params"in e&&"result"in e&&"route"in e}class hi extends Error{constructor(t,n){let s=`Path '${t.pathname}' is not properly resolved due to an error.`;const r=Me(t.route);r&&(s+=` Resolution had failed on route: '${r}'`);super(s,n);B(this,"code");B(this,"context");this.code=n==null?void 0:n.code,this.context=t}warn(){console.warn(this.message)}}function mi(e,i){var s;const{path:t,route:n}=i;if(n&&!n.__synthetic){const r={path:t,route:n};if(n.parent&&e.chain)for(let o=e.chain.length-1;o>=0&&e.chain[o].route!==n.parent;o--)e.chain.pop();(s=e.chain)==null||s.push(r)}}var ae,N;class Lt{constructor(i,{baseUrl:t="",context:n,errorHandler:s,resolveRoute:r=ui}={}){B(this,"baseUrl");q(this,ae);B(this,"errorHandler");B(this,"resolveRoute");q(this,N);if(Object(i)!==i)throw new TypeError("Invalid routes");this.baseUrl=t,this.errorHandler=s,this.resolveRoute=r,Array.isArray(i)?G(this,N,{__children:i,__synthetic:!0,action:()=>{},path:""}):G(this,N,{...i,parent:void 0}),G(this,ae,{...n,hash:"",async next(){return ce},params:{},pathname:"",resolver:this,route:k(this,N),search:"",chain:[]})}get root(){return k(this,N)}get context(){return k(this,ae)}get __effectiveBaseUrl(){return this.baseUrl?new URL(this.baseUrl,document.baseURI||document.URL).href.replace(/[^/]*$/u,""):""}getRoutes(){return[...k(this,N).__children??[]]}removeRoutes(){k(this,N).__children=[]}async resolve(i){const t=this,n={...k(this,ae),...Q(i)?{pathname:i}:i,next:d},s=di(k(this,N),this.__normalizePathname(n.pathname)??n.pathname,!!this.baseUrl),r=this.resolveRoute;let o=null,l=null,a=n;async function d(p=!1,c=(u=>(u=o==null?void 0:o.value)==null?void 0:u.route)(),v){var b,f;const m=v===null?(b=o==null?void 0:o.value)==null?void 0:b.route:void 0;if(o=l??s.next(m),l=null,!p&&(o.done||!fi(o.value.route,c)))return l=o,ce;if(o.done)throw xt(n);a={...n,params:o.value.params,route:o.value.route,chain:(f=a.chain)==null?void 0:f.slice()},mi(a,o.value);const _=await r(a);return _!=null&&_!==ce?(a.result=pi(_)?_.result:_,G(t,ae,a),a):await d(p,c,_)}try{return await d(!0,k(this,N))}catch(p){const c=p instanceof Et?p:new hi(a,{code:500,cause:p});if(this.errorHandler)return a.result=this.errorHandler(c),a;throw p}}setRoutes(i){k(this,N).__children=[...Ce(i)]}__normalizePathname(i){if(!this.baseUrl)return i;const t=this.__effectiveBaseUrl,n=i.startsWith("/")?new URL(t).origin+i:`./${i}`,s=new URL(n,t).href;if(s.startsWith(t))return s.slice(t.length)}addRoutes(i){return k(this,N).__children=[...k(this,N).__children??[],...Ce(i)],this.getRoutes()}}ae=new WeakMap,N=new WeakMap;function Pt(e,i,t,n){var r;const s=i.name??(n==null?void 0:n(i));if(s&&(e.has(s)?(r=e.get(s))==null||r.push(i):e.set(s,[i])),Array.isArray(t))for(const o of t)o.parent=i,Pt(e,o,o.__children??o.children,n)}function nt(e,i){const t=e.get(i);if(t){if(t.length>1)throw new Error(`Duplicate route with name "${i}". Try seting unique 'name' route properties.`);return t[0]}}function gi(e,i={}){if(!(e instanceof Lt))throw new TypeError("An instance of Resolver is expected");const t=new Map,n=new Map;return(s,r)=>{let o=nt(n,s);if(!o&&(n.clear(),Pt(n,e.root,e.root.__children,i.cacheKeyProvider),o=nt(n,s),!o))throw new Error(`Route "${s}" not found`);let l=o.fullPath?t.get(o.fullPath):void 0;if(!l){let p=Me(o),c=o.parent;for(;c;){const m=Me(c);m&&(p=`${m.replace(/\/$/u,"")}/${p.replace(/^\//u,"")}`),c=c.parent}const v=Je(p),u=Object.create(null);for(const m of v)Q(m)||(u[m.name]=!0);l={keys:u,tokens:v},t.set(p,l),o.fullPath=p}let d=wt(l.tokens,{encode:encodeURIComponent,...i})(r)||"/";if(i.stringifyQueryParams&&r){const p={};for(const[v,u]of Object.entries(r))!(v in l.keys)&&u&&(p[v]=u);const c=i.stringifyQueryParams(p);c&&(d+=c.startsWith("?")?c:`?${c}`)}return d}}var vi=gi;const _i=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,be=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function yi(){function e(){return!0}return It(e)}function bi(){try{return Si()?!0:wi()?be?!Ti():!yi():!1}catch{return!1}}function Si(){return localStorage.getItem("vaadin.developmentmode.force")}function wi(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Ti(){return!!(be&&Object.keys(be).map(i=>be[i]).filter(i=>i.productionMode).length>0)}function It(e,i){if(typeof e!="function")return;const t=_i.exec(e.toString());if(t)try{e=new Function(t[1])}catch(n){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",n)}return e(i)}window.Vaadin=window.Vaadin||{};const st=function(e,i){if(window.Vaadin.developmentMode)return It(e,i)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=bi());function Ei(){/*! vaadin-dev-mode:start
  (function () {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var getPolymerVersion = function getPolymerVersion() {
  return window.Polymer && window.Polymer.version;
};

var StatisticsGatherer = function () {
  function StatisticsGatherer(logger) {
    classCallCheck(this, StatisticsGatherer);

    this.now = new Date().getTime();
    this.logger = logger;
  }

  createClass(StatisticsGatherer, [{
    key: 'frameworkVersionDetectors',
    value: function frameworkVersionDetectors() {
      return {
        'Flow': function Flow() {
          if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
            var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
              return window.Vaadin.Flow.clients[key];
            }).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().flow;
            });
            if (flowVersions.length > 0) {
              return flowVersions[0];
            }
          }
        },
        'Vaadin Framework': function VaadinFramework() {
          if (window.vaadin && window.vaadin.clients) {
            var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().vaadinVersion;
            });
            if (frameworkVersions.length > 0) {
              return frameworkVersions[0];
            }
          }
        },
        'AngularJs': function AngularJs() {
          if (window.angular && window.angular.version && window.angular.version) {
            return window.angular.version.full;
          }
        },
        'Angular': function Angular() {
          if (window.ng) {
            var tags = document.querySelectorAll("[ng-version]");
            if (tags.length > 0) {
              return tags[0].getAttribute("ng-version");
            }
            return "Unknown";
          }
        },
        'Backbone.js': function BackboneJs() {
          if (window.Backbone) {
            return window.Backbone.VERSION;
          }
        },
        'React': function React() {
          var reactSelector = '[data-reactroot], [data-reactid]';
          if (!!document.querySelector(reactSelector)) {
            // React does not publish the version by default
            return "unknown";
          }
        },
        'Ember': function Ember() {
          if (window.Em && window.Em.VERSION) {
            return window.Em.VERSION;
          } else if (window.Ember && window.Ember.VERSION) {
            return window.Ember.VERSION;
          }
        },
        'jQuery': function (_jQuery) {
          function jQuery() {
            return _jQuery.apply(this, arguments);
          }

          jQuery.toString = function () {
            return _jQuery.toString();
          };

          return jQuery;
        }(function () {
          if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
            return jQuery.prototype.jquery;
          }
        }),
        'Polymer': function Polymer() {
          var version = getPolymerVersion();
          if (version) {
            return version;
          }
        },
        'LitElement': function LitElement() {
          var version = window.litElementVersions && window.litElementVersions[0];
          if (version) {
            return version;
          }
        },
        'LitHtml': function LitHtml() {
          var version = window.litHtmlVersions && window.litHtmlVersions[0];
          if (version) {
            return version;
          }
        },
        'Vue.js': function VueJs() {
          if (window.Vue) {
            return window.Vue.version;
          }
        }
      };
    }
  }, {
    key: 'getUsedVaadinElements',
    value: function getUsedVaadinElements(elements) {
      var version = getPolymerVersion();
      var elementClasses = void 0;
      // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
      // Check all locations calling the method getEntries() in
      // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
      // Currently it is only used by BootstrapHandler.
      if (version && version.indexOf('2') === 0) {
        // Polymer 2: components classes are stored in window.Vaadin
        elementClasses = Object.keys(window.Vaadin).map(function (c) {
          return window.Vaadin[c];
        }).filter(function (c) {
          return c.is;
        });
      } else {
        // Polymer 3: components classes are stored in window.Vaadin.registrations
        elementClasses = window.Vaadin.registrations || [];
      }
      elementClasses.forEach(function (klass) {
        var version = klass.version ? klass.version : "0.0.0";
        elements[klass.is] = { version: version };
      });
    }
  }, {
    key: 'getUsedVaadinThemes',
    value: function getUsedVaadinThemes(themes) {
      ['Lumo', 'Material'].forEach(function (themeName) {
        var theme;
        var version = getPolymerVersion();
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: themes are stored in window.Vaadin
          theme = window.Vaadin[themeName];
        } else {
          // Polymer 3: themes are stored in custom element registry
          theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
        }
        if (theme && theme.version) {
          themes[themeName] = { version: theme.version };
        }
      });
    }
  }, {
    key: 'getFrameworks',
    value: function getFrameworks(frameworks) {
      var detectors = this.frameworkVersionDetectors();
      Object.keys(detectors).forEach(function (framework) {
        var detector = detectors[framework];
        try {
          var version = detector();
          if (version) {
            frameworks[framework] = { version: version };
          }
        } catch (e) {}
      });
    }
  }, {
    key: 'gather',
    value: function gather(storage) {
      var storedStats = storage.read();
      var gatheredStats = {};
      var types = ["elements", "frameworks", "themes"];

      types.forEach(function (type) {
        gatheredStats[type] = {};
        if (!storedStats[type]) {
          storedStats[type] = {};
        }
      });

      var previousStats = JSON.stringify(storedStats);

      this.getUsedVaadinElements(gatheredStats.elements);
      this.getFrameworks(gatheredStats.frameworks);
      this.getUsedVaadinThemes(gatheredStats.themes);

      var now = this.now;
      types.forEach(function (type) {
        var keys = Object.keys(gatheredStats[type]);
        keys.forEach(function (key) {
          if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
            storedStats[type][key] = { firstUsed: now };
          }
          // Discards any previously logged version number
          storedStats[type][key].version = gatheredStats[type][key].version;
          storedStats[type][key].lastUsed = now;
        });
      });

      var newStats = JSON.stringify(storedStats);
      storage.write(newStats);
      if (newStats != previousStats && Object.keys(storedStats).length > 0) {
        this.logger.debug("New stats: " + newStats);
      }
    }
  }]);
  return StatisticsGatherer;
}();

var StatisticsStorage = function () {
  function StatisticsStorage(key) {
    classCallCheck(this, StatisticsStorage);

    this.key = key;
  }

  createClass(StatisticsStorage, [{
    key: 'read',
    value: function read() {
      var localStorageStatsString = localStorage.getItem(this.key);
      try {
        return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
      } catch (e) {
        return {};
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      localStorage.setItem(this.key, data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      localStorage.removeItem(this.key);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var storedStats = this.read();
      var empty = true;
      Object.keys(storedStats).forEach(function (key) {
        if (Object.keys(storedStats[key]).length > 0) {
          empty = false;
        }
      });

      return empty;
    }
  }]);
  return StatisticsStorage;
}();

var StatisticsSender = function () {
  function StatisticsSender(url, logger) {
    classCallCheck(this, StatisticsSender);

    this.url = url;
    this.logger = logger;
  }

  createClass(StatisticsSender, [{
    key: 'send',
    value: function send(data, errorHandler) {
      var logger = this.logger;

      if (navigator.onLine === false) {
        logger.debug("Offline, can't send");
        errorHandler();
        return;
      }
      logger.debug("Sending data to " + this.url);

      var req = new XMLHttpRequest();
      req.withCredentials = true;
      req.addEventListener("load", function () {
        // Stats sent, nothing more to do
        logger.debug("Response: " + req.responseText);
      });
      req.addEventListener("error", function () {
        logger.debug("Send failed");
        errorHandler();
      });
      req.addEventListener("abort", function () {
        logger.debug("Send aborted");
        errorHandler();
      });
      req.open("POST", this.url);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(data);
    }
  }]);
  return StatisticsSender;
}();

var StatisticsLogger = function () {
  function StatisticsLogger(id) {
    classCallCheck(this, StatisticsLogger);

    this.id = id;
  }

  createClass(StatisticsLogger, [{
    key: '_isDebug',
    value: function _isDebug() {
      return localStorage.getItem("vaadin." + this.id + ".debug");
    }
  }, {
    key: 'debug',
    value: function debug(msg) {
      if (this._isDebug()) {
        console.info(this.id + ": " + msg);
      }
    }
  }]);
  return StatisticsLogger;
}();

var UsageStatistics = function () {
  function UsageStatistics() {
    classCallCheck(this, UsageStatistics);

    this.now = new Date();
    this.timeNow = this.now.getTime();
    this.gatherDelay = 10; // Delay between loading this file and gathering stats
    this.initialDelay = 24 * 60 * 60;

    this.logger = new StatisticsLogger("statistics");
    this.storage = new StatisticsStorage("vaadin.statistics.basket");
    this.gatherer = new StatisticsGatherer(this.logger);
    this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
  }

  createClass(UsageStatistics, [{
    key: 'maybeGatherAndSend',
    value: function maybeGatherAndSend() {
      var _this = this;

      if (localStorage.getItem(UsageStatistics.optOutKey)) {
        return;
      }
      this.gatherer.gather(this.storage);
      setTimeout(function () {
        _this.maybeSend();
      }, this.gatherDelay * 1000);
    }
  }, {
    key: 'lottery',
    value: function lottery() {
      return true;
    }
  }, {
    key: 'currentMonth',
    value: function currentMonth() {
      return this.now.getYear() * 12 + this.now.getMonth();
    }
  }, {
    key: 'maybeSend',
    value: function maybeSend() {
      var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));

      if (!firstUse) {
        // Use a grace period to avoid interfering with tests, incognito mode etc
        firstUse = this.timeNow;
        localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
      }

      if (this.timeNow < firstUse + this.initialDelay * 1000) {
        this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
        return;
      }
      if (this.currentMonth() <= monthProcessed) {
        this.logger.debug("This month has already been processed");
        return;
      }
      localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
      // Use random sampling
      if (this.lottery()) {
        this.logger.debug("Congratulations, we have a winner!");
      } else {
        this.logger.debug("Sorry, no stats from you this time");
        return;
      }

      this.send();
    }
  }, {
    key: 'send',
    value: function send() {
      // Ensure we have the latest data
      this.gatherer.gather(this.storage);

      // Read, send and clean up
      var data = this.storage.read();
      data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      data["usageStatisticsVersion"] = UsageStatistics.version;
      var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
      var self = this;
      this.sender.send(info + JSON.stringify(data), function () {
        // Revert the 'month processed' flag
        localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
      });
    }
  }], [{
    key: 'version',
    get: function get$1() {
      return '2.1.2';
    }
  }, {
    key: 'firstUseKey',
    get: function get$1() {
      return 'vaadin.statistics.firstuse';
    }
  }, {
    key: 'monthProcessedKey',
    get: function get$1() {
      return 'vaadin.statistics.monthProcessed';
    }
  }, {
    key: 'optOutKey',
    get: function get$1() {
      return 'vaadin.statistics.optout';
    }
  }]);
  return UsageStatistics;
}();

try {
  window.Vaadin = window.Vaadin || {};
  window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
  window.Vaadin.usageStatsChecker.maybeGatherAndSend();
} catch (e) {
  // Intentionally ignored as this is not a problem in the app being developed
}

}());

  vaadin-dev-mode:end **/}const xi=function(){if(typeof st=="function")return st(Ei)};function Ci(e,i=window.Vaadin??(window.Vaadin={})){i.registrations??(i.registrations=[]),i.registrations.push({is:"@vaadin/router",version:"2.0.0"})}Ci();xi();const Mi=e=>{const i=getComputedStyle(e).getPropertyValue("animation-name");return i&&i!=="none"},Li=(e,i)=>{const t=()=>{e.removeEventListener("animationend",t),i()};e.addEventListener("animationend",t)};async function Pi(e,i){return e.classList.add(i),await new Promise(t=>{if(Mi(e)){const n=e.getBoundingClientRect(),s=`height: ${n.bottom-n.top}px; width: ${n.right-n.left}px`;e.setAttribute("style",`position: absolute; ${s}`),Li(e,()=>{e.classList.remove(i),e.removeAttribute("style"),t()})}else e.classList.remove(i),t()})}var rt=Pi;function At(e){if(!e||!Q(e.path))throw new Error(se('Expected route config to be an object with a "path" string property, or an array of such objects'));if(!he(e.action)&&!Array.isArray(e.children)&&!he(e.children)&&!Q(e.component)&&!Q(e.redirect))throw new Error(se(`Expected route config "${e.path}" to include either "component, redirect" or "action" function but none found.`));e.redirect&&["bundle","component"].forEach(i=>{i in e&&console.warn(se(`Route config "${String(e.path)}" has both "redirect" and "${i}" properties, and "redirect" will always override the latter. Did you mean to only use "${i}"?`))})}function at(e){Ce(e).forEach(i=>At(i))}function Ii({next:e,...i}){return i}function Se(e,i){const t=i.__effectiveBaseUrl;return t?new URL(e.replace(/^\//u,""),t).pathname:e}function kt(e){return e.map(i=>i.path).reduce((i,t)=>t.length?`${i.replace(/\/$/u,"")}/${t.replace(/^\//u,"")}`:i,"")}function Ai(e){return kt(e.map(i=>i.route))}function Y({chain:e=[],hash:i="",params:t={},pathname:n="",redirectFrom:s,resolver:r,search:o=""},l){const a=e.map(d=>d.route);return{baseUrl:(r==null?void 0:r.baseUrl)??"",getUrl:(d={})=>r?Se(St(Ai(e))({...t,...d}),r):"",hash:i,params:t,pathname:n,redirectFrom:s,route:l??(Array.isArray(a)?a.at(-1):void 0)??null,routes:a,search:o,searchParams:new URLSearchParams(o)}}function ot(e,i){const t={...e.params};return{redirect:{from:e.pathname,params:t,pathname:i}}}function ki(e,i){if(i.location=Y(e),e.chain){const t=e.chain.map(n=>n.route).indexOf(e.route);e.chain[t].element=i}return i}function we(e,i,...t){if(typeof e=="function")return e.apply(i,t)}function lt(e,i,...t){return n=>n&&re(n)&&("cancel"in n||"redirect"in n)?n:we(i==null?void 0:i[e],i,...t)}function Oi(e,i){if(!Array.isArray(e)&&!re(e))throw new Error(se(`Incorrect "children" value for the route ${String(i.path)}: expected array or object, but got ${String(e)}`));const t=Ce(e);t.forEach(n=>At(n)),i.__children=t}function pe(e,i){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:e==="go",detail:i}))}function zi(e){if(typeof e!="object")return String(e);const[i="Unknown"]=/ (.*)\]$/u.exec(String(e))??[];return i==="Object"||i==="Array"?`${i} ${JSON.stringify(e)}`:i}function $i(e){const{port:i,protocol:t}=e,r=t==="http:"&&i==="80"||t==="https:"&&i==="443"?e.hostname:e.host;return`${t}//${r}`}function ct(e){if(e instanceof Element)return e.nodeName.toLowerCase()}function dt(e){if(e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let i=e.target;const t=e instanceof MouseEvent?e.composedPath():e.path??[];for(let a=0;a<t.length;a++){const d=t[a];if("nodeName"in d&&d.nodeName.toLowerCase()==="a"){i=d;break}}for(;i&&i instanceof Node&&ct(i)!=="a";)i=i.parentNode;if(!i||ct(i)!=="a")return;const n=i;if(n.target&&n.target.toLowerCase()!=="_self"||n.hasAttribute("download")||n.hasAttribute("router-ignore")||n.pathname===window.location.pathname&&n.hash!==""||(n.origin||$i(n))!==window.location.origin)return;const{hash:r,pathname:o,search:l}=n;pe("go",{hash:r,pathname:o,search:l})&&e instanceof MouseEvent&&(e.preventDefault(),e.type==="click"&&window.scrollTo(0,0))}const Di={activate(){window.document.addEventListener("click",dt)},inactivate(){window.document.removeEventListener("click",dt)}};var Ri=Di;function ut(e){if(e.state==="vaadin-router-ignore")return;const{hash:i,pathname:t,search:n}=window.location;pe("go",{hash:i,pathname:t,search:n})}const Fi={activate(){window.addEventListener("popstate",ut)},inactivate(){window.removeEventListener("popstate",ut)}};var Hi=Fi;let ft=[];const Bi={CLICK:Ri,POPSTATE:Hi};function pt(e=[]){ft.forEach(i=>i.inactivate()),e.forEach(i=>i.activate()),ft=e}const Gi=256;function ue(){return{cancel:!0}}const ht={__renderId:-1,params:{},route:{__synthetic:!0,children:[],path:"",action(){}},pathname:"",async next(){return ce}};var me,de,ge,oe,ie,le,K,X,x,Ot,zt,Te,Ge,$t,Dt,Ve,Ne,je,ee,qe,We,Ee,Ue,Rt,Ft,Ht,Bt,Gt,Vt,Ye;class Vi extends Lt{constructor(t,n){const s=document.head.querySelector("base"),r=s==null?void 0:s.getAttribute("href");super([],{baseUrl:r?new URL(r,document.URL).href.replace(/[^/]*$/u,""):void 0,...n,resolveRoute:async o=>await A(this,x,Ot).call(this,o)});q(this,x);B(this,"location",Y({resolver:this}));B(this,"ready",Promise.resolve(this.location));q(this,me,new WeakSet);q(this,de,new WeakSet);q(this,ge,A(this,x,Ye).bind(this));q(this,oe,0);q(this,ie);B(this,"__previousContext");q(this,le);q(this,K,null);q(this,X,null);pt(Object.values(Bi)),this.setOutlet(t),this.subscribe()}setOutlet(t){t&&A(this,x,We).call(this,t),G(this,ie,t)}getOutlet(){return k(this,ie)}async setRoutes(t,n=!1){return this.__previousContext=void 0,G(this,le,void 0),at(t),super.setRoutes(t),n||A(this,x,Ye).call(this),await this.ready}addRoutes(t){return at(t),super.addRoutes(t)}async render(t,n=!1){G(this,oe,k(this,oe)+1);const s=k(this,oe),r={...ht,...Q(t)?{hash:"",search:"",pathname:t}:t,__renderId:s};return this.ready=A(this,x,zt).call(this,r,n),await this.ready}subscribe(){window.addEventListener("vaadin-router-go",k(this,ge))}unsubscribe(){window.removeEventListener("vaadin-router-go",k(this,ge))}static setTriggers(...t){pt(t)}urlForName(t,n){return k(this,le)||G(this,le,vi(this,{cacheKeyProvider(s){return"component"in s&&typeof s.component=="string"?s.component:void 0}})),Se(k(this,le).call(this,t,n??void 0),this)}urlForPath(t,n){return Se(St(t)(n??void 0),this)}static go(t){const{pathname:n,search:s,hash:r}=Q(t)?new URL(t,"http://a"):t;return pe("go",{pathname:n,search:s,hash:r})}}me=new WeakMap,de=new WeakMap,ge=new WeakMap,oe=new WeakMap,ie=new WeakMap,le=new WeakMap,K=new WeakMap,X=new WeakMap,x=new WeakSet,Ot=async function(t){const{route:n}=t;if(he(n.children)){let r=await n.children(Ii(t));he(n.children)||({children:r}=n),Oi(r,n)}const s={component:r=>{const o=document.createElement(r);return k(this,de).add(o),o},prevent:ue,redirect:r=>ot(t,r)};return await Promise.resolve().then(async()=>{if(A(this,x,ee).call(this,t))return await we(n.action,n,t,s)}).then(r=>{if(r!=null&&(typeof r=="object"||typeof r=="symbol")&&(r instanceof HTMLElement||r===ce||re(r)&&"redirect"in r))return r;if(Q(n.redirect))return s.redirect(n.redirect)}).then(r=>{if(r!=null)return r;if(Q(n.component))return s.component(n.component)})},zt=async function(t,n){var r;const{__renderId:s}=t;try{const o=await this.resolve(t),l=await A(this,x,Te).call(this,o);if(!A(this,x,ee).call(this,l))return this.location;const a=this.__previousContext;if(l===a)return A(this,x,Ee).call(this,a,!0),this.location;if(this.location=Y(l),n&&A(this,x,Ee).call(this,l,s===1),pe("location-changed",{router:this,location:this.location}),l.__skipAttach)return A(this,x,Ue).call(this,l,a),this.__previousContext=l,this.location;A(this,x,Rt).call(this,l,a);const d=A(this,x,Vt).call(this,l);if(A(this,x,Gt).call(this,l),A(this,x,Bt).call(this,l,a),await d,A(this,x,ee).call(this,l))return A(this,x,Ft).call(this),this.__previousContext=l,this.location}catch(o){if(s===k(this,oe)){n&&A(this,x,Ee).call(this,this.context);for(const l of((r=k(this,ie))==null?void 0:r.children)??[])l.remove();throw this.location=Y(Object.assign(t,{resolver:this})),pe("error",{router:this,error:o,...t}),o}}return this.location},Te=async function(t,n=t){const s=await A(this,x,Ge).call(this,n),o=s!==n?s:t,a=Se(kt(s.chain??[]),this)===s.pathname,d=async(c,v=c.route,u)=>{const m=await c.next(!1,v,u);return m===null||m===ce?a?c:v.parent!=null?await d(c,v.parent,m):m:m},p=await d(s);if(p==null||p===ce)throw xt(o);return p!==s?await A(this,x,Te).call(this,o,p):await A(this,x,$t).call(this,s)},Ge=async function(t){const{result:n}=t;if(n instanceof HTMLElement)return ki(t,n),t;if(n&&"redirect"in n){const s=await A(this,x,qe).call(this,n.redirect,t.__redirectCount,t.__renderId);return await A(this,x,Ge).call(this,s)}throw n instanceof Error?n:new Error(se(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${zi(n)}". Double check the action return value for the route.`))},$t=async function(t){return await A(this,x,Dt).call(this,t).then(async n=>n===this.__previousContext||n===t?n:await A(this,x,Te).call(this,n))},Dt=async function(t){const n=this.__previousContext??{},s=n.chain??[],r=t.chain??[];let o=Promise.resolve(void 0);const l=a=>ot(t,a);if(t.__divergedChainIndex=0,t.__skipAttach=!1,s.length){for(let a=0;a<Math.min(s.length,r.length)&&!(s[a].route!==r[a].route||s[a].path!==r[a].path&&s[a].element!==r[a].element||!A(this,x,je).call(this,s[a].element,r[a].element));t.__divergedChainIndex++,a++);if(t.__skipAttach=r.length===s.length&&t.__divergedChainIndex===r.length&&A(this,x,je).call(this,t.result,n.result),t.__skipAttach){for(let a=r.length-1;a>=0;a--)o=A(this,x,Ve).call(this,o,t,{prevent:ue},s[a]);for(let a=0;a<r.length;a++)o=A(this,x,Ne).call(this,o,t,{prevent:ue,redirect:l},r[a]),s[a].element.location=Y(t,s[a].route)}else for(let a=s.length-1;a>=t.__divergedChainIndex;a--)o=A(this,x,Ve).call(this,o,t,{prevent:ue},s[a])}if(!t.__skipAttach)for(let a=0;a<r.length;a++)a<t.__divergedChainIndex?a<s.length&&s[a].element&&(s[a].element.location=Y(t,s[a].route)):(o=A(this,x,Ne).call(this,o,t,{prevent:ue,redirect:l},r[a]),r[a].element&&(r[a].element.location=Y(t,r[a].route)));return await o.then(async a=>{if(a&&re(a)){if("cancel"in a&&this.__previousContext)return this.__previousContext.__renderId=t.__renderId,this.__previousContext;if("redirect"in a)return await A(this,x,qe).call(this,a.redirect,t.__redirectCount,t.__renderId)}return t})},Ve=async function(t,n,s,r){const o=Y(n);let l=await t;if(A(this,x,ee).call(this,n)&&(l=lt("onBeforeLeave",r.element,o,s,this)(l)),!(re(l)&&"redirect"in l))return l},Ne=async function(t,n,s,r){const o=Y(n,r.route),l=await t;if(A(this,x,ee).call(this,n))return lt("onBeforeEnter",r.element,o,s,this)(l)},je=function(t,n){return t instanceof Element&&n instanceof Element?k(this,de).has(t)&&k(this,de).has(n)?t.localName===n.localName:t===n:!1},ee=function(t){return t.__renderId===k(this,oe)},qe=async function(t,n=0,s=0){if(n>Gi)throw new Error(se(`Too many redirects when rendering ${t.from}`));return await this.resolve({...ht,pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,__redirectCount:n+1,__renderId:s})},We=function(t=k(this,ie)){if(!(t instanceof Element||t instanceof DocumentFragment))throw new TypeError(se(`Expected router outlet to be a valid DOM Element | DocumentFragment (but got ${t})`))},Ee=function({pathname:t,search:n="",hash:s=""},r){if(window.location.pathname!==t||window.location.search!==n||window.location.hash!==s){const o=r?"replaceState":"pushState";window.history[o](null,document.title,t+n+s),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}},Ue=function(t,n){var r;let s=k(this,ie);for(let o=0;o<(t.__divergedChainIndex??0);o++){const l=(r=n==null?void 0:n.chain)==null?void 0:r[o].element;if(l)if(l.parentNode===s)t.chain[o].element=l,s=l;else break}return s},Rt=function(t,n){var o;A(this,x,We).call(this),A(this,x,Ht).call(this);const s=A(this,x,Ue).call(this,t,n);G(this,K,[]),G(this,X,Array.from((s==null?void 0:s.children)??[]).filter(l=>k(this,me).has(l)&&l!==t.result));let r=s;for(let l=t.__divergedChainIndex??0;l<(((o=t.chain)==null?void 0:o.length)??0);l++){const a=t.chain[l].element;a&&(r==null||r.appendChild(a),k(this,me).add(a),r===s&&k(this,K).push(a),r=a)}},Ft=function(){if(k(this,X))for(const t of k(this,X))t.remove();G(this,X,null),G(this,K,null)},Ht=function(){if(k(this,X)&&k(this,K)){for(const t of k(this,K))t.remove();G(this,X,null),G(this,K,null)}},Bt=function(t,n){var s;if(!(!(n!=null&&n.chain)||t.__divergedChainIndex==null))for(let r=n.chain.length-1;r>=t.__divergedChainIndex&&A(this,x,ee).call(this,t);r--){const o=n.chain[r].element;if(o)try{const l=Y(t);we(o.onAfterLeave,o,l,{},this)}finally{if((s=k(this,X))!=null&&s.includes(o))for(const l of o.children)l.remove()}}},Gt=function(t){if(!(!t.chain||t.__divergedChainIndex==null))for(let n=t.__divergedChainIndex;n<t.chain.length&&A(this,x,ee).call(this,t);n++){const s=t.chain[n].element;if(s){const r=Y(t,t.chain[n].route);we(s.onAfterEnter,s,r,{},this)}}},Vt=async function(t){var a,d;const n=(a=k(this,X))==null?void 0:a[0],s=(d=k(this,K))==null?void 0:d[0],r=[],{chain:o=[]}=t;let l;for(let p=o.length-1;p>=0;p--)if(o[p].route.animate){l=o[p].route.animate;break}if(n&&s&&l){const p=re(l)&&l.leave?l.leave:"leaving",c=re(l)&&l.enter?l.enter:"entering";r.push(rt(n,p)),r.push(rt(s,c))}return await Promise.all(r),t},Ye=function(t){const{pathname:n,search:s,hash:r}=t instanceof CustomEvent?t.detail:window.location;Q(this.__normalizePathname(n))&&(t!=null&&t.preventDefault&&t.preventDefault(),this.render({pathname:n,search:s,hash:r},!0))};const Ni=document.querySelector("#app"),ji=new Vi(Ni);ji.setRoutes([{path:"/",component:"promo-page"},{path:"/catalog",component:"catalog-page"},{path:"/blog",component:"blog-page"},{path:"/about",component:"about-page"},{path:"(.*)",component:"promo-page"}]);class qi extends HTMLElement{connectedCallback(){this.innerHTML=`
            <section class="promo__section-1">
                <div class="promo__section-1__img-title">
                    <h1 class="title-h1-italic promo__section-1__title">
                        Make your dream come true<br />or decorate your home
                    </h1>
                    <img
                        src="/src/img/promo/ceramic-vase.jpg"
                        alt="vase"
                        class="promo__img promo__section-1__img"
                    />
                </div>
                <a href="/catalog"><button class="btn-default promo__section-1__btn">shop now</button></a>
            </section>
        `}}customElements.define("promo-section-1",qi);class Wi extends HTMLElement{connectedCallback(){this.innerHTML=`
            <section class="promo__section-2">
                <h2 class="promo__section-2__title h2-default">create or buy</h2>
                <div class="promo__section-2__articles">
                    <div class="promo__section-2__article">
                    <h3 class="h3-default promo__section-2__article__title">our store</h3>
                        <div class="promo__section-2__article__content">
                            <div class="promo__section-2__article__img-container">
                                <img class="promo__section-2__article__img" src="/src/img/about/store.jpg" alt="Vases"/>
                            </div>
                            <p class="promo__section-2__article__text">
                                Welcome to <span class="promo__section-2__article__text--emphesize">Ceramic Soul</span>, where each piece tells a story of craftsmanship and creativity. Our handmade ceramics are thoughtfully designed and carefully crafted, blending traditional techniques with modern aesthetics. Whether you're looking for a unique gift or a special addition to your home, our collection offers timeless pieces that bring warmth and authenticity to any space.
                            </p>
                        </div>
                    </div>
                    <div class="promo__section-2__article">
                        <h3 class="h3-default promo__section-2__article__title">our workshop</h3>
                        <div class="promo__section-2__article__img-container">
                            <img class="promo__section-2__article__img" src="/src/img/about/ceramic.jpg" alt="Ceramic"/>
                        </div>
                        <p class="promo__section-2__article__text">
                            At <span class="promo__section-2__article__text--emphesize">Ceramic Soul</span> workshop, we don’t just craft ceramics—we invite you to get hands-on and create your own unique pieces. Through our engaging masterclasses, you’ll learn traditional techniques, work with natural materials, and experience the joy of shaping clay into something truly personal.
                        </p>
                    </div>
                </div>
            </section>
        `}}customElements.define("promo-section-2",Wi);class Ui extends HTMLElement{connectedCallback(){this.innerHTML=`
            <section class="get-in-touch">
                <h2 class="get-in-touch__title h2-default">get in touch</h2>
                <content class="get-in-touch__content">
                    <div class="get-in-touch__content__image-container">
                        <img class="get-in-touch__content__image" src="/src/img/form/tea.jpg" alt="Tea" />
                    </div>
                    <form action="javascript:void(0);" class="get-in-touch__content__form">
                        <div class="default-input-container text-container">
                            <label for="nameInput" class="default-label">Name</label>
                            <input id="nameInput" class="default-text-input get-in-touch__content__form__text-input" type="text" placeholder="Name" />
                        </div>
                        <div class="default-input-container text-container">
                            <label for="emailInput" class="default-label">Email</label>
                            <input id="emailInput" class="default-text-input get-in-touch__content__form__text-input" type="email" placeholder="Email" />
                        </div>
                        <div class="default-input-container textarea-container">
                            <label for="questionInput" class="default-label">Your question</label>
                            <textarea id="questionInput" class="default-textarea get-in-touch__content__form__text-input" type="text" placeholder="Question"></textarea>
                        </div>
                        <div class="get-in-touch__content__form__last-row">
                            <div class="get-in-touch__content__form__last-row__inputs">
                                <div class="default-checkbox-input-container">
                                    <input id="termsInput" class="default-checkbox-input" type="checkbox"></input>
                                    <label class="default-label">I agree with the <a href="#" class="terms-link">terms</a></label>
                                </div>
                                <button class="send-request-button">send request</button>
                            </div>
                            <img class="get-in-touch__content__form__last-row__corner-img" src="/src/img/form/vase.png" alt="Vase" />
                        </div>
                    </form>
                </content>
            </section>
        `}}customElements.define("get-in-touch-component",Ui);function mt(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function et(e={},i={}){const t=["__proto__","constructor","prototype"];Object.keys(i).filter(n=>t.indexOf(n)<0).forEach(n=>{typeof e[n]>"u"?e[n]=i[n]:mt(i[n])&&mt(e[n])&&Object.keys(i[n]).length>0&&et(e[n],i[n])})}const Nt={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Z(){const e=typeof document<"u"?document:{};return et(e,Nt),e}const Yi={document:Nt,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function V(){const e=typeof window<"u"?window:{};return et(e,Yi),e}function Xi(e=""){return e.trim().split(" ").filter(i=>!!i.trim())}function Ki(e){const i=e;Object.keys(i).forEach(t=>{try{i[t]=null}catch{}try{delete i[t]}catch{}})}function jt(e,i=0){return setTimeout(e,i)}function Le(){return Date.now()}function Qi(e){const i=V();let t;return i.getComputedStyle&&(t=i.getComputedStyle(e,null)),!t&&e.currentStyle&&(t=e.currentStyle),t||(t=e.style),t}function Ji(e,i="x"){const t=V();let n,s,r;const o=Qi(e);return t.WebKitCSSMatrix?(s=o.transform||o.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map(l=>l.replace(",",".")).join(", ")),r=new t.WebKitCSSMatrix(s==="none"?"":s)):(r=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),n=r.toString().split(",")),i==="x"&&(t.WebKitCSSMatrix?s=r.m41:n.length===16?s=parseFloat(n[12]):s=parseFloat(n[4])),i==="y"&&(t.WebKitCSSMatrix?s=r.m42:n.length===16?s=parseFloat(n[13]):s=parseFloat(n[5])),s||0}function _e(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function Zi(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function j(...e){const i=Object(e[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<e.length;n+=1){const s=e[n];if(s!=null&&!Zi(s)){const r=Object.keys(Object(s)).filter(o=>t.indexOf(o)<0);for(let o=0,l=r.length;o<l;o+=1){const a=r[o],d=Object.getOwnPropertyDescriptor(s,a);d!==void 0&&d.enumerable&&(_e(i[a])&&_e(s[a])?s[a].__swiper__?i[a]=s[a]:j(i[a],s[a]):!_e(i[a])&&_e(s[a])?(i[a]={},s[a].__swiper__?i[a]=s[a]:j(i[a],s[a])):i[a]=s[a])}}}return i}function ye(e,i,t){e.style.setProperty(i,t)}function qt({swiper:e,targetPosition:i,side:t}){const n=V(),s=-e.translate;let r=null,o;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",n.cancelAnimationFrame(e.cssModeFrameID);const a=i>s?"next":"prev",d=(c,v)=>a==="next"&&c>=v||a==="prev"&&c<=v,p=()=>{o=new Date().getTime(),r===null&&(r=o);const c=Math.max(Math.min((o-r)/l,1),0),v=.5-Math.cos(c*Math.PI)/2;let u=s+v*(i-s);if(d(u,i)&&(u=i),e.wrapperEl.scrollTo({[t]:u}),d(u,i)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[t]:u})}),n.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=n.requestAnimationFrame(p)};p()}function J(e,i=""){const t=V(),n=[...e.children];return t.HTMLSlotElement&&e instanceof HTMLSlotElement&&n.push(...e.assignedElements()),i?n.filter(s=>s.matches(i)):n}function en(e,i){const t=[i];for(;t.length>0;){const n=t.shift();if(e===n)return!0;t.push(...n.children,...n.shadowRoot?n.shadowRoot.children:[],...n.assignedElements?n.assignedElements():[])}}function tn(e,i){const t=V();let n=i.contains(e);return!n&&t.HTMLSlotElement&&i instanceof HTMLSlotElement&&(n=[...i.assignedElements()].includes(e),n||(n=en(e,i))),n}function Pe(e){try{console.warn(e);return}catch{}}function Ie(e,i=[]){const t=document.createElement(e);return t.classList.add(...Array.isArray(i)?i:Xi(i)),t}function nn(e,i){const t=[];for(;e.previousElementSibling;){const n=e.previousElementSibling;i?n.matches(i)&&t.push(n):t.push(n),e=n}return t}function sn(e,i){const t=[];for(;e.nextElementSibling;){const n=e.nextElementSibling;i?n.matches(i)&&t.push(n):t.push(n),e=n}return t}function ne(e,i){return V().getComputedStyle(e,null).getPropertyValue(i)}function Ae(e){let i=e,t;if(i){for(t=0;(i=i.previousSibling)!==null;)i.nodeType===1&&(t+=1);return t}}function Wt(e,i){const t=[];let n=e.parentElement;for(;n;)i?n.matches(i)&&t.push(n):t.push(n),n=n.parentElement;return t}function Xe(e,i,t){const n=V();return e[i==="width"?"offsetWidth":"offsetHeight"]+parseFloat(n.getComputedStyle(e,null).getPropertyValue(i==="width"?"margin-right":"margin-top"))+parseFloat(n.getComputedStyle(e,null).getPropertyValue(i==="width"?"margin-left":"margin-bottom"))}function H(e){return(Array.isArray(e)?e:[e]).filter(i=>!!i)}function Ke(e,i=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:t=>t}).createHTML(i):e.innerHTML=i}let Oe;function rn(){const e=V(),i=Z();return{smoothScroll:i.documentElement&&i.documentElement.style&&"scrollBehavior"in i.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&i instanceof e.DocumentTouch)}}function Ut(){return Oe||(Oe=rn()),Oe}let ze;function an({userAgent:e}={}){const i=Ut(),t=V(),n=t.navigator.platform,s=e||t.navigator.userAgent,r={ios:!1,android:!1},o=t.screen.width,l=t.screen.height,a=s.match(/(Android);?[\s\/]+([\d.]+)?/);let d=s.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const p=s.match(/(iPod)(.*OS\s([\d_]+))?/),c=!d&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v=n==="Win32";let u=n==="MacIntel";const m=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!d&&u&&i.touch&&m.indexOf(`${o}x${l}`)>=0&&(d=s.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),u=!1),a&&!v&&(r.os="android",r.android=!0),(d||c||p)&&(r.os="ios",r.ios=!0),r}function Yt(e={}){return ze||(ze=an(e)),ze}let $e;function on(){const e=V(),i=Yt();let t=!1;function n(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(n()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[a,d]=l.split("Version/")[1].split(" ")[0].split(".").map(p=>Number(p));t=a<16||a===16&&d<2}}const s=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),r=n(),o=r||s&&i.ios;return{isSafari:t||r,needPerspectiveFix:t,need3dFix:o,isWebView:s}}function Xt(){return $e||($e=on()),$e}function ln({swiper:e,on:i,emit:t}){const n=V();let s=null,r=null;const o=()=>{!e||e.destroyed||!e.initialized||(t("beforeResize"),t("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(s=new ResizeObserver(p=>{r=n.requestAnimationFrame(()=>{const{width:c,height:v}=e;let u=c,m=v;p.forEach(({contentBoxSize:_,contentRect:b,target:f})=>{f&&f!==e.el||(u=b?b.width:(_[0]||_).inlineSize,m=b?b.height:(_[0]||_).blockSize)}),(u!==c||m!==v)&&o()})}),s.observe(e.el))},a=()=>{r&&n.cancelAnimationFrame(r),s&&s.unobserve&&e.el&&(s.unobserve(e.el),s=null)},d=()=>{!e||e.destroyed||!e.initialized||t("orientationchange")};i("init",()=>{if(e.params.resizeObserver&&typeof n.ResizeObserver<"u"){l();return}n.addEventListener("resize",o),n.addEventListener("orientationchange",d)}),i("destroy",()=>{a(),n.removeEventListener("resize",o),n.removeEventListener("orientationchange",d)})}function cn({swiper:e,extendParams:i,on:t,emit:n}){const s=[],r=V(),o=(d,p={})=>{const c=r.MutationObserver||r.WebkitMutationObserver,v=new c(u=>{if(e.__preventObserver__)return;if(u.length===1){n("observerUpdate",u[0]);return}const m=function(){n("observerUpdate",u[0])};r.requestAnimationFrame?r.requestAnimationFrame(m):r.setTimeout(m,0)});v.observe(d,{attributes:typeof p.attributes>"u"?!0:p.attributes,childList:e.isElement||(typeof p.childList>"u"?!0:p).childList,characterData:typeof p.characterData>"u"?!0:p.characterData}),s.push(v)},l=()=>{if(e.params.observer){if(e.params.observeParents){const d=Wt(e.hostEl);for(let p=0;p<d.length;p+=1)o(d[p])}o(e.hostEl,{childList:e.params.observeSlideChildren}),o(e.wrapperEl,{attributes:!1})}},a=()=>{s.forEach(d=>{d.disconnect()}),s.splice(0,s.length)};i({observer:!1,observeParents:!1,observeSlideChildren:!1}),t("init",l),t("destroy",a)}var dn={on(e,i,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof i!="function")return n;const s=t?"unshift":"push";return e.split(" ").forEach(r=>{n.eventsListeners[r]||(n.eventsListeners[r]=[]),n.eventsListeners[r][s](i)}),n},once(e,i,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof i!="function")return n;function s(...r){n.off(e,s),s.__emitterProxy&&delete s.__emitterProxy,i.apply(n,r)}return s.__emitterProxy=i,n.on(e,s,t)},onAny(e,i){const t=this;if(!t.eventsListeners||t.destroyed||typeof e!="function")return t;const n=i?"unshift":"push";return t.eventsAnyListeners.indexOf(e)<0&&t.eventsAnyListeners[n](e),t},offAny(e){const i=this;if(!i.eventsListeners||i.destroyed||!i.eventsAnyListeners)return i;const t=i.eventsAnyListeners.indexOf(e);return t>=0&&i.eventsAnyListeners.splice(t,1),i},off(e,i){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||e.split(" ").forEach(n=>{typeof i>"u"?t.eventsListeners[n]=[]:t.eventsListeners[n]&&t.eventsListeners[n].forEach((s,r)=>{(s===i||s.__emitterProxy&&s.__emitterProxy===i)&&t.eventsListeners[n].splice(r,1)})}),t},emit(...e){const i=this;if(!i.eventsListeners||i.destroyed||!i.eventsListeners)return i;let t,n,s;return typeof e[0]=="string"||Array.isArray(e[0])?(t=e[0],n=e.slice(1,e.length),s=i):(t=e[0].events,n=e[0].data,s=e[0].context||i),n.unshift(s),(Array.isArray(t)?t:t.split(" ")).forEach(o=>{i.eventsAnyListeners&&i.eventsAnyListeners.length&&i.eventsAnyListeners.forEach(l=>{l.apply(s,[o,...n])}),i.eventsListeners&&i.eventsListeners[o]&&i.eventsListeners[o].forEach(l=>{l.apply(s,n)})}),i}};function un(){const e=this;let i,t;const n=e.el;typeof e.params.width<"u"&&e.params.width!==null?i=e.params.width:i=n.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?t=e.params.height:t=n.clientHeight,!(i===0&&e.isHorizontal()||t===0&&e.isVertical())&&(i=i-parseInt(ne(n,"padding-left")||0,10)-parseInt(ne(n,"padding-right")||0,10),t=t-parseInt(ne(n,"padding-top")||0,10)-parseInt(ne(n,"padding-bottom")||0,10),Number.isNaN(i)&&(i=0),Number.isNaN(t)&&(t=0),Object.assign(e,{width:i,height:t,size:e.isHorizontal()?i:t}))}function fn(){const e=this;function i(w,E){return parseFloat(w.getPropertyValue(e.getDirectionLabel(E))||0)}const t=e.params,{wrapperEl:n,slidesEl:s,rtlTranslate:r,wrongRTL:o}=e,l=e.virtual&&t.virtual.enabled,a=l?e.virtual.slides.length:e.slides.length,d=J(s,`.${e.params.slideClass}, swiper-slide`),p=l?e.virtual.slides.length:d.length;let c=[];const v=[],u=[];let m=t.slidesOffsetBefore;typeof m=="function"&&(m=t.slidesOffsetBefore.call(e));let _=t.slidesOffsetAfter;typeof _=="function"&&(_=t.slidesOffsetAfter.call(e));const b=e.snapGrid.length,f=e.slidesGrid.length,h=e.size-m-_;let g=t.spaceBetween,y=-m,T=0,P=0;if(typeof h>"u")return;typeof g=="string"&&g.indexOf("%")>=0?g=parseFloat(g.replace("%",""))/100*h:typeof g=="string"&&(g=parseFloat(g)),e.virtualSize=-g-m-_,d.forEach(w=>{r?w.style.marginLeft="":w.style.marginRight="",w.style.marginBottom="",w.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(ye(n,"--swiper-centered-offset-before",""),ye(n,"--swiper-centered-offset-after",""));const L=t.grid&&t.grid.rows>1&&e.grid;L?e.grid.initSlides(d):e.grid&&e.grid.unsetSlides();let S;const M=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(w=>typeof t.breakpoints[w].slidesPerView<"u").length>0;for(let w=0;w<p;w+=1){S=0;const E=d[w];if(!(E&&(L&&e.grid.updateSlide(w,E,d),ne(E,"display")==="none"))){if(l&&t.slidesPerView==="auto")t.virtual.slidesPerViewAutoSlideSize&&(S=t.virtual.slidesPerViewAutoSlideSize),S&&E&&(t.roundLengths&&(S=Math.floor(S)),E.style[e.getDirectionLabel("width")]=`${S}px`);else if(t.slidesPerView==="auto"){M&&(E.style[e.getDirectionLabel("width")]="");const C=getComputedStyle(E),z=E.style.transform,D=E.style.webkitTransform;if(z&&(E.style.transform="none"),D&&(E.style.webkitTransform="none"),t.roundLengths)S=e.isHorizontal()?Xe(E,"width"):Xe(E,"height");else{const F=i(C,"width"),ve=i(C,"padding-left"),O=i(C,"padding-right"),I=i(C,"margin-left"),$=i(C,"margin-right"),R=C.getPropertyValue("box-sizing");if(R&&R==="border-box")S=F+I+$;else{const{clientWidth:U,offsetWidth:Zt}=E;S=F+ve+O+I+$+(Zt-U)}}z&&(E.style.transform=z),D&&(E.style.webkitTransform=D),t.roundLengths&&(S=Math.floor(S))}else S=(h-(t.slidesPerView-1)*g)/t.slidesPerView,t.roundLengths&&(S=Math.floor(S)),E&&(E.style[e.getDirectionLabel("width")]=`${S}px`);E&&(E.swiperSlideSize=S),u.push(S),t.centeredSlides?(y=y+S/2+T/2+g,T===0&&w!==0&&(y=y-h/2-g),w===0&&(y=y-h/2-g),Math.abs(y)<1/1e3&&(y=0),t.roundLengths&&(y=Math.floor(y)),P%t.slidesPerGroup===0&&c.push(y),v.push(y)):(t.roundLengths&&(y=Math.floor(y)),(P-Math.min(e.params.slidesPerGroupSkip,P))%e.params.slidesPerGroup===0&&c.push(y),v.push(y),y=y+S+g),e.virtualSize+=S+g,T=S,P+=1}}if(e.virtualSize=Math.max(e.virtualSize,h)+_,r&&o&&(t.effect==="slide"||t.effect==="coverflow")&&(n.style.width=`${e.virtualSize+g}px`),t.setWrapperSize&&(n.style[e.getDirectionLabel("width")]=`${e.virtualSize+g}px`),L&&e.grid.updateWrapperSize(S,c),!t.centeredSlides){const w=[];for(let E=0;E<c.length;E+=1){let C=c[E];t.roundLengths&&(C=Math.floor(C)),c[E]<=e.virtualSize-h&&w.push(C)}c=w,Math.floor(e.virtualSize-h)-Math.floor(c[c.length-1])>1&&c.push(e.virtualSize-h)}if(l&&t.loop){const w=u[0]+g;if(t.slidesPerGroup>1){const E=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/t.slidesPerGroup),C=w*t.slidesPerGroup;for(let z=0;z<E;z+=1)c.push(c[c.length-1]+C)}for(let E=0;E<e.virtual.slidesBefore+e.virtual.slidesAfter;E+=1)t.slidesPerGroup===1&&c.push(c[c.length-1]+w),v.push(v[v.length-1]+w),e.virtualSize+=w}if(c.length===0&&(c=[0]),g!==0){const w=e.isHorizontal()&&r?"marginLeft":e.getDirectionLabel("marginRight");d.filter((E,C)=>!t.cssMode||t.loop?!0:C!==d.length-1).forEach(E=>{E.style[w]=`${g}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let w=0;u.forEach(C=>{w+=C+(g||0)}),w-=g;const E=w>h?w-h:0;c=c.map(C=>C<=0?-m:C>E?E+_:C)}if(t.centerInsufficientSlides){let w=0;u.forEach(C=>{w+=C+(g||0)}),w-=g;const E=(m||0)+(_||0);if(w+E<h){const C=(h-w-E)/2;c.forEach((z,D)=>{c[D]=z-C}),v.forEach((z,D)=>{v[D]=z+C})}}if(Object.assign(e,{slides:d,snapGrid:c,slidesGrid:v,slidesSizesGrid:u}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){ye(n,"--swiper-centered-offset-before",`${-c[0]}px`),ye(n,"--swiper-centered-offset-after",`${e.size/2-u[u.length-1]/2}px`);const w=-e.snapGrid[0],E=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(C=>C+w),e.slidesGrid=e.slidesGrid.map(C=>C+E)}if(p!==a&&e.emit("slidesLengthChange"),c.length!==b&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),v.length!==f&&e.emit("slidesGridLengthChange"),t.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const w=`${t.containerModifierClass}backface-hidden`,E=e.el.classList.contains(w);p<=t.maxBackfaceHiddenSlides?E||e.el.classList.add(w):E&&e.el.classList.remove(w)}}function pn(e){const i=this,t=[],n=i.virtual&&i.params.virtual.enabled;let s=0,r;typeof e=="number"?i.setTransition(e):e===!0&&i.setTransition(i.params.speed);const o=l=>n?i.slides[i.getSlideIndexByData(l)]:i.slides[l];if(i.params.slidesPerView!=="auto"&&i.params.slidesPerView>1)if(i.params.centeredSlides)(i.visibleSlides||[]).forEach(l=>{t.push(l)});else for(r=0;r<Math.ceil(i.params.slidesPerView);r+=1){const l=i.activeIndex+r;if(l>i.slides.length&&!n)break;t.push(o(l))}else t.push(o(i.activeIndex));for(r=0;r<t.length;r+=1)if(typeof t[r]<"u"){const l=t[r].offsetHeight;s=l>s?l:s}(s||s===0)&&(i.wrapperEl.style.height=`${s}px`)}function hn(){const e=this,i=e.slides,t=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let n=0;n<i.length;n+=1)i[n].swiperSlideOffset=(e.isHorizontal()?i[n].offsetLeft:i[n].offsetTop)-t-e.cssOverflowAdjustment()}const gt=(e,i,t)=>{i&&!e.classList.contains(t)?e.classList.add(t):!i&&e.classList.contains(t)&&e.classList.remove(t)};function mn(e=this&&this.translate||0){const i=this,t=i.params,{slides:n,rtlTranslate:s,snapGrid:r}=i;if(n.length===0)return;typeof n[0].swiperSlideOffset>"u"&&i.updateSlidesOffset();let o=-e;s&&(o=e),i.visibleSlidesIndexes=[],i.visibleSlides=[];let l=t.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*i.size:typeof l=="string"&&(l=parseFloat(l));for(let a=0;a<n.length;a+=1){const d=n[a];let p=d.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(p-=n[0].swiperSlideOffset);const c=(o+(t.centeredSlides?i.minTranslate():0)-p)/(d.swiperSlideSize+l),v=(o-r[0]+(t.centeredSlides?i.minTranslate():0)-p)/(d.swiperSlideSize+l),u=-(o-p),m=u+i.slidesSizesGrid[a],_=u>=0&&u<=i.size-i.slidesSizesGrid[a],b=u>=0&&u<i.size-1||m>1&&m<=i.size||u<=0&&m>=i.size;b&&(i.visibleSlides.push(d),i.visibleSlidesIndexes.push(a)),gt(d,b,t.slideVisibleClass),gt(d,_,t.slideFullyVisibleClass),d.progress=s?-c:c,d.originalProgress=s?-v:v}}function gn(e){const i=this;if(typeof e>"u"){const p=i.rtlTranslate?-1:1;e=i&&i.translate&&i.translate*p||0}const t=i.params,n=i.maxTranslate()-i.minTranslate();let{progress:s,isBeginning:r,isEnd:o,progressLoop:l}=i;const a=r,d=o;if(n===0)s=0,r=!0,o=!0;else{s=(e-i.minTranslate())/n;const p=Math.abs(e-i.minTranslate())<1,c=Math.abs(e-i.maxTranslate())<1;r=p||s<=0,o=c||s>=1,p&&(s=0),c&&(s=1)}if(t.loop){const p=i.getSlideIndexByData(0),c=i.getSlideIndexByData(i.slides.length-1),v=i.slidesGrid[p],u=i.slidesGrid[c],m=i.slidesGrid[i.slidesGrid.length-1],_=Math.abs(e);_>=v?l=(_-v)/m:l=(_+m-u)/m,l>1&&(l-=1)}Object.assign(i,{progress:s,progressLoop:l,isBeginning:r,isEnd:o}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&i.updateSlidesProgress(e),r&&!a&&i.emit("reachBeginning toEdge"),o&&!d&&i.emit("reachEnd toEdge"),(a&&!r||d&&!o)&&i.emit("fromEdge"),i.emit("progress",s)}const De=(e,i,t)=>{i&&!e.classList.contains(t)?e.classList.add(t):!i&&e.classList.contains(t)&&e.classList.remove(t)};function vn(){const e=this,{slides:i,params:t,slidesEl:n,activeIndex:s}=e,r=e.virtual&&t.virtual.enabled,o=e.grid&&t.grid&&t.grid.rows>1,l=c=>J(n,`.${t.slideClass}${c}, swiper-slide${c}`)[0];let a,d,p;if(r)if(t.loop){let c=s-e.virtual.slidesBefore;c<0&&(c=e.virtual.slides.length+c),c>=e.virtual.slides.length&&(c-=e.virtual.slides.length),a=l(`[data-swiper-slide-index="${c}"]`)}else a=l(`[data-swiper-slide-index="${s}"]`);else o?(a=i.find(c=>c.column===s),p=i.find(c=>c.column===s+1),d=i.find(c=>c.column===s-1)):a=i[s];a&&(o||(p=sn(a,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!p&&(p=i[0]),d=nn(a,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!d===0&&(d=i[i.length-1]))),i.forEach(c=>{De(c,c===a,t.slideActiveClass),De(c,c===p,t.slideNextClass),De(c,c===d,t.slidePrevClass)}),e.emitSlidesClasses()}const xe=(e,i)=>{if(!e||e.destroyed||!e.params)return;const t=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,n=i.closest(t());if(n){let s=n.querySelector(`.${e.params.lazyPreloaderClass}`);!s&&e.isElement&&(n.shadowRoot?s=n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{n.shadowRoot&&(s=n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),s&&s.remove())})),s&&s.remove()}},Re=(e,i)=>{if(!e.slides[i])return;const t=e.slides[i].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},Qe=e=>{if(!e||e.destroyed||!e.params)return;let i=e.params.lazyPreloadPrevNext;const t=e.slides.length;if(!t||!i||i<0)return;i=Math.min(i,t);const n=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),s=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const o=s,l=[o-i];l.push(...Array.from({length:i}).map((a,d)=>o+n+d)),e.slides.forEach((a,d)=>{l.includes(a.column)&&Re(e,d)});return}const r=s+n-1;if(e.params.rewind||e.params.loop)for(let o=s-i;o<=r+i;o+=1){const l=(o%t+t)%t;(l<s||l>r)&&Re(e,l)}else for(let o=Math.max(s-i,0);o<=Math.min(r+i,t-1);o+=1)o!==s&&(o>r||o<s)&&Re(e,o)};function _n(e){const{slidesGrid:i,params:t}=e,n=e.rtlTranslate?e.translate:-e.translate;let s;for(let r=0;r<i.length;r+=1)typeof i[r+1]<"u"?n>=i[r]&&n<i[r+1]-(i[r+1]-i[r])/2?s=r:n>=i[r]&&n<i[r+1]&&(s=r+1):n>=i[r]&&(s=r);return t.normalizeSlideIndex&&(s<0||typeof s>"u")&&(s=0),s}function yn(e){const i=this,t=i.rtlTranslate?i.translate:-i.translate,{snapGrid:n,params:s,activeIndex:r,realIndex:o,snapIndex:l}=i;let a=e,d;const p=u=>{let m=u-i.virtual.slidesBefore;return m<0&&(m=i.virtual.slides.length+m),m>=i.virtual.slides.length&&(m-=i.virtual.slides.length),m};if(typeof a>"u"&&(a=_n(i)),n.indexOf(t)>=0)d=n.indexOf(t);else{const u=Math.min(s.slidesPerGroupSkip,a);d=u+Math.floor((a-u)/s.slidesPerGroup)}if(d>=n.length&&(d=n.length-1),a===r&&!i.params.loop){d!==l&&(i.snapIndex=d,i.emit("snapIndexChange"));return}if(a===r&&i.params.loop&&i.virtual&&i.params.virtual.enabled){i.realIndex=p(a);return}const c=i.grid&&s.grid&&s.grid.rows>1;let v;if(i.virtual&&s.virtual.enabled&&s.loop)v=p(a);else if(c){const u=i.slides.find(_=>_.column===a);let m=parseInt(u.getAttribute("data-swiper-slide-index"),10);Number.isNaN(m)&&(m=Math.max(i.slides.indexOf(u),0)),v=Math.floor(m/s.grid.rows)}else if(i.slides[a]){const u=i.slides[a].getAttribute("data-swiper-slide-index");u?v=parseInt(u,10):v=a}else v=a;Object.assign(i,{previousSnapIndex:l,snapIndex:d,previousRealIndex:o,realIndex:v,previousIndex:r,activeIndex:a}),i.initialized&&Qe(i),i.emit("activeIndexChange"),i.emit("snapIndexChange"),(i.initialized||i.params.runCallbacksOnInit)&&(o!==v&&i.emit("realIndexChange"),i.emit("slideChange"))}function bn(e,i){const t=this,n=t.params;let s=e.closest(`.${n.slideClass}, swiper-slide`);!s&&t.isElement&&i&&i.length>1&&i.includes(e)&&[...i.slice(i.indexOf(e)+1,i.length)].forEach(l=>{!s&&l.matches&&l.matches(`.${n.slideClass}, swiper-slide`)&&(s=l)});let r=!1,o;if(s){for(let l=0;l<t.slides.length;l+=1)if(t.slides[l]===s){r=!0,o=l;break}}if(s&&r)t.clickedSlide=s,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(s.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=o;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}n.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var Sn={updateSize:un,updateSlides:fn,updateAutoHeight:pn,updateSlidesOffset:hn,updateSlidesProgress:mn,updateProgress:gn,updateSlidesClasses:vn,updateActiveIndex:yn,updateClickedSlide:bn};function wn(e=this.isHorizontal()?"x":"y"){const i=this,{params:t,rtlTranslate:n,translate:s,wrapperEl:r}=i;if(t.virtualTranslate)return n?-s:s;if(t.cssMode)return s;let o=Ji(r,e);return o+=i.cssOverflowAdjustment(),n&&(o=-o),o||0}function Tn(e,i){const t=this,{rtlTranslate:n,params:s,wrapperEl:r,progress:o}=t;let l=0,a=0;const d=0;t.isHorizontal()?l=n?-e:e:a=e,s.roundLengths&&(l=Math.floor(l),a=Math.floor(a)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?l:a,s.cssMode?r[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-l:-a:s.virtualTranslate||(t.isHorizontal()?l-=t.cssOverflowAdjustment():a-=t.cssOverflowAdjustment(),r.style.transform=`translate3d(${l}px, ${a}px, ${d}px)`);let p;const c=t.maxTranslate()-t.minTranslate();c===0?p=0:p=(e-t.minTranslate())/c,p!==o&&t.updateProgress(e),t.emit("setTranslate",t.translate,i)}function En(){return-this.snapGrid[0]}function xn(){return-this.snapGrid[this.snapGrid.length-1]}function Cn(e=0,i=this.params.speed,t=!0,n=!0,s){const r=this,{params:o,wrapperEl:l}=r;if(r.animating&&o.preventInteractionOnTransition)return!1;const a=r.minTranslate(),d=r.maxTranslate();let p;if(n&&e>a?p=a:n&&e<d?p=d:p=e,r.updateProgress(p),o.cssMode){const c=r.isHorizontal();if(i===0)l[c?"scrollLeft":"scrollTop"]=-p;else{if(!r.support.smoothScroll)return qt({swiper:r,targetPosition:-p,side:c?"left":"top"}),!0;l.scrollTo({[c?"left":"top"]:-p,behavior:"smooth"})}return!0}return i===0?(r.setTransition(0),r.setTranslate(p),t&&(r.emit("beforeTransitionStart",i,s),r.emit("transitionEnd"))):(r.setTransition(i),r.setTranslate(p),t&&(r.emit("beforeTransitionStart",i,s),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(v){!r||r.destroyed||v.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,r.animating=!1,t&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}var Mn={getTranslate:wn,setTranslate:Tn,minTranslate:En,maxTranslate:xn,translateTo:Cn};function Ln(e,i){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${e}ms`,t.wrapperEl.style.transitionDelay=e===0?"0ms":""),t.emit("setTransition",e,i)}function Kt({swiper:e,runCallbacks:i,direction:t,step:n}){const{activeIndex:s,previousIndex:r}=e;let o=t;o||(s>r?o="next":s<r?o="prev":o="reset"),e.emit(`transition${n}`),i&&o==="reset"?e.emit(`slideResetTransition${n}`):i&&s!==r&&(e.emit(`slideChangeTransition${n}`),o==="next"?e.emit(`slideNextTransition${n}`):e.emit(`slidePrevTransition${n}`))}function Pn(e=!0,i){const t=this,{params:n}=t;n.cssMode||(n.autoHeight&&t.updateAutoHeight(),Kt({swiper:t,runCallbacks:e,direction:i,step:"Start"}))}function In(e=!0,i){const t=this,{params:n}=t;t.animating=!1,!n.cssMode&&(t.setTransition(0),Kt({swiper:t,runCallbacks:e,direction:i,step:"End"}))}var An={setTransition:Ln,transitionStart:Pn,transitionEnd:In};function kn(e=0,i,t=!0,n,s){typeof e=="string"&&(e=parseInt(e,10));const r=this;let o=e;o<0&&(o=0);const{params:l,snapGrid:a,slidesGrid:d,previousIndex:p,activeIndex:c,rtlTranslate:v,wrapperEl:u,enabled:m}=r;if(!m&&!n&&!s||r.destroyed||r.animating&&l.preventInteractionOnTransition)return!1;typeof i>"u"&&(i=r.params.speed);const _=Math.min(r.params.slidesPerGroupSkip,o);let b=_+Math.floor((o-_)/r.params.slidesPerGroup);b>=a.length&&(b=a.length-1);const f=-a[b];if(l.normalizeSlideIndex)for(let L=0;L<d.length;L+=1){const S=-Math.floor(f*100),M=Math.floor(d[L]*100),w=Math.floor(d[L+1]*100);typeof d[L+1]<"u"?S>=M&&S<w-(w-M)/2?o=L:S>=M&&S<w&&(o=L+1):S>=M&&(o=L)}if(r.initialized&&o!==c&&(!r.allowSlideNext&&(v?f>r.translate&&f>r.minTranslate():f<r.translate&&f<r.minTranslate())||!r.allowSlidePrev&&f>r.translate&&f>r.maxTranslate()&&(c||0)!==o))return!1;o!==(p||0)&&t&&r.emit("beforeSlideChangeStart"),r.updateProgress(f);let h;o>c?h="next":o<c?h="prev":h="reset";const g=r.virtual&&r.params.virtual.enabled;if(!(g&&s)&&(v&&-f===r.translate||!v&&f===r.translate))return r.updateActiveIndex(o),l.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),l.effect!=="slide"&&r.setTranslate(f),h!=="reset"&&(r.transitionStart(t,h),r.transitionEnd(t,h)),!1;if(l.cssMode){const L=r.isHorizontal(),S=v?f:-f;if(i===0)g&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),g&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{u[L?"scrollLeft":"scrollTop"]=S})):u[L?"scrollLeft":"scrollTop"]=S,g&&requestAnimationFrame(()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1});else{if(!r.support.smoothScroll)return qt({swiper:r,targetPosition:S,side:L?"left":"top"}),!0;u.scrollTo({[L?"left":"top"]:S,behavior:"smooth"})}return!0}const P=Xt().isSafari;return g&&!s&&P&&r.isElement&&r.virtual.update(!1,!1,o),r.setTransition(i),r.setTranslate(f),r.updateActiveIndex(o),r.updateSlidesClasses(),r.emit("beforeTransitionStart",i,n),r.transitionStart(t,h),i===0?r.transitionEnd(t,h):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(S){!r||r.destroyed||S.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(t,h))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0}function On(e=0,i,t=!0,n){typeof e=="string"&&(e=parseInt(e,10));const s=this;if(s.destroyed)return;typeof i>"u"&&(i=s.params.speed);const r=s.grid&&s.params.grid&&s.params.grid.rows>1;let o=e;if(s.params.loop)if(s.virtual&&s.params.virtual.enabled)o=o+s.virtual.slidesBefore;else{let l;if(r){const _=o*s.params.grid.rows;l=s.slides.find(b=>b.getAttribute("data-swiper-slide-index")*1===_).column}else l=s.getSlideIndexByData(o);const a=r?Math.ceil(s.slides.length/s.params.grid.rows):s.slides.length,{centeredSlides:d,slidesOffsetBefore:p,slidesOffsetAfter:c}=s.params,v=d||!!p||!!c;let u=s.params.slidesPerView;u==="auto"?u=s.slidesPerViewDynamic():(u=Math.ceil(parseFloat(s.params.slidesPerView,10)),v&&u%2===0&&(u=u+1));let m=a-l<u;if(v&&(m=m||l<Math.ceil(u/2)),n&&v&&s.params.slidesPerView!=="auto"&&!r&&(m=!1),m){const _=v?l<s.activeIndex?"prev":"next":l-s.activeIndex-1<s.params.slidesPerView?"next":"prev";s.loopFix({direction:_,slideTo:!0,activeSlideIndex:_==="next"?l+1:l-a+1,slideRealIndex:_==="next"?s.realIndex:void 0})}if(r){const _=o*s.params.grid.rows;o=s.slides.find(b=>b.getAttribute("data-swiper-slide-index")*1===_).column}else o=s.getSlideIndexByData(o)}return requestAnimationFrame(()=>{s.slideTo(o,i,t,n)}),s}function zn(e,i=!0,t){const n=this,{enabled:s,params:r,animating:o}=n;if(!s||n.destroyed)return n;typeof e>"u"&&(e=n.params.speed);let l=r.slidesPerGroup;r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(l=Math.max(n.slidesPerViewDynamic("current",!0),1));const a=n.activeIndex<r.slidesPerGroupSkip?1:l,d=n.virtual&&r.virtual.enabled;if(r.loop){if(o&&!d&&r.loopPreventsSliding)return!1;if(n.loopFix({direction:"next"}),n._clientLeft=n.wrapperEl.clientLeft,n.activeIndex===n.slides.length-1&&r.cssMode)return requestAnimationFrame(()=>{n.slideTo(n.activeIndex+a,e,i,t)}),!0}return r.rewind&&n.isEnd?n.slideTo(0,e,i,t):n.slideTo(n.activeIndex+a,e,i,t)}function $n(e,i=!0,t){const n=this,{params:s,snapGrid:r,slidesGrid:o,rtlTranslate:l,enabled:a,animating:d}=n;if(!a||n.destroyed)return n;typeof e>"u"&&(e=n.params.speed);const p=n.virtual&&s.virtual.enabled;if(s.loop){if(d&&!p&&s.loopPreventsSliding)return!1;n.loopFix({direction:"prev"}),n._clientLeft=n.wrapperEl.clientLeft}const c=l?n.translate:-n.translate;function v(h){return h<0?-Math.floor(Math.abs(h)):Math.floor(h)}const u=v(c),m=r.map(h=>v(h)),_=s.freeMode&&s.freeMode.enabled;let b=r[m.indexOf(u)-1];if(typeof b>"u"&&(s.cssMode||_)){let h;r.forEach((g,y)=>{u>=g&&(h=y)}),typeof h<"u"&&(b=_?r[h]:r[h>0?h-1:h])}let f=0;if(typeof b<"u"&&(f=o.indexOf(b),f<0&&(f=n.activeIndex-1),s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(f=f-n.slidesPerViewDynamic("previous",!0)+1,f=Math.max(f,0))),s.rewind&&n.isBeginning){const h=n.params.virtual&&n.params.virtual.enabled&&n.virtual?n.virtual.slides.length-1:n.slides.length-1;return n.slideTo(h,e,i,t)}else if(s.loop&&n.activeIndex===0&&s.cssMode)return requestAnimationFrame(()=>{n.slideTo(f,e,i,t)}),!0;return n.slideTo(f,e,i,t)}function Dn(e,i=!0,t){const n=this;if(!n.destroyed)return typeof e>"u"&&(e=n.params.speed),n.slideTo(n.activeIndex,e,i,t)}function Rn(e,i=!0,t,n=.5){const s=this;if(s.destroyed)return;typeof e>"u"&&(e=s.params.speed);let r=s.activeIndex;const o=Math.min(s.params.slidesPerGroupSkip,r),l=o+Math.floor((r-o)/s.params.slidesPerGroup),a=s.rtlTranslate?s.translate:-s.translate;if(a>=s.snapGrid[l]){const d=s.snapGrid[l],p=s.snapGrid[l+1];a-d>(p-d)*n&&(r+=s.params.slidesPerGroup)}else{const d=s.snapGrid[l-1],p=s.snapGrid[l];a-d<=(p-d)*n&&(r-=s.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,s.slidesGrid.length-1),s.slideTo(r,e,i,t)}function Fn(){const e=this;if(e.destroyed)return;const{params:i,slidesEl:t}=e,n=i.slidesPerView==="auto"?e.slidesPerViewDynamic():i.slidesPerView;let s=e.getSlideIndexWhenGrid(e.clickedIndex),r;const o=e.isElement?"swiper-slide":`.${i.slideClass}`,l=e.grid&&e.params.grid&&e.params.grid.rows>1;if(i.loop){if(e.animating)return;r=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),i.centeredSlides?e.slideToLoop(r):s>(l?(e.slides.length-n)/2-(e.params.grid.rows-1):e.slides.length-n)?(e.loopFix(),s=e.getSlideIndex(J(t,`${o}[data-swiper-slide-index="${r}"]`)[0]),jt(()=>{e.slideTo(s)})):e.slideTo(s)}else e.slideTo(s)}var Hn={slideTo:kn,slideToLoop:On,slideNext:zn,slidePrev:$n,slideReset:Dn,slideToClosest:Rn,slideToClickedSlide:Fn};function Bn(e,i){const t=this,{params:n,slidesEl:s}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;const r=()=>{J(s,`.${n.slideClass}, swiper-slide`).forEach((m,_)=>{m.setAttribute("data-swiper-slide-index",_)})},o=()=>{const u=J(s,`.${n.slideBlankClass}`);u.forEach(m=>{m.remove()}),u.length>0&&(t.recalcSlides(),t.updateSlides())},l=t.grid&&n.grid&&n.grid.rows>1;n.loopAddBlankSlides&&(n.slidesPerGroup>1||l)&&o();const a=n.slidesPerGroup*(l?n.grid.rows:1),d=t.slides.length%a!==0,p=l&&t.slides.length%n.grid.rows!==0,c=u=>{for(let m=0;m<u;m+=1){const _=t.isElement?Ie("swiper-slide",[n.slideBlankClass]):Ie("div",[n.slideClass,n.slideBlankClass]);t.slidesEl.append(_)}};if(d){if(n.loopAddBlankSlides){const u=a-t.slides.length%a;c(u),t.recalcSlides(),t.updateSlides()}else Pe("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else if(p){if(n.loopAddBlankSlides){const u=n.grid.rows-t.slides.length%n.grid.rows;c(u),t.recalcSlides(),t.updateSlides()}else Pe("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else r();const v=n.centeredSlides||!!n.slidesOffsetBefore||!!n.slidesOffsetAfter;t.loopFix({slideRealIndex:e,direction:v?void 0:"next",initial:i})}function Gn({slideRealIndex:e,slideTo:i=!0,direction:t,setTranslate:n,activeSlideIndex:s,initial:r,byController:o,byMousewheel:l}={}){const a=this;if(!a.params.loop)return;a.emit("beforeLoopFix");const{slides:d,allowSlidePrev:p,allowSlideNext:c,slidesEl:v,params:u}=a,{centeredSlides:m,slidesOffsetBefore:_,slidesOffsetAfter:b,initialSlide:f}=u,h=m||!!_||!!b;if(a.allowSlidePrev=!0,a.allowSlideNext=!0,a.virtual&&u.virtual.enabled){i&&(!h&&a.snapIndex===0?a.slideTo(a.virtual.slides.length,0,!1,!0):h&&a.snapIndex<u.slidesPerView?a.slideTo(a.virtual.slides.length+a.snapIndex,0,!1,!0):a.snapIndex===a.snapGrid.length-1&&a.slideTo(a.virtual.slidesBefore,0,!1,!0)),a.allowSlidePrev=p,a.allowSlideNext=c,a.emit("loopFix");return}let g=u.slidesPerView;g==="auto"?g=a.slidesPerViewDynamic():(g=Math.ceil(parseFloat(u.slidesPerView,10)),h&&g%2===0&&(g=g+1));const y=u.slidesPerGroupAuto?g:u.slidesPerGroup;let T=h?Math.max(y,Math.ceil(g/2)):y;T%y!==0&&(T+=y-T%y),T+=u.loopAdditionalSlides,a.loopedSlides=T;const P=a.grid&&u.grid&&u.grid.rows>1;d.length<g+T||a.params.effect==="cards"&&d.length<g+T*2?Pe("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):P&&u.grid.fill==="row"&&Pe("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const L=[],S=[],M=P?Math.ceil(d.length/u.grid.rows):d.length,w=r&&M-f<g&&!h;let E=w?f:a.activeIndex;typeof s>"u"?s=a.getSlideIndex(d.find(I=>I.classList.contains(u.slideActiveClass))):E=s;const C=t==="next"||!t,z=t==="prev"||!t;let D=0,F=0;const O=(P?d[s].column:s)+(h&&typeof n>"u"?-g/2+.5:0);if(O<T){D=Math.max(T-O,y);for(let I=0;I<T-O;I+=1){const $=I-Math.floor(I/M)*M;if(P){const R=M-$-1;for(let U=d.length-1;U>=0;U-=1)d[U].column===R&&L.push(U)}else L.push(M-$-1)}}else if(O+g>M-T){F=Math.max(O-(M-T*2),y),w&&(F=Math.max(F,g-M+f+1));for(let I=0;I<F;I+=1){const $=I-Math.floor(I/M)*M;P?d.forEach((R,U)=>{R.column===$&&S.push(U)}):S.push($)}}if(a.__preventObserver__=!0,requestAnimationFrame(()=>{a.__preventObserver__=!1}),a.params.effect==="cards"&&d.length<g+T*2&&(S.includes(s)&&S.splice(S.indexOf(s),1),L.includes(s)&&L.splice(L.indexOf(s),1)),z&&L.forEach(I=>{d[I].swiperLoopMoveDOM=!0,v.prepend(d[I]),d[I].swiperLoopMoveDOM=!1}),C&&S.forEach(I=>{d[I].swiperLoopMoveDOM=!0,v.append(d[I]),d[I].swiperLoopMoveDOM=!1}),a.recalcSlides(),u.slidesPerView==="auto"?a.updateSlides():P&&(L.length>0&&z||S.length>0&&C)&&a.slides.forEach((I,$)=>{a.grid.updateSlide($,I,a.slides)}),u.watchSlidesProgress&&a.updateSlidesOffset(),i){if(L.length>0&&z){if(typeof e>"u"){const I=a.slidesGrid[E],R=a.slidesGrid[E+D]-I;l?a.setTranslate(a.translate-R):(a.slideTo(E+Math.ceil(D),0,!1,!0),n&&(a.touchEventsData.startTranslate=a.touchEventsData.startTranslate-R,a.touchEventsData.currentTranslate=a.touchEventsData.currentTranslate-R))}else if(n){const I=P?L.length/u.grid.rows:L.length;a.slideTo(a.activeIndex+I,0,!1,!0),a.touchEventsData.currentTranslate=a.translate}}else if(S.length>0&&C)if(typeof e>"u"){const I=a.slidesGrid[E],R=a.slidesGrid[E-F]-I;l?a.setTranslate(a.translate-R):(a.slideTo(E-F,0,!1,!0),n&&(a.touchEventsData.startTranslate=a.touchEventsData.startTranslate-R,a.touchEventsData.currentTranslate=a.touchEventsData.currentTranslate-R))}else{const I=P?S.length/u.grid.rows:S.length;a.slideTo(a.activeIndex-I,0,!1,!0)}}if(a.allowSlidePrev=p,a.allowSlideNext=c,a.controller&&a.controller.control&&!o){const I={slideRealIndex:e,direction:t,setTranslate:n,activeSlideIndex:s,byController:!0};Array.isArray(a.controller.control)?a.controller.control.forEach($=>{!$.destroyed&&$.params.loop&&$.loopFix({...I,slideTo:$.params.slidesPerView===u.slidesPerView?i:!1})}):a.controller.control instanceof a.constructor&&a.controller.control.params.loop&&a.controller.control.loopFix({...I,slideTo:a.controller.control.params.slidesPerView===u.slidesPerView?i:!1})}a.emit("loopFix")}function Vn(){const e=this,{params:i,slidesEl:t}=e;if(!i.loop||!t||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const n=[];e.slides.forEach(s=>{const r=typeof s.swiperSlideIndex>"u"?s.getAttribute("data-swiper-slide-index")*1:s.swiperSlideIndex;n[r]=s}),e.slides.forEach(s=>{s.removeAttribute("data-swiper-slide-index")}),n.forEach(s=>{t.append(s)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var Nn={loopCreate:Bn,loopFix:Gn,loopDestroy:Vn};function jn(e){const i=this;if(!i.params.simulateTouch||i.params.watchOverflow&&i.isLocked||i.params.cssMode)return;const t=i.params.touchEventsTarget==="container"?i.el:i.wrapperEl;i.isElement&&(i.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=e?"grabbing":"grab",i.isElement&&requestAnimationFrame(()=>{i.__preventObserver__=!1})}function qn(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var Wn={setGrabCursor:jn,unsetGrabCursor:qn};function Un(e,i=this){function t(n){if(!n||n===Z()||n===V())return null;n.assignedSlot&&(n=n.assignedSlot);const s=n.closest(e);return!s&&!n.getRootNode?null:s||t(n.getRootNode().host)}return t(i)}function vt(e,i,t){const n=V(),{params:s}=e,r=s.edgeSwipeDetection,o=s.edgeSwipeThreshold;return r&&(t<=o||t>=n.innerWidth-o)?r==="prevent"?(i.preventDefault(),!0):!1:!0}function Yn(e){const i=this,t=Z();let n=e;n.originalEvent&&(n=n.originalEvent);const s=i.touchEventsData;if(n.type==="pointerdown"){if(s.pointerId!==null&&s.pointerId!==n.pointerId)return;s.pointerId=n.pointerId}else n.type==="touchstart"&&n.targetTouches.length===1&&(s.touchId=n.targetTouches[0].identifier);if(n.type==="touchstart"){vt(i,n,n.targetTouches[0].pageX);return}const{params:r,touches:o,enabled:l}=i;if(!l||!r.simulateTouch&&n.pointerType==="mouse"||i.animating&&r.preventInteractionOnTransition)return;!i.animating&&r.cssMode&&r.loop&&i.loopFix();let a=n.target;if(r.touchEventsTarget==="wrapper"&&!tn(a,i.wrapperEl)||"which"in n&&n.which===3||"button"in n&&n.button>0||s.isTouched&&s.isMoved)return;const d=!!r.noSwipingClass&&r.noSwipingClass!=="",p=n.composedPath?n.composedPath():n.path;d&&n.target&&n.target.shadowRoot&&p&&(a=p[0]);const c=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,v=!!(n.target&&n.target.shadowRoot);if(r.noSwiping&&(v?Un(c,a):a.closest(c))){i.allowClick=!0;return}if(r.swipeHandler&&!a.closest(r.swipeHandler))return;o.currentX=n.pageX,o.currentY=n.pageY;const u=o.currentX,m=o.currentY;if(!vt(i,n,u))return;Object.assign(s,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=u,o.startY=m,s.touchStartTime=Le(),i.allowClick=!0,i.updateSize(),i.swipeDirection=void 0,r.threshold>0&&(s.allowThresholdMove=!1);let _=!0;a.matches(s.focusableElements)&&(_=!1,a.nodeName==="SELECT"&&(s.isTouched=!1)),t.activeElement&&t.activeElement.matches(s.focusableElements)&&t.activeElement!==a&&(n.pointerType==="mouse"||n.pointerType!=="mouse"&&!a.matches(s.focusableElements))&&t.activeElement.blur();const b=_&&i.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||b)&&!a.isContentEditable&&n.preventDefault(),r.freeMode&&r.freeMode.enabled&&i.freeMode&&i.animating&&!r.cssMode&&i.freeMode.onTouchStart(),i.emit("touchStart",n)}function Xn(e){const i=Z(),t=this,n=t.touchEventsData,{params:s,touches:r,rtlTranslate:o,enabled:l}=t;if(!l||!s.simulateTouch&&e.pointerType==="mouse")return;let a=e;if(a.originalEvent&&(a=a.originalEvent),a.type==="pointermove"&&(n.touchId!==null||a.pointerId!==n.pointerId))return;let d;if(a.type==="touchmove"){if(d=[...a.changedTouches].find(T=>T.identifier===n.touchId),!d||d.identifier!==n.touchId)return}else d=a;if(!n.isTouched){n.startMoving&&n.isScrolling&&t.emit("touchMoveOpposite",a);return}const p=d.pageX,c=d.pageY;if(a.preventedByNestedSwiper){r.startX=p,r.startY=c;return}if(!t.allowTouchMove){a.target.matches(n.focusableElements)||(t.allowClick=!1),n.isTouched&&(Object.assign(r,{startX:p,startY:c,currentX:p,currentY:c}),n.touchStartTime=Le());return}if(s.touchReleaseOnEdges&&!s.loop)if(t.isVertical()){if(c<r.startY&&t.translate<=t.maxTranslate()||c>r.startY&&t.translate>=t.minTranslate()){n.isTouched=!1,n.isMoved=!1;return}}else{if(o&&(p>r.startX&&-t.translate<=t.maxTranslate()||p<r.startX&&-t.translate>=t.minTranslate()))return;if(!o&&(p<r.startX&&t.translate<=t.maxTranslate()||p>r.startX&&t.translate>=t.minTranslate()))return}if(i.activeElement&&i.activeElement.matches(n.focusableElements)&&i.activeElement!==a.target&&a.pointerType!=="mouse"&&i.activeElement.blur(),i.activeElement&&a.target===i.activeElement&&a.target.matches(n.focusableElements)){n.isMoved=!0,t.allowClick=!1;return}n.allowTouchCallbacks&&t.emit("touchMove",a),r.previousX=r.currentX,r.previousY=r.currentY,r.currentX=p,r.currentY=c;const v=r.currentX-r.startX,u=r.currentY-r.startY;if(t.params.threshold&&Math.sqrt(v**2+u**2)<t.params.threshold)return;if(typeof n.isScrolling>"u"){let T;t.isHorizontal()&&r.currentY===r.startY||t.isVertical()&&r.currentX===r.startX?n.isScrolling=!1:v*v+u*u>=25&&(T=Math.atan2(Math.abs(u),Math.abs(v))*180/Math.PI,n.isScrolling=t.isHorizontal()?T>s.touchAngle:90-T>s.touchAngle)}if(n.isScrolling&&t.emit("touchMoveOpposite",a),typeof n.startMoving>"u"&&(r.currentX!==r.startX||r.currentY!==r.startY)&&(n.startMoving=!0),n.isScrolling||a.type==="touchmove"&&n.preventTouchMoveFromPointerMove){n.isTouched=!1;return}if(!n.startMoving)return;t.allowClick=!1,!s.cssMode&&a.cancelable&&a.preventDefault(),s.touchMoveStopPropagation&&!s.nested&&a.stopPropagation();let m=t.isHorizontal()?v:u,_=t.isHorizontal()?r.currentX-r.previousX:r.currentY-r.previousY;s.oneWayMovement&&(m=Math.abs(m)*(o?1:-1),_=Math.abs(_)*(o?1:-1)),r.diff=m,m*=s.touchRatio,o&&(m=-m,_=-_);const b=t.touchesDirection;t.swipeDirection=m>0?"prev":"next",t.touchesDirection=_>0?"prev":"next";const f=t.params.loop&&!s.cssMode,h=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!n.isMoved){if(f&&h&&t.loopFix({direction:t.swipeDirection}),n.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const T=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(T)}n.allowMomentumBounce=!1,s.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",a)}if(new Date().getTime(),s._loopSwapReset!==!1&&n.isMoved&&n.allowThresholdMove&&b!==t.touchesDirection&&f&&h&&Math.abs(m)>=1){Object.assign(r,{startX:p,startY:c,currentX:p,currentY:c,startTranslate:n.currentTranslate}),n.loopSwapReset=!0,n.startTranslate=n.currentTranslate;return}t.emit("sliderMove",a),n.isMoved=!0,n.currentTranslate=m+n.startTranslate;let g=!0,y=s.resistanceRatio;if(s.touchReleaseOnEdges&&(y=0),m>0?(f&&h&&n.allowThresholdMove&&n.currentTranslate>(s.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]-(s.slidesPerView!=="auto"&&t.slides.length-s.slidesPerView>=2?t.slidesSizesGrid[t.activeIndex+1]+t.params.spaceBetween:0)-t.params.spaceBetween:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),n.currentTranslate>t.minTranslate()&&(g=!1,s.resistance&&(n.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+n.startTranslate+m)**y))):m<0&&(f&&h&&n.allowThresholdMove&&n.currentTranslate<(s.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween+(s.slidesPerView!=="auto"&&t.slides.length-s.slidesPerView>=2?t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween:0):t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(s.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(s.slidesPerView,10)))}),n.currentTranslate<t.maxTranslate()&&(g=!1,s.resistance&&(n.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-n.startTranslate-m)**y))),g&&(a.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&n.currentTranslate<n.startTranslate&&(n.currentTranslate=n.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&n.currentTranslate>n.startTranslate&&(n.currentTranslate=n.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(n.currentTranslate=n.startTranslate),s.threshold>0)if(Math.abs(m)>s.threshold||n.allowThresholdMove){if(!n.allowThresholdMove){n.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,n.currentTranslate=n.startTranslate,r.diff=t.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY;return}}else{n.currentTranslate=n.startTranslate;return}!s.followFinger||s.cssMode||((s.freeMode&&s.freeMode.enabled&&t.freeMode||s.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),s.freeMode&&s.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(n.currentTranslate),t.setTranslate(n.currentTranslate))}function Kn(e){const i=this,t=i.touchEventsData;let n=e;n.originalEvent&&(n=n.originalEvent);let s;if(n.type==="touchend"||n.type==="touchcancel"){if(s=[...n.changedTouches].find(T=>T.identifier===t.touchId),!s||s.identifier!==t.touchId)return}else{if(t.touchId!==null||n.pointerId!==t.pointerId)return;s=n}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(n.type)&&!(["pointercancel","contextmenu"].includes(n.type)&&(i.browser.isSafari||i.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:o,touches:l,rtlTranslate:a,slidesGrid:d,enabled:p}=i;if(!p||!o.simulateTouch&&n.pointerType==="mouse")return;if(t.allowTouchCallbacks&&i.emit("touchEnd",n),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&o.grabCursor&&i.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}o.grabCursor&&t.isMoved&&t.isTouched&&(i.allowSlideNext===!0||i.allowSlidePrev===!0)&&i.setGrabCursor(!1);const c=Le(),v=c-t.touchStartTime;if(i.allowClick){const T=n.path||n.composedPath&&n.composedPath();i.updateClickedSlide(T&&T[0]||n.target,T),i.emit("tap click",n),v<300&&c-t.lastClickTime<300&&i.emit("doubleTap doubleClick",n)}if(t.lastClickTime=Le(),jt(()=>{i.destroyed||(i.allowClick=!0)}),!t.isTouched||!t.isMoved||!i.swipeDirection||l.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let u;if(o.followFinger?u=a?i.translate:-i.translate:u=-t.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){i.freeMode.onTouchEnd({currentPos:u});return}const m=u>=-i.maxTranslate()&&!i.params.loop;let _=0,b=i.slidesSizesGrid[0];for(let T=0;T<d.length;T+=T<o.slidesPerGroupSkip?1:o.slidesPerGroup){const P=T<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof d[T+P]<"u"?(m||u>=d[T]&&u<d[T+P])&&(_=T,b=d[T+P]-d[T]):(m||u>=d[T])&&(_=T,b=d[d.length-1]-d[d.length-2])}let f=null,h=null;o.rewind&&(i.isBeginning?h=o.virtual&&o.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1:i.isEnd&&(f=0));const g=(u-d[_])/b,y=_<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(v>o.longSwipesMs){if(!o.longSwipes){i.slideTo(i.activeIndex);return}i.swipeDirection==="next"&&(g>=o.longSwipesRatio?i.slideTo(o.rewind&&i.isEnd?f:_+y):i.slideTo(_)),i.swipeDirection==="prev"&&(g>1-o.longSwipesRatio?i.slideTo(_+y):h!==null&&g<0&&Math.abs(g)>o.longSwipesRatio?i.slideTo(h):i.slideTo(_))}else{if(!o.shortSwipes){i.slideTo(i.activeIndex);return}i.navigation&&(n.target===i.navigation.nextEl||n.target===i.navigation.prevEl)?n.target===i.navigation.nextEl?i.slideTo(_+y):i.slideTo(_):(i.swipeDirection==="next"&&i.slideTo(f!==null?f:_+y),i.swipeDirection==="prev"&&i.slideTo(h!==null?h:_))}}function _t(){const e=this,{params:i,el:t}=e;if(t&&t.offsetWidth===0)return;i.breakpoints&&e.setBreakpoint();const{allowSlideNext:n,allowSlidePrev:s,snapGrid:r}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=o&&i.loop;(i.slidesPerView==="auto"||i.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=s,e.allowSlideNext=n,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function Qn(e){const i=this;i.enabled&&(i.allowClick||(i.params.preventClicks&&e.preventDefault(),i.params.preventClicksPropagation&&i.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function Jn(){const e=this,{wrapperEl:i,rtlTranslate:t,enabled:n}=e;if(!n)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-i.scrollLeft:e.translate=-i.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let s;const r=e.maxTranslate()-e.minTranslate();r===0?s=0:s=(e.translate-e.minTranslate())/r,s!==e.progress&&e.updateProgress(t?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function Zn(e){const i=this;xe(i,e.target),!(i.params.cssMode||i.params.slidesPerView!=="auto"&&!i.params.autoHeight)&&i.update()}function es(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Qt=(e,i)=>{const t=Z(),{params:n,el:s,wrapperEl:r,device:o}=e,l=!!n.nested,a=i==="on"?"addEventListener":"removeEventListener",d=i;!s||typeof s=="string"||(t[a]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),s[a]("touchstart",e.onTouchStart,{passive:!1}),s[a]("pointerdown",e.onTouchStart,{passive:!1}),t[a]("touchmove",e.onTouchMove,{passive:!1,capture:l}),t[a]("pointermove",e.onTouchMove,{passive:!1,capture:l}),t[a]("touchend",e.onTouchEnd,{passive:!0}),t[a]("pointerup",e.onTouchEnd,{passive:!0}),t[a]("pointercancel",e.onTouchEnd,{passive:!0}),t[a]("touchcancel",e.onTouchEnd,{passive:!0}),t[a]("pointerout",e.onTouchEnd,{passive:!0}),t[a]("pointerleave",e.onTouchEnd,{passive:!0}),t[a]("contextmenu",e.onTouchEnd,{passive:!0}),(n.preventClicks||n.preventClicksPropagation)&&s[a]("click",e.onClick,!0),n.cssMode&&r[a]("scroll",e.onScroll),n.updateOnWindowResize?e[d](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",_t,!0):e[d]("observerUpdate",_t,!0),s[a]("load",e.onLoad,{capture:!0}))};function ts(){const e=this,{params:i}=e;e.onTouchStart=Yn.bind(e),e.onTouchMove=Xn.bind(e),e.onTouchEnd=Kn.bind(e),e.onDocumentTouchStart=es.bind(e),i.cssMode&&(e.onScroll=Jn.bind(e)),e.onClick=Qn.bind(e),e.onLoad=Zn.bind(e),Qt(e,"on")}function is(){Qt(this,"off")}var ns={attachEvents:ts,detachEvents:is};const yt=(e,i)=>e.grid&&i.grid&&i.grid.rows>1;function ss(){const e=this,{realIndex:i,initialized:t,params:n,el:s}=e,r=n.breakpoints;if(!r||r&&Object.keys(r).length===0)return;const o=Z(),l=n.breakpointsBase==="window"||!n.breakpointsBase?n.breakpointsBase:"container",a=["window","container"].includes(n.breakpointsBase)||!n.breakpointsBase?e.el:o.querySelector(n.breakpointsBase),d=e.getBreakpoint(r,l,a);if(!d||e.currentBreakpoint===d)return;const c=(d in r?r[d]:void 0)||e.originalParams,v=yt(e,n),u=yt(e,c),m=e.params.grabCursor,_=c.grabCursor,b=n.enabled;v&&!u?(s.classList.remove(`${n.containerModifierClass}grid`,`${n.containerModifierClass}grid-column`),e.emitContainerClasses()):!v&&u&&(s.classList.add(`${n.containerModifierClass}grid`),(c.grid.fill&&c.grid.fill==="column"||!c.grid.fill&&n.grid.fill==="column")&&s.classList.add(`${n.containerModifierClass}grid-column`),e.emitContainerClasses()),m&&!_?e.unsetGrabCursor():!m&&_&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(P=>{if(typeof c[P]>"u")return;const L=n[P]&&n[P].enabled,S=c[P]&&c[P].enabled;L&&!S&&e[P].disable(),!L&&S&&e[P].enable()});const f=c.direction&&c.direction!==n.direction,h=n.loop&&(c.slidesPerView!==n.slidesPerView||f),g=n.loop;f&&t&&e.changeDirection(),j(e.params,c);const y=e.params.enabled,T=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),b&&!y?e.disable():!b&&y&&e.enable(),e.currentBreakpoint=d,e.emit("_beforeBreakpoint",c),t&&(h?(e.loopDestroy(),e.loopCreate(i),e.updateSlides()):!g&&T?(e.loopCreate(i),e.updateSlides()):g&&!T&&e.loopDestroy()),e.emit("breakpoint",c)}function rs(e,i="window",t){if(!e||i==="container"&&!t)return;let n=!1;const s=V(),r=i==="window"?s.innerHeight:t.clientHeight,o=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const a=parseFloat(l.substr(1));return{value:r*a,point:l}}return{value:l,point:l}});o.sort((l,a)=>parseInt(l.value,10)-parseInt(a.value,10));for(let l=0;l<o.length;l+=1){const{point:a,value:d}=o[l];i==="window"?s.matchMedia(`(min-width: ${d}px)`).matches&&(n=a):d<=t.clientWidth&&(n=a)}return n||"max"}var as={setBreakpoint:ss,getBreakpoint:rs};function os(e,i){const t=[];return e.forEach(n=>{typeof n=="object"?Object.keys(n).forEach(s=>{n[s]&&t.push(i+s)}):typeof n=="string"&&t.push(i+n)}),t}function ls(){const e=this,{classNames:i,params:t,rtl:n,el:s,device:r}=e,o=os(["initialized",t.direction,{"free-mode":e.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:n},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:r.android},{ios:r.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);i.push(...o),s.classList.add(...i),e.emitContainerClasses()}function cs(){const e=this,{el:i,classNames:t}=e;!i||typeof i=="string"||(i.classList.remove(...t),e.emitContainerClasses())}var ds={addClasses:ls,removeClasses:cs};function us(){const e=this,{isLocked:i,params:t}=e,{slidesOffsetBefore:n}=t;if(n){const s=e.slides.length-1,r=e.slidesGrid[s]+e.slidesSizesGrid[s]+n*2;e.isLocked=e.size>r}else e.isLocked=e.snapGrid.length===1;t.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),t.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),i&&i!==e.isLocked&&(e.isEnd=!1),i!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var fs={checkOverflow:us},bt={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function ps(e,i){return function(n={}){const s=Object.keys(n)[0],r=n[s];if(typeof r!="object"||r===null){j(i,n);return}if(e[s]===!0&&(e[s]={enabled:!0}),s==="navigation"&&e[s]&&e[s].enabled&&!e[s].prevEl&&!e[s].nextEl&&(e[s].auto=!0),["pagination","scrollbar"].indexOf(s)>=0&&e[s]&&e[s].enabled&&!e[s].el&&(e[s].auto=!0),!(s in e&&"enabled"in r)){j(i,n);return}typeof e[s]=="object"&&!("enabled"in e[s])&&(e[s].enabled=!0),e[s]||(e[s]={enabled:!1}),j(i,n)}}const Fe={eventsEmitter:dn,update:Sn,translate:Mn,transition:An,slide:Hn,loop:Nn,grabCursor:Wn,events:ns,breakpoints:as,checkOverflow:fs,classes:ds},He={};class W{constructor(...i){let t,n;i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?n=i[0]:[t,n]=i,n||(n={}),n=j({},n),t&&!n.el&&(n.el=t);const s=Z();if(n.el&&typeof n.el=="string"&&s.querySelectorAll(n.el).length>1){const a=[];return s.querySelectorAll(n.el).forEach(d=>{const p=j({},n,{el:d});a.push(new W(p))}),a}const r=this;r.__swiper__=!0,r.support=Ut(),r.device=Yt({userAgent:n.userAgent}),r.browser=Xt(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],n.modules&&Array.isArray(n.modules)&&r.modules.push(...n.modules);const o={};r.modules.forEach(a=>{a({params:n,swiper:r,extendParams:ps(n,o),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})});const l=j({},bt,o);return r.params=j({},l,He,n),r.originalParams=j({},r.params),r.passedParams=j({},n),r.params&&r.params.on&&Object.keys(r.params.on).forEach(a=>{r.on(a,r.params.on[a])}),r.params&&r.params.onAny&&r.onAny(r.params.onAny),Object.assign(r,{enabled:r.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return r.params.direction==="horizontal"},isVertical(){return r.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}getDirectionLabel(i){return this.isHorizontal()?i:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[i]}getSlideIndex(i){const{slidesEl:t,params:n}=this,s=J(t,`.${n.slideClass}, swiper-slide`),r=Ae(s[0]);return Ae(i)-r}getSlideIndexByData(i){return this.getSlideIndex(this.slides.find(t=>t.getAttribute("data-swiper-slide-index")*1===i))}getSlideIndexWhenGrid(i){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?i=Math.floor(i/this.params.grid.rows):this.params.grid.fill==="row"&&(i=i%Math.ceil(this.slides.length/this.params.grid.rows))),i}recalcSlides(){const i=this,{slidesEl:t,params:n}=i;i.slides=J(t,`.${n.slideClass}, swiper-slide`)}enable(){const i=this;i.enabled||(i.enabled=!0,i.params.grabCursor&&i.setGrabCursor(),i.emit("enable"))}disable(){const i=this;i.enabled&&(i.enabled=!1,i.params.grabCursor&&i.unsetGrabCursor(),i.emit("disable"))}setProgress(i,t){const n=this;i=Math.min(Math.max(i,0),1);const s=n.minTranslate(),o=(n.maxTranslate()-s)*i+s;n.translateTo(o,typeof t>"u"?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const i=this;if(!i.params._emitClasses||!i.el)return;const t=i.el.className.split(" ").filter(n=>n.indexOf("swiper")===0||n.indexOf(i.params.containerModifierClass)===0);i.emit("_containerClasses",t.join(" "))}getSlideClasses(i){const t=this;return t.destroyed?"":i.className.split(" ").filter(n=>n.indexOf("swiper-slide")===0||n.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const i=this;if(!i.params._emitClasses||!i.el)return;const t=[];i.slides.forEach(n=>{const s=i.getSlideClasses(n);t.push({slideEl:n,classNames:s}),i.emit("_slideClass",n,s)}),i.emit("_slideClasses",t)}slidesPerViewDynamic(i="current",t=!1){const n=this,{params:s,slides:r,slidesGrid:o,slidesSizesGrid:l,size:a,activeIndex:d}=n;let p=1;if(typeof s.slidesPerView=="number")return s.slidesPerView;if(s.centeredSlides){let c=r[d]?Math.ceil(r[d].swiperSlideSize):0,v;for(let u=d+1;u<r.length;u+=1)r[u]&&!v&&(c+=Math.ceil(r[u].swiperSlideSize),p+=1,c>a&&(v=!0));for(let u=d-1;u>=0;u-=1)r[u]&&!v&&(c+=r[u].swiperSlideSize,p+=1,c>a&&(v=!0))}else if(i==="current")for(let c=d+1;c<r.length;c+=1)(t?o[c]+l[c]-o[d]<a:o[c]-o[d]<a)&&(p+=1);else for(let c=d-1;c>=0;c-=1)o[d]-o[c]<a&&(p+=1);return p}update(){const i=this;if(!i||i.destroyed)return;const{snapGrid:t,params:n}=i;n.breakpoints&&i.setBreakpoint(),[...i.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&xe(i,o)}),i.updateSize(),i.updateSlides(),i.updateProgress(),i.updateSlidesClasses();function s(){const o=i.rtlTranslate?i.translate*-1:i.translate,l=Math.min(Math.max(o,i.maxTranslate()),i.minTranslate());i.setTranslate(l),i.updateActiveIndex(),i.updateSlidesClasses()}let r;if(n.freeMode&&n.freeMode.enabled&&!n.cssMode)s(),n.autoHeight&&i.updateAutoHeight();else{if((n.slidesPerView==="auto"||n.slidesPerView>1)&&i.isEnd&&!n.centeredSlides){const o=i.virtual&&n.virtual.enabled?i.virtual.slides:i.slides;r=i.slideTo(o.length-1,0,!1,!0)}else r=i.slideTo(i.activeIndex,0,!1,!0);r||s()}n.watchOverflow&&t!==i.snapGrid&&i.checkOverflow(),i.emit("update")}changeDirection(i,t=!0){const n=this,s=n.params.direction;return i||(i=s==="horizontal"?"vertical":"horizontal"),i===s||i!=="horizontal"&&i!=="vertical"||(n.el.classList.remove(`${n.params.containerModifierClass}${s}`),n.el.classList.add(`${n.params.containerModifierClass}${i}`),n.emitContainerClasses(),n.params.direction=i,n.slides.forEach(r=>{i==="vertical"?r.style.width="":r.style.height=""}),n.emit("changeDirection"),t&&n.update()),n}changeLanguageDirection(i){const t=this;t.rtl&&i==="rtl"||!t.rtl&&i==="ltr"||(t.rtl=i==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(i){const t=this;if(t.mounted)return!0;let n=i||t.params.el;if(typeof n=="string"&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.parentNode&&n.parentNode.host&&n.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const s=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=n&&n.shadowRoot&&n.shadowRoot.querySelector?n.shadowRoot.querySelector(s()):J(n,s())[0];return!o&&t.params.createElements&&(o=Ie("div",t.params.wrapperClass),n.append(o),J(n,`.${t.params.slideClass}`).forEach(l=>{o.append(l)})),Object.assign(t,{el:n,wrapperEl:o,slidesEl:t.isElement&&!n.parentNode.host.slideSlots?n.parentNode.host:o,hostEl:t.isElement?n.parentNode.host:n,mounted:!0,rtl:n.dir.toLowerCase()==="rtl"||ne(n,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(n.dir.toLowerCase()==="rtl"||ne(n,"direction")==="rtl"),wrongRTL:ne(o,"display")==="-webkit-box"}),!0}init(i){const t=this;if(t.initialized||t.mount(i)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(void 0,!0),t.attachEvents();const s=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),s.forEach(r=>{r.complete?xe(t,r):r.addEventListener("load",o=>{xe(t,o.target)})}),Qe(t),t.initialized=!0,Qe(t),t.emit("init"),t.emit("afterInit"),t}destroy(i=!0,t=!0){const n=this,{params:s,el:r,wrapperEl:o,slides:l}=n;return typeof n.params>"u"||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),s.loop&&n.loopDestroy(),t&&(n.removeClasses(),r&&typeof r!="string"&&r.removeAttribute("style"),o&&o.removeAttribute("style"),l&&l.length&&l.forEach(a=>{a.classList.remove(s.slideVisibleClass,s.slideFullyVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass),a.removeAttribute("style"),a.removeAttribute("data-swiper-slide-index")})),n.emit("destroy"),Object.keys(n.eventsListeners).forEach(a=>{n.off(a)}),i!==!1&&(n.el&&typeof n.el!="string"&&(n.el.swiper=null),Ki(n)),n.destroyed=!0),null}static extendDefaults(i){j(He,i)}static get extendedDefaults(){return He}static get defaults(){return bt}static installModule(i){W.prototype.__modules__||(W.prototype.__modules__=[]);const t=W.prototype.__modules__;typeof i=="function"&&t.indexOf(i)<0&&t.push(i)}static use(i){return Array.isArray(i)?(i.forEach(t=>W.installModule(t)),W):(W.installModule(i),W)}}Object.keys(Fe).forEach(e=>{Object.keys(Fe[e]).forEach(i=>{W.prototype[i]=Fe[e][i]})});W.use([ln,cn]);function Jt(e,i,t,n){return e.params.createElements&&Object.keys(n).forEach(s=>{if(!t[s]&&t.auto===!0){let r=J(e.el,`.${n[s]}`)[0];r||(r=Ie("div",n[s]),r.className=n[s],e.el.append(r)),t[s]=r,i[s]=r}}),t}const hs='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function ms({swiper:e,extendParams:i,on:t,emit:n}){i({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function s(u){let m;return u&&typeof u=="string"&&e.isElement&&(m=e.el.querySelector(u)||e.hostEl.querySelector(u),m)?m:(u&&(typeof u=="string"&&(m=[...document.querySelectorAll(u)]),e.params.uniqueNavElements&&typeof u=="string"&&m&&m.length>1&&e.el.querySelectorAll(u).length===1?m=e.el.querySelector(u):m&&m.length===1&&(m=m[0])),u&&!m?u:m)}function r(u,m){const _=e.params.navigation;u=H(u),u.forEach(b=>{b&&(b.classList[m?"add":"remove"](..._.disabledClass.split(" ")),b.tagName==="BUTTON"&&(b.disabled=m),e.params.watchOverflow&&e.enabled&&b.classList[e.isLocked?"add":"remove"](_.lockClass))})}function o(){const{nextEl:u,prevEl:m}=e.navigation;if(e.params.loop){r(m,!1),r(u,!1);return}r(m,e.isBeginning&&!e.params.rewind),r(u,e.isEnd&&!e.params.rewind)}function l(u){u.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),n("navigationPrev"))}function a(u){u.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),n("navigationNext"))}function d(){const u=e.params.navigation;if(e.params.navigation=Jt(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(u.nextEl||u.prevEl))return;let m=s(u.nextEl),_=s(u.prevEl);Object.assign(e.navigation,{nextEl:m,prevEl:_}),m=H(m),_=H(_);const b=(f,h)=>{if(f){if(u.addIcons&&f.matches(".swiper-button-next,.swiper-button-prev")&&!f.querySelector("svg")){const g=document.createElement("div");Ke(g,hs),f.appendChild(g.querySelector("svg")),g.remove()}f.addEventListener("click",h==="next"?a:l)}!e.enabled&&f&&f.classList.add(...u.lockClass.split(" "))};m.forEach(f=>b(f,"next")),_.forEach(f=>b(f,"prev"))}function p(){let{nextEl:u,prevEl:m}=e.navigation;u=H(u),m=H(m);const _=(b,f)=>{b.removeEventListener("click",f==="next"?a:l),b.classList.remove(...e.params.navigation.disabledClass.split(" "))};u.forEach(b=>_(b,"next")),m.forEach(b=>_(b,"prev"))}t("init",()=>{e.params.navigation.enabled===!1?v():(d(),o())}),t("toEdge fromEdge lock unlock",()=>{o()}),t("destroy",()=>{p()}),t("enable disable",()=>{let{nextEl:u,prevEl:m}=e.navigation;if(u=H(u),m=H(m),e.enabled){o();return}[...u,...m].filter(_=>!!_).forEach(_=>_.classList.add(e.params.navigation.lockClass))}),t("click",(u,m)=>{let{nextEl:_,prevEl:b}=e.navigation;_=H(_),b=H(b);const f=m.target;let h=b.includes(f)||_.includes(f);if(e.isElement&&!h){const g=m.path||m.composedPath&&m.composedPath();g&&(h=g.find(y=>_.includes(y)||b.includes(y)))}if(e.params.navigation.hideOnClick&&!h){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===f||e.pagination.el.contains(f)))return;let g;_.length?g=_[0].classList.contains(e.params.navigation.hiddenClass):b.length&&(g=b[0].classList.contains(e.params.navigation.hiddenClass)),n(g===!0?"navigationShow":"navigationHide"),[..._,...b].filter(y=>!!y).forEach(y=>y.classList.toggle(e.params.navigation.hiddenClass))}});const c=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),d(),o()},v=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),p()};Object.assign(e.navigation,{enable:c,disable:v,update:o,init:d,destroy:p})}function fe(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`}function gs({swiper:e,extendParams:i,on:t,emit:n}){const s="swiper-pagination";i({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:f=>f,formatFractionTotal:f=>f,bulletClass:`${s}-bullet`,bulletActiveClass:`${s}-bullet-active`,modifierClass:`${s}-`,currentClass:`${s}-current`,totalClass:`${s}-total`,hiddenClass:`${s}-hidden`,progressbarFillClass:`${s}-progressbar-fill`,progressbarOppositeClass:`${s}-progressbar-opposite`,clickableClass:`${s}-clickable`,lockClass:`${s}-lock`,horizontalClass:`${s}-horizontal`,verticalClass:`${s}-vertical`,paginationDisabledClass:`${s}-disabled`}}),e.pagination={el:null,bullets:[]};let r,o=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function a(f,h){const{bulletActiveClass:g}=e.params.pagination;f&&(f=f[`${h==="prev"?"previous":"next"}ElementSibling`],f&&(f.classList.add(`${g}-${h}`),f=f[`${h==="prev"?"previous":"next"}ElementSibling`],f&&f.classList.add(`${g}-${h}-${h}`)))}function d(f,h,g){if(f=f%g,h=h%g,h===f+1)return"next";if(h===f-1)return"previous"}function p(f){const h=f.target.closest(fe(e.params.pagination.bulletClass));if(!h)return;f.preventDefault();const g=Ae(h)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===g)return;const y=d(e.realIndex,g,e.slides.length);y==="next"?e.slideNext():y==="previous"?e.slidePrev():e.slideToLoop(g)}else e.slideTo(g)}function c(){const f=e.rtl,h=e.params.pagination;if(l())return;let g=e.pagination.el;g=H(g);let y,T;const P=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,L=e.params.loop?Math.ceil(P/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(T=e.previousRealIndex||0,y=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(y=e.snapIndex,T=e.previousSnapIndex):(T=e.previousIndex||0,y=e.activeIndex||0),h.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const S=e.pagination.bullets;let M,w,E;if(h.dynamicBullets&&(r=Xe(S[0],e.isHorizontal()?"width":"height"),g.forEach(C=>{C.style[e.isHorizontal()?"width":"height"]=`${r*(h.dynamicMainBullets+4)}px`}),h.dynamicMainBullets>1&&T!==void 0&&(o+=y-(T||0),o>h.dynamicMainBullets-1?o=h.dynamicMainBullets-1:o<0&&(o=0)),M=Math.max(y-o,0),w=M+(Math.min(S.length,h.dynamicMainBullets)-1),E=(w+M)/2),S.forEach(C=>{const z=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(D=>`${h.bulletActiveClass}${D}`)].map(D=>typeof D=="string"&&D.includes(" ")?D.split(" "):D).flat();C.classList.remove(...z)}),g.length>1)S.forEach(C=>{const z=Ae(C);z===y?C.classList.add(...h.bulletActiveClass.split(" ")):e.isElement&&C.setAttribute("part","bullet"),h.dynamicBullets&&(z>=M&&z<=w&&C.classList.add(...`${h.bulletActiveClass}-main`.split(" ")),z===M&&a(C,"prev"),z===w&&a(C,"next"))});else{const C=S[y];if(C&&C.classList.add(...h.bulletActiveClass.split(" ")),e.isElement&&S.forEach((z,D)=>{z.setAttribute("part",D===y?"bullet-active":"bullet")}),h.dynamicBullets){const z=S[M],D=S[w];for(let F=M;F<=w;F+=1)S[F]&&S[F].classList.add(...`${h.bulletActiveClass}-main`.split(" "));a(z,"prev"),a(D,"next")}}if(h.dynamicBullets){const C=Math.min(S.length,h.dynamicMainBullets+4),z=(r*C-r)/2-E*r,D=f?"right":"left";S.forEach(F=>{F.style[e.isHorizontal()?D:"top"]=`${z}px`})}}g.forEach((S,M)=>{if(h.type==="fraction"&&(S.querySelectorAll(fe(h.currentClass)).forEach(w=>{w.textContent=h.formatFractionCurrent(y+1)}),S.querySelectorAll(fe(h.totalClass)).forEach(w=>{w.textContent=h.formatFractionTotal(L)})),h.type==="progressbar"){let w;h.progressbarOpposite?w=e.isHorizontal()?"vertical":"horizontal":w=e.isHorizontal()?"horizontal":"vertical";const E=(y+1)/L;let C=1,z=1;w==="horizontal"?C=E:z=E,S.querySelectorAll(fe(h.progressbarFillClass)).forEach(D=>{D.style.transform=`translate3d(0,0,0) scaleX(${C}) scaleY(${z})`,D.style.transitionDuration=`${e.params.speed}ms`})}h.type==="custom"&&h.renderCustom?(Ke(S,h.renderCustom(e,y+1,L)),M===0&&n("paginationRender",S)):(M===0&&n("paginationRender",S),n("paginationUpdate",S)),e.params.watchOverflow&&e.enabled&&S.classList[e.isLocked?"add":"remove"](h.lockClass)})}function v(){const f=e.params.pagination;if(l())return;const h=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let g=e.pagination.el;g=H(g);let y="";if(f.type==="bullets"){let T=e.params.loop?Math.ceil(h/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&T>h&&(T=h);for(let P=0;P<T;P+=1)f.renderBullet?y+=f.renderBullet.call(e,P,f.bulletClass):y+=`<${f.bulletElement} ${e.isElement?'part="bullet"':""} class="${f.bulletClass}"></${f.bulletElement}>`}f.type==="fraction"&&(f.renderFraction?y=f.renderFraction.call(e,f.currentClass,f.totalClass):y=`<span class="${f.currentClass}"></span> / <span class="${f.totalClass}"></span>`),f.type==="progressbar"&&(f.renderProgressbar?y=f.renderProgressbar.call(e,f.progressbarFillClass):y=`<span class="${f.progressbarFillClass}"></span>`),e.pagination.bullets=[],g.forEach(T=>{f.type!=="custom"&&Ke(T,y||""),f.type==="bullets"&&e.pagination.bullets.push(...T.querySelectorAll(fe(f.bulletClass)))}),f.type!=="custom"&&n("paginationRender",g[0])}function u(){e.params.pagination=Jt(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const f=e.params.pagination;if(!f.el)return;let h;typeof f.el=="string"&&e.isElement&&(h=e.el.querySelector(f.el)),!h&&typeof f.el=="string"&&(h=[...document.querySelectorAll(f.el)]),h||(h=f.el),!(!h||h.length===0)&&(e.params.uniqueNavElements&&typeof f.el=="string"&&Array.isArray(h)&&h.length>1&&(h=[...e.el.querySelectorAll(f.el)],h.length>1&&(h=h.find(g=>Wt(g,".swiper")[0]===e.el))),Array.isArray(h)&&h.length===1&&(h=h[0]),Object.assign(e.pagination,{el:h}),h=H(h),h.forEach(g=>{f.type==="bullets"&&f.clickable&&g.classList.add(...(f.clickableClass||"").split(" ")),g.classList.add(f.modifierClass+f.type),g.classList.add(e.isHorizontal()?f.horizontalClass:f.verticalClass),f.type==="bullets"&&f.dynamicBullets&&(g.classList.add(`${f.modifierClass}${f.type}-dynamic`),o=0,f.dynamicMainBullets<1&&(f.dynamicMainBullets=1)),f.type==="progressbar"&&f.progressbarOpposite&&g.classList.add(f.progressbarOppositeClass),f.clickable&&g.addEventListener("click",p),e.enabled||g.classList.add(f.lockClass)}))}function m(){const f=e.params.pagination;if(l())return;let h=e.pagination.el;h&&(h=H(h),h.forEach(g=>{g.classList.remove(f.hiddenClass),g.classList.remove(f.modifierClass+f.type),g.classList.remove(e.isHorizontal()?f.horizontalClass:f.verticalClass),f.clickable&&(g.classList.remove(...(f.clickableClass||"").split(" ")),g.removeEventListener("click",p))})),e.pagination.bullets&&e.pagination.bullets.forEach(g=>g.classList.remove(...f.bulletActiveClass.split(" ")))}t("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const f=e.params.pagination;let{el:h}=e.pagination;h=H(h),h.forEach(g=>{g.classList.remove(f.horizontalClass,f.verticalClass),g.classList.add(e.isHorizontal()?f.horizontalClass:f.verticalClass)})}),t("init",()=>{e.params.pagination.enabled===!1?b():(u(),v(),c())}),t("activeIndexChange",()=>{typeof e.snapIndex>"u"&&c()}),t("snapIndexChange",()=>{c()}),t("snapGridLengthChange",()=>{v(),c()}),t("destroy",()=>{m()}),t("enable disable",()=>{let{el:f}=e.pagination;f&&(f=H(f),f.forEach(h=>h.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),t("lock unlock",()=>{c()}),t("click",(f,h)=>{const g=h.target,y=H(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&y&&y.length>0&&!g.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&g===e.navigation.nextEl||e.navigation.prevEl&&g===e.navigation.prevEl))return;const T=y[0].classList.contains(e.params.pagination.hiddenClass);n(T===!0?"paginationShow":"paginationHide"),y.forEach(P=>P.classList.toggle(e.params.pagination.hiddenClass))}});const _=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:f}=e.pagination;f&&(f=H(f),f.forEach(h=>h.classList.remove(e.params.pagination.paginationDisabledClass))),u(),v(),c()},b=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:f}=e.pagination;f&&(f=H(f),f.forEach(h=>h.classList.add(e.params.pagination.paginationDisabledClass))),m()};Object.assign(e.pagination,{enable:_,disable:b,render:v,update:c,init:u,destroy:m})}function vs({swiper:e,extendParams:i,on:t,emit:n,params:s}){e.autoplay={running:!1,paused:!1,timeLeft:0},i({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let r,o,l=s&&s.autoplay?s.autoplay.delay:3e3,a=s&&s.autoplay?s.autoplay.delay:3e3,d,p=new Date().getTime(),c,v,u,m,_,b,f;function h(O){!e||e.destroyed||!e.wrapperEl||O.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",h),!(f||O.detail&&O.detail.bySwiperTouchMove)&&M())}const g=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?c=!0:c&&(a=d,c=!1);const O=e.autoplay.paused?d:p+a-new Date().getTime();e.autoplay.timeLeft=O,n("autoplayTimeLeft",O,O/l),o=requestAnimationFrame(()=>{g()})},y=()=>{let O;return e.virtual&&e.params.virtual.enabled?O=e.slides.find($=>$.classList.contains("swiper-slide-active")):O=e.slides[e.activeIndex],O?parseInt(O.getAttribute("data-swiper-autoplay"),10):void 0},T=O=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(o),g();let I=typeof O>"u"?e.params.autoplay.delay:O;l=e.params.autoplay.delay,a=e.params.autoplay.delay;const $=y();!Number.isNaN($)&&$>0&&typeof O>"u"&&(I=$,l=$,a=$),d=I;const R=e.params.speed,U=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(R,!0,!0),n("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,R,!0,!0),n("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(R,!0,!0),n("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,R,!0,!0),n("autoplay")),e.params.cssMode&&(p=new Date().getTime(),requestAnimationFrame(()=>{T()})))};return I>0?(clearTimeout(r),r=setTimeout(()=>{U()},I)):requestAnimationFrame(()=>{U()}),I},P=()=>{p=new Date().getTime(),e.autoplay.running=!0,T(),n("autoplayStart")},L=()=>{e.autoplay.running=!1,clearTimeout(r),cancelAnimationFrame(o),n("autoplayStop")},S=(O,I)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(r),O||(b=!0);const $=()=>{n("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",h):M()};if(e.autoplay.paused=!0,I){_&&(d=e.params.autoplay.delay),_=!1,$();return}d=(d||e.params.autoplay.delay)-(new Date().getTime()-p),!(e.isEnd&&d<0&&!e.params.loop)&&(d<0&&(d=0),$())},M=()=>{e.isEnd&&d<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(p=new Date().getTime(),b?(b=!1,T(d)):T(),e.autoplay.paused=!1,n("autoplayResume"))},w=()=>{if(e.destroyed||!e.autoplay.running)return;const O=Z();O.visibilityState==="hidden"&&(b=!0,S(!0)),O.visibilityState==="visible"&&M()},E=O=>{O.pointerType==="mouse"&&(b=!0,f=!0,!(e.animating||e.autoplay.paused)&&S(!0))},C=O=>{O.pointerType==="mouse"&&(f=!1,e.autoplay.paused&&M())},z=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",E),e.el.addEventListener("pointerleave",C))},D=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",E),e.el.removeEventListener("pointerleave",C))},F=()=>{Z().addEventListener("visibilitychange",w)},ve=()=>{Z().removeEventListener("visibilitychange",w)};t("init",()=>{e.params.autoplay.enabled&&(z(),F(),P())}),t("destroy",()=>{D(),ve(),e.autoplay.running&&L()}),t("_freeModeStaticRelease",()=>{(u||b)&&M()}),t("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?L():S(!0,!0)}),t("beforeTransitionStart",(O,I,$)=>{e.destroyed||!e.autoplay.running||($||!e.params.autoplay.disableOnInteraction?S(!0,!0):L())}),t("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){L();return}v=!0,u=!1,b=!1,m=setTimeout(()=>{b=!0,u=!0,S(!0)},200)}}),t("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!v)){if(clearTimeout(m),clearTimeout(r),e.params.autoplay.disableOnInteraction){u=!1,v=!1;return}u&&e.params.cssMode&&M(),u=!1,v=!1}}),t("slideChange",()=>{e.destroyed||!e.autoplay.running||(_=!0)}),Object.assign(e.autoplay,{start:P,stop:L,pause:S,resume:M})}class _s extends HTMLElement{connectedCallback(){this.innerHTML=`
            <section class="promo__section-4">
                <h2 class="promo__section-4__title h2-default">check out our works</h2>
                <div class="promo__section-4__slider-container">
                    <div class="swiper promo__section-4__slider">
                        <div class="swiper-wrapper promo__section-4__slider__wrapper">
                            <div class="swiper-slide promo__section-4__slider__slide">
                                <img class="promo__section-4__slider__slide__image" src="/src/img/works/tea-1.jpg" alt="Slide 1" />
                            </div>
                            <div class="swiper-slide promo__section-4__slider__slide">
                                <img class="promo__section-4__slider__slide__image" src="/src/img/works/tea-2.jpg" alt="Slide 2" />
                            </div>
                            <div class="swiper-slide promo__section-4__slider__slide">
                                <img class="promo__section-4__slider__slide__image" src="/src/img/works/tea-3.jpg" alt="Slide 3" />
                            </div>
                            <div class="swiper-slide promo__section-4__slider__slide">
                                <img class="promo__section-4__slider__slide__image" src="/src/img/works/tea-4.jpg" alt="Slide 3" />
                            </div>
                        </div>
                    </div>
                    <div class="promo__section-4__slider__button prev">
                        <span class="icon-left-open"></span>
                    </div>
                    <div class="promo__section-4__slider__button next">
                        <span class="icon-right-open"></span>
                    </div>
                    <div class="promo__section-4__slider__pagination"></div>
                </div>
            </section>
        `,this.initSwiper()}initSwiper(){new W(".promo__section-4__slider",{modules:[ms,gs,vs],slidesPerView:1,loop:!0,loopAddBlankSlides:!0,spaceBetween:35,breakpoints:{1920:{spaceBetween:35,slidesPerView:3},1200:{spaceBetween:5,slidesPerView:3}},navigation:{prevEl:".promo__section-4__slider__button.prev",nextEl:".promo__section-4__slider__button.next"},pagination:{el:".promo__section-4__slider__pagination",type:"bullets",clickable:!0,bulletClass:"promo__section-4__slider__pagination__bullet",bulletActiveClass:"promo__section-4__slider__pagination__bullet--active"},autoplay:{delay:5e3}})}}customElements.define("promo-section-4",_s);class ys extends HTMLElement{connectedCallback(){this.innerHTML=`
            <section class="promo">
                <div class="container">
                    <img class="promo__potter-image" src="/src/img/promo/potter.jpg" alt="potter">
                    <div class="content">
                        <header-component></header-component>
                        <promo-section-1></promo-section-1>
                        <promo-section-2></promo-section-2>
                        <get-in-touch-component></get-in-touch-component>
                        <promo-section-4></promo-section-4>
                    </div>
                </div>
            </section>
            <footer-component></footer-component>
        `}}customElements.define("promo-page",ys);class bs extends HTMLElement{static get observedAttributes(){return["imgsrc","name","price"]}render(){const i=this.getAttribute("imgsrc"),t=this.getAttribute("name"),n=this.getAttribute("price");this.innerHTML=`
            <div class="catalog__element">
                <div class="catalog__element__image-container">
                    <img class="catalog__element__image" src="${i}" alt="${t||"Undefined"}" />
                </div>
                <h3 class="catalog__element__name">${t||"Undefined"}</h3>
                <p class="catalog__element__price">${n+" €"||"Undefined"}</p>
            </div>
        `}connectedCallback(){this.render()}}customElements.define("catalog-element",bs);class Ss{async getItems(){return[{imgsrc:"/src/img/mock-catalog/1.jpg",categories:["For Tea","For Kitchen","For Plants"],name:"Terracotta Whisper",price:19.99},{imgsrc:"/src/img/mock-catalog/2.jpg",categories:["For Tea","For Plants"],name:"Clay Bloom",price:24.99},{imgsrc:"/src/img/mock-catalog/3.jpg",categories:["For Tea","For Kitchen"],name:"Eathen Grace",price:16.99},{imgsrc:"/src/img/mock-catalog/4.jpg",categories:["For Tea"],name:"Moss & Moon",price:21.99},{imgsrc:"/src/img/mock-catalog/5.jpg",categories:["For Tea","For Plants"],name:"Solace Set",price:29.99}]}}class ws extends HTMLElement{constructor(){super(...arguments);B(this,"items",[]);B(this,"categories",[]);B(this,"categoriedItems",{});B(this,"currentCategory","")}getElements(){new Ss().getItems().then(n=>{this.items=n,this.categories=[...new Set(n.flatMap(s=>s.categories))],this.categories.forEach(s=>{this.categoriedItems[s]=n.filter(r=>r.categories.includes(s))}),this.currentCategory=Object.keys(this.categoriedItems)[0],this.render()})}render(){let t,n="";this.categories.length!=0&&(n=`
                <div class="catalog__nav">
                    ${this.categories.map(s=>`
                            <a class="catalog__nav__link">${s}</a>
                        `).join("")}
                </div>
            `),this.currentCategory&&this.categoriedItems[this.currentCategory]?t=`
                ${this.categoriedItems[this.currentCategory].map(s=>`
                        <catalog-element
                            imgsrc="${s.imgsrc}"
                            name="${s.name}"
                            price="${s.price}"
                        ></catalog-element>
                    `).join("")}
            `:t="<p>No items available</p>",this.innerHTML=`
            <section class="catalog">
                <div class="container">
                    <div class="content">
                        <header-component></header-component>
                        <h2 class="h2-default catalog__title">our pottery</h2>
                        <div class="catalog__content">
                            ${n}
                            <div class="catalog__elements">
                                ${t}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer-component></footer-component>
        `,n&&document.querySelectorAll(".catalog__nav__link").forEach(r=>{r.textContent==this.currentCategory?r.classList.add("catalog__nav__link--selected"):r.classList.remove("catalog__nav__link--selected"),r.addEventListener("click",()=>{this.currentCategory=r.textContent,this.render()})})}connectedCallback(){this.render(),this.getElements()}}customElements.define("catalog-page",ws);class Ts extends HTMLElement{render(){const i=this.getAttribute("imgsrc"),t=this.getAttribute("title"),n=this.getAttribute("description");debugger;this.innerHTML=`
            <div class="blog__article">
                <div class="blog__article__top">
                    <div class="blog__article__image-container">
                        <img class="blog__article__image" src="${i}" alt="${t}" />
                    </div>
                    <div class="blog__article__title-div">
                        <h3 class="h3-default blog__article__title">${t}</h3>
                        <button class="read-button blog__article__button">read</button>
                    </div>
                </div>
                <p class="blog__article__description">${n}</p>
            </div>
        `}connectedCallback(){this.render()}}customElements.define("blog-article",Ts);class Es{async getItems(){return[{article_id:1,imgsrc:"/src/img/mock-articles/1.jpg",title:"Pottery Secrets",description:"Discover the timeless art of pottery and unlock the secrets hidden in every curve and glaze. From mastering the perfect wheel technique to understanding how clay transforms in the kiln, each step reveals a blend of tradition and creativity. The true magic lies in the details—subtle textures, natural imperfections, and the unique touch of the artisan’s hand, turning simple earth into lasting beauty."},{article_id:2,imgsrc:"/src/img/mock-articles/2.jpg",title:"The best materials for pottery",description:"The best material for pottery often depends on the desired look and function, but stoneware is a favorite for its durability and versatility. It’s strong, resistant to chipping, and perfect for both functional pieces like mugs and plates, as well as decorative art. Porcelain offers a delicate, refined finish, ideal for intricate designs"}]}}class xs extends HTMLElement{constructor(){super(...arguments);B(this,"elements",[])}render(){const t=this.elements.length>0?this.elements.map(n=>`
                    <blog-article
                        imgsrc="${n.imgsrc}"
                        title="${n.title}"
                        description="${n.description}"
                    ></blog-article>
                `).join(""):"<p>Nothing found</p>";this.innerHTML=`
            <section class="blog">
                <div class="container">
                    <div class="content">
                        <header-component></header-component>
                        <div class="blog__content">
                            <h2 class="h2-default blog__title">our digital notes</h2>
                            <div class="blog__articles">
                                ${t}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer-component></footer-component>
        `}getElements(){new Es().getItems().then(n=>{this.elements=n,this.render()})}connectedCallback(){this.render(),this.getElements()}}customElements.define("blog-page",xs);class Cs extends HTMLElement{render(){this.innerHTML=`
            <section class="about__story">
                <h2 class="h2-default about__story__title">where it all began</h2>
                <div class="about__story__content">
                    <img class="about__story__image" src="/src/img/about/crafts.jpg" alt="Crafts" />
                    <div class="about__story__text">
                        <p>Our small pottery workshop began as a simple passion project, rooted in a love for handmade artistry and traditional craftsmanship. What started with a single wheel and a few lumps of clay has grown into a cozy creative space where ideas take shape and stories are told through every piece. Inspired by timeless techniques and the beauty of natural materials, we’ve built a place where both beginners and experienced artists can come together, share their skills, and celebrate the art of pottery. Each creation reflects our journey—shaped by hand, fired with care, and made to be cherished.</p>
                        <p>Over the years, our workshop has become more than just a place to create—it’s a community. Friends, families, and curious visitors gather here to learn, connect, and experience the joy of working with clay. From intimate masterclasses to collaborative projects, we believe in the power of handmade art to bring people together and spark creativity in unexpected ways.</p>
                        <p>Every piece that leaves our studio carries a bit of our story, blending tradition with personal expression. Whether it’s a simple cup or an intricate vase, our ceramics are crafted to be both beautiful and functional, adding warmth and authenticity to any space.</p>
                    </div>
                </div>
            </section>
        `}connectedCallback(){this.render()}}customElements.define("about-story",Cs);class Ms extends HTMLElement{render(){this.innerHTML=`
            <section class="about__find-us">
                <h2 class="h2-default about__find-us__title">find us</h2>
                <div class="about__find-us__map-container">
                    <img class="about__find-us__map" src="/src/img/mock-map/map.png" alt="275 Calyer St, Brooklyn, NY 11222, United States" />
                </div>
            </section>
        `}connectedCallback(){this.render()}}customElements.define("about-find-us",Ms);class Ls extends HTMLElement{render(){this.innerHTML=`
            <section class="about">
                <div class="container">
                    <div class="content">
                        <header-component></header-component>
                        <about-story></about-story>
                        <get-in-touch-component></get-in-touch-component>
                        <about-find-us></about-find-us>
                    </div>
                </div>
            </section>
            <footer-component></footer-component>
        `}connectedCallback(){this.render()}}customElements.define("about-page",Ls);class Ps extends HTMLElement{constructor(){super(...arguments);B(this,"menuHiddenField",!0)}getMenu(){return this.querySelector(".header__menu")}get menuHidden(){const t=this.getMenu();return t&&(this.menuHiddenField=t.classList.contains("hidden")),this.menuHiddenField}set menuHidden(t){if(this.menuHidden==t)return;this.menuHiddenField=t;const n=this.getMenu();n&&(t?n.classList.add("hidden"):n.classList.remove("hidden"))}render(){this.innerHTML=`
            <div class="header__menu${this.menuHidden?" hidden":""}">
                <a class="header__menu-close">
                    <img src="/src/icons/x.svg" class="header__menu-close__icon" alt="close" />
                </a>
                <div class="header__menu__links">
                    <a href="/catalog" class="header__menu__link">catalog</a>
                    <a href="/blog" class="header__menu__link">blog</a>
                    <a href="/about" class="header__menu__link">about</a>
                </div>
            </div>
        `}onInit(){window.addEventListener("open-menu",()=>{this.menuHidden=!1}),window.addEventListener("close-menu",()=>{this.menuHidden=!0});const t=this.querySelector(".header__menu-close"),n=this.querySelectorAll(".header__menu__link");t==null||t.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("close-menu"))}),n==null||n.forEach(s=>s.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("close-menu"))}))}connectedCallback(){this.render(),this.onInit()}}customElements.define("header-menu",Ps);class Is extends HTMLElement{render(){this.innerHTML=`
            <header class="header">
                <div class="burger"><span></span><span></span><span></span></div>
                <div class="header__logo-container">
                    <a href="/" class="header__logo">
                        <img src="/src/logo/logo.png" alt="logo"/>
                    </a>
                    <div class="header__links">
                        <a href="/catalog" class="header__link">catalog</a>
                        <a href="/blog" class="header__link">blog</a>
                        <a href="/about" href="/catalog"a class="header__link">about</a>
                    </div>
                </div>
                <div class="header__icons">
                    <a class="header__icon" href="#"><span class="icon-search"></span></a>
                    <a class="header__icon" href="#"><span class="icon-shopping-bag"></span></a>
                </div>
            </header>

            <header-menu></header-menu>
        `}initBurger(){const i=this.querySelector(".burger");i==null||i.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("open-menu"))})}connectedCallback(){this.render(),this.initBurger()}}customElements.define("header-component",Is);class As extends HTMLElement{connectedCallback(){this.innerHTML=`
            <footer class="footer">
                <div class="container">
                    <div class="content">
                        <div class="footer__blocks">
                            <div class="footer__block newsletter">
                                <h3 class="footer__block__title">newsletter</h3>
                                <p class="footer__block__description">Keep up to date with news and promotions</p>
                                <form action="javascript:void(0);" class="footer__form">
                                    <input class="footer-text-input footer__form__element" type="email" placeholder="Enter your e-mail" />
                                    <div class="default-checkbox-input-container footer__form__element">
                                        <input class="footer-checkbox-input" type="checkbox" />
                                        <label>I agree with the <a href="#" class="terms-link">terms</a></label>
                                    </div>
                                    <button class="submit-button footer__form__element">submit</button>
                                </form>
                            </div>
                            <div class="footer__block links">
                                <div class="footer__subblock">
                                    <h3 class="footer__block__title">discover</h3>
                                    <a href="/about" class="footer__block__link">About Us</a>
                                    <a href="/blog" class="footer__block__link">Blog</a>
                                </div>
                                <div class="footer__subblock">
                                    <h3 class="footer__block__title">shopping</h3>
                                    <a href="/catalog" class="footer__block__link">Catalog</a>
                                </div>
                                <div class="footer__subblock">
                                    <h3 class="footer__block__title">information</h3>
                                    <a href="#" class="footer__block__link">Terms and Conditions</a>
                                </div>
                            </div>
                            <div class="footer__block follow-us">
                                <h3 class="footer__block__title">follow us</h3>
                                <div class="footer__socials">
                                    <a href="#" class="footer__social"><span class="icon-facebook"></span></a>
                                    <a href="#" class="footer__social"><span class="footer__social icon-instagram"></span></a>
                                    <a href="#" class="footer__social"><span class="footer__social icon-pinterest-circled"></span></a>
                                </div>
                            </div>
                        </div>
                        <h3 class="footer__copyright">© Copyright ${new Date().getFullYear()}, Ceramic soul</h3>
                    </div>
                </div>
            </footer>
        `}}customElements.define("footer-component",As);
