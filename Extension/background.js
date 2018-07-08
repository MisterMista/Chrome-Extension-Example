//Listener for browser action click
chrome.browserAction.onClicked.addListener(function(tab) {
    //Sends a JSON message to the current tab.
    //The JSON data that is sent is arbitrary and can be anything
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});

//message listener
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.message === "open_new_tab") {
            chrome.tabs.create({"url": request.url});
        }
    }
)
