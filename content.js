chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // modify url and open that from google cache
  if (message.action === "mediumReader" && message && message.link) {
    window.open( `http://webcache.googleusercontent.com/search?q=cache:${message.link}`,'_blank');
  }
});