# social-id-js-api-versions

Tracking of Social-ID Marketing Platform Javascript API versions and changelog.

## Current version

  1.11.0

## Current url

  https://app.socialidnow.com/assets/api/socialid.js

## Check version

In a web page with the socialid.js file included just type in the browser's console:

```javascript
socialid.version;
```

## Changelog

### v1.11.0

* Add socialid.datastore.getObjects JS API. See documentation: http://dev.socialidnow.com/index.php?title=Socialid.datastore.getObjects
* Fix issue for default browser languages without internationalization support.
* General improvements.

### v1.10.0

* Add socialid.login.extendCredentials JS API. See documentation: http://dev.socialidnow.com/index.php?title=Socialid.login.extendCredentials
* Add socialid.login.extendFacebookToken JS API. See documentation: http://dev.socialidnow.com/index.php?title=Socialid.login.extendFacebookToken
* General improvements.

### v1.9.0

* Add socialid.login.getConnectionStatus JS API. See documentation: http://dev.socialidnow.com/index.php?title=Socialid.login.getConnectionStatus

### v1.8.0

* Add scope option to socialid.login.init JS API. See documentation: http://dev.socialidnow.com/index.php?title=Socialid.login.init

### v1.7.0

* Add redirectURI option to socialid.login.init JS API. See documentation: http://dev.socialidnow.com/index.php?title=Socialid.login.init

### v1.6.0

* Add socialid.login.deleteMacAddress JS API. See documentation: http://dev.socialidnow.com/index.php?title=Socialid.login.deleteMacAddress
* Add socialid.login.getUserData JS API.
* Fix social login issues on IE 11 and Chrome for iOS.
* Add Javascript APIs to the new Comments & Reviews feature. See documentation: http://dev.socialidnow.com/index.php?title=Comments_Reviews_Javascript_APIs

### v1.5.0

* Add support to fields parameter on socialid.login.getUserInfo JS API.
* Add onDialogOpen and onDialogClose events on JS API.
* Fix issues.

### v1.4.0

* Add login_token attribute to socialid.login.loginUserToken JS API response.
* Add picture_url and user_id attributes to socialid.login.getUserInfo JS API response.
* Add socialid.login.clusteringFeatures JS API.

### v1.3.0

* Change socialid.selfie.posts parameters to support search for all hashtags.
* Add socialid.selfie.getPostInfo() API.
* Update Facebook JS SDK to support Graph API v2.0.

### v1.2.0

* Add Javascript APIs to the new Social-ID Selfie feature. See documentation: http://dev.socialidnow.com/index.php?title=Selfie_Javascript_APIs

### v1.1.0

* Add "redirect" login type for Social Login. With this option it's possible to use the social login flow with redirects only (website > socialid > social network > socialid > website callback), without popups.

### v1.0.2

* Support to Google+ on Social Login and Social Connect widgets.

### v1.0.1

* The Javascript API now can be hosted on any domain, including CDNs.
