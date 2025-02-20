 
const courses = [
    { name: "Programming in JavaScript", prereqs: "None" },
    { name: "Python", prereqs: "Programming in JavaScript" },
    { name: "Web Development", prereqs: "Programming in JavaScript" },
    { name: "Cyber Security", prereqs: "None" }
];

function displayCourses() {
    const courseList = document.getElementById("course-list");
    courseList.innerHTML = "";
    courses.forEach((course, index) => {
        const div = document.createElement("div");
        div.className = "course";
        div.textContent = course.name;
        div.draggable = true;
        div.id = `course-${index}`;
        div.addEventListener("click", () => showDetails(course));
        div.addEventListener("dragstart", drag);
        courseList.appendChild(div);
    });
}

function showDetails(course) {
    document.getElementById("course-details").textContent = `Course: ${course.name}, Prerequisites: ${course.prereqs}`;
}

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    const courseId = event.dataTransfer.getData("text");
    const courseElement = document.getElementById(courseId);
    if (event.target.classList.contains("section")) {
        event.target.appendChild(courseElement);
    }
}

displayCourses();
