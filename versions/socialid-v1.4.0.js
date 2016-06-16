"object"!=typeof socialid&&(socialid={}),socialid.version="1.4.0",socialid.loaded=!1,socialid.SSLEnv=!0,socialid.waitDOMReady=socialid.waitDOMReady||!0,socialid.hostUrl="https://app.socialidnow.com",socialid.debugMode=socialid.debugMode||!1,socialid.console="undefined"!=typeof console&&socialid.debugMode?console:{log:function(){}},String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)},String.prototype.camelize=function(){var e=this.split("_"),n="";for(i=0;i<e.length;i++)n+=e[i].capitalize();return n},socialid.helpers=socialid.helpers||{},socialid.helpers.url=function(){function e(e){return e="undefined"!=typeof e?e:i,e?t.replace(/^http:/,"https:"):t}function n(n,o){return e(o)+n}function o(e){for(var n=e.match(/(:[\w]*)/g),o=0;n&&o<n.length;o++)e=e.replace(n[o],arguments[o+1]);return e}{var t=socialid.hostUrl,i=socialid.SSLEnv;socialid.console}return{host:e,get:n,generatePath:o}}(),socialid.events=function(){function e(e){return this[e]=new i(e),this[e]}function n(e,n,o){e.addEventListener?e.addEventListener(n,o,!1):e.attachEvent&&e.attachEvent("on"+n,o)}function o(e){n(window,"message",e)}var t=socialid.console,i=function(e){function n(e){return a.push(e),!0}function o(n){t.log("Events: calling handlers from "+e+" with data ",n);for(var o=0;o<a.length;o++)a[o](n)}function i(){return a=[]}function c(){return a.length}var a=[],e=e;return{addHandler:n,callHandlers:o,clearHandlers:i,size:c}};return{register:e,addMessageListener:o}}(),socialid.translations={en:{login_facebook:"Login with Facebook",login_twitter:"Login with Twitter",login_linkedin:"Login with LinkedIn",login_gplus:"Login with Google+",connect_facebook:"Connect with Facebook",connect_twitter:"Connect with Twitter",connect_linkedin:"Connect with LinkedIn",connect_gplus:"Connect with Google+",disconnect_facebook:"Disconnect from Facebook",disconnect_twitter:"Disconnect from Twitter",disconnect_linkedin:"Disconnect from LinkedIn",disconnect_gplus:"Disconnect from Google+",login:"login",connect:"connect",disconnect:"disconnect",facebook:"Facebook",twitter:"Twitter",linkedin:"LinkedIn",gplus:"Google+",connect_facebook_account:"Connect Facebook to your account.",connect_twitter_account:"Connect Twitter to your account.",connect_linkedin_account:"Connect LinkedIn to your account.",connect_gplus_account:"Connect Google+ to your account.",disconnect_facebook_account:"Disconnect Facebook from your account.",disconnect_twitter_account:"Disconnect Twitter from your account.",disconnect_linkedin_account:"Disconnect LinkedIn from your account.",disconnect_gplus_account:"Disconnect Google+ from your account.",connect_conflict:"This credential is associated with another user. Disconnect from him first and then connect here again."},pt_br:{login_facebook:"Login com Facebook",login_twitter:"Login com Twitter",login_linkedin:"Login com LinkedIn",login_gplus:"Login com Google+",connect_facebook:"Conectar com Facebook",connect_twitter:"Conectar com Twitter",connect_linkedin:"Conectar com LinkedIn",connect_gplus:"Conectar com Google+",disconnect_facebook:"Desconectar do Facebook",disconnect_twitter:"Desconectar do Twitter",disconnect_linkedin:"Desconectar do LinkedIn",disconnect_gplus:"Desconectar do Google+",login:"login",connect:"conectar",disconnect:"desconectar",facebook:"Facebook",twitter:"Twitter",linkedin:"LinkedIn",gplus:"Google+",connect_facebook_account:"Conecte o Facebook a sua conta.",connect_twitter_account:"Conecte o Twitter a sua conta.",connect_linkedin_account:"Conecte o LinkedIn a sua conta.",connect_gplus_account:"Conecte o Google+ a sua conta.",disconnect_facebook_account:"Desconecte o Facebook de sua conta.",disconnect_twitter_account:"Desconecte o Twitter de sua conta.",disconnect_linkedin_account:"Desconecte o LinkedIn de sua conta.",disconnect_gplus_account:"Desconecte o Google+ de sua conta.",connect_conflict:"Esta credencial est\xe1 associada a outro usu\xe1rio. Desconecte dele primeiro e depois conecte aqui novamente."}},socialid.I18n=function(e){function n(){var e=navigator.language||navigator.browserLanguage;return e.match(/en/)?"en":e.match(/br/i)?"pt_br":void 0}function o(e){return socialid.translations[c][e]?socialid.translations[c][e]:(a.log("key "+e+" not found in the translations"),e)}function t(e){return socialid.translations[e]?c=e:a.log("unsupported language."),this}function i(){return c}var c=e,a=socialid.console;return null==c&&t(n()),{t:o,setLanguage:t,getlanguage:i}},socialid.themes=socialid.themes||{},socialid.themes.Base=function(e){var n=e.i18n||new socialid.I18n,o=n.t;return{buildContainer:function(e){var n=document.createElement("li");return n.id="socialid_"+e,n},buildDisconnectIcon:function(e){var n=document.createElement("div"),t=document.createElement("div");return t.className="status-icon",t.innerHTML="&#10006;",n.className="disconnect "+e+"-icon",n.title=o("disconnect_"+e+"_account"),n.appendChild(t),n},buildConnectedIcon:function(e,n){var o=document.createElement("img"),t=document.createElement("div"),i=document.createElement("div");return o.src=n.picture_url,i.className="status-icon",i.innerHTML="&#10004;",t.className="connected",t.appendChild(i),t.appendChild(o),t}}},socialid.themes=socialid.themes||{},socialid.themes.Loading=function(e){function n(e){return"socialid_"+e+"_loading"}function o(e){var o=document.createElement("img");return o.id=n(e),o.className="loading",o.src=r+s.loading,o}function t(e){var o=document.getElementById(n(e));o&&(o.style.display="inline")}function i(e){var o=document.getElementById(n(e));o&&(o.style.display="none")}function c(){for(var n in e)e.hasOwnProperty(n)&&t(e[n])}function a(){for(var n in e)e.hasOwnProperty(n)&&i(e[n])}var e=e,r=socialid.helpers.url.host(),s={loading:"/assets/load.gif"};return{build:o,show:t,showAll:c,hideAll:a}},socialid.themes=socialid.themes||{},socialid.themes.Events=function(e){function n(){socialid.login.getUserInfo(c),u.showAll()}function o(e){l.log("Connect Widget: new provider connected",e),n()}function t(e){l.log("Connect Widget: error",e),u.hideAll()}function i(e){l.log("Connect Widget: provider disconnected",e),u.hideAll(),"success"==e.status&&n()}function c(e){if(l.log("Connect Widget: handle user info",e),"success"==e.status)for(var n in r)if(r.hasOwnProperty(n)){var o=r[n],t=e.data[o],i=document.getElementById("socialid_"+o);if(t)var c=s(o,t);else var c=d(o);i.parentNode.replaceChild(c,i)}u.hideAll()}function a(){socialid.events.onConnectSuccess.addHandler(o),socialid.events.onConnectCancel.addHandler(t),socialid.events.onConnectError.addHandler(t),socialid.events.onLoginSuccess.addHandler(o),socialid.events.onLoginCancel.addHandler(t),socialid.events.onLoginError.addHandler(t),n()}var r=e.providers,s=e.onConnect,d=e.onDisconnect,l=socialid.console,u=new socialid.themes.Loading(r);return{load:a,handleDisconnect:i}},socialid.themes=socialid.themes||{},socialid.themes.connect=socialid.themes.connect||{},socialid.themes.connect.Bricks=function(e){function n(e,n){var o=l.buildContainer(e),t=document.createTextNode(r("disconnect_"+e)),i=document.createElement("img");return i.className="picture",i.src=n.picture_url,o.className=e+"-provider",o.onclick=function(){socialid.login.disconnect(e,u.handleDisconnect),d.show(e)},o.appendChild(d.build(e)),o.appendChild(i),o.appendChild(t),o}function o(e){var n=l.buildContainer(e),o=document.createTextNode(r("connect_"+e));return n.className=e+"-provider",n.onclick=function(){socialid.login.startConnect(e),d.show(e)},n.appendChild(d.build(e)),n.appendChild(o),n}function t(){var e=document.createElement("div"),n=document.createElement("ul");e.className=s;for(var t in c)c.hasOwnProperty(t)&&n.appendChild(o(c[t]));return e.appendChild(n),e}function i(){u.load()}var c=e.providers||[],a=e.i18n||new socialid.I18n,r=a.t,s="bricks",d=new socialid.themes.Loading(c),l=new socialid.themes.Base(e),u=new socialid.themes.Events({providers:c,onConnect:n,onDisconnect:o});return{build:t,load:i}},socialid.themes=socialid.themes||{},socialid.themes.connect=socialid.themes.connect||{},socialid.themes.connect.Icons=function(e){function n(e,n){var o=l.buildContainer(e),t=document.createElement("div");return t.className="icon "+e+"-provider",o.onclick=function(){socialid.login.disconnect(e,u.handleDisconnect),d.show(e)},t.appendChild(d.build(e)),t.appendChild(l.buildDisconnectIcon(e)),t.appendChild(l.buildConnectedIcon(e,n)),o.appendChild(t),o}function o(e){var n=l.buildContainer(e),o=document.createElement("div");return o.className="icon "+e+"-icon",o.title=r("connect_"+e+"_account"),n.onclick=function(){socialid.login.startConnect(e),d.show(e)},o.appendChild(d.build(e)),n.appendChild(o),n}function t(){var e=document.createElement("div"),n=document.createElement("ul");e.className=s;for(var t in c)c.hasOwnProperty(t)&&n.appendChild(o(c[t]));return e.appendChild(n),e}function i(){u.load()}var c=e.providers||[],a=e.i18n||new socialid.I18n,r=a.t,s=(socialid.console,"icons"),d=new socialid.themes.Loading(c),l=new socialid.themes.Base(e),u=new socialid.themes.Events({providers:c,onConnect:n,onDisconnect:o});return{build:t,load:i}},socialid.themes=socialid.themes||{},socialid.themes.connect=socialid.themes.connect||{},socialid.themes.connect.LabeledIcons=function(e){function n(e,n,o){var t=document.createElement("div"),i=document.createElement("div"),c=document.createTextNode(s(e)),a=document.createElement("a"),r=document.createTextNode(n);return t.className="label",a.href="javascript:void(0);",a.appendChild(r),a.onclick=o,i.appendChild(c),t.appendChild(i),t.appendChild(a),t}function o(e,o){var t=u.buildContainer(e),i=function(){socialid.login.disconnect(e,p.handleDisconnect),l.show(e)},c=n(e,s("disconnect"),i),a=document.createElement("div");return a.className="icon "+e+"-provider",a.onclick=i,a.appendChild(l.build(e)),a.appendChild(u.buildDisconnectIcon(e)),a.appendChild(u.buildConnectedIcon(e,o)),t.appendChild(a),t.appendChild(c),t}function t(e){var o=u.buildContainer(e),t=function(){socialid.login.startConnect(e),l.show(e)},i=n(e,s("connect"),t),c=document.createElement("div");return c.className="icon "+e+"-icon",c.title=s("connect_"+e+"_account"),c.onclick=t,c.appendChild(l.build(e)),o.appendChild(c),o.appendChild(i),o}function i(){var e=document.createElement("div"),n=document.createElement("ul");e.className=d;for(var o in a)a.hasOwnProperty(o)&&n.appendChild(t(a[o]));return e.appendChild(n),e}function c(){p.load()}var a=e.providers||[],r=e.i18n||new socialid.I18n,s=(socialid.console,r.t),d="labeled_icons",l=new socialid.themes.Loading(a),u=new socialid.themes.Base(e),p=new socialid.themes.Events({providers:a,onConnect:o,onDisconnect:t});return{build:i,load:c}},socialid.themes=socialid.themes||{},socialid.themes.login=socialid.themes.login||{},socialid.themes.login.Bricks=function(e){function n(e){var n=document.createElement("li"),o=document.createTextNode(c("login_"+e));return n.className=e+"-provider",n.onclick=function(){socialid.login.startLogin(e)},n.appendChild(o),n}function o(){var e=document.createElement("div"),o=document.createElement("ul");e.className=a;for(var i in t)t.hasOwnProperty(i)&&o.appendChild(n(t[i]));return e.appendChild(o),e}var t=e.providers||[],i=e.i18n||new socialid.I18n,c=i.t,a="bricks";return{build:o}},socialid.themes=socialid.themes||{},socialid.themes.login=socialid.themes.login||{},socialid.themes.login.Icons=function(e){function n(e){var n=document.createElement("li"),o=document.createElement("div");return o.className="icon "+e+"-icon",o.onclick=function(){socialid.login.startLogin(e)},n.appendChild(o),n}function o(){var e=document.createElement("div"),o=document.createElement("ul");e.className=c;for(var i in t)t.hasOwnProperty(i)&&o.appendChild(n(t[i]));return e.appendChild(o),e}var t=e.providers||[],i=e.i18n||new socialid.I18n,c=(i.t,"icons");return{build:o}},socialid.themes=socialid.themes||{},socialid.themes.login=socialid.themes.login||{},socialid.themes.login.LabeledIcons=function(e){function n(e){var n=document.createElement("li"),o=document.createElement("div"),t=document.createElement("div"),i=document.createElement("div"),a=document.createTextNode(c(e)),r=document.createElement("a"),s=document.createTextNode(c("login"));return t.className="label",o.className="icon "+e+"-icon",r.href="javascript:void(0);",o.onclick=r.onclick=function(){socialid.login.startLogin(e)},r.appendChild(s),i.appendChild(a),t.appendChild(i),t.appendChild(r),n.appendChild(o),n.appendChild(t),n}function o(){var e=document.createElement("div"),o=document.createElement("ul");e.className=a;for(var i in t)t.hasOwnProperty(i)&&o.appendChild(n(t[i]));return e.appendChild(o),e}var t=e.providers||[],i=e.i18n||new socialid.I18n,c=i.t,a="labeled_icons";return{build:o}},socialid.themes=socialid.themes||{},socialid.themes.factory={getBuilder:function(e,n,o){var t=socialid.themes[n][e];if("function"==typeof t)return new t(o);throw"unsupported theme"}},socialid.themes.Builder=function(e,n,o){function t(){var e=document.createElement("div"),n=document.createElement("a"),o=document.createTextNode("Powered by Social-ID NOW");return e.className="powered-by",n.href="http://www.socialidnow.com",n.target="_blank",n.appendChild(o),e.appendChild(n),e}function i(){var e=a.build();return r&&e.appendChild(t()),e}function c(){"function"==typeof a.load&&a.load()}var a=socialid.themes.factory.getBuilder(e,n,o),r=o.showSocialIdLink;return{build:i,load:c}},socialid.JsonP=function(e){function n(n){e=n}function o(n,o){var t=n.search(/\?/)<0?"?":"&",i=e+n+t+"id="+o;return i}function t(){return(new Date).getTime()+"_"+Math.random()}function i(e,n){var i=t();a[i]=n;var c=!1,s=function(){c||(c=!0,r.log("JSONP script loaded:",i),setTimeout(function(){d.parentNode.removeChild(d),delete a[i]},500))},d=document.createElement("script");d.type="text/javascript",d.async=!0,d.src=o(e,i),d.onload=s,d.onreadystatechange=function(){"loaded"==this.readyState&&s()};var l=document.getElementsByTagName("head")[0];l.appendChild(d)}function c(e){handler=a[e.id],"function"==typeof handler&&(delete e.id,handler(e))}var e=e||"",a={},r=socialid.console;return{setBase:n,makeRequest:i,responseHandler:c}},socialid.XdReceiver=function(e){function n(){document.body.appendChild(t)}function o(){t.src=e}var t=document.createElement("iframe");return t.style.display="none",n(),{appendBody:n,updateSrc:o,contentWindow:t.contentWindow}},socialid.transporters=socialid.transporters||{},socialid.transporters.Iframe=function(e){function n(e){if(c.log("Iframe transporter: message received from:",e.origin),e.origin==r.host())try{var n=JSON.parse(e.data);c.log("Iframe transporter: data received:",n),"function"==typeof s&&s(n)}catch(o){c.log("Iframe transporter: unrecognized message received:",e.data,"Do nothing.")}}function o(e,n,o){c.log("Iframe transporter: open url",e);{var t=new socialid.XdReceiver(d);t.contentWindow.open(e,n,o)}t.updateSrc()}function t(e,n,o){c.log("Iframe transporter: onLoginCompleted");var e=JSON.stringify(e),n=n||"*",t=window.setInterval(function(){window.opener.transporter&&(window.clearInterval(t),window.opener.transporter.onReceiverCompleted(e,n),"function"==typeof o&&o())},100)}function i(e,n){c.log("Iframe transporter: xdreceiver received message:",e);var n=n||"*";window.top&&window.top.postMessage(e,n)}var c=socialid.console,a=socialid.events,r=socialid.helpers.url,e=e||{},s=e.onMessageReceived,d=e.xdReceiverUrl;return c.log("Using Iframe transporter"),"function"==typeof s&&a.addMessageListener(n),{open:o,onLoginCompleted:t,onReceiverCompleted:i}},socialid.transporters=socialid.transporters||{},socialid.transporters.JSONP=function(e){function n(e){var n=window.setInterval(function(){e.closed&&(t.log("JSONP transporter: window popup closed"),window.clearInterval(n),"function"==typeof i&&i())},500)}function o(e,o,i){t.log("JSONP transporter: open url",e);var c=window.open(e,o,i);n(c)}var t=socialid.console,e=e||{},i=e.onLoginCompleted;return t.log("Using JSONP transporter"),{open:o}},socialid.transporters=socialid.transporters||{},socialid.transporters.LocalStorage=function(e){function n(e){if(g.log("LocalStorage transporter: message received from:",e.origin),e.origin==m.host())try{var n=JSON.parse(e.data);g.log("LocalStorage transporter: data received:",n),"function"==typeof onLoginCompletedCallback&&n.socialLoginCompleted&&onLoginCompletedCallback()}catch(o){g.log("LocalStorage transporter: unrecognized message received:",e.data,"Do nothing.")}}function o(){var e,n,o;a(),o=window.setInterval(function(){c()&&(g.log("LocalStorage transporter: login has completed"),l(),window.clearInterval(o),e=JSON.stringify({socialLoginCompleted:!0}),n="*",i(e,n))},500)}function t(e,n,o){var t=new socialid.XdReceiver(xdReceiverUrl);g.log("LocalStorage transporter: open url",e),window.open(e,n,o),t.updateSrc()}function i(e,n){g.log("LocalStorage transporter: xdreceiver posting message to window top:",e),window.top&&window.top.postMessage(e,n)}function c(){return d()==completedStatus}function a(){s(startedStatus)}function r(){s(completedStatus)}function s(e){window.localStorage.socialLoginStatus=e}function d(e){var e=window.localStorage.socialLoginStatus;return e}function l(){delete window.localStorage.socialLoginStatus}function u(){o()}function p(e,n,o){r(),"function"==typeof o&&o()}var g=socialid.console,f=socialid.events,m=socialid.helpers.url;return completedStatus="completed",startedStatus="started",e=e||{},onLoginCompletedCallback=e.onLoginCompleted,xdReceiverUrl=e.xdReceiverUrl,g.log("Using LocalStorage transporter"),"function"==typeof onLoginCompletedCallback&&f.addMessageListener(n),{open:t,onReceiverStarted:u,onLoginCompleted:p}},socialid.transporters=socialid.transporters||{},socialid.transporters.PostMessage=function(e){function n(e){if(i.log("PostMessage transporter: message received from:",e.origin),e.origin==a.host())try{var n=JSON.parse(e.data);i.log("PostMessage transporter: data received:",n),"function"==typeof r&&r(n)}catch(o){i.log("PostMessage transporter: unrecognized message received:",e.data,"Do nothing.")}}function o(e,n,o){i.log("PostMessage transporter: open url",e),window.open(e,n,o)}function t(e,n,o){var e=JSON.stringify(e),n=n||"*";window.opener&&window.opener.postMessage(e,n),"function"==typeof o&&o()}var i=socialid.console,c=socialid.events,a=socialid.helpers.url,e=e||{},r=e.onMessageReceived;return i.log("Using PostMessage transporter"),"function"==typeof r&&c.addMessageListener(n),{open:o,onLoginCompleted:t}},socialid.XdTransporter=function(e){function n(){return navigator.userAgent.match("CriOS")&&"undefined"!=typeof window.localStorage?new socialid.transporters.LocalStorage(e):navigator.userAgent.indexOf("MSIE")<0&&"undefined"!=typeof window.postMessage?new socialid.transporters.PostMessage(e):new socialid.transporters.JSONP(e)}function o(e){return r.hasOwnProperty(e)&&"function"==typeof r[e]?r[e]:null}function t(){var e=o("open")||nothing;return e.apply(this,arguments)}function i(e,n,t){var i=o("onLoginCompleted");return"function"==typeof i?i.apply(this,arguments):void t()}function c(){var e=o("onReceiverStarted");return"function"==typeof e?e():void 0}function a(){var e=o("onReceiverCompleted");return"function"==typeof e?e.apply(this,arguments):void 0}{var r;socialid.transporters}return r=n(),{open:t,onLoginCompleted:i,onReceiverStarted:c,onReceiverCompleted:a}},socialid.errors={},socialid.errors.required=function(e){var n,o;for(n in e)if(e.hasOwnProperty(n)&&(o=e[n],void 0==o||""==o))throw new socialid.errors.RequiredParamError(n)},socialid.errors.RequiredParamError=function(e){this.message="The param "+e+" is required",this.error="RequiredParamError"},socialid.facebook=function(){function e(){var e,n="fb-root";return document.getElementById(n)?!1:(r.log("Facebook: including root element"),e=document.createElement("div"),e.id=n,document.body.appendChild(e),!0)}function n(){var e="facebook-jssdk";return document.getElementById(e)?!1:(r.log("Facebook: loading SDK"),function(e,n,o){var t,i=e.getElementsByTagName(n)[0];e.getElementById(o)||(t=e.createElement(n),t.id=o,t.src="//connect.facebook.net/en_US/sdk.js",i.parentNode.insertBefore(t,i))}(document,"script",e),!0)}function o(e,n){return window.fbAsyncInit?!1:(r.log("Facebook: adding fbAsyncInit"),window.fbAsyncInit=function(){FB.init({appId:e,xfbml:!0,version:s}),i(n)},!0)}function t(e,n){var o;"connected"===e.status?(r.log("Facebook: connected"),o=e.authResponse.accessToken,"function"==typeof n.onConnected&&n.onConnected(o)):"not_authorized"===e.status?(r.log("Facebook: not authorized"),"function"==typeof n.onUnauthorized&&n.onUnauthorized()):(r.log("Facebook: logged out"),"function"==typeof n.onLoggedOut&&n.onLoggedOut())}function i(e){r.log("Facebook: getLoginStatus"),FB.getLoginStatus(function(n){t(n,e)})}function c(e){r.log("Facebook: logout"),FB.logout(function(){"function"==typeof e&&e()})}function a(t,c){c=c||{},"undefined"==typeof FB?(e(),n(),o(t,c)):i(c)}var r=socialid.console,s=socialid.FBSDKVersion||"v2.0";return{load:a,logout:c}}(),socialid.login=function(){function e(e){var e=F.apply(this,arguments);return I.get(e)}function n(e){L.log(A[e])}function o(o,t){return T=o,P=!1,t=t||{},(O=B[t.loginType||"event"])?(N.setBase(e(M.baseApi,T)),R=new socialid.XdTransporter({onMessageReceived:u,onLoginCompleted:g,xdReceiverUrl:e(M.xdReceiver,T)}),P=!0,!0):(n("loginType"),!1)}function t(n){n.providers=n.providers||[],n.theme=n.theme||"icons",n.showSocialIdLink=n.hasOwnProperty("showSocialIdLink")?n.showSocialIdLink:!0,n.loadCss=n.hasOwnProperty("loadCss")?n.loadCss:!0,n.cssUrl=n.cssUrl||e(M.css),n.loadCss&&l(n.cssUrl),n.language&&D.setLanguage(n.language)}function i(e,o){if(!P)return n("init"),!1;o=o||{},t(o);var i=document.getElementById(e);if(!i)return L.log("container element "+e+" not found in your document."),!1;try{var c=q.fromLogin(o),a=c.build()}catch(r){return L.log("error building widget: "+r),!1}i.appendChild(a)}function c(e,o){if(!P)return n("init"),!1;o=o||{},t(o);var i=document.getElementById(e);if(!i)return L.log("container element "+e+" not found in your document."),!1;try{var c=q.fromConnect(o),a=c.build()}catch(r){return L.log("error building widget: "+r),!1}i.appendChild(a),c.load()}function a(e){return P?(O.startLogin(e),void E.onLoginStart.callHandlers({event:"onLoginStart",provider:e})):(n("init"),!1)}function r(e,n){var o=document.getElementById(e);o.onclick=function(){a(n)}}function s(o){if(!P)return n("init"),!1;var t=e(M.connectAuth,T,o);R.open(t,"connect","width=600,height=423"),E.onConnectStart.callHandlers({event:"onConnectStart",provider:o})}function d(e,n){var o=document.getElementById(e);o.onclick=function(){s(n)}}function l(e){var n=document.createElement("link"),o=document.getElementsByTagName("script")[0];n.type="text/css",n.href=e,n.rel="stylesheet",o.parentNode.insertBefore(n,o)}function u(e){"function"==typeof O.handleLogin&&O.handleLogin(e),e.event&&E[e.event]&&E[e.event].callHandlers(e)}function p(e){var n=document.createElement("form"),o=document.createElement("input"),t=document.createElement("input");L.log("Posting to callback url:",e.callback_url),o.type="hidden",o.name="token",o.value=e.token,t.type="hidden",t.name="referrer_url",t.value=document.location,n.style.display="none",n.method="post",n.action=e.callback_url,n.appendChild(o),n.appendChild(t),document.body.appendChild(n),n.submit()}function g(){L.log("Requesting status..."),N.makeRequest(M.api.status,function(e){L.log("Status received:",e),"success"==e.status&&u(e.data)})}function f(e){N.makeRequest(M.api.userInfo,e)}function m(e,n){var o;S({provider:e}),o=F(M.api.disconnect,e),N.makeRequest(o,function(o){"success"==o.status?E.onDisconnectSuccess.callHandlers({event:"onDisconnectSuccess",provider:e}):E.onDisconnectError.callHandlers({event:"onDisconnectError",provider:e,code:o.status}),"function"==typeof n&&n(o)})}function h(e){N.makeRequest(M.api.logout,function(n){"success"==n.status&&E.onLogout.callHandlers(),"function"==typeof e&&e(n)})}function v(e,n){var o;S({connectionId:e}),o=F(M.api.loginConnection,e),N.makeRequest(o,n)}function w(e,n,o){var t;S({userId:e,userToken:n}),t=F(M.api.loginUserToken,e,n),N.makeRequest(t,o)}function C(e,n,o){var t;S({provider:e,token:n}),t=F(M.api.loginCredentials,e,n),N.makeRequest(t,function(e){e.data&&e.data.event&&u(e.data),"function"==typeof o&&o(e)})}function k(e,n,o){var t;S({userId:e,userToken:n}),t=F(M.api.moveTo,e,n),N.makeRequest(t,o)}function y(e,n){var o;S({facebookAppId:e}),n=n||{},"function"==typeof n.onConnected&&(o=n.onConnected),n.onConnected=function(e){C("facebook",e,function(n){"function"==typeof o&&o(e,n)})},socialid.facebook.load(e,n)}function b(e){socialid.facebook.logout(function(){h(e)})}function _(e){var n=F(M.api.clusteringFeatures);N.makeRequest(n,e)}var L=socialid.console,E=socialid.events,I=socialid.helpers.url,S=socialid.errors.required,N=new socialid.JsonP,D=new socialid.I18n,T=(D.t,null),R=null,P=!1,O=null,B={},F=I.generatePath,M={loginEvtAuth:"/marketing/login/apps/:app_id/sign_ins/events/auths/:provider",loginCbkAuth:"/marketing/login/apps/:app_id/sign_ins/auths/:provider",connectAuth:"/marketing/login/apps/:app_id/connections/events/auths/:provider",xdReceiver:"/marketing/login/apps/:app_id/sign_ins/events/xd_receiver",css:"/assets/api/themes.css",baseApi:"/marketing/login/apps/:app_id/api",api:{userInfo:"/user_info",disconnect:"/disconnect/:provider",logout:"/logout",status:"/status",moveTo:"/move_to/:user_id/:user_token",loginConnection:"/login/connection/:connection_id",loginUserToken:"/login/users/:user_id/token/:token",loginCredentials:"/login/credentials/:provider?token=:token",clusteringFeatures:"/clustering/features"}},A={init:"You need to initialize the API. Check the init() method documentation.",loginType:"Invalid login type. Should be event, callback or redirect."};E.register("onLoginSuccess"),E.register("onLoginError"),E.register("onLoginStart"),E.register("onLoginCancel"),E.register("onConnectSuccess"),E.register("onConnectError"),E.register("onConnectStart"),E.register("onConnectCancel"),E.register("onDisconnectSuccess"),E.register("onDisconnectError"),E.register("onLogout"),B.event={startLogin:function(n){var o=e(M.loginEvtAuth,T,n);R.open(o,"connect","width=600,height=423")}},B.callback={startLogin:B.event.startLogin,handleLogin:function(e){"onLoginSuccess"==e.event&&p(e)}},B.redirect={startLogin:function(n){var o=e(M.loginCbkAuth,T,n);window.location=o}};var q=function(){function e(e){return new socialid.themes.Builder(e.theme.camelize(),e.type,{providers:e.providers,showSocialIdLink:e.showSocialIdLink,i18n:D})}function n(n){var o=n;return o.type="login",e(o)}function o(n){var o=n;return o.type="connect",e(o)}return{fromLogin:n,fromConnect:o}}();return{init:o,renderLoginWidget:i,renderConnectWidget:c,startLogin:a,startConnect:s,startLoginClick:r,startConnectClick:d,getUserInfo:f,disconnect:m,logout:h,loginConnection:v,loginUserToken:w,loginCredentials:C,moveTo:k,automaticFacebookLogin:y,logoutWithFacebook:b,clusteringFeatures:_,apiHandler:N.responseHandler}}(),socialid.selfie=function(){function e(e){var e=g.apply(this,arguments);return p.get(e)}function n(e){console.log(m[e])}function o(n){return s=n,l.setBase(e(f.baseApi,s)),d=!0,!0}function t(){if("function"==typeof arguments[0])i.apply(this,arguments);else{var e=arguments[0],n=arguments[1],o=arguments[2]||{};o.hashtag=e,i(n,o)}}function i(e,o){o=o||{};var t=o.page||1,i=o.limit||15,c=o.order||"created_at",a=o.user_id||"",r=o.hashtag||"";return d?(u({handler:e}),url=g(f.api.posts,r,t,i,c,a),void l.makeRequest(url,e)):(n("init"),!1)}function c(e,o,t){t=t||{};var i=t.user_id||"";return d?(u({postId:e}),url=g(f.api.like,e,i),void l.makeRequest(url,o)):(n("init"),!1)}function a(e,o,t){t=t||{};var i=t.user_id||"";return d?(u({postId:e}),url=g(f.api.unlike,e,i),void l.makeRequest(url,o)):(n("init"),!1)}function r(e,o){return d?(u({postId:e}),url=g(f.api.postInfo,e),void l.makeRequest(url,o)):(n("init"),!1)}var s=null,d=!1,l=new socialid.JsonP,u=socialid.errors.required,p=socialid.helpers.url,g=p.generatePath,f={baseApi:"/marketing/selfie/apps/:app_id/api",api:{posts:"/posts/search?hashtag=:hashtag&page=:page&limit=:limit&order=:order&user_id=:user_id",like:"/posts/:post_id/like?user_id=:user_id",unlike:"/posts/:post_id/unlike?user_id=:user_id",postInfo:"/posts/:post_id"}},m={init:"You need to initialize the API. Check the init() method documentation."};return{init:o,posts:t,like:c,unlike:a,getPostInfo:r,apiHandler:l.responseHandler}}(),function(){function e(){var e=document.readyState;return i.log("> readyState: ",e),"complete"===e||"loaded"===e||!document.attachEvent&&"interactive"===e?!0:!1}function n(){socialid.loaded=!0,i.log("socialid JS API loaded!"),"function"==typeof socialid.onLoad&&socialid.onLoad()}function o(){return i.log("checking ready..."),socialid.loaded||c&&!e()||n(),socialid.loaded}function t(){i.log("waiting DOM load..."),document.addEventListener?(document.addEventListener("DOMContentLoaded",o,!1),window.addEventListener("load",o,!1)):(document.attachEvent("onreadystatechange",o),window.attachEvent("onload",o))}var i=socialid.console,c=socialid.waitDOMReady;o()||t()}();