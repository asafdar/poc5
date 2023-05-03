const form = document.querySelector('form');
const videoUrl = document.querySelector('#video-url');
const transcriptContainer = document.querySelector('#transcript-container');

// Add an event listener to the submit button that will retrieve the video transcript from the YouTube Data API.

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get video ID from YouTube video URL
    const videoId = videoUrl.value.split('v=')[1];

    // Retrieve transcript from YouTube Data API

    // // Note that you will need to replace "YOUR_API_KEY" with your actual YouTube Data API key
    // // Also, remember to include the API key in your API request. 
    // // This code uses the YouTube Data API version 3.0, so make sure your API key has access to that version.
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=AIzaSyCJUpIiAH6p_d_pMqKM-DPLSvUp4hXO2-8`, true);
    xhr.onload = () => {
        if (xhr.status === 200) {
            const transcript = JSON.parse(xhr.responseText).items[0].snippet.localized.title;
            // Display transcript on webpage
            const transcriptElement = document.createElement('p');
            transcriptElement.textContent = transcript;
            transcriptContainer.innerHTML = '';
            transcriptContainer.appendChild(transcriptElement);
        } else {
            console.error('Error retrieving transcript');
        }
    };
    xhr.open('GET', `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=AIzaSyCJUpIiAH6p_d_pMqKM-DPLSvUp4hXO2-8`, true);

    xhr.send();
    // // In order to use the YouTube Data API, you will need to obtain an API key and replace "YOUR_API_KEY" in the code above with your actual API key.
});