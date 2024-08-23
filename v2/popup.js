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

  // Display images with download links
  let imagesHTML = "<h3>Images:</h3>";
  request.images.forEach((imgSrc, index) => {
    imagesHTML += `
      <div>
        <img src="${imgSrc}" alt="Image ${index + 1}" width="100"><br>
        <a href="${imgSrc}" download="image_${index + 1}.jpg">Download Image ${
      index + 1
    }</a>
      </div>
      <br>
    `;
  });

  resultDiv.innerHTML = imagesHTML;

  // Display extracted text
  resultDiv.innerHTML += `<h3>Text:</h3><p>${request.text}</p>`;
});
