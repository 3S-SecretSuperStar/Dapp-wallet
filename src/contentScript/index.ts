chrome.runtime.sendMessage("From the content script", (res) => {
  console.log(res);
});
