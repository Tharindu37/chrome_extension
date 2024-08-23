// Extract Twitter post details
const tweets = document.querySelectorAll('article[role="article"]');

// Array to store extracted data
const extractedData = [];

tweets.forEach((tweet) => {
  const tweetData = {};

  // Extract tweet text
  const textElement = tweet.querySelector("div[lang]");
  tweetData.text = textElement ? textElement.innerText : "";

  // Extract tweet images (if any)
  const imageElements = tweet.querySelectorAll('img[src*="twimg"]');
  tweetData.images = Array.from(imageElements).map((img) => img.src);

  // Extract username
  const usernameElement = tweet.querySelector('div[role="button"] span span');
  tweetData.username = usernameElement ? usernameElement.innerText : "";

  // Extract timestamp
  const timestampElement = tweet.querySelector("time");
  tweetData.timestamp = timestampElement
    ? timestampElement.getAttribute("datetime")
    : "";

  extractedData.push(tweetData);
});

// Send extracted data to the background script
chrome.runtime.sendMessage({ tweets: extractedData });
