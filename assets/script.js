$(document).ready(function() {
    // 1. Add a listener for click events on the save button.
    $(".saveBtn").on("click", function() {
        let hourId = $(this).parent().attr("id"); // Gets the id like "hour-9"
        let textareaValue = $(this).siblings(".description").val(); // Gets the content of the textarea
        localStorage.setItem(hourId, textareaValue); // Saves the content in localStorage with key as the hourId
    });

    // 2. Apply the past, present, or future class to each time block.
    let currentHour = dayjs().hour(); // Gets the current hour using dayjs
    console.log(currentHour);
    $(".time-block").each(function() {
        let blockHour = parseInt($(this).attr("id").split("-")[1]); // Extracts the hour from the id (like 9 from "hour-9")
        console.log(blockHour);
        console.log(this);
        if (blockHour < currentHour) {
            // The "past" class adds a gray background color
            $(this).addClass("past");
        } else if (blockHour === currentHour) {
            // The "present" class adds a red background color. 
            $(this).removeClass("past").addClass("present");
        } else {
            // The "future" class adds a green background color.
            $(this).removeClass("past").addClass("future");
        }
    });

    // 3. Get any user input saved in localStorage and set the values of the corresponding textarea elements.
    $(".time-block").each(function() {
        let hourId = $(this).attr("id");
        let savedText = localStorage.getItem(hourId); // Gets the saved text from localStorage based on the hourId
        if (savedText) {
            $(this).find(".description").val(savedText); // Sets the value to the textarea
        }
    });

    // 4. Display the current date in the header of the page.
    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY")); // Uses dayjs to format the date

});
