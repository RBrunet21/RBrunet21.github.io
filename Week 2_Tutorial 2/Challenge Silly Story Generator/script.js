// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

// Get references to the DOM elements
const customName = document.getElementById('custom-name');
const randomize = document.getElementById('randomize');
const story = document.getElementById('story');

// Function to randomly choose an item from an array
function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

// 2. RAW TEXT STRINGS
const storyText = "Once upon a time, :insertx: was walking through the forest when they stumbled upon a :inserty:. It was a strange sight, and they couldn't believe their eyes. Suddenly, a :insertz: appeared and scared them half to death!";

const insertX = ["Bob", "Alice", "Charlie", "Sam"];
const insertY = ["dragon", "wizard", "pirate", "unicorn"];
const insertZ = ["zombie", "alien", "ghost", "monster"];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    // Get random values from arrays
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    // Replace placeholders in the story text
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);

    // If a custom name is entered, replace "Bob" with the custom name
    if (customName.value !== "") {
        const name = customName.value;
        newStory = newStory.replace("Bob", name);
    }

    // Check if UK units are selected
    const ukRadio = document.getElementById('uk');
    if (ukRadio.checked) {
        // Convert units (weights and temperatures)
        const weight = Math.round(300 / 14) + " stone";  // 1 stone = 14 pounds
        const temperature = Math.round((94 - 32) * 5 / 9) + " centigrade"; // Convert F to C

        // Replace units in the story
        newStory = newStory.replace("94 fahrenheit", temperature);
        newStory = newStory.replace("300 pounds", weight);
    }

    // Display the new story in the paragraph
    story.textContent = newStory;
}
