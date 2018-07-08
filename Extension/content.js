//display an alert on page load
//alert("Chrome Extension test.")

//prints first page link to console
//var firstHref = $("a[href^='http']").eq(0).attr("href");
//console.log(firstHref);

//adds a message listener
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.message === "clicked_browser_action") {
            alert("Browser action clicked.")

            var url = "https://en.wikipedia.org/wiki/%22Hello,_World!%22_program"
            chrome.runtime.sendMessage({"message": "open_new_tab", "url": url})
        }
    }
);
