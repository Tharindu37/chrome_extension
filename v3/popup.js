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
  resultDiv.innerHTML = ""; // Clear previous results

  request.tweets.forEach((tweet, index) => {
    let tweetHTML = `
      <div style="margin-bottom: 20px;">
        <h3>Tweet ${index + 1}</h3>
        <p><strong>User:</strong> ${tweet.username}</p>
        <p><strong>Text:</strong> ${tweet.text}</p>
        <p><strong>Timestamp:</strong> ${tweet.timestamp}</p>
        <h4>Images:</h4>
    `;

    tweet.images.forEach((imgSrc, imgIndex) => {
      tweetHTML += `
        <div>
          <img src="${imgSrc}" alt="Image ${imgIndex + 1}" width="100"><br>
          <a href="${imgSrc}" download="tweet_image_${index + 1}_${
        imgIndex + 1
      }.jpg">Download Image ${imgIndex + 1}</a>
        </div>
        <br>
      `;
    });

    tweetHTML += "</div>";
    resultDiv.innerHTML += tweetHTML;
  });
});
