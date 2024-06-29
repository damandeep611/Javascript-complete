// This is the API key for accessing the Pexels API. It should be kept private.
// const apiKey = "Enter api key here for pexels api";

// This object maps the IDs of your HTML img elements to their corresponding Pexels photo IDs
const imageIds = {
  everest: "4360449",
  mountain: "20529370",
  fuji: "1571746",
  jeep: "758744",
  surf: "165505",
  sunset: "13286823",
};

// This is the main function that will update all the image sources
async function updateImageSources() {
  // This loop goes through each entry in the imageIds object
  for (let [imgId, pexelsId] of Object.entries(imageIds)) {
    try {
      // Log which image we're currently processing
      console.log(`Fetching image with ID: ${pexelsId}`);

      // Make a request to the Pexels API for this specific image
      const response = await fetch(
        `https://api.pexels.com/v1/photos/${pexelsId}`,
        {
          headers: {
            Authorization: apiKey, // Include the API key in the request
          },
        }
      );

      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Parse the JSON data from the response
      const data = await response.json();
      console.log(`Data received for image ${pexelsId}:`, data);

      // Check if the medium-sized image URL exists in the response
      if (!data.src || !data.src.medium) {
        console.error(`No medium URL found for image ${pexelsId}`);
        continue; // Skip to the next image if there's no medium URL
      }

      // Get the URL for the medium-sized image
      const mediumUrl = data.src.medium;

      // Find the img element in the HTML using its ID
      const img = document.getElementById(imgId);
      if (img) {
        // Update the src attribute of the img element with the new URL
        img.src = mediumUrl;
        console.log(`Updated src for image ${imgId}`);
      } else {
        // Log an error if we can't find the img element
        console.error(`No img element found with ID ${imgId}`);
      }
    } catch (error) {
      // If anything goes wrong, log the error
      console.error(`Error processing image ${pexelsId}:`, error);
    }
  }
}

// This code runs when the webpage has finished loading
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  // Call our main function to update the images
  updateImageSources();
});
// js chai and code
document.querySelector("#images").addEventListener("click", function (e) {
  console.log(e.target.tagName);
  if (e.target.tagName === "IMG") {
    console.log(e.target.id);
    let removeIt = e.target.parentNode;
    removeIt.remove();
  }
});
