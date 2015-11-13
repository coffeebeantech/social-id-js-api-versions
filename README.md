# social-id-js-api-versions

Tracking of Social-ID Marketing Platform Javascript API versions and changelog.

## Current version

  1.3.0

## Current url

  https://app.socialidnow.com/assets/api/socialid.js

## Check version

In a web page with the socialid.js file included just type in the browser's console:

```javascript
socialid.version;
```

## Changelog

### v1.3.0

* Change socialid.selfie.posts parameters to support search for all hashtags.
* Add socialid.selfie.getPostInfo() API.
* Update Facebook JS SDK to support Graph API v2.0.

### v1.2.0

* Add Javascript APIs to the new Social-ID Selfie feature. See documentation: http://dev.socialidnow.com/index.php/Selfie_Javascript_APIs

### v1.1.0

* Add "redirect" login type for Social Login. With this option it's possible to use the social login flow with redirects only (website > socialid > social network > socialid > website callback), without popups.

### v1.0.2

* Support to Google+ on Social Login and Social Connect widgets.

### v1.0.1

* The Javascript API now can be hosted on any domain, including CDNs.
