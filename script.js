// Get current date and time
const currentDate = new Date();
const currentHour = currentDate.getHours();

// Set the text of the current day element
const currentDayElement = document.querySelector("#currentDay");
currentDayElement.textContent = currentDate.toDateString();

// Get all time block elements
const timeBlocks = document.querySelectorAll(".time-block");

// Add a class to each time block element based on its current time
timeBlocks.forEach(timeBlock => {
    const hour = parseInt(timeBlock.id.split("-")[1]);

    if (hour < currentHour) {
        timeBlock.classList.add("past");
    } else if (hour === currentHour) {
        timeBlock.classList.add("present");
    } else {
        timeBlock.classList.add("future");
    }
});

// Add an event listener to each save button
const saveButtons = document.querySelectorAll(".saveBtn");
saveButtons.forEach(saveButton => {
    saveButton.addEventListener("click", event => {
        // Get the text area and button elements
        const textArea = event.target.previousElementSibling;
        const hour = textArea.previousElementSibling.textContent;

        // Save the text in local storage
        localStorage.setItem(hour, textArea.value);
    });
});

// Load saved text from local storage
timeBlocks.forEach(timeBlock => {
    const hour = timeBlock.querySelector(".hour").textContent;
    const textArea = timeBlock.querySelector("textarea");
    textArea.value = localStorage.getItem(hour);
});
