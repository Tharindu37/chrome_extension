const images = Array.from(document.images).map((img) => img.src);
const text = document.body.innerText;

// Send the images and text to the background script
chrome.runtime.sendMessage({ images: images, text: text });
