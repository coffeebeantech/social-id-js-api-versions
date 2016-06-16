"object"!=typeof socialid&&(socialid={}),socialid.version="1.5.0",socialid.loaded=!1,socialid.SSLEnv=!0,socialid.waitDOMReady=socialid.waitDOMReady||!0,socialid.hostUrl="https://app.socialidnow.com",socialid.debugMode=socialid.debugMode||!1,"undefined"!=typeof console&&socialid.debugMode?socialid.console=console:socialid.console={log:function(){}},socialid.events=function(){function e(e){return this[e]=new i(e),this[e]}function n(e,n,o){e.addEventListener?e.addEventListener(n,o,!1):e.attachEvent&&e.attachEvent("on"+n,o)}function o(e){n(window,"message",e)}var t=socialid.console,i=function(e){function n(e){return a.push(e),!0}function o(n){t.log("Events: calling handlers from "+e+" with data ",n);for(var o=0;o<a.length;o++)a[o](n)}function i(){return a=[]}function c(){return a.length}var a=[],e=e;return{addHandler:n,callHandlers:o,clearHandlers:i,size:c}};return{register:e,addMessageListener:o}}(),socialid.helpers=socialid.helpers||{},socialid.helpers.dialog=function(){function e(e,n){var t=window.setInterval(function(){e.closed&&(i.log("Dialog close"),window.clearInterval(t),o.onDialogClose.callHandlers({event:"onDialogClose"}),"function"==typeof n&&n())},500)}function n(n,c,a,r){var s=window.open(n,c,a||t);return i.log("Dialog open url",n),o.onDialogOpen.callHandlers({event:"onDialogOpen"}),e(s,r),s}var o=socialid.events,t="width=600,height=423",i=socialid.console;return o.register("onDialogOpen"),o.register("onDialogClose"),{open:n}}(),String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)},String.prototype.camelize=function(){var e=this.split("_"),n="";for(i=0;i<e.length;i++)n+=e[i].capitalize();return n},socialid.helpers=socialid.helpers||{},socialid.helpers.url=function(){function e(e){return e="undefined"!=typeof e?e:i,e?t.replace(/^http:/,"https:"):t}function n(n,o){return e(o)+n}function o(e){for(var n=e.match(/(:[\w]*)/g),o=0;n&&o<n.length;o++)e=e.replace(n[o],arguments[o+1]);return e}var t=socialid.hostUrl,i=socialid.SSLEnv;socialid.console;return{host:e,get:n,generatePath:o}}(),socialid.translations={en:{login_facebook:"Login with Facebook",login_twitter:"Login with Twitter",login_linkedin:"Login with LinkedIn",login_gplus:"Login with Google+",connect_facebook:"Connect with Facebook",connect_twitter:"Connect with Twitter",connect_linkedin:"Connect with LinkedIn",connect_gplus:"Connect with Google+",disconnect_facebook:"Disconnect from Facebook",disconnect_twitter:"Disconnect from Twitter",disconnect_linkedin:"Disconnect from LinkedIn",disconnect_gplus:"Disconnect from Google+",login:"login",connect:"connect",disconnect:"disconnect",facebook:"Facebook",twitter:"Twitter",linkedin:"LinkedIn",gplus:"Google+",connect_facebook_account:"Connect Facebook to your account.",connect_twitter_account:"Connect Twitter to your account.",connect_linkedin_account:"Connect LinkedIn to your account.",connect_gplus_account:"Connect Google+ to your account.",disconnect_facebook_account:"Disconnect Facebook from your account.",disconnect_twitter_account:"Disconnect Twitter from your account.",disconnect_linkedin_account:"Disconnect LinkedIn from your account.",disconnect_gplus_account:"Disconnect Google+ from your account.",connect_conflict:"This credential is associated with another user. Disconnect from him first and then connect here again."},pt_br:{login_facebook:"Login com Facebook",login_twitter:"Login com Twitter",login_linkedin:"Login com LinkedIn",login_gplus:"Login com Google+",connect_facebook:"Conectar com Facebook",connect_twitter:"Conectar com Twitter",connect_linkedin:"Conectar com LinkedIn",connect_gplus:"Conectar com Google+",disconnect_facebook:"Desconectar do Facebook",disconnect_twitter:"Desconectar do Twitter",disconnect_linkedin:"Desconectar do LinkedIn",disconnect_gplus:"Desconectar do Google+",login:"login",connect:"conectar",disconnect:"desconectar",facebook:"Facebook",twitter:"Twitter",linkedin:"LinkedIn",gplus:"Google+",connect_facebook_account:"Conecte o Facebook a sua conta.",connect_twitter_account:"Conecte o Twitter a sua conta.",connect_linkedin_account:"Conecte o LinkedIn a sua conta.",connect_gplus_account:"Conecte o Google+ a sua conta.",disconnect_facebook_account:"Desconecte o Facebook de sua conta.",disconnect_twitter_account:"Desconecte o Twitter de sua conta.",disconnect_linkedin_account:"Desconecte o LinkedIn de sua conta.",disconnect_gplus_account:"Desconecte o Google+ de sua conta.",connect_conflict:"Esta credencial est\xe1 associada a outro usu\xe1rio. Desconecte dele primeiro e depois conecte aqui novamente."}},socialid.I18n=function(e){function n(){var e=navigator.language||navigator.browserLanguage;return e.match(/en/)?"en":e.match(/br/i)?"pt_br":void 0}function o(e){return socialid.translations[c][e]?socialid.translations[c][e]:(a.log("key "+e+" not found in the translations"),e)}function t(e){return socialid.translations[e]?c=e:a.log("unsupported language."),this}function i(){return c}var c=e,a=socialid.console;return null==c&&t(n()),{t:o,setLanguage:t,getlanguage:i}},socialid.themes=socialid.themes||{},socialid.themes.Base=function(e){var n=e.i18n||new socialid.I18n,o=n.t;return{buildContainer:function(e){var n=document.createElement("li");return n.id="socialid_"+e,n},buildDisconnectIcon:function(e){var n=document.createElement("div"),t=document.createElement("div");return t.className="status-icon",t.innerHTML="&#10006;",n.className="disconnect "+e+"-icon",n.title=o("disconnect_"+e+"_account"),n.appendChild(t),n},buildConnectedIcon:function(e,n){var o=document.createElement("img"),t=document.createElement("div"),i=document.createElement("div");return o.src=n.picture_url,i.className="status-icon",i.innerHTML="&#10004;",t.className="connected",t.appendChild(i),t.appendChild(o),t}}},socialid.themes=socialid.themes||{},socialid.themes.Loading=function(e){function n(e){return"socialid_"+e+"_loading"}function o(e){var o=document.createElement("img");return o.id=n(e),o.className="loading",o.src=r+s.loading,o}function t(e){var o=document.getElementById(n(e));o&&(o.style.display="inline")}function i(e){var o=document.getElementById(n(e));o&&(o.style.display="none")}function c(){for(var n in e)e.hasOwnProperty(n)&&t(e[n])}function a(){for(var n in e)e.hasOwnProperty(n)&&i(e[n])}var e=e,r=socialid.helpers.url.host(),s={loading:"/assets/load.gif"};return{build:o,show:t,showAll:c,hideAll:a}},socialid.themes=socialid.themes||{},socialid.themes.Events=function(e){function n(){socialid.login.getUserInfo(c),u.showAll()}function o(e){l.log("Connect Widget: new provider connected",e),n()}function t(e){l.log("Connect Widget: error",e),u.hideAll()}function i(e){l.log("Connect Widget: provider disconnected",e),u.hideAll(),"success"==e.status&&n()}function c(e){if(l.log("Connect Widget: handle user info",e),"success"==e.status){for(var n in r)if(r.hasOwnProperty(n)){var o=r[n],t=e.data[o],i=document.getElementById("socialid_"+o);if(t)var c=s(o,t);else var c=d(o);i.parentNode.replaceChild(c,i)}}else for(var n in r)if(r.hasOwnProperty(n)){var o=r[n],i=document.getElementById("socialid_"+o),c=d(o);i.parentNode.replaceChild(c,i)}u.hideAll()}function a(){socialid.events.onConnectSuccess.addHandler(o),socialid.events.onConnectCancel.addHandler(t),socialid.events.onConnectError.addHandler(t),socialid.events.onDisconnectSuccess.addHandler(n),socialid.events.onDisconnectError.addHandler(t),socialid.events.onLoginSuccess.addHandler(o),socialid.events.onLoginCancel.addHandler(t),socialid.events.onLoginError.addHandler(t),socialid.events.onLogout.addHandler(n),n()}var r=e.providers,s=e.onConnect,d=e.onDisconnect,l=socialid.console,u=new socialid.themes.Loading(r);return{load:a,handleDisconnect:i}},socialid.themes=socialid.themes||{},socialid.themes.connect=socialid.themes.connect||{},socialid.themes.connect.Bricks=function(e){function n(e,n){var o=l.buildContainer(e),t=document.createTextNode(r("disconnect_"+e)),i=document.createElement("img");return i.className="picture",i.src=n.picture_url,o.className=e+"-provider",o.onclick=function(){socialid.login.disconnect(e,u.handleDisconnect),d.show(e)},o.appendChild(d.build(e)),o.appendChild(i),o.appendChild(t),o}function o(e){var n=l.buildContainer(e),o=document.createTextNode(r("connect_"+e));return n.className=e+"-provider",n.onclick=function(){socialid.login.startConnect(e),d.show(e)},n.appendChild(d.build(e)),n.appendChild(o),n}function t(){var e=document.createElement("div"),n=document.createElement("ul");e.className=s;for(var t in c)c.hasOwnProperty(t)&&n.appendChild(o(c[t]));return e.appendChild(n),e}function i(){u.load()}var c=e.providers||[],a=e.i18n||new socialid.I18n,r=a.t,s="bricks",d=new socialid.themes.Loading(c),l=new socialid.themes.Base(e),u=new socialid.themes.Events({providers:c,onConnect:n,onDisconnect:o});return{build:t,load:i}},socialid.themes=socialid.themes||{},socialid.themes.connect=socialid.themes.connect||{},socialid.themes.connect.Icons=function(e){function n(e,n){var o=l.buildContainer(e),t=document.createElement("div");return t.className="icon "+e+"-provider",o.onclick=function(){socialid.login.disconnect(e,u.handleDisconnect),d.show(e)},t.appendChild(d.build(e)),t.appendChild(l.buildDisconnectIcon(e)),t.appendChild(l.buildConnectedIcon(e,n)),o.appendChild(t),o}function o(e){var n=l.buildContainer(e),o=document.createElement("div");return o.className="icon "+e+"-icon",o.title=r("connect_"+e+"_account"),n.onclick=function(){socialid.login.startConnect(e),d.show(e)},o.appendChild(d.build(e)),n.appendChild(o),n}function t(){var e=document.createElement("div"),n=document.createElement("ul");e.className=s;for(var t in c)c.hasOwnProperty(t)&&n.appendChild(o(c[t]));return e.appendChild(n),e}function i(){u.load()}var c=e.providers||[],a=e.i18n||new socialid.I18n,r=a.t,s=(socialid.console,"icons"),d=new socialid.themes.Loading(c),l=new socialid.themes.Base(e),u=new socialid.themes.Events({providers:c,onConnect:n,onDisconnect:o});return{build:t,load:i}},socialid.themes=socialid.themes||{},socialid.themes.connect=socialid.themes.connect||{},socialid.themes.connect.LabeledIcons=function(e){function n(e,n,o){var t=document.createElement("div"),i=document.createElement("div"),c=document.createTextNode(s(e)),a=document.createElement("a"),r=document.createTextNode(n);return t.className="label",a.href="javascript:void(0);",a.appendChild(r),a.onclick=o,i.appendChild(c),t.appendChild(i),t.appendChild(a),t}function o(e,o){var t=u.buildContainer(e),i=function(){socialid.login.disconnect(e,p.handleDisconnect),l.show(e)},c=n(e,s("disconnect"),i),a=document.createElement("div");return a.className="icon "+e+"-provider",a.onclick=i,a.appendChild(l.build(e)),a.appendChild(u.buildDisconnectIcon(e)),a.appendChild(u.buildConnectedIcon(e,o)),t.appendChild(a),t.appendChild(c),t}function t(e){var o=u.buildContainer(e),t=function(){socialid.login.startConnect(e),l.show(e)},i=n(e,s("connect"),t),c=document.createElement("div");return c.className="icon "+e+"-icon",c.title=s("connect_"+e+"_account"),c.onclick=t,c.appendChild(l.build(e)),o.appendChild(c),o.appendChild(i),o}function i(){var e=document.createElement("div"),n=document.createElement("ul");e.className=d;for(var o in a)a.hasOwnProperty(o)&&n.appendChild(t(a[o]));return e.appendChild(n),e}function c(){p.load()}var a=e.providers||[],r=e.i18n||new socialid.I18n,s=(socialid.console,r.t),d="labeled_icons",l=new socialid.themes.Loading(a),u=new socialid.themes.Base(e),p=new socialid.themes.Events({providers:a,onConnect:o,onDisconnect:t});return{build:i,load:c}},socialid.themes=socialid.themes||{},socialid.themes.login=socialid.themes.login||{},socialid.themes.login.Bricks=function(e){function n(e){var n=document.createElement("li"),o=document.createTextNode(c("login_"+e));return n.className=e+"-provider",n.onclick=function(){socialid.login.startLogin(e)},n.appendChild(o),n}function o(){var e=document.createElement("div"),o=document.createElement("ul");e.className=a;for(var i in t)t.hasOwnProperty(i)&&o.appendChild(n(t[i]));return e.appendChild(o),e}var t=e.providers||[],i=e.i18n||new socialid.I18n,c=i.t,a="bricks";return{build:o}},socialid.themes=socialid.themes||{},socialid.themes.login=socialid.themes.login||{},socialid.themes.login.Icons=function(e){function n(e){var n=document.createElement("li"),o=document.createElement("div");return o.className="icon "+e+"-icon",o.onclick=function(){socialid.login.startLogin(e)},n.appendChild(o),n}function o(){var e=document.createElement("div"),o=document.createElement("ul");e.className=c;for(var i in t)t.hasOwnProperty(i)&&o.appendChild(n(t[i]));return e.appendChild(o),e}var t=e.providers||[],i=e.i18n||new socialid.I18n,c=(i.t,"icons");return{build:o}},socialid.themes=socialid.themes||{},socialid.themes.login=socialid.themes.login||{},socialid.themes.login.LabeledIcons=function(e){function n(e){var n=document.createElement("li"),o=document.createElement("div"),t=document.createElement("div"),i=document.createElement("div"),a=document.createTextNode(c(e)),r=document.createElement("a"),s=document.createTextNode(c("login"));return t.className="label",o.className="icon "+e+"-icon",r.href="javascript:void(0);",o.onclick=r.onclick=function(){socialid.login.startLogin(e)},r.appendChild(s),i.appendChild(a),t.appendChild(i),t.appendChild(r),n.appendChild(o),n.appendChild(t),n}function o(){var e=document.createElement("div"),o=document.createElement("ul");e.className=a;for(var i in t)t.hasOwnProperty(i)&&o.appendChild(n(t[i]));return e.appendChild(o),e}var t=e.providers||[],i=e.i18n||new socialid.I18n,c=i.t,a="labeled_icons";return{build:o}},socialid.themes=socialid.themes||{},socialid.themes.factory={getBuilder:function(e,n,o){var t=socialid.themes[n][e];if("function"==typeof t)return new t(o);throw"unsupported theme"}},socialid.themes.Builder=function(e,n,o){function t(){var e=document.createElement("div"),n=document.createElement("a"),o=document.createTextNode("Powered by Social-ID NOW");return e.className="powered-by",n.href="http://www.socialidnow.com",n.target="_blank",n.appendChild(o),e.appendChild(n),e}function i(e){var n=a.build();return r&&n.appendChild(t()),n}function c(){"function"==typeof a.load&&a.load()}var a=socialid.themes.factory.getBuilder(e,n,o),r=o.showSocialIdLink;return{build:i,load:c}},socialid.JsonP=function(e){function n(n){e=n}function o(n,o){var t=n.search(/\?/)<0?"?":"&",i=e+n+t+"id="+o;return i}function t(){return(new Date).getTime()+"_"+Math.random()}function i(e,n){var i=t();a[i]=n;var c=!1,s=function(){c||(c=!0,r.log("JSONP script loaded:",i),setTimeout(function(){d.parentNode.removeChild(d),delete a[i]},500))},d=document.createElement("script");d.type="text/javascript",d.async=!0,d.src=o(e,i),d.onload=s,d.onreadystatechange=function(){"loaded"==this.readyState&&s()};var l=document.getElementsByTagName("head")[0];l.appendChild(d)}function c(e){handler=a[e.id],"function"==typeof handler&&(delete e.id,handler(e))}var e=e||"",a={},r=socialid.console;return{setBase:n,makeRequest:i,responseHandler:c}},socialid.XdReceiver=function(e){function n(){document.body.appendChild(t)}function o(){t.src=e}var t=document.createElement("iframe");return t.style.display="none",n(),{appendBody:n,updateSrc:o,contentWindow:t.contentWindow}},socialid.transporters=socialid.transporters||{},socialid.transporters.Iframe=function(e){function n(e){if(c.log("Iframe transporter: message received from:",e.origin),e.origin==r.host())try{var n=JSON.parse(e.data);c.log("Iframe transporter: data received:",n),"function"==typeof s&&s(n)}catch(o){c.log("Iframe transporter: unrecognized message received:",e.data,"Do nothing.")}}function o(e,n,o){c.log("Iframe transporter: open url",e);var t=new socialid.XdReceiver(d());t.contentWindow.open(e,n,o);t.updateSrc()}function t(e,n,o){c.log("Iframe transporter: onLoginCompleted");var e=JSON.stringify(e),n=n||"*",t=window.setInterval(function(){window.opener.transporter&&(window.clearInterval(t),window.opener.transporter.onReceiverCompleted(e,n),"function"==typeof o&&o())},100)}function i(e,n){c.log("Iframe transporter: xdreceiver received message:",e);var n=n||"*";window.top&&window.top.postMessage(e,n)}var c=socialid.console,a=socialid.events,r=socialid.helpers.url,e=e||{},s=e.onMessageReceived,d=e.getReceiverUrl;return c.log("Using Iframe transporter"),"function"==typeof s&&a.addMessageListener(n),{open:o,onLoginCompleted:t,onReceiverCompleted:i}},socialid.transporters=socialid.transporters||{},socialid.transporters.JSONP=function(e){function n(e,n,c){o.log("JSONP transporter: open url",e),t.open(e,n,c,i)}var o=socialid.console,e=e||{},t=socialid.helpers.dialog,i=e.onLoginCompleted;return o.log("Using JSONP transporter"),{open:n}},socialid.transporters=socialid.transporters||{},socialid.transporters.LocalStorage=function(e){function n(e){if(g.log("LocalStorage transporter: message received from:",e.origin),e.origin==m.host())try{var n=JSON.parse(e.data);g.log("LocalStorage transporter: data received:",n),"function"==typeof C&&n.socialLoginCompleted&&C()}catch(o){g.log("LocalStorage transporter: unrecognized message received:",e.data,"Do nothing.")}}function o(){var e,n,o;a(),o=window.setInterval(function(){c()&&(g.log("LocalStorage transporter: login has completed"),l(),window.clearInterval(o),e=JSON.stringify({socialLoginCompleted:!0}),n="*",i(e,n))},500)}function t(e,n,o){var t=new socialid.XdReceiver(k());g.log("LocalStorage transporter: open url",e),h.open(e,n,o),t.updateSrc()}function i(e,n){g.log("LocalStorage transporter: xdreceiver posting message to window top:",e),window.top&&window.top.postMessage(e,n)}function c(){return d()==v}function a(){s(w)}function r(){s(v)}function s(e){window.localStorage.socialLoginStatus=e}function d(e){var e=window.localStorage.socialLoginStatus;return e}function l(){delete window.localStorage.socialLoginStatus}function u(){o()}function p(e,n,o){r(),"function"==typeof o&&o()}var g=socialid.console,f=socialid.events,m=socialid.helpers.url,h=socialid.helpers.dialog,v="completed",w="started",e=e||{},C=e.onLoginCompleted,k=e.getReceiverUrl;return g.log("Using LocalStorage transporter"),"function"==typeof C&&f.addMessageListener(n),{open:t,onReceiverStarted:u,onLoginCompleted:p}},socialid.transporters=socialid.transporters||{},socialid.transporters.PostMessage=function(e){function n(e){if(i.log("PostMessage transporter: message received from:",e.origin),e.origin==a.host())try{var n=JSON.parse(e.data);i.log("PostMessage transporter: data received:",n),"function"==typeof s&&s(n)}catch(o){i.log("PostMessage transporter: unrecognized message received:",e.data,"Do nothing.")}}function o(e,n,o){i.log("PostMessage transporter: open url",e),r.open(e,n,o)}function t(e,n,o){var e=JSON.stringify(e),n=n||"*";window.opener&&window.opener.postMessage(e,n),"function"==typeof o&&o()}var i=socialid.console,c=socialid.events,a=socialid.helpers.url,r=socialid.helpers.dialog,e=e||{},s=e.onMessageReceived;return i.log("Using PostMessage transporter"),"function"==typeof s&&c.addMessageListener(n),{open:o,onLoginCompleted:t}},socialid.XdTransporter=function(e){function n(){return t()&&"undefined"!=typeof window.localStorage?new socialid.transporters.LocalStorage(e):o()||"undefined"==typeof window.postMessage?new socialid.transporters.JSONP(e):new socialid.transporters.PostMessage(e)}function o(){return navigator.userAgent.toLowerCase().match(/msie|trident/)}function t(){return navigator.userAgent.toLowerCase().match(/crios/)}function i(e){return d.hasOwnProperty(e)&&"function"==typeof d[e]?d[e]:null}function c(e,n,o){var t=i("open")||nothing;return t.apply(this,arguments)}function a(e,n,o){var t=i("onLoginCompleted");return"function"==typeof t?t.apply(this,arguments):void o()}function r(){var e=i("onReceiverStarted");return"function"==typeof e?e():void 0}function s(e,n){var o=i("onReceiverCompleted");return"function"==typeof o?o.apply(this,arguments):void 0}var d;socialid.transporters;return d=n(),{open:c,onLoginCompleted:a,onReceiverStarted:r,onReceiverCompleted:s}},socialid.errors={},socialid.errors.required=function(e){var n,o;for(n in e)if(e.hasOwnProperty(n)&&(o=e[n],void 0==o||""==o))throw new socialid.errors.RequiredParamError(n)},socialid.errors.RequiredParamError=function(e){this.message="The param "+e+" is required",this.error="RequiredParamError"},socialid.facebook=function(){function e(){var e,n="fb-root";return document.getElementById(n)?!1:(r.log("Facebook: including root element"),e=document.createElement("div"),e.id=n,document.body.appendChild(e),!0)}function n(){var e="facebook-jssdk";return document.getElementById(e)?!1:(r.log("Facebook: loading SDK"),function(e,n,o){var t,i=e.getElementsByTagName(n)[0];e.getElementById(o)||(t=e.createElement(n),t.id=o,t.src="//connect.facebook.net/en_US/sdk.js",i.parentNode.insertBefore(t,i))}(document,"script",e),!0)}function o(e,n){return window.fbAsyncInit?!1:(r.log("Facebook: adding fbAsyncInit"),window.fbAsyncInit=function(){FB.init({appId:e,xfbml:!0,version:s}),i(n)},!0)}function t(e,n){var o;"connected"===e.status?(r.log("Facebook: connected"),o=e.authResponse.accessToken,"function"==typeof n.onConnected&&n.onConnected(o)):"not_authorized"===e.status?(r.log("Facebook: not authorized"),"function"==typeof n.onUnauthorized&&n.onUnauthorized()):(r.log("Facebook: logged out"),"function"==typeof n.onLoggedOut&&n.onLoggedOut())}function i(e){r.log("Facebook: getLoginStatus"),FB.getLoginStatus(function(n){t(n,e)})}function c(e){r.log("Facebook: logout"),FB.logout(function(n){"function"==typeof e&&e()})}function a(t,c){c=c||{},"undefined"==typeof FB?(e(),n(),o(t,c)):i(c)}var r=socialid.console,s=socialid.FBSDKVersion||"v2.0";return{load:a,logout:c}}(),socialid.login=function(){function e(e){var e=H.apply(this,arguments);return N.get(e)}function n(){return e(q.xdReceiver,O)}function o(e){S.log(U[e])}function t(n,t){return O=n,M=!1,t=t||{},(A=F[t.loginType||"event"])?(R.setBase(e(q.baseApi,O)),M=!0,!0):(o("loginType"),!1)}function i(n){n.providers=n.providers||[],n.theme=n.theme||"icons",n.showSocialIdLink=n.hasOwnProperty("showSocialIdLink")?n.showSocialIdLink:!0,n.loadCss=n.hasOwnProperty("loadCss")?n.loadCss:!0,n.cssUrl=n.cssUrl||e(q.css),n.loadCss&&u(n.cssUrl),n.language&&P.setLanguage(n.language)}function c(e,n){if(!M)return o("init"),!1;n=n||{},i(n);var t=document.getElementById(e);if(!t)return S.log("container element "+e+" not found in your document."),!1;try{var c=x.fromLogin(n),a=c.build()}catch(r){return S.log("error building widget: "+r),!1}t.appendChild(a)}function a(e,n){if(!M)return o("init"),!1;n=n||{},i(n);var t=document.getElementById(e);if(!t)return S.log("container element "+e+" not found in your document."),!1;try{var c=x.fromConnect(n),a=c.build()}catch(r){return S.log("error building widget: "+r),!1}t.appendChild(a),c.load()}function r(e){return M?(D.onLoginStart.callHandlers({event:"onLoginStart",provider:e}),void A.startLogin(e)):(o("init"),!1)}function s(e,n){var o=document.getElementById(e);o.onclick=function(){r(n)}}function d(n){if(!M)return o("init"),!1;D.onConnectStart.callHandlers({event:"onConnectStart",provider:n});var t=e(q.connectAuth,O,n);B.open(t,"connect","width=600,height=423")}function l(e,n){var o=document.getElementById(e);o.onclick=function(){d(n)}}function u(e){var n=document.createElement("link"),o=document.getElementsByTagName("script")[0];n.type="text/css",n.href=e,n.rel="stylesheet",o.parentNode.insertBefore(n,o)}function p(e){"function"==typeof A.handleLogin&&A.handleLogin(e),e.event&&D[e.event]&&D[e.event].callHandlers(e)}function g(e){var n=document.createElement("form"),o=document.createElement("input"),t=document.createElement("input");S.log("Posting to callback url:",e.callback_url),o.type="hidden",o.name="token",o.value=e.token,t.type="hidden",t.name="referrer_url",t.value=document.location,n.style.display="none",n.method="post",n.action=e.callback_url,n.appendChild(o),n.appendChild(t),document.body.appendChild(n),n.submit()}function f(){S.log("Requesting status..."),R.makeRequest(q.api.status,function(e){S.log("Status received:",e),"success"==e.status&&p(e.data)})}function m(e,n){var o,n=n||{};o=H(q.api.userInfo,n.fields||""),R.makeRequest(o,e)}function h(e){var n=H(q.api.userData);R.makeRequest(n,e)}function v(e,n){var o;T({provider:e}),o=H(q.api.disconnect,e),R.makeRequest(o,function(o){"success"==o.status?D.onDisconnectSuccess.callHandlers({event:"onDisconnectSuccess",provider:e}):D.onDisconnectError.callHandlers({event:"onDisconnectError",provider:e,code:o.status}),"function"==typeof n&&n(o)})}function w(e){R.makeRequest(q.api.logout,function(n){"success"==n.status&&D.onLogout.callHandlers({event:"onLogout"}),"function"==typeof e&&e(n)})}function C(e,n){var o;T({connectionId:e}),o=H(q.api.loginConnection,e),R.makeRequest(o,n)}function k(e,n,o){var t;T({userId:e,userToken:n}),t=H(q.api.loginUserToken,e,n),R.makeRequest(t,o)}function y(e,n,o){var t;T({provider:e,token:n}),t=H(q.api.loginCredentials,e,n),R.makeRequest(t,function(e){e.data&&e.data.event&&p(e.data),"function"==typeof o&&o(e)})}function _(e,n,o){var t;T({userId:e,userToken:n}),t=H(q.api.moveTo,e,n),R.makeRequest(t,o)}function b(e,n){var o;T({facebookAppId:e}),n=n||{},"function"==typeof n.onConnected&&(o=n.onConnected),n.onConnected=function(e){y("facebook",e,function(n){"function"==typeof o&&o(e,n)})},socialid.facebook.load(e,n)}function L(e){socialid.facebook.logout(function(){w(e)})}function E(e){var n=H(q.api.clusteringFeatures);R.makeRequest(n,e)}function I(e,n){var o;T({macAddress:e}),o=H(q.api.deleteMacAddress,e),R.makeRequest(o,n)}var S=socialid.console,D=socialid.events,N=socialid.helpers.url,T=socialid.errors.required,R=new socialid.JsonP,P=new socialid.I18n,O=(P.t,null),B=null,M=!1,A=null,F={},H=N.generatePath,q={loginEvtAuth:"/marketing/login/apps/:app_id/sign_ins/events/auths/:provider",loginCbkAuth:"/marketing/login/apps/:app_id/sign_ins/auths/:provider",connectAuth:"/marketing/login/apps/:app_id/connections/events/auths/:provider",xdReceiver:"/marketing/login/apps/:app_id/sign_ins/events/xd_receiver",css:"/assets/api/themes.css",baseApi:"/marketing/login/apps/:app_id/api",api:{userInfo:"/user_info?fields=:fields",userData:"/user/data",disconnect:"/disconnect/:provider",logout:"/logout",status:"/status",moveTo:"/move_to/:user_id/:user_token",loginConnection:"/login/connection/:connection_id",loginUserToken:"/login/users/:user_id/token/:token",loginCredentials:"/login/credentials/:provider?token=:token",clusteringFeatures:"/clustering/features",deleteMacAddress:"/mac_addresses/:mac_address/destroy"}},U={init:"You need to initialize the API. Check the init() method documentation.",loginType:"Invalid login type. Should be event, callback or redirect."};B=new socialid.XdTransporter({onMessageReceived:p,onLoginCompleted:f,getReceiverUrl:n}),D.register("onLoginSuccess"),D.register("onLoginError"),D.register("onLoginStart"),D.register("onLoginCancel"),D.register("onConnectSuccess"),D.register("onConnectError"),D.register("onConnectStart"),D.register("onConnectCancel"),D.register("onDisconnectSuccess"),D.register("onDisconnectError"),D.register("onLogout"),F.event={startLogin:function(n){var o=e(q.loginEvtAuth,O,n);B.open(o,"connect","width=600,height=423")}},F.callback={startLogin:F.event.startLogin,handleLogin:function(e){"onLoginSuccess"==e.event&&g(e)}},F.redirect={startLogin:function(n){var o=e(q.loginCbkAuth,O,n);window.location=o}};var x=function(){function e(e){return new socialid.themes.Builder(e.theme.camelize(),e.type,{providers:e.providers,showSocialIdLink:e.showSocialIdLink,i18n:P})}function n(n){var o=n;return o.type="login",e(o)}function o(n){var o=n;return o.type="connect",e(o)}return{fromLogin:n,fromConnect:o}}();return{init:t,renderLoginWidget:c,renderConnectWidget:a,startLogin:r,startConnect:d,startLoginClick:s,startConnectClick:l,getUserInfo:m,getUserData:h,disconnect:v,logout:w,loginConnection:C,loginUserToken:k,loginCredentials:y,moveTo:_,automaticFacebookLogin:b,logoutWithFacebook:L,clusteringFeatures:E,deleteMacAddress:I,apiHandler:R.responseHandler}}(),socialid.selfie=function(){function e(e){var e=g.apply(this,arguments);return p.get(e)}function n(e){console.log(m[e])}function o(n){return s=n,l.setBase(e(f.baseApi,s)),d=!0,!0}function t(){if("function"==typeof arguments[0])i.apply(this,arguments);else{var e=arguments[0],n=arguments[1],o=arguments[2]||{};o.hashtag=e,i(n,o)}}function i(e,o){o=o||{};var t=o.page||1,i=o.limit||15,c=o.order||"created_at",a=o.user_id||"",r=o.hashtag||"";return d?(u({handler:e}),url=g(f.api.posts,r,t,i,c,a),void l.makeRequest(url,e)):(n("init"),!1)}function c(e,o,t){t=t||{};var i=t.user_id||"";return d?(u({postId:e}),url=g(f.api.like,e,i),void l.makeRequest(url,o)):(n("init"),!1)}function a(e,o,t){t=t||{};var i=t.user_id||"";return d?(u({postId:e}),url=g(f.api.unlike,e,i),void l.makeRequest(url,o)):(n("init"),!1)}function r(e,o){return d?(u({postId:e}),url=g(f.api.postInfo,e),void l.makeRequest(url,o)):(n("init"),!1)}var s=null,d=!1,l=new socialid.JsonP,u=socialid.errors.required,p=socialid.helpers.url,g=p.generatePath,f={baseApi:"/marketing/selfie/apps/:app_id/api",api:{posts:"/posts/search?hashtag=:hashtag&page=:page&limit=:limit&order=:order&user_id=:user_id",like:"/posts/:post_id/like?user_id=:user_id",unlike:"/posts/:post_id/unlike?user_id=:user_id",postInfo:"/posts/:post_id"}},m={init:"You need to initialize the API. Check the init() method documentation."};return{init:o,posts:t,like:c,unlike:a,getPostInfo:r,apiHandler:l.responseHandler}}(),function(){function e(){var e=document.readyState;return i.log("> readyState: ",e),"complete"===e||"loaded"===e||!document.attachEvent&&"interactive"===e?!0:!1}function n(){socialid.loaded=!0,i.log("socialid JS API loaded!"),"function"==typeof socialid.onLoad&&socialid.onLoad()}function o(){return i.log("checking ready..."),socialid.loaded||c&&!e()||n(),socialid.loaded}function t(){i.log("waiting DOM load..."),document.addEventListener?(document.addEventListener("DOMContentLoaded",o,!1),window.addEventListener("load",o,!1)):(document.attachEvent("onreadystatechange",o),window.attachEvent("onload",o))}var i=socialid.console,c=socialid.waitDOMReady;o()||t()}();