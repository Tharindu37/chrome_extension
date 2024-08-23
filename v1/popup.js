document.getElementById("extract-btn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ["content.js"],
    });
  });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<h3>Images:</h3><p>${request.images.join(
    "<br>"
  )}</p><h3>Text:</h3><p>${request.text}</p>`;
});
