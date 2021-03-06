# social-id-js-api-versions

Tracking of Social-ID Marketing Platform Javascript API versions and changelog.

## Current version

  1.19.0

## Current url

  https://app.socialidnow.com/assets/api/socialid.js

## Check version

In a web page with the socialid.js file included just type in the browser's console:

```javascript
socialid.version;
```

## Changelog

### v1.19.0

* Add Login with Apple.
* Add SameSite support for cookies.
* Add [socialid.connectionStorage.init](https://dev.socialidnow.com/index.php?title=Socialid.connectionStorage) JS API.
* Add support to Login APIs to use connection storage.
* Change default connection storage for Safari browsers to use cookies.
* Fix comments sharing.

### v1.18.0

* Add Login with Instagram.

### v1.17.0

* Update translations.
* Improve widgets.
* Replace "Login with Google+" by "Login with Google"

### v1.16.0

* Add [socialid.login.startSession](https://dev.socialidnow.com/index.php?title=Socialid.login.startSession) JS API.

### v1.15.0

* Remove [Social-ID Selfie](https://dev.socialidnow.com/index.php?title=Selfie_Javascript_APIs) Javascript APIs (deprecated).

### v1.14.0

* Add support to send errors to redirect URIs for [login](https://dev.socialidnow.com/index.php?title=Socialid.login.startLogin) and [connect](https://dev.socialidnow.com/index.php?title=Socialid.login.startConnect) flows.

### v1.13.0

* Add [socialid.login.getConnectionStatus](https://dev.socialidnow.com/index.php?title=Socialid.login.getConnectionStatus) JS API.
* Add [socialid.login.updateUserData](https://dev.socialidnow.com/index.php?title=Socialid.login.updateUserData) JS API.
* Add [Rule Engine](https://dev.socialidnow.com/index.php?title=Campaign_Engine_Javascript_APIs) Javascript APIs.
* Support Connection of new credentials using redirect mode in [socialid.login.init](https://dev.socialidnow.com/index.php?title=Socialid.login.init) and [socialid.login.startConnect](https://dev.socialidnow.com/index.php?title=Socialid.login.startConnect).

### v1.12.0

* Add [Web Push Notification](https://dev.socialidnow.com/index.php?title=Web_Push_Javascript_APIs) Javascript APIs.

### v1.11.0

* Add [socialid.datastore.getObjects](https://dev.socialidnow.com/index.php?title=Socialid.datastore.getObjects) JS API.
* Fix issue for default browser languages without internationalization support.
* General improvements.

### v1.10.0

* Add [socialid.login.extendCredentials](https://dev.socialidnow.com/index.php?title=Socialid.login.extendCredentials) JS API.
* Add [socialid.login.extendFacebookToken](https://dev.socialidnow.com/index.php?title=Socialid.login.extendFacebookToken) JS API.
* General improvements.

### v1.9.0

* Add [socialid.login.getConnectionStatus](https://dev.socialidnow.com/index.php?title=Socialid.login.getConnectionStatus) JS API.

### v1.8.0

* Add scope option to [socialid.login.init](https://dev.socialidnow.com/index.php?title=Socialid.login.init) JS API.

### v1.7.0

* Add redirectURI option to [socialid.login.init](https://dev.socialidnow.com/index.php?title=Socialid.login.init) JS API.

### v1.6.0

* Add [socialid.login.deleteMacAddress](https://dev.socialidnow.com/index.php?title=Socialid.login.deleteMacAddress) JS API.
* Add socialid.login.getUserData JS API.
* Fix social login issues on IE 11 and Chrome for iOS.
* Add [Comments & Reviews](https://dev.socialidnow.com/index.php?title=Comments_Reviews_Javascript_APIs) Javascript APIs.

### v1.5.0

* Add support to fields parameter on [socialid.login.getUserInfo](https://dev.socialidnow.com/index.php?title=Socialid.login.getUserInfo) JS API.
* Add onDialogOpen and onDialogClose events on JS API.
* Fix issues.

### v1.4.0

* Add login_token attribute to [socialid.login.loginUserToken](https://dev.socialidnow.com/index.php?title=Socialid.login.loginUserToken) JS API response.
* Add picture_url and user_id attributes to [socialid.login.getUserInfo](https://dev.socialidnow.com/index.php?title=Socialid.login.getUserInfo) JS API response.
* Add socialid.login.clusteringFeatures JS API.

### v1.3.0

* Change socialid.selfie.posts parameters to support search for all hashtags.
* Add [socialid.selfie.getPostInfo()](https://dev.socialidnow.com/index.php?title=Socialid.selfie.getPostInfo) API.
* Update Facebook JS SDK to support Graph API v2.0.

### v1.2.0

* Add [Social-ID Selfie](https://dev.socialidnow.com/index.php?title=Selfie_Javascript_APIs) Javascript APIs.

### v1.1.0

* Add "redirect" login type for Social Login. With this option it's possible to use the social login flow with redirects only (website > socialid > social network > socialid > website callback), without popups.

### v1.0.2

* Support to Google+ on Social Login and Social Connect widgets.

### v1.0.1

* The Javascript API now can be hosted on any domain, including CDNs.
