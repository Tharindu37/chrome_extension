document.getElementById("start").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        files: ["contentScript.js"],
      },
      () => {
        console.log("Script injected into the tab"); // Confirmation log
      }
    );
  });
});
