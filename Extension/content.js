//display an alert on page load
alert("Chrome Extension test.")

//prints first page link to console
var firstHref = $("a[href^='http']").eq(0).attr("href");
console.log(firstHref);
