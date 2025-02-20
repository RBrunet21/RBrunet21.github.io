// Declare the array of image filenames
const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const imageAltText = {
    'pic1.jpg': 'Closeup of a blue human eye',
    'pic2.jpg': 'Closeup of a red flower',
    'pic3.jpg': 'Closeup of a green frog',
    'pic4.jpg': 'A mountain landscape',
    'pic5.jpg': 'Ocean waves crashing'
};

// Get references to DOM elements
const thumbBar = document.querySelector('.thumb-bar');
const displayedImg = document.querySelector('.displayed-img');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('button');

// Loop through the array of filenames and create thumbnail images
imageFilenames.forEach((filename) => {
    const newImage = document.createElement('img');
    newImage.src = `images/${filename}`;
    newImage.alt = imageAltText[filename];
    thumbBar.appendChild(newImage);

    // Add click event listener to each thumbnail
    newImage.addEventListener('click', () => {
        displayedImg.src = newImage.src;
        displayedImg.alt = newImage.alt;
    });
});

// Darken/Lighten effect for the full image
btn.addEventListener('click', () => {
    if (btn.classList.contains('dark')) {
        // Change to lighten state
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    } else {
        // Change to darken state
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
});
