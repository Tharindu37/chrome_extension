console.log("Script injected"); // This will confirm the script is running

function addButtonsToImages() {
  const images = document.querySelectorAll("img");
  console.log(images); // This will log the list of images found on the page

  images.forEach((image) => {
    // Create the button
    const button = document.createElement("button");
    button.textContent = "Get URL";
    button.style.position = "absolute";
    button.style.zIndex = "1000";
    button.style.background = "rgba(255, 255, 255, 0.7)";
    button.style.border = "1px solid black";
    button.style.padding = "5px";
    button.style.cursor = "pointer";

    // Position the button on top of the image
    button.style.left = `${image.offsetLeft}px`;
    button.style.top = `${image.offsetTop}px`;
    button.style.transform = "translate(-50%, -50%)";

    // Add click event to the button
    button.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent event from bubbling up
      event.preventDefault(); // Prevent default event behavior
      console.log(image.src); // Print the image URL to the console
    });

    // Add the button to the page
    document.body.appendChild(button);
  });
}

// Run the function to add buttons to images
addButtonsToImages();
