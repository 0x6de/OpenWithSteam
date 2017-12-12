// create Menu 'Open with steam' on steam app links
browser.contextMenus.create({
    id: "steam-open",
    title: "Open with Steam",
    contexts: ["link"],
    targetUrlPatterns: ["http://store.steampowered.com/app/*"]
});

// click event listener
browser.contextMenus.onClicked.addListener(function(info, tab) {
  switch (info.menuItemId) {
    case "steam-open":
      const safeUrl = escapeHTML(info.linkUrl);
      UrlParts = safeUrl.split("/");
      // get the steam appid from safeUrl
      var AppId = UrlParts[4];
      // set the steam browser protocol link with the correct appid
      var InstallUrl = "steam://store/" + AppId;
      // open a new tab that launch steam with correct parameters
      var creating = browser.tabs.create({
        url: InstallUrl
      });
      break;
  };
});

function escapeHTML(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;").replace(/'/g, "&#39;")
        .replace(/</g, "&lt;").replace(/>/g, "&gt;");
};
