# Chrome Extension Example
In order to test a chrome extension as you develop, go to your [Chrome extensions page](chrome://extensions) ('chrome://extensions/') and select "developer mode". You can now select "Load unpacked extension" and select the directory with your 'manifest.json' file. The extension is now loaded in your browser. In order for any changes to take effect, you must click the refresh button for the extension in the extensions page.

In order to load jquery, download it and load it before any js files that require it.

## Manifest File
 - All chrome extensions must contain a 'manifest.json' file in the main directly with at least 'manifest_version', 'name', and 'version'.
 - 'manifest_version' should be 2. [Check official Google site here for changes.](https://developer.chrome.com/extensions/manifestVersion)
 - 'version' number must be between 1-4 dot-separated integers each between 0 and 65536.

## Content Scripts
A content script is a js file that is injected into webpages by the extension. Content scripts can only access the current webpage.
 - Content scripts are only ran on sites that fit the [match pattern](https://developer.chrome.com/extensions/match_patterns).

## Background Scripts
Background scripts can do more and have access to more APIs, but they cannot access the current page. Message passing can be used to send data between content scripts and background scripts.

## Browser Action
An extension can have an icon by the address bar, which is a browser action. You can interface with your application through the icon. In order to use this, you must set up message passing.

## Message Passing
Message passing allows content scripts and background scripts to communicate.
