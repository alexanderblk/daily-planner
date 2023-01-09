// Get current date and time
const currentDate = new Date();
const currentHour = currentDate.getHours();

// Set the text of the current day element
const currentDayElement = $("#currentDay");
currentDayElement.text(currentDate.toDateString());

// Get all time block elements
const timeBlocks = $(".time-block");

// Add a class to each time block element based on its current time
timeBlocks.each((index, timeBlock) => {
    const hour = parseInt(timeBlock.id.split("-")[1]);

    if (hour < currentHour) {
        $(timeBlock).addClass("past");
    } else if (hour === currentHour) {
        $(timeBlock).addClass("present");
    } else {
        $(timeBlock).addClass("future");
    }
});

// Add an event listener to each save button
const saveButtons = $(".saveBtn");
saveButtons.on("click", event => {
    // Get the text area and button elements
    const textArea = $(event.target).prev();
    const hour = textArea.prev().text();

    // Save the text in local storage
    localStorage.setItem(hour, textArea.val());
});

// Load saved text from local storage
timeBlocks.each((index, timeBlock) => {
    const hour = $(timeBlock).find(".hour").text();
    const textArea = $(timeBlock).find("textarea");
    textArea.val(localStorage.getItem(hour));
});
