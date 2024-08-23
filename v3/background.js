chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Images:", request.images);
  console.log("Text:", request.text);
  // You can send this data to your Python server if needed
});
