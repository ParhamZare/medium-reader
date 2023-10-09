chrome.runtime.onInstalled.addListener(() => {
  // Right-click context menu item
  chrome.contextMenus.create({
    id: "mediumReader",
    title: "Read Article",
    contexts: ["link"]  // Specify "link" context here
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "mediumReader") {
    // Send a message to content.js to modify the link
    chrome.tabs.sendMessage(tab.id, { action: "mediumReader", link: info.linkUrl });
  }
});